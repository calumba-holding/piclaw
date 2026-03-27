var WZ=Object.defineProperty;var UZ=(_)=>_;function LZ(_,$){this[_]=UZ.bind(null,$)}var FZ=(_,$)=>{for(var j in $)WZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:LZ.bind($,j)})};var W8,z1,n3,zZ,w4,f3,s3,r3,a3,F6,V6,B6,t3,N8={},V8=[],HZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,U8=Array.isArray;function L4(_,$){for(var j in $)_[j]=$[j];return _}function z6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function L8(_,$,j){var Z,Y,Q,q={};for(Q in $)Q=="key"?Z=$[Q]:Q=="ref"?Y=$[Q]:q[Q]=$[Q];if(arguments.length>2&&(q.children=arguments.length>3?W8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Q in _.defaultProps)q[Q]===void 0&&(q[Q]=_.defaultProps[Q]);return K8(_,q,Z,Y,null)}function K8(_,$,j,Z,Y){var Q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++n3:Y,__i:-1,__u:0};return Y==null&&z1.vnode!=null&&z1.vnode(Q),Q}function F8(_){return _.children}function X5(_,$){this.props=_,this.context=$}function N5(_,$){if($==null)return _.__?N5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?N5(_):null}function OZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],Q=L4({},$);Q.__v=$.__v+1,z1.vnode&&z1.vnode(Q),H6(_.__P,Q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?N5($):j,!!(32&$.__u),Y),Q.__v=$.__v,Q.__.__k[Q.__i]=Q,j2(Z,Q,Y),$.__e=$.__=null,Q.__e!=j&&e3(Q)}}function e3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),e3(_)}function W6(_){(!_.__d&&(_.__d=!0)&&w4.push(_)&&!B8.__r++||f3!=z1.debounceRendering)&&((f3=z1.debounceRendering)||s3)(B8)}function B8(){try{for(var _,$=1;w4.length;)w4.length>$&&w4.sort(r3),_=w4.shift(),$=w4.length,OZ(_)}finally{w4.length=B8.__r=0}}function _2(_,$,j,Z,Y,Q,q,G,V,K,B){var W,U,A,P,S,I,J,C=Z&&Z.__k||V8,T=$.length;for(V=JZ(j,$,C,V,T),W=0;W<T;W++)(A=j.__k[W])!=null&&(U=A.__i!=-1&&C[A.__i]||N8,A.__i=W,I=H6(_,A,U,Y,Q,q,G,V,K,B),P=A.__e,A.ref&&U.ref!=A.ref&&(U.ref&&O6(U.ref,null,A),B.push(A.ref,A.__c||P,A)),S==null&&P!=null&&(S=P),(J=!!(4&A.__u))||U.__k===A.__k?V=$2(A,V,_,J):typeof A.type=="function"&&I!==void 0?V=I:P&&(V=P.nextSibling),A.__u&=-7);return j.__e=S,V}function JZ(_,$,j,Z,Y){var Q,q,G,V,K,B=j.length,W=B,U=0;for(_.__k=Array(Y),Q=0;Q<Y;Q++)(q=$[Q])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Q]=K8(null,q,null,null,null):U8(q)?q=_.__k[Q]=K8(F8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Q]=K8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Q]=q,V=Q+U,q.__=_,q.__b=_.__b+1,G=null,(K=q.__i=DZ(q,j,V,W))!=-1&&(W--,(G=j[K])&&(G.__u|=2)),G==null||G.__v==null?(K==-1&&(Y>B?U--:Y<B&&U++),typeof q.type!="function"&&(q.__u|=4)):K!=V&&(K==V-1?U--:K==V+1?U++:(K>V?U--:U++,q.__u|=4))):_.__k[Q]=null;if(W)for(Q=0;Q<B;Q++)(G=j[Q])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=N5(G)),Y2(G,G));return Z}function $2(_,$,j,Z){var Y,Q;if(typeof _.type=="function"){for(Y=_.__k,Q=0;Y&&Q<Y.length;Q++)Y[Q]&&(Y[Q].__=_,$=$2(Y[Q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=N5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function DZ(_,$,j,Z){var Y,Q,q,G=_.key,V=_.type,K=$[j],B=K!=null&&(2&K.__u)==0;if(K===null&&G==null||B&&G==K.key&&V==K.type)return j;if(Z>(B?1:0)){for(Y=j-1,Q=j+1;Y>=0||Q<$.length;)if((K=$[q=Y>=0?Y--:Q++])!=null&&(2&K.__u)==0&&G==K.key&&V==K.type)return q}return-1}function b3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||HZ.test($)?j:j+"px"}function G8(_,$,j,Z,Y){var Q,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||b3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||b3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Q=$!=($=$.replace(a3,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Q]=j,j?Z?j.u=Z.u:(j.u=F6,_.addEventListener($,Q?B6:V6,Q)):_.removeEventListener($,Q?B6:V6,Q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function g3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=F6++;else if($.t<j.u)return;return j(z1.event?z1.event($):$)}}}function H6(_,$,j,Z,Y,Q,q,G,V,K){var B,W,U,A,P,S,I,J,C,T,d,c,_0,j0,b,w=$.type;if($.constructor!==void 0)return null;128&j.__u&&(V=!!(32&j.__u),Q=[G=$.__e=j.__e]),(B=z1.__b)&&B($);_:if(typeof w=="function")try{if(J=$.props,C=w.prototype&&w.prototype.render,T=(B=w.contextType)&&Z[B.__c],d=B?T?T.props.value:B.__:Z,j.__c?I=(W=$.__c=j.__c).__=W.__E:(C?$.__c=W=new w(J,d):($.__c=W=new X5(J,d),W.constructor=w,W.render=EZ),T&&T.sub(W),W.state||(W.state={}),W.__n=Z,U=W.__d=!0,W.__h=[],W._sb=[]),C&&W.__s==null&&(W.__s=W.state),C&&w.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=L4({},W.__s)),L4(W.__s,w.getDerivedStateFromProps(J,W.__s))),A=W.props,P=W.state,W.__v=$,U)C&&w.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),C&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(C&&w.getDerivedStateFromProps==null&&J!==A&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(J,d),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(J,W.__s,d)===!1){$.__v!=j.__v&&(W.props=J,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),V8.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&q.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(J,W.__s,d),C&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(A,P,S)})}if(W.context=d,W.props=J,W.__P=_,W.__e=!1,c=z1.__r,_0=0,C)W.state=W.__s,W.__d=!1,c&&c($),B=W.render(W.props,W.state,W.context),V8.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,c&&c($),B=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++_0<25);W.state=W.__s,W.getChildContext!=null&&(Z=L4(L4({},Z),W.getChildContext())),C&&!U&&W.getSnapshotBeforeUpdate!=null&&(S=W.getSnapshotBeforeUpdate(A,P)),j0=B!=null&&B.type===F8&&B.key==null?Z2(B.props.children):B,G=_2(_,U8(j0)?j0:[j0],$,j,Z,Y,Q,q,G,V,K),W.base=$.__e,$.__u&=-161,W.__h.length&&q.push(W),I&&(W.__E=W.__=null)}catch(H){if($.__v=null,V||Q!=null)if(H.then){for($.__u|=V?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;Q[Q.indexOf(G)]=null,$.__e=G}else{for(b=Q.length;b--;)z6(Q[b]);U6($)}else $.__e=j.__e,$.__k=j.__k,H.then||U6($);z1.__e(H,$,j)}else Q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=AZ(j.__e,$,j,Z,Y,Q,q,V,K);return(B=z1.diffed)&&B($),128&$.__u?void 0:G}function U6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(U6))}function j2(_,$,j){for(var Z=0;Z<j.length;Z++)O6(j[Z],j[++Z],j[++Z]);z1.__c&&z1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(Q){Q.call(Y)})}catch(Q){z1.__e(Q,Y.__v)}})}function Z2(_){return typeof _!="object"||_==null||_.__b>0?_:U8(_)?_.map(Z2):L4({},_)}function AZ(_,$,j,Z,Y,Q,q,G,V){var K,B,W,U,A,P,S,I=j.props||N8,J=$.props,C=$.type;if(C=="svg"?Y="http://www.w3.org/2000/svg":C=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),Q!=null){for(K=0;K<Q.length;K++)if((A=Q[K])&&"setAttribute"in A==!!C&&(C?A.localName==C:A.nodeType==3)){_=A,Q[K]=null;break}}if(_==null){if(C==null)return document.createTextNode(J);_=document.createElementNS(Y,C,J.is&&J),G&&(z1.__m&&z1.__m($,Q),G=!1),Q=null}if(C==null)I===J||G&&_.data==J||(_.data=J);else{if(Q=Q&&W8.call(_.childNodes),!G&&Q!=null)for(I={},K=0;K<_.attributes.length;K++)I[(A=_.attributes[K]).name]=A.value;for(K in I)A=I[K],K=="dangerouslySetInnerHTML"?W=A:K=="children"||(K in J)||K=="value"&&("defaultValue"in J)||K=="checked"&&("defaultChecked"in J)||G8(_,K,null,A,Y);for(K in J)A=J[K],K=="children"?U=A:K=="dangerouslySetInnerHTML"?B=A:K=="value"?P=A:K=="checked"?S=A:G&&typeof A!="function"||I[K]===A||G8(_,K,A,I[K],Y);if(B)G||W&&(B.__html==W.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(W&&(_.innerHTML=""),_2($.type=="template"?_.content:_,U8(U)?U:[U],$,j,Z,C=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,Q,q,Q?Q[0]:j.__k&&N5(j,0),G,V),Q!=null)for(K=Q.length;K--;)z6(Q[K]);G||(K="value",C=="progress"&&P==null?_.removeAttribute("value"):P!=null&&(P!==_[K]||C=="progress"&&!P||C=="option"&&P!=I[K])&&G8(_,K,P,I[K],Y),K="checked",S!=null&&S!=_[K]&&G8(_,K,S,I[K],Y))}return _}function O6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){z1.__e(Y,j)}}function Y2(_,$,j){var Z,Y;if(z1.unmount&&z1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||O6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Q){z1.__e(Q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&Y2(Z[Y],$,j||typeof _.type!="function");j||z6(_.__e),_.__c=_.__=_.__e=void 0}function EZ(_,$,j){return this.constructor(_,j)}function z8(_,$,j){var Z,Y,Q,q;$==document&&($=document.documentElement),z1.__&&z1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Q=[],q=[],H6($,_=(!Z&&j||$).__k=L8(F8,null,[_]),Y||N8,N8,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?W8.call($.childNodes):null,Q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,q),j2(Q,_,q)}function Q2(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Q){this.props.value!=Q.value&&Z.forEach(function(q){q.__e=!0,W6(q)})},this.sub=function(Q){Z.add(Q);var q=Q.componentWillUnmount;Q.componentWillUnmount=function(){Z&&Z.delete(Q),q&&q.call(Q)}}),j.children}return $.__c="__cC"+t3++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}W8=V8.slice,z1={__e:function(_,$,j,Z){for(var Y,Q,q;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((Q=Y.constructor)&&Q.getDerivedStateFromError!=null&&(Y.setState(Q.getDerivedStateFromError(_)),q=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),q=Y.__d),q)return Y.__E=Y}catch(G){_=G}throw _}},n3=0,zZ=function(_){return _!=null&&_.constructor===void 0},X5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=L4({},this.state),typeof _=="function"&&(_=_(L4({},j),this.props)),_&&L4(j,_),_!=null&&this.__v&&($&&this._sb.push($),W6(this))},X5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),W6(this))},X5.prototype.render=F8,w4=[],s3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r3=function(_,$){return _.__v.__b-$.__v.__b},B8.__r=0,a3=/(PointerCapture)$|Capture$/i,F6=0,V6=g3(!1),B6=g3(!0),t3=0;var v4,F1,N6,m3,V5=0,q2=[],O1=z1,u3=O1.__b,h3=O1.__r,p3=O1.diffed,c3=O1.__c,l3=O1.unmount,d3=O1.__;function B5(_,$){O1.__h&&O1.__h(F1,_,V5||$),V5=0;var j=F1.__H||(F1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function u(_){return V5=1,J6(V2,_)}function J6(_,$,j){var Z=B5(v4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):V2(void 0,$),function(G){var V=Z.__N?Z.__N[0]:Z.__[0],K=Z.t(V,G);V!==K&&(Z.__N=[K,Z.__[1]],Z.__c.setState({}))}],Z.__c=F1,!F1.__f)){var Y=function(G,V,K){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(U){return U.__c});if(B.every(function(U){return!U.__N}))return!Q||Q.call(this,G,V,K);var W=Z.__c.props!==G;return B.some(function(U){if(U.__N){var A=U.__[0];U.__=U.__N,U.__N=void 0,A!==U.__[0]&&(W=!0)}}),Q&&Q.call(this,G,V,K)||W};F1.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:q}=F1;F1.componentWillUpdate=function(G,V,K){if(this.__e){var B=Q;Q=void 0,Y(G,V,K),Q=B}q&&q.call(this,G,V,K)},F1.shouldComponentUpdate=Y}return Z.__N||Z.__}function h(_,$){var j=B5(v4++,3);!O1.__s&&A6(j.__H,$)&&(j.__=_,j.u=$,F1.__H.__h.push(j))}function D6(_,$){var j=B5(v4++,4);!O1.__s&&A6(j.__H,$)&&(j.__=_,j.u=$,F1.__h.push(j))}function x(_){return V5=5,C0(function(){return{current:_}},[])}function G2(_,$,j){V5=6,D6(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function C0(_,$){var j=B5(v4++,7);return A6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function y(_,$){return V5=8,C0(function(){return _},$)}function K2(_){var $=F1.context[_.__c],j=B5(v4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(F1)),$.props.value):_.__}function X2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function N2(_){var $=B5(v4++,10),j=u();return $.__=_,F1.componentDidCatch||(F1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function MZ(){for(var _;_=q2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(X8),$.__h.some(L6),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){F1=null,u3&&u3(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),d3&&d3(_,$)},O1.__r=function(_){h3&&h3(_),v4=0;var $=(F1=_.__c).__H;$&&(N6===F1?($.__h=[],F1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(X8),$.__h.some(L6),$.__h=[],v4=0)),N6=F1},O1.diffed=function(_){p3&&p3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(q2.push($)!==1&&m3===O1.requestAnimationFrame||((m3=O1.requestAnimationFrame)||IZ)(MZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),N6=F1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(X8),j.__h=j.__h.filter(function(Z){return!Z.__||L6(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],O1.__e(Z,j.__v)}}),c3&&c3(_,$)},O1.unmount=function(_){l3&&l3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{X8(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&O1.__e($,j.__v))};var i3=typeof requestAnimationFrame=="function";function IZ(_){var $,j=function(){clearTimeout(Z),i3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);i3&&($=requestAnimationFrame(j))}function X8(_){var $=F1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),F1=$}function L6(_){var $=F1;_.__c=_.__(),F1=$}function A6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function V2(_,$){return typeof $=="function"?$(_):$}var B2=function(_,$,j,Z){var Y;$[0]=0;for(var Q=1;Q<$.length;Q++){var q=$[Q++],G=$[Q]?($[0]|=q?1:2,j[$[Q++]]):$[++Q];q===3?Z[0]=G:q===4?Z[1]=Object.assign(Z[1]||{},G):q===5?(Z[1]=Z[1]||{})[$[++Q]]=G:q===6?Z[1][$[++Q]]+=G+"":q?(Y=_.apply(G,B2(_,G,j,["",null])),Z.push(Y),G[0]?$[0]|=2:($[Q-2]=0,$[Q]=Y)):Z.push(G)}return Z},o3=new Map;function kZ(_){var $=o3.get(this);return $||($=new Map,o3.set(this,$)),($=B2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,Q=1,q="",G="",V=[0],K=function(U){Q===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,U,q):Q===3&&(U||q)?(V.push(3,U,q),Q=2):Q===2&&q==="..."&&U?V.push(4,U,0):Q===2&&q&&!U?V.push(5,0,!0,q):Q>=5&&((q||!U&&Q===5)&&(V.push(Q,0,q,Y),Q=6),U&&(V.push(Q,U,0,Y),Q=6)),q=""},B=0;B<j.length;B++){B&&(Q===1&&K(),K(B));for(var W=0;W<j[B].length;W++)Z=j[B][W],Q===1?Z==="<"?(K(),V=[V],Q=3):q+=Z:Q===4?q==="--"&&Z===">"?(Q=1,q=""):q=Z+q[0]:G?Z===G?G="":q+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(K(),Q=1):Q&&(Z==="="?(Q=5,Y=q,q=""):Z==="/"&&(Q<5||j[B][W+1]===">")?(K(),Q===3&&(V=V[0]),Q=V,(V=V[0]).push(2,0,Q),Q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(K(),Q=2):q+=Z),Q===3&&q==="!--"&&(Q=4,V=V[0])}return K(),V}(_)),$),arguments,[])).length>1?$:$[0]}var L=kZ.bind(L8);var e1={};FZ(e1,{uploadWorkspaceFile:()=>O8,uploadMedia:()=>S6,updateWorkspaceFile:()=>dZ,submitAdaptiveCardAction:()=>x6,streamSidePrompt:()=>pZ,stopAutoresearch:()=>bZ,steerAgentQueueItem:()=>hZ,setWorkspaceVisibility:()=>g5,setAgentThoughtVisibility:()=>w6,sendPeerAgentMessage:()=>wZ,sendAgentMessage:()=>a4,searchPosts:()=>M6,restoreChatBranch:()=>RZ,respondToAgentRequest:()=>H8,renameWorkspaceFile:()=>m6,renameChatBranch:()=>xZ,removeAgentQueueItem:()=>uZ,pruneChatBranch:()=>yZ,moveWorkspaceEntry:()=>u6,getWorkspaceTree:()=>f5,getWorkspaceRawUrl:()=>J8,getWorkspaceFile:()=>b5,getWorkspaceDownloadUrl:()=>D8,getWorkspaceBranch:()=>lZ,getTimeline:()=>r4,getThumbnailUrl:()=>v6,getThread:()=>I6,getPostsByHashtag:()=>E6,getMediaUrl:()=>b_,getMediaText:()=>f6,getMediaInfo:()=>W5,getMediaBlob:()=>cZ,getChatBranches:()=>SZ,getAutoresearchStatus:()=>fZ,getAgents:()=>P6,getAgentThought:()=>R6,getAgentStatus:()=>T6,getAgentQueueState:()=>mZ,getAgentModels:()=>v5,getAgentContext:()=>vZ,getActiveChatAgents:()=>C6,forkChatBranch:()=>w5,dismissAutoresearch:()=>gZ,deleteWorkspaceFile:()=>h6,deletePost:()=>k6,createWorkspaceFile:()=>g6,createReply:()=>TZ,createPost:()=>PZ,attachWorkspaceFile:()=>b6,addToWhitelist:()=>y6,SSEClient:()=>A8});async function t0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function W2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Q of $)if(Q.startsWith("event:"))j=Q.slice(6).trim()||"message";else if(Q.startsWith("data:"))Z.push(Q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function CZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:q,done:G}=await j.read();if(G)break;Y+=Z.decode(q,{stream:!0});let V=Y.split(`

`);Y=V.pop()||"";for(let K of V){let B=W2(K);if(B)$(B.event,B.data)}}Y+=Z.decode();let Q=W2(Y);if(Q)$(Q.event,Q.data)}async function r4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return t0(Z)}async function E6(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return t0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function M6(_,$=50,j=0,Z=null,Y="current",Q=null){let q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=Y?`&scope=${encodeURIComponent(Y)}`:"",V=Q?`&root_chat_jid=${encodeURIComponent(Q)}`:"";return t0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${G}${V}`)}async function I6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return t0(`/thread/${_}${j}`)}async function PZ(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return t0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function TZ(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return t0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function k6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return t0(Y,{method:"DELETE"})}async function a4(_,$,j=null,Z=[],Y=null,Q=null){let q=Q?`?chat_jid=${encodeURIComponent(Q)}`:"",G={content:$,thread_id:j,media_ids:Z};if(Y==="auto"||Y==="queue"||Y==="steer")G.mode=Y;return t0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(G)})}async function C6(){return t0("/agent/active-chats")}async function SZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return t0(`/agent/branches${Z}`)}async function w5(_,$={}){return t0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function xZ(_,$={}){return t0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function yZ(_){return t0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function RZ(_,$={}){return t0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function wZ(_,$,j,Z="auto",Y={}){let Q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return t0("/agent/peer-message",{method:"POST",body:JSON.stringify(Q)})}async function P6(){return t0("/agent/roster")}async function T6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/status${$}`)}async function vZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/context${$}`)}async function fZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/autoresearch/status${$}`)}async function bZ(_=null,$={}){return t0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function gZ(_=null){return t0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function mZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/queue-state${$}`)}async function uZ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function hZ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function v5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/models${$}`)}async function S6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function H8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function x6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function pZ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await CZ(j,(Q,q)=>{if($.onEvent?.(Q,q),Q==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Q==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Q==="side_prompt_done")Z=q;else if(Q==="side_prompt_error")Y=q}),Y){let Q=Error(Y?.error||"Side prompt failed");throw Q.payload=Y,Q}return Z}async function y6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function R6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return t0(j)}async function w6(_,$,j){return t0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function b_(_){return`/media/${_}`}function v6(_){return`/media/${_}/thumbnail`}async function W5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function f6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function cZ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function f5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return t0(Z)}async function lZ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return t0($)}async function b5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return t0(Y)}async function dZ(_,$){return t0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function b6(_){return t0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function O8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let Q=Y.toString(),q=Q?`/workspace/upload?${Q}`:"/workspace/upload",G=await fetch(""+q,{method:"POST",body:Z});if(!G.ok){let V=await G.json().catch(()=>({error:"Upload failed"})),K=Error(V.error||`HTTP ${G.status}`);throw K.status=G.status,K.code=V.code,K}return G.json()}async function g6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),Q=Error(Y.error||`HTTP ${Z.status}`);throw Q.status=Z.status,Q.code=Y.code,Q}return Z.json()}async function m6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function u6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function h6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return t0($,{method:"DELETE"})}async function g5(_,$=!1){return t0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function J8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function D8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class A8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function E8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function iZ(_,$){let j=E8(_),Z=E8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function p6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function c6(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},Q=String($||"").trim().toLowerCase();if(!Q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?Q:`${Y.value}${Q}`,updatedAt:j}}function oZ(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,Q=[];for(let q=0;q<j;q+=1)Q.push((Y+q)%j);return Q}function nZ(_,$,j=0,Z=(Y)=>Y){let Y=E8($);if(!Y)return-1;let Q=Array.isArray(_)?_:[],q=oZ(Q.length,j),G=Q.map((V)=>E8(Z(V)));for(let V of q)if(G[V].startsWith(Y))return V;for(let V of q)if(G[V].includes(Y))return V;return-1}function l6(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let Q=Z(Y[j]);if(iZ(Q,$))return j}return nZ(Y,$,0,Z)}function J_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function N1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function U5(_,$=!1){let j=J_(_);if(j===null)return $;return j==="true"}function L5(_,$=null){let j=J_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function M8(_){return String(_||"").trim().toLowerCase()}function d6(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return M8($[1]||"")}function sZ(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=M8(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function U2(_,$,j={}){let Z=d6($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return sZ(_).filter((Q)=>{if(Y&&Q?.chat_jid===Y)return!1;return M8(Q?.agent_name).startsWith(Z)})}function i6(_){let $=M8(_);return $?`@${$} `:""}function L2(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function I8(_){let $=o6(_);return $?`@${$}`:""}function o6(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function n6(_,$=""){let j=String(_||""),Z=o6(j),Y=o6($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:Q,canSubmit:!1,kind:"info",message:`Already using ${Q}.`};if(Z!==j.trim())return{normalized:Z,handle:Q,canSubmit:!0,kind:"info",message:`Will save as ${Q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Q,canSubmit:!0,kind:"success",message:`Saving as ${Q}.`}}function F2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?I8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function rZ(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function k8(_,$={}){let j=I8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=rZ(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function z2(_,$,j){let Z=I8(_),Y=I8($),Q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Q||"branch"}.`}function aZ(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function F4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function C8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return F4(_)?"Compacting context":"Working..."}function tZ(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function P8(_,$=Date.now()){let j=aZ(_);if(j===null)return null;return tZ(Math.max(0,$-j))}function a_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:Q="Remove",icon:q="file"}){let G=`${_}-file-pill`,V=`${_}-file-name`,K=`${_}-file-remove`,B=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${G} title=${j||$} onClick=${Y}>
      ${B}
      <span class=${V}>${$}</span>
      ${Z&&L`
        <button
          class=${K}
          onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),Z()}}
          title=${Q}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var eZ=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function _Y({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,Q="Compact context",G=`${Z!=null?`Context: ${H2(Z)} / ${H2(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,V=9,K=2*Math.PI*9,B=j/100*K,W=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
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
                    stroke=${W}
                    stroke-width="2.5"
                    stroke-dasharray=${`${B} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function H2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function $Y(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K))Y.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Q);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function jY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K)){let B=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(B)Y.push(B[1])}else if(!K.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Q);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function ZY(_){let $=$Y(_||""),j=jY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function s6({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let Q=typeof Y?.content==="string"?Y.content:"",q=ZY(Q);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Q}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((G)=>L`
                                        <${a_}
                                            key=${"queue-msg-"+G}
                                            prefix="compose"
                                            label=${"msg:"+G}
                                            title=${"Message reference: "+G}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((G)=>{let V=G.split("/").pop()||G;return L`
                                            <${a_}
                                                key=${"queue-file-"+G}
                                                prefix="compose"
                                                label=${V}
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
    `}function O2({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:Q,onEnterSearch:q,onExitSearch:G,fileRefs:V=[],onRemoveFileRef:K,onClearFileRefs:B,messageRefs:W=[],onRemoveMessageRef:U,onClearMessageRefs:A,activeModel:P=null,modelUsage:S=null,thinkingLevel:I=null,supportsThinking:J=!1,contextUsage:C=null,onContextCompact:T,notificationsEnabled:d=!1,notificationPermission:c="default",onToggleNotifications:_0,onModelChange:j0,onModelStateChange:b,activeEditorPath:w=null,onAttachEditorFile:H,onOpenFilePill:R,followupQueueItems:p=[],onInjectQueuedFollowup:G0,onRemoveQueuedFollowup:l,onSubmitIntercept:Z0,onMessageResponse:$0,onPopOutChat:K0,isAgentActive:V0=!1,activeChatAgents:B0=[],currentChatJid:O0="web:default",connectionStatus:E0="connected",onSetFileRefs:M0,onSetMessageRefs:n0,onSubmitError:R0,onSwitchChat:P0,onRenameSession:s0,isRenameSessionInProgress:r0=!1,onCreateSession:h0,onDeleteSession:a0,onRestoreSession:d0,showQueueStack:Z1=!0,statusNotice:z0=null}){let[c0,Y1]=u(""),[G1,K_]=u(""),[J1,$1]=u([]),[u1,I1]=u(!1),[K1,p0]=u([]),[x1,k1]=u(0),[t,W0]=u(!1),[H0,N0]=u([]),[w0,x0]=u(0),[v0,k0]=u(!1),[f0,i0]=u(!1),[D0,g0]=u(!1),[J0,q0]=u(!1),[v,e]=u([]),[L0,I0]=u(0),[m0,X1]=u(0),[D1,e0]=u(!1),[h1,X4]=u(0),[z_,n1]=u(null),[H_,X_]=u(()=>Date.now()),Q1=x(null),s1=x(null),N4=x(null),m_=x(null),Y5=x(null),u4=x(null),f1=x(null),O_=x(null),y1=x({value:"",updatedAt:0}),A1=x(0),V1=x(!1),u_=200,h_=(F)=>{let E=new Set,i=[];for(let Q0 of F||[]){if(typeof Q0!=="string")continue;let S0=Q0.trim();if(!S0||E.has(S0))continue;E.add(S0),i.push(S0)}return i},W1=()=>{let F=J_("piclaw_compose_history");if(!F)return[];try{let E=JSON.parse(F);if(!Array.isArray(E))return[];return h_(E)}catch{return[]}},__=(F)=>{N1("piclaw_compose_history",JSON.stringify(F))},u0=x(W1()),C1=x(-1),E_=x(""),$_=c0.trim()||J1.length>0||V.length>0||W.length>0,h4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),_4=typeof window<"u"&&typeof Notification<"u",p4=typeof window<"u"?Boolean(window.isSecureContext):!1,Q5=_4&&p4&&c!=="denied",j4=c==="granted"&&d,p_=F4(z0),M5=C8(z0),I5=typeof z0?.detail==="string"&&z0.detail.trim()?z0.detail.trim():"",U1=p_?P8(z0,H_):null,R1=j4?"Disable notifications":"Enable notifications",q5=J1.length>0||V.length>0||W.length>0,M_=E0==="disconnected"?"Reconnecting":String(E0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),j_=E0==="disconnected"?"Reconnecting":`Connection: ${M_}`,p1=(Array.isArray(B0)?B0:[]).filter((F)=>!F?.archived_at),P1=(()=>{for(let F of Array.isArray(B0)?B0:[]){let E=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(E&&E===O0)return F}return null})(),b1=Boolean(P1&&P1.chat_jid===(P1.root_chat_jid||P1.chat_jid)),H1=C0(()=>{let F=new Set,E=[];for(let i of Array.isArray(B0)?B0:[]){let Q0=typeof i?.chat_jid==="string"?i.chat_jid.trim():"";if(!Q0||Q0===O0||F.has(Q0))continue;if(!(typeof i?.agent_name==="string"?i.agent_name.trim():""))continue;F.add(Q0),E.push(i)}return E},[B0,O0]),I_=H1.length>0,k_=I_&&typeof P0==="function",C_=I_&&typeof d0==="function",Z4=Boolean(r0||V1.current),Z_=!j&&typeof s0==="function"&&!Z4,r1=!j&&typeof h0==="function",P_=!j&&typeof a0==="function"&&!b1,V4=!j&&(k_||C_||Z_||r1||P_),E1=P||"",Y4=J&&I?` (${I})`:"",c4=Y4.trim()?`${I}`:"",l4=typeof S?.hint_short==="string"?S.hint_short.trim():"",T_=[c4||null,l4||null].filter(Boolean).join(" • "),d4=[E1?`Current model: ${E1}${Y4}`:null,S?.plan?`Plan: ${S.plan}`:null,l4||null,S?.primary?.reset_description||null,S?.secondary?.reset_description||null].filter(Boolean),G5=f0?"Switching model…":d4.join(" • ")||`Current model: ${E1}${Y4} (tap to open model picker)`,c_=(F)=>{if(!F||typeof F!=="object")return;let E=F.model??F.current;if(typeof b==="function")b({model:E??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(E&&typeof j0==="function")j0(E)},l_=(F)=>{let E=F||Q1.current;if(!E)return;E.style.height="auto",E.style.height=`${E.scrollHeight}px`,E.style.overflowY="hidden"},A4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){W0(!1),p0([]);return}let E=F.toLowerCase().split(" ")[0];if(E.length<1){W0(!1),p0([]);return}let i=eZ.filter((Q0)=>Q0.name.startsWith(E)||Q0.name.replace(/-/g,"").startsWith(E.replace(/-/g,"")));if(i.length>0&&!(i.length===1&&i[0].name===E))k0(!1),N0([]),p0(i),k1(0),W0(!0);else W0(!1),p0([])},N_=(F)=>{let E=c0,i=E.indexOf(" "),Q0=i>=0?E.slice(i):"",S0=F.name+Q0;Y1(S0),W0(!1),p0([]),requestAnimationFrame(()=>{let L1=Q1.current;if(!L1)return;let S1=S0.length;L1.selectionStart=S1,L1.selectionEnd=S1,L1.focus()})},S_=(F)=>{if(d6(F)==null){k0(!1),N0([]);return}let E=U2(p1,F,{currentChatJid:O0});if(E.length>0&&!(E.length===1&&i6(E[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))W0(!1),p0([]),N0(E),x0(0),k0(!0);else k0(!1),N0([])},w1=(F)=>{let E=i6(F?.agent_name);if(!E)return;Y1(E),k0(!1),N0([]),requestAnimationFrame(()=>{let i=Q1.current;if(!i)return;let Q0=E.length;i.selectionStart=Q0,i.selectionEnd=Q0,i.focus()})},E4=()=>{if(j||!k_&&!C_&&!Z_&&!r1&&!P_)return!1;return y1.current={value:"",updatedAt:0},g0(!1),W0(!1),p0([]),k0(!1),N0([]),q0(!0),!0},d_=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!k_&&!C_&&!Z_&&!r1&&!P_)return;if(J0){y1.current={value:"",updatedAt:0},q0(!1);return}E4()},M4=(F)=>{let E=typeof F==="string"?F.trim():"";if(q0(!1),!E||E===O0){requestAnimationFrame(()=>Q1.current?.focus());return}P0?.(E)},I4=async(F)=>{let E=typeof F==="string"?F.trim():"";if(q0(!1),!E||typeof d0!=="function"){requestAnimationFrame(()=>Q1.current?.focus());return}try{await d0(E)}catch(i){console.warn("Failed to restore session:",i),requestAnimationFrame(()=>Q1.current?.focus())}},i4=(F)=>{let i=(Array.isArray(F)?F:[]).findIndex((Q0)=>!Q0?.disabled);return i>=0?i:0},M1=C0(()=>{let F=[];for(let E of H1){let i=Boolean(E?.archived_at),Q0=typeof E?.agent_name==="string"?E.agent_name.trim():"",S0=typeof E?.chat_jid==="string"?E.chat_jid.trim():"";if(!Q0||!S0)continue;F.push({type:"session",key:`session:${S0}`,label:`@${Q0} — ${S0}${E?.is_active?" active":""}${i?" archived":""}`,chat:E,disabled:i?!C_:!k_})}if(r1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(Z_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:Z4});if(P_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[H1,C_,k_,r1,Z_,P_,Z4]),g1=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof s0!=="function"||r0||V1.current)return;V1.current=!0,q0(!1);try{await s0()}catch(E){console.warn("Failed to rename session:",E)}finally{V1.current=!1}requestAnimationFrame(()=>Q1.current?.focus())},i_=async()=>{if(typeof h0!=="function")return;q0(!1);try{await h0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},o_=async()=>{if(typeof a0!=="function")return;q0(!1);try{await a0(O0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},n_=(F)=>{if(j)K_(F);else Y1(F),A4(F),S_(F);requestAnimationFrame(()=>l_())},k4=(F)=>{let E=j?G1:c0,i=E&&!E.endsWith(`
`)?`
`:"",Q0=`${E}${i}${F}`.trimStart();n_(Q0)},C4=(F)=>{let E=F?.command?.model_label;if(E)return E;let i=F?.command?.message;if(typeof i==="string"){let Q0=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(Q0?.[1])return Q0[1].trim()}return null},P4=async(F)=>{if(j||f0)return;i0(!0);try{let E=await a4("default",F,null,[],null,O0),i=C4(E);c_({model:i??P??null,thinking_level:E?.command?.thinking_level,supports_thinking:E?.command?.supports_thinking});try{let Q0=await v5(O0);if(Q0)c_(Q0)}catch{}return _?.(),!0}catch(E){return console.error("Failed to switch model:",E),alert("Failed to switch model: "+E.message),!1}finally{i0(!1)}},x_=async()=>{await P4("/cycle-model")},Y_=async(F)=>{if(!F||f0)return;if(await P4(`/model ${F}`))g0(!1)},T4=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let E=F.chat;if(E?.archived_at)I4(E.chat_jid);else M4(E.chat_jid);return}if(F.type==="action"){if(F.action==="new"){i_();return}if(F.action==="rename"){g1();return}if(F.action==="delete")o_()}},o4=(F)=>{F.preventDefault(),F.stopPropagation(),y1.current={value:"",updatedAt:0},q0(!1),g0((E)=>!E)},S4=async()=>{if(j)return;T?.(),await y_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},x4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return V0?"queue":void 0},y_=async(F,E,i={})=>{let{includeMedia:Q0=!0,includeFileRefs:S0=!0,includeMessageRefs:L1=!0,clearAfterSubmit:S1=!0,recordHistory:c1=!0}=i||{},B4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:c0,n4=typeof B4==="string"?B4:"";if(!n4.trim()&&(Q0?J1.length===0:!0)&&(S0?V.length===0:!0)&&(L1?W.length===0:!0))return;W0(!1),p0([]),k0(!1),N0([]),q0(!1),n1(null);let B_=Q0?[...J1]:[],q_=S0?[...V]:[],W4=L1?[...W]:[],U4=n4.trim();if(c1&&U4){let R_=u0.current,l1=h_(R_.filter((y4)=>y4!==U4));if(l1.push(U4),l1.length>200)l1.splice(0,l1.length-200);u0.current=l1,__(l1),C1.current=-1,E_.current=""}let s_=()=>{if(Q0)$1([...B_]);if(S0)M0?.(q_);if(L1)n0?.(W4);Y1(U4),requestAnimationFrame(()=>l_())};if(S1)Y1(""),$1([]),B?.(),A?.();(async()=>{try{if(await Z0?.({content:U4,submitMode:E,fileRefs:q_,messageRefs:W4,mediaFiles:B_})){_?.();return}let l1=[];for(let U_ of B_){let Q4=await S6(U_);l1.push(Q4.id)}let y4=q_.length?`Files:
${q_.map((U_)=>`- ${U_}`).join(`
`)}`:"",$8=W4.length?`Referenced messages:
${W4.map((U_)=>`- message:${U_}`).join(`
`)}`:"",W_=l1.length?`Attachments:
${l1.map((U_,Q4)=>{let s4=B_[Q4]?.name||`attachment-${Q4+1}`;return`- attachment:${U_} (${s4})`}).join(`
`)}`:"",j8=[U4,y4,$8,W_].filter(Boolean).join(`

`),R4=await a4("default",j8,null,l1,x4(E),O0);if($0?.(R4),R4?.command){c_({model:R4.command.model_label??P??null,thinking_level:R4.command.thinking_level,supports_thinking:R4.command.supports_thinking});try{let U_=await v5(O0);if(U_)c_(U_)}catch{}}_?.()}catch(R_){if(S1)s_();let l1=R_?.message||"Failed to send message.";n1(l1),R0?.(l1),console.error("Failed to post:",R_)}})()},z=(F)=>{G0?.(F)},k=y((F)=>{if(j||!D0&&!J0||F?.isComposing)return!1;let E=()=>{F.preventDefault?.(),F.stopPropagation?.()},i=()=>{y1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(E(),i(),D0)g0(!1);if(J0)q0(!1);return!0}if(D0){if(F.key==="ArrowDown"){if(E(),i(),v.length>0)I0((Q0)=>(Q0+1)%v.length);return!0}if(F.key==="ArrowUp"){if(E(),i(),v.length>0)I0((Q0)=>(Q0-1+v.length)%v.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&v.length>0)return E(),i(),Y_(v[Math.max(0,Math.min(L0,v.length-1))]),!0;if(p6(F)&&v.length>0){E();let Q0=c6(y1.current,F.key);y1.current=Q0;let S0=l6(v,Q0.value,L0,(L1)=>L1);if(S0>=0)I0(S0);return!0}}if(J0){if(F.key==="ArrowDown"){if(E(),i(),M1.length>0)X1((Q0)=>(Q0+1)%M1.length);return!0}if(F.key==="ArrowUp"){if(E(),i(),M1.length>0)X1((Q0)=>(Q0-1+M1.length)%M1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&M1.length>0)return E(),i(),T4(M1[Math.max(0,Math.min(m0,M1.length-1))]),!0;if(p6(F)&&M1.length>0){E();let Q0=c6(y1.current,F.key);y1.current=Q0;let S0=l6(M1,Q0.value,m0,(L1)=>L1.label);if(S0>=0)X1(S0);return!0}}return!1},[j,D0,J0,v,L0,M1,m0,Y_]),m=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),K_(""),G?.();return}if(k(F))return;let E=Q1.current?.value??(j?G1:c0);if(L2(F,E,{searchMode:j,showSessionSwitcherButton:V4})){F.preventDefault(),E4();return}if(v0&&H0.length>0){let i=Q1.current?.value??(j?G1:c0);if(!String(i||"").match(/^@([a-zA-Z0-9_-]*)$/))k0(!1),N0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),x0((Q0)=>(Q0+1)%H0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),x0((Q0)=>(Q0-1+H0.length)%H0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),w1(H0[w0]);return}if(F.key==="Escape"){F.preventDefault(),k0(!1),N0([]);return}}}if(t&&K1.length>0){let i=Q1.current?.value??(j?G1:c0);if(!String(i||"").startsWith("/"))W0(!1),p0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),k1((Q0)=>(Q0+1)%K1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),k1((Q0)=>(Q0-1+K1.length)%K1.length);return}if(F.key==="Tab"){F.preventDefault(),N_(K1[x1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!E.includes(" ")){F.preventDefault();let S0=K1[x1];W0(!1),p0([]),y_(S0.name);return}}if(F.key==="Escape"){F.preventDefault(),W0(!1),p0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let i=Q1.current;if(!i)return;let Q0=i.value||"",S0=i.selectionStart===0&&i.selectionEnd===0,L1=i.selectionStart===Q0.length&&i.selectionEnd===Q0.length;if(F.key==="ArrowUp"&&S0||F.key==="ArrowDown"&&L1){let S1=u0.current;if(!S1.length)return;F.preventDefault();let c1=C1.current;if(F.key==="ArrowUp"){if(c1===-1)E_.current=Q0,c1=S1.length-1;else if(c1>0)c1-=1;C1.current=c1,n_(S1[c1]||"")}else{if(c1===-1)return;if(c1<S1.length-1)c1+=1,C1.current=c1,n_(S1[c1]||"");else C1.current=-1,n_(E_.current||""),E_.current=""}requestAnimationFrame(()=>{let B4=Q1.current;if(!B4)return;let n4=B4.value.length;B4.selectionStart=n4,B4.selectionEnd=n4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(E.trim())Y?.(E.trim(),Z)}else y_(E,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(E.trim())Y?.(E.trim(),Z)}else y_(E)},f=(F)=>{let E=Array.from(F||[]).filter((i)=>i instanceof File&&!String(i.name||"").startsWith(".DS_Store"));if(!E.length)return;$1((i)=>[...i,...E]),n1(null)},n=(F)=>{f(F.target.files),F.target.value=""},X0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),A1.current+=1,I1(!0)},U0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),A1.current=Math.max(0,A1.current-1),A1.current===0)I1(!1)},F0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";I1(!0)},Y0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),A1.current=0,I1(!1),f(F.dataTransfer?.files||[])},T0=(F)=>{if(j)return;let E=F.clipboardData?.items;if(!E||!E.length)return;let i=[];for(let Q0 of E){if(Q0.kind!=="file")continue;let S0=Q0.getAsFile?.();if(S0)i.push(S0)}if(i.length>0)F.preventDefault(),f(i)},T1=(F)=>{$1((E)=>E.filter((i,Q0)=>Q0!==F))},V_=()=>{n1(null),$1([]),B?.(),A?.()},Q_=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:E,longitude:i,accuracy:Q0}=F.coords,S0=`${E.toFixed(5)}, ${i.toFixed(5)}`,L1=Number.isFinite(Q0)?` ±${Math.round(Q0)}m`:"",S1=`https://maps.google.com/?q=${E},${i}`,c1=`Location: ${S0}${L1} ${S1}`;k4(c1)},(F)=>{let E=F?.message||"Unable to retrieve location.";alert(`Location error: ${E}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};h(()=>{if(!D0)return;y1.current={value:"",updatedAt:0},e0(!0),v5(O0).then((F)=>{let E=Array.isArray(F?.models)?F.models.filter((i)=>typeof i==="string"&&i.trim().length>0):[];E.sort((i,Q0)=>i.localeCompare(Q0,void 0,{sensitivity:"base"})),e(E),c_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),e([])}).finally(()=>{e0(!1)})},[D0,P]),h(()=>{if(j)g0(!1),q0(!1),W0(!1),p0([]),k0(!1),N0([])},[j]),h(()=>{if(J0&&!V4)q0(!1)},[J0,V4]),h(()=>{if(!D0)return;let F=v.findIndex((E)=>E===P);I0(F>=0?F:0)},[D0,v,P]),h(()=>{if(!J0)return;X1(i4(M1)),y1.current={value:"",updatedAt:0}},[J0,O0]),h(()=>{if(!D0)return;let F=(E)=>{let i=m_.current,Q0=Y5.current,S0=E.target;if(i&&i.contains(S0))return;if(Q0&&Q0.contains(S0))return;g0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[D0]),h(()=>{if(!J0)return;let F=(E)=>{let i=u4.current,Q0=f1.current,S0=E.target;if(i&&i.contains(S0))return;if(Q0&&Q0.contains(S0))return;q0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[J0]),h(()=>{if(j||!D0&&!J0)return;let F=(E)=>{k(E)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,D0,J0,k]),h(()=>{if(!D0)return;let F=m_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,L0,v]),h(()=>{if(!J0)return;let F=u4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,m0,M1.length]),h(()=>{let F=()=>{let L1=O_.current?.clientWidth||0;X4((S1)=>S1===L1?S1:L1)};F();let E=O_.current,i=0,Q0=()=>{if(i)cancelAnimationFrame(i);i=requestAnimationFrame(()=>{i=0,F()})},S0=null;if(E&&typeof ResizeObserver<"u")S0=new ResizeObserver(()=>Q0()),S0.observe(E);if(typeof window<"u")window.addEventListener("resize",Q0);return()=>{if(i)cancelAnimationFrame(i);if(S0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",Q0)}},[j,P,P1?.agent_name,V4,C?.percent]);let _6=(F)=>{let E=F.target.value;if(n1(null),J0)q0(!1);l_(F.target),n_(E)};return h(()=>{requestAnimationFrame(()=>l_())},[c0,G1,j]),h(()=>{if(!p_)return;X_(Date.now());let F=setInterval(()=>X_(Date.now()),1000);return()=>clearInterval(F)},[p_,z0?.started_at,z0?.startedAt]),h(()=>{if(j)return;S_(c0)},[p1,O0,c0,j]),L`
        <div class="compose-box">
            ${Z1&&!j&&L`
                <${s6}
                    items=${p}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${l}
                    onOpenFilePill=${R}
                />
            `}
            ${z0&&L`
                <div
                    class=${`compose-inline-status${p_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${I5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${M5}</span>
                        ${U1&&L`<span class="compose-inline-status-elapsed">${U1}</span>`}
                    </div>
                    ${I5&&L`<div class="compose-inline-status-detail">${I5}</div>`}
                </div>
            `}
            ${z_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${z_}</div>
            `}
            <div
                class=${`compose-input-wrapper${u1?" drag-active":""}`}
                onDragEnter=${X0}
                onDragOver=${F0}
                onDragLeave=${U0}
                onDrop=${Y0}
            >
                <div class="compose-input-main">
                    ${q5&&L`
                        <div class="compose-file-refs">
                            ${W.map((F)=>{return L`
                                    <${a_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(F)}
                                    />
                                `})}
                            ${V.map((F)=>{let E=F.split("/").pop()||F;return L`
                                    <${a_}
                                        prefix="compose"
                                        label=${E}
                                        title=${F}
                                        onClick=${()=>R?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(F)}
                                    />
                                `})}
                            ${J1.map((F,E)=>{let i=F?.name||`attachment-${E+1}`;return L`
                                    <${a_}
                                        key=${i+E}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>T1(E)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${V_}
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
                        value=${j?G1:c0}
                        onInput=${_6}
                        onKeyDown=${m}
                        onPaste=${T0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${v0&&H0.length>0&&L`
                        <div class="slash-autocomplete" ref=${N4}>
                            ${H0.map((F,E)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${E===w0?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),w1(F)}}
                                    onMouseEnter=${()=>x0(E)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${t&&K1.length>0&&L`
                        <div class="slash-autocomplete" ref=${s1}>
                            ${K1.map((F,E)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${E===x1?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),N_(F)}}
                                    onMouseEnter=${()=>k1(E)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D0&&!j&&L`
                        <div class="compose-model-popup" ref=${m_} tabIndex="-1" onKeyDown=${k}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${D1&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!D1&&v.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!D1&&v.map((F,E)=>L`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${L0===E?" active":""}${P===F?" current-model":""}`}
                                        onClick=${()=>{Y_(F)}}
                                        disabled=${f0}
                                    >
                                        ${F}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{x_()}}
                                    disabled=${f0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${J0&&!j&&L`
                        <div class="compose-model-popup" ref=${u4} tabIndex="-1" onKeyDown=${k}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return F2(P1,O0)})()}
                                    </div>
                                `}
                                ${!I_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${I_&&H1.map((F,E)=>{let i=Boolean(F.archived_at),S0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!i&&typeof a0==="function",L1=k8(F,{currentChatJid:O0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${i?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${i?" archived":""}${m0===E?" active":""}`}
                                                onClick=${()=>{if(i){I4(F.chat_jid);return}M4(F.chat_jid)}}
                                                disabled=${i?!C_:!k_}
                                                title=${i?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${L1}
                                            </button>
                                            ${S0&&L`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(S1)=>{S1.stopPropagation(),q0(!1),a0(F.chat_jid)}}
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
                            ${(r1||Z_||P_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${r1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${M1.findIndex((F)=>F.key==="action:new")===m0?" active":""}`}
                                            onClick=${()=>{i_()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${Z_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${M1.findIndex((F)=>F.key==="action:rename")===m0?" active":""}`}
                                            onClick=${(F)=>{g1(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${Z4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${P_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${M1.findIndex((F)=>F.key==="action:delete")===m0?" active":""}`}
                                            onClick=${()=>{o_()}}
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
                <div class="compose-footer" ref=${O_}>
                    ${!j&&P&&L`
                    <div class="compose-meta-row">
                        ${!j&&P&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${Y5}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${G5}
                                    aria-label="Open model picker"
                                    onClick=${o4}
                                    disabled=${f0}
                                >
                                    ${f0?"Switching…":E1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!f0&&T_&&L`
                                        <span class="compose-model-usage-hint" title=${G5}>
                                            ${T_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&C&&C.percent!=null&&L`
                            <${_Y} usage=${C} onCompact=${S4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${V4&&L`
                        ${P1?.agent_name&&L`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${P1.chat_jid||O0}
                                aria-label=${`Manage sessions for @${P1.agent_name}`}
                                onClick=${d_}
                            >@${P1.agent_name}</button>
                        `}
                        <button
                            ref=${f1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${J0?" active":""}`}
                            onClick=${d_}
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
                    ${h4&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${Q_}
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
                            class=${`icon-btn notification-btn${j4?" active":""}`}
                            onClick=${_0}
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
                        ${w&&H&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${w}`}
                                type="button"
                                disabled=${V.includes(w)}
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
                                <span class="compose-connection-status connection-status ${E0}" title=${j_}>
                                    ${M_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{y_()}}
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
    `}var t6="piclaw_theme",S8="piclaw_tint",A2="piclaw_chat_themes",u5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},E2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},J2={default:{label:"Default",mode:"auto",light:u5,dark:E2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},YY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],t4={theme:"default",tint:null},M2="light",r6=!1;function x8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function z5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Q)=>Q+Q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function QY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let Q=parseInt(Y[1],10),q=parseInt(Y[2],10),G=parseInt(Y[3],10);if(![Q,q,G].every((K)=>Number.isFinite(K)))return null;let V=`#${[Q,q,G].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:Q,g:q,b:G,hex:V}}function I2(_){return z5(_)||QY(_)}function m5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),Q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${Q})`}function a6(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function qY(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*Q+0.0722*q}function GY(_){return qY(_)>0.4?"#000000":"#ffffff"}function k2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function e6(_){return J2[_]||J2.default}function KY(_){return _.mode==="auto"?k2():_.mode}function C2(_,$){let j=e6(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||u5}function P2(_,$,j){let Z=I2($);if(!Z)return _;let Y=z5(_.bgPrimary),Q=z5(_.bgSecondary),q=z5(_.bgHover),G=z5(_.borderColor);if(!Y||!Q||!q||!G)return _;let K=z5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:m5(Y,Z,0.08),bgSecondary:m5(Q,Z,0.12),bgHover:m5(q,Z,0.16),borderColor:m5(G,Z,0.08),accent:Z.hex,accentHover:K?m5(Z,K,0.18):Z.hex}}function XY(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=I2(Z),Q=Y?a6(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Y?a6(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Y?a6(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V=Y?GY(Y):$==="dark"?"#000000":"#ffffff",K={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":q,"--accent-soft-strong":G,"--accent-contrast-text":V,"--danger-color":_.danger||u5.danger,"--success-color":_.success||u5.success,"--search-highlight-color":Q||"rgba(29, 155, 240, 0.2)"};Object.entries(K).forEach(([B,W])=>{if(W)j.style.setProperty(B,W)})}function NY(){if(typeof document>"u")return;let _=document.documentElement;YY.forEach(($)=>_.style.removeProperty($))}function F5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function D2(_){let $=x8(t4?.theme||"default"),j=t4?.tint?String(t4.tint).trim():null,Z=C2($,_);if($==="default"&&j)Z=P2(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?E2.bgPrimary:u5.bgPrimary}function VY(_,$){if(typeof document>"u")return;let j=F5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=F5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",D2("light"));let Y=F5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",D2("dark"));let Q=F5("msapplication-TileColor");if(Q&&_)Q.setAttribute("content",_);let q=F5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let G=F5("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function BY(){if(typeof window>"u")return;let _={...t4,mode:M2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function T2(){try{let _=J_(A2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function WY(_,$,j){let Z=T2();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};N1(A2,JSON.stringify(Z))}function UY(_){if(!_)return null;return T2()[_]||null}function S2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function _$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=x8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=e6(j),Q=KY(Y),q=C2(j,Q);t4={theme:j,tint:Z},M2=Q;let G=document.documentElement;G.dataset.theme=Q,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=Q;let V=q;if(j==="default"&&Z)V=P2(q,Z,Q);if(j==="default"&&!Z)NY();else XY(V,Q);if(VY(V.bgPrimary,Q),BY(),$.persist!==!1)if(N1(t6,j),Z)N1(S8,Z);else N1(S8,"")}function T8(){if(e6(t4.theme).mode!=="auto")return;_$(t4,{persist:!1})}function x2(){if(typeof window>"u")return()=>{};let _=S2(),$=UY(_),j=$?x8($.theme||"default"):x8(J_(t6)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=J_(S8);return Y?Y.trim():null})();if(_$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!r6){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",T8);else if(Y.addListener)Y.addListener(T8);return r6=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",T8);else if(Y.removeListener)Y.removeListener(T8);r6=!1}}return()=>{}}function y2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||S2(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(WY($,j||"default",Z),_$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")N1(t6,j||"default"),N1(S8,Z||"")}function R2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return k2()}var y8=/#(\w+)/g,LY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),FY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),zY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),HY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},OY=new Set(["http:","https:","mailto:",""]);function $$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function e4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!OY.has(Z.protocol))return null;return Z.href}catch{return null}}function w2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Q;while(Q=Y.nextNode())Z.push(Q);for(let q of Z){let G=q.tagName.toLowerCase();if(!FY.has(G)){let K=q.parentNode;if(!K)continue;while(q.firstChild)K.insertBefore(q.firstChild,q);K.removeChild(q);continue}let V=HY[G]||new Set;for(let K of Array.from(q.attributes)){let B=K.name.toLowerCase(),W=K.value;if(B.startsWith("on")){q.removeAttribute(K.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(V.has(B)||zY.has(B)){if(B==="href"){let U=e4(W);if(!U)q.removeAttribute(K.name);else if(q.setAttribute(K.name,U),G==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let U=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,A=e4(U,{allowDataImage:G==="img"});if(!A)q.removeAttribute(K.name);else q.setAttribute(K.name,A)}continue}q.removeAttribute(K.name)}}return j.body.innerHTML}function v2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function R8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=v2(j);if(Y===j)break;j=Y}return j}function JY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],Q=!1,q=[];for(let G of j){if(!Q&&G.trim().match(/^```mermaid\s*$/i)){Q=!0,q=[];continue}if(Q&&G.trim().match(/^```\s*$/)){let V=Z.length;Z.push(q.join(`
`)),Y.push(`@@MERMAID_BLOCK_${V}@@`),Q=!1,q=[];continue}if(Q)q.push(G);else Y.push(G)}if(Q)Y.push("```mermaid"),Y.push(...q);return{text:Y.join(`
`),blocks:Z}}function DY(_){if(!_)return _;return R8(_,5)}function AY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function EY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function MY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),Q=$[Y]??"",q=DY(Q);return`<div class="mermaid-container" data-mermaid="${AY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function f2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var IY={span:new Set(["title","class","lang","dir"])};function kY(_,$){let j=IY[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Q;while(Q=Y.exec($)){let q=(Q[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let G=Q[2]??Q[3]??Q[4]??"";Z.push(` ${q}="${$$(G)}"`)}return Z.join("")}function b2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),Q=Y?Z.slice(1).trim():Z,G=Q.endsWith("/")?Q.slice(0,-1).trim():Q,[V=""]=G.split(/\s+/,1),K=V.toLowerCase();if(!K||!LY.has(K))return $;if(K==="br")return Y?"":"<br>";if(Y)return`</${K}>`;let B=G.slice(V.length).trim(),W=kY(K,B);return`<${K}${W}>`})}function g2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function m2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Q)=>Q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let Q=Z(Y.nodeValue);if(Q!==Y.nodeValue)Y.nodeValue=Q}return $.body.innerHTML}function CY(_){if(!window.katex)return _;let $=(q)=>v2(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let G=[],V=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let B=G.length;return G.push(K),`@@CODE_BLOCK_${B}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let B=G.length;return G.push(K),`@@CODE_INLINE_${B}@@`}),{html:V,blocks:G}},Z=(q,G)=>{if(!G.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,K)=>{let B=Number(K);return G[B]??""})},Y=j(_),Q=Y.html;return Q=Q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,G,V)=>{try{let K=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${G}${K}`}catch(K){return`<span class="math-error" title="${$$(K.message)}">${q}</span>`}}),Q=Q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,G,V)=>{if(/\s$/.test(V))return q;try{let K=katex.renderToString($(V),{displayMode:!1,throwOnError:!1});return`${G}${K}`}catch(K){return`${G}<span class="math-error" title="${$$(K.message)}">$${V}$</span>`}}),Z(Q,Y.blocks)}function PY(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let Q of Z){let q=Q.nodeValue;if(!q)continue;if(y8.lastIndex=0,!y8.test(q))continue;y8.lastIndex=0;let G=Q.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let V=q.split(y8);if(V.length<=1)continue;let K=$.createDocumentFragment();V.forEach((B,W)=>{if(W%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",B),U.textContent=`#${B}`,K.appendChild(U)}else K.appendChild($.createTextNode(B))}),Q.parentNode?.replaceChild(K,Q)}return $.body.innerHTML}function TY(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let Q of j){if(!Y&&Q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&Q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(Q)}return Z.join(`
`)}function SY(_){let $=TY(_||""),{text:j,blocks:Z}=JY($),Y=R8(j,2),q=f2(Y).replace(/</g,"&lt;");return{safeHtml:b2(q),mermaidBlocks:Z}}function D_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=SY(_),Q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Q=g2(Q),Q=m2(Q),Q=CY(Q),Q=PY(Q),Q=MY(Q,Y),Q=w2(Q,j),Q}function h5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=R8($,2),Y=f2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=b2(Y),q=window.marked?marked.parse(Q):Q.replace(/\n/g,"<br>");return q=g2(q),q=m2(q),q=w2(q),q}function xY(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,Q)=>{let q=Y.trim().split(/\s+/).map((V)=>{let[K,B]=V.split(",").map(Number);return{x:K,y:B}});if(q.length<3)return`<polyline${Z}points="${Y}"${Q}/>`;let G=[`M ${q[0].x},${q[0].y}`];for(let V=1;V<q.length-1;V++){let K=q[V-1],B=q[V],W=q[V+1],U=B.x-K.x,A=B.y-K.y,P=W.x-B.x,S=W.y-B.y,I=Math.sqrt(U*U+A*A),J=Math.sqrt(P*P+S*S),C=Math.min($,I/2,J/2);if(C<0.5){G.push(`L ${B.x},${B.y}`);continue}let T=B.x-U/I*C,d=B.y-A/I*C,c=B.x+P/J*C,_0=B.y+S/J*C,b=U*S-A*P>0?1:0;G.push(`L ${T},${d}`),G.push(`A ${C},${C} 0 0 ${b} ${c},${_0}`)}return G.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${G.join(" ")}"${Q}/>`})}async function z4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=R2()==="dark"?j["tokyo-night"]:j["github-light"],Q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Q)try{let G=q.dataset.mermaid,V=EY(G||""),K=R8(V,2),B=await $(K,{...Y,transparent:!0});B=xY(B),q.innerHTML=B,q.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${G.message}`,q.innerHTML="",q.appendChild(V),q.removeAttribute("data-mermaid")}}function u2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function h2(_){return String(_||"").trim()||"web:default"}function p2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function c2(_){if(!_)return!1;return _.status!=="running"}function l2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function d2({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=x(null),Q=x(null),q=_?.thinking?h5(_.thinking):"",G=_?.answer?D_(_.answer,null,{sanitize:!1}):"";if(h(()=>{if(Y.current&&q)z4(Y.current).catch(()=>{})},[q]),h(()=>{if(Q.current&&G)z4(Q.current).catch(()=>{})},[G]),!_)return null;let V=_.status==="running",K=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),W=p2(_),U=c2(_),A=!V&&K,P=V?"Thinking…":_.status==="error"?"Error":"Done";return L`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${P}</span>
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
            ${B&&L`
                <details class="btw-block btw-thinking" open=${V?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${W&&L`
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
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!A}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function yY(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function RY(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Q==="svg")return j?{kind:Q,svg:j}:{kind:Q};return Z?{kind:Q,html:Z}:{kind:Q}}function f4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function y0(_){return typeof _==="string"&&_.trim()?_.trim():null}function o2(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var n2="__PICLAW_WIDGET_HOST__:";function i2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function j$(_,$){if(!_||_.type!=="generated_widget")return null;let j=yY(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:o2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function s2(_){if(!_||typeof _!=="object")return null;let $=RY(_),j=y0(_?.widget_id)||y0(_?.widgetId)||y0(_?.tool_call_id)||y0(_?.toolCallId),Z=y0(_?.tool_call_id)||y0(_?.toolCallId),Y=y0(_?.turn_id)||y0(_?.turnId),Q=y0(_?.title)||y0(_?.name)||"Generated widget",q=y0(_?.subtitle)||"",G=y0(_?.description)||q,V=y0(_?.status),K=V==="loading"||V==="streaming"||V==="final"||V==="error"?V:"streaming";return{title:Q,subtitle:q,description:G,originPostId:f4(_?.origin_post_id)??f4(_?.originPostId),originChatJid:y0(_?.origin_chat_jid)||y0(_?.originChatJid)||y0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:o2(_?.capabilities,!0),source:"live",status:K,turnId:Y,toolCallId:Z,width:f4(_?.width),height:f4(_?.height),error:y0(_?.error)}}function r2(_){return j$(_,null)!==null}function o1(_){let $=y0(_?.toolCallId)||y0(_?.tool_call_id);if($)return $;let j=y0(_?.widgetId)||y0(_?.widget_id);if(j)return j;let Z=f4(_?.originPostId)??f4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function a2(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Q)=>typeof Q==="string"&&Q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function t2(_){return a2(_)?"allow-downloads allow-scripts":"allow-downloads"}function w8(_){return{title:y0(_?.title)||"Generated widget",widgetId:y0(_?.widgetId)||y0(_?.widget_id),toolCallId:y0(_?.toolCallId)||y0(_?.tool_call_id),turnId:y0(_?.turnId)||y0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:y0(_?.status)||"final"}}function v8(_){return{...w8(_),subtitle:y0(_?.subtitle)||"",description:y0(_?.description)||"",error:y0(_?.error)||null,width:f4(_?.width),height:f4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function f8(_){return`${n2}${JSON.stringify(v8(_))}`}function e2(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=y0(_.text)||y0(_.content)||y0(_.message)||y0(_.prompt)||y0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=y0(j.text)||y0(j.content)||y0(j.message)||y0(j.prompt)||y0(j.value);if(Z)return Z}return null}function _7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function $7(_){let $=y0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return y0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function wY(_){let $=w8(_);return`<script>
(function () {
  const meta = ${i2($)};
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

  const windowNamePrefix = ${i2(n2)};
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
</script>`}function j7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Y:Z;if(!q)return"";let G=a2(_),V=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",G?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,B=G?wY(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${V}" />
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
${B}
</head>
<body>${K}</body>
</html>`}function Z7({widget:_,onClose:$,onWidgetEvent:j}){let Z=x(null),Y=x(!1),Q=C0(()=>j7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(h(()=>{if(!_)return;let J=(C)=>{if(C.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),h(()=>{Y.current=!1},[Q]),h(()=>{if(!_)return;let J=Z.current;if(!J)return;let C=(j0)=>{let b=f8(_),w=j0==="widget.init"?w8(_):v8(_);try{J.name=b}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:j0,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:w},"*")}catch{}},T=()=>{C("widget.init"),C("widget.update")},d=()=>{Y.current=!0,T()};J.addEventListener("load",d);let _0=[0,40,120,300,800].map((j0)=>setTimeout(T,j0));return()=>{J.removeEventListener("load",d),_0.forEach((j0)=>clearTimeout(j0))}},[Q,_?.widgetId,_?.toolCallId,_?.turnId]),h(()=>{if(!_)return;let J=Z.current;if(!J?.contentWindow)return;let C=f8(_),T=v8(_);try{J.name=C}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:T},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),h(()=>{if(!_)return;let J=(C)=>{let T=C?.data;if(!T||T.__piclawGeneratedWidget!==!0)return;let d=Z.current,c=o1(_),_0=o1({widgetId:T.widgetId,toolCallId:T.toolCallId});if(_0&&c&&_0!==c)return;if(!_0&&d?.contentWindow&&C.source!==d.contentWindow)return;j?.(T,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let G=(_?.artifact||{}).kind||_?.kind||"html",V=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",B=_?.source==="live"?"live":"timeline",W=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=B==="live"?`Live widget • ${W.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",A=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",P=!Q,S=$7(_),I=t2(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${V}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${G.toUpperCase()}</div>
                        <div class="floating-widget-title">${V}</div>
                        ${(K||A)&&L`
                            <div class="floating-widget-subtitle">${K||A}</div>
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
                    ${P?L`<div class="floating-widget-empty">${S}</div>`:L`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${V}
                                name=${f8(_)}
                                sandbox=${I}
                                referrerpolicy="no-referrer"
                                srcdoc=${Q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var Y7="PiClaw";function Z$(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),Q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Y.charCodeAt(0)%Q.length,G=Q[q],V=Z.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",B=K?K:null,W=j||V==="PiClaw".toLowerCase()||V==="pi";return{letter:Y,color:G,image:B||(W?"/static/icon-192.png":null)}}function Q7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function q7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function G7(_){if(!_)return null;if(typeof document<"u"){let Q=document.documentElement,q=Q?.dataset?.colorTheme||"",G=Q?.dataset?.tint||"",V=getComputedStyle(Q).getPropertyValue("--accent-color")?.trim();if(V&&(G||q&&q!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Q=0;Q<j.length;Q+=1)Z=(Z*31+j.charCodeAt(Q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}var vY=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function Y$({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:Q,extensionPanels:q=[],pendingPanelActions:G=new Set,onExtensionPanelAction:V,turnId:K,steerQueued:B,onPanelToggle:W,showCorePanels:U=!0,showExtensionPanels:A=!0}){let I=(t)=>{if(!t)return{text:"",totalLines:0,fullText:""};if(typeof t==="string"){let w0=t,x0=w0?w0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:w0,totalLines:x0,fullText:w0}}let W0=t.text||"",H0=t.fullText||t.full_text||W0,N0=Number.isFinite(t.totalLines)?t.totalLines:H0?H0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W0,totalLines:N0,fullText:H0}},J=160,C=(t)=>String(t||"").replace(/<\/?internal>/gi,""),T=(t)=>{if(!t)return 1;return Math.max(1,Math.ceil(t.length/160))},d=(t,W0,H0)=>{let N0=(t||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!N0)return{text:"",omitted:0,totalLines:Number.isFinite(H0)?H0:0,visibleLines:0};let w0=N0.split(`
`),x0=w0.length>W0?w0.slice(0,W0).join(`
`):N0,v0=Number.isFinite(H0)?H0:w0.reduce((i0,D0)=>i0+T(D0),0),k0=x0?x0.split(`
`).reduce((i0,D0)=>i0+T(D0),0):0,f0=Math.max(v0-k0,0);return{text:x0,omitted:f0,totalLines:v0,visibleLines:k0}},c=I(j),_0=I(Z),j0=I($),b=Boolean(c.text)||c.totalLines>0,w=Boolean(_0.text)||_0.totalLines>0,H=Boolean(j0.fullText?.trim()||j0.text?.trim()),R=Boolean(_||H||b||w||Y||Q),p=Array.isArray(q)&&q.length>0;if((!U||!R)&&(!A||!p))return null;let[G0,l]=u(new Set),[Z0,$0]=u(null),[K0,V0]=u(()=>Date.now()),B0=(t)=>l((W0)=>{let H0=new Set(W0),N0=!H0.has(t);if(N0)H0.add(t);else H0.delete(t);if(typeof W==="function")W(t,N0);return H0});h(()=>{l(new Set),$0(null)},[K]);let O0=F4(_);h(()=>{if(!O0)return;V0(Date.now());let t=setInterval(()=>V0(Date.now()),1000);return()=>clearInterval(t)},[O0,_?.started_at,_?.startedAt]);let E0=_?.turn_id||K,M0=G7(E0),n0=B?"turn-dot turn-dot-queued":"turn-dot",R0=(t)=>t,P0=Boolean(_?.last_activity||_?.lastActivity),s0=(t)=>t==="warning"?"#f59e0b":t==="error"?"var(--danger-color)":t==="success"?"var(--success-color)":M0,r0=Q?.kind||"info",h0=s0(r0),a0=s0(_?.kind||(O0?"warning":"info")),d0="",Z1=_?.title,z0=_?.status;if(_?.type==="plan")d0=Z1?`Planning: ${Z1}`:"Planning...";else if(_?.type==="tool_call")d0=Z1?`Running: ${Z1}`:"Running tool...";else if(_?.type==="tool_status")d0=Z1?`${Z1}: ${z0||"Working..."}`:z0||"Working...";else if(_?.type==="error")d0=Z1||"Agent error";else d0=Z1||z0||"Working...";if(P0)d0="Last activity just now";let c0=({panelTitle:t,text:W0,fullText:H0,totalLines:N0,maxLines:w0,titleClass:x0,panelKey:v0})=>{let k0=G0.has(v0),f0=H0||W0||"",i0=v0==="thought"||v0==="draft"?C(f0):f0,D0=typeof w0==="number",g0=k0&&D0,J0=D0?d(i0,w0,N0):{text:i0||"",omitted:0,totalLines:Number.isFinite(N0)?N0:0};if(!i0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let q0=`agent-thinking-body${D0?" agent-thinking-body-collapsible":""}`,v=D0?`--agent-thinking-collapsed-lines: ${w0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${k0?"true":"false"}
                data-collapsible=${D0?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
            >
                <div class="agent-thinking-title ${x0||""}">
                    ${M0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${t}
                    ${g0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${t} panel`}
                            onClick=${()=>B0(v0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${q0}
                    style=${v}
                    dangerouslySetInnerHTML=${{__html:h5(i0)}}
                />
                ${!k0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>B0(v0)}>
                        ▸ ${J0.omitted} more lines
                    </button>
                `}
                ${k0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>B0(v0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},Y1=Y?.tool_call?.title,G1=Y1?`Awaiting approval: ${Y1}`:"Awaiting approval",K_=O0?P8(_,K0):null,J1=(t,W0,H0=null)=>{let N0=C8(t);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${W0?`--turn-color: ${W0};`:""}
                title=${t?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${W0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${N0}</span>
                    ${H0&&L`<span class="agent-status-elapsed">${H0}</span>`}
                </div>
                ${t.detail&&L`<div class="agent-thinking-body">${t.detail}</div>`}
            </div>
        `},$1=(t,W0,H0,N0,w0,x0,v0,k0=8,f0=8)=>{let i0=Math.max(w0-N0,0.000000001),D0=Math.max(W0-k0*2,1),g0=Math.max(H0-f0*2,1),J0=Math.max(v0-x0,1),q0=v0===x0?W0/2:k0+(t.run-x0)/J0*D0,v=f0+(g0-(t.value-N0)/i0*g0);return{x:q0,y:v}},u1=(t,W0,H0,N0,w0,x0,v0,k0=8,f0=8)=>{if(!Array.isArray(t)||t.length===0)return"";return t.map((i0,D0)=>{let{x:g0,y:J0}=$1(i0,W0,H0,N0,w0,x0,v0,k0,f0);return`${D0===0?"M":"L"} ${g0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},I1=(t,W0="")=>{if(!Number.isFinite(t))return"—";return`${Math.abs(t)>=100?t.toFixed(0):t.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${W0}`},K1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],p0=(t,W0)=>{let H0=K1;if(!Array.isArray(H0)||H0.length===0)return"var(--accent-color)";if(H0.length===1||!Number.isFinite(W0)||W0<=1)return H0[0];let w0=Math.max(0,Math.min(Number.isFinite(t)?t:0,W0-1))/Math.max(1,W0-1)*(H0.length-1),x0=Math.floor(w0),v0=Math.min(H0.length-1,x0+1),k0=w0-x0,f0=H0[x0],i0=H0[v0];if(!i0||x0===v0||k0<=0.001)return f0;if(k0>=0.999)return i0;let D0=Math.round((1-k0)*1000)/10,g0=Math.round(k0*1000)/10;return`color-mix(in oklab, ${f0} ${D0}%, ${i0} ${g0}%)`},x1=(t,W0="autoresearch")=>{let H0=Array.isArray(t)?t.map((q0)=>({...q0,points:Array.isArray(q0?.points)?q0.points.filter((v)=>Number.isFinite(v?.value)&&Number.isFinite(v?.run)):[]})).filter((q0)=>q0.points.length>0):[],N0=H0.map((q0,v)=>({...q0,color:p0(v,H0.length)}));if(N0.length===0)return null;let w0=320,x0=120,v0=N0.flatMap((q0)=>q0.points),k0=v0.map((q0)=>q0.value),f0=v0.map((q0)=>q0.run),i0=Math.min(...k0),D0=Math.max(...k0),g0=Math.min(...f0),J0=Math.max(...f0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${N0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${w0} ${x0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${N0.map((q0)=>{let v=q0?.key||q0?.label||"series",e=Z0?.panelKey===W0&&Z0?.seriesKey===v;return L`
                                <g key=${v}>
                                    <path
                                        class=${`agent-series-chart-line${e?" is-hovered":""}`}
                                        d=${u1(q0.points,w0,x0,i0,D0,g0,J0)}
                                        style=${`--agent-series-color: ${q0.color};`}
                                        onMouseEnter=${()=>$0({panelKey:W0,seriesKey:v})}
                                        onMouseLeave=${()=>$0((L0)=>L0?.panelKey===W0&&L0?.seriesKey===v?null:L0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${N0.flatMap((q0)=>{let v=typeof q0?.unit==="string"?q0.unit:"",e=q0?.key||q0?.label||"series";return q0.points.map((L0,I0)=>{let m0=$1(L0,w0,x0,i0,D0,g0,J0);return L`
                                    <button
                                        key=${`${e}-point-${I0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${q0.color}; left:${m0.x/w0*100}%; top:${m0.y/x0*100}%;`}
                                        onMouseEnter=${()=>$0({panelKey:W0,seriesKey:e,run:L0.run,value:L0.value,unit:v})}
                                        onMouseLeave=${()=>$0((X1)=>X1?.panelKey===W0?null:X1)}
                                        onFocus=${()=>$0({panelKey:W0,seriesKey:e,run:L0.run,value:L0.value,unit:v})}
                                        onBlur=${()=>$0((X1)=>X1?.panelKey===W0?null:X1)}
                                        aria-label=${`${q0?.label||"Series"} ${I1(L0.value,v)} at run ${L0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${N0.map((q0)=>{let v=q0.points[q0.points.length-1]?.value,e=typeof q0?.unit==="string"?q0.unit:"",L0=q0?.key||q0?.label||"series",I0=Z0?.panelKey===W0&&Z0?.seriesKey===L0?Z0:null,m0=I0&&Number.isFinite(I0.value)?I0.value:v,X1=I0&&typeof I0.unit==="string"?I0.unit:e,D1=I0&&Number.isFinite(I0.run)?I0.run:null;return L`
                            <div key=${`${L0}-legend`} class=${`agent-series-legend-item${I0?" is-hovered":""}`} style=${`--agent-series-color: ${q0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${q0.color};`}></span>
                                <span class="agent-series-legend-label">${q0?.label||"Series"}</span>
                                ${D1!==null&&L`<span class="agent-series-legend-run">run ${D1}</span>`}
                                <span class="agent-series-legend-value">${I1(m0,X1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},k1=(t)=>{if(!t)return null;let W0=typeof t?.key==="string"?t.key:`panel-${Math.random()}`,H0=G0.has(W0),N0=t?.title||"Extension status",w0=t?.collapsed_text||"",x0=String(t?.state||"").replace(/[-_]+/g," ").replace(/^./,(e)=>e.toUpperCase()),v0=s0(t?.state==="completed"?"success":t?.state==="failed"?"error":t?.state==="stopped"?"warning":"info"),k0=typeof t?.detail_markdown==="string"?t.detail_markdown.trim():"",f0=typeof t?.last_run_text==="string"?t.last_run_text.trim():"",i0=typeof t?.tmux_command==="string"?t.tmux_command.trim():"",D0=Array.isArray(t?.series)?t.series:[],g0=Array.isArray(t?.actions)?t.actions:[],J0=Boolean(k0||i0),q0=Boolean(k0||D0.length>0||i0),v=[N0,w0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${H0?"true":"false"}
                style=${v0?`--turn-color: ${v0};`:""}
                title=${!H0?v||N0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>q0?B0(W0):null}
                    >
                        ${v0&&L`<span class=${n0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${N0}</span>
                        ${w0&&L`<span class="agent-thinking-title-meta">${w0}</span>`}
                    </button>
                    ${(g0.length>0||q0&&!H0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${g0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${g0.map((e)=>{let L0=`${W0}:${e?.key||""}`,I0=G?.has?.(L0);return L`
                                            <button
                                                key=${L0}
                                                class=${`agent-thinking-action-btn${e?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>V?.(t,e)}
                                                disabled=${Boolean(I0)}
                                            >
                                                ${I0?"Working…":e?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${q0&&!H0&&L`
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
                ${q0&&H0&&L`
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
                    <div class=${`agent-thinking-autoresearch-layout${J0?"":" chart-only"}`}>
                        ${J0&&L`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${k0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:h5(k0)}}
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
                                                onClick=${()=>V?.(t,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${vY}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${D0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${x1(D0,W0)}
                                    ${f0&&L`<div class="agent-series-chart-note">${f0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${U&&Q&&J1(Q,h0)}
            ${A&&Array.isArray(q)&&q.map((t)=>k1(t))}
            ${U&&_?.type==="intent"&&J1(_,a0,K_)}
            ${U&&Y&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    <span class=${n0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${G1}</span>
                </div>
            `}
            ${U&&b&&c0({panelTitle:R0("Planning"),text:c.text,fullText:c.fullText,totalLines:c.totalLines,panelKey:"plan"})}
            ${U&&w&&c0({panelTitle:R0("Thoughts"),text:_0.text,fullText:_0.fullText,totalLines:_0.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&H&&c0({panelTitle:R0("Draft"),text:j0.text,fullText:j0.fullText,totalLines:j0.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${P0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    ${M0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!P0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${d0}</span>
                </div>
            `}
        </div>
    `}function K7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:Q}=_,q=Z?.title||"Agent Request",G=Z?.kind||"other",V=Z?.rawInput||{},K=V.command||V.commands&&V.commands[0]||null,B=V.diff||null,W=V.fileName||V.path||null,U=Z?.description||V.description||V.explanation||null,P=(Array.isArray(Z?.locations)?Z.locations:[]).map((T)=>T?.path).filter((T)=>Boolean(T)),S=Array.from(new Set([W,...P].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let I=async(T)=>{try{await H8(j,T,Q||null),$()}catch(d){console.error("Failed to respond to agent request:",d)}},J=async()=>{try{await y6(q,`Auto-approved: ${q}`),await H8(j,"approved",Q||null),$()}catch(T){console.error("Failed to add to whitelist:",T)}},C=Y&&Y.length>0;return L`
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
                ${(U||K||B||S.length>0)&&L`
                    <div class="agent-request-body">
                        ${U&&L`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${S.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${S.map((T,d)=>L`<li key=${d}>${T}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${K&&L`
                            <pre class="agent-request-command">${K}</pre>
                        `}
                        ${B&&L`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${C?Y.map((T)=>L`
                            <button 
                                key=${T.optionId||T.id||String(T)}
                                class="agent-request-btn ${T.kind==="allow_once"||T.kind==="allow_always"?"primary":""}"
                                onClick=${()=>I(T.optionId||T.id||T)}
                            >
                                ${T.name||T.label||T.optionId||T.id||String(T)}
                            </button>
                        `):L`
                        <button class="agent-request-btn primary" onClick=${()=>I("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>I("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${J}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function X7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,Q=86400000;if(Z<Q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*Q){let V=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${K}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${G}`}function p5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function g_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function _5(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var fY=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),bY=new Set(["text/markdown"]),gY=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),mY=new Set(["application/vnd.jgraph.mxfile"]);function c5(_){return typeof _==="string"?_.trim().toLowerCase():""}function uY(_){let $=c5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function hY(_){let $=c5(_);return!!$&&$.endsWith(".pdf")}function pY(_){let $=c5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function l5(_,$){let j=c5(_);if(uY($)||mY.has(j))return"drawio";if(hY($)||j==="application/pdf")return"pdf";if(pY($)||gY.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(fY.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function N7(_){let $=c5(_);return bY.has($)}function V7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function cY(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function lY(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),Q=Number(j[3]);if(![Z,Y,Q].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:Y,b:Q}}function B7(_){return cY(_)||lY(_)}function b8(_){let $=(Q)=>{let q=Q/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function dY(_,$){let j=Math.max(b8(_),b8($)),Z=Math.min(b8(_),b8($));return(j+0.05)/(Z+0.05)}function iY(_,$,j="#ffffff"){let Z=B7(_);if(!Z)return j;let Y=j,Q=-1;for(let q of $){let G=B7(q);if(!G)continue;let V=dY(Z,G);if(V>Q)Y=q,Q=V}return Y}function Q$(){let _=getComputedStyle(document.documentElement),$=(P,S)=>{for(let I of P){let J=_.getPropertyValue(I).trim();if(J)return J}return S},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),V=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),A=iY(G,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:Q,bgEmphasis:q,accent:G,good:V,warning:K,attention:B,border:W,fontFamily:U,buttonTextColor:A}}function W7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:Q,warning:q,attention:G,border:V,fontFamily:K}=Q$();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:V},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var oY=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),U7=!1,g8=null,L7=!1;function q$(_){_.querySelector(".adaptive-card-notice")?.remove()}function nY(_,$,j="error"){q$(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function sY(_,$=(j)=>D_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function rY(_=($)=>D_($,null)){return($,j)=>{try{let Z=sY($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function aY(_){if(L7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=rY(),L7=!0}async function tY(){if(U7)return;if(g8)return g8;return g8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{U7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),g8}function eY(){return globalThis.AdaptiveCards}function _Q(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function $Q(_){return oY.has(_)}function K$(_){if(!Array.isArray(_))return[];return _.filter(_Q)}function jQ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function G$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>G$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${G$(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function ZQ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return G$($);return typeof $==="string"?$:String($)}function YQ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((G)=>Z(G));if(!Y||typeof Y!=="object")return Y;let q={...Y};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=ZQ(q.type,j[q.id],q);for(let[G,V]of Object.entries(q))if(Array.isArray(V)||V&&typeof V==="object")q[G]=Z(V);return q};return Z(_)}function QQ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function qQ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function GQ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=qQ(_.completed_at||j?.submitted_at),Q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Q}}async function F7(_,$,j){if(!$Q($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await tY()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=eY();aY(Z);let Y=new Z.AdaptiveCard,Q=Q$();Y.hostConfig=new Z.HostConfig(W7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:YQ($.payload,q);Y.parse(G),Y.onExecuteAction=(B)=>{let W=jQ(B);if(j?.onAction)q$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let A=U instanceof Error?U.message:String(U||"Action failed.");nY(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let V=Y.render();if(!V)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Q.buttonTextColor);let K=GQ($);if(K){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=K.label,B.appendChild(W),K.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=K.detail,B.appendChild(U)}_.appendChild(B)}if(q$(_),_.appendChild(V),K)QQ(V);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function d5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>d5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${d5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function z7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:d5(j)})).filter(($)=>$.value)}function KQ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function X$(_){if(!Array.isArray(_))return[];return _.filter(KQ)}function H7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=d5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=z7(j).map(({key:Q,value:q})=>`${Q}: ${q}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function O7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=z7(_.data),Z=j.length>0?j.slice(0,2).map(({key:Q,value:q})=>`${Q}: ${q}`).join(", "):d5(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function XQ(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?g_($):null},{label:"Added",value:_?.created_at?_5(_.created_at):null}].filter((Z)=>Z.value)}function NQ(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let Q=b_(_);return`/office-viewer/?url=${encodeURIComponent(Q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function J7({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=C0(()=>l5($?.content_type,Z),[$?.content_type,Z]),Q=V7(Y),q=C0(()=>N7($?.content_type),[$?.content_type]),[G,V]=u(Y==="text"),[K,B]=u(""),[W,U]=u(null),A=x(null),P=C0(()=>XQ($),[$]),S=C0(()=>NQ(_,Z,Y),[_,Z,Y]),I=C0(()=>{if(!q||!K)return"";return D_(K)},[q,K]);return h(()=>{let J=(C)=>{if(C.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),h(()=>{if(!A.current||!I)return;z4(A.current);return},[I]),h(()=>{let J=!1;async function C(){if(Y!=="text"){V(!1),U(null);return}V(!0),U(null);try{let T=await f6(_);if(!J)B(T)}catch{if(!J)U("Failed to load text preview.")}finally{if(!J)V(!1)}}return C(),()=>{J=!0}},[_,Y]),L`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Q}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${S&&L`
                            <a
                                href=${S}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${b_(_)}
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
                    ${!G&&W&&L`<div class="attachment-preview-state">${W}</div>`}
                    ${!G&&!W&&Y==="image"&&L`
                        <img class="attachment-preview-image" src=${b_(_)} alt=${Z} />
                    `}
                    ${!G&&!W&&(Y==="pdf"||Y==="office"||Y==="drawio")&&S&&L`
                        <iframe class="attachment-preview-frame" src=${S} title=${Z}></iframe>
                    `}
                    ${!G&&!W&&Y==="drawio"&&L`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!G&&!W&&Y==="text"&&q&&L`
                        <div
                            ref=${A}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:I}}
                        />
                    `}
                    ${!G&&!W&&Y==="text"&&!q&&L`
                        <pre class="attachment-preview-text">${K}</pre>
                    `}
                    ${!G&&!W&&Y==="unsupported"&&L`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${P.map((J)=>L`
                        <div class="attachment-preview-meta-item" key=${J.label}>
                            <span class="attachment-preview-meta-label">${J.label}</span>
                            <span class="attachment-preview-meta-value">${J.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function D7({src:_,onClose:$}){return h(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function VQ({mediaId:_,onPreview:$}){let[j,Z]=u(null);if(h(()=>{W5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",Q=j.metadata?.size,q=Q?g_(Q):"",V=l5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <a href=${b_(_)} download=${Y} class="file-attachment-main">
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
                onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${V}
            </button>
        </div>
    `}function BQ({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=u(null);h(()=>{if(!Number.isFinite(j))return;W5(j).then(Y).catch(()=>{});return},[j]);let Q=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?b_(j):null,V=l5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Q}>
            ${q?L`
                    <a href=${q} download=${Q} class="attachment-pill-main" onClick=${(K)=>K.stopPropagation()}>
                        <${a_}
                            prefix="post"
                            label=${_.label}
                            title=${Q}
                        />
                    </a>
                `:L`
                    <${a_}
                        prefix="post"
                        label=${_.label}
                        title=${Q}
                    />
                `}
            ${Number.isFinite(j)&&Z&&L`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${V}
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function m8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?_5(Z):null;return L`
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
    `}function WQ({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?g_(_.size):"",Y=_.mime_type||"",Q=FQ(Y),q=e4(_.uri);return L`
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
    `}function UQ({block:_}){let[$,j]=u(!1),Z=_.uri||"Embedded resource",Y=_.text||"",Q=Boolean(_.data),q=_.mime_type||"";return L`
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
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:q||"application/octet-stream"}),K=URL.createObjectURL(V),B=document.createElement("a");B.href=K,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(K)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function LQ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=j$(_,$),Y=r2(_),Q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",G=Z?.description||_.description||_.subtitle||"",V=_.open_label||"Open widget",K=(B)=>{if(B.preventDefault(),B.stopPropagation(),!Z)return;j?.(Z)};return L`
        <div class="generated-widget-launch" onClick=${(B)=>B.stopPropagation()}>
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
                    onClick=${K}
                    title=${Y?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${V}
                </button>
                <span class="generated-widget-launch-note">
                    ${Y?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function FQ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function zQ({preview:_}){let $=e4(_.url),j=e4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return L`
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
    `}function HQ(_,$){return typeof _==="string"?_:""}var OQ=1800,JQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,DQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,AQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function EQ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function MQ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Q)=>Q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(Q,q)=>{let G=q||"idle";if(Q.dataset.copyState=G,G==="success")Q.innerHTML=DQ,Q.setAttribute("aria-label","Copied"),Q.setAttribute("title","Copied"),Q.classList.add("is-success"),Q.classList.remove("is-error");else if(G==="error")Q.innerHTML=AQ,Q.setAttribute("aria-label","Copy failed"),Q.setAttribute("title","Copy failed"),Q.classList.add("is-error"),Q.classList.remove("is-success");else Q.innerHTML=JQ,Q.setAttribute("aria-label","Copy code"),Q.setAttribute("title","Copy code"),Q.classList.remove("is-success","is-error")};return $.forEach((Q)=>{let q=document.createElement("div");q.className="post-code-block",Q.parentNode?.insertBefore(q,Q),q.appendChild(Q);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Y(G,"idle"),q.appendChild(G);let V=async(K)=>{K.preventDefault(),K.stopPropagation();let W=Q.querySelector("code")?.textContent||"",U=await EQ(W);Y(G,U?"success":"error");let A=j.get(G);if(A)clearTimeout(A);let P=setTimeout(()=>{Y(G,"idle"),j.delete(G)},OQ);j.set(G,P)};G.addEventListener("click",V),Z.push(()=>{G.removeEventListener("click",V);let K=j.get(G);if(K)clearTimeout(K);if(q.parentNode)q.parentNode.insertBefore(Q,q),q.remove()})}),()=>{Z.forEach((Q)=>Q())}}function IQ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K))Y.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Q),V=[...q,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:Y}}function kQ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K)){let W=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)Y.push(W[1])}else if(!K.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Q),V=[...q,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:Y}}function CQ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1){let B=j[K].trim();if((B==="Images:"||B==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K)){let B=K.replace(/^\s*-\s+/,"").trim(),W=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let U=W[1],A=(W[2]||"").trim()||U;Y.push({id:U,label:A,raw:B})}else Y.push({id:null,label:B,raw:B})}else if(!K.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),G=j.slice(Q),V=[...q,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:Y}}function PQ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function TQ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(PQ).sort((B,W)=>W.length-B.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),Q=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),G=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),V=[],K;while(K=G.nextNode())V.push(K);for(let B of V){let W=B.nodeValue;if(!W||!Y.test(W)){Y.lastIndex=0;continue}Y.lastIndex=0;let U=B.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let A=W.split(Y).filter((S)=>S!=="");if(A.length===0)continue;let P=q.createDocumentFragment();for(let S of A)if(Q.test(S)){let I=q.createElement("mark");I.className="search-highlight-term",I.textContent=S,P.appendChild(I)}else P.appendChild(q.createTextNode(S));B.parentNode.replaceChild(P,B)}return q.body.innerHTML}function A7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:Q,agentAvatarUrl:q,userName:G,userAvatarUrl:V,userAvatarBackground:K,onDelete:B,isThreadReply:W,isThreadPrev:U,isThreadNext:A,isRemoving:P,highlightQuery:S,onFileRef:I,onOpenWidget:J}){let[C,T]=u(null),d=x(null),c=_.data,_0=c.type==="agent_response",j0=G||"You",b=_0?Q||Y7:j0,w=_0?Z$(Q,q,!0):Z$(j0,V),H=typeof K==="string"?K.trim().toLowerCase():"",R=!_0&&w.image&&(H==="clear"||H==="transparent"),p=_0&&Boolean(w.image),G0=`background-color: ${R||p?"transparent":w.color}`,l=c.content_meta,Z0=Boolean(l?.truncated),$0=Boolean(l?.preview),K0=Z0&&!$0,V0=Z0?{originalLength:Number.isFinite(l?.original_length)?l.original_length:c.content?c.content.length:0,maxLength:Number.isFinite(l?.max_length)?l.max_length:0}:null,B0=c.content_blocks||[],O0=c.media_ids||[],E0=HQ(c.content,c.link_previews),{content:M0,fileRefs:n0}=IQ(E0),{content:R0,messageRefs:P0}=kQ(M0),{content:s0,attachments:r0}=CQ(R0);E0=s0;let h0=K$(B0),a0=X$(B0),d0=h0.length===1&&typeof h0[0]?.fallback_text==="string"?h0[0].fallback_text.trim():"",Z1=a0.length===1?H7(a0[0]).trim():"",z0=Boolean(d0)&&E0?.trim()===d0||Boolean(Z1)&&E0?.trim()===Z1,c0=Boolean(E0)&&!K0&&!z0,Y1=typeof S==="string"?S.trim():"",G1=C0(()=>{if(!E0||z0)return"";let v=D_(E0,j);return Y1?TQ(v,Y1):v},[E0,z0,Y1]),K_=(v,e)=>{v.stopPropagation(),T(b_(e))},[J1,$1]=u(null),u1=(v)=>{$1(v)},I1=(v)=>{v.stopPropagation(),B?.(_)},K1=(v,e)=>{let L0=new Set;if(!v||e.length===0)return{content:v,usedIds:L0};return{content:v.replace(/attachment:([^\s)"']+)/g,(m0,X1,D1,e0)=>{let h1=X1.replace(/^\/+/,""),z_=e.find((H_)=>H_.name&&H_.name.toLowerCase()===h1.toLowerCase()&&!L0.has(H_.id))||e.find((H_)=>!L0.has(H_.id));if(!z_)return m0;if(L0.add(z_.id),e0.slice(Math.max(0,D1-2),D1)==="](")return`/media/${z_.id}`;return z_.name||"attachment"}),usedIds:L0}},p0=[],x1=[],k1=[],t=[],W0=[],H0=[],N0=[],w0=0;if(B0.length>0)B0.forEach((v)=>{if(v?.type==="text"&&v.annotations)N0.push(v.annotations);if(v?.type==="generated_widget")H0.push(v);else if(v?.type==="resource_link")t.push(v);else if(v?.type==="resource")W0.push(v);else if(v?.type==="file"){let e=O0[w0++];if(e)x1.push(e),k1.push({id:e,name:v?.name||v?.filename||v?.title})}else if(v?.type==="image"||!v?.type){let e=O0[w0++];if(e){let L0=typeof v?.mime_type==="string"?v.mime_type:void 0;p0.push({id:e,annotations:v?.annotations,mimeType:L0}),k1.push({id:e,name:v?.name||v?.filename||v?.title})}}});else if(O0.length>0){let v=r0.length>0;O0.forEach((e,L0)=>{let I0=r0[L0]||null;if(k1.push({id:e,name:I0?.label||null}),v)x1.push(e);else p0.push({id:e,annotations:null})})}if(r0.length>0)r0.forEach((v)=>{if(!v?.id)return;let e=k1.find((L0)=>String(L0.id)===String(v.id));if(e&&!e.name)e.name=v.label});let{content:x0,usedIds:v0}=K1(E0,k1);E0=x0;let k0=p0.filter(({id:v})=>!v0.has(v)),f0=x1.filter((v)=>!v0.has(v)),i0=r0.length>0?r0.map((v,e)=>({id:v.id||`attachment-${e+1}`,label:v.label||`attachment-${e+1}`})):k1.map((v,e)=>({id:v.id,label:v.name||`attachment-${e+1}`})),D0=C0(()=>K$(B0),[B0]),g0=C0(()=>X$(B0),[B0]),J0=C0(()=>{return D0.map((v)=>`${v.card_id}:${v.state}`).join("|")},[D0]);h(()=>{if(!d.current)return;return z4(d.current),MQ(d.current)},[G1]);let q0=x(null);return h(()=>{if(!q0.current||D0.length===0)return;let v=q0.current;v.innerHTML="";for(let e of D0){let L0=document.createElement("div");v.appendChild(L0),F7(L0,e,{onAction:async(I0)=>{if(I0.type==="Action.OpenUrl"){let m0=e4(I0.url||"");if(!m0)throw Error("Invalid URL");window.open(m0,"_blank","noopener,noreferrer");return}if(I0.type==="Action.Submit"){await x6({post_id:_.id,thread_id:c.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:I0.type,title:I0.title||"",data:I0.data}});return}console.warn("[post] unsupported adaptive card action:",I0.type,I0)}}).catch((I0)=>{console.error("[post] adaptive card render error:",I0),L0.textContent=e.fallback_text||"Card failed to render."})}},[J0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${_0?"agent-post":""} ${W?"thread-reply":""} ${U?"thread-prev":""} ${A?"thread-next":""} ${P?"removing":""}" onClick=${$}>
            <div class="post-avatar ${_0?"agent-avatar":""} ${w.image?"has-image":""}" style=${G0}>
                ${w.image?L`<img src=${w.image} alt=${b} />`:w.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${I1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${b}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(v)=>{if(v.preventDefault(),v.stopPropagation(),Z)Z(_.id)}}>${X7(_.timestamp)}</a>
                </div>
                ${K0&&V0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${p5(V0.originalLength)} chars
                            ${V0.maxLength?L` • Display limit: ${p5(V0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${$0&&V0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${p5(V0.maxLength)} of ${p5(V0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||P0.length>0||i0.length>0)&&L`
                    <div class="post-file-refs">
                        ${P0.map((v)=>{let e=(L0)=>{if(L0.preventDefault(),L0.stopPropagation(),Y)Y(v,_.chat_jid||null);else{let I0=document.getElementById("post-"+v);if(I0)I0.scrollIntoView({behavior:"smooth",block:"center"}),I0.classList.add("post-highlight"),setTimeout(()=>I0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${v}`} class="post-msg-pill-link" onClick=${e}>
                                    <${a_}
                                        prefix="post"
                                        label=${"msg:"+v}
                                        title=${"Message "+v}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${n0.map((v)=>{let e=v.split("/").pop()||v;return L`
                                <${a_}
                                    prefix="post"
                                    label=${e}
                                    title=${v}
                                    onClick=${()=>I?.(v)}
                                />
                            `})}
                        ${i0.map((v)=>L`
                            <${BQ}
                                key=${v.id}
                                attachment=${v}
                                onPreview=${u1}
                            />
                        `)}
                    </div>
                `}
                ${c0&&L`
                    <div 
                        ref=${d}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:G1}}
                        onClick=${(v)=>{if(v.target.classList.contains("hashtag")){v.preventDefault(),v.stopPropagation();let e=v.target.dataset.hashtag;if(e)j?.(e)}else if(v.target.tagName==="IMG")v.preventDefault(),v.stopPropagation(),T(v.target.src)}}
                    />
                `}
                ${D0.length>0&&L`
                    <div ref=${q0} class="post-adaptive-cards" />
                `}
                ${g0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${g0.map((v,e)=>{let L0=O7(v),I0=`${v.card_id}-${e}`;return L`
                                <div key=${I0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${L0.title}</span>
                                        </div>
                                    </div>
                                    ${L0.fields.length>0&&L`
                                        <div class="adaptive-card-submission-fields">
                                            ${L0.fields.map((m0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${m0.key}: ${m0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${m0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${m0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${_5(L0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${H0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${H0.map((v,e)=>L`
                            <${LQ}
                                key=${v.widget_id||v.id||`${_.id}-widget-${e}`}
                                block=${v}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${N0.length>0&&L`
                    ${N0.map((v,e)=>L`
                        <${m8} key=${e} annotations=${v} />
                    `)}
                `}
                ${k0.length>0&&L`
                    <div class="media-preview">
                        ${k0.map(({id:v,mimeType:e})=>{let I0=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?b_(v):v6(v);return L`
                                <img 
                                    key=${v} 
                                    src=${I0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(m0)=>K_(m0,v)}
                                />
                            `})}
                    </div>
                `}
                ${k0.length>0&&L`
                    ${k0.map(({annotations:v},e)=>L`
                        ${v&&L`<${m8} key=${e} annotations=${v} />`}
                    `)}
                `}
                ${f0.length>0&&L`
                    <div class="file-attachments">
                        ${f0.map((v)=>L`
                            <${VQ} key=${v} mediaId=${v} onPreview=${u1} />
                        `)}
                    </div>
                `}
                ${t.length>0&&L`
                    <div class="resource-links">
                        ${t.map((v,e)=>L`
                            <div key=${e}>
                                <${WQ} block=${v} />
                                <${m8} annotations=${v.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${W0.length>0&&L`
                    <div class="resource-embeds">
                        ${W0.map((v,e)=>L`
                            <div key=${e}>
                                <${UQ} block=${v} />
                                <${m8} annotations=${v.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${c.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${c.link_previews.map((v,e)=>L`
                            <${zQ} key=${e} preview=${v} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${C&&L`<${D7} src=${C} onClose=${()=>T(null)} />`}
        ${J1&&L`
            <${J7}
                mediaId=${J1.mediaId}
                info=${J1.info}
                onClose=${()=>$1(null)}
            />
        `}
    `}function E7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:Q,onScrollToMessage:q,onFileRef:G,onOpenWidget:V,emptyMessage:K,timelineRef:B,agents:W,user:U,onDeletePost:A,reverse:P=!0,removingPostIds:S,searchQuery:I}){let[J,C]=u(!1),T=x(null),d=typeof IntersectionObserver<"u",c=y(async()=>{if(!j||!$||J)return;C(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{C(!1)}},[$,J,j]),_0=y((l)=>{let{scrollTop:Z0,scrollHeight:$0,clientHeight:K0}=l.target,V0=P?$0-K0-Z0:Z0,B0=Math.max(300,K0);if(V0<B0)c()},[P,c]);h(()=>{if(!d)return;let l=T.current,Z0=B?.current;if(!l||!Z0)return;let $0=300,K0=new IntersectionObserver((V0)=>{for(let B0 of V0){if(!B0.isIntersecting)continue;c()}},{root:Z0,rootMargin:`${$0}px 0px ${$0}px 0px`,threshold:0});return K0.observe(l),()=>K0.disconnect()},[d,$,j,B,c]);let j0=x(c);if(j0.current=c,h(()=>{if(d)return;if(!B?.current)return;let{scrollTop:l,scrollHeight:Z0,clientHeight:$0}=B.current,K0=P?Z0-$0-l:l,V0=Math.max(300,$0);if(K0<V0)j0.current?.()},[d,_,$,P,B]),h(()=>{if(!B?.current)return;if(!$||J)return;let{scrollTop:l,scrollHeight:Z0,clientHeight:$0}=B.current,K0=P?Z0-$0-l:l,V0=Math.max(300,$0);if(Z0<=$0+1||K0<V0)j0.current?.()},[_,$,J,P,B]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${B}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let b=_.slice().sort((l,Z0)=>l.id-Z0.id),w=(l)=>{let Z0=l?.data?.thread_id;if(Z0===null||Z0===void 0||Z0==="")return null;let $0=Number(Z0);return Number.isFinite($0)?$0:null},H=new Map;for(let l=0;l<b.length;l+=1){let Z0=b[l],$0=Number(Z0?.id),K0=w(Z0);if(K0!==null){let V0=H.get(K0)||{anchorIndex:-1,replyIndexes:[]};V0.replyIndexes.push(l),H.set(K0,V0)}else if(Number.isFinite($0)){let V0=H.get($0)||{anchorIndex:-1,replyIndexes:[]};V0.anchorIndex=l,H.set($0,V0)}}let R=new Map;for(let[l,Z0]of H.entries()){let $0=new Set;if(Z0.anchorIndex>=0)$0.add(Z0.anchorIndex);for(let K0 of Z0.replyIndexes)$0.add(K0);R.set(l,Array.from($0).sort((K0,V0)=>K0-V0))}let p=b.map((l,Z0)=>{let $0=w(l);if($0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let K0=R.get($0);if(!K0||K0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let V0=K0.indexOf(Z0);if(V0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:V0>0,hasThreadNext:V0<K0.length-1}}),G0=L`<div class="timeline-sentinel" ref=${T}></div>`;return L`
        <div class="timeline ${P?"reverse":"normal"}" ref=${B} onScroll=${_0}>
            <div class="timeline-content">
                ${P?G0:null}
                ${b.map((l,Z0)=>{let $0=Boolean(l.data?.thread_id&&l.data.thread_id!==l.id),K0=S?.has?.(l.id),V0=p[Z0]||{};return L`
                    <${A7}
                        key=${l.id}
                        post=${l}
                        isThreadReply=${$0}
                        isThreadPrev=${V0.hasThreadPrev}
                        isThreadNext=${V0.hasThreadNext}
                        isRemoving=${K0}
                        highlightQuery=${I}
                        agentName=${Q7(l.data?.agent_id,W||{})}
                        agentAvatarUrl=${q7(l.data?.agent_id,W||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(l)}
                        onHashtagClick=${Y}
                        onMessageRef=${Q}
                        onScrollToMessage=${q}
                        onFileRef=${G}
                        onOpenWidget=${V}
                        onDelete=${A}
                    />
                `})}
                ${P?null:G0}
            </div>
        </div>
    `}class M7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let Q=Y===!0?0:typeof Y==="number"?Y:0;if(Q>j)j=Q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var o0=new M7;var u8=null,N$=null;function SQ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function I7(){if(N$)return Promise.resolve(N$);if(!u8)u8=import(SQ()).then((_)=>{return N$=_,_}).catch((_)=>{throw u8=null,_});return u8}class k7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await I7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var V$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new k7(_,$)}};function B$(){I7().catch(()=>{})}var $5="piclaw://terminal";var xQ={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},yQ={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},h8=null,W$=null;function RQ(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function wQ(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,Q)=>{let q=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!RQ(q))return $(Y,Q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,Q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function vQ(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!h8)h8=wQ(()=>Promise.resolve($.init?.())).catch((j)=>{throw h8=null,j});return await h8,$}async function fQ(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!W$)W$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await W$}async function bQ(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function gQ(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function mQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function H4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function uQ(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function C7(){let _=mQ(),$=_?yQ:xQ,j=H4("--bg-primary",_?"#000000":"#ffffff"),Z=H4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=H4("--text-secondary",_?"#71767b":"#536471"),Q=H4("--accent-color","#1d9bf0"),q=H4("--danger-color",_?"#ff7b72":"#cf222e"),G=H4("--success-color",_?"#7ee787":"#1a7f37"),V=H4("--bg-hover",_?"#1d1f23":"#e8ebed"),K=H4("--border-color",_?"#2f3336":"#eff3f4"),B=H4("--accent-soft-strong",uQ(Q,_?"47":"33"));return{background:j,foreground:Z,cursor:Q,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:V,red:q,green:G,yellow:$.yellow,blue:Q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:K}}class U${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,Q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(Q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await vQ();if(await fQ(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:C7()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=C7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await bQ();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(gQ($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var L$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new U$(_,$)}},F$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new U$(_,$)}};function O4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function p8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),Q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Q||Y>1||q)}function P7(_,$={}){if(O4($))return null;if(p8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:hQ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function z$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function H$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function O$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function J$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function j5(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function T7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function S7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let Q=j?.params&&typeof j.params==="object"?j.params:null;if(Q)for(let[q,G]of Object.entries(Q)){let V=String(q||"").trim();if(!V)continue;if(G===null||G===void 0||G==="")Z.searchParams.delete(V);else Z.searchParams.set(V,String(G))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function hQ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function pQ(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function x7(_,$={}){if(O4($))return null;if(p8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:pQ(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function c8(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function cQ(_){try{return JSON.parse(_)}catch{return null}}function lQ(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function dQ(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class D${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=dQ($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||cQ;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=lQ(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var i5=()=>{throw Error("Operation requires compiling with --exportRuntime")},iQ=typeof BigUint64Array<"u",o5=Symbol();var oQ=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function y7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return oQ.decode(Z)}catch{let Y="",Q=0;while(j-Q>1024)Y+=String.fromCharCode(...Z.subarray(Q,Q+=1024));return Y+String.fromCharCode(...Z.subarray(Q))}}function R7(_){let $={};function j(Y,Q){if(!Y)return"<yet unknown>";return y7(Y.buffer,Q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Q,q,G,V){let K=$.memory||Z.memory;throw Error(`abort: ${j(K,Q)} at ${j(K,q)}:${G}:${V}`)},Z.trace=Z.trace||function(Q,q,...G){let V=$.memory||Z.memory;console.log(`trace: ${j(V,Q)}${q?" ":""}${G.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function w7(_,$){let j=$.exports,Z=j.memory,Y=j.table,Q=j.__new||i5,q=j.__pin||i5,G=j.__unpin||i5,V=j.__collect||i5,K=j.__rtti_base,B=K?(H)=>H[K>>>2]:i5;_.__new=Q,_.__pin=q,_.__unpin=G,_.__collect=V;function W(H){let R=new Uint32Array(Z.buffer);if((H>>>=0)>=B(R))throw Error(`invalid id: ${H}`);return R[(K+4>>>2)+H]}function U(H){let R=W(H);if(!(R&7))throw Error(`not an array: ${H}, flags=${R}`);return R}function A(H){return 31-Math.clz32(H>>>6&31)}function P(H){if(H==null)return 0;let R=H.length,p=Q(R<<1,2),G0=new Uint16Array(Z.buffer);for(let l=0,Z0=p>>>1;l<R;++l)G0[Z0+l]=H.charCodeAt(l);return p}_.__newString=P;function S(H){if(H==null)return 0;let R=new Uint8Array(H),p=Q(R.length,1);return new Uint8Array(Z.buffer).set(R,p),p}_.__newArrayBuffer=S;function I(H){if(!H)return null;let R=Z.buffer;if(new Uint32Array(R)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return y7(R,H)}_.__getString=I;function J(H,R,p){let G0=Z.buffer;if(p)switch(H){case 2:return new Float32Array(G0);case 3:return new Float64Array(G0)}else switch(H){case 0:return new(R?Int8Array:Uint8Array)(G0);case 1:return new(R?Int16Array:Uint16Array)(G0);case 2:return new(R?Int32Array:Uint32Array)(G0);case 3:return new(R?BigInt64Array:BigUint64Array)(G0)}throw Error(`unsupported align: ${H}`)}function C(H,R=0){let p=R,G0=U(H),l=A(G0),Z0=typeof p!=="number",$0=Z0?p.length:p,K0=Q($0<<l,G0&4?H:1),V0;if(G0&4)V0=K0;else{q(K0);let B0=Q(G0&2?16:12,H);G(K0);let O0=new Uint32Array(Z.buffer);if(O0[B0+0>>>2]=K0,O0[B0+4>>>2]=K0,O0[B0+8>>>2]=$0<<l,G0&2)O0[B0+12>>>2]=$0;V0=B0}if(Z0){let B0=J(l,G0&2048,G0&4096),O0=K0>>>l;if(G0&16384)for(let E0=0;E0<$0;++E0)B0[O0+E0]=p[E0];else B0.set(p,O0)}return V0}_.__newArray=C;function T(H){let R=new Uint32Array(Z.buffer),p=R[H+-8>>>2],G0=U(p),l=A(G0),Z0=G0&4?H:R[H+4>>>2],$0=G0&2?R[H+12>>>2]:R[Z0+-4>>>2]>>>l;return J(l,G0&2048,G0&4096).subarray(Z0>>>=l,Z0+$0)}_.__getArrayView=T;function d(H){let R=T(H),p=R.length,G0=Array(p);for(let l=0;l<p;l++)G0[l]=R[l];return G0}_.__getArray=d;function c(H){let R=Z.buffer,p=new Uint32Array(R)[H+-4>>>2];return R.slice(H,H+p)}_.__getArrayBuffer=c;function _0(H){if(!Y)throw Error("Operation requires compiling with --exportTable");let R=new Uint32Array(Z.buffer)[H>>>2];return Y.get(R)}_.__getFunction=_0;function j0(H,R,p){return new H(b(H,R,p))}function b(H,R,p){let G0=Z.buffer,l=new Uint32Array(G0);return new H(G0,l[p+4>>>2],l[p+8>>>2]>>>R)}function w(H,R,p){_[`__get${R}`]=j0.bind(null,H,p),_[`__get${R}View`]=b.bind(null,H,p)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{w(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),iQ)[BigUint64Array,BigInt64Array].forEach((H)=>{w(H,H.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,sQ(j,_)}function v7(_){return typeof Response<"u"&&_ instanceof Response}function nQ(_){return _ instanceof WebAssembly.Module}async function A$(_,$={}){if(v7(_=await _))return l8(_,$);let j=nQ(_)?_:await WebAssembly.compile(_),Z=R7($),Y=await WebAssembly.instantiate(j,$),Q=w7(Z,Y);return{module:j,instance:Y,exports:Q}}async function l8(_,$={}){if(!WebAssembly.instantiateStreaming)return A$(v7(_=await _)?_.arrayBuffer():_,$);let j=R7($),Z=await WebAssembly.instantiateStreaming(_,$),Y=w7(j,Z.instance);return{...Z,exports:Y}}function sQ(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],Q=Z.split("."),q=$;while(Q.length>1){let K=Q.shift();if(!Object.hasOwn(q,K))q[K]={};q=q[K]}let G=Q[0],V=G.indexOf("#");if(V>=0){let K=G.substring(0,V),B=q[K];if(typeof B>"u"||!B.prototype){let W=function(...U){return W.wrap(W.prototype.constructor(0,...U))};if(W.prototype={valueOf(){return this[o5]}},W.wrap=function(U){return Object.create(W.prototype,{[o5]:{value:U,writable:!1}})},B)Object.getOwnPropertyNames(B).forEach((U)=>Object.defineProperty(W,U,Object.getOwnPropertyDescriptor(B,U)));q[K]=W}if(G=G.substring(V+1),q=q[K].prototype,/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4))){let W=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(q,G,{get(){return W(this[o5])},set(A){U(this[o5],A)},enumerable:!0})}}else if(G==="constructor")(q[G]=function(...W){return j(W.length),Y(...W)}).original=Y;else(q[G]=function(...W){return j(W.length),Y(this[o5],...W)}).original=Y}else if(/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4)))Object.defineProperty(q,G,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(q[G]=(...K)=>{return j(K.length),Y(...K)}).original=Y;else q[G]=Y}return $}var aQ="/static/js/vendor/remote-display-decoder.wasm",d8=null;function f7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function b7(){if(d8)return d8;return d8=(async()=>{try{let Z=function(Y,Q,q,G,V,K,B){let W=f7(Q),U=j.__pin(j.__newArrayBuffer(W));try{return j[Y](U,q,G,V,K,B.bitsPerPixel,B.bigEndian?1:0,B.trueColor?1:0,B.redMax,B.greenMax,B.blueMax,B.redShift,B.greenShift,B.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(aQ,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof l8==="function"?await l8(_,{}):await A$(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,Q){j.initFramebuffer(Y,Q)},getFramebuffer(){let Y=j.getFramebufferPtr(),Q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,Q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,Q,q,G,V,K){return Z("processRawRect",Y,Q,q,G,V,K)},processCopyRect(Y,Q,q,G,V,K){return j.processCopyRect(Y,Q,q,G,V,K)},processRreRect(Y,Q,q,G,V,K){return Z("processRreRect",Y,Q,q,G,V,K)},processHextileRect(Y,Q,q,G,V,K){return Z("processHextileRect",Y,Q,q,G,V,K)},processZrleTileData(Y,Q,q,G,V,K){return Z("processZrleTileData",Y,Q,q,G,V,K)},decodeRawRectToRgba(Y,Q,q,G){let V=f7(Y),K=j.__pin(j.__newArrayBuffer(V));try{let B=j.__pin(j.decodeRawRectToRgba(K,Q,q,G.bitsPerPixel,G.bigEndian?1:0,G.trueColor?1:0,G.redMax,G.greenMax,G.blueMax,G.redShift,G.greenShift,G.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(B))}finally{j.__unpin(B)}}finally{j.__unpin(K);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),d8}function H5(_,$,j){return Math.max($,Math.min(j,_))}function i8(_,$,j){let Z=new Uint8Array(6),Y=H5(Math.floor(Number($||0)),0,65535),Q=H5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=H5(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=Q>>8&255,Z[5]=Q&255,Z}function M$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function g7(_,$,j,Z,Y){let Q=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(Y||0))),G=Math.max(1,Number(j?.width||0)),V=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/G,B=(Number($||0)-Number(j?.top||0))/V;return{x:H5(Math.floor(K*Q),0,Math.max(0,Q-1)),y:H5(Math.floor(B*q),0,Math.max(0,q-1))}}function m7(_,$,j,Z=0){let Y=Number(_)<0?8:16,Q=H5(Number(Z||0)|Y,0,255);return[i8(Q,$,j),i8(Number(Z||0),$,j)]}function u7(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function n5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function h7(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),Q=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),G=Math.max(1,Math.floor(Number(Z||0))),V=Math.min(Y/q,Q/G);if(!Number.isFinite(V)||V<=0)return 1;return Math.max(0.01,V)}var E$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)E$[`F${_}`]=65470+(_-1);function I$(_){let $=[_?.key,_?.code];for(let Q of $)if(Q&&Object.prototype.hasOwnProperty.call(E$,Q))return E$[Q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var v1=Uint8Array,A_=Uint16Array,w$=Int32Array,o8=new v1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),n8=new v1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),S$=new v1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),d7=function(_,$){var j=new A_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new w$(j[30]);for(var Z=1;Z<30;++Z)for(var Q=j[Z];Q<j[Z+1];++Q)Y[Q]=Q-j[Z]<<5|Z;return{b:j,r:Y}},i7=d7(o8,2),o7=i7.b,x$=i7.r;o7[28]=258,x$[258]=28;var n7=d7(n8,0),tQ=n7.b,p7=n7.r,y$=new A_(32768);for(l0=0;l0<32768;++l0)q4=(l0&43690)>>1|(l0&21845)<<1,q4=(q4&52428)>>2|(q4&13107)<<2,q4=(q4&61680)>>4|(q4&3855)<<4,y$[l0]=((q4&65280)>>8|(q4&255)<<8)>>1;var q4,l0,G4=function(_,$,j){var Z=_.length,Y=0,Q=new A_($);for(;Y<Z;++Y)if(_[Y])++Q[_[Y]-1];var q=new A_($);for(Y=1;Y<$;++Y)q[Y]=q[Y-1]+Q[Y-1]<<1;var G;if(j){G=new A_(1<<$);var V=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var K=Y<<4|_[Y],B=$-_[Y],W=q[_[Y]-1]++<<B;for(var U=W|(1<<B)-1;W<=U;++W)G[y$[W]>>V]=K}}else{G=new A_(Z);for(Y=0;Y<Z;++Y)if(_[Y])G[Y]=y$[q[_[Y]-1]++]>>15-_[Y]}return G},b4=new v1(288);for(l0=0;l0<144;++l0)b4[l0]=8;var l0;for(l0=144;l0<256;++l0)b4[l0]=9;var l0;for(l0=256;l0<280;++l0)b4[l0]=7;var l0;for(l0=280;l0<288;++l0)b4[l0]=8;var l0,t5=new v1(32);for(l0=0;l0<32;++l0)t5[l0]=5;var l0,eQ=G4(b4,9,0),_q=G4(b4,9,1),$q=G4(t5,5,0),jq=G4(t5,5,1),k$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},t_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},C$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},v$=function(_){return(_+7)/8|0},a5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new v1(_.subarray($,j))};var Zq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],F_=function(_,$,j){var Z=Error($||Zq[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,F_);if(!j)throw Z;return Z},Yq=function(_,$,j,Z){var Y=_.length,Q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new v1(0);var q=!j,G=q||$.i!=2,V=$.i;if(q)j=new v1(Y*3);var K=function(Z1){var z0=j.length;if(Z1>z0){var c0=new v1(Math.max(z0*2,Z1));c0.set(j),j=c0}},B=$.f||0,W=$.p||0,U=$.b||0,A=$.l,P=$.d,S=$.m,I=$.n,J=Y*8;do{if(!A){B=t_(_,W,1);var C=t_(_,W+1,3);if(W+=3,!C){var T=v$(W)+4,d=_[T-4]|_[T-3]<<8,c=T+d;if(c>Y){if(V)F_(0);break}if(G)K(U+d);j.set(_.subarray(T,c),U),$.b=U+=d,$.p=W=c*8,$.f=B;continue}else if(C==1)A=_q,P=jq,S=9,I=5;else if(C==2){var _0=t_(_,W,31)+257,j0=t_(_,W+10,15)+4,b=_0+t_(_,W+5,31)+1;W+=14;var w=new v1(b),H=new v1(19);for(var R=0;R<j0;++R)H[S$[R]]=t_(_,W+R*3,7);W+=j0*3;var p=k$(H),G0=(1<<p)-1,l=G4(H,p,1);for(var R=0;R<b;){var Z0=l[t_(_,W,G0)];W+=Z0&15;var T=Z0>>4;if(T<16)w[R++]=T;else{var $0=0,K0=0;if(T==16)K0=3+t_(_,W,3),W+=2,$0=w[R-1];else if(T==17)K0=3+t_(_,W,7),W+=3;else if(T==18)K0=11+t_(_,W,127),W+=7;while(K0--)w[R++]=$0}}var V0=w.subarray(0,_0),B0=w.subarray(_0);S=k$(V0),I=k$(B0),A=G4(V0,S,1),P=G4(B0,I,1)}else F_(1);if(W>J){if(V)F_(0);break}}if(G)K(U+131072);var O0=(1<<S)-1,E0=(1<<I)-1,M0=W;for(;;M0=W){var $0=A[C$(_,W)&O0],n0=$0>>4;if(W+=$0&15,W>J){if(V)F_(0);break}if(!$0)F_(2);if(n0<256)j[U++]=n0;else if(n0==256){M0=W,A=null;break}else{var R0=n0-254;if(n0>264){var R=n0-257,P0=o8[R];R0=t_(_,W,(1<<P0)-1)+o7[R],W+=P0}var s0=P[C$(_,W)&E0],r0=s0>>4;if(!s0)F_(3);W+=s0&15;var B0=tQ[r0];if(r0>3){var P0=n8[r0];B0+=C$(_,W)&(1<<P0)-1,W+=P0}if(W>J){if(V)F_(0);break}if(G)K(U+131072);var h0=U+R0;if(U<B0){var a0=Q-B0,d0=Math.min(B0,h0);if(a0+U<0)F_(3);for(;U<d0;++U)j[U]=Z[a0+U]}for(;U<h0;++U)j[U]=j[U-B0]}}if($.l=A,$.p=M0,$.b=U,$.f=B,A)B=1,$.m=S,$.d=P,$.n=I}while(!B);return U!=j.length&&q?a5(j,0,U):j.subarray(0,U)},J4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},s5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},P$=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,Q=j.slice();if(!Y)return{t:r7,l:0};if(Y==1){var q=new v1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(c,_0){return c.f-_0.f}),j.push({s:-1,f:25001});var G=j[0],V=j[1],K=0,B=1,W=2;j[0]={s:-1,f:G.f+V.f,l:G,r:V};while(B!=Y-1)G=j[j[K].f<j[W].f?K++:W++],V=j[K!=B&&j[K].f<j[W].f?K++:W++],j[B++]={s:-1,f:G.f+V.f,l:G,r:V};var U=Q[0].s;for(var Z=1;Z<Y;++Z)if(Q[Z].s>U)U=Q[Z].s;var A=new A_(U+1),P=R$(j[B-1],A,0);if(P>$){var Z=0,S=0,I=P-$,J=1<<I;Q.sort(function(_0,j0){return A[j0.s]-A[_0.s]||_0.f-j0.f});for(;Z<Y;++Z){var C=Q[Z].s;if(A[C]>$)S+=J-(1<<P-A[C]),A[C]=$;else break}S>>=I;while(S>0){var T=Q[Z].s;if(A[T]<$)S-=1<<$-A[T]++-1;else++Z}for(;Z>=0&&S;--Z){var d=Q[Z].s;if(A[d]==$)--A[d],++S}P=$}return{t:new v1(A),l:P}},R$=function(_,$,j){return _.s==-1?Math.max(R$(_.l,$,j+1),R$(_.r,$,j+1)):$[_.s]=j},c7=function(_){var $=_.length;while($&&!_[--$]);var j=new A_(++$),Z=0,Y=_[0],Q=1,q=function(V){j[Z++]=V};for(var G=1;G<=$;++G)if(_[G]==Y&&G!=$)++Q;else{if(!Y&&Q>2){for(;Q>138;Q-=138)q(32754);if(Q>2)q(Q>10?Q-11<<5|28690:Q-3<<5|12305),Q=0}else if(Q>3){q(Y),--Q;for(;Q>6;Q-=6)q(8304);if(Q>2)q(Q-3<<5|8208),Q=0}while(Q--)q(Y);Q=1,Y=_[G]}return{c:j.subarray(0,Z),n:$}},r5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},s7=function(_,$,j){var Z=j.length,Y=v$($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var Q=0;Q<Z;++Q)_[Y+Q+4]=j[Q];return(Y+4+Z)*8},l7=function(_,$,j,Z,Y,Q,q,G,V,K,B){J4($,B++,j),++Y[256];var W=P$(Y,15),U=W.t,A=W.l,P=P$(Q,15),S=P.t,I=P.l,J=c7(U),C=J.c,T=J.n,d=c7(S),c=d.c,_0=d.n,j0=new A_(19);for(var b=0;b<C.length;++b)++j0[C[b]&31];for(var b=0;b<c.length;++b)++j0[c[b]&31];var w=P$(j0,7),H=w.t,R=w.l,p=19;for(;p>4&&!H[S$[p-1]];--p);var G0=K+5<<3,l=r5(Y,b4)+r5(Q,t5)+q,Z0=r5(Y,U)+r5(Q,S)+q+14+3*p+r5(j0,H)+2*j0[16]+3*j0[17]+7*j0[18];if(V>=0&&G0<=l&&G0<=Z0)return s7($,B,_.subarray(V,V+K));var $0,K0,V0,B0;if(J4($,B,1+(Z0<l)),B+=2,Z0<l){$0=G4(U,A,0),K0=U,V0=G4(S,I,0),B0=S;var O0=G4(H,R,0);J4($,B,T-257),J4($,B+5,_0-1),J4($,B+10,p-4),B+=14;for(var b=0;b<p;++b)J4($,B+3*b,H[S$[b]]);B+=3*p;var E0=[C,c];for(var M0=0;M0<2;++M0){var n0=E0[M0];for(var b=0;b<n0.length;++b){var R0=n0[b]&31;if(J4($,B,O0[R0]),B+=H[R0],R0>15)J4($,B,n0[b]>>5&127),B+=n0[b]>>12}}}else $0=eQ,K0=b4,V0=$q,B0=t5;for(var b=0;b<G;++b){var P0=Z[b];if(P0>255){var R0=P0>>18&31;if(s5($,B,$0[R0+257]),B+=K0[R0+257],R0>7)J4($,B,P0>>23&31),B+=o8[R0];var s0=P0&31;if(s5($,B,V0[s0]),B+=B0[s0],s0>3)s5($,B,P0>>5&8191),B+=n8[s0]}else s5($,B,$0[P0]),B+=K0[P0]}return s5($,B,$0[256]),B+K0[256]},Qq=new w$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),r7=new v1(0),qq=function(_,$,j,Z,Y,Q){var q=Q.z||_.length,G=new v1(Z+q+5*(1+Math.ceil(q/7000))+Y),V=G.subarray(Z,G.length-Y),K=Q.l,B=(Q.r||0)&7;if($){if(B)V[0]=Q.r>>3;var W=Qq[$-1],U=W>>13,A=W&8191,P=(1<<j)-1,S=Q.p||new A_(32768),I=Q.h||new A_(P+1),J=Math.ceil(j/3),C=2*J,T=function(Y1){return(_[Y1]^_[Y1+1]<<J^_[Y1+2]<<C)&P},d=new w$(25000),c=new A_(288),_0=new A_(32),j0=0,b=0,w=Q.i||0,H=0,R=Q.w||0,p=0;for(;w+2<q;++w){var G0=T(w),l=w&32767,Z0=I[G0];if(S[l]=Z0,I[G0]=l,R<=w){var $0=q-w;if((j0>7000||H>24576)&&($0>423||!K)){B=l7(_,V,0,d,c,_0,b,H,p,w-p,B),H=j0=b=0,p=w;for(var K0=0;K0<286;++K0)c[K0]=0;for(var K0=0;K0<30;++K0)_0[K0]=0}var V0=2,B0=0,O0=A,E0=l-Z0&32767;if($0>2&&G0==T(w-E0)){var M0=Math.min(U,$0)-1,n0=Math.min(32767,w),R0=Math.min(258,$0);while(E0<=n0&&--O0&&l!=Z0){if(_[w+V0]==_[w+V0-E0]){var P0=0;for(;P0<R0&&_[w+P0]==_[w+P0-E0];++P0);if(P0>V0){if(V0=P0,B0=E0,P0>M0)break;var s0=Math.min(E0,P0-2),r0=0;for(var K0=0;K0<s0;++K0){var h0=w-E0+K0&32767,a0=S[h0],d0=h0-a0&32767;if(d0>r0)r0=d0,Z0=h0}}}l=Z0,Z0=S[l],E0+=l-Z0&32767}}if(B0){d[H++]=268435456|x$[V0]<<18|p7[B0];var Z1=x$[V0]&31,z0=p7[B0]&31;b+=o8[Z1]+n8[z0],++c[257+Z1],++_0[z0],R=w+V0,++j0}else d[H++]=_[w],++c[_[w]]}}for(w=Math.max(w,R);w<q;++w)d[H++]=_[w],++c[_[w]];if(B=l7(_,V,K,d,c,_0,b,H,p,w-p,B),!K)Q.r=B&7|V[B/8|0]<<3,B-=7,Q.h=I,Q.p=S,Q.i=w,Q.w=R}else{for(var w=Q.w||0;w<q+K;w+=65535){var c0=w+65535;if(c0>=q)V[B/8|0]=K,c0=q;B=s7(V,B+1,_.subarray(w,c0))}Q.i=q}return a5(G,0,Z+v$(B)+Y)};var a7=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,Q=j.length|0;for(var q=0;q!=Q;){var G=Math.min(q+2655,Q);for(;q<G;++q)Y+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},Gq=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var Q=$.dictionary.subarray(-32768),q=new v1(Q.length+_.length);q.set(Q),q.set(_,Q.length),_=q,Y.w=Q.length}}return qq(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var t7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var Kq=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=a7();Y.p($.dictionary),t7(_,2,Y.d())}},Xq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)F_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)F_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var T$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new v1(32768),this.p=new v1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)F_(5);if(this.d)F_(4);if(!this.p.length)this.p=$;else if($.length){var j=new v1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=Yq(this.p,this.s,this.o);this.ondata(a5(Z,j,this.s.b),this.d),this.o=a5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=a5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function e7(_,$){if(!$)$={};var j=a7();j.p(_);var Z=Gq(_,$,$.dictionary?6:2,4);return Kq(Z,$),t7(Z,Z.length-4,j.d()),Z}var _9=function(){function _($,j){T$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(T$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(Xq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)F_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}T$.prototype.c.call(this,j)},_}();var Nq=typeof TextDecoder<"u"&&new TextDecoder,Vq=0;try{Nq.decode(r7,{stream:!0}),Vq=1}catch(_){}var Bq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],Wq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],Uq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],Lq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],Fq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],zq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],Hq=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],Oq=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],Z9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;Z9[_]=$}function Y9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function Q9(_){let $=0n,j=Y9(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function Jq(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function O5(_,$,j){let Z=0n;for(let Y of $){let Q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|Q}return Z}function $9(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function Dq(_){let $=O5(Q9(_),Fq,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let Q of Hq){j=$9(j,Q),Z=$9(Z,Q);let q=j<<28n|Z;Y.push(O5(q,zq,56))}return Y}function Aq(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),Q=(Y&32)>>4|Y&1,q=Y>>1&15;$=$<<4n|BigInt(Oq[j][Q][q])}return $}function Eq(_,$){let j=O5(_,Uq,32)^BigInt($),Z=Aq(j);return O5(Z,Lq,32)}function j9(_,$){let j=Dq($),Z=O5(Q9(_),Bq,64),Y=Z>>32n&0xffffffffn,Q=Z&0xffffffffn;for(let G of j){let V=Q,K=(Y^Eq(Q,G))&0xffffffffn;Y=V,Q=K}let q=Q<<32n|Y;return Jq(O5(q,Wq,64),8)}function Mq(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=Z9[Y]}return j}function q9(_,$){let j=Y9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=Mq(_),Y=new Uint8Array(16);return Y.set(j9(j.slice(0,8),Z),0),Y.set(j9(j.slice(8,16),Z),8),Y}var e_="vnc";function Iq(_){return Number(_)}function kq(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let Q=Iq(Y);if(!Number.isFinite(Q))continue;let q=Number(Q);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function A5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function Cq(_,$){let j=A5(_),Z=A5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function Pq(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let Q=A5(Y);j.set(Q,Z),Z+=Q.byteLength}return j}function Tq(){return(_)=>{let $=A5(_);try{let j=[],Z=new _9((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return Pq(j)}catch(j){try{let Z=e7($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function Sq(_){return new TextEncoder().encode(String(_||""))}function J5(_){return new TextDecoder().decode(A5(_))}function xq(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function yq(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function G9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function Rq(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function wq(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let Q of $)Z.setInt32(Y,Number(Q||0),!1),Y+=4;return new Uint8Array(j)}function K9(_,$,j,Z=0,Y=0){let Q=new ArrayBuffer(10),q=new DataView(Q);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,Y,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Q)}function D5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function N9(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function vq(_,$,j,Z){let Y=Z||E5,Q=A5(_),q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),G=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Q.byteLength<G)throw Error(`Incomplete raw rectangle payload: expected ${G} byte(s), got ${Q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let V=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,B=0;for(let W=0;W<Math.max(0,$||0)*Math.max(0,j||0);W+=1){let U=N9(Q,K,q,Y.bigEndian),A=D5(U>>>Y.redShift&Y.redMax,Y.redMax),P=D5(U>>>Y.greenShift&Y.greenMax,Y.greenMax),S=D5(U>>>Y.blueShift&Y.blueMax,Y.blueMax);V[B]=A,V[B+1]=P,V[B+2]=S,V[B+3]=255,K+=q,B+=4}return V}function D4(_,$,j){let Z=j||E5,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let Q=N9(_,$,Y,Z.bigEndian);return{rgba:[D5(Q>>>Z.redShift&Z.redMax,Z.redMax),D5(Q>>>Z.greenShift&Z.greenMax,Z.greenMax),D5(Q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function g4(_,$,j,Z,Y,Q,q){if(!q)return;for(let G=0;G<Q;G+=1)for(let V=0;V<Y;V+=1){let K=((Z+G)*$+(j+V))*4;_[K]=q[0],_[K+1]=q[1],_[K+2]=q[2],_[K+3]=q[3]}}function V9(_,$,j,Z,Y,Q,q){for(let G=0;G<Q;G+=1){let V=G*Y*4,K=((Z+G)*$+j)*4;_.set(q.subarray(V,V+Y*4),K)}}function X9(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function fq(_,$,j,Z,Y,Q,q){let G=Y||E5,V=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let B=_.slice($+4,$+4+K),W;try{W=q(B)}catch{return{consumed:4+K,skipped:!0}}let U=0,A=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let P=0;P<Z;P+=64){let S=Math.min(64,Z-P);for(let I=0;I<j;I+=64){let J=Math.min(64,j-I);if(W.byteLength<U+1)return null;let C=W[U++],T=C&127,d=(C&128)!==0;if(!d&&T===0){let c=J*S*V;if(W.byteLength<U+c)return null;let _0=Q(W.slice(U,U+c),J,S,G);U+=c,V9(A,j,I,P,J,S,_0);continue}if(!d&&T===1){let c=D4(W,U,G);if(!c)return null;U+=c.bytesPerPixel,g4(A,j,I,P,J,S,c.rgba);continue}if(!d&&T>1&&T<=16){let c=[];for(let w=0;w<T;w+=1){let H=D4(W,U,G);if(!H)return null;U+=H.bytesPerPixel,c.push(H.rgba)}let _0=T<=2?1:T<=4?2:4,j0=Math.ceil(J*_0/8),b=j0*S;if(W.byteLength<U+b)return null;for(let w=0;w<S;w+=1){let H=U+w*j0;for(let R=0;R<J;R+=1){let p=R*_0,G0=H+(p>>3),l=8-_0-(p&7),Z0=W[G0]>>l&(1<<_0)-1;g4(A,j,I+R,P+w,1,1,c[Z0])}}U+=b;continue}if(d&&T===0){let c=0,_0=0;while(_0<S){let j0=D4(W,U,G);if(!j0)return null;U+=j0.bytesPerPixel;let b=X9(W,U);if(!b)return null;U+=b.consumed;for(let w=0;w<b.runLength;w+=1)if(g4(A,j,I+c,P+_0,1,1,j0.rgba),c+=1,c>=J){if(c=0,_0+=1,_0>=S)break}}continue}if(d&&T>0){let c=[];for(let b=0;b<T;b+=1){let w=D4(W,U,G);if(!w)return null;U+=w.bytesPerPixel,c.push(w.rgba)}let _0=0,j0=0;while(j0<S){if(W.byteLength<U+1)return null;let b=W[U++],w=b,H=1;if(b&128){w=b&127;let p=X9(W,U);if(!p)return null;U+=p.consumed,H=p.runLength}let R=c[w];if(!R)return null;for(let p=0;p<H;p+=1)if(g4(A,j,I+_0,P+j0,1,1,R),_0+=1,_0>=J){if(_0=0,j0+=1,j0>=S)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:A,decompressed:W}}function bq(_,$,j,Z,Y){let Q=Y||E5,q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let V=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+q+V*(q+8);if(_.byteLength<$+K)return null;let B=$+4,W=D4(_,B,Q);if(!W)return null;B+=W.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);g4(U,j,0,0,j,Z,W.rgba);for(let A=0;A<V;A+=1){let P=D4(_,B,Q);if(!P)return null;if(B+=P.bytesPerPixel,_.byteLength<B+8)return null;let S=new DataView(_.buffer,_.byteOffset+B,8),I=S.getUint16(0,!1),J=S.getUint16(2,!1),C=S.getUint16(4,!1),T=S.getUint16(6,!1);B+=8,g4(U,j,I,J,C,T,P.rgba)}return{consumed:B-$,rgba:U}}function gq(_,$,j,Z,Y,Q){let q=Y||E5,G=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),V=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),K=$,B=[0,0,0,255],W=[255,255,255,255];for(let U=0;U<Z;U+=16){let A=Math.min(16,Z-U);for(let P=0;P<j;P+=16){let S=Math.min(16,j-P);if(_.byteLength<K+1)return null;let I=_[K++];if(I&1){let J=S*A*G;if(_.byteLength<K+J)return null;let C=Q(_.slice(K,K+J),S,A,q);K+=J,V9(V,j,P,U,S,A,C);continue}if(I&2){let J=D4(_,K,q);if(!J)return null;B=J.rgba,K+=J.bytesPerPixel}if(g4(V,j,P,U,S,A,B),I&4){let J=D4(_,K,q);if(!J)return null;W=J.rgba,K+=J.bytesPerPixel}if(I&8){if(_.byteLength<K+1)return null;let J=_[K++];for(let C=0;C<J;C+=1){let T=W;if(I&16){let H=D4(_,K,q);if(!H)return null;T=H.rgba,K+=H.bytesPerPixel}if(_.byteLength<K+2)return null;let d=_[K++],c=_[K++],_0=d>>4,j0=d&15,b=(c>>4)+1,w=(c&15)+1;g4(V,j,P+_0,U+j0,b,w,T)}}}}return{consumed:K-$,rgba:V}}var E5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class s8{protocol=e_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:vq,this.pipeline=_.pipeline||null,this.encodings=kq(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...E5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:Tq()}receive(_){if(_)this.buffer=Cq(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),Q=J5(Y),q=xq(Q);if(!q)throw Error(`Unsupported RFB version banner: ${Q||"<empty>"}`);this.serverVersion=q,this.clientVersionText=yq(q),j.push(Sq(this.clientVersionText)),$.push({type:"protocol-version",protocol:e_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+V)break;this.consume(1);let K=J5(this.consume(4+V).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let Q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:e_,types:Q});let q=null;if(Q.includes(2)&&this.password!==null)q=2;else if(Q.includes(1))q=1;else if(Q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:e_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q===0){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+G)break;let V=J5(this.consume(4+G).slice(4));throw Error(V||"VNC server rejected the connection.")}if(Q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:e_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Q!==1)throw Error(`Unsupported VNC security type ${Q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:e_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(q9(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let G=J5(this.consume(4+q).slice(4));throw Error(G||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:e_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Q=Y.getUint16(0,!1),q=Y.getUint16(2,!1),G=G9(Y,4),V=Y.getUint32(20,!1);if(this.buffer.byteLength<24+V)break;let K=this.consume(24),B=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=B.getUint16(0,!1),this.framebufferHeight=B.getUint16(2,!1),this.serverPixelFormat=G9(B,4),this.serverName=J5(this.consume(V)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(Rq(this.clientPixelFormat)),j.push(wq(this.encodings)),j.push(K9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:e_,width:Q,height:q,name:this.serverName,pixelFormat:G}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),G=4,V=[],K=!1,B=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<G+12){K=!0;break}let A=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,12),P=A.getUint16(0,!1),S=A.getUint16(2,!1),I=A.getUint16(4,!1),J=A.getUint16(6,!1),C=A.getInt32(8,!1);if(G+=12,C===0){let T=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),d=I*J*T;if(this.buffer.byteLength<G+d){K=!0;break}let c=this.buffer.slice(G,G+d);if(G+=d,B)this.pipeline.processRawRect(c,P,S,I,J,this.clientPixelFormat),V.push({kind:"pipeline",x:P,y:S,width:I,height:J});else V.push({kind:"rgba",x:P,y:S,width:I,height:J,rgba:this.decodeRawRect(c,I,J,this.clientPixelFormat)});continue}if(C===2){let T=bq(this.buffer,G,I,J,this.clientPixelFormat);if(!T){K=!0;break}if(B){let d=this.buffer.slice(G,G+T.consumed);this.pipeline.processRreRect(d,P,S,I,J,this.clientPixelFormat),V.push({kind:"pipeline",x:P,y:S,width:I,height:J})}else V.push({kind:"rgba",x:P,y:S,width:I,height:J,rgba:T.rgba});G+=T.consumed;continue}if(C===1){if(this.buffer.byteLength<G+4){K=!0;break}let T=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,4),d=T.getUint16(0,!1),c=T.getUint16(2,!1);if(G+=4,B)this.pipeline.processCopyRect(P,S,I,J,d,c),V.push({kind:"pipeline",x:P,y:S,width:I,height:J});else V.push({kind:"copy",x:P,y:S,width:I,height:J,srcX:d,srcY:c});continue}if(C===16){let T=fq(this.buffer,G,I,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!T){K=!0;break}if(G+=T.consumed,T.skipped)continue;if(B&&T.decompressed)this.pipeline.processZrleTileData(T.decompressed,P,S,I,J,this.clientPixelFormat),V.push({kind:"pipeline",x:P,y:S,width:I,height:J});else V.push({kind:"rgba",x:P,y:S,width:I,height:J,rgba:T.rgba});continue}if(C===5){let T=gq(this.buffer,G,I,J,this.clientPixelFormat,this.decodeRawRect);if(!T){K=!0;break}if(B){let d=this.buffer.slice(G,G+T.consumed);this.pipeline.processHextileRect(d,P,S,I,J,this.clientPixelFormat),V.push({kind:"pipeline",x:P,y:S,width:I,height:J})}else V.push({kind:"rgba",x:P,y:S,width:I,height:J,rgba:T.rgba});G+=T.consumed;continue}if(C===-223){if(this.framebufferWidth=I,this.framebufferHeight=J,B)this.pipeline.initFramebuffer(I,J);V.push({kind:"resize",x:P,y:S,width:I,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${C}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(G);let W={type:"framebuffer-update",protocol:e_,width:this.framebufferWidth,height:this.framebufferHeight,rects:V};if(B)W.framebuffer=this.pipeline.getFramebuffer();$.push(W),j.push(K9(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:e_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let G=J5(this.consume(q));$.push({type:"clipboard",protocol:e_,text:G}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var K4="piclaw://vnc";function mq(_){let $=String(_||"");if($===K4)return null;if(!$.startsWith(`${K4}/`))return null;let j=$.slice(`${K4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function Z5(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function uq(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function hq(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function pq(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function cq(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function lq(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class B9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=mq($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=lq("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${Z5(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${Z5(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${Z5(Y.id)}" data-target-label="${Z5(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=cq(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=n5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let Q=Y.getAttribute("data-target-open-tab"),q=Y.getAttribute("data-target-label")||Q||"VNC";if(!Q)return;this.openTargetTab(Q,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${Z5($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${Z5(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=n5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=n5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${Q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=h7($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return g7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(i8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=M$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~M$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of m7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(u7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=I$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??I$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new s8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await b7(),Y={};if(Z)Y.pipeline=Z,Y.decodeRawRect=(G,V,K,B)=>Z.decodeRawRectToRgba(G,V,K,B);let Q=n5(this.authPassword);if(Q!==null)Y.password=Q;if(j)Y.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new s8(Y),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new D$({url:pq(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(G)=>{this.applyMetrics(G)},onMessage:(G)=>{this.handleSocketMessage(G)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await uq(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${Z5(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await hq(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var f$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===K4||$.startsWith(`${K4}/`)?9000:!1},mount(_,$){return new B9(_,$)}};function m4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function dq(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,Q=Z?.[2]||"",q=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),K=Y.startsWith("/")?Y:`${G?`${G}/`:""}${Y}`,B=[];for(let U of K.split("/")){if(!U||U===".")continue;if(U===".."){if(B.length>0)B.pop();continue}B.push(U)}let W=B.join("/");return`${J8(W)}${Q}${q}`}function e5(_){return _?.preview||null}function iq(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function oq(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function nq(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${m4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${m4(g_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${m4(_5($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${m4(oq($))}</span>`),Z.push(`<span><strong>extension:</strong> ${m4(iq(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${m4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function sq(_){let $=e5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=nq(_,$);if($.kind==="image"){let Z=$.url||($.path?J8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${m4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=D_($.text||"",null,{rewriteImageSrc:(Y)=>dq(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${m4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class b${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=sq(this.context)}getContent(){let _=e5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=e5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var g$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=e5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new b$(_,$)}},m$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return e5(_)||_?.path?1:!1},mount(_,$){return new b$(_,$)}};var rq=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),aq={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},tq={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function U9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function W9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class L9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=U9(j),Q=tq[Y]||"\uD83D\uDCC4",q=aq[Y]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${W9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${W9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let V=G.querySelector("#ov-open-tab");if(V)V.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class F9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=U9(_?.path);if(!$||!rq.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new L9(_,$);return new F9(_,$)}};var eq=/\.(csv|tsv)$/i;function z9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class H9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${z9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${z9(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class O9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var h$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!eq.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new H9(_,$);return new O9(_,$)}};var _G=/\.pdf$/i;function $G(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class J9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${$G(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#pdf-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class D9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var p$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!_G.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new J9(_,$);return new D9(_,$)}};var jG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function c$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class A9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${c$(Y)}" alt="${c$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${c$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!jG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new A9(_,$);return new E9(_,$)}};var ZG=/\.(mp4|m4v|mov|webm|ogv)$/i;function YG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class M9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${YG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#video-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var d$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ZG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new M9(_,$);return new I9(_,$)}};function QG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function qG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var i$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function k9(_){let $=String(_||"").trim();return $?$:i$}function GG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function KG(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function XG(_,$="*"){try{let j=(Q)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Q=Z.prototype.saveData;Z.prototype.saveData=function(q,G,V,K,B,W){try{if(q&&V!=null&&j({filename:q,format:G,data:V,mimeType:K,base64Encoded:Boolean(B),defaultMode:W}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let Q=Y.prototype.exportFile;Y.prototype.exportFile=function(q,G,V,K,B,W){try{if(G&&j({filename:G,data:q,mimeType:V,base64Encoded:Boolean(K),mode:B,folderId:W}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function C9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${KG(j)}`}class P9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${qG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#drawio-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class T9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=GG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(XG(this.iframe.contentWindow))return;setTimeout(Q,250)};Q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=i$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await C9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await C9(_,"image/png");else this.xmlData=k9(await _.text());else if(_.status===404)this.xmlData=i$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?k9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var o$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!QG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new P9(_,$);return new T9(_,$)}};var NG=/\.mindmap\.ya?ml$/i,n$=String(Date.now());function S9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function s$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function VG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function BG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Z)}class x9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class y9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(S9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,VG("/static/css/mindmap.css"),await Promise.all([s$("/static/js/vendor/d3-mindmap.min.js?v="+n$),s$("/static/js/vendor/js-yaml.min.js?v="+n$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),BG(this.mindmapEl);let j=S9(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await s$("/static/js/vendor/mindmap-editor.js?v="+n$),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(Q)=>{this.lastContent=Q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)},resolveImagePath:(Q)=>{if(Q.startsWith("data:")||Q.startsWith("http"))return Q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var r$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new x9(_,$);return new y9(_,$)}};var WG=/\.kanban\.md$/i,UG=String(Date.now());function R9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function LG(){let _=window;if(_.preact)return;_.preact={h:L8,render:z8,Component:X5,createContext:Q2},_.preactHooks={useState:u,useEffect:h,useCallback:y,useRef:x,useMemo:C0,useReducer:J6,useContext:K2,useLayoutEffect:D6,useImperativeHandle:G2,useErrorBoundary:N2,useDebugValue:X2},_.htm={bind:()=>L}}function FG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function zG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class w9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class v9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(R9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,zG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=R9();try{if(LG(),await FG("/static/js/vendor/kanban-editor.js?v="+UG),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var a$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!WG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new w9(_,$);return new v9(_,$)}};class f9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var _1=new f9;var r8="workspaceExplorerScale",HG=["compact","default","comfortable"],OG=new Set(HG),JG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function b9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return OG.has(j)?j:$}function t$(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function DG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function AG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function e$(_={}){let $=DG(_),j=_.stored?b9(_.stored,$):$;return AG(j,_)}function g9(_){return JG[b9(_)]}function EG(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function _3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function m9(_,$,j={}){let Z=j?.resolvePane;if(_3(_,Z))return!0;return EG($)}var MG=60000,c9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function IG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return _3($,(j)=>o0.resolve(j))}function l9(_,$,j,Z=0,Y=[]){if(!j&&c9(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Q of _.children)l9(Q,$,j,Z+1,Y);return Y}function u9(_,$,j){if(!_)return"";let Z=[],Y=(Q)=>{if(!j&&c9(Q))return;if(Z.push(Q.type==="dir"?`d:${Q.path}`:`f:${Q.path}`),Q.children&&$?.has(Q.path))for(let q of Q.children)Y(q)};return Y(_),Z.join("|")}function Y3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((G)=>[G?.path,G])):new Map,Q=!j||j.length!==Z.length,q=Z.map((G)=>{let V=Y3(Y.get(G.path),G);if(V!==Y.get(G.path))Q=!0;return V});return Q?{...$,children:q}:_}function j3(_,$,j){if(!_)return _;if(_.path===$)return Y3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((Q)=>{let q=j3(Q,$,j);if(q!==Q)Z=!0;return q});return Z?{..._,children:Y}:_}var d9=4,$3=14,kG=8,CG=16;function i9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=i9(Z);return _.__bytes=j,j}function o9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=d9)return Z;let Y=Array.isArray(_.children)?_.children:[],Q=[];for(let G of Y){let V=Math.max(0,Number(G?.__bytes??G?.size??0));if(V<=0)continue;if(G.type==="dir")Q.push({kind:"dir",node:G,size:V});else Q.push({kind:"file",name:G.name,path:G.path,size:V})}Q.sort((G,V)=>V.size-G.size);let q=Q;if(Q.length>$3){let G=Q.slice(0,$3-1),V=Q.slice($3-1),K=V.reduce((B,W)=>B+W.size,0);G.push({kind:"other",name:`+${V.length} more`,path:`${Z.path}/[other]`,size:K}),q=G}return Z.children=q.map((G)=>{if(G.kind==="dir")return o9(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function h9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function n9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${Q}%)`}function a8(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function Q3(_,$,j,Z,Y,Q){let q=Math.PI*2-0.0001,G=Q-Y>q?Y+q:Q,V=a8(_,$,Z,Y),K=a8(_,$,Z,G),B=a8(_,$,j,G),W=a8(_,$,j,Y),U=G-Y>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var s9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function r9(_,$,j){let Z=[],Y=[],Q=Math.max(0,Number($)||0),q=(G,V,K,B)=>{let W=Array.isArray(G?.children)?G.children:[];if(!W.length)return;let U=Math.max(0,Number(G.size)||0);if(U<=0)return;let A=K-V,P=V;W.forEach((S,I)=>{let J=Math.max(0,Number(S.size)||0);if(J<=0)return;let C=J/U,T=P,d=I===W.length-1?K:P+A*C;if(P=d,d-T<0.003)return;let c=s9[B];if(c){let _0=n9(T,B,j);if(Z.push({key:S.path,path:S.path,label:S.name,size:J,color:_0,depth:B,startAngle:T,endAngle:d,innerRadius:c[0],outerRadius:c[1],d:Q3(120,120,c[0],c[1],T,d)}),B===1)Y.push({key:S.path,name:S.name,size:J,pct:Q>0?J/Q*100:0,color:_0})}if(B<d9)q(S,T,d,B+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function Z3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=Z3(Z,$);if(Y)return Y}return null}function a9(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=s9[1];if(!Y)return{segments:[],legend:[]};let Q=-Math.PI/2,q=Math.PI*3/2,G=n9(Q,1,Z),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:G,depth:1,startAngle:Q,endAngle:q,innerRadius:Y[0],outerRadius:Y[1],d:Q3(120,120,Y[0],Y[1],Q,q)}],legend:[{key:K,name:_,size:j,pct:100,color:G}]}}function p9(_,$=!1,j=!1){if(!_)return null;let Z=i9(_),Y=o9(_,0),Q=Y.size||Z,{segments:q,legend:G}=r9(Y,Q,j);if(!q.length&&Q>0){let V=a9("[files]",Y.path,Q,j);q=V.segments,G=V.legend}return{root:Y,totalSize:Q,segments:q,legend:G,truncated:$,isDarkTheme:j}}function PG({payload:_}){if(!_)return null;let[$,j]=u(null),[Z,Y]=u(_?.root?.path||"."),[Q,q]=u(()=>[_?.root?.path||"."]),[G,V]=u(!1);h(()=>{let H=_?.root?.path||".";Y(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),h(()=>{if(!Z)return;V(!0);let H=setTimeout(()=>V(!1),180);return()=>clearTimeout(H)},[Z]);let K=C0(()=>{return Z3(_.root,Z)||_.root},[_?.root,Z]),B=K?.size||_.totalSize||0,{segments:W,legend:U}=C0(()=>{let H=r9(K,B,_.isDarkTheme);if(H.segments.length>0)return H;if(B<=0)return H;let R=K?.children?.length?"Total":"[files]";return a9(R,K?.path||_?.root?.path||".",B,_.isDarkTheme)},[K,B,_.isDarkTheme,_?.root?.path]),[A,P]=u(W),S=x(new Map),I=x(0);h(()=>{let H=S.current,R=new Map(W.map((Z0)=>[Z0.key,Z0])),p=performance.now(),G0=220,l=(Z0)=>{let $0=Math.min(1,(Z0-p)/220),K0=$0*(2-$0),V0=W.map((B0)=>{let E0=H.get(B0.key)||{startAngle:B0.startAngle,endAngle:B0.startAngle,innerRadius:B0.innerRadius,outerRadius:B0.innerRadius},M0=(r0,h0)=>r0+(h0-r0)*K0,n0=M0(E0.startAngle,B0.startAngle),R0=M0(E0.endAngle,B0.endAngle),P0=M0(E0.innerRadius,B0.innerRadius),s0=M0(E0.outerRadius,B0.outerRadius);return{...B0,d:Q3(120,120,P0,s0,n0,R0)}});if(P(V0),$0<1)I.current=requestAnimationFrame(l)};if(I.current)cancelAnimationFrame(I.current);return I.current=requestAnimationFrame(l),S.current=R,()=>{if(I.current)cancelAnimationFrame(I.current)}},[W]);let J=A.length?A:W,C=B>0?g_(B):"0 B",T=K?.name||"",c=(T&&T!=="."?T:"Total")||"Total",_0=C,j0=Q.length>1,b=(H)=>{if(!H?.path)return;let R=Z3(_.root,H.path);if(!R||!Array.isArray(R.children)||R.children.length===0)return;q((p)=>[...p,R.path]),Y(R.path),j(null)},w=()=>{if(!j0)return;q((H)=>{let R=H.slice(0,-1);return Y(R[R.length-1]||_?.root?.path||"."),R}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${K?.path||_?.root?.path||"."}`}
                data-segments=${J.length}
                data-base-size=${B}>
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
                        onClick=${()=>b(H)}
                    >
                        <title>${H.label} — ${g_(H.size)}</title>
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${c}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${_0}</text>
                </g>
            </svg>
            ${U.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((H)=>L`
                        <div key=${H.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${H.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${H.name}>${H.name}</span>
                            <span class="workspace-folder-starburst-size">${g_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function TG({mediaId:_}){let[$,j]=u(null);if(h(()=>{if(!_)return;W5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?g_($.metadata.size):"";return L`
        <a href=${b_(_)} download=${Z} class="file-attachment"
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
    `}function t9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:Q,onToggleTerminal:q,terminalVisible:G=!1}){let[V,K]=u(null),[B,W]=u(new Set(["."])),[U,A]=u(null),[P,S]=u(null),[I,J]=u(""),[C,T]=u(null),[d,c]=u(null),[_0,j0]=u(!0),[b,w]=u(!1),[H,R]=u(null),[p,G0]=u(()=>U5("workspaceShowHidden",!1)),[l,Z0]=u(!1),[$0,K0]=u(null),[V0,B0]=u(null),[O0,E0]=u(null),[M0,n0]=u(!1),[R0,P0]=u(null),[s0,r0]=u(()=>h9()),[h0,a0]=u(()=>e$({stored:J_(r8),...t$()})),[d0,Z1]=u(!1),z0=x(B),c0=x(""),Y1=x(null),G1=x(0),K_=x(new Set),J1=x(null),$1=x(new Map),u1=x(_),I1=x(Z),K1=x(null),p0=x(null),x1=x(null),k1=x(null),t=x(null),W0=x(null),H0=x("."),N0=x(null),w0=x({path:null,dragging:!1,startX:0,startY:0}),x0=x({path:null,dragging:!1,startX:0,startY:0}),v0=x({path:null,timer:0}),k0=x(!1),f0=x(0),i0=x(new Map),D0=x(null),g0=x(null),J0=x(null),q0=x(null),v=x(null),e=x(null),L0=x(p),I0=x($),m0=x(j??$),X1=x(0),D1=x(O0),e0=x(l),h1=x($0),X4=x(null),z_=x({x:0,y:0}),n1=x(0),H_=x(null),X_=x(U),Q1=x(P),s1=x(null),N4=x(C);u1.current=_,I1.current=Z,h(()=>{z0.current=B},[B]),h(()=>{L0.current=p},[p]),h(()=>{I0.current=$},[$]),h(()=>{m0.current=j??$},[j,$]),h(()=>{D1.current=O0},[O0]),h(()=>{if(typeof window>"u")return;let z=()=>{a0(e$({stored:J_(r8),...t$()}))};z();let k=()=>z(),m=()=>z(),f=(Y0)=>{if(!Y0||Y0.key===null||Y0.key===r8)z()};window.addEventListener("resize",k),window.addEventListener("focus",m),window.addEventListener("storage",f);let n=window.matchMedia?.("(pointer: coarse)"),X0=window.matchMedia?.("(hover: none)"),U0=(Y0,T0)=>{if(!Y0)return;if(Y0.addEventListener)Y0.addEventListener("change",T0);else if(Y0.addListener)Y0.addListener(T0)},F0=(Y0,T0)=>{if(!Y0)return;if(Y0.removeEventListener)Y0.removeEventListener("change",T0);else if(Y0.removeListener)Y0.removeListener(T0)};return U0(n,k),U0(X0,k),()=>{window.removeEventListener("resize",k),window.removeEventListener("focus",m),window.removeEventListener("storage",f),F0(n,k),F0(X0,k)}},[]),h(()=>{let z=(k)=>{let m=k?.detail?.path;if(!m)return;let f=m.split("/"),n=[];for(let X0=1;X0<f.length;X0++)n.push(f.slice(0,X0).join("/"));if(n.length)W((X0)=>{let U0=new Set(X0);U0.add(".");for(let F0 of n)U0.add(F0);return U0});A(m),requestAnimationFrame(()=>{let X0=document.querySelector(`[data-path="${CSS.escape(m)}"]`);if(X0)X0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),h(()=>{e0.current=l},[l]),h(()=>{h1.current=$0},[$0]),h(()=>{X_.current=U},[U]),h(()=>{Q1.current=P},[P]),h(()=>{N4.current=C},[C]),h(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>r0(h9());z();let k=window.matchMedia?.("(prefers-color-scheme: dark)"),m=()=>z();if(k?.addEventListener)k.addEventListener("change",m);else if(k?.addListener)k.addListener(m);let f=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(f?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)f?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(k?.removeEventListener)k.removeEventListener("change",m);else if(k?.removeListener)k.removeListener(m);f?.disconnect()}},[]),h(()=>{if(!P)return;let z=t.current;if(!z)return;let k=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(k)},[P]),h(()=>{if(!d0)return;let z=(m)=>{let f=m?.target;if(!(f instanceof Element))return;if(v.current?.contains(f))return;if(e.current?.contains(f))return;Z1(!1)},k=(m)=>{if(m?.key==="Escape")Z1(!1),e.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",k),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",k)}},[d0]);let m_=async(z,k={})=>{let m=Boolean(k?.autoOpen),f=String(z||"").trim();w(!0),T(null),c(null);try{let n=await b5(f,20000);if(m&&f&&m9(f,n,{resolvePane:(X0)=>o0.resolve(X0)}))return I1.current?.(f,n),n;return T(n),n}catch(n){let X0={error:n.message||"Failed to load preview"};return T(X0),X0}finally{w(!1)}};K1.current=m_;let Y5=async()=>{if(!I0.current)return;try{let z=await f5("",1,L0.current),k=u9(z.root,z0.current,L0.current);if(k===c0.current){j0(!1);return}if(c0.current=k,Y1.current=z.root,!G1.current)G1.current=requestAnimationFrame(()=>{G1.current=0,K((m)=>Y3(m,Y1.current)),j0(!1)})}catch(z){R(z.message||"Failed to load workspace"),j0(!1)}},u4=async(z)=>{if(!z)return;if(K_.current.has(z))return;K_.current.add(z);try{let k=await f5(z,1,L0.current);K((m)=>j3(m,z,k.root))}catch(k){R(k.message||"Failed to load workspace")}finally{K_.current.delete(z)}};p0.current=u4;let f1=y(()=>{let z=U;if(!z)return".";let k=$1.current?.get(z);if(k&&k.type==="dir")return k.path;if(z==="."||!z.includes("/"))return".";let m=z.split("/");return m.pop(),m.join("/")||"."},[U]),O_=y((z)=>{let k=z?.closest?.(".workspace-row");if(!k)return null;let m=k.dataset.path,f=k.dataset.type;if(!m)return null;if(f==="dir")return m;if(m.includes("/")){let n=m.split("/");return n.pop(),n.join("/")||"."}return"."},[]),y1=y((z)=>{return O_(z?.target||null)},[O_]),A1=y((z)=>{D1.current=z,E0(z)},[]),V1=y(()=>{let z=v0.current;if(z?.timer)clearTimeout(z.timer);v0.current={path:null,timer:0}},[]),u_=y((z)=>{if(!z||z==="."){V1();return}let k=$1.current?.get(z);if(!k||k.type!=="dir"){V1();return}if(z0.current?.has(z)){V1();return}if(v0.current?.path===z)return;V1();let m=setTimeout(()=>{v0.current={path:null,timer:0},p0.current?.(z),W((f)=>{let n=new Set(f);return n.add(z),n})},600);v0.current={path:z,timer:m}},[V1]),h_=y((z,k)=>{if(z_.current={x:z,y:k},n1.current)return;n1.current=requestAnimationFrame(()=>{n1.current=0;let m=X4.current;if(!m)return;let f=z_.current;m.style.transform=`translate(${f.x+12}px, ${f.y+12}px)`})},[]),W1=y((z)=>{if(!z)return;let m=($1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!m)return;B0({path:z,label:m})},[]),__=y(()=>{if(B0(null),n1.current)cancelAnimationFrame(n1.current),n1.current=0;if(X4.current)X4.current.style.transform="translate(-9999px, -9999px)"},[]),u0=y((z)=>{if(!z)return".";let k=$1.current?.get(z);if(k&&k.type==="dir")return k.path;if(z==="."||!z.includes("/"))return".";let m=z.split("/");return m.pop(),m.join("/")||"."},[]),C1=y(()=>{S(null),J("")},[]),E_=y((z)=>{if(!z)return;let m=($1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!m||z===".")return;S(z),J(m)},[]),$_=y(async()=>{let z=Q1.current;if(!z)return;let k=(I||"").trim();if(!k){C1();return}let m=$1.current?.get(z),f=(m?.name||z.split("/").pop()||z).trim();if(k===f){C1();return}try{let X0=(await m6(z,k))?.path||z,U0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(C1(),R(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:X0,type:m?.type||"file"}})),m?.type==="dir")W((F0)=>{let Y0=new Set;for(let T0 of F0)if(T0===z)Y0.add(X0);else if(T0.startsWith(`${z}/`))Y0.add(`${X0}${T0.slice(z.length)}`);else Y0.add(T0);return Y0});if(A(X0),m?.type==="dir")T(null),w(!1),c(null);else K1.current?.(X0);p0.current?.(U0)}catch(n){R(n?.message||"Failed to rename file")}},[C1,I]),h4=y(async(z)=>{let f=z||".";for(let n=0;n<50;n+=1){let U0=`untitled${n===0?"":`-${n}`}.md`;try{let Y0=(await g6(f,U0,""))?.path||(f==="."?U0:`${f}/${U0}`);if(f&&f!==".")W((T0)=>new Set([...T0,f]));A(Y0),R(null),p0.current?.(f),K1.current?.(Y0);return}catch(F0){if(F0?.status===409||F0?.code==="file_exists")continue;R(F0?.message||"Failed to create file");return}}R("Failed to create file (untitled name already in use).")},[]),_4=y((z)=>{if(z?.stopPropagation?.(),M0)return;let k=u0(X_.current);h4(k)},[M0,u0,h4]);h(()=>{if(typeof window>"u")return;let z=(k)=>{let m=k?.detail?.updates||[];if(!Array.isArray(m)||m.length===0)return;K((F0)=>{let Y0=F0;for(let T0 of m){if(!T0?.root)continue;if(!Y0||T0.path==="."||!T0.path)Y0=T0.root;else Y0=j3(Y0,T0.path,T0.root)}if(Y0)c0.current=u9(Y0,z0.current,L0.current);return j0(!1),Y0});let f=X_.current;if(Boolean(f)&&m.some((F0)=>{let Y0=F0?.path||"";if(!Y0||Y0===".")return!0;return f===Y0||f.startsWith(`${Y0}/`)||Y0.startsWith(`${f}/`)}))i0.current.clear();if(!f||!N4.current)return;let X0=$1.current?.get(f);if(X0&&X0.type==="dir")return;if(m.some((F0)=>{let Y0=F0?.path||"";if(!Y0||Y0===".")return!0;return f===Y0||f.startsWith(`${Y0}/`)}))K1.current?.(f)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),J1.current=Y5;let p4=x(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),k=m0.current??I0.current,m=document.visibilityState!=="hidden"&&(k||z.matches&&I0.current);g5(m,L0.current).catch(()=>{})}).current,$4=x(0),Q5=x(()=>{if($4.current)clearTimeout($4.current);$4.current=setTimeout(()=>{$4.current=0,p4()},250)}).current;h(()=>{if(I0.current)J1.current?.();Q5()},[$,j]),h(()=>{J1.current(),p4();let z=setInterval(()=>J1.current(),MG),k=L5("previewHeight",null),m=Number.isFinite(k)?Math.min(Math.max(k,80),600):280;if(f0.current=m,x1.current)x1.current.style.setProperty("--preview-height",`${m}px`);let f=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),n=()=>Q5();if(f.addEventListener)f.addEventListener("change",n);else if(f.addListener)f.addListener(n);return document.addEventListener("visibilitychange",n),()=>{if(clearInterval(z),G1.current)cancelAnimationFrame(G1.current),G1.current=0;if(f.removeEventListener)f.removeEventListener("change",n);else if(f.removeListener)f.removeListener(n);if(document.removeEventListener("visibilitychange",n),$4.current)clearTimeout($4.current),$4.current=0;if(N0.current)clearTimeout(N0.current),N0.current=null;g5(!1,L0.current).catch(()=>{})}},[]);let j4=C0(()=>l9(V,B,p),[V,B,p]),p_=C0(()=>new Map(j4.map((z)=>[z.node.path,z.node])),[j4]),M5=C0(()=>g9(h0),[h0]);$1.current=p_;let U1=(U?$1.current.get(U):null)?.type==="dir";h(()=>{if(!U||!U1){P0(null),D0.current=null,g0.current=null;return}let z=U,k=`${p?"hidden":"visible"}:${U}`,m=i0.current,f=m.get(k);if(f?.root){m.delete(k),m.set(k,f);let U0=p9(f.root,Boolean(f.truncated),s0);if(U0)D0.current=U0,g0.current=U,P0({loading:!1,error:null,payload:U0});return}let n=D0.current,X0=g0.current;P0({loading:!0,error:null,payload:X0===U?n:null}),f5(U,kG,p).then((U0)=>{if(X_.current!==z)return;let F0={root:U0?.root,truncated:Boolean(U0?.truncated)};m.delete(k),m.set(k,F0);while(m.size>CG){let T0=m.keys().next().value;if(!T0)break;m.delete(T0)}let Y0=p9(F0.root,F0.truncated,s0);D0.current=Y0,g0.current=U,P0({loading:!1,error:null,payload:Y0})}).catch((U0)=>{if(X_.current!==z)return;P0({loading:!1,error:U0?.message||"Failed to load folder size chart",payload:X0===U?n:null})})},[U,U1,p,s0]);let R1=Boolean(C&&C.kind==="text"&&!U1&&(!C.size||C.size<=262144)),q5=R1?"Open in editor":C?.size>262144?"File too large to edit":"File is not editable",M_=Boolean(U&&U!=="."),j_=Boolean(U&&!U1),p1=Boolean(U&&!U1),P1=U&&U1?D8(U,p):null,b1=y(()=>Z1(!1),[]),H1=y(async(z)=>{b1();try{await z?.()}catch(k){console.warn("[workspace-explorer] Header menu action failed:",k)}},[b1]);h(()=>{let z=J0.current;if(q0.current)q0.current.dispose(),q0.current=null;if(!z)return;if(z.innerHTML="",!U||U1||!C||C.error)return;let k={path:U,content:typeof C.text==="string"?C.text:void 0,mtime:C.mtime,size:C.size,preview:C,mode:"view"},m=o0.resolve(k)||o0.get("workspace-preview-default");if(!m)return;let f=m.mount(z,k);return q0.current=f,()=>{if(q0.current===f)f.dispose(),q0.current=null;z.innerHTML=""}},[U,U1,C]);let I_=(z)=>{let k=z?.target;if(k instanceof Element)return k;return k?.parentElement||null},k_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},C_=x((z)=>{let k=I_(z),m=k?.closest?.("[data-path]");if(!m)return;let f=m.dataset.path;if(!f||f===".")return;let n=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),X0=Boolean(k?.closest?.(".workspace-caret"));if(n||X0)return;if(Q1.current===f)return;E_(f)}).current,Z4=x((z)=>{if(k0.current){k0.current=!1;return}let k=I_(z),m=k?.closest?.("[data-path]");if(k1.current?.focus?.(),!m)return;let f=m.dataset.path,n=m.dataset.type,X0=Boolean(k?.closest?.(".workspace-caret")),U0=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),F0=X_.current===f,Y0=Q1.current;if(Y0){if(Y0===f)return;C1()}let T0=n==="file"&&s1.current===f&&!X0&&!U0;if(n==="dir"){if(s1.current=null,A(f),T(null),c(null),w(!1),!z0.current.has(f))p0.current?.(f);if(F0&&!X0)return;W((V_)=>{let Q_=new Set(V_);if(Q_.has(f))Q_.delete(f);else Q_.add(f);return Q_})}else{s1.current=null,A(f);let T1=$1.current.get(f);if(T1)u1.current?.(T1.path,T1);if(!U0&&!X0&&IG(f))I1.current?.(f,N4.current);else{let Q_=!U0&&!X0;K1.current?.(f,{autoOpen:Q_})}}}).current,Z_=x(()=>{c0.current="",J1.current(),Array.from(z0.current||[]).filter((k)=>k&&k!==".").forEach((k)=>p0.current?.(k))}).current,r1=x(()=>{s1.current=null,A(null),T(null),c(null),w(!1)}).current,P_=x(()=>{G0((z)=>{let k=!z;if(typeof window<"u")N1("workspaceShowHidden",String(k));return L0.current=k,g5(!0,k).catch(()=>{}),c0.current="",J1.current?.(),Array.from(z0.current||[]).filter((f)=>f&&f!==".").forEach((f)=>p0.current?.(f)),k})}).current,V4=x((z)=>{if(I_(z)?.closest?.("[data-path]"))return;r1()}).current,E1=y(async(z)=>{if(!z)return;let k=z.split("/").pop()||z;if(!window.confirm(`Delete "${k}"? This cannot be undone.`))return;try{await h6(z);let f=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(X_.current===z)r1();p0.current?.(f),R(null)}catch(f){T((n)=>({...n||{},error:f.message||"Failed to delete file"}))}},[r1]),Y4=y((z)=>{let k=k1.current;if(!k||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;k.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),c4=y((z)=>{let k=j4;if(!k||k.length===0)return;let m=U?k.findIndex((f)=>f.node.path===U):-1;if(z.key==="ArrowDown"){z.preventDefault();let f=Math.min(m+1,k.length-1),n=k[f];if(!n)return;if(A(n.node.path),n.node.type!=="dir")u1.current?.(n.node.path,n.node),K1.current?.(n.node.path);else T(null),w(!1),c(null);Y4(n.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let f=m<=0?0:m-1,n=k[f];if(!n)return;if(A(n.node.path),n.node.type!=="dir")u1.current?.(n.node.path,n.node),K1.current?.(n.node.path);else T(null),w(!1),c(null);Y4(n.node.path);return}if(z.key==="ArrowRight"&&m>=0){let f=k[m];if(f?.node?.type==="dir"&&!B.has(f.node.path))z.preventDefault(),p0.current?.(f.node.path),W((n)=>new Set([...n,f.node.path]));return}if(z.key==="ArrowLeft"&&m>=0){let f=k[m];if(f?.node?.type==="dir"&&B.has(f.node.path))z.preventDefault(),W((n)=>{let X0=new Set(n);return X0.delete(f.node.path),X0});return}if(z.key==="Enter"&&m>=0){z.preventDefault();let f=k[m];if(!f)return;let n=f.node.path;if(f.node.type==="dir"){if(!z0.current.has(n))p0.current?.(n);W((U0)=>{let F0=new Set(U0);if(F0.has(n))F0.delete(n);else F0.add(n);return F0}),T(null),c(null),w(!1)}else u1.current?.(n,f.node),K1.current?.(n);return}if((z.key==="Delete"||z.key==="Backspace")&&m>=0){let f=k[m];if(!f||f.node.type==="dir")return;z.preventDefault(),E1(f.node.path);return}if(z.key==="Escape")z.preventDefault(),r1()},[r1,E1,B,j4,Y4,U]),l4=y((z)=>{let k=I_(z),m=k?.closest?.(".workspace-row");if(!m)return;let f=m.dataset.type,n=m.dataset.path;if(!n||n===".")return;if(Q1.current===n)return;let X0=z?.touches?.[0];if(!X0)return;if(w0.current={path:k_(k)?n:null,dragging:!1,startX:X0.clientX,startY:X0.clientY},f!=="file")return;if(N0.current)clearTimeout(N0.current);N0.current=setTimeout(()=>{if(N0.current=null,w0.current?.dragging)return;E1(n)},600)},[E1]),T_=y(()=>{if(N0.current)clearTimeout(N0.current),N0.current=null;let z=w0.current;if(z?.dragging&&z.path){let k=D1.current||f1(),m=H_.current;if(typeof m==="function")m(z.path,k)}w0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,Z0(!1),K0(null),A1(null),V1(),__()},[f1,__,A1,V1]),d4=y((z)=>{let k=w0.current,m=z?.touches?.[0];if(!m||!k?.path){if(N0.current)clearTimeout(N0.current),N0.current=null;return}let f=Math.abs(m.clientX-k.startX),n=Math.abs(m.clientY-k.startY),X0=f>8||n>8;if(X0&&N0.current)clearTimeout(N0.current),N0.current=null;if(!k.dragging&&X0)k.dragging=!0,Z0(!0),K0("move"),W1(k.path);if(k.dragging){z.preventDefault(),h_(m.clientX,m.clientY);let U0=document.elementFromPoint(m.clientX,m.clientY),F0=O_(U0)||f1();if(D1.current!==F0)A1(F0);u_(F0)}},[O_,f1,W1,h_,A1,u_]),G5=x((z)=>{z.preventDefault();let k=x1.current;if(!k)return;let m=z.clientY,f=f0.current||280,n=z.currentTarget;n.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let X0=m,U0=(Y0)=>{X0=Y0.clientY;let T0=k.clientHeight-80,T1=Math.min(Math.max(f-(Y0.clientY-m),80),T0);k.style.setProperty("--preview-height",`${T1}px`),f0.current=T1},F0=()=>{let Y0=k.clientHeight-80,T0=Math.min(Math.max(f-(X0-m),80),Y0);f0.current=T0,n.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N1("previewHeight",String(Math.round(T0))),document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",F0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",F0)}).current,c_=x((z)=>{z.preventDefault();let k=x1.current;if(!k)return;let m=z.touches[0];if(!m)return;let f=m.clientY,n=f0.current||280,X0=z.currentTarget;X0.classList.add("dragging"),document.body.style.userSelect="none";let U0=(Y0)=>{let T0=Y0.touches[0];if(!T0)return;Y0.preventDefault();let T1=k.clientHeight-80,V_=Math.min(Math.max(n-(T0.clientY-f),80),T1);k.style.setProperty("--preview-height",`${V_}px`),f0.current=V_},F0=()=>{X0.classList.remove("dragging"),document.body.style.userSelect="",N1("previewHeight",String(Math.round(f0.current||n))),document.removeEventListener("touchmove",U0),document.removeEventListener("touchend",F0),document.removeEventListener("touchcancel",F0)};document.addEventListener("touchmove",U0,{passive:!1}),document.addEventListener("touchend",F0),document.addEventListener("touchcancel",F0)}).current,l_=async()=>{if(!U)return;try{let z=await b6(U);if(z.media_id)c(z.media_id)}catch(z){T((k)=>({...k||{},error:z.message||"Failed to attach"}))}},A4=async()=>{if(!U||U1)return;await E1(U)},N_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},S_=y((z)=>{if(!N_(z))return;if(z.preventDefault(),X1.current+=1,!e0.current)Z0(!0);K0("upload");let k=y1(z)||f1();A1(k),u_(k)},[f1,y1,A1,u_]),w1=y((z)=>{if(!N_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!e0.current)Z0(!0);if(h1.current!=="upload")K0("upload");let k=y1(z)||f1();if(D1.current!==k)A1(k);u_(k)},[f1,y1,A1,u_]),E4=y((z)=>{if(!N_(z))return;if(z.preventDefault(),X1.current=Math.max(0,X1.current-1),X1.current===0)Z0(!1),K0(null),A1(null),V1()},[A1,V1]),d_=y(async(z,k=".")=>{let m=Array.from(z||[]);if(m.length===0)return;let f=k&&k!==""?k:".",n=f!=="."?f:"workspace root";n0(!0);try{let X0=null;for(let U0 of m)try{X0=await O8(U0,f)}catch(F0){let Y0=F0?.status,T0=F0?.code;if(Y0===409||T0==="file_exists"){let T1=U0?.name||"file";if(!window.confirm(`"${T1}" already exists in ${n}. Overwrite?`))continue;X0=await O8(U0,f,{overwrite:!0})}else throw F0}if(X0?.path)s1.current=X0.path,A(X0.path),K1.current?.(X0.path);p0.current?.(f)}catch(X0){R(X0.message||"Failed to upload file")}finally{n0(!1)}},[]),M4=y(async(z,k)=>{if(!z)return;let m=$1.current?.get(z);if(!m)return;let f=k&&k!==""?k:".",n=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(f===n)return;try{let U0=(await u6(z,f))?.path||z;if(m.type==="dir")W((F0)=>{let Y0=new Set;for(let T0 of F0)if(T0===z)Y0.add(U0);else if(T0.startsWith(`${z}/`))Y0.add(`${U0}${T0.slice(z.length)}`);else Y0.add(T0);return Y0});if(A(U0),m.type==="dir")T(null),w(!1),c(null);else K1.current?.(U0);p0.current?.(n),p0.current?.(f)}catch(X0){R(X0?.message||"Failed to move entry")}},[]);H_.current=M4;let I4=y(async(z)=>{if(!N_(z))return;z.preventDefault(),X1.current=0,Z0(!1),K0(null),E0(null),V1();let k=Array.from(z?.dataTransfer?.files||[]);if(k.length===0)return;let m=D1.current||y1(z)||f1();await d_(k,m)},[f1,y1,d_]),i4=y((z)=>{if(z?.stopPropagation?.(),M0)return;let k=z?.currentTarget?.dataset?.uploadTarget||".";H0.current=k,W0.current?.click()},[M0]),M1=y(()=>{if(M0)return;let z=X_.current,k=z?$1.current?.get(z):null;H0.current=k?.type==="dir"?k.path:".",W0.current?.click()},[M0]),g1=y(()=>{H1(()=>_4(null))},[H1,_4]),i_=y(()=>{H1(()=>M1())},[H1,M1]),o_=y(()=>{H1(()=>Z_())},[H1,Z_]),n_=y(()=>{H1(()=>P_())},[H1,P_]),k4=y(()=>{if(!U||!R1)return;H1(()=>I1.current?.(U,C))},[H1,U,R1,C]),C4=y(()=>{if(!U||U===".")return;H1(()=>E_(U))},[H1,U,E_]),P4=y(()=>{if(!U||U1)return;H1(()=>A4())},[H1,U,U1,A4]),x_=y(()=>{if(!U||U1)return;H1(()=>l_())},[H1,U,U1,l_]),Y_=y(()=>{if(!P1)return;if(b1(),typeof window<"u")window.open(P1,"_blank","noopener")},[b1,P1]),T4=y(()=>{b1(),Y?.()},[b1,Y]),o4=y(()=>{b1(),Q?.()},[b1,Q]),S4=y(()=>{b1(),q?.()},[b1,q]),x4=y((z)=>{if(!z||z.button!==0)return;let k=z.currentTarget;if(!k||!k.dataset)return;let m=k.dataset.path;if(!m||m===".")return;if(Q1.current===m)return;let f=I_(z);if(f?.closest?.("button, a, input, .workspace-caret"))return;if(!k_(f))return;z.preventDefault(),x0.current={path:m,dragging:!1,startX:z.clientX,startY:z.clientY};let n=(U0)=>{let F0=x0.current;if(!F0?.path)return;let Y0=Math.abs(U0.clientX-F0.startX),T0=Math.abs(U0.clientY-F0.startY),T1=Y0>4||T0>4;if(!F0.dragging&&T1)F0.dragging=!0,k0.current=!0,Z0(!0),K0("move"),W1(F0.path),h_(U0.clientX,U0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(F0.dragging){U0.preventDefault(),h_(U0.clientX,U0.clientY);let V_=document.elementFromPoint(U0.clientX,U0.clientY),Q_=O_(V_)||f1();if(D1.current!==Q_)A1(Q_);u_(Q_)}},X0=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",X0);let U0=x0.current;if(U0?.dragging&&U0.path){let F0=D1.current||f1(),Y0=H_.current;if(typeof Y0==="function")Y0(U0.path,F0)}x0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,Z0(!1),K0(null),A1(null),V1(),__(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",X0)},[O_,f1,W1,h_,__,A1,u_,V1]),y_=y(async(z)=>{let k=Array.from(z?.target?.files||[]);if(k.length===0)return;let m=H0.current||".";if(await d_(k,m),H0.current=".",z?.target)z.target.value=""},[d_]);return L`
        <aside
            class=${`workspace-sidebar${l?" workspace-drop-active":""}`}
            data-workspace-scale=${h0}
            ref=${x1}
            onDragEnter=${S_}
            onDragOver=${w1}
            onDragLeave=${E4}
            onDrop=${I4}
        >
            <input type="file" multiple style="display:none" ref=${W0} onChange=${y_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${e}
                            class=${`workspace-menu-button${d0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),Z1((k)=>!k)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${d0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${d0&&L`
                            <div class="workspace-menu-dropdown" ref=${v} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${g1} disabled=${M0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${i_} disabled=${M0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${o_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${p?" active":""}`} role="menuitem" onClick=${n_}>
                                    ${p?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&L`<div class="workspace-menu-separator"></div>`}
                                ${U&&!U1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k4} disabled=${!R1}>Open in editor</button>
                                `}
                                ${M_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C4}>Rename selected</button>
                                `}
                                ${p1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x_}>Download selected file</button>
                                `}
                                ${P1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y_}>Download selected folder (zip)</button>
                                `}
                                ${j_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${P4}>Delete selected file</button>
                                `}

                                ${(Y||Q||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${o4}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S4}>
                                        ${G?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${_4} title="New file" disabled=${M0}>
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
            <div class="workspace-tree" onClick=${V4}>
                ${M0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${_0&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${V&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${k1}
                        tabIndex="0"
                        onClick=${Z4}
                        onDblClick=${C_}
                        onKeyDown=${c4}
                        onTouchStart=${l4}
                        onTouchEnd=${T_}
                        onTouchMove=${d4}
                        onTouchCancel=${T_}
                    >
                        ${j4.map(({node:z,depth:k})=>{let m=z.type==="dir",f=z.path===U,n=z.path===P,X0=m&&B.has(z.path),U0=O0&&z.path===O0,F0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${f?" selected":""}${U0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+k*M5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${x4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${m?X0?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${m?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${m?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${n?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${t}
                                                value=${I}
                                                onInput=${(Y0)=>J(Y0?.target?.value||"")}
                                                onKeyDown=${(Y0)=>{if(Y0.key==="Enter")Y0.preventDefault(),$_();else if(Y0.key==="Escape")Y0.preventDefault(),C1()}}
                                                onBlur=${C1}
                                                onClick=${(Y0)=>Y0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${m&&!X0&&F0>0&&L`
                                        <span class="workspace-count">${F0}</span>
                                    `}
                                    ${m&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${i4}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${G5} onTouchStart=${c_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${_4} title="New file" disabled=${M0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!U1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>R1&&I1.current?.(U,C)}
                                    title=${q5}
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
                                    onClick=${A4}
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
                                    <button class="workspace-download" onClick=${M1}
                                        title="Upload files to this folder" disabled=${M0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${D8(U,p)}
                                        title="Download folder as zip" onClick=${(z)=>z.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${l_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${b&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${C?.error&&L`<div class="workspace-error">${C.error}</div>`}
                    ${U1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${R0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${R0?.error&&L`<div class="workspace-error">${R0.error}</div>`}
                        ${R0?.payload&&R0.payload.segments?.length>0&&L`
                            <${PG} payload=${R0.payload} />
                        `}
                        ${R0?.payload&&(!R0.payload.segments||R0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${C&&!C.error&&!U1&&L`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${d&&L`
                        <div class="workspace-download-card">
                            <${TG} mediaId=${d} />
                        </div>
                    `}
                </div>
            `}
            ${V0&&L`
                <div class="workspace-drag-ghost" ref=${X4}>${V0.label}</div>
            `}
        </aside>
    `}var SG=new Set(["kanban-editor","mindmap-editor"]);function xG(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function e9(_,$,j){let Z=xG(_,$,j);return SG.has(Z)}var yG=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,RG=/\.(csv|tsv)$/i,wG=/\.pdf$/i,vG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,_j=/\.drawio(\.xml|\.svg|\.png)?$/i;function $j({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:Q,onTogglePin:q,onTogglePreview:G,onEditSource:V,previewTabs:K,paneOverrides:B,onToggleDock:W,dockVisible:U,onToggleZen:A,zenMode:P,onPopOutTab:S}){let[I,J]=u(null),C=x(null);h(()=>{if(!I)return;let H=(R)=>{if(R.type==="keydown"&&R.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[I]),h(()=>{let H=(R)=>{if(R.ctrlKey&&R.key==="Tab"){if(R.preventDefault(),!_.length)return;let p=_.findIndex((G0)=>G0.id===$);if(R.shiftKey){let G0=_[(p-1+_.length)%_.length];j?.(G0.id)}else{let G0=_[(p+1)%_.length];j?.(G0.id)}return}if((R.ctrlKey||R.metaKey)&&R.key==="w"){let p=document.querySelector(".editor-pane");if(p&&p.contains(document.activeElement)){if(R.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let T=y((H,R)=>{if(H.button===1){H.preventDefault(),Z?.(R);return}if(H.button===0)j?.(R)},[j,Z]),d=y((H,R)=>{H.preventDefault(),J({id:R,x:H.clientX,y:H.clientY})},[]),c=y((H)=>{H.preventDefault(),H.stopPropagation()},[]),_0=y((H,R)=>{H.preventDefault(),H.stopPropagation(),Z?.(R)},[Z]);h(()=>{if(!$||!C.current)return;let H=C.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let j0=y((H)=>{if(!(B instanceof Map))return null;return B.get(H)||null},[B]),b=C0(()=>_.find((H)=>H.id===I?.id)||null,[I?.id,_]),w=C0(()=>{let H=I?.id;if(!H)return!1;return e9(H,j0(H),(R)=>o0.resolve(R))},[I?.id,j0]);if(!_.length)return null;return L`
        <div class="tab-strip" ref=${C} role="tablist">
            ${_.map((H)=>L`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(R)=>T(R,H.id)}
                    onContextMenu=${(R)=>d(R,H.id)}
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
                        onMouseDown=${c}
                        onClick=${(R)=>_0(R,H.id)}
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
            ${W&&L`
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
            ${A&&L`
                <button
                    class=${`tab-strip-zen-toggle${P?" active":""}`}
                    onClick=${A}
                    title=${`${P?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${P?"Exit":"Enter"} zen mode`}
                    aria-pressed=${P?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${P?L`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:L`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${I&&L`
            <div class="tab-context-menu" style=${{left:I.x+"px",top:I.y+"px"}}>
                <button onClick=${()=>{Z?.(I.id),J(null)}}>Close</button>
                <button onClick=${()=>{Y?.(I.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Q?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(I.id),J(null)}}>
                    ${b?.pinned?"Unpin":"Pin"}
                </button>
                ${w&&V&&L`
                    <button onClick=${()=>{V(I.id),J(null)}}>Edit Source</button>
                `}
                ${S&&L`
                    <button onClick=${()=>{let H=_.find((R)=>R.id===I.id);S(I.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${G&&/\.(md|mdx|markdown)$/i.test(I.id)&&L`
                    <hr />
                    <button onClick=${()=>{G(I.id),J(null)}}>
                        ${K?.has(I.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${yG.test(I.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(I.id),R=I.id.split("/").pop()||"document",p="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(R);window.open(p,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${RG.test(I.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(I.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${wG.test(I.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(I.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${vG.test(I.id)&&!_j.test(I.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(I.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${_j.test(I.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(I.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var fG=400,q3=60,jj=220,G3="mdPreviewHeight";function bG(){try{let _=localStorage.getItem(G3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=q3?$:jj}catch{return jj}}function K3({getContent:_,path:$,onClose:j}){let[Z,Y]=u(""),[Q,q]=u(bG),G=x(null),V=x(null),K=x(""),B=x(_);return B.current=_,h(()=>{let A=()=>{let S=B.current?.()||"";if(S===K.current)return;K.current=S;try{let I=D_(S,null,{sanitize:!1});Y(I)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let P=setInterval(A,fG);return()=>clearInterval(P)},[]),h(()=>{if(G.current&&Z)z4(G.current).catch(()=>{})},[Z]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let P=A.clientY,S=V.current?.offsetHeight||Q,I=V.current?.parentElement,J=I?I.offsetHeight*0.7:500,C=A.currentTarget;C.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let T=(c)=>{let _0=Math.min(Math.max(S-(c.clientY-P),q3),J);q(_0)},d=()=>{C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(G3,String(Math.round(V.current?.offsetHeight||Q)))}catch{}document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",d)}}
            onTouchStart=${(A)=>{A.preventDefault();let P=A.touches[0];if(!P)return;let S=P.clientY,I=V.current?.offsetHeight||Q,J=V.current?.parentElement,C=J?J.offsetHeight*0.7:500,T=A.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let d=(_0)=>{let j0=_0.touches[0];if(!j0)return;_0.preventDefault();let b=Math.min(Math.max(I-(j0.clientY-S),q3),C);q(b)},c=()=>{T.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(G3,String(Math.round(V.current?.offsetHeight||Q)))}catch{}document.removeEventListener("touchmove",d),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}}
        ></div>
        <div class="md-preview-panel" ref=${V} style=${{height:Q+"px"}}>
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
    `}function Zj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let Q=x(_);Q.current=_;let q=x($);q.current=$;let G=x(j);G.current=j;let V=x(Z);V.current=Z,h(()=>{G.current();let K=new A8((W,U)=>Q.current(W,U),(W)=>q.current(W),{chatJid:Y});K.connect();let B=()=>{K.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")V.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),K.disconnect()}},[Y])}function Yj(){let[_,$]=u(!1),[j,Z]=u("default"),Y=x(!1);h(()=>{let V=U5("notificationsEnabled",!1);if(Y.current=V,$(V),typeof Notification<"u")Z(Notification.permission)},[]),h(()=>{Y.current=_},[_]);let Q=y(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let V=Notification.requestPermission();if(V&&typeof V.then==="function")return V;return Promise.resolve(V)}catch{return Promise.resolve("default")}},[]),q=y(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let K=await Q();if(Z(K||"default"),K!=="granted"){Y.current=!1,$(!1),N1("notificationsEnabled","false");return}}let V=!Y.current;Y.current=V,$(V),N1("notificationsEnabled",String(V))},[Q]),G=y((V,K)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(V,{body:K});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:G}}var _8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Qj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=u(null),[Q,q]=u(!1),G=x(!1),V=x(null),K=x(!1),B=x(null),W=x(null),U=x(0);h(()=>{G.current=Q},[Q]),h(()=>{W.current=Z},[Z]),h(()=>{U.current+=1,B.current=null,K.current=!1,G.current=!1,q(!1)},[j]);let A=y(async(I=null)=>{let J=U.current;try{if(I){let C=await E6(I,50,0,j);if(J!==U.current)return;Y(C.posts),q(!1)}else{let C=await r4(10,null,j);if(J!==U.current)return;Y(C.posts),q(C.has_more)}}catch(C){if(J!==U.current)return;console.error("Failed to load posts:",C)}},[j]),P=y(async()=>{let I=U.current;try{let J=await r4(10,null,j);if(I!==U.current)return;Y((C)=>{if(!C||C.length===0)return J.posts;return _8([...J.posts,...C])}),q((C)=>C||J.has_more)}catch(J){if(I!==U.current)return;console.error("Failed to refresh timeline:",J)}},[j]),S=y(async(I={})=>{let J=U.current,C=W.current;if(!C||C.length===0)return;if(K.current)return;let{preserveScroll:T=!0,preserveMode:d="top",allowRepeat:c=!1}=I,_0=(w)=>{if(!T){w();return}if(d==="top")$(w);else _(w)},b=C.slice().sort((w,H)=>w.id-H.id)[0]?.id;if(!Number.isFinite(b))return;if(!c&&B.current===b)return;K.current=!0,B.current=b;try{let w=await r4(10,b,j);if(J!==U.current)return;if(w.posts.length>0)_0(()=>{Y((H)=>_8([...w.posts,...H||[]])),q(w.has_more)});else q(!1)}catch(w){if(J!==U.current)return;console.error("Failed to load more posts:",w)}finally{if(J===U.current)K.current=!1}},[j,_,$]);return h(()=>{V.current=S},[S]),{posts:Z,setPosts:Y,hasMore:Q,setHasMore:q,hasMoreRef:G,loadPosts:A,refreshTimeline:P,loadMore:S,loadMoreRef:V,loadingMoreRef:K,lastBeforeIdRef:B}}function qj(){let[_,$]=u(null),[j,Z]=u({text:"",totalLines:0}),[Y,Q]=u(""),[q,G]=u({text:"",totalLines:0}),[V,K]=u(null),[B,W]=u(null),[U,A]=u(null),P=x(null),S=x(0),I=x(!1),J=x(""),C=x(""),T=x(null),d=x(null),c=x(null),_0=x(null),j0=x(!1),b=x(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:Q,agentThought:q,setAgentThought:G,pendingRequest:V,setPendingRequest:K,currentTurnId:B,setCurrentTurnId:W,steerQueuedTurnId:U,setSteerQueuedTurnId:A,lastAgentEventRef:P,lastSilenceNoticeRef:S,isAgentRunningRef:I,draftBufferRef:J,thoughtBufferRef:C,pendingRequestRef:T,stalledPostIdRef:d,currentTurnIdRef:c,steerQueuedTurnIdRef:_0,thoughtExpandedRef:j0,draftExpandedRef:b}}function Gj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=x((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.clientX,A=$.current||280,P=B.currentTarget;P.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let S=U,I=(C)=>{S=C.clientX;let T=Math.min(Math.max(A+(C.clientX-U),160),600);W.style.setProperty("--sidebar-width",`${T}px`),$.current=T},J=()=>{let C=Math.min(Math.max(A+(S-U),160),600);$.current=C,P.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",N1("sidebarWidth",String(Math.round(C))),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",J)}).current,Q=x((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.touches[0];if(!U)return;let A=U.clientX,P=$.current||280,S=B.currentTarget;S.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let I=(C)=>{let T=C.touches[0];if(!T)return;C.preventDefault();let d=Math.min(Math.max(P+(T.clientX-A),160),600);W.style.setProperty("--sidebar-width",`${d}px`),$.current=d},J=()=>{S.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",N1("sidebarWidth",String(Math.round($.current||P))),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=x((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.clientX,A=j.current||$.current||280,P=B.currentTarget;P.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let S=U,I=(C)=>{S=C.clientX;let T=Math.min(Math.max(A+(C.clientX-U),200),800);W.style.setProperty("--editor-width",`${T}px`),j.current=T},J=()=>{let C=Math.min(Math.max(A+(S-U),200),800);j.current=C,P.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N1("editorWidth",String(Math.round(C))),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",J)}).current,G=x((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.touches[0];if(!U)return;let A=U.clientX,P=j.current||$.current||280,S=B.currentTarget;S.classList.add("dragging"),document.body.style.userSelect="none";let I=(C)=>{let T=C.touches[0];if(!T)return;C.preventDefault();let d=Math.min(Math.max(P+(T.clientX-A),200),800);W.style.setProperty("--editor-width",`${d}px`),j.current=d},J=()=>{S.classList.remove("dragging"),document.body.style.userSelect="",N1("editorWidth",String(Math.round(j.current||P))),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,V=x((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.clientY,A=Z?.current||200,P=B.currentTarget;P.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let S=U,I=(C)=>{S=C.clientY;let T=Math.min(Math.max(A-(C.clientY-U),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${T}px`),Z)Z.current=T;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let C=Math.min(Math.max(A-(S-U),100),window.innerHeight*0.5);if(Z)Z.current=C;P.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N1("dockHeight",String(Math.round(C))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",J)}).current,K=x((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.touches[0];if(!U)return;let A=U.clientY,P=Z?.current||200,S=B.currentTarget;S.classList.add("dragging"),document.body.style.userSelect="none";let I=(C)=>{let T=C.touches[0];if(!T)return;C.preventDefault();let d=Math.min(Math.max(P-(T.clientY-A),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${d}px`),Z)Z.current=d;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{S.classList.remove("dragging"),document.body.style.userSelect="",N1("dockHeight",String(Math.round(Z?.current||P))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:Q,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:K}}function gG(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,Q=new Map;for(let[q,G]of _.entries()){let V=q;if(Z==="dir"){if(q===$)V=j,Y=!0;else if(q.startsWith(`${$}/`))V=`${j}${q.slice($.length)}`,Y=!0}else if(q===$)V=j,Y=!0;Q.set(V,G)}return Y?Q:_}function Kj({onTabClosed:_}={}){let $=x(_);$.current=_;let[j,Z]=u(()=>_1.getTabs()),[Y,Q]=u(()=>_1.getActiveId()),[q,G]=u(()=>_1.getTabs().length>0);h(()=>{return _1.onChange((b,w)=>{Z(b),Q(w),G(b.length>0)})},[]);let[V,K]=u(()=>new Set),[B,W]=u(()=>new Map),U=y((b)=>{K((w)=>{let H=new Set(w);if(H.has(b))H.delete(b);else H.add(b);return H})},[]),A=y((b)=>{K((w)=>{if(!w.has(b))return w;let H=new Set(w);return H.delete(b),H})},[]),P=y((b)=>{W((w)=>{if(!w.has(b))return w;let H=new Map(w);return H.delete(b),H})},[]),S=y((b,w={})=>{if(!b)return;let H=typeof w?.paneOverrideId==="string"&&w.paneOverrideId.trim()?w.paneOverrideId.trim():null,R={path:b,mode:"edit"};try{if(!(H?o0.get(H):o0.resolve(R))){if(!o0.get("editor")){console.warn(`[openEditor] No pane handler for: ${b}`);return}}}catch(G0){console.warn(`[openEditor] paneRegistry.resolve() error for "${b}":`,G0)}let p=typeof w?.label==="string"&&w.label.trim()?w.label.trim():void 0;if(_1.open(b,p),H)W((G0)=>{if(G0.get(b)===H)return G0;let l=new Map(G0);return l.set(b,H),l})},[]),I=y(()=>{let b=_1.getActiveId();if(b){let w=_1.get(b);if(w?.dirty){if(!window.confirm(`"${w.label}" has unsaved changes. Close anyway?`))return}_1.close(b),A(b),P(b),$.current?.(b)}},[P,A]),J=y((b)=>{let w=_1.get(b);if(w?.dirty){if(!window.confirm(`"${w.label}" has unsaved changes. Close anyway?`))return}_1.close(b),A(b),P(b),$.current?.(b)},[P,A]),C=y((b)=>{_1.activate(b)},[]),T=y((b)=>{let w=_1.getTabs().filter((p)=>p.id!==b&&!p.pinned),H=w.filter((p)=>p.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let R=w.map((p)=>p.id);_1.closeOthers(b),R.forEach((p)=>{A(p),P(p),$.current?.(p)})},[P,A]),d=y(()=>{let b=_1.getTabs().filter((R)=>!R.pinned),w=b.filter((R)=>R.dirty).length;if(w>0){if(!window.confirm(`${w} unsaved tab${w>1?"s":""} will be closed. Continue?`))return}let H=b.map((R)=>R.id);_1.closeAll(),H.forEach((R)=>{A(R),P(R),$.current?.(R)})},[P,A]),c=y((b)=>{_1.togglePin(b)},[]),_0=y((b)=>{if(!b)return;W((w)=>{if(w.get(b)==="editor")return w;let H=new Map(w);return H.set(b,"editor"),H}),_1.activate(b)},[]),j0=y(()=>{let b=_1.getActiveId();if(b)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:b}}))},[]);return h(()=>{let b=(w)=>{let{oldPath:H,newPath:R,type:p}=w.detail||{};if(!H||!R)return;if(p==="dir"){for(let G0 of _1.getTabs())if(G0.path===H||G0.path.startsWith(`${H}/`)){let l=`${R}${G0.path.slice(H.length)}`;_1.rename(G0.id,l)}}else _1.rename(H,R);W((G0)=>gG(G0,H,R,p))};return window.addEventListener("workspace-file-renamed",b),()=>window.removeEventListener("workspace-file-renamed",b)},[]),h(()=>{let b=(w)=>{if(_1.hasUnsaved())w.preventDefault(),w.returnValue=""};return window.addEventListener("beforeunload",b),()=>window.removeEventListener("beforeunload",b)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Y,previewTabs:V,tabPaneOverrides:B,openEditor:S,closeEditor:I,handleTabClose:J,handleTabActivate:C,handleTabCloseOthers:T,handleTabCloseAll:d,handleTabTogglePin:c,handleTabTogglePreview:U,handleTabEditSource:_0,revealInExplorer:j0}}function X3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],Q=Number(Y);return Number.isFinite(Q)?Q:$}catch{return $}}var N3=X3("warning",30000),Xj=X3("finalize",120000),V3=X3("refresh",30000),Nj=30000;function Vj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Bj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Wj(_=30000){let[,$]=u(0);h(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function B3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}function Uj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function W3(_){return String(_||"").trim()||"web:default"}function Lj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Fj(_={}){return O4(_)&&p8(_)}function mG(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function uG(_={},$={}){if(!Fj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=mG({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function zj(_={}){if(!Fj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,Q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let W of Y)$.clearTimeout?.(W);Y.clear()},q=()=>{Z=0,uG({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},V=()=>{G();for(let W of[80,220,420]){let U=$.setTimeout?.(()=>{Y.delete(U),G()},W);if(U!=null)Y.add(U)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;V()},B=$.visualViewport;return V(),$.addEventListener("focus",V),$.addEventListener("pageshow",V),$.addEventListener("resize",V),$.addEventListener("orientationchange",V),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",V,!0),B?.addEventListener?.("resize",V),B?.addEventListener?.("scroll",V),()=>{Q(),$.removeEventListener("focus",V),$.removeEventListener("pageshow",V),$.removeEventListener("resize",V),$.removeEventListener("orientationchange",V),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",V,!0),B?.removeEventListener?.("resize",V),B?.removeEventListener?.("scroll",V)}}function hG(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function G_(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:hG($,j)}var pG=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Hj(_){return pG.has(String(_||"").trim())}function cG(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function U3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(cG(_),{detail:Z})),!0}var lG=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Oj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(O4({window:j,navigator:Z}))};Y();let q=lG.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Y),()=>G.removeEventListener("change",Y);if(typeof G.addListener==="function")return G.addListener(Y),()=>G.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let G of q)G();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function Jj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}var z3="piclaw_btw_session",dG=900,iG="__piclawRenameBranchFormLock__",L3=()=>{if(typeof window>"u")return null;let _=window,$=iG,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function oG(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function nG(){let _=J_(z3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",Y=typeof $.thinking==="string"?$.thinking:"",Q=typeof $.error==="string"&&$.error.trim()?$.error:null,q=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:Y,error:q==="error"?Q||"BTW stream interrupted. You can retry.":Q,model:null,status:q}}catch{return null}}var Dj=M6,Aj=k6,sG=P6,Ej=R6,Mj=w6,F3=T6,t8=G_(e1,"getAgentContext",null),rG=G_(e1,"getAutoresearchStatus",null),aG=G_(e1,"stopAutoresearch",{status:"ok"}),tG=G_(e1,"dismissAutoresearch",{status:"ok"}),Ij=G_(e1,"getAgentModels",{current:null,models:[]}),kj=G_(e1,"getActiveChatAgents",{chats:[]}),e8=G_(e1,"getChatBranches",{chats:[]}),eG=G_(e1,"renameChatBranch",null),_K=G_(e1,"pruneChatBranch",null),Cj=G_(e1,"restoreChatBranch",null),Pj=G_(e1,"getAgentQueueState",{count:0}),$K=G_(e1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),jK=G_(e1,"removeAgentQueueItem",{removed:!1}),ZK=G_(e1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});o0.register(V$);o0.register(m$);o0.register(g$);o0.register(u$);o0.register(h$);o0.register(p$);o0.register(l$);o0.register(d$);o0.register(o$);o0.register(r$);o0.register(a$);o0.register(f$);B$();o0.register(L$);o0.register(F$);function YK({locationParams:_,navigate:$}){let j=C0(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),Z=C0(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Y=C0(()=>{let X=(_.get("pane_popout")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Q=C0(()=>{let X=_.get("pane_path");return X&&X.trim()?X.trim():""},[_]),q=C0(()=>{let X=_.get("pane_label");return X&&X.trim()?X.trim():""},[_]),G=C0(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),V=C0(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():j},[j,_]),[K,B]=u("disconnected"),[W,U]=u(()=>O4()),[A,P]=u(null),[S,I]=u(null),[J,C]=u(!1),[T,d]=u("current"),[c,_0]=u([]),[j0,b]=u([]),[w,H]=u(null),{agentStatus:R,setAgentStatus:p,agentDraft:G0,setAgentDraft:l,agentPlan:Z0,setAgentPlan:$0,agentThought:K0,setAgentThought:V0,pendingRequest:B0,setPendingRequest:O0,currentTurnId:E0,setCurrentTurnId:M0,steerQueuedTurnId:n0,setSteerQueuedTurnId:R0,lastAgentEventRef:P0,lastSilenceNoticeRef:s0,isAgentRunningRef:r0,draftBufferRef:h0,thoughtBufferRef:a0,pendingRequestRef:d0,stalledPostIdRef:Z1,currentTurnIdRef:z0,steerQueuedTurnIdRef:c0,thoughtExpandedRef:Y1,draftExpandedRef:G1}=qj(),[K_,J1]=u({}),[$1,u1]=u(null),[I1,K1]=u(null),[p0,x1]=u(!1),[k1,t]=u(null),[W0,H0]=u([]),[N0,w0]=u([]),[x0,v0]=u(null),[k0,f0]=u(()=>new Map),[i0,D0]=u(()=>new Set),[g0,J0]=u([]),[q0,v]=u(!1),[e,L0]=u(()=>nG()),[I0,m0]=u(null),X1=x(new Set),D1=C0(()=>W0.find((X)=>X?.chat_jid===j)||null,[W0,j]),e0=C0(()=>N0.find((X)=>X?.chat_jid===j)||D1||null,[D1,N0,j]),h1=e0?.root_chat_jid||D1?.root_chat_jid||j,X4=oG(T),[z_,n1]=u(()=>({status:G?"running":"idle",message:G?"Preparing a new chat branch…":""})),H_=g0.length,X_=x(new Set),Q1=x([]),s1=x(new Set),N4=x(0),m_=x({inFlight:!1,lastAttemptAt:0,turnId:null});X_.current=new Set(g0.map((X)=>X.row_id)),Q1.current=g0;let{notificationsEnabled:Y5,notificationPermission:u4,toggleNotifications:f1,notify:O_}=Yj(),[y1,A1]=u(()=>new Set),[V1,u_]=u(()=>U5("workspaceOpen",!0)),h_=x(null),{editorOpen:W1,tabStripTabs:__,tabStripActiveId:u0,previewTabs:C1,tabPaneOverrides:E_,openEditor:$_,closeEditor:h4,handleTabClose:_4,handleTabActivate:p4,handleTabCloseOthers:$4,handleTabCloseAll:Q5,handleTabTogglePin:j4,handleTabTogglePreview:p_,handleTabEditSource:M5,revealInExplorer:I5}=Kj({onTabClosed:(X)=>h_.current?.(X)}),U1=x(null),R1=x(null),q5=x(null),M_=x(null),j_=o0.getDockPanes().length>0,[p1,P1]=u(!1),b1=y(()=>P1((X)=>!X),[]),H1=y(()=>{$_($5,{label:"Terminal"})},[$_]),I_=y(()=>{$_(K4,{label:"VNC"})},[$_]),k_=C0(()=>__.find((X)=>X.id===u0)||__[0]||null,[u0,__]),C_=C0(()=>u0?E_.get(u0)||null:null,[E_,u0]),Z4=C0(()=>q||k_?.label||Q||"Pane",[k_?.label,q,Q]),Z_=C0(()=>__.length>1||Boolean(u0&&C1.has(u0)),[C1,u0,__.length]),r1=C0(()=>Q===K4||Q.startsWith(`${K4}/`),[Q]),P_=C0(()=>Q===$5&&!Z_||r1,[r1,Z_,Q]),V4=Y||!Z&&(W1||j_&&p1),[E1,Y4]=u(!1),c4=x(!1),l4=y(()=>{if(!W1||Z)return;if(c4.current=p1,p1)P1(!1);Y4(!0)},[W1,Z,p1]),T_=y(()=>{if(!E1)return;if(Y4(!1),c4.current)P1(!0),c4.current=!1},[E1]),d4=y(()=>{if(E1)T_();else l4()},[E1,l4,T_]);h(()=>{if(E1&&!W1)T_()},[E1,W1,T_]),h(()=>{if(!Y||!Q)return;if(_1.getActiveId()===Q)return;$_(Q,q?{label:q}:void 0)},[$_,q,Y,Q]),h(()=>{let X=U1.current;if(!X)return;if(R1.current)R1.current.dispose(),R1.current=null;let N=u0;if(!N)return;let O={path:N,mode:"edit"},M=(C_?o0.get(C_):null)||o0.resolve(O)||o0.get("editor");if(!M){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let D=M.mount(X,O);R1.current=D,D.onDirtyChange?.((s)=>{_1.setDirty(N,s)}),D.onSaveRequest?.(()=>{}),D.onClose?.(()=>{h4()});let g=_1.getViewState(N);if(g&&typeof D.restoreViewState==="function")requestAnimationFrame(()=>D.restoreViewState(g));if(typeof D.onViewStateChange==="function")D.onViewStateChange((s)=>{_1.saveViewState(N,s)});return requestAnimationFrame(()=>D.focus()),()=>{if(R1.current===D)D.dispose(),R1.current=null}},[u0,C_,h4]);let G5=y(async(X)=>{let N=typeof u0==="string"?u0.trim():"",O=R1.current;if(!N||!O?.setContent)return;if(typeof O.isDirty==="function"&&O.isDirty())return;if(!(Array.isArray(X)&&X.length>0?X.some((D)=>{let g=Array.isArray(D?.changed_paths)?D.changed_paths.map((a)=>typeof a==="string"?a.trim():"").filter(Boolean):[];if(g.length>0)return g.some((a)=>a==="."||a===N);let s=typeof D?.path==="string"?D.path.trim():"";return!s||s==="."||s===N}):!0))return;try{let D=await b5(N,1e6,"edit"),g=typeof D?.text==="string"?D.text:"",s=typeof D?.mtime==="string"&&D.mtime.trim()?D.mtime.trim():new Date().toISOString();O.setContent(g,s)}catch(D){console.warn("[workspace_update] Failed to refresh active pane:",D)}},[u0]);h(()=>{let X=q5.current;if(M_.current)M_.current.dispose(),M_.current=null;if(!X||!j_||!p1)return;let N=o0.getDockPanes()[0];if(!N){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=N.mount(X,{mode:"view"});return M_.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(M_.current===O)O.dispose(),M_.current=null}},[j_,p1]);let[c_,l_]=u({name:"You",avatar_url:null,avatar_background:null}),A4=x(!1),N_=x(!1),S_=x(null),w1=x(j),E4=x(new Map),d_=x(j),M4=x(0),I4=x(0),i4=x({}),M1=x({name:null,avatar_url:null}),g1=x({currentHashtag:null,searchQuery:null,searchOpen:!1}),i_=x(null),o_=x(null),n_=x(0),k4=x(0),C4=x(0),P4=x(null),x_=x(null),Y_=x(null),T4=x(null),o4=x(0),S4=x({title:null,avatarBase:null}),x4=x(null),y_=x(!1),[z,k]=u(!1),m=x(0),[f,n]=u(!1),[X0,U0]=u(""),F0=C0(()=>n6(X0,e0?.agent_name||""),[e0?.agent_name,X0]),Y0=x(null),T0=y(()=>{if(x4.current)clearTimeout(x4.current),x4.current=null;H(null)},[]);Wj(30000),h(()=>{if(!f)return;requestAnimationFrame(()=>{if(f)Y0.current?.focus(),Y0.current?.select?.()})},[f]),h(()=>{return x2()},[]),h(()=>{return Oj(U)},[]),h(()=>{N1("workspaceOpen",String(V1))},[V1]),h(()=>{return zj()},[]),h(()=>{return()=>{T0()}},[T0]),h(()=>{if(!e){N1(z3,"");return}N1(z3,JSON.stringify({question:e.question||"",answer:e.answer||"",thinking:e.thinking||"",error:e.error||null,status:e.status||"success"}))},[e]),h(()=>{i4.current=K_||{}},[K_]),h(()=>{w1.current=j},[j]),h(()=>{M1.current=c_||{name:"You",avatar_url:null,avatar_background:null}},[c_]);let T1=y((X,N,O=null)=>{if(typeof document>"u")return;let M=(X||"").trim()||"PiClaw";if(S4.current.title!==M){document.title=M;let r=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(r&&r.getAttribute("content")!==M)r.setAttribute("content",M);S4.current.title=M}let D=document.getElementById("dynamic-favicon");if(!D)return;let g=D.getAttribute("data-default")||D.getAttribute("href")||"/favicon.ico",s=N||g,a=N?`${s}|${O||""}`:s;if(S4.current.avatarBase!==a){let r=N?`${s}${s.includes("?")?"&":"?"}v=${O||Date.now()}`:s;D.setAttribute("href",r),S4.current.avatarBase=a}},[]),V_=y((X)=>{if(!X)return;_0((N)=>N.includes(X)?N:[...N,X])},[]),Q_=y((X)=>{_0((N)=>N.filter((O)=>O!==X))},[]);h_.current=Q_;let _6=y(()=>{_0([])},[]),F=y((X)=>{if(!Array.isArray(X)){_0([]);return}let N=[],O=new Set;for(let M of X){if(typeof M!=="string"||!M.trim())continue;let D=M.trim();if(O.has(D))continue;O.add(D),N.push(D)}_0(N)},[]),E=y((X,N=null,O="info",M=3000)=>{T0(),H({title:X,detail:N||null,kind:O||"info"}),x4.current=setTimeout(()=>{H((D)=>D?.title===X?null:D)},M)},[T0]),i=y((X)=>{let N=Uj(X,{editorOpen:W1,resolvePane:(O)=>o0.resolve(O)});if(N.kind==="open"){$_(N.path);return}if(N.kind==="toast")E(N.title,N.detail,N.level)},[W1,$_,E]),Q0=y(()=>{let X=u0;if(X)V_(X)},[u0,V_]),S0=y((X)=>{if(!X)return;b((N)=>N.includes(X)?N:[...N,X])},[]),L1=y(async(X,N=null)=>{let O=(D)=>{D.scrollIntoView({behavior:"smooth",block:"center"}),D.classList.add("post-highlight"),setTimeout(()=>D.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+X);if(M){O(M);return}try{let D=typeof N==="string"&&N.trim()?N.trim():j,s=(await I6(X,D))?.thread?.[0];if(!s)return;d1((a)=>{if(!a)return[s];if(a.some((r)=>r.id===s.id))return a;return[...a,s]}),requestAnimationFrame(()=>{setTimeout(()=>{let a=document.getElementById("post-"+X);if(a)O(a)},50)})}catch(D){console.error("[scrollToMessage] Failed to fetch message",X,D)}},[j]),S1=y((X)=>{b((N)=>N.filter((O)=>O!==X))},[]),c1=y(()=>{b([])},[]),B4=y((X)=>{if(!Array.isArray(X)){b([]);return}let N=[],O=new Set;for(let M of X){if(typeof M!=="string"||!M.trim())continue;let D=M.trim();if(O.has(D))continue;O.add(D),N.push(D)}b(N)},[]),n4=y((X)=>{let N=typeof X==="string"&&X.trim()?X.trim():"Could not send your message.";E("Compose failed",N,"error",5000)},[E]),B_=y((X={})=>{let N=Date.now();if(P0.current=N,X.running)r0.current=!0,v((O)=>O?O:!0);if(X.clearSilence)s0.current=0},[v]),q_=y(()=>{if(T4.current)clearTimeout(T4.current),T4.current=null;o4.current=0},[]);h(()=>()=>{q_()},[q_]);let W4=y(()=>{q_(),p((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:N,lastActivity:O,...M}=X;return M})},[q_]),U4=y((X)=>{if(!X)return;q_();let N=Date.now();o4.current=N,p({type:X.type||"active",last_activity:!0}),T4.current=setTimeout(()=>{if(o4.current!==N)return;p((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},Nj)},[q_]),s_=y(()=>{r0.current=!1,v(!1),P0.current=null,s0.current=0,h0.current="",a0.current="",d0.current=null,x_.current=null,z0.current=null,c0.current=null,S_.current=null,m_.current={inFlight:!1,lastAttemptAt:0,turnId:null},q_(),M0(null),R0(null),Y1.current=!1,G1.current=!1},[q_,M0,R0,v]),R_=y((X)=>{if(!Lj({remainingQueueCount:X,currentTurnId:z0.current,isAgentTurnActive:q0}))return;c0.current=null,R0(null)},[q0,R0]),l1=y(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),y4=y(()=>({agentStatus:R,agentDraft:G0?{...G0}:{text:"",totalLines:0},agentPlan:Z0||"",agentThought:K0?{...K0}:{text:"",totalLines:0},pendingRequest:B0,currentTurnId:E0,steerQueuedTurnId:n0,isAgentTurnActive:Boolean(q0),followupQueueItems:Array.isArray(g0)?g0.map((X)=>({...X})):[],activeModel:$1,activeThinkingLevel:I1,supportsThinking:Boolean(p0),activeModelUsage:k1,contextUsage:x0,isAgentRunning:Boolean(r0.current),wasAgentActive:Boolean(N_.current),draftBuffer:h0.current||"",thoughtBuffer:a0.current||"",lastAgentEvent:P0.current||null,lastSilenceNotice:s0.current||0,lastAgentResponse:x_.current||null,currentTurnIdRef:z0.current||null,steerQueuedTurnIdRef:c0.current||null,thoughtExpanded:Boolean(Y1.current),draftExpanded:Boolean(G1.current),agentStatusRef:S_.current||null,silentRecovery:{...m_.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[$1,k1,I1,G0,Z0,R,K0,x0,E0,g0,q0,B0,n0,p0]),$8=y((X)=>{let N=X||l1();q_(),r0.current=Boolean(N.isAgentRunning),N_.current=Boolean(N.wasAgentActive),v(Boolean(N.isAgentTurnActive)),P0.current=N.lastAgentEvent||null,s0.current=Number(N.lastSilenceNotice||0),h0.current=N.draftBuffer||"",a0.current=N.thoughtBuffer||"",d0.current=N.pendingRequest||null,x_.current=N.lastAgentResponse||null,z0.current=N.currentTurnIdRef||null,c0.current=N.steerQueuedTurnIdRef||null,S_.current=N.agentStatusRef||null,m_.current=N.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},Y1.current=Boolean(N.thoughtExpanded),G1.current=Boolean(N.draftExpanded),p(N.agentStatus||null),l(N.agentDraft?{...N.agentDraft}:{text:"",totalLines:0}),$0(N.agentPlan||""),V0(N.agentThought?{...N.agentThought}:{text:"",totalLines:0}),O0(N.pendingRequest||null),M0(N.currentTurnId||null),R0(N.steerQueuedTurnId||null),J0(Array.isArray(N.followupQueueItems)?N.followupQueueItems.map((O)=>({...O})):[]),u1(N.activeModel||null),K1(N.activeThinkingLevel||null),x1(Boolean(N.supportsThinking)),t(N.activeModelUsage??null),v0(N.contextUsage??null)},[q_,l1,M0,J0,v,R0]),W_=y((X)=>{if(!X)return;if(z0.current===X)return;z0.current=X,m_.current={inFlight:!1,lastAttemptAt:0,turnId:X},M0(X),c0.current=null,R0(null),h0.current="",a0.current="",l({text:"",totalLines:0}),$0(""),V0({text:"",totalLines:0}),O0(null),d0.current=null,x_.current=null,Y1.current=!1,G1.current=!1},[M0,R0]),j8=y((X)=>{if(typeof document<"u"){let r=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&r)return}let N=x_.current;if(!N||!N.post)return;if(X&&N.turnId&&N.turnId!==X)return;let O=N.post;if(O.id&&P4.current===O.id)return;let M=String(O?.data?.content||"").trim();if(!M)return;P4.current=O.id||P4.current,x_.current=null;let D=M.replace(/\s+/g," ").slice(0,200),g=i4.current||{},a=(O?.data?.agent_id?g[O.data.agent_id]:null)?.name||"Pi";O_(a,D)},[O_]),R4=y(async(X,N)=>{if(X!=="thought"&&X!=="draft")return;let O=z0.current;if(X==="thought"){if(Y1.current=N,O)try{await Mj(O,"thought",N)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!N)return;try{let M=O?await Ej(O,"thought"):null;if(M?.text)a0.current=M.text;V0((D)=>({...D||{text:"",totalLines:0},fullText:a0.current||D?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:D?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(G1.current=N,O)try{await Mj(O,"draft",N)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!N)return;try{let M=O?await Ej(O,"draft"):null;if(M?.text)h0.current=M.text;l((D)=>({...D||{text:"",totalLines:0},fullText:h0.current||D?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:D?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),U_=x(null),Q4=y(()=>{let X=i_.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);U_.current=Q4;let H3=y((X)=>{let N=i_.current;if(!N||typeof X!=="function"){X?.();return}let{currentHashtag:O,searchQuery:M,searchOpen:D}=g1.current||{},g=!((M||D)&&!O),s=g?N.scrollHeight-N.scrollTop:N.scrollTop;X(),requestAnimationFrame(()=>{let a=i_.current;if(!a)return;if(g){let r=Math.max(a.scrollHeight-s,0);a.scrollTop=r}else{let r=Math.max(a.scrollHeight-a.clientHeight,0),o=Math.min(s,r);a.scrollTop=o}})},[]),s4=y((X)=>{let N=i_.current;if(!N||typeof X!=="function"){X?.();return}let O=N.scrollTop;X(),requestAnimationFrame(()=>{let M=i_.current;if(!M)return;let D=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(O,D)})},[]),Tj="Queued as a follow-up (one-at-a-time).",Sj="⁣",O3=y((X)=>{if(!X||!Array.isArray(X))return X;let N=X_.current,O=new Set(N),M=X.filter((D)=>{if(O.has(D?.id))return!1;if(D?.data?.is_bot_message){let g=D?.data?.content;if(g===Tj||g===Sj)return!1}return!0});return M.length===X.length?X:M},[]),{posts:k5,setPosts:d1,hasMore:xj,setHasMore:Z8,hasMoreRef:J3,loadPosts:r_,refreshTimeline:a1,loadMore:yj,loadMoreRef:$6}=Qj({preserveTimelineScroll:H3,preserveTimelineScrollTop:s4,chatJid:j}),K5=C0(()=>O3(k5),[k5,g0,O3]),Y8=y(()=>{let X=Z1.current;if(!X)return;d1((N)=>N?N.filter((O)=>O.id!==X):N),Z1.current=null},[d1]),{handleSplitterMouseDown:Rj,handleSplitterTouchStart:wj,handleEditorSplitterMouseDown:vj,handleEditorSplitterTouchStart:fj,handleDockSplitterMouseDown:bj,handleDockSplitterTouchStart:gj}=Gj({appShellRef:o_,sidebarWidthRef:n_,editorWidthRef:k4,dockHeightRef:C4}),D3=y(()=>{if(!r0.current)return;r0.current=!1,s0.current=0,P0.current=null,z0.current=null,M0(null),Y1.current=!1,G1.current=!1;let X=(h0.current||"").trim();if(h0.current="",a0.current="",l({text:"",totalLines:0}),$0(""),V0({text:"",totalLines:0}),O0(null),d0.current=null,x_.current=null,!X){p({type:"error",title:"Response stalled - No content received"});return}let O=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),D=new Date().toISOString(),g={id:M,timestamp:D,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};Z1.current=M,d1((s)=>s?_8([...s,g]):[g]),U_.current?.(),p(null)},[M0]);h(()=>{g1.current={currentHashtag:A,searchQuery:S,searchOpen:J}},[A,S,J]);let j1=y(()=>{let X=++N4.current,N=j;Pj(N).then((O)=>{if(X!==N4.current)return;if(w1.current!==N)return;let M=s1.current,D=Array.isArray(O?.items)?O.items.map((g)=>({...g})).filter((g)=>!M.has(g.row_id)):[];if(D.length){J0((g)=>{if(g.length===D.length&&g.every((s,a)=>s.row_id===D[a].row_id))return g;return D});return}M.clear(),R_(0),J0((g)=>g.length===0?g:[])}).catch(()=>{if(X!==N4.current)return;if(w1.current!==N)return;J0((O)=>O.length===0?O:[])})},[R_,j,J0]),t1=y(async()=>{let X=j;try{let N=await t8(X);if(w1.current!==X)return;if(N)v0(N)}catch(N){if(w1.current!==X)return;console.warn("Failed to fetch agent context:",N)}},[j]),L_=y(async()=>{let X=j;try{let N=await rG(X);if(w1.current!==X)return;let O=Array.isArray(N?.content)?N.content.find((M)=>M?.type==="status_panel"&&M?.panel):null;f0((M)=>{let D=new Map(M);if(N?.key&&O?.panel)D.set(N.key,O.panel);else D.delete("autoresearch");return D}),D0((M)=>{if(M.size===0)return M;let D=new Set(Array.from(M).filter((g)=>!String(g).startsWith("autoresearch:")));return D.size===M.size?M:D})}catch(N){if(w1.current!==X)return;console.warn("Failed to fetch autoresearch status:",N)}},[j]),w_=y(async()=>{let X=j;try{let N=await F3(X);if(w1.current!==X)return null;if(!N||N.status!=="active"||!N.data){if(N_.current){let{currentHashtag:D,searchQuery:g,searchOpen:s}=g1.current||{};if(!D&&!g&&!s)a1()}return N_.current=!1,s_(),S_.current=null,p(null),l({text:"",totalLines:0}),$0(""),V0({text:"",totalLines:0}),O0(null),d0.current=null,N??null}N_.current=!0;let O=N.data;S_.current=O;let M=O.turn_id||O.turnId;if(M)W_(M);if(B_({running:!0,clearSilence:!0}),W4(),p(O),N.thought&&N.thought.text)V0((D)=>{if(D&&D.text&&D.text.length>=N.thought.text.length)return D;return a0.current=N.thought.text,{text:N.thought.text,totalLines:N.thought.totalLines||0}});if(N.draft&&N.draft.text)l((D)=>{if(D&&D.text&&D.text.length>=N.draft.text.length)return D;return h0.current=N.draft.text,{text:N.draft.text,totalLines:N.draft.totalLines||0}});return N}catch(N){return console.warn("Failed to fetch agent status:",N),null}},[s_,W4,B_,a1,W_]),j6=y(async()=>{if(!r0.current)return null;if(d0.current)return null;let X=z0.current||null,N=m_.current,O=Date.now();if(N.inFlight)return null;if(N.turnId===X&&O-N.lastAttemptAt<V3)return null;N.inFlight=!0,N.lastAttemptAt=O,N.turnId=X;try{let{currentHashtag:M,searchQuery:D,searchOpen:g}=g1.current||{};if(!M&&!D&&!g)await a1();return await j1(),await w_()}finally{N.inFlight=!1}},[w_,j1,a1]);h(()=>{let X=Math.min(1000,Math.max(100,Math.floor(N3/2))),N=setInterval(()=>{if(!r0.current)return;if(d0.current)return;let O=P0.current;if(!O)return;let M=Date.now(),D=M-O,g=F4(S_.current);if(D>=Xj){if(!g)p({type:"waiting",title:"Re-syncing after a quiet period…"});j6();return}if(D>=N3){if(M-s0.current>=V3){if(!g){let s=Math.floor(D/1000);p({type:"waiting",title:`Waiting for model… No events for ${s}s`})}s0.current=M,j6()}}},X);return()=>clearInterval(N)},[j6]);let mj=y((X)=>{if(B(X),X!=="connected"){p(null),l({text:"",totalLines:0}),$0(""),V0({text:"",totalLines:0}),O0(null),d0.current=null,s_();return}if(!A4.current){A4.current=!0;let{currentHashtag:D,searchQuery:g,searchOpen:s}=g1.current||{};if(!D&&!g&&!s)a1();w_(),j1(),t1();return}let{currentHashtag:N,searchQuery:O,searchOpen:M}=g1.current;if(!N&&!O&&!M)a1();w_(),j1(),t1()},[s_,a1,w_,j1,t1]),uj=y(async(X)=>{P(X),d1(null),await r_(X)},[r_]),hj=y(async()=>{P(null),I(null),d1(null),await r_()},[r_]),pj=y(async(X,N=T)=>{if(!X||!X.trim())return;let O=N==="root"||N==="all"?N:"current";d(O),I(X.trim()),P(null),d1(null);try{let M=await Dj(X.trim(),50,0,j,O,h1);d1(M.results),Z8(!1)}catch(M){console.error("Failed to search:",M),d1([])}},[j,h1,T]),cj=y(()=>{C(!0),I(null),P(null),d("current"),d1([])},[]),lj=y(()=>{C(!1),I(null),r_()},[r_]),qK=y(()=>{},[]),Z6=!A&&!S&&!J,dj=y(async(X)=>{if(!X)return;let N=X.id,O=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():j,M=K5?.filter((g)=>g?.data?.thread_id===N&&g?.id!==N).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let D=(g)=>{if(!g.length)return;A1((a)=>{let r=new Set(a);return g.forEach((o)=>r.add(o)),r}),setTimeout(()=>{if(s4(()=>{d1((a)=>a?a.filter((r)=>!g.includes(r.id)):a)}),A1((a)=>{let r=new Set(a);return g.forEach((o)=>r.delete(o)),r}),J3.current)$6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await Aj(N,M>0,O);if(g?.ids?.length)D(g.ids)}catch(g){let s=g?.message||"";if(M===0&&s.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let r=await Aj(N,!0,O);if(r?.ids?.length)D(r.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${s}`)}},[j,K5,s4]),A3=y(async()=>{try{let X=await sG();J1(Vj(X));let N=X?.user||{};l_((M)=>{let D=typeof N.name==="string"&&N.name.trim()?N.name.trim():"You",g=typeof N.avatar_url==="string"?N.avatar_url.trim():null,s=typeof N.avatar_background==="string"&&N.avatar_background.trim()?N.avatar_background.trim():null;if(M.name===D&&M.avatar_url===g&&M.avatar_background===s)return M;return{name:D,avatar_url:g,avatar_background:s}});let O=(X?.agents||[]).find((M)=>M.id==="default");T1(O?.name,O?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=j,N=await t8(X);if(w1.current!==X)return;if(N)v0(N)}catch{}},[T1,j]);h(()=>{A3();let X=L5("sidebarWidth",null),N=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(n_.current=N,o_.current)o_.current.style.setProperty("--sidebar-width",`${N}px`)},[A3]);let C5=q0||R!==null,E3=y((X)=>{if(!X||typeof X!=="object")return;let N=X.agent_id;if(!N)return;let{agent_name:O,agent_avatar:M}=X;if(!O&&M===void 0)return;let D=i4.current?.[N]||{id:N},g=D.name||null,s=D.avatar_url??D.avatarUrl??D.avatar??null,a=!1,r=!1;if(O&&O!==D.name)g=O,r=!0;if(M!==void 0){let o=typeof M==="string"?M.trim():null,A0=typeof s==="string"?s.trim():null,b0=o||null;if(b0!==(A0||null))s=b0,a=!0}if(!r&&!a)return;if(J1((o)=>{let b0={...o[N]||{id:N}};if(r)b0.name=g;if(a)b0.avatar_url=s;return{...o,[N]:b0}}),N==="default")T1(g,s,a?Date.now():null)},[T1]),M3=y((X)=>{if(!X||typeof X!=="object")return;let N=X.user_name??X.userName,O=X.user_avatar??X.userAvatar,M=X.user_avatar_background??X.userAvatarBackground;if(N===void 0&&O===void 0&&M===void 0)return;l_((D)=>{let g=typeof N==="string"&&N.trim()?N.trim():D.name||"You",s=O===void 0?D.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,a=M===void 0?D.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(D.name===g&&D.avatar_url===s&&D.avatar_background===a)return D;return{name:g,avatar_url:s,avatar_background:a}})},[]),Y6=y((X)=>{if(!X||typeof X!=="object")return;let N=X.model??X.current;if(N!==void 0)u1(N);if(X.thinking_level!==void 0)K1(X.thinking_level??null);if(X.supports_thinking!==void 0)x1(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)t(X.provider_usage??null)},[]),P5=y(()=>{let X=j;Ij(X).then((N)=>{if(w1.current!==X)return;if(N)Y6(N)}).catch(()=>{})},[Y6,j]),i1=y(()=>{let X=j,N=(O)=>Array.isArray(O)?O.filter((M)=>M&&typeof M.chat_jid==="string"&&typeof M.agent_name==="string"&&M.agent_name.trim()):[];Promise.all([kj().catch(()=>({chats:[]})),e8(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,M])=>{if(w1.current!==X)return;let D=N(O?.chats),g=N(M?.chats);if(g.length===0){H0(D);return}let s=new Map(D.map((r)=>[r.chat_jid,r])),a=g.map((r)=>{let o=s.get(r.chat_jid);return o?{...r,...o,is_active:o.is_active??r.is_active}:r});a.sort((r,o)=>{if(r.chat_jid===X&&o.chat_jid!==X)return-1;if(o.chat_jid===X&&r.chat_jid!==X)return 1;let A0=Boolean(r.archived_at),b0=Boolean(o.archived_at);if(A0!==b0)return A0?1:-1;if(Boolean(r.is_active)!==Boolean(o.is_active))return r.is_active?-1:1;return String(r.chat_jid).localeCompare(String(o.chat_jid))}),H0(a)}).catch(()=>{if(w1.current!==X)return;H0([])})},[j]),m1=y(()=>{e8(h1).then((X)=>{let N=Array.isArray(X?.chats)?X.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];w0(N)}).catch(()=>{})},[h1]),I3=y((X)=>{let N=X?.row_id;if(N==null)return;s1.current.add(N),J0((O)=>O.filter((M)=>M?.row_id!==N)),$K(N,W3(j)).then(()=>{j1()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),E("Failed to steer message","The queued message could not be sent as steering.","warning"),s1.current.delete(N),j1()})},[j,j1,J0,E]),k3=y((X)=>{let N=X?.row_id;if(N==null)return;let O=Q1.current.filter((M)=>M?.row_id!==N).length;s1.current.add(N),R_(O),J0((M)=>M.filter((D)=>D?.row_id!==N)),jK(N,W3(j)).then(()=>{j1()}).catch((M)=>{console.warn("[queue] Failed to remove queued item:",M),E("Failed to remove message","The queued message could not be removed.","warning"),s1.current.delete(N),j1()})},[R_,j,j1,J0,E]),T5=y((X)=>{if(!X||typeof X!=="object")return;if(i1(),m1(),t1(),L_(),X?.queued==="followup"||X?.queued==="steer"){j1();return}let N=X?.command;if(N&&typeof N==="object"&&(N?.queued_followup||N?.queued_steer))j1()},[i1,L_,m1,t1,j1]),ij=y(async(X,N)=>{let O=typeof X?.key==="string"?X.key:"",M=typeof N?.key==="string"?N.key:"",D=`${O}:${M}`;if(!O||!M)return;D0((g)=>{if(g.has(D))return g;let s=new Set(g);return s.add(D),s});try{if(N?.action_type==="autoresearch.stop"){await aG(j,{generateReport:!0}),L_();return}if(N?.action_type==="autoresearch.dismiss"){await tG(j),L_();return}if(N?.action_type==="autoresearch.copy_tmux"){let g=typeof X?.tmux_command==="string"?X.tmux_command.trim():"";if(!g)throw Error("No tmux command available.");await navigator.clipboard.writeText(g),E("Copied","tmux command copied to clipboard.","success");return}throw Error(`Unsupported panel action: ${N?.action_type||M}`)}catch(g){E("Panel action failed",g?.message||"Could not complete that action.","warning")}finally{D0((g)=>{if(!g.has(D))return g;let s=new Set(g);return s.delete(D),s})}},[j,L_,E]),Q6=y(()=>{if(Y_.current)Y_.current.abort(),Y_.current=null;L0(null)},[]),Q8=y(async(X)=>{let N=String(X||"").trim();if(!N)return E("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y_.current)Y_.current.abort();let O=new AbortController;Y_.current=O,L0({question:N,answer:"",thinking:"",error:null,model:null,status:"running"});try{let M=await ZK(N,{signal:O.signal,chatJid:h2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(D,g)=>{if(D==="side_prompt_start")L0((s)=>s?{...s,status:"running"}:s)},onThinkingDelta:(D)=>{L0((g)=>g?{...g,thinking:`${g.thinking||""}${D||""}`}:g)},onTextDelta:(D)=>{L0((g)=>g?{...g,answer:`${g.answer||""}${D||""}`}:g)}});if(Y_.current!==O)return!0;L0((D)=>D?{...D,answer:M?.result||D.answer||"",thinking:M?.thinking||D.thinking||"",model:M?.model||null,status:"success",error:null}:D)}catch(M){if(O.signal.aborted)return!0;L0((D)=>D?{...D,status:"error",error:M?.payload?.error||M?.message||"BTW request failed."}:D)}finally{if(Y_.current===O)Y_.current=null}return!0},[j,E]),oj=y(async({content:X})=>{let N=u2(X);if(!N)return!1;if(N.type==="help")return E("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(N.type==="clear")return Q6(),E("BTW cleared","Closed the side conversation panel.","info"),!0;if(N.type==="ask")return await Q8(N.question),!0;return!1},[Q6,Q8,E]),nj=y(()=>{if(e?.question)Q8(e.question)},[e,Q8]),sj=y(async()=>{let X=l2(e);if(!X)return;try{let N=await a4("default",X,null,[],C5?"queue":null,j);T5(N),E(N?.queued==="followup"?"BTW queued":"BTW injected",N?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(N){E("BTW inject failed",N?.message||"Could not inject BTW answer into chat.","warning")}},[e,T5,C5,E]),C3=y(async(X=null)=>{let[N,O,M,D,g,s,a]=await Promise.allSettled([F3(j),t8(j),Pj(j),Ij(j),kj(),e8(h1),r4(20,null,j)]),r=N.status==="fulfilled"?N.value:null,o=O.status==="fulfilled"?O.value:null,A0=M.status==="fulfilled"?M.value:null,b0=D.status==="fulfilled"?D.value:null,B1=g.status==="fulfilled"?g.value:null,q1=s.status==="fulfilled"?s.value:null,v_=a.status==="fulfilled"?a.value:null,f_=Array.isArray(v_?.posts)?v_.posts:Array.isArray(k5)?k5:[],y3=f_.length?f_[f_.length-1]:null,ZZ=f_.filter((X6)=>X6?.data?.is_bot_message).length,YZ=f_.filter((X6)=>!X6?.data?.is_bot_message).length,R3=Number(A0?.count??Q1.current.length??0)||0,w3=Array.isArray(B1?.chats)?B1.chats.length:W0.length,QZ=Array.isArray(q1?.chats)?q1.chats.length:N0.length,v3=Number(o?.percent??x0?.percent??0)||0,qZ=Number(o?.tokens??x0?.tokens??0)||0,GZ=Number(o?.contextWindow??x0?.contextWindow??0)||0,KZ=b0?.current??$1??null,XZ=b0?.thinking_level??I1??null,NZ=b0?.supports_thinking??p0,VZ=r?.status||(q0?"active":"idle"),BZ=r?.data?.type||r?.type||null;return{generatedAt:new Date().toISOString(),request:X,chat:{currentChatJid:j,rootChatJid:h1,activeChats:w3,branches:QZ},agent:{status:VZ,phase:BZ,running:Boolean(q0)},model:{current:KZ,thinkingLevel:XZ,supportsThinking:Boolean(NZ)},context:{tokens:qZ,contextWindow:GZ,percent:v3},queue:{count:R3},timeline:{loadedPosts:f_.length,botPosts:ZZ,userPosts:YZ,latestPostId:y3?.id??null,latestTimestamp:y3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(v3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,R3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,w3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,f_.length*5))}]}},[W0,$1,I1,x0,N0,j,h1,q0,k5,p0]),S5=y(()=>{P5(),i1(),m1(),j1(),t1(),L_()},[P5,i1,m1,j1,t1,L_]);h(()=>{S5();let X=setInterval(()=>{P5(),i1(),m1(),j1()},60000);return()=>clearInterval(X)},[S5,P5,i1,m1,j1]),h(()=>{m1()},[m1]),h(()=>{f0(new Map),D0(new Set),L_()},[j,L_]),h(()=>{let X=!1,N=()=>{if(X)return;requestAnimationFrame(()=>{if(X)return;Q4()})};if(A)return r_(A),()=>{X=!0};if(S)return Dj(S,50,0,j,T,h1).then((O)=>{if(X)return;d1(O.results),Z8(!1)}).catch((O)=>{if(X)return;console.error("Failed to search:",O),d1([]),Z8(!1)}),()=>{X=!0};return r_().then(()=>{N()}).catch((O)=>{if(X)return;console.error("Failed to load timeline:",O)}),()=>{X=!0}},[j,A,S,T,h1,r_,Q4,Z8,d1]),h(()=>{let X=d_.current||j;E4.current.set(X,y4())},[j,y4]),h(()=>{let X=d_.current||j;if(X===j)return;E4.current.set(X,y4()),d_.current=j,s1.current.clear(),$8(E4.current.get(j)||null),j1(),w_(),t1()},[j,w_,t1,j1,$8,y4]);let rj=y(()=>{let{currentHashtag:X,searchQuery:N,searchOpen:O}=g1.current||{};if(!X&&!N&&!O)a1();S5()},[S5,a1]),x5=y((X,N="streaming")=>{let O=s2({...X,...X&&X.status?{}:{status:N}});if(!O)return;let M=o1(O);if(M&&X1.current.has(M))return;m0((D)=>{let g=o1(D),s=Boolean(M&&g&&M===g),a={...s&&D?.artifact?D.artifact:{},...O.artifact||{}};return{...s&&D?D:{},...O,artifact:a,source:"live",originChatJid:O.originChatJid||j,openedAt:s&&D?.openedAt?D.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),q6=y((X,N)=>{let O=N?.turn_id,M=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null,g=M?M===j:X==="connected"||X==="workspace_update";if(g)E3(N),M3(N);if(X==="ui_theme"){y2(N);return}if(X==="generated_widget_open"){if(!g)return;if(O&&!z0.current)W_(O);x5(N,"loading");return}if(X==="generated_widget_delta"){if(!g)return;if(O&&!z0.current)W_(O);x5(N,"streaming");return}if(X==="generated_widget_final"){if(!g)return;if(O&&!z0.current)W_(O);x5(N,"final");return}if(X==="generated_widget_error"){if(!g)return;x5(N,"error");return}if(X==="generated_widget_close"){if(!g)return;let o=o1(N);m0((A0)=>{if(!A0||A0?.source!=="live")return A0;let b0=o1(A0);if(o&&b0&&o!==b0)return A0;return null});return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))W4()}if(X==="connected"){p(null),l({text:"",totalLines:0}),$0(""),V0({text:"",totalLines:0}),O0(null),d0.current=null,s_();let o=j;F3(o).then((q1)=>{if(w1.current!==o)return;if(!q1||q1.status!=="active"||!q1.data)return;let v_=q1.data,f_=v_.turn_id||v_.turnId;if(f_)W_(f_);if(B_({clearSilence:!0}),U4(v_),q1.thought&&q1.thought.text)a0.current=q1.thought.text,V0({text:q1.thought.text,totalLines:q1.thought.totalLines||0});if(q1.draft&&q1.draft.text)h0.current=q1.draft.text,l({text:q1.draft.text,totalLines:q1.draft.totalLines||0})}).catch((q1)=>{console.warn("Failed to fetch agent status:",q1)});let{currentHashtag:A0,searchQuery:b0,searchOpen:B1}=g1.current||{};if(!A0&&!b0&&!B1)a1();S5();return}if(X==="agent_status"){if(!g){if(N?.type==="done"||N?.type==="error")i1(),m1();return}if(N.type==="done"||N.type==="error"){if(O&&z0.current&&O!==z0.current)return;if(N.type==="done"){j8(O||z0.current);let{currentHashtag:o,searchQuery:A0,searchOpen:b0}=g1.current||{};if(!o&&!A0&&!b0)a1();if(N.context_usage)v0(N.context_usage)}if(t1(),N_.current=!1,s_(),s1.current.clear(),i1(),j1(),l({text:"",totalLines:0}),$0(""),V0({text:"",totalLines:0}),O0(null),N.type==="error")p({type:"error",title:N.title||"Agent error"}),setTimeout(()=>p(null),8000);else p(null)}else{if(O)W_(O);if(B_({running:!0,clearSilence:!0}),N.type==="thinking")h0.current="",a0.current="",l({text:"",totalLines:0}),$0(""),V0({text:"",totalLines:0});S_.current=N,p((o)=>{if(o&&o.type===N.type&&o.title===N.title)return o;return N})}return}if(X==="agent_steer_queued"){if(!g)return;if(O&&z0.current&&O!==z0.current)return;let o=O||z0.current;if(!o)return;c0.current=o,R0(o);return}if(X==="agent_followup_queued"){if(!g)return;let o=N?.row_id,A0=N?.content;if(o!=null&&typeof A0==="string"&&A0.trim())J0((b0)=>{if(b0.some((B1)=>B1?.row_id===o))return b0;return[...b0,{row_id:o,content:A0,timestamp:N?.timestamp||null,thread_id:N?.thread_id??null}]});j1();return}if(X==="agent_followup_consumed"){if(!g)return;let o=N?.row_id;if(o!=null){let q1=Q1.current.filter((v_)=>v_.row_id!==o).length;R_(q1),J0((v_)=>v_.filter((f_)=>f_.row_id!==o))}j1();let{currentHashtag:A0,searchQuery:b0,searchOpen:B1}=g1.current||{};if(!A0&&!b0&&!B1)a1();return}if(X==="agent_followup_removed"){if(!g)return;let o=N?.row_id;if(o!=null){let A0=Q1.current.filter((b0)=>b0.row_id!==o).length;s1.current.add(o),R_(A0),J0((b0)=>b0.filter((B1)=>B1.row_id!==o))}j1();return}if(X==="agent_draft_delta"){if(!g)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)W_(O);if(B_({running:!0,clearSilence:!0}),N?.reset)h0.current="";if(N?.delta)h0.current+=N.delta;let o=Date.now();if(!M4.current||o-M4.current>=100){M4.current=o;let A0=h0.current,b0=B3(A0);if(G1.current)l((B1)=>({text:B1?.text||"",totalLines:b0,fullText:A0}));else l({text:A0,totalLines:b0})}return}if(X==="agent_draft"){if(!g)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)W_(O);B_({running:!0,clearSilence:!0});let o=N.text||"",A0=N.mode||(N.kind==="plan"?"replace":"append"),b0=Number.isFinite(N.total_lines)?N.total_lines:o?o.replace(/\r\n/g,`
`).split(`
`).length:0;if(N.kind==="plan")if(A0==="replace")$0(o);else $0((B1)=>(B1||"")+o);else if(!G1.current)h0.current=o,l({text:o,totalLines:b0});return}if(X==="agent_thought_delta"){if(!g)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)W_(O);if(B_({running:!0,clearSilence:!0}),N?.reset)a0.current="";if(typeof N?.delta==="string")a0.current+=N.delta;let o=Date.now();if(Y1.current&&(!I4.current||o-I4.current>=100)){I4.current=o;let A0=a0.current;V0((b0)=>({text:b0?.text||"",totalLines:B3(A0),fullText:A0}))}return}if(X==="agent_thought"){if(!g)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)W_(O);B_({running:!0,clearSilence:!0});let o=N.text||"",A0=Number.isFinite(N.total_lines)?N.total_lines:o?o.replace(/\r\n/g,`
`).split(`
`).length:0;if(!Y1.current)a0.current=o,V0({text:o,totalLines:A0});return}if(X==="model_changed"){if(!g)return;if(N?.model!==void 0)u1(N.model);if(N?.thinking_level!==void 0)K1(N.thinking_level??null);if(N?.supports_thinking!==void 0)x1(Boolean(N.supports_thinking));let o=j;t8(o).then((A0)=>{if(w1.current!==o)return;if(A0)v0(A0)}).catch(()=>{});return}if(X==="extension_ui_widget"&&N?.options?.surface==="status-panel"){if((typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():j)!==j)return;let A0=typeof N?.key==="string"?N.key:"",b0=Array.isArray(N?.content)?N.content.find((B1)=>B1?.type==="status_panel"&&B1?.panel):null;if(!A0)return;if(f0((B1)=>{let q1=new Map(B1);if(N?.options?.remove||!b0?.panel)q1.delete(A0);else q1.set(A0,b0.panel);return q1}),N?.options?.remove||b0?.panel?.state!=="running")D0((B1)=>{if(B1.size===0)return B1;let q1=new Set(Array.from(B1).filter((v_)=>!String(v_).startsWith(`${A0}:`)));return q1.size===B1.size?B1:q1});U3(X,N);return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:N}));G5(N?.updates);return}if(Hj(X)){if(!g)return;if(U3(X,N),X==="extension_ui_notify"&&typeof N?.message==="string")E(N.message,null,N?.type||"info");if(X==="extension_ui_error"&&typeof N?.error==="string")E("Extension UI error",N.error,"error",5000);return}let{currentHashtag:s,searchQuery:a,searchOpen:r}=g1.current;if(X==="agent_response"){if(!g)return;Y8(),x_.current={post:N,turnId:z0.current}}if(!s&&!a&&!r&&g&&(X==="new_post"||X==="new_reply"||X==="agent_response"))d1((o)=>{if(!o)return[N];if(o.some((A0)=>A0.id===N.id))return o;return[...o,N]}),U_.current?.();if(X==="interaction_updated"){if(!g)return;if(s||a||r)return;d1((o)=>{if(!o)return o;if(!o.some((A0)=>A0.id===N.id))return o;return o.map((A0)=>A0.id===N.id?N:A0)})}if(X==="interaction_deleted"){if(!g)return;if(s||a||r)return;let o=N?.ids||[];if(o.length){if(s4(()=>{d1((A0)=>A0?A0.filter((b0)=>!o.includes(b0.id)):A0)}),J3.current)$6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[x5,s_,W4,j,$6,B_,j8,s4,i1,m1,a1,Y8,W_,U4,E3,M3,P5,j1,J0,t1]);h(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=q6,X.reset=()=>{Y8(),s_(),p(null),l({text:"",totalLines:0}),$0(""),V0({text:"",totalLines:0}),O0(null)},X.finalize=()=>D3(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[s_,D3,q6,Y8]),Zj({handleSseEvent:q6,handleConnectionStatusChange:mj,loadPosts:r_,onWake:rj,chatJid:j}),h(()=>{if(!K5||K5.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let N=X.slice(5);L1(N),history.replaceState(null,"",location.pathname+location.search)},[K5,L1]);let G6=R!==null;h(()=>{if(K!=="connected")return;let N=setInterval(()=>{let{currentHashtag:O,searchQuery:M,searchOpen:D}=g1.current||{},g=!O&&!M&&!D;if(G6){if(g)a1();j1(),w_(),t1(),L_()}else{if(g)a1();w_(),t1(),L_()}},G6?15000:60000);return()=>clearInterval(N)},[K,G6,w_,L_,t1,j1,a1]),h(()=>{return Jj(()=>{w_(),t1(),j1(),L_()})},[w_,L_,t1,j1]);let aj=y(()=>{u_((X)=>!X)},[]),P3=y((X)=>{if(typeof window>"u")return;let N=String(X||"").trim();if(!N||N===j)return;let O=j5(window.location.href,N,{chatOnly:Z});$?.(O)},[Z,j,$]),K6=y(()=>{if(typeof window>"u"||!e0?.chat_jid)return;let X=Date.now(),N=L3();if(!N)return;if(y_.current||X<m.current||N.inFlight||X<N.cooldownUntil)return;U0(e0.agent_name||""),n(!0)},[e0]),y5=y(()=>{n(!1),U0("")},[]),T3=y(async(X)=>{if(typeof window>"u"||!e0?.chat_jid)return;if(typeof X!=="string"){K6();return}let N=Date.now(),O=L3();if(!O)return;if(y_.current||N<m.current||O.inFlight||N<O.cooldownUntil)return;y_.current=!0,O.inFlight=!0,k(!0);try{let M=e0.agent_name||"",D=n6(X,M);if(!D.canSubmit){E("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000);return}let g=D.normalized||M,s=await eG(e0.chat_jid,{agentName:g});await Promise.allSettled([i1(),m1()]);let a=s?.branch?.agent_name||g||M;E("Branch renamed",`@${a}`,"info",3500),y5()}catch(M){let D=M instanceof Error?M.message:String(M||"Could not rename branch."),g=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;E("Could not rename branch",g||"Could not rename branch.","warning",5000)}finally{y_.current=!1,k(!1);let M=Date.now()+dG;m.current=M;let D=L3();if(D)D.inFlight=!1,D.cooldownUntil=M}},[y5,e0,i1,m1,K6,k,E]),S3=y(async(X=null)=>{if(typeof window>"u")return;let N=typeof X==="string"&&X.trim()?X.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",M=N||e0?.chat_jid||O;if(!M){E("Could not prune branch","No active session is selected yet.","warning",4000);return}let D=(e0?.chat_jid===M?e0:null)||N0.find((r)=>r?.chat_jid===M)||W0.find((r)=>r?.chat_jid===M)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid)){E("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let s=`@${D?.agent_name||M}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!window.confirm(`Prune ${s}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await _K(M),await Promise.allSettled([i1(),m1()]);let r=D?.root_chat_jid||"web:default";E("Branch pruned",`${s} has been archived.`,"info",3000);let o=j5(window.location.href,r,{chatOnly:Z});$?.(o)}catch(r){let o=r instanceof Error?r.message:String(r||"Could not prune branch.");E("Could not prune branch",o||"Could not prune branch.","warning",5000)}},[W0,Z,e0,N0,j,$,i1,m1,E]),tj=y(async(X)=>{let N=typeof X==="string"?X.trim():"";if(!N||typeof Cj!=="function")return;try{let O=N0.find((r)=>r?.chat_jid===N)||null,M=await Cj(N);await Promise.allSettled([i1(),m1()]);let D=M?.branch,g=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():N,s=z2(O?.agent_name,D?.agent_name,g);E("Branch restored",s,"info",4200);let a=j5(window.location.href,g,{chatOnly:Z});$?.(a)}catch(O){let M=O instanceof Error?O.message:String(O||"Could not restore branch.");E("Could not restore branch",M||"Could not restore branch.","warning",5000)}},[Z,N0,$,i1,m1,E]);h(()=>{if(!G||typeof window>"u")return;let X=!1;return(async()=>{try{n1({status:"running",message:"Preparing a new chat branch…"});let N=await w5(V);if(X)return;let O=N?.branch,M=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");let D=j5(window.location.href,M,{chatOnly:!0});$?.(D,{replace:!0})}catch(N){if(X)return;n1({status:"error",message:c8(N)})}})(),()=>{X=!0}},[G,V,$]);let ej=y((X)=>{if(!X||typeof X!=="object")return;let N=o1(X);if(N)X1.current.delete(N);m0({...X,openedAt:new Date().toISOString()})},[]),R5=y(()=>{m0((X)=>{let N=o1(X);if(X?.source==="live"&&N)X1.current.add(N);return null})},[]),_Z=y((X,N)=>{let O=typeof X?.kind==="string"?X.kind:"",M=o1(N);if(!O||!M)return;if(O==="widget.close"){R5();return}if(O==="widget.submit"){let D=e2(X?.payload),g=_7(X?.payload),s=new Date().toISOString();if(m0((a)=>{let r=o1(a);if(!a||r!==M)return a;return{...a,runtimeState:{...a.runtimeState||{},lastEventKind:O,lastEventPayload:X?.payload||null,lastSubmitAt:s,lastHostUpdate:{type:"submit_pending",submittedAt:s,preview:D||null}}}}),!D){if(E("Widget submission received","The widget submitted data without a message payload yet.","info",3500),g)R5();return}(async()=>{try{let a=await a4("default",D,null,[],C5?"queue":null,j);if(T5(a),m0((r)=>{let o=o1(r);if(!r||o!==M)return r;return{...r,runtimeState:{...r.runtimeState||{},lastHostUpdate:{type:a?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:s,preview:D,queued:a?.queued||null}}}}),E(a?.queued==="followup"?"Widget submission queued":"Widget submission sent",a?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),g)R5()}catch(a){m0((r)=>{let o=o1(r);if(!r||o!==M)return r;return{...r,runtimeState:{...r.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:s,preview:D,error:a?.message||"Could not send the widget message."}}}}),E("Widget submission failed",a?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let D=new Date().toISOString(),g=Boolean(X?.payload?.buildDashboard||X?.payload?.dashboardKind==="internal-state"),s=Number(N?.runtimeState?.refreshCount||0)+1;if(m0((a)=>{let r=o1(a);if(!a||r!==M)return a;return{...a,runtimeState:{...a.runtimeState||{},lastEventKind:O,lastEventPayload:X?.payload||null,...O==="widget.ready"?{readyAt:D,lastHostUpdate:{type:"ready_ack",at:D}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:D,refreshCount:s,lastHostUpdate:{type:g?"refresh_building":"refresh_ack",at:D,count:s,echo:X?.payload||null}}:{}}}}),O==="widget.request_refresh")if(g)(async()=>{try{let a=await C3(X?.payload||null);m0((r)=>{let o=o1(r);if(!r||o!==M)return r;return{...r,runtimeState:{...r.runtimeState||{},dashboard:a,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:s,echo:X?.payload||null}}}}),E("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(a){m0((r)=>{let o=o1(r);if(!r||o!==M)return r;return{...r,runtimeState:{...r.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:s,error:a?.message||"Could not build dashboard."}}}}),E("Dashboard build failed",a?.message||"Could not build dashboard.","warning",5000)}})();else E("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[C3,j,R5,T5,C5,E]);h(()=>{X1.current.clear(),m0(null)},[j]);let $Z=y(async()=>{if(typeof window>"u")return;try{let N=(await w5(j))?.branch,O=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([i1(),m1()]);let M=N?.agent_name?`@${N.agent_name}`:O;E("New branch created",`Switched to ${M}.`,"info",2500);let D=j5(window.location.href,O,{chatOnly:Z});$?.(D)}catch(X){E("Could not create branch",c8(X),"warning",5000)}},[Z,j,$,i1,m1,E]),q8=y(async(X,N)=>{if(typeof window>"u"||W)return;let O=typeof X==="string"&&X.trim()?X.trim():"";if(!O)return;let M=()=>{let a=_1.get(O);if(a&&!a.dirty){_4(O);return}if(O===$5&&p1)P1(!1)},D=x7(O);if(!D){E("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let g=z$(D);if(!g){E("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}H$(g,{title:typeof N==="string"&&N.trim()?`Opening ${N}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});let s=null;try{let r=(typeof u0==="string"?u0.trim():"")===O?R1.current:O===$5?M_.current:null;if(typeof r?.preparePopoutTransfer==="function")s=await r.preparePopoutTransfer();let o=S7(window.location.href,O,{label:typeof N==="string"&&N.trim()?N.trim():void 0,chatJid:j,params:s});O$(g,o),M()}catch(a){J$(g);let r=a?.message||"Could not transfer pane state to the new window.";E("Could not open pane window",r,"warning",5000)}},[j,p1,_4,W,E,u0]);h(()=>{let X=(O)=>{let M=O.detail?.path,D=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(M)$_(M,D?{label:D}:void 0)},N=(O)=>{let M=O.detail?.path,D=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(M)q8(M,D)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),document.addEventListener("csv-viewer:open-tab",X),document.addEventListener("pdf-viewer:open-tab",X),document.addEventListener("image-viewer:open-tab",X),document.addEventListener("video-viewer:open-tab",X),document.addEventListener("vnc:open-tab",X),document.addEventListener("pane:popout",N),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X),document.removeEventListener("csv-viewer:open-tab",X),document.removeEventListener("pdf-viewer:open-tab",X),document.removeEventListener("image-viewer:open-tab",X),document.removeEventListener("video-viewer:open-tab",X),document.removeEventListener("vnc:open-tab",X),document.removeEventListener("pane:popout",N)}},[q8,$_]);let jZ=y(async()=>{if(typeof window>"u"||W)return;let X=P7(j);if(!X){E("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let O=T7(window.location.href,j,{chatOnly:!0});if(!window.open(O,X.target))E("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let N=z$(X);if(!N){E("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}H$(N,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await w5(j))?.branch,D=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");try{let s=await C6();H0(Array.isArray(s?.chats)?s.chats:[])}catch{}try{let s=await e8(h1);w0(Array.isArray(s?.chats)?s.chats:[])}catch{}let g=j5(window.location.href,D,{chatOnly:!0});O$(N,g)}catch(O){J$(N),E("Could not open branch window",c8(O),"error",5000)}},[j,h1,W,E]);h(()=>{if(!W1)return;if(typeof window>"u")return;let X=o_.current;if(!X)return;if(!k4.current){let N=L5("editorWidth",null),O=n_.current||280;k4.current=Number.isFinite(N)?N:O}if(X.style.setProperty("--editor-width",`${k4.current}px`),!C4.current){let N=L5("dockHeight",null);C4.current=Number.isFinite(N)?N:200}X.style.setProperty("--dock-height",`${C4.current}px`)},[W1]),h(()=>{if(!j_||Z)return;let X=(N)=>{if(N.ctrlKey&&N.key==="`")N.preventDefault(),b1()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[b1,j_,Z]),h(()=>{if(Z)return;let X=(N)=>{if(N.ctrlKey&&N.shiftKey&&(N.key==="Z"||N.key==="z")){N.preventDefault(),d4();return}if(N.key==="Escape"&&E1)N.preventDefault(),T_()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[d4,T_,E1,Z]);let x3=Boolean(n0&&n0===(R?.turn_id||E0));if(G)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${z_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${z_.message}</p>
                    </div>
                </div>
            </div>
        `;if(Y)return L`
            <div class=${`app-shell pane-popout${W1?" editor-open":""}`} ref=${o_}>
                <div class="editor-pane-container pane-popout-container">
                    ${W1&&!P_&&L`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${Z_?L`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${Z4}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${__.length>1&&L`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${__.map((X)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${X.id===u0?" active":""}`}
                                                                onClick=${(N)=>{p4(X.id),N.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${X.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${u0&&C1.has(u0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(X)=>{p_(u0),X.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:L`
                                    <div class="pane-popout-controls-label" aria-label=${Z4}>${Z4}</div>
                                `}
                        </div>
                    `}
                    ${W1?L`<div class="editor-pane-host" ref=${U1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Q||"No pane path provided."}</p>
                        </div>`}
                    ${W1&&u0&&C1.has(u0)&&L`
                        <${K3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>p_(u0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${V1?"":" workspace-collapsed"}${W1?" editor-open":""}${Z?" chat-only":""}${E1?" zen-mode":""}`} ref=${o_}>
            ${f&&L`
                <div class="rename-branch-overlay" onPointerDown=${(X)=>{if(X.target===X.currentTarget)y5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(X)=>{X.preventDefault(),T3(X0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${Y0}
                            value=${X0}
                            onInput=${(X)=>{let N=X.currentTarget?.value??"";U0(String(N))}}
                            onKeyDown=${(X)=>{if(X.key==="Escape")X.preventDefault(),y5()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${F0.kind||"info"}`}>
                            ${F0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${z||!F0.canSubmit}>
                                ${z?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${y5}
                                disabled=${z}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Z&&L`
                <${t9}
                    onFileSelect=${V_}
                    visible=${V1}
                    active=${V1||W1}
                    onOpenEditor=${$_}
                    onOpenTerminalTab=${H1}
                    onOpenVncTab=${I_}
                    onToggleTerminal=${j_?b1:void 0}
                    terminalVisible=${Boolean(j_&&p1)}
                />
                <button
                    class=${`workspace-toggle-tab${V1?" open":" closed"}`}
                    onClick=${aj}
                    title=${V1?"Hide workspace":"Show workspace"}
                    aria-label=${V1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${Rj} onTouchStart=${wj}></div>
            `}
            ${V4&&L`
                <div class="editor-pane-container">
                    ${E1&&L`<div class="zen-hover-zone"></div>`}
                    ${W1&&L`
                        <${$j}
                            tabs=${__}
                            activeId=${u0}
                            onActivate=${p4}
                            onClose=${_4}
                            onCloseOthers=${$4}
                            onCloseAll=${Q5}
                            onTogglePin=${j4}
                            onTogglePreview=${p_}
                            onEditSource=${M5}
                            previewTabs=${C1}
                            paneOverrides=${E_}
                            onToggleDock=${j_?b1:void 0}
                            dockVisible=${j_&&p1}
                            onToggleZen=${d4}
                            zenMode=${E1}
                            onPopOutTab=${W?void 0:q8}
                        />
                    `}
                    ${W1&&L`<div class="editor-pane-host" ref=${U1}></div>`}
                    ${W1&&u0&&C1.has(u0)&&L`
                        <${K3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>p_(u0)}
                        />
                    `}
                    ${j_&&p1&&L`<div class="dock-splitter" onMouseDown=${bj} onTouchStart=${gj}></div>`}
                    ${j_&&L`<div class=${`dock-panel${p1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!W&&L`
                                    <button class="dock-panel-action" onClick=${()=>q8($5,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
                        <div class="dock-panel-body" ref=${q5}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${vj} onTouchStart=${fj}></div>
            `}
            <div class="container">
                ${S&&Bj()&&L`<div class="search-results-spacer"></div>`}
                ${Z&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${e0?.agent_name?`@${e0.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${e0?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${N0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(X)=>P3(X.currentTarget.value)}
                                    >
                                        ${N0.map((X)=>L`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${k8(X,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${e0?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${K6}
                                    title=${z?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${z}
                                >
                                    ${z?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${e0?.chat_jid&&e0.chat_jid!==(e0.root_chat_jid||e0.chat_jid)&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${S3}
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
                ${(A||S)&&L`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${hj}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${A?`#${A}`:`Search: ${S} · ${X4}`}</span>
                    </div>
                `}
                <${E7}
                    posts=${K5}
                    hasMore=${Z6?xj:!1}
                    onLoadMore=${Z6?yj:void 0}
                    timelineRef=${i_}
                    onHashtagClick=${uj}
                    onMessageRef=${S0}
                    onScrollToMessage=${L1}
                    onFileRef=${i}
                    onPostClick=${void 0}
                    onDeletePost=${dj}
                    onOpenWidget=${ej}
                    emptyMessage=${A?`No posts with #${A}`:S?`No results for "${S}"`:void 0}
                    agents=${K_}
                    user=${c_}
                    reverse=${Z6}
                    removingPostIds=${y1}
                    searchQuery=${S}
                />
                <${Y$}
                    status=${F4(R)?null:R}
                    draft=${G0}
                    plan=${Z0}
                    thought=${K0}
                    pendingRequest=${B0}
                    intent=${w}
                    turnId=${E0}
                    steerQueued=${x3}
                    onPanelToggle=${R4}
                    showExtensionPanels=${!1}
                />
                <${d2}
                    session=${e}
                    onClose=${Q6}
                    onRetry=${nj}
                    onInject=${sj}
                />
                <${Z7}
                    widget=${I0}
                    onClose=${R5}
                    onWidgetEvent=${_Z}
                />
                <${Y$}
                    extensionPanels=${Array.from(k0.values())}
                    pendingPanelActions=${i0}
                    onExtensionPanelAction=${ij}
                    turnId=${E0}
                    steerQueued=${x3}
                    onPanelToggle=${R4}
                    showCorePanels=${!1}
                />
                <${s6}
                    items=${J?[]:g0}
                    onInjectQueuedFollowup=${I3}
                    onRemoveQueuedFollowup=${k3}
                    onOpenFilePill=${i}
                />
                <${O2}
                    onPost=${()=>{let{searchQuery:X,searchOpen:N}=g1.current||{};if(!X&&!N)r_(),Q4()}}
                    onFocus=${Q4}
                    searchMode=${J}
                    searchScope=${T}
                    onSearch=${pj}
                    onSearchScopeChange=${d}
                    onEnterSearch=${cj}
                    onExitSearch=${lj}
                    fileRefs=${c}
                    onRemoveFileRef=${Q_}
                    onClearFileRefs=${_6}
                    onSetFileRefs=${F}
                    messageRefs=${j0}
                    onRemoveMessageRef=${S1}
                    onClearMessageRefs=${c1}
                    onSetMessageRefs=${B4}
                    onSwitchChat=${P3}
                    onRenameSession=${T3}
                    isRenameSessionInProgress=${z}
                    onCreateSession=${$Z}
                    onDeleteSession=${S3}
                    onRestoreSession=${tj}
                    activeEditorPath=${Z?null:u0}
                    onAttachEditorFile=${Z?void 0:Q0}
                    onOpenFilePill=${i}
                    followupQueueCount=${H_}
                    followupQueueItems=${g0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${I3}
                    onRemoveQueuedFollowup=${k3}
                    onSubmitIntercept=${oj}
                    onMessageResponse=${T5}
                    onSubmitError=${n4}
                    onPopOutChat=${W?void 0:jZ}
                    isAgentActive=${C5}
                    activeChatAgents=${W0}
                    currentChatJid=${j}
                    connectionStatus=${K}
                    activeModel=${$1}
                    modelUsage=${k1}
                    thinkingLevel=${I1}
                    supportsThinking=${p0}
                    contextUsage=${x0}
                    notificationsEnabled=${Y5}
                    notificationPermission=${u4}
                    onToggleNotifications=${f1}
                    onModelChange=${u1}
                    onModelStateChange=${Y6}
                    statusNotice=${F4(R)?R:null}
                />
                <${K7}
                    request=${B0}
                    onRespond=${()=>{O0(null),d0.current=null}}
                />
            </div>
        </div>
    `}function QK(){let[_,$]=u(()=>typeof window>"u"?"http://localhost/":window.location.href);h(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=y((Y,Q={})=>{if(typeof window>"u")return;let{replace:q=!1}=Q||{},G=new URL(String(Y||""),window.location.href).toString();if(q)window.history.replaceState(null,"",G);else window.history.pushState(null,"",G);$(window.location.href)},[]),Z=C0(()=>new URL(_).searchParams,[_]);return L`<${YK} locationParams=${Z} navigate=${j} />`}z8(L`<${QK} />`,document.getElementById("app"));

//# debugId=D509DD869797E09164756E2164756E21
//# sourceMappingURL=app.bundle.js.map
