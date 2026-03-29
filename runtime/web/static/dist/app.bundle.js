var gZ=Object.defineProperty;var mZ=(_)=>_;function hZ(_,$){this[_]=mZ.bind(null,$)}var pZ=(_,$)=>{for(var j in $)gZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:hZ.bind($,j)})};var T8,B1,L2,cZ,T4,Q2,F2,z2,H2,S6,M6,I6,J2,k8={},M8=[],lZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,C8=Array.isArray;function X4(_,$){for(var j in $)_[j]=$[j];return _}function x6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function P8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?T8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return A8(_,q,Q,Z,null)}function A8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++L2:Z,__i:-1,__u:0};return Z==null&&B1.vnode!=null&&B1.vnode(Y),Y}function S8(_){return _.children}function U5(_,$){this.props=_,this.context=$}function L5(_,$){if($==null)return _.__?L5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?L5(_):null}function nZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=X4({},$);Y.__v=$.__v+1,B1.vnode&&B1.vnode(Y),y6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?L5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,E2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&O2(Y)}}function O2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),O2(_)}function T6(_){(!_.__d&&(_.__d=!0)&&T4.push(_)&&!I8.__r++||Q2!=B1.debounceRendering)&&((Q2=B1.debounceRendering)||F2)(I8)}function I8(){try{for(var _,$=1;T4.length;)T4.length>$&&T4.sort(z2),_=T4.shift(),$=T4.length,nZ(_)}finally{T4.length=I8.__r=0}}function D2(_,$,j,Q,Z,Y,q,G,X,K,N){var V,B,O,E,k,A,J,D=Q&&Q.__k||M8,M=$.length;for(X=dZ(j,$,D,X,M),V=0;V<M;V++)(O=j.__k[V])!=null&&(B=O.__i!=-1&&D[O.__i]||k8,O.__i=V,A=y6(_,O,B,Z,Y,q,G,X,K,N),E=O.__e,O.ref&&B.ref!=O.ref&&(B.ref&&R6(B.ref,null,O),N.push(O.ref,O.__c||E,O)),k==null&&E!=null&&(k=E),(J=!!(4&O.__u))||B.__k===O.__k?X=A2(O,X,_,J):typeof O.type=="function"&&A!==void 0?X=A:E&&(X=E.nextSibling),O.__u&=-7);return j.__e=k,X}function dZ(_,$,j,Q,Z){var Y,q,G,X,K,N=j.length,V=N,B=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=A8(null,q,null,null,null):C8(q)?q=_.__k[Y]=A8(S8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=A8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,X=Y+B,q.__=_,q.__b=_.__b+1,G=null,(K=q.__i=iZ(q,j,X,V))!=-1&&(V--,(G=j[K])&&(G.__u|=2)),G==null||G.__v==null?(K==-1&&(Z>N?B--:Z<N&&B++),typeof q.type!="function"&&(q.__u|=4)):K!=X&&(K==X-1?B--:K==X+1?B++:(K>X?B--:B++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<N;Y++)(G=j[Y])!=null&&(2&G.__u)==0&&(G.__e==Q&&(Q=L5(G)),M2(G,G));return Q}function A2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=A2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=L5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function iZ(_,$,j,Q){var Z,Y,q,G=_.key,X=_.type,K=$[j],N=K!=null&&(2&K.__u)==0;if(K===null&&G==null||N&&G==K.key&&X==K.type)return j;if(Q>(N?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((K=$[q=Z>=0?Z--:Y++])!=null&&(2&K.__u)==0&&G==K.key&&X==K.type)return q}return-1}function Z2(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||lZ.test($)?j:j+"px"}function D8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||Z2(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||Z2(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(H2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=S6,_.addEventListener($,Y?I6:M6,Y)):_.removeEventListener($,Y?I6:M6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function Y2(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=S6++;else if($.t<j.u)return;return j(B1.event?B1.event($):$)}}}function y6(_,$,j,Q,Z,Y,q,G,X,K){var N,V,B,O,E,k,A,J,D,M,d,h,o,t,R,x=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),Y=[G=$.__e=j.__e]),(N=B1.__b)&&N($);_:if(typeof x=="function")try{if(J=$.props,D=x.prototype&&x.prototype.render,M=(N=x.contextType)&&Q[N.__c],d=N?M?M.props.value:N.__:Q,j.__c?A=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new x(J,d):($.__c=V=new U5(J,d),V.constructor=x,V.render=oZ),M&&M.sub(V),V.state||(V.state={}),V.__n=Q,B=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&x.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=X4({},V.__s)),X4(V.__s,x.getDerivedStateFromProps(J,V.__s))),O=V.props,E=V.state,V.__v=$,B)D&&x.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&x.getDerivedStateFromProps==null&&J!==O&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,d),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,d)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),M8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,d),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(O,E,k)})}if(V.context=d,V.props=J,V.__P=_,V.__e=!1,h=B1.__r,o=0,D)V.state=V.__s,V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),M8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++o<25);V.state=V.__s,V.getChildContext!=null&&(Q=X4(X4({},Q),V.getChildContext())),D&&!B&&V.getSnapshotBeforeUpdate!=null&&(k=V.getSnapshotBeforeUpdate(O,E)),t=N!=null&&N.type===S8&&N.key==null?k2(N.props.children):N,G=D2(_,C8(t)?t:[t],$,j,Q,Z,Y,q,G,X,K),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),A&&(V.__E=V.__=null)}catch(H){if($.__v=null,X||Y!=null)if(H.then){for($.__u|=X?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;Y[Y.indexOf(G)]=null,$.__e=G}else{for(R=Y.length;R--;)x6(Y[R]);C6($)}else $.__e=j.__e,$.__k=j.__k,H.then||C6($);B1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=rZ(j.__e,$,j,Q,Z,Y,q,X,K);return(N=B1.diffed)&&N($),128&$.__u?void 0:G}function C6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(C6))}function E2(_,$,j){for(var Q=0;Q<j.length;Q++)R6(j[Q],j[++Q],j[++Q]);B1.__c&&B1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){B1.__e(Y,Z.__v)}})}function k2(_){return typeof _!="object"||_==null||_.__b>0?_:C8(_)?_.map(k2):X4({},_)}function rZ(_,$,j,Q,Z,Y,q,G,X){var K,N,V,B,O,E,k,A=j.props||k8,J=$.props,D=$.type;if(D=="svg"?Z="http://www.w3.org/2000/svg":D=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(K=0;K<Y.length;K++)if((O=Y[K])&&"setAttribute"in O==!!D&&(D?O.localName==D:O.nodeType==3)){_=O,Y[K]=null;break}}if(_==null){if(D==null)return document.createTextNode(J);_=document.createElementNS(Z,D,J.is&&J),G&&(B1.__m&&B1.__m($,Y),G=!1),Y=null}if(D==null)A===J||G&&_.data==J||(_.data=J);else{if(Y=Y&&T8.call(_.childNodes),!G&&Y!=null)for(A={},K=0;K<_.attributes.length;K++)A[(O=_.attributes[K]).name]=O.value;for(K in A)O=A[K],K=="dangerouslySetInnerHTML"?V=O:K=="children"||(K in J)||K=="value"&&("defaultValue"in J)||K=="checked"&&("defaultChecked"in J)||D8(_,K,null,O,Z);for(K in J)O=J[K],K=="children"?B=O:K=="dangerouslySetInnerHTML"?N=O:K=="value"?E=O:K=="checked"?k=O:G&&typeof O!="function"||A[K]===O||D8(_,K,O,A[K],Z);if(N)G||V&&(N.__html==V.__html||N.__html==_.innerHTML)||(_.innerHTML=N.__html),$.__k=[];else if(V&&(_.innerHTML=""),D2($.type=="template"?_.content:_,C8(B)?B:[B],$,j,Q,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&L5(j,0),G,X),Y!=null)for(K=Y.length;K--;)x6(Y[K]);G||(K="value",D=="progress"&&E==null?_.removeAttribute("value"):E!=null&&(E!==_[K]||D=="progress"&&!E||D=="option"&&E!=A[K])&&D8(_,K,E,A[K],Z),K="checked",k!=null&&k!=_[K]&&D8(_,K,k,A[K],Z))}return _}function R6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){B1.__e(Z,j)}}function M2(_,$,j){var Q,Z;if(B1.unmount&&B1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||R6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){B1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&M2(Q[Z],$,j||typeof _.type!="function");j||x6(_.__e),_.__c=_.__=_.__e=void 0}function oZ(_,$,j){return this.constructor(_,j)}function P4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),B1.__&&B1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],y6($,_=(!Q&&j||$).__k=P8(S8,null,[_]),Z||k8,k8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?T8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),E2(Y,_,q)}function I2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,T6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+J2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}T8=M8.slice,B1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(G){_=G}throw _}},L2=0,cZ=function(_){return _!=null&&_.constructor===void 0},U5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=X4({},this.state),typeof _=="function"&&(_=_(X4({},j),this.props)),_&&X4(j,_),_!=null&&this.__v&&($&&this._sb.push($),T6(this))},U5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),T6(this))},U5.prototype.render=S8,T4=[],F2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z2=function(_,$){return _.__v.__b-$.__v.__b},I8.__r=0,H2=/(PointerCapture)$|Capture$/i,S6=0,M6=Y2(!1),I6=Y2(!0),J2=0;var C4,V1,k6,q2,F5=0,T2=[],O1=B1,G2=O1.__b,K2=O1.__r,X2=O1.diffed,N2=O1.__c,V2=O1.unmount,B2=O1.__;function z5(_,$){O1.__h&&O1.__h(V1,_,F5||$),F5=0;var j=V1.__H||(V1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return F5=1,w6(y2,_)}function w6(_,$,j){var Q=z5(C4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):y2(void 0,$),function(G){var X=Q.__N?Q.__N[0]:Q.__[0],K=Q.t(X,G);X!==K&&(Q.__N=[K,Q.__[1]],Q.__c.setState({}))}],Q.__c=V1,!V1.__f)){var Z=function(G,X,K){if(!Q.__c.__H)return!0;var N=Q.__c.__H.__.filter(function(B){return B.__c});if(N.every(function(B){return!B.__N}))return!Y||Y.call(this,G,X,K);var V=Q.__c.props!==G;return N.some(function(B){if(B.__N){var O=B.__[0];B.__=B.__N,B.__N=void 0,O!==B.__[0]&&(V=!0)}}),Y&&Y.call(this,G,X,K)||V};V1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=V1;V1.componentWillUpdate=function(G,X,K){if(this.__e){var N=Y;Y=void 0,Z(G,X,K),Y=N}q&&q.call(this,G,X,K)},V1.shouldComponentUpdate=Z}return Q.__N||Q.__}function g(_,$){var j=z5(C4++,3);!O1.__s&&f6(j.__H,$)&&(j.__=_,j.u=$,V1.__H.__h.push(j))}function l5(_,$){var j=z5(C4++,4);!O1.__s&&f6(j.__H,$)&&(j.__=_,j.u=$,V1.__h.push(j))}function C(_){return F5=5,w0(function(){return{current:_}},[])}function C2(_,$,j){F5=6,l5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function w0(_,$){var j=z5(C4++,7);return f6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return F5=8,w0(function(){return _},$)}function P2(_){var $=V1.context[_.__c],j=z5(C4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(V1)),$.props.value):_.__}function S2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function x2(_){var $=z5(C4++,10),j=m();return $.__=_,V1.componentDidCatch||(V1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function sZ(){for(var _;_=T2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(E8),$.__h.some(P6),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){V1=null,G2&&G2(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),B2&&B2(_,$)},O1.__r=function(_){K2&&K2(_),C4=0;var $=(V1=_.__c).__H;$&&(k6===V1?($.__h=[],V1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(E8),$.__h.some(P6),$.__h=[],C4=0)),k6=V1},O1.diffed=function(_){X2&&X2(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(T2.push($)!==1&&q2===O1.requestAnimationFrame||((q2=O1.requestAnimationFrame)||aZ)(sZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),k6=V1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(E8),j.__h=j.__h.filter(function(Q){return!Q.__||P6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],O1.__e(Q,j.__v)}}),N2&&N2(_,$)},O1.unmount=function(_){V2&&V2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{E8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&O1.__e($,j.__v))};var W2=typeof requestAnimationFrame=="function";function aZ(_){var $,j=function(){clearTimeout(Q),W2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);W2&&($=requestAnimationFrame(j))}function E8(_){var $=V1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),V1=$}function P6(_){var $=V1;_.__c=_.__(),V1=$}function f6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function y2(_,$){return typeof $=="function"?$(_):$}var R2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],G=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=G:q===4?Q[1]=Object.assign(Q[1]||{},G):q===5?(Q[1]=Q[1]||{})[$[++Y]]=G:q===6?Q[1][$[++Y]]+=G+"":q?(Z=_.apply(G,R2(_,G,j,["",null])),Q.push(Z),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(G)}return Q},U2=new Map;function tZ(_){var $=U2.get(this);return $||($=new Map,U2.set(this,$)),($=R2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",G="",X=[0],K=function(B){Y===1&&(B||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,B,q):Y===3&&(B||q)?(X.push(3,B,q),Y=2):Y===2&&q==="..."&&B?X.push(4,B,0):Y===2&&q&&!B?X.push(5,0,!0,q):Y>=5&&((q||!B&&Y===5)&&(X.push(Y,0,q,Z),Y=6),B&&(X.push(Y,B,0,Z),Y=6)),q=""},N=0;N<j.length;N++){N&&(Y===1&&K(),K(N));for(var V=0;V<j[N].length;V++)Q=j[N][V],Y===1?Q==="<"?(K(),X=[X],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:G?Q===G?G="":q+=Q:Q==='"'||Q==="'"?G=Q:Q===">"?(K(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[N][V+1]===">")?(K(),Y===3&&(X=X[0]),Y=X,(X=X[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(K(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,X=X[0])}return K(),X}(_)),$),arguments,[])).length>1?$:$[0]}var L=tZ.bind(P8);var a1={};pZ(a1,{uploadWorkspaceFile:()=>y8,uploadMedia:()=>c6,updateWorkspaceFile:()=>zY,submitAdaptiveCardAction:()=>l6,streamSidePrompt:()=>UY,stopAutoresearch:()=>XY,steerAgentQueueItem:()=>WY,setWorkspaceVisibility:()=>o5,setAgentThoughtVisibility:()=>i6,sendPeerAgentMessage:()=>qY,sendAgentMessage:()=>o4,searchPosts:()=>v6,restoreChatBranch:()=>YY,respondToAgentRequest:()=>x8,renameWorkspaceFile:()=>t6,renameChatBranch:()=>QY,removeAgentQueueItem:()=>BY,pruneChatBranch:()=>ZY,moveWorkspaceEntry:()=>e6,getWorkspaceTree:()=>i5,getWorkspaceRawUrl:()=>R8,getWorkspaceFile:()=>r5,getWorkspaceDownloadUrl:()=>w8,getWorkspaceBranch:()=>FY,getTimeline:()=>r4,getThumbnailUrl:()=>r6,getThread:()=>b6,getPostsByHashtag:()=>u6,getMediaUrl:()=>y_,getMediaText:()=>o6,getMediaInfo:()=>H5,getMediaBlob:()=>LY,getChatBranches:()=>jY,getAutoresearchStatus:()=>KY,getAgents:()=>h6,getAgentThought:()=>d6,getAgentStatus:()=>p6,getAgentQueueState:()=>VY,getAgentModels:()=>d5,getAgentContext:()=>GY,getActiveChatAgents:()=>m6,forkChatBranch:()=>n5,dismissAutoresearch:()=>NY,deleteWorkspaceFile:()=>_$,deletePost:()=>g6,createWorkspaceFile:()=>a6,createReply:()=>$Y,createPost:()=>_Y,attachWorkspaceFile:()=>s6,addToWhitelist:()=>n6,SSEClient:()=>f8});async function a0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function w2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function eZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:G}=await j.read();if(G)break;Z+=Q.decode(q,{stream:!0});let X=Z.split(`

`);Z=X.pop()||"";for(let K of X){let N=w2(K);if(N)$(N.event,N.data)}}Z+=Q.decode();let Y=w2(Z);if(Y)$(Y.event,Y.data)}async function r4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return a0(Q)}async function u6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return a0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function v6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",G=Z?`&scope=${encodeURIComponent(Z)}`:"",X=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return a0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${G}${X}`)}async function b6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return a0(`/thread/${_}${j}`)}async function _Y(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return a0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function $Y(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return a0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function g6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return a0(Z,{method:"DELETE"})}async function o4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",G={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")G.mode=Z;return a0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(G)})}async function m6(){return a0("/agent/active-chats")}async function jY(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return a0(`/agent/branches${Q}`)}async function n5(_,$={}){return a0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function QY(_,$={}){return a0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function ZY(_){return a0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function YY(_,$={}){return a0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function qY(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return a0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function h6(){return a0("/agent/roster")}async function p6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/status${$}`)}async function GY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/context${$}`)}async function KY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/autoresearch/status${$}`)}async function XY(_=null,$={}){return a0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function NY(_=null){return a0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function VY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/queue-state${$}`)}async function BY(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function WY(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function d5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/models${$}`)}async function c6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function x8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function l6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function UY(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await eZ(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function n6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function d6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return a0(j)}async function i6(_,$,j){return a0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function y_(_){return`/media/${_}`}function r6(_){return`/media/${_}/thumbnail`}async function H5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function o6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function LY(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function i5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return a0(Q)}async function FY(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return a0($)}async function r5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return a0(Z)}async function zY(_,$){return a0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function s6(_){return a0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function y8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+q,{method:"POST",body:Q});if(!G.ok){let X=await G.json().catch(()=>({error:"Upload failed"})),K=Error(X.error||`HTTP ${G.status}`);throw K.status=G.status,K.code=X.code,K}return G.json()}async function a6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function t6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function e6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function _$(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return a0($,{method:"DELETE"})}async function o5(_,$=!1){return a0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function R8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function w8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class f8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function u8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function HY(_,$){let j=u8(_),Q=u8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function $$(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function j$(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function JY(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function OY(_,$,j=0,Q=(Z)=>Z){let Z=u8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=JY(Y.length,j),G=Y.map((X)=>u8(Q(X)));for(let X of q)if(G[X].startsWith(Z))return X;for(let X of q)if(G[X].includes(Z))return X;return-1}function Q$(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(HY(Y,$))return j}return OY(Z,$,0,Q)}function F_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function q1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function J5(_,$=!1){let j=F_(_);if(j===null)return $;return j==="true"}function O5(_,$=null){let j=F_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}function v8(_){return String(_||"").trim().toLowerCase()}function Z$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return v8($[1]||"")}function DY(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=v8(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function f2(_,$,j={}){let Q=Z$($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return DY(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return v8(Y?.agent_name).startsWith(Q)})}function Y$(_){let $=v8(_);return $?`@${$} `:""}function u2(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function b8(_){let $=q$(_);return $?`@${$}`:""}function q$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function g8(_,$=""){let j=String(_||""),Q=q$(j),Z=q$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function v2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?b8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function AY(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function m8(_,$={}){let j=b8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=AY(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function b2(_,$,j){let Q=b8(_),Z=b8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}function EY(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function N4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function h8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return N4(_)?"Compacting context":"Working..."}function kY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function p8(_,$=Date.now()){let j=EY(_);if(j===null)return null;return kY(Math.max(0,$-j))}function l_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let G=`${_}-file-pill`,X=`${_}-file-name`,K=`${_}-file-remove`,N=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  `}var MY=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function IY({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",G=`${Q!=null?`Context: ${g2(Q)} / ${g2(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,X=9,K=2*Math.PI*9,N=j/100*K,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
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
    `}function g2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function TY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K))Z.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function CY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K)){let N=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)Z.push(N[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function PY(_){let $=TY(_||""),j=CY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function G$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=PY(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((G)=>L`
                                        <${l_}
                                            key=${"queue-msg-"+G}
                                            prefix="compose"
                                            label=${"msg:"+G}
                                            title=${"Message reference: "+G}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((G)=>{let X=G.split("/").pop()||G;return L`
                                            <${l_}
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
    `}function m2({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:G,fileRefs:X=[],onRemoveFileRef:K,onClearFileRefs:N,messageRefs:V=[],onRemoveMessageRef:B,onClearMessageRefs:O,activeModel:E=null,modelUsage:k=null,thinkingLevel:A=null,supportsThinking:J=!1,contextUsage:D=null,onContextCompact:M,notificationsEnabled:d=!1,notificationPermission:h="default",onToggleNotifications:o,onModelChange:t,onModelStateChange:R,activeEditorPath:x=null,onAttachEditorFile:H,onOpenFilePill:S,followupQueueItems:p=[],onInjectQueuedFollowup:Q0,onRemoveQueuedFollowup:n,onSubmitIntercept:_0,onMessageResponse:e,onPopOutChat:Y0,isAgentActive:X0=!1,activeChatAgents:N0=[],currentChatJid:z0="web:default",connectionStatus:D0="connected",onSetFileRefs:A0,onSetMessageRefs:d0,onSubmitError:x0,onSwitchChat:M0,onRenameSession:i0,isRenameSessionInProgress:r0=!1,onCreateSession:b0,onDeleteSession:s0,onRestoreSession:g0,showQueueStack:e0=!0,statusNotice:H0=null}){let[h0,_1]=m(""),[Q1,Z_]=m(""),[D1,t0]=m([]),[g1,k1]=m(!1),[Z1,m0]=m([]),[S1,M1]=m(0),[s,V0]=m(!1),[F0,G0]=m([]),[y0,P0]=m(0),[f0,k0]=m(!1),[R0,l0]=m(!1),[O0,v0]=m(!1),[J0,j0]=m(!1),[y,a]=m([]),[L0,E0]=m(0),[u0,Y1]=m(0),[A1,G1]=m(!1),[m1,Q4]=m(0),[N_,t1]=m(null),[V_,Y_]=m(()=>Date.now()),$1=C(null),d1=C(null),Z4=C(null),w_=C(null),j5=C(null),f4=C(null),u1=C(null),B_=C(null),x1=C({value:"",updatedAt:0}),E1=C(0),K1=C(!1),f_=200,u_=(F)=>{let u=new Set,i=[];for(let c of F||[]){if(typeof c!=="string")continue;let I0=c.trim();if(!I0||u.has(I0))continue;u.add(I0),i.push(I0)}return i},X1=()=>{let F=F_("piclaw_compose_history");if(!F)return[];try{let u=JSON.parse(F);if(!Array.isArray(u))return[];return u_(u)}catch{return[]}},q_=(F)=>{q1("piclaw_compose_history",JSON.stringify(F))},p0=C(X1()),T1=C(-1),O_=C(""),e1=h0.trim()||D1.length>0||X.length>0||V.length>0,u4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),i_=typeof window<"u"&&typeof Notification<"u",v4=typeof window<"u"?Boolean(window.isSecureContext):!1,Q5=i_&&v4&&h!=="denied",o_=h==="granted"&&d,v_=N4(H0),y5=h8(H0),R5=typeof H0?.detail==="string"&&H0.detail.trim()?H0.detail.trim():"",N1=v_?p8(H0,V_):null,y1=o_?"Disable notifications":"Enable notifications",Z5=D1.length>0||X.length>0||V.length>0,D_=D0==="disconnected"?"Reconnecting":String(D0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),__=D0==="disconnected"?"Reconnecting":`Connection: ${D_}`,h1=(Array.isArray(N0)?N0:[]).filter((F)=>!F?.archived_at),C1=(()=>{for(let F of Array.isArray(N0)?N0:[]){let u=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(u&&u===z0)return F}return null})(),v1=Boolean(C1&&C1.chat_jid===(C1.root_chat_jid||C1.chat_jid)),z1=w0(()=>{let F=new Set,u=[];for(let i of Array.isArray(N0)?N0:[]){let c=typeof i?.chat_jid==="string"?i.chat_jid.trim():"";if(!c||c===z0||F.has(c))continue;if(!(typeof i?.agent_name==="string"?i.agent_name.trim():""))continue;F.add(c),u.push(i)}return u},[N0,z0]),A_=z1.length>0,E_=A_&&typeof M0==="function",k_=A_&&typeof g0==="function",s_=Boolean(r0||K1.current),$_=!j&&typeof i0==="function"&&!s_,i1=!j&&typeof b0==="function",M_=!j&&typeof s0==="function"&&!v1,Y4=!j&&(E_||k_||$_||i1||M_),H1=E||"",a_=J&&A?` (${A})`:"",b4=a_.trim()?`${A}`:"",g4=typeof k?.hint_short==="string"?k.hint_short.trim():"",I_=[b4||null,g4||null].filter(Boolean).join(" • "),m4=[H1?`Current model: ${H1}${a_}`:null,k?.plan?`Plan: ${k.plan}`:null,g4||null,k?.primary?.reset_description||null,k?.secondary?.reset_description||null].filter(Boolean),Y5=R0?"Switching model…":m4.join(" • ")||`Current model: ${H1}${a_} (tap to open model picker)`,b_=(F)=>{if(!F||typeof F!=="object")return;let u=F.model??F.current;if(typeof R==="function")R({model:u??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(u&&typeof t==="function")t(u)},g_=(F)=>{let u=F||$1.current;if(!u)return;u.style.height="auto",u.style.height=`${u.scrollHeight}px`,u.style.overflowY="hidden"},H4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){V0(!1),m0([]);return}let u=F.toLowerCase().split(" ")[0];if(u.length<1){V0(!1),m0([]);return}let i=MY.filter((c)=>c.name.startsWith(u)||c.name.replace(/-/g,"").startsWith(u.replace(/-/g,"")));if(i.length>0&&!(i.length===1&&i[0].name===u))k0(!1),G0([]),m0(i),M1(0),V0(!0);else V0(!1),m0([])},m_=(F)=>{let u=h0,i=u.indexOf(" "),c=i>=0?u.slice(i):"",I0=F.name+c;_1(I0),V0(!1),m0([]),requestAnimationFrame(()=>{let J1=$1.current;if(!J1)return;let P1=I0.length;J1.selectionStart=P1,J1.selectionEnd=P1,J1.focus()})},h4=(F)=>{if(Z$(F)==null){k0(!1),G0([]);return}let u=f2(h1,F,{currentChatJid:z0});if(u.length>0&&!(u.length===1&&Y$(u[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))V0(!1),m0([]),G0(u),P0(0),k0(!0);else k0(!1),G0([])},h_=(F)=>{let u=Y$(F?.agent_name);if(!u)return;_1(u),k0(!1),G0([]),requestAnimationFrame(()=>{let i=$1.current;if(!i)return;let c=u.length;i.selectionStart=c,i.selectionEnd=c,i.focus()})},T_=()=>{if(j||!E_&&!k_&&!$_&&!i1&&!M_)return!1;return x1.current={value:"",updatedAt:0},v0(!1),V0(!1),m0([]),k0(!1),G0([]),j0(!0),!0},I1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!E_&&!k_&&!$_&&!i1&&!M_)return;if(J0){x1.current={value:"",updatedAt:0},j0(!1);return}T_()},J4=(F)=>{let u=typeof F==="string"?F.trim():"";if(j0(!1),!u||u===z0){requestAnimationFrame(()=>$1.current?.focus());return}M0?.(u)},O4=async(F)=>{let u=typeof F==="string"?F.trim():"";if(j0(!1),!u||typeof g0!=="function"){requestAnimationFrame(()=>$1.current?.focus());return}try{await g0(u)}catch(i){console.warn("Failed to restore session:",i),requestAnimationFrame(()=>$1.current?.focus())}},p4=(F)=>{let i=(Array.isArray(F)?F:[]).findIndex((c)=>!c?.disabled);return i>=0?i:0},W1=w0(()=>{let F=[];for(let u of z1){let i=Boolean(u?.archived_at),c=typeof u?.agent_name==="string"?u.agent_name.trim():"",I0=typeof u?.chat_jid==="string"?u.chat_jid.trim():"";if(!c||!I0)continue;F.push({type:"session",key:`session:${I0}`,label:`@${c} — ${I0}${u?.is_active?" active":""}${i?" archived":""}`,chat:u,disabled:i?!k_:!E_})}if(i1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if($_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:s_});if(M_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[z1,k_,E_,i1,$_,M_,s_]),D4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof i0!=="function"||r0||K1.current)return;K1.current=!0,j0(!1);try{await i0()}catch(u){console.warn("Failed to rename session:",u)}finally{K1.current=!1}requestAnimationFrame(()=>$1.current?.focus())},q5=async()=>{if(typeof b0!=="function")return;j0(!1);try{await b0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>$1.current?.focus())},b1=async()=>{if(typeof s0!=="function")return;j0(!1);try{await s0(z0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>$1.current?.focus())},G_=(F)=>{if(j)Z_(F);else _1(F),H4(F),h4(F);requestAnimationFrame(()=>g_())},t_=(F)=>{let u=j?Q1:h0,i=u&&!u.endsWith(`
`)?`
`:"",c=`${u}${i}${F}`.trimStart();G_(c)},c4=(F)=>{let u=F?.command?.model_label;if(u)return u;let i=F?.command?.message;if(typeof i==="string"){let c=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(c?.[1])return c[1].trim()}return null},q4=async(F)=>{if(j||R0)return;l0(!0);try{let u=await o4("default",F,null,[],null,z0),i=c4(u);b_({model:i??E??null,thinking_level:u?.command?.thinking_level,supports_thinking:u?.command?.supports_thinking});try{let c=await d5(z0);if(c)b_(c)}catch{}return _?.(),!0}catch(u){return console.error("Failed to switch model:",u),alert("Failed to switch model: "+u.message),!1}finally{l0(!1)}},A4=async()=>{await q4("/cycle-model")},G4=async(F)=>{if(!F||R0)return;if(await q4(`/model ${F}`))v0(!1)},C_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let u=F.chat;if(u?.archived_at)O4(u.chat_jid);else J4(u.chat_jid);return}if(F.type==="action"){if(F.action==="new"){q5();return}if(F.action==="rename"){D4();return}if(F.action==="delete")b1()}},W_=(F)=>{F.preventDefault(),F.stopPropagation(),x1.current={value:"",updatedAt:0},j0(!1),v0((u)=>!u)},E4=async()=>{if(j)return;M?.(),await P_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},l4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return X0?"queue":void 0},P_=async(F,u,i={})=>{let{includeMedia:c=!0,includeFileRefs:I0=!0,includeMessageRefs:J1=!0,clearAfterSubmit:P1=!0,recordHistory:w1=!0}=i||{},K4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:h0,n4=typeof K4==="string"?K4:"";if(!n4.trim()&&(c?D1.length===0:!0)&&(I0?X.length===0:!0)&&(J1?V.length===0:!0))return;V0(!1),m0([]),k0(!1),G0([]),j0(!1),t1(null);let G5=c?[...D1]:[],K5=I0?[...X]:[],K_=J1?[...V]:[],c1=n4.trim();if(w1&&c1){let k4=p0.current,U1=u_(k4.filter((e_)=>e_!==c1));if(U1.push(c1),U1.length>200)U1.splice(0,U1.length-200);p0.current=U1,q_(U1),T1.current=-1,O_.current=""}let X5=()=>{if(c)t0([...G5]);if(I0)A0?.(K5);if(J1)d0?.(K_);_1(c1),requestAnimationFrame(()=>g_())};if(P1)_1(""),t0([]),N?.(),O?.();(async()=>{try{if(await _0?.({content:c1,submitMode:u,fileRefs:K5,messageRefs:K_,mediaFiles:G5})){_?.();return}let U1=[];for(let U_ of G5){let I4=await c6(U_);U1.push(I4.id)}let e_=K5.length?`Files:
${K5.map((U_)=>`- ${U_}`).join(`
`)}`:"",N5=K_.length?`Referenced messages:
${K_.map((U_)=>`- message:${U_}`).join(`
`)}`:"",L8=U1.length?`Attachments:
${U1.map((U_,I4)=>{let L6=G5[I4]?.name||`attachment-${I4+1}`;return`- attachment:${U_} (${L6})`}).join(`
`)}`:"",S_=[c1,e_,N5,L8].filter(Boolean).join(`

`),M4=await o4("default",S_,null,U1,l4(u),z0);if(e?.(M4),M4?.command){b_({model:M4.command.model_label??E??null,thinking_level:M4.command.thinking_level,supports_thinking:M4.command.supports_thinking});try{let U_=await d5(z0);if(U_)b_(U_)}catch{}}_?.()}catch(k4){if(P1)X5();let U1=k4?.message||"Failed to send message.";t1(U1),x0?.(U1),console.error("Failed to post:",k4)}})()},z=(F)=>{Q0?.(F)},I=P((F)=>{if(j||!O0&&!J0||F?.isComposing)return!1;let u=()=>{F.preventDefault?.(),F.stopPropagation?.()},i=()=>{x1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(u(),i(),O0)v0(!1);if(J0)j0(!1);return!0}if(O0){if(F.key==="ArrowDown"){if(u(),i(),y.length>0)E0((c)=>(c+1)%y.length);return!0}if(F.key==="ArrowUp"){if(u(),i(),y.length>0)E0((c)=>(c-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return u(),i(),G4(y[Math.max(0,Math.min(L0,y.length-1))]),!0;if($$(F)&&y.length>0){u();let c=j$(x1.current,F.key);x1.current=c;let I0=Q$(y,c.value,L0,(J1)=>J1);if(I0>=0)E0(I0);return!0}}if(J0){if(F.key==="ArrowDown"){if(u(),i(),W1.length>0)Y1((c)=>(c+1)%W1.length);return!0}if(F.key==="ArrowUp"){if(u(),i(),W1.length>0)Y1((c)=>(c-1+W1.length)%W1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&W1.length>0)return u(),i(),C_(W1[Math.max(0,Math.min(u0,W1.length-1))]),!0;if($$(F)&&W1.length>0){u();let c=j$(x1.current,F.key);x1.current=c;let I0=Q$(W1,c.value,u0,(J1)=>J1.label);if(I0>=0)Y1(I0);return!0}}return!1},[j,O0,J0,y,L0,W1,u0,G4]),w=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),Z_(""),G?.();return}if(I(F))return;let u=$1.current?.value??(j?Q1:h0);if(u2(F,u,{searchMode:j,showSessionSwitcherButton:Y4})){F.preventDefault(),T_();return}if(f0&&F0.length>0){let i=$1.current?.value??(j?Q1:h0);if(!String(i||"").match(/^@([a-zA-Z0-9_-]*)$/))k0(!1),G0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),P0((c)=>(c+1)%F0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),P0((c)=>(c-1+F0.length)%F0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),h_(F0[y0]);return}if(F.key==="Escape"){F.preventDefault(),k0(!1),G0([]);return}}}if(s&&Z1.length>0){let i=$1.current?.value??(j?Q1:h0);if(!String(i||"").startsWith("/"))V0(!1),m0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),M1((c)=>(c+1)%Z1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),M1((c)=>(c-1+Z1.length)%Z1.length);return}if(F.key==="Tab"){F.preventDefault(),m_(Z1[S1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!u.includes(" ")){F.preventDefault();let I0=Z1[S1];V0(!1),m0([]),P_(I0.name);return}}if(F.key==="Escape"){F.preventDefault(),V0(!1),m0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let i=$1.current;if(!i)return;let c=i.value||"",I0=i.selectionStart===0&&i.selectionEnd===0,J1=i.selectionStart===c.length&&i.selectionEnd===c.length;if(F.key==="ArrowUp"&&I0||F.key==="ArrowDown"&&J1){let P1=p0.current;if(!P1.length)return;F.preventDefault();let w1=T1.current;if(F.key==="ArrowUp"){if(w1===-1)O_.current=c,w1=P1.length-1;else if(w1>0)w1-=1;T1.current=w1,G_(P1[w1]||"")}else{if(w1===-1)return;if(w1<P1.length-1)w1+=1,T1.current=w1,G_(P1[w1]||"");else T1.current=-1,G_(O_.current||""),O_.current=""}requestAnimationFrame(()=>{let K4=$1.current;if(!K4)return;let n4=K4.value.length;K4.selectionStart=n4,K4.selectionEnd=n4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(u.trim())Z?.(u.trim(),Q)}else P_(u,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(u.trim())Z?.(u.trim(),Q)}else P_(u)},f=(F)=>{let u=Array.from(F||[]).filter((i)=>i instanceof File&&!String(i.name||"").startsWith(".DS_Store"));if(!u.length)return;t0((i)=>[...i,...u]),t1(null)},r=(F)=>{f(F.target.files),F.target.value=""},Z0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current+=1,k1(!0)},W0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),E1.current=Math.max(0,E1.current-1),E1.current===0)k1(!1)},U0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";k1(!0)},$0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current=0,k1(!1),f(F.dataTransfer?.files||[])},T0=(F)=>{if(j)return;let u=F.clipboardData?.items;if(!u||!u.length)return;let i=[];for(let c of u){if(c.kind!=="file")continue;let I0=c.getAsFile?.();if(I0)i.push(I0)}if(i.length>0)F.preventDefault(),f(i)},R1=(F)=>{t0((u)=>u.filter((i,c)=>c!==F))},j_=()=>{t1(null),t0([]),N?.(),O?.()},p1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:u,longitude:i,accuracy:c}=F.coords,I0=`${u.toFixed(5)}, ${i.toFixed(5)}`,J1=Number.isFinite(c)?` ±${Math.round(c)}m`:"",P1=`https://maps.google.com/?q=${u},${i}`,w1=`Location: ${I0}${J1} ${P1}`;t_(w1)},(F)=>{let u=F?.message||"Unable to retrieve location.";alert(`Location error: ${u}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!O0)return;x1.current={value:"",updatedAt:0},G1(!0),d5(z0).then((F)=>{let u=Array.isArray(F?.models)?F.models.filter((i)=>typeof i==="string"&&i.trim().length>0):[];u.sort((i,c)=>i.localeCompare(c,void 0,{sensitivity:"base"})),a(u),b_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),a([])}).finally(()=>{G1(!1)})},[O0,E]),g(()=>{if(j)v0(!1),j0(!1),V0(!1),m0([]),k0(!1),G0([])},[j]),g(()=>{if(J0&&!Y4)j0(!1)},[J0,Y4]),g(()=>{if(!O0)return;let F=y.findIndex((u)=>u===E);E0(F>=0?F:0)},[O0,y,E]),g(()=>{if(!J0)return;Y1(p4(W1)),x1.current={value:"",updatedAt:0}},[J0,z0]),g(()=>{if(!O0)return;let F=(u)=>{let i=w_.current,c=j5.current,I0=u.target;if(i&&i.contains(I0))return;if(c&&c.contains(I0))return;v0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),g(()=>{if(!J0)return;let F=(u)=>{let i=f4.current,c=u1.current,I0=u.target;if(i&&i.contains(I0))return;if(c&&c.contains(I0))return;j0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[J0]),g(()=>{if(j||!O0&&!J0)return;let F=(u)=>{I(u)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,O0,J0,I]),g(()=>{if(!O0)return;let F=w_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,L0,y]),g(()=>{if(!J0)return;let F=f4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,u0,W1.length]),g(()=>{let F=()=>{let J1=B_.current?.clientWidth||0;Q4((P1)=>P1===J1?P1:J1)};F();let u=B_.current,i=0,c=()=>{if(i)cancelAnimationFrame(i);i=requestAnimationFrame(()=>{i=0,F()})},I0=null;if(u&&typeof ResizeObserver<"u")I0=new ResizeObserver(()=>c()),I0.observe(u);if(typeof window<"u")window.addEventListener("resize",c);return()=>{if(i)cancelAnimationFrame(i);if(I0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",c)}},[j,E,C1?.agent_name,Y4,D?.percent]);let w5=(F)=>{let u=F.target.value;if(t1(null),J0)j0(!1);g_(F.target),G_(u)};return g(()=>{requestAnimationFrame(()=>g_())},[h0,Q1,j]),g(()=>{if(!v_)return;Y_(Date.now());let F=setInterval(()=>Y_(Date.now()),1000);return()=>clearInterval(F)},[v_,H0?.started_at,H0?.startedAt]),g(()=>{if(j)return;h4(h0)},[h1,z0,h0,j]),L`
        <div class="compose-box">
            ${e0&&!j&&L`
                <${G$}
                    items=${p}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${n}
                    onOpenFilePill=${S}
                />
            `}
            ${H0&&L`
                <div
                    class=${`compose-inline-status${v_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${R5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${y5}</span>
                        ${N1&&L`<span class="compose-inline-status-elapsed">${N1}</span>`}
                    </div>
                    ${R5&&L`<div class="compose-inline-status-detail">${R5}</div>`}
                </div>
            `}
            ${N_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${N_}</div>
            `}
            <div
                class=${`compose-input-wrapper${g1?" drag-active":""}`}
                onDragEnter=${Z0}
                onDragOver=${U0}
                onDragLeave=${W0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${Z5&&L`
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
                            ${X.map((F)=>{let u=F.split("/").pop()||F;return L`
                                    <${l_}
                                        prefix="compose"
                                        label=${u}
                                        title=${F}
                                        onClick=${()=>S?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(F)}
                                    />
                                `})}
                            ${D1.map((F,u)=>{let i=F?.name||`attachment-${u+1}`;return L`
                                    <${l_}
                                        key=${i+u}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>R1(u)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${j_}
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
                        ref=${$1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Q1:h0}
                        onInput=${w5}
                        onKeyDown=${w}
                        onPaste=${T0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${f0&&F0.length>0&&L`
                        <div class="slash-autocomplete" ref=${Z4}>
                            ${F0.map((F,u)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${u===y0?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),h_(F)}}
                                    onMouseEnter=${()=>P0(u)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${s&&Z1.length>0&&L`
                        <div class="slash-autocomplete" ref=${d1}>
                            ${Z1.map((F,u)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${u===S1?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),m_(F)}}
                                    onMouseEnter=${()=>M1(u)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&L`
                        <div class="compose-model-popup" ref=${w_} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${A1&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!A1&&y.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!A1&&y.map((F,u)=>L`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${L0===u?" active":""}${E===F?" current-model":""}`}
                                        onClick=${()=>{G4(F)}}
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
                        <div class="compose-model-popup" ref=${f4} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return v2(C1,z0)})()}
                                    </div>
                                `}
                                ${!A_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${A_&&z1.map((F,u)=>{let i=Boolean(F.archived_at),I0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!i&&typeof s0==="function",J1=m8(F,{currentChatJid:z0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${i?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${i?" archived":""}${u0===u?" active":""}`}
                                                onClick=${()=>{if(i){O4(F.chat_jid);return}J4(F.chat_jid)}}
                                                disabled=${i?!k_:!E_}
                                                title=${i?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${J1}
                                            </button>
                                            ${I0&&L`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(P1)=>{P1.stopPropagation(),j0(!1),s0(F.chat_jid)}}
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
                            ${(i1||$_||M_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${i1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${W1.findIndex((F)=>F.key==="action:new")===u0?" active":""}`}
                                            onClick=${()=>{q5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${$_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${W1.findIndex((F)=>F.key==="action:rename")===u0?" active":""}`}
                                            onClick=${(F)=>{D4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${s_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${M_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${W1.findIndex((F)=>F.key==="action:delete")===u0?" active":""}`}
                                            onClick=${()=>{b1()}}
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
                <div class="compose-footer" ref=${B_}>
                    ${!j&&E&&L`
                    <div class="compose-meta-row">
                        ${!j&&E&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${j5}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${Y5}
                                    aria-label="Open model picker"
                                    onClick=${W_}
                                    disabled=${R0}
                                >
                                    ${R0?"Switching…":H1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!R0&&I_&&L`
                                        <span class="compose-model-usage-hint" title=${Y5}>
                                            ${I_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&L`
                            <${IY} usage=${D} onCompact=${E4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${Y4&&L`
                        ${C1?.agent_name&&L`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${C1.chat_jid||z0}
                                aria-label=${`Manage sessions for @${C1.agent_name}`}
                                onClick=${I1}
                            >@${C1.agent_name}</button>
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
                            onClick=${p1}
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
                    ${Q5&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${o_?" active":""}`}
                            onClick=${o}
                            title=${y1}
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
                                <span class="compose-connection-status connection-status ${D0}" title=${__}>
                                    ${D_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{P_()}}
                                    disabled=${!e1}
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
    `}var N$="piclaw_theme",l8="piclaw_tint",c2="piclaw_chat_themes",a5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},l2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},h2={default:{label:"Default",mode:"auto",light:a5,dark:l2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},SY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],s4={theme:"default",tint:null},n2="light",K$=!1;function n8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function A5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function xY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),G=parseInt(Z[3],10);if(![Y,q,G].every((K)=>Number.isFinite(K)))return null;let X=`#${[Y,q,G].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:G,hex:X}}function d2(_){return A5(_)||xY(_)}function s5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function X$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function yY(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function RY(_){return yY(_)>0.4?"#000000":"#ffffff"}function i2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function V$(_){return h2[_]||h2.default}function wY(_){return _.mode==="auto"?i2():_.mode}function r2(_,$){let j=V$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||a5}function o2(_,$,j){let Q=d2($);if(!Q)return _;let Z=A5(_.bgPrimary),Y=A5(_.bgSecondary),q=A5(_.bgHover),G=A5(_.borderColor);if(!Z||!Y||!q||!G)return _;let K=A5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:s5(Z,Q,0.08),bgSecondary:s5(Y,Q,0.12),bgHover:s5(q,Q,0.16),borderColor:s5(G,Q,0.08),accent:Q.hex,accentHover:K?s5(Q,K,0.18):Q.hex}}function fY(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=d2(Q),Y=Z?X$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?X$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Z?X$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X=Z?RY(Z):$==="dark"?"#000000":"#ffffff",K={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":G,"--accent-contrast-text":X,"--danger-color":_.danger||a5.danger,"--success-color":_.success||a5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(K).forEach(([N,V])=>{if(V)j.style.setProperty(N,V)})}function uY(){if(typeof document>"u")return;let _=document.documentElement;SY.forEach(($)=>_.style.removeProperty($))}function D5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function p2(_){let $=n8(s4?.theme||"default"),j=s4?.tint?String(s4.tint).trim():null,Q=r2($,_);if($==="default"&&j)Q=o2(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?l2.bgPrimary:a5.bgPrimary}function vY(_,$){if(typeof document>"u")return;let j=D5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=D5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",p2("light"));let Z=D5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",p2("dark"));let Y=D5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=D5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let G=D5("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function bY(){if(typeof window>"u")return;let _={...s4,mode:n2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function s2(){try{let _=F_(c2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function gY(_,$,j){let Q=s2();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};q1(c2,JSON.stringify(Q))}function mY(_){if(!_)return null;return s2()[_]||null}function a2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function B$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=n8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=V$(j),Y=wY(Z),q=r2(j,Y);s4={theme:j,tint:Q},n2=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=j,G.dataset.tint=Q?String(Q):"",G.style.colorScheme=Y;let X=q;if(j==="default"&&Q)X=o2(q,Q,Y);if(j==="default"&&!Q)uY();else fY(X,Y);if(vY(X.bgPrimary,Y),bY(),$.persist!==!1)if(q1(N$,j),Q)q1(l8,Q);else q1(l8,"")}function c8(){if(V$(s4.theme).mode!=="auto")return;B$(s4,{persist:!1})}function t2(){if(typeof window>"u")return()=>{};let _=a2(),$=mY(_),j=$?n8($.theme||"default"):n8(F_(N$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=F_(l8);return Z?Z.trim():null})();if(B$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!K$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",c8);else if(Z.addListener)Z.addListener(c8);return K$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",c8);else if(Z.removeListener)Z.removeListener(c8);K$=!1}}return()=>{}}function e2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||a2(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(gY($,j||"default",Q),B$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")q1(N$,j||"default"),q1(l8,Q||"")}function _7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return i2()}var d8=/#(\w+)/g,hY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),pY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),cY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),lY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},nY=new Set(["http:","https:","mailto:",""]);function W$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function a4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!nY.has(Q.protocol))return null;return Q.href}catch{return null}}function $7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let G=q.tagName.toLowerCase();if(!pY.has(G)){let K=q.parentNode;if(!K)continue;while(q.firstChild)K.insertBefore(q.firstChild,q);K.removeChild(q);continue}let X=lY[G]||new Set;for(let K of Array.from(q.attributes)){let N=K.name.toLowerCase(),V=K.value;if(N.startsWith("on")){q.removeAttribute(K.name);continue}if(N.startsWith("data-")||N.startsWith("aria-"))continue;if(X.has(N)||cY.has(N)){if(N==="href"){let B=a4(V);if(!B)q.removeAttribute(K.name);else if(q.setAttribute(K.name,B),G==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(N==="src"){let B=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,O=a4(B,{allowDataImage:G==="img"});if(!O)q.removeAttribute(K.name);else q.setAttribute(K.name,O)}continue}q.removeAttribute(K.name)}}return j.body.innerHTML}function j7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function i8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=j7(j);if(Z===j)break;j=Z}return j}function dY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let G of j){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let X=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${X}@@`),Y=!1,q=[];continue}if(Y)q.push(G);else Z.push(G)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function iY(_){if(!_)return _;return i8(_,5)}function rY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function oY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function sY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=iY(Y);return`<div class="mermaid-container" data-mermaid="${rY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function Q7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var aY={span:new Set(["title","class","lang","dir"])};function tY(_,$){let j=aY[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let G=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${W$(G)}"`)}return Q.join("")}function Z7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,G=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[X=""]=G.split(/\s+/,1),K=X.toLowerCase();if(!K||!hY.has(K))return $;if(K==="br")return Z?"":"<br>";if(Z)return`</${K}>`;let N=G.slice(X.length).trim(),V=tY(K,N);return`<${K}${V}>`})}function Y7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function q7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function eY(_){if(!window.katex)return _;let $=(q)=>j7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let G=[],X=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let N=G.length;return G.push(K),`@@CODE_BLOCK_${N}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let N=G.length;return G.push(K),`@@CODE_INLINE_${N}@@`}),{html:X,blocks:G}},Q=(q,G)=>{if(!G.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,K)=>{let N=Number(K);return G[N]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,G,X)=>{try{let K=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${G}${K}`}catch(K){return`<span class="math-error" title="${W$(K.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,G,X)=>{if(/\s$/.test(X))return q;try{let K=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${G}${K}`}catch(K){return`${G}<span class="math-error" title="${W$(K.message)}">$${X}$</span>`}}),Q(Y,Z.blocks)}function _q(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(d8.lastIndex=0,!d8.test(q))continue;d8.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let X=q.split(d8);if(X.length<=1)continue;let K=$.createDocumentFragment();X.forEach((N,V)=>{if(V%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",N),B.textContent=`#${N}`,K.appendChild(B)}else K.appendChild($.createTextNode(N))}),Y.parentNode?.replaceChild(K,Y)}return $.body.innerHTML}function $q(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function jq(_){let $=$q(_||""),{text:j,blocks:Q}=dY($),Z=i8(j,2),q=Q7(Z).replace(/</g,"&lt;");return{safeHtml:Z7(q),mermaidBlocks:Q}}function z_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=jq(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=Y7(Y),Y=q7(Y),Y=eY(Y),Y=_q(Y),Y=sY(Y,Z),Y=$7(Y,j),Y}function t5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=i8($,2),Z=Q7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=Z7(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=Y7(q),q=q7(q),q=$7(q),q}function Qq(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((X)=>{let[K,N]=X.split(",").map(Number);return{x:K,y:N}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let G=[`M ${q[0].x},${q[0].y}`];for(let X=1;X<q.length-1;X++){let K=q[X-1],N=q[X],V=q[X+1],B=N.x-K.x,O=N.y-K.y,E=V.x-N.x,k=V.y-N.y,A=Math.sqrt(B*B+O*O),J=Math.sqrt(E*E+k*k),D=Math.min($,A/2,J/2);if(D<0.5){G.push(`L ${N.x},${N.y}`);continue}let M=N.x-B/A*D,d=N.y-O/A*D,h=N.x+E/J*D,o=N.y+k/J*D,R=B*k-O*E>0?1:0;G.push(`L ${M},${d}`),G.push(`A ${D},${D} 0 0 ${R} ${h},${o}`)}return G.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${G.join(" ")}"${Y}/>`})}async function V4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=_7()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let G=q.dataset.mermaid,X=oY(G||""),K=i8(X,2),N=await $(K,{...Z,transparent:!0});N=Qq(N),q.innerHTML=N,q.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${G.message}`,q.innerHTML="",q.appendChild(X),q.removeAttribute("data-mermaid")}}function G7(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function K7(_){return String(_||"").trim()||"web:default"}function X7(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function N7(_){if(!_)return!1;return _.status!=="running"}function V7(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function B7({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=C(null),Y=C(null),q=_?.thinking?t5(_.thinking):"",G=_?.answer?z_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(Z.current&&q)V4(Z.current).catch(()=>{})},[q]),g(()=>{if(Y.current&&G)V4(Y.current).catch(()=>{})},[G]),!_)return null;let X=_.status==="running",K=Boolean(String(_.answer||"").trim()),N=Boolean(String(_.thinking||"").trim()),V=X7(_),B=N7(_),O=!X&&K,E=X?"Thinking…":_.status==="error"?"Error":"Done";return L`
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
    `}function Zq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function Yq(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function S4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function S0(_){return typeof _==="string"&&_.trim()?_.trim():null}function U7(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var L7="__PICLAW_WIDGET_HOST__:";function W7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function U$(_,$){if(!_||_.type!=="generated_widget")return null;let j=Zq(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:U7(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function F7(_){if(!_||typeof _!=="object")return null;let $=Yq(_),j=S0(_?.widget_id)||S0(_?.widgetId)||S0(_?.tool_call_id)||S0(_?.toolCallId),Q=S0(_?.tool_call_id)||S0(_?.toolCallId),Z=S0(_?.turn_id)||S0(_?.turnId),Y=S0(_?.title)||S0(_?.name)||"Generated widget",q=S0(_?.subtitle)||"",G=S0(_?.description)||q,X=S0(_?.status),K=X==="loading"||X==="streaming"||X==="final"||X==="error"?X:"streaming";return{title:Y,subtitle:q,description:G,originPostId:S4(_?.origin_post_id)??S4(_?.originPostId),originChatJid:S0(_?.origin_chat_jid)||S0(_?.originChatJid)||S0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:U7(_?.capabilities,!0),source:"live",status:K,turnId:Z,toolCallId:Q,width:S4(_?.width),height:S4(_?.height),error:S0(_?.error)}}function z7(_){return U$(_,null)!==null}function H_(_){let $=S0(_?.toolCallId)||S0(_?.tool_call_id);if($)return $;let j=S0(_?.widgetId)||S0(_?.widget_id);if(j)return j;let Q=S4(_?.originPostId)??S4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function H7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function J7(_){return H7(_)?"allow-downloads allow-scripts":"allow-downloads"}function r8(_){return{title:S0(_?.title)||"Generated widget",widgetId:S0(_?.widgetId)||S0(_?.widget_id),toolCallId:S0(_?.toolCallId)||S0(_?.tool_call_id),turnId:S0(_?.turnId)||S0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:S0(_?.status)||"final"}}function o8(_){return{...r8(_),subtitle:S0(_?.subtitle)||"",description:S0(_?.description)||"",error:S0(_?.error)||null,width:S4(_?.width),height:S4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function s8(_){return`${L7}${JSON.stringify(o8(_))}`}function O7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=S0(_.text)||S0(_.content)||S0(_.message)||S0(_.prompt)||S0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=S0(j.text)||S0(j.content)||S0(j.message)||S0(j.prompt)||S0(j.value);if(Q)return Q}return null}function D7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function A7(_){let $=S0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return S0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function qq(_){let $=r8(_);return`<script>
(function () {
  const meta = ${W7($)};
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

  const windowNamePrefix = ${W7(L7)};
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
</script>`}function E7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let G=H7(_),X=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",G?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,N=G?qq(_):"";return`<!doctype html>
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
</html>`}function k7({widget:_,onClose:$,onWidgetEvent:j}){let Q=C(null),Z=C(!1),Y=w0(()=>E7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let J=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),g(()=>{Z.current=!1},[Y]),g(()=>{if(!_)return;let J=Q.current;if(!J)return;let D=(t)=>{let R=s8(_),x=t==="widget.init"?r8(_):o8(_);try{J.name=R}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:t,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x},"*")}catch{}},M=()=>{D("widget.init"),D("widget.update")},d=()=>{Z.current=!0,M()};J.addEventListener("load",d);let o=[0,40,120,300,800].map((t)=>setTimeout(M,t));return()=>{J.removeEventListener("load",d),o.forEach((t)=>clearTimeout(t))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let J=Q.current;if(!J?.contentWindow)return;let D=s8(_),M=o8(_);try{J.name=D}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let J=(D)=>{let M=D?.data;if(!M||M.__piclawGeneratedWidget!==!0)return;let d=Q.current,h=H_(_),o=H_({widgetId:M.widgetId,toolCallId:M.toolCallId});if(o&&h&&o!==h)return;if(!o&&d?.contentWindow&&D.source!==d.contentWindow)return;j?.(M,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let G=(_?.artifact||{}).kind||_?.kind||"html",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",N=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=N==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",E=!Y,k=A7(_),A=J7(_);return L`
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
                                name=${s8(_)}
                                sandbox=${A}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var M7="PiClaw";function L$(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,G=Y[q],X=Q.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",N=K?K:null,V=j||X==="PiClaw".toLowerCase()||X==="pi";return{letter:Z,color:G,image:N||(V?"/static/icon-192.png":null)}}function I7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function T7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function C7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",X=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(X&&(G||q&&q!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var Gq=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function F$({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:G=new Set,onExtensionPanelAction:X,turnId:K,steerQueued:N,onPanelToggle:V,showCorePanels:B=!0,showExtensionPanels:O=!0}){let A=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let y0=s,P0=y0?y0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y0,totalLines:P0,fullText:y0}}let V0=s.text||"",F0=s.fullText||s.full_text||V0,G0=Number.isFinite(s.totalLines)?s.totalLines:F0?F0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:V0,totalLines:G0,fullText:F0}},J=160,D=(s)=>String(s||"").replace(/<\/?internal>/gi,""),M=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},d=(s,V0,F0)=>{let G0=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!G0)return{text:"",omitted:0,totalLines:Number.isFinite(F0)?F0:0,visibleLines:0};let y0=G0.split(`
`),P0=y0.length>V0?y0.slice(0,V0).join(`
`):G0,f0=Number.isFinite(F0)?F0:y0.reduce((l0,O0)=>l0+M(O0),0),k0=P0?P0.split(`
`).reduce((l0,O0)=>l0+M(O0),0):0,R0=Math.max(f0-k0,0);return{text:P0,omitted:R0,totalLines:f0,visibleLines:k0}},h=A(j),o=A(Q),t=A($),R=Boolean(h.text)||h.totalLines>0,x=Boolean(o.text)||o.totalLines>0,H=Boolean(t.fullText?.trim()||t.text?.trim()),S=Boolean(_||H||R||x||Z||Y),p=Array.isArray(q)&&q.length>0;if((!B||!S)&&(!O||!p))return null;let[Q0,n]=m(new Set),[_0,e]=m(null),[Y0,X0]=m(()=>Date.now()),N0=(s)=>n((V0)=>{let F0=new Set(V0),G0=!F0.has(s);if(G0)F0.add(s);else F0.delete(s);if(typeof V==="function")V(s,G0);return F0});g(()=>{n(new Set),e(null)},[K]);let z0=N4(_);g(()=>{if(!z0)return;X0(Date.now());let s=setInterval(()=>X0(Date.now()),1000);return()=>clearInterval(s)},[z0,_?.started_at,_?.startedAt]);let D0=_?.turn_id||K,A0=C7(D0),d0=N?"turn-dot turn-dot-queued":"turn-dot",x0=(s)=>s,M0=Boolean(_?.last_activity||_?.lastActivity),i0=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":A0,r0=Y?.kind||"info",b0=i0(r0),s0=i0(_?.kind||(z0?"warning":"info")),g0="",e0=_?.title,H0=_?.status;if(_?.type==="plan")g0=e0?`Planning: ${e0}`:"Planning...";else if(_?.type==="tool_call")g0=e0?`Running: ${e0}`:"Running tool...";else if(_?.type==="tool_status")g0=e0?`${e0}: ${H0||"Working..."}`:H0||"Working...";else if(_?.type==="error")g0=e0||"Agent error";else g0=e0||H0||"Working...";if(M0)g0="Last activity just now";let h0=({panelTitle:s,text:V0,fullText:F0,totalLines:G0,maxLines:y0,titleClass:P0,panelKey:f0})=>{let k0=Q0.has(f0),R0=F0||V0||"",l0=f0==="thought"||f0==="draft"?D(R0):R0,O0=typeof y0==="number",v0=k0&&O0,J0=O0?d(l0,y0,G0):{text:l0||"",omitted:0,totalLines:Number.isFinite(G0)?G0:0};if(!l0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let j0=`agent-thinking-body${O0?" agent-thinking-body-collapsible":""}`,y=O0?`--agent-thinking-collapsed-lines: ${y0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${k0?"true":"false"}
                data-collapsible=${O0?"true":"false"}
                style=${A0?`--turn-color: ${A0};`:""}
            >
                <div class="agent-thinking-title ${P0||""}">
                    ${A0&&L`<span class=${d0} aria-hidden="true"></span>`}
                    ${s}
                    ${v0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>N0(f0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:t5(l0)}}
                />
                ${!k0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>N0(f0)}>
                        ▸ ${J0.omitted} more lines
                    </button>
                `}
                ${k0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>N0(f0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},_1=Z?.tool_call?.title,Q1=_1?`Awaiting approval: ${_1}`:"Awaiting approval",Z_=z0?p8(_,Y0):null,D1=(s,V0,F0=null)=>{let G0=h8(s);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${V0?`--turn-color: ${V0};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${V0&&L`<span class=${d0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${G0}</span>
                    ${F0&&L`<span class="agent-status-elapsed">${F0}</span>`}
                </div>
                ${s.detail&&L`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `},t0=(s,V0,F0,G0,y0,P0,f0,k0=8,R0=8)=>{let l0=Math.max(y0-G0,0.000000001),O0=Math.max(V0-k0*2,1),v0=Math.max(F0-R0*2,1),J0=Math.max(f0-P0,1),j0=f0===P0?V0/2:k0+(s.run-P0)/J0*O0,y=R0+(v0-(s.value-G0)/l0*v0);return{x:j0,y}},g1=(s,V0,F0,G0,y0,P0,f0,k0=8,R0=8)=>{if(!Array.isArray(s)||s.length===0)return"";return s.map((l0,O0)=>{let{x:v0,y:J0}=t0(l0,V0,F0,G0,y0,P0,f0,k0,R0);return`${O0===0?"M":"L"} ${v0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},k1=(s,V0="")=>{if(!Number.isFinite(s))return"—";return`${Math.abs(s)>=100?s.toFixed(0):s.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${V0}`},Z1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],m0=(s,V0)=>{let F0=Z1;if(!Array.isArray(F0)||F0.length===0)return"var(--accent-color)";if(F0.length===1||!Number.isFinite(V0)||V0<=1)return F0[0];let y0=Math.max(0,Math.min(Number.isFinite(s)?s:0,V0-1))/Math.max(1,V0-1)*(F0.length-1),P0=Math.floor(y0),f0=Math.min(F0.length-1,P0+1),k0=y0-P0,R0=F0[P0],l0=F0[f0];if(!l0||P0===f0||k0<=0.001)return R0;if(k0>=0.999)return l0;let O0=Math.round((1-k0)*1000)/10,v0=Math.round(k0*1000)/10;return`color-mix(in oklab, ${R0} ${O0}%, ${l0} ${v0}%)`},S1=(s,V0="autoresearch")=>{let F0=Array.isArray(s)?s.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((j0)=>j0.points.length>0):[],G0=F0.map((j0,y)=>({...j0,color:m0(y,F0.length)}));if(G0.length===0)return null;let y0=320,P0=120,f0=G0.flatMap((j0)=>j0.points),k0=f0.map((j0)=>j0.value),R0=f0.map((j0)=>j0.run),l0=Math.min(...k0),O0=Math.max(...k0),v0=Math.min(...R0),J0=Math.max(...R0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${G0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${y0} ${P0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${G0.map((j0)=>{let y=j0?.key||j0?.label||"series",a=_0?.panelKey===V0&&_0?.seriesKey===y;return L`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${a?" is-hovered":""}`}
                                        d=${g1(j0.points,y0,P0,l0,O0,v0,J0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>e({panelKey:V0,seriesKey:y})}
                                        onMouseLeave=${()=>e((L0)=>L0?.panelKey===V0&&L0?.seriesKey===y?null:L0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${G0.flatMap((j0)=>{let y=typeof j0?.unit==="string"?j0.unit:"",a=j0?.key||j0?.label||"series";return j0.points.map((L0,E0)=>{let u0=t0(L0,y0,P0,l0,O0,v0,J0);return L`
                                    <button
                                        key=${`${a}-point-${E0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${u0.x/y0*100}%; top:${u0.y/P0*100}%;`}
                                        onMouseEnter=${()=>e({panelKey:V0,seriesKey:a,run:L0.run,value:L0.value,unit:y})}
                                        onMouseLeave=${()=>e((Y1)=>Y1?.panelKey===V0?null:Y1)}
                                        onFocus=${()=>e({panelKey:V0,seriesKey:a,run:L0.run,value:L0.value,unit:y})}
                                        onBlur=${()=>e((Y1)=>Y1?.panelKey===V0?null:Y1)}
                                        aria-label=${`${j0?.label||"Series"} ${k1(L0.value,y)} at run ${L0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${G0.map((j0)=>{let y=j0.points[j0.points.length-1]?.value,a=typeof j0?.unit==="string"?j0.unit:"",L0=j0?.key||j0?.label||"series",E0=_0?.panelKey===V0&&_0?.seriesKey===L0?_0:null,u0=E0&&Number.isFinite(E0.value)?E0.value:y,Y1=E0&&typeof E0.unit==="string"?E0.unit:a,A1=E0&&Number.isFinite(E0.run)?E0.run:null;return L`
                            <div key=${`${L0}-legend`} class=${`agent-series-legend-item${E0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${A1!==null&&L`<span class="agent-series-legend-run">run ${A1}</span>`}
                                <span class="agent-series-legend-value">${k1(u0,Y1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},M1=(s)=>{if(!s)return null;let V0=typeof s?.key==="string"?s.key:`panel-${Math.random()}`,F0=Q0.has(V0),G0=s?.title||"Extension status",y0=s?.collapsed_text||"",P0=String(s?.state||"").replace(/[-_]+/g," ").replace(/^./,(a)=>a.toUpperCase()),f0=i0(s?.state==="completed"?"success":s?.state==="failed"?"error":s?.state==="stopped"?"warning":"info"),k0=typeof s?.detail_markdown==="string"?s.detail_markdown.trim():"",R0=typeof s?.last_run_text==="string"?s.last_run_text.trim():"",l0=typeof s?.tmux_command==="string"?s.tmux_command.trim():"",O0=Array.isArray(s?.series)?s.series:[],v0=Array.isArray(s?.actions)?s.actions:[],J0=Boolean(k0||l0),j0=Boolean(k0||O0.length>0||l0),y=[G0,y0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${F0?"true":"false"}
                style=${f0?`--turn-color: ${f0};`:""}
                title=${!F0?y||G0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?N0(V0):null}
                    >
                        ${f0&&L`<span class=${d0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${G0}</span>
                        ${y0&&L`<span class="agent-thinking-title-meta">${y0}</span>`}
                    </button>
                    ${(v0.length>0||j0&&!F0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${v0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${v0.map((a)=>{let L0=`${V0}:${a?.key||""}`,E0=G?.has?.(L0);return L`
                                            <button
                                                key=${L0}
                                                class=${`agent-thinking-action-btn${a?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>X?.(s,a)}
                                                disabled=${Boolean(E0)}
                                            >
                                                ${E0?"Working…":a?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!F0&&L`
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
                ${j0&&F0&&L`
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
                ${F0&&L`
                    <div class=${`agent-thinking-autoresearch-layout${J0?"":" chart-only"}`}>
                        ${J0&&L`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${k0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:t5(k0)}}
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
                                                onClick=${()=>X?.(s,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
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
                                    ${S1(O0,V0)}
                                    ${R0&&L`<div class="agent-series-chart-note">${R0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${B&&Y&&D1(Y,b0)}
            ${O&&Array.isArray(q)&&q.map((s)=>M1(s))}
            ${B&&_?.type==="intent"&&D1(_,s0,Z_)}
            ${B&&Z&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${A0?`--turn-color: ${A0};`:""}>
                    <span class=${d0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Q1}</span>
                </div>
            `}
            ${B&&R&&h0({panelTitle:x0("Planning"),text:h.text,fullText:h.fullText,totalLines:h.totalLines,panelKey:"plan"})}
            ${B&&x&&h0({panelTitle:x0("Thoughts"),text:o.text,fullText:o.fullText,totalLines:o.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&H&&h0({panelTitle:x0("Draft"),text:t.text,fullText:t.fullText,totalLines:t.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${M0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${A0?`--turn-color: ${A0};`:""}>
                    ${A0&&L`<span class=${d0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!M0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${g0}</span>
                </div>
            `}
        </div>
    `}function P7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",G=Q?.kind||"other",X=Q?.rawInput||{},K=X.command||X.commands&&X.commands[0]||null,N=X.diff||null,V=X.fileName||X.path||null,B=Q?.description||X.description||X.explanation||null,E=(Array.isArray(Q?.locations)?Q.locations:[]).map((M)=>M?.path).filter((M)=>Boolean(M)),k=Array.from(new Set([V,...E].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let A=async(M)=>{try{await x8(j,M,Y||null),$()}catch(d){console.error("Failed to respond to agent request:",d)}},J=async()=>{try{await n6(q,`Auto-approved: ${q}`),await x8(j,"approved",Y||null),$()}catch(M){console.error("Failed to add to whitelist:",M)}},D=Z&&Z.length>0;return L`
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
    `}function S7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let X=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${K}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${G}`}function e5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function R_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function t4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var Kq=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),Xq=new Set(["text/markdown"]),Nq=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),Vq=new Set(["application/vnd.jgraph.mxfile"]);function _8(_){return typeof _==="string"?_.trim().toLowerCase():""}function Bq(_){let $=_8(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function Wq(_){let $=_8(_);return!!$&&$.endsWith(".pdf")}function Uq(_){let $=_8(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function $8(_,$){let j=_8(_);if(Bq($)||Vq.has(j))return"drawio";if(Wq($)||j==="application/pdf")return"pdf";if(Uq($)||Nq.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(Kq.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function x7(_){let $=_8(_);return Xq.has($)}function y7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function Lq(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function Fq(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function R7(_){return Lq(_)||Fq(_)}function a8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function zq(_,$){let j=Math.max(a8(_),a8($)),Q=Math.min(a8(_),a8($));return(j+0.05)/(Q+0.05)}function Hq(_,$,j="#ffffff"){let Q=R7(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let G=R7(q);if(!G)continue;let X=zq(Q,G);if(X>Y)Z=q,Y=X}return Z}function z$(){let _=getComputedStyle(document.documentElement),$=(E,k)=>{for(let A of E){let J=_.getPropertyValue(A).trim();if(J)return J}return k},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),N=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),O=Hq(G,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:G,good:X,warning:K,attention:N,border:V,fontFamily:B,buttonTextColor:O}}function w7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:G,border:X,fontFamily:K}=z$();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Jq=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),f7=!1,t8=null,u7=!1;function H$(_){_.querySelector(".adaptive-card-notice")?.remove()}function Oq(_,$,j="error"){H$(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function Dq(_,$=(j)=>z_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Aq(_=($)=>z_($,null)){return($,j)=>{try{let Q=Dq($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function Eq(_){if(u7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Aq(),u7=!0}async function kq(){if(f7)return;if(t8)return t8;return t8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{f7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),t8}function Mq(){return globalThis.AdaptiveCards}function Iq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Tq(_){return Jq.has(_)}function O$(_){if(!Array.isArray(_))return[];return _.filter(Iq)}function Cq(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function J$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>J$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${J$(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Pq(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return J$($);return typeof $==="string"?$:String($)}function Sq(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((G)=>Q(G));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=Pq(q.type,j[q.id],q);for(let[G,X]of Object.entries(q))if(Array.isArray(X)||X&&typeof X==="object")q[G]=Q(X);return q};return Q(_)}function xq(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function yq(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Rq(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=yq(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function v7(_,$,j){if(!Tq($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await kq()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=Mq();Eq(Q);let Z=new Q.AdaptiveCard,Y=z$();Z.hostConfig=new Q.HostConfig(w7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:Sq($.payload,q);Z.parse(G),Z.onExecuteAction=(N)=>{let V=Cq(N);if(j?.onAction)H$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let O=B instanceof Error?B.message:String(B||"Action failed.");Oq(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let X=Z.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let K=Rq($);if(K){_.classList.add("adaptive-card-finished");let N=document.createElement("div");N.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=K.label,N.appendChild(V),K.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=K.detail,N.appendChild(B)}_.appendChild(N)}if(H$(_),_.appendChild(X),K)xq(X);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function j8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>j8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${j8(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function b7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:j8(j)})).filter(($)=>$.value)}function wq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function D$(_){if(!Array.isArray(_))return[];return _.filter(wq)}function g7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=j8(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=b7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function m7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=b7(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):j8(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function E5({children:_,className:$=""}){let j=C(null);return g(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{P4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),l5(()=>{let Q=j.current;if(!Q)return;return P4(_,Q),()=>{P4(null,Q)}},[_]),null}function fq(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?R_($):null},{label:"Added",value:_?.created_at?t4(_.created_at):null}].filter((Q)=>Q.value)}function uq(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=y_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function h7({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=w0(()=>$8($?.content_type,Q),[$?.content_type,Q]),Y=y7(Z),q=w0(()=>x7($?.content_type),[$?.content_type]),[G,X]=m(Z==="text"),[K,N]=m(""),[V,B]=m(null),O=C(null),E=w0(()=>fq($),[$]),k=w0(()=>uq(_,Q,Z),[_,Q,Z]),A=w0(()=>{if(!q||!K)return"";return z_(K)},[q,K]);return g(()=>{let J=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!O.current||!A)return;V4(O.current);return},[A]),g(()=>{let J=!1;async function D(){if(Z!=="text"){X(!1),B(null);return}X(!0),B(null);try{let M=await o6(_);if(!J)N(M)}catch{if(!J)B("Failed to load text preview.")}finally{if(!J)X(!1)}}return D(),()=>{J=!0}},[_,Z]),L`
        <${E5} className="attachment-preview-portal-root">
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
                        ${G&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!G&&V&&L`<div class="attachment-preview-state">${V}</div>`}
                        ${!G&&!V&&Z==="image"&&L`
                            <img class="attachment-preview-image" src=${y_(_)} alt=${Q} />
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
        </${E5}>
    `}function p7({src:_,onClose:$}){return g(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${E5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${E5}>
    `}function vq({mediaId:_,onPreview:$}){let[j,Q]=m(null);if(g(()=>{H5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?R_(Y):"",X=$8(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
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
                onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${X}
            </button>
        </div>
    `}function bq({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=m(null);g(()=>{if(!Number.isFinite(j))return;H5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?y_(j):null,X=$8(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Y}>
            ${q?L`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(K)=>K.stopPropagation()}>
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
    `}function e8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?t4(Q):null;return L`
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
    `}function gq({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?R_(_.size):"",Z=_.mime_type||"",Y=pq(Z),q=a4(_.uri);return L`
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
    `}function mq({block:_}){let[$,j]=m(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
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
    `}function hq({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=U$(_,$),Z=z7(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",G=Q?.description||_.description||_.subtitle||"",X=_.open_label||"Open widget",K=(N)=>{if(N.preventDefault(),N.stopPropagation(),!Q)return;j?.(Q)};return L`
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
    `}function pq(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function cq({preview:_}){let $=a4(_.url),j=a4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return L`
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
    `}function lq(_,$){return typeof _==="string"?_:""}var nq=1800,dq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,iq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,rq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function oq(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function sq(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let G=q||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=iq,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=rq,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=dq,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Z(G,"idle"),q.appendChild(G);let X=async(K)=>{K.preventDefault(),K.stopPropagation();let V=Y.querySelector("code")?.textContent||"",B=await oq(V);Z(G,B?"success":"error");let O=j.get(G);if(O)clearTimeout(O);let E=setTimeout(()=>{Z(G,"idle"),j.delete(G)},nq);j.set(G,E)};G.addEventListener("click",X),Q.push(()=>{G.removeEventListener("click",X);let K=j.get(G);if(K)clearTimeout(K);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function aq(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K))Z.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),G=j.slice(Y),X=[...q,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:Z}}function tq(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K)){let V=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),G=j.slice(Y),X=[...q,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:Z}}function eq(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let K=0;K<j.length;K+=1){let N=j[K].trim();if((N==="Images:"||N==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Q=K;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K)){let N=K.replace(/^\s*-\s+/,"").trim(),V=N.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||N.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let B=V[1],O=(V[2]||"").trim()||B;Z.push({id:B,label:O,raw:N})}else Z.push({id:null,label:N,raw:N})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),G=j.slice(Y),X=[...q,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:Z}}function _G(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $G(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(_G).sort((N,V)=>V.length-N.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),G=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),X=[],K;while(K=G.nextNode())X.push(K);for(let N of X){let V=N.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=N.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let O=V.split(Z).filter((k)=>k!=="");if(O.length===0)continue;let E=q.createDocumentFragment();for(let k of O)if(Y.test(k)){let A=q.createElement("mark");A.className="search-highlight-term",A.textContent=k,E.appendChild(A)}else E.appendChild(q.createTextNode(k));N.parentNode.replaceChild(E,N)}return q.body.innerHTML}function c7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:G,userAvatarUrl:X,userAvatarBackground:K,onDelete:N,isThreadReply:V,isThreadPrev:B,isThreadNext:O,isRemoving:E,highlightQuery:k,onFileRef:A,onOpenWidget:J}){let[D,M]=m(null),d=C(null),h=_.data,o=h.type==="agent_response",t=G||"You",R=o?Y||M7:t,x=o?L$(Y,q,!0):L$(t,X),H=typeof K==="string"?K.trim().toLowerCase():"",S=!o&&x.image&&(H==="clear"||H==="transparent"),p=o&&Boolean(x.image),Q0=`background-color: ${S||p?"transparent":x.color}`,n=h.content_meta,_0=Boolean(n?.truncated),e=Boolean(n?.preview),Y0=_0&&!e,X0=_0?{originalLength:Number.isFinite(n?.original_length)?n.original_length:h.content?h.content.length:0,maxLength:Number.isFinite(n?.max_length)?n.max_length:0}:null,N0=h.content_blocks||[],z0=h.media_ids||[],D0=lq(h.content,h.link_previews),{content:A0,fileRefs:d0}=aq(D0),{content:x0,messageRefs:M0}=tq(A0),{content:i0,attachments:r0}=eq(x0);D0=i0;let b0=O$(N0),s0=D$(N0),g0=b0.length===1&&typeof b0[0]?.fallback_text==="string"?b0[0].fallback_text.trim():"",e0=s0.length===1?g7(s0[0]).trim():"",H0=Boolean(g0)&&D0?.trim()===g0||Boolean(e0)&&D0?.trim()===e0,h0=Boolean(D0)&&!Y0&&!H0,_1=typeof k==="string"?k.trim():"",Q1=w0(()=>{if(!D0||H0)return"";let y=z_(D0,j);return _1?$G(y,_1):y},[D0,H0,_1]),Z_=(y,a)=>{y.stopPropagation(),M(y_(a))},[D1,t0]=m(null),g1=(y)=>{t0(y)},k1=(y)=>{y.stopPropagation(),N?.(_)},Z1=(y,a)=>{let L0=new Set;if(!y||a.length===0)return{content:y,usedIds:L0};return{content:y.replace(/attachment:([^\s)"']+)/g,(u0,Y1,A1,G1)=>{let m1=Y1.replace(/^\/+/,""),N_=a.find((V_)=>V_.name&&V_.name.toLowerCase()===m1.toLowerCase()&&!L0.has(V_.id))||a.find((V_)=>!L0.has(V_.id));if(!N_)return u0;if(L0.add(N_.id),G1.slice(Math.max(0,A1-2),A1)==="](")return`/media/${N_.id}`;return N_.name||"attachment"}),usedIds:L0}},m0=[],S1=[],M1=[],s=[],V0=[],F0=[],G0=[],y0=0;if(N0.length>0)N0.forEach((y)=>{if(y?.type==="text"&&y.annotations)G0.push(y.annotations);if(y?.type==="generated_widget")F0.push(y);else if(y?.type==="resource_link")s.push(y);else if(y?.type==="resource")V0.push(y);else if(y?.type==="file"){let a=z0[y0++];if(a)S1.push(a),M1.push({id:a,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let a=z0[y0++];if(a){let L0=typeof y?.mime_type==="string"?y.mime_type:void 0;m0.push({id:a,annotations:y?.annotations,mimeType:L0}),M1.push({id:a,name:y?.name||y?.filename||y?.title})}}});else if(z0.length>0){let y=r0.length>0;z0.forEach((a,L0)=>{let E0=r0[L0]||null;if(M1.push({id:a,name:E0?.label||null}),y)S1.push(a);else m0.push({id:a,annotations:null})})}if(r0.length>0)r0.forEach((y)=>{if(!y?.id)return;let a=M1.find((L0)=>String(L0.id)===String(y.id));if(a&&!a.name)a.name=y.label});let{content:P0,usedIds:f0}=Z1(D0,M1);D0=P0;let k0=m0.filter(({id:y})=>!f0.has(y)),R0=S1.filter((y)=>!f0.has(y)),l0=r0.length>0?r0.map((y,a)=>({id:y.id||`attachment-${a+1}`,label:y.label||`attachment-${a+1}`})):M1.map((y,a)=>({id:y.id,label:y.name||`attachment-${a+1}`})),O0=w0(()=>O$(N0),[N0]),v0=w0(()=>D$(N0),[N0]),J0=w0(()=>{return O0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[O0]);g(()=>{if(!d.current)return;return V4(d.current),sq(d.current)},[Q1]);let j0=C(null);return g(()=>{if(!j0.current||O0.length===0)return;let y=j0.current;y.innerHTML="";for(let a of O0){let L0=document.createElement("div");y.appendChild(L0),v7(L0,a,{onAction:async(E0)=>{if(E0.type==="Action.OpenUrl"){let u0=a4(E0.url||"");if(!u0)throw Error("Invalid URL");window.open(u0,"_blank","noopener,noreferrer");return}if(E0.type==="Action.Submit"){await l6({post_id:_.id,thread_id:h.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:E0.type,title:E0.title||"",data:E0.data}});return}console.warn("[post] unsupported adaptive card action:",E0.type,E0)}}).catch((E0)=>{console.error("[post] adaptive card render error:",E0),L0.textContent=a.fallback_text||"Card failed to render."})}},[J0,_.id]),L`
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
                    onClick=${k1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${R}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${S7(_.timestamp)}</a>
                </div>
                ${Y0&&X0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${e5(X0.originalLength)} chars
                            ${X0.maxLength?L` • Display limit: ${e5(X0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${e&&X0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${e5(X0.maxLength)} of ${e5(X0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(d0.length>0||M0.length>0||l0.length>0)&&L`
                    <div class="post-file-refs">
                        ${M0.map((y)=>{let a=(L0)=>{if(L0.preventDefault(),L0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let E0=document.getElementById("post-"+y);if(E0)E0.scrollIntoView({behavior:"smooth",block:"center"}),E0.classList.add("post-highlight"),setTimeout(()=>E0.classList.remove("post-highlight"),2000)}};return L`
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
                        ${d0.map((y)=>{let a=y.split("/").pop()||y;return L`
                                <${l_}
                                    prefix="post"
                                    label=${a}
                                    title=${y}
                                    onClick=${()=>A?.(y)}
                                />
                            `})}
                        ${l0.map((y)=>L`
                            <${bq}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${g1}
                            />
                        `)}
                    </div>
                `}
                ${h0&&L`
                    <div 
                        ref=${d}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:Q1}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let a=y.target.dataset.hashtag;if(a)j?.(a)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),M(y.target.src)}}
                    />
                `}
                ${O0.length>0&&L`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${v0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${v0.map((y,a)=>{let L0=m7(y),E0=`${y.card_id}-${a}`;return L`
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
                                        Submitted ${t4(L0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${F0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${F0.map((y,a)=>L`
                            <${hq}
                                key=${y.widget_id||y.id||`${_.id}-widget-${a}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${G0.length>0&&L`
                    ${G0.map((y,a)=>L`
                        <${e8} key=${a} annotations=${y} />
                    `)}
                `}
                ${k0.length>0&&L`
                    <div class="media-preview">
                        ${k0.map(({id:y,mimeType:a})=>{let E0=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?y_(y):r6(y);return L`
                                <img 
                                    key=${y} 
                                    src=${E0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(u0)=>Z_(u0,y)}
                                />
                            `})}
                    </div>
                `}
                ${k0.length>0&&L`
                    ${k0.map(({annotations:y},a)=>L`
                        ${y&&L`<${e8} key=${a} annotations=${y} />`}
                    `)}
                `}
                ${R0.length>0&&L`
                    <div class="file-attachments">
                        ${R0.map((y)=>L`
                            <${vq} key=${y} mediaId=${y} onPreview=${g1} />
                        `)}
                    </div>
                `}
                ${s.length>0&&L`
                    <div class="resource-links">
                        ${s.map((y,a)=>L`
                            <div key=${a}>
                                <${gq} block=${y} />
                                <${e8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${V0.length>0&&L`
                    <div class="resource-embeds">
                        ${V0.map((y,a)=>L`
                            <div key=${a}>
                                <${mq} block=${y} />
                                <${e8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${h.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${h.link_previews.map((y,a)=>L`
                            <${cq} key=${a} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&L`<${p7} src=${D} onClose=${()=>M(null)} />`}
        ${D1&&L`
            <${h7}
                mediaId=${D1.mediaId}
                info=${D1.info}
                onClose=${()=>t0(null)}
            />
        `}
    `}function l7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:G,onOpenWidget:X,emptyMessage:K,timelineRef:N,agents:V,user:B,onDeletePost:O,reverse:E=!0,removingPostIds:k,searchQuery:A}){let[J,D]=m(!1),M=C(null),d=typeof IntersectionObserver<"u",h=P(async()=>{if(!j||!$||J)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,J,j]),o=P((n)=>{let{scrollTop:_0,scrollHeight:e,clientHeight:Y0}=n.target,X0=E?e-Y0-_0:_0,N0=Math.max(300,Y0);if(X0<N0)h()},[E,h]);g(()=>{if(!d)return;let n=M.current,_0=N?.current;if(!n||!_0)return;let e=300,Y0=new IntersectionObserver((X0)=>{for(let N0 of X0){if(!N0.isIntersecting)continue;h()}},{root:_0,rootMargin:`${e}px 0px ${e}px 0px`,threshold:0});return Y0.observe(n),()=>Y0.disconnect()},[d,$,j,N,h]);let t=C(h);if(t.current=h,g(()=>{if(d)return;if(!N?.current)return;let{scrollTop:n,scrollHeight:_0,clientHeight:e}=N.current,Y0=E?_0-e-n:n,X0=Math.max(300,e);if(Y0<X0)t.current?.()},[d,_,$,E,N]),g(()=>{if(!N?.current)return;if(!$||J)return;let{scrollTop:n,scrollHeight:_0,clientHeight:e}=N.current,Y0=E?_0-e-n:n,X0=Math.max(300,e);if(_0<=e+1||Y0<X0)t.current?.()},[_,$,J,E,N]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let R=_.slice().sort((n,_0)=>n.id-_0.id),x=(n)=>{let _0=n?.data?.thread_id;if(_0===null||_0===void 0||_0==="")return null;let e=Number(_0);return Number.isFinite(e)?e:null},H=new Map;for(let n=0;n<R.length;n+=1){let _0=R[n],e=Number(_0?.id),Y0=x(_0);if(Y0!==null){let X0=H.get(Y0)||{anchorIndex:-1,replyIndexes:[]};X0.replyIndexes.push(n),H.set(Y0,X0)}else if(Number.isFinite(e)){let X0=H.get(e)||{anchorIndex:-1,replyIndexes:[]};X0.anchorIndex=n,H.set(e,X0)}}let S=new Map;for(let[n,_0]of H.entries()){let e=new Set;if(_0.anchorIndex>=0)e.add(_0.anchorIndex);for(let Y0 of _0.replyIndexes)e.add(Y0);S.set(n,Array.from(e).sort((Y0,X0)=>Y0-X0))}let p=R.map((n,_0)=>{let e=x(n);if(e===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Y0=S.get(e);if(!Y0||Y0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let X0=Y0.indexOf(_0);if(X0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:X0>0,hasThreadNext:X0<Y0.length-1}}),Q0=L`<div class="timeline-sentinel" ref=${M}></div>`;return L`
        <div class="timeline ${E?"reverse":"normal"}" ref=${N} onScroll=${o}>
            <div class="timeline-content">
                ${E?Q0:null}
                ${R.map((n,_0)=>{let e=Boolean(n.data?.thread_id&&n.data.thread_id!==n.id),Y0=k?.has?.(n.id),X0=p[_0]||{};return L`
                    <${c7}
                        key=${n.id}
                        post=${n}
                        isThreadReply=${e}
                        isThreadPrev=${X0.hasThreadPrev}
                        isThreadNext=${X0.hasThreadNext}
                        isRemoving=${Y0}
                        highlightQuery=${A}
                        agentName=${I7(n.data?.agent_id,V||{})}
                        agentAvatarUrl=${T7(n.data?.agent_id,V||{})}
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
                ${E?null:Q0}
            </div>
        </div>
    `}class n7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var n0=new n7;var _6=null,A$=null;function jG(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function d7(){if(A$)return Promise.resolve(A$);if(!_6)_6=import(jG()).then((_)=>{return A$=_,_}).catch((_)=>{throw _6=null,_});return _6}class i7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await d7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var E$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new i7(_,$)}};function k$(){d7().catch(()=>{})}var e4="piclaw://terminal";var QG={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},ZG={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},$6=null,M$=null;function YG(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function qG(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!YG(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function GG(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!$6)$6=qG(()=>Promise.resolve($.init?.())).catch((j)=>{throw $6=null,j});return await $6,$}async function KG(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!M$)M$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await M$}async function XG(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function NG(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function VG(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function B4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function BG(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function r7(){let _=VG(),$=_?ZG:QG,j=B4("--bg-primary",_?"#000000":"#ffffff"),Q=B4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=B4("--text-secondary",_?"#71767b":"#536471"),Y=B4("--accent-color","#1d9bf0"),q=B4("--danger-color",_?"#ff7b72":"#cf222e"),G=B4("--success-color",_?"#7ee787":"#1a7f37"),X=B4("--bg-hover",_?"#1d1f23":"#e8ebed"),K=B4("--border-color",_?"#2f3336":"#eff3f4"),N=B4("--accent-soft-strong",BG(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:N,selectionForeground:Q,black:X,red:q,green:G,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:K}}class I${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await GG();if(await KG(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:r7()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=r7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await XG();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(NG($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var T$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new I$(_,$)}},C$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new I$(_,$)}};function W4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function j6(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function o7(_,$={}){if(W4($))return null;if(j6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:WG(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function P$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function S$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function x$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function y$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function U4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function s7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function a7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,G]of Object.entries(Y)){let X=String(q||"").trim();if(!X)continue;if(G===null||G===void 0||G==="")Q.searchParams.delete(X);else Q.searchParams.set(X,String(G))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function WG(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function UG(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function t7(_,$={}){if(W4($))return null;if(j6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:UG(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Q8(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function LG(_){try{return JSON.parse(_)}catch{return null}}function FG(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function zG(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class R${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=zG($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||LG;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=FG(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var Z8=()=>{throw Error("Operation requires compiling with --exportRuntime")},HG=typeof BigUint64Array<"u",Y8=Symbol();var JG=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function e7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return JG.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function _9(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return e7(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,G,X){let K=$.memory||Q.memory;throw Error(`abort: ${j(K,Y)} at ${j(K,q)}:${G}:${X}`)},Q.trace=Q.trace||function(Y,q,...G){let X=$.memory||Q.memory;console.log(`trace: ${j(X,Y)}${q?" ":""}${G.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function $9(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||Z8,q=j.__pin||Z8,G=j.__unpin||Z8,X=j.__collect||Z8,K=j.__rtti_base,N=K?(H)=>H[K>>>2]:Z8;_.__new=Y,_.__pin=q,_.__unpin=G,_.__collect=X;function V(H){let S=new Uint32Array(Q.buffer);if((H>>>=0)>=N(S))throw Error(`invalid id: ${H}`);return S[(K+4>>>2)+H]}function B(H){let S=V(H);if(!(S&7))throw Error(`not an array: ${H}, flags=${S}`);return S}function O(H){return 31-Math.clz32(H>>>6&31)}function E(H){if(H==null)return 0;let S=H.length,p=Y(S<<1,2),Q0=new Uint16Array(Q.buffer);for(let n=0,_0=p>>>1;n<S;++n)Q0[_0+n]=H.charCodeAt(n);return p}_.__newString=E;function k(H){if(H==null)return 0;let S=new Uint8Array(H),p=Y(S.length,1);return new Uint8Array(Q.buffer).set(S,p),p}_.__newArrayBuffer=k;function A(H){if(!H)return null;let S=Q.buffer;if(new Uint32Array(S)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return e7(S,H)}_.__getString=A;function J(H,S,p){let Q0=Q.buffer;if(p)switch(H){case 2:return new Float32Array(Q0);case 3:return new Float64Array(Q0)}else switch(H){case 0:return new(S?Int8Array:Uint8Array)(Q0);case 1:return new(S?Int16Array:Uint16Array)(Q0);case 2:return new(S?Int32Array:Uint32Array)(Q0);case 3:return new(S?BigInt64Array:BigUint64Array)(Q0)}throw Error(`unsupported align: ${H}`)}function D(H,S=0){let p=S,Q0=B(H),n=O(Q0),_0=typeof p!=="number",e=_0?p.length:p,Y0=Y(e<<n,Q0&4?H:1),X0;if(Q0&4)X0=Y0;else{q(Y0);let N0=Y(Q0&2?16:12,H);G(Y0);let z0=new Uint32Array(Q.buffer);if(z0[N0+0>>>2]=Y0,z0[N0+4>>>2]=Y0,z0[N0+8>>>2]=e<<n,Q0&2)z0[N0+12>>>2]=e;X0=N0}if(_0){let N0=J(n,Q0&2048,Q0&4096),z0=Y0>>>n;if(Q0&16384)for(let D0=0;D0<e;++D0)N0[z0+D0]=p[D0];else N0.set(p,z0)}return X0}_.__newArray=D;function M(H){let S=new Uint32Array(Q.buffer),p=S[H+-8>>>2],Q0=B(p),n=O(Q0),_0=Q0&4?H:S[H+4>>>2],e=Q0&2?S[H+12>>>2]:S[_0+-4>>>2]>>>n;return J(n,Q0&2048,Q0&4096).subarray(_0>>>=n,_0+e)}_.__getArrayView=M;function d(H){let S=M(H),p=S.length,Q0=Array(p);for(let n=0;n<p;n++)Q0[n]=S[n];return Q0}_.__getArray=d;function h(H){let S=Q.buffer,p=new Uint32Array(S)[H+-4>>>2];return S.slice(H,H+p)}_.__getArrayBuffer=h;function o(H){if(!Z)throw Error("Operation requires compiling with --exportTable");let S=new Uint32Array(Q.buffer)[H>>>2];return Z.get(S)}_.__getFunction=o;function t(H,S,p){return new H(R(H,S,p))}function R(H,S,p){let Q0=Q.buffer,n=new Uint32Array(Q0);return new H(Q0,n[p+4>>>2],n[p+8>>>2]>>>S)}function x(H,S,p){_[`__get${S}`]=t.bind(null,H,p),_[`__get${S}View`]=R.bind(null,H,p)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{x(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),HG)[BigUint64Array,BigInt64Array].forEach((H)=>{x(H,H.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,DG(j,_)}function j9(_){return typeof Response<"u"&&_ instanceof Response}function OG(_){return _ instanceof WebAssembly.Module}async function w$(_,$={}){if(j9(_=await _))return Q6(_,$);let j=OG(_)?_:await WebAssembly.compile(_),Q=_9($),Z=await WebAssembly.instantiate(j,$),Y=$9(Q,Z);return{module:j,instance:Z,exports:Y}}async function Q6(_,$={}){if(!WebAssembly.instantiateStreaming)return w$(j9(_=await _)?_.arrayBuffer():_,$);let j=_9($),Q=await WebAssembly.instantiateStreaming(_,$),Z=$9(j,Q.instance);return{...Q,exports:Z}}function DG(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let K=Y.shift();if(!Object.hasOwn(q,K))q[K]={};q=q[K]}let G=Y[0],X=G.indexOf("#");if(X>=0){let K=G.substring(0,X),N=q[K];if(typeof N>"u"||!N.prototype){let V=function(...B){return V.wrap(V.prototype.constructor(0,...B))};if(V.prototype={valueOf(){return this[Y8]}},V.wrap=function(B){return Object.create(V.prototype,{[Y8]:{value:B,writable:!1}})},N)Object.getOwnPropertyNames(N).forEach((B)=>Object.defineProperty(V,B,Object.getOwnPropertyDescriptor(N,B)));q[K]=V}if(G=G.substring(X+1),q=q[K].prototype,/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4))){let V=_[Q.replace("set:","get:")],B=_[Q.replace("get:","set:")];Object.defineProperty(q,G,{get(){return V(this[Y8])},set(O){B(this[Y8],O)},enumerable:!0})}}else if(G==="constructor")(q[G]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[G]=function(...V){return j(V.length),Z(this[Y8],...V)}).original=Z}else if(/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4)))Object.defineProperty(q,G,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[G]=(...K)=>{return j(K.length),Z(...K)}).original=Z;else q[G]=Z}return $}var EG="/static/js/vendor/remote-display-decoder.wasm",Z6=null;function Q9(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function Z9(){if(Z6)return Z6;return Z6=(async()=>{try{let Q=function(Z,Y,q,G,X,K,N){let V=Q9(Y),B=j.__pin(j.__newArrayBuffer(V));try{return j[Z](B,q,G,X,K,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift)}finally{j.__unpin(B);try{j.__collect()}catch{}}},_=await fetch(EG,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof Q6==="function"?await Q6(_,{}):await w$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,G,X,K){return Q("processRawRect",Z,Y,q,G,X,K)},processCopyRect(Z,Y,q,G,X,K){return j.processCopyRect(Z,Y,q,G,X,K)},processRreRect(Z,Y,q,G,X,K){return Q("processRreRect",Z,Y,q,G,X,K)},processHextileRect(Z,Y,q,G,X,K){return Q("processHextileRect",Z,Y,q,G,X,K)},processZrleTileData(Z,Y,q,G,X,K){return Q("processZrleTileData",Z,Y,q,G,X,K)},decodeRawRectToRgba(Z,Y,q,G){let X=Q9(Z),K=j.__pin(j.__newArrayBuffer(X));try{let N=j.__pin(j.decodeRawRectToRgba(K,Y,q,G.bitsPerPixel,G.bigEndian?1:0,G.trueColor?1:0,G.redMax,G.greenMax,G.blueMax,G.redShift,G.greenShift,G.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(N))}finally{j.__unpin(N)}}finally{j.__unpin(K);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),Z6}function k5(_,$,j){return Math.max($,Math.min(j,_))}function Y6(_,$,j){let Q=new Uint8Array(6),Z=k5(Math.floor(Number($||0)),0,65535),Y=k5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=k5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function u$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function Y9(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),G=Math.max(1,Number(j?.width||0)),X=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/G,N=(Number($||0)-Number(j?.top||0))/X;return{x:k5(Math.floor(K*Y),0,Math.max(0,Y-1)),y:k5(Math.floor(N*q),0,Math.max(0,q-1))}}function q9(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=k5(Number(Q||0)|Z,0,255);return[Y6(Y,$,j),Y6(Number(Q||0),$,j)]}function G9(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function q8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function K9(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),G=Math.max(1,Math.floor(Number(Q||0))),X=Math.min(Z/q,Y/G);if(!Number.isFinite(X)||X<=0)return 1;return Math.max(0.01,X)}var f$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)f$[`F${_}`]=65470+(_-1);function v$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(f$,Y))return f$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var f1=Uint8Array,J_=Uint16Array,d$=Int32Array,q6=new f1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),G6=new f1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),p$=new f1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),B9=function(_,$){var j=new J_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new d$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},W9=B9(q6,2),U9=W9.b,c$=W9.r;U9[28]=258,c$[258]=28;var L9=B9(G6,0),kG=L9.b,X9=L9.r,l$=new J_(32768);for(c0=0;c0<32768;++c0)$4=(c0&43690)>>1|(c0&21845)<<1,$4=($4&52428)>>2|($4&13107)<<2,$4=($4&61680)>>4|($4&3855)<<4,l$[c0]=(($4&65280)>>8|($4&255)<<8)>>1;var $4,c0,j4=function(_,$,j){var Q=_.length,Z=0,Y=new J_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new J_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var G;if(j){G=new J_(1<<$);var X=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var K=Z<<4|_[Z],N=$-_[Z],V=q[_[Z]-1]++<<N;for(var B=V|(1<<N)-1;V<=B;++V)G[l$[V]>>X]=K}}else{G=new J_(Q);for(Z=0;Z<Q;++Z)if(_[Z])G[Z]=l$[q[_[Z]-1]++]>>15-_[Z]}return G},x4=new f1(288);for(c0=0;c0<144;++c0)x4[c0]=8;var c0;for(c0=144;c0<256;++c0)x4[c0]=9;var c0;for(c0=256;c0<280;++c0)x4[c0]=7;var c0;for(c0=280;c0<288;++c0)x4[c0]=8;var c0,N8=new f1(32);for(c0=0;c0<32;++c0)N8[c0]=5;var c0,MG=j4(x4,9,0),IG=j4(x4,9,1),TG=j4(N8,5,0),CG=j4(N8,5,1),b$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},n_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},g$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},i$=function(_){return(_+7)/8|0},X8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new f1(_.subarray($,j))};var PG=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],X_=function(_,$,j){var Q=Error($||PG[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,X_);if(!j)throw Q;return Q},SG=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new f1(0);var q=!j,G=q||$.i!=2,X=$.i;if(q)j=new f1(Z*3);var K=function(e0){var H0=j.length;if(e0>H0){var h0=new f1(Math.max(H0*2,e0));h0.set(j),j=h0}},N=$.f||0,V=$.p||0,B=$.b||0,O=$.l,E=$.d,k=$.m,A=$.n,J=Z*8;do{if(!O){N=n_(_,V,1);var D=n_(_,V+1,3);if(V+=3,!D){var M=i$(V)+4,d=_[M-4]|_[M-3]<<8,h=M+d;if(h>Z){if(X)X_(0);break}if(G)K(B+d);j.set(_.subarray(M,h),B),$.b=B+=d,$.p=V=h*8,$.f=N;continue}else if(D==1)O=IG,E=CG,k=9,A=5;else if(D==2){var o=n_(_,V,31)+257,t=n_(_,V+10,15)+4,R=o+n_(_,V+5,31)+1;V+=14;var x=new f1(R),H=new f1(19);for(var S=0;S<t;++S)H[p$[S]]=n_(_,V+S*3,7);V+=t*3;var p=b$(H),Q0=(1<<p)-1,n=j4(H,p,1);for(var S=0;S<R;){var _0=n[n_(_,V,Q0)];V+=_0&15;var M=_0>>4;if(M<16)x[S++]=M;else{var e=0,Y0=0;if(M==16)Y0=3+n_(_,V,3),V+=2,e=x[S-1];else if(M==17)Y0=3+n_(_,V,7),V+=3;else if(M==18)Y0=11+n_(_,V,127),V+=7;while(Y0--)x[S++]=e}}var X0=x.subarray(0,o),N0=x.subarray(o);k=b$(X0),A=b$(N0),O=j4(X0,k,1),E=j4(N0,A,1)}else X_(1);if(V>J){if(X)X_(0);break}}if(G)K(B+131072);var z0=(1<<k)-1,D0=(1<<A)-1,A0=V;for(;;A0=V){var e=O[g$(_,V)&z0],d0=e>>4;if(V+=e&15,V>J){if(X)X_(0);break}if(!e)X_(2);if(d0<256)j[B++]=d0;else if(d0==256){A0=V,O=null;break}else{var x0=d0-254;if(d0>264){var S=d0-257,M0=q6[S];x0=n_(_,V,(1<<M0)-1)+U9[S],V+=M0}var i0=E[g$(_,V)&D0],r0=i0>>4;if(!i0)X_(3);V+=i0&15;var N0=kG[r0];if(r0>3){var M0=G6[r0];N0+=g$(_,V)&(1<<M0)-1,V+=M0}if(V>J){if(X)X_(0);break}if(G)K(B+131072);var b0=B+x0;if(B<N0){var s0=Y-N0,g0=Math.min(N0,b0);if(s0+B<0)X_(3);for(;B<g0;++B)j[B]=Q[s0+B]}for(;B<b0;++B)j[B]=j[B-N0]}}if($.l=O,$.p=A0,$.b=B,$.f=N,O)N=1,$.m=k,$.d=E,$.n=A}while(!N);return B!=j.length&&q?X8(j,0,B):j.subarray(0,B)},L4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},G8=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},m$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:z9,l:0};if(Z==1){var q=new f1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(h,o){return h.f-o.f}),j.push({s:-1,f:25001});var G=j[0],X=j[1],K=0,N=1,V=2;j[0]={s:-1,f:G.f+X.f,l:G,r:X};while(N!=Z-1)G=j[j[K].f<j[V].f?K++:V++],X=j[K!=N&&j[K].f<j[V].f?K++:V++],j[N++]={s:-1,f:G.f+X.f,l:G,r:X};var B=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>B)B=Y[Q].s;var O=new J_(B+1),E=n$(j[N-1],O,0);if(E>$){var Q=0,k=0,A=E-$,J=1<<A;Y.sort(function(o,t){return O[t.s]-O[o.s]||o.f-t.f});for(;Q<Z;++Q){var D=Y[Q].s;if(O[D]>$)k+=J-(1<<E-O[D]),O[D]=$;else break}k>>=A;while(k>0){var M=Y[Q].s;if(O[M]<$)k-=1<<$-O[M]++-1;else++Q}for(;Q>=0&&k;--Q){var d=Y[Q].s;if(O[d]==$)--O[d],++k}E=$}return{t:new f1(O),l:E}},n$=function(_,$,j){return _.s==-1?Math.max(n$(_.l,$,j+1),n$(_.r,$,j+1)):$[_.s]=j},N9=function(_){var $=_.length;while($&&!_[--$]);var j=new J_(++$),Q=0,Z=_[0],Y=1,q=function(X){j[Q++]=X};for(var G=1;G<=$;++G)if(_[G]==Z&&G!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[G]}return{c:j.subarray(0,Q),n:$}},K8=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},F9=function(_,$,j){var Q=j.length,Z=i$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},V9=function(_,$,j,Q,Z,Y,q,G,X,K,N){L4($,N++,j),++Z[256];var V=m$(Z,15),B=V.t,O=V.l,E=m$(Y,15),k=E.t,A=E.l,J=N9(B),D=J.c,M=J.n,d=N9(k),h=d.c,o=d.n,t=new J_(19);for(var R=0;R<D.length;++R)++t[D[R]&31];for(var R=0;R<h.length;++R)++t[h[R]&31];var x=m$(t,7),H=x.t,S=x.l,p=19;for(;p>4&&!H[p$[p-1]];--p);var Q0=K+5<<3,n=K8(Z,x4)+K8(Y,N8)+q,_0=K8(Z,B)+K8(Y,k)+q+14+3*p+K8(t,H)+2*t[16]+3*t[17]+7*t[18];if(X>=0&&Q0<=n&&Q0<=_0)return F9($,N,_.subarray(X,X+K));var e,Y0,X0,N0;if(L4($,N,1+(_0<n)),N+=2,_0<n){e=j4(B,O,0),Y0=B,X0=j4(k,A,0),N0=k;var z0=j4(H,S,0);L4($,N,M-257),L4($,N+5,o-1),L4($,N+10,p-4),N+=14;for(var R=0;R<p;++R)L4($,N+3*R,H[p$[R]]);N+=3*p;var D0=[D,h];for(var A0=0;A0<2;++A0){var d0=D0[A0];for(var R=0;R<d0.length;++R){var x0=d0[R]&31;if(L4($,N,z0[x0]),N+=H[x0],x0>15)L4($,N,d0[R]>>5&127),N+=d0[R]>>12}}}else e=MG,Y0=x4,X0=TG,N0=N8;for(var R=0;R<G;++R){var M0=Q[R];if(M0>255){var x0=M0>>18&31;if(G8($,N,e[x0+257]),N+=Y0[x0+257],x0>7)L4($,N,M0>>23&31),N+=q6[x0];var i0=M0&31;if(G8($,N,X0[i0]),N+=N0[i0],i0>3)G8($,N,M0>>5&8191),N+=G6[i0]}else G8($,N,e[M0]),N+=Y0[M0]}return G8($,N,e[256]),N+Y0[256]},xG=new d$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),z9=new f1(0),yG=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,G=new f1(Q+q+5*(1+Math.ceil(q/7000))+Z),X=G.subarray(Q,G.length-Z),K=Y.l,N=(Y.r||0)&7;if($){if(N)X[0]=Y.r>>3;var V=xG[$-1],B=V>>13,O=V&8191,E=(1<<j)-1,k=Y.p||new J_(32768),A=Y.h||new J_(E+1),J=Math.ceil(j/3),D=2*J,M=function(_1){return(_[_1]^_[_1+1]<<J^_[_1+2]<<D)&E},d=new d$(25000),h=new J_(288),o=new J_(32),t=0,R=0,x=Y.i||0,H=0,S=Y.w||0,p=0;for(;x+2<q;++x){var Q0=M(x),n=x&32767,_0=A[Q0];if(k[n]=_0,A[Q0]=n,S<=x){var e=q-x;if((t>7000||H>24576)&&(e>423||!K)){N=V9(_,X,0,d,h,o,R,H,p,x-p,N),H=t=R=0,p=x;for(var Y0=0;Y0<286;++Y0)h[Y0]=0;for(var Y0=0;Y0<30;++Y0)o[Y0]=0}var X0=2,N0=0,z0=O,D0=n-_0&32767;if(e>2&&Q0==M(x-D0)){var A0=Math.min(B,e)-1,d0=Math.min(32767,x),x0=Math.min(258,e);while(D0<=d0&&--z0&&n!=_0){if(_[x+X0]==_[x+X0-D0]){var M0=0;for(;M0<x0&&_[x+M0]==_[x+M0-D0];++M0);if(M0>X0){if(X0=M0,N0=D0,M0>A0)break;var i0=Math.min(D0,M0-2),r0=0;for(var Y0=0;Y0<i0;++Y0){var b0=x-D0+Y0&32767,s0=k[b0],g0=b0-s0&32767;if(g0>r0)r0=g0,_0=b0}}}n=_0,_0=k[n],D0+=n-_0&32767}}if(N0){d[H++]=268435456|c$[X0]<<18|X9[N0];var e0=c$[X0]&31,H0=X9[N0]&31;R+=q6[e0]+G6[H0],++h[257+e0],++o[H0],S=x+X0,++t}else d[H++]=_[x],++h[_[x]]}}for(x=Math.max(x,S);x<q;++x)d[H++]=_[x],++h[_[x]];if(N=V9(_,X,K,d,h,o,R,H,p,x-p,N),!K)Y.r=N&7|X[N/8|0]<<3,N-=7,Y.h=A,Y.p=k,Y.i=x,Y.w=S}else{for(var x=Y.w||0;x<q+K;x+=65535){var h0=x+65535;if(h0>=q)X[N/8|0]=K,h0=q;N=F9(X,N+1,_.subarray(x,h0))}Y.i=q}return X8(G,0,Q+i$(N)+Z)};var H9=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var G=Math.min(q+2655,Y);for(;q<G;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},RG=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new f1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return yG(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var J9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var wG=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=H9();Z.p($.dictionary),J9(_,2,Z.d())}},fG=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)X_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)X_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var h$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new f1(32768),this.p=new f1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)X_(5);if(this.d)X_(4);if(!this.p.length)this.p=$;else if($.length){var j=new f1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=SG(this.p,this.s,this.o);this.ondata(X8(Q,j,this.s.b),this.d),this.o=X8(Q,this.s.b-32768),this.s.b=this.o.length,this.p=X8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function O9(_,$){if(!$)$={};var j=H9();j.p(_);var Q=RG(_,$,$.dictionary?6:2,4);return wG(Q,$),J9(Q,Q.length-4,j.d()),Q}var D9=function(){function _($,j){h$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(h$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(fG(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)X_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}h$.prototype.c.call(this,j)},_}();var uG=typeof TextDecoder<"u"&&new TextDecoder,vG=0;try{uG.decode(z9,{stream:!0}),vG=1}catch(_){}var bG=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],gG=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],mG=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],hG=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],pG=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],cG=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],lG=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],nG=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],k9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;k9[_]=$}function M9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function I9(_){let $=0n,j=M9(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function dG(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function M5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function A9(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function iG(_){let $=M5(I9(_),pG,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of lG){j=A9(j,Y),Q=A9(Q,Y);let q=j<<28n|Q;Z.push(M5(q,cG,56))}return Z}function rG(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(nG[j][Y][q])}return $}function oG(_,$){let j=M5(_,mG,32)^BigInt($),Q=rG(j);return M5(Q,hG,32)}function E9(_,$){let j=iG($),Q=M5(I9(_),bG,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let G of j){let X=Y,K=(Z^oG(Y,G))&0xffffffffn;Z=X,Y=K}let q=Y<<32n|Z;return dG(M5(q,gG,64),8)}function sG(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=k9[Z]}return j}function T9(_,$){let j=M9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=sG(_),Z=new Uint8Array(16);return Z.set(E9(j.slice(0,8),Q),0),Z.set(E9(j.slice(8,16),Q),8),Z}var d_="vnc";function aG(_){return Number(_)}function tG(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=aG(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function C5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function eG(_,$){let j=C5(_),Q=C5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function _K(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=C5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function $K(){return(_)=>{let $=C5(_);try{let j=[],Q=new D9((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return _K(j)}catch(j){try{let Q=O9($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function jK(_){return new TextEncoder().encode(String(_||""))}function I5(_){return new TextDecoder().decode(C5(_))}function QK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function ZK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function C9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function YK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function qK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function P9(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function T5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function x9(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function GK(_,$,j,Q){let Z=Q||P5,Y=C5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),G=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<G)throw Error(`Incomplete raw rectangle payload: expected ${G} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let X=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,N=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let B=x9(Y,K,q,Z.bigEndian),O=T5(B>>>Z.redShift&Z.redMax,Z.redMax),E=T5(B>>>Z.greenShift&Z.greenMax,Z.greenMax),k=T5(B>>>Z.blueShift&Z.blueMax,Z.blueMax);X[N]=O,X[N+1]=E,X[N+2]=k,X[N+3]=255,K+=q,N+=4}return X}function F4(_,$,j){let Q=j||P5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=x9(_,$,Z,Q.bigEndian);return{rgba:[T5(Y>>>Q.redShift&Q.redMax,Q.redMax),T5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),T5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function y4(_,$,j,Q,Z,Y,q){if(!q)return;for(let G=0;G<Y;G+=1)for(let X=0;X<Z;X+=1){let K=((Q+G)*$+(j+X))*4;_[K]=q[0],_[K+1]=q[1],_[K+2]=q[2],_[K+3]=q[3]}}function y9(_,$,j,Q,Z,Y,q){for(let G=0;G<Y;G+=1){let X=G*Z*4,K=((Q+G)*$+j)*4;_.set(q.subarray(X,X+Z*4),K)}}function S9(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function KK(_,$,j,Q,Z,Y,q){let G=Z||P5,X=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let N=_.slice($+4,$+4+K),V;try{V=q(N)}catch{return{consumed:4+K,skipped:!0}}let B=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let E=0;E<Q;E+=64){let k=Math.min(64,Q-E);for(let A=0;A<j;A+=64){let J=Math.min(64,j-A);if(V.byteLength<B+1)return null;let D=V[B++],M=D&127,d=(D&128)!==0;if(!d&&M===0){let h=J*k*X;if(V.byteLength<B+h)return null;let o=Y(V.slice(B,B+h),J,k,G);B+=h,y9(O,j,A,E,J,k,o);continue}if(!d&&M===1){let h=F4(V,B,G);if(!h)return null;B+=h.bytesPerPixel,y4(O,j,A,E,J,k,h.rgba);continue}if(!d&&M>1&&M<=16){let h=[];for(let x=0;x<M;x+=1){let H=F4(V,B,G);if(!H)return null;B+=H.bytesPerPixel,h.push(H.rgba)}let o=M<=2?1:M<=4?2:4,t=Math.ceil(J*o/8),R=t*k;if(V.byteLength<B+R)return null;for(let x=0;x<k;x+=1){let H=B+x*t;for(let S=0;S<J;S+=1){let p=S*o,Q0=H+(p>>3),n=8-o-(p&7),_0=V[Q0]>>n&(1<<o)-1;y4(O,j,A+S,E+x,1,1,h[_0])}}B+=R;continue}if(d&&M===0){let h=0,o=0;while(o<k){let t=F4(V,B,G);if(!t)return null;B+=t.bytesPerPixel;let R=S9(V,B);if(!R)return null;B+=R.consumed;for(let x=0;x<R.runLength;x+=1)if(y4(O,j,A+h,E+o,1,1,t.rgba),h+=1,h>=J){if(h=0,o+=1,o>=k)break}}continue}if(d&&M>0){let h=[];for(let R=0;R<M;R+=1){let x=F4(V,B,G);if(!x)return null;B+=x.bytesPerPixel,h.push(x.rgba)}let o=0,t=0;while(t<k){if(V.byteLength<B+1)return null;let R=V[B++],x=R,H=1;if(R&128){x=R&127;let p=S9(V,B);if(!p)return null;B+=p.consumed,H=p.runLength}let S=h[x];if(!S)return null;for(let p=0;p<H;p+=1)if(y4(O,j,A+o,E+t,1,1,S),o+=1,o>=J){if(o=0,t+=1,t>=k)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:O,decompressed:V}}function XK(_,$,j,Q,Z){let Y=Z||P5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let X=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+q+X*(q+8);if(_.byteLength<$+K)return null;let N=$+4,V=F4(_,N,Y);if(!V)return null;N+=V.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);y4(B,j,0,0,j,Q,V.rgba);for(let O=0;O<X;O+=1){let E=F4(_,N,Y);if(!E)return null;if(N+=E.bytesPerPixel,_.byteLength<N+8)return null;let k=new DataView(_.buffer,_.byteOffset+N,8),A=k.getUint16(0,!1),J=k.getUint16(2,!1),D=k.getUint16(4,!1),M=k.getUint16(6,!1);N+=8,y4(B,j,A,J,D,M,E.rgba)}return{consumed:N-$,rgba:B}}function NK(_,$,j,Q,Z,Y){let q=Z||P5,G=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),X=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),K=$,N=[0,0,0,255],V=[255,255,255,255];for(let B=0;B<Q;B+=16){let O=Math.min(16,Q-B);for(let E=0;E<j;E+=16){let k=Math.min(16,j-E);if(_.byteLength<K+1)return null;let A=_[K++];if(A&1){let J=k*O*G;if(_.byteLength<K+J)return null;let D=Y(_.slice(K,K+J),k,O,q);K+=J,y9(X,j,E,B,k,O,D);continue}if(A&2){let J=F4(_,K,q);if(!J)return null;N=J.rgba,K+=J.bytesPerPixel}if(y4(X,j,E,B,k,O,N),A&4){let J=F4(_,K,q);if(!J)return null;V=J.rgba,K+=J.bytesPerPixel}if(A&8){if(_.byteLength<K+1)return null;let J=_[K++];for(let D=0;D<J;D+=1){let M=V;if(A&16){let H=F4(_,K,q);if(!H)return null;M=H.rgba,K+=H.bytesPerPixel}if(_.byteLength<K+2)return null;let d=_[K++],h=_[K++],o=d>>4,t=d&15,R=(h>>4)+1,x=(h&15)+1;y4(X,j,E+o,B+t,R,x,M)}}}}return{consumed:K-$,rgba:X}}var P5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class K6{protocol=d_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:GK,this.pipeline=_.pipeline||null,this.encodings=tG(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...P5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:$K()}receive(_){if(_)this.buffer=eG(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=I5(Z),q=QK(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=ZK(q),j.push(jK(this.clientVersionText)),$.push({type:"protocol-version",protocol:d_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+X)break;this.consume(1);let K=I5(this.consume(4+X).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:d_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:d_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+G)break;let X=I5(this.consume(4+G).slice(4));throw Error(X||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:d_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:d_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(T9(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let G=I5(this.consume(4+q).slice(4));throw Error(G||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:d_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),G=C9(Z,4),X=Z.getUint32(20,!1);if(this.buffer.byteLength<24+X)break;let K=this.consume(24),N=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=N.getUint16(0,!1),this.framebufferHeight=N.getUint16(2,!1),this.serverPixelFormat=C9(N,4),this.serverName=I5(this.consume(X)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(YK(this.clientPixelFormat)),j.push(qK(this.encodings)),j.push(P9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:d_,width:Y,height:q,name:this.serverName,pixelFormat:G}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),G=4,X=[],K=!1,N=!!this.pipeline;for(let B=0;B<q;B+=1){if(this.buffer.byteLength<G+12){K=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,12),E=O.getUint16(0,!1),k=O.getUint16(2,!1),A=O.getUint16(4,!1),J=O.getUint16(6,!1),D=O.getInt32(8,!1);if(G+=12,D===0){let M=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),d=A*J*M;if(this.buffer.byteLength<G+d){K=!0;break}let h=this.buffer.slice(G,G+d);if(G+=d,N)this.pipeline.processRawRect(h,E,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:E,y:k,width:A,height:J});else X.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:this.decodeRawRect(h,A,J,this.clientPixelFormat)});continue}if(D===2){let M=XK(this.buffer,G,A,J,this.clientPixelFormat);if(!M){K=!0;break}if(N){let d=this.buffer.slice(G,G+M.consumed);this.pipeline.processRreRect(d,E,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:E,y:k,width:A,height:J})}else X.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:M.rgba});G+=M.consumed;continue}if(D===1){if(this.buffer.byteLength<G+4){K=!0;break}let M=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,4),d=M.getUint16(0,!1),h=M.getUint16(2,!1);if(G+=4,N)this.pipeline.processCopyRect(E,k,A,J,d,h),X.push({kind:"pipeline",x:E,y:k,width:A,height:J});else X.push({kind:"copy",x:E,y:k,width:A,height:J,srcX:d,srcY:h});continue}if(D===16){let M=KK(this.buffer,G,A,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!M){K=!0;break}if(G+=M.consumed,M.skipped)continue;if(N&&M.decompressed)this.pipeline.processZrleTileData(M.decompressed,E,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:E,y:k,width:A,height:J});else X.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:M.rgba});continue}if(D===5){let M=NK(this.buffer,G,A,J,this.clientPixelFormat,this.decodeRawRect);if(!M){K=!0;break}if(N){let d=this.buffer.slice(G,G+M.consumed);this.pipeline.processHextileRect(d,E,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:E,y:k,width:A,height:J})}else X.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:M.rgba});G+=M.consumed;continue}if(D===-223){if(this.framebufferWidth=A,this.framebufferHeight=J,N)this.pipeline.initFramebuffer(A,J);X.push({kind:"resize",x:E,y:k,width:A,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(G);let V={type:"framebuffer-update",protocol:d_,width:this.framebufferWidth,height:this.framebufferHeight,rects:X};if(N)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(P9(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:d_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let G=I5(this.consume(q));$.push({type:"clipboard",protocol:d_,text:G}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var z4="piclaw://vnc";function VK(_){let $=String(_||"");if($===z4)return null;if(!$.startsWith(`${z4}/`))return null;let j=$.slice(`${z4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function _5(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function BK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function WK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function UK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function LK(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function FK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class R9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=VK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=FK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=LK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=q8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=q8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=q8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=K9($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return Y9(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(Y6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=u$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~u$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of q9(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(G9(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=v$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??v$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new K6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await Z9(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(G,X,K,N)=>Q.decodeRawRectToRgba(G,X,K,N);let Y=q8(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new K6(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new R$({url:UK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(G)=>{this.applyMetrics(G)},onMessage:(G)=>{this.handleSocketMessage(G)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await BK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${_5(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await WK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var r$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===z4||$.startsWith(`${z4}/`)?9000:!1},mount(_,$){return new R9(_,$)}};function R4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function zK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),K=Z.startsWith("/")?Z:`${G?`${G}/`:""}${Z}`,N=[];for(let B of K.split("/")){if(!B||B===".")continue;if(B===".."){if(N.length>0)N.pop();continue}N.push(B)}let V=N.join("/");return`${R8(V)}${Y}${q}`}function V8(_){return _?.preview||null}function HK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function JK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function OK(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${R4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${R4(R_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${R4(t4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${R4(JK($))}</span>`),Q.push(`<span><strong>extension:</strong> ${R4(HK(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${R4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function DK(_){let $=V8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=OK(_,$);if($.kind==="image"){let Q=$.url||($.path?R8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${R4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=z_($.text||"",null,{rewriteImageSrc:(Z)=>zK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${R4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class o${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=DK(this.context)}getContent(){let _=V8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=V8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var s$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=V8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new o$(_,$)}},a$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return V8(_)||_?.path?1:!1},mount(_,$){return new o$(_,$)}};var AK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),EK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},kK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function f9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function w9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=f9(j),Y=kK[Z]||"\uD83D\uDCC4",q=EK[Z]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${w9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${w9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let X=G.querySelector("#ov-open-tab");if(X)X.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class v9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=f9(_?.path);if(!$||!AK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new u9(_,$);return new v9(_,$)}};var MK=/\.(csv|tsv)$/i;function b9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class g9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${b9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${b9(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class m9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var e$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!MK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new g9(_,$);return new m9(_,$)}};var IK=/\.pdf$/i;function TK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class h9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${TK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class p9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _3={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!IK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new h9(_,$);return new p9(_,$)}};var CK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function $3(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class c9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${$3(Z)}" alt="${$3(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${$3(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class l9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j3={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!CK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new c9(_,$);return new l9(_,$)}};var PK=/\.(mp4|m4v|mov|webm|ogv)$/i;function SK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class n9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${SK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class d9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Q3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!PK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new n9(_,$);return new d9(_,$)}};function xK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function yK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var Z3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function i9(_){let $=String(_||"").trim();return $?$:Z3}function RK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function wK(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function fK(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,G,X,K,N,V){try{if(q&&X!=null&&j({filename:q,format:G,data:X,mimeType:K,base64Encoded:Boolean(N),defaultMode:V}))return}catch(B){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",B)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,G,X,K,N,V){try{if(G&&j({filename:G,data:q,mimeType:X,base64Encoded:Boolean(K),mode:N,folderId:V}))return}catch(B){console.warn("[drawio-pane] export intercept failed, falling back to native export",B)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function r9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${wK(j)}`}class o9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${yK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class s9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=RK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(fK(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=Z3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await r9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await r9(_,"image/png");else this.xmlData=i9(await _.text());else if(_.status===404)this.xmlData=Z3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?i9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var Y3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!xK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new o9(_,$);return new s9(_,$)}};var uK=/\.mindmap\.ya?ml$/i,q3=String(Date.now());function a9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function G3(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function vK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function bK(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Q)}class t9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class e9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(a9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,vK("/static/css/mindmap.css"),await Promise.all([G3("/static/js/vendor/d3-mindmap.min.js?v="+q3),G3("/static/js/vendor/js-yaml.min.js?v="+q3)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),bK(this.mindmapEl);let j=a9(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await G3("/static/js/vendor/mindmap-editor.js?v="+q3),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var K3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!uK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new t9(_,$);return new e9(_,$)}};var gK=/\.kanban\.md$/i,mK=String(Date.now());function _j(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function hK(){let _=window;if(_.preact)return;_.preact={h:P8,render:P4,Component:U5,createContext:I2},_.preactHooks={useState:m,useEffect:g,useCallback:P,useRef:C,useMemo:w0,useReducer:w6,useContext:P2,useLayoutEffect:l5,useImperativeHandle:C2,useErrorBoundary:x2,useDebugValue:S2},_.htm={bind:()=>L}}function pK(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function cK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class $j{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class jj{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(_j())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,cK("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=_j();try{if(hK(),await pK("/static/js/vendor/kanban-editor.js?v="+mK),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var X3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!gK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new $j(_,$);return new jj(_,$)}};class Qj{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var o0=new Qj;var X6="workspaceExplorerScale",lK=["compact","default","comfortable"],nK=new Set(lK),dK={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function Zj(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return nK.has(j)?j:$}function N3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function iK(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function rK(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function V3(_={}){let $=iK(_),j=_.stored?Zj(_.stored,$):$;return rK(j,_)}function Yj(_){return dK[Zj(_)]}function oK(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function B3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function qj(_,$,j={}){let Q=j.resolvePane;if(B3(_,Q))return!0;return oK($)}var sK=60000,Nj=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function aK(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return B3($,(j)=>n0.resolve(j))}function Vj(_,$,j,Q=0,Z=[]){if(!j&&Nj(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)Vj(Y,$,j,Q+1,Z);return Z}function Gj(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&Nj(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function F3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((G)=>[G?.path,G])):new Map,Y=!j||j.length!==Q.length,q=Q.map((G)=>{let X=F3(Z.get(G.path),G);if(X!==Z.get(G.path))Y=!0;return X});return Y?{...$,children:q}:_}function U3(_,$,j){if(!_)return _;if(_.path===$)return F3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=U3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var Bj=4,W3=14,tK=8,eK=16;function Wj(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=Wj(Q);return _.__bytes=j,j}function Uj(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Bj)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let G of Z){let X=Math.max(0,Number(G?.__bytes??G?.size??0));if(X<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:X});else Y.push({kind:"file",name:G.name,path:G.path,size:X})}Y.sort((G,X)=>X.size-G.size);let q=Y;if(Y.length>W3){let G=Y.slice(0,W3-1),X=Y.slice(W3-1),K=X.reduce((N,V)=>N+V.size,0);G.push({kind:"other",name:`+${X.length} more`,path:`${Q.path}/[other]`,size:K}),q=G}return Q.children=q.map((G)=>{if(G.kind==="dir")return Uj(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Q}function Kj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Lj(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function N6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function z3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,G=Y-Z>q?Z+q:Y,X=N6(_,$,Q,Z),K=N6(_,$,Q,G),N=N6(_,$,j,G),V=N6(_,$,j,Z),B=G-Z>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${B} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var Fj={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function zj(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(G,X,K,N)=>{let V=Array.isArray(G?.children)?G.children:[];if(!V.length)return;let B=Math.max(0,Number(G.size)||0);if(B<=0)return;let O=K-X,E=X;V.forEach((k,A)=>{let J=Math.max(0,Number(k.size)||0);if(J<=0)return;let D=J/B,M=E,d=A===V.length-1?K:E+O*D;if(E=d,d-M<0.003)return;let h=Fj[N];if(h){let o=Lj(M,N,j);if(Q.push({key:k.path,path:k.path,label:k.name,size:J,color:o,depth:N,startAngle:M,endAngle:d,innerRadius:h[0],outerRadius:h[1],d:z3(120,120,h[0],h[1],M,d)}),N===1)Z.push({key:k.path,name:k.name,size:J,pct:Y>0?J/Y*100:0,color:o})}if(N<Bj)q(k,M,d,N+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function L3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=L3(Q,$);if(Z)return Z}return null}function Hj(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=Fj[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,G=Lj(Y,1,Q),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:G,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:z3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:K,name:_,size:j,pct:100,color:G}]}}function Xj(_,$=!1,j=!1){if(!_)return null;let Q=Wj(_),Z=Uj(_,0),Y=Z.size||Q,{segments:q,legend:G}=zj(Z,Y,j);if(!q.length&&Y>0){let X=Hj("[files]",Z.path,Y,j);q=X.segments,G=X.legend}return{root:Z,totalSize:Y,segments:q,legend:G,truncated:$,isDarkTheme:j}}function _X({payload:_}){if(!_)return null;let[$,j]=m(null),[Q,Z]=m(_?.root?.path||"."),[Y,q]=m(()=>[_?.root?.path||"."]),[G,X]=m(!1);g(()=>{let H=_?.root?.path||".";Z(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Q)return;X(!0);let H=setTimeout(()=>X(!1),180);return()=>clearTimeout(H)},[Q]);let K=w0(()=>{return L3(_.root,Q)||_.root},[_?.root,Q]),N=K?.size||_.totalSize||0,{segments:V,legend:B}=w0(()=>{let H=zj(K,N,_.isDarkTheme);if(H.segments.length>0)return H;if(N<=0)return H;let S=K?.children?.length?"Total":"[files]";return Hj(S,K?.path||_?.root?.path||".",N,_.isDarkTheme)},[K,N,_.isDarkTheme,_?.root?.path]),[O,E]=m(V),k=C(new Map),A=C(0);g(()=>{let H=k.current,S=new Map(V.map((_0)=>[_0.key,_0])),p=performance.now(),Q0=220,n=(_0)=>{let e=Math.min(1,(_0-p)/220),Y0=e*(2-e),X0=V.map((N0)=>{let D0=H.get(N0.key)||{startAngle:N0.startAngle,endAngle:N0.startAngle,innerRadius:N0.innerRadius,outerRadius:N0.innerRadius},A0=(r0,b0)=>r0+(b0-r0)*Y0,d0=A0(D0.startAngle,N0.startAngle),x0=A0(D0.endAngle,N0.endAngle),M0=A0(D0.innerRadius,N0.innerRadius),i0=A0(D0.outerRadius,N0.outerRadius);return{...N0,d:z3(120,120,M0,i0,d0,x0)}});if(E(X0),e<1)A.current=requestAnimationFrame(n)};if(A.current)cancelAnimationFrame(A.current);return A.current=requestAnimationFrame(n),k.current=S,()=>{if(A.current)cancelAnimationFrame(A.current)}},[V]);let J=O.length?O:V,D=N>0?R_(N):"0 B",M=K?.name||"",h=(M&&M!=="."?M:"Total")||"Total",o=D,t=Y.length>1,R=(H)=>{if(!H?.path)return;let S=L3(_.root,H.path);if(!S||!Array.isArray(S.children)||S.children.length===0)return;q((p)=>[...p,S.path]),Z(S.path),j(null)},x=()=>{if(!t)return;q((H)=>{let S=H.slice(0,-1);return Z(S[S.length-1]||_?.root?.path||"."),S}),j(null)};return L`
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
    `}function $X({mediaId:_}){let[$,j]=m(null);if(g(()=>{if(!_)return;H5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?R_($.metadata.size):"";return L`
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
    `}function Jj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:G=!1}){let[X,K]=m(null),[N,V]=m(new Set(["."])),[B,O]=m(null),[E,k]=m(null),[A,J]=m(""),[D,M]=m(null),[d,h]=m(null),[o,t]=m(!0),[R,x]=m(!1),[H,S]=m(null),[p,Q0]=m(()=>J5("workspaceShowHidden",!1)),[n,_0]=m(!1),[e,Y0]=m(null),[X0,N0]=m(null),[z0,D0]=m(null),[A0,d0]=m(!1),[x0,M0]=m(null),[i0,r0]=m(()=>Kj()),[b0,s0]=m(()=>V3({stored:F_(X6),...N3()})),[g0,e0]=m(!1),H0=C(N),h0=C(""),_1=C(null),Q1=C(0),Z_=C(new Set),D1=C(null),t0=C(new Map),g1=C(_),k1=C(Q),Z1=C(null),m0=C(null),S1=C(null),M1=C(null),s=C(null),V0=C(null),F0=C("."),G0=C(null),y0=C({path:null,dragging:!1,startX:0,startY:0}),P0=C({path:null,dragging:!1,startX:0,startY:0}),f0=C({path:null,timer:0}),k0=C(!1),R0=C(0),l0=C(new Map),O0=C(null),v0=C(null),J0=C(null),j0=C(null),y=C(null),a=C(null),L0=C(p),E0=C($),u0=C(j??$),Y1=C(0),A1=C(z0),G1=C(n),m1=C(e),Q4=C(null),N_=C({x:0,y:0}),t1=C(0),V_=C(null),Y_=C(B),$1=C(E),d1=C(null),Z4=C(D);g1.current=_,k1.current=Q,g(()=>{H0.current=N},[N]),g(()=>{L0.current=p},[p]),g(()=>{E0.current=$},[$]),g(()=>{u0.current=j??$},[j,$]),g(()=>{A1.current=z0},[z0]),g(()=>{if(typeof window>"u")return;let z=()=>{s0(V3({stored:F_(X6),...N3()}))};z();let I=()=>z(),w=()=>z(),f=($0)=>{if(!$0||$0.key===null||$0.key===X6)z()};window.addEventListener("resize",I),window.addEventListener("focus",w),window.addEventListener("storage",f);let r=window.matchMedia?.("(pointer: coarse)"),Z0=window.matchMedia?.("(hover: none)"),W0=($0,T0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",T0);else if($0.addListener)$0.addListener(T0)},U0=($0,T0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",T0);else if($0.removeListener)$0.removeListener(T0)};return W0(r,I),W0(Z0,I),()=>{window.removeEventListener("resize",I),window.removeEventListener("focus",w),window.removeEventListener("storage",f),U0(r,I),U0(Z0,I)}},[]),g(()=>{let z=(I)=>{let w=I?.detail?.path;if(!w)return;let f=w.split("/"),r=[];for(let Z0=1;Z0<f.length;Z0++)r.push(f.slice(0,Z0).join("/"));if(r.length)V((Z0)=>{let W0=new Set(Z0);W0.add(".");for(let U0 of r)W0.add(U0);return W0});O(w),requestAnimationFrame(()=>{let Z0=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(Z0)Z0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),g(()=>{G1.current=n},[n]),g(()=>{m1.current=e},[e]),g(()=>{Y_.current=B},[B]),g(()=>{$1.current=E},[E]),g(()=>{Z4.current=D},[D]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>r0(Kj());z();let I=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>z();if(I?.addEventListener)I.addEventListener("change",w);else if(I?.addListener)I.addListener(w);let f=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(f?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)f?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(I?.removeEventListener)I.removeEventListener("change",w);else if(I?.removeListener)I.removeListener(w);f?.disconnect()}},[]),g(()=>{if(!E)return;let z=s.current;if(!z)return;let I=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(I)},[E]),g(()=>{if(!g0)return;let z=(w)=>{let f=w?.target;if(!(f instanceof Element))return;if(y.current?.contains(f))return;if(a.current?.contains(f))return;e0(!1)},I=(w)=>{if(w?.key==="Escape")e0(!1),a.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",I),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",I)}},[g0]);let w_=async(z,I={})=>{let w=Boolean(I?.autoOpen),f=String(z||"").trim();x(!0),M(null),h(null);try{let r=await r5(f,20000);if(w&&f&&qj(f,r,{resolvePane:(Z0)=>n0.resolve(Z0)}))return k1.current?.(f,r),r;return M(r),r}catch(r){let Z0={error:r.message||"Failed to load preview"};return M(Z0),Z0}finally{x(!1)}};Z1.current=w_;let j5=async()=>{if(!E0.current)return;try{let z=await i5("",1,L0.current),I=Gj(z.root,H0.current,L0.current);if(I===h0.current){t(!1);return}if(h0.current=I,_1.current=z.root,!Q1.current)Q1.current=requestAnimationFrame(()=>{Q1.current=0,K((w)=>F3(w,_1.current)),t(!1)})}catch(z){S(z.message||"Failed to load workspace"),t(!1)}},f4=async(z)=>{if(!z)return;if(Z_.current.has(z))return;Z_.current.add(z);try{let I=await i5(z,1,L0.current);K((w)=>U3(w,z,I.root))}catch(I){S(I.message||"Failed to load workspace")}finally{Z_.current.delete(z)}};m0.current=f4;let u1=P(()=>{let z=B;if(!z)return".";let I=t0.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[B]),B_=P((z)=>{let I=z?.closest?.(".workspace-row");if(!I)return null;let w=I.dataset.path,f=I.dataset.type;if(!w)return null;if(f==="dir")return w;if(w.includes("/")){let r=w.split("/");return r.pop(),r.join("/")||"."}return"."},[]),x1=P((z)=>{return B_(z?.target||null)},[B_]),E1=P((z)=>{A1.current=z,D0(z)},[]),K1=P(()=>{let z=f0.current;if(z?.timer)clearTimeout(z.timer);f0.current={path:null,timer:0}},[]),f_=P((z)=>{if(!z||z==="."){K1();return}let I=t0.current?.get(z);if(!I||I.type!=="dir"){K1();return}if(H0.current?.has(z)){K1();return}if(f0.current?.path===z)return;K1();let w=setTimeout(()=>{f0.current={path:null,timer:0},m0.current?.(z),V((f)=>{let r=new Set(f);return r.add(z),r})},600);f0.current={path:z,timer:w}},[K1]),u_=P((z,I)=>{if(N_.current={x:z,y:I},t1.current)return;t1.current=requestAnimationFrame(()=>{t1.current=0;let w=Q4.current;if(!w)return;let f=N_.current;w.style.transform=`translate(${f.x+12}px, ${f.y+12}px)`})},[]),X1=P((z)=>{if(!z)return;let w=(t0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w)return;N0({path:z,label:w})},[]),q_=P(()=>{if(N0(null),t1.current)cancelAnimationFrame(t1.current),t1.current=0;if(Q4.current)Q4.current.style.transform="translate(-9999px, -9999px)"},[]),p0=P((z)=>{if(!z)return".";let I=t0.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[]),T1=P(()=>{k(null),J("")},[]),O_=P((z)=>{if(!z)return;let w=(t0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w||z===".")return;k(z),J(w)},[]),e1=P(async()=>{let z=$1.current;if(!z)return;let I=(A||"").trim();if(!I){T1();return}let w=t0.current?.get(z),f=(w?.name||z.split("/").pop()||z).trim();if(I===f){T1();return}try{let Z0=(await t6(z,I))?.path||z,W0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(T1(),S(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:Z0,type:w?.type||"file"}})),w?.type==="dir")V((U0)=>{let $0=new Set;for(let T0 of U0)if(T0===z)$0.add(Z0);else if(T0.startsWith(`${z}/`))$0.add(`${Z0}${T0.slice(z.length)}`);else $0.add(T0);return $0});if(O(Z0),w?.type==="dir")M(null),x(!1),h(null);else Z1.current?.(Z0);m0.current?.(W0)}catch(r){S(r?.message||"Failed to rename file")}},[T1,A]),u4=P(async(z)=>{let f=z||".";for(let r=0;r<50;r+=1){let W0=`untitled${r===0?"":`-${r}`}.md`;try{let $0=(await a6(f,W0,""))?.path||(f==="."?W0:`${f}/${W0}`);if(f&&f!==".")V((T0)=>new Set([...T0,f]));O($0),S(null),m0.current?.(f),Z1.current?.($0);return}catch(U0){if(U0?.status===409||U0?.code==="file_exists")continue;S(U0?.message||"Failed to create file");return}}S("Failed to create file (untitled name already in use).")},[]),i_=P((z)=>{if(z?.stopPropagation?.(),A0)return;let I=p0(Y_.current);u4(I)},[A0,p0,u4]);g(()=>{if(typeof window>"u")return;let z=(I)=>{let w=I?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;K((U0)=>{let $0=U0;for(let T0 of w){if(!T0?.root)continue;if(!$0||T0.path==="."||!T0.path)$0=T0.root;else $0=U3($0,T0.path,T0.root)}if($0)h0.current=Gj($0,H0.current,L0.current);return t(!1),$0});let f=Y_.current;if(Boolean(f)&&w.some((U0)=>{let $0=U0?.path||"";if(!$0||$0===".")return!0;return f===$0||f.startsWith(`${$0}/`)||$0.startsWith(`${f}/`)}))l0.current.clear();if(!f||!Z4.current)return;let Z0=t0.current?.get(f);if(Z0&&Z0.type==="dir")return;if(w.some((U0)=>{let $0=U0?.path||"";if(!$0||$0===".")return!0;return f===$0||f.startsWith(`${$0}/`)}))Z1.current?.(f)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),D1.current=j5;let v4=C(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),I=u0.current??E0.current,w=document.visibilityState!=="hidden"&&(I||z.matches&&E0.current);o5(w,L0.current).catch(()=>{})}).current,r_=C(0),Q5=C(()=>{if(r_.current)clearTimeout(r_.current);r_.current=setTimeout(()=>{r_.current=0,v4()},250)}).current;g(()=>{if(E0.current)D1.current?.();Q5()},[$,j]),g(()=>{D1.current(),v4();let z=setInterval(()=>D1.current(),sK),I=O5("previewHeight",null),w=Number.isFinite(I)?Math.min(Math.max(I,80),600):280;if(R0.current=w,S1.current)S1.current.style.setProperty("--preview-height",`${w}px`);let f=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>Q5();if(f.addEventListener)f.addEventListener("change",r);else if(f.addListener)f.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(z),Q1.current)cancelAnimationFrame(Q1.current),Q1.current=0;if(f.removeEventListener)f.removeEventListener("change",r);else if(f.removeListener)f.removeListener(r);if(document.removeEventListener("visibilitychange",r),r_.current)clearTimeout(r_.current),r_.current=0;if(G0.current)clearTimeout(G0.current),G0.current=null;o5(!1,L0.current).catch(()=>{})}},[]);let o_=w0(()=>Vj(X,N,p),[X,N,p]),v_=w0(()=>new Map(o_.map((z)=>[z.node.path,z.node])),[o_]),y5=w0(()=>Yj(b0),[b0]);t0.current=v_;let N1=(B?t0.current.get(B):null)?.type==="dir";g(()=>{if(!B||!N1){M0(null),O0.current=null,v0.current=null;return}let z=B,I=`${p?"hidden":"visible"}:${B}`,w=l0.current,f=w.get(I);if(f?.root){w.delete(I),w.set(I,f);let W0=Xj(f.root,Boolean(f.truncated),i0);if(W0)O0.current=W0,v0.current=B,M0({loading:!1,error:null,payload:W0});return}let r=O0.current,Z0=v0.current;M0({loading:!0,error:null,payload:Z0===B?r:null}),i5(B,tK,p).then((W0)=>{if(Y_.current!==z)return;let U0={root:W0?.root,truncated:Boolean(W0?.truncated)};w.delete(I),w.set(I,U0);while(w.size>eK){let T0=w.keys().next().value;if(!T0)break;w.delete(T0)}let $0=Xj(U0.root,U0.truncated,i0);O0.current=$0,v0.current=B,M0({loading:!1,error:null,payload:$0})}).catch((W0)=>{if(Y_.current!==z)return;M0({loading:!1,error:W0?.message||"Failed to load folder size chart",payload:Z0===B?r:null})})},[B,N1,p,i0]);let y1=Boolean(D&&D.kind==="text"&&!N1&&(!D.size||D.size<=262144)),Z5=y1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",D_=Boolean(B&&B!=="."),__=Boolean(B&&!N1),h1=Boolean(B&&!N1),C1=B&&N1?w8(B,p):null,v1=P(()=>e0(!1),[]),z1=P(async(z)=>{v1();try{await z?.()}catch(I){console.warn("[workspace-explorer] Header menu action failed:",I)}},[v1]);g(()=>{let z=J0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!z)return;if(z.innerHTML="",!B||N1||!D||D.error)return;let I={path:B,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},w=n0.resolve(I)||n0.get("workspace-preview-default");if(!w)return;let f=w.mount(z,I);return j0.current=f,()=>{if(j0.current===f)f.dispose(),j0.current=null;z.innerHTML=""}},[B,N1,D]);let A_=(z)=>{let I=z?.target;if(I instanceof Element)return I;return I?.parentElement||null},E_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},k_=C((z)=>{let I=A_(z),w=I?.closest?.("[data-path]");if(!w)return;let f=w.dataset.path;if(!f||f===".")return;let r=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),Z0=Boolean(I?.closest?.(".workspace-caret"));if(r||Z0)return;if($1.current===f)return;O_(f)}).current,s_=C((z)=>{if(k0.current){k0.current=!1;return}let I=A_(z),w=I?.closest?.("[data-path]");if(M1.current?.focus?.(),!w)return;let f=w.dataset.path,r=w.dataset.type,Z0=Boolean(I?.closest?.(".workspace-caret")),W0=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),U0=Y_.current===f,$0=$1.current;if($0){if($0===f)return;T1()}let T0=r==="file"&&d1.current===f&&!Z0&&!W0;if(r==="dir"){if(d1.current=null,O(f),M(null),h(null),x(!1),!H0.current.has(f))m0.current?.(f);if(U0&&!Z0)return;V((j_)=>{let p1=new Set(j_);if(p1.has(f))p1.delete(f);else p1.add(f);return p1})}else{d1.current=null,O(f);let R1=t0.current.get(f);if(R1)g1.current?.(R1.path,R1);if(!W0&&!Z0&&aK(f))k1.current?.(f,Z4.current);else{let p1=!W0&&!Z0;Z1.current?.(f,{autoOpen:p1})}}}).current,$_=C(()=>{h0.current="",D1.current(),Array.from(H0.current||[]).filter((I)=>I&&I!==".").forEach((I)=>m0.current?.(I))}).current,i1=C(()=>{d1.current=null,O(null),M(null),h(null),x(!1)}).current,M_=C(()=>{Q0((z)=>{let I=!z;if(typeof window<"u")q1("workspaceShowHidden",String(I));return L0.current=I,o5(!0,I).catch(()=>{}),h0.current="",D1.current?.(),Array.from(H0.current||[]).filter((f)=>f&&f!==".").forEach((f)=>m0.current?.(f)),I})}).current,Y4=C((z)=>{if(A_(z)?.closest?.("[data-path]"))return;i1()}).current,H1=P(async(z)=>{if(!z)return;let I=z.split("/").pop()||z;if(!window.confirm(`Delete "${I}"? This cannot be undone.`))return;try{await _$(z);let f=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(Y_.current===z)i1();m0.current?.(f),S(null)}catch(f){M((r)=>({...r||{},error:f.message||"Failed to delete file"}))}},[i1]),a_=P((z)=>{let I=M1.current;if(!I||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;I.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),b4=P((z)=>{let I=o_;if(!I||I.length===0)return;let w=B?I.findIndex((f)=>f.node.path===B):-1;if(z.key==="ArrowDown"){z.preventDefault();let f=Math.min(w+1,I.length-1),r=I[f];if(!r)return;if(O(r.node.path),r.node.type!=="dir")g1.current?.(r.node.path,r.node),Z1.current?.(r.node.path);else M(null),x(!1),h(null);a_(r.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let f=w<=0?0:w-1,r=I[f];if(!r)return;if(O(r.node.path),r.node.type!=="dir")g1.current?.(r.node.path,r.node),Z1.current?.(r.node.path);else M(null),x(!1),h(null);a_(r.node.path);return}if(z.key==="ArrowRight"&&w>=0){let f=I[w];if(f?.node?.type==="dir"&&!N.has(f.node.path))z.preventDefault(),m0.current?.(f.node.path),V((r)=>new Set([...r,f.node.path]));return}if(z.key==="ArrowLeft"&&w>=0){let f=I[w];if(f?.node?.type==="dir"&&N.has(f.node.path))z.preventDefault(),V((r)=>{let Z0=new Set(r);return Z0.delete(f.node.path),Z0});return}if(z.key==="Enter"&&w>=0){z.preventDefault();let f=I[w];if(!f)return;let r=f.node.path;if(f.node.type==="dir"){if(!H0.current.has(r))m0.current?.(r);V((W0)=>{let U0=new Set(W0);if(U0.has(r))U0.delete(r);else U0.add(r);return U0}),M(null),h(null),x(!1)}else g1.current?.(r,f.node),Z1.current?.(r);return}if((z.key==="Delete"||z.key==="Backspace")&&w>=0){let f=I[w];if(!f||f.node.type==="dir")return;z.preventDefault(),H1(f.node.path);return}if(z.key==="Escape")z.preventDefault(),i1()},[i1,H1,N,o_,a_,B]),g4=P((z)=>{let I=A_(z),w=I?.closest?.(".workspace-row");if(!w)return;let f=w.dataset.type,r=w.dataset.path;if(!r||r===".")return;if($1.current===r)return;let Z0=z?.touches?.[0];if(!Z0)return;if(y0.current={path:E_(I)?r:null,dragging:!1,startX:Z0.clientX,startY:Z0.clientY},f!=="file")return;if(G0.current)clearTimeout(G0.current);G0.current=setTimeout(()=>{if(G0.current=null,y0.current?.dragging)return;H1(r)},600)},[H1]),I_=P(()=>{if(G0.current)clearTimeout(G0.current),G0.current=null;let z=y0.current;if(z?.dragging&&z.path){let I=A1.current||u1(),w=V_.current;if(typeof w==="function")w(z.path,I)}y0.current={path:null,dragging:!1,startX:0,startY:0},Y1.current=0,_0(!1),Y0(null),E1(null),K1(),q_()},[u1,q_,E1,K1]),m4=P((z)=>{let I=y0.current,w=z?.touches?.[0];if(!w||!I?.path){if(G0.current)clearTimeout(G0.current),G0.current=null;return}let f=Math.abs(w.clientX-I.startX),r=Math.abs(w.clientY-I.startY),Z0=f>8||r>8;if(Z0&&G0.current)clearTimeout(G0.current),G0.current=null;if(!I.dragging&&Z0)I.dragging=!0,_0(!0),Y0("move"),X1(I.path);if(I.dragging){z.preventDefault(),u_(w.clientX,w.clientY);let W0=document.elementFromPoint(w.clientX,w.clientY),U0=B_(W0)||u1();if(A1.current!==U0)E1(U0);f_(U0)}},[B_,u1,X1,u_,E1,f_]),Y5=C((z)=>{z.preventDefault();let I=S1.current;if(!I)return;let w=z.clientY,f=R0.current||280,r=z.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Z0=w,W0=($0)=>{Z0=$0.clientY;let T0=I.clientHeight-80,R1=Math.min(Math.max(f-($0.clientY-w),80),T0);I.style.setProperty("--preview-height",`${R1}px`),R0.current=R1},U0=()=>{let $0=I.clientHeight-80,T0=Math.min(Math.max(f-(Z0-w),80),$0);R0.current=T0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("previewHeight",String(Math.round(T0))),document.removeEventListener("mousemove",W0),document.removeEventListener("mouseup",U0)};document.addEventListener("mousemove",W0),document.addEventListener("mouseup",U0)}).current,b_=C((z)=>{z.preventDefault();let I=S1.current;if(!I)return;let w=z.touches[0];if(!w)return;let f=w.clientY,r=R0.current||280,Z0=z.currentTarget;Z0.classList.add("dragging"),document.body.style.userSelect="none";let W0=($0)=>{let T0=$0.touches[0];if(!T0)return;$0.preventDefault();let R1=I.clientHeight-80,j_=Math.min(Math.max(r-(T0.clientY-f),80),R1);I.style.setProperty("--preview-height",`${j_}px`),R0.current=j_},U0=()=>{Z0.classList.remove("dragging"),document.body.style.userSelect="",q1("previewHeight",String(Math.round(R0.current||r))),document.removeEventListener("touchmove",W0),document.removeEventListener("touchend",U0),document.removeEventListener("touchcancel",U0)};document.addEventListener("touchmove",W0,{passive:!1}),document.addEventListener("touchend",U0),document.addEventListener("touchcancel",U0)}).current,g_=async()=>{if(!B)return;try{let z=await s6(B);if(z.media_id)h(z.media_id)}catch(z){M((I)=>({...I||{},error:z.message||"Failed to attach"}))}},H4=async()=>{if(!B||N1)return;await H1(B)},m_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},h4=P((z)=>{if(!m_(z))return;if(z.preventDefault(),Y1.current+=1,!G1.current)_0(!0);Y0("upload");let I=x1(z)||u1();E1(I),f_(I)},[u1,x1,E1,f_]),h_=P((z)=>{if(!m_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!G1.current)_0(!0);if(m1.current!=="upload")Y0("upload");let I=x1(z)||u1();if(A1.current!==I)E1(I);f_(I)},[u1,x1,E1,f_]),T_=P((z)=>{if(!m_(z))return;if(z.preventDefault(),Y1.current=Math.max(0,Y1.current-1),Y1.current===0)_0(!1),Y0(null),E1(null),K1()},[E1,K1]),I1=P(async(z,I=".")=>{let w=Array.from(z||[]);if(w.length===0)return;let f=I&&I!==""?I:".",r=f!=="."?f:"workspace root";d0(!0);try{let Z0=null;for(let W0 of w)try{Z0=await y8(W0,f)}catch(U0){let $0=U0?.status,T0=U0?.code;if($0===409||T0==="file_exists"){let R1=W0?.name||"file";if(!window.confirm(`"${R1}" already exists in ${r}. Overwrite?`))continue;Z0=await y8(W0,f,{overwrite:!0})}else throw U0}if(Z0?.path)d1.current=Z0.path,O(Z0.path),Z1.current?.(Z0.path);m0.current?.(f)}catch(Z0){S(Z0.message||"Failed to upload file")}finally{d0(!1)}},[]),J4=P(async(z,I)=>{if(!z)return;let w=t0.current?.get(z);if(!w)return;let f=I&&I!==""?I:".",r=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(f===r)return;try{let W0=(await e6(z,f))?.path||z;if(w.type==="dir")V((U0)=>{let $0=new Set;for(let T0 of U0)if(T0===z)$0.add(W0);else if(T0.startsWith(`${z}/`))$0.add(`${W0}${T0.slice(z.length)}`);else $0.add(T0);return $0});if(O(W0),w.type==="dir")M(null),x(!1),h(null);else Z1.current?.(W0);m0.current?.(r),m0.current?.(f)}catch(Z0){S(Z0?.message||"Failed to move entry")}},[]);V_.current=J4;let O4=P(async(z)=>{if(!m_(z))return;z.preventDefault(),Y1.current=0,_0(!1),Y0(null),D0(null),K1();let I=Array.from(z?.dataTransfer?.files||[]);if(I.length===0)return;let w=A1.current||x1(z)||u1();await I1(I,w)},[u1,x1,I1]),p4=P((z)=>{if(z?.stopPropagation?.(),A0)return;let I=z?.currentTarget?.dataset?.uploadTarget||".";F0.current=I,V0.current?.click()},[A0]),W1=P(()=>{if(A0)return;let z=Y_.current,I=z?t0.current?.get(z):null;F0.current=I?.type==="dir"?I.path:".",V0.current?.click()},[A0]),D4=P(()=>{z1(()=>i_(null))},[z1,i_]),q5=P(()=>{z1(()=>W1())},[z1,W1]),b1=P(()=>{z1(()=>$_())},[z1,$_]),G_=P(()=>{z1(()=>M_())},[z1,M_]),t_=P(()=>{if(!B||!y1)return;z1(()=>k1.current?.(B,D))},[z1,B,y1,D]),c4=P(()=>{if(!B||B===".")return;z1(()=>O_(B))},[z1,B,O_]),q4=P(()=>{if(!B||N1)return;z1(()=>H4())},[z1,B,N1,H4]),A4=P(()=>{if(!B||N1)return;z1(()=>g_())},[z1,B,N1,g_]),G4=P(()=>{if(!C1)return;if(v1(),typeof window<"u")window.open(C1,"_blank","noopener")},[v1,C1]),C_=P(()=>{v1(),Z?.()},[v1,Z]),W_=P(()=>{v1(),Y?.()},[v1,Y]),E4=P(()=>{v1(),q?.()},[v1,q]),l4=P((z)=>{if(!z||z.button!==0)return;let I=z.currentTarget;if(!I||!I.dataset)return;let w=I.dataset.path;if(!w||w===".")return;if($1.current===w)return;let f=A_(z);if(f?.closest?.("button, a, input, .workspace-caret"))return;if(!E_(f))return;z.preventDefault(),P0.current={path:w,dragging:!1,startX:z.clientX,startY:z.clientY};let r=(W0)=>{let U0=P0.current;if(!U0?.path)return;let $0=Math.abs(W0.clientX-U0.startX),T0=Math.abs(W0.clientY-U0.startY),R1=$0>4||T0>4;if(!U0.dragging&&R1)U0.dragging=!0,k0.current=!0,_0(!0),Y0("move"),X1(U0.path),u_(W0.clientX,W0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(U0.dragging){W0.preventDefault(),u_(W0.clientX,W0.clientY);let j_=document.elementFromPoint(W0.clientX,W0.clientY),p1=B_(j_)||u1();if(A1.current!==p1)E1(p1);f_(p1)}},Z0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",Z0);let W0=P0.current;if(W0?.dragging&&W0.path){let U0=A1.current||u1(),$0=V_.current;if(typeof $0==="function")$0(W0.path,U0)}P0.current={path:null,dragging:!1,startX:0,startY:0},Y1.current=0,_0(!1),Y0(null),E1(null),K1(),q_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",Z0)},[B_,u1,X1,u_,q_,E1,f_,K1]),P_=P(async(z)=>{let I=Array.from(z?.target?.files||[]);if(I.length===0)return;let w=F0.current||".";if(await I1(I,w),F0.current=".",z?.target)z.target.value=""},[I1]);return L`
        <aside
            class=${`workspace-sidebar${n?" workspace-drop-active":""}`}
            data-workspace-scale=${b0}
            ref=${S1}
            onDragEnter=${h4}
            onDragOver=${h_}
            onDragLeave=${T_}
            onDrop=${O4}
        >
            <input type="file" multiple style="display:none" ref=${V0} onChange=${P_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${a}
                            class=${`workspace-menu-button${g0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),e0((I)=>!I)}}
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
                                <button class="workspace-menu-item" role="menuitem" onClick=${q5} disabled=${A0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${b1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${p?" active":""}`} role="menuitem" onClick=${G_}>
                                    ${p?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${B&&L`<div class="workspace-menu-separator"></div>`}
                                ${B&&!N1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${t_} disabled=${!y1}>Open in editor</button>
                                `}
                                ${D_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c4}>Rename selected</button>
                                `}
                                ${h1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A4}>Download selected file</button>
                                `}
                                ${C1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${G4}>Download selected folder (zip)</button>
                                `}
                                ${__&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${q4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Z&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${W_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${E4}>
                                        ${G?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${i_} title="New file" disabled=${A0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${$_} title="Refresh">
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
                ${X&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${M1}
                        tabIndex="0"
                        onClick=${s_}
                        onDblClick=${k_}
                        onKeyDown=${b4}
                        onTouchStart=${g4}
                        onTouchEnd=${I_}
                        onTouchMove=${m4}
                        onTouchCancel=${I_}
                    >
                        ${o_.map(({node:z,depth:I})=>{let w=z.type==="dir",f=z.path===B,r=z.path===E,Z0=w&&N.has(z.path),W0=z0&&z.path===z0,U0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${f?" selected":""}${W0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+I*y5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${l4}
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
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),e1();else if($0.key==="Escape")$0.preventDefault(),T1()}}
                                                onBlur=${T1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${w&&!Z0&&U0>0&&L`
                                        <span class="workspace-count">${U0}</span>
                                    `}
                                    ${w&&L`
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
                <div class="workspace-preview-splitter-h" onMouseDown=${Y5} onTouchStart=${b_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${i_} title="New file" disabled=${A0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!N1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>y1&&k1.current?.(B,D)}
                                    title=${Z5}
                                    disabled=${!y1}
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
                                    <a class="workspace-download" href=${w8(B,p)}
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
                    ${N1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${x0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${x0?.error&&L`<div class="workspace-error">${x0.error}</div>`}
                        ${x0?.payload&&x0.payload.segments?.length>0&&L`
                            <${_X} payload=${x0.payload} />
                        `}
                        ${x0?.payload&&(!x0.payload.segments||x0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!N1&&L`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${d&&L`
                        <div class="workspace-download-card">
                            <${$X} mediaId=${d} />
                        </div>
                    `}
                </div>
            `}
            ${X0&&L`
                <div class="workspace-drag-ghost" ref=${Q4}>${X0.label}</div>
            `}
        </aside>
    `}var jX=new Set(["kanban-editor","mindmap-editor"]);function QX(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function Oj(_,$,j){let Q=QX(_,$,j);return Q!=null&&jX.has(Q)}var ZX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,YX=/\.(csv|tsv)$/i,qX=/\.pdf$/i,GX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Dj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Aj({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:G,onEditSource:X,previewTabs:K,paneOverrides:N,onToggleDock:V,dockVisible:B,onToggleZen:O,zenMode:E,onPopOutTab:k}){let[A,J]=m(null),D=C(null);g(()=>{if(!A)return;let H=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[A]),g(()=>{let H=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let p=_.findIndex((Q0)=>Q0.id===$);if(S.shiftKey){let Q0=_[(p-1+_.length)%_.length];j?.(Q0.id)}else{let Q0=_[(p+1)%_.length];j?.(Q0.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let p=document.querySelector(".editor-pane");if(p&&p.contains(document.activeElement)){if(S.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Q]);let M=P((H,S)=>{if(H.button===1){H.preventDefault(),Q?.(S);return}if(H.button===0)j?.(S)},[j,Q]),d=P((H,S)=>{H.preventDefault(),J({id:S,x:H.clientX,y:H.clientY})},[]),h=P((H)=>{H.preventDefault(),H.stopPropagation()},[]),o=P((H,S)=>{H.preventDefault(),H.stopPropagation(),Q?.(S)},[Q]);g(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let t=P((H)=>{if(!(N instanceof Map))return null;return N.get(H)||null},[N]),R=w0(()=>_.find((H)=>H.id===A?.id)||null,[A?.id,_]),x=w0(()=>{let H=A?.id;if(!H)return!1;return Oj(H,t(H),(S)=>n0.resolve(S))},[A?.id,t]);if(!_.length)return null;return L`
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
                    ${R?.pinned?"Unpin":"Pin"}
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
                ${ZX.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id),S=A.id.split("/").pop()||"document",p="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(S);window.open(p,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${YX.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${qX.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${GX.test(A.id)&&!Dj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Dj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var KX=400,H3=60,Ej=220,J3="mdPreviewHeight";function XX(){try{let _=localStorage.getItem(J3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=H3?$:Ej}catch{return Ej}}function O3({getContent:_,path:$,onClose:j}){let[Q,Z]=m(""),[Y,q]=m(XX),G=C(null),X=C(null),K=C(""),N=C(_);return N.current=_,g(()=>{let O=()=>{let k=N.current?.()||"";if(k===K.current)return;K.current=k;try{let A=z_(k,null,{sanitize:!1});Z(A)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let E=setInterval(O,KX);return()=>clearInterval(E)},[]),g(()=>{if(G.current&&Q)V4(G.current).catch(()=>{})},[Q]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let E=O.clientY,k=X.current?.offsetHeight||Y,A=X.current?.parentElement,J=A?A.offsetHeight*0.7:500,D=O.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let M=(h)=>{let o=Math.min(Math.max(k-(h.clientY-E),H3),J);q(o)},d=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(J3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",d)}}
            onTouchStart=${(O)=>{O.preventDefault();let E=O.touches[0];if(!E)return;let k=E.clientY,A=X.current?.offsetHeight||Y,J=X.current?.parentElement,D=J?J.offsetHeight*0.7:500,M=O.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let d=(o)=>{let t=o.touches[0];if(!t)return;o.preventDefault();let R=Math.min(Math.max(A-(t.clientY-k),H3),D);q(R)},h=()=>{M.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(J3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",d),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
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
    `}function kj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=C(_);Y.current=_;let q=C($);q.current=$;let G=C(j);G.current=j;let X=C(Q);X.current=Q,g(()=>{let K=new f8((V,B)=>Y.current(V,B),(V)=>q.current(V),{chatJid:Z});K.connect();let N=()=>{K.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),K.disconnect()}},[Z])}function Mj(){let[_,$]=m(!1),[j,Q]=m("default"),Z=C(!1);g(()=>{let X=J5("notificationsEnabled",!1);if(Z.current=X,$(X),typeof Notification<"u")Q(Notification.permission)},[]),g(()=>{Z.current=_},[_]);let Y=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let K=await Y();if(Q(K||"default"),K!=="granted"){Z.current=!1,$(!1),q1("notificationsEnabled","false");return}}let X=!Z.current;Z.current=X,$(X),q1("notificationsEnabled",String(X))},[Y]),G=P((X,K)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let N=new Notification(X,{body:K});return N.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:G}}var B8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Ij({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=m(null),[Y,q]=m(!1),G=C(!1),X=C(null),K=C(!1),N=C(null),V=C(null),B=C(0);g(()=>{G.current=Y},[Y]),g(()=>{V.current=Q},[Q]),g(()=>{B.current+=1,N.current=null,K.current=!1,G.current=!1,q(!1)},[j]);let O=P(async(A=null)=>{let J=B.current;try{if(A){let D=await u6(A,50,0,j);if(J!==B.current)return;Z(D.posts),q(!1)}else{let D=await r4(10,null,j);if(J!==B.current)return;Z(D.posts),q(D.has_more)}}catch(D){if(J!==B.current)return;console.error("Failed to load posts:",D)}},[j]),E=P(async()=>{let A=B.current;try{let J=await r4(10,null,j);if(A!==B.current)return;Z((D)=>{if(!D||D.length===0)return J.posts;return B8([...J.posts,...D])}),q((D)=>D||J.has_more)}catch(J){if(A!==B.current)return;console.error("Failed to refresh timeline:",J)}},[j]),k=P(async(A={})=>{let J=B.current,D=V.current;if(!D||D.length===0)return;if(K.current)return;let{preserveScroll:M=!0,preserveMode:d="top",allowRepeat:h=!1}=A,o=(x)=>{if(!M){x();return}if(d==="top")$(x);else _(x)},R=D.slice().sort((x,H)=>x.id-H.id)[0]?.id;if(!Number.isFinite(R))return;if(!h&&N.current===R)return;K.current=!0,N.current=R;try{let x=await r4(10,R,j);if(J!==B.current)return;if(x.posts.length>0)o(()=>{Z((H)=>B8([...x.posts,...H||[]])),q(x.has_more)});else q(!1)}catch(x){if(J!==B.current)return;console.error("Failed to load more posts:",x)}finally{if(J===B.current)K.current=!1}},[j,_,$]);return g(()=>{X.current=k},[k]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:G,loadPosts:O,refreshTimeline:E,loadMore:k,loadMoreRef:X,loadingMoreRef:K,lastBeforeIdRef:N}}function Tj(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function D3(_,$){return _&&$}function Cj(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function Pj(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function Sj(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Q=new Set(j),Z=_.filter((Y)=>!Q.has(Y?.id));return Z.length===_.length?_:Z}function xj(){let[_,$]=m(null),[j,Q]=m({text:"",totalLines:0}),[Z,Y]=m(""),[q,G]=m({text:"",totalLines:0}),[X,K]=m(null),[N,V]=m(null),[B,O]=m(null),E=C(null),k=C(0),A=C(!1),J=C(""),D=C(""),M=C(null),d=C(null),h=C(null),o=C(null),t=C(!1),R=C(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:G,pendingRequest:X,setPendingRequest:K,currentTurnId:N,setCurrentTurnId:V,steerQueuedTurnId:B,setSteerQueuedTurnId:O,lastAgentEventRef:E,lastSilenceNoticeRef:k,isAgentRunningRef:A,draftBufferRef:J,thoughtBufferRef:D,pendingRequestRef:M,stalledPostIdRef:d,currentTurnIdRef:h,steerQueuedTurnIdRef:o,thoughtExpandedRef:t,draftExpandedRef:R}}function yj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=$.current||280,E=N.currentTarget;E.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientX;let M=Math.min(Math.max(O+(D.clientX-B),160),600);V.style.setProperty("--sidebar-width",`${M}px`),$.current=M},J=()=>{let D=Math.min(Math.max(O+(k-B),160),600);$.current=D,E.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",q1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,Y=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=$.current||280,k=N.currentTarget;k.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let A=(D)=>{let M=D.touches[0];if(!M)return;D.preventDefault();let d=Math.min(Math.max(E+(M.clientX-O),160),600);V.style.setProperty("--sidebar-width",`${d}px`),$.current=d},J=()=>{k.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",q1("sidebarWidth",String(Math.round($.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=j.current||$.current||280,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientX;let M=Math.min(Math.max(O+(D.clientX-B),200),800);V.style.setProperty("--editor-width",`${M}px`),j.current=M},J=()=>{let D=Math.min(Math.max(O+(k-B),200),800);j.current=D,E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,G=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=j.current||$.current||280,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let M=D.touches[0];if(!M)return;D.preventDefault();let d=Math.min(Math.max(E+(M.clientX-O),200),800);V.style.setProperty("--editor-width",`${d}px`),j.current=d},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",q1("editorWidth",String(Math.round(j.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,X=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientY,O=Q?.current||200,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientY;let M=Math.min(Math.max(O-(D.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${M}px`),Q)Q.current=M;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let D=Math.min(Math.max(O-(k-B),100),window.innerHeight*0.5);if(Q)Q.current=D;E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,K=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientY,E=Q?.current||200,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let M=D.touches[0];if(!M)return;D.preventDefault();let d=Math.min(Math.max(E-(M.clientY-O),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${d}px`),Q)Q.current=d;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",q1("dockHeight",String(Math.round(Q?.current||E))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:K}}function NX(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,G]of _.entries()){let X=q;if(Q==="dir"){if(q===$)X=j,Z=!0;else if(q.startsWith(`${$}/`))X=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)X=j,Z=!0;Y.set(X,G)}return Z?Y:_}function Rj({onTabClosed:_}={}){let $=C(_);$.current=_;let[j,Q]=m(()=>o0.getTabs()),[Z,Y]=m(()=>o0.getActiveId()),[q,G]=m(()=>o0.getTabs().length>0);g(()=>{return o0.onChange((R,x)=>{Q(R),Y(x),G(R.length>0)})},[]);let[X,K]=m(()=>new Set),[N,V]=m(()=>new Map),B=P((R)=>{K((x)=>{let H=new Set(x);if(H.has(R))H.delete(R);else H.add(R);return H})},[]),O=P((R)=>{K((x)=>{if(!x.has(R))return x;let H=new Set(x);return H.delete(R),H})},[]),E=P((R)=>{V((x)=>{if(!x.has(R))return x;let H=new Map(x);return H.delete(R),H})},[]),k=P((R,x={})=>{if(!R)return;let H=typeof x?.paneOverrideId==="string"&&x.paneOverrideId.trim()?x.paneOverrideId.trim():null,S={path:R,mode:"edit"};try{if(!(H?n0.get(H):n0.resolve(S))){if(!n0.get("editor")){console.warn(`[openEditor] No pane handler for: ${R}`);return}}}catch(Q0){console.warn(`[openEditor] paneRegistry.resolve() error for "${R}":`,Q0)}let p=typeof x?.label==="string"&&x.label.trim()?x.label.trim():void 0;if(o0.open(R,p),H)V((Q0)=>{if(Q0.get(R)===H)return Q0;let n=new Map(Q0);return n.set(R,H),n})},[]),A=P(()=>{let R=o0.getActiveId();if(R){let x=o0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}o0.close(R),O(R),E(R),$.current?.(R)}},[E,O]),J=P((R)=>{let x=o0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}o0.close(R),O(R),E(R),$.current?.(R)},[E,O]),D=P((R)=>{o0.activate(R)},[]),M=P((R)=>{let x=o0.getTabs().filter((p)=>p.id!==R&&!p.pinned),H=x.filter((p)=>p.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let S=x.map((p)=>p.id);o0.closeOthers(R),S.forEach((p)=>{O(p),E(p),$.current?.(p)})},[E,O]),d=P(()=>{let R=o0.getTabs().filter((S)=>!S.pinned),x=R.filter((S)=>S.dirty).length;if(x>0){if(!window.confirm(`${x} unsaved tab${x>1?"s":""} will be closed. Continue?`))return}let H=R.map((S)=>S.id);o0.closeAll(),H.forEach((S)=>{O(S),E(S),$.current?.(S)})},[E,O]),h=P((R)=>{o0.togglePin(R)},[]),o=P((R)=>{if(!R)return;V((x)=>{if(x.get(R)==="editor")return x;let H=new Map(x);return H.set(R,"editor"),H}),o0.activate(R)},[]),t=P(()=>{let R=o0.getActiveId();if(R)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:R}}))},[]);return g(()=>{let R=(x)=>{let{oldPath:H,newPath:S,type:p}=x.detail||{};if(!H||!S)return;if(p==="dir"){for(let Q0 of o0.getTabs())if(Q0.path===H||Q0.path.startsWith(`${H}/`)){let n=`${S}${Q0.path.slice(H.length)}`;o0.rename(Q0.id,n)}}else o0.rename(H,S);V((Q0)=>NX(Q0,H,S,p))};return window.addEventListener("workspace-file-renamed",R),()=>window.removeEventListener("workspace-file-renamed",R)},[]),g(()=>{let R=(x)=>{if(o0.hasUnsaved())x.preventDefault(),x.returnValue=""};return window.addEventListener("beforeunload",R),()=>window.removeEventListener("beforeunload",R)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:X,tabPaneOverrides:N,openEditor:k,closeEditor:A,handleTabClose:J,handleTabActivate:D,handleTabCloseOthers:M,handleTabCloseAll:d,handleTabTogglePin:h,handleTabTogglePreview:B,handleTabEditSource:o,revealInExplorer:t}}function A3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var E3=A3("warning",30000),wj=A3("finalize",120000),k3=A3("refresh",30000),fj=30000;function uj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function vj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function bj(_=30000){let[,$]=m(0);g(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function gj(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}function VX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function V6(_,$){return{text:_,totalLines:VX(_,$)}}function M3(_,$){return{text:$?.text||"",totalLines:gj(_),fullText:_}}function mj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function hj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function pj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function $5(_,$){return Boolean(_)&&Boolean($)&&_!==$}function S5(_,$){return Boolean(_)&&!Boolean($)}function cj(_,$){return _||$||null}function I3(_){return _?.turn_id||_?.turnId||null}function W8(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function T3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function lj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function C3(_){return String(_||"").trim()||"web:default"}function nj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function dj(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function ij(_={}){return W4(_)&&j6(_)}function BX(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function WX(_={},$={}){if(!ij(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=BX({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function rj(_={}){if(!ij(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,WX({window:$,document:j})},G=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},X=()=>{G();for(let V of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),G()},V);if(B!=null)Z.add(B)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;X()},N=$.visualViewport;return X(),$.addEventListener("focus",X),$.addEventListener("pageshow",X),$.addEventListener("resize",X),$.addEventListener("orientationchange",X),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",X,!0),N?.addEventListener?.("resize",X),N?.addEventListener?.("scroll",X),()=>{Y(),$.removeEventListener("focus",X),$.removeEventListener("pageshow",X),$.removeEventListener("resize",X),$.removeEventListener("orientationchange",X),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",X,!0),N?.removeEventListener?.("resize",X),N?.removeEventListener?.("scroll",X)}}function UX(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Q_(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:UX($,j)}function LX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function oj(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:LX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function sj(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var FX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function aj(_){return FX.has(String(_||"").trim())}function zX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function P3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(zX(_),{detail:Q})),!0}var HX=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function tj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(W4({window:j,navigator:Q}))};Z();let q=HX.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Z),()=>G.removeEventListener("change",Z);if(typeof G.addListener==="function")return G.addListener(Z),()=>G.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let G of q)G();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function ej(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function _Q(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(X)=>{let K=X?.detail?.path,N=typeof X?.detail?.label==="string"&&X.detail.label.trim()?X.detail.label.trim():void 0;if(K)Q?.(K,N)},q=(X)=>{let K=X?.detail?.path,N=typeof X?.detail?.label==="string"&&X.detail.label.trim()?X.detail.label.trim():void 0;if(K)Z?.(K,N)},G=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return G.forEach((X)=>j.addEventListener(X,Y)),j.addEventListener("pane:popout",q),()=>{G.forEach((X)=>j.removeEventListener(X,Y)),j.removeEventListener("pane:popout",q)}}function $Q(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function jQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(G)=>{if(G?.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault?.(),Q?.();return}if(G?.key==="Escape"&&Y())G.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function QQ(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function ZQ(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function YQ(_,$,j){return _||$?.label||j||"Pane"}function qQ(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function GQ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function KQ(_,$,j,Q){return _===$&&!j||Q}function XQ(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}var JX="piclaw_btw_session",VQ=900,NQ="__piclawRenameBranchFormLock__";function OX(){try{return import.meta.url}catch{return null}}function S3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function B6(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function BQ(_={}){let $=_.importMetaUrl===void 0?OX():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((X)=>String(X?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let G=new URL(Y,Q).searchParams.get("v");return G&&G.trim()?G.trim():null}catch{return null}}function x3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[NQ];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[NQ]=Q,Q}function WQ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function UQ(_={}){let $=typeof _.readItem==="function"?_.readItem:F_,j=_.storageKey||JX,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",G=typeof Z.thinking==="string"?Z.thinking:"",X=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,K=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:G,error:K==="error"?X||"BTW stream interrupted. You can retry.":X,model:null,status:K}}catch{return null}}function LQ(_,$={}){let j=$.defaultChatJid||"web:default",Q=B6(_,"chat_jid",j),Z=S3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=S3(_?.get?.("pane_popout")),q=B6(_,"pane_path"),G=B6(_,"pane_label"),X=S3(_?.get?.("branch_loader")),K=B6(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:G,branchLoaderMode:X,branchLoaderSourceChatJid:K}}function FQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:G,now:X=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let K=Y?.()||null;if(!K)return!1;if(Q||X<Number(Z||0)||K.inFlight||X<Number(K.cooldownUntil||0))return!1;return q?.(j.agent_name||""),G?.(!0),!0}function zQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function HQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:G,setIsRenamingBranch:X,renameChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:V,showIntentToast:B,closeRenameForm:O,now:E=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let k=E(),A=G?.()||null;if(!A)return!1;if(Y.current||k<Number(q.current||0)||A.inFlight||k<Number(A.cooldownUntil||0))return!1;Y.current=!0,A.inFlight=!0,X?.(!0);try{let J=j.agent_name||"",D=g8(Q,J);if(!D.canSubmit)return B?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let M=D.normalized||J,d=await K(j.chat_jid,{agentName:M});await Promise.allSettled([N?.(),V?.()]);let h=d?.branch?.agent_name||M||J;return B?.("Branch renamed",`@${h}`,"info",3500),O?.(),!0}catch(J){let D=J instanceof Error?J.message:String(J||"Could not rename branch."),M=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return B?.("Could not rename branch",M||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,X?.(!1);let J=E()+VQ;q.current=J;let D=G?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=J}}async function JQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:K,showIntentToast:N,baseHref:V,chatOnlyMode:B,navigate:O,confirm:E=(o)=>window.confirm(o)}=_;if(!$)return!1;let k=typeof j==="string"&&j.trim()?j.trim():"",A=typeof Q==="string"&&Q.trim()?Q.trim():"",J=k||Z?.chat_jid||A;if(!J)return N?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Z?.chat_jid===J?Z:null)||Y.find((o)=>o?.chat_jid===J)||q.find((o)=>o?.chat_jid===J)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return N?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let d=`@${D?.agent_name||J}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!E(`Prune ${d}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await G(J),await Promise.allSettled([X?.(),K?.()]);let o=D?.root_chat_jid||"web:default";N?.("Branch pruned",`${d} has been archived.`,"info",3000);let t=U4(V,o,{chatOnly:B});return O?.(t),!0}catch(o){let t=o instanceof Error?o.message:String(o||"Could not prune branch.");return N?.("Could not prune branch",t||"Could not prune branch.","warning",5000),!1}}async function OQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:G,chatOnlyMode:X,navigate:K}=_,N=typeof $==="string"?$.trim():"";if(!N||typeof j!=="function")return!1;try{let V=Q.find((J)=>J?.chat_jid===N)||null,B=await j(N);await Promise.allSettled([Z?.(),Y?.()]);let O=B?.branch,E=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():N,k=b2(V?.agent_name,O?.agent_name,E);q?.("Branch restored",k,"info",4200);let A=U4(G,E,{chatOnly:X});return K?.(A),!0}catch(V){let B=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function DQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let G=await j($);if(q())return!1;let X=G?.branch,K=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");let N=U4(Y,K,{chatOnly:!0});return Z?.(N,{replace:!0}),!0}catch(G){if(q())return!1;return Q?.({status:"error",message:Q8(G)}),!1}}async function AQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:G,baseHref:X}=_;try{let N=(await Q($))?.branch,V=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let B=N?.agent_name?`@${N.agent_name}`:V;q?.("New branch created",`Switched to ${B}.`,"info",2500);let O=U4(X,V,{chatOnly:j});return G?.(O),!0}catch(K){return q?.("Could not create branch",Q8(K),"warning",5000),!1}}async function EQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:G,currentChatJid:X,baseHref:K}=_;if(!$||j)return!1;let N=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!N)return!1;let V=t7(N);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=P$(V);if(!B)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;S$(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(N),E=a7(K,N,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:X,params:O});return x$(B,E),G?.(N),!0}catch(O){y$(B);let E=O instanceof Error?O.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",E,"warning",5000),!1}}async function kQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:G,setActiveChatAgents:X,setCurrentChatBranches:K,showIntentToast:N,baseHref:V}=_;if(!$||j)return!1;let B=o7(Q);if(!B)return N?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let E=s7(V,Q,{chatOnly:!0});if(!window.open(E,B.target))return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=P$(B);if(!O)return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;S$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await Y(Q))?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();X?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await G?.(Z);K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let J=U4(V,A,{chatOnly:!0});return x$(O,J),!0}catch(E){return y$(O),N?.("Could not open branch window",Q8(E),"error",5000),!1}}function W6(_){return _?{..._}:{text:"",totalLines:0}}function MQ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function DX(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function AX(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function IQ(_){return{agentStatus:_.agentStatus,agentDraft:W6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:W6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:MQ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:DX(_.silentRecovery)}}function TQ(_){let $=_.snapshot||AX(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(W6($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(W6($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(MQ($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function U8(_){return typeof _==="string"}function CQ(_){return typeof _==="string"&&_.trim().length>0}function y3(_){if(!Array.isArray(_))return[];return _.filter(($)=>CQ($?.chat_jid)&&CQ($?.agent_name))}function PQ(_){if(!Array.isArray(_))return[];return _.filter(($)=>U8($?.chat_jid)&&U8($?.agent_name))}function SQ(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if(U8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!U8(q?.chat_jid))return q;let G=Q.get(q.chat_jid);return G?{...q,...G,is_active:G.is_active??q.is_active}:q}),Y=U8(j)?j:"";return Z.sort((q,G)=>{if(q.chat_jid===Y&&G.chat_jid!==Y)return-1;if(G.chat_jid===Y&&q.chat_jid!==Y)return 1;let X=Boolean(q.archived_at),K=Boolean(G.archived_at);if(X!==K)return X?1:-1;if(Boolean(q.is_active)!==Boolean(G.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(G.chat_jid))}),Z}function R3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function xQ(_,$){let j=new Map(_),Q=R3($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function yQ(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=R3($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function RQ(_){if(_?.options?.remove)return!0;return R3(_)?.state!=="running"}function w3(_,$){return`${_}:${$}`}function wQ(_,$,j){let Q=w3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function fQ(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function f3(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function uQ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function EX(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function vQ(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!EX(Z));return Q.length===_.length?_:Q}function bQ(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function gQ(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function w4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function mQ(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function hQ(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function kX(_,$){let j=H_(_);return Boolean(_&&j===$)}function x5(_,$,j){if(!kX(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function pQ(_,$){return{..._,openedAt:$}}function cQ(_){let $=H_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function lQ(_,$,j){let Q=F7({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=H_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=H_(_),q=Boolean(Z&&Y&&Z===Y),G={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:G,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function nQ(_,$){if(!_||_?.source!=="live")return _||null;let j=H_($),Q=H_(_);if(j&&Q&&j!==Q)return _;return null}function dQ(_,$,j){return x5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function u3(_,$,j){if(j.errorMessage)return x5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return x5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function iQ(_,$,j){return x5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function rQ(_,$,j){return x5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function oQ(_,$,j){return x5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}var sQ=BQ(),aQ=v6,tQ=g6,MX=h6,eQ=d6,_Z=i6,v3=p6,b3=Q_(a1,"getAgentContext",null),IX=Q_(a1,"getAutoresearchStatus",null),TX=Q_(a1,"stopAutoresearch",{status:"ok"}),CX=Q_(a1,"dismissAutoresearch",{status:"ok"}),$Z=Q_(a1,"getAgentModels",{current:null,models:[]}),jZ=Q_(a1,"getActiveChatAgents",{chats:[]}),U6=Q_(a1,"getChatBranches",{chats:[]}),PX=Q_(a1,"renameChatBranch",null),SX=Q_(a1,"pruneChatBranch",null),xX=Q_(a1,"restoreChatBranch",null),QZ=Q_(a1,"getAgentQueueState",{count:0}),yX=Q_(a1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),RX=Q_(a1,"removeAgentQueueItem",{removed:!1}),wX=Q_(a1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});n0.register(E$);n0.register(a$);n0.register(s$);n0.register(t$);n0.register(e$);n0.register(_3);n0.register(j3);n0.register(Q3);n0.register(Y3);n0.register(K3);n0.register(X3);n0.register(r$);k$();n0.register(T$);n0.register(C$);function fX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:G,branchLoaderSourceChatJid:X}=w0(()=>LQ(_),[_]),[K,N]=m("disconnected"),[V,B]=m(()=>W4()),[O,E]=m(null),[k,A]=m(null),[J,D]=m(!1),[M,d]=m("current"),[h,o]=m([]),[t,R]=m([]),[x,H]=m(null),{agentStatus:S,setAgentStatus:p,agentDraft:Q0,setAgentDraft:n,agentPlan:_0,setAgentPlan:e,agentThought:Y0,setAgentThought:X0,pendingRequest:N0,setPendingRequest:z0,currentTurnId:D0,setCurrentTurnId:A0,steerQueuedTurnId:d0,setSteerQueuedTurnId:x0,lastAgentEventRef:M0,lastSilenceNoticeRef:i0,isAgentRunningRef:r0,draftBufferRef:b0,thoughtBufferRef:s0,pendingRequestRef:g0,stalledPostIdRef:e0,currentTurnIdRef:H0,steerQueuedTurnIdRef:h0,thoughtExpandedRef:_1,draftExpandedRef:Q1}=xj(),[Z_,D1]=m({}),[t0,g1]=m(null),[k1,Z1]=m(null),[m0,S1]=m(!1),[M1,s]=m(null),[V0,F0]=m([]),[G0,y0]=m([]),[P0,f0]=m(null),[k0,R0]=m(()=>new Map),[l0,O0]=m(()=>new Set),[v0,J0]=m([]),[j0,y]=m(!1),[a,L0]=m(()=>UQ()),[E0,u0]=m(null),Y1=C(new Set),A1=w0(()=>V0.find((W)=>W?.chat_jid===j)||null,[V0,j]),G1=w0(()=>G0.find((W)=>W?.chat_jid===j)||A1||null,[A1,G0,j]),m1=G1?.root_chat_jid||A1?.root_chat_jid||j,Q4=WQ(M),[N_,t1]=m(()=>({status:G?"running":"idle",message:G?"Preparing a new chat branch…":""})),V_=v0.length,Y_=C(new Set),$1=C([]),d1=C(new Set),Z4=C(0),w_=C({inFlight:!1,lastAttemptAt:0,turnId:null});Y_.current=new Set(v0.map((W)=>W.row_id)),$1.current=v0;let{notificationsEnabled:j5,notificationPermission:f4,toggleNotifications:u1,notify:B_}=Mj(),[x1,E1]=m(()=>new Set),[K1,f_]=m(()=>J5("workspaceOpen",!0)),u_=C(null),{editorOpen:X1,tabStripTabs:q_,tabStripActiveId:p0,previewTabs:T1,tabPaneOverrides:O_,openEditor:e1,closeEditor:u4,handleTabClose:i_,handleTabActivate:v4,handleTabCloseOthers:r_,handleTabCloseAll:Q5,handleTabTogglePin:o_,handleTabTogglePreview:v_,handleTabEditSource:y5,revealInExplorer:R5}=Rj({onTabClosed:(W)=>u_.current?.(W)}),N1=C(null),y1=C(null),Z5=C(null),D_=C(null),__=n0.getDockPanes().length>0,[h1,C1]=m(!1),v1=P(()=>C1((W)=>!W),[]),z1=P(()=>{e1(e4,{label:"Terminal"})},[e1]),A_=P(()=>{e1(z4,{label:"VNC"})},[e1]),E_=w0(()=>QQ(q_,p0),[p0,q_]),k_=w0(()=>ZQ(O_,p0),[O_,p0]),s_=w0(()=>YQ(q,E_,Y),[E_,q,Y]),$_=w0(()=>qQ(q_,T1,p0),[T1,p0,q_]),i1=w0(()=>GQ(Y,z4),[Y]),M_=w0(()=>KQ(Y,e4,$_,i1),[i1,$_,Y]),Y4=XQ(Z,Q,X1,__,h1),[H1,a_]=m(!1),b4=C(!1),g4=P(()=>{if(!X1||Q)return;if(b4.current=h1,h1)C1(!1);a_(!0)},[X1,Q,h1]),I_=P(()=>{if(!H1)return;if(a_(!1),b4.current)C1(!0),b4.current=!1},[H1]),m4=P(()=>{if(H1)I_();else g4()},[H1,g4,I_]);g(()=>{if(H1&&!X1)I_()},[H1,X1,I_]),g(()=>{if(!Z||!Y)return;if(o0.getActiveId()===Y)return;e1(Y,q?{label:q}:void 0)},[e1,q,Z,Y]),g(()=>{let W=N1.current;if(!W)return;if(y1.current)y1.current.dispose(),y1.current=null;let U=p0;if(!U)return;let T={path:U,mode:"edit"},b=(k_?n0.get(k_):null)||n0.resolve(T)||n0.get("editor");if(!b){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let v=b.mount(W,T);y1.current=v,v.onDirtyChange?.((q0)=>{o0.setDirty(U,q0)}),v.onSaveRequest?.(()=>{}),v.onClose?.(()=>{u4()});let l=o0.getViewState(U);if(l&&typeof v.restoreViewState==="function")requestAnimationFrame(()=>v.restoreViewState(l));if(typeof v.onViewStateChange==="function")v.onViewStateChange((q0)=>{o0.saveViewState(U,q0)});return requestAnimationFrame(()=>v.focus()),()=>{if(y1.current===v)v.dispose(),y1.current=null}},[p0,k_,u4]);let Y5=P(async(W)=>{let U=typeof p0==="string"?p0.trim():"",T=y1.current;if(!U||!T?.setContent)return;if(typeof T.isDirty==="function"&&T.isDirty())return;if(!(Array.isArray(W)&&W.length>0?W.some((v)=>{let l=Array.isArray(v?.changed_paths)?v.changed_paths.map((B0)=>typeof B0==="string"?B0.trim():"").filter(Boolean):[];if(l.length>0)return l.some((B0)=>B0==="."||B0===U);let q0=typeof v?.path==="string"?v.path.trim():"";return!q0||q0==="."||q0===U}):!0))return;try{let v=await r5(U,1e6,"edit"),l=typeof v?.text==="string"?v.text:"",q0=typeof v?.mtime==="string"&&v.mtime.trim()?v.mtime.trim():new Date().toISOString();T.setContent(l,q0)}catch(v){console.warn("[workspace_update] Failed to refresh active pane:",v)}},[p0]);g(()=>{let W=Z5.current;if(D_.current)D_.current.dispose(),D_.current=null;if(!W||!__||!h1)return;let U=n0.getDockPanes()[0];if(!U){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let T=U.mount(W,{mode:"view"});return D_.current=T,requestAnimationFrame(()=>T.focus?.()),()=>{if(D_.current===T)T.dispose(),D_.current=null}},[__,h1]);let[b_,g_]=m({name:"You",avatar_url:null,avatar_background:null}),H4=C(null),m_=C(!1),h4=C(!1),h_=C(!1),T_=C(null),I1=C(j),J4=C(new Map),O4=C(j),p4=C(0),W1=C(0),D4=C({}),q5=C({name:null,avatar_url:null}),b1=C({currentHashtag:null,searchQuery:null,searchOpen:!1}),G_=C(null),t_=C(null),c4=C(0),q4=C(0),A4=C(0),G4=C(null),C_=C(null),W_=C(null),E4=C(null),l4=C(0),P_=C({title:null,avatarBase:null}),z=C(null),I=C(!1),[w,f]=m(!1),r=C(0),[Z0,W0]=m(!1),[U0,$0]=m(""),T0=w0(()=>g8(U0,G1?.agent_name||""),[G1?.agent_name,U0]),R1=C(null),j_=P(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);bj(30000),g(()=>{if(!Z0)return;requestAnimationFrame(()=>{if(Z0)R1.current?.focus(),R1.current?.select?.()})},[Z0]),g(()=>{return t2()},[]),g(()=>{return tj(B)},[]),g(()=>{q1("workspaceOpen",String(K1))},[K1]),g(()=>{return rj()},[]),g(()=>{return()=>{j_()}},[j_]),g(()=>{if(!a){q1(BTW_SESSION_KEY,"");return}q1(BTW_SESSION_KEY,JSON.stringify({question:a.question||"",answer:a.answer||"",thinking:a.thinking||"",error:a.error||null,status:a.status||"success"}))},[a]),g(()=>{D4.current=Z_||{}},[Z_]),g(()=>{I1.current=j},[j]),g(()=>{q5.current=b_||{name:"You",avatar_url:null,avatar_background:null}},[b_]);let p1=P((W,U,T=null)=>{if(typeof document>"u")return;let b=(W||"").trim()||"PiClaw";if(P_.current.title!==b){document.title=b;let C0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(C0&&C0.getAttribute("content")!==b)C0.setAttribute("content",b);P_.current.title=b}let v=document.getElementById("dynamic-favicon");if(!v)return;let l=v.getAttribute("data-default")||v.getAttribute("href")||"/favicon.ico",q0=U||l,B0=U?`${q0}|${T||""}`:q0;if(P_.current.avatarBase!==B0){let C0=U?`${q0}${q0.includes("?")?"&":"?"}v=${T||Date.now()}`:q0;v.setAttribute("href",C0),P_.current.avatarBase=B0}},[]),w5=P((W)=>{if(!W)return;o((U)=>U.includes(W)?U:[...U,W])},[]),F=P((W)=>{o((U)=>U.filter((T)=>T!==W))},[]);u_.current=F;let u=P(()=>{o([])},[]),i=P((W)=>{if(!Array.isArray(W)){o([]);return}let U=[],T=new Set;for(let b of W){if(typeof b!=="string"||!b.trim())continue;let v=b.trim();if(T.has(v))continue;T.add(v),U.push(v)}o(U)},[]),c=P((W,U=null,T="info",b=3000)=>{j_(),H({title:W,detail:U||null,kind:T||"info"}),z.current=setTimeout(()=>{H((v)=>v?.title===W?null:v)},b)},[j_]),I0=P((W)=>{let U=lj(W,{editorOpen:X1,resolvePane:(T)=>n0.resolve(T)});if(U.kind==="open"){e1(U.path);return}if(U.kind==="toast")c(U.title,U.detail,U.level)},[X1,e1,c]),J1=P(()=>{let W=p0;if(W)w5(W)},[p0,w5]),P1=P((W)=>{if(!W)return;R((U)=>U.includes(W)?U:[...U,W])},[]),w1=P(async(W,U=null)=>{let T=(v)=>{v.scrollIntoView({behavior:"smooth",block:"center"}),v.classList.add("post-highlight"),setTimeout(()=>v.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+W);if(b){T(b);return}try{let v=typeof U==="string"&&U.trim()?U.trim():j,q0=(await b6(W,v))?.thread?.[0];if(!q0)return;l1((B0)=>{if(!B0)return[q0];if(B0.some((C0)=>C0.id===q0.id))return B0;return[...B0,q0]}),requestAnimationFrame(()=>{setTimeout(()=>{let B0=document.getElementById("post-"+W);if(B0)T(B0)},50)})}catch(v){console.error("[scrollToMessage] Failed to fetch message",W,v)}},[j]),K4=P((W)=>{R((U)=>U.filter((T)=>T!==W))},[]),n4=P(()=>{R([])},[]),G5=P((W)=>{if(!Array.isArray(W)){R([]);return}let U=[],T=new Set;for(let b of W){if(typeof b!=="string"||!b.trim())continue;let v=b.trim();if(T.has(v))continue;T.add(v),U.push(v)}R(U)},[]),K5=P((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";c("Compose failed",U,"error",5000)},[c]),K_=P((W={})=>{let U=Date.now();if(M0.current=U,W.running)r0.current=!0,y((T)=>T?T:!0);if(W.clearSilence)i0.current=0},[y]),c1=P(()=>{if(E4.current)clearTimeout(E4.current),E4.current=null;l4.current=0},[]);g(()=>()=>{c1()},[c1]);let X5=P(()=>{c1(),p((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:U,lastActivity:T,...b}=W;return b})},[c1]),k4=P((W)=>{if(!W)return;c1();let U=Date.now();l4.current=U,p({type:W.type||"active",last_activity:!0}),E4.current=setTimeout(()=>{if(l4.current!==U)return;p((T)=>{if(!T||!(T.last_activity||T.lastActivity))return T;return null})},fj)},[c1]),U1=P(()=>{r0.current=!1,y(!1),M0.current=null,i0.current=0,b0.current="",s0.current="",g0.current=null,C_.current=null,H0.current=null,h0.current=null,T_.current=null,w_.current={inFlight:!1,lastAttemptAt:0,turnId:null},c1(),A0(null),x0(null),_1.current=!1,Q1.current=!1},[c1,A0,x0,y]),e_=P((W)=>{if(!nj({remainingQueueCount:W,currentTurnId:H0.current,isAgentTurnActive:j0}))return;h0.current=null,x0(null)},[j0,x0]),N5=P(()=>IQ({agentStatus:S,agentDraft:Q0,agentPlan:_0,agentThought:Y0,pendingRequest:N0,currentTurnId:D0,steerQueuedTurnId:d0,isAgentTurnActive:j0,followupQueueItems:v0,activeModel:t0,activeThinkingLevel:k1,supportsThinking:m0,activeModelUsage:M1,contextUsage:P0,isAgentRunning:r0.current,wasAgentActive:h_.current,draftBuffer:b0.current,thoughtBuffer:s0.current,lastAgentEvent:M0.current,lastSilenceNotice:i0.current,lastAgentResponse:C_.current,currentTurnIdRef:H0.current,steerQueuedTurnIdRef:h0.current,thoughtExpanded:_1.current,draftExpanded:Q1.current,agentStatusRef:T_.current,silentRecovery:w_.current}),[t0,M1,k1,Q0,_0,S,Y0,P0,D0,v0,j0,N0,d0,m0]),L8=P((W)=>{TQ({snapshot:W,clearLastActivityTimer:c1,refs:{isAgentRunningRef:r0,wasAgentActiveRef:h_,lastAgentEventRef:M0,lastSilenceNoticeRef:i0,draftBufferRef:b0,thoughtBufferRef:s0,pendingRequestRef:g0,lastAgentResponseRef:C_,currentTurnIdRef:H0,steerQueuedTurnIdRef:h0,agentStatusRef:T_,silentRecoveryRef:w_,thoughtExpandedRef:_1,draftExpandedRef:Q1},setters:{setIsAgentTurnActive:y,setAgentStatus:p,setAgentDraft:n,setAgentPlan:e,setAgentThought:X0,setPendingRequest:z0,setCurrentTurnId:A0,setSteerQueuedTurnId:x0,setFollowupQueueItems:J0,setActiveModel:g1,setActiveThinkingLevel:Z1,setSupportsThinking:S1,setActiveModelUsage:s,setContextUsage:f0}})},[c1,A0,J0,y,x0]),S_=P((W)=>{if(!W)return;if(H0.current===W)return;H0.current=W,w_.current={inFlight:!1,lastAttemptAt:0,turnId:W},A0(W),h0.current=null,x0(null),b0.current="",s0.current="",n({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),z0(null),g0.current=null,C_.current=null,_1.current=!1,Q1.current=!1},[A0,x0]),M4=P((W)=>{if(typeof document<"u"){let C0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&C0)return}let U=C_.current;if(!U||!U.post)return;if(W&&U.turnId&&U.turnId!==W)return;let T=U.post;if(T.id&&G4.current===T.id)return;let b=String(T?.data?.content||"").trim();if(!b)return;G4.current=T.id||G4.current,C_.current=null;let v=b.replace(/\s+/g," ").slice(0,200),l=D4.current||{},B0=(T?.data?.agent_id?l[T.data.agent_id]:null)?.name||"Pi";B_(B0,v)},[B_]),U_=P(async(W,U)=>{if(W!=="thought"&&W!=="draft")return;let T=H0.current;if(W==="thought"){if(_1.current=U,T)try{await _Z(T,"thought",U)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!U)return;try{let b=T?await eQ(T,"thought"):null;if(b?.text)s0.current=b.text;X0((v)=>({...v||{text:"",totalLines:0},fullText:s0.current||v?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:v?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(Q1.current=U,T)try{await _Z(T,"draft",U)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!U)return;try{let b=T?await eQ(T,"draft"):null;if(b?.text)b0.current=b.text;n((v)=>({...v||{text:"",totalLines:0},fullText:b0.current||v?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:v?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),I4=C(null),V5=P(()=>{let W=G_.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);I4.current=V5;let L6=P((W)=>{let U=G_.current;if(!U||typeof W!=="function"){W?.();return}let{currentHashtag:T,searchQuery:b,searchOpen:v}=b1.current||{},l=!((b||v)&&!T),q0=l?U.scrollHeight-U.scrollTop:U.scrollTop;W(),requestAnimationFrame(()=>{let B0=G_.current;if(!B0)return;if(l){let C0=Math.max(B0.scrollHeight-q0,0);B0.scrollTop=C0}else{let C0=Math.max(B0.scrollHeight-B0.clientHeight,0),K0=Math.min(q0,C0);B0.scrollTop=K0}})},[]),f5=P((W)=>{let U=G_.current;if(!U||typeof W!=="function"){W?.();return}let T=U.scrollTop;W(),requestAnimationFrame(()=>{let b=G_.current;if(!b)return;let v=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(T,v)})},[]),g3=P((W)=>vQ(W,Y_.current),[]),{posts:u5,setPosts:l1,hasMore:ZZ,setHasMore:F8,hasMoreRef:m3,loadPosts:p_,refreshTimeline:r1,loadMore:YZ,loadMoreRef:F6}=Ij({preserveTimelineScroll:L6,preserveTimelineScrollTop:f5,chatJid:j}),B5=w0(()=>g3(u5),[u5,v0,g3]),z8=P(()=>{let W=e0.current;if(!W)return;l1((U)=>U?U.filter((T)=>T.id!==W):U),e0.current=null},[l1]),{handleSplitterMouseDown:qZ,handleSplitterTouchStart:GZ,handleEditorSplitterMouseDown:KZ,handleEditorSplitterTouchStart:XZ,handleDockSplitterMouseDown:NZ,handleDockSplitterTouchStart:VZ}=yj({appShellRef:t_,sidebarWidthRef:c4,editorWidthRef:q4,dockHeightRef:A4}),h3=P(()=>{if(!r0.current)return;r0.current=!1,i0.current=0,M0.current=null,H0.current=null,A0(null),_1.current=!1,Q1.current=!1;let W=(b0.current||"").trim();if(b0.current="",s0.current="",n({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),z0(null),g0.current=null,C_.current=null,!W){p({type:"error",title:"Response stalled - No content received"});return}let T=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),v=new Date().toISOString(),l={id:b,timestamp:v,data:{type:"agent_response",content:T,agent_id:"default",is_local_stall:!0}};e0.current=b,l1((q0)=>q0?B8([...q0,l]):[l]),I4.current?.(),p(null)},[A0]);g(()=>{b1.current={currentHashtag:O,searchQuery:k,searchOpen:J}},[O,k,J]);let j1=P(()=>{let W=++Z4.current,U=j;QZ(U).then((T)=>{if(W!==Z4.current)return;if(I1.current!==U)return;let b=d1.current,v=bQ(T?.items,b);if(v.length){J0((l)=>{if(gQ(l,v))return l;return v});return}b.clear(),e_(0),J0((l)=>l.length===0?l:[])}).catch(()=>{if(W!==Z4.current)return;if(I1.current!==U)return;J0((T)=>T.length===0?T:[])})},[e_,j,J0]),o1=P(async()=>{let W=j;try{let U=await b3(W);if(I1.current!==W)return;if(U)f0(U)}catch(U){if(I1.current!==W)return;console.warn("Failed to fetch agent context:",U)}},[j]),c_=P(async()=>{let W=j;try{let U=await IX(W);if(I1.current!==W)return;R0((T)=>xQ(T,U)),O0((T)=>f3(T,"autoresearch"))}catch(U){if(I1.current!==W)return;console.warn("Failed to fetch autoresearch status:",U)}},[j]),x_=P(async()=>{let W=j;try{let U=await v3(W);if(I1.current!==W)return null;if(!U||U.status!=="active"||!U.data){if(h_.current){let{currentHashtag:q0,searchQuery:B0,searchOpen:C0}=b1.current||{};if(!q0&&!B0&&!C0)r1()}return h_.current=!1,U1(),T_.current=null,p(null),n({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),z0(null),g0.current=null,U??null}h_.current=!0;let T=U.data;T_.current=T;let b=I3(T);if(b)S_(b);K_({running:!0,clearSilence:!0}),X5(),p(T);let v=W8(U.thought);if(v)X0((q0)=>{if(T3(q0,v.text))return q0;return s0.current=v.text,v});let l=W8(U.draft);if(l)n((q0)=>{if(T3(q0,l.text))return q0;return b0.current=l.text,l});return U}catch(U){return console.warn("Failed to fetch agent status:",U),null}},[U1,X5,K_,r1,S_]),z6=P(async()=>{if(!r0.current)return null;if(g0.current)return null;let W=H0.current||null,U=w_.current,T=Date.now();if(U.inFlight)return null;if(U.turnId===W&&T-U.lastAttemptAt<k3)return null;U.inFlight=!0,U.lastAttemptAt=T,U.turnId=W;try{let{currentHashtag:b,searchQuery:v,searchOpen:l}=b1.current||{};if(!b&&!v&&!l)await r1();return await j1(),await x_()}finally{U.inFlight=!1}},[x_,j1,r1]);g(()=>{let W=Math.min(1000,Math.max(100,Math.floor(E3/2))),U=setInterval(()=>{if(!r0.current)return;if(g0.current)return;let T=M0.current;if(!T)return;let b=Date.now(),v=b-T,l=N4(T_.current);if(v>=wj){if(!l)p({type:"waiting",title:"Re-syncing after a quiet period…"});z6();return}if(v>=E3){if(b-i0.current>=k3){if(!l){let q0=Math.floor(v/1000);p({type:"waiting",title:`Waiting for model… No events for ${q0}s`})}i0.current=b,z6()}}},W);return()=>clearInterval(U)},[z6]);let p3=P((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():null;if(!U||!sQ||U===sQ)return!1;if(H4.current===U)return!0;H4.current=U;let T=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!o0.hasUnsaved()&&!T&&!r0.current&&!g0.current&&!m_.current)return m_.current=!0,c("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{m_.current=!1}},350),!0;return c("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[r0,g0,c]),BZ=P((W)=>{if(N(W),W!=="connected"){p(null),n({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),z0(null),g0.current=null,U1();return}if(!h4.current){h4.current=!0;let{currentHashtag:v,searchQuery:l,searchOpen:q0}=b1.current||{};if(!v&&!l&&!q0)r1();x_(),j1(),o1();return}let{currentHashtag:U,searchQuery:T,searchOpen:b}=b1.current;if(!U&&!T&&!b)r1();x_(),j1(),o1()},[U1,r1,x_,j1,o1]),WZ=P(async(W)=>{E(W),l1(null),await p_(W)},[p_]),UZ=P(async()=>{E(null),A(null),l1(null),await p_()},[p_]),LZ=P(async(W,U=M)=>{if(!W||!W.trim())return;let T=U==="root"||U==="all"?U:"current";d(T),A(W.trim()),E(null),l1(null);try{let b=await aQ(W.trim(),50,0,j,T,m1);l1(b.results),F8(!1)}catch(b){console.error("Failed to search:",b),l1([])}},[j,m1,M]),FZ=P(()=>{D(!0),A(null),E(null),d("current"),l1([])},[]),zZ=P(()=>{D(!1),A(null),p_()},[p_]),vX=P(()=>{},[]),H8=!O&&!k&&!J,HZ=P(async(W)=>{if(!W)return;let U=W.id,T=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():j,b=B5?.filter((l)=>l?.data?.thread_id===U&&l?.id!==U).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let v=(l)=>{if(!l.length)return;E1((B0)=>{let C0=new Set(B0);return l.forEach((K0)=>C0.add(K0)),C0}),setTimeout(()=>{if(f5(()=>{l1((B0)=>B0?B0.filter((C0)=>!l.includes(C0.id)):B0)}),E1((B0)=>{let C0=new Set(B0);return l.forEach((K0)=>C0.delete(K0)),C0}),m3.current)F6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let l=await tQ(U,b>0,T);if(l?.ids?.length)v(l.ids)}catch(l){let q0=l?.message||"";if(b===0&&q0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let C0=await tQ(U,!0,T);if(C0?.ids?.length)v(C0.ids);return}console.error("Failed to delete post:",l),alert(`Failed to delete message: ${q0}`)}},[j,B5,f5]),c3=P(async()=>{try{let W=await MX();D1(uj(W));let U=W?.user||{};g_((b)=>{let v=typeof U.name==="string"&&U.name.trim()?U.name.trim():"You",l=typeof U.avatar_url==="string"?U.avatar_url.trim():null,q0=typeof U.avatar_background==="string"&&U.avatar_background.trim()?U.avatar_background.trim():null;if(b.name===v&&b.avatar_url===l&&b.avatar_background===q0)return b;return{name:v,avatar_url:l,avatar_background:q0}});let T=(W?.agents||[]).find((b)=>b.id==="default");p1(T?.name,T?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}},[p1]);g(()=>{c3();let W=O5("sidebarWidth",null),U=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(c4.current=U,t_.current)t_.current.style.setProperty("--sidebar-width",`${U}px`)},[c3]);let v5=j0||S!==null,l3=P((W)=>{if(!W||typeof W!=="object")return;let U=W.agent_id;if(!U)return;let{agent_name:T,agent_avatar:b}=W;if(!T&&b===void 0)return;let v=D4.current?.[U]||{id:U},l=v.name||null,q0=v.avatar_url??v.avatarUrl??v.avatar??null,B0=!1,C0=!1;if(T&&T!==v.name)l=T,C0=!0;if(b!==void 0){let K0=typeof b==="string"?b.trim():null,L1=typeof q0==="string"?q0.trim():null,F1=K0||null;if(F1!==(L1||null))q0=F1,B0=!0}if(!C0&&!B0)return;if(D1((K0)=>{let F1={...K0[U]||{id:U}};if(C0)F1.name=l;if(B0)F1.avatar_url=q0;return{...K0,[U]:F1}}),U==="default")p1(l,q0,B0?Date.now():null)},[p1]),n3=P((W)=>{if(!W||typeof W!=="object")return;let U=W.user_name??W.userName,T=W.user_avatar??W.userAvatar,b=W.user_avatar_background??W.userAvatarBackground;if(U===void 0&&T===void 0&&b===void 0)return;g_((v)=>{let l=typeof U==="string"&&U.trim()?U.trim():v.name||"You",q0=T===void 0?v.avatar_url:typeof T==="string"&&T.trim()?T.trim():null,B0=b===void 0?v.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(v.name===l&&v.avatar_url===q0&&v.avatar_background===B0)return v;return{name:l,avatar_url:q0,avatar_background:B0}})},[]),H6=P((W)=>{if(!W||typeof W!=="object")return;let U=W.model??W.current;if(U!==void 0)g1(U);if(W.thinking_level!==void 0)Z1(W.thinking_level??null);if(W.supports_thinking!==void 0)S1(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)s(W.provider_usage??null)},[]),b5=P(()=>{let W=j;$Z(W).then((U)=>{if(I1.current!==W)return;if(U)H6(U)}).catch(()=>{})},[H6,j]),n1=P(()=>{let W=j;Promise.all([jZ().catch(()=>({chats:[]})),U6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([U,T])=>{if(I1.current!==W)return;let b=y3(U?.chats),v=y3(T?.chats);F0(SQ(b,v,W))}).catch(()=>{if(I1.current!==W)return;F0([])})},[j]),s1=P(()=>{U6(m1).then((W)=>{y0(PQ(W?.chats))}).catch(()=>{})},[m1]),d3=P((W)=>{let U=W?.row_id;if(U==null)return;d1.current.add(U),J0((T)=>w4(T,U).items),yX(U,C3(j)).then(()=>{j1()}).catch((T)=>{console.warn("[queue] Failed to steer queued item:",T),c("Failed to steer message","The queued message could not be sent as steering.","warning"),d1.current.delete(U),j1()})},[j,j1,J0,c]),i3=P((W)=>{let U=W?.row_id;if(U==null)return;let T=w4($1.current,U);d1.current.add(U),e_(T.remainingQueueCount),J0((b)=>w4(b,U).items),RX(U,C3(j)).then(()=>{j1()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),c("Failed to remove message","The queued message could not be removed.","warning"),d1.current.delete(U),j1()})},[e_,j,j1,J0,c]),g5=P((W)=>{if(!W||typeof W!=="object")return;if(n1(),s1(),o1(),c_(),hQ(W))j1()},[n1,c_,s1,o1,j1]),JZ=P(async(W,U)=>{let T=typeof W?.key==="string"?W.key:"",b=typeof U?.key==="string"?U.key:"",v=w3(T,b);if(!T||!b)return;O0((l)=>wQ(l,T,b));try{let l=await uQ({panel:W,action:U,currentChatJid:j,stopAutoresearch:TX,dismissAutoresearch:CX,writeClipboard:(q0)=>navigator.clipboard.writeText(q0)});if(l.refreshAutoresearchStatus)c_();if(l.toast)c(l.toast.title,l.toast.detail,l.toast.kind,l.toast.durationMs)}catch(l){c("Panel action failed",l?.message||"Could not complete that action.","warning")}finally{O0((l)=>fQ(l,v))}},[j,c_,c]),J6=P(()=>{if(W_.current)W_.current.abort(),W_.current=null;L0(null)},[]),J8=P(async(W)=>{let U=String(W||"").trim();if(!U)return c("BTW needs a question","Usage: /btw <question>","warning"),!0;if(W_.current)W_.current.abort();let T=new AbortController;W_.current=T,L0({question:U,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await wX(U,{signal:T.signal,chatJid:K7(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(v,l)=>{if(v==="side_prompt_start")L0((q0)=>q0?{...q0,status:"running"}:q0)},onThinkingDelta:(v)=>{L0((l)=>l?{...l,thinking:`${l.thinking||""}${v||""}`}:l)},onTextDelta:(v)=>{L0((l)=>l?{...l,answer:`${l.answer||""}${v||""}`}:l)}});if(W_.current!==T)return!0;L0((v)=>v?{...v,answer:b?.result||v.answer||"",thinking:b?.thinking||v.thinking||"",model:b?.model||null,status:"success",error:null}:v)}catch(b){if(T.signal.aborted)return!0;L0((v)=>v?{...v,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:v)}finally{if(W_.current===T)W_.current=null}return!0},[j,c]),OZ=P(async({content:W})=>{let U=G7(W);if(!U)return!1;if(U.type==="help")return c("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(U.type==="clear")return J6(),c("BTW cleared","Closed the side conversation panel.","info"),!0;if(U.type==="ask")return await J8(U.question),!0;return!1},[J6,J8,c]),DZ=P(()=>{if(a?.question)J8(a.question)},[a,J8]),AZ=P(async()=>{let W=V7(a);if(!W)return;try{let U=await o4("default",W,null,[],v5?"queue":null,j);g5(U),c(U?.queued==="followup"?"BTW queued":"BTW injected",U?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(U){c("BTW inject failed",U?.message||"Could not inject BTW answer into chat.","warning")}},[a,g5,v5,c]),r3=P(async(W=null)=>{let[U,T,b,v,l,q0,B0]=await Promise.allSettled([v3(j),b3(j),QZ(j),$Z(j),jZ(),U6(m1),r4(20,null,j)]),C0=U.status==="fulfilled"?U.value:null,K0=T.status==="fulfilled"?T.value:null,L1=b.status==="fulfilled"?b.value:null,F1=v.status==="fulfilled"?v.value:null,d4=l.status==="fulfilled"?l.value:null,L_=q0.status==="fulfilled"?q0.value:null,i4=B0.status==="fulfilled"?B0.value:null,_4=Array.isArray(i4?.posts)?i4.posts:Array.isArray(u5)?u5:[],W5=_4.length?_4[_4.length-1]:null,c5=_4.filter((E6)=>E6?.data?.is_bot_message).length,SZ=_4.filter((E6)=>!E6?.data?.is_bot_message).length,_2=Number(L1?.count??$1.current.length??0)||0,$2=Array.isArray(d4?.chats)?d4.chats.length:V0.length,xZ=Array.isArray(L_?.chats)?L_.chats.length:G0.length,j2=Number(K0?.percent??P0?.percent??0)||0,yZ=Number(K0?.tokens??P0?.tokens??0)||0,RZ=Number(K0?.contextWindow??P0?.contextWindow??0)||0,wZ=F1?.current??t0??null,fZ=F1?.thinking_level??k1??null,uZ=F1?.supports_thinking??m0,vZ=C0?.status||(j0?"active":"idle"),bZ=C0?.data?.type||C0?.type||null;return{generatedAt:new Date().toISOString(),request:W,chat:{currentChatJid:j,rootChatJid:m1,activeChats:$2,branches:xZ},agent:{status:vZ,phase:bZ,running:Boolean(j0)},model:{current:wZ,thinkingLevel:fZ,supportsThinking:Boolean(uZ)},context:{tokens:yZ,contextWindow:RZ,percent:j2},queue:{count:_2},timeline:{loadedPosts:_4.length,botPosts:c5,userPosts:SZ,latestPostId:W5?.id??null,latestTimestamp:W5?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(j2)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,_2*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,$2*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,_4.length*5))}]}},[V0,t0,k1,P0,G0,j,m1,j0,u5,m0]),m5=P(()=>{b5(),n1(),s1(),j1(),o1(),c_()},[b5,n1,s1,j1,o1,c_]);g(()=>{m5();let W=setInterval(()=>{b5(),n1(),s1(),j1()},60000);return()=>clearInterval(W)},[m5,b5,n1,s1,j1]),g(()=>{R0(new Map),O0(new Set)},[j]),g(()=>{let W=!1,U=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;V5()})};if(O)return p_(O),()=>{W=!0};if(k)return aQ(k,50,0,j,M,m1).then((T)=>{if(W)return;l1(T.results),F8(!1)}).catch((T)=>{if(W)return;console.error("Failed to search:",T),l1([]),F8(!1)}),()=>{W=!0};return p_().then(()=>{U()}).catch((T)=>{if(W)return;console.error("Failed to load timeline:",T)}),()=>{W=!0}},[j,O,k,M,m1,p_,V5,F8,l1]),g(()=>{let W=O4.current||j;J4.current.set(W,N5())},[j,N5]),g(()=>{let W=O4.current||j;if(W===j)return;J4.current.set(W,N5()),O4.current=j,d1.current.clear(),L8(J4.current.get(j)||null),j1(),x_(),o1()},[j,x_,o1,j1,L8,N5]);let EZ=P(()=>{let{currentHashtag:W,searchQuery:U,searchOpen:T}=b1.current||{};if(!W&&!U&&!T)r1();m5()},[m5,r1]),o3=P((W,U="streaming")=>{let T=new Date().toISOString();u0((b)=>lQ(b,W,{fallbackStatus:U,currentChatJid:j,dismissedSessionKeys:Y1.current,updatedAt:T}))},[j]),O6=P((W,U)=>{let T=U?.turn_id,b=typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():null,l=b?b===j:W==="connected"||W==="workspace_update";if(l)l3(U),n3(U);if(W==="ui_theme"){e2(U);return}let q0=dj(W);if(q0.kind==="update"){if(!l)return;if(q0.shouldAdoptTurn&&S5(T,H0.current))S_(T);o3(U,q0.fallbackStatus||"streaming");return}if(q0.kind==="close"){if(!l)return;u0((K0)=>nQ(K0,U));return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))X5()}if(W==="connected"){if(p3(U?.app_asset_version))return;p(null),n({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),z0(null),g0.current=null,U1();let K0=j;v3(K0).then((L_)=>{if(I1.current!==K0)return;if(!L_||L_.status!=="active"||!L_.data)return;let i4=L_.data,_4=I3(i4);if(_4)S_(_4);K_({clearSilence:!0}),k4(i4);let W5=W8(L_.thought);if(W5)s0.current=W5.text,X0(W5);let c5=W8(L_.draft);if(c5)b0.current=c5.text,n(c5)}).catch((L_)=>{console.warn("Failed to fetch agent status:",L_)});let{currentHashtag:L1,searchQuery:F1,searchOpen:d4}=b1.current||{};if(!L1&&!F1&&!d4)r1();m5();return}if(W==="agent_status"){if(!l){if(U?.type==="done"||U?.type==="error")n1(),s1();return}if(U.type==="done"||U.type==="error"){if($5(T,H0.current))return;if(U.type==="done"){M4(T||H0.current);let{currentHashtag:K0,searchQuery:L1,searchOpen:F1}=b1.current||{};if(!K0&&!L1&&!F1)r1();if(U.context_usage)f0(U.context_usage)}if(o1(),h_.current=!1,U1(),d1.current.clear(),n1(),j1(),n({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),z0(null),U.type==="error")p({type:"error",title:U.title||"Agent error"}),setTimeout(()=>p(null),8000);else p(null)}else{if(T)S_(T);if(K_({running:!0,clearSilence:!0}),U.type==="thinking")b0.current="",s0.current="",n({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0});T_.current=U,p((K0)=>{if(K0&&K0.type===U.type&&K0.title===U.title)return K0;return U})}return}if(W==="agent_steer_queued"){if(!l)return;if($5(T,H0.current))return;let K0=cj(T,H0.current);if(!K0)return;h0.current=K0,x0(K0);return}if(W==="agent_followup_queued"){if(!l)return;J0((K0)=>mQ(K0,U)),j1();return}if(W==="agent_followup_consumed"){if(!l)return;let K0=U?.row_id;if(K0!=null){let L_=w4($1.current,K0);e_(L_.remainingQueueCount),J0((i4)=>w4(i4,K0).items)}j1();let{currentHashtag:L1,searchQuery:F1,searchOpen:d4}=b1.current||{};if(!L1&&!F1&&!d4)r1();return}if(W==="agent_followup_removed"){if(!l)return;let K0=U?.row_id;if(K0!=null){let L1=w4($1.current,K0);d1.current.add(K0),e_(L1.remainingQueueCount),J0((F1)=>w4(F1,K0).items)}j1();return}if(W==="agent_draft_delta"){if(!l)return;if($5(T,H0.current))return;if(S5(T,H0.current))S_(T);K_({running:!0,clearSilence:!0}),b0.current=hj(b0.current,U);let K0=Date.now();if(!p4.current||K0-p4.current>=100){p4.current=K0;let L1=b0.current;if(Q1.current)n((F1)=>M3(L1,F1));else n(V6(L1,null))}return}if(W==="agent_draft"){if(!l)return;if($5(T,H0.current))return;if(S5(T,H0.current))S_(T);K_({running:!0,clearSilence:!0});let K0=U.text||"",L1=U.mode||(U.kind==="plan"?"replace":"append");if(U.kind==="plan")e((F1)=>mj(F1,K0,L1));else if(!Q1.current)b0.current=K0,n(V6(K0,U.total_lines));return}if(W==="agent_thought_delta"){if(!l)return;if($5(T,H0.current))return;if(S5(T,H0.current))S_(T);K_({running:!0,clearSilence:!0}),s0.current=pj(s0.current,U);let K0=Date.now();if(_1.current&&(!W1.current||K0-W1.current>=100)){W1.current=K0;let L1=s0.current;X0((F1)=>M3(L1,F1))}return}if(W==="agent_thought"){if(!l)return;if($5(T,H0.current))return;if(S5(T,H0.current))S_(T);K_({running:!0,clearSilence:!0});let K0=U.text||"";if(!_1.current)s0.current=K0,X0(V6(K0,U.total_lines));return}if(W==="model_changed"){if(!l)return;if(U?.model!==void 0)g1(U.model);if(U?.thinking_level!==void 0)Z1(U.thinking_level??null);if(U?.supports_thinking!==void 0)S1(Boolean(U.supports_thinking));let K0=j;b3(K0).then((L1)=>{if(I1.current!==K0)return;if(L1)f0(L1)}).catch(()=>{});return}let B0=oj(W,U,j);if(B0.isStatusPanelWidgetEvent){if(B0.eventChatJid!==j)return;if(!B0.panelKey)return;if(R0((K0)=>yQ(K0,U)),RQ(U))O0((K0)=>f3(K0,B0.panelKey));P3(W,U);return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:U}));Y5(U?.updates);return}if(aj(W)){if(!l)return;P3(W,U);let K0=sj(W,U);if(K0)c(K0.title,K0.detail,K0.kind,K0.durationMs);return}let C0=H8(b1.current);if(W==="agent_response"){if(!l)return;z8(),C_.current={post:U,turnId:H0.current}}if(Tj(W,l,C0))l1((K0)=>Cj(K0,U)),I4.current?.();if(W==="interaction_updated"){if(!D3(l,C0))return;l1((K0)=>Pj(K0,U))}if(W==="interaction_deleted"){if(!D3(l,C0))return;let K0=U?.ids||[];if(K0.length){if(f5(()=>{l1((L1)=>Sj(L1,K0))}),m3.current)F6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[o3,U1,X5,j,F6,K_,M4,f5,n1,s1,r1,z8,S_,k4,l3,n3,b5,j1,J0,o1,p3]);g(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=O6,W.reset=()=>{z8(),U1(),p(null),n({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),z0(null)},W.finalize=()=>h3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[U1,h3,O6,z8]),kj({handleSseEvent:O6,handleConnectionStatusChange:BZ,loadPosts:p_,onWake:EZ,chatJid:j}),g(()=>{if(!B5||B5.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let U=W.slice(5);w1(U),history.replaceState(null,"",location.pathname+location.search)},[B5,w1]);let D6=S!==null;g(()=>{if(K!=="connected")return;let U=setInterval(()=>{let{currentHashtag:T,searchQuery:b,searchOpen:v}=b1.current||{},l=!T&&!b&&!v;if(D6){if(l)r1();j1(),x_(),o1(),c_()}else{if(l)r1();x_(),o1(),c_()}},D6?15000:60000);return()=>clearInterval(U)},[K,D6,x_,c_,o1,j1,r1]),g(()=>{return ej(()=>{x_(),o1(),j1(),c_()})},[x_,c_,o1,j1]);let kZ=P(()=>{f_((W)=>!W)},[]),s3=P((W)=>{if(typeof window>"u")return;let U=String(W||"").trim();if(!U||U===j)return;let T=U4(window.location.href,U,{chatOnly:Q});$?.(T)},[Q,j,$]),A6=P(()=>{FQ({hasWindow:typeof window<"u",currentBranchRecord:G1,renameBranchInFlight:I.current,renameBranchLockUntil:r.current,getFormLock:x3,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:W0})},[G1]),h5=P(()=>{zQ({setIsRenameBranchFormOpen:W0,setRenameBranchNameDraft:$0})},[]),a3=P(async(W)=>{await HQ({hasWindow:typeof window<"u",currentBranchRecord:G1,nextName:W,openRenameForm:A6,renameBranchInFlightRef:I,renameBranchLockUntilRef:r,getFormLock:x3,setIsRenamingBranch:f,renameChatBranch:PX,refreshActiveChatAgents:n1,refreshCurrentChatBranches:s1,showIntentToast:c,closeRenameForm:h5})},[h5,G1,n1,s1,A6,f,c]),t3=P(async(W=null)=>{await JQ({hasWindow:typeof window<"u",targetChatJid:W,currentChatJid:j,currentBranchRecord:G1,currentChatBranches:G0,activeChatAgents:V0,pruneChatBranch:SX,refreshActiveChatAgents:n1,refreshCurrentChatBranches:s1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[V0,Q,G1,G0,j,$,n1,s1,c]),MZ=P(async(W)=>{await OQ({targetChatJid:W,restoreChatBranch:xX,currentChatBranches:G0,refreshActiveChatAgents:n1,refreshCurrentChatBranches:s1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,G0,$,n1,s1,c]);g(()=>{if(!G||typeof window>"u")return;let W=!1;return DQ({branchLoaderSourceChatJid:X,forkChatBranch:n5,setBranchLoaderState:t1,navigate:$,baseHref:window.location.href,isCancelled:()=>W}),()=>{W=!0}},[G,X,$]);let IZ=P((W)=>{if(!W||typeof W!=="object")return;let U=H_(W);if(U)Y1.current.delete(U);u0(pQ(W,new Date().toISOString()))},[]),p5=P(()=>{u0((W)=>{let U=cQ(W);if(U.dismissedSessionKey)Y1.current.add(U.dismissedSessionKey);return U.nextWidget})},[]),TZ=P((W,U)=>{let T=typeof W?.kind==="string"?W.kind:"",b=H_(U);if(!T||!b)return;if(T==="widget.close"){p5();return}if(T==="widget.submit"){let v=O7(W?.payload),l=D7(W?.payload),q0=new Date().toISOString();if(u0((B0)=>dQ(B0,b,{kind:T,payload:W?.payload||null,submittedAt:q0,submissionText:v})),!v){if(c("Widget submission received","The widget submitted data without a message payload yet.","info",3500),l)p5();return}(async()=>{try{let B0=await o4("default",v,null,[],v5?"queue":null,j);if(g5(B0),u0((C0)=>u3(C0,b,{submittedAt:q0,submissionText:v,queued:B0?.queued||null})),c(B0?.queued==="followup"?"Widget submission queued":"Widget submission sent",B0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),l)p5()}catch(B0){u0((C0)=>u3(C0,b,{submittedAt:q0,submissionText:v,errorMessage:B0?.message||"Could not send the widget message."})),c("Widget submission failed",B0?.message||"Could not send the widget message.","warning",5000)}})();return}if(T==="widget.ready"||T==="widget.request_refresh"){let v=new Date().toISOString(),l=Boolean(W?.payload?.buildDashboard||W?.payload?.dashboardKind==="internal-state"),q0=Number(U?.runtimeState?.refreshCount||0)+1;if(u0((B0)=>iQ(B0,b,{kind:T,payload:W?.payload||null,eventAt:v,nextRefreshCount:q0,shouldBuildDashboard:l})),T==="widget.request_refresh")if(l)(async()=>{try{let B0=await r3(W?.payload||null);u0((C0)=>rQ(C0,b,{dashboard:B0,at:new Date().toISOString(),count:q0,echo:W?.payload||null})),c("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(B0){u0((C0)=>oQ(C0,b,{errorMessage:B0?.message||"Could not build dashboard.",at:new Date().toISOString(),count:q0})),c("Dashboard build failed",B0?.message||"Could not build dashboard.","warning",5000)}})();else c("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[r3,j,p5,g5,v5,c]);g(()=>{Y1.current.clear(),u0(null)},[j]);let CZ=P(async()=>{await AQ({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:n5,refreshActiveChatAgents:n1,refreshCurrentChatBranches:s1,showIntentToast:c,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,n1,s1,c]),O8=P(async(W,U)=>{await EQ({hasWindow:typeof window<"u",isWebAppMode:V,path:W,label:U,showIntentToast:c,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(T)=>{let v=(typeof p0==="string"?p0.trim():"")===T?y1.current:T===e4?D_.current:null;if(typeof v?.preparePopoutTransfer==="function")return await v.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(T)=>{let b=o0.get(T);if(b&&!b.dirty){i_(T);return}if(T===e4&&h1)C1(!1)}})},[j,h1,i_,V,c,p0]);g(()=>_Q({openTab:(W,U)=>e1(W,U?{label:U}:void 0),popOutPane:(W,U)=>{O8(W,U)}}),[O8,e1]);let PZ=P(async()=>{await kQ({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:m1,forkChatBranch:n5,getActiveChatAgents:m6,getChatBranches:U6,setActiveChatAgents:F0,setCurrentChatBranches:y0,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,m1,V,c]);g(()=>{if(!X1)return;if(typeof window>"u")return;let W=t_.current;if(!W)return;if(!q4.current){let U=O5("editorWidth",null),T=c4.current||280;q4.current=Number.isFinite(U)?U:T}if(W.style.setProperty("--editor-width",`${q4.current}px`),!A4.current){let U=O5("dockHeight",null);A4.current=Number.isFinite(U)?U:200}W.style.setProperty("--dock-height",`${A4.current}px`)},[X1]),g(()=>{if(!__||Q)return;return $Q(v1)},[v1,__,Q]),g(()=>{if(Q)return;return jQ({toggleZenMode:m4,exitZenMode:I_,zenMode:H1,isZenModeActive:()=>H1})},[m4,I_,H1,Q]);let e3=Boolean(d0&&d0===(S?.turn_id||D0));if(G)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${N_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${N_.message}</p>
                    </div>
                </div>
            </div>
        `;if(Z)return L`
            <div class=${`app-shell pane-popout${X1?" editor-open":""}`} ref=${t_}>
                <div class="editor-pane-container pane-popout-container">
                    ${X1&&!M_&&L`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${$_?L`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${s_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${q_.length>1&&L`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${q_.map((W)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${W.id===p0?" active":""}`}
                                                                onClick=${(U)=>{v4(W.id),U.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${W.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${p0&&T1.has(p0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(W)=>{v_(p0),W.currentTarget.closest("details")?.removeAttribute("open")}}>
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
                    ${X1?L`<div class="editor-pane-host" ref=${N1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${X1&&p0&&T1.has(p0)&&L`
                        <${O3}
                            getContent=${()=>y1.current?.getContent?.()}
                            path=${p0}
                            onClose=${()=>v_(p0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${K1?"":" workspace-collapsed"}${X1?" editor-open":""}${Q?" chat-only":""}${H1?" zen-mode":""}`} ref=${t_}>
            ${Z0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(W)=>{if(W.target===W.currentTarget)h5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(W)=>{W.preventDefault(),a3(U0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${R1}
                            value=${U0}
                            onInput=${(W)=>{let U=W.currentTarget?.value??"";$0(String(U))}}
                            onKeyDown=${(W)=>{if(W.key==="Escape")W.preventDefault(),h5()}}
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
                                onClick=${h5}
                                disabled=${w}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Q&&L`
                <${Jj}
                    onFileSelect=${w5}
                    visible=${K1}
                    active=${K1||X1}
                    onOpenEditor=${e1}
                    onOpenTerminalTab=${z1}
                    onOpenVncTab=${A_}
                    onToggleTerminal=${__?v1:void 0}
                    terminalVisible=${Boolean(__&&h1)}
                />
                <button
                    class=${`workspace-toggle-tab${K1?" open":" closed"}`}
                    onClick=${kZ}
                    title=${K1?"Hide workspace":"Show workspace"}
                    aria-label=${K1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${qZ} onTouchStart=${GZ}></div>
            `}
            ${Y4&&L`
                <div class="editor-pane-container">
                    ${H1&&L`<div class="zen-hover-zone"></div>`}
                    ${X1&&L`
                        <${Aj}
                            tabs=${q_}
                            activeId=${p0}
                            onActivate=${v4}
                            onClose=${i_}
                            onCloseOthers=${r_}
                            onCloseAll=${Q5}
                            onTogglePin=${o_}
                            onTogglePreview=${v_}
                            onEditSource=${y5}
                            previewTabs=${T1}
                            paneOverrides=${O_}
                            onToggleDock=${__?v1:void 0}
                            dockVisible=${__&&h1}
                            onToggleZen=${m4}
                            zenMode=${H1}
                            onPopOutTab=${V?void 0:O8}
                        />
                    `}
                    ${X1&&L`<div class="editor-pane-host" ref=${N1}></div>`}
                    ${X1&&p0&&T1.has(p0)&&L`
                        <${O3}
                            getContent=${()=>y1.current?.getContent?.()}
                            path=${p0}
                            onClose=${()=>v_(p0)}
                        />
                    `}
                    ${__&&h1&&L`<div class="dock-splitter" onMouseDown=${NZ} onTouchStart=${VZ}></div>`}
                    ${__&&L`<div class=${`dock-panel${h1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&L`
                                    <button class="dock-panel-action" onClick=${()=>O8(e4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${v1} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${Z5}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${KZ} onTouchStart=${XZ}></div>
            `}
            <div class="container">
                ${k&&vj()&&L`<div class="search-results-spacer"></div>`}
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
                                        onChange=${(W)=>s3(W.currentTarget.value)}
                                    >
                                        ${G0.map((W)=>L`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${m8(W,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${G1?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${A6}
                                    title=${w?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${w}
                                >
                                    ${w?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${G1?.chat_jid&&G1.chat_jid!==(G1.root_chat_jid||G1.chat_jid)&&L`
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
                        <button class="back-btn" onClick=${UZ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${k} · ${Q4}`}</span>
                    </div>
                `}
                <${l7}
                    posts=${B5}
                    hasMore=${H8?ZZ:!1}
                    onLoadMore=${H8?YZ:void 0}
                    timelineRef=${G_}
                    onHashtagClick=${WZ}
                    onMessageRef=${P1}
                    onScrollToMessage=${w1}
                    onFileRef=${I0}
                    onPostClick=${void 0}
                    onDeletePost=${HZ}
                    onOpenWidget=${IZ}
                    emptyMessage=${O?`No posts with #${O}`:k?`No results for "${k}"`:void 0}
                    agents=${Z_}
                    user=${b_}
                    reverse=${H8}
                    removingPostIds=${x1}
                    searchQuery=${k}
                />
                <${F$}
                    status=${N4(S)?null:S}
                    draft=${Q0}
                    plan=${_0}
                    thought=${Y0}
                    pendingRequest=${N0}
                    intent=${x}
                    turnId=${D0}
                    steerQueued=${e3}
                    onPanelToggle=${U_}
                    showExtensionPanels=${!1}
                />
                <${B7}
                    session=${a}
                    onClose=${J6}
                    onRetry=${DZ}
                    onInject=${AZ}
                />
                <${k7}
                    widget=${E0}
                    onClose=${p5}
                    onWidgetEvent=${TZ}
                />
                <${F$}
                    extensionPanels=${Array.from(k0.values())}
                    pendingPanelActions=${l0}
                    onExtensionPanelAction=${JZ}
                    turnId=${D0}
                    steerQueued=${e3}
                    onPanelToggle=${U_}
                    showCorePanels=${!1}
                />
                <${G$}
                    items=${J?[]:v0}
                    onInjectQueuedFollowup=${d3}
                    onRemoveQueuedFollowup=${i3}
                    onOpenFilePill=${I0}
                />
                <${m2}
                    onPost=${()=>{let{searchQuery:W,searchOpen:U}=b1.current||{};if(!W&&!U)p_(),V5()}}
                    onFocus=${V5}
                    searchMode=${J}
                    searchScope=${M}
                    onSearch=${LZ}
                    onSearchScopeChange=${d}
                    onEnterSearch=${FZ}
                    onExitSearch=${zZ}
                    fileRefs=${h}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${u}
                    onSetFileRefs=${i}
                    messageRefs=${t}
                    onRemoveMessageRef=${K4}
                    onClearMessageRefs=${n4}
                    onSetMessageRefs=${G5}
                    onSwitchChat=${s3}
                    onRenameSession=${a3}
                    isRenameSessionInProgress=${w}
                    onCreateSession=${CZ}
                    onDeleteSession=${t3}
                    onRestoreSession=${MZ}
                    activeEditorPath=${Q?null:p0}
                    onAttachEditorFile=${Q?void 0:J1}
                    onOpenFilePill=${I0}
                    followupQueueCount=${V_}
                    followupQueueItems=${v0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${d3}
                    onRemoveQueuedFollowup=${i3}
                    onSubmitIntercept=${OZ}
                    onMessageResponse=${g5}
                    onSubmitError=${K5}
                    onPopOutChat=${V?void 0:PZ}
                    isAgentActive=${v5}
                    activeChatAgents=${V0}
                    currentChatJid=${j}
                    connectionStatus=${K}
                    activeModel=${t0}
                    modelUsage=${M1}
                    thinkingLevel=${k1}
                    supportsThinking=${m0}
                    contextUsage=${P0}
                    notificationsEnabled=${j5}
                    notificationPermission=${f4}
                    onToggleNotifications=${u1}
                    onModelChange=${g1}
                    onModelStateChange=${H6}
                    statusNotice=${N4(S)?S:null}
                />
                <${P7}
                    request=${N0}
                    onRespond=${()=>{z0(null),g0.current=null}}
                />
            </div>
        </div>
    `}function uX(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=P((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},G=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",G);else window.history.pushState(null,"",G);$(window.location.href)},[]),Q=w0(()=>new URL(_).searchParams,[_]);return L`<${fX} locationParams=${Q} navigate=${j} />`}P4(L`<${uX} />`,document.getElementById("app"));

//# debugId=2C77863B618E9A6264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
