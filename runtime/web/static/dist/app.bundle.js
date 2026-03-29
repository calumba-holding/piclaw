var uZ=Object.defineProperty;var mZ=(_)=>_;function hZ(_,$){this[_]=mZ.bind(null,$)}var pZ=(_,$)=>{for(var j in $)uZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:hZ.bind($,j)})};var J8,F1,e3,cZ,C4,h3,_2,$2,j2,A6,z6,H6,Z2,F8={},z8=[],lZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O8=Array.isArray;function B4(_,$){for(var j in $)_[j]=$[j];return _}function E6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function D8(_,$,j){var Z,Q,Y,q={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?Q=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?J8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return U8(_,q,Z,Q,null)}function U8(_,$,j,Z,Q){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Q==null?++e3:Q,__i:-1,__u:0};return Q==null&&F1.vnode!=null&&F1.vnode(Y),Y}function A8(_){return _.children}function V5(_,$){this.props=_,this.context=$}function B5(_,$){if($==null)return _.__?B5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?B5(_):null}function dZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Q=[],Y=B4({},$);Y.__v=$.__v+1,F1.vnode&&F1.vnode(Y),M6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?B5($):j,!!(32&$.__u),Q),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,G2(Z,Y,Q),$.__e=$.__=null,Y.__e!=j&&Q2(Y)}}function Q2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),Q2(_)}function J6(_){(!_.__d&&(_.__d=!0)&&C4.push(_)&&!H8.__r++||h3!=F1.debounceRendering)&&((h3=F1.debounceRendering)||_2)(H8)}function H8(){try{for(var _,$=1;C4.length;)C4.length>$&&C4.sort($2),_=C4.shift(),$=C4.length,dZ(_)}finally{C4.length=H8.__r=0}}function Y2(_,$,j,Z,Q,Y,q,G,K,X,N){var V,W,O,M,I,E,J,D=Z&&Z.__k||z8,k=$.length;for(K=iZ(j,$,D,K,k),V=0;V<k;V++)(O=j.__k[V])!=null&&(W=O.__i!=-1&&D[O.__i]||F8,O.__i=V,E=M6(_,O,W,Q,Y,q,G,K,X,N),M=O.__e,O.ref&&W.ref!=O.ref&&(W.ref&&I6(W.ref,null,O),N.push(O.ref,O.__c||M,O)),I==null&&M!=null&&(I=M),(J=!!(4&O.__u))||W.__k===O.__k?K=q2(O,K,_,J):typeof O.type=="function"&&E!==void 0?K=E:M&&(K=M.nextSibling),O.__u&=-7);return j.__e=I,K}function iZ(_,$,j,Z,Q){var Y,q,G,K,X,N=j.length,V=N,W=0;for(_.__k=Array(Q),Y=0;Y<Q;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=U8(null,q,null,null,null):O8(q)?q=_.__k[Y]=U8(A8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=U8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,K=Y+W,q.__=_,q.__b=_.__b+1,G=null,(X=q.__i=nZ(q,j,K,V))!=-1&&(V--,(G=j[X])&&(G.__u|=2)),G==null||G.__v==null?(X==-1&&(Q>N?W--:Q<N&&W++),typeof q.type!="function"&&(q.__u|=4)):X!=K&&(X==K-1?W--:X==K+1?W++:(X>K?W--:W++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<N;Y++)(G=j[Y])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=B5(G)),K2(G,G));return Z}function q2(_,$,j,Z){var Q,Y;if(typeof _.type=="function"){for(Q=_.__k,Y=0;Q&&Y<Q.length;Y++)Q[Y]&&(Q[Y].__=_,$=q2(Q[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=B5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function nZ(_,$,j,Z){var Q,Y,q,G=_.key,K=_.type,X=$[j],N=X!=null&&(2&X.__u)==0;if(X===null&&G==null||N&&G==X.key&&K==X.type)return j;if(Z>(N?1:0)){for(Q=j-1,Y=j+1;Q>=0||Y<$.length;)if((X=$[q=Q>=0?Q--:Y++])!=null&&(2&X.__u)==0&&G==X.key&&K==X.type)return q}return-1}function p3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||lZ.test($)?j:j+"px"}function W8(_,$,j,Z,Q){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||p3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||p3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(j2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=A6,_.addEventListener($,Y?H6:z6,Y)):_.removeEventListener($,Y?H6:z6,Y);else{if(Q=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function c3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=A6++;else if($.t<j.u)return;return j(F1.event?F1.event($):$)}}}function M6(_,$,j,Z,Q,Y,q,G,K,X){var N,V,W,O,M,I,E,J,D,k,i,p,s,e,f,R=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),Y=[G=$.__e=j.__e]),(N=F1.__b)&&N($);_:if(typeof R=="function")try{if(J=$.props,D=R.prototype&&R.prototype.render,k=(N=R.contextType)&&Z[N.__c],i=N?k?k.props.value:N.__:Z,j.__c?E=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new R(J,i):($.__c=V=new V5(J,i),V.constructor=R,V.render=sZ),k&&k.sub(V),V.state||(V.state={}),V.__n=Z,W=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&R.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=B4({},V.__s)),B4(V.__s,R.getDerivedStateFromProps(J,V.__s))),O=V.props,M=V.state,V.__v=$,W)D&&R.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&R.getDerivedStateFromProps==null&&J!==O&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,i),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,i)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),z8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,i),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(O,M,I)})}if(V.context=i,V.props=J,V.__P=_,V.__e=!1,p=F1.__r,s=0,D)V.state=V.__s,V.__d=!1,p&&p($),N=V.render(V.props,V.state,V.context),z8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,p&&p($),N=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++s<25);V.state=V.__s,V.getChildContext!=null&&(Z=B4(B4({},Z),V.getChildContext())),D&&!W&&V.getSnapshotBeforeUpdate!=null&&(I=V.getSnapshotBeforeUpdate(O,M)),e=N!=null&&N.type===A8&&N.key==null?X2(N.props.children):N,G=Y2(_,O8(e)?e:[e],$,j,Z,Q,Y,q,G,K,X),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),E&&(V.__E=V.__=null)}catch(H){if($.__v=null,K||Y!=null)if(H.then){for($.__u|=K?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;Y[Y.indexOf(G)]=null,$.__e=G}else{for(f=Y.length;f--;)E6(Y[f]);O6($)}else $.__e=j.__e,$.__k=j.__k,H.then||O6($);F1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=oZ(j.__e,$,j,Z,Q,Y,q,K,X);return(N=F1.diffed)&&N($),128&$.__u?void 0:G}function O6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(O6))}function G2(_,$,j){for(var Z=0;Z<j.length;Z++)I6(j[Z],j[++Z],j[++Z]);F1.__c&&F1.__c($,_),_.some(function(Q){try{_=Q.__h,Q.__h=[],_.some(function(Y){Y.call(Q)})}catch(Y){F1.__e(Y,Q.__v)}})}function X2(_){return typeof _!="object"||_==null||_.__b>0?_:O8(_)?_.map(X2):B4({},_)}function oZ(_,$,j,Z,Q,Y,q,G,K){var X,N,V,W,O,M,I,E=j.props||F8,J=$.props,D=$.type;if(D=="svg"?Q="http://www.w3.org/2000/svg":D=="math"?Q="http://www.w3.org/1998/Math/MathML":Q||(Q="http://www.w3.org/1999/xhtml"),Y!=null){for(X=0;X<Y.length;X++)if((O=Y[X])&&"setAttribute"in O==!!D&&(D?O.localName==D:O.nodeType==3)){_=O,Y[X]=null;break}}if(_==null){if(D==null)return document.createTextNode(J);_=document.createElementNS(Q,D,J.is&&J),G&&(F1.__m&&F1.__m($,Y),G=!1),Y=null}if(D==null)E===J||G&&_.data==J||(_.data=J);else{if(Y=Y&&J8.call(_.childNodes),!G&&Y!=null)for(E={},X=0;X<_.attributes.length;X++)E[(O=_.attributes[X]).name]=O.value;for(X in E)O=E[X],X=="dangerouslySetInnerHTML"?V=O:X=="children"||(X in J)||X=="value"&&("defaultValue"in J)||X=="checked"&&("defaultChecked"in J)||W8(_,X,null,O,Q);for(X in J)O=J[X],X=="children"?W=O:X=="dangerouslySetInnerHTML"?N=O:X=="value"?M=O:X=="checked"?I=O:G&&typeof O!="function"||E[X]===O||W8(_,X,O,E[X],Q);if(N)G||V&&(N.__html==V.__html||N.__html==_.innerHTML)||(_.innerHTML=N.__html),$.__k=[];else if(V&&(_.innerHTML=""),Y2($.type=="template"?_.content:_,O8(W)?W:[W],$,j,Z,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Q,Y,q,Y?Y[0]:j.__k&&B5(j,0),G,K),Y!=null)for(X=Y.length;X--;)E6(Y[X]);G||(X="value",D=="progress"&&M==null?_.removeAttribute("value"):M!=null&&(M!==_[X]||D=="progress"&&!M||D=="option"&&M!=E[X])&&W8(_,X,M,E[X],Q),X="checked",I!=null&&I!=_[X]&&W8(_,X,I,E[X],Q))}return _}function I6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Q){F1.__e(Q,j)}}function K2(_,$,j){var Z,Q;if(F1.unmount&&F1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||I6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){F1.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Q=0;Q<Z.length;Q++)Z[Q]&&K2(Z[Q],$,j||typeof _.type!="function");j||E6(_.__e),_.__c=_.__=_.__e=void 0}function sZ(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Z,Q,Y,q;$==document&&($=document.documentElement),F1.__&&F1.__(_,$),Q=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],M6($,_=(!Z&&j||$).__k=D8(A8,null,[_]),Q||F8,F8,$.namespaceURI,!Z&&j?[j]:Q?null:$.firstChild?J8.call($.childNodes):null,Y,!Z&&j?j:Q?Q.__e:$.firstChild,Z,q),G2(Y,_,q)}function N2(_){function $(j){var Z,Q;return this.getChildContext||(Z=new Set,(Q={})[$.__c]=this,this.getChildContext=function(){return Q},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Z.forEach(function(q){q.__e=!0,J6(q)})},this.sub=function(Y){Z.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Z&&Z.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+Z2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}J8=z8.slice,F1={__e:function(_,$,j,Z){for(var Q,Y,q;$=$.__;)if((Q=$.__c)&&!Q.__)try{if((Y=Q.constructor)&&Y.getDerivedStateFromError!=null&&(Q.setState(Y.getDerivedStateFromError(_)),q=Q.__d),Q.componentDidCatch!=null&&(Q.componentDidCatch(_,Z||{}),q=Q.__d),q)return Q.__E=Q}catch(G){_=G}throw _}},e3=0,cZ=function(_){return _!=null&&_.constructor===void 0},V5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B4({},this.state),typeof _=="function"&&(_=_(B4({},j),this.props)),_&&B4(j,_),_!=null&&this.__v&&($&&this._sb.push($),J6(this))},V5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),J6(this))},V5.prototype.render=A8,C4=[],_2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$2=function(_,$){return _.__v.__b-$.__v.__b},H8.__r=0,j2=/(PointerCapture)$|Capture$/i,A6=0,z6=c3(!1),H6=c3(!0),Z2=0;var S4,L1,F6,l3,W5=0,V2=[],A1=F1,d3=A1.__b,i3=A1.__r,n3=A1.diffed,o3=A1.__c,s3=A1.unmount,r3=A1.__;function U5(_,$){A1.__h&&A1.__h(L1,_,W5||$),W5=0;var j=L1.__H||(L1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function h(_){return W5=1,k6(F2,_)}function k6(_,$,j){var Z=U5(S4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):F2(void 0,$),function(G){var K=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(K,G);K!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=L1,!L1.__f)){var Q=function(G,K,X){if(!Z.__c.__H)return!0;var N=Z.__c.__H.__.filter(function(W){return W.__c});if(N.every(function(W){return!W.__N}))return!Y||Y.call(this,G,K,X);var V=Z.__c.props!==G;return N.some(function(W){if(W.__N){var O=W.__[0];W.__=W.__N,W.__N=void 0,O!==W.__[0]&&(V=!0)}}),Y&&Y.call(this,G,K,X)||V};L1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=L1;L1.componentWillUpdate=function(G,K,X){if(this.__e){var N=Y;Y=void 0,Q(G,K,X),Y=N}q&&q.call(this,G,K,X)},L1.shouldComponentUpdate=Q}return Z.__N||Z.__}function m(_,$){var j=U5(S4++,3);!A1.__s&&T6(j.__H,$)&&(j.__=_,j.u=$,L1.__H.__h.push(j))}function u5(_,$){var j=U5(S4++,4);!A1.__s&&T6(j.__H,$)&&(j.__=_,j.u=$,L1.__h.push(j))}function P(_){return W5=5,v0(function(){return{current:_}},[])}function B2(_,$,j){W5=6,u5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function v0(_,$){var j=U5(S4++,7);return T6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function S(_,$){return W5=8,v0(function(){return _},$)}function W2(_){var $=L1.context[_.__c],j=U5(S4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(L1)),$.props.value):_.__}function U2(_,$){A1.useDebugValue&&A1.useDebugValue($?$(_):_)}function L2(_){var $=U5(S4++,10),j=h();return $.__=_,L1.componentDidCatch||(L1.componentDidCatch=function(Z,Q){$.__&&$.__(Z,Q),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function rZ(){for(var _;_=V2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(L8),$.__h.some(D6),$.__h=[]}catch(j){$.__h=[],A1.__e(j,_.__v)}}}A1.__b=function(_){L1=null,d3&&d3(_)},A1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),r3&&r3(_,$)},A1.__r=function(_){i3&&i3(_),S4=0;var $=(L1=_.__c).__H;$&&(F6===L1?($.__h=[],L1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(L8),$.__h.some(D6),$.__h=[],S4=0)),F6=L1},A1.diffed=function(_){n3&&n3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(V2.push($)!==1&&l3===A1.requestAnimationFrame||((l3=A1.requestAnimationFrame)||aZ)(rZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),F6=L1=null},A1.__c=function(_,$){$.some(function(j){try{j.__h.some(L8),j.__h=j.__h.filter(function(Z){return!Z.__||D6(Z)})}catch(Z){$.some(function(Q){Q.__h&&(Q.__h=[])}),$=[],A1.__e(Z,j.__v)}}),o3&&o3(_,$)},A1.unmount=function(_){s3&&s3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{L8(Z)}catch(Q){$=Q}}),j.__H=void 0,$&&A1.__e($,j.__v))};var a3=typeof requestAnimationFrame=="function";function aZ(_){var $,j=function(){clearTimeout(Z),a3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);a3&&($=requestAnimationFrame(j))}function L8(_){var $=L1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L1=$}function D6(_){var $=L1;_.__c=_.__(),L1=$}function T6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function F2(_,$){return typeof $=="function"?$(_):$}var z2=function(_,$,j,Z){var Q;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],G=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Z[0]=G:q===4?Z[1]=Object.assign(Z[1]||{},G):q===5?(Z[1]=Z[1]||{})[$[++Y]]=G:q===6?Z[1][$[++Y]]+=G+"":q?(Q=_.apply(G,z2(_,G,j,["",null])),Z.push(Q),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=Q)):Z.push(G)}return Z},t3=new Map;function tZ(_){var $=t3.get(this);return $||($=new Map,t3.set(this,$)),($=z2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Q,Y=1,q="",G="",K=[0],X=function(W){Y===1&&(W||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,W,q):Y===3&&(W||q)?(K.push(3,W,q),Y=2):Y===2&&q==="..."&&W?K.push(4,W,0):Y===2&&q&&!W?K.push(5,0,!0,q):Y>=5&&((q||!W&&Y===5)&&(K.push(Y,0,q,Q),Y=6),W&&(K.push(Y,W,0,Q),Y=6)),q=""},N=0;N<j.length;N++){N&&(Y===1&&X(),X(N));for(var V=0;V<j[N].length;V++)Z=j[N][V],Y===1?Z==="<"?(X(),K=[K],Y=3):q+=Z:Y===4?q==="--"&&Z===">"?(Y=1,q=""):q=Z+q[0]:G?Z===G?G="":q+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(X(),Y=1):Y&&(Z==="="?(Y=5,Q=q,q=""):Z==="/"&&(Y<5||j[N][V+1]===">")?(X(),Y===3&&(K=K[0]),Y=K,(K=K[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),Y=2):q+=Z),Y===3&&q==="!--"&&(Y=4,K=K[0])}return X(),K}(_)),$),arguments,[])).length>1?$:$[0]}var L=tZ.bind(D8);var __={};pZ(__,{uploadWorkspaceFile:()=>M8,uploadMedia:()=>f6,updateWorkspaceFile:()=>zQ,submitAdaptiveCardAction:()=>v6,streamSidePrompt:()=>UQ,stopAutoresearch:()=>KQ,steerAgentQueueItem:()=>WQ,setWorkspaceVisibility:()=>l5,setAgentThoughtVisibility:()=>u6,sendPeerAgentMessage:()=>qQ,sendAgentMessage:()=>o4,searchPosts:()=>C6,restoreChatBranch:()=>YQ,respondToAgentRequest:()=>E8,renameWorkspaceFile:()=>l6,renameChatBranch:()=>ZQ,removeAgentQueueItem:()=>BQ,pruneChatBranch:()=>QQ,moveWorkspaceEntry:()=>d6,getWorkspaceTree:()=>p5,getWorkspaceRawUrl:()=>I8,getWorkspaceFile:()=>c5,getWorkspaceDownloadUrl:()=>k8,getWorkspaceBranch:()=>FQ,getTimeline:()=>n4,getThumbnailUrl:()=>m6,getThread:()=>S6,getPostsByHashtag:()=>P6,getMediaUrl:()=>v_,getMediaText:()=>h6,getMediaInfo:()=>L5,getMediaBlob:()=>LQ,getChatBranches:()=>jQ,getAutoresearchStatus:()=>XQ,getAgents:()=>y6,getAgentThought:()=>g6,getAgentStatus:()=>w6,getAgentQueueState:()=>VQ,getAgentModels:()=>h5,getAgentContext:()=>GQ,getActiveChatAgents:()=>R6,forkChatBranch:()=>m5,dismissAutoresearch:()=>NQ,deleteWorkspaceFile:()=>i6,deletePost:()=>x6,createWorkspaceFile:()=>c6,createReply:()=>$Q,createPost:()=>_Q,attachWorkspaceFile:()=>p6,addToWhitelist:()=>b6,SSEClient:()=>T8});async function e0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function H2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let Q=Z.join(`
`);if(!Q)return null;try{return{event:j,data:JSON.parse(Q)}}catch{return{event:j,data:Q}}}async function eZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Q="";while(!0){let{value:q,done:G}=await j.read();if(G)break;Q+=Z.decode(q,{stream:!0});let K=Q.split(`

`);Q=K.pop()||"";for(let X of K){let N=H2(X);if(N)$(N.event,N.data)}}Q+=Z.decode();let Y=H2(Q);if(Y)$(Y.event,Y.data)}async function n4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return e0(Z)}async function P6(_,$=50,j=0,Z=null){let Q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Q}`)}async function C6(_,$=50,j=0,Z=null,Q="current",Y=null){let q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=Q?`&scope=${encodeURIComponent(Q)}`:"",K=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return e0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${G}${K}`)}async function S6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return e0(`/thread/${_}${j}`)}async function _Q(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return e0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function $Q(_,$,j=[],Z=null){let Q=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/post/reply${Q}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function x6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Q=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return e0(Q,{method:"DELETE"})}async function o4(_,$,j=null,Z=[],Q=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",G={content:$,thread_id:j,media_ids:Z};if(Q==="auto"||Q==="queue"||Q==="steer")G.mode=Q;return e0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(G)})}async function R6(){return e0("/agent/active-chats")}async function jQ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return e0(`/agent/branches${Z}`)}async function m5(_,$={}){return e0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function ZQ(_,$={}){return e0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function QQ(_){return e0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function YQ(_,$={}){return e0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function qQ(_,$,j,Z="auto",Q={}){let Y={source_chat_jid:_,content:j,mode:Z,...Q?.sourceAgentName?{source_agent_name:Q.sourceAgentName}:{},...Q?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return e0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function y6(){return e0("/agent/roster")}async function w6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/status${$}`)}async function GQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/context${$}`)}async function XQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/autoresearch/status${$}`)}async function KQ(_=null,$={}){return e0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function NQ(_=null){return e0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function VQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/queue-state${$}`)}async function BQ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function WQ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function h5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/models${$}`)}async function f6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function E8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Q=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Q.error||`HTTP ${Z.status}`)}return Z.json()}async function v6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function UQ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,Q=null;if(await eZ(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Z=q;else if(Y==="side_prompt_error")Q=q}),Q){let Y=Error(Q?.error||"Side prompt failed");throw Y.payload=Q,Y}return Z}async function b6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function g6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return e0(j)}async function u6(_,$,j){return e0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function v_(_){return`/media/${_}`}function m6(_){return`/media/${_}/thumbnail`}async function L5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function h6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function LQ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function p5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return e0(Z)}async function FQ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return e0($)}async function c5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Q=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return e0(Q)}async function zQ(_,$){return e0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function p6(_){return e0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function M8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Q=new URLSearchParams;if($)Q.set("path",$);if(j.overwrite)Q.set("overwrite","1");let Y=Q.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+q,{method:"POST",body:Z});if(!G.ok){let K=await G.json().catch(()=>({error:"Upload failed"})),X=Error(K.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=K.code,X}return G.json()}async function c6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Q=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(Q.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=Q.code,Y}return Z.json()}async function l6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Q=Error(Z.error||`HTTP ${j.status}`);throw Q.status=j.status,Q.code=Z.code,Q}return j.json()}async function d6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Q=Error(Z.error||`HTTP ${j.status}`);throw Q.status=j.status,Q.code=Z.code,Q}return j.json()}async function i6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return e0($,{method:"DELETE"})}async function l5(_,$=!1){return e0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function I8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function k8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class T8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Q=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Q),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function P8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function HQ(_,$){let j=P8(_),Z=P8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function n6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function o6(_,$,j=Date.now(),Z=700){let Q=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Q.value||!Number.isFinite(Q.updatedAt)||j-Q.updatedAt>Z?Y:`${Q.value}${Y}`,updatedAt:j}}function JQ(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Q=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Q+q)%j);return Y}function OQ(_,$,j=0,Z=(Q)=>Q){let Q=P8($);if(!Q)return-1;let Y=Array.isArray(_)?_:[],q=JQ(Y.length,j),G=Y.map((K)=>P8(Z(K)));for(let K of q)if(G[K].startsWith(Q))return K;for(let K of q)if(G[K].includes(Q))return K;return-1}function s6(_,$,j=-1,Z=(Q)=>Q){let Q=Array.isArray(_)?_:[];if(j>=0&&j<Q.length){let Y=Z(Q[j]);if(HQ(Y,$))return j}return OQ(Q,$,0,Z)}function J_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function K1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function F5(_,$=!1){let j=J_(_);if(j===null)return $;return j==="true"}function z5(_,$=null){let j=J_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function C8(_){return String(_||"").trim().toLowerCase()}function r6(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return C8($[1]||"")}function DQ(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Q=C8(Z?.agent_name);if(!Q||$.has(Q))continue;$.add(Q),j.push(Z)}return j}function J2(_,$,j={}){let Z=r6($);if(Z==null)return[];let Q=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return DQ(_).filter((Y)=>{if(Q&&Y?.chat_jid===Q)return!1;return C8(Y?.agent_name).startsWith(Z)})}function a6(_){let $=C8(_);return $?`@${$} `:""}function O2(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function S8(_){let $=t6(_);return $?`@${$}`:""}function t6(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function x8(_,$=""){let j=String(_||""),Z=t6(j),Q=t6($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Z}`;if(Z===Q)return{normalized:Z,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Z!==j.trim())return{normalized:Z,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function D2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?S8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function AQ(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Q=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Q===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function R8(_,$={}){let j=S8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Q=AQ(_,$);return Q.length>0?`${j} — ${Z} • ${Q.join(" • ")}`:`${j} — ${Z}`}function A2(_,$,j){let Z=S8(_),Q=S8($),Y=String(j||"").trim();if(Z&&Q&&Z!==Q)return`Restored archived ${Z} as ${Q} because ${Z} is already in use.`;if(Q)return`Restored ${Q}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Y||"branch"}.`}function EQ(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function W4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function y8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return W4(_)?"Compacting context":"Working..."}function MQ(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Q=Math.floor($/3600);if(Q>0)return`${Q}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function w8(_,$=Date.now()){let j=EQ(_);if(j===null)return null;return MQ(Math.max(0,$-j))}function n_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Q,removeTitle:Y="Remove",icon:q="file"}){let G=`${_}-file-pill`,K=`${_}-file-name`,X=`${_}-file-remove`,N=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${G} title=${j||$} onClick=${Q}>
      ${N}
      <span class=${K}>${$}</span>
      ${Z&&L`
        <button
          class=${X}
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
  `}var IQ=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function kQ({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Q=_.contextWindow,Y="Compact context",G=`${Z!=null?`Context: ${E2(Z)} / ${E2(Q)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,X=2*Math.PI*9,N=j/100*X,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${G}
            aria-label="Compact context"
            onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),$?.()}}
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
    `}function E2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function TQ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X))Q.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(Q.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Q}}function PQ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X)){let N=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)Q.push(N[1])}else if(!X.trim())break;else break}if(Q.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Q}}function CQ(_){let $=TQ(_||""),j=PQ($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function e6({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Q)=>{let Y=typeof Q?.content==="string"?Q.content:"",q=CQ(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((G)=>L`
                                        <${n_}
                                            key=${"queue-msg-"+G}
                                            prefix="compose"
                                            label=${"msg:"+G}
                                            title=${"Message reference: "+G}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((G)=>{let K=G.split("/").pop()||G;return L`
                                            <${n_}
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
                                onClick=${()=>$?.(Q)}
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
                                onClick=${()=>j?.(Q)}
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
    `}function M2({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Q,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:G,fileRefs:K=[],onRemoveFileRef:X,onClearFileRefs:N,messageRefs:V=[],onRemoveMessageRef:W,onClearMessageRefs:O,activeModel:M=null,modelUsage:I=null,thinkingLevel:E=null,supportsThinking:J=!1,contextUsage:D=null,onContextCompact:k,notificationsEnabled:i=!1,notificationPermission:p="default",onToggleNotifications:s,onModelChange:e,onModelStateChange:f,activeEditorPath:R=null,onAttachEditorFile:H,onOpenFilePill:x,followupQueueItems:c=[],onInjectQueuedFollowup:G0,onRemoveQueuedFollowup:d,onSubmitIntercept:j0,onMessageResponse:_0,onPopOutChat:K0,isAgentActive:V0=!1,activeChatAgents:B0=[],currentChatJid:J0="web:default",connectionStatus:E0="connected",onSetFileRefs:M0,onSetMessageRefs:o0,onSubmitError:R0,onSwitchChat:T0,onRenameSession:s0,isRenameSessionInProgress:r0=!1,onCreateSession:h0,onDeleteSession:t0,onRestoreSession:p0,showQueueStack:j1=!0,statusNotice:z0=null}){let[l0,Z1]=h(""),[q1,X_]=h(""),[E1,_1]=h([]),[h1,k1]=h(!1),[G1,c0]=h([]),[R1,T1]=h(0),[a,W0]=h(!1),[H0,N0]=h([]),[y0,S0]=h(0),[b0,k0]=h(!1),[w0,i0]=h(!1),[D0,u0]=h(!1),[O0,Y0]=h(!1),[w,t]=h([]),[F0,I0]=h(0),[g0,X1]=h(0),[M1,N1]=h(!1),[p1,q4]=h(0),[U_,$_]=h(null),[L_,K_]=h(()=>Date.now()),Q1=P(null),s1=P(null),G4=P(null),g_=P(null),_5=P(null),v4=P(null),g1=P(null),F_=P(null),y1=P({value:"",updatedAt:0}),I1=P(0),V1=P(!1),u_=200,m_=(F)=>{let g=new Set,n=[];for(let l of F||[]){if(typeof l!=="string")continue;let P0=l.trim();if(!P0||g.has(P0))continue;g.add(P0),n.push(P0)}return n},W1=()=>{let F=J_("piclaw_compose_history");if(!F)return[];try{let g=JSON.parse(F);if(!Array.isArray(g))return[];return m_(g)}catch{return[]}},j_=(F)=>{K1("piclaw_compose_history",JSON.stringify(F))},m0=P(W1()),C1=P(-1),A_=P(""),Z_=l0.trim()||E1.length>0||K.length>0||V.length>0,b4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),r_=typeof window<"u"&&typeof Notification<"u",g4=typeof window<"u"?Boolean(window.isSecureContext):!1,$5=r_&&g4&&p!=="denied",t_=p==="granted"&&i,h_=W4(z0),T5=y8(z0),P5=typeof z0?.detail==="string"&&z0.detail.trim()?z0.detail.trim():"",U1=h_?w8(z0,L_):null,w1=t_?"Disable notifications":"Enable notifications",j5=E1.length>0||K.length>0||V.length>0,E_=E0==="disconnected"?"Reconnecting":String(E0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),Q_=E0==="disconnected"?"Reconnecting":`Connection: ${E_}`,c1=(Array.isArray(B0)?B0:[]).filter((F)=>!F?.archived_at),S1=(()=>{for(let F of Array.isArray(B0)?B0:[]){let g=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(g&&g===J0)return F}return null})(),u1=Boolean(S1&&S1.chat_jid===(S1.root_chat_jid||S1.chat_jid)),J1=v0(()=>{let F=new Set,g=[];for(let n of Array.isArray(B0)?B0:[]){let l=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!l||l===J0||F.has(l))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;F.add(l),g.push(n)}return g},[B0,J0]),M_=J1.length>0,I_=M_&&typeof T0==="function",k_=M_&&typeof p0==="function",e_=Boolean(r0||V1.current),Y_=!j&&typeof s0==="function"&&!e_,r1=!j&&typeof h0==="function",T_=!j&&typeof t0==="function"&&!u1,X4=!j&&(I_||k_||Y_||r1||T_),O1=M||"",_4=J&&E?` (${E})`:"",u4=_4.trim()?`${E}`:"",m4=typeof I?.hint_short==="string"?I.hint_short.trim():"",P_=[u4||null,m4||null].filter(Boolean).join(" • "),h4=[O1?`Current model: ${O1}${_4}`:null,I?.plan?`Plan: ${I.plan}`:null,m4||null,I?.primary?.reset_description||null,I?.secondary?.reset_description||null].filter(Boolean),Z5=w0?"Switching model…":h4.join(" • ")||`Current model: ${O1}${_4} (tap to open model picker)`,p_=(F)=>{if(!F||typeof F!=="object")return;let g=F.model??F.current;if(typeof f==="function")f({model:g??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(g&&typeof e==="function")e(g)},c_=(F)=>{let g=F||Q1.current;if(!g)return;g.style.height="auto",g.style.height=`${g.scrollHeight}px`,g.style.overflowY="hidden"},O4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){W0(!1),c0([]);return}let g=F.toLowerCase().split(" ")[0];if(g.length<1){W0(!1),c0([]);return}let n=IQ.filter((l)=>l.name.startsWith(g)||l.name.replace(/-/g,"").startsWith(g.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===g))k0(!1),N0([]),c0(n),T1(0),W0(!0);else W0(!1),c0([])},l_=(F)=>{let g=l0,n=g.indexOf(" "),l=n>=0?g.slice(n):"",P0=F.name+l;Z1(P0),W0(!1),c0([]),requestAnimationFrame(()=>{let D1=Q1.current;if(!D1)return;let x1=P0.length;D1.selectionStart=x1,D1.selectionEnd=x1,D1.focus()})},p4=(F)=>{if(r6(F)==null){k0(!1),N0([]);return}let g=J2(c1,F,{currentChatJid:J0});if(g.length>0&&!(g.length===1&&a6(g[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))W0(!1),c0([]),N0(g),S0(0),k0(!0);else k0(!1),N0([])},d_=(F)=>{let g=a6(F?.agent_name);if(!g)return;Z1(g),k0(!1),N0([]),requestAnimationFrame(()=>{let n=Q1.current;if(!n)return;let l=g.length;n.selectionStart=l,n.selectionEnd=l,n.focus()})},C_=()=>{if(j||!I_&&!k_&&!Y_&&!r1&&!T_)return!1;return y1.current={value:"",updatedAt:0},u0(!1),W0(!1),c0([]),k0(!1),N0([]),Y0(!0),!0},P1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!I_&&!k_&&!Y_&&!r1&&!T_)return;if(O0){y1.current={value:"",updatedAt:0},Y0(!1);return}C_()},D4=(F)=>{let g=typeof F==="string"?F.trim():"";if(Y0(!1),!g||g===J0){requestAnimationFrame(()=>Q1.current?.focus());return}T0?.(g)},A4=async(F)=>{let g=typeof F==="string"?F.trim():"";if(Y0(!1),!g||typeof p0!=="function"){requestAnimationFrame(()=>Q1.current?.focus());return}try{await p0(g)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>Q1.current?.focus())}},c4=(F)=>{let n=(Array.isArray(F)?F:[]).findIndex((l)=>!l?.disabled);return n>=0?n:0},z1=v0(()=>{let F=[];for(let g of J1){let n=Boolean(g?.archived_at),l=typeof g?.agent_name==="string"?g.agent_name.trim():"",P0=typeof g?.chat_jid==="string"?g.chat_jid.trim():"";if(!l||!P0)continue;F.push({type:"session",key:`session:${P0}`,label:`@${l} — ${P0}${g?.is_active?" active":""}${n?" archived":""}`,chat:g,disabled:n?!k_:!I_})}if(r1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(Y_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:e_});if(T_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[J1,k_,I_,r1,Y_,T_,e_]),E4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof s0!=="function"||r0||V1.current)return;V1.current=!0,Y0(!1);try{await s0()}catch(g){console.warn("Failed to rename session:",g)}finally{V1.current=!1}requestAnimationFrame(()=>Q1.current?.focus())},Q5=async()=>{if(typeof h0!=="function")return;Y0(!1);try{await h0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},m1=async()=>{if(typeof t0!=="function")return;Y0(!1);try{await t0(J0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},N_=(F)=>{if(j)X_(F);else Z1(F),O4(F),p4(F);requestAnimationFrame(()=>c_())},$4=(F)=>{let g=j?q1:l0,n=g&&!g.endsWith(`
`)?`
`:"",l=`${g}${n}${F}`.trimStart();N_(l)},l4=(F)=>{let g=F?.command?.model_label;if(g)return g;let n=F?.command?.message;if(typeof n==="string"){let l=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(l?.[1])return l[1].trim()}return null},K4=async(F)=>{if(j||w0)return;i0(!0);try{let g=await o4("default",F,null,[],null,J0),n=l4(g);p_({model:n??M??null,thinking_level:g?.command?.thinking_level,supports_thinking:g?.command?.supports_thinking});try{let l=await h5(J0);if(l)p_(l)}catch{}return _?.(),!0}catch(g){return console.error("Failed to switch model:",g),alert("Failed to switch model: "+g.message),!1}finally{i0(!1)}},M4=async()=>{await K4("/cycle-model")},N4=async(F)=>{if(!F||w0)return;if(await K4(`/model ${F}`))u0(!1)},S_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let g=F.chat;if(g?.archived_at)A4(g.chat_jid);else D4(g.chat_jid);return}if(F.type==="action"){if(F.action==="new"){Q5();return}if(F.action==="rename"){E4();return}if(F.action==="delete")m1()}},z_=(F)=>{F.preventDefault(),F.stopPropagation(),y1.current={value:"",updatedAt:0},Y0(!1),u0((g)=>!g)},I4=async()=>{if(j)return;k?.(),await x_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},d4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return V0?"queue":void 0},x_=async(F,g,n={})=>{let{includeMedia:l=!0,includeFileRefs:P0=!0,includeMessageRefs:D1=!0,clearAfterSubmit:x1=!0,recordHistory:v1=!0}=n||{},V4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:l0,i4=typeof V4==="string"?V4:"";if(!i4.trim()&&(l?E1.length===0:!0)&&(P0?K.length===0:!0)&&(D1?V.length===0:!0))return;W0(!1),c0([]),k0(!1),N0([]),Y0(!1),$_(null);let Y5=l?[...E1]:[],q5=P0?[...K]:[],V_=D1?[...V]:[],d1=i4.trim();if(v1&&d1){let k4=m0.current,H1=m_(k4.filter((j4)=>j4!==d1));if(H1.push(d1),H1.length>200)H1.splice(0,H1.length-200);m0.current=H1,j_(H1),C1.current=-1,A_.current=""}let G5=()=>{if(l)_1([...Y5]);if(P0)M0?.(q5);if(D1)o0?.(V_);Z1(d1),requestAnimationFrame(()=>c_())};if(x1)Z1(""),_1([]),N?.(),O?.();(async()=>{try{if(await j0?.({content:d1,submitMode:g,fileRefs:q5,messageRefs:V_,mediaFiles:Y5})){_?.();return}let H1=[];for(let H_ of Y5){let P4=await f6(H_);H1.push(P4.id)}let j4=q5.length?`Files:
${q5.map((H_)=>`- ${H_}`).join(`
`)}`:"",X5=V_.length?`Referenced messages:
${V_.map((H_)=>`- message:${H_}`).join(`
`)}`:"",X8=H1.length?`Attachments:
${H1.map((H_,P4)=>{let q6=Y5[P4]?.name||`attachment-${P4+1}`;return`- attachment:${H_} (${q6})`}).join(`
`)}`:"",B_=[d1,j4,X5,X8].filter(Boolean).join(`

`),T4=await o4("default",B_,null,H1,d4(g),J0);if(_0?.(T4),T4?.command){p_({model:T4.command.model_label??M??null,thinking_level:T4.command.thinking_level,supports_thinking:T4.command.supports_thinking});try{let H_=await h5(J0);if(H_)p_(H_)}catch{}}_?.()}catch(k4){if(x1)G5();let H1=k4?.message||"Failed to send message.";$_(H1),R0?.(H1),console.error("Failed to post:",k4)}})()},z=(F)=>{G0?.(F)},T=S((F)=>{if(j||!D0&&!O0||F?.isComposing)return!1;let g=()=>{F.preventDefault?.(),F.stopPropagation?.()},n=()=>{y1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(g(),n(),D0)u0(!1);if(O0)Y0(!1);return!0}if(D0){if(F.key==="ArrowDown"){if(g(),n(),w.length>0)I0((l)=>(l+1)%w.length);return!0}if(F.key==="ArrowUp"){if(g(),n(),w.length>0)I0((l)=>(l-1+w.length)%w.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&w.length>0)return g(),n(),N4(w[Math.max(0,Math.min(F0,w.length-1))]),!0;if(n6(F)&&w.length>0){g();let l=o6(y1.current,F.key);y1.current=l;let P0=s6(w,l.value,F0,(D1)=>D1);if(P0>=0)I0(P0);return!0}}if(O0){if(F.key==="ArrowDown"){if(g(),n(),z1.length>0)X1((l)=>(l+1)%z1.length);return!0}if(F.key==="ArrowUp"){if(g(),n(),z1.length>0)X1((l)=>(l-1+z1.length)%z1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&z1.length>0)return g(),n(),S_(z1[Math.max(0,Math.min(g0,z1.length-1))]),!0;if(n6(F)&&z1.length>0){g();let l=o6(y1.current,F.key);y1.current=l;let P0=s6(z1,l.value,g0,(D1)=>D1.label);if(P0>=0)X1(P0);return!0}}return!1},[j,D0,O0,w,F0,z1,g0,N4]),v=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),X_(""),G?.();return}if(T(F))return;let g=Q1.current?.value??(j?q1:l0);if(O2(F,g,{searchMode:j,showSessionSwitcherButton:X4})){F.preventDefault(),C_();return}if(b0&&H0.length>0){let n=Q1.current?.value??(j?q1:l0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))k0(!1),N0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),S0((l)=>(l+1)%H0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),S0((l)=>(l-1+H0.length)%H0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),d_(H0[y0]);return}if(F.key==="Escape"){F.preventDefault(),k0(!1),N0([]);return}}}if(a&&G1.length>0){let n=Q1.current?.value??(j?q1:l0);if(!String(n||"").startsWith("/"))W0(!1),c0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),T1((l)=>(l+1)%G1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),T1((l)=>(l-1+G1.length)%G1.length);return}if(F.key==="Tab"){F.preventDefault(),l_(G1[R1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!g.includes(" ")){F.preventDefault();let P0=G1[R1];W0(!1),c0([]),x_(P0.name);return}}if(F.key==="Escape"){F.preventDefault(),W0(!1),c0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let n=Q1.current;if(!n)return;let l=n.value||"",P0=n.selectionStart===0&&n.selectionEnd===0,D1=n.selectionStart===l.length&&n.selectionEnd===l.length;if(F.key==="ArrowUp"&&P0||F.key==="ArrowDown"&&D1){let x1=m0.current;if(!x1.length)return;F.preventDefault();let v1=C1.current;if(F.key==="ArrowUp"){if(v1===-1)A_.current=l,v1=x1.length-1;else if(v1>0)v1-=1;C1.current=v1,N_(x1[v1]||"")}else{if(v1===-1)return;if(v1<x1.length-1)v1+=1,C1.current=v1,N_(x1[v1]||"");else C1.current=-1,N_(A_.current||""),A_.current=""}requestAnimationFrame(()=>{let V4=Q1.current;if(!V4)return;let i4=V4.value.length;V4.selectionStart=i4,V4.selectionEnd=i4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(g.trim())Q?.(g.trim(),Z)}else x_(g,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(g.trim())Q?.(g.trim(),Z)}else x_(g)},b=(F)=>{let g=Array.from(F||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!g.length)return;_1((n)=>[...n,...g]),$_(null)},o=(F)=>{b(F.target.files),F.target.value=""},X0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),I1.current+=1,k1(!0)},U0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),I1.current=Math.max(0,I1.current-1),I1.current===0)k1(!1)},L0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";k1(!0)},Z0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),I1.current=0,k1(!1),b(F.dataTransfer?.files||[])},C0=(F)=>{if(j)return;let g=F.clipboardData?.items;if(!g||!g.length)return;let n=[];for(let l of g){if(l.kind!=="file")continue;let P0=l.getAsFile?.();if(P0)n.push(P0)}if(n.length>0)F.preventDefault(),b(n)},f1=(F)=>{_1((g)=>g.filter((n,l)=>l!==F))},q_=()=>{$_(null),_1([]),N?.(),O?.()},l1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:g,longitude:n,accuracy:l}=F.coords,P0=`${g.toFixed(5)}, ${n.toFixed(5)}`,D1=Number.isFinite(l)?` ±${Math.round(l)}m`:"",x1=`https://maps.google.com/?q=${g},${n}`,v1=`Location: ${P0}${D1} ${x1}`;$4(v1)},(F)=>{let g=F?.message||"Unable to retrieve location.";alert(`Location error: ${g}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!D0)return;y1.current={value:"",updatedAt:0},N1(!0),h5(J0).then((F)=>{let g=Array.isArray(F?.models)?F.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];g.sort((n,l)=>n.localeCompare(l,void 0,{sensitivity:"base"})),t(g),p_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),t([])}).finally(()=>{N1(!1)})},[D0,M]),m(()=>{if(j)u0(!1),Y0(!1),W0(!1),c0([]),k0(!1),N0([])},[j]),m(()=>{if(O0&&!X4)Y0(!1)},[O0,X4]),m(()=>{if(!D0)return;let F=w.findIndex((g)=>g===M);I0(F>=0?F:0)},[D0,w,M]),m(()=>{if(!O0)return;X1(c4(z1)),y1.current={value:"",updatedAt:0}},[O0,J0]),m(()=>{if(!D0)return;let F=(g)=>{let n=g_.current,l=_5.current,P0=g.target;if(n&&n.contains(P0))return;if(l&&l.contains(P0))return;u0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[D0]),m(()=>{if(!O0)return;let F=(g)=>{let n=v4.current,l=g1.current,P0=g.target;if(n&&n.contains(P0))return;if(l&&l.contains(P0))return;Y0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),m(()=>{if(j||!D0&&!O0)return;let F=(g)=>{T(g)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,D0,O0,T]),m(()=>{if(!D0)return;let F=g_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,F0,w]),m(()=>{if(!O0)return;let F=v4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,g0,z1.length]),m(()=>{let F=()=>{let D1=F_.current?.clientWidth||0;q4((x1)=>x1===D1?x1:D1)};F();let g=F_.current,n=0,l=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,F()})},P0=null;if(g&&typeof ResizeObserver<"u")P0=new ResizeObserver(()=>l()),P0.observe(g);if(typeof window<"u")window.addEventListener("resize",l);return()=>{if(n)cancelAnimationFrame(n);if(P0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",l)}},[j,M,S1?.agent_name,X4,D?.percent]);let C5=(F)=>{let g=F.target.value;if($_(null),O0)Y0(!1);c_(F.target),N_(g)};return m(()=>{requestAnimationFrame(()=>c_())},[l0,q1,j]),m(()=>{if(!h_)return;K_(Date.now());let F=setInterval(()=>K_(Date.now()),1000);return()=>clearInterval(F)},[h_,z0?.started_at,z0?.startedAt]),m(()=>{if(j)return;p4(l0)},[c1,J0,l0,j]),L`
        <div class="compose-box">
            ${j1&&!j&&L`
                <${e6}
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
                    title=${P5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${T5}</span>
                        ${U1&&L`<span class="compose-inline-status-elapsed">${U1}</span>`}
                    </div>
                    ${P5&&L`<div class="compose-inline-status-detail">${P5}</div>`}
                </div>
            `}
            ${U_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${U_}</div>
            `}
            <div
                class=${`compose-input-wrapper${h1?" drag-active":""}`}
                onDragEnter=${X0}
                onDragOver=${L0}
                onDragLeave=${U0}
                onDrop=${Z0}
            >
                <div class="compose-input-main">
                    ${j5&&L`
                        <div class="compose-file-refs">
                            ${V.map((F)=>{return L`
                                    <${n_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>W?.(F)}
                                    />
                                `})}
                            ${K.map((F)=>{let g=F.split("/").pop()||F;return L`
                                    <${n_}
                                        prefix="compose"
                                        label=${g}
                                        title=${F}
                                        onClick=${()=>x?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(F)}
                                    />
                                `})}
                            ${E1.map((F,g)=>{let n=F?.name||`attachment-${g+1}`;return L`
                                    <${n_}
                                        key=${n+g}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>f1(g)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${q_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof K0==="function"&&L`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>K0?.()}
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
                        value=${j?q1:l0}
                        onInput=${C5}
                        onKeyDown=${v}
                        onPaste=${C0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${b0&&H0.length>0&&L`
                        <div class="slash-autocomplete" ref=${G4}>
                            ${H0.map((F,g)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${g===y0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),d_(F)}}
                                    onMouseEnter=${()=>S0(g)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${a&&G1.length>0&&L`
                        <div class="slash-autocomplete" ref=${s1}>
                            ${G1.map((F,g)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${g===R1?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),l_(F)}}
                                    onMouseEnter=${()=>T1(g)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D0&&!j&&L`
                        <div class="compose-model-popup" ref=${g_} tabIndex="-1" onKeyDown=${T}>
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
                        <div class="compose-model-popup" ref=${v4} tabIndex="-1" onKeyDown=${T}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return D2(S1,J0)})()}
                                    </div>
                                `}
                                ${!M_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${M_&&J1.map((F,g)=>{let n=Boolean(F.archived_at),P0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!n&&typeof t0==="function",D1=R8(F,{currentChatJid:J0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${g0===g?" active":""}`}
                                                onClick=${()=>{if(n){A4(F.chat_jid);return}D4(F.chat_jid)}}
                                                disabled=${n?!k_:!I_}
                                                title=${n?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${D1}
                                            </button>
                                            ${P0&&L`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(x1)=>{x1.stopPropagation(),Y0(!1),t0(F.chat_jid)}}
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
                            ${(r1||Y_||T_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${r1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${z1.findIndex((F)=>F.key==="action:new")===g0?" active":""}`}
                                            onClick=${()=>{Q5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${Y_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${z1.findIndex((F)=>F.key==="action:rename")===g0?" active":""}`}
                                            onClick=${(F)=>{E4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${e_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${T_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${z1.findIndex((F)=>F.key==="action:delete")===g0?" active":""}`}
                                            onClick=${()=>{m1()}}
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
                                    ${!w0&&P_&&L`
                                        <span class="compose-model-usage-hint" title=${Z5}>
                                            ${P_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&L`
                            <${kQ} usage=${D} onCompact=${I4} />
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
                                onClick=${P1}
                            >@${S1.agent_name}</button>
                        `}
                        <button
                            ref=${g1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${O0?" active":""}`}
                            onClick=${P1}
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
                    ${b4&&!j&&L`
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
                        ${R&&H&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${R}`}
                                type="button"
                                disabled=${K.includes(R)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${o} />
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
                                    disabled=${!Z_}
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
    `}var j$="piclaw_theme",v8="piclaw_tint",T2="piclaw_chat_themes",i5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},P2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},I2={default:{label:"Default",mode:"auto",light:i5,dark:P2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},SQ=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],s4={theme:"default",tint:null},C2="light",_$=!1;function b8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function J5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Q=parseInt(Z,16);return{r:Q>>16&255,g:Q>>8&255,b:Q&255,hex:`#${Z.toLowerCase()}`}}function xQ(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Q=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Q)return null;let Y=parseInt(Q[1],10),q=parseInt(Q[2],10),G=parseInt(Q[3],10);if(![Y,q,G].every((X)=>Number.isFinite(X)))return null;let K=`#${[Y,q,G].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:G,hex:K}}function S2(_){return J5(_)||xQ(_)}function d5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Q=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Q} ${Y})`}function $$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function RQ(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Q=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Q+0.7152*Y+0.0722*q}function yQ(_){return RQ(_)>0.4?"#000000":"#ffffff"}function x2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z$(_){return I2[_]||I2.default}function wQ(_){return _.mode==="auto"?x2():_.mode}function R2(_,$){let j=Z$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||i5}function y2(_,$,j){let Z=S2($);if(!Z)return _;let Q=J5(_.bgPrimary),Y=J5(_.bgSecondary),q=J5(_.bgHover),G=J5(_.borderColor);if(!Q||!Y||!q||!G)return _;let X=J5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:d5(Q,Z,0.08),bgSecondary:d5(Y,Z,0.12),bgHover:d5(q,Z,0.16),borderColor:d5(G,Z,0.08),accent:Z.hex,accentHover:X?d5(Z,X,0.18):Z.hex}}function fQ(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Q=S2(Z),Y=Q?$$(Q,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Q?$$(Q,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Q?$$(Q,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Q?yQ(Q):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":q,"--accent-soft-strong":G,"--accent-contrast-text":K,"--danger-color":_.danger||i5.danger,"--success-color":_.success||i5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([N,V])=>{if(V)j.style.setProperty(N,V)})}function vQ(){if(typeof document>"u")return;let _=document.documentElement;SQ.forEach(($)=>_.style.removeProperty($))}function H5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function k2(_){let $=b8(s4?.theme||"default"),j=s4?.tint?String(s4.tint).trim():null,Z=R2($,_);if($==="default"&&j)Z=y2(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?P2.bgPrimary:i5.bgPrimary}function bQ(_,$){if(typeof document>"u")return;let j=H5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=H5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",k2("light"));let Q=H5("theme-color",{id:"theme-color-dark"});if(Q)Q.setAttribute("media","(prefers-color-scheme: dark)"),Q.setAttribute("content",k2("dark"));let Y=H5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=H5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let G=H5("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function gQ(){if(typeof window>"u")return;let _={...s4,mode:C2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function w2(){try{let _=J_(T2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function uQ(_,$,j){let Z=w2();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};K1(T2,JSON.stringify(Z))}function mQ(_){if(!_)return null;return w2()[_]||null}function f2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function Q$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=b8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Q=Z$(j),Y=wQ(Q),q=R2(j,Y);s4={theme:j,tint:Z},C2=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=Y;let K=q;if(j==="default"&&Z)K=y2(q,Z,Y);if(j==="default"&&!Z)vQ();else fQ(K,Y);if(bQ(K.bgPrimary,Y),gQ(),$.persist!==!1)if(K1(j$,j),Z)K1(v8,Z);else K1(v8,"")}function f8(){if(Z$(s4.theme).mode!=="auto")return;Q$(s4,{persist:!1})}function v2(){if(typeof window>"u")return()=>{};let _=f2(),$=mQ(_),j=$?b8($.theme||"default"):b8(J_(j$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Q=J_(v8);return Q?Q.trim():null})();if(Q$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!_$){let Q=window.matchMedia("(prefers-color-scheme: dark)");if(Q.addEventListener)Q.addEventListener("change",f8);else if(Q.addListener)Q.addListener(f8);return _$=!0,()=>{if(Q.removeEventListener)Q.removeEventListener("change",f8);else if(Q.removeListener)Q.removeListener(f8);_$=!1}}return()=>{}}function b2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||f2(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(uQ($,j||"default",Z),Q$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")K1(j$,j||"default"),K1(v8,Z||"")}function g2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return x2()}var g8=/#(\w+)/g,hQ=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),pQ=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),cQ=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),lQ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},dQ=new Set(["http:","https:","mailto:",""]);function Y$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function r4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!dQ.has(Z.protocol))return null;return Z.href}catch{return null}}function u2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Q=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Q.nextNode())Z.push(Y);for(let q of Z){let G=q.tagName.toLowerCase();if(!pQ.has(G)){let X=q.parentNode;if(!X)continue;while(q.firstChild)X.insertBefore(q.firstChild,q);X.removeChild(q);continue}let K=lQ[G]||new Set;for(let X of Array.from(q.attributes)){let N=X.name.toLowerCase(),V=X.value;if(N.startsWith("on")){q.removeAttribute(X.name);continue}if(N.startsWith("data-")||N.startsWith("aria-"))continue;if(K.has(N)||cQ.has(N)){if(N==="href"){let W=r4(V);if(!W)q.removeAttribute(X.name);else if(q.setAttribute(X.name,W),G==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(N==="src"){let W=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,O=r4(W,{allowDataImage:G==="img"});if(!O)q.removeAttribute(X.name);else q.setAttribute(X.name,O)}continue}q.removeAttribute(X.name)}}return j.body.innerHTML}function m2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function u8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Q=m2(j);if(Q===j)break;j=Q}return j}function iQ(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Q=[],Y=!1,q=[];for(let G of j){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let K=Z.length;Z.push(q.join(`
`)),Q.push(`@@MERMAID_BLOCK_${K}@@`),Y=!1,q=[];continue}if(Y)q.push(G);else Q.push(G)}if(Y)Q.push("```mermaid"),Q.push(...q);return{text:Q.join(`
`),blocks:Z}}function nQ(_){if(!_)return _;return u8(_,5)}function oQ(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function sQ(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function rQ(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Q=Number(Z),Y=$[Q]??"",q=nQ(Y);return`<div class="mermaid-container" data-mermaid="${oQ(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function h2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var aQ={span:new Set(["title","class","lang","dir"])};function tQ(_,$){let j=aQ[_];if(!j||!$)return"";let Z=[],Q=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Q.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let G=Y[2]??Y[3]??Y[4]??"";Z.push(` ${q}="${Y$(G)}"`)}return Z.join("")}function p2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Q=Z.startsWith("/"),Y=Q?Z.slice(1).trim():Z,G=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[K=""]=G.split(/\s+/,1),X=K.toLowerCase();if(!X||!hQ.has(X))return $;if(X==="br")return Q?"":"<br>";if(Q)return`</${X}>`;let N=G.slice(K.length).trim(),V=tQ(X,N);return`<${X}${V}>`})}function c2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function l2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Q;while(Q=j.nextNode()){if(!Q.nodeValue)continue;let Y=Z(Q.nodeValue);if(Y!==Q.nodeValue)Q.nodeValue=Y}return $.body.innerHTML}function eQ(_){if(!window.katex)return _;let $=(q)=>m2(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let G=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let N=G.length;return G.push(X),`@@CODE_BLOCK_${N}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let N=G.length;return G.push(X),`@@CODE_INLINE_${N}@@`}),{html:K,blocks:G}},Z=(q,G)=>{if(!G.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,X)=>{let N=Number(X);return G[N]??""})},Q=j(_),Y=Q.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,G,K)=>{try{let X=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${G}${X}`}catch(X){return`<span class="math-error" title="${Y$(X.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,G,K)=>{if(/\s$/.test(K))return q;try{let X=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${G}${X}`}catch(X){return`${G}<span class="math-error" title="${Y$(X.message)}">$${K}$</span>`}}),Z(Y,Q.blocks)}function _Y(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Q;while(Q=j.nextNode())Z.push(Q);for(let Y of Z){let q=Y.nodeValue;if(!q)continue;if(g8.lastIndex=0,!g8.test(q))continue;g8.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let K=q.split(g8);if(K.length<=1)continue;let X=$.createDocumentFragment();K.forEach((N,V)=>{if(V%2===1){let W=$.createElement("a");W.setAttribute("href","#"),W.className="hashtag",W.setAttribute("data-hashtag",N),W.textContent=`#${N}`,X.appendChild(W)}else X.appendChild($.createTextNode(N))}),Y.parentNode?.replaceChild(X,Y)}return $.body.innerHTML}function $Y(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Q=!1;for(let Y of j){if(!Q&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Q=!0,Z.push("$$");continue}if(Q&&Y.trim().match(/^```\s*$/)){Q=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function jY(_){let $=$Y(_||""),{text:j,blocks:Z}=iQ($),Q=u8(j,2),q=h2(Q).replace(/</g,"&lt;");return{safeHtml:p2(q),mermaidBlocks:Z}}function O_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Q}=jY(_),Y=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Y=c2(Y),Y=l2(Y),Y=eQ(Y),Y=_Y(Y),Y=rQ(Y,Q),Y=u2(Y,j),Y}function n5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=u8($,2),Q=h2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=p2(Q),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=c2(q),q=l2(q),q=u2(q),q}function ZY(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Q,Y)=>{let q=Q.trim().split(/\s+/).map((K)=>{let[X,N]=K.split(",").map(Number);return{x:X,y:N}});if(q.length<3)return`<polyline${Z}points="${Q}"${Y}/>`;let G=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let X=q[K-1],N=q[K],V=q[K+1],W=N.x-X.x,O=N.y-X.y,M=V.x-N.x,I=V.y-N.y,E=Math.sqrt(W*W+O*O),J=Math.sqrt(M*M+I*I),D=Math.min($,E/2,J/2);if(D<0.5){G.push(`L ${N.x},${N.y}`);continue}let k=N.x-W/E*D,i=N.y-O/E*D,p=N.x+M/J*D,s=N.y+I/J*D,f=W*I-O*M>0?1:0;G.push(`L ${k},${i}`),G.push(`A ${D},${D} 0 0 ${f} ${p},${s}`)}return G.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${G.join(" ")}"${Y}/>`})}async function U4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Q=g2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let G=q.dataset.mermaid,K=sQ(G||""),X=u8(K,2),N=await $(X,{...Q,transparent:!0});N=ZY(N),q.innerHTML=N,q.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${G.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}function d2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function i2(_){return String(_||"").trim()||"web:default"}function n2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function o2(_){if(!_)return!1;return _.status!=="running"}function s2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function r2({session:_,onClose:$,onInject:j,onRetry:Z}){let Q=P(null),Y=P(null),q=_?.thinking?n5(_.thinking):"",G=_?.answer?O_(_.answer,null,{sanitize:!1}):"";if(m(()=>{if(Q.current&&q)U4(Q.current).catch(()=>{})},[q]),m(()=>{if(Y.current&&G)U4(Y.current).catch(()=>{})},[G]),!_)return null;let K=_.status==="running",X=Boolean(String(_.answer||"").trim()),N=Boolean(String(_.thinking||"").trim()),V=n2(_),W=o2(_),O=!K&&X,M=K?"Thinking…":_.status==="error"?"Error":"Done";return L`
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
                        ref=${Q}
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

            ${W&&L`
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
    `}function QY(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Q?{kind:j,html:Q}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function YY(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function R4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function x0(_){return typeof _==="string"&&_.trim()?_.trim():null}function t2(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Q)=>typeof Q==="string").map((Q)=>Q.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var e2="__PICLAW_WIDGET_HOST__:";function a2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function q$(_,$){if(!_||_.type!=="generated_widget")return null;let j=QY(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:t2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function _7(_){if(!_||typeof _!=="object")return null;let $=YY(_),j=x0(_?.widget_id)||x0(_?.widgetId)||x0(_?.tool_call_id)||x0(_?.toolCallId),Z=x0(_?.tool_call_id)||x0(_?.toolCallId),Q=x0(_?.turn_id)||x0(_?.turnId),Y=x0(_?.title)||x0(_?.name)||"Generated widget",q=x0(_?.subtitle)||"",G=x0(_?.description)||q,K=x0(_?.status),X=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:Y,subtitle:q,description:G,originPostId:R4(_?.origin_post_id)??R4(_?.originPostId),originChatJid:x0(_?.origin_chat_jid)||x0(_?.originChatJid)||x0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:t2(_?.capabilities,!0),source:"live",status:X,turnId:Q,toolCallId:Z,width:R4(_?.width),height:R4(_?.height),error:x0(_?.error)}}function $7(_){return q$(_,null)!==null}function o1(_){let $=x0(_?.toolCallId)||x0(_?.tool_call_id);if($)return $;let j=x0(_?.widgetId)||x0(_?.widget_id);if(j)return j;let Z=R4(_?.originPostId)??R4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function j7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Q=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Q)}function Z7(_){return j7(_)?"allow-downloads allow-scripts":"allow-downloads"}function m8(_){return{title:x0(_?.title)||"Generated widget",widgetId:x0(_?.widgetId)||x0(_?.widget_id),toolCallId:x0(_?.toolCallId)||x0(_?.tool_call_id),turnId:x0(_?.turnId)||x0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:x0(_?.status)||"final"}}function h8(_){return{...m8(_),subtitle:x0(_?.subtitle)||"",description:x0(_?.description)||"",error:x0(_?.error)||null,width:R4(_?.width),height:R4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function p8(_){return`${e2}${JSON.stringify(h8(_))}`}function Q7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=x0(_.text)||x0(_.content)||x0(_.message)||x0(_.prompt)||x0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=x0(j.text)||x0(j.content)||x0(j.message)||x0(j.prompt)||x0(j.value);if(Z)return Z}return null}function Y7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function q7(_){let $=x0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return x0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function qY(_){let $=m8(_);return`<script>
(function () {
  const meta = ${a2($)};
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

  const windowNamePrefix = ${a2(e2)};
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
</script>`}function G7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Q:Z;if(!q)return"";let G=j7(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",G?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),X=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,N=G?qY(_):"";return`<!doctype html>
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
</html>`}function X7({widget:_,onClose:$,onWidgetEvent:j}){let Z=P(null),Q=P(!1),Y=v0(()=>G7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(m(()=>{if(!_)return;let J=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),m(()=>{Q.current=!1},[Y]),m(()=>{if(!_)return;let J=Z.current;if(!J)return;let D=(e)=>{let f=p8(_),R=e==="widget.init"?m8(_):h8(_);try{J.name=f}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:e,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:R},"*")}catch{}},k=()=>{D("widget.init"),D("widget.update")},i=()=>{Q.current=!0,k()};J.addEventListener("load",i);let s=[0,40,120,300,800].map((e)=>setTimeout(k,e));return()=>{J.removeEventListener("load",i),s.forEach((e)=>clearTimeout(e))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),m(()=>{if(!_)return;let J=Z.current;if(!J?.contentWindow)return;let D=p8(_),k=h8(_);try{J.name=D}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:k},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),m(()=>{if(!_)return;let J=(D)=>{let k=D?.data;if(!k||k.__piclawGeneratedWidget!==!0)return;let i=Z.current,p=o1(_),s=o1({widgetId:k.widgetId,toolCallId:k.toolCallId});if(s&&p&&s!==p)return;if(!s&&i?.contentWindow&&D.source!==i.contentWindow)return;j?.(k,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let G=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",X=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",N=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",W=N==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",M=!Y,I=q7(_),E=Z7(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${W} • ${G.toUpperCase()}</div>
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
                                name=${p8(_)}
                                sandbox=${E}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var K7="PiClaw";function G$(_,$,j=!1){let Z=_||"PiClaw",Q=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Q.charCodeAt(0)%Y.length,G=Y[q],K=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",N=X?X:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Q,color:G,image:N||(V?"/static/icon-192.png":null)}}function N7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function V7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function B7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",K=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(K&&(G||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let Q=Math.abs(Z)%$.length;return $[Q]}var GY=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function X$({status:_,draft:$,plan:j,thought:Z,pendingRequest:Q,intent:Y,extensionPanels:q=[],pendingPanelActions:G=new Set,onExtensionPanelAction:K,turnId:X,steerQueued:N,onPanelToggle:V,showCorePanels:W=!0,showExtensionPanels:O=!0}){let E=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let y0=a,S0=y0?y0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y0,totalLines:S0,fullText:y0}}let W0=a.text||"",H0=a.fullText||a.full_text||W0,N0=Number.isFinite(a.totalLines)?a.totalLines:H0?H0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W0,totalLines:N0,fullText:H0}},J=160,D=(a)=>String(a||"").replace(/<\/?internal>/gi,""),k=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},i=(a,W0,H0)=>{let N0=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!N0)return{text:"",omitted:0,totalLines:Number.isFinite(H0)?H0:0,visibleLines:0};let y0=N0.split(`
`),S0=y0.length>W0?y0.slice(0,W0).join(`
`):N0,b0=Number.isFinite(H0)?H0:y0.reduce((i0,D0)=>i0+k(D0),0),k0=S0?S0.split(`
`).reduce((i0,D0)=>i0+k(D0),0):0,w0=Math.max(b0-k0,0);return{text:S0,omitted:w0,totalLines:b0,visibleLines:k0}},p=E(j),s=E(Z),e=E($),f=Boolean(p.text)||p.totalLines>0,R=Boolean(s.text)||s.totalLines>0,H=Boolean(e.fullText?.trim()||e.text?.trim()),x=Boolean(_||H||f||R||Q||Y),c=Array.isArray(q)&&q.length>0;if((!W||!x)&&(!O||!c))return null;let[G0,d]=h(new Set),[j0,_0]=h(null),[K0,V0]=h(()=>Date.now()),B0=(a)=>d((W0)=>{let H0=new Set(W0),N0=!H0.has(a);if(N0)H0.add(a);else H0.delete(a);if(typeof V==="function")V(a,N0);return H0});m(()=>{d(new Set),_0(null)},[X]);let J0=W4(_);m(()=>{if(!J0)return;V0(Date.now());let a=setInterval(()=>V0(Date.now()),1000);return()=>clearInterval(a)},[J0,_?.started_at,_?.startedAt]);let E0=_?.turn_id||X,M0=B7(E0),o0=N?"turn-dot turn-dot-queued":"turn-dot",R0=(a)=>a,T0=Boolean(_?.last_activity||_?.lastActivity),s0=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":M0,r0=Y?.kind||"info",h0=s0(r0),t0=s0(_?.kind||(J0?"warning":"info")),p0="",j1=_?.title,z0=_?.status;if(_?.type==="plan")p0=j1?`Planning: ${j1}`:"Planning...";else if(_?.type==="tool_call")p0=j1?`Running: ${j1}`:"Running tool...";else if(_?.type==="tool_status")p0=j1?`${j1}: ${z0||"Working..."}`:z0||"Working...";else if(_?.type==="error")p0=j1||"Agent error";else p0=j1||z0||"Working...";if(T0)p0="Last activity just now";let l0=({panelTitle:a,text:W0,fullText:H0,totalLines:N0,maxLines:y0,titleClass:S0,panelKey:b0})=>{let k0=G0.has(b0),w0=H0||W0||"",i0=b0==="thought"||b0==="draft"?D(w0):w0,D0=typeof y0==="number",u0=k0&&D0,O0=D0?i(i0,y0,N0):{text:i0||"",omitted:0,totalLines:Number.isFinite(N0)?N0:0};if(!i0&&!(Number.isFinite(O0.totalLines)&&O0.totalLines>0))return null;let Y0=`agent-thinking-body${D0?" agent-thinking-body-collapsible":""}`,w=D0?`--agent-thinking-collapsed-lines: ${y0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${k0?"true":"false"}
                data-collapsible=${D0?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
            >
                <div class="agent-thinking-title ${S0||""}">
                    ${M0&&L`<span class=${o0} aria-hidden="true"></span>`}
                    ${a}
                    ${u0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>B0(b0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Y0}
                    style=${w}
                    dangerouslySetInnerHTML=${{__html:n5(i0)}}
                />
                ${!k0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>B0(b0)}>
                        ▸ ${O0.omitted} more lines
                    </button>
                `}
                ${k0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>B0(b0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},Z1=Q?.tool_call?.title,q1=Z1?`Awaiting approval: ${Z1}`:"Awaiting approval",X_=J0?w8(_,K0):null,E1=(a,W0,H0=null)=>{let N0=y8(a);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${W0?`--turn-color: ${W0};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${W0&&L`<span class=${o0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${N0}</span>
                    ${H0&&L`<span class="agent-status-elapsed">${H0}</span>`}
                </div>
                ${a.detail&&L`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `},_1=(a,W0,H0,N0,y0,S0,b0,k0=8,w0=8)=>{let i0=Math.max(y0-N0,0.000000001),D0=Math.max(W0-k0*2,1),u0=Math.max(H0-w0*2,1),O0=Math.max(b0-S0,1),Y0=b0===S0?W0/2:k0+(a.run-S0)/O0*D0,w=w0+(u0-(a.value-N0)/i0*u0);return{x:Y0,y:w}},h1=(a,W0,H0,N0,y0,S0,b0,k0=8,w0=8)=>{if(!Array.isArray(a)||a.length===0)return"";return a.map((i0,D0)=>{let{x:u0,y:O0}=_1(i0,W0,H0,N0,y0,S0,b0,k0,w0);return`${D0===0?"M":"L"} ${u0.toFixed(2)} ${O0.toFixed(2)}`}).join(" ")},k1=(a,W0="")=>{if(!Number.isFinite(a))return"—";return`${Math.abs(a)>=100?a.toFixed(0):a.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${W0}`},G1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],c0=(a,W0)=>{let H0=G1;if(!Array.isArray(H0)||H0.length===0)return"var(--accent-color)";if(H0.length===1||!Number.isFinite(W0)||W0<=1)return H0[0];let y0=Math.max(0,Math.min(Number.isFinite(a)?a:0,W0-1))/Math.max(1,W0-1)*(H0.length-1),S0=Math.floor(y0),b0=Math.min(H0.length-1,S0+1),k0=y0-S0,w0=H0[S0],i0=H0[b0];if(!i0||S0===b0||k0<=0.001)return w0;if(k0>=0.999)return i0;let D0=Math.round((1-k0)*1000)/10,u0=Math.round(k0*1000)/10;return`color-mix(in oklab, ${w0} ${D0}%, ${i0} ${u0}%)`},R1=(a,W0="autoresearch")=>{let H0=Array.isArray(a)?a.map((Y0)=>({...Y0,points:Array.isArray(Y0?.points)?Y0.points.filter((w)=>Number.isFinite(w?.value)&&Number.isFinite(w?.run)):[]})).filter((Y0)=>Y0.points.length>0):[],N0=H0.map((Y0,w)=>({...Y0,color:c0(w,H0.length)}));if(N0.length===0)return null;let y0=320,S0=120,b0=N0.flatMap((Y0)=>Y0.points),k0=b0.map((Y0)=>Y0.value),w0=b0.map((Y0)=>Y0.run),i0=Math.min(...k0),D0=Math.max(...k0),u0=Math.min(...w0),O0=Math.max(...w0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${N0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${y0} ${S0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${N0.map((Y0)=>{let w=Y0?.key||Y0?.label||"series",t=j0?.panelKey===W0&&j0?.seriesKey===w;return L`
                                <g key=${w}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${h1(Y0.points,y0,S0,i0,D0,u0,O0)}
                                        style=${`--agent-series-color: ${Y0.color};`}
                                        onMouseEnter=${()=>_0({panelKey:W0,seriesKey:w})}
                                        onMouseLeave=${()=>_0((F0)=>F0?.panelKey===W0&&F0?.seriesKey===w?null:F0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${N0.flatMap((Y0)=>{let w=typeof Y0?.unit==="string"?Y0.unit:"",t=Y0?.key||Y0?.label||"series";return Y0.points.map((F0,I0)=>{let g0=_1(F0,y0,S0,i0,D0,u0,O0);return L`
                                    <button
                                        key=${`${t}-point-${I0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Y0.color}; left:${g0.x/y0*100}%; top:${g0.y/S0*100}%;`}
                                        onMouseEnter=${()=>_0({panelKey:W0,seriesKey:t,run:F0.run,value:F0.value,unit:w})}
                                        onMouseLeave=${()=>_0((X1)=>X1?.panelKey===W0?null:X1)}
                                        onFocus=${()=>_0({panelKey:W0,seriesKey:t,run:F0.run,value:F0.value,unit:w})}
                                        onBlur=${()=>_0((X1)=>X1?.panelKey===W0?null:X1)}
                                        aria-label=${`${Y0?.label||"Series"} ${k1(F0.value,w)} at run ${F0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${N0.map((Y0)=>{let w=Y0.points[Y0.points.length-1]?.value,t=typeof Y0?.unit==="string"?Y0.unit:"",F0=Y0?.key||Y0?.label||"series",I0=j0?.panelKey===W0&&j0?.seriesKey===F0?j0:null,g0=I0&&Number.isFinite(I0.value)?I0.value:w,X1=I0&&typeof I0.unit==="string"?I0.unit:t,M1=I0&&Number.isFinite(I0.run)?I0.run:null;return L`
                            <div key=${`${F0}-legend`} class=${`agent-series-legend-item${I0?" is-hovered":""}`} style=${`--agent-series-color: ${Y0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Y0.color};`}></span>
                                <span class="agent-series-legend-label">${Y0?.label||"Series"}</span>
                                ${M1!==null&&L`<span class="agent-series-legend-run">run ${M1}</span>`}
                                <span class="agent-series-legend-value">${k1(g0,X1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},T1=(a)=>{if(!a)return null;let W0=typeof a?.key==="string"?a.key:`panel-${Math.random()}`,H0=G0.has(W0),N0=a?.title||"Extension status",y0=a?.collapsed_text||"",S0=String(a?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),b0=s0(a?.state==="completed"?"success":a?.state==="failed"?"error":a?.state==="stopped"?"warning":"info"),k0=typeof a?.detail_markdown==="string"?a.detail_markdown.trim():"",w0=typeof a?.last_run_text==="string"?a.last_run_text.trim():"",i0=typeof a?.tmux_command==="string"?a.tmux_command.trim():"",D0=Array.isArray(a?.series)?a.series:[],u0=Array.isArray(a?.actions)?a.actions:[],O0=Boolean(k0||i0),Y0=Boolean(k0||D0.length>0||i0),w=[N0,y0].filter(Boolean).join(" — ");return L`
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
                        onClick=${()=>Y0?B0(W0):null}
                    >
                        ${b0&&L`<span class=${o0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${N0}</span>
                        ${y0&&L`<span class="agent-thinking-title-meta">${y0}</span>`}
                    </button>
                    ${(u0.length>0||Y0&&!H0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${u0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${u0.map((t)=>{let F0=`${W0}:${t?.key||""}`,I0=G?.has?.(F0);return L`
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
                            ${Y0&&!H0&&L`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${N0}`}
                                    title="Expand details"
                                    onClick=${()=>B0(W0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${Y0&&H0&&L`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${N0}`}
                        title="Collapse details"
                        onClick=${()=>B0(W0)}
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
                                        dangerouslySetInnerHTML=${{__html:n5(k0)}}
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
                                                ${GY}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${D0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${R1(D0,W0)}
                                    ${w0&&L`<div class="agent-series-chart-note">${w0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${W&&Y&&E1(Y,h0)}
            ${O&&Array.isArray(q)&&q.map((a)=>T1(a))}
            ${W&&_?.type==="intent"&&E1(_,t0,X_)}
            ${W&&Q&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    <span class=${o0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${q1}</span>
                </div>
            `}
            ${W&&f&&l0({panelTitle:R0("Planning"),text:p.text,fullText:p.fullText,totalLines:p.totalLines,panelKey:"plan"})}
            ${W&&R&&l0({panelTitle:R0("Thoughts"),text:s.text,fullText:s.fullText,totalLines:s.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${W&&H&&l0({panelTitle:R0("Draft"),text:e.text,fullText:e.fullText,totalLines:e.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${W&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${T0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    ${M0&&L`<span class=${o0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!T0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${p0}</span>
                </div>
            `}
        </div>
    `}function W7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Q,chat_jid:Y}=_,q=Z?.title||"Agent Request",G=Z?.kind||"other",K=Z?.rawInput||{},X=K.command||K.commands&&K.commands[0]||null,N=K.diff||null,V=K.fileName||K.path||null,W=Z?.description||K.description||K.explanation||null,M=(Array.isArray(Z?.locations)?Z.locations:[]).map((k)=>k?.path).filter((k)=>Boolean(k)),I=Array.from(new Set([V,...M].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Q});let E=async(k)=>{try{await E8(j,k,Y||null),$()}catch(i){console.error("Failed to respond to agent request:",i)}},J=async()=>{try{await b6(q,`Auto-approved: ${q}`),await E8(j,"approved",Y||null),$()}catch(k){console.error("Failed to add to whitelist:",k)}},D=Q&&Q.length>0;return L`
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
                ${(W||X||N||I.length>0)&&L`
                    <div class="agent-request-body">
                        ${W&&L`
                            <div class="agent-request-description">${W}</div>
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
                    ${D?Q.map((k)=>L`
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
    `}function U7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Q=Z/1000,Y=86400000;if(Z<Y){if(Q<60)return"just now";if(Q<3600)return`${Math.floor(Q/60)}m`;return`${Math.floor(Q/3600)}h`}if(Z<5*Y){let K=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${X}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${G}`}function o5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function b_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function a4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var XY=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),KY=new Set(["text/markdown"]),NY=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),VY=new Set(["application/vnd.jgraph.mxfile"]);function s5(_){return typeof _==="string"?_.trim().toLowerCase():""}function BY(_){let $=s5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function WY(_){let $=s5(_);return!!$&&$.endsWith(".pdf")}function UY(_){let $=s5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function r5(_,$){let j=s5(_);if(BY($)||VY.has(j))return"drawio";if(WY($)||j==="application/pdf")return"pdf";if(UY($)||NY.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(XY.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function L7(_){let $=s5(_);return KY.has($)}function F7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function LY(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Q)=>`${Q}${Q}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function FY(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Q=Number(j[2]),Y=Number(j[3]);if(![Z,Q,Y].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:Q,b:Y}}function z7(_){return LY(_)||FY(_)}function c8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Q=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Q}function zY(_,$){let j=Math.max(c8(_),c8($)),Z=Math.min(c8(_),c8($));return(j+0.05)/(Z+0.05)}function HY(_,$,j="#ffffff"){let Z=z7(_);if(!Z)return j;let Q=j,Y=-1;for(let q of $){let G=z7(q);if(!G)continue;let K=zY(Z,G);if(K>Y)Q=q,Y=K}return Q}function K$(){let _=getComputedStyle(document.documentElement),$=(M,I)=>{for(let E of M){let J=_.getPropertyValue(E).trim();if(J)return J}return I},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Q=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),N=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),W=$(["--font-family"],"system-ui, sans-serif"),O=HY(G,[j,Q],j);return{fg:j,fgMuted:Z,bgPrimary:Q,bg:Y,bgEmphasis:q,accent:G,good:K,warning:X,attention:N,border:V,fontFamily:W,buttonTextColor:O}}function H7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Q,good:Y,warning:q,attention:G,border:K,fontFamily:X}=K$();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Q,subtle:Q},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Q,subtle:Q},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var JY=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),J7=!1,l8=null,O7=!1;function N$(_){_.querySelector(".adaptive-card-notice")?.remove()}function OY(_,$,j="error"){N$(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function DY(_,$=(j)=>O_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function AY(_=($)=>O_($,null)){return($,j)=>{try{let Z=DY($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function EY(_){if(O7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=AY(),O7=!0}async function MY(){if(J7)return;if(l8)return l8;return l8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{J7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),l8}function IY(){return globalThis.AdaptiveCards}function kY(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function TY(_){return JY.has(_)}function B$(_){if(!Array.isArray(_))return[];return _.filter(kY)}function PY(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Q=_?.data??void 0;return{type:$,title:j,data:Q,url:Z,raw:_}}function V$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>V$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${V$(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function CY(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return V$($);return typeof $==="string"?$:String($)}function SY(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Q)=>{if(Array.isArray(Q))return Q.map((G)=>Z(G));if(!Q||typeof Q!=="object")return Q;let q={...Q};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=CY(q.type,j[q.id],q);for(let[G,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[G]=Z(K);return q};return Z(_)}function xY(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function RY(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function yY(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Q=RY(_.completed_at||j?.submitted_at),Y=[Z||null,Q||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function D7(_,$,j){if(!TY($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await MY()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=IY();EY(Z);let Q=new Z.AdaptiveCard,Y=K$();Q.hostConfig=new Z.HostConfig(H7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:SY($.payload,q);Q.parse(G),Q.onExecuteAction=(N)=>{let V=PY(N);if(j?.onAction)N$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((W)=>{console.error("[adaptive-card] Action failed:",W);let O=W instanceof Error?W.message:String(W||"Action failed.");OY(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Q.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let X=yY($);if(X){_.classList.add("adaptive-card-finished");let N=document.createElement("div");N.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=X.label,N.appendChild(V),X.detail){let W=document.createElement("span");W.className="adaptive-card-status-detail",W.textContent=X.detail,N.appendChild(W)}_.appendChild(N)}if(N$(_),_.appendChild(K),X)xY(K);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function a5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>a5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${a5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function A7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:a5(j)})).filter(($)=>$.value)}function wY(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function W$(_){if(!Array.isArray(_))return[];return _.filter(wY)}function E7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=a5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Q=A7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Q.length>0?`Card submission: ${$} — ${Q.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function M7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=A7(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):a5(_.data)||null,Q=j.length;return{title:$,summary:Z,fields:j,fieldCount:Q,submittedAt:_.submitted_at}}function O5({children:_,className:$=""}){let j=P(null);return m(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{x4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),u5(()=>{let Z=j.current;if(!Z)return;return x4(_,Z),()=>{x4(null,Z)}},[_]),null}function fY(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?b_($):null},{label:"Added",value:_?.created_at?a4(_.created_at):null}].filter((Z)=>Z.value)}function vY(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Q=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Q}&name=${Z}#media=${Q}&name=${Z}`;if(j==="office"){let Y=v_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Q}&name=${Z}&readonly=1#media=${Q}&name=${Z}&readonly=1`;return null}function I7({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Q=v0(()=>r5($?.content_type,Z),[$?.content_type,Z]),Y=F7(Q),q=v0(()=>L7($?.content_type),[$?.content_type]),[G,K]=h(Q==="text"),[X,N]=h(""),[V,W]=h(null),O=P(null),M=v0(()=>fY($),[$]),I=v0(()=>vY(_,Z,Q),[_,Z,Q]),E=v0(()=>{if(!q||!X)return"";return O_(X)},[q,X]);return m(()=>{let J=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),m(()=>{if(!O.current||!E)return;U4(O.current);return},[E]),m(()=>{let J=!1;async function D(){if(Q!=="text"){K(!1),W(null);return}K(!0),W(null);try{let k=await h6(_);if(!J)N(k)}catch{if(!J)W("Failed to load text preview.")}finally{if(!J)K(!1)}}return D(),()=>{J=!0}},[_,Q]),L`
        <${O5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
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
                        ${!G&&!V&&Q==="image"&&L`
                            <img class="attachment-preview-image" src=${v_(_)} alt=${Z} />
                        `}
                        ${!G&&!V&&(Q==="pdf"||Q==="office"||Q==="drawio")&&I&&L`
                            <iframe class="attachment-preview-frame" src=${I} title=${Z}></iframe>
                        `}
                        ${!G&&!V&&Q==="drawio"&&L`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!G&&!V&&Q==="text"&&q&&L`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:E}}
                            />
                        `}
                        ${!G&&!V&&Q==="text"&&!q&&L`
                            <pre class="attachment-preview-text">${X}</pre>
                        `}
                        ${!G&&!V&&Q==="unsupported"&&L`
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
        </${O5}>
    `}function k7({src:_,onClose:$}){return m(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${O5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${O5}>
    `}function bY({mediaId:_,onPreview:$}){let[j,Z]=h(null);if(m(()=>{L5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Q=j.filename||"file",Y=j.metadata?.size,q=Y?b_(Y):"",K=r5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${v_(_)} download=${Q} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Q}</span>
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
    `}function gY({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Q]=h(null);m(()=>{if(!Number.isFinite(j))return;L5(j).then(Q).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?v_(j):null,K=r5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Y}>
            ${q?L`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${n_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:L`
                    <${n_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
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
    `}function d8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Q=Z?a4(Z):null;return L`
        <div class="content-annotations">
            ${$&&$.length>0&&L`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&L`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Q&&L`
                <span class="content-annotation">Updated: ${Q}</span>
            `}
        </div>
    `}function uY({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?b_(_.size):"",Q=_.mime_type||"",Y=pY(Q),q=r4(_.uri);return L`
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
                    ${Q&&L`<span>${Q}</span>`}
                    ${Z&&L`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function mY({block:_}){let[$,j]=h(!1),Z=_.uri||"Embedded resource",Q=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&L`
                ${Q&&L`<pre class="resource-embed-content">${Q}</pre>`}
                ${Y&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&L`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),X=URL.createObjectURL(K),N=document.createElement("a");N.href=X,N.download=Z.split("/").pop()||"resource",N.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function hY({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=q$(_,$),Q=$7(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",G=Z?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",X=(N)=>{if(N.preventDefault(),N.stopPropagation(),!Z)return;j?.(Z)};return L`
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
                    disabled=${!Q}
                    onClick=${X}
                    title=${Q?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${Q?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function pY(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function cY({preview:_}){let $=r4(_.url),j=r4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Q=_.site_name;if(!Q&&$)try{Q=new URL($).hostname}catch{Q=$}return L`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Q||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&L`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function lY(_,$){return typeof _==="string"?_:""}var dY=1800,iY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,nY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,oY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function sY(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function rY(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Q=(Y,q)=>{let G=q||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=nY,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=oY,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=iY,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Q(G,"idle"),q.appendChild(G);let K=async(X)=>{X.preventDefault(),X.stopPropagation();let V=Y.querySelector("code")?.textContent||"",W=await sY(V);Q(G,W?"success":"error");let O=j.get(G);if(O)clearTimeout(O);let M=setTimeout(()=>{Q(G,"idle"),j.delete(G)},dY);j.set(G,M)};G.addEventListener("click",K),Z.push(()=>{G.removeEventListener("click",K);let X=j.get(G);if(X)clearTimeout(X);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Z.forEach((Y)=>Y())}}function aY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X))Q.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(Q.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Y),K=[...q,...G].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Q}}function tY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X)){let V=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Q.push(V[1])}else if(!X.trim())break;else break}if(Q.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Y),K=[...q,...G].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Q}}function eY(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1){let N=j[X].trim();if((N==="Images:"||N==="Attachments:")&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}}if(Z===-1)return{content:_,attachments:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X)){let N=X.replace(/^\s*-\s+/,"").trim(),V=N.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||N.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let W=V[1],O=(V[2]||"").trim()||W;Q.push({id:W,label:O,raw:N})}else Q.push({id:null,label:N,raw:N})}else if(!X.trim())break;else break}if(Q.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),G=j.slice(Y),K=[...q,...G].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Q}}function _q(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $q(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(_q).sort((N,V)=>V.length-N.length),Q=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),G=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],X;while(X=G.nextNode())K.push(X);for(let N of K){let V=N.nodeValue;if(!V||!Q.test(V)){Q.lastIndex=0;continue}Q.lastIndex=0;let W=N.parentElement;if(W&&W.closest("code, pre, script, style"))continue;let O=V.split(Q).filter((I)=>I!=="");if(O.length===0)continue;let M=q.createDocumentFragment();for(let I of O)if(Y.test(I)){let E=q.createElement("mark");E.className="search-highlight-term",E.textContent=I,M.appendChild(E)}else M.appendChild(q.createTextNode(I));N.parentNode.replaceChild(M,N)}return q.body.innerHTML}function T7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Q,agentName:Y,agentAvatarUrl:q,userName:G,userAvatarUrl:K,userAvatarBackground:X,onDelete:N,isThreadReply:V,isThreadPrev:W,isThreadNext:O,isRemoving:M,highlightQuery:I,onFileRef:E,onOpenWidget:J}){let[D,k]=h(null),i=P(null),p=_.data,s=p.type==="agent_response",e=G||"You",f=s?Y||K7:e,R=s?G$(Y,q,!0):G$(e,K),H=typeof X==="string"?X.trim().toLowerCase():"",x=!s&&R.image&&(H==="clear"||H==="transparent"),c=s&&Boolean(R.image),G0=`background-color: ${x||c?"transparent":R.color}`,d=p.content_meta,j0=Boolean(d?.truncated),_0=Boolean(d?.preview),K0=j0&&!_0,V0=j0?{originalLength:Number.isFinite(d?.original_length)?d.original_length:p.content?p.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,B0=p.content_blocks||[],J0=p.media_ids||[],E0=lY(p.content,p.link_previews),{content:M0,fileRefs:o0}=aY(E0),{content:R0,messageRefs:T0}=tY(M0),{content:s0,attachments:r0}=eY(R0);E0=s0;let h0=B$(B0),t0=W$(B0),p0=h0.length===1&&typeof h0[0]?.fallback_text==="string"?h0[0].fallback_text.trim():"",j1=t0.length===1?E7(t0[0]).trim():"",z0=Boolean(p0)&&E0?.trim()===p0||Boolean(j1)&&E0?.trim()===j1,l0=Boolean(E0)&&!K0&&!z0,Z1=typeof I==="string"?I.trim():"",q1=v0(()=>{if(!E0||z0)return"";let w=O_(E0,j);return Z1?$q(w,Z1):w},[E0,z0,Z1]),X_=(w,t)=>{w.stopPropagation(),k(v_(t))},[E1,_1]=h(null),h1=(w)=>{_1(w)},k1=(w)=>{w.stopPropagation(),N?.(_)},G1=(w,t)=>{let F0=new Set;if(!w||t.length===0)return{content:w,usedIds:F0};return{content:w.replace(/attachment:([^\s)"']+)/g,(g0,X1,M1,N1)=>{let p1=X1.replace(/^\/+/,""),U_=t.find((L_)=>L_.name&&L_.name.toLowerCase()===p1.toLowerCase()&&!F0.has(L_.id))||t.find((L_)=>!F0.has(L_.id));if(!U_)return g0;if(F0.add(U_.id),N1.slice(Math.max(0,M1-2),M1)==="](")return`/media/${U_.id}`;return U_.name||"attachment"}),usedIds:F0}},c0=[],R1=[],T1=[],a=[],W0=[],H0=[],N0=[],y0=0;if(B0.length>0)B0.forEach((w)=>{if(w?.type==="text"&&w.annotations)N0.push(w.annotations);if(w?.type==="generated_widget")H0.push(w);else if(w?.type==="resource_link")a.push(w);else if(w?.type==="resource")W0.push(w);else if(w?.type==="file"){let t=J0[y0++];if(t)R1.push(t),T1.push({id:t,name:w?.name||w?.filename||w?.title})}else if(w?.type==="image"||!w?.type){let t=J0[y0++];if(t){let F0=typeof w?.mime_type==="string"?w.mime_type:void 0;c0.push({id:t,annotations:w?.annotations,mimeType:F0}),T1.push({id:t,name:w?.name||w?.filename||w?.title})}}});else if(J0.length>0){let w=r0.length>0;J0.forEach((t,F0)=>{let I0=r0[F0]||null;if(T1.push({id:t,name:I0?.label||null}),w)R1.push(t);else c0.push({id:t,annotations:null})})}if(r0.length>0)r0.forEach((w)=>{if(!w?.id)return;let t=T1.find((F0)=>String(F0.id)===String(w.id));if(t&&!t.name)t.name=w.label});let{content:S0,usedIds:b0}=G1(E0,T1);E0=S0;let k0=c0.filter(({id:w})=>!b0.has(w)),w0=R1.filter((w)=>!b0.has(w)),i0=r0.length>0?r0.map((w,t)=>({id:w.id||`attachment-${t+1}`,label:w.label||`attachment-${t+1}`})):T1.map((w,t)=>({id:w.id,label:w.name||`attachment-${t+1}`})),D0=v0(()=>B$(B0),[B0]),u0=v0(()=>W$(B0),[B0]),O0=v0(()=>{return D0.map((w)=>`${w.card_id}:${w.state}`).join("|")},[D0]);m(()=>{if(!i.current)return;return U4(i.current),rY(i.current)},[q1]);let Y0=P(null);return m(()=>{if(!Y0.current||D0.length===0)return;let w=Y0.current;w.innerHTML="";for(let t of D0){let F0=document.createElement("div");w.appendChild(F0),D7(F0,t,{onAction:async(I0)=>{if(I0.type==="Action.OpenUrl"){let g0=r4(I0.url||"");if(!g0)throw Error("Invalid URL");window.open(g0,"_blank","noopener,noreferrer");return}if(I0.type==="Action.Submit"){await v6({post_id:_.id,thread_id:p.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:I0.type,title:I0.title||"",data:I0.data}});return}console.warn("[post] unsupported adaptive card action:",I0.type,I0)}}).catch((I0)=>{console.error("[post] adaptive card render error:",I0),F0.textContent=t.fallback_text||"Card failed to render."})}},[O0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${s?"agent-post":""} ${V?"thread-reply":""} ${W?"thread-prev":""} ${O?"thread-next":""} ${M?"removing":""}" onClick=${$}>
            <div class="post-avatar ${s?"agent-avatar":""} ${R.image?"has-image":""}" style=${G0}>
                ${R.image?L`<img src=${R.image} alt=${f} />`:R.letter}
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
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(w)=>{if(w.preventDefault(),w.stopPropagation(),Z)Z(_.id)}}>${U7(_.timestamp)}</a>
                </div>
                ${K0&&V0&&L`
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
                ${(o0.length>0||T0.length>0||i0.length>0)&&L`
                    <div class="post-file-refs">
                        ${T0.map((w)=>{let t=(F0)=>{if(F0.preventDefault(),F0.stopPropagation(),Q)Q(w,_.chat_jid||null);else{let I0=document.getElementById("post-"+w);if(I0)I0.scrollIntoView({behavior:"smooth",block:"center"}),I0.classList.add("post-highlight"),setTimeout(()=>I0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${w}`} class="post-msg-pill-link" onClick=${t}>
                                    <${n_}
                                        prefix="post"
                                        label=${"msg:"+w}
                                        title=${"Message "+w}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${o0.map((w)=>{let t=w.split("/").pop()||w;return L`
                                <${n_}
                                    prefix="post"
                                    label=${t}
                                    title=${w}
                                    onClick=${()=>E?.(w)}
                                />
                            `})}
                        ${i0.map((w)=>L`
                            <${gY}
                                key=${w.id}
                                attachment=${w}
                                onPreview=${h1}
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
                    <div ref=${Y0} class="post-adaptive-cards" />
                `}
                ${u0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${u0.map((w,t)=>{let F0=M7(w),I0=`${w.card_id}-${t}`;return L`
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
                                            ${F0.fields.map((g0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${g0.key}: ${g0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${g0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${g0.value}</span>
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
                            <${hY}
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
                        <${d8} key=${t} annotations=${w} />
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
                                    onClick=${(g0)=>X_(g0,w)}
                                />
                            `})}
                    </div>
                `}
                ${k0.length>0&&L`
                    ${k0.map(({annotations:w},t)=>L`
                        ${w&&L`<${d8} key=${t} annotations=${w} />`}
                    `)}
                `}
                ${w0.length>0&&L`
                    <div class="file-attachments">
                        ${w0.map((w)=>L`
                            <${bY} key=${w} mediaId=${w} onPreview=${h1} />
                        `)}
                    </div>
                `}
                ${a.length>0&&L`
                    <div class="resource-links">
                        ${a.map((w,t)=>L`
                            <div key=${t}>
                                <${uY} block=${w} />
                                <${d8} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${W0.length>0&&L`
                    <div class="resource-embeds">
                        ${W0.map((w,t)=>L`
                            <div key=${t}>
                                <${mY} block=${w} />
                                <${d8} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${p.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${p.link_previews.map((w,t)=>L`
                            <${cY} key=${t} preview=${w} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&L`<${k7} src=${D} onClose=${()=>k(null)} />`}
        ${E1&&L`
            <${I7}
                mediaId=${E1.mediaId}
                info=${E1.info}
                onClose=${()=>_1(null)}
            />
        `}
    `}function P7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Q,onMessageRef:Y,onScrollToMessage:q,onFileRef:G,onOpenWidget:K,emptyMessage:X,timelineRef:N,agents:V,user:W,onDeletePost:O,reverse:M=!0,removingPostIds:I,searchQuery:E}){let[J,D]=h(!1),k=P(null),i=typeof IntersectionObserver<"u",p=S(async()=>{if(!j||!$||J)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,J,j]),s=S((d)=>{let{scrollTop:j0,scrollHeight:_0,clientHeight:K0}=d.target,V0=M?_0-K0-j0:j0,B0=Math.max(300,K0);if(V0<B0)p()},[M,p]);m(()=>{if(!i)return;let d=k.current,j0=N?.current;if(!d||!j0)return;let _0=300,K0=new IntersectionObserver((V0)=>{for(let B0 of V0){if(!B0.isIntersecting)continue;p()}},{root:j0,rootMargin:`${_0}px 0px ${_0}px 0px`,threshold:0});return K0.observe(d),()=>K0.disconnect()},[i,$,j,N,p]);let e=P(p);if(e.current=p,m(()=>{if(i)return;if(!N?.current)return;let{scrollTop:d,scrollHeight:j0,clientHeight:_0}=N.current,K0=M?j0-_0-d:d,V0=Math.max(300,_0);if(K0<V0)e.current?.()},[i,_,$,M,N]),m(()=>{if(!N?.current)return;if(!$||J)return;let{scrollTop:d,scrollHeight:j0,clientHeight:_0}=N.current,K0=M?j0-_0-d:d,V0=Math.max(300,_0);if(j0<=_0+1||K0<V0)e.current?.()},[_,$,J,M,N]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let f=_.slice().sort((d,j0)=>d.id-j0.id),R=(d)=>{let j0=d?.data?.thread_id;if(j0===null||j0===void 0||j0==="")return null;let _0=Number(j0);return Number.isFinite(_0)?_0:null},H=new Map;for(let d=0;d<f.length;d+=1){let j0=f[d],_0=Number(j0?.id),K0=R(j0);if(K0!==null){let V0=H.get(K0)||{anchorIndex:-1,replyIndexes:[]};V0.replyIndexes.push(d),H.set(K0,V0)}else if(Number.isFinite(_0)){let V0=H.get(_0)||{anchorIndex:-1,replyIndexes:[]};V0.anchorIndex=d,H.set(_0,V0)}}let x=new Map;for(let[d,j0]of H.entries()){let _0=new Set;if(j0.anchorIndex>=0)_0.add(j0.anchorIndex);for(let K0 of j0.replyIndexes)_0.add(K0);x.set(d,Array.from(_0).sort((K0,V0)=>K0-V0))}let c=f.map((d,j0)=>{let _0=R(d);if(_0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let K0=x.get(_0);if(!K0||K0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let V0=K0.indexOf(j0);if(V0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:V0>0,hasThreadNext:V0<K0.length-1}}),G0=L`<div class="timeline-sentinel" ref=${k}></div>`;return L`
        <div class="timeline ${M?"reverse":"normal"}" ref=${N} onScroll=${s}>
            <div class="timeline-content">
                ${M?G0:null}
                ${f.map((d,j0)=>{let _0=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),K0=I?.has?.(d.id),V0=c[j0]||{};return L`
                    <${T7}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${_0}
                        isThreadPrev=${V0.hasThreadPrev}
                        isThreadNext=${V0.hasThreadNext}
                        isRemoving=${K0}
                        highlightQuery=${E}
                        agentName=${N7(d.data?.agent_id,V||{})}
                        agentAvatarUrl=${V7(d.data?.agent_id,V||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Z?.(d)}
                        onHashtagClick=${Q}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${G}
                        onOpenWidget=${K}
                        onDelete=${O}
                    />
                `})}
                ${M?null:G0}
            </div>
        </div>
    `}class C7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Q=Z.canHandle(_);if(Q===!1||Q===0)continue;let Y=Q===!0?0:typeof Q==="number"?Q:0;if(Y>j)j=Y,$=Z}catch(Q){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Q)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var n0=new C7;var i8=null,U$=null;function jq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function S7(){if(U$)return Promise.resolve(U$);if(!i8)i8=import(jq()).then((_)=>{return U$=_,_}).catch((_)=>{throw i8=null,_});return i8}class x7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await S7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var L$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new x7(_,$)}};function F$(){S7().catch(()=>{})}var t4="piclaw://terminal";var Zq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Qq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},n8=null,z$=null;function Yq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function qq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Q,Y)=>{let q=Q instanceof Request?Q.url:Q instanceof URL?Q.href:String(Q);if(!Yq(q))return $(Q,Y);if(Q instanceof Request)return $(new Request(j,Q));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Gq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!n8)n8=qq(()=>Promise.resolve($.init?.())).catch((j)=>{throw n8=null,j});return await n8,$}async function Xq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!z$)z$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await z$}async function Kq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Nq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Vq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function L4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Bq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function R7(){let _=Vq(),$=_?Qq:Zq,j=L4("--bg-primary",_?"#000000":"#ffffff"),Z=L4("--text-primary",_?"#e7e9ea":"#0f1419"),Q=L4("--text-secondary",_?"#71767b":"#536471"),Y=L4("--accent-color","#1d9bf0"),q=L4("--danger-color",_?"#ff7b72":"#cf222e"),G=L4("--success-color",_?"#7ee787":"#1a7f37"),K=L4("--bg-hover",_?"#1d1f23":"#e8ebed"),X=L4("--border-color",_?"#2f3336":"#eff3f4"),N=L4("--accent-soft-strong",Bq(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:N,selectionForeground:Z,black:K,red:q,green:G,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class H${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Q=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Q)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Gq();if(await Xq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:R7()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=R7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Q=this.bodyEl.querySelector("canvas");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Q=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Q?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Q?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Q}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Kq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Nq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Q})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Q}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Q=null;try{Q=JSON.parse(String(Z.data))}catch{Q={type:"output",data:String(Z.data)}}if(Q?.type==="output"&&typeof Q.data==="string"){_.write?.(Q.data);return}if(Q?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var J$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new H$(_,$)}},O$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new H$(_,$)}};function F4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Q)=>{try{return Boolean($.matchMedia(Q)?.matches)}catch{return!1}})}function o8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Q=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Q>1||q)}function y7(_,$={}){if(F4($))return null;if(o8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Wq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function D$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function A$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function E$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function M$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function z4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Q=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Q),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function w7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Q=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Q),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function f7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Q=String($||"").trim();if(!Q)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Q),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,G]of Object.entries(Y)){let K=String(q||"").trim();if(!K)continue;if(G===null||G===void 0||G==="")Z.searchParams.delete(K);else Z.searchParams.set(K,String(G))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function Wq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Uq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function v7(_,$={}){if(F4($))return null;if(o8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Uq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function t5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Lq(_){try{return JSON.parse(_)}catch{return null}}function Fq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function zq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class I${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=zq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||Lq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=Fq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var e5=()=>{throw Error("Operation requires compiling with --exportRuntime")},Hq=typeof BigUint64Array<"u",_8=Symbol();var Jq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function b7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return Jq.decode(Z)}catch{let Q="",Y=0;while(j-Y>1024)Q+=String.fromCharCode(...Z.subarray(Y,Y+=1024));return Q+String.fromCharCode(...Z.subarray(Y))}}function g7(_){let $={};function j(Q,Y){if(!Q)return"<yet unknown>";return b7(Q.buffer,Y)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Y,q,G,K){let X=$.memory||Z.memory;throw Error(`abort: ${j(X,Y)} at ${j(X,q)}:${G}:${K}`)},Z.trace=Z.trace||function(Y,q,...G){let K=$.memory||Z.memory;console.log(`trace: ${j(K,Y)}${q?" ":""}${G.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function u7(_,$){let j=$.exports,Z=j.memory,Q=j.table,Y=j.__new||e5,q=j.__pin||e5,G=j.__unpin||e5,K=j.__collect||e5,X=j.__rtti_base,N=X?(H)=>H[X>>>2]:e5;_.__new=Y,_.__pin=q,_.__unpin=G,_.__collect=K;function V(H){let x=new Uint32Array(Z.buffer);if((H>>>=0)>=N(x))throw Error(`invalid id: ${H}`);return x[(X+4>>>2)+H]}function W(H){let x=V(H);if(!(x&7))throw Error(`not an array: ${H}, flags=${x}`);return x}function O(H){return 31-Math.clz32(H>>>6&31)}function M(H){if(H==null)return 0;let x=H.length,c=Y(x<<1,2),G0=new Uint16Array(Z.buffer);for(let d=0,j0=c>>>1;d<x;++d)G0[j0+d]=H.charCodeAt(d);return c}_.__newString=M;function I(H){if(H==null)return 0;let x=new Uint8Array(H),c=Y(x.length,1);return new Uint8Array(Z.buffer).set(x,c),c}_.__newArrayBuffer=I;function E(H){if(!H)return null;let x=Z.buffer;if(new Uint32Array(x)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return b7(x,H)}_.__getString=E;function J(H,x,c){let G0=Z.buffer;if(c)switch(H){case 2:return new Float32Array(G0);case 3:return new Float64Array(G0)}else switch(H){case 0:return new(x?Int8Array:Uint8Array)(G0);case 1:return new(x?Int16Array:Uint16Array)(G0);case 2:return new(x?Int32Array:Uint32Array)(G0);case 3:return new(x?BigInt64Array:BigUint64Array)(G0)}throw Error(`unsupported align: ${H}`)}function D(H,x=0){let c=x,G0=W(H),d=O(G0),j0=typeof c!=="number",_0=j0?c.length:c,K0=Y(_0<<d,G0&4?H:1),V0;if(G0&4)V0=K0;else{q(K0);let B0=Y(G0&2?16:12,H);G(K0);let J0=new Uint32Array(Z.buffer);if(J0[B0+0>>>2]=K0,J0[B0+4>>>2]=K0,J0[B0+8>>>2]=_0<<d,G0&2)J0[B0+12>>>2]=_0;V0=B0}if(j0){let B0=J(d,G0&2048,G0&4096),J0=K0>>>d;if(G0&16384)for(let E0=0;E0<_0;++E0)B0[J0+E0]=c[E0];else B0.set(c,J0)}return V0}_.__newArray=D;function k(H){let x=new Uint32Array(Z.buffer),c=x[H+-8>>>2],G0=W(c),d=O(G0),j0=G0&4?H:x[H+4>>>2],_0=G0&2?x[H+12>>>2]:x[j0+-4>>>2]>>>d;return J(d,G0&2048,G0&4096).subarray(j0>>>=d,j0+_0)}_.__getArrayView=k;function i(H){let x=k(H),c=x.length,G0=Array(c);for(let d=0;d<c;d++)G0[d]=x[d];return G0}_.__getArray=i;function p(H){let x=Z.buffer,c=new Uint32Array(x)[H+-4>>>2];return x.slice(H,H+c)}_.__getArrayBuffer=p;function s(H){if(!Q)throw Error("Operation requires compiling with --exportTable");let x=new Uint32Array(Z.buffer)[H>>>2];return Q.get(x)}_.__getFunction=s;function e(H,x,c){return new H(f(H,x,c))}function f(H,x,c){let G0=Z.buffer,d=new Uint32Array(G0);return new H(G0,d[c+4>>>2],d[c+8>>>2]>>>x)}function R(H,x,c){_[`__get${x}`]=e.bind(null,H,c),_[`__get${x}View`]=f.bind(null,H,c)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{R(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),Hq)[BigUint64Array,BigInt64Array].forEach((H)=>{R(H,H.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Q,Dq(j,_)}function m7(_){return typeof Response<"u"&&_ instanceof Response}function Oq(_){return _ instanceof WebAssembly.Module}async function k$(_,$={}){if(m7(_=await _))return s8(_,$);let j=Oq(_)?_:await WebAssembly.compile(_),Z=g7($),Q=await WebAssembly.instantiate(j,$),Y=u7(Z,Q);return{module:j,instance:Q,exports:Y}}async function s8(_,$={}){if(!WebAssembly.instantiateStreaming)return k$(m7(_=await _)?_.arrayBuffer():_,$);let j=g7($),Z=await WebAssembly.instantiateStreaming(_,$),Q=u7(j,Z.instance);return{...Z,exports:Q}}function Dq(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Q=_[Z],Y=Z.split("."),q=$;while(Y.length>1){let X=Y.shift();if(!Object.hasOwn(q,X))q[X]={};q=q[X]}let G=Y[0],K=G.indexOf("#");if(K>=0){let X=G.substring(0,K),N=q[X];if(typeof N>"u"||!N.prototype){let V=function(...W){return V.wrap(V.prototype.constructor(0,...W))};if(V.prototype={valueOf(){return this[_8]}},V.wrap=function(W){return Object.create(V.prototype,{[_8]:{value:W,writable:!1}})},N)Object.getOwnPropertyNames(N).forEach((W)=>Object.defineProperty(V,W,Object.getOwnPropertyDescriptor(N,W)));q[X]=V}if(G=G.substring(K+1),q=q[X].prototype,/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4))){let V=_[Z.replace("set:","get:")],W=_[Z.replace("get:","set:")];Object.defineProperty(q,G,{get(){return V(this[_8])},set(O){W(this[_8],O)},enumerable:!0})}}else if(G==="constructor")(q[G]=function(...V){return j(V.length),Q(...V)}).original=Q;else(q[G]=function(...V){return j(V.length),Q(this[_8],...V)}).original=Q}else if(/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4)))Object.defineProperty(q,G,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Q==="function"&&Q!==j)(q[G]=(...X)=>{return j(X.length),Q(...X)}).original=Q;else q[G]=Q}return $}var Eq="/static/js/vendor/remote-display-decoder.wasm",r8=null;function h7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function p7(){if(r8)return r8;return r8=(async()=>{try{let Z=function(Q,Y,q,G,K,X,N){let V=h7(Y),W=j.__pin(j.__newArrayBuffer(V));try{return j[Q](W,q,G,K,X,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift)}finally{j.__unpin(W);try{j.__collect()}catch{}}},_=await fetch(Eq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof s8==="function"?await s8(_,{}):await k$(await _.arrayBuffer(),{})).exports;for(let Q of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Q]!=="function")throw Error(`${Q} export is missing.`);return{initFramebuffer(Q,Y){j.initFramebuffer(Q,Y)},getFramebuffer(){let Q=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Q,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Q,Y,q,G,K,X){return Z("processRawRect",Q,Y,q,G,K,X)},processCopyRect(Q,Y,q,G,K,X){return j.processCopyRect(Q,Y,q,G,K,X)},processRreRect(Q,Y,q,G,K,X){return Z("processRreRect",Q,Y,q,G,K,X)},processHextileRect(Q,Y,q,G,K,X){return Z("processHextileRect",Q,Y,q,G,K,X)},processZrleTileData(Q,Y,q,G,K,X){return Z("processZrleTileData",Q,Y,q,G,K,X)},decodeRawRectToRgba(Q,Y,q,G){let K=h7(Q),X=j.__pin(j.__newArrayBuffer(K));try{let N=j.__pin(j.decodeRawRectToRgba(X,Y,q,G.bitsPerPixel,G.bigEndian?1:0,G.trueColor?1:0,G.redMax,G.greenMax,G.blueMax,G.redShift,G.greenShift,G.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(N))}finally{j.__unpin(N)}}finally{j.__unpin(X);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),r8}function D5(_,$,j){return Math.max($,Math.min(j,_))}function a8(_,$,j){let Z=new Uint8Array(6),Q=D5(Math.floor(Number($||0)),0,65535),Y=D5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=D5(Math.floor(Number(_||0)),0,255),Z[2]=Q>>8&255,Z[3]=Q&255,Z[4]=Y>>8&255,Z[5]=Y&255,Z}function P$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function c7(_,$,j,Z,Q){let Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(Q||0))),G=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),X=(Number(_||0)-Number(j?.left||0))/G,N=(Number($||0)-Number(j?.top||0))/K;return{x:D5(Math.floor(X*Y),0,Math.max(0,Y-1)),y:D5(Math.floor(N*q),0,Math.max(0,q-1))}}function l7(_,$,j,Z=0){let Q=Number(_)<0?8:16,Y=D5(Number(Z||0)|Q,0,255);return[a8(Y,$,j),a8(Number(Z||0),$,j)]}function d7(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function $8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function i7(_,$,j,Z){let Q=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),G=Math.max(1,Math.floor(Number(Z||0))),K=Math.min(Q/q,Y/G);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var T$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)T$[`F${_}`]=65470+(_-1);function C$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(T$,Y))return T$[Y];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Q=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Q){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var b1=Uint8Array,D_=Uint16Array,g$=Int32Array,t8=new b1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),e8=new b1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),w$=new b1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),r7=function(_,$){var j=new D_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Q=new g$(j[30]);for(var Z=1;Z<30;++Z)for(var Y=j[Z];Y<j[Z+1];++Y)Q[Y]=Y-j[Z]<<5|Z;return{b:j,r:Q}},a7=r7(t8,2),t7=a7.b,f$=a7.r;t7[28]=258,f$[258]=28;var e7=r7(e8,0),Mq=e7.b,n7=e7.r,v$=new D_(32768);for(d0=0;d0<32768;++d0)Z4=(d0&43690)>>1|(d0&21845)<<1,Z4=(Z4&52428)>>2|(Z4&13107)<<2,Z4=(Z4&61680)>>4|(Z4&3855)<<4,v$[d0]=((Z4&65280)>>8|(Z4&255)<<8)>>1;var Z4,d0,Q4=function(_,$,j){var Z=_.length,Q=0,Y=new D_($);for(;Q<Z;++Q)if(_[Q])++Y[_[Q]-1];var q=new D_($);for(Q=1;Q<$;++Q)q[Q]=q[Q-1]+Y[Q-1]<<1;var G;if(j){G=new D_(1<<$);var K=15-$;for(Q=0;Q<Z;++Q)if(_[Q]){var X=Q<<4|_[Q],N=$-_[Q],V=q[_[Q]-1]++<<N;for(var W=V|(1<<N)-1;V<=W;++V)G[v$[V]>>K]=X}}else{G=new D_(Z);for(Q=0;Q<Z;++Q)if(_[Q])G[Q]=v$[q[_[Q]-1]++]>>15-_[Q]}return G},y4=new b1(288);for(d0=0;d0<144;++d0)y4[d0]=8;var d0;for(d0=144;d0<256;++d0)y4[d0]=9;var d0;for(d0=256;d0<280;++d0)y4[d0]=7;var d0;for(d0=280;d0<288;++d0)y4[d0]=8;var d0,Y8=new b1(32);for(d0=0;d0<32;++d0)Y8[d0]=5;var d0,Iq=Q4(y4,9,0),kq=Q4(y4,9,1),Tq=Q4(Y8,5,0),Pq=Q4(Y8,5,1),S$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},o_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},x$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},u$=function(_){return(_+7)/8|0},Q8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new b1(_.subarray($,j))};var Cq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],W_=function(_,$,j){var Z=Error($||Cq[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,W_);if(!j)throw Z;return Z},Sq=function(_,$,j,Z){var Q=_.length,Y=Z?Z.length:0;if(!Q||$.f&&!$.l)return j||new b1(0);var q=!j,G=q||$.i!=2,K=$.i;if(q)j=new b1(Q*3);var X=function(j1){var z0=j.length;if(j1>z0){var l0=new b1(Math.max(z0*2,j1));l0.set(j),j=l0}},N=$.f||0,V=$.p||0,W=$.b||0,O=$.l,M=$.d,I=$.m,E=$.n,J=Q*8;do{if(!O){N=o_(_,V,1);var D=o_(_,V+1,3);if(V+=3,!D){var k=u$(V)+4,i=_[k-4]|_[k-3]<<8,p=k+i;if(p>Q){if(K)W_(0);break}if(G)X(W+i);j.set(_.subarray(k,p),W),$.b=W+=i,$.p=V=p*8,$.f=N;continue}else if(D==1)O=kq,M=Pq,I=9,E=5;else if(D==2){var s=o_(_,V,31)+257,e=o_(_,V+10,15)+4,f=s+o_(_,V+5,31)+1;V+=14;var R=new b1(f),H=new b1(19);for(var x=0;x<e;++x)H[w$[x]]=o_(_,V+x*3,7);V+=e*3;var c=S$(H),G0=(1<<c)-1,d=Q4(H,c,1);for(var x=0;x<f;){var j0=d[o_(_,V,G0)];V+=j0&15;var k=j0>>4;if(k<16)R[x++]=k;else{var _0=0,K0=0;if(k==16)K0=3+o_(_,V,3),V+=2,_0=R[x-1];else if(k==17)K0=3+o_(_,V,7),V+=3;else if(k==18)K0=11+o_(_,V,127),V+=7;while(K0--)R[x++]=_0}}var V0=R.subarray(0,s),B0=R.subarray(s);I=S$(V0),E=S$(B0),O=Q4(V0,I,1),M=Q4(B0,E,1)}else W_(1);if(V>J){if(K)W_(0);break}}if(G)X(W+131072);var J0=(1<<I)-1,E0=(1<<E)-1,M0=V;for(;;M0=V){var _0=O[x$(_,V)&J0],o0=_0>>4;if(V+=_0&15,V>J){if(K)W_(0);break}if(!_0)W_(2);if(o0<256)j[W++]=o0;else if(o0==256){M0=V,O=null;break}else{var R0=o0-254;if(o0>264){var x=o0-257,T0=t8[x];R0=o_(_,V,(1<<T0)-1)+t7[x],V+=T0}var s0=M[x$(_,V)&E0],r0=s0>>4;if(!s0)W_(3);V+=s0&15;var B0=Mq[r0];if(r0>3){var T0=e8[r0];B0+=x$(_,V)&(1<<T0)-1,V+=T0}if(V>J){if(K)W_(0);break}if(G)X(W+131072);var h0=W+R0;if(W<B0){var t0=Y-B0,p0=Math.min(B0,h0);if(t0+W<0)W_(3);for(;W<p0;++W)j[W]=Z[t0+W]}for(;W<h0;++W)j[W]=j[W-B0]}}if($.l=O,$.p=M0,$.b=W,$.f=N,O)N=1,$.m=I,$.d=M,$.n=E}while(!N);return W!=j.length&&q?Q8(j,0,W):j.subarray(0,W)},H4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},j8=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},R$=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Q=j.length,Y=j.slice();if(!Q)return{t:$9,l:0};if(Q==1){var q=new b1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(p,s){return p.f-s.f}),j.push({s:-1,f:25001});var G=j[0],K=j[1],X=0,N=1,V=2;j[0]={s:-1,f:G.f+K.f,l:G,r:K};while(N!=Q-1)G=j[j[X].f<j[V].f?X++:V++],K=j[X!=N&&j[X].f<j[V].f?X++:V++],j[N++]={s:-1,f:G.f+K.f,l:G,r:K};var W=Y[0].s;for(var Z=1;Z<Q;++Z)if(Y[Z].s>W)W=Y[Z].s;var O=new D_(W+1),M=b$(j[N-1],O,0);if(M>$){var Z=0,I=0,E=M-$,J=1<<E;Y.sort(function(s,e){return O[e.s]-O[s.s]||s.f-e.f});for(;Z<Q;++Z){var D=Y[Z].s;if(O[D]>$)I+=J-(1<<M-O[D]),O[D]=$;else break}I>>=E;while(I>0){var k=Y[Z].s;if(O[k]<$)I-=1<<$-O[k]++-1;else++Z}for(;Z>=0&&I;--Z){var i=Y[Z].s;if(O[i]==$)--O[i],++I}M=$}return{t:new b1(O),l:M}},b$=function(_,$,j){return _.s==-1?Math.max(b$(_.l,$,j+1),b$(_.r,$,j+1)):$[_.s]=j},o7=function(_){var $=_.length;while($&&!_[--$]);var j=new D_(++$),Z=0,Q=_[0],Y=1,q=function(K){j[Z++]=K};for(var G=1;G<=$;++G)if(_[G]==Q&&G!=$)++Y;else{if(!Q&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Q),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Q);Y=1,Q=_[G]}return{c:j.subarray(0,Z),n:$}},Z8=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},_9=function(_,$,j){var Z=j.length,Q=u$($+2);_[Q]=Z&255,_[Q+1]=Z>>8,_[Q+2]=_[Q]^255,_[Q+3]=_[Q+1]^255;for(var Y=0;Y<Z;++Y)_[Q+Y+4]=j[Y];return(Q+4+Z)*8},s7=function(_,$,j,Z,Q,Y,q,G,K,X,N){H4($,N++,j),++Q[256];var V=R$(Q,15),W=V.t,O=V.l,M=R$(Y,15),I=M.t,E=M.l,J=o7(W),D=J.c,k=J.n,i=o7(I),p=i.c,s=i.n,e=new D_(19);for(var f=0;f<D.length;++f)++e[D[f]&31];for(var f=0;f<p.length;++f)++e[p[f]&31];var R=R$(e,7),H=R.t,x=R.l,c=19;for(;c>4&&!H[w$[c-1]];--c);var G0=X+5<<3,d=Z8(Q,y4)+Z8(Y,Y8)+q,j0=Z8(Q,W)+Z8(Y,I)+q+14+3*c+Z8(e,H)+2*e[16]+3*e[17]+7*e[18];if(K>=0&&G0<=d&&G0<=j0)return _9($,N,_.subarray(K,K+X));var _0,K0,V0,B0;if(H4($,N,1+(j0<d)),N+=2,j0<d){_0=Q4(W,O,0),K0=W,V0=Q4(I,E,0),B0=I;var J0=Q4(H,x,0);H4($,N,k-257),H4($,N+5,s-1),H4($,N+10,c-4),N+=14;for(var f=0;f<c;++f)H4($,N+3*f,H[w$[f]]);N+=3*c;var E0=[D,p];for(var M0=0;M0<2;++M0){var o0=E0[M0];for(var f=0;f<o0.length;++f){var R0=o0[f]&31;if(H4($,N,J0[R0]),N+=H[R0],R0>15)H4($,N,o0[f]>>5&127),N+=o0[f]>>12}}}else _0=Iq,K0=y4,V0=Tq,B0=Y8;for(var f=0;f<G;++f){var T0=Z[f];if(T0>255){var R0=T0>>18&31;if(j8($,N,_0[R0+257]),N+=K0[R0+257],R0>7)H4($,N,T0>>23&31),N+=t8[R0];var s0=T0&31;if(j8($,N,V0[s0]),N+=B0[s0],s0>3)j8($,N,T0>>5&8191),N+=e8[s0]}else j8($,N,_0[T0]),N+=K0[T0]}return j8($,N,_0[256]),N+K0[256]},xq=new g$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),$9=new b1(0),Rq=function(_,$,j,Z,Q,Y){var q=Y.z||_.length,G=new b1(Z+q+5*(1+Math.ceil(q/7000))+Q),K=G.subarray(Z,G.length-Q),X=Y.l,N=(Y.r||0)&7;if($){if(N)K[0]=Y.r>>3;var V=xq[$-1],W=V>>13,O=V&8191,M=(1<<j)-1,I=Y.p||new D_(32768),E=Y.h||new D_(M+1),J=Math.ceil(j/3),D=2*J,k=function(Z1){return(_[Z1]^_[Z1+1]<<J^_[Z1+2]<<D)&M},i=new g$(25000),p=new D_(288),s=new D_(32),e=0,f=0,R=Y.i||0,H=0,x=Y.w||0,c=0;for(;R+2<q;++R){var G0=k(R),d=R&32767,j0=E[G0];if(I[d]=j0,E[G0]=d,x<=R){var _0=q-R;if((e>7000||H>24576)&&(_0>423||!X)){N=s7(_,K,0,i,p,s,f,H,c,R-c,N),H=e=f=0,c=R;for(var K0=0;K0<286;++K0)p[K0]=0;for(var K0=0;K0<30;++K0)s[K0]=0}var V0=2,B0=0,J0=O,E0=d-j0&32767;if(_0>2&&G0==k(R-E0)){var M0=Math.min(W,_0)-1,o0=Math.min(32767,R),R0=Math.min(258,_0);while(E0<=o0&&--J0&&d!=j0){if(_[R+V0]==_[R+V0-E0]){var T0=0;for(;T0<R0&&_[R+T0]==_[R+T0-E0];++T0);if(T0>V0){if(V0=T0,B0=E0,T0>M0)break;var s0=Math.min(E0,T0-2),r0=0;for(var K0=0;K0<s0;++K0){var h0=R-E0+K0&32767,t0=I[h0],p0=h0-t0&32767;if(p0>r0)r0=p0,j0=h0}}}d=j0,j0=I[d],E0+=d-j0&32767}}if(B0){i[H++]=268435456|f$[V0]<<18|n7[B0];var j1=f$[V0]&31,z0=n7[B0]&31;f+=t8[j1]+e8[z0],++p[257+j1],++s[z0],x=R+V0,++e}else i[H++]=_[R],++p[_[R]]}}for(R=Math.max(R,x);R<q;++R)i[H++]=_[R],++p[_[R]];if(N=s7(_,K,X,i,p,s,f,H,c,R-c,N),!X)Y.r=N&7|K[N/8|0]<<3,N-=7,Y.h=E,Y.p=I,Y.i=R,Y.w=x}else{for(var R=Y.w||0;R<q+X;R+=65535){var l0=R+65535;if(l0>=q)K[N/8|0]=X,l0=q;N=_9(K,N+1,_.subarray(R,l0))}Y.i=q}return Q8(G,0,Z+u$(N)+Q)};var j9=function(){var _=1,$=0;return{p:function(j){var Z=_,Q=$,Y=j.length|0;for(var q=0;q!=Y;){var G=Math.min(q+2655,Y);for(;q<G;++q)Q+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),Q=(Q&65535)+15*(Q>>16)}_=Z,$=Q},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},yq=function(_,$,j,Z,Q){if(!Q){if(Q={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new b1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Q.w=Y.length}}return Rq(_,$.level==null?6:$.level,$.mem==null?Q.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Q)};var Z9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var wq=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Q=j9();Q.p($.dictionary),Z9(_,2,Q.d())}},fq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)W_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)W_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var y$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new b1(32768),this.p=new b1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)W_(5);if(this.d)W_(4);if(!this.p.length)this.p=$;else if($.length){var j=new b1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=Sq(this.p,this.s,this.o);this.ondata(Q8(Z,j,this.s.b),this.d),this.o=Q8(Z,this.s.b-32768),this.s.b=this.o.length,this.p=Q8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function Q9(_,$){if(!$)$={};var j=j9();j.p(_);var Z=yq(_,$,$.dictionary?6:2,4);return wq(Z,$),Z9(Z,Z.length-4,j.d()),Z}var Y9=function(){function _($,j){y$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(y$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(fq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)W_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}y$.prototype.c.call(this,j)},_}();var vq=typeof TextDecoder<"u"&&new TextDecoder,bq=0;try{vq.decode($9,{stream:!0}),bq=1}catch(_){}var gq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],uq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],mq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],hq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],pq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],cq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],lq=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],dq=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],X9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;X9[_]=$}function K9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function N9(_){let $=0n,j=K9(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function iq(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Q=$-1;Q>=0;Q-=1)j[Q]=Number(Z&0xffn),Z>>=8n;return j}function A5(_,$,j){let Z=0n;for(let Q of $){let Y=BigInt(_)>>BigInt(j-Q)&1n;Z=Z<<1n|Y}return Z}function q9(_,$){let j=28n,Z=(1n<<j)-1n,Q=BigInt($%28);return(_<<Q|_>>j-Q)&Z}function nq(_){let $=A5(N9(_),pq,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Q=[];for(let Y of lq){j=q9(j,Y),Z=q9(Z,Y);let q=j<<28n|Z;Q.push(A5(q,cq,56))}return Q}function oq(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Q=Number(_>>Z&0x3fn),Y=(Q&32)>>4|Q&1,q=Q>>1&15;$=$<<4n|BigInt(dq[j][Y][q])}return $}function sq(_,$){let j=A5(_,mq,32)^BigInt($),Z=oq(j);return A5(Z,hq,32)}function G9(_,$){let j=nq($),Z=A5(N9(_),gq,64),Q=Z>>32n&0xffffffffn,Y=Z&0xffffffffn;for(let G of j){let K=Y,X=(Q^sq(Y,G))&0xffffffffn;Q=K,Y=X}let q=Y<<32n|Q;return iq(A5(q,uq,64),8)}function rq(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Q=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=X9[Q]}return j}function V9(_,$){let j=K9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=rq(_),Q=new Uint8Array(16);return Q.set(G9(j.slice(0,8),Z),0),Q.set(G9(j.slice(8,16),Z),8),Q}var s_="vnc";function aq(_){return Number(_)}function tq(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Q)=>Q.trim()).filter((Q)=>Q.length>0):[],j=[],Z=new Set;for(let Q of $){let Y=aq(Q);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function I5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function eq(_,$){let j=I5(_),Z=I5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Q=new Uint8Array(j.byteLength+Z.byteLength);return Q.set(j,0),Q.set(Z,j.byteLength),Q}function _G(_){let $=0;for(let Q of _||[])$+=Q?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Q of _||[]){let Y=I5(Q);j.set(Y,Z),Z+=Y.byteLength}return j}function $G(){return(_)=>{let $=I5(_);try{let j=[],Z=new Y9((Q)=>{j.push(new Uint8Array(Q))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return _G(j)}catch(j){try{let Z=Q9($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Q=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Q}`)}}}}function jG(_){return new TextEncoder().encode(String(_||""))}function E5(_){return new TextDecoder().decode(I5(_))}function ZG(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function QG(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function B9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function YG(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function qG(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Q=4;for(let Y of $)Z.setInt32(Q,Number(Y||0),!1),Q+=4;return new Uint8Array(j)}function W9(_,$,j,Z=0,Q=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,Q,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function M5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function L9(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function GG(_,$,j,Z){let Q=Z||k5,Y=I5(_),q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8)),G=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<G)throw Error(`Incomplete raw rectangle payload: expected ${G} byte(s), got ${Y.byteLength}`);if(!Q.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),X=0,N=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let W=L9(Y,X,q,Q.bigEndian),O=M5(W>>>Q.redShift&Q.redMax,Q.redMax),M=M5(W>>>Q.greenShift&Q.greenMax,Q.greenMax),I=M5(W>>>Q.blueShift&Q.blueMax,Q.blueMax);K[N]=O,K[N+1]=M,K[N+2]=I,K[N+3]=255,X+=q,N+=4}return K}function J4(_,$,j){let Z=j||k5,Q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Q)return null;let Y=L9(_,$,Q,Z.bigEndian);return{rgba:[M5(Y>>>Z.redShift&Z.redMax,Z.redMax),M5(Y>>>Z.greenShift&Z.greenMax,Z.greenMax),M5(Y>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Q}}function w4(_,$,j,Z,Q,Y,q){if(!q)return;for(let G=0;G<Y;G+=1)for(let K=0;K<Q;K+=1){let X=((Z+G)*$+(j+K))*4;_[X]=q[0],_[X+1]=q[1],_[X+2]=q[2],_[X+3]=q[3]}}function F9(_,$,j,Z,Q,Y,q){for(let G=0;G<Y;G+=1){let K=G*Q*4,X=((Z+G)*$+j)*4;_.set(q.subarray(K,K+Q*4),X)}}function U9(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Q=_[j++];if(Z+=Q,Q!==255)break}return{consumed:j-$,runLength:Z}}function XG(_,$,j,Z,Q,Y,q){let G=Q||k5,K=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let X=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+X)return null;let N=_.slice($+4,$+4+X),V;try{V=q(N)}catch{return{consumed:4+X,skipped:!0}}let W=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let M=0;M<Z;M+=64){let I=Math.min(64,Z-M);for(let E=0;E<j;E+=64){let J=Math.min(64,j-E);if(V.byteLength<W+1)return null;let D=V[W++],k=D&127,i=(D&128)!==0;if(!i&&k===0){let p=J*I*K;if(V.byteLength<W+p)return null;let s=Y(V.slice(W,W+p),J,I,G);W+=p,F9(O,j,E,M,J,I,s);continue}if(!i&&k===1){let p=J4(V,W,G);if(!p)return null;W+=p.bytesPerPixel,w4(O,j,E,M,J,I,p.rgba);continue}if(!i&&k>1&&k<=16){let p=[];for(let R=0;R<k;R+=1){let H=J4(V,W,G);if(!H)return null;W+=H.bytesPerPixel,p.push(H.rgba)}let s=k<=2?1:k<=4?2:4,e=Math.ceil(J*s/8),f=e*I;if(V.byteLength<W+f)return null;for(let R=0;R<I;R+=1){let H=W+R*e;for(let x=0;x<J;x+=1){let c=x*s,G0=H+(c>>3),d=8-s-(c&7),j0=V[G0]>>d&(1<<s)-1;w4(O,j,E+x,M+R,1,1,p[j0])}}W+=f;continue}if(i&&k===0){let p=0,s=0;while(s<I){let e=J4(V,W,G);if(!e)return null;W+=e.bytesPerPixel;let f=U9(V,W);if(!f)return null;W+=f.consumed;for(let R=0;R<f.runLength;R+=1)if(w4(O,j,E+p,M+s,1,1,e.rgba),p+=1,p>=J){if(p=0,s+=1,s>=I)break}}continue}if(i&&k>0){let p=[];for(let f=0;f<k;f+=1){let R=J4(V,W,G);if(!R)return null;W+=R.bytesPerPixel,p.push(R.rgba)}let s=0,e=0;while(e<I){if(V.byteLength<W+1)return null;let f=V[W++],R=f,H=1;if(f&128){R=f&127;let c=U9(V,W);if(!c)return null;W+=c.consumed,H=c.runLength}let x=p[R];if(!x)return null;for(let c=0;c<H;c+=1)if(w4(O,j,E+s,M+e,1,1,x),s+=1,s>=J){if(s=0,e+=1,e>=I)break}}continue}return{consumed:4+X,skipped:!0}}}return{consumed:4+X,rgba:O,decompressed:V}}function KG(_,$,j,Z,Q){let Y=Q||k5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),X=4+q+K*(q+8);if(_.byteLength<$+X)return null;let N=$+4,V=J4(_,N,Y);if(!V)return null;N+=V.bytesPerPixel;let W=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);w4(W,j,0,0,j,Z,V.rgba);for(let O=0;O<K;O+=1){let M=J4(_,N,Y);if(!M)return null;if(N+=M.bytesPerPixel,_.byteLength<N+8)return null;let I=new DataView(_.buffer,_.byteOffset+N,8),E=I.getUint16(0,!1),J=I.getUint16(2,!1),D=I.getUint16(4,!1),k=I.getUint16(6,!1);N+=8,w4(W,j,E,J,D,k,M.rgba)}return{consumed:N-$,rgba:W}}function NG(_,$,j,Z,Q,Y){let q=Q||k5,G=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),X=$,N=[0,0,0,255],V=[255,255,255,255];for(let W=0;W<Z;W+=16){let O=Math.min(16,Z-W);for(let M=0;M<j;M+=16){let I=Math.min(16,j-M);if(_.byteLength<X+1)return null;let E=_[X++];if(E&1){let J=I*O*G;if(_.byteLength<X+J)return null;let D=Y(_.slice(X,X+J),I,O,q);X+=J,F9(K,j,M,W,I,O,D);continue}if(E&2){let J=J4(_,X,q);if(!J)return null;N=J.rgba,X+=J.bytesPerPixel}if(w4(K,j,M,W,I,O,N),E&4){let J=J4(_,X,q);if(!J)return null;V=J.rgba,X+=J.bytesPerPixel}if(E&8){if(_.byteLength<X+1)return null;let J=_[X++];for(let D=0;D<J;D+=1){let k=V;if(E&16){let H=J4(_,X,q);if(!H)return null;k=H.rgba,X+=H.bytesPerPixel}if(_.byteLength<X+2)return null;let i=_[X++],p=_[X++],s=i>>4,e=i&15,f=(p>>4)+1,R=(p&15)+1;w4(K,j,M+s,W+e,f,R,k)}}}}return{consumed:X-$,rgba:K}}var k5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class _6{protocol=s_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:GG,this.pipeline=_.pipeline||null,this.encodings=tq(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...k5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:$G()}receive(_){if(_)this.buffer=eq(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Q=this.consume(12),Y=E5(Q),q=ZG(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=QG(q),j.push(jG(this.clientVersionText)),$.push({type:"protocol-version",protocol:s_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Q=this.buffer[0];if(Q===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let X=E5(this.consume(4+K).slice(4));throw Error(X||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Q)break;this.consume(1);let Y=Array.from(this.consume(Q));$.push({type:"security-types",protocol:s_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:s_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+G)break;let K=E5(this.consume(4+G).slice(4));throw Error(K||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:s_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:s_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Q=this.consume(16);j.push(V9(this.password,Q)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let G=E5(this.consume(4+q).slice(4));throw Error(G||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:s_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Q.getUint16(0,!1),q=Q.getUint16(2,!1),G=B9(Q,4),K=Q.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let X=this.consume(24),N=new DataView(X.buffer,X.byteOffset,X.byteLength);if(this.framebufferWidth=N.getUint16(0,!1),this.framebufferHeight=N.getUint16(2,!1),this.serverPixelFormat=B9(N,4),this.serverName=E5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(YG(this.clientPixelFormat)),j.push(qG(this.encodings)),j.push(W9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:s_,width:Y,height:q,name:this.serverName,pixelFormat:G}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Q=this.buffer[0];if(Q===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),G=4,K=[],X=!1,N=!!this.pipeline;for(let W=0;W<q;W+=1){if(this.buffer.byteLength<G+12){X=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,12),M=O.getUint16(0,!1),I=O.getUint16(2,!1),E=O.getUint16(4,!1),J=O.getUint16(6,!1),D=O.getInt32(8,!1);if(G+=12,D===0){let k=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),i=E*J*k;if(this.buffer.byteLength<G+i){X=!0;break}let p=this.buffer.slice(G,G+i);if(G+=i,N)this.pipeline.processRawRect(p,M,I,E,J,this.clientPixelFormat),K.push({kind:"pipeline",x:M,y:I,width:E,height:J});else K.push({kind:"rgba",x:M,y:I,width:E,height:J,rgba:this.decodeRawRect(p,E,J,this.clientPixelFormat)});continue}if(D===2){let k=KG(this.buffer,G,E,J,this.clientPixelFormat);if(!k){X=!0;break}if(N){let i=this.buffer.slice(G,G+k.consumed);this.pipeline.processRreRect(i,M,I,E,J,this.clientPixelFormat),K.push({kind:"pipeline",x:M,y:I,width:E,height:J})}else K.push({kind:"rgba",x:M,y:I,width:E,height:J,rgba:k.rgba});G+=k.consumed;continue}if(D===1){if(this.buffer.byteLength<G+4){X=!0;break}let k=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,4),i=k.getUint16(0,!1),p=k.getUint16(2,!1);if(G+=4,N)this.pipeline.processCopyRect(M,I,E,J,i,p),K.push({kind:"pipeline",x:M,y:I,width:E,height:J});else K.push({kind:"copy",x:M,y:I,width:E,height:J,srcX:i,srcY:p});continue}if(D===16){let k=XG(this.buffer,G,E,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!k){X=!0;break}if(G+=k.consumed,k.skipped)continue;if(N&&k.decompressed)this.pipeline.processZrleTileData(k.decompressed,M,I,E,J,this.clientPixelFormat),K.push({kind:"pipeline",x:M,y:I,width:E,height:J});else K.push({kind:"rgba",x:M,y:I,width:E,height:J,rgba:k.rgba});continue}if(D===5){let k=NG(this.buffer,G,E,J,this.clientPixelFormat,this.decodeRawRect);if(!k){X=!0;break}if(N){let i=this.buffer.slice(G,G+k.consumed);this.pipeline.processHextileRect(i,M,I,E,J,this.clientPixelFormat),K.push({kind:"pipeline",x:M,y:I,width:E,height:J})}else K.push({kind:"rgba",x:M,y:I,width:E,height:J,rgba:k.rgba});G+=k.consumed;continue}if(D===-223){if(this.framebufferWidth=E,this.framebufferHeight=J,N)this.pipeline.initFramebuffer(E,J);K.push({kind:"resize",x:M,y:I,width:E,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(X)break;this.consume(G);let V={type:"framebuffer-update",protocol:s_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(N)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(W9(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Q===2){this.consume(1),$.push({type:"bell",protocol:s_}),Z=!0;continue}if(Q===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let G=E5(this.consume(q));$.push({type:"clipboard",protocol:s_,text:G}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Q}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var Y4="piclaw://vnc";function VG(_){let $=String(_||"");if($===Y4)return null;if(!$.startsWith(`${Y4}/`))return null;let j=$.slice(`${Y4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function e4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function BG(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function WG(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function UG(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function LG(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function FG(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class z9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=VG($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=FG("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                        ${$.map((Q)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${e4(Q.label||Q.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${e4(Q.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Q.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${e4(Q.id)}" data-target-label="${e4(Q.label||Q.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Q=LG(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Q)return;this.authPassword=$8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Q,Q)};this.directHostInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Q of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Q.addEventListener("click",()=>{let Y=Q.getAttribute("data-target-open-tab"),q=Q.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=$8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=$8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Q=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Q}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=i7($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return c7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(a8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=P$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~P$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of l7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(d7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=C$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??C$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Q of _.rects||[])if(Q.kind==="resize")this.ensureCanvasSize(Q.width,Q.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Q=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Q,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new _6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Q of Z.outgoing||[])this.socketBoundary?.send?.(Q);for(let Q of Z.events||[])this.applyRemoteDisplayEvent(Q)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await p7(),Q={};if(Z)Q.pipeline=Z,Q.decodeRawRect=(G,K,X,N)=>Z.decodeRawRectToRgba(G,K,X,N);let Y=$8(this.authPassword);if(Y!==null)Q.password=Y;if(j)Q.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new _6(Q),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new I$({url:UG(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(G)=>{this.applyMetrics(G)},onMessage:(G)=>{this.handleSocketMessage(G)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await BG(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${e4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await WG(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var m$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===Y4||$.startsWith(`${Y4}/`)?9000:!1},mount(_,$){return new z9(_,$)}};function f4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function zG(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Q=Z?.[1]||j,Y=Z?.[2]||"",q=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),X=Q.startsWith("/")?Q:`${G?`${G}/`:""}${Q}`,N=[];for(let W of X.split("/")){if(!W||W===".")continue;if(W===".."){if(N.length>0)N.pop();continue}N.push(W)}let V=N.join("/");return`${I8(V)}${Y}${q}`}function q8(_){return _?.preview||null}function HG(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Q=Z.lastIndexOf(".");if(Q<=0||Q===Z.length-1)return"none";return Z.slice(Q+1)}function JG(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function OG(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${f4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${f4(b_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${f4(a4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${f4(JG($))}</span>`),Z.push(`<span><strong>extension:</strong> ${f4(HG(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${f4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function DG(_){let $=q8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=OG(_,$);if($.kind==="image"){let Z=$.url||($.path?I8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${f4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=O_($.text||"",null,{rewriteImageSrc:(Q)=>zG(Q,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${f4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class h${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=DG(this.context)}getContent(){let _=q8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=q8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var p$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=q8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new h$(_,$)}},c$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return q8(_)||_?.path?1:!1},mount(_,$){return new h$(_,$)}};var AG=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),EG={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},MG={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function J9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function H9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class O9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Q=J9(j),Y=MG[Q]||"\uD83D\uDCC4",q=EG[Q]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${H9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${H9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let K=G.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class D9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Q=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Q)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=J9(_?.path);if(!$||!AG.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new O9(_,$);return new D9(_,$)}};var IG=/\.(csv|tsv)$/i;function A9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class E9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Q=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${A9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${A9(Q)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class M9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var d$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!IG.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new E9(_,$);return new M9(_,$)}};var kG=/\.pdf$/i;function TG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class I9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${TG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let Y=Q.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class k9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var i$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kG.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new I9(_,$);return new k9(_,$)}};var PG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function n$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class T9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Q=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${n$(Q)}" alt="${n$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${n$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class P9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var o$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!PG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new T9(_,$);return new P9(_,$)}};var CG=/\.(mp4|m4v|mov|webm|ogv)$/i;function SG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class C9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${SG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let Y=Q.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!CG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new C9(_,$);return new S9(_,$)}};function xG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function RG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var r$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function x9(_){let $=String(_||"").trim();return $?$:r$}function yG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function wG(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function fG(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(q,G,K,X,N,V){try{if(q&&K!=null&&j({filename:q,format:G,data:K,mimeType:X,base64Encoded:Boolean(N),defaultMode:V}))return}catch(W){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",W)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Q=_.App;if(Q?.prototype&&!Q.prototype.__piclawExportPatched){let Y=Q.prototype.exportFile;Q.prototype.exportFile=function(q,G,K,X,N,V){try{if(G&&j({filename:G,data:q,mimeType:K,base64Encoded:Boolean(X),mode:N,folderId:V}))return}catch(W){console.warn("[drawio-pane] export intercept failed, falling back to native export",W)}return Y.apply(this,arguments)},Q.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Q?.prototype&&Q.prototype.__piclawExportPatched)}catch{return!1}}async function R9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${wG(j)}`}class y9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${RG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Q);let Y=Q.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class w9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=yG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Q=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(fG(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=r$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await R9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await R9(_,"image/png");else this.xmlData=x9(await _.text());else if(_.status===404)this.xmlData=r$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?x9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var a$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!xG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new y9(_,$);return new w9(_,$)}};var vG=/\.mindmap\.ya?ml$/i,t$=String(Date.now());function f9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function e$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Q,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Q(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function bG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function gG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Z)}class v9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Q.innerHTML=`
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
            </div>`,_.appendChild(Q),Q.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class b9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(f9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,bG("/static/css/mindmap.css"),await Promise.all([e$("/static/js/vendor/d3-mindmap.min.js?v="+t$),e$("/static/js/vendor/js-yaml.min.js?v="+t$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),gG(this.mindmapEl);let j=f9(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await e$("/static/js/vendor/mindmap-editor.js?v="+t$),this.disposed)return;let Q=window.__mindmapEditor;if(!Q)throw Error("__mindmapEditor not found");if(Q.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Y)}`}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[mindmap] Failed to load mindmap renderer:",Q),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var _3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!vG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new v9(_,$);return new b9(_,$)}};var uG=/\.kanban\.md$/i,mG=String(Date.now());function g9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function hG(){let _=window;if(_.preact)return;_.preact={h:D8,render:x4,Component:V5,createContext:N2},_.preactHooks={useState:h,useEffect:m,useCallback:S,useRef:P,useMemo:v0,useReducer:k6,useContext:W2,useLayoutEffect:u5,useImperativeHandle:B2,useErrorBoundary:L2,useDebugValue:U2},_.htm={bind:()=>L}}function pG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Q,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Q(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function cG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class u9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Q.innerHTML=`
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
        `,_.appendChild(Q),Q.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class m9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(g9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,cG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=g9();try{if(hG(),await pG("/static/js/vendor/kanban-editor.js?v="+mG),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Q)=>{this.lastContent=Q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var $3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!uG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new u9(_,$);return new m9(_,$)}};class h9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Q)=>Q===_?$:Q),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new h9;var $6="workspaceExplorerScale",lG=["compact","default","comfortable"],dG=new Set(lG),iG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function p9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return dG.has(j)?j:$}function j3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function nG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function oG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Z3(_={}){let $=nG(_),j=_.stored?p9(_.stored,$):$;return oG(j,_)}function c9(_){return iG[p9(_)]}function sG(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function Q3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function l9(_,$,j={}){let Z=j?.resolvePane;if(Q3(_,Z))return!0;return sG($)}var rG=60000,o9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function aG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Q3($,(j)=>n0.resolve(j))}function s9(_,$,j,Z=0,Q=[]){if(!j&&o9(_))return Q;if(!_)return Q;if(Q.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)s9(Y,$,j,Z+1,Q);return Q}function d9(_,$,j){if(!_)return"";let Z=[],Q=(Y)=>{if(!j&&o9(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Q(q)};return Q(_),Z.join("|")}function X3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Q=j?new Map(j.map((G)=>[G?.path,G])):new Map,Y=!j||j.length!==Z.length,q=Z.map((G)=>{let K=X3(Q.get(G.path),G);if(K!==Q.get(G.path))Y=!0;return K});return Y?{...$,children:q}:_}function q3(_,$,j){if(!_)return _;if(_.path===$)return X3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Q=_.children.map((Y)=>{let q=q3(Y,$,j);if(q!==Y)Z=!0;return q});return Z?{..._,children:Q}:_}var r9=4,Y3=14,tG=8,eG=16;function a9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=a9(Z);return _.__bytes=j,j}function t9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=r9)return Z;let Q=Array.isArray(_.children)?_.children:[],Y=[];for(let G of Q){let K=Math.max(0,Number(G?.__bytes??G?.size??0));if(K<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:K});else Y.push({kind:"file",name:G.name,path:G.path,size:K})}Y.sort((G,K)=>K.size-G.size);let q=Y;if(Y.length>Y3){let G=Y.slice(0,Y3-1),K=Y.slice(Y3-1),X=K.reduce((N,V)=>N+V.size,0);G.push({kind:"other",name:`+${K.length} more`,path:`${Z.path}/[other]`,size:X}),q=G}return Z.children=q.map((G)=>{if(G.kind==="dir")return t9(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function i9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function e9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Q=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Q}% ${Y}%)`}function j6(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function K3(_,$,j,Z,Q,Y){let q=Math.PI*2-0.0001,G=Y-Q>q?Q+q:Y,K=j6(_,$,Z,Q),X=j6(_,$,Z,G),N=j6(_,$,j,G),V=j6(_,$,j,Q),W=G-Q>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${W} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${j} ${j} 0 ${W} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var _j={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function $j(_,$,j){let Z=[],Q=[],Y=Math.max(0,Number($)||0),q=(G,K,X,N)=>{let V=Array.isArray(G?.children)?G.children:[];if(!V.length)return;let W=Math.max(0,Number(G.size)||0);if(W<=0)return;let O=X-K,M=K;V.forEach((I,E)=>{let J=Math.max(0,Number(I.size)||0);if(J<=0)return;let D=J/W,k=M,i=E===V.length-1?X:M+O*D;if(M=i,i-k<0.003)return;let p=_j[N];if(p){let s=e9(k,N,j);if(Z.push({key:I.path,path:I.path,label:I.name,size:J,color:s,depth:N,startAngle:k,endAngle:i,innerRadius:p[0],outerRadius:p[1],d:K3(120,120,p[0],p[1],k,i)}),N===1)Q.push({key:I.path,name:I.name,size:J,pct:Y>0?J/Y*100:0,color:s})}if(N<r9)q(I,k,i,N+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Q}}function G3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Q=G3(Z,$);if(Q)return Q}return null}function jj(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Q=_j[1];if(!Q)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,G=e9(Y,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:G,depth:1,startAngle:Y,endAngle:q,innerRadius:Q[0],outerRadius:Q[1],d:K3(120,120,Q[0],Q[1],Y,q)}],legend:[{key:X,name:_,size:j,pct:100,color:G}]}}function n9(_,$=!1,j=!1){if(!_)return null;let Z=a9(_),Q=t9(_,0),Y=Q.size||Z,{segments:q,legend:G}=$j(Q,Y,j);if(!q.length&&Y>0){let K=jj("[files]",Q.path,Y,j);q=K.segments,G=K.legend}return{root:Q,totalSize:Y,segments:q,legend:G,truncated:$,isDarkTheme:j}}function _X({payload:_}){if(!_)return null;let[$,j]=h(null),[Z,Q]=h(_?.root?.path||"."),[Y,q]=h(()=>[_?.root?.path||"."]),[G,K]=h(!1);m(()=>{let H=_?.root?.path||".";Q(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!Z)return;K(!0);let H=setTimeout(()=>K(!1),180);return()=>clearTimeout(H)},[Z]);let X=v0(()=>{return G3(_.root,Z)||_.root},[_?.root,Z]),N=X?.size||_.totalSize||0,{segments:V,legend:W}=v0(()=>{let H=$j(X,N,_.isDarkTheme);if(H.segments.length>0)return H;if(N<=0)return H;let x=X?.children?.length?"Total":"[files]";return jj(x,X?.path||_?.root?.path||".",N,_.isDarkTheme)},[X,N,_.isDarkTheme,_?.root?.path]),[O,M]=h(V),I=P(new Map),E=P(0);m(()=>{let H=I.current,x=new Map(V.map((j0)=>[j0.key,j0])),c=performance.now(),G0=220,d=(j0)=>{let _0=Math.min(1,(j0-c)/220),K0=_0*(2-_0),V0=V.map((B0)=>{let E0=H.get(B0.key)||{startAngle:B0.startAngle,endAngle:B0.startAngle,innerRadius:B0.innerRadius,outerRadius:B0.innerRadius},M0=(r0,h0)=>r0+(h0-r0)*K0,o0=M0(E0.startAngle,B0.startAngle),R0=M0(E0.endAngle,B0.endAngle),T0=M0(E0.innerRadius,B0.innerRadius),s0=M0(E0.outerRadius,B0.outerRadius);return{...B0,d:K3(120,120,T0,s0,o0,R0)}});if(M(V0),_0<1)E.current=requestAnimationFrame(d)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(d),I.current=x,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let J=O.length?O:V,D=N>0?b_(N):"0 B",k=X?.name||"",p=(k&&k!=="."?k:"Total")||"Total",s=D,e=Y.length>1,f=(H)=>{if(!H?.path)return;let x=G3(_.root,H.path);if(!x||!Array.isArray(x.children)||x.children.length===0)return;q((c)=>[...c,x.path]),Q(x.path),j(null)},R=()=>{if(!e)return;q((H)=>{let x=H.slice(0,-1);return Q(x[x.length-1]||_?.root?.path||"."),x}),j(null)};return L`
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
                    onClick=${R}
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
            ${W.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${W.slice(0,8).map((H)=>L`
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
    `}function $X({mediaId:_}){let[$,j]=h(null);if(m(()=>{if(!_)return;L5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Q=$.metadata?.size?b_($.metadata.size):"";return L`
        <a href=${v_(_)} download=${Z} class="file-attachment"
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
                ${Q&&L`<span class="file-size">${Q}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function Zj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Q,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:G=!1}){let[K,X]=h(null),[N,V]=h(new Set(["."])),[W,O]=h(null),[M,I]=h(null),[E,J]=h(""),[D,k]=h(null),[i,p]=h(null),[s,e]=h(!0),[f,R]=h(!1),[H,x]=h(null),[c,G0]=h(()=>F5("workspaceShowHidden",!1)),[d,j0]=h(!1),[_0,K0]=h(null),[V0,B0]=h(null),[J0,E0]=h(null),[M0,o0]=h(!1),[R0,T0]=h(null),[s0,r0]=h(()=>i9()),[h0,t0]=h(()=>Z3({stored:J_($6),...j3()})),[p0,j1]=h(!1),z0=P(N),l0=P(""),Z1=P(null),q1=P(0),X_=P(new Set),E1=P(null),_1=P(new Map),h1=P(_),k1=P(Z),G1=P(null),c0=P(null),R1=P(null),T1=P(null),a=P(null),W0=P(null),H0=P("."),N0=P(null),y0=P({path:null,dragging:!1,startX:0,startY:0}),S0=P({path:null,dragging:!1,startX:0,startY:0}),b0=P({path:null,timer:0}),k0=P(!1),w0=P(0),i0=P(new Map),D0=P(null),u0=P(null),O0=P(null),Y0=P(null),w=P(null),t=P(null),F0=P(c),I0=P($),g0=P(j??$),X1=P(0),M1=P(J0),N1=P(d),p1=P(_0),q4=P(null),U_=P({x:0,y:0}),$_=P(0),L_=P(null),K_=P(W),Q1=P(M),s1=P(null),G4=P(D);h1.current=_,k1.current=Z,m(()=>{z0.current=N},[N]),m(()=>{F0.current=c},[c]),m(()=>{I0.current=$},[$]),m(()=>{g0.current=j??$},[j,$]),m(()=>{M1.current=J0},[J0]),m(()=>{if(typeof window>"u")return;let z=()=>{t0(Z3({stored:J_($6),...j3()}))};z();let T=()=>z(),v=()=>z(),b=(Z0)=>{if(!Z0||Z0.key===null||Z0.key===$6)z()};window.addEventListener("resize",T),window.addEventListener("focus",v),window.addEventListener("storage",b);let o=window.matchMedia?.("(pointer: coarse)"),X0=window.matchMedia?.("(hover: none)"),U0=(Z0,C0)=>{if(!Z0)return;if(Z0.addEventListener)Z0.addEventListener("change",C0);else if(Z0.addListener)Z0.addListener(C0)},L0=(Z0,C0)=>{if(!Z0)return;if(Z0.removeEventListener)Z0.removeEventListener("change",C0);else if(Z0.removeListener)Z0.removeListener(C0)};return U0(o,T),U0(X0,T),()=>{window.removeEventListener("resize",T),window.removeEventListener("focus",v),window.removeEventListener("storage",b),L0(o,T),L0(X0,T)}},[]),m(()=>{let z=(T)=>{let v=T?.detail?.path;if(!v)return;let b=v.split("/"),o=[];for(let X0=1;X0<b.length;X0++)o.push(b.slice(0,X0).join("/"));if(o.length)V((X0)=>{let U0=new Set(X0);U0.add(".");for(let L0 of o)U0.add(L0);return U0});O(v),requestAnimationFrame(()=>{let X0=document.querySelector(`[data-path="${CSS.escape(v)}"]`);if(X0)X0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),m(()=>{N1.current=d},[d]),m(()=>{p1.current=_0},[_0]),m(()=>{K_.current=W},[W]),m(()=>{Q1.current=M},[M]),m(()=>{G4.current=D},[D]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>r0(i9());z();let T=window.matchMedia?.("(prefers-color-scheme: dark)"),v=()=>z();if(T?.addEventListener)T.addEventListener("change",v);else if(T?.addListener)T.addListener(v);let b=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(b?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)b?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(T?.removeEventListener)T.removeEventListener("change",v);else if(T?.removeListener)T.removeListener(v);b?.disconnect()}},[]),m(()=>{if(!M)return;let z=a.current;if(!z)return;let T=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(T)},[M]),m(()=>{if(!p0)return;let z=(v)=>{let b=v?.target;if(!(b instanceof Element))return;if(w.current?.contains(b))return;if(t.current?.contains(b))return;j1(!1)},T=(v)=>{if(v?.key==="Escape")j1(!1),t.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",T)}},[p0]);let g_=async(z,T={})=>{let v=Boolean(T?.autoOpen),b=String(z||"").trim();R(!0),k(null),p(null);try{let o=await c5(b,20000);if(v&&b&&l9(b,o,{resolvePane:(X0)=>n0.resolve(X0)}))return k1.current?.(b,o),o;return k(o),o}catch(o){let X0={error:o.message||"Failed to load preview"};return k(X0),X0}finally{R(!1)}};G1.current=g_;let _5=async()=>{if(!I0.current)return;try{let z=await p5("",1,F0.current),T=d9(z.root,z0.current,F0.current);if(T===l0.current){e(!1);return}if(l0.current=T,Z1.current=z.root,!q1.current)q1.current=requestAnimationFrame(()=>{q1.current=0,X((v)=>X3(v,Z1.current)),e(!1)})}catch(z){x(z.message||"Failed to load workspace"),e(!1)}},v4=async(z)=>{if(!z)return;if(X_.current.has(z))return;X_.current.add(z);try{let T=await p5(z,1,F0.current);X((v)=>q3(v,z,T.root))}catch(T){x(T.message||"Failed to load workspace")}finally{X_.current.delete(z)}};c0.current=v4;let g1=S(()=>{let z=W;if(!z)return".";let T=_1.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let v=z.split("/");return v.pop(),v.join("/")||"."},[W]),F_=S((z)=>{let T=z?.closest?.(".workspace-row");if(!T)return null;let v=T.dataset.path,b=T.dataset.type;if(!v)return null;if(b==="dir")return v;if(v.includes("/")){let o=v.split("/");return o.pop(),o.join("/")||"."}return"."},[]),y1=S((z)=>{return F_(z?.target||null)},[F_]),I1=S((z)=>{M1.current=z,E0(z)},[]),V1=S(()=>{let z=b0.current;if(z?.timer)clearTimeout(z.timer);b0.current={path:null,timer:0}},[]),u_=S((z)=>{if(!z||z==="."){V1();return}let T=_1.current?.get(z);if(!T||T.type!=="dir"){V1();return}if(z0.current?.has(z)){V1();return}if(b0.current?.path===z)return;V1();let v=setTimeout(()=>{b0.current={path:null,timer:0},c0.current?.(z),V((b)=>{let o=new Set(b);return o.add(z),o})},600);b0.current={path:z,timer:v}},[V1]),m_=S((z,T)=>{if(U_.current={x:z,y:T},$_.current)return;$_.current=requestAnimationFrame(()=>{$_.current=0;let v=q4.current;if(!v)return;let b=U_.current;v.style.transform=`translate(${b.x+12}px, ${b.y+12}px)`})},[]),W1=S((z)=>{if(!z)return;let v=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!v)return;B0({path:z,label:v})},[]),j_=S(()=>{if(B0(null),$_.current)cancelAnimationFrame($_.current),$_.current=0;if(q4.current)q4.current.style.transform="translate(-9999px, -9999px)"},[]),m0=S((z)=>{if(!z)return".";let T=_1.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let v=z.split("/");return v.pop(),v.join("/")||"."},[]),C1=S(()=>{I(null),J("")},[]),A_=S((z)=>{if(!z)return;let v=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!v||z===".")return;I(z),J(v)},[]),Z_=S(async()=>{let z=Q1.current;if(!z)return;let T=(E||"").trim();if(!T){C1();return}let v=_1.current?.get(z),b=(v?.name||z.split("/").pop()||z).trim();if(T===b){C1();return}try{let X0=(await l6(z,T))?.path||z,U0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(C1(),x(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:X0,type:v?.type||"file"}})),v?.type==="dir")V((L0)=>{let Z0=new Set;for(let C0 of L0)if(C0===z)Z0.add(X0);else if(C0.startsWith(`${z}/`))Z0.add(`${X0}${C0.slice(z.length)}`);else Z0.add(C0);return Z0});if(O(X0),v?.type==="dir")k(null),R(!1),p(null);else G1.current?.(X0);c0.current?.(U0)}catch(o){x(o?.message||"Failed to rename file")}},[C1,E]),b4=S(async(z)=>{let b=z||".";for(let o=0;o<50;o+=1){let U0=`untitled${o===0?"":`-${o}`}.md`;try{let Z0=(await c6(b,U0,""))?.path||(b==="."?U0:`${b}/${U0}`);if(b&&b!==".")V((C0)=>new Set([...C0,b]));O(Z0),x(null),c0.current?.(b),G1.current?.(Z0);return}catch(L0){if(L0?.status===409||L0?.code==="file_exists")continue;x(L0?.message||"Failed to create file");return}}x("Failed to create file (untitled name already in use).")},[]),r_=S((z)=>{if(z?.stopPropagation?.(),M0)return;let T=m0(K_.current);b4(T)},[M0,m0,b4]);m(()=>{if(typeof window>"u")return;let z=(T)=>{let v=T?.detail?.updates||[];if(!Array.isArray(v)||v.length===0)return;X((L0)=>{let Z0=L0;for(let C0 of v){if(!C0?.root)continue;if(!Z0||C0.path==="."||!C0.path)Z0=C0.root;else Z0=q3(Z0,C0.path,C0.root)}if(Z0)l0.current=d9(Z0,z0.current,F0.current);return e(!1),Z0});let b=K_.current;if(Boolean(b)&&v.some((L0)=>{let Z0=L0?.path||"";if(!Z0||Z0===".")return!0;return b===Z0||b.startsWith(`${Z0}/`)||Z0.startsWith(`${b}/`)}))i0.current.clear();if(!b||!G4.current)return;let X0=_1.current?.get(b);if(X0&&X0.type==="dir")return;if(v.some((L0)=>{let Z0=L0?.path||"";if(!Z0||Z0===".")return!0;return b===Z0||b.startsWith(`${Z0}/`)}))G1.current?.(b)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),E1.current=_5;let g4=P(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),T=g0.current??I0.current,v=document.visibilityState!=="hidden"&&(T||z.matches&&I0.current);l5(v,F0.current).catch(()=>{})}).current,a_=P(0),$5=P(()=>{if(a_.current)clearTimeout(a_.current);a_.current=setTimeout(()=>{a_.current=0,g4()},250)}).current;m(()=>{if(I0.current)E1.current?.();$5()},[$,j]),m(()=>{E1.current(),g4();let z=setInterval(()=>E1.current(),rG),T=z5("previewHeight",null),v=Number.isFinite(T)?Math.min(Math.max(T,80),600):280;if(w0.current=v,R1.current)R1.current.style.setProperty("--preview-height",`${v}px`);let b=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),o=()=>$5();if(b.addEventListener)b.addEventListener("change",o);else if(b.addListener)b.addListener(o);return document.addEventListener("visibilitychange",o),()=>{if(clearInterval(z),q1.current)cancelAnimationFrame(q1.current),q1.current=0;if(b.removeEventListener)b.removeEventListener("change",o);else if(b.removeListener)b.removeListener(o);if(document.removeEventListener("visibilitychange",o),a_.current)clearTimeout(a_.current),a_.current=0;if(N0.current)clearTimeout(N0.current),N0.current=null;l5(!1,F0.current).catch(()=>{})}},[]);let t_=v0(()=>s9(K,N,c),[K,N,c]),h_=v0(()=>new Map(t_.map((z)=>[z.node.path,z.node])),[t_]),T5=v0(()=>c9(h0),[h0]);_1.current=h_;let U1=(W?_1.current.get(W):null)?.type==="dir";m(()=>{if(!W||!U1){T0(null),D0.current=null,u0.current=null;return}let z=W,T=`${c?"hidden":"visible"}:${W}`,v=i0.current,b=v.get(T);if(b?.root){v.delete(T),v.set(T,b);let U0=n9(b.root,Boolean(b.truncated),s0);if(U0)D0.current=U0,u0.current=W,T0({loading:!1,error:null,payload:U0});return}let o=D0.current,X0=u0.current;T0({loading:!0,error:null,payload:X0===W?o:null}),p5(W,tG,c).then((U0)=>{if(K_.current!==z)return;let L0={root:U0?.root,truncated:Boolean(U0?.truncated)};v.delete(T),v.set(T,L0);while(v.size>eG){let C0=v.keys().next().value;if(!C0)break;v.delete(C0)}let Z0=n9(L0.root,L0.truncated,s0);D0.current=Z0,u0.current=W,T0({loading:!1,error:null,payload:Z0})}).catch((U0)=>{if(K_.current!==z)return;T0({loading:!1,error:U0?.message||"Failed to load folder size chart",payload:X0===W?o:null})})},[W,U1,c,s0]);let w1=Boolean(D&&D.kind==="text"&&!U1&&(!D.size||D.size<=262144)),j5=w1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",E_=Boolean(W&&W!=="."),Q_=Boolean(W&&!U1),c1=Boolean(W&&!U1),S1=W&&U1?k8(W,c):null,u1=S(()=>j1(!1),[]),J1=S(async(z)=>{u1();try{await z?.()}catch(T){console.warn("[workspace-explorer] Header menu action failed:",T)}},[u1]);m(()=>{let z=O0.current;if(Y0.current)Y0.current.dispose(),Y0.current=null;if(!z)return;if(z.innerHTML="",!W||U1||!D||D.error)return;let T={path:W,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},v=n0.resolve(T)||n0.get("workspace-preview-default");if(!v)return;let b=v.mount(z,T);return Y0.current=b,()=>{if(Y0.current===b)b.dispose(),Y0.current=null;z.innerHTML=""}},[W,U1,D]);let M_=(z)=>{let T=z?.target;if(T instanceof Element)return T;return T?.parentElement||null},I_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},k_=P((z)=>{let T=M_(z),v=T?.closest?.("[data-path]");if(!v)return;let b=v.dataset.path;if(!b||b===".")return;let o=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),X0=Boolean(T?.closest?.(".workspace-caret"));if(o||X0)return;if(Q1.current===b)return;A_(b)}).current,e_=P((z)=>{if(k0.current){k0.current=!1;return}let T=M_(z),v=T?.closest?.("[data-path]");if(T1.current?.focus?.(),!v)return;let b=v.dataset.path,o=v.dataset.type,X0=Boolean(T?.closest?.(".workspace-caret")),U0=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),L0=K_.current===b,Z0=Q1.current;if(Z0){if(Z0===b)return;C1()}let C0=o==="file"&&s1.current===b&&!X0&&!U0;if(o==="dir"){if(s1.current=null,O(b),k(null),p(null),R(!1),!z0.current.has(b))c0.current?.(b);if(L0&&!X0)return;V((q_)=>{let l1=new Set(q_);if(l1.has(b))l1.delete(b);else l1.add(b);return l1})}else{s1.current=null,O(b);let f1=_1.current.get(b);if(f1)h1.current?.(f1.path,f1);if(!U0&&!X0&&aG(b))k1.current?.(b,G4.current);else{let l1=!U0&&!X0;G1.current?.(b,{autoOpen:l1})}}}).current,Y_=P(()=>{l0.current="",E1.current(),Array.from(z0.current||[]).filter((T)=>T&&T!==".").forEach((T)=>c0.current?.(T))}).current,r1=P(()=>{s1.current=null,O(null),k(null),p(null),R(!1)}).current,T_=P(()=>{G0((z)=>{let T=!z;if(typeof window<"u")K1("workspaceShowHidden",String(T));return F0.current=T,l5(!0,T).catch(()=>{}),l0.current="",E1.current?.(),Array.from(z0.current||[]).filter((b)=>b&&b!==".").forEach((b)=>c0.current?.(b)),T})}).current,X4=P((z)=>{if(M_(z)?.closest?.("[data-path]"))return;r1()}).current,O1=S(async(z)=>{if(!z)return;let T=z.split("/").pop()||z;if(!window.confirm(`Delete "${T}"? This cannot be undone.`))return;try{await i6(z);let b=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(K_.current===z)r1();c0.current?.(b),x(null)}catch(b){k((o)=>({...o||{},error:b.message||"Failed to delete file"}))}},[r1]),_4=S((z)=>{let T=T1.current;if(!T||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;T.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),u4=S((z)=>{let T=t_;if(!T||T.length===0)return;let v=W?T.findIndex((b)=>b.node.path===W):-1;if(z.key==="ArrowDown"){z.preventDefault();let b=Math.min(v+1,T.length-1),o=T[b];if(!o)return;if(O(o.node.path),o.node.type!=="dir")h1.current?.(o.node.path,o.node),G1.current?.(o.node.path);else k(null),R(!1),p(null);_4(o.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let b=v<=0?0:v-1,o=T[b];if(!o)return;if(O(o.node.path),o.node.type!=="dir")h1.current?.(o.node.path,o.node),G1.current?.(o.node.path);else k(null),R(!1),p(null);_4(o.node.path);return}if(z.key==="ArrowRight"&&v>=0){let b=T[v];if(b?.node?.type==="dir"&&!N.has(b.node.path))z.preventDefault(),c0.current?.(b.node.path),V((o)=>new Set([...o,b.node.path]));return}if(z.key==="ArrowLeft"&&v>=0){let b=T[v];if(b?.node?.type==="dir"&&N.has(b.node.path))z.preventDefault(),V((o)=>{let X0=new Set(o);return X0.delete(b.node.path),X0});return}if(z.key==="Enter"&&v>=0){z.preventDefault();let b=T[v];if(!b)return;let o=b.node.path;if(b.node.type==="dir"){if(!z0.current.has(o))c0.current?.(o);V((U0)=>{let L0=new Set(U0);if(L0.has(o))L0.delete(o);else L0.add(o);return L0}),k(null),p(null),R(!1)}else h1.current?.(o,b.node),G1.current?.(o);return}if((z.key==="Delete"||z.key==="Backspace")&&v>=0){let b=T[v];if(!b||b.node.type==="dir")return;z.preventDefault(),O1(b.node.path);return}if(z.key==="Escape")z.preventDefault(),r1()},[r1,O1,N,t_,_4,W]),m4=S((z)=>{let T=M_(z),v=T?.closest?.(".workspace-row");if(!v)return;let b=v.dataset.type,o=v.dataset.path;if(!o||o===".")return;if(Q1.current===o)return;let X0=z?.touches?.[0];if(!X0)return;if(y0.current={path:I_(T)?o:null,dragging:!1,startX:X0.clientX,startY:X0.clientY},b!=="file")return;if(N0.current)clearTimeout(N0.current);N0.current=setTimeout(()=>{if(N0.current=null,y0.current?.dragging)return;O1(o)},600)},[O1]),P_=S(()=>{if(N0.current)clearTimeout(N0.current),N0.current=null;let z=y0.current;if(z?.dragging&&z.path){let T=M1.current||g1(),v=L_.current;if(typeof v==="function")v(z.path,T)}y0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,j0(!1),K0(null),I1(null),V1(),j_()},[g1,j_,I1,V1]),h4=S((z)=>{let T=y0.current,v=z?.touches?.[0];if(!v||!T?.path){if(N0.current)clearTimeout(N0.current),N0.current=null;return}let b=Math.abs(v.clientX-T.startX),o=Math.abs(v.clientY-T.startY),X0=b>8||o>8;if(X0&&N0.current)clearTimeout(N0.current),N0.current=null;if(!T.dragging&&X0)T.dragging=!0,j0(!0),K0("move"),W1(T.path);if(T.dragging){z.preventDefault(),m_(v.clientX,v.clientY);let U0=document.elementFromPoint(v.clientX,v.clientY),L0=F_(U0)||g1();if(M1.current!==L0)I1(L0);u_(L0)}},[F_,g1,W1,m_,I1,u_]),Z5=P((z)=>{z.preventDefault();let T=R1.current;if(!T)return;let v=z.clientY,b=w0.current||280,o=z.currentTarget;o.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let X0=v,U0=(Z0)=>{X0=Z0.clientY;let C0=T.clientHeight-80,f1=Math.min(Math.max(b-(Z0.clientY-v),80),C0);T.style.setProperty("--preview-height",`${f1}px`),w0.current=f1},L0=()=>{let Z0=T.clientHeight-80,C0=Math.min(Math.max(b-(X0-v),80),Z0);w0.current=C0,o.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("previewHeight",String(Math.round(C0))),document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",L0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",L0)}).current,p_=P((z)=>{z.preventDefault();let T=R1.current;if(!T)return;let v=z.touches[0];if(!v)return;let b=v.clientY,o=w0.current||280,X0=z.currentTarget;X0.classList.add("dragging"),document.body.style.userSelect="none";let U0=(Z0)=>{let C0=Z0.touches[0];if(!C0)return;Z0.preventDefault();let f1=T.clientHeight-80,q_=Math.min(Math.max(o-(C0.clientY-b),80),f1);T.style.setProperty("--preview-height",`${q_}px`),w0.current=q_},L0=()=>{X0.classList.remove("dragging"),document.body.style.userSelect="",K1("previewHeight",String(Math.round(w0.current||o))),document.removeEventListener("touchmove",U0),document.removeEventListener("touchend",L0),document.removeEventListener("touchcancel",L0)};document.addEventListener("touchmove",U0,{passive:!1}),document.addEventListener("touchend",L0),document.addEventListener("touchcancel",L0)}).current,c_=async()=>{if(!W)return;try{let z=await p6(W);if(z.media_id)p(z.media_id)}catch(z){k((T)=>({...T||{},error:z.message||"Failed to attach"}))}},O4=async()=>{if(!W||U1)return;await O1(W)},l_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},p4=S((z)=>{if(!l_(z))return;if(z.preventDefault(),X1.current+=1,!N1.current)j0(!0);K0("upload");let T=y1(z)||g1();I1(T),u_(T)},[g1,y1,I1,u_]),d_=S((z)=>{if(!l_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!N1.current)j0(!0);if(p1.current!=="upload")K0("upload");let T=y1(z)||g1();if(M1.current!==T)I1(T);u_(T)},[g1,y1,I1,u_]),C_=S((z)=>{if(!l_(z))return;if(z.preventDefault(),X1.current=Math.max(0,X1.current-1),X1.current===0)j0(!1),K0(null),I1(null),V1()},[I1,V1]),P1=S(async(z,T=".")=>{let v=Array.from(z||[]);if(v.length===0)return;let b=T&&T!==""?T:".",o=b!=="."?b:"workspace root";o0(!0);try{let X0=null;for(let U0 of v)try{X0=await M8(U0,b)}catch(L0){let Z0=L0?.status,C0=L0?.code;if(Z0===409||C0==="file_exists"){let f1=U0?.name||"file";if(!window.confirm(`"${f1}" already exists in ${o}. Overwrite?`))continue;X0=await M8(U0,b,{overwrite:!0})}else throw L0}if(X0?.path)s1.current=X0.path,O(X0.path),G1.current?.(X0.path);c0.current?.(b)}catch(X0){x(X0.message||"Failed to upload file")}finally{o0(!1)}},[]),D4=S(async(z,T)=>{if(!z)return;let v=_1.current?.get(z);if(!v)return;let b=T&&T!==""?T:".",o=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(b===o)return;try{let U0=(await d6(z,b))?.path||z;if(v.type==="dir")V((L0)=>{let Z0=new Set;for(let C0 of L0)if(C0===z)Z0.add(U0);else if(C0.startsWith(`${z}/`))Z0.add(`${U0}${C0.slice(z.length)}`);else Z0.add(C0);return Z0});if(O(U0),v.type==="dir")k(null),R(!1),p(null);else G1.current?.(U0);c0.current?.(o),c0.current?.(b)}catch(X0){x(X0?.message||"Failed to move entry")}},[]);L_.current=D4;let A4=S(async(z)=>{if(!l_(z))return;z.preventDefault(),X1.current=0,j0(!1),K0(null),E0(null),V1();let T=Array.from(z?.dataTransfer?.files||[]);if(T.length===0)return;let v=M1.current||y1(z)||g1();await P1(T,v)},[g1,y1,P1]),c4=S((z)=>{if(z?.stopPropagation?.(),M0)return;let T=z?.currentTarget?.dataset?.uploadTarget||".";H0.current=T,W0.current?.click()},[M0]),z1=S(()=>{if(M0)return;let z=K_.current,T=z?_1.current?.get(z):null;H0.current=T?.type==="dir"?T.path:".",W0.current?.click()},[M0]),E4=S(()=>{J1(()=>r_(null))},[J1,r_]),Q5=S(()=>{J1(()=>z1())},[J1,z1]),m1=S(()=>{J1(()=>Y_())},[J1,Y_]),N_=S(()=>{J1(()=>T_())},[J1,T_]),$4=S(()=>{if(!W||!w1)return;J1(()=>k1.current?.(W,D))},[J1,W,w1,D]),l4=S(()=>{if(!W||W===".")return;J1(()=>A_(W))},[J1,W,A_]),K4=S(()=>{if(!W||U1)return;J1(()=>O4())},[J1,W,U1,O4]),M4=S(()=>{if(!W||U1)return;J1(()=>c_())},[J1,W,U1,c_]),N4=S(()=>{if(!S1)return;if(u1(),typeof window<"u")window.open(S1,"_blank","noopener")},[u1,S1]),S_=S(()=>{u1(),Q?.()},[u1,Q]),z_=S(()=>{u1(),Y?.()},[u1,Y]),I4=S(()=>{u1(),q?.()},[u1,q]),d4=S((z)=>{if(!z||z.button!==0)return;let T=z.currentTarget;if(!T||!T.dataset)return;let v=T.dataset.path;if(!v||v===".")return;if(Q1.current===v)return;let b=M_(z);if(b?.closest?.("button, a, input, .workspace-caret"))return;if(!I_(b))return;z.preventDefault(),S0.current={path:v,dragging:!1,startX:z.clientX,startY:z.clientY};let o=(U0)=>{let L0=S0.current;if(!L0?.path)return;let Z0=Math.abs(U0.clientX-L0.startX),C0=Math.abs(U0.clientY-L0.startY),f1=Z0>4||C0>4;if(!L0.dragging&&f1)L0.dragging=!0,k0.current=!0,j0(!0),K0("move"),W1(L0.path),m_(U0.clientX,U0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(L0.dragging){U0.preventDefault(),m_(U0.clientX,U0.clientY);let q_=document.elementFromPoint(U0.clientX,U0.clientY),l1=F_(q_)||g1();if(M1.current!==l1)I1(l1);u_(l1)}},X0=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",X0);let U0=S0.current;if(U0?.dragging&&U0.path){let L0=M1.current||g1(),Z0=L_.current;if(typeof Z0==="function")Z0(U0.path,L0)}S0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,j0(!1),K0(null),I1(null),V1(),j_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",X0)},[F_,g1,W1,m_,j_,I1,u_,V1]),x_=S(async(z)=>{let T=Array.from(z?.target?.files||[]);if(T.length===0)return;let v=H0.current||".";if(await P1(T,v),H0.current=".",z?.target)z.target.value=""},[P1]);return L`
        <aside
            class=${`workspace-sidebar${d?" workspace-drop-active":""}`}
            data-workspace-scale=${h0}
            ref=${R1}
            onDragEnter=${p4}
            onDragOver=${d_}
            onDragLeave=${C_}
            onDrop=${A4}
        >
            <input type="file" multiple style="display:none" ref=${W0} onChange=${x_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${t}
                            class=${`workspace-menu-button${p0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),j1((T)=>!T)}}
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
                                <button class="workspace-menu-item" role="menuitem" onClick=${Q5} disabled=${M0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${m1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${c?" active":""}`} role="menuitem" onClick=${N_}>
                                    ${c?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${W&&L`<div class="workspace-menu-separator"></div>`}
                                ${W&&!U1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${$4} disabled=${!w1}>Open in editor</button>
                                `}
                                ${E_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l4}>Rename selected</button>
                                `}
                                ${c1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M4}>Download selected file</button>
                                `}
                                ${S1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${N4}>Download selected folder (zip)</button>
                                `}
                                ${Q_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${K4}>Delete selected file</button>
                                `}

                                ${(Q||Y||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&L`
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
                    <button class="workspace-refresh" onClick=${Y_} title="Refresh">
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
                        ref=${T1}
                        tabIndex="0"
                        onClick=${e_}
                        onDblClick=${k_}
                        onKeyDown=${u4}
                        onTouchStart=${m4}
                        onTouchEnd=${P_}
                        onTouchMove=${h4}
                        onTouchCancel=${P_}
                    >
                        ${t_.map(({node:z,depth:T})=>{let v=z.type==="dir",b=z.path===W,o=z.path===M,X0=v&&N.has(z.path),U0=J0&&z.path===J0,L0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${b?" selected":""}${U0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+T*T5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${d4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${v?X0?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${v?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${v?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${o?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${a}
                                                value=${E}
                                                onInput=${(Z0)=>J(Z0?.target?.value||"")}
                                                onKeyDown=${(Z0)=>{if(Z0.key==="Enter")Z0.preventDefault(),Z_();else if(Z0.key==="Escape")Z0.preventDefault(),C1()}}
                                                onBlur=${C1}
                                                onClick=${(Z0)=>Z0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${v&&!X0&&L0>0&&L`
                                        <span class="workspace-count">${L0}</span>
                                    `}
                                    ${v&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${c4}
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
            ${W&&L`
                <div class="workspace-preview-splitter-h" onMouseDown=${Z5} onTouchStart=${p_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
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
                                    onClick=${()=>w1&&k1.current?.(W,D)}
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
                                    <a class="workspace-download" href=${k8(W,c)}
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
                        ${R0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${R0?.error&&L`<div class="workspace-error">${R0.error}</div>`}
                        ${R0?.payload&&R0.payload.segments?.length>0&&L`
                            <${_X} payload=${R0.payload} />
                        `}
                        ${R0?.payload&&(!R0.payload.segments||R0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!U1&&L`
                        <div class="workspace-preview-body" ref=${O0}></div>
                    `}
                    ${i&&L`
                        <div class="workspace-download-card">
                            <${$X} mediaId=${i} />
                        </div>
                    `}
                </div>
            `}
            ${V0&&L`
                <div class="workspace-drag-ghost" ref=${q4}>${V0.label}</div>
            `}
        </aside>
    `}var jX=new Set(["kanban-editor","mindmap-editor"]);function ZX(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function Qj(_,$,j){let Z=ZX(_,$,j);return jX.has(Z)}var QX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,YX=/\.(csv|tsv)$/i,qX=/\.pdf$/i,GX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Yj=/\.drawio(\.xml|\.svg|\.png)?$/i;function qj({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Q,onCloseAll:Y,onTogglePin:q,onTogglePreview:G,onEditSource:K,previewTabs:X,paneOverrides:N,onToggleDock:V,dockVisible:W,onToggleZen:O,zenMode:M,onPopOutTab:I}){let[E,J]=h(null),D=P(null);m(()=>{if(!E)return;let H=(x)=>{if(x.type==="keydown"&&x.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[E]),m(()=>{let H=(x)=>{if(x.ctrlKey&&x.key==="Tab"){if(x.preventDefault(),!_.length)return;let c=_.findIndex((G0)=>G0.id===$);if(x.shiftKey){let G0=_[(c-1+_.length)%_.length];j?.(G0.id)}else{let G0=_[(c+1)%_.length];j?.(G0.id)}return}if((x.ctrlKey||x.metaKey)&&x.key==="w"){let c=document.querySelector(".editor-pane");if(c&&c.contains(document.activeElement)){if(x.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let k=S((H,x)=>{if(H.button===1){H.preventDefault(),Z?.(x);return}if(H.button===0)j?.(x)},[j,Z]),i=S((H,x)=>{H.preventDefault(),J({id:x,x:H.clientX,y:H.clientY})},[]),p=S((H)=>{H.preventDefault(),H.stopPropagation()},[]),s=S((H,x)=>{H.preventDefault(),H.stopPropagation(),Z?.(x)},[Z]);m(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let e=S((H)=>{if(!(N instanceof Map))return null;return N.get(H)||null},[N]),f=v0(()=>_.find((H)=>H.id===E?.id)||null,[E?.id,_]),R=v0(()=>{let H=E?.id;if(!H)return!1;return Qj(H,e(H),(x)=>n0.resolve(x))},[E?.id,e]);if(!_.length)return null;return L`
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
                    class=${`tab-strip-dock-toggle${W?" active":""}`}
                    onClick=${V}
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
                <button onClick=${()=>{Q?.(E.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(E.id),J(null)}}>
                    ${f?.pinned?"Unpin":"Pin"}
                </button>
                ${R&&K&&L`
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
                ${QX.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id),x=E.id.split("/").pop()||"document",c="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(x);window.open(c,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${YX.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${qX.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${GX.test(E.id)&&!Yj.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Yj.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var XX=400,N3=60,Gj=220,V3="mdPreviewHeight";function KX(){try{let _=localStorage.getItem(V3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=N3?$:Gj}catch{return Gj}}function B3({getContent:_,path:$,onClose:j}){let[Z,Q]=h(""),[Y,q]=h(KX),G=P(null),K=P(null),X=P(""),N=P(_);return N.current=_,m(()=>{let O=()=>{let I=N.current?.()||"";if(I===X.current)return;X.current=I;try{let E=O_(I,null,{sanitize:!1});Q(E)}catch{Q('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let M=setInterval(O,XX);return()=>clearInterval(M)},[]),m(()=>{if(G.current&&Z)U4(G.current).catch(()=>{})},[Z]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let M=O.clientY,I=K.current?.offsetHeight||Y,E=K.current?.parentElement,J=E?E.offsetHeight*0.7:500,D=O.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=(p)=>{let s=Math.min(Math.max(I-(p.clientY-M),N3),J);q(s)},i=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(V3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",k),document.addEventListener("mouseup",i)}}
            onTouchStart=${(O)=>{O.preventDefault();let M=O.touches[0];if(!M)return;let I=M.clientY,E=K.current?.offsetHeight||Y,J=K.current?.parentElement,D=J?J.offsetHeight*0.7:500,k=O.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let i=(s)=>{let e=s.touches[0];if(!e)return;s.preventDefault();let f=Math.min(Math.max(E-(e.clientY-I),N3),D);q(f)},p=()=>{k.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(V3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",i),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}}
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
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function Xj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Q}){let Y=P(_);Y.current=_;let q=P($);q.current=$;let G=P(j);G.current=j;let K=P(Z);K.current=Z,m(()=>{let X=new T8((V,W)=>Y.current(V,W),(V)=>q.current(V),{chatJid:Q});X.connect();let N=()=>{X.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),X.disconnect()}},[Q])}function Kj(){let[_,$]=h(!1),[j,Z]=h("default"),Q=P(!1);m(()=>{let K=F5("notificationsEnabled",!1);if(Q.current=K,$(K),typeof Notification<"u")Z(Notification.permission)},[]),m(()=>{Q.current=_},[_]);let Y=S(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),q=S(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await Y();if(Z(X||"default"),X!=="granted"){Q.current=!1,$(!1),K1("notificationsEnabled","false");return}}let K=!Q.current;Q.current=K,$(K),K1("notificationsEnabled",String(K))},[Y]),G=S((K,X)=>{if(!Q.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let N=new Notification(K,{body:X});return N.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:G}}var G8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Nj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Q]=h(null),[Y,q]=h(!1),G=P(!1),K=P(null),X=P(!1),N=P(null),V=P(null),W=P(0);m(()=>{G.current=Y},[Y]),m(()=>{V.current=Z},[Z]),m(()=>{W.current+=1,N.current=null,X.current=!1,G.current=!1,q(!1)},[j]);let O=S(async(E=null)=>{let J=W.current;try{if(E){let D=await P6(E,50,0,j);if(J!==W.current)return;Q(D.posts),q(!1)}else{let D=await n4(10,null,j);if(J!==W.current)return;Q(D.posts),q(D.has_more)}}catch(D){if(J!==W.current)return;console.error("Failed to load posts:",D)}},[j]),M=S(async()=>{let E=W.current;try{let J=await n4(10,null,j);if(E!==W.current)return;Q((D)=>{if(!D||D.length===0)return J.posts;return G8([...J.posts,...D])}),q((D)=>D||J.has_more)}catch(J){if(E!==W.current)return;console.error("Failed to refresh timeline:",J)}},[j]),I=S(async(E={})=>{let J=W.current,D=V.current;if(!D||D.length===0)return;if(X.current)return;let{preserveScroll:k=!0,preserveMode:i="top",allowRepeat:p=!1}=E,s=(R)=>{if(!k){R();return}if(i==="top")$(R);else _(R)},f=D.slice().sort((R,H)=>R.id-H.id)[0]?.id;if(!Number.isFinite(f))return;if(!p&&N.current===f)return;X.current=!0,N.current=f;try{let R=await n4(10,f,j);if(J!==W.current)return;if(R.posts.length>0)s(()=>{Q((H)=>G8([...R.posts,...H||[]])),q(R.has_more)});else q(!1)}catch(R){if(J!==W.current)return;console.error("Failed to load more posts:",R)}finally{if(J===W.current)X.current=!1}},[j,_,$]);return m(()=>{K.current=I},[I]),{posts:Z,setPosts:Q,hasMore:Y,setHasMore:q,hasMoreRef:G,loadPosts:O,refreshTimeline:M,loadMore:I,loadMoreRef:K,loadingMoreRef:X,lastBeforeIdRef:N}}function Vj(){let[_,$]=h(null),[j,Z]=h({text:"",totalLines:0}),[Q,Y]=h(""),[q,G]=h({text:"",totalLines:0}),[K,X]=h(null),[N,V]=h(null),[W,O]=h(null),M=P(null),I=P(0),E=P(!1),J=P(""),D=P(""),k=P(null),i=P(null),p=P(null),s=P(null),e=P(!1),f=P(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Q,setAgentPlan:Y,agentThought:q,setAgentThought:G,pendingRequest:K,setPendingRequest:X,currentTurnId:N,setCurrentTurnId:V,steerQueuedTurnId:W,setSteerQueuedTurnId:O,lastAgentEventRef:M,lastSilenceNoticeRef:I,isAgentRunningRef:E,draftBufferRef:J,thoughtBufferRef:D,pendingRequestRef:k,stalledPostIdRef:i,currentTurnIdRef:p,steerQueuedTurnIdRef:s,thoughtExpandedRef:e,draftExpandedRef:f}}function Bj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Q=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.clientX,O=$.current||280,M=N.currentTarget;M.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=W,E=(D)=>{I=D.clientX;let k=Math.min(Math.max(O+(D.clientX-W),160),600);V.style.setProperty("--sidebar-width",`${k}px`),$.current=k},J=()=>{let D=Math.min(Math.max(O+(I-W),160),600);$.current=D,M.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",K1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,Y=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.touches[0];if(!W)return;let O=W.clientX,M=$.current||280,I=N.currentTarget;I.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(D)=>{let k=D.touches[0];if(!k)return;D.preventDefault();let i=Math.min(Math.max(M+(k.clientX-O),160),600);V.style.setProperty("--sidebar-width",`${i}px`),$.current=i},J=()=>{I.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",K1("sidebarWidth",String(Math.round($.current||M))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.clientX,O=j.current||$.current||280,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=W,E=(D)=>{I=D.clientX;let k=Math.min(Math.max(O+(D.clientX-W),200),800);V.style.setProperty("--editor-width",`${k}px`),j.current=k},J=()=>{let D=Math.min(Math.max(O+(I-W),200),800);j.current=D,M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,G=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.touches[0];if(!W)return;let O=W.clientX,M=j.current||$.current||280,I=N.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let E=(D)=>{let k=D.touches[0];if(!k)return;D.preventDefault();let i=Math.min(Math.max(M+(k.clientX-O),200),800);V.style.setProperty("--editor-width",`${i}px`),j.current=i},J=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",K1("editorWidth",String(Math.round(j.current||M))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,K=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.clientY,O=Z?.current||200,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=W,E=(D)=>{I=D.clientY;let k=Math.min(Math.max(O-(D.clientY-W),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${k}px`),Z)Z.current=k;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let D=Math.min(Math.max(O-(I-W),100),window.innerHeight*0.5);if(Z)Z.current=D;M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,X=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.touches[0];if(!W)return;let O=W.clientY,M=Z?.current||200,I=N.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let E=(D)=>{let k=D.touches[0];if(!k)return;D.preventDefault();let i=Math.min(Math.max(M-(k.clientY-O),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${i}px`),Z)Z.current=i;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",K1("dockHeight",String(Math.round(Z?.current||M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Q,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:X}}function NX(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Q=!1,Y=new Map;for(let[q,G]of _.entries()){let K=q;if(Z==="dir"){if(q===$)K=j,Q=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,Q=!0}else if(q===$)K=j,Q=!0;Y.set(K,G)}return Q?Y:_}function Wj({onTabClosed:_}={}){let $=P(_);$.current=_;let[j,Z]=h(()=>a0.getTabs()),[Q,Y]=h(()=>a0.getActiveId()),[q,G]=h(()=>a0.getTabs().length>0);m(()=>{return a0.onChange((f,R)=>{Z(f),Y(R),G(f.length>0)})},[]);let[K,X]=h(()=>new Set),[N,V]=h(()=>new Map),W=S((f)=>{X((R)=>{let H=new Set(R);if(H.has(f))H.delete(f);else H.add(f);return H})},[]),O=S((f)=>{X((R)=>{if(!R.has(f))return R;let H=new Set(R);return H.delete(f),H})},[]),M=S((f)=>{V((R)=>{if(!R.has(f))return R;let H=new Map(R);return H.delete(f),H})},[]),I=S((f,R={})=>{if(!f)return;let H=typeof R?.paneOverrideId==="string"&&R.paneOverrideId.trim()?R.paneOverrideId.trim():null,x={path:f,mode:"edit"};try{if(!(H?n0.get(H):n0.resolve(x))){if(!n0.get("editor")){console.warn(`[openEditor] No pane handler for: ${f}`);return}}}catch(G0){console.warn(`[openEditor] paneRegistry.resolve() error for "${f}":`,G0)}let c=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0;if(a0.open(f,c),H)V((G0)=>{if(G0.get(f)===H)return G0;let d=new Map(G0);return d.set(f,H),d})},[]),E=S(()=>{let f=a0.getActiveId();if(f){let R=a0.get(f);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}a0.close(f),O(f),M(f),$.current?.(f)}},[M,O]),J=S((f)=>{let R=a0.get(f);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}a0.close(f),O(f),M(f),$.current?.(f)},[M,O]),D=S((f)=>{a0.activate(f)},[]),k=S((f)=>{let R=a0.getTabs().filter((c)=>c.id!==f&&!c.pinned),H=R.filter((c)=>c.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let x=R.map((c)=>c.id);a0.closeOthers(f),x.forEach((c)=>{O(c),M(c),$.current?.(c)})},[M,O]),i=S(()=>{let f=a0.getTabs().filter((x)=>!x.pinned),R=f.filter((x)=>x.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let H=f.map((x)=>x.id);a0.closeAll(),H.forEach((x)=>{O(x),M(x),$.current?.(x)})},[M,O]),p=S((f)=>{a0.togglePin(f)},[]),s=S((f)=>{if(!f)return;V((R)=>{if(R.get(f)==="editor")return R;let H=new Map(R);return H.set(f,"editor"),H}),a0.activate(f)},[]),e=S(()=>{let f=a0.getActiveId();if(f)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:f}}))},[]);return m(()=>{let f=(R)=>{let{oldPath:H,newPath:x,type:c}=R.detail||{};if(!H||!x)return;if(c==="dir"){for(let G0 of a0.getTabs())if(G0.path===H||G0.path.startsWith(`${H}/`)){let d=`${x}${G0.path.slice(H.length)}`;a0.rename(G0.id,d)}}else a0.rename(H,x);V((G0)=>NX(G0,H,x,c))};return window.addEventListener("workspace-file-renamed",f),()=>window.removeEventListener("workspace-file-renamed",f)},[]),m(()=>{let f=(R)=>{if(a0.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Q,previewTabs:K,tabPaneOverrides:N,openEditor:I,closeEditor:E,handleTabClose:J,handleTabActivate:D,handleTabCloseOthers:k,handleTabCloseAll:i,handleTabTogglePin:p,handleTabTogglePreview:W,handleTabEditSource:s,revealInExplorer:e}}function W3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Q=j[_]??window[Z],Y=Number(Q);return Number.isFinite(Y)?Y:$}catch{return $}}var U3=W3("warning",30000),Uj=W3("finalize",120000),L3=W3("refresh",30000),Lj=30000;function Fj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function zj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Hj(_=30000){let[,$]=h(0);m(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function F3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Q)=>Z+Math.max(1,Math.ceil(Q.length/$)),0)}function Jj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function z3(_){return String(_||"").trim()||"web:default"}function Oj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Dj(_={}){return F4(_)&&o8(_)}function VX(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function BX(_={},$={}){if(!Dj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Q=VX({window:j});if(Q&&Q>0)Z.documentElement.style.setProperty("--app-height",`${Q}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Q}function Aj(_={}){if(!Dj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Q=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of Q)$.clearTimeout?.(V);Q.clear()},q=()=>{Z=0,BX({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},K=()=>{G();for(let V of[80,220,420]){let W=$.setTimeout?.(()=>{Q.delete(W),G()},V);if(W!=null)Q.add(W)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},N=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",K,!0),N?.addEventListener?.("resize",K),N?.addEventListener?.("scroll",K),()=>{Y(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",K,!0),N?.removeEventListener?.("resize",K),N?.removeEventListener?.("scroll",K)}}function WX(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function G_(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:WX($,j)}var UX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Ej(_){return UX.has(String(_||"").trim())}function LX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function H3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(LX(_),{detail:Z})),!0}var FX=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Mj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Q=()=>{_(F4({window:j,navigator:Z}))};Q();let q=FX.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Q),()=>G.removeEventListener("change",Q);if(typeof G.addListener==="function")return G.addListener(Q),()=>G.removeListener(Q);return()=>{}});return j.addEventListener?.("focus",Q),j.addEventListener?.("pageshow",Q),()=>{for(let G of q)G();j.removeEventListener?.("focus",Q),j.removeEventListener?.("pageshow",Q)}}function Ij(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Q=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Q),j.addEventListener?.("pageshow",Q),Z.addEventListener?.("visibilitychange",Q),()=>{j.removeEventListener?.("focus",Q),j.removeEventListener?.("pageshow",Q),Z.removeEventListener?.("visibilitychange",Q)}}function kj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Q=_?.popOutPane,Y=(K)=>{let X=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(X)Z?.(X,N)},q=(K)=>{let X=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(X)Q?.(X,N)},G=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return G.forEach((K)=>j.addEventListener(K,Y)),j.addEventListener("pane:popout",q),()=>{G.forEach((K)=>j.removeEventListener(K,Y)),j.removeEventListener("pane:popout",q)}}function Tj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Q)=>{if(Q?.ctrlKey&&Q.key==="`")Q.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function Pj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Q=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(G)=>{if(G?.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault?.(),Z?.();return}if(G?.key==="Escape"&&Y())G.preventDefault?.(),Q?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}var zX="piclaw_btw_session",Sj=900,Cj="__piclawRenameBranchFormLock__";function HX(){try{return import.meta.url}catch{return null}}function J3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function Z6(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function xj(_={}){let $=_.importMetaUrl===void 0?HX():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin;try{let Q=$?new URL($).searchParams.get("v"):null;if(Q&&Q.trim())return Q.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let G=new URL(Y,Z||"http://localhost").searchParams.get("v");return G&&G.trim()?G.trim():null}catch{return null}}function O3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[Cj];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[Cj]=Z,Z}function Rj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function yj(_={}){let $=typeof _.readItem==="function"?_.readItem:J_,j=_.storageKey||zX,Z=$(j);if(!Z)return null;try{let Q=JSON.parse(Z);if(!Q||typeof Q!=="object")return null;let Y=typeof Q.question==="string"?Q.question:"",q=typeof Q.answer==="string"?Q.answer:"",G=typeof Q.thinking==="string"?Q.thinking:"",K=typeof Q.error==="string"&&Q.error.trim()?Q.error:null,X=Q.status==="running"?"error":Q.status==="success"||Q.status==="error"?Q.status:"success";return{question:Y,answer:q,thinking:G,error:X==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:X}}catch{return null}}function wj(_,$={}){let j=$.defaultChatJid||"web:default",Z=Z6(_,"chat_jid",j),Q=J3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=J3(_?.get?.("pane_popout")),q=Z6(_,"pane_path"),G=Z6(_,"pane_label"),K=J3(_?.get?.("branch_loader")),X=Z6(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Q,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:G,branchLoaderMode:K,branchLoaderSourceChatJid:X}}function fj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Q,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:G,now:K=Date.now()}=_||{};if(!$||!j?.chat_jid)return!1;let X=Y?.()||null;if(!X)return!1;if(Z||K<Number(Q||0)||X.inFlight||K<Number(X.cooldownUntil||0))return!1;return q?.(j.agent_name||""),G?.(!0),!0}function vj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_||{};$?.(!1),j?.("")}async function bj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Q,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:G,setIsRenamingBranch:K,renameChatBranch:X,refreshActiveChatAgents:N,refreshCurrentChatBranches:V,showIntentToast:W,closeRenameForm:O,now:M=()=>Date.now()}=_||{};if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Q?.(),!1;let I=M(),E=G?.()||null;if(!E)return!1;if(Y?.current||I<Number(q?.current||0)||E.inFlight||I<Number(E.cooldownUntil||0))return!1;Y.current=!0,E.inFlight=!0,K?.(!0);try{let J=j.agent_name||"",D=x8(Z,J);if(!D.canSubmit)return W?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let k=D.normalized||J,i=await X(j.chat_jid,{agentName:k});await Promise.allSettled([N?.(),V?.()]);let p=i?.branch?.agent_name||k||J;return W?.("Branch renamed",`@${p}`,"info",3500),O?.(),!0}catch(J){let D=J instanceof Error?J.message:String(J||"Could not rename branch."),k=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return W?.("Could not rename branch",k||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,K?.(!1);let J=M()+Sj;if(q)q.current=J;let D=G?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=J}}async function gj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Q,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:G,refreshActiveChatAgents:K,refreshCurrentChatBranches:X,showIntentToast:N,baseHref:V,chatOnlyMode:W,navigate:O,confirm:M=(s)=>window.confirm(s)}=_||{};if(!$)return!1;let I=typeof j==="string"&&j.trim()?j.trim():"",E=typeof Z==="string"&&Z.trim()?Z.trim():"",J=I||Q?.chat_jid||E;if(!J)return N?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Q?.chat_jid===J?Q:null)||Y.find((s)=>s?.chat_jid===J)||q.find((s)=>s?.chat_jid===J)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return N?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let i=`@${D?.agent_name||J}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!M(`Prune ${i}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await G(J),await Promise.allSettled([K?.(),X?.()]);let s=D?.root_chat_jid||"web:default";N?.("Branch pruned",`${i} has been archived.`,"info",3000);let e=z4(V,s,{chatOnly:W});return O?.(e),!0}catch(s){let e=s instanceof Error?s.message:String(s||"Could not prune branch.");return N?.("Could not prune branch",e||"Could not prune branch.","warning",5000),!1}}async function uj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Q,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:G,chatOnlyMode:K,navigate:X}=_||{},N=typeof $==="string"?$.trim():"";if(!N||typeof j!=="function")return!1;try{let V=Z.find((J)=>J?.chat_jid===N)||null,W=await j(N);await Promise.allSettled([Q?.(),Y?.()]);let O=W?.branch,M=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():N,I=A2(V?.agent_name,O?.agent_name,M);q?.("Branch restored",I,"info",4200);let E=z4(G,M,{chatOnly:K});return X?.(E),!0}catch(V){let W=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",W||"Could not restore branch.","warning",5000),!1}}async function mj(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Q,baseHref:Y,isCancelled:q=()=>!1}=_||{};try{Z?.({status:"running",message:"Preparing a new chat branch…"});let G=await j($);if(q())return!1;let K=G?.branch,X=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!X)throw Error("Branch fork did not return a chat id.");let N=z4(Y,X,{chatOnly:!0});return Q?.(N,{replace:!0}),!0}catch(G){if(q())return!1;return Z?.({status:"error",message:t5(G)}),!1}}async function hj(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Q,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:G,baseHref:K}=_||{};try{let N=(await Z($))?.branch,V=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Q?.(),Y?.()]);let W=N?.agent_name?`@${N.agent_name}`:V;q?.("New branch created",`Switched to ${W}.`,"info",2500);let O=z4(K,V,{chatOnly:j});return G?.(O),!0}catch(X){return q?.("Could not create branch",t5(X),"warning",5000),!1}}async function pj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Q,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:G,currentChatJid:K,baseHref:X}=_||{};if(!$||j)return!1;let N=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!N)return!1;let V=v7(N);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let W=D$(V);if(!W)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;A$(W,{title:typeof Q==="string"&&Q.trim()?`Opening ${Q}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(N),M=f7(X,N,{label:typeof Q==="string"&&Q.trim()?Q.trim():void 0,chatJid:K,params:O});return E$(W,M),G?.(N),!0}catch(O){M$(W);let M=O?.message||"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",M,"warning",5000),!1}}async function cj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Q,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:G,setActiveChatAgents:K,setCurrentChatBranches:X,showIntentToast:N,baseHref:V}=_||{};if(!$||j)return!1;let W=y7(Z);if(!W)return N?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(W.mode==="tab"){let M=w7(V,Z,{chatOnly:!0});if(!window.open(M,W.target))return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=D$(W);if(!O)return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;A$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let I=(await Y(Z))?.branch,E=typeof I?.chat_jid==="string"&&I.chat_jid.trim()?I.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await G?.(Q);X?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let J=z4(V,E,{chatOnly:!0});return E$(O,J),!0}catch(M){return M$(O),N?.("Could not open branch window",t5(M),"error",5000),!1}}function Q6(_){return _?{..._}:{text:"",totalLines:0}}function lj(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function JX(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function OX(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function dj(_){return{agentStatus:_.agentStatus,agentDraft:Q6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:Q6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:lj(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:JX(_.silentRecovery)}}function ij(_){let $=_.snapshot||OX(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(Q6($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(Q6($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(lj($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}var nj=xj(),oj=C6,sj=x6,DX=y6,rj=g6,aj=u6,D3=w6,A3=G_(__,"getAgentContext",null),AX=G_(__,"getAutoresearchStatus",null),EX=G_(__,"stopAutoresearch",{status:"ok"}),MX=G_(__,"dismissAutoresearch",{status:"ok"}),tj=G_(__,"getAgentModels",{current:null,models:[]}),ej=G_(__,"getActiveChatAgents",{chats:[]}),Y6=G_(__,"getChatBranches",{chats:[]}),IX=G_(__,"renameChatBranch",null),kX=G_(__,"pruneChatBranch",null),TX=G_(__,"restoreChatBranch",null),_Z=G_(__,"getAgentQueueState",{count:0}),PX=G_(__,"steerAgentQueueItem",{removed:!1,queued:"steer"}),CX=G_(__,"removeAgentQueueItem",{removed:!1}),SX=G_(__,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});n0.register(L$);n0.register(c$);n0.register(p$);n0.register(l$);n0.register(d$);n0.register(i$);n0.register(o$);n0.register(s$);n0.register(a$);n0.register(_3);n0.register($3);n0.register(m$);F$();n0.register(J$);n0.register(O$);function xX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Q,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:G,branchLoaderSourceChatJid:K}=v0(()=>wj(_),[_]),[X,N]=h("disconnected"),[V,W]=h(()=>F4()),[O,M]=h(null),[I,E]=h(null),[J,D]=h(!1),[k,i]=h("current"),[p,s]=h([]),[e,f]=h([]),[R,H]=h(null),{agentStatus:x,setAgentStatus:c,agentDraft:G0,setAgentDraft:d,agentPlan:j0,setAgentPlan:_0,agentThought:K0,setAgentThought:V0,pendingRequest:B0,setPendingRequest:J0,currentTurnId:E0,setCurrentTurnId:M0,steerQueuedTurnId:o0,setSteerQueuedTurnId:R0,lastAgentEventRef:T0,lastSilenceNoticeRef:s0,isAgentRunningRef:r0,draftBufferRef:h0,thoughtBufferRef:t0,pendingRequestRef:p0,stalledPostIdRef:j1,currentTurnIdRef:z0,steerQueuedTurnIdRef:l0,thoughtExpandedRef:Z1,draftExpandedRef:q1}=Vj(),[X_,E1]=h({}),[_1,h1]=h(null),[k1,G1]=h(null),[c0,R1]=h(!1),[T1,a]=h(null),[W0,H0]=h([]),[N0,y0]=h([]),[S0,b0]=h(null),[k0,w0]=h(()=>new Map),[i0,D0]=h(()=>new Set),[u0,O0]=h([]),[Y0,w]=h(!1),[t,F0]=h(()=>yj()),[I0,g0]=h(null),X1=P(new Set),M1=v0(()=>W0.find((B)=>B?.chat_jid===j)||null,[W0,j]),N1=v0(()=>N0.find((B)=>B?.chat_jid===j)||M1||null,[M1,N0,j]),p1=N1?.root_chat_jid||M1?.root_chat_jid||j,q4=Rj(k),[U_,$_]=h(()=>({status:G?"running":"idle",message:G?"Preparing a new chat branch…":""})),L_=u0.length,K_=P(new Set),Q1=P([]),s1=P(new Set),G4=P(0),g_=P({inFlight:!1,lastAttemptAt:0,turnId:null});K_.current=new Set(u0.map((B)=>B.row_id)),Q1.current=u0;let{notificationsEnabled:_5,notificationPermission:v4,toggleNotifications:g1,notify:F_}=Kj(),[y1,I1]=h(()=>new Set),[V1,u_]=h(()=>F5("workspaceOpen",!0)),m_=P(null),{editorOpen:W1,tabStripTabs:j_,tabStripActiveId:m0,previewTabs:C1,tabPaneOverrides:A_,openEditor:Z_,closeEditor:b4,handleTabClose:r_,handleTabActivate:g4,handleTabCloseOthers:a_,handleTabCloseAll:$5,handleTabTogglePin:t_,handleTabTogglePreview:h_,handleTabEditSource:T5,revealInExplorer:P5}=Wj({onTabClosed:(B)=>m_.current?.(B)}),U1=P(null),w1=P(null),j5=P(null),E_=P(null),Q_=n0.getDockPanes().length>0,[c1,S1]=h(!1),u1=S(()=>S1((B)=>!B),[]),J1=S(()=>{Z_(t4,{label:"Terminal"})},[Z_]),M_=S(()=>{Z_(Y4,{label:"VNC"})},[Z_]),I_=v0(()=>j_.find((B)=>B.id===m0)||j_[0]||null,[m0,j_]),k_=v0(()=>m0?A_.get(m0)||null:null,[A_,m0]),e_=v0(()=>q||I_?.label||Y||"Pane",[I_?.label,q,Y]),Y_=v0(()=>j_.length>1||Boolean(m0&&C1.has(m0)),[C1,m0,j_.length]),r1=v0(()=>Y===Y4||Y.startsWith(`${Y4}/`),[Y]),T_=v0(()=>Y===t4&&!Y_||r1,[r1,Y_,Y]),X4=Q||!Z&&(W1||Q_&&c1),[O1,_4]=h(!1),u4=P(!1),m4=S(()=>{if(!W1||Z)return;if(u4.current=c1,c1)S1(!1);_4(!0)},[W1,Z,c1]),P_=S(()=>{if(!O1)return;if(_4(!1),u4.current)S1(!0),u4.current=!1},[O1]),h4=S(()=>{if(O1)P_();else m4()},[O1,m4,P_]);m(()=>{if(O1&&!W1)P_()},[O1,W1,P_]),m(()=>{if(!Q||!Y)return;if(a0.getActiveId()===Y)return;Z_(Y,q?{label:q}:void 0)},[Z_,q,Q,Y]),m(()=>{let B=U1.current;if(!B)return;if(w1.current)w1.current.dispose(),w1.current=null;let U=m0;if(!U)return;let A={path:U,mode:"edit"},y=(k_?n0.get(k_):null)||n0.resolve(A)||n0.get("editor");if(!y){B.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let C=y.mount(B,A);w1.current=C,C.onDirtyChange?.(($0)=>{a0.setDirty(U,$0)}),C.onSaveRequest?.(()=>{}),C.onClose?.(()=>{b4()});let u=a0.getViewState(U);if(u&&typeof C.restoreViewState==="function")requestAnimationFrame(()=>C.restoreViewState(u));if(typeof C.onViewStateChange==="function")C.onViewStateChange(($0)=>{a0.saveViewState(U,$0)});return requestAnimationFrame(()=>C.focus()),()=>{if(w1.current===C)C.dispose(),w1.current=null}},[m0,k_,b4]);let Z5=S(async(B)=>{let U=typeof m0==="string"?m0.trim():"",A=w1.current;if(!U||!A?.setContent)return;if(typeof A.isDirty==="function"&&A.isDirty())return;if(!(Array.isArray(B)&&B.length>0?B.some((C)=>{let u=Array.isArray(C?.changed_paths)?C.changed_paths.map((Q0)=>typeof Q0==="string"?Q0.trim():"").filter(Boolean):[];if(u.length>0)return u.some((Q0)=>Q0==="."||Q0===U);let $0=typeof C?.path==="string"?C.path.trim():"";return!$0||$0==="."||$0===U}):!0))return;try{let C=await c5(U,1e6,"edit"),u=typeof C?.text==="string"?C.text:"",$0=typeof C?.mtime==="string"&&C.mtime.trim()?C.mtime.trim():new Date().toISOString();A.setContent(u,$0)}catch(C){console.warn("[workspace_update] Failed to refresh active pane:",C)}},[m0]);m(()=>{let B=j5.current;if(E_.current)E_.current.dispose(),E_.current=null;if(!B||!Q_||!c1)return;let U=n0.getDockPanes()[0];if(!U){B.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let A=U.mount(B,{mode:"view"});return E_.current=A,requestAnimationFrame(()=>A.focus?.()),()=>{if(E_.current===A)A.dispose(),E_.current=null}},[Q_,c1]);let[p_,c_]=h({name:"You",avatar_url:null,avatar_background:null}),O4=P(null),l_=P(!1),p4=P(!1),d_=P(!1),C_=P(null),P1=P(j),D4=P(new Map),A4=P(j),c4=P(0),z1=P(0),E4=P({}),Q5=P({name:null,avatar_url:null}),m1=P({currentHashtag:null,searchQuery:null,searchOpen:!1}),N_=P(null),$4=P(null),l4=P(0),K4=P(0),M4=P(0),N4=P(null),S_=P(null),z_=P(null),I4=P(null),d4=P(0),x_=P({title:null,avatarBase:null}),z=P(null),T=P(!1),[v,b]=h(!1),o=P(0),[X0,U0]=h(!1),[L0,Z0]=h(""),C0=v0(()=>x8(L0,N1?.agent_name||""),[N1?.agent_name,L0]),f1=P(null),q_=S(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);Hj(30000),m(()=>{if(!X0)return;requestAnimationFrame(()=>{if(X0)f1.current?.focus(),f1.current?.select?.()})},[X0]),m(()=>{return v2()},[]),m(()=>{return Mj(W)},[]),m(()=>{K1("workspaceOpen",String(V1))},[V1]),m(()=>{return Aj()},[]),m(()=>{return()=>{q_()}},[q_]),m(()=>{if(!t){K1(BTW_SESSION_KEY,"");return}K1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),m(()=>{E4.current=X_||{}},[X_]),m(()=>{P1.current=j},[j]),m(()=>{Q5.current=p_||{name:"You",avatar_url:null,avatar_background:null}},[p_]);let l1=S((B,U,A=null)=>{if(typeof document>"u")return;let y=(B||"").trim()||"PiClaw";if(x_.current.title!==y){document.title=y;let q0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(q0&&q0.getAttribute("content")!==y)q0.setAttribute("content",y);x_.current.title=y}let C=document.getElementById("dynamic-favicon");if(!C)return;let u=C.getAttribute("data-default")||C.getAttribute("href")||"/favicon.ico",$0=U||u,Q0=U?`${$0}|${A||""}`:$0;if(x_.current.avatarBase!==Q0){let q0=U?`${$0}${$0.includes("?")?"&":"?"}v=${A||Date.now()}`:$0;C.setAttribute("href",q0),x_.current.avatarBase=Q0}},[]),C5=S((B)=>{if(!B)return;s((U)=>U.includes(B)?U:[...U,B])},[]),F=S((B)=>{s((U)=>U.filter((A)=>A!==B))},[]);m_.current=F;let g=S(()=>{s([])},[]),n=S((B)=>{if(!Array.isArray(B)){s([]);return}let U=[],A=new Set;for(let y of B){if(typeof y!=="string"||!y.trim())continue;let C=y.trim();if(A.has(C))continue;A.add(C),U.push(C)}s(U)},[]),l=S((B,U=null,A="info",y=3000)=>{q_(),H({title:B,detail:U||null,kind:A||"info"}),z.current=setTimeout(()=>{H((C)=>C?.title===B?null:C)},y)},[q_]),P0=S((B)=>{let U=Jj(B,{editorOpen:W1,resolvePane:(A)=>n0.resolve(A)});if(U.kind==="open"){Z_(U.path);return}if(U.kind==="toast")l(U.title,U.detail,U.level)},[W1,Z_,l]),D1=S(()=>{let B=m0;if(B)C5(B)},[m0,C5]),x1=S((B)=>{if(!B)return;f((U)=>U.includes(B)?U:[...U,B])},[]),v1=S(async(B,U=null)=>{let A=(C)=>{C.scrollIntoView({behavior:"smooth",block:"center"}),C.classList.add("post-highlight"),setTimeout(()=>C.classList.remove("post-highlight"),2000)},y=document.getElementById("post-"+B);if(y){A(y);return}try{let C=typeof U==="string"&&U.trim()?U.trim():j,$0=(await S6(B,C))?.thread?.[0];if(!$0)return;i1((Q0)=>{if(!Q0)return[$0];if(Q0.some((q0)=>q0.id===$0.id))return Q0;return[...Q0,$0]}),requestAnimationFrame(()=>{setTimeout(()=>{let Q0=document.getElementById("post-"+B);if(Q0)A(Q0)},50)})}catch(C){console.error("[scrollToMessage] Failed to fetch message",B,C)}},[j]),V4=S((B)=>{f((U)=>U.filter((A)=>A!==B))},[]),i4=S(()=>{f([])},[]),Y5=S((B)=>{if(!Array.isArray(B)){f([]);return}let U=[],A=new Set;for(let y of B){if(typeof y!=="string"||!y.trim())continue;let C=y.trim();if(A.has(C))continue;A.add(C),U.push(C)}f(U)},[]),q5=S((B)=>{let U=typeof B==="string"&&B.trim()?B.trim():"Could not send your message.";l("Compose failed",U,"error",5000)},[l]),V_=S((B={})=>{let U=Date.now();if(T0.current=U,B.running)r0.current=!0,w((A)=>A?A:!0);if(B.clearSilence)s0.current=0},[w]),d1=S(()=>{if(I4.current)clearTimeout(I4.current),I4.current=null;d4.current=0},[]);m(()=>()=>{d1()},[d1]);let G5=S(()=>{d1(),c((B)=>{if(!B)return B;if(!(B.last_activity||B.lastActivity))return B;let{last_activity:U,lastActivity:A,...y}=B;return y})},[d1]),k4=S((B)=>{if(!B)return;d1();let U=Date.now();d4.current=U,c({type:B.type||"active",last_activity:!0}),I4.current=setTimeout(()=>{if(d4.current!==U)return;c((A)=>{if(!A||!(A.last_activity||A.lastActivity))return A;return null})},Lj)},[d1]),H1=S(()=>{r0.current=!1,w(!1),T0.current=null,s0.current=0,h0.current="",t0.current="",p0.current=null,S_.current=null,z0.current=null,l0.current=null,C_.current=null,g_.current={inFlight:!1,lastAttemptAt:0,turnId:null},d1(),M0(null),R0(null),Z1.current=!1,q1.current=!1},[d1,M0,R0,w]),j4=S((B)=>{if(!Oj({remainingQueueCount:B,currentTurnId:z0.current,isAgentTurnActive:Y0}))return;l0.current=null,R0(null)},[Y0,R0]),X5=S(()=>dj({agentStatus:x,agentDraft:G0,agentPlan:j0,agentThought:K0,pendingRequest:B0,currentTurnId:E0,steerQueuedTurnId:o0,isAgentTurnActive:Y0,followupQueueItems:u0,activeModel:_1,activeThinkingLevel:k1,supportsThinking:c0,activeModelUsage:T1,contextUsage:S0,isAgentRunning:r0.current,wasAgentActive:d_.current,draftBuffer:h0.current,thoughtBuffer:t0.current,lastAgentEvent:T0.current,lastSilenceNotice:s0.current,lastAgentResponse:S_.current,currentTurnIdRef:z0.current,steerQueuedTurnIdRef:l0.current,thoughtExpanded:Z1.current,draftExpanded:q1.current,agentStatusRef:C_.current,silentRecovery:g_.current}),[_1,T1,k1,G0,j0,x,K0,S0,E0,u0,Y0,B0,o0,c0]),X8=S((B)=>{ij({snapshot:B,clearLastActivityTimer:d1,refs:{isAgentRunningRef:r0,wasAgentActiveRef:d_,lastAgentEventRef:T0,lastSilenceNoticeRef:s0,draftBufferRef:h0,thoughtBufferRef:t0,pendingRequestRef:p0,lastAgentResponseRef:S_,currentTurnIdRef:z0,steerQueuedTurnIdRef:l0,agentStatusRef:C_,silentRecoveryRef:g_,thoughtExpandedRef:Z1,draftExpandedRef:q1},setters:{setIsAgentTurnActive:w,setAgentStatus:c,setAgentDraft:d,setAgentPlan:_0,setAgentThought:V0,setPendingRequest:J0,setCurrentTurnId:M0,setSteerQueuedTurnId:R0,setFollowupQueueItems:O0,setActiveModel:h1,setActiveThinkingLevel:G1,setSupportsThinking:R1,setActiveModelUsage:a,setContextUsage:b0}})},[d1,M0,O0,w,R0]),B_=S((B)=>{if(!B)return;if(z0.current===B)return;z0.current=B,g_.current={inFlight:!1,lastAttemptAt:0,turnId:B},M0(B),l0.current=null,R0(null),h0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,S_.current=null,Z1.current=!1,q1.current=!1},[M0,R0]),T4=S((B)=>{if(typeof document<"u"){let q0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&q0)return}let U=S_.current;if(!U||!U.post)return;if(B&&U.turnId&&U.turnId!==B)return;let A=U.post;if(A.id&&N4.current===A.id)return;let y=String(A?.data?.content||"").trim();if(!y)return;N4.current=A.id||N4.current,S_.current=null;let C=y.replace(/\s+/g," ").slice(0,200),u=E4.current||{},Q0=(A?.data?.agent_id?u[A.data.agent_id]:null)?.name||"Pi";F_(Q0,C)},[F_]),H_=S(async(B,U)=>{if(B!=="thought"&&B!=="draft")return;let A=z0.current;if(B==="thought"){if(Z1.current=U,A)try{await aj(A,"thought",U)}catch(y){console.warn("Failed to update thought visibility:",y)}if(!U)return;try{let y=A?await rj(A,"thought"):null;if(y?.text)t0.current=y.text;V0((C)=>({...C||{text:"",totalLines:0},fullText:t0.current||C?.fullText||"",totalLines:Number.isFinite(y?.total_lines)?y.total_lines:C?.totalLines||0}))}catch(y){console.warn("Failed to fetch full thought:",y)}return}if(q1.current=U,A)try{await aj(A,"draft",U)}catch(y){console.warn("Failed to update draft visibility:",y)}if(!U)return;try{let y=A?await rj(A,"draft"):null;if(y?.text)h0.current=y.text;d((C)=>({...C||{text:"",totalLines:0},fullText:h0.current||C?.fullText||"",totalLines:Number.isFinite(y?.total_lines)?y.total_lines:C?.totalLines||0}))}catch(y){console.warn("Failed to fetch full draft:",y)}},[]),P4=P(null),K5=S(()=>{let B=N_.current;if(!B)return;if(!(Math.abs(B.scrollTop)>150))B.scrollTop=0},[]);P4.current=K5;let q6=S((B)=>{let U=N_.current;if(!U||typeof B!=="function"){B?.();return}let{currentHashtag:A,searchQuery:y,searchOpen:C}=m1.current||{},u=!((y||C)&&!A),$0=u?U.scrollHeight-U.scrollTop:U.scrollTop;B(),requestAnimationFrame(()=>{let Q0=N_.current;if(!Q0)return;if(u){let q0=Math.max(Q0.scrollHeight-$0,0);Q0.scrollTop=q0}else{let q0=Math.max(Q0.scrollHeight-Q0.clientHeight,0),r=Math.min($0,q0);Q0.scrollTop=r}})},[]),S5=S((B)=>{let U=N_.current;if(!U||typeof B!=="function"){B?.();return}let A=U.scrollTop;B(),requestAnimationFrame(()=>{let y=N_.current;if(!y)return;let C=Math.max(y.scrollHeight-y.clientHeight,0);y.scrollTop=Math.min(A,C)})},[]),$Z="Queued as a follow-up (one-at-a-time).",jZ="⁣",E3=S((B)=>{if(!B||!Array.isArray(B))return B;let U=K_.current,A=new Set(U),y=B.filter((C)=>{if(A.has(C?.id))return!1;if(C?.data?.is_bot_message){let u=C?.data?.content;if(u===$Z||u===jZ)return!1}return!0});return y.length===B.length?B:y},[]),{posts:x5,setPosts:i1,hasMore:ZZ,setHasMore:K8,hasMoreRef:M3,loadPosts:i_,refreshTimeline:a1,loadMore:QZ,loadMoreRef:G6}=Nj({preserveTimelineScroll:q6,preserveTimelineScrollTop:S5,chatJid:j}),N5=v0(()=>E3(x5),[x5,u0,E3]),N8=S(()=>{let B=j1.current;if(!B)return;i1((U)=>U?U.filter((A)=>A.id!==B):U),j1.current=null},[i1]),{handleSplitterMouseDown:YZ,handleSplitterTouchStart:qZ,handleEditorSplitterMouseDown:GZ,handleEditorSplitterTouchStart:XZ,handleDockSplitterMouseDown:KZ,handleDockSplitterTouchStart:NZ}=Bj({appShellRef:$4,sidebarWidthRef:l4,editorWidthRef:K4,dockHeightRef:M4}),I3=S(()=>{if(!r0.current)return;r0.current=!1,s0.current=0,T0.current=null,z0.current=null,M0(null),Z1.current=!1,q1.current=!1;let B=(h0.current||"").trim();if(h0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,S_.current=null,!B){c({type:"error",title:"Response stalled - No content received"});return}let A=`${B}${`

⚠️ Response may be incomplete - the model stopped responding`}`,y=Date.now(),C=new Date().toISOString(),u={id:y,timestamp:C,data:{type:"agent_response",content:A,agent_id:"default",is_local_stall:!0}};j1.current=y,i1(($0)=>$0?G8([...$0,u]):[u]),P4.current?.(),c(null)},[M0]);m(()=>{m1.current={currentHashtag:O,searchQuery:I,searchOpen:J}},[O,I,J]);let $1=S(()=>{let B=++G4.current,U=j;_Z(U).then((A)=>{if(B!==G4.current)return;if(P1.current!==U)return;let y=s1.current,C=Array.isArray(A?.items)?A.items.map((u)=>({...u})).filter((u)=>!y.has(u.row_id)):[];if(C.length){O0((u)=>{if(u.length===C.length&&u.every(($0,Q0)=>$0.row_id===C[Q0].row_id))return u;return C});return}y.clear(),j4(0),O0((u)=>u.length===0?u:[])}).catch(()=>{if(B!==G4.current)return;if(P1.current!==U)return;O0((A)=>A.length===0?A:[])})},[j4,j,O0]),t1=S(async()=>{let B=j;try{let U=await A3(B);if(P1.current!==B)return;if(U)b0(U)}catch(U){if(P1.current!==B)return;console.warn("Failed to fetch agent context:",U)}},[j]),R_=S(async()=>{let B=j;try{let U=await AX(B);if(P1.current!==B)return;let A=Array.isArray(U?.content)?U.content.find((y)=>y?.type==="status_panel"&&y?.panel):null;w0((y)=>{let C=new Map(y);if(U?.key&&A?.panel)C.set(U.key,A.panel);else C.delete("autoresearch");return C}),D0((y)=>{if(y.size===0)return y;let C=new Set(Array.from(y).filter((u)=>!String(u).startsWith("autoresearch:")));return C.size===y.size?y:C})}catch(U){if(P1.current!==B)return;console.warn("Failed to fetch autoresearch status:",U)}},[j]),y_=S(async()=>{let B=j;try{let U=await D3(B);if(P1.current!==B)return null;if(!U||U.status!=="active"||!U.data){if(d_.current){let{currentHashtag:C,searchQuery:u,searchOpen:$0}=m1.current||{};if(!C&&!u&&!$0)a1()}return d_.current=!1,H1(),C_.current=null,c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,U??null}d_.current=!0;let A=U.data;C_.current=A;let y=A.turn_id||A.turnId;if(y)B_(y);if(V_({running:!0,clearSilence:!0}),G5(),c(A),U.thought&&U.thought.text)V0((C)=>{if(C&&C.text&&C.text.length>=U.thought.text.length)return C;return t0.current=U.thought.text,{text:U.thought.text,totalLines:U.thought.totalLines||0}});if(U.draft&&U.draft.text)d((C)=>{if(C&&C.text&&C.text.length>=U.draft.text.length)return C;return h0.current=U.draft.text,{text:U.draft.text,totalLines:U.draft.totalLines||0}});return U}catch(U){return console.warn("Failed to fetch agent status:",U),null}},[H1,G5,V_,a1,B_]),X6=S(async()=>{if(!r0.current)return null;if(p0.current)return null;let B=z0.current||null,U=g_.current,A=Date.now();if(U.inFlight)return null;if(U.turnId===B&&A-U.lastAttemptAt<L3)return null;U.inFlight=!0,U.lastAttemptAt=A,U.turnId=B;try{let{currentHashtag:y,searchQuery:C,searchOpen:u}=m1.current||{};if(!y&&!C&&!u)await a1();return await $1(),await y_()}finally{U.inFlight=!1}},[y_,$1,a1]);m(()=>{let B=Math.min(1000,Math.max(100,Math.floor(U3/2))),U=setInterval(()=>{if(!r0.current)return;if(p0.current)return;let A=T0.current;if(!A)return;let y=Date.now(),C=y-A,u=W4(C_.current);if(C>=Uj){if(!u)c({type:"waiting",title:"Re-syncing after a quiet period…"});X6();return}if(C>=U3){if(y-s0.current>=L3){if(!u){let $0=Math.floor(C/1000);c({type:"waiting",title:`Waiting for model… No events for ${$0}s`})}s0.current=y,X6()}}},B);return()=>clearInterval(U)},[X6]);let k3=S((B)=>{let U=typeof B==="string"&&B.trim()?B.trim():null;if(!U||!nj||U===nj)return!1;if(O4.current===U)return!0;O4.current=U;let A=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!a0.hasUnsaved()&&!A&&!r0.current&&!p0.current&&!l_.current)return l_.current=!0,l("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{l_.current=!1}},350),!0;return l("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[r0,p0,l]),VZ=S((B)=>{if(N(B),B!=="connected"){c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,H1();return}if(!p4.current){p4.current=!0;let{currentHashtag:C,searchQuery:u,searchOpen:$0}=m1.current||{};if(!C&&!u&&!$0)a1();y_(),$1(),t1();return}let{currentHashtag:U,searchQuery:A,searchOpen:y}=m1.current;if(!U&&!A&&!y)a1();y_(),$1(),t1()},[H1,a1,y_,$1,t1]),BZ=S(async(B)=>{M(B),i1(null),await i_(B)},[i_]),WZ=S(async()=>{M(null),E(null),i1(null),await i_()},[i_]),UZ=S(async(B,U=k)=>{if(!B||!B.trim())return;let A=U==="root"||U==="all"?U:"current";i(A),E(B.trim()),M(null),i1(null);try{let y=await oj(B.trim(),50,0,j,A,p1);i1(y.results),K8(!1)}catch(y){console.error("Failed to search:",y),i1([])}},[j,p1,k]),LZ=S(()=>{D(!0),E(null),M(null),i("current"),i1([])},[]),FZ=S(()=>{D(!1),E(null),i_()},[i_]),yX=S(()=>{},[]),K6=!O&&!I&&!J,zZ=S(async(B)=>{if(!B)return;let U=B.id,A=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():j,y=N5?.filter((u)=>u?.data?.thread_id===U&&u?.id!==U).length||0;if(y>0){if(!window.confirm(`Delete this message and its ${y} replies?`))return}let C=(u)=>{if(!u.length)return;I1((Q0)=>{let q0=new Set(Q0);return u.forEach((r)=>q0.add(r)),q0}),setTimeout(()=>{if(S5(()=>{i1((Q0)=>Q0?Q0.filter((q0)=>!u.includes(q0.id)):Q0)}),I1((Q0)=>{let q0=new Set(Q0);return u.forEach((r)=>q0.delete(r)),q0}),M3.current)G6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let u=await sj(U,y>0,A);if(u?.ids?.length)C(u.ids)}catch(u){let $0=u?.message||"";if(y===0&&$0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let q0=await sj(U,!0,A);if(q0?.ids?.length)C(q0.ids);return}console.error("Failed to delete post:",u),alert(`Failed to delete message: ${$0}`)}},[j,N5,S5]),T3=S(async()=>{try{let B=await DX();E1(Fj(B));let U=B?.user||{};c_((y)=>{let C=typeof U.name==="string"&&U.name.trim()?U.name.trim():"You",u=typeof U.avatar_url==="string"?U.avatar_url.trim():null,$0=typeof U.avatar_background==="string"&&U.avatar_background.trim()?U.avatar_background.trim():null;if(y.name===C&&y.avatar_url===u&&y.avatar_background===$0)return y;return{name:C,avatar_url:u,avatar_background:$0}});let A=(B?.agents||[]).find((y)=>y.id==="default");l1(A?.name,A?.avatar_url)}catch(B){console.warn("Failed to load agents:",B)}},[l1]);m(()=>{T3();let B=z5("sidebarWidth",null),U=Number.isFinite(B)?Math.min(Math.max(B,160),600):280;if(l4.current=U,$4.current)$4.current.style.setProperty("--sidebar-width",`${U}px`)},[T3]);let R5=Y0||x!==null,P3=S((B)=>{if(!B||typeof B!=="object")return;let U=B.agent_id;if(!U)return;let{agent_name:A,agent_avatar:y}=B;if(!A&&y===void 0)return;let C=E4.current?.[U]||{id:U},u=C.name||null,$0=C.avatar_url??C.avatarUrl??C.avatar??null,Q0=!1,q0=!1;if(A&&A!==C.name)u=A,q0=!0;if(y!==void 0){let r=typeof y==="string"?y.trim():null,A0=typeof $0==="string"?$0.trim():null,f0=r||null;if(f0!==(A0||null))$0=f0,Q0=!0}if(!q0&&!Q0)return;if(E1((r)=>{let f0={...r[U]||{id:U}};if(q0)f0.name=u;if(Q0)f0.avatar_url=$0;return{...r,[U]:f0}}),U==="default")l1(u,$0,Q0?Date.now():null)},[l1]),C3=S((B)=>{if(!B||typeof B!=="object")return;let U=B.user_name??B.userName,A=B.user_avatar??B.userAvatar,y=B.user_avatar_background??B.userAvatarBackground;if(U===void 0&&A===void 0&&y===void 0)return;c_((C)=>{let u=typeof U==="string"&&U.trim()?U.trim():C.name||"You",$0=A===void 0?C.avatar_url:typeof A==="string"&&A.trim()?A.trim():null,Q0=y===void 0?C.avatar_background:typeof y==="string"&&y.trim()?y.trim():null;if(C.name===u&&C.avatar_url===$0&&C.avatar_background===Q0)return C;return{name:u,avatar_url:$0,avatar_background:Q0}})},[]),N6=S((B)=>{if(!B||typeof B!=="object")return;let U=B.model??B.current;if(U!==void 0)h1(U);if(B.thinking_level!==void 0)G1(B.thinking_level??null);if(B.supports_thinking!==void 0)R1(Boolean(B.supports_thinking));if(B.provider_usage!==void 0)a(B.provider_usage??null)},[]),y5=S(()=>{let B=j;tj(B).then((U)=>{if(P1.current!==B)return;if(U)N6(U)}).catch(()=>{})},[N6,j]),n1=S(()=>{let B=j,U=(A)=>Array.isArray(A)?A.filter((y)=>y&&typeof y.chat_jid==="string"&&typeof y.agent_name==="string"&&y.agent_name.trim()):[];Promise.all([ej().catch(()=>({chats:[]})),Y6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([A,y])=>{if(P1.current!==B)return;let C=U(A?.chats),u=U(y?.chats);if(u.length===0){H0(C);return}let $0=new Map(C.map((q0)=>[q0.chat_jid,q0])),Q0=u.map((q0)=>{let r=$0.get(q0.chat_jid);return r?{...q0,...r,is_active:r.is_active??q0.is_active}:q0});Q0.sort((q0,r)=>{if(q0.chat_jid===B&&r.chat_jid!==B)return-1;if(r.chat_jid===B&&q0.chat_jid!==B)return 1;let A0=Boolean(q0.archived_at),f0=Boolean(r.archived_at);if(A0!==f0)return A0?1:-1;if(Boolean(q0.is_active)!==Boolean(r.is_active))return q0.is_active?-1:1;return String(q0.chat_jid).localeCompare(String(r.chat_jid))}),H0(Q0)}).catch(()=>{if(P1.current!==B)return;H0([])})},[j]),e1=S(()=>{Y6(p1).then((B)=>{let U=Array.isArray(B?.chats)?B.chats.filter((A)=>A&&typeof A.chat_jid==="string"&&typeof A.agent_name==="string"):[];y0(U)}).catch(()=>{})},[p1]),S3=S((B)=>{let U=B?.row_id;if(U==null)return;s1.current.add(U),O0((A)=>A.filter((y)=>y?.row_id!==U)),PX(U,z3(j)).then(()=>{$1()}).catch((A)=>{console.warn("[queue] Failed to steer queued item:",A),l("Failed to steer message","The queued message could not be sent as steering.","warning"),s1.current.delete(U),$1()})},[j,$1,O0,l]),x3=S((B)=>{let U=B?.row_id;if(U==null)return;let A=Q1.current.filter((y)=>y?.row_id!==U).length;s1.current.add(U),j4(A),O0((y)=>y.filter((C)=>C?.row_id!==U)),CX(U,z3(j)).then(()=>{$1()}).catch((y)=>{console.warn("[queue] Failed to remove queued item:",y),l("Failed to remove message","The queued message could not be removed.","warning"),s1.current.delete(U),$1()})},[j4,j,$1,O0,l]),w5=S((B)=>{if(!B||typeof B!=="object")return;if(n1(),e1(),t1(),R_(),B?.queued==="followup"||B?.queued==="steer"){$1();return}let U=B?.command;if(U&&typeof U==="object"&&(U?.queued_followup||U?.queued_steer))$1()},[n1,R_,e1,t1,$1]),HZ=S(async(B,U)=>{let A=typeof B?.key==="string"?B.key:"",y=typeof U?.key==="string"?U.key:"",C=`${A}:${y}`;if(!A||!y)return;D0((u)=>{if(u.has(C))return u;let $0=new Set(u);return $0.add(C),$0});try{if(U?.action_type==="autoresearch.stop"){await EX(j,{generateReport:!0}),R_();return}if(U?.action_type==="autoresearch.dismiss"){await MX(j),R_();return}if(U?.action_type==="autoresearch.copy_tmux"){let u=typeof B?.tmux_command==="string"?B.tmux_command.trim():"";if(!u)throw Error("No tmux command available.");await navigator.clipboard.writeText(u),l("Copied","tmux command copied to clipboard.","success");return}throw Error(`Unsupported panel action: ${U?.action_type||y}`)}catch(u){l("Panel action failed",u?.message||"Could not complete that action.","warning")}finally{D0((u)=>{if(!u.has(C))return u;let $0=new Set(u);return $0.delete(C),$0})}},[j,R_,l]),V6=S(()=>{if(z_.current)z_.current.abort(),z_.current=null;F0(null)},[]),V8=S(async(B)=>{let U=String(B||"").trim();if(!U)return l("BTW needs a question","Usage: /btw <question>","warning"),!0;if(z_.current)z_.current.abort();let A=new AbortController;z_.current=A,F0({question:U,answer:"",thinking:"",error:null,model:null,status:"running"});try{let y=await SX(U,{signal:A.signal,chatJid:i2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(C,u)=>{if(C==="side_prompt_start")F0(($0)=>$0?{...$0,status:"running"}:$0)},onThinkingDelta:(C)=>{F0((u)=>u?{...u,thinking:`${u.thinking||""}${C||""}`}:u)},onTextDelta:(C)=>{F0((u)=>u?{...u,answer:`${u.answer||""}${C||""}`}:u)}});if(z_.current!==A)return!0;F0((C)=>C?{...C,answer:y?.result||C.answer||"",thinking:y?.thinking||C.thinking||"",model:y?.model||null,status:"success",error:null}:C)}catch(y){if(A.signal.aborted)return!0;F0((C)=>C?{...C,status:"error",error:y?.payload?.error||y?.message||"BTW request failed."}:C)}finally{if(z_.current===A)z_.current=null}return!0},[j,l]),JZ=S(async({content:B})=>{let U=d2(B);if(!U)return!1;if(U.type==="help")return l("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(U.type==="clear")return V6(),l("BTW cleared","Closed the side conversation panel.","info"),!0;if(U.type==="ask")return await V8(U.question),!0;return!1},[V6,V8,l]),OZ=S(()=>{if(t?.question)V8(t.question)},[t,V8]),DZ=S(async()=>{let B=s2(t);if(!B)return;try{let U=await o4("default",B,null,[],R5?"queue":null,j);w5(U),l(U?.queued==="followup"?"BTW queued":"BTW injected",U?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(U){l("BTW inject failed",U?.message||"Could not inject BTW answer into chat.","warning")}},[t,w5,R5,l]),R3=S(async(B=null)=>{let[U,A,y,C,u,$0,Q0]=await Promise.allSettled([D3(j),A3(j),_Z(j),tj(j),ej(),Y6(p1),n4(20,null,j)]),q0=U.status==="fulfilled"?U.value:null,r=A.status==="fulfilled"?A.value:null,A0=y.status==="fulfilled"?y.value:null,f0=C.status==="fulfilled"?C.value:null,B1=u.status==="fulfilled"?u.value:null,Y1=$0.status==="fulfilled"?$0.value:null,w_=Q0.status==="fulfilled"?Q0.value:null,f_=Array.isArray(w_?.posts)?w_.posts:Array.isArray(x5)?x5:[],b3=f_.length?f_[f_.length-1]:null,CZ=f_.filter((L6)=>L6?.data?.is_bot_message).length,SZ=f_.filter((L6)=>!L6?.data?.is_bot_message).length,g3=Number(A0?.count??Q1.current.length??0)||0,u3=Array.isArray(B1?.chats)?B1.chats.length:W0.length,xZ=Array.isArray(Y1?.chats)?Y1.chats.length:N0.length,m3=Number(r?.percent??S0?.percent??0)||0,RZ=Number(r?.tokens??S0?.tokens??0)||0,yZ=Number(r?.contextWindow??S0?.contextWindow??0)||0,wZ=f0?.current??_1??null,fZ=f0?.thinking_level??k1??null,vZ=f0?.supports_thinking??c0,bZ=q0?.status||(Y0?"active":"idle"),gZ=q0?.data?.type||q0?.type||null;return{generatedAt:new Date().toISOString(),request:B,chat:{currentChatJid:j,rootChatJid:p1,activeChats:u3,branches:xZ},agent:{status:bZ,phase:gZ,running:Boolean(Y0)},model:{current:wZ,thinkingLevel:fZ,supportsThinking:Boolean(vZ)},context:{tokens:RZ,contextWindow:yZ,percent:m3},queue:{count:g3},timeline:{loadedPosts:f_.length,botPosts:CZ,userPosts:SZ,latestPostId:b3?.id??null,latestTimestamp:b3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(m3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,g3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,u3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,f_.length*5))}]}},[W0,_1,k1,S0,N0,j,p1,Y0,x5,c0]),f5=S(()=>{y5(),n1(),e1(),$1(),t1(),R_()},[y5,n1,e1,$1,t1,R_]);m(()=>{f5();let B=setInterval(()=>{y5(),n1(),e1(),$1()},60000);return()=>clearInterval(B)},[f5,y5,n1,e1,$1]),m(()=>{w0(new Map),D0(new Set)},[j]),m(()=>{let B=!1,U=()=>{if(B)return;requestAnimationFrame(()=>{if(B)return;K5()})};if(O)return i_(O),()=>{B=!0};if(I)return oj(I,50,0,j,k,p1).then((A)=>{if(B)return;i1(A.results),K8(!1)}).catch((A)=>{if(B)return;console.error("Failed to search:",A),i1([]),K8(!1)}),()=>{B=!0};return i_().then(()=>{U()}).catch((A)=>{if(B)return;console.error("Failed to load timeline:",A)}),()=>{B=!0}},[j,O,I,k,p1,i_,K5,K8,i1]),m(()=>{let B=A4.current||j;D4.current.set(B,X5())},[j,X5]),m(()=>{let B=A4.current||j;if(B===j)return;D4.current.set(B,X5()),A4.current=j,s1.current.clear(),X8(D4.current.get(j)||null),$1(),y_(),t1()},[j,y_,t1,$1,X8,X5]);let AZ=S(()=>{let{currentHashtag:B,searchQuery:U,searchOpen:A}=m1.current||{};if(!B&&!U&&!A)a1();f5()},[f5,a1]),v5=S((B,U="streaming")=>{let A=_7({...B,...B&&B.status?{}:{status:U}});if(!A)return;let y=o1(A);if(y&&X1.current.has(y))return;g0((C)=>{let u=o1(C),$0=Boolean(y&&u&&y===u),Q0={...$0&&C?.artifact?C.artifact:{},...A.artifact||{}};return{...$0&&C?C:{},...A,artifact:Q0,source:"live",originChatJid:A.originChatJid||j,openedAt:$0&&C?.openedAt?C.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),B6=S((B,U)=>{let A=U?.turn_id,y=typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():null,u=y?y===j:B==="connected"||B==="workspace_update";if(u)P3(U),C3(U);if(B==="ui_theme"){b2(U);return}if(B==="generated_widget_open"){if(!u)return;if(A&&!z0.current)B_(A);v5(U,"loading");return}if(B==="generated_widget_delta"){if(!u)return;if(A&&!z0.current)B_(A);v5(U,"streaming");return}if(B==="generated_widget_final"){if(!u)return;if(A&&!z0.current)B_(A);v5(U,"final");return}if(B==="generated_widget_error"){if(!u)return;v5(U,"error");return}if(B==="generated_widget_close"){if(!u)return;let r=o1(U);g0((A0)=>{if(!A0||A0?.source!=="live")return A0;let f0=o1(A0);if(r&&f0&&r!==f0)return A0;return null});return}if(B?.startsWith("agent_")){if(!(B==="agent_draft_delta"||B==="agent_thought_delta"||B==="agent_draft"||B==="agent_thought"))G5()}if(B==="connected"){if(k3(U?.app_asset_version))return;c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,H1();let r=j;D3(r).then((Y1)=>{if(P1.current!==r)return;if(!Y1||Y1.status!=="active"||!Y1.data)return;let w_=Y1.data,f_=w_.turn_id||w_.turnId;if(f_)B_(f_);if(V_({clearSilence:!0}),k4(w_),Y1.thought&&Y1.thought.text)t0.current=Y1.thought.text,V0({text:Y1.thought.text,totalLines:Y1.thought.totalLines||0});if(Y1.draft&&Y1.draft.text)h0.current=Y1.draft.text,d({text:Y1.draft.text,totalLines:Y1.draft.totalLines||0})}).catch((Y1)=>{console.warn("Failed to fetch agent status:",Y1)});let{currentHashtag:A0,searchQuery:f0,searchOpen:B1}=m1.current||{};if(!A0&&!f0&&!B1)a1();f5();return}if(B==="agent_status"){if(!u){if(U?.type==="done"||U?.type==="error")n1(),e1();return}if(U.type==="done"||U.type==="error"){if(A&&z0.current&&A!==z0.current)return;if(U.type==="done"){T4(A||z0.current);let{currentHashtag:r,searchQuery:A0,searchOpen:f0}=m1.current||{};if(!r&&!A0&&!f0)a1();if(U.context_usage)b0(U.context_usage)}if(t1(),d_.current=!1,H1(),s1.current.clear(),n1(),$1(),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),U.type==="error")c({type:"error",title:U.title||"Agent error"}),setTimeout(()=>c(null),8000);else c(null)}else{if(A)B_(A);if(V_({running:!0,clearSilence:!0}),U.type==="thinking")h0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0});C_.current=U,c((r)=>{if(r&&r.type===U.type&&r.title===U.title)return r;return U})}return}if(B==="agent_steer_queued"){if(!u)return;if(A&&z0.current&&A!==z0.current)return;let r=A||z0.current;if(!r)return;l0.current=r,R0(r);return}if(B==="agent_followup_queued"){if(!u)return;let r=U?.row_id,A0=U?.content;if(r!=null&&typeof A0==="string"&&A0.trim())O0((f0)=>{if(f0.some((B1)=>B1?.row_id===r))return f0;return[...f0,{row_id:r,content:A0,timestamp:U?.timestamp||null,thread_id:U?.thread_id??null}]});$1();return}if(B==="agent_followup_consumed"){if(!u)return;let r=U?.row_id;if(r!=null){let Y1=Q1.current.filter((w_)=>w_.row_id!==r).length;j4(Y1),O0((w_)=>w_.filter((f_)=>f_.row_id!==r))}$1();let{currentHashtag:A0,searchQuery:f0,searchOpen:B1}=m1.current||{};if(!A0&&!f0&&!B1)a1();return}if(B==="agent_followup_removed"){if(!u)return;let r=U?.row_id;if(r!=null){let A0=Q1.current.filter((f0)=>f0.row_id!==r).length;s1.current.add(r),j4(A0),O0((f0)=>f0.filter((B1)=>B1.row_id!==r))}$1();return}if(B==="agent_draft_delta"){if(!u)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)B_(A);if(V_({running:!0,clearSilence:!0}),U?.reset)h0.current="";if(U?.delta)h0.current+=U.delta;let r=Date.now();if(!c4.current||r-c4.current>=100){c4.current=r;let A0=h0.current,f0=F3(A0);if(q1.current)d((B1)=>({text:B1?.text||"",totalLines:f0,fullText:A0}));else d({text:A0,totalLines:f0})}return}if(B==="agent_draft"){if(!u)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)B_(A);V_({running:!0,clearSilence:!0});let r=U.text||"",A0=U.mode||(U.kind==="plan"?"replace":"append"),f0=Number.isFinite(U.total_lines)?U.total_lines:r?r.replace(/\r\n/g,`
`).split(`
`).length:0;if(U.kind==="plan")if(A0==="replace")_0(r);else _0((B1)=>(B1||"")+r);else if(!q1.current)h0.current=r,d({text:r,totalLines:f0});return}if(B==="agent_thought_delta"){if(!u)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)B_(A);if(V_({running:!0,clearSilence:!0}),U?.reset)t0.current="";if(typeof U?.delta==="string")t0.current+=U.delta;let r=Date.now();if(Z1.current&&(!z1.current||r-z1.current>=100)){z1.current=r;let A0=t0.current;V0((f0)=>({text:f0?.text||"",totalLines:F3(A0),fullText:A0}))}return}if(B==="agent_thought"){if(!u)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)B_(A);V_({running:!0,clearSilence:!0});let r=U.text||"",A0=Number.isFinite(U.total_lines)?U.total_lines:r?r.replace(/\r\n/g,`
`).split(`
`).length:0;if(!Z1.current)t0.current=r,V0({text:r,totalLines:A0});return}if(B==="model_changed"){if(!u)return;if(U?.model!==void 0)h1(U.model);if(U?.thinking_level!==void 0)G1(U.thinking_level??null);if(U?.supports_thinking!==void 0)R1(Boolean(U.supports_thinking));let r=j;A3(r).then((A0)=>{if(P1.current!==r)return;if(A0)b0(A0)}).catch(()=>{});return}if(B==="extension_ui_widget"&&U?.options?.surface==="status-panel"){if((typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():j)!==j)return;let A0=typeof U?.key==="string"?U.key:"",f0=Array.isArray(U?.content)?U.content.find((B1)=>B1?.type==="status_panel"&&B1?.panel):null;if(!A0)return;if(w0((B1)=>{let Y1=new Map(B1);if(U?.options?.remove||!f0?.panel)Y1.delete(A0);else Y1.set(A0,f0.panel);return Y1}),U?.options?.remove||f0?.panel?.state!=="running")D0((B1)=>{if(B1.size===0)return B1;let Y1=new Set(Array.from(B1).filter((w_)=>!String(w_).startsWith(`${A0}:`)));return Y1.size===B1.size?B1:Y1});H3(B,U);return}if(B==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:U}));Z5(U?.updates);return}if(Ej(B)){if(!u)return;if(H3(B,U),B==="extension_ui_notify"&&typeof U?.message==="string")l(U.message,null,U?.type||"info");if(B==="extension_ui_error"&&typeof U?.error==="string")l("Extension UI error",U.error,"error",5000);return}let{currentHashtag:$0,searchQuery:Q0,searchOpen:q0}=m1.current;if(B==="agent_response"){if(!u)return;N8(),S_.current={post:U,turnId:z0.current}}if(!$0&&!Q0&&!q0&&u&&(B==="new_post"||B==="new_reply"||B==="agent_response"))i1((r)=>{if(!r)return[U];if(r.some((A0)=>A0.id===U.id))return r;return[...r,U]}),P4.current?.();if(B==="interaction_updated"){if(!u)return;if($0||Q0||q0)return;i1((r)=>{if(!r)return r;if(!r.some((A0)=>A0.id===U.id))return r;return r.map((A0)=>A0.id===U.id?U:A0)})}if(B==="interaction_deleted"){if(!u)return;if($0||Q0||q0)return;let r=U?.ids||[];if(r.length){if(S5(()=>{i1((A0)=>A0?A0.filter((f0)=>!r.includes(f0.id)):A0)}),M3.current)G6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[v5,H1,G5,j,G6,V_,T4,S5,n1,e1,a1,N8,B_,k4,P3,C3,y5,$1,O0,t1,k3]);m(()=>{if(typeof window>"u")return;let B=window.__PICLAW_TEST_API||{};return B.emit=B6,B.reset=()=>{N8(),H1(),c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null)},B.finalize=()=>I3(),window.__PICLAW_TEST_API=B,()=>{if(window.__PICLAW_TEST_API===B)window.__PICLAW_TEST_API=void 0}},[H1,I3,B6,N8]),Xj({handleSseEvent:B6,handleConnectionStatusChange:VZ,loadPosts:i_,onWake:AZ,chatJid:j}),m(()=>{if(!N5||N5.length===0)return;let B=location.hash;if(!B||!B.startsWith("#msg-"))return;let U=B.slice(5);v1(U),history.replaceState(null,"",location.pathname+location.search)},[N5,v1]);let W6=x!==null;m(()=>{if(X!=="connected")return;let U=setInterval(()=>{let{currentHashtag:A,searchQuery:y,searchOpen:C}=m1.current||{},u=!A&&!y&&!C;if(W6){if(u)a1();$1(),y_(),t1(),R_()}else{if(u)a1();y_(),t1(),R_()}},W6?15000:60000);return()=>clearInterval(U)},[X,W6,y_,R_,t1,$1,a1]),m(()=>{return Ij(()=>{y_(),t1(),$1(),R_()})},[y_,R_,t1,$1]);let EZ=S(()=>{u_((B)=>!B)},[]),y3=S((B)=>{if(typeof window>"u")return;let U=String(B||"").trim();if(!U||U===j)return;let A=z4(window.location.href,U,{chatOnly:Z});$?.(A)},[Z,j,$]),U6=S(()=>{fj({hasWindow:typeof window<"u",currentBranchRecord:N1,renameBranchInFlight:T.current,renameBranchLockUntil:o.current,getFormLock:O3,setRenameBranchNameDraft:Z0,setIsRenameBranchFormOpen:U0})},[N1]),b5=S(()=>{vj({setIsRenameBranchFormOpen:U0,setRenameBranchNameDraft:Z0})},[]),w3=S(async(B)=>{await bj({hasWindow:typeof window<"u",currentBranchRecord:N1,nextName:B,openRenameForm:U6,renameBranchInFlightRef:T,renameBranchLockUntilRef:o,getFormLock:O3,setIsRenamingBranch:b,renameChatBranch:IX,refreshActiveChatAgents:n1,refreshCurrentChatBranches:e1,showIntentToast:l,closeRenameForm:b5})},[b5,N1,n1,e1,U6,b,l]),f3=S(async(B=null)=>{await gj({hasWindow:typeof window<"u",targetChatJid:B,currentChatJid:j,currentBranchRecord:N1,currentChatBranches:N0,activeChatAgents:W0,pruneChatBranch:kX,refreshActiveChatAgents:n1,refreshCurrentChatBranches:e1,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Z,navigate:$})},[W0,Z,N1,N0,j,$,n1,e1,l]),MZ=S(async(B)=>{await uj({targetChatJid:B,restoreChatBranch:TX,currentChatBranches:N0,refreshActiveChatAgents:n1,refreshCurrentChatBranches:e1,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Z,navigate:$})},[Z,N0,$,n1,e1,l]);m(()=>{if(!G||typeof window>"u")return;let B=!1;return mj({branchLoaderSourceChatJid:K,forkChatBranch:m5,setBranchLoaderState:$_,navigate:$,baseHref:window.location.href,isCancelled:()=>B}),()=>{B=!0}},[G,K,$]);let IZ=S((B)=>{if(!B||typeof B!=="object")return;let U=o1(B);if(U)X1.current.delete(U);g0({...B,openedAt:new Date().toISOString()})},[]),g5=S(()=>{g0((B)=>{let U=o1(B);if(B?.source==="live"&&U)X1.current.add(U);return null})},[]),kZ=S((B,U)=>{let A=typeof B?.kind==="string"?B.kind:"",y=o1(U);if(!A||!y)return;if(A==="widget.close"){g5();return}if(A==="widget.submit"){let C=Q7(B?.payload),u=Y7(B?.payload),$0=new Date().toISOString();if(g0((Q0)=>{let q0=o1(Q0);if(!Q0||q0!==y)return Q0;return{...Q0,runtimeState:{...Q0.runtimeState||{},lastEventKind:A,lastEventPayload:B?.payload||null,lastSubmitAt:$0,lastHostUpdate:{type:"submit_pending",submittedAt:$0,preview:C||null}}}}),!C){if(l("Widget submission received","The widget submitted data without a message payload yet.","info",3500),u)g5();return}(async()=>{try{let Q0=await o4("default",C,null,[],R5?"queue":null,j);if(w5(Q0),g0((q0)=>{let r=o1(q0);if(!q0||r!==y)return q0;return{...q0,runtimeState:{...q0.runtimeState||{},lastHostUpdate:{type:Q0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:$0,preview:C,queued:Q0?.queued||null}}}}),l(Q0?.queued==="followup"?"Widget submission queued":"Widget submission sent",Q0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),u)g5()}catch(Q0){g0((q0)=>{let r=o1(q0);if(!q0||r!==y)return q0;return{...q0,runtimeState:{...q0.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:$0,preview:C,error:Q0?.message||"Could not send the widget message."}}}}),l("Widget submission failed",Q0?.message||"Could not send the widget message.","warning",5000)}})();return}if(A==="widget.ready"||A==="widget.request_refresh"){let C=new Date().toISOString(),u=Boolean(B?.payload?.buildDashboard||B?.payload?.dashboardKind==="internal-state"),$0=Number(U?.runtimeState?.refreshCount||0)+1;if(g0((Q0)=>{let q0=o1(Q0);if(!Q0||q0!==y)return Q0;return{...Q0,runtimeState:{...Q0.runtimeState||{},lastEventKind:A,lastEventPayload:B?.payload||null,...A==="widget.ready"?{readyAt:C,lastHostUpdate:{type:"ready_ack",at:C}}:{},...A==="widget.request_refresh"?{lastRefreshRequestAt:C,refreshCount:$0,lastHostUpdate:{type:u?"refresh_building":"refresh_ack",at:C,count:$0,echo:B?.payload||null}}:{}}}}),A==="widget.request_refresh")if(u)(async()=>{try{let Q0=await R3(B?.payload||null);g0((q0)=>{let r=o1(q0);if(!q0||r!==y)return q0;return{...q0,runtimeState:{...q0.runtimeState||{},dashboard:Q0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:$0,echo:B?.payload||null}}}}),l("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(Q0){g0((q0)=>{let r=o1(q0);if(!q0||r!==y)return q0;return{...q0,runtimeState:{...q0.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:$0,error:Q0?.message||"Could not build dashboard."}}}}),l("Dashboard build failed",Q0?.message||"Could not build dashboard.","warning",5000)}})();else l("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[R3,j,g5,w5,R5,l]);m(()=>{X1.current.clear(),g0(null)},[j]);let TZ=S(async()=>{await hj({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:m5,refreshActiveChatAgents:n1,refreshCurrentChatBranches:e1,showIntentToast:l,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Z,j,$,n1,e1,l]),B8=S(async(B,U)=>{await pj({hasWindow:typeof window<"u",isWebAppMode:V,path:B,label:U,showIntentToast:l,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(A)=>{let C=(typeof m0==="string"?m0.trim():"")===A?w1.current:A===t4?E_.current:null;if(typeof C?.preparePopoutTransfer==="function")return await C.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(A)=>{let y=a0.get(A);if(y&&!y.dirty){r_(A);return}if(A===t4&&c1)S1(!1)}})},[j,c1,r_,V,l,m0]);m(()=>kj({openTab:(B,U)=>Z_(B,U?{label:U}:void 0),popOutPane:(B,U)=>{B8(B,U)}}),[B8,Z_]);let PZ=S(async()=>{await cj({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:p1,forkChatBranch:m5,getActiveChatAgents:R6,getChatBranches:Y6,setActiveChatAgents:H0,setCurrentChatBranches:y0,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,p1,V,l]);m(()=>{if(!W1)return;if(typeof window>"u")return;let B=$4.current;if(!B)return;if(!K4.current){let U=z5("editorWidth",null),A=l4.current||280;K4.current=Number.isFinite(U)?U:A}if(B.style.setProperty("--editor-width",`${K4.current}px`),!M4.current){let U=z5("dockHeight",null);M4.current=Number.isFinite(U)?U:200}B.style.setProperty("--dock-height",`${M4.current}px`)},[W1]),m(()=>{if(!Q_||Z)return;return Tj(u1)},[u1,Q_,Z]),m(()=>{if(Z)return;return Pj({toggleZenMode:h4,exitZenMode:P_,zenMode:O1,isZenModeActive:()=>O1})},[h4,P_,O1,Z]);let v3=Boolean(o0&&o0===(x?.turn_id||E0));if(G)return L`
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
        `;if(Q)return L`
            <div class=${`app-shell pane-popout${W1?" editor-open":""}`} ref=${$4}>
                <div class="editor-pane-container pane-popout-container">
                    ${W1&&!T_&&L`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${Y_?L`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${e_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${j_.length>1&&L`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${j_.map((B)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${B.id===m0?" active":""}`}
                                                                onClick=${(U)=>{g4(B.id),U.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${B.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${m0&&C1.has(m0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(B)=>{h_(m0),B.currentTarget.closest("details")?.removeAttribute("open")}}>
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
                    ${W1?L`<div class="editor-pane-host" ref=${U1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${W1&&m0&&C1.has(m0)&&L`
                        <${B3}
                            getContent=${()=>w1.current?.getContent?.()}
                            path=${m0}
                            onClose=${()=>h_(m0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${V1?"":" workspace-collapsed"}${W1?" editor-open":""}${Z?" chat-only":""}${O1?" zen-mode":""}`} ref=${$4}>
            ${X0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(B)=>{if(B.target===B.currentTarget)b5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(B)=>{B.preventDefault(),w3(L0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${f1}
                            value=${L0}
                            onInput=${(B)=>{let U=B.currentTarget?.value??"";Z0(String(U))}}
                            onKeyDown=${(B)=>{if(B.key==="Escape")B.preventDefault(),b5()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${C0.kind||"info"}`}>
                            ${C0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${v||!C0.canSubmit}>
                                ${v?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${b5}
                                disabled=${v}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Z&&L`
                <${Zj}
                    onFileSelect=${C5}
                    visible=${V1}
                    active=${V1||W1}
                    onOpenEditor=${Z_}
                    onOpenTerminalTab=${J1}
                    onOpenVncTab=${M_}
                    onToggleTerminal=${Q_?u1:void 0}
                    terminalVisible=${Boolean(Q_&&c1)}
                />
                <button
                    class=${`workspace-toggle-tab${V1?" open":" closed"}`}
                    onClick=${EZ}
                    title=${V1?"Hide workspace":"Show workspace"}
                    aria-label=${V1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${YZ} onTouchStart=${qZ}></div>
            `}
            ${X4&&L`
                <div class="editor-pane-container">
                    ${O1&&L`<div class="zen-hover-zone"></div>`}
                    ${W1&&L`
                        <${qj}
                            tabs=${j_}
                            activeId=${m0}
                            onActivate=${g4}
                            onClose=${r_}
                            onCloseOthers=${a_}
                            onCloseAll=${$5}
                            onTogglePin=${t_}
                            onTogglePreview=${h_}
                            onEditSource=${T5}
                            previewTabs=${C1}
                            paneOverrides=${A_}
                            onToggleDock=${Q_?u1:void 0}
                            dockVisible=${Q_&&c1}
                            onToggleZen=${h4}
                            zenMode=${O1}
                            onPopOutTab=${V?void 0:B8}
                        />
                    `}
                    ${W1&&L`<div class="editor-pane-host" ref=${U1}></div>`}
                    ${W1&&m0&&C1.has(m0)&&L`
                        <${B3}
                            getContent=${()=>w1.current?.getContent?.()}
                            path=${m0}
                            onClose=${()=>h_(m0)}
                        />
                    `}
                    ${Q_&&c1&&L`<div class="dock-splitter" onMouseDown=${KZ} onTouchStart=${NZ}></div>`}
                    ${Q_&&L`<div class=${`dock-panel${c1?"":" hidden"}`}>
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
                                <button class="dock-panel-close" onClick=${u1} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
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
                <div class="editor-splitter" onMouseDown=${GZ} onTouchStart=${XZ}></div>
            `}
            <div class="container">
                ${I&&zj()&&L`<div class="search-results-spacer"></div>`}
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
                                    onClick=${U6}
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
                                    onClick=${f3}
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
                        <button class="back-btn" onClick=${WZ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${I} · ${q4}`}</span>
                    </div>
                `}
                <${P7}
                    posts=${N5}
                    hasMore=${K6?ZZ:!1}
                    onLoadMore=${K6?QZ:void 0}
                    timelineRef=${N_}
                    onHashtagClick=${BZ}
                    onMessageRef=${x1}
                    onScrollToMessage=${v1}
                    onFileRef=${P0}
                    onPostClick=${void 0}
                    onDeletePost=${zZ}
                    onOpenWidget=${IZ}
                    emptyMessage=${O?`No posts with #${O}`:I?`No results for "${I}"`:void 0}
                    agents=${X_}
                    user=${p_}
                    reverse=${K6}
                    removingPostIds=${y1}
                    searchQuery=${I}
                />
                <${X$}
                    status=${W4(x)?null:x}
                    draft=${G0}
                    plan=${j0}
                    thought=${K0}
                    pendingRequest=${B0}
                    intent=${R}
                    turnId=${E0}
                    steerQueued=${v3}
                    onPanelToggle=${H_}
                    showExtensionPanels=${!1}
                />
                <${r2}
                    session=${t}
                    onClose=${V6}
                    onRetry=${OZ}
                    onInject=${DZ}
                />
                <${X7}
                    widget=${I0}
                    onClose=${g5}
                    onWidgetEvent=${kZ}
                />
                <${X$}
                    extensionPanels=${Array.from(k0.values())}
                    pendingPanelActions=${i0}
                    onExtensionPanelAction=${HZ}
                    turnId=${E0}
                    steerQueued=${v3}
                    onPanelToggle=${H_}
                    showCorePanels=${!1}
                />
                <${e6}
                    items=${J?[]:u0}
                    onInjectQueuedFollowup=${S3}
                    onRemoveQueuedFollowup=${x3}
                    onOpenFilePill=${P0}
                />
                <${M2}
                    onPost=${()=>{let{searchQuery:B,searchOpen:U}=m1.current||{};if(!B&&!U)i_(),K5()}}
                    onFocus=${K5}
                    searchMode=${J}
                    searchScope=${k}
                    onSearch=${UZ}
                    onSearchScopeChange=${i}
                    onEnterSearch=${LZ}
                    onExitSearch=${FZ}
                    fileRefs=${p}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${g}
                    onSetFileRefs=${n}
                    messageRefs=${e}
                    onRemoveMessageRef=${V4}
                    onClearMessageRefs=${i4}
                    onSetMessageRefs=${Y5}
                    onSwitchChat=${y3}
                    onRenameSession=${w3}
                    isRenameSessionInProgress=${v}
                    onCreateSession=${TZ}
                    onDeleteSession=${f3}
                    onRestoreSession=${MZ}
                    activeEditorPath=${Z?null:m0}
                    onAttachEditorFile=${Z?void 0:D1}
                    onOpenFilePill=${P0}
                    followupQueueCount=${L_}
                    followupQueueItems=${u0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${S3}
                    onRemoveQueuedFollowup=${x3}
                    onSubmitIntercept=${JZ}
                    onMessageResponse=${w5}
                    onSubmitError=${q5}
                    onPopOutChat=${V?void 0:PZ}
                    isAgentActive=${R5}
                    activeChatAgents=${W0}
                    currentChatJid=${j}
                    connectionStatus=${X}
                    activeModel=${_1}
                    modelUsage=${T1}
                    thinkingLevel=${k1}
                    supportsThinking=${c0}
                    contextUsage=${S0}
                    notificationsEnabled=${_5}
                    notificationPermission=${v4}
                    onToggleNotifications=${g1}
                    onModelChange=${h1}
                    onModelStateChange=${N6}
                    statusNotice=${W4(x)?x:null}
                />
                <${W7}
                    request=${B0}
                    onRespond=${()=>{J0(null),p0.current=null}}
                />
            </div>
        </div>
    `}function RX(){let[_,$]=h(()=>typeof window>"u"?"http://localhost/":window.location.href);m(()=>{if(typeof window>"u")return;let Q=()=>$(window.location.href);return window.addEventListener("popstate",Q),()=>window.removeEventListener("popstate",Q)},[]);let j=S((Q,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},G=new URL(String(Q||""),window.location.href).toString();if(q)window.history.replaceState(null,"",G);else window.history.pushState(null,"",G);$(window.location.href)},[]),Z=v0(()=>new URL(_).searchParams,[_]);return L`<${xX} locationParams=${Z} navigate=${j} />`}x4(L`<${RX} />`,document.getElementById("app"));

//# debugId=2B73CFA93BD5A1C364756E2164756E21
//# sourceMappingURL=app.bundle.js.map
