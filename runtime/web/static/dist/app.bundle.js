var hZ=Object.defineProperty;var pZ=(_)=>_;function cZ(_,$){this[_]=pZ.bind(null,$)}var lZ=(_,$)=>{for(var j in $)hZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:cZ.bind($,j)})};var M8,B1,U2,nZ,T4,j2,L2,F2,z2,C6,E6,k6,H2,A8={},E8=[],dZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,I8=Array.isArray;function G4(_,$){for(var j in $)_[j]=$[j];return _}function P6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function T8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?M8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return O8(_,q,Q,Z,null)}function O8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++U2:Z,__i:-1,__u:0};return Z==null&&B1.vnode!=null&&B1.vnode(Y),Y}function C8(_){return _.children}function B5(_,$){this.props=_,this.context=$}function W5(_,$){if($==null)return _.__?W5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?W5(_):null}function iZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=G4({},$);Y.__v=$.__v+1,B1.vnode&&B1.vnode(Y),S6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?W5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,A2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&J2(Y)}}function J2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),J2(_)}function M6(_){(!_.__d&&(_.__d=!0)&&T4.push(_)&&!k8.__r++||j2!=B1.debounceRendering)&&((j2=B1.debounceRendering)||L2)(k8)}function k8(){try{for(var _,$=1;T4.length;)T4.length>$&&T4.sort(F2),_=T4.shift(),$=T4.length,iZ(_)}finally{T4.length=k8.__r=0}}function O2(_,$,j,Q,Z,Y,q,G,X,K,N){var V,B,O,E,k,A,J,D=Q&&Q.__k||E8,M=$.length;for(X=rZ(j,$,D,X,M),V=0;V<M;V++)(O=j.__k[V])!=null&&(B=O.__i!=-1&&D[O.__i]||A8,O.__i=V,A=S6(_,O,B,Z,Y,q,G,X,K,N),E=O.__e,O.ref&&B.ref!=O.ref&&(B.ref&&x6(B.ref,null,O),N.push(O.ref,O.__c||E,O)),k==null&&E!=null&&(k=E),(J=!!(4&O.__u))||B.__k===O.__k?X=D2(O,X,_,J):typeof O.type=="function"&&A!==void 0?X=A:E&&(X=E.nextSibling),O.__u&=-7);return j.__e=k,X}function rZ(_,$,j,Q,Z){var Y,q,G,X,K,N=j.length,V=N,B=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=O8(null,q,null,null,null):I8(q)?q=_.__k[Y]=O8(C8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=O8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,X=Y+B,q.__=_,q.__b=_.__b+1,G=null,(K=q.__i=oZ(q,j,X,V))!=-1&&(V--,(G=j[K])&&(G.__u|=2)),G==null||G.__v==null?(K==-1&&(Z>N?B--:Z<N&&B++),typeof q.type!="function"&&(q.__u|=4)):K!=X&&(K==X-1?B--:K==X+1?B++:(K>X?B--:B++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<N;Y++)(G=j[Y])!=null&&(2&G.__u)==0&&(G.__e==Q&&(Q=W5(G)),k2(G,G));return Q}function D2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=D2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=W5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function oZ(_,$,j,Q){var Z,Y,q,G=_.key,X=_.type,K=$[j],N=K!=null&&(2&K.__u)==0;if(K===null&&G==null||N&&G==K.key&&X==K.type)return j;if(Q>(N?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((K=$[q=Z>=0?Z--:Y++])!=null&&(2&K.__u)==0&&G==K.key&&X==K.type)return q}return-1}function Q2(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||dZ.test($)?j:j+"px"}function J8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||Q2(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||Q2(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(z2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=C6,_.addEventListener($,Y?k6:E6,Y)):_.removeEventListener($,Y?k6:E6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function Z2(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=C6++;else if($.t<j.u)return;return j(B1.event?B1.event($):$)}}}function S6(_,$,j,Q,Z,Y,q,G,X,K){var N,V,B,O,E,k,A,J,D,M,d,h,o,e,w,x=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),Y=[G=$.__e=j.__e]),(N=B1.__b)&&N($);_:if(typeof x=="function")try{if(J=$.props,D=x.prototype&&x.prototype.render,M=(N=x.contextType)&&Q[N.__c],d=N?M?M.props.value:N.__:Q,j.__c?A=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new x(J,d):($.__c=V=new B5(J,d),V.constructor=x,V.render=aZ),M&&M.sub(V),V.state||(V.state={}),V.__n=Q,B=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&x.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=G4({},V.__s)),G4(V.__s,x.getDerivedStateFromProps(J,V.__s))),O=V.props,E=V.state,V.__v=$,B)D&&x.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&x.getDerivedStateFromProps==null&&J!==O&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,d),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,d)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),E8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,d),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(O,E,k)})}if(V.context=d,V.props=J,V.__P=_,V.__e=!1,h=B1.__r,o=0,D)V.state=V.__s,V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),E8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++o<25);V.state=V.__s,V.getChildContext!=null&&(Q=G4(G4({},Q),V.getChildContext())),D&&!B&&V.getSnapshotBeforeUpdate!=null&&(k=V.getSnapshotBeforeUpdate(O,E)),e=N!=null&&N.type===C8&&N.key==null?E2(N.props.children):N,G=O2(_,I8(e)?e:[e],$,j,Q,Z,Y,q,G,X,K),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),A&&(V.__E=V.__=null)}catch(H){if($.__v=null,X||Y!=null)if(H.then){for($.__u|=X?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;Y[Y.indexOf(G)]=null,$.__e=G}else{for(w=Y.length;w--;)P6(Y[w]);I6($)}else $.__e=j.__e,$.__k=j.__k,H.then||I6($);B1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=sZ(j.__e,$,j,Q,Z,Y,q,X,K);return(N=B1.diffed)&&N($),128&$.__u?void 0:G}function I6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(I6))}function A2(_,$,j){for(var Q=0;Q<j.length;Q++)x6(j[Q],j[++Q],j[++Q]);B1.__c&&B1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){B1.__e(Y,Z.__v)}})}function E2(_){return typeof _!="object"||_==null||_.__b>0?_:I8(_)?_.map(E2):G4({},_)}function sZ(_,$,j,Q,Z,Y,q,G,X){var K,N,V,B,O,E,k,A=j.props||A8,J=$.props,D=$.type;if(D=="svg"?Z="http://www.w3.org/2000/svg":D=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(K=0;K<Y.length;K++)if((O=Y[K])&&"setAttribute"in O==!!D&&(D?O.localName==D:O.nodeType==3)){_=O,Y[K]=null;break}}if(_==null){if(D==null)return document.createTextNode(J);_=document.createElementNS(Z,D,J.is&&J),G&&(B1.__m&&B1.__m($,Y),G=!1),Y=null}if(D==null)A===J||G&&_.data==J||(_.data=J);else{if(Y=Y&&M8.call(_.childNodes),!G&&Y!=null)for(A={},K=0;K<_.attributes.length;K++)A[(O=_.attributes[K]).name]=O.value;for(K in A)O=A[K],K=="dangerouslySetInnerHTML"?V=O:K=="children"||(K in J)||K=="value"&&("defaultValue"in J)||K=="checked"&&("defaultChecked"in J)||J8(_,K,null,O,Z);for(K in J)O=J[K],K=="children"?B=O:K=="dangerouslySetInnerHTML"?N=O:K=="value"?E=O:K=="checked"?k=O:G&&typeof O!="function"||A[K]===O||J8(_,K,O,A[K],Z);if(N)G||V&&(N.__html==V.__html||N.__html==_.innerHTML)||(_.innerHTML=N.__html),$.__k=[];else if(V&&(_.innerHTML=""),O2($.type=="template"?_.content:_,I8(B)?B:[B],$,j,Q,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&W5(j,0),G,X),Y!=null)for(K=Y.length;K--;)P6(Y[K]);G||(K="value",D=="progress"&&E==null?_.removeAttribute("value"):E!=null&&(E!==_[K]||D=="progress"&&!E||D=="option"&&E!=A[K])&&J8(_,K,E,A[K],Z),K="checked",k!=null&&k!=_[K]&&J8(_,K,k,A[K],Z))}return _}function x6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){B1.__e(Z,j)}}function k2(_,$,j){var Q,Z;if(B1.unmount&&B1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||x6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){B1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&k2(Q[Z],$,j||typeof _.type!="function");j||P6(_.__e),_.__c=_.__=_.__e=void 0}function aZ(_,$,j){return this.constructor(_,j)}function P4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),B1.__&&B1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],S6($,_=(!Q&&j||$).__k=T8(C8,null,[_]),Z||A8,A8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?M8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),A2(Y,_,q)}function M2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,M6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+H2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}M8=E8.slice,B1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(G){_=G}throw _}},U2=0,nZ=function(_){return _!=null&&_.constructor===void 0},B5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=G4({},this.state),typeof _=="function"&&(_=_(G4({},j),this.props)),_&&G4(j,_),_!=null&&this.__v&&($&&this._sb.push($),M6(this))},B5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),M6(this))},B5.prototype.render=C8,T4=[],L2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F2=function(_,$){return _.__v.__b-$.__v.__b},k8.__r=0,z2=/(PointerCapture)$|Capture$/i,C6=0,E6=Z2(!1),k6=Z2(!0),H2=0;var C4,V1,A6,Y2,U5=0,I2=[],H1=B1,q2=H1.__b,G2=H1.__r,K2=H1.diffed,X2=H1.__c,N2=H1.unmount,V2=H1.__;function L5(_,$){H1.__h&&H1.__h(V1,_,U5||$),U5=0;var j=V1.__H||(V1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return U5=1,y6(x2,_)}function y6(_,$,j){var Q=L5(C4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):x2(void 0,$),function(G){var X=Q.__N?Q.__N[0]:Q.__[0],K=Q.t(X,G);X!==K&&(Q.__N=[K,Q.__[1]],Q.__c.setState({}))}],Q.__c=V1,!V1.__f)){var Z=function(G,X,K){if(!Q.__c.__H)return!0;var N=Q.__c.__H.__.filter(function(B){return B.__c});if(N.every(function(B){return!B.__N}))return!Y||Y.call(this,G,X,K);var V=Q.__c.props!==G;return N.some(function(B){if(B.__N){var O=B.__[0];B.__=B.__N,B.__N=void 0,O!==B.__[0]&&(V=!0)}}),Y&&Y.call(this,G,X,K)||V};V1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=V1;V1.componentWillUpdate=function(G,X,K){if(this.__e){var N=Y;Y=void 0,Z(G,X,K),Y=N}q&&q.call(this,G,X,K)},V1.shouldComponentUpdate=Z}return Q.__N||Q.__}function g(_,$){var j=L5(C4++,3);!H1.__s&&R6(j.__H,$)&&(j.__=_,j.u=$,V1.__H.__h.push(j))}function p5(_,$){var j=L5(C4++,4);!H1.__s&&R6(j.__H,$)&&(j.__=_,j.u=$,V1.__h.push(j))}function C(_){return U5=5,R0(function(){return{current:_}},[])}function T2(_,$,j){U5=6,p5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function R0(_,$){var j=L5(C4++,7);return R6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return U5=8,R0(function(){return _},$)}function C2(_){var $=V1.context[_.__c],j=L5(C4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(V1)),$.props.value):_.__}function P2(_,$){H1.useDebugValue&&H1.useDebugValue($?$(_):_)}function S2(_){var $=L5(C4++,10),j=m();return $.__=_,V1.componentDidCatch||(V1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function tZ(){for(var _;_=I2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(D8),$.__h.some(T6),$.__h=[]}catch(j){$.__h=[],H1.__e(j,_.__v)}}}H1.__b=function(_){V1=null,q2&&q2(_)},H1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),V2&&V2(_,$)},H1.__r=function(_){G2&&G2(_),C4=0;var $=(V1=_.__c).__H;$&&(A6===V1?($.__h=[],V1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(D8),$.__h.some(T6),$.__h=[],C4=0)),A6=V1},H1.diffed=function(_){K2&&K2(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(I2.push($)!==1&&Y2===H1.requestAnimationFrame||((Y2=H1.requestAnimationFrame)||eZ)(tZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),A6=V1=null},H1.__c=function(_,$){$.some(function(j){try{j.__h.some(D8),j.__h=j.__h.filter(function(Q){return!Q.__||T6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],H1.__e(Q,j.__v)}}),X2&&X2(_,$)},H1.unmount=function(_){N2&&N2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{D8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&H1.__e($,j.__v))};var B2=typeof requestAnimationFrame=="function";function eZ(_){var $,j=function(){clearTimeout(Q),B2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);B2&&($=requestAnimationFrame(j))}function D8(_){var $=V1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),V1=$}function T6(_){var $=V1;_.__c=_.__(),V1=$}function R6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function x2(_,$){return typeof $=="function"?$(_):$}var y2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],G=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=G:q===4?Q[1]=Object.assign(Q[1]||{},G):q===5?(Q[1]=Q[1]||{})[$[++Y]]=G:q===6?Q[1][$[++Y]]+=G+"":q?(Z=_.apply(G,y2(_,G,j,["",null])),Q.push(Z),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(G)}return Q},W2=new Map;function _Y(_){var $=W2.get(this);return $||($=new Map,W2.set(this,$)),($=y2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",G="",X=[0],K=function(B){Y===1&&(B||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,B,q):Y===3&&(B||q)?(X.push(3,B,q),Y=2):Y===2&&q==="..."&&B?X.push(4,B,0):Y===2&&q&&!B?X.push(5,0,!0,q):Y>=5&&((q||!B&&Y===5)&&(X.push(Y,0,q,Z),Y=6),B&&(X.push(Y,B,0,Z),Y=6)),q=""},N=0;N<j.length;N++){N&&(Y===1&&K(),K(N));for(var V=0;V<j[N].length;V++)Q=j[N][V],Y===1?Q==="<"?(K(),X=[X],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:G?Q===G?G="":q+=Q:Q==='"'||Q==="'"?G=Q:Q===">"?(K(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[N][V+1]===">")?(K(),Y===3&&(X=X[0]),Y=X,(X=X[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(K(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,X=X[0])}return K(),X}(_)),$),arguments,[])).length>1?$:$[0]}var L=_Y.bind(T8);var s1={};lZ(s1,{uploadWorkspaceFile:()=>S8,uploadMedia:()=>h6,updateWorkspaceFile:()=>JY,submitAdaptiveCardAction:()=>p6,streamSidePrompt:()=>FY,stopAutoresearch:()=>VY,steerAgentQueueItem:()=>LY,setWorkspaceVisibility:()=>i5,setAgentThoughtVisibility:()=>n6,sendPeerAgentMessage:()=>KY,sendAgentMessage:()=>i4,searchPosts:()=>f6,restoreChatBranch:()=>GY,respondToAgentRequest:()=>P8,renameWorkspaceFile:()=>s6,renameChatBranch:()=>YY,removeAgentQueueItem:()=>UY,pruneChatBranch:()=>qY,moveWorkspaceEntry:()=>a6,getWorkspaceTree:()=>n5,getWorkspaceRawUrl:()=>x8,getWorkspaceFile:()=>d5,getWorkspaceDownloadUrl:()=>y8,getWorkspaceBranch:()=>HY,getTimeline:()=>d4,getThumbnailUrl:()=>d6,getThread:()=>u6,getPostsByHashtag:()=>w6,getMediaUrl:()=>S_,getMediaText:()=>i6,getMediaInfo:()=>F5,getMediaBlob:()=>zY,getChatBranches:()=>ZY,getAutoresearchStatus:()=>NY,getAgents:()=>g6,getAgentThought:()=>l6,getAgentStatus:()=>m6,getAgentQueueState:()=>WY,getAgentModels:()=>l5,getAgentContext:()=>XY,getActiveChatAgents:()=>b6,forkChatBranch:()=>c5,dismissAutoresearch:()=>BY,deleteWorkspaceFile:()=>t6,deletePost:()=>v6,createWorkspaceFile:()=>o6,createReply:()=>QY,createPost:()=>jY,attachWorkspaceFile:()=>r6,addToWhitelist:()=>c6,SSEClient:()=>R8});async function s0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function R2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function $Y(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:G}=await j.read();if(G)break;Z+=Q.decode(q,{stream:!0});let X=Z.split(`

`);Z=X.pop()||"";for(let K of X){let N=R2(K);if(N)$(N.event,N.data)}}Z+=Q.decode();let Y=R2(Z);if(Y)$(Y.event,Y.data)}async function d4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return s0(Q)}async function w6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return s0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function f6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",G=Z?`&scope=${encodeURIComponent(Z)}`:"",X=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return s0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${G}${X}`)}async function u6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return s0(`/thread/${_}${j}`)}async function jY(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return s0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function QY(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return s0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function v6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return s0(Z,{method:"DELETE"})}async function i4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",G={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")G.mode=Z;return s0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(G)})}async function b6(){return s0("/agent/active-chats")}async function ZY(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return s0(`/agent/branches${Q}`)}async function c5(_,$={}){return s0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function YY(_,$={}){return s0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function qY(_){return s0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function GY(_,$={}){return s0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function KY(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return s0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function g6(){return s0("/agent/roster")}async function m6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/status${$}`)}async function XY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/context${$}`)}async function NY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/autoresearch/status${$}`)}async function VY(_=null,$={}){return s0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function BY(_=null){return s0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function WY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/queue-state${$}`)}async function UY(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function LY(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function l5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/models${$}`)}async function h6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function P8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function p6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function FY(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await $Y(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function c6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function l6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return s0(j)}async function n6(_,$,j){return s0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function S_(_){return`/media/${_}`}function d6(_){return`/media/${_}/thumbnail`}async function F5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function i6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function zY(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function n5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return s0(Q)}async function HY(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return s0($)}async function d5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return s0(Z)}async function JY(_,$){return s0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function r6(_){return s0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function S8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+q,{method:"POST",body:Q});if(!G.ok){let X=await G.json().catch(()=>({error:"Upload failed"})),K=Error(X.error||`HTTP ${G.status}`);throw K.status=G.status,K.code=X.code,K}return G.json()}async function o6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function s6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function a6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function t6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return s0($,{method:"DELETE"})}async function i5(_,$=!1){return s0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function x8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function y8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class R8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function w8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function OY(_,$){let j=w8(_),Q=w8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function e6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function _$(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function DY(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function AY(_,$,j=0,Q=(Z)=>Z){let Z=w8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=DY(Y.length,j),G=Y.map((X)=>w8(Q(X)));for(let X of q)if(G[X].startsWith(Z))return X;for(let X of q)if(G[X].includes(Z))return X;return-1}function $$(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(OY(Y,$))return j}return AY(Z,$,0,Q)}function U_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function q1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function z5(_,$=!1){let j=U_(_);if(j===null)return $;return j==="true"}function H5(_,$=null){let j=U_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}function f8(_){return String(_||"").trim().toLowerCase()}function j$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return f8($[1]||"")}function EY(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=f8(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function w2(_,$,j={}){let Q=j$($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return EY(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return f8(Y?.agent_name).startsWith(Q)})}function Q$(_){let $=f8(_);return $?`@${$} `:""}function f2(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function u8(_){let $=Z$(_);return $?`@${$}`:""}function Z$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function v8(_,$=""){let j=String(_||""),Q=Z$(j),Z=Z$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function u2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?u8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function kY(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function b8(_,$={}){let j=u8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=kY(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function v2(_,$,j){let Q=u8(_),Z=u8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}function MY(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function K4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function g8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return K4(_)?"Compacting context":"Working..."}function IY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function m8(_,$=Date.now()){let j=MY(_);if(j===null)return null;return IY(Math.max(0,$-j))}function c_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let G=`${_}-file-pill`,X=`${_}-file-name`,K=`${_}-file-remove`,N=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${G} title=${j||$} onClick=${Z}>
      ${N}
      <span class=${X}>${$}</span>
      ${Q&&L`
        <button
          class=${K}
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
  `}var TY=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function CY({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",G=`${Q!=null?`Context: ${b2(Q)} / ${b2(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,X=9,K=2*Math.PI*9,N=j/100*K,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
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
                    stroke-dasharray=${`${N} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function b2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function PY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K))Z.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function SY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K)){let N=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)Z.push(N[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function xY(_){let $=PY(_||""),j=SY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function Y$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=xY(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((G)=>L`
                                        <${c_}
                                            key=${"queue-msg-"+G}
                                            prefix="compose"
                                            label=${"msg:"+G}
                                            title=${"Message reference: "+G}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((G)=>{let X=G.split("/").pop()||G;return L`
                                            <${c_}
                                                key=${"queue-file-"+G}
                                                prefix="compose"
                                                label=${X}
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
    `}function g2({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:G,fileRefs:X=[],onRemoveFileRef:K,onClearFileRefs:N,messageRefs:V=[],onRemoveMessageRef:B,onClearMessageRefs:O,activeModel:E=null,modelUsage:k=null,thinkingLevel:A=null,supportsThinking:J=!1,contextUsage:D=null,onContextCompact:M,notificationsEnabled:d=!1,notificationPermission:h="default",onToggleNotifications:o,onModelChange:e,onModelStateChange:w,activeEditorPath:x=null,onAttachEditorFile:H,onOpenFilePill:S,followupQueueItems:p=[],onInjectQueuedFollowup:Z0,onRemoveQueuedFollowup:n,onSubmitIntercept:$0,onMessageResponse:_0,onPopOutChat:q0,isAgentActive:X0=!1,activeChatAgents:N0=[],currentChatJid:z0="web:default",connectionStatus:D0="connected",onSetFileRefs:A0,onSetMessageRefs:n0,onSubmitError:S0,onSwitchChat:M0,onRenameSession:d0,isRenameSessionInProgress:i0=!1,onCreateSession:v0,onDeleteSession:o0,onRestoreSession:b0,showQueueStack:t0=!0,statusNotice:H0=null}){let[m0,e0]=m(""),[Q1,Q_]=m(""),[J1,a0]=m([]),[b1,A1]=m(!1),[Z1,g0]=m([]),[P1,E1]=m(0),[a,V0]=m(!1),[L0,G0]=m([]),[x0,C0]=m(0),[w0,k0]=m(!1),[y0,c0]=m(!1),[O0,u0]=m(!1),[J0,Q0]=m(!1),[y,t]=m([]),[U0,E0]=m(0),[f0,Y1]=m(0),[O1,G1]=m(!1),[g1,$4]=m(0),[X_,a1]=m(null),[N_,Z_]=m(()=>Date.now()),_1=C(null),n1=C(null),j4=C(null),y_=C(null),_5=C(null),f4=C(null),f1=C(null),V_=C(null),S1=C({value:"",updatedAt:0}),D1=C(0),K1=C(!1),R_=200,w_=(F)=>{let v=new Set,i=[];for(let l of F||[]){if(typeof l!=="string")continue;let I0=l.trim();if(!I0||v.has(I0))continue;v.add(I0),i.push(I0)}return i},X1=()=>{let F=U_("piclaw_compose_history");if(!F)return[];try{let v=JSON.parse(F);if(!Array.isArray(v))return[];return w_(v)}catch{return[]}},Y_=(F)=>{q1("piclaw_compose_history",JSON.stringify(F))},h0=C(X1()),I1=C(-1),H_=C(""),t1=m0.trim()||J1.length>0||X.length>0||V.length>0,u4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),d_=typeof window<"u"&&typeof Notification<"u",v4=typeof window<"u"?Boolean(window.isSecureContext):!1,$5=d_&&v4&&h!=="denied",r_=h==="granted"&&d,f_=K4(H0),S5=g8(H0),x5=typeof H0?.detail==="string"&&H0.detail.trim()?H0.detail.trim():"",N1=f_?m8(H0,N_):null,x1=r_?"Disable notifications":"Enable notifications",j5=J1.length>0||X.length>0||V.length>0,J_=D0==="disconnected"?"Reconnecting":String(D0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),e1=D0==="disconnected"?"Reconnecting":`Connection: ${J_}`,m1=(Array.isArray(N0)?N0:[]).filter((F)=>!F?.archived_at),T1=(()=>{for(let F of Array.isArray(N0)?N0:[]){let v=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(v&&v===z0)return F}return null})(),u1=Boolean(T1&&T1.chat_jid===(T1.root_chat_jid||T1.chat_jid)),L1=R0(()=>{let F=new Set,v=[];for(let i of Array.isArray(N0)?N0:[]){let l=typeof i?.chat_jid==="string"?i.chat_jid.trim():"";if(!l||l===z0||F.has(l))continue;if(!(typeof i?.agent_name==="string"?i.agent_name.trim():""))continue;F.add(l),v.push(i)}return v},[N0,z0]),O_=L1.length>0,D_=O_&&typeof M0==="function",A_=O_&&typeof b0==="function",o_=Boolean(i0||K1.current),__=!j&&typeof d0==="function"&&!o_,d1=!j&&typeof v0==="function",E_=!j&&typeof o0==="function"&&!u1,Q4=!j&&(D_||A_||__||d1||E_),F1=E||"",s_=J&&A?` (${A})`:"",b4=s_.trim()?`${A}`:"",g4=typeof k?.hint_short==="string"?k.hint_short.trim():"",k_=[b4||null,g4||null].filter(Boolean).join(" • "),m4=[F1?`Current model: ${F1}${s_}`:null,k?.plan?`Plan: ${k.plan}`:null,g4||null,k?.primary?.reset_description||null,k?.secondary?.reset_description||null].filter(Boolean),Q5=y0?"Switching model…":m4.join(" • ")||`Current model: ${F1}${s_} (tap to open model picker)`,u_=(F)=>{if(!F||typeof F!=="object")return;let v=F.model??F.current;if(typeof w==="function")w({model:v??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(v&&typeof e==="function")e(v)},v_=(F)=>{let v=F||_1.current;if(!v)return;v.style.height="auto",v.style.height=`${v.scrollHeight}px`,v.style.overflowY="hidden"},F4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){V0(!1),g0([]);return}let v=F.toLowerCase().split(" ")[0];if(v.length<1){V0(!1),g0([]);return}let i=TY.filter((l)=>l.name.startsWith(v)||l.name.replace(/-/g,"").startsWith(v.replace(/-/g,"")));if(i.length>0&&!(i.length===1&&i[0].name===v))k0(!1),G0([]),g0(i),E1(0),V0(!0);else V0(!1),g0([])},b_=(F)=>{let v=m0,i=v.indexOf(" "),l=i>=0?v.slice(i):"",I0=F.name+l;e0(I0),V0(!1),g0([]),requestAnimationFrame(()=>{let z1=_1.current;if(!z1)return;let C1=I0.length;z1.selectionStart=C1,z1.selectionEnd=C1,z1.focus()})},h4=(F)=>{if(j$(F)==null){k0(!1),G0([]);return}let v=w2(m1,F,{currentChatJid:z0});if(v.length>0&&!(v.length===1&&Q$(v[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))V0(!1),g0([]),G0(v),C0(0),k0(!0);else k0(!1),G0([])},g_=(F)=>{let v=Q$(F?.agent_name);if(!v)return;e0(v),k0(!1),G0([]),requestAnimationFrame(()=>{let i=_1.current;if(!i)return;let l=v.length;i.selectionStart=l,i.selectionEnd=l,i.focus()})},M_=()=>{if(j||!D_&&!A_&&!__&&!d1&&!E_)return!1;return S1.current={value:"",updatedAt:0},u0(!1),V0(!1),g0([]),k0(!1),G0([]),Q0(!0),!0},k1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!D_&&!A_&&!__&&!d1&&!E_)return;if(J0){S1.current={value:"",updatedAt:0},Q0(!1);return}M_()},z4=(F)=>{let v=typeof F==="string"?F.trim():"";if(Q0(!1),!v||v===z0){requestAnimationFrame(()=>_1.current?.focus());return}M0?.(v)},H4=async(F)=>{let v=typeof F==="string"?F.trim():"";if(Q0(!1),!v||typeof b0!=="function"){requestAnimationFrame(()=>_1.current?.focus());return}try{await b0(v)}catch(i){console.warn("Failed to restore session:",i),requestAnimationFrame(()=>_1.current?.focus())}},p4=(F)=>{let i=(Array.isArray(F)?F:[]).findIndex((l)=>!l?.disabled);return i>=0?i:0},W1=R0(()=>{let F=[];for(let v of L1){let i=Boolean(v?.archived_at),l=typeof v?.agent_name==="string"?v.agent_name.trim():"",I0=typeof v?.chat_jid==="string"?v.chat_jid.trim():"";if(!l||!I0)continue;F.push({type:"session",key:`session:${I0}`,label:`@${l} — ${I0}${v?.is_active?" active":""}${i?" archived":""}`,chat:v,disabled:i?!A_:!D_})}if(d1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(__)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:o_});if(E_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[L1,A_,D_,d1,__,E_,o_]),J4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof d0!=="function"||i0||K1.current)return;K1.current=!0,Q0(!1);try{await d0()}catch(v){console.warn("Failed to rename session:",v)}finally{K1.current=!1}requestAnimationFrame(()=>_1.current?.focus())},Z5=async()=>{if(typeof v0!=="function")return;Q0(!1);try{await v0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>_1.current?.focus())},v1=async()=>{if(typeof o0!=="function")return;Q0(!1);try{await o0(z0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>_1.current?.focus())},q_=(F)=>{if(j)Q_(F);else e0(F),F4(F),h4(F);requestAnimationFrame(()=>v_())},a_=(F)=>{let v=j?Q1:m0,i=v&&!v.endsWith(`
`)?`
`:"",l=`${v}${i}${F}`.trimStart();q_(l)},c4=(F)=>{let v=F?.command?.model_label;if(v)return v;let i=F?.command?.message;if(typeof i==="string"){let l=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(l?.[1])return l[1].trim()}return null},Z4=async(F)=>{if(j||y0)return;c0(!0);try{let v=await i4("default",F,null,[],null,z0),i=c4(v);u_({model:i??E??null,thinking_level:v?.command?.thinking_level,supports_thinking:v?.command?.supports_thinking});try{let l=await l5(z0);if(l)u_(l)}catch{}return _?.(),!0}catch(v){return console.error("Failed to switch model:",v),alert("Failed to switch model: "+v.message),!1}finally{c0(!1)}},O4=async()=>{await Z4("/cycle-model")},Y4=async(F)=>{if(!F||y0)return;if(await Z4(`/model ${F}`))u0(!1)},I_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let v=F.chat;if(v?.archived_at)H4(v.chat_jid);else z4(v.chat_jid);return}if(F.type==="action"){if(F.action==="new"){Z5();return}if(F.action==="rename"){J4();return}if(F.action==="delete")v1()}},B_=(F)=>{F.preventDefault(),F.stopPropagation(),S1.current={value:"",updatedAt:0},Q0(!1),u0((v)=>!v)},D4=async()=>{if(j)return;M?.(),await T_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},l4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return X0?"queue":void 0},T_=async(F,v,i={})=>{let{includeMedia:l=!0,includeFileRefs:I0=!0,includeMessageRefs:z1=!0,clearAfterSubmit:C1=!0,recordHistory:R1=!0}=i||{},q4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:m0,n4=typeof q4==="string"?q4:"";if(!n4.trim()&&(l?J1.length===0:!0)&&(I0?X.length===0:!0)&&(z1?V.length===0:!0))return;V0(!1),g0([]),k0(!1),G0([]),Q0(!1),a1(null);let Y5=l?[...J1]:[],q5=I0?[...X]:[],G_=z1?[...V]:[],p1=n4.trim();if(R1&&p1){let A4=h0.current,U1=w_(A4.filter((t_)=>t_!==p1));if(U1.push(p1),U1.length>200)U1.splice(0,U1.length-200);h0.current=U1,Y_(U1),I1.current=-1,H_.current=""}let G5=()=>{if(l)a0([...Y5]);if(I0)A0?.(q5);if(z1)n0?.(G_);e0(p1),requestAnimationFrame(()=>v_())};if(C1)e0(""),a0([]),N?.(),O?.();(async()=>{try{if(await $0?.({content:p1,submitMode:v,fileRefs:q5,messageRefs:G_,mediaFiles:Y5})){_?.();return}let U1=[];for(let W_ of Y5){let k4=await h6(W_);U1.push(k4.id)}let t_=q5.length?`Files:
${q5.map((W_)=>`- ${W_}`).join(`
`)}`:"",K5=G_.length?`Referenced messages:
${G_.map((W_)=>`- message:${W_}`).join(`
`)}`:"",W8=U1.length?`Attachments:
${U1.map((W_,k4)=>{let W6=Y5[k4]?.name||`attachment-${k4+1}`;return`- attachment:${W_} (${W6})`}).join(`
`)}`:"",C_=[p1,t_,K5,W8].filter(Boolean).join(`

`),E4=await i4("default",C_,null,U1,l4(v),z0);if(_0?.(E4),E4?.command){u_({model:E4.command.model_label??E??null,thinking_level:E4.command.thinking_level,supports_thinking:E4.command.supports_thinking});try{let W_=await l5(z0);if(W_)u_(W_)}catch{}}_?.()}catch(A4){if(C1)G5();let U1=A4?.message||"Failed to send message.";a1(U1),S0?.(U1),console.error("Failed to post:",A4)}})()},z=(F)=>{Z0?.(F)},I=P((F)=>{if(j||!O0&&!J0||F?.isComposing)return!1;let v=()=>{F.preventDefault?.(),F.stopPropagation?.()},i=()=>{S1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(v(),i(),O0)u0(!1);if(J0)Q0(!1);return!0}if(O0){if(F.key==="ArrowDown"){if(v(),i(),y.length>0)E0((l)=>(l+1)%y.length);return!0}if(F.key==="ArrowUp"){if(v(),i(),y.length>0)E0((l)=>(l-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return v(),i(),Y4(y[Math.max(0,Math.min(U0,y.length-1))]),!0;if(e6(F)&&y.length>0){v();let l=_$(S1.current,F.key);S1.current=l;let I0=$$(y,l.value,U0,(z1)=>z1);if(I0>=0)E0(I0);return!0}}if(J0){if(F.key==="ArrowDown"){if(v(),i(),W1.length>0)Y1((l)=>(l+1)%W1.length);return!0}if(F.key==="ArrowUp"){if(v(),i(),W1.length>0)Y1((l)=>(l-1+W1.length)%W1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&W1.length>0)return v(),i(),I_(W1[Math.max(0,Math.min(f0,W1.length-1))]),!0;if(e6(F)&&W1.length>0){v();let l=_$(S1.current,F.key);S1.current=l;let I0=$$(W1,l.value,f0,(z1)=>z1.label);if(I0>=0)Y1(I0);return!0}}return!1},[j,O0,J0,y,U0,W1,f0,Y4]),f=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),Q_(""),G?.();return}if(I(F))return;let v=_1.current?.value??(j?Q1:m0);if(f2(F,v,{searchMode:j,showSessionSwitcherButton:Q4})){F.preventDefault(),M_();return}if(w0&&L0.length>0){let i=_1.current?.value??(j?Q1:m0);if(!String(i||"").match(/^@([a-zA-Z0-9_-]*)$/))k0(!1),G0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),C0((l)=>(l+1)%L0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),C0((l)=>(l-1+L0.length)%L0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),g_(L0[x0]);return}if(F.key==="Escape"){F.preventDefault(),k0(!1),G0([]);return}}}if(a&&Z1.length>0){let i=_1.current?.value??(j?Q1:m0);if(!String(i||"").startsWith("/"))V0(!1),g0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),E1((l)=>(l+1)%Z1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),E1((l)=>(l-1+Z1.length)%Z1.length);return}if(F.key==="Tab"){F.preventDefault(),b_(Z1[P1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!v.includes(" ")){F.preventDefault();let I0=Z1[P1];V0(!1),g0([]),T_(I0.name);return}}if(F.key==="Escape"){F.preventDefault(),V0(!1),g0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let i=_1.current;if(!i)return;let l=i.value||"",I0=i.selectionStart===0&&i.selectionEnd===0,z1=i.selectionStart===l.length&&i.selectionEnd===l.length;if(F.key==="ArrowUp"&&I0||F.key==="ArrowDown"&&z1){let C1=h0.current;if(!C1.length)return;F.preventDefault();let R1=I1.current;if(F.key==="ArrowUp"){if(R1===-1)H_.current=l,R1=C1.length-1;else if(R1>0)R1-=1;I1.current=R1,q_(C1[R1]||"")}else{if(R1===-1)return;if(R1<C1.length-1)R1+=1,I1.current=R1,q_(C1[R1]||"");else I1.current=-1,q_(H_.current||""),H_.current=""}requestAnimationFrame(()=>{let q4=_1.current;if(!q4)return;let n4=q4.value.length;q4.selectionStart=n4,q4.selectionEnd=n4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else T_(v,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else T_(v)},u=(F)=>{let v=Array.from(F||[]).filter((i)=>i instanceof File&&!String(i.name||"").startsWith(".DS_Store"));if(!v.length)return;a0((i)=>[...i,...v]),a1(null)},r=(F)=>{u(F.target.files),F.target.value=""},Y0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),D1.current+=1,A1(!0)},B0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),D1.current=Math.max(0,D1.current-1),D1.current===0)A1(!1)},W0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";A1(!0)},j0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),D1.current=0,A1(!1),u(F.dataTransfer?.files||[])},T0=(F)=>{if(j)return;let v=F.clipboardData?.items;if(!v||!v.length)return;let i=[];for(let l of v){if(l.kind!=="file")continue;let I0=l.getAsFile?.();if(I0)i.push(I0)}if(i.length>0)F.preventDefault(),u(i)},y1=(F)=>{a0((v)=>v.filter((i,l)=>l!==F))},$_=()=>{a1(null),a0([]),N?.(),O?.()},h1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:v,longitude:i,accuracy:l}=F.coords,I0=`${v.toFixed(5)}, ${i.toFixed(5)}`,z1=Number.isFinite(l)?` ±${Math.round(l)}m`:"",C1=`https://maps.google.com/?q=${v},${i}`,R1=`Location: ${I0}${z1} ${C1}`;a_(R1)},(F)=>{let v=F?.message||"Unable to retrieve location.";alert(`Location error: ${v}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!O0)return;S1.current={value:"",updatedAt:0},G1(!0),l5(z0).then((F)=>{let v=Array.isArray(F?.models)?F.models.filter((i)=>typeof i==="string"&&i.trim().length>0):[];v.sort((i,l)=>i.localeCompare(l,void 0,{sensitivity:"base"})),t(v),u_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),t([])}).finally(()=>{G1(!1)})},[O0,E]),g(()=>{if(j)u0(!1),Q0(!1),V0(!1),g0([]),k0(!1),G0([])},[j]),g(()=>{if(J0&&!Q4)Q0(!1)},[J0,Q4]),g(()=>{if(!O0)return;let F=y.findIndex((v)=>v===E);E0(F>=0?F:0)},[O0,y,E]),g(()=>{if(!J0)return;Y1(p4(W1)),S1.current={value:"",updatedAt:0}},[J0,z0]),g(()=>{if(!O0)return;let F=(v)=>{let i=y_.current,l=_5.current,I0=v.target;if(i&&i.contains(I0))return;if(l&&l.contains(I0))return;u0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),g(()=>{if(!J0)return;let F=(v)=>{let i=f4.current,l=f1.current,I0=v.target;if(i&&i.contains(I0))return;if(l&&l.contains(I0))return;Q0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[J0]),g(()=>{if(j||!O0&&!J0)return;let F=(v)=>{I(v)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,O0,J0,I]),g(()=>{if(!O0)return;let F=y_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,U0,y]),g(()=>{if(!J0)return;let F=f4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,f0,W1.length]),g(()=>{let F=()=>{let z1=V_.current?.clientWidth||0;$4((C1)=>C1===z1?C1:z1)};F();let v=V_.current,i=0,l=()=>{if(i)cancelAnimationFrame(i);i=requestAnimationFrame(()=>{i=0,F()})},I0=null;if(v&&typeof ResizeObserver<"u")I0=new ResizeObserver(()=>l()),I0.observe(v);if(typeof window<"u")window.addEventListener("resize",l);return()=>{if(i)cancelAnimationFrame(i);if(I0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",l)}},[j,E,T1?.agent_name,Q4,D?.percent]);let y5=(F)=>{let v=F.target.value;if(a1(null),J0)Q0(!1);v_(F.target),q_(v)};return g(()=>{requestAnimationFrame(()=>v_())},[m0,Q1,j]),g(()=>{if(!f_)return;Z_(Date.now());let F=setInterval(()=>Z_(Date.now()),1000);return()=>clearInterval(F)},[f_,H0?.started_at,H0?.startedAt]),g(()=>{if(j)return;h4(m0)},[m1,z0,m0,j]),L`
        <div class="compose-box">
            ${t0&&!j&&L`
                <${Y$}
                    items=${p}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${n}
                    onOpenFilePill=${S}
                />
            `}
            ${H0&&L`
                <div
                    class=${`compose-inline-status${f_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${x5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${S5}</span>
                        ${N1&&L`<span class="compose-inline-status-elapsed">${N1}</span>`}
                    </div>
                    ${x5&&L`<div class="compose-inline-status-detail">${x5}</div>`}
                </div>
            `}
            ${X_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${X_}</div>
            `}
            <div
                class=${`compose-input-wrapper${b1?" drag-active":""}`}
                onDragEnter=${Y0}
                onDragOver=${W0}
                onDragLeave=${B0}
                onDrop=${j0}
            >
                <div class="compose-input-main">
                    ${j5&&L`
                        <div class="compose-file-refs">
                            ${V.map((F)=>{return L`
                                    <${c_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>B?.(F)}
                                    />
                                `})}
                            ${X.map((F)=>{let v=F.split("/").pop()||F;return L`
                                    <${c_}
                                        prefix="compose"
                                        label=${v}
                                        title=${F}
                                        onClick=${()=>S?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(F)}
                                    />
                                `})}
                            ${J1.map((F,v)=>{let i=F?.name||`attachment-${v+1}`;return L`
                                    <${c_}
                                        key=${i+v}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>y1(v)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${$_}
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
                        ref=${_1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Q1:m0}
                        onInput=${y5}
                        onKeyDown=${f}
                        onPaste=${T0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${w0&&L0.length>0&&L`
                        <div class="slash-autocomplete" ref=${j4}>
                            ${L0.map((F,v)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${v===x0?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),g_(F)}}
                                    onMouseEnter=${()=>C0(v)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${a&&Z1.length>0&&L`
                        <div class="slash-autocomplete" ref=${n1}>
                            ${Z1.map((F,v)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${v===P1?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),b_(F)}}
                                    onMouseEnter=${()=>E1(v)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&L`
                        <div class="compose-model-popup" ref=${y_} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${O1&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!O1&&y.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!O1&&y.map((F,v)=>L`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${U0===v?" active":""}${E===F?" current-model":""}`}
                                        onClick=${()=>{Y4(F)}}
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
                                    onClick=${()=>{O4()}}
                                    disabled=${y0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${J0&&!j&&L`
                        <div class="compose-model-popup" ref=${f4} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return u2(T1,z0)})()}
                                    </div>
                                `}
                                ${!O_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${O_&&L1.map((F,v)=>{let i=Boolean(F.archived_at),I0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!i&&typeof o0==="function",z1=b8(F,{currentChatJid:z0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${i?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${i?" archived":""}${f0===v?" active":""}`}
                                                onClick=${()=>{if(i){H4(F.chat_jid);return}z4(F.chat_jid)}}
                                                disabled=${i?!A_:!D_}
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
                                                    onClick=${(C1)=>{C1.stopPropagation(),Q0(!1),o0(F.chat_jid)}}
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
                            ${(d1||__||E_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${d1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${W1.findIndex((F)=>F.key==="action:new")===f0?" active":""}`}
                                            onClick=${()=>{Z5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${__&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${W1.findIndex((F)=>F.key==="action:rename")===f0?" active":""}`}
                                            onClick=${(F)=>{J4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${o_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${E_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${W1.findIndex((F)=>F.key==="action:delete")===f0?" active":""}`}
                                            onClick=${()=>{v1()}}
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
                <div class="compose-footer" ref=${V_}>
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
                                    onClick=${B_}
                                    disabled=${y0}
                                >
                                    ${y0?"Switching…":F1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!y0&&k_&&L`
                                        <span class="compose-model-usage-hint" title=${Q5}>
                                            ${k_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&L`
                            <${CY} usage=${D} onCompact=${D4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${Q4&&L`
                        ${T1?.agent_name&&L`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${T1.chat_jid||z0}
                                aria-label=${`Manage sessions for @${T1.agent_name}`}
                                onClick=${k1}
                            >@${T1.agent_name}</button>
                        `}
                        <button
                            ref=${f1}
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
                            onClick=${h1}
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
                            class=${`icon-btn notification-btn${r_?" active":""}`}
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
                        ${x&&H&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${x}`}
                                type="button"
                                disabled=${X.includes(x)}
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
                                <span class="compose-connection-status connection-status ${D0}" title=${e1}>
                                    ${J_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{T_()}}
                                    disabled=${!t1}
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
    `}var K$="piclaw_theme",p8="piclaw_tint",p2="piclaw_chat_themes",o5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},c2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},m2={default:{label:"Default",mode:"auto",light:o5,dark:c2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},yY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],r4={theme:"default",tint:null},l2="light",q$=!1;function c8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function O5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function RY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),G=parseInt(Z[3],10);if(![Y,q,G].every((K)=>Number.isFinite(K)))return null;let X=`#${[Y,q,G].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:G,hex:X}}function n2(_){return O5(_)||RY(_)}function r5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function G$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function wY(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function fY(_){return wY(_)>0.4?"#000000":"#ffffff"}function d2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function X$(_){return m2[_]||m2.default}function uY(_){return _.mode==="auto"?d2():_.mode}function i2(_,$){let j=X$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||o5}function r2(_,$,j){let Q=n2($);if(!Q)return _;let Z=O5(_.bgPrimary),Y=O5(_.bgSecondary),q=O5(_.bgHover),G=O5(_.borderColor);if(!Z||!Y||!q||!G)return _;let K=O5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:r5(Z,Q,0.08),bgSecondary:r5(Y,Q,0.12),bgHover:r5(q,Q,0.16),borderColor:r5(G,Q,0.08),accent:Q.hex,accentHover:K?r5(Q,K,0.18):Q.hex}}function vY(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=n2(Q),Y=Z?G$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?G$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Z?G$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X=Z?fY(Z):$==="dark"?"#000000":"#ffffff",K={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":G,"--accent-contrast-text":X,"--danger-color":_.danger||o5.danger,"--success-color":_.success||o5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(K).forEach(([N,V])=>{if(V)j.style.setProperty(N,V)})}function bY(){if(typeof document>"u")return;let _=document.documentElement;yY.forEach(($)=>_.style.removeProperty($))}function J5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function h2(_){let $=c8(r4?.theme||"default"),j=r4?.tint?String(r4.tint).trim():null,Q=i2($,_);if($==="default"&&j)Q=r2(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?c2.bgPrimary:o5.bgPrimary}function gY(_,$){if(typeof document>"u")return;let j=J5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=J5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",h2("light"));let Z=J5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",h2("dark"));let Y=J5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=J5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let G=J5("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function mY(){if(typeof window>"u")return;let _={...r4,mode:l2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function o2(){try{let _=U_(p2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function hY(_,$,j){let Q=o2();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};q1(p2,JSON.stringify(Q))}function pY(_){if(!_)return null;return o2()[_]||null}function s2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function N$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=c8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=X$(j),Y=uY(Z),q=i2(j,Y);r4={theme:j,tint:Q},l2=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=j,G.dataset.tint=Q?String(Q):"",G.style.colorScheme=Y;let X=q;if(j==="default"&&Q)X=r2(q,Q,Y);if(j==="default"&&!Q)bY();else vY(X,Y);if(gY(X.bgPrimary,Y),mY(),$.persist!==!1)if(q1(K$,j),Q)q1(p8,Q);else q1(p8,"")}function h8(){if(X$(r4.theme).mode!=="auto")return;N$(r4,{persist:!1})}function a2(){if(typeof window>"u")return()=>{};let _=s2(),$=pY(_),j=$?c8($.theme||"default"):c8(U_(K$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=U_(p8);return Z?Z.trim():null})();if(N$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!q$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",h8);else if(Z.addListener)Z.addListener(h8);return q$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",h8);else if(Z.removeListener)Z.removeListener(h8);q$=!1}}return()=>{}}function t2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||s2(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(hY($,j||"default",Q),N$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")q1(K$,j||"default"),q1(p8,Q||"")}function e2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return d2()}var l8=/#(\w+)/g,cY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),lY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),nY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),dY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},iY=new Set(["http:","https:","mailto:",""]);function V$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function o4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!iY.has(Q.protocol))return null;return Q.href}catch{return null}}function _7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let G=q.tagName.toLowerCase();if(!lY.has(G)){let K=q.parentNode;if(!K)continue;while(q.firstChild)K.insertBefore(q.firstChild,q);K.removeChild(q);continue}let X=dY[G]||new Set;for(let K of Array.from(q.attributes)){let N=K.name.toLowerCase(),V=K.value;if(N.startsWith("on")){q.removeAttribute(K.name);continue}if(N.startsWith("data-")||N.startsWith("aria-"))continue;if(X.has(N)||nY.has(N)){if(N==="href"){let B=o4(V);if(!B)q.removeAttribute(K.name);else if(q.setAttribute(K.name,B),G==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(N==="src"){let B=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,O=o4(B,{allowDataImage:G==="img"});if(!O)q.removeAttribute(K.name);else q.setAttribute(K.name,O)}continue}q.removeAttribute(K.name)}}return j.body.innerHTML}function $7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function n8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=$7(j);if(Z===j)break;j=Z}return j}function rY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let G of j){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let X=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${X}@@`),Y=!1,q=[];continue}if(Y)q.push(G);else Z.push(G)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function oY(_){if(!_)return _;return n8(_,5)}function sY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function aY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function tY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=oY(Y);return`<div class="mermaid-container" data-mermaid="${sY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function j7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var eY={span:new Set(["title","class","lang","dir"])};function _q(_,$){let j=eY[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let G=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${V$(G)}"`)}return Q.join("")}function Q7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,G=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[X=""]=G.split(/\s+/,1),K=X.toLowerCase();if(!K||!cY.has(K))return $;if(K==="br")return Z?"":"<br>";if(Z)return`</${K}>`;let N=G.slice(X.length).trim(),V=_q(K,N);return`<${K}${V}>`})}function Z7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function Y7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function $q(_){if(!window.katex)return _;let $=(q)=>$7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let G=[],X=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let N=G.length;return G.push(K),`@@CODE_BLOCK_${N}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let N=G.length;return G.push(K),`@@CODE_INLINE_${N}@@`}),{html:X,blocks:G}},Q=(q,G)=>{if(!G.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,K)=>{let N=Number(K);return G[N]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,G,X)=>{try{let K=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${G}${K}`}catch(K){return`<span class="math-error" title="${V$(K.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,G,X)=>{if(/\s$/.test(X))return q;try{let K=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${G}${K}`}catch(K){return`${G}<span class="math-error" title="${V$(K.message)}">$${X}$</span>`}}),Q(Y,Z.blocks)}function jq(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(l8.lastIndex=0,!l8.test(q))continue;l8.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let X=q.split(l8);if(X.length<=1)continue;let K=$.createDocumentFragment();X.forEach((N,V)=>{if(V%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",N),B.textContent=`#${N}`,K.appendChild(B)}else K.appendChild($.createTextNode(N))}),Y.parentNode?.replaceChild(K,Y)}return $.body.innerHTML}function Qq(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function Zq(_){let $=Qq(_||""),{text:j,blocks:Q}=rY($),Z=n8(j,2),q=j7(Z).replace(/</g,"&lt;");return{safeHtml:Q7(q),mermaidBlocks:Q}}function L_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=Zq(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=Z7(Y),Y=Y7(Y),Y=$q(Y),Y=jq(Y),Y=tY(Y,Z),Y=_7(Y,j),Y}function s5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=n8($,2),Z=j7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=Q7(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=Z7(q),q=Y7(q),q=_7(q),q}function Yq(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((X)=>{let[K,N]=X.split(",").map(Number);return{x:K,y:N}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let G=[`M ${q[0].x},${q[0].y}`];for(let X=1;X<q.length-1;X++){let K=q[X-1],N=q[X],V=q[X+1],B=N.x-K.x,O=N.y-K.y,E=V.x-N.x,k=V.y-N.y,A=Math.sqrt(B*B+O*O),J=Math.sqrt(E*E+k*k),D=Math.min($,A/2,J/2);if(D<0.5){G.push(`L ${N.x},${N.y}`);continue}let M=N.x-B/A*D,d=N.y-O/A*D,h=N.x+E/J*D,o=N.y+k/J*D,w=B*k-O*E>0?1:0;G.push(`L ${M},${d}`),G.push(`A ${D},${D} 0 0 ${w} ${h},${o}`)}return G.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${G.join(" ")}"${Y}/>`})}async function X4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=e2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let G=q.dataset.mermaid,X=aY(G||""),K=n8(X,2),N=await $(K,{...Z,transparent:!0});N=Yq(N),q.innerHTML=N,q.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${G.message}`,q.innerHTML="",q.appendChild(X),q.removeAttribute("data-mermaid")}}function q7(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function G7(_){return String(_||"").trim()||"web:default"}function K7(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function X7(_){if(!_)return!1;return _.status!=="running"}function N7(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function V7({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=C(null),Y=C(null),q=_?.thinking?s5(_.thinking):"",G=_?.answer?L_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(Z.current&&q)X4(Z.current).catch(()=>{})},[q]),g(()=>{if(Y.current&&G)X4(Y.current).catch(()=>{})},[G]),!_)return null;let X=_.status==="running",K=Boolean(String(_.answer||"").trim()),N=Boolean(String(_.thinking||"").trim()),V=K7(_),B=X7(_),O=!X&&K,E=X?"Thinking…":_.status==="error"?"Error":"Done";return L`
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
                <details class="btw-block btw-thinking" open=${X?!0:void 0}>
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
    `}function qq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function Gq(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function S4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function P0(_){return typeof _==="string"&&_.trim()?_.trim():null}function W7(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var U7="__PICLAW_WIDGET_HOST__:";function B7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function B$(_,$){if(!_||_.type!=="generated_widget")return null;let j=qq(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:W7(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function L7(_){if(!_||typeof _!=="object")return null;let $=Gq(_),j=P0(_?.widget_id)||P0(_?.widgetId)||P0(_?.tool_call_id)||P0(_?.toolCallId),Q=P0(_?.tool_call_id)||P0(_?.toolCallId),Z=P0(_?.turn_id)||P0(_?.turnId),Y=P0(_?.title)||P0(_?.name)||"Generated widget",q=P0(_?.subtitle)||"",G=P0(_?.description)||q,X=P0(_?.status),K=X==="loading"||X==="streaming"||X==="final"||X==="error"?X:"streaming";return{title:Y,subtitle:q,description:G,originPostId:S4(_?.origin_post_id)??S4(_?.originPostId),originChatJid:P0(_?.origin_chat_jid)||P0(_?.originChatJid)||P0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:W7(_?.capabilities,!0),source:"live",status:K,turnId:Z,toolCallId:Q,width:S4(_?.width),height:S4(_?.height),error:P0(_?.error)}}function F7(_){return B$(_,null)!==null}function F_(_){let $=P0(_?.toolCallId)||P0(_?.tool_call_id);if($)return $;let j=P0(_?.widgetId)||P0(_?.widget_id);if(j)return j;let Q=S4(_?.originPostId)??S4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function z7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function H7(_){return z7(_)?"allow-downloads allow-scripts":"allow-downloads"}function d8(_){return{title:P0(_?.title)||"Generated widget",widgetId:P0(_?.widgetId)||P0(_?.widget_id),toolCallId:P0(_?.toolCallId)||P0(_?.tool_call_id),turnId:P0(_?.turnId)||P0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:P0(_?.status)||"final"}}function i8(_){return{...d8(_),subtitle:P0(_?.subtitle)||"",description:P0(_?.description)||"",error:P0(_?.error)||null,width:S4(_?.width),height:S4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function r8(_){return`${U7}${JSON.stringify(i8(_))}`}function J7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=P0(_.text)||P0(_.content)||P0(_.message)||P0(_.prompt)||P0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=P0(j.text)||P0(j.content)||P0(j.message)||P0(j.prompt)||P0(j.value);if(Q)return Q}return null}function O7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function D7(_){let $=P0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return P0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function Kq(_){let $=d8(_);return`<script>
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

  const windowNamePrefix = ${B7(U7)};
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
</script>`}function A7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let G=z7(_),X=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",G?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,N=G?Kq(_):"";return`<!doctype html>
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
${N}
</head>
<body>${K}</body>
</html>`}function E7({widget:_,onClose:$,onWidgetEvent:j}){let Q=C(null),Z=C(!1),Y=R0(()=>A7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let J=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),g(()=>{Z.current=!1},[Y]),g(()=>{if(!_)return;let J=Q.current;if(!J)return;let D=(e)=>{let w=r8(_),x=e==="widget.init"?d8(_):i8(_);try{J.name=w}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:e,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x},"*")}catch{}},M=()=>{D("widget.init"),D("widget.update")},d=()=>{Z.current=!0,M()};J.addEventListener("load",d);let o=[0,40,120,300,800].map((e)=>setTimeout(M,e));return()=>{J.removeEventListener("load",d),o.forEach((e)=>clearTimeout(e))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let J=Q.current;if(!J?.contentWindow)return;let D=r8(_),M=i8(_);try{J.name=D}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let J=(D)=>{let M=D?.data;if(!M||M.__piclawGeneratedWidget!==!0)return;let d=Q.current,h=F_(_),o=F_({widgetId:M.widgetId,toolCallId:M.toolCallId});if(o&&h&&o!==h)return;if(!o&&d?.contentWindow&&D.source!==d.contentWindow)return;j?.(M,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let G=(_?.artifact||{}).kind||_?.kind||"html",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",N=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=N==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",E=!Y,k=D7(_),A=H7(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${X}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${B} • ${G.toUpperCase()}</div>
                        <div class="floating-widget-title">${X}</div>
                        ${(K||O)&&L`
                            <div class="floating-widget-subtitle">${K||O}</div>
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
                                title=${X}
                                name=${r8(_)}
                                sandbox=${A}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var k7="PiClaw";function W$(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,G=Y[q],X=Q.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",N=K?K:null,V=j||X==="PiClaw".toLowerCase()||X==="pi";return{letter:Z,color:G,image:N||(V?"/static/icon-192.png":null)}}function M7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function I7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function T7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",X=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(X&&(G||q&&q!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var Xq=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function U$({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:G=new Set,onExtensionPanelAction:X,turnId:K,steerQueued:N,onPanelToggle:V,showCorePanels:B=!0,showExtensionPanels:O=!0}){let A=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let x0=a,C0=x0?x0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:x0,totalLines:C0,fullText:x0}}let V0=a.text||"",L0=a.fullText||a.full_text||V0,G0=Number.isFinite(a.totalLines)?a.totalLines:L0?L0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:V0,totalLines:G0,fullText:L0}},J=160,D=(a)=>String(a||"").replace(/<\/?internal>/gi,""),M=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},d=(a,V0,L0)=>{let G0=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!G0)return{text:"",omitted:0,totalLines:Number.isFinite(L0)?L0:0,visibleLines:0};let x0=G0.split(`
`),C0=x0.length>V0?x0.slice(0,V0).join(`
`):G0,w0=Number.isFinite(L0)?L0:x0.reduce((c0,O0)=>c0+M(O0),0),k0=C0?C0.split(`
`).reduce((c0,O0)=>c0+M(O0),0):0,y0=Math.max(w0-k0,0);return{text:C0,omitted:y0,totalLines:w0,visibleLines:k0}},h=A(j),o=A(Q),e=A($),w=Boolean(h.text)||h.totalLines>0,x=Boolean(o.text)||o.totalLines>0,H=Boolean(e.fullText?.trim()||e.text?.trim()),S=Boolean(_||H||w||x||Z||Y),p=Array.isArray(q)&&q.length>0;if((!B||!S)&&(!O||!p))return null;let[Z0,n]=m(new Set),[$0,_0]=m(null),[q0,X0]=m(()=>Date.now()),N0=(a)=>n((V0)=>{let L0=new Set(V0),G0=!L0.has(a);if(G0)L0.add(a);else L0.delete(a);if(typeof V==="function")V(a,G0);return L0});g(()=>{n(new Set),_0(null)},[K]);let z0=K4(_);g(()=>{if(!z0)return;X0(Date.now());let a=setInterval(()=>X0(Date.now()),1000);return()=>clearInterval(a)},[z0,_?.started_at,_?.startedAt]);let D0=_?.turn_id||K,A0=T7(D0),n0=N?"turn-dot turn-dot-queued":"turn-dot",S0=(a)=>a,M0=Boolean(_?.last_activity||_?.lastActivity),d0=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":A0,i0=Y?.kind||"info",v0=d0(i0),o0=d0(_?.kind||(z0?"warning":"info")),b0="",t0=_?.title,H0=_?.status;if(_?.type==="plan")b0=t0?`Planning: ${t0}`:"Planning...";else if(_?.type==="tool_call")b0=t0?`Running: ${t0}`:"Running tool...";else if(_?.type==="tool_status")b0=t0?`${t0}: ${H0||"Working..."}`:H0||"Working...";else if(_?.type==="error")b0=t0||"Agent error";else b0=t0||H0||"Working...";if(M0)b0="Last activity just now";let m0=({panelTitle:a,text:V0,fullText:L0,totalLines:G0,maxLines:x0,titleClass:C0,panelKey:w0})=>{let k0=Z0.has(w0),y0=L0||V0||"",c0=w0==="thought"||w0==="draft"?D(y0):y0,O0=typeof x0==="number",u0=k0&&O0,J0=O0?d(c0,x0,G0):{text:c0||"",omitted:0,totalLines:Number.isFinite(G0)?G0:0};if(!c0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let Q0=`agent-thinking-body${O0?" agent-thinking-body-collapsible":""}`,y=O0?`--agent-thinking-collapsed-lines: ${x0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${k0?"true":"false"}
                data-collapsible=${O0?"true":"false"}
                style=${A0?`--turn-color: ${A0};`:""}
            >
                <div class="agent-thinking-title ${C0||""}">
                    ${A0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${a}
                    ${u0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>N0(w0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Q0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:s5(c0)}}
                />
                ${!k0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>N0(w0)}>
                        ▸ ${J0.omitted} more lines
                    </button>
                `}
                ${k0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>N0(w0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},e0=Z?.tool_call?.title,Q1=e0?`Awaiting approval: ${e0}`:"Awaiting approval",Q_=z0?m8(_,q0):null,J1=(a,V0,L0=null)=>{let G0=g8(a);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${V0?`--turn-color: ${V0};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${V0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${G0}</span>
                    ${L0&&L`<span class="agent-status-elapsed">${L0}</span>`}
                </div>
                ${a.detail&&L`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `},a0=(a,V0,L0,G0,x0,C0,w0,k0=8,y0=8)=>{let c0=Math.max(x0-G0,0.000000001),O0=Math.max(V0-k0*2,1),u0=Math.max(L0-y0*2,1),J0=Math.max(w0-C0,1),Q0=w0===C0?V0/2:k0+(a.run-C0)/J0*O0,y=y0+(u0-(a.value-G0)/c0*u0);return{x:Q0,y}},b1=(a,V0,L0,G0,x0,C0,w0,k0=8,y0=8)=>{if(!Array.isArray(a)||a.length===0)return"";return a.map((c0,O0)=>{let{x:u0,y:J0}=a0(c0,V0,L0,G0,x0,C0,w0,k0,y0);return`${O0===0?"M":"L"} ${u0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},A1=(a,V0="")=>{if(!Number.isFinite(a))return"—";return`${Math.abs(a)>=100?a.toFixed(0):a.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${V0}`},Z1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],g0=(a,V0)=>{let L0=Z1;if(!Array.isArray(L0)||L0.length===0)return"var(--accent-color)";if(L0.length===1||!Number.isFinite(V0)||V0<=1)return L0[0];let x0=Math.max(0,Math.min(Number.isFinite(a)?a:0,V0-1))/Math.max(1,V0-1)*(L0.length-1),C0=Math.floor(x0),w0=Math.min(L0.length-1,C0+1),k0=x0-C0,y0=L0[C0],c0=L0[w0];if(!c0||C0===w0||k0<=0.001)return y0;if(k0>=0.999)return c0;let O0=Math.round((1-k0)*1000)/10,u0=Math.round(k0*1000)/10;return`color-mix(in oklab, ${y0} ${O0}%, ${c0} ${u0}%)`},P1=(a,V0="autoresearch")=>{let L0=Array.isArray(a)?a.map((Q0)=>({...Q0,points:Array.isArray(Q0?.points)?Q0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((Q0)=>Q0.points.length>0):[],G0=L0.map((Q0,y)=>({...Q0,color:g0(y,L0.length)}));if(G0.length===0)return null;let x0=320,C0=120,w0=G0.flatMap((Q0)=>Q0.points),k0=w0.map((Q0)=>Q0.value),y0=w0.map((Q0)=>Q0.run),c0=Math.min(...k0),O0=Math.max(...k0),u0=Math.min(...y0),J0=Math.max(...y0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${G0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${x0} ${C0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${G0.map((Q0)=>{let y=Q0?.key||Q0?.label||"series",t=$0?.panelKey===V0&&$0?.seriesKey===y;return L`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${b1(Q0.points,x0,C0,c0,O0,u0,J0)}
                                        style=${`--agent-series-color: ${Q0.color};`}
                                        onMouseEnter=${()=>_0({panelKey:V0,seriesKey:y})}
                                        onMouseLeave=${()=>_0((U0)=>U0?.panelKey===V0&&U0?.seriesKey===y?null:U0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${G0.flatMap((Q0)=>{let y=typeof Q0?.unit==="string"?Q0.unit:"",t=Q0?.key||Q0?.label||"series";return Q0.points.map((U0,E0)=>{let f0=a0(U0,x0,C0,c0,O0,u0,J0);return L`
                                    <button
                                        key=${`${t}-point-${E0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Q0.color}; left:${f0.x/x0*100}%; top:${f0.y/C0*100}%;`}
                                        onMouseEnter=${()=>_0({panelKey:V0,seriesKey:t,run:U0.run,value:U0.value,unit:y})}
                                        onMouseLeave=${()=>_0((Y1)=>Y1?.panelKey===V0?null:Y1)}
                                        onFocus=${()=>_0({panelKey:V0,seriesKey:t,run:U0.run,value:U0.value,unit:y})}
                                        onBlur=${()=>_0((Y1)=>Y1?.panelKey===V0?null:Y1)}
                                        aria-label=${`${Q0?.label||"Series"} ${A1(U0.value,y)} at run ${U0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${G0.map((Q0)=>{let y=Q0.points[Q0.points.length-1]?.value,t=typeof Q0?.unit==="string"?Q0.unit:"",U0=Q0?.key||Q0?.label||"series",E0=$0?.panelKey===V0&&$0?.seriesKey===U0?$0:null,f0=E0&&Number.isFinite(E0.value)?E0.value:y,Y1=E0&&typeof E0.unit==="string"?E0.unit:t,O1=E0&&Number.isFinite(E0.run)?E0.run:null;return L`
                            <div key=${`${U0}-legend`} class=${`agent-series-legend-item${E0?" is-hovered":""}`} style=${`--agent-series-color: ${Q0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Q0.color};`}></span>
                                <span class="agent-series-legend-label">${Q0?.label||"Series"}</span>
                                ${O1!==null&&L`<span class="agent-series-legend-run">run ${O1}</span>`}
                                <span class="agent-series-legend-value">${A1(f0,Y1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},E1=(a)=>{if(!a)return null;let V0=typeof a?.key==="string"?a.key:`panel-${Math.random()}`,L0=Z0.has(V0),G0=a?.title||"Extension status",x0=a?.collapsed_text||"",C0=String(a?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),w0=d0(a?.state==="completed"?"success":a?.state==="failed"?"error":a?.state==="stopped"?"warning":"info"),k0=typeof a?.detail_markdown==="string"?a.detail_markdown.trim():"",y0=typeof a?.last_run_text==="string"?a.last_run_text.trim():"",c0=typeof a?.tmux_command==="string"?a.tmux_command.trim():"",O0=Array.isArray(a?.series)?a.series:[],u0=Array.isArray(a?.actions)?a.actions:[],J0=Boolean(k0||c0),Q0=Boolean(k0||O0.length>0||c0),y=[G0,x0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${L0?"true":"false"}
                style=${w0?`--turn-color: ${w0};`:""}
                title=${!L0?y||G0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Q0?N0(V0):null}
                    >
                        ${w0&&L`<span class=${n0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${G0}</span>
                        ${x0&&L`<span class="agent-thinking-title-meta">${x0}</span>`}
                    </button>
                    ${(u0.length>0||Q0&&!L0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${u0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${u0.map((t)=>{let U0=`${V0}:${t?.key||""}`,E0=G?.has?.(U0);return L`
                                            <button
                                                key=${U0}
                                                class=${`agent-thinking-action-btn${t?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>X?.(a,t)}
                                                disabled=${Boolean(E0)}
                                            >
                                                ${E0?"Working…":t?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${Q0&&!L0&&L`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${G0}`}
                                    title="Expand details"
                                    onClick=${()=>N0(V0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${Q0&&L0&&L`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${G0}`}
                        title="Collapse details"
                        onClick=${()=>N0(V0)}
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
                                ${k0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:s5(k0)}}
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
                                                onClick=${()=>X?.(a,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${Xq}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${O0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${P1(O0,V0)}
                                    ${y0&&L`<div class="agent-series-chart-note">${y0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${B&&Y&&J1(Y,v0)}
            ${O&&Array.isArray(q)&&q.map((a)=>E1(a))}
            ${B&&_?.type==="intent"&&J1(_,o0,Q_)}
            ${B&&Z&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${A0?`--turn-color: ${A0};`:""}>
                    <span class=${n0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Q1}</span>
                </div>
            `}
            ${B&&w&&m0({panelTitle:S0("Planning"),text:h.text,fullText:h.fullText,totalLines:h.totalLines,panelKey:"plan"})}
            ${B&&x&&m0({panelTitle:S0("Thoughts"),text:o.text,fullText:o.fullText,totalLines:o.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&H&&m0({panelTitle:S0("Draft"),text:e.text,fullText:e.fullText,totalLines:e.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${M0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${A0?`--turn-color: ${A0};`:""}>
                    ${A0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!M0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${b0}</span>
                </div>
            `}
        </div>
    `}function C7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",G=Q?.kind||"other",X=Q?.rawInput||{},K=X.command||X.commands&&X.commands[0]||null,N=X.diff||null,V=X.fileName||X.path||null,B=Q?.description||X.description||X.explanation||null,E=(Array.isArray(Q?.locations)?Q.locations:[]).map((M)=>M?.path).filter((M)=>Boolean(M)),k=Array.from(new Set([V,...E].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let A=async(M)=>{try{await P8(j,M,Y||null),$()}catch(d){console.error("Failed to respond to agent request:",d)}},J=async()=>{try{await c6(q,`Auto-approved: ${q}`),await P8(j,"approved",Y||null),$()}catch(M){console.error("Failed to add to whitelist:",M)}},D=Z&&Z.length>0;return L`
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
                ${(B||K||N||k.length>0)&&L`
                    <div class="agent-request-body">
                        ${B&&L`
                            <div class="agent-request-description">${B}</div>
                        `}
                        ${k.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${k.map((M,d)=>L`<li key=${d}>${M}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${K&&L`
                            <pre class="agent-request-command">${K}</pre>
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
                    ${D?Z.map((M)=>L`
                            <button 
                                key=${M.optionId||M.id||String(M)}
                                class="agent-request-btn ${M.kind==="allow_once"||M.kind==="allow_always"?"primary":""}"
                                onClick=${()=>A(M.optionId||M.id||M)}
                            >
                                ${M.name||M.label||M.optionId||M.id||String(M)}
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
    `}function P7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let X=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${K}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${G}`}function a5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function x_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function s4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var Nq=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),Vq=new Set(["text/markdown"]),Bq=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),Wq=new Set(["application/vnd.jgraph.mxfile"]);function t5(_){return typeof _==="string"?_.trim().toLowerCase():""}function Uq(_){let $=t5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function Lq(_){let $=t5(_);return!!$&&$.endsWith(".pdf")}function Fq(_){let $=t5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function e5(_,$){let j=t5(_);if(Uq($)||Wq.has(j))return"drawio";if(Lq($)||j==="application/pdf")return"pdf";if(Fq($)||Bq.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(Nq.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function S7(_){let $=t5(_);return Vq.has($)}function x7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function zq(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function Hq(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function y7(_){return zq(_)||Hq(_)}function o8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function Jq(_,$){let j=Math.max(o8(_),o8($)),Q=Math.min(o8(_),o8($));return(j+0.05)/(Q+0.05)}function Oq(_,$,j="#ffffff"){let Q=y7(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let G=y7(q);if(!G)continue;let X=Jq(Q,G);if(X>Y)Z=q,Y=X}return Z}function L$(){let _=getComputedStyle(document.documentElement),$=(E,k)=>{for(let A of E){let J=_.getPropertyValue(A).trim();if(J)return J}return k},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),N=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),O=Oq(G,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:G,good:X,warning:K,attention:N,border:V,fontFamily:B,buttonTextColor:O}}function R7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:G,border:X,fontFamily:K}=L$();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Dq=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),w7=!1,s8=null,f7=!1;function F$(_){_.querySelector(".adaptive-card-notice")?.remove()}function Aq(_,$,j="error"){F$(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function Eq(_,$=(j)=>L_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function kq(_=($)=>L_($,null)){return($,j)=>{try{let Q=Eq($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function Mq(_){if(f7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=kq(),f7=!0}async function Iq(){if(w7)return;if(s8)return s8;return s8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{w7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),s8}function Tq(){return globalThis.AdaptiveCards}function Cq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Pq(_){return Dq.has(_)}function H$(_){if(!Array.isArray(_))return[];return _.filter(Cq)}function Sq(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function z$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>z$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${z$(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function xq(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return z$($);return typeof $==="string"?$:String($)}function yq(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((G)=>Q(G));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=xq(q.type,j[q.id],q);for(let[G,X]of Object.entries(q))if(Array.isArray(X)||X&&typeof X==="object")q[G]=Q(X);return q};return Q(_)}function Rq(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function wq(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function fq(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=wq(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function u7(_,$,j){if(!Pq($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Iq()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=Tq();Mq(Q);let Z=new Q.AdaptiveCard,Y=L$();Z.hostConfig=new Q.HostConfig(R7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:yq($.payload,q);Z.parse(G),Z.onExecuteAction=(N)=>{let V=Sq(N);if(j?.onAction)F$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let O=B instanceof Error?B.message:String(B||"Action failed.");Aq(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let X=Z.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let K=fq($);if(K){_.classList.add("adaptive-card-finished");let N=document.createElement("div");N.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=K.label,N.appendChild(V),K.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=K.detail,N.appendChild(B)}_.appendChild(N)}if(F$(_),_.appendChild(X),K)Rq(X);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function _8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>_8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${_8(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function v7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:_8(j)})).filter(($)=>$.value)}function uq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function J$(_){if(!Array.isArray(_))return[];return _.filter(uq)}function b7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=_8(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=v7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function g7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=v7(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):_8(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function D5({children:_,className:$=""}){let j=C(null);return g(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{P4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),p5(()=>{let Q=j.current;if(!Q)return;return P4(_,Q),()=>{P4(null,Q)}},[_]),null}function vq(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?x_($):null},{label:"Added",value:_?.created_at?s4(_.created_at):null}].filter((Q)=>Q.value)}function bq(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=S_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function m7({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=R0(()=>e5($?.content_type,Q),[$?.content_type,Q]),Y=x7(Z),q=R0(()=>S7($?.content_type),[$?.content_type]),[G,X]=m(Z==="text"),[K,N]=m(""),[V,B]=m(null),O=C(null),E=R0(()=>vq($),[$]),k=R0(()=>bq(_,Q,Z),[_,Q,Z]),A=R0(()=>{if(!q||!K)return"";return L_(K)},[q,K]);return g(()=>{let J=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!O.current||!A)return;X4(O.current);return},[A]),g(()=>{let J=!1;async function D(){if(Z!=="text"){X(!1),B(null);return}X(!0),B(null);try{let M=await i6(_);if(!J)N(M)}catch{if(!J)B("Failed to load text preview.")}finally{if(!J)X(!1)}}return D(),()=>{J=!0}},[_,Z]),L`
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
                                href=${S_(_)}
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
                            <img class="attachment-preview-image" src=${S_(_)} alt=${Q} />
                        `}
                        ${!G&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&k&&L`
                            <iframe class="attachment-preview-frame" src=${k} title=${Q}></iframe>
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
                            <pre class="attachment-preview-text">${K}</pre>
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
    `}function h7({src:_,onClose:$}){return g(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${D5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${D5}>
    `}function gq({mediaId:_,onPreview:$}){let[j,Q]=m(null);if(g(()=>{F5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?x_(Y):"",X=e5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <a href=${S_(_)} download=${Z} class="file-attachment-main">
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
                onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${X}
            </button>
        </div>
    `}function mq({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=m(null);g(()=>{if(!Number.isFinite(j))return;F5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?S_(j):null,X=e5(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Y}>
            ${q?L`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(K)=>K.stopPropagation()}>
                        <${c_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:L`
                    <${c_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Q&&L`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${X}
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:j,info:Q})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function a8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?s4(Q):null;return L`
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
    `}function hq({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?x_(_.size):"",Z=_.mime_type||"",Y=lq(Z),q=o4(_.uri);return L`
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
    `}function pq({block:_}){let[$,j]=m(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
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
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),K=URL.createObjectURL(X),N=document.createElement("a");N.href=K,N.download=Q.split("/").pop()||"resource",N.click(),URL.revokeObjectURL(K)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function cq({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=B$(_,$),Z=F7(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",G=Q?.description||_.description||_.subtitle||"",X=_.open_label||"Open widget",K=(N)=>{if(N.preventDefault(),N.stopPropagation(),!Q)return;j?.(Q)};return L`
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
                    onClick=${K}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${X}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function lq(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function nq({preview:_}){let $=o4(_.url),j=o4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return L`
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
    `}function dq(_,$){return typeof _==="string"?_:""}var iq=1800,rq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,oq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,sq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function aq(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function tq(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let G=q||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=oq,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=sq,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=rq,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Z(G,"idle"),q.appendChild(G);let X=async(K)=>{K.preventDefault(),K.stopPropagation();let V=Y.querySelector("code")?.textContent||"",B=await aq(V);Z(G,B?"success":"error");let O=j.get(G);if(O)clearTimeout(O);let E=setTimeout(()=>{Z(G,"idle"),j.delete(G)},iq);j.set(G,E)};G.addEventListener("click",X),Q.push(()=>{G.removeEventListener("click",X);let K=j.get(G);if(K)clearTimeout(K);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function eq(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K))Z.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),G=j.slice(Y),X=[...q,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:Z}}function _G(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K)){let V=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),G=j.slice(Y),X=[...q,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:Z}}function $G(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1){let N=j[K].trim();if((N==="Images:"||N==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K)){let N=K.replace(/^\s*-\s+/,"").trim(),V=N.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||N.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let B=V[1],O=(V[2]||"").trim()||B;Z.push({id:B,label:O,raw:N})}else Z.push({id:null,label:N,raw:N})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),G=j.slice(Y),X=[...q,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:Z}}function jG(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function QG(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(jG).sort((N,V)=>V.length-N.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),G=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),X=[],K;while(K=G.nextNode())X.push(K);for(let N of X){let V=N.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=N.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let O=V.split(Z).filter((k)=>k!=="");if(O.length===0)continue;let E=q.createDocumentFragment();for(let k of O)if(Y.test(k)){let A=q.createElement("mark");A.className="search-highlight-term",A.textContent=k,E.appendChild(A)}else E.appendChild(q.createTextNode(k));N.parentNode.replaceChild(E,N)}return q.body.innerHTML}function p7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:G,userAvatarUrl:X,userAvatarBackground:K,onDelete:N,isThreadReply:V,isThreadPrev:B,isThreadNext:O,isRemoving:E,highlightQuery:k,onFileRef:A,onOpenWidget:J}){let[D,M]=m(null),d=C(null),h=_.data,o=h.type==="agent_response",e=G||"You",w=o?Y||k7:e,x=o?W$(Y,q,!0):W$(e,X),H=typeof K==="string"?K.trim().toLowerCase():"",S=!o&&x.image&&(H==="clear"||H==="transparent"),p=o&&Boolean(x.image),Z0=`background-color: ${S||p?"transparent":x.color}`,n=h.content_meta,$0=Boolean(n?.truncated),_0=Boolean(n?.preview),q0=$0&&!_0,X0=$0?{originalLength:Number.isFinite(n?.original_length)?n.original_length:h.content?h.content.length:0,maxLength:Number.isFinite(n?.max_length)?n.max_length:0}:null,N0=h.content_blocks||[],z0=h.media_ids||[],D0=dq(h.content,h.link_previews),{content:A0,fileRefs:n0}=eq(D0),{content:S0,messageRefs:M0}=_G(A0),{content:d0,attachments:i0}=$G(S0);D0=d0;let v0=H$(N0),o0=J$(N0),b0=v0.length===1&&typeof v0[0]?.fallback_text==="string"?v0[0].fallback_text.trim():"",t0=o0.length===1?b7(o0[0]).trim():"",H0=Boolean(b0)&&D0?.trim()===b0||Boolean(t0)&&D0?.trim()===t0,m0=Boolean(D0)&&!q0&&!H0,e0=typeof k==="string"?k.trim():"",Q1=R0(()=>{if(!D0||H0)return"";let y=L_(D0,j);return e0?QG(y,e0):y},[D0,H0,e0]),Q_=(y,t)=>{y.stopPropagation(),M(S_(t))},[J1,a0]=m(null),b1=(y)=>{a0(y)},A1=(y)=>{y.stopPropagation(),N?.(_)},Z1=(y,t)=>{let U0=new Set;if(!y||t.length===0)return{content:y,usedIds:U0};return{content:y.replace(/attachment:([^\s)"']+)/g,(f0,Y1,O1,G1)=>{let g1=Y1.replace(/^\/+/,""),X_=t.find((N_)=>N_.name&&N_.name.toLowerCase()===g1.toLowerCase()&&!U0.has(N_.id))||t.find((N_)=>!U0.has(N_.id));if(!X_)return f0;if(U0.add(X_.id),G1.slice(Math.max(0,O1-2),O1)==="](")return`/media/${X_.id}`;return X_.name||"attachment"}),usedIds:U0}},g0=[],P1=[],E1=[],a=[],V0=[],L0=[],G0=[],x0=0;if(N0.length>0)N0.forEach((y)=>{if(y?.type==="text"&&y.annotations)G0.push(y.annotations);if(y?.type==="generated_widget")L0.push(y);else if(y?.type==="resource_link")a.push(y);else if(y?.type==="resource")V0.push(y);else if(y?.type==="file"){let t=z0[x0++];if(t)P1.push(t),E1.push({id:t,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let t=z0[x0++];if(t){let U0=typeof y?.mime_type==="string"?y.mime_type:void 0;g0.push({id:t,annotations:y?.annotations,mimeType:U0}),E1.push({id:t,name:y?.name||y?.filename||y?.title})}}});else if(z0.length>0){let y=i0.length>0;z0.forEach((t,U0)=>{let E0=i0[U0]||null;if(E1.push({id:t,name:E0?.label||null}),y)P1.push(t);else g0.push({id:t,annotations:null})})}if(i0.length>0)i0.forEach((y)=>{if(!y?.id)return;let t=E1.find((U0)=>String(U0.id)===String(y.id));if(t&&!t.name)t.name=y.label});let{content:C0,usedIds:w0}=Z1(D0,E1);D0=C0;let k0=g0.filter(({id:y})=>!w0.has(y)),y0=P1.filter((y)=>!w0.has(y)),c0=i0.length>0?i0.map((y,t)=>({id:y.id||`attachment-${t+1}`,label:y.label||`attachment-${t+1}`})):E1.map((y,t)=>({id:y.id,label:y.name||`attachment-${t+1}`})),O0=R0(()=>H$(N0),[N0]),u0=R0(()=>J$(N0),[N0]),J0=R0(()=>{return O0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[O0]);g(()=>{if(!d.current)return;return X4(d.current),tq(d.current)},[Q1]);let Q0=C(null);return g(()=>{if(!Q0.current||O0.length===0)return;let y=Q0.current;y.innerHTML="";for(let t of O0){let U0=document.createElement("div");y.appendChild(U0),u7(U0,t,{onAction:async(E0)=>{if(E0.type==="Action.OpenUrl"){let f0=o4(E0.url||"");if(!f0)throw Error("Invalid URL");window.open(f0,"_blank","noopener,noreferrer");return}if(E0.type==="Action.Submit"){await p6({post_id:_.id,thread_id:h.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:E0.type,title:E0.title||"",data:E0.data}});return}console.warn("[post] unsupported adaptive card action:",E0.type,E0)}}).catch((E0)=>{console.error("[post] adaptive card render error:",E0),U0.textContent=t.fallback_text||"Card failed to render."})}},[J0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${o?"agent-post":""} ${V?"thread-reply":""} ${B?"thread-prev":""} ${O?"thread-next":""} ${E?"removing":""}" onClick=${$}>
            <div class="post-avatar ${o?"agent-avatar":""} ${x.image?"has-image":""}" style=${Z0}>
                ${x.image?L`<img src=${x.image} alt=${w} />`:x.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${A1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${w}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${P7(_.timestamp)}</a>
                </div>
                ${q0&&X0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${a5(X0.originalLength)} chars
                            ${X0.maxLength?L` • Display limit: ${a5(X0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${_0&&X0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${a5(X0.maxLength)} of ${a5(X0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||M0.length>0||c0.length>0)&&L`
                    <div class="post-file-refs">
                        ${M0.map((y)=>{let t=(U0)=>{if(U0.preventDefault(),U0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let E0=document.getElementById("post-"+y);if(E0)E0.scrollIntoView({behavior:"smooth",block:"center"}),E0.classList.add("post-highlight"),setTimeout(()=>E0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${t}>
                                    <${c_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${n0.map((y)=>{let t=y.split("/").pop()||y;return L`
                                <${c_}
                                    prefix="post"
                                    label=${t}
                                    title=${y}
                                    onClick=${()=>A?.(y)}
                                />
                            `})}
                        ${c0.map((y)=>L`
                            <${mq}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${b1}
                            />
                        `)}
                    </div>
                `}
                ${m0&&L`
                    <div 
                        ref=${d}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:Q1}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let t=y.target.dataset.hashtag;if(t)j?.(t)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),M(y.target.src)}}
                    />
                `}
                ${O0.length>0&&L`
                    <div ref=${Q0} class="post-adaptive-cards" />
                `}
                ${u0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${u0.map((y,t)=>{let U0=g7(y),E0=`${y.card_id}-${t}`;return L`
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
                                            ${U0.fields.map((f0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${f0.key}: ${f0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${s4(U0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${L0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${L0.map((y,t)=>L`
                            <${cq}
                                key=${y.widget_id||y.id||`${_.id}-widget-${t}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${G0.length>0&&L`
                    ${G0.map((y,t)=>L`
                        <${a8} key=${t} annotations=${y} />
                    `)}
                `}
                ${k0.length>0&&L`
                    <div class="media-preview">
                        ${k0.map(({id:y,mimeType:t})=>{let E0=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?S_(y):d6(y);return L`
                                <img 
                                    key=${y} 
                                    src=${E0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(f0)=>Q_(f0,y)}
                                />
                            `})}
                    </div>
                `}
                ${k0.length>0&&L`
                    ${k0.map(({annotations:y},t)=>L`
                        ${y&&L`<${a8} key=${t} annotations=${y} />`}
                    `)}
                `}
                ${y0.length>0&&L`
                    <div class="file-attachments">
                        ${y0.map((y)=>L`
                            <${gq} key=${y} mediaId=${y} onPreview=${b1} />
                        `)}
                    </div>
                `}
                ${a.length>0&&L`
                    <div class="resource-links">
                        ${a.map((y,t)=>L`
                            <div key=${t}>
                                <${hq} block=${y} />
                                <${a8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${V0.length>0&&L`
                    <div class="resource-embeds">
                        ${V0.map((y,t)=>L`
                            <div key=${t}>
                                <${pq} block=${y} />
                                <${a8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${h.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${h.link_previews.map((y,t)=>L`
                            <${nq} key=${t} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&L`<${h7} src=${D} onClose=${()=>M(null)} />`}
        ${J1&&L`
            <${m7}
                mediaId=${J1.mediaId}
                info=${J1.info}
                onClose=${()=>a0(null)}
            />
        `}
    `}function c7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:G,onOpenWidget:X,emptyMessage:K,timelineRef:N,agents:V,user:B,onDeletePost:O,reverse:E=!0,removingPostIds:k,searchQuery:A}){let[J,D]=m(!1),M=C(null),d=typeof IntersectionObserver<"u",h=P(async()=>{if(!j||!$||J)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,J,j]),o=P((n)=>{let{scrollTop:$0,scrollHeight:_0,clientHeight:q0}=n.target,X0=E?_0-q0-$0:$0,N0=Math.max(300,q0);if(X0<N0)h()},[E,h]);g(()=>{if(!d)return;let n=M.current,$0=N?.current;if(!n||!$0)return;let _0=300,q0=new IntersectionObserver((X0)=>{for(let N0 of X0){if(!N0.isIntersecting)continue;h()}},{root:$0,rootMargin:`${_0}px 0px ${_0}px 0px`,threshold:0});return q0.observe(n),()=>q0.disconnect()},[d,$,j,N,h]);let e=C(h);if(e.current=h,g(()=>{if(d)return;if(!N?.current)return;let{scrollTop:n,scrollHeight:$0,clientHeight:_0}=N.current,q0=E?$0-_0-n:n,X0=Math.max(300,_0);if(q0<X0)e.current?.()},[d,_,$,E,N]),g(()=>{if(!N?.current)return;if(!$||J)return;let{scrollTop:n,scrollHeight:$0,clientHeight:_0}=N.current,q0=E?$0-_0-n:n,X0=Math.max(300,_0);if($0<=_0+1||q0<X0)e.current?.()},[_,$,J,E,N]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let w=_.slice().sort((n,$0)=>n.id-$0.id),x=(n)=>{let $0=n?.data?.thread_id;if($0===null||$0===void 0||$0==="")return null;let _0=Number($0);return Number.isFinite(_0)?_0:null},H=new Map;for(let n=0;n<w.length;n+=1){let $0=w[n],_0=Number($0?.id),q0=x($0);if(q0!==null){let X0=H.get(q0)||{anchorIndex:-1,replyIndexes:[]};X0.replyIndexes.push(n),H.set(q0,X0)}else if(Number.isFinite(_0)){let X0=H.get(_0)||{anchorIndex:-1,replyIndexes:[]};X0.anchorIndex=n,H.set(_0,X0)}}let S=new Map;for(let[n,$0]of H.entries()){let _0=new Set;if($0.anchorIndex>=0)_0.add($0.anchorIndex);for(let q0 of $0.replyIndexes)_0.add(q0);S.set(n,Array.from(_0).sort((q0,X0)=>q0-X0))}let p=w.map((n,$0)=>{let _0=x(n);if(_0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=S.get(_0);if(!q0||q0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let X0=q0.indexOf($0);if(X0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:X0>0,hasThreadNext:X0<q0.length-1}}),Z0=L`<div class="timeline-sentinel" ref=${M}></div>`;return L`
        <div class="timeline ${E?"reverse":"normal"}" ref=${N} onScroll=${o}>
            <div class="timeline-content">
                ${E?Z0:null}
                ${w.map((n,$0)=>{let _0=Boolean(n.data?.thread_id&&n.data.thread_id!==n.id),q0=k?.has?.(n.id),X0=p[$0]||{};return L`
                    <${p7}
                        key=${n.id}
                        post=${n}
                        isThreadReply=${_0}
                        isThreadPrev=${X0.hasThreadPrev}
                        isThreadNext=${X0.hasThreadNext}
                        isRemoving=${q0}
                        highlightQuery=${A}
                        agentName=${M7(n.data?.agent_id,V||{})}
                        agentAvatarUrl=${I7(n.data?.agent_id,V||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>Q?.(n)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${G}
                        onOpenWidget=${X}
                        onDelete=${O}
                    />
                `})}
                ${E?null:Z0}
            </div>
        </div>
    `}class l7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var l0=new l7;var t8=null,O$=null;function ZG(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function n7(){if(O$)return Promise.resolve(O$);if(!t8)t8=import(ZG()).then((_)=>{return O$=_,_}).catch((_)=>{throw t8=null,_});return t8}class d7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await n7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var D$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new d7(_,$)}};function A$(){n7().catch(()=>{})}var a4="piclaw://terminal";var YG={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},qG={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},e8=null,E$=null;function GG(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function KG(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!GG(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function XG(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!e8)e8=KG(()=>Promise.resolve($.init?.())).catch((j)=>{throw e8=null,j});return await e8,$}async function NG(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!E$)E$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await E$}async function VG(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function BG(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function WG(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function N4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function UG(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function i7(){let _=WG(),$=_?qG:YG,j=N4("--bg-primary",_?"#000000":"#ffffff"),Q=N4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=N4("--text-secondary",_?"#71767b":"#536471"),Y=N4("--accent-color","#1d9bf0"),q=N4("--danger-color",_?"#ff7b72":"#cf222e"),G=N4("--success-color",_?"#7ee787":"#1a7f37"),X=N4("--bg-hover",_?"#1d1f23":"#e8ebed"),K=N4("--border-color",_?"#2f3336":"#eff3f4"),N=N4("--accent-soft-strong",UG(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:N,selectionForeground:Q,black:X,red:q,green:G,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:K}}class k${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await XG();if(await NG(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:i7()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=i7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await VG();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(BG($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var M$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new k$(_,$)}},I$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new k$(_,$)}};function V4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function _6(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function r7(_,$={}){if(V4($))return null;if(_6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:LG(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function T$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function C$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function P$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function S$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function B4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function o7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function s7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,G]of Object.entries(Y)){let X=String(q||"").trim();if(!X)continue;if(G===null||G===void 0||G==="")Q.searchParams.delete(X);else Q.searchParams.set(X,String(G))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function LG(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function FG(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function a7(_,$={}){if(V4($))return null;if(_6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:FG(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function $8(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function zG(_){try{return JSON.parse(_)}catch{return null}}function HG(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function JG(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class x${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=JG($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||zG;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=HG(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var j8=()=>{throw Error("Operation requires compiling with --exportRuntime")},OG=typeof BigUint64Array<"u",Q8=Symbol();var DG=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function t7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return DG.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function e7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return t7(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,G,X){let K=$.memory||Q.memory;throw Error(`abort: ${j(K,Y)} at ${j(K,q)}:${G}:${X}`)},Q.trace=Q.trace||function(Y,q,...G){let X=$.memory||Q.memory;console.log(`trace: ${j(X,Y)}${q?" ":""}${G.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function _9(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||j8,q=j.__pin||j8,G=j.__unpin||j8,X=j.__collect||j8,K=j.__rtti_base,N=K?(H)=>H[K>>>2]:j8;_.__new=Y,_.__pin=q,_.__unpin=G,_.__collect=X;function V(H){let S=new Uint32Array(Q.buffer);if((H>>>=0)>=N(S))throw Error(`invalid id: ${H}`);return S[(K+4>>>2)+H]}function B(H){let S=V(H);if(!(S&7))throw Error(`not an array: ${H}, flags=${S}`);return S}function O(H){return 31-Math.clz32(H>>>6&31)}function E(H){if(H==null)return 0;let S=H.length,p=Y(S<<1,2),Z0=new Uint16Array(Q.buffer);for(let n=0,$0=p>>>1;n<S;++n)Z0[$0+n]=H.charCodeAt(n);return p}_.__newString=E;function k(H){if(H==null)return 0;let S=new Uint8Array(H),p=Y(S.length,1);return new Uint8Array(Q.buffer).set(S,p),p}_.__newArrayBuffer=k;function A(H){if(!H)return null;let S=Q.buffer;if(new Uint32Array(S)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return t7(S,H)}_.__getString=A;function J(H,S,p){let Z0=Q.buffer;if(p)switch(H){case 2:return new Float32Array(Z0);case 3:return new Float64Array(Z0)}else switch(H){case 0:return new(S?Int8Array:Uint8Array)(Z0);case 1:return new(S?Int16Array:Uint16Array)(Z0);case 2:return new(S?Int32Array:Uint32Array)(Z0);case 3:return new(S?BigInt64Array:BigUint64Array)(Z0)}throw Error(`unsupported align: ${H}`)}function D(H,S=0){let p=S,Z0=B(H),n=O(Z0),$0=typeof p!=="number",_0=$0?p.length:p,q0=Y(_0<<n,Z0&4?H:1),X0;if(Z0&4)X0=q0;else{q(q0);let N0=Y(Z0&2?16:12,H);G(q0);let z0=new Uint32Array(Q.buffer);if(z0[N0+0>>>2]=q0,z0[N0+4>>>2]=q0,z0[N0+8>>>2]=_0<<n,Z0&2)z0[N0+12>>>2]=_0;X0=N0}if($0){let N0=J(n,Z0&2048,Z0&4096),z0=q0>>>n;if(Z0&16384)for(let D0=0;D0<_0;++D0)N0[z0+D0]=p[D0];else N0.set(p,z0)}return X0}_.__newArray=D;function M(H){let S=new Uint32Array(Q.buffer),p=S[H+-8>>>2],Z0=B(p),n=O(Z0),$0=Z0&4?H:S[H+4>>>2],_0=Z0&2?S[H+12>>>2]:S[$0+-4>>>2]>>>n;return J(n,Z0&2048,Z0&4096).subarray($0>>>=n,$0+_0)}_.__getArrayView=M;function d(H){let S=M(H),p=S.length,Z0=Array(p);for(let n=0;n<p;n++)Z0[n]=S[n];return Z0}_.__getArray=d;function h(H){let S=Q.buffer,p=new Uint32Array(S)[H+-4>>>2];return S.slice(H,H+p)}_.__getArrayBuffer=h;function o(H){if(!Z)throw Error("Operation requires compiling with --exportTable");let S=new Uint32Array(Q.buffer)[H>>>2];return Z.get(S)}_.__getFunction=o;function e(H,S,p){return new H(w(H,S,p))}function w(H,S,p){let Z0=Q.buffer,n=new Uint32Array(Z0);return new H(Z0,n[p+4>>>2],n[p+8>>>2]>>>S)}function x(H,S,p){_[`__get${S}`]=e.bind(null,H,p),_[`__get${S}View`]=w.bind(null,H,p)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{x(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),OG)[BigUint64Array,BigInt64Array].forEach((H)=>{x(H,H.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,EG(j,_)}function $9(_){return typeof Response<"u"&&_ instanceof Response}function AG(_){return _ instanceof WebAssembly.Module}async function y$(_,$={}){if($9(_=await _))return $6(_,$);let j=AG(_)?_:await WebAssembly.compile(_),Q=e7($),Z=await WebAssembly.instantiate(j,$),Y=_9(Q,Z);return{module:j,instance:Z,exports:Y}}async function $6(_,$={}){if(!WebAssembly.instantiateStreaming)return y$($9(_=await _)?_.arrayBuffer():_,$);let j=e7($),Q=await WebAssembly.instantiateStreaming(_,$),Z=_9(j,Q.instance);return{...Q,exports:Z}}function EG(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let K=Y.shift();if(!Object.hasOwn(q,K))q[K]={};q=q[K]}let G=Y[0],X=G.indexOf("#");if(X>=0){let K=G.substring(0,X),N=q[K];if(typeof N>"u"||!N.prototype){let V=function(...B){return V.wrap(V.prototype.constructor(0,...B))};if(V.prototype={valueOf(){return this[Q8]}},V.wrap=function(B){return Object.create(V.prototype,{[Q8]:{value:B,writable:!1}})},N)Object.getOwnPropertyNames(N).forEach((B)=>Object.defineProperty(V,B,Object.getOwnPropertyDescriptor(N,B)));q[K]=V}if(G=G.substring(X+1),q=q[K].prototype,/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4))){let V=_[Q.replace("set:","get:")],B=_[Q.replace("get:","set:")];Object.defineProperty(q,G,{get(){return V(this[Q8])},set(O){B(this[Q8],O)},enumerable:!0})}}else if(G==="constructor")(q[G]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[G]=function(...V){return j(V.length),Z(this[Q8],...V)}).original=Z}else if(/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4)))Object.defineProperty(q,G,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[G]=(...K)=>{return j(K.length),Z(...K)}).original=Z;else q[G]=Z}return $}var MG="/static/js/vendor/remote-display-decoder.wasm",j6=null;function j9(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function Q9(){if(j6)return j6;return j6=(async()=>{try{let Q=function(Z,Y,q,G,X,K,N){let V=j9(Y),B=j.__pin(j.__newArrayBuffer(V));try{return j[Z](B,q,G,X,K,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift)}finally{j.__unpin(B);try{j.__collect()}catch{}}},_=await fetch(MG,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof $6==="function"?await $6(_,{}):await y$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,G,X,K){return Q("processRawRect",Z,Y,q,G,X,K)},processCopyRect(Z,Y,q,G,X,K){return j.processCopyRect(Z,Y,q,G,X,K)},processRreRect(Z,Y,q,G,X,K){return Q("processRreRect",Z,Y,q,G,X,K)},processHextileRect(Z,Y,q,G,X,K){return Q("processHextileRect",Z,Y,q,G,X,K)},processZrleTileData(Z,Y,q,G,X,K){return Q("processZrleTileData",Z,Y,q,G,X,K)},decodeRawRectToRgba(Z,Y,q,G){let X=j9(Z),K=j.__pin(j.__newArrayBuffer(X));try{let N=j.__pin(j.decodeRawRectToRgba(K,Y,q,G.bitsPerPixel,G.bigEndian?1:0,G.trueColor?1:0,G.redMax,G.greenMax,G.blueMax,G.redShift,G.greenShift,G.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(N))}finally{j.__unpin(N)}}finally{j.__unpin(K);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),j6}function A5(_,$,j){return Math.max($,Math.min(j,_))}function Q6(_,$,j){let Q=new Uint8Array(6),Z=A5(Math.floor(Number($||0)),0,65535),Y=A5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=A5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function w$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function Z9(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),G=Math.max(1,Number(j?.width||0)),X=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/G,N=(Number($||0)-Number(j?.top||0))/X;return{x:A5(Math.floor(K*Y),0,Math.max(0,Y-1)),y:A5(Math.floor(N*q),0,Math.max(0,q-1))}}function Y9(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=A5(Number(Q||0)|Z,0,255);return[Q6(Y,$,j),Q6(Number(Q||0),$,j)]}function q9(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function Z8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function G9(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),G=Math.max(1,Math.floor(Number(Q||0))),X=Math.min(Z/q,Y/G);if(!Number.isFinite(X)||X<=0)return 1;return Math.max(0.01,X)}var R$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)R$[`F${_}`]=65470+(_-1);function f$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(R$,Y))return R$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var w1=Uint8Array,z_=Uint16Array,l$=Int32Array,Z6=new w1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Y6=new w1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),m$=new w1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),V9=function(_,$){var j=new z_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new l$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},B9=V9(Z6,2),W9=B9.b,h$=B9.r;W9[28]=258,h$[258]=28;var U9=V9(Y6,0),IG=U9.b,K9=U9.r,p$=new z_(32768);for(p0=0;p0<32768;++p0)e_=(p0&43690)>>1|(p0&21845)<<1,e_=(e_&52428)>>2|(e_&13107)<<2,e_=(e_&61680)>>4|(e_&3855)<<4,p$[p0]=((e_&65280)>>8|(e_&255)<<8)>>1;var e_,p0,_4=function(_,$,j){var Q=_.length,Z=0,Y=new z_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new z_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var G;if(j){G=new z_(1<<$);var X=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var K=Z<<4|_[Z],N=$-_[Z],V=q[_[Z]-1]++<<N;for(var B=V|(1<<N)-1;V<=B;++V)G[p$[V]>>X]=K}}else{G=new z_(Q);for(Z=0;Z<Q;++Z)if(_[Z])G[Z]=p$[q[_[Z]-1]++]>>15-_[Z]}return G},x4=new w1(288);for(p0=0;p0<144;++p0)x4[p0]=8;var p0;for(p0=144;p0<256;++p0)x4[p0]=9;var p0;for(p0=256;p0<280;++p0)x4[p0]=7;var p0;for(p0=280;p0<288;++p0)x4[p0]=8;var p0,K8=new w1(32);for(p0=0;p0<32;++p0)K8[p0]=5;var p0,TG=_4(x4,9,0),CG=_4(x4,9,1),PG=_4(K8,5,0),SG=_4(K8,5,1),u$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},l_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},v$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},n$=function(_){return(_+7)/8|0},G8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new w1(_.subarray($,j))};var xG=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],K_=function(_,$,j){var Q=Error($||xG[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,K_);if(!j)throw Q;return Q},yG=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new w1(0);var q=!j,G=q||$.i!=2,X=$.i;if(q)j=new w1(Z*3);var K=function(t0){var H0=j.length;if(t0>H0){var m0=new w1(Math.max(H0*2,t0));m0.set(j),j=m0}},N=$.f||0,V=$.p||0,B=$.b||0,O=$.l,E=$.d,k=$.m,A=$.n,J=Z*8;do{if(!O){N=l_(_,V,1);var D=l_(_,V+1,3);if(V+=3,!D){var M=n$(V)+4,d=_[M-4]|_[M-3]<<8,h=M+d;if(h>Z){if(X)K_(0);break}if(G)K(B+d);j.set(_.subarray(M,h),B),$.b=B+=d,$.p=V=h*8,$.f=N;continue}else if(D==1)O=CG,E=SG,k=9,A=5;else if(D==2){var o=l_(_,V,31)+257,e=l_(_,V+10,15)+4,w=o+l_(_,V+5,31)+1;V+=14;var x=new w1(w),H=new w1(19);for(var S=0;S<e;++S)H[m$[S]]=l_(_,V+S*3,7);V+=e*3;var p=u$(H),Z0=(1<<p)-1,n=_4(H,p,1);for(var S=0;S<w;){var $0=n[l_(_,V,Z0)];V+=$0&15;var M=$0>>4;if(M<16)x[S++]=M;else{var _0=0,q0=0;if(M==16)q0=3+l_(_,V,3),V+=2,_0=x[S-1];else if(M==17)q0=3+l_(_,V,7),V+=3;else if(M==18)q0=11+l_(_,V,127),V+=7;while(q0--)x[S++]=_0}}var X0=x.subarray(0,o),N0=x.subarray(o);k=u$(X0),A=u$(N0),O=_4(X0,k,1),E=_4(N0,A,1)}else K_(1);if(V>J){if(X)K_(0);break}}if(G)K(B+131072);var z0=(1<<k)-1,D0=(1<<A)-1,A0=V;for(;;A0=V){var _0=O[v$(_,V)&z0],n0=_0>>4;if(V+=_0&15,V>J){if(X)K_(0);break}if(!_0)K_(2);if(n0<256)j[B++]=n0;else if(n0==256){A0=V,O=null;break}else{var S0=n0-254;if(n0>264){var S=n0-257,M0=Z6[S];S0=l_(_,V,(1<<M0)-1)+W9[S],V+=M0}var d0=E[v$(_,V)&D0],i0=d0>>4;if(!d0)K_(3);V+=d0&15;var N0=IG[i0];if(i0>3){var M0=Y6[i0];N0+=v$(_,V)&(1<<M0)-1,V+=M0}if(V>J){if(X)K_(0);break}if(G)K(B+131072);var v0=B+S0;if(B<N0){var o0=Y-N0,b0=Math.min(N0,v0);if(o0+B<0)K_(3);for(;B<b0;++B)j[B]=Q[o0+B]}for(;B<v0;++B)j[B]=j[B-N0]}}if($.l=O,$.p=A0,$.b=B,$.f=N,O)N=1,$.m=k,$.d=E,$.n=A}while(!N);return B!=j.length&&q?G8(j,0,B):j.subarray(0,B)},W4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},Y8=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},b$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:F9,l:0};if(Z==1){var q=new w1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(h,o){return h.f-o.f}),j.push({s:-1,f:25001});var G=j[0],X=j[1],K=0,N=1,V=2;j[0]={s:-1,f:G.f+X.f,l:G,r:X};while(N!=Z-1)G=j[j[K].f<j[V].f?K++:V++],X=j[K!=N&&j[K].f<j[V].f?K++:V++],j[N++]={s:-1,f:G.f+X.f,l:G,r:X};var B=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>B)B=Y[Q].s;var O=new z_(B+1),E=c$(j[N-1],O,0);if(E>$){var Q=0,k=0,A=E-$,J=1<<A;Y.sort(function(o,e){return O[e.s]-O[o.s]||o.f-e.f});for(;Q<Z;++Q){var D=Y[Q].s;if(O[D]>$)k+=J-(1<<E-O[D]),O[D]=$;else break}k>>=A;while(k>0){var M=Y[Q].s;if(O[M]<$)k-=1<<$-O[M]++-1;else++Q}for(;Q>=0&&k;--Q){var d=Y[Q].s;if(O[d]==$)--O[d],++k}E=$}return{t:new w1(O),l:E}},c$=function(_,$,j){return _.s==-1?Math.max(c$(_.l,$,j+1),c$(_.r,$,j+1)):$[_.s]=j},X9=function(_){var $=_.length;while($&&!_[--$]);var j=new z_(++$),Q=0,Z=_[0],Y=1,q=function(X){j[Q++]=X};for(var G=1;G<=$;++G)if(_[G]==Z&&G!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[G]}return{c:j.subarray(0,Q),n:$}},q8=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},L9=function(_,$,j){var Q=j.length,Z=n$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},N9=function(_,$,j,Q,Z,Y,q,G,X,K,N){W4($,N++,j),++Z[256];var V=b$(Z,15),B=V.t,O=V.l,E=b$(Y,15),k=E.t,A=E.l,J=X9(B),D=J.c,M=J.n,d=X9(k),h=d.c,o=d.n,e=new z_(19);for(var w=0;w<D.length;++w)++e[D[w]&31];for(var w=0;w<h.length;++w)++e[h[w]&31];var x=b$(e,7),H=x.t,S=x.l,p=19;for(;p>4&&!H[m$[p-1]];--p);var Z0=K+5<<3,n=q8(Z,x4)+q8(Y,K8)+q,$0=q8(Z,B)+q8(Y,k)+q+14+3*p+q8(e,H)+2*e[16]+3*e[17]+7*e[18];if(X>=0&&Z0<=n&&Z0<=$0)return L9($,N,_.subarray(X,X+K));var _0,q0,X0,N0;if(W4($,N,1+($0<n)),N+=2,$0<n){_0=_4(B,O,0),q0=B,X0=_4(k,A,0),N0=k;var z0=_4(H,S,0);W4($,N,M-257),W4($,N+5,o-1),W4($,N+10,p-4),N+=14;for(var w=0;w<p;++w)W4($,N+3*w,H[m$[w]]);N+=3*p;var D0=[D,h];for(var A0=0;A0<2;++A0){var n0=D0[A0];for(var w=0;w<n0.length;++w){var S0=n0[w]&31;if(W4($,N,z0[S0]),N+=H[S0],S0>15)W4($,N,n0[w]>>5&127),N+=n0[w]>>12}}}else _0=TG,q0=x4,X0=PG,N0=K8;for(var w=0;w<G;++w){var M0=Q[w];if(M0>255){var S0=M0>>18&31;if(Y8($,N,_0[S0+257]),N+=q0[S0+257],S0>7)W4($,N,M0>>23&31),N+=Z6[S0];var d0=M0&31;if(Y8($,N,X0[d0]),N+=N0[d0],d0>3)Y8($,N,M0>>5&8191),N+=Y6[d0]}else Y8($,N,_0[M0]),N+=q0[M0]}return Y8($,N,_0[256]),N+q0[256]},RG=new l$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F9=new w1(0),wG=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,G=new w1(Q+q+5*(1+Math.ceil(q/7000))+Z),X=G.subarray(Q,G.length-Z),K=Y.l,N=(Y.r||0)&7;if($){if(N)X[0]=Y.r>>3;var V=RG[$-1],B=V>>13,O=V&8191,E=(1<<j)-1,k=Y.p||new z_(32768),A=Y.h||new z_(E+1),J=Math.ceil(j/3),D=2*J,M=function(e0){return(_[e0]^_[e0+1]<<J^_[e0+2]<<D)&E},d=new l$(25000),h=new z_(288),o=new z_(32),e=0,w=0,x=Y.i||0,H=0,S=Y.w||0,p=0;for(;x+2<q;++x){var Z0=M(x),n=x&32767,$0=A[Z0];if(k[n]=$0,A[Z0]=n,S<=x){var _0=q-x;if((e>7000||H>24576)&&(_0>423||!K)){N=N9(_,X,0,d,h,o,w,H,p,x-p,N),H=e=w=0,p=x;for(var q0=0;q0<286;++q0)h[q0]=0;for(var q0=0;q0<30;++q0)o[q0]=0}var X0=2,N0=0,z0=O,D0=n-$0&32767;if(_0>2&&Z0==M(x-D0)){var A0=Math.min(B,_0)-1,n0=Math.min(32767,x),S0=Math.min(258,_0);while(D0<=n0&&--z0&&n!=$0){if(_[x+X0]==_[x+X0-D0]){var M0=0;for(;M0<S0&&_[x+M0]==_[x+M0-D0];++M0);if(M0>X0){if(X0=M0,N0=D0,M0>A0)break;var d0=Math.min(D0,M0-2),i0=0;for(var q0=0;q0<d0;++q0){var v0=x-D0+q0&32767,o0=k[v0],b0=v0-o0&32767;if(b0>i0)i0=b0,$0=v0}}}n=$0,$0=k[n],D0+=n-$0&32767}}if(N0){d[H++]=268435456|h$[X0]<<18|K9[N0];var t0=h$[X0]&31,H0=K9[N0]&31;w+=Z6[t0]+Y6[H0],++h[257+t0],++o[H0],S=x+X0,++e}else d[H++]=_[x],++h[_[x]]}}for(x=Math.max(x,S);x<q;++x)d[H++]=_[x],++h[_[x]];if(N=N9(_,X,K,d,h,o,w,H,p,x-p,N),!K)Y.r=N&7|X[N/8|0]<<3,N-=7,Y.h=A,Y.p=k,Y.i=x,Y.w=S}else{for(var x=Y.w||0;x<q+K;x+=65535){var m0=x+65535;if(m0>=q)X[N/8|0]=K,m0=q;N=L9(X,N+1,_.subarray(x,m0))}Y.i=q}return G8(G,0,Q+n$(N)+Z)};var z9=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var G=Math.min(q+2655,Y);for(;q<G;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},fG=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new w1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return wG(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var H9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var uG=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=z9();Z.p($.dictionary),H9(_,2,Z.d())}},vG=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)K_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)K_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var g$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new w1(32768),this.p=new w1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)K_(5);if(this.d)K_(4);if(!this.p.length)this.p=$;else if($.length){var j=new w1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=yG(this.p,this.s,this.o);this.ondata(G8(Q,j,this.s.b),this.d),this.o=G8(Q,this.s.b-32768),this.s.b=this.o.length,this.p=G8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function J9(_,$){if(!$)$={};var j=z9();j.p(_);var Q=fG(_,$,$.dictionary?6:2,4);return uG(Q,$),H9(Q,Q.length-4,j.d()),Q}var O9=function(){function _($,j){g$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(g$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(vG(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)K_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}g$.prototype.c.call(this,j)},_}();var bG=typeof TextDecoder<"u"&&new TextDecoder,gG=0;try{bG.decode(F9,{stream:!0}),gG=1}catch(_){}var mG=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],hG=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],pG=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],cG=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],lG=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],nG=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],dG=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],iG=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],E9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;E9[_]=$}function k9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function M9(_){let $=0n,j=k9(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function rG(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function E5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function D9(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function oG(_){let $=E5(M9(_),lG,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of dG){j=D9(j,Y),Q=D9(Q,Y);let q=j<<28n|Q;Z.push(E5(q,nG,56))}return Z}function sG(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(iG[j][Y][q])}return $}function aG(_,$){let j=E5(_,pG,32)^BigInt($),Q=sG(j);return E5(Q,cG,32)}function A9(_,$){let j=oG($),Q=E5(M9(_),mG,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let G of j){let X=Y,K=(Z^aG(Y,G))&0xffffffffn;Z=X,Y=K}let q=Y<<32n|Z;return rG(E5(q,hG,64),8)}function tG(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=E9[Z]}return j}function I9(_,$){let j=k9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=tG(_),Z=new Uint8Array(16);return Z.set(A9(j.slice(0,8),Q),0),Z.set(A9(j.slice(8,16),Q),8),Z}var n_="vnc";function eG(_){return Number(_)}function _K(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=eG(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function I5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function $K(_,$){let j=I5(_),Q=I5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function jK(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=I5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function QK(){return(_)=>{let $=I5(_);try{let j=[],Q=new O9((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return jK(j)}catch(j){try{let Q=J9($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function ZK(_){return new TextEncoder().encode(String(_||""))}function k5(_){return new TextDecoder().decode(I5(_))}function YK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function qK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function T9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function GK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function KK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function C9(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function M5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function S9(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function XK(_,$,j,Q){let Z=Q||T5,Y=I5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),G=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<G)throw Error(`Incomplete raw rectangle payload: expected ${G} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let X=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,N=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let B=S9(Y,K,q,Z.bigEndian),O=M5(B>>>Z.redShift&Z.redMax,Z.redMax),E=M5(B>>>Z.greenShift&Z.greenMax,Z.greenMax),k=M5(B>>>Z.blueShift&Z.blueMax,Z.blueMax);X[N]=O,X[N+1]=E,X[N+2]=k,X[N+3]=255,K+=q,N+=4}return X}function U4(_,$,j){let Q=j||T5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=S9(_,$,Z,Q.bigEndian);return{rgba:[M5(Y>>>Q.redShift&Q.redMax,Q.redMax),M5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),M5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function y4(_,$,j,Q,Z,Y,q){if(!q)return;for(let G=0;G<Y;G+=1)for(let X=0;X<Z;X+=1){let K=((Q+G)*$+(j+X))*4;_[K]=q[0],_[K+1]=q[1],_[K+2]=q[2],_[K+3]=q[3]}}function x9(_,$,j,Q,Z,Y,q){for(let G=0;G<Y;G+=1){let X=G*Z*4,K=((Q+G)*$+j)*4;_.set(q.subarray(X,X+Z*4),K)}}function P9(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function NK(_,$,j,Q,Z,Y,q){let G=Z||T5,X=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let N=_.slice($+4,$+4+K),V;try{V=q(N)}catch{return{consumed:4+K,skipped:!0}}let B=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let E=0;E<Q;E+=64){let k=Math.min(64,Q-E);for(let A=0;A<j;A+=64){let J=Math.min(64,j-A);if(V.byteLength<B+1)return null;let D=V[B++],M=D&127,d=(D&128)!==0;if(!d&&M===0){let h=J*k*X;if(V.byteLength<B+h)return null;let o=Y(V.slice(B,B+h),J,k,G);B+=h,x9(O,j,A,E,J,k,o);continue}if(!d&&M===1){let h=U4(V,B,G);if(!h)return null;B+=h.bytesPerPixel,y4(O,j,A,E,J,k,h.rgba);continue}if(!d&&M>1&&M<=16){let h=[];for(let x=0;x<M;x+=1){let H=U4(V,B,G);if(!H)return null;B+=H.bytesPerPixel,h.push(H.rgba)}let o=M<=2?1:M<=4?2:4,e=Math.ceil(J*o/8),w=e*k;if(V.byteLength<B+w)return null;for(let x=0;x<k;x+=1){let H=B+x*e;for(let S=0;S<J;S+=1){let p=S*o,Z0=H+(p>>3),n=8-o-(p&7),$0=V[Z0]>>n&(1<<o)-1;y4(O,j,A+S,E+x,1,1,h[$0])}}B+=w;continue}if(d&&M===0){let h=0,o=0;while(o<k){let e=U4(V,B,G);if(!e)return null;B+=e.bytesPerPixel;let w=P9(V,B);if(!w)return null;B+=w.consumed;for(let x=0;x<w.runLength;x+=1)if(y4(O,j,A+h,E+o,1,1,e.rgba),h+=1,h>=J){if(h=0,o+=1,o>=k)break}}continue}if(d&&M>0){let h=[];for(let w=0;w<M;w+=1){let x=U4(V,B,G);if(!x)return null;B+=x.bytesPerPixel,h.push(x.rgba)}let o=0,e=0;while(e<k){if(V.byteLength<B+1)return null;let w=V[B++],x=w,H=1;if(w&128){x=w&127;let p=P9(V,B);if(!p)return null;B+=p.consumed,H=p.runLength}let S=h[x];if(!S)return null;for(let p=0;p<H;p+=1)if(y4(O,j,A+o,E+e,1,1,S),o+=1,o>=J){if(o=0,e+=1,e>=k)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:O,decompressed:V}}function VK(_,$,j,Q,Z){let Y=Z||T5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let X=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+q+X*(q+8);if(_.byteLength<$+K)return null;let N=$+4,V=U4(_,N,Y);if(!V)return null;N+=V.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);y4(B,j,0,0,j,Q,V.rgba);for(let O=0;O<X;O+=1){let E=U4(_,N,Y);if(!E)return null;if(N+=E.bytesPerPixel,_.byteLength<N+8)return null;let k=new DataView(_.buffer,_.byteOffset+N,8),A=k.getUint16(0,!1),J=k.getUint16(2,!1),D=k.getUint16(4,!1),M=k.getUint16(6,!1);N+=8,y4(B,j,A,J,D,M,E.rgba)}return{consumed:N-$,rgba:B}}function BK(_,$,j,Q,Z,Y){let q=Z||T5,G=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),X=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),K=$,N=[0,0,0,255],V=[255,255,255,255];for(let B=0;B<Q;B+=16){let O=Math.min(16,Q-B);for(let E=0;E<j;E+=16){let k=Math.min(16,j-E);if(_.byteLength<K+1)return null;let A=_[K++];if(A&1){let J=k*O*G;if(_.byteLength<K+J)return null;let D=Y(_.slice(K,K+J),k,O,q);K+=J,x9(X,j,E,B,k,O,D);continue}if(A&2){let J=U4(_,K,q);if(!J)return null;N=J.rgba,K+=J.bytesPerPixel}if(y4(X,j,E,B,k,O,N),A&4){let J=U4(_,K,q);if(!J)return null;V=J.rgba,K+=J.bytesPerPixel}if(A&8){if(_.byteLength<K+1)return null;let J=_[K++];for(let D=0;D<J;D+=1){let M=V;if(A&16){let H=U4(_,K,q);if(!H)return null;M=H.rgba,K+=H.bytesPerPixel}if(_.byteLength<K+2)return null;let d=_[K++],h=_[K++],o=d>>4,e=d&15,w=(h>>4)+1,x=(h&15)+1;y4(X,j,E+o,B+e,w,x,M)}}}}return{consumed:K-$,rgba:X}}var T5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class q6{protocol=n_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:XK,this.pipeline=_.pipeline||null,this.encodings=_K(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...T5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:QK()}receive(_){if(_)this.buffer=$K(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=k5(Z),q=YK(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=qK(q),j.push(ZK(this.clientVersionText)),$.push({type:"protocol-version",protocol:n_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+X)break;this.consume(1);let K=k5(this.consume(4+X).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:n_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:n_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+G)break;let X=k5(this.consume(4+G).slice(4));throw Error(X||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:n_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:n_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(I9(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let G=k5(this.consume(4+q).slice(4));throw Error(G||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:n_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),G=T9(Z,4),X=Z.getUint32(20,!1);if(this.buffer.byteLength<24+X)break;let K=this.consume(24),N=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=N.getUint16(0,!1),this.framebufferHeight=N.getUint16(2,!1),this.serverPixelFormat=T9(N,4),this.serverName=k5(this.consume(X)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(GK(this.clientPixelFormat)),j.push(KK(this.encodings)),j.push(C9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:n_,width:Y,height:q,name:this.serverName,pixelFormat:G}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),G=4,X=[],K=!1,N=!!this.pipeline;for(let B=0;B<q;B+=1){if(this.buffer.byteLength<G+12){K=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,12),E=O.getUint16(0,!1),k=O.getUint16(2,!1),A=O.getUint16(4,!1),J=O.getUint16(6,!1),D=O.getInt32(8,!1);if(G+=12,D===0){let M=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),d=A*J*M;if(this.buffer.byteLength<G+d){K=!0;break}let h=this.buffer.slice(G,G+d);if(G+=d,N)this.pipeline.processRawRect(h,E,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:E,y:k,width:A,height:J});else X.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:this.decodeRawRect(h,A,J,this.clientPixelFormat)});continue}if(D===2){let M=VK(this.buffer,G,A,J,this.clientPixelFormat);if(!M){K=!0;break}if(N){let d=this.buffer.slice(G,G+M.consumed);this.pipeline.processRreRect(d,E,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:E,y:k,width:A,height:J})}else X.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:M.rgba});G+=M.consumed;continue}if(D===1){if(this.buffer.byteLength<G+4){K=!0;break}let M=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,4),d=M.getUint16(0,!1),h=M.getUint16(2,!1);if(G+=4,N)this.pipeline.processCopyRect(E,k,A,J,d,h),X.push({kind:"pipeline",x:E,y:k,width:A,height:J});else X.push({kind:"copy",x:E,y:k,width:A,height:J,srcX:d,srcY:h});continue}if(D===16){let M=NK(this.buffer,G,A,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!M){K=!0;break}if(G+=M.consumed,M.skipped)continue;if(N&&M.decompressed)this.pipeline.processZrleTileData(M.decompressed,E,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:E,y:k,width:A,height:J});else X.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:M.rgba});continue}if(D===5){let M=BK(this.buffer,G,A,J,this.clientPixelFormat,this.decodeRawRect);if(!M){K=!0;break}if(N){let d=this.buffer.slice(G,G+M.consumed);this.pipeline.processHextileRect(d,E,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:E,y:k,width:A,height:J})}else X.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:M.rgba});G+=M.consumed;continue}if(D===-223){if(this.framebufferWidth=A,this.framebufferHeight=J,N)this.pipeline.initFramebuffer(A,J);X.push({kind:"resize",x:E,y:k,width:A,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(G);let V={type:"framebuffer-update",protocol:n_,width:this.framebufferWidth,height:this.framebufferHeight,rects:X};if(N)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(C9(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:n_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let G=k5(this.consume(q));$.push({type:"clipboard",protocol:n_,text:G}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var L4="piclaw://vnc";function WK(_){let $=String(_||"");if($===L4)return null;if(!$.startsWith(`${L4}/`))return null;let j=$.slice(`${L4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function t4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function UK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function LK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function FK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function zK(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function HK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class y9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=WK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=HK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${t4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${t4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${t4(Z.id)}" data-target-label="${t4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=zK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=Z8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${t4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=Z8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=Z8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=G9($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return Z9(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(Q6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=w$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~w$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of Y9(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(q9(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=f$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??f$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new q6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await Q9(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(G,X,K,N)=>Q.decodeRawRectToRgba(G,X,K,N);let Y=Z8(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new q6(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new x$({url:FK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(G)=>{this.applyMetrics(G)},onMessage:(G)=>{this.handleSocketMessage(G)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await UK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${t4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await LK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var d$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===L4||$.startsWith(`${L4}/`)?9000:!1},mount(_,$){return new y9(_,$)}};function R4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function JK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),K=Z.startsWith("/")?Z:`${G?`${G}/`:""}${Z}`,N=[];for(let B of K.split("/")){if(!B||B===".")continue;if(B===".."){if(N.length>0)N.pop();continue}N.push(B)}let V=N.join("/");return`${x8(V)}${Y}${q}`}function X8(_){return _?.preview||null}function OK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function DK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function AK(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${R4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${R4(x_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${R4(s4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${R4(DK($))}</span>`),Q.push(`<span><strong>extension:</strong> ${R4(OK(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${R4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function EK(_){let $=X8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=AK(_,$);if($.kind==="image"){let Q=$.url||($.path?x8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${R4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=L_($.text||"",null,{rewriteImageSrc:(Z)=>JK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${R4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class i${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=EK(this.context)}getContent(){let _=X8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=X8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var r$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=X8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new i$(_,$)}},o$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return X8(_)||_?.path?1:!1},mount(_,$){return new i$(_,$)}};var kK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),MK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},IK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function w9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function R9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class f9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=w9(j),Y=IK[Z]||"\uD83D\uDCC4",q=MK[Z]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
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
        `,_.appendChild(G);let X=G.querySelector("#ov-open-tab");if(X)X.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=w9(_?.path);if(!$||!kK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new f9(_,$);return new u9(_,$)}};var TK=/\.(csv|tsv)$/i;function v9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class b9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
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
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!TK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new b9(_,$);return new g9(_,$)}};var CK=/\.pdf$/i;function PK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${PK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!CK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new m9(_,$);return new h9(_,$)}};var SK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function e$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
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
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _3={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!SK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new p9(_,$);return new c9(_,$)}};var xK=/\.(mp4|m4v|mov|webm|ogv)$/i;function yK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${yK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var $3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!xK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new l9(_,$);return new n9(_,$)}};function RK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function wK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var j3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function d9(_){let $=String(_||"").trim();return $?$:j3}function fK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function uK(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function vK(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,G,X,K,N,V){try{if(q&&X!=null&&j({filename:q,format:G,data:X,mimeType:K,base64Encoded:Boolean(N),defaultMode:V}))return}catch(B){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",B)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,G,X,K,N,V){try{if(G&&j({filename:G,data:q,mimeType:X,base64Encoded:Boolean(K),mode:N,folderId:V}))return}catch(B){console.warn("[drawio-pane] export intercept failed, falling back to native export",B)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function i9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${uK(j)}`}class r9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${wK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class o9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=fK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(vK(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=j3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await i9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await i9(_,"image/png");else this.xmlData=d9(await _.text());else if(_.status===404)this.xmlData=j3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?d9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var Q3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!RK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new r9(_,$);return new o9(_,$)}};var bK=/\.mindmap\.ya?ml$/i,Z3=String(Date.now());function s9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function Y3(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function gK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function mK(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class t9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(s9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,gK("/static/css/mindmap.css"),await Promise.all([Y3("/static/js/vendor/d3-mindmap.min.js?v="+Z3),Y3("/static/js/vendor/js-yaml.min.js?v="+Z3)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),mK(this.mindmapEl);let j=s9(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await Y3("/static/js/vendor/mindmap-editor.js?v="+Z3),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var q3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!bK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new a9(_,$);return new t9(_,$)}};var hK=/\.kanban\.md$/i,pK=String(Date.now());function e9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function cK(){let _=window;if(_.preact)return;_.preact={h:T8,render:P4,Component:B5,createContext:M2},_.preactHooks={useState:m,useEffect:g,useCallback:P,useRef:C,useMemo:R0,useReducer:y6,useContext:C2,useLayoutEffect:p5,useImperativeHandle:T2,useErrorBoundary:S2,useDebugValue:P2},_.htm={bind:()=>L}}function lK(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function nK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class _j{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class $j{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(e9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,nK("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=e9();try{if(cK(),await lK("/static/js/vendor/kanban-editor.js?v="+pK),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var G3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!hK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new _j(_,$);return new $j(_,$)}};class jj{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var r0=new jj;var G6="workspaceExplorerScale",dK=["compact","default","comfortable"],iK=new Set(dK),rK={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function Qj(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return iK.has(j)?j:$}function K3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function oK(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function sK(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function X3(_={}){let $=oK(_),j=_.stored?Qj(_.stored,$):$;return sK(j,_)}function Zj(_){return rK[Qj(_)]}function aK(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function N3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function Yj(_,$,j={}){let Q=j.resolvePane;if(N3(_,Q))return!0;return aK($)}var tK=60000,Xj=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function eK(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return N3($,(j)=>l0.resolve(j))}function Nj(_,$,j,Q=0,Z=[]){if(!j&&Xj(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)Nj(Y,$,j,Q+1,Z);return Z}function qj(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&Xj(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function U3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((G)=>[G?.path,G])):new Map,Y=!j||j.length!==Q.length,q=Q.map((G)=>{let X=U3(Z.get(G.path),G);if(X!==Z.get(G.path))Y=!0;return X});return Y?{...$,children:q}:_}function B3(_,$,j){if(!_)return _;if(_.path===$)return U3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=B3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var Vj=4,V3=14,_X=8,$X=16;function Bj(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=Bj(Q);return _.__bytes=j,j}function Wj(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Vj)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let G of Z){let X=Math.max(0,Number(G?.__bytes??G?.size??0));if(X<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:X});else Y.push({kind:"file",name:G.name,path:G.path,size:X})}Y.sort((G,X)=>X.size-G.size);let q=Y;if(Y.length>V3){let G=Y.slice(0,V3-1),X=Y.slice(V3-1),K=X.reduce((N,V)=>N+V.size,0);G.push({kind:"other",name:`+${X.length} more`,path:`${Q.path}/[other]`,size:K}),q=G}return Q.children=q.map((G)=>{if(G.kind==="dir")return Wj(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Q}function Gj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Uj(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function K6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function L3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,G=Y-Z>q?Z+q:Y,X=K6(_,$,Q,Z),K=K6(_,$,Q,G),N=K6(_,$,j,G),V=K6(_,$,j,Z),B=G-Z>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${B} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var Lj={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function Fj(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(G,X,K,N)=>{let V=Array.isArray(G?.children)?G.children:[];if(!V.length)return;let B=Math.max(0,Number(G.size)||0);if(B<=0)return;let O=K-X,E=X;V.forEach((k,A)=>{let J=Math.max(0,Number(k.size)||0);if(J<=0)return;let D=J/B,M=E,d=A===V.length-1?K:E+O*D;if(E=d,d-M<0.003)return;let h=Lj[N];if(h){let o=Uj(M,N,j);if(Q.push({key:k.path,path:k.path,label:k.name,size:J,color:o,depth:N,startAngle:M,endAngle:d,innerRadius:h[0],outerRadius:h[1],d:L3(120,120,h[0],h[1],M,d)}),N===1)Z.push({key:k.path,name:k.name,size:J,pct:Y>0?J/Y*100:0,color:o})}if(N<Vj)q(k,M,d,N+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function W3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=W3(Q,$);if(Z)return Z}return null}function zj(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=Lj[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,G=Uj(Y,1,Q),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:G,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:L3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:K,name:_,size:j,pct:100,color:G}]}}function Kj(_,$=!1,j=!1){if(!_)return null;let Q=Bj(_),Z=Wj(_,0),Y=Z.size||Q,{segments:q,legend:G}=Fj(Z,Y,j);if(!q.length&&Y>0){let X=zj("[files]",Z.path,Y,j);q=X.segments,G=X.legend}return{root:Z,totalSize:Y,segments:q,legend:G,truncated:$,isDarkTheme:j}}function jX({payload:_}){if(!_)return null;let[$,j]=m(null),[Q,Z]=m(_?.root?.path||"."),[Y,q]=m(()=>[_?.root?.path||"."]),[G,X]=m(!1);g(()=>{let H=_?.root?.path||".";Z(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Q)return;X(!0);let H=setTimeout(()=>X(!1),180);return()=>clearTimeout(H)},[Q]);let K=R0(()=>{return W3(_.root,Q)||_.root},[_?.root,Q]),N=K?.size||_.totalSize||0,{segments:V,legend:B}=R0(()=>{let H=Fj(K,N,_.isDarkTheme);if(H.segments.length>0)return H;if(N<=0)return H;let S=K?.children?.length?"Total":"[files]";return zj(S,K?.path||_?.root?.path||".",N,_.isDarkTheme)},[K,N,_.isDarkTheme,_?.root?.path]),[O,E]=m(V),k=C(new Map),A=C(0);g(()=>{let H=k.current,S=new Map(V.map(($0)=>[$0.key,$0])),p=performance.now(),Z0=220,n=($0)=>{let _0=Math.min(1,($0-p)/220),q0=_0*(2-_0),X0=V.map((N0)=>{let D0=H.get(N0.key)||{startAngle:N0.startAngle,endAngle:N0.startAngle,innerRadius:N0.innerRadius,outerRadius:N0.innerRadius},A0=(i0,v0)=>i0+(v0-i0)*q0,n0=A0(D0.startAngle,N0.startAngle),S0=A0(D0.endAngle,N0.endAngle),M0=A0(D0.innerRadius,N0.innerRadius),d0=A0(D0.outerRadius,N0.outerRadius);return{...N0,d:L3(120,120,M0,d0,n0,S0)}});if(E(X0),_0<1)A.current=requestAnimationFrame(n)};if(A.current)cancelAnimationFrame(A.current);return A.current=requestAnimationFrame(n),k.current=S,()=>{if(A.current)cancelAnimationFrame(A.current)}},[V]);let J=O.length?O:V,D=N>0?x_(N):"0 B",M=K?.name||"",h=(M&&M!=="."?M:"Total")||"Total",o=D,e=Y.length>1,w=(H)=>{if(!H?.path)return;let S=W3(_.root,H.path);if(!S||!Array.isArray(S.children)||S.children.length===0)return;q((p)=>[...p,S.path]),Z(S.path),j(null)},x=()=>{if(!e)return;q((H)=>{let S=H.slice(0,-1);return Z(S[S.length-1]||_?.root?.path||"."),S}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${K?.path||_?.root?.path||"."}`}
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
                        onClick=${()=>w(H)}
                    >
                        <title>${H.label} — ${x_(H.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
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
    `}function QX({mediaId:_}){let[$,j]=m(null);if(g(()=>{if(!_)return;F5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?x_($.metadata.size):"";return L`
        <a href=${S_(_)} download=${Q} class="file-attachment"
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
    `}function Hj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:G=!1}){let[X,K]=m(null),[N,V]=m(new Set(["."])),[B,O]=m(null),[E,k]=m(null),[A,J]=m(""),[D,M]=m(null),[d,h]=m(null),[o,e]=m(!0),[w,x]=m(!1),[H,S]=m(null),[p,Z0]=m(()=>z5("workspaceShowHidden",!1)),[n,$0]=m(!1),[_0,q0]=m(null),[X0,N0]=m(null),[z0,D0]=m(null),[A0,n0]=m(!1),[S0,M0]=m(null),[d0,i0]=m(()=>Gj()),[v0,o0]=m(()=>X3({stored:U_(G6),...K3()})),[b0,t0]=m(!1),H0=C(N),m0=C(""),e0=C(null),Q1=C(0),Q_=C(new Set),J1=C(null),a0=C(new Map),b1=C(_),A1=C(Q),Z1=C(null),g0=C(null),P1=C(null),E1=C(null),a=C(null),V0=C(null),L0=C("."),G0=C(null),x0=C({path:null,dragging:!1,startX:0,startY:0}),C0=C({path:null,dragging:!1,startX:0,startY:0}),w0=C({path:null,timer:0}),k0=C(!1),y0=C(0),c0=C(new Map),O0=C(null),u0=C(null),J0=C(null),Q0=C(null),y=C(null),t=C(null),U0=C(p),E0=C($),f0=C(j??$),Y1=C(0),O1=C(z0),G1=C(n),g1=C(_0),$4=C(null),X_=C({x:0,y:0}),a1=C(0),N_=C(null),Z_=C(B),_1=C(E),n1=C(null),j4=C(D);b1.current=_,A1.current=Q,g(()=>{H0.current=N},[N]),g(()=>{U0.current=p},[p]),g(()=>{E0.current=$},[$]),g(()=>{f0.current=j??$},[j,$]),g(()=>{O1.current=z0},[z0]),g(()=>{if(typeof window>"u")return;let z=()=>{o0(X3({stored:U_(G6),...K3()}))};z();let I=()=>z(),f=()=>z(),u=(j0)=>{if(!j0||j0.key===null||j0.key===G6)z()};window.addEventListener("resize",I),window.addEventListener("focus",f),window.addEventListener("storage",u);let r=window.matchMedia?.("(pointer: coarse)"),Y0=window.matchMedia?.("(hover: none)"),B0=(j0,T0)=>{if(!j0)return;if(j0.addEventListener)j0.addEventListener("change",T0);else if(j0.addListener)j0.addListener(T0)},W0=(j0,T0)=>{if(!j0)return;if(j0.removeEventListener)j0.removeEventListener("change",T0);else if(j0.removeListener)j0.removeListener(T0)};return B0(r,I),B0(Y0,I),()=>{window.removeEventListener("resize",I),window.removeEventListener("focus",f),window.removeEventListener("storage",u),W0(r,I),W0(Y0,I)}},[]),g(()=>{let z=(I)=>{let f=I?.detail?.path;if(!f)return;let u=f.split("/"),r=[];for(let Y0=1;Y0<u.length;Y0++)r.push(u.slice(0,Y0).join("/"));if(r.length)V((Y0)=>{let B0=new Set(Y0);B0.add(".");for(let W0 of r)B0.add(W0);return B0});O(f),requestAnimationFrame(()=>{let Y0=document.querySelector(`[data-path="${CSS.escape(f)}"]`);if(Y0)Y0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),g(()=>{G1.current=n},[n]),g(()=>{g1.current=_0},[_0]),g(()=>{Z_.current=B},[B]),g(()=>{_1.current=E},[E]),g(()=>{j4.current=D},[D]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>i0(Gj());z();let I=window.matchMedia?.("(prefers-color-scheme: dark)"),f=()=>z();if(I?.addEventListener)I.addEventListener("change",f);else if(I?.addListener)I.addListener(f);let u=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(u?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)u?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(I?.removeEventListener)I.removeEventListener("change",f);else if(I?.removeListener)I.removeListener(f);u?.disconnect()}},[]),g(()=>{if(!E)return;let z=a.current;if(!z)return;let I=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(I)},[E]),g(()=>{if(!b0)return;let z=(f)=>{let u=f?.target;if(!(u instanceof Element))return;if(y.current?.contains(u))return;if(t.current?.contains(u))return;t0(!1)},I=(f)=>{if(f?.key==="Escape")t0(!1),t.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",I),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",I)}},[b0]);let y_=async(z,I={})=>{let f=Boolean(I?.autoOpen),u=String(z||"").trim();x(!0),M(null),h(null);try{let r=await d5(u,20000);if(f&&u&&Yj(u,r,{resolvePane:(Y0)=>l0.resolve(Y0)}))return A1.current?.(u,r),r;return M(r),r}catch(r){let Y0={error:r.message||"Failed to load preview"};return M(Y0),Y0}finally{x(!1)}};Z1.current=y_;let _5=async()=>{if(!E0.current)return;try{let z=await n5("",1,U0.current),I=qj(z.root,H0.current,U0.current);if(I===m0.current){e(!1);return}if(m0.current=I,e0.current=z.root,!Q1.current)Q1.current=requestAnimationFrame(()=>{Q1.current=0,K((f)=>U3(f,e0.current)),e(!1)})}catch(z){S(z.message||"Failed to load workspace"),e(!1)}},f4=async(z)=>{if(!z)return;if(Q_.current.has(z))return;Q_.current.add(z);try{let I=await n5(z,1,U0.current);K((f)=>B3(f,z,I.root))}catch(I){S(I.message||"Failed to load workspace")}finally{Q_.current.delete(z)}};g0.current=f4;let f1=P(()=>{let z=B;if(!z)return".";let I=a0.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let f=z.split("/");return f.pop(),f.join("/")||"."},[B]),V_=P((z)=>{let I=z?.closest?.(".workspace-row");if(!I)return null;let f=I.dataset.path,u=I.dataset.type;if(!f)return null;if(u==="dir")return f;if(f.includes("/")){let r=f.split("/");return r.pop(),r.join("/")||"."}return"."},[]),S1=P((z)=>{return V_(z?.target||null)},[V_]),D1=P((z)=>{O1.current=z,D0(z)},[]),K1=P(()=>{let z=w0.current;if(z?.timer)clearTimeout(z.timer);w0.current={path:null,timer:0}},[]),R_=P((z)=>{if(!z||z==="."){K1();return}let I=a0.current?.get(z);if(!I||I.type!=="dir"){K1();return}if(H0.current?.has(z)){K1();return}if(w0.current?.path===z)return;K1();let f=setTimeout(()=>{w0.current={path:null,timer:0},g0.current?.(z),V((u)=>{let r=new Set(u);return r.add(z),r})},600);w0.current={path:z,timer:f}},[K1]),w_=P((z,I)=>{if(X_.current={x:z,y:I},a1.current)return;a1.current=requestAnimationFrame(()=>{a1.current=0;let f=$4.current;if(!f)return;let u=X_.current;f.style.transform=`translate(${u.x+12}px, ${u.y+12}px)`})},[]),X1=P((z)=>{if(!z)return;let f=(a0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!f)return;N0({path:z,label:f})},[]),Y_=P(()=>{if(N0(null),a1.current)cancelAnimationFrame(a1.current),a1.current=0;if($4.current)$4.current.style.transform="translate(-9999px, -9999px)"},[]),h0=P((z)=>{if(!z)return".";let I=a0.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let f=z.split("/");return f.pop(),f.join("/")||"."},[]),I1=P(()=>{k(null),J("")},[]),H_=P((z)=>{if(!z)return;let f=(a0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!f||z===".")return;k(z),J(f)},[]),t1=P(async()=>{let z=_1.current;if(!z)return;let I=(A||"").trim();if(!I){I1();return}let f=a0.current?.get(z),u=(f?.name||z.split("/").pop()||z).trim();if(I===u){I1();return}try{let Y0=(await s6(z,I))?.path||z,B0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(I1(),S(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:Y0,type:f?.type||"file"}})),f?.type==="dir")V((W0)=>{let j0=new Set;for(let T0 of W0)if(T0===z)j0.add(Y0);else if(T0.startsWith(`${z}/`))j0.add(`${Y0}${T0.slice(z.length)}`);else j0.add(T0);return j0});if(O(Y0),f?.type==="dir")M(null),x(!1),h(null);else Z1.current?.(Y0);g0.current?.(B0)}catch(r){S(r?.message||"Failed to rename file")}},[I1,A]),u4=P(async(z)=>{let u=z||".";for(let r=0;r<50;r+=1){let B0=`untitled${r===0?"":`-${r}`}.md`;try{let j0=(await o6(u,B0,""))?.path||(u==="."?B0:`${u}/${B0}`);if(u&&u!==".")V((T0)=>new Set([...T0,u]));O(j0),S(null),g0.current?.(u),Z1.current?.(j0);return}catch(W0){if(W0?.status===409||W0?.code==="file_exists")continue;S(W0?.message||"Failed to create file");return}}S("Failed to create file (untitled name already in use).")},[]),d_=P((z)=>{if(z?.stopPropagation?.(),A0)return;let I=h0(Z_.current);u4(I)},[A0,h0,u4]);g(()=>{if(typeof window>"u")return;let z=(I)=>{let f=I?.detail?.updates||[];if(!Array.isArray(f)||f.length===0)return;K((W0)=>{let j0=W0;for(let T0 of f){if(!T0?.root)continue;if(!j0||T0.path==="."||!T0.path)j0=T0.root;else j0=B3(j0,T0.path,T0.root)}if(j0)m0.current=qj(j0,H0.current,U0.current);return e(!1),j0});let u=Z_.current;if(Boolean(u)&&f.some((W0)=>{let j0=W0?.path||"";if(!j0||j0===".")return!0;return u===j0||u.startsWith(`${j0}/`)||j0.startsWith(`${u}/`)}))c0.current.clear();if(!u||!j4.current)return;let Y0=a0.current?.get(u);if(Y0&&Y0.type==="dir")return;if(f.some((W0)=>{let j0=W0?.path||"";if(!j0||j0===".")return!0;return u===j0||u.startsWith(`${j0}/`)}))Z1.current?.(u)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),J1.current=_5;let v4=C(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),I=f0.current??E0.current,f=document.visibilityState!=="hidden"&&(I||z.matches&&E0.current);i5(f,U0.current).catch(()=>{})}).current,i_=C(0),$5=C(()=>{if(i_.current)clearTimeout(i_.current);i_.current=setTimeout(()=>{i_.current=0,v4()},250)}).current;g(()=>{if(E0.current)J1.current?.();$5()},[$,j]),g(()=>{J1.current(),v4();let z=setInterval(()=>J1.current(),tK),I=H5("previewHeight",null),f=Number.isFinite(I)?Math.min(Math.max(I,80),600):280;if(y0.current=f,P1.current)P1.current.style.setProperty("--preview-height",`${f}px`);let u=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>$5();if(u.addEventListener)u.addEventListener("change",r);else if(u.addListener)u.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(z),Q1.current)cancelAnimationFrame(Q1.current),Q1.current=0;if(u.removeEventListener)u.removeEventListener("change",r);else if(u.removeListener)u.removeListener(r);if(document.removeEventListener("visibilitychange",r),i_.current)clearTimeout(i_.current),i_.current=0;if(G0.current)clearTimeout(G0.current),G0.current=null;i5(!1,U0.current).catch(()=>{})}},[]);let r_=R0(()=>Nj(X,N,p),[X,N,p]),f_=R0(()=>new Map(r_.map((z)=>[z.node.path,z.node])),[r_]),S5=R0(()=>Zj(v0),[v0]);a0.current=f_;let N1=(B?a0.current.get(B):null)?.type==="dir";g(()=>{if(!B||!N1){M0(null),O0.current=null,u0.current=null;return}let z=B,I=`${p?"hidden":"visible"}:${B}`,f=c0.current,u=f.get(I);if(u?.root){f.delete(I),f.set(I,u);let B0=Kj(u.root,Boolean(u.truncated),d0);if(B0)O0.current=B0,u0.current=B,M0({loading:!1,error:null,payload:B0});return}let r=O0.current,Y0=u0.current;M0({loading:!0,error:null,payload:Y0===B?r:null}),n5(B,_X,p).then((B0)=>{if(Z_.current!==z)return;let W0={root:B0?.root,truncated:Boolean(B0?.truncated)};f.delete(I),f.set(I,W0);while(f.size>$X){let T0=f.keys().next().value;if(!T0)break;f.delete(T0)}let j0=Kj(W0.root,W0.truncated,d0);O0.current=j0,u0.current=B,M0({loading:!1,error:null,payload:j0})}).catch((B0)=>{if(Z_.current!==z)return;M0({loading:!1,error:B0?.message||"Failed to load folder size chart",payload:Y0===B?r:null})})},[B,N1,p,d0]);let x1=Boolean(D&&D.kind==="text"&&!N1&&(!D.size||D.size<=262144)),j5=x1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",J_=Boolean(B&&B!=="."),e1=Boolean(B&&!N1),m1=Boolean(B&&!N1),T1=B&&N1?y8(B,p):null,u1=P(()=>t0(!1),[]),L1=P(async(z)=>{u1();try{await z?.()}catch(I){console.warn("[workspace-explorer] Header menu action failed:",I)}},[u1]);g(()=>{let z=J0.current;if(Q0.current)Q0.current.dispose(),Q0.current=null;if(!z)return;if(z.innerHTML="",!B||N1||!D||D.error)return;let I={path:B,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},f=l0.resolve(I)||l0.get("workspace-preview-default");if(!f)return;let u=f.mount(z,I);return Q0.current=u,()=>{if(Q0.current===u)u.dispose(),Q0.current=null;z.innerHTML=""}},[B,N1,D]);let O_=(z)=>{let I=z?.target;if(I instanceof Element)return I;return I?.parentElement||null},D_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},A_=C((z)=>{let I=O_(z),f=I?.closest?.("[data-path]");if(!f)return;let u=f.dataset.path;if(!u||u===".")return;let r=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),Y0=Boolean(I?.closest?.(".workspace-caret"));if(r||Y0)return;if(_1.current===u)return;H_(u)}).current,o_=C((z)=>{if(k0.current){k0.current=!1;return}let I=O_(z),f=I?.closest?.("[data-path]");if(E1.current?.focus?.(),!f)return;let u=f.dataset.path,r=f.dataset.type,Y0=Boolean(I?.closest?.(".workspace-caret")),B0=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),W0=Z_.current===u,j0=_1.current;if(j0){if(j0===u)return;I1()}let T0=r==="file"&&n1.current===u&&!Y0&&!B0;if(r==="dir"){if(n1.current=null,O(u),M(null),h(null),x(!1),!H0.current.has(u))g0.current?.(u);if(W0&&!Y0)return;V(($_)=>{let h1=new Set($_);if(h1.has(u))h1.delete(u);else h1.add(u);return h1})}else{n1.current=null,O(u);let y1=a0.current.get(u);if(y1)b1.current?.(y1.path,y1);if(!B0&&!Y0&&eK(u))A1.current?.(u,j4.current);else{let h1=!B0&&!Y0;Z1.current?.(u,{autoOpen:h1})}}}).current,__=C(()=>{m0.current="",J1.current(),Array.from(H0.current||[]).filter((I)=>I&&I!==".").forEach((I)=>g0.current?.(I))}).current,d1=C(()=>{n1.current=null,O(null),M(null),h(null),x(!1)}).current,E_=C(()=>{Z0((z)=>{let I=!z;if(typeof window<"u")q1("workspaceShowHidden",String(I));return U0.current=I,i5(!0,I).catch(()=>{}),m0.current="",J1.current?.(),Array.from(H0.current||[]).filter((u)=>u&&u!==".").forEach((u)=>g0.current?.(u)),I})}).current,Q4=C((z)=>{if(O_(z)?.closest?.("[data-path]"))return;d1()}).current,F1=P(async(z)=>{if(!z)return;let I=z.split("/").pop()||z;if(!window.confirm(`Delete "${I}"? This cannot be undone.`))return;try{await t6(z);let u=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(Z_.current===z)d1();g0.current?.(u),S(null)}catch(u){M((r)=>({...r||{},error:u.message||"Failed to delete file"}))}},[d1]),s_=P((z)=>{let I=E1.current;if(!I||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;I.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),b4=P((z)=>{let I=r_;if(!I||I.length===0)return;let f=B?I.findIndex((u)=>u.node.path===B):-1;if(z.key==="ArrowDown"){z.preventDefault();let u=Math.min(f+1,I.length-1),r=I[u];if(!r)return;if(O(r.node.path),r.node.type!=="dir")b1.current?.(r.node.path,r.node),Z1.current?.(r.node.path);else M(null),x(!1),h(null);s_(r.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let u=f<=0?0:f-1,r=I[u];if(!r)return;if(O(r.node.path),r.node.type!=="dir")b1.current?.(r.node.path,r.node),Z1.current?.(r.node.path);else M(null),x(!1),h(null);s_(r.node.path);return}if(z.key==="ArrowRight"&&f>=0){let u=I[f];if(u?.node?.type==="dir"&&!N.has(u.node.path))z.preventDefault(),g0.current?.(u.node.path),V((r)=>new Set([...r,u.node.path]));return}if(z.key==="ArrowLeft"&&f>=0){let u=I[f];if(u?.node?.type==="dir"&&N.has(u.node.path))z.preventDefault(),V((r)=>{let Y0=new Set(r);return Y0.delete(u.node.path),Y0});return}if(z.key==="Enter"&&f>=0){z.preventDefault();let u=I[f];if(!u)return;let r=u.node.path;if(u.node.type==="dir"){if(!H0.current.has(r))g0.current?.(r);V((B0)=>{let W0=new Set(B0);if(W0.has(r))W0.delete(r);else W0.add(r);return W0}),M(null),h(null),x(!1)}else b1.current?.(r,u.node),Z1.current?.(r);return}if((z.key==="Delete"||z.key==="Backspace")&&f>=0){let u=I[f];if(!u||u.node.type==="dir")return;z.preventDefault(),F1(u.node.path);return}if(z.key==="Escape")z.preventDefault(),d1()},[d1,F1,N,r_,s_,B]),g4=P((z)=>{let I=O_(z),f=I?.closest?.(".workspace-row");if(!f)return;let u=f.dataset.type,r=f.dataset.path;if(!r||r===".")return;if(_1.current===r)return;let Y0=z?.touches?.[0];if(!Y0)return;if(x0.current={path:D_(I)?r:null,dragging:!1,startX:Y0.clientX,startY:Y0.clientY},u!=="file")return;if(G0.current)clearTimeout(G0.current);G0.current=setTimeout(()=>{if(G0.current=null,x0.current?.dragging)return;F1(r)},600)},[F1]),k_=P(()=>{if(G0.current)clearTimeout(G0.current),G0.current=null;let z=x0.current;if(z?.dragging&&z.path){let I=O1.current||f1(),f=N_.current;if(typeof f==="function")f(z.path,I)}x0.current={path:null,dragging:!1,startX:0,startY:0},Y1.current=0,$0(!1),q0(null),D1(null),K1(),Y_()},[f1,Y_,D1,K1]),m4=P((z)=>{let I=x0.current,f=z?.touches?.[0];if(!f||!I?.path){if(G0.current)clearTimeout(G0.current),G0.current=null;return}let u=Math.abs(f.clientX-I.startX),r=Math.abs(f.clientY-I.startY),Y0=u>8||r>8;if(Y0&&G0.current)clearTimeout(G0.current),G0.current=null;if(!I.dragging&&Y0)I.dragging=!0,$0(!0),q0("move"),X1(I.path);if(I.dragging){z.preventDefault(),w_(f.clientX,f.clientY);let B0=document.elementFromPoint(f.clientX,f.clientY),W0=V_(B0)||f1();if(O1.current!==W0)D1(W0);R_(W0)}},[V_,f1,X1,w_,D1,R_]),Q5=C((z)=>{z.preventDefault();let I=P1.current;if(!I)return;let f=z.clientY,u=y0.current||280,r=z.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Y0=f,B0=(j0)=>{Y0=j0.clientY;let T0=I.clientHeight-80,y1=Math.min(Math.max(u-(j0.clientY-f),80),T0);I.style.setProperty("--preview-height",`${y1}px`),y0.current=y1},W0=()=>{let j0=I.clientHeight-80,T0=Math.min(Math.max(u-(Y0-f),80),j0);y0.current=T0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("previewHeight",String(Math.round(T0))),document.removeEventListener("mousemove",B0),document.removeEventListener("mouseup",W0)};document.addEventListener("mousemove",B0),document.addEventListener("mouseup",W0)}).current,u_=C((z)=>{z.preventDefault();let I=P1.current;if(!I)return;let f=z.touches[0];if(!f)return;let u=f.clientY,r=y0.current||280,Y0=z.currentTarget;Y0.classList.add("dragging"),document.body.style.userSelect="none";let B0=(j0)=>{let T0=j0.touches[0];if(!T0)return;j0.preventDefault();let y1=I.clientHeight-80,$_=Math.min(Math.max(r-(T0.clientY-u),80),y1);I.style.setProperty("--preview-height",`${$_}px`),y0.current=$_},W0=()=>{Y0.classList.remove("dragging"),document.body.style.userSelect="",q1("previewHeight",String(Math.round(y0.current||r))),document.removeEventListener("touchmove",B0),document.removeEventListener("touchend",W0),document.removeEventListener("touchcancel",W0)};document.addEventListener("touchmove",B0,{passive:!1}),document.addEventListener("touchend",W0),document.addEventListener("touchcancel",W0)}).current,v_=async()=>{if(!B)return;try{let z=await r6(B);if(z.media_id)h(z.media_id)}catch(z){M((I)=>({...I||{},error:z.message||"Failed to attach"}))}},F4=async()=>{if(!B||N1)return;await F1(B)},b_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},h4=P((z)=>{if(!b_(z))return;if(z.preventDefault(),Y1.current+=1,!G1.current)$0(!0);q0("upload");let I=S1(z)||f1();D1(I),R_(I)},[f1,S1,D1,R_]),g_=P((z)=>{if(!b_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!G1.current)$0(!0);if(g1.current!=="upload")q0("upload");let I=S1(z)||f1();if(O1.current!==I)D1(I);R_(I)},[f1,S1,D1,R_]),M_=P((z)=>{if(!b_(z))return;if(z.preventDefault(),Y1.current=Math.max(0,Y1.current-1),Y1.current===0)$0(!1),q0(null),D1(null),K1()},[D1,K1]),k1=P(async(z,I=".")=>{let f=Array.from(z||[]);if(f.length===0)return;let u=I&&I!==""?I:".",r=u!=="."?u:"workspace root";n0(!0);try{let Y0=null;for(let B0 of f)try{Y0=await S8(B0,u)}catch(W0){let j0=W0?.status,T0=W0?.code;if(j0===409||T0==="file_exists"){let y1=B0?.name||"file";if(!window.confirm(`"${y1}" already exists in ${r}. Overwrite?`))continue;Y0=await S8(B0,u,{overwrite:!0})}else throw W0}if(Y0?.path)n1.current=Y0.path,O(Y0.path),Z1.current?.(Y0.path);g0.current?.(u)}catch(Y0){S(Y0.message||"Failed to upload file")}finally{n0(!1)}},[]),z4=P(async(z,I)=>{if(!z)return;let f=a0.current?.get(z);if(!f)return;let u=I&&I!==""?I:".",r=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(u===r)return;try{let B0=(await a6(z,u))?.path||z;if(f.type==="dir")V((W0)=>{let j0=new Set;for(let T0 of W0)if(T0===z)j0.add(B0);else if(T0.startsWith(`${z}/`))j0.add(`${B0}${T0.slice(z.length)}`);else j0.add(T0);return j0});if(O(B0),f.type==="dir")M(null),x(!1),h(null);else Z1.current?.(B0);g0.current?.(r),g0.current?.(u)}catch(Y0){S(Y0?.message||"Failed to move entry")}},[]);N_.current=z4;let H4=P(async(z)=>{if(!b_(z))return;z.preventDefault(),Y1.current=0,$0(!1),q0(null),D0(null),K1();let I=Array.from(z?.dataTransfer?.files||[]);if(I.length===0)return;let f=O1.current||S1(z)||f1();await k1(I,f)},[f1,S1,k1]),p4=P((z)=>{if(z?.stopPropagation?.(),A0)return;let I=z?.currentTarget?.dataset?.uploadTarget||".";L0.current=I,V0.current?.click()},[A0]),W1=P(()=>{if(A0)return;let z=Z_.current,I=z?a0.current?.get(z):null;L0.current=I?.type==="dir"?I.path:".",V0.current?.click()},[A0]),J4=P(()=>{L1(()=>d_(null))},[L1,d_]),Z5=P(()=>{L1(()=>W1())},[L1,W1]),v1=P(()=>{L1(()=>__())},[L1,__]),q_=P(()=>{L1(()=>E_())},[L1,E_]),a_=P(()=>{if(!B||!x1)return;L1(()=>A1.current?.(B,D))},[L1,B,x1,D]),c4=P(()=>{if(!B||B===".")return;L1(()=>H_(B))},[L1,B,H_]),Z4=P(()=>{if(!B||N1)return;L1(()=>F4())},[L1,B,N1,F4]),O4=P(()=>{if(!B||N1)return;L1(()=>v_())},[L1,B,N1,v_]),Y4=P(()=>{if(!T1)return;if(u1(),typeof window<"u")window.open(T1,"_blank","noopener")},[u1,T1]),I_=P(()=>{u1(),Z?.()},[u1,Z]),B_=P(()=>{u1(),Y?.()},[u1,Y]),D4=P(()=>{u1(),q?.()},[u1,q]),l4=P((z)=>{if(!z||z.button!==0)return;let I=z.currentTarget;if(!I||!I.dataset)return;let f=I.dataset.path;if(!f||f===".")return;if(_1.current===f)return;let u=O_(z);if(u?.closest?.("button, a, input, .workspace-caret"))return;if(!D_(u))return;z.preventDefault(),C0.current={path:f,dragging:!1,startX:z.clientX,startY:z.clientY};let r=(B0)=>{let W0=C0.current;if(!W0?.path)return;let j0=Math.abs(B0.clientX-W0.startX),T0=Math.abs(B0.clientY-W0.startY),y1=j0>4||T0>4;if(!W0.dragging&&y1)W0.dragging=!0,k0.current=!0,$0(!0),q0("move"),X1(W0.path),w_(B0.clientX,B0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(W0.dragging){B0.preventDefault(),w_(B0.clientX,B0.clientY);let $_=document.elementFromPoint(B0.clientX,B0.clientY),h1=V_($_)||f1();if(O1.current!==h1)D1(h1);R_(h1)}},Y0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",Y0);let B0=C0.current;if(B0?.dragging&&B0.path){let W0=O1.current||f1(),j0=N_.current;if(typeof j0==="function")j0(B0.path,W0)}C0.current={path:null,dragging:!1,startX:0,startY:0},Y1.current=0,$0(!1),q0(null),D1(null),K1(),Y_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",Y0)},[V_,f1,X1,w_,Y_,D1,R_,K1]),T_=P(async(z)=>{let I=Array.from(z?.target?.files||[]);if(I.length===0)return;let f=L0.current||".";if(await k1(I,f),L0.current=".",z?.target)z.target.value=""},[k1]);return L`
        <aside
            class=${`workspace-sidebar${n?" workspace-drop-active":""}`}
            data-workspace-scale=${v0}
            ref=${P1}
            onDragEnter=${h4}
            onDragOver=${g_}
            onDragLeave=${M_}
            onDrop=${H4}
        >
            <input type="file" multiple style="display:none" ref=${V0} onChange=${T_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${t}
                            class=${`workspace-menu-button${b0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),t0((I)=>!I)}}
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
                                <button class="workspace-menu-item" role="menuitem" onClick=${J4} disabled=${A0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Z5} disabled=${A0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${v1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${p?" active":""}`} role="menuitem" onClick=${q_}>
                                    ${p?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${B&&L`<div class="workspace-menu-separator"></div>`}
                                ${B&&!N1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${a_} disabled=${!x1}>Open in editor</button>
                                `}
                                ${J_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c4}>Rename selected</button>
                                `}
                                ${m1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${O4}>Download selected file</button>
                                `}
                                ${T1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y4}>Download selected folder (zip)</button>
                                `}
                                ${e1&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${Z4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Z&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${D4}>
                                        ${G?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${d_} title="New file" disabled=${A0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${__} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${Q4}>
                ${A0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${o&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${X&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${E1}
                        tabIndex="0"
                        onClick=${o_}
                        onDblClick=${A_}
                        onKeyDown=${b4}
                        onTouchStart=${g4}
                        onTouchEnd=${k_}
                        onTouchMove=${m4}
                        onTouchCancel=${k_}
                    >
                        ${r_.map(({node:z,depth:I})=>{let f=z.type==="dir",u=z.path===B,r=z.path===E,Y0=f&&N.has(z.path),B0=z0&&z.path===z0,W0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${u?" selected":""}${B0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+I*S5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${l4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${f?Y0?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${f?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${f?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${r?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${a}
                                                value=${A}
                                                onInput=${(j0)=>J(j0?.target?.value||"")}
                                                onKeyDown=${(j0)=>{if(j0.key==="Enter")j0.preventDefault(),t1();else if(j0.key==="Escape")j0.preventDefault(),I1()}}
                                                onBlur=${I1}
                                                onClick=${(j0)=>j0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${f&&!Y0&&W0>0&&L`
                                        <span class="workspace-count">${W0}</span>
                                    `}
                                    ${f&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${p4}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${Q5} onTouchStart=${u_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${d_} title="New file" disabled=${A0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!N1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>x1&&A1.current?.(B,D)}
                                    title=${j5}
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
                                    onClick=${F4}
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
                            ${N1?L`
                                    <button class="workspace-download" onClick=${W1}
                                        title="Upload files to this folder" disabled=${A0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${y8(B,p)}
                                        title="Download folder as zip" onClick=${(z)=>z.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${v_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${w&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&L`<div class="workspace-error">${D.error}</div>`}
                    ${N1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${S0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${S0?.error&&L`<div class="workspace-error">${S0.error}</div>`}
                        ${S0?.payload&&S0.payload.segments?.length>0&&L`
                            <${jX} payload=${S0.payload} />
                        `}
                        ${S0?.payload&&(!S0.payload.segments||S0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!N1&&L`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${d&&L`
                        <div class="workspace-download-card">
                            <${QX} mediaId=${d} />
                        </div>
                    `}
                </div>
            `}
            ${X0&&L`
                <div class="workspace-drag-ghost" ref=${$4}>${X0.label}</div>
            `}
        </aside>
    `}var ZX=new Set(["kanban-editor","mindmap-editor"]);function YX(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function Jj(_,$,j){let Q=YX(_,$,j);return Q!=null&&ZX.has(Q)}var qX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,GX=/\.(csv|tsv)$/i,KX=/\.pdf$/i,XX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Oj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Dj({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:G,onEditSource:X,previewTabs:K,paneOverrides:N,onToggleDock:V,dockVisible:B,onToggleZen:O,zenMode:E,onPopOutTab:k}){let[A,J]=m(null),D=C(null);g(()=>{if(!A)return;let H=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[A]),g(()=>{let H=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let p=_.findIndex((Z0)=>Z0.id===$);if(S.shiftKey){let Z0=_[(p-1+_.length)%_.length];j?.(Z0.id)}else{let Z0=_[(p+1)%_.length];j?.(Z0.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let p=document.querySelector(".editor-pane");if(p&&p.contains(document.activeElement)){if(S.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Q]);let M=P((H,S)=>{if(H.button===1){H.preventDefault(),Q?.(S);return}if(H.button===0)j?.(S)},[j,Q]),d=P((H,S)=>{H.preventDefault(),J({id:S,x:H.clientX,y:H.clientY})},[]),h=P((H)=>{H.preventDefault(),H.stopPropagation()},[]),o=P((H,S)=>{H.preventDefault(),H.stopPropagation(),Q?.(S)},[Q]);g(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let e=P((H)=>{if(!(N instanceof Map))return null;return N.get(H)||null},[N]),w=R0(()=>_.find((H)=>H.id===A?.id)||null,[A?.id,_]),x=R0(()=>{let H=A?.id;if(!H)return!1;return Jj(H,e(H),(S)=>l0.resolve(S))},[A?.id,e]);if(!_.length)return null;return L`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((H)=>L`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(S)=>M(S,H.id)}
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
                    ${w?.pinned?"Unpin":"Pin"}
                </button>
                ${x&&X&&L`
                    <button onClick=${()=>{X(A.id),J(null)}}>Edit Source</button>
                `}
                ${k&&L`
                    <button onClick=${()=>{let H=_.find((S)=>S.id===A.id);k(A.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${G&&/\.(md|mdx|markdown)$/i.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{G(A.id),J(null)}}>
                        ${K?.has(A.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${qX.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id),S=A.id.split("/").pop()||"document",p="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(S);window.open(p,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${GX.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${KX.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${XX.test(A.id)&&!Oj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Oj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var NX=400,F3=60,Aj=220,z3="mdPreviewHeight";function VX(){try{let _=localStorage.getItem(z3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=F3?$:Aj}catch{return Aj}}function H3({getContent:_,path:$,onClose:j}){let[Q,Z]=m(""),[Y,q]=m(VX),G=C(null),X=C(null),K=C(""),N=C(_);return N.current=_,g(()=>{let O=()=>{let k=N.current?.()||"";if(k===K.current)return;K.current=k;try{let A=L_(k,null,{sanitize:!1});Z(A)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let E=setInterval(O,NX);return()=>clearInterval(E)},[]),g(()=>{if(G.current&&Q)X4(G.current).catch(()=>{})},[Q]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let E=O.clientY,k=X.current?.offsetHeight||Y,A=X.current?.parentElement,J=A?A.offsetHeight*0.7:500,D=O.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let M=(h)=>{let o=Math.min(Math.max(k-(h.clientY-E),F3),J);q(o)},d=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(z3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",d)}}
            onTouchStart=${(O)=>{O.preventDefault();let E=O.touches[0];if(!E)return;let k=E.clientY,A=X.current?.offsetHeight||Y,J=X.current?.parentElement,D=J?J.offsetHeight*0.7:500,M=O.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let d=(o)=>{let e=o.touches[0];if(!e)return;o.preventDefault();let w=Math.min(Math.max(A-(e.clientY-k),F3),D);q(w)},h=()=>{M.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(z3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",d),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
        ></div>
        <div class="md-preview-panel" ref=${X} style=${{height:Y+"px"}}>
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
    `}function Ej({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=C(_);Y.current=_;let q=C($);q.current=$;let G=C(j);G.current=j;let X=C(Q);X.current=Q,g(()=>{let K=new R8((V,B)=>Y.current(V,B),(V)=>q.current(V),{chatJid:Z});K.connect();let N=()=>{K.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),K.disconnect()}},[Z])}function kj(){let[_,$]=m(!1),[j,Q]=m("default"),Z=C(!1);g(()=>{let X=z5("notificationsEnabled",!1);if(Z.current=X,$(X),typeof Notification<"u")Q(Notification.permission)},[]),g(()=>{Z.current=_},[_]);let Y=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let K=await Y();if(Q(K||"default"),K!=="granted"){Z.current=!1,$(!1),q1("notificationsEnabled","false");return}}let X=!Z.current;Z.current=X,$(X),q1("notificationsEnabled",String(X))},[Y]),G=P((X,K)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let N=new Notification(X,{body:K});return N.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:G}}var N8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Mj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=m(null),[Y,q]=m(!1),G=C(!1),X=C(null),K=C(!1),N=C(null),V=C(null),B=C(0);g(()=>{G.current=Y},[Y]),g(()=>{V.current=Q},[Q]),g(()=>{B.current+=1,N.current=null,K.current=!1,G.current=!1,q(!1)},[j]);let O=P(async(A=null)=>{let J=B.current;try{if(A){let D=await w6(A,50,0,j);if(J!==B.current)return;Z(D.posts),q(!1)}else{let D=await d4(10,null,j);if(J!==B.current)return;Z(D.posts),q(D.has_more)}}catch(D){if(J!==B.current)return;console.error("Failed to load posts:",D)}},[j]),E=P(async()=>{let A=B.current;try{let J=await d4(10,null,j);if(A!==B.current)return;Z((D)=>{if(!D||D.length===0)return J.posts;return N8([...J.posts,...D])}),q((D)=>D||J.has_more)}catch(J){if(A!==B.current)return;console.error("Failed to refresh timeline:",J)}},[j]),k=P(async(A={})=>{let J=B.current,D=V.current;if(!D||D.length===0)return;if(K.current)return;let{preserveScroll:M=!0,preserveMode:d="top",allowRepeat:h=!1}=A,o=(x)=>{if(!M){x();return}if(d==="top")$(x);else _(x)},w=D.slice().sort((x,H)=>x.id-H.id)[0]?.id;if(!Number.isFinite(w))return;if(!h&&N.current===w)return;K.current=!0,N.current=w;try{let x=await d4(10,w,j);if(J!==B.current)return;if(x.posts.length>0)o(()=>{Z((H)=>N8([...x.posts,...H||[]])),q(x.has_more)});else q(!1)}catch(x){if(J!==B.current)return;console.error("Failed to load more posts:",x)}finally{if(J===B.current)K.current=!1}},[j,_,$]);return g(()=>{X.current=k},[k]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:G,loadPosts:O,refreshTimeline:E,loadMore:k,loadMoreRef:X,loadingMoreRef:K,lastBeforeIdRef:N}}function Ij(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function J3(_,$){return _&&$}function Tj(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function Cj(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function Pj(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Q=new Set(j),Z=_.filter((Y)=>!Q.has(Y?.id));return Z.length===_.length?_:Z}function Sj(){let[_,$]=m(null),[j,Q]=m({text:"",totalLines:0}),[Z,Y]=m(""),[q,G]=m({text:"",totalLines:0}),[X,K]=m(null),[N,V]=m(null),[B,O]=m(null),E=C(null),k=C(0),A=C(!1),J=C(""),D=C(""),M=C(null),d=C(null),h=C(null),o=C(null),e=C(!1),w=C(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:G,pendingRequest:X,setPendingRequest:K,currentTurnId:N,setCurrentTurnId:V,steerQueuedTurnId:B,setSteerQueuedTurnId:O,lastAgentEventRef:E,lastSilenceNoticeRef:k,isAgentRunningRef:A,draftBufferRef:J,thoughtBufferRef:D,pendingRequestRef:M,stalledPostIdRef:d,currentTurnIdRef:h,steerQueuedTurnIdRef:o,thoughtExpandedRef:e,draftExpandedRef:w}}function xj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=$.current||280,E=N.currentTarget;E.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientX;let M=Math.min(Math.max(O+(D.clientX-B),160),600);V.style.setProperty("--sidebar-width",`${M}px`),$.current=M},J=()=>{let D=Math.min(Math.max(O+(k-B),160),600);$.current=D,E.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",q1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,Y=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=$.current||280,k=N.currentTarget;k.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let A=(D)=>{let M=D.touches[0];if(!M)return;D.preventDefault();let d=Math.min(Math.max(E+(M.clientX-O),160),600);V.style.setProperty("--sidebar-width",`${d}px`),$.current=d},J=()=>{k.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",q1("sidebarWidth",String(Math.round($.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=j.current||$.current||280,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientX;let M=Math.min(Math.max(O+(D.clientX-B),200),800);V.style.setProperty("--editor-width",`${M}px`),j.current=M},J=()=>{let D=Math.min(Math.max(O+(k-B),200),800);j.current=D,E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,G=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=j.current||$.current||280,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let M=D.touches[0];if(!M)return;D.preventDefault();let d=Math.min(Math.max(E+(M.clientX-O),200),800);V.style.setProperty("--editor-width",`${d}px`),j.current=d},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",q1("editorWidth",String(Math.round(j.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,X=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientY,O=Q?.current||200,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientY;let M=Math.min(Math.max(O-(D.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${M}px`),Q)Q.current=M;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let D=Math.min(Math.max(O-(k-B),100),window.innerHeight*0.5);if(Q)Q.current=D;E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,K=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientY,E=Q?.current||200,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let M=D.touches[0];if(!M)return;D.preventDefault();let d=Math.min(Math.max(E-(M.clientY-O),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${d}px`),Q)Q.current=d;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",q1("dockHeight",String(Math.round(Q?.current||E))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:K}}function BX(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,G]of _.entries()){let X=q;if(Q==="dir"){if(q===$)X=j,Z=!0;else if(q.startsWith(`${$}/`))X=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)X=j,Z=!0;Y.set(X,G)}return Z?Y:_}function yj({onTabClosed:_}={}){let $=C(_);$.current=_;let[j,Q]=m(()=>r0.getTabs()),[Z,Y]=m(()=>r0.getActiveId()),[q,G]=m(()=>r0.getTabs().length>0);g(()=>{return r0.onChange((w,x)=>{Q(w),Y(x),G(w.length>0)})},[]);let[X,K]=m(()=>new Set),[N,V]=m(()=>new Map),B=P((w)=>{K((x)=>{let H=new Set(x);if(H.has(w))H.delete(w);else H.add(w);return H})},[]),O=P((w)=>{K((x)=>{if(!x.has(w))return x;let H=new Set(x);return H.delete(w),H})},[]),E=P((w)=>{V((x)=>{if(!x.has(w))return x;let H=new Map(x);return H.delete(w),H})},[]),k=P((w,x={})=>{if(!w)return;let H=typeof x?.paneOverrideId==="string"&&x.paneOverrideId.trim()?x.paneOverrideId.trim():null,S={path:w,mode:"edit"};try{if(!(H?l0.get(H):l0.resolve(S))){if(!l0.get("editor")){console.warn(`[openEditor] No pane handler for: ${w}`);return}}}catch(Z0){console.warn(`[openEditor] paneRegistry.resolve() error for "${w}":`,Z0)}let p=typeof x?.label==="string"&&x.label.trim()?x.label.trim():void 0;if(r0.open(w,p),H)V((Z0)=>{if(Z0.get(w)===H)return Z0;let n=new Map(Z0);return n.set(w,H),n})},[]),A=P(()=>{let w=r0.getActiveId();if(w){let x=r0.get(w);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}r0.close(w),O(w),E(w),$.current?.(w)}},[E,O]),J=P((w)=>{let x=r0.get(w);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}r0.close(w),O(w),E(w),$.current?.(w)},[E,O]),D=P((w)=>{r0.activate(w)},[]),M=P((w)=>{let x=r0.getTabs().filter((p)=>p.id!==w&&!p.pinned),H=x.filter((p)=>p.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let S=x.map((p)=>p.id);r0.closeOthers(w),S.forEach((p)=>{O(p),E(p),$.current?.(p)})},[E,O]),d=P(()=>{let w=r0.getTabs().filter((S)=>!S.pinned),x=w.filter((S)=>S.dirty).length;if(x>0){if(!window.confirm(`${x} unsaved tab${x>1?"s":""} will be closed. Continue?`))return}let H=w.map((S)=>S.id);r0.closeAll(),H.forEach((S)=>{O(S),E(S),$.current?.(S)})},[E,O]),h=P((w)=>{r0.togglePin(w)},[]),o=P((w)=>{if(!w)return;V((x)=>{if(x.get(w)==="editor")return x;let H=new Map(x);return H.set(w,"editor"),H}),r0.activate(w)},[]),e=P(()=>{let w=r0.getActiveId();if(w)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:w}}))},[]);return g(()=>{let w=(x)=>{let{oldPath:H,newPath:S,type:p}=x.detail||{};if(!H||!S)return;if(p==="dir"){for(let Z0 of r0.getTabs())if(Z0.path===H||Z0.path.startsWith(`${H}/`)){let n=`${S}${Z0.path.slice(H.length)}`;r0.rename(Z0.id,n)}}else r0.rename(H,S);V((Z0)=>BX(Z0,H,S,p))};return window.addEventListener("workspace-file-renamed",w),()=>window.removeEventListener("workspace-file-renamed",w)},[]),g(()=>{let w=(x)=>{if(r0.hasUnsaved())x.preventDefault(),x.returnValue=""};return window.addEventListener("beforeunload",w),()=>window.removeEventListener("beforeunload",w)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:X,tabPaneOverrides:N,openEditor:k,closeEditor:A,handleTabClose:J,handleTabActivate:D,handleTabCloseOthers:M,handleTabCloseAll:d,handleTabTogglePin:h,handleTabTogglePreview:B,handleTabEditSource:o,revealInExplorer:e}}function O3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var D3=O3("warning",30000),Rj=O3("finalize",120000),A3=O3("refresh",30000),wj=30000;function fj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function uj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function vj(_=30000){let[,$]=m(0);g(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function bj(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}function WX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function X6(_,$){return{text:_,totalLines:WX(_,$)}}function E3(_,$){return{text:$?.text||"",totalLines:bj(_),fullText:_}}function gj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function mj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function hj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function e4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function C5(_,$){return Boolean(_)&&!Boolean($)}function pj(_,$){return _||$||null}function k3(_){return _?.turn_id||_?.turnId||null}function V8(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function M3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function cj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function I3(_){return String(_||"").trim()||"web:default"}function lj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function nj(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function dj(_={}){return V4(_)&&_6(_)}function UX(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function LX(_={},$={}){if(!dj(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=UX({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function ij(_={}){if(!dj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,LX({window:$,document:j})},G=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},X=()=>{G();for(let V of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),G()},V);if(B!=null)Z.add(B)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;X()},N=$.visualViewport;return X(),$.addEventListener("focus",X),$.addEventListener("pageshow",X),$.addEventListener("resize",X),$.addEventListener("orientationchange",X),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",X,!0),N?.addEventListener?.("resize",X),N?.addEventListener?.("scroll",X),()=>{Y(),$.removeEventListener("focus",X),$.removeEventListener("pageshow",X),$.removeEventListener("resize",X),$.removeEventListener("orientationchange",X),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",X,!0),N?.removeEventListener?.("resize",X),N?.removeEventListener?.("scroll",X)}}function FX(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function j_(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:FX($,j)}function zX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function rj(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:zX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function oj(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}function sj(_,$,j){let Q=$?.turn_id,Z=$?.chat_jid,Y=typeof Z==="string"&&Z.trim()?Z.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Q,eventChatJid:Y,isGlobalUiEvent:q,isCurrentChatEvent:Y?Y===j:q}}function aj(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}var HX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function tj(_){return HX.has(String(_||"").trim())}function JX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function T3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(JX(_),{detail:Q})),!0}var OX=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function ej(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(V4({window:j,navigator:Q}))};Z();let q=OX.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Z),()=>G.removeEventListener("change",Z);if(typeof G.addListener==="function")return G.addListener(Z),()=>G.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let G of q)G();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function _Q(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function $Q(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(X)=>{let K=X?.detail?.path,N=typeof X?.detail?.label==="string"&&X.detail.label.trim()?X.detail.label.trim():void 0;if(K)Q?.(K,N)},q=(X)=>{let K=X?.detail?.path,N=typeof X?.detail?.label==="string"&&X.detail.label.trim()?X.detail.label.trim():void 0;if(K)Z?.(K,N)},G=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return G.forEach((X)=>j.addEventListener(X,Y)),j.addEventListener("pane:popout",q),()=>{G.forEach((X)=>j.removeEventListener(X,Y)),j.removeEventListener("pane:popout",q)}}function jQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function QQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(G)=>{if(G?.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault?.(),Q?.();return}if(G?.key==="Escape"&&Y())G.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function ZQ(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function YQ(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function qQ(_,$,j){return _||$?.label||j||"Pane"}function GQ(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function KQ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function XQ(_,$,j,Q){return _===$&&!j||Q}function NQ(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}var DX="piclaw_btw_session",BQ=900,VQ="__piclawRenameBranchFormLock__";function AX(){try{return import.meta.url}catch{return null}}function C3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function N6(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function WQ(_={}){let $=_.importMetaUrl===void 0?AX():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((X)=>String(X?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let G=new URL(Y,Q).searchParams.get("v");return G&&G.trim()?G.trim():null}catch{return null}}function P3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[VQ];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[VQ]=Q,Q}function UQ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function LQ(_={}){let $=typeof _.readItem==="function"?_.readItem:U_,j=_.storageKey||DX,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",G=typeof Z.thinking==="string"?Z.thinking:"",X=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,K=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:G,error:K==="error"?X||"BTW stream interrupted. You can retry.":X,model:null,status:K}}catch{return null}}function FQ(_,$={}){let j=$.defaultChatJid||"web:default",Q=N6(_,"chat_jid",j),Z=C3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=C3(_?.get?.("pane_popout")),q=N6(_,"pane_path"),G=N6(_,"pane_label"),X=C3(_?.get?.("branch_loader")),K=N6(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:G,branchLoaderMode:X,branchLoaderSourceChatJid:K}}function zQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:G,now:X=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let K=Y?.()||null;if(!K)return!1;if(Q||X<Number(Z||0)||K.inFlight||X<Number(K.cooldownUntil||0))return!1;return q?.(j.agent_name||""),G?.(!0),!0}function HQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function JQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:G,setIsRenamingBranch:X,renameChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:V,showIntentToast:B,closeRenameForm:O,now:E=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let k=E(),A=G?.()||null;if(!A)return!1;if(Y.current||k<Number(q.current||0)||A.inFlight||k<Number(A.cooldownUntil||0))return!1;Y.current=!0,A.inFlight=!0,X?.(!0);try{let J=j.agent_name||"",D=v8(Q,J);if(!D.canSubmit)return B?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let M=D.normalized||J,d=await K(j.chat_jid,{agentName:M});await Promise.allSettled([N?.(),V?.()]);let h=d?.branch?.agent_name||M||J;return B?.("Branch renamed",`@${h}`,"info",3500),O?.(),!0}catch(J){let D=J instanceof Error?J.message:String(J||"Could not rename branch."),M=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return B?.("Could not rename branch",M||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,X?.(!1);let J=E()+BQ;q.current=J;let D=G?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=J}}async function OQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:K,showIntentToast:N,baseHref:V,chatOnlyMode:B,navigate:O,confirm:E=(o)=>window.confirm(o)}=_;if(!$)return!1;let k=typeof j==="string"&&j.trim()?j.trim():"",A=typeof Q==="string"&&Q.trim()?Q.trim():"",J=k||Z?.chat_jid||A;if(!J)return N?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Z?.chat_jid===J?Z:null)||Y.find((o)=>o?.chat_jid===J)||q.find((o)=>o?.chat_jid===J)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return N?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let d=`@${D?.agent_name||J}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!E(`Prune ${d}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await G(J),await Promise.allSettled([X?.(),K?.()]);let o=D?.root_chat_jid||"web:default";N?.("Branch pruned",`${d} has been archived.`,"info",3000);let e=B4(V,o,{chatOnly:B});return O?.(e),!0}catch(o){let e=o instanceof Error?o.message:String(o||"Could not prune branch.");return N?.("Could not prune branch",e||"Could not prune branch.","warning",5000),!1}}async function DQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:G,chatOnlyMode:X,navigate:K}=_,N=typeof $==="string"?$.trim():"";if(!N||typeof j!=="function")return!1;try{let V=Q.find((J)=>J?.chat_jid===N)||null,B=await j(N);await Promise.allSettled([Z?.(),Y?.()]);let O=B?.branch,E=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():N,k=v2(V?.agent_name,O?.agent_name,E);q?.("Branch restored",k,"info",4200);let A=B4(G,E,{chatOnly:X});return K?.(A),!0}catch(V){let B=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function AQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let G=await j($);if(q())return!1;let X=G?.branch,K=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");let N=B4(Y,K,{chatOnly:!0});return Z?.(N,{replace:!0}),!0}catch(G){if(q())return!1;return Q?.({status:"error",message:$8(G)}),!1}}async function EQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:G,baseHref:X}=_;try{let N=(await Q($))?.branch,V=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let B=N?.agent_name?`@${N.agent_name}`:V;q?.("New branch created",`Switched to ${B}.`,"info",2500);let O=B4(X,V,{chatOnly:j});return G?.(O),!0}catch(K){return q?.("Could not create branch",$8(K),"warning",5000),!1}}async function kQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:G,currentChatJid:X,baseHref:K}=_;if(!$||j)return!1;let N=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!N)return!1;let V=a7(N);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=T$(V);if(!B)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;C$(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(N),E=s7(K,N,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:X,params:O});return P$(B,E),G?.(N),!0}catch(O){S$(B);let E=O instanceof Error?O.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",E,"warning",5000),!1}}async function MQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:G,setActiveChatAgents:X,setCurrentChatBranches:K,showIntentToast:N,baseHref:V}=_;if(!$||j)return!1;let B=r7(Q);if(!B)return N?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let E=o7(V,Q,{chatOnly:!0});if(!window.open(E,B.target))return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=T$(B);if(!O)return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;C$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await Y(Q))?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();X?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await G?.(Z);K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let J=B4(V,A,{chatOnly:!0});return P$(O,J),!0}catch(E){return S$(O),N?.("Could not open branch window",$8(E),"error",5000),!1}}function V6(_){return _?{..._}:{text:"",totalLines:0}}function IQ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function EX(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function kX(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function TQ(_){return{agentStatus:_.agentStatus,agentDraft:V6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:V6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:IQ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:EX(_.silentRecovery)}}function CQ(_){let $=_.snapshot||kX(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(V6($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(V6($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(IQ($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function B8(_){return typeof _==="string"}function PQ(_){return typeof _==="string"&&_.trim().length>0}function S3(_){if(!Array.isArray(_))return[];return _.filter(($)=>PQ($?.chat_jid)&&PQ($?.agent_name))}function SQ(_){if(!Array.isArray(_))return[];return _.filter(($)=>B8($?.chat_jid)&&B8($?.agent_name))}function xQ(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if(B8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!B8(q?.chat_jid))return q;let G=Q.get(q.chat_jid);return G?{...q,...G,is_active:G.is_active??q.is_active}:q}),Y=B8(j)?j:"";return Z.sort((q,G)=>{if(q.chat_jid===Y&&G.chat_jid!==Y)return-1;if(G.chat_jid===Y&&q.chat_jid!==Y)return 1;let X=Boolean(q.archived_at),K=Boolean(G.archived_at);if(X!==K)return X?1:-1;if(Boolean(q.is_active)!==Boolean(G.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(G.chat_jid))}),Z}function x3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function yQ(_,$){let j=new Map(_),Q=x3($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function RQ(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=x3($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function wQ(_){if(_?.options?.remove)return!0;return x3(_)?.state!=="running"}function y3(_,$){return`${_}:${$}`}function fQ(_,$,j){let Q=y3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function uQ(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function R3(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function vQ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function MX(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function bQ(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!MX(Z));return Q.length===_.length?_:Q}function gQ(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function mQ(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function w4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function hQ(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function pQ(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function IX(_,$){let j=F_(_);return Boolean(_&&j===$)}function P5(_,$,j){if(!IX(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function cQ(_,$){return{..._,openedAt:$}}function lQ(_){let $=F_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function nQ(_,$,j){let Q=L7({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=F_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=F_(_),q=Boolean(Z&&Y&&Z===Y),G={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:G,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function dQ(_,$){if(!_||_?.source!=="live")return _||null;let j=F_($),Q=F_(_);if(j&&Q&&j!==Q)return _;return null}function iQ(_,$,j){return P5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function w3(_,$,j){if(j.errorMessage)return P5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return P5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function rQ(_,$,j){return P5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function oQ(_,$,j){return P5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function sQ(_,$,j){return P5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}var aQ=WQ(),tQ=f6,eQ=v6,TX=g6,_Z=l6,$Z=n6,f3=m6,u3=j_(s1,"getAgentContext",null),CX=j_(s1,"getAutoresearchStatus",null),PX=j_(s1,"stopAutoresearch",{status:"ok"}),SX=j_(s1,"dismissAutoresearch",{status:"ok"}),jZ=j_(s1,"getAgentModels",{current:null,models:[]}),QZ=j_(s1,"getActiveChatAgents",{chats:[]}),B6=j_(s1,"getChatBranches",{chats:[]}),xX=j_(s1,"renameChatBranch",null),yX=j_(s1,"pruneChatBranch",null),RX=j_(s1,"restoreChatBranch",null),ZZ=j_(s1,"getAgentQueueState",{count:0}),wX=j_(s1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),fX=j_(s1,"removeAgentQueueItem",{removed:!1}),uX=j_(s1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});l0.register(D$);l0.register(o$);l0.register(r$);l0.register(s$);l0.register(a$);l0.register(t$);l0.register(_3);l0.register($3);l0.register(Q3);l0.register(q3);l0.register(G3);l0.register(d$);A$();l0.register(M$);l0.register(I$);function vX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:G,branchLoaderSourceChatJid:X}=R0(()=>FQ(_),[_]),[K,N]=m("disconnected"),[V,B]=m(()=>V4()),[O,E]=m(null),[k,A]=m(null),[J,D]=m(!1),[M,d]=m("current"),[h,o]=m([]),[e,w]=m([]),[x,H]=m(null),{agentStatus:S,setAgentStatus:p,agentDraft:Z0,setAgentDraft:n,agentPlan:$0,setAgentPlan:_0,agentThought:q0,setAgentThought:X0,pendingRequest:N0,setPendingRequest:z0,currentTurnId:D0,setCurrentTurnId:A0,steerQueuedTurnId:n0,setSteerQueuedTurnId:S0,lastAgentEventRef:M0,lastSilenceNoticeRef:d0,isAgentRunningRef:i0,draftBufferRef:v0,thoughtBufferRef:o0,pendingRequestRef:b0,stalledPostIdRef:t0,currentTurnIdRef:H0,steerQueuedTurnIdRef:m0,thoughtExpandedRef:e0,draftExpandedRef:Q1}=Sj(),[Q_,J1]=m({}),[a0,b1]=m(null),[A1,Z1]=m(null),[g0,P1]=m(!1),[E1,a]=m(null),[V0,L0]=m([]),[G0,x0]=m([]),[C0,w0]=m(null),[k0,y0]=m(()=>new Map),[c0,O0]=m(()=>new Set),[u0,J0]=m([]),[Q0,y]=m(!1),[t,U0]=m(()=>LQ()),[E0,f0]=m(null),Y1=C(new Set),O1=R0(()=>V0.find((W)=>W?.chat_jid===j)||null,[V0,j]),G1=R0(()=>G0.find((W)=>W?.chat_jid===j)||O1||null,[O1,G0,j]),g1=G1?.root_chat_jid||O1?.root_chat_jid||j,$4=UQ(M),[X_,a1]=m(()=>({status:G?"running":"idle",message:G?"Preparing a new chat branch…":""})),N_=u0.length,Z_=C(new Set),_1=C([]),n1=C(new Set),j4=C(0),y_=C({inFlight:!1,lastAttemptAt:0,turnId:null});Z_.current=new Set(u0.map((W)=>W.row_id)),_1.current=u0;let{notificationsEnabled:_5,notificationPermission:f4,toggleNotifications:f1,notify:V_}=kj(),[S1,D1]=m(()=>new Set),[K1,R_]=m(()=>z5("workspaceOpen",!0)),w_=C(null),{editorOpen:X1,tabStripTabs:Y_,tabStripActiveId:h0,previewTabs:I1,tabPaneOverrides:H_,openEditor:t1,closeEditor:u4,handleTabClose:d_,handleTabActivate:v4,handleTabCloseOthers:i_,handleTabCloseAll:$5,handleTabTogglePin:r_,handleTabTogglePreview:f_,handleTabEditSource:S5,revealInExplorer:x5}=yj({onTabClosed:(W)=>w_.current?.(W)}),N1=C(null),x1=C(null),j5=C(null),J_=C(null),e1=l0.getDockPanes().length>0,[m1,T1]=m(!1),u1=P(()=>T1((W)=>!W),[]),L1=P(()=>{t1(a4,{label:"Terminal"})},[t1]),O_=P(()=>{t1(L4,{label:"VNC"})},[t1]),D_=R0(()=>ZQ(Y_,h0),[h0,Y_]),A_=R0(()=>YQ(H_,h0),[H_,h0]),o_=R0(()=>qQ(q,D_,Y),[D_,q,Y]),__=R0(()=>GQ(Y_,I1,h0),[I1,h0,Y_]),d1=R0(()=>KQ(Y,L4),[Y]),E_=R0(()=>XQ(Y,a4,__,d1),[d1,__,Y]),Q4=NQ(Z,Q,X1,e1,m1),[F1,s_]=m(!1),b4=C(!1),g4=P(()=>{if(!X1||Q)return;if(b4.current=m1,m1)T1(!1);s_(!0)},[X1,Q,m1]),k_=P(()=>{if(!F1)return;if(s_(!1),b4.current)T1(!0),b4.current=!1},[F1]),m4=P(()=>{if(F1)k_();else g4()},[F1,g4,k_]);g(()=>{if(F1&&!X1)k_()},[F1,X1,k_]),g(()=>{if(!Z||!Y)return;if(r0.getActiveId()===Y)return;t1(Y,q?{label:q}:void 0)},[t1,q,Z,Y]),g(()=>{let W=N1.current;if(!W)return;if(x1.current)x1.current.dispose(),x1.current=null;let U=h0;if(!U)return;let T={path:U,mode:"edit"},R=(A_?l0.get(A_):null)||l0.resolve(T)||l0.get("editor");if(!R){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let b=R.mount(W,T);x1.current=b,b.onDirtyChange?.((K0)=>{r0.setDirty(U,K0)}),b.onSaveRequest?.(()=>{}),b.onClose?.(()=>{u4()});let s=r0.getViewState(U);if(s&&typeof b.restoreViewState==="function")requestAnimationFrame(()=>b.restoreViewState(s));if(typeof b.onViewStateChange==="function")b.onViewStateChange((K0)=>{r0.saveViewState(U,K0)});return requestAnimationFrame(()=>b.focus()),()=>{if(x1.current===b)b.dispose(),x1.current=null}},[h0,A_,u4]);let Q5=P(async(W)=>{let U=typeof h0==="string"?h0.trim():"",T=x1.current;if(!U||!T?.setContent)return;if(typeof T.isDirty==="function"&&T.isDirty())return;if(!(Array.isArray(W)&&W.length>0?W.some((b)=>{let s=Array.isArray(b?.changed_paths)?b.changed_paths.map((c)=>typeof c==="string"?c.trim():"").filter(Boolean):[];if(s.length>0)return s.some((c)=>c==="."||c===U);let K0=typeof b?.path==="string"?b.path.trim():"";return!K0||K0==="."||K0===U}):!0))return;try{let b=await d5(U,1e6,"edit"),s=typeof b?.text==="string"?b.text:"",K0=typeof b?.mtime==="string"&&b.mtime.trim()?b.mtime.trim():new Date().toISOString();T.setContent(s,K0)}catch(b){console.warn("[workspace_update] Failed to refresh active pane:",b)}},[h0]);g(()=>{let W=j5.current;if(J_.current)J_.current.dispose(),J_.current=null;if(!W||!e1||!m1)return;let U=l0.getDockPanes()[0];if(!U){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let T=U.mount(W,{mode:"view"});return J_.current=T,requestAnimationFrame(()=>T.focus?.()),()=>{if(J_.current===T)T.dispose(),J_.current=null}},[e1,m1]);let[u_,v_]=m({name:"You",avatar_url:null,avatar_background:null}),F4=C(null),b_=C(!1),h4=C(!1),g_=C(!1),M_=C(null),k1=C(j),z4=C(new Map),H4=C(j),p4=C(0),W1=C(0),J4=C({}),Z5=C({name:null,avatar_url:null}),v1=C({currentHashtag:null,searchQuery:null,searchOpen:!1}),q_=C(null),a_=C(null),c4=C(0),Z4=C(0),O4=C(0),Y4=C(null),I_=C(null),B_=C(null),D4=C(null),l4=C(0),T_=C({title:null,avatarBase:null}),z=C(null),I=C(!1),[f,u]=m(!1),r=C(0),[Y0,B0]=m(!1),[W0,j0]=m(""),T0=R0(()=>v8(W0,G1?.agent_name||""),[G1?.agent_name,W0]),y1=C(null),$_=P(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);vj(30000),g(()=>{if(!Y0)return;requestAnimationFrame(()=>{if(Y0)y1.current?.focus(),y1.current?.select?.()})},[Y0]),g(()=>{return a2()},[]),g(()=>{return ej(B)},[]),g(()=>{q1("workspaceOpen",String(K1))},[K1]),g(()=>{return ij()},[]),g(()=>{return()=>{$_()}},[$_]),g(()=>{if(!t){q1(BTW_SESSION_KEY,"");return}q1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),g(()=>{J4.current=Q_||{}},[Q_]),g(()=>{k1.current=j},[j]),g(()=>{Z5.current=u_||{name:"You",avatar_url:null,avatar_background:null}},[u_]);let h1=P((W,U,T=null)=>{if(typeof document>"u")return;let R=(W||"").trim()||"PiClaw";if(T_.current.title!==R){document.title=R;let F0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(F0&&F0.getAttribute("content")!==R)F0.setAttribute("content",R);T_.current.title=R}let b=document.getElementById("dynamic-favicon");if(!b)return;let s=b.getAttribute("data-default")||b.getAttribute("href")||"/favicon.ico",K0=U||s,c=U?`${K0}|${T||""}`:K0;if(T_.current.avatarBase!==c){let F0=U?`${K0}${K0.includes("?")?"&":"?"}v=${T||Date.now()}`:K0;b.setAttribute("href",F0),T_.current.avatarBase=c}},[]),y5=P((W)=>{if(!W)return;o((U)=>U.includes(W)?U:[...U,W])},[]),F=P((W)=>{o((U)=>U.filter((T)=>T!==W))},[]);w_.current=F;let v=P(()=>{o([])},[]),i=P((W)=>{if(!Array.isArray(W)){o([]);return}let U=[],T=new Set;for(let R of W){if(typeof R!=="string"||!R.trim())continue;let b=R.trim();if(T.has(b))continue;T.add(b),U.push(b)}o(U)},[]),l=P((W,U=null,T="info",R=3000)=>{$_(),H({title:W,detail:U||null,kind:T||"info"}),z.current=setTimeout(()=>{H((b)=>b?.title===W?null:b)},R)},[$_]),I0=P((W)=>{let U=cj(W,{editorOpen:X1,resolvePane:(T)=>l0.resolve(T)});if(U.kind==="open"){t1(U.path);return}if(U.kind==="toast")l(U.title,U.detail,U.level)},[X1,t1,l]),z1=P(()=>{let W=h0;if(W)y5(W)},[h0,y5]),C1=P((W)=>{if(!W)return;w((U)=>U.includes(W)?U:[...U,W])},[]),R1=P(async(W,U=null)=>{let T=(b)=>{b.scrollIntoView({behavior:"smooth",block:"center"}),b.classList.add("post-highlight"),setTimeout(()=>b.classList.remove("post-highlight"),2000)},R=document.getElementById("post-"+W);if(R){T(R);return}try{let b=typeof U==="string"&&U.trim()?U.trim():j,K0=(await u6(W,b))?.thread?.[0];if(!K0)return;c1((c)=>{if(!c)return[K0];if(c.some((F0)=>F0.id===K0.id))return c;return[...c,K0]}),requestAnimationFrame(()=>{setTimeout(()=>{let c=document.getElementById("post-"+W);if(c)T(c)},50)})}catch(b){console.error("[scrollToMessage] Failed to fetch message",W,b)}},[j]),q4=P((W)=>{w((U)=>U.filter((T)=>T!==W))},[]),n4=P(()=>{w([])},[]),Y5=P((W)=>{if(!Array.isArray(W)){w([]);return}let U=[],T=new Set;for(let R of W){if(typeof R!=="string"||!R.trim())continue;let b=R.trim();if(T.has(b))continue;T.add(b),U.push(b)}w(U)},[]),q5=P((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";l("Compose failed",U,"error",5000)},[l]),G_=P((W={})=>{let U=Date.now();if(M0.current=U,W.running)i0.current=!0,y((T)=>T?T:!0);if(W.clearSilence)d0.current=0},[y]),p1=P(()=>{if(D4.current)clearTimeout(D4.current),D4.current=null;l4.current=0},[]);g(()=>()=>{p1()},[p1]);let G5=P(()=>{p1(),p((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:U,lastActivity:T,...R}=W;return R})},[p1]),A4=P((W)=>{if(!W)return;p1();let U=Date.now();l4.current=U,p({type:W.type||"active",last_activity:!0}),D4.current=setTimeout(()=>{if(l4.current!==U)return;p((T)=>{if(!T||!(T.last_activity||T.lastActivity))return T;return null})},wj)},[p1]),U1=P(()=>{i0.current=!1,y(!1),M0.current=null,d0.current=0,v0.current="",o0.current="",b0.current=null,I_.current=null,H0.current=null,m0.current=null,M_.current=null,y_.current={inFlight:!1,lastAttemptAt:0,turnId:null},p1(),A0(null),S0(null),e0.current=!1,Q1.current=!1},[p1,A0,S0,y]),t_=P((W)=>{if(!lj({remainingQueueCount:W,currentTurnId:H0.current,isAgentTurnActive:Q0}))return;m0.current=null,S0(null)},[Q0,S0]),K5=P(()=>TQ({agentStatus:S,agentDraft:Z0,agentPlan:$0,agentThought:q0,pendingRequest:N0,currentTurnId:D0,steerQueuedTurnId:n0,isAgentTurnActive:Q0,followupQueueItems:u0,activeModel:a0,activeThinkingLevel:A1,supportsThinking:g0,activeModelUsage:E1,contextUsage:C0,isAgentRunning:i0.current,wasAgentActive:g_.current,draftBuffer:v0.current,thoughtBuffer:o0.current,lastAgentEvent:M0.current,lastSilenceNotice:d0.current,lastAgentResponse:I_.current,currentTurnIdRef:H0.current,steerQueuedTurnIdRef:m0.current,thoughtExpanded:e0.current,draftExpanded:Q1.current,agentStatusRef:M_.current,silentRecovery:y_.current}),[a0,E1,A1,Z0,$0,S,q0,C0,D0,u0,Q0,N0,n0,g0]),W8=P((W)=>{CQ({snapshot:W,clearLastActivityTimer:p1,refs:{isAgentRunningRef:i0,wasAgentActiveRef:g_,lastAgentEventRef:M0,lastSilenceNoticeRef:d0,draftBufferRef:v0,thoughtBufferRef:o0,pendingRequestRef:b0,lastAgentResponseRef:I_,currentTurnIdRef:H0,steerQueuedTurnIdRef:m0,agentStatusRef:M_,silentRecoveryRef:y_,thoughtExpandedRef:e0,draftExpandedRef:Q1},setters:{setIsAgentTurnActive:y,setAgentStatus:p,setAgentDraft:n,setAgentPlan:_0,setAgentThought:X0,setPendingRequest:z0,setCurrentTurnId:A0,setSteerQueuedTurnId:S0,setFollowupQueueItems:J0,setActiveModel:b1,setActiveThinkingLevel:Z1,setSupportsThinking:P1,setActiveModelUsage:a,setContextUsage:w0}})},[p1,A0,J0,y,S0]),C_=P((W)=>{if(!W)return;if(H0.current===W)return;H0.current=W,y_.current={inFlight:!1,lastAttemptAt:0,turnId:W},A0(W),m0.current=null,S0(null),v0.current="",o0.current="",n({text:"",totalLines:0}),_0(""),X0({text:"",totalLines:0}),z0(null),b0.current=null,I_.current=null,e0.current=!1,Q1.current=!1},[A0,S0]),E4=P((W)=>{if(typeof document<"u"){let F0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&F0)return}let U=I_.current;if(!U||!U.post)return;if(W&&U.turnId&&U.turnId!==W)return;let T=U.post;if(T.id&&Y4.current===T.id)return;let R=String(T?.data?.content||"").trim();if(!R)return;Y4.current=T.id||Y4.current,I_.current=null;let b=R.replace(/\s+/g," ").slice(0,200),s=J4.current||{},c=(T?.data?.agent_id?s[T.data.agent_id]:null)?.name||"Pi";V_(c,b)},[V_]),W_=P(async(W,U)=>{if(W!=="thought"&&W!=="draft")return;let T=H0.current;if(W==="thought"){if(e0.current=U,T)try{await $Z(T,"thought",U)}catch(R){console.warn("Failed to update thought visibility:",R)}if(!U)return;try{let R=T?await _Z(T,"thought"):null;if(R?.text)o0.current=R.text;X0((b)=>({...b||{text:"",totalLines:0},fullText:o0.current||b?.fullText||"",totalLines:Number.isFinite(R?.total_lines)?R.total_lines:b?.totalLines||0}))}catch(R){console.warn("Failed to fetch full thought:",R)}return}if(Q1.current=U,T)try{await $Z(T,"draft",U)}catch(R){console.warn("Failed to update draft visibility:",R)}if(!U)return;try{let R=T?await _Z(T,"draft"):null;if(R?.text)v0.current=R.text;n((b)=>({...b||{text:"",totalLines:0},fullText:v0.current||b?.fullText||"",totalLines:Number.isFinite(R?.total_lines)?R.total_lines:b?.totalLines||0}))}catch(R){console.warn("Failed to fetch full draft:",R)}},[]),k4=C(null),X5=P(()=>{let W=q_.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);k4.current=X5;let W6=P((W)=>{let U=q_.current;if(!U||typeof W!=="function"){W?.();return}let{currentHashtag:T,searchQuery:R,searchOpen:b}=v1.current||{},s=!((R||b)&&!T),K0=s?U.scrollHeight-U.scrollTop:U.scrollTop;W(),requestAnimationFrame(()=>{let c=q_.current;if(!c)return;if(s){let F0=Math.max(c.scrollHeight-K0,0);c.scrollTop=F0}else{let F0=Math.max(c.scrollHeight-c.clientHeight,0),j1=Math.min(K0,F0);c.scrollTop=j1}})},[]),R5=P((W)=>{let U=q_.current;if(!U||typeof W!=="function"){W?.();return}let T=U.scrollTop;W(),requestAnimationFrame(()=>{let R=q_.current;if(!R)return;let b=Math.max(R.scrollHeight-R.clientHeight,0);R.scrollTop=Math.min(T,b)})},[]),v3=P((W)=>bQ(W,Z_.current),[]),{posts:w5,setPosts:c1,hasMore:YZ,setHasMore:U8,hasMoreRef:b3,loadPosts:m_,refreshTimeline:i1,loadMore:qZ,loadMoreRef:U6}=Mj({preserveTimelineScroll:W6,preserveTimelineScrollTop:R5,chatJid:j}),N5=R0(()=>v3(w5),[w5,u0,v3]),L8=P(()=>{let W=t0.current;if(!W)return;c1((U)=>U?U.filter((T)=>T.id!==W):U),t0.current=null},[c1]),{handleSplitterMouseDown:GZ,handleSplitterTouchStart:KZ,handleEditorSplitterMouseDown:XZ,handleEditorSplitterTouchStart:NZ,handleDockSplitterMouseDown:VZ,handleDockSplitterTouchStart:BZ}=xj({appShellRef:a_,sidebarWidthRef:c4,editorWidthRef:Z4,dockHeightRef:O4}),g3=P(()=>{if(!i0.current)return;i0.current=!1,d0.current=0,M0.current=null,H0.current=null,A0(null),e0.current=!1,Q1.current=!1;let W=(v0.current||"").trim();if(v0.current="",o0.current="",n({text:"",totalLines:0}),_0(""),X0({text:"",totalLines:0}),z0(null),b0.current=null,I_.current=null,!W){p({type:"error",title:"Response stalled - No content received"});return}let T=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,R=Date.now(),b=new Date().toISOString(),s={id:R,timestamp:b,data:{type:"agent_response",content:T,agent_id:"default",is_local_stall:!0}};t0.current=R,c1((K0)=>K0?N8([...K0,s]):[s]),k4.current?.(),p(null)},[A0]);g(()=>{v1.current={currentHashtag:O,searchQuery:k,searchOpen:J}},[O,k,J]);let $1=P(()=>{let W=++j4.current,U=j;ZZ(U).then((T)=>{if(W!==j4.current)return;if(k1.current!==U)return;let R=n1.current,b=gQ(T?.items,R);if(b.length){J0((s)=>{if(mQ(s,b))return s;return b});return}R.clear(),t_(0),J0((s)=>s.length===0?s:[])}).catch(()=>{if(W!==j4.current)return;if(k1.current!==U)return;J0((T)=>T.length===0?T:[])})},[t_,j,J0]),r1=P(async()=>{let W=j;try{let U=await u3(W);if(k1.current!==W)return;if(U)w0(U)}catch(U){if(k1.current!==W)return;console.warn("Failed to fetch agent context:",U)}},[j]),h_=P(async()=>{let W=j;try{let U=await CX(W);if(k1.current!==W)return;y0((T)=>yQ(T,U)),O0((T)=>R3(T,"autoresearch"))}catch(U){if(k1.current!==W)return;console.warn("Failed to fetch autoresearch status:",U)}},[j]),P_=P(async()=>{let W=j;try{let U=await f3(W);if(k1.current!==W)return null;if(!U||U.status!=="active"||!U.data){if(g_.current){let{currentHashtag:K0,searchQuery:c,searchOpen:F0}=v1.current||{};if(!K0&&!c&&!F0)i1()}return g_.current=!1,U1(),M_.current=null,p(null),n({text:"",totalLines:0}),_0(""),X0({text:"",totalLines:0}),z0(null),b0.current=null,U??null}g_.current=!0;let T=U.data;M_.current=T;let R=k3(T);if(R)C_(R);G_({running:!0,clearSilence:!0}),G5(),p(T);let b=V8(U.thought);if(b)X0((K0)=>{if(M3(K0,b.text))return K0;return o0.current=b.text,b});let s=V8(U.draft);if(s)n((K0)=>{if(M3(K0,s.text))return K0;return v0.current=s.text,s});return U}catch(U){return console.warn("Failed to fetch agent status:",U),null}},[U1,G5,G_,i1,C_]),L6=P(async()=>{if(!i0.current)return null;if(b0.current)return null;let W=H0.current||null,U=y_.current,T=Date.now();if(U.inFlight)return null;if(U.turnId===W&&T-U.lastAttemptAt<A3)return null;U.inFlight=!0,U.lastAttemptAt=T,U.turnId=W;try{let{currentHashtag:R,searchQuery:b,searchOpen:s}=v1.current||{};if(!R&&!b&&!s)await i1();return await $1(),await P_()}finally{U.inFlight=!1}},[P_,$1,i1]);g(()=>{let W=Math.min(1000,Math.max(100,Math.floor(D3/2))),U=setInterval(()=>{if(!i0.current)return;if(b0.current)return;let T=M0.current;if(!T)return;let R=Date.now(),b=R-T,s=K4(M_.current);if(b>=Rj){if(!s)p({type:"waiting",title:"Re-syncing after a quiet period…"});L6();return}if(b>=D3){if(R-d0.current>=A3){if(!s){let K0=Math.floor(b/1000);p({type:"waiting",title:`Waiting for model… No events for ${K0}s`})}d0.current=R,L6()}}},W);return()=>clearInterval(U)},[L6]);let m3=P((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():null;if(!U||!aQ||U===aQ)return!1;if(F4.current===U)return!0;F4.current=U;let T=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!r0.hasUnsaved()&&!T&&!i0.current&&!b0.current&&!b_.current)return b_.current=!0,l("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{b_.current=!1}},350),!0;return l("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[i0,b0,l]),WZ=P((W)=>{if(N(W),W!=="connected"){p(null),n({text:"",totalLines:0}),_0(""),X0({text:"",totalLines:0}),z0(null),b0.current=null,U1();return}if(!h4.current){h4.current=!0;let{currentHashtag:b,searchQuery:s,searchOpen:K0}=v1.current||{};if(!b&&!s&&!K0)i1();P_(),$1(),r1();return}let{currentHashtag:U,searchQuery:T,searchOpen:R}=v1.current;if(!U&&!T&&!R)i1();P_(),$1(),r1()},[U1,i1,P_,$1,r1]),UZ=P(async(W)=>{E(W),c1(null),await m_(W)},[m_]),LZ=P(async()=>{E(null),A(null),c1(null),await m_()},[m_]),FZ=P(async(W,U=M)=>{if(!W||!W.trim())return;let T=U==="root"||U==="all"?U:"current";d(T),A(W.trim()),E(null),c1(null);try{let R=await tQ(W.trim(),50,0,j,T,g1);c1(R.results),U8(!1)}catch(R){console.error("Failed to search:",R),c1([])}},[j,g1,M]),zZ=P(()=>{D(!0),A(null),E(null),d("current"),c1([])},[]),HZ=P(()=>{D(!1),A(null),m_()},[m_]),gX=P(()=>{},[]),F8=!O&&!k&&!J,JZ=P(async(W)=>{if(!W)return;let U=W.id,T=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():j,R=N5?.filter((s)=>s?.data?.thread_id===U&&s?.id!==U).length||0;if(R>0){if(!window.confirm(`Delete this message and its ${R} replies?`))return}let b=(s)=>{if(!s.length)return;D1((c)=>{let F0=new Set(c);return s.forEach((j1)=>F0.add(j1)),F0}),setTimeout(()=>{if(R5(()=>{c1((c)=>c?c.filter((F0)=>!s.includes(F0.id)):c)}),D1((c)=>{let F0=new Set(c);return s.forEach((j1)=>F0.delete(j1)),F0}),b3.current)U6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let s=await eQ(U,R>0,T);if(s?.ids?.length)b(s.ids)}catch(s){let K0=s?.message||"";if(R===0&&K0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let F0=await eQ(U,!0,T);if(F0?.ids?.length)b(F0.ids);return}console.error("Failed to delete post:",s),alert(`Failed to delete message: ${K0}`)}},[j,N5,R5]),h3=P(async()=>{try{let W=await TX();J1(fj(W));let U=W?.user||{};v_((R)=>{let b=typeof U.name==="string"&&U.name.trim()?U.name.trim():"You",s=typeof U.avatar_url==="string"?U.avatar_url.trim():null,K0=typeof U.avatar_background==="string"&&U.avatar_background.trim()?U.avatar_background.trim():null;if(R.name===b&&R.avatar_url===s&&R.avatar_background===K0)return R;return{name:b,avatar_url:s,avatar_background:K0}});let T=(W?.agents||[]).find((R)=>R.id==="default");h1(T?.name,T?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}},[h1]);g(()=>{h3();let W=H5("sidebarWidth",null),U=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(c4.current=U,a_.current)a_.current.style.setProperty("--sidebar-width",`${U}px`)},[h3]);let f5=Q0||S!==null,p3=P((W)=>{if(!W||typeof W!=="object")return;let U=W.agent_id;if(!U)return;let{agent_name:T,agent_avatar:R}=W;if(!T&&R===void 0)return;let b=J4.current?.[U]||{id:U},s=b.name||null,K0=b.avatar_url??b.avatarUrl??b.avatar??null,c=!1,F0=!1;if(T&&T!==b.name)s=T,F0=!0;if(R!==void 0){let j1=typeof R==="string"?R.trim():null,M4=typeof K0==="string"?K0.trim():null,M1=j1||null;if(M1!==(M4||null))K0=M1,c=!0}if(!F0&&!c)return;if(J1((j1)=>{let M1={...j1[U]||{id:U}};if(F0)M1.name=s;if(c)M1.avatar_url=K0;return{...j1,[U]:M1}}),U==="default")h1(s,K0,c?Date.now():null)},[h1]),c3=P((W)=>{if(!W||typeof W!=="object")return;let U=W.user_name??W.userName,T=W.user_avatar??W.userAvatar,R=W.user_avatar_background??W.userAvatarBackground;if(U===void 0&&T===void 0&&R===void 0)return;v_((b)=>{let s=typeof U==="string"&&U.trim()?U.trim():b.name||"You",K0=T===void 0?b.avatar_url:typeof T==="string"&&T.trim()?T.trim():null,c=R===void 0?b.avatar_background:typeof R==="string"&&R.trim()?R.trim():null;if(b.name===s&&b.avatar_url===K0&&b.avatar_background===c)return b;return{name:s,avatar_url:K0,avatar_background:c}})},[]),F6=P((W)=>{if(!W||typeof W!=="object")return;let U=W.model??W.current;if(U!==void 0)b1(U);if(W.thinking_level!==void 0)Z1(W.thinking_level??null);if(W.supports_thinking!==void 0)P1(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)a(W.provider_usage??null)},[]),u5=P(()=>{let W=j;jZ(W).then((U)=>{if(k1.current!==W)return;if(U)F6(U)}).catch(()=>{})},[F6,j]),l1=P(()=>{let W=j;Promise.all([QZ().catch(()=>({chats:[]})),B6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([U,T])=>{if(k1.current!==W)return;let R=S3(U?.chats),b=S3(T?.chats);L0(xQ(R,b,W))}).catch(()=>{if(k1.current!==W)return;L0([])})},[j]),o1=P(()=>{B6(g1).then((W)=>{x0(SQ(W?.chats))}).catch(()=>{})},[g1]),l3=P((W)=>{let U=W?.row_id;if(U==null)return;n1.current.add(U),J0((T)=>w4(T,U).items),wX(U,I3(j)).then(()=>{$1()}).catch((T)=>{console.warn("[queue] Failed to steer queued item:",T),l("Failed to steer message","The queued message could not be sent as steering.","warning"),n1.current.delete(U),$1()})},[j,$1,J0,l]),n3=P((W)=>{let U=W?.row_id;if(U==null)return;let T=w4(_1.current,U);n1.current.add(U),t_(T.remainingQueueCount),J0((R)=>w4(R,U).items),fX(U,I3(j)).then(()=>{$1()}).catch((R)=>{console.warn("[queue] Failed to remove queued item:",R),l("Failed to remove message","The queued message could not be removed.","warning"),n1.current.delete(U),$1()})},[t_,j,$1,J0,l]),v5=P((W)=>{if(!W||typeof W!=="object")return;if(l1(),o1(),r1(),h_(),pQ(W))$1()},[l1,h_,o1,r1,$1]),OZ=P(async(W,U)=>{let T=typeof W?.key==="string"?W.key:"",R=typeof U?.key==="string"?U.key:"",b=y3(T,R);if(!T||!R)return;O0((s)=>fQ(s,T,R));try{let s=await vQ({panel:W,action:U,currentChatJid:j,stopAutoresearch:PX,dismissAutoresearch:SX,writeClipboard:(K0)=>navigator.clipboard.writeText(K0)});if(s.refreshAutoresearchStatus)h_();if(s.toast)l(s.toast.title,s.toast.detail,s.toast.kind,s.toast.durationMs)}catch(s){l("Panel action failed",s?.message||"Could not complete that action.","warning")}finally{O0((s)=>uQ(s,b))}},[j,h_,l]),z6=P(()=>{if(B_.current)B_.current.abort(),B_.current=null;U0(null)},[]),z8=P(async(W)=>{let U=String(W||"").trim();if(!U)return l("BTW needs a question","Usage: /btw <question>","warning"),!0;if(B_.current)B_.current.abort();let T=new AbortController;B_.current=T,U0({question:U,answer:"",thinking:"",error:null,model:null,status:"running"});try{let R=await uX(U,{signal:T.signal,chatJid:G7(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(b,s)=>{if(b==="side_prompt_start")U0((K0)=>K0?{...K0,status:"running"}:K0)},onThinkingDelta:(b)=>{U0((s)=>s?{...s,thinking:`${s.thinking||""}${b||""}`}:s)},onTextDelta:(b)=>{U0((s)=>s?{...s,answer:`${s.answer||""}${b||""}`}:s)}});if(B_.current!==T)return!0;U0((b)=>b?{...b,answer:R?.result||b.answer||"",thinking:R?.thinking||b.thinking||"",model:R?.model||null,status:"success",error:null}:b)}catch(R){if(T.signal.aborted)return!0;U0((b)=>b?{...b,status:"error",error:R?.payload?.error||R?.message||"BTW request failed."}:b)}finally{if(B_.current===T)B_.current=null}return!0},[j,l]),DZ=P(async({content:W})=>{let U=q7(W);if(!U)return!1;if(U.type==="help")return l("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(U.type==="clear")return z6(),l("BTW cleared","Closed the side conversation panel.","info"),!0;if(U.type==="ask")return await z8(U.question),!0;return!1},[z6,z8,l]),AZ=P(()=>{if(t?.question)z8(t.question)},[t,z8]),EZ=P(async()=>{let W=N7(t);if(!W)return;try{let U=await i4("default",W,null,[],f5?"queue":null,j);v5(U),l(U?.queued==="followup"?"BTW queued":"BTW injected",U?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(U){l("BTW inject failed",U?.message||"Could not inject BTW answer into chat.","warning")}},[t,v5,f5,l]),d3=P(async(W=null)=>{let[U,T,R,b,s,K0,c]=await Promise.allSettled([f3(j),u3(j),ZZ(j),jZ(j),QZ(),B6(g1),d4(20,null,j)]),F0=U.status==="fulfilled"?U.value:null,j1=T.status==="fulfilled"?T.value:null,M4=R.status==="fulfilled"?R.value:null,M1=b.status==="fulfilled"?b.value:null,I4=s.status==="fulfilled"?s.value:null,h5=K0.status==="fulfilled"?K0.value:null,V5=c.status==="fulfilled"?c.value:null,p_=Array.isArray(V5?.posts)?V5.posts:Array.isArray(w5)?w5:[],t3=p_.length?p_[p_.length-1]:null,xZ=p_.filter((D6)=>D6?.data?.is_bot_message).length,yZ=p_.filter((D6)=>!D6?.data?.is_bot_message).length,e3=Number(M4?.count??_1.current.length??0)||0,_2=Array.isArray(I4?.chats)?I4.chats.length:V0.length,RZ=Array.isArray(h5?.chats)?h5.chats.length:G0.length,$2=Number(j1?.percent??C0?.percent??0)||0,wZ=Number(j1?.tokens??C0?.tokens??0)||0,fZ=Number(j1?.contextWindow??C0?.contextWindow??0)||0,uZ=M1?.current??a0??null,vZ=M1?.thinking_level??A1??null,bZ=M1?.supports_thinking??g0,gZ=F0?.status||(Q0?"active":"idle"),mZ=F0?.data?.type||F0?.type||null;return{generatedAt:new Date().toISOString(),request:W,chat:{currentChatJid:j,rootChatJid:g1,activeChats:_2,branches:RZ},agent:{status:gZ,phase:mZ,running:Boolean(Q0)},model:{current:uZ,thinkingLevel:vZ,supportsThinking:Boolean(bZ)},context:{tokens:wZ,contextWindow:fZ,percent:$2},queue:{count:e3},timeline:{loadedPosts:p_.length,botPosts:xZ,userPosts:yZ,latestPostId:t3?.id??null,latestTimestamp:t3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round($2)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,e3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,_2*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,p_.length*5))}]}},[V0,a0,A1,C0,G0,j,g1,Q0,w5,g0]),b5=P(()=>{u5(),l1(),o1(),$1(),r1(),h_()},[u5,l1,o1,$1,r1,h_]);g(()=>{b5();let W=setInterval(()=>{u5(),l1(),o1(),$1()},60000);return()=>clearInterval(W)},[b5,u5,l1,o1,$1]),g(()=>{y0(new Map),O0(new Set)},[j]),g(()=>{let W=!1,U=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;X5()})};if(O)return m_(O),()=>{W=!0};if(k)return tQ(k,50,0,j,M,g1).then((T)=>{if(W)return;c1(T.results),U8(!1)}).catch((T)=>{if(W)return;console.error("Failed to search:",T),c1([]),U8(!1)}),()=>{W=!0};return m_().then(()=>{U()}).catch((T)=>{if(W)return;console.error("Failed to load timeline:",T)}),()=>{W=!0}},[j,O,k,M,g1,m_,X5,U8,c1]),g(()=>{let W=H4.current||j;z4.current.set(W,K5())},[j,K5]),g(()=>{let W=H4.current||j;if(W===j)return;z4.current.set(W,K5()),H4.current=j,n1.current.clear(),W8(z4.current.get(j)||null),$1(),P_(),r1()},[j,P_,r1,$1,W8,K5]);let kZ=P(()=>{let{currentHashtag:W,searchQuery:U,searchOpen:T}=v1.current||{};if(!W&&!U&&!T)i1();b5()},[b5,i1]),i3=P((W,U="streaming")=>{let T=new Date().toISOString();f0((R)=>nQ(R,W,{fallbackStatus:U,currentChatJid:j,dismissedSessionKeys:Y1.current,updatedAt:T}))},[j]),H6=P((W,U)=>{let{turnId:T,isCurrentChatEvent:R}=sj(W,U,j);if(R)p3(U),c3(U);if(W==="ui_theme"){t2(U);return}let b=nj(W);if(b.kind==="update"){if(!R)return;if(b.shouldAdoptTurn&&C5(T,H0.current))C_(T);i3(U,b.fallbackStatus||"streaming");return}if(b.kind==="close"){if(!R)return;f0((c)=>dQ(c,U));return}if(W?.startsWith("agent_")&&!aj(W))G5();if(W==="connected"){if(m3(U?.app_asset_version))return;p(null),n({text:"",totalLines:0}),_0(""),X0({text:"",totalLines:0}),z0(null),b0.current=null,U1();let c=j;f3(c).then((M1)=>{if(k1.current!==c)return;if(!M1||M1.status!=="active"||!M1.data)return;let I4=M1.data,h5=k3(I4);if(h5)C_(h5);G_({clearSilence:!0}),A4(I4);let V5=V8(M1.thought);if(V5)o0.current=V5.text,X0(V5);let p_=V8(M1.draft);if(p_)v0.current=p_.text,n(p_)}).catch((M1)=>{console.warn("Failed to fetch agent status:",M1)});let{currentHashtag:F0,searchQuery:j1,searchOpen:M4}=v1.current||{};if(!F0&&!j1&&!M4)i1();b5();return}if(W==="agent_status"){if(!R){if(U?.type==="done"||U?.type==="error")l1(),o1();return}if(U.type==="done"||U.type==="error"){if(e4(T,H0.current))return;if(U.type==="done"){E4(T||H0.current);let{currentHashtag:c,searchQuery:F0,searchOpen:j1}=v1.current||{};if(!c&&!F0&&!j1)i1();if(U.context_usage)w0(U.context_usage)}if(r1(),g_.current=!1,U1(),n1.current.clear(),l1(),$1(),n({text:"",totalLines:0}),_0(""),X0({text:"",totalLines:0}),z0(null),U.type==="error")p({type:"error",title:U.title||"Agent error"}),setTimeout(()=>p(null),8000);else p(null)}else{if(T)C_(T);if(G_({running:!0,clearSilence:!0}),U.type==="thinking")v0.current="",o0.current="",n({text:"",totalLines:0}),_0(""),X0({text:"",totalLines:0});M_.current=U,p((c)=>{if(c&&c.type===U.type&&c.title===U.title)return c;return U})}return}if(W==="agent_steer_queued"){if(!R)return;if(e4(T,H0.current))return;let c=pj(T,H0.current);if(!c)return;m0.current=c,S0(c);return}if(W==="agent_followup_queued"){if(!R)return;J0((c)=>hQ(c,U)),$1();return}if(W==="agent_followup_consumed"){if(!R)return;let c=U?.row_id;if(c!=null){let M1=w4(_1.current,c);t_(M1.remainingQueueCount),J0((I4)=>w4(I4,c).items)}$1();let{currentHashtag:F0,searchQuery:j1,searchOpen:M4}=v1.current||{};if(!F0&&!j1&&!M4)i1();return}if(W==="agent_followup_removed"){if(!R)return;let c=U?.row_id;if(c!=null){let F0=w4(_1.current,c);n1.current.add(c),t_(F0.remainingQueueCount),J0((j1)=>w4(j1,c).items)}$1();return}if(W==="agent_draft_delta"){if(!R)return;if(e4(T,H0.current))return;if(C5(T,H0.current))C_(T);G_({running:!0,clearSilence:!0}),v0.current=mj(v0.current,U);let c=Date.now();if(!p4.current||c-p4.current>=100){p4.current=c;let F0=v0.current;if(Q1.current)n((j1)=>E3(F0,j1));else n(X6(F0,null))}return}if(W==="agent_draft"){if(!R)return;if(e4(T,H0.current))return;if(C5(T,H0.current))C_(T);G_({running:!0,clearSilence:!0});let c=U.text||"",F0=U.mode||(U.kind==="plan"?"replace":"append");if(U.kind==="plan")_0((j1)=>gj(j1,c,F0));else if(!Q1.current)v0.current=c,n(X6(c,U.total_lines));return}if(W==="agent_thought_delta"){if(!R)return;if(e4(T,H0.current))return;if(C5(T,H0.current))C_(T);G_({running:!0,clearSilence:!0}),o0.current=hj(o0.current,U);let c=Date.now();if(e0.current&&(!W1.current||c-W1.current>=100)){W1.current=c;let F0=o0.current;X0((j1)=>E3(F0,j1))}return}if(W==="agent_thought"){if(!R)return;if(e4(T,H0.current))return;if(C5(T,H0.current))C_(T);G_({running:!0,clearSilence:!0});let c=U.text||"";if(!e0.current)o0.current=c,X0(X6(c,U.total_lines));return}if(W==="model_changed"){if(!R)return;if(U?.model!==void 0)b1(U.model);if(U?.thinking_level!==void 0)Z1(U.thinking_level??null);if(U?.supports_thinking!==void 0)P1(Boolean(U.supports_thinking));let c=j;u3(c).then((F0)=>{if(k1.current!==c)return;if(F0)w0(F0)}).catch(()=>{});return}let s=rj(W,U,j);if(s.isStatusPanelWidgetEvent){if(s.eventChatJid!==j)return;if(!s.panelKey)return;if(y0((c)=>RQ(c,U)),wQ(U))O0((c)=>R3(c,s.panelKey));T3(W,U);return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:U}));Q5(U?.updates);return}if(tj(W)){if(!R)return;T3(W,U);let c=oj(W,U);if(c)l(c.title,c.detail,c.kind,c.durationMs);return}let K0=F8(v1.current);if(W==="agent_response"){if(!R)return;L8(),I_.current={post:U,turnId:H0.current}}if(Ij(W,R,K0))c1((c)=>Tj(c,U)),k4.current?.();if(W==="interaction_updated"){if(!J3(R,K0))return;c1((c)=>Cj(c,U))}if(W==="interaction_deleted"){if(!J3(R,K0))return;let c=U?.ids||[];if(c.length){if(R5(()=>{c1((F0)=>Pj(F0,c))}),b3.current)U6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[i3,U1,G5,j,U6,G_,E4,R5,l1,o1,i1,L8,C_,A4,p3,c3,u5,$1,J0,r1,m3]);g(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=H6,W.reset=()=>{L8(),U1(),p(null),n({text:"",totalLines:0}),_0(""),X0({text:"",totalLines:0}),z0(null)},W.finalize=()=>g3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[U1,g3,H6,L8]),Ej({handleSseEvent:H6,handleConnectionStatusChange:WZ,loadPosts:m_,onWake:kZ,chatJid:j}),g(()=>{if(!N5||N5.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let U=W.slice(5);R1(U),history.replaceState(null,"",location.pathname+location.search)},[N5,R1]);let J6=S!==null;g(()=>{if(K!=="connected")return;let U=setInterval(()=>{let{currentHashtag:T,searchQuery:R,searchOpen:b}=v1.current||{},s=!T&&!R&&!b;if(J6){if(s)i1();$1(),P_(),r1(),h_()}else{if(s)i1();P_(),r1(),h_()}},J6?15000:60000);return()=>clearInterval(U)},[K,J6,P_,h_,r1,$1,i1]),g(()=>{return _Q(()=>{P_(),r1(),$1(),h_()})},[P_,h_,r1,$1]);let MZ=P(()=>{R_((W)=>!W)},[]),r3=P((W)=>{if(typeof window>"u")return;let U=String(W||"").trim();if(!U||U===j)return;let T=B4(window.location.href,U,{chatOnly:Q});$?.(T)},[Q,j,$]),O6=P(()=>{zQ({hasWindow:typeof window<"u",currentBranchRecord:G1,renameBranchInFlight:I.current,renameBranchLockUntil:r.current,getFormLock:P3,setRenameBranchNameDraft:j0,setIsRenameBranchFormOpen:B0})},[G1]),g5=P(()=>{HQ({setIsRenameBranchFormOpen:B0,setRenameBranchNameDraft:j0})},[]),o3=P(async(W)=>{await JQ({hasWindow:typeof window<"u",currentBranchRecord:G1,nextName:W,openRenameForm:O6,renameBranchInFlightRef:I,renameBranchLockUntilRef:r,getFormLock:P3,setIsRenamingBranch:u,renameChatBranch:xX,refreshActiveChatAgents:l1,refreshCurrentChatBranches:o1,showIntentToast:l,closeRenameForm:g5})},[g5,G1,l1,o1,O6,u,l]),s3=P(async(W=null)=>{await OQ({hasWindow:typeof window<"u",targetChatJid:W,currentChatJid:j,currentBranchRecord:G1,currentChatBranches:G0,activeChatAgents:V0,pruneChatBranch:yX,refreshActiveChatAgents:l1,refreshCurrentChatBranches:o1,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[V0,Q,G1,G0,j,$,l1,o1,l]),IZ=P(async(W)=>{await DQ({targetChatJid:W,restoreChatBranch:RX,currentChatBranches:G0,refreshActiveChatAgents:l1,refreshCurrentChatBranches:o1,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,G0,$,l1,o1,l]);g(()=>{if(!G||typeof window>"u")return;let W=!1;return AQ({branchLoaderSourceChatJid:X,forkChatBranch:c5,setBranchLoaderState:a1,navigate:$,baseHref:window.location.href,isCancelled:()=>W}),()=>{W=!0}},[G,X,$]);let TZ=P((W)=>{if(!W||typeof W!=="object")return;let U=F_(W);if(U)Y1.current.delete(U);f0(cQ(W,new Date().toISOString()))},[]),m5=P(()=>{f0((W)=>{let U=lQ(W);if(U.dismissedSessionKey)Y1.current.add(U.dismissedSessionKey);return U.nextWidget})},[]),CZ=P((W,U)=>{let T=typeof W?.kind==="string"?W.kind:"",R=F_(U);if(!T||!R)return;if(T==="widget.close"){m5();return}if(T==="widget.submit"){let b=J7(W?.payload),s=O7(W?.payload),K0=new Date().toISOString();if(f0((c)=>iQ(c,R,{kind:T,payload:W?.payload||null,submittedAt:K0,submissionText:b})),!b){if(l("Widget submission received","The widget submitted data without a message payload yet.","info",3500),s)m5();return}(async()=>{try{let c=await i4("default",b,null,[],f5?"queue":null,j);if(v5(c),f0((F0)=>w3(F0,R,{submittedAt:K0,submissionText:b,queued:c?.queued||null})),l(c?.queued==="followup"?"Widget submission queued":"Widget submission sent",c?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),s)m5()}catch(c){f0((F0)=>w3(F0,R,{submittedAt:K0,submissionText:b,errorMessage:c?.message||"Could not send the widget message."})),l("Widget submission failed",c?.message||"Could not send the widget message.","warning",5000)}})();return}if(T==="widget.ready"||T==="widget.request_refresh"){let b=new Date().toISOString(),s=Boolean(W?.payload?.buildDashboard||W?.payload?.dashboardKind==="internal-state"),K0=Number(U?.runtimeState?.refreshCount||0)+1;if(f0((c)=>rQ(c,R,{kind:T,payload:W?.payload||null,eventAt:b,nextRefreshCount:K0,shouldBuildDashboard:s})),T==="widget.request_refresh")if(s)(async()=>{try{let c=await d3(W?.payload||null);f0((F0)=>oQ(F0,R,{dashboard:c,at:new Date().toISOString(),count:K0,echo:W?.payload||null})),l("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(c){f0((F0)=>sQ(F0,R,{errorMessage:c?.message||"Could not build dashboard.",at:new Date().toISOString(),count:K0})),l("Dashboard build failed",c?.message||"Could not build dashboard.","warning",5000)}})();else l("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[d3,j,m5,v5,f5,l]);g(()=>{Y1.current.clear(),f0(null)},[j]);let PZ=P(async()=>{await EQ({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:c5,refreshActiveChatAgents:l1,refreshCurrentChatBranches:o1,showIntentToast:l,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,l1,o1,l]),H8=P(async(W,U)=>{await kQ({hasWindow:typeof window<"u",isWebAppMode:V,path:W,label:U,showIntentToast:l,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(T)=>{let b=(typeof h0==="string"?h0.trim():"")===T?x1.current:T===a4?J_.current:null;if(typeof b?.preparePopoutTransfer==="function")return await b.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(T)=>{let R=r0.get(T);if(R&&!R.dirty){d_(T);return}if(T===a4&&m1)T1(!1)}})},[j,m1,d_,V,l,h0]);g(()=>$Q({openTab:(W,U)=>t1(W,U?{label:U}:void 0),popOutPane:(W,U)=>{H8(W,U)}}),[H8,t1]);let SZ=P(async()=>{await MQ({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:g1,forkChatBranch:c5,getActiveChatAgents:b6,getChatBranches:B6,setActiveChatAgents:L0,setCurrentChatBranches:x0,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,g1,V,l]);g(()=>{if(!X1)return;if(typeof window>"u")return;let W=a_.current;if(!W)return;if(!Z4.current){let U=H5("editorWidth",null),T=c4.current||280;Z4.current=Number.isFinite(U)?U:T}if(W.style.setProperty("--editor-width",`${Z4.current}px`),!O4.current){let U=H5("dockHeight",null);O4.current=Number.isFinite(U)?U:200}W.style.setProperty("--dock-height",`${O4.current}px`)},[X1]),g(()=>{if(!e1||Q)return;return jQ(u1)},[u1,e1,Q]),g(()=>{if(Q)return;return QQ({toggleZenMode:m4,exitZenMode:k_,zenMode:F1,isZenModeActive:()=>F1})},[m4,k_,F1,Q]);let a3=Boolean(n0&&n0===(S?.turn_id||D0));if(G)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${X_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${X_.message}</p>
                    </div>
                </div>
            </div>
        `;if(Z)return L`
            <div class=${`app-shell pane-popout${X1?" editor-open":""}`} ref=${a_}>
                <div class="editor-pane-container pane-popout-container">
                    ${X1&&!E_&&L`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${__?L`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${o_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${Y_.length>1&&L`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${Y_.map((W)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${W.id===h0?" active":""}`}
                                                                onClick=${(U)=>{v4(W.id),U.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${W.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${h0&&I1.has(h0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(W)=>{f_(h0),W.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:L`
                                    <div class="pane-popout-controls-label" aria-label=${o_}>${o_}</div>
                                `}
                        </div>
                    `}
                    ${X1?L`<div class="editor-pane-host" ref=${N1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${X1&&h0&&I1.has(h0)&&L`
                        <${H3}
                            getContent=${()=>x1.current?.getContent?.()}
                            path=${h0}
                            onClose=${()=>f_(h0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${K1?"":" workspace-collapsed"}${X1?" editor-open":""}${Q?" chat-only":""}${F1?" zen-mode":""}`} ref=${a_}>
            ${Y0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(W)=>{if(W.target===W.currentTarget)g5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(W)=>{W.preventDefault(),o3(W0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${y1}
                            value=${W0}
                            onInput=${(W)=>{let U=W.currentTarget?.value??"";j0(String(U))}}
                            onKeyDown=${(W)=>{if(W.key==="Escape")W.preventDefault(),g5()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${T0.kind||"info"}`}>
                            ${T0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${f||!T0.canSubmit}>
                                ${f?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${g5}
                                disabled=${f}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Q&&L`
                <${Hj}
                    onFileSelect=${y5}
                    visible=${K1}
                    active=${K1||X1}
                    onOpenEditor=${t1}
                    onOpenTerminalTab=${L1}
                    onOpenVncTab=${O_}
                    onToggleTerminal=${e1?u1:void 0}
                    terminalVisible=${Boolean(e1&&m1)}
                />
                <button
                    class=${`workspace-toggle-tab${K1?" open":" closed"}`}
                    onClick=${MZ}
                    title=${K1?"Hide workspace":"Show workspace"}
                    aria-label=${K1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${GZ} onTouchStart=${KZ}></div>
            `}
            ${Q4&&L`
                <div class="editor-pane-container">
                    ${F1&&L`<div class="zen-hover-zone"></div>`}
                    ${X1&&L`
                        <${Dj}
                            tabs=${Y_}
                            activeId=${h0}
                            onActivate=${v4}
                            onClose=${d_}
                            onCloseOthers=${i_}
                            onCloseAll=${$5}
                            onTogglePin=${r_}
                            onTogglePreview=${f_}
                            onEditSource=${S5}
                            previewTabs=${I1}
                            paneOverrides=${H_}
                            onToggleDock=${e1?u1:void 0}
                            dockVisible=${e1&&m1}
                            onToggleZen=${m4}
                            zenMode=${F1}
                            onPopOutTab=${V?void 0:H8}
                        />
                    `}
                    ${X1&&L`<div class="editor-pane-host" ref=${N1}></div>`}
                    ${X1&&h0&&I1.has(h0)&&L`
                        <${H3}
                            getContent=${()=>x1.current?.getContent?.()}
                            path=${h0}
                            onClose=${()=>f_(h0)}
                        />
                    `}
                    ${e1&&m1&&L`<div class="dock-splitter" onMouseDown=${VZ} onTouchStart=${BZ}></div>`}
                    ${e1&&L`<div class=${`dock-panel${m1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&L`
                                    <button class="dock-panel-action" onClick=${()=>H8(a4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
                <div class="editor-splitter" onMouseDown=${XZ} onTouchStart=${NZ}></div>
            `}
            <div class="container">
                ${k&&uj()&&L`<div class="search-results-spacer"></div>`}
                ${Q&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${G1?.agent_name?`@${G1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${G1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${G0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(W)=>r3(W.currentTarget.value)}
                                    >
                                        ${G0.map((W)=>L`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${b8(W,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${G1?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${O6}
                                    title=${f?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${f}
                                >
                                    ${f?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${G1?.chat_jid&&G1.chat_jid!==(G1.root_chat_jid||G1.chat_jid)&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${s3}
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
                        <button class="back-btn" onClick=${LZ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${k} · ${$4}`}</span>
                    </div>
                `}
                <${c7}
                    posts=${N5}
                    hasMore=${F8?YZ:!1}
                    onLoadMore=${F8?qZ:void 0}
                    timelineRef=${q_}
                    onHashtagClick=${UZ}
                    onMessageRef=${C1}
                    onScrollToMessage=${R1}
                    onFileRef=${I0}
                    onPostClick=${void 0}
                    onDeletePost=${JZ}
                    onOpenWidget=${TZ}
                    emptyMessage=${O?`No posts with #${O}`:k?`No results for "${k}"`:void 0}
                    agents=${Q_}
                    user=${u_}
                    reverse=${F8}
                    removingPostIds=${S1}
                    searchQuery=${k}
                />
                <${U$}
                    status=${K4(S)?null:S}
                    draft=${Z0}
                    plan=${$0}
                    thought=${q0}
                    pendingRequest=${N0}
                    intent=${x}
                    turnId=${D0}
                    steerQueued=${a3}
                    onPanelToggle=${W_}
                    showExtensionPanels=${!1}
                />
                <${V7}
                    session=${t}
                    onClose=${z6}
                    onRetry=${AZ}
                    onInject=${EZ}
                />
                <${E7}
                    widget=${E0}
                    onClose=${m5}
                    onWidgetEvent=${CZ}
                />
                <${U$}
                    extensionPanels=${Array.from(k0.values())}
                    pendingPanelActions=${c0}
                    onExtensionPanelAction=${OZ}
                    turnId=${D0}
                    steerQueued=${a3}
                    onPanelToggle=${W_}
                    showCorePanels=${!1}
                />
                <${Y$}
                    items=${J?[]:u0}
                    onInjectQueuedFollowup=${l3}
                    onRemoveQueuedFollowup=${n3}
                    onOpenFilePill=${I0}
                />
                <${g2}
                    onPost=${()=>{let{searchQuery:W,searchOpen:U}=v1.current||{};if(!W&&!U)m_(),X5()}}
                    onFocus=${X5}
                    searchMode=${J}
                    searchScope=${M}
                    onSearch=${FZ}
                    onSearchScopeChange=${d}
                    onEnterSearch=${zZ}
                    onExitSearch=${HZ}
                    fileRefs=${h}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${v}
                    onSetFileRefs=${i}
                    messageRefs=${e}
                    onRemoveMessageRef=${q4}
                    onClearMessageRefs=${n4}
                    onSetMessageRefs=${Y5}
                    onSwitchChat=${r3}
                    onRenameSession=${o3}
                    isRenameSessionInProgress=${f}
                    onCreateSession=${PZ}
                    onDeleteSession=${s3}
                    onRestoreSession=${IZ}
                    activeEditorPath=${Q?null:h0}
                    onAttachEditorFile=${Q?void 0:z1}
                    onOpenFilePill=${I0}
                    followupQueueCount=${N_}
                    followupQueueItems=${u0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${l3}
                    onRemoveQueuedFollowup=${n3}
                    onSubmitIntercept=${DZ}
                    onMessageResponse=${v5}
                    onSubmitError=${q5}
                    onPopOutChat=${V?void 0:SZ}
                    isAgentActive=${f5}
                    activeChatAgents=${V0}
                    currentChatJid=${j}
                    connectionStatus=${K}
                    activeModel=${a0}
                    modelUsage=${E1}
                    thinkingLevel=${A1}
                    supportsThinking=${g0}
                    contextUsage=${C0}
                    notificationsEnabled=${_5}
                    notificationPermission=${f4}
                    onToggleNotifications=${f1}
                    onModelChange=${b1}
                    onModelStateChange=${F6}
                    statusNotice=${K4(S)?S:null}
                />
                <${C7}
                    request=${N0}
                    onRespond=${()=>{z0(null),b0.current=null}}
                />
            </div>
        </div>
    `}function bX(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=P((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},G=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",G);else window.history.pushState(null,"",G);$(window.location.href)},[]),Q=R0(()=>new URL(_).searchParams,[_]);return L`<${vX} locationParams=${Q} navigate=${j} />`}P4(L`<${bX} />`,document.getElementById("app"));

//# debugId=96641191BC132A2B64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
