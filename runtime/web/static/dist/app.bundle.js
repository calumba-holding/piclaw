var BZ=Object.defineProperty;var WZ=(_)=>_;function VZ(_,$){this[_]=WZ.bind(null,$)}var LZ=(_,$)=>{for(var j in $)BZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:VZ.bind($,j)})};var G5,F1,g3,UZ,T4,P3,h3,p3,c3,W8,K8,q8,l3,Q5={},K5=[],zZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,X5=Array.isArray;function V4(_,$){for(var j in $)_[j]=$[j];return _}function V8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function B5(_,$,j){var Z,N,Y,Q={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?N=$[Y]:Q[Y]=$[Y];if(arguments.length>2&&(Q.children=arguments.length>3?G5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)Q[Y]===void 0&&(Q[Y]=_.defaultProps[Y]);return N5(_,Q,Z,N,null)}function N5(_,$,j,Z,N){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++g3:N,__i:-1,__u:0};return N==null&&F1.vnode!=null&&F1.vnode(Y),Y}function W5(_){return _.children}function N$(_,$){this.props=_,this.context=$}function Y$(_,$){if($==null)return _.__?Y$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?Y$(_):null}function FZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],Y=V4({},$);Y.__v=$.__v+1,F1.vnode&&F1.vnode(Y),L8(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?Y$($):j,!!(32&$.__u),N),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,o3(Z,Y,N),$.__e=$.__=null,Y.__e!=j&&i3(Y)}}function i3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),i3(_)}function G8(_){(!_.__d&&(_.__d=!0)&&T4.push(_)&&!q5.__r++||P3!=F1.debounceRendering)&&((P3=F1.debounceRendering)||h3)(q5)}function q5(){try{for(var _,$=1;T4.length;)T4.length>$&&T4.sort(p3),_=T4.shift(),$=T4.length,FZ(_)}finally{T4.length=q5.__r=0}}function d3(_,$,j,Z,N,Y,Q,K,B,G,V){var W,U,D,I,T,M,J,k=Z&&Z.__k||K5,C=$.length;for(B=HZ(j,$,k,B,C),W=0;W<C;W++)(D=j.__k[W])!=null&&(U=D.__i!=-1&&k[D.__i]||Q5,D.__i=W,M=L8(_,D,U,N,Y,Q,K,B,G,V),I=D.__e,D.ref&&U.ref!=D.ref&&(U.ref&&U8(U.ref,null,D),V.push(D.ref,D.__c||I,D)),T==null&&I!=null&&(T=I),(J=!!(4&D.__u))||U.__k===D.__k?B=n3(D,B,_,J):typeof D.type=="function"&&M!==void 0?B=M:I&&(B=I.nextSibling),D.__u&=-7);return j.__e=T,B}function HZ(_,$,j,Z,N){var Y,Q,K,B,G,V=j.length,W=V,U=0;for(_.__k=Array(N),Y=0;Y<N;Y++)(Q=$[Y])!=null&&typeof Q!="boolean"&&typeof Q!="function"?(typeof Q=="string"||typeof Q=="number"||typeof Q=="bigint"||Q.constructor==String?Q=_.__k[Y]=N5(null,Q,null,null,null):X5(Q)?Q=_.__k[Y]=N5(W5,{children:Q},null,null,null):Q.constructor===void 0&&Q.__b>0?Q=_.__k[Y]=N5(Q.type,Q.props,Q.key,Q.ref?Q.ref:null,Q.__v):_.__k[Y]=Q,B=Y+U,Q.__=_,Q.__b=_.__b+1,K=null,(G=Q.__i=OZ(Q,j,B,W))!=-1&&(W--,(K=j[G])&&(K.__u|=2)),K==null||K.__v==null?(G==-1&&(N>V?U--:N<V&&U++),typeof Q.type!="function"&&(Q.__u|=4)):G!=B&&(G==B-1?U--:G==B+1?U++:(G>B?U--:U++,Q.__u|=4))):_.__k[Y]=null;if(W)for(Y=0;Y<V;Y++)(K=j[Y])!=null&&(2&K.__u)==0&&(K.__e==Z&&(Z=Y$(K)),s3(K,K));return Z}function n3(_,$,j,Z){var N,Y;if(typeof _.type=="function"){for(N=_.__k,Y=0;N&&Y<N.length;Y++)N[Y]&&(N[Y].__=_,$=n3(N[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=Y$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function OZ(_,$,j,Z){var N,Y,Q,K=_.key,B=_.type,G=$[j],V=G!=null&&(2&G.__u)==0;if(G===null&&K==null||V&&K==G.key&&B==G.type)return j;if(Z>(V?1:0)){for(N=j-1,Y=j+1;N>=0||Y<$.length;)if((G=$[Q=N>=0?N--:Y++])!=null&&(2&G.__u)==0&&K==G.key&&B==G.type)return Q}return-1}function T3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||zZ.test($)?j:j+"px"}function Z5(_,$,j,Z,N){var Y,Q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||T3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||T3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(c3,"$1")),Q=$.toLowerCase(),$=Q in _||$=="onFocusOut"||$=="onFocusIn"?Q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=W8,_.addEventListener($,Y?q8:K8,Y)):_.removeEventListener($,Y?q8:K8,Y);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function y3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=W8++;else if($.t<j.u)return;return j(F1.event?F1.event($):$)}}}function L8(_,$,j,Z,N,Y,Q,K,B,G){var V,W,U,D,I,T,M,J,k,C,n,l,e,j0,f,w=$.type;if($.constructor!==void 0)return null;128&j.__u&&(B=!!(32&j.__u),Y=[K=$.__e=j.__e]),(V=F1.__b)&&V($);_:if(typeof w=="function")try{if(J=$.props,k=w.prototype&&w.prototype.render,C=(V=w.contextType)&&Z[V.__c],n=V?C?C.props.value:V.__:Z,j.__c?M=(W=$.__c=j.__c).__=W.__E:(k?$.__c=W=new w(J,n):($.__c=W=new N$(J,n),W.constructor=w,W.render=DZ),C&&C.sub(W),W.state||(W.state={}),W.__n=Z,U=W.__d=!0,W.__h=[],W._sb=[]),k&&W.__s==null&&(W.__s=W.state),k&&w.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=V4({},W.__s)),V4(W.__s,w.getDerivedStateFromProps(J,W.__s))),D=W.props,I=W.state,W.__v=$,U)k&&w.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),k&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(k&&w.getDerivedStateFromProps==null&&J!==D&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(J,n),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(J,W.__s,n)===!1){$.__v!=j.__v&&(W.props=J,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),K5.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&Q.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(J,W.__s,n),k&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(D,I,T)})}if(W.context=n,W.props=J,W.__P=_,W.__e=!1,l=F1.__r,e=0,k)W.state=W.__s,W.__d=!1,l&&l($),V=W.render(W.props,W.state,W.context),K5.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,l&&l($),V=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++e<25);W.state=W.__s,W.getChildContext!=null&&(Z=V4(V4({},Z),W.getChildContext())),k&&!U&&W.getSnapshotBeforeUpdate!=null&&(T=W.getSnapshotBeforeUpdate(D,I)),j0=V!=null&&V.type===W5&&V.key==null?r3(V.props.children):V,K=d3(_,X5(j0)?j0:[j0],$,j,Z,N,Y,Q,K,B,G),W.base=$.__e,$.__u&=-161,W.__h.length&&Q.push(W),M&&(W.__E=W.__=null)}catch(H){if($.__v=null,B||Y!=null)if(H.then){for($.__u|=B?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Y[Y.indexOf(K)]=null,$.__e=K}else{for(f=Y.length;f--;)V8(Y[f]);X8($)}else $.__e=j.__e,$.__k=j.__k,H.then||X8($);F1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=JZ(j.__e,$,j,Z,N,Y,Q,B,G);return(V=F1.diffed)&&V($),128&$.__u?void 0:K}function X8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(X8))}function o3(_,$,j){for(var Z=0;Z<j.length;Z++)U8(j[Z],j[++Z],j[++Z]);F1.__c&&F1.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(Y){Y.call(N)})}catch(Y){F1.__e(Y,N.__v)}})}function r3(_){return typeof _!="object"||_==null||_.__b>0?_:X5(_)?_.map(r3):V4({},_)}function JZ(_,$,j,Z,N,Y,Q,K,B){var G,V,W,U,D,I,T,M=j.props||Q5,J=$.props,k=$.type;if(k=="svg"?N="http://www.w3.org/2000/svg":k=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((D=Y[G])&&"setAttribute"in D==!!k&&(k?D.localName==k:D.nodeType==3)){_=D,Y[G]=null;break}}if(_==null){if(k==null)return document.createTextNode(J);_=document.createElementNS(N,k,J.is&&J),K&&(F1.__m&&F1.__m($,Y),K=!1),Y=null}if(k==null)M===J||K&&_.data==J||(_.data=J);else{if(Y=Y&&G5.call(_.childNodes),!K&&Y!=null)for(M={},G=0;G<_.attributes.length;G++)M[(D=_.attributes[G]).name]=D.value;for(G in M)D=M[G],G=="dangerouslySetInnerHTML"?W=D:G=="children"||(G in J)||G=="value"&&("defaultValue"in J)||G=="checked"&&("defaultChecked"in J)||Z5(_,G,null,D,N);for(G in J)D=J[G],G=="children"?U=D:G=="dangerouslySetInnerHTML"?V=D:G=="value"?I=D:G=="checked"?T=D:K&&typeof D!="function"||M[G]===D||Z5(_,G,D,M[G],N);if(V)K||W&&(V.__html==W.__html||V.__html==_.innerHTML)||(_.innerHTML=V.__html),$.__k=[];else if(W&&(_.innerHTML=""),d3($.type=="template"?_.content:_,X5(U)?U:[U],$,j,Z,k=="foreignObject"?"http://www.w3.org/1999/xhtml":N,Y,Q,Y?Y[0]:j.__k&&Y$(j,0),K,B),Y!=null)for(G=Y.length;G--;)V8(Y[G]);K||(G="value",k=="progress"&&I==null?_.removeAttribute("value"):I!=null&&(I!==_[G]||k=="progress"&&!I||k=="option"&&I!=M[G])&&Z5(_,G,I,M[G],N),G="checked",T!=null&&T!=_[G]&&Z5(_,G,T,M[G],N))}return _}function U8(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){F1.__e(N,j)}}function s3(_,$,j){var Z,N;if(F1.unmount&&F1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||U8(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){F1.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&s3(Z[N],$,j||typeof _.type!="function");j||V8(_.__e),_.__c=_.__=_.__e=void 0}function DZ(_,$,j){return this.constructor(_,j)}function V5(_,$,j){var Z,N,Y,Q;$==document&&($=document.documentElement),F1.__&&F1.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],Q=[],L8($,_=(!Z&&j||$).__k=B5(W5,null,[_]),N||Q5,Q5,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?G5.call($.childNodes):null,Y,!Z&&j?j:N?N.__e:$.firstChild,Z,Q),o3(Y,_,Q)}function a3(_){function $(j){var Z,N;return this.getChildContext||(Z=new Set,(N={})[$.__c]=this,this.getChildContext=function(){return N},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Z.forEach(function(Q){Q.__e=!0,G8(Q)})},this.sub=function(Y){Z.add(Y);var Q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Z&&Z.delete(Y),Q&&Q.call(Y)}}),j.children}return $.__c="__cC"+l3++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}G5=K5.slice,F1={__e:function(_,$,j,Z){for(var N,Y,Q;$=$.__;)if((N=$.__c)&&!N.__)try{if((Y=N.constructor)&&Y.getDerivedStateFromError!=null&&(N.setState(Y.getDerivedStateFromError(_)),Q=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),Q=N.__d),Q)return N.__E=N}catch(K){_=K}throw _}},g3=0,UZ=function(_){return _!=null&&_.constructor===void 0},N$.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=V4({},this.state),typeof _=="function"&&(_=_(V4({},j),this.props)),_&&V4(j,_),_!=null&&this.__v&&($&&this._sb.push($),G8(this))},N$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),G8(this))},N$.prototype.render=W5,T4=[],h3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p3=function(_,$){return _.__v.__b-$.__v.__b},q5.__r=0,c3=/(PointerCapture)$|Capture$/i,W8=0,K8=y3(!1),q8=y3(!0),l3=0;var y4,z1,Q8,S3,Q$=0,t3=[],A1=F1,x3=A1.__b,w3=A1.__r,R3=A1.diffed,f3=A1.__c,v3=A1.unmount,b3=A1.__;function K$(_,$){A1.__h&&A1.__h(z1,_,Q$||$),Q$=0;var j=z1.__H||(z1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function p(_){return Q$=1,z8(Z2,_)}function z8(_,$,j){var Z=K$(y4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):Z2(void 0,$),function(K){var B=Z.__N?Z.__N[0]:Z.__[0],G=Z.t(B,K);B!==G&&(Z.__N=[G,Z.__[1]],Z.__c.setState({}))}],Z.__c=z1,!z1.__f)){var N=function(K,B,G){if(!Z.__c.__H)return!0;var V=Z.__c.__H.__.filter(function(U){return U.__c});if(V.every(function(U){return!U.__N}))return!Y||Y.call(this,K,B,G);var W=Z.__c.props!==K;return V.some(function(U){if(U.__N){var D=U.__[0];U.__=U.__N,U.__N=void 0,D!==U.__[0]&&(W=!0)}}),Y&&Y.call(this,K,B,G)||W};z1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:Q}=z1;z1.componentWillUpdate=function(K,B,G){if(this.__e){var V=Y;Y=void 0,N(K,B,G),Y=V}Q&&Q.call(this,K,B,G)},z1.shouldComponentUpdate=N}return Z.__N||Z.__}function g(_,$){var j=K$(y4++,3);!A1.__s&&H8(j.__H,$)&&(j.__=_,j.u=$,z1.__H.__h.push(j))}function F8(_,$){var j=K$(y4++,4);!A1.__s&&H8(j.__H,$)&&(j.__=_,j.u=$,z1.__h.push(j))}function S(_){return Q$=5,I0(function(){return{current:_}},[])}function e3(_,$,j){Q$=6,F8(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function I0(_,$){var j=K$(y4++,7);return H8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return Q$=8,I0(function(){return _},$)}function _2(_){var $=z1.context[_.__c],j=K$(y4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(z1)),$.props.value):_.__}function $2(_,$){A1.useDebugValue&&A1.useDebugValue($?$(_):_)}function j2(_){var $=K$(y4++,10),j=p();return $.__=_,z1.componentDidCatch||(z1.componentDidCatch=function(Z,N){$.__&&$.__(Z,N),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function EZ(){for(var _;_=t3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(Y5),$.__h.some(B8),$.__h=[]}catch(j){$.__h=[],A1.__e(j,_.__v)}}}A1.__b=function(_){z1=null,x3&&x3(_)},A1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),b3&&b3(_,$)},A1.__r=function(_){w3&&w3(_),y4=0;var $=(z1=_.__c).__H;$&&(Q8===z1?($.__h=[],z1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(Y5),$.__h.some(B8),$.__h=[],y4=0)),Q8=z1},A1.diffed=function(_){R3&&R3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(t3.push($)!==1&&S3===A1.requestAnimationFrame||((S3=A1.requestAnimationFrame)||AZ)(EZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),Q8=z1=null},A1.__c=function(_,$){$.some(function(j){try{j.__h.some(Y5),j.__h=j.__h.filter(function(Z){return!Z.__||B8(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],A1.__e(Z,j.__v)}}),f3&&f3(_,$)},A1.unmount=function(_){v3&&v3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{Y5(Z)}catch(N){$=N}}),j.__H=void 0,$&&A1.__e($,j.__v))};var u3=typeof requestAnimationFrame=="function";function AZ(_){var $,j=function(){clearTimeout(Z),u3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);u3&&($=requestAnimationFrame(j))}function Y5(_){var $=z1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),z1=$}function B8(_){var $=z1;_.__c=_.__(),z1=$}function H8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function Z2(_,$){return typeof $=="function"?$(_):$}var N2=function(_,$,j,Z){var N;$[0]=0;for(var Y=1;Y<$.length;Y++){var Q=$[Y++],K=$[Y]?($[0]|=Q?1:2,j[$[Y++]]):$[++Y];Q===3?Z[0]=K:Q===4?Z[1]=Object.assign(Z[1]||{},K):Q===5?(Z[1]=Z[1]||{})[$[++Y]]=K:Q===6?Z[1][$[++Y]]+=K+"":Q?(N=_.apply(K,N2(_,K,j,["",null])),Z.push(N),K[0]?$[0]|=2:($[Y-2]=0,$[Y]=N)):Z.push(K)}return Z},m3=new Map;function MZ(_){var $=m3.get(this);return $||($=new Map,m3.set(this,$)),($=N2(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,Y=1,Q="",K="",B=[0],G=function(U){Y===1&&(U||(Q=Q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?B.push(0,U,Q):Y===3&&(U||Q)?(B.push(3,U,Q),Y=2):Y===2&&Q==="..."&&U?B.push(4,U,0):Y===2&&Q&&!U?B.push(5,0,!0,Q):Y>=5&&((Q||!U&&Y===5)&&(B.push(Y,0,Q,N),Y=6),U&&(B.push(Y,U,0,N),Y=6)),Q=""},V=0;V<j.length;V++){V&&(Y===1&&G(),G(V));for(var W=0;W<j[V].length;W++)Z=j[V][W],Y===1?Z==="<"?(G(),B=[B],Y=3):Q+=Z:Y===4?Q==="--"&&Z===">"?(Y=1,Q=""):Q=Z+Q[0]:K?Z===K?K="":Q+=Z:Z==='"'||Z==="'"?K=Z:Z===">"?(G(),Y=1):Y&&(Z==="="?(Y=5,N=Q,Q=""):Z==="/"&&(Y<5||j[V][W+1]===">")?(G(),Y===3&&(B=B[0]),Y=B,(B=B[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(G(),Y=2):Q+=Z),Y===3&&Q==="!--"&&(Y=4,B=B[0])}return G(),B}(_)),$),arguments,[])).length>1?$:$[0]}var z=MZ.bind(B5);var N_={};LZ(N_,{uploadWorkspaceFile:()=>U5,uploadMedia:()=>I8,updateWorkspaceFile:()=>pZ,submitAdaptiveCardAction:()=>C8,streamSidePrompt:()=>mZ,stopAutoresearch:()=>fZ,steerAgentQueueItem:()=>uZ,setWorkspaceVisibility:()=>x$,setAgentThoughtVisibility:()=>y8,sendPeerAgentMessage:()=>xZ,sendAgentMessage:()=>n4,searchPosts:()=>J8,restoreChatBranch:()=>SZ,respondToAgentRequest:()=>L5,renameWorkspaceFile:()=>v8,renameChatBranch:()=>TZ,removeAgentQueueItem:()=>bZ,pruneChatBranch:()=>yZ,moveWorkspaceEntry:()=>b8,getWorkspaceTree:()=>S$,getWorkspaceRawUrl:()=>z5,getWorkspaceFile:()=>w8,getWorkspaceDownloadUrl:()=>F5,getWorkspaceBranch:()=>hZ,getTimeline:()=>d4,getThumbnailUrl:()=>S8,getThread:()=>D8,getPostsByHashtag:()=>O8,getMediaUrl:()=>y_,getMediaText:()=>x8,getMediaInfo:()=>q$,getMediaBlob:()=>gZ,getChatBranches:()=>PZ,getAutoresearchStatus:()=>RZ,getAgents:()=>M8,getAgentThought:()=>T8,getAgentStatus:()=>k8,getAgentQueueState:()=>vZ,getAgentModels:()=>y$,getAgentContext:()=>wZ,getActiveChatAgents:()=>A8,forkChatBranch:()=>T$,deleteWorkspaceFile:()=>u8,deletePost:()=>E8,createWorkspaceFile:()=>f8,createReply:()=>CZ,createPost:()=>IZ,attachWorkspaceFile:()=>R8,addToWhitelist:()=>P8,SSEClient:()=>H5});async function e0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function Y2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function kZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:Q,done:K}=await j.read();if(K)break;N+=Z.decode(Q,{stream:!0});let B=N.split(`

`);N=B.pop()||"";for(let G of B){let V=Y2(G);if(V)$(V.event,V.data)}}N+=Z.decode();let Y=Y2(N);if(Y)$(Y.event,Y.data)}async function d4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return e0(Z)}async function O8(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function J8(_,$=50,j=0,Z=null,N="current",Y=null){let Q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",K=N?`&scope=${encodeURIComponent(N)}`:"",B=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return e0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Q}${K}${B}`)}async function D8(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return e0(`/thread/${_}${j}`)}async function IZ(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return e0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function CZ(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function E8(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return e0(N,{method:"DELETE"})}async function n4(_,$,j=null,Z=[],N=null,Y=null){let Q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return e0(`/agent/${_}/message${Q}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function A8(){return e0("/agent/active-chats")}async function PZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return e0(`/agent/branches${Z}`)}async function T$(_,$={}){return e0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function TZ(_,$={}){return e0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function yZ(_){return e0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function SZ(_,$={}){return e0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function xZ(_,$,j,Z="auto",N={}){let Y={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return e0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function M8(){return e0("/agent/roster")}async function k8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/status${$}`)}async function wZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/context${$}`)}async function RZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/autoresearch/status${$}`)}async function fZ(_=null,$={}){return e0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function vZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/queue-state${$}`)}async function bZ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function uZ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function y$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/models${$}`)}async function I8(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function L5(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function C8(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function mZ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await kZ(j,(Y,Q)=>{if($.onEvent?.(Y,Q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(Q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(Q?.delta||"");else if(Y==="side_prompt_done")Z=Q;else if(Y==="side_prompt_error")N=Q}),N){let Y=Error(N?.error||"Side prompt failed");throw Y.payload=N,Y}return Z}async function P8(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function T8(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return e0(j)}async function y8(_,$,j){return e0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function y_(_){return`/media/${_}`}function S8(_){return`/media/${_}/thumbnail`}async function q$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function x8(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function gZ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function S$(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return e0(Z)}async function hZ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return e0($)}async function w8(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return e0(N)}async function pZ(_,$){return e0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function R8(_){return e0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function U5(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let Y=N.toString(),Q=Y?`/workspace/upload?${Y}`:"/workspace/upload",K=await fetch(""+Q,{method:"POST",body:Z});if(!K.ok){let B=await K.json().catch(()=>({error:"Upload failed"})),G=Error(B.error||`HTTP ${K.status}`);throw G.status=K.status,G.code=B.code,G}return K.json()}async function f8(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(N.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=N.code,Y}return Z.json()}async function v8(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function b8(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function u8(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return e0($,{method:"DELETE"})}async function x$(_,$=!1){return e0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function z5(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function F5(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class H5{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function O5(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function cZ(_,$){let j=O5(_),Z=O5($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function m8(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function g8(_,$,j=Date.now(),Z=700){let N=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!N.value||!Number.isFinite(N.updatedAt)||j-N.updatedAt>Z?Y:`${N.value}${Y}`,updatedAt:j}}function lZ(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let N=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let Q=0;Q<j;Q+=1)Y.push((N+Q)%j);return Y}function iZ(_,$,j=0,Z=(N)=>N){let N=O5($);if(!N)return-1;let Y=Array.isArray(_)?_:[],Q=lZ(Y.length,j),K=Y.map((B)=>O5(Z(B)));for(let B of Q)if(K[B].startsWith(N))return B;for(let B of Q)if(K[B].includes(N))return B;return-1}function h8(_,$,j=-1,Z=(N)=>N){let N=Array.isArray(_)?_:[];if(j>=0&&j<N.length){let Y=Z(N[j]);if(cZ(Y,$))return j}return iZ(N,$,0,Z)}function H_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function B1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function G$(_,$=!1){let j=H_(_);if(j===null)return $;return j==="true"}function X$(_,$=null){let j=H_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function J5(_){return String(_||"").trim().toLowerCase()}function p8(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return J5($[1]||"")}function dZ(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=J5(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function Q2(_,$,j={}){let Z=p8($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return dZ(_).filter((Y)=>{if(N&&Y?.chat_jid===N)return!1;return J5(Y?.agent_name).startsWith(Z)})}function c8(_){let $=J5(_);return $?`@${$} `:""}function K2(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function D5(_){let $=l8(_);return $?`@${$}`:""}function l8(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function i8(_,$=""){let j=String(_||""),Z=l8(j),N=l8($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Z}`;if(Z===N)return{normalized:Z,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Z!==j.trim())return{normalized:Z,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function q2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?D5(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function nZ(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",N=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&N===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function E5(_,$={}){let j=D5(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",N=nZ(_,$);return N.length>0?`${j} — ${Z} • ${N.join(" • ")}`:`${j} — ${Z}`}function G2(_,$,j){let Z=D5(_),N=D5($),Y=String(j||"").trim();if(Z&&N&&Z!==N)return`Restored archived ${Z} as ${N} because ${Z} is already in use.`;if(N)return`Restored ${N}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Y||"branch"}.`}function l_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:Y="Remove",icon:Q="file"}){let K=`${_}-file-pill`,B=`${_}-file-name`,G=`${_}-file-remove`,V=Q==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${K} title=${j||$} onClick=${N}>
      ${V}
      <span class=${B}>${$}</span>
      ${Z&&z`
        <button
          class=${G}
          onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),Z()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var oZ=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function rZ({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,Y="Compact context",K=`${Z!=null?`Context: ${X2(Z)} / ${X2(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,B=9,G=2*Math.PI*9,V=j/100*G,W=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${K}
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
                    stroke=${W}
                    stroke-width="2.5"
                    stroke-dasharray=${`${V} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function X2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function B2({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:Y,onEnterSearch:Q,onExitSearch:K,fileRefs:B=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:W=[],onRemoveMessageRef:U,onClearMessageRefs:D,activeModel:I=null,modelUsage:T=null,thinkingLevel:M=null,supportsThinking:J=!1,contextUsage:k=null,onContextCompact:C,notificationsEnabled:n=!1,notificationPermission:l="default",onToggleNotifications:e,onModelChange:j0,onModelStateChange:f,activeEditorPath:w=null,onAttachEditorFile:H,onOpenFilePill:R,followupQueueItems:c=[],onInjectQueuedFollowup:Q0,onRemoveQueuedFollowup:i,onSubmitIntercept:K0,onMessageResponse:Y0,onPopOutChat:N0,isAgentActive:B0=!1,activeChatAgents:W0=[],currentChatJid:U0="web:default",connectionStatus:O0="connected",onSetFileRefs:P0,onSetMessageRefs:n0,onSubmitError:x0,onSwitchChat:T0,onRenameSession:o0,isRenameSessionInProgress:r0=!1,onCreateSession:y0,onDeleteSession:b0,onRestoreSession:s0}){let[d0,F0]=p(""),[$1,H1]=p(""),[G1,v1]=p([]),[h1,N1]=p(!1),[L1,Q1]=p([]),[M1,s]=p(0),[k0,z0]=p(!1),[C0,M0]=p([]),[l0,H0]=p(0),[g0,R0]=p(!1),[w0,i0]=p(!1),[G0,p0]=p(!1),[E0,v0]=p(!1),[u0,O1]=p([]),[h,q0]=p(0),[A0,c0]=p(0),[j1,p1]=p(!1),[n1,Z1]=p(0),[C1,W_]=p(null),W1=S(null),D_=S(null),V_=S(null),e1=S(null),__=S(null),b1=S(null),n_=S(null),x_=S(null),Y_=S({value:"",updatedAt:0}),N4=S(0),T1=S(!1),o_=200,w_=(L)=>{let y=new Set,u=[];for(let d of L||[]){if(typeof d!=="string")continue;let J0=d.trim();if(!J0||y.has(J0))continue;y.add(J0),u.push(J0)}return u},u1=()=>{let L=H_("piclaw_compose_history");if(!L)return[];try{let y=JSON.parse(L);if(!Array.isArray(y))return[];return w_(y)}catch{return[]}},E1=(L)=>{B1("piclaw_compose_history",JSON.stringify(L))},Q_=S(u1()),K_=S(-1),K1=S(""),$_=d0.trim()||G1.length>0||B.length>0||W.length>0,a0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),o1=typeof window<"u"&&typeof Notification<"u",Y4=typeof window<"u"?Boolean(window.isSecureContext):!1,f4=o1&&Y4&&l!=="denied",R_=l==="granted"&&n,v4=R_?"Disable notifications":"Enable notifications",E_=G1.length>0||B.length>0||W.length>0,b4=O0==="disconnected"?"Reconnecting":String(O0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(L)=>L.toUpperCase()),Q4=O0==="disconnected"?"Reconnecting":`Connection: ${b4}`,K4=(Array.isArray(W0)?W0:[]).filter((L)=>!L?.archived_at),G_=(()=>{for(let L of Array.isArray(W0)?W0:[]){let y=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(y&&y===U0)return L}return null})(),o5=Boolean(G_&&G_.chat_jid===(G_.root_chat_jid||G_.chat_jid)),X1=I0(()=>{let L=new Set,y=[];for(let u of Array.isArray(W0)?W0:[]){let d=typeof u?.chat_jid==="string"?u.chat_jid.trim():"";if(!d||d===U0||L.has(d))continue;if(!(typeof u?.agent_name==="string"?u.agent_name.trim():""))continue;L.add(d),y.push(u)}return y},[W0,U0]),y1=X1.length>0,f_=y1&&typeof T0==="function",j_=y1&&typeof s0==="function",m1=Boolean(r0||T1.current),S1=!j&&typeof o0==="function"&&!m1,r1=!j&&typeof y0==="function",J1=!j&&typeof b0==="function"&&!o5,D1=!j&&(f_||j_||S1||r1||J1),A_=I||"",q4=J&&M?` (${M})`:"",u4=q4.trim()?`${M}`:"",O4=typeof T?.hint_short==="string"?T.hint_short.trim():"",r_=[u4||null,O4||null].filter(Boolean).join(" • "),s_=[A_?`Current model: ${A_}${q4}`:null,T?.plan?`Plan: ${T.plan}`:null,O4||null,T?.primary?.reset_description||null,T?.secondary?.reset_description||null].filter(Boolean),m4=w0?"Switching model…":s_.join(" • ")||`Current model: ${A_}${q4} (tap to open model picker)`,G4=(L)=>{if(!L||typeof L!=="object")return;let y=L.model??L.current;if(typeof f==="function")f({model:y??null,thinking_level:L.thinking_level??null,supports_thinking:L.supports_thinking,provider_usage:L.provider_usage??null});if(y&&typeof j0==="function")j0(y)},k1=(L)=>{let y=L||W1.current;if(!y)return;y.style.height="auto",y.style.height=`${y.scrollHeight}px`,y.style.overflowY="hidden"},J4=(L)=>{if(!L)return{content:L,fileRefs:[]};let u=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let t0=0;t0<u.length;t0+=1)if(u[t0].trim()==="Files:"&&u[t0+1]&&/^\s*-\s+/.test(u[t0+1])){d=t0;break}if(d===-1)return{content:L,fileRefs:[]};let J0=[],Z0=d+1;for(;Z0<u.length;Z0+=1){let t0=u[Z0];if(/^\s*-\s+/.test(t0))J0.push(t0.replace(/^\s*-\s+/,"").trim());else if(!t0.trim())break;else break}if(J0.length===0)return{content:L,fileRefs:[]};let U1=u.slice(0,d),P1=u.slice(Z0);return{content:[...U1,...P1].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:J0}},g4=(L)=>{if(!L)return{content:L,messageRefs:[]};let u=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let t0=0;t0<u.length;t0+=1)if(u[t0].trim()==="Referenced messages:"&&u[t0+1]&&/^\s*-\s+/.test(u[t0+1])){d=t0;break}if(d===-1)return{content:L,messageRefs:[]};let J0=[],Z0=d+1;for(;Z0<u.length;Z0+=1){let t0=u[Z0];if(/^\s*-\s+/.test(t0)){let W4=t0.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W4)J0.push(W4[1])}else if(!t0.trim())break;else break}if(J0.length===0)return{content:L,messageRefs:[]};let U1=u.slice(0,d),P1=u.slice(Z0);return{content:[...U1,...P1].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:J0}},e4=(L)=>{let y=J4(L||""),u=g4(y.content||"");return{text:u.content||"",fileRefs:y.fileRefs,messageRefs:u.messageRefs}},v_=(L)=>{if(!L.startsWith("/")||L.includes(`
`)){z0(!1),Q1([]);return}let y=L.toLowerCase().split(" ")[0];if(y.length<1){z0(!1),Q1([]);return}let u=oZ.filter((d)=>d.name.startsWith(y)||d.name.replace(/-/g,"").startsWith(y.replace(/-/g,"")));if(u.length>0&&!(u.length===1&&u[0].name===y))R0(!1),M0([]),Q1(u),s(0),z0(!0);else z0(!1),Q1([])},D4=(L)=>{let y=d0,u=y.indexOf(" "),d=u>=0?y.slice(u):"",J0=L.name+d;F0(J0),z0(!1),Q1([]),requestAnimationFrame(()=>{let Z0=W1.current;if(!Z0)return;let U1=J0.length;Z0.selectionStart=U1,Z0.selectionEnd=U1,Z0.focus()})},E4=(L)=>{if(p8(L)==null){R0(!1),M0([]);return}let y=Q2(K4,L,{currentChatJid:U0});if(y.length>0&&!(y.length===1&&c8(y[0].agent_name).trim().toLowerCase()===String(L||"").trim().toLowerCase()))z0(!1),Q1([]),M0(y),H0(0),R0(!0);else R0(!1),M0([])},h4=(L)=>{let y=c8(L?.agent_name);if(!y)return;F0(y),R0(!1),M0([]),requestAnimationFrame(()=>{let u=W1.current;if(!u)return;let d=y.length;u.selectionStart=d,u.selectionEnd=d,u.focus()})},X4=()=>{if(j||!f_&&!j_&&!S1&&!r1&&!J1)return!1;return Y_.current={value:"",updatedAt:0},p0(!1),z0(!1),Q1([]),R0(!1),M0([]),v0(!0),!0},L_=(L)=>{if(L?.preventDefault?.(),L?.stopPropagation?.(),j||!f_&&!j_&&!S1&&!r1&&!J1)return;if(E0){Y_.current={value:"",updatedAt:0},v0(!1);return}X4()},Z_=(L)=>{let y=typeof L==="string"?L.trim():"";if(v0(!1),!y||y===U0){requestAnimationFrame(()=>W1.current?.focus());return}T0?.(y)},x1=async(L)=>{let y=typeof L==="string"?L.trim():"";if(v0(!1),!y||typeof s0!=="function"){requestAnimationFrame(()=>W1.current?.focus());return}try{await s0(y)}catch(u){console.warn("Failed to restore session:",u),requestAnimationFrame(()=>W1.current?.focus())}},p4=(L)=>{let u=(Array.isArray(L)?L:[]).findIndex((d)=>!d?.disabled);return u>=0?u:0},I1=I0(()=>{let L=[];for(let y of X1){let u=Boolean(y?.archived_at),d=typeof y?.agent_name==="string"?y.agent_name.trim():"",J0=typeof y?.chat_jid==="string"?y.chat_jid.trim():"";if(!d||!J0)continue;L.push({type:"session",key:`session:${J0}`,label:`@${d} — ${J0}${y?.is_active?" active":""}${u?" archived":""}`,chat:y,disabled:u?!j_:!f_})}if(r1)L.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(S1)L.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:m1});if(J1)L.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return L},[X1,j_,f_,r1,S1,J1,m1]),b_=async(L)=>{if(L?.preventDefault)L.preventDefault();if(L?.stopPropagation)L.stopPropagation();if(typeof o0!=="function"||r0||T1.current)return;T1.current=!0,v0(!1);try{await o0()}catch(y){console.warn("Failed to rename session:",y)}finally{T1.current=!1}requestAnimationFrame(()=>W1.current?.focus())},A4=async()=>{if(typeof y0!=="function")return;v0(!1);try{await y0()}catch(L){console.warn("Failed to create session:",L)}requestAnimationFrame(()=>W1.current?.focus())},M4=async()=>{if(typeof b0!=="function")return;v0(!1);try{await b0(U0)}catch(L){console.warn("Failed to delete session:",L)}requestAnimationFrame(()=>W1.current?.focus())},B4=(L)=>{if(j)H1(L);else F0(L),v_(L),E4(L);requestAnimationFrame(()=>k1())},w1=(L)=>{let y=j?$1:d0,u=y&&!y.endsWith(`
`)?`
`:"",d=`${y}${u}${L}`.trimStart();B4(d)},a_=(L)=>{let y=L?.command?.model_label;if(y)return y;let u=L?.command?.message;if(typeof u==="string"){let d=u.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},u_=async(L)=>{if(j||w0)return;i0(!0);try{let y=await n4("default",L,null,[],null,U0),u=a_(y);G4({model:u??I??null,thinking_level:y?.command?.thinking_level,supports_thinking:y?.command?.supports_thinking});try{let d=await y$(U0);if(d)G4(d)}catch{}return _?.(),!0}catch(y){return console.error("Failed to switch model:",y),alert("Failed to switch model: "+y.message),!1}finally{i0(!1)}},c4=async()=>{await u_("/cycle-model")},t_=async(L)=>{if(!L||w0)return;if(await u_(`/model ${L}`))p0(!1)},k4=(L)=>{if(!L||L.disabled)return;if(L.type==="session"){let y=L.chat;if(y?.archived_at)x1(y.chat_jid);else Z_(y.chat_jid);return}if(L.type==="action"){if(L.action==="new"){A4();return}if(L.action==="rename"){b_();return}if(L.action==="delete")M4()}},l4=(L)=>{L.preventDefault(),L.stopPropagation(),Y_.current={value:"",updatedAt:0},v0(!1),p0((y)=>!y)},M_=async()=>{if(j)return;C?.(),await k_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},U_=(L)=>{if(L==="queue"||L==="steer"||L==="auto")return L;return B0?"queue":null},k_=async(L,y,u={})=>{let{includeMedia:d=!0,includeFileRefs:J0=!0,includeMessageRefs:Z0=!0,clearAfterSubmit:U1=!0,recordHistory:P1=!0}=u||{},g_=typeof L==="string"?L:L&&typeof L?.target?.value==="string"?L.target.value:d0,t0=typeof g_==="string"?g_:"";if(!t0.trim()&&(d?G1.length===0:!0)&&(J0?B.length===0:!0)&&(Z0?W.length===0:!0))return;z0(!1),Q1([]),R0(!1),M0([]),v0(!1),W_(null);let W4=d?[...G1]:[],_$=J0?[...B]:[],$$=Z0?[...W]:[],C4=t0.trim();if(P1&&C4){let s1=Q_.current,R1=w_(s1.filter((j$)=>j$!==C4));if(R1.push(C4),R1.length>200)R1.splice(0,R1.length-200);Q_.current=R1,E1(R1),K_.current=-1,K1.current=""}let h_=()=>{if(d)v1([...W4]);if(J0)P0?.(_$);if(Z0)n0?.($$);F0(C4),requestAnimationFrame(()=>k1())};if(U1)F0(""),v1([]),V?.(),D?.();(async()=>{try{if(await K0?.({content:C4,submitMode:y,fileRefs:_$,messageRefs:$$,mediaFiles:W4})){_?.();return}let R1=[];for(let z_ of W4){let c1=await I8(z_);R1.push(c1.id)}let j$=_$.length?`Files:
${_$.map((z_)=>`- ${z_}`).join(`
`)}`:"",p_=$$.length?`Referenced messages:
${$$.map((z_)=>`- message:${z_}`).join(`
`)}`:"",P4=R1.length?`Attachments:
${R1.map((z_,c1)=>{let t$=W4[c1]?.name||`attachment-${c1+1}`;return`- attachment:${z_} (${t$})`}).join(`
`)}`:"",a$=[C4,j$,p_,P4].filter(Boolean).join(`

`),_4=await n4("default",a$,null,R1,U_(y),U0);if(Y0?.(_4),_4?.command){G4({model:_4.command.model_label??I??null,thinking_level:_4.command.thinking_level,supports_thinking:_4.command.supports_thinking});try{let z_=await y$(U0);if(z_)G4(z_)}catch{}}_?.()}catch(s1){if(U1)h_();let R1=s1?.message||"Failed to send message.";W_(R1),x0?.(R1),console.error("Failed to post:",s1)}})()},i4=(L)=>{Q0?.(L)},I_=x((L)=>{if(j||!G0&&!E0||L?.isComposing)return!1;let y=()=>{L.preventDefault?.(),L.stopPropagation?.()},u=()=>{Y_.current={value:"",updatedAt:0}};if(L.key==="Escape"){if(y(),u(),G0)p0(!1);if(E0)v0(!1);return!0}if(G0){if(L.key==="ArrowDown"){if(y(),u(),u0.length>0)q0((d)=>(d+1)%u0.length);return!0}if(L.key==="ArrowUp"){if(y(),u(),u0.length>0)q0((d)=>(d-1+u0.length)%u0.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&u0.length>0)return y(),u(),t_(u0[Math.max(0,Math.min(h,u0.length-1))]),!0;if(m8(L)&&u0.length>0){y();let d=g8(Y_.current,L.key);Y_.current=d;let J0=h8(u0,d.value,h,(Z0)=>Z0);if(J0>=0)q0(J0);return!0}}if(E0){if(L.key==="ArrowDown"){if(y(),u(),I1.length>0)c0((d)=>(d+1)%I1.length);return!0}if(L.key==="ArrowUp"){if(y(),u(),I1.length>0)c0((d)=>(d-1+I1.length)%I1.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&I1.length>0)return y(),u(),k4(I1[Math.max(0,Math.min(A0,I1.length-1))]),!0;if(m8(L)&&I1.length>0){y();let d=g8(Y_.current,L.key);Y_.current=d;let J0=h8(I1,d.value,A0,(Z0)=>Z0.label);if(J0>=0)c0(J0);return!0}}return!1},[j,G0,E0,u0,h,I1,A0,t_]),I4=(L)=>{if(L.isComposing)return;if(j&&L.key==="Escape"){L.preventDefault(),H1(""),K?.();return}if(I_(L))return;let y=W1.current?.value??(j?$1:d0);if(K2(L,y,{searchMode:j,showSessionSwitcherButton:D1})){L.preventDefault(),X4();return}if(g0&&C0.length>0){let u=W1.current?.value??(j?$1:d0);if(!String(u||"").match(/^@([a-zA-Z0-9_-]*)$/))R0(!1),M0([]);else{if(L.key==="ArrowDown"){L.preventDefault(),H0((d)=>(d+1)%C0.length);return}if(L.key==="ArrowUp"){L.preventDefault(),H0((d)=>(d-1+C0.length)%C0.length);return}if(L.key==="Tab"||L.key==="Enter"){L.preventDefault(),h4(C0[l0]);return}if(L.key==="Escape"){L.preventDefault(),R0(!1),M0([]);return}}}if(k0&&L1.length>0){let u=W1.current?.value??(j?$1:d0);if(!String(u||"").startsWith("/"))z0(!1),Q1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),s((d)=>(d+1)%L1.length);return}if(L.key==="ArrowUp"){L.preventDefault(),s((d)=>(d-1+L1.length)%L1.length);return}if(L.key==="Tab"){L.preventDefault(),D4(L1[M1]);return}if(L.key==="Enter"&&!L.shiftKey){if(!y.includes(" ")){L.preventDefault();let J0=L1[M1];z0(!1),Q1([]),k_(J0.name);return}}if(L.key==="Escape"){L.preventDefault(),z0(!1),Q1([]);return}}}if(!j&&(L.key==="ArrowUp"||L.key==="ArrowDown")&&!L.metaKey&&!L.ctrlKey&&!L.altKey&&!L.shiftKey){let u=W1.current;if(!u)return;let d=u.value||"",J0=u.selectionStart===0&&u.selectionEnd===0,Z0=u.selectionStart===d.length&&u.selectionEnd===d.length;if(L.key==="ArrowUp"&&J0||L.key==="ArrowDown"&&Z0){let U1=Q_.current;if(!U1.length)return;L.preventDefault();let P1=K_.current;if(L.key==="ArrowUp"){if(P1===-1)K1.current=d,P1=U1.length-1;else if(P1>0)P1-=1;K_.current=P1,B4(U1[P1]||"")}else{if(P1===-1)return;if(P1<U1.length-1)P1+=1,K_.current=P1,B4(U1[P1]||"");else K_.current=-1,B4(K1.current||""),K1.current=""}requestAnimationFrame(()=>{let g_=W1.current;if(!g_)return;let t0=g_.value.length;g_.selectionStart=t0,g_.selectionEnd=t0});return}}if(L.key==="Enter"&&!L.shiftKey&&(L.ctrlKey||L.metaKey)){if(L.preventDefault(),j){if(y.trim())N?.(y.trim(),Z)}else k_(y,"steer");return}if(L.key==="Enter"&&!L.shiftKey)if(L.preventDefault(),j){if(y.trim())N?.(y.trim(),Z)}else k_(y)},e_=(L)=>{let y=Array.from(L||[]).filter((u)=>u instanceof File&&!String(u.name||"").startsWith(".DS_Store"));if(!y.length)return;v1((u)=>[...u,...y]),W_(null)},m_=(L)=>{e_(L.target.files),L.target.value=""},F=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),N4.current+=1,N1(!0)},P=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),N4.current=Math.max(0,N4.current-1),N4.current===0)N1(!1)},v=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),L.dataTransfer)L.dataTransfer.dropEffect="copy";N1(!0)},b=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),N4.current=0,N1(!1),e_(L.dataTransfer?.files||[])},o=(L)=>{if(j)return;let y=L.clipboardData?.items;if(!y||!y.length)return;let u=[];for(let d of y){if(d.kind!=="file")continue;let J0=d.getAsFile?.();if(J0)u.push(J0)}if(u.length>0)L.preventDefault(),e_(u)},X0=(L)=>{v1((y)=>y.filter((u,d)=>d!==L))},V0=()=>{W_(null),v1([]),V?.(),D?.()},L0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((L)=>{let{latitude:y,longitude:u,accuracy:d}=L.coords,J0=`${y.toFixed(5)}, ${u.toFixed(5)}`,Z0=Number.isFinite(d)?` ±${Math.round(d)}m`:"",U1=`https://maps.google.com/?q=${y},${u}`,P1=`Location: ${J0}${Z0} ${U1}`;w1(P1)},(L)=>{let y=L?.message||"Unable to retrieve location.";alert(`Location error: ${y}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!G0)return;Y_.current={value:"",updatedAt:0},p1(!0),y$(U0).then((L)=>{let y=Array.isArray(L?.models)?L.models.filter((u)=>typeof u==="string"&&u.trim().length>0):[];y.sort((u,d)=>u.localeCompare(d,void 0,{sensitivity:"base"})),O1(y),G4(L)}).catch((L)=>{console.warn("Failed to load model list:",L),O1([])}).finally(()=>{p1(!1)})},[G0,I]),g(()=>{if(j)p0(!1),v0(!1),z0(!1),Q1([]),R0(!1),M0([])},[j]),g(()=>{if(E0&&!D1)v0(!1)},[E0,D1]),g(()=>{if(!G0)return;let L=u0.findIndex((y)=>y===I);q0(L>=0?L:0)},[G0,u0,I]),g(()=>{if(!E0)return;c0(p4(I1)),Y_.current={value:"",updatedAt:0}},[E0,U0]),g(()=>{if(!G0)return;let L=(y)=>{let u=e1.current,d=__.current,J0=y.target;if(u&&u.contains(J0))return;if(d&&d.contains(J0))return;p0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[G0]),g(()=>{if(!E0)return;let L=(y)=>{let u=b1.current,d=n_.current,J0=y.target;if(u&&u.contains(J0))return;if(d&&d.contains(J0))return;v0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[E0]),g(()=>{if(j||!G0&&!E0)return;let L=(y)=>{I_(y)};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,G0,E0,I_]),g(()=>{if(!G0)return;let L=e1.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[G0,h,u0]),g(()=>{if(!E0)return;let L=b1.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[E0,A0,I1.length]),g(()=>{let L=()=>{let Z0=x_.current?.clientWidth||0;Z1((U1)=>U1===Z0?U1:Z0)};L();let y=x_.current,u=0,d=()=>{if(u)cancelAnimationFrame(u);u=requestAnimationFrame(()=>{u=0,L()})},J0=null;if(y&&typeof ResizeObserver<"u")J0=new ResizeObserver(()=>d()),J0.observe(y);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(u)cancelAnimationFrame(u);if(J0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,I,G_?.agent_name,D1,k?.percent]);let $0=(L)=>{let y=L.target.value;if(W_(null),E0)v0(!1);k1(L.target),B4(y)};return g(()=>{requestAnimationFrame(()=>k1())},[d0,$1,j]),g(()=>{if(j)return;E4(d0)},[K4,U0,d0,j]),z`
        <div class="compose-box">
            ${!j&&c.length>0&&z`
                <div class="compose-queue-stack">
                    ${c.map((L)=>{let y=typeof L?.content==="string"?L.content:"",u=e4(y);if(!u.text.trim()&&u.fileRefs.length===0&&u.messageRefs.length===0)return null;return z`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${y}>
                                    ${u.text.trim()&&z`
                                        <div class="compose-queue-stack-text">${u.text}</div>
                                    `}
                                    ${(u.messageRefs.length>0||u.fileRefs.length>0)&&z`
                                        <div class="compose-queue-stack-refs">
                                            ${u.messageRefs.map((d)=>z`
                                                <${l_}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${u.fileRefs.map((d)=>{let J0=d.split("/").pop()||d;return z`
                                                    <${l_}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${J0}
                                                        title=${d}
                                                        onClick=${()=>R?.(d)}
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
                                        onClick=${()=>i4(L)}
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
                                        onClick=${()=>i?.(L)}
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
            `}
            <div
                class=${`compose-input-wrapper${h1?" drag-active":""}`}
                onDragEnter=${F}
                onDragOver=${v}
                onDragLeave=${P}
                onDrop=${b}
            >
                <div class="compose-input-main">
                    ${C1&&!E_&&z`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${C1}</div>
                    `}
                    ${E_&&z`
                        <div class="compose-file-refs">
                            ${C1&&z`
                                <div class="compose-submit-error" role="status" aria-live="polite">${C1}</div>
                            `}
                            ${W.map((L)=>{return z`
                                    <${l_}
                                        key=${"msg-"+L}
                                        prefix="compose"
                                        label=${"msg:"+L}
                                        title=${"Message reference: "+L}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(L)}
                                    />
                                `})}
                            ${B.map((L)=>{let y=L.split("/").pop()||L;return z`
                                    <${l_}
                                        prefix="compose"
                                        label=${y}
                                        title=${L}
                                        onClick=${()=>R?.(L)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(L)}
                                    />
                                `})}
                            ${G1.map((L,y)=>{let u=L?.name||`attachment-${y+1}`;return z`
                                    <${l_}
                                        key=${u+y}
                                        prefix="compose"
                                        label=${u}
                                        title=${u}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>X0(y)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${V0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof N0==="function"&&z`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>N0?.()}
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
                        ref=${W1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?$1:d0}
                        onInput=${$0}
                        onKeyDown=${I4}
                        onPaste=${o}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${g0&&C0.length>0&&z`
                        <div class="slash-autocomplete" ref=${V_}>
                            ${C0.map((L,y)=>z`
                                <div
                                    key=${L.chat_jid||L.agent_name}
                                    class=${`slash-item${y===l0?" active":""}`}
                                    onMouseDown=${(u)=>{u.preventDefault(),h4(L)}}
                                    onMouseEnter=${()=>H0(y)}
                                >
                                    <span class="slash-name">@${L.agent_name}</span>
                                    <span class="slash-desc">${L.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${k0&&L1.length>0&&z`
                        <div class="slash-autocomplete" ref=${D_}>
                            ${L1.map((L,y)=>z`
                                <div
                                    key=${L.name}
                                    class=${`slash-item${y===M1?" active":""}`}
                                    onMouseDown=${(u)=>{u.preventDefault(),D4(L)}}
                                    onMouseEnter=${()=>s(y)}
                                >
                                    <span class="slash-name">${L.name}</span>
                                    <span class="slash-desc">${L.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${G0&&!j&&z`
                        <div class="compose-model-popup" ref=${e1} tabIndex="-1" onKeyDown=${I_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${j1&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!j1&&u0.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!j1&&u0.map((L,y)=>z`
                                    <button
                                        key=${L}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${h===y?" active":""}${I===L?" current-model":""}`}
                                        onClick=${()=>{t_(L)}}
                                        disabled=${w0}
                                    >
                                        ${L}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{c4()}}
                                    disabled=${w0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${E0&&!j&&z`
                        <div class="compose-model-popup" ref=${b1} tabIndex="-1" onKeyDown=${I_}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${z`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return q2(G_,U0)})()}
                                    </div>
                                `}
                                ${!y1&&z`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${y1&&X1.map((L,y)=>{let u=Boolean(L.archived_at),J0=L.chat_jid!==(L.root_chat_jid||L.chat_jid)&&!L.is_active&&!u&&typeof b0==="function",Z0=E5(L,{currentChatJid:U0});return z`
                                        <div key=${L.chat_jid} class=${`compose-model-popup-item-row${u?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${u?" archived":""}${A0===y?" active":""}`}
                                                onClick=${()=>{if(u){x1(L.chat_jid);return}Z_(L.chat_jid)}}
                                                disabled=${u?!j_:!f_}
                                                title=${u?`Restore archived ${`@${L.agent_name}`}`:`Switch to ${`@${L.agent_name}`}`}
                                            >
                                                ${Z0}
                                            </button>
                                            ${J0&&z`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${L.agent_name}`}
                                                    onClick=${(U1)=>{U1.stopPropagation(),v0(!1),b0(L.chat_jid)}}
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
                            ${(r1||S1||J1)&&z`
                                <div class="compose-model-popup-actions">
                                    ${r1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${I1.findIndex((L)=>L.key==="action:new")===A0?" active":""}`}
                                            onClick=${()=>{A4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${S1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${I1.findIndex((L)=>L.key==="action:rename")===A0?" active":""}`}
                                            onClick=${(L)=>{b_(L)}}
                                            title="Rename the current branch handle"
                                            disabled=${m1}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${J1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${I1.findIndex((L)=>L.key==="action:delete")===A0?" active":""}`}
                                            onClick=${()=>{M4()}}
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
                <div class="compose-footer" ref=${x_}>
                    ${!j&&I&&z`
                    <div class="compose-meta-row">
                        ${!j&&I&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${__}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${m4}
                                    aria-label="Open model picker"
                                    onClick=${l4}
                                    disabled=${w0}
                                >
                                    ${w0?"Switching…":A_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!w0&&r_&&z`
                                        <span class="compose-model-usage-hint" title=${m4}>
                                            ${r_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&k&&k.percent!=null&&z`
                            <${rZ} usage=${k} onCompact=${M_} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${D1&&z`
                        ${G_?.agent_name&&z`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${G_.chat_jid||U0}
                                aria-label=${`Manage sessions for @${G_.agent_name}`}
                                onClick=${L_}
                            >@${G_.agent_name}</button>
                        `}
                        <button
                            ref=${n_}
                            type="button"
                            class=${`icon-btn compose-mention-btn${E0?" active":""}`}
                            onClick=${L_}
                            title=${E0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${E0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&z`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(L)=>Y?.(L.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:Q}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${a0&&!j&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${L0}
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
                    ${f4&&!j&&z`
                        <button
                            class=${`icon-btn notification-btn${R_?" active":""}`}
                            onClick=${e}
                            title=${v4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&z`
                        ${w&&H&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${w}`}
                                type="button"
                                disabled=${B.includes(w)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${m_} />
                        </label>
                    `}
                    ${(O0!=="connected"||!j)&&z`
                        <div class="compose-send-stack">
                            ${O0!=="connected"&&z`
                                <span class="compose-connection-status connection-status ${O0}" title=${Q4}>
                                    ${b4}
                                </span>
                            `}
                            ${!j&&z`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{k_()}}
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
    `}var o8="piclaw_theme",M5="piclaw_tint",L2="piclaw_chat_themes",R$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},U2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},W2={default:{label:"Default",mode:"auto",light:R$,dark:U2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},sZ=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],o4={theme:"default",tint:null},z2="light",d8=!1;function k5(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function W$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function aZ(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let Y=parseInt(N[1],10),Q=parseInt(N[2],10),K=parseInt(N[3],10);if(![Y,Q,K].every((G)=>Number.isFinite(G)))return null;let B=`#${[Y,Q,K].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:Q,b:K,hex:B}}function F2(_){return W$(_)||aZ(_)}function w$(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${Y})`}function n8(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function tZ(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*Y+0.0722*Q}function eZ(_){return tZ(_)>0.4?"#000000":"#ffffff"}function H2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function r8(_){return W2[_]||W2.default}function _N(_){return _.mode==="auto"?H2():_.mode}function O2(_,$){let j=r8(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||R$}function J2(_,$,j){let Z=F2($);if(!Z)return _;let N=W$(_.bgPrimary),Y=W$(_.bgSecondary),Q=W$(_.bgHover),K=W$(_.borderColor);if(!N||!Y||!Q||!K)return _;let G=W$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:w$(N,Z,0.08),bgSecondary:w$(Y,Z,0.12),bgHover:w$(Q,Z,0.16),borderColor:w$(K,Z,0.08),accent:Z.hex,accentHover:G?w$(Z,G,0.18):Z.hex}}function $N(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=F2(Z),Y=N?n8(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Q=N?n8(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=N?n8(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",B=N?eZ(N):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Q,"--accent-soft-strong":K,"--accent-contrast-text":B,"--danger-color":_.danger||R$.danger,"--success-color":_.success||R$.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([V,W])=>{if(W)j.style.setProperty(V,W)})}function jN(){if(typeof document>"u")return;let _=document.documentElement;sZ.forEach(($)=>_.style.removeProperty($))}function B$(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function V2(_){let $=k5(o4?.theme||"default"),j=o4?.tint?String(o4.tint).trim():null,Z=O2($,_);if($==="default"&&j)Z=J2(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?U2.bgPrimary:R$.bgPrimary}function ZN(_,$){if(typeof document>"u")return;let j=B$("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=B$("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",V2("light"));let N=B$("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",V2("dark"));let Y=B$("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let Q=B$("msapplication-navbutton-color");if(Q&&_)Q.setAttribute("content",_);let K=B$("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function NN(){if(typeof window>"u")return;let _={...o4,mode:z2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function D2(){try{let _=H_(L2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function YN(_,$,j){let Z=D2();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};B1(L2,JSON.stringify(Z))}function QN(_){if(!_)return null;return D2()[_]||null}function E2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function s8(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=k5(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=r8(j),Y=_N(N),Q=O2(j,Y);o4={theme:j,tint:Z},z2=Y;let K=document.documentElement;K.dataset.theme=Y,K.dataset.colorTheme=j,K.dataset.tint=Z?String(Z):"",K.style.colorScheme=Y;let B=Q;if(j==="default"&&Z)B=J2(Q,Z,Y);if(j==="default"&&!Z)jN();else $N(B,Y);if(ZN(B.bgPrimary,Y),NN(),$.persist!==!1)if(B1(o8,j),Z)B1(M5,Z);else B1(M5,"")}function A5(){if(r8(o4.theme).mode!=="auto")return;s8(o4,{persist:!1})}function A2(){if(typeof window>"u")return()=>{};let _=E2(),$=QN(_),j=$?k5($.theme||"default"):k5(H_(o8)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=H_(M5);return N?N.trim():null})();if(s8({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!d8){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",A5);else if(N.addListener)N.addListener(A5);return d8=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",A5);else if(N.removeListener)N.removeListener(A5);d8=!1}}return()=>{}}function M2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||E2(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(YN($,j||"default",Z),s8({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")B1(o8,j||"default"),B1(M5,Z||"")}function k2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return H2()}var I5=/#(\w+)/g,KN=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),qN=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),GN=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),XN={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},BN=new Set(["http:","https:","mailto:",""]);function a8(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function r4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!BN.has(Z.protocol))return null;return Z.href}catch{return null}}function I2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=N.nextNode())Z.push(Y);for(let Q of Z){let K=Q.tagName.toLowerCase();if(!qN.has(K)){let G=Q.parentNode;if(!G)continue;while(Q.firstChild)G.insertBefore(Q.firstChild,Q);G.removeChild(Q);continue}let B=XN[K]||new Set;for(let G of Array.from(Q.attributes)){let V=G.name.toLowerCase(),W=G.value;if(V.startsWith("on")){Q.removeAttribute(G.name);continue}if(V.startsWith("data-")||V.startsWith("aria-"))continue;if(B.has(V)||GN.has(V)){if(V==="href"){let U=r4(W);if(!U)Q.removeAttribute(G.name);else if(Q.setAttribute(G.name,U),K==="a"&&!Q.getAttribute("rel"))Q.setAttribute("rel","noopener noreferrer")}else if(V==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,D=r4(U,{allowDataImage:K==="img"});if(!D)Q.removeAttribute(G.name);else Q.setAttribute(G.name,D)}continue}Q.removeAttribute(G.name)}}return j.body.innerHTML}function C2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function C5(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=C2(j);if(N===j)break;j=N}return j}function WN(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],Y=!1,Q=[];for(let K of j){if(!Y&&K.trim().match(/^```mermaid\s*$/i)){Y=!0,Q=[];continue}if(Y&&K.trim().match(/^```\s*$/)){let B=Z.length;Z.push(Q.join(`
`)),N.push(`@@MERMAID_BLOCK_${B}@@`),Y=!1,Q=[];continue}if(Y)Q.push(K);else N.push(K)}if(Y)N.push("```mermaid"),N.push(...Q);return{text:N.join(`
`),blocks:Z}}function VN(_){if(!_)return _;return C5(_,5)}function LN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function UN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function zN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),Y=$[N]??"",Q=VN(Y);return`<div class="mermaid-container" data-mermaid="${LN(Q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function P2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var FN={span:new Set(["title","class","lang","dir"])};function HN(_,$){let j=FN[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=N.exec($)){let Q=(Y[1]||"").toLowerCase();if(!Q||Q.startsWith("on")||!j.has(Q))continue;let K=Y[2]??Y[3]??Y[4]??"";Z.push(` ${Q}="${a8(K)}"`)}return Z.join("")}function T2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),Y=N?Z.slice(1).trim():Z,K=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[B=""]=K.split(/\s+/,1),G=B.toLowerCase();if(!G||!KN.has(G))return $;if(G==="br")return N?"":"<br>";if(N)return`</${G}>`;let V=K.slice(B.length).trim(),W=HN(G,V);return`<${G}${W}>`})}function y2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function S2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let Y=Z(N.nodeValue);if(Y!==N.nodeValue)N.nodeValue=Y}return $.body.innerHTML}function ON(_){if(!window.katex)return _;let $=(Q)=>C2(Q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Q)=>{let K=[],B=Q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_BLOCK_${V}@@`});return B=B.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_INLINE_${V}@@`}),{html:B,blocks:K}},Z=(Q,K)=>{if(!K.length)return Q;return Q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(B,G)=>{let V=Number(G);return K[V]??""})},N=j(_),Y=N.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Q,K,B)=>{try{let G=katex.renderToString($(B.trim()),{displayMode:!0,throwOnError:!1});return`${K}${G}`}catch(G){return`<span class="math-error" title="${a8(G.message)}">${Q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Q,K,B)=>{if(/\s$/.test(B))return Q;try{let G=katex.renderToString($(B),{displayMode:!1,throwOnError:!1});return`${K}${G}`}catch(G){return`${K}<span class="math-error" title="${a8(G.message)}">$${B}$</span>`}}),Z(Y,N.blocks)}function JN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let Y of Z){let Q=Y.nodeValue;if(!Q)continue;if(I5.lastIndex=0,!I5.test(Q))continue;I5.lastIndex=0;let K=Y.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let B=Q.split(I5);if(B.length<=1)continue;let G=$.createDocumentFragment();B.forEach((V,W)=>{if(W%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",V),U.textContent=`#${V}`,G.appendChild(U)}else G.appendChild($.createTextNode(V))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function DN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let Y of j){if(!N&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&Y.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function EN(_){let $=DN(_||""),{text:j,blocks:Z}=WN($),N=C5(j,2),Q=P2(N).replace(/</g,"&lt;");return{safeHtml:T2(Q),mermaidBlocks:Z}}function O_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:N}=EN(_),Y=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Y=y2(Y),Y=S2(Y),Y=ON(Y),Y=JN(Y),Y=zN(Y,N),Y=I2(Y,j),Y}function f$(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=C5($,2),N=P2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=T2(N),Q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return Q=y2(Q),Q=S2(Q),Q=I2(Q),Q}function AN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,Y)=>{let Q=N.trim().split(/\s+/).map((B)=>{let[G,V]=B.split(",").map(Number);return{x:G,y:V}});if(Q.length<3)return`<polyline${Z}points="${N}"${Y}/>`;let K=[`M ${Q[0].x},${Q[0].y}`];for(let B=1;B<Q.length-1;B++){let G=Q[B-1],V=Q[B],W=Q[B+1],U=V.x-G.x,D=V.y-G.y,I=W.x-V.x,T=W.y-V.y,M=Math.sqrt(U*U+D*D),J=Math.sqrt(I*I+T*T),k=Math.min($,M/2,J/2);if(k<0.5){K.push(`L ${V.x},${V.y}`);continue}let C=V.x-U/M*k,n=V.y-D/M*k,l=V.x+I/J*k,e=V.y+T/J*k,f=U*T-D*I>0?1:0;K.push(`L ${C},${n}`),K.push(`A ${k},${k} 0 0 ${f} ${l},${e}`)}return K.push(`L ${Q[Q.length-1].x},${Q[Q.length-1].y}`),`<path${Z}d="${K.join(" ")}"${Y}/>`})}async function L4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=k2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Q of Y)try{let K=Q.dataset.mermaid,B=UN(K||""),G=C5(B,2),V=await $(G,{...N,transparent:!0});V=AN(V),Q.innerHTML=V,Q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let B=document.createElement("pre");B.className="mermaid-error",B.textContent=`Diagram error: ${K.message}`,Q.innerHTML="",Q.appendChild(B),Q.removeAttribute("data-mermaid")}}function x2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function w2(_){return String(_||"").trim()||"web:default"}function R2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function f2(_){if(!_)return!1;return _.status!=="running"}function v2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function b2({session:_,onClose:$,onInject:j,onRetry:Z}){let N=S(null),Y=S(null),Q=_?.thinking?f$(_.thinking):"",K=_?.answer?O_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(N.current&&Q)L4(N.current).catch(()=>{})},[Q]),g(()=>{if(Y.current&&K)L4(Y.current).catch(()=>{})},[K]),!_)return null;let B=_.status==="running",G=Boolean(String(_.answer||"").trim()),V=Boolean(String(_.thinking||"").trim()),W=R2(_),U=f2(_),D=!B&&G,I=B?"Thinking…":_.status==="error"?"Error":"Done";return z`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${I}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&z`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&z`<div class="btw-block btw-error">${_.error}</div>`}
            ${V&&z`
                <details class="btw-block btw-thinking" open=${B?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </details>
            `}
            ${W&&z`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </div>
            `}

            ${U&&z`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&z`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!D}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function MN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function kN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function S4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function S0(_){return typeof _==="string"&&_.trim()?_.trim():null}function m2(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((N)=>typeof N==="string").map((N)=>N.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var g2="__PICLAW_WIDGET_HOST__:";function u2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function t8(_,$){if(!_||_.type!=="generated_widget")return null;let j=MN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:m2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function h2(_){if(!_||typeof _!=="object")return null;let $=kN(_),j=S0(_?.widget_id)||S0(_?.widgetId)||S0(_?.tool_call_id)||S0(_?.toolCallId),Z=S0(_?.tool_call_id)||S0(_?.toolCallId),N=S0(_?.turn_id)||S0(_?.turnId),Y=S0(_?.title)||S0(_?.name)||"Generated widget",Q=S0(_?.subtitle)||"",K=S0(_?.description)||Q,B=S0(_?.status),G=B==="loading"||B==="streaming"||B==="final"||B==="error"?B:"streaming";return{title:Y,subtitle:Q,description:K,originPostId:S4(_?.origin_post_id)??S4(_?.originPostId),originChatJid:S0(_?.origin_chat_jid)||S0(_?.originChatJid)||S0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:m2(_?.capabilities,!0),source:"live",status:G,turnId:N,toolCallId:Z,width:S4(_?.width),height:S4(_?.height),error:S0(_?.error)}}function p2(_){return t8(_,null)!==null}function d1(_){let $=S0(_?.toolCallId)||S0(_?.tool_call_id);if($)return $;let j=S0(_?.widgetId)||S0(_?.widget_id);if(j)return j;let Z=S4(_?.originPostId)??S4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function c2(_){let j=(_?.artifact||{}).kind||_?.kind||null,N=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||N)}function l2(_){return c2(_)?"allow-downloads allow-scripts":"allow-downloads"}function P5(_){return{title:S0(_?.title)||"Generated widget",widgetId:S0(_?.widgetId)||S0(_?.widget_id),toolCallId:S0(_?.toolCallId)||S0(_?.tool_call_id),turnId:S0(_?.turnId)||S0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:S0(_?.status)||"final"}}function T5(_){return{...P5(_),subtitle:S0(_?.subtitle)||"",description:S0(_?.description)||"",error:S0(_?.error)||null,width:S4(_?.width),height:S4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function y5(_){return`${g2}${JSON.stringify(T5(_))}`}function i2(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=S0(_.text)||S0(_.content)||S0(_.message)||S0(_.prompt)||S0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=S0(j.text)||S0(j.content)||S0(j.message)||S0(j.prompt)||S0(j.value);if(Z)return Z}return null}function d2(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function n2(_){let $=S0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return S0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function IN(_){let $=P5(_);return`<script>
(function () {
  const meta = ${u2($)};
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
    } catch {}
  }

  const windowNamePrefix = ${u2(g2)};
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
    } catch {}
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
</script>`}function o2(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Q=j==="svg"?N:Z;if(!Q)return"";let K=c2(_),B=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${Q}</div>`:Q,V=K?IN(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${B}" />
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
${V}
</head>
<body>${G}</body>
</html>`}function r2({widget:_,onClose:$,onWidgetEvent:j}){let Z=S(null),N=S(!1),Y=I0(()=>o2(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let J=(k)=>{if(k.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),g(()=>{N.current=!1},[Y]),g(()=>{if(!_)return;let J=Z.current;if(!J)return;let k=(j0)=>{let f=y5(_),w=j0==="widget.init"?P5(_):T5(_);try{J.name=f}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:j0,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:w},"*")}catch{}},C=()=>{k("widget.init"),k("widget.update")},n=()=>{N.current=!0,C()};J.addEventListener("load",n);let e=[0,40,120,300,800].map((j0)=>setTimeout(C,j0));return()=>{J.removeEventListener("load",n),e.forEach((j0)=>clearTimeout(j0))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let J=Z.current;if(!J?.contentWindow)return;let k=y5(_),C=T5(_);try{J.name=k}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:C},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let J=(k)=>{let C=k?.data;if(!C||C.__piclawGeneratedWidget!==!0)return;let n=Z.current,l=d1(_),e=d1({widgetId:C.widgetId,toolCallId:C.toolCallId});if(e&&l&&e!==l)return;if(!e&&n?.contentWindow&&k.source!==n.contentWindow)return;j?.(C,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",B=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",V=_?.source==="live"?"live":"timeline",W=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=V==="live"?`Live widget • ${W.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",D=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",I=!Y,T=n2(_),M=l2(_);return z`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${B}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${B}</div>
                        ${(G||D)&&z`
                            <div class="floating-widget-subtitle">${G||D}</div>
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
                    ${I?z`<div class="floating-widget-empty">${T}</div>`:z`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${B}
                                name=${y5(_)}
                                sandbox=${M}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var s2="PiClaw";function e8(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Q=N.charCodeAt(0)%Y.length,K=Y[Q],B=Z.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",V=G?G:null,W=j||B==="PiClaw".toLowerCase()||B==="pi";return{letter:N,color:K,image:V||(W?"/static/icon-192.png":null)}}function a2(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function t2(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function e2(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,Q=Y?.dataset?.colorTheme||"",K=Y?.dataset?.tint||"",B=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(B&&(K||Q&&Q!=="default"))return B}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function CN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function v$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function _7(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return v$(_)?"Compacting context":"Working..."}function PN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function $7(_,$=Date.now()){let j=CN(_);if(j===null)return null;return PN(Math.max(0,$-j))}function _6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:Y,extensionPanels:Q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:B,turnId:G,steerQueued:V,onPanelToggle:W,showCorePanels:U=!0,showExtensionPanels:D=!0}){let M=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let M0=s,l0=M0?M0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:M0,totalLines:l0,fullText:M0}}let k0=s.text||"",z0=s.fullText||s.full_text||k0,C0=Number.isFinite(s.totalLines)?s.totalLines:z0?z0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:k0,totalLines:C0,fullText:z0}},J=160,k=(s)=>String(s||"").replace(/<\/?internal>/gi,""),C=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},n=(s,k0,z0)=>{let C0=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!C0)return{text:"",omitted:0,totalLines:Number.isFinite(z0)?z0:0,visibleLines:0};let M0=C0.split(`
`),l0=M0.length>k0?M0.slice(0,k0).join(`
`):C0,H0=Number.isFinite(z0)?z0:M0.reduce((w0,i0)=>w0+C(i0),0),g0=l0?l0.split(`
`).reduce((w0,i0)=>w0+C(i0),0):0,R0=Math.max(H0-g0,0);return{text:l0,omitted:R0,totalLines:H0,visibleLines:g0}},l=M(j),e=M(Z),j0=M($),f=Boolean(l.text)||l.totalLines>0,w=Boolean(e.text)||e.totalLines>0,H=Boolean(j0.fullText?.trim()||j0.text?.trim()),R=Boolean(_||H||f||w||N||Y),c=Array.isArray(Q)&&Q.length>0;if((!U||!R)&&(!D||!c))return null;let[Q0,i]=p(new Set),[K0,Y0]=p(()=>Date.now()),N0=(s)=>i((k0)=>{let z0=new Set(k0),C0=!z0.has(s);if(C0)z0.add(s);else z0.delete(s);if(typeof W==="function")W(s,C0);return z0});g(()=>{i(new Set)},[G]);let B0=v$(_);g(()=>{if(!B0)return;Y0(Date.now());let s=setInterval(()=>Y0(Date.now()),1000);return()=>clearInterval(s)},[B0,_?.started_at,_?.startedAt]);let W0=_?.turn_id||G,U0=e2(W0),O0=V?"turn-dot turn-dot-queued":"turn-dot",P0=(s)=>s,n0=Boolean(_?.last_activity||_?.lastActivity),x0=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":U0,T0=Y?.kind||"info",o0=x0(T0),r0=x0(_?.kind||(B0?"warning":"info")),y0="",b0=_?.title,s0=_?.status;if(_?.type==="plan")y0=b0?`Planning: ${b0}`:"Planning...";else if(_?.type==="tool_call")y0=b0?`Running: ${b0}`:"Running tool...";else if(_?.type==="tool_status")y0=b0?`${b0}: ${s0||"Working..."}`:s0||"Working...";else if(_?.type==="error")y0=b0||"Agent error";else y0=b0||s0||"Working...";if(n0)y0="Last activity just now";let d0=({panelTitle:s,text:k0,fullText:z0,totalLines:C0,maxLines:M0,titleClass:l0,panelKey:H0})=>{let g0=Q0.has(H0),R0=z0||k0||"",w0=H0==="thought"||H0==="draft"?k(R0):R0,i0=typeof M0==="number",G0=g0&&i0,p0=i0?n(w0,M0,C0):{text:w0||"",omitted:0,totalLines:Number.isFinite(C0)?C0:0};if(!w0&&!(Number.isFinite(p0.totalLines)&&p0.totalLines>0))return null;let E0=`agent-thinking-body${i0?" agent-thinking-body-collapsible":""}`,v0=i0?`--agent-thinking-collapsed-lines: ${M0};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${g0?"true":"false"}
                data-collapsible=${i0?"true":"false"}
                style=${U0?`--turn-color: ${U0};`:""}
            >
                <div class="agent-thinking-title ${l0||""}">
                    ${U0&&z`<span class=${O0} aria-hidden="true"></span>`}
                    ${s}
                    ${G0&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>N0(H0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${E0}
                    style=${v0}
                    dangerouslySetInnerHTML=${{__html:f$(w0)}}
                />
                ${!g0&&p0.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>N0(H0)}>
                        ▸ ${p0.omitted} more lines
                    </button>
                `}
                ${g0&&p0.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>N0(H0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},F0=N?.tool_call?.title,$1=F0?`Awaiting approval: ${F0}`:"Awaiting approval",H1=B0?$7(_,K0):null,G1=(s,k0,z0=null)=>{let C0=_7(s);return z`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${k0?`--turn-color: ${k0};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${k0&&z`<span class=${O0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${C0}</span>
                    ${z0&&z`<span class="agent-status-elapsed">${z0}</span>`}
                </div>
                ${s.detail&&z`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `},v1=(s,k0,z0,C0,M0,l0,H0,g0=8,R0=8)=>{let w0=Math.max(M0-C0,0.000000001),i0=Math.max(k0-g0*2,1),G0=Math.max(z0-R0*2,1),p0=Math.max(H0-l0,1),E0=H0===l0?k0/2:g0+(s.run-l0)/p0*i0,v0=R0+(G0-(s.value-C0)/w0*G0);return{x:E0,y:v0}},h1=(s,k0,z0,C0,M0,l0,H0,g0=8,R0=8)=>{if(!Array.isArray(s)||s.length===0)return"";return s.map((w0,i0)=>{let{x:G0,y:p0}=v1(w0,k0,z0,C0,M0,l0,H0,g0,R0);return`${i0===0?"M":"L"} ${G0.toFixed(2)} ${p0.toFixed(2)}`}).join(" ")},N1=(s,k0="")=>{if(!Number.isFinite(s))return"—";return`${Math.abs(s)>=100?s.toFixed(0):s.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${k0}`},L1=["var(--accent-color)","color-mix(in srgb, var(--accent-color) 72%, var(--success-color))","var(--success-color)","color-mix(in srgb, var(--accent-color) 50%, var(--warning-color))","var(--warning-color)","var(--danger-color)","color-mix(in srgb, var(--accent-color) 42%, var(--text-primary))","color-mix(in srgb, var(--success-color) 46%, var(--text-primary))"],Q1=(s)=>{let k0=Array.isArray(s)?s.map((G0,p0)=>({...G0,color:L1[p0%L1.length],points:Array.isArray(G0?.points)?G0.points.filter((E0)=>Number.isFinite(E0?.value)&&Number.isFinite(E0?.run)):[]})).filter((G0)=>G0.points.length>0):[];if(k0.length===0)return null;let z0=320,C0=120,M0=k0.flatMap((G0)=>G0.points),l0=M0.map((G0)=>G0.value),H0=M0.map((G0)=>G0.run),g0=Math.min(...l0),R0=Math.max(...l0),w0=Math.min(...H0),i0=Math.max(...H0);return z`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${k0.length} series</span>
                </div>
                <svg class="agent-series-chart-svg" viewBox=${`0 0 ${z0} ${C0}`} preserveAspectRatio="none" aria-hidden="true">
                    ${k0.map((G0)=>z`
                        <g key=${G0?.key||G0?.label}>
                            <path
                                class="agent-series-chart-line"
                                d=${h1(G0.points,z0,C0,g0,R0,w0,i0)}
                                style=${`--agent-series-color: ${G0.color};`}
                            ></path>
                            ${G0.points.map((p0,E0)=>{let v0=v1(p0,z0,C0,g0,R0,w0,i0),u0=typeof G0?.unit==="string"?G0.unit:"",O1=`${G0?.label||"Series"}: ${N1(p0.value,u0)} · run ${p0.run}`;return z`
                                    <g key=${`${G0?.key||G0?.label}-point-${E0}`} class="agent-series-chart-point-group" style=${`--agent-series-color: ${G0.color};`}>
                                        <circle class="agent-series-chart-point-hit" cx=${v0.x} cy=${v0.y} r="8">
                                            <title>${O1}</title>
                                        </circle>
                                        <circle class="agent-series-chart-point" cx=${v0.x} cy=${v0.y} r="3.25"></circle>
                                    </g>
                                `})}
                        </g>
                    `)}
                </svg>
                <div class="agent-series-legend">
                    ${k0.map((G0)=>{let p0=G0.points[G0.points.length-1]?.value,E0=typeof G0?.unit==="string"?G0.unit:"";return z`
                            <div key=${`${G0?.key||G0?.label}-legend`} class="agent-series-legend-item">
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${G0.color};`}></span>
                                <span class="agent-series-legend-label">${G0?.label||"Series"}</span>
                                <span class="agent-series-legend-value">${N1(p0,E0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},M1=(s)=>{if(!s)return null;let k0=typeof s?.key==="string"?s.key:`panel-${Math.random()}`,z0=Q0.has(k0),C0=s?.title||"Extension status",M0=s?.collapsed_text||"",l0=String(s?.state||"").replace(/[-_]+/g," ").replace(/^./,(G0)=>G0.toUpperCase()),H0=x0(s?.state==="completed"?"success":s?.state==="failed"?"error":s?.state==="stopped"?"warning":"info"),g0=typeof s?.detail_markdown==="string"?s.detail_markdown.trim():"",R0=Array.isArray(s?.series)?s.series:[],w0=Array.isArray(s?.actions)?s.actions:[],i0=Boolean(g0||R0.length>0);return z`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${z0?"true":"false"}
                style=${H0?`--turn-color: ${H0};`:""}
                title=${g0||C0}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>i0?N0(k0):null}
                    >
                        ${H0&&z`<span class=${O0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${C0}</span>
                        ${M0&&z`<span class="agent-thinking-title-meta">${M0}</span>`}
                    </button>
                    ${w0.length>0&&z`
                        <div class="agent-thinking-actions agent-thinking-actions-inline">
                            ${w0.map((G0)=>{let p0=`${k0}:${G0?.key||""}`,E0=K?.has?.(p0);return z`
                                    <button
                                        key=${p0}
                                        class=${`agent-thinking-action-btn${G0?.tone==="danger"?" danger":""}`}
                                        onClick=${()=>B?.(s,G0)}
                                        disabled=${Boolean(E0)}
                                    >
                                        ${E0?"Working…":G0?.label||"Run"}
                                    </button>
                                `})}
                        </div>
                    `}
                </div>
                ${i0&&z`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${z0?`Collapse ${C0}`:`Expand ${C0}`}
                        title=${z0?"Collapse details":"Expand details"}
                        onClick=${()=>N0(k0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            ${z0?z`<polyline points="4 10 8 6 12 10"></polyline>`:z`<polyline points="4 6 8 10 12 6"></polyline>`}
                        </svg>
                    </button>
                `}
                ${z0&&z`
                    <div class=${`agent-thinking-autoresearch-layout${g0?"":" chart-only"}`}>
                        ${g0&&z`
                            <div
                                class="agent-thinking-body agent-thinking-autoresearch-detail"
                                dangerouslySetInnerHTML=${{__html:f$(g0)}}
                            />
                        `}
                        ${R0.length>0?Q1(R0):z`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return z`
        <div class="agent-status-panel">
            ${U&&Y&&G1(Y,o0)}
            ${D&&Array.isArray(Q)&&Q.map((s)=>M1(s))}
            ${U&&_?.type==="intent"&&G1(_,r0,H1)}
            ${U&&N&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${U0?`--turn-color: ${U0};`:""}>
                    <span class=${O0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${$1}</span>
                </div>
            `}
            ${U&&f&&d0({panelTitle:P0("Planning"),text:l.text,fullText:l.fullText,totalLines:l.totalLines,panelKey:"plan"})}
            ${U&&w&&d0({panelTitle:P0("Thoughts"),text:e.text,fullText:e.fullText,totalLines:e.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&H&&d0({panelTitle:P0("Draft"),text:j0.text,fullText:j0.fullText,totalLines:j0.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${n0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${U0?`--turn-color: ${U0};`:""}>
                    ${U0&&z`<span class=${O0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!n0&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${y0}</span>
                </div>
            `}
        </div>
    `}function j7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:Y}=_,Q=Z?.title||"Agent Request",K=Z?.kind||"other",B=Z?.rawInput||{},G=B.command||B.commands&&B.commands[0]||null,V=B.diff||null,W=B.fileName||B.path||null,U=Z?.description||B.description||B.explanation||null,I=(Array.isArray(Z?.locations)?Z.locations:[]).map((C)=>C?.path).filter((C)=>Boolean(C)),T=Array.from(new Set([W,...I].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let M=async(C)=>{try{await L5(j,C,Y||null),$()}catch(n){console.error("Failed to respond to agent request:",n)}},J=async()=>{try{await P8(Q,`Auto-approved: ${Q}`),await L5(j,"approved",Y||null),$()}catch(C){console.error("Failed to add to whitelist:",C)}},k=N&&N.length>0;return z`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Q}</div>
                </div>
                ${(U||G||V||T.length>0)&&z`
                    <div class="agent-request-body">
                        ${U&&z`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${T.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${T.map((C,n)=>z`<li key=${n}>${C}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&z`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${V&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${V}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${k?N.map((C)=>z`
                            <button 
                                key=${C.optionId||C.id||String(C)}
                                class="agent-request-btn ${C.kind==="allow_once"||C.kind==="allow_always"?"primary":""}"
                                onClick=${()=>M(C.optionId||C.id||C)}
                            >
                                ${C.name||C.label||C.optionId||C.id||String(C)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>M("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>M("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${J}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function Z7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,Y=86400000;if(Z<Y){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*Y){let B=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${B} ${G}`}let Q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${K}`}function b$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function S_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function s4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var TN=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),yN=new Set(["text/markdown"]),SN=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),xN=new Set(["application/vnd.jgraph.mxfile"]);function u$(_){return typeof _==="string"?_.trim().toLowerCase():""}function wN(_){let $=u$(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function RN(_){let $=u$(_);return!!$&&$.endsWith(".pdf")}function fN(_){let $=u$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function m$(_,$){let j=u$(_);if(wN($)||xN.has(j))return"drawio";if(RN($)||j==="application/pdf")return"pdf";if(fN($)||SN.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(TN.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function N7(_){let $=u$(_);return yN.has($)}function Y7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function vN(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function bN(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),Y=Number(j[3]);if(![Z,N,Y].every((Q)=>Number.isFinite(Q)))return null;return{r:Z,g:N,b:Y}}function Q7(_){return vN(_)||bN(_)}function S5(_){let $=(Y)=>{let Q=Y/255;return Q<=0.03928?Q/12.92:((Q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function uN(_,$){let j=Math.max(S5(_),S5($)),Z=Math.min(S5(_),S5($));return(j+0.05)/(Z+0.05)}function mN(_,$,j="#ffffff"){let Z=Q7(_);if(!Z)return j;let N=j,Y=-1;for(let Q of $){let K=Q7(Q);if(!K)continue;let B=uN(Z,K);if(B>Y)N=Q,Y=B}return N}function $6(){let _=getComputedStyle(document.documentElement),$=(I,T)=>{for(let M of I){let J=_.getPropertyValue(M).trim();if(J)return J}return T},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),B=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),V=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),D=mN(K,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:Y,bgEmphasis:Q,accent:K,good:B,warning:G,attention:V,border:W,fontFamily:U,buttonTextColor:D}}function K7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:Y,warning:Q,attention:K,border:B,fontFamily:G}=$6();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:Q,subtle:Q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:Q,subtle:Q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:B},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var gN=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),q7=!1,x5=null,G7=!1;function j6(_){_.querySelector(".adaptive-card-notice")?.remove()}function hN(_,$,j="error"){j6(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function pN(_,$=(j)=>O_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function cN(_=($)=>O_($,null)){return($,j)=>{try{let Z=pN($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function lN(_){if(G7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=cN(),G7=!0}async function iN(){if(q7)return;if(x5)return x5;return x5=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{q7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),x5}function dN(){return globalThis.AdaptiveCards}function nN(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function oN(_){return gN.has(_)}function N6(_){if(!Array.isArray(_))return[];return _.filter(nN)}function rN(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function Z6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Z6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${Z6(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function sN(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return Z6($);return typeof $==="string"?$:String($)}function aN(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((K)=>Z(K));if(!N||typeof N!=="object")return N;let Q={...N};if(typeof Q.id==="string"&&Q.id in j&&String(Q.type||"").startsWith("Input."))Q.value=sN(Q.type,j[Q.id],Q);for(let[K,B]of Object.entries(Q))if(Array.isArray(B)||B&&typeof B==="object")Q[K]=Z(B);return Q};return Z(_)}function tN(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function eN(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function _Y(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=eN(_.completed_at||j?.submitted_at),Y=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function X7(_,$,j){if(!oN($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await iN()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=dN();lN(Z);let N=new Z.AdaptiveCard,Y=$6();N.hostConfig=new Z.HostConfig(K7());let Q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:aN($.payload,Q);N.parse(K),N.onExecuteAction=(V)=>{let W=rN(V);if(j?.onAction)j6(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let D=U instanceof Error?U.message:String(U||"Action failed.");hN(_,D||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let B=N.render();if(!B)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=_Y($);if(G){_.classList.add("adaptive-card-finished");let V=document.createElement("div");V.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=G.label,V.appendChild(W),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,V.appendChild(U)}_.appendChild(V)}if(j6(_),_.appendChild(B),G)tN(B);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function g$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>g$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${g$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function B7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:g$(j)})).filter(($)=>$.value)}function $Y(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function Y6(_){if(!Array.isArray(_))return[];return _.filter($Y)}function W7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=g$(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=B7(j).map(({key:Y,value:Q})=>`${Y}: ${Q}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function V7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=B7(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:Q})=>`${Y}: ${Q}`).join(", "):g$(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function jY(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?S_($):null},{label:"Added",value:_?.created_at?s4(_.created_at):null}].filter((Z)=>Z.value)}function ZY(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let Y=y_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function L7({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=I0(()=>m$($?.content_type,Z),[$?.content_type,Z]),Y=Y7(N),Q=I0(()=>N7($?.content_type),[$?.content_type]),[K,B]=p(N==="text"),[G,V]=p(""),[W,U]=p(null),D=S(null),I=I0(()=>jY($),[$]),T=I0(()=>ZY(_,Z,N),[_,Z,N]),M=I0(()=>{if(!Q||!G)return"";return O_(G)},[Q,G]);return g(()=>{let J=(k)=>{if(k.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!D.current||!M)return;L4(D.current);return},[M]),g(()=>{let J=!1;async function k(){if(N!=="text"){B(!1),U(null);return}B(!0),U(null);try{let C=await x8(_);if(!J)V(C)}catch{if(!J)U("Failed to load text preview.")}finally{if(!J)B(!1)}}return k(),()=>{J=!0}},[_,N]),z`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${T&&z`
                            <a
                                href=${T}
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
                    ${K&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!K&&W&&z`<div class="attachment-preview-state">${W}</div>`}
                    ${!K&&!W&&N==="image"&&z`
                        <img class="attachment-preview-image" src=${y_(_)} alt=${Z} />
                    `}
                    ${!K&&!W&&(N==="pdf"||N==="office"||N==="drawio")&&T&&z`
                        <iframe class="attachment-preview-frame" src=${T} title=${Z}></iframe>
                    `}
                    ${!K&&!W&&N==="drawio"&&z`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!K&&!W&&N==="text"&&Q&&z`
                        <div
                            ref=${D}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:M}}
                        />
                    `}
                    ${!K&&!W&&N==="text"&&!Q&&z`
                        <pre class="attachment-preview-text">${G}</pre>
                    `}
                    ${!K&&!W&&N==="unsupported"&&z`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${I.map((J)=>z`
                        <div class="attachment-preview-meta-item" key=${J.label}>
                            <span class="attachment-preview-meta-label">${J.label}</span>
                            <span class="attachment-preview-meta-value">${J.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function U7({src:_,onClose:$}){return g(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),z`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function NY({mediaId:_,onPreview:$}){let[j,Z]=p(null);if(g(()=>{q$(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",Y=j.metadata?.size,Q=Y?S_(Y):"",B=m$(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${y_(_)} download=${N} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${N}</span>
                    <span class="file-meta-row">
                        ${Q&&z`<span class="file-size">${Q}</span>`}
                        ${j.content_type&&z`<span class="file-size">${j.content_type}</span>`}
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
                ${B}
            </button>
        </div>
    `}function YY({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=p(null);g(()=>{if(!Number.isFinite(j))return;q$(j).then(N).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,Q=Number.isFinite(j)?y_(j):null,B=m$(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${Y}>
            ${Q?z`
                    <a href=${Q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${l_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:z`
                    <${l_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Z&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${B}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function w5({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?s4(Z):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&z`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&z`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function QY({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?S_(_.size):"",N=_.mime_type||"",Y=GY(N),Q=r4(_.uri);return z`
        <a
            href=${Q||"#"}
            class="resource-link"
            target=${Q?"_blank":void 0}
            rel=${Q?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&z`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&z`<span>${N}</span>`}
                    ${Z&&z`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function KY({block:_}){let[$,j]=p(!1),Z=_.uri||"Embedded resource",N=_.text||"",Y=Boolean(_.data),Q=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&z`
                ${N&&z`<pre class="resource-embed-content">${N}</pre>`}
                ${Y&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Q&&z`<span class="resource-embed-blob-meta">${Q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let B=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:Q||"application/octet-stream"}),G=URL.createObjectURL(B),V=document.createElement("a");V.href=G,V.download=Z.split("/").pop()||"resource",V.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function qY({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=t8(_,$),N=p2(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Q=Z?.title||_.title||_.name||"Generated widget",K=Z?.description||_.description||_.subtitle||"",B=_.open_label||"Open widget",G=(V)=>{if(V.preventDefault(),V.stopPropagation(),!Z)return;j?.(Z)};return z`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Q}</div>
            </div>
            ${K&&z`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!N}
                    onClick=${G}
                    title=${N?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${B}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function GY(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function XY({preview:_}){let $=r4(_.url),j=r4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function BY(_,$){return typeof _==="string"?_:""}var WY=1800,VY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,LY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,UY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function zY(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function FY(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(Y,Q)=>{let K=Q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=LY,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=UY,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=VY,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let Q=document.createElement("div");Q.className="post-code-block",Y.parentNode?.insertBefore(Q,Y),Q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",N(K,"idle"),Q.appendChild(K);let B=async(G)=>{G.preventDefault(),G.stopPropagation();let W=Y.querySelector("code")?.textContent||"",U=await zY(W);N(K,U?"success":"error");let D=j.get(K);if(D)clearTimeout(D);let I=setTimeout(()=>{N(K,"idle"),j.delete(K)},WY);j.set(K,I)};K.addEventListener("click",B),Z.push(()=>{K.removeEventListener("click",B);let G=j.get(K);if(G)clearTimeout(G);if(Q.parentNode)Q.parentNode.insertBefore(Y,Q),Q.remove()})}),()=>{Z.forEach((Y)=>Y())}}function HY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))N.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let Q=j.slice(0,Z),K=j.slice(Y),B=[...Q,...K].join(`
`);return B=B.replace(/\n{3,}/g,`

`).trim(),{content:B,fileRefs:N}}function OY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let W=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)N.push(W[1])}else if(!G.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let Q=j.slice(0,Z),K=j.slice(Y),B=[...Q,...K].join(`
`);return B=B.replace(/\n{3,}/g,`

`).trim(),{content:B,messageRefs:N}}function JY(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1){let V=j[G].trim();if((V==="Images:"||V==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim(),W=V.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||V.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let U=W[1],D=(W[2]||"").trim()||U;N.push({id:U,label:D,raw:V})}else N.push({id:null,label:V,raw:V})}else if(!G.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let Q=j.slice(0,Z),K=j.slice(Y),B=[...Q,...K].join(`
`);return B=B.replace(/\n{3,}/g,`

`).trim(),{content:B,attachments:N}}function DY(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function EY(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(DY).sort((V,W)=>W.length-V.length),N=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),Q=new DOMParser().parseFromString(_,"text/html"),K=Q.createTreeWalker(Q.body,NodeFilter.SHOW_TEXT),B=[],G;while(G=K.nextNode())B.push(G);for(let V of B){let W=V.nodeValue;if(!W||!N.test(W)){N.lastIndex=0;continue}N.lastIndex=0;let U=V.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let D=W.split(N).filter((T)=>T!=="");if(D.length===0)continue;let I=Q.createDocumentFragment();for(let T of D)if(Y.test(T)){let M=Q.createElement("mark");M.className="search-highlight-term",M.textContent=T,I.appendChild(M)}else I.appendChild(Q.createTextNode(T));V.parentNode.replaceChild(I,V)}return Q.body.innerHTML}function z7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:Y,agentAvatarUrl:Q,userName:K,userAvatarUrl:B,userAvatarBackground:G,onDelete:V,isThreadReply:W,isThreadPrev:U,isThreadNext:D,isRemoving:I,highlightQuery:T,onFileRef:M,onOpenWidget:J}){let[k,C]=p(null),n=S(null),l=_.data,e=l.type==="agent_response",j0=K||"You",f=e?Y||s2:j0,w=e?e8(Y,Q,!0):e8(j0,B),H=typeof G==="string"?G.trim().toLowerCase():"",R=!e&&w.image&&(H==="clear"||H==="transparent"),c=e&&Boolean(w.image),Q0=`background-color: ${R||c?"transparent":w.color}`,i=l.content_meta,K0=Boolean(i?.truncated),Y0=Boolean(i?.preview),N0=K0&&!Y0,B0=K0?{originalLength:Number.isFinite(i?.original_length)?i.original_length:l.content?l.content.length:0,maxLength:Number.isFinite(i?.max_length)?i.max_length:0}:null,W0=l.content_blocks||[],U0=l.media_ids||[],O0=BY(l.content,l.link_previews),{content:P0,fileRefs:n0}=HY(O0),{content:x0,messageRefs:T0}=OY(P0),{content:o0,attachments:r0}=JY(x0);O0=o0;let y0=N6(W0),b0=Y6(W0),s0=y0.length===1&&typeof y0[0]?.fallback_text==="string"?y0[0].fallback_text.trim():"",d0=b0.length===1?W7(b0[0]).trim():"",F0=Boolean(s0)&&O0?.trim()===s0||Boolean(d0)&&O0?.trim()===d0,$1=Boolean(O0)&&!N0&&!F0,H1=typeof T==="string"?T.trim():"",G1=I0(()=>{if(!O0||F0)return"";let h=O_(O0,j);return H1?EY(h,H1):h},[O0,F0,H1]),v1=(h,q0)=>{h.stopPropagation(),C(y_(q0))},[h1,N1]=p(null),L1=(h)=>{N1(h)},Q1=(h)=>{h.stopPropagation(),V?.(_)},M1=(h,q0)=>{let A0=new Set;if(!h||q0.length===0)return{content:h,usedIds:A0};return{content:h.replace(/attachment:([^\s)"']+)/g,(j1,p1,n1,Z1)=>{let C1=p1.replace(/^\/+/,""),W1=q0.find((V_)=>V_.name&&V_.name.toLowerCase()===C1.toLowerCase()&&!A0.has(V_.id))||q0.find((V_)=>!A0.has(V_.id));if(!W1)return j1;if(A0.add(W1.id),Z1.slice(Math.max(0,n1-2),n1)==="](")return`/media/${W1.id}`;return W1.name||"attachment"}),usedIds:A0}},s=[],k0=[],z0=[],C0=[],M0=[],l0=[],H0=[],g0=0;if(W0.length>0)W0.forEach((h)=>{if(h?.type==="text"&&h.annotations)H0.push(h.annotations);if(h?.type==="generated_widget")l0.push(h);else if(h?.type==="resource_link")C0.push(h);else if(h?.type==="resource")M0.push(h);else if(h?.type==="file"){let q0=U0[g0++];if(q0)k0.push(q0),z0.push({id:q0,name:h?.name||h?.filename||h?.title})}else if(h?.type==="image"||!h?.type){let q0=U0[g0++];if(q0){let A0=typeof h?.mime_type==="string"?h.mime_type:void 0;s.push({id:q0,annotations:h?.annotations,mimeType:A0}),z0.push({id:q0,name:h?.name||h?.filename||h?.title})}}});else if(U0.length>0){let h=r0.length>0;U0.forEach((q0,A0)=>{let c0=r0[A0]||null;if(z0.push({id:q0,name:c0?.label||null}),h)k0.push(q0);else s.push({id:q0,annotations:null})})}if(r0.length>0)r0.forEach((h)=>{if(!h?.id)return;let q0=z0.find((A0)=>String(A0.id)===String(h.id));if(q0&&!q0.name)q0.name=h.label});let{content:R0,usedIds:w0}=M1(O0,z0);O0=R0;let i0=s.filter(({id:h})=>!w0.has(h)),G0=k0.filter((h)=>!w0.has(h)),p0=r0.length>0?r0.map((h,q0)=>({id:h.id||`attachment-${q0+1}`,label:h.label||`attachment-${q0+1}`})):z0.map((h,q0)=>({id:h.id,label:h.name||`attachment-${q0+1}`})),E0=I0(()=>N6(W0),[W0]),v0=I0(()=>Y6(W0),[W0]),u0=I0(()=>{return E0.map((h)=>`${h.card_id}:${h.state}`).join("|")},[E0]);g(()=>{if(!n.current)return;return L4(n.current),FY(n.current)},[G1]);let O1=S(null);return g(()=>{if(!O1.current||E0.length===0)return;let h=O1.current;h.innerHTML="";for(let q0 of E0){let A0=document.createElement("div");h.appendChild(A0),X7(A0,q0,{onAction:async(c0)=>{if(c0.type==="Action.OpenUrl"){let j1=r4(c0.url||"");if(!j1)throw Error("Invalid URL");window.open(j1,"_blank","noopener,noreferrer");return}if(c0.type==="Action.Submit"){await C8({post_id:_.id,thread_id:l.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:q0.card_id,action:{type:c0.type,title:c0.title||"",data:c0.data}});return}console.warn("[post] unsupported adaptive card action:",c0.type,c0)}}).catch((c0)=>{console.error("[post] adaptive card render error:",c0),A0.textContent=q0.fallback_text||"Card failed to render."})}},[u0,_.id]),z`
        <div id=${`post-${_.id}`} class="post ${e?"agent-post":""} ${W?"thread-reply":""} ${U?"thread-prev":""} ${D?"thread-next":""} ${I?"removing":""}" onClick=${$}>
            <div class="post-avatar ${e?"agent-avatar":""} ${w.image?"has-image":""}" style=${Q0}>
                ${w.image?z`<img src=${w.image} alt=${f} />`:w.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${Q1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${f}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(h)=>{if(h.preventDefault(),h.stopPropagation(),Z)Z(_.id)}}>${Z7(_.timestamp)}</a>
                </div>
                ${N0&&B0&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${b$(B0.originalLength)} chars
                            ${B0.maxLength?z` • Display limit: ${b$(B0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${Y0&&B0&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${b$(B0.maxLength)} of ${b$(B0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||T0.length>0||p0.length>0)&&z`
                    <div class="post-file-refs">
                        ${T0.map((h)=>{let q0=(A0)=>{if(A0.preventDefault(),A0.stopPropagation(),N)N(h,_.chat_jid||null);else{let c0=document.getElementById("post-"+h);if(c0)c0.scrollIntoView({behavior:"smooth",block:"center"}),c0.classList.add("post-highlight"),setTimeout(()=>c0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${h}`} class="post-msg-pill-link" onClick=${q0}>
                                    <${l_}
                                        prefix="post"
                                        label=${"msg:"+h}
                                        title=${"Message "+h}
                                        icon="message"
                                        onClick=${q0}
                                    />
                                </a>
                            `})}
                        ${n0.map((h)=>{let q0=h.split("/").pop()||h;return z`
                                <${l_}
                                    prefix="post"
                                    label=${q0}
                                    title=${h}
                                    onClick=${()=>M?.(h)}
                                />
                            `})}
                        ${p0.map((h)=>z`
                            <${YY}
                                key=${h.id}
                                attachment=${h}
                                onPreview=${L1}
                            />
                        `)}
                    </div>
                `}
                ${$1&&z`
                    <div 
                        ref=${n}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:G1}}
                        onClick=${(h)=>{if(h.target.classList.contains("hashtag")){h.preventDefault(),h.stopPropagation();let q0=h.target.dataset.hashtag;if(q0)j?.(q0)}else if(h.target.tagName==="IMG")h.preventDefault(),h.stopPropagation(),C(h.target.src)}}
                    />
                `}
                ${E0.length>0&&z`
                    <div ref=${O1} class="post-adaptive-cards" />
                `}
                ${v0.length>0&&z`
                    <div class="post-adaptive-card-submissions">
                        ${v0.map((h,q0)=>{let A0=V7(h),c0=`${h.card_id}-${q0}`;return z`
                                <div key=${c0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${A0.title}</span>
                                        </div>
                                    </div>
                                    ${A0.fields.length>0&&z`
                                        <div class="adaptive-card-submission-fields">
                                            ${A0.fields.map((j1)=>z`
                                                <span class="adaptive-card-submission-field" title=${`${j1.key}: ${j1.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${j1.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${j1.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${s4(A0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${l0.length>0&&z`
                    <div class="generated-widget-launches">
                        ${l0.map((h,q0)=>z`
                            <${qY}
                                key=${h.widget_id||h.id||`${_.id}-widget-${q0}`}
                                block=${h}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${H0.length>0&&z`
                    ${H0.map((h,q0)=>z`
                        <${w5} key=${q0} annotations=${h} />
                    `)}
                `}
                ${i0.length>0&&z`
                    <div class="media-preview">
                        ${i0.map(({id:h,mimeType:q0})=>{let c0=typeof q0==="string"&&q0.toLowerCase().startsWith("image/svg")?y_(h):S8(h);return z`
                                <img 
                                    key=${h} 
                                    src=${c0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(j1)=>v1(j1,h)}
                                />
                            `})}
                    </div>
                `}
                ${i0.length>0&&z`
                    ${i0.map(({annotations:h},q0)=>z`
                        ${h&&z`<${w5} key=${q0} annotations=${h} />`}
                    `)}
                `}
                ${G0.length>0&&z`
                    <div class="file-attachments">
                        ${G0.map((h)=>z`
                            <${NY} key=${h} mediaId=${h} onPreview=${L1} />
                        `)}
                    </div>
                `}
                ${C0.length>0&&z`
                    <div class="resource-links">
                        ${C0.map((h,q0)=>z`
                            <div key=${q0}>
                                <${QY} block=${h} />
                                <${w5} annotations=${h.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M0.length>0&&z`
                    <div class="resource-embeds">
                        ${M0.map((h,q0)=>z`
                            <div key=${q0}>
                                <${KY} block=${h} />
                                <${w5} annotations=${h.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${l.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${l.link_previews.map((h,q0)=>z`
                            <${XY} key=${q0} preview=${h} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${k&&z`<${U7} src=${k} onClose=${()=>C(null)} />`}
        ${h1&&z`
            <${L7}
                mediaId=${h1.mediaId}
                info=${h1.info}
                onClose=${()=>N1(null)}
            />
        `}
    `}function F7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:Y,onScrollToMessage:Q,onFileRef:K,onOpenWidget:B,emptyMessage:G,timelineRef:V,agents:W,user:U,onDeletePost:D,reverse:I=!0,removingPostIds:T,searchQuery:M}){let[J,k]=p(!1),C=S(null),n=typeof IntersectionObserver<"u",l=x(async()=>{if(!j||!$||J)return;k(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{k(!1)}},[$,J,j]),e=x((i)=>{let{scrollTop:K0,scrollHeight:Y0,clientHeight:N0}=i.target,B0=I?Y0-N0-K0:K0,W0=Math.max(300,N0);if(B0<W0)l()},[I,l]);g(()=>{if(!n)return;let i=C.current,K0=V?.current;if(!i||!K0)return;let Y0=300,N0=new IntersectionObserver((B0)=>{for(let W0 of B0){if(!W0.isIntersecting)continue;l()}},{root:K0,rootMargin:`${Y0}px 0px ${Y0}px 0px`,threshold:0});return N0.observe(i),()=>N0.disconnect()},[n,$,j,V,l]);let j0=S(l);if(j0.current=l,g(()=>{if(n)return;if(!V?.current)return;let{scrollTop:i,scrollHeight:K0,clientHeight:Y0}=V.current,N0=I?K0-Y0-i:i,B0=Math.max(300,Y0);if(N0<B0)j0.current?.()},[n,_,$,I,V]),g(()=>{if(!V?.current)return;if(!$||J)return;let{scrollTop:i,scrollHeight:K0,clientHeight:Y0}=V.current,N0=I?K0-Y0-i:i,B0=Math.max(300,Y0);if(K0<=Y0+1||N0<B0)j0.current?.()},[_,$,J,I,V]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let f=_.slice().sort((i,K0)=>i.id-K0.id),w=(i)=>{let K0=i?.data?.thread_id;if(K0===null||K0===void 0||K0==="")return null;let Y0=Number(K0);return Number.isFinite(Y0)?Y0:null},H=new Map;for(let i=0;i<f.length;i+=1){let K0=f[i],Y0=Number(K0?.id),N0=w(K0);if(N0!==null){let B0=H.get(N0)||{anchorIndex:-1,replyIndexes:[]};B0.replyIndexes.push(i),H.set(N0,B0)}else if(Number.isFinite(Y0)){let B0=H.get(Y0)||{anchorIndex:-1,replyIndexes:[]};B0.anchorIndex=i,H.set(Y0,B0)}}let R=new Map;for(let[i,K0]of H.entries()){let Y0=new Set;if(K0.anchorIndex>=0)Y0.add(K0.anchorIndex);for(let N0 of K0.replyIndexes)Y0.add(N0);R.set(i,Array.from(Y0).sort((N0,B0)=>N0-B0))}let c=f.map((i,K0)=>{let Y0=w(i);if(Y0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let N0=R.get(Y0);if(!N0||N0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let B0=N0.indexOf(K0);if(B0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:B0>0,hasThreadNext:B0<N0.length-1}}),Q0=z`<div class="timeline-sentinel" ref=${C}></div>`;return z`
        <div class="timeline ${I?"reverse":"normal"}" ref=${V} onScroll=${e}>
            <div class="timeline-content">
                ${I?Q0:null}
                ${f.map((i,K0)=>{let Y0=Boolean(i.data?.thread_id&&i.data.thread_id!==i.id),N0=T?.has?.(i.id),B0=c[K0]||{};return z`
                    <${z7}
                        key=${i.id}
                        post=${i}
                        isThreadReply=${Y0}
                        isThreadPrev=${B0.hasThreadPrev}
                        isThreadNext=${B0.hasThreadNext}
                        isRemoving=${N0}
                        highlightQuery=${M}
                        agentName=${a2(i.data?.agent_id,W||{})}
                        agentAvatarUrl=${t2(i.data?.agent_id,W||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(i)}
                        onHashtagClick=${N}
                        onMessageRef=${Y}
                        onScrollToMessage=${Q}
                        onFileRef=${K}
                        onOpenWidget=${B}
                        onDelete=${D}
                    />
                `})}
                ${I?null:Q0}
            </div>
        </div>
    `}class H7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let Y=N===!0?0:typeof N==="number"?N:0;if(Y>j)j=Y,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var h0=new H7;var R5=null,Q6=null;function AY(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function O7(){if(Q6)return Promise.resolve(Q6);if(!R5)R5=import(AY()).then((_)=>{return Q6=_,_}).catch((_)=>{throw R5=null,_});return R5}class J7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await O7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var K6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new J7(_,$)}};function q6(){O7().catch(()=>{})}var h$="piclaw://terminal";var MY={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},kY={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},f5=null,G6=null;function IY(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function CY(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,Y)=>{let Q=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!IY(Q))return $(N,Y);if(N instanceof Request)return $(new Request(j,N));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function PY(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!f5)f5=CY(()=>Promise.resolve($.init?.())).catch((j)=>{throw f5=null,j});return await f5,$}async function TY(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!G6)G6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await G6}async function yY(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function SY(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function xY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function U4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function wY(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function D7(){let _=xY(),$=_?kY:MY,j=U4("--bg-primary",_?"#000000":"#ffffff"),Z=U4("--text-primary",_?"#e7e9ea":"#0f1419"),N=U4("--text-secondary",_?"#71767b":"#536471"),Y=U4("--accent-color","#1d9bf0"),Q=U4("--danger-color",_?"#ff7b72":"#cf222e"),K=U4("--success-color",_?"#7ee787":"#1a7f37"),B=U4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=U4("--border-color",_?"#2f3336":"#eff3f4"),V=U4("--accent-soft-strong",wY(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:V,selectionForeground:Z,black:B,red:Q,green:K,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class X6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await PY();if(await TY(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:D7()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=D7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await yY();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(SY($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var B6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new X6(_,$)}},W6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new X6(_,$)}};function z4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function v5(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||N>1||Q)}function E7(_,$={}){if(z4($))return null;if(v5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:RY(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function V6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function L6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function U6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function A7(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function a4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function M7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function k7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim();if(!N)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",N),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function RY(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function fY(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function I7(_,$={}){if(z4($))return null;if(v5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:fY(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function b5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function vY(_){try{return JSON.parse(_)}catch{return null}}function bY(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function uY(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class z6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=uY($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||vY;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=bY(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var p$=()=>{throw Error("Operation requires compiling with --exportRuntime")},mY=typeof BigUint64Array<"u",c$=Symbol();var gY=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function C7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return gY.decode(Z)}catch{let N="",Y=0;while(j-Y>1024)N+=String.fromCharCode(...Z.subarray(Y,Y+=1024));return N+String.fromCharCode(...Z.subarray(Y))}}function P7(_){let $={};function j(N,Y){if(!N)return"<yet unknown>";return C7(N.buffer,Y)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Y,Q,K,B){let G=$.memory||Z.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,Q)}:${K}:${B}`)},Z.trace=Z.trace||function(Y,Q,...K){let B=$.memory||Z.memory;console.log(`trace: ${j(B,Y)}${Q?" ":""}${K.slice(0,Q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function T7(_,$){let j=$.exports,Z=j.memory,N=j.table,Y=j.__new||p$,Q=j.__pin||p$,K=j.__unpin||p$,B=j.__collect||p$,G=j.__rtti_base,V=G?(H)=>H[G>>>2]:p$;_.__new=Y,_.__pin=Q,_.__unpin=K,_.__collect=B;function W(H){let R=new Uint32Array(Z.buffer);if((H>>>=0)>=V(R))throw Error(`invalid id: ${H}`);return R[(G+4>>>2)+H]}function U(H){let R=W(H);if(!(R&7))throw Error(`not an array: ${H}, flags=${R}`);return R}function D(H){return 31-Math.clz32(H>>>6&31)}function I(H){if(H==null)return 0;let R=H.length,c=Y(R<<1,2),Q0=new Uint16Array(Z.buffer);for(let i=0,K0=c>>>1;i<R;++i)Q0[K0+i]=H.charCodeAt(i);return c}_.__newString=I;function T(H){if(H==null)return 0;let R=new Uint8Array(H),c=Y(R.length,1);return new Uint8Array(Z.buffer).set(R,c),c}_.__newArrayBuffer=T;function M(H){if(!H)return null;let R=Z.buffer;if(new Uint32Array(R)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return C7(R,H)}_.__getString=M;function J(H,R,c){let Q0=Z.buffer;if(c)switch(H){case 2:return new Float32Array(Q0);case 3:return new Float64Array(Q0)}else switch(H){case 0:return new(R?Int8Array:Uint8Array)(Q0);case 1:return new(R?Int16Array:Uint16Array)(Q0);case 2:return new(R?Int32Array:Uint32Array)(Q0);case 3:return new(R?BigInt64Array:BigUint64Array)(Q0)}throw Error(`unsupported align: ${H}`)}function k(H,R=0){let c=R,Q0=U(H),i=D(Q0),K0=typeof c!=="number",Y0=K0?c.length:c,N0=Y(Y0<<i,Q0&4?H:1),B0;if(Q0&4)B0=N0;else{Q(N0);let W0=Y(Q0&2?16:12,H);K(N0);let U0=new Uint32Array(Z.buffer);if(U0[W0+0>>>2]=N0,U0[W0+4>>>2]=N0,U0[W0+8>>>2]=Y0<<i,Q0&2)U0[W0+12>>>2]=Y0;B0=W0}if(K0){let W0=J(i,Q0&2048,Q0&4096),U0=N0>>>i;if(Q0&16384)for(let O0=0;O0<Y0;++O0)W0[U0+O0]=c[O0];else W0.set(c,U0)}return B0}_.__newArray=k;function C(H){let R=new Uint32Array(Z.buffer),c=R[H+-8>>>2],Q0=U(c),i=D(Q0),K0=Q0&4?H:R[H+4>>>2],Y0=Q0&2?R[H+12>>>2]:R[K0+-4>>>2]>>>i;return J(i,Q0&2048,Q0&4096).subarray(K0>>>=i,K0+Y0)}_.__getArrayView=C;function n(H){let R=C(H),c=R.length,Q0=Array(c);for(let i=0;i<c;i++)Q0[i]=R[i];return Q0}_.__getArray=n;function l(H){let R=Z.buffer,c=new Uint32Array(R)[H+-4>>>2];return R.slice(H,H+c)}_.__getArrayBuffer=l;function e(H){if(!N)throw Error("Operation requires compiling with --exportTable");let R=new Uint32Array(Z.buffer)[H>>>2];return N.get(R)}_.__getFunction=e;function j0(H,R,c){return new H(f(H,R,c))}function f(H,R,c){let Q0=Z.buffer,i=new Uint32Array(Q0);return new H(Q0,i[c+4>>>2],i[c+8>>>2]>>>R)}function w(H,R,c){_[`__get${R}`]=j0.bind(null,H,c),_[`__get${R}View`]=f.bind(null,H,c)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{w(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),mY)[BigUint64Array,BigInt64Array].forEach((H)=>{w(H,H.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||N,pY(j,_)}function y7(_){return typeof Response<"u"&&_ instanceof Response}function hY(_){return _ instanceof WebAssembly.Module}async function F6(_,$={}){if(y7(_=await _))return u5(_,$);let j=hY(_)?_:await WebAssembly.compile(_),Z=P7($),N=await WebAssembly.instantiate(j,$),Y=T7(Z,N);return{module:j,instance:N,exports:Y}}async function u5(_,$={}){if(!WebAssembly.instantiateStreaming)return F6(y7(_=await _)?_.arrayBuffer():_,$);let j=P7($),Z=await WebAssembly.instantiateStreaming(_,$),N=T7(j,Z.instance);return{...Z,exports:N}}function pY(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let N=_[Z],Y=Z.split("."),Q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(Q,G))Q[G]={};Q=Q[G]}let K=Y[0],B=K.indexOf("#");if(B>=0){let G=K.substring(0,B),V=Q[G];if(typeof V>"u"||!V.prototype){let W=function(...U){return W.wrap(W.prototype.constructor(0,...U))};if(W.prototype={valueOf(){return this[c$]}},W.wrap=function(U){return Object.create(W.prototype,{[c$]:{value:U,writable:!1}})},V)Object.getOwnPropertyNames(V).forEach((U)=>Object.defineProperty(W,U,Object.getOwnPropertyDescriptor(V,U)));Q[G]=W}if(K=K.substring(B+1),Q=Q[G].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(Q,K=K.substring(4))){let W=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(Q,K,{get(){return W(this[c$])},set(D){U(this[c$],D)},enumerable:!0})}}else if(K==="constructor")(Q[K]=function(...W){return j(W.length),N(...W)}).original=N;else(Q[K]=function(...W){return j(W.length),N(this[c$],...W)}).original=N}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(Q,K=K.substring(4)))Object.defineProperty(Q,K,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof N==="function"&&N!==j)(Q[K]=(...G)=>{return j(G.length),N(...G)}).original=N;else Q[K]=N}return $}var lY="/static/js/vendor/remote-display-decoder.wasm",m5=null;function S7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function x7(){if(m5)return m5;return m5=(async()=>{try{let Z=function(N,Y,Q,K,B,G,V){let W=S7(Y),U=j.__pin(j.__newArrayBuffer(W));try{return j[N](U,Q,K,B,G,V.bitsPerPixel,V.bigEndian?1:0,V.trueColor?1:0,V.redMax,V.greenMax,V.blueMax,V.redShift,V.greenShift,V.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(lY,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof u5==="function"?await u5(_,{}):await F6(await _.arrayBuffer(),{})).exports;for(let N of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[N]!=="function")throw Error(`${N} export is missing.`);return{initFramebuffer(N,Y){j.initFramebuffer(N,Y)},getFramebuffer(){let N=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,N,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(N,Y,Q,K,B,G){return Z("processRawRect",N,Y,Q,K,B,G)},processCopyRect(N,Y,Q,K,B,G){return j.processCopyRect(N,Y,Q,K,B,G)},processRreRect(N,Y,Q,K,B,G){return Z("processRreRect",N,Y,Q,K,B,G)},processHextileRect(N,Y,Q,K,B,G){return Z("processHextileRect",N,Y,Q,K,B,G)},processZrleTileData(N,Y,Q,K,B,G){return Z("processZrleTileData",N,Y,Q,K,B,G)},decodeRawRectToRgba(N,Y,Q,K){let B=S7(N),G=j.__pin(j.__newArrayBuffer(B));try{let V=j.__pin(j.decodeRawRectToRgba(G,Y,Q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(V))}finally{j.__unpin(V)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),m5}function V$(_,$,j){return Math.max($,Math.min(j,_))}function g5(_,$,j){let Z=new Uint8Array(6),N=V$(Math.floor(Number($||0)),0,65535),Y=V$(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=V$(Math.floor(Number(_||0)),0,255),Z[2]=N>>8&255,Z[3]=N&255,Z[4]=Y>>8&255,Z[5]=Y&255,Z}function O6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function w7(_,$,j,Z,N){let Y=Math.max(1,Math.floor(Number(Z||0))),Q=Math.max(1,Math.floor(Number(N||0))),K=Math.max(1,Number(j?.width||0)),B=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/K,V=(Number($||0)-Number(j?.top||0))/B;return{x:V$(Math.floor(G*Y),0,Math.max(0,Y-1)),y:V$(Math.floor(V*Q),0,Math.max(0,Q-1))}}function R7(_,$,j,Z=0){let N=Number(_)<0?8:16,Y=V$(Number(Z||0)|N,0,255);return[g5(Y,$,j),g5(Number(Z||0),$,j)]}function f7(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function l$(_){if(typeof _!=="string")return null;return _.length>0?_:null}function v7(_,$,j,Z){let N=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),Q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Z||0))),B=Math.min(N/Q,Y/K);if(!Number.isFinite(B)||B<=0)return 1;return Math.max(0.01,B)}var H6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)H6[`F${_}`]=65470+(_-1);function J6(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(H6,Y))return H6[Y];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,N=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===N){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var f1=Uint8Array,J_=Uint16Array,T6=Int32Array,h5=new f1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),p5=new f1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),k6=new f1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),g7=function(_,$){var j=new J_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var N=new T6(j[30]);for(var Z=1;Z<30;++Z)for(var Y=j[Z];Y<j[Z+1];++Y)N[Y]=Y-j[Z]<<5|Z;return{b:j,r:N}},h7=g7(h5,2),p7=h7.b,I6=h7.r;p7[28]=258,I6[258]=28;var c7=g7(p5,0),iY=c7.b,b7=c7.r,C6=new J_(32768);for(m0=0;m0<32768;++m0)$4=(m0&43690)>>1|(m0&21845)<<1,$4=($4&52428)>>2|($4&13107)<<2,$4=($4&61680)>>4|($4&3855)<<4,C6[m0]=(($4&65280)>>8|($4&255)<<8)>>1;var $4,m0,j4=function(_,$,j){var Z=_.length,N=0,Y=new J_($);for(;N<Z;++N)if(_[N])++Y[_[N]-1];var Q=new J_($);for(N=1;N<$;++N)Q[N]=Q[N-1]+Y[N-1]<<1;var K;if(j){K=new J_(1<<$);var B=15-$;for(N=0;N<Z;++N)if(_[N]){var G=N<<4|_[N],V=$-_[N],W=Q[_[N]-1]++<<V;for(var U=W|(1<<V)-1;W<=U;++W)K[C6[W]>>B]=G}}else{K=new J_(Z);for(N=0;N<Z;++N)if(_[N])K[N]=C6[Q[_[N]-1]++]>>15-_[N]}return K},x4=new f1(288);for(m0=0;m0<144;++m0)x4[m0]=8;var m0;for(m0=144;m0<256;++m0)x4[m0]=9;var m0;for(m0=256;m0<280;++m0)x4[m0]=7;var m0;for(m0=280;m0<288;++m0)x4[m0]=8;var m0,o$=new f1(32);for(m0=0;m0<32;++m0)o$[m0]=5;var m0,dY=j4(x4,9,0),nY=j4(x4,9,1),oY=j4(o$,5,0),rY=j4(o$,5,1),D6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},i_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},E6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},y6=function(_){return(_+7)/8|0},n$=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new f1(_.subarray($,j))};var sY=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],X_=function(_,$,j){var Z=Error($||sY[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,X_);if(!j)throw Z;return Z},aY=function(_,$,j,Z){var N=_.length,Y=Z?Z.length:0;if(!N||$.f&&!$.l)return j||new f1(0);var Q=!j,K=Q||$.i!=2,B=$.i;if(Q)j=new f1(N*3);var G=function(d0){var F0=j.length;if(d0>F0){var $1=new f1(Math.max(F0*2,d0));$1.set(j),j=$1}},V=$.f||0,W=$.p||0,U=$.b||0,D=$.l,I=$.d,T=$.m,M=$.n,J=N*8;do{if(!D){V=i_(_,W,1);var k=i_(_,W+1,3);if(W+=3,!k){var C=y6(W)+4,n=_[C-4]|_[C-3]<<8,l=C+n;if(l>N){if(B)X_(0);break}if(K)G(U+n);j.set(_.subarray(C,l),U),$.b=U+=n,$.p=W=l*8,$.f=V;continue}else if(k==1)D=nY,I=rY,T=9,M=5;else if(k==2){var e=i_(_,W,31)+257,j0=i_(_,W+10,15)+4,f=e+i_(_,W+5,31)+1;W+=14;var w=new f1(f),H=new f1(19);for(var R=0;R<j0;++R)H[k6[R]]=i_(_,W+R*3,7);W+=j0*3;var c=D6(H),Q0=(1<<c)-1,i=j4(H,c,1);for(var R=0;R<f;){var K0=i[i_(_,W,Q0)];W+=K0&15;var C=K0>>4;if(C<16)w[R++]=C;else{var Y0=0,N0=0;if(C==16)N0=3+i_(_,W,3),W+=2,Y0=w[R-1];else if(C==17)N0=3+i_(_,W,7),W+=3;else if(C==18)N0=11+i_(_,W,127),W+=7;while(N0--)w[R++]=Y0}}var B0=w.subarray(0,e),W0=w.subarray(e);T=D6(B0),M=D6(W0),D=j4(B0,T,1),I=j4(W0,M,1)}else X_(1);if(W>J){if(B)X_(0);break}}if(K)G(U+131072);var U0=(1<<T)-1,O0=(1<<M)-1,P0=W;for(;;P0=W){var Y0=D[E6(_,W)&U0],n0=Y0>>4;if(W+=Y0&15,W>J){if(B)X_(0);break}if(!Y0)X_(2);if(n0<256)j[U++]=n0;else if(n0==256){P0=W,D=null;break}else{var x0=n0-254;if(n0>264){var R=n0-257,T0=h5[R];x0=i_(_,W,(1<<T0)-1)+p7[R],W+=T0}var o0=I[E6(_,W)&O0],r0=o0>>4;if(!o0)X_(3);W+=o0&15;var W0=iY[r0];if(r0>3){var T0=p5[r0];W0+=E6(_,W)&(1<<T0)-1,W+=T0}if(W>J){if(B)X_(0);break}if(K)G(U+131072);var y0=U+x0;if(U<W0){var b0=Y-W0,s0=Math.min(W0,y0);if(b0+U<0)X_(3);for(;U<s0;++U)j[U]=Z[b0+U]}for(;U<y0;++U)j[U]=j[U-W0]}}if($.l=D,$.p=P0,$.b=U,$.f=V,D)V=1,$.m=T,$.d=I,$.n=M}while(!V);return U!=j.length&&Q?n$(j,0,U):j.subarray(0,U)},F4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},i$=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},A6=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var N=j.length,Y=j.slice();if(!N)return{t:i7,l:0};if(N==1){var Q=new f1(j[0].s+1);return Q[j[0].s]=1,{t:Q,l:1}}j.sort(function(l,e){return l.f-e.f}),j.push({s:-1,f:25001});var K=j[0],B=j[1],G=0,V=1,W=2;j[0]={s:-1,f:K.f+B.f,l:K,r:B};while(V!=N-1)K=j[j[G].f<j[W].f?G++:W++],B=j[G!=V&&j[G].f<j[W].f?G++:W++],j[V++]={s:-1,f:K.f+B.f,l:K,r:B};var U=Y[0].s;for(var Z=1;Z<N;++Z)if(Y[Z].s>U)U=Y[Z].s;var D=new J_(U+1),I=P6(j[V-1],D,0);if(I>$){var Z=0,T=0,M=I-$,J=1<<M;Y.sort(function(e,j0){return D[j0.s]-D[e.s]||e.f-j0.f});for(;Z<N;++Z){var k=Y[Z].s;if(D[k]>$)T+=J-(1<<I-D[k]),D[k]=$;else break}T>>=M;while(T>0){var C=Y[Z].s;if(D[C]<$)T-=1<<$-D[C]++-1;else++Z}for(;Z>=0&&T;--Z){var n=Y[Z].s;if(D[n]==$)--D[n],++T}I=$}return{t:new f1(D),l:I}},P6=function(_,$,j){return _.s==-1?Math.max(P6(_.l,$,j+1),P6(_.r,$,j+1)):$[_.s]=j},u7=function(_){var $=_.length;while($&&!_[--$]);var j=new J_(++$),Z=0,N=_[0],Y=1,Q=function(B){j[Z++]=B};for(var K=1;K<=$;++K)if(_[K]==N&&K!=$)++Y;else{if(!N&&Y>2){for(;Y>138;Y-=138)Q(32754);if(Y>2)Q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){Q(N),--Y;for(;Y>6;Y-=6)Q(8304);if(Y>2)Q(Y-3<<5|8208),Y=0}while(Y--)Q(N);Y=1,N=_[K]}return{c:j.subarray(0,Z),n:$}},d$=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},l7=function(_,$,j){var Z=j.length,N=y6($+2);_[N]=Z&255,_[N+1]=Z>>8,_[N+2]=_[N]^255,_[N+3]=_[N+1]^255;for(var Y=0;Y<Z;++Y)_[N+Y+4]=j[Y];return(N+4+Z)*8},m7=function(_,$,j,Z,N,Y,Q,K,B,G,V){F4($,V++,j),++N[256];var W=A6(N,15),U=W.t,D=W.l,I=A6(Y,15),T=I.t,M=I.l,J=u7(U),k=J.c,C=J.n,n=u7(T),l=n.c,e=n.n,j0=new J_(19);for(var f=0;f<k.length;++f)++j0[k[f]&31];for(var f=0;f<l.length;++f)++j0[l[f]&31];var w=A6(j0,7),H=w.t,R=w.l,c=19;for(;c>4&&!H[k6[c-1]];--c);var Q0=G+5<<3,i=d$(N,x4)+d$(Y,o$)+Q,K0=d$(N,U)+d$(Y,T)+Q+14+3*c+d$(j0,H)+2*j0[16]+3*j0[17]+7*j0[18];if(B>=0&&Q0<=i&&Q0<=K0)return l7($,V,_.subarray(B,B+G));var Y0,N0,B0,W0;if(F4($,V,1+(K0<i)),V+=2,K0<i){Y0=j4(U,D,0),N0=U,B0=j4(T,M,0),W0=T;var U0=j4(H,R,0);F4($,V,C-257),F4($,V+5,e-1),F4($,V+10,c-4),V+=14;for(var f=0;f<c;++f)F4($,V+3*f,H[k6[f]]);V+=3*c;var O0=[k,l];for(var P0=0;P0<2;++P0){var n0=O0[P0];for(var f=0;f<n0.length;++f){var x0=n0[f]&31;if(F4($,V,U0[x0]),V+=H[x0],x0>15)F4($,V,n0[f]>>5&127),V+=n0[f]>>12}}}else Y0=dY,N0=x4,B0=oY,W0=o$;for(var f=0;f<K;++f){var T0=Z[f];if(T0>255){var x0=T0>>18&31;if(i$($,V,Y0[x0+257]),V+=N0[x0+257],x0>7)F4($,V,T0>>23&31),V+=h5[x0];var o0=T0&31;if(i$($,V,B0[o0]),V+=W0[o0],o0>3)i$($,V,T0>>5&8191),V+=p5[o0]}else i$($,V,Y0[T0]),V+=N0[T0]}return i$($,V,Y0[256]),V+N0[256]},tY=new T6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),i7=new f1(0),eY=function(_,$,j,Z,N,Y){var Q=Y.z||_.length,K=new f1(Z+Q+5*(1+Math.ceil(Q/7000))+N),B=K.subarray(Z,K.length-N),G=Y.l,V=(Y.r||0)&7;if($){if(V)B[0]=Y.r>>3;var W=tY[$-1],U=W>>13,D=W&8191,I=(1<<j)-1,T=Y.p||new J_(32768),M=Y.h||new J_(I+1),J=Math.ceil(j/3),k=2*J,C=function(H1){return(_[H1]^_[H1+1]<<J^_[H1+2]<<k)&I},n=new T6(25000),l=new J_(288),e=new J_(32),j0=0,f=0,w=Y.i||0,H=0,R=Y.w||0,c=0;for(;w+2<Q;++w){var Q0=C(w),i=w&32767,K0=M[Q0];if(T[i]=K0,M[Q0]=i,R<=w){var Y0=Q-w;if((j0>7000||H>24576)&&(Y0>423||!G)){V=m7(_,B,0,n,l,e,f,H,c,w-c,V),H=j0=f=0,c=w;for(var N0=0;N0<286;++N0)l[N0]=0;for(var N0=0;N0<30;++N0)e[N0]=0}var B0=2,W0=0,U0=D,O0=i-K0&32767;if(Y0>2&&Q0==C(w-O0)){var P0=Math.min(U,Y0)-1,n0=Math.min(32767,w),x0=Math.min(258,Y0);while(O0<=n0&&--U0&&i!=K0){if(_[w+B0]==_[w+B0-O0]){var T0=0;for(;T0<x0&&_[w+T0]==_[w+T0-O0];++T0);if(T0>B0){if(B0=T0,W0=O0,T0>P0)break;var o0=Math.min(O0,T0-2),r0=0;for(var N0=0;N0<o0;++N0){var y0=w-O0+N0&32767,b0=T[y0],s0=y0-b0&32767;if(s0>r0)r0=s0,K0=y0}}}i=K0,K0=T[i],O0+=i-K0&32767}}if(W0){n[H++]=268435456|I6[B0]<<18|b7[W0];var d0=I6[B0]&31,F0=b7[W0]&31;f+=h5[d0]+p5[F0],++l[257+d0],++e[F0],R=w+B0,++j0}else n[H++]=_[w],++l[_[w]]}}for(w=Math.max(w,R);w<Q;++w)n[H++]=_[w],++l[_[w]];if(V=m7(_,B,G,n,l,e,f,H,c,w-c,V),!G)Y.r=V&7|B[V/8|0]<<3,V-=7,Y.h=M,Y.p=T,Y.i=w,Y.w=R}else{for(var w=Y.w||0;w<Q+G;w+=65535){var $1=w+65535;if($1>=Q)B[V/8|0]=G,$1=Q;V=l7(B,V+1,_.subarray(w,$1))}Y.i=Q}return n$(K,0,Z+y6(V)+N)};var d7=function(){var _=1,$=0;return{p:function(j){var Z=_,N=$,Y=j.length|0;for(var Q=0;Q!=Y;){var K=Math.min(Q+2655,Y);for(;Q<K;++Q)N+=Z+=j[Q];Z=(Z&65535)+15*(Z>>16),N=(N&65535)+15*(N>>16)}_=Z,$=N},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},_Q=function(_,$,j,Z,N){if(!N){if(N={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),Q=new f1(Y.length+_.length);Q.set(Y),Q.set(_,Y.length),_=Q,N.w=Y.length}}return eY(_,$.level==null?6:$.level,$.mem==null?N.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,N)};var n7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var $Q=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var N=d7();N.p($.dictionary),n7(_,2,N.d())}},jQ=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)X_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)X_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var M6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new f1(32768),this.p=new f1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)X_(5);if(this.d)X_(4);if(!this.p.length)this.p=$;else if($.length){var j=new f1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=aY(this.p,this.s,this.o);this.ondata(n$(Z,j,this.s.b),this.d),this.o=n$(Z,this.s.b-32768),this.s.b=this.o.length,this.p=n$(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function o7(_,$){if(!$)$={};var j=d7();j.p(_);var Z=_Q(_,$,$.dictionary?6:2,4);return $Q(Z,$),n7(Z,Z.length-4,j.d()),Z}var r7=function(){function _($,j){M6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(M6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(jQ(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)X_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}M6.prototype.c.call(this,j)},_}();var ZQ=typeof TextDecoder<"u"&&new TextDecoder,NQ=0;try{ZQ.decode(i7,{stream:!0}),NQ=1}catch(_){}var YQ=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],QQ=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],KQ=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],qQ=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],GQ=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],XQ=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],BQ=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],WQ=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],t7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;t7[_]=$}function e7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function _9(_){let $=0n,j=e7(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function VQ(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let N=$-1;N>=0;N-=1)j[N]=Number(Z&0xffn),Z>>=8n;return j}function L$(_,$,j){let Z=0n;for(let N of $){let Y=BigInt(_)>>BigInt(j-N)&1n;Z=Z<<1n|Y}return Z}function s7(_,$){let j=28n,Z=(1n<<j)-1n,N=BigInt($%28);return(_<<N|_>>j-N)&Z}function LQ(_){let $=L$(_9(_),GQ,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,N=[];for(let Y of BQ){j=s7(j,Y),Z=s7(Z,Y);let Q=j<<28n|Z;N.push(L$(Q,XQ,56))}return N}function UQ(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),N=Number(_>>Z&0x3fn),Y=(N&32)>>4|N&1,Q=N>>1&15;$=$<<4n|BigInt(WQ[j][Y][Q])}return $}function zQ(_,$){let j=L$(_,KQ,32)^BigInt($),Z=UQ(j);return L$(Z,qQ,32)}function a7(_,$){let j=LQ($),Z=L$(_9(_),YQ,64),N=Z>>32n&0xffffffffn,Y=Z&0xffffffffn;for(let K of j){let B=Y,G=(N^zQ(Y,K))&0xffffffffn;N=B,Y=G}let Q=Y<<32n|N;return VQ(L$(Q,QQ,64),8)}function FQ(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let N=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=t7[N]}return j}function $9(_,$){let j=e7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=FQ(_),N=new Uint8Array(16);return N.set(a7(j.slice(0,8),Z),0),N.set(a7(j.slice(8,16),Z),8),N}var d_="vnc";function HQ(_){return Number(_)}function OQ(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((N)=>N.trim()).filter((N)=>N.length>0):[],j=[],Z=new Set;for(let N of $){let Y=HQ(N);if(!Number.isFinite(Y))continue;let Q=Number(Y);if(!Z.has(Q))j.push(Q),Z.add(Q)}if(j.length>0)return j;return[5,2,1,0,-223]}function F$(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function JQ(_,$){let j=F$(_),Z=F$($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let N=new Uint8Array(j.byteLength+Z.byteLength);return N.set(j,0),N.set(Z,j.byteLength),N}function DQ(_){let $=0;for(let N of _||[])$+=N?.byteLength||0;let j=new Uint8Array($),Z=0;for(let N of _||[]){let Y=F$(N);j.set(Y,Z),Z+=Y.byteLength}return j}function EQ(){return(_)=>{let $=F$(_);try{let j=[],Z=new r7((N)=>{j.push(new Uint8Array(N))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return DQ(j)}catch(j){try{let Z=o7($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let N=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${N}`)}}}}function AQ(_){return new TextEncoder().encode(String(_||""))}function U$(_){return new TextDecoder().decode(F$(_))}function MQ(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function kQ(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function j9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function IQ(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function CQ(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let N=4;for(let Y of $)Z.setInt32(N,Number(Y||0),!1),N+=4;return new Uint8Array(j)}function Z9(_,$,j,Z=0,N=0){let Y=new ArrayBuffer(10),Q=new DataView(Y);return Q.setUint8(0,3),Q.setUint8(1,_?1:0),Q.setUint16(2,Z,!1),Q.setUint16(4,N,!1),Q.setUint16(6,Math.max(0,$||0),!1),Q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function z$(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function Y9(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function PQ(_,$,j,Z){let N=Z||H$,Y=F$(_),Q=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*Q;if(Y.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${Y.byteLength}`);if(!N.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let B=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,V=0;for(let W=0;W<Math.max(0,$||0)*Math.max(0,j||0);W+=1){let U=Y9(Y,G,Q,N.bigEndian),D=z$(U>>>N.redShift&N.redMax,N.redMax),I=z$(U>>>N.greenShift&N.greenMax,N.greenMax),T=z$(U>>>N.blueShift&N.blueMax,N.blueMax);B[V]=D,B[V+1]=I,B[V+2]=T,B[V+3]=255,G+=Q,V+=4}return B}function H4(_,$,j){let Z=j||H$,N=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+N)return null;let Y=Y9(_,$,N,Z.bigEndian);return{rgba:[z$(Y>>>Z.redShift&Z.redMax,Z.redMax),z$(Y>>>Z.greenShift&Z.greenMax,Z.greenMax),z$(Y>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:N}}function w4(_,$,j,Z,N,Y,Q){if(!Q)return;for(let K=0;K<Y;K+=1)for(let B=0;B<N;B+=1){let G=((Z+K)*$+(j+B))*4;_[G]=Q[0],_[G+1]=Q[1],_[G+2]=Q[2],_[G+3]=Q[3]}}function Q9(_,$,j,Z,N,Y,Q){for(let K=0;K<Y;K+=1){let B=K*N*4,G=((Z+K)*$+j)*4;_.set(Q.subarray(B,B+N*4),G)}}function N9(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let N=_[j++];if(Z+=N,N!==255)break}return{consumed:j-$,runLength:Z}}function TQ(_,$,j,Z,N,Y,Q){let K=N||H$,B=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let V=_.slice($+4,$+4+G),W;try{W=Q(V)}catch{return{consumed:4+G,skipped:!0}}let U=0,D=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let I=0;I<Z;I+=64){let T=Math.min(64,Z-I);for(let M=0;M<j;M+=64){let J=Math.min(64,j-M);if(W.byteLength<U+1)return null;let k=W[U++],C=k&127,n=(k&128)!==0;if(!n&&C===0){let l=J*T*B;if(W.byteLength<U+l)return null;let e=Y(W.slice(U,U+l),J,T,K);U+=l,Q9(D,j,M,I,J,T,e);continue}if(!n&&C===1){let l=H4(W,U,K);if(!l)return null;U+=l.bytesPerPixel,w4(D,j,M,I,J,T,l.rgba);continue}if(!n&&C>1&&C<=16){let l=[];for(let w=0;w<C;w+=1){let H=H4(W,U,K);if(!H)return null;U+=H.bytesPerPixel,l.push(H.rgba)}let e=C<=2?1:C<=4?2:4,j0=Math.ceil(J*e/8),f=j0*T;if(W.byteLength<U+f)return null;for(let w=0;w<T;w+=1){let H=U+w*j0;for(let R=0;R<J;R+=1){let c=R*e,Q0=H+(c>>3),i=8-e-(c&7),K0=W[Q0]>>i&(1<<e)-1;w4(D,j,M+R,I+w,1,1,l[K0])}}U+=f;continue}if(n&&C===0){let l=0,e=0;while(e<T){let j0=H4(W,U,K);if(!j0)return null;U+=j0.bytesPerPixel;let f=N9(W,U);if(!f)return null;U+=f.consumed;for(let w=0;w<f.runLength;w+=1)if(w4(D,j,M+l,I+e,1,1,j0.rgba),l+=1,l>=J){if(l=0,e+=1,e>=T)break}}continue}if(n&&C>0){let l=[];for(let f=0;f<C;f+=1){let w=H4(W,U,K);if(!w)return null;U+=w.bytesPerPixel,l.push(w.rgba)}let e=0,j0=0;while(j0<T){if(W.byteLength<U+1)return null;let f=W[U++],w=f,H=1;if(f&128){w=f&127;let c=N9(W,U);if(!c)return null;U+=c.consumed,H=c.runLength}let R=l[w];if(!R)return null;for(let c=0;c<H;c+=1)if(w4(D,j,M+e,I+j0,1,1,R),e+=1,e>=J){if(e=0,j0+=1,j0>=T)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:D,decompressed:W}}function yQ(_,$,j,Z,N){let Y=N||H$,Q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+Q)return null;let B=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+Q+B*(Q+8);if(_.byteLength<$+G)return null;let V=$+4,W=H4(_,V,Y);if(!W)return null;V+=W.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);w4(U,j,0,0,j,Z,W.rgba);for(let D=0;D<B;D+=1){let I=H4(_,V,Y);if(!I)return null;if(V+=I.bytesPerPixel,_.byteLength<V+8)return null;let T=new DataView(_.buffer,_.byteOffset+V,8),M=T.getUint16(0,!1),J=T.getUint16(2,!1),k=T.getUint16(4,!1),C=T.getUint16(6,!1);V+=8,w4(U,j,M,J,k,C,I.rgba)}return{consumed:V-$,rgba:U}}function SQ(_,$,j,Z,N,Y){let Q=N||H$,K=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8)),B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),G=$,V=[0,0,0,255],W=[255,255,255,255];for(let U=0;U<Z;U+=16){let D=Math.min(16,Z-U);for(let I=0;I<j;I+=16){let T=Math.min(16,j-I);if(_.byteLength<G+1)return null;let M=_[G++];if(M&1){let J=T*D*K;if(_.byteLength<G+J)return null;let k=Y(_.slice(G,G+J),T,D,Q);G+=J,Q9(B,j,I,U,T,D,k);continue}if(M&2){let J=H4(_,G,Q);if(!J)return null;V=J.rgba,G+=J.bytesPerPixel}if(w4(B,j,I,U,T,D,V),M&4){let J=H4(_,G,Q);if(!J)return null;W=J.rgba,G+=J.bytesPerPixel}if(M&8){if(_.byteLength<G+1)return null;let J=_[G++];for(let k=0;k<J;k+=1){let C=W;if(M&16){let H=H4(_,G,Q);if(!H)return null;C=H.rgba,G+=H.bytesPerPixel}if(_.byteLength<G+2)return null;let n=_[G++],l=_[G++],e=n>>4,j0=n&15,f=(l>>4)+1,w=(l&15)+1;w4(B,j,I+e,U+j0,f,w,C)}}}}return{consumed:G-$,rgba:B}}var H$={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class c5{protocol=d_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:PQ,this.pipeline=_.pipeline||null,this.encodings=OQ(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...H$},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:EQ()}receive(_){if(_)this.buffer=JQ(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let N=this.consume(12),Y=U$(N),Q=MQ(Y);if(!Q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=Q,this.clientVersionText=kQ(Q),j.push(AQ(this.clientVersionText)),$.push({type:"protocol-version",protocol:d_,server:Q.text.trim(),client:this.clientVersionText.trim()}),this.state=Q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let N=this.buffer[0];if(N===0){if(this.buffer.byteLength<5)break;let B=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+B)break;this.consume(1);let G=U$(this.consume(4+B).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+N)break;this.consume(1);let Y=Array.from(this.consume(N));$.push({type:"security-types",protocol:d_,types:Y});let Q=null;if(Y.includes(2)&&this.password!==null)Q=2;else if(Y.includes(1))Q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Q)),$.push({type:"security-selected",protocol:d_,securityType:Q,label:Q===2?"VNC Authentication":"None"}),this.state=Q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let B=U$(this.consume(4+K).slice(4));throw Error(B||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:d_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:d_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let N=this.consume(16);j.push($9(this.password,N)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Q){let K=U$(this.consume(4+Q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:d_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=N.getUint16(0,!1),Q=N.getUint16(2,!1),K=j9(N,4),B=N.getUint32(20,!1);if(this.buffer.byteLength<24+B)break;let G=this.consume(24),V=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=V.getUint16(0,!1),this.framebufferHeight=V.getUint16(2,!1),this.serverPixelFormat=j9(V,4),this.serverName=U$(this.consume(B)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(IQ(this.clientPixelFormat)),j.push(CQ(this.encodings)),j.push(Z9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:d_,width:Y,height:Q,name:this.serverName,pixelFormat:K}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let N=this.buffer[0];if(N===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,B=[],G=!1,V=!!this.pipeline;for(let U=0;U<Q;U+=1){if(this.buffer.byteLength<K+12){G=!0;break}let D=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),I=D.getUint16(0,!1),T=D.getUint16(2,!1),M=D.getUint16(4,!1),J=D.getUint16(6,!1),k=D.getInt32(8,!1);if(K+=12,k===0){let C=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),n=M*J*C;if(this.buffer.byteLength<K+n){G=!0;break}let l=this.buffer.slice(K,K+n);if(K+=n,V)this.pipeline.processRawRect(l,I,T,M,J,this.clientPixelFormat),B.push({kind:"pipeline",x:I,y:T,width:M,height:J});else B.push({kind:"rgba",x:I,y:T,width:M,height:J,rgba:this.decodeRawRect(l,M,J,this.clientPixelFormat)});continue}if(k===2){let C=yQ(this.buffer,K,M,J,this.clientPixelFormat);if(!C){G=!0;break}if(V){let n=this.buffer.slice(K,K+C.consumed);this.pipeline.processRreRect(n,I,T,M,J,this.clientPixelFormat),B.push({kind:"pipeline",x:I,y:T,width:M,height:J})}else B.push({kind:"rgba",x:I,y:T,width:M,height:J,rgba:C.rgba});K+=C.consumed;continue}if(k===1){if(this.buffer.byteLength<K+4){G=!0;break}let C=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),n=C.getUint16(0,!1),l=C.getUint16(2,!1);if(K+=4,V)this.pipeline.processCopyRect(I,T,M,J,n,l),B.push({kind:"pipeline",x:I,y:T,width:M,height:J});else B.push({kind:"copy",x:I,y:T,width:M,height:J,srcX:n,srcY:l});continue}if(k===16){let C=TQ(this.buffer,K,M,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!C){G=!0;break}if(K+=C.consumed,C.skipped)continue;if(V&&C.decompressed)this.pipeline.processZrleTileData(C.decompressed,I,T,M,J,this.clientPixelFormat),B.push({kind:"pipeline",x:I,y:T,width:M,height:J});else B.push({kind:"rgba",x:I,y:T,width:M,height:J,rgba:C.rgba});continue}if(k===5){let C=SQ(this.buffer,K,M,J,this.clientPixelFormat,this.decodeRawRect);if(!C){G=!0;break}if(V){let n=this.buffer.slice(K,K+C.consumed);this.pipeline.processHextileRect(n,I,T,M,J,this.clientPixelFormat),B.push({kind:"pipeline",x:I,y:T,width:M,height:J})}else B.push({kind:"rgba",x:I,y:T,width:M,height:J,rgba:C.rgba});K+=C.consumed;continue}if(k===-223){if(this.framebufferWidth=M,this.framebufferHeight=J,V)this.pipeline.initFramebuffer(M,J);B.push({kind:"resize",x:I,y:T,width:M,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(K);let W={type:"framebuffer-update",protocol:d_,width:this.framebufferWidth,height:this.framebufferHeight,rects:B};if(V)W.framebuffer=this.pipeline.getFramebuffer();$.push(W),j.push(Z9(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(N===2){this.consume(1),$.push({type:"bell",protocol:d_}),Z=!0;continue}if(N===3){if(this.buffer.byteLength<8)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Q)break;this.consume(8);let K=U$(this.consume(Q));$.push({type:"clipboard",protocol:d_,text:K}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${N}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var Z4="piclaw://vnc";function xQ(_){let $=String(_||"");if($===Z4)return null;if(!$.startsWith(`${Z4}/`))return null;let j=$.slice(`${Z4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function t4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function wQ(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}function RQ(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/vnc/ws?target=${encodeURIComponent(_)}`}function fQ(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}class K9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;rawFallbackAttempted=!1;protocolRecovering=!1;constructor(_,$){this.container=_,this.targetId=xQ($?.path),this.targetLabel=this.targetId||null,this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_?"block":"none"}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                        ${$.map((N)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${t4(N.label||N.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${t4(N.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${N.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${t4(N.id)}" data-target-label="${t4(N.label||N.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let N=fQ(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!N)return;this.authPassword=l$(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(N,N)};this.directHostInputEl?.addEventListener("keydown",(N)=>{if(N.key!=="Enter")return;N.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(N)=>{if(N.key!=="Enter")return;N.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(N)=>{if(N.key!=="Enter")return;N.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let N of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))N.addEventListener("click",()=>{let Y=N.getAttribute("data-target-open-tab"),Q=N.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,Q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=l$(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=l$(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",N=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${N}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=v7($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return w7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(g5(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=O6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~O6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of R7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(f7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=J6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??J6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let N of _.rects||[])if(N.kind==="resize")this.ensureCanvasSize(N.width,N.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let N=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(N,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new c5);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let N of Z.outgoing||[])this.socketBoundary?.send?.(N);for(let N of Z.events||[])this.applyRemoteDisplayEvent(N)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=_==null?null:String(_).trim(),j=await x7(),Z={};if(j)Z.pipeline=j,Z.decodeRawRect=(Y,Q,K,B)=>j.decodeRawRectToRgba(Y,Q,K,B);let N=l$(this.authPassword);if(N!==null)Z.password=N;if($)Z.encodings=$;if(this.protocol=new c5(Z),this.hasRenderedFrame=!1,this.frameTimeoutId=null,this.canvas)this.canvas.style.display="none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display="";this.socketBoundary=new z6({url:RQ(this.targetId),binaryType:"arraybuffer",onOpen:()=>{this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(Y)=>{this.applyMetrics(Y)},onMessage:(Y)=>{this.handleSocketMessage(Y)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{this.setSessionChromeVisible(!0),this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await wQ(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${t4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var S6={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===Z4||$.startsWith(`${Z4}/`)?9000:!1},mount(_,$){return new K9(_,$)}};function R4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function vQ(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,Y=Z?.[2]||"",Q=Z?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),G=N.startsWith("/")?N:`${K?`${K}/`:""}${N}`,V=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(V.length>0)V.pop();continue}V.push(U)}let W=V.join("/");return`${z5(W)}${Y}${Q}`}function r$(_){return _?.preview||null}function bQ(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function uQ(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function mQ(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${R4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${R4(S_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${R4(s4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${R4(uQ($))}</span>`),Z.push(`<span><strong>extension:</strong> ${R4(bQ(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${R4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function gQ(_){let $=r$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=mQ(_,$);if($.kind==="image"){let Z=$.url||($.path?z5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${R4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=O_($.text||"",null,{rewriteImageSrc:(N)=>vQ(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${R4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class x6{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=gQ(this.context)}getContent(){let _=r$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=r$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var w6={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=r$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new x6(_,$)}},R6={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return r$(_)||_?.path?1:!1},mount(_,$){return new x6(_,$)}};var hQ=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),pQ={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},cQ={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function G9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function q9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class X9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=G9(j),Y=cQ[N]||"\uD83D\uDCC4",Q=pQ[N]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${q9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${q9(Q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let B=K.querySelector("#ov-open-tab");if(B)B.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class B9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f6={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=G9(_?.path);if(!$||!hQ.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new X9(_,$);return new B9(_,$)}};var lQ=/\.(csv|tsv)$/i;function W9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class V9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${W9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${W9(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#csv-open-tab");if(Q)Q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class L9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v6={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!lQ.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new V9(_,$);return new L9(_,$)}};var iQ=/\.pdf$/i;function dQ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class U9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${dQ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let Q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class z9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var b6={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!iQ.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new U9(_,$);return new z9(_,$)}};var nQ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function u6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class F9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${u6(N)}" alt="${u6(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${u6(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#img-open-tab");if(Q)Q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class H9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m6={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!nQ.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new F9(_,$);return new H9(_,$)}};var oQ=/\.(mp4|m4v|mov|webm|ogv)$/i;function rQ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class O9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${rQ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let Q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class J9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var g6={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!oQ.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new O9(_,$);return new J9(_,$)}};function sQ(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function aQ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var h6='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function D9(_){let $=String(_||"").trim();return $?$:h6}function tQ(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function eQ(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function _K(_,$="*"){try{let j=(Y)=>{let Q=_.parent||_.opener;if(!Q)return!1;return Q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(Q,K,B,G,V,W){try{if(Q&&B!=null&&j({filename:Q,format:K,data:B,mimeType:G,base64Encoded:Boolean(V),defaultMode:W}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let Y=N.prototype.exportFile;N.prototype.exportFile=function(Q,K,B,G,V,W){try{if(K&&j({filename:K,data:Q,mimeType:B,base64Encoded:Boolean(G),mode:V,folderId:W}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function E9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${eQ(j)}`}class A9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${aQ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let Q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class M9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=tQ(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(_K(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=h6,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await E9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await E9(_,"image/png");else this.xmlData=D9(await _.text());else if(_.status===404)this.xmlData=h6;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?D9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var p6={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!sQ(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new A9(_,$);return new M9(_,$)}};var $K=/\.mindmap\.ya?ml$/i,c6=String(Date.now());function k9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function l6(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((N,Y)=>{let Q=document.createElement("script");Q.src=_,Q.dataset.src=$,Q.onload=()=>N(),Q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(Q)})}function jK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function ZK(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Z)}class I9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",N.innerHTML=`
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
            </div>`,_.appendChild(N),N.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class C9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(k9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(jK("/static/css/mindmap.css"),await Promise.all([l6("/static/js/vendor/d3-mindmap.min.js?v="+c6),l6("/static/js/vendor/js-yaml.min.js?v="+c6)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),ZK(this.mindmapEl);let j=k9(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await l6("/static/js/vendor/mindmap-editor.js?v="+c6),this.disposed)return;let N=window.__mindmapEditor;if(!N)throw Error("__mindmapEditor not found");if(N.mount({content:$,isDark:j,onEdit:(Y)=>{this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Y)}`}}),this.pendingContent!==null)N.update(this.pendingContent),this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(N){if(console.error("[mindmap] Failed to load mindmap renderer:",N),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var i6={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!$K.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new I9(_,$);return new C9(_,$)}};var NK=/\.kanban\.md$/i,YK=String(Date.now());function P9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function QK(){let _=window;if(_.preact)return;_.preact={h:B5,render:V5,Component:N$,createContext:a3},_.preactHooks={useState:p,useEffect:g,useCallback:x,useRef:S,useMemo:I0,useReducer:z8,useContext:_2,useLayoutEffect:F8,useImperativeHandle:e3,useErrorBoundary:j2,useDebugValue:$2},_.htm={bind:()=>z}}function KK(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((N,Y)=>{let Q=document.createElement("script");Q.src=_,Q.dataset.src=$,Q.onload=()=>N(),Q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(Q)})}function qK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class T9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",N.innerHTML=`
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
        `,_.appendChild(N),N.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class y9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;themeListener=()=>{window.__kanbanEditor?.setTheme?.(P9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;qK("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=P9();try{if(QK(),await KK("/static/js/vendor/kanban-editor.js?v="+YK),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(N)=>{this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(N)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var d6={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new T9(_,$);return new y9(_,$)}};class S9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var _1=new S9;var l5="workspaceExplorerScale",GK=["compact","default","comfortable"],XK=new Set(GK),BK={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function x9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return XK.has(j)?j:$}function n6(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function WK(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function VK(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function o6(_={}){let $=WK(_),j=_.stored?x9(_.stored,$):$;return VK(j,_)}function w9(_){return BK[x9(_)]}function LK(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function r6(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function R9(_,$,j={}){let Z=j?.resolvePane;if(r6(_,Z))return!0;return LK($)}var UK=60000,u9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function zK(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return r6($,(j)=>h0.resolve(j))}function m9(_,$,j,Z=0,N=[]){if(!j&&u9(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)m9(Y,$,j,Z+1,N);return N}function f9(_,$,j){if(!_)return"";let Z=[],N=(Y)=>{if(!j&&u9(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let Q of Y.children)N(Q)};return N(_),Z.join("|")}function e6(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((K)=>[K?.path,K])):new Map,Y=!j||j.length!==Z.length,Q=Z.map((K)=>{let B=e6(N.get(K.path),K);if(B!==N.get(K.path))Y=!0;return B});return Y?{...$,children:Q}:_}function a6(_,$,j){if(!_)return _;if(_.path===$)return e6(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((Y)=>{let Q=a6(Y,$,j);if(Q!==Y)Z=!0;return Q});return Z?{..._,children:N}:_}var g9=4,s6=14,FK=8,HK=16;function h9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=h9(Z);return _.__bytes=j,j}function p9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=g9)return Z;let N=Array.isArray(_.children)?_.children:[],Y=[];for(let K of N){let B=Math.max(0,Number(K?.__bytes??K?.size??0));if(B<=0)continue;if(K.type==="dir")Y.push({kind:"dir",node:K,size:B});else Y.push({kind:"file",name:K.name,path:K.path,size:B})}Y.sort((K,B)=>B.size-K.size);let Q=Y;if(Y.length>s6){let K=Y.slice(0,s6-1),B=Y.slice(s6-1),G=B.reduce((V,W)=>V+W.size,0);K.push({kind:"other",name:`+${B.length} more`,path:`${Z.path}/[other]`,size:G}),Q=K}return Z.children=Q.map((K)=>{if(K.kind==="dir")return p9(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Z}function v9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function c9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${Y}%)`}function i5(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function _3(_,$,j,Z,N,Y){let Q=Math.PI*2-0.0001,K=Y-N>Q?N+Q:Y,B=i5(_,$,Z,N),G=i5(_,$,Z,K),V=i5(_,$,j,K),W=i5(_,$,j,N),U=K-N>Math.PI?1:0;return[`M ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var l9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function i9(_,$,j){let Z=[],N=[],Y=Math.max(0,Number($)||0),Q=(K,B,G,V)=>{let W=Array.isArray(K?.children)?K.children:[];if(!W.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let D=G-B,I=B;W.forEach((T,M)=>{let J=Math.max(0,Number(T.size)||0);if(J<=0)return;let k=J/U,C=I,n=M===W.length-1?G:I+D*k;if(I=n,n-C<0.003)return;let l=l9[V];if(l){let e=c9(C,V,j);if(Z.push({key:T.path,path:T.path,label:T.name,size:J,color:e,depth:V,startAngle:C,endAngle:n,innerRadius:l[0],outerRadius:l[1],d:_3(120,120,l[0],l[1],C,n)}),V===1)N.push({key:T.path,name:T.name,size:J,pct:Y>0?J/Y*100:0,color:e})}if(V<g9)Q(T,C,n,V+1)})};return Q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function t6(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=t6(Z,$);if(N)return N}return null}function d9(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=l9[1];if(!N)return{segments:[],legend:[]};let Y=-Math.PI/2,Q=Math.PI*3/2,K=c9(Y,1,Z),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:K,depth:1,startAngle:Y,endAngle:Q,innerRadius:N[0],outerRadius:N[1],d:_3(120,120,N[0],N[1],Y,Q)}],legend:[{key:G,name:_,size:j,pct:100,color:K}]}}function b9(_,$=!1,j=!1){if(!_)return null;let Z=h9(_),N=p9(_,0),Y=N.size||Z,{segments:Q,legend:K}=i9(N,Y,j);if(!Q.length&&Y>0){let B=d9("[files]",N.path,Y,j);Q=B.segments,K=B.legend}return{root:N,totalSize:Y,segments:Q,legend:K,truncated:$,isDarkTheme:j}}function OK({payload:_}){if(!_)return null;let[$,j]=p(null),[Z,N]=p(_?.root?.path||"."),[Y,Q]=p(()=>[_?.root?.path||"."]),[K,B]=p(!1);g(()=>{let H=_?.root?.path||".";N(H),Q([H]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Z)return;B(!0);let H=setTimeout(()=>B(!1),180);return()=>clearTimeout(H)},[Z]);let G=I0(()=>{return t6(_.root,Z)||_.root},[_?.root,Z]),V=G?.size||_.totalSize||0,{segments:W,legend:U}=I0(()=>{let H=i9(G,V,_.isDarkTheme);if(H.segments.length>0)return H;if(V<=0)return H;let R=G?.children?.length?"Total":"[files]";return d9(R,G?.path||_?.root?.path||".",V,_.isDarkTheme)},[G,V,_.isDarkTheme,_?.root?.path]),[D,I]=p(W),T=S(new Map),M=S(0);g(()=>{let H=T.current,R=new Map(W.map((K0)=>[K0.key,K0])),c=performance.now(),Q0=220,i=(K0)=>{let Y0=Math.min(1,(K0-c)/220),N0=Y0*(2-Y0),B0=W.map((W0)=>{let O0=H.get(W0.key)||{startAngle:W0.startAngle,endAngle:W0.startAngle,innerRadius:W0.innerRadius,outerRadius:W0.innerRadius},P0=(r0,y0)=>r0+(y0-r0)*N0,n0=P0(O0.startAngle,W0.startAngle),x0=P0(O0.endAngle,W0.endAngle),T0=P0(O0.innerRadius,W0.innerRadius),o0=P0(O0.outerRadius,W0.outerRadius);return{...W0,d:_3(120,120,T0,o0,n0,x0)}});if(I(B0),Y0<1)M.current=requestAnimationFrame(i)};if(M.current)cancelAnimationFrame(M.current);return M.current=requestAnimationFrame(i),T.current=R,()=>{if(M.current)cancelAnimationFrame(M.current)}},[W]);let J=D.length?D:W,k=V>0?S_(V):"0 B",C=G?.name||"",l=(C&&C!=="."?C:"Total")||"Total",e=k,j0=Y.length>1,f=(H)=>{if(!H?.path)return;let R=t6(_.root,H.path);if(!R||!Array.isArray(R.children)||R.children.length===0)return;Q((c)=>[...c,R.path]),N(R.path),j(null)},w=()=>{if(!j0)return;Q((H)=>{let R=H.slice(0,-1);return N(R[R.length-1]||_?.root?.path||"."),R}),j(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${J.length}
                data-base-size=${V}>
                ${J.map((H)=>z`
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
                        <title>${H.label} — ${S_(H.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${j0?" is-drill":""}`}
                    onClick=${w}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${l}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${e}</text>
                </g>
            </svg>
            ${U.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((H)=>z`
                        <div key=${H.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${H.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${H.name}>${H.name}</span>
                            <span class="workspace-folder-starburst-size">${S_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function JK({mediaId:_}){let[$,j]=p(null);if(g(()=>{if(!_)return;q$(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?S_($.metadata.size):"";return z`
        <a href=${y_(_)} download=${Z} class="file-attachment"
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
                ${N&&z`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function n9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onOpenVncTab:Y,onToggleTerminal:Q,terminalVisible:K=!1}){let[B,G]=p(null),[V,W]=p(new Set(["."])),[U,D]=p(null),[I,T]=p(null),[M,J]=p(""),[k,C]=p(null),[n,l]=p(null),[e,j0]=p(!0),[f,w]=p(!1),[H,R]=p(null),[c,Q0]=p(()=>G$("workspaceShowHidden",!1)),[i,K0]=p(!1),[Y0,N0]=p(null),[B0,W0]=p(null),[U0,O0]=p(null),[P0,n0]=p(!1),[x0,T0]=p(null),[o0,r0]=p(()=>v9()),[y0,b0]=p(()=>o6({stored:H_(l5),...n6()})),[s0,d0]=p(!1),F0=S(V),$1=S(""),H1=S(null),G1=S(0),v1=S(new Set),h1=S(null),N1=S(new Map),L1=S(_),Q1=S(Z),M1=S(null),s=S(null),k0=S(null),z0=S(null),C0=S(null),M0=S(null),l0=S("."),H0=S(null),g0=S({path:null,dragging:!1,startX:0,startY:0}),R0=S({path:null,dragging:!1,startX:0,startY:0}),w0=S({path:null,timer:0}),i0=S(!1),G0=S(0),p0=S(new Map),E0=S(null),v0=S(null),u0=S(null),O1=S(null),h=S(null),q0=S(null),A0=S(c),c0=S($),j1=S(j??$),p1=S(0),n1=S(U0),Z1=S(i),C1=S(Y0),W_=S(null),W1=S({x:0,y:0}),D_=S(0),V_=S(null),e1=S(U),__=S(I),b1=S(null),n_=S(k);L1.current=_,Q1.current=Z,g(()=>{F0.current=V},[V]),g(()=>{A0.current=c},[c]),g(()=>{c0.current=$},[$]),g(()=>{j1.current=j??$},[j,$]),g(()=>{n1.current=U0},[U0]),g(()=>{if(typeof window>"u")return;let F=()=>{b0(o6({stored:H_(l5),...n6()}))};F();let P=()=>F(),v=()=>F(),b=($0)=>{if(!$0||$0.key===null||$0.key===l5)F()};window.addEventListener("resize",P),window.addEventListener("focus",v),window.addEventListener("storage",b);let o=window.matchMedia?.("(pointer: coarse)"),X0=window.matchMedia?.("(hover: none)"),V0=($0,L)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",L);else if($0.addListener)$0.addListener(L)},L0=($0,L)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",L);else if($0.removeListener)$0.removeListener(L)};return V0(o,P),V0(X0,P),()=>{window.removeEventListener("resize",P),window.removeEventListener("focus",v),window.removeEventListener("storage",b),L0(o,P),L0(X0,P)}},[]),g(()=>{let F=(P)=>{let v=P?.detail?.path;if(!v)return;let b=v.split("/"),o=[];for(let X0=1;X0<b.length;X0++)o.push(b.slice(0,X0).join("/"));if(o.length)W((X0)=>{let V0=new Set(X0);V0.add(".");for(let L0 of o)V0.add(L0);return V0});D(v),requestAnimationFrame(()=>{let X0=document.querySelector(`[data-path="${CSS.escape(v)}"]`);if(X0)X0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",F),()=>window.removeEventListener("workspace-reveal-path",F)},[]),g(()=>{Z1.current=i},[i]),g(()=>{C1.current=Y0},[Y0]),g(()=>{e1.current=U},[U]),g(()=>{__.current=I},[I]),g(()=>{n_.current=k},[k]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let F=()=>r0(v9());F();let P=window.matchMedia?.("(prefers-color-scheme: dark)"),v=()=>F();if(P?.addEventListener)P.addEventListener("change",v);else if(P?.addListener)P.addListener(v);let b=typeof MutationObserver<"u"?new MutationObserver(()=>F()):null;if(b?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)b?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(P?.removeEventListener)P.removeEventListener("change",v);else if(P?.removeListener)P.removeListener(v);b?.disconnect()}},[]),g(()=>{if(!I)return;let F=C0.current;if(!F)return;let P=requestAnimationFrame(()=>{try{F.focus(),F.select()}catch{}});return()=>cancelAnimationFrame(P)},[I]),g(()=>{if(!s0)return;let F=(v)=>{let b=v?.target;if(!(b instanceof Element))return;if(h.current?.contains(b))return;if(q0.current?.contains(b))return;d0(!1)},P=(v)=>{if(v?.key==="Escape")d0(!1),q0.current?.focus?.()};return document.addEventListener("mousedown",F),document.addEventListener("touchstart",F,{passive:!0}),document.addEventListener("keydown",P),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("touchstart",F),document.removeEventListener("keydown",P)}},[s0]);let x_=async(F,P={})=>{let v=Boolean(P?.autoOpen),b=String(F||"").trim();w(!0),C(null),l(null);try{let o=await w8(b,20000);if(v&&b&&R9(b,o,{resolvePane:(X0)=>h0.resolve(X0)}))return Q1.current?.(b,o),o;return C(o),o}catch(o){let X0={error:o.message||"Failed to load preview"};return C(X0),X0}finally{w(!1)}};M1.current=x_;let Y_=async()=>{if(!c0.current)return;try{let F=await S$("",1,A0.current),P=f9(F.root,F0.current,A0.current);if(P===$1.current){j0(!1);return}if($1.current=P,H1.current=F.root,!G1.current)G1.current=requestAnimationFrame(()=>{G1.current=0,G((v)=>e6(v,H1.current)),j0(!1)})}catch(F){R(F.message||"Failed to load workspace"),j0(!1)}},N4=async(F)=>{if(!F)return;if(v1.current.has(F))return;v1.current.add(F);try{let P=await S$(F,1,A0.current);G((v)=>a6(v,F,P.root))}catch(P){R(P.message||"Failed to load workspace")}finally{v1.current.delete(F)}};s.current=N4;let T1=x(()=>{let F=U;if(!F)return".";let P=N1.current?.get(F);if(P&&P.type==="dir")return P.path;if(F==="."||!F.includes("/"))return".";let v=F.split("/");return v.pop(),v.join("/")||"."},[U]),o_=x((F)=>{let P=F?.closest?.(".workspace-row");if(!P)return null;let v=P.dataset.path,b=P.dataset.type;if(!v)return null;if(b==="dir")return v;if(v.includes("/")){let o=v.split("/");return o.pop(),o.join("/")||"."}return"."},[]),w_=x((F)=>{return o_(F?.target||null)},[o_]),u1=x((F)=>{n1.current=F,O0(F)},[]),E1=x(()=>{let F=w0.current;if(F?.timer)clearTimeout(F.timer);w0.current={path:null,timer:0}},[]),Q_=x((F)=>{if(!F||F==="."){E1();return}let P=N1.current?.get(F);if(!P||P.type!=="dir"){E1();return}if(F0.current?.has(F)){E1();return}if(w0.current?.path===F)return;E1();let v=setTimeout(()=>{w0.current={path:null,timer:0},s.current?.(F),W((b)=>{let o=new Set(b);return o.add(F),o})},600);w0.current={path:F,timer:v}},[E1]),K_=x((F,P)=>{if(W1.current={x:F,y:P},D_.current)return;D_.current=requestAnimationFrame(()=>{D_.current=0;let v=W_.current;if(!v)return;let b=W1.current;v.style.transform=`translate(${b.x+12}px, ${b.y+12}px)`})},[]),K1=x((F)=>{if(!F)return;let v=(N1.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!v)return;W0({path:F,label:v})},[]),$_=x(()=>{if(W0(null),D_.current)cancelAnimationFrame(D_.current),D_.current=0;if(W_.current)W_.current.style.transform="translate(-9999px, -9999px)"},[]),a0=x((F)=>{if(!F)return".";let P=N1.current?.get(F);if(P&&P.type==="dir")return P.path;if(F==="."||!F.includes("/"))return".";let v=F.split("/");return v.pop(),v.join("/")||"."},[]),o1=x(()=>{T(null),J("")},[]),Y4=x((F)=>{if(!F)return;let v=(N1.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!v||F===".")return;T(F),J(v)},[]),q_=x(async()=>{let F=__.current;if(!F)return;let P=(M||"").trim();if(!P){o1();return}let v=N1.current?.get(F),b=(v?.name||F.split("/").pop()||F).trim();if(P===b){o1();return}try{let X0=(await v8(F,P))?.path||F,V0=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(o1(),R(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:F,newPath:X0,type:v?.type||"file"}})),v?.type==="dir")W((L0)=>{let $0=new Set;for(let L of L0)if(L===F)$0.add(X0);else if(L.startsWith(`${F}/`))$0.add(`${X0}${L.slice(F.length)}`);else $0.add(L);return $0});if(D(X0),v?.type==="dir")C(null),w(!1),l(null);else M1.current?.(X0);s.current?.(V0)}catch(o){R(o?.message||"Failed to rename file")}},[o1,M]),f4=x(async(F)=>{let b=F||".";for(let o=0;o<50;o+=1){let V0=`untitled${o===0?"":`-${o}`}.md`;try{let $0=(await f8(b,V0,""))?.path||(b==="."?V0:`${b}/${V0}`);if(b&&b!==".")W((L)=>new Set([...L,b]));D($0),R(null),s.current?.(b),M1.current?.($0);return}catch(L0){if(L0?.status===409||L0?.code==="file_exists")continue;R(L0?.message||"Failed to create file");return}}R("Failed to create file (untitled name already in use).")},[]),R_=x((F)=>{if(F?.stopPropagation?.(),P0)return;let P=a0(e1.current);f4(P)},[P0,a0,f4]);g(()=>{if(typeof window>"u")return;let F=(P)=>{let v=P?.detail?.updates||[];if(!Array.isArray(v)||v.length===0)return;G((L0)=>{let $0=L0;for(let L of v){if(!L?.root)continue;if(!$0||L.path==="."||!L.path)$0=L.root;else $0=a6($0,L.path,L.root)}if($0)$1.current=f9($0,F0.current,A0.current);return j0(!1),$0});let b=e1.current;if(Boolean(b)&&v.some((L0)=>{let $0=L0?.path||"";if(!$0||$0===".")return!0;return b===$0||b.startsWith(`${$0}/`)||$0.startsWith(`${b}/`)}))p0.current.clear();if(!b||!n_.current)return;let X0=N1.current?.get(b);if(X0&&X0.type==="dir")return;if(v.some((L0)=>{let $0=L0?.path||"";if(!$0||$0===".")return!0;return b===$0||b.startsWith(`${$0}/`)}))M1.current?.(b)};return window.addEventListener("workspace-update",F),()=>window.removeEventListener("workspace-update",F)},[]),h1.current=Y_;let v4=S(()=>{if(typeof window>"u")return;let F=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),P=j1.current??c0.current,v=document.visibilityState!=="hidden"&&(P||F.matches&&c0.current);x$(v,A0.current).catch(()=>{})}).current,E_=S(0),b4=S(()=>{if(E_.current)clearTimeout(E_.current);E_.current=setTimeout(()=>{E_.current=0,v4()},250)}).current;g(()=>{if(c0.current)h1.current?.();b4()},[$,j]),g(()=>{h1.current(),v4();let F=setInterval(()=>h1.current(),UK),P=X$("previewHeight",null),v=Number.isFinite(P)?Math.min(Math.max(P,80),600):280;if(G0.current=v,k0.current)k0.current.style.setProperty("--preview-height",`${v}px`);let b=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),o=()=>b4();if(b.addEventListener)b.addEventListener("change",o);else if(b.addListener)b.addListener(o);return document.addEventListener("visibilitychange",o),()=>{if(clearInterval(F),G1.current)cancelAnimationFrame(G1.current),G1.current=0;if(b.removeEventListener)b.removeEventListener("change",o);else if(b.removeListener)b.removeListener(o);if(document.removeEventListener("visibilitychange",o),E_.current)clearTimeout(E_.current),E_.current=0;if(H0.current)clearTimeout(H0.current),H0.current=null;x$(!1,A0.current).catch(()=>{})}},[]);let Q4=I0(()=>m9(B,V,c),[B,V,c]),K4=I0(()=>new Map(Q4.map((F)=>[F.node.path,F.node])),[Q4]),G_=I0(()=>w9(y0),[y0]);N1.current=K4;let X1=(U?N1.current.get(U):null)?.type==="dir";g(()=>{if(!U||!X1){T0(null),E0.current=null,v0.current=null;return}let F=U,P=`${c?"hidden":"visible"}:${U}`,v=p0.current,b=v.get(P);if(b?.root){v.delete(P),v.set(P,b);let V0=b9(b.root,Boolean(b.truncated),o0);if(V0)E0.current=V0,v0.current=U,T0({loading:!1,error:null,payload:V0});return}let o=E0.current,X0=v0.current;T0({loading:!0,error:null,payload:X0===U?o:null}),S$(U,FK,c).then((V0)=>{if(e1.current!==F)return;let L0={root:V0?.root,truncated:Boolean(V0?.truncated)};v.delete(P),v.set(P,L0);while(v.size>HK){let L=v.keys().next().value;if(!L)break;v.delete(L)}let $0=b9(L0.root,L0.truncated,o0);E0.current=$0,v0.current=U,T0({loading:!1,error:null,payload:$0})}).catch((V0)=>{if(e1.current!==F)return;T0({loading:!1,error:V0?.message||"Failed to load folder size chart",payload:X0===U?o:null})})},[U,X1,c,o0]);let y1=Boolean(k&&k.kind==="text"&&!X1&&(!k.size||k.size<=262144)),f_=y1?"Open in editor":k?.size>262144?"File too large to edit":"File is not editable",j_=Boolean(U&&U!=="."),m1=Boolean(U&&!X1),S1=Boolean(U&&!X1),r1=U&&X1?F5(U,c):null,J1=x(()=>d0(!1),[]),D1=x(async(F)=>{J1();try{await F?.()}catch{}},[J1]);g(()=>{let F=u0.current;if(O1.current)O1.current.dispose(),O1.current=null;if(!F)return;if(F.innerHTML="",!U||X1||!k||k.error)return;let P={path:U,content:typeof k.text==="string"?k.text:void 0,mtime:k.mtime,size:k.size,preview:k,mode:"view"},v=h0.resolve(P)||h0.get("workspace-preview-default");if(!v)return;let b=v.mount(F,P);return O1.current=b,()=>{if(O1.current===b)b.dispose(),O1.current=null;F.innerHTML=""}},[U,X1,k]);let A_=(F)=>{let P=F?.target;if(P instanceof Element)return P;return P?.parentElement||null},q4=(F)=>{return Boolean(F?.closest?.(".workspace-node-icon, .workspace-label-text"))},u4=S((F)=>{let P=A_(F),v=P?.closest?.("[data-path]");if(!v)return;let b=v.dataset.path;if(!b||b===".")return;let o=Boolean(P?.closest?.("button"))||Boolean(P?.closest?.("a"))||Boolean(P?.closest?.("input")),X0=Boolean(P?.closest?.(".workspace-caret"));if(o||X0)return;if(__.current===b)return;Y4(b)}).current,O4=S((F)=>{if(i0.current){i0.current=!1;return}let P=A_(F),v=P?.closest?.("[data-path]");if(z0.current?.focus?.(),!v)return;let b=v.dataset.path,o=v.dataset.type,X0=Boolean(P?.closest?.(".workspace-caret")),V0=Boolean(P?.closest?.("button"))||Boolean(P?.closest?.("a"))||Boolean(P?.closest?.("input")),L0=e1.current===b,$0=__.current;if($0){if($0===b)return;o1()}let L=o==="file"&&b1.current===b&&!X0&&!V0;if(o==="dir"){if(b1.current=null,D(b),C(null),l(null),w(!1),!F0.current.has(b))s.current?.(b);if(L0&&!X0)return;W((u)=>{let d=new Set(u);if(d.has(b))d.delete(b);else d.add(b);return d})}else{b1.current=null,D(b);let y=N1.current.get(b);if(y)L1.current?.(y.path,y);if(!V0&&!X0&&zK(b))Q1.current?.(b,n_.current);else{let d=!V0&&!X0;M1.current?.(b,{autoOpen:d})}}}).current,r_=S(()=>{$1.current="",h1.current(),Array.from(F0.current||[]).filter((P)=>P&&P!==".").forEach((P)=>s.current?.(P))}).current,s_=S(()=>{b1.current=null,D(null),C(null),l(null),w(!1)}).current,m4=S(()=>{Q0((F)=>{let P=!F;if(typeof window<"u")B1("workspaceShowHidden",String(P));return A0.current=P,x$(!0,P).catch(()=>{}),$1.current="",h1.current?.(),Array.from(F0.current||[]).filter((b)=>b&&b!==".").forEach((b)=>s.current?.(b)),P})}).current,G4=S((F)=>{if(A_(F)?.closest?.("[data-path]"))return;s_()}).current,k1=x(async(F)=>{if(!F)return;let P=F.split("/").pop()||F;if(!window.confirm(`Delete "${P}"? This cannot be undone.`))return;try{await u8(F);let b=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(e1.current===F)s_();s.current?.(b),R(null)}catch(b){C((o)=>({...o||{},error:b.message||"Failed to delete file"}))}},[s_]),J4=x((F)=>{let P=z0.current;if(!P||!F||typeof CSS>"u"||typeof CSS.escape!=="function")return;P.querySelector(`[data-path="${CSS.escape(F)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),g4=x((F)=>{let P=Q4;if(!P||P.length===0)return;let v=U?P.findIndex((b)=>b.node.path===U):-1;if(F.key==="ArrowDown"){F.preventDefault();let b=Math.min(v+1,P.length-1),o=P[b];if(!o)return;if(D(o.node.path),o.node.type!=="dir")L1.current?.(o.node.path,o.node),M1.current?.(o.node.path);else C(null),w(!1),l(null);J4(o.node.path);return}if(F.key==="ArrowUp"){F.preventDefault();let b=v<=0?0:v-1,o=P[b];if(!o)return;if(D(o.node.path),o.node.type!=="dir")L1.current?.(o.node.path,o.node),M1.current?.(o.node.path);else C(null),w(!1),l(null);J4(o.node.path);return}if(F.key==="ArrowRight"&&v>=0){let b=P[v];if(b?.node?.type==="dir"&&!V.has(b.node.path))F.preventDefault(),s.current?.(b.node.path),W((o)=>new Set([...o,b.node.path]));return}if(F.key==="ArrowLeft"&&v>=0){let b=P[v];if(b?.node?.type==="dir"&&V.has(b.node.path))F.preventDefault(),W((o)=>{let X0=new Set(o);return X0.delete(b.node.path),X0});return}if(F.key==="Enter"&&v>=0){F.preventDefault();let b=P[v];if(!b)return;let o=b.node.path;if(b.node.type==="dir"){if(!F0.current.has(o))s.current?.(o);W((V0)=>{let L0=new Set(V0);if(L0.has(o))L0.delete(o);else L0.add(o);return L0}),C(null),l(null),w(!1)}else L1.current?.(o,b.node),M1.current?.(o);return}if((F.key==="Delete"||F.key==="Backspace")&&v>=0){let b=P[v];if(!b||b.node.type==="dir")return;F.preventDefault(),k1(b.node.path);return}if(F.key==="Escape")F.preventDefault(),s_()},[s_,k1,V,Q4,J4,U]),e4=x((F)=>{let P=A_(F),v=P?.closest?.(".workspace-row");if(!v)return;let b=v.dataset.type,o=v.dataset.path;if(!o||o===".")return;if(__.current===o)return;let X0=F?.touches?.[0];if(!X0)return;if(g0.current={path:q4(P)?o:null,dragging:!1,startX:X0.clientX,startY:X0.clientY},b!=="file")return;if(H0.current)clearTimeout(H0.current);H0.current=setTimeout(()=>{if(H0.current=null,g0.current?.dragging)return;k1(o)},600)},[k1]),v_=x(()=>{if(H0.current)clearTimeout(H0.current),H0.current=null;let F=g0.current;if(F?.dragging&&F.path){let P=n1.current||T1(),v=V_.current;if(typeof v==="function")v(F.path,P)}g0.current={path:null,dragging:!1,startX:0,startY:0},p1.current=0,K0(!1),N0(null),u1(null),E1(),$_()},[T1,$_,u1,E1]),D4=x((F)=>{let P=g0.current,v=F?.touches?.[0];if(!v||!P?.path){if(H0.current)clearTimeout(H0.current),H0.current=null;return}let b=Math.abs(v.clientX-P.startX),o=Math.abs(v.clientY-P.startY),X0=b>8||o>8;if(X0&&H0.current)clearTimeout(H0.current),H0.current=null;if(!P.dragging&&X0)P.dragging=!0,K0(!0),N0("move"),K1(P.path);if(P.dragging){F.preventDefault(),K_(v.clientX,v.clientY);let V0=document.elementFromPoint(v.clientX,v.clientY),L0=o_(V0)||T1();if(n1.current!==L0)u1(L0);Q_(L0)}},[o_,T1,K1,K_,u1,Q_]),E4=S((F)=>{F.preventDefault();let P=k0.current;if(!P)return;let v=F.clientY,b=G0.current||280,o=F.currentTarget;o.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let X0=v,V0=($0)=>{X0=$0.clientY;let L=P.clientHeight-80,y=Math.min(Math.max(b-($0.clientY-v),80),L);P.style.setProperty("--preview-height",`${y}px`),G0.current=y},L0=()=>{let $0=P.clientHeight-80,L=Math.min(Math.max(b-(X0-v),80),$0);G0.current=L,o.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",B1("previewHeight",String(Math.round(L))),document.removeEventListener("mousemove",V0),document.removeEventListener("mouseup",L0)};document.addEventListener("mousemove",V0),document.addEventListener("mouseup",L0)}).current,h4=S((F)=>{F.preventDefault();let P=k0.current;if(!P)return;let v=F.touches[0];if(!v)return;let b=v.clientY,o=G0.current||280,X0=F.currentTarget;X0.classList.add("dragging"),document.body.style.userSelect="none";let V0=($0)=>{let L=$0.touches[0];if(!L)return;$0.preventDefault();let y=P.clientHeight-80,u=Math.min(Math.max(o-(L.clientY-b),80),y);P.style.setProperty("--preview-height",`${u}px`),G0.current=u},L0=()=>{X0.classList.remove("dragging"),document.body.style.userSelect="",B1("previewHeight",String(Math.round(G0.current||o))),document.removeEventListener("touchmove",V0),document.removeEventListener("touchend",L0),document.removeEventListener("touchcancel",L0)};document.addEventListener("touchmove",V0,{passive:!1}),document.addEventListener("touchend",L0),document.addEventListener("touchcancel",L0)}).current,X4=async()=>{if(!U)return;try{let F=await R8(U);if(F.media_id)l(F.media_id)}catch(F){C((P)=>({...P||{},error:F.message||"Failed to attach"}))}},L_=async()=>{if(!U||X1)return;await k1(U)},Z_=(F)=>{return Array.from(F?.dataTransfer?.types||[]).includes("Files")},x1=x((F)=>{if(!Z_(F))return;if(F.preventDefault(),p1.current+=1,!Z1.current)K0(!0);N0("upload");let P=w_(F)||T1();u1(P),Q_(P)},[T1,w_,u1,Q_]),p4=x((F)=>{if(!Z_(F))return;if(F.preventDefault(),F.dataTransfer)F.dataTransfer.dropEffect="copy";if(!Z1.current)K0(!0);if(C1.current!=="upload")N0("upload");let P=w_(F)||T1();if(n1.current!==P)u1(P);Q_(P)},[T1,w_,u1,Q_]),I1=x((F)=>{if(!Z_(F))return;if(F.preventDefault(),p1.current=Math.max(0,p1.current-1),p1.current===0)K0(!1),N0(null),u1(null),E1()},[u1,E1]),b_=x(async(F,P=".")=>{let v=Array.from(F||[]);if(v.length===0)return;let b=P&&P!==""?P:".",o=b!=="."?b:"workspace root";n0(!0);try{let X0=null;for(let V0 of v)try{X0=await U5(V0,b)}catch(L0){let $0=L0?.status,L=L0?.code;if($0===409||L==="file_exists"){let y=V0?.name||"file";if(!window.confirm(`"${y}" already exists in ${o}. Overwrite?`))continue;X0=await U5(V0,b,{overwrite:!0})}else throw L0}if(X0?.path)b1.current=X0.path,D(X0.path),M1.current?.(X0.path);s.current?.(b)}catch(X0){R(X0.message||"Failed to upload file")}finally{n0(!1)}},[]),A4=x(async(F,P)=>{if(!F)return;let v=N1.current?.get(F);if(!v)return;let b=P&&P!==""?P:".",o=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(b===o)return;try{let V0=(await b8(F,b))?.path||F;if(v.type==="dir")W((L0)=>{let $0=new Set;for(let L of L0)if(L===F)$0.add(V0);else if(L.startsWith(`${F}/`))$0.add(`${V0}${L.slice(F.length)}`);else $0.add(L);return $0});if(D(V0),v.type==="dir")C(null),w(!1),l(null);else M1.current?.(V0);s.current?.(o),s.current?.(b)}catch(X0){R(X0?.message||"Failed to move entry")}},[]);V_.current=A4;let M4=x(async(F)=>{if(!Z_(F))return;F.preventDefault(),p1.current=0,K0(!1),N0(null),O0(null),E1();let P=Array.from(F?.dataTransfer?.files||[]);if(P.length===0)return;let v=n1.current||w_(F)||T1();await b_(P,v)},[T1,w_,b_]),B4=x((F)=>{if(F?.stopPropagation?.(),P0)return;let P=F?.currentTarget?.dataset?.uploadTarget||".";l0.current=P,M0.current?.click()},[P0]),w1=x(()=>{if(P0)return;let F=e1.current,P=F?N1.current?.get(F):null;l0.current=P?.type==="dir"?P.path:".",M0.current?.click()},[P0]),a_=x(()=>{D1(()=>R_(null))},[D1,R_]),u_=x(()=>{D1(()=>w1())},[D1,w1]),c4=x(()=>{D1(()=>r_())},[D1,r_]),t_=x(()=>{D1(()=>m4())},[D1,m4]),k4=x(()=>{if(!U||!y1)return;D1(()=>Q1.current?.(U,k))},[D1,U,y1,k]),l4=x(()=>{if(!U||U===".")return;D1(()=>Y4(U))},[D1,U,Y4]),M_=x(()=>{if(!U||X1)return;D1(()=>L_())},[D1,U,X1,L_]),U_=x(()=>{if(!U||X1)return;D1(()=>X4())},[D1,U,X1,X4]),k_=x(()=>{if(!r1)return;if(J1(),typeof window<"u")window.open(r1,"_blank","noopener")},[J1,r1]),i4=x(()=>{J1(),N?.()},[J1,N]),I_=x(()=>{J1(),Y?.()},[J1,Y]),I4=x(()=>{J1(),Q?.()},[J1,Q]),e_=x((F)=>{if(!F||F.button!==0)return;let P=F.currentTarget;if(!P||!P.dataset)return;let v=P.dataset.path;if(!v||v===".")return;if(__.current===v)return;let b=A_(F);if(b?.closest?.("button, a, input, .workspace-caret"))return;if(!q4(b))return;F.preventDefault(),R0.current={path:v,dragging:!1,startX:F.clientX,startY:F.clientY};let o=(V0)=>{let L0=R0.current;if(!L0?.path)return;let $0=Math.abs(V0.clientX-L0.startX),L=Math.abs(V0.clientY-L0.startY),y=$0>4||L>4;if(!L0.dragging&&y)L0.dragging=!0,i0.current=!0,K0(!0),N0("move"),K1(L0.path),K_(V0.clientX,V0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(L0.dragging){V0.preventDefault(),K_(V0.clientX,V0.clientY);let u=document.elementFromPoint(V0.clientX,V0.clientY),d=o_(u)||T1();if(n1.current!==d)u1(d);Q_(d)}},X0=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",X0);let V0=R0.current;if(V0?.dragging&&V0.path){let L0=n1.current||T1(),$0=V_.current;if(typeof $0==="function")$0(V0.path,L0)}R0.current={path:null,dragging:!1,startX:0,startY:0},p1.current=0,K0(!1),N0(null),u1(null),E1(),$_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{i0.current=!1},0)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",X0)},[o_,T1,K1,K_,$_,u1,Q_,E1]),m_=x(async(F)=>{let P=Array.from(F?.target?.files||[]);if(P.length===0)return;let v=l0.current||".";if(await b_(P,v),l0.current=".",F?.target)F.target.value=""},[b_]);return z`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${y0}
            ref=${k0}
            onDragEnter=${x1}
            onDragOver=${p4}
            onDragLeave=${I1}
            onDrop=${M4}
        >
            <input type="file" multiple style="display:none" ref=${M0} onChange=${m_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${q0}
                            class=${`workspace-menu-button${s0?" active":""}`}
                            onClick=${(F)=>{F.stopPropagation(),d0((P)=>!P)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${s0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${s0&&z`
                            <div class="workspace-menu-dropdown" ref=${h} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${a_} disabled=${P0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${u_} disabled=${P0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${c4}>Refresh tree</button>
                                <button class=${`workspace-menu-item${c?" active":""}`} role="menuitem" onClick=${t_}>
                                    ${c?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&z`<div class="workspace-menu-separator"></div>`}
                                ${U&&!X1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k4} disabled=${!y1}>Open in editor</button>
                                `}
                                ${j_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l4}>Rename selected</button>
                                `}
                                ${S1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${U_}>Download selected file</button>
                                `}
                                ${r1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k_}>Download selected folder (zip)</button>
                                `}
                                ${m1&&z`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${M_}>Delete selected file</button>
                                `}

                                ${(N||Y||Q)&&z`<div class="workspace-menu-separator"></div>`}
                                ${N&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${i4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Q&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I4}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${R_} title="New file" disabled=${P0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${r_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${G4}>
                ${P0&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${e&&z`<div class="workspace-loading">Loading…</div>`}
                ${H&&z`<div class="workspace-error">${H}</div>`}
                ${B&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${z0}
                        tabIndex="0"
                        onClick=${O4}
                        onDblClick=${u4}
                        onKeyDown=${g4}
                        onTouchStart=${e4}
                        onTouchEnd=${v_}
                        onTouchMove=${D4}
                        onTouchCancel=${v_}
                    >
                        ${Q4.map(({node:F,depth:P})=>{let v=F.type==="dir",b=F.path===U,o=F.path===I,X0=v&&V.has(F.path),V0=U0&&F.path===U0,L0=Array.isArray(F.children)&&F.children.length>0?F.children.length:Number(F.child_count)||0;return z`
                                <div
                                    key=${F.path}
                                    class=${`workspace-row${b?" selected":""}${V0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+P*G_.indentPx}px`}}
                                    data-path=${F.path}
                                    data-type=${F.type}
                                    onMouseDown=${e_}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${v?X0?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${v?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${v?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${o?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${C0}
                                                value=${M}
                                                onInput=${($0)=>J($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),q_();else if($0.key==="Escape")$0.preventDefault(),o1()}}
                                                onBlur=${o1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${F.name}</span></span>`}
                                    ${v&&!X0&&L0>0&&z`
                                        <span class="workspace-count">${L0}</span>
                                    `}
                                    ${v&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${F.path}
                                            title="Upload files to this folder"
                                            onClick=${B4}
                                            disabled=${P0}
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
            ${U&&z`
                <div class="workspace-preview-splitter-h" onMouseDown=${E4} onTouchStart=${h4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${R_} title="New file" disabled=${P0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!X1&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>y1&&Q1.current?.(U,k)}
                                    title=${f_}
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
                                    onClick=${L_}
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
                            ${X1?z`
                                    <button class="workspace-download" onClick=${w1}
                                        title="Upload files to this folder" disabled=${P0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${F5(U,c)}
                                        title="Download folder as zip" onClick=${(F)=>F.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${X4} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${f&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${k?.error&&z`<div class="workspace-error">${k.error}</div>`}
                    ${X1&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${x0?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${x0?.error&&z`<div class="workspace-error">${x0.error}</div>`}
                        ${x0?.payload&&x0.payload.segments?.length>0&&z`
                            <${OK} payload=${x0.payload} />
                        `}
                        ${x0?.payload&&(!x0.payload.segments||x0.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${k&&!k.error&&!X1&&z`
                        <div class="workspace-preview-body" ref=${u0}></div>
                    `}
                    ${n&&z`
                        <div class="workspace-download-card">
                            <${JK} mediaId=${n} />
                        </div>
                    `}
                </div>
            `}
            ${B0&&z`
                <div class="workspace-drag-ghost" ref=${W_}>${B0.label}</div>
            `}
        </aside>
    `}var DK=new Set(["kanban-editor","mindmap-editor"]);function EK(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function o9(_,$,j){let Z=EK(_,$,j);return DK.has(Z)}var AK=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,MK=/\.(csv|tsv)$/i,kK=/\.pdf$/i,IK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,r9=/\.drawio(\.xml|\.svg|\.png)?$/i;function s9({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:Y,onTogglePin:Q,onTogglePreview:K,onEditSource:B,previewTabs:G,paneOverrides:V,onToggleDock:W,dockVisible:U,onToggleZen:D,zenMode:I,onPopOutTab:T}){let[M,J]=p(null),k=S(null);g(()=>{if(!M)return;let H=(R)=>{if(R.type==="keydown"&&R.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[M]),g(()=>{let H=(R)=>{if(R.ctrlKey&&R.key==="Tab"){if(R.preventDefault(),!_.length)return;let c=_.findIndex((Q0)=>Q0.id===$);if(R.shiftKey){let Q0=_[(c-1+_.length)%_.length];j?.(Q0.id)}else{let Q0=_[(c+1)%_.length];j?.(Q0.id)}return}if((R.ctrlKey||R.metaKey)&&R.key==="w"){let c=document.querySelector(".editor-pane");if(c&&c.contains(document.activeElement)){if(R.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let C=x((H,R)=>{if(H.button===1){H.preventDefault(),Z?.(R);return}if(H.button===0)j?.(R)},[j,Z]),n=x((H,R)=>{H.preventDefault(),J({id:R,x:H.clientX,y:H.clientY})},[]),l=x((H)=>{H.preventDefault(),H.stopPropagation()},[]),e=x((H,R)=>{H.preventDefault(),H.stopPropagation(),Z?.(R)},[Z]);g(()=>{if(!$||!k.current)return;let H=k.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let j0=x((H)=>{if(!(V instanceof Map))return null;return V.get(H)||null},[V]),f=I0(()=>_.find((H)=>H.id===M?.id)||null,[M?.id,_]),w=I0(()=>{let H=M?.id;if(!H)return!1;return o9(H,j0(H),(R)=>h0.resolve(R))},[M?.id,j0]);if(!_.length)return null;return z`
        <div class="tab-strip" ref=${k} role="tablist">
            ${_.map((H)=>z`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(R)=>C(R,H.id)}
                    onContextMenu=${(R)=>n(R,H.id)}
                >
                    ${H.pinned&&z`
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
                        onMouseDown=${l}
                        onClick=${(R)=>e(R,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${W&&z`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${W}
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
            ${D&&z`
                <button
                    class=${`tab-strip-zen-toggle${I?" active":""}`}
                    onClick=${D}
                    title=${`${I?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${I?"Exit":"Enter"} zen mode`}
                    aria-pressed=${I?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${I?z`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:z`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${M&&z`
            <div class="tab-context-menu" style=${{left:M.x+"px",top:M.y+"px"}}>
                <button onClick=${()=>{Z?.(M.id),J(null)}}>Close</button>
                <button onClick=${()=>{N?.(M.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Q?.(M.id),J(null)}}>
                    ${f?.pinned?"Unpin":"Pin"}
                </button>
                ${w&&B&&z`
                    <button onClick=${()=>{B(M.id),J(null)}}>Edit Source</button>
                `}
                ${T&&z`
                    <button onClick=${()=>{let H=_.find((R)=>R.id===M.id);T(M.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(M.id)&&z`
                    <hr />
                    <button onClick=${()=>{K(M.id),J(null)}}>
                        ${G?.has(M.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${AK.test(M.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(M.id),R=M.id.split("/").pop()||"document",c="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(R);window.open(c,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${MK.test(M.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(M.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${kK.test(M.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(M.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${IK.test(M.id)&&!r9.test(M.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(M.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${r9.test(M.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(M.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var CK=400,$3=60,a9=220,j3="mdPreviewHeight";function PK(){try{let _=localStorage.getItem(j3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=$3?$:a9}catch{return a9}}function Z3({getContent:_,path:$,onClose:j}){let[Z,N]=p(""),[Y,Q]=p(PK),K=S(null),B=S(null),G=S(""),V=S(_);return V.current=_,g(()=>{let D=()=>{let T=V.current?.()||"";if(T===G.current)return;G.current=T;try{let M=O_(T,null,{sanitize:!1});N(M)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};D();let I=setInterval(D,CK);return()=>clearInterval(I)},[]),g(()=>{if(K.current&&Z)L4(K.current).catch(()=>{})},[Z]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(D)=>{D.preventDefault();let I=D.clientY,T=B.current?.offsetHeight||Y,M=B.current?.parentElement,J=M?M.offsetHeight*0.7:500,k=D.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let C=(l)=>{let e=Math.min(Math.max(T-(l.clientY-I),$3),J);Q(e)},n=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(j3,String(Math.round(B.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",n)}}
            onTouchStart=${(D)=>{D.preventDefault();let I=D.touches[0];if(!I)return;let T=I.clientY,M=B.current?.offsetHeight||Y,J=B.current?.parentElement,k=J?J.offsetHeight*0.7:500,C=D.currentTarget;C.classList.add("dragging"),document.body.style.userSelect="none";let n=(e)=>{let j0=e.touches[0];if(!j0)return;e.preventDefault();let f=Math.min(Math.max(M-(j0.clientY-T),$3),k);Q(f)},l=()=>{C.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(j3,String(Math.round(B.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",n),document.removeEventListener("touchend",l),document.removeEventListener("touchcancel",l)};document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l)}}
        ></div>
        <div class="md-preview-panel" ref=${B} style=${{height:Y+"px"}}>
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
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function t9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let Y=S(_);Y.current=_;let Q=S($);Q.current=$;let K=S(j);K.current=j;let B=S(Z);B.current=Z,g(()=>{K.current();let G=new H5((W,U)=>Y.current(W,U),(W)=>Q.current(W),{chatJid:N});G.connect();let V=()=>{G.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")B.current?.()};return window.addEventListener("focus",V),document.addEventListener("visibilitychange",V),()=>{window.removeEventListener("focus",V),document.removeEventListener("visibilitychange",V),G.disconnect()}},[N])}function e9(){let[_,$]=p(!1),[j,Z]=p("default"),N=S(!1);g(()=>{let B=G$("notificationsEnabled",!1);if(N.current=B,$(B),typeof Notification<"u")Z(Notification.permission)},[]),g(()=>{N.current=_},[_]);let Y=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch{return Promise.resolve("default")}},[]),Q=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Z(G||"default"),G!=="granted"){N.current=!1,$(!1),B1("notificationsEnabled","false");return}}let B=!N.current;N.current=B,$(B),B1("notificationsEnabled",String(B))},[Y]),K=x((B,G)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let V=new Notification(B,{body:G});return V.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Q,notify:K}}var s$=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function _j({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=p(null),[Y,Q]=p(!1),K=S(!1),B=S(null),G=S(!1),V=S(null),W=S(null),U=S(0);g(()=>{K.current=Y},[Y]),g(()=>{W.current=Z},[Z]),g(()=>{U.current+=1,V.current=null,G.current=!1,K.current=!1,Q(!1)},[j]);let D=x(async(M=null)=>{let J=U.current;try{if(M){let k=await O8(M,50,0,j);if(J!==U.current)return;N(k.posts),Q(!1)}else{let k=await d4(10,null,j);if(J!==U.current)return;N(k.posts),Q(k.has_more)}}catch(k){if(J!==U.current)return;console.error("Failed to load posts:",k)}},[j]),I=x(async()=>{let M=U.current;try{let J=await d4(10,null,j);if(M!==U.current)return;N((k)=>{if(!k||k.length===0)return J.posts;return s$([...J.posts,...k])}),Q((k)=>k||J.has_more)}catch(J){if(M!==U.current)return;console.error("Failed to refresh timeline:",J)}},[j]),T=x(async(M={})=>{let J=U.current,k=W.current;if(!k||k.length===0)return;if(G.current)return;let{preserveScroll:C=!0,preserveMode:n="top",allowRepeat:l=!1}=M,e=(w)=>{if(!C){w();return}if(n==="top")$(w);else _(w)},f=k.slice().sort((w,H)=>w.id-H.id)[0]?.id;if(!Number.isFinite(f))return;if(!l&&V.current===f)return;G.current=!0,V.current=f;try{let w=await d4(10,f,j);if(J!==U.current)return;if(w.posts.length>0)e(()=>{N((H)=>s$([...w.posts,...H||[]])),Q(w.has_more)});else Q(!1)}catch(w){if(J!==U.current)return;console.error("Failed to load more posts:",w)}finally{if(J===U.current)G.current=!1}},[j,_,$]);return g(()=>{B.current=T},[T]),{posts:Z,setPosts:N,hasMore:Y,setHasMore:Q,hasMoreRef:K,loadPosts:D,refreshTimeline:I,loadMore:T,loadMoreRef:B,loadingMoreRef:G,lastBeforeIdRef:V}}function $j(){let[_,$]=p(null),[j,Z]=p({text:"",totalLines:0}),[N,Y]=p(""),[Q,K]=p({text:"",totalLines:0}),[B,G]=p(null),[V,W]=p(null),[U,D]=p(null),I=S(null),T=S(0),M=S(!1),J=S(""),k=S(""),C=S(null),n=S(null),l=S(null),e=S(null),j0=S(!1),f=S(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:Y,agentThought:Q,setAgentThought:K,pendingRequest:B,setPendingRequest:G,currentTurnId:V,setCurrentTurnId:W,steerQueuedTurnId:U,setSteerQueuedTurnId:D,lastAgentEventRef:I,lastSilenceNoticeRef:T,isAgentRunningRef:M,draftBufferRef:J,thoughtBufferRef:k,pendingRequestRef:C,stalledPostIdRef:n,currentTurnIdRef:l,steerQueuedTurnIdRef:e,thoughtExpandedRef:j0,draftExpandedRef:f}}function jj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let U=V.clientX,D=$.current||280,I=V.currentTarget;I.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=U,M=(k)=>{T=k.clientX;let C=Math.min(Math.max(D+(k.clientX-U),160),600);W.style.setProperty("--sidebar-width",`${C}px`),$.current=C},J=()=>{let k=Math.min(Math.max(D+(T-U),160),600);$.current=k,I.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",B1("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",J)}).current,Y=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let U=V.touches[0];if(!U)return;let D=U.clientX,I=$.current||280,T=V.currentTarget;T.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let M=(k)=>{let C=k.touches[0];if(!C)return;k.preventDefault();let n=Math.min(Math.max(I+(C.clientX-D),160),600);W.style.setProperty("--sidebar-width",`${n}px`),$.current=n},J=()=>{T.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",B1("sidebarWidth",String(Math.round($.current||I))),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,Q=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let U=V.clientX,D=j.current||$.current||280,I=V.currentTarget;I.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=U,M=(k)=>{T=k.clientX;let C=Math.min(Math.max(D+(k.clientX-U),200),800);W.style.setProperty("--editor-width",`${C}px`),j.current=C},J=()=>{let k=Math.min(Math.max(D+(T-U),200),800);j.current=k,I.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",B1("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",J)}).current,K=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let U=V.touches[0];if(!U)return;let D=U.clientX,I=j.current||$.current||280,T=V.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let M=(k)=>{let C=k.touches[0];if(!C)return;k.preventDefault();let n=Math.min(Math.max(I+(C.clientX-D),200),800);W.style.setProperty("--editor-width",`${n}px`),j.current=n},J=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",B1("editorWidth",String(Math.round(j.current||I))),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,B=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let U=V.clientY,D=Z?.current||200,I=V.currentTarget;I.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let T=U,M=(k)=>{T=k.clientY;let C=Math.min(Math.max(D-(k.clientY-U),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let k=Math.min(Math.max(D-(T-U),100),window.innerHeight*0.5);if(Z)Z.current=k;I.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",B1("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",J)}).current,G=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let U=V.touches[0];if(!U)return;let D=U.clientY,I=Z?.current||200,T=V.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let M=(k)=>{let C=k.touches[0];if(!C)return;k.preventDefault();let n=Math.min(Math.max(I-(C.clientY-D),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${n}px`),Z)Z.current=n;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",B1("dockHeight",String(Math.round(Z?.current||I))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:Q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:B,handleDockSplitterTouchStart:G}}function TK(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let N=!1,Y=new Map;for(let[Q,K]of _.entries()){let B=Q;if(Z==="dir"){if(Q===$)B=j,N=!0;else if(Q.startsWith(`${$}/`))B=`${j}${Q.slice($.length)}`,N=!0}else if(Q===$)B=j,N=!0;Y.set(B,K)}return N?Y:_}function Zj({onTabClosed:_}={}){let $=S(_);$.current=_;let[j,Z]=p(()=>_1.getTabs()),[N,Y]=p(()=>_1.getActiveId()),[Q,K]=p(()=>_1.getTabs().length>0);g(()=>{return _1.onChange((f,w)=>{Z(f),Y(w),K(f.length>0)})},[]);let[B,G]=p(()=>new Set),[V,W]=p(()=>new Map),U=x((f)=>{G((w)=>{let H=new Set(w);if(H.has(f))H.delete(f);else H.add(f);return H})},[]),D=x((f)=>{G((w)=>{if(!w.has(f))return w;let H=new Set(w);return H.delete(f),H})},[]),I=x((f)=>{W((w)=>{if(!w.has(f))return w;let H=new Map(w);return H.delete(f),H})},[]),T=x((f,w={})=>{if(!f)return;let H=typeof w?.paneOverrideId==="string"&&w.paneOverrideId.trim()?w.paneOverrideId.trim():null,R={path:f,mode:"edit"};try{if(!(H?h0.get(H):h0.resolve(R))){if(!h0.get("editor")){console.warn(`[openEditor] No pane handler for: ${f}`);return}}}catch(Q0){console.warn(`[openEditor] paneRegistry.resolve() error for "${f}":`,Q0)}let c=typeof w?.label==="string"&&w.label.trim()?w.label.trim():void 0;if(_1.open(f,c),H)W((Q0)=>{if(Q0.get(f)===H)return Q0;let i=new Map(Q0);return i.set(f,H),i})},[]),M=x(()=>{let f=_1.getActiveId();if(f){let w=_1.get(f);if(w?.dirty){if(!window.confirm(`"${w.label}" has unsaved changes. Close anyway?`))return}_1.close(f),D(f),I(f),$.current?.(f)}},[I,D]),J=x((f)=>{let w=_1.get(f);if(w?.dirty){if(!window.confirm(`"${w.label}" has unsaved changes. Close anyway?`))return}_1.close(f),D(f),I(f),$.current?.(f)},[I,D]),k=x((f)=>{_1.activate(f)},[]),C=x((f)=>{let w=_1.getTabs().filter((c)=>c.id!==f&&!c.pinned),H=w.filter((c)=>c.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let R=w.map((c)=>c.id);_1.closeOthers(f),R.forEach((c)=>{D(c),I(c),$.current?.(c)})},[I,D]),n=x(()=>{let f=_1.getTabs().filter((R)=>!R.pinned),w=f.filter((R)=>R.dirty).length;if(w>0){if(!window.confirm(`${w} unsaved tab${w>1?"s":""} will be closed. Continue?`))return}let H=f.map((R)=>R.id);_1.closeAll(),H.forEach((R)=>{D(R),I(R),$.current?.(R)})},[I,D]),l=x((f)=>{_1.togglePin(f)},[]),e=x((f)=>{if(!f)return;W((w)=>{if(w.get(f)==="editor")return w;let H=new Map(w);return H.set(f,"editor"),H}),_1.activate(f)},[]),j0=x(()=>{let f=_1.getActiveId();if(f)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:f}}))},[]);return g(()=>{let f=(w)=>{let{oldPath:H,newPath:R,type:c}=w.detail||{};if(!H||!R)return;if(c==="dir"){for(let Q0 of _1.getTabs())if(Q0.path===H||Q0.path.startsWith(`${H}/`)){let i=`${R}${Q0.path.slice(H.length)}`;_1.rename(Q0.id,i)}}else _1.rename(H,R);W((Q0)=>TK(Q0,H,R,c))};return window.addEventListener("workspace-file-renamed",f),()=>window.removeEventListener("workspace-file-renamed",f)},[]),g(()=>{let f=(w)=>{if(_1.hasUnsaved())w.preventDefault(),w.returnValue=""};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[]),{editorOpen:Q,tabStripTabs:j,tabStripActiveId:N,previewTabs:B,tabPaneOverrides:V,openEditor:T,closeEditor:M,handleTabClose:J,handleTabActivate:k,handleTabCloseOthers:C,handleTabCloseAll:n,handleTabTogglePin:l,handleTabTogglePreview:U,handleTabEditSource:e,revealInExplorer:j0}}function N3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],Y=Number(N);return Number.isFinite(Y)?Y:$}catch{return $}}var Y3=N3("warning",30000),Nj=N3("finalize",120000),Q3=N3("refresh",30000),Yj=30000;function Qj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Kj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function qj(_=30000){let[,$]=p(0);g(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function K3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function Gj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function q3(_){return String(_||"").trim()||"web:default"}function Xj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Bj(_={}){return z4(_)&&v5(_)}function yK(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function SK(_={},$={}){if(!Bj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=yK({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function Wj(_={}){if(!Bj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let W of N)$.clearTimeout?.(W);N.clear()},Q=()=>{Z=0,SK({window:$,document:j})},K=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Q)??0},B=()=>{K();for(let W of[80,220,420]){let U=$.setTimeout?.(()=>{N.delete(U),K()},W);if(U!=null)N.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;B()},V=$.visualViewport;return B(),$.addEventListener("focus",B),$.addEventListener("pageshow",B),$.addEventListener("resize",B),$.addEventListener("orientationchange",B),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",B,!0),V?.addEventListener?.("resize",B),V?.addEventListener?.("scroll",B),()=>{Y(),$.removeEventListener("focus",B),$.removeEventListener("pageshow",B),$.removeEventListener("resize",B),$.removeEventListener("orientationchange",B),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",B,!0),V?.removeEventListener?.("resize",B),V?.removeEventListener?.("scroll",B)}}function xK(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function B_(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:xK($,j)}var wK=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Vj(_){return wK.has(String(_||"").trim())}function RK(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function G3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(RK(_),{detail:Z})),!0}var fK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Lj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(z4({window:j,navigator:Z}))};N();let Q=fK.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",N),()=>K.removeEventListener("change",N);if(typeof K.addListener==="function")return K.addListener(N),()=>K.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let K of Q)K();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function Uj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var W3="piclaw_btw_session",vK=900,bK="__piclawRenameBranchFormLock__",X3=()=>{if(typeof window>"u")return null;let _=window,$=bK,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function uK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function mK(){let _=H_(W3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,Q=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:Q==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:Q}}catch{return null}}var zj=J8,Fj=E8,gK=M8,Hj=T8,Oj=y8,B3=k8,d5=B_(N_,"getAgentContext",null),hK=B_(N_,"getAutoresearchStatus",null),pK=B_(N_,"stopAutoresearch",{status:"ok"}),Jj=B_(N_,"getAgentModels",{current:null,models:[]}),Dj=B_(N_,"getActiveChatAgents",{chats:[]}),n5=B_(N_,"getChatBranches",{chats:[]}),cK=B_(N_,"renameChatBranch",null),lK=B_(N_,"pruneChatBranch",null),Ej=B_(N_,"restoreChatBranch",null),Aj=B_(N_,"getAgentQueueState",{count:0}),iK=B_(N_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),dK=B_(N_,"removeAgentQueueItem",{removed:!1}),nK=B_(N_,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});h0.register(K6);h0.register(R6);h0.register(w6);h0.register(f6);h0.register(v6);h0.register(b6);h0.register(m6);h0.register(g6);h0.register(p6);h0.register(i6);h0.register(d6);h0.register(S6);q6();h0.register(B6);h0.register(W6);function oK({locationParams:_,navigate:$}){let j=I0(()=>{let q=_.get("chat_jid");return q&&q.trim()?q.trim():"web:default"},[_]),Z=I0(()=>{let q=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),N=I0(()=>{let q=(_.get("pane_popout")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),Y=I0(()=>{let q=_.get("pane_path");return q&&q.trim()?q.trim():""},[_]),Q=I0(()=>{let q=_.get("pane_label");return q&&q.trim()?q.trim():""},[_]),K=I0(()=>{let q=(_.get("branch_loader")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),B=I0(()=>{let q=_.get("branch_source_chat_jid");return q&&q.trim()?q.trim():j},[j,_]),[G,V]=p("disconnected"),[W,U]=p(()=>z4()),[D,I]=p(null),[T,M]=p(null),[J,k]=p(!1),[C,n]=p("current"),[l,e]=p([]),[j0,f]=p([]),[w,H]=p(null),{agentStatus:R,setAgentStatus:c,agentDraft:Q0,setAgentDraft:i,agentPlan:K0,setAgentPlan:Y0,agentThought:N0,setAgentThought:B0,pendingRequest:W0,setPendingRequest:U0,currentTurnId:O0,setCurrentTurnId:P0,steerQueuedTurnId:n0,setSteerQueuedTurnId:x0,lastAgentEventRef:T0,lastSilenceNoticeRef:o0,isAgentRunningRef:r0,draftBufferRef:y0,thoughtBufferRef:b0,pendingRequestRef:s0,stalledPostIdRef:d0,currentTurnIdRef:F0,steerQueuedTurnIdRef:$1,thoughtExpandedRef:H1,draftExpandedRef:G1}=$j(),[v1,h1]=p({}),[N1,L1]=p(null),[Q1,M1]=p(null),[s,k0]=p(!1),[z0,C0]=p(null),[M0,l0]=p([]),[H0,g0]=p([]),[R0,w0]=p(null),[i0,G0]=p(()=>new Map),[p0,E0]=p(()=>new Set),[v0,u0]=p([]),[O1,h]=p(!1),[q0,A0]=p(()=>mK()),[c0,j1]=p(null),p1=S(new Set),n1=I0(()=>M0.find((q)=>q?.chat_jid===j)||null,[M0,j]),Z1=I0(()=>H0.find((q)=>q?.chat_jid===j)||n1||null,[n1,H0,j]),C1=Z1?.root_chat_jid||n1?.root_chat_jid||j,W_=uK(C),[W1,D_]=p(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),V_=v0.length,e1=S(new Set),__=S([]),b1=S(new Set),n_=S(0),x_=S({inFlight:!1,lastAttemptAt:0,turnId:null});e1.current=new Set(v0.map((q)=>q.row_id)),__.current=v0;let{notificationsEnabled:Y_,notificationPermission:N4,toggleNotifications:T1,notify:o_}=e9(),[w_,u1]=p(()=>new Set),[E1,Q_]=p(()=>G$("workspaceOpen",!0)),K_=S(null),{editorOpen:K1,tabStripTabs:$_,tabStripActiveId:a0,previewTabs:o1,tabPaneOverrides:Y4,openEditor:q_,closeEditor:f4,handleTabClose:R_,handleTabActivate:v4,handleTabCloseOthers:E_,handleTabCloseAll:b4,handleTabTogglePin:Q4,handleTabTogglePreview:K4,handleTabEditSource:G_,revealInExplorer:o5}=Zj({onTabClosed:(q)=>K_.current?.(q)}),X1=S(null),y1=S(null),f_=S(null),j_=S(null),m1=h0.getDockPanes().length>0,[S1,r1]=p(!1),J1=x(()=>r1((q)=>!q),[]),D1=x(()=>{q_(h$,{label:"Terminal"})},[q_]),A_=x(()=>{q_(Z4,{label:"VNC"})},[q_]),q4=I0(()=>$_.find((q)=>q.id===a0)||$_[0]||null,[a0,$_]),u4=I0(()=>a0?Y4.get(a0)||null:null,[Y4,a0]),O4=I0(()=>Q||q4?.label||Y||"Pane",[q4?.label,Q,Y]),r_=I0(()=>$_.length>1||Boolean(a0&&o1.has(a0)),[o1,a0,$_.length]),s_=I0(()=>Y===Z4||Y.startsWith(`${Z4}/`),[Y]),m4=I0(()=>Y===h$&&!r_||s_,[s_,r_,Y]),G4=N||!Z&&(K1||m1&&S1),[k1,J4]=p(!1),g4=S(!1),e4=x(()=>{if(!K1||Z)return;if(g4.current=S1,S1)r1(!1);J4(!0)},[K1,Z,S1]),v_=x(()=>{if(!k1)return;if(J4(!1),g4.current)r1(!0),g4.current=!1},[k1]),D4=x(()=>{if(k1)v_();else e4()},[k1,e4,v_]);g(()=>{if(k1&&!K1)v_()},[k1,K1,v_]),g(()=>{if(!N||!Y)return;if(_1.getActiveId()===Y)return;q_(Y,Q?{label:Q}:void 0)},[q_,Q,N,Y]),g(()=>{let q=X1.current;if(!q)return;if(y1.current)y1.current.dispose(),y1.current=null;let X=a0;if(!X)return;let O={path:X,mode:"edit"},A=(u4?h0.get(u4):null)||h0.resolve(O)||h0.get("editor");if(!A){q.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let E=A.mount(q,O);y1.current=E,E.onDirtyChange?.((a)=>{_1.setDirty(X,a)}),E.onSaveRequest?.(()=>{}),E.onClose?.(()=>{f4()});let m=_1.getViewState(X);if(m&&typeof E.restoreViewState==="function")requestAnimationFrame(()=>E.restoreViewState(m));if(typeof E.onViewStateChange==="function")E.onViewStateChange((a)=>{_1.saveViewState(X,a)});return requestAnimationFrame(()=>E.focus()),()=>{if(y1.current===E)E.dispose(),y1.current=null}},[a0,u4,f4]),g(()=>{let q=f_.current;if(j_.current)j_.current.dispose(),j_.current=null;if(!q||!m1||!S1)return;let X=h0.getDockPanes()[0];if(!X){q.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=X.mount(q,{mode:"view"});return j_.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(j_.current===O)O.dispose(),j_.current=null}},[m1,S1]);let[E4,h4]=p({name:"You",avatar_url:null,avatar_background:null}),X4=S(!1),L_=S(!1),Z_=S(null),x1=S(j),p4=S(new Map),I1=S(j),b_=S(0),A4=S(0),M4=S({}),B4=S({name:null,avatar_url:null}),w1=S({currentHashtag:null,searchQuery:null,searchOpen:!1}),a_=S(null),u_=S(null),c4=S(0),t_=S(0),k4=S(0),l4=S(null),M_=S(null),U_=S(null),k_=S(null),i4=S(0),I_=S({title:null,avatarBase:null}),I4=S(null),e_=S(!1),[m_,F]=p(!1),P=S(0),[v,b]=p(!1),[o,X0]=p(""),V0=I0(()=>i8(o,Z1?.agent_name||""),[Z1?.agent_name,o]),L0=S(null),$0=x(()=>{if(I4.current)clearTimeout(I4.current),I4.current=null;H(null)},[]);qj(30000),g(()=>{if(!v)return;requestAnimationFrame(()=>{if(v)L0.current?.focus(),L0.current?.select?.()})},[v]),g(()=>{return A2()},[]),g(()=>{return Lj(U)},[]),g(()=>{B1("workspaceOpen",String(E1))},[E1]),g(()=>{return Wj()},[]),g(()=>{return()=>{$0()}},[$0]),g(()=>{if(!q0){B1(W3,"");return}B1(W3,JSON.stringify({question:q0.question||"",answer:q0.answer||"",thinking:q0.thinking||"",error:q0.error||null,status:q0.status||"success"}))},[q0]),g(()=>{M4.current=v1||{}},[v1]),g(()=>{x1.current=j},[j]),g(()=>{B4.current=E4||{name:"You",avatar_url:null,avatar_background:null}},[E4]);let L=x((q,X,O=null)=>{if(typeof document>"u")return;let A=(q||"").trim()||"PiClaw";if(I_.current.title!==A){document.title=A;let t=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(t&&t.getAttribute("content")!==A)t.setAttribute("content",A);I_.current.title=A}let E=document.getElementById("dynamic-favicon");if(!E)return;let m=E.getAttribute("data-default")||E.getAttribute("href")||"/favicon.ico",a=X||m,_0=X?`${a}|${O||""}`:a;if(I_.current.avatarBase!==_0){let t=X?`${a}${a.includes("?")?"&":"?"}v=${O||Date.now()}`:a;E.setAttribute("href",t),I_.current.avatarBase=_0}},[]),y=x((q)=>{if(!q)return;e((X)=>X.includes(q)?X:[...X,q])},[]),u=x((q)=>{e((X)=>X.filter((O)=>O!==q))},[]);K_.current=u;let d=x(()=>{e([])},[]),J0=x((q)=>{if(!Array.isArray(q)){e([]);return}let X=[],O=new Set;for(let A of q){if(typeof A!=="string"||!A.trim())continue;let E=A.trim();if(O.has(E))continue;O.add(E),X.push(E)}e(X)},[]),Z0=x((q,X=null,O="info",A=3000)=>{$0(),H({title:q,detail:X||null,kind:O||"info"}),I4.current=setTimeout(()=>{H((E)=>E?.title===q?null:E)},A)},[$0]),U1=x((q)=>{let X=Gj(q,{editorOpen:K1,resolvePane:(O)=>h0.resolve(O)});if(X.kind==="open"){q_(X.path);return}if(X.kind==="toast")Z0(X.title,X.detail,X.level)},[K1,q_,Z0]),P1=x(()=>{let q=a0;if(q)y(q)},[a0,y]),g_=x((q)=>{if(!q)return;f((X)=>X.includes(q)?X:[...X,q])},[]),t0=x(async(q,X=null)=>{let O=(E)=>{E.scrollIntoView({behavior:"smooth",block:"center"}),E.classList.add("post-highlight"),setTimeout(()=>E.classList.remove("post-highlight"),2000)},A=document.getElementById("post-"+q);if(A){O(A);return}try{let E=typeof X==="string"&&X.trim()?X.trim():j,a=(await D8(q,E))?.thread?.[0];if(!a)return;l1((_0)=>{if(!_0)return[a];if(_0.some((t)=>t.id===a.id))return _0;return[..._0,a]}),requestAnimationFrame(()=>{setTimeout(()=>{let _0=document.getElementById("post-"+q);if(_0)O(_0)},50)})}catch(E){console.error("[scrollToMessage] Failed to fetch message",q,E)}},[j]),W4=x((q)=>{f((X)=>X.filter((O)=>O!==q))},[]),_$=x(()=>{f([])},[]),$$=x((q)=>{if(!Array.isArray(q)){f([]);return}let X=[],O=new Set;for(let A of q){if(typeof A!=="string"||!A.trim())continue;let E=A.trim();if(O.has(E))continue;O.add(E),X.push(E)}f(X)},[]),C4=x((q)=>{let X=typeof q==="string"&&q.trim()?q.trim():"Could not send your message.";Z0("Compose failed",X,"error",5000)},[Z0]),h_=x((q={})=>{let X=Date.now();if(T0.current=X,q.running)r0.current=!0,h((O)=>O?O:!0);if(q.clearSilence)o0.current=0},[h]),s1=x(()=>{if(k_.current)clearTimeout(k_.current),k_.current=null;i4.current=0},[]);g(()=>()=>{s1()},[s1]);let R1=x(()=>{s1(),c((q)=>{if(!q)return q;if(!(q.last_activity||q.lastActivity))return q;let{last_activity:X,lastActivity:O,...A}=q;return A})},[s1]),j$=x((q)=>{if(!q)return;s1();let X=Date.now();i4.current=X,c({type:q.type||"active",last_activity:!0}),k_.current=setTimeout(()=>{if(i4.current!==X)return;c((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},Yj)},[s1]),p_=x(()=>{r0.current=!1,h(!1),T0.current=null,o0.current=0,y0.current="",b0.current="",s0.current=null,M_.current=null,F0.current=null,$1.current=null,Z_.current=null,x_.current={inFlight:!1,lastAttemptAt:0,turnId:null},s1(),P0(null),x0(null),H1.current=!1,G1.current=!1},[s1,P0,x0,h]),P4=x((q)=>{if(!Xj({remainingQueueCount:q,currentTurnId:F0.current,isAgentTurnActive:O1}))return;$1.current=null,x0(null)},[O1,x0]),a$=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),_4=x(()=>({agentStatus:R,agentDraft:Q0?{...Q0}:{text:"",totalLines:0},agentPlan:K0||"",agentThought:N0?{...N0}:{text:"",totalLines:0},pendingRequest:W0,currentTurnId:O0,steerQueuedTurnId:n0,isAgentTurnActive:Boolean(O1),followupQueueItems:Array.isArray(v0)?v0.map((q)=>({...q})):[],activeModel:N1,activeThinkingLevel:Q1,supportsThinking:Boolean(s),activeModelUsage:z0,contextUsage:R0,isAgentRunning:Boolean(r0.current),wasAgentActive:Boolean(L_.current),draftBuffer:y0.current||"",thoughtBuffer:b0.current||"",lastAgentEvent:T0.current||null,lastSilenceNotice:o0.current||0,lastAgentResponse:M_.current||null,currentTurnIdRef:F0.current||null,steerQueuedTurnIdRef:$1.current||null,thoughtExpanded:Boolean(H1.current),draftExpanded:Boolean(G1.current),agentStatusRef:Z_.current||null,silentRecovery:{...x_.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[N1,z0,Q1,Q0,K0,R,N0,R0,O0,v0,O1,W0,n0,s]),z_=x((q)=>{let X=q||a$();s1(),r0.current=Boolean(X.isAgentRunning),L_.current=Boolean(X.wasAgentActive),h(Boolean(X.isAgentTurnActive)),T0.current=X.lastAgentEvent||null,o0.current=Number(X.lastSilenceNotice||0),y0.current=X.draftBuffer||"",b0.current=X.thoughtBuffer||"",s0.current=X.pendingRequest||null,M_.current=X.lastAgentResponse||null,F0.current=X.currentTurnIdRef||null,$1.current=X.steerQueuedTurnIdRef||null,Z_.current=X.agentStatusRef||null,x_.current=X.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},H1.current=Boolean(X.thoughtExpanded),G1.current=Boolean(X.draftExpanded),c(X.agentStatus||null),i(X.agentDraft?{...X.agentDraft}:{text:"",totalLines:0}),Y0(X.agentPlan||""),B0(X.agentThought?{...X.agentThought}:{text:"",totalLines:0}),U0(X.pendingRequest||null),P0(X.currentTurnId||null),x0(X.steerQueuedTurnId||null),u0(Array.isArray(X.followupQueueItems)?X.followupQueueItems.map((O)=>({...O})):[]),L1(X.activeModel||null),M1(X.activeThinkingLevel||null),k0(Boolean(X.supportsThinking)),C0(X.activeModelUsage??null),w0(X.contextUsage??null)},[s1,a$,P0,u0,h,x0]),c1=x((q)=>{if(!q)return;if(F0.current===q)return;F0.current=q,x_.current={inFlight:!1,lastAttemptAt:0,turnId:q},P0(q),$1.current=null,x0(null),y0.current="",b0.current="",i({text:"",totalLines:0}),Y0(""),B0({text:"",totalLines:0}),U0(null),s0.current=null,M_.current=null,H1.current=!1,G1.current=!1},[P0,x0]),r5=x((q)=>{if(typeof document<"u"){let t=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&t)return}let X=M_.current;if(!X||!X.post)return;if(q&&X.turnId&&X.turnId!==q)return;let O=X.post;if(O.id&&l4.current===O.id)return;let A=String(O?.data?.content||"").trim();if(!A)return;l4.current=O.id||l4.current,M_.current=null;let E=A.replace(/\s+/g," ").slice(0,200),m=M4.current||{},_0=(O?.data?.agent_id?m[O.data.agent_id]:null)?.name||"Pi";o_(_0,E)},[o_]),t$=x(async(q,X)=>{if(q!=="thought"&&q!=="draft")return;let O=F0.current;if(q==="thought"){if(H1.current=X,O)try{await Oj(O,"thought",X)}catch(A){console.warn("Failed to update thought visibility:",A)}if(!X)return;try{let A=O?await Hj(O,"thought"):null;if(A?.text)b0.current=A.text;B0((E)=>({...E||{text:"",totalLines:0},fullText:b0.current||E?.fullText||"",totalLines:Number.isFinite(A?.total_lines)?A.total_lines:E?.totalLines||0}))}catch(A){console.warn("Failed to fetch full thought:",A)}return}if(G1.current=X,O)try{await Oj(O,"draft",X)}catch(A){console.warn("Failed to update draft visibility:",A)}if(!X)return;try{let A=O?await Hj(O,"draft"):null;if(A?.text)y0.current=A.text;i((E)=>({...E||{text:"",totalLines:0},fullText:y0.current||E?.fullText||"",totalLines:Number.isFinite(A?.total_lines)?A.total_lines:E?.totalLines||0}))}catch(A){console.warn("Failed to fetch full draft:",A)}},[]),s5=S(null),O$=x(()=>{let q=a_.current;if(!q)return;if(!(Math.abs(q.scrollTop)>150))q.scrollTop=0},[]);s5.current=O$;let Mj=x((q)=>{let X=a_.current;if(!X||typeof q!=="function"){q?.();return}let{currentHashtag:O,searchQuery:A,searchOpen:E}=w1.current||{},m=!((A||E)&&!O),a=m?X.scrollHeight-X.scrollTop:X.scrollTop;q(),requestAnimationFrame(()=>{let _0=a_.current;if(!_0)return;if(m){let t=Math.max(_0.scrollHeight-a,0);_0.scrollTop=t}else{let t=Math.max(_0.scrollHeight-_0.clientHeight,0),r=Math.min(a,t);_0.scrollTop=r}})},[]),J$=x((q)=>{let X=a_.current;if(!X||typeof q!=="function"){q?.();return}let O=X.scrollTop;q(),requestAnimationFrame(()=>{let A=a_.current;if(!A)return;let E=Math.max(A.scrollHeight-A.clientHeight,0);A.scrollTop=Math.min(O,E)})},[]),kj="Queued as a follow-up (one-at-a-time).",Ij="⁣",V3=x((q)=>{if(!q||!Array.isArray(q))return q;let X=e1.current,O=new Set(X),A=q.filter((E)=>{if(O.has(E?.id))return!1;if(E?.data?.is_bot_message){let m=E?.data?.content;if(m===kj||m===Ij)return!1}return!0});return A.length===q.length?q:A},[]),{posts:D$,setPosts:l1,hasMore:Cj,setHasMore:e$,hasMoreRef:L3,loadPosts:c_,refreshTimeline:a1,loadMore:Pj,loadMoreRef:a5}=_j({preserveTimelineScroll:Mj,preserveTimelineScrollTop:J$,chatJid:j}),Z$=I0(()=>V3(D$),[D$,v0,V3]),_5=x(()=>{let q=d0.current;if(!q)return;l1((X)=>X?X.filter((O)=>O.id!==q):X),d0.current=null},[l1]),{handleSplitterMouseDown:Tj,handleSplitterTouchStart:yj,handleEditorSplitterMouseDown:Sj,handleEditorSplitterTouchStart:xj,handleDockSplitterMouseDown:wj,handleDockSplitterTouchStart:Rj}=jj({appShellRef:u_,sidebarWidthRef:c4,editorWidthRef:t_,dockHeightRef:k4}),U3=x(()=>{if(!r0.current)return;r0.current=!1,o0.current=0,T0.current=null,F0.current=null,P0(null),H1.current=!1,G1.current=!1;let q=(y0.current||"").trim();if(y0.current="",b0.current="",i({text:"",totalLines:0}),Y0(""),B0({text:"",totalLines:0}),U0(null),s0.current=null,M_.current=null,!q){c({type:"error",title:"Response stalled - No content received"});return}let O=`${q}${`

⚠️ Response may be incomplete - the model stopped responding`}`,A=Date.now(),E=new Date().toISOString(),m={id:A,timestamp:E,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};d0.current=A,l1((a)=>a?s$([...a,m]):[m]),s5.current?.(),c(null)},[P0]);g(()=>{w1.current={currentHashtag:D,searchQuery:T,searchOpen:J}},[D,T,J]);let Y1=x(()=>{let q=++n_.current,X=j;Aj(X).then((O)=>{if(q!==n_.current)return;if(x1.current!==X)return;let A=b1.current,E=Array.isArray(O?.items)?O.items.map((m)=>({...m})).filter((m)=>!A.has(m.row_id)):[];if(E.length){u0((m)=>{if(m.length===E.length&&m.every((a,_0)=>a.row_id===E[_0].row_id))return m;return E});return}A.clear(),P4(0),u0((m)=>m.length===0?m:[])}).catch(()=>{if(q!==n_.current)return;if(x1.current!==X)return;u0((O)=>O.length===0?O:[])})},[P4,j,u0]),t1=x(async()=>{let q=j;try{let X=await d5(q);if(x1.current!==q)return;if(X)w0(X)}catch(X){if(x1.current!==q)return;console.warn("Failed to fetch agent context:",X)}},[j]),F_=x(async()=>{let q=j;try{let X=await hK(q);if(x1.current!==q)return;let O=Array.isArray(X?.content)?X.content.find((A)=>A?.type==="status_panel"&&A?.panel):null;G0((A)=>{let E=new Map(A);if(X?.key&&O?.panel)E.set(X.key,O.panel);else E.delete("autoresearch");return E}),E0((A)=>{if(A.size===0)return A;let E=new Set(Array.from(A).filter((m)=>!String(m).startsWith("autoresearch:")));return E.size===A.size?A:E})}catch(X){if(x1.current!==q)return;console.warn("Failed to fetch autoresearch status:",X)}},[j]),C_=x(async()=>{let q=j;try{let X=await B3(q);if(x1.current!==q)return null;if(!X||X.status!=="active"||!X.data){if(L_.current){let{currentHashtag:E,searchQuery:m,searchOpen:a}=w1.current||{};if(!E&&!m&&!a)a1()}return L_.current=!1,p_(),Z_.current=null,c(null),i({text:"",totalLines:0}),Y0(""),B0({text:"",totalLines:0}),U0(null),s0.current=null,X??null}L_.current=!0;let O=X.data;Z_.current=O;let A=O.turn_id||O.turnId;if(A)c1(A);if(h_({running:!0,clearSilence:!0}),R1(),c(O),X.thought&&X.thought.text)B0((E)=>{if(E&&E.text&&E.text.length>=X.thought.text.length)return E;return b0.current=X.thought.text,{text:X.thought.text,totalLines:X.thought.totalLines||0}});if(X.draft&&X.draft.text)i((E)=>{if(E&&E.text&&E.text.length>=X.draft.text.length)return E;return y0.current=X.draft.text,{text:X.draft.text,totalLines:X.draft.totalLines||0}});return X}catch(X){return console.warn("Failed to fetch agent status:",X),null}},[p_,R1,h_,a1,c1]),t5=x(async()=>{if(!r0.current)return null;if(s0.current)return null;let q=F0.current||null,X=x_.current,O=Date.now();if(X.inFlight)return null;if(X.turnId===q&&O-X.lastAttemptAt<Q3)return null;X.inFlight=!0,X.lastAttemptAt=O,X.turnId=q;try{let{currentHashtag:A,searchQuery:E,searchOpen:m}=w1.current||{};if(!A&&!E&&!m)await a1();return await Y1(),await C_()}finally{X.inFlight=!1}},[C_,Y1,a1]);g(()=>{let q=Math.min(1000,Math.max(100,Math.floor(Y3/2))),X=setInterval(()=>{if(!r0.current)return;if(s0.current)return;let O=T0.current;if(!O)return;let A=Date.now(),E=A-O,m=v$(Z_.current);if(E>=Nj){if(!m)c({type:"waiting",title:"Re-syncing after a quiet period…"});t5();return}if(E>=Y3){if(A-o0.current>=Q3){if(!m){let a=Math.floor(E/1000);c({type:"waiting",title:`Waiting for model… No events for ${a}s`})}o0.current=A,t5()}}},q);return()=>clearInterval(X)},[t5]);let fj=x((q)=>{if(V(q),q!=="connected"){c(null),i({text:"",totalLines:0}),Y0(""),B0({text:"",totalLines:0}),U0(null),s0.current=null,p_();return}if(!X4.current){X4.current=!0;let{currentHashtag:E,searchQuery:m,searchOpen:a}=w1.current||{};if(!E&&!m&&!a)a1();C_(),Y1(),t1();return}let{currentHashtag:X,searchQuery:O,searchOpen:A}=w1.current;if(!X&&!O&&!A)a1();C_(),Y1(),t1()},[p_,a1,C_,Y1,t1]),vj=x(async(q)=>{I(q),l1(null),await c_(q)},[c_]),bj=x(async()=>{I(null),M(null),l1(null),await c_()},[c_]),uj=x(async(q,X=C)=>{if(!q||!q.trim())return;let O=X==="root"||X==="all"?X:"current";n(O),M(q.trim()),I(null),l1(null);try{let A=await zj(q.trim(),50,0,j,O,C1);l1(A.results),e$(!1)}catch(A){console.error("Failed to search:",A),l1([])}},[j,C1,C]),mj=x(()=>{k(!0),M(null),I(null),n("current"),l1([])},[]),gj=x(()=>{k(!1),M(null),c_()},[c_]),sK=x(()=>{},[]),e5=!D&&!T&&!J,hj=x(async(q)=>{if(!q)return;let X=q.id,O=typeof q?.chat_jid==="string"&&q.chat_jid.trim()?q.chat_jid.trim():j,A=Z$?.filter((m)=>m?.data?.thread_id===X&&m?.id!==X).length||0;if(A>0){if(!window.confirm(`Delete this message and its ${A} replies?`))return}let E=(m)=>{if(!m.length)return;u1((_0)=>{let t=new Set(_0);return m.forEach((r)=>t.add(r)),t}),setTimeout(()=>{if(J$(()=>{l1((_0)=>_0?_0.filter((t)=>!m.includes(t.id)):_0)}),u1((_0)=>{let t=new Set(_0);return m.forEach((r)=>t.delete(r)),t}),L3.current)a5.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let m=await Fj(X,A>0,O);if(m?.ids?.length)E(m.ids)}catch(m){let a=m?.message||"";if(A===0&&a.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let t=await Fj(X,!0,O);if(t?.ids?.length)E(t.ids);return}console.error("Failed to delete post:",m),alert(`Failed to delete message: ${a}`)}},[j,Z$,J$]),z3=x(async()=>{try{let q=await gK();h1(Qj(q));let X=q?.user||{};h4((A)=>{let E=typeof X.name==="string"&&X.name.trim()?X.name.trim():"You",m=typeof X.avatar_url==="string"?X.avatar_url.trim():null,a=typeof X.avatar_background==="string"&&X.avatar_background.trim()?X.avatar_background.trim():null;if(A.name===E&&A.avatar_url===m&&A.avatar_background===a)return A;return{name:E,avatar_url:m,avatar_background:a}});let O=(q?.agents||[]).find((A)=>A.id==="default");L(O?.name,O?.avatar_url)}catch(q){console.warn("Failed to load agents:",q)}try{let q=j,X=await d5(q);if(x1.current!==q)return;if(X)w0(X)}catch{}},[L,j]);g(()=>{z3();let q=X$("sidebarWidth",null),X=Number.isFinite(q)?Math.min(Math.max(q,160),600):280;if(c4.current=X,u_.current)u_.current.style.setProperty("--sidebar-width",`${X}px`)},[z3]);let E$=O1||R!==null,F3=x((q)=>{if(!q||typeof q!=="object")return;let X=q.agent_id;if(!X)return;let{agent_name:O,agent_avatar:A}=q;if(!O&&A===void 0)return;let E=M4.current?.[X]||{id:X},m=E.name||null,a=E.avatar_url??E.avatarUrl??E.avatar??null,_0=!1,t=!1;if(O&&O!==E.name)m=O,t=!0;if(A!==void 0){let r=typeof A==="string"?A.trim():null,D0=typeof a==="string"?a.trim():null,f0=r||null;if(f0!==(D0||null))a=f0,_0=!0}if(!t&&!_0)return;if(h1((r)=>{let f0={...r[X]||{id:X}};if(t)f0.name=m;if(_0)f0.avatar_url=a;return{...r,[X]:f0}}),X==="default")L(m,a,_0?Date.now():null)},[L]),H3=x((q)=>{if(!q||typeof q!=="object")return;let X=q.user_name??q.userName,O=q.user_avatar??q.userAvatar,A=q.user_avatar_background??q.userAvatarBackground;if(X===void 0&&O===void 0&&A===void 0)return;h4((E)=>{let m=typeof X==="string"&&X.trim()?X.trim():E.name||"You",a=O===void 0?E.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,_0=A===void 0?E.avatar_background:typeof A==="string"&&A.trim()?A.trim():null;if(E.name===m&&E.avatar_url===a&&E.avatar_background===_0)return E;return{name:m,avatar_url:a,avatar_background:_0}})},[]),_8=x((q)=>{if(!q||typeof q!=="object")return;let X=q.model??q.current;if(X!==void 0)L1(X);if(q.thinking_level!==void 0)M1(q.thinking_level??null);if(q.supports_thinking!==void 0)k0(Boolean(q.supports_thinking));if(q.provider_usage!==void 0)C0(q.provider_usage??null)},[]),A$=x(()=>{let q=j;Jj(q).then((X)=>{if(x1.current!==q)return;if(X)_8(X)}).catch(()=>{})},[_8,j]),i1=x(()=>{let q=j,X=(O)=>Array.isArray(O)?O.filter((A)=>A&&typeof A.chat_jid==="string"&&typeof A.agent_name==="string"&&A.agent_name.trim()):[];Promise.all([Dj().catch(()=>({chats:[]})),n5(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,A])=>{if(x1.current!==q)return;let E=X(O?.chats),m=X(A?.chats);if(m.length===0){l0(E);return}let a=new Map(E.map((t)=>[t.chat_jid,t])),_0=m.map((t)=>{let r=a.get(t.chat_jid);return r?{...t,...r,is_active:r.is_active??t.is_active}:t});_0.sort((t,r)=>{if(t.chat_jid===q&&r.chat_jid!==q)return-1;if(r.chat_jid===q&&t.chat_jid!==q)return 1;let D0=Boolean(t.archived_at),f0=Boolean(r.archived_at);if(D0!==f0)return D0?1:-1;if(Boolean(t.is_active)!==Boolean(r.is_active))return t.is_active?-1:1;return String(t.chat_jid).localeCompare(String(r.chat_jid))}),l0(_0)}).catch(()=>{if(x1.current!==q)return;l0([])})},[j]),g1=x(()=>{n5(C1).then((q)=>{let X=Array.isArray(q?.chats)?q.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];g0(X)}).catch(()=>{})},[C1]),pj=x((q)=>{let X=q?.row_id;if(X==null)return;b1.current.add(X),u0((O)=>O.filter((A)=>A?.row_id!==X)),iK(X,q3(j)).then(()=>{Y1()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),Z0("Failed to steer message","The queued message could not be sent as steering.","warning"),b1.current.delete(X),Y1()})},[j,Y1,u0,Z0]),cj=x((q)=>{let X=q?.row_id;if(X==null)return;let O=__.current.filter((A)=>A?.row_id!==X).length;b1.current.add(X),P4(O),u0((A)=>A.filter((E)=>E?.row_id!==X)),dK(X,q3(j)).then(()=>{Y1()}).catch((A)=>{console.warn("[queue] Failed to remove queued item:",A),Z0("Failed to remove message","The queued message could not be removed.","warning"),b1.current.delete(X),Y1()})},[P4,j,Y1,u0,Z0]),M$=x((q)=>{if(!q||typeof q!=="object")return;if(i1(),g1(),t1(),F_(),q?.queued==="followup"||q?.queued==="steer"){Y1();return}let X=q?.command;if(X&&typeof X==="object"&&(X?.queued_followup||X?.queued_steer))Y1()},[i1,F_,g1,t1,Y1]),lj=x(async(q,X)=>{let O=typeof q?.key==="string"?q.key:"",A=typeof X?.key==="string"?X.key:"",E=`${O}:${A}`;if(!O||!A)return;E0((m)=>{if(m.has(E))return m;let a=new Set(m);return a.add(E),a});try{if(X?.action_type==="autoresearch.stop"){await pK(j,{generateReport:!0}),F_();return}throw Error(`Unsupported panel action: ${X?.action_type||A}`)}catch(m){Z0("Panel action failed",m?.message||"Could not complete that action.","warning")}finally{E0((m)=>{if(!m.has(E))return m;let a=new Set(m);return a.delete(E),a})}},[j,F_,Z0]),$8=x(()=>{if(U_.current)U_.current.abort(),U_.current=null;A0(null)},[]),$5=x(async(q)=>{let X=String(q||"").trim();if(!X)return Z0("BTW needs a question","Usage: /btw <question>","warning"),!0;if(U_.current)U_.current.abort();let O=new AbortController;U_.current=O,A0({question:X,answer:"",thinking:"",error:null,model:null,status:"running"});try{let A=await nK(X,{signal:O.signal,chatJid:w2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(E,m)=>{if(E==="side_prompt_start")A0((a)=>a?{...a,status:"running"}:a)},onThinkingDelta:(E)=>{A0((m)=>m?{...m,thinking:`${m.thinking||""}${E||""}`}:m)},onTextDelta:(E)=>{A0((m)=>m?{...m,answer:`${m.answer||""}${E||""}`}:m)}});if(U_.current!==O)return!0;A0((E)=>E?{...E,answer:A?.result||E.answer||"",thinking:A?.thinking||E.thinking||"",model:A?.model||null,status:"success",error:null}:E)}catch(A){if(O.signal.aborted)return!0;A0((E)=>E?{...E,status:"error",error:A?.payload?.error||A?.message||"BTW request failed."}:E)}finally{if(U_.current===O)U_.current=null}return!0},[j,Z0]),ij=x(async({content:q})=>{let X=x2(q);if(!X)return!1;if(X.type==="help")return Z0("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(X.type==="clear")return $8(),Z0("BTW cleared","Closed the side conversation panel.","info"),!0;if(X.type==="ask")return await $5(X.question),!0;return!1},[$8,$5,Z0]),dj=x(()=>{if(q0?.question)$5(q0.question)},[q0,$5]),nj=x(async()=>{let q=v2(q0);if(!q)return;try{let X=await n4("default",q,null,[],E$?"queue":null,j);M$(X),Z0(X?.queued==="followup"?"BTW queued":"BTW injected",X?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(X){Z0("BTW inject failed",X?.message||"Could not inject BTW answer into chat.","warning")}},[q0,M$,E$,Z0]),O3=x(async(q=null)=>{let[X,O,A,E,m,a,_0]=await Promise.allSettled([B3(j),d5(j),Aj(j),Jj(j),Dj(),n5(C1),d4(20,null,j)]),t=X.status==="fulfilled"?X.value:null,r=O.status==="fulfilled"?O.value:null,D0=A.status==="fulfilled"?A.value:null,f0=E.status==="fulfilled"?E.value:null,V1=m.status==="fulfilled"?m.value:null,q1=a.status==="fulfilled"?a.value:null,P_=_0.status==="fulfilled"?_0.value:null,T_=Array.isArray(P_?.posts)?P_.posts:Array.isArray(D$)?D$:[],M3=T_.length?T_[T_.length-1]:null,$Z=T_.filter((Y8)=>Y8?.data?.is_bot_message).length,jZ=T_.filter((Y8)=>!Y8?.data?.is_bot_message).length,k3=Number(D0?.count??__.current.length??0)||0,I3=Array.isArray(V1?.chats)?V1.chats.length:M0.length,ZZ=Array.isArray(q1?.chats)?q1.chats.length:H0.length,C3=Number(r?.percent??R0?.percent??0)||0,NZ=Number(r?.tokens??R0?.tokens??0)||0,YZ=Number(r?.contextWindow??R0?.contextWindow??0)||0,QZ=f0?.current??N1??null,KZ=f0?.thinking_level??Q1??null,qZ=f0?.supports_thinking??s,GZ=t?.status||(O1?"active":"idle"),XZ=t?.data?.type||t?.type||null;return{generatedAt:new Date().toISOString(),request:q,chat:{currentChatJid:j,rootChatJid:C1,activeChats:I3,branches:ZZ},agent:{status:GZ,phase:XZ,running:Boolean(O1)},model:{current:QZ,thinkingLevel:KZ,supportsThinking:Boolean(qZ)},context:{tokens:NZ,contextWindow:YZ,percent:C3},queue:{count:k3},timeline:{loadedPosts:T_.length,botPosts:$Z,userPosts:jZ,latestPostId:M3?.id??null,latestTimestamp:M3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(C3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,k3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,I3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,T_.length*5))}]}},[M0,N1,Q1,R0,H0,j,C1,O1,D$,s]),k$=x(()=>{A$(),i1(),g1(),Y1(),t1(),F_()},[A$,i1,g1,Y1,t1,F_]);g(()=>{k$();let q=setInterval(()=>{A$(),i1(),g1(),Y1()},60000);return()=>clearInterval(q)},[k$,A$,i1,g1,Y1]),g(()=>{g1()},[g1]),g(()=>{G0(new Map),E0(new Set),F_()},[j,F_]),g(()=>{let q=!1,X=()=>{if(q)return;requestAnimationFrame(()=>{if(q)return;O$()})};if(D)return c_(D),()=>{q=!0};if(T)return zj(T,50,0,j,C,C1).then((O)=>{if(q)return;l1(O.results),e$(!1)}).catch((O)=>{if(q)return;console.error("Failed to search:",O),l1([]),e$(!1)}),()=>{q=!0};return c_().then(()=>{X()}).catch((O)=>{if(q)return;console.error("Failed to load timeline:",O)}),()=>{q=!0}},[j,D,T,C,C1,c_,O$,e$,l1]),g(()=>{let q=I1.current||j;p4.current.set(q,_4())},[j,_4]),g(()=>{let q=I1.current||j;if(q===j)return;p4.current.set(q,_4()),I1.current=j,b1.current.clear(),z_(p4.current.get(j)||null),Y1(),C_(),t1()},[j,C_,t1,Y1,z_,_4]);let oj=x(()=>{let{currentHashtag:q,searchQuery:X,searchOpen:O}=w1.current||{};if(!q&&!X&&!O)a1();k$()},[k$,a1]),I$=x((q,X="streaming")=>{let O=h2({...q,...q&&q.status?{}:{status:X}});if(!O)return;let A=d1(O);if(A&&p1.current.has(A))return;j1((E)=>{let m=d1(E),a=Boolean(A&&m&&A===m),_0={...a&&E?.artifact?E.artifact:{},...O.artifact||{}};return{...a&&E?E:{},...O,artifact:_0,source:"live",originChatJid:O.originChatJid||j,openedAt:a&&E?.openedAt?E.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),j8=x((q,X)=>{let O=X?.turn_id,A=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null,m=A?A===j:q==="connected"||q==="workspace_update";if(m)F3(X),H3(X);if(q==="ui_theme"){M2(X);return}if(q==="generated_widget_open"){if(!m)return;if(O&&!F0.current)c1(O);I$(X,"loading");return}if(q==="generated_widget_delta"){if(!m)return;if(O&&!F0.current)c1(O);I$(X,"streaming");return}if(q==="generated_widget_final"){if(!m)return;if(O&&!F0.current)c1(O);I$(X,"final");return}if(q==="generated_widget_error"){if(!m)return;I$(X,"error");return}if(q==="generated_widget_close"){if(!m)return;let r=d1(X);j1((D0)=>{if(!D0||D0?.source!=="live")return D0;let f0=d1(D0);if(r&&f0&&r!==f0)return D0;return null});return}if(q?.startsWith("agent_")){if(!(q==="agent_draft_delta"||q==="agent_thought_delta"||q==="agent_draft"||q==="agent_thought"))R1()}if(q==="connected"){c(null),i({text:"",totalLines:0}),Y0(""),B0({text:"",totalLines:0}),U0(null),s0.current=null,p_();let r=j;B3(r).then((q1)=>{if(x1.current!==r)return;if(!q1||q1.status!=="active"||!q1.data)return;let P_=q1.data,T_=P_.turn_id||P_.turnId;if(T_)c1(T_);if(h_({clearSilence:!0}),j$(P_),q1.thought&&q1.thought.text)b0.current=q1.thought.text,B0({text:q1.thought.text,totalLines:q1.thought.totalLines||0});if(q1.draft&&q1.draft.text)y0.current=q1.draft.text,i({text:q1.draft.text,totalLines:q1.draft.totalLines||0})}).catch((q1)=>{console.warn("Failed to fetch agent status:",q1)});let{currentHashtag:D0,searchQuery:f0,searchOpen:V1}=w1.current||{};if(!D0&&!f0&&!V1)a1();k$();return}if(q==="agent_status"){if(!m){if(X?.type==="done"||X?.type==="error")i1(),g1();return}if(X.type==="done"||X.type==="error"){if(O&&F0.current&&O!==F0.current)return;if(X.type==="done"){r5(O||F0.current);let{currentHashtag:r,searchQuery:D0,searchOpen:f0}=w1.current||{};if(!r&&!D0&&!f0)a1();if(X.context_usage)w0(X.context_usage)}if(t1(),L_.current=!1,p_(),b1.current.clear(),i1(),Y1(),i({text:"",totalLines:0}),Y0(""),B0({text:"",totalLines:0}),U0(null),X.type==="error")c({type:"error",title:X.title||"Agent error"}),setTimeout(()=>c(null),8000);else c(null)}else{if(O)c1(O);if(h_({running:!0,clearSilence:!0}),X.type==="thinking")y0.current="",b0.current="",i({text:"",totalLines:0}),Y0(""),B0({text:"",totalLines:0});Z_.current=X,c((r)=>{if(r&&r.type===X.type&&r.title===X.title)return r;return X})}return}if(q==="agent_steer_queued"){if(!m)return;if(O&&F0.current&&O!==F0.current)return;let r=O||F0.current;if(!r)return;$1.current=r,x0(r);return}if(q==="agent_followup_queued"){if(!m)return;let r=X?.row_id,D0=X?.content;if(r!=null&&typeof D0==="string"&&D0.trim())u0((f0)=>{if(f0.some((V1)=>V1?.row_id===r))return f0;return[...f0,{row_id:r,content:D0,timestamp:X?.timestamp||null,thread_id:X?.thread_id??null}]});Y1();return}if(q==="agent_followup_consumed"){if(!m)return;let r=X?.row_id;if(r!=null){let q1=__.current.filter((P_)=>P_.row_id!==r).length;P4(q1),u0((P_)=>P_.filter((T_)=>T_.row_id!==r))}Y1();let{currentHashtag:D0,searchQuery:f0,searchOpen:V1}=w1.current||{};if(!D0&&!f0&&!V1)a1();return}if(q==="agent_followup_removed"){if(!m)return;let r=X?.row_id;if(r!=null){let D0=__.current.filter((f0)=>f0.row_id!==r).length;b1.current.add(r),P4(D0),u0((f0)=>f0.filter((V1)=>V1.row_id!==r))}Y1();return}if(q==="agent_draft_delta"){if(!m)return;if(O&&F0.current&&O!==F0.current)return;if(O&&!F0.current)c1(O);if(h_({running:!0,clearSilence:!0}),X?.reset)y0.current="";if(X?.delta)y0.current+=X.delta;let r=Date.now();if(!b_.current||r-b_.current>=100){b_.current=r;let D0=y0.current,f0=K3(D0);if(G1.current)i((V1)=>({text:V1?.text||"",totalLines:f0,fullText:D0}));else i({text:D0,totalLines:f0})}return}if(q==="agent_draft"){if(!m)return;if(O&&F0.current&&O!==F0.current)return;if(O&&!F0.current)c1(O);h_({running:!0,clearSilence:!0});let r=X.text||"",D0=X.mode||(X.kind==="plan"?"replace":"append"),f0=Number.isFinite(X.total_lines)?X.total_lines:r?r.replace(/\r\n/g,`
`).split(`
`).length:0;if(X.kind==="plan")if(D0==="replace")Y0(r);else Y0((V1)=>(V1||"")+r);else if(!G1.current)y0.current=r,i({text:r,totalLines:f0});return}if(q==="agent_thought_delta"){if(!m)return;if(O&&F0.current&&O!==F0.current)return;if(O&&!F0.current)c1(O);if(h_({running:!0,clearSilence:!0}),X?.reset)b0.current="";if(typeof X?.delta==="string")b0.current+=X.delta;let r=Date.now();if(H1.current&&(!A4.current||r-A4.current>=100)){A4.current=r;let D0=b0.current;B0((f0)=>({text:f0?.text||"",totalLines:K3(D0),fullText:D0}))}return}if(q==="agent_thought"){if(!m)return;if(O&&F0.current&&O!==F0.current)return;if(O&&!F0.current)c1(O);h_({running:!0,clearSilence:!0});let r=X.text||"",D0=Number.isFinite(X.total_lines)?X.total_lines:r?r.replace(/\r\n/g,`
`).split(`
`).length:0;if(!H1.current)b0.current=r,B0({text:r,totalLines:D0});return}if(q==="model_changed"){if(!m)return;if(X?.model!==void 0)L1(X.model);if(X?.thinking_level!==void 0)M1(X.thinking_level??null);if(X?.supports_thinking!==void 0)k0(Boolean(X.supports_thinking));let r=j;d5(r).then((D0)=>{if(x1.current!==r)return;if(D0)w0(D0)}).catch(()=>{});return}if(q==="extension_ui_widget"&&X?.options?.surface==="status-panel"){if((typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():j)!==j)return;let D0=typeof X?.key==="string"?X.key:"",f0=Array.isArray(X?.content)?X.content.find((V1)=>V1?.type==="status_panel"&&V1?.panel):null;if(!D0)return;if(G0((V1)=>{let q1=new Map(V1);if(X?.options?.remove||!f0?.panel)q1.delete(D0);else q1.set(D0,f0.panel);return q1}),X?.options?.remove||f0?.panel?.state!=="running")E0((V1)=>{if(V1.size===0)return V1;let q1=new Set(Array.from(V1).filter((P_)=>!String(P_).startsWith(`${D0}:`)));return q1.size===V1.size?V1:q1});G3(q,X);return}if(q==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:X}));return}if(Vj(q)){if(!m)return;if(G3(q,X),q==="extension_ui_notify"&&typeof X?.message==="string")Z0(X.message,null,X?.type||"info");if(q==="extension_ui_error"&&typeof X?.error==="string")Z0("Extension UI error",X.error,"error",5000);return}let{currentHashtag:a,searchQuery:_0,searchOpen:t}=w1.current;if(q==="agent_response"){if(!m)return;_5(),M_.current={post:X,turnId:F0.current}}if(!a&&!_0&&!t&&m&&(q==="new_post"||q==="new_reply"||q==="agent_response"))l1((r)=>{if(!r)return[X];if(r.some((D0)=>D0.id===X.id))return r;return[...r,X]}),s5.current?.();if(q==="interaction_updated"){if(!m)return;if(a||_0||t)return;l1((r)=>{if(!r)return r;if(!r.some((D0)=>D0.id===X.id))return r;return r.map((D0)=>D0.id===X.id?X:D0)})}if(q==="interaction_deleted"){if(!m)return;if(a||_0||t)return;let r=X?.ids||[];if(r.length){if(J$(()=>{l1((D0)=>D0?D0.filter((f0)=>!r.includes(f0.id)):D0)}),L3.current)a5.current?.({preserveScroll:!0,preserveMode:"top"})}}},[I$,p_,R1,j,a5,h_,r5,J$,i1,g1,a1,_5,c1,j$,F3,H3,A$,Y1,u0,t1]);g(()=>{if(typeof window>"u")return;let q=window.__PICLAW_TEST_API||{};return q.emit=j8,q.reset=()=>{_5(),p_(),c(null),i({text:"",totalLines:0}),Y0(""),B0({text:"",totalLines:0}),U0(null)},q.finalize=()=>U3(),window.__PICLAW_TEST_API=q,()=>{if(window.__PICLAW_TEST_API===q)window.__PICLAW_TEST_API=void 0}},[p_,U3,j8,_5]),t9({handleSseEvent:j8,handleConnectionStatusChange:fj,loadPosts:c_,onWake:oj,chatJid:j}),g(()=>{if(!Z$||Z$.length===0)return;let q=location.hash;if(!q||!q.startsWith("#msg-"))return;let X=q.slice(5);t0(X),history.replaceState(null,"",location.pathname+location.search)},[Z$,t0]);let Z8=R!==null;g(()=>{if(G!=="connected")return;let X=setInterval(()=>{let{currentHashtag:O,searchQuery:A,searchOpen:E}=w1.current||{},m=!O&&!A&&!E;if(Z8){if(m)a1();Y1(),C_(),t1(),F_()}else{if(m)a1();C_(),t1(),F_()}},Z8?15000:60000);return()=>clearInterval(X)},[G,Z8,C_,F_,t1,Y1,a1]),g(()=>{return Uj(()=>{C_(),t1(),Y1(),F_()})},[C_,F_,t1,Y1]);let rj=x(()=>{Q_((q)=>!q)},[]),J3=x((q)=>{if(typeof window>"u")return;let X=String(q||"").trim();if(!X||X===j)return;let O=a4(window.location.href,X,{chatOnly:Z});$?.(O)},[Z,j,$]),N8=x(()=>{if(typeof window>"u"||!Z1?.chat_jid)return;let q=Date.now(),X=X3();if(!X)return;if(e_.current||q<P.current||X.inFlight||q<X.cooldownUntil)return;X0(Z1.agent_name||""),b(!0)},[Z1]),C$=x(()=>{b(!1),X0("")},[]),D3=x(async(q)=>{if(typeof window>"u"||!Z1?.chat_jid)return;if(typeof q!=="string"){N8();return}let X=Date.now(),O=X3();if(!O)return;if(e_.current||X<P.current||O.inFlight||X<O.cooldownUntil)return;e_.current=!0,O.inFlight=!0,F(!0);try{let A=Z1.agent_name||"",E=i8(q,A);if(!E.canSubmit){Z0("Could not rename branch",E.message||"Enter a valid branch handle.","warning",4000);return}let m=E.normalized||A,a=await cK(Z1.chat_jid,{agentName:m});await Promise.allSettled([i1(),g1()]);let _0=a?.branch?.agent_name||m||A;Z0("Branch renamed",`@${_0}`,"info",3500),C$()}catch(A){let E=A instanceof Error?A.message:String(A||"Could not rename branch."),m=/already in use/i.test(E||"")?`${E} Switch to or restore that existing session from the session manager.`:E;Z0("Could not rename branch",m||"Could not rename branch.","warning",5000)}finally{e_.current=!1,F(!1);let A=Date.now()+vK;P.current=A;let E=X3();if(E)E.inFlight=!1,E.cooldownUntil=A}},[C$,Z1,i1,g1,N8,F,Z0]),E3=x(async(q=null)=>{if(typeof window>"u")return;let X=typeof q==="string"&&q.trim()?q.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",A=X||Z1?.chat_jid||O;if(!A){Z0("Could not prune branch","No active session is selected yet.","warning",4000);return}let E=(Z1?.chat_jid===A?Z1:null)||H0.find((t)=>t?.chat_jid===A)||M0.find((t)=>t?.chat_jid===A)||null;if(E?.chat_jid===(E?.root_chat_jid||E?.chat_jid)){Z0("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let a=`@${E?.agent_name||A}${E?.chat_jid?` — ${E.chat_jid}`:""}`;if(!window.confirm(`Prune ${a}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await lK(A),await Promise.allSettled([i1(),g1()]);let t=E?.root_chat_jid||"web:default";Z0("Branch pruned",`${a} has been archived.`,"info",3000);let r=a4(window.location.href,t,{chatOnly:Z});$?.(r)}catch(t){let r=t instanceof Error?t.message:String(t||"Could not prune branch.");Z0("Could not prune branch",r||"Could not prune branch.","warning",5000)}},[M0,Z,Z1,H0,j,$,i1,g1,Z0]),sj=x(async(q)=>{let X=typeof q==="string"?q.trim():"";if(!X||typeof Ej!=="function")return;try{let O=H0.find((t)=>t?.chat_jid===X)||null,A=await Ej(X);await Promise.allSettled([i1(),g1()]);let E=A?.branch,m=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():X,a=G2(O?.agent_name,E?.agent_name,m);Z0("Branch restored",a,"info",4200);let _0=a4(window.location.href,m,{chatOnly:Z});$?.(_0)}catch(O){let A=O instanceof Error?O.message:String(O||"Could not restore branch.");Z0("Could not restore branch",A||"Could not restore branch.","warning",5000)}},[Z,H0,$,i1,g1,Z0]);g(()=>{if(!K||typeof window>"u")return;let q=!1;return(async()=>{try{D_({status:"running",message:"Preparing a new chat branch…"});let X=await T$(B);if(q)return;let O=X?.branch,A=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");let E=a4(window.location.href,A,{chatOnly:!0});$?.(E,{replace:!0})}catch(X){if(q)return;D_({status:"error",message:b5(X)})}})(),()=>{q=!0}},[K,B,$]);let aj=x((q)=>{if(!q||typeof q!=="object")return;let X=d1(q);if(X)p1.current.delete(X);j1({...q,openedAt:new Date().toISOString()})},[]),P$=x(()=>{j1((q)=>{let X=d1(q);if(q?.source==="live"&&X)p1.current.add(X);return null})},[]),tj=x((q,X)=>{let O=typeof q?.kind==="string"?q.kind:"",A=d1(X);if(!O||!A)return;if(O==="widget.close"){P$();return}if(O==="widget.submit"){let E=i2(q?.payload),m=d2(q?.payload),a=new Date().toISOString();if(j1((_0)=>{let t=d1(_0);if(!_0||t!==A)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:q?.payload||null,lastSubmitAt:a,lastHostUpdate:{type:"submit_pending",submittedAt:a,preview:E||null}}}}),!E){if(Z0("Widget submission received","The widget submitted data without a message payload yet.","info",3500),m)P$();return}(async()=>{try{let _0=await n4("default",E,null,[],E$?"queue":null,j);if(M$(_0),j1((t)=>{let r=d1(t);if(!t||r!==A)return t;return{...t,runtimeState:{...t.runtimeState||{},lastHostUpdate:{type:_0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:a,preview:E,queued:_0?.queued||null}}}}),Z0(_0?.queued==="followup"?"Widget submission queued":"Widget submission sent",_0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),m)P$()}catch(_0){j1((t)=>{let r=d1(t);if(!t||r!==A)return t;return{...t,runtimeState:{...t.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:a,preview:E,error:_0?.message||"Could not send the widget message."}}}}),Z0("Widget submission failed",_0?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let E=new Date().toISOString(),m=Boolean(q?.payload?.buildDashboard||q?.payload?.dashboardKind==="internal-state"),a=Number(X?.runtimeState?.refreshCount||0)+1;if(j1((_0)=>{let t=d1(_0);if(!_0||t!==A)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:q?.payload||null,...O==="widget.ready"?{readyAt:E,lastHostUpdate:{type:"ready_ack",at:E}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:E,refreshCount:a,lastHostUpdate:{type:m?"refresh_building":"refresh_ack",at:E,count:a,echo:q?.payload||null}}:{}}}}),O==="widget.request_refresh")if(m)(async()=>{try{let _0=await O3(q?.payload||null);j1((t)=>{let r=d1(t);if(!t||r!==A)return t;return{...t,runtimeState:{...t.runtimeState||{},dashboard:_0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:a,echo:q?.payload||null}}}}),Z0("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(_0){j1((t)=>{let r=d1(t);if(!t||r!==A)return t;return{...t,runtimeState:{...t.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:a,error:_0?.message||"Could not build dashboard."}}}}),Z0("Dashboard build failed",_0?.message||"Could not build dashboard.","warning",5000)}})();else Z0("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[O3,j,P$,M$,E$,Z0]);g(()=>{p1.current.clear(),j1(null)},[j]);let ej=x(async()=>{if(typeof window>"u")return;try{let X=(await T$(j))?.branch,O=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([i1(),g1()]);let A=X?.agent_name?`@${X.agent_name}`:O;Z0("New branch created",`Switched to ${A}.`,"info",2500);let E=a4(window.location.href,O,{chatOnly:Z});$?.(E)}catch(q){Z0("Could not create branch",b5(q),"warning",5000)}},[Z,j,$,i1,g1,Z0]),j5=x((q,X)=>{if(typeof window>"u"||W)return;let O=typeof q==="string"&&q.trim()?q.trim():"";if(!O)return;let A=()=>{let _0=_1.get(O);if(!_0||_0.dirty)return;R_(O)},E=I7(O);if(!E){Z0("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let m=k7(window.location.href,O,{label:typeof X==="string"&&X.trim()?X.trim():void 0,chatJid:j});if(E.mode==="tab"){if(!window.open(m,E.target)){Z0("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}A();return}let a=V6(E);if(!a){Z0("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}L6(a,{title:typeof X==="string"&&X.trim()?`Opening ${X}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."}),U6(a,m),A()},[j,R_,W,Z0]);g(()=>{let q=(O)=>{let A=O.detail?.path,E=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(A)q_(A,E?{label:E}:void 0)},X=(O)=>{let A=O.detail?.path,E=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(A)j5(A,E)};return document.addEventListener("office-viewer:open-tab",q),document.addEventListener("drawio:open-tab",q),document.addEventListener("csv-viewer:open-tab",q),document.addEventListener("pdf-viewer:open-tab",q),document.addEventListener("image-viewer:open-tab",q),document.addEventListener("video-viewer:open-tab",q),document.addEventListener("vnc:open-tab",q),document.addEventListener("pane:popout",X),()=>{document.removeEventListener("office-viewer:open-tab",q),document.removeEventListener("drawio:open-tab",q),document.removeEventListener("csv-viewer:open-tab",q),document.removeEventListener("pdf-viewer:open-tab",q),document.removeEventListener("image-viewer:open-tab",q),document.removeEventListener("video-viewer:open-tab",q),document.removeEventListener("vnc:open-tab",q),document.removeEventListener("pane:popout",X)}},[j5,q_]);let _Z=x(async()=>{if(typeof window>"u"||W)return;let q=E7(j);if(!q){Z0("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(q.mode==="tab"){let O=M7(window.location.href,j,{chatOnly:!0});if(!window.open(O,q.target))Z0("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let X=V6(q);if(!X){Z0("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}L6(X,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let A=(await T$(j))?.branch,E=typeof A?.chat_jid==="string"&&A.chat_jid.trim()?A.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");try{let a=await A8();l0(Array.isArray(a?.chats)?a.chats:[])}catch{}try{let a=await n5(C1);g0(Array.isArray(a?.chats)?a.chats:[])}catch{}let m=a4(window.location.href,E,{chatOnly:!0});U6(X,m)}catch(O){A7(X),Z0("Could not open branch window",b5(O),"error",5000)}},[j,C1,W,Z0]);g(()=>{if(!K1)return;if(typeof window>"u")return;let q=u_.current;if(!q)return;if(!t_.current){let X=X$("editorWidth",null),O=c4.current||280;t_.current=Number.isFinite(X)?X:O}if(q.style.setProperty("--editor-width",`${t_.current}px`),!k4.current){let X=X$("dockHeight",null);k4.current=Number.isFinite(X)?X:200}q.style.setProperty("--dock-height",`${k4.current}px`)},[K1]),g(()=>{if(!m1||Z)return;let q=(X)=>{if(X.ctrlKey&&X.key==="`")X.preventDefault(),J1()};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[J1,m1,Z]),g(()=>{if(Z)return;let q=(X)=>{if(X.ctrlKey&&X.shiftKey&&(X.key==="Z"||X.key==="z")){X.preventDefault(),D4();return}if(X.key==="Escape"&&k1)X.preventDefault(),v_()};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[D4,v_,k1,Z]);let A3=Boolean(n0&&n0===(R?.turn_id||O0));if(K)return z`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${W1.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${W1.message}</p>
                    </div>
                </div>
            </div>
        `;if(N)return z`
            <div class=${`app-shell pane-popout${K1?" editor-open":""}`} ref=${u_}>
                <div class="editor-pane-container pane-popout-container">
                    ${K1&&!m4&&z`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${r_?z`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${O4}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${$_.length>1&&z`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${$_.map((q)=>z`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${q.id===a0?" active":""}`}
                                                                onClick=${(X)=>{v4(q.id),X.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${q.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${a0&&o1.has(a0)&&z`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(q)=>{K4(a0),q.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:z`
                                    <div class="pane-popout-controls-label" aria-label=${O4}>${O4}</div>
                                `}
                        </div>
                    `}
                    ${K1?z`<div class="editor-pane-host" ref=${X1}></div>`:z`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${K1&&a0&&o1.has(a0)&&z`
                        <${Z3}
                            getContent=${()=>y1.current?.getContent?.()}
                            path=${a0}
                            onClose=${()=>K4(a0)}
                        />
                    `}
                </div>
            </div>
        `;return z`
        <div class=${`app-shell${E1?"":" workspace-collapsed"}${K1?" editor-open":""}${Z?" chat-only":""}${k1?" zen-mode":""}`} ref=${u_}>
            ${v&&z`
                <div class="rename-branch-overlay" onPointerDown=${(q)=>{if(q.target===q.currentTarget)C$()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(q)=>{q.preventDefault(),D3(o)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${L0}
                            value=${o}
                            onInput=${(q)=>{let X=q.currentTarget?.value??"";X0(String(X))}}
                            onKeyDown=${(q)=>{if(q.key==="Escape")q.preventDefault(),C$()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${V0.kind||"info"}`}>
                            ${V0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${m_||!V0.canSubmit}>
                                ${m_?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${C$}
                                disabled=${m_}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Z&&z`
                <${n9}
                    onFileSelect=${y}
                    visible=${E1}
                    active=${E1||K1}
                    onOpenEditor=${q_}
                    onOpenTerminalTab=${D1}
                    onOpenVncTab=${A_}
                    onToggleTerminal=${m1?J1:void 0}
                    terminalVisible=${Boolean(m1&&S1)}
                />
                <button
                    class=${`workspace-toggle-tab${E1?" open":" closed"}`}
                    onClick=${rj}
                    title=${E1?"Hide workspace":"Show workspace"}
                    aria-label=${E1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${Tj} onTouchStart=${yj}></div>
            `}
            ${G4&&z`
                <div class="editor-pane-container">
                    ${k1&&z`<div class="zen-hover-zone"></div>`}
                    ${K1&&z`
                        <${s9}
                            tabs=${$_}
                            activeId=${a0}
                            onActivate=${v4}
                            onClose=${R_}
                            onCloseOthers=${E_}
                            onCloseAll=${b4}
                            onTogglePin=${Q4}
                            onTogglePreview=${K4}
                            onEditSource=${G_}
                            previewTabs=${o1}
                            paneOverrides=${Y4}
                            onToggleDock=${m1?J1:void 0}
                            dockVisible=${m1&&S1}
                            onToggleZen=${D4}
                            zenMode=${k1}
                            onPopOutTab=${W?void 0:j5}
                        />
                    `}
                    ${K1&&z`<div class="editor-pane-host" ref=${X1}></div>`}
                    ${K1&&a0&&o1.has(a0)&&z`
                        <${Z3}
                            getContent=${()=>y1.current?.getContent?.()}
                            path=${a0}
                            onClose=${()=>K4(a0)}
                        />
                    `}
                    ${m1&&S1&&z`<div class="dock-splitter" onMouseDown=${wj} onTouchStart=${Rj}></div>`}
                    ${m1&&z`<div class=${`dock-panel${S1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!W&&z`
                                    <button class="dock-panel-action" onClick=${()=>j5(h$,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${J1} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${f_}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${Sj} onTouchStart=${xj}></div>
            `}
            <div class="container">
                ${T&&Kj()&&z`<div class="search-results-spacer"></div>`}
                ${Z&&z`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${Z1?.agent_name?`@${Z1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${Z1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${H0.length>1&&z`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(q)=>J3(q.currentTarget.value)}
                                    >
                                        ${H0.map((q)=>z`
                                            <option key=${q.chat_jid} value=${q.chat_jid}>
                                                ${E5(q,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${Z1?.chat_jid&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${N8}
                                    title=${m_?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${m_}
                                >
                                    ${m_?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${Z1?.chat_jid&&Z1.chat_jid!==(Z1.root_chat_jid||Z1.chat_jid)&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${E3}
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
                ${(D||T)&&z`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${bj}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${D?`#${D}`:`Search: ${T} · ${W_}`}</span>
                    </div>
                `}
                <${F7}
                    posts=${Z$}
                    hasMore=${e5?Cj:!1}
                    onLoadMore=${e5?Pj:void 0}
                    timelineRef=${a_}
                    onHashtagClick=${vj}
                    onMessageRef=${g_}
                    onScrollToMessage=${t0}
                    onFileRef=${U1}
                    onPostClick=${void 0}
                    onDeletePost=${hj}
                    onOpenWidget=${aj}
                    emptyMessage=${D?`No posts with #${D}`:T?`No results for "${T}"`:void 0}
                    agents=${v1}
                    user=${E4}
                    reverse=${e5}
                    removingPostIds=${w_}
                    searchQuery=${T}
                />
                <${_6}
                    status=${R}
                    draft=${Q0}
                    plan=${K0}
                    thought=${N0}
                    pendingRequest=${W0}
                    intent=${w}
                    turnId=${O0}
                    steerQueued=${A3}
                    onPanelToggle=${t$}
                    showExtensionPanels=${!1}
                />
                <${b2}
                    session=${q0}
                    onClose=${$8}
                    onRetry=${dj}
                    onInject=${nj}
                />
                <${r2}
                    widget=${c0}
                    onClose=${P$}
                    onWidgetEvent=${tj}
                />
                <${_6}
                    extensionPanels=${Array.from(i0.values())}
                    pendingPanelActions=${p0}
                    onExtensionPanelAction=${lj}
                    turnId=${O0}
                    steerQueued=${A3}
                    onPanelToggle=${t$}
                    showCorePanels=${!1}
                />
                <${B2}
                    onPost=${()=>{let{searchQuery:q,searchOpen:X}=w1.current||{};if(!q&&!X)c_(),O$()}}
                    onFocus=${O$}
                    searchMode=${J}
                    searchScope=${C}
                    onSearch=${uj}
                    onSearchScopeChange=${n}
                    onEnterSearch=${mj}
                    onExitSearch=${gj}
                    fileRefs=${l}
                    onRemoveFileRef=${u}
                    onClearFileRefs=${d}
                    onSetFileRefs=${J0}
                    messageRefs=${j0}
                    onRemoveMessageRef=${W4}
                    onClearMessageRefs=${_$}
                    onSetMessageRefs=${$$}
                    onSwitchChat=${J3}
                    onRenameSession=${D3}
                    isRenameSessionInProgress=${m_}
                    onCreateSession=${ej}
                    onDeleteSession=${E3}
                    onRestoreSession=${sj}
                    activeEditorPath=${Z?null:a0}
                    onAttachEditorFile=${Z?void 0:P1}
                    onOpenFilePill=${U1}
                    followupQueueCount=${V_}
                    followupQueueItems=${v0}
                    onInjectQueuedFollowup=${pj}
                    onRemoveQueuedFollowup=${cj}
                    onSubmitIntercept=${ij}
                    onMessageResponse=${M$}
                    onSubmitError=${C4}
                    onPopOutChat=${W?void 0:_Z}
                    isAgentActive=${E$}
                    activeChatAgents=${M0}
                    currentChatJid=${j}
                    connectionStatus=${G}
                    activeModel=${N1}
                    modelUsage=${z0}
                    thinkingLevel=${Q1}
                    supportsThinking=${s}
                    contextUsage=${R0}
                    notificationsEnabled=${Y_}
                    notificationPermission=${N4}
                    onToggleNotifications=${T1}
                    onModelChange=${L1}
                    onModelStateChange=${_8}
                />
                <${j7}
                    request=${W0}
                    onRespond=${()=>{U0(null),s0.current=null}}
                />
            </div>
        </div>
    `}function rK(){let[_,$]=p(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let N=()=>$(window.location.href);return window.addEventListener("popstate",N),()=>window.removeEventListener("popstate",N)},[]);let j=x((N,Y={})=>{if(typeof window>"u")return;let{replace:Q=!1}=Y||{},K=new URL(String(N||""),window.location.href).toString();if(Q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Z=I0(()=>new URL(_).searchParams,[_]);return z`<${oK} locationParams=${Z} navigate=${j} />`}V5(z`<${rK} />`,document.getElementById("app"));

//# debugId=4685AA883A679DA964756E2164756E21
//# sourceMappingURL=app.bundle.js.map
