var JZ=Object.defineProperty;var OZ=(_)=>_;function DZ(_,$){this[_]=OZ.bind(null,$)}var AZ=(_,$)=>{for(var j in $)JZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:DZ.bind($,j)})};var D8,U1,q2,EZ,C4,r3,X2,G2,K2,k6,O6,D6,N2,H8={},J8=[],MZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,A8=Array.isArray;function N4(_,$){for(var j in $)_[j]=$[j];return _}function I6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function E8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?D8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return F8(_,q,Q,Z,null)}function F8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++q2:Z,__i:-1,__u:0};return Z==null&&U1.vnode!=null&&U1.vnode(Y),Y}function M8(_){return _.children}function B5(_,$){this.props=_,this.context=$}function W5(_,$){if($==null)return _.__?W5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?W5(_):null}function kZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=N4({},$);Y.__v=$.__v+1,U1.vnode&&U1.vnode(Y),T6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?W5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,U2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&V2(Y)}}function V2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),V2(_)}function A6(_){(!_.__d&&(_.__d=!0)&&C4.push(_)&&!O8.__r++||r3!=U1.debounceRendering)&&((r3=U1.debounceRendering)||X2)(O8)}function O8(){try{for(var _,$=1;C4.length;)C4.length>$&&C4.sort(G2),_=C4.shift(),$=C4.length,kZ(_)}finally{C4.length=O8.__r=0}}function B2(_,$,j,Q,Z,Y,q,X,K,G,N){var V,B,O,E,k,A,J,D=Q&&Q.__k||J8,I=$.length;for(K=IZ(j,$,D,K,I),V=0;V<I;V++)(O=j.__k[V])!=null&&(B=O.__i!=-1&&D[O.__i]||H8,O.__i=V,A=T6(_,O,B,Z,Y,q,X,K,G,N),E=O.__e,O.ref&&B.ref!=O.ref&&(B.ref&&P6(B.ref,null,O),N.push(O.ref,O.__c||E,O)),k==null&&E!=null&&(k=E),(J=!!(4&O.__u))||B.__k===O.__k?K=W2(O,K,_,J):typeof O.type=="function"&&A!==void 0?K=A:E&&(K=E.nextSibling),O.__u&=-7);return j.__e=k,K}function IZ(_,$,j,Q,Z){var Y,q,X,K,G,N=j.length,V=N,B=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=F8(null,q,null,null,null):A8(q)?q=_.__k[Y]=F8(M8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=F8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,K=Y+B,q.__=_,q.__b=_.__b+1,X=null,(G=q.__i=TZ(q,j,K,V))!=-1&&(V--,(X=j[G])&&(X.__u|=2)),X==null||X.__v==null?(G==-1&&(Z>N?B--:Z<N&&B++),typeof q.type!="function"&&(q.__u|=4)):G!=K&&(G==K-1?B--:G==K+1?B++:(G>K?B--:B++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<N;Y++)(X=j[Y])!=null&&(2&X.__u)==0&&(X.__e==Q&&(Q=W5(X)),F2(X,X));return Q}function W2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=W2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=W5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function TZ(_,$,j,Q){var Z,Y,q,X=_.key,K=_.type,G=$[j],N=G!=null&&(2&G.__u)==0;if(G===null&&X==null||N&&X==G.key&&K==G.type)return j;if(Q>(N?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&X==G.key&&K==G.type)return q}return-1}function o3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||MZ.test($)?j:j+"px"}function L8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||o3(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||o3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(K2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=k6,_.addEventListener($,Y?D6:O6,Y)):_.removeEventListener($,Y?D6:O6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function s3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=k6++;else if($.t<j.u)return;return j(U1.event?U1.event($):$)}}}function T6(_,$,j,Q,Z,Y,q,X,K,G){var N,V,B,O,E,k,A,J,D,I,i,h,o,t,R,x=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),Y=[X=$.__e=j.__e]),(N=U1.__b)&&N($);_:if(typeof x=="function")try{if(J=$.props,D=x.prototype&&x.prototype.render,I=(N=x.contextType)&&Q[N.__c],i=N?I?I.props.value:N.__:Q,j.__c?A=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new x(J,i):($.__c=V=new B5(J,i),V.constructor=x,V.render=CZ),I&&I.sub(V),V.state||(V.state={}),V.__n=Q,B=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&x.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=N4({},V.__s)),N4(V.__s,x.getDerivedStateFromProps(J,V.__s))),O=V.props,E=V.state,V.__v=$,B)D&&x.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&x.getDerivedStateFromProps==null&&J!==O&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,i),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,i)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),J8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,i),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(O,E,k)})}if(V.context=i,V.props=J,V.__P=_,V.__e=!1,h=U1.__r,o=0,D)V.state=V.__s,V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),J8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++o<25);V.state=V.__s,V.getChildContext!=null&&(Q=N4(N4({},Q),V.getChildContext())),D&&!B&&V.getSnapshotBeforeUpdate!=null&&(k=V.getSnapshotBeforeUpdate(O,E)),t=N!=null&&N.type===M8&&N.key==null?L2(N.props.children):N,X=B2(_,A8(t)?t:[t],$,j,Q,Z,Y,q,X,K,G),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),A&&(V.__E=V.__=null)}catch(H){if($.__v=null,K||Y!=null)if(H.then){for($.__u|=K?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;Y[Y.indexOf(X)]=null,$.__e=X}else{for(R=Y.length;R--;)I6(Y[R]);E6($)}else $.__e=j.__e,$.__k=j.__k,H.then||E6($);U1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=PZ(j.__e,$,j,Q,Z,Y,q,K,G);return(N=U1.diffed)&&N($),128&$.__u?void 0:X}function E6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(E6))}function U2(_,$,j){for(var Q=0;Q<j.length;Q++)P6(j[Q],j[++Q],j[++Q]);U1.__c&&U1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){U1.__e(Y,Z.__v)}})}function L2(_){return typeof _!="object"||_==null||_.__b>0?_:A8(_)?_.map(L2):N4({},_)}function PZ(_,$,j,Q,Z,Y,q,X,K){var G,N,V,B,O,E,k,A=j.props||H8,J=$.props,D=$.type;if(D=="svg"?Z="http://www.w3.org/2000/svg":D=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((O=Y[G])&&"setAttribute"in O==!!D&&(D?O.localName==D:O.nodeType==3)){_=O,Y[G]=null;break}}if(_==null){if(D==null)return document.createTextNode(J);_=document.createElementNS(Z,D,J.is&&J),X&&(U1.__m&&U1.__m($,Y),X=!1),Y=null}if(D==null)A===J||X&&_.data==J||(_.data=J);else{if(Y=Y&&D8.call(_.childNodes),!X&&Y!=null)for(A={},G=0;G<_.attributes.length;G++)A[(O=_.attributes[G]).name]=O.value;for(G in A)O=A[G],G=="dangerouslySetInnerHTML"?V=O:G=="children"||(G in J)||G=="value"&&("defaultValue"in J)||G=="checked"&&("defaultChecked"in J)||L8(_,G,null,O,Z);for(G in J)O=J[G],G=="children"?B=O:G=="dangerouslySetInnerHTML"?N=O:G=="value"?E=O:G=="checked"?k=O:X&&typeof O!="function"||A[G]===O||L8(_,G,O,A[G],Z);if(N)X||V&&(N.__html==V.__html||N.__html==_.innerHTML)||(_.innerHTML=N.__html),$.__k=[];else if(V&&(_.innerHTML=""),B2($.type=="template"?_.content:_,A8(B)?B:[B],$,j,Q,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&W5(j,0),X,K),Y!=null)for(G=Y.length;G--;)I6(Y[G]);X||(G="value",D=="progress"&&E==null?_.removeAttribute("value"):E!=null&&(E!==_[G]||D=="progress"&&!E||D=="option"&&E!=A[G])&&L8(_,G,E,A[G],Z),G="checked",k!=null&&k!=_[G]&&L8(_,G,k,A[G],Z))}return _}function P6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){U1.__e(Z,j)}}function F2(_,$,j){var Q,Z;if(U1.unmount&&U1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||P6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){U1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&F2(Q[Z],$,j||typeof _.type!="function");j||I6(_.__e),_.__c=_.__=_.__e=void 0}function CZ(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),U1.__&&U1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],T6($,_=(!Q&&j||$).__k=E8(M8,null,[_]),Z||H8,H8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?D8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),U2(Y,_,q)}function z2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,A6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+N2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}D8=J8.slice,U1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(X){_=X}throw _}},q2=0,EZ=function(_){return _!=null&&_.constructor===void 0},B5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=N4({},this.state),typeof _=="function"&&(_=_(N4({},j),this.props)),_&&N4(j,_),_!=null&&this.__v&&($&&this._sb.push($),A6(this))},B5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),A6(this))},B5.prototype.render=M8,C4=[],X2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,G2=function(_,$){return _.__v.__b-$.__v.__b},O8.__r=0,K2=/(PointerCapture)$|Capture$/i,k6=0,O6=s3(!1),D6=s3(!0),N2=0;var S4,W1,J6,a3,U5=0,H2=[],O1=U1,t3=O1.__b,e3=O1.__r,_2=O1.diffed,$2=O1.__c,j2=O1.unmount,Q2=O1.__;function L5(_,$){O1.__h&&O1.__h(W1,_,U5||$),U5=0;var j=W1.__H||(W1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return U5=1,C6(E2,_)}function C6(_,$,j){var Q=L5(S4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):E2(void 0,$),function(X){var K=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(K,X);K!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=W1,!W1.__f)){var Z=function(X,K,G){if(!Q.__c.__H)return!0;var N=Q.__c.__H.__.filter(function(B){return B.__c});if(N.every(function(B){return!B.__N}))return!Y||Y.call(this,X,K,G);var V=Q.__c.props!==X;return N.some(function(B){if(B.__N){var O=B.__[0];B.__=B.__N,B.__N=void 0,O!==B.__[0]&&(V=!0)}}),Y&&Y.call(this,X,K,G)||V};W1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=W1;W1.componentWillUpdate=function(X,K,G){if(this.__e){var N=Y;Y=void 0,Z(X,K,G),Y=N}q&&q.call(this,X,K,G)},W1.shouldComponentUpdate=Z}return Q.__N||Q.__}function g(_,$){var j=L5(S4++,3);!O1.__s&&S6(j.__H,$)&&(j.__=_,j.u=$,W1.__H.__h.push(j))}function h5(_,$){var j=L5(S4++,4);!O1.__s&&S6(j.__H,$)&&(j.__=_,j.u=$,W1.__h.push(j))}function P(_){return U5=5,f0(function(){return{current:_}},[])}function J2(_,$,j){U5=6,h5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function f0(_,$){var j=L5(S4++,7);return S6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function C(_,$){return U5=8,f0(function(){return _},$)}function O2(_){var $=W1.context[_.__c],j=L5(S4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(W1)),$.props.value):_.__}function D2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function A2(_){var $=L5(S4++,10),j=m();return $.__=_,W1.componentDidCatch||(W1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function SZ(){for(var _;_=H2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(z8),$.__h.some(M6),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){W1=null,t3&&t3(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),Q2&&Q2(_,$)},O1.__r=function(_){e3&&e3(_),S4=0;var $=(W1=_.__c).__H;$&&(J6===W1?($.__h=[],W1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(z8),$.__h.some(M6),$.__h=[],S4=0)),J6=W1},O1.diffed=function(_){_2&&_2(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(H2.push($)!==1&&a3===O1.requestAnimationFrame||((a3=O1.requestAnimationFrame)||xZ)(SZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),J6=W1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(z8),j.__h=j.__h.filter(function(Q){return!Q.__||M6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],O1.__e(Q,j.__v)}}),$2&&$2(_,$)},O1.unmount=function(_){j2&&j2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{z8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&O1.__e($,j.__v))};var Z2=typeof requestAnimationFrame=="function";function xZ(_){var $,j=function(){clearTimeout(Q),Z2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);Z2&&($=requestAnimationFrame(j))}function z8(_){var $=W1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),W1=$}function M6(_){var $=W1;_.__c=_.__(),W1=$}function S6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function E2(_,$){return typeof $=="function"?$(_):$}var M2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],X=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=X:q===4?Q[1]=Object.assign(Q[1]||{},X):q===5?(Q[1]=Q[1]||{})[$[++Y]]=X:q===6?Q[1][$[++Y]]+=X+"":q?(Z=_.apply(X,M2(_,X,j,["",null])),Q.push(Z),X[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(X)}return Q},Y2=new Map;function yZ(_){var $=Y2.get(this);return $||($=new Map,Y2.set(this,$)),($=M2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",X="",K=[0],G=function(B){Y===1&&(B||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,B,q):Y===3&&(B||q)?(K.push(3,B,q),Y=2):Y===2&&q==="..."&&B?K.push(4,B,0):Y===2&&q&&!B?K.push(5,0,!0,q):Y>=5&&((q||!B&&Y===5)&&(K.push(Y,0,q,Z),Y=6),B&&(K.push(Y,B,0,Z),Y=6)),q=""},N=0;N<j.length;N++){N&&(Y===1&&G(),G(N));for(var V=0;V<j[N].length;V++)Q=j[N][V],Y===1?Q==="<"?(G(),K=[K],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:X?Q===X?X="":q+=Q:Q==='"'||Q==="'"?X=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[N][V+1]===">")?(G(),Y===3&&(K=K[0]),Y=K,(K=K[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,K=K[0])}return G(),K}(_)),$),arguments,[])).length>1?$:$[0]}var L=yZ.bind(E8);var t1={};AZ(t1,{uploadWorkspaceFile:()=>I8,uploadMedia:()=>b6,updateWorkspaceFile:()=>aZ,submitAdaptiveCardAction:()=>g6,streamSidePrompt:()=>rZ,stopAutoresearch:()=>cZ,steerAgentQueueItem:()=>nZ,setWorkspaceVisibility:()=>i5,setAgentThoughtVisibility:()=>p6,sendPeerAgentMessage:()=>mZ,sendAgentMessage:()=>o4,searchPosts:()=>y6,restoreChatBranch:()=>gZ,respondToAgentRequest:()=>k8,renameWorkspaceFile:()=>n6,renameChatBranch:()=>uZ,removeAgentQueueItem:()=>iZ,pruneChatBranch:()=>bZ,moveWorkspaceEntry:()=>r6,getWorkspaceTree:()=>l5,getWorkspaceRawUrl:()=>T8,getWorkspaceFile:()=>d5,getWorkspaceDownloadUrl:()=>P8,getWorkspaceBranch:()=>sZ,getTimeline:()=>r4,getThumbnailUrl:()=>c6,getThread:()=>R6,getPostsByHashtag:()=>x6,getMediaUrl:()=>y_,getMediaText:()=>l6,getMediaInfo:()=>F5,getMediaBlob:()=>oZ,getChatBranches:()=>vZ,getAutoresearchStatus:()=>pZ,getAgents:()=>v6,getAgentThought:()=>h6,getAgentStatus:()=>u6,getAgentQueueState:()=>dZ,getAgentModels:()=>c5,getAgentContext:()=>hZ,getActiveChatAgents:()=>f6,forkChatBranch:()=>p5,dismissAutoresearch:()=>lZ,deleteWorkspaceFile:()=>o6,deletePost:()=>w6,createWorkspaceFile:()=>i6,createReply:()=>fZ,createPost:()=>wZ,attachWorkspaceFile:()=>d6,addToWhitelist:()=>m6,SSEClient:()=>C8});async function e0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function k2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function RZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:X}=await j.read();if(X)break;Z+=Q.decode(q,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let G of K){let N=k2(G);if(N)$(N.event,N.data)}}Z+=Q.decode();let Y=k2(Z);if(Y)$(Y.event,Y.data)}async function r4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return e0(Q)}async function x6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return e0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function y6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",X=Z?`&scope=${encodeURIComponent(Z)}`:"",K=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return e0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${X}${K}`)}async function R6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return e0(`/thread/${_}${j}`)}async function wZ(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return e0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function fZ(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return e0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function w6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return e0(Z,{method:"DELETE"})}async function o4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",X={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")X.mode=Z;return e0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(X)})}async function f6(){return e0("/agent/active-chats")}async function vZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return e0(`/agent/branches${Q}`)}async function p5(_,$={}){return e0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function uZ(_,$={}){return e0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function bZ(_){return e0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function gZ(_,$={}){return e0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function mZ(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return e0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function v6(){return e0("/agent/roster")}async function u6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/status${$}`)}async function hZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/context${$}`)}async function pZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/autoresearch/status${$}`)}async function cZ(_=null,$={}){return e0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function lZ(_=null){return e0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function dZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/queue-state${$}`)}async function iZ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function nZ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function c5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/models${$}`)}async function b6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function k8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function g6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function rZ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await RZ(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function m6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function h6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return e0(j)}async function p6(_,$,j){return e0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function y_(_){return`/media/${_}`}function c6(_){return`/media/${_}/thumbnail`}async function F5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function l6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function oZ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function l5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return e0(Q)}async function sZ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return e0($)}async function d5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return e0(Z)}async function aZ(_,$){return e0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function d6(_){return e0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function I8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",X=await fetch(""+q,{method:"POST",body:Q});if(!X.ok){let K=await X.json().catch(()=>({error:"Upload failed"})),G=Error(K.error||`HTTP ${X.status}`);throw G.status=X.status,G.code=K.code,G}return X.json()}async function i6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function n6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function r6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function o6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return e0($,{method:"DELETE"})}async function i5(_,$=!1){return e0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function T8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function P8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class C8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function S8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function tZ(_,$){let j=S8(_),Q=S8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function s6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function a6(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function eZ(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function _Y(_,$,j=0,Q=(Z)=>Z){let Z=S8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=eZ(Y.length,j),X=Y.map((K)=>S8(Q(K)));for(let K of q)if(X[K].startsWith(Z))return K;for(let K of q)if(X[K].includes(Z))return K;return-1}function t6(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(tZ(Y,$))return j}return _Y(Z,$,0,Q)}function z_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function G1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function z5(_,$=!1){let j=z_(_);if(j===null)return $;return j==="true"}function H5(_,$=null){let j=z_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}function x8(_){return String(_||"").trim().toLowerCase()}function e6(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return x8($[1]||"")}function $Y(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=x8(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function I2(_,$,j={}){let Q=e6($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return $Y(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return x8(Y?.agent_name).startsWith(Q)})}function _$(_){let $=x8(_);return $?`@${$} `:""}function T2(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function y8(_){let $=$$(_);return $?`@${$}`:""}function $$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function R8(_,$=""){let j=String(_||""),Q=$$(j),Z=$$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function P2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?y8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function jY(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function w8(_,$={}){let j=y8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=jY(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function C2(_,$,j){let Q=y8(_),Z=y8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}function QY(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function V4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function f8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return V4(_)?"Compacting context":"Working..."}function ZY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function v8(_,$=Date.now()){let j=QY(_);if(j===null)return null;return ZY(Math.max(0,$-j))}function l_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let X=`${_}-file-pill`,K=`${_}-file-name`,G=`${_}-file-remove`,N=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  `}var YY=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function qY({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",X=`${Q!=null?`Context: ${S2(Q)} / ${S2(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,G=2*Math.PI*9,N=j/100*G,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
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
    `}function S2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function XY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),X=j.slice(Y);return{content:[...q,...X].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function GY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let N=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)Z.push(N[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),X=j.slice(Y);return{content:[...q,...X].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function KY(_){let $=XY(_||""),j=GY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function j$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=KY(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
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
    `}function x2({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:X,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:N,messageRefs:V=[],onRemoveMessageRef:B,onClearMessageRefs:O,activeModel:E=null,modelUsage:k=null,thinkingLevel:A=null,supportsThinking:J=!1,contextUsage:D=null,onContextCompact:I,notificationsEnabled:i=!1,notificationPermission:h="default",onToggleNotifications:o,onModelChange:t,onModelStateChange:R,activeEditorPath:x=null,onAttachEditorFile:H,onOpenFilePill:S,followupQueueItems:p=[],onInjectQueuedFollowup:Z0,onRemoveQueuedFollowup:d,onSubmitIntercept:$0,onMessageResponse:_0,onPopOutChat:q0,isAgentActive:G0=!1,activeChatAgents:K0=[],currentChatJid:J0="web:default",connectionStatus:A0="connected",onSetFileRefs:E0,onSetMessageRefs:r0,onSubmitError:x0,onSwitchChat:I0,onRenameSession:o0,isRenameSessionInProgress:s0=!1,onCreateSession:g0,onDeleteSession:t0,onRestoreSession:m0,showQueueStack:$1=!0,statusNotice:F0=null}){let[p0,j1]=m(""),[Y1,Y_]=m(""),[D1,_1]=m([]),[m1,M1]=m(!1),[q1,h0]=m([]),[x1,k1]=m(0),[s,V0]=m(!1),[z0,X0]=m([]),[y0,C0]=m(0),[v0,k0]=m(!1),[w0,d0]=m(!1),[D0,b0]=m(!1),[O0,Q0]=m(!1),[y,a]=m([]),[L0,M0]=m(0),[u0,X1]=m(0),[A1,K1]=m(!1),[h1,Q4]=m(0),[B_,e1]=m(null),[W_,q_]=m(()=>Date.now()),Q1=P(null),n1=P(null),Z4=P(null),w_=P(null),$5=P(null),u4=P(null),u1=P(null),U_=P(null),y1=P({value:"",updatedAt:0}),E1=P(0),N1=P(!1),f_=200,v_=(F)=>{let v=new Set,n=[];for(let c of F||[]){if(typeof c!=="string")continue;let T0=c.trim();if(!T0||v.has(T0))continue;v.add(T0),n.push(T0)}return n},V1=()=>{let F=z_("piclaw_compose_history");if(!F)return[];try{let v=JSON.parse(F);if(!Array.isArray(v))return[];return v_(v)}catch{return[]}},X_=(F)=>{G1("piclaw_compose_history",JSON.stringify(F))},c0=P(V1()),P1=P(-1),D_=P(""),__=p0.trim()||D1.length>0||K.length>0||V.length>0,b4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),n_=typeof window<"u"&&typeof Notification<"u",g4=typeof window<"u"?Boolean(window.isSecureContext):!1,j5=n_&&g4&&h!=="denied",o_=h==="granted"&&i,u_=V4(F0),C5=f8(F0),S5=typeof F0?.detail==="string"&&F0.detail.trim()?F0.detail.trim():"",B1=u_?v8(F0,W_):null,R1=o_?"Disable notifications":"Enable notifications",Q5=D1.length>0||K.length>0||V.length>0,A_=A0==="disconnected"?"Reconnecting":String(A0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),$_=A0==="disconnected"?"Reconnecting":`Connection: ${A_}`,p1=(Array.isArray(K0)?K0:[]).filter((F)=>!F?.archived_at),C1=(()=>{for(let F of Array.isArray(K0)?K0:[]){let v=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(v&&v===J0)return F}return null})(),b1=Boolean(C1&&C1.chat_jid===(C1.root_chat_jid||C1.chat_jid)),z1=f0(()=>{let F=new Set,v=[];for(let n of Array.isArray(K0)?K0:[]){let c=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!c||c===J0||F.has(c))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;F.add(c),v.push(n)}return v},[K0,J0]),E_=z1.length>0,M_=E_&&typeof I0==="function",k_=E_&&typeof m0==="function",s_=Boolean(s0||N1.current),j_=!j&&typeof o0==="function"&&!s_,r1=!j&&typeof g0==="function",I_=!j&&typeof t0==="function"&&!b1,Y4=!j&&(M_||k_||j_||r1||I_),H1=E||"",a_=J&&A?` (${A})`:"",m4=a_.trim()?`${A}`:"",h4=typeof k?.hint_short==="string"?k.hint_short.trim():"",T_=[m4||null,h4||null].filter(Boolean).join(" • "),p4=[H1?`Current model: ${H1}${a_}`:null,k?.plan?`Plan: ${k.plan}`:null,h4||null,k?.primary?.reset_description||null,k?.secondary?.reset_description||null].filter(Boolean),Z5=w0?"Switching model…":p4.join(" • ")||`Current model: ${H1}${a_} (tap to open model picker)`,b_=(F)=>{if(!F||typeof F!=="object")return;let v=F.model??F.current;if(typeof R==="function")R({model:v??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(v&&typeof t==="function")t(v)},g_=(F)=>{let v=F||Q1.current;if(!v)return;v.style.height="auto",v.style.height=`${v.scrollHeight}px`,v.style.overflowY="hidden"},J4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){V0(!1),h0([]);return}let v=F.toLowerCase().split(" ")[0];if(v.length<1){V0(!1),h0([]);return}let n=YY.filter((c)=>c.name.startsWith(v)||c.name.replace(/-/g,"").startsWith(v.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===v))k0(!1),X0([]),h0(n),k1(0),V0(!0);else V0(!1),h0([])},m_=(F)=>{let v=p0,n=v.indexOf(" "),c=n>=0?v.slice(n):"",T0=F.name+c;j1(T0),V0(!1),h0([]),requestAnimationFrame(()=>{let J1=Q1.current;if(!J1)return;let S1=T0.length;J1.selectionStart=S1,J1.selectionEnd=S1,J1.focus()})},c4=(F)=>{if(e6(F)==null){k0(!1),X0([]);return}let v=I2(p1,F,{currentChatJid:J0});if(v.length>0&&!(v.length===1&&_$(v[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))V0(!1),h0([]),X0(v),C0(0),k0(!0);else k0(!1),X0([])},h_=(F)=>{let v=_$(F?.agent_name);if(!v)return;j1(v),k0(!1),X0([]),requestAnimationFrame(()=>{let n=Q1.current;if(!n)return;let c=v.length;n.selectionStart=c,n.selectionEnd=c,n.focus()})},P_=()=>{if(j||!M_&&!k_&&!j_&&!r1&&!I_)return!1;return y1.current={value:"",updatedAt:0},b0(!1),V0(!1),h0([]),k0(!1),X0([]),Q0(!0),!0},I1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!M_&&!k_&&!j_&&!r1&&!I_)return;if(O0){y1.current={value:"",updatedAt:0},Q0(!1);return}P_()},O4=(F)=>{let v=typeof F==="string"?F.trim():"";if(Q0(!1),!v||v===J0){requestAnimationFrame(()=>Q1.current?.focus());return}I0?.(v)},D4=async(F)=>{let v=typeof F==="string"?F.trim():"";if(Q0(!1),!v||typeof m0!=="function"){requestAnimationFrame(()=>Q1.current?.focus());return}try{await m0(v)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>Q1.current?.focus())}},l4=(F)=>{let n=(Array.isArray(F)?F:[]).findIndex((c)=>!c?.disabled);return n>=0?n:0},L1=f0(()=>{let F=[];for(let v of z1){let n=Boolean(v?.archived_at),c=typeof v?.agent_name==="string"?v.agent_name.trim():"",T0=typeof v?.chat_jid==="string"?v.chat_jid.trim():"";if(!c||!T0)continue;F.push({type:"session",key:`session:${T0}`,label:`@${c} — ${T0}${v?.is_active?" active":""}${n?" archived":""}`,chat:v,disabled:n?!k_:!M_})}if(r1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(j_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:s_});if(I_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[z1,k_,M_,r1,j_,I_,s_]),A4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof o0!=="function"||s0||N1.current)return;N1.current=!0,Q0(!1);try{await o0()}catch(v){console.warn("Failed to rename session:",v)}finally{N1.current=!1}requestAnimationFrame(()=>Q1.current?.focus())},Y5=async()=>{if(typeof g0!=="function")return;Q0(!1);try{await g0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},g1=async()=>{if(typeof t0!=="function")return;Q0(!1);try{await t0(J0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},G_=(F)=>{if(j)Y_(F);else j1(F),J4(F),c4(F);requestAnimationFrame(()=>g_())},t_=(F)=>{let v=j?Y1:p0,n=v&&!v.endsWith(`
`)?`
`:"",c=`${v}${n}${F}`.trimStart();G_(c)},d4=(F)=>{let v=F?.command?.model_label;if(v)return v;let n=F?.command?.message;if(typeof n==="string"){let c=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(c?.[1])return c[1].trim()}return null},q4=async(F)=>{if(j||w0)return;d0(!0);try{let v=await o4("default",F,null,[],null,J0),n=d4(v);b_({model:n??E??null,thinking_level:v?.command?.thinking_level,supports_thinking:v?.command?.supports_thinking});try{let c=await c5(J0);if(c)b_(c)}catch{}return _?.(),!0}catch(v){return console.error("Failed to switch model:",v),alert("Failed to switch model: "+v.message),!1}finally{d0(!1)}},E4=async()=>{await q4("/cycle-model")},X4=async(F)=>{if(!F||w0)return;if(await q4(`/model ${F}`))b0(!1)},C_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let v=F.chat;if(v?.archived_at)D4(v.chat_jid);else O4(v.chat_jid);return}if(F.type==="action"){if(F.action==="new"){Y5();return}if(F.action==="rename"){A4();return}if(F.action==="delete")g1()}},L_=(F)=>{F.preventDefault(),F.stopPropagation(),y1.current={value:"",updatedAt:0},Q0(!1),b0((v)=>!v)},M4=async()=>{if(j)return;I?.(),await S_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},i4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return G0?"queue":void 0},S_=async(F,v,n={})=>{let{includeMedia:c=!0,includeFileRefs:T0=!0,includeMessageRefs:J1=!0,clearAfterSubmit:S1=!0,recordHistory:f1=!0}=n||{},G4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:p0,n4=typeof G4==="string"?G4:"";if(!n4.trim()&&(c?D1.length===0:!0)&&(T0?K.length===0:!0)&&(J1?V.length===0:!0))return;V0(!1),h0([]),k0(!1),X0([]),Q0(!1),e1(null);let q5=c?[...D1]:[],X5=T0?[...K]:[],K_=J1?[...V]:[],l1=n4.trim();if(f1&&l1){let k4=c0.current,F1=v_(k4.filter((e_)=>e_!==l1));if(F1.push(l1),F1.length>200)F1.splice(0,F1.length-200);c0.current=F1,X_(F1),P1.current=-1,D_.current=""}let G5=()=>{if(c)_1([...q5]);if(T0)E0?.(X5);if(J1)r0?.(K_);j1(l1),requestAnimationFrame(()=>g_())};if(S1)j1(""),_1([]),N?.(),O?.();(async()=>{try{if(await $0?.({content:l1,submitMode:v,fileRefs:X5,messageRefs:K_,mediaFiles:q5})){_?.();return}let F1=[];for(let F_ of q5){let T4=await b6(F_);F1.push(T4.id)}let e_=X5.length?`Files:
${X5.map((F_)=>`- ${F_}`).join(`
`)}`:"",K5=K_.length?`Referenced messages:
${K_.map((F_)=>`- message:${F_}`).join(`
`)}`:"",N8=F1.length?`Attachments:
${F1.map((F_,T4)=>{let K6=q5[T4]?.name||`attachment-${T4+1}`;return`- attachment:${F_} (${K6})`}).join(`
`)}`:"",N_=[l1,e_,K5,N8].filter(Boolean).join(`

`),I4=await o4("default",N_,null,F1,i4(v),J0);if(_0?.(I4),I4?.command){b_({model:I4.command.model_label??E??null,thinking_level:I4.command.thinking_level,supports_thinking:I4.command.supports_thinking});try{let F_=await c5(J0);if(F_)b_(F_)}catch{}}_?.()}catch(k4){if(S1)G5();let F1=k4?.message||"Failed to send message.";e1(F1),x0?.(F1),console.error("Failed to post:",k4)}})()},z=(F)=>{Z0?.(F)},T=C((F)=>{if(j||!D0&&!O0||F?.isComposing)return!1;let v=()=>{F.preventDefault?.(),F.stopPropagation?.()},n=()=>{y1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(v(),n(),D0)b0(!1);if(O0)Q0(!1);return!0}if(D0){if(F.key==="ArrowDown"){if(v(),n(),y.length>0)M0((c)=>(c+1)%y.length);return!0}if(F.key==="ArrowUp"){if(v(),n(),y.length>0)M0((c)=>(c-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return v(),n(),X4(y[Math.max(0,Math.min(L0,y.length-1))]),!0;if(s6(F)&&y.length>0){v();let c=a6(y1.current,F.key);y1.current=c;let T0=t6(y,c.value,L0,(J1)=>J1);if(T0>=0)M0(T0);return!0}}if(O0){if(F.key==="ArrowDown"){if(v(),n(),L1.length>0)X1((c)=>(c+1)%L1.length);return!0}if(F.key==="ArrowUp"){if(v(),n(),L1.length>0)X1((c)=>(c-1+L1.length)%L1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&L1.length>0)return v(),n(),C_(L1[Math.max(0,Math.min(u0,L1.length-1))]),!0;if(s6(F)&&L1.length>0){v();let c=a6(y1.current,F.key);y1.current=c;let T0=t6(L1,c.value,u0,(J1)=>J1.label);if(T0>=0)X1(T0);return!0}}return!1},[j,D0,O0,y,L0,L1,u0,X4]),w=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),Y_(""),X?.();return}if(T(F))return;let v=Q1.current?.value??(j?Y1:p0);if(T2(F,v,{searchMode:j,showSessionSwitcherButton:Y4})){F.preventDefault(),P_();return}if(v0&&z0.length>0){let n=Q1.current?.value??(j?Y1:p0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))k0(!1),X0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),C0((c)=>(c+1)%z0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),C0((c)=>(c-1+z0.length)%z0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),h_(z0[y0]);return}if(F.key==="Escape"){F.preventDefault(),k0(!1),X0([]);return}}}if(s&&q1.length>0){let n=Q1.current?.value??(j?Y1:p0);if(!String(n||"").startsWith("/"))V0(!1),h0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),k1((c)=>(c+1)%q1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),k1((c)=>(c-1+q1.length)%q1.length);return}if(F.key==="Tab"){F.preventDefault(),m_(q1[x1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!v.includes(" ")){F.preventDefault();let T0=q1[x1];V0(!1),h0([]),S_(T0.name);return}}if(F.key==="Escape"){F.preventDefault(),V0(!1),h0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let n=Q1.current;if(!n)return;let c=n.value||"",T0=n.selectionStart===0&&n.selectionEnd===0,J1=n.selectionStart===c.length&&n.selectionEnd===c.length;if(F.key==="ArrowUp"&&T0||F.key==="ArrowDown"&&J1){let S1=c0.current;if(!S1.length)return;F.preventDefault();let f1=P1.current;if(F.key==="ArrowUp"){if(f1===-1)D_.current=c,f1=S1.length-1;else if(f1>0)f1-=1;P1.current=f1,G_(S1[f1]||"")}else{if(f1===-1)return;if(f1<S1.length-1)f1+=1,P1.current=f1,G_(S1[f1]||"");else P1.current=-1,G_(D_.current||""),D_.current=""}requestAnimationFrame(()=>{let G4=Q1.current;if(!G4)return;let n4=G4.value.length;G4.selectionStart=n4,G4.selectionEnd=n4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else S_(v,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else S_(v)},f=(F)=>{let v=Array.from(F||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!v.length)return;_1((n)=>[...n,...v]),e1(null)},r=(F)=>{f(F.target.files),F.target.value=""},Y0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current+=1,M1(!0)},W0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),E1.current=Math.max(0,E1.current-1),E1.current===0)M1(!1)},U0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";M1(!0)},j0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current=0,M1(!1),f(F.dataTransfer?.files||[])},P0=(F)=>{if(j)return;let v=F.clipboardData?.items;if(!v||!v.length)return;let n=[];for(let c of v){if(c.kind!=="file")continue;let T0=c.getAsFile?.();if(T0)n.push(T0)}if(n.length>0)F.preventDefault(),f(n)},w1=(F)=>{_1((v)=>v.filter((n,c)=>c!==F))},Q_=()=>{e1(null),_1([]),N?.(),O?.()},c1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:v,longitude:n,accuracy:c}=F.coords,T0=`${v.toFixed(5)}, ${n.toFixed(5)}`,J1=Number.isFinite(c)?` ±${Math.round(c)}m`:"",S1=`https://maps.google.com/?q=${v},${n}`,f1=`Location: ${T0}${J1} ${S1}`;t_(f1)},(F)=>{let v=F?.message||"Unable to retrieve location.";alert(`Location error: ${v}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!D0)return;y1.current={value:"",updatedAt:0},K1(!0),c5(J0).then((F)=>{let v=Array.isArray(F?.models)?F.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];v.sort((n,c)=>n.localeCompare(c,void 0,{sensitivity:"base"})),a(v),b_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),a([])}).finally(()=>{K1(!1)})},[D0,E]),g(()=>{if(j)b0(!1),Q0(!1),V0(!1),h0([]),k0(!1),X0([])},[j]),g(()=>{if(O0&&!Y4)Q0(!1)},[O0,Y4]),g(()=>{if(!D0)return;let F=y.findIndex((v)=>v===E);M0(F>=0?F:0)},[D0,y,E]),g(()=>{if(!O0)return;X1(l4(L1)),y1.current={value:"",updatedAt:0}},[O0,J0]),g(()=>{if(!D0)return;let F=(v)=>{let n=w_.current,c=$5.current,T0=v.target;if(n&&n.contains(T0))return;if(c&&c.contains(T0))return;b0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[D0]),g(()=>{if(!O0)return;let F=(v)=>{let n=u4.current,c=u1.current,T0=v.target;if(n&&n.contains(T0))return;if(c&&c.contains(T0))return;Q0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),g(()=>{if(j||!D0&&!O0)return;let F=(v)=>{T(v)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,D0,O0,T]),g(()=>{if(!D0)return;let F=w_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,L0,y]),g(()=>{if(!O0)return;let F=u4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,u0,L1.length]),g(()=>{let F=()=>{let J1=U_.current?.clientWidth||0;Q4((S1)=>S1===J1?S1:J1)};F();let v=U_.current,n=0,c=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,F()})},T0=null;if(v&&typeof ResizeObserver<"u")T0=new ResizeObserver(()=>c()),T0.observe(v);if(typeof window<"u")window.addEventListener("resize",c);return()=>{if(n)cancelAnimationFrame(n);if(T0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",c)}},[j,E,C1?.agent_name,Y4,D?.percent]);let x5=(F)=>{let v=F.target.value;if(e1(null),O0)Q0(!1);g_(F.target),G_(v)};return g(()=>{requestAnimationFrame(()=>g_())},[p0,Y1,j]),g(()=>{if(!u_)return;q_(Date.now());let F=setInterval(()=>q_(Date.now()),1000);return()=>clearInterval(F)},[u_,F0?.started_at,F0?.startedAt]),g(()=>{if(j)return;c4(p0)},[p1,J0,p0,j]),L`
        <div class="compose-box">
            ${$1&&!j&&L`
                <${j$}
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
                        <span class="compose-inline-status-title">${C5}</span>
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
                onDragEnter=${Y0}
                onDragOver=${U0}
                onDragLeave=${W0}
                onDrop=${j0}
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
                        ref=${Q1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Y1:p0}
                        onInput=${x5}
                        onKeyDown=${w}
                        onPaste=${P0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${v0&&z0.length>0&&L`
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
                    ${D0&&!j&&L`
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
                                    onClick=${()=>{E4()}}
                                    disabled=${w0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${O0&&!j&&L`
                        <div class="compose-model-popup" ref=${u4} tabIndex="-1" onKeyDown=${T}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return P2(C1,J0)})()}
                                    </div>
                                `}
                                ${!E_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${E_&&z1.map((F,v)=>{let n=Boolean(F.archived_at),T0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!n&&typeof t0==="function",J1=w8(F,{currentChatJid:J0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${u0===v?" active":""}`}
                                                onClick=${()=>{if(n){D4(F.chat_jid);return}O4(F.chat_jid)}}
                                                disabled=${n?!k_:!M_}
                                                title=${n?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${J1}
                                            </button>
                                            ${T0&&L`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(S1)=>{S1.stopPropagation(),Q0(!1),t0(F.chat_jid)}}
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
                                            class=${`compose-model-popup-btn primary${L1.findIndex((F)=>F.key==="action:new")===u0?" active":""}`}
                                            onClick=${()=>{Y5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${j_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${L1.findIndex((F)=>F.key==="action:rename")===u0?" active":""}`}
                                            onClick=${(F)=>{A4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${s_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${I_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${L1.findIndex((F)=>F.key==="action:delete")===u0?" active":""}`}
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
                                    disabled=${w0}
                                >
                                    ${w0?"Switching…":H1}
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
                            <${qY} usage=${D} onCompact=${M4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${Y4&&L`
                        ${C1?.agent_name&&L`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${C1.chat_jid||J0}
                                aria-label=${`Manage sessions for @${C1.agent_name}`}
                                onClick=${I1}
                            >@${C1.agent_name}</button>
                        `}
                        <button
                            ref=${u1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${O0?" active":""}`}
                            onClick=${I1}
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
                    ${b4&&!j&&L`
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
                    ${(A0!=="connected"||!j)&&L`
                        <div class="compose-send-stack">
                            ${A0!=="connected"&&L`
                                <span class="compose-connection-status connection-status ${A0}" title=${$_}>
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
    `}var Y$="piclaw_theme",b8="piclaw_tint",w2="piclaw_chat_themes",r5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},f2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},y2={default:{label:"Default",mode:"auto",light:r5,dark:f2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},NY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],s4={theme:"default",tint:null},v2="light",Q$=!1;function g8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function O5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function VY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),X=parseInt(Z[3],10);if(![Y,q,X].every((G)=>Number.isFinite(G)))return null;let K=`#${[Y,q,X].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:X,hex:K}}function u2(_){return O5(_)||VY(_)}function n5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function Z$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function BY(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function WY(_){return BY(_)>0.4?"#000000":"#ffffff"}function b2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function q$(_){return y2[_]||y2.default}function UY(_){return _.mode==="auto"?b2():_.mode}function g2(_,$){let j=q$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||r5}function m2(_,$,j){let Q=u2($);if(!Q)return _;let Z=O5(_.bgPrimary),Y=O5(_.bgSecondary),q=O5(_.bgHover),X=O5(_.borderColor);if(!Z||!Y||!q||!X)return _;let G=O5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:n5(Z,Q,0.08),bgSecondary:n5(Y,Q,0.12),bgHover:n5(q,Q,0.16),borderColor:n5(X,Q,0.08),accent:Q.hex,accentHover:G?n5(Q,G,0.18):Q.hex}}function LY(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=u2(Q),Y=Z?Z$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?Z$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=Z?Z$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?WY(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":X,"--accent-contrast-text":K,"--danger-color":_.danger||r5.danger,"--success-color":_.success||r5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([N,V])=>{if(V)j.style.setProperty(N,V)})}function FY(){if(typeof document>"u")return;let _=document.documentElement;NY.forEach(($)=>_.style.removeProperty($))}function J5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function R2(_){let $=g8(s4?.theme||"default"),j=s4?.tint?String(s4.tint).trim():null,Q=g2($,_);if($==="default"&&j)Q=m2(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?f2.bgPrimary:r5.bgPrimary}function zY(_,$){if(typeof document>"u")return;let j=J5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=J5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",R2("light"));let Z=J5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",R2("dark"));let Y=J5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=J5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let X=J5("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function HY(){if(typeof window>"u")return;let _={...s4,mode:v2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function h2(){try{let _=z_(w2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function JY(_,$,j){let Q=h2();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};G1(w2,JSON.stringify(Q))}function OY(_){if(!_)return null;return h2()[_]||null}function p2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function X$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=g8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=q$(j),Y=UY(Z),q=g2(j,Y);s4={theme:j,tint:Q},v2=Y;let X=document.documentElement;X.dataset.theme=Y,X.dataset.colorTheme=j,X.dataset.tint=Q?String(Q):"",X.style.colorScheme=Y;let K=q;if(j==="default"&&Q)K=m2(q,Q,Y);if(j==="default"&&!Q)FY();else LY(K,Y);if(zY(K.bgPrimary,Y),HY(),$.persist!==!1)if(G1(Y$,j),Q)G1(b8,Q);else G1(b8,"")}function u8(){if(q$(s4.theme).mode!=="auto")return;X$(s4,{persist:!1})}function c2(){if(typeof window>"u")return()=>{};let _=p2(),$=OY(_),j=$?g8($.theme||"default"):g8(z_(Y$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=z_(b8);return Z?Z.trim():null})();if(X$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!Q$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",u8);else if(Z.addListener)Z.addListener(u8);return Q$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",u8);else if(Z.removeListener)Z.removeListener(u8);Q$=!1}}return()=>{}}function l2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||p2(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(JY($,j||"default",Q),X$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")G1(Y$,j||"default"),G1(b8,Q||"")}function d2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return b2()}var m8=/#(\w+)/g,DY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),AY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),EY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),MY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},kY=new Set(["http:","https:","mailto:",""]);function G$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function a4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!kY.has(Q.protocol))return null;return Q.href}catch{return null}}function i2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let X=q.tagName.toLowerCase();if(!AY.has(X)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let K=MY[X]||new Set;for(let G of Array.from(q.attributes)){let N=G.name.toLowerCase(),V=G.value;if(N.startsWith("on")){q.removeAttribute(G.name);continue}if(N.startsWith("data-")||N.startsWith("aria-"))continue;if(K.has(N)||EY.has(N)){if(N==="href"){let B=a4(V);if(!B)q.removeAttribute(G.name);else if(q.setAttribute(G.name,B),X==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(N==="src"){let B=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,O=a4(B,{allowDataImage:X==="img"});if(!O)q.removeAttribute(G.name);else q.setAttribute(G.name,O)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function n2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function h8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=n2(j);if(Z===j)break;j=Z}return j}function IY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let X of j){if(!Y&&X.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&X.trim().match(/^```\s*$/)){let K=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),Y=!1,q=[];continue}if(Y)q.push(X);else Z.push(X)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function TY(_){if(!_)return _;return h8(_,5)}function PY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function CY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function SY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=TY(Y);return`<div class="mermaid-container" data-mermaid="${PY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function r2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var xY={span:new Set(["title","class","lang","dir"])};function yY(_,$){let j=xY[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let X=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${G$(X)}"`)}return Q.join("")}function o2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,X=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[K=""]=X.split(/\s+/,1),G=K.toLowerCase();if(!G||!DY.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let N=X.slice(K.length).trim(),V=yY(G,N);return`<${G}${V}>`})}function s2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function a2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function RY(_){if(!window.katex)return _;let $=(q)=>n2(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let X=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let N=X.length;return X.push(G),`@@CODE_BLOCK_${N}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let N=X.length;return X.push(G),`@@CODE_INLINE_${N}@@`}),{html:K,blocks:X}},Q=(q,X)=>{if(!X.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,G)=>{let N=Number(G);return X[N]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,X,K)=>{try{let G=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${X}${G}`}catch(G){return`<span class="math-error" title="${G$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,X,K)=>{if(/\s$/.test(K))return q;try{let G=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${X}${G}`}catch(G){return`${X}<span class="math-error" title="${G$(G.message)}">$${K}$</span>`}}),Q(Y,Z.blocks)}function wY(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(m8.lastIndex=0,!m8.test(q))continue;m8.lastIndex=0;let X=Y.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let K=q.split(m8);if(K.length<=1)continue;let G=$.createDocumentFragment();K.forEach((N,V)=>{if(V%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",N),B.textContent=`#${N}`,G.appendChild(B)}else G.appendChild($.createTextNode(N))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function fY(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function vY(_){let $=fY(_||""),{text:j,blocks:Q}=IY($),Z=h8(j,2),q=r2(Z).replace(/</g,"&lt;");return{safeHtml:o2(q),mermaidBlocks:Q}}function H_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=vY(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=s2(Y),Y=a2(Y),Y=RY(Y),Y=wY(Y),Y=SY(Y,Z),Y=i2(Y,j),Y}function o5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=h8($,2),Z=r2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=o2(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=s2(q),q=a2(q),q=i2(q),q}function uY(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((K)=>{let[G,N]=K.split(",").map(Number);return{x:G,y:N}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let X=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let G=q[K-1],N=q[K],V=q[K+1],B=N.x-G.x,O=N.y-G.y,E=V.x-N.x,k=V.y-N.y,A=Math.sqrt(B*B+O*O),J=Math.sqrt(E*E+k*k),D=Math.min($,A/2,J/2);if(D<0.5){X.push(`L ${N.x},${N.y}`);continue}let I=N.x-B/A*D,i=N.y-O/A*D,h=N.x+E/J*D,o=N.y+k/J*D,R=B*k-O*E>0?1:0;X.push(`L ${I},${i}`),X.push(`A ${D},${D} 0 0 ${R} ${h},${o}`)}return X.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${X.join(" ")}"${Y}/>`})}async function B4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=d2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let X=q.dataset.mermaid,K=CY(X||""),G=h8(K,2),N=await $(G,{...Z,transparent:!0});N=uY(N),q.innerHTML=N,q.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${X.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}function t2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function e2(_){return String(_||"").trim()||"web:default"}function _7(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function $7(_){if(!_)return!1;return _.status!=="running"}function j7(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Q7({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=P(null),Y=P(null),q=_?.thinking?o5(_.thinking):"",X=_?.answer?H_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(Z.current&&q)B4(Z.current).catch(()=>{})},[q]),g(()=>{if(Y.current&&X)B4(Y.current).catch(()=>{})},[X]),!_)return null;let K=_.status==="running",G=Boolean(String(_.answer||"").trim()),N=Boolean(String(_.thinking||"").trim()),V=_7(_),B=$7(_),O=!K&&G,E=K?"Thinking…":_.status==="error"?"Error":"Done";return L`
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
    `}function bY(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function gY(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function y4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function S0(_){return typeof _==="string"&&_.trim()?_.trim():null}function Y7(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var q7="__PICLAW_WIDGET_HOST__:";function Z7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function K$(_,$){if(!_||_.type!=="generated_widget")return null;let j=bY(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Y7(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function X7(_){if(!_||typeof _!=="object")return null;let $=gY(_),j=S0(_?.widget_id)||S0(_?.widgetId)||S0(_?.tool_call_id)||S0(_?.toolCallId),Q=S0(_?.tool_call_id)||S0(_?.toolCallId),Z=S0(_?.turn_id)||S0(_?.turnId),Y=S0(_?.title)||S0(_?.name)||"Generated widget",q=S0(_?.subtitle)||"",X=S0(_?.description)||q,K=S0(_?.status),G=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:Y,subtitle:q,description:X,originPostId:y4(_?.origin_post_id)??y4(_?.originPostId),originChatJid:S0(_?.origin_chat_jid)||S0(_?.originChatJid)||S0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Y7(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:y4(_?.width),height:y4(_?.height),error:S0(_?.error)}}function G7(_){return K$(_,null)!==null}function J_(_){let $=S0(_?.toolCallId)||S0(_?.tool_call_id);if($)return $;let j=S0(_?.widgetId)||S0(_?.widget_id);if(j)return j;let Q=y4(_?.originPostId)??y4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function K7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function N7(_){return K7(_)?"allow-downloads allow-scripts":"allow-downloads"}function p8(_){return{title:S0(_?.title)||"Generated widget",widgetId:S0(_?.widgetId)||S0(_?.widget_id),toolCallId:S0(_?.toolCallId)||S0(_?.tool_call_id),turnId:S0(_?.turnId)||S0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:S0(_?.status)||"final"}}function c8(_){return{...p8(_),subtitle:S0(_?.subtitle)||"",description:S0(_?.description)||"",error:S0(_?.error)||null,width:y4(_?.width),height:y4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function l8(_){return`${q7}${JSON.stringify(c8(_))}`}function V7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=S0(_.text)||S0(_.content)||S0(_.message)||S0(_.prompt)||S0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=S0(j.text)||S0(j.content)||S0(j.message)||S0(j.prompt)||S0(j.value);if(Q)return Q}return null}function B7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function W7(_){let $=S0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return S0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function mY(_){let $=p8(_);return`<script>
(function () {
  const meta = ${Z7($)};
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

  const windowNamePrefix = ${Z7(q7)};
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
</script>`}function U7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let X=K7(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",X?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,N=X?mY(_):"";return`<!doctype html>
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
</html>`}function L7({widget:_,onClose:$,onWidgetEvent:j}){let Q=P(null),Z=P(!1),Y=f0(()=>U7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let J=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),g(()=>{Z.current=!1},[Y]),g(()=>{if(!_)return;let J=Q.current;if(!J)return;let D=(t)=>{let R=l8(_),x=t==="widget.init"?p8(_):c8(_);try{J.name=R}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:t,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x},"*")}catch{}},I=()=>{D("widget.init"),D("widget.update")},i=()=>{Z.current=!0,I()};J.addEventListener("load",i);let o=[0,40,120,300,800].map((t)=>setTimeout(I,t));return()=>{J.removeEventListener("load",i),o.forEach((t)=>clearTimeout(t))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let J=Q.current;if(!J?.contentWindow)return;let D=l8(_),I=c8(_);try{J.name=D}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let J=(D)=>{let I=D?.data;if(!I||I.__piclawGeneratedWidget!==!0)return;let i=Q.current,h=J_(_),o=J_({widgetId:I.widgetId,toolCallId:I.toolCallId});if(o&&h&&o!==h)return;if(!o&&i?.contentWindow&&D.source!==i.contentWindow)return;j?.(I,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let X=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",N=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=N==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",E=!Y,k=W7(_),A=N7(_);return L`
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
                                name=${l8(_)}
                                sandbox=${A}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var F7="PiClaw";function N$(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,X=Y[q],K=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",N=G?G:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:X,image:N||(V?"/static/icon-192.png":null)}}function z7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function H7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function J7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",X=Y?.dataset?.tint||"",K=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(K&&(X||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var hY=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function V$({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:X=new Set,onExtensionPanelAction:K,turnId:G,steerQueued:N,onPanelToggle:V,showCorePanels:B=!0,showExtensionPanels:O=!0}){let A=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let y0=s,C0=y0?y0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y0,totalLines:C0,fullText:y0}}let V0=s.text||"",z0=s.fullText||s.full_text||V0,X0=Number.isFinite(s.totalLines)?s.totalLines:z0?z0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:V0,totalLines:X0,fullText:z0}},J=160,D=(s)=>String(s||"").replace(/<\/?internal>/gi,""),I=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},i=(s,V0,z0)=>{let X0=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!X0)return{text:"",omitted:0,totalLines:Number.isFinite(z0)?z0:0,visibleLines:0};let y0=X0.split(`
`),C0=y0.length>V0?y0.slice(0,V0).join(`
`):X0,v0=Number.isFinite(z0)?z0:y0.reduce((d0,D0)=>d0+I(D0),0),k0=C0?C0.split(`
`).reduce((d0,D0)=>d0+I(D0),0):0,w0=Math.max(v0-k0,0);return{text:C0,omitted:w0,totalLines:v0,visibleLines:k0}},h=A(j),o=A(Q),t=A($),R=Boolean(h.text)||h.totalLines>0,x=Boolean(o.text)||o.totalLines>0,H=Boolean(t.fullText?.trim()||t.text?.trim()),S=Boolean(_||H||R||x||Z||Y),p=Array.isArray(q)&&q.length>0;if((!B||!S)&&(!O||!p))return null;let[Z0,d]=m(new Set),[$0,_0]=m(null),[q0,G0]=m(()=>Date.now()),K0=(s)=>d((V0)=>{let z0=new Set(V0),X0=!z0.has(s);if(X0)z0.add(s);else z0.delete(s);if(typeof V==="function")V(s,X0);return z0});g(()=>{d(new Set),_0(null)},[G]);let J0=V4(_);g(()=>{if(!J0)return;G0(Date.now());let s=setInterval(()=>G0(Date.now()),1000);return()=>clearInterval(s)},[J0,_?.started_at,_?.startedAt]);let A0=_?.turn_id||G,E0=J7(A0),r0=N?"turn-dot turn-dot-queued":"turn-dot",x0=(s)=>s,I0=Boolean(_?.last_activity||_?.lastActivity),o0=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":E0,s0=Y?.kind||"info",g0=o0(s0),t0=o0(_?.kind||(J0?"warning":"info")),m0="",$1=_?.title,F0=_?.status;if(_?.type==="plan")m0=$1?`Planning: ${$1}`:"Planning...";else if(_?.type==="tool_call")m0=$1?`Running: ${$1}`:"Running tool...";else if(_?.type==="tool_status")m0=$1?`${$1}: ${F0||"Working..."}`:F0||"Working...";else if(_?.type==="error")m0=$1||"Agent error";else m0=$1||F0||"Working...";if(I0)m0="Last activity just now";let p0=({panelTitle:s,text:V0,fullText:z0,totalLines:X0,maxLines:y0,titleClass:C0,panelKey:v0})=>{let k0=Z0.has(v0),w0=z0||V0||"",d0=v0==="thought"||v0==="draft"?D(w0):w0,D0=typeof y0==="number",b0=k0&&D0,O0=D0?i(d0,y0,X0):{text:d0||"",omitted:0,totalLines:Number.isFinite(X0)?X0:0};if(!d0&&!(Number.isFinite(O0.totalLines)&&O0.totalLines>0))return null;let Q0=`agent-thinking-body${D0?" agent-thinking-body-collapsible":""}`,y=D0?`--agent-thinking-collapsed-lines: ${y0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${k0?"true":"false"}
                data-collapsible=${D0?"true":"false"}
                style=${E0?`--turn-color: ${E0};`:""}
            >
                <div class="agent-thinking-title ${C0||""}">
                    ${E0&&L`<span class=${r0} aria-hidden="true"></span>`}
                    ${s}
                    ${b0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>K0(v0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Q0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:o5(d0)}}
                />
                ${!k0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>K0(v0)}>
                        ▸ ${O0.omitted} more lines
                    </button>
                `}
                ${k0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>K0(v0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},j1=Z?.tool_call?.title,Y1=j1?`Awaiting approval: ${j1}`:"Awaiting approval",Y_=J0?v8(_,q0):null,D1=(s,V0,z0=null)=>{let X0=f8(s);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${V0?`--turn-color: ${V0};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${V0&&L`<span class=${r0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${X0}</span>
                    ${z0&&L`<span class="agent-status-elapsed">${z0}</span>`}
                </div>
                ${s.detail&&L`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `},_1=(s,V0,z0,X0,y0,C0,v0,k0=8,w0=8)=>{let d0=Math.max(y0-X0,0.000000001),D0=Math.max(V0-k0*2,1),b0=Math.max(z0-w0*2,1),O0=Math.max(v0-C0,1),Q0=v0===C0?V0/2:k0+(s.run-C0)/O0*D0,y=w0+(b0-(s.value-X0)/d0*b0);return{x:Q0,y}},m1=(s,V0,z0,X0,y0,C0,v0,k0=8,w0=8)=>{if(!Array.isArray(s)||s.length===0)return"";return s.map((d0,D0)=>{let{x:b0,y:O0}=_1(d0,V0,z0,X0,y0,C0,v0,k0,w0);return`${D0===0?"M":"L"} ${b0.toFixed(2)} ${O0.toFixed(2)}`}).join(" ")},M1=(s,V0="")=>{if(!Number.isFinite(s))return"—";return`${Math.abs(s)>=100?s.toFixed(0):s.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${V0}`},q1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],h0=(s,V0)=>{let z0=q1;if(!Array.isArray(z0)||z0.length===0)return"var(--accent-color)";if(z0.length===1||!Number.isFinite(V0)||V0<=1)return z0[0];let y0=Math.max(0,Math.min(Number.isFinite(s)?s:0,V0-1))/Math.max(1,V0-1)*(z0.length-1),C0=Math.floor(y0),v0=Math.min(z0.length-1,C0+1),k0=y0-C0,w0=z0[C0],d0=z0[v0];if(!d0||C0===v0||k0<=0.001)return w0;if(k0>=0.999)return d0;let D0=Math.round((1-k0)*1000)/10,b0=Math.round(k0*1000)/10;return`color-mix(in oklab, ${w0} ${D0}%, ${d0} ${b0}%)`},x1=(s,V0="autoresearch")=>{let z0=Array.isArray(s)?s.map((Q0)=>({...Q0,points:Array.isArray(Q0?.points)?Q0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((Q0)=>Q0.points.length>0):[],X0=z0.map((Q0,y)=>({...Q0,color:h0(y,z0.length)}));if(X0.length===0)return null;let y0=320,C0=120,v0=X0.flatMap((Q0)=>Q0.points),k0=v0.map((Q0)=>Q0.value),w0=v0.map((Q0)=>Q0.run),d0=Math.min(...k0),D0=Math.max(...k0),b0=Math.min(...w0),O0=Math.max(...w0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${X0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${y0} ${C0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${X0.map((Q0)=>{let y=Q0?.key||Q0?.label||"series",a=$0?.panelKey===V0&&$0?.seriesKey===y;return L`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${a?" is-hovered":""}`}
                                        d=${m1(Q0.points,y0,C0,d0,D0,b0,O0)}
                                        style=${`--agent-series-color: ${Q0.color};`}
                                        onMouseEnter=${()=>_0({panelKey:V0,seriesKey:y})}
                                        onMouseLeave=${()=>_0((L0)=>L0?.panelKey===V0&&L0?.seriesKey===y?null:L0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${X0.flatMap((Q0)=>{let y=typeof Q0?.unit==="string"?Q0.unit:"",a=Q0?.key||Q0?.label||"series";return Q0.points.map((L0,M0)=>{let u0=_1(L0,y0,C0,d0,D0,b0,O0);return L`
                                    <button
                                        key=${`${a}-point-${M0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Q0.color}; left:${u0.x/y0*100}%; top:${u0.y/C0*100}%;`}
                                        onMouseEnter=${()=>_0({panelKey:V0,seriesKey:a,run:L0.run,value:L0.value,unit:y})}
                                        onMouseLeave=${()=>_0((X1)=>X1?.panelKey===V0?null:X1)}
                                        onFocus=${()=>_0({panelKey:V0,seriesKey:a,run:L0.run,value:L0.value,unit:y})}
                                        onBlur=${()=>_0((X1)=>X1?.panelKey===V0?null:X1)}
                                        aria-label=${`${Q0?.label||"Series"} ${M1(L0.value,y)} at run ${L0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${X0.map((Q0)=>{let y=Q0.points[Q0.points.length-1]?.value,a=typeof Q0?.unit==="string"?Q0.unit:"",L0=Q0?.key||Q0?.label||"series",M0=$0?.panelKey===V0&&$0?.seriesKey===L0?$0:null,u0=M0&&Number.isFinite(M0.value)?M0.value:y,X1=M0&&typeof M0.unit==="string"?M0.unit:a,A1=M0&&Number.isFinite(M0.run)?M0.run:null;return L`
                            <div key=${`${L0}-legend`} class=${`agent-series-legend-item${M0?" is-hovered":""}`} style=${`--agent-series-color: ${Q0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Q0.color};`}></span>
                                <span class="agent-series-legend-label">${Q0?.label||"Series"}</span>
                                ${A1!==null&&L`<span class="agent-series-legend-run">run ${A1}</span>`}
                                <span class="agent-series-legend-value">${M1(u0,X1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},k1=(s)=>{if(!s)return null;let V0=typeof s?.key==="string"?s.key:`panel-${Math.random()}`,z0=Z0.has(V0),X0=s?.title||"Extension status",y0=s?.collapsed_text||"",C0=String(s?.state||"").replace(/[-_]+/g," ").replace(/^./,(a)=>a.toUpperCase()),v0=o0(s?.state==="completed"?"success":s?.state==="failed"?"error":s?.state==="stopped"?"warning":"info"),k0=typeof s?.detail_markdown==="string"?s.detail_markdown.trim():"",w0=typeof s?.last_run_text==="string"?s.last_run_text.trim():"",d0=typeof s?.tmux_command==="string"?s.tmux_command.trim():"",D0=Array.isArray(s?.series)?s.series:[],b0=Array.isArray(s?.actions)?s.actions:[],O0=Boolean(k0||d0),Q0=Boolean(k0||D0.length>0||d0),y=[X0,y0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${z0?"true":"false"}
                style=${v0?`--turn-color: ${v0};`:""}
                title=${!z0?y||X0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Q0?K0(V0):null}
                    >
                        ${v0&&L`<span class=${r0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${X0}</span>
                        ${y0&&L`<span class="agent-thinking-title-meta">${y0}</span>`}
                    </button>
                    ${(b0.length>0||Q0&&!z0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${b0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${b0.map((a)=>{let L0=`${V0}:${a?.key||""}`,M0=X?.has?.(L0);return L`
                                            <button
                                                key=${L0}
                                                class=${`agent-thinking-action-btn${a?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(s,a)}
                                                disabled=${Boolean(M0)}
                                            >
                                                ${M0?"Working…":a?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${Q0&&!z0&&L`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${X0}`}
                                    title="Expand details"
                                    onClick=${()=>K0(V0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${Q0&&z0&&L`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${X0}`}
                        title="Collapse details"
                        onClick=${()=>K0(V0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${z0&&L`
                    <div class=${`agent-thinking-autoresearch-layout${O0?"":" chart-only"}`}>
                        ${O0&&L`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${k0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:o5(k0)}}
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
                                                ${hY}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${D0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${x1(D0,V0)}
                                    ${w0&&L`<div class="agent-series-chart-note">${w0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${B&&Y&&D1(Y,g0)}
            ${O&&Array.isArray(q)&&q.map((s)=>k1(s))}
            ${B&&_?.type==="intent"&&D1(_,t0,Y_)}
            ${B&&Z&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${E0?`--turn-color: ${E0};`:""}>
                    <span class=${r0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Y1}</span>
                </div>
            `}
            ${B&&R&&p0({panelTitle:x0("Planning"),text:h.text,fullText:h.fullText,totalLines:h.totalLines,panelKey:"plan"})}
            ${B&&x&&p0({panelTitle:x0("Thoughts"),text:o.text,fullText:o.fullText,totalLines:o.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&H&&p0({panelTitle:x0("Draft"),text:t.text,fullText:t.fullText,totalLines:t.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${I0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${E0?`--turn-color: ${E0};`:""}>
                    ${E0&&L`<span class=${r0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!I0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${m0}</span>
                </div>
            `}
        </div>
    `}function O7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",X=Q?.kind||"other",K=Q?.rawInput||{},G=K.command||K.commands&&K.commands[0]||null,N=K.diff||null,V=K.fileName||K.path||null,B=Q?.description||K.description||K.explanation||null,E=(Array.isArray(Q?.locations)?Q.locations:[]).map((I)=>I?.path).filter((I)=>Boolean(I)),k=Array.from(new Set([V,...E].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let A=async(I)=>{try{await k8(j,I,Y||null),$()}catch(i){console.error("Failed to respond to agent request:",i)}},J=async()=>{try{await m6(q,`Auto-approved: ${q}`),await k8(j,"approved",Y||null),$()}catch(I){console.error("Failed to add to whitelist:",I)}},D=Z&&Z.length>0;return L`
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
    `}function D7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let K=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${X}`}function s5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function R_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function t4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var pY=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),cY=new Set(["text/markdown"]),lY=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),dY=new Set(["application/vnd.jgraph.mxfile"]);function a5(_){return typeof _==="string"?_.trim().toLowerCase():""}function iY(_){let $=a5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function nY(_){let $=a5(_);return!!$&&$.endsWith(".pdf")}function rY(_){let $=a5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function t5(_,$){let j=a5(_);if(iY($)||dY.has(j))return"drawio";if(nY($)||j==="application/pdf")return"pdf";if(rY($)||lY.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(pY.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function A7(_){let $=a5(_);return cY.has($)}function E7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function oY(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function sY(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function M7(_){return oY(_)||sY(_)}function d8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function aY(_,$){let j=Math.max(d8(_),d8($)),Q=Math.min(d8(_),d8($));return(j+0.05)/(Q+0.05)}function tY(_,$,j="#ffffff"){let Q=M7(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let X=M7(q);if(!X)continue;let K=aY(Q,X);if(K>Y)Z=q,Y=K}return Z}function B$(){let _=getComputedStyle(document.documentElement),$=(E,k)=>{for(let A of E){let J=_.getPropertyValue(A).trim();if(J)return J}return k},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),N=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),O=tY(X,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:X,good:K,warning:G,attention:N,border:V,fontFamily:B,buttonTextColor:O}}function k7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:X,border:K,fontFamily:G}=B$();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var eY=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),I7=!1,i8=null,T7=!1;function W$(_){_.querySelector(".adaptive-card-notice")?.remove()}function _q(_,$,j="error"){W$(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function $q(_,$=(j)=>H_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function jq(_=($)=>H_($,null)){return($,j)=>{try{let Q=$q($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function Qq(_){if(T7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=jq(),T7=!0}async function Zq(){if(I7)return;if(i8)return i8;return i8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{I7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),i8}function Yq(){return globalThis.AdaptiveCards}function qq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Xq(_){return eY.has(_)}function L$(_){if(!Array.isArray(_))return[];return _.filter(qq)}function Gq(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function U$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>U$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${U$(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Kq(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return U$($);return typeof $==="string"?$:String($)}function Nq(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((X)=>Q(X));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=Kq(q.type,j[q.id],q);for(let[X,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[X]=Q(K);return q};return Q(_)}function Vq(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function Bq(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Wq(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=Bq(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function P7(_,$,j){if(!Xq($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Zq()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=Yq();Qq(Q);let Z=new Q.AdaptiveCard,Y=B$();Z.hostConfig=new Q.HostConfig(k7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:Nq($.payload,q);Z.parse(X),Z.onExecuteAction=(N)=>{let V=Gq(N);if(j?.onAction)W$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let O=B instanceof Error?B.message:String(B||"Action failed.");_q(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=Wq($);if(G){_.classList.add("adaptive-card-finished");let N=document.createElement("div");N.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=G.label,N.appendChild(V),G.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=G.detail,N.appendChild(B)}_.appendChild(N)}if(W$(_),_.appendChild(K),G)Vq(K);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function e5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>e5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${e5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function C7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:e5(j)})).filter(($)=>$.value)}function Uq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function F$(_){if(!Array.isArray(_))return[];return _.filter(Uq)}function S7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=e5(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=C7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function x7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=C7(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):e5(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function D5({children:_,className:$=""}){let j=P(null);return g(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{x4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),h5(()=>{let Q=j.current;if(!Q)return;return x4(_,Q),()=>{x4(null,Q)}},[_]),null}function Lq(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?R_($):null},{label:"Added",value:_?.created_at?t4(_.created_at):null}].filter((Q)=>Q.value)}function Fq(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=y_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function y7({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=f0(()=>t5($?.content_type,Q),[$?.content_type,Q]),Y=E7(Z),q=f0(()=>A7($?.content_type),[$?.content_type]),[X,K]=m(Z==="text"),[G,N]=m(""),[V,B]=m(null),O=P(null),E=f0(()=>Lq($),[$]),k=f0(()=>Fq(_,Q,Z),[_,Q,Z]),A=f0(()=>{if(!q||!G)return"";return H_(G)},[q,G]);return g(()=>{let J=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!O.current||!A)return;B4(O.current);return},[A]),g(()=>{let J=!1;async function D(){if(Z!=="text"){K(!1),B(null);return}K(!0),B(null);try{let I=await l6(_);if(!J)N(I)}catch{if(!J)B("Failed to load text preview.")}finally{if(!J)K(!1)}}return D(),()=>{J=!0}},[_,Z]),L`
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
    `}function R7({src:_,onClose:$}){return g(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${D5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${D5}>
    `}function zq({mediaId:_,onPreview:$}){let[j,Q]=m(null);if(g(()=>{F5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?R_(Y):"",K=t5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
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
    `}function Hq({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=m(null);g(()=>{if(!Number.isFinite(j))return;F5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?y_(j):null,K=t5(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
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
    `}function n8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?t4(Q):null;return L`
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
    `}function Jq({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?R_(_.size):"",Z=_.mime_type||"",Y=Aq(Z),q=a4(_.uri);return L`
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
    `}function Oq({block:_}){let[$,j]=m(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
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
    `}function Dq({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=K$(_,$),Z=G7(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",X=Q?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",G=(N)=>{if(N.preventDefault(),N.stopPropagation(),!Q)return;j?.(Q)};return L`
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
    `}function Aq(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Eq({preview:_}){let $=a4(_.url),j=a4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return L`
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
    `}function Mq(_,$){return typeof _==="string"?_:""}var kq=1800,Iq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Tq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Pq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function Cq(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function Sq(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let X=q||"idle";if(Y.dataset.copyState=X,X==="success")Y.innerHTML=Tq,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(X==="error")Y.innerHTML=Pq,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Iq,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",Z(X,"idle"),q.appendChild(X);let K=async(G)=>{G.preventDefault(),G.stopPropagation();let V=Y.querySelector("code")?.textContent||"",B=await Cq(V);Z(X,B?"success":"error");let O=j.get(X);if(O)clearTimeout(O);let E=setTimeout(()=>{Z(X,"idle"),j.delete(X)},kq);j.set(X,E)};X.addEventListener("click",K),Q.push(()=>{X.removeEventListener("click",K);let G=j.get(X);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function xq(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),X=j.slice(Y),K=[...q,...X].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function yq(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),X=j.slice(Y),K=[...q,...X].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function Rq(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let N=j[G].trim();if((N==="Images:"||N==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let N=G.replace(/^\s*-\s+/,"").trim(),V=N.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||N.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let B=V[1],O=(V[2]||"").trim()||B;Z.push({id:B,label:O,raw:N})}else Z.push({id:null,label:N,raw:N})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),X=j.slice(Y),K=[...q,...X].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function wq(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function fq(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(wq).sort((N,V)=>V.length-N.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),X=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],G;while(G=X.nextNode())K.push(G);for(let N of K){let V=N.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=N.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let O=V.split(Z).filter((k)=>k!=="");if(O.length===0)continue;let E=q.createDocumentFragment();for(let k of O)if(Y.test(k)){let A=q.createElement("mark");A.className="search-highlight-term",A.textContent=k,E.appendChild(A)}else E.appendChild(q.createTextNode(k));N.parentNode.replaceChild(E,N)}return q.body.innerHTML}function w7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:X,userAvatarUrl:K,userAvatarBackground:G,onDelete:N,isThreadReply:V,isThreadPrev:B,isThreadNext:O,isRemoving:E,highlightQuery:k,onFileRef:A,onOpenWidget:J}){let[D,I]=m(null),i=P(null),h=_.data,o=h.type==="agent_response",t=X||"You",R=o?Y||F7:t,x=o?N$(Y,q,!0):N$(t,K),H=typeof G==="string"?G.trim().toLowerCase():"",S=!o&&x.image&&(H==="clear"||H==="transparent"),p=o&&Boolean(x.image),Z0=`background-color: ${S||p?"transparent":x.color}`,d=h.content_meta,$0=Boolean(d?.truncated),_0=Boolean(d?.preview),q0=$0&&!_0,G0=$0?{originalLength:Number.isFinite(d?.original_length)?d.original_length:h.content?h.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,K0=h.content_blocks||[],J0=h.media_ids||[],A0=Mq(h.content,h.link_previews),{content:E0,fileRefs:r0}=xq(A0),{content:x0,messageRefs:I0}=yq(E0),{content:o0,attachments:s0}=Rq(x0);A0=o0;let g0=L$(K0),t0=F$(K0),m0=g0.length===1&&typeof g0[0]?.fallback_text==="string"?g0[0].fallback_text.trim():"",$1=t0.length===1?S7(t0[0]).trim():"",F0=Boolean(m0)&&A0?.trim()===m0||Boolean($1)&&A0?.trim()===$1,p0=Boolean(A0)&&!q0&&!F0,j1=typeof k==="string"?k.trim():"",Y1=f0(()=>{if(!A0||F0)return"";let y=H_(A0,j);return j1?fq(y,j1):y},[A0,F0,j1]),Y_=(y,a)=>{y.stopPropagation(),I(y_(a))},[D1,_1]=m(null),m1=(y)=>{_1(y)},M1=(y)=>{y.stopPropagation(),N?.(_)},q1=(y,a)=>{let L0=new Set;if(!y||a.length===0)return{content:y,usedIds:L0};return{content:y.replace(/attachment:([^\s)"']+)/g,(u0,X1,A1,K1)=>{let h1=X1.replace(/^\/+/,""),B_=a.find((W_)=>W_.name&&W_.name.toLowerCase()===h1.toLowerCase()&&!L0.has(W_.id))||a.find((W_)=>!L0.has(W_.id));if(!B_)return u0;if(L0.add(B_.id),K1.slice(Math.max(0,A1-2),A1)==="](")return`/media/${B_.id}`;return B_.name||"attachment"}),usedIds:L0}},h0=[],x1=[],k1=[],s=[],V0=[],z0=[],X0=[],y0=0;if(K0.length>0)K0.forEach((y)=>{if(y?.type==="text"&&y.annotations)X0.push(y.annotations);if(y?.type==="generated_widget")z0.push(y);else if(y?.type==="resource_link")s.push(y);else if(y?.type==="resource")V0.push(y);else if(y?.type==="file"){let a=J0[y0++];if(a)x1.push(a),k1.push({id:a,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let a=J0[y0++];if(a){let L0=typeof y?.mime_type==="string"?y.mime_type:void 0;h0.push({id:a,annotations:y?.annotations,mimeType:L0}),k1.push({id:a,name:y?.name||y?.filename||y?.title})}}});else if(J0.length>0){let y=s0.length>0;J0.forEach((a,L0)=>{let M0=s0[L0]||null;if(k1.push({id:a,name:M0?.label||null}),y)x1.push(a);else h0.push({id:a,annotations:null})})}if(s0.length>0)s0.forEach((y)=>{if(!y?.id)return;let a=k1.find((L0)=>String(L0.id)===String(y.id));if(a&&!a.name)a.name=y.label});let{content:C0,usedIds:v0}=q1(A0,k1);A0=C0;let k0=h0.filter(({id:y})=>!v0.has(y)),w0=x1.filter((y)=>!v0.has(y)),d0=s0.length>0?s0.map((y,a)=>({id:y.id||`attachment-${a+1}`,label:y.label||`attachment-${a+1}`})):k1.map((y,a)=>({id:y.id,label:y.name||`attachment-${a+1}`})),D0=f0(()=>L$(K0),[K0]),b0=f0(()=>F$(K0),[K0]),O0=f0(()=>{return D0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[D0]);g(()=>{if(!i.current)return;return B4(i.current),Sq(i.current)},[Y1]);let Q0=P(null);return g(()=>{if(!Q0.current||D0.length===0)return;let y=Q0.current;y.innerHTML="";for(let a of D0){let L0=document.createElement("div");y.appendChild(L0),P7(L0,a,{onAction:async(M0)=>{if(M0.type==="Action.OpenUrl"){let u0=a4(M0.url||"");if(!u0)throw Error("Invalid URL");window.open(u0,"_blank","noopener,noreferrer");return}if(M0.type==="Action.Submit"){await g6({post_id:_.id,thread_id:h.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:M0.type,title:M0.title||"",data:M0.data}});return}console.warn("[post] unsupported adaptive card action:",M0.type,M0)}}).catch((M0)=>{console.error("[post] adaptive card render error:",M0),L0.textContent=a.fallback_text||"Card failed to render."})}},[O0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${o?"agent-post":""} ${V?"thread-reply":""} ${B?"thread-prev":""} ${O?"thread-next":""} ${E?"removing":""}" onClick=${$}>
            <div class="post-avatar ${o?"agent-avatar":""} ${x.image?"has-image":""}" style=${Z0}>
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
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${D7(_.timestamp)}</a>
                </div>
                ${q0&&G0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${s5(G0.originalLength)} chars
                            ${G0.maxLength?L` • Display limit: ${s5(G0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${_0&&G0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${s5(G0.maxLength)} of ${s5(G0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(r0.length>0||I0.length>0||d0.length>0)&&L`
                    <div class="post-file-refs">
                        ${I0.map((y)=>{let a=(L0)=>{if(L0.preventDefault(),L0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let M0=document.getElementById("post-"+y);if(M0)M0.scrollIntoView({behavior:"smooth",block:"center"}),M0.classList.add("post-highlight"),setTimeout(()=>M0.classList.remove("post-highlight"),2000)}};return L`
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
                        ${r0.map((y)=>{let a=y.split("/").pop()||y;return L`
                                <${l_}
                                    prefix="post"
                                    label=${a}
                                    title=${y}
                                    onClick=${()=>A?.(y)}
                                />
                            `})}
                        ${d0.map((y)=>L`
                            <${Hq}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${m1}
                            />
                        `)}
                    </div>
                `}
                ${p0&&L`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:Y1}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let a=y.target.dataset.hashtag;if(a)j?.(a)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),I(y.target.src)}}
                    />
                `}
                ${D0.length>0&&L`
                    <div ref=${Q0} class="post-adaptive-cards" />
                `}
                ${b0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${b0.map((y,a)=>{let L0=x7(y),M0=`${y.card_id}-${a}`;return L`
                                <div key=${M0} class="adaptive-card-submission-receipt">
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
                ${z0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${z0.map((y,a)=>L`
                            <${Dq}
                                key=${y.widget_id||y.id||`${_.id}-widget-${a}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${X0.length>0&&L`
                    ${X0.map((y,a)=>L`
                        <${n8} key=${a} annotations=${y} />
                    `)}
                `}
                ${k0.length>0&&L`
                    <div class="media-preview">
                        ${k0.map(({id:y,mimeType:a})=>{let M0=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?y_(y):c6(y);return L`
                                <img 
                                    key=${y} 
                                    src=${M0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(u0)=>Y_(u0,y)}
                                />
                            `})}
                    </div>
                `}
                ${k0.length>0&&L`
                    ${k0.map(({annotations:y},a)=>L`
                        ${y&&L`<${n8} key=${a} annotations=${y} />`}
                    `)}
                `}
                ${w0.length>0&&L`
                    <div class="file-attachments">
                        ${w0.map((y)=>L`
                            <${zq} key=${y} mediaId=${y} onPreview=${m1} />
                        `)}
                    </div>
                `}
                ${s.length>0&&L`
                    <div class="resource-links">
                        ${s.map((y,a)=>L`
                            <div key=${a}>
                                <${Jq} block=${y} />
                                <${n8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${V0.length>0&&L`
                    <div class="resource-embeds">
                        ${V0.map((y,a)=>L`
                            <div key=${a}>
                                <${Oq} block=${y} />
                                <${n8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${h.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${h.link_previews.map((y,a)=>L`
                            <${Eq} key=${a} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&L`<${R7} src=${D} onClose=${()=>I(null)} />`}
        ${D1&&L`
            <${y7}
                mediaId=${D1.mediaId}
                info=${D1.info}
                onClose=${()=>_1(null)}
            />
        `}
    `}function f7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:X,onOpenWidget:K,emptyMessage:G,timelineRef:N,agents:V,user:B,onDeletePost:O,reverse:E=!0,removingPostIds:k,searchQuery:A}){let[J,D]=m(!1),I=P(null),i=typeof IntersectionObserver<"u",h=C(async()=>{if(!j||!$||J)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,J,j]),o=C((d)=>{let{scrollTop:$0,scrollHeight:_0,clientHeight:q0}=d.target,G0=E?_0-q0-$0:$0,K0=Math.max(300,q0);if(G0<K0)h()},[E,h]);g(()=>{if(!i)return;let d=I.current,$0=N?.current;if(!d||!$0)return;let _0=300,q0=new IntersectionObserver((G0)=>{for(let K0 of G0){if(!K0.isIntersecting)continue;h()}},{root:$0,rootMargin:`${_0}px 0px ${_0}px 0px`,threshold:0});return q0.observe(d),()=>q0.disconnect()},[i,$,j,N,h]);let t=P(h);if(t.current=h,g(()=>{if(i)return;if(!N?.current)return;let{scrollTop:d,scrollHeight:$0,clientHeight:_0}=N.current,q0=E?$0-_0-d:d,G0=Math.max(300,_0);if(q0<G0)t.current?.()},[i,_,$,E,N]),g(()=>{if(!N?.current)return;if(!$||J)return;let{scrollTop:d,scrollHeight:$0,clientHeight:_0}=N.current,q0=E?$0-_0-d:d,G0=Math.max(300,_0);if($0<=_0+1||q0<G0)t.current?.()},[_,$,J,E,N]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let R=_.slice().sort((d,$0)=>d.id-$0.id),x=(d)=>{let $0=d?.data?.thread_id;if($0===null||$0===void 0||$0==="")return null;let _0=Number($0);return Number.isFinite(_0)?_0:null},H=new Map;for(let d=0;d<R.length;d+=1){let $0=R[d],_0=Number($0?.id),q0=x($0);if(q0!==null){let G0=H.get(q0)||{anchorIndex:-1,replyIndexes:[]};G0.replyIndexes.push(d),H.set(q0,G0)}else if(Number.isFinite(_0)){let G0=H.get(_0)||{anchorIndex:-1,replyIndexes:[]};G0.anchorIndex=d,H.set(_0,G0)}}let S=new Map;for(let[d,$0]of H.entries()){let _0=new Set;if($0.anchorIndex>=0)_0.add($0.anchorIndex);for(let q0 of $0.replyIndexes)_0.add(q0);S.set(d,Array.from(_0).sort((q0,G0)=>q0-G0))}let p=R.map((d,$0)=>{let _0=x(d);if(_0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=S.get(_0);if(!q0||q0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G0=q0.indexOf($0);if(G0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G0>0,hasThreadNext:G0<q0.length-1}}),Z0=L`<div class="timeline-sentinel" ref=${I}></div>`;return L`
        <div class="timeline ${E?"reverse":"normal"}" ref=${N} onScroll=${o}>
            <div class="timeline-content">
                ${E?Z0:null}
                ${R.map((d,$0)=>{let _0=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),q0=k?.has?.(d.id),G0=p[$0]||{};return L`
                    <${w7}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${_0}
                        isThreadPrev=${G0.hasThreadPrev}
                        isThreadNext=${G0.hasThreadNext}
                        isRemoving=${q0}
                        highlightQuery=${A}
                        agentName=${z7(d.data?.agent_id,V||{})}
                        agentAvatarUrl=${H7(d.data?.agent_id,V||{})}
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
                ${E?null:Z0}
            </div>
        </div>
    `}class v7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var n0=new v7;var r8=null,z$=null;function vq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function u7(){if(z$)return Promise.resolve(z$);if(!r8)r8=import(vq()).then((_)=>{return z$=_,_}).catch((_)=>{throw r8=null,_});return r8}class b7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await u7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var H$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new b7(_,$)}};function J$(){u7().catch(()=>{})}var e4="piclaw://terminal";var uq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},bq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},o8=null,O$=null;function gq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function mq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!gq(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function hq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!o8)o8=mq(()=>Promise.resolve($.init?.())).catch((j)=>{throw o8=null,j});return await o8,$}async function pq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!O$)O$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await O$}async function cq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function lq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function dq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function W4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function iq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function g7(){let _=dq(),$=_?bq:uq,j=W4("--bg-primary",_?"#000000":"#ffffff"),Q=W4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=W4("--text-secondary",_?"#71767b":"#536471"),Y=W4("--accent-color","#1d9bf0"),q=W4("--danger-color",_?"#ff7b72":"#cf222e"),X=W4("--success-color",_?"#7ee787":"#1a7f37"),K=W4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=W4("--border-color",_?"#2f3336":"#eff3f4"),N=W4("--accent-soft-strong",iq(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:N,selectionForeground:Q,black:K,red:q,green:X,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class D${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await hq();if(await pq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:g7()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=g7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await cq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(lq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var A$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new D$(_,$)}},E$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new D$(_,$)}};function U4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function s8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function m7(_,$={}){if(U4($))return null;if(s8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:nq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function M$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function k$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function I$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function T$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function L4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function h7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function p7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,X]of Object.entries(Y)){let K=String(q||"").trim();if(!K)continue;if(X===null||X===void 0||X==="")Q.searchParams.delete(K);else Q.searchParams.set(K,String(X))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function nq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function rq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function c7(_,$={}){if(U4($))return null;if(s8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:rq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function _8(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function oq(_){try{return JSON.parse(_)}catch{return null}}function sq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function aq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class P${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=aq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||oq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=sq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var $8=()=>{throw Error("Operation requires compiling with --exportRuntime")},tq=typeof BigUint64Array<"u",j8=Symbol();var eq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function l7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return eq.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function d7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return l7(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,X,K){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${X}:${K}`)},Q.trace=Q.trace||function(Y,q,...X){let K=$.memory||Q.memory;console.log(`trace: ${j(K,Y)}${q?" ":""}${X.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function i7(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||$8,q=j.__pin||$8,X=j.__unpin||$8,K=j.__collect||$8,G=j.__rtti_base,N=G?(H)=>H[G>>>2]:$8;_.__new=Y,_.__pin=q,_.__unpin=X,_.__collect=K;function V(H){let S=new Uint32Array(Q.buffer);if((H>>>=0)>=N(S))throw Error(`invalid id: ${H}`);return S[(G+4>>>2)+H]}function B(H){let S=V(H);if(!(S&7))throw Error(`not an array: ${H}, flags=${S}`);return S}function O(H){return 31-Math.clz32(H>>>6&31)}function E(H){if(H==null)return 0;let S=H.length,p=Y(S<<1,2),Z0=new Uint16Array(Q.buffer);for(let d=0,$0=p>>>1;d<S;++d)Z0[$0+d]=H.charCodeAt(d);return p}_.__newString=E;function k(H){if(H==null)return 0;let S=new Uint8Array(H),p=Y(S.length,1);return new Uint8Array(Q.buffer).set(S,p),p}_.__newArrayBuffer=k;function A(H){if(!H)return null;let S=Q.buffer;if(new Uint32Array(S)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return l7(S,H)}_.__getString=A;function J(H,S,p){let Z0=Q.buffer;if(p)switch(H){case 2:return new Float32Array(Z0);case 3:return new Float64Array(Z0)}else switch(H){case 0:return new(S?Int8Array:Uint8Array)(Z0);case 1:return new(S?Int16Array:Uint16Array)(Z0);case 2:return new(S?Int32Array:Uint32Array)(Z0);case 3:return new(S?BigInt64Array:BigUint64Array)(Z0)}throw Error(`unsupported align: ${H}`)}function D(H,S=0){let p=S,Z0=B(H),d=O(Z0),$0=typeof p!=="number",_0=$0?p.length:p,q0=Y(_0<<d,Z0&4?H:1),G0;if(Z0&4)G0=q0;else{q(q0);let K0=Y(Z0&2?16:12,H);X(q0);let J0=new Uint32Array(Q.buffer);if(J0[K0+0>>>2]=q0,J0[K0+4>>>2]=q0,J0[K0+8>>>2]=_0<<d,Z0&2)J0[K0+12>>>2]=_0;G0=K0}if($0){let K0=J(d,Z0&2048,Z0&4096),J0=q0>>>d;if(Z0&16384)for(let A0=0;A0<_0;++A0)K0[J0+A0]=p[A0];else K0.set(p,J0)}return G0}_.__newArray=D;function I(H){let S=new Uint32Array(Q.buffer),p=S[H+-8>>>2],Z0=B(p),d=O(Z0),$0=Z0&4?H:S[H+4>>>2],_0=Z0&2?S[H+12>>>2]:S[$0+-4>>>2]>>>d;return J(d,Z0&2048,Z0&4096).subarray($0>>>=d,$0+_0)}_.__getArrayView=I;function i(H){let S=I(H),p=S.length,Z0=Array(p);for(let d=0;d<p;d++)Z0[d]=S[d];return Z0}_.__getArray=i;function h(H){let S=Q.buffer,p=new Uint32Array(S)[H+-4>>>2];return S.slice(H,H+p)}_.__getArrayBuffer=h;function o(H){if(!Z)throw Error("Operation requires compiling with --exportTable");let S=new Uint32Array(Q.buffer)[H>>>2];return Z.get(S)}_.__getFunction=o;function t(H,S,p){return new H(R(H,S,p))}function R(H,S,p){let Z0=Q.buffer,d=new Uint32Array(Z0);return new H(Z0,d[p+4>>>2],d[p+8>>>2]>>>S)}function x(H,S,p){_[`__get${S}`]=t.bind(null,H,p),_[`__get${S}View`]=R.bind(null,H,p)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{x(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),tq)[BigUint64Array,BigInt64Array].forEach((H)=>{x(H,H.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,$X(j,_)}function n7(_){return typeof Response<"u"&&_ instanceof Response}function _X(_){return _ instanceof WebAssembly.Module}async function C$(_,$={}){if(n7(_=await _))return a8(_,$);let j=_X(_)?_:await WebAssembly.compile(_),Q=d7($),Z=await WebAssembly.instantiate(j,$),Y=i7(Q,Z);return{module:j,instance:Z,exports:Y}}async function a8(_,$={}){if(!WebAssembly.instantiateStreaming)return C$(n7(_=await _)?_.arrayBuffer():_,$);let j=d7($),Q=await WebAssembly.instantiateStreaming(_,$),Z=i7(j,Q.instance);return{...Q,exports:Z}}function $X(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let X=Y[0],K=X.indexOf("#");if(K>=0){let G=X.substring(0,K),N=q[G];if(typeof N>"u"||!N.prototype){let V=function(...B){return V.wrap(V.prototype.constructor(0,...B))};if(V.prototype={valueOf(){return this[j8]}},V.wrap=function(B){return Object.create(V.prototype,{[j8]:{value:B,writable:!1}})},N)Object.getOwnPropertyNames(N).forEach((B)=>Object.defineProperty(V,B,Object.getOwnPropertyDescriptor(N,B)));q[G]=V}if(X=X.substring(K+1),q=q[G].prototype,/^(get|set):/.test(X)){if(!Object.hasOwn(q,X=X.substring(4))){let V=_[Q.replace("set:","get:")],B=_[Q.replace("get:","set:")];Object.defineProperty(q,X,{get(){return V(this[j8])},set(O){B(this[j8],O)},enumerable:!0})}}else if(X==="constructor")(q[X]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[X]=function(...V){return j(V.length),Z(this[j8],...V)}).original=Z}else if(/^(get|set):/.test(X)){if(!Object.hasOwn(q,X=X.substring(4)))Object.defineProperty(q,X,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[X]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[X]=Z}return $}var QX="/static/js/vendor/remote-display-decoder.wasm",t8=null;function r7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function o7(){if(t8)return t8;return t8=(async()=>{try{let Q=function(Z,Y,q,X,K,G,N){let V=r7(Y),B=j.__pin(j.__newArrayBuffer(V));try{return j[Z](B,q,X,K,G,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift)}finally{j.__unpin(B);try{j.__collect()}catch{}}},_=await fetch(QX,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof a8==="function"?await a8(_,{}):await C$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,X,K,G){return Q("processRawRect",Z,Y,q,X,K,G)},processCopyRect(Z,Y,q,X,K,G){return j.processCopyRect(Z,Y,q,X,K,G)},processRreRect(Z,Y,q,X,K,G){return Q("processRreRect",Z,Y,q,X,K,G)},processHextileRect(Z,Y,q,X,K,G){return Q("processHextileRect",Z,Y,q,X,K,G)},processZrleTileData(Z,Y,q,X,K,G){return Q("processZrleTileData",Z,Y,q,X,K,G)},decodeRawRectToRgba(Z,Y,q,X){let K=r7(Z),G=j.__pin(j.__newArrayBuffer(K));try{let N=j.__pin(j.decodeRawRectToRgba(G,Y,q,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(N))}finally{j.__unpin(N)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),t8}function A5(_,$,j){return Math.max($,Math.min(j,_))}function e8(_,$,j){let Q=new Uint8Array(6),Z=A5(Math.floor(Number($||0)),0,65535),Y=A5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=A5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function x$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function s7(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),X=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/X,N=(Number($||0)-Number(j?.top||0))/K;return{x:A5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:A5(Math.floor(N*q),0,Math.max(0,q-1))}}function a7(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=A5(Number(Q||0)|Z,0,255);return[e8(Y,$,j),e8(Number(Q||0),$,j)]}function t7(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function Q8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function e7(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),X=Math.max(1,Math.floor(Number(Q||0))),K=Math.min(Z/q,Y/X);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var S$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)S$[`F${_}`]=65470+(_-1);function y$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(S$,Y))return S$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var v1=Uint8Array,O_=Uint16Array,h$=Int32Array,_6=new v1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$6=new v1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),u$=new v1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Q9=function(_,$){var j=new O_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new h$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},Z9=Q9(_6,2),Y9=Z9.b,b$=Z9.r;Y9[28]=258,b$[258]=28;var q9=Q9($6,0),ZX=q9.b,_9=q9.r,g$=new O_(32768);for(l0=0;l0<32768;++l0)$4=(l0&43690)>>1|(l0&21845)<<1,$4=($4&52428)>>2|($4&13107)<<2,$4=($4&61680)>>4|($4&3855)<<4,g$[l0]=(($4&65280)>>8|($4&255)<<8)>>1;var $4,l0,j4=function(_,$,j){var Q=_.length,Z=0,Y=new O_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new O_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var X;if(j){X=new O_(1<<$);var K=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],N=$-_[Z],V=q[_[Z]-1]++<<N;for(var B=V|(1<<N)-1;V<=B;++V)X[g$[V]>>K]=G}}else{X=new O_(Q);for(Z=0;Z<Q;++Z)if(_[Z])X[Z]=g$[q[_[Z]-1]++]>>15-_[Z]}return X},R4=new v1(288);for(l0=0;l0<144;++l0)R4[l0]=8;var l0;for(l0=144;l0<256;++l0)R4[l0]=9;var l0;for(l0=256;l0<280;++l0)R4[l0]=7;var l0;for(l0=280;l0<288;++l0)R4[l0]=8;var l0,X8=new v1(32);for(l0=0;l0<32;++l0)X8[l0]=5;var l0,YX=j4(R4,9,0),qX=j4(R4,9,1),XX=j4(X8,5,0),GX=j4(X8,5,1),R$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},d_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},w$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},p$=function(_){return(_+7)/8|0},q8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new v1(_.subarray($,j))};var KX=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],V_=function(_,$,j){var Q=Error($||KX[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,V_);if(!j)throw Q;return Q},NX=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new v1(0);var q=!j,X=q||$.i!=2,K=$.i;if(q)j=new v1(Z*3);var G=function($1){var F0=j.length;if($1>F0){var p0=new v1(Math.max(F0*2,$1));p0.set(j),j=p0}},N=$.f||0,V=$.p||0,B=$.b||0,O=$.l,E=$.d,k=$.m,A=$.n,J=Z*8;do{if(!O){N=d_(_,V,1);var D=d_(_,V+1,3);if(V+=3,!D){var I=p$(V)+4,i=_[I-4]|_[I-3]<<8,h=I+i;if(h>Z){if(K)V_(0);break}if(X)G(B+i);j.set(_.subarray(I,h),B),$.b=B+=i,$.p=V=h*8,$.f=N;continue}else if(D==1)O=qX,E=GX,k=9,A=5;else if(D==2){var o=d_(_,V,31)+257,t=d_(_,V+10,15)+4,R=o+d_(_,V+5,31)+1;V+=14;var x=new v1(R),H=new v1(19);for(var S=0;S<t;++S)H[u$[S]]=d_(_,V+S*3,7);V+=t*3;var p=R$(H),Z0=(1<<p)-1,d=j4(H,p,1);for(var S=0;S<R;){var $0=d[d_(_,V,Z0)];V+=$0&15;var I=$0>>4;if(I<16)x[S++]=I;else{var _0=0,q0=0;if(I==16)q0=3+d_(_,V,3),V+=2,_0=x[S-1];else if(I==17)q0=3+d_(_,V,7),V+=3;else if(I==18)q0=11+d_(_,V,127),V+=7;while(q0--)x[S++]=_0}}var G0=x.subarray(0,o),K0=x.subarray(o);k=R$(G0),A=R$(K0),O=j4(G0,k,1),E=j4(K0,A,1)}else V_(1);if(V>J){if(K)V_(0);break}}if(X)G(B+131072);var J0=(1<<k)-1,A0=(1<<A)-1,E0=V;for(;;E0=V){var _0=O[w$(_,V)&J0],r0=_0>>4;if(V+=_0&15,V>J){if(K)V_(0);break}if(!_0)V_(2);if(r0<256)j[B++]=r0;else if(r0==256){E0=V,O=null;break}else{var x0=r0-254;if(r0>264){var S=r0-257,I0=_6[S];x0=d_(_,V,(1<<I0)-1)+Y9[S],V+=I0}var o0=E[w$(_,V)&A0],s0=o0>>4;if(!o0)V_(3);V+=o0&15;var K0=ZX[s0];if(s0>3){var I0=$6[s0];K0+=w$(_,V)&(1<<I0)-1,V+=I0}if(V>J){if(K)V_(0);break}if(X)G(B+131072);var g0=B+x0;if(B<K0){var t0=Y-K0,m0=Math.min(K0,g0);if(t0+B<0)V_(3);for(;B<m0;++B)j[B]=Q[t0+B]}for(;B<g0;++B)j[B]=j[B-K0]}}if($.l=O,$.p=E0,$.b=B,$.f=N,O)N=1,$.m=k,$.d=E,$.n=A}while(!N);return B!=j.length&&q?q8(j,0,B):j.subarray(0,B)},F4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},Z8=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},f$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:G9,l:0};if(Z==1){var q=new v1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(h,o){return h.f-o.f}),j.push({s:-1,f:25001});var X=j[0],K=j[1],G=0,N=1,V=2;j[0]={s:-1,f:X.f+K.f,l:X,r:K};while(N!=Z-1)X=j[j[G].f<j[V].f?G++:V++],K=j[G!=N&&j[G].f<j[V].f?G++:V++],j[N++]={s:-1,f:X.f+K.f,l:X,r:K};var B=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>B)B=Y[Q].s;var O=new O_(B+1),E=m$(j[N-1],O,0);if(E>$){var Q=0,k=0,A=E-$,J=1<<A;Y.sort(function(o,t){return O[t.s]-O[o.s]||o.f-t.f});for(;Q<Z;++Q){var D=Y[Q].s;if(O[D]>$)k+=J-(1<<E-O[D]),O[D]=$;else break}k>>=A;while(k>0){var I=Y[Q].s;if(O[I]<$)k-=1<<$-O[I]++-1;else++Q}for(;Q>=0&&k;--Q){var i=Y[Q].s;if(O[i]==$)--O[i],++k}E=$}return{t:new v1(O),l:E}},m$=function(_,$,j){return _.s==-1?Math.max(m$(_.l,$,j+1),m$(_.r,$,j+1)):$[_.s]=j},$9=function(_){var $=_.length;while($&&!_[--$]);var j=new O_(++$),Q=0,Z=_[0],Y=1,q=function(K){j[Q++]=K};for(var X=1;X<=$;++X)if(_[X]==Z&&X!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[X]}return{c:j.subarray(0,Q),n:$}},Y8=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},X9=function(_,$,j){var Q=j.length,Z=p$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},j9=function(_,$,j,Q,Z,Y,q,X,K,G,N){F4($,N++,j),++Z[256];var V=f$(Z,15),B=V.t,O=V.l,E=f$(Y,15),k=E.t,A=E.l,J=$9(B),D=J.c,I=J.n,i=$9(k),h=i.c,o=i.n,t=new O_(19);for(var R=0;R<D.length;++R)++t[D[R]&31];for(var R=0;R<h.length;++R)++t[h[R]&31];var x=f$(t,7),H=x.t,S=x.l,p=19;for(;p>4&&!H[u$[p-1]];--p);var Z0=G+5<<3,d=Y8(Z,R4)+Y8(Y,X8)+q,$0=Y8(Z,B)+Y8(Y,k)+q+14+3*p+Y8(t,H)+2*t[16]+3*t[17]+7*t[18];if(K>=0&&Z0<=d&&Z0<=$0)return X9($,N,_.subarray(K,K+G));var _0,q0,G0,K0;if(F4($,N,1+($0<d)),N+=2,$0<d){_0=j4(B,O,0),q0=B,G0=j4(k,A,0),K0=k;var J0=j4(H,S,0);F4($,N,I-257),F4($,N+5,o-1),F4($,N+10,p-4),N+=14;for(var R=0;R<p;++R)F4($,N+3*R,H[u$[R]]);N+=3*p;var A0=[D,h];for(var E0=0;E0<2;++E0){var r0=A0[E0];for(var R=0;R<r0.length;++R){var x0=r0[R]&31;if(F4($,N,J0[x0]),N+=H[x0],x0>15)F4($,N,r0[R]>>5&127),N+=r0[R]>>12}}}else _0=YX,q0=R4,G0=XX,K0=X8;for(var R=0;R<X;++R){var I0=Q[R];if(I0>255){var x0=I0>>18&31;if(Z8($,N,_0[x0+257]),N+=q0[x0+257],x0>7)F4($,N,I0>>23&31),N+=_6[x0];var o0=I0&31;if(Z8($,N,G0[o0]),N+=K0[o0],o0>3)Z8($,N,I0>>5&8191),N+=$6[o0]}else Z8($,N,_0[I0]),N+=q0[I0]}return Z8($,N,_0[256]),N+q0[256]},VX=new h$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),G9=new v1(0),BX=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,X=new v1(Q+q+5*(1+Math.ceil(q/7000))+Z),K=X.subarray(Q,X.length-Z),G=Y.l,N=(Y.r||0)&7;if($){if(N)K[0]=Y.r>>3;var V=VX[$-1],B=V>>13,O=V&8191,E=(1<<j)-1,k=Y.p||new O_(32768),A=Y.h||new O_(E+1),J=Math.ceil(j/3),D=2*J,I=function(j1){return(_[j1]^_[j1+1]<<J^_[j1+2]<<D)&E},i=new h$(25000),h=new O_(288),o=new O_(32),t=0,R=0,x=Y.i||0,H=0,S=Y.w||0,p=0;for(;x+2<q;++x){var Z0=I(x),d=x&32767,$0=A[Z0];if(k[d]=$0,A[Z0]=d,S<=x){var _0=q-x;if((t>7000||H>24576)&&(_0>423||!G)){N=j9(_,K,0,i,h,o,R,H,p,x-p,N),H=t=R=0,p=x;for(var q0=0;q0<286;++q0)h[q0]=0;for(var q0=0;q0<30;++q0)o[q0]=0}var G0=2,K0=0,J0=O,A0=d-$0&32767;if(_0>2&&Z0==I(x-A0)){var E0=Math.min(B,_0)-1,r0=Math.min(32767,x),x0=Math.min(258,_0);while(A0<=r0&&--J0&&d!=$0){if(_[x+G0]==_[x+G0-A0]){var I0=0;for(;I0<x0&&_[x+I0]==_[x+I0-A0];++I0);if(I0>G0){if(G0=I0,K0=A0,I0>E0)break;var o0=Math.min(A0,I0-2),s0=0;for(var q0=0;q0<o0;++q0){var g0=x-A0+q0&32767,t0=k[g0],m0=g0-t0&32767;if(m0>s0)s0=m0,$0=g0}}}d=$0,$0=k[d],A0+=d-$0&32767}}if(K0){i[H++]=268435456|b$[G0]<<18|_9[K0];var $1=b$[G0]&31,F0=_9[K0]&31;R+=_6[$1]+$6[F0],++h[257+$1],++o[F0],S=x+G0,++t}else i[H++]=_[x],++h[_[x]]}}for(x=Math.max(x,S);x<q;++x)i[H++]=_[x],++h[_[x]];if(N=j9(_,K,G,i,h,o,R,H,p,x-p,N),!G)Y.r=N&7|K[N/8|0]<<3,N-=7,Y.h=A,Y.p=k,Y.i=x,Y.w=S}else{for(var x=Y.w||0;x<q+G;x+=65535){var p0=x+65535;if(p0>=q)K[N/8|0]=G,p0=q;N=X9(K,N+1,_.subarray(x,p0))}Y.i=q}return q8(X,0,Q+p$(N)+Z)};var K9=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var X=Math.min(q+2655,Y);for(;q<X;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},WX=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new v1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return BX(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var N9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var UX=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=K9();Z.p($.dictionary),N9(_,2,Z.d())}},LX=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)V_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)V_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var v$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new v1(32768),this.p=new v1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)V_(5);if(this.d)V_(4);if(!this.p.length)this.p=$;else if($.length){var j=new v1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=NX(this.p,this.s,this.o);this.ondata(q8(Q,j,this.s.b),this.d),this.o=q8(Q,this.s.b-32768),this.s.b=this.o.length,this.p=q8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function V9(_,$){if(!$)$={};var j=K9();j.p(_);var Q=WX(_,$,$.dictionary?6:2,4);return UX(Q,$),N9(Q,Q.length-4,j.d()),Q}var B9=function(){function _($,j){v$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(v$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(LX(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)V_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}v$.prototype.c.call(this,j)},_}();var FX=typeof TextDecoder<"u"&&new TextDecoder,zX=0;try{FX.decode(G9,{stream:!0}),zX=1}catch(_){}var HX=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],JX=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],OX=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],DX=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],AX=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],EX=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],MX=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],kX=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],L9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;L9[_]=$}function F9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function z9(_){let $=0n,j=F9(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function IX(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function E5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function W9(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function TX(_){let $=E5(z9(_),AX,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of MX){j=W9(j,Y),Q=W9(Q,Y);let q=j<<28n|Q;Z.push(E5(q,EX,56))}return Z}function PX(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(kX[j][Y][q])}return $}function CX(_,$){let j=E5(_,OX,32)^BigInt($),Q=PX(j);return E5(Q,DX,32)}function U9(_,$){let j=TX($),Q=E5(z9(_),HX,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let X of j){let K=Y,G=(Z^CX(Y,X))&0xffffffffn;Z=K,Y=G}let q=Y<<32n|Z;return IX(E5(q,JX,64),8)}function SX(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=L9[Z]}return j}function H9(_,$){let j=F9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=SX(_),Z=new Uint8Array(16);return Z.set(U9(j.slice(0,8),Q),0),Z.set(U9(j.slice(8,16),Q),8),Z}var i_="vnc";function xX(_){return Number(_)}function yX(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=xX(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function I5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function RX(_,$){let j=I5(_),Q=I5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function wX(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=I5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function fX(){return(_)=>{let $=I5(_);try{let j=[],Q=new B9((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return wX(j)}catch(j){try{let Q=V9($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function vX(_){return new TextEncoder().encode(String(_||""))}function M5(_){return new TextDecoder().decode(I5(_))}function uX(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function bX(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function J9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function gX(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function mX(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function O9(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function k5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function A9(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function hX(_,$,j,Q){let Z=Q||T5,Y=I5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),X=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<X)throw Error(`Incomplete raw rectangle payload: expected ${X} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,N=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let B=A9(Y,G,q,Z.bigEndian),O=k5(B>>>Z.redShift&Z.redMax,Z.redMax),E=k5(B>>>Z.greenShift&Z.greenMax,Z.greenMax),k=k5(B>>>Z.blueShift&Z.blueMax,Z.blueMax);K[N]=O,K[N+1]=E,K[N+2]=k,K[N+3]=255,G+=q,N+=4}return K}function z4(_,$,j){let Q=j||T5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=A9(_,$,Z,Q.bigEndian);return{rgba:[k5(Y>>>Q.redShift&Q.redMax,Q.redMax),k5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),k5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function w4(_,$,j,Q,Z,Y,q){if(!q)return;for(let X=0;X<Y;X+=1)for(let K=0;K<Z;K+=1){let G=((Q+X)*$+(j+K))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function E9(_,$,j,Q,Z,Y,q){for(let X=0;X<Y;X+=1){let K=X*Z*4,G=((Q+X)*$+j)*4;_.set(q.subarray(K,K+Z*4),G)}}function D9(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function pX(_,$,j,Q,Z,Y,q){let X=Z||T5,K=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let N=_.slice($+4,$+4+G),V;try{V=q(N)}catch{return{consumed:4+G,skipped:!0}}let B=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let E=0;E<Q;E+=64){let k=Math.min(64,Q-E);for(let A=0;A<j;A+=64){let J=Math.min(64,j-A);if(V.byteLength<B+1)return null;let D=V[B++],I=D&127,i=(D&128)!==0;if(!i&&I===0){let h=J*k*K;if(V.byteLength<B+h)return null;let o=Y(V.slice(B,B+h),J,k,X);B+=h,E9(O,j,A,E,J,k,o);continue}if(!i&&I===1){let h=z4(V,B,X);if(!h)return null;B+=h.bytesPerPixel,w4(O,j,A,E,J,k,h.rgba);continue}if(!i&&I>1&&I<=16){let h=[];for(let x=0;x<I;x+=1){let H=z4(V,B,X);if(!H)return null;B+=H.bytesPerPixel,h.push(H.rgba)}let o=I<=2?1:I<=4?2:4,t=Math.ceil(J*o/8),R=t*k;if(V.byteLength<B+R)return null;for(let x=0;x<k;x+=1){let H=B+x*t;for(let S=0;S<J;S+=1){let p=S*o,Z0=H+(p>>3),d=8-o-(p&7),$0=V[Z0]>>d&(1<<o)-1;w4(O,j,A+S,E+x,1,1,h[$0])}}B+=R;continue}if(i&&I===0){let h=0,o=0;while(o<k){let t=z4(V,B,X);if(!t)return null;B+=t.bytesPerPixel;let R=D9(V,B);if(!R)return null;B+=R.consumed;for(let x=0;x<R.runLength;x+=1)if(w4(O,j,A+h,E+o,1,1,t.rgba),h+=1,h>=J){if(h=0,o+=1,o>=k)break}}continue}if(i&&I>0){let h=[];for(let R=0;R<I;R+=1){let x=z4(V,B,X);if(!x)return null;B+=x.bytesPerPixel,h.push(x.rgba)}let o=0,t=0;while(t<k){if(V.byteLength<B+1)return null;let R=V[B++],x=R,H=1;if(R&128){x=R&127;let p=D9(V,B);if(!p)return null;B+=p.consumed,H=p.runLength}let S=h[x];if(!S)return null;for(let p=0;p<H;p+=1)if(w4(O,j,A+o,E+t,1,1,S),o+=1,o>=J){if(o=0,t+=1,t>=k)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:O,decompressed:V}}function cX(_,$,j,Q,Z){let Y=Z||T5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+K*(q+8);if(_.byteLength<$+G)return null;let N=$+4,V=z4(_,N,Y);if(!V)return null;N+=V.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);w4(B,j,0,0,j,Q,V.rgba);for(let O=0;O<K;O+=1){let E=z4(_,N,Y);if(!E)return null;if(N+=E.bytesPerPixel,_.byteLength<N+8)return null;let k=new DataView(_.buffer,_.byteOffset+N,8),A=k.getUint16(0,!1),J=k.getUint16(2,!1),D=k.getUint16(4,!1),I=k.getUint16(6,!1);N+=8,w4(B,j,A,J,D,I,E.rgba)}return{consumed:N-$,rgba:B}}function lX(_,$,j,Q,Z,Y){let q=Z||T5,X=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,N=[0,0,0,255],V=[255,255,255,255];for(let B=0;B<Q;B+=16){let O=Math.min(16,Q-B);for(let E=0;E<j;E+=16){let k=Math.min(16,j-E);if(_.byteLength<G+1)return null;let A=_[G++];if(A&1){let J=k*O*X;if(_.byteLength<G+J)return null;let D=Y(_.slice(G,G+J),k,O,q);G+=J,E9(K,j,E,B,k,O,D);continue}if(A&2){let J=z4(_,G,q);if(!J)return null;N=J.rgba,G+=J.bytesPerPixel}if(w4(K,j,E,B,k,O,N),A&4){let J=z4(_,G,q);if(!J)return null;V=J.rgba,G+=J.bytesPerPixel}if(A&8){if(_.byteLength<G+1)return null;let J=_[G++];for(let D=0;D<J;D+=1){let I=V;if(A&16){let H=z4(_,G,q);if(!H)return null;I=H.rgba,G+=H.bytesPerPixel}if(_.byteLength<G+2)return null;let i=_[G++],h=_[G++],o=i>>4,t=i&15,R=(h>>4)+1,x=(h&15)+1;w4(K,j,E+o,B+t,R,x,I)}}}}return{consumed:G-$,rgba:K}}var T5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class j6{protocol=i_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:hX,this.pipeline=_.pipeline||null,this.encodings=yX(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...T5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:fX()}receive(_){if(_)this.buffer=RX(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=M5(Z),q=uX(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=bX(q),j.push(vX(this.clientVersionText)),$.push({type:"protocol-version",protocol:i_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let G=M5(this.consume(4+K).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:i_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:i_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+X)break;let K=M5(this.consume(4+X).slice(4));throw Error(K||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:i_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:i_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(H9(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let X=M5(this.consume(4+q).slice(4));throw Error(X||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:i_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),X=J9(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let G=this.consume(24),N=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=N.getUint16(0,!1),this.framebufferHeight=N.getUint16(2,!1),this.serverPixelFormat=J9(N,4),this.serverName=M5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(gX(this.clientPixelFormat)),j.push(mX(this.encodings)),j.push(O9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:i_,width:Y,height:q,name:this.serverName,pixelFormat:X}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),X=4,K=[],G=!1,N=!!this.pipeline;for(let B=0;B<q;B+=1){if(this.buffer.byteLength<X+12){G=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+X,12),E=O.getUint16(0,!1),k=O.getUint16(2,!1),A=O.getUint16(4,!1),J=O.getUint16(6,!1),D=O.getInt32(8,!1);if(X+=12,D===0){let I=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),i=A*J*I;if(this.buffer.byteLength<X+i){G=!0;break}let h=this.buffer.slice(X,X+i);if(X+=i,N)this.pipeline.processRawRect(h,E,k,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:A,height:J});else K.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:this.decodeRawRect(h,A,J,this.clientPixelFormat)});continue}if(D===2){let I=cX(this.buffer,X,A,J,this.clientPixelFormat);if(!I){G=!0;break}if(N){let i=this.buffer.slice(X,X+I.consumed);this.pipeline.processRreRect(i,E,k,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:A,height:J})}else K.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:I.rgba});X+=I.consumed;continue}if(D===1){if(this.buffer.byteLength<X+4){G=!0;break}let I=new DataView(this.buffer.buffer,this.buffer.byteOffset+X,4),i=I.getUint16(0,!1),h=I.getUint16(2,!1);if(X+=4,N)this.pipeline.processCopyRect(E,k,A,J,i,h),K.push({kind:"pipeline",x:E,y:k,width:A,height:J});else K.push({kind:"copy",x:E,y:k,width:A,height:J,srcX:i,srcY:h});continue}if(D===16){let I=pX(this.buffer,X,A,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!I){G=!0;break}if(X+=I.consumed,I.skipped)continue;if(N&&I.decompressed)this.pipeline.processZrleTileData(I.decompressed,E,k,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:A,height:J});else K.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:I.rgba});continue}if(D===5){let I=lX(this.buffer,X,A,J,this.clientPixelFormat,this.decodeRawRect);if(!I){G=!0;break}if(N){let i=this.buffer.slice(X,X+I.consumed);this.pipeline.processHextileRect(i,E,k,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:A,height:J})}else K.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:I.rgba});X+=I.consumed;continue}if(D===-223){if(this.framebufferWidth=A,this.framebufferHeight=J,N)this.pipeline.initFramebuffer(A,J);K.push({kind:"resize",x:E,y:k,width:A,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(X);let V={type:"framebuffer-update",protocol:i_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(N)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(O9(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:i_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let X=M5(this.consume(q));$.push({type:"clipboard",protocol:i_,text:X}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var H4="piclaw://vnc";function dX(_){let $=String(_||"");if($===H4)return null;if(!$.startsWith(`${H4}/`))return null;let j=$.slice(`${H4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function _5(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function iX(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function nX(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function rX(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function oX(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function sX(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class M9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=dX($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=sX("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=oX(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=Q8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=Q8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=Q8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=e7($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return s7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(e8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=x$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~x$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of a7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(t7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=y$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??y$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new j6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await o7(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(X,K,G,N)=>Q.decodeRawRectToRgba(X,K,G,N);let Y=Q8(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new j6(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new P$({url:rX(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(X)=>{this.applyMetrics(X)},onMessage:(X)=>{this.handleSocketMessage(X)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await iX(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${_5(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await nX(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var c$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===H4||$.startsWith(`${H4}/`)?9000:!1},mount(_,$){return new M9(_,$)}};function f4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function aX(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${X?`${X}/`:""}${Z}`,N=[];for(let B of G.split("/")){if(!B||B===".")continue;if(B===".."){if(N.length>0)N.pop();continue}N.push(B)}let V=N.join("/");return`${T8(V)}${Y}${q}`}function G8(_){return _?.preview||null}function tX(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function eX(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function _G(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${f4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${f4(R_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${f4(t4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${f4(eX($))}</span>`),Q.push(`<span><strong>extension:</strong> ${f4(tX(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${f4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function $G(_){let $=G8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=_G(_,$);if($.kind==="image"){let Q=$.url||($.path?T8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${f4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=H_($.text||"",null,{rewriteImageSrc:(Z)=>aX(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${f4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class l${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=$G(this.context)}getContent(){let _=G8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=G8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var d$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=G8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new l$(_,$)}},i$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return G8(_)||_?.path?1:!1},mount(_,$){return new l$(_,$)}};var jG=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),QG={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},ZG={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function I9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function k9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class T9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=I9(j),Y=ZG[Z]||"\uD83D\uDCC4",q=QG[Z]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${k9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${k9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let K=X.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class P9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var n$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=I9(_?.path);if(!$||!jG.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new T9(_,$);return new P9(_,$)}};var YG=/\.(csv|tsv)$/i;function C9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class S9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${C9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${C9(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class x9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var r$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!YG.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new S9(_,$);return new x9(_,$)}};var qG=/\.pdf$/i;function XG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class y9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${XG(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class R9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var o$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!qG.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new y9(_,$);return new R9(_,$)}};var GG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function s$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class w9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${s$(Z)}" alt="${s$(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${s$(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!GG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new w9(_,$);return new f9(_,$)}};var KG=/\.(mp4|m4v|mov|webm|ogv)$/i;function NG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${NG(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!KG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new v9(_,$);return new u9(_,$)}};function VG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function BG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var e$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function b9(_){let $=String(_||"").trim();return $?$:e$}function WG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function UG(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function LG(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,X,K,G,N,V){try{if(q&&K!=null&&j({filename:q,format:X,data:K,mimeType:G,base64Encoded:Boolean(N),defaultMode:V}))return}catch(B){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",B)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,X,K,G,N,V){try{if(X&&j({filename:X,data:q,mimeType:K,base64Encoded:Boolean(G),mode:N,folderId:V}))return}catch(B){console.warn("[drawio-pane] export intercept failed, falling back to native export",B)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function g9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${UG(j)}`}class m9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${BG(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=WG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(LG(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=e$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await g9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await g9(_,"image/png");else this.xmlData=b9(await _.text());else if(_.status===404)this.xmlData=e$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?b9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var _3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!VG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new m9(_,$);return new h9(_,$)}};var FG=/\.mindmap\.ya?ml$/i,$3=String(Date.now());function p9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function j3(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function zG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function HG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Q)}class c9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class l9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(p9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,zG("/static/css/mindmap.css"),await Promise.all([j3("/static/js/vendor/d3-mindmap.min.js?v="+$3),j3("/static/js/vendor/js-yaml.min.js?v="+$3)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),HG(this.mindmapEl);let j=p9(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await j3("/static/js/vendor/mindmap-editor.js?v="+$3),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var Q3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!FG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new c9(_,$);return new l9(_,$)}};var JG=/\.kanban\.md$/i,OG=String(Date.now());function d9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function DG(){let _=window;if(_.preact)return;_.preact={h:E8,render:x4,Component:B5,createContext:z2},_.preactHooks={useState:m,useEffect:g,useCallback:C,useRef:P,useMemo:f0,useReducer:C6,useContext:O2,useLayoutEffect:h5,useImperativeHandle:J2,useErrorBoundary:A2,useDebugValue:D2},_.htm={bind:()=>L}}function AG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function EG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class i9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class n9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(d9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,EG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=d9();try{if(DG(),await AG("/static/js/vendor/kanban-editor.js?v="+OG),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var Z3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!JG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new i9(_,$);return new n9(_,$)}};class r9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new r9;var Q6="workspaceExplorerScale",MG=["compact","default","comfortable"],kG=new Set(MG),IG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function o9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return kG.has(j)?j:$}function Y3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function TG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function PG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function q3(_={}){let $=TG(_),j=_.stored?o9(_.stored,$):$;return PG(j,_)}function s9(_){return IG[o9(_)]}function CG(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function X3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function a9(_,$,j={}){let Q=j.resolvePane;if(X3(_,Q))return!0;return CG($)}var SG=60000,$j=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function xG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return X3($,(j)=>n0.resolve(j))}function jj(_,$,j,Q=0,Z=[]){if(!j&&$j(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)jj(Y,$,j,Q+1,Z);return Z}function t9(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&$j(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function V3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((X)=>[X?.path,X])):new Map,Y=!j||j.length!==Q.length,q=Q.map((X)=>{let K=V3(Z.get(X.path),X);if(K!==Z.get(X.path))Y=!0;return K});return Y?{...$,children:q}:_}function K3(_,$,j){if(!_)return _;if(_.path===$)return V3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=K3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var Qj=4,G3=14,yG=8,RG=16;function Zj(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=Zj(Q);return _.__bytes=j,j}function Yj(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Qj)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let X of Z){let K=Math.max(0,Number(X?.__bytes??X?.size??0));if(K<=0)continue;if(X.type==="dir")Y.push({kind:"dir",node:X,size:K});else Y.push({kind:"file",name:X.name,path:X.path,size:K})}Y.sort((X,K)=>K.size-X.size);let q=Y;if(Y.length>G3){let X=Y.slice(0,G3-1),K=Y.slice(G3-1),G=K.reduce((N,V)=>N+V.size,0);X.push({kind:"other",name:`+${K.length} more`,path:`${Q.path}/[other]`,size:G}),q=X}return Q.children=q.map((X)=>{if(X.kind==="dir")return Yj(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Q}function e9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function qj(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function Z6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function B3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,X=Y-Z>q?Z+q:Y,K=Z6(_,$,Q,Z),G=Z6(_,$,Q,X),N=Z6(_,$,j,X),V=Z6(_,$,j,Z),B=X-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${B} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var Xj={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function Gj(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(X,K,G,N)=>{let V=Array.isArray(X?.children)?X.children:[];if(!V.length)return;let B=Math.max(0,Number(X.size)||0);if(B<=0)return;let O=G-K,E=K;V.forEach((k,A)=>{let J=Math.max(0,Number(k.size)||0);if(J<=0)return;let D=J/B,I=E,i=A===V.length-1?G:E+O*D;if(E=i,i-I<0.003)return;let h=Xj[N];if(h){let o=qj(I,N,j);if(Q.push({key:k.path,path:k.path,label:k.name,size:J,color:o,depth:N,startAngle:I,endAngle:i,innerRadius:h[0],outerRadius:h[1],d:B3(120,120,h[0],h[1],I,i)}),N===1)Z.push({key:k.path,name:k.name,size:J,pct:Y>0?J/Y*100:0,color:o})}if(N<Qj)q(k,I,i,N+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function N3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=N3(Q,$);if(Z)return Z}return null}function Kj(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=Xj[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,X=qj(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:X,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:B3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:X}]}}function _j(_,$=!1,j=!1){if(!_)return null;let Q=Zj(_),Z=Yj(_,0),Y=Z.size||Q,{segments:q,legend:X}=Gj(Z,Y,j);if(!q.length&&Y>0){let K=Kj("[files]",Z.path,Y,j);q=K.segments,X=K.legend}return{root:Z,totalSize:Y,segments:q,legend:X,truncated:$,isDarkTheme:j}}function wG({payload:_}){if(!_)return null;let[$,j]=m(null),[Q,Z]=m(_?.root?.path||"."),[Y,q]=m(()=>[_?.root?.path||"."]),[X,K]=m(!1);g(()=>{let H=_?.root?.path||".";Z(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Q)return;K(!0);let H=setTimeout(()=>K(!1),180);return()=>clearTimeout(H)},[Q]);let G=f0(()=>{return N3(_.root,Q)||_.root},[_?.root,Q]),N=G?.size||_.totalSize||0,{segments:V,legend:B}=f0(()=>{let H=Gj(G,N,_.isDarkTheme);if(H.segments.length>0)return H;if(N<=0)return H;let S=G?.children?.length?"Total":"[files]";return Kj(S,G?.path||_?.root?.path||".",N,_.isDarkTheme)},[G,N,_.isDarkTheme,_?.root?.path]),[O,E]=m(V),k=P(new Map),A=P(0);g(()=>{let H=k.current,S=new Map(V.map(($0)=>[$0.key,$0])),p=performance.now(),Z0=220,d=($0)=>{let _0=Math.min(1,($0-p)/220),q0=_0*(2-_0),G0=V.map((K0)=>{let A0=H.get(K0.key)||{startAngle:K0.startAngle,endAngle:K0.startAngle,innerRadius:K0.innerRadius,outerRadius:K0.innerRadius},E0=(s0,g0)=>s0+(g0-s0)*q0,r0=E0(A0.startAngle,K0.startAngle),x0=E0(A0.endAngle,K0.endAngle),I0=E0(A0.innerRadius,K0.innerRadius),o0=E0(A0.outerRadius,K0.outerRadius);return{...K0,d:B3(120,120,I0,o0,r0,x0)}});if(E(G0),_0<1)A.current=requestAnimationFrame(d)};if(A.current)cancelAnimationFrame(A.current);return A.current=requestAnimationFrame(d),k.current=S,()=>{if(A.current)cancelAnimationFrame(A.current)}},[V]);let J=O.length?O:V,D=N>0?R_(N):"0 B",I=G?.name||"",h=(I&&I!=="."?I:"Total")||"Total",o=D,t=Y.length>1,R=(H)=>{if(!H?.path)return;let S=N3(_.root,H.path);if(!S||!Array.isArray(S.children)||S.children.length===0)return;q((p)=>[...p,S.path]),Z(S.path),j(null)},x=()=>{if(!t)return;q((H)=>{let S=H.slice(0,-1);return Z(S[S.length-1]||_?.root?.path||"."),S}),j(null)};return L`
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
    `}function fG({mediaId:_}){let[$,j]=m(null);if(g(()=>{if(!_)return;F5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?R_($.metadata.size):"";return L`
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
    `}function Nj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:X=!1}){let[K,G]=m(null),[N,V]=m(new Set(["."])),[B,O]=m(null),[E,k]=m(null),[A,J]=m(""),[D,I]=m(null),[i,h]=m(null),[o,t]=m(!0),[R,x]=m(!1),[H,S]=m(null),[p,Z0]=m(()=>z5("workspaceShowHidden",!1)),[d,$0]=m(!1),[_0,q0]=m(null),[G0,K0]=m(null),[J0,A0]=m(null),[E0,r0]=m(!1),[x0,I0]=m(null),[o0,s0]=m(()=>e9()),[g0,t0]=m(()=>q3({stored:z_(Q6),...Y3()})),[m0,$1]=m(!1),F0=P(N),p0=P(""),j1=P(null),Y1=P(0),Y_=P(new Set),D1=P(null),_1=P(new Map),m1=P(_),M1=P(Q),q1=P(null),h0=P(null),x1=P(null),k1=P(null),s=P(null),V0=P(null),z0=P("."),X0=P(null),y0=P({path:null,dragging:!1,startX:0,startY:0}),C0=P({path:null,dragging:!1,startX:0,startY:0}),v0=P({path:null,timer:0}),k0=P(!1),w0=P(0),d0=P(new Map),D0=P(null),b0=P(null),O0=P(null),Q0=P(null),y=P(null),a=P(null),L0=P(p),M0=P($),u0=P(j??$),X1=P(0),A1=P(J0),K1=P(d),h1=P(_0),Q4=P(null),B_=P({x:0,y:0}),e1=P(0),W_=P(null),q_=P(B),Q1=P(E),n1=P(null),Z4=P(D);m1.current=_,M1.current=Q,g(()=>{F0.current=N},[N]),g(()=>{L0.current=p},[p]),g(()=>{M0.current=$},[$]),g(()=>{u0.current=j??$},[j,$]),g(()=>{A1.current=J0},[J0]),g(()=>{if(typeof window>"u")return;let z=()=>{t0(q3({stored:z_(Q6),...Y3()}))};z();let T=()=>z(),w=()=>z(),f=(j0)=>{if(!j0||j0.key===null||j0.key===Q6)z()};window.addEventListener("resize",T),window.addEventListener("focus",w),window.addEventListener("storage",f);let r=window.matchMedia?.("(pointer: coarse)"),Y0=window.matchMedia?.("(hover: none)"),W0=(j0,P0)=>{if(!j0)return;if(j0.addEventListener)j0.addEventListener("change",P0);else if(j0.addListener)j0.addListener(P0)},U0=(j0,P0)=>{if(!j0)return;if(j0.removeEventListener)j0.removeEventListener("change",P0);else if(j0.removeListener)j0.removeListener(P0)};return W0(r,T),W0(Y0,T),()=>{window.removeEventListener("resize",T),window.removeEventListener("focus",w),window.removeEventListener("storage",f),U0(r,T),U0(Y0,T)}},[]),g(()=>{let z=(T)=>{let w=T?.detail?.path;if(!w)return;let f=w.split("/"),r=[];for(let Y0=1;Y0<f.length;Y0++)r.push(f.slice(0,Y0).join("/"));if(r.length)V((Y0)=>{let W0=new Set(Y0);W0.add(".");for(let U0 of r)W0.add(U0);return W0});O(w),requestAnimationFrame(()=>{let Y0=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(Y0)Y0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),g(()=>{K1.current=d},[d]),g(()=>{h1.current=_0},[_0]),g(()=>{q_.current=B},[B]),g(()=>{Q1.current=E},[E]),g(()=>{Z4.current=D},[D]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>s0(e9());z();let T=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>z();if(T?.addEventListener)T.addEventListener("change",w);else if(T?.addListener)T.addListener(w);let f=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(f?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)f?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(T?.removeEventListener)T.removeEventListener("change",w);else if(T?.removeListener)T.removeListener(w);f?.disconnect()}},[]),g(()=>{if(!E)return;let z=s.current;if(!z)return;let T=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(T)},[E]),g(()=>{if(!m0)return;let z=(w)=>{let f=w?.target;if(!(f instanceof Element))return;if(y.current?.contains(f))return;if(a.current?.contains(f))return;$1(!1)},T=(w)=>{if(w?.key==="Escape")$1(!1),a.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",T)}},[m0]);let w_=async(z,T={})=>{let w=Boolean(T?.autoOpen),f=String(z||"").trim();x(!0),I(null),h(null);try{let r=await d5(f,20000);if(w&&f&&a9(f,r,{resolvePane:(Y0)=>n0.resolve(Y0)}))return M1.current?.(f,r),r;return I(r),r}catch(r){let Y0={error:r.message||"Failed to load preview"};return I(Y0),Y0}finally{x(!1)}};q1.current=w_;let $5=async()=>{if(!M0.current)return;try{let z=await l5("",1,L0.current),T=t9(z.root,F0.current,L0.current);if(T===p0.current){t(!1);return}if(p0.current=T,j1.current=z.root,!Y1.current)Y1.current=requestAnimationFrame(()=>{Y1.current=0,G((w)=>V3(w,j1.current)),t(!1)})}catch(z){S(z.message||"Failed to load workspace"),t(!1)}},u4=async(z)=>{if(!z)return;if(Y_.current.has(z))return;Y_.current.add(z);try{let T=await l5(z,1,L0.current);G((w)=>K3(w,z,T.root))}catch(T){S(T.message||"Failed to load workspace")}finally{Y_.current.delete(z)}};h0.current=u4;let u1=C(()=>{let z=B;if(!z)return".";let T=_1.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[B]),U_=C((z)=>{let T=z?.closest?.(".workspace-row");if(!T)return null;let w=T.dataset.path,f=T.dataset.type;if(!w)return null;if(f==="dir")return w;if(w.includes("/")){let r=w.split("/");return r.pop(),r.join("/")||"."}return"."},[]),y1=C((z)=>{return U_(z?.target||null)},[U_]),E1=C((z)=>{A1.current=z,A0(z)},[]),N1=C(()=>{let z=v0.current;if(z?.timer)clearTimeout(z.timer);v0.current={path:null,timer:0}},[]),f_=C((z)=>{if(!z||z==="."){N1();return}let T=_1.current?.get(z);if(!T||T.type!=="dir"){N1();return}if(F0.current?.has(z)){N1();return}if(v0.current?.path===z)return;N1();let w=setTimeout(()=>{v0.current={path:null,timer:0},h0.current?.(z),V((f)=>{let r=new Set(f);return r.add(z),r})},600);v0.current={path:z,timer:w}},[N1]),v_=C((z,T)=>{if(B_.current={x:z,y:T},e1.current)return;e1.current=requestAnimationFrame(()=>{e1.current=0;let w=Q4.current;if(!w)return;let f=B_.current;w.style.transform=`translate(${f.x+12}px, ${f.y+12}px)`})},[]),V1=C((z)=>{if(!z)return;let w=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w)return;K0({path:z,label:w})},[]),X_=C(()=>{if(K0(null),e1.current)cancelAnimationFrame(e1.current),e1.current=0;if(Q4.current)Q4.current.style.transform="translate(-9999px, -9999px)"},[]),c0=C((z)=>{if(!z)return".";let T=_1.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[]),P1=C(()=>{k(null),J("")},[]),D_=C((z)=>{if(!z)return;let w=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w||z===".")return;k(z),J(w)},[]),__=C(async()=>{let z=Q1.current;if(!z)return;let T=(A||"").trim();if(!T){P1();return}let w=_1.current?.get(z),f=(w?.name||z.split("/").pop()||z).trim();if(T===f){P1();return}try{let Y0=(await n6(z,T))?.path||z,W0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(P1(),S(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:Y0,type:w?.type||"file"}})),w?.type==="dir")V((U0)=>{let j0=new Set;for(let P0 of U0)if(P0===z)j0.add(Y0);else if(P0.startsWith(`${z}/`))j0.add(`${Y0}${P0.slice(z.length)}`);else j0.add(P0);return j0});if(O(Y0),w?.type==="dir")I(null),x(!1),h(null);else q1.current?.(Y0);h0.current?.(W0)}catch(r){S(r?.message||"Failed to rename file")}},[P1,A]),b4=C(async(z)=>{let f=z||".";for(let r=0;r<50;r+=1){let W0=`untitled${r===0?"":`-${r}`}.md`;try{let j0=(await i6(f,W0,""))?.path||(f==="."?W0:`${f}/${W0}`);if(f&&f!==".")V((P0)=>new Set([...P0,f]));O(j0),S(null),h0.current?.(f),q1.current?.(j0);return}catch(U0){if(U0?.status===409||U0?.code==="file_exists")continue;S(U0?.message||"Failed to create file");return}}S("Failed to create file (untitled name already in use).")},[]),n_=C((z)=>{if(z?.stopPropagation?.(),E0)return;let T=c0(q_.current);b4(T)},[E0,c0,b4]);g(()=>{if(typeof window>"u")return;let z=(T)=>{let w=T?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;G((U0)=>{let j0=U0;for(let P0 of w){if(!P0?.root)continue;if(!j0||P0.path==="."||!P0.path)j0=P0.root;else j0=K3(j0,P0.path,P0.root)}if(j0)p0.current=t9(j0,F0.current,L0.current);return t(!1),j0});let f=q_.current;if(Boolean(f)&&w.some((U0)=>{let j0=U0?.path||"";if(!j0||j0===".")return!0;return f===j0||f.startsWith(`${j0}/`)||j0.startsWith(`${f}/`)}))d0.current.clear();if(!f||!Z4.current)return;let Y0=_1.current?.get(f);if(Y0&&Y0.type==="dir")return;if(w.some((U0)=>{let j0=U0?.path||"";if(!j0||j0===".")return!0;return f===j0||f.startsWith(`${j0}/`)}))q1.current?.(f)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),D1.current=$5;let g4=P(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),T=u0.current??M0.current,w=document.visibilityState!=="hidden"&&(T||z.matches&&M0.current);i5(w,L0.current).catch(()=>{})}).current,r_=P(0),j5=P(()=>{if(r_.current)clearTimeout(r_.current);r_.current=setTimeout(()=>{r_.current=0,g4()},250)}).current;g(()=>{if(M0.current)D1.current?.();j5()},[$,j]),g(()=>{D1.current(),g4();let z=setInterval(()=>D1.current(),SG),T=H5("previewHeight",null),w=Number.isFinite(T)?Math.min(Math.max(T,80),600):280;if(w0.current=w,x1.current)x1.current.style.setProperty("--preview-height",`${w}px`);let f=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>j5();if(f.addEventListener)f.addEventListener("change",r);else if(f.addListener)f.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(z),Y1.current)cancelAnimationFrame(Y1.current),Y1.current=0;if(f.removeEventListener)f.removeEventListener("change",r);else if(f.removeListener)f.removeListener(r);if(document.removeEventListener("visibilitychange",r),r_.current)clearTimeout(r_.current),r_.current=0;if(X0.current)clearTimeout(X0.current),X0.current=null;i5(!1,L0.current).catch(()=>{})}},[]);let o_=f0(()=>jj(K,N,p),[K,N,p]),u_=f0(()=>new Map(o_.map((z)=>[z.node.path,z.node])),[o_]),C5=f0(()=>s9(g0),[g0]);_1.current=u_;let B1=(B?_1.current.get(B):null)?.type==="dir";g(()=>{if(!B||!B1){I0(null),D0.current=null,b0.current=null;return}let z=B,T=`${p?"hidden":"visible"}:${B}`,w=d0.current,f=w.get(T);if(f?.root){w.delete(T),w.set(T,f);let W0=_j(f.root,Boolean(f.truncated),o0);if(W0)D0.current=W0,b0.current=B,I0({loading:!1,error:null,payload:W0});return}let r=D0.current,Y0=b0.current;I0({loading:!0,error:null,payload:Y0===B?r:null}),l5(B,yG,p).then((W0)=>{if(q_.current!==z)return;let U0={root:W0?.root,truncated:Boolean(W0?.truncated)};w.delete(T),w.set(T,U0);while(w.size>RG){let P0=w.keys().next().value;if(!P0)break;w.delete(P0)}let j0=_j(U0.root,U0.truncated,o0);D0.current=j0,b0.current=B,I0({loading:!1,error:null,payload:j0})}).catch((W0)=>{if(q_.current!==z)return;I0({loading:!1,error:W0?.message||"Failed to load folder size chart",payload:Y0===B?r:null})})},[B,B1,p,o0]);let R1=Boolean(D&&D.kind==="text"&&!B1&&(!D.size||D.size<=262144)),Q5=R1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",A_=Boolean(B&&B!=="."),$_=Boolean(B&&!B1),p1=Boolean(B&&!B1),C1=B&&B1?P8(B,p):null,b1=C(()=>$1(!1),[]),z1=C(async(z)=>{b1();try{await z?.()}catch(T){console.warn("[workspace-explorer] Header menu action failed:",T)}},[b1]);g(()=>{let z=O0.current;if(Q0.current)Q0.current.dispose(),Q0.current=null;if(!z)return;if(z.innerHTML="",!B||B1||!D||D.error)return;let T={path:B,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},w=n0.resolve(T)||n0.get("workspace-preview-default");if(!w)return;let f=w.mount(z,T);return Q0.current=f,()=>{if(Q0.current===f)f.dispose(),Q0.current=null;z.innerHTML=""}},[B,B1,D]);let E_=(z)=>{let T=z?.target;if(T instanceof Element)return T;return T?.parentElement||null},M_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},k_=P((z)=>{let T=E_(z),w=T?.closest?.("[data-path]");if(!w)return;let f=w.dataset.path;if(!f||f===".")return;let r=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),Y0=Boolean(T?.closest?.(".workspace-caret"));if(r||Y0)return;if(Q1.current===f)return;D_(f)}).current,s_=P((z)=>{if(k0.current){k0.current=!1;return}let T=E_(z),w=T?.closest?.("[data-path]");if(k1.current?.focus?.(),!w)return;let f=w.dataset.path,r=w.dataset.type,Y0=Boolean(T?.closest?.(".workspace-caret")),W0=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),U0=q_.current===f,j0=Q1.current;if(j0){if(j0===f)return;P1()}let P0=r==="file"&&n1.current===f&&!Y0&&!W0;if(r==="dir"){if(n1.current=null,O(f),I(null),h(null),x(!1),!F0.current.has(f))h0.current?.(f);if(U0&&!Y0)return;V((Q_)=>{let c1=new Set(Q_);if(c1.has(f))c1.delete(f);else c1.add(f);return c1})}else{n1.current=null,O(f);let w1=_1.current.get(f);if(w1)m1.current?.(w1.path,w1);if(!W0&&!Y0&&xG(f))M1.current?.(f,Z4.current);else{let c1=!W0&&!Y0;q1.current?.(f,{autoOpen:c1})}}}).current,j_=P(()=>{p0.current="",D1.current(),Array.from(F0.current||[]).filter((T)=>T&&T!==".").forEach((T)=>h0.current?.(T))}).current,r1=P(()=>{n1.current=null,O(null),I(null),h(null),x(!1)}).current,I_=P(()=>{Z0((z)=>{let T=!z;if(typeof window<"u")G1("workspaceShowHidden",String(T));return L0.current=T,i5(!0,T).catch(()=>{}),p0.current="",D1.current?.(),Array.from(F0.current||[]).filter((f)=>f&&f!==".").forEach((f)=>h0.current?.(f)),T})}).current,Y4=P((z)=>{if(E_(z)?.closest?.("[data-path]"))return;r1()}).current,H1=C(async(z)=>{if(!z)return;let T=z.split("/").pop()||z;if(!window.confirm(`Delete "${T}"? This cannot be undone.`))return;try{await o6(z);let f=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(q_.current===z)r1();h0.current?.(f),S(null)}catch(f){I((r)=>({...r||{},error:f.message||"Failed to delete file"}))}},[r1]),a_=C((z)=>{let T=k1.current;if(!T||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;T.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),m4=C((z)=>{let T=o_;if(!T||T.length===0)return;let w=B?T.findIndex((f)=>f.node.path===B):-1;if(z.key==="ArrowDown"){z.preventDefault();let f=Math.min(w+1,T.length-1),r=T[f];if(!r)return;if(O(r.node.path),r.node.type!=="dir")m1.current?.(r.node.path,r.node),q1.current?.(r.node.path);else I(null),x(!1),h(null);a_(r.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let f=w<=0?0:w-1,r=T[f];if(!r)return;if(O(r.node.path),r.node.type!=="dir")m1.current?.(r.node.path,r.node),q1.current?.(r.node.path);else I(null),x(!1),h(null);a_(r.node.path);return}if(z.key==="ArrowRight"&&w>=0){let f=T[w];if(f?.node?.type==="dir"&&!N.has(f.node.path))z.preventDefault(),h0.current?.(f.node.path),V((r)=>new Set([...r,f.node.path]));return}if(z.key==="ArrowLeft"&&w>=0){let f=T[w];if(f?.node?.type==="dir"&&N.has(f.node.path))z.preventDefault(),V((r)=>{let Y0=new Set(r);return Y0.delete(f.node.path),Y0});return}if(z.key==="Enter"&&w>=0){z.preventDefault();let f=T[w];if(!f)return;let r=f.node.path;if(f.node.type==="dir"){if(!F0.current.has(r))h0.current?.(r);V((W0)=>{let U0=new Set(W0);if(U0.has(r))U0.delete(r);else U0.add(r);return U0}),I(null),h(null),x(!1)}else m1.current?.(r,f.node),q1.current?.(r);return}if((z.key==="Delete"||z.key==="Backspace")&&w>=0){let f=T[w];if(!f||f.node.type==="dir")return;z.preventDefault(),H1(f.node.path);return}if(z.key==="Escape")z.preventDefault(),r1()},[r1,H1,N,o_,a_,B]),h4=C((z)=>{let T=E_(z),w=T?.closest?.(".workspace-row");if(!w)return;let f=w.dataset.type,r=w.dataset.path;if(!r||r===".")return;if(Q1.current===r)return;let Y0=z?.touches?.[0];if(!Y0)return;if(y0.current={path:M_(T)?r:null,dragging:!1,startX:Y0.clientX,startY:Y0.clientY},f!=="file")return;if(X0.current)clearTimeout(X0.current);X0.current=setTimeout(()=>{if(X0.current=null,y0.current?.dragging)return;H1(r)},600)},[H1]),T_=C(()=>{if(X0.current)clearTimeout(X0.current),X0.current=null;let z=y0.current;if(z?.dragging&&z.path){let T=A1.current||u1(),w=W_.current;if(typeof w==="function")w(z.path,T)}y0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,$0(!1),q0(null),E1(null),N1(),X_()},[u1,X_,E1,N1]),p4=C((z)=>{let T=y0.current,w=z?.touches?.[0];if(!w||!T?.path){if(X0.current)clearTimeout(X0.current),X0.current=null;return}let f=Math.abs(w.clientX-T.startX),r=Math.abs(w.clientY-T.startY),Y0=f>8||r>8;if(Y0&&X0.current)clearTimeout(X0.current),X0.current=null;if(!T.dragging&&Y0)T.dragging=!0,$0(!0),q0("move"),V1(T.path);if(T.dragging){z.preventDefault(),v_(w.clientX,w.clientY);let W0=document.elementFromPoint(w.clientX,w.clientY),U0=U_(W0)||u1();if(A1.current!==U0)E1(U0);f_(U0)}},[U_,u1,V1,v_,E1,f_]),Z5=P((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let w=z.clientY,f=w0.current||280,r=z.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Y0=w,W0=(j0)=>{Y0=j0.clientY;let P0=T.clientHeight-80,w1=Math.min(Math.max(f-(j0.clientY-w),80),P0);T.style.setProperty("--preview-height",`${w1}px`),w0.current=w1},U0=()=>{let j0=T.clientHeight-80,P0=Math.min(Math.max(f-(Y0-w),80),j0);w0.current=P0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("previewHeight",String(Math.round(P0))),document.removeEventListener("mousemove",W0),document.removeEventListener("mouseup",U0)};document.addEventListener("mousemove",W0),document.addEventListener("mouseup",U0)}).current,b_=P((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let w=z.touches[0];if(!w)return;let f=w.clientY,r=w0.current||280,Y0=z.currentTarget;Y0.classList.add("dragging"),document.body.style.userSelect="none";let W0=(j0)=>{let P0=j0.touches[0];if(!P0)return;j0.preventDefault();let w1=T.clientHeight-80,Q_=Math.min(Math.max(r-(P0.clientY-f),80),w1);T.style.setProperty("--preview-height",`${Q_}px`),w0.current=Q_},U0=()=>{Y0.classList.remove("dragging"),document.body.style.userSelect="",G1("previewHeight",String(Math.round(w0.current||r))),document.removeEventListener("touchmove",W0),document.removeEventListener("touchend",U0),document.removeEventListener("touchcancel",U0)};document.addEventListener("touchmove",W0,{passive:!1}),document.addEventListener("touchend",U0),document.addEventListener("touchcancel",U0)}).current,g_=async()=>{if(!B)return;try{let z=await d6(B);if(z.media_id)h(z.media_id)}catch(z){I((T)=>({...T||{},error:z.message||"Failed to attach"}))}},J4=async()=>{if(!B||B1)return;await H1(B)},m_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},c4=C((z)=>{if(!m_(z))return;if(z.preventDefault(),X1.current+=1,!K1.current)$0(!0);q0("upload");let T=y1(z)||u1();E1(T),f_(T)},[u1,y1,E1,f_]),h_=C((z)=>{if(!m_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!K1.current)$0(!0);if(h1.current!=="upload")q0("upload");let T=y1(z)||u1();if(A1.current!==T)E1(T);f_(T)},[u1,y1,E1,f_]),P_=C((z)=>{if(!m_(z))return;if(z.preventDefault(),X1.current=Math.max(0,X1.current-1),X1.current===0)$0(!1),q0(null),E1(null),N1()},[E1,N1]),I1=C(async(z,T=".")=>{let w=Array.from(z||[]);if(w.length===0)return;let f=T&&T!==""?T:".",r=f!=="."?f:"workspace root";r0(!0);try{let Y0=null;for(let W0 of w)try{Y0=await I8(W0,f)}catch(U0){let j0=U0?.status,P0=U0?.code;if(j0===409||P0==="file_exists"){let w1=W0?.name||"file";if(!window.confirm(`"${w1}" already exists in ${r}. Overwrite?`))continue;Y0=await I8(W0,f,{overwrite:!0})}else throw U0}if(Y0?.path)n1.current=Y0.path,O(Y0.path),q1.current?.(Y0.path);h0.current?.(f)}catch(Y0){S(Y0.message||"Failed to upload file")}finally{r0(!1)}},[]),O4=C(async(z,T)=>{if(!z)return;let w=_1.current?.get(z);if(!w)return;let f=T&&T!==""?T:".",r=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(f===r)return;try{let W0=(await r6(z,f))?.path||z;if(w.type==="dir")V((U0)=>{let j0=new Set;for(let P0 of U0)if(P0===z)j0.add(W0);else if(P0.startsWith(`${z}/`))j0.add(`${W0}${P0.slice(z.length)}`);else j0.add(P0);return j0});if(O(W0),w.type==="dir")I(null),x(!1),h(null);else q1.current?.(W0);h0.current?.(r),h0.current?.(f)}catch(Y0){S(Y0?.message||"Failed to move entry")}},[]);W_.current=O4;let D4=C(async(z)=>{if(!m_(z))return;z.preventDefault(),X1.current=0,$0(!1),q0(null),A0(null),N1();let T=Array.from(z?.dataTransfer?.files||[]);if(T.length===0)return;let w=A1.current||y1(z)||u1();await I1(T,w)},[u1,y1,I1]),l4=C((z)=>{if(z?.stopPropagation?.(),E0)return;let T=z?.currentTarget?.dataset?.uploadTarget||".";z0.current=T,V0.current?.click()},[E0]),L1=C(()=>{if(E0)return;let z=q_.current,T=z?_1.current?.get(z):null;z0.current=T?.type==="dir"?T.path:".",V0.current?.click()},[E0]),A4=C(()=>{z1(()=>n_(null))},[z1,n_]),Y5=C(()=>{z1(()=>L1())},[z1,L1]),g1=C(()=>{z1(()=>j_())},[z1,j_]),G_=C(()=>{z1(()=>I_())},[z1,I_]),t_=C(()=>{if(!B||!R1)return;z1(()=>M1.current?.(B,D))},[z1,B,R1,D]),d4=C(()=>{if(!B||B===".")return;z1(()=>D_(B))},[z1,B,D_]),q4=C(()=>{if(!B||B1)return;z1(()=>J4())},[z1,B,B1,J4]),E4=C(()=>{if(!B||B1)return;z1(()=>g_())},[z1,B,B1,g_]),X4=C(()=>{if(!C1)return;if(b1(),typeof window<"u")window.open(C1,"_blank","noopener")},[b1,C1]),C_=C(()=>{b1(),Z?.()},[b1,Z]),L_=C(()=>{b1(),Y?.()},[b1,Y]),M4=C(()=>{b1(),q?.()},[b1,q]),i4=C((z)=>{if(!z||z.button!==0)return;let T=z.currentTarget;if(!T||!T.dataset)return;let w=T.dataset.path;if(!w||w===".")return;if(Q1.current===w)return;let f=E_(z);if(f?.closest?.("button, a, input, .workspace-caret"))return;if(!M_(f))return;z.preventDefault(),C0.current={path:w,dragging:!1,startX:z.clientX,startY:z.clientY};let r=(W0)=>{let U0=C0.current;if(!U0?.path)return;let j0=Math.abs(W0.clientX-U0.startX),P0=Math.abs(W0.clientY-U0.startY),w1=j0>4||P0>4;if(!U0.dragging&&w1)U0.dragging=!0,k0.current=!0,$0(!0),q0("move"),V1(U0.path),v_(W0.clientX,W0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(U0.dragging){W0.preventDefault(),v_(W0.clientX,W0.clientY);let Q_=document.elementFromPoint(W0.clientX,W0.clientY),c1=U_(Q_)||u1();if(A1.current!==c1)E1(c1);f_(c1)}},Y0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",Y0);let W0=C0.current;if(W0?.dragging&&W0.path){let U0=A1.current||u1(),j0=W_.current;if(typeof j0==="function")j0(W0.path,U0)}C0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,$0(!1),q0(null),E1(null),N1(),X_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",Y0)},[U_,u1,V1,v_,X_,E1,f_,N1]),S_=C(async(z)=>{let T=Array.from(z?.target?.files||[]);if(T.length===0)return;let w=z0.current||".";if(await I1(T,w),z0.current=".",z?.target)z.target.value=""},[I1]);return L`
        <aside
            class=${`workspace-sidebar${d?" workspace-drop-active":""}`}
            data-workspace-scale=${g0}
            ref=${x1}
            onDragEnter=${c4}
            onDragOver=${h_}
            onDragLeave=${P_}
            onDrop=${D4}
        >
            <input type="file" multiple style="display:none" ref=${V0} onChange=${S_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${a}
                            class=${`workspace-menu-button${m0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),$1((T)=>!T)}}
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
                                <button class="workspace-menu-item" role="menuitem" onClick=${A4} disabled=${E0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Y5} disabled=${E0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${g1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${p?" active":""}`} role="menuitem" onClick=${G_}>
                                    ${p?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${B&&L`<div class="workspace-menu-separator"></div>`}
                                ${B&&!B1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${t_} disabled=${!R1}>Open in editor</button>
                                `}
                                ${A_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${d4}>Rename selected</button>
                                `}
                                ${p1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${E4}>Download selected file</button>
                                `}
                                ${C1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X4}>Download selected folder (zip)</button>
                                `}
                                ${$_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${q4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Z&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C_}>
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
                                        ${X?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${n_} title="New file" disabled=${E0}>
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
                ${E0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${o&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${K&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${k1}
                        tabIndex="0"
                        onClick=${s_}
                        onDblClick=${k_}
                        onKeyDown=${m4}
                        onTouchStart=${h4}
                        onTouchEnd=${T_}
                        onTouchMove=${p4}
                        onTouchCancel=${T_}
                    >
                        ${o_.map(({node:z,depth:T})=>{let w=z.type==="dir",f=z.path===B,r=z.path===E,Y0=w&&N.has(z.path),W0=J0&&z.path===J0,U0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${f?" selected":""}${W0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+T*C5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${i4}
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
                                                ref=${s}
                                                value=${A}
                                                onInput=${(j0)=>J(j0?.target?.value||"")}
                                                onKeyDown=${(j0)=>{if(j0.key==="Enter")j0.preventDefault(),__();else if(j0.key==="Escape")j0.preventDefault(),P1()}}
                                                onBlur=${P1}
                                                onClick=${(j0)=>j0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${w&&!Y0&&U0>0&&L`
                                        <span class="workspace-count">${U0}</span>
                                    `}
                                    ${w&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${l4}
                                            disabled=${E0}
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
                            <button class="workspace-create" onClick=${n_} title="New file" disabled=${E0}>
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
                            ${B1?L`
                                    <button class="workspace-download" onClick=${L1}
                                        title="Upload files to this folder" disabled=${E0}>
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
                            <${wG} payload=${x0.payload} />
                        `}
                        ${x0?.payload&&(!x0.payload.segments||x0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!B1&&L`
                        <div class="workspace-preview-body" ref=${O0}></div>
                    `}
                    ${i&&L`
                        <div class="workspace-download-card">
                            <${fG} mediaId=${i} />
                        </div>
                    `}
                </div>
            `}
            ${G0&&L`
                <div class="workspace-drag-ghost" ref=${Q4}>${G0.label}</div>
            `}
        </aside>
    `}var vG=new Set(["kanban-editor","mindmap-editor"]);function uG(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function Vj(_,$,j){let Q=uG(_,$,j);return Q!=null&&vG.has(Q)}var bG=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,gG=/\.(csv|tsv)$/i,mG=/\.pdf$/i,hG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Bj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Wj({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:X,onEditSource:K,previewTabs:G,paneOverrides:N,onToggleDock:V,dockVisible:B,onToggleZen:O,zenMode:E,onPopOutTab:k}){let[A,J]=m(null),D=P(null);g(()=>{if(!A)return;let H=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[A]),g(()=>{let H=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let p=_.findIndex((Z0)=>Z0.id===$);if(S.shiftKey){let Z0=_[(p-1+_.length)%_.length];j?.(Z0.id)}else{let Z0=_[(p+1)%_.length];j?.(Z0.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let p=document.querySelector(".editor-pane");if(p&&p.contains(document.activeElement)){if(S.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Q]);let I=C((H,S)=>{if(H.button===1){H.preventDefault(),Q?.(S);return}if(H.button===0)j?.(S)},[j,Q]),i=C((H,S)=>{H.preventDefault(),J({id:S,x:H.clientX,y:H.clientY})},[]),h=C((H)=>{H.preventDefault(),H.stopPropagation()},[]),o=C((H,S)=>{H.preventDefault(),H.stopPropagation(),Q?.(S)},[Q]);g(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let t=C((H)=>{if(!(N instanceof Map))return null;return N.get(H)||null},[N]),R=f0(()=>_.find((H)=>H.id===A?.id)||null,[A?.id,_]),x=f0(()=>{let H=A?.id;if(!H)return!1;return Vj(H,t(H),(S)=>n0.resolve(S))},[A?.id,t]);if(!_.length)return null;return L`
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
                ${bG.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id),S=A.id.split("/").pop()||"document",p="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(S);window.open(p,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${gG.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${mG.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${hG.test(A.id)&&!Bj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Bj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var pG=400,W3=60,Uj=220,U3="mdPreviewHeight";function cG(){try{let _=localStorage.getItem(U3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=W3?$:Uj}catch{return Uj}}function L3({getContent:_,path:$,onClose:j}){let[Q,Z]=m(""),[Y,q]=m(cG),X=P(null),K=P(null),G=P(""),N=P(_);return N.current=_,g(()=>{let O=()=>{let k=N.current?.()||"";if(k===G.current)return;G.current=k;try{let A=H_(k,null,{sanitize:!1});Z(A)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let E=setInterval(O,pG);return()=>clearInterval(E)},[]),g(()=>{if(X.current&&Q)B4(X.current).catch(()=>{})},[Q]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let E=O.clientY,k=K.current?.offsetHeight||Y,A=K.current?.parentElement,J=A?A.offsetHeight*0.7:500,D=O.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(h)=>{let o=Math.min(Math.max(k-(h.clientY-E),W3),J);q(o)},i=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(U3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",i)}}
            onTouchStart=${(O)=>{O.preventDefault();let E=O.touches[0];if(!E)return;let k=E.clientY,A=K.current?.offsetHeight||Y,J=K.current?.parentElement,D=J?J.offsetHeight*0.7:500,I=O.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let i=(o)=>{let t=o.touches[0];if(!t)return;o.preventDefault();let R=Math.min(Math.max(A-(t.clientY-k),W3),D);q(R)},h=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(U3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",i),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
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
    `}function Lj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=P(_);Y.current=_;let q=P($);q.current=$;let X=P(j);X.current=j;let K=P(Q);K.current=Q,g(()=>{let G=new C8((V,B)=>Y.current(V,B),(V)=>q.current(V),{chatJid:Z});G.connect();let N=()=>{G.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),G.disconnect()}},[Z])}function Fj(){let[_,$]=m(!1),[j,Q]=m("default"),Z=P(!1);g(()=>{let K=z5("notificationsEnabled",!1);if(Z.current=K,$(K),typeof Notification<"u")Q(Notification.permission)},[]),g(()=>{Z.current=_},[_]);let Y=C(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),q=C(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),G1("notificationsEnabled","false");return}}let K=!Z.current;Z.current=K,$(K),G1("notificationsEnabled",String(K))},[Y]),X=C((K,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let N=new Notification(K,{body:G});return N.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:X}}var K8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function zj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=m(null),[Y,q]=m(!1),X=P(!1),K=P(null),G=P(!1),N=P(null),V=P(null),B=P(0);g(()=>{X.current=Y},[Y]),g(()=>{V.current=Q},[Q]),g(()=>{B.current+=1,N.current=null,G.current=!1,X.current=!1,q(!1)},[j]);let O=C(async(A=null)=>{let J=B.current;try{if(A){let D=await x6(A,50,0,j);if(J!==B.current)return;Z(D.posts),q(!1)}else{let D=await r4(10,null,j);if(J!==B.current)return;Z(D.posts),q(D.has_more)}}catch(D){if(J!==B.current)return;console.error("Failed to load posts:",D)}},[j]),E=C(async()=>{let A=B.current;try{let J=await r4(10,null,j);if(A!==B.current)return;Z((D)=>{if(!D||D.length===0)return J.posts;return K8([...J.posts,...D])}),q((D)=>D||J.has_more)}catch(J){if(A!==B.current)return;console.error("Failed to refresh timeline:",J)}},[j]),k=C(async(A={})=>{let J=B.current,D=V.current;if(!D||D.length===0)return;if(G.current)return;let{preserveScroll:I=!0,preserveMode:i="top",allowRepeat:h=!1}=A,o=(x)=>{if(!I){x();return}if(i==="top")$(x);else _(x)},R=D.slice().sort((x,H)=>x.id-H.id)[0]?.id;if(!Number.isFinite(R))return;if(!h&&N.current===R)return;G.current=!0,N.current=R;try{let x=await r4(10,R,j);if(J!==B.current)return;if(x.posts.length>0)o(()=>{Z((H)=>K8([...x.posts,...H||[]])),q(x.has_more)});else q(!1)}catch(x){if(J!==B.current)return;console.error("Failed to load more posts:",x)}finally{if(J===B.current)G.current=!1}},[j,_,$]);return g(()=>{K.current=k},[k]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:X,loadPosts:O,refreshTimeline:E,loadMore:k,loadMoreRef:K,loadingMoreRef:G,lastBeforeIdRef:N}}function Hj(){let[_,$]=m(null),[j,Q]=m({text:"",totalLines:0}),[Z,Y]=m(""),[q,X]=m({text:"",totalLines:0}),[K,G]=m(null),[N,V]=m(null),[B,O]=m(null),E=P(null),k=P(0),A=P(!1),J=P(""),D=P(""),I=P(null),i=P(null),h=P(null),o=P(null),t=P(!1),R=P(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:X,pendingRequest:K,setPendingRequest:G,currentTurnId:N,setCurrentTurnId:V,steerQueuedTurnId:B,setSteerQueuedTurnId:O,lastAgentEventRef:E,lastSilenceNoticeRef:k,isAgentRunningRef:A,draftBufferRef:J,thoughtBufferRef:D,pendingRequestRef:I,stalledPostIdRef:i,currentTurnIdRef:h,steerQueuedTurnIdRef:o,thoughtExpandedRef:t,draftExpandedRef:R}}function Jj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=$.current||280,E=N.currentTarget;E.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientX;let I=Math.min(Math.max(O+(D.clientX-B),160),600);V.style.setProperty("--sidebar-width",`${I}px`),$.current=I},J=()=>{let D=Math.min(Math.max(O+(k-B),160),600);$.current=D,E.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",G1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,Y=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=$.current||280,k=N.currentTarget;k.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(E+(I.clientX-O),160),600);V.style.setProperty("--sidebar-width",`${i}px`),$.current=i},J=()=>{k.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",G1("sidebarWidth",String(Math.round($.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=j.current||$.current||280,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientX;let I=Math.min(Math.max(O+(D.clientX-B),200),800);V.style.setProperty("--editor-width",`${I}px`),j.current=I},J=()=>{let D=Math.min(Math.max(O+(k-B),200),800);j.current=D,E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,X=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=j.current||$.current||280,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(E+(I.clientX-O),200),800);V.style.setProperty("--editor-width",`${i}px`),j.current=i},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",G1("editorWidth",String(Math.round(j.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,K=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientY,O=Q?.current||200,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientY;let I=Math.min(Math.max(O-(D.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${I}px`),Q)Q.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let D=Math.min(Math.max(O-(k-B),100),window.innerHeight*0.5);if(Q)Q.current=D;E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,G=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientY,E=Q?.current||200,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(E-(I.clientY-O),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${i}px`),Q)Q.current=i;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",G1("dockHeight",String(Math.round(Q?.current||E))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:G}}function lG(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,X]of _.entries()){let K=q;if(Q==="dir"){if(q===$)K=j,Z=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)K=j,Z=!0;Y.set(K,X)}return Z?Y:_}function Oj({onTabClosed:_}={}){let $=P(_);$.current=_;let[j,Q]=m(()=>a0.getTabs()),[Z,Y]=m(()=>a0.getActiveId()),[q,X]=m(()=>a0.getTabs().length>0);g(()=>{return a0.onChange((R,x)=>{Q(R),Y(x),X(R.length>0)})},[]);let[K,G]=m(()=>new Set),[N,V]=m(()=>new Map),B=C((R)=>{G((x)=>{let H=new Set(x);if(H.has(R))H.delete(R);else H.add(R);return H})},[]),O=C((R)=>{G((x)=>{if(!x.has(R))return x;let H=new Set(x);return H.delete(R),H})},[]),E=C((R)=>{V((x)=>{if(!x.has(R))return x;let H=new Map(x);return H.delete(R),H})},[]),k=C((R,x={})=>{if(!R)return;let H=typeof x?.paneOverrideId==="string"&&x.paneOverrideId.trim()?x.paneOverrideId.trim():null,S={path:R,mode:"edit"};try{if(!(H?n0.get(H):n0.resolve(S))){if(!n0.get("editor")){console.warn(`[openEditor] No pane handler for: ${R}`);return}}}catch(Z0){console.warn(`[openEditor] paneRegistry.resolve() error for "${R}":`,Z0)}let p=typeof x?.label==="string"&&x.label.trim()?x.label.trim():void 0;if(a0.open(R,p),H)V((Z0)=>{if(Z0.get(R)===H)return Z0;let d=new Map(Z0);return d.set(R,H),d})},[]),A=C(()=>{let R=a0.getActiveId();if(R){let x=a0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}a0.close(R),O(R),E(R),$.current?.(R)}},[E,O]),J=C((R)=>{let x=a0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}a0.close(R),O(R),E(R),$.current?.(R)},[E,O]),D=C((R)=>{a0.activate(R)},[]),I=C((R)=>{let x=a0.getTabs().filter((p)=>p.id!==R&&!p.pinned),H=x.filter((p)=>p.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let S=x.map((p)=>p.id);a0.closeOthers(R),S.forEach((p)=>{O(p),E(p),$.current?.(p)})},[E,O]),i=C(()=>{let R=a0.getTabs().filter((S)=>!S.pinned),x=R.filter((S)=>S.dirty).length;if(x>0){if(!window.confirm(`${x} unsaved tab${x>1?"s":""} will be closed. Continue?`))return}let H=R.map((S)=>S.id);a0.closeAll(),H.forEach((S)=>{O(S),E(S),$.current?.(S)})},[E,O]),h=C((R)=>{a0.togglePin(R)},[]),o=C((R)=>{if(!R)return;V((x)=>{if(x.get(R)==="editor")return x;let H=new Map(x);return H.set(R,"editor"),H}),a0.activate(R)},[]),t=C(()=>{let R=a0.getActiveId();if(R)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:R}}))},[]);return g(()=>{let R=(x)=>{let{oldPath:H,newPath:S,type:p}=x.detail||{};if(!H||!S)return;if(p==="dir"){for(let Z0 of a0.getTabs())if(Z0.path===H||Z0.path.startsWith(`${H}/`)){let d=`${S}${Z0.path.slice(H.length)}`;a0.rename(Z0.id,d)}}else a0.rename(H,S);V((Z0)=>lG(Z0,H,S,p))};return window.addEventListener("workspace-file-renamed",R),()=>window.removeEventListener("workspace-file-renamed",R)},[]),g(()=>{let R=(x)=>{if(a0.hasUnsaved())x.preventDefault(),x.returnValue=""};return window.addEventListener("beforeunload",R),()=>window.removeEventListener("beforeunload",R)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,tabPaneOverrides:N,openEditor:k,closeEditor:A,handleTabClose:J,handleTabActivate:D,handleTabCloseOthers:I,handleTabCloseAll:i,handleTabTogglePin:h,handleTabTogglePreview:B,handleTabEditSource:o,revealInExplorer:t}}function F3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var z3=F3("warning",30000),Dj=F3("finalize",120000),H3=F3("refresh",30000),Aj=30000;function Ej(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Mj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function kj(_=30000){let[,$]=m(0);g(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function Ij(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}function dG(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function Y6(_,$){return{text:_,totalLines:dG(_,$)}}function J3(_,$){return{text:$?.text||"",totalLines:Ij(_),fullText:_}}function Tj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function Pj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function Cj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function Sj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function O3(_){return String(_||"").trim()||"web:default"}function xj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function yj(_={}){return U4(_)&&s8(_)}function iG(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function nG(_={},$={}){if(!yj(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=iG({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function Rj(_={}){if(!yj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,nG({window:$,document:j})},X=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},K=()=>{X();for(let V of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),X()},V);if(B!=null)Z.add(B)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},N=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",K,!0),N?.addEventListener?.("resize",K),N?.addEventListener?.("scroll",K),()=>{Y(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",K,!0),N?.removeEventListener?.("resize",K),N?.removeEventListener?.("scroll",K)}}function rG(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Z_(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:rG($,j)}var oG=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function wj(_){return oG.has(String(_||"").trim())}function sG(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function D3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(sG(_),{detail:Q})),!0}var aG=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function fj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(U4({window:j,navigator:Q}))};Z();let q=aG.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",Z),()=>X.removeEventListener("change",Z);if(typeof X.addListener==="function")return X.addListener(Z),()=>X.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let X of q)X();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function vj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function uj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(K)=>{let G=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Q?.(G,N)},q=(K)=>{let G=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Z?.(G,N)},X=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return X.forEach((K)=>j.addEventListener(K,Y)),j.addEventListener("pane:popout",q),()=>{X.forEach((K)=>j.removeEventListener(K,Y)),j.removeEventListener("pane:popout",q)}}function bj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function gj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(X)=>{if(X?.ctrlKey&&X.shiftKey&&(X.key==="Z"||X.key==="z")){X.preventDefault?.(),Q?.();return}if(X?.key==="Escape"&&Y())X.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function mj(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function hj(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function pj(_,$,j){return _||$?.label||j||"Pane"}function cj(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function lj(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function dj(_,$,j,Q){return _===$&&!j||Q}function ij(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}var tG="piclaw_btw_session",rj=900,nj="__piclawRenameBranchFormLock__";function eG(){try{return import.meta.url}catch{return null}}function A3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function q6(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function oj(_={}){let $=_.importMetaUrl===void 0?eG():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let X=new URL(Y,Q).searchParams.get("v");return X&&X.trim()?X.trim():null}catch{return null}}function E3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[nj];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[nj]=Q,Q}function sj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function aj(_={}){let $=typeof _.readItem==="function"?_.readItem:z_,j=_.storageKey||tG,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",X=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:X,error:G==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:G}}catch{return null}}function tj(_,$={}){let j=$.defaultChatJid||"web:default",Q=q6(_,"chat_jid",j),Z=A3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=A3(_?.get?.("pane_popout")),q=q6(_,"pane_path"),X=q6(_,"pane_label"),K=A3(_?.get?.("branch_loader")),G=q6(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:X,branchLoaderMode:K,branchLoaderSourceChatJid:G}}function ej(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:X,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||K<Number(Z||0)||G.inFlight||K<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),X?.(!0),!0}function _Q(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function $Q(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:X,setIsRenamingBranch:K,renameChatBranch:G,refreshActiveChatAgents:N,refreshCurrentChatBranches:V,showIntentToast:B,closeRenameForm:O,now:E=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let k=E(),A=X?.()||null;if(!A)return!1;if(Y.current||k<Number(q.current||0)||A.inFlight||k<Number(A.cooldownUntil||0))return!1;Y.current=!0,A.inFlight=!0,K?.(!0);try{let J=j.agent_name||"",D=R8(Q,J);if(!D.canSubmit)return B?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let I=D.normalized||J,i=await G(j.chat_jid,{agentName:I});await Promise.allSettled([N?.(),V?.()]);let h=i?.branch?.agent_name||I||J;return B?.("Branch renamed",`@${h}`,"info",3500),O?.(),!0}catch(J){let D=J instanceof Error?J.message:String(J||"Could not rename branch."),I=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return B?.("Could not rename branch",I||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,K?.(!1);let J=E()+rj;q.current=J;let D=X?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=J}}async function jQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:X,refreshActiveChatAgents:K,refreshCurrentChatBranches:G,showIntentToast:N,baseHref:V,chatOnlyMode:B,navigate:O,confirm:E=(o)=>window.confirm(o)}=_;if(!$)return!1;let k=typeof j==="string"&&j.trim()?j.trim():"",A=typeof Q==="string"&&Q.trim()?Q.trim():"",J=k||Z?.chat_jid||A;if(!J)return N?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Z?.chat_jid===J?Z:null)||Y.find((o)=>o?.chat_jid===J)||q.find((o)=>o?.chat_jid===J)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return N?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let i=`@${D?.agent_name||J}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!E(`Prune ${i}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await X(J),await Promise.allSettled([K?.(),G?.()]);let o=D?.root_chat_jid||"web:default";N?.("Branch pruned",`${i} has been archived.`,"info",3000);let t=L4(V,o,{chatOnly:B});return O?.(t),!0}catch(o){let t=o instanceof Error?o.message:String(o||"Could not prune branch.");return N?.("Could not prune branch",t||"Could not prune branch.","warning",5000),!1}}async function QQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:X,chatOnlyMode:K,navigate:G}=_,N=typeof $==="string"?$.trim():"";if(!N||typeof j!=="function")return!1;try{let V=Q.find((J)=>J?.chat_jid===N)||null,B=await j(N);await Promise.allSettled([Z?.(),Y?.()]);let O=B?.branch,E=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():N,k=C2(V?.agent_name,O?.agent_name,E);q?.("Branch restored",k,"info",4200);let A=L4(X,E,{chatOnly:K});return G?.(A),!0}catch(V){let B=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function ZQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let X=await j($);if(q())return!1;let K=X?.branch,G=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let N=L4(Y,G,{chatOnly:!0});return Z?.(N,{replace:!0}),!0}catch(X){if(q())return!1;return Q?.({status:"error",message:_8(X)}),!1}}async function YQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:X,baseHref:K}=_;try{let N=(await Q($))?.branch,V=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let B=N?.agent_name?`@${N.agent_name}`:V;q?.("New branch created",`Switched to ${B}.`,"info",2500);let O=L4(K,V,{chatOnly:j});return X?.(O),!0}catch(G){return q?.("Could not create branch",_8(G),"warning",5000),!1}}async function qQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:X,currentChatJid:K,baseHref:G}=_;if(!$||j)return!1;let N=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!N)return!1;let V=c7(N);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=M$(V);if(!B)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;k$(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(N),E=p7(G,N,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:O});return I$(B,E),X?.(N),!0}catch(O){T$(B);let E=O instanceof Error?O.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",E,"warning",5000),!1}}async function XQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:X,setActiveChatAgents:K,setCurrentChatBranches:G,showIntentToast:N,baseHref:V}=_;if(!$||j)return!1;let B=m7(Q);if(!B)return N?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let E=h7(V,Q,{chatOnly:!0});if(!window.open(E,B.target))return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=M$(B);if(!O)return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;k$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await Y(Q))?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await X?.(Z);G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let J=L4(V,A,{chatOnly:!0});return I$(O,J),!0}catch(E){return T$(O),N?.("Could not open branch window",_8(E),"error",5000),!1}}function X6(_){return _?{..._}:{text:"",totalLines:0}}function GQ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function _K(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function $K(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function KQ(_){return{agentStatus:_.agentStatus,agentDraft:X6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:X6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:GQ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:_K(_.silentRecovery)}}function NQ(_){let $=_.snapshot||$K(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(X6($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(X6($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(GQ($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function M3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function VQ(_,$){let j=new Map(_),Q=M3($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function BQ(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=M3($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function WQ(_){if(_?.options?.remove)return!0;return M3(_)?.state!=="running"}function k3(_,$){return`${_}:${$}`}function UQ(_,$,j){let Q=k3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function LQ(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function I3(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function FQ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function jK(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function zQ(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!jK(Z));return Q.length===_.length?_:Q}function HQ(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function JQ(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function v4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function OQ(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function QK(_,$){let j=J_(_);return Boolean(_&&j===$)}function P5(_,$,j){if(!QK(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function DQ(_,$){return{..._,openedAt:$}}function AQ(_){let $=J_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function EQ(_,$,j){let Q=X7({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=J_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=J_(_),q=Boolean(Z&&Y&&Z===Y),X={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:X,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function MQ(_,$){if(!_||_?.source!=="live")return _||null;let j=J_($),Q=J_(_);if(j&&Q&&j!==Q)return _;return null}function kQ(_,$,j){return P5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function T3(_,$,j){if(j.errorMessage)return P5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return P5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function IQ(_,$,j){return P5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function TQ(_,$,j){return P5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function PQ(_,$,j){return P5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}var CQ=oj(),SQ=y6,xQ=w6,ZK=v6,yQ=h6,RQ=p6,P3=u6,C3=Z_(t1,"getAgentContext",null),YK=Z_(t1,"getAutoresearchStatus",null),qK=Z_(t1,"stopAutoresearch",{status:"ok"}),XK=Z_(t1,"dismissAutoresearch",{status:"ok"}),wQ=Z_(t1,"getAgentModels",{current:null,models:[]}),fQ=Z_(t1,"getActiveChatAgents",{chats:[]}),G6=Z_(t1,"getChatBranches",{chats:[]}),GK=Z_(t1,"renameChatBranch",null),KK=Z_(t1,"pruneChatBranch",null),NK=Z_(t1,"restoreChatBranch",null),vQ=Z_(t1,"getAgentQueueState",{count:0}),VK=Z_(t1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),BK=Z_(t1,"removeAgentQueueItem",{removed:!1}),WK=Z_(t1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});n0.register(H$);n0.register(i$);n0.register(d$);n0.register(n$);n0.register(r$);n0.register(o$);n0.register(a$);n0.register(t$);n0.register(_3);n0.register(Q3);n0.register(Z3);n0.register(c$);J$();n0.register(A$);n0.register(E$);function UK({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:X,branchLoaderSourceChatJid:K}=f0(()=>tj(_),[_]),[G,N]=m("disconnected"),[V,B]=m(()=>U4()),[O,E]=m(null),[k,A]=m(null),[J,D]=m(!1),[I,i]=m("current"),[h,o]=m([]),[t,R]=m([]),[x,H]=m(null),{agentStatus:S,setAgentStatus:p,agentDraft:Z0,setAgentDraft:d,agentPlan:$0,setAgentPlan:_0,agentThought:q0,setAgentThought:G0,pendingRequest:K0,setPendingRequest:J0,currentTurnId:A0,setCurrentTurnId:E0,steerQueuedTurnId:r0,setSteerQueuedTurnId:x0,lastAgentEventRef:I0,lastSilenceNoticeRef:o0,isAgentRunningRef:s0,draftBufferRef:g0,thoughtBufferRef:t0,pendingRequestRef:m0,stalledPostIdRef:$1,currentTurnIdRef:F0,steerQueuedTurnIdRef:p0,thoughtExpandedRef:j1,draftExpandedRef:Y1}=Hj(),[Y_,D1]=m({}),[_1,m1]=m(null),[M1,q1]=m(null),[h0,x1]=m(!1),[k1,s]=m(null),[V0,z0]=m([]),[X0,y0]=m([]),[C0,v0]=m(null),[k0,w0]=m(()=>new Map),[d0,D0]=m(()=>new Set),[b0,O0]=m([]),[Q0,y]=m(!1),[a,L0]=m(()=>aj()),[M0,u0]=m(null),X1=P(new Set),A1=f0(()=>V0.find((W)=>W?.chat_jid===j)||null,[V0,j]),K1=f0(()=>X0.find((W)=>W?.chat_jid===j)||A1||null,[A1,X0,j]),h1=K1?.root_chat_jid||A1?.root_chat_jid||j,Q4=sj(I),[B_,e1]=m(()=>({status:X?"running":"idle",message:X?"Preparing a new chat branch…":""})),W_=b0.length,q_=P(new Set),Q1=P([]),n1=P(new Set),Z4=P(0),w_=P({inFlight:!1,lastAttemptAt:0,turnId:null});q_.current=new Set(b0.map((W)=>W.row_id)),Q1.current=b0;let{notificationsEnabled:$5,notificationPermission:u4,toggleNotifications:u1,notify:U_}=Fj(),[y1,E1]=m(()=>new Set),[N1,f_]=m(()=>z5("workspaceOpen",!0)),v_=P(null),{editorOpen:V1,tabStripTabs:X_,tabStripActiveId:c0,previewTabs:P1,tabPaneOverrides:D_,openEditor:__,closeEditor:b4,handleTabClose:n_,handleTabActivate:g4,handleTabCloseOthers:r_,handleTabCloseAll:j5,handleTabTogglePin:o_,handleTabTogglePreview:u_,handleTabEditSource:C5,revealInExplorer:S5}=Oj({onTabClosed:(W)=>v_.current?.(W)}),B1=P(null),R1=P(null),Q5=P(null),A_=P(null),$_=n0.getDockPanes().length>0,[p1,C1]=m(!1),b1=C(()=>C1((W)=>!W),[]),z1=C(()=>{__(e4,{label:"Terminal"})},[__]),E_=C(()=>{__(H4,{label:"VNC"})},[__]),M_=f0(()=>mj(X_,c0),[c0,X_]),k_=f0(()=>hj(D_,c0),[D_,c0]),s_=f0(()=>pj(q,M_,Y),[M_,q,Y]),j_=f0(()=>cj(X_,P1,c0),[P1,c0,X_]),r1=f0(()=>lj(Y,H4),[Y]),I_=f0(()=>dj(Y,e4,j_,r1),[r1,j_,Y]),Y4=ij(Z,Q,V1,$_,p1),[H1,a_]=m(!1),m4=P(!1),h4=C(()=>{if(!V1||Q)return;if(m4.current=p1,p1)C1(!1);a_(!0)},[V1,Q,p1]),T_=C(()=>{if(!H1)return;if(a_(!1),m4.current)C1(!0),m4.current=!1},[H1]),p4=C(()=>{if(H1)T_();else h4()},[H1,h4,T_]);g(()=>{if(H1&&!V1)T_()},[H1,V1,T_]),g(()=>{if(!Z||!Y)return;if(a0.getActiveId()===Y)return;__(Y,q?{label:q}:void 0)},[__,q,Z,Y]),g(()=>{let W=B1.current;if(!W)return;if(R1.current)R1.current.dispose(),R1.current=null;let U=c0;if(!U)return;let M={path:U,mode:"edit"},b=(k_?n0.get(k_):null)||n0.resolve(M)||n0.get("editor");if(!b){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let u=b.mount(W,M);R1.current=u,u.onDirtyChange?.((N0)=>{a0.setDirty(U,N0)}),u.onSaveRequest?.(()=>{}),u.onClose?.(()=>{b4()});let l=a0.getViewState(U);if(l&&typeof u.restoreViewState==="function")requestAnimationFrame(()=>u.restoreViewState(l));if(typeof u.onViewStateChange==="function")u.onViewStateChange((N0)=>{a0.saveViewState(U,N0)});return requestAnimationFrame(()=>u.focus()),()=>{if(R1.current===u)u.dispose(),R1.current=null}},[c0,k_,b4]);let Z5=C(async(W)=>{let U=typeof c0==="string"?c0.trim():"",M=R1.current;if(!U||!M?.setContent)return;if(typeof M.isDirty==="function"&&M.isDirty())return;if(!(Array.isArray(W)&&W.length>0?W.some((u)=>{let l=Array.isArray(u?.changed_paths)?u.changed_paths.map((B0)=>typeof B0==="string"?B0.trim():"").filter(Boolean):[];if(l.length>0)return l.some((B0)=>B0==="."||B0===U);let N0=typeof u?.path==="string"?u.path.trim():"";return!N0||N0==="."||N0===U}):!0))return;try{let u=await d5(U,1e6,"edit"),l=typeof u?.text==="string"?u.text:"",N0=typeof u?.mtime==="string"&&u.mtime.trim()?u.mtime.trim():new Date().toISOString();M.setContent(l,N0)}catch(u){console.warn("[workspace_update] Failed to refresh active pane:",u)}},[c0]);g(()=>{let W=Q5.current;if(A_.current)A_.current.dispose(),A_.current=null;if(!W||!$_||!p1)return;let U=n0.getDockPanes()[0];if(!U){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let M=U.mount(W,{mode:"view"});return A_.current=M,requestAnimationFrame(()=>M.focus?.()),()=>{if(A_.current===M)M.dispose(),A_.current=null}},[$_,p1]);let[b_,g_]=m({name:"You",avatar_url:null,avatar_background:null}),J4=P(null),m_=P(!1),c4=P(!1),h_=P(!1),P_=P(null),I1=P(j),O4=P(new Map),D4=P(j),l4=P(0),L1=P(0),A4=P({}),Y5=P({name:null,avatar_url:null}),g1=P({currentHashtag:null,searchQuery:null,searchOpen:!1}),G_=P(null),t_=P(null),d4=P(0),q4=P(0),E4=P(0),X4=P(null),C_=P(null),L_=P(null),M4=P(null),i4=P(0),S_=P({title:null,avatarBase:null}),z=P(null),T=P(!1),[w,f]=m(!1),r=P(0),[Y0,W0]=m(!1),[U0,j0]=m(""),P0=f0(()=>R8(U0,K1?.agent_name||""),[K1?.agent_name,U0]),w1=P(null),Q_=C(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);kj(30000),g(()=>{if(!Y0)return;requestAnimationFrame(()=>{if(Y0)w1.current?.focus(),w1.current?.select?.()})},[Y0]),g(()=>{return c2()},[]),g(()=>{return fj(B)},[]),g(()=>{G1("workspaceOpen",String(N1))},[N1]),g(()=>{return Rj()},[]),g(()=>{return()=>{Q_()}},[Q_]),g(()=>{if(!a){G1(BTW_SESSION_KEY,"");return}G1(BTW_SESSION_KEY,JSON.stringify({question:a.question||"",answer:a.answer||"",thinking:a.thinking||"",error:a.error||null,status:a.status||"success"}))},[a]),g(()=>{A4.current=Y_||{}},[Y_]),g(()=>{I1.current=j},[j]),g(()=>{Y5.current=b_||{name:"You",avatar_url:null,avatar_background:null}},[b_]);let c1=C((W,U,M=null)=>{if(typeof document>"u")return;let b=(W||"").trim()||"PiClaw";if(S_.current.title!==b){document.title=b;let H0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(H0&&H0.getAttribute("content")!==b)H0.setAttribute("content",b);S_.current.title=b}let u=document.getElementById("dynamic-favicon");if(!u)return;let l=u.getAttribute("data-default")||u.getAttribute("href")||"/favicon.ico",N0=U||l,B0=U?`${N0}|${M||""}`:N0;if(S_.current.avatarBase!==B0){let H0=U?`${N0}${N0.includes("?")?"&":"?"}v=${M||Date.now()}`:N0;u.setAttribute("href",H0),S_.current.avatarBase=B0}},[]),x5=C((W)=>{if(!W)return;o((U)=>U.includes(W)?U:[...U,W])},[]),F=C((W)=>{o((U)=>U.filter((M)=>M!==W))},[]);v_.current=F;let v=C(()=>{o([])},[]),n=C((W)=>{if(!Array.isArray(W)){o([]);return}let U=[],M=new Set;for(let b of W){if(typeof b!=="string"||!b.trim())continue;let u=b.trim();if(M.has(u))continue;M.add(u),U.push(u)}o(U)},[]),c=C((W,U=null,M="info",b=3000)=>{Q_(),H({title:W,detail:U||null,kind:M||"info"}),z.current=setTimeout(()=>{H((u)=>u?.title===W?null:u)},b)},[Q_]),T0=C((W)=>{let U=Sj(W,{editorOpen:V1,resolvePane:(M)=>n0.resolve(M)});if(U.kind==="open"){__(U.path);return}if(U.kind==="toast")c(U.title,U.detail,U.level)},[V1,__,c]),J1=C(()=>{let W=c0;if(W)x5(W)},[c0,x5]),S1=C((W)=>{if(!W)return;R((U)=>U.includes(W)?U:[...U,W])},[]),f1=C(async(W,U=null)=>{let M=(u)=>{u.scrollIntoView({behavior:"smooth",block:"center"}),u.classList.add("post-highlight"),setTimeout(()=>u.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+W);if(b){M(b);return}try{let u=typeof U==="string"&&U.trim()?U.trim():j,N0=(await R6(W,u))?.thread?.[0];if(!N0)return;d1((B0)=>{if(!B0)return[N0];if(B0.some((H0)=>H0.id===N0.id))return B0;return[...B0,N0]}),requestAnimationFrame(()=>{setTimeout(()=>{let B0=document.getElementById("post-"+W);if(B0)M(B0)},50)})}catch(u){console.error("[scrollToMessage] Failed to fetch message",W,u)}},[j]),G4=C((W)=>{R((U)=>U.filter((M)=>M!==W))},[]),n4=C(()=>{R([])},[]),q5=C((W)=>{if(!Array.isArray(W)){R([]);return}let U=[],M=new Set;for(let b of W){if(typeof b!=="string"||!b.trim())continue;let u=b.trim();if(M.has(u))continue;M.add(u),U.push(u)}R(U)},[]),X5=C((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";c("Compose failed",U,"error",5000)},[c]),K_=C((W={})=>{let U=Date.now();if(I0.current=U,W.running)s0.current=!0,y((M)=>M?M:!0);if(W.clearSilence)o0.current=0},[y]),l1=C(()=>{if(M4.current)clearTimeout(M4.current),M4.current=null;i4.current=0},[]);g(()=>()=>{l1()},[l1]);let G5=C(()=>{l1(),p((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:U,lastActivity:M,...b}=W;return b})},[l1]),k4=C((W)=>{if(!W)return;l1();let U=Date.now();i4.current=U,p({type:W.type||"active",last_activity:!0}),M4.current=setTimeout(()=>{if(i4.current!==U)return;p((M)=>{if(!M||!(M.last_activity||M.lastActivity))return M;return null})},Aj)},[l1]),F1=C(()=>{s0.current=!1,y(!1),I0.current=null,o0.current=0,g0.current="",t0.current="",m0.current=null,C_.current=null,F0.current=null,p0.current=null,P_.current=null,w_.current={inFlight:!1,lastAttemptAt:0,turnId:null},l1(),E0(null),x0(null),j1.current=!1,Y1.current=!1},[l1,E0,x0,y]),e_=C((W)=>{if(!xj({remainingQueueCount:W,currentTurnId:F0.current,isAgentTurnActive:Q0}))return;p0.current=null,x0(null)},[Q0,x0]),K5=C(()=>KQ({agentStatus:S,agentDraft:Z0,agentPlan:$0,agentThought:q0,pendingRequest:K0,currentTurnId:A0,steerQueuedTurnId:r0,isAgentTurnActive:Q0,followupQueueItems:b0,activeModel:_1,activeThinkingLevel:M1,supportsThinking:h0,activeModelUsage:k1,contextUsage:C0,isAgentRunning:s0.current,wasAgentActive:h_.current,draftBuffer:g0.current,thoughtBuffer:t0.current,lastAgentEvent:I0.current,lastSilenceNotice:o0.current,lastAgentResponse:C_.current,currentTurnIdRef:F0.current,steerQueuedTurnIdRef:p0.current,thoughtExpanded:j1.current,draftExpanded:Y1.current,agentStatusRef:P_.current,silentRecovery:w_.current}),[_1,k1,M1,Z0,$0,S,q0,C0,A0,b0,Q0,K0,r0,h0]),N8=C((W)=>{NQ({snapshot:W,clearLastActivityTimer:l1,refs:{isAgentRunningRef:s0,wasAgentActiveRef:h_,lastAgentEventRef:I0,lastSilenceNoticeRef:o0,draftBufferRef:g0,thoughtBufferRef:t0,pendingRequestRef:m0,lastAgentResponseRef:C_,currentTurnIdRef:F0,steerQueuedTurnIdRef:p0,agentStatusRef:P_,silentRecoveryRef:w_,thoughtExpandedRef:j1,draftExpandedRef:Y1},setters:{setIsAgentTurnActive:y,setAgentStatus:p,setAgentDraft:d,setAgentPlan:_0,setAgentThought:G0,setPendingRequest:J0,setCurrentTurnId:E0,setSteerQueuedTurnId:x0,setFollowupQueueItems:O0,setActiveModel:m1,setActiveThinkingLevel:q1,setSupportsThinking:x1,setActiveModelUsage:s,setContextUsage:v0}})},[l1,E0,O0,y,x0]),N_=C((W)=>{if(!W)return;if(F0.current===W)return;F0.current=W,w_.current={inFlight:!1,lastAttemptAt:0,turnId:W},E0(W),p0.current=null,x0(null),g0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),J0(null),m0.current=null,C_.current=null,j1.current=!1,Y1.current=!1},[E0,x0]),I4=C((W)=>{if(typeof document<"u"){let H0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&H0)return}let U=C_.current;if(!U||!U.post)return;if(W&&U.turnId&&U.turnId!==W)return;let M=U.post;if(M.id&&X4.current===M.id)return;let b=String(M?.data?.content||"").trim();if(!b)return;X4.current=M.id||X4.current,C_.current=null;let u=b.replace(/\s+/g," ").slice(0,200),l=A4.current||{},B0=(M?.data?.agent_id?l[M.data.agent_id]:null)?.name||"Pi";U_(B0,u)},[U_]),F_=C(async(W,U)=>{if(W!=="thought"&&W!=="draft")return;let M=F0.current;if(W==="thought"){if(j1.current=U,M)try{await RQ(M,"thought",U)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!U)return;try{let b=M?await yQ(M,"thought"):null;if(b?.text)t0.current=b.text;G0((u)=>({...u||{text:"",totalLines:0},fullText:t0.current||u?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:u?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(Y1.current=U,M)try{await RQ(M,"draft",U)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!U)return;try{let b=M?await yQ(M,"draft"):null;if(b?.text)g0.current=b.text;d((u)=>({...u||{text:"",totalLines:0},fullText:g0.current||u?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:u?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),T4=P(null),N5=C(()=>{let W=G_.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);T4.current=N5;let K6=C((W)=>{let U=G_.current;if(!U||typeof W!=="function"){W?.();return}let{currentHashtag:M,searchQuery:b,searchOpen:u}=g1.current||{},l=!((b||u)&&!M),N0=l?U.scrollHeight-U.scrollTop:U.scrollTop;W(),requestAnimationFrame(()=>{let B0=G_.current;if(!B0)return;if(l){let H0=Math.max(B0.scrollHeight-N0,0);B0.scrollTop=H0}else{let H0=Math.max(B0.scrollHeight-B0.clientHeight,0),e=Math.min(N0,H0);B0.scrollTop=e}})},[]),y5=C((W)=>{let U=G_.current;if(!U||typeof W!=="function"){W?.();return}let M=U.scrollTop;W(),requestAnimationFrame(()=>{let b=G_.current;if(!b)return;let u=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(M,u)})},[]),S3=C((W)=>zQ(W,q_.current),[]),{posts:R5,setPosts:d1,hasMore:uQ,setHasMore:V8,hasMoreRef:x3,loadPosts:p_,refreshTimeline:o1,loadMore:bQ,loadMoreRef:N6}=zj({preserveTimelineScroll:K6,preserveTimelineScrollTop:y5,chatJid:j}),V5=f0(()=>S3(R5),[R5,b0,S3]),B8=C(()=>{let W=$1.current;if(!W)return;d1((U)=>U?U.filter((M)=>M.id!==W):U),$1.current=null},[d1]),{handleSplitterMouseDown:gQ,handleSplitterTouchStart:mQ,handleEditorSplitterMouseDown:hQ,handleEditorSplitterTouchStart:pQ,handleDockSplitterMouseDown:cQ,handleDockSplitterTouchStart:lQ}=Jj({appShellRef:t_,sidebarWidthRef:d4,editorWidthRef:q4,dockHeightRef:E4}),y3=C(()=>{if(!s0.current)return;s0.current=!1,o0.current=0,I0.current=null,F0.current=null,E0(null),j1.current=!1,Y1.current=!1;let W=(g0.current||"").trim();if(g0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),J0(null),m0.current=null,C_.current=null,!W){p({type:"error",title:"Response stalled - No content received"});return}let M=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),u=new Date().toISOString(),l={id:b,timestamp:u,data:{type:"agent_response",content:M,agent_id:"default",is_local_stall:!0}};$1.current=b,d1((N0)=>N0?K8([...N0,l]):[l]),T4.current?.(),p(null)},[E0]);g(()=>{g1.current={currentHashtag:O,searchQuery:k,searchOpen:J}},[O,k,J]);let Z1=C(()=>{let W=++Z4.current,U=j;vQ(U).then((M)=>{if(W!==Z4.current)return;if(I1.current!==U)return;let b=n1.current,u=HQ(M?.items,b);if(u.length){O0((l)=>{if(JQ(l,u))return l;return u});return}b.clear(),e_(0),O0((l)=>l.length===0?l:[])}).catch(()=>{if(W!==Z4.current)return;if(I1.current!==U)return;O0((M)=>M.length===0?M:[])})},[e_,j,O0]),s1=C(async()=>{let W=j;try{let U=await C3(W);if(I1.current!==W)return;if(U)v0(U)}catch(U){if(I1.current!==W)return;console.warn("Failed to fetch agent context:",U)}},[j]),c_=C(async()=>{let W=j;try{let U=await YK(W);if(I1.current!==W)return;w0((M)=>VQ(M,U)),D0((M)=>I3(M,"autoresearch"))}catch(U){if(I1.current!==W)return;console.warn("Failed to fetch autoresearch status:",U)}},[j]),x_=C(async()=>{let W=j;try{let U=await P3(W);if(I1.current!==W)return null;if(!U||U.status!=="active"||!U.data){if(h_.current){let{currentHashtag:u,searchQuery:l,searchOpen:N0}=g1.current||{};if(!u&&!l&&!N0)o1()}return h_.current=!1,F1(),P_.current=null,p(null),d({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),J0(null),m0.current=null,U??null}h_.current=!0;let M=U.data;P_.current=M;let b=M.turn_id||M.turnId;if(b)N_(b);if(K_({running:!0,clearSilence:!0}),G5(),p(M),U.thought&&U.thought.text)G0((u)=>{if(u&&u.text&&u.text.length>=U.thought.text.length)return u;return t0.current=U.thought.text,{text:U.thought.text,totalLines:U.thought.totalLines||0}});if(U.draft&&U.draft.text)d((u)=>{if(u&&u.text&&u.text.length>=U.draft.text.length)return u;return g0.current=U.draft.text,{text:U.draft.text,totalLines:U.draft.totalLines||0}});return U}catch(U){return console.warn("Failed to fetch agent status:",U),null}},[F1,G5,K_,o1,N_]),V6=C(async()=>{if(!s0.current)return null;if(m0.current)return null;let W=F0.current||null,U=w_.current,M=Date.now();if(U.inFlight)return null;if(U.turnId===W&&M-U.lastAttemptAt<H3)return null;U.inFlight=!0,U.lastAttemptAt=M,U.turnId=W;try{let{currentHashtag:b,searchQuery:u,searchOpen:l}=g1.current||{};if(!b&&!u&&!l)await o1();return await Z1(),await x_()}finally{U.inFlight=!1}},[x_,Z1,o1]);g(()=>{let W=Math.min(1000,Math.max(100,Math.floor(z3/2))),U=setInterval(()=>{if(!s0.current)return;if(m0.current)return;let M=I0.current;if(!M)return;let b=Date.now(),u=b-M,l=V4(P_.current);if(u>=Dj){if(!l)p({type:"waiting",title:"Re-syncing after a quiet period…"});V6();return}if(u>=z3){if(b-o0.current>=H3){if(!l){let N0=Math.floor(u/1000);p({type:"waiting",title:`Waiting for model… No events for ${N0}s`})}o0.current=b,V6()}}},W);return()=>clearInterval(U)},[V6]);let R3=C((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():null;if(!U||!CQ||U===CQ)return!1;if(J4.current===U)return!0;J4.current=U;let M=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!a0.hasUnsaved()&&!M&&!s0.current&&!m0.current&&!m_.current)return m_.current=!0,c("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{m_.current=!1}},350),!0;return c("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[s0,m0,c]),dQ=C((W)=>{if(N(W),W!=="connected"){p(null),d({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),J0(null),m0.current=null,F1();return}if(!c4.current){c4.current=!0;let{currentHashtag:u,searchQuery:l,searchOpen:N0}=g1.current||{};if(!u&&!l&&!N0)o1();x_(),Z1(),s1();return}let{currentHashtag:U,searchQuery:M,searchOpen:b}=g1.current;if(!U&&!M&&!b)o1();x_(),Z1(),s1()},[F1,o1,x_,Z1,s1]),iQ=C(async(W)=>{E(W),d1(null),await p_(W)},[p_]),nQ=C(async()=>{E(null),A(null),d1(null),await p_()},[p_]),rQ=C(async(W,U=I)=>{if(!W||!W.trim())return;let M=U==="root"||U==="all"?U:"current";i(M),A(W.trim()),E(null),d1(null);try{let b=await SQ(W.trim(),50,0,j,M,h1);d1(b.results),V8(!1)}catch(b){console.error("Failed to search:",b),d1([])}},[j,h1,I]),oQ=C(()=>{D(!0),A(null),E(null),i("current"),d1([])},[]),sQ=C(()=>{D(!1),A(null),p_()},[p_]),FK=C(()=>{},[]),B6=!O&&!k&&!J,aQ=C(async(W)=>{if(!W)return;let U=W.id,M=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():j,b=V5?.filter((l)=>l?.data?.thread_id===U&&l?.id!==U).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let u=(l)=>{if(!l.length)return;E1((B0)=>{let H0=new Set(B0);return l.forEach((e)=>H0.add(e)),H0}),setTimeout(()=>{if(y5(()=>{d1((B0)=>B0?B0.filter((H0)=>!l.includes(H0.id)):B0)}),E1((B0)=>{let H0=new Set(B0);return l.forEach((e)=>H0.delete(e)),H0}),x3.current)N6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let l=await xQ(U,b>0,M);if(l?.ids?.length)u(l.ids)}catch(l){let N0=l?.message||"";if(b===0&&N0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let H0=await xQ(U,!0,M);if(H0?.ids?.length)u(H0.ids);return}console.error("Failed to delete post:",l),alert(`Failed to delete message: ${N0}`)}},[j,V5,y5]),w3=C(async()=>{try{let W=await ZK();D1(Ej(W));let U=W?.user||{};g_((b)=>{let u=typeof U.name==="string"&&U.name.trim()?U.name.trim():"You",l=typeof U.avatar_url==="string"?U.avatar_url.trim():null,N0=typeof U.avatar_background==="string"&&U.avatar_background.trim()?U.avatar_background.trim():null;if(b.name===u&&b.avatar_url===l&&b.avatar_background===N0)return b;return{name:u,avatar_url:l,avatar_background:N0}});let M=(W?.agents||[]).find((b)=>b.id==="default");c1(M?.name,M?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}},[c1]);g(()=>{w3();let W=H5("sidebarWidth",null),U=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(d4.current=U,t_.current)t_.current.style.setProperty("--sidebar-width",`${U}px`)},[w3]);let w5=Q0||S!==null,f3=C((W)=>{if(!W||typeof W!=="object")return;let U=W.agent_id;if(!U)return;let{agent_name:M,agent_avatar:b}=W;if(!M&&b===void 0)return;let u=A4.current?.[U]||{id:U},l=u.name||null,N0=u.avatar_url??u.avatarUrl??u.avatar??null,B0=!1,H0=!1;if(M&&M!==u.name)l=M,H0=!0;if(b!==void 0){let e=typeof b==="string"?b.trim():null,R0=typeof N0==="string"?N0.trim():null,i0=e||null;if(i0!==(R0||null))N0=i0,B0=!0}if(!H0&&!B0)return;if(D1((e)=>{let i0={...e[U]||{id:U}};if(H0)i0.name=l;if(B0)i0.avatar_url=N0;return{...e,[U]:i0}}),U==="default")c1(l,N0,B0?Date.now():null)},[c1]),v3=C((W)=>{if(!W||typeof W!=="object")return;let U=W.user_name??W.userName,M=W.user_avatar??W.userAvatar,b=W.user_avatar_background??W.userAvatarBackground;if(U===void 0&&M===void 0&&b===void 0)return;g_((u)=>{let l=typeof U==="string"&&U.trim()?U.trim():u.name||"You",N0=M===void 0?u.avatar_url:typeof M==="string"&&M.trim()?M.trim():null,B0=b===void 0?u.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(u.name===l&&u.avatar_url===N0&&u.avatar_background===B0)return u;return{name:l,avatar_url:N0,avatar_background:B0}})},[]),W6=C((W)=>{if(!W||typeof W!=="object")return;let U=W.model??W.current;if(U!==void 0)m1(U);if(W.thinking_level!==void 0)q1(W.thinking_level??null);if(W.supports_thinking!==void 0)x1(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)s(W.provider_usage??null)},[]),f5=C(()=>{let W=j;wQ(W).then((U)=>{if(I1.current!==W)return;if(U)W6(U)}).catch(()=>{})},[W6,j]),i1=C(()=>{let W=j,U=(M)=>Array.isArray(M)?M.filter((b)=>b&&typeof b.chat_jid==="string"&&typeof b.agent_name==="string"&&b.agent_name.trim()):[];Promise.all([fQ().catch(()=>({chats:[]})),G6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([M,b])=>{if(I1.current!==W)return;let u=U(M?.chats),l=U(b?.chats);if(l.length===0){z0(u);return}let N0=new Map(u.map((H0)=>[H0.chat_jid,H0])),B0=l.map((H0)=>{let e=N0.get(H0.chat_jid);return e?{...H0,...e,is_active:e.is_active??H0.is_active}:H0});B0.sort((H0,e)=>{if(H0.chat_jid===W&&e.chat_jid!==W)return-1;if(e.chat_jid===W&&H0.chat_jid!==W)return 1;let R0=Boolean(H0.archived_at),i0=Boolean(e.archived_at);if(R0!==i0)return R0?1:-1;if(Boolean(H0.is_active)!==Boolean(e.is_active))return H0.is_active?-1:1;return String(H0.chat_jid).localeCompare(String(e.chat_jid))}),z0(B0)}).catch(()=>{if(I1.current!==W)return;z0([])})},[j]),a1=C(()=>{G6(h1).then((W)=>{let U=Array.isArray(W?.chats)?W.chats.filter((M)=>M&&typeof M.chat_jid==="string"&&typeof M.agent_name==="string"):[];y0(U)}).catch(()=>{})},[h1]),u3=C((W)=>{let U=W?.row_id;if(U==null)return;n1.current.add(U),O0((M)=>v4(M,U).items),VK(U,O3(j)).then(()=>{Z1()}).catch((M)=>{console.warn("[queue] Failed to steer queued item:",M),c("Failed to steer message","The queued message could not be sent as steering.","warning"),n1.current.delete(U),Z1()})},[j,Z1,O0,c]),b3=C((W)=>{let U=W?.row_id;if(U==null)return;let M=v4(Q1.current,U);n1.current.add(U),e_(M.remainingQueueCount),O0((b)=>v4(b,U).items),BK(U,O3(j)).then(()=>{Z1()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),c("Failed to remove message","The queued message could not be removed.","warning"),n1.current.delete(U),Z1()})},[e_,j,Z1,O0,c]),v5=C((W)=>{if(!W||typeof W!=="object")return;if(i1(),a1(),s1(),c_(),OQ(W))Z1()},[i1,c_,a1,s1,Z1]),tQ=C(async(W,U)=>{let M=typeof W?.key==="string"?W.key:"",b=typeof U?.key==="string"?U.key:"",u=k3(M,b);if(!M||!b)return;D0((l)=>UQ(l,M,b));try{let l=await FQ({panel:W,action:U,currentChatJid:j,stopAutoresearch:qK,dismissAutoresearch:XK,writeClipboard:(N0)=>navigator.clipboard.writeText(N0)});if(l.refreshAutoresearchStatus)c_();if(l.toast)c(l.toast.title,l.toast.detail,l.toast.kind,l.toast.durationMs)}catch(l){c("Panel action failed",l?.message||"Could not complete that action.","warning")}finally{D0((l)=>LQ(l,u))}},[j,c_,c]),U6=C(()=>{if(L_.current)L_.current.abort(),L_.current=null;L0(null)},[]),W8=C(async(W)=>{let U=String(W||"").trim();if(!U)return c("BTW needs a question","Usage: /btw <question>","warning"),!0;if(L_.current)L_.current.abort();let M=new AbortController;L_.current=M,L0({question:U,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await WK(U,{signal:M.signal,chatJid:e2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(u,l)=>{if(u==="side_prompt_start")L0((N0)=>N0?{...N0,status:"running"}:N0)},onThinkingDelta:(u)=>{L0((l)=>l?{...l,thinking:`${l.thinking||""}${u||""}`}:l)},onTextDelta:(u)=>{L0((l)=>l?{...l,answer:`${l.answer||""}${u||""}`}:l)}});if(L_.current!==M)return!0;L0((u)=>u?{...u,answer:b?.result||u.answer||"",thinking:b?.thinking||u.thinking||"",model:b?.model||null,status:"success",error:null}:u)}catch(b){if(M.signal.aborted)return!0;L0((u)=>u?{...u,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:u)}finally{if(L_.current===M)L_.current=null}return!0},[j,c]),eQ=C(async({content:W})=>{let U=t2(W);if(!U)return!1;if(U.type==="help")return c("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(U.type==="clear")return U6(),c("BTW cleared","Closed the side conversation panel.","info"),!0;if(U.type==="ask")return await W8(U.question),!0;return!1},[U6,W8,c]),_Z=C(()=>{if(a?.question)W8(a.question)},[a,W8]),$Z=C(async()=>{let W=j7(a);if(!W)return;try{let U=await o4("default",W,null,[],w5?"queue":null,j);v5(U),c(U?.queued==="followup"?"BTW queued":"BTW injected",U?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(U){c("BTW inject failed",U?.message||"Could not inject BTW answer into chat.","warning")}},[a,v5,w5,c]),g3=C(async(W=null)=>{let[U,M,b,u,l,N0,B0]=await Promise.allSettled([P3(j),C3(j),vQ(j),wQ(j),fQ(),G6(h1),r4(20,null,j)]),H0=U.status==="fulfilled"?U.value:null,e=M.status==="fulfilled"?M.value:null,R0=b.status==="fulfilled"?b.value:null,i0=u.status==="fulfilled"?u.value:null,K4=l.status==="fulfilled"?l.value:null,T1=N0.status==="fulfilled"?N0.value:null,P4=B0.status==="fulfilled"?B0.value:null,_4=Array.isArray(P4?.posts)?P4.posts:Array.isArray(R5)?R5:[],l3=_4.length?_4[_4.length-1]:null,KZ=_4.filter((H6)=>H6?.data?.is_bot_message).length,NZ=_4.filter((H6)=>!H6?.data?.is_bot_message).length,d3=Number(R0?.count??Q1.current.length??0)||0,i3=Array.isArray(K4?.chats)?K4.chats.length:V0.length,VZ=Array.isArray(T1?.chats)?T1.chats.length:X0.length,n3=Number(e?.percent??C0?.percent??0)||0,BZ=Number(e?.tokens??C0?.tokens??0)||0,WZ=Number(e?.contextWindow??C0?.contextWindow??0)||0,UZ=i0?.current??_1??null,LZ=i0?.thinking_level??M1??null,FZ=i0?.supports_thinking??h0,zZ=H0?.status||(Q0?"active":"idle"),HZ=H0?.data?.type||H0?.type||null;return{generatedAt:new Date().toISOString(),request:W,chat:{currentChatJid:j,rootChatJid:h1,activeChats:i3,branches:VZ},agent:{status:zZ,phase:HZ,running:Boolean(Q0)},model:{current:UZ,thinkingLevel:LZ,supportsThinking:Boolean(FZ)},context:{tokens:BZ,contextWindow:WZ,percent:n3},queue:{count:d3},timeline:{loadedPosts:_4.length,botPosts:KZ,userPosts:NZ,latestPostId:l3?.id??null,latestTimestamp:l3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(n3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,d3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,i3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,_4.length*5))}]}},[V0,_1,M1,C0,X0,j,h1,Q0,R5,h0]),u5=C(()=>{f5(),i1(),a1(),Z1(),s1(),c_()},[f5,i1,a1,Z1,s1,c_]);g(()=>{u5();let W=setInterval(()=>{f5(),i1(),a1(),Z1()},60000);return()=>clearInterval(W)},[u5,f5,i1,a1,Z1]),g(()=>{w0(new Map),D0(new Set)},[j]),g(()=>{let W=!1,U=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;N5()})};if(O)return p_(O),()=>{W=!0};if(k)return SQ(k,50,0,j,I,h1).then((M)=>{if(W)return;d1(M.results),V8(!1)}).catch((M)=>{if(W)return;console.error("Failed to search:",M),d1([]),V8(!1)}),()=>{W=!0};return p_().then(()=>{U()}).catch((M)=>{if(W)return;console.error("Failed to load timeline:",M)}),()=>{W=!0}},[j,O,k,I,h1,p_,N5,V8,d1]),g(()=>{let W=D4.current||j;O4.current.set(W,K5())},[j,K5]),g(()=>{let W=D4.current||j;if(W===j)return;O4.current.set(W,K5()),D4.current=j,n1.current.clear(),N8(O4.current.get(j)||null),Z1(),x_(),s1()},[j,x_,s1,Z1,N8,K5]);let jZ=C(()=>{let{currentHashtag:W,searchQuery:U,searchOpen:M}=g1.current||{};if(!W&&!U&&!M)o1();u5()},[u5,o1]),b5=C((W,U="streaming")=>{let M=new Date().toISOString();u0((b)=>EQ(b,W,{fallbackStatus:U,currentChatJid:j,dismissedSessionKeys:X1.current,updatedAt:M}))},[j]),L6=C((W,U)=>{let M=U?.turn_id,b=typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():null,l=b?b===j:W==="connected"||W==="workspace_update";if(l)f3(U),v3(U);if(W==="ui_theme"){l2(U);return}if(W==="generated_widget_open"){if(!l)return;if(M&&!F0.current)N_(M);b5(U,"loading");return}if(W==="generated_widget_delta"){if(!l)return;if(M&&!F0.current)N_(M);b5(U,"streaming");return}if(W==="generated_widget_final"){if(!l)return;if(M&&!F0.current)N_(M);b5(U,"final");return}if(W==="generated_widget_error"){if(!l)return;b5(U,"error");return}if(W==="generated_widget_close"){if(!l)return;u0((e)=>MQ(e,U));return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))G5()}if(W==="connected"){if(R3(U?.app_asset_version))return;p(null),d({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),J0(null),m0.current=null,F1();let e=j;P3(e).then((T1)=>{if(I1.current!==e)return;if(!T1||T1.status!=="active"||!T1.data)return;let P4=T1.data,_4=P4.turn_id||P4.turnId;if(_4)N_(_4);if(K_({clearSilence:!0}),k4(P4),T1.thought&&T1.thought.text)t0.current=T1.thought.text,G0({text:T1.thought.text,totalLines:T1.thought.totalLines||0});if(T1.draft&&T1.draft.text)g0.current=T1.draft.text,d({text:T1.draft.text,totalLines:T1.draft.totalLines||0})}).catch((T1)=>{console.warn("Failed to fetch agent status:",T1)});let{currentHashtag:R0,searchQuery:i0,searchOpen:K4}=g1.current||{};if(!R0&&!i0&&!K4)o1();u5();return}if(W==="agent_status"){if(!l){if(U?.type==="done"||U?.type==="error")i1(),a1();return}if(U.type==="done"||U.type==="error"){if(M&&F0.current&&M!==F0.current)return;if(U.type==="done"){I4(M||F0.current);let{currentHashtag:e,searchQuery:R0,searchOpen:i0}=g1.current||{};if(!e&&!R0&&!i0)o1();if(U.context_usage)v0(U.context_usage)}if(s1(),h_.current=!1,F1(),n1.current.clear(),i1(),Z1(),d({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),J0(null),U.type==="error")p({type:"error",title:U.title||"Agent error"}),setTimeout(()=>p(null),8000);else p(null)}else{if(M)N_(M);if(K_({running:!0,clearSilence:!0}),U.type==="thinking")g0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0});P_.current=U,p((e)=>{if(e&&e.type===U.type&&e.title===U.title)return e;return U})}return}if(W==="agent_steer_queued"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;let e=M||F0.current;if(!e)return;p0.current=e,x0(e);return}if(W==="agent_followup_queued"){if(!l)return;let e=U?.row_id,R0=U?.content;if(e!=null&&typeof R0==="string"&&R0.trim())O0((i0)=>{if(i0.some((K4)=>K4?.row_id===e))return i0;return[...i0,{row_id:e,content:R0,timestamp:U?.timestamp||null,thread_id:U?.thread_id??null}]});Z1();return}if(W==="agent_followup_consumed"){if(!l)return;let e=U?.row_id;if(e!=null){let T1=v4(Q1.current,e);e_(T1.remainingQueueCount),O0((P4)=>v4(P4,e).items)}Z1();let{currentHashtag:R0,searchQuery:i0,searchOpen:K4}=g1.current||{};if(!R0&&!i0&&!K4)o1();return}if(W==="agent_followup_removed"){if(!l)return;let e=U?.row_id;if(e!=null){let R0=v4(Q1.current,e);n1.current.add(e),e_(R0.remainingQueueCount),O0((i0)=>v4(i0,e).items)}Z1();return}if(W==="agent_draft_delta"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;if(M&&!F0.current)N_(M);K_({running:!0,clearSilence:!0}),g0.current=Pj(g0.current,U);let e=Date.now();if(!l4.current||e-l4.current>=100){l4.current=e;let R0=g0.current;if(Y1.current)d((i0)=>J3(R0,i0));else d(Y6(R0,null))}return}if(W==="agent_draft"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;if(M&&!F0.current)N_(M);K_({running:!0,clearSilence:!0});let e=U.text||"",R0=U.mode||(U.kind==="plan"?"replace":"append");if(U.kind==="plan")_0((i0)=>Tj(i0,e,R0));else if(!Y1.current)g0.current=e,d(Y6(e,U.total_lines));return}if(W==="agent_thought_delta"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;if(M&&!F0.current)N_(M);K_({running:!0,clearSilence:!0}),t0.current=Cj(t0.current,U);let e=Date.now();if(j1.current&&(!L1.current||e-L1.current>=100)){L1.current=e;let R0=t0.current;G0((i0)=>J3(R0,i0))}return}if(W==="agent_thought"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;if(M&&!F0.current)N_(M);K_({running:!0,clearSilence:!0});let e=U.text||"";if(!j1.current)t0.current=e,G0(Y6(e,U.total_lines));return}if(W==="model_changed"){if(!l)return;if(U?.model!==void 0)m1(U.model);if(U?.thinking_level!==void 0)q1(U.thinking_level??null);if(U?.supports_thinking!==void 0)x1(Boolean(U.supports_thinking));let e=j;C3(e).then((R0)=>{if(I1.current!==e)return;if(R0)v0(R0)}).catch(()=>{});return}if(W==="extension_ui_widget"&&U?.options?.surface==="status-panel"){if((typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():j)!==j)return;let R0=typeof U?.key==="string"?U.key:"";if(!R0)return;if(w0((i0)=>BQ(i0,U)),WQ(U))D0((i0)=>I3(i0,R0));D3(W,U);return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:U}));Z5(U?.updates);return}if(wj(W)){if(!l)return;if(D3(W,U),W==="extension_ui_notify"&&typeof U?.message==="string")c(U.message,null,U?.type||"info");if(W==="extension_ui_error"&&typeof U?.error==="string")c("Extension UI error",U.error,"error",5000);return}let{currentHashtag:N0,searchQuery:B0,searchOpen:H0}=g1.current;if(W==="agent_response"){if(!l)return;B8(),C_.current={post:U,turnId:F0.current}}if(!N0&&!B0&&!H0&&l&&(W==="new_post"||W==="new_reply"||W==="agent_response"))d1((e)=>{if(!e)return[U];if(e.some((R0)=>R0.id===U.id))return e;return[...e,U]}),T4.current?.();if(W==="interaction_updated"){if(!l)return;if(N0||B0||H0)return;d1((e)=>{if(!e)return e;if(!e.some((R0)=>R0.id===U.id))return e;return e.map((R0)=>R0.id===U.id?U:R0)})}if(W==="interaction_deleted"){if(!l)return;if(N0||B0||H0)return;let e=U?.ids||[];if(e.length){if(y5(()=>{d1((R0)=>R0?R0.filter((i0)=>!e.includes(i0.id)):R0)}),x3.current)N6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[b5,F1,G5,j,N6,K_,I4,y5,i1,a1,o1,B8,N_,k4,f3,v3,f5,Z1,O0,s1,R3]);g(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=L6,W.reset=()=>{B8(),F1(),p(null),d({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),J0(null)},W.finalize=()=>y3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[F1,y3,L6,B8]),Lj({handleSseEvent:L6,handleConnectionStatusChange:dQ,loadPosts:p_,onWake:jZ,chatJid:j}),g(()=>{if(!V5||V5.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let U=W.slice(5);f1(U),history.replaceState(null,"",location.pathname+location.search)},[V5,f1]);let F6=S!==null;g(()=>{if(G!=="connected")return;let U=setInterval(()=>{let{currentHashtag:M,searchQuery:b,searchOpen:u}=g1.current||{},l=!M&&!b&&!u;if(F6){if(l)o1();Z1(),x_(),s1(),c_()}else{if(l)o1();x_(),s1(),c_()}},F6?15000:60000);return()=>clearInterval(U)},[G,F6,x_,c_,s1,Z1,o1]),g(()=>{return vj(()=>{x_(),s1(),Z1(),c_()})},[x_,c_,s1,Z1]);let QZ=C(()=>{f_((W)=>!W)},[]),m3=C((W)=>{if(typeof window>"u")return;let U=String(W||"").trim();if(!U||U===j)return;let M=L4(window.location.href,U,{chatOnly:Q});$?.(M)},[Q,j,$]),z6=C(()=>{ej({hasWindow:typeof window<"u",currentBranchRecord:K1,renameBranchInFlight:T.current,renameBranchLockUntil:r.current,getFormLock:E3,setRenameBranchNameDraft:j0,setIsRenameBranchFormOpen:W0})},[K1]),g5=C(()=>{_Q({setIsRenameBranchFormOpen:W0,setRenameBranchNameDraft:j0})},[]),h3=C(async(W)=>{await $Q({hasWindow:typeof window<"u",currentBranchRecord:K1,nextName:W,openRenameForm:z6,renameBranchInFlightRef:T,renameBranchLockUntilRef:r,getFormLock:E3,setIsRenamingBranch:f,renameChatBranch:GK,refreshActiveChatAgents:i1,refreshCurrentChatBranches:a1,showIntentToast:c,closeRenameForm:g5})},[g5,K1,i1,a1,z6,f,c]),p3=C(async(W=null)=>{await jQ({hasWindow:typeof window<"u",targetChatJid:W,currentChatJid:j,currentBranchRecord:K1,currentChatBranches:X0,activeChatAgents:V0,pruneChatBranch:KK,refreshActiveChatAgents:i1,refreshCurrentChatBranches:a1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[V0,Q,K1,X0,j,$,i1,a1,c]),ZZ=C(async(W)=>{await QQ({targetChatJid:W,restoreChatBranch:NK,currentChatBranches:X0,refreshActiveChatAgents:i1,refreshCurrentChatBranches:a1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,X0,$,i1,a1,c]);g(()=>{if(!X||typeof window>"u")return;let W=!1;return ZQ({branchLoaderSourceChatJid:K,forkChatBranch:p5,setBranchLoaderState:e1,navigate:$,baseHref:window.location.href,isCancelled:()=>W}),()=>{W=!0}},[X,K,$]);let YZ=C((W)=>{if(!W||typeof W!=="object")return;let U=J_(W);if(U)X1.current.delete(U);u0(DQ(W,new Date().toISOString()))},[]),m5=C(()=>{u0((W)=>{let U=AQ(W);if(U.dismissedSessionKey)X1.current.add(U.dismissedSessionKey);return U.nextWidget})},[]),qZ=C((W,U)=>{let M=typeof W?.kind==="string"?W.kind:"",b=J_(U);if(!M||!b)return;if(M==="widget.close"){m5();return}if(M==="widget.submit"){let u=V7(W?.payload),l=B7(W?.payload),N0=new Date().toISOString();if(u0((B0)=>kQ(B0,b,{kind:M,payload:W?.payload||null,submittedAt:N0,submissionText:u})),!u){if(c("Widget submission received","The widget submitted data without a message payload yet.","info",3500),l)m5();return}(async()=>{try{let B0=await o4("default",u,null,[],w5?"queue":null,j);if(v5(B0),u0((H0)=>T3(H0,b,{submittedAt:N0,submissionText:u,queued:B0?.queued||null})),c(B0?.queued==="followup"?"Widget submission queued":"Widget submission sent",B0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),l)m5()}catch(B0){u0((H0)=>T3(H0,b,{submittedAt:N0,submissionText:u,errorMessage:B0?.message||"Could not send the widget message."})),c("Widget submission failed",B0?.message||"Could not send the widget message.","warning",5000)}})();return}if(M==="widget.ready"||M==="widget.request_refresh"){let u=new Date().toISOString(),l=Boolean(W?.payload?.buildDashboard||W?.payload?.dashboardKind==="internal-state"),N0=Number(U?.runtimeState?.refreshCount||0)+1;if(u0((B0)=>IQ(B0,b,{kind:M,payload:W?.payload||null,eventAt:u,nextRefreshCount:N0,shouldBuildDashboard:l})),M==="widget.request_refresh")if(l)(async()=>{try{let B0=await g3(W?.payload||null);u0((H0)=>TQ(H0,b,{dashboard:B0,at:new Date().toISOString(),count:N0,echo:W?.payload||null})),c("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(B0){u0((H0)=>PQ(H0,b,{errorMessage:B0?.message||"Could not build dashboard.",at:new Date().toISOString(),count:N0})),c("Dashboard build failed",B0?.message||"Could not build dashboard.","warning",5000)}})();else c("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[g3,j,m5,v5,w5,c]);g(()=>{X1.current.clear(),u0(null)},[j]);let XZ=C(async()=>{await YQ({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:p5,refreshActiveChatAgents:i1,refreshCurrentChatBranches:a1,showIntentToast:c,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,i1,a1,c]),U8=C(async(W,U)=>{await qQ({hasWindow:typeof window<"u",isWebAppMode:V,path:W,label:U,showIntentToast:c,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(M)=>{let u=(typeof c0==="string"?c0.trim():"")===M?R1.current:M===e4?A_.current:null;if(typeof u?.preparePopoutTransfer==="function")return await u.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(M)=>{let b=a0.get(M);if(b&&!b.dirty){n_(M);return}if(M===e4&&p1)C1(!1)}})},[j,p1,n_,V,c,c0]);g(()=>uj({openTab:(W,U)=>__(W,U?{label:U}:void 0),popOutPane:(W,U)=>{U8(W,U)}}),[U8,__]);let GZ=C(async()=>{await XQ({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:h1,forkChatBranch:p5,getActiveChatAgents:f6,getChatBranches:G6,setActiveChatAgents:z0,setCurrentChatBranches:y0,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,h1,V,c]);g(()=>{if(!V1)return;if(typeof window>"u")return;let W=t_.current;if(!W)return;if(!q4.current){let U=H5("editorWidth",null),M=d4.current||280;q4.current=Number.isFinite(U)?U:M}if(W.style.setProperty("--editor-width",`${q4.current}px`),!E4.current){let U=H5("dockHeight",null);E4.current=Number.isFinite(U)?U:200}W.style.setProperty("--dock-height",`${E4.current}px`)},[V1]),g(()=>{if(!$_||Q)return;return bj(b1)},[b1,$_,Q]),g(()=>{if(Q)return;return gj({toggleZenMode:p4,exitZenMode:T_,zenMode:H1,isZenModeActive:()=>H1})},[p4,T_,H1,Q]);let c3=Boolean(r0&&r0===(S?.turn_id||A0));if(X)return L`
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
                                                                class=${`pane-popout-controls-item${W.id===c0?" active":""}`}
                                                                onClick=${(U)=>{g4(W.id),U.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${W.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${c0&&P1.has(c0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(W)=>{u_(c0),W.currentTarget.closest("details")?.removeAttribute("open")}}>
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
                    ${V1&&c0&&P1.has(c0)&&L`
                        <${L3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${c0}
                            onClose=${()=>u_(c0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${N1?"":" workspace-collapsed"}${V1?" editor-open":""}${Q?" chat-only":""}${H1?" zen-mode":""}`} ref=${t_}>
            ${Y0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(W)=>{if(W.target===W.currentTarget)g5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(W)=>{W.preventDefault(),h3(U0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${w1}
                            value=${U0}
                            onInput=${(W)=>{let U=W.currentTarget?.value??"";j0(String(U))}}
                            onKeyDown=${(W)=>{if(W.key==="Escape")W.preventDefault(),g5()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${P0.kind||"info"}`}>
                            ${P0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${w||!P0.canSubmit}>
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
                <${Nj}
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
                    onClick=${QZ}
                    title=${N1?"Hide workspace":"Show workspace"}
                    aria-label=${N1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${gQ} onTouchStart=${mQ}></div>
            `}
            ${Y4&&L`
                <div class="editor-pane-container">
                    ${H1&&L`<div class="zen-hover-zone"></div>`}
                    ${V1&&L`
                        <${Wj}
                            tabs=${X_}
                            activeId=${c0}
                            onActivate=${g4}
                            onClose=${n_}
                            onCloseOthers=${r_}
                            onCloseAll=${j5}
                            onTogglePin=${o_}
                            onTogglePreview=${u_}
                            onEditSource=${C5}
                            previewTabs=${P1}
                            paneOverrides=${D_}
                            onToggleDock=${$_?b1:void 0}
                            dockVisible=${$_&&p1}
                            onToggleZen=${p4}
                            zenMode=${H1}
                            onPopOutTab=${V?void 0:U8}
                        />
                    `}
                    ${V1&&L`<div class="editor-pane-host" ref=${B1}></div>`}
                    ${V1&&c0&&P1.has(c0)&&L`
                        <${L3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${c0}
                            onClose=${()=>u_(c0)}
                        />
                    `}
                    ${$_&&p1&&L`<div class="dock-splitter" onMouseDown=${cQ} onTouchStart=${lQ}></div>`}
                    ${$_&&L`<div class=${`dock-panel${p1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&L`
                                    <button class="dock-panel-action" onClick=${()=>U8(e4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
                <div class="editor-splitter" onMouseDown=${hQ} onTouchStart=${pQ}></div>
            `}
            <div class="container">
                ${k&&Mj()&&L`<div class="search-results-spacer"></div>`}
                ${Q&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${K1?.agent_name?`@${K1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${K1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${X0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(W)=>m3(W.currentTarget.value)}
                                    >
                                        ${X0.map((W)=>L`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${w8(W,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${K1?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${z6}
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
                                    onClick=${p3}
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
                        <button class="back-btn" onClick=${nQ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${k} · ${Q4}`}</span>
                    </div>
                `}
                <${f7}
                    posts=${V5}
                    hasMore=${B6?uQ:!1}
                    onLoadMore=${B6?bQ:void 0}
                    timelineRef=${G_}
                    onHashtagClick=${iQ}
                    onMessageRef=${S1}
                    onScrollToMessage=${f1}
                    onFileRef=${T0}
                    onPostClick=${void 0}
                    onDeletePost=${aQ}
                    onOpenWidget=${YZ}
                    emptyMessage=${O?`No posts with #${O}`:k?`No results for "${k}"`:void 0}
                    agents=${Y_}
                    user=${b_}
                    reverse=${B6}
                    removingPostIds=${y1}
                    searchQuery=${k}
                />
                <${V$}
                    status=${V4(S)?null:S}
                    draft=${Z0}
                    plan=${$0}
                    thought=${q0}
                    pendingRequest=${K0}
                    intent=${x}
                    turnId=${A0}
                    steerQueued=${c3}
                    onPanelToggle=${F_}
                    showExtensionPanels=${!1}
                />
                <${Q7}
                    session=${a}
                    onClose=${U6}
                    onRetry=${_Z}
                    onInject=${$Z}
                />
                <${L7}
                    widget=${M0}
                    onClose=${m5}
                    onWidgetEvent=${qZ}
                />
                <${V$}
                    extensionPanels=${Array.from(k0.values())}
                    pendingPanelActions=${d0}
                    onExtensionPanelAction=${tQ}
                    turnId=${A0}
                    steerQueued=${c3}
                    onPanelToggle=${F_}
                    showCorePanels=${!1}
                />
                <${j$}
                    items=${J?[]:b0}
                    onInjectQueuedFollowup=${u3}
                    onRemoveQueuedFollowup=${b3}
                    onOpenFilePill=${T0}
                />
                <${x2}
                    onPost=${()=>{let{searchQuery:W,searchOpen:U}=g1.current||{};if(!W&&!U)p_(),N5()}}
                    onFocus=${N5}
                    searchMode=${J}
                    searchScope=${I}
                    onSearch=${rQ}
                    onSearchScopeChange=${i}
                    onEnterSearch=${oQ}
                    onExitSearch=${sQ}
                    fileRefs=${h}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${v}
                    onSetFileRefs=${n}
                    messageRefs=${t}
                    onRemoveMessageRef=${G4}
                    onClearMessageRefs=${n4}
                    onSetMessageRefs=${q5}
                    onSwitchChat=${m3}
                    onRenameSession=${h3}
                    isRenameSessionInProgress=${w}
                    onCreateSession=${XZ}
                    onDeleteSession=${p3}
                    onRestoreSession=${ZZ}
                    activeEditorPath=${Q?null:c0}
                    onAttachEditorFile=${Q?void 0:J1}
                    onOpenFilePill=${T0}
                    followupQueueCount=${W_}
                    followupQueueItems=${b0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${u3}
                    onRemoveQueuedFollowup=${b3}
                    onSubmitIntercept=${eQ}
                    onMessageResponse=${v5}
                    onSubmitError=${X5}
                    onPopOutChat=${V?void 0:GZ}
                    isAgentActive=${w5}
                    activeChatAgents=${V0}
                    currentChatJid=${j}
                    connectionStatus=${G}
                    activeModel=${_1}
                    modelUsage=${k1}
                    thinkingLevel=${M1}
                    supportsThinking=${h0}
                    contextUsage=${C0}
                    notificationsEnabled=${$5}
                    notificationPermission=${u4}
                    onToggleNotifications=${u1}
                    onModelChange=${m1}
                    onModelStateChange=${W6}
                    statusNotice=${V4(S)?S:null}
                />
                <${O7}
                    request=${K0}
                    onRespond=${()=>{J0(null),m0.current=null}}
                />
            </div>
        </div>
    `}function LK(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=C((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},X=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",X);else window.history.pushState(null,"",X);$(window.location.href)},[]),Q=f0(()=>new URL(_).searchParams,[_]);return L`<${UK} locationParams=${Q} navigate=${j} />`}x4(L`<${LK} />`,document.getElementById("app"));

//# debugId=8A5507C622393D7164756E2164756E21
//# sourceMappingURL=app.bundle.js.map
