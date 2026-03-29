var vZ=Object.defineProperty;var bZ=(_)=>_;function gZ(_,$){this[_]=bZ.bind(null,$)}var mZ=(_,$)=>{for(var j in $)vZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:gZ.bind($,j)})};var O8,F1,t3,uZ,C4,u3,e3,_2,$2,D6,F6,z6,j2,z8={},H8=[],hZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,D8=Array.isArray;function W4(_,$){for(var j in $)_[j]=$[j];return _}function A6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function A8(_,$,j){var Z,Y,Q,q={};for(Q in $)Q=="key"?Z=$[Q]:Q=="ref"?Y=$[Q]:q[Q]=$[Q];if(arguments.length>2&&(q.children=arguments.length>3?O8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Q in _.defaultProps)q[Q]===void 0&&(q[Q]=_.defaultProps[Q]);return L8(_,q,Z,Y,null)}function L8(_,$,j,Z,Y){var Q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++t3:Y,__i:-1,__u:0};return Y==null&&F1.vnode!=null&&F1.vnode(Q),Q}function E8(_){return _.children}function N5(_,$){this.props=_,this.context=$}function V5(_,$){if($==null)return _.__?V5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?V5(_):null}function pZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],Q=W4({},$);Q.__v=$.__v+1,F1.vnode&&F1.vnode(Q),E6(_.__P,Q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?V5($):j,!!(32&$.__u),Y),Q.__v=$.__v,Q.__.__k[Q.__i]=Q,q2(Z,Q,Y),$.__e=$.__=null,Q.__e!=j&&Z2(Q)}}function Z2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),Z2(_)}function H6(_){(!_.__d&&(_.__d=!0)&&C4.push(_)&&!J8.__r++||u3!=F1.debounceRendering)&&((u3=F1.debounceRendering)||e3)(J8)}function J8(){try{for(var _,$=1;C4.length;)C4.length>$&&C4.sort(_2),_=C4.shift(),$=C4.length,pZ(_)}finally{C4.length=J8.__r=0}}function Y2(_,$,j,Z,Y,Q,q,G,K,X,N){var V,U,O,M,I,E,J,D=Z&&Z.__k||H8,k=$.length;for(K=cZ(j,$,D,K,k),V=0;V<k;V++)(O=j.__k[V])!=null&&(U=O.__i!=-1&&D[O.__i]||z8,O.__i=V,E=E6(_,O,U,Y,Q,q,G,K,X,N),M=O.__e,O.ref&&U.ref!=O.ref&&(U.ref&&M6(U.ref,null,O),N.push(O.ref,O.__c||M,O)),I==null&&M!=null&&(I=M),(J=!!(4&O.__u))||U.__k===O.__k?K=Q2(O,K,_,J):typeof O.type=="function"&&E!==void 0?K=E:M&&(K=M.nextSibling),O.__u&=-7);return j.__e=I,K}function cZ(_,$,j,Z,Y){var Q,q,G,K,X,N=j.length,V=N,U=0;for(_.__k=Array(Y),Q=0;Q<Y;Q++)(q=$[Q])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Q]=L8(null,q,null,null,null):D8(q)?q=_.__k[Q]=L8(E8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Q]=L8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Q]=q,K=Q+U,q.__=_,q.__b=_.__b+1,G=null,(X=q.__i=lZ(q,j,K,V))!=-1&&(V--,(G=j[X])&&(G.__u|=2)),G==null||G.__v==null?(X==-1&&(Y>N?U--:Y<N&&U++),typeof q.type!="function"&&(q.__u|=4)):X!=K&&(X==K-1?U--:X==K+1?U++:(X>K?U--:U++,q.__u|=4))):_.__k[Q]=null;if(V)for(Q=0;Q<N;Q++)(G=j[Q])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=V5(G)),X2(G,G));return Z}function Q2(_,$,j,Z){var Y,Q;if(typeof _.type=="function"){for(Y=_.__k,Q=0;Y&&Q<Y.length;Q++)Y[Q]&&(Y[Q].__=_,$=Q2(Y[Q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=V5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function lZ(_,$,j,Z){var Y,Q,q,G=_.key,K=_.type,X=$[j],N=X!=null&&(2&X.__u)==0;if(X===null&&G==null||N&&G==X.key&&K==X.type)return j;if(Z>(N?1:0)){for(Y=j-1,Q=j+1;Y>=0||Q<$.length;)if((X=$[q=Y>=0?Y--:Q++])!=null&&(2&X.__u)==0&&G==X.key&&K==X.type)return q}return-1}function h3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||hZ.test($)?j:j+"px"}function U8(_,$,j,Z,Y){var Q,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||h3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||h3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Q=$!=($=$.replace($2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Q]=j,j?Z?j.u=Z.u:(j.u=D6,_.addEventListener($,Q?z6:F6,Q)):_.removeEventListener($,Q?z6:F6,Q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function p3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=D6++;else if($.t<j.u)return;return j(F1.event?F1.event($):$)}}}function E6(_,$,j,Z,Y,Q,q,G,K,X){var N,V,U,O,M,I,E,J,D,k,i,p,s,e,f,y=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),Q=[G=$.__e=j.__e]),(N=F1.__b)&&N($);_:if(typeof y=="function")try{if(J=$.props,D=y.prototype&&y.prototype.render,k=(N=y.contextType)&&Z[N.__c],i=N?k?k.props.value:N.__:Z,j.__c?E=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new y(J,i):($.__c=V=new N5(J,i),V.constructor=y,V.render=iZ),k&&k.sub(V),V.state||(V.state={}),V.__n=Z,U=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&y.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=W4({},V.__s)),W4(V.__s,y.getDerivedStateFromProps(J,V.__s))),O=V.props,M=V.state,V.__v=$,U)D&&y.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&y.getDerivedStateFromProps==null&&J!==O&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,i),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,i)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),H8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,i),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(O,M,I)})}if(V.context=i,V.props=J,V.__P=_,V.__e=!1,p=F1.__r,s=0,D)V.state=V.__s,V.__d=!1,p&&p($),N=V.render(V.props,V.state,V.context),H8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,p&&p($),N=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++s<25);V.state=V.__s,V.getChildContext!=null&&(Z=W4(W4({},Z),V.getChildContext())),D&&!U&&V.getSnapshotBeforeUpdate!=null&&(I=V.getSnapshotBeforeUpdate(O,M)),e=N!=null&&N.type===E8&&N.key==null?G2(N.props.children):N,G=Y2(_,D8(e)?e:[e],$,j,Z,Y,Q,q,G,K,X),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),E&&(V.__E=V.__=null)}catch(H){if($.__v=null,K||Q!=null)if(H.then){for($.__u|=K?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;Q[Q.indexOf(G)]=null,$.__e=G}else{for(f=Q.length;f--;)A6(Q[f]);J6($)}else $.__e=j.__e,$.__k=j.__k,H.then||J6($);F1.__e(H,$,j)}else Q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=dZ(j.__e,$,j,Z,Y,Q,q,K,X);return(N=F1.diffed)&&N($),128&$.__u?void 0:G}function J6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(J6))}function q2(_,$,j){for(var Z=0;Z<j.length;Z++)M6(j[Z],j[++Z],j[++Z]);F1.__c&&F1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(Q){Q.call(Y)})}catch(Q){F1.__e(Q,Y.__v)}})}function G2(_){return typeof _!="object"||_==null||_.__b>0?_:D8(_)?_.map(G2):W4({},_)}function dZ(_,$,j,Z,Y,Q,q,G,K){var X,N,V,U,O,M,I,E=j.props||z8,J=$.props,D=$.type;if(D=="svg"?Y="http://www.w3.org/2000/svg":D=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),Q!=null){for(X=0;X<Q.length;X++)if((O=Q[X])&&"setAttribute"in O==!!D&&(D?O.localName==D:O.nodeType==3)){_=O,Q[X]=null;break}}if(_==null){if(D==null)return document.createTextNode(J);_=document.createElementNS(Y,D,J.is&&J),G&&(F1.__m&&F1.__m($,Q),G=!1),Q=null}if(D==null)E===J||G&&_.data==J||(_.data=J);else{if(Q=Q&&O8.call(_.childNodes),!G&&Q!=null)for(E={},X=0;X<_.attributes.length;X++)E[(O=_.attributes[X]).name]=O.value;for(X in E)O=E[X],X=="dangerouslySetInnerHTML"?V=O:X=="children"||(X in J)||X=="value"&&("defaultValue"in J)||X=="checked"&&("defaultChecked"in J)||U8(_,X,null,O,Y);for(X in J)O=J[X],X=="children"?U=O:X=="dangerouslySetInnerHTML"?N=O:X=="value"?M=O:X=="checked"?I=O:G&&typeof O!="function"||E[X]===O||U8(_,X,O,E[X],Y);if(N)G||V&&(N.__html==V.__html||N.__html==_.innerHTML)||(_.innerHTML=N.__html),$.__k=[];else if(V&&(_.innerHTML=""),Y2($.type=="template"?_.content:_,D8(U)?U:[U],$,j,Z,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,Q,q,Q?Q[0]:j.__k&&V5(j,0),G,K),Q!=null)for(X=Q.length;X--;)A6(Q[X]);G||(X="value",D=="progress"&&M==null?_.removeAttribute("value"):M!=null&&(M!==_[X]||D=="progress"&&!M||D=="option"&&M!=E[X])&&U8(_,X,M,E[X],Y),X="checked",I!=null&&I!=_[X]&&U8(_,X,I,E[X],Y))}return _}function M6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){F1.__e(Y,j)}}function X2(_,$,j){var Z,Y;if(F1.unmount&&F1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||M6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Q){F1.__e(Q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&X2(Z[Y],$,j||typeof _.type!="function");j||A6(_.__e),_.__c=_.__=_.__e=void 0}function iZ(_,$,j){return this.constructor(_,j)}function P4(_,$,j){var Z,Y,Q,q;$==document&&($=document.documentElement),F1.__&&F1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Q=[],q=[],E6($,_=(!Z&&j||$).__k=A8(E8,null,[_]),Y||z8,z8,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?O8.call($.childNodes):null,Q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,q),q2(Q,_,q)}function K2(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Q){this.props.value!=Q.value&&Z.forEach(function(q){q.__e=!0,H6(q)})},this.sub=function(Q){Z.add(Q);var q=Q.componentWillUnmount;Q.componentWillUnmount=function(){Z&&Z.delete(Q),q&&q.call(Q)}}),j.children}return $.__c="__cC"+j2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}O8=H8.slice,F1={__e:function(_,$,j,Z){for(var Y,Q,q;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((Q=Y.constructor)&&Q.getDerivedStateFromError!=null&&(Y.setState(Q.getDerivedStateFromError(_)),q=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),q=Y.__d),q)return Y.__E=Y}catch(G){_=G}throw _}},t3=0,uZ=function(_){return _!=null&&_.constructor===void 0},N5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=W4({},this.state),typeof _=="function"&&(_=_(W4({},j),this.props)),_&&W4(j,_),_!=null&&this.__v&&($&&this._sb.push($),H6(this))},N5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),H6(this))},N5.prototype.render=E8,C4=[],e3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_2=function(_,$){return _.__v.__b-$.__v.__b},J8.__r=0,$2=/(PointerCapture)$|Capture$/i,D6=0,F6=p3(!1),z6=p3(!0),j2=0;var T4,L1,L6,c3,W5=0,N2=[],A1=F1,l3=A1.__b,d3=A1.__r,i3=A1.diffed,o3=A1.__c,n3=A1.unmount,s3=A1.__;function B5(_,$){A1.__h&&A1.__h(L1,_,W5||$),W5=0;var j=L1.__H||(L1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function h(_){return W5=1,I6(L2,_)}function I6(_,$,j){var Z=B5(T4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):L2(void 0,$),function(G){var K=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(K,G);K!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=L1,!L1.__f)){var Y=function(G,K,X){if(!Z.__c.__H)return!0;var N=Z.__c.__H.__.filter(function(U){return U.__c});if(N.every(function(U){return!U.__N}))return!Q||Q.call(this,G,K,X);var V=Z.__c.props!==G;return N.some(function(U){if(U.__N){var O=U.__[0];U.__=U.__N,U.__N=void 0,O!==U.__[0]&&(V=!0)}}),Q&&Q.call(this,G,K,X)||V};L1.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:q}=L1;L1.componentWillUpdate=function(G,K,X){if(this.__e){var N=Q;Q=void 0,Y(G,K,X),Q=N}q&&q.call(this,G,K,X)},L1.shouldComponentUpdate=Y}return Z.__N||Z.__}function u(_,$){var j=B5(T4++,3);!A1.__s&&k6(j.__H,$)&&(j.__=_,j.u=$,L1.__H.__h.push(j))}function g5(_,$){var j=B5(T4++,4);!A1.__s&&k6(j.__H,$)&&(j.__=_,j.u=$,L1.__h.push(j))}function T(_){return W5=5,v0(function(){return{current:_}},[])}function V2(_,$,j){W5=6,g5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function v0(_,$){var j=B5(T4++,7);return k6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function S(_,$){return W5=8,v0(function(){return _},$)}function W2(_){var $=L1.context[_.__c],j=B5(T4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(L1)),$.props.value):_.__}function B2(_,$){A1.useDebugValue&&A1.useDebugValue($?$(_):_)}function U2(_){var $=B5(T4++,10),j=h();return $.__=_,L1.componentDidCatch||(L1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function oZ(){for(var _;_=N2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(F8),$.__h.some(O6),$.__h=[]}catch(j){$.__h=[],A1.__e(j,_.__v)}}}A1.__b=function(_){L1=null,l3&&l3(_)},A1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),s3&&s3(_,$)},A1.__r=function(_){d3&&d3(_),T4=0;var $=(L1=_.__c).__H;$&&(L6===L1?($.__h=[],L1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(F8),$.__h.some(O6),$.__h=[],T4=0)),L6=L1},A1.diffed=function(_){i3&&i3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(N2.push($)!==1&&c3===A1.requestAnimationFrame||((c3=A1.requestAnimationFrame)||nZ)(oZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),L6=L1=null},A1.__c=function(_,$){$.some(function(j){try{j.__h.some(F8),j.__h=j.__h.filter(function(Z){return!Z.__||O6(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],A1.__e(Z,j.__v)}}),o3&&o3(_,$)},A1.unmount=function(_){n3&&n3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{F8(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&A1.__e($,j.__v))};var r3=typeof requestAnimationFrame=="function";function nZ(_){var $,j=function(){clearTimeout(Z),r3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);r3&&($=requestAnimationFrame(j))}function F8(_){var $=L1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L1=$}function O6(_){var $=L1;_.__c=_.__(),L1=$}function k6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function L2(_,$){return typeof $=="function"?$(_):$}var F2=function(_,$,j,Z){var Y;$[0]=0;for(var Q=1;Q<$.length;Q++){var q=$[Q++],G=$[Q]?($[0]|=q?1:2,j[$[Q++]]):$[++Q];q===3?Z[0]=G:q===4?Z[1]=Object.assign(Z[1]||{},G):q===5?(Z[1]=Z[1]||{})[$[++Q]]=G:q===6?Z[1][$[++Q]]+=G+"":q?(Y=_.apply(G,F2(_,G,j,["",null])),Z.push(Y),G[0]?$[0]|=2:($[Q-2]=0,$[Q]=Y)):Z.push(G)}return Z},a3=new Map;function sZ(_){var $=a3.get(this);return $||($=new Map,a3.set(this,$)),($=F2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,Q=1,q="",G="",K=[0],X=function(U){Q===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,U,q):Q===3&&(U||q)?(K.push(3,U,q),Q=2):Q===2&&q==="..."&&U?K.push(4,U,0):Q===2&&q&&!U?K.push(5,0,!0,q):Q>=5&&((q||!U&&Q===5)&&(K.push(Q,0,q,Y),Q=6),U&&(K.push(Q,U,0,Y),Q=6)),q=""},N=0;N<j.length;N++){N&&(Q===1&&X(),X(N));for(var V=0;V<j[N].length;V++)Z=j[N][V],Q===1?Z==="<"?(X(),K=[K],Q=3):q+=Z:Q===4?q==="--"&&Z===">"?(Q=1,q=""):q=Z+q[0]:G?Z===G?G="":q+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(X(),Q=1):Q&&(Z==="="?(Q=5,Y=q,q=""):Z==="/"&&(Q<5||j[N][V+1]===">")?(X(),Q===3&&(K=K[0]),Q=K,(K=K[0]).push(2,0,Q),Q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),Q=2):q+=Z),Q===3&&q==="!--"&&(Q=4,K=K[0])}return X(),K}(_)),$),arguments,[])).length>1?$:$[0]}var L=sZ.bind(A8);var $_={};mZ($_,{uploadWorkspaceFile:()=>I8,uploadMedia:()=>w6,updateWorkspaceFile:()=>UY,submitAdaptiveCardAction:()=>f6,streamSidePrompt:()=>VY,stopAutoresearch:()=>qY,steerAgentQueueItem:()=>NY,setWorkspaceVisibility:()=>c5,setAgentThoughtVisibility:()=>g6,sendPeerAgentMessage:()=>ZY,sendAgentMessage:()=>n4,searchPosts:()=>T6,restoreChatBranch:()=>jY,respondToAgentRequest:()=>M8,renameWorkspaceFile:()=>c6,renameChatBranch:()=>_Y,removeAgentQueueItem:()=>KY,pruneChatBranch:()=>$Y,moveWorkspaceEntry:()=>l6,getWorkspaceTree:()=>h5,getWorkspaceRawUrl:()=>k8,getWorkspaceFile:()=>p5,getWorkspaceDownloadUrl:()=>C8,getWorkspaceBranch:()=>BY,getTimeline:()=>o4,getThumbnailUrl:()=>m6,getThread:()=>P6,getPostsByHashtag:()=>C6,getMediaUrl:()=>v_,getMediaText:()=>u6,getMediaInfo:()=>U5,getMediaBlob:()=>WY,getChatBranches:()=>eZ,getAutoresearchStatus:()=>QY,getAgents:()=>y6,getAgentThought:()=>b6,getAgentStatus:()=>R6,getAgentQueueState:()=>XY,getAgentModels:()=>u5,getAgentContext:()=>YY,getActiveChatAgents:()=>x6,forkChatBranch:()=>m5,dismissAutoresearch:()=>GY,deleteWorkspaceFile:()=>d6,deletePost:()=>S6,createWorkspaceFile:()=>p6,createReply:()=>tZ,createPost:()=>aZ,attachWorkspaceFile:()=>h6,addToWhitelist:()=>v6,SSEClient:()=>T8});async function e0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function z2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Q of $)if(Q.startsWith("event:"))j=Q.slice(6).trim()||"message";else if(Q.startsWith("data:"))Z.push(Q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function rZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:q,done:G}=await j.read();if(G)break;Y+=Z.decode(q,{stream:!0});let K=Y.split(`

`);Y=K.pop()||"";for(let X of K){let N=z2(X);if(N)$(N.event,N.data)}}Y+=Z.decode();let Q=z2(Y);if(Q)$(Q.event,Q.data)}async function o4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return e0(Z)}async function C6(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function T6(_,$=50,j=0,Z=null,Y="current",Q=null){let q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=Y?`&scope=${encodeURIComponent(Y)}`:"",K=Q?`&root_chat_jid=${encodeURIComponent(Q)}`:"";return e0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${G}${K}`)}async function P6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return e0(`/thread/${_}${j}`)}async function aZ(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return e0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function tZ(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function S6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return e0(Y,{method:"DELETE"})}async function n4(_,$,j=null,Z=[],Y=null,Q=null){let q=Q?`?chat_jid=${encodeURIComponent(Q)}`:"",G={content:$,thread_id:j,media_ids:Z};if(Y==="auto"||Y==="queue"||Y==="steer")G.mode=Y;return e0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(G)})}async function x6(){return e0("/agent/active-chats")}async function eZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return e0(`/agent/branches${Z}`)}async function m5(_,$={}){return e0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function _Y(_,$={}){return e0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function $Y(_){return e0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function jY(_,$={}){return e0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function ZY(_,$,j,Z="auto",Y={}){let Q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return e0("/agent/peer-message",{method:"POST",body:JSON.stringify(Q)})}async function y6(){return e0("/agent/roster")}async function R6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/status${$}`)}async function YY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/context${$}`)}async function QY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/autoresearch/status${$}`)}async function qY(_=null,$={}){return e0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function GY(_=null){return e0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function XY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/queue-state${$}`)}async function KY(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function NY(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function u5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/models${$}`)}async function w6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function M8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function f6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function VY(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await rZ(j,(Q,q)=>{if($.onEvent?.(Q,q),Q==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Q==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Q==="side_prompt_done")Z=q;else if(Q==="side_prompt_error")Y=q}),Y){let Q=Error(Y?.error||"Side prompt failed");throw Q.payload=Y,Q}return Z}async function v6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function b6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return e0(j)}async function g6(_,$,j){return e0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function v_(_){return`/media/${_}`}function m6(_){return`/media/${_}/thumbnail`}async function U5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function u6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function WY(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function h5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return e0(Z)}async function BY(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return e0($)}async function p5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return e0(Y)}async function UY(_,$){return e0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function h6(_){return e0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function I8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let Q=Y.toString(),q=Q?`/workspace/upload?${Q}`:"/workspace/upload",G=await fetch(""+q,{method:"POST",body:Z});if(!G.ok){let K=await G.json().catch(()=>({error:"Upload failed"})),X=Error(K.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=K.code,X}return G.json()}async function p6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),Q=Error(Y.error||`HTTP ${Z.status}`);throw Q.status=Z.status,Q.code=Y.code,Q}return Z.json()}async function c6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function l6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function d6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return e0($,{method:"DELETE"})}async function c5(_,$=!1){return e0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function k8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function C8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class T8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function P8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function LY(_,$){let j=P8(_),Z=P8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function i6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function o6(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},Q=String($||"").trim().toLowerCase();if(!Q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?Q:`${Y.value}${Q}`,updatedAt:j}}function FY(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,Q=[];for(let q=0;q<j;q+=1)Q.push((Y+q)%j);return Q}function zY(_,$,j=0,Z=(Y)=>Y){let Y=P8($);if(!Y)return-1;let Q=Array.isArray(_)?_:[],q=FY(Q.length,j),G=Q.map((K)=>P8(Z(K)));for(let K of q)if(G[K].startsWith(Y))return K;for(let K of q)if(G[K].includes(Y))return K;return-1}function n6(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let Q=Z(Y[j]);if(LY(Q,$))return j}return zY(Y,$,0,Z)}function J_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function K1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function L5(_,$=!1){let j=J_(_);if(j===null)return $;return j==="true"}function F5(_,$=null){let j=J_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function S8(_){return String(_||"").trim().toLowerCase()}function s6(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return S8($[1]||"")}function HY(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=S8(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function H2(_,$,j={}){let Z=s6($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return HY(_).filter((Q)=>{if(Y&&Q?.chat_jid===Y)return!1;return S8(Q?.agent_name).startsWith(Z)})}function r6(_){let $=S8(_);return $?`@${$} `:""}function J2(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function x8(_){let $=a6(_);return $?`@${$}`:""}function a6(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function y8(_,$=""){let j=String(_||""),Z=a6(j),Y=a6($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:Q,canSubmit:!1,kind:"info",message:`Already using ${Q}.`};if(Z!==j.trim())return{normalized:Z,handle:Q,canSubmit:!0,kind:"info",message:`Will save as ${Q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Q,canSubmit:!0,kind:"success",message:`Saving as ${Q}.`}}function O2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?x8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function JY(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function R8(_,$={}){let j=x8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=JY(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function D2(_,$,j){let Z=x8(_),Y=x8($),Q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Q||"branch"}.`}function OY(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function B4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function w8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return B4(_)?"Compacting context":"Working..."}function DY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function f8(_,$=Date.now()){let j=OY(_);if(j===null)return null;return DY(Math.max(0,$-j))}function o_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:Q="Remove",icon:q="file"}){let G=`${_}-file-pill`,K=`${_}-file-name`,X=`${_}-file-remove`,N=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${G} title=${j||$} onClick=${Y}>
      ${N}
      <span class=${K}>${$}</span>
      ${Z&&L`
        <button
          class=${X}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${Q}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var AY=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function EY({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,Q="Compact context",G=`${Z!=null?`Context: ${A2(Z)} / ${A2(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,X=2*Math.PI*9,N=j/100*X,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${G}
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
                    stroke-dasharray=${`${N} ${X}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function A2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function MY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let X=j[Q];if(/^\s*-\s+/.test(X))Y.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Q);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function IY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let X=j[Q];if(/^\s*-\s+/.test(X)){let N=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)Y.push(N[1])}else if(!X.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Q);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function kY(_){let $=MY(_||""),j=IY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function t6({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let Q=typeof Y?.content==="string"?Y.content:"",q=kY(Q);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Q}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((G)=>L`
                                        <${o_}
                                            key=${"queue-msg-"+G}
                                            prefix="compose"
                                            label=${"msg:"+G}
                                            title=${"Message reference: "+G}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((G)=>{let K=G.split("/").pop()||G;return L`
                                            <${o_}
                                                key=${"queue-file-"+G}
                                                prefix="compose"
                                                label=${K}
                                                title=${G}
                                                onClick=${()=>Z?.(G)}
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
                                onClick=${()=>$?.(Y)}
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
                                onClick=${()=>j?.(Y)}
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
    `}function E2({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:Q,onEnterSearch:q,onExitSearch:G,fileRefs:K=[],onRemoveFileRef:X,onClearFileRefs:N,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:O,activeModel:M=null,modelUsage:I=null,thinkingLevel:E=null,supportsThinking:J=!1,contextUsage:D=null,onContextCompact:k,notificationsEnabled:i=!1,notificationPermission:p="default",onToggleNotifications:s,onModelChange:e,onModelStateChange:f,activeEditorPath:y=null,onAttachEditorFile:H,onOpenFilePill:x,followupQueueItems:c=[],onInjectQueuedFollowup:q0,onRemoveQueuedFollowup:d,onSubmitIntercept:j0,onMessageResponse:_0,onPopOutChat:X0,isAgentActive:V0=!1,activeChatAgents:W0=[],currentChatJid:J0="web:default",connectionStatus:E0="connected",onSetFileRefs:M0,onSetMessageRefs:n0,onSubmitError:y0,onSwitchChat:C0,onRenameSession:s0,isRenameSessionInProgress:r0=!1,onCreateSession:h0,onDeleteSession:t0,onRestoreSession:p0,showQueueStack:j1=!0,statusNotice:z0=null}){let[l0,Z1]=h(""),[q1,K_]=h(""),[E1,_1]=h([]),[p1,k1]=h(!1),[G1,c0]=h([]),[y1,C1]=h(0),[a,B0]=h(!1),[H0,N0]=h([]),[R0,S0]=h(0),[b0,k0]=h(!1),[w0,i0]=h(!1),[D0,g0]=h(!1),[O0,Q0]=h(!1),[w,t]=h([]),[F0,I0]=h(0),[m0,X1]=h(0),[M1,N1]=h(!1),[c1,q4]=h(0),[U_,j_]=h(null),[L_,N_]=h(()=>Date.now()),Y1=T(null),r1=T(null),G4=T(null),g_=T(null),_5=T(null),w4=T(null),g1=T(null),F_=T(null),R1=T({value:"",updatedAt:0}),I1=T(0),V1=T(!1),m_=200,u_=(F)=>{let g=new Set,o=[];for(let l of F||[]){if(typeof l!=="string")continue;let T0=l.trim();if(!T0||g.has(T0))continue;g.add(T0),o.push(T0)}return o},B1=()=>{let F=J_("piclaw_compose_history");if(!F)return[];try{let g=JSON.parse(F);if(!Array.isArray(g))return[];return u_(g)}catch{return[]}},Z_=(F)=>{K1("piclaw_compose_history",JSON.stringify(F))},u0=T(B1()),P1=T(-1),A_=T(""),Y_=l0.trim()||E1.length>0||K.length>0||V.length>0,f4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),r_=typeof window<"u"&&typeof Notification<"u",v4=typeof window<"u"?Boolean(window.isSecureContext):!1,$5=r_&&v4&&p!=="denied",t_=p==="granted"&&i,h_=B4(z0),k5=w8(z0),C5=typeof z0?.detail==="string"&&z0.detail.trim()?z0.detail.trim():"",U1=h_?f8(z0,L_):null,w1=t_?"Disable notifications":"Enable notifications",j5=E1.length>0||K.length>0||V.length>0,E_=E0==="disconnected"?"Reconnecting":String(E0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),Q_=E0==="disconnected"?"Reconnecting":`Connection: ${E_}`,l1=(Array.isArray(W0)?W0:[]).filter((F)=>!F?.archived_at),S1=(()=>{for(let F of Array.isArray(W0)?W0:[]){let g=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(g&&g===J0)return F}return null})(),m1=Boolean(S1&&S1.chat_jid===(S1.root_chat_jid||S1.chat_jid)),J1=v0(()=>{let F=new Set,g=[];for(let o of Array.isArray(W0)?W0:[]){let l=typeof o?.chat_jid==="string"?o.chat_jid.trim():"";if(!l||l===J0||F.has(l))continue;if(!(typeof o?.agent_name==="string"?o.agent_name.trim():""))continue;F.add(l),g.push(o)}return g},[W0,J0]),M_=J1.length>0,I_=M_&&typeof C0==="function",k_=M_&&typeof p0==="function",e_=Boolean(r0||V1.current),q_=!j&&typeof s0==="function"&&!e_,a1=!j&&typeof h0==="function",C_=!j&&typeof t0==="function"&&!m1,X4=!j&&(I_||k_||q_||a1||C_),O1=M||"",_4=J&&E?` (${E})`:"",b4=_4.trim()?`${E}`:"",g4=typeof I?.hint_short==="string"?I.hint_short.trim():"",T_=[b4||null,g4||null].filter(Boolean).join(" • "),m4=[O1?`Current model: ${O1}${_4}`:null,I?.plan?`Plan: ${I.plan}`:null,g4||null,I?.primary?.reset_description||null,I?.secondary?.reset_description||null].filter(Boolean),Z5=w0?"Switching model…":m4.join(" • ")||`Current model: ${O1}${_4} (tap to open model picker)`,p_=(F)=>{if(!F||typeof F!=="object")return;let g=F.model??F.current;if(typeof f==="function")f({model:g??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(g&&typeof e==="function")e(g)},c_=(F)=>{let g=F||Y1.current;if(!g)return;g.style.height="auto",g.style.height=`${g.scrollHeight}px`,g.style.overflowY="hidden"},O4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){B0(!1),c0([]);return}let g=F.toLowerCase().split(" ")[0];if(g.length<1){B0(!1),c0([]);return}let o=AY.filter((l)=>l.name.startsWith(g)||l.name.replace(/-/g,"").startsWith(g.replace(/-/g,"")));if(o.length>0&&!(o.length===1&&o[0].name===g))k0(!1),N0([]),c0(o),C1(0),B0(!0);else B0(!1),c0([])},l_=(F)=>{let g=l0,o=g.indexOf(" "),l=o>=0?g.slice(o):"",T0=F.name+l;Z1(T0),B0(!1),c0([]),requestAnimationFrame(()=>{let D1=Y1.current;if(!D1)return;let x1=T0.length;D1.selectionStart=x1,D1.selectionEnd=x1,D1.focus()})},u4=(F)=>{if(s6(F)==null){k0(!1),N0([]);return}let g=H2(l1,F,{currentChatJid:J0});if(g.length>0&&!(g.length===1&&r6(g[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))B0(!1),c0([]),N0(g),S0(0),k0(!0);else k0(!1),N0([])},d_=(F)=>{let g=r6(F?.agent_name);if(!g)return;Z1(g),k0(!1),N0([]),requestAnimationFrame(()=>{let o=Y1.current;if(!o)return;let l=g.length;o.selectionStart=l,o.selectionEnd=l,o.focus()})},P_=()=>{if(j||!I_&&!k_&&!q_&&!a1&&!C_)return!1;return R1.current={value:"",updatedAt:0},g0(!1),B0(!1),c0([]),k0(!1),N0([]),Q0(!0),!0},T1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!I_&&!k_&&!q_&&!a1&&!C_)return;if(O0){R1.current={value:"",updatedAt:0},Q0(!1);return}P_()},D4=(F)=>{let g=typeof F==="string"?F.trim():"";if(Q0(!1),!g||g===J0){requestAnimationFrame(()=>Y1.current?.focus());return}C0?.(g)},A4=async(F)=>{let g=typeof F==="string"?F.trim():"";if(Q0(!1),!g||typeof p0!=="function"){requestAnimationFrame(()=>Y1.current?.focus());return}try{await p0(g)}catch(o){console.warn("Failed to restore session:",o),requestAnimationFrame(()=>Y1.current?.focus())}},h4=(F)=>{let o=(Array.isArray(F)?F:[]).findIndex((l)=>!l?.disabled);return o>=0?o:0},z1=v0(()=>{let F=[];for(let g of J1){let o=Boolean(g?.archived_at),l=typeof g?.agent_name==="string"?g.agent_name.trim():"",T0=typeof g?.chat_jid==="string"?g.chat_jid.trim():"";if(!l||!T0)continue;F.push({type:"session",key:`session:${T0}`,label:`@${l} — ${T0}${g?.is_active?" active":""}${o?" archived":""}`,chat:g,disabled:o?!k_:!I_})}if(a1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(q_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:e_});if(C_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[J1,k_,I_,a1,q_,C_,e_]),E4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof s0!=="function"||r0||V1.current)return;V1.current=!0,Q0(!1);try{await s0()}catch(g){console.warn("Failed to rename session:",g)}finally{V1.current=!1}requestAnimationFrame(()=>Y1.current?.focus())},Y5=async()=>{if(typeof h0!=="function")return;Q0(!1);try{await h0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>Y1.current?.focus())},u1=async()=>{if(typeof t0!=="function")return;Q0(!1);try{await t0(J0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>Y1.current?.focus())},V_=(F)=>{if(j)K_(F);else Z1(F),O4(F),u4(F);requestAnimationFrame(()=>c_())},$4=(F)=>{let g=j?q1:l0,o=g&&!g.endsWith(`
`)?`
`:"",l=`${g}${o}${F}`.trimStart();V_(l)},p4=(F)=>{let g=F?.command?.model_label;if(g)return g;let o=F?.command?.message;if(typeof o==="string"){let l=o.match(/•\s+([^\n]+?)\s+\(current\)/);if(l?.[1])return l[1].trim()}return null},K4=async(F)=>{if(j||w0)return;i0(!0);try{let g=await n4("default",F,null,[],null,J0),o=p4(g);p_({model:o??M??null,thinking_level:g?.command?.thinking_level,supports_thinking:g?.command?.supports_thinking});try{let l=await u5(J0);if(l)p_(l)}catch{}return _?.(),!0}catch(g){return console.error("Failed to switch model:",g),alert("Failed to switch model: "+g.message),!1}finally{i0(!1)}},M4=async()=>{await K4("/cycle-model")},N4=async(F)=>{if(!F||w0)return;if(await K4(`/model ${F}`))g0(!1)},S_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let g=F.chat;if(g?.archived_at)A4(g.chat_jid);else D4(g.chat_jid);return}if(F.type==="action"){if(F.action==="new"){Y5();return}if(F.action==="rename"){E4();return}if(F.action==="delete")u1()}},z_=(F)=>{F.preventDefault(),F.stopPropagation(),R1.current={value:"",updatedAt:0},Q0(!1),g0((g)=>!g)},I4=async()=>{if(j)return;k?.(),await x_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},c4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return V0?"queue":void 0},x_=async(F,g,o={})=>{let{includeMedia:l=!0,includeFileRefs:T0=!0,includeMessageRefs:D1=!0,clearAfterSubmit:x1=!0,recordHistory:v1=!0}=o||{},V4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:l0,l4=typeof V4==="string"?V4:"";if(!l4.trim()&&(l?E1.length===0:!0)&&(T0?K.length===0:!0)&&(D1?V.length===0:!0))return;B0(!1),c0([]),k0(!1),N0([]),Q0(!1),j_(null);let Q5=l?[...E1]:[],q5=T0?[...K]:[],W_=D1?[...V]:[],i1=l4.trim();if(v1&&i1){let k4=u0.current,H1=u_(k4.filter((j4)=>j4!==i1));if(H1.push(i1),H1.length>200)H1.splice(0,H1.length-200);u0.current=H1,Z_(H1),P1.current=-1,A_.current=""}let G5=()=>{if(l)_1([...Q5]);if(T0)M0?.(q5);if(D1)n0?.(W_);Z1(i1),requestAnimationFrame(()=>c_())};if(x1)Z1(""),_1([]),N?.(),O?.();(async()=>{try{if(await j0?.({content:i1,submitMode:g,fileRefs:q5,messageRefs:W_,mediaFiles:Q5})){_?.();return}let H1=[];for(let H_ of Q5){let d4=await w6(H_);H1.push(d4.id)}let j4=q5.length?`Files:
${q5.map((H_)=>`- ${H_}`).join(`
`)}`:"",G8=W_.length?`Referenced messages:
${W_.map((H_)=>`- message:${H_}`).join(`
`)}`:"",X5=H1.length?`Attachments:
${H1.map((H_,d4)=>{let i4=Q5[d4]?.name||`attachment-${d4+1}`;return`- attachment:${H_} (${i4})`}).join(`
`)}`:"",X8=[i1,j4,G8,X5].filter(Boolean).join(`

`),h1=await n4("default",X8,null,H1,c4(g),J0);if(_0?.(h1),h1?.command){p_({model:h1.command.model_label??M??null,thinking_level:h1.command.thinking_level,supports_thinking:h1.command.supports_thinking});try{let H_=await u5(J0);if(H_)p_(H_)}catch{}}_?.()}catch(k4){if(x1)G5();let H1=k4?.message||"Failed to send message.";j_(H1),y0?.(H1),console.error("Failed to post:",k4)}})()},z=(F)=>{q0?.(F)},C=S((F)=>{if(j||!D0&&!O0||F?.isComposing)return!1;let g=()=>{F.preventDefault?.(),F.stopPropagation?.()},o=()=>{R1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(g(),o(),D0)g0(!1);if(O0)Q0(!1);return!0}if(D0){if(F.key==="ArrowDown"){if(g(),o(),w.length>0)I0((l)=>(l+1)%w.length);return!0}if(F.key==="ArrowUp"){if(g(),o(),w.length>0)I0((l)=>(l-1+w.length)%w.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&w.length>0)return g(),o(),N4(w[Math.max(0,Math.min(F0,w.length-1))]),!0;if(i6(F)&&w.length>0){g();let l=o6(R1.current,F.key);R1.current=l;let T0=n6(w,l.value,F0,(D1)=>D1);if(T0>=0)I0(T0);return!0}}if(O0){if(F.key==="ArrowDown"){if(g(),o(),z1.length>0)X1((l)=>(l+1)%z1.length);return!0}if(F.key==="ArrowUp"){if(g(),o(),z1.length>0)X1((l)=>(l-1+z1.length)%z1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&z1.length>0)return g(),o(),S_(z1[Math.max(0,Math.min(m0,z1.length-1))]),!0;if(i6(F)&&z1.length>0){g();let l=o6(R1.current,F.key);R1.current=l;let T0=n6(z1,l.value,m0,(D1)=>D1.label);if(T0>=0)X1(T0);return!0}}return!1},[j,D0,O0,w,F0,z1,m0,N4]),v=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),K_(""),G?.();return}if(C(F))return;let g=Y1.current?.value??(j?q1:l0);if(J2(F,g,{searchMode:j,showSessionSwitcherButton:X4})){F.preventDefault(),P_();return}if(b0&&H0.length>0){let o=Y1.current?.value??(j?q1:l0);if(!String(o||"").match(/^@([a-zA-Z0-9_-]*)$/))k0(!1),N0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),S0((l)=>(l+1)%H0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),S0((l)=>(l-1+H0.length)%H0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),d_(H0[R0]);return}if(F.key==="Escape"){F.preventDefault(),k0(!1),N0([]);return}}}if(a&&G1.length>0){let o=Y1.current?.value??(j?q1:l0);if(!String(o||"").startsWith("/"))B0(!1),c0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),C1((l)=>(l+1)%G1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),C1((l)=>(l-1+G1.length)%G1.length);return}if(F.key==="Tab"){F.preventDefault(),l_(G1[y1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!g.includes(" ")){F.preventDefault();let T0=G1[y1];B0(!1),c0([]),x_(T0.name);return}}if(F.key==="Escape"){F.preventDefault(),B0(!1),c0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let o=Y1.current;if(!o)return;let l=o.value||"",T0=o.selectionStart===0&&o.selectionEnd===0,D1=o.selectionStart===l.length&&o.selectionEnd===l.length;if(F.key==="ArrowUp"&&T0||F.key==="ArrowDown"&&D1){let x1=u0.current;if(!x1.length)return;F.preventDefault();let v1=P1.current;if(F.key==="ArrowUp"){if(v1===-1)A_.current=l,v1=x1.length-1;else if(v1>0)v1-=1;P1.current=v1,V_(x1[v1]||"")}else{if(v1===-1)return;if(v1<x1.length-1)v1+=1,P1.current=v1,V_(x1[v1]||"");else P1.current=-1,V_(A_.current||""),A_.current=""}requestAnimationFrame(()=>{let V4=Y1.current;if(!V4)return;let l4=V4.value.length;V4.selectionStart=l4,V4.selectionEnd=l4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(g.trim())Y?.(g.trim(),Z)}else x_(g,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(g.trim())Y?.(g.trim(),Z)}else x_(g)},b=(F)=>{let g=Array.from(F||[]).filter((o)=>o instanceof File&&!String(o.name||"").startsWith(".DS_Store"));if(!g.length)return;_1((o)=>[...o,...g]),j_(null)},n=(F)=>{b(F.target.files),F.target.value=""},K0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),I1.current+=1,k1(!0)},U0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),I1.current=Math.max(0,I1.current-1),I1.current===0)k1(!1)},L0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";k1(!0)},Z0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),I1.current=0,k1(!1),b(F.dataTransfer?.files||[])},P0=(F)=>{if(j)return;let g=F.clipboardData?.items;if(!g||!g.length)return;let o=[];for(let l of g){if(l.kind!=="file")continue;let T0=l.getAsFile?.();if(T0)o.push(T0)}if(o.length>0)F.preventDefault(),b(o)},f1=(F)=>{_1((g)=>g.filter((o,l)=>l!==F))},G_=()=>{j_(null),_1([]),N?.(),O?.()},d1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:g,longitude:o,accuracy:l}=F.coords,T0=`${g.toFixed(5)}, ${o.toFixed(5)}`,D1=Number.isFinite(l)?` ±${Math.round(l)}m`:"",x1=`https://maps.google.com/?q=${g},${o}`,v1=`Location: ${T0}${D1} ${x1}`;$4(v1)},(F)=>{let g=F?.message||"Unable to retrieve location.";alert(`Location error: ${g}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!D0)return;R1.current={value:"",updatedAt:0},N1(!0),u5(J0).then((F)=>{let g=Array.isArray(F?.models)?F.models.filter((o)=>typeof o==="string"&&o.trim().length>0):[];g.sort((o,l)=>o.localeCompare(l,void 0,{sensitivity:"base"})),t(g),p_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),t([])}).finally(()=>{N1(!1)})},[D0,M]),u(()=>{if(j)g0(!1),Q0(!1),B0(!1),c0([]),k0(!1),N0([])},[j]),u(()=>{if(O0&&!X4)Q0(!1)},[O0,X4]),u(()=>{if(!D0)return;let F=w.findIndex((g)=>g===M);I0(F>=0?F:0)},[D0,w,M]),u(()=>{if(!O0)return;X1(h4(z1)),R1.current={value:"",updatedAt:0}},[O0,J0]),u(()=>{if(!D0)return;let F=(g)=>{let o=g_.current,l=_5.current,T0=g.target;if(o&&o.contains(T0))return;if(l&&l.contains(T0))return;g0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[D0]),u(()=>{if(!O0)return;let F=(g)=>{let o=w4.current,l=g1.current,T0=g.target;if(o&&o.contains(T0))return;if(l&&l.contains(T0))return;Q0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),u(()=>{if(j||!D0&&!O0)return;let F=(g)=>{C(g)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,D0,O0,C]),u(()=>{if(!D0)return;let F=g_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,F0,w]),u(()=>{if(!O0)return;let F=w4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,m0,z1.length]),u(()=>{let F=()=>{let D1=F_.current?.clientWidth||0;q4((x1)=>x1===D1?x1:D1)};F();let g=F_.current,o=0,l=()=>{if(o)cancelAnimationFrame(o);o=requestAnimationFrame(()=>{o=0,F()})},T0=null;if(g&&typeof ResizeObserver<"u")T0=new ResizeObserver(()=>l()),T0.observe(g);if(typeof window<"u")window.addEventListener("resize",l);return()=>{if(o)cancelAnimationFrame(o);if(T0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",l)}},[j,M,S1?.agent_name,X4,D?.percent]);let T5=(F)=>{let g=F.target.value;if(j_(null),O0)Q0(!1);c_(F.target),V_(g)};return u(()=>{requestAnimationFrame(()=>c_())},[l0,q1,j]),u(()=>{if(!h_)return;N_(Date.now());let F=setInterval(()=>N_(Date.now()),1000);return()=>clearInterval(F)},[h_,z0?.started_at,z0?.startedAt]),u(()=>{if(j)return;u4(l0)},[l1,J0,l0,j]),L`
        <div class="compose-box">
            ${j1&&!j&&L`
                <${t6}
                    items=${c}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${d}
                    onOpenFilePill=${x}
                />
            `}
            ${z0&&L`
                <div
                    class=${`compose-inline-status${h_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${C5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${k5}</span>
                        ${U1&&L`<span class="compose-inline-status-elapsed">${U1}</span>`}
                    </div>
                    ${C5&&L`<div class="compose-inline-status-detail">${C5}</div>`}
                </div>
            `}
            ${U_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${U_}</div>
            `}
            <div
                class=${`compose-input-wrapper${p1?" drag-active":""}`}
                onDragEnter=${K0}
                onDragOver=${L0}
                onDragLeave=${U0}
                onDrop=${Z0}
            >
                <div class="compose-input-main">
                    ${j5&&L`
                        <div class="compose-file-refs">
                            ${V.map((F)=>{return L`
                                    <${o_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(F)}
                                    />
                                `})}
                            ${K.map((F)=>{let g=F.split("/").pop()||F;return L`
                                    <${o_}
                                        prefix="compose"
                                        label=${g}
                                        title=${F}
                                        onClick=${()=>x?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(F)}
                                    />
                                `})}
                            ${E1.map((F,g)=>{let o=F?.name||`attachment-${g+1}`;return L`
                                    <${o_}
                                        key=${o+g}
                                        prefix="compose"
                                        label=${o}
                                        title=${o}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>f1(g)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${G_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof X0==="function"&&L`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>X0?.()}
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
                        ref=${Y1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?q1:l0}
                        onInput=${T5}
                        onKeyDown=${v}
                        onPaste=${P0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${b0&&H0.length>0&&L`
                        <div class="slash-autocomplete" ref=${G4}>
                            ${H0.map((F,g)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${g===R0?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),d_(F)}}
                                    onMouseEnter=${()=>S0(g)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${a&&G1.length>0&&L`
                        <div class="slash-autocomplete" ref=${r1}>
                            ${G1.map((F,g)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${g===y1?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),l_(F)}}
                                    onMouseEnter=${()=>C1(g)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D0&&!j&&L`
                        <div class="compose-model-popup" ref=${g_} tabIndex="-1" onKeyDown=${C}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${M1&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!M1&&w.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!M1&&w.map((F,g)=>L`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${F0===g?" active":""}${M===F?" current-model":""}`}
                                        onClick=${()=>{N4(F)}}
                                        disabled=${w0}
                                    >
                                        ${F}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{M4()}}
                                    disabled=${w0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${O0&&!j&&L`
                        <div class="compose-model-popup" ref=${w4} tabIndex="-1" onKeyDown=${C}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return O2(S1,J0)})()}
                                    </div>
                                `}
                                ${!M_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${M_&&J1.map((F,g)=>{let o=Boolean(F.archived_at),T0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!o&&typeof t0==="function",D1=R8(F,{currentChatJid:J0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${o?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${o?" archived":""}${m0===g?" active":""}`}
                                                onClick=${()=>{if(o){A4(F.chat_jid);return}D4(F.chat_jid)}}
                                                disabled=${o?!k_:!I_}
                                                title=${o?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${D1}
                                            </button>
                                            ${T0&&L`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(x1)=>{x1.stopPropagation(),Q0(!1),t0(F.chat_jid)}}
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
                            ${(a1||q_||C_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${a1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${z1.findIndex((F)=>F.key==="action:new")===m0?" active":""}`}
                                            onClick=${()=>{Y5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${q_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${z1.findIndex((F)=>F.key==="action:rename")===m0?" active":""}`}
                                            onClick=${(F)=>{E4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${e_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${C_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${z1.findIndex((F)=>F.key==="action:delete")===m0?" active":""}`}
                                            onClick=${()=>{u1()}}
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
                <div class="compose-footer" ref=${F_}>
                    ${!j&&M&&L`
                    <div class="compose-meta-row">
                        ${!j&&M&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${_5}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${Z5}
                                    aria-label="Open model picker"
                                    onClick=${z_}
                                    disabled=${w0}
                                >
                                    ${w0?"Switching…":O1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!w0&&T_&&L`
                                        <span class="compose-model-usage-hint" title=${Z5}>
                                            ${T_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&L`
                            <${EY} usage=${D} onCompact=${I4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${X4&&L`
                        ${S1?.agent_name&&L`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${S1.chat_jid||J0}
                                aria-label=${`Manage sessions for @${S1.agent_name}`}
                                onClick=${T1}
                            >@${S1.agent_name}</button>
                        `}
                        <button
                            ref=${g1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${O0?" active":""}`}
                            onClick=${T1}
                            title=${O0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${O0?"true":"false"}
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
                                value=${Z}
                                onChange=${(F)=>Q?.(F.currentTarget.value)}
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
                    ${f4&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${d1}
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
                            class=${`icon-btn notification-btn${t_?" active":""}`}
                            onClick=${s}
                            title=${w1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&L`
                        ${y&&H&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${y}`}
                                type="button"
                                disabled=${K.includes(y)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${n} />
                        </label>
                    `}
                    ${(E0!=="connected"||!j)&&L`
                        <div class="compose-send-stack">
                            ${E0!=="connected"&&L`
                                <span class="compose-connection-status connection-status ${E0}" title=${Q_}>
                                    ${E_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{x_()}}
                                    disabled=${!Y_}
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
    `}var $$="piclaw_theme",b8="piclaw_tint",k2="piclaw_chat_themes",d5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},C2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},M2={default:{label:"Default",mode:"auto",light:d5,dark:C2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},CY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],s4={theme:"default",tint:null},T2="light",e6=!1;function g8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function H5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Q)=>Q+Q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function TY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let Q=parseInt(Y[1],10),q=parseInt(Y[2],10),G=parseInt(Y[3],10);if(![Q,q,G].every((X)=>Number.isFinite(X)))return null;let K=`#${[Q,q,G].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:Q,g:q,b:G,hex:K}}function P2(_){return H5(_)||TY(_)}function l5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),Q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${Q})`}function _$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function PY(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*Q+0.0722*q}function SY(_){return PY(_)>0.4?"#000000":"#ffffff"}function S2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function j$(_){return M2[_]||M2.default}function xY(_){return _.mode==="auto"?S2():_.mode}function x2(_,$){let j=j$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||d5}function y2(_,$,j){let Z=P2($);if(!Z)return _;let Y=H5(_.bgPrimary),Q=H5(_.bgSecondary),q=H5(_.bgHover),G=H5(_.borderColor);if(!Y||!Q||!q||!G)return _;let X=H5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:l5(Y,Z,0.08),bgSecondary:l5(Q,Z,0.12),bgHover:l5(q,Z,0.16),borderColor:l5(G,Z,0.08),accent:Z.hex,accentHover:X?l5(Z,X,0.18):Z.hex}}function yY(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=P2(Z),Q=Y?_$(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Y?_$(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Y?_$(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Y?SY(Y):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":q,"--accent-soft-strong":G,"--accent-contrast-text":K,"--danger-color":_.danger||d5.danger,"--success-color":_.success||d5.success,"--search-highlight-color":Q||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([N,V])=>{if(V)j.style.setProperty(N,V)})}function RY(){if(typeof document>"u")return;let _=document.documentElement;CY.forEach(($)=>_.style.removeProperty($))}function z5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function I2(_){let $=g8(s4?.theme||"default"),j=s4?.tint?String(s4.tint).trim():null,Z=x2($,_);if($==="default"&&j)Z=y2(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?C2.bgPrimary:d5.bgPrimary}function wY(_,$){if(typeof document>"u")return;let j=z5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=z5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",I2("light"));let Y=z5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",I2("dark"));let Q=z5("msapplication-TileColor");if(Q&&_)Q.setAttribute("content",_);let q=z5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let G=z5("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function fY(){if(typeof window>"u")return;let _={...s4,mode:T2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function R2(){try{let _=J_(k2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function vY(_,$,j){let Z=R2();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};K1(k2,JSON.stringify(Z))}function bY(_){if(!_)return null;return R2()[_]||null}function w2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function Z$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=g8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=j$(j),Q=xY(Y),q=x2(j,Q);s4={theme:j,tint:Z},T2=Q;let G=document.documentElement;G.dataset.theme=Q,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=Q;let K=q;if(j==="default"&&Z)K=y2(q,Z,Q);if(j==="default"&&!Z)RY();else yY(K,Q);if(wY(K.bgPrimary,Q),fY(),$.persist!==!1)if(K1($$,j),Z)K1(b8,Z);else K1(b8,"")}function v8(){if(j$(s4.theme).mode!=="auto")return;Z$(s4,{persist:!1})}function f2(){if(typeof window>"u")return()=>{};let _=w2(),$=bY(_),j=$?g8($.theme||"default"):g8(J_($$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=J_(b8);return Y?Y.trim():null})();if(Z$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!e6){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",v8);else if(Y.addListener)Y.addListener(v8);return e6=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",v8);else if(Y.removeListener)Y.removeListener(v8);e6=!1}}return()=>{}}function v2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||w2(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(vY($,j||"default",Z),Z$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")K1($$,j||"default"),K1(b8,Z||"")}function b2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return S2()}var m8=/#(\w+)/g,gY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),mY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),uY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),hY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},pY=new Set(["http:","https:","mailto:",""]);function Y$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function r4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!pY.has(Z.protocol))return null;return Z.href}catch{return null}}function g2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Q;while(Q=Y.nextNode())Z.push(Q);for(let q of Z){let G=q.tagName.toLowerCase();if(!mY.has(G)){let X=q.parentNode;if(!X)continue;while(q.firstChild)X.insertBefore(q.firstChild,q);X.removeChild(q);continue}let K=hY[G]||new Set;for(let X of Array.from(q.attributes)){let N=X.name.toLowerCase(),V=X.value;if(N.startsWith("on")){q.removeAttribute(X.name);continue}if(N.startsWith("data-")||N.startsWith("aria-"))continue;if(K.has(N)||uY.has(N)){if(N==="href"){let U=r4(V);if(!U)q.removeAttribute(X.name);else if(q.setAttribute(X.name,U),G==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(N==="src"){let U=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,O=r4(U,{allowDataImage:G==="img"});if(!O)q.removeAttribute(X.name);else q.setAttribute(X.name,O)}continue}q.removeAttribute(X.name)}}return j.body.innerHTML}function m2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function u8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=m2(j);if(Y===j)break;j=Y}return j}function cY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],Q=!1,q=[];for(let G of j){if(!Q&&G.trim().match(/^```mermaid\s*$/i)){Q=!0,q=[];continue}if(Q&&G.trim().match(/^```\s*$/)){let K=Z.length;Z.push(q.join(`
`)),Y.push(`@@MERMAID_BLOCK_${K}@@`),Q=!1,q=[];continue}if(Q)q.push(G);else Y.push(G)}if(Q)Y.push("```mermaid"),Y.push(...q);return{text:Y.join(`
`),blocks:Z}}function lY(_){if(!_)return _;return u8(_,5)}function dY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function iY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function oY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),Q=$[Y]??"",q=lY(Q);return`<div class="mermaid-container" data-mermaid="${dY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function u2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var nY={span:new Set(["title","class","lang","dir"])};function sY(_,$){let j=nY[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Q;while(Q=Y.exec($)){let q=(Q[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let G=Q[2]??Q[3]??Q[4]??"";Z.push(` ${q}="${Y$(G)}"`)}return Z.join("")}function h2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),Q=Y?Z.slice(1).trim():Z,G=Q.endsWith("/")?Q.slice(0,-1).trim():Q,[K=""]=G.split(/\s+/,1),X=K.toLowerCase();if(!X||!gY.has(X))return $;if(X==="br")return Y?"":"<br>";if(Y)return`</${X}>`;let N=G.slice(K.length).trim(),V=sY(X,N);return`<${X}${V}>`})}function p2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function c2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Q)=>Q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let Q=Z(Y.nodeValue);if(Q!==Y.nodeValue)Y.nodeValue=Q}return $.body.innerHTML}function rY(_){if(!window.katex)return _;let $=(q)=>m2(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let G=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let N=G.length;return G.push(X),`@@CODE_BLOCK_${N}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let N=G.length;return G.push(X),`@@CODE_INLINE_${N}@@`}),{html:K,blocks:G}},Z=(q,G)=>{if(!G.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,X)=>{let N=Number(X);return G[N]??""})},Y=j(_),Q=Y.html;return Q=Q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,G,K)=>{try{let X=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${G}${X}`}catch(X){return`<span class="math-error" title="${Y$(X.message)}">${q}</span>`}}),Q=Q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,G,K)=>{if(/\s$/.test(K))return q;try{let X=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${G}${X}`}catch(X){return`${G}<span class="math-error" title="${Y$(X.message)}">$${K}$</span>`}}),Z(Q,Y.blocks)}function aY(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let Q of Z){let q=Q.nodeValue;if(!q)continue;if(m8.lastIndex=0,!m8.test(q))continue;m8.lastIndex=0;let G=Q.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let K=q.split(m8);if(K.length<=1)continue;let X=$.createDocumentFragment();K.forEach((N,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",N),U.textContent=`#${N}`,X.appendChild(U)}else X.appendChild($.createTextNode(N))}),Q.parentNode?.replaceChild(X,Q)}return $.body.innerHTML}function tY(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let Q of j){if(!Y&&Q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&Q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(Q)}return Z.join(`
`)}function eY(_){let $=tY(_||""),{text:j,blocks:Z}=cY($),Y=u8(j,2),q=u2(Y).replace(/</g,"&lt;");return{safeHtml:h2(q),mermaidBlocks:Z}}function O_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=eY(_),Q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Q=p2(Q),Q=c2(Q),Q=rY(Q),Q=aY(Q),Q=oY(Q,Y),Q=g2(Q,j),Q}function i5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=u8($,2),Y=u2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=h2(Y),q=window.marked?marked.parse(Q):Q.replace(/\n/g,"<br>");return q=p2(q),q=c2(q),q=g2(q),q}function _Q(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,Q)=>{let q=Y.trim().split(/\s+/).map((K)=>{let[X,N]=K.split(",").map(Number);return{x:X,y:N}});if(q.length<3)return`<polyline${Z}points="${Y}"${Q}/>`;let G=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let X=q[K-1],N=q[K],V=q[K+1],U=N.x-X.x,O=N.y-X.y,M=V.x-N.x,I=V.y-N.y,E=Math.sqrt(U*U+O*O),J=Math.sqrt(M*M+I*I),D=Math.min($,E/2,J/2);if(D<0.5){G.push(`L ${N.x},${N.y}`);continue}let k=N.x-U/E*D,i=N.y-O/E*D,p=N.x+M/J*D,s=N.y+I/J*D,f=U*I-O*M>0?1:0;G.push(`L ${k},${i}`),G.push(`A ${D},${D} 0 0 ${f} ${p},${s}`)}return G.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${G.join(" ")}"${Q}/>`})}async function U4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=b2()==="dark"?j["tokyo-night"]:j["github-light"],Q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Q)try{let G=q.dataset.mermaid,K=iY(G||""),X=u8(K,2),N=await $(X,{...Y,transparent:!0});N=_Q(N),q.innerHTML=N,q.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${G.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}function l2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function d2(_){return String(_||"").trim()||"web:default"}function i2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function o2(_){if(!_)return!1;return _.status!=="running"}function n2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function s2({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=T(null),Q=T(null),q=_?.thinking?i5(_.thinking):"",G=_?.answer?O_(_.answer,null,{sanitize:!1}):"";if(u(()=>{if(Y.current&&q)U4(Y.current).catch(()=>{})},[q]),u(()=>{if(Q.current&&G)U4(Q.current).catch(()=>{})},[G]),!_)return null;let K=_.status==="running",X=Boolean(String(_.answer||"").trim()),N=Boolean(String(_.thinking||"").trim()),V=i2(_),U=o2(_),O=!K&&X,M=K?"Thinking…":_.status==="error"?"Error":"Done";return L`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${M}</span>
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
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${V&&L`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Q}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${U&&L`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&L`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
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
    `}function $Q(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function jQ(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Q==="svg")return j?{kind:Q,svg:j}:{kind:Q};return Z?{kind:Q,html:Z}:{kind:Q}}function S4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function x0(_){return typeof _==="string"&&_.trim()?_.trim():null}function a2(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var t2="__PICLAW_WIDGET_HOST__:";function r2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Q$(_,$){if(!_||_.type!=="generated_widget")return null;let j=$Q(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:a2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function e2(_){if(!_||typeof _!=="object")return null;let $=jQ(_),j=x0(_?.widget_id)||x0(_?.widgetId)||x0(_?.tool_call_id)||x0(_?.toolCallId),Z=x0(_?.tool_call_id)||x0(_?.toolCallId),Y=x0(_?.turn_id)||x0(_?.turnId),Q=x0(_?.title)||x0(_?.name)||"Generated widget",q=x0(_?.subtitle)||"",G=x0(_?.description)||q,K=x0(_?.status),X=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:Q,subtitle:q,description:G,originPostId:S4(_?.origin_post_id)??S4(_?.originPostId),originChatJid:x0(_?.origin_chat_jid)||x0(_?.originChatJid)||x0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:a2(_?.capabilities,!0),source:"live",status:X,turnId:Y,toolCallId:Z,width:S4(_?.width),height:S4(_?.height),error:x0(_?.error)}}function _7(_){return Q$(_,null)!==null}function s1(_){let $=x0(_?.toolCallId)||x0(_?.tool_call_id);if($)return $;let j=x0(_?.widgetId)||x0(_?.widget_id);if(j)return j;let Z=S4(_?.originPostId)??S4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function $7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Q)=>typeof Q==="string"&&Q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function j7(_){return $7(_)?"allow-downloads allow-scripts":"allow-downloads"}function h8(_){return{title:x0(_?.title)||"Generated widget",widgetId:x0(_?.widgetId)||x0(_?.widget_id),toolCallId:x0(_?.toolCallId)||x0(_?.tool_call_id),turnId:x0(_?.turnId)||x0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:x0(_?.status)||"final"}}function p8(_){return{...h8(_),subtitle:x0(_?.subtitle)||"",description:x0(_?.description)||"",error:x0(_?.error)||null,width:S4(_?.width),height:S4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function c8(_){return`${t2}${JSON.stringify(p8(_))}`}function Z7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=x0(_.text)||x0(_.content)||x0(_.message)||x0(_.prompt)||x0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=x0(j.text)||x0(j.content)||x0(j.message)||x0(j.prompt)||x0(j.value);if(Z)return Z}return null}function Y7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Q7(_){let $=x0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return x0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function ZQ(_){let $=h8(_);return`<script>
(function () {
  const meta = ${r2($)};
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

  const windowNamePrefix = ${r2(t2)};
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
</script>`}function q7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Y:Z;if(!q)return"";let G=$7(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",G?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),X=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,N=G?ZQ(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${K}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Q.replace(/[<&>]/g,"")}</title>
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
</html>`}function G7({widget:_,onClose:$,onWidgetEvent:j}){let Z=T(null),Y=T(!1),Q=v0(()=>q7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(u(()=>{if(!_)return;let J=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),u(()=>{Y.current=!1},[Q]),u(()=>{if(!_)return;let J=Z.current;if(!J)return;let D=(e)=>{let f=c8(_),y=e==="widget.init"?h8(_):p8(_);try{J.name=f}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:e,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:y},"*")}catch{}},k=()=>{D("widget.init"),D("widget.update")},i=()=>{Y.current=!0,k()};J.addEventListener("load",i);let s=[0,40,120,300,800].map((e)=>setTimeout(k,e));return()=>{J.removeEventListener("load",i),s.forEach((e)=>clearTimeout(e))}},[Q,_?.widgetId,_?.toolCallId,_?.turnId]),u(()=>{if(!_)return;let J=Z.current;if(!J?.contentWindow)return;let D=c8(_),k=p8(_);try{J.name=D}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:k},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),u(()=>{if(!_)return;let J=(D)=>{let k=D?.data;if(!k||k.__piclawGeneratedWidget!==!0)return;let i=Z.current,p=s1(_),s=s1({widgetId:k.widgetId,toolCallId:k.toolCallId});if(s&&p&&s!==p)return;if(!s&&i?.contentWindow&&D.source!==i.contentWindow)return;j?.(k,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let G=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",X=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",N=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=N==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",M=!Q,I=Q7(_),E=j7(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${G.toUpperCase()}</div>
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
                    ${M?L`<div class="floating-widget-empty">${I}</div>`:L`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${K}
                                name=${c8(_)}
                                sandbox=${E}
                                referrerpolicy="no-referrer"
                                srcdoc=${Q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var X7="PiClaw";function q$(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),Q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Y.charCodeAt(0)%Q.length,G=Q[q],K=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",N=X?X:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Y,color:G,image:N||(V?"/static/icon-192.png":null)}}function K7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function N7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function V7(_){if(!_)return null;if(typeof document<"u"){let Q=document.documentElement,q=Q?.dataset?.colorTheme||"",G=Q?.dataset?.tint||"",K=getComputedStyle(Q).getPropertyValue("--accent-color")?.trim();if(K&&(G||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Q=0;Q<j.length;Q+=1)Z=(Z*31+j.charCodeAt(Q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}var YQ=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function G$({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:Q,extensionPanels:q=[],pendingPanelActions:G=new Set,onExtensionPanelAction:K,turnId:X,steerQueued:N,onPanelToggle:V,showCorePanels:U=!0,showExtensionPanels:O=!0}){let E=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let R0=a,S0=R0?R0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:R0,totalLines:S0,fullText:R0}}let B0=a.text||"",H0=a.fullText||a.full_text||B0,N0=Number.isFinite(a.totalLines)?a.totalLines:H0?H0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:B0,totalLines:N0,fullText:H0}},J=160,D=(a)=>String(a||"").replace(/<\/?internal>/gi,""),k=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},i=(a,B0,H0)=>{let N0=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!N0)return{text:"",omitted:0,totalLines:Number.isFinite(H0)?H0:0,visibleLines:0};let R0=N0.split(`
`),S0=R0.length>B0?R0.slice(0,B0).join(`
`):N0,b0=Number.isFinite(H0)?H0:R0.reduce((i0,D0)=>i0+k(D0),0),k0=S0?S0.split(`
`).reduce((i0,D0)=>i0+k(D0),0):0,w0=Math.max(b0-k0,0);return{text:S0,omitted:w0,totalLines:b0,visibleLines:k0}},p=E(j),s=E(Z),e=E($),f=Boolean(p.text)||p.totalLines>0,y=Boolean(s.text)||s.totalLines>0,H=Boolean(e.fullText?.trim()||e.text?.trim()),x=Boolean(_||H||f||y||Y||Q),c=Array.isArray(q)&&q.length>0;if((!U||!x)&&(!O||!c))return null;let[q0,d]=h(new Set),[j0,_0]=h(null),[X0,V0]=h(()=>Date.now()),W0=(a)=>d((B0)=>{let H0=new Set(B0),N0=!H0.has(a);if(N0)H0.add(a);else H0.delete(a);if(typeof V==="function")V(a,N0);return H0});u(()=>{d(new Set),_0(null)},[X]);let J0=B4(_);u(()=>{if(!J0)return;V0(Date.now());let a=setInterval(()=>V0(Date.now()),1000);return()=>clearInterval(a)},[J0,_?.started_at,_?.startedAt]);let E0=_?.turn_id||X,M0=V7(E0),n0=N?"turn-dot turn-dot-queued":"turn-dot",y0=(a)=>a,C0=Boolean(_?.last_activity||_?.lastActivity),s0=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":M0,r0=Q?.kind||"info",h0=s0(r0),t0=s0(_?.kind||(J0?"warning":"info")),p0="",j1=_?.title,z0=_?.status;if(_?.type==="plan")p0=j1?`Planning: ${j1}`:"Planning...";else if(_?.type==="tool_call")p0=j1?`Running: ${j1}`:"Running tool...";else if(_?.type==="tool_status")p0=j1?`${j1}: ${z0||"Working..."}`:z0||"Working...";else if(_?.type==="error")p0=j1||"Agent error";else p0=j1||z0||"Working...";if(C0)p0="Last activity just now";let l0=({panelTitle:a,text:B0,fullText:H0,totalLines:N0,maxLines:R0,titleClass:S0,panelKey:b0})=>{let k0=q0.has(b0),w0=H0||B0||"",i0=b0==="thought"||b0==="draft"?D(w0):w0,D0=typeof R0==="number",g0=k0&&D0,O0=D0?i(i0,R0,N0):{text:i0||"",omitted:0,totalLines:Number.isFinite(N0)?N0:0};if(!i0&&!(Number.isFinite(O0.totalLines)&&O0.totalLines>0))return null;let Q0=`agent-thinking-body${D0?" agent-thinking-body-collapsible":""}`,w=D0?`--agent-thinking-collapsed-lines: ${R0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${k0?"true":"false"}
                data-collapsible=${D0?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
            >
                <div class="agent-thinking-title ${S0||""}">
                    ${M0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${a}
                    ${g0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>W0(b0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Q0}
                    style=${w}
                    dangerouslySetInnerHTML=${{__html:i5(i0)}}
                />
                ${!k0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>W0(b0)}>
                        ▸ ${O0.omitted} more lines
                    </button>
                `}
                ${k0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>W0(b0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},Z1=Y?.tool_call?.title,q1=Z1?`Awaiting approval: ${Z1}`:"Awaiting approval",K_=J0?f8(_,X0):null,E1=(a,B0,H0=null)=>{let N0=w8(a);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${B0?`--turn-color: ${B0};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${B0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${N0}</span>
                    ${H0&&L`<span class="agent-status-elapsed">${H0}</span>`}
                </div>
                ${a.detail&&L`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `},_1=(a,B0,H0,N0,R0,S0,b0,k0=8,w0=8)=>{let i0=Math.max(R0-N0,0.000000001),D0=Math.max(B0-k0*2,1),g0=Math.max(H0-w0*2,1),O0=Math.max(b0-S0,1),Q0=b0===S0?B0/2:k0+(a.run-S0)/O0*D0,w=w0+(g0-(a.value-N0)/i0*g0);return{x:Q0,y:w}},p1=(a,B0,H0,N0,R0,S0,b0,k0=8,w0=8)=>{if(!Array.isArray(a)||a.length===0)return"";return a.map((i0,D0)=>{let{x:g0,y:O0}=_1(i0,B0,H0,N0,R0,S0,b0,k0,w0);return`${D0===0?"M":"L"} ${g0.toFixed(2)} ${O0.toFixed(2)}`}).join(" ")},k1=(a,B0="")=>{if(!Number.isFinite(a))return"—";return`${Math.abs(a)>=100?a.toFixed(0):a.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${B0}`},G1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],c0=(a,B0)=>{let H0=G1;if(!Array.isArray(H0)||H0.length===0)return"var(--accent-color)";if(H0.length===1||!Number.isFinite(B0)||B0<=1)return H0[0];let R0=Math.max(0,Math.min(Number.isFinite(a)?a:0,B0-1))/Math.max(1,B0-1)*(H0.length-1),S0=Math.floor(R0),b0=Math.min(H0.length-1,S0+1),k0=R0-S0,w0=H0[S0],i0=H0[b0];if(!i0||S0===b0||k0<=0.001)return w0;if(k0>=0.999)return i0;let D0=Math.round((1-k0)*1000)/10,g0=Math.round(k0*1000)/10;return`color-mix(in oklab, ${w0} ${D0}%, ${i0} ${g0}%)`},y1=(a,B0="autoresearch")=>{let H0=Array.isArray(a)?a.map((Q0)=>({...Q0,points:Array.isArray(Q0?.points)?Q0.points.filter((w)=>Number.isFinite(w?.value)&&Number.isFinite(w?.run)):[]})).filter((Q0)=>Q0.points.length>0):[],N0=H0.map((Q0,w)=>({...Q0,color:c0(w,H0.length)}));if(N0.length===0)return null;let R0=320,S0=120,b0=N0.flatMap((Q0)=>Q0.points),k0=b0.map((Q0)=>Q0.value),w0=b0.map((Q0)=>Q0.run),i0=Math.min(...k0),D0=Math.max(...k0),g0=Math.min(...w0),O0=Math.max(...w0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${N0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${R0} ${S0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${N0.map((Q0)=>{let w=Q0?.key||Q0?.label||"series",t=j0?.panelKey===B0&&j0?.seriesKey===w;return L`
                                <g key=${w}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${p1(Q0.points,R0,S0,i0,D0,g0,O0)}
                                        style=${`--agent-series-color: ${Q0.color};`}
                                        onMouseEnter=${()=>_0({panelKey:B0,seriesKey:w})}
                                        onMouseLeave=${()=>_0((F0)=>F0?.panelKey===B0&&F0?.seriesKey===w?null:F0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${N0.flatMap((Q0)=>{let w=typeof Q0?.unit==="string"?Q0.unit:"",t=Q0?.key||Q0?.label||"series";return Q0.points.map((F0,I0)=>{let m0=_1(F0,R0,S0,i0,D0,g0,O0);return L`
                                    <button
                                        key=${`${t}-point-${I0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Q0.color}; left:${m0.x/R0*100}%; top:${m0.y/S0*100}%;`}
                                        onMouseEnter=${()=>_0({panelKey:B0,seriesKey:t,run:F0.run,value:F0.value,unit:w})}
                                        onMouseLeave=${()=>_0((X1)=>X1?.panelKey===B0?null:X1)}
                                        onFocus=${()=>_0({panelKey:B0,seriesKey:t,run:F0.run,value:F0.value,unit:w})}
                                        onBlur=${()=>_0((X1)=>X1?.panelKey===B0?null:X1)}
                                        aria-label=${`${Q0?.label||"Series"} ${k1(F0.value,w)} at run ${F0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${N0.map((Q0)=>{let w=Q0.points[Q0.points.length-1]?.value,t=typeof Q0?.unit==="string"?Q0.unit:"",F0=Q0?.key||Q0?.label||"series",I0=j0?.panelKey===B0&&j0?.seriesKey===F0?j0:null,m0=I0&&Number.isFinite(I0.value)?I0.value:w,X1=I0&&typeof I0.unit==="string"?I0.unit:t,M1=I0&&Number.isFinite(I0.run)?I0.run:null;return L`
                            <div key=${`${F0}-legend`} class=${`agent-series-legend-item${I0?" is-hovered":""}`} style=${`--agent-series-color: ${Q0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Q0.color};`}></span>
                                <span class="agent-series-legend-label">${Q0?.label||"Series"}</span>
                                ${M1!==null&&L`<span class="agent-series-legend-run">run ${M1}</span>`}
                                <span class="agent-series-legend-value">${k1(m0,X1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},C1=(a)=>{if(!a)return null;let B0=typeof a?.key==="string"?a.key:`panel-${Math.random()}`,H0=q0.has(B0),N0=a?.title||"Extension status",R0=a?.collapsed_text||"",S0=String(a?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),b0=s0(a?.state==="completed"?"success":a?.state==="failed"?"error":a?.state==="stopped"?"warning":"info"),k0=typeof a?.detail_markdown==="string"?a.detail_markdown.trim():"",w0=typeof a?.last_run_text==="string"?a.last_run_text.trim():"",i0=typeof a?.tmux_command==="string"?a.tmux_command.trim():"",D0=Array.isArray(a?.series)?a.series:[],g0=Array.isArray(a?.actions)?a.actions:[],O0=Boolean(k0||i0),Q0=Boolean(k0||D0.length>0||i0),w=[N0,R0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${H0?"true":"false"}
                style=${b0?`--turn-color: ${b0};`:""}
                title=${!H0?w||N0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Q0?W0(B0):null}
                    >
                        ${b0&&L`<span class=${n0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${N0}</span>
                        ${R0&&L`<span class="agent-thinking-title-meta">${R0}</span>`}
                    </button>
                    ${(g0.length>0||Q0&&!H0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${g0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${g0.map((t)=>{let F0=`${B0}:${t?.key||""}`,I0=G?.has?.(F0);return L`
                                            <button
                                                key=${F0}
                                                class=${`agent-thinking-action-btn${t?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(a,t)}
                                                disabled=${Boolean(I0)}
                                            >
                                                ${I0?"Working…":t?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${Q0&&!H0&&L`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${N0}`}
                                    title="Expand details"
                                    onClick=${()=>W0(B0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${Q0&&H0&&L`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${N0}`}
                        title="Collapse details"
                        onClick=${()=>W0(B0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${H0&&L`
                    <div class=${`agent-thinking-autoresearch-layout${O0?"":" chart-only"}`}>
                        ${O0&&L`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${k0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:i5(k0)}}
                                    />
                                `}
                                ${i0&&L`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${i0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.(a,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${YQ}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${D0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${y1(D0,B0)}
                                    ${w0&&L`<div class="agent-series-chart-note">${w0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${U&&Q&&E1(Q,h0)}
            ${O&&Array.isArray(q)&&q.map((a)=>C1(a))}
            ${U&&_?.type==="intent"&&E1(_,t0,K_)}
            ${U&&Y&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    <span class=${n0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${q1}</span>
                </div>
            `}
            ${U&&f&&l0({panelTitle:y0("Planning"),text:p.text,fullText:p.fullText,totalLines:p.totalLines,panelKey:"plan"})}
            ${U&&y&&l0({panelTitle:y0("Thoughts"),text:s.text,fullText:s.fullText,totalLines:s.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&H&&l0({panelTitle:y0("Draft"),text:e.text,fullText:e.fullText,totalLines:e.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${C0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    ${M0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!C0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${p0}</span>
                </div>
            `}
        </div>
    `}function W7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:Q}=_,q=Z?.title||"Agent Request",G=Z?.kind||"other",K=Z?.rawInput||{},X=K.command||K.commands&&K.commands[0]||null,N=K.diff||null,V=K.fileName||K.path||null,U=Z?.description||K.description||K.explanation||null,M=(Array.isArray(Z?.locations)?Z.locations:[]).map((k)=>k?.path).filter((k)=>Boolean(k)),I=Array.from(new Set([V,...M].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let E=async(k)=>{try{await M8(j,k,Q||null),$()}catch(i){console.error("Failed to respond to agent request:",i)}},J=async()=>{try{await v6(q,`Auto-approved: ${q}`),await M8(j,"approved",Q||null),$()}catch(k){console.error("Failed to add to whitelist:",k)}},D=Y&&Y.length>0;return L`
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
                ${(U||X||N||I.length>0)&&L`
                    <div class="agent-request-body">
                        ${U&&L`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${I.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${I.map((k,i)=>L`<li key=${i}>${k}</li>`)}
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
                    ${D?Y.map((k)=>L`
                            <button 
                                key=${k.optionId||k.id||String(k)}
                                class="agent-request-btn ${k.kind==="allow_once"||k.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(k.optionId||k.id||k)}
                            >
                                ${k.name||k.label||k.optionId||k.id||String(k)}
                            </button>
                        `):L`
                        <button class="agent-request-btn primary" onClick=${()=>E("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>E("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${J}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function B7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,Q=86400000;if(Z<Q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*Q){let K=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${X}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${G}`}function o5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function b_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function a4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var QQ=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),qQ=new Set(["text/markdown"]),GQ=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),XQ=new Set(["application/vnd.jgraph.mxfile"]);function n5(_){return typeof _==="string"?_.trim().toLowerCase():""}function KQ(_){let $=n5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function NQ(_){let $=n5(_);return!!$&&$.endsWith(".pdf")}function VQ(_){let $=n5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function s5(_,$){let j=n5(_);if(KQ($)||XQ.has(j))return"drawio";if(NQ($)||j==="application/pdf")return"pdf";if(VQ($)||GQ.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(QQ.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function U7(_){let $=n5(_);return qQ.has($)}function L7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function WQ(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function BQ(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),Q=Number(j[3]);if(![Z,Y,Q].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:Y,b:Q}}function F7(_){return WQ(_)||BQ(_)}function l8(_){let $=(Q)=>{let q=Q/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function UQ(_,$){let j=Math.max(l8(_),l8($)),Z=Math.min(l8(_),l8($));return(j+0.05)/(Z+0.05)}function LQ(_,$,j="#ffffff"){let Z=F7(_);if(!Z)return j;let Y=j,Q=-1;for(let q of $){let G=F7(q);if(!G)continue;let K=UQ(Z,G);if(K>Q)Y=q,Q=K}return Y}function X$(){let _=getComputedStyle(document.documentElement),$=(M,I)=>{for(let E of M){let J=_.getPropertyValue(E).trim();if(J)return J}return I},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),N=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),O=LQ(G,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:Q,bgEmphasis:q,accent:G,good:K,warning:X,attention:N,border:V,fontFamily:U,buttonTextColor:O}}function z7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:Q,warning:q,attention:G,border:K,fontFamily:X}=X$();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var FQ=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),H7=!1,d8=null,J7=!1;function K$(_){_.querySelector(".adaptive-card-notice")?.remove()}function zQ(_,$,j="error"){K$(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function HQ(_,$=(j)=>O_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function JQ(_=($)=>O_($,null)){return($,j)=>{try{let Z=HQ($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function OQ(_){if(J7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=JQ(),J7=!0}async function DQ(){if(H7)return;if(d8)return d8;return d8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{H7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),d8}function AQ(){return globalThis.AdaptiveCards}function EQ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function MQ(_){return FQ.has(_)}function V$(_){if(!Array.isArray(_))return[];return _.filter(EQ)}function IQ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function N$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>N$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${N$(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function kQ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return N$($);return typeof $==="string"?$:String($)}function CQ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((G)=>Z(G));if(!Y||typeof Y!=="object")return Y;let q={...Y};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=kQ(q.type,j[q.id],q);for(let[G,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[G]=Z(K);return q};return Z(_)}function TQ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function PQ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function SQ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=PQ(_.completed_at||j?.submitted_at),Q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Q}}async function O7(_,$,j){if(!MQ($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await DQ()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=AQ();OQ(Z);let Y=new Z.AdaptiveCard,Q=X$();Y.hostConfig=new Z.HostConfig(z7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:CQ($.payload,q);Y.parse(G),Y.onExecuteAction=(N)=>{let V=IQ(N);if(j?.onAction)K$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let O=U instanceof Error?U.message:String(U||"Action failed.");zQ(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Y.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Q.buttonTextColor);let X=SQ($);if(X){_.classList.add("adaptive-card-finished");let N=document.createElement("div");N.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=X.label,N.appendChild(V),X.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=X.detail,N.appendChild(U)}_.appendChild(N)}if(K$(_),_.appendChild(K),X)TQ(K);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function r5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>r5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${r5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function D7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:r5(j)})).filter(($)=>$.value)}function xQ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function W$(_){if(!Array.isArray(_))return[];return _.filter(xQ)}function A7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=r5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=D7(j).map(({key:Q,value:q})=>`${Q}: ${q}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function E7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=D7(_.data),Z=j.length>0?j.slice(0,2).map(({key:Q,value:q})=>`${Q}: ${q}`).join(", "):r5(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function J5({children:_,className:$=""}){let j=T(null);return u(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{P4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),g5(()=>{let Z=j.current;if(!Z)return;return P4(_,Z),()=>{P4(null,Z)}},[_]),null}function yQ(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?b_($):null},{label:"Added",value:_?.created_at?a4(_.created_at):null}].filter((Z)=>Z.value)}function RQ(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let Q=v_(_);return`/office-viewer/?url=${encodeURIComponent(Q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function M7({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=v0(()=>s5($?.content_type,Z),[$?.content_type,Z]),Q=L7(Y),q=v0(()=>U7($?.content_type),[$?.content_type]),[G,K]=h(Y==="text"),[X,N]=h(""),[V,U]=h(null),O=T(null),M=v0(()=>yQ($),[$]),I=v0(()=>RQ(_,Z,Y),[_,Z,Y]),E=v0(()=>{if(!q||!X)return"";return O_(X)},[q,X]);return u(()=>{let J=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),u(()=>{if(!O.current||!E)return;U4(O.current);return},[E]),u(()=>{let J=!1;async function D(){if(Y!=="text"){K(!1),U(null);return}K(!0),U(null);try{let k=await u6(_);if(!J)N(k)}catch{if(!J)U("Failed to load text preview.")}finally{if(!J)K(!1)}}return D(),()=>{J=!0}},[_,Y]),L`
        <${J5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${Q}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${I&&L`
                                <a
                                    href=${I}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(J)=>J.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${v_(_)}
                                download=${Z}
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
                        ${!G&&!V&&Y==="image"&&L`
                            <img class="attachment-preview-image" src=${v_(_)} alt=${Z} />
                        `}
                        ${!G&&!V&&(Y==="pdf"||Y==="office"||Y==="drawio")&&I&&L`
                            <iframe class="attachment-preview-frame" src=${I} title=${Z}></iframe>
                        `}
                        ${!G&&!V&&Y==="drawio"&&L`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!G&&!V&&Y==="text"&&q&&L`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:E}}
                            />
                        `}
                        ${!G&&!V&&Y==="text"&&!q&&L`
                            <pre class="attachment-preview-text">${X}</pre>
                        `}
                        ${!G&&!V&&Y==="unsupported"&&L`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${M.map((J)=>L`
                            <div class="attachment-preview-meta-item" key=${J.label}>
                                <span class="attachment-preview-meta-label">${J.label}</span>
                                <span class="attachment-preview-meta-value">${J.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${J5}>
    `}function I7({src:_,onClose:$}){return u(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${J5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${J5}>
    `}function wQ({mediaId:_,onPreview:$}){let[j,Z]=h(null);if(u(()=>{U5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",Q=j.metadata?.size,q=Q?b_(Q):"",K=s5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${v_(_)} download=${Y} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Y}</span>
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
    `}function fQ({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=h(null);u(()=>{if(!Number.isFinite(j))return;U5(j).then(Y).catch(()=>{});return},[j]);let Q=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?v_(j):null,K=s5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Q}>
            ${q?L`
                    <a href=${q} download=${Q} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${o_}
                            prefix="post"
                            label=${_.label}
                            title=${Q}
                        />
                    </a>
                `:L`
                    <${o_}
                        prefix="post"
                        label=${_.label}
                        title=${Q}
                    />
                `}
            ${Number.isFinite(j)&&Z&&L`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${K}
                    onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function i8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?a4(Z):null;return L`
        <div class="content-annotations">
            ${$&&$.length>0&&L`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&L`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Y&&L`
                <span class="content-annotation">Updated: ${Y}</span>
            `}
        </div>
    `}function vQ({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?b_(_.size):"",Y=_.mime_type||"",Q=mQ(Y),q=r4(_.uri);return L`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Q}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&L`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Y&&L`<span>${Y}</span>`}
                    ${Z&&L`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function bQ({block:_}){let[$,j]=h(!1),Z=_.uri||"Embedded resource",Y=_.text||"",Q=Boolean(_.data),q=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&L`
                ${Y&&L`<pre class="resource-embed-content">${Y}</pre>`}
                ${Q&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&L`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),X=URL.createObjectURL(K),N=document.createElement("a");N.href=X,N.download=Z.split("/").pop()||"resource",N.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function gQ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=Q$(_,$),Y=_7(_),Q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",G=Z?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",X=(N)=>{if(N.preventDefault(),N.stopPropagation(),!Z)return;j?.(Z)};return L`
        <div class="generated-widget-launch" onClick=${(N)=>N.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Q?` • ${String(Q).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${G&&L`<div class="generated-widget-launch-description">${G}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Y}
                    onClick=${X}
                    title=${Y?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${Y?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function mQ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function uQ({preview:_}){let $=r4(_.url),j=r4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return L`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Q)=>Q.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Y||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&L`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function hQ(_,$){return typeof _==="string"?_:""}var pQ=1800,cQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,lQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,dQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function iQ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function oQ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Q)=>Q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(Q,q)=>{let G=q||"idle";if(Q.dataset.copyState=G,G==="success")Q.innerHTML=lQ,Q.setAttribute("aria-label","Copied"),Q.setAttribute("title","Copied"),Q.classList.add("is-success"),Q.classList.remove("is-error");else if(G==="error")Q.innerHTML=dQ,Q.setAttribute("aria-label","Copy failed"),Q.setAttribute("title","Copy failed"),Q.classList.add("is-error"),Q.classList.remove("is-success");else Q.innerHTML=cQ,Q.setAttribute("aria-label","Copy code"),Q.setAttribute("title","Copy code"),Q.classList.remove("is-success","is-error")};return $.forEach((Q)=>{let q=document.createElement("div");q.className="post-code-block",Q.parentNode?.insertBefore(q,Q),q.appendChild(Q);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Y(G,"idle"),q.appendChild(G);let K=async(X)=>{X.preventDefault(),X.stopPropagation();let V=Q.querySelector("code")?.textContent||"",U=await iQ(V);Y(G,U?"success":"error");let O=j.get(G);if(O)clearTimeout(O);let M=setTimeout(()=>{Y(G,"idle"),j.delete(G)},pQ);j.set(G,M)};G.addEventListener("click",K),Z.push(()=>{G.removeEventListener("click",K);let X=j.get(G);if(X)clearTimeout(X);if(q.parentNode)q.parentNode.insertBefore(Q,q),q.remove()})}),()=>{Z.forEach((Q)=>Q())}}function nQ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let X=j[Q];if(/^\s*-\s+/.test(X))Y.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Q),K=[...q,...G].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Y}}function sQ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let X=j[Q];if(/^\s*-\s+/.test(X)){let V=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Y.push(V[1])}else if(!X.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Q),K=[...q,...G].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Y}}function rQ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1){let N=j[X].trim();if((N==="Images:"||N==="Attachments:")&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let X=j[Q];if(/^\s*-\s+/.test(X)){let N=X.replace(/^\s*-\s+/,"").trim(),V=N.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||N.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],O=(V[2]||"").trim()||U;Y.push({id:U,label:O,raw:N})}else Y.push({id:null,label:N,raw:N})}else if(!X.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),G=j.slice(Q),K=[...q,...G].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Y}}function aQ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function tQ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(aQ).sort((N,V)=>V.length-N.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),Q=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),G=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],X;while(X=G.nextNode())K.push(X);for(let N of K){let V=N.nodeValue;if(!V||!Y.test(V)){Y.lastIndex=0;continue}Y.lastIndex=0;let U=N.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let O=V.split(Y).filter((I)=>I!=="");if(O.length===0)continue;let M=q.createDocumentFragment();for(let I of O)if(Q.test(I)){let E=q.createElement("mark");E.className="search-highlight-term",E.textContent=I,M.appendChild(E)}else M.appendChild(q.createTextNode(I));N.parentNode.replaceChild(M,N)}return q.body.innerHTML}function k7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:Q,agentAvatarUrl:q,userName:G,userAvatarUrl:K,userAvatarBackground:X,onDelete:N,isThreadReply:V,isThreadPrev:U,isThreadNext:O,isRemoving:M,highlightQuery:I,onFileRef:E,onOpenWidget:J}){let[D,k]=h(null),i=T(null),p=_.data,s=p.type==="agent_response",e=G||"You",f=s?Q||X7:e,y=s?q$(Q,q,!0):q$(e,K),H=typeof X==="string"?X.trim().toLowerCase():"",x=!s&&y.image&&(H==="clear"||H==="transparent"),c=s&&Boolean(y.image),q0=`background-color: ${x||c?"transparent":y.color}`,d=p.content_meta,j0=Boolean(d?.truncated),_0=Boolean(d?.preview),X0=j0&&!_0,V0=j0?{originalLength:Number.isFinite(d?.original_length)?d.original_length:p.content?p.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,W0=p.content_blocks||[],J0=p.media_ids||[],E0=hQ(p.content,p.link_previews),{content:M0,fileRefs:n0}=nQ(E0),{content:y0,messageRefs:C0}=sQ(M0),{content:s0,attachments:r0}=rQ(y0);E0=s0;let h0=V$(W0),t0=W$(W0),p0=h0.length===1&&typeof h0[0]?.fallback_text==="string"?h0[0].fallback_text.trim():"",j1=t0.length===1?A7(t0[0]).trim():"",z0=Boolean(p0)&&E0?.trim()===p0||Boolean(j1)&&E0?.trim()===j1,l0=Boolean(E0)&&!X0&&!z0,Z1=typeof I==="string"?I.trim():"",q1=v0(()=>{if(!E0||z0)return"";let w=O_(E0,j);return Z1?tQ(w,Z1):w},[E0,z0,Z1]),K_=(w,t)=>{w.stopPropagation(),k(v_(t))},[E1,_1]=h(null),p1=(w)=>{_1(w)},k1=(w)=>{w.stopPropagation(),N?.(_)},G1=(w,t)=>{let F0=new Set;if(!w||t.length===0)return{content:w,usedIds:F0};return{content:w.replace(/attachment:([^\s)"']+)/g,(m0,X1,M1,N1)=>{let c1=X1.replace(/^\/+/,""),U_=t.find((L_)=>L_.name&&L_.name.toLowerCase()===c1.toLowerCase()&&!F0.has(L_.id))||t.find((L_)=>!F0.has(L_.id));if(!U_)return m0;if(F0.add(U_.id),N1.slice(Math.max(0,M1-2),M1)==="](")return`/media/${U_.id}`;return U_.name||"attachment"}),usedIds:F0}},c0=[],y1=[],C1=[],a=[],B0=[],H0=[],N0=[],R0=0;if(W0.length>0)W0.forEach((w)=>{if(w?.type==="text"&&w.annotations)N0.push(w.annotations);if(w?.type==="generated_widget")H0.push(w);else if(w?.type==="resource_link")a.push(w);else if(w?.type==="resource")B0.push(w);else if(w?.type==="file"){let t=J0[R0++];if(t)y1.push(t),C1.push({id:t,name:w?.name||w?.filename||w?.title})}else if(w?.type==="image"||!w?.type){let t=J0[R0++];if(t){let F0=typeof w?.mime_type==="string"?w.mime_type:void 0;c0.push({id:t,annotations:w?.annotations,mimeType:F0}),C1.push({id:t,name:w?.name||w?.filename||w?.title})}}});else if(J0.length>0){let w=r0.length>0;J0.forEach((t,F0)=>{let I0=r0[F0]||null;if(C1.push({id:t,name:I0?.label||null}),w)y1.push(t);else c0.push({id:t,annotations:null})})}if(r0.length>0)r0.forEach((w)=>{if(!w?.id)return;let t=C1.find((F0)=>String(F0.id)===String(w.id));if(t&&!t.name)t.name=w.label});let{content:S0,usedIds:b0}=G1(E0,C1);E0=S0;let k0=c0.filter(({id:w})=>!b0.has(w)),w0=y1.filter((w)=>!b0.has(w)),i0=r0.length>0?r0.map((w,t)=>({id:w.id||`attachment-${t+1}`,label:w.label||`attachment-${t+1}`})):C1.map((w,t)=>({id:w.id,label:w.name||`attachment-${t+1}`})),D0=v0(()=>V$(W0),[W0]),g0=v0(()=>W$(W0),[W0]),O0=v0(()=>{return D0.map((w)=>`${w.card_id}:${w.state}`).join("|")},[D0]);u(()=>{if(!i.current)return;return U4(i.current),oQ(i.current)},[q1]);let Q0=T(null);return u(()=>{if(!Q0.current||D0.length===0)return;let w=Q0.current;w.innerHTML="";for(let t of D0){let F0=document.createElement("div");w.appendChild(F0),O7(F0,t,{onAction:async(I0)=>{if(I0.type==="Action.OpenUrl"){let m0=r4(I0.url||"");if(!m0)throw Error("Invalid URL");window.open(m0,"_blank","noopener,noreferrer");return}if(I0.type==="Action.Submit"){await f6({post_id:_.id,thread_id:p.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:I0.type,title:I0.title||"",data:I0.data}});return}console.warn("[post] unsupported adaptive card action:",I0.type,I0)}}).catch((I0)=>{console.error("[post] adaptive card render error:",I0),F0.textContent=t.fallback_text||"Card failed to render."})}},[O0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${s?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${O?"thread-next":""} ${M?"removing":""}" onClick=${$}>
            <div class="post-avatar ${s?"agent-avatar":""} ${y.image?"has-image":""}" style=${q0}>
                ${y.image?L`<img src=${y.image} alt=${f} />`:y.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${k1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${f}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(w)=>{if(w.preventDefault(),w.stopPropagation(),Z)Z(_.id)}}>${B7(_.timestamp)}</a>
                </div>
                ${X0&&V0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${o5(V0.originalLength)} chars
                            ${V0.maxLength?L` • Display limit: ${o5(V0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${_0&&V0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${o5(V0.maxLength)} of ${o5(V0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||C0.length>0||i0.length>0)&&L`
                    <div class="post-file-refs">
                        ${C0.map((w)=>{let t=(F0)=>{if(F0.preventDefault(),F0.stopPropagation(),Y)Y(w,_.chat_jid||null);else{let I0=document.getElementById("post-"+w);if(I0)I0.scrollIntoView({behavior:"smooth",block:"center"}),I0.classList.add("post-highlight"),setTimeout(()=>I0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${w}`} class="post-msg-pill-link" onClick=${t}>
                                    <${o_}
                                        prefix="post"
                                        label=${"msg:"+w}
                                        title=${"Message "+w}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${n0.map((w)=>{let t=w.split("/").pop()||w;return L`
                                <${o_}
                                    prefix="post"
                                    label=${t}
                                    title=${w}
                                    onClick=${()=>E?.(w)}
                                />
                            `})}
                        ${i0.map((w)=>L`
                            <${fQ}
                                key=${w.id}
                                attachment=${w}
                                onPreview=${p1}
                            />
                        `)}
                    </div>
                `}
                ${l0&&L`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:q1}}
                        onClick=${(w)=>{if(w.target.classList.contains("hashtag")){w.preventDefault(),w.stopPropagation();let t=w.target.dataset.hashtag;if(t)j?.(t)}else if(w.target.tagName==="IMG")w.preventDefault(),w.stopPropagation(),k(w.target.src)}}
                    />
                `}
                ${D0.length>0&&L`
                    <div ref=${Q0} class="post-adaptive-cards" />
                `}
                ${g0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${g0.map((w,t)=>{let F0=E7(w),I0=`${w.card_id}-${t}`;return L`
                                <div key=${I0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${F0.title}</span>
                                        </div>
                                    </div>
                                    ${F0.fields.length>0&&L`
                                        <div class="adaptive-card-submission-fields">
                                            ${F0.fields.map((m0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${m0.key}: ${m0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${m0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${m0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${a4(F0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${H0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${H0.map((w,t)=>L`
                            <${gQ}
                                key=${w.widget_id||w.id||`${_.id}-widget-${t}`}
                                block=${w}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${N0.length>0&&L`
                    ${N0.map((w,t)=>L`
                        <${i8} key=${t} annotations=${w} />
                    `)}
                `}
                ${k0.length>0&&L`
                    <div class="media-preview">
                        ${k0.map(({id:w,mimeType:t})=>{let I0=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?v_(w):m6(w);return L`
                                <img 
                                    key=${w} 
                                    src=${I0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(m0)=>K_(m0,w)}
                                />
                            `})}
                    </div>
                `}
                ${k0.length>0&&L`
                    ${k0.map(({annotations:w},t)=>L`
                        ${w&&L`<${i8} key=${t} annotations=${w} />`}
                    `)}
                `}
                ${w0.length>0&&L`
                    <div class="file-attachments">
                        ${w0.map((w)=>L`
                            <${wQ} key=${w} mediaId=${w} onPreview=${p1} />
                        `)}
                    </div>
                `}
                ${a.length>0&&L`
                    <div class="resource-links">
                        ${a.map((w,t)=>L`
                            <div key=${t}>
                                <${vQ} block=${w} />
                                <${i8} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${B0.length>0&&L`
                    <div class="resource-embeds">
                        ${B0.map((w,t)=>L`
                            <div key=${t}>
                                <${bQ} block=${w} />
                                <${i8} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${p.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${p.link_previews.map((w,t)=>L`
                            <${uQ} key=${t} preview=${w} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&L`<${I7} src=${D} onClose=${()=>k(null)} />`}
        ${E1&&L`
            <${M7}
                mediaId=${E1.mediaId}
                info=${E1.info}
                onClose=${()=>_1(null)}
            />
        `}
    `}function C7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:Q,onScrollToMessage:q,onFileRef:G,onOpenWidget:K,emptyMessage:X,timelineRef:N,agents:V,user:U,onDeletePost:O,reverse:M=!0,removingPostIds:I,searchQuery:E}){let[J,D]=h(!1),k=T(null),i=typeof IntersectionObserver<"u",p=S(async()=>{if(!j||!$||J)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,J,j]),s=S((d)=>{let{scrollTop:j0,scrollHeight:_0,clientHeight:X0}=d.target,V0=M?_0-X0-j0:j0,W0=Math.max(300,X0);if(V0<W0)p()},[M,p]);u(()=>{if(!i)return;let d=k.current,j0=N?.current;if(!d||!j0)return;let _0=300,X0=new IntersectionObserver((V0)=>{for(let W0 of V0){if(!W0.isIntersecting)continue;p()}},{root:j0,rootMargin:`${_0}px 0px ${_0}px 0px`,threshold:0});return X0.observe(d),()=>X0.disconnect()},[i,$,j,N,p]);let e=T(p);if(e.current=p,u(()=>{if(i)return;if(!N?.current)return;let{scrollTop:d,scrollHeight:j0,clientHeight:_0}=N.current,X0=M?j0-_0-d:d,V0=Math.max(300,_0);if(X0<V0)e.current?.()},[i,_,$,M,N]),u(()=>{if(!N?.current)return;if(!$||J)return;let{scrollTop:d,scrollHeight:j0,clientHeight:_0}=N.current,X0=M?j0-_0-d:d,V0=Math.max(300,_0);if(j0<=_0+1||X0<V0)e.current?.()},[_,$,J,M,N]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let f=_.slice().sort((d,j0)=>d.id-j0.id),y=(d)=>{let j0=d?.data?.thread_id;if(j0===null||j0===void 0||j0==="")return null;let _0=Number(j0);return Number.isFinite(_0)?_0:null},H=new Map;for(let d=0;d<f.length;d+=1){let j0=f[d],_0=Number(j0?.id),X0=y(j0);if(X0!==null){let V0=H.get(X0)||{anchorIndex:-1,replyIndexes:[]};V0.replyIndexes.push(d),H.set(X0,V0)}else if(Number.isFinite(_0)){let V0=H.get(_0)||{anchorIndex:-1,replyIndexes:[]};V0.anchorIndex=d,H.set(_0,V0)}}let x=new Map;for(let[d,j0]of H.entries()){let _0=new Set;if(j0.anchorIndex>=0)_0.add(j0.anchorIndex);for(let X0 of j0.replyIndexes)_0.add(X0);x.set(d,Array.from(_0).sort((X0,V0)=>X0-V0))}let c=f.map((d,j0)=>{let _0=y(d);if(_0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let X0=x.get(_0);if(!X0||X0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let V0=X0.indexOf(j0);if(V0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:V0>0,hasThreadNext:V0<X0.length-1}}),q0=L`<div class="timeline-sentinel" ref=${k}></div>`;return L`
        <div class="timeline ${M?"reverse":"normal"}" ref=${N} onScroll=${s}>
            <div class="timeline-content">
                ${M?q0:null}
                ${f.map((d,j0)=>{let _0=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),X0=I?.has?.(d.id),V0=c[j0]||{};return L`
                    <${k7}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${_0}
                        isThreadPrev=${V0.hasThreadPrev}
                        isThreadNext=${V0.hasThreadNext}
                        isRemoving=${X0}
                        highlightQuery=${E}
                        agentName=${K7(d.data?.agent_id,V||{})}
                        agentAvatarUrl=${N7(d.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(d)}
                        onHashtagClick=${Y}
                        onMessageRef=${Q}
                        onScrollToMessage=${q}
                        onFileRef=${G}
                        onOpenWidget=${K}
                        onDelete=${O}
                    />
                `})}
                ${M?null:q0}
            </div>
        </div>
    `}class T7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let Q=Y===!0?0:typeof Y==="number"?Y:0;if(Q>j)j=Q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var o0=new T7;var o8=null,B$=null;function eQ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function P7(){if(B$)return Promise.resolve(B$);if(!o8)o8=import(eQ()).then((_)=>{return B$=_,_}).catch((_)=>{throw o8=null,_});return o8}class S7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await P7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var U$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new S7(_,$)}};function L$(){P7().catch(()=>{})}var t4="piclaw://terminal";var _q={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},$q={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},n8=null,F$=null;function jq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Zq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,Q)=>{let q=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!jq(q))return $(Y,Q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,Q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Yq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!n8)n8=Zq(()=>Promise.resolve($.init?.())).catch((j)=>{throw n8=null,j});return await n8,$}async function Qq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!F$)F$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await F$}async function qq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Gq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Xq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function L4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Kq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function x7(){let _=Xq(),$=_?$q:_q,j=L4("--bg-primary",_?"#000000":"#ffffff"),Z=L4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=L4("--text-secondary",_?"#71767b":"#536471"),Q=L4("--accent-color","#1d9bf0"),q=L4("--danger-color",_?"#ff7b72":"#cf222e"),G=L4("--success-color",_?"#7ee787":"#1a7f37"),K=L4("--bg-hover",_?"#1d1f23":"#e8ebed"),X=L4("--border-color",_?"#2f3336":"#eff3f4"),N=L4("--accent-soft-strong",Kq(Q,_?"47":"33"));return{background:j,foreground:Z,cursor:Q,cursorAccent:j,selectionBackground:N,selectionForeground:Z,black:K,red:q,green:G,yellow:$.yellow,blue:Q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class z${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,Q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(Q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Yq();if(await Qq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:x7()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=x7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await qq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Gq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var H$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new z$(_,$)}},J$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new z$(_,$)}};function F4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function s8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),Q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Q||Y>1||q)}function y7(_,$={}){if(F4($))return null;if(s8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Nq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function O$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function D$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function A$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function E$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function z4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function R7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function w7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let Q=j?.params&&typeof j.params==="object"?j.params:null;if(Q)for(let[q,G]of Object.entries(Q)){let K=String(q||"").trim();if(!K)continue;if(G===null||G===void 0||G==="")Z.searchParams.delete(K);else Z.searchParams.set(K,String(G))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function Nq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Vq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function f7(_,$={}){if(F4($))return null;if(s8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Vq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function a5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Wq(_){try{return JSON.parse(_)}catch{return null}}function Bq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function Uq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class M${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=Uq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||Wq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=Bq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var t5=()=>{throw Error("Operation requires compiling with --exportRuntime")},Lq=typeof BigUint64Array<"u",e5=Symbol();var Fq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function v7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return Fq.decode(Z)}catch{let Y="",Q=0;while(j-Q>1024)Y+=String.fromCharCode(...Z.subarray(Q,Q+=1024));return Y+String.fromCharCode(...Z.subarray(Q))}}function b7(_){let $={};function j(Y,Q){if(!Y)return"<yet unknown>";return v7(Y.buffer,Q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Q,q,G,K){let X=$.memory||Z.memory;throw Error(`abort: ${j(X,Q)} at ${j(X,q)}:${G}:${K}`)},Z.trace=Z.trace||function(Q,q,...G){let K=$.memory||Z.memory;console.log(`trace: ${j(K,Q)}${q?" ":""}${G.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function g7(_,$){let j=$.exports,Z=j.memory,Y=j.table,Q=j.__new||t5,q=j.__pin||t5,G=j.__unpin||t5,K=j.__collect||t5,X=j.__rtti_base,N=X?(H)=>H[X>>>2]:t5;_.__new=Q,_.__pin=q,_.__unpin=G,_.__collect=K;function V(H){let x=new Uint32Array(Z.buffer);if((H>>>=0)>=N(x))throw Error(`invalid id: ${H}`);return x[(X+4>>>2)+H]}function U(H){let x=V(H);if(!(x&7))throw Error(`not an array: ${H}, flags=${x}`);return x}function O(H){return 31-Math.clz32(H>>>6&31)}function M(H){if(H==null)return 0;let x=H.length,c=Q(x<<1,2),q0=new Uint16Array(Z.buffer);for(let d=0,j0=c>>>1;d<x;++d)q0[j0+d]=H.charCodeAt(d);return c}_.__newString=M;function I(H){if(H==null)return 0;let x=new Uint8Array(H),c=Q(x.length,1);return new Uint8Array(Z.buffer).set(x,c),c}_.__newArrayBuffer=I;function E(H){if(!H)return null;let x=Z.buffer;if(new Uint32Array(x)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return v7(x,H)}_.__getString=E;function J(H,x,c){let q0=Z.buffer;if(c)switch(H){case 2:return new Float32Array(q0);case 3:return new Float64Array(q0)}else switch(H){case 0:return new(x?Int8Array:Uint8Array)(q0);case 1:return new(x?Int16Array:Uint16Array)(q0);case 2:return new(x?Int32Array:Uint32Array)(q0);case 3:return new(x?BigInt64Array:BigUint64Array)(q0)}throw Error(`unsupported align: ${H}`)}function D(H,x=0){let c=x,q0=U(H),d=O(q0),j0=typeof c!=="number",_0=j0?c.length:c,X0=Q(_0<<d,q0&4?H:1),V0;if(q0&4)V0=X0;else{q(X0);let W0=Q(q0&2?16:12,H);G(X0);let J0=new Uint32Array(Z.buffer);if(J0[W0+0>>>2]=X0,J0[W0+4>>>2]=X0,J0[W0+8>>>2]=_0<<d,q0&2)J0[W0+12>>>2]=_0;V0=W0}if(j0){let W0=J(d,q0&2048,q0&4096),J0=X0>>>d;if(q0&16384)for(let E0=0;E0<_0;++E0)W0[J0+E0]=c[E0];else W0.set(c,J0)}return V0}_.__newArray=D;function k(H){let x=new Uint32Array(Z.buffer),c=x[H+-8>>>2],q0=U(c),d=O(q0),j0=q0&4?H:x[H+4>>>2],_0=q0&2?x[H+12>>>2]:x[j0+-4>>>2]>>>d;return J(d,q0&2048,q0&4096).subarray(j0>>>=d,j0+_0)}_.__getArrayView=k;function i(H){let x=k(H),c=x.length,q0=Array(c);for(let d=0;d<c;d++)q0[d]=x[d];return q0}_.__getArray=i;function p(H){let x=Z.buffer,c=new Uint32Array(x)[H+-4>>>2];return x.slice(H,H+c)}_.__getArrayBuffer=p;function s(H){if(!Y)throw Error("Operation requires compiling with --exportTable");let x=new Uint32Array(Z.buffer)[H>>>2];return Y.get(x)}_.__getFunction=s;function e(H,x,c){return new H(f(H,x,c))}function f(H,x,c){let q0=Z.buffer,d=new Uint32Array(q0);return new H(q0,d[c+4>>>2],d[c+8>>>2]>>>x)}function y(H,x,c){_[`__get${x}`]=e.bind(null,H,c),_[`__get${x}View`]=f.bind(null,H,c)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{y(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),Lq)[BigUint64Array,BigInt64Array].forEach((H)=>{y(H,H.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,Hq(j,_)}function m7(_){return typeof Response<"u"&&_ instanceof Response}function zq(_){return _ instanceof WebAssembly.Module}async function I$(_,$={}){if(m7(_=await _))return r8(_,$);let j=zq(_)?_:await WebAssembly.compile(_),Z=b7($),Y=await WebAssembly.instantiate(j,$),Q=g7(Z,Y);return{module:j,instance:Y,exports:Q}}async function r8(_,$={}){if(!WebAssembly.instantiateStreaming)return I$(m7(_=await _)?_.arrayBuffer():_,$);let j=b7($),Z=await WebAssembly.instantiateStreaming(_,$),Y=g7(j,Z.instance);return{...Z,exports:Y}}function Hq(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],Q=Z.split("."),q=$;while(Q.length>1){let X=Q.shift();if(!Object.hasOwn(q,X))q[X]={};q=q[X]}let G=Q[0],K=G.indexOf("#");if(K>=0){let X=G.substring(0,K),N=q[X];if(typeof N>"u"||!N.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[e5]}},V.wrap=function(U){return Object.create(V.prototype,{[e5]:{value:U,writable:!1}})},N)Object.getOwnPropertyNames(N).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(N,U)));q[X]=V}if(G=G.substring(K+1),q=q[X].prototype,/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4))){let V=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(q,G,{get(){return V(this[e5])},set(O){U(this[e5],O)},enumerable:!0})}}else if(G==="constructor")(q[G]=function(...V){return j(V.length),Y(...V)}).original=Y;else(q[G]=function(...V){return j(V.length),Y(this[e5],...V)}).original=Y}else if(/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4)))Object.defineProperty(q,G,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(q[G]=(...X)=>{return j(X.length),Y(...X)}).original=Y;else q[G]=Y}return $}var Oq="/static/js/vendor/remote-display-decoder.wasm",a8=null;function u7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function h7(){if(a8)return a8;return a8=(async()=>{try{let Z=function(Y,Q,q,G,K,X,N){let V=u7(Q),U=j.__pin(j.__newArrayBuffer(V));try{return j[Y](U,q,G,K,X,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(Oq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof r8==="function"?await r8(_,{}):await I$(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,Q){j.initFramebuffer(Y,Q)},getFramebuffer(){let Y=j.getFramebufferPtr(),Q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,Q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,Q,q,G,K,X){return Z("processRawRect",Y,Q,q,G,K,X)},processCopyRect(Y,Q,q,G,K,X){return j.processCopyRect(Y,Q,q,G,K,X)},processRreRect(Y,Q,q,G,K,X){return Z("processRreRect",Y,Q,q,G,K,X)},processHextileRect(Y,Q,q,G,K,X){return Z("processHextileRect",Y,Q,q,G,K,X)},processZrleTileData(Y,Q,q,G,K,X){return Z("processZrleTileData",Y,Q,q,G,K,X)},decodeRawRectToRgba(Y,Q,q,G){let K=u7(Y),X=j.__pin(j.__newArrayBuffer(K));try{let N=j.__pin(j.decodeRawRectToRgba(X,Q,q,G.bitsPerPixel,G.bigEndian?1:0,G.trueColor?1:0,G.redMax,G.greenMax,G.blueMax,G.redShift,G.greenShift,G.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(N))}finally{j.__unpin(N)}}finally{j.__unpin(X);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),a8}function O5(_,$,j){return Math.max($,Math.min(j,_))}function t8(_,$,j){let Z=new Uint8Array(6),Y=O5(Math.floor(Number($||0)),0,65535),Q=O5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=O5(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=Q>>8&255,Z[5]=Q&255,Z}function C$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function p7(_,$,j,Z,Y){let Q=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(Y||0))),G=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),X=(Number(_||0)-Number(j?.left||0))/G,N=(Number($||0)-Number(j?.top||0))/K;return{x:O5(Math.floor(X*Q),0,Math.max(0,Q-1)),y:O5(Math.floor(N*q),0,Math.max(0,q-1))}}function c7(_,$,j,Z=0){let Y=Number(_)<0?8:16,Q=O5(Number(Z||0)|Y,0,255);return[t8(Q,$,j),t8(Number(Z||0),$,j)]}function l7(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function _8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function d7(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),Q=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),G=Math.max(1,Math.floor(Number(Z||0))),K=Math.min(Y/q,Q/G);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var k$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)k$[`F${_}`]=65470+(_-1);function T$(_){let $=[_?.key,_?.code];for(let Q of $)if(Q&&Object.prototype.hasOwnProperty.call(k$,Q))return k$[Q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var b1=Uint8Array,D_=Uint16Array,b$=Int32Array,e8=new b1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_6=new b1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),R$=new b1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s7=function(_,$){var j=new D_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new b$(j[30]);for(var Z=1;Z<30;++Z)for(var Q=j[Z];Q<j[Z+1];++Q)Y[Q]=Q-j[Z]<<5|Z;return{b:j,r:Y}},r7=s7(e8,2),a7=r7.b,w$=r7.r;a7[28]=258,w$[258]=28;var t7=s7(_6,0),Dq=t7.b,i7=t7.r,f$=new D_(32768);for(d0=0;d0<32768;++d0)Z4=(d0&43690)>>1|(d0&21845)<<1,Z4=(Z4&52428)>>2|(Z4&13107)<<2,Z4=(Z4&61680)>>4|(Z4&3855)<<4,f$[d0]=((Z4&65280)>>8|(Z4&255)<<8)>>1;var Z4,d0,Y4=function(_,$,j){var Z=_.length,Y=0,Q=new D_($);for(;Y<Z;++Y)if(_[Y])++Q[_[Y]-1];var q=new D_($);for(Y=1;Y<$;++Y)q[Y]=q[Y-1]+Q[Y-1]<<1;var G;if(j){G=new D_(1<<$);var K=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var X=Y<<4|_[Y],N=$-_[Y],V=q[_[Y]-1]++<<N;for(var U=V|(1<<N)-1;V<=U;++V)G[f$[V]>>K]=X}}else{G=new D_(Z);for(Y=0;Y<Z;++Y)if(_[Y])G[Y]=f$[q[_[Y]-1]++]>>15-_[Y]}return G},x4=new b1(288);for(d0=0;d0<144;++d0)x4[d0]=8;var d0;for(d0=144;d0<256;++d0)x4[d0]=9;var d0;for(d0=256;d0<280;++d0)x4[d0]=7;var d0;for(d0=280;d0<288;++d0)x4[d0]=8;var d0,Y8=new b1(32);for(d0=0;d0<32;++d0)Y8[d0]=5;var d0,Aq=Y4(x4,9,0),Eq=Y4(x4,9,1),Mq=Y4(Y8,5,0),Iq=Y4(Y8,5,1),P$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},n_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},S$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},g$=function(_){return(_+7)/8|0},Z8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new b1(_.subarray($,j))};var kq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B_=function(_,$,j){var Z=Error($||kq[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,B_);if(!j)throw Z;return Z},Cq=function(_,$,j,Z){var Y=_.length,Q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new b1(0);var q=!j,G=q||$.i!=2,K=$.i;if(q)j=new b1(Y*3);var X=function(j1){var z0=j.length;if(j1>z0){var l0=new b1(Math.max(z0*2,j1));l0.set(j),j=l0}},N=$.f||0,V=$.p||0,U=$.b||0,O=$.l,M=$.d,I=$.m,E=$.n,J=Y*8;do{if(!O){N=n_(_,V,1);var D=n_(_,V+1,3);if(V+=3,!D){var k=g$(V)+4,i=_[k-4]|_[k-3]<<8,p=k+i;if(p>Y){if(K)B_(0);break}if(G)X(U+i);j.set(_.subarray(k,p),U),$.b=U+=i,$.p=V=p*8,$.f=N;continue}else if(D==1)O=Eq,M=Iq,I=9,E=5;else if(D==2){var s=n_(_,V,31)+257,e=n_(_,V+10,15)+4,f=s+n_(_,V+5,31)+1;V+=14;var y=new b1(f),H=new b1(19);for(var x=0;x<e;++x)H[R$[x]]=n_(_,V+x*3,7);V+=e*3;var c=P$(H),q0=(1<<c)-1,d=Y4(H,c,1);for(var x=0;x<f;){var j0=d[n_(_,V,q0)];V+=j0&15;var k=j0>>4;if(k<16)y[x++]=k;else{var _0=0,X0=0;if(k==16)X0=3+n_(_,V,3),V+=2,_0=y[x-1];else if(k==17)X0=3+n_(_,V,7),V+=3;else if(k==18)X0=11+n_(_,V,127),V+=7;while(X0--)y[x++]=_0}}var V0=y.subarray(0,s),W0=y.subarray(s);I=P$(V0),E=P$(W0),O=Y4(V0,I,1),M=Y4(W0,E,1)}else B_(1);if(V>J){if(K)B_(0);break}}if(G)X(U+131072);var J0=(1<<I)-1,E0=(1<<E)-1,M0=V;for(;;M0=V){var _0=O[S$(_,V)&J0],n0=_0>>4;if(V+=_0&15,V>J){if(K)B_(0);break}if(!_0)B_(2);if(n0<256)j[U++]=n0;else if(n0==256){M0=V,O=null;break}else{var y0=n0-254;if(n0>264){var x=n0-257,C0=e8[x];y0=n_(_,V,(1<<C0)-1)+a7[x],V+=C0}var s0=M[S$(_,V)&E0],r0=s0>>4;if(!s0)B_(3);V+=s0&15;var W0=Dq[r0];if(r0>3){var C0=_6[r0];W0+=S$(_,V)&(1<<C0)-1,V+=C0}if(V>J){if(K)B_(0);break}if(G)X(U+131072);var h0=U+y0;if(U<W0){var t0=Q-W0,p0=Math.min(W0,h0);if(t0+U<0)B_(3);for(;U<p0;++U)j[U]=Z[t0+U]}for(;U<h0;++U)j[U]=j[U-W0]}}if($.l=O,$.p=M0,$.b=U,$.f=N,O)N=1,$.m=I,$.d=M,$.n=E}while(!N);return U!=j.length&&q?Z8(j,0,U):j.subarray(0,U)},H4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},$8=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},x$=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,Q=j.slice();if(!Y)return{t:_9,l:0};if(Y==1){var q=new b1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(p,s){return p.f-s.f}),j.push({s:-1,f:25001});var G=j[0],K=j[1],X=0,N=1,V=2;j[0]={s:-1,f:G.f+K.f,l:G,r:K};while(N!=Y-1)G=j[j[X].f<j[V].f?X++:V++],K=j[X!=N&&j[X].f<j[V].f?X++:V++],j[N++]={s:-1,f:G.f+K.f,l:G,r:K};var U=Q[0].s;for(var Z=1;Z<Y;++Z)if(Q[Z].s>U)U=Q[Z].s;var O=new D_(U+1),M=v$(j[N-1],O,0);if(M>$){var Z=0,I=0,E=M-$,J=1<<E;Q.sort(function(s,e){return O[e.s]-O[s.s]||s.f-e.f});for(;Z<Y;++Z){var D=Q[Z].s;if(O[D]>$)I+=J-(1<<M-O[D]),O[D]=$;else break}I>>=E;while(I>0){var k=Q[Z].s;if(O[k]<$)I-=1<<$-O[k]++-1;else++Z}for(;Z>=0&&I;--Z){var i=Q[Z].s;if(O[i]==$)--O[i],++I}M=$}return{t:new b1(O),l:M}},v$=function(_,$,j){return _.s==-1?Math.max(v$(_.l,$,j+1),v$(_.r,$,j+1)):$[_.s]=j},o7=function(_){var $=_.length;while($&&!_[--$]);var j=new D_(++$),Z=0,Y=_[0],Q=1,q=function(K){j[Z++]=K};for(var G=1;G<=$;++G)if(_[G]==Y&&G!=$)++Q;else{if(!Y&&Q>2){for(;Q>138;Q-=138)q(32754);if(Q>2)q(Q>10?Q-11<<5|28690:Q-3<<5|12305),Q=0}else if(Q>3){q(Y),--Q;for(;Q>6;Q-=6)q(8304);if(Q>2)q(Q-3<<5|8208),Q=0}while(Q--)q(Y);Q=1,Y=_[G]}return{c:j.subarray(0,Z),n:$}},j8=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},e7=function(_,$,j){var Z=j.length,Y=g$($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var Q=0;Q<Z;++Q)_[Y+Q+4]=j[Q];return(Y+4+Z)*8},n7=function(_,$,j,Z,Y,Q,q,G,K,X,N){H4($,N++,j),++Y[256];var V=x$(Y,15),U=V.t,O=V.l,M=x$(Q,15),I=M.t,E=M.l,J=o7(U),D=J.c,k=J.n,i=o7(I),p=i.c,s=i.n,e=new D_(19);for(var f=0;f<D.length;++f)++e[D[f]&31];for(var f=0;f<p.length;++f)++e[p[f]&31];var y=x$(e,7),H=y.t,x=y.l,c=19;for(;c>4&&!H[R$[c-1]];--c);var q0=X+5<<3,d=j8(Y,x4)+j8(Q,Y8)+q,j0=j8(Y,U)+j8(Q,I)+q+14+3*c+j8(e,H)+2*e[16]+3*e[17]+7*e[18];if(K>=0&&q0<=d&&q0<=j0)return e7($,N,_.subarray(K,K+X));var _0,X0,V0,W0;if(H4($,N,1+(j0<d)),N+=2,j0<d){_0=Y4(U,O,0),X0=U,V0=Y4(I,E,0),W0=I;var J0=Y4(H,x,0);H4($,N,k-257),H4($,N+5,s-1),H4($,N+10,c-4),N+=14;for(var f=0;f<c;++f)H4($,N+3*f,H[R$[f]]);N+=3*c;var E0=[D,p];for(var M0=0;M0<2;++M0){var n0=E0[M0];for(var f=0;f<n0.length;++f){var y0=n0[f]&31;if(H4($,N,J0[y0]),N+=H[y0],y0>15)H4($,N,n0[f]>>5&127),N+=n0[f]>>12}}}else _0=Aq,X0=x4,V0=Mq,W0=Y8;for(var f=0;f<G;++f){var C0=Z[f];if(C0>255){var y0=C0>>18&31;if($8($,N,_0[y0+257]),N+=X0[y0+257],y0>7)H4($,N,C0>>23&31),N+=e8[y0];var s0=C0&31;if($8($,N,V0[s0]),N+=W0[s0],s0>3)$8($,N,C0>>5&8191),N+=_6[s0]}else $8($,N,_0[C0]),N+=X0[C0]}return $8($,N,_0[256]),N+X0[256]},Tq=new b$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),_9=new b1(0),Pq=function(_,$,j,Z,Y,Q){var q=Q.z||_.length,G=new b1(Z+q+5*(1+Math.ceil(q/7000))+Y),K=G.subarray(Z,G.length-Y),X=Q.l,N=(Q.r||0)&7;if($){if(N)K[0]=Q.r>>3;var V=Tq[$-1],U=V>>13,O=V&8191,M=(1<<j)-1,I=Q.p||new D_(32768),E=Q.h||new D_(M+1),J=Math.ceil(j/3),D=2*J,k=function(Z1){return(_[Z1]^_[Z1+1]<<J^_[Z1+2]<<D)&M},i=new b$(25000),p=new D_(288),s=new D_(32),e=0,f=0,y=Q.i||0,H=0,x=Q.w||0,c=0;for(;y+2<q;++y){var q0=k(y),d=y&32767,j0=E[q0];if(I[d]=j0,E[q0]=d,x<=y){var _0=q-y;if((e>7000||H>24576)&&(_0>423||!X)){N=n7(_,K,0,i,p,s,f,H,c,y-c,N),H=e=f=0,c=y;for(var X0=0;X0<286;++X0)p[X0]=0;for(var X0=0;X0<30;++X0)s[X0]=0}var V0=2,W0=0,J0=O,E0=d-j0&32767;if(_0>2&&q0==k(y-E0)){var M0=Math.min(U,_0)-1,n0=Math.min(32767,y),y0=Math.min(258,_0);while(E0<=n0&&--J0&&d!=j0){if(_[y+V0]==_[y+V0-E0]){var C0=0;for(;C0<y0&&_[y+C0]==_[y+C0-E0];++C0);if(C0>V0){if(V0=C0,W0=E0,C0>M0)break;var s0=Math.min(E0,C0-2),r0=0;for(var X0=0;X0<s0;++X0){var h0=y-E0+X0&32767,t0=I[h0],p0=h0-t0&32767;if(p0>r0)r0=p0,j0=h0}}}d=j0,j0=I[d],E0+=d-j0&32767}}if(W0){i[H++]=268435456|w$[V0]<<18|i7[W0];var j1=w$[V0]&31,z0=i7[W0]&31;f+=e8[j1]+_6[z0],++p[257+j1],++s[z0],x=y+V0,++e}else i[H++]=_[y],++p[_[y]]}}for(y=Math.max(y,x);y<q;++y)i[H++]=_[y],++p[_[y]];if(N=n7(_,K,X,i,p,s,f,H,c,y-c,N),!X)Q.r=N&7|K[N/8|0]<<3,N-=7,Q.h=E,Q.p=I,Q.i=y,Q.w=x}else{for(var y=Q.w||0;y<q+X;y+=65535){var l0=y+65535;if(l0>=q)K[N/8|0]=X,l0=q;N=e7(K,N+1,_.subarray(y,l0))}Q.i=q}return Z8(G,0,Z+g$(N)+Y)};var $9=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,Q=j.length|0;for(var q=0;q!=Q;){var G=Math.min(q+2655,Q);for(;q<G;++q)Y+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},Sq=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var Q=$.dictionary.subarray(-32768),q=new b1(Q.length+_.length);q.set(Q),q.set(_,Q.length),_=q,Y.w=Q.length}}return Pq(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var j9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var xq=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=$9();Y.p($.dictionary),j9(_,2,Y.d())}},yq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)B_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)B_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var y$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new b1(32768),this.p=new b1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)B_(5);if(this.d)B_(4);if(!this.p.length)this.p=$;else if($.length){var j=new b1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=Cq(this.p,this.s,this.o);this.ondata(Z8(Z,j,this.s.b),this.d),this.o=Z8(Z,this.s.b-32768),this.s.b=this.o.length,this.p=Z8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function Z9(_,$){if(!$)$={};var j=$9();j.p(_);var Z=Sq(_,$,$.dictionary?6:2,4);return xq(Z,$),j9(Z,Z.length-4,j.d()),Z}var Y9=function(){function _($,j){y$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(y$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(yq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)B_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}y$.prototype.c.call(this,j)},_}();var Rq=typeof TextDecoder<"u"&&new TextDecoder,wq=0;try{Rq.decode(_9,{stream:!0}),wq=1}catch(_){}var fq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],vq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],bq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],gq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],mq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],uq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],hq=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],pq=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],G9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;G9[_]=$}function X9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function K9(_){let $=0n,j=X9(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function cq(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function D5(_,$,j){let Z=0n;for(let Y of $){let Q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|Q}return Z}function Q9(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function lq(_){let $=D5(K9(_),mq,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let Q of hq){j=Q9(j,Q),Z=Q9(Z,Q);let q=j<<28n|Z;Y.push(D5(q,uq,56))}return Y}function dq(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),Q=(Y&32)>>4|Y&1,q=Y>>1&15;$=$<<4n|BigInt(pq[j][Q][q])}return $}function iq(_,$){let j=D5(_,bq,32)^BigInt($),Z=dq(j);return D5(Z,gq,32)}function q9(_,$){let j=lq($),Z=D5(K9(_),fq,64),Y=Z>>32n&0xffffffffn,Q=Z&0xffffffffn;for(let G of j){let K=Q,X=(Y^iq(Q,G))&0xffffffffn;Y=K,Q=X}let q=Q<<32n|Y;return cq(D5(q,vq,64),8)}function oq(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=G9[Y]}return j}function N9(_,$){let j=X9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=oq(_),Y=new Uint8Array(16);return Y.set(q9(j.slice(0,8),Z),0),Y.set(q9(j.slice(8,16),Z),8),Y}var s_="vnc";function nq(_){return Number(_)}function sq(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let Q=nq(Y);if(!Number.isFinite(Q))continue;let q=Number(Q);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function M5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function rq(_,$){let j=M5(_),Z=M5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function aq(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let Q=M5(Y);j.set(Q,Z),Z+=Q.byteLength}return j}function tq(){return(_)=>{let $=M5(_);try{let j=[],Z=new Y9((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return aq(j)}catch(j){try{let Z=Z9($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function eq(_){return new TextEncoder().encode(String(_||""))}function A5(_){return new TextDecoder().decode(M5(_))}function _G(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function $G(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function V9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function jG(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function ZG(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let Q of $)Z.setInt32(Y,Number(Q||0),!1),Y+=4;return new Uint8Array(j)}function W9(_,$,j,Z=0,Y=0){let Q=new ArrayBuffer(10),q=new DataView(Q);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,Y,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Q)}function E5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function U9(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function YG(_,$,j,Z){let Y=Z||I5,Q=M5(_),q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),G=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Q.byteLength<G)throw Error(`Incomplete raw rectangle payload: expected ${G} byte(s), got ${Q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),X=0,N=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=U9(Q,X,q,Y.bigEndian),O=E5(U>>>Y.redShift&Y.redMax,Y.redMax),M=E5(U>>>Y.greenShift&Y.greenMax,Y.greenMax),I=E5(U>>>Y.blueShift&Y.blueMax,Y.blueMax);K[N]=O,K[N+1]=M,K[N+2]=I,K[N+3]=255,X+=q,N+=4}return K}function J4(_,$,j){let Z=j||I5,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let Q=U9(_,$,Y,Z.bigEndian);return{rgba:[E5(Q>>>Z.redShift&Z.redMax,Z.redMax),E5(Q>>>Z.greenShift&Z.greenMax,Z.greenMax),E5(Q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function y4(_,$,j,Z,Y,Q,q){if(!q)return;for(let G=0;G<Q;G+=1)for(let K=0;K<Y;K+=1){let X=((Z+G)*$+(j+K))*4;_[X]=q[0],_[X+1]=q[1],_[X+2]=q[2],_[X+3]=q[3]}}function L9(_,$,j,Z,Y,Q,q){for(let G=0;G<Q;G+=1){let K=G*Y*4,X=((Z+G)*$+j)*4;_.set(q.subarray(K,K+Y*4),X)}}function B9(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function QG(_,$,j,Z,Y,Q,q){let G=Y||I5,K=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let X=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+X)return null;let N=_.slice($+4,$+4+X),V;try{V=q(N)}catch{return{consumed:4+X,skipped:!0}}let U=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let M=0;M<Z;M+=64){let I=Math.min(64,Z-M);for(let E=0;E<j;E+=64){let J=Math.min(64,j-E);if(V.byteLength<U+1)return null;let D=V[U++],k=D&127,i=(D&128)!==0;if(!i&&k===0){let p=J*I*K;if(V.byteLength<U+p)return null;let s=Q(V.slice(U,U+p),J,I,G);U+=p,L9(O,j,E,M,J,I,s);continue}if(!i&&k===1){let p=J4(V,U,G);if(!p)return null;U+=p.bytesPerPixel,y4(O,j,E,M,J,I,p.rgba);continue}if(!i&&k>1&&k<=16){let p=[];for(let y=0;y<k;y+=1){let H=J4(V,U,G);if(!H)return null;U+=H.bytesPerPixel,p.push(H.rgba)}let s=k<=2?1:k<=4?2:4,e=Math.ceil(J*s/8),f=e*I;if(V.byteLength<U+f)return null;for(let y=0;y<I;y+=1){let H=U+y*e;for(let x=0;x<J;x+=1){let c=x*s,q0=H+(c>>3),d=8-s-(c&7),j0=V[q0]>>d&(1<<s)-1;y4(O,j,E+x,M+y,1,1,p[j0])}}U+=f;continue}if(i&&k===0){let p=0,s=0;while(s<I){let e=J4(V,U,G);if(!e)return null;U+=e.bytesPerPixel;let f=B9(V,U);if(!f)return null;U+=f.consumed;for(let y=0;y<f.runLength;y+=1)if(y4(O,j,E+p,M+s,1,1,e.rgba),p+=1,p>=J){if(p=0,s+=1,s>=I)break}}continue}if(i&&k>0){let p=[];for(let f=0;f<k;f+=1){let y=J4(V,U,G);if(!y)return null;U+=y.bytesPerPixel,p.push(y.rgba)}let s=0,e=0;while(e<I){if(V.byteLength<U+1)return null;let f=V[U++],y=f,H=1;if(f&128){y=f&127;let c=B9(V,U);if(!c)return null;U+=c.consumed,H=c.runLength}let x=p[y];if(!x)return null;for(let c=0;c<H;c+=1)if(y4(O,j,E+s,M+e,1,1,x),s+=1,s>=J){if(s=0,e+=1,e>=I)break}}continue}return{consumed:4+X,skipped:!0}}}return{consumed:4+X,rgba:O,decompressed:V}}function qG(_,$,j,Z,Y){let Q=Y||I5,q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),X=4+q+K*(q+8);if(_.byteLength<$+X)return null;let N=$+4,V=J4(_,N,Q);if(!V)return null;N+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);y4(U,j,0,0,j,Z,V.rgba);for(let O=0;O<K;O+=1){let M=J4(_,N,Q);if(!M)return null;if(N+=M.bytesPerPixel,_.byteLength<N+8)return null;let I=new DataView(_.buffer,_.byteOffset+N,8),E=I.getUint16(0,!1),J=I.getUint16(2,!1),D=I.getUint16(4,!1),k=I.getUint16(6,!1);N+=8,y4(U,j,E,J,D,k,M.rgba)}return{consumed:N-$,rgba:U}}function GG(_,$,j,Z,Y,Q){let q=Y||I5,G=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),X=$,N=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<Z;U+=16){let O=Math.min(16,Z-U);for(let M=0;M<j;M+=16){let I=Math.min(16,j-M);if(_.byteLength<X+1)return null;let E=_[X++];if(E&1){let J=I*O*G;if(_.byteLength<X+J)return null;let D=Q(_.slice(X,X+J),I,O,q);X+=J,L9(K,j,M,U,I,O,D);continue}if(E&2){let J=J4(_,X,q);if(!J)return null;N=J.rgba,X+=J.bytesPerPixel}if(y4(K,j,M,U,I,O,N),E&4){let J=J4(_,X,q);if(!J)return null;V=J.rgba,X+=J.bytesPerPixel}if(E&8){if(_.byteLength<X+1)return null;let J=_[X++];for(let D=0;D<J;D+=1){let k=V;if(E&16){let H=J4(_,X,q);if(!H)return null;k=H.rgba,X+=H.bytesPerPixel}if(_.byteLength<X+2)return null;let i=_[X++],p=_[X++],s=i>>4,e=i&15,f=(p>>4)+1,y=(p&15)+1;y4(K,j,M+s,U+e,f,y,k)}}}}return{consumed:X-$,rgba:K}}var I5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class $6{protocol=s_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:YG,this.pipeline=_.pipeline||null,this.encodings=sq(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...I5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:tq()}receive(_){if(_)this.buffer=rq(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),Q=A5(Y),q=_G(Q);if(!q)throw Error(`Unsupported RFB version banner: ${Q||"<empty>"}`);this.serverVersion=q,this.clientVersionText=$G(q),j.push(eq(this.clientVersionText)),$.push({type:"protocol-version",protocol:s_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let X=A5(this.consume(4+K).slice(4));throw Error(X||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let Q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:s_,types:Q});let q=null;if(Q.includes(2)&&this.password!==null)q=2;else if(Q.includes(1))q=1;else if(Q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:s_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q===0){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+G)break;let K=A5(this.consume(4+G).slice(4));throw Error(K||"VNC server rejected the connection.")}if(Q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:s_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Q!==1)throw Error(`Unsupported VNC security type ${Q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:s_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(N9(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let G=A5(this.consume(4+q).slice(4));throw Error(G||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:s_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Q=Y.getUint16(0,!1),q=Y.getUint16(2,!1),G=V9(Y,4),K=Y.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let X=this.consume(24),N=new DataView(X.buffer,X.byteOffset,X.byteLength);if(this.framebufferWidth=N.getUint16(0,!1),this.framebufferHeight=N.getUint16(2,!1),this.serverPixelFormat=V9(N,4),this.serverName=A5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(jG(this.clientPixelFormat)),j.push(ZG(this.encodings)),j.push(W9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:s_,width:Q,height:q,name:this.serverName,pixelFormat:G}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),G=4,K=[],X=!1,N=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<G+12){X=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,12),M=O.getUint16(0,!1),I=O.getUint16(2,!1),E=O.getUint16(4,!1),J=O.getUint16(6,!1),D=O.getInt32(8,!1);if(G+=12,D===0){let k=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),i=E*J*k;if(this.buffer.byteLength<G+i){X=!0;break}let p=this.buffer.slice(G,G+i);if(G+=i,N)this.pipeline.processRawRect(p,M,I,E,J,this.clientPixelFormat),K.push({kind:"pipeline",x:M,y:I,width:E,height:J});else K.push({kind:"rgba",x:M,y:I,width:E,height:J,rgba:this.decodeRawRect(p,E,J,this.clientPixelFormat)});continue}if(D===2){let k=qG(this.buffer,G,E,J,this.clientPixelFormat);if(!k){X=!0;break}if(N){let i=this.buffer.slice(G,G+k.consumed);this.pipeline.processRreRect(i,M,I,E,J,this.clientPixelFormat),K.push({kind:"pipeline",x:M,y:I,width:E,height:J})}else K.push({kind:"rgba",x:M,y:I,width:E,height:J,rgba:k.rgba});G+=k.consumed;continue}if(D===1){if(this.buffer.byteLength<G+4){X=!0;break}let k=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,4),i=k.getUint16(0,!1),p=k.getUint16(2,!1);if(G+=4,N)this.pipeline.processCopyRect(M,I,E,J,i,p),K.push({kind:"pipeline",x:M,y:I,width:E,height:J});else K.push({kind:"copy",x:M,y:I,width:E,height:J,srcX:i,srcY:p});continue}if(D===16){let k=QG(this.buffer,G,E,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!k){X=!0;break}if(G+=k.consumed,k.skipped)continue;if(N&&k.decompressed)this.pipeline.processZrleTileData(k.decompressed,M,I,E,J,this.clientPixelFormat),K.push({kind:"pipeline",x:M,y:I,width:E,height:J});else K.push({kind:"rgba",x:M,y:I,width:E,height:J,rgba:k.rgba});continue}if(D===5){let k=GG(this.buffer,G,E,J,this.clientPixelFormat,this.decodeRawRect);if(!k){X=!0;break}if(N){let i=this.buffer.slice(G,G+k.consumed);this.pipeline.processHextileRect(i,M,I,E,J,this.clientPixelFormat),K.push({kind:"pipeline",x:M,y:I,width:E,height:J})}else K.push({kind:"rgba",x:M,y:I,width:E,height:J,rgba:k.rgba});G+=k.consumed;continue}if(D===-223){if(this.framebufferWidth=E,this.framebufferHeight=J,N)this.pipeline.initFramebuffer(E,J);K.push({kind:"resize",x:M,y:I,width:E,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(X)break;this.consume(G);let V={type:"framebuffer-update",protocol:s_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(N)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(W9(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:s_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let G=A5(this.consume(q));$.push({type:"clipboard",protocol:s_,text:G}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var Q4="piclaw://vnc";function XG(_){let $=String(_||"");if($===Q4)return null;if(!$.startsWith(`${Q4}/`))return null;let j=$.slice(`${Q4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function e4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function KG(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function NG(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function VG(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function WG(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function BG(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class F9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=XG($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=BG("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                        ${$.map((Y)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${e4(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${e4(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${e4(Y.id)}" data-target-label="${e4(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=WG(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=_8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let Q=Y.getAttribute("data-target-open-tab"),q=Y.getAttribute("data-target-label")||Q||"VNC";if(!Q)return;this.openTargetTab(Q,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=_8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=_8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${Q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=d7($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return p7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(t8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=C$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~C$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of c7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(l7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=T$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??T$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new $6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await h7(),Y={};if(Z)Y.pipeline=Z,Y.decodeRawRect=(G,K,X,N)=>Z.decodeRawRectToRgba(G,K,X,N);let Q=_8(this.authPassword);if(Q!==null)Y.password=Q;if(j)Y.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new $6(Y),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new M$({url:VG(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(G)=>{this.applyMetrics(G)},onMessage:(G)=>{this.handleSocketMessage(G)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await KG(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${e4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await NG(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var m$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===Q4||$.startsWith(`${Q4}/`)?9000:!1},mount(_,$){return new F9(_,$)}};function R4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function UG(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,Q=Z?.[2]||"",q=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),X=Y.startsWith("/")?Y:`${G?`${G}/`:""}${Y}`,N=[];for(let U of X.split("/")){if(!U||U===".")continue;if(U===".."){if(N.length>0)N.pop();continue}N.push(U)}let V=N.join("/");return`${k8(V)}${Q}${q}`}function Q8(_){return _?.preview||null}function LG(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function FG(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function zG(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${R4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${R4(b_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${R4(a4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${R4(FG($))}</span>`),Z.push(`<span><strong>extension:</strong> ${R4(LG(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${R4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function HG(_){let $=Q8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=zG(_,$);if($.kind==="image"){let Z=$.url||($.path?k8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${R4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=O_($.text||"",null,{rewriteImageSrc:(Y)=>UG(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${R4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class u${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=HG(this.context)}getContent(){let _=Q8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=Q8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var h$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Q8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new u$(_,$)}},p$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Q8(_)||_?.path?1:!1},mount(_,$){return new u$(_,$)}};var JG=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),OG={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},DG={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function H9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function z9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class J9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=H9(j),Q=DG[Y]||"\uD83D\uDCC4",q=OG[Y]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${z9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${z9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let K=G.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class O9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var c$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=H9(_?.path);if(!$||!JG.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new J9(_,$);return new O9(_,$)}};var AG=/\.(csv|tsv)$/i;function D9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class A9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${D9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${D9(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!AG.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new A9(_,$);return new E9(_,$)}};var EG=/\.pdf$/i;function MG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class M9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${MG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#pdf-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var d$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!EG.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new M9(_,$);return new I9(_,$)}};var IG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function i$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class k9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${i$(Y)}" alt="${i$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${i$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class C9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var o$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!IG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new k9(_,$);return new C9(_,$)}};var kG=/\.(mp4|m4v|mov|webm|ogv)$/i;function CG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class T9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${CG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#video-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class P9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var n$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new T9(_,$);return new P9(_,$)}};function TG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function PG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var s$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function S9(_){let $=String(_||"").trim();return $?$:s$}function SG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function xG(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function yG(_,$="*"){try{let j=(Q)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Q=Z.prototype.saveData;Z.prototype.saveData=function(q,G,K,X,N,V){try{if(q&&K!=null&&j({filename:q,format:G,data:K,mimeType:X,base64Encoded:Boolean(N),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let Q=Y.prototype.exportFile;Y.prototype.exportFile=function(q,G,K,X,N,V){try{if(G&&j({filename:G,data:q,mimeType:K,base64Encoded:Boolean(X),mode:N,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function x9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${xG(j)}`}class y9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${PG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#drawio-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class R9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=SG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(yG(this.iframe.contentWindow))return;setTimeout(Q,250)};Q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=s$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await x9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await x9(_,"image/png");else this.xmlData=S9(await _.text());else if(_.status===404)this.xmlData=s$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?S9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var r$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!TG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new y9(_,$);return new R9(_,$)}};var RG=/\.mindmap\.ya?ml$/i,a$=String(Date.now());function w9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function t$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function wG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function fG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(j);let Z=document.createElement("div");Z.id="context-menu",Z.className="context-menu hidden",Z.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Z)}class f9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class v9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(w9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,wG("/static/css/mindmap.css"),await Promise.all([t$("/static/js/vendor/d3-mindmap.min.js?v="+a$),t$("/static/js/vendor/js-yaml.min.js?v="+a$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),fG(this.mindmapEl);let j=w9(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await t$("/static/js/vendor/mindmap-editor.js?v="+a$),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(Q)=>{this.lastContent=Q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)},resolveImagePath:(Q)=>{if(Q.startsWith("data:")||Q.startsWith("http"))return Q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var e$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!RG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new f9(_,$);return new v9(_,$)}};var vG=/\.kanban\.md$/i,bG=String(Date.now());function b9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function gG(){let _=window;if(_.preact)return;_.preact={h:A8,render:P4,Component:N5,createContext:K2},_.preactHooks={useState:h,useEffect:u,useCallback:S,useRef:T,useMemo:v0,useReducer:I6,useContext:W2,useLayoutEffect:g5,useImperativeHandle:V2,useErrorBoundary:U2,useDebugValue:B2},_.htm={bind:()=>L}}function mG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function uG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class g9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class m9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(b9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,uG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=b9();try{if(gG(),await mG("/static/js/vendor/kanban-editor.js?v="+bG),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var _3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!vG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new g9(_,$);return new m9(_,$)}};class u9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new u9;var j6="workspaceExplorerScale",hG=["compact","default","comfortable"],pG=new Set(hG),cG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function h9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return pG.has(j)?j:$}function $3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function lG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function dG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function j3(_={}){let $=lG(_),j=_.stored?h9(_.stored,$):$;return dG(j,_)}function p9(_){return cG[h9(_)]}function iG(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function Z3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function c9(_,$,j={}){let Z=j?.resolvePane;if(Z3(_,Z))return!0;return iG($)}var oG=60000,o9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function nG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Z3($,(j)=>o0.resolve(j))}function n9(_,$,j,Z=0,Y=[]){if(!j&&o9(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Q of _.children)n9(Q,$,j,Z+1,Y);return Y}function l9(_,$,j){if(!_)return"";let Z=[],Y=(Q)=>{if(!j&&o9(Q))return;if(Z.push(Q.type==="dir"?`d:${Q.path}`:`f:${Q.path}`),Q.children&&$?.has(Q.path))for(let q of Q.children)Y(q)};return Y(_),Z.join("|")}function G3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((G)=>[G?.path,G])):new Map,Q=!j||j.length!==Z.length,q=Z.map((G)=>{let K=G3(Y.get(G.path),G);if(K!==Y.get(G.path))Q=!0;return K});return Q?{...$,children:q}:_}function Q3(_,$,j){if(!_)return _;if(_.path===$)return G3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((Q)=>{let q=Q3(Q,$,j);if(q!==Q)Z=!0;return q});return Z?{..._,children:Y}:_}var s9=4,Y3=14,sG=8,rG=16;function r9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=r9(Z);return _.__bytes=j,j}function a9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=s9)return Z;let Y=Array.isArray(_.children)?_.children:[],Q=[];for(let G of Y){let K=Math.max(0,Number(G?.__bytes??G?.size??0));if(K<=0)continue;if(G.type==="dir")Q.push({kind:"dir",node:G,size:K});else Q.push({kind:"file",name:G.name,path:G.path,size:K})}Q.sort((G,K)=>K.size-G.size);let q=Q;if(Q.length>Y3){let G=Q.slice(0,Y3-1),K=Q.slice(Y3-1),X=K.reduce((N,V)=>N+V.size,0);G.push({kind:"other",name:`+${K.length} more`,path:`${Z.path}/[other]`,size:X}),q=G}return Z.children=q.map((G)=>{if(G.kind==="dir")return a9(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function d9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function t9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${Q}%)`}function Z6(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function X3(_,$,j,Z,Y,Q){let q=Math.PI*2-0.0001,G=Q-Y>q?Y+q:Q,K=Z6(_,$,Z,Y),X=Z6(_,$,Z,G),N=Z6(_,$,j,G),V=Z6(_,$,j,Y),U=G-Y>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var e9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function _j(_,$,j){let Z=[],Y=[],Q=Math.max(0,Number($)||0),q=(G,K,X,N)=>{let V=Array.isArray(G?.children)?G.children:[];if(!V.length)return;let U=Math.max(0,Number(G.size)||0);if(U<=0)return;let O=X-K,M=K;V.forEach((I,E)=>{let J=Math.max(0,Number(I.size)||0);if(J<=0)return;let D=J/U,k=M,i=E===V.length-1?X:M+O*D;if(M=i,i-k<0.003)return;let p=e9[N];if(p){let s=t9(k,N,j);if(Z.push({key:I.path,path:I.path,label:I.name,size:J,color:s,depth:N,startAngle:k,endAngle:i,innerRadius:p[0],outerRadius:p[1],d:X3(120,120,p[0],p[1],k,i)}),N===1)Y.push({key:I.path,name:I.name,size:J,pct:Q>0?J/Q*100:0,color:s})}if(N<s9)q(I,k,i,N+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function q3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=q3(Z,$);if(Y)return Y}return null}function $j(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=e9[1];if(!Y)return{segments:[],legend:[]};let Q=-Math.PI/2,q=Math.PI*3/2,G=t9(Q,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:G,depth:1,startAngle:Q,endAngle:q,innerRadius:Y[0],outerRadius:Y[1],d:X3(120,120,Y[0],Y[1],Q,q)}],legend:[{key:X,name:_,size:j,pct:100,color:G}]}}function i9(_,$=!1,j=!1){if(!_)return null;let Z=r9(_),Y=a9(_,0),Q=Y.size||Z,{segments:q,legend:G}=_j(Y,Q,j);if(!q.length&&Q>0){let K=$j("[files]",Y.path,Q,j);q=K.segments,G=K.legend}return{root:Y,totalSize:Q,segments:q,legend:G,truncated:$,isDarkTheme:j}}function aG({payload:_}){if(!_)return null;let[$,j]=h(null),[Z,Y]=h(_?.root?.path||"."),[Q,q]=h(()=>[_?.root?.path||"."]),[G,K]=h(!1);u(()=>{let H=_?.root?.path||".";Y(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!Z)return;K(!0);let H=setTimeout(()=>K(!1),180);return()=>clearTimeout(H)},[Z]);let X=v0(()=>{return q3(_.root,Z)||_.root},[_?.root,Z]),N=X?.size||_.totalSize||0,{segments:V,legend:U}=v0(()=>{let H=_j(X,N,_.isDarkTheme);if(H.segments.length>0)return H;if(N<=0)return H;let x=X?.children?.length?"Total":"[files]";return $j(x,X?.path||_?.root?.path||".",N,_.isDarkTheme)},[X,N,_.isDarkTheme,_?.root?.path]),[O,M]=h(V),I=T(new Map),E=T(0);u(()=>{let H=I.current,x=new Map(V.map((j0)=>[j0.key,j0])),c=performance.now(),q0=220,d=(j0)=>{let _0=Math.min(1,(j0-c)/220),X0=_0*(2-_0),V0=V.map((W0)=>{let E0=H.get(W0.key)||{startAngle:W0.startAngle,endAngle:W0.startAngle,innerRadius:W0.innerRadius,outerRadius:W0.innerRadius},M0=(r0,h0)=>r0+(h0-r0)*X0,n0=M0(E0.startAngle,W0.startAngle),y0=M0(E0.endAngle,W0.endAngle),C0=M0(E0.innerRadius,W0.innerRadius),s0=M0(E0.outerRadius,W0.outerRadius);return{...W0,d:X3(120,120,C0,s0,n0,y0)}});if(M(V0),_0<1)E.current=requestAnimationFrame(d)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(d),I.current=x,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let J=O.length?O:V,D=N>0?b_(N):"0 B",k=X?.name||"",p=(k&&k!=="."?k:"Total")||"Total",s=D,e=Q.length>1,f=(H)=>{if(!H?.path)return;let x=q3(_.root,H.path);if(!x||!Array.isArray(x.children)||x.children.length===0)return;q((c)=>[...c,x.path]),Y(x.path),j(null)},y=()=>{if(!e)return;q((H)=>{let x=H.slice(0,-1);return Y(x[x.length-1]||_?.root?.path||"."),x}),j(null)};return L`
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
                        onClick=${()=>f(H)}
                    >
                        <title>${H.label} — ${b_(H.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
                    onClick=${y}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${p}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${s}</text>
                </g>
            </svg>
            ${U.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((H)=>L`
                        <div key=${H.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${H.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${H.name}>${H.name}</span>
                            <span class="workspace-folder-starburst-size">${b_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function tG({mediaId:_}){let[$,j]=h(null);if(u(()=>{if(!_)return;U5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?b_($.metadata.size):"";return L`
        <a href=${v_(_)} download=${Z} class="file-attachment"
            onClick=${(Q)=>Q.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${Y&&L`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function jj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:Q,onToggleTerminal:q,terminalVisible:G=!1}){let[K,X]=h(null),[N,V]=h(new Set(["."])),[U,O]=h(null),[M,I]=h(null),[E,J]=h(""),[D,k]=h(null),[i,p]=h(null),[s,e]=h(!0),[f,y]=h(!1),[H,x]=h(null),[c,q0]=h(()=>L5("workspaceShowHidden",!1)),[d,j0]=h(!1),[_0,X0]=h(null),[V0,W0]=h(null),[J0,E0]=h(null),[M0,n0]=h(!1),[y0,C0]=h(null),[s0,r0]=h(()=>d9()),[h0,t0]=h(()=>j3({stored:J_(j6),...$3()})),[p0,j1]=h(!1),z0=T(N),l0=T(""),Z1=T(null),q1=T(0),K_=T(new Set),E1=T(null),_1=T(new Map),p1=T(_),k1=T(Z),G1=T(null),c0=T(null),y1=T(null),C1=T(null),a=T(null),B0=T(null),H0=T("."),N0=T(null),R0=T({path:null,dragging:!1,startX:0,startY:0}),S0=T({path:null,dragging:!1,startX:0,startY:0}),b0=T({path:null,timer:0}),k0=T(!1),w0=T(0),i0=T(new Map),D0=T(null),g0=T(null),O0=T(null),Q0=T(null),w=T(null),t=T(null),F0=T(c),I0=T($),m0=T(j??$),X1=T(0),M1=T(J0),N1=T(d),c1=T(_0),q4=T(null),U_=T({x:0,y:0}),j_=T(0),L_=T(null),N_=T(U),Y1=T(M),r1=T(null),G4=T(D);p1.current=_,k1.current=Z,u(()=>{z0.current=N},[N]),u(()=>{F0.current=c},[c]),u(()=>{I0.current=$},[$]),u(()=>{m0.current=j??$},[j,$]),u(()=>{M1.current=J0},[J0]),u(()=>{if(typeof window>"u")return;let z=()=>{t0(j3({stored:J_(j6),...$3()}))};z();let C=()=>z(),v=()=>z(),b=(Z0)=>{if(!Z0||Z0.key===null||Z0.key===j6)z()};window.addEventListener("resize",C),window.addEventListener("focus",v),window.addEventListener("storage",b);let n=window.matchMedia?.("(pointer: coarse)"),K0=window.matchMedia?.("(hover: none)"),U0=(Z0,P0)=>{if(!Z0)return;if(Z0.addEventListener)Z0.addEventListener("change",P0);else if(Z0.addListener)Z0.addListener(P0)},L0=(Z0,P0)=>{if(!Z0)return;if(Z0.removeEventListener)Z0.removeEventListener("change",P0);else if(Z0.removeListener)Z0.removeListener(P0)};return U0(n,C),U0(K0,C),()=>{window.removeEventListener("resize",C),window.removeEventListener("focus",v),window.removeEventListener("storage",b),L0(n,C),L0(K0,C)}},[]),u(()=>{let z=(C)=>{let v=C?.detail?.path;if(!v)return;let b=v.split("/"),n=[];for(let K0=1;K0<b.length;K0++)n.push(b.slice(0,K0).join("/"));if(n.length)V((K0)=>{let U0=new Set(K0);U0.add(".");for(let L0 of n)U0.add(L0);return U0});O(v),requestAnimationFrame(()=>{let K0=document.querySelector(`[data-path="${CSS.escape(v)}"]`);if(K0)K0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),u(()=>{N1.current=d},[d]),u(()=>{c1.current=_0},[_0]),u(()=>{N_.current=U},[U]),u(()=>{Y1.current=M},[M]),u(()=>{G4.current=D},[D]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>r0(d9());z();let C=window.matchMedia?.("(prefers-color-scheme: dark)"),v=()=>z();if(C?.addEventListener)C.addEventListener("change",v);else if(C?.addListener)C.addListener(v);let b=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(b?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)b?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(C?.removeEventListener)C.removeEventListener("change",v);else if(C?.removeListener)C.removeListener(v);b?.disconnect()}},[]),u(()=>{if(!M)return;let z=a.current;if(!z)return;let C=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(C)},[M]),u(()=>{if(!p0)return;let z=(v)=>{let b=v?.target;if(!(b instanceof Element))return;if(w.current?.contains(b))return;if(t.current?.contains(b))return;j1(!1)},C=(v)=>{if(v?.key==="Escape")j1(!1),t.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",C)}},[p0]);let g_=async(z,C={})=>{let v=Boolean(C?.autoOpen),b=String(z||"").trim();y(!0),k(null),p(null);try{let n=await p5(b,20000);if(v&&b&&c9(b,n,{resolvePane:(K0)=>o0.resolve(K0)}))return k1.current?.(b,n),n;return k(n),n}catch(n){let K0={error:n.message||"Failed to load preview"};return k(K0),K0}finally{y(!1)}};G1.current=g_;let _5=async()=>{if(!I0.current)return;try{let z=await h5("",1,F0.current),C=l9(z.root,z0.current,F0.current);if(C===l0.current){e(!1);return}if(l0.current=C,Z1.current=z.root,!q1.current)q1.current=requestAnimationFrame(()=>{q1.current=0,X((v)=>G3(v,Z1.current)),e(!1)})}catch(z){x(z.message||"Failed to load workspace"),e(!1)}},w4=async(z)=>{if(!z)return;if(K_.current.has(z))return;K_.current.add(z);try{let C=await h5(z,1,F0.current);X((v)=>Q3(v,z,C.root))}catch(C){x(C.message||"Failed to load workspace")}finally{K_.current.delete(z)}};c0.current=w4;let g1=S(()=>{let z=U;if(!z)return".";let C=_1.current?.get(z);if(C&&C.type==="dir")return C.path;if(z==="."||!z.includes("/"))return".";let v=z.split("/");return v.pop(),v.join("/")||"."},[U]),F_=S((z)=>{let C=z?.closest?.(".workspace-row");if(!C)return null;let v=C.dataset.path,b=C.dataset.type;if(!v)return null;if(b==="dir")return v;if(v.includes("/")){let n=v.split("/");return n.pop(),n.join("/")||"."}return"."},[]),R1=S((z)=>{return F_(z?.target||null)},[F_]),I1=S((z)=>{M1.current=z,E0(z)},[]),V1=S(()=>{let z=b0.current;if(z?.timer)clearTimeout(z.timer);b0.current={path:null,timer:0}},[]),m_=S((z)=>{if(!z||z==="."){V1();return}let C=_1.current?.get(z);if(!C||C.type!=="dir"){V1();return}if(z0.current?.has(z)){V1();return}if(b0.current?.path===z)return;V1();let v=setTimeout(()=>{b0.current={path:null,timer:0},c0.current?.(z),V((b)=>{let n=new Set(b);return n.add(z),n})},600);b0.current={path:z,timer:v}},[V1]),u_=S((z,C)=>{if(U_.current={x:z,y:C},j_.current)return;j_.current=requestAnimationFrame(()=>{j_.current=0;let v=q4.current;if(!v)return;let b=U_.current;v.style.transform=`translate(${b.x+12}px, ${b.y+12}px)`})},[]),B1=S((z)=>{if(!z)return;let v=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!v)return;W0({path:z,label:v})},[]),Z_=S(()=>{if(W0(null),j_.current)cancelAnimationFrame(j_.current),j_.current=0;if(q4.current)q4.current.style.transform="translate(-9999px, -9999px)"},[]),u0=S((z)=>{if(!z)return".";let C=_1.current?.get(z);if(C&&C.type==="dir")return C.path;if(z==="."||!z.includes("/"))return".";let v=z.split("/");return v.pop(),v.join("/")||"."},[]),P1=S(()=>{I(null),J("")},[]),A_=S((z)=>{if(!z)return;let v=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!v||z===".")return;I(z),J(v)},[]),Y_=S(async()=>{let z=Y1.current;if(!z)return;let C=(E||"").trim();if(!C){P1();return}let v=_1.current?.get(z),b=(v?.name||z.split("/").pop()||z).trim();if(C===b){P1();return}try{let K0=(await c6(z,C))?.path||z,U0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(P1(),x(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:K0,type:v?.type||"file"}})),v?.type==="dir")V((L0)=>{let Z0=new Set;for(let P0 of L0)if(P0===z)Z0.add(K0);else if(P0.startsWith(`${z}/`))Z0.add(`${K0}${P0.slice(z.length)}`);else Z0.add(P0);return Z0});if(O(K0),v?.type==="dir")k(null),y(!1),p(null);else G1.current?.(K0);c0.current?.(U0)}catch(n){x(n?.message||"Failed to rename file")}},[P1,E]),f4=S(async(z)=>{let b=z||".";for(let n=0;n<50;n+=1){let U0=`untitled${n===0?"":`-${n}`}.md`;try{let Z0=(await p6(b,U0,""))?.path||(b==="."?U0:`${b}/${U0}`);if(b&&b!==".")V((P0)=>new Set([...P0,b]));O(Z0),x(null),c0.current?.(b),G1.current?.(Z0);return}catch(L0){if(L0?.status===409||L0?.code==="file_exists")continue;x(L0?.message||"Failed to create file");return}}x("Failed to create file (untitled name already in use).")},[]),r_=S((z)=>{if(z?.stopPropagation?.(),M0)return;let C=u0(N_.current);f4(C)},[M0,u0,f4]);u(()=>{if(typeof window>"u")return;let z=(C)=>{let v=C?.detail?.updates||[];if(!Array.isArray(v)||v.length===0)return;X((L0)=>{let Z0=L0;for(let P0 of v){if(!P0?.root)continue;if(!Z0||P0.path==="."||!P0.path)Z0=P0.root;else Z0=Q3(Z0,P0.path,P0.root)}if(Z0)l0.current=l9(Z0,z0.current,F0.current);return e(!1),Z0});let b=N_.current;if(Boolean(b)&&v.some((L0)=>{let Z0=L0?.path||"";if(!Z0||Z0===".")return!0;return b===Z0||b.startsWith(`${Z0}/`)||Z0.startsWith(`${b}/`)}))i0.current.clear();if(!b||!G4.current)return;let K0=_1.current?.get(b);if(K0&&K0.type==="dir")return;if(v.some((L0)=>{let Z0=L0?.path||"";if(!Z0||Z0===".")return!0;return b===Z0||b.startsWith(`${Z0}/`)}))G1.current?.(b)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),E1.current=_5;let v4=T(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),C=m0.current??I0.current,v=document.visibilityState!=="hidden"&&(C||z.matches&&I0.current);c5(v,F0.current).catch(()=>{})}).current,a_=T(0),$5=T(()=>{if(a_.current)clearTimeout(a_.current);a_.current=setTimeout(()=>{a_.current=0,v4()},250)}).current;u(()=>{if(I0.current)E1.current?.();$5()},[$,j]),u(()=>{E1.current(),v4();let z=setInterval(()=>E1.current(),oG),C=F5("previewHeight",null),v=Number.isFinite(C)?Math.min(Math.max(C,80),600):280;if(w0.current=v,y1.current)y1.current.style.setProperty("--preview-height",`${v}px`);let b=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),n=()=>$5();if(b.addEventListener)b.addEventListener("change",n);else if(b.addListener)b.addListener(n);return document.addEventListener("visibilitychange",n),()=>{if(clearInterval(z),q1.current)cancelAnimationFrame(q1.current),q1.current=0;if(b.removeEventListener)b.removeEventListener("change",n);else if(b.removeListener)b.removeListener(n);if(document.removeEventListener("visibilitychange",n),a_.current)clearTimeout(a_.current),a_.current=0;if(N0.current)clearTimeout(N0.current),N0.current=null;c5(!1,F0.current).catch(()=>{})}},[]);let t_=v0(()=>n9(K,N,c),[K,N,c]),h_=v0(()=>new Map(t_.map((z)=>[z.node.path,z.node])),[t_]),k5=v0(()=>p9(h0),[h0]);_1.current=h_;let U1=(U?_1.current.get(U):null)?.type==="dir";u(()=>{if(!U||!U1){C0(null),D0.current=null,g0.current=null;return}let z=U,C=`${c?"hidden":"visible"}:${U}`,v=i0.current,b=v.get(C);if(b?.root){v.delete(C),v.set(C,b);let U0=i9(b.root,Boolean(b.truncated),s0);if(U0)D0.current=U0,g0.current=U,C0({loading:!1,error:null,payload:U0});return}let n=D0.current,K0=g0.current;C0({loading:!0,error:null,payload:K0===U?n:null}),h5(U,sG,c).then((U0)=>{if(N_.current!==z)return;let L0={root:U0?.root,truncated:Boolean(U0?.truncated)};v.delete(C),v.set(C,L0);while(v.size>rG){let P0=v.keys().next().value;if(!P0)break;v.delete(P0)}let Z0=i9(L0.root,L0.truncated,s0);D0.current=Z0,g0.current=U,C0({loading:!1,error:null,payload:Z0})}).catch((U0)=>{if(N_.current!==z)return;C0({loading:!1,error:U0?.message||"Failed to load folder size chart",payload:K0===U?n:null})})},[U,U1,c,s0]);let w1=Boolean(D&&D.kind==="text"&&!U1&&(!D.size||D.size<=262144)),j5=w1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",E_=Boolean(U&&U!=="."),Q_=Boolean(U&&!U1),l1=Boolean(U&&!U1),S1=U&&U1?C8(U,c):null,m1=S(()=>j1(!1),[]),J1=S(async(z)=>{m1();try{await z?.()}catch(C){console.warn("[workspace-explorer] Header menu action failed:",C)}},[m1]);u(()=>{let z=O0.current;if(Q0.current)Q0.current.dispose(),Q0.current=null;if(!z)return;if(z.innerHTML="",!U||U1||!D||D.error)return;let C={path:U,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},v=o0.resolve(C)||o0.get("workspace-preview-default");if(!v)return;let b=v.mount(z,C);return Q0.current=b,()=>{if(Q0.current===b)b.dispose(),Q0.current=null;z.innerHTML=""}},[U,U1,D]);let M_=(z)=>{let C=z?.target;if(C instanceof Element)return C;return C?.parentElement||null},I_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},k_=T((z)=>{let C=M_(z),v=C?.closest?.("[data-path]");if(!v)return;let b=v.dataset.path;if(!b||b===".")return;let n=Boolean(C?.closest?.("button"))||Boolean(C?.closest?.("a"))||Boolean(C?.closest?.("input")),K0=Boolean(C?.closest?.(".workspace-caret"));if(n||K0)return;if(Y1.current===b)return;A_(b)}).current,e_=T((z)=>{if(k0.current){k0.current=!1;return}let C=M_(z),v=C?.closest?.("[data-path]");if(C1.current?.focus?.(),!v)return;let b=v.dataset.path,n=v.dataset.type,K0=Boolean(C?.closest?.(".workspace-caret")),U0=Boolean(C?.closest?.("button"))||Boolean(C?.closest?.("a"))||Boolean(C?.closest?.("input")),L0=N_.current===b,Z0=Y1.current;if(Z0){if(Z0===b)return;P1()}let P0=n==="file"&&r1.current===b&&!K0&&!U0;if(n==="dir"){if(r1.current=null,O(b),k(null),p(null),y(!1),!z0.current.has(b))c0.current?.(b);if(L0&&!K0)return;V((G_)=>{let d1=new Set(G_);if(d1.has(b))d1.delete(b);else d1.add(b);return d1})}else{r1.current=null,O(b);let f1=_1.current.get(b);if(f1)p1.current?.(f1.path,f1);if(!U0&&!K0&&nG(b))k1.current?.(b,G4.current);else{let d1=!U0&&!K0;G1.current?.(b,{autoOpen:d1})}}}).current,q_=T(()=>{l0.current="",E1.current(),Array.from(z0.current||[]).filter((C)=>C&&C!==".").forEach((C)=>c0.current?.(C))}).current,a1=T(()=>{r1.current=null,O(null),k(null),p(null),y(!1)}).current,C_=T(()=>{q0((z)=>{let C=!z;if(typeof window<"u")K1("workspaceShowHidden",String(C));return F0.current=C,c5(!0,C).catch(()=>{}),l0.current="",E1.current?.(),Array.from(z0.current||[]).filter((b)=>b&&b!==".").forEach((b)=>c0.current?.(b)),C})}).current,X4=T((z)=>{if(M_(z)?.closest?.("[data-path]"))return;a1()}).current,O1=S(async(z)=>{if(!z)return;let C=z.split("/").pop()||z;if(!window.confirm(`Delete "${C}"? This cannot be undone.`))return;try{await d6(z);let b=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(N_.current===z)a1();c0.current?.(b),x(null)}catch(b){k((n)=>({...n||{},error:b.message||"Failed to delete file"}))}},[a1]),_4=S((z)=>{let C=C1.current;if(!C||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;C.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),b4=S((z)=>{let C=t_;if(!C||C.length===0)return;let v=U?C.findIndex((b)=>b.node.path===U):-1;if(z.key==="ArrowDown"){z.preventDefault();let b=Math.min(v+1,C.length-1),n=C[b];if(!n)return;if(O(n.node.path),n.node.type!=="dir")p1.current?.(n.node.path,n.node),G1.current?.(n.node.path);else k(null),y(!1),p(null);_4(n.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let b=v<=0?0:v-1,n=C[b];if(!n)return;if(O(n.node.path),n.node.type!=="dir")p1.current?.(n.node.path,n.node),G1.current?.(n.node.path);else k(null),y(!1),p(null);_4(n.node.path);return}if(z.key==="ArrowRight"&&v>=0){let b=C[v];if(b?.node?.type==="dir"&&!N.has(b.node.path))z.preventDefault(),c0.current?.(b.node.path),V((n)=>new Set([...n,b.node.path]));return}if(z.key==="ArrowLeft"&&v>=0){let b=C[v];if(b?.node?.type==="dir"&&N.has(b.node.path))z.preventDefault(),V((n)=>{let K0=new Set(n);return K0.delete(b.node.path),K0});return}if(z.key==="Enter"&&v>=0){z.preventDefault();let b=C[v];if(!b)return;let n=b.node.path;if(b.node.type==="dir"){if(!z0.current.has(n))c0.current?.(n);V((U0)=>{let L0=new Set(U0);if(L0.has(n))L0.delete(n);else L0.add(n);return L0}),k(null),p(null),y(!1)}else p1.current?.(n,b.node),G1.current?.(n);return}if((z.key==="Delete"||z.key==="Backspace")&&v>=0){let b=C[v];if(!b||b.node.type==="dir")return;z.preventDefault(),O1(b.node.path);return}if(z.key==="Escape")z.preventDefault(),a1()},[a1,O1,N,t_,_4,U]),g4=S((z)=>{let C=M_(z),v=C?.closest?.(".workspace-row");if(!v)return;let b=v.dataset.type,n=v.dataset.path;if(!n||n===".")return;if(Y1.current===n)return;let K0=z?.touches?.[0];if(!K0)return;if(R0.current={path:I_(C)?n:null,dragging:!1,startX:K0.clientX,startY:K0.clientY},b!=="file")return;if(N0.current)clearTimeout(N0.current);N0.current=setTimeout(()=>{if(N0.current=null,R0.current?.dragging)return;O1(n)},600)},[O1]),T_=S(()=>{if(N0.current)clearTimeout(N0.current),N0.current=null;let z=R0.current;if(z?.dragging&&z.path){let C=M1.current||g1(),v=L_.current;if(typeof v==="function")v(z.path,C)}R0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,j0(!1),X0(null),I1(null),V1(),Z_()},[g1,Z_,I1,V1]),m4=S((z)=>{let C=R0.current,v=z?.touches?.[0];if(!v||!C?.path){if(N0.current)clearTimeout(N0.current),N0.current=null;return}let b=Math.abs(v.clientX-C.startX),n=Math.abs(v.clientY-C.startY),K0=b>8||n>8;if(K0&&N0.current)clearTimeout(N0.current),N0.current=null;if(!C.dragging&&K0)C.dragging=!0,j0(!0),X0("move"),B1(C.path);if(C.dragging){z.preventDefault(),u_(v.clientX,v.clientY);let U0=document.elementFromPoint(v.clientX,v.clientY),L0=F_(U0)||g1();if(M1.current!==L0)I1(L0);m_(L0)}},[F_,g1,B1,u_,I1,m_]),Z5=T((z)=>{z.preventDefault();let C=y1.current;if(!C)return;let v=z.clientY,b=w0.current||280,n=z.currentTarget;n.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let K0=v,U0=(Z0)=>{K0=Z0.clientY;let P0=C.clientHeight-80,f1=Math.min(Math.max(b-(Z0.clientY-v),80),P0);C.style.setProperty("--preview-height",`${f1}px`),w0.current=f1},L0=()=>{let Z0=C.clientHeight-80,P0=Math.min(Math.max(b-(K0-v),80),Z0);w0.current=P0,n.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("previewHeight",String(Math.round(P0))),document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",L0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",L0)}).current,p_=T((z)=>{z.preventDefault();let C=y1.current;if(!C)return;let v=z.touches[0];if(!v)return;let b=v.clientY,n=w0.current||280,K0=z.currentTarget;K0.classList.add("dragging"),document.body.style.userSelect="none";let U0=(Z0)=>{let P0=Z0.touches[0];if(!P0)return;Z0.preventDefault();let f1=C.clientHeight-80,G_=Math.min(Math.max(n-(P0.clientY-b),80),f1);C.style.setProperty("--preview-height",`${G_}px`),w0.current=G_},L0=()=>{K0.classList.remove("dragging"),document.body.style.userSelect="",K1("previewHeight",String(Math.round(w0.current||n))),document.removeEventListener("touchmove",U0),document.removeEventListener("touchend",L0),document.removeEventListener("touchcancel",L0)};document.addEventListener("touchmove",U0,{passive:!1}),document.addEventListener("touchend",L0),document.addEventListener("touchcancel",L0)}).current,c_=async()=>{if(!U)return;try{let z=await h6(U);if(z.media_id)p(z.media_id)}catch(z){k((C)=>({...C||{},error:z.message||"Failed to attach"}))}},O4=async()=>{if(!U||U1)return;await O1(U)},l_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},u4=S((z)=>{if(!l_(z))return;if(z.preventDefault(),X1.current+=1,!N1.current)j0(!0);X0("upload");let C=R1(z)||g1();I1(C),m_(C)},[g1,R1,I1,m_]),d_=S((z)=>{if(!l_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!N1.current)j0(!0);if(c1.current!=="upload")X0("upload");let C=R1(z)||g1();if(M1.current!==C)I1(C);m_(C)},[g1,R1,I1,m_]),P_=S((z)=>{if(!l_(z))return;if(z.preventDefault(),X1.current=Math.max(0,X1.current-1),X1.current===0)j0(!1),X0(null),I1(null),V1()},[I1,V1]),T1=S(async(z,C=".")=>{let v=Array.from(z||[]);if(v.length===0)return;let b=C&&C!==""?C:".",n=b!=="."?b:"workspace root";n0(!0);try{let K0=null;for(let U0 of v)try{K0=await I8(U0,b)}catch(L0){let Z0=L0?.status,P0=L0?.code;if(Z0===409||P0==="file_exists"){let f1=U0?.name||"file";if(!window.confirm(`"${f1}" already exists in ${n}. Overwrite?`))continue;K0=await I8(U0,b,{overwrite:!0})}else throw L0}if(K0?.path)r1.current=K0.path,O(K0.path),G1.current?.(K0.path);c0.current?.(b)}catch(K0){x(K0.message||"Failed to upload file")}finally{n0(!1)}},[]),D4=S(async(z,C)=>{if(!z)return;let v=_1.current?.get(z);if(!v)return;let b=C&&C!==""?C:".",n=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(b===n)return;try{let U0=(await l6(z,b))?.path||z;if(v.type==="dir")V((L0)=>{let Z0=new Set;for(let P0 of L0)if(P0===z)Z0.add(U0);else if(P0.startsWith(`${z}/`))Z0.add(`${U0}${P0.slice(z.length)}`);else Z0.add(P0);return Z0});if(O(U0),v.type==="dir")k(null),y(!1),p(null);else G1.current?.(U0);c0.current?.(n),c0.current?.(b)}catch(K0){x(K0?.message||"Failed to move entry")}},[]);L_.current=D4;let A4=S(async(z)=>{if(!l_(z))return;z.preventDefault(),X1.current=0,j0(!1),X0(null),E0(null),V1();let C=Array.from(z?.dataTransfer?.files||[]);if(C.length===0)return;let v=M1.current||R1(z)||g1();await T1(C,v)},[g1,R1,T1]),h4=S((z)=>{if(z?.stopPropagation?.(),M0)return;let C=z?.currentTarget?.dataset?.uploadTarget||".";H0.current=C,B0.current?.click()},[M0]),z1=S(()=>{if(M0)return;let z=N_.current,C=z?_1.current?.get(z):null;H0.current=C?.type==="dir"?C.path:".",B0.current?.click()},[M0]),E4=S(()=>{J1(()=>r_(null))},[J1,r_]),Y5=S(()=>{J1(()=>z1())},[J1,z1]),u1=S(()=>{J1(()=>q_())},[J1,q_]),V_=S(()=>{J1(()=>C_())},[J1,C_]),$4=S(()=>{if(!U||!w1)return;J1(()=>k1.current?.(U,D))},[J1,U,w1,D]),p4=S(()=>{if(!U||U===".")return;J1(()=>A_(U))},[J1,U,A_]),K4=S(()=>{if(!U||U1)return;J1(()=>O4())},[J1,U,U1,O4]),M4=S(()=>{if(!U||U1)return;J1(()=>c_())},[J1,U,U1,c_]),N4=S(()=>{if(!S1)return;if(m1(),typeof window<"u")window.open(S1,"_blank","noopener")},[m1,S1]),S_=S(()=>{m1(),Y?.()},[m1,Y]),z_=S(()=>{m1(),Q?.()},[m1,Q]),I4=S(()=>{m1(),q?.()},[m1,q]),c4=S((z)=>{if(!z||z.button!==0)return;let C=z.currentTarget;if(!C||!C.dataset)return;let v=C.dataset.path;if(!v||v===".")return;if(Y1.current===v)return;let b=M_(z);if(b?.closest?.("button, a, input, .workspace-caret"))return;if(!I_(b))return;z.preventDefault(),S0.current={path:v,dragging:!1,startX:z.clientX,startY:z.clientY};let n=(U0)=>{let L0=S0.current;if(!L0?.path)return;let Z0=Math.abs(U0.clientX-L0.startX),P0=Math.abs(U0.clientY-L0.startY),f1=Z0>4||P0>4;if(!L0.dragging&&f1)L0.dragging=!0,k0.current=!0,j0(!0),X0("move"),B1(L0.path),u_(U0.clientX,U0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(L0.dragging){U0.preventDefault(),u_(U0.clientX,U0.clientY);let G_=document.elementFromPoint(U0.clientX,U0.clientY),d1=F_(G_)||g1();if(M1.current!==d1)I1(d1);m_(d1)}},K0=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",K0);let U0=S0.current;if(U0?.dragging&&U0.path){let L0=M1.current||g1(),Z0=L_.current;if(typeof Z0==="function")Z0(U0.path,L0)}S0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,j0(!1),X0(null),I1(null),V1(),Z_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",K0)},[F_,g1,B1,u_,Z_,I1,m_,V1]),x_=S(async(z)=>{let C=Array.from(z?.target?.files||[]);if(C.length===0)return;let v=H0.current||".";if(await T1(C,v),H0.current=".",z?.target)z.target.value=""},[T1]);return L`
        <aside
            class=${`workspace-sidebar${d?" workspace-drop-active":""}`}
            data-workspace-scale=${h0}
            ref=${y1}
            onDragEnter=${u4}
            onDragOver=${d_}
            onDragLeave=${P_}
            onDrop=${A4}
        >
            <input type="file" multiple style="display:none" ref=${B0} onChange=${x_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${t}
                            class=${`workspace-menu-button${p0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),j1((C)=>!C)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${p0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${p0&&L`
                            <div class="workspace-menu-dropdown" ref=${w} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${E4} disabled=${M0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Y5} disabled=${M0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${u1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${c?" active":""}`} role="menuitem" onClick=${V_}>
                                    ${c?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&L`<div class="workspace-menu-separator"></div>`}
                                ${U&&!U1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${$4} disabled=${!w1}>Open in editor</button>
                                `}
                                ${E_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${p4}>Rename selected</button>
                                `}
                                ${l1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M4}>Download selected file</button>
                                `}
                                ${S1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${N4}>Download selected folder (zip)</button>
                                `}
                                ${Q_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${K4}>Delete selected file</button>
                                `}

                                ${(Y||Q||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I4}>
                                        ${G?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${r_} title="New file" disabled=${M0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${q_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${X4}>
                ${M0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${s&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${K&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${C1}
                        tabIndex="0"
                        onClick=${e_}
                        onDblClick=${k_}
                        onKeyDown=${b4}
                        onTouchStart=${g4}
                        onTouchEnd=${T_}
                        onTouchMove=${m4}
                        onTouchCancel=${T_}
                    >
                        ${t_.map(({node:z,depth:C})=>{let v=z.type==="dir",b=z.path===U,n=z.path===M,K0=v&&N.has(z.path),U0=J0&&z.path===J0,L0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${b?" selected":""}${U0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+C*k5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${c4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${v?K0?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${v?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${v?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${n?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${a}
                                                value=${E}
                                                onInput=${(Z0)=>J(Z0?.target?.value||"")}
                                                onKeyDown=${(Z0)=>{if(Z0.key==="Enter")Z0.preventDefault(),Y_();else if(Z0.key==="Escape")Z0.preventDefault(),P1()}}
                                                onBlur=${P1}
                                                onClick=${(Z0)=>Z0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${v&&!K0&&L0>0&&L`
                                        <span class="workspace-count">${L0}</span>
                                    `}
                                    ${v&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${h4}
                                            disabled=${M0}
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
            ${U&&L`
                <div class="workspace-preview-splitter-h" onMouseDown=${Z5} onTouchStart=${p_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${r_} title="New file" disabled=${M0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!U1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>w1&&k1.current?.(U,D)}
                                    title=${j5}
                                    disabled=${!w1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${O4}
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
                            ${U1?L`
                                    <button class="workspace-download" onClick=${z1}
                                        title="Upload files to this folder" disabled=${M0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${C8(U,c)}
                                        title="Download folder as zip" onClick=${(z)=>z.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${c_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${f&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&L`<div class="workspace-error">${D.error}</div>`}
                    ${U1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${y0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${y0?.error&&L`<div class="workspace-error">${y0.error}</div>`}
                        ${y0?.payload&&y0.payload.segments?.length>0&&L`
                            <${aG} payload=${y0.payload} />
                        `}
                        ${y0?.payload&&(!y0.payload.segments||y0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!U1&&L`
                        <div class="workspace-preview-body" ref=${O0}></div>
                    `}
                    ${i&&L`
                        <div class="workspace-download-card">
                            <${tG} mediaId=${i} />
                        </div>
                    `}
                </div>
            `}
            ${V0&&L`
                <div class="workspace-drag-ghost" ref=${q4}>${V0.label}</div>
            `}
        </aside>
    `}var eG=new Set(["kanban-editor","mindmap-editor"]);function _X(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function Zj(_,$,j){let Z=_X(_,$,j);return eG.has(Z)}var $X=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,jX=/\.(csv|tsv)$/i,ZX=/\.pdf$/i,YX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Yj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Qj({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:Q,onTogglePin:q,onTogglePreview:G,onEditSource:K,previewTabs:X,paneOverrides:N,onToggleDock:V,dockVisible:U,onToggleZen:O,zenMode:M,onPopOutTab:I}){let[E,J]=h(null),D=T(null);u(()=>{if(!E)return;let H=(x)=>{if(x.type==="keydown"&&x.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[E]),u(()=>{let H=(x)=>{if(x.ctrlKey&&x.key==="Tab"){if(x.preventDefault(),!_.length)return;let c=_.findIndex((q0)=>q0.id===$);if(x.shiftKey){let q0=_[(c-1+_.length)%_.length];j?.(q0.id)}else{let q0=_[(c+1)%_.length];j?.(q0.id)}return}if((x.ctrlKey||x.metaKey)&&x.key==="w"){let c=document.querySelector(".editor-pane");if(c&&c.contains(document.activeElement)){if(x.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let k=S((H,x)=>{if(H.button===1){H.preventDefault(),Z?.(x);return}if(H.button===0)j?.(x)},[j,Z]),i=S((H,x)=>{H.preventDefault(),J({id:x,x:H.clientX,y:H.clientY})},[]),p=S((H)=>{H.preventDefault(),H.stopPropagation()},[]),s=S((H,x)=>{H.preventDefault(),H.stopPropagation(),Z?.(x)},[Z]);u(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let e=S((H)=>{if(!(N instanceof Map))return null;return N.get(H)||null},[N]),f=v0(()=>_.find((H)=>H.id===E?.id)||null,[E?.id,_]),y=v0(()=>{let H=E?.id;if(!H)return!1;return Zj(H,e(H),(x)=>o0.resolve(x))},[E?.id,e]);if(!_.length)return null;return L`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((H)=>L`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(x)=>k(x,H.id)}
                    onContextMenu=${(x)=>i(x,H.id)}
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
                        onMouseDown=${p}
                        onClick=${(x)=>s(x,H.id)}
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
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${V}
                    title=${`${U?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${U?"Hide":"Show"} terminal`}
                    aria-pressed=${U?"true":"false"}
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
                    class=${`tab-strip-zen-toggle${M?" active":""}`}
                    onClick=${O}
                    title=${`${M?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${M?"Exit":"Enter"} zen mode`}
                    aria-pressed=${M?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${M?L`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:L`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${E&&L`
            <div class="tab-context-menu" style=${{left:E.x+"px",top:E.y+"px"}}>
                <button onClick=${()=>{Z?.(E.id),J(null)}}>Close</button>
                <button onClick=${()=>{Y?.(E.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Q?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(E.id),J(null)}}>
                    ${f?.pinned?"Unpin":"Pin"}
                </button>
                ${y&&K&&L`
                    <button onClick=${()=>{K(E.id),J(null)}}>Edit Source</button>
                `}
                ${I&&L`
                    <button onClick=${()=>{let H=_.find((x)=>x.id===E.id);I(E.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${G&&/\.(md|mdx|markdown)$/i.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{G(E.id),J(null)}}>
                        ${X?.has(E.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${$X.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id),x=E.id.split("/").pop()||"document",c="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(x);window.open(c,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${jX.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${ZX.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${YX.test(E.id)&&!Yj.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Yj.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var QX=400,K3=60,qj=220,N3="mdPreviewHeight";function qX(){try{let _=localStorage.getItem(N3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=K3?$:qj}catch{return qj}}function V3({getContent:_,path:$,onClose:j}){let[Z,Y]=h(""),[Q,q]=h(qX),G=T(null),K=T(null),X=T(""),N=T(_);return N.current=_,u(()=>{let O=()=>{let I=N.current?.()||"";if(I===X.current)return;X.current=I;try{let E=O_(I,null,{sanitize:!1});Y(E)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let M=setInterval(O,QX);return()=>clearInterval(M)},[]),u(()=>{if(G.current&&Z)U4(G.current).catch(()=>{})},[Z]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let M=O.clientY,I=K.current?.offsetHeight||Q,E=K.current?.parentElement,J=E?E.offsetHeight*0.7:500,D=O.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=(p)=>{let s=Math.min(Math.max(I-(p.clientY-M),K3),J);q(s)},i=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(N3,String(Math.round(K.current?.offsetHeight||Q)))}catch{}document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",k),document.addEventListener("mouseup",i)}}
            onTouchStart=${(O)=>{O.preventDefault();let M=O.touches[0];if(!M)return;let I=M.clientY,E=K.current?.offsetHeight||Q,J=K.current?.parentElement,D=J?J.offsetHeight*0.7:500,k=O.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let i=(s)=>{let e=s.touches[0];if(!e)return;s.preventDefault();let f=Math.min(Math.max(E-(e.clientY-I),K3),D);q(f)},p=()=>{k.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(N3,String(Math.round(K.current?.offsetHeight||Q)))}catch{}document.removeEventListener("touchmove",i),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}}
        ></div>
        <div class="md-preview-panel" ref=${K} style=${{height:Q+"px"}}>
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
    `}function Gj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let Q=T(_);Q.current=_;let q=T($);q.current=$;let G=T(j);G.current=j;let K=T(Z);K.current=Z,u(()=>{let X=new T8((V,U)=>Q.current(V,U),(V)=>q.current(V),{chatJid:Y});X.connect();let N=()=>{X.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),X.disconnect()}},[Y])}function Xj(){let[_,$]=h(!1),[j,Z]=h("default"),Y=T(!1);u(()=>{let K=L5("notificationsEnabled",!1);if(Y.current=K,$(K),typeof Notification<"u")Z(Notification.permission)},[]),u(()=>{Y.current=_},[_]);let Q=S(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),q=S(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await Q();if(Z(X||"default"),X!=="granted"){Y.current=!1,$(!1),K1("notificationsEnabled","false");return}}let K=!Y.current;Y.current=K,$(K),K1("notificationsEnabled",String(K))},[Q]),G=S((K,X)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let N=new Notification(K,{body:X});return N.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:G}}var q8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Kj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=h(null),[Q,q]=h(!1),G=T(!1),K=T(null),X=T(!1),N=T(null),V=T(null),U=T(0);u(()=>{G.current=Q},[Q]),u(()=>{V.current=Z},[Z]),u(()=>{U.current+=1,N.current=null,X.current=!1,G.current=!1,q(!1)},[j]);let O=S(async(E=null)=>{let J=U.current;try{if(E){let D=await C6(E,50,0,j);if(J!==U.current)return;Y(D.posts),q(!1)}else{let D=await o4(10,null,j);if(J!==U.current)return;Y(D.posts),q(D.has_more)}}catch(D){if(J!==U.current)return;console.error("Failed to load posts:",D)}},[j]),M=S(async()=>{let E=U.current;try{let J=await o4(10,null,j);if(E!==U.current)return;Y((D)=>{if(!D||D.length===0)return J.posts;return q8([...J.posts,...D])}),q((D)=>D||J.has_more)}catch(J){if(E!==U.current)return;console.error("Failed to refresh timeline:",J)}},[j]),I=S(async(E={})=>{let J=U.current,D=V.current;if(!D||D.length===0)return;if(X.current)return;let{preserveScroll:k=!0,preserveMode:i="top",allowRepeat:p=!1}=E,s=(y)=>{if(!k){y();return}if(i==="top")$(y);else _(y)},f=D.slice().sort((y,H)=>y.id-H.id)[0]?.id;if(!Number.isFinite(f))return;if(!p&&N.current===f)return;X.current=!0,N.current=f;try{let y=await o4(10,f,j);if(J!==U.current)return;if(y.posts.length>0)s(()=>{Y((H)=>q8([...y.posts,...H||[]])),q(y.has_more)});else q(!1)}catch(y){if(J!==U.current)return;console.error("Failed to load more posts:",y)}finally{if(J===U.current)X.current=!1}},[j,_,$]);return u(()=>{K.current=I},[I]),{posts:Z,setPosts:Y,hasMore:Q,setHasMore:q,hasMoreRef:G,loadPosts:O,refreshTimeline:M,loadMore:I,loadMoreRef:K,loadingMoreRef:X,lastBeforeIdRef:N}}function Nj(){let[_,$]=h(null),[j,Z]=h({text:"",totalLines:0}),[Y,Q]=h(""),[q,G]=h({text:"",totalLines:0}),[K,X]=h(null),[N,V]=h(null),[U,O]=h(null),M=T(null),I=T(0),E=T(!1),J=T(""),D=T(""),k=T(null),i=T(null),p=T(null),s=T(null),e=T(!1),f=T(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:Q,agentThought:q,setAgentThought:G,pendingRequest:K,setPendingRequest:X,currentTurnId:N,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:O,lastAgentEventRef:M,lastSilenceNoticeRef:I,isAgentRunningRef:E,draftBufferRef:J,thoughtBufferRef:D,pendingRequestRef:k,stalledPostIdRef:i,currentTurnIdRef:p,steerQueuedTurnIdRef:s,thoughtExpandedRef:e,draftExpandedRef:f}}function Vj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=T((N)=>{N.preventDefault();let V=_.current;if(!V)return;let U=N.clientX,O=$.current||280,M=N.currentTarget;M.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=U,E=(D)=>{I=D.clientX;let k=Math.min(Math.max(O+(D.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${k}px`),$.current=k},J=()=>{let D=Math.min(Math.max(O+(I-U),160),600);$.current=D,M.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",K1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,Q=T((N)=>{N.preventDefault();let V=_.current;if(!V)return;let U=N.touches[0];if(!U)return;let O=U.clientX,M=$.current||280,I=N.currentTarget;I.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(D)=>{let k=D.touches[0];if(!k)return;D.preventDefault();let i=Math.min(Math.max(M+(k.clientX-O),160),600);V.style.setProperty("--sidebar-width",`${i}px`),$.current=i},J=()=>{I.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",K1("sidebarWidth",String(Math.round($.current||M))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=T((N)=>{N.preventDefault();let V=_.current;if(!V)return;let U=N.clientX,O=j.current||$.current||280,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=U,E=(D)=>{I=D.clientX;let k=Math.min(Math.max(O+(D.clientX-U),200),800);V.style.setProperty("--editor-width",`${k}px`),j.current=k},J=()=>{let D=Math.min(Math.max(O+(I-U),200),800);j.current=D,M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,G=T((N)=>{N.preventDefault();let V=_.current;if(!V)return;let U=N.touches[0];if(!U)return;let O=U.clientX,M=j.current||$.current||280,I=N.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let E=(D)=>{let k=D.touches[0];if(!k)return;D.preventDefault();let i=Math.min(Math.max(M+(k.clientX-O),200),800);V.style.setProperty("--editor-width",`${i}px`),j.current=i},J=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",K1("editorWidth",String(Math.round(j.current||M))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,K=T((N)=>{N.preventDefault();let V=_.current;if(!V)return;let U=N.clientY,O=Z?.current||200,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=U,E=(D)=>{I=D.clientY;let k=Math.min(Math.max(O-(D.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${k}px`),Z)Z.current=k;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let D=Math.min(Math.max(O-(I-U),100),window.innerHeight*0.5);if(Z)Z.current=D;M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,X=T((N)=>{N.preventDefault();let V=_.current;if(!V)return;let U=N.touches[0];if(!U)return;let O=U.clientY,M=Z?.current||200,I=N.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let E=(D)=>{let k=D.touches[0];if(!k)return;D.preventDefault();let i=Math.min(Math.max(M-(k.clientY-O),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${i}px`),Z)Z.current=i;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",K1("dockHeight",String(Math.round(Z?.current||M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:Q,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:X}}function GX(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,Q=new Map;for(let[q,G]of _.entries()){let K=q;if(Z==="dir"){if(q===$)K=j,Y=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,Y=!0}else if(q===$)K=j,Y=!0;Q.set(K,G)}return Y?Q:_}function Wj({onTabClosed:_}={}){let $=T(_);$.current=_;let[j,Z]=h(()=>a0.getTabs()),[Y,Q]=h(()=>a0.getActiveId()),[q,G]=h(()=>a0.getTabs().length>0);u(()=>{return a0.onChange((f,y)=>{Z(f),Q(y),G(f.length>0)})},[]);let[K,X]=h(()=>new Set),[N,V]=h(()=>new Map),U=S((f)=>{X((y)=>{let H=new Set(y);if(H.has(f))H.delete(f);else H.add(f);return H})},[]),O=S((f)=>{X((y)=>{if(!y.has(f))return y;let H=new Set(y);return H.delete(f),H})},[]),M=S((f)=>{V((y)=>{if(!y.has(f))return y;let H=new Map(y);return H.delete(f),H})},[]),I=S((f,y={})=>{if(!f)return;let H=typeof y?.paneOverrideId==="string"&&y.paneOverrideId.trim()?y.paneOverrideId.trim():null,x={path:f,mode:"edit"};try{if(!(H?o0.get(H):o0.resolve(x))){if(!o0.get("editor")){console.warn(`[openEditor] No pane handler for: ${f}`);return}}}catch(q0){console.warn(`[openEditor] paneRegistry.resolve() error for "${f}":`,q0)}let c=typeof y?.label==="string"&&y.label.trim()?y.label.trim():void 0;if(a0.open(f,c),H)V((q0)=>{if(q0.get(f)===H)return q0;let d=new Map(q0);return d.set(f,H),d})},[]),E=S(()=>{let f=a0.getActiveId();if(f){let y=a0.get(f);if(y?.dirty){if(!window.confirm(`"${y.label}" has unsaved changes. Close anyway?`))return}a0.close(f),O(f),M(f),$.current?.(f)}},[M,O]),J=S((f)=>{let y=a0.get(f);if(y?.dirty){if(!window.confirm(`"${y.label}" has unsaved changes. Close anyway?`))return}a0.close(f),O(f),M(f),$.current?.(f)},[M,O]),D=S((f)=>{a0.activate(f)},[]),k=S((f)=>{let y=a0.getTabs().filter((c)=>c.id!==f&&!c.pinned),H=y.filter((c)=>c.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let x=y.map((c)=>c.id);a0.closeOthers(f),x.forEach((c)=>{O(c),M(c),$.current?.(c)})},[M,O]),i=S(()=>{let f=a0.getTabs().filter((x)=>!x.pinned),y=f.filter((x)=>x.dirty).length;if(y>0){if(!window.confirm(`${y} unsaved tab${y>1?"s":""} will be closed. Continue?`))return}let H=f.map((x)=>x.id);a0.closeAll(),H.forEach((x)=>{O(x),M(x),$.current?.(x)})},[M,O]),p=S((f)=>{a0.togglePin(f)},[]),s=S((f)=>{if(!f)return;V((y)=>{if(y.get(f)==="editor")return y;let H=new Map(y);return H.set(f,"editor"),H}),a0.activate(f)},[]),e=S(()=>{let f=a0.getActiveId();if(f)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:f}}))},[]);return u(()=>{let f=(y)=>{let{oldPath:H,newPath:x,type:c}=y.detail||{};if(!H||!x)return;if(c==="dir"){for(let q0 of a0.getTabs())if(q0.path===H||q0.path.startsWith(`${H}/`)){let d=`${x}${q0.path.slice(H.length)}`;a0.rename(q0.id,d)}}else a0.rename(H,x);V((q0)=>GX(q0,H,x,c))};return window.addEventListener("workspace-file-renamed",f),()=>window.removeEventListener("workspace-file-renamed",f)},[]),u(()=>{let f=(y)=>{if(a0.hasUnsaved())y.preventDefault(),y.returnValue=""};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Y,previewTabs:K,tabPaneOverrides:N,openEditor:I,closeEditor:E,handleTabClose:J,handleTabActivate:D,handleTabCloseOthers:k,handleTabCloseAll:i,handleTabTogglePin:p,handleTabTogglePreview:U,handleTabEditSource:s,revealInExplorer:e}}function W3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],Q=Number(Y);return Number.isFinite(Q)?Q:$}catch{return $}}var B3=W3("warning",30000),Bj=W3("finalize",120000),U3=W3("refresh",30000),Uj=30000;function Lj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Fj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function zj(_=30000){let[,$]=h(0);u(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function L3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}function Hj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function F3(_){return String(_||"").trim()||"web:default"}function Jj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Oj(_={}){return F4(_)&&s8(_)}function XX(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function KX(_={},$={}){if(!Oj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=XX({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function Dj(_={}){if(!Oj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,Q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of Y)$.clearTimeout?.(V);Y.clear()},q=()=>{Z=0,KX({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},K=()=>{G();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Y.delete(U),G()},V);if(U!=null)Y.add(U)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},N=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",K,!0),N?.addEventListener?.("resize",K),N?.addEventListener?.("scroll",K),()=>{Q(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",K,!0),N?.removeEventListener?.("resize",K),N?.removeEventListener?.("scroll",K)}}function NX(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function X_(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:NX($,j)}var VX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Aj(_){return VX.has(String(_||"").trim())}function WX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function z3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(WX(_),{detail:Z})),!0}var BX=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Ej(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(F4({window:j,navigator:Z}))};Y();let q=BX.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Y),()=>G.removeEventListener("change",Y);if(typeof G.addListener==="function")return G.addListener(Y),()=>G.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let G of q)G();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function Mj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}function Ij(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Y=_?.popOutPane,Q=(K)=>{let X=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(X)Z?.(X,N)},q=(K)=>{let X=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(X)Y?.(X,N)},G=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return G.forEach((K)=>j.addEventListener(K,Q)),j.addEventListener("pane:popout",q),()=>{G.forEach((K)=>j.removeEventListener(K,Q)),j.removeEventListener("pane:popout",q)}}function kj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Y)=>{if(Y?.ctrlKey&&Y.key==="`")Y.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function Cj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Y=_?.exitZenMode,Q=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(G)=>{if(G?.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault?.(),Z?.();return}if(G?.key==="Escape"&&Q())G.preventDefault?.(),Y?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}var UX="piclaw_btw_session",Pj=900,Tj="__piclawRenameBranchFormLock__";function LX(){try{return import.meta.url}catch{return null}}function H3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function Y6(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function Sj(_={}){let $=_.importMetaUrl===void 0?LX():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin;try{let Y=$?new URL($).searchParams.get("v"):null;if(Y&&Y.trim())return Y.trim()}catch{}try{let Q=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Q)return null;let G=new URL(Q,Z||"http://localhost").searchParams.get("v");return G&&G.trim()?G.trim():null}catch{return null}}function J3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[Tj];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[Tj]=Z,Z}function xj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function yj(_={}){let $=typeof _.readItem==="function"?_.readItem:J_,j=_.storageKey||UX,Z=$(j);if(!Z)return null;try{let Y=JSON.parse(Z);if(!Y||typeof Y!=="object")return null;let Q=typeof Y.question==="string"?Y.question:"",q=typeof Y.answer==="string"?Y.answer:"",G=typeof Y.thinking==="string"?Y.thinking:"",K=typeof Y.error==="string"&&Y.error.trim()?Y.error:null,X=Y.status==="running"?"error":Y.status==="success"||Y.status==="error"?Y.status:"success";return{question:Q,answer:q,thinking:G,error:X==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:X}}catch{return null}}function Rj(_,$={}){let j=$.defaultChatJid||"web:default",Z=Y6(_,"chat_jid",j),Y=H3(_?.get?.("chat_only")||_?.get?.("chat-only")),Q=H3(_?.get?.("pane_popout")),q=Y6(_,"pane_path"),G=Y6(_,"pane_label"),K=H3(_?.get?.("branch_loader")),X=Y6(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Y,panePopoutMode:Q,panePopoutPath:q,panePopoutLabel:G,branchLoaderMode:K,branchLoaderSourceChatJid:X}}function wj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Y,getFormLock:Q,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:G,now:K=Date.now()}=_||{};if(!$||!j?.chat_jid)return!1;let X=Q?.()||null;if(!X)return!1;if(Z||K<Number(Y||0)||X.inFlight||K<Number(X.cooldownUntil||0))return!1;return q?.(j.agent_name||""),G?.(!0),!0}function fj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_||{};$?.(!1),j?.("")}async function vj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Y,renameBranchInFlightRef:Q,renameBranchLockUntilRef:q,getFormLock:G,setIsRenamingBranch:K,renameChatBranch:X,refreshActiveChatAgents:N,refreshCurrentChatBranches:V,showIntentToast:U,closeRenameForm:O,now:M=()=>Date.now()}=_||{};if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Y?.(),!1;let I=M(),E=G?.()||null;if(!E)return!1;if(Q?.current||I<Number(q?.current||0)||E.inFlight||I<Number(E.cooldownUntil||0))return!1;Q.current=!0,E.inFlight=!0,K?.(!0);try{let J=j.agent_name||"",D=y8(Z,J);if(!D.canSubmit)return U?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let k=D.normalized||J,i=await X(j.chat_jid,{agentName:k});await Promise.allSettled([N?.(),V?.()]);let p=i?.branch?.agent_name||k||J;return U?.("Branch renamed",`@${p}`,"info",3500),O?.(),!0}catch(J){let D=J instanceof Error?J.message:String(J||"Could not rename branch."),k=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return U?.("Could not rename branch",k||"Could not rename branch.","warning",5000),!1}finally{Q.current=!1,K?.(!1);let J=M()+Pj;if(q)q.current=J;let D=G?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=J}}async function bj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Y,currentChatBranches:Q=[],activeChatAgents:q=[],pruneChatBranch:G,refreshActiveChatAgents:K,refreshCurrentChatBranches:X,showIntentToast:N,baseHref:V,chatOnlyMode:U,navigate:O,confirm:M=(s)=>window.confirm(s)}=_||{};if(!$)return!1;let I=typeof j==="string"&&j.trim()?j.trim():"",E=typeof Z==="string"&&Z.trim()?Z.trim():"",J=I||Y?.chat_jid||E;if(!J)return N?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Y?.chat_jid===J?Y:null)||Q.find((s)=>s?.chat_jid===J)||q.find((s)=>s?.chat_jid===J)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return N?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let i=`@${D?.agent_name||J}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!M(`Prune ${i}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await G(J),await Promise.allSettled([K?.(),X?.()]);let s=D?.root_chat_jid||"web:default";N?.("Branch pruned",`${i} has been archived.`,"info",3000);let e=z4(V,s,{chatOnly:U});return O?.(e),!0}catch(s){let e=s instanceof Error?s.message:String(s||"Could not prune branch.");return N?.("Could not prune branch",e||"Could not prune branch.","warning",5000),!1}}async function gj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Y,refreshCurrentChatBranches:Q,showIntentToast:q,baseHref:G,chatOnlyMode:K,navigate:X}=_||{},N=typeof $==="string"?$.trim():"";if(!N||typeof j!=="function")return!1;try{let V=Z.find((J)=>J?.chat_jid===N)||null,U=await j(N);await Promise.allSettled([Y?.(),Q?.()]);let O=U?.branch,M=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():N,I=D2(V?.agent_name,O?.agent_name,M);q?.("Branch restored",I,"info",4200);let E=z4(G,M,{chatOnly:K});return X?.(E),!0}catch(V){let U=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function mj(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Y,baseHref:Q,isCancelled:q=()=>!1}=_||{};try{Z?.({status:"running",message:"Preparing a new chat branch…"});let G=await j($);if(q())return!1;let K=G?.branch,X=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!X)throw Error("Branch fork did not return a chat id.");let N=z4(Q,X,{chatOnly:!0});return Y?.(N,{replace:!0}),!0}catch(G){if(q())return!1;return Z?.({status:"error",message:a5(G)}),!1}}async function uj(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Y,refreshCurrentChatBranches:Q,showIntentToast:q,navigate:G,baseHref:K}=_||{};try{let N=(await Z($))?.branch,V=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Y?.(),Q?.()]);let U=N?.agent_name?`@${N.agent_name}`:V;q?.("New branch created",`Switched to ${U}.`,"info",2500);let O=z4(K,V,{chatOnly:j});return G?.(O),!0}catch(X){return q?.("Could not create branch",a5(X),"warning",5000),!1}}async function hj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Y,showIntentToast:Q,resolveSourceTransfer:q,closeSourcePaneIfTransferred:G,currentChatJid:K,baseHref:X}=_||{};if(!$||j)return!1;let N=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!N)return!1;let V=f7(N);if(!V)return Q?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=O$(V);if(!U)return Q?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;D$(U,{title:typeof Y==="string"&&Y.trim()?`Opening ${Y}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(N),M=w7(X,N,{label:typeof Y==="string"&&Y.trim()?Y.trim():void 0,chatJid:K,params:O});return A$(U,M),G?.(N),!0}catch(O){E$(U);let M=O?.message||"Could not transfer pane state to the new window.";return Q?.("Could not open pane window",M,"warning",5000),!1}}async function pj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Y,forkChatBranch:Q,getActiveChatAgents:q,getChatBranches:G,setActiveChatAgents:K,setCurrentChatBranches:X,showIntentToast:N,baseHref:V}=_||{};if(!$||j)return!1;let U=y7(Z);if(!U)return N?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let M=R7(V,Z,{chatOnly:!0});if(!window.open(M,U.target))return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=O$(U);if(!O)return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;D$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let I=(await Q(Z))?.branch,E=typeof I?.chat_jid==="string"&&I.chat_jid.trim()?I.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await G?.(Y);X?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let J=z4(V,E,{chatOnly:!0});return A$(O,J),!0}catch(M){return E$(O),N?.("Could not open branch window",a5(M),"error",5000),!1}}var cj=Sj(),lj=T6,dj=S6,FX=y6,ij=b6,oj=g6,O3=R6,D3=X_($_,"getAgentContext",null),zX=X_($_,"getAutoresearchStatus",null),HX=X_($_,"stopAutoresearch",{status:"ok"}),JX=X_($_,"dismissAutoresearch",{status:"ok"}),nj=X_($_,"getAgentModels",{current:null,models:[]}),sj=X_($_,"getActiveChatAgents",{chats:[]}),Q6=X_($_,"getChatBranches",{chats:[]}),OX=X_($_,"renameChatBranch",null),DX=X_($_,"pruneChatBranch",null),AX=X_($_,"restoreChatBranch",null),rj=X_($_,"getAgentQueueState",{count:0}),EX=X_($_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),MX=X_($_,"removeAgentQueueItem",{removed:!1}),IX=X_($_,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});o0.register(U$);o0.register(p$);o0.register(h$);o0.register(c$);o0.register(l$);o0.register(d$);o0.register(o$);o0.register(n$);o0.register(r$);o0.register(e$);o0.register(_3);o0.register(m$);L$();o0.register(H$);o0.register(J$);function kX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:Q,panePopoutLabel:q,branchLoaderMode:G,branchLoaderSourceChatJid:K}=v0(()=>Rj(_),[_]),[X,N]=h("disconnected"),[V,U]=h(()=>F4()),[O,M]=h(null),[I,E]=h(null),[J,D]=h(!1),[k,i]=h("current"),[p,s]=h([]),[e,f]=h([]),[y,H]=h(null),{agentStatus:x,setAgentStatus:c,agentDraft:q0,setAgentDraft:d,agentPlan:j0,setAgentPlan:_0,agentThought:X0,setAgentThought:V0,pendingRequest:W0,setPendingRequest:J0,currentTurnId:E0,setCurrentTurnId:M0,steerQueuedTurnId:n0,setSteerQueuedTurnId:y0,lastAgentEventRef:C0,lastSilenceNoticeRef:s0,isAgentRunningRef:r0,draftBufferRef:h0,thoughtBufferRef:t0,pendingRequestRef:p0,stalledPostIdRef:j1,currentTurnIdRef:z0,steerQueuedTurnIdRef:l0,thoughtExpandedRef:Z1,draftExpandedRef:q1}=Nj(),[K_,E1]=h({}),[_1,p1]=h(null),[k1,G1]=h(null),[c0,y1]=h(!1),[C1,a]=h(null),[B0,H0]=h([]),[N0,R0]=h([]),[S0,b0]=h(null),[k0,w0]=h(()=>new Map),[i0,D0]=h(()=>new Set),[g0,O0]=h([]),[Q0,w]=h(!1),[t,F0]=h(()=>yj()),[I0,m0]=h(null),X1=T(new Set),M1=v0(()=>B0.find((B)=>B?.chat_jid===j)||null,[B0,j]),N1=v0(()=>N0.find((B)=>B?.chat_jid===j)||M1||null,[M1,N0,j]),c1=N1?.root_chat_jid||M1?.root_chat_jid||j,q4=xj(k),[U_,j_]=h(()=>({status:G?"running":"idle",message:G?"Preparing a new chat branch…":""})),L_=g0.length,N_=T(new Set),Y1=T([]),r1=T(new Set),G4=T(0),g_=T({inFlight:!1,lastAttemptAt:0,turnId:null});N_.current=new Set(g0.map((B)=>B.row_id)),Y1.current=g0;let{notificationsEnabled:_5,notificationPermission:w4,toggleNotifications:g1,notify:F_}=Xj(),[R1,I1]=h(()=>new Set),[V1,m_]=h(()=>L5("workspaceOpen",!0)),u_=T(null),{editorOpen:B1,tabStripTabs:Z_,tabStripActiveId:u0,previewTabs:P1,tabPaneOverrides:A_,openEditor:Y_,closeEditor:f4,handleTabClose:r_,handleTabActivate:v4,handleTabCloseOthers:a_,handleTabCloseAll:$5,handleTabTogglePin:t_,handleTabTogglePreview:h_,handleTabEditSource:k5,revealInExplorer:C5}=Wj({onTabClosed:(B)=>u_.current?.(B)}),U1=T(null),w1=T(null),j5=T(null),E_=T(null),Q_=o0.getDockPanes().length>0,[l1,S1]=h(!1),m1=S(()=>S1((B)=>!B),[]),J1=S(()=>{Y_(t4,{label:"Terminal"})},[Y_]),M_=S(()=>{Y_(Q4,{label:"VNC"})},[Y_]),I_=v0(()=>Z_.find((B)=>B.id===u0)||Z_[0]||null,[u0,Z_]),k_=v0(()=>u0?A_.get(u0)||null:null,[A_,u0]),e_=v0(()=>q||I_?.label||Q||"Pane",[I_?.label,q,Q]),q_=v0(()=>Z_.length>1||Boolean(u0&&P1.has(u0)),[P1,u0,Z_.length]),a1=v0(()=>Q===Q4||Q.startsWith(`${Q4}/`),[Q]),C_=v0(()=>Q===t4&&!q_||a1,[a1,q_,Q]),X4=Y||!Z&&(B1||Q_&&l1),[O1,_4]=h(!1),b4=T(!1),g4=S(()=>{if(!B1||Z)return;if(b4.current=l1,l1)S1(!1);_4(!0)},[B1,Z,l1]),T_=S(()=>{if(!O1)return;if(_4(!1),b4.current)S1(!0),b4.current=!1},[O1]),m4=S(()=>{if(O1)T_();else g4()},[O1,g4,T_]);u(()=>{if(O1&&!B1)T_()},[O1,B1,T_]),u(()=>{if(!Y||!Q)return;if(a0.getActiveId()===Q)return;Y_(Q,q?{label:q}:void 0)},[Y_,q,Y,Q]),u(()=>{let B=U1.current;if(!B)return;if(w1.current)w1.current.dispose(),w1.current=null;let W=u0;if(!W)return;let A={path:W,mode:"edit"},R=(k_?o0.get(k_):null)||o0.resolve(A)||o0.get("editor");if(!R){B.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let P=R.mount(B,A);w1.current=P,P.onDirtyChange?.(($0)=>{a0.setDirty(W,$0)}),P.onSaveRequest?.(()=>{}),P.onClose?.(()=>{f4()});let m=a0.getViewState(W);if(m&&typeof P.restoreViewState==="function")requestAnimationFrame(()=>P.restoreViewState(m));if(typeof P.onViewStateChange==="function")P.onViewStateChange(($0)=>{a0.saveViewState(W,$0)});return requestAnimationFrame(()=>P.focus()),()=>{if(w1.current===P)P.dispose(),w1.current=null}},[u0,k_,f4]);let Z5=S(async(B)=>{let W=typeof u0==="string"?u0.trim():"",A=w1.current;if(!W||!A?.setContent)return;if(typeof A.isDirty==="function"&&A.isDirty())return;if(!(Array.isArray(B)&&B.length>0?B.some((P)=>{let m=Array.isArray(P?.changed_paths)?P.changed_paths.map((Y0)=>typeof Y0==="string"?Y0.trim():"").filter(Boolean):[];if(m.length>0)return m.some((Y0)=>Y0==="."||Y0===W);let $0=typeof P?.path==="string"?P.path.trim():"";return!$0||$0==="."||$0===W}):!0))return;try{let P=await p5(W,1e6,"edit"),m=typeof P?.text==="string"?P.text:"",$0=typeof P?.mtime==="string"&&P.mtime.trim()?P.mtime.trim():new Date().toISOString();A.setContent(m,$0)}catch(P){console.warn("[workspace_update] Failed to refresh active pane:",P)}},[u0]);u(()=>{let B=j5.current;if(E_.current)E_.current.dispose(),E_.current=null;if(!B||!Q_||!l1)return;let W=o0.getDockPanes()[0];if(!W){B.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let A=W.mount(B,{mode:"view"});return E_.current=A,requestAnimationFrame(()=>A.focus?.()),()=>{if(E_.current===A)A.dispose(),E_.current=null}},[Q_,l1]);let[p_,c_]=h({name:"You",avatar_url:null,avatar_background:null}),O4=T(null),l_=T(!1),u4=T(!1),d_=T(!1),P_=T(null),T1=T(j),D4=T(new Map),A4=T(j),h4=T(0),z1=T(0),E4=T({}),Y5=T({name:null,avatar_url:null}),u1=T({currentHashtag:null,searchQuery:null,searchOpen:!1}),V_=T(null),$4=T(null),p4=T(0),K4=T(0),M4=T(0),N4=T(null),S_=T(null),z_=T(null),I4=T(null),c4=T(0),x_=T({title:null,avatarBase:null}),z=T(null),C=T(!1),[v,b]=h(!1),n=T(0),[K0,U0]=h(!1),[L0,Z0]=h(""),P0=v0(()=>y8(L0,N1?.agent_name||""),[N1?.agent_name,L0]),f1=T(null),G_=S(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);zj(30000),u(()=>{if(!K0)return;requestAnimationFrame(()=>{if(K0)f1.current?.focus(),f1.current?.select?.()})},[K0]),u(()=>{return f2()},[]),u(()=>{return Ej(U)},[]),u(()=>{K1("workspaceOpen",String(V1))},[V1]),u(()=>{return Dj()},[]),u(()=>{return()=>{G_()}},[G_]),u(()=>{if(!t){K1(BTW_SESSION_KEY,"");return}K1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),u(()=>{E4.current=K_||{}},[K_]),u(()=>{T1.current=j},[j]),u(()=>{Y5.current=p_||{name:"You",avatar_url:null,avatar_background:null}},[p_]);let d1=S((B,W,A=null)=>{if(typeof document>"u")return;let R=(B||"").trim()||"PiClaw";if(x_.current.title!==R){document.title=R;let G0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(G0&&G0.getAttribute("content")!==R)G0.setAttribute("content",R);x_.current.title=R}let P=document.getElementById("dynamic-favicon");if(!P)return;let m=P.getAttribute("data-default")||P.getAttribute("href")||"/favicon.ico",$0=W||m,Y0=W?`${$0}|${A||""}`:$0;if(x_.current.avatarBase!==Y0){let G0=W?`${$0}${$0.includes("?")?"&":"?"}v=${A||Date.now()}`:$0;P.setAttribute("href",G0),x_.current.avatarBase=Y0}},[]),T5=S((B)=>{if(!B)return;s((W)=>W.includes(B)?W:[...W,B])},[]),F=S((B)=>{s((W)=>W.filter((A)=>A!==B))},[]);u_.current=F;let g=S(()=>{s([])},[]),o=S((B)=>{if(!Array.isArray(B)){s([]);return}let W=[],A=new Set;for(let R of B){if(typeof R!=="string"||!R.trim())continue;let P=R.trim();if(A.has(P))continue;A.add(P),W.push(P)}s(W)},[]),l=S((B,W=null,A="info",R=3000)=>{G_(),H({title:B,detail:W||null,kind:A||"info"}),z.current=setTimeout(()=>{H((P)=>P?.title===B?null:P)},R)},[G_]),T0=S((B)=>{let W=Hj(B,{editorOpen:B1,resolvePane:(A)=>o0.resolve(A)});if(W.kind==="open"){Y_(W.path);return}if(W.kind==="toast")l(W.title,W.detail,W.level)},[B1,Y_,l]),D1=S(()=>{let B=u0;if(B)T5(B)},[u0,T5]),x1=S((B)=>{if(!B)return;f((W)=>W.includes(B)?W:[...W,B])},[]),v1=S(async(B,W=null)=>{let A=(P)=>{P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("post-highlight"),setTimeout(()=>P.classList.remove("post-highlight"),2000)},R=document.getElementById("post-"+B);if(R){A(R);return}try{let P=typeof W==="string"&&W.trim()?W.trim():j,$0=(await P6(B,P))?.thread?.[0];if(!$0)return;o1((Y0)=>{if(!Y0)return[$0];if(Y0.some((G0)=>G0.id===$0.id))return Y0;return[...Y0,$0]}),requestAnimationFrame(()=>{setTimeout(()=>{let Y0=document.getElementById("post-"+B);if(Y0)A(Y0)},50)})}catch(P){console.error("[scrollToMessage] Failed to fetch message",B,P)}},[j]),V4=S((B)=>{f((W)=>W.filter((A)=>A!==B))},[]),l4=S(()=>{f([])},[]),Q5=S((B)=>{if(!Array.isArray(B)){f([]);return}let W=[],A=new Set;for(let R of B){if(typeof R!=="string"||!R.trim())continue;let P=R.trim();if(A.has(P))continue;A.add(P),W.push(P)}f(W)},[]),q5=S((B)=>{let W=typeof B==="string"&&B.trim()?B.trim():"Could not send your message.";l("Compose failed",W,"error",5000)},[l]),W_=S((B={})=>{let W=Date.now();if(C0.current=W,B.running)r0.current=!0,w((A)=>A?A:!0);if(B.clearSilence)s0.current=0},[w]),i1=S(()=>{if(I4.current)clearTimeout(I4.current),I4.current=null;c4.current=0},[]);u(()=>()=>{i1()},[i1]);let G5=S(()=>{i1(),c((B)=>{if(!B)return B;if(!(B.last_activity||B.lastActivity))return B;let{last_activity:W,lastActivity:A,...R}=B;return R})},[i1]),k4=S((B)=>{if(!B)return;i1();let W=Date.now();c4.current=W,c({type:B.type||"active",last_activity:!0}),I4.current=setTimeout(()=>{if(c4.current!==W)return;c((A)=>{if(!A||!(A.last_activity||A.lastActivity))return A;return null})},Uj)},[i1]),H1=S(()=>{r0.current=!1,w(!1),C0.current=null,s0.current=0,h0.current="",t0.current="",p0.current=null,S_.current=null,z0.current=null,l0.current=null,P_.current=null,g_.current={inFlight:!1,lastAttemptAt:0,turnId:null},i1(),M0(null),y0(null),Z1.current=!1,q1.current=!1},[i1,M0,y0,w]),j4=S((B)=>{if(!Jj({remainingQueueCount:B,currentTurnId:z0.current,isAgentTurnActive:Q0}))return;l0.current=null,y0(null)},[Q0,y0]),G8=S(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),X5=S(()=>({agentStatus:x,agentDraft:q0?{...q0}:{text:"",totalLines:0},agentPlan:j0||"",agentThought:X0?{...X0}:{text:"",totalLines:0},pendingRequest:W0,currentTurnId:E0,steerQueuedTurnId:n0,isAgentTurnActive:Boolean(Q0),followupQueueItems:Array.isArray(g0)?g0.map((B)=>({...B})):[],activeModel:_1,activeThinkingLevel:k1,supportsThinking:Boolean(c0),activeModelUsage:C1,contextUsage:S0,isAgentRunning:Boolean(r0.current),wasAgentActive:Boolean(d_.current),draftBuffer:h0.current||"",thoughtBuffer:t0.current||"",lastAgentEvent:C0.current||null,lastSilenceNotice:s0.current||0,lastAgentResponse:S_.current||null,currentTurnIdRef:z0.current||null,steerQueuedTurnIdRef:l0.current||null,thoughtExpanded:Boolean(Z1.current),draftExpanded:Boolean(q1.current),agentStatusRef:P_.current||null,silentRecovery:{...g_.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[_1,C1,k1,q0,j0,x,X0,S0,E0,g0,Q0,W0,n0,c0]),X8=S((B)=>{let W=B||G8();i1(),r0.current=Boolean(W.isAgentRunning),d_.current=Boolean(W.wasAgentActive),w(Boolean(W.isAgentTurnActive)),C0.current=W.lastAgentEvent||null,s0.current=Number(W.lastSilenceNotice||0),h0.current=W.draftBuffer||"",t0.current=W.thoughtBuffer||"",p0.current=W.pendingRequest||null,S_.current=W.lastAgentResponse||null,z0.current=W.currentTurnIdRef||null,l0.current=W.steerQueuedTurnIdRef||null,P_.current=W.agentStatusRef||null,g_.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},Z1.current=Boolean(W.thoughtExpanded),q1.current=Boolean(W.draftExpanded),c(W.agentStatus||null),d(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),_0(W.agentPlan||""),V0(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),J0(W.pendingRequest||null),M0(W.currentTurnId||null),y0(W.steerQueuedTurnId||null),O0(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((A)=>({...A})):[]),p1(W.activeModel||null),G1(W.activeThinkingLevel||null),y1(Boolean(W.supportsThinking)),a(W.activeModelUsage??null),b0(W.contextUsage??null)},[i1,G8,M0,O0,w,y0]),h1=S((B)=>{if(!B)return;if(z0.current===B)return;z0.current=B,g_.current={inFlight:!1,lastAttemptAt:0,turnId:B},M0(B),l0.current=null,y0(null),h0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,S_.current=null,Z1.current=!1,q1.current=!1},[M0,y0]),H_=S((B)=>{if(typeof document<"u"){let G0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&G0)return}let W=S_.current;if(!W||!W.post)return;if(B&&W.turnId&&W.turnId!==B)return;let A=W.post;if(A.id&&N4.current===A.id)return;let R=String(A?.data?.content||"").trim();if(!R)return;N4.current=A.id||N4.current,S_.current=null;let P=R.replace(/\s+/g," ").slice(0,200),m=E4.current||{},Y0=(A?.data?.agent_id?m[A.data.agent_id]:null)?.name||"Pi";F_(Y0,P)},[F_]),d4=S(async(B,W)=>{if(B!=="thought"&&B!=="draft")return;let A=z0.current;if(B==="thought"){if(Z1.current=W,A)try{await oj(A,"thought",W)}catch(R){console.warn("Failed to update thought visibility:",R)}if(!W)return;try{let R=A?await ij(A,"thought"):null;if(R?.text)t0.current=R.text;V0((P)=>({...P||{text:"",totalLines:0},fullText:t0.current||P?.fullText||"",totalLines:Number.isFinite(R?.total_lines)?R.total_lines:P?.totalLines||0}))}catch(R){console.warn("Failed to fetch full thought:",R)}return}if(q1.current=W,A)try{await oj(A,"draft",W)}catch(R){console.warn("Failed to update draft visibility:",R)}if(!W)return;try{let R=A?await ij(A,"draft"):null;if(R?.text)h0.current=R.text;d((P)=>({...P||{text:"",totalLines:0},fullText:h0.current||P?.fullText||"",totalLines:Number.isFinite(R?.total_lines)?R.total_lines:P?.totalLines||0}))}catch(R){console.warn("Failed to fetch full draft:",R)}},[]),K8=T(null),i4=S(()=>{let B=V_.current;if(!B)return;if(!(Math.abs(B.scrollTop)>150))B.scrollTop=0},[]);K8.current=i4;let aj=S((B)=>{let W=V_.current;if(!W||typeof B!=="function"){B?.();return}let{currentHashtag:A,searchQuery:R,searchOpen:P}=u1.current||{},m=!((R||P)&&!A),$0=m?W.scrollHeight-W.scrollTop:W.scrollTop;B(),requestAnimationFrame(()=>{let Y0=V_.current;if(!Y0)return;if(m){let G0=Math.max(Y0.scrollHeight-$0,0);Y0.scrollTop=G0}else{let G0=Math.max(Y0.scrollHeight-Y0.clientHeight,0),r=Math.min($0,G0);Y0.scrollTop=r}})},[]),P5=S((B)=>{let W=V_.current;if(!W||typeof B!=="function"){B?.();return}let A=W.scrollTop;B(),requestAnimationFrame(()=>{let R=V_.current;if(!R)return;let P=Math.max(R.scrollHeight-R.clientHeight,0);R.scrollTop=Math.min(A,P)})},[]),tj="Queued as a follow-up (one-at-a-time).",ej="⁣",A3=S((B)=>{if(!B||!Array.isArray(B))return B;let W=N_.current,A=new Set(W),R=B.filter((P)=>{if(A.has(P?.id))return!1;if(P?.data?.is_bot_message){let m=P?.data?.content;if(m===tj||m===ej)return!1}return!0});return R.length===B.length?B:R},[]),{posts:S5,setPosts:o1,hasMore:_Z,setHasMore:N8,hasMoreRef:E3,loadPosts:i_,refreshTimeline:t1,loadMore:$Z,loadMoreRef:q6}=Kj({preserveTimelineScroll:aj,preserveTimelineScrollTop:P5,chatJid:j}),K5=v0(()=>A3(S5),[S5,g0,A3]),V8=S(()=>{let B=j1.current;if(!B)return;o1((W)=>W?W.filter((A)=>A.id!==B):W),j1.current=null},[o1]),{handleSplitterMouseDown:jZ,handleSplitterTouchStart:ZZ,handleEditorSplitterMouseDown:YZ,handleEditorSplitterTouchStart:QZ,handleDockSplitterMouseDown:qZ,handleDockSplitterTouchStart:GZ}=Vj({appShellRef:$4,sidebarWidthRef:p4,editorWidthRef:K4,dockHeightRef:M4}),M3=S(()=>{if(!r0.current)return;r0.current=!1,s0.current=0,C0.current=null,z0.current=null,M0(null),Z1.current=!1,q1.current=!1;let B=(h0.current||"").trim();if(h0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,S_.current=null,!B){c({type:"error",title:"Response stalled - No content received"});return}let A=`${B}${`

⚠️ Response may be incomplete - the model stopped responding`}`,R=Date.now(),P=new Date().toISOString(),m={id:R,timestamp:P,data:{type:"agent_response",content:A,agent_id:"default",is_local_stall:!0}};j1.current=R,o1(($0)=>$0?q8([...$0,m]):[m]),K8.current?.(),c(null)},[M0]);u(()=>{u1.current={currentHashtag:O,searchQuery:I,searchOpen:J}},[O,I,J]);let $1=S(()=>{let B=++G4.current,W=j;rj(W).then((A)=>{if(B!==G4.current)return;if(T1.current!==W)return;let R=r1.current,P=Array.isArray(A?.items)?A.items.map((m)=>({...m})).filter((m)=>!R.has(m.row_id)):[];if(P.length){O0((m)=>{if(m.length===P.length&&m.every(($0,Y0)=>$0.row_id===P[Y0].row_id))return m;return P});return}R.clear(),j4(0),O0((m)=>m.length===0?m:[])}).catch(()=>{if(B!==G4.current)return;if(T1.current!==W)return;O0((A)=>A.length===0?A:[])})},[j4,j,O0]),e1=S(async()=>{let B=j;try{let W=await D3(B);if(T1.current!==B)return;if(W)b0(W)}catch(W){if(T1.current!==B)return;console.warn("Failed to fetch agent context:",W)}},[j]),y_=S(async()=>{let B=j;try{let W=await zX(B);if(T1.current!==B)return;let A=Array.isArray(W?.content)?W.content.find((R)=>R?.type==="status_panel"&&R?.panel):null;w0((R)=>{let P=new Map(R);if(W?.key&&A?.panel)P.set(W.key,A.panel);else P.delete("autoresearch");return P}),D0((R)=>{if(R.size===0)return R;let P=new Set(Array.from(R).filter((m)=>!String(m).startsWith("autoresearch:")));return P.size===R.size?R:P})}catch(W){if(T1.current!==B)return;console.warn("Failed to fetch autoresearch status:",W)}},[j]),R_=S(async()=>{let B=j;try{let W=await O3(B);if(T1.current!==B)return null;if(!W||W.status!=="active"||!W.data){if(d_.current){let{currentHashtag:P,searchQuery:m,searchOpen:$0}=u1.current||{};if(!P&&!m&&!$0)t1()}return d_.current=!1,H1(),P_.current=null,c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,W??null}d_.current=!0;let A=W.data;P_.current=A;let R=A.turn_id||A.turnId;if(R)h1(R);if(W_({running:!0,clearSilence:!0}),G5(),c(A),W.thought&&W.thought.text)V0((P)=>{if(P&&P.text&&P.text.length>=W.thought.text.length)return P;return t0.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)d((P)=>{if(P&&P.text&&P.text.length>=W.draft.text.length)return P;return h0.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[H1,G5,W_,t1,h1]),G6=S(async()=>{if(!r0.current)return null;if(p0.current)return null;let B=z0.current||null,W=g_.current,A=Date.now();if(W.inFlight)return null;if(W.turnId===B&&A-W.lastAttemptAt<U3)return null;W.inFlight=!0,W.lastAttemptAt=A,W.turnId=B;try{let{currentHashtag:R,searchQuery:P,searchOpen:m}=u1.current||{};if(!R&&!P&&!m)await t1();return await $1(),await R_()}finally{W.inFlight=!1}},[R_,$1,t1]);u(()=>{let B=Math.min(1000,Math.max(100,Math.floor(B3/2))),W=setInterval(()=>{if(!r0.current)return;if(p0.current)return;let A=C0.current;if(!A)return;let R=Date.now(),P=R-A,m=B4(P_.current);if(P>=Bj){if(!m)c({type:"waiting",title:"Re-syncing after a quiet period…"});G6();return}if(P>=B3){if(R-s0.current>=U3){if(!m){let $0=Math.floor(P/1000);c({type:"waiting",title:`Waiting for model… No events for ${$0}s`})}s0.current=R,G6()}}},B);return()=>clearInterval(W)},[G6]);let I3=S((B)=>{let W=typeof B==="string"&&B.trim()?B.trim():null;if(!W||!cj||W===cj)return!1;if(O4.current===W)return!0;O4.current=W;let A=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!a0.hasUnsaved()&&!A&&!r0.current&&!p0.current&&!l_.current)return l_.current=!0,l("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{l_.current=!1}},350),!0;return l("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[r0,p0,l]),XZ=S((B)=>{if(N(B),B!=="connected"){c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,H1();return}if(!u4.current){u4.current=!0;let{currentHashtag:P,searchQuery:m,searchOpen:$0}=u1.current||{};if(!P&&!m&&!$0)t1();R_(),$1(),e1();return}let{currentHashtag:W,searchQuery:A,searchOpen:R}=u1.current;if(!W&&!A&&!R)t1();R_(),$1(),e1()},[H1,t1,R_,$1,e1]),KZ=S(async(B)=>{M(B),o1(null),await i_(B)},[i_]),NZ=S(async()=>{M(null),E(null),o1(null),await i_()},[i_]),VZ=S(async(B,W=k)=>{if(!B||!B.trim())return;let A=W==="root"||W==="all"?W:"current";i(A),E(B.trim()),M(null),o1(null);try{let R=await lj(B.trim(),50,0,j,A,c1);o1(R.results),N8(!1)}catch(R){console.error("Failed to search:",R),o1([])}},[j,c1,k]),WZ=S(()=>{D(!0),E(null),M(null),i("current"),o1([])},[]),BZ=S(()=>{D(!1),E(null),i_()},[i_]),TX=S(()=>{},[]),X6=!O&&!I&&!J,UZ=S(async(B)=>{if(!B)return;let W=B.id,A=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():j,R=K5?.filter((m)=>m?.data?.thread_id===W&&m?.id!==W).length||0;if(R>0){if(!window.confirm(`Delete this message and its ${R} replies?`))return}let P=(m)=>{if(!m.length)return;I1((Y0)=>{let G0=new Set(Y0);return m.forEach((r)=>G0.add(r)),G0}),setTimeout(()=>{if(P5(()=>{o1((Y0)=>Y0?Y0.filter((G0)=>!m.includes(G0.id)):Y0)}),I1((Y0)=>{let G0=new Set(Y0);return m.forEach((r)=>G0.delete(r)),G0}),E3.current)q6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let m=await dj(W,R>0,A);if(m?.ids?.length)P(m.ids)}catch(m){let $0=m?.message||"";if(R===0&&$0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let G0=await dj(W,!0,A);if(G0?.ids?.length)P(G0.ids);return}console.error("Failed to delete post:",m),alert(`Failed to delete message: ${$0}`)}},[j,K5,P5]),k3=S(async()=>{try{let B=await FX();E1(Lj(B));let W=B?.user||{};c_((R)=>{let P=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",m=typeof W.avatar_url==="string"?W.avatar_url.trim():null,$0=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(R.name===P&&R.avatar_url===m&&R.avatar_background===$0)return R;return{name:P,avatar_url:m,avatar_background:$0}});let A=(B?.agents||[]).find((R)=>R.id==="default");d1(A?.name,A?.avatar_url)}catch(B){console.warn("Failed to load agents:",B)}},[d1]);u(()=>{k3();let B=F5("sidebarWidth",null),W=Number.isFinite(B)?Math.min(Math.max(B,160),600):280;if(p4.current=W,$4.current)$4.current.style.setProperty("--sidebar-width",`${W}px`)},[k3]);let x5=Q0||x!==null,C3=S((B)=>{if(!B||typeof B!=="object")return;let W=B.agent_id;if(!W)return;let{agent_name:A,agent_avatar:R}=B;if(!A&&R===void 0)return;let P=E4.current?.[W]||{id:W},m=P.name||null,$0=P.avatar_url??P.avatarUrl??P.avatar??null,Y0=!1,G0=!1;if(A&&A!==P.name)m=A,G0=!0;if(R!==void 0){let r=typeof R==="string"?R.trim():null,A0=typeof $0==="string"?$0.trim():null,f0=r||null;if(f0!==(A0||null))$0=f0,Y0=!0}if(!G0&&!Y0)return;if(E1((r)=>{let f0={...r[W]||{id:W}};if(G0)f0.name=m;if(Y0)f0.avatar_url=$0;return{...r,[W]:f0}}),W==="default")d1(m,$0,Y0?Date.now():null)},[d1]),T3=S((B)=>{if(!B||typeof B!=="object")return;let W=B.user_name??B.userName,A=B.user_avatar??B.userAvatar,R=B.user_avatar_background??B.userAvatarBackground;if(W===void 0&&A===void 0&&R===void 0)return;c_((P)=>{let m=typeof W==="string"&&W.trim()?W.trim():P.name||"You",$0=A===void 0?P.avatar_url:typeof A==="string"&&A.trim()?A.trim():null,Y0=R===void 0?P.avatar_background:typeof R==="string"&&R.trim()?R.trim():null;if(P.name===m&&P.avatar_url===$0&&P.avatar_background===Y0)return P;return{name:m,avatar_url:$0,avatar_background:Y0}})},[]),K6=S((B)=>{if(!B||typeof B!=="object")return;let W=B.model??B.current;if(W!==void 0)p1(W);if(B.thinking_level!==void 0)G1(B.thinking_level??null);if(B.supports_thinking!==void 0)y1(Boolean(B.supports_thinking));if(B.provider_usage!==void 0)a(B.provider_usage??null)},[]),y5=S(()=>{let B=j;nj(B).then((W)=>{if(T1.current!==B)return;if(W)K6(W)}).catch(()=>{})},[K6,j]),n1=S(()=>{let B=j,W=(A)=>Array.isArray(A)?A.filter((R)=>R&&typeof R.chat_jid==="string"&&typeof R.agent_name==="string"&&R.agent_name.trim()):[];Promise.all([sj().catch(()=>({chats:[]})),Q6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([A,R])=>{if(T1.current!==B)return;let P=W(A?.chats),m=W(R?.chats);if(m.length===0){H0(P);return}let $0=new Map(P.map((G0)=>[G0.chat_jid,G0])),Y0=m.map((G0)=>{let r=$0.get(G0.chat_jid);return r?{...G0,...r,is_active:r.is_active??G0.is_active}:G0});Y0.sort((G0,r)=>{if(G0.chat_jid===B&&r.chat_jid!==B)return-1;if(r.chat_jid===B&&G0.chat_jid!==B)return 1;let A0=Boolean(G0.archived_at),f0=Boolean(r.archived_at);if(A0!==f0)return A0?1:-1;if(Boolean(G0.is_active)!==Boolean(r.is_active))return G0.is_active?-1:1;return String(G0.chat_jid).localeCompare(String(r.chat_jid))}),H0(Y0)}).catch(()=>{if(T1.current!==B)return;H0([])})},[j]),__=S(()=>{Q6(c1).then((B)=>{let W=Array.isArray(B?.chats)?B.chats.filter((A)=>A&&typeof A.chat_jid==="string"&&typeof A.agent_name==="string"):[];R0(W)}).catch(()=>{})},[c1]),P3=S((B)=>{let W=B?.row_id;if(W==null)return;r1.current.add(W),O0((A)=>A.filter((R)=>R?.row_id!==W)),EX(W,F3(j)).then(()=>{$1()}).catch((A)=>{console.warn("[queue] Failed to steer queued item:",A),l("Failed to steer message","The queued message could not be sent as steering.","warning"),r1.current.delete(W),$1()})},[j,$1,O0,l]),S3=S((B)=>{let W=B?.row_id;if(W==null)return;let A=Y1.current.filter((R)=>R?.row_id!==W).length;r1.current.add(W),j4(A),O0((R)=>R.filter((P)=>P?.row_id!==W)),MX(W,F3(j)).then(()=>{$1()}).catch((R)=>{console.warn("[queue] Failed to remove queued item:",R),l("Failed to remove message","The queued message could not be removed.","warning"),r1.current.delete(W),$1()})},[j4,j,$1,O0,l]),R5=S((B)=>{if(!B||typeof B!=="object")return;if(n1(),__(),e1(),y_(),B?.queued==="followup"||B?.queued==="steer"){$1();return}let W=B?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))$1()},[n1,y_,__,e1,$1]),LZ=S(async(B,W)=>{let A=typeof B?.key==="string"?B.key:"",R=typeof W?.key==="string"?W.key:"",P=`${A}:${R}`;if(!A||!R)return;D0((m)=>{if(m.has(P))return m;let $0=new Set(m);return $0.add(P),$0});try{if(W?.action_type==="autoresearch.stop"){await HX(j,{generateReport:!0}),y_();return}if(W?.action_type==="autoresearch.dismiss"){await JX(j),y_();return}if(W?.action_type==="autoresearch.copy_tmux"){let m=typeof B?.tmux_command==="string"?B.tmux_command.trim():"";if(!m)throw Error("No tmux command available.");await navigator.clipboard.writeText(m),l("Copied","tmux command copied to clipboard.","success");return}throw Error(`Unsupported panel action: ${W?.action_type||R}`)}catch(m){l("Panel action failed",m?.message||"Could not complete that action.","warning")}finally{D0((m)=>{if(!m.has(P))return m;let $0=new Set(m);return $0.delete(P),$0})}},[j,y_,l]),N6=S(()=>{if(z_.current)z_.current.abort(),z_.current=null;F0(null)},[]),W8=S(async(B)=>{let W=String(B||"").trim();if(!W)return l("BTW needs a question","Usage: /btw <question>","warning"),!0;if(z_.current)z_.current.abort();let A=new AbortController;z_.current=A,F0({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let R=await IX(W,{signal:A.signal,chatJid:d2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(P,m)=>{if(P==="side_prompt_start")F0(($0)=>$0?{...$0,status:"running"}:$0)},onThinkingDelta:(P)=>{F0((m)=>m?{...m,thinking:`${m.thinking||""}${P||""}`}:m)},onTextDelta:(P)=>{F0((m)=>m?{...m,answer:`${m.answer||""}${P||""}`}:m)}});if(z_.current!==A)return!0;F0((P)=>P?{...P,answer:R?.result||P.answer||"",thinking:R?.thinking||P.thinking||"",model:R?.model||null,status:"success",error:null}:P)}catch(R){if(A.signal.aborted)return!0;F0((P)=>P?{...P,status:"error",error:R?.payload?.error||R?.message||"BTW request failed."}:P)}finally{if(z_.current===A)z_.current=null}return!0},[j,l]),FZ=S(async({content:B})=>{let W=l2(B);if(!W)return!1;if(W.type==="help")return l("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return N6(),l("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await W8(W.question),!0;return!1},[N6,W8,l]),zZ=S(()=>{if(t?.question)W8(t.question)},[t,W8]),HZ=S(async()=>{let B=n2(t);if(!B)return;try{let W=await n4("default",B,null,[],x5?"queue":null,j);R5(W),l(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){l("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[t,R5,x5,l]),x3=S(async(B=null)=>{let[W,A,R,P,m,$0,Y0]=await Promise.allSettled([O3(j),D3(j),rj(j),nj(j),sj(),Q6(c1),o4(20,null,j)]),G0=W.status==="fulfilled"?W.value:null,r=A.status==="fulfilled"?A.value:null,A0=R.status==="fulfilled"?R.value:null,f0=P.status==="fulfilled"?P.value:null,W1=m.status==="fulfilled"?m.value:null,Q1=$0.status==="fulfilled"?$0.value:null,w_=Y0.status==="fulfilled"?Y0.value:null,f_=Array.isArray(w_?.posts)?w_.posts:Array.isArray(S5)?S5:[],v3=f_.length?f_[f_.length-1]:null,kZ=f_.filter((U6)=>U6?.data?.is_bot_message).length,CZ=f_.filter((U6)=>!U6?.data?.is_bot_message).length,b3=Number(A0?.count??Y1.current.length??0)||0,g3=Array.isArray(W1?.chats)?W1.chats.length:B0.length,TZ=Array.isArray(Q1?.chats)?Q1.chats.length:N0.length,m3=Number(r?.percent??S0?.percent??0)||0,PZ=Number(r?.tokens??S0?.tokens??0)||0,SZ=Number(r?.contextWindow??S0?.contextWindow??0)||0,xZ=f0?.current??_1??null,yZ=f0?.thinking_level??k1??null,RZ=f0?.supports_thinking??c0,wZ=G0?.status||(Q0?"active":"idle"),fZ=G0?.data?.type||G0?.type||null;return{generatedAt:new Date().toISOString(),request:B,chat:{currentChatJid:j,rootChatJid:c1,activeChats:g3,branches:TZ},agent:{status:wZ,phase:fZ,running:Boolean(Q0)},model:{current:xZ,thinkingLevel:yZ,supportsThinking:Boolean(RZ)},context:{tokens:PZ,contextWindow:SZ,percent:m3},queue:{count:b3},timeline:{loadedPosts:f_.length,botPosts:kZ,userPosts:CZ,latestPostId:v3?.id??null,latestTimestamp:v3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(m3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,b3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,g3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,f_.length*5))}]}},[B0,_1,k1,S0,N0,j,c1,Q0,S5,c0]),w5=S(()=>{y5(),n1(),__(),$1(),e1(),y_()},[y5,n1,__,$1,e1,y_]);u(()=>{w5();let B=setInterval(()=>{y5(),n1(),__(),$1()},60000);return()=>clearInterval(B)},[w5,y5,n1,__,$1]),u(()=>{w0(new Map),D0(new Set)},[j]),u(()=>{let B=!1,W=()=>{if(B)return;requestAnimationFrame(()=>{if(B)return;i4()})};if(O)return i_(O),()=>{B=!0};if(I)return lj(I,50,0,j,k,c1).then((A)=>{if(B)return;o1(A.results),N8(!1)}).catch((A)=>{if(B)return;console.error("Failed to search:",A),o1([]),N8(!1)}),()=>{B=!0};return i_().then(()=>{W()}).catch((A)=>{if(B)return;console.error("Failed to load timeline:",A)}),()=>{B=!0}},[j,O,I,k,c1,i_,i4,N8,o1]),u(()=>{let B=A4.current||j;D4.current.set(B,X5())},[j,X5]),u(()=>{let B=A4.current||j;if(B===j)return;D4.current.set(B,X5()),A4.current=j,r1.current.clear(),X8(D4.current.get(j)||null),$1(),R_(),e1()},[j,R_,e1,$1,X8,X5]);let JZ=S(()=>{let{currentHashtag:B,searchQuery:W,searchOpen:A}=u1.current||{};if(!B&&!W&&!A)t1();w5()},[w5,t1]),f5=S((B,W="streaming")=>{let A=e2({...B,...B&&B.status?{}:{status:W}});if(!A)return;let R=s1(A);if(R&&X1.current.has(R))return;m0((P)=>{let m=s1(P),$0=Boolean(R&&m&&R===m),Y0={...$0&&P?.artifact?P.artifact:{},...A.artifact||{}};return{...$0&&P?P:{},...A,artifact:Y0,source:"live",originChatJid:A.originChatJid||j,openedAt:$0&&P?.openedAt?P.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),V6=S((B,W)=>{let A=W?.turn_id,R=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,m=R?R===j:B==="connected"||B==="workspace_update";if(m)C3(W),T3(W);if(B==="ui_theme"){v2(W);return}if(B==="generated_widget_open"){if(!m)return;if(A&&!z0.current)h1(A);f5(W,"loading");return}if(B==="generated_widget_delta"){if(!m)return;if(A&&!z0.current)h1(A);f5(W,"streaming");return}if(B==="generated_widget_final"){if(!m)return;if(A&&!z0.current)h1(A);f5(W,"final");return}if(B==="generated_widget_error"){if(!m)return;f5(W,"error");return}if(B==="generated_widget_close"){if(!m)return;let r=s1(W);m0((A0)=>{if(!A0||A0?.source!=="live")return A0;let f0=s1(A0);if(r&&f0&&r!==f0)return A0;return null});return}if(B?.startsWith("agent_")){if(!(B==="agent_draft_delta"||B==="agent_thought_delta"||B==="agent_draft"||B==="agent_thought"))G5()}if(B==="connected"){if(I3(W?.app_asset_version))return;c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,H1();let r=j;O3(r).then((Q1)=>{if(T1.current!==r)return;if(!Q1||Q1.status!=="active"||!Q1.data)return;let w_=Q1.data,f_=w_.turn_id||w_.turnId;if(f_)h1(f_);if(W_({clearSilence:!0}),k4(w_),Q1.thought&&Q1.thought.text)t0.current=Q1.thought.text,V0({text:Q1.thought.text,totalLines:Q1.thought.totalLines||0});if(Q1.draft&&Q1.draft.text)h0.current=Q1.draft.text,d({text:Q1.draft.text,totalLines:Q1.draft.totalLines||0})}).catch((Q1)=>{console.warn("Failed to fetch agent status:",Q1)});let{currentHashtag:A0,searchQuery:f0,searchOpen:W1}=u1.current||{};if(!A0&&!f0&&!W1)t1();w5();return}if(B==="agent_status"){if(!m){if(W?.type==="done"||W?.type==="error")n1(),__();return}if(W.type==="done"||W.type==="error"){if(A&&z0.current&&A!==z0.current)return;if(W.type==="done"){H_(A||z0.current);let{currentHashtag:r,searchQuery:A0,searchOpen:f0}=u1.current||{};if(!r&&!A0&&!f0)t1();if(W.context_usage)b0(W.context_usage)}if(e1(),d_.current=!1,H1(),r1.current.clear(),n1(),$1(),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),W.type==="error")c({type:"error",title:W.title||"Agent error"}),setTimeout(()=>c(null),8000);else c(null)}else{if(A)h1(A);if(W_({running:!0,clearSilence:!0}),W.type==="thinking")h0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0});P_.current=W,c((r)=>{if(r&&r.type===W.type&&r.title===W.title)return r;return W})}return}if(B==="agent_steer_queued"){if(!m)return;if(A&&z0.current&&A!==z0.current)return;let r=A||z0.current;if(!r)return;l0.current=r,y0(r);return}if(B==="agent_followup_queued"){if(!m)return;let r=W?.row_id,A0=W?.content;if(r!=null&&typeof A0==="string"&&A0.trim())O0((f0)=>{if(f0.some((W1)=>W1?.row_id===r))return f0;return[...f0,{row_id:r,content:A0,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});$1();return}if(B==="agent_followup_consumed"){if(!m)return;let r=W?.row_id;if(r!=null){let Q1=Y1.current.filter((w_)=>w_.row_id!==r).length;j4(Q1),O0((w_)=>w_.filter((f_)=>f_.row_id!==r))}$1();let{currentHashtag:A0,searchQuery:f0,searchOpen:W1}=u1.current||{};if(!A0&&!f0&&!W1)t1();return}if(B==="agent_followup_removed"){if(!m)return;let r=W?.row_id;if(r!=null){let A0=Y1.current.filter((f0)=>f0.row_id!==r).length;r1.current.add(r),j4(A0),O0((f0)=>f0.filter((W1)=>W1.row_id!==r))}$1();return}if(B==="agent_draft_delta"){if(!m)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)h1(A);if(W_({running:!0,clearSilence:!0}),W?.reset)h0.current="";if(W?.delta)h0.current+=W.delta;let r=Date.now();if(!h4.current||r-h4.current>=100){h4.current=r;let A0=h0.current,f0=L3(A0);if(q1.current)d((W1)=>({text:W1?.text||"",totalLines:f0,fullText:A0}));else d({text:A0,totalLines:f0})}return}if(B==="agent_draft"){if(!m)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)h1(A);W_({running:!0,clearSilence:!0});let r=W.text||"",A0=W.mode||(W.kind==="plan"?"replace":"append"),f0=Number.isFinite(W.total_lines)?W.total_lines:r?r.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(A0==="replace")_0(r);else _0((W1)=>(W1||"")+r);else if(!q1.current)h0.current=r,d({text:r,totalLines:f0});return}if(B==="agent_thought_delta"){if(!m)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)h1(A);if(W_({running:!0,clearSilence:!0}),W?.reset)t0.current="";if(typeof W?.delta==="string")t0.current+=W.delta;let r=Date.now();if(Z1.current&&(!z1.current||r-z1.current>=100)){z1.current=r;let A0=t0.current;V0((f0)=>({text:f0?.text||"",totalLines:L3(A0),fullText:A0}))}return}if(B==="agent_thought"){if(!m)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)h1(A);W_({running:!0,clearSilence:!0});let r=W.text||"",A0=Number.isFinite(W.total_lines)?W.total_lines:r?r.replace(/\r\n/g,`
`).split(`
`).length:0;if(!Z1.current)t0.current=r,V0({text:r,totalLines:A0});return}if(B==="model_changed"){if(!m)return;if(W?.model!==void 0)p1(W.model);if(W?.thinking_level!==void 0)G1(W.thinking_level??null);if(W?.supports_thinking!==void 0)y1(Boolean(W.supports_thinking));let r=j;D3(r).then((A0)=>{if(T1.current!==r)return;if(A0)b0(A0)}).catch(()=>{});return}if(B==="extension_ui_widget"&&W?.options?.surface==="status-panel"){if((typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():j)!==j)return;let A0=typeof W?.key==="string"?W.key:"",f0=Array.isArray(W?.content)?W.content.find((W1)=>W1?.type==="status_panel"&&W1?.panel):null;if(!A0)return;if(w0((W1)=>{let Q1=new Map(W1);if(W?.options?.remove||!f0?.panel)Q1.delete(A0);else Q1.set(A0,f0.panel);return Q1}),W?.options?.remove||f0?.panel?.state!=="running")D0((W1)=>{if(W1.size===0)return W1;let Q1=new Set(Array.from(W1).filter((w_)=>!String(w_).startsWith(`${A0}:`)));return Q1.size===W1.size?W1:Q1});z3(B,W);return}if(B==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));Z5(W?.updates);return}if(Aj(B)){if(!m)return;if(z3(B,W),B==="extension_ui_notify"&&typeof W?.message==="string")l(W.message,null,W?.type||"info");if(B==="extension_ui_error"&&typeof W?.error==="string")l("Extension UI error",W.error,"error",5000);return}let{currentHashtag:$0,searchQuery:Y0,searchOpen:G0}=u1.current;if(B==="agent_response"){if(!m)return;V8(),S_.current={post:W,turnId:z0.current}}if(!$0&&!Y0&&!G0&&m&&(B==="new_post"||B==="new_reply"||B==="agent_response"))o1((r)=>{if(!r)return[W];if(r.some((A0)=>A0.id===W.id))return r;return[...r,W]}),K8.current?.();if(B==="interaction_updated"){if(!m)return;if($0||Y0||G0)return;o1((r)=>{if(!r)return r;if(!r.some((A0)=>A0.id===W.id))return r;return r.map((A0)=>A0.id===W.id?W:A0)})}if(B==="interaction_deleted"){if(!m)return;if($0||Y0||G0)return;let r=W?.ids||[];if(r.length){if(P5(()=>{o1((A0)=>A0?A0.filter((f0)=>!r.includes(f0.id)):A0)}),E3.current)q6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[f5,H1,G5,j,q6,W_,H_,P5,n1,__,t1,V8,h1,k4,C3,T3,y5,$1,O0,e1,I3]);u(()=>{if(typeof window>"u")return;let B=window.__PICLAW_TEST_API||{};return B.emit=V6,B.reset=()=>{V8(),H1(),c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null)},B.finalize=()=>M3(),window.__PICLAW_TEST_API=B,()=>{if(window.__PICLAW_TEST_API===B)window.__PICLAW_TEST_API=void 0}},[H1,M3,V6,V8]),Gj({handleSseEvent:V6,handleConnectionStatusChange:XZ,loadPosts:i_,onWake:JZ,chatJid:j}),u(()=>{if(!K5||K5.length===0)return;let B=location.hash;if(!B||!B.startsWith("#msg-"))return;let W=B.slice(5);v1(W),history.replaceState(null,"",location.pathname+location.search)},[K5,v1]);let W6=x!==null;u(()=>{if(X!=="connected")return;let W=setInterval(()=>{let{currentHashtag:A,searchQuery:R,searchOpen:P}=u1.current||{},m=!A&&!R&&!P;if(W6){if(m)t1();$1(),R_(),e1(),y_()}else{if(m)t1();R_(),e1(),y_()}},W6?15000:60000);return()=>clearInterval(W)},[X,W6,R_,y_,e1,$1,t1]),u(()=>{return Mj(()=>{R_(),e1(),$1(),y_()})},[R_,y_,e1,$1]);let OZ=S(()=>{m_((B)=>!B)},[]),y3=S((B)=>{if(typeof window>"u")return;let W=String(B||"").trim();if(!W||W===j)return;let A=z4(window.location.href,W,{chatOnly:Z});$?.(A)},[Z,j,$]),B6=S(()=>{wj({hasWindow:typeof window<"u",currentBranchRecord:N1,renameBranchInFlight:C.current,renameBranchLockUntil:n.current,getFormLock:J3,setRenameBranchNameDraft:Z0,setIsRenameBranchFormOpen:U0})},[N1]),v5=S(()=>{fj({setIsRenameBranchFormOpen:U0,setRenameBranchNameDraft:Z0})},[]),R3=S(async(B)=>{await vj({hasWindow:typeof window<"u",currentBranchRecord:N1,nextName:B,openRenameForm:B6,renameBranchInFlightRef:C,renameBranchLockUntilRef:n,getFormLock:J3,setIsRenamingBranch:b,renameChatBranch:OX,refreshActiveChatAgents:n1,refreshCurrentChatBranches:__,showIntentToast:l,closeRenameForm:v5})},[v5,N1,n1,__,B6,b,l]),w3=S(async(B=null)=>{await bj({hasWindow:typeof window<"u",targetChatJid:B,currentChatJid:j,currentBranchRecord:N1,currentChatBranches:N0,activeChatAgents:B0,pruneChatBranch:DX,refreshActiveChatAgents:n1,refreshCurrentChatBranches:__,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Z,navigate:$})},[B0,Z,N1,N0,j,$,n1,__,l]),DZ=S(async(B)=>{await gj({targetChatJid:B,restoreChatBranch:AX,currentChatBranches:N0,refreshActiveChatAgents:n1,refreshCurrentChatBranches:__,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Z,navigate:$})},[Z,N0,$,n1,__,l]);u(()=>{if(!G||typeof window>"u")return;let B=!1;return mj({branchLoaderSourceChatJid:K,forkChatBranch:m5,setBranchLoaderState:j_,navigate:$,baseHref:window.location.href,isCancelled:()=>B}),()=>{B=!0}},[G,K,$]);let AZ=S((B)=>{if(!B||typeof B!=="object")return;let W=s1(B);if(W)X1.current.delete(W);m0({...B,openedAt:new Date().toISOString()})},[]),b5=S(()=>{m0((B)=>{let W=s1(B);if(B?.source==="live"&&W)X1.current.add(W);return null})},[]),EZ=S((B,W)=>{let A=typeof B?.kind==="string"?B.kind:"",R=s1(W);if(!A||!R)return;if(A==="widget.close"){b5();return}if(A==="widget.submit"){let P=Z7(B?.payload),m=Y7(B?.payload),$0=new Date().toISOString();if(m0((Y0)=>{let G0=s1(Y0);if(!Y0||G0!==R)return Y0;return{...Y0,runtimeState:{...Y0.runtimeState||{},lastEventKind:A,lastEventPayload:B?.payload||null,lastSubmitAt:$0,lastHostUpdate:{type:"submit_pending",submittedAt:$0,preview:P||null}}}}),!P){if(l("Widget submission received","The widget submitted data without a message payload yet.","info",3500),m)b5();return}(async()=>{try{let Y0=await n4("default",P,null,[],x5?"queue":null,j);if(R5(Y0),m0((G0)=>{let r=s1(G0);if(!G0||r!==R)return G0;return{...G0,runtimeState:{...G0.runtimeState||{},lastHostUpdate:{type:Y0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:$0,preview:P,queued:Y0?.queued||null}}}}),l(Y0?.queued==="followup"?"Widget submission queued":"Widget submission sent",Y0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),m)b5()}catch(Y0){m0((G0)=>{let r=s1(G0);if(!G0||r!==R)return G0;return{...G0,runtimeState:{...G0.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:$0,preview:P,error:Y0?.message||"Could not send the widget message."}}}}),l("Widget submission failed",Y0?.message||"Could not send the widget message.","warning",5000)}})();return}if(A==="widget.ready"||A==="widget.request_refresh"){let P=new Date().toISOString(),m=Boolean(B?.payload?.buildDashboard||B?.payload?.dashboardKind==="internal-state"),$0=Number(W?.runtimeState?.refreshCount||0)+1;if(m0((Y0)=>{let G0=s1(Y0);if(!Y0||G0!==R)return Y0;return{...Y0,runtimeState:{...Y0.runtimeState||{},lastEventKind:A,lastEventPayload:B?.payload||null,...A==="widget.ready"?{readyAt:P,lastHostUpdate:{type:"ready_ack",at:P}}:{},...A==="widget.request_refresh"?{lastRefreshRequestAt:P,refreshCount:$0,lastHostUpdate:{type:m?"refresh_building":"refresh_ack",at:P,count:$0,echo:B?.payload||null}}:{}}}}),A==="widget.request_refresh")if(m)(async()=>{try{let Y0=await x3(B?.payload||null);m0((G0)=>{let r=s1(G0);if(!G0||r!==R)return G0;return{...G0,runtimeState:{...G0.runtimeState||{},dashboard:Y0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:$0,echo:B?.payload||null}}}}),l("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(Y0){m0((G0)=>{let r=s1(G0);if(!G0||r!==R)return G0;return{...G0,runtimeState:{...G0.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:$0,error:Y0?.message||"Could not build dashboard."}}}}),l("Dashboard build failed",Y0?.message||"Could not build dashboard.","warning",5000)}})();else l("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[x3,j,b5,R5,x5,l]);u(()=>{X1.current.clear(),m0(null)},[j]);let MZ=S(async()=>{await uj({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:m5,refreshActiveChatAgents:n1,refreshCurrentChatBranches:__,showIntentToast:l,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Z,j,$,n1,__,l]),B8=S(async(B,W)=>{await hj({hasWindow:typeof window<"u",isWebAppMode:V,path:B,label:W,showIntentToast:l,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(A)=>{let P=(typeof u0==="string"?u0.trim():"")===A?w1.current:A===t4?E_.current:null;if(typeof P?.preparePopoutTransfer==="function")return await P.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(A)=>{let R=a0.get(A);if(R&&!R.dirty){r_(A);return}if(A===t4&&l1)S1(!1)}})},[j,l1,r_,V,l,u0]);u(()=>Ij({openTab:(B,W)=>Y_(B,W?{label:W}:void 0),popOutPane:(B,W)=>{B8(B,W)}}),[B8,Y_]);let IZ=S(async()=>{await pj({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:c1,forkChatBranch:m5,getActiveChatAgents:x6,getChatBranches:Q6,setActiveChatAgents:H0,setCurrentChatBranches:R0,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,c1,V,l]);u(()=>{if(!B1)return;if(typeof window>"u")return;let B=$4.current;if(!B)return;if(!K4.current){let W=F5("editorWidth",null),A=p4.current||280;K4.current=Number.isFinite(W)?W:A}if(B.style.setProperty("--editor-width",`${K4.current}px`),!M4.current){let W=F5("dockHeight",null);M4.current=Number.isFinite(W)?W:200}B.style.setProperty("--dock-height",`${M4.current}px`)},[B1]),u(()=>{if(!Q_||Z)return;return kj(m1)},[m1,Q_,Z]),u(()=>{if(Z)return;return Cj({toggleZenMode:m4,exitZenMode:T_,zenMode:O1,isZenModeActive:()=>O1})},[m4,T_,O1,Z]);let f3=Boolean(n0&&n0===(x?.turn_id||E0));if(G)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${U_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${U_.message}</p>
                    </div>
                </div>
            </div>
        `;if(Y)return L`
            <div class=${`app-shell pane-popout${B1?" editor-open":""}`} ref=${$4}>
                <div class="editor-pane-container pane-popout-container">
                    ${B1&&!C_&&L`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${q_?L`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${e_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${Z_.length>1&&L`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${Z_.map((B)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${B.id===u0?" active":""}`}
                                                                onClick=${(W)=>{v4(B.id),W.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${B.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${u0&&P1.has(u0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(B)=>{h_(u0),B.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:L`
                                    <div class="pane-popout-controls-label" aria-label=${e_}>${e_}</div>
                                `}
                        </div>
                    `}
                    ${B1?L`<div class="editor-pane-host" ref=${U1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Q||"No pane path provided."}</p>
                        </div>`}
                    ${B1&&u0&&P1.has(u0)&&L`
                        <${V3}
                            getContent=${()=>w1.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>h_(u0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${V1?"":" workspace-collapsed"}${B1?" editor-open":""}${Z?" chat-only":""}${O1?" zen-mode":""}`} ref=${$4}>
            ${K0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(B)=>{if(B.target===B.currentTarget)v5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(B)=>{B.preventDefault(),R3(L0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${f1}
                            value=${L0}
                            onInput=${(B)=>{let W=B.currentTarget?.value??"";Z0(String(W))}}
                            onKeyDown=${(B)=>{if(B.key==="Escape")B.preventDefault(),v5()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${P0.kind||"info"}`}>
                            ${P0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${v||!P0.canSubmit}>
                                ${v?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${v5}
                                disabled=${v}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Z&&L`
                <${jj}
                    onFileSelect=${T5}
                    visible=${V1}
                    active=${V1||B1}
                    onOpenEditor=${Y_}
                    onOpenTerminalTab=${J1}
                    onOpenVncTab=${M_}
                    onToggleTerminal=${Q_?m1:void 0}
                    terminalVisible=${Boolean(Q_&&l1)}
                />
                <button
                    class=${`workspace-toggle-tab${V1?" open":" closed"}`}
                    onClick=${OZ}
                    title=${V1?"Hide workspace":"Show workspace"}
                    aria-label=${V1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${jZ} onTouchStart=${ZZ}></div>
            `}
            ${X4&&L`
                <div class="editor-pane-container">
                    ${O1&&L`<div class="zen-hover-zone"></div>`}
                    ${B1&&L`
                        <${Qj}
                            tabs=${Z_}
                            activeId=${u0}
                            onActivate=${v4}
                            onClose=${r_}
                            onCloseOthers=${a_}
                            onCloseAll=${$5}
                            onTogglePin=${t_}
                            onTogglePreview=${h_}
                            onEditSource=${k5}
                            previewTabs=${P1}
                            paneOverrides=${A_}
                            onToggleDock=${Q_?m1:void 0}
                            dockVisible=${Q_&&l1}
                            onToggleZen=${m4}
                            zenMode=${O1}
                            onPopOutTab=${V?void 0:B8}
                        />
                    `}
                    ${B1&&L`<div class="editor-pane-host" ref=${U1}></div>`}
                    ${B1&&u0&&P1.has(u0)&&L`
                        <${V3}
                            getContent=${()=>w1.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>h_(u0)}
                        />
                    `}
                    ${Q_&&l1&&L`<div class="dock-splitter" onMouseDown=${qZ} onTouchStart=${GZ}></div>`}
                    ${Q_&&L`<div class=${`dock-panel${l1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&L`
                                    <button class="dock-panel-action" onClick=${()=>B8(t4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${m1} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
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
                <div class="editor-splitter" onMouseDown=${YZ} onTouchStart=${QZ}></div>
            `}
            <div class="container">
                ${I&&Fj()&&L`<div class="search-results-spacer"></div>`}
                ${Z&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${N1?.agent_name?`@${N1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${N1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${N0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(B)=>y3(B.currentTarget.value)}
                                    >
                                        ${N0.map((B)=>L`
                                            <option key=${B.chat_jid} value=${B.chat_jid}>
                                                ${R8(B,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${N1?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${B6}
                                    title=${v?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${v}
                                >
                                    ${v?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${N1?.chat_jid&&N1.chat_jid!==(N1.root_chat_jid||N1.chat_jid)&&L`
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
                ${(O||I)&&L`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${NZ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${I} · ${q4}`}</span>
                    </div>
                `}
                <${C7}
                    posts=${K5}
                    hasMore=${X6?_Z:!1}
                    onLoadMore=${X6?$Z:void 0}
                    timelineRef=${V_}
                    onHashtagClick=${KZ}
                    onMessageRef=${x1}
                    onScrollToMessage=${v1}
                    onFileRef=${T0}
                    onPostClick=${void 0}
                    onDeletePost=${UZ}
                    onOpenWidget=${AZ}
                    emptyMessage=${O?`No posts with #${O}`:I?`No results for "${I}"`:void 0}
                    agents=${K_}
                    user=${p_}
                    reverse=${X6}
                    removingPostIds=${R1}
                    searchQuery=${I}
                />
                <${G$}
                    status=${B4(x)?null:x}
                    draft=${q0}
                    plan=${j0}
                    thought=${X0}
                    pendingRequest=${W0}
                    intent=${y}
                    turnId=${E0}
                    steerQueued=${f3}
                    onPanelToggle=${d4}
                    showExtensionPanels=${!1}
                />
                <${s2}
                    session=${t}
                    onClose=${N6}
                    onRetry=${zZ}
                    onInject=${HZ}
                />
                <${G7}
                    widget=${I0}
                    onClose=${b5}
                    onWidgetEvent=${EZ}
                />
                <${G$}
                    extensionPanels=${Array.from(k0.values())}
                    pendingPanelActions=${i0}
                    onExtensionPanelAction=${LZ}
                    turnId=${E0}
                    steerQueued=${f3}
                    onPanelToggle=${d4}
                    showCorePanels=${!1}
                />
                <${t6}
                    items=${J?[]:g0}
                    onInjectQueuedFollowup=${P3}
                    onRemoveQueuedFollowup=${S3}
                    onOpenFilePill=${T0}
                />
                <${E2}
                    onPost=${()=>{let{searchQuery:B,searchOpen:W}=u1.current||{};if(!B&&!W)i_(),i4()}}
                    onFocus=${i4}
                    searchMode=${J}
                    searchScope=${k}
                    onSearch=${VZ}
                    onSearchScopeChange=${i}
                    onEnterSearch=${WZ}
                    onExitSearch=${BZ}
                    fileRefs=${p}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${g}
                    onSetFileRefs=${o}
                    messageRefs=${e}
                    onRemoveMessageRef=${V4}
                    onClearMessageRefs=${l4}
                    onSetMessageRefs=${Q5}
                    onSwitchChat=${y3}
                    onRenameSession=${R3}
                    isRenameSessionInProgress=${v}
                    onCreateSession=${MZ}
                    onDeleteSession=${w3}
                    onRestoreSession=${DZ}
                    activeEditorPath=${Z?null:u0}
                    onAttachEditorFile=${Z?void 0:D1}
                    onOpenFilePill=${T0}
                    followupQueueCount=${L_}
                    followupQueueItems=${g0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${P3}
                    onRemoveQueuedFollowup=${S3}
                    onSubmitIntercept=${FZ}
                    onMessageResponse=${R5}
                    onSubmitError=${q5}
                    onPopOutChat=${V?void 0:IZ}
                    isAgentActive=${x5}
                    activeChatAgents=${B0}
                    currentChatJid=${j}
                    connectionStatus=${X}
                    activeModel=${_1}
                    modelUsage=${C1}
                    thinkingLevel=${k1}
                    supportsThinking=${c0}
                    contextUsage=${S0}
                    notificationsEnabled=${_5}
                    notificationPermission=${w4}
                    onToggleNotifications=${g1}
                    onModelChange=${p1}
                    onModelStateChange=${K6}
                    statusNotice=${B4(x)?x:null}
                />
                <${W7}
                    request=${W0}
                    onRespond=${()=>{J0(null),p0.current=null}}
                />
            </div>
        </div>
    `}function CX(){let[_,$]=h(()=>typeof window>"u"?"http://localhost/":window.location.href);u(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=S((Y,Q={})=>{if(typeof window>"u")return;let{replace:q=!1}=Q||{},G=new URL(String(Y||""),window.location.href).toString();if(q)window.history.replaceState(null,"",G);else window.history.pushState(null,"",G);$(window.location.href)},[]),Z=v0(()=>new URL(_).searchParams,[_]);return L`<${kX} locationParams=${Z} navigate=${j} />`}P4(L`<${CX} />`,document.getElementById("app"));

//# debugId=59DBF370A9FE855E64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
