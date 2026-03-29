var oZ=Object.defineProperty;var rZ=(_)=>_;function sZ(_,$){this[_]=rZ.bind(null,$)}var aZ=(_,$)=>{for(var j in $)oZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:sZ.bind($,j)})};var J8,U1,j2,tZ,C4,l3,Z2,Q2,Y2,A6,z6,H6,q2,F8={},z8=[],eZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O8=Array.isArray;function B4(_,$){for(var j in $)_[j]=$[j];return _}function E6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function D8(_,$,j){var Z,Q,Y,q={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?Q=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?J8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return U8(_,q,Z,Q,null)}function U8(_,$,j,Z,Q){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Q==null?++j2:Q,__i:-1,__u:0};return Q==null&&U1.vnode!=null&&U1.vnode(Y),Y}function A8(_){return _.children}function V5(_,$){this.props=_,this.context=$}function B5(_,$){if($==null)return _.__?B5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?B5(_):null}function _Q(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Q=[],Y=B4({},$);Y.__v=$.__v+1,U1.vnode&&U1.vnode(Y),M6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?B5($):j,!!(32&$.__u),Q),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,N2(Z,Y,Q),$.__e=$.__=null,Y.__e!=j&&G2(Y)}}function G2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),G2(_)}function J6(_){(!_.__d&&(_.__d=!0)&&C4.push(_)&&!H8.__r++||l3!=U1.debounceRendering)&&((l3=U1.debounceRendering)||Z2)(H8)}function H8(){try{for(var _,$=1;C4.length;)C4.length>$&&C4.sort(Q2),_=C4.shift(),$=C4.length,_Q(_)}finally{C4.length=H8.__r=0}}function K2(_,$,j,Z,Q,Y,q,G,X,K,N){var V,W,O,M,k,E,J,D=Z&&Z.__k||z8,I=$.length;for(X=$Q(j,$,D,X,I),V=0;V<I;V++)(O=j.__k[V])!=null&&(W=O.__i!=-1&&D[O.__i]||F8,O.__i=V,E=M6(_,O,W,Q,Y,q,G,X,K,N),M=O.__e,O.ref&&W.ref!=O.ref&&(W.ref&&k6(W.ref,null,O),N.push(O.ref,O.__c||M,O)),k==null&&M!=null&&(k=M),(J=!!(4&O.__u))||W.__k===O.__k?X=X2(O,X,_,J):typeof O.type=="function"&&E!==void 0?X=E:M&&(X=M.nextSibling),O.__u&=-7);return j.__e=k,X}function $Q(_,$,j,Z,Q){var Y,q,G,X,K,N=j.length,V=N,W=0;for(_.__k=Array(Q),Y=0;Y<Q;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=U8(null,q,null,null,null):O8(q)?q=_.__k[Y]=U8(A8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=U8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,X=Y+W,q.__=_,q.__b=_.__b+1,G=null,(K=q.__i=jQ(q,j,X,V))!=-1&&(V--,(G=j[K])&&(G.__u|=2)),G==null||G.__v==null?(K==-1&&(Q>N?W--:Q<N&&W++),typeof q.type!="function"&&(q.__u|=4)):K!=X&&(K==X-1?W--:K==X+1?W++:(K>X?W--:W++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<N;Y++)(G=j[Y])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=B5(G)),B2(G,G));return Z}function X2(_,$,j,Z){var Q,Y;if(typeof _.type=="function"){for(Q=_.__k,Y=0;Q&&Y<Q.length;Y++)Q[Y]&&(Q[Y].__=_,$=X2(Q[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=B5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function jQ(_,$,j,Z){var Q,Y,q,G=_.key,X=_.type,K=$[j],N=K!=null&&(2&K.__u)==0;if(K===null&&G==null||N&&G==K.key&&X==K.type)return j;if(Z>(N?1:0)){for(Q=j-1,Y=j+1;Q>=0||Y<$.length;)if((K=$[q=Q>=0?Q--:Y++])!=null&&(2&K.__u)==0&&G==K.key&&X==K.type)return q}return-1}function d3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||eZ.test($)?j:j+"px"}function W8(_,$,j,Z,Q){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||d3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||d3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(Y2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=A6,_.addEventListener($,Y?H6:z6,Y)):_.removeEventListener($,Y?H6:z6,Y);else{if(Q=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function i3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=A6++;else if($.t<j.u)return;return j(U1.event?U1.event($):$)}}}function M6(_,$,j,Z,Q,Y,q,G,X,K){var N,V,W,O,M,k,E,J,D,I,i,p,r,e,f,y=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),Y=[G=$.__e=j.__e]),(N=U1.__b)&&N($);_:if(typeof y=="function")try{if(J=$.props,D=y.prototype&&y.prototype.render,I=(N=y.contextType)&&Z[N.__c],i=N?I?I.props.value:N.__:Z,j.__c?E=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new y(J,i):($.__c=V=new V5(J,i),V.constructor=y,V.render=QQ),I&&I.sub(V),V.state||(V.state={}),V.__n=Z,W=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&y.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=B4({},V.__s)),B4(V.__s,y.getDerivedStateFromProps(J,V.__s))),O=V.props,M=V.state,V.__v=$,W)D&&y.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&y.getDerivedStateFromProps==null&&J!==O&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,i),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,i)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),z8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,i),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(O,M,k)})}if(V.context=i,V.props=J,V.__P=_,V.__e=!1,p=U1.__r,r=0,D)V.state=V.__s,V.__d=!1,p&&p($),N=V.render(V.props,V.state,V.context),z8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,p&&p($),N=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++r<25);V.state=V.__s,V.getChildContext!=null&&(Z=B4(B4({},Z),V.getChildContext())),D&&!W&&V.getSnapshotBeforeUpdate!=null&&(k=V.getSnapshotBeforeUpdate(O,M)),e=N!=null&&N.type===A8&&N.key==null?V2(N.props.children):N,G=K2(_,O8(e)?e:[e],$,j,Z,Q,Y,q,G,X,K),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),E&&(V.__E=V.__=null)}catch(H){if($.__v=null,X||Y!=null)if(H.then){for($.__u|=X?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;Y[Y.indexOf(G)]=null,$.__e=G}else{for(f=Y.length;f--;)E6(Y[f]);O6($)}else $.__e=j.__e,$.__k=j.__k,H.then||O6($);U1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=ZQ(j.__e,$,j,Z,Q,Y,q,X,K);return(N=U1.diffed)&&N($),128&$.__u?void 0:G}function O6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(O6))}function N2(_,$,j){for(var Z=0;Z<j.length;Z++)k6(j[Z],j[++Z],j[++Z]);U1.__c&&U1.__c($,_),_.some(function(Q){try{_=Q.__h,Q.__h=[],_.some(function(Y){Y.call(Q)})}catch(Y){U1.__e(Y,Q.__v)}})}function V2(_){return typeof _!="object"||_==null||_.__b>0?_:O8(_)?_.map(V2):B4({},_)}function ZQ(_,$,j,Z,Q,Y,q,G,X){var K,N,V,W,O,M,k,E=j.props||F8,J=$.props,D=$.type;if(D=="svg"?Q="http://www.w3.org/2000/svg":D=="math"?Q="http://www.w3.org/1998/Math/MathML":Q||(Q="http://www.w3.org/1999/xhtml"),Y!=null){for(K=0;K<Y.length;K++)if((O=Y[K])&&"setAttribute"in O==!!D&&(D?O.localName==D:O.nodeType==3)){_=O,Y[K]=null;break}}if(_==null){if(D==null)return document.createTextNode(J);_=document.createElementNS(Q,D,J.is&&J),G&&(U1.__m&&U1.__m($,Y),G=!1),Y=null}if(D==null)E===J||G&&_.data==J||(_.data=J);else{if(Y=Y&&J8.call(_.childNodes),!G&&Y!=null)for(E={},K=0;K<_.attributes.length;K++)E[(O=_.attributes[K]).name]=O.value;for(K in E)O=E[K],K=="dangerouslySetInnerHTML"?V=O:K=="children"||(K in J)||K=="value"&&("defaultValue"in J)||K=="checked"&&("defaultChecked"in J)||W8(_,K,null,O,Q);for(K in J)O=J[K],K=="children"?W=O:K=="dangerouslySetInnerHTML"?N=O:K=="value"?M=O:K=="checked"?k=O:G&&typeof O!="function"||E[K]===O||W8(_,K,O,E[K],Q);if(N)G||V&&(N.__html==V.__html||N.__html==_.innerHTML)||(_.innerHTML=N.__html),$.__k=[];else if(V&&(_.innerHTML=""),K2($.type=="template"?_.content:_,O8(W)?W:[W],$,j,Z,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Q,Y,q,Y?Y[0]:j.__k&&B5(j,0),G,X),Y!=null)for(K=Y.length;K--;)E6(Y[K]);G||(K="value",D=="progress"&&M==null?_.removeAttribute("value"):M!=null&&(M!==_[K]||D=="progress"&&!M||D=="option"&&M!=E[K])&&W8(_,K,M,E[K],Q),K="checked",k!=null&&k!=_[K]&&W8(_,K,k,E[K],Q))}return _}function k6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Q){U1.__e(Q,j)}}function B2(_,$,j){var Z,Q;if(U1.unmount&&U1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||k6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){U1.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Q=0;Q<Z.length;Q++)Z[Q]&&B2(Z[Q],$,j||typeof _.type!="function");j||E6(_.__e),_.__c=_.__=_.__e=void 0}function QQ(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Z,Q,Y,q;$==document&&($=document.documentElement),U1.__&&U1.__(_,$),Q=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],M6($,_=(!Z&&j||$).__k=D8(A8,null,[_]),Q||F8,F8,$.namespaceURI,!Z&&j?[j]:Q?null:$.firstChild?J8.call($.childNodes):null,Y,!Z&&j?j:Q?Q.__e:$.firstChild,Z,q),N2(Y,_,q)}function W2(_){function $(j){var Z,Q;return this.getChildContext||(Z=new Set,(Q={})[$.__c]=this,this.getChildContext=function(){return Q},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Z.forEach(function(q){q.__e=!0,J6(q)})},this.sub=function(Y){Z.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Z&&Z.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+q2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}J8=z8.slice,U1={__e:function(_,$,j,Z){for(var Q,Y,q;$=$.__;)if((Q=$.__c)&&!Q.__)try{if((Y=Q.constructor)&&Y.getDerivedStateFromError!=null&&(Q.setState(Y.getDerivedStateFromError(_)),q=Q.__d),Q.componentDidCatch!=null&&(Q.componentDidCatch(_,Z||{}),q=Q.__d),q)return Q.__E=Q}catch(G){_=G}throw _}},j2=0,tZ=function(_){return _!=null&&_.constructor===void 0},V5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B4({},this.state),typeof _=="function"&&(_=_(B4({},j),this.props)),_&&B4(j,_),_!=null&&this.__v&&($&&this._sb.push($),J6(this))},V5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),J6(this))},V5.prototype.render=A8,C4=[],Z2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Q2=function(_,$){return _.__v.__b-$.__v.__b},H8.__r=0,Y2=/(PointerCapture)$|Capture$/i,A6=0,z6=i3(!1),H6=i3(!0),q2=0;var S4,W1,F6,n3,W5=0,U2=[],O1=U1,o3=O1.__b,r3=O1.__r,s3=O1.diffed,a3=O1.__c,t3=O1.unmount,e3=O1.__;function U5(_,$){O1.__h&&O1.__h(W1,_,W5||$),W5=0;var j=W1.__H||(W1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function h(_){return W5=1,I6(J2,_)}function I6(_,$,j){var Z=U5(S4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):J2(void 0,$),function(G){var X=Z.__N?Z.__N[0]:Z.__[0],K=Z.t(X,G);X!==K&&(Z.__N=[K,Z.__[1]],Z.__c.setState({}))}],Z.__c=W1,!W1.__f)){var Q=function(G,X,K){if(!Z.__c.__H)return!0;var N=Z.__c.__H.__.filter(function(W){return W.__c});if(N.every(function(W){return!W.__N}))return!Y||Y.call(this,G,X,K);var V=Z.__c.props!==G;return N.some(function(W){if(W.__N){var O=W.__[0];W.__=W.__N,W.__N=void 0,O!==W.__[0]&&(V=!0)}}),Y&&Y.call(this,G,X,K)||V};W1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=W1;W1.componentWillUpdate=function(G,X,K){if(this.__e){var N=Y;Y=void 0,Q(G,X,K),Y=N}q&&q.call(this,G,X,K)},W1.shouldComponentUpdate=Q}return Z.__N||Z.__}function m(_,$){var j=U5(S4++,3);!O1.__s&&T6(j.__H,$)&&(j.__=_,j.u=$,W1.__H.__h.push(j))}function g5(_,$){var j=U5(S4++,4);!O1.__s&&T6(j.__H,$)&&(j.__=_,j.u=$,W1.__h.push(j))}function P(_){return W5=5,v0(function(){return{current:_}},[])}function L2(_,$,j){W5=6,g5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function v0(_,$){var j=U5(S4++,7);return T6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function C(_,$){return W5=8,v0(function(){return _},$)}function F2(_){var $=W1.context[_.__c],j=U5(S4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(W1)),$.props.value):_.__}function z2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function H2(_){var $=U5(S4++,10),j=h();return $.__=_,W1.componentDidCatch||(W1.componentDidCatch=function(Z,Q){$.__&&$.__(Z,Q),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function YQ(){for(var _;_=U2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(L8),$.__h.some(D6),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){W1=null,o3&&o3(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),e3&&e3(_,$)},O1.__r=function(_){r3&&r3(_),S4=0;var $=(W1=_.__c).__H;$&&(F6===W1?($.__h=[],W1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(L8),$.__h.some(D6),$.__h=[],S4=0)),F6=W1},O1.diffed=function(_){s3&&s3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(U2.push($)!==1&&n3===O1.requestAnimationFrame||((n3=O1.requestAnimationFrame)||qQ)(YQ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),F6=W1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(L8),j.__h=j.__h.filter(function(Z){return!Z.__||D6(Z)})}catch(Z){$.some(function(Q){Q.__h&&(Q.__h=[])}),$=[],O1.__e(Z,j.__v)}}),a3&&a3(_,$)},O1.unmount=function(_){t3&&t3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{L8(Z)}catch(Q){$=Q}}),j.__H=void 0,$&&O1.__e($,j.__v))};var _2=typeof requestAnimationFrame=="function";function qQ(_){var $,j=function(){clearTimeout(Z),_2&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);_2&&($=requestAnimationFrame(j))}function L8(_){var $=W1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),W1=$}function D6(_){var $=W1;_.__c=_.__(),W1=$}function T6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function J2(_,$){return typeof $=="function"?$(_):$}var O2=function(_,$,j,Z){var Q;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],G=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Z[0]=G:q===4?Z[1]=Object.assign(Z[1]||{},G):q===5?(Z[1]=Z[1]||{})[$[++Y]]=G:q===6?Z[1][$[++Y]]+=G+"":q?(Q=_.apply(G,O2(_,G,j,["",null])),Z.push(Q),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=Q)):Z.push(G)}return Z},$2=new Map;function GQ(_){var $=$2.get(this);return $||($=new Map,$2.set(this,$)),($=O2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Q,Y=1,q="",G="",X=[0],K=function(W){Y===1&&(W||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,W,q):Y===3&&(W||q)?(X.push(3,W,q),Y=2):Y===2&&q==="..."&&W?X.push(4,W,0):Y===2&&q&&!W?X.push(5,0,!0,q):Y>=5&&((q||!W&&Y===5)&&(X.push(Y,0,q,Q),Y=6),W&&(X.push(Y,W,0,Q),Y=6)),q=""},N=0;N<j.length;N++){N&&(Y===1&&K(),K(N));for(var V=0;V<j[N].length;V++)Z=j[N][V],Y===1?Z==="<"?(K(),X=[X],Y=3):q+=Z:Y===4?q==="--"&&Z===">"?(Y=1,q=""):q=Z+q[0]:G?Z===G?G="":q+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(K(),Y=1):Y&&(Z==="="?(Y=5,Q=q,q=""):Z==="/"&&(Y<5||j[N][V+1]===">")?(K(),Y===3&&(X=X[0]),Y=X,(X=X[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(K(),Y=2):q+=Z),Y===3&&q==="!--"&&(Y=4,X=X[0])}return K(),X}(_)),$),arguments,[])).length>1?$:$[0]}var L=GQ.bind(D8);var e1={};aZ(e1,{uploadWorkspaceFile:()=>M8,uploadMedia:()=>f6,updateWorkspaceFile:()=>IQ,submitAdaptiveCardAction:()=>v6,streamSidePrompt:()=>EQ,stopAutoresearch:()=>HQ,steerAgentQueueItem:()=>AQ,setWorkspaceVisibility:()=>l5,setAgentThoughtVisibility:()=>g6,sendPeerAgentMessage:()=>LQ,sendAgentMessage:()=>o4,searchPosts:()=>C6,restoreChatBranch:()=>UQ,respondToAgentRequest:()=>E8,renameWorkspaceFile:()=>l6,renameChatBranch:()=>BQ,removeAgentQueueItem:()=>DQ,pruneChatBranch:()=>WQ,moveWorkspaceEntry:()=>d6,getWorkspaceTree:()=>p5,getWorkspaceRawUrl:()=>k8,getWorkspaceFile:()=>c5,getWorkspaceDownloadUrl:()=>I8,getWorkspaceBranch:()=>kQ,getTimeline:()=>n4,getThumbnailUrl:()=>m6,getThread:()=>S6,getPostsByHashtag:()=>P6,getMediaUrl:()=>w_,getMediaText:()=>h6,getMediaInfo:()=>L5,getMediaBlob:()=>MQ,getChatBranches:()=>VQ,getAutoresearchStatus:()=>zQ,getAgents:()=>R6,getAgentThought:()=>u6,getAgentStatus:()=>w6,getAgentQueueState:()=>OQ,getAgentModels:()=>h5,getAgentContext:()=>FQ,getActiveChatAgents:()=>y6,forkChatBranch:()=>m5,dismissAutoresearch:()=>JQ,deleteWorkspaceFile:()=>i6,deletePost:()=>x6,createWorkspaceFile:()=>c6,createReply:()=>NQ,createPost:()=>XQ,attachWorkspaceFile:()=>p6,addToWhitelist:()=>b6,SSEClient:()=>T8});async function e0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function D2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let Q=Z.join(`
`);if(!Q)return null;try{return{event:j,data:JSON.parse(Q)}}catch{return{event:j,data:Q}}}async function KQ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Q="";while(!0){let{value:q,done:G}=await j.read();if(G)break;Q+=Z.decode(q,{stream:!0});let X=Q.split(`

`);Q=X.pop()||"";for(let K of X){let N=D2(K);if(N)$(N.event,N.data)}}Q+=Z.decode();let Y=D2(Q);if(Y)$(Y.event,Y.data)}async function n4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return e0(Z)}async function P6(_,$=50,j=0,Z=null){let Q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Q}`)}async function C6(_,$=50,j=0,Z=null,Q="current",Y=null){let q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=Q?`&scope=${encodeURIComponent(Q)}`:"",X=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return e0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${G}${X}`)}async function S6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return e0(`/thread/${_}${j}`)}async function XQ(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return e0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function NQ(_,$,j=[],Z=null){let Q=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/post/reply${Q}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function x6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Q=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return e0(Q,{method:"DELETE"})}async function o4(_,$,j=null,Z=[],Q=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",G={content:$,thread_id:j,media_ids:Z};if(Q==="auto"||Q==="queue"||Q==="steer")G.mode=Q;return e0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(G)})}async function y6(){return e0("/agent/active-chats")}async function VQ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return e0(`/agent/branches${Z}`)}async function m5(_,$={}){return e0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function BQ(_,$={}){return e0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function WQ(_){return e0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function UQ(_,$={}){return e0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function LQ(_,$,j,Z="auto",Q={}){let Y={source_chat_jid:_,content:j,mode:Z,...Q?.sourceAgentName?{source_agent_name:Q.sourceAgentName}:{},...Q?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return e0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function R6(){return e0("/agent/roster")}async function w6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/status${$}`)}async function FQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/context${$}`)}async function zQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/autoresearch/status${$}`)}async function HQ(_=null,$={}){return e0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function JQ(_=null){return e0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function OQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/queue-state${$}`)}async function DQ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function AQ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function h5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/models${$}`)}async function f6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function E8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Q=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Q.error||`HTTP ${Z.status}`)}return Z.json()}async function v6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function EQ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,Q=null;if(await KQ(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Z=q;else if(Y==="side_prompt_error")Q=q}),Q){let Y=Error(Q?.error||"Side prompt failed");throw Y.payload=Q,Y}return Z}async function b6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function u6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return e0(j)}async function g6(_,$,j){return e0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function w_(_){return`/media/${_}`}function m6(_){return`/media/${_}/thumbnail`}async function L5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function h6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function MQ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function p5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return e0(Z)}async function kQ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return e0($)}async function c5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Q=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return e0(Q)}async function IQ(_,$){return e0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function p6(_){return e0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function M8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Q=new URLSearchParams;if($)Q.set("path",$);if(j.overwrite)Q.set("overwrite","1");let Y=Q.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+q,{method:"POST",body:Z});if(!G.ok){let X=await G.json().catch(()=>({error:"Upload failed"})),K=Error(X.error||`HTTP ${G.status}`);throw K.status=G.status,K.code=X.code,K}return G.json()}async function c6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Q=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(Q.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=Q.code,Y}return Z.json()}async function l6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Q=Error(Z.error||`HTTP ${j.status}`);throw Q.status=j.status,Q.code=Z.code,Q}return j.json()}async function d6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Q=Error(Z.error||`HTTP ${j.status}`);throw Q.status=j.status,Q.code=Z.code,Q}return j.json()}async function i6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return e0($,{method:"DELETE"})}async function l5(_,$=!1){return e0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function k8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function I8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class T8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Q=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Q),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function P8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function TQ(_,$){let j=P8(_),Z=P8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function n6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function o6(_,$,j=Date.now(),Z=700){let Q=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Q.value||!Number.isFinite(Q.updatedAt)||j-Q.updatedAt>Z?Y:`${Q.value}${Y}`,updatedAt:j}}function PQ(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Q=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Q+q)%j);return Y}function CQ(_,$,j=0,Z=(Q)=>Q){let Q=P8($);if(!Q)return-1;let Y=Array.isArray(_)?_:[],q=PQ(Y.length,j),G=Y.map((X)=>P8(Z(X)));for(let X of q)if(G[X].startsWith(Q))return X;for(let X of q)if(G[X].includes(Q))return X;return-1}function r6(_,$,j=-1,Z=(Q)=>Q){let Q=Array.isArray(_)?_:[];if(j>=0&&j<Q.length){let Y=Z(Q[j]);if(TQ(Y,$))return j}return CQ(Q,$,0,Z)}function J_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function K1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function F5(_,$=!1){let j=J_(_);if(j===null)return $;return j==="true"}function z5(_,$=null){let j=J_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function C8(_){return String(_||"").trim().toLowerCase()}function s6(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return C8($[1]||"")}function SQ(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Q=C8(Z?.agent_name);if(!Q||$.has(Q))continue;$.add(Q),j.push(Z)}return j}function A2(_,$,j={}){let Z=s6($);if(Z==null)return[];let Q=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return SQ(_).filter((Y)=>{if(Q&&Y?.chat_jid===Q)return!1;return C8(Y?.agent_name).startsWith(Z)})}function a6(_){let $=C8(_);return $?`@${$} `:""}function E2(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function S8(_){let $=t6(_);return $?`@${$}`:""}function t6(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function x8(_,$=""){let j=String(_||""),Z=t6(j),Q=t6($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Z}`;if(Z===Q)return{normalized:Z,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Z!==j.trim())return{normalized:Z,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function M2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?S8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function xQ(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Q=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Q===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function y8(_,$={}){let j=S8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Q=xQ(_,$);return Q.length>0?`${j} — ${Z} • ${Q.join(" • ")}`:`${j} — ${Z}`}function k2(_,$,j){let Z=S8(_),Q=S8($),Y=String(j||"").trim();if(Z&&Q&&Z!==Q)return`Restored archived ${Z} as ${Q} because ${Z} is already in use.`;if(Q)return`Restored ${Q}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Y||"branch"}.`}function yQ(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function W4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function R8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return W4(_)?"Compacting context":"Working..."}function RQ(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Q=Math.floor($/3600);if(Q>0)return`${Q}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function w8(_,$=Date.now()){let j=yQ(_);if(j===null)return null;return RQ(Math.max(0,$-j))}function i_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Q,removeTitle:Y="Remove",icon:q="file"}){let G=`${_}-file-pill`,X=`${_}-file-name`,K=`${_}-file-remove`,N=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${G} title=${j||$} onClick=${Q}>
      ${N}
      <span class=${X}>${$}</span>
      ${Z&&L`
        <button
          class=${K}
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
  `}var wQ=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function fQ({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Q=_.contextWindow,Y="Compact context",G=`${Z!=null?`Context: ${I2(Z)} / ${I2(Q)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,X=9,K=2*Math.PI*9,N=j/100*K,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
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
                    stroke-dasharray=${`${N} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function I2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function vQ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,fileRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K))Q.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Q.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Q}}function bQ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,messageRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K)){let N=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)Q.push(N[1])}else if(!K.trim())break;else break}if(Q.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Q}}function uQ(_){let $=vQ(_||""),j=bQ($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function e6({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Q)=>{let Y=typeof Q?.content==="string"?Q.content:"",q=uQ(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
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
                                    ${q.fileRefs.map((G)=>{let X=G.split("/").pop()||G;return L`
                                            <${i_}
                                                key=${"queue-file-"+G}
                                                prefix="compose"
                                                label=${X}
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
    `}function T2({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Q,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:G,fileRefs:X=[],onRemoveFileRef:K,onClearFileRefs:N,messageRefs:V=[],onRemoveMessageRef:W,onClearMessageRefs:O,activeModel:M=null,modelUsage:k=null,thinkingLevel:E=null,supportsThinking:J=!1,contextUsage:D=null,onContextCompact:I,notificationsEnabled:i=!1,notificationPermission:p="default",onToggleNotifications:r,onModelChange:e,onModelStateChange:f,activeEditorPath:y=null,onAttachEditorFile:H,onOpenFilePill:S,followupQueueItems:c=[],onInjectQueuedFollowup:G0,onRemoveQueuedFollowup:d,onSubmitIntercept:$0,onMessageResponse:_0,onPopOutChat:X0,isAgentActive:V0=!1,activeChatAgents:B0=[],currentChatJid:J0="web:default",connectionStatus:E0="connected",onSetFileRefs:M0,onSetMessageRefs:o0,onSubmitError:y0,onSwitchChat:T0,onRenameSession:r0,isRenameSessionInProgress:s0=!1,onCreateSession:h0,onDeleteSession:t0,onRestoreSession:p0,showQueueStack:j1=!0,statusNotice:z0=null}){let[l0,Z1]=h(""),[Y1,K_]=h(""),[D1,_1]=h([]),[m1,M1]=h(!1),[q1,c0]=h([]),[x1,k1]=h(0),[a,W0]=h(!1),[H0,N0]=h([]),[R0,S0]=h(0),[b0,I0]=h(!1),[w0,i0]=h(!1),[D0,g0]=h(!1),[O0,Q0]=h(!1),[R,t]=h([]),[F0,k0]=h(0),[u0,G1]=h(0),[A1,X1]=h(!1),[h1,q4]=h(0),[U_,__]=h(null),[L_,X_]=h(()=>Date.now()),Q1=P(null),o1=P(null),G4=P(null),v_=P(null),_5=P(null),v4=P(null),b1=P(null),F_=P(null),y1=P({value:"",updatedAt:0}),E1=P(0),N1=P(!1),b_=200,u_=(F)=>{let u=new Set,n=[];for(let l of F||[]){if(typeof l!=="string")continue;let P0=l.trim();if(!P0||u.has(P0))continue;u.add(P0),n.push(P0)}return n},V1=()=>{let F=J_("piclaw_compose_history");if(!F)return[];try{let u=JSON.parse(F);if(!Array.isArray(u))return[];return u_(u)}catch{return[]}},$_=(F)=>{K1("piclaw_compose_history",JSON.stringify(F))},m0=P(V1()),P1=P(-1),A_=P(""),j_=l0.trim()||D1.length>0||X.length>0||V.length>0,b4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),r_=typeof window<"u"&&typeof Notification<"u",u4=typeof window<"u"?Boolean(window.isSecureContext):!1,$5=r_&&u4&&p!=="denied",a_=p==="granted"&&i,g_=W4(z0),T5=R8(z0),P5=typeof z0?.detail==="string"&&z0.detail.trim()?z0.detail.trim():"",B1=g_?w8(z0,L_):null,R1=a_?"Disable notifications":"Enable notifications",j5=D1.length>0||X.length>0||V.length>0,E_=E0==="disconnected"?"Reconnecting":String(E0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),Z_=E0==="disconnected"?"Reconnecting":`Connection: ${E_}`,p1=(Array.isArray(B0)?B0:[]).filter((F)=>!F?.archived_at),C1=(()=>{for(let F of Array.isArray(B0)?B0:[]){let u=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(u&&u===J0)return F}return null})(),u1=Boolean(C1&&C1.chat_jid===(C1.root_chat_jid||C1.chat_jid)),z1=v0(()=>{let F=new Set,u=[];for(let n of Array.isArray(B0)?B0:[]){let l=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!l||l===J0||F.has(l))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;F.add(l),u.push(n)}return u},[B0,J0]),M_=z1.length>0,k_=M_&&typeof T0==="function",I_=M_&&typeof p0==="function",t_=Boolean(s0||N1.current),Q_=!j&&typeof r0==="function"&&!t_,r1=!j&&typeof h0==="function",T_=!j&&typeof t0==="function"&&!u1,K4=!j&&(k_||I_||Q_||r1||T_),H1=M||"",e_=J&&E?` (${E})`:"",g4=e_.trim()?`${E}`:"",m4=typeof k?.hint_short==="string"?k.hint_short.trim():"",P_=[g4||null,m4||null].filter(Boolean).join(" • "),h4=[H1?`Current model: ${H1}${e_}`:null,k?.plan?`Plan: ${k.plan}`:null,m4||null,k?.primary?.reset_description||null,k?.secondary?.reset_description||null].filter(Boolean),Z5=w0?"Switching model…":h4.join(" • ")||`Current model: ${H1}${e_} (tap to open model picker)`,m_=(F)=>{if(!F||typeof F!=="object")return;let u=F.model??F.current;if(typeof f==="function")f({model:u??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(u&&typeof e==="function")e(u)},h_=(F)=>{let u=F||Q1.current;if(!u)return;u.style.height="auto",u.style.height=`${u.scrollHeight}px`,u.style.overflowY="hidden"},O4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){W0(!1),c0([]);return}let u=F.toLowerCase().split(" ")[0];if(u.length<1){W0(!1),c0([]);return}let n=wQ.filter((l)=>l.name.startsWith(u)||l.name.replace(/-/g,"").startsWith(u.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===u))I0(!1),N0([]),c0(n),k1(0),W0(!0);else W0(!1),c0([])},p_=(F)=>{let u=l0,n=u.indexOf(" "),l=n>=0?u.slice(n):"",P0=F.name+l;Z1(P0),W0(!1),c0([]),requestAnimationFrame(()=>{let J1=Q1.current;if(!J1)return;let S1=P0.length;J1.selectionStart=S1,J1.selectionEnd=S1,J1.focus()})},p4=(F)=>{if(s6(F)==null){I0(!1),N0([]);return}let u=A2(p1,F,{currentChatJid:J0});if(u.length>0&&!(u.length===1&&a6(u[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))W0(!1),c0([]),N0(u),S0(0),I0(!0);else I0(!1),N0([])},c_=(F)=>{let u=a6(F?.agent_name);if(!u)return;Z1(u),I0(!1),N0([]),requestAnimationFrame(()=>{let n=Q1.current;if(!n)return;let l=u.length;n.selectionStart=l,n.selectionEnd=l,n.focus()})},C_=()=>{if(j||!k_&&!I_&&!Q_&&!r1&&!T_)return!1;return y1.current={value:"",updatedAt:0},g0(!1),W0(!1),c0([]),I0(!1),N0([]),Q0(!0),!0},I1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!k_&&!I_&&!Q_&&!r1&&!T_)return;if(O0){y1.current={value:"",updatedAt:0},Q0(!1);return}C_()},D4=(F)=>{let u=typeof F==="string"?F.trim():"";if(Q0(!1),!u||u===J0){requestAnimationFrame(()=>Q1.current?.focus());return}T0?.(u)},A4=async(F)=>{let u=typeof F==="string"?F.trim():"";if(Q0(!1),!u||typeof p0!=="function"){requestAnimationFrame(()=>Q1.current?.focus());return}try{await p0(u)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>Q1.current?.focus())}},c4=(F)=>{let n=(Array.isArray(F)?F:[]).findIndex((l)=>!l?.disabled);return n>=0?n:0},L1=v0(()=>{let F=[];for(let u of z1){let n=Boolean(u?.archived_at),l=typeof u?.agent_name==="string"?u.agent_name.trim():"",P0=typeof u?.chat_jid==="string"?u.chat_jid.trim():"";if(!l||!P0)continue;F.push({type:"session",key:`session:${P0}`,label:`@${l} — ${P0}${u?.is_active?" active":""}${n?" archived":""}`,chat:u,disabled:n?!I_:!k_})}if(r1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(Q_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:t_});if(T_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[z1,I_,k_,r1,Q_,T_,t_]),E4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof r0!=="function"||s0||N1.current)return;N1.current=!0,Q0(!1);try{await r0()}catch(u){console.warn("Failed to rename session:",u)}finally{N1.current=!1}requestAnimationFrame(()=>Q1.current?.focus())},Q5=async()=>{if(typeof h0!=="function")return;Q0(!1);try{await h0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},g1=async()=>{if(typeof t0!=="function")return;Q0(!1);try{await t0(J0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},N_=(F)=>{if(j)K_(F);else Z1(F),O4(F),p4(F);requestAnimationFrame(()=>h_())},_4=(F)=>{let u=j?Y1:l0,n=u&&!u.endsWith(`
`)?`
`:"",l=`${u}${n}${F}`.trimStart();N_(l)},l4=(F)=>{let u=F?.command?.model_label;if(u)return u;let n=F?.command?.message;if(typeof n==="string"){let l=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(l?.[1])return l[1].trim()}return null},X4=async(F)=>{if(j||w0)return;i0(!0);try{let u=await o4("default",F,null,[],null,J0),n=l4(u);m_({model:n??M??null,thinking_level:u?.command?.thinking_level,supports_thinking:u?.command?.supports_thinking});try{let l=await h5(J0);if(l)m_(l)}catch{}return _?.(),!0}catch(u){return console.error("Failed to switch model:",u),alert("Failed to switch model: "+u.message),!1}finally{i0(!1)}},M4=async()=>{await X4("/cycle-model")},N4=async(F)=>{if(!F||w0)return;if(await X4(`/model ${F}`))g0(!1)},S_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let u=F.chat;if(u?.archived_at)A4(u.chat_jid);else D4(u.chat_jid);return}if(F.type==="action"){if(F.action==="new"){Q5();return}if(F.action==="rename"){E4();return}if(F.action==="delete")g1()}},z_=(F)=>{F.preventDefault(),F.stopPropagation(),y1.current={value:"",updatedAt:0},Q0(!1),g0((u)=>!u)},k4=async()=>{if(j)return;I?.(),await x_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},d4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return V0?"queue":void 0},x_=async(F,u,n={})=>{let{includeMedia:l=!0,includeFileRefs:P0=!0,includeMessageRefs:J1=!0,clearAfterSubmit:S1=!0,recordHistory:f1=!0}=n||{},V4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:l0,i4=typeof V4==="string"?V4:"";if(!i4.trim()&&(l?D1.length===0:!0)&&(P0?X.length===0:!0)&&(J1?V.length===0:!0))return;W0(!1),c0([]),I0(!1),N0([]),Q0(!1),__(null);let Y5=l?[...D1]:[],q5=P0?[...X]:[],V_=J1?[...V]:[],l1=i4.trim();if(f1&&l1){let I4=m0.current,F1=u_(I4.filter(($4)=>$4!==l1));if(F1.push(l1),F1.length>200)F1.splice(0,F1.length-200);m0.current=F1,$_(F1),P1.current=-1,A_.current=""}let G5=()=>{if(l)_1([...Y5]);if(P0)M0?.(q5);if(J1)o0?.(V_);Z1(l1),requestAnimationFrame(()=>h_())};if(S1)Z1(""),_1([]),N?.(),O?.();(async()=>{try{if(await $0?.({content:l1,submitMode:u,fileRefs:q5,messageRefs:V_,mediaFiles:Y5})){_?.();return}let F1=[];for(let H_ of Y5){let P4=await f6(H_);F1.push(P4.id)}let $4=q5.length?`Files:
${q5.map((H_)=>`- ${H_}`).join(`
`)}`:"",K5=V_.length?`Referenced messages:
${V_.map((H_)=>`- message:${H_}`).join(`
`)}`:"",K8=F1.length?`Attachments:
${F1.map((H_,P4)=>{let q6=Y5[P4]?.name||`attachment-${P4+1}`;return`- attachment:${H_} (${q6})`}).join(`
`)}`:"",B_=[l1,$4,K5,K8].filter(Boolean).join(`

`),T4=await o4("default",B_,null,F1,d4(u),J0);if(_0?.(T4),T4?.command){m_({model:T4.command.model_label??M??null,thinking_level:T4.command.thinking_level,supports_thinking:T4.command.supports_thinking});try{let H_=await h5(J0);if(H_)m_(H_)}catch{}}_?.()}catch(I4){if(S1)G5();let F1=I4?.message||"Failed to send message.";__(F1),y0?.(F1),console.error("Failed to post:",I4)}})()},z=(F)=>{G0?.(F)},T=C((F)=>{if(j||!D0&&!O0||F?.isComposing)return!1;let u=()=>{F.preventDefault?.(),F.stopPropagation?.()},n=()=>{y1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(u(),n(),D0)g0(!1);if(O0)Q0(!1);return!0}if(D0){if(F.key==="ArrowDown"){if(u(),n(),R.length>0)k0((l)=>(l+1)%R.length);return!0}if(F.key==="ArrowUp"){if(u(),n(),R.length>0)k0((l)=>(l-1+R.length)%R.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&R.length>0)return u(),n(),N4(R[Math.max(0,Math.min(F0,R.length-1))]),!0;if(n6(F)&&R.length>0){u();let l=o6(y1.current,F.key);y1.current=l;let P0=r6(R,l.value,F0,(J1)=>J1);if(P0>=0)k0(P0);return!0}}if(O0){if(F.key==="ArrowDown"){if(u(),n(),L1.length>0)G1((l)=>(l+1)%L1.length);return!0}if(F.key==="ArrowUp"){if(u(),n(),L1.length>0)G1((l)=>(l-1+L1.length)%L1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&L1.length>0)return u(),n(),S_(L1[Math.max(0,Math.min(u0,L1.length-1))]),!0;if(n6(F)&&L1.length>0){u();let l=o6(y1.current,F.key);y1.current=l;let P0=r6(L1,l.value,u0,(J1)=>J1.label);if(P0>=0)G1(P0);return!0}}return!1},[j,D0,O0,R,F0,L1,u0,N4]),v=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),K_(""),G?.();return}if(T(F))return;let u=Q1.current?.value??(j?Y1:l0);if(E2(F,u,{searchMode:j,showSessionSwitcherButton:K4})){F.preventDefault(),C_();return}if(b0&&H0.length>0){let n=Q1.current?.value??(j?Y1:l0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))I0(!1),N0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),S0((l)=>(l+1)%H0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),S0((l)=>(l-1+H0.length)%H0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),c_(H0[R0]);return}if(F.key==="Escape"){F.preventDefault(),I0(!1),N0([]);return}}}if(a&&q1.length>0){let n=Q1.current?.value??(j?Y1:l0);if(!String(n||"").startsWith("/"))W0(!1),c0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),k1((l)=>(l+1)%q1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),k1((l)=>(l-1+q1.length)%q1.length);return}if(F.key==="Tab"){F.preventDefault(),p_(q1[x1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!u.includes(" ")){F.preventDefault();let P0=q1[x1];W0(!1),c0([]),x_(P0.name);return}}if(F.key==="Escape"){F.preventDefault(),W0(!1),c0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let n=Q1.current;if(!n)return;let l=n.value||"",P0=n.selectionStart===0&&n.selectionEnd===0,J1=n.selectionStart===l.length&&n.selectionEnd===l.length;if(F.key==="ArrowUp"&&P0||F.key==="ArrowDown"&&J1){let S1=m0.current;if(!S1.length)return;F.preventDefault();let f1=P1.current;if(F.key==="ArrowUp"){if(f1===-1)A_.current=l,f1=S1.length-1;else if(f1>0)f1-=1;P1.current=f1,N_(S1[f1]||"")}else{if(f1===-1)return;if(f1<S1.length-1)f1+=1,P1.current=f1,N_(S1[f1]||"");else P1.current=-1,N_(A_.current||""),A_.current=""}requestAnimationFrame(()=>{let V4=Q1.current;if(!V4)return;let i4=V4.value.length;V4.selectionStart=i4,V4.selectionEnd=i4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(u.trim())Q?.(u.trim(),Z)}else x_(u,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(u.trim())Q?.(u.trim(),Z)}else x_(u)},b=(F)=>{let u=Array.from(F||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!u.length)return;_1((n)=>[...n,...u]),__(null)},o=(F)=>{b(F.target.files),F.target.value=""},K0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current+=1,M1(!0)},U0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),E1.current=Math.max(0,E1.current-1),E1.current===0)M1(!1)},L0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";M1(!0)},j0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current=0,M1(!1),b(F.dataTransfer?.files||[])},C0=(F)=>{if(j)return;let u=F.clipboardData?.items;if(!u||!u.length)return;let n=[];for(let l of u){if(l.kind!=="file")continue;let P0=l.getAsFile?.();if(P0)n.push(P0)}if(n.length>0)F.preventDefault(),b(n)},w1=(F)=>{_1((u)=>u.filter((n,l)=>l!==F))},Y_=()=>{__(null),_1([]),N?.(),O?.()},c1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:u,longitude:n,accuracy:l}=F.coords,P0=`${u.toFixed(5)}, ${n.toFixed(5)}`,J1=Number.isFinite(l)?` ±${Math.round(l)}m`:"",S1=`https://maps.google.com/?q=${u},${n}`,f1=`Location: ${P0}${J1} ${S1}`;_4(f1)},(F)=>{let u=F?.message||"Unable to retrieve location.";alert(`Location error: ${u}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!D0)return;y1.current={value:"",updatedAt:0},X1(!0),h5(J0).then((F)=>{let u=Array.isArray(F?.models)?F.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];u.sort((n,l)=>n.localeCompare(l,void 0,{sensitivity:"base"})),t(u),m_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),t([])}).finally(()=>{X1(!1)})},[D0,M]),m(()=>{if(j)g0(!1),Q0(!1),W0(!1),c0([]),I0(!1),N0([])},[j]),m(()=>{if(O0&&!K4)Q0(!1)},[O0,K4]),m(()=>{if(!D0)return;let F=R.findIndex((u)=>u===M);k0(F>=0?F:0)},[D0,R,M]),m(()=>{if(!O0)return;G1(c4(L1)),y1.current={value:"",updatedAt:0}},[O0,J0]),m(()=>{if(!D0)return;let F=(u)=>{let n=v_.current,l=_5.current,P0=u.target;if(n&&n.contains(P0))return;if(l&&l.contains(P0))return;g0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[D0]),m(()=>{if(!O0)return;let F=(u)=>{let n=v4.current,l=b1.current,P0=u.target;if(n&&n.contains(P0))return;if(l&&l.contains(P0))return;Q0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),m(()=>{if(j||!D0&&!O0)return;let F=(u)=>{T(u)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,D0,O0,T]),m(()=>{if(!D0)return;let F=v_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,F0,R]),m(()=>{if(!O0)return;let F=v4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,u0,L1.length]),m(()=>{let F=()=>{let J1=F_.current?.clientWidth||0;q4((S1)=>S1===J1?S1:J1)};F();let u=F_.current,n=0,l=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,F()})},P0=null;if(u&&typeof ResizeObserver<"u")P0=new ResizeObserver(()=>l()),P0.observe(u);if(typeof window<"u")window.addEventListener("resize",l);return()=>{if(n)cancelAnimationFrame(n);if(P0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",l)}},[j,M,C1?.agent_name,K4,D?.percent]);let C5=(F)=>{let u=F.target.value;if(__(null),O0)Q0(!1);h_(F.target),N_(u)};return m(()=>{requestAnimationFrame(()=>h_())},[l0,Y1,j]),m(()=>{if(!g_)return;X_(Date.now());let F=setInterval(()=>X_(Date.now()),1000);return()=>clearInterval(F)},[g_,z0?.started_at,z0?.startedAt]),m(()=>{if(j)return;p4(l0)},[p1,J0,l0,j]),L`
        <div class="compose-box">
            ${j1&&!j&&L`
                <${e6}
                    items=${c}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${d}
                    onOpenFilePill=${S}
                />
            `}
            ${z0&&L`
                <div
                    class=${`compose-inline-status${g_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${P5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${T5}</span>
                        ${B1&&L`<span class="compose-inline-status-elapsed">${B1}</span>`}
                    </div>
                    ${P5&&L`<div class="compose-inline-status-detail">${P5}</div>`}
                </div>
            `}
            ${U_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${U_}</div>
            `}
            <div
                class=${`compose-input-wrapper${m1?" drag-active":""}`}
                onDragEnter=${K0}
                onDragOver=${L0}
                onDragLeave=${U0}
                onDrop=${j0}
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
                                        onRemove=${()=>W?.(F)}
                                    />
                                `})}
                            ${X.map((F)=>{let u=F.split("/").pop()||F;return L`
                                    <${i_}
                                        prefix="compose"
                                        label=${u}
                                        title=${F}
                                        onClick=${()=>S?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(F)}
                                    />
                                `})}
                            ${D1.map((F,u)=>{let n=F?.name||`attachment-${u+1}`;return L`
                                    <${i_}
                                        key=${n+u}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>w1(u)}
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
                        ref=${Q1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Y1:l0}
                        onInput=${C5}
                        onKeyDown=${v}
                        onPaste=${C0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${b0&&H0.length>0&&L`
                        <div class="slash-autocomplete" ref=${G4}>
                            ${H0.map((F,u)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${u===R0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),c_(F)}}
                                    onMouseEnter=${()=>S0(u)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${a&&q1.length>0&&L`
                        <div class="slash-autocomplete" ref=${o1}>
                            ${q1.map((F,u)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${u===x1?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),p_(F)}}
                                    onMouseEnter=${()=>k1(u)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D0&&!j&&L`
                        <div class="compose-model-popup" ref=${v_} tabIndex="-1" onKeyDown=${T}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${A1&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!A1&&R.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!A1&&R.map((F,u)=>L`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${F0===u?" active":""}${M===F?" current-model":""}`}
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
                                        ${(()=>{return M2(C1,J0)})()}
                                    </div>
                                `}
                                ${!M_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${M_&&z1.map((F,u)=>{let n=Boolean(F.archived_at),P0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!n&&typeof t0==="function",J1=y8(F,{currentChatJid:J0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${u0===u?" active":""}`}
                                                onClick=${()=>{if(n){A4(F.chat_jid);return}D4(F.chat_jid)}}
                                                disabled=${n?!I_:!k_}
                                                title=${n?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${J1}
                                            </button>
                                            ${P0&&L`
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
                            ${(r1||Q_||T_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${r1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${L1.findIndex((F)=>F.key==="action:new")===u0?" active":""}`}
                                            onClick=${()=>{Q5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${Q_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${L1.findIndex((F)=>F.key==="action:rename")===u0?" active":""}`}
                                            onClick=${(F)=>{E4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${t_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${T_&&L`
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
                            <${fQ} usage=${D} onCompact=${k4} />
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
                    ${$5&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${a_?" active":""}`}
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
                        ${y&&H&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${y}`}
                                type="button"
                                disabled=${X.includes(y)}
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
                                <span class="compose-connection-status connection-status ${E0}" title=${Z_}>
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
    `}var j$="piclaw_theme",v8="piclaw_tint",S2="piclaw_chat_themes",i5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},x2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},P2={default:{label:"Default",mode:"auto",light:i5,dark:x2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},gQ=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],r4={theme:"default",tint:null},y2="light",_$=!1;function b8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function J5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Q=parseInt(Z,16);return{r:Q>>16&255,g:Q>>8&255,b:Q&255,hex:`#${Z.toLowerCase()}`}}function mQ(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Q=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Q)return null;let Y=parseInt(Q[1],10),q=parseInt(Q[2],10),G=parseInt(Q[3],10);if(![Y,q,G].every((K)=>Number.isFinite(K)))return null;let X=`#${[Y,q,G].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:G,hex:X}}function R2(_){return J5(_)||mQ(_)}function d5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Q=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Q} ${Y})`}function $$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function hQ(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Q=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Q+0.7152*Y+0.0722*q}function pQ(_){return hQ(_)>0.4?"#000000":"#ffffff"}function w2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z$(_){return P2[_]||P2.default}function cQ(_){return _.mode==="auto"?w2():_.mode}function f2(_,$){let j=Z$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||i5}function v2(_,$,j){let Z=R2($);if(!Z)return _;let Q=J5(_.bgPrimary),Y=J5(_.bgSecondary),q=J5(_.bgHover),G=J5(_.borderColor);if(!Q||!Y||!q||!G)return _;let K=J5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:d5(Q,Z,0.08),bgSecondary:d5(Y,Z,0.12),bgHover:d5(q,Z,0.16),borderColor:d5(G,Z,0.08),accent:Z.hex,accentHover:K?d5(Z,K,0.18):Z.hex}}function lQ(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Q=R2(Z),Y=Q?$$(Q,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Q?$$(Q,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Q?$$(Q,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X=Q?pQ(Q):$==="dark"?"#000000":"#ffffff",K={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":q,"--accent-soft-strong":G,"--accent-contrast-text":X,"--danger-color":_.danger||i5.danger,"--success-color":_.success||i5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(K).forEach(([N,V])=>{if(V)j.style.setProperty(N,V)})}function dQ(){if(typeof document>"u")return;let _=document.documentElement;gQ.forEach(($)=>_.style.removeProperty($))}function H5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function C2(_){let $=b8(r4?.theme||"default"),j=r4?.tint?String(r4.tint).trim():null,Z=f2($,_);if($==="default"&&j)Z=v2(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?x2.bgPrimary:i5.bgPrimary}function iQ(_,$){if(typeof document>"u")return;let j=H5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=H5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",C2("light"));let Q=H5("theme-color",{id:"theme-color-dark"});if(Q)Q.setAttribute("media","(prefers-color-scheme: dark)"),Q.setAttribute("content",C2("dark"));let Y=H5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=H5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let G=H5("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function nQ(){if(typeof window>"u")return;let _={...r4,mode:y2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function b2(){try{let _=J_(S2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function oQ(_,$,j){let Z=b2();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};K1(S2,JSON.stringify(Z))}function rQ(_){if(!_)return null;return b2()[_]||null}function u2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function Q$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=b8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Q=Z$(j),Y=cQ(Q),q=f2(j,Y);r4={theme:j,tint:Z},y2=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=Y;let X=q;if(j==="default"&&Z)X=v2(q,Z,Y);if(j==="default"&&!Z)dQ();else lQ(X,Y);if(iQ(X.bgPrimary,Y),nQ(),$.persist!==!1)if(K1(j$,j),Z)K1(v8,Z);else K1(v8,"")}function f8(){if(Z$(r4.theme).mode!=="auto")return;Q$(r4,{persist:!1})}function g2(){if(typeof window>"u")return()=>{};let _=u2(),$=rQ(_),j=$?b8($.theme||"default"):b8(J_(j$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Q=J_(v8);return Q?Q.trim():null})();if(Q$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!_$){let Q=window.matchMedia("(prefers-color-scheme: dark)");if(Q.addEventListener)Q.addEventListener("change",f8);else if(Q.addListener)Q.addListener(f8);return _$=!0,()=>{if(Q.removeEventListener)Q.removeEventListener("change",f8);else if(Q.removeListener)Q.removeListener(f8);_$=!1}}return()=>{}}function m2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||u2(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(oQ($,j||"default",Z),Q$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")K1(j$,j||"default"),K1(v8,Z||"")}function h2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return w2()}var u8=/#(\w+)/g,sQ=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),aQ=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),tQ=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),eQ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},_Y=new Set(["http:","https:","mailto:",""]);function Y$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function s4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!_Y.has(Z.protocol))return null;return Z.href}catch{return null}}function p2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Q=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Q.nextNode())Z.push(Y);for(let q of Z){let G=q.tagName.toLowerCase();if(!aQ.has(G)){let K=q.parentNode;if(!K)continue;while(q.firstChild)K.insertBefore(q.firstChild,q);K.removeChild(q);continue}let X=eQ[G]||new Set;for(let K of Array.from(q.attributes)){let N=K.name.toLowerCase(),V=K.value;if(N.startsWith("on")){q.removeAttribute(K.name);continue}if(N.startsWith("data-")||N.startsWith("aria-"))continue;if(X.has(N)||tQ.has(N)){if(N==="href"){let W=s4(V);if(!W)q.removeAttribute(K.name);else if(q.setAttribute(K.name,W),G==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(N==="src"){let W=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,O=s4(W,{allowDataImage:G==="img"});if(!O)q.removeAttribute(K.name);else q.setAttribute(K.name,O)}continue}q.removeAttribute(K.name)}}return j.body.innerHTML}function c2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function g8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Q=c2(j);if(Q===j)break;j=Q}return j}function $Y(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Q=[],Y=!1,q=[];for(let G of j){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let X=Z.length;Z.push(q.join(`
`)),Q.push(`@@MERMAID_BLOCK_${X}@@`),Y=!1,q=[];continue}if(Y)q.push(G);else Q.push(G)}if(Y)Q.push("```mermaid"),Q.push(...q);return{text:Q.join(`
`),blocks:Z}}function jY(_){if(!_)return _;return g8(_,5)}function ZY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function QY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function YY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Q=Number(Z),Y=$[Q]??"",q=jY(Y);return`<div class="mermaid-container" data-mermaid="${ZY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function l2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var qY={span:new Set(["title","class","lang","dir"])};function GY(_,$){let j=qY[_];if(!j||!$)return"";let Z=[],Q=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Q.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let G=Y[2]??Y[3]??Y[4]??"";Z.push(` ${q}="${Y$(G)}"`)}return Z.join("")}function d2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Q=Z.startsWith("/"),Y=Q?Z.slice(1).trim():Z,G=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[X=""]=G.split(/\s+/,1),K=X.toLowerCase();if(!K||!sQ.has(K))return $;if(K==="br")return Q?"":"<br>";if(Q)return`</${K}>`;let N=G.slice(X.length).trim(),V=GY(K,N);return`<${K}${V}>`})}function i2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function n2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Q;while(Q=j.nextNode()){if(!Q.nodeValue)continue;let Y=Z(Q.nodeValue);if(Y!==Q.nodeValue)Q.nodeValue=Y}return $.body.innerHTML}function KY(_){if(!window.katex)return _;let $=(q)=>c2(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let G=[],X=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let N=G.length;return G.push(K),`@@CODE_BLOCK_${N}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let N=G.length;return G.push(K),`@@CODE_INLINE_${N}@@`}),{html:X,blocks:G}},Z=(q,G)=>{if(!G.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,K)=>{let N=Number(K);return G[N]??""})},Q=j(_),Y=Q.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,G,X)=>{try{let K=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${G}${K}`}catch(K){return`<span class="math-error" title="${Y$(K.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,G,X)=>{if(/\s$/.test(X))return q;try{let K=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${G}${K}`}catch(K){return`${G}<span class="math-error" title="${Y$(K.message)}">$${X}$</span>`}}),Z(Y,Q.blocks)}function XY(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Q;while(Q=j.nextNode())Z.push(Q);for(let Y of Z){let q=Y.nodeValue;if(!q)continue;if(u8.lastIndex=0,!u8.test(q))continue;u8.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let X=q.split(u8);if(X.length<=1)continue;let K=$.createDocumentFragment();X.forEach((N,V)=>{if(V%2===1){let W=$.createElement("a");W.setAttribute("href","#"),W.className="hashtag",W.setAttribute("data-hashtag",N),W.textContent=`#${N}`,K.appendChild(W)}else K.appendChild($.createTextNode(N))}),Y.parentNode?.replaceChild(K,Y)}return $.body.innerHTML}function NY(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Q=!1;for(let Y of j){if(!Q&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Q=!0,Z.push("$$");continue}if(Q&&Y.trim().match(/^```\s*$/)){Q=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function VY(_){let $=NY(_||""),{text:j,blocks:Z}=$Y($),Q=g8(j,2),q=l2(Q).replace(/</g,"&lt;");return{safeHtml:d2(q),mermaidBlocks:Z}}function O_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Q}=VY(_),Y=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Y=i2(Y),Y=n2(Y),Y=KY(Y),Y=XY(Y),Y=YY(Y,Q),Y=p2(Y,j),Y}function n5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=g8($,2),Q=l2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=d2(Q),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=i2(q),q=n2(q),q=p2(q),q}function BY(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Q,Y)=>{let q=Q.trim().split(/\s+/).map((X)=>{let[K,N]=X.split(",").map(Number);return{x:K,y:N}});if(q.length<3)return`<polyline${Z}points="${Q}"${Y}/>`;let G=[`M ${q[0].x},${q[0].y}`];for(let X=1;X<q.length-1;X++){let K=q[X-1],N=q[X],V=q[X+1],W=N.x-K.x,O=N.y-K.y,M=V.x-N.x,k=V.y-N.y,E=Math.sqrt(W*W+O*O),J=Math.sqrt(M*M+k*k),D=Math.min($,E/2,J/2);if(D<0.5){G.push(`L ${N.x},${N.y}`);continue}let I=N.x-W/E*D,i=N.y-O/E*D,p=N.x+M/J*D,r=N.y+k/J*D,f=W*k-O*M>0?1:0;G.push(`L ${I},${i}`),G.push(`A ${D},${D} 0 0 ${f} ${p},${r}`)}return G.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${G.join(" ")}"${Y}/>`})}async function U4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Q=h2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let G=q.dataset.mermaid,X=QY(G||""),K=g8(X,2),N=await $(K,{...Q,transparent:!0});N=BY(N),q.innerHTML=N,q.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${G.message}`,q.innerHTML="",q.appendChild(X),q.removeAttribute("data-mermaid")}}function o2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function r2(_){return String(_||"").trim()||"web:default"}function s2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function a2(_){if(!_)return!1;return _.status!=="running"}function t2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function e2({session:_,onClose:$,onInject:j,onRetry:Z}){let Q=P(null),Y=P(null),q=_?.thinking?n5(_.thinking):"",G=_?.answer?O_(_.answer,null,{sanitize:!1}):"";if(m(()=>{if(Q.current&&q)U4(Q.current).catch(()=>{})},[q]),m(()=>{if(Y.current&&G)U4(Y.current).catch(()=>{})},[G]),!_)return null;let X=_.status==="running",K=Boolean(String(_.answer||"").trim()),N=Boolean(String(_.thinking||"").trim()),V=s2(_),W=a2(_),O=!X&&K,M=X?"Thinking…":_.status==="error"?"Error":"Done";return L`
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
    `}function WY(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Q?{kind:j,html:Q}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function UY(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function y4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function x0(_){return typeof _==="string"&&_.trim()?_.trim():null}function $7(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Q)=>typeof Q==="string").map((Q)=>Q.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var j7="__PICLAW_WIDGET_HOST__:";function _7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function q$(_,$){if(!_||_.type!=="generated_widget")return null;let j=WY(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:$7(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Z7(_){if(!_||typeof _!=="object")return null;let $=UY(_),j=x0(_?.widget_id)||x0(_?.widgetId)||x0(_?.tool_call_id)||x0(_?.toolCallId),Z=x0(_?.tool_call_id)||x0(_?.toolCallId),Q=x0(_?.turn_id)||x0(_?.turnId),Y=x0(_?.title)||x0(_?.name)||"Generated widget",q=x0(_?.subtitle)||"",G=x0(_?.description)||q,X=x0(_?.status),K=X==="loading"||X==="streaming"||X==="final"||X==="error"?X:"streaming";return{title:Y,subtitle:q,description:G,originPostId:y4(_?.origin_post_id)??y4(_?.originPostId),originChatJid:x0(_?.origin_chat_jid)||x0(_?.originChatJid)||x0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:$7(_?.capabilities,!0),source:"live",status:K,turnId:Q,toolCallId:Z,width:y4(_?.width),height:y4(_?.height),error:x0(_?.error)}}function Q7(_){return q$(_,null)!==null}function n1(_){let $=x0(_?.toolCallId)||x0(_?.tool_call_id);if($)return $;let j=x0(_?.widgetId)||x0(_?.widget_id);if(j)return j;let Z=y4(_?.originPostId)??y4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function Y7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Q=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Q)}function q7(_){return Y7(_)?"allow-downloads allow-scripts":"allow-downloads"}function m8(_){return{title:x0(_?.title)||"Generated widget",widgetId:x0(_?.widgetId)||x0(_?.widget_id),toolCallId:x0(_?.toolCallId)||x0(_?.tool_call_id),turnId:x0(_?.turnId)||x0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:x0(_?.status)||"final"}}function h8(_){return{...m8(_),subtitle:x0(_?.subtitle)||"",description:x0(_?.description)||"",error:x0(_?.error)||null,width:y4(_?.width),height:y4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function p8(_){return`${j7}${JSON.stringify(h8(_))}`}function G7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=x0(_.text)||x0(_.content)||x0(_.message)||x0(_.prompt)||x0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=x0(j.text)||x0(j.content)||x0(j.message)||x0(j.prompt)||x0(j.value);if(Z)return Z}return null}function K7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function X7(_){let $=x0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return x0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function LY(_){let $=m8(_);return`<script>
(function () {
  const meta = ${_7($)};
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

  const windowNamePrefix = ${_7(j7)};
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
</script>`}function N7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Q:Z;if(!q)return"";let G=Y7(_),X=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",G?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,N=G?LY(_):"";return`<!doctype html>
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
</html>`}function V7({widget:_,onClose:$,onWidgetEvent:j}){let Z=P(null),Q=P(!1),Y=v0(()=>N7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(m(()=>{if(!_)return;let J=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),m(()=>{Q.current=!1},[Y]),m(()=>{if(!_)return;let J=Z.current;if(!J)return;let D=(e)=>{let f=p8(_),y=e==="widget.init"?m8(_):h8(_);try{J.name=f}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:e,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:y},"*")}catch{}},I=()=>{D("widget.init"),D("widget.update")},i=()=>{Q.current=!0,I()};J.addEventListener("load",i);let r=[0,40,120,300,800].map((e)=>setTimeout(I,e));return()=>{J.removeEventListener("load",i),r.forEach((e)=>clearTimeout(e))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),m(()=>{if(!_)return;let J=Z.current;if(!J?.contentWindow)return;let D=p8(_),I=h8(_);try{J.name=D}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),m(()=>{if(!_)return;let J=(D)=>{let I=D?.data;if(!I||I.__piclawGeneratedWidget!==!0)return;let i=Z.current,p=n1(_),r=n1({widgetId:I.widgetId,toolCallId:I.toolCallId});if(r&&p&&r!==p)return;if(!r&&i?.contentWindow&&D.source!==i.contentWindow)return;j?.(I,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let G=(_?.artifact||{}).kind||_?.kind||"html",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",N=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",W=N==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",M=!Y,k=X7(_),E=q7(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${X}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${W} • ${G.toUpperCase()}</div>
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
                    ${M?L`<div class="floating-widget-empty">${k}</div>`:L`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${X}
                                name=${p8(_)}
                                sandbox=${E}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var B7="PiClaw";function G$(_,$,j=!1){let Z=_||"PiClaw",Q=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Q.charCodeAt(0)%Y.length,G=Y[q],X=Z.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",N=K?K:null,V=j||X==="PiClaw".toLowerCase()||X==="pi";return{letter:Q,color:G,image:N||(V?"/static/icon-192.png":null)}}function W7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function U7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function L7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",X=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(X&&(G||q&&q!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let Q=Math.abs(Z)%$.length;return $[Q]}var FY=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function K$({status:_,draft:$,plan:j,thought:Z,pendingRequest:Q,intent:Y,extensionPanels:q=[],pendingPanelActions:G=new Set,onExtensionPanelAction:X,turnId:K,steerQueued:N,onPanelToggle:V,showCorePanels:W=!0,showExtensionPanels:O=!0}){let E=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let R0=a,S0=R0?R0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:R0,totalLines:S0,fullText:R0}}let W0=a.text||"",H0=a.fullText||a.full_text||W0,N0=Number.isFinite(a.totalLines)?a.totalLines:H0?H0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W0,totalLines:N0,fullText:H0}},J=160,D=(a)=>String(a||"").replace(/<\/?internal>/gi,""),I=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},i=(a,W0,H0)=>{let N0=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!N0)return{text:"",omitted:0,totalLines:Number.isFinite(H0)?H0:0,visibleLines:0};let R0=N0.split(`
`),S0=R0.length>W0?R0.slice(0,W0).join(`
`):N0,b0=Number.isFinite(H0)?H0:R0.reduce((i0,D0)=>i0+I(D0),0),I0=S0?S0.split(`
`).reduce((i0,D0)=>i0+I(D0),0):0,w0=Math.max(b0-I0,0);return{text:S0,omitted:w0,totalLines:b0,visibleLines:I0}},p=E(j),r=E(Z),e=E($),f=Boolean(p.text)||p.totalLines>0,y=Boolean(r.text)||r.totalLines>0,H=Boolean(e.fullText?.trim()||e.text?.trim()),S=Boolean(_||H||f||y||Q||Y),c=Array.isArray(q)&&q.length>0;if((!W||!S)&&(!O||!c))return null;let[G0,d]=h(new Set),[$0,_0]=h(null),[X0,V0]=h(()=>Date.now()),B0=(a)=>d((W0)=>{let H0=new Set(W0),N0=!H0.has(a);if(N0)H0.add(a);else H0.delete(a);if(typeof V==="function")V(a,N0);return H0});m(()=>{d(new Set),_0(null)},[K]);let J0=W4(_);m(()=>{if(!J0)return;V0(Date.now());let a=setInterval(()=>V0(Date.now()),1000);return()=>clearInterval(a)},[J0,_?.started_at,_?.startedAt]);let E0=_?.turn_id||K,M0=L7(E0),o0=N?"turn-dot turn-dot-queued":"turn-dot",y0=(a)=>a,T0=Boolean(_?.last_activity||_?.lastActivity),r0=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":M0,s0=Y?.kind||"info",h0=r0(s0),t0=r0(_?.kind||(J0?"warning":"info")),p0="",j1=_?.title,z0=_?.status;if(_?.type==="plan")p0=j1?`Planning: ${j1}`:"Planning...";else if(_?.type==="tool_call")p0=j1?`Running: ${j1}`:"Running tool...";else if(_?.type==="tool_status")p0=j1?`${j1}: ${z0||"Working..."}`:z0||"Working...";else if(_?.type==="error")p0=j1||"Agent error";else p0=j1||z0||"Working...";if(T0)p0="Last activity just now";let l0=({panelTitle:a,text:W0,fullText:H0,totalLines:N0,maxLines:R0,titleClass:S0,panelKey:b0})=>{let I0=G0.has(b0),w0=H0||W0||"",i0=b0==="thought"||b0==="draft"?D(w0):w0,D0=typeof R0==="number",g0=I0&&D0,O0=D0?i(i0,R0,N0):{text:i0||"",omitted:0,totalLines:Number.isFinite(N0)?N0:0};if(!i0&&!(Number.isFinite(O0.totalLines)&&O0.totalLines>0))return null;let Q0=`agent-thinking-body${D0?" agent-thinking-body-collapsible":""}`,R=D0?`--agent-thinking-collapsed-lines: ${R0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${I0?"true":"false"}
                data-collapsible=${D0?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
            >
                <div class="agent-thinking-title ${S0||""}">
                    ${M0&&L`<span class=${o0} aria-hidden="true"></span>`}
                    ${a}
                    ${g0&&L`
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
                    class=${Q0}
                    style=${R}
                    dangerouslySetInnerHTML=${{__html:n5(i0)}}
                />
                ${!I0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>B0(b0)}>
                        ▸ ${O0.omitted} more lines
                    </button>
                `}
                ${I0&&O0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>B0(b0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},Z1=Q?.tool_call?.title,Y1=Z1?`Awaiting approval: ${Z1}`:"Awaiting approval",K_=J0?w8(_,X0):null,D1=(a,W0,H0=null)=>{let N0=R8(a);return L`
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
        `},_1=(a,W0,H0,N0,R0,S0,b0,I0=8,w0=8)=>{let i0=Math.max(R0-N0,0.000000001),D0=Math.max(W0-I0*2,1),g0=Math.max(H0-w0*2,1),O0=Math.max(b0-S0,1),Q0=b0===S0?W0/2:I0+(a.run-S0)/O0*D0,R=w0+(g0-(a.value-N0)/i0*g0);return{x:Q0,y:R}},m1=(a,W0,H0,N0,R0,S0,b0,I0=8,w0=8)=>{if(!Array.isArray(a)||a.length===0)return"";return a.map((i0,D0)=>{let{x:g0,y:O0}=_1(i0,W0,H0,N0,R0,S0,b0,I0,w0);return`${D0===0?"M":"L"} ${g0.toFixed(2)} ${O0.toFixed(2)}`}).join(" ")},M1=(a,W0="")=>{if(!Number.isFinite(a))return"—";return`${Math.abs(a)>=100?a.toFixed(0):a.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${W0}`},q1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],c0=(a,W0)=>{let H0=q1;if(!Array.isArray(H0)||H0.length===0)return"var(--accent-color)";if(H0.length===1||!Number.isFinite(W0)||W0<=1)return H0[0];let R0=Math.max(0,Math.min(Number.isFinite(a)?a:0,W0-1))/Math.max(1,W0-1)*(H0.length-1),S0=Math.floor(R0),b0=Math.min(H0.length-1,S0+1),I0=R0-S0,w0=H0[S0],i0=H0[b0];if(!i0||S0===b0||I0<=0.001)return w0;if(I0>=0.999)return i0;let D0=Math.round((1-I0)*1000)/10,g0=Math.round(I0*1000)/10;return`color-mix(in oklab, ${w0} ${D0}%, ${i0} ${g0}%)`},x1=(a,W0="autoresearch")=>{let H0=Array.isArray(a)?a.map((Q0)=>({...Q0,points:Array.isArray(Q0?.points)?Q0.points.filter((R)=>Number.isFinite(R?.value)&&Number.isFinite(R?.run)):[]})).filter((Q0)=>Q0.points.length>0):[],N0=H0.map((Q0,R)=>({...Q0,color:c0(R,H0.length)}));if(N0.length===0)return null;let R0=320,S0=120,b0=N0.flatMap((Q0)=>Q0.points),I0=b0.map((Q0)=>Q0.value),w0=b0.map((Q0)=>Q0.run),i0=Math.min(...I0),D0=Math.max(...I0),g0=Math.min(...w0),O0=Math.max(...w0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${N0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${R0} ${S0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${N0.map((Q0)=>{let R=Q0?.key||Q0?.label||"series",t=$0?.panelKey===W0&&$0?.seriesKey===R;return L`
                                <g key=${R}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${m1(Q0.points,R0,S0,i0,D0,g0,O0)}
                                        style=${`--agent-series-color: ${Q0.color};`}
                                        onMouseEnter=${()=>_0({panelKey:W0,seriesKey:R})}
                                        onMouseLeave=${()=>_0((F0)=>F0?.panelKey===W0&&F0?.seriesKey===R?null:F0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${N0.flatMap((Q0)=>{let R=typeof Q0?.unit==="string"?Q0.unit:"",t=Q0?.key||Q0?.label||"series";return Q0.points.map((F0,k0)=>{let u0=_1(F0,R0,S0,i0,D0,g0,O0);return L`
                                    <button
                                        key=${`${t}-point-${k0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Q0.color}; left:${u0.x/R0*100}%; top:${u0.y/S0*100}%;`}
                                        onMouseEnter=${()=>_0({panelKey:W0,seriesKey:t,run:F0.run,value:F0.value,unit:R})}
                                        onMouseLeave=${()=>_0((G1)=>G1?.panelKey===W0?null:G1)}
                                        onFocus=${()=>_0({panelKey:W0,seriesKey:t,run:F0.run,value:F0.value,unit:R})}
                                        onBlur=${()=>_0((G1)=>G1?.panelKey===W0?null:G1)}
                                        aria-label=${`${Q0?.label||"Series"} ${M1(F0.value,R)} at run ${F0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${N0.map((Q0)=>{let R=Q0.points[Q0.points.length-1]?.value,t=typeof Q0?.unit==="string"?Q0.unit:"",F0=Q0?.key||Q0?.label||"series",k0=$0?.panelKey===W0&&$0?.seriesKey===F0?$0:null,u0=k0&&Number.isFinite(k0.value)?k0.value:R,G1=k0&&typeof k0.unit==="string"?k0.unit:t,A1=k0&&Number.isFinite(k0.run)?k0.run:null;return L`
                            <div key=${`${F0}-legend`} class=${`agent-series-legend-item${k0?" is-hovered":""}`} style=${`--agent-series-color: ${Q0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Q0.color};`}></span>
                                <span class="agent-series-legend-label">${Q0?.label||"Series"}</span>
                                ${A1!==null&&L`<span class="agent-series-legend-run">run ${A1}</span>`}
                                <span class="agent-series-legend-value">${M1(u0,G1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},k1=(a)=>{if(!a)return null;let W0=typeof a?.key==="string"?a.key:`panel-${Math.random()}`,H0=G0.has(W0),N0=a?.title||"Extension status",R0=a?.collapsed_text||"",S0=String(a?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),b0=r0(a?.state==="completed"?"success":a?.state==="failed"?"error":a?.state==="stopped"?"warning":"info"),I0=typeof a?.detail_markdown==="string"?a.detail_markdown.trim():"",w0=typeof a?.last_run_text==="string"?a.last_run_text.trim():"",i0=typeof a?.tmux_command==="string"?a.tmux_command.trim():"",D0=Array.isArray(a?.series)?a.series:[],g0=Array.isArray(a?.actions)?a.actions:[],O0=Boolean(I0||i0),Q0=Boolean(I0||D0.length>0||i0),R=[N0,R0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${H0?"true":"false"}
                style=${b0?`--turn-color: ${b0};`:""}
                title=${!H0?R||N0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Q0?B0(W0):null}
                    >
                        ${b0&&L`<span class=${o0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${N0}</span>
                        ${R0&&L`<span class="agent-thinking-title-meta">${R0}</span>`}
                    </button>
                    ${(g0.length>0||Q0&&!H0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${g0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${g0.map((t)=>{let F0=`${W0}:${t?.key||""}`,k0=G?.has?.(F0);return L`
                                            <button
                                                key=${F0}
                                                class=${`agent-thinking-action-btn${t?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>X?.(a,t)}
                                                disabled=${Boolean(k0)}
                                            >
                                                ${k0?"Working…":t?.label||"Run"}
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
                                ${I0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:n5(I0)}}
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
                                                ${FY}
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
            ${W&&Y&&D1(Y,h0)}
            ${O&&Array.isArray(q)&&q.map((a)=>k1(a))}
            ${W&&_?.type==="intent"&&D1(_,t0,K_)}
            ${W&&Q&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    <span class=${o0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Y1}</span>
                </div>
            `}
            ${W&&f&&l0({panelTitle:y0("Planning"),text:p.text,fullText:p.fullText,totalLines:p.totalLines,panelKey:"plan"})}
            ${W&&y&&l0({panelTitle:y0("Thoughts"),text:r.text,fullText:r.fullText,totalLines:r.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${W&&H&&l0({panelTitle:y0("Draft"),text:e.text,fullText:e.fullText,totalLines:e.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${W&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${T0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    ${M0&&L`<span class=${o0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!T0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${p0}</span>
                </div>
            `}
        </div>
    `}function F7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Q,chat_jid:Y}=_,q=Z?.title||"Agent Request",G=Z?.kind||"other",X=Z?.rawInput||{},K=X.command||X.commands&&X.commands[0]||null,N=X.diff||null,V=X.fileName||X.path||null,W=Z?.description||X.description||X.explanation||null,M=(Array.isArray(Z?.locations)?Z.locations:[]).map((I)=>I?.path).filter((I)=>Boolean(I)),k=Array.from(new Set([V,...M].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Q});let E=async(I)=>{try{await E8(j,I,Y||null),$()}catch(i){console.error("Failed to respond to agent request:",i)}},J=async()=>{try{await b6(q,`Auto-approved: ${q}`),await E8(j,"approved",Y||null),$()}catch(I){console.error("Failed to add to whitelist:",I)}},D=Q&&Q.length>0;return L`
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
                ${(W||K||N||k.length>0)&&L`
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
                    ${D?Q.map((I)=>L`
                            <button 
                                key=${I.optionId||I.id||String(I)}
                                class="agent-request-btn ${I.kind==="allow_once"||I.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(I.optionId||I.id||I)}
                            >
                                ${I.name||I.label||I.optionId||I.id||String(I)}
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
    `}function z7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Q=Z/1000,Y=86400000;if(Z<Y){if(Q<60)return"just now";if(Q<3600)return`${Math.floor(Q/60)}m`;return`${Math.floor(Q/3600)}h`}if(Z<5*Y){let X=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${K}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${G}`}function o5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function f_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function a4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var zY=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),HY=new Set(["text/markdown"]),JY=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),OY=new Set(["application/vnd.jgraph.mxfile"]);function r5(_){return typeof _==="string"?_.trim().toLowerCase():""}function DY(_){let $=r5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function AY(_){let $=r5(_);return!!$&&$.endsWith(".pdf")}function EY(_){let $=r5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function s5(_,$){let j=r5(_);if(DY($)||OY.has(j))return"drawio";if(AY($)||j==="application/pdf")return"pdf";if(EY($)||JY.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(zY.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function H7(_){let $=r5(_);return HY.has($)}function J7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function MY(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Q)=>`${Q}${Q}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function kY(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Q=Number(j[2]),Y=Number(j[3]);if(![Z,Q,Y].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:Q,b:Y}}function O7(_){return MY(_)||kY(_)}function c8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Q=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Q}function IY(_,$){let j=Math.max(c8(_),c8($)),Z=Math.min(c8(_),c8($));return(j+0.05)/(Z+0.05)}function TY(_,$,j="#ffffff"){let Z=O7(_);if(!Z)return j;let Q=j,Y=-1;for(let q of $){let G=O7(q);if(!G)continue;let X=IY(Z,G);if(X>Y)Q=q,Y=X}return Q}function X$(){let _=getComputedStyle(document.documentElement),$=(M,k)=>{for(let E of M){let J=_.getPropertyValue(E).trim();if(J)return J}return k},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Q=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),N=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),W=$(["--font-family"],"system-ui, sans-serif"),O=TY(G,[j,Q],j);return{fg:j,fgMuted:Z,bgPrimary:Q,bg:Y,bgEmphasis:q,accent:G,good:X,warning:K,attention:N,border:V,fontFamily:W,buttonTextColor:O}}function D7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Q,good:Y,warning:q,attention:G,border:X,fontFamily:K}=X$();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Q,subtle:Q},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Q,subtle:Q},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var PY=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),A7=!1,l8=null,E7=!1;function N$(_){_.querySelector(".adaptive-card-notice")?.remove()}function CY(_,$,j="error"){N$(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function SY(_,$=(j)=>O_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function xY(_=($)=>O_($,null)){return($,j)=>{try{let Z=SY($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function yY(_){if(E7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=xY(),E7=!0}async function RY(){if(A7)return;if(l8)return l8;return l8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{A7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),l8}function wY(){return globalThis.AdaptiveCards}function fY(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function vY(_){return PY.has(_)}function B$(_){if(!Array.isArray(_))return[];return _.filter(fY)}function bY(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Q=_?.data??void 0;return{type:$,title:j,data:Q,url:Z,raw:_}}function V$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>V$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${V$(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function uY(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return V$($);return typeof $==="string"?$:String($)}function gY(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Q)=>{if(Array.isArray(Q))return Q.map((G)=>Z(G));if(!Q||typeof Q!=="object")return Q;let q={...Q};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=uY(q.type,j[q.id],q);for(let[G,X]of Object.entries(q))if(Array.isArray(X)||X&&typeof X==="object")q[G]=Z(X);return q};return Z(_)}function mY(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function hY(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function pY(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Q=hY(_.completed_at||j?.submitted_at),Y=[Z||null,Q||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function M7(_,$,j){if(!vY($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await RY()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=wY();yY(Z);let Q=new Z.AdaptiveCard,Y=X$();Q.hostConfig=new Z.HostConfig(D7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:gY($.payload,q);Q.parse(G),Q.onExecuteAction=(N)=>{let V=bY(N);if(j?.onAction)N$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((W)=>{console.error("[adaptive-card] Action failed:",W);let O=W instanceof Error?W.message:String(W||"Action failed.");CY(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let X=Q.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let K=pY($);if(K){_.classList.add("adaptive-card-finished");let N=document.createElement("div");N.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=K.label,N.appendChild(V),K.detail){let W=document.createElement("span");W.className="adaptive-card-status-detail",W.textContent=K.detail,N.appendChild(W)}_.appendChild(N)}if(N$(_),_.appendChild(X),K)mY(X);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function a5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>a5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${a5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function k7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:a5(j)})).filter(($)=>$.value)}function cY(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function W$(_){if(!Array.isArray(_))return[];return _.filter(cY)}function I7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=a5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Q=k7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Q.length>0?`Card submission: ${$} — ${Q.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function T7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=k7(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):a5(_.data)||null,Q=j.length;return{title:$,summary:Z,fields:j,fieldCount:Q,submittedAt:_.submitted_at}}function O5({children:_,className:$=""}){let j=P(null);return m(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{x4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),g5(()=>{let Z=j.current;if(!Z)return;return x4(_,Z),()=>{x4(null,Z)}},[_]),null}function lY(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?f_($):null},{label:"Added",value:_?.created_at?a4(_.created_at):null}].filter((Z)=>Z.value)}function dY(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Q=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Q}&name=${Z}#media=${Q}&name=${Z}`;if(j==="office"){let Y=w_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Q}&name=${Z}&readonly=1#media=${Q}&name=${Z}&readonly=1`;return null}function P7({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Q=v0(()=>s5($?.content_type,Z),[$?.content_type,Z]),Y=J7(Q),q=v0(()=>H7($?.content_type),[$?.content_type]),[G,X]=h(Q==="text"),[K,N]=h(""),[V,W]=h(null),O=P(null),M=v0(()=>lY($),[$]),k=v0(()=>dY(_,Z,Q),[_,Z,Q]),E=v0(()=>{if(!q||!K)return"";return O_(K)},[q,K]);return m(()=>{let J=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),m(()=>{if(!O.current||!E)return;U4(O.current);return},[E]),m(()=>{let J=!1;async function D(){if(Q!=="text"){X(!1),W(null);return}X(!0),W(null);try{let I=await h6(_);if(!J)N(I)}catch{if(!J)W("Failed to load text preview.")}finally{if(!J)X(!1)}}return D(),()=>{J=!0}},[_,Q]),L`
        <${O5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
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
                                href=${w_(_)}
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
                            <img class="attachment-preview-image" src=${w_(_)} alt=${Z} />
                        `}
                        ${!G&&!V&&(Q==="pdf"||Q==="office"||Q==="drawio")&&k&&L`
                            <iframe class="attachment-preview-frame" src=${k} title=${Z}></iframe>
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
                            <pre class="attachment-preview-text">${K}</pre>
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
    `}function C7({src:_,onClose:$}){return m(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${O5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${O5}>
    `}function iY({mediaId:_,onPreview:$}){let[j,Z]=h(null);if(m(()=>{L5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Q=j.filename||"file",Y=j.metadata?.size,q=Y?f_(Y):"",X=s5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <a href=${w_(_)} download=${Q} class="file-attachment-main">
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
                onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${X}
            </button>
        </div>
    `}function nY({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Q]=h(null);m(()=>{if(!Number.isFinite(j))return;L5(j).then(Q).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?w_(j):null,X=s5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Y}>
            ${q?L`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(K)=>K.stopPropagation()}>
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
            ${Number.isFinite(j)&&Z&&L`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${X}
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:j,info:Z})}}
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
    `}function oY({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?f_(_.size):"",Q=_.mime_type||"",Y=aY(Q),q=s4(_.uri);return L`
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
    `}function rY({block:_}){let[$,j]=h(!1),Z=_.uri||"Embedded resource",Q=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
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
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),K=URL.createObjectURL(X),N=document.createElement("a");N.href=K,N.download=Z.split("/").pop()||"resource",N.click(),URL.revokeObjectURL(K)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function sY({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=q$(_,$),Q=Q7(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",G=Z?.description||_.description||_.subtitle||"",X=_.open_label||"Open widget",K=(N)=>{if(N.preventDefault(),N.stopPropagation(),!Z)return;j?.(Z)};return L`
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
                    onClick=${K}
                    title=${Q?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${X}
                </button>
                <span class="generated-widget-launch-note">
                    ${Q?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function aY(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function tY({preview:_}){let $=s4(_.url),j=s4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Q=_.site_name;if(!Q&&$)try{Q=new URL($).hostname}catch{Q=$}return L`
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
    `}function eY(_,$){return typeof _==="string"?_:""}var _q=1800,$q=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,jq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Zq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function Qq(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function Yq(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Q=(Y,q)=>{let G=q||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=jq,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=Zq,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=$q,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Q(G,"idle"),q.appendChild(G);let X=async(K)=>{K.preventDefault(),K.stopPropagation();let V=Y.querySelector("code")?.textContent||"",W=await Qq(V);Q(G,W?"success":"error");let O=j.get(G);if(O)clearTimeout(O);let M=setTimeout(()=>{Q(G,"idle"),j.delete(G)},_q);j.set(G,M)};G.addEventListener("click",X),Z.push(()=>{G.removeEventListener("click",X);let K=j.get(G);if(K)clearTimeout(K);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Z.forEach((Y)=>Y())}}function qq(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,fileRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K))Q.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Q.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Y),X=[...q,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:Q}}function Gq(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,messageRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K)){let V=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Q.push(V[1])}else if(!K.trim())break;else break}if(Q.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Y),X=[...q,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:Q}}function Kq(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1){let N=j[K].trim();if((N==="Images:"||N==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}}if(Z===-1)return{content:_,attachments:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let K=j[Y];if(/^\s*-\s+/.test(K)){let N=K.replace(/^\s*-\s+/,"").trim(),V=N.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||N.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let W=V[1],O=(V[2]||"").trim()||W;Q.push({id:W,label:O,raw:N})}else Q.push({id:null,label:N,raw:N})}else if(!K.trim())break;else break}if(Q.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),G=j.slice(Y),X=[...q,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:Q}}function Xq(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Nq(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(Xq).sort((N,V)=>V.length-N.length),Q=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),G=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),X=[],K;while(K=G.nextNode())X.push(K);for(let N of X){let V=N.nodeValue;if(!V||!Q.test(V)){Q.lastIndex=0;continue}Q.lastIndex=0;let W=N.parentElement;if(W&&W.closest("code, pre, script, style"))continue;let O=V.split(Q).filter((k)=>k!=="");if(O.length===0)continue;let M=q.createDocumentFragment();for(let k of O)if(Y.test(k)){let E=q.createElement("mark");E.className="search-highlight-term",E.textContent=k,M.appendChild(E)}else M.appendChild(q.createTextNode(k));N.parentNode.replaceChild(M,N)}return q.body.innerHTML}function S7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Q,agentName:Y,agentAvatarUrl:q,userName:G,userAvatarUrl:X,userAvatarBackground:K,onDelete:N,isThreadReply:V,isThreadPrev:W,isThreadNext:O,isRemoving:M,highlightQuery:k,onFileRef:E,onOpenWidget:J}){let[D,I]=h(null),i=P(null),p=_.data,r=p.type==="agent_response",e=G||"You",f=r?Y||B7:e,y=r?G$(Y,q,!0):G$(e,X),H=typeof K==="string"?K.trim().toLowerCase():"",S=!r&&y.image&&(H==="clear"||H==="transparent"),c=r&&Boolean(y.image),G0=`background-color: ${S||c?"transparent":y.color}`,d=p.content_meta,$0=Boolean(d?.truncated),_0=Boolean(d?.preview),X0=$0&&!_0,V0=$0?{originalLength:Number.isFinite(d?.original_length)?d.original_length:p.content?p.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,B0=p.content_blocks||[],J0=p.media_ids||[],E0=eY(p.content,p.link_previews),{content:M0,fileRefs:o0}=qq(E0),{content:y0,messageRefs:T0}=Gq(M0),{content:r0,attachments:s0}=Kq(y0);E0=r0;let h0=B$(B0),t0=W$(B0),p0=h0.length===1&&typeof h0[0]?.fallback_text==="string"?h0[0].fallback_text.trim():"",j1=t0.length===1?I7(t0[0]).trim():"",z0=Boolean(p0)&&E0?.trim()===p0||Boolean(j1)&&E0?.trim()===j1,l0=Boolean(E0)&&!X0&&!z0,Z1=typeof k==="string"?k.trim():"",Y1=v0(()=>{if(!E0||z0)return"";let R=O_(E0,j);return Z1?Nq(R,Z1):R},[E0,z0,Z1]),K_=(R,t)=>{R.stopPropagation(),I(w_(t))},[D1,_1]=h(null),m1=(R)=>{_1(R)},M1=(R)=>{R.stopPropagation(),N?.(_)},q1=(R,t)=>{let F0=new Set;if(!R||t.length===0)return{content:R,usedIds:F0};return{content:R.replace(/attachment:([^\s)"']+)/g,(u0,G1,A1,X1)=>{let h1=G1.replace(/^\/+/,""),U_=t.find((L_)=>L_.name&&L_.name.toLowerCase()===h1.toLowerCase()&&!F0.has(L_.id))||t.find((L_)=>!F0.has(L_.id));if(!U_)return u0;if(F0.add(U_.id),X1.slice(Math.max(0,A1-2),A1)==="](")return`/media/${U_.id}`;return U_.name||"attachment"}),usedIds:F0}},c0=[],x1=[],k1=[],a=[],W0=[],H0=[],N0=[],R0=0;if(B0.length>0)B0.forEach((R)=>{if(R?.type==="text"&&R.annotations)N0.push(R.annotations);if(R?.type==="generated_widget")H0.push(R);else if(R?.type==="resource_link")a.push(R);else if(R?.type==="resource")W0.push(R);else if(R?.type==="file"){let t=J0[R0++];if(t)x1.push(t),k1.push({id:t,name:R?.name||R?.filename||R?.title})}else if(R?.type==="image"||!R?.type){let t=J0[R0++];if(t){let F0=typeof R?.mime_type==="string"?R.mime_type:void 0;c0.push({id:t,annotations:R?.annotations,mimeType:F0}),k1.push({id:t,name:R?.name||R?.filename||R?.title})}}});else if(J0.length>0){let R=s0.length>0;J0.forEach((t,F0)=>{let k0=s0[F0]||null;if(k1.push({id:t,name:k0?.label||null}),R)x1.push(t);else c0.push({id:t,annotations:null})})}if(s0.length>0)s0.forEach((R)=>{if(!R?.id)return;let t=k1.find((F0)=>String(F0.id)===String(R.id));if(t&&!t.name)t.name=R.label});let{content:S0,usedIds:b0}=q1(E0,k1);E0=S0;let I0=c0.filter(({id:R})=>!b0.has(R)),w0=x1.filter((R)=>!b0.has(R)),i0=s0.length>0?s0.map((R,t)=>({id:R.id||`attachment-${t+1}`,label:R.label||`attachment-${t+1}`})):k1.map((R,t)=>({id:R.id,label:R.name||`attachment-${t+1}`})),D0=v0(()=>B$(B0),[B0]),g0=v0(()=>W$(B0),[B0]),O0=v0(()=>{return D0.map((R)=>`${R.card_id}:${R.state}`).join("|")},[D0]);m(()=>{if(!i.current)return;return U4(i.current),Yq(i.current)},[Y1]);let Q0=P(null);return m(()=>{if(!Q0.current||D0.length===0)return;let R=Q0.current;R.innerHTML="";for(let t of D0){let F0=document.createElement("div");R.appendChild(F0),M7(F0,t,{onAction:async(k0)=>{if(k0.type==="Action.OpenUrl"){let u0=s4(k0.url||"");if(!u0)throw Error("Invalid URL");window.open(u0,"_blank","noopener,noreferrer");return}if(k0.type==="Action.Submit"){await v6({post_id:_.id,thread_id:p.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:k0.type,title:k0.title||"",data:k0.data}});return}console.warn("[post] unsupported adaptive card action:",k0.type,k0)}}).catch((k0)=>{console.error("[post] adaptive card render error:",k0),F0.textContent=t.fallback_text||"Card failed to render."})}},[O0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${r?"agent-post":""} ${V?"thread-reply":""} ${W?"thread-prev":""} ${O?"thread-next":""} ${M?"removing":""}" onClick=${$}>
            <div class="post-avatar ${r?"agent-avatar":""} ${y.image?"has-image":""}" style=${G0}>
                ${y.image?L`<img src=${y.image} alt=${f} />`:y.letter}
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
                    <span class="post-author">${f}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(R)=>{if(R.preventDefault(),R.stopPropagation(),Z)Z(_.id)}}>${z7(_.timestamp)}</a>
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
                ${(o0.length>0||T0.length>0||i0.length>0)&&L`
                    <div class="post-file-refs">
                        ${T0.map((R)=>{let t=(F0)=>{if(F0.preventDefault(),F0.stopPropagation(),Q)Q(R,_.chat_jid||null);else{let k0=document.getElementById("post-"+R);if(k0)k0.scrollIntoView({behavior:"smooth",block:"center"}),k0.classList.add("post-highlight"),setTimeout(()=>k0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${R}`} class="post-msg-pill-link" onClick=${t}>
                                    <${i_}
                                        prefix="post"
                                        label=${"msg:"+R}
                                        title=${"Message "+R}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${o0.map((R)=>{let t=R.split("/").pop()||R;return L`
                                <${i_}
                                    prefix="post"
                                    label=${t}
                                    title=${R}
                                    onClick=${()=>E?.(R)}
                                />
                            `})}
                        ${i0.map((R)=>L`
                            <${nY}
                                key=${R.id}
                                attachment=${R}
                                onPreview=${m1}
                            />
                        `)}
                    </div>
                `}
                ${l0&&L`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:Y1}}
                        onClick=${(R)=>{if(R.target.classList.contains("hashtag")){R.preventDefault(),R.stopPropagation();let t=R.target.dataset.hashtag;if(t)j?.(t)}else if(R.target.tagName==="IMG")R.preventDefault(),R.stopPropagation(),I(R.target.src)}}
                    />
                `}
                ${D0.length>0&&L`
                    <div ref=${Q0} class="post-adaptive-cards" />
                `}
                ${g0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${g0.map((R,t)=>{let F0=T7(R),k0=`${R.card_id}-${t}`;return L`
                                <div key=${k0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${F0.title}</span>
                                        </div>
                                    </div>
                                    ${F0.fields.length>0&&L`
                                        <div class="adaptive-card-submission-fields">
                                            ${F0.fields.map((u0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${u0.key}: ${u0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${u0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${u0.value}</span>
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
                        ${H0.map((R,t)=>L`
                            <${sY}
                                key=${R.widget_id||R.id||`${_.id}-widget-${t}`}
                                block=${R}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${N0.length>0&&L`
                    ${N0.map((R,t)=>L`
                        <${d8} key=${t} annotations=${R} />
                    `)}
                `}
                ${I0.length>0&&L`
                    <div class="media-preview">
                        ${I0.map(({id:R,mimeType:t})=>{let k0=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?w_(R):m6(R);return L`
                                <img 
                                    key=${R} 
                                    src=${k0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(u0)=>K_(u0,R)}
                                />
                            `})}
                    </div>
                `}
                ${I0.length>0&&L`
                    ${I0.map(({annotations:R},t)=>L`
                        ${R&&L`<${d8} key=${t} annotations=${R} />`}
                    `)}
                `}
                ${w0.length>0&&L`
                    <div class="file-attachments">
                        ${w0.map((R)=>L`
                            <${iY} key=${R} mediaId=${R} onPreview=${m1} />
                        `)}
                    </div>
                `}
                ${a.length>0&&L`
                    <div class="resource-links">
                        ${a.map((R,t)=>L`
                            <div key=${t}>
                                <${oY} block=${R} />
                                <${d8} annotations=${R.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${W0.length>0&&L`
                    <div class="resource-embeds">
                        ${W0.map((R,t)=>L`
                            <div key=${t}>
                                <${rY} block=${R} />
                                <${d8} annotations=${R.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${p.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${p.link_previews.map((R,t)=>L`
                            <${tY} key=${t} preview=${R} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&L`<${C7} src=${D} onClose=${()=>I(null)} />`}
        ${D1&&L`
            <${P7}
                mediaId=${D1.mediaId}
                info=${D1.info}
                onClose=${()=>_1(null)}
            />
        `}
    `}function x7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Q,onMessageRef:Y,onScrollToMessage:q,onFileRef:G,onOpenWidget:X,emptyMessage:K,timelineRef:N,agents:V,user:W,onDeletePost:O,reverse:M=!0,removingPostIds:k,searchQuery:E}){let[J,D]=h(!1),I=P(null),i=typeof IntersectionObserver<"u",p=C(async()=>{if(!j||!$||J)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,J,j]),r=C((d)=>{let{scrollTop:$0,scrollHeight:_0,clientHeight:X0}=d.target,V0=M?_0-X0-$0:$0,B0=Math.max(300,X0);if(V0<B0)p()},[M,p]);m(()=>{if(!i)return;let d=I.current,$0=N?.current;if(!d||!$0)return;let _0=300,X0=new IntersectionObserver((V0)=>{for(let B0 of V0){if(!B0.isIntersecting)continue;p()}},{root:$0,rootMargin:`${_0}px 0px ${_0}px 0px`,threshold:0});return X0.observe(d),()=>X0.disconnect()},[i,$,j,N,p]);let e=P(p);if(e.current=p,m(()=>{if(i)return;if(!N?.current)return;let{scrollTop:d,scrollHeight:$0,clientHeight:_0}=N.current,X0=M?$0-_0-d:d,V0=Math.max(300,_0);if(X0<V0)e.current?.()},[i,_,$,M,N]),m(()=>{if(!N?.current)return;if(!$||J)return;let{scrollTop:d,scrollHeight:$0,clientHeight:_0}=N.current,X0=M?$0-_0-d:d,V0=Math.max(300,_0);if($0<=_0+1||X0<V0)e.current?.()},[_,$,J,M,N]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let f=_.slice().sort((d,$0)=>d.id-$0.id),y=(d)=>{let $0=d?.data?.thread_id;if($0===null||$0===void 0||$0==="")return null;let _0=Number($0);return Number.isFinite(_0)?_0:null},H=new Map;for(let d=0;d<f.length;d+=1){let $0=f[d],_0=Number($0?.id),X0=y($0);if(X0!==null){let V0=H.get(X0)||{anchorIndex:-1,replyIndexes:[]};V0.replyIndexes.push(d),H.set(X0,V0)}else if(Number.isFinite(_0)){let V0=H.get(_0)||{anchorIndex:-1,replyIndexes:[]};V0.anchorIndex=d,H.set(_0,V0)}}let S=new Map;for(let[d,$0]of H.entries()){let _0=new Set;if($0.anchorIndex>=0)_0.add($0.anchorIndex);for(let X0 of $0.replyIndexes)_0.add(X0);S.set(d,Array.from(_0).sort((X0,V0)=>X0-V0))}let c=f.map((d,$0)=>{let _0=y(d);if(_0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let X0=S.get(_0);if(!X0||X0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let V0=X0.indexOf($0);if(V0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:V0>0,hasThreadNext:V0<X0.length-1}}),G0=L`<div class="timeline-sentinel" ref=${I}></div>`;return L`
        <div class="timeline ${M?"reverse":"normal"}" ref=${N} onScroll=${r}>
            <div class="timeline-content">
                ${M?G0:null}
                ${f.map((d,$0)=>{let _0=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),X0=k?.has?.(d.id),V0=c[$0]||{};return L`
                    <${S7}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${_0}
                        isThreadPrev=${V0.hasThreadPrev}
                        isThreadNext=${V0.hasThreadNext}
                        isRemoving=${X0}
                        highlightQuery=${E}
                        agentName=${W7(d.data?.agent_id,V||{})}
                        agentAvatarUrl=${U7(d.data?.agent_id,V||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Z?.(d)}
                        onHashtagClick=${Q}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${G}
                        onOpenWidget=${X}
                        onDelete=${O}
                    />
                `})}
                ${M?null:G0}
            </div>
        </div>
    `}class y7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Q=Z.canHandle(_);if(Q===!1||Q===0)continue;let Y=Q===!0?0:typeof Q==="number"?Q:0;if(Y>j)j=Y,$=Z}catch(Q){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Q)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var n0=new y7;var i8=null,U$=null;function Vq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function R7(){if(U$)return Promise.resolve(U$);if(!i8)i8=import(Vq()).then((_)=>{return U$=_,_}).catch((_)=>{throw i8=null,_});return i8}class w7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await R7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var L$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new w7(_,$)}};function F$(){R7().catch(()=>{})}var t4="piclaw://terminal";var Bq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Wq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},n8=null,z$=null;function Uq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Lq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Q,Y)=>{let q=Q instanceof Request?Q.url:Q instanceof URL?Q.href:String(Q);if(!Uq(q))return $(Q,Y);if(Q instanceof Request)return $(new Request(j,Q));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Fq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!n8)n8=Lq(()=>Promise.resolve($.init?.())).catch((j)=>{throw n8=null,j});return await n8,$}async function zq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!z$)z$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await z$}async function Hq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Jq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Oq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function L4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Dq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function f7(){let _=Oq(),$=_?Wq:Bq,j=L4("--bg-primary",_?"#000000":"#ffffff"),Z=L4("--text-primary",_?"#e7e9ea":"#0f1419"),Q=L4("--text-secondary",_?"#71767b":"#536471"),Y=L4("--accent-color","#1d9bf0"),q=L4("--danger-color",_?"#ff7b72":"#cf222e"),G=L4("--success-color",_?"#7ee787":"#1a7f37"),X=L4("--bg-hover",_?"#1d1f23":"#e8ebed"),K=L4("--border-color",_?"#2f3336":"#eff3f4"),N=L4("--accent-soft-strong",Dq(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:N,selectionForeground:Z,black:X,red:q,green:G,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:K}}class H${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Q=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Q)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Fq();if(await zq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:f7()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=f7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Q=this.bodyEl.querySelector("canvas");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Q=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Q?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Q?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Q}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Hq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Jq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Q})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Q}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Q=null;try{Q=JSON.parse(String(Z.data))}catch{Q={type:"output",data:String(Z.data)}}if(Q?.type==="output"&&typeof Q.data==="string"){_.write?.(Q.data);return}if(Q?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var J$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new H$(_,$)}},O$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new H$(_,$)}};function F4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Q)=>{try{return Boolean($.matchMedia(Q)?.matches)}catch{return!1}})}function o8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Q=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Q>1||q)}function v7(_,$={}){if(F4($))return null;if(o8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Aq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function D$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function A$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function E$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function M$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function z4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Q=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Q),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function b7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Q=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Q),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function u7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Q=String($||"").trim();if(!Q)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Q),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,G]of Object.entries(Y)){let X=String(q||"").trim();if(!X)continue;if(G===null||G===void 0||G==="")Z.searchParams.delete(X);else Z.searchParams.set(X,String(G))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function Aq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Eq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function g7(_,$={}){if(F4($))return null;if(o8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Eq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function t5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Mq(_){try{return JSON.parse(_)}catch{return null}}function kq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function Iq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class k${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=Iq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||Mq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=kq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var e5=()=>{throw Error("Operation requires compiling with --exportRuntime")},Tq=typeof BigUint64Array<"u",_8=Symbol();var Pq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function m7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return Pq.decode(Z)}catch{let Q="",Y=0;while(j-Y>1024)Q+=String.fromCharCode(...Z.subarray(Y,Y+=1024));return Q+String.fromCharCode(...Z.subarray(Y))}}function h7(_){let $={};function j(Q,Y){if(!Q)return"<yet unknown>";return m7(Q.buffer,Y)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Y,q,G,X){let K=$.memory||Z.memory;throw Error(`abort: ${j(K,Y)} at ${j(K,q)}:${G}:${X}`)},Z.trace=Z.trace||function(Y,q,...G){let X=$.memory||Z.memory;console.log(`trace: ${j(X,Y)}${q?" ":""}${G.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function p7(_,$){let j=$.exports,Z=j.memory,Q=j.table,Y=j.__new||e5,q=j.__pin||e5,G=j.__unpin||e5,X=j.__collect||e5,K=j.__rtti_base,N=K?(H)=>H[K>>>2]:e5;_.__new=Y,_.__pin=q,_.__unpin=G,_.__collect=X;function V(H){let S=new Uint32Array(Z.buffer);if((H>>>=0)>=N(S))throw Error(`invalid id: ${H}`);return S[(K+4>>>2)+H]}function W(H){let S=V(H);if(!(S&7))throw Error(`not an array: ${H}, flags=${S}`);return S}function O(H){return 31-Math.clz32(H>>>6&31)}function M(H){if(H==null)return 0;let S=H.length,c=Y(S<<1,2),G0=new Uint16Array(Z.buffer);for(let d=0,$0=c>>>1;d<S;++d)G0[$0+d]=H.charCodeAt(d);return c}_.__newString=M;function k(H){if(H==null)return 0;let S=new Uint8Array(H),c=Y(S.length,1);return new Uint8Array(Z.buffer).set(S,c),c}_.__newArrayBuffer=k;function E(H){if(!H)return null;let S=Z.buffer;if(new Uint32Array(S)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return m7(S,H)}_.__getString=E;function J(H,S,c){let G0=Z.buffer;if(c)switch(H){case 2:return new Float32Array(G0);case 3:return new Float64Array(G0)}else switch(H){case 0:return new(S?Int8Array:Uint8Array)(G0);case 1:return new(S?Int16Array:Uint16Array)(G0);case 2:return new(S?Int32Array:Uint32Array)(G0);case 3:return new(S?BigInt64Array:BigUint64Array)(G0)}throw Error(`unsupported align: ${H}`)}function D(H,S=0){let c=S,G0=W(H),d=O(G0),$0=typeof c!=="number",_0=$0?c.length:c,X0=Y(_0<<d,G0&4?H:1),V0;if(G0&4)V0=X0;else{q(X0);let B0=Y(G0&2?16:12,H);G(X0);let J0=new Uint32Array(Z.buffer);if(J0[B0+0>>>2]=X0,J0[B0+4>>>2]=X0,J0[B0+8>>>2]=_0<<d,G0&2)J0[B0+12>>>2]=_0;V0=B0}if($0){let B0=J(d,G0&2048,G0&4096),J0=X0>>>d;if(G0&16384)for(let E0=0;E0<_0;++E0)B0[J0+E0]=c[E0];else B0.set(c,J0)}return V0}_.__newArray=D;function I(H){let S=new Uint32Array(Z.buffer),c=S[H+-8>>>2],G0=W(c),d=O(G0),$0=G0&4?H:S[H+4>>>2],_0=G0&2?S[H+12>>>2]:S[$0+-4>>>2]>>>d;return J(d,G0&2048,G0&4096).subarray($0>>>=d,$0+_0)}_.__getArrayView=I;function i(H){let S=I(H),c=S.length,G0=Array(c);for(let d=0;d<c;d++)G0[d]=S[d];return G0}_.__getArray=i;function p(H){let S=Z.buffer,c=new Uint32Array(S)[H+-4>>>2];return S.slice(H,H+c)}_.__getArrayBuffer=p;function r(H){if(!Q)throw Error("Operation requires compiling with --exportTable");let S=new Uint32Array(Z.buffer)[H>>>2];return Q.get(S)}_.__getFunction=r;function e(H,S,c){return new H(f(H,S,c))}function f(H,S,c){let G0=Z.buffer,d=new Uint32Array(G0);return new H(G0,d[c+4>>>2],d[c+8>>>2]>>>S)}function y(H,S,c){_[`__get${S}`]=e.bind(null,H,c),_[`__get${S}View`]=f.bind(null,H,c)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{y(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),Tq)[BigUint64Array,BigInt64Array].forEach((H)=>{y(H,H.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Q,Sq(j,_)}function c7(_){return typeof Response<"u"&&_ instanceof Response}function Cq(_){return _ instanceof WebAssembly.Module}async function I$(_,$={}){if(c7(_=await _))return r8(_,$);let j=Cq(_)?_:await WebAssembly.compile(_),Z=h7($),Q=await WebAssembly.instantiate(j,$),Y=p7(Z,Q);return{module:j,instance:Q,exports:Y}}async function r8(_,$={}){if(!WebAssembly.instantiateStreaming)return I$(c7(_=await _)?_.arrayBuffer():_,$);let j=h7($),Z=await WebAssembly.instantiateStreaming(_,$),Q=p7(j,Z.instance);return{...Z,exports:Q}}function Sq(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Q=_[Z],Y=Z.split("."),q=$;while(Y.length>1){let K=Y.shift();if(!Object.hasOwn(q,K))q[K]={};q=q[K]}let G=Y[0],X=G.indexOf("#");if(X>=0){let K=G.substring(0,X),N=q[K];if(typeof N>"u"||!N.prototype){let V=function(...W){return V.wrap(V.prototype.constructor(0,...W))};if(V.prototype={valueOf(){return this[_8]}},V.wrap=function(W){return Object.create(V.prototype,{[_8]:{value:W,writable:!1}})},N)Object.getOwnPropertyNames(N).forEach((W)=>Object.defineProperty(V,W,Object.getOwnPropertyDescriptor(N,W)));q[K]=V}if(G=G.substring(X+1),q=q[K].prototype,/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4))){let V=_[Z.replace("set:","get:")],W=_[Z.replace("get:","set:")];Object.defineProperty(q,G,{get(){return V(this[_8])},set(O){W(this[_8],O)},enumerable:!0})}}else if(G==="constructor")(q[G]=function(...V){return j(V.length),Q(...V)}).original=Q;else(q[G]=function(...V){return j(V.length),Q(this[_8],...V)}).original=Q}else if(/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4)))Object.defineProperty(q,G,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Q==="function"&&Q!==j)(q[G]=(...K)=>{return j(K.length),Q(...K)}).original=Q;else q[G]=Q}return $}var yq="/static/js/vendor/remote-display-decoder.wasm",s8=null;function l7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function d7(){if(s8)return s8;return s8=(async()=>{try{let Z=function(Q,Y,q,G,X,K,N){let V=l7(Y),W=j.__pin(j.__newArrayBuffer(V));try{return j[Q](W,q,G,X,K,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift)}finally{j.__unpin(W);try{j.__collect()}catch{}}},_=await fetch(yq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof r8==="function"?await r8(_,{}):await I$(await _.arrayBuffer(),{})).exports;for(let Q of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Q]!=="function")throw Error(`${Q} export is missing.`);return{initFramebuffer(Q,Y){j.initFramebuffer(Q,Y)},getFramebuffer(){let Q=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Q,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Q,Y,q,G,X,K){return Z("processRawRect",Q,Y,q,G,X,K)},processCopyRect(Q,Y,q,G,X,K){return j.processCopyRect(Q,Y,q,G,X,K)},processRreRect(Q,Y,q,G,X,K){return Z("processRreRect",Q,Y,q,G,X,K)},processHextileRect(Q,Y,q,G,X,K){return Z("processHextileRect",Q,Y,q,G,X,K)},processZrleTileData(Q,Y,q,G,X,K){return Z("processZrleTileData",Q,Y,q,G,X,K)},decodeRawRectToRgba(Q,Y,q,G){let X=l7(Q),K=j.__pin(j.__newArrayBuffer(X));try{let N=j.__pin(j.decodeRawRectToRgba(K,Y,q,G.bitsPerPixel,G.bigEndian?1:0,G.trueColor?1:0,G.redMax,G.greenMax,G.blueMax,G.redShift,G.greenShift,G.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(N))}finally{j.__unpin(N)}}finally{j.__unpin(K);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),s8}function D5(_,$,j){return Math.max($,Math.min(j,_))}function a8(_,$,j){let Z=new Uint8Array(6),Q=D5(Math.floor(Number($||0)),0,65535),Y=D5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=D5(Math.floor(Number(_||0)),0,255),Z[2]=Q>>8&255,Z[3]=Q&255,Z[4]=Y>>8&255,Z[5]=Y&255,Z}function P$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function i7(_,$,j,Z,Q){let Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(Q||0))),G=Math.max(1,Number(j?.width||0)),X=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/G,N=(Number($||0)-Number(j?.top||0))/X;return{x:D5(Math.floor(K*Y),0,Math.max(0,Y-1)),y:D5(Math.floor(N*q),0,Math.max(0,q-1))}}function n7(_,$,j,Z=0){let Q=Number(_)<0?8:16,Y=D5(Number(Z||0)|Q,0,255);return[a8(Y,$,j),a8(Number(Z||0),$,j)]}function o7(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function $8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function r7(_,$,j,Z){let Q=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),G=Math.max(1,Math.floor(Number(Z||0))),X=Math.min(Q/q,Y/G);if(!Number.isFinite(X)||X<=0)return 1;return Math.max(0.01,X)}var T$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)T$[`F${_}`]=65470+(_-1);function C$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(T$,Y))return T$[Y];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Q=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Q){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var v1=Uint8Array,D_=Uint16Array,u$=Int32Array,t8=new v1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),e8=new v1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),w$=new v1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),e7=function(_,$){var j=new D_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Q=new u$(j[30]);for(var Z=1;Z<30;++Z)for(var Y=j[Z];Y<j[Z+1];++Y)Q[Y]=Y-j[Z]<<5|Z;return{b:j,r:Q}},_9=e7(t8,2),$9=_9.b,f$=_9.r;$9[28]=258,f$[258]=28;var j9=e7(e8,0),Rq=j9.b,s7=j9.r,v$=new D_(32768);for(d0=0;d0<32768;++d0)Z4=(d0&43690)>>1|(d0&21845)<<1,Z4=(Z4&52428)>>2|(Z4&13107)<<2,Z4=(Z4&61680)>>4|(Z4&3855)<<4,v$[d0]=((Z4&65280)>>8|(Z4&255)<<8)>>1;var Z4,d0,Q4=function(_,$,j){var Z=_.length,Q=0,Y=new D_($);for(;Q<Z;++Q)if(_[Q])++Y[_[Q]-1];var q=new D_($);for(Q=1;Q<$;++Q)q[Q]=q[Q-1]+Y[Q-1]<<1;var G;if(j){G=new D_(1<<$);var X=15-$;for(Q=0;Q<Z;++Q)if(_[Q]){var K=Q<<4|_[Q],N=$-_[Q],V=q[_[Q]-1]++<<N;for(var W=V|(1<<N)-1;V<=W;++V)G[v$[V]>>X]=K}}else{G=new D_(Z);for(Q=0;Q<Z;++Q)if(_[Q])G[Q]=v$[q[_[Q]-1]++]>>15-_[Q]}return G},R4=new v1(288);for(d0=0;d0<144;++d0)R4[d0]=8;var d0;for(d0=144;d0<256;++d0)R4[d0]=9;var d0;for(d0=256;d0<280;++d0)R4[d0]=7;var d0;for(d0=280;d0<288;++d0)R4[d0]=8;var d0,Y8=new v1(32);for(d0=0;d0<32;++d0)Y8[d0]=5;var d0,wq=Q4(R4,9,0),fq=Q4(R4,9,1),vq=Q4(Y8,5,0),bq=Q4(Y8,5,1),S$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},n_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},x$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},g$=function(_){return(_+7)/8|0},Q8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new v1(_.subarray($,j))};var uq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],W_=function(_,$,j){var Z=Error($||uq[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,W_);if(!j)throw Z;return Z},gq=function(_,$,j,Z){var Q=_.length,Y=Z?Z.length:0;if(!Q||$.f&&!$.l)return j||new v1(0);var q=!j,G=q||$.i!=2,X=$.i;if(q)j=new v1(Q*3);var K=function(j1){var z0=j.length;if(j1>z0){var l0=new v1(Math.max(z0*2,j1));l0.set(j),j=l0}},N=$.f||0,V=$.p||0,W=$.b||0,O=$.l,M=$.d,k=$.m,E=$.n,J=Q*8;do{if(!O){N=n_(_,V,1);var D=n_(_,V+1,3);if(V+=3,!D){var I=g$(V)+4,i=_[I-4]|_[I-3]<<8,p=I+i;if(p>Q){if(X)W_(0);break}if(G)K(W+i);j.set(_.subarray(I,p),W),$.b=W+=i,$.p=V=p*8,$.f=N;continue}else if(D==1)O=fq,M=bq,k=9,E=5;else if(D==2){var r=n_(_,V,31)+257,e=n_(_,V+10,15)+4,f=r+n_(_,V+5,31)+1;V+=14;var y=new v1(f),H=new v1(19);for(var S=0;S<e;++S)H[w$[S]]=n_(_,V+S*3,7);V+=e*3;var c=S$(H),G0=(1<<c)-1,d=Q4(H,c,1);for(var S=0;S<f;){var $0=d[n_(_,V,G0)];V+=$0&15;var I=$0>>4;if(I<16)y[S++]=I;else{var _0=0,X0=0;if(I==16)X0=3+n_(_,V,3),V+=2,_0=y[S-1];else if(I==17)X0=3+n_(_,V,7),V+=3;else if(I==18)X0=11+n_(_,V,127),V+=7;while(X0--)y[S++]=_0}}var V0=y.subarray(0,r),B0=y.subarray(r);k=S$(V0),E=S$(B0),O=Q4(V0,k,1),M=Q4(B0,E,1)}else W_(1);if(V>J){if(X)W_(0);break}}if(G)K(W+131072);var J0=(1<<k)-1,E0=(1<<E)-1,M0=V;for(;;M0=V){var _0=O[x$(_,V)&J0],o0=_0>>4;if(V+=_0&15,V>J){if(X)W_(0);break}if(!_0)W_(2);if(o0<256)j[W++]=o0;else if(o0==256){M0=V,O=null;break}else{var y0=o0-254;if(o0>264){var S=o0-257,T0=t8[S];y0=n_(_,V,(1<<T0)-1)+$9[S],V+=T0}var r0=M[x$(_,V)&E0],s0=r0>>4;if(!r0)W_(3);V+=r0&15;var B0=Rq[s0];if(s0>3){var T0=e8[s0];B0+=x$(_,V)&(1<<T0)-1,V+=T0}if(V>J){if(X)W_(0);break}if(G)K(W+131072);var h0=W+y0;if(W<B0){var t0=Y-B0,p0=Math.min(B0,h0);if(t0+W<0)W_(3);for(;W<p0;++W)j[W]=Z[t0+W]}for(;W<h0;++W)j[W]=j[W-B0]}}if($.l=O,$.p=M0,$.b=W,$.f=N,O)N=1,$.m=k,$.d=M,$.n=E}while(!N);return W!=j.length&&q?Q8(j,0,W):j.subarray(0,W)},H4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},j8=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},y$=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Q=j.length,Y=j.slice();if(!Q)return{t:Q9,l:0};if(Q==1){var q=new v1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(p,r){return p.f-r.f}),j.push({s:-1,f:25001});var G=j[0],X=j[1],K=0,N=1,V=2;j[0]={s:-1,f:G.f+X.f,l:G,r:X};while(N!=Q-1)G=j[j[K].f<j[V].f?K++:V++],X=j[K!=N&&j[K].f<j[V].f?K++:V++],j[N++]={s:-1,f:G.f+X.f,l:G,r:X};var W=Y[0].s;for(var Z=1;Z<Q;++Z)if(Y[Z].s>W)W=Y[Z].s;var O=new D_(W+1),M=b$(j[N-1],O,0);if(M>$){var Z=0,k=0,E=M-$,J=1<<E;Y.sort(function(r,e){return O[e.s]-O[r.s]||r.f-e.f});for(;Z<Q;++Z){var D=Y[Z].s;if(O[D]>$)k+=J-(1<<M-O[D]),O[D]=$;else break}k>>=E;while(k>0){var I=Y[Z].s;if(O[I]<$)k-=1<<$-O[I]++-1;else++Z}for(;Z>=0&&k;--Z){var i=Y[Z].s;if(O[i]==$)--O[i],++k}M=$}return{t:new v1(O),l:M}},b$=function(_,$,j){return _.s==-1?Math.max(b$(_.l,$,j+1),b$(_.r,$,j+1)):$[_.s]=j},a7=function(_){var $=_.length;while($&&!_[--$]);var j=new D_(++$),Z=0,Q=_[0],Y=1,q=function(X){j[Z++]=X};for(var G=1;G<=$;++G)if(_[G]==Q&&G!=$)++Y;else{if(!Q&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Q),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Q);Y=1,Q=_[G]}return{c:j.subarray(0,Z),n:$}},Z8=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},Z9=function(_,$,j){var Z=j.length,Q=g$($+2);_[Q]=Z&255,_[Q+1]=Z>>8,_[Q+2]=_[Q]^255,_[Q+3]=_[Q+1]^255;for(var Y=0;Y<Z;++Y)_[Q+Y+4]=j[Y];return(Q+4+Z)*8},t7=function(_,$,j,Z,Q,Y,q,G,X,K,N){H4($,N++,j),++Q[256];var V=y$(Q,15),W=V.t,O=V.l,M=y$(Y,15),k=M.t,E=M.l,J=a7(W),D=J.c,I=J.n,i=a7(k),p=i.c,r=i.n,e=new D_(19);for(var f=0;f<D.length;++f)++e[D[f]&31];for(var f=0;f<p.length;++f)++e[p[f]&31];var y=y$(e,7),H=y.t,S=y.l,c=19;for(;c>4&&!H[w$[c-1]];--c);var G0=K+5<<3,d=Z8(Q,R4)+Z8(Y,Y8)+q,$0=Z8(Q,W)+Z8(Y,k)+q+14+3*c+Z8(e,H)+2*e[16]+3*e[17]+7*e[18];if(X>=0&&G0<=d&&G0<=$0)return Z9($,N,_.subarray(X,X+K));var _0,X0,V0,B0;if(H4($,N,1+($0<d)),N+=2,$0<d){_0=Q4(W,O,0),X0=W,V0=Q4(k,E,0),B0=k;var J0=Q4(H,S,0);H4($,N,I-257),H4($,N+5,r-1),H4($,N+10,c-4),N+=14;for(var f=0;f<c;++f)H4($,N+3*f,H[w$[f]]);N+=3*c;var E0=[D,p];for(var M0=0;M0<2;++M0){var o0=E0[M0];for(var f=0;f<o0.length;++f){var y0=o0[f]&31;if(H4($,N,J0[y0]),N+=H[y0],y0>15)H4($,N,o0[f]>>5&127),N+=o0[f]>>12}}}else _0=wq,X0=R4,V0=vq,B0=Y8;for(var f=0;f<G;++f){var T0=Z[f];if(T0>255){var y0=T0>>18&31;if(j8($,N,_0[y0+257]),N+=X0[y0+257],y0>7)H4($,N,T0>>23&31),N+=t8[y0];var r0=T0&31;if(j8($,N,V0[r0]),N+=B0[r0],r0>3)j8($,N,T0>>5&8191),N+=e8[r0]}else j8($,N,_0[T0]),N+=X0[T0]}return j8($,N,_0[256]),N+X0[256]},mq=new u$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Q9=new v1(0),hq=function(_,$,j,Z,Q,Y){var q=Y.z||_.length,G=new v1(Z+q+5*(1+Math.ceil(q/7000))+Q),X=G.subarray(Z,G.length-Q),K=Y.l,N=(Y.r||0)&7;if($){if(N)X[0]=Y.r>>3;var V=mq[$-1],W=V>>13,O=V&8191,M=(1<<j)-1,k=Y.p||new D_(32768),E=Y.h||new D_(M+1),J=Math.ceil(j/3),D=2*J,I=function(Z1){return(_[Z1]^_[Z1+1]<<J^_[Z1+2]<<D)&M},i=new u$(25000),p=new D_(288),r=new D_(32),e=0,f=0,y=Y.i||0,H=0,S=Y.w||0,c=0;for(;y+2<q;++y){var G0=I(y),d=y&32767,$0=E[G0];if(k[d]=$0,E[G0]=d,S<=y){var _0=q-y;if((e>7000||H>24576)&&(_0>423||!K)){N=t7(_,X,0,i,p,r,f,H,c,y-c,N),H=e=f=0,c=y;for(var X0=0;X0<286;++X0)p[X0]=0;for(var X0=0;X0<30;++X0)r[X0]=0}var V0=2,B0=0,J0=O,E0=d-$0&32767;if(_0>2&&G0==I(y-E0)){var M0=Math.min(W,_0)-1,o0=Math.min(32767,y),y0=Math.min(258,_0);while(E0<=o0&&--J0&&d!=$0){if(_[y+V0]==_[y+V0-E0]){var T0=0;for(;T0<y0&&_[y+T0]==_[y+T0-E0];++T0);if(T0>V0){if(V0=T0,B0=E0,T0>M0)break;var r0=Math.min(E0,T0-2),s0=0;for(var X0=0;X0<r0;++X0){var h0=y-E0+X0&32767,t0=k[h0],p0=h0-t0&32767;if(p0>s0)s0=p0,$0=h0}}}d=$0,$0=k[d],E0+=d-$0&32767}}if(B0){i[H++]=268435456|f$[V0]<<18|s7[B0];var j1=f$[V0]&31,z0=s7[B0]&31;f+=t8[j1]+e8[z0],++p[257+j1],++r[z0],S=y+V0,++e}else i[H++]=_[y],++p[_[y]]}}for(y=Math.max(y,S);y<q;++y)i[H++]=_[y],++p[_[y]];if(N=t7(_,X,K,i,p,r,f,H,c,y-c,N),!K)Y.r=N&7|X[N/8|0]<<3,N-=7,Y.h=E,Y.p=k,Y.i=y,Y.w=S}else{for(var y=Y.w||0;y<q+K;y+=65535){var l0=y+65535;if(l0>=q)X[N/8|0]=K,l0=q;N=Z9(X,N+1,_.subarray(y,l0))}Y.i=q}return Q8(G,0,Z+g$(N)+Q)};var Y9=function(){var _=1,$=0;return{p:function(j){var Z=_,Q=$,Y=j.length|0;for(var q=0;q!=Y;){var G=Math.min(q+2655,Y);for(;q<G;++q)Q+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),Q=(Q&65535)+15*(Q>>16)}_=Z,$=Q},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},pq=function(_,$,j,Z,Q){if(!Q){if(Q={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new v1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Q.w=Y.length}}return hq(_,$.level==null?6:$.level,$.mem==null?Q.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Q)};var q9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var cq=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Q=Y9();Q.p($.dictionary),q9(_,2,Q.d())}},lq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)W_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)W_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var R$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new v1(32768),this.p=new v1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)W_(5);if(this.d)W_(4);if(!this.p.length)this.p=$;else if($.length){var j=new v1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=gq(this.p,this.s,this.o);this.ondata(Q8(Z,j,this.s.b),this.d),this.o=Q8(Z,this.s.b-32768),this.s.b=this.o.length,this.p=Q8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function G9(_,$){if(!$)$={};var j=Y9();j.p(_);var Z=pq(_,$,$.dictionary?6:2,4);return cq(Z,$),q9(Z,Z.length-4,j.d()),Z}var K9=function(){function _($,j){R$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(R$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(lq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)W_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}R$.prototype.c.call(this,j)},_}();var dq=typeof TextDecoder<"u"&&new TextDecoder,iq=0;try{dq.decode(Q9,{stream:!0}),iq=1}catch(_){}var nq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],oq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],rq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],sq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],aq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],tq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],eq=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],_G=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],V9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;V9[_]=$}function B9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function W9(_){let $=0n,j=B9(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function $G(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Q=$-1;Q>=0;Q-=1)j[Q]=Number(Z&0xffn),Z>>=8n;return j}function A5(_,$,j){let Z=0n;for(let Q of $){let Y=BigInt(_)>>BigInt(j-Q)&1n;Z=Z<<1n|Y}return Z}function X9(_,$){let j=28n,Z=(1n<<j)-1n,Q=BigInt($%28);return(_<<Q|_>>j-Q)&Z}function jG(_){let $=A5(W9(_),aq,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Q=[];for(let Y of eq){j=X9(j,Y),Z=X9(Z,Y);let q=j<<28n|Z;Q.push(A5(q,tq,56))}return Q}function ZG(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Q=Number(_>>Z&0x3fn),Y=(Q&32)>>4|Q&1,q=Q>>1&15;$=$<<4n|BigInt(_G[j][Y][q])}return $}function QG(_,$){let j=A5(_,rq,32)^BigInt($),Z=ZG(j);return A5(Z,sq,32)}function N9(_,$){let j=jG($),Z=A5(W9(_),nq,64),Q=Z>>32n&0xffffffffn,Y=Z&0xffffffffn;for(let G of j){let X=Y,K=(Q^QG(Y,G))&0xffffffffn;Q=X,Y=K}let q=Y<<32n|Q;return $G(A5(q,oq,64),8)}function YG(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Q=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=V9[Q]}return j}function U9(_,$){let j=B9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=YG(_),Q=new Uint8Array(16);return Q.set(N9(j.slice(0,8),Z),0),Q.set(N9(j.slice(8,16),Z),8),Q}var o_="vnc";function qG(_){return Number(_)}function GG(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Q)=>Q.trim()).filter((Q)=>Q.length>0):[],j=[],Z=new Set;for(let Q of $){let Y=qG(Q);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function k5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function KG(_,$){let j=k5(_),Z=k5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Q=new Uint8Array(j.byteLength+Z.byteLength);return Q.set(j,0),Q.set(Z,j.byteLength),Q}function XG(_){let $=0;for(let Q of _||[])$+=Q?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Q of _||[]){let Y=k5(Q);j.set(Y,Z),Z+=Y.byteLength}return j}function NG(){return(_)=>{let $=k5(_);try{let j=[],Z=new K9((Q)=>{j.push(new Uint8Array(Q))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return XG(j)}catch(j){try{let Z=G9($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Q=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Q}`)}}}}function VG(_){return new TextEncoder().encode(String(_||""))}function E5(_){return new TextDecoder().decode(k5(_))}function BG(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function WG(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function L9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function UG(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function LG(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Q=4;for(let Y of $)Z.setInt32(Q,Number(Y||0),!1),Q+=4;return new Uint8Array(j)}function F9(_,$,j,Z=0,Q=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,Q,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function M5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function H9(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function FG(_,$,j,Z){let Q=Z||I5,Y=k5(_),q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8)),G=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<G)throw Error(`Incomplete raw rectangle payload: expected ${G} byte(s), got ${Y.byteLength}`);if(!Q.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let X=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,N=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let W=H9(Y,K,q,Q.bigEndian),O=M5(W>>>Q.redShift&Q.redMax,Q.redMax),M=M5(W>>>Q.greenShift&Q.greenMax,Q.greenMax),k=M5(W>>>Q.blueShift&Q.blueMax,Q.blueMax);X[N]=O,X[N+1]=M,X[N+2]=k,X[N+3]=255,K+=q,N+=4}return X}function J4(_,$,j){let Z=j||I5,Q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Q)return null;let Y=H9(_,$,Q,Z.bigEndian);return{rgba:[M5(Y>>>Z.redShift&Z.redMax,Z.redMax),M5(Y>>>Z.greenShift&Z.greenMax,Z.greenMax),M5(Y>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Q}}function w4(_,$,j,Z,Q,Y,q){if(!q)return;for(let G=0;G<Y;G+=1)for(let X=0;X<Q;X+=1){let K=((Z+G)*$+(j+X))*4;_[K]=q[0],_[K+1]=q[1],_[K+2]=q[2],_[K+3]=q[3]}}function J9(_,$,j,Z,Q,Y,q){for(let G=0;G<Y;G+=1){let X=G*Q*4,K=((Z+G)*$+j)*4;_.set(q.subarray(X,X+Q*4),K)}}function z9(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Q=_[j++];if(Z+=Q,Q!==255)break}return{consumed:j-$,runLength:Z}}function zG(_,$,j,Z,Q,Y,q){let G=Q||I5,X=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let N=_.slice($+4,$+4+K),V;try{V=q(N)}catch{return{consumed:4+K,skipped:!0}}let W=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let M=0;M<Z;M+=64){let k=Math.min(64,Z-M);for(let E=0;E<j;E+=64){let J=Math.min(64,j-E);if(V.byteLength<W+1)return null;let D=V[W++],I=D&127,i=(D&128)!==0;if(!i&&I===0){let p=J*k*X;if(V.byteLength<W+p)return null;let r=Y(V.slice(W,W+p),J,k,G);W+=p,J9(O,j,E,M,J,k,r);continue}if(!i&&I===1){let p=J4(V,W,G);if(!p)return null;W+=p.bytesPerPixel,w4(O,j,E,M,J,k,p.rgba);continue}if(!i&&I>1&&I<=16){let p=[];for(let y=0;y<I;y+=1){let H=J4(V,W,G);if(!H)return null;W+=H.bytesPerPixel,p.push(H.rgba)}let r=I<=2?1:I<=4?2:4,e=Math.ceil(J*r/8),f=e*k;if(V.byteLength<W+f)return null;for(let y=0;y<k;y+=1){let H=W+y*e;for(let S=0;S<J;S+=1){let c=S*r,G0=H+(c>>3),d=8-r-(c&7),$0=V[G0]>>d&(1<<r)-1;w4(O,j,E+S,M+y,1,1,p[$0])}}W+=f;continue}if(i&&I===0){let p=0,r=0;while(r<k){let e=J4(V,W,G);if(!e)return null;W+=e.bytesPerPixel;let f=z9(V,W);if(!f)return null;W+=f.consumed;for(let y=0;y<f.runLength;y+=1)if(w4(O,j,E+p,M+r,1,1,e.rgba),p+=1,p>=J){if(p=0,r+=1,r>=k)break}}continue}if(i&&I>0){let p=[];for(let f=0;f<I;f+=1){let y=J4(V,W,G);if(!y)return null;W+=y.bytesPerPixel,p.push(y.rgba)}let r=0,e=0;while(e<k){if(V.byteLength<W+1)return null;let f=V[W++],y=f,H=1;if(f&128){y=f&127;let c=z9(V,W);if(!c)return null;W+=c.consumed,H=c.runLength}let S=p[y];if(!S)return null;for(let c=0;c<H;c+=1)if(w4(O,j,E+r,M+e,1,1,S),r+=1,r>=J){if(r=0,e+=1,e>=k)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:O,decompressed:V}}function HG(_,$,j,Z,Q){let Y=Q||I5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let X=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+q+X*(q+8);if(_.byteLength<$+K)return null;let N=$+4,V=J4(_,N,Y);if(!V)return null;N+=V.bytesPerPixel;let W=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);w4(W,j,0,0,j,Z,V.rgba);for(let O=0;O<X;O+=1){let M=J4(_,N,Y);if(!M)return null;if(N+=M.bytesPerPixel,_.byteLength<N+8)return null;let k=new DataView(_.buffer,_.byteOffset+N,8),E=k.getUint16(0,!1),J=k.getUint16(2,!1),D=k.getUint16(4,!1),I=k.getUint16(6,!1);N+=8,w4(W,j,E,J,D,I,M.rgba)}return{consumed:N-$,rgba:W}}function JG(_,$,j,Z,Q,Y){let q=Q||I5,G=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),X=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),K=$,N=[0,0,0,255],V=[255,255,255,255];for(let W=0;W<Z;W+=16){let O=Math.min(16,Z-W);for(let M=0;M<j;M+=16){let k=Math.min(16,j-M);if(_.byteLength<K+1)return null;let E=_[K++];if(E&1){let J=k*O*G;if(_.byteLength<K+J)return null;let D=Y(_.slice(K,K+J),k,O,q);K+=J,J9(X,j,M,W,k,O,D);continue}if(E&2){let J=J4(_,K,q);if(!J)return null;N=J.rgba,K+=J.bytesPerPixel}if(w4(X,j,M,W,k,O,N),E&4){let J=J4(_,K,q);if(!J)return null;V=J.rgba,K+=J.bytesPerPixel}if(E&8){if(_.byteLength<K+1)return null;let J=_[K++];for(let D=0;D<J;D+=1){let I=V;if(E&16){let H=J4(_,K,q);if(!H)return null;I=H.rgba,K+=H.bytesPerPixel}if(_.byteLength<K+2)return null;let i=_[K++],p=_[K++],r=i>>4,e=i&15,f=(p>>4)+1,y=(p&15)+1;w4(X,j,M+r,W+e,f,y,I)}}}}return{consumed:K-$,rgba:X}}var I5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class _6{protocol=o_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:FG,this.pipeline=_.pipeline||null,this.encodings=GG(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...I5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:NG()}receive(_){if(_)this.buffer=KG(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Q=this.consume(12),Y=E5(Q),q=BG(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=WG(q),j.push(VG(this.clientVersionText)),$.push({type:"protocol-version",protocol:o_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Q=this.buffer[0];if(Q===0){if(this.buffer.byteLength<5)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+X)break;this.consume(1);let K=E5(this.consume(4+X).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Q)break;this.consume(1);let Y=Array.from(this.consume(Q));$.push({type:"security-types",protocol:o_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:o_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+G)break;let X=E5(this.consume(4+G).slice(4));throw Error(X||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:o_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:o_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Q=this.consume(16);j.push(U9(this.password,Q)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let G=E5(this.consume(4+q).slice(4));throw Error(G||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:o_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Q.getUint16(0,!1),q=Q.getUint16(2,!1),G=L9(Q,4),X=Q.getUint32(20,!1);if(this.buffer.byteLength<24+X)break;let K=this.consume(24),N=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=N.getUint16(0,!1),this.framebufferHeight=N.getUint16(2,!1),this.serverPixelFormat=L9(N,4),this.serverName=E5(this.consume(X)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(UG(this.clientPixelFormat)),j.push(LG(this.encodings)),j.push(F9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:o_,width:Y,height:q,name:this.serverName,pixelFormat:G}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Q=this.buffer[0];if(Q===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),G=4,X=[],K=!1,N=!!this.pipeline;for(let W=0;W<q;W+=1){if(this.buffer.byteLength<G+12){K=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,12),M=O.getUint16(0,!1),k=O.getUint16(2,!1),E=O.getUint16(4,!1),J=O.getUint16(6,!1),D=O.getInt32(8,!1);if(G+=12,D===0){let I=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),i=E*J*I;if(this.buffer.byteLength<G+i){K=!0;break}let p=this.buffer.slice(G,G+i);if(G+=i,N)this.pipeline.processRawRect(p,M,k,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:M,y:k,width:E,height:J});else X.push({kind:"rgba",x:M,y:k,width:E,height:J,rgba:this.decodeRawRect(p,E,J,this.clientPixelFormat)});continue}if(D===2){let I=HG(this.buffer,G,E,J,this.clientPixelFormat);if(!I){K=!0;break}if(N){let i=this.buffer.slice(G,G+I.consumed);this.pipeline.processRreRect(i,M,k,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:M,y:k,width:E,height:J})}else X.push({kind:"rgba",x:M,y:k,width:E,height:J,rgba:I.rgba});G+=I.consumed;continue}if(D===1){if(this.buffer.byteLength<G+4){K=!0;break}let I=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,4),i=I.getUint16(0,!1),p=I.getUint16(2,!1);if(G+=4,N)this.pipeline.processCopyRect(M,k,E,J,i,p),X.push({kind:"pipeline",x:M,y:k,width:E,height:J});else X.push({kind:"copy",x:M,y:k,width:E,height:J,srcX:i,srcY:p});continue}if(D===16){let I=zG(this.buffer,G,E,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!I){K=!0;break}if(G+=I.consumed,I.skipped)continue;if(N&&I.decompressed)this.pipeline.processZrleTileData(I.decompressed,M,k,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:M,y:k,width:E,height:J});else X.push({kind:"rgba",x:M,y:k,width:E,height:J,rgba:I.rgba});continue}if(D===5){let I=JG(this.buffer,G,E,J,this.clientPixelFormat,this.decodeRawRect);if(!I){K=!0;break}if(N){let i=this.buffer.slice(G,G+I.consumed);this.pipeline.processHextileRect(i,M,k,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:M,y:k,width:E,height:J})}else X.push({kind:"rgba",x:M,y:k,width:E,height:J,rgba:I.rgba});G+=I.consumed;continue}if(D===-223){if(this.framebufferWidth=E,this.framebufferHeight=J,N)this.pipeline.initFramebuffer(E,J);X.push({kind:"resize",x:M,y:k,width:E,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(G);let V={type:"framebuffer-update",protocol:o_,width:this.framebufferWidth,height:this.framebufferHeight,rects:X};if(N)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(F9(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Q===2){this.consume(1),$.push({type:"bell",protocol:o_}),Z=!0;continue}if(Q===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let G=E5(this.consume(q));$.push({type:"clipboard",protocol:o_,text:G}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Q}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var Y4="piclaw://vnc";function OG(_){let $=String(_||"");if($===Y4)return null;if(!$.startsWith(`${Y4}/`))return null;let j=$.slice(`${Y4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function e4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function DG(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function AG(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function EG(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function MG(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function kG(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class O9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=OG($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=kG("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Q=MG(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Q)return;this.authPassword=$8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Q,Q)};this.directHostInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Q of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Q.addEventListener("click",()=>{let Y=Q.getAttribute("data-target-open-tab"),q=Q.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=$8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=$8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Q=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Q}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=r7($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return i7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(a8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=P$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~P$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of n7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(o7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=C$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??C$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Q of _.rects||[])if(Q.kind==="resize")this.ensureCanvasSize(Q.width,Q.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Q=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Q,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new _6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Q of Z.outgoing||[])this.socketBoundary?.send?.(Q);for(let Q of Z.events||[])this.applyRemoteDisplayEvent(Q)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await d7(),Q={};if(Z)Q.pipeline=Z,Q.decodeRawRect=(G,X,K,N)=>Z.decodeRawRectToRgba(G,X,K,N);let Y=$8(this.authPassword);if(Y!==null)Q.password=Y;if(j)Q.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new _6(Q),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new k$({url:EG(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(G)=>{this.applyMetrics(G)},onMessage:(G)=>{this.handleSocketMessage(G)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await DG(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${e4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await AG(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var m$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===Y4||$.startsWith(`${Y4}/`)?9000:!1},mount(_,$){return new O9(_,$)}};function f4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function IG(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Q=Z?.[1]||j,Y=Z?.[2]||"",q=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),K=Q.startsWith("/")?Q:`${G?`${G}/`:""}${Q}`,N=[];for(let W of K.split("/")){if(!W||W===".")continue;if(W===".."){if(N.length>0)N.pop();continue}N.push(W)}let V=N.join("/");return`${k8(V)}${Y}${q}`}function q8(_){return _?.preview||null}function TG(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Q=Z.lastIndexOf(".");if(Q<=0||Q===Z.length-1)return"none";return Z.slice(Q+1)}function PG(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function CG(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${f4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${f4(f_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${f4(a4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${f4(PG($))}</span>`),Z.push(`<span><strong>extension:</strong> ${f4(TG(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${f4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function SG(_){let $=q8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=CG(_,$);if($.kind==="image"){let Z=$.url||($.path?k8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${f4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=O_($.text||"",null,{rewriteImageSrc:(Q)=>IG(Q,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${f4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class h${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=SG(this.context)}getContent(){let _=q8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=q8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var p$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=q8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new h$(_,$)}},c$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return q8(_)||_?.path?1:!1},mount(_,$){return new h$(_,$)}};var xG=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),yG={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},RG={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function A9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function D9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class E9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Q=A9(j),Y=RG[Q]||"\uD83D\uDCC4",q=yG[Q]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${D9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${D9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let X=G.querySelector("#ov-open-tab");if(X)X.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class M9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Q=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Q)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=A9(_?.path);if(!$||!xG.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new E9(_,$);return new M9(_,$)}};var wG=/\.(csv|tsv)$/i;function k9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class I9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Q=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${k9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${k9(Q)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class T9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var d$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!wG.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new I9(_,$);return new T9(_,$)}};var fG=/\.pdf$/i;function vG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class P9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${vG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let Y=Q.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class C9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var i$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!fG.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new P9(_,$);return new C9(_,$)}};var bG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function n$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class S9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Q=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
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
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class x9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var o$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!bG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new S9(_,$);return new x9(_,$)}};var uG=/\.(mp4|m4v|mov|webm|ogv)$/i;function gG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class y9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${gG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let Y=Q.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class R9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var r$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!uG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new y9(_,$);return new R9(_,$)}};function mG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function hG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var s$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function w9(_){let $=String(_||"").trim();return $?$:s$}function pG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function cG(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function lG(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(q,G,X,K,N,V){try{if(q&&X!=null&&j({filename:q,format:G,data:X,mimeType:K,base64Encoded:Boolean(N),defaultMode:V}))return}catch(W){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",W)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Q=_.App;if(Q?.prototype&&!Q.prototype.__piclawExportPatched){let Y=Q.prototype.exportFile;Q.prototype.exportFile=function(q,G,X,K,N,V){try{if(G&&j({filename:G,data:q,mimeType:X,base64Encoded:Boolean(K),mode:N,folderId:V}))return}catch(W){console.warn("[drawio-pane] export intercept failed, falling back to native export",W)}return Y.apply(this,arguments)},Q.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Q?.prototype&&Q.prototype.__piclawExportPatched)}catch{return!1}}async function f9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${cG(j)}`}class v9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${hG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Q);let Y=Q.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class b9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=pG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Q=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(lG(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=s$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await f9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await f9(_,"image/png");else this.xmlData=w9(await _.text());else if(_.status===404)this.xmlData=s$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?w9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var a$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!mG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new v9(_,$);return new b9(_,$)}};var dG=/\.mindmap\.ya?ml$/i,t$=String(Date.now());function u9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function e$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Q,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Q(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function iG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function nG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Z)}class g9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Q.innerHTML=`
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
            </div>`,_.appendChild(Q),Q.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class m9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(u9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,iG("/static/css/mindmap.css"),await Promise.all([e$("/static/js/vendor/d3-mindmap.min.js?v="+t$),e$("/static/js/vendor/js-yaml.min.js?v="+t$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),nG(this.mindmapEl);let j=u9(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await e$("/static/js/vendor/mindmap-editor.js?v="+t$),this.disposed)return;let Q=window.__mindmapEditor;if(!Q)throw Error("__mindmapEditor not found");if(Q.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Y)}`}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[mindmap] Failed to load mindmap renderer:",Q),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var _3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!dG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new g9(_,$);return new m9(_,$)}};var oG=/\.kanban\.md$/i,rG=String(Date.now());function h9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function sG(){let _=window;if(_.preact)return;_.preact={h:D8,render:x4,Component:V5,createContext:W2},_.preactHooks={useState:h,useEffect:m,useCallback:C,useRef:P,useMemo:v0,useReducer:I6,useContext:F2,useLayoutEffect:g5,useImperativeHandle:L2,useErrorBoundary:H2,useDebugValue:z2},_.htm={bind:()=>L}}function aG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Q,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Q(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function tG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class p9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Q.innerHTML=`
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
        `,_.appendChild(Q),Q.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class c9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(h9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,tG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=h9();try{if(sG(),await aG("/static/js/vendor/kanban-editor.js?v="+rG),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Q)=>{this.lastContent=Q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var $3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!oG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new p9(_,$);return new c9(_,$)}};class l9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Q)=>Q===_?$:Q),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new l9;var $6="workspaceExplorerScale",eG=["compact","default","comfortable"],_K=new Set(eG),$K={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function d9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return _K.has(j)?j:$}function j3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function jK(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function ZK(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Z3(_={}){let $=jK(_),j=_.stored?d9(_.stored,$):$;return ZK(j,_)}function i9(_){return $K[d9(_)]}function QK(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function Q3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function n9(_,$,j={}){let Z=j?.resolvePane;if(Q3(_,Z))return!0;return QK($)}var YK=60000,a9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function qK(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Q3($,(j)=>n0.resolve(j))}function t9(_,$,j,Z=0,Q=[]){if(!j&&a9(_))return Q;if(!_)return Q;if(Q.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)t9(Y,$,j,Z+1,Q);return Q}function o9(_,$,j){if(!_)return"";let Z=[],Q=(Y)=>{if(!j&&a9(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Q(q)};return Q(_),Z.join("|")}function K3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Q=j?new Map(j.map((G)=>[G?.path,G])):new Map,Y=!j||j.length!==Z.length,q=Z.map((G)=>{let X=K3(Q.get(G.path),G);if(X!==Q.get(G.path))Y=!0;return X});return Y?{...$,children:q}:_}function q3(_,$,j){if(!_)return _;if(_.path===$)return K3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Q=_.children.map((Y)=>{let q=q3(Y,$,j);if(q!==Y)Z=!0;return q});return Z?{..._,children:Q}:_}var e9=4,Y3=14,GK=8,KK=16;function _j(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=_j(Z);return _.__bytes=j,j}function $j(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=e9)return Z;let Q=Array.isArray(_.children)?_.children:[],Y=[];for(let G of Q){let X=Math.max(0,Number(G?.__bytes??G?.size??0));if(X<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:X});else Y.push({kind:"file",name:G.name,path:G.path,size:X})}Y.sort((G,X)=>X.size-G.size);let q=Y;if(Y.length>Y3){let G=Y.slice(0,Y3-1),X=Y.slice(Y3-1),K=X.reduce((N,V)=>N+V.size,0);G.push({kind:"other",name:`+${X.length} more`,path:`${Z.path}/[other]`,size:K}),q=G}return Z.children=q.map((G)=>{if(G.kind==="dir")return $j(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function r9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function jj(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Q=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Q}% ${Y}%)`}function j6(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function X3(_,$,j,Z,Q,Y){let q=Math.PI*2-0.0001,G=Y-Q>q?Q+q:Y,X=j6(_,$,Z,Q),K=j6(_,$,Z,G),N=j6(_,$,j,G),V=j6(_,$,j,Q),W=G-Q>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${W} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${j} ${j} 0 ${W} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var Zj={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function Qj(_,$,j){let Z=[],Q=[],Y=Math.max(0,Number($)||0),q=(G,X,K,N)=>{let V=Array.isArray(G?.children)?G.children:[];if(!V.length)return;let W=Math.max(0,Number(G.size)||0);if(W<=0)return;let O=K-X,M=X;V.forEach((k,E)=>{let J=Math.max(0,Number(k.size)||0);if(J<=0)return;let D=J/W,I=M,i=E===V.length-1?K:M+O*D;if(M=i,i-I<0.003)return;let p=Zj[N];if(p){let r=jj(I,N,j);if(Z.push({key:k.path,path:k.path,label:k.name,size:J,color:r,depth:N,startAngle:I,endAngle:i,innerRadius:p[0],outerRadius:p[1],d:X3(120,120,p[0],p[1],I,i)}),N===1)Q.push({key:k.path,name:k.name,size:J,pct:Y>0?J/Y*100:0,color:r})}if(N<e9)q(k,I,i,N+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Q}}function G3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Q=G3(Z,$);if(Q)return Q}return null}function Yj(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Q=Zj[1];if(!Q)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,G=jj(Y,1,Z),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:G,depth:1,startAngle:Y,endAngle:q,innerRadius:Q[0],outerRadius:Q[1],d:X3(120,120,Q[0],Q[1],Y,q)}],legend:[{key:K,name:_,size:j,pct:100,color:G}]}}function s9(_,$=!1,j=!1){if(!_)return null;let Z=_j(_),Q=$j(_,0),Y=Q.size||Z,{segments:q,legend:G}=Qj(Q,Y,j);if(!q.length&&Y>0){let X=Yj("[files]",Q.path,Y,j);q=X.segments,G=X.legend}return{root:Q,totalSize:Y,segments:q,legend:G,truncated:$,isDarkTheme:j}}function XK({payload:_}){if(!_)return null;let[$,j]=h(null),[Z,Q]=h(_?.root?.path||"."),[Y,q]=h(()=>[_?.root?.path||"."]),[G,X]=h(!1);m(()=>{let H=_?.root?.path||".";Q(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!Z)return;X(!0);let H=setTimeout(()=>X(!1),180);return()=>clearTimeout(H)},[Z]);let K=v0(()=>{return G3(_.root,Z)||_.root},[_?.root,Z]),N=K?.size||_.totalSize||0,{segments:V,legend:W}=v0(()=>{let H=Qj(K,N,_.isDarkTheme);if(H.segments.length>0)return H;if(N<=0)return H;let S=K?.children?.length?"Total":"[files]";return Yj(S,K?.path||_?.root?.path||".",N,_.isDarkTheme)},[K,N,_.isDarkTheme,_?.root?.path]),[O,M]=h(V),k=P(new Map),E=P(0);m(()=>{let H=k.current,S=new Map(V.map(($0)=>[$0.key,$0])),c=performance.now(),G0=220,d=($0)=>{let _0=Math.min(1,($0-c)/220),X0=_0*(2-_0),V0=V.map((B0)=>{let E0=H.get(B0.key)||{startAngle:B0.startAngle,endAngle:B0.startAngle,innerRadius:B0.innerRadius,outerRadius:B0.innerRadius},M0=(s0,h0)=>s0+(h0-s0)*X0,o0=M0(E0.startAngle,B0.startAngle),y0=M0(E0.endAngle,B0.endAngle),T0=M0(E0.innerRadius,B0.innerRadius),r0=M0(E0.outerRadius,B0.outerRadius);return{...B0,d:X3(120,120,T0,r0,o0,y0)}});if(M(V0),_0<1)E.current=requestAnimationFrame(d)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(d),k.current=S,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let J=O.length?O:V,D=N>0?f_(N):"0 B",I=K?.name||"",p=(I&&I!=="."?I:"Total")||"Total",r=D,e=Y.length>1,f=(H)=>{if(!H?.path)return;let S=G3(_.root,H.path);if(!S||!Array.isArray(S.children)||S.children.length===0)return;q((c)=>[...c,S.path]),Q(S.path),j(null)},y=()=>{if(!e)return;q((H)=>{let S=H.slice(0,-1);return Q(S[S.length-1]||_?.root?.path||"."),S}),j(null)};return L`
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
                        onClick=${()=>f(H)}
                    >
                        <title>${H.label} — ${f_(H.size)}</title>
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${r}</text>
                </g>
            </svg>
            ${W.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${W.slice(0,8).map((H)=>L`
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
    `}function NK({mediaId:_}){let[$,j]=h(null);if(m(()=>{if(!_)return;L5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Q=$.metadata?.size?f_($.metadata.size):"";return L`
        <a href=${w_(_)} download=${Z} class="file-attachment"
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
    `}function qj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Q,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:G=!1}){let[X,K]=h(null),[N,V]=h(new Set(["."])),[W,O]=h(null),[M,k]=h(null),[E,J]=h(""),[D,I]=h(null),[i,p]=h(null),[r,e]=h(!0),[f,y]=h(!1),[H,S]=h(null),[c,G0]=h(()=>F5("workspaceShowHidden",!1)),[d,$0]=h(!1),[_0,X0]=h(null),[V0,B0]=h(null),[J0,E0]=h(null),[M0,o0]=h(!1),[y0,T0]=h(null),[r0,s0]=h(()=>r9()),[h0,t0]=h(()=>Z3({stored:J_($6),...j3()})),[p0,j1]=h(!1),z0=P(N),l0=P(""),Z1=P(null),Y1=P(0),K_=P(new Set),D1=P(null),_1=P(new Map),m1=P(_),M1=P(Z),q1=P(null),c0=P(null),x1=P(null),k1=P(null),a=P(null),W0=P(null),H0=P("."),N0=P(null),R0=P({path:null,dragging:!1,startX:0,startY:0}),S0=P({path:null,dragging:!1,startX:0,startY:0}),b0=P({path:null,timer:0}),I0=P(!1),w0=P(0),i0=P(new Map),D0=P(null),g0=P(null),O0=P(null),Q0=P(null),R=P(null),t=P(null),F0=P(c),k0=P($),u0=P(j??$),G1=P(0),A1=P(J0),X1=P(d),h1=P(_0),q4=P(null),U_=P({x:0,y:0}),__=P(0),L_=P(null),X_=P(W),Q1=P(M),o1=P(null),G4=P(D);m1.current=_,M1.current=Z,m(()=>{z0.current=N},[N]),m(()=>{F0.current=c},[c]),m(()=>{k0.current=$},[$]),m(()=>{u0.current=j??$},[j,$]),m(()=>{A1.current=J0},[J0]),m(()=>{if(typeof window>"u")return;let z=()=>{t0(Z3({stored:J_($6),...j3()}))};z();let T=()=>z(),v=()=>z(),b=(j0)=>{if(!j0||j0.key===null||j0.key===$6)z()};window.addEventListener("resize",T),window.addEventListener("focus",v),window.addEventListener("storage",b);let o=window.matchMedia?.("(pointer: coarse)"),K0=window.matchMedia?.("(hover: none)"),U0=(j0,C0)=>{if(!j0)return;if(j0.addEventListener)j0.addEventListener("change",C0);else if(j0.addListener)j0.addListener(C0)},L0=(j0,C0)=>{if(!j0)return;if(j0.removeEventListener)j0.removeEventListener("change",C0);else if(j0.removeListener)j0.removeListener(C0)};return U0(o,T),U0(K0,T),()=>{window.removeEventListener("resize",T),window.removeEventListener("focus",v),window.removeEventListener("storage",b),L0(o,T),L0(K0,T)}},[]),m(()=>{let z=(T)=>{let v=T?.detail?.path;if(!v)return;let b=v.split("/"),o=[];for(let K0=1;K0<b.length;K0++)o.push(b.slice(0,K0).join("/"));if(o.length)V((K0)=>{let U0=new Set(K0);U0.add(".");for(let L0 of o)U0.add(L0);return U0});O(v),requestAnimationFrame(()=>{let K0=document.querySelector(`[data-path="${CSS.escape(v)}"]`);if(K0)K0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),m(()=>{X1.current=d},[d]),m(()=>{h1.current=_0},[_0]),m(()=>{X_.current=W},[W]),m(()=>{Q1.current=M},[M]),m(()=>{G4.current=D},[D]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>s0(r9());z();let T=window.matchMedia?.("(prefers-color-scheme: dark)"),v=()=>z();if(T?.addEventListener)T.addEventListener("change",v);else if(T?.addListener)T.addListener(v);let b=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(b?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)b?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(T?.removeEventListener)T.removeEventListener("change",v);else if(T?.removeListener)T.removeListener(v);b?.disconnect()}},[]),m(()=>{if(!M)return;let z=a.current;if(!z)return;let T=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(T)},[M]),m(()=>{if(!p0)return;let z=(v)=>{let b=v?.target;if(!(b instanceof Element))return;if(R.current?.contains(b))return;if(t.current?.contains(b))return;j1(!1)},T=(v)=>{if(v?.key==="Escape")j1(!1),t.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",T)}},[p0]);let v_=async(z,T={})=>{let v=Boolean(T?.autoOpen),b=String(z||"").trim();y(!0),I(null),p(null);try{let o=await c5(b,20000);if(v&&b&&n9(b,o,{resolvePane:(K0)=>n0.resolve(K0)}))return M1.current?.(b,o),o;return I(o),o}catch(o){let K0={error:o.message||"Failed to load preview"};return I(K0),K0}finally{y(!1)}};q1.current=v_;let _5=async()=>{if(!k0.current)return;try{let z=await p5("",1,F0.current),T=o9(z.root,z0.current,F0.current);if(T===l0.current){e(!1);return}if(l0.current=T,Z1.current=z.root,!Y1.current)Y1.current=requestAnimationFrame(()=>{Y1.current=0,K((v)=>K3(v,Z1.current)),e(!1)})}catch(z){S(z.message||"Failed to load workspace"),e(!1)}},v4=async(z)=>{if(!z)return;if(K_.current.has(z))return;K_.current.add(z);try{let T=await p5(z,1,F0.current);K((v)=>q3(v,z,T.root))}catch(T){S(T.message||"Failed to load workspace")}finally{K_.current.delete(z)}};c0.current=v4;let b1=C(()=>{let z=W;if(!z)return".";let T=_1.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let v=z.split("/");return v.pop(),v.join("/")||"."},[W]),F_=C((z)=>{let T=z?.closest?.(".workspace-row");if(!T)return null;let v=T.dataset.path,b=T.dataset.type;if(!v)return null;if(b==="dir")return v;if(v.includes("/")){let o=v.split("/");return o.pop(),o.join("/")||"."}return"."},[]),y1=C((z)=>{return F_(z?.target||null)},[F_]),E1=C((z)=>{A1.current=z,E0(z)},[]),N1=C(()=>{let z=b0.current;if(z?.timer)clearTimeout(z.timer);b0.current={path:null,timer:0}},[]),b_=C((z)=>{if(!z||z==="."){N1();return}let T=_1.current?.get(z);if(!T||T.type!=="dir"){N1();return}if(z0.current?.has(z)){N1();return}if(b0.current?.path===z)return;N1();let v=setTimeout(()=>{b0.current={path:null,timer:0},c0.current?.(z),V((b)=>{let o=new Set(b);return o.add(z),o})},600);b0.current={path:z,timer:v}},[N1]),u_=C((z,T)=>{if(U_.current={x:z,y:T},__.current)return;__.current=requestAnimationFrame(()=>{__.current=0;let v=q4.current;if(!v)return;let b=U_.current;v.style.transform=`translate(${b.x+12}px, ${b.y+12}px)`})},[]),V1=C((z)=>{if(!z)return;let v=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!v)return;B0({path:z,label:v})},[]),$_=C(()=>{if(B0(null),__.current)cancelAnimationFrame(__.current),__.current=0;if(q4.current)q4.current.style.transform="translate(-9999px, -9999px)"},[]),m0=C((z)=>{if(!z)return".";let T=_1.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let v=z.split("/");return v.pop(),v.join("/")||"."},[]),P1=C(()=>{k(null),J("")},[]),A_=C((z)=>{if(!z)return;let v=(_1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!v||z===".")return;k(z),J(v)},[]),j_=C(async()=>{let z=Q1.current;if(!z)return;let T=(E||"").trim();if(!T){P1();return}let v=_1.current?.get(z),b=(v?.name||z.split("/").pop()||z).trim();if(T===b){P1();return}try{let K0=(await l6(z,T))?.path||z,U0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(P1(),S(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:K0,type:v?.type||"file"}})),v?.type==="dir")V((L0)=>{let j0=new Set;for(let C0 of L0)if(C0===z)j0.add(K0);else if(C0.startsWith(`${z}/`))j0.add(`${K0}${C0.slice(z.length)}`);else j0.add(C0);return j0});if(O(K0),v?.type==="dir")I(null),y(!1),p(null);else q1.current?.(K0);c0.current?.(U0)}catch(o){S(o?.message||"Failed to rename file")}},[P1,E]),b4=C(async(z)=>{let b=z||".";for(let o=0;o<50;o+=1){let U0=`untitled${o===0?"":`-${o}`}.md`;try{let j0=(await c6(b,U0,""))?.path||(b==="."?U0:`${b}/${U0}`);if(b&&b!==".")V((C0)=>new Set([...C0,b]));O(j0),S(null),c0.current?.(b),q1.current?.(j0);return}catch(L0){if(L0?.status===409||L0?.code==="file_exists")continue;S(L0?.message||"Failed to create file");return}}S("Failed to create file (untitled name already in use).")},[]),r_=C((z)=>{if(z?.stopPropagation?.(),M0)return;let T=m0(X_.current);b4(T)},[M0,m0,b4]);m(()=>{if(typeof window>"u")return;let z=(T)=>{let v=T?.detail?.updates||[];if(!Array.isArray(v)||v.length===0)return;K((L0)=>{let j0=L0;for(let C0 of v){if(!C0?.root)continue;if(!j0||C0.path==="."||!C0.path)j0=C0.root;else j0=q3(j0,C0.path,C0.root)}if(j0)l0.current=o9(j0,z0.current,F0.current);return e(!1),j0});let b=X_.current;if(Boolean(b)&&v.some((L0)=>{let j0=L0?.path||"";if(!j0||j0===".")return!0;return b===j0||b.startsWith(`${j0}/`)||j0.startsWith(`${b}/`)}))i0.current.clear();if(!b||!G4.current)return;let K0=_1.current?.get(b);if(K0&&K0.type==="dir")return;if(v.some((L0)=>{let j0=L0?.path||"";if(!j0||j0===".")return!0;return b===j0||b.startsWith(`${j0}/`)}))q1.current?.(b)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),D1.current=_5;let u4=P(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),T=u0.current??k0.current,v=document.visibilityState!=="hidden"&&(T||z.matches&&k0.current);l5(v,F0.current).catch(()=>{})}).current,s_=P(0),$5=P(()=>{if(s_.current)clearTimeout(s_.current);s_.current=setTimeout(()=>{s_.current=0,u4()},250)}).current;m(()=>{if(k0.current)D1.current?.();$5()},[$,j]),m(()=>{D1.current(),u4();let z=setInterval(()=>D1.current(),YK),T=z5("previewHeight",null),v=Number.isFinite(T)?Math.min(Math.max(T,80),600):280;if(w0.current=v,x1.current)x1.current.style.setProperty("--preview-height",`${v}px`);let b=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),o=()=>$5();if(b.addEventListener)b.addEventListener("change",o);else if(b.addListener)b.addListener(o);return document.addEventListener("visibilitychange",o),()=>{if(clearInterval(z),Y1.current)cancelAnimationFrame(Y1.current),Y1.current=0;if(b.removeEventListener)b.removeEventListener("change",o);else if(b.removeListener)b.removeListener(o);if(document.removeEventListener("visibilitychange",o),s_.current)clearTimeout(s_.current),s_.current=0;if(N0.current)clearTimeout(N0.current),N0.current=null;l5(!1,F0.current).catch(()=>{})}},[]);let a_=v0(()=>t9(X,N,c),[X,N,c]),g_=v0(()=>new Map(a_.map((z)=>[z.node.path,z.node])),[a_]),T5=v0(()=>i9(h0),[h0]);_1.current=g_;let B1=(W?_1.current.get(W):null)?.type==="dir";m(()=>{if(!W||!B1){T0(null),D0.current=null,g0.current=null;return}let z=W,T=`${c?"hidden":"visible"}:${W}`,v=i0.current,b=v.get(T);if(b?.root){v.delete(T),v.set(T,b);let U0=s9(b.root,Boolean(b.truncated),r0);if(U0)D0.current=U0,g0.current=W,T0({loading:!1,error:null,payload:U0});return}let o=D0.current,K0=g0.current;T0({loading:!0,error:null,payload:K0===W?o:null}),p5(W,GK,c).then((U0)=>{if(X_.current!==z)return;let L0={root:U0?.root,truncated:Boolean(U0?.truncated)};v.delete(T),v.set(T,L0);while(v.size>KK){let C0=v.keys().next().value;if(!C0)break;v.delete(C0)}let j0=s9(L0.root,L0.truncated,r0);D0.current=j0,g0.current=W,T0({loading:!1,error:null,payload:j0})}).catch((U0)=>{if(X_.current!==z)return;T0({loading:!1,error:U0?.message||"Failed to load folder size chart",payload:K0===W?o:null})})},[W,B1,c,r0]);let R1=Boolean(D&&D.kind==="text"&&!B1&&(!D.size||D.size<=262144)),j5=R1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",E_=Boolean(W&&W!=="."),Z_=Boolean(W&&!B1),p1=Boolean(W&&!B1),C1=W&&B1?I8(W,c):null,u1=C(()=>j1(!1),[]),z1=C(async(z)=>{u1();try{await z?.()}catch(T){console.warn("[workspace-explorer] Header menu action failed:",T)}},[u1]);m(()=>{let z=O0.current;if(Q0.current)Q0.current.dispose(),Q0.current=null;if(!z)return;if(z.innerHTML="",!W||B1||!D||D.error)return;let T={path:W,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},v=n0.resolve(T)||n0.get("workspace-preview-default");if(!v)return;let b=v.mount(z,T);return Q0.current=b,()=>{if(Q0.current===b)b.dispose(),Q0.current=null;z.innerHTML=""}},[W,B1,D]);let M_=(z)=>{let T=z?.target;if(T instanceof Element)return T;return T?.parentElement||null},k_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},I_=P((z)=>{let T=M_(z),v=T?.closest?.("[data-path]");if(!v)return;let b=v.dataset.path;if(!b||b===".")return;let o=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),K0=Boolean(T?.closest?.(".workspace-caret"));if(o||K0)return;if(Q1.current===b)return;A_(b)}).current,t_=P((z)=>{if(I0.current){I0.current=!1;return}let T=M_(z),v=T?.closest?.("[data-path]");if(k1.current?.focus?.(),!v)return;let b=v.dataset.path,o=v.dataset.type,K0=Boolean(T?.closest?.(".workspace-caret")),U0=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),L0=X_.current===b,j0=Q1.current;if(j0){if(j0===b)return;P1()}let C0=o==="file"&&o1.current===b&&!K0&&!U0;if(o==="dir"){if(o1.current=null,O(b),I(null),p(null),y(!1),!z0.current.has(b))c0.current?.(b);if(L0&&!K0)return;V((Y_)=>{let c1=new Set(Y_);if(c1.has(b))c1.delete(b);else c1.add(b);return c1})}else{o1.current=null,O(b);let w1=_1.current.get(b);if(w1)m1.current?.(w1.path,w1);if(!U0&&!K0&&qK(b))M1.current?.(b,G4.current);else{let c1=!U0&&!K0;q1.current?.(b,{autoOpen:c1})}}}).current,Q_=P(()=>{l0.current="",D1.current(),Array.from(z0.current||[]).filter((T)=>T&&T!==".").forEach((T)=>c0.current?.(T))}).current,r1=P(()=>{o1.current=null,O(null),I(null),p(null),y(!1)}).current,T_=P(()=>{G0((z)=>{let T=!z;if(typeof window<"u")K1("workspaceShowHidden",String(T));return F0.current=T,l5(!0,T).catch(()=>{}),l0.current="",D1.current?.(),Array.from(z0.current||[]).filter((b)=>b&&b!==".").forEach((b)=>c0.current?.(b)),T})}).current,K4=P((z)=>{if(M_(z)?.closest?.("[data-path]"))return;r1()}).current,H1=C(async(z)=>{if(!z)return;let T=z.split("/").pop()||z;if(!window.confirm(`Delete "${T}"? This cannot be undone.`))return;try{await i6(z);let b=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(X_.current===z)r1();c0.current?.(b),S(null)}catch(b){I((o)=>({...o||{},error:b.message||"Failed to delete file"}))}},[r1]),e_=C((z)=>{let T=k1.current;if(!T||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;T.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),g4=C((z)=>{let T=a_;if(!T||T.length===0)return;let v=W?T.findIndex((b)=>b.node.path===W):-1;if(z.key==="ArrowDown"){z.preventDefault();let b=Math.min(v+1,T.length-1),o=T[b];if(!o)return;if(O(o.node.path),o.node.type!=="dir")m1.current?.(o.node.path,o.node),q1.current?.(o.node.path);else I(null),y(!1),p(null);e_(o.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let b=v<=0?0:v-1,o=T[b];if(!o)return;if(O(o.node.path),o.node.type!=="dir")m1.current?.(o.node.path,o.node),q1.current?.(o.node.path);else I(null),y(!1),p(null);e_(o.node.path);return}if(z.key==="ArrowRight"&&v>=0){let b=T[v];if(b?.node?.type==="dir"&&!N.has(b.node.path))z.preventDefault(),c0.current?.(b.node.path),V((o)=>new Set([...o,b.node.path]));return}if(z.key==="ArrowLeft"&&v>=0){let b=T[v];if(b?.node?.type==="dir"&&N.has(b.node.path))z.preventDefault(),V((o)=>{let K0=new Set(o);return K0.delete(b.node.path),K0});return}if(z.key==="Enter"&&v>=0){z.preventDefault();let b=T[v];if(!b)return;let o=b.node.path;if(b.node.type==="dir"){if(!z0.current.has(o))c0.current?.(o);V((U0)=>{let L0=new Set(U0);if(L0.has(o))L0.delete(o);else L0.add(o);return L0}),I(null),p(null),y(!1)}else m1.current?.(o,b.node),q1.current?.(o);return}if((z.key==="Delete"||z.key==="Backspace")&&v>=0){let b=T[v];if(!b||b.node.type==="dir")return;z.preventDefault(),H1(b.node.path);return}if(z.key==="Escape")z.preventDefault(),r1()},[r1,H1,N,a_,e_,W]),m4=C((z)=>{let T=M_(z),v=T?.closest?.(".workspace-row");if(!v)return;let b=v.dataset.type,o=v.dataset.path;if(!o||o===".")return;if(Q1.current===o)return;let K0=z?.touches?.[0];if(!K0)return;if(R0.current={path:k_(T)?o:null,dragging:!1,startX:K0.clientX,startY:K0.clientY},b!=="file")return;if(N0.current)clearTimeout(N0.current);N0.current=setTimeout(()=>{if(N0.current=null,R0.current?.dragging)return;H1(o)},600)},[H1]),P_=C(()=>{if(N0.current)clearTimeout(N0.current),N0.current=null;let z=R0.current;if(z?.dragging&&z.path){let T=A1.current||b1(),v=L_.current;if(typeof v==="function")v(z.path,T)}R0.current={path:null,dragging:!1,startX:0,startY:0},G1.current=0,$0(!1),X0(null),E1(null),N1(),$_()},[b1,$_,E1,N1]),h4=C((z)=>{let T=R0.current,v=z?.touches?.[0];if(!v||!T?.path){if(N0.current)clearTimeout(N0.current),N0.current=null;return}let b=Math.abs(v.clientX-T.startX),o=Math.abs(v.clientY-T.startY),K0=b>8||o>8;if(K0&&N0.current)clearTimeout(N0.current),N0.current=null;if(!T.dragging&&K0)T.dragging=!0,$0(!0),X0("move"),V1(T.path);if(T.dragging){z.preventDefault(),u_(v.clientX,v.clientY);let U0=document.elementFromPoint(v.clientX,v.clientY),L0=F_(U0)||b1();if(A1.current!==L0)E1(L0);b_(L0)}},[F_,b1,V1,u_,E1,b_]),Z5=P((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let v=z.clientY,b=w0.current||280,o=z.currentTarget;o.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let K0=v,U0=(j0)=>{K0=j0.clientY;let C0=T.clientHeight-80,w1=Math.min(Math.max(b-(j0.clientY-v),80),C0);T.style.setProperty("--preview-height",`${w1}px`),w0.current=w1},L0=()=>{let j0=T.clientHeight-80,C0=Math.min(Math.max(b-(K0-v),80),j0);w0.current=C0,o.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("previewHeight",String(Math.round(C0))),document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",L0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",L0)}).current,m_=P((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let v=z.touches[0];if(!v)return;let b=v.clientY,o=w0.current||280,K0=z.currentTarget;K0.classList.add("dragging"),document.body.style.userSelect="none";let U0=(j0)=>{let C0=j0.touches[0];if(!C0)return;j0.preventDefault();let w1=T.clientHeight-80,Y_=Math.min(Math.max(o-(C0.clientY-b),80),w1);T.style.setProperty("--preview-height",`${Y_}px`),w0.current=Y_},L0=()=>{K0.classList.remove("dragging"),document.body.style.userSelect="",K1("previewHeight",String(Math.round(w0.current||o))),document.removeEventListener("touchmove",U0),document.removeEventListener("touchend",L0),document.removeEventListener("touchcancel",L0)};document.addEventListener("touchmove",U0,{passive:!1}),document.addEventListener("touchend",L0),document.addEventListener("touchcancel",L0)}).current,h_=async()=>{if(!W)return;try{let z=await p6(W);if(z.media_id)p(z.media_id)}catch(z){I((T)=>({...T||{},error:z.message||"Failed to attach"}))}},O4=async()=>{if(!W||B1)return;await H1(W)},p_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},p4=C((z)=>{if(!p_(z))return;if(z.preventDefault(),G1.current+=1,!X1.current)$0(!0);X0("upload");let T=y1(z)||b1();E1(T),b_(T)},[b1,y1,E1,b_]),c_=C((z)=>{if(!p_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!X1.current)$0(!0);if(h1.current!=="upload")X0("upload");let T=y1(z)||b1();if(A1.current!==T)E1(T);b_(T)},[b1,y1,E1,b_]),C_=C((z)=>{if(!p_(z))return;if(z.preventDefault(),G1.current=Math.max(0,G1.current-1),G1.current===0)$0(!1),X0(null),E1(null),N1()},[E1,N1]),I1=C(async(z,T=".")=>{let v=Array.from(z||[]);if(v.length===0)return;let b=T&&T!==""?T:".",o=b!=="."?b:"workspace root";o0(!0);try{let K0=null;for(let U0 of v)try{K0=await M8(U0,b)}catch(L0){let j0=L0?.status,C0=L0?.code;if(j0===409||C0==="file_exists"){let w1=U0?.name||"file";if(!window.confirm(`"${w1}" already exists in ${o}. Overwrite?`))continue;K0=await M8(U0,b,{overwrite:!0})}else throw L0}if(K0?.path)o1.current=K0.path,O(K0.path),q1.current?.(K0.path);c0.current?.(b)}catch(K0){S(K0.message||"Failed to upload file")}finally{o0(!1)}},[]),D4=C(async(z,T)=>{if(!z)return;let v=_1.current?.get(z);if(!v)return;let b=T&&T!==""?T:".",o=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(b===o)return;try{let U0=(await d6(z,b))?.path||z;if(v.type==="dir")V((L0)=>{let j0=new Set;for(let C0 of L0)if(C0===z)j0.add(U0);else if(C0.startsWith(`${z}/`))j0.add(`${U0}${C0.slice(z.length)}`);else j0.add(C0);return j0});if(O(U0),v.type==="dir")I(null),y(!1),p(null);else q1.current?.(U0);c0.current?.(o),c0.current?.(b)}catch(K0){S(K0?.message||"Failed to move entry")}},[]);L_.current=D4;let A4=C(async(z)=>{if(!p_(z))return;z.preventDefault(),G1.current=0,$0(!1),X0(null),E0(null),N1();let T=Array.from(z?.dataTransfer?.files||[]);if(T.length===0)return;let v=A1.current||y1(z)||b1();await I1(T,v)},[b1,y1,I1]),c4=C((z)=>{if(z?.stopPropagation?.(),M0)return;let T=z?.currentTarget?.dataset?.uploadTarget||".";H0.current=T,W0.current?.click()},[M0]),L1=C(()=>{if(M0)return;let z=X_.current,T=z?_1.current?.get(z):null;H0.current=T?.type==="dir"?T.path:".",W0.current?.click()},[M0]),E4=C(()=>{z1(()=>r_(null))},[z1,r_]),Q5=C(()=>{z1(()=>L1())},[z1,L1]),g1=C(()=>{z1(()=>Q_())},[z1,Q_]),N_=C(()=>{z1(()=>T_())},[z1,T_]),_4=C(()=>{if(!W||!R1)return;z1(()=>M1.current?.(W,D))},[z1,W,R1,D]),l4=C(()=>{if(!W||W===".")return;z1(()=>A_(W))},[z1,W,A_]),X4=C(()=>{if(!W||B1)return;z1(()=>O4())},[z1,W,B1,O4]),M4=C(()=>{if(!W||B1)return;z1(()=>h_())},[z1,W,B1,h_]),N4=C(()=>{if(!C1)return;if(u1(),typeof window<"u")window.open(C1,"_blank","noopener")},[u1,C1]),S_=C(()=>{u1(),Q?.()},[u1,Q]),z_=C(()=>{u1(),Y?.()},[u1,Y]),k4=C(()=>{u1(),q?.()},[u1,q]),d4=C((z)=>{if(!z||z.button!==0)return;let T=z.currentTarget;if(!T||!T.dataset)return;let v=T.dataset.path;if(!v||v===".")return;if(Q1.current===v)return;let b=M_(z);if(b?.closest?.("button, a, input, .workspace-caret"))return;if(!k_(b))return;z.preventDefault(),S0.current={path:v,dragging:!1,startX:z.clientX,startY:z.clientY};let o=(U0)=>{let L0=S0.current;if(!L0?.path)return;let j0=Math.abs(U0.clientX-L0.startX),C0=Math.abs(U0.clientY-L0.startY),w1=j0>4||C0>4;if(!L0.dragging&&w1)L0.dragging=!0,I0.current=!0,$0(!0),X0("move"),V1(L0.path),u_(U0.clientX,U0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(L0.dragging){U0.preventDefault(),u_(U0.clientX,U0.clientY);let Y_=document.elementFromPoint(U0.clientX,U0.clientY),c1=F_(Y_)||b1();if(A1.current!==c1)E1(c1);b_(c1)}},K0=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",K0);let U0=S0.current;if(U0?.dragging&&U0.path){let L0=A1.current||b1(),j0=L_.current;if(typeof j0==="function")j0(U0.path,L0)}S0.current={path:null,dragging:!1,startX:0,startY:0},G1.current=0,$0(!1),X0(null),E1(null),N1(),$_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{I0.current=!1},0)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",K0)},[F_,b1,V1,u_,$_,E1,b_,N1]),x_=C(async(z)=>{let T=Array.from(z?.target?.files||[]);if(T.length===0)return;let v=H0.current||".";if(await I1(T,v),H0.current=".",z?.target)z.target.value=""},[I1]);return L`
        <aside
            class=${`workspace-sidebar${d?" workspace-drop-active":""}`}
            data-workspace-scale=${h0}
            ref=${x1}
            onDragEnter=${p4}
            onDragOver=${c_}
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
                            <div class="workspace-menu-dropdown" ref=${R} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${E4} disabled=${M0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Q5} disabled=${M0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${g1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${c?" active":""}`} role="menuitem" onClick=${N_}>
                                    ${c?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${W&&L`<div class="workspace-menu-separator"></div>`}
                                ${W&&!B1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${_4} disabled=${!R1}>Open in editor</button>
                                `}
                                ${E_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l4}>Rename selected</button>
                                `}
                                ${p1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M4}>Download selected file</button>
                                `}
                                ${C1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${N4}>Download selected folder (zip)</button>
                                `}
                                ${Z_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${X4}>Delete selected file</button>
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
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k4}>
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
            <div class="workspace-tree" onClick=${K4}>
                ${M0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${r&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${X&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${k1}
                        tabIndex="0"
                        onClick=${t_}
                        onDblClick=${I_}
                        onKeyDown=${g4}
                        onTouchStart=${m4}
                        onTouchEnd=${P_}
                        onTouchMove=${h4}
                        onTouchCancel=${P_}
                    >
                        ${a_.map(({node:z,depth:T})=>{let v=z.type==="dir",b=z.path===W,o=z.path===M,K0=v&&N.has(z.path),U0=J0&&z.path===J0,L0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${b?" selected":""}${U0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+T*T5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${d4}
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
                                    ${o?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${a}
                                                value=${E}
                                                onInput=${(j0)=>J(j0?.target?.value||"")}
                                                onKeyDown=${(j0)=>{if(j0.key==="Enter")j0.preventDefault(),j_();else if(j0.key==="Escape")j0.preventDefault(),P1()}}
                                                onBlur=${P1}
                                                onClick=${(j0)=>j0.stopPropagation()}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${Z5} onTouchStart=${m_}></div>
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
                            ${!B1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>R1&&M1.current?.(W,D)}
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
                            ${B1?L`
                                    <button class="workspace-download" onClick=${L1}
                                        title="Upload files to this folder" disabled=${M0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${I8(W,c)}
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
                    ${f&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&L`<div class="workspace-error">${D.error}</div>`}
                    ${B1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${y0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${y0?.error&&L`<div class="workspace-error">${y0.error}</div>`}
                        ${y0?.payload&&y0.payload.segments?.length>0&&L`
                            <${XK} payload=${y0.payload} />
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
                            <${NK} mediaId=${i} />
                        </div>
                    `}
                </div>
            `}
            ${V0&&L`
                <div class="workspace-drag-ghost" ref=${q4}>${V0.label}</div>
            `}
        </aside>
    `}var VK=new Set(["kanban-editor","mindmap-editor"]);function BK(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function Gj(_,$,j){let Z=BK(_,$,j);return VK.has(Z)}var WK=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,UK=/\.(csv|tsv)$/i,LK=/\.pdf$/i,FK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Kj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Xj({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Q,onCloseAll:Y,onTogglePin:q,onTogglePreview:G,onEditSource:X,previewTabs:K,paneOverrides:N,onToggleDock:V,dockVisible:W,onToggleZen:O,zenMode:M,onPopOutTab:k}){let[E,J]=h(null),D=P(null);m(()=>{if(!E)return;let H=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[E]),m(()=>{let H=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let c=_.findIndex((G0)=>G0.id===$);if(S.shiftKey){let G0=_[(c-1+_.length)%_.length];j?.(G0.id)}else{let G0=_[(c+1)%_.length];j?.(G0.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let c=document.querySelector(".editor-pane");if(c&&c.contains(document.activeElement)){if(S.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let I=C((H,S)=>{if(H.button===1){H.preventDefault(),Z?.(S);return}if(H.button===0)j?.(S)},[j,Z]),i=C((H,S)=>{H.preventDefault(),J({id:S,x:H.clientX,y:H.clientY})},[]),p=C((H)=>{H.preventDefault(),H.stopPropagation()},[]),r=C((H,S)=>{H.preventDefault(),H.stopPropagation(),Z?.(S)},[Z]);m(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let e=C((H)=>{if(!(N instanceof Map))return null;return N.get(H)||null},[N]),f=v0(()=>_.find((H)=>H.id===E?.id)||null,[E?.id,_]),y=v0(()=>{let H=E?.id;if(!H)return!1;return Gj(H,e(H),(S)=>n0.resolve(S))},[E?.id,e]);if(!_.length)return null;return L`
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
                        onMouseDown=${p}
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
        ${E&&L`
            <div class="tab-context-menu" style=${{left:E.x+"px",top:E.y+"px"}}>
                <button onClick=${()=>{Z?.(E.id),J(null)}}>Close</button>
                <button onClick=${()=>{Q?.(E.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(E.id),J(null)}}>
                    ${f?.pinned?"Unpin":"Pin"}
                </button>
                ${y&&X&&L`
                    <button onClick=${()=>{X(E.id),J(null)}}>Edit Source</button>
                `}
                ${k&&L`
                    <button onClick=${()=>{let H=_.find((S)=>S.id===E.id);k(E.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${G&&/\.(md|mdx|markdown)$/i.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{G(E.id),J(null)}}>
                        ${K?.has(E.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${WK.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id),S=E.id.split("/").pop()||"document",c="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(S);window.open(c,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${UK.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${LK.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${FK.test(E.id)&&!Kj.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Kj.test(E.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var zK=400,N3=60,Nj=220,V3="mdPreviewHeight";function HK(){try{let _=localStorage.getItem(V3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=N3?$:Nj}catch{return Nj}}function B3({getContent:_,path:$,onClose:j}){let[Z,Q]=h(""),[Y,q]=h(HK),G=P(null),X=P(null),K=P(""),N=P(_);return N.current=_,m(()=>{let O=()=>{let k=N.current?.()||"";if(k===K.current)return;K.current=k;try{let E=O_(k,null,{sanitize:!1});Q(E)}catch{Q('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let M=setInterval(O,zK);return()=>clearInterval(M)},[]),m(()=>{if(G.current&&Z)U4(G.current).catch(()=>{})},[Z]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let M=O.clientY,k=X.current?.offsetHeight||Y,E=X.current?.parentElement,J=E?E.offsetHeight*0.7:500,D=O.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(p)=>{let r=Math.min(Math.max(k-(p.clientY-M),N3),J);q(r)},i=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(V3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",i)}}
            onTouchStart=${(O)=>{O.preventDefault();let M=O.touches[0];if(!M)return;let k=M.clientY,E=X.current?.offsetHeight||Y,J=X.current?.parentElement,D=J?J.offsetHeight*0.7:500,I=O.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let i=(r)=>{let e=r.touches[0];if(!e)return;r.preventDefault();let f=Math.min(Math.max(E-(e.clientY-k),N3),D);q(f)},p=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(V3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",i),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}}
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
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function Vj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Q}){let Y=P(_);Y.current=_;let q=P($);q.current=$;let G=P(j);G.current=j;let X=P(Z);X.current=Z,m(()=>{let K=new T8((V,W)=>Y.current(V,W),(V)=>q.current(V),{chatJid:Q});K.connect();let N=()=>{K.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),K.disconnect()}},[Q])}function Bj(){let[_,$]=h(!1),[j,Z]=h("default"),Q=P(!1);m(()=>{let X=F5("notificationsEnabled",!1);if(Q.current=X,$(X),typeof Notification<"u")Z(Notification.permission)},[]),m(()=>{Q.current=_},[_]);let Y=C(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),q=C(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let K=await Y();if(Z(K||"default"),K!=="granted"){Q.current=!1,$(!1),K1("notificationsEnabled","false");return}}let X=!Q.current;Q.current=X,$(X),K1("notificationsEnabled",String(X))},[Y]),G=C((X,K)=>{if(!Q.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let N=new Notification(X,{body:K});return N.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:G}}var G8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Wj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Q]=h(null),[Y,q]=h(!1),G=P(!1),X=P(null),K=P(!1),N=P(null),V=P(null),W=P(0);m(()=>{G.current=Y},[Y]),m(()=>{V.current=Z},[Z]),m(()=>{W.current+=1,N.current=null,K.current=!1,G.current=!1,q(!1)},[j]);let O=C(async(E=null)=>{let J=W.current;try{if(E){let D=await P6(E,50,0,j);if(J!==W.current)return;Q(D.posts),q(!1)}else{let D=await n4(10,null,j);if(J!==W.current)return;Q(D.posts),q(D.has_more)}}catch(D){if(J!==W.current)return;console.error("Failed to load posts:",D)}},[j]),M=C(async()=>{let E=W.current;try{let J=await n4(10,null,j);if(E!==W.current)return;Q((D)=>{if(!D||D.length===0)return J.posts;return G8([...J.posts,...D])}),q((D)=>D||J.has_more)}catch(J){if(E!==W.current)return;console.error("Failed to refresh timeline:",J)}},[j]),k=C(async(E={})=>{let J=W.current,D=V.current;if(!D||D.length===0)return;if(K.current)return;let{preserveScroll:I=!0,preserveMode:i="top",allowRepeat:p=!1}=E,r=(y)=>{if(!I){y();return}if(i==="top")$(y);else _(y)},f=D.slice().sort((y,H)=>y.id-H.id)[0]?.id;if(!Number.isFinite(f))return;if(!p&&N.current===f)return;K.current=!0,N.current=f;try{let y=await n4(10,f,j);if(J!==W.current)return;if(y.posts.length>0)r(()=>{Q((H)=>G8([...y.posts,...H||[]])),q(y.has_more)});else q(!1)}catch(y){if(J!==W.current)return;console.error("Failed to load more posts:",y)}finally{if(J===W.current)K.current=!1}},[j,_,$]);return m(()=>{X.current=k},[k]),{posts:Z,setPosts:Q,hasMore:Y,setHasMore:q,hasMoreRef:G,loadPosts:O,refreshTimeline:M,loadMore:k,loadMoreRef:X,loadingMoreRef:K,lastBeforeIdRef:N}}function Uj(){let[_,$]=h(null),[j,Z]=h({text:"",totalLines:0}),[Q,Y]=h(""),[q,G]=h({text:"",totalLines:0}),[X,K]=h(null),[N,V]=h(null),[W,O]=h(null),M=P(null),k=P(0),E=P(!1),J=P(""),D=P(""),I=P(null),i=P(null),p=P(null),r=P(null),e=P(!1),f=P(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Q,setAgentPlan:Y,agentThought:q,setAgentThought:G,pendingRequest:X,setPendingRequest:K,currentTurnId:N,setCurrentTurnId:V,steerQueuedTurnId:W,setSteerQueuedTurnId:O,lastAgentEventRef:M,lastSilenceNoticeRef:k,isAgentRunningRef:E,draftBufferRef:J,thoughtBufferRef:D,pendingRequestRef:I,stalledPostIdRef:i,currentTurnIdRef:p,steerQueuedTurnIdRef:r,thoughtExpandedRef:e,draftExpandedRef:f}}function Lj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Q=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.clientX,O=$.current||280,M=N.currentTarget;M.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=W,E=(D)=>{k=D.clientX;let I=Math.min(Math.max(O+(D.clientX-W),160),600);V.style.setProperty("--sidebar-width",`${I}px`),$.current=I},J=()=>{let D=Math.min(Math.max(O+(k-W),160),600);$.current=D,M.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",K1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,Y=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.touches[0];if(!W)return;let O=W.clientX,M=$.current||280,k=N.currentTarget;k.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(M+(I.clientX-O),160),600);V.style.setProperty("--sidebar-width",`${i}px`),$.current=i},J=()=>{k.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",K1("sidebarWidth",String(Math.round($.current||M))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.clientX,O=j.current||$.current||280,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=W,E=(D)=>{k=D.clientX;let I=Math.min(Math.max(O+(D.clientX-W),200),800);V.style.setProperty("--editor-width",`${I}px`),j.current=I},J=()=>{let D=Math.min(Math.max(O+(k-W),200),800);j.current=D,M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,G=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.touches[0];if(!W)return;let O=W.clientX,M=j.current||$.current||280,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let E=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(M+(I.clientX-O),200),800);V.style.setProperty("--editor-width",`${i}px`),j.current=i},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",K1("editorWidth",String(Math.round(j.current||M))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,X=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.clientY,O=Z?.current||200,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=W,E=(D)=>{k=D.clientY;let I=Math.min(Math.max(O-(D.clientY-W),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${I}px`),Z)Z.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let D=Math.min(Math.max(O-(k-W),100),window.innerHeight*0.5);if(Z)Z.current=D;M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,K=P((N)=>{N.preventDefault();let V=_.current;if(!V)return;let W=N.touches[0];if(!W)return;let O=W.clientY,M=Z?.current||200,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let E=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(M-(I.clientY-O),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${i}px`),Z)Z.current=i;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",K1("dockHeight",String(Math.round(Z?.current||M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Q,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:K}}function JK(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Q=!1,Y=new Map;for(let[q,G]of _.entries()){let X=q;if(Z==="dir"){if(q===$)X=j,Q=!0;else if(q.startsWith(`${$}/`))X=`${j}${q.slice($.length)}`,Q=!0}else if(q===$)X=j,Q=!0;Y.set(X,G)}return Q?Y:_}function Fj({onTabClosed:_}={}){let $=P(_);$.current=_;let[j,Z]=h(()=>a0.getTabs()),[Q,Y]=h(()=>a0.getActiveId()),[q,G]=h(()=>a0.getTabs().length>0);m(()=>{return a0.onChange((f,y)=>{Z(f),Y(y),G(f.length>0)})},[]);let[X,K]=h(()=>new Set),[N,V]=h(()=>new Map),W=C((f)=>{K((y)=>{let H=new Set(y);if(H.has(f))H.delete(f);else H.add(f);return H})},[]),O=C((f)=>{K((y)=>{if(!y.has(f))return y;let H=new Set(y);return H.delete(f),H})},[]),M=C((f)=>{V((y)=>{if(!y.has(f))return y;let H=new Map(y);return H.delete(f),H})},[]),k=C((f,y={})=>{if(!f)return;let H=typeof y?.paneOverrideId==="string"&&y.paneOverrideId.trim()?y.paneOverrideId.trim():null,S={path:f,mode:"edit"};try{if(!(H?n0.get(H):n0.resolve(S))){if(!n0.get("editor")){console.warn(`[openEditor] No pane handler for: ${f}`);return}}}catch(G0){console.warn(`[openEditor] paneRegistry.resolve() error for "${f}":`,G0)}let c=typeof y?.label==="string"&&y.label.trim()?y.label.trim():void 0;if(a0.open(f,c),H)V((G0)=>{if(G0.get(f)===H)return G0;let d=new Map(G0);return d.set(f,H),d})},[]),E=C(()=>{let f=a0.getActiveId();if(f){let y=a0.get(f);if(y?.dirty){if(!window.confirm(`"${y.label}" has unsaved changes. Close anyway?`))return}a0.close(f),O(f),M(f),$.current?.(f)}},[M,O]),J=C((f)=>{let y=a0.get(f);if(y?.dirty){if(!window.confirm(`"${y.label}" has unsaved changes. Close anyway?`))return}a0.close(f),O(f),M(f),$.current?.(f)},[M,O]),D=C((f)=>{a0.activate(f)},[]),I=C((f)=>{let y=a0.getTabs().filter((c)=>c.id!==f&&!c.pinned),H=y.filter((c)=>c.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let S=y.map((c)=>c.id);a0.closeOthers(f),S.forEach((c)=>{O(c),M(c),$.current?.(c)})},[M,O]),i=C(()=>{let f=a0.getTabs().filter((S)=>!S.pinned),y=f.filter((S)=>S.dirty).length;if(y>0){if(!window.confirm(`${y} unsaved tab${y>1?"s":""} will be closed. Continue?`))return}let H=f.map((S)=>S.id);a0.closeAll(),H.forEach((S)=>{O(S),M(S),$.current?.(S)})},[M,O]),p=C((f)=>{a0.togglePin(f)},[]),r=C((f)=>{if(!f)return;V((y)=>{if(y.get(f)==="editor")return y;let H=new Map(y);return H.set(f,"editor"),H}),a0.activate(f)},[]),e=C(()=>{let f=a0.getActiveId();if(f)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:f}}))},[]);return m(()=>{let f=(y)=>{let{oldPath:H,newPath:S,type:c}=y.detail||{};if(!H||!S)return;if(c==="dir"){for(let G0 of a0.getTabs())if(G0.path===H||G0.path.startsWith(`${H}/`)){let d=`${S}${G0.path.slice(H.length)}`;a0.rename(G0.id,d)}}else a0.rename(H,S);V((G0)=>JK(G0,H,S,c))};return window.addEventListener("workspace-file-renamed",f),()=>window.removeEventListener("workspace-file-renamed",f)},[]),m(()=>{let f=(y)=>{if(a0.hasUnsaved())y.preventDefault(),y.returnValue=""};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Q,previewTabs:X,tabPaneOverrides:N,openEditor:k,closeEditor:E,handleTabClose:J,handleTabActivate:D,handleTabCloseOthers:I,handleTabCloseAll:i,handleTabTogglePin:p,handleTabTogglePreview:W,handleTabEditSource:r,revealInExplorer:e}}function W3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Q=j[_]??window[Z],Y=Number(Q);return Number.isFinite(Y)?Y:$}catch{return $}}var U3=W3("warning",30000),zj=W3("finalize",120000),L3=W3("refresh",30000),Hj=30000;function Jj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Oj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Dj(_=30000){let[,$]=h(0);m(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function F3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Q)=>Z+Math.max(1,Math.ceil(Q.length/$)),0)}function Aj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function z3(_){return String(_||"").trim()||"web:default"}function Ej({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Mj(_={}){return F4(_)&&o8(_)}function OK(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function DK(_={},$={}){if(!Mj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Q=OK({window:j});if(Q&&Q>0)Z.documentElement.style.setProperty("--app-height",`${Q}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Q}function kj(_={}){if(!Mj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Q=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of Q)$.clearTimeout?.(V);Q.clear()},q=()=>{Z=0,DK({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},X=()=>{G();for(let V of[80,220,420]){let W=$.setTimeout?.(()=>{Q.delete(W),G()},V);if(W!=null)Q.add(W)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;X()},N=$.visualViewport;return X(),$.addEventListener("focus",X),$.addEventListener("pageshow",X),$.addEventListener("resize",X),$.addEventListener("orientationchange",X),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",X,!0),N?.addEventListener?.("resize",X),N?.addEventListener?.("scroll",X),()=>{Y(),$.removeEventListener("focus",X),$.removeEventListener("pageshow",X),$.removeEventListener("resize",X),$.removeEventListener("orientationchange",X),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",X,!0),N?.removeEventListener?.("resize",X),N?.removeEventListener?.("scroll",X)}}function AK(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function G_(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:AK($,j)}var EK=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Ij(_){return EK.has(String(_||"").trim())}function MK(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function H3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(MK(_),{detail:Z})),!0}var kK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Tj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Q=()=>{_(F4({window:j,navigator:Z}))};Q();let q=kK.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Q),()=>G.removeEventListener("change",Q);if(typeof G.addListener==="function")return G.addListener(Q),()=>G.removeListener(Q);return()=>{}});return j.addEventListener?.("focus",Q),j.addEventListener?.("pageshow",Q),()=>{for(let G of q)G();j.removeEventListener?.("focus",Q),j.removeEventListener?.("pageshow",Q)}}function Pj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Q=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Q),j.addEventListener?.("pageshow",Q),Z.addEventListener?.("visibilitychange",Q),()=>{j.removeEventListener?.("focus",Q),j.removeEventListener?.("pageshow",Q),Z.removeEventListener?.("visibilitychange",Q)}}function Cj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Q=_?.popOutPane,Y=(X)=>{let K=X?.detail?.path,N=typeof X?.detail?.label==="string"&&X.detail.label.trim()?X.detail.label.trim():void 0;if(K)Z?.(K,N)},q=(X)=>{let K=X?.detail?.path,N=typeof X?.detail?.label==="string"&&X.detail.label.trim()?X.detail.label.trim():void 0;if(K)Q?.(K,N)},G=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return G.forEach((X)=>j.addEventListener(X,Y)),j.addEventListener("pane:popout",q),()=>{G.forEach((X)=>j.removeEventListener(X,Y)),j.removeEventListener("pane:popout",q)}}function Sj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Q)=>{if(Q?.ctrlKey&&Q.key==="`")Q.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function xj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Q=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(G)=>{if(G?.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault?.(),Z?.();return}if(G?.key==="Escape"&&Y())G.preventDefault?.(),Q?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}var IK="piclaw_btw_session",Rj=900,yj="__piclawRenameBranchFormLock__";function TK(){try{return import.meta.url}catch{return null}}function J3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function Z6(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function wj(_={}){let $=_.importMetaUrl===void 0?TK():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin;try{let Q=$?new URL($).searchParams.get("v"):null;if(Q&&Q.trim())return Q.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((X)=>String(X?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let G=new URL(Y,Z||"http://localhost").searchParams.get("v");return G&&G.trim()?G.trim():null}catch{return null}}function O3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[yj];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[yj]=Z,Z}function fj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function vj(_={}){let $=typeof _.readItem==="function"?_.readItem:J_,j=_.storageKey||IK,Z=$(j);if(!Z)return null;try{let Q=JSON.parse(Z);if(!Q||typeof Q!=="object")return null;let Y=typeof Q.question==="string"?Q.question:"",q=typeof Q.answer==="string"?Q.answer:"",G=typeof Q.thinking==="string"?Q.thinking:"",X=typeof Q.error==="string"&&Q.error.trim()?Q.error:null,K=Q.status==="running"?"error":Q.status==="success"||Q.status==="error"?Q.status:"success";return{question:Y,answer:q,thinking:G,error:K==="error"?X||"BTW stream interrupted. You can retry.":X,model:null,status:K}}catch{return null}}function bj(_,$={}){let j=$.defaultChatJid||"web:default",Z=Z6(_,"chat_jid",j),Q=J3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=J3(_?.get?.("pane_popout")),q=Z6(_,"pane_path"),G=Z6(_,"pane_label"),X=J3(_?.get?.("branch_loader")),K=Z6(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Q,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:G,branchLoaderMode:X,branchLoaderSourceChatJid:K}}function uj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Q,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:G,now:X=Date.now()}=_||{};if(!$||!j?.chat_jid)return!1;let K=Y?.()||null;if(!K)return!1;if(Z||X<Number(Q||0)||K.inFlight||X<Number(K.cooldownUntil||0))return!1;return q?.(j.agent_name||""),G?.(!0),!0}function gj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_||{};$?.(!1),j?.("")}async function mj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Q,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:G,setIsRenamingBranch:X,renameChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:V,showIntentToast:W,closeRenameForm:O,now:M=()=>Date.now()}=_||{};if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Q?.(),!1;let k=M(),E=G?.()||null;if(!E)return!1;if(Y?.current||k<Number(q?.current||0)||E.inFlight||k<Number(E.cooldownUntil||0))return!1;Y.current=!0,E.inFlight=!0,X?.(!0);try{let J=j.agent_name||"",D=x8(Z,J);if(!D.canSubmit)return W?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let I=D.normalized||J,i=await K(j.chat_jid,{agentName:I});await Promise.allSettled([N?.(),V?.()]);let p=i?.branch?.agent_name||I||J;return W?.("Branch renamed",`@${p}`,"info",3500),O?.(),!0}catch(J){let D=J instanceof Error?J.message:String(J||"Could not rename branch."),I=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return W?.("Could not rename branch",I||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,X?.(!1);let J=M()+Rj;if(q)q.current=J;let D=G?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=J}}async function hj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Q,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:K,showIntentToast:N,baseHref:V,chatOnlyMode:W,navigate:O,confirm:M=(r)=>window.confirm(r)}=_||{};if(!$)return!1;let k=typeof j==="string"&&j.trim()?j.trim():"",E=typeof Z==="string"&&Z.trim()?Z.trim():"",J=k||Q?.chat_jid||E;if(!J)return N?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Q?.chat_jid===J?Q:null)||Y.find((r)=>r?.chat_jid===J)||q.find((r)=>r?.chat_jid===J)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return N?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let i=`@${D?.agent_name||J}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!M(`Prune ${i}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await G(J),await Promise.allSettled([X?.(),K?.()]);let r=D?.root_chat_jid||"web:default";N?.("Branch pruned",`${i} has been archived.`,"info",3000);let e=z4(V,r,{chatOnly:W});return O?.(e),!0}catch(r){let e=r instanceof Error?r.message:String(r||"Could not prune branch.");return N?.("Could not prune branch",e||"Could not prune branch.","warning",5000),!1}}async function pj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Q,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:G,chatOnlyMode:X,navigate:K}=_||{},N=typeof $==="string"?$.trim():"";if(!N||typeof j!=="function")return!1;try{let V=Z.find((J)=>J?.chat_jid===N)||null,W=await j(N);await Promise.allSettled([Q?.(),Y?.()]);let O=W?.branch,M=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():N,k=k2(V?.agent_name,O?.agent_name,M);q?.("Branch restored",k,"info",4200);let E=z4(G,M,{chatOnly:X});return K?.(E),!0}catch(V){let W=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",W||"Could not restore branch.","warning",5000),!1}}async function cj(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Q,baseHref:Y,isCancelled:q=()=>!1}=_||{};try{Z?.({status:"running",message:"Preparing a new chat branch…"});let G=await j($);if(q())return!1;let X=G?.branch,K=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");let N=z4(Y,K,{chatOnly:!0});return Q?.(N,{replace:!0}),!0}catch(G){if(q())return!1;return Z?.({status:"error",message:t5(G)}),!1}}async function lj(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Q,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:G,baseHref:X}=_||{};try{let N=(await Z($))?.branch,V=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Q?.(),Y?.()]);let W=N?.agent_name?`@${N.agent_name}`:V;q?.("New branch created",`Switched to ${W}.`,"info",2500);let O=z4(X,V,{chatOnly:j});return G?.(O),!0}catch(K){return q?.("Could not create branch",t5(K),"warning",5000),!1}}async function dj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Q,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:G,currentChatJid:X,baseHref:K}=_||{};if(!$||j)return!1;let N=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!N)return!1;let V=g7(N);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let W=D$(V);if(!W)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;A$(W,{title:typeof Q==="string"&&Q.trim()?`Opening ${Q}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(N),M=u7(K,N,{label:typeof Q==="string"&&Q.trim()?Q.trim():void 0,chatJid:X,params:O});return E$(W,M),G?.(N),!0}catch(O){M$(W);let M=O?.message||"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",M,"warning",5000),!1}}async function ij(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Q,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:G,setActiveChatAgents:X,setCurrentChatBranches:K,showIntentToast:N,baseHref:V}=_||{};if(!$||j)return!1;let W=v7(Z);if(!W)return N?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(W.mode==="tab"){let M=b7(V,Z,{chatOnly:!0});if(!window.open(M,W.target))return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=D$(W);if(!O)return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;A$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await Y(Z))?.branch,E=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();X?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await G?.(Q);K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let J=z4(V,E,{chatOnly:!0});return E$(O,J),!0}catch(M){return M$(O),N?.("Could not open branch window",t5(M),"error",5000),!1}}function Q6(_){return _?{..._}:{text:"",totalLines:0}}function nj(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function PK(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function CK(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function oj(_){return{agentStatus:_.agentStatus,agentDraft:Q6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:Q6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:nj(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:PK(_.silentRecovery)}}function rj(_){let $=_.snapshot||CK(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(Q6($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(Q6($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(nj($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}function D3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function sj(_,$){let j=new Map(_),Z=D3($);if(typeof $?.key==="string"&&$.key&&Z)j.set($.key,Z);else j.delete("autoresearch");return j}function aj(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Z=new Map(_),Q=D3($);if($?.options?.remove||!Q)Z.delete(j);else Z.set(j,Q);return Z}function tj(_){if(_?.options?.remove)return!0;return D3(_)?.state!=="running"}function A3(_,$){return`${_}:${$}`}function ej(_,$,j){let Z=A3($,j);if(_.has(Z))return _;let Q=new Set(_);return Q.add(Z),Q}function _Z(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function E3(_,$){if(_.size===0)return _;let j=`${$}:`,Z=new Set(Array.from(_).filter((Q)=>!String(Q).startsWith(j)));return Z.size===_.size?_:Z}async function $Z(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Z=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Z)throw Error("No tmux command available.");return await _.writeClipboard(Z),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var jZ=wj(),ZZ=C6,QZ=x6,SK=R6,YZ=u6,qZ=g6,M3=w6,k3=G_(e1,"getAgentContext",null),xK=G_(e1,"getAutoresearchStatus",null),yK=G_(e1,"stopAutoresearch",{status:"ok"}),RK=G_(e1,"dismissAutoresearch",{status:"ok"}),GZ=G_(e1,"getAgentModels",{current:null,models:[]}),KZ=G_(e1,"getActiveChatAgents",{chats:[]}),Y6=G_(e1,"getChatBranches",{chats:[]}),wK=G_(e1,"renameChatBranch",null),fK=G_(e1,"pruneChatBranch",null),vK=G_(e1,"restoreChatBranch",null),XZ=G_(e1,"getAgentQueueState",{count:0}),bK=G_(e1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),uK=G_(e1,"removeAgentQueueItem",{removed:!1}),gK=G_(e1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});n0.register(L$);n0.register(c$);n0.register(p$);n0.register(l$);n0.register(d$);n0.register(i$);n0.register(o$);n0.register(r$);n0.register(a$);n0.register(_3);n0.register($3);n0.register(m$);F$();n0.register(J$);n0.register(O$);function mK({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Q,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:G,branchLoaderSourceChatJid:X}=v0(()=>bj(_),[_]),[K,N]=h("disconnected"),[V,W]=h(()=>F4()),[O,M]=h(null),[k,E]=h(null),[J,D]=h(!1),[I,i]=h("current"),[p,r]=h([]),[e,f]=h([]),[y,H]=h(null),{agentStatus:S,setAgentStatus:c,agentDraft:G0,setAgentDraft:d,agentPlan:$0,setAgentPlan:_0,agentThought:X0,setAgentThought:V0,pendingRequest:B0,setPendingRequest:J0,currentTurnId:E0,setCurrentTurnId:M0,steerQueuedTurnId:o0,setSteerQueuedTurnId:y0,lastAgentEventRef:T0,lastSilenceNoticeRef:r0,isAgentRunningRef:s0,draftBufferRef:h0,thoughtBufferRef:t0,pendingRequestRef:p0,stalledPostIdRef:j1,currentTurnIdRef:z0,steerQueuedTurnIdRef:l0,thoughtExpandedRef:Z1,draftExpandedRef:Y1}=Uj(),[K_,D1]=h({}),[_1,m1]=h(null),[M1,q1]=h(null),[c0,x1]=h(!1),[k1,a]=h(null),[W0,H0]=h([]),[N0,R0]=h([]),[S0,b0]=h(null),[I0,w0]=h(()=>new Map),[i0,D0]=h(()=>new Set),[g0,O0]=h([]),[Q0,R]=h(!1),[t,F0]=h(()=>vj()),[k0,u0]=h(null),G1=P(new Set),A1=v0(()=>W0.find((B)=>B?.chat_jid===j)||null,[W0,j]),X1=v0(()=>N0.find((B)=>B?.chat_jid===j)||A1||null,[A1,N0,j]),h1=X1?.root_chat_jid||A1?.root_chat_jid||j,q4=fj(I),[U_,__]=h(()=>({status:G?"running":"idle",message:G?"Preparing a new chat branch…":""})),L_=g0.length,X_=P(new Set),Q1=P([]),o1=P(new Set),G4=P(0),v_=P({inFlight:!1,lastAttemptAt:0,turnId:null});X_.current=new Set(g0.map((B)=>B.row_id)),Q1.current=g0;let{notificationsEnabled:_5,notificationPermission:v4,toggleNotifications:b1,notify:F_}=Bj(),[y1,E1]=h(()=>new Set),[N1,b_]=h(()=>F5("workspaceOpen",!0)),u_=P(null),{editorOpen:V1,tabStripTabs:$_,tabStripActiveId:m0,previewTabs:P1,tabPaneOverrides:A_,openEditor:j_,closeEditor:b4,handleTabClose:r_,handleTabActivate:u4,handleTabCloseOthers:s_,handleTabCloseAll:$5,handleTabTogglePin:a_,handleTabTogglePreview:g_,handleTabEditSource:T5,revealInExplorer:P5}=Fj({onTabClosed:(B)=>u_.current?.(B)}),B1=P(null),R1=P(null),j5=P(null),E_=P(null),Z_=n0.getDockPanes().length>0,[p1,C1]=h(!1),u1=C(()=>C1((B)=>!B),[]),z1=C(()=>{j_(t4,{label:"Terminal"})},[j_]),M_=C(()=>{j_(Y4,{label:"VNC"})},[j_]),k_=v0(()=>$_.find((B)=>B.id===m0)||$_[0]||null,[m0,$_]),I_=v0(()=>m0?A_.get(m0)||null:null,[A_,m0]),t_=v0(()=>q||k_?.label||Y||"Pane",[k_?.label,q,Y]),Q_=v0(()=>$_.length>1||Boolean(m0&&P1.has(m0)),[P1,m0,$_.length]),r1=v0(()=>Y===Y4||Y.startsWith(`${Y4}/`),[Y]),T_=v0(()=>Y===t4&&!Q_||r1,[r1,Q_,Y]),K4=Q||!Z&&(V1||Z_&&p1),[H1,e_]=h(!1),g4=P(!1),m4=C(()=>{if(!V1||Z)return;if(g4.current=p1,p1)C1(!1);e_(!0)},[V1,Z,p1]),P_=C(()=>{if(!H1)return;if(e_(!1),g4.current)C1(!0),g4.current=!1},[H1]),h4=C(()=>{if(H1)P_();else m4()},[H1,m4,P_]);m(()=>{if(H1&&!V1)P_()},[H1,V1,P_]),m(()=>{if(!Q||!Y)return;if(a0.getActiveId()===Y)return;j_(Y,q?{label:q}:void 0)},[j_,q,Q,Y]),m(()=>{let B=B1.current;if(!B)return;if(R1.current)R1.current.dispose(),R1.current=null;let U=m0;if(!U)return;let A={path:U,mode:"edit"},w=(I_?n0.get(I_):null)||n0.resolve(A)||n0.get("editor");if(!w){B.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let x=w.mount(B,A);R1.current=x,x.onDirtyChange?.((Y0)=>{a0.setDirty(U,Y0)}),x.onSaveRequest?.(()=>{}),x.onClose?.(()=>{b4()});let g=a0.getViewState(U);if(g&&typeof x.restoreViewState==="function")requestAnimationFrame(()=>x.restoreViewState(g));if(typeof x.onViewStateChange==="function")x.onViewStateChange((Y0)=>{a0.saveViewState(U,Y0)});return requestAnimationFrame(()=>x.focus()),()=>{if(R1.current===x)x.dispose(),R1.current=null}},[m0,I_,b4]);let Z5=C(async(B)=>{let U=typeof m0==="string"?m0.trim():"",A=R1.current;if(!U||!A?.setContent)return;if(typeof A.isDirty==="function"&&A.isDirty())return;if(!(Array.isArray(B)&&B.length>0?B.some((x)=>{let g=Array.isArray(x?.changed_paths)?x.changed_paths.map((Z0)=>typeof Z0==="string"?Z0.trim():"").filter(Boolean):[];if(g.length>0)return g.some((Z0)=>Z0==="."||Z0===U);let Y0=typeof x?.path==="string"?x.path.trim():"";return!Y0||Y0==="."||Y0===U}):!0))return;try{let x=await c5(U,1e6,"edit"),g=typeof x?.text==="string"?x.text:"",Y0=typeof x?.mtime==="string"&&x.mtime.trim()?x.mtime.trim():new Date().toISOString();A.setContent(g,Y0)}catch(x){console.warn("[workspace_update] Failed to refresh active pane:",x)}},[m0]);m(()=>{let B=j5.current;if(E_.current)E_.current.dispose(),E_.current=null;if(!B||!Z_||!p1)return;let U=n0.getDockPanes()[0];if(!U){B.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let A=U.mount(B,{mode:"view"});return E_.current=A,requestAnimationFrame(()=>A.focus?.()),()=>{if(E_.current===A)A.dispose(),E_.current=null}},[Z_,p1]);let[m_,h_]=h({name:"You",avatar_url:null,avatar_background:null}),O4=P(null),p_=P(!1),p4=P(!1),c_=P(!1),C_=P(null),I1=P(j),D4=P(new Map),A4=P(j),c4=P(0),L1=P(0),E4=P({}),Q5=P({name:null,avatar_url:null}),g1=P({currentHashtag:null,searchQuery:null,searchOpen:!1}),N_=P(null),_4=P(null),l4=P(0),X4=P(0),M4=P(0),N4=P(null),S_=P(null),z_=P(null),k4=P(null),d4=P(0),x_=P({title:null,avatarBase:null}),z=P(null),T=P(!1),[v,b]=h(!1),o=P(0),[K0,U0]=h(!1),[L0,j0]=h(""),C0=v0(()=>x8(L0,X1?.agent_name||""),[X1?.agent_name,L0]),w1=P(null),Y_=C(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);Dj(30000),m(()=>{if(!K0)return;requestAnimationFrame(()=>{if(K0)w1.current?.focus(),w1.current?.select?.()})},[K0]),m(()=>{return g2()},[]),m(()=>{return Tj(W)},[]),m(()=>{K1("workspaceOpen",String(N1))},[N1]),m(()=>{return kj()},[]),m(()=>{return()=>{Y_()}},[Y_]),m(()=>{if(!t){K1(BTW_SESSION_KEY,"");return}K1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),m(()=>{E4.current=K_||{}},[K_]),m(()=>{I1.current=j},[j]),m(()=>{Q5.current=m_||{name:"You",avatar_url:null,avatar_background:null}},[m_]);let c1=C((B,U,A=null)=>{if(typeof document>"u")return;let w=(B||"").trim()||"PiClaw";if(x_.current.title!==w){document.title=w;let q0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(q0&&q0.getAttribute("content")!==w)q0.setAttribute("content",w);x_.current.title=w}let x=document.getElementById("dynamic-favicon");if(!x)return;let g=x.getAttribute("data-default")||x.getAttribute("href")||"/favicon.ico",Y0=U||g,Z0=U?`${Y0}|${A||""}`:Y0;if(x_.current.avatarBase!==Z0){let q0=U?`${Y0}${Y0.includes("?")?"&":"?"}v=${A||Date.now()}`:Y0;x.setAttribute("href",q0),x_.current.avatarBase=Z0}},[]),C5=C((B)=>{if(!B)return;r((U)=>U.includes(B)?U:[...U,B])},[]),F=C((B)=>{r((U)=>U.filter((A)=>A!==B))},[]);u_.current=F;let u=C(()=>{r([])},[]),n=C((B)=>{if(!Array.isArray(B)){r([]);return}let U=[],A=new Set;for(let w of B){if(typeof w!=="string"||!w.trim())continue;let x=w.trim();if(A.has(x))continue;A.add(x),U.push(x)}r(U)},[]),l=C((B,U=null,A="info",w=3000)=>{Y_(),H({title:B,detail:U||null,kind:A||"info"}),z.current=setTimeout(()=>{H((x)=>x?.title===B?null:x)},w)},[Y_]),P0=C((B)=>{let U=Aj(B,{editorOpen:V1,resolvePane:(A)=>n0.resolve(A)});if(U.kind==="open"){j_(U.path);return}if(U.kind==="toast")l(U.title,U.detail,U.level)},[V1,j_,l]),J1=C(()=>{let B=m0;if(B)C5(B)},[m0,C5]),S1=C((B)=>{if(!B)return;f((U)=>U.includes(B)?U:[...U,B])},[]),f1=C(async(B,U=null)=>{let A=(x)=>{x.scrollIntoView({behavior:"smooth",block:"center"}),x.classList.add("post-highlight"),setTimeout(()=>x.classList.remove("post-highlight"),2000)},w=document.getElementById("post-"+B);if(w){A(w);return}try{let x=typeof U==="string"&&U.trim()?U.trim():j,Y0=(await S6(B,x))?.thread?.[0];if(!Y0)return;d1((Z0)=>{if(!Z0)return[Y0];if(Z0.some((q0)=>q0.id===Y0.id))return Z0;return[...Z0,Y0]}),requestAnimationFrame(()=>{setTimeout(()=>{let Z0=document.getElementById("post-"+B);if(Z0)A(Z0)},50)})}catch(x){console.error("[scrollToMessage] Failed to fetch message",B,x)}},[j]),V4=C((B)=>{f((U)=>U.filter((A)=>A!==B))},[]),i4=C(()=>{f([])},[]),Y5=C((B)=>{if(!Array.isArray(B)){f([]);return}let U=[],A=new Set;for(let w of B){if(typeof w!=="string"||!w.trim())continue;let x=w.trim();if(A.has(x))continue;A.add(x),U.push(x)}f(U)},[]),q5=C((B)=>{let U=typeof B==="string"&&B.trim()?B.trim():"Could not send your message.";l("Compose failed",U,"error",5000)},[l]),V_=C((B={})=>{let U=Date.now();if(T0.current=U,B.running)s0.current=!0,R((A)=>A?A:!0);if(B.clearSilence)r0.current=0},[R]),l1=C(()=>{if(k4.current)clearTimeout(k4.current),k4.current=null;d4.current=0},[]);m(()=>()=>{l1()},[l1]);let G5=C(()=>{l1(),c((B)=>{if(!B)return B;if(!(B.last_activity||B.lastActivity))return B;let{last_activity:U,lastActivity:A,...w}=B;return w})},[l1]),I4=C((B)=>{if(!B)return;l1();let U=Date.now();d4.current=U,c({type:B.type||"active",last_activity:!0}),k4.current=setTimeout(()=>{if(d4.current!==U)return;c((A)=>{if(!A||!(A.last_activity||A.lastActivity))return A;return null})},Hj)},[l1]),F1=C(()=>{s0.current=!1,R(!1),T0.current=null,r0.current=0,h0.current="",t0.current="",p0.current=null,S_.current=null,z0.current=null,l0.current=null,C_.current=null,v_.current={inFlight:!1,lastAttemptAt:0,turnId:null},l1(),M0(null),y0(null),Z1.current=!1,Y1.current=!1},[l1,M0,y0,R]),$4=C((B)=>{if(!Ej({remainingQueueCount:B,currentTurnId:z0.current,isAgentTurnActive:Q0}))return;l0.current=null,y0(null)},[Q0,y0]),K5=C(()=>oj({agentStatus:S,agentDraft:G0,agentPlan:$0,agentThought:X0,pendingRequest:B0,currentTurnId:E0,steerQueuedTurnId:o0,isAgentTurnActive:Q0,followupQueueItems:g0,activeModel:_1,activeThinkingLevel:M1,supportsThinking:c0,activeModelUsage:k1,contextUsage:S0,isAgentRunning:s0.current,wasAgentActive:c_.current,draftBuffer:h0.current,thoughtBuffer:t0.current,lastAgentEvent:T0.current,lastSilenceNotice:r0.current,lastAgentResponse:S_.current,currentTurnIdRef:z0.current,steerQueuedTurnIdRef:l0.current,thoughtExpanded:Z1.current,draftExpanded:Y1.current,agentStatusRef:C_.current,silentRecovery:v_.current}),[_1,k1,M1,G0,$0,S,X0,S0,E0,g0,Q0,B0,o0,c0]),K8=C((B)=>{rj({snapshot:B,clearLastActivityTimer:l1,refs:{isAgentRunningRef:s0,wasAgentActiveRef:c_,lastAgentEventRef:T0,lastSilenceNoticeRef:r0,draftBufferRef:h0,thoughtBufferRef:t0,pendingRequestRef:p0,lastAgentResponseRef:S_,currentTurnIdRef:z0,steerQueuedTurnIdRef:l0,agentStatusRef:C_,silentRecoveryRef:v_,thoughtExpandedRef:Z1,draftExpandedRef:Y1},setters:{setIsAgentTurnActive:R,setAgentStatus:c,setAgentDraft:d,setAgentPlan:_0,setAgentThought:V0,setPendingRequest:J0,setCurrentTurnId:M0,setSteerQueuedTurnId:y0,setFollowupQueueItems:O0,setActiveModel:m1,setActiveThinkingLevel:q1,setSupportsThinking:x1,setActiveModelUsage:a,setContextUsage:b0}})},[l1,M0,O0,R,y0]),B_=C((B)=>{if(!B)return;if(z0.current===B)return;z0.current=B,v_.current={inFlight:!1,lastAttemptAt:0,turnId:B},M0(B),l0.current=null,y0(null),h0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,S_.current=null,Z1.current=!1,Y1.current=!1},[M0,y0]),T4=C((B)=>{if(typeof document<"u"){let q0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&q0)return}let U=S_.current;if(!U||!U.post)return;if(B&&U.turnId&&U.turnId!==B)return;let A=U.post;if(A.id&&N4.current===A.id)return;let w=String(A?.data?.content||"").trim();if(!w)return;N4.current=A.id||N4.current,S_.current=null;let x=w.replace(/\s+/g," ").slice(0,200),g=E4.current||{},Z0=(A?.data?.agent_id?g[A.data.agent_id]:null)?.name||"Pi";F_(Z0,x)},[F_]),H_=C(async(B,U)=>{if(B!=="thought"&&B!=="draft")return;let A=z0.current;if(B==="thought"){if(Z1.current=U,A)try{await qZ(A,"thought",U)}catch(w){console.warn("Failed to update thought visibility:",w)}if(!U)return;try{let w=A?await YZ(A,"thought"):null;if(w?.text)t0.current=w.text;V0((x)=>({...x||{text:"",totalLines:0},fullText:t0.current||x?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:x?.totalLines||0}))}catch(w){console.warn("Failed to fetch full thought:",w)}return}if(Y1.current=U,A)try{await qZ(A,"draft",U)}catch(w){console.warn("Failed to update draft visibility:",w)}if(!U)return;try{let w=A?await YZ(A,"draft"):null;if(w?.text)h0.current=w.text;d((x)=>({...x||{text:"",totalLines:0},fullText:h0.current||x?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:x?.totalLines||0}))}catch(w){console.warn("Failed to fetch full draft:",w)}},[]),P4=P(null),X5=C(()=>{let B=N_.current;if(!B)return;if(!(Math.abs(B.scrollTop)>150))B.scrollTop=0},[]);P4.current=X5;let q6=C((B)=>{let U=N_.current;if(!U||typeof B!=="function"){B?.();return}let{currentHashtag:A,searchQuery:w,searchOpen:x}=g1.current||{},g=!((w||x)&&!A),Y0=g?U.scrollHeight-U.scrollTop:U.scrollTop;B(),requestAnimationFrame(()=>{let Z0=N_.current;if(!Z0)return;if(g){let q0=Math.max(Z0.scrollHeight-Y0,0);Z0.scrollTop=q0}else{let q0=Math.max(Z0.scrollHeight-Z0.clientHeight,0),s=Math.min(Y0,q0);Z0.scrollTop=s}})},[]),S5=C((B)=>{let U=N_.current;if(!U||typeof B!=="function"){B?.();return}let A=U.scrollTop;B(),requestAnimationFrame(()=>{let w=N_.current;if(!w)return;let x=Math.max(w.scrollHeight-w.clientHeight,0);w.scrollTop=Math.min(A,x)})},[]),NZ="Queued as a follow-up (one-at-a-time).",VZ="⁣",I3=C((B)=>{if(!B||!Array.isArray(B))return B;let U=X_.current,A=new Set(U),w=B.filter((x)=>{if(A.has(x?.id))return!1;if(x?.data?.is_bot_message){let g=x?.data?.content;if(g===NZ||g===VZ)return!1}return!0});return w.length===B.length?B:w},[]),{posts:x5,setPosts:d1,hasMore:BZ,setHasMore:X8,hasMoreRef:T3,loadPosts:l_,refreshTimeline:s1,loadMore:WZ,loadMoreRef:G6}=Wj({preserveTimelineScroll:q6,preserveTimelineScrollTop:S5,chatJid:j}),N5=v0(()=>I3(x5),[x5,g0,I3]),N8=C(()=>{let B=j1.current;if(!B)return;d1((U)=>U?U.filter((A)=>A.id!==B):U),j1.current=null},[d1]),{handleSplitterMouseDown:UZ,handleSplitterTouchStart:LZ,handleEditorSplitterMouseDown:FZ,handleEditorSplitterTouchStart:zZ,handleDockSplitterMouseDown:HZ,handleDockSplitterTouchStart:JZ}=Lj({appShellRef:_4,sidebarWidthRef:l4,editorWidthRef:X4,dockHeightRef:M4}),P3=C(()=>{if(!s0.current)return;s0.current=!1,r0.current=0,T0.current=null,z0.current=null,M0(null),Z1.current=!1,Y1.current=!1;let B=(h0.current||"").trim();if(h0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,S_.current=null,!B){c({type:"error",title:"Response stalled - No content received"});return}let A=`${B}${`

⚠️ Response may be incomplete - the model stopped responding`}`,w=Date.now(),x=new Date().toISOString(),g={id:w,timestamp:x,data:{type:"agent_response",content:A,agent_id:"default",is_local_stall:!0}};j1.current=w,d1((Y0)=>Y0?G8([...Y0,g]):[g]),P4.current?.(),c(null)},[M0]);m(()=>{g1.current={currentHashtag:O,searchQuery:k,searchOpen:J}},[O,k,J]);let $1=C(()=>{let B=++G4.current,U=j;XZ(U).then((A)=>{if(B!==G4.current)return;if(I1.current!==U)return;let w=o1.current,x=Array.isArray(A?.items)?A.items.map((g)=>({...g})).filter((g)=>!w.has(g.row_id)):[];if(x.length){O0((g)=>{if(g.length===x.length&&g.every((Y0,Z0)=>Y0.row_id===x[Z0].row_id))return g;return x});return}w.clear(),$4(0),O0((g)=>g.length===0?g:[])}).catch(()=>{if(B!==G4.current)return;if(I1.current!==U)return;O0((A)=>A.length===0?A:[])})},[$4,j,O0]),a1=C(async()=>{let B=j;try{let U=await k3(B);if(I1.current!==B)return;if(U)b0(U)}catch(U){if(I1.current!==B)return;console.warn("Failed to fetch agent context:",U)}},[j]),d_=C(async()=>{let B=j;try{let U=await xK(B);if(I1.current!==B)return;w0((A)=>sj(A,U)),D0((A)=>E3(A,"autoresearch"))}catch(U){if(I1.current!==B)return;console.warn("Failed to fetch autoresearch status:",U)}},[j]),y_=C(async()=>{let B=j;try{let U=await M3(B);if(I1.current!==B)return null;if(!U||U.status!=="active"||!U.data){if(c_.current){let{currentHashtag:x,searchQuery:g,searchOpen:Y0}=g1.current||{};if(!x&&!g&&!Y0)s1()}return c_.current=!1,F1(),C_.current=null,c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,U??null}c_.current=!0;let A=U.data;C_.current=A;let w=A.turn_id||A.turnId;if(w)B_(w);if(V_({running:!0,clearSilence:!0}),G5(),c(A),U.thought&&U.thought.text)V0((x)=>{if(x&&x.text&&x.text.length>=U.thought.text.length)return x;return t0.current=U.thought.text,{text:U.thought.text,totalLines:U.thought.totalLines||0}});if(U.draft&&U.draft.text)d((x)=>{if(x&&x.text&&x.text.length>=U.draft.text.length)return x;return h0.current=U.draft.text,{text:U.draft.text,totalLines:U.draft.totalLines||0}});return U}catch(U){return console.warn("Failed to fetch agent status:",U),null}},[F1,G5,V_,s1,B_]),K6=C(async()=>{if(!s0.current)return null;if(p0.current)return null;let B=z0.current||null,U=v_.current,A=Date.now();if(U.inFlight)return null;if(U.turnId===B&&A-U.lastAttemptAt<L3)return null;U.inFlight=!0,U.lastAttemptAt=A,U.turnId=B;try{let{currentHashtag:w,searchQuery:x,searchOpen:g}=g1.current||{};if(!w&&!x&&!g)await s1();return await $1(),await y_()}finally{U.inFlight=!1}},[y_,$1,s1]);m(()=>{let B=Math.min(1000,Math.max(100,Math.floor(U3/2))),U=setInterval(()=>{if(!s0.current)return;if(p0.current)return;let A=T0.current;if(!A)return;let w=Date.now(),x=w-A,g=W4(C_.current);if(x>=zj){if(!g)c({type:"waiting",title:"Re-syncing after a quiet period…"});K6();return}if(x>=U3){if(w-r0.current>=L3){if(!g){let Y0=Math.floor(x/1000);c({type:"waiting",title:`Waiting for model… No events for ${Y0}s`})}r0.current=w,K6()}}},B);return()=>clearInterval(U)},[K6]);let C3=C((B)=>{let U=typeof B==="string"&&B.trim()?B.trim():null;if(!U||!jZ||U===jZ)return!1;if(O4.current===U)return!0;O4.current=U;let A=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!a0.hasUnsaved()&&!A&&!s0.current&&!p0.current&&!p_.current)return p_.current=!0,l("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{p_.current=!1}},350),!0;return l("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[s0,p0,l]),OZ=C((B)=>{if(N(B),B!=="connected"){c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,F1();return}if(!p4.current){p4.current=!0;let{currentHashtag:x,searchQuery:g,searchOpen:Y0}=g1.current||{};if(!x&&!g&&!Y0)s1();y_(),$1(),a1();return}let{currentHashtag:U,searchQuery:A,searchOpen:w}=g1.current;if(!U&&!A&&!w)s1();y_(),$1(),a1()},[F1,s1,y_,$1,a1]),DZ=C(async(B)=>{M(B),d1(null),await l_(B)},[l_]),AZ=C(async()=>{M(null),E(null),d1(null),await l_()},[l_]),EZ=C(async(B,U=I)=>{if(!B||!B.trim())return;let A=U==="root"||U==="all"?U:"current";i(A),E(B.trim()),M(null),d1(null);try{let w=await ZZ(B.trim(),50,0,j,A,h1);d1(w.results),X8(!1)}catch(w){console.error("Failed to search:",w),d1([])}},[j,h1,I]),MZ=C(()=>{D(!0),E(null),M(null),i("current"),d1([])},[]),kZ=C(()=>{D(!1),E(null),l_()},[l_]),pK=C(()=>{},[]),X6=!O&&!k&&!J,IZ=C(async(B)=>{if(!B)return;let U=B.id,A=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():j,w=N5?.filter((g)=>g?.data?.thread_id===U&&g?.id!==U).length||0;if(w>0){if(!window.confirm(`Delete this message and its ${w} replies?`))return}let x=(g)=>{if(!g.length)return;E1((Z0)=>{let q0=new Set(Z0);return g.forEach((s)=>q0.add(s)),q0}),setTimeout(()=>{if(S5(()=>{d1((Z0)=>Z0?Z0.filter((q0)=>!g.includes(q0.id)):Z0)}),E1((Z0)=>{let q0=new Set(Z0);return g.forEach((s)=>q0.delete(s)),q0}),T3.current)G6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await QZ(U,w>0,A);if(g?.ids?.length)x(g.ids)}catch(g){let Y0=g?.message||"";if(w===0&&Y0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let q0=await QZ(U,!0,A);if(q0?.ids?.length)x(q0.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${Y0}`)}},[j,N5,S5]),S3=C(async()=>{try{let B=await SK();D1(Jj(B));let U=B?.user||{};h_((w)=>{let x=typeof U.name==="string"&&U.name.trim()?U.name.trim():"You",g=typeof U.avatar_url==="string"?U.avatar_url.trim():null,Y0=typeof U.avatar_background==="string"&&U.avatar_background.trim()?U.avatar_background.trim():null;if(w.name===x&&w.avatar_url===g&&w.avatar_background===Y0)return w;return{name:x,avatar_url:g,avatar_background:Y0}});let A=(B?.agents||[]).find((w)=>w.id==="default");c1(A?.name,A?.avatar_url)}catch(B){console.warn("Failed to load agents:",B)}},[c1]);m(()=>{S3();let B=z5("sidebarWidth",null),U=Number.isFinite(B)?Math.min(Math.max(B,160),600):280;if(l4.current=U,_4.current)_4.current.style.setProperty("--sidebar-width",`${U}px`)},[S3]);let y5=Q0||S!==null,x3=C((B)=>{if(!B||typeof B!=="object")return;let U=B.agent_id;if(!U)return;let{agent_name:A,agent_avatar:w}=B;if(!A&&w===void 0)return;let x=E4.current?.[U]||{id:U},g=x.name||null,Y0=x.avatar_url??x.avatarUrl??x.avatar??null,Z0=!1,q0=!1;if(A&&A!==x.name)g=A,q0=!0;if(w!==void 0){let s=typeof w==="string"?w.trim():null,A0=typeof Y0==="string"?Y0.trim():null,f0=s||null;if(f0!==(A0||null))Y0=f0,Z0=!0}if(!q0&&!Z0)return;if(D1((s)=>{let f0={...s[U]||{id:U}};if(q0)f0.name=g;if(Z0)f0.avatar_url=Y0;return{...s,[U]:f0}}),U==="default")c1(g,Y0,Z0?Date.now():null)},[c1]),y3=C((B)=>{if(!B||typeof B!=="object")return;let U=B.user_name??B.userName,A=B.user_avatar??B.userAvatar,w=B.user_avatar_background??B.userAvatarBackground;if(U===void 0&&A===void 0&&w===void 0)return;h_((x)=>{let g=typeof U==="string"&&U.trim()?U.trim():x.name||"You",Y0=A===void 0?x.avatar_url:typeof A==="string"&&A.trim()?A.trim():null,Z0=w===void 0?x.avatar_background:typeof w==="string"&&w.trim()?w.trim():null;if(x.name===g&&x.avatar_url===Y0&&x.avatar_background===Z0)return x;return{name:g,avatar_url:Y0,avatar_background:Z0}})},[]),N6=C((B)=>{if(!B||typeof B!=="object")return;let U=B.model??B.current;if(U!==void 0)m1(U);if(B.thinking_level!==void 0)q1(B.thinking_level??null);if(B.supports_thinking!==void 0)x1(Boolean(B.supports_thinking));if(B.provider_usage!==void 0)a(B.provider_usage??null)},[]),R5=C(()=>{let B=j;GZ(B).then((U)=>{if(I1.current!==B)return;if(U)N6(U)}).catch(()=>{})},[N6,j]),i1=C(()=>{let B=j,U=(A)=>Array.isArray(A)?A.filter((w)=>w&&typeof w.chat_jid==="string"&&typeof w.agent_name==="string"&&w.agent_name.trim()):[];Promise.all([KZ().catch(()=>({chats:[]})),Y6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([A,w])=>{if(I1.current!==B)return;let x=U(A?.chats),g=U(w?.chats);if(g.length===0){H0(x);return}let Y0=new Map(x.map((q0)=>[q0.chat_jid,q0])),Z0=g.map((q0)=>{let s=Y0.get(q0.chat_jid);return s?{...q0,...s,is_active:s.is_active??q0.is_active}:q0});Z0.sort((q0,s)=>{if(q0.chat_jid===B&&s.chat_jid!==B)return-1;if(s.chat_jid===B&&q0.chat_jid!==B)return 1;let A0=Boolean(q0.archived_at),f0=Boolean(s.archived_at);if(A0!==f0)return A0?1:-1;if(Boolean(q0.is_active)!==Boolean(s.is_active))return q0.is_active?-1:1;return String(q0.chat_jid).localeCompare(String(s.chat_jid))}),H0(Z0)}).catch(()=>{if(I1.current!==B)return;H0([])})},[j]),t1=C(()=>{Y6(h1).then((B)=>{let U=Array.isArray(B?.chats)?B.chats.filter((A)=>A&&typeof A.chat_jid==="string"&&typeof A.agent_name==="string"):[];R0(U)}).catch(()=>{})},[h1]),R3=C((B)=>{let U=B?.row_id;if(U==null)return;o1.current.add(U),O0((A)=>A.filter((w)=>w?.row_id!==U)),bK(U,z3(j)).then(()=>{$1()}).catch((A)=>{console.warn("[queue] Failed to steer queued item:",A),l("Failed to steer message","The queued message could not be sent as steering.","warning"),o1.current.delete(U),$1()})},[j,$1,O0,l]),w3=C((B)=>{let U=B?.row_id;if(U==null)return;let A=Q1.current.filter((w)=>w?.row_id!==U).length;o1.current.add(U),$4(A),O0((w)=>w.filter((x)=>x?.row_id!==U)),uK(U,z3(j)).then(()=>{$1()}).catch((w)=>{console.warn("[queue] Failed to remove queued item:",w),l("Failed to remove message","The queued message could not be removed.","warning"),o1.current.delete(U),$1()})},[$4,j,$1,O0,l]),w5=C((B)=>{if(!B||typeof B!=="object")return;if(i1(),t1(),a1(),d_(),B?.queued==="followup"||B?.queued==="steer"){$1();return}let U=B?.command;if(U&&typeof U==="object"&&(U?.queued_followup||U?.queued_steer))$1()},[i1,d_,t1,a1,$1]),TZ=C(async(B,U)=>{let A=typeof B?.key==="string"?B.key:"",w=typeof U?.key==="string"?U.key:"",x=A3(A,w);if(!A||!w)return;D0((g)=>ej(g,A,w));try{let g=await $Z({panel:B,action:U,currentChatJid:j,stopAutoresearch:yK,dismissAutoresearch:RK,writeClipboard:(Y0)=>navigator.clipboard.writeText(Y0)});if(g.refreshAutoresearchStatus)d_();if(g.toast)l(g.toast.title,g.toast.detail,g.toast.kind,g.toast.durationMs)}catch(g){l("Panel action failed",g?.message||"Could not complete that action.","warning")}finally{D0((g)=>_Z(g,x))}},[j,d_,l]),V6=C(()=>{if(z_.current)z_.current.abort(),z_.current=null;F0(null)},[]),V8=C(async(B)=>{let U=String(B||"").trim();if(!U)return l("BTW needs a question","Usage: /btw <question>","warning"),!0;if(z_.current)z_.current.abort();let A=new AbortController;z_.current=A,F0({question:U,answer:"",thinking:"",error:null,model:null,status:"running"});try{let w=await gK(U,{signal:A.signal,chatJid:r2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(x,g)=>{if(x==="side_prompt_start")F0((Y0)=>Y0?{...Y0,status:"running"}:Y0)},onThinkingDelta:(x)=>{F0((g)=>g?{...g,thinking:`${g.thinking||""}${x||""}`}:g)},onTextDelta:(x)=>{F0((g)=>g?{...g,answer:`${g.answer||""}${x||""}`}:g)}});if(z_.current!==A)return!0;F0((x)=>x?{...x,answer:w?.result||x.answer||"",thinking:w?.thinking||x.thinking||"",model:w?.model||null,status:"success",error:null}:x)}catch(w){if(A.signal.aborted)return!0;F0((x)=>x?{...x,status:"error",error:w?.payload?.error||w?.message||"BTW request failed."}:x)}finally{if(z_.current===A)z_.current=null}return!0},[j,l]),PZ=C(async({content:B})=>{let U=o2(B);if(!U)return!1;if(U.type==="help")return l("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(U.type==="clear")return V6(),l("BTW cleared","Closed the side conversation panel.","info"),!0;if(U.type==="ask")return await V8(U.question),!0;return!1},[V6,V8,l]),CZ=C(()=>{if(t?.question)V8(t.question)},[t,V8]),SZ=C(async()=>{let B=t2(t);if(!B)return;try{let U=await o4("default",B,null,[],y5?"queue":null,j);w5(U),l(U?.queued==="followup"?"BTW queued":"BTW injected",U?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(U){l("BTW inject failed",U?.message||"Could not inject BTW answer into chat.","warning")}},[t,w5,y5,l]),f3=C(async(B=null)=>{let[U,A,w,x,g,Y0,Z0]=await Promise.allSettled([M3(j),k3(j),XZ(j),GZ(j),KZ(),Y6(h1),n4(20,null,j)]),q0=U.status==="fulfilled"?U.value:null,s=A.status==="fulfilled"?A.value:null,A0=w.status==="fulfilled"?w.value:null,f0=x.status==="fulfilled"?x.value:null,q_=g.status==="fulfilled"?g.value:null,T1=Y0.status==="fulfilled"?Y0.value:null,j4=Z0.status==="fulfilled"?Z0.value:null,R_=Array.isArray(j4?.posts)?j4.posts:Array.isArray(x5)?x5:[],m3=R_.length?R_[R_.length-1]:null,uZ=R_.filter((L6)=>L6?.data?.is_bot_message).length,gZ=R_.filter((L6)=>!L6?.data?.is_bot_message).length,h3=Number(A0?.count??Q1.current.length??0)||0,p3=Array.isArray(q_?.chats)?q_.chats.length:W0.length,mZ=Array.isArray(T1?.chats)?T1.chats.length:N0.length,c3=Number(s?.percent??S0?.percent??0)||0,hZ=Number(s?.tokens??S0?.tokens??0)||0,pZ=Number(s?.contextWindow??S0?.contextWindow??0)||0,cZ=f0?.current??_1??null,lZ=f0?.thinking_level??M1??null,dZ=f0?.supports_thinking??c0,iZ=q0?.status||(Q0?"active":"idle"),nZ=q0?.data?.type||q0?.type||null;return{generatedAt:new Date().toISOString(),request:B,chat:{currentChatJid:j,rootChatJid:h1,activeChats:p3,branches:mZ},agent:{status:iZ,phase:nZ,running:Boolean(Q0)},model:{current:cZ,thinkingLevel:lZ,supportsThinking:Boolean(dZ)},context:{tokens:hZ,contextWindow:pZ,percent:c3},queue:{count:h3},timeline:{loadedPosts:R_.length,botPosts:uZ,userPosts:gZ,latestPostId:m3?.id??null,latestTimestamp:m3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(c3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,h3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,p3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,R_.length*5))}]}},[W0,_1,M1,S0,N0,j,h1,Q0,x5,c0]),f5=C(()=>{R5(),i1(),t1(),$1(),a1(),d_()},[R5,i1,t1,$1,a1,d_]);m(()=>{f5();let B=setInterval(()=>{R5(),i1(),t1(),$1()},60000);return()=>clearInterval(B)},[f5,R5,i1,t1,$1]),m(()=>{w0(new Map),D0(new Set)},[j]),m(()=>{let B=!1,U=()=>{if(B)return;requestAnimationFrame(()=>{if(B)return;X5()})};if(O)return l_(O),()=>{B=!0};if(k)return ZZ(k,50,0,j,I,h1).then((A)=>{if(B)return;d1(A.results),X8(!1)}).catch((A)=>{if(B)return;console.error("Failed to search:",A),d1([]),X8(!1)}),()=>{B=!0};return l_().then(()=>{U()}).catch((A)=>{if(B)return;console.error("Failed to load timeline:",A)}),()=>{B=!0}},[j,O,k,I,h1,l_,X5,X8,d1]),m(()=>{let B=A4.current||j;D4.current.set(B,K5())},[j,K5]),m(()=>{let B=A4.current||j;if(B===j)return;D4.current.set(B,K5()),A4.current=j,o1.current.clear(),K8(D4.current.get(j)||null),$1(),y_(),a1()},[j,y_,a1,$1,K8,K5]);let xZ=C(()=>{let{currentHashtag:B,searchQuery:U,searchOpen:A}=g1.current||{};if(!B&&!U&&!A)s1();f5()},[f5,s1]),v5=C((B,U="streaming")=>{let A=Z7({...B,...B&&B.status?{}:{status:U}});if(!A)return;let w=n1(A);if(w&&G1.current.has(w))return;u0((x)=>{let g=n1(x),Y0=Boolean(w&&g&&w===g),Z0={...Y0&&x?.artifact?x.artifact:{},...A.artifact||{}};return{...Y0&&x?x:{},...A,artifact:Z0,source:"live",originChatJid:A.originChatJid||j,openedAt:Y0&&x?.openedAt?x.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),B6=C((B,U)=>{let A=U?.turn_id,w=typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():null,g=w?w===j:B==="connected"||B==="workspace_update";if(g)x3(U),y3(U);if(B==="ui_theme"){m2(U);return}if(B==="generated_widget_open"){if(!g)return;if(A&&!z0.current)B_(A);v5(U,"loading");return}if(B==="generated_widget_delta"){if(!g)return;if(A&&!z0.current)B_(A);v5(U,"streaming");return}if(B==="generated_widget_final"){if(!g)return;if(A&&!z0.current)B_(A);v5(U,"final");return}if(B==="generated_widget_error"){if(!g)return;v5(U,"error");return}if(B==="generated_widget_close"){if(!g)return;let s=n1(U);u0((A0)=>{if(!A0||A0?.source!=="live")return A0;let f0=n1(A0);if(s&&f0&&s!==f0)return A0;return null});return}if(B?.startsWith("agent_")){if(!(B==="agent_draft_delta"||B==="agent_thought_delta"||B==="agent_draft"||B==="agent_thought"))G5()}if(B==="connected"){if(C3(U?.app_asset_version))return;c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),p0.current=null,F1();let s=j;M3(s).then((T1)=>{if(I1.current!==s)return;if(!T1||T1.status!=="active"||!T1.data)return;let j4=T1.data,R_=j4.turn_id||j4.turnId;if(R_)B_(R_);if(V_({clearSilence:!0}),I4(j4),T1.thought&&T1.thought.text)t0.current=T1.thought.text,V0({text:T1.thought.text,totalLines:T1.thought.totalLines||0});if(T1.draft&&T1.draft.text)h0.current=T1.draft.text,d({text:T1.draft.text,totalLines:T1.draft.totalLines||0})}).catch((T1)=>{console.warn("Failed to fetch agent status:",T1)});let{currentHashtag:A0,searchQuery:f0,searchOpen:q_}=g1.current||{};if(!A0&&!f0&&!q_)s1();f5();return}if(B==="agent_status"){if(!g){if(U?.type==="done"||U?.type==="error")i1(),t1();return}if(U.type==="done"||U.type==="error"){if(A&&z0.current&&A!==z0.current)return;if(U.type==="done"){T4(A||z0.current);let{currentHashtag:s,searchQuery:A0,searchOpen:f0}=g1.current||{};if(!s&&!A0&&!f0)s1();if(U.context_usage)b0(U.context_usage)}if(a1(),c_.current=!1,F1(),o1.current.clear(),i1(),$1(),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null),U.type==="error")c({type:"error",title:U.title||"Agent error"}),setTimeout(()=>c(null),8000);else c(null)}else{if(A)B_(A);if(V_({running:!0,clearSilence:!0}),U.type==="thinking")h0.current="",t0.current="",d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0});C_.current=U,c((s)=>{if(s&&s.type===U.type&&s.title===U.title)return s;return U})}return}if(B==="agent_steer_queued"){if(!g)return;if(A&&z0.current&&A!==z0.current)return;let s=A||z0.current;if(!s)return;l0.current=s,y0(s);return}if(B==="agent_followup_queued"){if(!g)return;let s=U?.row_id,A0=U?.content;if(s!=null&&typeof A0==="string"&&A0.trim())O0((f0)=>{if(f0.some((q_)=>q_?.row_id===s))return f0;return[...f0,{row_id:s,content:A0,timestamp:U?.timestamp||null,thread_id:U?.thread_id??null}]});$1();return}if(B==="agent_followup_consumed"){if(!g)return;let s=U?.row_id;if(s!=null){let T1=Q1.current.filter((j4)=>j4.row_id!==s).length;$4(T1),O0((j4)=>j4.filter((R_)=>R_.row_id!==s))}$1();let{currentHashtag:A0,searchQuery:f0,searchOpen:q_}=g1.current||{};if(!A0&&!f0&&!q_)s1();return}if(B==="agent_followup_removed"){if(!g)return;let s=U?.row_id;if(s!=null){let A0=Q1.current.filter((f0)=>f0.row_id!==s).length;o1.current.add(s),$4(A0),O0((f0)=>f0.filter((q_)=>q_.row_id!==s))}$1();return}if(B==="agent_draft_delta"){if(!g)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)B_(A);if(V_({running:!0,clearSilence:!0}),U?.reset)h0.current="";if(U?.delta)h0.current+=U.delta;let s=Date.now();if(!c4.current||s-c4.current>=100){c4.current=s;let A0=h0.current,f0=F3(A0);if(Y1.current)d((q_)=>({text:q_?.text||"",totalLines:f0,fullText:A0}));else d({text:A0,totalLines:f0})}return}if(B==="agent_draft"){if(!g)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)B_(A);V_({running:!0,clearSilence:!0});let s=U.text||"",A0=U.mode||(U.kind==="plan"?"replace":"append"),f0=Number.isFinite(U.total_lines)?U.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(U.kind==="plan")if(A0==="replace")_0(s);else _0((q_)=>(q_||"")+s);else if(!Y1.current)h0.current=s,d({text:s,totalLines:f0});return}if(B==="agent_thought_delta"){if(!g)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)B_(A);if(V_({running:!0,clearSilence:!0}),U?.reset)t0.current="";if(typeof U?.delta==="string")t0.current+=U.delta;let s=Date.now();if(Z1.current&&(!L1.current||s-L1.current>=100)){L1.current=s;let A0=t0.current;V0((f0)=>({text:f0?.text||"",totalLines:F3(A0),fullText:A0}))}return}if(B==="agent_thought"){if(!g)return;if(A&&z0.current&&A!==z0.current)return;if(A&&!z0.current)B_(A);V_({running:!0,clearSilence:!0});let s=U.text||"",A0=Number.isFinite(U.total_lines)?U.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(!Z1.current)t0.current=s,V0({text:s,totalLines:A0});return}if(B==="model_changed"){if(!g)return;if(U?.model!==void 0)m1(U.model);if(U?.thinking_level!==void 0)q1(U.thinking_level??null);if(U?.supports_thinking!==void 0)x1(Boolean(U.supports_thinking));let s=j;k3(s).then((A0)=>{if(I1.current!==s)return;if(A0)b0(A0)}).catch(()=>{});return}if(B==="extension_ui_widget"&&U?.options?.surface==="status-panel"){if((typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():j)!==j)return;let A0=typeof U?.key==="string"?U.key:"";if(!A0)return;if(w0((f0)=>aj(f0,U)),tj(U))D0((f0)=>E3(f0,A0));H3(B,U);return}if(B==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:U}));Z5(U?.updates);return}if(Ij(B)){if(!g)return;if(H3(B,U),B==="extension_ui_notify"&&typeof U?.message==="string")l(U.message,null,U?.type||"info");if(B==="extension_ui_error"&&typeof U?.error==="string")l("Extension UI error",U.error,"error",5000);return}let{currentHashtag:Y0,searchQuery:Z0,searchOpen:q0}=g1.current;if(B==="agent_response"){if(!g)return;N8(),S_.current={post:U,turnId:z0.current}}if(!Y0&&!Z0&&!q0&&g&&(B==="new_post"||B==="new_reply"||B==="agent_response"))d1((s)=>{if(!s)return[U];if(s.some((A0)=>A0.id===U.id))return s;return[...s,U]}),P4.current?.();if(B==="interaction_updated"){if(!g)return;if(Y0||Z0||q0)return;d1((s)=>{if(!s)return s;if(!s.some((A0)=>A0.id===U.id))return s;return s.map((A0)=>A0.id===U.id?U:A0)})}if(B==="interaction_deleted"){if(!g)return;if(Y0||Z0||q0)return;let s=U?.ids||[];if(s.length){if(S5(()=>{d1((A0)=>A0?A0.filter((f0)=>!s.includes(f0.id)):A0)}),T3.current)G6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[v5,F1,G5,j,G6,V_,T4,S5,i1,t1,s1,N8,B_,I4,x3,y3,R5,$1,O0,a1,C3]);m(()=>{if(typeof window>"u")return;let B=window.__PICLAW_TEST_API||{};return B.emit=B6,B.reset=()=>{N8(),F1(),c(null),d({text:"",totalLines:0}),_0(""),V0({text:"",totalLines:0}),J0(null)},B.finalize=()=>P3(),window.__PICLAW_TEST_API=B,()=>{if(window.__PICLAW_TEST_API===B)window.__PICLAW_TEST_API=void 0}},[F1,P3,B6,N8]),Vj({handleSseEvent:B6,handleConnectionStatusChange:OZ,loadPosts:l_,onWake:xZ,chatJid:j}),m(()=>{if(!N5||N5.length===0)return;let B=location.hash;if(!B||!B.startsWith("#msg-"))return;let U=B.slice(5);f1(U),history.replaceState(null,"",location.pathname+location.search)},[N5,f1]);let W6=S!==null;m(()=>{if(K!=="connected")return;let U=setInterval(()=>{let{currentHashtag:A,searchQuery:w,searchOpen:x}=g1.current||{},g=!A&&!w&&!x;if(W6){if(g)s1();$1(),y_(),a1(),d_()}else{if(g)s1();y_(),a1(),d_()}},W6?15000:60000);return()=>clearInterval(U)},[K,W6,y_,d_,a1,$1,s1]),m(()=>{return Pj(()=>{y_(),a1(),$1(),d_()})},[y_,d_,a1,$1]);let yZ=C(()=>{b_((B)=>!B)},[]),v3=C((B)=>{if(typeof window>"u")return;let U=String(B||"").trim();if(!U||U===j)return;let A=z4(window.location.href,U,{chatOnly:Z});$?.(A)},[Z,j,$]),U6=C(()=>{uj({hasWindow:typeof window<"u",currentBranchRecord:X1,renameBranchInFlight:T.current,renameBranchLockUntil:o.current,getFormLock:O3,setRenameBranchNameDraft:j0,setIsRenameBranchFormOpen:U0})},[X1]),b5=C(()=>{gj({setIsRenameBranchFormOpen:U0,setRenameBranchNameDraft:j0})},[]),b3=C(async(B)=>{await mj({hasWindow:typeof window<"u",currentBranchRecord:X1,nextName:B,openRenameForm:U6,renameBranchInFlightRef:T,renameBranchLockUntilRef:o,getFormLock:O3,setIsRenamingBranch:b,renameChatBranch:wK,refreshActiveChatAgents:i1,refreshCurrentChatBranches:t1,showIntentToast:l,closeRenameForm:b5})},[b5,X1,i1,t1,U6,b,l]),u3=C(async(B=null)=>{await hj({hasWindow:typeof window<"u",targetChatJid:B,currentChatJid:j,currentBranchRecord:X1,currentChatBranches:N0,activeChatAgents:W0,pruneChatBranch:fK,refreshActiveChatAgents:i1,refreshCurrentChatBranches:t1,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Z,navigate:$})},[W0,Z,X1,N0,j,$,i1,t1,l]),RZ=C(async(B)=>{await pj({targetChatJid:B,restoreChatBranch:vK,currentChatBranches:N0,refreshActiveChatAgents:i1,refreshCurrentChatBranches:t1,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Z,navigate:$})},[Z,N0,$,i1,t1,l]);m(()=>{if(!G||typeof window>"u")return;let B=!1;return cj({branchLoaderSourceChatJid:X,forkChatBranch:m5,setBranchLoaderState:__,navigate:$,baseHref:window.location.href,isCancelled:()=>B}),()=>{B=!0}},[G,X,$]);let wZ=C((B)=>{if(!B||typeof B!=="object")return;let U=n1(B);if(U)G1.current.delete(U);u0({...B,openedAt:new Date().toISOString()})},[]),u5=C(()=>{u0((B)=>{let U=n1(B);if(B?.source==="live"&&U)G1.current.add(U);return null})},[]),fZ=C((B,U)=>{let A=typeof B?.kind==="string"?B.kind:"",w=n1(U);if(!A||!w)return;if(A==="widget.close"){u5();return}if(A==="widget.submit"){let x=G7(B?.payload),g=K7(B?.payload),Y0=new Date().toISOString();if(u0((Z0)=>{let q0=n1(Z0);if(!Z0||q0!==w)return Z0;return{...Z0,runtimeState:{...Z0.runtimeState||{},lastEventKind:A,lastEventPayload:B?.payload||null,lastSubmitAt:Y0,lastHostUpdate:{type:"submit_pending",submittedAt:Y0,preview:x||null}}}}),!x){if(l("Widget submission received","The widget submitted data without a message payload yet.","info",3500),g)u5();return}(async()=>{try{let Z0=await o4("default",x,null,[],y5?"queue":null,j);if(w5(Z0),u0((q0)=>{let s=n1(q0);if(!q0||s!==w)return q0;return{...q0,runtimeState:{...q0.runtimeState||{},lastHostUpdate:{type:Z0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:Y0,preview:x,queued:Z0?.queued||null}}}}),l(Z0?.queued==="followup"?"Widget submission queued":"Widget submission sent",Z0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),g)u5()}catch(Z0){u0((q0)=>{let s=n1(q0);if(!q0||s!==w)return q0;return{...q0,runtimeState:{...q0.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:Y0,preview:x,error:Z0?.message||"Could not send the widget message."}}}}),l("Widget submission failed",Z0?.message||"Could not send the widget message.","warning",5000)}})();return}if(A==="widget.ready"||A==="widget.request_refresh"){let x=new Date().toISOString(),g=Boolean(B?.payload?.buildDashboard||B?.payload?.dashboardKind==="internal-state"),Y0=Number(U?.runtimeState?.refreshCount||0)+1;if(u0((Z0)=>{let q0=n1(Z0);if(!Z0||q0!==w)return Z0;return{...Z0,runtimeState:{...Z0.runtimeState||{},lastEventKind:A,lastEventPayload:B?.payload||null,...A==="widget.ready"?{readyAt:x,lastHostUpdate:{type:"ready_ack",at:x}}:{},...A==="widget.request_refresh"?{lastRefreshRequestAt:x,refreshCount:Y0,lastHostUpdate:{type:g?"refresh_building":"refresh_ack",at:x,count:Y0,echo:B?.payload||null}}:{}}}}),A==="widget.request_refresh")if(g)(async()=>{try{let Z0=await f3(B?.payload||null);u0((q0)=>{let s=n1(q0);if(!q0||s!==w)return q0;return{...q0,runtimeState:{...q0.runtimeState||{},dashboard:Z0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:Y0,echo:B?.payload||null}}}}),l("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(Z0){u0((q0)=>{let s=n1(q0);if(!q0||s!==w)return q0;return{...q0,runtimeState:{...q0.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:Y0,error:Z0?.message||"Could not build dashboard."}}}}),l("Dashboard build failed",Z0?.message||"Could not build dashboard.","warning",5000)}})();else l("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[f3,j,u5,w5,y5,l]);m(()=>{G1.current.clear(),u0(null)},[j]);let vZ=C(async()=>{await lj({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:m5,refreshActiveChatAgents:i1,refreshCurrentChatBranches:t1,showIntentToast:l,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Z,j,$,i1,t1,l]),B8=C(async(B,U)=>{await dj({hasWindow:typeof window<"u",isWebAppMode:V,path:B,label:U,showIntentToast:l,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(A)=>{let x=(typeof m0==="string"?m0.trim():"")===A?R1.current:A===t4?E_.current:null;if(typeof x?.preparePopoutTransfer==="function")return await x.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(A)=>{let w=a0.get(A);if(w&&!w.dirty){r_(A);return}if(A===t4&&p1)C1(!1)}})},[j,p1,r_,V,l,m0]);m(()=>Cj({openTab:(B,U)=>j_(B,U?{label:U}:void 0),popOutPane:(B,U)=>{B8(B,U)}}),[B8,j_]);let bZ=C(async()=>{await ij({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:h1,forkChatBranch:m5,getActiveChatAgents:y6,getChatBranches:Y6,setActiveChatAgents:H0,setCurrentChatBranches:R0,showIntentToast:l,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,h1,V,l]);m(()=>{if(!V1)return;if(typeof window>"u")return;let B=_4.current;if(!B)return;if(!X4.current){let U=z5("editorWidth",null),A=l4.current||280;X4.current=Number.isFinite(U)?U:A}if(B.style.setProperty("--editor-width",`${X4.current}px`),!M4.current){let U=z5("dockHeight",null);M4.current=Number.isFinite(U)?U:200}B.style.setProperty("--dock-height",`${M4.current}px`)},[V1]),m(()=>{if(!Z_||Z)return;return Sj(u1)},[u1,Z_,Z]),m(()=>{if(Z)return;return xj({toggleZenMode:h4,exitZenMode:P_,zenMode:H1,isZenModeActive:()=>H1})},[h4,P_,H1,Z]);let g3=Boolean(o0&&o0===(S?.turn_id||E0));if(G)return L`
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
            <div class=${`app-shell pane-popout${V1?" editor-open":""}`} ref=${_4}>
                <div class="editor-pane-container pane-popout-container">
                    ${V1&&!T_&&L`
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
                                            ${$_.length>1&&L`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${$_.map((B)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${B.id===m0?" active":""}`}
                                                                onClick=${(U)=>{u4(B.id),U.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${B.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${m0&&P1.has(m0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(B)=>{g_(m0),B.currentTarget.closest("details")?.removeAttribute("open")}}>
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
                    ${V1?L`<div class="editor-pane-host" ref=${B1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${V1&&m0&&P1.has(m0)&&L`
                        <${B3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${m0}
                            onClose=${()=>g_(m0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${N1?"":" workspace-collapsed"}${V1?" editor-open":""}${Z?" chat-only":""}${H1?" zen-mode":""}`} ref=${_4}>
            ${K0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(B)=>{if(B.target===B.currentTarget)b5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(B)=>{B.preventDefault(),b3(L0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${w1}
                            value=${L0}
                            onInput=${(B)=>{let U=B.currentTarget?.value??"";j0(String(U))}}
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
                <${qj}
                    onFileSelect=${C5}
                    visible=${N1}
                    active=${N1||V1}
                    onOpenEditor=${j_}
                    onOpenTerminalTab=${z1}
                    onOpenVncTab=${M_}
                    onToggleTerminal=${Z_?u1:void 0}
                    terminalVisible=${Boolean(Z_&&p1)}
                />
                <button
                    class=${`workspace-toggle-tab${N1?" open":" closed"}`}
                    onClick=${yZ}
                    title=${N1?"Hide workspace":"Show workspace"}
                    aria-label=${N1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${UZ} onTouchStart=${LZ}></div>
            `}
            ${K4&&L`
                <div class="editor-pane-container">
                    ${H1&&L`<div class="zen-hover-zone"></div>`}
                    ${V1&&L`
                        <${Xj}
                            tabs=${$_}
                            activeId=${m0}
                            onActivate=${u4}
                            onClose=${r_}
                            onCloseOthers=${s_}
                            onCloseAll=${$5}
                            onTogglePin=${a_}
                            onTogglePreview=${g_}
                            onEditSource=${T5}
                            previewTabs=${P1}
                            paneOverrides=${A_}
                            onToggleDock=${Z_?u1:void 0}
                            dockVisible=${Z_&&p1}
                            onToggleZen=${h4}
                            zenMode=${H1}
                            onPopOutTab=${V?void 0:B8}
                        />
                    `}
                    ${V1&&L`<div class="editor-pane-host" ref=${B1}></div>`}
                    ${V1&&m0&&P1.has(m0)&&L`
                        <${B3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${m0}
                            onClose=${()=>g_(m0)}
                        />
                    `}
                    ${Z_&&p1&&L`<div class="dock-splitter" onMouseDown=${HZ} onTouchStart=${JZ}></div>`}
                    ${Z_&&L`<div class=${`dock-panel${p1?"":" hidden"}`}>
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
                <div class="editor-splitter" onMouseDown=${FZ} onTouchStart=${zZ}></div>
            `}
            <div class="container">
                ${k&&Oj()&&L`<div class="search-results-spacer"></div>`}
                ${Z&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${X1?.agent_name?`@${X1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${X1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${N0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(B)=>v3(B.currentTarget.value)}
                                    >
                                        ${N0.map((B)=>L`
                                            <option key=${B.chat_jid} value=${B.chat_jid}>
                                                ${y8(B,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${X1?.chat_jid&&L`
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
                            ${X1?.chat_jid&&X1.chat_jid!==(X1.root_chat_jid||X1.chat_jid)&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${u3}
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
                        <button class="back-btn" onClick=${AZ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${k} · ${q4}`}</span>
                    </div>
                `}
                <${x7}
                    posts=${N5}
                    hasMore=${X6?BZ:!1}
                    onLoadMore=${X6?WZ:void 0}
                    timelineRef=${N_}
                    onHashtagClick=${DZ}
                    onMessageRef=${S1}
                    onScrollToMessage=${f1}
                    onFileRef=${P0}
                    onPostClick=${void 0}
                    onDeletePost=${IZ}
                    onOpenWidget=${wZ}
                    emptyMessage=${O?`No posts with #${O}`:k?`No results for "${k}"`:void 0}
                    agents=${K_}
                    user=${m_}
                    reverse=${X6}
                    removingPostIds=${y1}
                    searchQuery=${k}
                />
                <${K$}
                    status=${W4(S)?null:S}
                    draft=${G0}
                    plan=${$0}
                    thought=${X0}
                    pendingRequest=${B0}
                    intent=${y}
                    turnId=${E0}
                    steerQueued=${g3}
                    onPanelToggle=${H_}
                    showExtensionPanels=${!1}
                />
                <${e2}
                    session=${t}
                    onClose=${V6}
                    onRetry=${CZ}
                    onInject=${SZ}
                />
                <${V7}
                    widget=${k0}
                    onClose=${u5}
                    onWidgetEvent=${fZ}
                />
                <${K$}
                    extensionPanels=${Array.from(I0.values())}
                    pendingPanelActions=${i0}
                    onExtensionPanelAction=${TZ}
                    turnId=${E0}
                    steerQueued=${g3}
                    onPanelToggle=${H_}
                    showCorePanels=${!1}
                />
                <${e6}
                    items=${J?[]:g0}
                    onInjectQueuedFollowup=${R3}
                    onRemoveQueuedFollowup=${w3}
                    onOpenFilePill=${P0}
                />
                <${T2}
                    onPost=${()=>{let{searchQuery:B,searchOpen:U}=g1.current||{};if(!B&&!U)l_(),X5()}}
                    onFocus=${X5}
                    searchMode=${J}
                    searchScope=${I}
                    onSearch=${EZ}
                    onSearchScopeChange=${i}
                    onEnterSearch=${MZ}
                    onExitSearch=${kZ}
                    fileRefs=${p}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${u}
                    onSetFileRefs=${n}
                    messageRefs=${e}
                    onRemoveMessageRef=${V4}
                    onClearMessageRefs=${i4}
                    onSetMessageRefs=${Y5}
                    onSwitchChat=${v3}
                    onRenameSession=${b3}
                    isRenameSessionInProgress=${v}
                    onCreateSession=${vZ}
                    onDeleteSession=${u3}
                    onRestoreSession=${RZ}
                    activeEditorPath=${Z?null:m0}
                    onAttachEditorFile=${Z?void 0:J1}
                    onOpenFilePill=${P0}
                    followupQueueCount=${L_}
                    followupQueueItems=${g0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${R3}
                    onRemoveQueuedFollowup=${w3}
                    onSubmitIntercept=${PZ}
                    onMessageResponse=${w5}
                    onSubmitError=${q5}
                    onPopOutChat=${V?void 0:bZ}
                    isAgentActive=${y5}
                    activeChatAgents=${W0}
                    currentChatJid=${j}
                    connectionStatus=${K}
                    activeModel=${_1}
                    modelUsage=${k1}
                    thinkingLevel=${M1}
                    supportsThinking=${c0}
                    contextUsage=${S0}
                    notificationsEnabled=${_5}
                    notificationPermission=${v4}
                    onToggleNotifications=${b1}
                    onModelChange=${m1}
                    onModelStateChange=${N6}
                    statusNotice=${W4(S)?S:null}
                />
                <${F7}
                    request=${B0}
                    onRespond=${()=>{J0(null),p0.current=null}}
                />
            </div>
        </div>
    `}function hK(){let[_,$]=h(()=>typeof window>"u"?"http://localhost/":window.location.href);m(()=>{if(typeof window>"u")return;let Q=()=>$(window.location.href);return window.addEventListener("popstate",Q),()=>window.removeEventListener("popstate",Q)},[]);let j=C((Q,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},G=new URL(String(Q||""),window.location.href).toString();if(q)window.history.replaceState(null,"",G);else window.history.pushState(null,"",G);$(window.location.href)},[]),Z=v0(()=>new URL(_).searchParams,[_]);return L`<${mK} locationParams=${Z} navigate=${j} />`}x4(L`<${hK} />`,document.getElementById("app"));

//# debugId=ED8B64518BCAD20664756E2164756E21
//# sourceMappingURL=app.bundle.js.map
