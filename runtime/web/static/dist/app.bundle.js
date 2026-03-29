var $Z=Object.defineProperty;var jZ=(_)=>_;function QZ(_,$){this[_]=jZ.bind(null,$)}var ZZ=(_,$)=>{for(var j in $)$Z(_,j,{get:$[j],enumerable:!0,configurable:!0,set:QZ.bind($,j)})};var O8,U1,Q2,YZ,C4,d3,Z2,Y2,q2,E6,H6,J6,K2,z8={},H8=[],qZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,D8=Array.isArray;function V4(_,$){for(var j in $)_[j]=$[j];return _}function M6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function A8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?O8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return L8(_,q,Q,Z,null)}function L8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++Q2:Z,__i:-1,__u:0};return Z==null&&U1.vnode!=null&&U1.vnode(Y),Y}function E8(_){return _.children}function B5(_,$){this.props=_,this.context=$}function W5(_,$){if($==null)return _.__?W5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?W5(_):null}function KZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=V4({},$);Y.__v=$.__v+1,U1.vnode&&U1.vnode(Y),k6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?W5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,V2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&G2(Y)}}function G2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),G2(_)}function O6(_){(!_.__d&&(_.__d=!0)&&C4.push(_)&&!J8.__r++||d3!=U1.debounceRendering)&&((d3=U1.debounceRendering)||Z2)(J8)}function J8(){try{for(var _,$=1;C4.length;)C4.length>$&&C4.sort(Y2),_=C4.shift(),$=C4.length,KZ(_)}finally{C4.length=J8.__r=0}}function X2(_,$,j,Q,Z,Y,q,K,X,G,N){var V,W,O,M,k,A,J,D=Q&&Q.__k||H8,I=$.length;for(X=GZ(j,$,D,X,I),V=0;V<I;V++)(O=j.__k[V])!=null&&(W=O.__i!=-1&&D[O.__i]||z8,O.__i=V,A=k6(_,O,W,Z,Y,q,K,X,G,N),M=O.__e,O.ref&&W.ref!=O.ref&&(W.ref&&I6(W.ref,null,O),N.push(O.ref,O.__c||M,O)),k==null&&M!=null&&(k=M),(J=!!(4&O.__u))||W.__k===O.__k?X=N2(O,X,_,J):typeof O.type=="function"&&A!==void 0?X=A:M&&(X=M.nextSibling),O.__u&=-7);return j.__e=k,X}function GZ(_,$,j,Q,Z){var Y,q,K,X,G,N=j.length,V=N,W=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=L8(null,q,null,null,null):D8(q)?q=_.__k[Y]=L8(E8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=L8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,X=Y+W,q.__=_,q.__b=_.__b+1,K=null,(G=q.__i=XZ(q,j,X,V))!=-1&&(V--,(K=j[G])&&(K.__u|=2)),K==null||K.__v==null?(G==-1&&(Z>N?W--:Z<N&&W++),typeof q.type!="function"&&(q.__u|=4)):G!=X&&(G==X-1?W--:G==X+1?W++:(G>X?W--:W++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<N;Y++)(K=j[Y])!=null&&(2&K.__u)==0&&(K.__e==Q&&(Q=W5(K)),W2(K,K));return Q}function N2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=N2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=W5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function XZ(_,$,j,Q){var Z,Y,q,K=_.key,X=_.type,G=$[j],N=G!=null&&(2&G.__u)==0;if(G===null&&K==null||N&&K==G.key&&X==G.type)return j;if(Q>(N?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&K==G.key&&X==G.type)return q}return-1}function i3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||qZ.test($)?j:j+"px"}function U8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||i3(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||i3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(q2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=E6,_.addEventListener($,Y?J6:H6,Y)):_.removeEventListener($,Y?J6:H6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function n3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=E6++;else if($.t<j.u)return;return j(U1.event?U1.event($):$)}}}function k6(_,$,j,Q,Z,Y,q,K,X,G){var N,V,W,O,M,k,A,J,D,I,i,h,r,e,R,x=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),Y=[K=$.__e=j.__e]),(N=U1.__b)&&N($);_:if(typeof x=="function")try{if(J=$.props,D=x.prototype&&x.prototype.render,I=(N=x.contextType)&&Q[N.__c],i=N?I?I.props.value:N.__:Q,j.__c?A=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new x(J,i):($.__c=V=new B5(J,i),V.constructor=x,V.render=VZ),I&&I.sub(V),V.state||(V.state={}),V.__n=Q,W=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&x.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=V4({},V.__s)),V4(V.__s,x.getDerivedStateFromProps(J,V.__s))),O=V.props,M=V.state,V.__v=$,W)D&&x.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&x.getDerivedStateFromProps==null&&J!==O&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,i),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,i)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),H8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,i),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(O,M,k)})}if(V.context=i,V.props=J,V.__P=_,V.__e=!1,h=U1.__r,r=0,D)V.state=V.__s,V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),H8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++r<25);V.state=V.__s,V.getChildContext!=null&&(Q=V4(V4({},Q),V.getChildContext())),D&&!W&&V.getSnapshotBeforeUpdate!=null&&(k=V.getSnapshotBeforeUpdate(O,M)),e=N!=null&&N.type===E8&&N.key==null?B2(N.props.children):N,K=X2(_,D8(e)?e:[e],$,j,Q,Z,Y,q,K,X,G),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),A&&(V.__E=V.__=null)}catch(H){if($.__v=null,X||Y!=null)if(H.then){for($.__u|=X?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Y[Y.indexOf(K)]=null,$.__e=K}else{for(R=Y.length;R--;)M6(Y[R]);D6($)}else $.__e=j.__e,$.__k=j.__k,H.then||D6($);U1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=NZ(j.__e,$,j,Q,Z,Y,q,X,G);return(N=U1.diffed)&&N($),128&$.__u?void 0:K}function D6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(D6))}function V2(_,$,j){for(var Q=0;Q<j.length;Q++)I6(j[Q],j[++Q],j[++Q]);U1.__c&&U1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){U1.__e(Y,Z.__v)}})}function B2(_){return typeof _!="object"||_==null||_.__b>0?_:D8(_)?_.map(B2):V4({},_)}function NZ(_,$,j,Q,Z,Y,q,K,X){var G,N,V,W,O,M,k,A=j.props||z8,J=$.props,D=$.type;if(D=="svg"?Z="http://www.w3.org/2000/svg":D=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((O=Y[G])&&"setAttribute"in O==!!D&&(D?O.localName==D:O.nodeType==3)){_=O,Y[G]=null;break}}if(_==null){if(D==null)return document.createTextNode(J);_=document.createElementNS(Z,D,J.is&&J),K&&(U1.__m&&U1.__m($,Y),K=!1),Y=null}if(D==null)A===J||K&&_.data==J||(_.data=J);else{if(Y=Y&&O8.call(_.childNodes),!K&&Y!=null)for(A={},G=0;G<_.attributes.length;G++)A[(O=_.attributes[G]).name]=O.value;for(G in A)O=A[G],G=="dangerouslySetInnerHTML"?V=O:G=="children"||(G in J)||G=="value"&&("defaultValue"in J)||G=="checked"&&("defaultChecked"in J)||U8(_,G,null,O,Z);for(G in J)O=J[G],G=="children"?W=O:G=="dangerouslySetInnerHTML"?N=O:G=="value"?M=O:G=="checked"?k=O:K&&typeof O!="function"||A[G]===O||U8(_,G,O,A[G],Z);if(N)K||V&&(N.__html==V.__html||N.__html==_.innerHTML)||(_.innerHTML=N.__html),$.__k=[];else if(V&&(_.innerHTML=""),X2($.type=="template"?_.content:_,D8(W)?W:[W],$,j,Q,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&W5(j,0),K,X),Y!=null)for(G=Y.length;G--;)M6(Y[G]);K||(G="value",D=="progress"&&M==null?_.removeAttribute("value"):M!=null&&(M!==_[G]||D=="progress"&&!M||D=="option"&&M!=A[G])&&U8(_,G,M,A[G],Z),G="checked",k!=null&&k!=_[G]&&U8(_,G,k,A[G],Z))}return _}function I6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){U1.__e(Z,j)}}function W2(_,$,j){var Q,Z;if(U1.unmount&&U1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||I6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){U1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&W2(Q[Z],$,j||typeof _.type!="function");j||M6(_.__e),_.__c=_.__=_.__e=void 0}function VZ(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),U1.__&&U1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],k6($,_=(!Q&&j||$).__k=A8(E8,null,[_]),Z||z8,z8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?O8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),V2(Y,_,q)}function U2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,O6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+K2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}O8=H8.slice,U1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(K){_=K}throw _}},Q2=0,YZ=function(_){return _!=null&&_.constructor===void 0},B5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=V4({},this.state),typeof _=="function"&&(_=_(V4({},j),this.props)),_&&V4(j,_),_!=null&&this.__v&&($&&this._sb.push($),O6(this))},B5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),O6(this))},B5.prototype.render=E8,C4=[],Z2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y2=function(_,$){return _.__v.__b-$.__v.__b},J8.__r=0,q2=/(PointerCapture)$|Capture$/i,E6=0,H6=n3(!1),J6=n3(!0),K2=0;var S4,W1,z6,o3,U5=0,L2=[],O1=U1,r3=O1.__b,s3=O1.__r,a3=O1.diffed,t3=O1.__c,e3=O1.unmount,_2=O1.__;function L5(_,$){O1.__h&&O1.__h(W1,_,U5||$),U5=0;var j=W1.__H||(W1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return U5=1,T6(O2,_)}function T6(_,$,j){var Q=L5(S4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):O2(void 0,$),function(K){var X=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(X,K);X!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=W1,!W1.__f)){var Z=function(K,X,G){if(!Q.__c.__H)return!0;var N=Q.__c.__H.__.filter(function(W){return W.__c});if(N.every(function(W){return!W.__N}))return!Y||Y.call(this,K,X,G);var V=Q.__c.props!==K;return N.some(function(W){if(W.__N){var O=W.__[0];W.__=W.__N,W.__N=void 0,O!==W.__[0]&&(V=!0)}}),Y&&Y.call(this,K,X,G)||V};W1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=W1;W1.componentWillUpdate=function(K,X,G){if(this.__e){var N=Y;Y=void 0,Z(K,X,G),Y=N}q&&q.call(this,K,X,G)},W1.shouldComponentUpdate=Z}return Q.__N||Q.__}function g(_,$){var j=L5(S4++,3);!O1.__s&&P6(j.__H,$)&&(j.__=_,j.u=$,W1.__H.__h.push(j))}function m5(_,$){var j=L5(S4++,4);!O1.__s&&P6(j.__H,$)&&(j.__=_,j.u=$,W1.__h.push(j))}function P(_){return U5=5,f0(function(){return{current:_}},[])}function F2(_,$,j){U5=6,m5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function f0(_,$){var j=L5(S4++,7);return P6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function C(_,$){return U5=8,f0(function(){return _},$)}function z2(_){var $=W1.context[_.__c],j=L5(S4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(W1)),$.props.value):_.__}function H2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function J2(_){var $=L5(S4++,10),j=m();return $.__=_,W1.componentDidCatch||(W1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function BZ(){for(var _;_=L2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(F8),$.__h.some(A6),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){W1=null,r3&&r3(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),_2&&_2(_,$)},O1.__r=function(_){s3&&s3(_),S4=0;var $=(W1=_.__c).__H;$&&(z6===W1?($.__h=[],W1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(F8),$.__h.some(A6),$.__h=[],S4=0)),z6=W1},O1.diffed=function(_){a3&&a3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(L2.push($)!==1&&o3===O1.requestAnimationFrame||((o3=O1.requestAnimationFrame)||WZ)(BZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),z6=W1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(F8),j.__h=j.__h.filter(function(Q){return!Q.__||A6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],O1.__e(Q,j.__v)}}),t3&&t3(_,$)},O1.unmount=function(_){e3&&e3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{F8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&O1.__e($,j.__v))};var $2=typeof requestAnimationFrame=="function";function WZ(_){var $,j=function(){clearTimeout(Q),$2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);$2&&($=requestAnimationFrame(j))}function F8(_){var $=W1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),W1=$}function A6(_){var $=W1;_.__c=_.__(),W1=$}function P6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function O2(_,$){return typeof $=="function"?$(_):$}var D2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],K=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=K:q===4?Q[1]=Object.assign(Q[1]||{},K):q===5?(Q[1]=Q[1]||{})[$[++Y]]=K:q===6?Q[1][$[++Y]]+=K+"":q?(Z=_.apply(K,D2(_,K,j,["",null])),Q.push(Z),K[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(K)}return Q},j2=new Map;function UZ(_){var $=j2.get(this);return $||($=new Map,j2.set(this,$)),($=D2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",K="",X=[0],G=function(W){Y===1&&(W||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,W,q):Y===3&&(W||q)?(X.push(3,W,q),Y=2):Y===2&&q==="..."&&W?X.push(4,W,0):Y===2&&q&&!W?X.push(5,0,!0,q):Y>=5&&((q||!W&&Y===5)&&(X.push(Y,0,q,Z),Y=6),W&&(X.push(Y,W,0,Z),Y=6)),q=""},N=0;N<j.length;N++){N&&(Y===1&&G(),G(N));for(var V=0;V<j[N].length;V++)Q=j[N][V],Y===1?Q==="<"?(G(),X=[X],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:K?Q===K?K="":q+=Q:Q==='"'||Q==="'"?K=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[N][V+1]===">")?(G(),Y===3&&(X=X[0]),Y=X,(X=X[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,X=X[0])}return G(),X}(_)),$),arguments,[])).length>1?$:$[0]}var L=UZ.bind(A8);var e1={};ZZ(e1,{uploadWorkspaceFile:()=>k8,uploadMedia:()=>v6,updateWorkspaceFile:()=>RZ,submitAdaptiveCardAction:()=>b6,streamSidePrompt:()=>SZ,stopAutoresearch:()=>kZ,steerAgentQueueItem:()=>CZ,setWorkspaceVisibility:()=>d5,setAgentThoughtVisibility:()=>m6,sendPeerAgentMessage:()=>AZ,sendAgentMessage:()=>r4,searchPosts:()=>S6,restoreChatBranch:()=>DZ,respondToAgentRequest:()=>M8,renameWorkspaceFile:()=>d6,renameChatBranch:()=>JZ,removeAgentQueueItem:()=>PZ,pruneChatBranch:()=>OZ,moveWorkspaceEntry:()=>i6,getWorkspaceTree:()=>c5,getWorkspaceRawUrl:()=>I8,getWorkspaceFile:()=>l5,getWorkspaceDownloadUrl:()=>T8,getWorkspaceBranch:()=>yZ,getTimeline:()=>o4,getThumbnailUrl:()=>h6,getThread:()=>x6,getPostsByHashtag:()=>C6,getMediaUrl:()=>R_,getMediaText:()=>p6,getMediaInfo:()=>F5,getMediaBlob:()=>xZ,getChatBranches:()=>HZ,getAutoresearchStatus:()=>MZ,getAgents:()=>w6,getAgentThought:()=>g6,getAgentStatus:()=>f6,getAgentQueueState:()=>TZ,getAgentModels:()=>p5,getAgentContext:()=>EZ,getActiveChatAgents:()=>R6,forkChatBranch:()=>h5,dismissAutoresearch:()=>IZ,deleteWorkspaceFile:()=>n6,deletePost:()=>y6,createWorkspaceFile:()=>l6,createReply:()=>zZ,createPost:()=>FZ,attachWorkspaceFile:()=>c6,addToWhitelist:()=>u6,SSEClient:()=>P8});async function e0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function A2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function LZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:K}=await j.read();if(K)break;Z+=Q.decode(q,{stream:!0});let X=Z.split(`

`);Z=X.pop()||"";for(let G of X){let N=A2(G);if(N)$(N.event,N.data)}}Z+=Q.decode();let Y=A2(Z);if(Y)$(Y.event,Y.data)}async function o4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return e0(Q)}async function C6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return e0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function S6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",K=Z?`&scope=${encodeURIComponent(Z)}`:"",X=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return e0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${X}`)}async function x6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return e0(`/thread/${_}${j}`)}async function FZ(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return e0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function zZ(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return e0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function y6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return e0(Z,{method:"DELETE"})}async function r4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",K={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")K.mode=Z;return e0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(K)})}async function R6(){return e0("/agent/active-chats")}async function HZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return e0(`/agent/branches${Q}`)}async function h5(_,$={}){return e0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function JZ(_,$={}){return e0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function OZ(_){return e0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function DZ(_,$={}){return e0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function AZ(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return e0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function w6(){return e0("/agent/roster")}async function f6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/status${$}`)}async function EZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/context${$}`)}async function MZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/autoresearch/status${$}`)}async function kZ(_=null,$={}){return e0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function IZ(_=null){return e0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function TZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/queue-state${$}`)}async function PZ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function CZ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function p5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/models${$}`)}async function v6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function M8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function b6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function SZ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await LZ(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function u6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function g6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return e0(j)}async function m6(_,$,j){return e0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function R_(_){return`/media/${_}`}function h6(_){return`/media/${_}/thumbnail`}async function F5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function p6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function xZ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function c5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return e0(Q)}async function yZ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return e0($)}async function l5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return e0(Z)}async function RZ(_,$){return e0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function c6(_){return e0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function k8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",K=await fetch(""+q,{method:"POST",body:Q});if(!K.ok){let X=await K.json().catch(()=>({error:"Upload failed"})),G=Error(X.error||`HTTP ${K.status}`);throw G.status=K.status,G.code=X.code,G}return K.json()}async function l6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function d6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function i6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function n6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return e0($,{method:"DELETE"})}async function d5(_,$=!1){return e0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function I8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function T8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class P8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function C8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function wZ(_,$){let j=C8(_),Q=C8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function o6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function r6(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function fZ(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function vZ(_,$,j=0,Q=(Z)=>Z){let Z=C8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=fZ(Y.length,j),K=Y.map((X)=>C8(Q(X)));for(let X of q)if(K[X].startsWith(Z))return X;for(let X of q)if(K[X].includes(Z))return X;return-1}function s6(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(wZ(Y,$))return j}return vZ(Z,$,0,Q)}function J_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function G1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function z5(_,$=!1){let j=J_(_);if(j===null)return $;return j==="true"}function H5(_,$=null){let j=J_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}function S8(_){return String(_||"").trim().toLowerCase()}function a6(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return S8($[1]||"")}function bZ(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=S8(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function E2(_,$,j={}){let Q=a6($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return bZ(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return S8(Y?.agent_name).startsWith(Q)})}function t6(_){let $=S8(_);return $?`@${$} `:""}function M2(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function x8(_){let $=e6(_);return $?`@${$}`:""}function e6(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function y8(_,$=""){let j=String(_||""),Q=e6(j),Z=e6($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function k2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?x8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function uZ(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function R8(_,$={}){let j=x8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=uZ(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function I2(_,$,j){let Q=x8(_),Z=x8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}function gZ(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function B4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function w8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return B4(_)?"Compacting context":"Working..."}function mZ(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function f8(_,$=Date.now()){let j=gZ(_);if(j===null)return null;return mZ(Math.max(0,$-j))}function d_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let K=`${_}-file-pill`,X=`${_}-file-name`,G=`${_}-file-remove`,N=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${K} title=${j||$} onClick=${Z}>
      ${N}
      <span class=${X}>${$}</span>
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
  `}var hZ=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function pZ({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",K=`${Q!=null?`Context: ${T2(Q)} / ${T2(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,X=9,G=2*Math.PI*9,N=j/100*G,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${K}
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
                    stroke-dasharray=${`${N} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function T2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function cZ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function lZ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let N=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)Z.push(N[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function dZ(_){let $=cZ(_||""),j=lZ($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function _$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=dZ(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((K)=>L`
                                        <${d_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((K)=>{let X=K.split("/").pop()||K;return L`
                                            <${d_}
                                                key=${"queue-file-"+K}
                                                prefix="compose"
                                                label=${X}
                                                title=${K}
                                                onClick=${()=>Q?.(K)}
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
    `}function P2({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:K,fileRefs:X=[],onRemoveFileRef:G,onClearFileRefs:N,messageRefs:V=[],onRemoveMessageRef:W,onClearMessageRefs:O,activeModel:M=null,modelUsage:k=null,thinkingLevel:A=null,supportsThinking:J=!1,contextUsage:D=null,onContextCompact:I,notificationsEnabled:i=!1,notificationPermission:h="default",onToggleNotifications:r,onModelChange:e,onModelStateChange:R,activeEditorPath:x=null,onAttachEditorFile:H,onOpenFilePill:S,followupQueueItems:p=[],onInjectQueuedFollowup:Y0,onRemoveQueuedFollowup:d,onSubmitIntercept:$0,onMessageResponse:_0,onPopOutChat:G0,isAgentActive:N0=!1,activeChatAgents:B0=[],currentChatJid:J0="web:default",connectionStatus:A0="connected",onSetFileRefs:E0,onSetMessageRefs:o0,onSubmitError:y0,onSwitchChat:I0,onRenameSession:r0,isRenameSessionInProgress:s0=!1,onCreateSession:m0,onDeleteSession:t0,onRestoreSession:h0,showQueueStack:$1=!0,statusNotice:z0=null}){let[c0,j1]=m(""),[Y1,K_]=m(""),[D1,_1]=m([]),[h1,M1]=m(!1),[q1,p0]=m([]),[x1,k1]=m(0),[a,W0]=m(!1),[H0,X0]=m([]),[R0,S0]=m(0),[v0,k0]=m(!1),[w0,i0]=m(!1),[D0,u0]=m(!1),[O0,Q0]=m(!1),[y,t]=m([]),[F0,M0]=m(0),[b0,K1]=m(0),[A1,X1]=m(!1),[p1,Y4]=m(0),[W_,__]=m(null),[U_,G_]=m(()=>Date.now()),Q1=P(null),o1=P(null),q4=P(null),f_=P(null),$5=P(null),b4=P(null),b1=P(null),L_=P(null),y1=P({value:"",updatedAt:0}),E1=P(0),N1=P(!1),v_=200,b_=(F)=>{let v=new Set,n=[];for(let c of F||[]){if(typeof c!=="string")continue;let T0=c.trim();if(!T0||v.has(T0))continue;v.add(T0),n.push(T0)}return n},V1=()=>{let F=J_("piclaw_compose_history");if(!F)return[];try{let v=JSON.parse(F);if(!Array.isArray(v))return[];return b_(v)}catch{return[]}},$_=(F)=>{G1("piclaw_compose_history",JSON.stringify(F))},g0=P(V1()),P1=P(-1),A_=P(""),j_=c0.trim()||D1.length>0||X.length>0||V.length>0,u4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),o_=typeof window<"u"&&typeof Notification<"u",g4=typeof window<"u"?Boolean(window.isSecureContext):!1,j5=o_&&g4&&h!=="denied",s_=h==="granted"&&i,u_=B4(z0),P5=w8(z0),C5=typeof z0?.detail==="string"&&z0.detail.trim()?z0.detail.trim():"",B1=u_?f8(z0,U_):null,R1=s_?"Disable notifications":"Enable notifications",Q5=D1.length>0||X.length>0||V.length>0,E_=A0==="disconnected"?"Reconnecting":String(A0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),Q_=A0==="disconnected"?"Reconnecting":`Connection: ${E_}`,c1=(Array.isArray(B0)?B0:[]).filter((F)=>!F?.archived_at),C1=(()=>{for(let F of Array.isArray(B0)?B0:[]){let v=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(v&&v===J0)return F}return null})(),u1=Boolean(C1&&C1.chat_jid===(C1.root_chat_jid||C1.chat_jid)),z1=f0(()=>{let F=new Set,v=[];for(let n of Array.isArray(B0)?B0:[]){let c=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!c||c===J0||F.has(c))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;F.add(c),v.push(n)}return v},[B0,J0]),M_=z1.length>0,k_=M_&&typeof I0==="function",I_=M_&&typeof h0==="function",a_=Boolean(s0||N1.current),Z_=!j&&typeof r0==="function"&&!a_,r1=!j&&typeof m0==="function",T_=!j&&typeof t0==="function"&&!u1,K4=!j&&(k_||I_||Z_||r1||T_),H1=M||"",t_=J&&A?` (${A})`:"",m4=t_.trim()?`${A}`:"",h4=typeof k?.hint_short==="string"?k.hint_short.trim():"",P_=[m4||null,h4||null].filter(Boolean).join(" • "),p4=[H1?`Current model: ${H1}${t_}`:null,k?.plan?`Plan: ${k.plan}`:null,h4||null,k?.primary?.reset_description||null,k?.secondary?.reset_description||null].filter(Boolean),Z5=w0?"Switching model…":p4.join(" • ")||`Current model: ${H1}${t_} (tap to open model picker)`,g_=(F)=>{if(!F||typeof F!=="object")return;let v=F.model??F.current;if(typeof R==="function")R({model:v??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(v&&typeof e==="function")e(v)},m_=(F)=>{let v=F||Q1.current;if(!v)return;v.style.height="auto",v.style.height=`${v.scrollHeight}px`,v.style.overflowY="hidden"},J4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){W0(!1),p0([]);return}let v=F.toLowerCase().split(" ")[0];if(v.length<1){W0(!1),p0([]);return}let n=hZ.filter((c)=>c.name.startsWith(v)||c.name.replace(/-/g,"").startsWith(v.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===v))k0(!1),X0([]),p0(n),k1(0),W0(!0);else W0(!1),p0([])},h_=(F)=>{let v=c0,n=v.indexOf(" "),c=n>=0?v.slice(n):"",T0=F.name+c;j1(T0),W0(!1),p0([]),requestAnimationFrame(()=>{let J1=Q1.current;if(!J1)return;let S1=T0.length;J1.selectionStart=S1,J1.selectionEnd=S1,J1.focus()})},c4=(F)=>{if(a6(F)==null){k0(!1),X0([]);return}let v=E2(c1,F,{currentChatJid:J0});if(v.length>0&&!(v.length===1&&t6(v[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))W0(!1),p0([]),X0(v),S0(0),k0(!0);else k0(!1),X0([])},p_=(F)=>{let v=t6(F?.agent_name);if(!v)return;j1(v),k0(!1),X0([]),requestAnimationFrame(()=>{let n=Q1.current;if(!n)return;let c=v.length;n.selectionStart=c,n.selectionEnd=c,n.focus()})},C_=()=>{if(j||!k_&&!I_&&!Z_&&!r1&&!T_)return!1;return y1.current={value:"",updatedAt:0},u0(!1),W0(!1),p0([]),k0(!1),X0([]),Q0(!0),!0},I1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!k_&&!I_&&!Z_&&!r1&&!T_)return;if(O0){y1.current={value:"",updatedAt:0},Q0(!1);return}C_()},O4=(F)=>{let v=typeof F==="string"?F.trim():"";if(Q0(!1),!v||v===J0){requestAnimationFrame(()=>Q1.current?.focus());return}I0?.(v)},D4=async(F)=>{let v=typeof F==="string"?F.trim():"";if(Q0(!1),!v||typeof h0!=="function"){requestAnimationFrame(()=>Q1.current?.focus());return}try{await h0(v)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>Q1.current?.focus())}},l4=(F)=>{let n=(Array.isArray(F)?F:[]).findIndex((c)=>!c?.disabled);return n>=0?n:0},L1=f0(()=>{let F=[];for(let v of z1){let n=Boolean(v?.archived_at),c=typeof v?.agent_name==="string"?v.agent_name.trim():"",T0=typeof v?.chat_jid==="string"?v.chat_jid.trim():"";if(!c||!T0)continue;F.push({type:"session",key:`session:${T0}`,label:`@${c} — ${T0}${v?.is_active?" active":""}${n?" archived":""}`,chat:v,disabled:n?!I_:!k_})}if(r1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(Z_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:a_});if(T_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[z1,I_,k_,r1,Z_,T_,a_]),A4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof r0!=="function"||s0||N1.current)return;N1.current=!0,Q0(!1);try{await r0()}catch(v){console.warn("Failed to rename session:",v)}finally{N1.current=!1}requestAnimationFrame(()=>Q1.current?.focus())},Y5=async()=>{if(typeof m0!=="function")return;Q0(!1);try{await m0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},g1=async()=>{if(typeof t0!=="function")return;Q0(!1);try{await t0(J0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},X_=(F)=>{if(j)K_(F);else j1(F),J4(F),c4(F);requestAnimationFrame(()=>m_())},e_=(F)=>{let v=j?Y1:c0,n=v&&!v.endsWith(`
`)?`
`:"",c=`${v}${n}${F}`.trimStart();X_(c)},d4=(F)=>{let v=F?.command?.model_label;if(v)return v;let n=F?.command?.message;if(typeof n==="string"){let c=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(c?.[1])return c[1].trim()}return null},G4=async(F)=>{if(j||w0)return;i0(!0);try{let v=await r4("default",F,null,[],null,J0),n=d4(v);g_({model:n??M??null,thinking_level:v?.command?.thinking_level,supports_thinking:v?.command?.supports_thinking});try{let c=await p5(J0);if(c)g_(c)}catch{}return _?.(),!0}catch(v){return console.error("Failed to switch model:",v),alert("Failed to switch model: "+v.message),!1}finally{i0(!1)}},E4=async()=>{await G4("/cycle-model")},X4=async(F)=>{if(!F||w0)return;if(await G4(`/model ${F}`))u0(!1)},S_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let v=F.chat;if(v?.archived_at)D4(v.chat_jid);else O4(v.chat_jid);return}if(F.type==="action"){if(F.action==="new"){Y5();return}if(F.action==="rename"){A4();return}if(F.action==="delete")g1()}},F_=(F)=>{F.preventDefault(),F.stopPropagation(),y1.current={value:"",updatedAt:0},Q0(!1),u0((v)=>!v)},M4=async()=>{if(j)return;I?.(),await x_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},i4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return N0?"queue":void 0},x_=async(F,v,n={})=>{let{includeMedia:c=!0,includeFileRefs:T0=!0,includeMessageRefs:J1=!0,clearAfterSubmit:S1=!0,recordHistory:f1=!0}=n||{},N4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:c0,n4=typeof N4==="string"?N4:"";if(!n4.trim()&&(c?D1.length===0:!0)&&(T0?X.length===0:!0)&&(J1?V.length===0:!0))return;W0(!1),p0([]),k0(!1),X0([]),Q0(!1),__(null);let q5=c?[...D1]:[],K5=T0?[...X]:[],N_=J1?[...V]:[],d1=n4.trim();if(f1&&d1){let k4=g0.current,F1=b_(k4.filter((_4)=>_4!==d1));if(F1.push(d1),F1.length>200)F1.splice(0,F1.length-200);g0.current=F1,$_(F1),P1.current=-1,A_.current=""}let G5=()=>{if(c)_1([...q5]);if(T0)E0?.(K5);if(J1)o0?.(N_);j1(d1),requestAnimationFrame(()=>m_())};if(S1)j1(""),_1([]),N?.(),O?.();(async()=>{try{if(await $0?.({content:d1,submitMode:v,fileRefs:K5,messageRefs:N_,mediaFiles:q5})){_?.();return}let F1=[];for(let z_ of q5){let T4=await v6(z_);F1.push(T4.id)}let _4=K5.length?`Files:
${K5.map((z_)=>`- ${z_}`).join(`
`)}`:"",X5=N_.length?`Referenced messages:
${N_.map((z_)=>`- message:${z_}`).join(`
`)}`:"",X8=F1.length?`Attachments:
${F1.map((z_,T4)=>{let K6=q5[T4]?.name||`attachment-${T4+1}`;return`- attachment:${z_} (${K6})`}).join(`
`)}`:"",V_=[d1,_4,X5,X8].filter(Boolean).join(`

`),I4=await r4("default",V_,null,F1,i4(v),J0);if(_0?.(I4),I4?.command){g_({model:I4.command.model_label??M??null,thinking_level:I4.command.thinking_level,supports_thinking:I4.command.supports_thinking});try{let z_=await p5(J0);if(z_)g_(z_)}catch{}}_?.()}catch(k4){if(S1)G5();let F1=k4?.message||"Failed to send message.";__(F1),y0?.(F1),console.error("Failed to post:",k4)}})()},z=(F)=>{Y0?.(F)},T=C((F)=>{if(j||!D0&&!O0||F?.isComposing)return!1;let v=()=>{F.preventDefault?.(),F.stopPropagation?.()},n=()=>{y1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(v(),n(),D0)u0(!1);if(O0)Q0(!1);return!0}if(D0){if(F.key==="ArrowDown"){if(v(),n(),y.length>0)M0((c)=>(c+1)%y.length);return!0}if(F.key==="ArrowUp"){if(v(),n(),y.length>0)M0((c)=>(c-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return v(),n(),X4(y[Math.max(0,Math.min(F0,y.length-1))]),!0;if(o6(F)&&y.length>0){v();let c=r6(y1.current,F.key);y1.current=c;let T0=s6(y,c.value,F0,(J1)=>J1);if(T0>=0)M0(T0);return!0}}if(O0){if(F.key==="ArrowDown"){if(v(),n(),L1.length>0)K1((c)=>(c+1)%L1.length);return!0}if(F.key==="ArrowUp"){if(v(),n(),L1.length>0)K1((c)=>(c-1+L1.length)%L1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&L1.length>0)return v(),n(),S_(L1[Math.max(0,Math.min(b0,L1.length-1))]),!0;if(o6(F)&&L1.length>0){v();let c=r6(y1.current,F.key);y1.current=c;let T0=s6(L1,c.value,b0,(J1)=>J1.label);if(T0>=0)K1(T0);return!0}}return!1},[j,D0,O0,y,F0,L1,b0,X4]),w=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),K_(""),K?.();return}if(T(F))return;let v=Q1.current?.value??(j?Y1:c0);if(M2(F,v,{searchMode:j,showSessionSwitcherButton:K4})){F.preventDefault(),C_();return}if(v0&&H0.length>0){let n=Q1.current?.value??(j?Y1:c0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))k0(!1),X0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),S0((c)=>(c+1)%H0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),S0((c)=>(c-1+H0.length)%H0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),p_(H0[R0]);return}if(F.key==="Escape"){F.preventDefault(),k0(!1),X0([]);return}}}if(a&&q1.length>0){let n=Q1.current?.value??(j?Y1:c0);if(!String(n||"").startsWith("/"))W0(!1),p0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),k1((c)=>(c+1)%q1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),k1((c)=>(c-1+q1.length)%q1.length);return}if(F.key==="Tab"){F.preventDefault(),h_(q1[x1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!v.includes(" ")){F.preventDefault();let T0=q1[x1];W0(!1),p0([]),x_(T0.name);return}}if(F.key==="Escape"){F.preventDefault(),W0(!1),p0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let n=Q1.current;if(!n)return;let c=n.value||"",T0=n.selectionStart===0&&n.selectionEnd===0,J1=n.selectionStart===c.length&&n.selectionEnd===c.length;if(F.key==="ArrowUp"&&T0||F.key==="ArrowDown"&&J1){let S1=g0.current;if(!S1.length)return;F.preventDefault();let f1=P1.current;if(F.key==="ArrowUp"){if(f1===-1)A_.current=c,f1=S1.length-1;else if(f1>0)f1-=1;P1.current=f1,X_(S1[f1]||"")}else{if(f1===-1)return;if(f1<S1.length-1)f1+=1,P1.current=f1,X_(S1[f1]||"");else P1.current=-1,X_(A_.current||""),A_.current=""}requestAnimationFrame(()=>{let N4=Q1.current;if(!N4)return;let n4=N4.value.length;N4.selectionStart=n4,N4.selectionEnd=n4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else x_(v,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else x_(v)},f=(F)=>{let v=Array.from(F||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!v.length)return;_1((n)=>[...n,...v]),__(null)},o=(F)=>{f(F.target.files),F.target.value=""},q0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current+=1,M1(!0)},U0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),E1.current=Math.max(0,E1.current-1),E1.current===0)M1(!1)},L0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";M1(!0)},j0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current=0,M1(!1),f(F.dataTransfer?.files||[])},C0=(F)=>{if(j)return;let v=F.clipboardData?.items;if(!v||!v.length)return;let n=[];for(let c of v){if(c.kind!=="file")continue;let T0=c.getAsFile?.();if(T0)n.push(T0)}if(n.length>0)F.preventDefault(),f(n)},w1=(F)=>{_1((v)=>v.filter((n,c)=>c!==F))},Y_=()=>{__(null),_1([]),N?.(),O?.()},l1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:v,longitude:n,accuracy:c}=F.coords,T0=`${v.toFixed(5)}, ${n.toFixed(5)}`,J1=Number.isFinite(c)?` ±${Math.round(c)}m`:"",S1=`https://maps.google.com/?q=${v},${n}`,f1=`Location: ${T0}${J1} ${S1}`;e_(f1)},(F)=>{let v=F?.message||"Unable to retrieve location.";alert(`Location error: ${v}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!D0)return;y1.current={value:"",updatedAt:0},X1(!0),p5(J0).then((F)=>{let v=Array.isArray(F?.models)?F.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];v.sort((n,c)=>n.localeCompare(c,void 0,{sensitivity:"base"})),t(v),g_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),t([])}).finally(()=>{X1(!1)})},[D0,M]),g(()=>{if(j)u0(!1),Q0(!1),W0(!1),p0([]),k0(!1),X0([])},[j]),g(()=>{if(O0&&!K4)Q0(!1)},[O0,K4]),g(()=>{if(!D0)return;let F=y.findIndex((v)=>v===M);M0(F>=0?F:0)},[D0,y,M]),g(()=>{if(!O0)return;K1(l4(L1)),y1.current={value:"",updatedAt:0}},[O0,J0]),g(()=>{if(!D0)return;let F=(v)=>{let n=f_.current,c=$5.current,T0=v.target;if(n&&n.contains(T0))return;if(c&&c.contains(T0))return;u0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[D0]),g(()=>{if(!O0)return;let F=(v)=>{let n=b4.current,c=b1.current,T0=v.target;if(n&&n.contains(T0))return;if(c&&c.contains(T0))return;Q0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),g(()=>{if(j||!D0&&!O0)return;let F=(v)=>{T(v)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,D0,O0,T]),g(()=>{if(!D0)return;let F=f_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,F0,y]),g(()=>{if(!O0)return;let F=b4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,b0,L1.length]),g(()=>{let F=()=>{let J1=L_.current?.clientWidth||0;Y4((S1)=>S1===J1?S1:J1)};F();let v=L_.current,n=0,c=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,F()})},T0=null;if(v&&typeof ResizeObserver<"u")T0=new ResizeObserver(()=>c()),T0.observe(v);if(typeof window<"u")window.addEventListener("resize",c);return()=>{if(n)cancelAnimationFrame(n);if(T0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",c)}},[j,M,C1?.agent_name,K4,D?.percent]);let S5=(F)=>{let v=F.target.value;if(__(null),O0)Q0(!1);m_(F.target),X_(v)};return g(()=>{requestAnimationFrame(()=>m_())},[c0,Y1,j]),g(()=>{if(!u_)return;G_(Date.now());let F=setInterval(()=>G_(Date.now()),1000);return()=>clearInterval(F)},[u_,z0?.started_at,z0?.startedAt]),g(()=>{if(j)return;c4(c0)},[c1,J0,c0,j]),L`
        <div class="compose-box">
            ${$1&&!j&&L`
                <${_$}
                    items=${p}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${d}
                    onOpenFilePill=${S}
                />
            `}
            ${z0&&L`
                <div
                    class=${`compose-inline-status${u_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${C5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${P5}</span>
                        ${B1&&L`<span class="compose-inline-status-elapsed">${B1}</span>`}
                    </div>
                    ${C5&&L`<div class="compose-inline-status-detail">${C5}</div>`}
                </div>
            `}
            ${W_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${W_}</div>
            `}
            <div
                class=${`compose-input-wrapper${h1?" drag-active":""}`}
                onDragEnter=${q0}
                onDragOver=${L0}
                onDragLeave=${U0}
                onDrop=${j0}
            >
                <div class="compose-input-main">
                    ${Q5&&L`
                        <div class="compose-file-refs">
                            ${V.map((F)=>{return L`
                                    <${d_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>W?.(F)}
                                    />
                                `})}
                            ${X.map((F)=>{let v=F.split("/").pop()||F;return L`
                                    <${d_}
                                        prefix="compose"
                                        label=${v}
                                        title=${F}
                                        onClick=${()=>S?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(F)}
                                    />
                                `})}
                            ${D1.map((F,v)=>{let n=F?.name||`attachment-${v+1}`;return L`
                                    <${d_}
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
                                onClick=${Y_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof G0==="function"&&L`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>G0?.()}
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
                        value=${j?Y1:c0}
                        onInput=${S5}
                        onKeyDown=${w}
                        onPaste=${C0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${v0&&H0.length>0&&L`
                        <div class="slash-autocomplete" ref=${q4}>
                            ${H0.map((F,v)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${v===R0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),p_(F)}}
                                    onMouseEnter=${()=>S0(v)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${a&&q1.length>0&&L`
                        <div class="slash-autocomplete" ref=${o1}>
                            ${q1.map((F,v)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${v===x1?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),h_(F)}}
                                    onMouseEnter=${()=>k1(v)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D0&&!j&&L`
                        <div class="compose-model-popup" ref=${f_} tabIndex="-1" onKeyDown=${T}>
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
                                        class=${`compose-model-popup-item${F0===v?" active":""}${M===F?" current-model":""}`}
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
                        <div class="compose-model-popup" ref=${b4} tabIndex="-1" onKeyDown=${T}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return k2(C1,J0)})()}
                                    </div>
                                `}
                                ${!M_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${M_&&z1.map((F,v)=>{let n=Boolean(F.archived_at),T0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!n&&typeof t0==="function",J1=R8(F,{currentChatJid:J0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${b0===v?" active":""}`}
                                                onClick=${()=>{if(n){D4(F.chat_jid);return}O4(F.chat_jid)}}
                                                disabled=${n?!I_:!k_}
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
                            ${(r1||Z_||T_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${r1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${L1.findIndex((F)=>F.key==="action:new")===b0?" active":""}`}
                                            onClick=${()=>{Y5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${Z_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${L1.findIndex((F)=>F.key==="action:rename")===b0?" active":""}`}
                                            onClick=${(F)=>{A4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${a_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${T_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${L1.findIndex((F)=>F.key==="action:delete")===b0?" active":""}`}
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
                <div class="compose-footer" ref=${L_}>
                    ${!j&&M&&L`
                    <div class="compose-meta-row">
                        ${!j&&M&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${$5}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${Z5}
                                    aria-label="Open model picker"
                                    onClick=${F_}
                                    disabled=${w0}
                                >
                                    ${w0?"Switching…":H1}
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
                            <${pZ} usage=${D} onCompact=${M4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${K4&&L`
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
                            ref=${b1}
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
                        onClick=${j?K:q}
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
                    ${j5&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${s_?" active":""}`}
                            onClick=${r}
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
                                disabled=${X.includes(x)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${o} />
                        </label>
                    `}
                    ${(A0!=="connected"||!j)&&L`
                        <div class="compose-send-stack">
                            ${A0!=="connected"&&L`
                                <span class="compose-connection-status connection-status ${A0}" title=${Q_}>
                                    ${E_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{x_()}}
                                    disabled=${!j_}
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
    `}var Q$="piclaw_theme",b8="piclaw_tint",x2="piclaw_chat_themes",n5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},y2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},C2={default:{label:"Default",mode:"auto",light:n5,dark:y2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},iZ=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],s4={theme:"default",tint:null},R2="light",$$=!1;function u8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function O5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function nZ(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),K=parseInt(Z[3],10);if(![Y,q,K].every((G)=>Number.isFinite(G)))return null;let X=`#${[Y,q,K].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:K,hex:X}}function w2(_){return O5(_)||nZ(_)}function i5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function j$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function oZ(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function rZ(_){return oZ(_)>0.4?"#000000":"#ffffff"}function f2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z$(_){return C2[_]||C2.default}function sZ(_){return _.mode==="auto"?f2():_.mode}function v2(_,$){let j=Z$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||n5}function b2(_,$,j){let Q=w2($);if(!Q)return _;let Z=O5(_.bgPrimary),Y=O5(_.bgSecondary),q=O5(_.bgHover),K=O5(_.borderColor);if(!Z||!Y||!q||!K)return _;let G=O5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:i5(Z,Q,0.08),bgSecondary:i5(Y,Q,0.12),bgHover:i5(q,Q,0.16),borderColor:i5(K,Q,0.08),accent:Q.hex,accentHover:G?i5(Q,G,0.18):Q.hex}}function aZ(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=w2(Q),Y=Z?j$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?j$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Z?j$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X=Z?rZ(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":K,"--accent-contrast-text":X,"--danger-color":_.danger||n5.danger,"--success-color":_.success||n5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([N,V])=>{if(V)j.style.setProperty(N,V)})}function tZ(){if(typeof document>"u")return;let _=document.documentElement;iZ.forEach(($)=>_.style.removeProperty($))}function J5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function S2(_){let $=u8(s4?.theme||"default"),j=s4?.tint?String(s4.tint).trim():null,Q=v2($,_);if($==="default"&&j)Q=b2(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?y2.bgPrimary:n5.bgPrimary}function eZ(_,$){if(typeof document>"u")return;let j=J5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=J5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",S2("light"));let Z=J5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",S2("dark"));let Y=J5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=J5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let K=J5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function _Y(){if(typeof window>"u")return;let _={...s4,mode:R2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function u2(){try{let _=J_(x2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function $Y(_,$,j){let Q=u2();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};G1(x2,JSON.stringify(Q))}function jY(_){if(!_)return null;return u2()[_]||null}function g2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function Y$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=u8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=Z$(j),Y=sZ(Z),q=v2(j,Y);s4={theme:j,tint:Q},R2=Y;let K=document.documentElement;K.dataset.theme=Y,K.dataset.colorTheme=j,K.dataset.tint=Q?String(Q):"",K.style.colorScheme=Y;let X=q;if(j==="default"&&Q)X=b2(q,Q,Y);if(j==="default"&&!Q)tZ();else aZ(X,Y);if(eZ(X.bgPrimary,Y),_Y(),$.persist!==!1)if(G1(Q$,j),Q)G1(b8,Q);else G1(b8,"")}function v8(){if(Z$(s4.theme).mode!=="auto")return;Y$(s4,{persist:!1})}function m2(){if(typeof window>"u")return()=>{};let _=g2(),$=jY(_),j=$?u8($.theme||"default"):u8(J_(Q$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=J_(b8);return Z?Z.trim():null})();if(Y$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!$$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",v8);else if(Z.addListener)Z.addListener(v8);return $$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",v8);else if(Z.removeListener)Z.removeListener(v8);$$=!1}}return()=>{}}function h2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||g2(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if($Y($,j||"default",Q),Y$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")G1(Q$,j||"default"),G1(b8,Q||"")}function p2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return f2()}var g8=/#(\w+)/g,QY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),ZY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),YY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),qY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},KY=new Set(["http:","https:","mailto:",""]);function q$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function a4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!KY.has(Q.protocol))return null;return Q.href}catch{return null}}function c2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let K=q.tagName.toLowerCase();if(!ZY.has(K)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let X=qY[K]||new Set;for(let G of Array.from(q.attributes)){let N=G.name.toLowerCase(),V=G.value;if(N.startsWith("on")){q.removeAttribute(G.name);continue}if(N.startsWith("data-")||N.startsWith("aria-"))continue;if(X.has(N)||YY.has(N)){if(N==="href"){let W=a4(V);if(!W)q.removeAttribute(G.name);else if(q.setAttribute(G.name,W),K==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(N==="src"){let W=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,O=a4(W,{allowDataImage:K==="img"});if(!O)q.removeAttribute(G.name);else q.setAttribute(G.name,O)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function l2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function m8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=l2(j);if(Z===j)break;j=Z}return j}function GY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let K of j){if(!Y&&K.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&K.trim().match(/^```\s*$/)){let X=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${X}@@`),Y=!1,q=[];continue}if(Y)q.push(K);else Z.push(K)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function XY(_){if(!_)return _;return m8(_,5)}function NY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function VY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function BY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=XY(Y);return`<div class="mermaid-container" data-mermaid="${NY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function d2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var WY={span:new Set(["title","class","lang","dir"])};function UY(_,$){let j=WY[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let K=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${q$(K)}"`)}return Q.join("")}function i2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,K=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[X=""]=K.split(/\s+/,1),G=X.toLowerCase();if(!G||!QY.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let N=K.slice(X.length).trim(),V=UY(G,N);return`<${G}${V}>`})}function n2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function o2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function LY(_){if(!window.katex)return _;let $=(q)=>l2(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let K=[],X=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let N=K.length;return K.push(G),`@@CODE_BLOCK_${N}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let N=K.length;return K.push(G),`@@CODE_INLINE_${N}@@`}),{html:X,blocks:K}},Q=(q,K)=>{if(!K.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,G)=>{let N=Number(G);return K[N]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,K,X)=>{try{let G=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${K}${G}`}catch(G){return`<span class="math-error" title="${q$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,K,X)=>{if(/\s$/.test(X))return q;try{let G=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${K}${G}`}catch(G){return`${K}<span class="math-error" title="${q$(G.message)}">$${X}$</span>`}}),Q(Y,Z.blocks)}function FY(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(g8.lastIndex=0,!g8.test(q))continue;g8.lastIndex=0;let K=Y.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let X=q.split(g8);if(X.length<=1)continue;let G=$.createDocumentFragment();X.forEach((N,V)=>{if(V%2===1){let W=$.createElement("a");W.setAttribute("href","#"),W.className="hashtag",W.setAttribute("data-hashtag",N),W.textContent=`#${N}`,G.appendChild(W)}else G.appendChild($.createTextNode(N))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function zY(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function HY(_){let $=zY(_||""),{text:j,blocks:Q}=GY($),Z=m8(j,2),q=d2(Z).replace(/</g,"&lt;");return{safeHtml:i2(q),mermaidBlocks:Q}}function O_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=HY(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=n2(Y),Y=o2(Y),Y=LY(Y),Y=FY(Y),Y=BY(Y,Z),Y=c2(Y,j),Y}function o5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=m8($,2),Z=d2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=i2(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=n2(q),q=o2(q),q=c2(q),q}function JY(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((X)=>{let[G,N]=X.split(",").map(Number);return{x:G,y:N}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let K=[`M ${q[0].x},${q[0].y}`];for(let X=1;X<q.length-1;X++){let G=q[X-1],N=q[X],V=q[X+1],W=N.x-G.x,O=N.y-G.y,M=V.x-N.x,k=V.y-N.y,A=Math.sqrt(W*W+O*O),J=Math.sqrt(M*M+k*k),D=Math.min($,A/2,J/2);if(D<0.5){K.push(`L ${N.x},${N.y}`);continue}let I=N.x-W/A*D,i=N.y-O/A*D,h=N.x+M/J*D,r=N.y+k/J*D,R=W*k-O*M>0?1:0;K.push(`L ${I},${i}`),K.push(`A ${D},${D} 0 0 ${R} ${h},${r}`)}return K.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${K.join(" ")}"${Y}/>`})}async function W4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=p2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let K=q.dataset.mermaid,X=VY(K||""),G=m8(X,2),N=await $(G,{...Z,transparent:!0});N=JY(N),q.innerHTML=N,q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${K.message}`,q.innerHTML="",q.appendChild(X),q.removeAttribute("data-mermaid")}}function r2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function s2(_){return String(_||"").trim()||"web:default"}function a2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function t2(_){if(!_)return!1;return _.status!=="running"}function e2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function _7({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=P(null),Y=P(null),q=_?.thinking?o5(_.thinking):"",K=_?.answer?O_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(Z.current&&q)W4(Z.current).catch(()=>{})},[q]),g(()=>{if(Y.current&&K)W4(Y.current).catch(()=>{})},[K]),!_)return null;let X=_.status==="running",G=Boolean(String(_.answer||"").trim()),N=Boolean(String(_.thinking||"").trim()),V=a2(_),W=t2(_),O=!X&&G,M=X?"Thinking…":_.status==="error"?"Error":"Done";return L`
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
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </div>
            `}

            ${W&&L`
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
    `}function OY(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function DY(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function y4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function x0(_){return typeof _==="string"&&_.trim()?_.trim():null}function j7(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var Q7="__PICLAW_WIDGET_HOST__:";function $7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function K$(_,$){if(!_||_.type!=="generated_widget")return null;let j=OY(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:j7(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Z7(_){if(!_||typeof _!=="object")return null;let $=DY(_),j=x0(_?.widget_id)||x0(_?.widgetId)||x0(_?.tool_call_id)||x0(_?.toolCallId),Q=x0(_?.tool_call_id)||x0(_?.toolCallId),Z=x0(_?.turn_id)||x0(_?.turnId),Y=x0(_?.title)||x0(_?.name)||"Generated widget",q=x0(_?.subtitle)||"",K=x0(_?.description)||q,X=x0(_?.status),G=X==="loading"||X==="streaming"||X==="final"||X==="error"?X:"streaming";return{title:Y,subtitle:q,description:K,originPostId:y4(_?.origin_post_id)??y4(_?.originPostId),originChatJid:x0(_?.origin_chat_jid)||x0(_?.originChatJid)||x0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:j7(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:y4(_?.width),height:y4(_?.height),error:x0(_?.error)}}function Y7(_){return K$(_,null)!==null}function m1(_){let $=x0(_?.toolCallId)||x0(_?.tool_call_id);if($)return $;let j=x0(_?.widgetId)||x0(_?.widget_id);if(j)return j;let Q=y4(_?.originPostId)??y4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function q7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function K7(_){return q7(_)?"allow-downloads allow-scripts":"allow-downloads"}function h8(_){return{title:x0(_?.title)||"Generated widget",widgetId:x0(_?.widgetId)||x0(_?.widget_id),toolCallId:x0(_?.toolCallId)||x0(_?.tool_call_id),turnId:x0(_?.turnId)||x0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:x0(_?.status)||"final"}}function p8(_){return{...h8(_),subtitle:x0(_?.subtitle)||"",description:x0(_?.description)||"",error:x0(_?.error)||null,width:y4(_?.width),height:y4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function c8(_){return`${Q7}${JSON.stringify(p8(_))}`}function G7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=x0(_.text)||x0(_.content)||x0(_.message)||x0(_.prompt)||x0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=x0(j.text)||x0(j.content)||x0(j.message)||x0(j.prompt)||x0(j.value);if(Q)return Q}return null}function X7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function N7(_){let $=x0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return x0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function AY(_){let $=h8(_);return`<script>
(function () {
  const meta = ${$7($)};
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

  const windowNamePrefix = ${$7(Q7)};
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
</script>`}function V7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let K=q7(_),X=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,N=K?AY(_):"";return`<!doctype html>
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
<body>${G}</body>
</html>`}function B7({widget:_,onClose:$,onWidgetEvent:j}){let Q=P(null),Z=P(!1),Y=f0(()=>V7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let J=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),g(()=>{Z.current=!1},[Y]),g(()=>{if(!_)return;let J=Q.current;if(!J)return;let D=(e)=>{let R=c8(_),x=e==="widget.init"?h8(_):p8(_);try{J.name=R}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:e,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x},"*")}catch{}},I=()=>{D("widget.init"),D("widget.update")},i=()=>{Z.current=!0,I()};J.addEventListener("load",i);let r=[0,40,120,300,800].map((e)=>setTimeout(I,e));return()=>{J.removeEventListener("load",i),r.forEach((e)=>clearTimeout(e))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let J=Q.current;if(!J?.contentWindow)return;let D=c8(_),I=p8(_);try{J.name=D}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let J=(D)=>{let I=D?.data;if(!I||I.__piclawGeneratedWidget!==!0)return;let i=Q.current,h=m1(_),r=m1({widgetId:I.widgetId,toolCallId:I.toolCallId});if(r&&h&&r!==h)return;if(!r&&i?.contentWindow&&D.source!==i.contentWindow)return;j?.(I,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",N=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",W=N==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",M=!Y,k=N7(_),A=K7(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${X}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${W} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${X}</div>
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
                    ${M?L`<div class="floating-widget-empty">${k}</div>`:L`
                            <iframe
                                ref=${Q}
                                class="floating-widget-frame"
                                title=${X}
                                name=${c8(_)}
                                sandbox=${A}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var W7="PiClaw";function G$(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,K=Y[q],X=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",N=G?G:null,V=j||X==="PiClaw".toLowerCase()||X==="pi";return{letter:Z,color:K,image:N||(V?"/static/icon-192.png":null)}}function U7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function L7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function F7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",K=Y?.dataset?.tint||"",X=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(X&&(K||q&&q!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var EY=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function X$({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:X,turnId:G,steerQueued:N,onPanelToggle:V,showCorePanels:W=!0,showExtensionPanels:O=!0}){let A=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let R0=a,S0=R0?R0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:R0,totalLines:S0,fullText:R0}}let W0=a.text||"",H0=a.fullText||a.full_text||W0,X0=Number.isFinite(a.totalLines)?a.totalLines:H0?H0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W0,totalLines:X0,fullText:H0}},J=160,D=(a)=>String(a||"").replace(/<\/?internal>/gi,""),I=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},i=(a,W0,H0)=>{let X0=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!X0)return{text:"",omitted:0,totalLines:Number.isFinite(H0)?H0:0,visibleLines:0};let R0=X0.split(`
`),S0=R0.length>W0?R0.slice(0,W0).join(`
`):X0,v0=Number.isFinite(H0)?H0:R0.reduce((i0,D0)=>i0+I(D0),0),k0=S0?S0.split(`
`).reduce((i0,D0)=>i0+I(D0),0):0,w0=Math.max(v0-k0,0);return{text:S0,omitted:w0,totalLines:v0,visibleLines:k0}},h=A(j),r=A(Q),e=A($),R=Boolean(h.text)||h.totalLines>0,x=Boolean(r.text)||r.totalLines>0,H=Boolean(e.fullText?.trim()||e.text?.trim()),S=Boolean(_||H||R||x||Z||Y),p=Array.isArray(q)&&q.length>0;if((!W||!S)&&(!O||!p))return null;let[Y0,d]=m(new Set),[$0,_0]=m(null),[G0,N0]=m(()=>Date.now()),B0=(a)=>d((W0)=>{let H0=new Set(W0),X0=!H0.has(a);if(X0)H0.add(a);else H0.delete(a);if(typeof V==="function")V(a,X0);return H0});g(()=>{d(new Set),_0(null)},[G]);let J0=B4(_);g(()=>{if(!J0)return;N0(Date.now());let a=setInterval(()=>N0(Date.now()),1000);return()=>clearInterval(a)},[J0,_?.started_at,_?.startedAt]);let A0=_?.turn_id||G,E0=F7(A0),o0=N?"turn-dot turn-dot-queued":"turn-dot",y0=(a)=>a,I0=Boolean(_?.last_activity||_?.lastActivity),r0=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":E0,s0=Y?.kind||"info",m0=r0(s0),t0=r0(_?.kind||(J0?"warning":"info")),h0="",$1=_?.title,z0=_?.status;if(_?.type==="plan")h0=$1?`Planning: ${$1}`:"Planning...";else if(_?.type==="tool_call")h0=$1?`Running: ${$1}`:"Running tool...";else if(_?.type==="tool_status")h0=$1?`${$1}: ${z0||"Working..."}`:z0||"Working...";else if(_?.type==="error")h0=$1||"Agent error";else h0=$1||z0||"Working...";if(I0)h0="Last activity just now";let c0=({panelTitle:a,text:W0,fullText:H0,totalLines:X0,maxLines:R0,titleClass:S0,panelKey:v0})=>{let k0=Y0.has(v0),w0=H0||W0||"",i0=v0==="thought"||v0==="draft"?D(w0):w0,D0=typeof R0==="number",u0=k0&&D0,O0=D0?i(i0,R0,X0):{text:i0||"",omitted:0,totalLines:Number.isFinite(X0)?X0:0};if(!i0&&!(Number.isFinite(O0.totalLines)&&O0.totalLines>0))return null;let Q0=`agent-thinking-body${D0?" agent-thinking-body-collapsible":""}`,y=D0?`--agent-thinking-collapsed-lines: ${R0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${k0?"true":"false"}
                data-collapsible=${D0?"true":"false"}
                style=${E0?`--turn-color: ${E0};`:""}
            >
                <div class="agent-thinking-title ${S0||""}">
                    ${E0&&L`<span class=${o0} aria-hidden="true"></span>`}
                    ${a}
                    ${u0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>B0(v0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Q0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:o5(i0)}}
                />
                ${!k0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>B0(v0)}>
                        ▸ ${O0.omitted} more lines
                    </button>
                `}
                ${k0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>B0(v0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},j1=Z?.tool_call?.title,Y1=j1?`Awaiting approval: ${j1}`:"Awaiting approval",K_=J0?f8(_,G0):null,D1=(a,W0,H0=null)=>{let X0=w8(a);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${W0?`--turn-color: ${W0};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${W0&&L`<span class=${o0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${X0}</span>
                    ${H0&&L`<span class="agent-status-elapsed">${H0}</span>`}
                </div>
                ${a.detail&&L`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `},_1=(a,W0,H0,X0,R0,S0,v0,k0=8,w0=8)=>{let i0=Math.max(R0-X0,0.000000001),D0=Math.max(W0-k0*2,1),u0=Math.max(H0-w0*2,1),O0=Math.max(v0-S0,1),Q0=v0===S0?W0/2:k0+(a.run-S0)/O0*D0,y=w0+(u0-(a.value-X0)/i0*u0);return{x:Q0,y}},h1=(a,W0,H0,X0,R0,S0,v0,k0=8,w0=8)=>{if(!Array.isArray(a)||a.length===0)return"";return a.map((i0,D0)=>{let{x:u0,y:O0}=_1(i0,W0,H0,X0,R0,S0,v0,k0,w0);return`${D0===0?"M":"L"} ${u0.toFixed(2)} ${O0.toFixed(2)}`}).join(" ")},M1=(a,W0="")=>{if(!Number.isFinite(a))return"—";return`${Math.abs(a)>=100?a.toFixed(0):a.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${W0}`},q1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],p0=(a,W0)=>{let H0=q1;if(!Array.isArray(H0)||H0.length===0)return"var(--accent-color)";if(H0.length===1||!Number.isFinite(W0)||W0<=1)return H0[0];let R0=Math.max(0,Math.min(Number.isFinite(a)?a:0,W0-1))/Math.max(1,W0-1)*(H0.length-1),S0=Math.floor(R0),v0=Math.min(H0.length-1,S0+1),k0=R0-S0,w0=H0[S0],i0=H0[v0];if(!i0||S0===v0||k0<=0.001)return w0;if(k0>=0.999)return i0;let D0=Math.round((1-k0)*1000)/10,u0=Math.round(k0*1000)/10;return`color-mix(in oklab, ${w0} ${D0}%, ${i0} ${u0}%)`},x1=(a,W0="autoresearch")=>{let H0=Array.isArray(a)?a.map((Q0)=>({...Q0,points:Array.isArray(Q0?.points)?Q0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((Q0)=>Q0.points.length>0):[],X0=H0.map((Q0,y)=>({...Q0,color:p0(y,H0.length)}));if(X0.length===0)return null;let R0=320,S0=120,v0=X0.flatMap((Q0)=>Q0.points),k0=v0.map((Q0)=>Q0.value),w0=v0.map((Q0)=>Q0.run),i0=Math.min(...k0),D0=Math.max(...k0),u0=Math.min(...w0),O0=Math.max(...w0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${X0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${R0} ${S0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${X0.map((Q0)=>{let y=Q0?.key||Q0?.label||"series",t=$0?.panelKey===W0&&$0?.seriesKey===y;return L`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${h1(Q0.points,R0,S0,i0,D0,u0,O0)}
                                        style=${`--agent-series-color: ${Q0.color};`}
                                        onMouseEnter=${()=>_0({panelKey:W0,seriesKey:y})}
                                        onMouseLeave=${()=>_0((F0)=>F0?.panelKey===W0&&F0?.seriesKey===y?null:F0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${X0.flatMap((Q0)=>{let y=typeof Q0?.unit==="string"?Q0.unit:"",t=Q0?.key||Q0?.label||"series";return Q0.points.map((F0,M0)=>{let b0=_1(F0,R0,S0,i0,D0,u0,O0);return L`
                                    <button
                                        key=${`${t}-point-${M0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Q0.color}; left:${b0.x/R0*100}%; top:${b0.y/S0*100}%;`}
                                        onMouseEnter=${()=>_0({panelKey:W0,seriesKey:t,run:F0.run,value:F0.value,unit:y})}
                                        onMouseLeave=${()=>_0((K1)=>K1?.panelKey===W0?null:K1)}
                                        onFocus=${()=>_0({panelKey:W0,seriesKey:t,run:F0.run,value:F0.value,unit:y})}
                                        onBlur=${()=>_0((K1)=>K1?.panelKey===W0?null:K1)}
                                        aria-label=${`${Q0?.label||"Series"} ${M1(F0.value,y)} at run ${F0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${X0.map((Q0)=>{let y=Q0.points[Q0.points.length-1]?.value,t=typeof Q0?.unit==="string"?Q0.unit:"",F0=Q0?.key||Q0?.label||"series",M0=$0?.panelKey===W0&&$0?.seriesKey===F0?$0:null,b0=M0&&Number.isFinite(M0.value)?M0.value:y,K1=M0&&typeof M0.unit==="string"?M0.unit:t,A1=M0&&Number.isFinite(M0.run)?M0.run:null;return L`
                            <div key=${`${F0}-legend`} class=${`agent-series-legend-item${M0?" is-hovered":""}`} style=${`--agent-series-color: ${Q0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Q0.color};`}></span>
                                <span class="agent-series-legend-label">${Q0?.label||"Series"}</span>
                                ${A1!==null&&L`<span class="agent-series-legend-run">run ${A1}</span>`}
                                <span class="agent-series-legend-value">${M1(b0,K1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},k1=(a)=>{if(!a)return null;let W0=typeof a?.key==="string"?a.key:`panel-${Math.random()}`,H0=Y0.has(W0),X0=a?.title||"Extension status",R0=a?.collapsed_text||"",S0=String(a?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),v0=r0(a?.state==="completed"?"success":a?.state==="failed"?"error":a?.state==="stopped"?"warning":"info"),k0=typeof a?.detail_markdown==="string"?a.detail_markdown.trim():"",w0=typeof a?.last_run_text==="string"?a.last_run_text.trim():"",i0=typeof a?.tmux_command==="string"?a.tmux_command.trim():"",D0=Array.isArray(a?.series)?a.series:[],u0=Array.isArray(a?.actions)?a.actions:[],O0=Boolean(k0||i0),Q0=Boolean(k0||D0.length>0||i0),y=[X0,R0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${H0?"true":"false"}
                style=${v0?`--turn-color: ${v0};`:""}
                title=${!H0?y||X0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Q0?B0(W0):null}
                    >
                        ${v0&&L`<span class=${o0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${X0}</span>
                        ${R0&&L`<span class="agent-thinking-title-meta">${R0}</span>`}
                    </button>
                    ${(u0.length>0||Q0&&!H0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${u0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${u0.map((t)=>{let F0=`${W0}:${t?.key||""}`,M0=K?.has?.(F0);return L`
                                            <button
                                                key=${F0}
                                                class=${`agent-thinking-action-btn${t?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>X?.(a,t)}
                                                disabled=${Boolean(M0)}
                                            >
                                                ${M0?"Working…":t?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${Q0&&!H0&&L`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${X0}`}
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
                ${Q0&&H0&&L`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${X0}`}
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
                                        dangerouslySetInnerHTML=${{__html:o5(k0)}}
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
                                                onClick=${()=>X?.(a,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${EY}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${D0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${x1(D0,W0)}
                                    ${w0&&L`<div class="agent-series-chart-note">${w0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${W&&Y&&D1(Y,m0)}
            ${O&&Array.isArray(q)&&q.map((a)=>k1(a))}
            ${W&&_?.type==="intent"&&D1(_,t0,K_)}
            ${W&&Z&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${E0?`--turn-color: ${E0};`:""}>
                    <span class=${o0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Y1}</span>
                </div>
            `}
            ${W&&R&&c0({panelTitle:y0("Planning"),text:h.text,fullText:h.fullText,totalLines:h.totalLines,panelKey:"plan"})}
            ${W&&x&&c0({panelTitle:y0("Thoughts"),text:r.text,fullText:r.fullText,totalLines:r.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${W&&H&&c0({panelTitle:y0("Draft"),text:e.text,fullText:e.fullText,totalLines:e.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${W&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${I0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${E0?`--turn-color: ${E0};`:""}>
                    ${E0&&L`<span class=${o0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!I0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${h0}</span>
                </div>
            `}
        </div>
    `}function z7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",K=Q?.kind||"other",X=Q?.rawInput||{},G=X.command||X.commands&&X.commands[0]||null,N=X.diff||null,V=X.fileName||X.path||null,W=Q?.description||X.description||X.explanation||null,M=(Array.isArray(Q?.locations)?Q.locations:[]).map((I)=>I?.path).filter((I)=>Boolean(I)),k=Array.from(new Set([V,...M].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let A=async(I)=>{try{await M8(j,I,Y||null),$()}catch(i){console.error("Failed to respond to agent request:",i)}},J=async()=>{try{await u6(q,`Auto-approved: ${q}`),await M8(j,"approved",Y||null),$()}catch(I){console.error("Failed to add to whitelist:",I)}},D=Z&&Z.length>0;return L`
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
                ${(W||G||N||k.length>0)&&L`
                    <div class="agent-request-body">
                        ${W&&L`
                            <div class="agent-request-description">${W}</div>
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
    `}function H7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let X=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${K}`}function r5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function w_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function t4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var MY=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),kY=new Set(["text/markdown"]),IY=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),TY=new Set(["application/vnd.jgraph.mxfile"]);function s5(_){return typeof _==="string"?_.trim().toLowerCase():""}function PY(_){let $=s5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function CY(_){let $=s5(_);return!!$&&$.endsWith(".pdf")}function SY(_){let $=s5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function a5(_,$){let j=s5(_);if(PY($)||TY.has(j))return"drawio";if(CY($)||j==="application/pdf")return"pdf";if(SY($)||IY.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(MY.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function J7(_){let $=s5(_);return kY.has($)}function O7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function xY(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function yY(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function D7(_){return xY(_)||yY(_)}function l8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function RY(_,$){let j=Math.max(l8(_),l8($)),Q=Math.min(l8(_),l8($));return(j+0.05)/(Q+0.05)}function wY(_,$,j="#ffffff"){let Q=D7(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let K=D7(q);if(!K)continue;let X=RY(Q,K);if(X>Y)Z=q,Y=X}return Z}function N$(){let _=getComputedStyle(document.documentElement),$=(M,k)=>{for(let A of M){let J=_.getPropertyValue(A).trim();if(J)return J}return k},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),N=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),W=$(["--font-family"],"system-ui, sans-serif"),O=wY(K,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:K,good:X,warning:G,attention:N,border:V,fontFamily:W,buttonTextColor:O}}function A7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:K,border:X,fontFamily:G}=N$();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var fY=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),E7=!1,d8=null,M7=!1;function V$(_){_.querySelector(".adaptive-card-notice")?.remove()}function vY(_,$,j="error"){V$(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function bY(_,$=(j)=>O_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function uY(_=($)=>O_($,null)){return($,j)=>{try{let Q=bY($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function gY(_){if(M7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=uY(),M7=!0}async function mY(){if(E7)return;if(d8)return d8;return d8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{E7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),d8}function hY(){return globalThis.AdaptiveCards}function pY(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function cY(_){return fY.has(_)}function W$(_){if(!Array.isArray(_))return[];return _.filter(pY)}function lY(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function B$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>B$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${B$(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function dY(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return B$($);return typeof $==="string"?$:String($)}function iY(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((K)=>Q(K));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=dY(q.type,j[q.id],q);for(let[K,X]of Object.entries(q))if(Array.isArray(X)||X&&typeof X==="object")q[K]=Q(X);return q};return Q(_)}function nY(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function oY(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function rY(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=oY(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function k7(_,$,j){if(!cY($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await mY()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=hY();gY(Q);let Z=new Q.AdaptiveCard,Y=N$();Z.hostConfig=new Q.HostConfig(A7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:iY($.payload,q);Z.parse(K),Z.onExecuteAction=(N)=>{let V=lY(N);if(j?.onAction)V$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((W)=>{console.error("[adaptive-card] Action failed:",W);let O=W instanceof Error?W.message:String(W||"Action failed.");vY(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let X=Z.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=rY($);if(G){_.classList.add("adaptive-card-finished");let N=document.createElement("div");N.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=G.label,N.appendChild(V),G.detail){let W=document.createElement("span");W.className="adaptive-card-status-detail",W.textContent=G.detail,N.appendChild(W)}_.appendChild(N)}if(V$(_),_.appendChild(X),G)nY(X);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function t5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>t5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${t5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function I7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:t5(j)})).filter(($)=>$.value)}function sY(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function U$(_){if(!Array.isArray(_))return[];return _.filter(sY)}function T7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=t5(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=I7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function P7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=I7(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):t5(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function D5({children:_,className:$=""}){let j=P(null);return g(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{x4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),m5(()=>{let Q=j.current;if(!Q)return;return x4(_,Q),()=>{x4(null,Q)}},[_]),null}function aY(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?w_($):null},{label:"Added",value:_?.created_at?t4(_.created_at):null}].filter((Q)=>Q.value)}function tY(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=R_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function C7({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=f0(()=>a5($?.content_type,Q),[$?.content_type,Q]),Y=O7(Z),q=f0(()=>J7($?.content_type),[$?.content_type]),[K,X]=m(Z==="text"),[G,N]=m(""),[V,W]=m(null),O=P(null),M=f0(()=>aY($),[$]),k=f0(()=>tY(_,Q,Z),[_,Q,Z]),A=f0(()=>{if(!q||!G)return"";return O_(G)},[q,G]);return g(()=>{let J=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!O.current||!A)return;W4(O.current);return},[A]),g(()=>{let J=!1;async function D(){if(Z!=="text"){X(!1),W(null);return}X(!0),W(null);try{let I=await p6(_);if(!J)N(I)}catch{if(!J)W("Failed to load text preview.")}finally{if(!J)X(!1)}}return D(),()=>{J=!0}},[_,Z]),L`
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
                                href=${R_(_)}
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
                        ${K&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&V&&L`<div class="attachment-preview-state">${V}</div>`}
                        ${!K&&!V&&Z==="image"&&L`
                            <img class="attachment-preview-image" src=${R_(_)} alt=${Q} />
                        `}
                        ${!K&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&k&&L`
                            <iframe class="attachment-preview-frame" src=${k} title=${Q}></iframe>
                        `}
                        ${!K&&!V&&Z==="drawio"&&L`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!K&&!V&&Z==="text"&&q&&L`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:A}}
                            />
                        `}
                        ${!K&&!V&&Z==="text"&&!q&&L`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!K&&!V&&Z==="unsupported"&&L`
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
        </${D5}>
    `}function S7({src:_,onClose:$}){return g(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${D5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${D5}>
    `}function eY({mediaId:_,onPreview:$}){let[j,Q]=m(null);if(g(()=>{F5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?w_(Y):"",X=a5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${R_(_)} download=${Z} class="file-attachment-main">
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
                ${X}
            </button>
        </div>
    `}function _q({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=m(null);g(()=>{if(!Number.isFinite(j))return;F5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?R_(j):null,X=a5(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Y}>
            ${q?L`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${d_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:L`
                    <${d_}
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
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Q})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function i8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?t4(Q):null;return L`
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
    `}function $q({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?w_(_.size):"",Z=_.mime_type||"",Y=Zq(Z),q=a4(_.uri);return L`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
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
    `}function jq({block:_}){let[$,j]=m(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&L`
                ${Z&&L`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&L`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(X),N=document.createElement("a");N.href=G,N.download=Q.split("/").pop()||"resource",N.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function Qq({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=K$(_,$),Z=Y7(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",K=Q?.description||_.description||_.subtitle||"",X=_.open_label||"Open widget",G=(N)=>{if(N.preventDefault(),N.stopPropagation(),!Q)return;j?.(Q)};return L`
        <div class="generated-widget-launch" onClick=${(N)=>N.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${K&&L`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${G}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${X}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function Zq(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Yq({preview:_}){let $=a4(_.url),j=a4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return L`
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
    `}function qq(_,$){return typeof _==="string"?_:""}var Kq=1800,Gq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Xq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Nq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function Vq(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function Bq(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let K=q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=Xq,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=Nq,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Gq,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Z(K,"idle"),q.appendChild(K);let X=async(G)=>{G.preventDefault(),G.stopPropagation();let V=Y.querySelector("code")?.textContent||"",W=await Vq(V);Z(K,W?"success":"error");let O=j.get(K);if(O)clearTimeout(O);let M=setTimeout(()=>{Z(K,"idle"),j.delete(K)},Kq);j.set(K,M)};K.addEventListener("click",X),Q.push(()=>{K.removeEventListener("click",X);let G=j.get(K);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function Wq(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),X=[...q,...K].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:Z}}function Uq(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),X=[...q,...K].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:Z}}function Lq(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let N=j[G].trim();if((N==="Images:"||N==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let N=G.replace(/^\s*-\s+/,"").trim(),V=N.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||N.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let W=V[1],O=(V[2]||"").trim()||W;Z.push({id:W,label:O,raw:N})}else Z.push({id:null,label:N,raw:N})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),K=j.slice(Y),X=[...q,...K].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:Z}}function Fq(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function zq(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(Fq).sort((N,V)=>V.length-N.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),K=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),X=[],G;while(G=K.nextNode())X.push(G);for(let N of X){let V=N.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let W=N.parentElement;if(W&&W.closest("code, pre, script, style"))continue;let O=V.split(Z).filter((k)=>k!=="");if(O.length===0)continue;let M=q.createDocumentFragment();for(let k of O)if(Y.test(k)){let A=q.createElement("mark");A.className="search-highlight-term",A.textContent=k,M.appendChild(A)}else M.appendChild(q.createTextNode(k));N.parentNode.replaceChild(M,N)}return q.body.innerHTML}function x7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:K,userAvatarUrl:X,userAvatarBackground:G,onDelete:N,isThreadReply:V,isThreadPrev:W,isThreadNext:O,isRemoving:M,highlightQuery:k,onFileRef:A,onOpenWidget:J}){let[D,I]=m(null),i=P(null),h=_.data,r=h.type==="agent_response",e=K||"You",R=r?Y||W7:e,x=r?G$(Y,q,!0):G$(e,X),H=typeof G==="string"?G.trim().toLowerCase():"",S=!r&&x.image&&(H==="clear"||H==="transparent"),p=r&&Boolean(x.image),Y0=`background-color: ${S||p?"transparent":x.color}`,d=h.content_meta,$0=Boolean(d?.truncated),_0=Boolean(d?.preview),G0=$0&&!_0,N0=$0?{originalLength:Number.isFinite(d?.original_length)?d.original_length:h.content?h.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,B0=h.content_blocks||[],J0=h.media_ids||[],A0=qq(h.content,h.link_previews),{content:E0,fileRefs:o0}=Wq(A0),{content:y0,messageRefs:I0}=Uq(E0),{content:r0,attachments:s0}=Lq(y0);A0=r0;let m0=W$(B0),t0=U$(B0),h0=m0.length===1&&typeof m0[0]?.fallback_text==="string"?m0[0].fallback_text.trim():"",$1=t0.length===1?T7(t0[0]).trim():"",z0=Boolean(h0)&&A0?.trim()===h0||Boolean($1)&&A0?.trim()===$1,c0=Boolean(A0)&&!G0&&!z0,j1=typeof k==="string"?k.trim():"",Y1=f0(()=>{if(!A0||z0)return"";let y=O_(A0,j);return j1?zq(y,j1):y},[A0,z0,j1]),K_=(y,t)=>{y.stopPropagation(),I(R_(t))},[D1,_1]=m(null),h1=(y)=>{_1(y)},M1=(y)=>{y.stopPropagation(),N?.(_)},q1=(y,t)=>{let F0=new Set;if(!y||t.length===0)return{content:y,usedIds:F0};return{content:y.replace(/attachment:([^\s)"']+)/g,(b0,K1,A1,X1)=>{let p1=K1.replace(/^\/+/,""),W_=t.find((U_)=>U_.name&&U_.name.toLowerCase()===p1.toLowerCase()&&!F0.has(U_.id))||t.find((U_)=>!F0.has(U_.id));if(!W_)return b0;if(F0.add(W_.id),X1.slice(Math.max(0,A1-2),A1)==="](")return`/media/${W_.id}`;return W_.name||"attachment"}),usedIds:F0}},p0=[],x1=[],k1=[],a=[],W0=[],H0=[],X0=[],R0=0;if(B0.length>0)B0.forEach((y)=>{if(y?.type==="text"&&y.annotations)X0.push(y.annotations);if(y?.type==="generated_widget")H0.push(y);else if(y?.type==="resource_link")a.push(y);else if(y?.type==="resource")W0.push(y);else if(y?.type==="file"){let t=J0[R0++];if(t)x1.push(t),k1.push({id:t,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let t=J0[R0++];if(t){let F0=typeof y?.mime_type==="string"?y.mime_type:void 0;p0.push({id:t,annotations:y?.annotations,mimeType:F0}),k1.push({id:t,name:y?.name||y?.filename||y?.title})}}});else if(J0.length>0){let y=s0.length>0;J0.forEach((t,F0)=>{let M0=s0[F0]||null;if(k1.push({id:t,name:M0?.label||null}),y)x1.push(t);else p0.push({id:t,annotations:null})})}if(s0.length>0)s0.forEach((y)=>{if(!y?.id)return;let t=k1.find((F0)=>String(F0.id)===String(y.id));if(t&&!t.name)t.name=y.label});let{content:S0,usedIds:v0}=q1(A0,k1);A0=S0;let k0=p0.filter(({id:y})=>!v0.has(y)),w0=x1.filter((y)=>!v0.has(y)),i0=s0.length>0?s0.map((y,t)=>({id:y.id||`attachment-${t+1}`,label:y.label||`attachment-${t+1}`})):k1.map((y,t)=>({id:y.id,label:y.name||`attachment-${t+1}`})),D0=f0(()=>W$(B0),[B0]),u0=f0(()=>U$(B0),[B0]),O0=f0(()=>{return D0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[D0]);g(()=>{if(!i.current)return;return W4(i.current),Bq(i.current)},[Y1]);let Q0=P(null);return g(()=>{if(!Q0.current||D0.length===0)return;let y=Q0.current;y.innerHTML="";for(let t of D0){let F0=document.createElement("div");y.appendChild(F0),k7(F0,t,{onAction:async(M0)=>{if(M0.type==="Action.OpenUrl"){let b0=a4(M0.url||"");if(!b0)throw Error("Invalid URL");window.open(b0,"_blank","noopener,noreferrer");return}if(M0.type==="Action.Submit"){await b6({post_id:_.id,thread_id:h.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:M0.type,title:M0.title||"",data:M0.data}});return}console.warn("[post] unsupported adaptive card action:",M0.type,M0)}}).catch((M0)=>{console.error("[post] adaptive card render error:",M0),F0.textContent=t.fallback_text||"Card failed to render."})}},[O0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${r?"agent-post":""} ${V?"thread-reply":""} ${W?"thread-prev":""} ${O?"thread-next":""} ${M?"removing":""}" onClick=${$}>
            <div class="post-avatar ${r?"agent-avatar":""} ${x.image?"has-image":""}" style=${Y0}>
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
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${H7(_.timestamp)}</a>
                </div>
                ${G0&&N0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${r5(N0.originalLength)} chars
                            ${N0.maxLength?L` • Display limit: ${r5(N0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${_0&&N0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${r5(N0.maxLength)} of ${r5(N0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(o0.length>0||I0.length>0||i0.length>0)&&L`
                    <div class="post-file-refs">
                        ${I0.map((y)=>{let t=(F0)=>{if(F0.preventDefault(),F0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let M0=document.getElementById("post-"+y);if(M0)M0.scrollIntoView({behavior:"smooth",block:"center"}),M0.classList.add("post-highlight"),setTimeout(()=>M0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${t}>
                                    <${d_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${o0.map((y)=>{let t=y.split("/").pop()||y;return L`
                                <${d_}
                                    prefix="post"
                                    label=${t}
                                    title=${y}
                                    onClick=${()=>A?.(y)}
                                />
                            `})}
                        ${i0.map((y)=>L`
                            <${_q}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${h1}
                            />
                        `)}
                    </div>
                `}
                ${c0&&L`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:Y1}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let t=y.target.dataset.hashtag;if(t)j?.(t)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),I(y.target.src)}}
                    />
                `}
                ${D0.length>0&&L`
                    <div ref=${Q0} class="post-adaptive-cards" />
                `}
                ${u0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${u0.map((y,t)=>{let F0=P7(y),M0=`${y.card_id}-${t}`;return L`
                                <div key=${M0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${F0.title}</span>
                                        </div>
                                    </div>
                                    ${F0.fields.length>0&&L`
                                        <div class="adaptive-card-submission-fields">
                                            ${F0.fields.map((b0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${b0.key}: ${b0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${b0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${b0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${t4(F0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${H0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${H0.map((y,t)=>L`
                            <${Qq}
                                key=${y.widget_id||y.id||`${_.id}-widget-${t}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${X0.length>0&&L`
                    ${X0.map((y,t)=>L`
                        <${i8} key=${t} annotations=${y} />
                    `)}
                `}
                ${k0.length>0&&L`
                    <div class="media-preview">
                        ${k0.map(({id:y,mimeType:t})=>{let M0=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?R_(y):h6(y);return L`
                                <img 
                                    key=${y} 
                                    src=${M0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(b0)=>K_(b0,y)}
                                />
                            `})}
                    </div>
                `}
                ${k0.length>0&&L`
                    ${k0.map(({annotations:y},t)=>L`
                        ${y&&L`<${i8} key=${t} annotations=${y} />`}
                    `)}
                `}
                ${w0.length>0&&L`
                    <div class="file-attachments">
                        ${w0.map((y)=>L`
                            <${eY} key=${y} mediaId=${y} onPreview=${h1} />
                        `)}
                    </div>
                `}
                ${a.length>0&&L`
                    <div class="resource-links">
                        ${a.map((y,t)=>L`
                            <div key=${t}>
                                <${$q} block=${y} />
                                <${i8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${W0.length>0&&L`
                    <div class="resource-embeds">
                        ${W0.map((y,t)=>L`
                            <div key=${t}>
                                <${jq} block=${y} />
                                <${i8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${h.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${h.link_previews.map((y,t)=>L`
                            <${Yq} key=${t} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&L`<${S7} src=${D} onClose=${()=>I(null)} />`}
        ${D1&&L`
            <${C7}
                mediaId=${D1.mediaId}
                info=${D1.info}
                onClose=${()=>_1(null)}
            />
        `}
    `}function y7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:K,onOpenWidget:X,emptyMessage:G,timelineRef:N,agents:V,user:W,onDeletePost:O,reverse:M=!0,removingPostIds:k,searchQuery:A}){let[J,D]=m(!1),I=P(null),i=typeof IntersectionObserver<"u",h=C(async()=>{if(!j||!$||J)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,J,j]),r=C((d)=>{let{scrollTop:$0,scrollHeight:_0,clientHeight:G0}=d.target,N0=M?_0-G0-$0:$0,B0=Math.max(300,G0);if(N0<B0)h()},[M,h]);g(()=>{if(!i)return;let d=I.current,$0=N?.current;if(!d||!$0)return;let _0=300,G0=new IntersectionObserver((N0)=>{for(let B0 of N0){if(!B0.isIntersecting)continue;h()}},{root:$0,rootMargin:`${_0}px 0px ${_0}px 0px`,threshold:0});return G0.observe(d),()=>G0.disconnect()},[i,$,j,N,h]);let e=P(h);if(e.current=h,g(()=>{if(i)return;if(!N?.current)return;let{scrollTop:d,scrollHeight:$0,clientHeight:_0}=N.current,G0=M?$0-_0-d:d,N0=Math.max(300,_0);if(G0<N0)e.current?.()},[i,_,$,M,N]),g(()=>{if(!N?.current)return;if(!$||J)return;let{scrollTop:d,scrollHeight:$0,clientHeight:_0}=N.current,G0=M?$0-_0-d:d,N0=Math.max(300,_0);if($0<=_0+1||G0<N0)e.current?.()},[_,$,J,M,N]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let R=_.slice().sort((d,$0)=>d.id-$0.id),x=(d)=>{let $0=d?.data?.thread_id;if($0===null||$0===void 0||$0==="")return null;let _0=Number($0);return Number.isFinite(_0)?_0:null},H=new Map;for(let d=0;d<R.length;d+=1){let $0=R[d],_0=Number($0?.id),G0=x($0);if(G0!==null){let N0=H.get(G0)||{anchorIndex:-1,replyIndexes:[]};N0.replyIndexes.push(d),H.set(G0,N0)}else if(Number.isFinite(_0)){let N0=H.get(_0)||{anchorIndex:-1,replyIndexes:[]};N0.anchorIndex=d,H.set(_0,N0)}}let S=new Map;for(let[d,$0]of H.entries()){let _0=new Set;if($0.anchorIndex>=0)_0.add($0.anchorIndex);for(let G0 of $0.replyIndexes)_0.add(G0);S.set(d,Array.from(_0).sort((G0,N0)=>G0-N0))}let p=R.map((d,$0)=>{let _0=x(d);if(_0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let G0=S.get(_0);if(!G0||G0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let N0=G0.indexOf($0);if(N0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:N0>0,hasThreadNext:N0<G0.length-1}}),Y0=L`<div class="timeline-sentinel" ref=${I}></div>`;return L`
        <div class="timeline ${M?"reverse":"normal"}" ref=${N} onScroll=${r}>
            <div class="timeline-content">
                ${M?Y0:null}
                ${R.map((d,$0)=>{let _0=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),G0=k?.has?.(d.id),N0=p[$0]||{};return L`
                    <${x7}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${_0}
                        isThreadPrev=${N0.hasThreadPrev}
                        isThreadNext=${N0.hasThreadNext}
                        isRemoving=${G0}
                        highlightQuery=${A}
                        agentName=${U7(d.data?.agent_id,V||{})}
                        agentAvatarUrl=${L7(d.data?.agent_id,V||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Q?.(d)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${K}
                        onOpenWidget=${X}
                        onDelete=${O}
                    />
                `})}
                ${M?null:Y0}
            </div>
        </div>
    `}class R7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var n0=new R7;var n8=null,L$=null;function Hq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function w7(){if(L$)return Promise.resolve(L$);if(!n8)n8=import(Hq()).then((_)=>{return L$=_,_}).catch((_)=>{throw n8=null,_});return n8}class f7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await w7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var F$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new f7(_,$)}};function z$(){w7().catch(()=>{})}var e4="piclaw://terminal";var Jq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Oq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},o8=null,H$=null;function Dq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Aq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!Dq(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function Eq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!o8)o8=Aq(()=>Promise.resolve($.init?.())).catch((j)=>{throw o8=null,j});return await o8,$}async function Mq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!H$)H$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await H$}async function kq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Iq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Tq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function U4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Pq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function v7(){let _=Tq(),$=_?Oq:Jq,j=U4("--bg-primary",_?"#000000":"#ffffff"),Q=U4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=U4("--text-secondary",_?"#71767b":"#536471"),Y=U4("--accent-color","#1d9bf0"),q=U4("--danger-color",_?"#ff7b72":"#cf222e"),K=U4("--success-color",_?"#7ee787":"#1a7f37"),X=U4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=U4("--border-color",_?"#2f3336":"#eff3f4"),N=U4("--accent-soft-strong",Pq(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:N,selectionForeground:Q,black:X,red:q,green:K,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class J${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Eq();if(await Mq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:v7()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=v7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await kq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Iq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var O$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new J$(_,$)}},D$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new J$(_,$)}};function L4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function r8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function b7(_,$={}){if(L4($))return null;if(r8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Cq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function A$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function E$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function M$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function k$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function F4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function u7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function g7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,K]of Object.entries(Y)){let X=String(q||"").trim();if(!X)continue;if(K===null||K===void 0||K==="")Q.searchParams.delete(X);else Q.searchParams.set(X,String(K))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function Cq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Sq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function m7(_,$={}){if(L4($))return null;if(r8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Sq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function e5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function xq(_){try{return JSON.parse(_)}catch{return null}}function yq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function Rq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class I${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=Rq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||xq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=yq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var _8=()=>{throw Error("Operation requires compiling with --exportRuntime")},wq=typeof BigUint64Array<"u",$8=Symbol();var fq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function h7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return fq.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function p7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return h7(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,K,X){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${K}:${X}`)},Q.trace=Q.trace||function(Y,q,...K){let X=$.memory||Q.memory;console.log(`trace: ${j(X,Y)}${q?" ":""}${K.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function c7(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||_8,q=j.__pin||_8,K=j.__unpin||_8,X=j.__collect||_8,G=j.__rtti_base,N=G?(H)=>H[G>>>2]:_8;_.__new=Y,_.__pin=q,_.__unpin=K,_.__collect=X;function V(H){let S=new Uint32Array(Q.buffer);if((H>>>=0)>=N(S))throw Error(`invalid id: ${H}`);return S[(G+4>>>2)+H]}function W(H){let S=V(H);if(!(S&7))throw Error(`not an array: ${H}, flags=${S}`);return S}function O(H){return 31-Math.clz32(H>>>6&31)}function M(H){if(H==null)return 0;let S=H.length,p=Y(S<<1,2),Y0=new Uint16Array(Q.buffer);for(let d=0,$0=p>>>1;d<S;++d)Y0[$0+d]=H.charCodeAt(d);return p}_.__newString=M;function k(H){if(H==null)return 0;let S=new Uint8Array(H),p=Y(S.length,1);return new Uint8Array(Q.buffer).set(S,p),p}_.__newArrayBuffer=k;function A(H){if(!H)return null;let S=Q.buffer;if(new Uint32Array(S)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return h7(S,H)}_.__getString=A;function J(H,S,p){let Y0=Q.buffer;if(p)switch(H){case 2:return new Float32Array(Y0);case 3:return new Float64Array(Y0)}else switch(H){case 0:return new(S?Int8Array:Uint8Array)(Y0);case 1:return new(S?Int16Array:Uint16Array)(Y0);case 2:return new(S?Int32Array:Uint32Array)(Y0);case 3:return new(S?BigInt64Array:BigUint64Array)(Y0)}throw Error(`unsupported align: ${H}`)}function D(H,S=0){let p=S,Y0=W(H),d=O(Y0),$0=typeof p!=="number",_0=$0?p.length:p,G0=Y(_0<<d,Y0&4?H:1),N0;if(Y0&4)N0=G0;else{q(G0);let B0=Y(Y0&2?16:12,H);K(G0);let J0=new Uint32Array(Q.buffer);if(J0[B0+0>>>2]=G0,J0[B0+4>>>2]=G0,J0[B0+8>>>2]=_0<<d,Y0&2)J0[B0+12>>>2]=_0;N0=B0}if($0){let B0=J(d,Y0&2048,Y0&4096),J0=G0>>>d;if(Y0&16384)for(let A0=0;A0<_0;++A0)B0[J0+A0]=p[A0];else B0.set(p,J0)}return N0}_.__newArray=D;function I(H){let S=new Uint32Array(Q.buffer),p=S[H+-8>>>2],Y0=W(p),d=O(Y0),$0=Y0&4?H:S[H+4>>>2],_0=Y0&2?S[H+12>>>2]:S[$0+-4>>>2]>>>d;return J(d,Y0&2048,Y0&4096).subarray($0>>>=d,$0+_0)}_.__getArrayView=I;function i(H){let S=I(H),p=S.length,Y0=Array(p);for(let d=0;d<p;d++)Y0[d]=S[d];return Y0}_.__getArray=i;function h(H){let S=Q.buffer,p=new Uint32Array(S)[H+-4>>>2];return S.slice(H,H+p)}_.__getArrayBuffer=h;function r(H){if(!Z)throw Error("Operation requires compiling with --exportTable");let S=new Uint32Array(Q.buffer)[H>>>2];return Z.get(S)}_.__getFunction=r;function e(H,S,p){return new H(R(H,S,p))}function R(H,S,p){let Y0=Q.buffer,d=new Uint32Array(Y0);return new H(Y0,d[p+4>>>2],d[p+8>>>2]>>>S)}function x(H,S,p){_[`__get${S}`]=e.bind(null,H,p),_[`__get${S}View`]=R.bind(null,H,p)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{x(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),wq)[BigUint64Array,BigInt64Array].forEach((H)=>{x(H,H.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,bq(j,_)}function l7(_){return typeof Response<"u"&&_ instanceof Response}function vq(_){return _ instanceof WebAssembly.Module}async function T$(_,$={}){if(l7(_=await _))return s8(_,$);let j=vq(_)?_:await WebAssembly.compile(_),Q=p7($),Z=await WebAssembly.instantiate(j,$),Y=c7(Q,Z);return{module:j,instance:Z,exports:Y}}async function s8(_,$={}){if(!WebAssembly.instantiateStreaming)return T$(l7(_=await _)?_.arrayBuffer():_,$);let j=p7($),Q=await WebAssembly.instantiateStreaming(_,$),Z=c7(j,Q.instance);return{...Q,exports:Z}}function bq(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let K=Y[0],X=K.indexOf("#");if(X>=0){let G=K.substring(0,X),N=q[G];if(typeof N>"u"||!N.prototype){let V=function(...W){return V.wrap(V.prototype.constructor(0,...W))};if(V.prototype={valueOf(){return this[$8]}},V.wrap=function(W){return Object.create(V.prototype,{[$8]:{value:W,writable:!1}})},N)Object.getOwnPropertyNames(N).forEach((W)=>Object.defineProperty(V,W,Object.getOwnPropertyDescriptor(N,W)));q[G]=V}if(K=K.substring(X+1),q=q[G].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4))){let V=_[Q.replace("set:","get:")],W=_[Q.replace("get:","set:")];Object.defineProperty(q,K,{get(){return V(this[$8])},set(O){W(this[$8],O)},enumerable:!0})}}else if(K==="constructor")(q[K]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[K]=function(...V){return j(V.length),Z(this[$8],...V)}).original=Z}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4)))Object.defineProperty(q,K,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[K]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[K]=Z}return $}var gq="/static/js/vendor/remote-display-decoder.wasm",a8=null;function d7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function i7(){if(a8)return a8;return a8=(async()=>{try{let Q=function(Z,Y,q,K,X,G,N){let V=d7(Y),W=j.__pin(j.__newArrayBuffer(V));try{return j[Z](W,q,K,X,G,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift)}finally{j.__unpin(W);try{j.__collect()}catch{}}},_=await fetch(gq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof s8==="function"?await s8(_,{}):await T$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,K,X,G){return Q("processRawRect",Z,Y,q,K,X,G)},processCopyRect(Z,Y,q,K,X,G){return j.processCopyRect(Z,Y,q,K,X,G)},processRreRect(Z,Y,q,K,X,G){return Q("processRreRect",Z,Y,q,K,X,G)},processHextileRect(Z,Y,q,K,X,G){return Q("processHextileRect",Z,Y,q,K,X,G)},processZrleTileData(Z,Y,q,K,X,G){return Q("processZrleTileData",Z,Y,q,K,X,G)},decodeRawRectToRgba(Z,Y,q,K){let X=d7(Z),G=j.__pin(j.__newArrayBuffer(X));try{let N=j.__pin(j.decodeRawRectToRgba(G,Y,q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(N))}finally{j.__unpin(N)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),a8}function A5(_,$,j){return Math.max($,Math.min(j,_))}function t8(_,$,j){let Q=new Uint8Array(6),Z=A5(Math.floor(Number($||0)),0,65535),Y=A5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=A5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function C$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function n7(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),K=Math.max(1,Number(j?.width||0)),X=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/K,N=(Number($||0)-Number(j?.top||0))/X;return{x:A5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:A5(Math.floor(N*q),0,Math.max(0,q-1))}}function o7(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=A5(Number(Q||0)|Z,0,255);return[t8(Y,$,j),t8(Number(Q||0),$,j)]}function r7(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function j8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function s7(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Q||0))),X=Math.min(Z/q,Y/K);if(!Number.isFinite(X)||X<=0)return 1;return Math.max(0.01,X)}var P$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)P$[`F${_}`]=65470+(_-1);function S$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(P$,Y))return P$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var v1=Uint8Array,D_=Uint16Array,g$=Int32Array,e8=new v1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_6=new v1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),f$=new v1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_9=function(_,$){var j=new D_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new g$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},$9=_9(e8,2),j9=$9.b,v$=$9.r;j9[28]=258,v$[258]=28;var Q9=_9(_6,0),mq=Q9.b,a7=Q9.r,b$=new D_(32768);for(d0=0;d0<32768;++d0)j4=(d0&43690)>>1|(d0&21845)<<1,j4=(j4&52428)>>2|(j4&13107)<<2,j4=(j4&61680)>>4|(j4&3855)<<4,b$[d0]=((j4&65280)>>8|(j4&255)<<8)>>1;var j4,d0,Q4=function(_,$,j){var Q=_.length,Z=0,Y=new D_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new D_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var K;if(j){K=new D_(1<<$);var X=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],N=$-_[Z],V=q[_[Z]-1]++<<N;for(var W=V|(1<<N)-1;V<=W;++V)K[b$[V]>>X]=G}}else{K=new D_(Q);for(Z=0;Z<Q;++Z)if(_[Z])K[Z]=b$[q[_[Z]-1]++]>>15-_[Z]}return K},R4=new v1(288);for(d0=0;d0<144;++d0)R4[d0]=8;var d0;for(d0=144;d0<256;++d0)R4[d0]=9;var d0;for(d0=256;d0<280;++d0)R4[d0]=7;var d0;for(d0=280;d0<288;++d0)R4[d0]=8;var d0,q8=new v1(32);for(d0=0;d0<32;++d0)q8[d0]=5;var d0,hq=Q4(R4,9,0),pq=Q4(R4,9,1),cq=Q4(q8,5,0),lq=Q4(q8,5,1),x$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},i_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},y$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},m$=function(_){return(_+7)/8|0},Y8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new v1(_.subarray($,j))};var dq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B_=function(_,$,j){var Q=Error($||dq[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,B_);if(!j)throw Q;return Q},iq=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new v1(0);var q=!j,K=q||$.i!=2,X=$.i;if(q)j=new v1(Z*3);var G=function($1){var z0=j.length;if($1>z0){var c0=new v1(Math.max(z0*2,$1));c0.set(j),j=c0}},N=$.f||0,V=$.p||0,W=$.b||0,O=$.l,M=$.d,k=$.m,A=$.n,J=Z*8;do{if(!O){N=i_(_,V,1);var D=i_(_,V+1,3);if(V+=3,!D){var I=m$(V)+4,i=_[I-4]|_[I-3]<<8,h=I+i;if(h>Z){if(X)B_(0);break}if(K)G(W+i);j.set(_.subarray(I,h),W),$.b=W+=i,$.p=V=h*8,$.f=N;continue}else if(D==1)O=pq,M=lq,k=9,A=5;else if(D==2){var r=i_(_,V,31)+257,e=i_(_,V+10,15)+4,R=r+i_(_,V+5,31)+1;V+=14;var x=new v1(R),H=new v1(19);for(var S=0;S<e;++S)H[f$[S]]=i_(_,V+S*3,7);V+=e*3;var p=x$(H),Y0=(1<<p)-1,d=Q4(H,p,1);for(var S=0;S<R;){var $0=d[i_(_,V,Y0)];V+=$0&15;var I=$0>>4;if(I<16)x[S++]=I;else{var _0=0,G0=0;if(I==16)G0=3+i_(_,V,3),V+=2,_0=x[S-1];else if(I==17)G0=3+i_(_,V,7),V+=3;else if(I==18)G0=11+i_(_,V,127),V+=7;while(G0--)x[S++]=_0}}var N0=x.subarray(0,r),B0=x.subarray(r);k=x$(N0),A=x$(B0),O=Q4(N0,k,1),M=Q4(B0,A,1)}else B_(1);if(V>J){if(X)B_(0);break}}if(K)G(W+131072);var J0=(1<<k)-1,A0=(1<<A)-1,E0=V;for(;;E0=V){var _0=O[y$(_,V)&J0],o0=_0>>4;if(V+=_0&15,V>J){if(X)B_(0);break}if(!_0)B_(2);if(o0<256)j[W++]=o0;else if(o0==256){E0=V,O=null;break}else{var y0=o0-254;if(o0>264){var S=o0-257,I0=e8[S];y0=i_(_,V,(1<<I0)-1)+j9[S],V+=I0}var r0=M[y$(_,V)&A0],s0=r0>>4;if(!r0)B_(3);V+=r0&15;var B0=mq[s0];if(s0>3){var I0=_6[s0];B0+=y$(_,V)&(1<<I0)-1,V+=I0}if(V>J){if(X)B_(0);break}if(K)G(W+131072);var m0=W+y0;if(W<B0){var t0=Y-B0,h0=Math.min(B0,m0);if(t0+W<0)B_(3);for(;W<h0;++W)j[W]=Q[t0+W]}for(;W<m0;++W)j[W]=j[W-B0]}}if($.l=O,$.p=E0,$.b=W,$.f=N,O)N=1,$.m=k,$.d=M,$.n=A}while(!N);return W!=j.length&&q?Y8(j,0,W):j.subarray(0,W)},z4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},Q8=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},R$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:Y9,l:0};if(Z==1){var q=new v1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(h,r){return h.f-r.f}),j.push({s:-1,f:25001});var K=j[0],X=j[1],G=0,N=1,V=2;j[0]={s:-1,f:K.f+X.f,l:K,r:X};while(N!=Z-1)K=j[j[G].f<j[V].f?G++:V++],X=j[G!=N&&j[G].f<j[V].f?G++:V++],j[N++]={s:-1,f:K.f+X.f,l:K,r:X};var W=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>W)W=Y[Q].s;var O=new D_(W+1),M=u$(j[N-1],O,0);if(M>$){var Q=0,k=0,A=M-$,J=1<<A;Y.sort(function(r,e){return O[e.s]-O[r.s]||r.f-e.f});for(;Q<Z;++Q){var D=Y[Q].s;if(O[D]>$)k+=J-(1<<M-O[D]),O[D]=$;else break}k>>=A;while(k>0){var I=Y[Q].s;if(O[I]<$)k-=1<<$-O[I]++-1;else++Q}for(;Q>=0&&k;--Q){var i=Y[Q].s;if(O[i]==$)--O[i],++k}M=$}return{t:new v1(O),l:M}},u$=function(_,$,j){return _.s==-1?Math.max(u$(_.l,$,j+1),u$(_.r,$,j+1)):$[_.s]=j},t7=function(_){var $=_.length;while($&&!_[--$]);var j=new D_(++$),Q=0,Z=_[0],Y=1,q=function(X){j[Q++]=X};for(var K=1;K<=$;++K)if(_[K]==Z&&K!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[K]}return{c:j.subarray(0,Q),n:$}},Z8=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},Z9=function(_,$,j){var Q=j.length,Z=m$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},e7=function(_,$,j,Q,Z,Y,q,K,X,G,N){z4($,N++,j),++Z[256];var V=R$(Z,15),W=V.t,O=V.l,M=R$(Y,15),k=M.t,A=M.l,J=t7(W),D=J.c,I=J.n,i=t7(k),h=i.c,r=i.n,e=new D_(19);for(var R=0;R<D.length;++R)++e[D[R]&31];for(var R=0;R<h.length;++R)++e[h[R]&31];var x=R$(e,7),H=x.t,S=x.l,p=19;for(;p>4&&!H[f$[p-1]];--p);var Y0=G+5<<3,d=Z8(Z,R4)+Z8(Y,q8)+q,$0=Z8(Z,W)+Z8(Y,k)+q+14+3*p+Z8(e,H)+2*e[16]+3*e[17]+7*e[18];if(X>=0&&Y0<=d&&Y0<=$0)return Z9($,N,_.subarray(X,X+G));var _0,G0,N0,B0;if(z4($,N,1+($0<d)),N+=2,$0<d){_0=Q4(W,O,0),G0=W,N0=Q4(k,A,0),B0=k;var J0=Q4(H,S,0);z4($,N,I-257),z4($,N+5,r-1),z4($,N+10,p-4),N+=14;for(var R=0;R<p;++R)z4($,N+3*R,H[f$[R]]);N+=3*p;var A0=[D,h];for(var E0=0;E0<2;++E0){var o0=A0[E0];for(var R=0;R<o0.length;++R){var y0=o0[R]&31;if(z4($,N,J0[y0]),N+=H[y0],y0>15)z4($,N,o0[R]>>5&127),N+=o0[R]>>12}}}else _0=hq,G0=R4,N0=cq,B0=q8;for(var R=0;R<K;++R){var I0=Q[R];if(I0>255){var y0=I0>>18&31;if(Q8($,N,_0[y0+257]),N+=G0[y0+257],y0>7)z4($,N,I0>>23&31),N+=e8[y0];var r0=I0&31;if(Q8($,N,N0[r0]),N+=B0[r0],r0>3)Q8($,N,I0>>5&8191),N+=_6[r0]}else Q8($,N,_0[I0]),N+=G0[I0]}return Q8($,N,_0[256]),N+G0[256]},nq=new g$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Y9=new v1(0),oq=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,K=new v1(Q+q+5*(1+Math.ceil(q/7000))+Z),X=K.subarray(Q,K.length-Z),G=Y.l,N=(Y.r||0)&7;if($){if(N)X[0]=Y.r>>3;var V=nq[$-1],W=V>>13,O=V&8191,M=(1<<j)-1,k=Y.p||new D_(32768),A=Y.h||new D_(M+1),J=Math.ceil(j/3),D=2*J,I=function(j1){return(_[j1]^_[j1+1]<<J^_[j1+2]<<D)&M},i=new g$(25000),h=new D_(288),r=new D_(32),e=0,R=0,x=Y.i||0,H=0,S=Y.w||0,p=0;for(;x+2<q;++x){var Y0=I(x),d=x&32767,$0=A[Y0];if(k[d]=$0,A[Y0]=d,S<=x){var _0=q-x;if((e>7000||H>24576)&&(_0>423||!G)){N=e7(_,X,0,i,h,r,R,H,p,x-p,N),H=e=R=0,p=x;for(var G0=0;G0<286;++G0)h[G0]=0;for(var G0=0;G0<30;++G0)r[G0]=0}var N0=2,B0=0,J0=O,A0=d-$0&32767;if(_0>2&&Y0==I(x-A0)){var E0=Math.min(W,_0)-1,o0=Math.min(32767,x),y0=Math.min(258,_0);while(A0<=o0&&--J0&&d!=$0){if(_[x+N0]==_[x+N0-A0]){var I0=0;for(;I0<y0&&_[x+I0]==_[x+I0-A0];++I0);if(I0>N0){if(N0=I0,B0=A0,I0>E0)break;var r0=Math.min(A0,I0-2),s0=0;for(var G0=0;G0<r0;++G0){var m0=x-A0+G0&32767,t0=k[m0],h0=m0-t0&32767;if(h0>s0)s0=h0,$0=m0}}}d=$0,$0=k[d],A0+=d-$0&32767}}if(B0){i[H++]=268435456|v$[N0]<<18|a7[B0];var $1=v$[N0]&31,z0=a7[B0]&31;R+=e8[$1]+_6[z0],++h[257+$1],++r[z0],S=x+N0,++e}else i[H++]=_[x],++h[_[x]]}}for(x=Math.max(x,S);x<q;++x)i[H++]=_[x],++h[_[x]];if(N=e7(_,X,G,i,h,r,R,H,p,x-p,N),!G)Y.r=N&7|X[N/8|0]<<3,N-=7,Y.h=A,Y.p=k,Y.i=x,Y.w=S}else{for(var x=Y.w||0;x<q+G;x+=65535){var c0=x+65535;if(c0>=q)X[N/8|0]=G,c0=q;N=Z9(X,N+1,_.subarray(x,c0))}Y.i=q}return Y8(K,0,Q+m$(N)+Z)};var q9=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var K=Math.min(q+2655,Y);for(;q<K;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},rq=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new v1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return oq(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var K9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var sq=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=q9();Z.p($.dictionary),K9(_,2,Z.d())}},aq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)B_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)B_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var w$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new v1(32768),this.p=new v1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)B_(5);if(this.d)B_(4);if(!this.p.length)this.p=$;else if($.length){var j=new v1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=iq(this.p,this.s,this.o);this.ondata(Y8(Q,j,this.s.b),this.d),this.o=Y8(Q,this.s.b-32768),this.s.b=this.o.length,this.p=Y8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function G9(_,$){if(!$)$={};var j=q9();j.p(_);var Q=rq(_,$,$.dictionary?6:2,4);return sq(Q,$),K9(Q,Q.length-4,j.d()),Q}var X9=function(){function _($,j){w$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(w$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(aq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)B_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}w$.prototype.c.call(this,j)},_}();var tq=typeof TextDecoder<"u"&&new TextDecoder,eq=0;try{tq.decode(Y9,{stream:!0}),eq=1}catch(_){}var _K=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],$K=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],jK=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],QK=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],ZK=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],YK=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],qK=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],KK=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],B9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;B9[_]=$}function W9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function U9(_){let $=0n,j=W9(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function GK(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function E5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function N9(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function XK(_){let $=E5(U9(_),ZK,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of qK){j=N9(j,Y),Q=N9(Q,Y);let q=j<<28n|Q;Z.push(E5(q,YK,56))}return Z}function NK(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(KK[j][Y][q])}return $}function VK(_,$){let j=E5(_,jK,32)^BigInt($),Q=NK(j);return E5(Q,QK,32)}function V9(_,$){let j=XK($),Q=E5(U9(_),_K,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let K of j){let X=Y,G=(Z^VK(Y,K))&0xffffffffn;Z=X,Y=G}let q=Y<<32n|Z;return GK(E5(q,$K,64),8)}function BK(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=B9[Z]}return j}function L9(_,$){let j=W9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=BK(_),Z=new Uint8Array(16);return Z.set(V9(j.slice(0,8),Q),0),Z.set(V9(j.slice(8,16),Q),8),Z}var n_="vnc";function WK(_){return Number(_)}function UK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=WK(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function I5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function LK(_,$){let j=I5(_),Q=I5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function FK(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=I5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function zK(){return(_)=>{let $=I5(_);try{let j=[],Q=new X9((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return FK(j)}catch(j){try{let Q=G9($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function HK(_){return new TextEncoder().encode(String(_||""))}function M5(_){return new TextDecoder().decode(I5(_))}function JK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function OK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function F9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function DK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function AK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function z9(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function k5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function J9(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function EK(_,$,j,Q){let Z=Q||T5,Y=I5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let X=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,N=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let W=J9(Y,G,q,Z.bigEndian),O=k5(W>>>Z.redShift&Z.redMax,Z.redMax),M=k5(W>>>Z.greenShift&Z.greenMax,Z.greenMax),k=k5(W>>>Z.blueShift&Z.blueMax,Z.blueMax);X[N]=O,X[N+1]=M,X[N+2]=k,X[N+3]=255,G+=q,N+=4}return X}function H4(_,$,j){let Q=j||T5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=J9(_,$,Z,Q.bigEndian);return{rgba:[k5(Y>>>Q.redShift&Q.redMax,Q.redMax),k5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),k5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function w4(_,$,j,Q,Z,Y,q){if(!q)return;for(let K=0;K<Y;K+=1)for(let X=0;X<Z;X+=1){let G=((Q+K)*$+(j+X))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function O9(_,$,j,Q,Z,Y,q){for(let K=0;K<Y;K+=1){let X=K*Z*4,G=((Q+K)*$+j)*4;_.set(q.subarray(X,X+Z*4),G)}}function H9(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function MK(_,$,j,Q,Z,Y,q){let K=Z||T5,X=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let N=_.slice($+4,$+4+G),V;try{V=q(N)}catch{return{consumed:4+G,skipped:!0}}let W=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let M=0;M<Q;M+=64){let k=Math.min(64,Q-M);for(let A=0;A<j;A+=64){let J=Math.min(64,j-A);if(V.byteLength<W+1)return null;let D=V[W++],I=D&127,i=(D&128)!==0;if(!i&&I===0){let h=J*k*X;if(V.byteLength<W+h)return null;let r=Y(V.slice(W,W+h),J,k,K);W+=h,O9(O,j,A,M,J,k,r);continue}if(!i&&I===1){let h=H4(V,W,K);if(!h)return null;W+=h.bytesPerPixel,w4(O,j,A,M,J,k,h.rgba);continue}if(!i&&I>1&&I<=16){let h=[];for(let x=0;x<I;x+=1){let H=H4(V,W,K);if(!H)return null;W+=H.bytesPerPixel,h.push(H.rgba)}let r=I<=2?1:I<=4?2:4,e=Math.ceil(J*r/8),R=e*k;if(V.byteLength<W+R)return null;for(let x=0;x<k;x+=1){let H=W+x*e;for(let S=0;S<J;S+=1){let p=S*r,Y0=H+(p>>3),d=8-r-(p&7),$0=V[Y0]>>d&(1<<r)-1;w4(O,j,A+S,M+x,1,1,h[$0])}}W+=R;continue}if(i&&I===0){let h=0,r=0;while(r<k){let e=H4(V,W,K);if(!e)return null;W+=e.bytesPerPixel;let R=H9(V,W);if(!R)return null;W+=R.consumed;for(let x=0;x<R.runLength;x+=1)if(w4(O,j,A+h,M+r,1,1,e.rgba),h+=1,h>=J){if(h=0,r+=1,r>=k)break}}continue}if(i&&I>0){let h=[];for(let R=0;R<I;R+=1){let x=H4(V,W,K);if(!x)return null;W+=x.bytesPerPixel,h.push(x.rgba)}let r=0,e=0;while(e<k){if(V.byteLength<W+1)return null;let R=V[W++],x=R,H=1;if(R&128){x=R&127;let p=H9(V,W);if(!p)return null;W+=p.consumed,H=p.runLength}let S=h[x];if(!S)return null;for(let p=0;p<H;p+=1)if(w4(O,j,A+r,M+e,1,1,S),r+=1,r>=J){if(r=0,e+=1,e>=k)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:O,decompressed:V}}function kK(_,$,j,Q,Z){let Y=Z||T5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let X=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+X*(q+8);if(_.byteLength<$+G)return null;let N=$+4,V=H4(_,N,Y);if(!V)return null;N+=V.bytesPerPixel;let W=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);w4(W,j,0,0,j,Q,V.rgba);for(let O=0;O<X;O+=1){let M=H4(_,N,Y);if(!M)return null;if(N+=M.bytesPerPixel,_.byteLength<N+8)return null;let k=new DataView(_.buffer,_.byteOffset+N,8),A=k.getUint16(0,!1),J=k.getUint16(2,!1),D=k.getUint16(4,!1),I=k.getUint16(6,!1);N+=8,w4(W,j,A,J,D,I,M.rgba)}return{consumed:N-$,rgba:W}}function IK(_,$,j,Q,Z,Y){let q=Z||T5,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),X=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,N=[0,0,0,255],V=[255,255,255,255];for(let W=0;W<Q;W+=16){let O=Math.min(16,Q-W);for(let M=0;M<j;M+=16){let k=Math.min(16,j-M);if(_.byteLength<G+1)return null;let A=_[G++];if(A&1){let J=k*O*K;if(_.byteLength<G+J)return null;let D=Y(_.slice(G,G+J),k,O,q);G+=J,O9(X,j,M,W,k,O,D);continue}if(A&2){let J=H4(_,G,q);if(!J)return null;N=J.rgba,G+=J.bytesPerPixel}if(w4(X,j,M,W,k,O,N),A&4){let J=H4(_,G,q);if(!J)return null;V=J.rgba,G+=J.bytesPerPixel}if(A&8){if(_.byteLength<G+1)return null;let J=_[G++];for(let D=0;D<J;D+=1){let I=V;if(A&16){let H=H4(_,G,q);if(!H)return null;I=H.rgba,G+=H.bytesPerPixel}if(_.byteLength<G+2)return null;let i=_[G++],h=_[G++],r=i>>4,e=i&15,R=(h>>4)+1,x=(h&15)+1;w4(X,j,M+r,W+e,R,x,I)}}}}return{consumed:G-$,rgba:X}}var T5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class $6{protocol=n_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:EK,this.pipeline=_.pipeline||null,this.encodings=UK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...T5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:zK()}receive(_){if(_)this.buffer=LK(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=M5(Z),q=JK(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=OK(q),j.push(HK(this.clientVersionText)),$.push({type:"protocol-version",protocol:n_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+X)break;this.consume(1);let G=M5(this.consume(4+X).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:n_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:n_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let X=M5(this.consume(4+K).slice(4));throw Error(X||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:n_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:n_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(L9(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let K=M5(this.consume(4+q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:n_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),K=F9(Z,4),X=Z.getUint32(20,!1);if(this.buffer.byteLength<24+X)break;let G=this.consume(24),N=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=N.getUint16(0,!1),this.framebufferHeight=N.getUint16(2,!1),this.serverPixelFormat=F9(N,4),this.serverName=M5(this.consume(X)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(DK(this.clientPixelFormat)),j.push(AK(this.encodings)),j.push(z9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:n_,width:Y,height:q,name:this.serverName,pixelFormat:K}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,X=[],G=!1,N=!!this.pipeline;for(let W=0;W<q;W+=1){if(this.buffer.byteLength<K+12){G=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),M=O.getUint16(0,!1),k=O.getUint16(2,!1),A=O.getUint16(4,!1),J=O.getUint16(6,!1),D=O.getInt32(8,!1);if(K+=12,D===0){let I=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),i=A*J*I;if(this.buffer.byteLength<K+i){G=!0;break}let h=this.buffer.slice(K,K+i);if(K+=i,N)this.pipeline.processRawRect(h,M,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:M,y:k,width:A,height:J});else X.push({kind:"rgba",x:M,y:k,width:A,height:J,rgba:this.decodeRawRect(h,A,J,this.clientPixelFormat)});continue}if(D===2){let I=kK(this.buffer,K,A,J,this.clientPixelFormat);if(!I){G=!0;break}if(N){let i=this.buffer.slice(K,K+I.consumed);this.pipeline.processRreRect(i,M,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:M,y:k,width:A,height:J})}else X.push({kind:"rgba",x:M,y:k,width:A,height:J,rgba:I.rgba});K+=I.consumed;continue}if(D===1){if(this.buffer.byteLength<K+4){G=!0;break}let I=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),i=I.getUint16(0,!1),h=I.getUint16(2,!1);if(K+=4,N)this.pipeline.processCopyRect(M,k,A,J,i,h),X.push({kind:"pipeline",x:M,y:k,width:A,height:J});else X.push({kind:"copy",x:M,y:k,width:A,height:J,srcX:i,srcY:h});continue}if(D===16){let I=MK(this.buffer,K,A,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!I){G=!0;break}if(K+=I.consumed,I.skipped)continue;if(N&&I.decompressed)this.pipeline.processZrleTileData(I.decompressed,M,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:M,y:k,width:A,height:J});else X.push({kind:"rgba",x:M,y:k,width:A,height:J,rgba:I.rgba});continue}if(D===5){let I=IK(this.buffer,K,A,J,this.clientPixelFormat,this.decodeRawRect);if(!I){G=!0;break}if(N){let i=this.buffer.slice(K,K+I.consumed);this.pipeline.processHextileRect(i,M,k,A,J,this.clientPixelFormat),X.push({kind:"pipeline",x:M,y:k,width:A,height:J})}else X.push({kind:"rgba",x:M,y:k,width:A,height:J,rgba:I.rgba});K+=I.consumed;continue}if(D===-223){if(this.framebufferWidth=A,this.framebufferHeight=J,N)this.pipeline.initFramebuffer(A,J);X.push({kind:"resize",x:M,y:k,width:A,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(K);let V={type:"framebuffer-update",protocol:n_,width:this.framebufferWidth,height:this.framebufferHeight,rects:X};if(N)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(z9(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:n_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let K=M5(this.consume(q));$.push({type:"clipboard",protocol:n_,text:K}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var Z4="piclaw://vnc";function TK(_){let $=String(_||"");if($===Z4)return null;if(!$.startsWith(`${Z4}/`))return null;let j=$.slice(`${Z4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function _5(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function PK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function CK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function SK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function xK(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function yK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class D9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=TK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=yK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=xK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=j8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=j8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=j8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=s7($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return n7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(t8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=C$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~C$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of o7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(r7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=S$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??S$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new $6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await i7(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(K,X,G,N)=>Q.decodeRawRectToRgba(K,X,G,N);let Y=j8(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new $6(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new I$({url:SK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await PK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${_5(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await CK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var h$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===Z4||$.startsWith(`${Z4}/`)?9000:!1},mount(_,$){return new D9(_,$)}};function f4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function RK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${K?`${K}/`:""}${Z}`,N=[];for(let W of G.split("/")){if(!W||W===".")continue;if(W===".."){if(N.length>0)N.pop();continue}N.push(W)}let V=N.join("/");return`${I8(V)}${Y}${q}`}function K8(_){return _?.preview||null}function wK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function fK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function vK(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${f4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${f4(w_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${f4(t4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${f4(fK($))}</span>`),Q.push(`<span><strong>extension:</strong> ${f4(wK(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${f4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function bK(_){let $=K8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=vK(_,$);if($.kind==="image"){let Q=$.url||($.path?I8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${f4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=O_($.text||"",null,{rewriteImageSrc:(Z)=>RK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${f4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class p${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=bK(this.context)}getContent(){let _=K8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=K8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var c$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=K8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new p$(_,$)}},l$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return K8(_)||_?.path?1:!1},mount(_,$){return new p$(_,$)}};var uK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),gK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},mK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function E9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function A9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class M9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=E9(j),Y=mK[Z]||"\uD83D\uDCC4",q=gK[Z]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${A9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${A9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let X=K.querySelector("#ov-open-tab");if(X)X.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class k9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var d$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=E9(_?.path);if(!$||!uK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new M9(_,$);return new k9(_,$)}};var hK=/\.(csv|tsv)$/i;function I9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class T9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${I9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${I9(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class P9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var i$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!hK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new T9(_,$);return new P9(_,$)}};var pK=/\.pdf$/i;function cK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class C9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${cK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var n$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!pK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new C9(_,$);return new S9(_,$)}};var lK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function o$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class x9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${o$(Z)}" alt="${o$(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${o$(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class y9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var r$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!lK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new x9(_,$);return new y9(_,$)}};var dK=/\.(mp4|m4v|mov|webm|ogv)$/i;function iK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class R9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${iK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class w9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!dK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new R9(_,$);return new w9(_,$)}};function nK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function oK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var a$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function f9(_){let $=String(_||"").trim();return $?$:a$}function rK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function sK(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function aK(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,K,X,G,N,V){try{if(q&&X!=null&&j({filename:q,format:K,data:X,mimeType:G,base64Encoded:Boolean(N),defaultMode:V}))return}catch(W){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",W)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,K,X,G,N,V){try{if(K&&j({filename:K,data:q,mimeType:X,base64Encoded:Boolean(G),mode:N,folderId:V}))return}catch(W){console.warn("[drawio-pane] export intercept failed, falling back to native export",W)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function v9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${sK(j)}`}class b9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${oK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=rK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(aK(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=a$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await v9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await v9(_,"image/png");else this.xmlData=f9(await _.text());else if(_.status===404)this.xmlData=a$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?f9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var t$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!nK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new b9(_,$);return new u9(_,$)}};var tK=/\.mindmap\.ya?ml$/i,e$=String(Date.now());function g9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function _3(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function eK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function _G(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Q)}class m9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class h9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(g9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,eK("/static/css/mindmap.css"),await Promise.all([_3("/static/js/vendor/d3-mindmap.min.js?v="+e$),_3("/static/js/vendor/js-yaml.min.js?v="+e$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),_G(this.mindmapEl);let j=g9(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await _3("/static/js/vendor/mindmap-editor.js?v="+e$),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var $3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!tK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new m9(_,$);return new h9(_,$)}};var $G=/\.kanban\.md$/i,jG=String(Date.now());function p9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function QG(){let _=window;if(_.preact)return;_.preact={h:A8,render:x4,Component:B5,createContext:U2},_.preactHooks={useState:m,useEffect:g,useCallback:C,useRef:P,useMemo:f0,useReducer:T6,useContext:z2,useLayoutEffect:m5,useImperativeHandle:F2,useErrorBoundary:J2,useDebugValue:H2},_.htm={bind:()=>L}}function ZG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function YG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class c9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class l9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(p9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,YG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=p9();try{if(QG(),await ZG("/static/js/vendor/kanban-editor.js?v="+jG),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var j3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!$G.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new c9(_,$);return new l9(_,$)}};class d9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new d9;var j6="workspaceExplorerScale",qG=["compact","default","comfortable"],KG=new Set(qG),GG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function i9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return KG.has(j)?j:$}function Q3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function XG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function NG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Z3(_={}){let $=XG(_),j=_.stored?i9(_.stored,$):$;return NG(j,_)}function n9(_){return GG[i9(_)]}function VG(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function Y3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function o9(_,$,j={}){let Q=j?.resolvePane;if(Y3(_,Q))return!0;return VG($)}var BG=60000,t9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function WG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Y3($,(j)=>n0.resolve(j))}function e9(_,$,j,Q=0,Z=[]){if(!j&&t9(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)e9(Y,$,j,Q+1,Z);return Z}function r9(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&t9(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function X3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((K)=>[K?.path,K])):new Map,Y=!j||j.length!==Q.length,q=Q.map((K)=>{let X=X3(Z.get(K.path),K);if(X!==Z.get(K.path))Y=!0;return X});return Y?{...$,children:q}:_}function K3(_,$,j){if(!_)return _;if(_.path===$)return X3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=K3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var _j=4,q3=14,UG=8,LG=16;function $j(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=$j(Q);return _.__bytes=j,j}function jj(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=_j)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let K of Z){let X=Math.max(0,Number(K?.__bytes??K?.size??0));if(X<=0)continue;if(K.type==="dir")Y.push({kind:"dir",node:K,size:X});else Y.push({kind:"file",name:K.name,path:K.path,size:X})}Y.sort((K,X)=>X.size-K.size);let q=Y;if(Y.length>q3){let K=Y.slice(0,q3-1),X=Y.slice(q3-1),G=X.reduce((N,V)=>N+V.size,0);K.push({kind:"other",name:`+${X.length} more`,path:`${Q.path}/[other]`,size:G}),q=K}return Q.children=q.map((K)=>{if(K.kind==="dir")return jj(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Q}function s9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Qj(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function Q6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function N3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,K=Y-Z>q?Z+q:Y,X=Q6(_,$,Q,Z),G=Q6(_,$,Q,K),N=Q6(_,$,j,K),V=Q6(_,$,j,Z),W=K-Z>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${W} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${j} ${j} 0 ${W} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var Zj={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function Yj(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(K,X,G,N)=>{let V=Array.isArray(K?.children)?K.children:[];if(!V.length)return;let W=Math.max(0,Number(K.size)||0);if(W<=0)return;let O=G-X,M=X;V.forEach((k,A)=>{let J=Math.max(0,Number(k.size)||0);if(J<=0)return;let D=J/W,I=M,i=A===V.length-1?G:M+O*D;if(M=i,i-I<0.003)return;let h=Zj[N];if(h){let r=Qj(I,N,j);if(Q.push({key:k.path,path:k.path,label:k.name,size:J,color:r,depth:N,startAngle:I,endAngle:i,innerRadius:h[0],outerRadius:h[1],d:N3(120,120,h[0],h[1],I,i)}),N===1)Z.push({key:k.path,name:k.name,size:J,pct:Y>0?J/Y*100:0,color:r})}if(N<_j)q(k,I,i,N+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function G3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=G3(Q,$);if(Z)return Z}return null}function qj(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=Zj[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,K=Qj(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:K,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:N3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:K}]}}function a9(_,$=!1,j=!1){if(!_)return null;let Q=$j(_),Z=jj(_,0),Y=Z.size||Q,{segments:q,legend:K}=Yj(Z,Y,j);if(!q.length&&Y>0){let X=qj("[files]",Z.path,Y,j);q=X.segments,K=X.legend}return{root:Z,totalSize:Y,segments:q,legend:K,truncated:$,isDarkTheme:j}}function FG({payload:_}){if(!_)return null;let[$,j]=m(null),[Q,Z]=m(_?.root?.path||"."),[Y,q]=m(()=>[_?.root?.path||"."]),[K,X]=m(!1);g(()=>{let H=_?.root?.path||".";Z(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Q)return;X(!0);let H=setTimeout(()=>X(!1),180);return()=>clearTimeout(H)},[Q]);let G=f0(()=>{return G3(_.root,Q)||_.root},[_?.root,Q]),N=G?.size||_.totalSize||0,{segments:V,legend:W}=f0(()=>{let H=Yj(G,N,_.isDarkTheme);if(H.segments.length>0)return H;if(N<=0)return H;let S=G?.children?.length?"Total":"[files]";return qj(S,G?.path||_?.root?.path||".",N,_.isDarkTheme)},[G,N,_.isDarkTheme,_?.root?.path]),[O,M]=m(V),k=P(new Map),A=P(0);g(()=>{let H=k.current,S=new Map(V.map(($0)=>[$0.key,$0])),p=performance.now(),Y0=220,d=($0)=>{let _0=Math.min(1,($0-p)/220),G0=_0*(2-_0),N0=V.map((B0)=>{let A0=H.get(B0.key)||{startAngle:B0.startAngle,endAngle:B0.startAngle,innerRadius:B0.innerRadius,outerRadius:B0.innerRadius},E0=(s0,m0)=>s0+(m0-s0)*G0,o0=E0(A0.startAngle,B0.startAngle),y0=E0(A0.endAngle,B0.endAngle),I0=E0(A0.innerRadius,B0.innerRadius),r0=E0(A0.outerRadius,B0.outerRadius);return{...B0,d:N3(120,120,I0,r0,o0,y0)}});if(M(N0),_0<1)A.current=requestAnimationFrame(d)};if(A.current)cancelAnimationFrame(A.current);return A.current=requestAnimationFrame(d),k.current=S,()=>{if(A.current)cancelAnimationFrame(A.current)}},[V]);let J=O.length?O:V,D=N>0?w_(N):"0 B",I=G?.name||"",h=(I&&I!=="."?I:"Total")||"Total",r=D,e=Y.length>1,R=(H)=>{if(!H?.path)return;let S=G3(_.root,H.path);if(!S||!Array.isArray(S.children)||S.children.length===0)return;q((p)=>[...p,S.path]),Z(S.path),j(null)},x=()=>{if(!e)return;q((H)=>{let S=H.slice(0,-1);return Z(S[S.length-1]||_?.root?.path||"."),S}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
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
                        <title>${H.label} — ${w_(H.size)}</title>
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${r}</text>
                </g>
            </svg>
            ${W.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${W.slice(0,8).map((H)=>L`
                        <div key=${H.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${H.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${H.name}>${H.name}</span>
                            <span class="workspace-folder-starburst-size">${w_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function zG({mediaId:_}){let[$,j]=m(null);if(g(()=>{if(!_)return;F5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?w_($.metadata.size):"";return L`
        <a href=${R_(_)} download=${Q} class="file-attachment"
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
    `}function Kj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:K=!1}){let[X,G]=m(null),[N,V]=m(new Set(["."])),[W,O]=m(null),[M,k]=m(null),[A,J]=m(""),[D,I]=m(null),[i,h]=m(null),[r,e]=m(!0),[R,x]=m(!1),[H,S]=m(null),[p,Y0]=m(()=>z5("workspaceShowHidden",!1)),[d,$0]=m(!1),[_0,G0]=m(null),[N0,B0]=m(null),[J0,A0]=m(null),[E0,o0]=m(!1),[y0,I0]=m(null),[r0,s0]=m(()=>s9()),[m0,t0]=m(()=>Z3({stored:J_(j6),...Q3()})),[h0,$1]=m(!1),z0=P(N),c0=P(""),j1=P(null),Y1=P(0),K_=P(new Set),D1=P(null),_1=P(new Map),h1=P(_),M1=P(Q),q1=P(null),p0=P(null),x1=P(null),k1=P(null),a=P(null),W0=P(null),H0=P("."),X0=P(null),R0=P({path:null,dragging:!1,startX:0,startY:0}),S0=P({path:null,dragging:!1,startX:0,startY:0}),v0=P({path:null,timer:0}),k0=P(!1),w0=P(0),i0=P(new Map),D0=P(null),u0=P(null),O0=P(null),Q0=P(null),y=P(null),t=P(null),F0=P(p),M0=P($),b0=P(j??$),K1=P(0),A1=P(J0),X1=P(d),p1=P(_0),Y4=P(null),W_=P({x:0,y:0}),__=P(0),U_=P(null),G_=P(W),Q1=P(M),o1=P(null),q4=P(D);h1.current=_,M1.current=Q,g(()=>{z0.current=N},[N]),g(()=>{F0.current=p},[p]),g(()=>{M0.current=$},[$]),g(()=>{b0.current=j??$},[j,$]),g(()=>{A1.current=J0},[J0]),g(()=>{if(typeof window>"u")return;let z=()=>{t0(Z3({stored:J_(j6),...Q3()}))};z();let T=()=>z(),w=()=>z(),f=(j0)=>{if(!j0||j0.key===null||j0.key===j6)z()};window.addEventListener("resize",T),window.addEventListener("focus",w),window.addEventListener("storage",f);let o=window.matchMedia?.("(pointer: coarse)"),q0=window.matchMedia?.("(hover: none)"),U0=(j0,C0)=>{if(!j0)return;if(j0.addEventListener)j0.addEventListener("change",C0);else if(j0.addListener)j0.addListener(C0)},L0=(j0,C0)=>{if(!j0)return;if(j0.removeEventListener)j0.removeEventListener("change",C0);else if(j0.removeListener)j0.removeListener(C0)};return U0(o,T),U0(q0,T),()=>{window.removeEventListener("resize",T),window.removeEventListener("focus",w),window.removeEventListener("storage",f),L0(o,T),L0(q0,T)}},[]),g(()=>{let z=(T)=>{let w=T?.detail?.path;if(!w)return;let f=w.split("/"),o=[];for(let q0=1;q0<f.length;q0++)o.push(f.slice(0,q0).join("/"));if(o.length)V((q0)=>{let U0=new Set(q0);U0.add(".");for(let L0 of o)U0.add(L0);return U0});O(w),requestAnimationFrame(()=>{let q0=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(q0)q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),g(()=>{X1.current=d},[d]),g(()=>{p1.current=_0},[_0]),g(()=>{G_.current=W},[W]),g(()=>{Q1.current=M},[M]),g(()=>{q4.current=D},[D]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>s0(s9());z();let T=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>z();if(T?.addEventListener)T.addEventListener("change",w);else if(T?.addListener)T.addListener(w);let f=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(f?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)f?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(T?.removeEventListener)T.removeEventListener("change",w);else if(T?.removeListener)T.removeListener(w);f?.disconnect()}},[]),g(()=>{if(!M)return;let z=a.current;if(!z)return;let T=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(T)},[M]),g(()=>{if(!h0)return;let z=(w)=>{let f=w?.target;if(!(f instanceof Element))return;if(y.current?.contains(f))return;if(t.current?.contains(f))return;$1(!1)},T=(w)=>{if(w?.key==="Escape")$1(!1),t.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",T)}},[h0]);let f_=async(z,T={})=>{let w=Boolean(T?.autoOpen),f=String(z||"").trim();x(!0),I(null),h(null);try{let o=await l5(f,20000);if(w&&f&&o9(f,o,{resolvePane:(q0)=>n0.resolve(q0)}))return M1.current?.(f,o),o;return I(o),o}catch(o){let q0={error:o.message||"Failed to load preview"};return I(q0),q0}finally{x(!1)}};q1.current=f_;let $5=async()=>{if(!M0.current)return;try{let z=await c5("",1,F0.current),T=r9(z.root,z0.current,F0.current);if(T===c0.current){e(!1);return}if(c0.current=T,j1.current=z.root,!Y1.current)Y1.current=requestAnimationFrame(()=>{Y1.current=0,G((w)=>X3(w,j1.current)),e(!1)})}catch(z){S(z.message||"Failed to load workspace"),e(!1)}},b4=async(z)=>{if(!z)return;if(K_.current.has(z))return;K_.current.add(z);try{let T=await c5(z,1,F0.current);G((w)=>K3(w,z,T.root))}catch(T){S(T.message||"Failed to load workspace")}finally{K_.current.delete(z)}};p0.current=b4;let b1=C(()=>{let z=W;if(!z)return".";let T=_1.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[W]),L_=C((z)=>{let T=z?.closest?.(".workspace-row");if(!T)return null;let w=T.dataset.path,f=T.dataset.type;if(!w)return null;if(f==="dir")return w;if(w.includes("/")){let o=w.split("/");return o.pop(),o.join("/")||"."}return"."},[]),y1=C((z)=>{return L_(z?.target||null)},[L_]),E1=C((z)=>{A1.current=z,A0(z)},[]),N1=C(()=>{let z=v0.current;if(z?.timer)clearTimeout(z.timer);v0.current={path:null,timer:0}},[]),v_=C((z)=>{if(!z||z==="."){N1();return}let T=_1.current?.get(z);if(!T||T.type!=="dir"){N1();return}if(z0.current?.has(z)){N1();return}if(v0.current?.path===z)return;N1();let w=setTimeout(()=>{v0.current={path:null,timer:0},p0.current?.(z),V((f)=>{let o=new Set(f);return o.add(z),o})},600);v0.current={path:z,timer:w}},[N1]),b_=C((z,T)=>{if(W_.current={x:z,y:T},__.current)return;__.current=requestAnimationFrame(()=>{__.current=0;let w=Y4.current;if(!w)return;let f=W_.current;w.style.transform=`translate(${f.x+12}px, ${f.y+12}px)`})},[]),V1=C((z)=>{if(!z)return;let w=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w)return;B0({path:z,label:w})},[]),$_=C(()=>{if(B0(null),__.current)cancelAnimationFrame(__.current),__.current=0;if(Y4.current)Y4.current.style.transform="translate(-9999px, -9999px)"},[]),g0=C((z)=>{if(!z)return".";let T=_1.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[]),P1=C(()=>{k(null),J("")},[]),A_=C((z)=>{if(!z)return;let w=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w||z===".")return;k(z),J(w)},[]),j_=C(async()=>{let z=Q1.current;if(!z)return;let T=(A||"").trim();if(!T){P1();return}let w=_1.current?.get(z),f=(w?.name||z.split("/").pop()||z).trim();if(T===f){P1();return}try{let q0=(await d6(z,T))?.path||z,U0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(P1(),S(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:q0,type:w?.type||"file"}})),w?.type==="dir")V((L0)=>{let j0=new Set;for(let C0 of L0)if(C0===z)j0.add(q0);else if(C0.startsWith(`${z}/`))j0.add(`${q0}${C0.slice(z.length)}`);else j0.add(C0);return j0});if(O(q0),w?.type==="dir")I(null),x(!1),h(null);else q1.current?.(q0);p0.current?.(U0)}catch(o){S(o?.message||"Failed to rename file")}},[P1,A]),u4=C(async(z)=>{let f=z||".";for(let o=0;o<50;o+=1){let U0=`untitled${o===0?"":`-${o}`}.md`;try{let j0=(await l6(f,U0,""))?.path||(f==="."?U0:`${f}/${U0}`);if(f&&f!==".")V((C0)=>new Set([...C0,f]));O(j0),S(null),p0.current?.(f),q1.current?.(j0);return}catch(L0){if(L0?.status===409||L0?.code==="file_exists")continue;S(L0?.message||"Failed to create file");return}}S("Failed to create file (untitled name already in use).")},[]),o_=C((z)=>{if(z?.stopPropagation?.(),E0)return;let T=g0(G_.current);u4(T)},[E0,g0,u4]);g(()=>{if(typeof window>"u")return;let z=(T)=>{let w=T?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;G((L0)=>{let j0=L0;for(let C0 of w){if(!C0?.root)continue;if(!j0||C0.path==="."||!C0.path)j0=C0.root;else j0=K3(j0,C0.path,C0.root)}if(j0)c0.current=r9(j0,z0.current,F0.current);return e(!1),j0});let f=G_.current;if(Boolean(f)&&w.some((L0)=>{let j0=L0?.path||"";if(!j0||j0===".")return!0;return f===j0||f.startsWith(`${j0}/`)||j0.startsWith(`${f}/`)}))i0.current.clear();if(!f||!q4.current)return;let q0=_1.current?.get(f);if(q0&&q0.type==="dir")return;if(w.some((L0)=>{let j0=L0?.path||"";if(!j0||j0===".")return!0;return f===j0||f.startsWith(`${j0}/`)}))q1.current?.(f)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),D1.current=$5;let g4=P(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),T=b0.current??M0.current,w=document.visibilityState!=="hidden"&&(T||z.matches&&M0.current);d5(w,F0.current).catch(()=>{})}).current,r_=P(0),j5=P(()=>{if(r_.current)clearTimeout(r_.current);r_.current=setTimeout(()=>{r_.current=0,g4()},250)}).current;g(()=>{if(M0.current)D1.current?.();j5()},[$,j]),g(()=>{D1.current(),g4();let z=setInterval(()=>D1.current(),BG),T=H5("previewHeight",null),w=Number.isFinite(T)?Math.min(Math.max(T,80),600):280;if(w0.current=w,x1.current)x1.current.style.setProperty("--preview-height",`${w}px`);let f=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),o=()=>j5();if(f.addEventListener)f.addEventListener("change",o);else if(f.addListener)f.addListener(o);return document.addEventListener("visibilitychange",o),()=>{if(clearInterval(z),Y1.current)cancelAnimationFrame(Y1.current),Y1.current=0;if(f.removeEventListener)f.removeEventListener("change",o);else if(f.removeListener)f.removeListener(o);if(document.removeEventListener("visibilitychange",o),r_.current)clearTimeout(r_.current),r_.current=0;if(X0.current)clearTimeout(X0.current),X0.current=null;d5(!1,F0.current).catch(()=>{})}},[]);let s_=f0(()=>e9(X,N,p),[X,N,p]),u_=f0(()=>new Map(s_.map((z)=>[z.node.path,z.node])),[s_]),P5=f0(()=>n9(m0),[m0]);_1.current=u_;let B1=(W?_1.current.get(W):null)?.type==="dir";g(()=>{if(!W||!B1){I0(null),D0.current=null,u0.current=null;return}let z=W,T=`${p?"hidden":"visible"}:${W}`,w=i0.current,f=w.get(T);if(f?.root){w.delete(T),w.set(T,f);let U0=a9(f.root,Boolean(f.truncated),r0);if(U0)D0.current=U0,u0.current=W,I0({loading:!1,error:null,payload:U0});return}let o=D0.current,q0=u0.current;I0({loading:!0,error:null,payload:q0===W?o:null}),c5(W,UG,p).then((U0)=>{if(G_.current!==z)return;let L0={root:U0?.root,truncated:Boolean(U0?.truncated)};w.delete(T),w.set(T,L0);while(w.size>LG){let C0=w.keys().next().value;if(!C0)break;w.delete(C0)}let j0=a9(L0.root,L0.truncated,r0);D0.current=j0,u0.current=W,I0({loading:!1,error:null,payload:j0})}).catch((U0)=>{if(G_.current!==z)return;I0({loading:!1,error:U0?.message||"Failed to load folder size chart",payload:q0===W?o:null})})},[W,B1,p,r0]);let R1=Boolean(D&&D.kind==="text"&&!B1&&(!D.size||D.size<=262144)),Q5=R1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",E_=Boolean(W&&W!=="."),Q_=Boolean(W&&!B1),c1=Boolean(W&&!B1),C1=W&&B1?T8(W,p):null,u1=C(()=>$1(!1),[]),z1=C(async(z)=>{u1();try{await z?.()}catch(T){console.warn("[workspace-explorer] Header menu action failed:",T)}},[u1]);g(()=>{let z=O0.current;if(Q0.current)Q0.current.dispose(),Q0.current=null;if(!z)return;if(z.innerHTML="",!W||B1||!D||D.error)return;let T={path:W,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},w=n0.resolve(T)||n0.get("workspace-preview-default");if(!w)return;let f=w.mount(z,T);return Q0.current=f,()=>{if(Q0.current===f)f.dispose(),Q0.current=null;z.innerHTML=""}},[W,B1,D]);let M_=(z)=>{let T=z?.target;if(T instanceof Element)return T;return T?.parentElement||null},k_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},I_=P((z)=>{let T=M_(z),w=T?.closest?.("[data-path]");if(!w)return;let f=w.dataset.path;if(!f||f===".")return;let o=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),q0=Boolean(T?.closest?.(".workspace-caret"));if(o||q0)return;if(Q1.current===f)return;A_(f)}).current,a_=P((z)=>{if(k0.current){k0.current=!1;return}let T=M_(z),w=T?.closest?.("[data-path]");if(k1.current?.focus?.(),!w)return;let f=w.dataset.path,o=w.dataset.type,q0=Boolean(T?.closest?.(".workspace-caret")),U0=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),L0=G_.current===f,j0=Q1.current;if(j0){if(j0===f)return;P1()}let C0=o==="file"&&o1.current===f&&!q0&&!U0;if(o==="dir"){if(o1.current=null,O(f),I(null),h(null),x(!1),!z0.current.has(f))p0.current?.(f);if(L0&&!q0)return;V((Y_)=>{let l1=new Set(Y_);if(l1.has(f))l1.delete(f);else l1.add(f);return l1})}else{o1.current=null,O(f);let w1=_1.current.get(f);if(w1)h1.current?.(w1.path,w1);if(!U0&&!q0&&WG(f))M1.current?.(f,q4.current);else{let l1=!U0&&!q0;q1.current?.(f,{autoOpen:l1})}}}).current,Z_=P(()=>{c0.current="",D1.current(),Array.from(z0.current||[]).filter((T)=>T&&T!==".").forEach((T)=>p0.current?.(T))}).current,r1=P(()=>{o1.current=null,O(null),I(null),h(null),x(!1)}).current,T_=P(()=>{Y0((z)=>{let T=!z;if(typeof window<"u")G1("workspaceShowHidden",String(T));return F0.current=T,d5(!0,T).catch(()=>{}),c0.current="",D1.current?.(),Array.from(z0.current||[]).filter((f)=>f&&f!==".").forEach((f)=>p0.current?.(f)),T})}).current,K4=P((z)=>{if(M_(z)?.closest?.("[data-path]"))return;r1()}).current,H1=C(async(z)=>{if(!z)return;let T=z.split("/").pop()||z;if(!window.confirm(`Delete "${T}"? This cannot be undone.`))return;try{await n6(z);let f=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(G_.current===z)r1();p0.current?.(f),S(null)}catch(f){I((o)=>({...o||{},error:f.message||"Failed to delete file"}))}},[r1]),t_=C((z)=>{let T=k1.current;if(!T||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;T.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),m4=C((z)=>{let T=s_;if(!T||T.length===0)return;let w=W?T.findIndex((f)=>f.node.path===W):-1;if(z.key==="ArrowDown"){z.preventDefault();let f=Math.min(w+1,T.length-1),o=T[f];if(!o)return;if(O(o.node.path),o.node.type!=="dir")h1.current?.(o.node.path,o.node),q1.current?.(o.node.path);else I(null),x(!1),h(null);t_(o.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let f=w<=0?0:w-1,o=T[f];if(!o)return;if(O(o.node.path),o.node.type!=="dir")h1.current?.(o.node.path,o.node),q1.current?.(o.node.path);else I(null),x(!1),h(null);t_(o.node.path);return}if(z.key==="ArrowRight"&&w>=0){let f=T[w];if(f?.node?.type==="dir"&&!N.has(f.node.path))z.preventDefault(),p0.current?.(f.node.path),V((o)=>new Set([...o,f.node.path]));return}if(z.key==="ArrowLeft"&&w>=0){let f=T[w];if(f?.node?.type==="dir"&&N.has(f.node.path))z.preventDefault(),V((o)=>{let q0=new Set(o);return q0.delete(f.node.path),q0});return}if(z.key==="Enter"&&w>=0){z.preventDefault();let f=T[w];if(!f)return;let o=f.node.path;if(f.node.type==="dir"){if(!z0.current.has(o))p0.current?.(o);V((U0)=>{let L0=new Set(U0);if(L0.has(o))L0.delete(o);else L0.add(o);return L0}),I(null),h(null),x(!1)}else h1.current?.(o,f.node),q1.current?.(o);return}if((z.key==="Delete"||z.key==="Backspace")&&w>=0){let f=T[w];if(!f||f.node.type==="dir")return;z.preventDefault(),H1(f.node.path);return}if(z.key==="Escape")z.preventDefault(),r1()},[r1,H1,N,s_,t_,W]),h4=C((z)=>{let T=M_(z),w=T?.closest?.(".workspace-row");if(!w)return;let f=w.dataset.type,o=w.dataset.path;if(!o||o===".")return;if(Q1.current===o)return;let q0=z?.touches?.[0];if(!q0)return;if(R0.current={path:k_(T)?o:null,dragging:!1,startX:q0.clientX,startY:q0.clientY},f!=="file")return;if(X0.current)clearTimeout(X0.current);X0.current=setTimeout(()=>{if(X0.current=null,R0.current?.dragging)return;H1(o)},600)},[H1]),P_=C(()=>{if(X0.current)clearTimeout(X0.current),X0.current=null;let z=R0.current;if(z?.dragging&&z.path){let T=A1.current||b1(),w=U_.current;if(typeof w==="function")w(z.path,T)}R0.current={path:null,dragging:!1,startX:0,startY:0},K1.current=0,$0(!1),G0(null),E1(null),N1(),$_()},[b1,$_,E1,N1]),p4=C((z)=>{let T=R0.current,w=z?.touches?.[0];if(!w||!T?.path){if(X0.current)clearTimeout(X0.current),X0.current=null;return}let f=Math.abs(w.clientX-T.startX),o=Math.abs(w.clientY-T.startY),q0=f>8||o>8;if(q0&&X0.current)clearTimeout(X0.current),X0.current=null;if(!T.dragging&&q0)T.dragging=!0,$0(!0),G0("move"),V1(T.path);if(T.dragging){z.preventDefault(),b_(w.clientX,w.clientY);let U0=document.elementFromPoint(w.clientX,w.clientY),L0=L_(U0)||b1();if(A1.current!==L0)E1(L0);v_(L0)}},[L_,b1,V1,b_,E1,v_]),Z5=P((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let w=z.clientY,f=w0.current||280,o=z.currentTarget;o.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let q0=w,U0=(j0)=>{q0=j0.clientY;let C0=T.clientHeight-80,w1=Math.min(Math.max(f-(j0.clientY-w),80),C0);T.style.setProperty("--preview-height",`${w1}px`),w0.current=w1},L0=()=>{let j0=T.clientHeight-80,C0=Math.min(Math.max(f-(q0-w),80),j0);w0.current=C0,o.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("previewHeight",String(Math.round(C0))),document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",L0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",L0)}).current,g_=P((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let w=z.touches[0];if(!w)return;let f=w.clientY,o=w0.current||280,q0=z.currentTarget;q0.classList.add("dragging"),document.body.style.userSelect="none";let U0=(j0)=>{let C0=j0.touches[0];if(!C0)return;j0.preventDefault();let w1=T.clientHeight-80,Y_=Math.min(Math.max(o-(C0.clientY-f),80),w1);T.style.setProperty("--preview-height",`${Y_}px`),w0.current=Y_},L0=()=>{q0.classList.remove("dragging"),document.body.style.userSelect="",G1("previewHeight",String(Math.round(w0.current||o))),document.removeEventListener("touchmove",U0),document.removeEventListener("touchend",L0),document.removeEventListener("touchcancel",L0)};document.addEventListener("touchmove",U0,{passive:!1}),document.addEventListener("touchend",L0),document.addEventListener("touchcancel",L0)}).current,m_=async()=>{if(!W)return;try{let z=await c6(W);if(z.media_id)h(z.media_id)}catch(z){I((T)=>({...T||{},error:z.message||"Failed to attach"}))}},J4=async()=>{if(!W||B1)return;await H1(W)},h_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},c4=C((z)=>{if(!h_(z))return;if(z.preventDefault(),K1.current+=1,!X1.current)$0(!0);G0("upload");let T=y1(z)||b1();E1(T),v_(T)},[b1,y1,E1,v_]),p_=C((z)=>{if(!h_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!X1.current)$0(!0);if(p1.current!=="upload")G0("upload");let T=y1(z)||b1();if(A1.current!==T)E1(T);v_(T)},[b1,y1,E1,v_]),C_=C((z)=>{if(!h_(z))return;if(z.preventDefault(),K1.current=Math.max(0,K1.current-1),K1.current===0)$0(!1),G0(null),E1(null),N1()},[E1,N1]),I1=C(async(z,T=".")=>{let w=Array.from(z||[]);if(w.length===0)return;let f=T&&T!==""?T:".",o=f!=="."?f:"workspace root";o0(!0);try{let q0=null;for(let U0 of w)try{q0=await k8(U0,f)}catch(L0){let j0=L0?.status,C0=L0?.code;if(j0===409||C0==="file_exists"){let w1=U0?.name||"file";if(!window.confirm(`"${w1}" already exists in ${o}. Overwrite?`))continue;q0=await k8(U0,f,{overwrite:!0})}else throw L0}if(q0?.path)o1.current=q0.path,O(q0.path),q1.current?.(q0.path);p0.current?.(f)}catch(q0){S(q0.message||"Failed to upload file")}finally{o0(!1)}},[]),O4=C(async(z,T)=>{if(!z)return;let w=_1.current?.get(z);if(!w)return;let f=T&&T!==""?T:".",o=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(f===o)return;try{let U0=(await i6(z,f))?.path||z;if(w.type==="dir")V((L0)=>{let j0=new Set;for(let C0 of L0)if(C0===z)j0.add(U0);else if(C0.startsWith(`${z}/`))j0.add(`${U0}${C0.slice(z.length)}`);else j0.add(C0);return j0});if(O(U0),w.type==="dir")I(null),x(!1),h(null);else q1.current?.(U0);p0.current?.(o),p0.current?.(f)}catch(q0){S(q0?.message||"Failed to move entry")}},[]);U_.current=O4;let D4=C(async(z)=>{if(!h_(z))return;z.preventDefault(),K1.current=0,$0(!1),G0(null),A0(null),N1();let T=Array.from(z?.dataTransfer?.files||[]);if(T.length===0)return;let w=A1.current||y1(z)||b1();await I1(T,w)},[b1,y1,I1]),l4=C((z)=>{if(z?.stopPropagation?.(),E0)return;let T=z?.currentTarget?.dataset?.uploadTarget||".";H0.current=T,W0.current?.click()},[E0]),L1=C(()=>{if(E0)return;let z=G_.current,T=z?_1.current?.get(z):null;H0.current=T?.type==="dir"?T.path:".",W0.current?.click()},[E0]),A4=C(()=>{z1(()=>o_(null))},[z1,o_]),Y5=C(()=>{z1(()=>L1())},[z1,L1]),g1=C(()=>{z1(()=>Z_())},[z1,Z_]),X_=C(()=>{z1(()=>T_())},[z1,T_]),e_=C(()=>{if(!W||!R1)return;z1(()=>M1.current?.(W,D))},[z1,W,R1,D]),d4=C(()=>{if(!W||W===".")return;z1(()=>A_(W))},[z1,W,A_]),G4=C(()=>{if(!W||B1)return;z1(()=>J4())},[z1,W,B1,J4]),E4=C(()=>{if(!W||B1)return;z1(()=>m_())},[z1,W,B1,m_]),X4=C(()=>{if(!C1)return;if(u1(),typeof window<"u")window.open(C1,"_blank","noopener")},[u1,C1]),S_=C(()=>{u1(),Z?.()},[u1,Z]),F_=C(()=>{u1(),Y?.()},[u1,Y]),M4=C(()=>{u1(),q?.()},[u1,q]),i4=C((z)=>{if(!z||z.button!==0)return;let T=z.currentTarget;if(!T||!T.dataset)return;let w=T.dataset.path;if(!w||w===".")return;if(Q1.current===w)return;let f=M_(z);if(f?.closest?.("button, a, input, .workspace-caret"))return;if(!k_(f))return;z.preventDefault(),S0.current={path:w,dragging:!1,startX:z.clientX,startY:z.clientY};let o=(U0)=>{let L0=S0.current;if(!L0?.path)return;let j0=Math.abs(U0.clientX-L0.startX),C0=Math.abs(U0.clientY-L0.startY),w1=j0>4||C0>4;if(!L0.dragging&&w1)L0.dragging=!0,k0.current=!0,$0(!0),G0("move"),V1(L0.path),b_(U0.clientX,U0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(L0.dragging){U0.preventDefault(),b_(U0.clientX,U0.clientY);let Y_=document.elementFromPoint(U0.clientX,U0.clientY),l1=L_(Y_)||b1();if(A1.current!==l1)E1(l1);v_(l1)}},q0=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",q0);let U0=S0.current;if(U0?.dragging&&U0.path){let L0=A1.current||b1(),j0=U_.current;if(typeof j0==="function")j0(U0.path,L0)}S0.current={path:null,dragging:!1,startX:0,startY:0},K1.current=0,$0(!1),G0(null),E1(null),N1(),$_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",q0)},[L_,b1,V1,b_,$_,E1,v_,N1]),x_=C(async(z)=>{let T=Array.from(z?.target?.files||[]);if(T.length===0)return;let w=H0.current||".";if(await I1(T,w),H0.current=".",z?.target)z.target.value=""},[I1]);return L`
        <aside
            class=${`workspace-sidebar${d?" workspace-drop-active":""}`}
            data-workspace-scale=${m0}
            ref=${x1}
            onDragEnter=${c4}
            onDragOver=${p_}
            onDragLeave=${C_}
            onDrop=${D4}
        >
            <input type="file" multiple style="display:none" ref=${W0} onChange=${x_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${t}
                            class=${`workspace-menu-button${h0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),$1((T)=>!T)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${h0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${h0&&L`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${A4} disabled=${E0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Y5} disabled=${E0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${g1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${p?" active":""}`} role="menuitem" onClick=${X_}>
                                    ${p?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${W&&L`<div class="workspace-menu-separator"></div>`}
                                ${W&&!B1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${e_} disabled=${!R1}>Open in editor</button>
                                `}
                                ${E_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${d4}>Rename selected</button>
                                `}
                                ${c1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${E4}>Download selected file</button>
                                `}
                                ${C1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X4}>Download selected folder (zip)</button>
                                `}
                                ${Q_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${G4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Z&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${F_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M4}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${o_} title="New file" disabled=${E0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${Z_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${K4}>
                ${E0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${r&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${X&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${k1}
                        tabIndex="0"
                        onClick=${a_}
                        onDblClick=${I_}
                        onKeyDown=${m4}
                        onTouchStart=${h4}
                        onTouchEnd=${P_}
                        onTouchMove=${p4}
                        onTouchCancel=${P_}
                    >
                        ${s_.map(({node:z,depth:T})=>{let w=z.type==="dir",f=z.path===W,o=z.path===M,q0=w&&N.has(z.path),U0=J0&&z.path===J0,L0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${f?" selected":""}${U0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+T*P5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${i4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${w?q0?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${w?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${w?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${o?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${a}
                                                value=${A}
                                                onInput=${(j0)=>J(j0?.target?.value||"")}
                                                onKeyDown=${(j0)=>{if(j0.key==="Enter")j0.preventDefault(),j_();else if(j0.key==="Escape")j0.preventDefault(),P1()}}
                                                onBlur=${P1}
                                                onClick=${(j0)=>j0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${w&&!q0&&L0>0&&L`
                                        <span class="workspace-count">${L0}</span>
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
            ${W&&L`
                <div class="workspace-preview-splitter-h" onMouseDown=${Z5} onTouchStart=${g_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${o_} title="New file" disabled=${E0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!B1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>R1&&M1.current?.(W,D)}
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
                                    <a class="workspace-download" href=${T8(W,p)}
                                        title="Download folder as zip" onClick=${(z)=>z.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${m_} title="Download">
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
                        ${y0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${y0?.error&&L`<div class="workspace-error">${y0.error}</div>`}
                        ${y0?.payload&&y0.payload.segments?.length>0&&L`
                            <${FG} payload=${y0.payload} />
                        `}
                        ${y0?.payload&&(!y0.payload.segments||y0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!B1&&L`
                        <div class="workspace-preview-body" ref=${O0}></div>
                    `}
                    ${i&&L`
                        <div class="workspace-download-card">
                            <${zG} mediaId=${i} />
                        </div>
                    `}
                </div>
            `}
            ${N0&&L`
                <div class="workspace-drag-ghost" ref=${Y4}>${N0.label}</div>
            `}
        </aside>
    `}var HG=new Set(["kanban-editor","mindmap-editor"]);function JG(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function Gj(_,$,j){let Q=JG(_,$,j);return HG.has(Q)}var OG=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,DG=/\.(csv|tsv)$/i,AG=/\.pdf$/i,EG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Xj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Nj({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:K,onEditSource:X,previewTabs:G,paneOverrides:N,onToggleDock:V,dockVisible:W,onToggleZen:O,zenMode:M,onPopOutTab:k}){let[A,J]=m(null),D=P(null);g(()=>{if(!A)return;let H=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[A]),g(()=>{let H=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let p=_.findIndex((Y0)=>Y0.id===$);if(S.shiftKey){let Y0=_[(p-1+_.length)%_.length];j?.(Y0.id)}else{let Y0=_[(p+1)%_.length];j?.(Y0.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let p=document.querySelector(".editor-pane");if(p&&p.contains(document.activeElement)){if(S.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Q]);let I=C((H,S)=>{if(H.button===1){H.preventDefault(),Q?.(S);return}if(H.button===0)j?.(S)},[j,Q]),i=C((H,S)=>{H.preventDefault(),J({id:S,x:H.clientX,y:H.clientY})},[]),h=C((H)=>{H.preventDefault(),H.stopPropagation()},[]),r=C((H,S)=>{H.preventDefault(),H.stopPropagation(),Q?.(S)},[Q]);g(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let e=C((H)=>{if(!(N instanceof Map))return null;return N.get(H)||null},[N]),R=f0(()=>_.find((H)=>H.id===A?.id)||null,[A?.id,_]),x=f0(()=>{let H=A?.id;if(!H)return!1;return Gj(H,e(H),(S)=>n0.resolve(S))},[A?.id,e]);if(!_.length)return null;return L`
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
                        onClick=${(S)=>r(S,H.id)}
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
                ${K&&/\.(md|mdx|markdown)$/i.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{K(A.id),J(null)}}>
                        ${G?.has(A.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${OG.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id),S=A.id.split("/").pop()||"document",p="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(S);window.open(p,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${DG.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${AG.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${EG.test(A.id)&&!Xj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Xj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var MG=400,V3=60,Vj=220,B3="mdPreviewHeight";function kG(){try{let _=localStorage.getItem(B3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=V3?$:Vj}catch{return Vj}}function W3({getContent:_,path:$,onClose:j}){let[Q,Z]=m(""),[Y,q]=m(kG),K=P(null),X=P(null),G=P(""),N=P(_);return N.current=_,g(()=>{let O=()=>{let k=N.current?.()||"";if(k===G.current)return;G.current=k;try{let A=O_(k,null,{sanitize:!1});Z(A)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let M=setInterval(O,MG);return()=>clearInterval(M)},[]),g(()=>{if(K.current&&Q)W4(K.current).catch(()=>{})},[Q]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let M=O.clientY,k=X.current?.offsetHeight||Y,A=X.current?.parentElement,J=A?A.offsetHeight*0.7:500,D=O.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(h)=>{let r=Math.min(Math.max(k-(h.clientY-M),V3),J);q(r)},i=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(B3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",i)}}
            onTouchStart=${(O)=>{O.preventDefault();let M=O.touches[0];if(!M)return;let k=M.clientY,A=X.current?.offsetHeight||Y,J=X.current?.parentElement,D=J?J.offsetHeight*0.7:500,I=O.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let i=(r)=>{let e=r.touches[0];if(!e)return;r.preventDefault();let R=Math.min(Math.max(A-(e.clientY-k),V3),D);q(R)},h=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(B3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",i),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
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
                ref=${K}
                dangerouslySetInnerHTML=${{__html:Q}}
            />
        </div>
    `}function Bj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=P(_);Y.current=_;let q=P($);q.current=$;let K=P(j);K.current=j;let X=P(Q);X.current=Q,g(()=>{let G=new P8((V,W)=>Y.current(V,W),(V)=>q.current(V),{chatJid:Z});G.connect();let N=()=>{G.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),G.disconnect()}},[Z])}function Wj(){let[_,$]=m(!1),[j,Q]=m("default"),Z=P(!1);g(()=>{let X=z5("notificationsEnabled",!1);if(Z.current=X,$(X),typeof Notification<"u")Q(Notification.permission)},[]),g(()=>{Z.current=_},[_]);let Y=C(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),q=C(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),G1("notificationsEnabled","false");return}}let X=!Z.current;Z.current=X,$(X),G1("notificationsEnabled",String(X))},[Y]),K=C((X,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let N=new Notification(X,{body:G});return N.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:K}}var G8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Uj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=m(null),[Y,q]=m(!1),K=P(!1),X=P(null),G=P(!1),N=P(null),V=P(null),W=P(0);g(()=>{K.current=Y},[Y]),g(()=>{V.current=Q},[Q]),g(()=>{W.current+=1,N.current=null,G.current=!1,K.current=!1,q(!1)},[j]);let O=C(async(A=null)=>{let J=W.current;try{if(A){let D=await C6(A,50,0,j);if(J!==W.current)return;Z(D.posts),q(!1)}else{let D=await o4(10,null,j);if(J!==W.current)return;Z(D.posts),q(D.has_more)}}catch(D){if(J!==W.current)return;console.error("Failed to load posts:",D)}},[j]),M=C(async()=>{let A=W.current;try{let J=await o4(10,null,j);if(A!==W.current)return;Z((D)=>{if(!D||D.length===0)return J.posts;return G8([...J.posts,...D])}),q((D)=>D||J.has_more)}catch(J){if(A!==W.current)return;console.error("Failed to refresh timeline:",J)}},[j]),k=C(async(A={})=>{let J=W.current,D=V.current;if(!D||D.length===0)return;if(G.current)return;let{preserveScroll:I=!0,preserveMode:i="top",allowRepeat:h=!1}=A,r=(x)=>{if(!I){x();return}if(i==="top")$(x);else _(x)},R=D.slice().sort((x,H)=>x.id-H.id)[0]?.id;if(!Number.isFinite(R))return;if(!h&&N.current===R)return;G.current=!0,N.current=R;try{let x=await o4(10,R,j);if(J!==W.current)return;if(x.posts.length>0)r(()=>{Z((H)=>G8([...x.posts,...H||[]])),q(x.has_more)});else q(!1)}catch(x){if(J!==W.current)return;console.error("Failed to load more posts:",x)}finally{if(J===W.current)G.current=!1}},[j,_,$]);return g(()=>{X.current=k},[k]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:K,loadPosts:O,refreshTimeline:M,loadMore:k,loadMoreRef:X,loadingMoreRef:G,lastBeforeIdRef:N}}function Lj(){let[_,$]=m(null),[j,Q]=m({text:"",totalLines:0}),[Z,Y]=m(""),[q,K]=m({text:"",totalLines:0}),[X,G]=m(null),[N,V]=m(null),[W,O]=m(null),M=P(null),k=P(0),A=P(!1),J=P(""),D=P(""),I=P(null),i=P(null),h=P(null),r=P(null),e=P(!1),R=P(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:K,pendingRequest:X,setPendingRequest:G,currentTurnId:N,setCurrentTurnId:V,steerQueuedTurnId:W,setSteerQueuedTurnId:O,lastAgentEventRef:M,lastSilenceNoticeRef:k,isAgentRunningRef:A,draftBufferRef:J,thoughtBufferRef:D,pendingRequestRef:I,stalledPostIdRef:i,currentTurnIdRef:h,steerQueuedTurnIdRef:r,thoughtExpandedRef:e,draftExpandedRef:R}}function Fj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.clientX,O=$.current||280,M=N.currentTarget;M.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=W,A=(D)=>{k=D.clientX;let I=Math.min(Math.max(O+(D.clientX-W),160),600);V.style.setProperty("--sidebar-width",`${I}px`),$.current=I},J=()=>{let D=Math.min(Math.max(O+(k-W),160),600);$.current=D,M.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",G1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,Y=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.touches[0];if(!W)return;let O=W.clientX,M=$.current||280,k=N.currentTarget;k.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(M+(I.clientX-O),160),600);V.style.setProperty("--sidebar-width",`${i}px`),$.current=i},J=()=>{k.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",G1("sidebarWidth",String(Math.round($.current||M))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.clientX,O=j.current||$.current||280,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=W,A=(D)=>{k=D.clientX;let I=Math.min(Math.max(O+(D.clientX-W),200),800);V.style.setProperty("--editor-width",`${I}px`),j.current=I},J=()=>{let D=Math.min(Math.max(O+(k-W),200),800);j.current=D,M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,K=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.touches[0];if(!W)return;let O=W.clientX,M=j.current||$.current||280,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(M+(I.clientX-O),200),800);V.style.setProperty("--editor-width",`${i}px`),j.current=i},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",G1("editorWidth",String(Math.round(j.current||M))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,X=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.clientY,O=Q?.current||200,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=W,A=(D)=>{k=D.clientY;let I=Math.min(Math.max(O-(D.clientY-W),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${I}px`),Q)Q.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let D=Math.min(Math.max(O-(k-W),100),window.innerHeight*0.5);if(Q)Q.current=D;M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,G=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.touches[0];if(!W)return;let O=W.clientY,M=Q?.current||200,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(M-(I.clientY-O),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${i}px`),Q)Q.current=i;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",G1("dockHeight",String(Math.round(Q?.current||M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:G}}function IG(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,K]of _.entries()){let X=q;if(Q==="dir"){if(q===$)X=j,Z=!0;else if(q.startsWith(`${$}/`))X=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)X=j,Z=!0;Y.set(X,K)}return Z?Y:_}function zj({onTabClosed:_}={}){let $=P(_);$.current=_;let[j,Q]=m(()=>a0.getTabs()),[Z,Y]=m(()=>a0.getActiveId()),[q,K]=m(()=>a0.getTabs().length>0);g(()=>{return a0.onChange((R,x)=>{Q(R),Y(x),K(R.length>0)})},[]);let[X,G]=m(()=>new Set),[N,V]=m(()=>new Map),W=C((R)=>{G((x)=>{let H=new Set(x);if(H.has(R))H.delete(R);else H.add(R);return H})},[]),O=C((R)=>{G((x)=>{if(!x.has(R))return x;let H=new Set(x);return H.delete(R),H})},[]),M=C((R)=>{V((x)=>{if(!x.has(R))return x;let H=new Map(x);return H.delete(R),H})},[]),k=C((R,x={})=>{if(!R)return;let H=typeof x?.paneOverrideId==="string"&&x.paneOverrideId.trim()?x.paneOverrideId.trim():null,S={path:R,mode:"edit"};try{if(!(H?n0.get(H):n0.resolve(S))){if(!n0.get("editor")){console.warn(`[openEditor] No pane handler for: ${R}`);return}}}catch(Y0){console.warn(`[openEditor] paneRegistry.resolve() error for "${R}":`,Y0)}let p=typeof x?.label==="string"&&x.label.trim()?x.label.trim():void 0;if(a0.open(R,p),H)V((Y0)=>{if(Y0.get(R)===H)return Y0;let d=new Map(Y0);return d.set(R,H),d})},[]),A=C(()=>{let R=a0.getActiveId();if(R){let x=a0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}a0.close(R),O(R),M(R),$.current?.(R)}},[M,O]),J=C((R)=>{let x=a0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}a0.close(R),O(R),M(R),$.current?.(R)},[M,O]),D=C((R)=>{a0.activate(R)},[]),I=C((R)=>{let x=a0.getTabs().filter((p)=>p.id!==R&&!p.pinned),H=x.filter((p)=>p.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let S=x.map((p)=>p.id);a0.closeOthers(R),S.forEach((p)=>{O(p),M(p),$.current?.(p)})},[M,O]),i=C(()=>{let R=a0.getTabs().filter((S)=>!S.pinned),x=R.filter((S)=>S.dirty).length;if(x>0){if(!window.confirm(`${x} unsaved tab${x>1?"s":""} will be closed. Continue?`))return}let H=R.map((S)=>S.id);a0.closeAll(),H.forEach((S)=>{O(S),M(S),$.current?.(S)})},[M,O]),h=C((R)=>{a0.togglePin(R)},[]),r=C((R)=>{if(!R)return;V((x)=>{if(x.get(R)==="editor")return x;let H=new Map(x);return H.set(R,"editor"),H}),a0.activate(R)},[]),e=C(()=>{let R=a0.getActiveId();if(R)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:R}}))},[]);return g(()=>{let R=(x)=>{let{oldPath:H,newPath:S,type:p}=x.detail||{};if(!H||!S)return;if(p==="dir"){for(let Y0 of a0.getTabs())if(Y0.path===H||Y0.path.startsWith(`${H}/`)){let d=`${S}${Y0.path.slice(H.length)}`;a0.rename(Y0.id,d)}}else a0.rename(H,S);V((Y0)=>IG(Y0,H,S,p))};return window.addEventListener("workspace-file-renamed",R),()=>window.removeEventListener("workspace-file-renamed",R)},[]),g(()=>{let R=(x)=>{if(a0.hasUnsaved())x.preventDefault(),x.returnValue=""};return window.addEventListener("beforeunload",R),()=>window.removeEventListener("beforeunload",R)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:X,tabPaneOverrides:N,openEditor:k,closeEditor:A,handleTabClose:J,handleTabActivate:D,handleTabCloseOthers:I,handleTabCloseAll:i,handleTabTogglePin:h,handleTabTogglePreview:W,handleTabEditSource:r,revealInExplorer:e}}function U3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var L3=U3("warning",30000),Hj=U3("finalize",120000),F3=U3("refresh",30000),Jj=30000;function Oj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Dj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Aj(_=30000){let[,$]=m(0);g(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function z3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}function Ej(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function H3(_){return String(_||"").trim()||"web:default"}function Mj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function kj(_={}){return L4(_)&&r8(_)}function TG(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function PG(_={},$={}){if(!kj(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=TG({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function Ij(_={}){if(!kj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,PG({window:$,document:j})},K=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},X=()=>{K();for(let V of[80,220,420]){let W=$.setTimeout?.(()=>{Z.delete(W),K()},V);if(W!=null)Z.add(W)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;X()},N=$.visualViewport;return X(),$.addEventListener("focus",X),$.addEventListener("pageshow",X),$.addEventListener("resize",X),$.addEventListener("orientationchange",X),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",X,!0),N?.addEventListener?.("resize",X),N?.addEventListener?.("scroll",X),()=>{Y(),$.removeEventListener("focus",X),$.removeEventListener("pageshow",X),$.removeEventListener("resize",X),$.removeEventListener("orientationchange",X),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",X,!0),N?.removeEventListener?.("resize",X),N?.removeEventListener?.("scroll",X)}}function CG(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function q_(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:CG($,j)}var SG=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Tj(_){return SG.has(String(_||"").trim())}function xG(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function J3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(xG(_),{detail:Q})),!0}var yG=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Pj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(L4({window:j,navigator:Q}))};Z();let q=yG.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Z),()=>K.removeEventListener("change",Z);if(typeof K.addListener==="function")return K.addListener(Z),()=>K.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let K of q)K();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function Cj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function Sj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(X)=>{let G=X?.detail?.path,N=typeof X?.detail?.label==="string"&&X.detail.label.trim()?X.detail.label.trim():void 0;if(G)Q?.(G,N)},q=(X)=>{let G=X?.detail?.path,N=typeof X?.detail?.label==="string"&&X.detail.label.trim()?X.detail.label.trim():void 0;if(G)Z?.(G,N)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((X)=>j.addEventListener(X,Y)),j.addEventListener("pane:popout",q),()=>{K.forEach((X)=>j.removeEventListener(X,Y)),j.removeEventListener("pane:popout",q)}}function xj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function yj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Q?.();return}if(K?.key==="Escape"&&Y())K.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}var RG="piclaw_btw_session",wj=900,Rj="__piclawRenameBranchFormLock__";function wG(){try{return import.meta.url}catch{return null}}function O3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function Z6(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function fj(_={}){let $=_.importMetaUrl===void 0?wG():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin;try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((X)=>String(X?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,Q||"http://localhost").searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function D3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[Rj];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[Rj]=Q,Q}function vj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function bj(_={}){let $=typeof _.readItem==="function"?_.readItem:J_,j=_.storageKey||RG,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",K=typeof Z.thinking==="string"?Z.thinking:"",X=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:K,error:G==="error"?X||"BTW stream interrupted. You can retry.":X,model:null,status:G}}catch{return null}}function uj(_,$={}){let j=$.defaultChatJid||"web:default",Q=Z6(_,"chat_jid",j),Z=O3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=O3(_?.get?.("pane_popout")),q=Z6(_,"pane_path"),K=Z6(_,"pane_label"),X=O3(_?.get?.("branch_loader")),G=Z6(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:K,branchLoaderMode:X,branchLoaderSourceChatJid:G}}function gj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K,now:X=Date.now()}=_||{};if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||X<Number(Z||0)||G.inFlight||X<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),K?.(!0),!0}function mj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_||{};$?.(!1),j?.("")}async function hj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:X,renameChatBranch:G,refreshActiveChatAgents:N,refreshCurrentChatBranches:V,showIntentToast:W,closeRenameForm:O,now:M=()=>Date.now()}=_||{};if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let k=M(),A=K?.()||null;if(!A)return!1;if(Y?.current||k<Number(q?.current||0)||A.inFlight||k<Number(A.cooldownUntil||0))return!1;Y.current=!0,A.inFlight=!0,X?.(!0);try{let J=j.agent_name||"",D=y8(Q,J);if(!D.canSubmit)return W?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let I=D.normalized||J,i=await G(j.chat_jid,{agentName:I});await Promise.allSettled([N?.(),V?.()]);let h=i?.branch?.agent_name||I||J;return W?.("Branch renamed",`@${h}`,"info",3500),O?.(),!0}catch(J){let D=J instanceof Error?J.message:String(J||"Could not rename branch."),I=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return W?.("Could not rename branch",I||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,X?.(!1);let J=M()+wj;if(q)q.current=J;let D=K?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=J}}async function pj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:K,refreshActiveChatAgents:X,refreshCurrentChatBranches:G,showIntentToast:N,baseHref:V,chatOnlyMode:W,navigate:O,confirm:M=(r)=>window.confirm(r)}=_||{};if(!$)return!1;let k=typeof j==="string"&&j.trim()?j.trim():"",A=typeof Q==="string"&&Q.trim()?Q.trim():"",J=k||Z?.chat_jid||A;if(!J)return N?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Z?.chat_jid===J?Z:null)||Y.find((r)=>r?.chat_jid===J)||q.find((r)=>r?.chat_jid===J)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return N?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let i=`@${D?.agent_name||J}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!M(`Prune ${i}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(J),await Promise.allSettled([X?.(),G?.()]);let r=D?.root_chat_jid||"web:default";N?.("Branch pruned",`${i} has been archived.`,"info",3000);let e=F4(V,r,{chatOnly:W});return O?.(e),!0}catch(r){let e=r instanceof Error?r.message:String(r||"Could not prune branch.");return N?.("Could not prune branch",e||"Could not prune branch.","warning",5000),!1}}async function cj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:K,chatOnlyMode:X,navigate:G}=_||{},N=typeof $==="string"?$.trim():"";if(!N||typeof j!=="function")return!1;try{let V=Q.find((J)=>J?.chat_jid===N)||null,W=await j(N);await Promise.allSettled([Z?.(),Y?.()]);let O=W?.branch,M=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():N,k=I2(V?.agent_name,O?.agent_name,M);q?.("Branch restored",k,"info",4200);let A=F4(K,M,{chatOnly:X});return G?.(A),!0}catch(V){let W=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",W||"Could not restore branch.","warning",5000),!1}}async function lj(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_||{};try{Q?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(q())return!1;let X=K?.branch,G=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let N=F4(Y,G,{chatOnly:!0});return Z?.(N,{replace:!0}),!0}catch(K){if(q())return!1;return Q?.({status:"error",message:e5(K)}),!1}}async function dj(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:K,baseHref:X}=_||{};try{let N=(await Q($))?.branch,V=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let W=N?.agent_name?`@${N.agent_name}`:V;q?.("New branch created",`Switched to ${W}.`,"info",2500);let O=F4(X,V,{chatOnly:j});return K?.(O),!0}catch(G){return q?.("Could not create branch",e5(G),"warning",5000),!1}}async function ij(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:K,currentChatJid:X,baseHref:G}=_||{};if(!$||j)return!1;let N=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!N)return!1;let V=m7(N);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let W=A$(V);if(!W)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;E$(W,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(N),M=g7(G,N,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:X,params:O});return M$(W,M),K?.(N),!0}catch(O){k$(W);let M=O?.message||"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",M,"warning",5000),!1}}async function nj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:K,setActiveChatAgents:X,setCurrentChatBranches:G,showIntentToast:N,baseHref:V}=_||{};if(!$||j)return!1;let W=b7(Q);if(!W)return N?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(W.mode==="tab"){let M=u7(V,Q,{chatOnly:!0});if(!window.open(M,W.target))return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=A$(W);if(!O)return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;E$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await Y(Q))?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();X?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await K?.(Z);G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let J=F4(V,A,{chatOnly:!0});return M$(O,J),!0}catch(M){return k$(O),N?.("Could not open branch window",e5(M),"error",5000),!1}}function Y6(_){return _?{..._}:{text:"",totalLines:0}}function oj(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function fG(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function vG(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function rj(_){return{agentStatus:_.agentStatus,agentDraft:Y6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:Y6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:oj(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:fG(_.silentRecovery)}}function sj(_){let $=_.snapshot||vG(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(Y6($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(Y6($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(oj($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function A3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function aj(_,$){let j=new Map(_),Q=A3($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function tj(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=A3($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function ej(_){if(_?.options?.remove)return!0;return A3(_)?.state!=="running"}function E3(_,$){return`${_}:${$}`}function _Q(_,$,j){let Q=E3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function $Q(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function M3(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function jQ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function bG(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function QQ(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!bG(Z));return Q.length===_.length?_:Q}function ZQ(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function YQ(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function v4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function qQ(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function KQ(_,$){return{..._,openedAt:$}}function GQ(_){let $=m1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function XQ(_,$,j){let Q=Z7({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=m1(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=m1(_),q=Boolean(Z&&Y&&Z===Y),K={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:K,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function NQ(_,$){if(!_||_?.source!=="live")return _||null;let j=m1($),Q=m1(_);if(j&&Q&&j!==Q)return _;return null}var VQ=fj(),BQ=S6,WQ=y6,uG=w6,UQ=g6,LQ=m6,k3=f6,I3=q_(e1,"getAgentContext",null),gG=q_(e1,"getAutoresearchStatus",null),mG=q_(e1,"stopAutoresearch",{status:"ok"}),hG=q_(e1,"dismissAutoresearch",{status:"ok"}),FQ=q_(e1,"getAgentModels",{current:null,models:[]}),zQ=q_(e1,"getActiveChatAgents",{chats:[]}),q6=q_(e1,"getChatBranches",{chats:[]}),pG=q_(e1,"renameChatBranch",null),cG=q_(e1,"pruneChatBranch",null),lG=q_(e1,"restoreChatBranch",null),HQ=q_(e1,"getAgentQueueState",{count:0}),dG=q_(e1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),iG=q_(e1,"removeAgentQueueItem",{removed:!1}),nG=q_(e1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});n0.register(F$);n0.register(l$);n0.register(c$);n0.register(d$);n0.register(i$);n0.register(n$);n0.register(r$);n0.register(s$);n0.register(t$);n0.register($3);n0.register(j3);n0.register(h$);z$();n0.register(O$);n0.register(D$);function oG({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:X}=f0(()=>uj(_),[_]),[G,N]=m("disconnected"),[V,W]=m(()=>L4()),[O,M]=m(null),[k,A]=m(null),[J,D]=m(!1),[I,i]=m("current"),[h,r]=m([]),[e,R]=m([]),[x,H]=m(null),{agentStatus:S,setAgentStatus:p,agentDraft:Y0,setAgentDraft:d,agentPlan:$0,setAgentPlan:_0,agentThought:G0,setAgentThought:N0,pendingRequest:B0,setPendingRequest:J0,currentTurnId:A0,setCurrentTurnId:E0,steerQueuedTurnId:o0,setSteerQueuedTurnId:y0,lastAgentEventRef:I0,lastSilenceNoticeRef:r0,isAgentRunningRef:s0,draftBufferRef:m0,thoughtBufferRef:t0,pendingRequestRef:h0,stalledPostIdRef:$1,currentTurnIdRef:z0,steerQueuedTurnIdRef:c0,thoughtExpandedRef:j1,draftExpandedRef:Y1}=Lj(),[K_,D1]=m({}),[_1,h1]=m(null),[M1,q1]=m(null),[p0,x1]=m(!1),[k1,a]=m(null),[W0,H0]=m([]),[X0,R0]=m([]),[S0,v0]=m(null),[k0,w0]=m(()=>new Map),[i0,D0]=m(()=>new Set),[u0,O0]=m([]),[Q0,y]=m(!1),[t,F0]=m(()=>bj()),[M0,b0]=m(null),K1=P(new Set),A1=f0(()=>W0.find((B)=>B?.chat_jid===j)||null,[W0,j]),X1=f0(()=>X0.find((B)=>B?.chat_jid===j)||A1||null,[A1,X0,j]),p1=X1?.root_chat_jid||A1?.root_chat_jid||j,Y4=vj(I),[W_,__]=m(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),U_=u0.length,G_=P(new Set),Q1=P([]),o1=P(new Set),q4=P(0),f_=P({inFlight:!1,lastAttemptAt:0,turnId:null});G_.current=new Set(u0.map((B)=>B.row_id)),Q1.current=u0;let{notificationsEnabled:$5,notificationPermission:b4,toggleNotifications:b1,notify:L_}=Wj(),[y1,E1]=m(()=>new Set),[N1,v_]=m(()=>z5("workspaceOpen",!0)),b_=P(null),{editorOpen:V1,tabStripTabs:$_,tabStripActiveId:g0,previewTabs:P1,tabPaneOverrides:A_,openEditor:j_,closeEditor:u4,handleTabClose:o_,handleTabActivate:g4,handleTabCloseOthers:r_,handleTabCloseAll:j5,handleTabTogglePin:s_,handleTabTogglePreview:u_,handleTabEditSource:P5,revealInExplorer:C5}=zj({onTabClosed:(B)=>b_.current?.(B)}),B1=P(null),R1=P(null),Q5=P(null),E_=P(null),Q_=n0.getDockPanes().length>0,[c1,C1]=m(!1),u1=C(()=>C1((B)=>!B),[]),z1=C(()=>{j_(e4,{label:"Terminal"})},[j_]),M_=C(()=>{j_(Z4,{label:"VNC"})},[j_]),k_=f0(()=>$_.find((B)=>B.id===g0)||$_[0]||null,[g0,$_]),I_=f0(()=>g0?A_.get(g0)||null:null,[A_,g0]),a_=f0(()=>q||k_?.label||Y||"Pane",[k_?.label,q,Y]),Z_=f0(()=>$_.length>1||Boolean(g0&&P1.has(g0)),[P1,g0,$_.length]),r1=f0(()=>Y===Z4||Y.startsWith(`${Z4}/`),[Y]),T_=f0(()=>Y===e4&&!Z_||r1,[r1,Z_,Y]),K4=Z||!Q&&(V1||Q_&&c1),[H1,t_]=m(!1),m4=P(!1),h4=C(()=>{if(!V1||Q)return;if(m4.current=c1,c1)C1(!1);t_(!0)},[V1,Q,c1]),P_=C(()=>{if(!H1)return;if(t_(!1),m4.current)C1(!0),m4.current=!1},[H1]),p4=C(()=>{if(H1)P_();else h4()},[H1,h4,P_]);g(()=>{if(H1&&!V1)P_()},[H1,V1,P_]),g(()=>{if(!Z||!Y)return;if(a0.getActiveId()===Y)return;j_(Y,q?{label:q}:void 0)},[j_,q,Z,Y]),g(()=>{let B=B1.current;if(!B)return;if(R1.current)R1.current.dispose(),R1.current=null;let U=g0;if(!U)return;let E={path:U,mode:"edit"},u=(I_?n0.get(I_):null)||n0.resolve(E)||n0.get("editor");if(!u){B.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let b=u.mount(B,E);R1.current=b,b.onDirtyChange?.((V0)=>{a0.setDirty(U,V0)}),b.onSaveRequest?.(()=>{}),b.onClose?.(()=>{u4()});let l=a0.getViewState(U);if(l&&typeof b.restoreViewState==="function")requestAnimationFrame(()=>b.restoreViewState(l));if(typeof b.onViewStateChange==="function")b.onViewStateChange((V0)=>{a0.saveViewState(U,V0)});return requestAnimationFrame(()=>b.focus()),()=>{if(R1.current===b)b.dispose(),R1.current=null}},[g0,I_,u4]);let Z5=C(async(B)=>{let U=typeof g0==="string"?g0.trim():"",E=R1.current;if(!U||!E?.setContent)return;if(typeof E.isDirty==="function"&&E.isDirty())return;if(!(Array.isArray(B)&&B.length>0?B.some((b)=>{let l=Array.isArray(b?.changed_paths)?b.changed_paths.map((K0)=>typeof K0==="string"?K0.trim():"").filter(Boolean):[];if(l.length>0)return l.some((K0)=>K0==="."||K0===U);let V0=typeof b?.path==="string"?b.path.trim():"";return!V0||V0==="."||V0===U}):!0))return;try{let b=await l5(U,1e6,"edit"),l=typeof b?.text==="string"?b.text:"",V0=typeof b?.mtime==="string"&&b.mtime.trim()?b.mtime.trim():new Date().toISOString();E.setContent(l,V0)}catch(b){console.warn("[workspace_update] Failed to refresh active pane:",b)}},[g0]);g(()=>{let B=Q5.current;if(E_.current)E_.current.dispose(),E_.current=null;if(!B||!Q_||!c1)return;let U=n0.getDockPanes()[0];if(!U){B.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let E=U.mount(B,{mode:"view"});return E_.current=E,requestAnimationFrame(()=>E.focus?.()),()=>{if(E_.current===E)E.dispose(),E_.current=null}},[Q_,c1]);let[g_,m_]=m({name:"You",avatar_url:null,avatar_background:null}),J4=P(null),h_=P(!1),c4=P(!1),p_=P(!1),C_=P(null),I1=P(j),O4=P(new Map),D4=P(j),l4=P(0),L1=P(0),A4=P({}),Y5=P({name:null,avatar_url:null}),g1=P({currentHashtag:null,searchQuery:null,searchOpen:!1}),X_=P(null),e_=P(null),d4=P(0),G4=P(0),E4=P(0),X4=P(null),S_=P(null),F_=P(null),M4=P(null),i4=P(0),x_=P({title:null,avatarBase:null}),z=P(null),T=P(!1),[w,f]=m(!1),o=P(0),[q0,U0]=m(!1),[L0,j0]=m(""),C0=f0(()=>y8(L0,X1?.agent_name||""),[X1?.agent_name,L0]),w1=P(null),Y_=C(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);Aj(30000),g(()=>{if(!q0)return;requestAnimationFrame(()=>{if(q0)w1.current?.focus(),w1.current?.select?.()})},[q0]),g(()=>{return m2()},[]),g(()=>{return Pj(W)},[]),g(()=>{G1("workspaceOpen",String(N1))},[N1]),g(()=>{return Ij()},[]),g(()=>{return()=>{Y_()}},[Y_]),g(()=>{if(!t){G1(BTW_SESSION_KEY,"");return}G1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),g(()=>{A4.current=K_||{}},[K_]),g(()=>{I1.current=j},[j]),g(()=>{Y5.current=g_||{name:"You",avatar_url:null,avatar_background:null}},[g_]);let l1=C((B,U,E=null)=>{if(typeof document>"u")return;let u=(B||"").trim()||"PiClaw";if(x_.current.title!==u){document.title=u;let Z0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(Z0&&Z0.getAttribute("content")!==u)Z0.setAttribute("content",u);x_.current.title=u}let b=document.getElementById("dynamic-favicon");if(!b)return;let l=b.getAttribute("data-default")||b.getAttribute("href")||"/favicon.ico",V0=U||l,K0=U?`${V0}|${E||""}`:V0;if(x_.current.avatarBase!==K0){let Z0=U?`${V0}${V0.includes("?")?"&":"?"}v=${E||Date.now()}`:V0;b.setAttribute("href",Z0),x_.current.avatarBase=K0}},[]),S5=C((B)=>{if(!B)return;r((U)=>U.includes(B)?U:[...U,B])},[]),F=C((B)=>{r((U)=>U.filter((E)=>E!==B))},[]);b_.current=F;let v=C(()=>{r([])},[]),n=C((B)=>{if(!Array.isArray(B)){r([]);return}let U=[],E=new Set;for(let u of B){if(typeof u!=="string"||!u.trim())continue;let b=u.trim();if(E.has(b))continue;E.add(b),U.push(b)}r(U)},[]),c=C((B,U=null,E="info",u=3000)=>{Y_(),H({title:B,detail:U||null,kind:E||"info"}),z.current=setTimeout(()=>{H((b)=>b?.title===B?null:b)},u)},[Y_]),T0=C((B)=>{let U=Ej(B,{editorOpen:V1,resolvePane:(E)=>n0.resolve(E)});if(U.kind==="open"){j_(U.path);return}if(U.kind==="toast")c(U.title,U.detail,U.level)},[V1,j_,c]),J1=C(()=>{let B=g0;if(B)S5(B)},[g0,S5]),S1=C((B)=>{if(!B)return;R((U)=>U.includes(B)?U:[...U,B])},[]),f1=C(async(B,U=null)=>{let E=(b)=>{b.scrollIntoView({behavior:"smooth",block:"center"}),b.classList.add("post-highlight"),setTimeout(()=>b.classList.remove("post-highlight"),2000)},u=document.getElementById("post-"+B);if(u){E(u);return}try{let b=typeof U==="string"&&U.trim()?U.trim():j,V0=(await x6(B,b))?.thread?.[0];if(!V0)return;i1((K0)=>{if(!K0)return[V0];if(K0.some((Z0)=>Z0.id===V0.id))return K0;return[...K0,V0]}),requestAnimationFrame(()=>{setTimeout(()=>{let K0=document.getElementById("post-"+B);if(K0)E(K0)},50)})}catch(b){console.error("[scrollToMessage] Failed to fetch message",B,b)}},[j]),N4=C((B)=>{R((U)=>U.filter((E)=>E!==B))},[]),n4=C(()=>{R([])},[]),q5=C((B)=>{if(!Array.isArray(B)){R([]);return}let U=[],E=new Set;for(let u of B){if(typeof u!=="string"||!u.trim())continue;let b=u.trim();if(E.has(b))continue;E.add(b),U.push(b)}R(U)},[]),K5=C((B)=>{let U=typeof B==="string"&&B.trim()?B.trim():"Could not send your message.";c("Compose failed",U,"error",5000)},[c]),N_=C((B={})=>{let U=Date.now();if(I0.current=U,B.running)s0.current=!0,y((E)=>E?E:!0);if(B.clearSilence)r0.current=0},[y]),d1=C(()=>{if(M4.current)clearTimeout(M4.current),M4.current=null;i4.current=0},[]);g(()=>()=>{d1()},[d1]);let G5=C(()=>{d1(),p((B)=>{if(!B)return B;if(!(B.last_activity||B.lastActivity))return B;let{last_activity:U,lastActivity:E,...u}=B;return u})},[d1]),k4=C((B)=>{if(!B)return;d1();let U=Date.now();i4.current=U,p({type:B.type||"active",last_activity:!0}),M4.current=setTimeout(()=>{if(i4.current!==U)return;p((E)=>{if(!E||!(E.last_activity||E.lastActivity))return E;return null})},Jj)},[d1]),F1=C(()=>{s0.current=!1,y(!1),I0.current=null,r0.current=0,m0.current="",t0.current="",h0.current=null,S_.current=null,z0.current=null,c0.current=null,C_.current=null,f_.current={inFlight:!1,lastAttemptAt:0,turnId:null},d1(),E0(null),y0(null),j1.current=!1,Y1.current=!1},[d1,E0,y0,y]),_4=C((B)=>{if(!Mj({remainingQueueCount:B,currentTurnId:z0.current,isAgentTurnActive:Q0}))return;c0.current=null,y0(null)},[Q0,y0]),X5=C(()=>rj({agentStatus:S,agentDraft:Y0,agentPlan:$0,agentThought:G0,pendingRequest:B0,currentTurnId:A0,steerQueuedTurnId:o0,isAgentTurnActive:Q0,followupQueueItems:u0,activeModel:_1,activeThinkingLevel:M1,supportsThinking:p0,activeModelUsage:k1,contextUsage:S0,isAgentRunning:s0.current,wasAgentActive:p_.current,draftBuffer:m0.current,thoughtBuffer:t0.current,lastAgentEvent:I0.current,lastSilenceNotice:r0.current,lastAgentResponse:S_.current,currentTurnIdRef:z0.current,steerQueuedTurnIdRef:c0.current,thoughtExpanded:j1.current,draftExpanded:Y1.current,agentStatusRef:C_.current,silentRecovery:f_.current}),[_1,k1,M1,Y0,$0,S,G0,S0,A0,u0,Q0,B0,o0,p0]),X8=C((B)=>{sj({snapshot:B,clearLastActivityTimer:d1,refs:{isAgentRunningRef:s0,wasAgentActiveRef:p_,lastAgentEventRef:I0,lastSilenceNoticeRef:r0,draftBufferRef:m0,thoughtBufferRef:t0,pendingRequestRef:h0,lastAgentResponseRef:S_,currentTurnIdRef:z0,steerQueuedTurnIdRef:c0,agentStatusRef:C_,silentRecoveryRef:f_,thoughtExpandedRef:j1,draftExpandedRef:Y1},setters:{setIsAgentTurnActive:y,setAgentStatus:p,setAgentDraft:d,setAgentPlan:_0,setAgentThought:N0,setPendingRequest:J0,setCurrentTurnId:E0,setSteerQueuedTurnId:y0,setFollowupQueueItems:O0,setActiveModel:h1,setActiveThinkingLevel:q1,setSupportsThinking:x1,setActiveModelUsage:a,setContextUsage:v0}})},[d1,E0,O0,y,y0]),V_=C((B)=>{if(!B)return;if(z0.current===B)return;z0.current=B,f_.current={inFlight:!1,lastAttemptAt:0,turnId:B},E0(B),c0.current=null,y0(null),m0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),N0({text:"",totalLines:0}),J0(null),h0.current=null,S_.current=null,j1.current=!1,Y1.current=!1},[E0,y0]),I4=C((B)=>{if(typeof document<"u"){let Z0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&Z0)return}let U=S_.current;if(!U||!U.post)return;if(B&&U.turnId&&U.turnId!==B)return;let E=U.post;if(E.id&&X4.current===E.id)return;let u=String(E?.data?.content||"").trim();if(!u)return;X4.current=E.id||X4.current,S_.current=null;let b=u.replace(/\s+/g," ").slice(0,200),l=A4.current||{},K0=(E?.data?.agent_id?l[E.data.agent_id]:null)?.name||"Pi";L_(K0,b)},[L_]),z_=C(async(B,U)=>{if(B!=="thought"&&B!=="draft")return;let E=z0.current;if(B==="thought"){if(j1.current=U,E)try{await LQ(E,"thought",U)}catch(u){console.warn("Failed to update thought visibility:",u)}if(!U)return;try{let u=E?await UQ(E,"thought"):null;if(u?.text)t0.current=u.text;N0((b)=>({...b||{text:"",totalLines:0},fullText:t0.current||b?.fullText||"",totalLines:Number.isFinite(u?.total_lines)?u.total_lines:b?.totalLines||0}))}catch(u){console.warn("Failed to fetch full thought:",u)}return}if(Y1.current=U,E)try{await LQ(E,"draft",U)}catch(u){console.warn("Failed to update draft visibility:",u)}if(!U)return;try{let u=E?await UQ(E,"draft"):null;if(u?.text)m0.current=u.text;d((b)=>({...b||{text:"",totalLines:0},fullText:m0.current||b?.fullText||"",totalLines:Number.isFinite(u?.total_lines)?u.total_lines:b?.totalLines||0}))}catch(u){console.warn("Failed to fetch full draft:",u)}},[]),T4=P(null),N5=C(()=>{let B=X_.current;if(!B)return;if(!(Math.abs(B.scrollTop)>150))B.scrollTop=0},[]);T4.current=N5;let K6=C((B)=>{let U=X_.current;if(!U||typeof B!=="function"){B?.();return}let{currentHashtag:E,searchQuery:u,searchOpen:b}=g1.current||{},l=!((u||b)&&!E),V0=l?U.scrollHeight-U.scrollTop:U.scrollTop;B(),requestAnimationFrame(()=>{let K0=X_.current;if(!K0)return;if(l){let Z0=Math.max(K0.scrollHeight-V0,0);K0.scrollTop=Z0}else{let Z0=Math.max(K0.scrollHeight-K0.clientHeight,0),s=Math.min(V0,Z0);K0.scrollTop=s}})},[]),x5=C((B)=>{let U=X_.current;if(!U||typeof B!=="function"){B?.();return}let E=U.scrollTop;B(),requestAnimationFrame(()=>{let u=X_.current;if(!u)return;let b=Math.max(u.scrollHeight-u.clientHeight,0);u.scrollTop=Math.min(E,b)})},[]),T3=C((B)=>QQ(B,G_.current),[]),{posts:y5,setPosts:i1,hasMore:JQ,setHasMore:N8,hasMoreRef:P3,loadPosts:c_,refreshTimeline:s1,loadMore:OQ,loadMoreRef:G6}=Uj({preserveTimelineScroll:K6,preserveTimelineScrollTop:x5,chatJid:j}),V5=f0(()=>T3(y5),[y5,u0,T3]),V8=C(()=>{let B=$1.current;if(!B)return;i1((U)=>U?U.filter((E)=>E.id!==B):U),$1.current=null},[i1]),{handleSplitterMouseDown:DQ,handleSplitterTouchStart:AQ,handleEditorSplitterMouseDown:EQ,handleEditorSplitterTouchStart:MQ,handleDockSplitterMouseDown:kQ,handleDockSplitterTouchStart:IQ}=Fj({appShellRef:e_,sidebarWidthRef:d4,editorWidthRef:G4,dockHeightRef:E4}),C3=C(()=>{if(!s0.current)return;s0.current=!1,r0.current=0,I0.current=null,z0.current=null,E0(null),j1.current=!1,Y1.current=!1;let B=(m0.current||"").trim();if(m0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),N0({text:"",totalLines:0}),J0(null),h0.current=null,S_.current=null,!B){p({type:"error",title:"Response stalled - No content received"});return}let E=`${B}${`

⚠️ Response may be incomplete - the model stopped responding`}`,u=Date.now(),b=new Date().toISOString(),l={id:u,timestamp:b,data:{type:"agent_response",content:E,agent_id:"default",is_local_stall:!0}};$1.current=u,i1((V0)=>V0?G8([...V0,l]):[l]),T4.current?.(),p(null)},[E0]);g(()=>{g1.current={currentHashtag:O,searchQuery:k,searchOpen:J}},[O,k,J]);let Z1=C(()=>{let B=++q4.current,U=j;HQ(U).then((E)=>{if(B!==q4.current)return;if(I1.current!==U)return;let u=o1.current,b=ZQ(E?.items,u);if(b.length){O0((l)=>{if(YQ(l,b))return l;return b});return}u.clear(),_4(0),O0((l)=>l.length===0?l:[])}).catch(()=>{if(B!==q4.current)return;if(I1.current!==U)return;O0((E)=>E.length===0?E:[])})},[_4,j,O0]),a1=C(async()=>{let B=j;try{let U=await I3(B);if(I1.current!==B)return;if(U)v0(U)}catch(U){if(I1.current!==B)return;console.warn("Failed to fetch agent context:",U)}},[j]),l_=C(async()=>{let B=j;try{let U=await gG(B);if(I1.current!==B)return;w0((E)=>aj(E,U)),D0((E)=>M3(E,"autoresearch"))}catch(U){if(I1.current!==B)return;console.warn("Failed to fetch autoresearch status:",U)}},[j]),y_=C(async()=>{let B=j;try{let U=await k3(B);if(I1.current!==B)return null;if(!U||U.status!=="active"||!U.data){if(p_.current){let{currentHashtag:b,searchQuery:l,searchOpen:V0}=g1.current||{};if(!b&&!l&&!V0)s1()}return p_.current=!1,F1(),C_.current=null,p(null),d({text:"",totalLines:0}),_0(""),N0({text:"",totalLines:0}),J0(null),h0.current=null,U??null}p_.current=!0;let E=U.data;C_.current=E;let u=E.turn_id||E.turnId;if(u)V_(u);if(N_({running:!0,clearSilence:!0}),G5(),p(E),U.thought&&U.thought.text)N0((b)=>{if(b&&b.text&&b.text.length>=U.thought.text.length)return b;return t0.current=U.thought.text,{text:U.thought.text,totalLines:U.thought.totalLines||0}});if(U.draft&&U.draft.text)d((b)=>{if(b&&b.text&&b.text.length>=U.draft.text.length)return b;return m0.current=U.draft.text,{text:U.draft.text,totalLines:U.draft.totalLines||0}});return U}catch(U){return console.warn("Failed to fetch agent status:",U),null}},[F1,G5,N_,s1,V_]),X6=C(async()=>{if(!s0.current)return null;if(h0.current)return null;let B=z0.current||null,U=f_.current,E=Date.now();if(U.inFlight)return null;if(U.turnId===B&&E-U.lastAttemptAt<F3)return null;U.inFlight=!0,U.lastAttemptAt=E,U.turnId=B;try{let{currentHashtag:u,searchQuery:b,searchOpen:l}=g1.current||{};if(!u&&!b&&!l)await s1();return await Z1(),await y_()}finally{U.inFlight=!1}},[y_,Z1,s1]);g(()=>{let B=Math.min(1000,Math.max(100,Math.floor(L3/2))),U=setInterval(()=>{if(!s0.current)return;if(h0.current)return;let E=I0.current;if(!E)return;let u=Date.now(),b=u-E,l=B4(C_.current);if(b>=Hj){if(!l)p({type:"waiting",title:"Re-syncing after a quiet period…"});X6();return}if(b>=L3){if(u-r0.current>=F3){if(!l){let V0=Math.floor(b/1000);p({type:"waiting",title:`Waiting for model… No events for ${V0}s`})}r0.current=u,X6()}}},B);return()=>clearInterval(U)},[X6]);let S3=C((B)=>{let U=typeof B==="string"&&B.trim()?B.trim():null;if(!U||!VQ||U===VQ)return!1;if(J4.current===U)return!0;J4.current=U;let E=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!a0.hasUnsaved()&&!E&&!s0.current&&!h0.current&&!h_.current)return h_.current=!0,c("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{h_.current=!1}},350),!0;return c("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[s0,h0,c]),TQ=C((B)=>{if(N(B),B!=="connected"){p(null),d({text:"",totalLines:0}),_0(""),N0({text:"",totalLines:0}),J0(null),h0.current=null,F1();return}if(!c4.current){c4.current=!0;let{currentHashtag:b,searchQuery:l,searchOpen:V0}=g1.current||{};if(!b&&!l&&!V0)s1();y_(),Z1(),a1();return}let{currentHashtag:U,searchQuery:E,searchOpen:u}=g1.current;if(!U&&!E&&!u)s1();y_(),Z1(),a1()},[F1,s1,y_,Z1,a1]),PQ=C(async(B)=>{M(B),i1(null),await c_(B)},[c_]),CQ=C(async()=>{M(null),A(null),i1(null),await c_()},[c_]),SQ=C(async(B,U=I)=>{if(!B||!B.trim())return;let E=U==="root"||U==="all"?U:"current";i(E),A(B.trim()),M(null),i1(null);try{let u=await BQ(B.trim(),50,0,j,E,p1);i1(u.results),N8(!1)}catch(u){console.error("Failed to search:",u),i1([])}},[j,p1,I]),xQ=C(()=>{D(!0),A(null),M(null),i("current"),i1([])},[]),yQ=C(()=>{D(!1),A(null),c_()},[c_]),sG=C(()=>{},[]),N6=!O&&!k&&!J,RQ=C(async(B)=>{if(!B)return;let U=B.id,E=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():j,u=V5?.filter((l)=>l?.data?.thread_id===U&&l?.id!==U).length||0;if(u>0){if(!window.confirm(`Delete this message and its ${u} replies?`))return}let b=(l)=>{if(!l.length)return;E1((K0)=>{let Z0=new Set(K0);return l.forEach((s)=>Z0.add(s)),Z0}),setTimeout(()=>{if(x5(()=>{i1((K0)=>K0?K0.filter((Z0)=>!l.includes(Z0.id)):K0)}),E1((K0)=>{let Z0=new Set(K0);return l.forEach((s)=>Z0.delete(s)),Z0}),P3.current)G6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let l=await WQ(U,u>0,E);if(l?.ids?.length)b(l.ids)}catch(l){let V0=l?.message||"";if(u===0&&V0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let Z0=await WQ(U,!0,E);if(Z0?.ids?.length)b(Z0.ids);return}console.error("Failed to delete post:",l),alert(`Failed to delete message: ${V0}`)}},[j,V5,x5]),x3=C(async()=>{try{let B=await uG();D1(Oj(B));let U=B?.user||{};m_((u)=>{let b=typeof U.name==="string"&&U.name.trim()?U.name.trim():"You",l=typeof U.avatar_url==="string"?U.avatar_url.trim():null,V0=typeof U.avatar_background==="string"&&U.avatar_background.trim()?U.avatar_background.trim():null;if(u.name===b&&u.avatar_url===l&&u.avatar_background===V0)return u;return{name:b,avatar_url:l,avatar_background:V0}});let E=(B?.agents||[]).find((u)=>u.id==="default");l1(E?.name,E?.avatar_url)}catch(B){console.warn("Failed to load agents:",B)}},[l1]);g(()=>{x3();let B=H5("sidebarWidth",null),U=Number.isFinite(B)?Math.min(Math.max(B,160),600):280;if(d4.current=U,e_.current)e_.current.style.setProperty("--sidebar-width",`${U}px`)},[x3]);let R5=Q0||S!==null,y3=C((B)=>{if(!B||typeof B!=="object")return;let U=B.agent_id;if(!U)return;let{agent_name:E,agent_avatar:u}=B;if(!E&&u===void 0)return;let b=A4.current?.[U]||{id:U},l=b.name||null,V0=b.avatar_url??b.avatarUrl??b.avatar??null,K0=!1,Z0=!1;if(E&&E!==b.name)l=E,Z0=!0;if(u!==void 0){let s=typeof u==="string"?u.trim():null,P0=typeof V0==="string"?V0.trim():null,l0=s||null;if(l0!==(P0||null))V0=l0,K0=!0}if(!Z0&&!K0)return;if(D1((s)=>{let l0={...s[U]||{id:U}};if(Z0)l0.name=l;if(K0)l0.avatar_url=V0;return{...s,[U]:l0}}),U==="default")l1(l,V0,K0?Date.now():null)},[l1]),R3=C((B)=>{if(!B||typeof B!=="object")return;let U=B.user_name??B.userName,E=B.user_avatar??B.userAvatar,u=B.user_avatar_background??B.userAvatarBackground;if(U===void 0&&E===void 0&&u===void 0)return;m_((b)=>{let l=typeof U==="string"&&U.trim()?U.trim():b.name||"You",V0=E===void 0?b.avatar_url:typeof E==="string"&&E.trim()?E.trim():null,K0=u===void 0?b.avatar_background:typeof u==="string"&&u.trim()?u.trim():null;if(b.name===l&&b.avatar_url===V0&&b.avatar_background===K0)return b;return{name:l,avatar_url:V0,avatar_background:K0}})},[]),V6=C((B)=>{if(!B||typeof B!=="object")return;let U=B.model??B.current;if(U!==void 0)h1(U);if(B.thinking_level!==void 0)q1(B.thinking_level??null);if(B.supports_thinking!==void 0)x1(Boolean(B.supports_thinking));if(B.provider_usage!==void 0)a(B.provider_usage??null)},[]),w5=C(()=>{let B=j;FQ(B).then((U)=>{if(I1.current!==B)return;if(U)V6(U)}).catch(()=>{})},[V6,j]),n1=C(()=>{let B=j,U=(E)=>Array.isArray(E)?E.filter((u)=>u&&typeof u.chat_jid==="string"&&typeof u.agent_name==="string"&&u.agent_name.trim()):[];Promise.all([zQ().catch(()=>({chats:[]})),q6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([E,u])=>{if(I1.current!==B)return;let b=U(E?.chats),l=U(u?.chats);if(l.length===0){H0(b);return}let V0=new Map(b.map((Z0)=>[Z0.chat_jid,Z0])),K0=l.map((Z0)=>{let s=V0.get(Z0.chat_jid);return s?{...Z0,...s,is_active:s.is_active??Z0.is_active}:Z0});K0.sort((Z0,s)=>{if(Z0.chat_jid===B&&s.chat_jid!==B)return-1;if(s.chat_jid===B&&Z0.chat_jid!==B)return 1;let P0=Boolean(Z0.archived_at),l0=Boolean(s.archived_at);if(P0!==l0)return P0?1:-1;if(Boolean(Z0.is_active)!==Boolean(s.is_active))return Z0.is_active?-1:1;return String(Z0.chat_jid).localeCompare(String(s.chat_jid))}),H0(K0)}).catch(()=>{if(I1.current!==B)return;H0([])})},[j]),t1=C(()=>{q6(p1).then((B)=>{let U=Array.isArray(B?.chats)?B.chats.filter((E)=>E&&typeof E.chat_jid==="string"&&typeof E.agent_name==="string"):[];R0(U)}).catch(()=>{})},[p1]),w3=C((B)=>{let U=B?.row_id;if(U==null)return;o1.current.add(U),O0((E)=>v4(E,U).items),dG(U,H3(j)).then(()=>{Z1()}).catch((E)=>{console.warn("[queue] Failed to steer queued item:",E),c("Failed to steer message","The queued message could not be sent as steering.","warning"),o1.current.delete(U),Z1()})},[j,Z1,O0,c]),f3=C((B)=>{let U=B?.row_id;if(U==null)return;let E=v4(Q1.current,U);o1.current.add(U),_4(E.remainingQueueCount),O0((u)=>v4(u,U).items),iG(U,H3(j)).then(()=>{Z1()}).catch((u)=>{console.warn("[queue] Failed to remove queued item:",u),c("Failed to remove message","The queued message could not be removed.","warning"),o1.current.delete(U),Z1()})},[_4,j,Z1,O0,c]),f5=C((B)=>{if(!B||typeof B!=="object")return;if(n1(),t1(),a1(),l_(),qQ(B))Z1()},[n1,l_,t1,a1,Z1]),wQ=C(async(B,U)=>{let E=typeof B?.key==="string"?B.key:"",u=typeof U?.key==="string"?U.key:"",b=E3(E,u);if(!E||!u)return;D0((l)=>_Q(l,E,u));try{let l=await jQ({panel:B,action:U,currentChatJid:j,stopAutoresearch:mG,dismissAutoresearch:hG,writeClipboard:(V0)=>navigator.clipboard.writeText(V0)});if(l.refreshAutoresearchStatus)l_();if(l.toast)c(l.toast.title,l.toast.detail,l.toast.kind,l.toast.durationMs)}catch(l){c("Panel action failed",l?.message||"Could not complete that action.","warning")}finally{D0((l)=>$Q(l,b))}},[j,l_,c]),B6=C(()=>{if(F_.current)F_.current.abort(),F_.current=null;F0(null)},[]),B8=C(async(B)=>{let U=String(B||"").trim();if(!U)return c("BTW needs a question","Usage: /btw <question>","warning"),!0;if(F_.current)F_.current.abort();let E=new AbortController;F_.current=E,F0({question:U,answer:"",thinking:"",error:null,model:null,status:"running"});try{let u=await nG(U,{signal:E.signal,chatJid:s2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(b,l)=>{if(b==="side_prompt_start")F0((V0)=>V0?{...V0,status:"running"}:V0)},onThinkingDelta:(b)=>{F0((l)=>l?{...l,thinking:`${l.thinking||""}${b||""}`}:l)},onTextDelta:(b)=>{F0((l)=>l?{...l,answer:`${l.answer||""}${b||""}`}:l)}});if(F_.current!==E)return!0;F0((b)=>b?{...b,answer:u?.result||b.answer||"",thinking:u?.thinking||b.thinking||"",model:u?.model||null,status:"success",error:null}:b)}catch(u){if(E.signal.aborted)return!0;F0((b)=>b?{...b,status:"error",error:u?.payload?.error||u?.message||"BTW request failed."}:b)}finally{if(F_.current===E)F_.current=null}return!0},[j,c]),fQ=C(async({content:B})=>{let U=r2(B);if(!U)return!1;if(U.type==="help")return c("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(U.type==="clear")return B6(),c("BTW cleared","Closed the side conversation panel.","info"),!0;if(U.type==="ask")return await B8(U.question),!0;return!1},[B6,B8,c]),vQ=C(()=>{if(t?.question)B8(t.question)},[t,B8]),bQ=C(async()=>{let B=e2(t);if(!B)return;try{let U=await r4("default",B,null,[],R5?"queue":null,j);f5(U),c(U?.queued==="followup"?"BTW queued":"BTW injected",U?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(U){c("BTW inject failed",U?.message||"Could not inject BTW answer into chat.","warning")}},[t,f5,R5,c]),v3=C(async(B=null)=>{let[U,E,u,b,l,V0,K0]=await Promise.allSettled([k3(j),I3(j),HQ(j),FQ(j),zQ(),q6(p1),o4(20,null,j)]),Z0=U.status==="fulfilled"?U.value:null,s=E.status==="fulfilled"?E.value:null,P0=u.status==="fulfilled"?u.value:null,l0=b.status==="fulfilled"?b.value:null,H_=l.status==="fulfilled"?l.value:null,T1=V0.status==="fulfilled"?V0.value:null,P4=K0.status==="fulfilled"?K0.value:null,$4=Array.isArray(P4?.posts)?P4.posts:Array.isArray(y5)?y5:[],h3=$4.length?$4[$4.length-1]:null,dQ=$4.filter((F6)=>F6?.data?.is_bot_message).length,iQ=$4.filter((F6)=>!F6?.data?.is_bot_message).length,p3=Number(P0?.count??Q1.current.length??0)||0,c3=Array.isArray(H_?.chats)?H_.chats.length:W0.length,nQ=Array.isArray(T1?.chats)?T1.chats.length:X0.length,l3=Number(s?.percent??S0?.percent??0)||0,oQ=Number(s?.tokens??S0?.tokens??0)||0,rQ=Number(s?.contextWindow??S0?.contextWindow??0)||0,sQ=l0?.current??_1??null,aQ=l0?.thinking_level??M1??null,tQ=l0?.supports_thinking??p0,eQ=Z0?.status||(Q0?"active":"idle"),_Z=Z0?.data?.type||Z0?.type||null;return{generatedAt:new Date().toISOString(),request:B,chat:{currentChatJid:j,rootChatJid:p1,activeChats:c3,branches:nQ},agent:{status:eQ,phase:_Z,running:Boolean(Q0)},model:{current:sQ,thinkingLevel:aQ,supportsThinking:Boolean(tQ)},context:{tokens:oQ,contextWindow:rQ,percent:l3},queue:{count:p3},timeline:{loadedPosts:$4.length,botPosts:dQ,userPosts:iQ,latestPostId:h3?.id??null,latestTimestamp:h3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(l3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,p3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,c3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,$4.length*5))}]}},[W0,_1,M1,S0,X0,j,p1,Q0,y5,p0]),v5=C(()=>{w5(),n1(),t1(),Z1(),a1(),l_()},[w5,n1,t1,Z1,a1,l_]);g(()=>{v5();let B=setInterval(()=>{w5(),n1(),t1(),Z1()},60000);return()=>clearInterval(B)},[v5,w5,n1,t1,Z1]),g(()=>{w0(new Map),D0(new Set)},[j]),g(()=>{let B=!1,U=()=>{if(B)return;requestAnimationFrame(()=>{if(B)return;N5()})};if(O)return c_(O),()=>{B=!0};if(k)return BQ(k,50,0,j,I,p1).then((E)=>{if(B)return;i1(E.results),N8(!1)}).catch((E)=>{if(B)return;console.error("Failed to search:",E),i1([]),N8(!1)}),()=>{B=!0};return c_().then(()=>{U()}).catch((E)=>{if(B)return;console.error("Failed to load timeline:",E)}),()=>{B=!0}},[j,O,k,I,p1,c_,N5,N8,i1]),g(()=>{let B=D4.current||j;O4.current.set(B,X5())},[j,X5]),g(()=>{let B=D4.current||j;if(B===j)return;O4.current.set(B,X5()),D4.current=j,o1.current.clear(),X8(O4.current.get(j)||null),Z1(),y_(),a1()},[j,y_,a1,Z1,X8,X5]);let uQ=C(()=>{let{currentHashtag:B,searchQuery:U,searchOpen:E}=g1.current||{};if(!B&&!U&&!E)s1();v5()},[v5,s1]),b5=C((B,U="streaming")=>{let E=new Date().toISOString();b0((u)=>XQ(u,B,{fallbackStatus:U,currentChatJid:j,dismissedSessionKeys:K1.current,updatedAt:E}))},[j]),W6=C((B,U)=>{let E=U?.turn_id,u=typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():null,l=u?u===j:B==="connected"||B==="workspace_update";if(l)y3(U),R3(U);if(B==="ui_theme"){h2(U);return}if(B==="generated_widget_open"){if(!l)return;if(E&&!z0.current)V_(E);b5(U,"loading");return}if(B==="generated_widget_delta"){if(!l)return;if(E&&!z0.current)V_(E);b5(U,"streaming");return}if(B==="generated_widget_final"){if(!l)return;if(E&&!z0.current)V_(E);b5(U,"final");return}if(B==="generated_widget_error"){if(!l)return;b5(U,"error");return}if(B==="generated_widget_close"){if(!l)return;b0((s)=>NQ(s,U));return}if(B?.startsWith("agent_")){if(!(B==="agent_draft_delta"||B==="agent_thought_delta"||B==="agent_draft"||B==="agent_thought"))G5()}if(B==="connected"){if(S3(U?.app_asset_version))return;p(null),d({text:"",totalLines:0}),_0(""),N0({text:"",totalLines:0}),J0(null),h0.current=null,F1();let s=j;k3(s).then((T1)=>{if(I1.current!==s)return;if(!T1||T1.status!=="active"||!T1.data)return;let P4=T1.data,$4=P4.turn_id||P4.turnId;if($4)V_($4);if(N_({clearSilence:!0}),k4(P4),T1.thought&&T1.thought.text)t0.current=T1.thought.text,N0({text:T1.thought.text,totalLines:T1.thought.totalLines||0});if(T1.draft&&T1.draft.text)m0.current=T1.draft.text,d({text:T1.draft.text,totalLines:T1.draft.totalLines||0})}).catch((T1)=>{console.warn("Failed to fetch agent status:",T1)});let{currentHashtag:P0,searchQuery:l0,searchOpen:H_}=g1.current||{};if(!P0&&!l0&&!H_)s1();v5();return}if(B==="agent_status"){if(!l){if(U?.type==="done"||U?.type==="error")n1(),t1();return}if(U.type==="done"||U.type==="error"){if(E&&z0.current&&E!==z0.current)return;if(U.type==="done"){I4(E||z0.current);let{currentHashtag:s,searchQuery:P0,searchOpen:l0}=g1.current||{};if(!s&&!P0&&!l0)s1();if(U.context_usage)v0(U.context_usage)}if(a1(),p_.current=!1,F1(),o1.current.clear(),n1(),Z1(),d({text:"",totalLines:0}),_0(""),N0({text:"",totalLines:0}),J0(null),U.type==="error")p({type:"error",title:U.title||"Agent error"}),setTimeout(()=>p(null),8000);else p(null)}else{if(E)V_(E);if(N_({running:!0,clearSilence:!0}),U.type==="thinking")m0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),N0({text:"",totalLines:0});C_.current=U,p((s)=>{if(s&&s.type===U.type&&s.title===U.title)return s;return U})}return}if(B==="agent_steer_queued"){if(!l)return;if(E&&z0.current&&E!==z0.current)return;let s=E||z0.current;if(!s)return;c0.current=s,y0(s);return}if(B==="agent_followup_queued"){if(!l)return;let s=U?.row_id,P0=U?.content;if(s!=null&&typeof P0==="string"&&P0.trim())O0((l0)=>{if(l0.some((H_)=>H_?.row_id===s))return l0;return[...l0,{row_id:s,content:P0,timestamp:U?.timestamp||null,thread_id:U?.thread_id??null}]});Z1();return}if(B==="agent_followup_consumed"){if(!l)return;let s=U?.row_id;if(s!=null){let T1=v4(Q1.current,s);_4(T1.remainingQueueCount),O0((P4)=>v4(P4,s).items)}Z1();let{currentHashtag:P0,searchQuery:l0,searchOpen:H_}=g1.current||{};if(!P0&&!l0&&!H_)s1();return}if(B==="agent_followup_removed"){if(!l)return;let s=U?.row_id;if(s!=null){let P0=v4(Q1.current,s);o1.current.add(s),_4(P0.remainingQueueCount),O0((l0)=>v4(l0,s).items)}Z1();return}if(B==="agent_draft_delta"){if(!l)return;if(E&&z0.current&&E!==z0.current)return;if(E&&!z0.current)V_(E);if(N_({running:!0,clearSilence:!0}),U?.reset)m0.current="";if(U?.delta)m0.current+=U.delta;let s=Date.now();if(!l4.current||s-l4.current>=100){l4.current=s;let P0=m0.current,l0=z3(P0);if(Y1.current)d((H_)=>({text:H_?.text||"",totalLines:l0,fullText:P0}));else d({text:P0,totalLines:l0})}return}if(B==="agent_draft"){if(!l)return;if(E&&z0.current&&E!==z0.current)return;if(E&&!z0.current)V_(E);N_({running:!0,clearSilence:!0});let s=U.text||"",P0=U.mode||(U.kind==="plan"?"replace":"append"),l0=Number.isFinite(U.total_lines)?U.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(U.kind==="plan")if(P0==="replace")_0(s);else _0((H_)=>(H_||"")+s);else if(!Y1.current)m0.current=s,d({text:s,totalLines:l0});return}if(B==="agent_thought_delta"){if(!l)return;if(E&&z0.current&&E!==z0.current)return;if(E&&!z0.current)V_(E);if(N_({running:!0,clearSilence:!0}),U?.reset)t0.current="";if(typeof U?.delta==="string")t0.current+=U.delta;let s=Date.now();if(j1.current&&(!L1.current||s-L1.current>=100)){L1.current=s;let P0=t0.current;N0((l0)=>({text:l0?.text||"",totalLines:z3(P0),fullText:P0}))}return}if(B==="agent_thought"){if(!l)return;if(E&&z0.current&&E!==z0.current)return;if(E&&!z0.current)V_(E);N_({running:!0,clearSilence:!0});let s=U.text||"",P0=Number.isFinite(U.total_lines)?U.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(!j1.current)t0.current=s,N0({text:s,totalLines:P0});return}if(B==="model_changed"){if(!l)return;if(U?.model!==void 0)h1(U.model);if(U?.thinking_level!==void 0)q1(U.thinking_level??null);if(U?.supports_thinking!==void 0)x1(Boolean(U.supports_thinking));let s=j;I3(s).then((P0)=>{if(I1.current!==s)return;if(P0)v0(P0)}).catch(()=>{});return}if(B==="extension_ui_widget"&&U?.options?.surface==="status-panel"){if((typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():j)!==j)return;let P0=typeof U?.key==="string"?U.key:"";if(!P0)return;if(w0((l0)=>tj(l0,U)),ej(U))D0((l0)=>M3(l0,P0));J3(B,U);return}if(B==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:U}));Z5(U?.updates);return}if(Tj(B)){if(!l)return;if(J3(B,U),B==="extension_ui_notify"&&typeof U?.message==="string")c(U.message,null,U?.type||"info");if(B==="extension_ui_error"&&typeof U?.error==="string")c("Extension UI error",U.error,"error",5000);return}let{currentHashtag:V0,searchQuery:K0,searchOpen:Z0}=g1.current;if(B==="agent_response"){if(!l)return;V8(),S_.current={post:U,turnId:z0.current}}if(!V0&&!K0&&!Z0&&l&&(B==="new_post"||B==="new_reply"||B==="agent_response"))i1((s)=>{if(!s)return[U];if(s.some((P0)=>P0.id===U.id))return s;return[...s,U]}),T4.current?.();if(B==="interaction_updated"){if(!l)return;if(V0||K0||Z0)return;i1((s)=>{if(!s)return s;if(!s.some((P0)=>P0.id===U.id))return s;return s.map((P0)=>P0.id===U.id?U:P0)})}if(B==="interaction_deleted"){if(!l)return;if(V0||K0||Z0)return;let s=U?.ids||[];if(s.length){if(x5(()=>{i1((P0)=>P0?P0.filter((l0)=>!s.includes(l0.id)):P0)}),P3.current)G6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[b5,F1,G5,j,G6,N_,I4,x5,n1,t1,s1,V8,V_,k4,y3,R3,w5,Z1,O0,a1,S3]);g(()=>{if(typeof window>"u")return;let B=window.__PICLAW_TEST_API||{};return B.emit=W6,B.reset=()=>{V8(),F1(),p(null),d({text:"",totalLines:0}),_0(""),N0({text:"",totalLines:0}),J0(null)},B.finalize=()=>C3(),window.__PICLAW_TEST_API=B,()=>{if(window.__PICLAW_TEST_API===B)window.__PICLAW_TEST_API=void 0}},[F1,C3,W6,V8]),Bj({handleSseEvent:W6,handleConnectionStatusChange:TQ,loadPosts:c_,onWake:uQ,chatJid:j}),g(()=>{if(!V5||V5.length===0)return;let B=location.hash;if(!B||!B.startsWith("#msg-"))return;let U=B.slice(5);f1(U),history.replaceState(null,"",location.pathname+location.search)},[V5,f1]);let U6=S!==null;g(()=>{if(G!=="connected")return;let U=setInterval(()=>{let{currentHashtag:E,searchQuery:u,searchOpen:b}=g1.current||{},l=!E&&!u&&!b;if(U6){if(l)s1();Z1(),y_(),a1(),l_()}else{if(l)s1();y_(),a1(),l_()}},U6?15000:60000);return()=>clearInterval(U)},[G,U6,y_,l_,a1,Z1,s1]),g(()=>{return Cj(()=>{y_(),a1(),Z1(),l_()})},[y_,l_,a1,Z1]);let gQ=C(()=>{v_((B)=>!B)},[]),b3=C((B)=>{if(typeof window>"u")return;let U=String(B||"").trim();if(!U||U===j)return;let E=F4(window.location.href,U,{chatOnly:Q});$?.(E)},[Q,j,$]),L6=C(()=>{gj({hasWindow:typeof window<"u",currentBranchRecord:X1,renameBranchInFlight:T.current,renameBranchLockUntil:o.current,getFormLock:D3,setRenameBranchNameDraft:j0,setIsRenameBranchFormOpen:U0})},[X1]),u5=C(()=>{mj({setIsRenameBranchFormOpen:U0,setRenameBranchNameDraft:j0})},[]),u3=C(async(B)=>{await hj({hasWindow:typeof window<"u",currentBranchRecord:X1,nextName:B,openRenameForm:L6,renameBranchInFlightRef:T,renameBranchLockUntilRef:o,getFormLock:D3,setIsRenamingBranch:f,renameChatBranch:pG,refreshActiveChatAgents:n1,refreshCurrentChatBranches:t1,showIntentToast:c,closeRenameForm:u5})},[u5,X1,n1,t1,L6,f,c]),g3=C(async(B=null)=>{await pj({hasWindow:typeof window<"u",targetChatJid:B,currentChatJid:j,currentBranchRecord:X1,currentChatBranches:X0,activeChatAgents:W0,pruneChatBranch:cG,refreshActiveChatAgents:n1,refreshCurrentChatBranches:t1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[W0,Q,X1,X0,j,$,n1,t1,c]),mQ=C(async(B)=>{await cj({targetChatJid:B,restoreChatBranch:lG,currentChatBranches:X0,refreshActiveChatAgents:n1,refreshCurrentChatBranches:t1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,X0,$,n1,t1,c]);g(()=>{if(!K||typeof window>"u")return;let B=!1;return lj({branchLoaderSourceChatJid:X,forkChatBranch:h5,setBranchLoaderState:__,navigate:$,baseHref:window.location.href,isCancelled:()=>B}),()=>{B=!0}},[K,X,$]);let hQ=C((B)=>{if(!B||typeof B!=="object")return;let U=m1(B);if(U)K1.current.delete(U);b0(KQ(B,new Date().toISOString()))},[]),g5=C(()=>{b0((B)=>{let U=GQ(B);if(U.dismissedSessionKey)K1.current.add(U.dismissedSessionKey);return U.nextWidget})},[]),pQ=C((B,U)=>{let E=typeof B?.kind==="string"?B.kind:"",u=m1(U);if(!E||!u)return;if(E==="widget.close"){g5();return}if(E==="widget.submit"){let b=G7(B?.payload),l=X7(B?.payload),V0=new Date().toISOString();if(b0((K0)=>{let Z0=m1(K0);if(!K0||Z0!==u)return K0;return{...K0,runtimeState:{...K0.runtimeState||{},lastEventKind:E,lastEventPayload:B?.payload||null,lastSubmitAt:V0,lastHostUpdate:{type:"submit_pending",submittedAt:V0,preview:b||null}}}}),!b){if(c("Widget submission received","The widget submitted data without a message payload yet.","info",3500),l)g5();return}(async()=>{try{let K0=await r4("default",b,null,[],R5?"queue":null,j);if(f5(K0),b0((Z0)=>{let s=m1(Z0);if(!Z0||s!==u)return Z0;return{...Z0,runtimeState:{...Z0.runtimeState||{},lastHostUpdate:{type:K0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:V0,preview:b,queued:K0?.queued||null}}}}),c(K0?.queued==="followup"?"Widget submission queued":"Widget submission sent",K0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),l)g5()}catch(K0){b0((Z0)=>{let s=m1(Z0);if(!Z0||s!==u)return Z0;return{...Z0,runtimeState:{...Z0.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:V0,preview:b,error:K0?.message||"Could not send the widget message."}}}}),c("Widget submission failed",K0?.message||"Could not send the widget message.","warning",5000)}})();return}if(E==="widget.ready"||E==="widget.request_refresh"){let b=new Date().toISOString(),l=Boolean(B?.payload?.buildDashboard||B?.payload?.dashboardKind==="internal-state"),V0=Number(U?.runtimeState?.refreshCount||0)+1;if(b0((K0)=>{let Z0=m1(K0);if(!K0||Z0!==u)return K0;return{...K0,runtimeState:{...K0.runtimeState||{},lastEventKind:E,lastEventPayload:B?.payload||null,...E==="widget.ready"?{readyAt:b,lastHostUpdate:{type:"ready_ack",at:b}}:{},...E==="widget.request_refresh"?{lastRefreshRequestAt:b,refreshCount:V0,lastHostUpdate:{type:l?"refresh_building":"refresh_ack",at:b,count:V0,echo:B?.payload||null}}:{}}}}),E==="widget.request_refresh")if(l)(async()=>{try{let K0=await v3(B?.payload||null);b0((Z0)=>{let s=m1(Z0);if(!Z0||s!==u)return Z0;return{...Z0,runtimeState:{...Z0.runtimeState||{},dashboard:K0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:V0,echo:B?.payload||null}}}}),c("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(K0){b0((Z0)=>{let s=m1(Z0);if(!Z0||s!==u)return Z0;return{...Z0,runtimeState:{...Z0.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:V0,error:K0?.message||"Could not build dashboard."}}}}),c("Dashboard build failed",K0?.message||"Could not build dashboard.","warning",5000)}})();else c("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[v3,j,g5,f5,R5,c]);g(()=>{K1.current.clear(),b0(null)},[j]);let cQ=C(async()=>{await dj({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:h5,refreshActiveChatAgents:n1,refreshCurrentChatBranches:t1,showIntentToast:c,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,n1,t1,c]),W8=C(async(B,U)=>{await ij({hasWindow:typeof window<"u",isWebAppMode:V,path:B,label:U,showIntentToast:c,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(E)=>{let b=(typeof g0==="string"?g0.trim():"")===E?R1.current:E===e4?E_.current:null;if(typeof b?.preparePopoutTransfer==="function")return await b.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(E)=>{let u=a0.get(E);if(u&&!u.dirty){o_(E);return}if(E===e4&&c1)C1(!1)}})},[j,c1,o_,V,c,g0]);g(()=>Sj({openTab:(B,U)=>j_(B,U?{label:U}:void 0),popOutPane:(B,U)=>{W8(B,U)}}),[W8,j_]);let lQ=C(async()=>{await nj({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:p1,forkChatBranch:h5,getActiveChatAgents:R6,getChatBranches:q6,setActiveChatAgents:H0,setCurrentChatBranches:R0,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,p1,V,c]);g(()=>{if(!V1)return;if(typeof window>"u")return;let B=e_.current;if(!B)return;if(!G4.current){let U=H5("editorWidth",null),E=d4.current||280;G4.current=Number.isFinite(U)?U:E}if(B.style.setProperty("--editor-width",`${G4.current}px`),!E4.current){let U=H5("dockHeight",null);E4.current=Number.isFinite(U)?U:200}B.style.setProperty("--dock-height",`${E4.current}px`)},[V1]),g(()=>{if(!Q_||Q)return;return xj(u1)},[u1,Q_,Q]),g(()=>{if(Q)return;return yj({toggleZenMode:p4,exitZenMode:P_,zenMode:H1,isZenModeActive:()=>H1})},[p4,P_,H1,Q]);let m3=Boolean(o0&&o0===(S?.turn_id||A0));if(K)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${W_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${W_.message}</p>
                    </div>
                </div>
            </div>
        `;if(Z)return L`
            <div class=${`app-shell pane-popout${V1?" editor-open":""}`} ref=${e_}>
                <div class="editor-pane-container pane-popout-container">
                    ${V1&&!T_&&L`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${Z_?L`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${a_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${$_.length>1&&L`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${$_.map((B)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${B.id===g0?" active":""}`}
                                                                onClick=${(U)=>{g4(B.id),U.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${B.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${g0&&P1.has(g0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(B)=>{u_(g0),B.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:L`
                                    <div class="pane-popout-controls-label" aria-label=${a_}>${a_}</div>
                                `}
                        </div>
                    `}
                    ${V1?L`<div class="editor-pane-host" ref=${B1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${V1&&g0&&P1.has(g0)&&L`
                        <${W3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${g0}
                            onClose=${()=>u_(g0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${N1?"":" workspace-collapsed"}${V1?" editor-open":""}${Q?" chat-only":""}${H1?" zen-mode":""}`} ref=${e_}>
            ${q0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(B)=>{if(B.target===B.currentTarget)u5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(B)=>{B.preventDefault(),u3(L0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${w1}
                            value=${L0}
                            onInput=${(B)=>{let U=B.currentTarget?.value??"";j0(String(U))}}
                            onKeyDown=${(B)=>{if(B.key==="Escape")B.preventDefault(),u5()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${C0.kind||"info"}`}>
                            ${C0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${w||!C0.canSubmit}>
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
                <${Kj}
                    onFileSelect=${S5}
                    visible=${N1}
                    active=${N1||V1}
                    onOpenEditor=${j_}
                    onOpenTerminalTab=${z1}
                    onOpenVncTab=${M_}
                    onToggleTerminal=${Q_?u1:void 0}
                    terminalVisible=${Boolean(Q_&&c1)}
                />
                <button
                    class=${`workspace-toggle-tab${N1?" open":" closed"}`}
                    onClick=${gQ}
                    title=${N1?"Hide workspace":"Show workspace"}
                    aria-label=${N1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${DQ} onTouchStart=${AQ}></div>
            `}
            ${K4&&L`
                <div class="editor-pane-container">
                    ${H1&&L`<div class="zen-hover-zone"></div>`}
                    ${V1&&L`
                        <${Nj}
                            tabs=${$_}
                            activeId=${g0}
                            onActivate=${g4}
                            onClose=${o_}
                            onCloseOthers=${r_}
                            onCloseAll=${j5}
                            onTogglePin=${s_}
                            onTogglePreview=${u_}
                            onEditSource=${P5}
                            previewTabs=${P1}
                            paneOverrides=${A_}
                            onToggleDock=${Q_?u1:void 0}
                            dockVisible=${Q_&&c1}
                            onToggleZen=${p4}
                            zenMode=${H1}
                            onPopOutTab=${V?void 0:W8}
                        />
                    `}
                    ${V1&&L`<div class="editor-pane-host" ref=${B1}></div>`}
                    ${V1&&g0&&P1.has(g0)&&L`
                        <${W3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${g0}
                            onClose=${()=>u_(g0)}
                        />
                    `}
                    ${Q_&&c1&&L`<div class="dock-splitter" onMouseDown=${kQ} onTouchStart=${IQ}></div>`}
                    ${Q_&&L`<div class=${`dock-panel${c1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&L`
                                    <button class="dock-panel-action" onClick=${()=>W8(e4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
                        <div class="dock-panel-body" ref=${Q5}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${EQ} onTouchStart=${MQ}></div>
            `}
            <div class="container">
                ${k&&Dj()&&L`<div class="search-results-spacer"></div>`}
                ${Q&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${X1?.agent_name?`@${X1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${X1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${X0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(B)=>b3(B.currentTarget.value)}
                                    >
                                        ${X0.map((B)=>L`
                                            <option key=${B.chat_jid} value=${B.chat_jid}>
                                                ${R8(B,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${X1?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${L6}
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
                                    onClick=${g3}
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
                        <button class="back-btn" onClick=${CQ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${k} · ${Y4}`}</span>
                    </div>
                `}
                <${y7}
                    posts=${V5}
                    hasMore=${N6?JQ:!1}
                    onLoadMore=${N6?OQ:void 0}
                    timelineRef=${X_}
                    onHashtagClick=${PQ}
                    onMessageRef=${S1}
                    onScrollToMessage=${f1}
                    onFileRef=${T0}
                    onPostClick=${void 0}
                    onDeletePost=${RQ}
                    onOpenWidget=${hQ}
                    emptyMessage=${O?`No posts with #${O}`:k?`No results for "${k}"`:void 0}
                    agents=${K_}
                    user=${g_}
                    reverse=${N6}
                    removingPostIds=${y1}
                    searchQuery=${k}
                />
                <${X$}
                    status=${B4(S)?null:S}
                    draft=${Y0}
                    plan=${$0}
                    thought=${G0}
                    pendingRequest=${B0}
                    intent=${x}
                    turnId=${A0}
                    steerQueued=${m3}
                    onPanelToggle=${z_}
                    showExtensionPanels=${!1}
                />
                <${_7}
                    session=${t}
                    onClose=${B6}
                    onRetry=${vQ}
                    onInject=${bQ}
                />
                <${B7}
                    widget=${M0}
                    onClose=${g5}
                    onWidgetEvent=${pQ}
                />
                <${X$}
                    extensionPanels=${Array.from(k0.values())}
                    pendingPanelActions=${i0}
                    onExtensionPanelAction=${wQ}
                    turnId=${A0}
                    steerQueued=${m3}
                    onPanelToggle=${z_}
                    showCorePanels=${!1}
                />
                <${_$}
                    items=${J?[]:u0}
                    onInjectQueuedFollowup=${w3}
                    onRemoveQueuedFollowup=${f3}
                    onOpenFilePill=${T0}
                />
                <${P2}
                    onPost=${()=>{let{searchQuery:B,searchOpen:U}=g1.current||{};if(!B&&!U)c_(),N5()}}
                    onFocus=${N5}
                    searchMode=${J}
                    searchScope=${I}
                    onSearch=${SQ}
                    onSearchScopeChange=${i}
                    onEnterSearch=${xQ}
                    onExitSearch=${yQ}
                    fileRefs=${h}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${v}
                    onSetFileRefs=${n}
                    messageRefs=${e}
                    onRemoveMessageRef=${N4}
                    onClearMessageRefs=${n4}
                    onSetMessageRefs=${q5}
                    onSwitchChat=${b3}
                    onRenameSession=${u3}
                    isRenameSessionInProgress=${w}
                    onCreateSession=${cQ}
                    onDeleteSession=${g3}
                    onRestoreSession=${mQ}
                    activeEditorPath=${Q?null:g0}
                    onAttachEditorFile=${Q?void 0:J1}
                    onOpenFilePill=${T0}
                    followupQueueCount=${U_}
                    followupQueueItems=${u0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${w3}
                    onRemoveQueuedFollowup=${f3}
                    onSubmitIntercept=${fQ}
                    onMessageResponse=${f5}
                    onSubmitError=${K5}
                    onPopOutChat=${V?void 0:lQ}
                    isAgentActive=${R5}
                    activeChatAgents=${W0}
                    currentChatJid=${j}
                    connectionStatus=${G}
                    activeModel=${_1}
                    modelUsage=${k1}
                    thinkingLevel=${M1}
                    supportsThinking=${p0}
                    contextUsage=${S0}
                    notificationsEnabled=${$5}
                    notificationPermission=${b4}
                    onToggleNotifications=${b1}
                    onModelChange=${h1}
                    onModelStateChange=${V6}
                    statusNotice=${B4(S)?S:null}
                />
                <${z7}
                    request=${B0}
                    onRespond=${()=>{J0(null),h0.current=null}}
                />
            </div>
        </div>
    `}function rG(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=C((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},K=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Q=f0(()=>new URL(_).searchParams,[_]);return L`<${oG} locationParams=${Q} navigate=${j} />`}x4(L`<${rG} />`,document.getElementById("app"));

//# debugId=E2752451E625DDA264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
