var zZ=Object.defineProperty;var HZ=(_)=>_;function OZ(_,$){this[_]=HZ.bind(null,$)}var JZ=(_,$)=>{for(var j in $)zZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:OZ.bind($,j)})};var F8,F1,r3,DZ,k4,g3,a3,t3,e3,H6,W6,U6,_2,W8={},U8=[],AZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z8=Array.isArray;function B4(_,$){for(var j in $)_[j]=$[j];return _}function O6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function H8(_,$,j){var Z,Y,Q,q={};for(Q in $)Q=="key"?Z=$[Q]:Q=="ref"?Y=$[Q]:q[Q]=$[Q];if(arguments.length>2&&(q.children=arguments.length>3?F8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Q in _.defaultProps)q[Q]===void 0&&(q[Q]=_.defaultProps[Q]);return V8(_,q,Z,Y,null)}function V8(_,$,j,Z,Y){var Q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++r3:Y,__i:-1,__u:0};return Y==null&&F1.vnode!=null&&F1.vnode(Q),Q}function O8(_){return _.children}function X5(_,$){this.props=_,this.context=$}function N5(_,$){if($==null)return _.__?N5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?N5(_):null}function EZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],Q=B4({},$);Q.__v=$.__v+1,F1.vnode&&F1.vnode(Q),J6(_.__P,Q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?N5($):j,!!(32&$.__u),Y),Q.__v=$.__v,Q.__.__k[Q.__i]=Q,Y2(Z,Q,Y),$.__e=$.__=null,Q.__e!=j&&$2(Q)}}function $2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),$2(_)}function L6(_){(!_.__d&&(_.__d=!0)&&k4.push(_)&&!L8.__r++||g3!=F1.debounceRendering)&&((g3=F1.debounceRendering)||a3)(L8)}function L8(){try{for(var _,$=1;k4.length;)k4.length>$&&k4.sort(t3),_=k4.shift(),$=k4.length,EZ(_)}finally{k4.length=L8.__r=0}}function j2(_,$,j,Z,Y,Q,q,G,V,K,B){var W,U,A,C,T,M,J,k=Z&&Z.__k||U8,P=$.length;for(V=MZ(j,$,k,V,P),W=0;W<P;W++)(A=j.__k[W])!=null&&(U=A.__i!=-1&&k[A.__i]||W8,A.__i=W,M=J6(_,A,U,Y,Q,q,G,V,K,B),C=A.__e,A.ref&&U.ref!=A.ref&&(U.ref&&D6(U.ref,null,A),B.push(A.ref,A.__c||C,A)),T==null&&C!=null&&(T=C),(J=!!(4&A.__u))||U.__k===A.__k?V=Z2(A,V,_,J):typeof A.type=="function"&&M!==void 0?V=M:C&&(V=C.nextSibling),A.__u&=-7);return j.__e=T,V}function MZ(_,$,j,Z,Y){var Q,q,G,V,K,B=j.length,W=B,U=0;for(_.__k=Array(Y),Q=0;Q<Y;Q++)(q=$[Q])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Q]=V8(null,q,null,null,null):z8(q)?q=_.__k[Q]=V8(O8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Q]=V8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Q]=q,V=Q+U,q.__=_,q.__b=_.__b+1,G=null,(K=q.__i=IZ(q,j,V,W))!=-1&&(W--,(G=j[K])&&(G.__u|=2)),G==null||G.__v==null?(K==-1&&(Y>B?U--:Y<B&&U++),typeof q.type!="function"&&(q.__u|=4)):K!=V&&(K==V-1?U--:K==V+1?U++:(K>V?U--:U++,q.__u|=4))):_.__k[Q]=null;if(W)for(Q=0;Q<B;Q++)(G=j[Q])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=N5(G)),q2(G,G));return Z}function Z2(_,$,j,Z){var Y,Q;if(typeof _.type=="function"){for(Y=_.__k,Q=0;Y&&Q<Y.length;Q++)Y[Q]&&(Y[Q].__=_,$=Z2(Y[Q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=N5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function IZ(_,$,j,Z){var Y,Q,q,G=_.key,V=_.type,K=$[j],B=K!=null&&(2&K.__u)==0;if(K===null&&G==null||B&&G==K.key&&V==K.type)return j;if(Z>(B?1:0)){for(Y=j-1,Q=j+1;Y>=0||Q<$.length;)if((K=$[q=Y>=0?Y--:Q++])!=null&&(2&K.__u)==0&&G==K.key&&V==K.type)return q}return-1}function m3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||AZ.test($)?j:j+"px"}function N8(_,$,j,Z,Y){var Q,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||m3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||m3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Q=$!=($=$.replace(e3,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Q]=j,j?Z?j.u=Z.u:(j.u=H6,_.addEventListener($,Q?U6:W6,Q)):_.removeEventListener($,Q?U6:W6,Q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function u3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=H6++;else if($.t<j.u)return;return j(F1.event?F1.event($):$)}}}function J6(_,$,j,Z,Y,Q,q,G,V,K){var B,W,U,A,C,T,M,J,k,P,i,l,$0,Z0,v,R=$.type;if($.constructor!==void 0)return null;128&j.__u&&(V=!!(32&j.__u),Q=[G=$.__e=j.__e]),(B=F1.__b)&&B($);_:if(typeof R=="function")try{if(J=$.props,k=R.prototype&&R.prototype.render,P=(B=R.contextType)&&Z[B.__c],i=B?P?P.props.value:B.__:Z,j.__c?M=(W=$.__c=j.__c).__=W.__E:(k?$.__c=W=new R(J,i):($.__c=W=new X5(J,i),W.constructor=R,W.render=CZ),P&&P.sub(W),W.state||(W.state={}),W.__n=Z,U=W.__d=!0,W.__h=[],W._sb=[]),k&&W.__s==null&&(W.__s=W.state),k&&R.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=B4({},W.__s)),B4(W.__s,R.getDerivedStateFromProps(J,W.__s))),A=W.props,C=W.state,W.__v=$,U)k&&R.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),k&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(k&&R.getDerivedStateFromProps==null&&J!==A&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(J,i),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(J,W.__s,i)===!1){$.__v!=j.__v&&(W.props=J,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),U8.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&q.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(J,W.__s,i),k&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(A,C,T)})}if(W.context=i,W.props=J,W.__P=_,W.__e=!1,l=F1.__r,$0=0,k)W.state=W.__s,W.__d=!1,l&&l($),B=W.render(W.props,W.state,W.context),U8.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,l&&l($),B=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++$0<25);W.state=W.__s,W.getChildContext!=null&&(Z=B4(B4({},Z),W.getChildContext())),k&&!U&&W.getSnapshotBeforeUpdate!=null&&(T=W.getSnapshotBeforeUpdate(A,C)),Z0=B!=null&&B.type===O8&&B.key==null?Q2(B.props.children):B,G=j2(_,z8(Z0)?Z0:[Z0],$,j,Z,Y,Q,q,G,V,K),W.base=$.__e,$.__u&=-161,W.__h.length&&q.push(W),M&&(W.__E=W.__=null)}catch(H){if($.__v=null,V||Q!=null)if(H.then){for($.__u|=V?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;Q[Q.indexOf(G)]=null,$.__e=G}else{for(v=Q.length;v--;)O6(Q[v]);F6($)}else $.__e=j.__e,$.__k=j.__k,H.then||F6($);F1.__e(H,$,j)}else Q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=kZ(j.__e,$,j,Z,Y,Q,q,V,K);return(B=F1.diffed)&&B($),128&$.__u?void 0:G}function F6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(F6))}function Y2(_,$,j){for(var Z=0;Z<j.length;Z++)D6(j[Z],j[++Z],j[++Z]);F1.__c&&F1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(Q){Q.call(Y)})}catch(Q){F1.__e(Q,Y.__v)}})}function Q2(_){return typeof _!="object"||_==null||_.__b>0?_:z8(_)?_.map(Q2):B4({},_)}function kZ(_,$,j,Z,Y,Q,q,G,V){var K,B,W,U,A,C,T,M=j.props||W8,J=$.props,k=$.type;if(k=="svg"?Y="http://www.w3.org/2000/svg":k=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),Q!=null){for(K=0;K<Q.length;K++)if((A=Q[K])&&"setAttribute"in A==!!k&&(k?A.localName==k:A.nodeType==3)){_=A,Q[K]=null;break}}if(_==null){if(k==null)return document.createTextNode(J);_=document.createElementNS(Y,k,J.is&&J),G&&(F1.__m&&F1.__m($,Q),G=!1),Q=null}if(k==null)M===J||G&&_.data==J||(_.data=J);else{if(Q=Q&&F8.call(_.childNodes),!G&&Q!=null)for(M={},K=0;K<_.attributes.length;K++)M[(A=_.attributes[K]).name]=A.value;for(K in M)A=M[K],K=="dangerouslySetInnerHTML"?W=A:K=="children"||(K in J)||K=="value"&&("defaultValue"in J)||K=="checked"&&("defaultChecked"in J)||N8(_,K,null,A,Y);for(K in J)A=J[K],K=="children"?U=A:K=="dangerouslySetInnerHTML"?B=A:K=="value"?C=A:K=="checked"?T=A:G&&typeof A!="function"||M[K]===A||N8(_,K,A,M[K],Y);if(B)G||W&&(B.__html==W.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(W&&(_.innerHTML=""),j2($.type=="template"?_.content:_,z8(U)?U:[U],$,j,Z,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,Q,q,Q?Q[0]:j.__k&&N5(j,0),G,V),Q!=null)for(K=Q.length;K--;)O6(Q[K]);G||(K="value",k=="progress"&&C==null?_.removeAttribute("value"):C!=null&&(C!==_[K]||k=="progress"&&!C||k=="option"&&C!=M[K])&&N8(_,K,C,M[K],Y),K="checked",T!=null&&T!=_[K]&&N8(_,K,T,M[K],Y))}return _}function D6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){F1.__e(Y,j)}}function q2(_,$,j){var Z,Y;if(F1.unmount&&F1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||D6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Q){F1.__e(Q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&q2(Z[Y],$,j||typeof _.type!="function");j||O6(_.__e),_.__c=_.__=_.__e=void 0}function CZ(_,$,j){return this.constructor(_,j)}function J8(_,$,j){var Z,Y,Q,q;$==document&&($=document.documentElement),F1.__&&F1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Q=[],q=[],J6($,_=(!Z&&j||$).__k=H8(O8,null,[_]),Y||W8,W8,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?F8.call($.childNodes):null,Q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,q),Y2(Q,_,q)}function G2(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Q){this.props.value!=Q.value&&Z.forEach(function(q){q.__e=!0,L6(q)})},this.sub=function(Q){Z.add(Q);var q=Q.componentWillUnmount;Q.componentWillUnmount=function(){Z&&Z.delete(Q),q&&q.call(Q)}}),j.children}return $.__c="__cC"+_2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}F8=U8.slice,F1={__e:function(_,$,j,Z){for(var Y,Q,q;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((Q=Y.constructor)&&Q.getDerivedStateFromError!=null&&(Y.setState(Q.getDerivedStateFromError(_)),q=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),q=Y.__d),q)return Y.__E=Y}catch(G){_=G}throw _}},r3=0,DZ=function(_){return _!=null&&_.constructor===void 0},X5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B4({},this.state),typeof _=="function"&&(_=_(B4({},j),this.props)),_&&B4(j,_),_!=null&&this.__v&&($&&this._sb.push($),L6(this))},X5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),L6(this))},X5.prototype.render=O8,k4=[],a3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,t3=function(_,$){return _.__v.__b-$.__v.__b},L8.__r=0,e3=/(PointerCapture)$|Capture$/i,H6=0,W6=u3(!1),U6=u3(!0),_2=0;var C4,L1,B6,h3,V5=0,K2=[],D1=F1,p3=D1.__b,c3=D1.__r,l3=D1.diffed,d3=D1.__c,i3=D1.unmount,o3=D1.__;function B5(_,$){D1.__h&&D1.__h(L1,_,V5||$),V5=0;var j=L1.__H||(L1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function h(_){return V5=1,A6(W2,_)}function A6(_,$,j){var Z=B5(C4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):W2(void 0,$),function(G){var V=Z.__N?Z.__N[0]:Z.__[0],K=Z.t(V,G);V!==K&&(Z.__N=[K,Z.__[1]],Z.__c.setState({}))}],Z.__c=L1,!L1.__f)){var Y=function(G,V,K){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(U){return U.__c});if(B.every(function(U){return!U.__N}))return!Q||Q.call(this,G,V,K);var W=Z.__c.props!==G;return B.some(function(U){if(U.__N){var A=U.__[0];U.__=U.__N,U.__N=void 0,A!==U.__[0]&&(W=!0)}}),Q&&Q.call(this,G,V,K)||W};L1.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:q}=L1;L1.componentWillUpdate=function(G,V,K){if(this.__e){var B=Q;Q=void 0,Y(G,V,K),Q=B}q&&q.call(this,G,V,K)},L1.shouldComponentUpdate=Y}return Z.__N||Z.__}function p(_,$){var j=B5(C4++,3);!D1.__s&&M6(j.__H,$)&&(j.__=_,j.u=$,L1.__H.__h.push(j))}function E6(_,$){var j=B5(C4++,4);!D1.__s&&M6(j.__H,$)&&(j.__=_,j.u=$,L1.__h.push(j))}function S(_){return V5=5,C0(function(){return{current:_}},[])}function X2(_,$,j){V5=6,E6(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function C0(_,$){var j=B5(C4++,7);return M6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return V5=8,C0(function(){return _},$)}function N2(_){var $=L1.context[_.__c],j=B5(C4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(L1)),$.props.value):_.__}function V2(_,$){D1.useDebugValue&&D1.useDebugValue($?$(_):_)}function B2(_){var $=B5(C4++,10),j=h();return $.__=_,L1.componentDidCatch||(L1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function PZ(){for(var _;_=K2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(B8),$.__h.some(z6),$.__h=[]}catch(j){$.__h=[],D1.__e(j,_.__v)}}}D1.__b=function(_){L1=null,p3&&p3(_)},D1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),o3&&o3(_,$)},D1.__r=function(_){c3&&c3(_),C4=0;var $=(L1=_.__c).__H;$&&(B6===L1?($.__h=[],L1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(B8),$.__h.some(z6),$.__h=[],C4=0)),B6=L1},D1.diffed=function(_){l3&&l3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(K2.push($)!==1&&h3===D1.requestAnimationFrame||((h3=D1.requestAnimationFrame)||TZ)(PZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),B6=L1=null},D1.__c=function(_,$){$.some(function(j){try{j.__h.some(B8),j.__h=j.__h.filter(function(Z){return!Z.__||z6(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],D1.__e(Z,j.__v)}}),d3&&d3(_,$)},D1.unmount=function(_){i3&&i3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{B8(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&D1.__e($,j.__v))};var n3=typeof requestAnimationFrame=="function";function TZ(_){var $,j=function(){clearTimeout(Z),n3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);n3&&($=requestAnimationFrame(j))}function B8(_){var $=L1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L1=$}function z6(_){var $=L1;_.__c=_.__(),L1=$}function M6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function W2(_,$){return typeof $=="function"?$(_):$}var U2=function(_,$,j,Z){var Y;$[0]=0;for(var Q=1;Q<$.length;Q++){var q=$[Q++],G=$[Q]?($[0]|=q?1:2,j[$[Q++]]):$[++Q];q===3?Z[0]=G:q===4?Z[1]=Object.assign(Z[1]||{},G):q===5?(Z[1]=Z[1]||{})[$[++Q]]=G:q===6?Z[1][$[++Q]]+=G+"":q?(Y=_.apply(G,U2(_,G,j,["",null])),Z.push(Y),G[0]?$[0]|=2:($[Q-2]=0,$[Q]=Y)):Z.push(G)}return Z},s3=new Map;function SZ(_){var $=s3.get(this);return $||($=new Map,s3.set(this,$)),($=U2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,Q=1,q="",G="",V=[0],K=function(U){Q===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,U,q):Q===3&&(U||q)?(V.push(3,U,q),Q=2):Q===2&&q==="..."&&U?V.push(4,U,0):Q===2&&q&&!U?V.push(5,0,!0,q):Q>=5&&((q||!U&&Q===5)&&(V.push(Q,0,q,Y),Q=6),U&&(V.push(Q,U,0,Y),Q=6)),q=""},B=0;B<j.length;B++){B&&(Q===1&&K(),K(B));for(var W=0;W<j[B].length;W++)Z=j[B][W],Q===1?Z==="<"?(K(),V=[V],Q=3):q+=Z:Q===4?q==="--"&&Z===">"?(Q=1,q=""):q=Z+q[0]:G?Z===G?G="":q+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(K(),Q=1):Q&&(Z==="="?(Q=5,Y=q,q=""):Z==="/"&&(Q<5||j[B][W+1]===">")?(K(),Q===3&&(V=V[0]),Q=V,(V=V[0]).push(2,0,Q),Q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(K(),Q=2):q+=Z),Q===3&&q==="!--"&&(Q=4,V=V[0])}return K(),V}(_)),$),arguments,[])).length>1?$:$[0]}var L=SZ.bind(H8);var j_={};JZ(j_,{uploadWorkspaceFile:()=>A8,uploadMedia:()=>y6,updateWorkspaceFile:()=>sZ,submitAdaptiveCardAction:()=>R6,streamSidePrompt:()=>iZ,stopAutoresearch:()=>hZ,steerAgentQueueItem:()=>dZ,setWorkspaceVisibility:()=>u5,setAgentThoughtVisibility:()=>f6,sendPeerAgentMessage:()=>gZ,sendAgentMessage:()=>i4,searchPosts:()=>k6,restoreChatBranch:()=>bZ,respondToAgentRequest:()=>D8,renameWorkspaceFile:()=>h6,renameChatBranch:()=>vZ,removeAgentQueueItem:()=>lZ,pruneChatBranch:()=>fZ,moveWorkspaceEntry:()=>p6,getWorkspaceTree:()=>g5,getWorkspaceRawUrl:()=>E8,getWorkspaceFile:()=>m5,getWorkspaceDownloadUrl:()=>M8,getWorkspaceBranch:()=>nZ,getTimeline:()=>d4,getThumbnailUrl:()=>b6,getThread:()=>C6,getPostsByHashtag:()=>I6,getMediaUrl:()=>f_,getMediaText:()=>g6,getMediaInfo:()=>W5,getMediaBlob:()=>oZ,getChatBranches:()=>wZ,getAutoresearchStatus:()=>uZ,getAgents:()=>S6,getAgentThought:()=>v6,getAgentStatus:()=>x6,getAgentQueueState:()=>cZ,getAgentModels:()=>b5,getAgentContext:()=>mZ,getActiveChatAgents:()=>T6,forkChatBranch:()=>f5,dismissAutoresearch:()=>pZ,deleteWorkspaceFile:()=>c6,deletePost:()=>P6,createWorkspaceFile:()=>u6,createReply:()=>RZ,createPost:()=>yZ,attachWorkspaceFile:()=>m6,addToWhitelist:()=>w6,SSEClient:()=>I8});async function e0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function L2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Q of $)if(Q.startsWith("event:"))j=Q.slice(6).trim()||"message";else if(Q.startsWith("data:"))Z.push(Q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function xZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:q,done:G}=await j.read();if(G)break;Y+=Z.decode(q,{stream:!0});let V=Y.split(`

`);Y=V.pop()||"";for(let K of V){let B=L2(K);if(B)$(B.event,B.data)}}Y+=Z.decode();let Q=L2(Y);if(Q)$(Q.event,Q.data)}async function d4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return e0(Z)}async function I6(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function k6(_,$=50,j=0,Z=null,Y="current",Q=null){let q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=Y?`&scope=${encodeURIComponent(Y)}`:"",V=Q?`&root_chat_jid=${encodeURIComponent(Q)}`:"";return e0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${G}${V}`)}async function C6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return e0(`/thread/${_}${j}`)}async function yZ(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return e0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function RZ(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function P6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return e0(Y,{method:"DELETE"})}async function i4(_,$,j=null,Z=[],Y=null,Q=null){let q=Q?`?chat_jid=${encodeURIComponent(Q)}`:"",G={content:$,thread_id:j,media_ids:Z};if(Y==="auto"||Y==="queue"||Y==="steer")G.mode=Y;return e0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(G)})}async function T6(){return e0("/agent/active-chats")}async function wZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return e0(`/agent/branches${Z}`)}async function f5(_,$={}){return e0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function vZ(_,$={}){return e0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function fZ(_){return e0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function bZ(_,$={}){return e0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function gZ(_,$,j,Z="auto",Y={}){let Q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return e0("/agent/peer-message",{method:"POST",body:JSON.stringify(Q)})}async function S6(){return e0("/agent/roster")}async function x6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/status${$}`)}async function mZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/context${$}`)}async function uZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/autoresearch/status${$}`)}async function hZ(_=null,$={}){return e0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function pZ(_=null){return e0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function cZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/queue-state${$}`)}async function lZ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function dZ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function b5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/models${$}`)}async function y6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function D8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function R6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function iZ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await xZ(j,(Q,q)=>{if($.onEvent?.(Q,q),Q==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Q==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Q==="side_prompt_done")Z=q;else if(Q==="side_prompt_error")Y=q}),Y){let Q=Error(Y?.error||"Side prompt failed");throw Q.payload=Y,Q}return Z}async function w6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function v6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return e0(j)}async function f6(_,$,j){return e0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function f_(_){return`/media/${_}`}function b6(_){return`/media/${_}/thumbnail`}async function W5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function g6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function oZ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function g5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return e0(Z)}async function nZ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return e0($)}async function m5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return e0(Y)}async function sZ(_,$){return e0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function m6(_){return e0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function A8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let Q=Y.toString(),q=Q?`/workspace/upload?${Q}`:"/workspace/upload",G=await fetch(""+q,{method:"POST",body:Z});if(!G.ok){let V=await G.json().catch(()=>({error:"Upload failed"})),K=Error(V.error||`HTTP ${G.status}`);throw K.status=G.status,K.code=V.code,K}return G.json()}async function u6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),Q=Error(Y.error||`HTTP ${Z.status}`);throw Q.status=Z.status,Q.code=Y.code,Q}return Z.json()}async function h6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function p6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function c6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return e0($,{method:"DELETE"})}async function u5(_,$=!1){return e0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function E8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function M8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class I8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function k8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function rZ(_,$){let j=k8(_),Z=k8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function l6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function d6(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},Q=String($||"").trim().toLowerCase();if(!Q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?Q:`${Y.value}${Q}`,updatedAt:j}}function aZ(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,Q=[];for(let q=0;q<j;q+=1)Q.push((Y+q)%j);return Q}function tZ(_,$,j=0,Z=(Y)=>Y){let Y=k8($);if(!Y)return-1;let Q=Array.isArray(_)?_:[],q=aZ(Q.length,j),G=Q.map((V)=>k8(Z(V)));for(let V of q)if(G[V].startsWith(Y))return V;for(let V of q)if(G[V].includes(Y))return V;return-1}function i6(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let Q=Z(Y[j]);if(rZ(Q,$))return j}return tZ(Y,$,0,Z)}function J_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function N1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function U5(_,$=!1){let j=J_(_);if(j===null)return $;return j==="true"}function L5(_,$=null){let j=J_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function C8(_){return String(_||"").trim().toLowerCase()}function o6(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return C8($[1]||"")}function eZ(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=C8(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function F2(_,$,j={}){let Z=o6($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return eZ(_).filter((Q)=>{if(Y&&Q?.chat_jid===Y)return!1;return C8(Q?.agent_name).startsWith(Z)})}function n6(_){let $=C8(_);return $?`@${$} `:""}function z2(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function P8(_){let $=s6(_);return $?`@${$}`:""}function s6(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function r6(_,$=""){let j=String(_||""),Z=s6(j),Y=s6($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:Q,canSubmit:!1,kind:"info",message:`Already using ${Q}.`};if(Z!==j.trim())return{normalized:Z,handle:Q,canSubmit:!0,kind:"info",message:`Will save as ${Q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Q,canSubmit:!0,kind:"success",message:`Saving as ${Q}.`}}function H2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?P8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function _Y(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function T8(_,$={}){let j=P8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=_Y(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function O2(_,$,j){let Z=P8(_),Y=P8($),Q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Q||"branch"}.`}function $Y(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function W4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function S8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return W4(_)?"Compacting context":"Working..."}function jY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function x8(_,$=Date.now()){let j=$Y(_);if(j===null)return null;return jY(Math.max(0,$-j))}function o_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:Q="Remove",icon:q="file"}){let G=`${_}-file-pill`,V=`${_}-file-name`,K=`${_}-file-remove`,B=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  `}var ZY=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function YY({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,Q="Compact context",G=`${Z!=null?`Context: ${J2(Z)} / ${J2(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,V=9,K=2*Math.PI*9,B=j/100*K,W=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
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
    `}function J2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function QY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K))Y.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Q);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function qY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K)){let B=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(B)Y.push(B[1])}else if(!K.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Q);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function GY(_){let $=QY(_||""),j=qY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function a6({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let Q=typeof Y?.content==="string"?Y.content:"",q=GY(Q);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
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
                                    ${q.fileRefs.map((G)=>{let V=G.split("/").pop()||G;return L`
                                            <${o_}
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
    `}function D2({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:Q,onEnterSearch:q,onExitSearch:G,fileRefs:V=[],onRemoveFileRef:K,onClearFileRefs:B,messageRefs:W=[],onRemoveMessageRef:U,onClearMessageRefs:A,activeModel:C=null,modelUsage:T=null,thinkingLevel:M=null,supportsThinking:J=!1,contextUsage:k=null,onContextCompact:P,notificationsEnabled:i=!1,notificationPermission:l="default",onToggleNotifications:$0,onModelChange:Z0,onModelStateChange:v,activeEditorPath:R=null,onAttachEditorFile:H,onOpenFilePill:y,followupQueueItems:c=[],onInjectQueuedFollowup:G0,onRemoveQueuedFollowup:d,onSubmitIntercept:Y0,onMessageResponse:j0,onPopOutChat:K0,isAgentActive:V0=!1,activeChatAgents:B0=[],currentChatJid:O0="web:default",connectionStatus:E0="connected",onSetFileRefs:M0,onSetMessageRefs:n0,onSubmitError:R0,onSwitchChat:P0,onRenameSession:s0,isRenameSessionInProgress:r0=!1,onCreateSession:h0,onDeleteSession:t0,onRestoreSession:p0,showQueueStack:Z1=!0,statusNotice:z0=null}){let[l0,Y1]=h(""),[G1,X_]=h(""),[A1,$1]=h([]),[c1,C1]=h(!1),[K1,c0]=h([]),[y1,P1]=h(0),[e,W0]=h(!1),[H0,N0]=h([]),[w0,x0]=h(0),[v0,k0]=h(!1),[f0,i0]=h(!1),[D0,g0]=h(!1),[J0,q0]=h(!1),[w,_0]=h([]),[F0,I0]=h(0),[m0,X1]=h(0),[E1,_1]=h(!1),[l1,q4]=h(0),[L_,a1]=h(null),[F_,N_]=h(()=>Date.now()),Q1=S(null),t1=S(null),G4=S(null),g_=S(null),e4=S(null),y4=S(null),g1=S(null),z_=S(null),R1=S({value:"",updatedAt:0}),M1=S(0),V1=S(!1),m_=200,u_=(F)=>{let g=new Set,o=[];for(let u of F||[]){if(typeof u!=="string")continue;let T0=u.trim();if(!T0||g.has(T0))continue;g.add(T0),o.push(T0)}return o},W1=()=>{let F=J_("piclaw_compose_history");if(!F)return[];try{let g=JSON.parse(F);if(!Array.isArray(g))return[];return u_(g)}catch{return[]}},Z_=(F)=>{N1("piclaw_compose_history",JSON.stringify(F))},u0=S(W1()),T1=S(-1),E_=S(""),Y_=l0.trim()||A1.length>0||V.length>0||W.length>0,R4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),r_=typeof window<"u"&&typeof Notification<"u",w4=typeof window<"u"?Boolean(window.isSecureContext):!1,_5=r_&&w4&&l!=="denied",t_=l==="granted"&&i,h_=W4(z0),M5=S8(z0),I5=typeof z0?.detail==="string"&&z0.detail.trim()?z0.detail.trim():"",U1=h_?x8(z0,F_):null,w1=t_?"Disable notifications":"Enable notifications",$5=A1.length>0||V.length>0||W.length>0,M_=E0==="disconnected"?"Reconnecting":String(E0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),Q_=E0==="disconnected"?"Reconnecting":`Connection: ${M_}`,d1=(Array.isArray(B0)?B0:[]).filter((F)=>!F?.archived_at),S1=(()=>{for(let F of Array.isArray(B0)?B0:[]){let g=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(g&&g===O0)return F}return null})(),m1=Boolean(S1&&S1.chat_jid===(S1.root_chat_jid||S1.chat_jid)),O1=C0(()=>{let F=new Set,g=[];for(let o of Array.isArray(B0)?B0:[]){let u=typeof o?.chat_jid==="string"?o.chat_jid.trim():"";if(!u||u===O0||F.has(u))continue;if(!(typeof o?.agent_name==="string"?o.agent_name.trim():""))continue;F.add(u),g.push(o)}return g},[B0,O0]),I_=O1.length>0,k_=I_&&typeof P0==="function",C_=I_&&typeof p0==="function",e_=Boolean(r0||V1.current),q_=!j&&typeof s0==="function"&&!e_,e1=!j&&typeof h0==="function",P_=!j&&typeof t0==="function"&&!m1,K4=!j&&(k_||C_||q_||e1||P_),I1=C||"",_4=J&&M?` (${M})`:"",v4=_4.trim()?`${M}`:"",f4=typeof T?.hint_short==="string"?T.hint_short.trim():"",T_=[v4||null,f4||null].filter(Boolean).join(" • "),b4=[I1?`Current model: ${I1}${_4}`:null,T?.plan?`Plan: ${T.plan}`:null,f4||null,T?.primary?.reset_description||null,T?.secondary?.reset_description||null].filter(Boolean),j5=f0?"Switching model…":b4.join(" • ")||`Current model: ${I1}${_4} (tap to open model picker)`,p_=(F)=>{if(!F||typeof F!=="object")return;let g=F.model??F.current;if(typeof v==="function")v({model:g??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(g&&typeof Z0==="function")Z0(g)},c_=(F)=>{let g=F||Q1.current;if(!g)return;g.style.height="auto",g.style.height=`${g.scrollHeight}px`,g.style.overflowY="hidden"},O4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){W0(!1),c0([]);return}let g=F.toLowerCase().split(" ")[0];if(g.length<1){W0(!1),c0([]);return}let o=ZY.filter((u)=>u.name.startsWith(g)||u.name.replace(/-/g,"").startsWith(g.replace(/-/g,"")));if(o.length>0&&!(o.length===1&&o[0].name===g))k0(!1),N0([]),c0(o),P1(0),W0(!0);else W0(!1),c0([])},l_=(F)=>{let g=l0,o=g.indexOf(" "),u=o>=0?g.slice(o):"",T0=F.name+u;Y1(T0),W0(!1),c0([]),requestAnimationFrame(()=>{let J1=Q1.current;if(!J1)return;let x1=T0.length;J1.selectionStart=x1,J1.selectionEnd=x1,J1.focus()})},g4=(F)=>{if(o6(F)==null){k0(!1),N0([]);return}let g=F2(d1,F,{currentChatJid:O0});if(g.length>0&&!(g.length===1&&n6(g[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))W0(!1),c0([]),N0(g),x0(0),k0(!0);else k0(!1),N0([])},d_=(F)=>{let g=n6(F?.agent_name);if(!g)return;Y1(g),k0(!1),N0([]),requestAnimationFrame(()=>{let o=Q1.current;if(!o)return;let u=g.length;o.selectionStart=u,o.selectionEnd=u,o.focus()})},S_=()=>{if(j||!k_&&!C_&&!q_&&!e1&&!P_)return!1;return R1.current={value:"",updatedAt:0},g0(!1),W0(!1),c0([]),k0(!1),N0([]),q0(!0),!0},k1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!k_&&!C_&&!q_&&!e1&&!P_)return;if(J0){R1.current={value:"",updatedAt:0},q0(!1);return}S_()},J4=(F)=>{let g=typeof F==="string"?F.trim():"";if(q0(!1),!g||g===O0){requestAnimationFrame(()=>Q1.current?.focus());return}P0?.(g)},D4=async(F)=>{let g=typeof F==="string"?F.trim():"";if(q0(!1),!g||typeof p0!=="function"){requestAnimationFrame(()=>Q1.current?.focus());return}try{await p0(g)}catch(o){console.warn("Failed to restore session:",o),requestAnimationFrame(()=>Q1.current?.focus())}},m4=(F)=>{let o=(Array.isArray(F)?F:[]).findIndex((u)=>!u?.disabled);return o>=0?o:0},z1=C0(()=>{let F=[];for(let g of O1){let o=Boolean(g?.archived_at),u=typeof g?.agent_name==="string"?g.agent_name.trim():"",T0=typeof g?.chat_jid==="string"?g.chat_jid.trim():"";if(!u||!T0)continue;F.push({type:"session",key:`session:${T0}`,label:`@${u} — ${T0}${g?.is_active?" active":""}${o?" archived":""}`,chat:g,disabled:o?!C_:!k_})}if(e1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(q_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:e_});if(P_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[O1,C_,k_,e1,q_,P_,e_]),A4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof s0!=="function"||r0||V1.current)return;V1.current=!0,q0(!1);try{await s0()}catch(g){console.warn("Failed to rename session:",g)}finally{V1.current=!1}requestAnimationFrame(()=>Q1.current?.focus())},Z5=async()=>{if(typeof h0!=="function")return;q0(!1);try{await h0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},u1=async()=>{if(typeof t0!=="function")return;q0(!1);try{await t0(O0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},V_=(F)=>{if(j)X_(F);else Y1(F),O4(F),g4(F);requestAnimationFrame(()=>c_())},$4=(F)=>{let g=j?G1:l0,o=g&&!g.endsWith(`
`)?`
`:"",u=`${g}${o}${F}`.trimStart();V_(u)},u4=(F)=>{let g=F?.command?.model_label;if(g)return g;let o=F?.command?.message;if(typeof o==="string"){let u=o.match(/•\s+([^\n]+?)\s+\(current\)/);if(u?.[1])return u[1].trim()}return null},X4=async(F)=>{if(j||f0)return;i0(!0);try{let g=await i4("default",F,null,[],null,O0),o=u4(g);p_({model:o??C??null,thinking_level:g?.command?.thinking_level,supports_thinking:g?.command?.supports_thinking});try{let u=await b5(O0);if(u)p_(u)}catch{}return _?.(),!0}catch(g){return console.error("Failed to switch model:",g),alert("Failed to switch model: "+g.message),!1}finally{i0(!1)}},E4=async()=>{await X4("/cycle-model")},N4=async(F)=>{if(!F||f0)return;if(await X4(`/model ${F}`))g0(!1)},x_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let g=F.chat;if(g?.archived_at)D4(g.chat_jid);else J4(g.chat_jid);return}if(F.type==="action"){if(F.action==="new"){Z5();return}if(F.action==="rename"){A4();return}if(F.action==="delete")u1()}},H_=(F)=>{F.preventDefault(),F.stopPropagation(),R1.current={value:"",updatedAt:0},q0(!1),g0((g)=>!g)},M4=async()=>{if(j)return;P?.(),await y_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},h4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return V0?"queue":void 0},y_=async(F,g,o={})=>{let{includeMedia:u=!0,includeFileRefs:T0=!0,includeMessageRefs:J1=!0,clearAfterSubmit:x1=!0,recordHistory:f1=!0}=o||{},V4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:l0,p4=typeof V4==="string"?V4:"";if(!p4.trim()&&(u?A1.length===0:!0)&&(T0?V.length===0:!0)&&(J1?W.length===0:!0))return;W0(!1),c0([]),k0(!1),N0([]),q0(!1),a1(null);let Y5=u?[...A1]:[],Q5=T0?[...V]:[],B_=J1?[...W]:[],o1=p4.trim();if(f1&&o1){let I4=u0.current,H1=u_(I4.filter((j4)=>j4!==o1));if(H1.push(o1),H1.length>200)H1.splice(0,H1.length-200);u0.current=H1,Z_(H1),T1.current=-1,E_.current=""}let q5=()=>{if(u)$1([...Y5]);if(T0)M0?.(Q5);if(J1)n0?.(B_);Y1(o1),requestAnimationFrame(()=>c_())};if(x1)Y1(""),$1([]),B?.(),A?.();(async()=>{try{if(await Y0?.({content:o1,submitMode:g,fileRefs:Q5,messageRefs:B_,mediaFiles:Y5})){_?.();return}let H1=[];for(let O_ of Y5){let c4=await y6(O_);H1.push(c4.id)}let j4=Q5.length?`Files:
${Q5.map((O_)=>`- ${O_}`).join(`
`)}`:"",Z8=B_.length?`Referenced messages:
${B_.map((O_)=>`- message:${O_}`).join(`
`)}`:"",G5=H1.length?`Attachments:
${H1.map((O_,c4)=>{let l4=Y5[c4]?.name||`attachment-${c4+1}`;return`- attachment:${O_} (${l4})`}).join(`
`)}`:"",Y8=[o1,j4,Z8,G5].filter(Boolean).join(`

`),h1=await i4("default",Y8,null,H1,h4(g),O0);if(j0?.(h1),h1?.command){p_({model:h1.command.model_label??C??null,thinking_level:h1.command.thinking_level,supports_thinking:h1.command.supports_thinking});try{let O_=await b5(O0);if(O_)p_(O_)}catch{}}_?.()}catch(I4){if(x1)q5();let H1=I4?.message||"Failed to send message.";a1(H1),R0?.(H1),console.error("Failed to post:",I4)}})()},z=(F)=>{G0?.(F)},I=x((F)=>{if(j||!D0&&!J0||F?.isComposing)return!1;let g=()=>{F.preventDefault?.(),F.stopPropagation?.()},o=()=>{R1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(g(),o(),D0)g0(!1);if(J0)q0(!1);return!0}if(D0){if(F.key==="ArrowDown"){if(g(),o(),w.length>0)I0((u)=>(u+1)%w.length);return!0}if(F.key==="ArrowUp"){if(g(),o(),w.length>0)I0((u)=>(u-1+w.length)%w.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&w.length>0)return g(),o(),N4(w[Math.max(0,Math.min(F0,w.length-1))]),!0;if(l6(F)&&w.length>0){g();let u=d6(R1.current,F.key);R1.current=u;let T0=i6(w,u.value,F0,(J1)=>J1);if(T0>=0)I0(T0);return!0}}if(J0){if(F.key==="ArrowDown"){if(g(),o(),z1.length>0)X1((u)=>(u+1)%z1.length);return!0}if(F.key==="ArrowUp"){if(g(),o(),z1.length>0)X1((u)=>(u-1+z1.length)%z1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&z1.length>0)return g(),o(),x_(z1[Math.max(0,Math.min(m0,z1.length-1))]),!0;if(l6(F)&&z1.length>0){g();let u=d6(R1.current,F.key);R1.current=u;let T0=i6(z1,u.value,m0,(J1)=>J1.label);if(T0>=0)X1(T0);return!0}}return!1},[j,D0,J0,w,F0,z1,m0,N4]),f=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),X_(""),G?.();return}if(I(F))return;let g=Q1.current?.value??(j?G1:l0);if(z2(F,g,{searchMode:j,showSessionSwitcherButton:K4})){F.preventDefault(),S_();return}if(v0&&H0.length>0){let o=Q1.current?.value??(j?G1:l0);if(!String(o||"").match(/^@([a-zA-Z0-9_-]*)$/))k0(!1),N0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),x0((u)=>(u+1)%H0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),x0((u)=>(u-1+H0.length)%H0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),d_(H0[w0]);return}if(F.key==="Escape"){F.preventDefault(),k0(!1),N0([]);return}}}if(e&&K1.length>0){let o=Q1.current?.value??(j?G1:l0);if(!String(o||"").startsWith("/"))W0(!1),c0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),P1((u)=>(u+1)%K1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),P1((u)=>(u-1+K1.length)%K1.length);return}if(F.key==="Tab"){F.preventDefault(),l_(K1[y1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!g.includes(" ")){F.preventDefault();let T0=K1[y1];W0(!1),c0([]),y_(T0.name);return}}if(F.key==="Escape"){F.preventDefault(),W0(!1),c0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let o=Q1.current;if(!o)return;let u=o.value||"",T0=o.selectionStart===0&&o.selectionEnd===0,J1=o.selectionStart===u.length&&o.selectionEnd===u.length;if(F.key==="ArrowUp"&&T0||F.key==="ArrowDown"&&J1){let x1=u0.current;if(!x1.length)return;F.preventDefault();let f1=T1.current;if(F.key==="ArrowUp"){if(f1===-1)E_.current=u,f1=x1.length-1;else if(f1>0)f1-=1;T1.current=f1,V_(x1[f1]||"")}else{if(f1===-1)return;if(f1<x1.length-1)f1+=1,T1.current=f1,V_(x1[f1]||"");else T1.current=-1,V_(E_.current||""),E_.current=""}requestAnimationFrame(()=>{let V4=Q1.current;if(!V4)return;let p4=V4.value.length;V4.selectionStart=p4,V4.selectionEnd=p4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(g.trim())Y?.(g.trim(),Z)}else y_(g,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(g.trim())Y?.(g.trim(),Z)}else y_(g)},b=(F)=>{let g=Array.from(F||[]).filter((o)=>o instanceof File&&!String(o.name||"").startsWith(".DS_Store"));if(!g.length)return;$1((o)=>[...o,...g]),a1(null)},s=(F)=>{b(F.target.files),F.target.value=""},X0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),M1.current+=1,C1(!0)},U0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),M1.current=Math.max(0,M1.current-1),M1.current===0)C1(!1)},L0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";C1(!0)},Q0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),M1.current=0,C1(!1),b(F.dataTransfer?.files||[])},S0=(F)=>{if(j)return;let g=F.clipboardData?.items;if(!g||!g.length)return;let o=[];for(let u of g){if(u.kind!=="file")continue;let T0=u.getAsFile?.();if(T0)o.push(T0)}if(o.length>0)F.preventDefault(),b(o)},v1=(F)=>{$1((g)=>g.filter((o,u)=>u!==F))},G_=()=>{a1(null),$1([]),B?.(),A?.()},i1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:g,longitude:o,accuracy:u}=F.coords,T0=`${g.toFixed(5)}, ${o.toFixed(5)}`,J1=Number.isFinite(u)?` ±${Math.round(u)}m`:"",x1=`https://maps.google.com/?q=${g},${o}`,f1=`Location: ${T0}${J1} ${x1}`;$4(f1)},(F)=>{let g=F?.message||"Unable to retrieve location.";alert(`Location error: ${g}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};p(()=>{if(!D0)return;R1.current={value:"",updatedAt:0},_1(!0),b5(O0).then((F)=>{let g=Array.isArray(F?.models)?F.models.filter((o)=>typeof o==="string"&&o.trim().length>0):[];g.sort((o,u)=>o.localeCompare(u,void 0,{sensitivity:"base"})),_0(g),p_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),_0([])}).finally(()=>{_1(!1)})},[D0,C]),p(()=>{if(j)g0(!1),q0(!1),W0(!1),c0([]),k0(!1),N0([])},[j]),p(()=>{if(J0&&!K4)q0(!1)},[J0,K4]),p(()=>{if(!D0)return;let F=w.findIndex((g)=>g===C);I0(F>=0?F:0)},[D0,w,C]),p(()=>{if(!J0)return;X1(m4(z1)),R1.current={value:"",updatedAt:0}},[J0,O0]),p(()=>{if(!D0)return;let F=(g)=>{let o=g_.current,u=e4.current,T0=g.target;if(o&&o.contains(T0))return;if(u&&u.contains(T0))return;g0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[D0]),p(()=>{if(!J0)return;let F=(g)=>{let o=y4.current,u=g1.current,T0=g.target;if(o&&o.contains(T0))return;if(u&&u.contains(T0))return;q0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[J0]),p(()=>{if(j||!D0&&!J0)return;let F=(g)=>{I(g)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,D0,J0,I]),p(()=>{if(!D0)return;let F=g_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,F0,w]),p(()=>{if(!J0)return;let F=y4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,m0,z1.length]),p(()=>{let F=()=>{let J1=z_.current?.clientWidth||0;q4((x1)=>x1===J1?x1:J1)};F();let g=z_.current,o=0,u=()=>{if(o)cancelAnimationFrame(o);o=requestAnimationFrame(()=>{o=0,F()})},T0=null;if(g&&typeof ResizeObserver<"u")T0=new ResizeObserver(()=>u()),T0.observe(g);if(typeof window<"u")window.addEventListener("resize",u);return()=>{if(o)cancelAnimationFrame(o);if(T0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",u)}},[j,C,S1?.agent_name,K4,k?.percent]);let k5=(F)=>{let g=F.target.value;if(a1(null),J0)q0(!1);c_(F.target),V_(g)};return p(()=>{requestAnimationFrame(()=>c_())},[l0,G1,j]),p(()=>{if(!h_)return;N_(Date.now());let F=setInterval(()=>N_(Date.now()),1000);return()=>clearInterval(F)},[h_,z0?.started_at,z0?.startedAt]),p(()=>{if(j)return;g4(l0)},[d1,O0,l0,j]),L`
        <div class="compose-box">
            ${Z1&&!j&&L`
                <${a6}
                    items=${c}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${d}
                    onOpenFilePill=${y}
                />
            `}
            ${z0&&L`
                <div
                    class=${`compose-inline-status${h_?" compaction":""}`}
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
            ${L_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${L_}</div>
            `}
            <div
                class=${`compose-input-wrapper${c1?" drag-active":""}`}
                onDragEnter=${X0}
                onDragOver=${L0}
                onDragLeave=${U0}
                onDrop=${Q0}
            >
                <div class="compose-input-main">
                    ${$5&&L`
                        <div class="compose-file-refs">
                            ${W.map((F)=>{return L`
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
                            ${V.map((F)=>{let g=F.split("/").pop()||F;return L`
                                    <${o_}
                                        prefix="compose"
                                        label=${g}
                                        title=${F}
                                        onClick=${()=>y?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(F)}
                                    />
                                `})}
                            ${A1.map((F,g)=>{let o=F?.name||`attachment-${g+1}`;return L`
                                    <${o_}
                                        key=${o+g}
                                        prefix="compose"
                                        label=${o}
                                        title=${o}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>v1(g)}
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
                        value=${j?G1:l0}
                        onInput=${k5}
                        onKeyDown=${f}
                        onPaste=${S0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${v0&&H0.length>0&&L`
                        <div class="slash-autocomplete" ref=${G4}>
                            ${H0.map((F,g)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${g===w0?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),d_(F)}}
                                    onMouseEnter=${()=>x0(g)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${e&&K1.length>0&&L`
                        <div class="slash-autocomplete" ref=${t1}>
                            ${K1.map((F,g)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${g===y1?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),l_(F)}}
                                    onMouseEnter=${()=>P1(g)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D0&&!j&&L`
                        <div class="compose-model-popup" ref=${g_} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${E1&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!E1&&w.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!E1&&w.map((F,g)=>L`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${F0===g?" active":""}${C===F?" current-model":""}`}
                                        onClick=${()=>{N4(F)}}
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
                                    onClick=${()=>{E4()}}
                                    disabled=${f0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${J0&&!j&&L`
                        <div class="compose-model-popup" ref=${y4} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return H2(S1,O0)})()}
                                    </div>
                                `}
                                ${!I_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${I_&&O1.map((F,g)=>{let o=Boolean(F.archived_at),T0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!o&&typeof t0==="function",J1=T8(F,{currentChatJid:O0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${o?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${o?" archived":""}${m0===g?" active":""}`}
                                                onClick=${()=>{if(o){D4(F.chat_jid);return}J4(F.chat_jid)}}
                                                disabled=${o?!C_:!k_}
                                                title=${o?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${J1}
                                            </button>
                                            ${T0&&L`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(x1)=>{x1.stopPropagation(),q0(!1),t0(F.chat_jid)}}
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
                            ${(e1||q_||P_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${e1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${z1.findIndex((F)=>F.key==="action:new")===m0?" active":""}`}
                                            onClick=${()=>{Z5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${q_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${z1.findIndex((F)=>F.key==="action:rename")===m0?" active":""}`}
                                            onClick=${(F)=>{A4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${e_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${P_&&L`
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
                <div class="compose-footer" ref=${z_}>
                    ${!j&&C&&L`
                    <div class="compose-meta-row">
                        ${!j&&C&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${e4}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${j5}
                                    aria-label="Open model picker"
                                    onClick=${H_}
                                    disabled=${f0}
                                >
                                    ${f0?"Switching…":I1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!f0&&T_&&L`
                                        <span class="compose-model-usage-hint" title=${j5}>
                                            ${T_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&k&&k.percent!=null&&L`
                            <${YY} usage=${k} onCompact=${M4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${K4&&L`
                        ${S1?.agent_name&&L`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${S1.chat_jid||O0}
                                aria-label=${`Manage sessions for @${S1.agent_name}`}
                                onClick=${k1}
                            >@${S1.agent_name}</button>
                        `}
                        <button
                            ref=${g1}
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
                    ${R4&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${i1}
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
                    ${_5&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${t_?" active":""}`}
                            onClick=${$0}
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
                                disabled=${V.includes(R)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${s} />
                        </label>
                    `}
                    ${(E0!=="connected"||!j)&&L`
                        <div class="compose-send-stack">
                            ${E0!=="connected"&&L`
                                <span class="compose-connection-status connection-status ${E0}" title=${Q_}>
                                    ${M_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{y_()}}
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
    `}var _$="piclaw_theme",R8="piclaw_tint",M2="piclaw_chat_themes",p5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},I2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},A2={default:{label:"Default",mode:"auto",light:p5,dark:I2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},KY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],o4={theme:"default",tint:null},k2="light",t6=!1;function w8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function z5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Q)=>Q+Q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function XY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let Q=parseInt(Y[1],10),q=parseInt(Y[2],10),G=parseInt(Y[3],10);if(![Q,q,G].every((K)=>Number.isFinite(K)))return null;let V=`#${[Q,q,G].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:Q,g:q,b:G,hex:V}}function C2(_){return z5(_)||XY(_)}function h5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),Q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${Q})`}function e6(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function NY(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*Q+0.0722*q}function VY(_){return NY(_)>0.4?"#000000":"#ffffff"}function P2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function $$(_){return A2[_]||A2.default}function BY(_){return _.mode==="auto"?P2():_.mode}function T2(_,$){let j=$$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||p5}function S2(_,$,j){let Z=C2($);if(!Z)return _;let Y=z5(_.bgPrimary),Q=z5(_.bgSecondary),q=z5(_.bgHover),G=z5(_.borderColor);if(!Y||!Q||!q||!G)return _;let K=z5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:h5(Y,Z,0.08),bgSecondary:h5(Q,Z,0.12),bgHover:h5(q,Z,0.16),borderColor:h5(G,Z,0.08),accent:Z.hex,accentHover:K?h5(Z,K,0.18):Z.hex}}function WY(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=C2(Z),Q=Y?e6(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Y?e6(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Y?e6(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V=Y?VY(Y):$==="dark"?"#000000":"#ffffff",K={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":q,"--accent-soft-strong":G,"--accent-contrast-text":V,"--danger-color":_.danger||p5.danger,"--success-color":_.success||p5.success,"--search-highlight-color":Q||"rgba(29, 155, 240, 0.2)"};Object.entries(K).forEach(([B,W])=>{if(W)j.style.setProperty(B,W)})}function UY(){if(typeof document>"u")return;let _=document.documentElement;KY.forEach(($)=>_.style.removeProperty($))}function F5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function E2(_){let $=w8(o4?.theme||"default"),j=o4?.tint?String(o4.tint).trim():null,Z=T2($,_);if($==="default"&&j)Z=S2(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?I2.bgPrimary:p5.bgPrimary}function LY(_,$){if(typeof document>"u")return;let j=F5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=F5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",E2("light"));let Y=F5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",E2("dark"));let Q=F5("msapplication-TileColor");if(Q&&_)Q.setAttribute("content",_);let q=F5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let G=F5("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function FY(){if(typeof window>"u")return;let _={...o4,mode:k2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function x2(){try{let _=J_(M2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function zY(_,$,j){let Z=x2();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};N1(M2,JSON.stringify(Z))}function HY(_){if(!_)return null;return x2()[_]||null}function y2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function j$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=w8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=$$(j),Q=BY(Y),q=T2(j,Q);o4={theme:j,tint:Z},k2=Q;let G=document.documentElement;G.dataset.theme=Q,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=Q;let V=q;if(j==="default"&&Z)V=S2(q,Z,Q);if(j==="default"&&!Z)UY();else WY(V,Q);if(LY(V.bgPrimary,Q),FY(),$.persist!==!1)if(N1(_$,j),Z)N1(R8,Z);else N1(R8,"")}function y8(){if($$(o4.theme).mode!=="auto")return;j$(o4,{persist:!1})}function R2(){if(typeof window>"u")return()=>{};let _=y2(),$=HY(_),j=$?w8($.theme||"default"):w8(J_(_$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=J_(R8);return Y?Y.trim():null})();if(j$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!t6){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",y8);else if(Y.addListener)Y.addListener(y8);return t6=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",y8);else if(Y.removeListener)Y.removeListener(y8);t6=!1}}return()=>{}}function w2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||y2(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(zY($,j||"default",Z),j$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")N1(_$,j||"default"),N1(R8,Z||"")}function v2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return P2()}var v8=/#(\w+)/g,OY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),JY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),DY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),AY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},EY=new Set(["http:","https:","mailto:",""]);function Z$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function n4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!EY.has(Z.protocol))return null;return Z.href}catch{return null}}function f2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Q;while(Q=Y.nextNode())Z.push(Q);for(let q of Z){let G=q.tagName.toLowerCase();if(!JY.has(G)){let K=q.parentNode;if(!K)continue;while(q.firstChild)K.insertBefore(q.firstChild,q);K.removeChild(q);continue}let V=AY[G]||new Set;for(let K of Array.from(q.attributes)){let B=K.name.toLowerCase(),W=K.value;if(B.startsWith("on")){q.removeAttribute(K.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(V.has(B)||DY.has(B)){if(B==="href"){let U=n4(W);if(!U)q.removeAttribute(K.name);else if(q.setAttribute(K.name,U),G==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let U=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,A=n4(U,{allowDataImage:G==="img"});if(!A)q.removeAttribute(K.name);else q.setAttribute(K.name,A)}continue}q.removeAttribute(K.name)}}return j.body.innerHTML}function b2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function f8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=b2(j);if(Y===j)break;j=Y}return j}function MY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],Q=!1,q=[];for(let G of j){if(!Q&&G.trim().match(/^```mermaid\s*$/i)){Q=!0,q=[];continue}if(Q&&G.trim().match(/^```\s*$/)){let V=Z.length;Z.push(q.join(`
`)),Y.push(`@@MERMAID_BLOCK_${V}@@`),Q=!1,q=[];continue}if(Q)q.push(G);else Y.push(G)}if(Q)Y.push("```mermaid"),Y.push(...q);return{text:Y.join(`
`),blocks:Z}}function IY(_){if(!_)return _;return f8(_,5)}function kY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function CY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function PY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),Q=$[Y]??"",q=IY(Q);return`<div class="mermaid-container" data-mermaid="${kY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function g2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var TY={span:new Set(["title","class","lang","dir"])};function SY(_,$){let j=TY[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Q;while(Q=Y.exec($)){let q=(Q[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let G=Q[2]??Q[3]??Q[4]??"";Z.push(` ${q}="${Z$(G)}"`)}return Z.join("")}function m2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),Q=Y?Z.slice(1).trim():Z,G=Q.endsWith("/")?Q.slice(0,-1).trim():Q,[V=""]=G.split(/\s+/,1),K=V.toLowerCase();if(!K||!OY.has(K))return $;if(K==="br")return Y?"":"<br>";if(Y)return`</${K}>`;let B=G.slice(V.length).trim(),W=SY(K,B);return`<${K}${W}>`})}function u2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function h2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Q)=>Q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let Q=Z(Y.nodeValue);if(Q!==Y.nodeValue)Y.nodeValue=Q}return $.body.innerHTML}function xY(_){if(!window.katex)return _;let $=(q)=>b2(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let G=[],V=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let B=G.length;return G.push(K),`@@CODE_BLOCK_${B}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let B=G.length;return G.push(K),`@@CODE_INLINE_${B}@@`}),{html:V,blocks:G}},Z=(q,G)=>{if(!G.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,K)=>{let B=Number(K);return G[B]??""})},Y=j(_),Q=Y.html;return Q=Q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,G,V)=>{try{let K=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${G}${K}`}catch(K){return`<span class="math-error" title="${Z$(K.message)}">${q}</span>`}}),Q=Q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,G,V)=>{if(/\s$/.test(V))return q;try{let K=katex.renderToString($(V),{displayMode:!1,throwOnError:!1});return`${G}${K}`}catch(K){return`${G}<span class="math-error" title="${Z$(K.message)}">$${V}$</span>`}}),Z(Q,Y.blocks)}function yY(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let Q of Z){let q=Q.nodeValue;if(!q)continue;if(v8.lastIndex=0,!v8.test(q))continue;v8.lastIndex=0;let G=Q.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let V=q.split(v8);if(V.length<=1)continue;let K=$.createDocumentFragment();V.forEach((B,W)=>{if(W%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",B),U.textContent=`#${B}`,K.appendChild(U)}else K.appendChild($.createTextNode(B))}),Q.parentNode?.replaceChild(K,Q)}return $.body.innerHTML}function RY(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let Q of j){if(!Y&&Q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&Q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(Q)}return Z.join(`
`)}function wY(_){let $=RY(_||""),{text:j,blocks:Z}=MY($),Y=f8(j,2),q=g2(Y).replace(/</g,"&lt;");return{safeHtml:m2(q),mermaidBlocks:Z}}function D_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=wY(_),Q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Q=u2(Q),Q=h2(Q),Q=xY(Q),Q=yY(Q),Q=PY(Q,Y),Q=f2(Q,j),Q}function c5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=f8($,2),Y=g2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=m2(Y),q=window.marked?marked.parse(Q):Q.replace(/\n/g,"<br>");return q=u2(q),q=h2(q),q=f2(q),q}function vY(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,Q)=>{let q=Y.trim().split(/\s+/).map((V)=>{let[K,B]=V.split(",").map(Number);return{x:K,y:B}});if(q.length<3)return`<polyline${Z}points="${Y}"${Q}/>`;let G=[`M ${q[0].x},${q[0].y}`];for(let V=1;V<q.length-1;V++){let K=q[V-1],B=q[V],W=q[V+1],U=B.x-K.x,A=B.y-K.y,C=W.x-B.x,T=W.y-B.y,M=Math.sqrt(U*U+A*A),J=Math.sqrt(C*C+T*T),k=Math.min($,M/2,J/2);if(k<0.5){G.push(`L ${B.x},${B.y}`);continue}let P=B.x-U/M*k,i=B.y-A/M*k,l=B.x+C/J*k,$0=B.y+T/J*k,v=U*T-A*C>0?1:0;G.push(`L ${P},${i}`),G.push(`A ${k},${k} 0 0 ${v} ${l},${$0}`)}return G.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${G.join(" ")}"${Q}/>`})}async function U4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=v2()==="dark"?j["tokyo-night"]:j["github-light"],Q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Q)try{let G=q.dataset.mermaid,V=CY(G||""),K=f8(V,2),B=await $(K,{...Y,transparent:!0});B=vY(B),q.innerHTML=B,q.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${G.message}`,q.innerHTML="",q.appendChild(V),q.removeAttribute("data-mermaid")}}function p2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function c2(_){return String(_||"").trim()||"web:default"}function l2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function d2(_){if(!_)return!1;return _.status!=="running"}function i2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function o2({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=S(null),Q=S(null),q=_?.thinking?c5(_.thinking):"",G=_?.answer?D_(_.answer,null,{sanitize:!1}):"";if(p(()=>{if(Y.current&&q)U4(Y.current).catch(()=>{})},[q]),p(()=>{if(Q.current&&G)U4(Q.current).catch(()=>{})},[G]),!_)return null;let V=_.status==="running",K=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),W=l2(_),U=d2(_),A=!V&&K,C=V?"Thinking…":_.status==="error"?"Error":"Done";return L`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${C}</span>
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
    `}function fY(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function bY(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Q==="svg")return j?{kind:Q,svg:j}:{kind:Q};return Z?{kind:Q,html:Z}:{kind:Q}}function P4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function y0(_){return typeof _==="string"&&_.trim()?_.trim():null}function s2(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var r2="__PICLAW_WIDGET_HOST__:";function n2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Y$(_,$){if(!_||_.type!=="generated_widget")return null;let j=fY(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:s2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function a2(_){if(!_||typeof _!=="object")return null;let $=bY(_),j=y0(_?.widget_id)||y0(_?.widgetId)||y0(_?.tool_call_id)||y0(_?.toolCallId),Z=y0(_?.tool_call_id)||y0(_?.toolCallId),Y=y0(_?.turn_id)||y0(_?.turnId),Q=y0(_?.title)||y0(_?.name)||"Generated widget",q=y0(_?.subtitle)||"",G=y0(_?.description)||q,V=y0(_?.status),K=V==="loading"||V==="streaming"||V==="final"||V==="error"?V:"streaming";return{title:Q,subtitle:q,description:G,originPostId:P4(_?.origin_post_id)??P4(_?.originPostId),originChatJid:y0(_?.origin_chat_jid)||y0(_?.originChatJid)||y0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:s2(_?.capabilities,!0),source:"live",status:K,turnId:Y,toolCallId:Z,width:P4(_?.width),height:P4(_?.height),error:y0(_?.error)}}function t2(_){return Y$(_,null)!==null}function r1(_){let $=y0(_?.toolCallId)||y0(_?.tool_call_id);if($)return $;let j=y0(_?.widgetId)||y0(_?.widget_id);if(j)return j;let Z=P4(_?.originPostId)??P4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function e2(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Q)=>typeof Q==="string"&&Q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function _7(_){return e2(_)?"allow-downloads allow-scripts":"allow-downloads"}function b8(_){return{title:y0(_?.title)||"Generated widget",widgetId:y0(_?.widgetId)||y0(_?.widget_id),toolCallId:y0(_?.toolCallId)||y0(_?.tool_call_id),turnId:y0(_?.turnId)||y0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:y0(_?.status)||"final"}}function g8(_){return{...b8(_),subtitle:y0(_?.subtitle)||"",description:y0(_?.description)||"",error:y0(_?.error)||null,width:P4(_?.width),height:P4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function m8(_){return`${r2}${JSON.stringify(g8(_))}`}function $7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=y0(_.text)||y0(_.content)||y0(_.message)||y0(_.prompt)||y0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=y0(j.text)||y0(j.content)||y0(j.message)||y0(j.prompt)||y0(j.value);if(Z)return Z}return null}function j7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Z7(_){let $=y0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return y0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function gY(_){let $=b8(_);return`<script>
(function () {
  const meta = ${n2($)};
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

  const windowNamePrefix = ${n2(r2)};
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
</script>`}function Y7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Y:Z;if(!q)return"";let G=e2(_),V=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",G?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,B=G?gY(_):"";return`<!doctype html>
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
</html>`}function Q7({widget:_,onClose:$,onWidgetEvent:j}){let Z=S(null),Y=S(!1),Q=C0(()=>Y7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(p(()=>{if(!_)return;let J=(k)=>{if(k.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),p(()=>{Y.current=!1},[Q]),p(()=>{if(!_)return;let J=Z.current;if(!J)return;let k=(Z0)=>{let v=m8(_),R=Z0==="widget.init"?b8(_):g8(_);try{J.name=v}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:Z0,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:R},"*")}catch{}},P=()=>{k("widget.init"),k("widget.update")},i=()=>{Y.current=!0,P()};J.addEventListener("load",i);let $0=[0,40,120,300,800].map((Z0)=>setTimeout(P,Z0));return()=>{J.removeEventListener("load",i),$0.forEach((Z0)=>clearTimeout(Z0))}},[Q,_?.widgetId,_?.toolCallId,_?.turnId]),p(()=>{if(!_)return;let J=Z.current;if(!J?.contentWindow)return;let k=m8(_),P=g8(_);try{J.name=k}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:P},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),p(()=>{if(!_)return;let J=(k)=>{let P=k?.data;if(!P||P.__piclawGeneratedWidget!==!0)return;let i=Z.current,l=r1(_),$0=r1({widgetId:P.widgetId,toolCallId:P.toolCallId});if($0&&l&&$0!==l)return;if(!$0&&i?.contentWindow&&k.source!==i.contentWindow)return;j?.(P,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let G=(_?.artifact||{}).kind||_?.kind||"html",V=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",B=_?.source==="live"?"live":"timeline",W=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=B==="live"?`Live widget • ${W.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",A=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",C=!Q,T=Z7(_),M=_7(_);return L`
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
                    ${C?L`<div class="floating-widget-empty">${T}</div>`:L`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${V}
                                name=${m8(_)}
                                sandbox=${M}
                                referrerpolicy="no-referrer"
                                srcdoc=${Q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var q7="PiClaw";function Q$(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),Q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Y.charCodeAt(0)%Q.length,G=Q[q],V=Z.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",B=K?K:null,W=j||V==="PiClaw".toLowerCase()||V==="pi";return{letter:Y,color:G,image:B||(W?"/static/icon-192.png":null)}}function G7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function K7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function X7(_){if(!_)return null;if(typeof document<"u"){let Q=document.documentElement,q=Q?.dataset?.colorTheme||"",G=Q?.dataset?.tint||"",V=getComputedStyle(Q).getPropertyValue("--accent-color")?.trim();if(V&&(G||q&&q!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Q=0;Q<j.length;Q+=1)Z=(Z*31+j.charCodeAt(Q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}var mY=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function q$({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:Q,extensionPanels:q=[],pendingPanelActions:G=new Set,onExtensionPanelAction:V,turnId:K,steerQueued:B,onPanelToggle:W,showCorePanels:U=!0,showExtensionPanels:A=!0}){let M=(e)=>{if(!e)return{text:"",totalLines:0,fullText:""};if(typeof e==="string"){let w0=e,x0=w0?w0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:w0,totalLines:x0,fullText:w0}}let W0=e.text||"",H0=e.fullText||e.full_text||W0,N0=Number.isFinite(e.totalLines)?e.totalLines:H0?H0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W0,totalLines:N0,fullText:H0}},J=160,k=(e)=>String(e||"").replace(/<\/?internal>/gi,""),P=(e)=>{if(!e)return 1;return Math.max(1,Math.ceil(e.length/160))},i=(e,W0,H0)=>{let N0=(e||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!N0)return{text:"",omitted:0,totalLines:Number.isFinite(H0)?H0:0,visibleLines:0};let w0=N0.split(`
`),x0=w0.length>W0?w0.slice(0,W0).join(`
`):N0,v0=Number.isFinite(H0)?H0:w0.reduce((i0,D0)=>i0+P(D0),0),k0=x0?x0.split(`
`).reduce((i0,D0)=>i0+P(D0),0):0,f0=Math.max(v0-k0,0);return{text:x0,omitted:f0,totalLines:v0,visibleLines:k0}},l=M(j),$0=M(Z),Z0=M($),v=Boolean(l.text)||l.totalLines>0,R=Boolean($0.text)||$0.totalLines>0,H=Boolean(Z0.fullText?.trim()||Z0.text?.trim()),y=Boolean(_||H||v||R||Y||Q),c=Array.isArray(q)&&q.length>0;if((!U||!y)&&(!A||!c))return null;let[G0,d]=h(new Set),[Y0,j0]=h(null),[K0,V0]=h(()=>Date.now()),B0=(e)=>d((W0)=>{let H0=new Set(W0),N0=!H0.has(e);if(N0)H0.add(e);else H0.delete(e);if(typeof W==="function")W(e,N0);return H0});p(()=>{d(new Set),j0(null)},[K]);let O0=W4(_);p(()=>{if(!O0)return;V0(Date.now());let e=setInterval(()=>V0(Date.now()),1000);return()=>clearInterval(e)},[O0,_?.started_at,_?.startedAt]);let E0=_?.turn_id||K,M0=X7(E0),n0=B?"turn-dot turn-dot-queued":"turn-dot",R0=(e)=>e,P0=Boolean(_?.last_activity||_?.lastActivity),s0=(e)=>e==="warning"?"#f59e0b":e==="error"?"var(--danger-color)":e==="success"?"var(--success-color)":M0,r0=Q?.kind||"info",h0=s0(r0),t0=s0(_?.kind||(O0?"warning":"info")),p0="",Z1=_?.title,z0=_?.status;if(_?.type==="plan")p0=Z1?`Planning: ${Z1}`:"Planning...";else if(_?.type==="tool_call")p0=Z1?`Running: ${Z1}`:"Running tool...";else if(_?.type==="tool_status")p0=Z1?`${Z1}: ${z0||"Working..."}`:z0||"Working...";else if(_?.type==="error")p0=Z1||"Agent error";else p0=Z1||z0||"Working...";if(P0)p0="Last activity just now";let l0=({panelTitle:e,text:W0,fullText:H0,totalLines:N0,maxLines:w0,titleClass:x0,panelKey:v0})=>{let k0=G0.has(v0),f0=H0||W0||"",i0=v0==="thought"||v0==="draft"?k(f0):f0,D0=typeof w0==="number",g0=k0&&D0,J0=D0?i(i0,w0,N0):{text:i0||"",omitted:0,totalLines:Number.isFinite(N0)?N0:0};if(!i0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let q0=`agent-thinking-body${D0?" agent-thinking-body-collapsible":""}`,w=D0?`--agent-thinking-collapsed-lines: ${w0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${k0?"true":"false"}
                data-collapsible=${D0?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
            >
                <div class="agent-thinking-title ${x0||""}">
                    ${M0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${e}
                    ${g0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${e} panel`}
                            onClick=${()=>B0(v0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${q0}
                    style=${w}
                    dangerouslySetInnerHTML=${{__html:c5(i0)}}
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
        `},Y1=Y?.tool_call?.title,G1=Y1?`Awaiting approval: ${Y1}`:"Awaiting approval",X_=O0?x8(_,K0):null,A1=(e,W0,H0=null)=>{let N0=S8(e);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${W0?`--turn-color: ${W0};`:""}
                title=${e?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${W0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${N0}</span>
                    ${H0&&L`<span class="agent-status-elapsed">${H0}</span>`}
                </div>
                ${e.detail&&L`<div class="agent-thinking-body">${e.detail}</div>`}
            </div>
        `},$1=(e,W0,H0,N0,w0,x0,v0,k0=8,f0=8)=>{let i0=Math.max(w0-N0,0.000000001),D0=Math.max(W0-k0*2,1),g0=Math.max(H0-f0*2,1),J0=Math.max(v0-x0,1),q0=v0===x0?W0/2:k0+(e.run-x0)/J0*D0,w=f0+(g0-(e.value-N0)/i0*g0);return{x:q0,y:w}},c1=(e,W0,H0,N0,w0,x0,v0,k0=8,f0=8)=>{if(!Array.isArray(e)||e.length===0)return"";return e.map((i0,D0)=>{let{x:g0,y:J0}=$1(i0,W0,H0,N0,w0,x0,v0,k0,f0);return`${D0===0?"M":"L"} ${g0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},C1=(e,W0="")=>{if(!Number.isFinite(e))return"—";return`${Math.abs(e)>=100?e.toFixed(0):e.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${W0}`},K1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],c0=(e,W0)=>{let H0=K1;if(!Array.isArray(H0)||H0.length===0)return"var(--accent-color)";if(H0.length===1||!Number.isFinite(W0)||W0<=1)return H0[0];let w0=Math.max(0,Math.min(Number.isFinite(e)?e:0,W0-1))/Math.max(1,W0-1)*(H0.length-1),x0=Math.floor(w0),v0=Math.min(H0.length-1,x0+1),k0=w0-x0,f0=H0[x0],i0=H0[v0];if(!i0||x0===v0||k0<=0.001)return f0;if(k0>=0.999)return i0;let D0=Math.round((1-k0)*1000)/10,g0=Math.round(k0*1000)/10;return`color-mix(in oklab, ${f0} ${D0}%, ${i0} ${g0}%)`},y1=(e,W0="autoresearch")=>{let H0=Array.isArray(e)?e.map((q0)=>({...q0,points:Array.isArray(q0?.points)?q0.points.filter((w)=>Number.isFinite(w?.value)&&Number.isFinite(w?.run)):[]})).filter((q0)=>q0.points.length>0):[],N0=H0.map((q0,w)=>({...q0,color:c0(w,H0.length)}));if(N0.length===0)return null;let w0=320,x0=120,v0=N0.flatMap((q0)=>q0.points),k0=v0.map((q0)=>q0.value),f0=v0.map((q0)=>q0.run),i0=Math.min(...k0),D0=Math.max(...k0),g0=Math.min(...f0),J0=Math.max(...f0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${N0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${w0} ${x0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${N0.map((q0)=>{let w=q0?.key||q0?.label||"series",_0=Y0?.panelKey===W0&&Y0?.seriesKey===w;return L`
                                <g key=${w}>
                                    <path
                                        class=${`agent-series-chart-line${_0?" is-hovered":""}`}
                                        d=${c1(q0.points,w0,x0,i0,D0,g0,J0)}
                                        style=${`--agent-series-color: ${q0.color};`}
                                        onMouseEnter=${()=>j0({panelKey:W0,seriesKey:w})}
                                        onMouseLeave=${()=>j0((F0)=>F0?.panelKey===W0&&F0?.seriesKey===w?null:F0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${N0.flatMap((q0)=>{let w=typeof q0?.unit==="string"?q0.unit:"",_0=q0?.key||q0?.label||"series";return q0.points.map((F0,I0)=>{let m0=$1(F0,w0,x0,i0,D0,g0,J0);return L`
                                    <button
                                        key=${`${_0}-point-${I0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${q0.color}; left:${m0.x/w0*100}%; top:${m0.y/x0*100}%;`}
                                        onMouseEnter=${()=>j0({panelKey:W0,seriesKey:_0,run:F0.run,value:F0.value,unit:w})}
                                        onMouseLeave=${()=>j0((X1)=>X1?.panelKey===W0?null:X1)}
                                        onFocus=${()=>j0({panelKey:W0,seriesKey:_0,run:F0.run,value:F0.value,unit:w})}
                                        onBlur=${()=>j0((X1)=>X1?.panelKey===W0?null:X1)}
                                        aria-label=${`${q0?.label||"Series"} ${C1(F0.value,w)} at run ${F0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${N0.map((q0)=>{let w=q0.points[q0.points.length-1]?.value,_0=typeof q0?.unit==="string"?q0.unit:"",F0=q0?.key||q0?.label||"series",I0=Y0?.panelKey===W0&&Y0?.seriesKey===F0?Y0:null,m0=I0&&Number.isFinite(I0.value)?I0.value:w,X1=I0&&typeof I0.unit==="string"?I0.unit:_0,E1=I0&&Number.isFinite(I0.run)?I0.run:null;return L`
                            <div key=${`${F0}-legend`} class=${`agent-series-legend-item${I0?" is-hovered":""}`} style=${`--agent-series-color: ${q0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${q0.color};`}></span>
                                <span class="agent-series-legend-label">${q0?.label||"Series"}</span>
                                ${E1!==null&&L`<span class="agent-series-legend-run">run ${E1}</span>`}
                                <span class="agent-series-legend-value">${C1(m0,X1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},P1=(e)=>{if(!e)return null;let W0=typeof e?.key==="string"?e.key:`panel-${Math.random()}`,H0=G0.has(W0),N0=e?.title||"Extension status",w0=e?.collapsed_text||"",x0=String(e?.state||"").replace(/[-_]+/g," ").replace(/^./,(_0)=>_0.toUpperCase()),v0=s0(e?.state==="completed"?"success":e?.state==="failed"?"error":e?.state==="stopped"?"warning":"info"),k0=typeof e?.detail_markdown==="string"?e.detail_markdown.trim():"",f0=typeof e?.last_run_text==="string"?e.last_run_text.trim():"",i0=typeof e?.tmux_command==="string"?e.tmux_command.trim():"",D0=Array.isArray(e?.series)?e.series:[],g0=Array.isArray(e?.actions)?e.actions:[],J0=Boolean(k0||i0),q0=Boolean(k0||D0.length>0||i0),w=[N0,w0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${H0?"true":"false"}
                style=${v0?`--turn-color: ${v0};`:""}
                title=${!H0?w||N0:""}
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
                                    ${g0.map((_0)=>{let F0=`${W0}:${_0?.key||""}`,I0=G?.has?.(F0);return L`
                                            <button
                                                key=${F0}
                                                class=${`agent-thinking-action-btn${_0?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>V?.(e,_0)}
                                                disabled=${Boolean(I0)}
                                            >
                                                ${I0?"Working…":_0?.label||"Run"}
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
                                        dangerouslySetInnerHTML=${{__html:c5(k0)}}
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
                                                onClick=${()=>V?.(e,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${mY}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${D0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${y1(D0,W0)}
                                    ${f0&&L`<div class="agent-series-chart-note">${f0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${U&&Q&&A1(Q,h0)}
            ${A&&Array.isArray(q)&&q.map((e)=>P1(e))}
            ${U&&_?.type==="intent"&&A1(_,t0,X_)}
            ${U&&Y&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    <span class=${n0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${G1}</span>
                </div>
            `}
            ${U&&v&&l0({panelTitle:R0("Planning"),text:l.text,fullText:l.fullText,totalLines:l.totalLines,panelKey:"plan"})}
            ${U&&R&&l0({panelTitle:R0("Thoughts"),text:$0.text,fullText:$0.fullText,totalLines:$0.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&H&&l0({panelTitle:R0("Draft"),text:Z0.text,fullText:Z0.fullText,totalLines:Z0.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${P0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    ${M0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!P0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${p0}</span>
                </div>
            `}
        </div>
    `}function N7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:Q}=_,q=Z?.title||"Agent Request",G=Z?.kind||"other",V=Z?.rawInput||{},K=V.command||V.commands&&V.commands[0]||null,B=V.diff||null,W=V.fileName||V.path||null,U=Z?.description||V.description||V.explanation||null,C=(Array.isArray(Z?.locations)?Z.locations:[]).map((P)=>P?.path).filter((P)=>Boolean(P)),T=Array.from(new Set([W,...C].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let M=async(P)=>{try{await D8(j,P,Q||null),$()}catch(i){console.error("Failed to respond to agent request:",i)}},J=async()=>{try{await w6(q,`Auto-approved: ${q}`),await D8(j,"approved",Q||null),$()}catch(P){console.error("Failed to add to whitelist:",P)}},k=Y&&Y.length>0;return L`
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
                ${(U||K||B||T.length>0)&&L`
                    <div class="agent-request-body">
                        ${U&&L`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${T.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${T.map((P,i)=>L`<li key=${i}>${P}</li>`)}
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
                    ${k?Y.map((P)=>L`
                            <button 
                                key=${P.optionId||P.id||String(P)}
                                class="agent-request-btn ${P.kind==="allow_once"||P.kind==="allow_always"?"primary":""}"
                                onClick=${()=>M(P.optionId||P.id||P)}
                            >
                                ${P.name||P.label||P.optionId||P.id||String(P)}
                            </button>
                        `):L`
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
    `}function V7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,Q=86400000;if(Z<Q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*Q){let V=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${K}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${G}`}function l5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function b_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function s4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var uY=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),hY=new Set(["text/markdown"]),pY=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),cY=new Set(["application/vnd.jgraph.mxfile"]);function d5(_){return typeof _==="string"?_.trim().toLowerCase():""}function lY(_){let $=d5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function dY(_){let $=d5(_);return!!$&&$.endsWith(".pdf")}function iY(_){let $=d5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function i5(_,$){let j=d5(_);if(lY($)||cY.has(j))return"drawio";if(dY($)||j==="application/pdf")return"pdf";if(iY($)||pY.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(uY.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function B7(_){let $=d5(_);return hY.has($)}function W7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function oY(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function nY(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),Q=Number(j[3]);if(![Z,Y,Q].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:Y,b:Q}}function U7(_){return oY(_)||nY(_)}function u8(_){let $=(Q)=>{let q=Q/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function sY(_,$){let j=Math.max(u8(_),u8($)),Z=Math.min(u8(_),u8($));return(j+0.05)/(Z+0.05)}function rY(_,$,j="#ffffff"){let Z=U7(_);if(!Z)return j;let Y=j,Q=-1;for(let q of $){let G=U7(q);if(!G)continue;let V=sY(Z,G);if(V>Q)Y=q,Q=V}return Y}function G$(){let _=getComputedStyle(document.documentElement),$=(C,T)=>{for(let M of C){let J=_.getPropertyValue(M).trim();if(J)return J}return T},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),V=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),A=rY(G,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:Q,bgEmphasis:q,accent:G,good:V,warning:K,attention:B,border:W,fontFamily:U,buttonTextColor:A}}function L7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:Q,warning:q,attention:G,border:V,fontFamily:K}=G$();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:V},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var aY=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),F7=!1,h8=null,z7=!1;function K$(_){_.querySelector(".adaptive-card-notice")?.remove()}function tY(_,$,j="error"){K$(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function eY(_,$=(j)=>D_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function _Q(_=($)=>D_($,null)){return($,j)=>{try{let Z=eY($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function $Q(_){if(z7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=_Q(),z7=!0}async function jQ(){if(F7)return;if(h8)return h8;return h8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{F7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),h8}function ZQ(){return globalThis.AdaptiveCards}function YQ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function QQ(_){return aY.has(_)}function N$(_){if(!Array.isArray(_))return[];return _.filter(YQ)}function qQ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function X$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>X$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${X$(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function GQ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return X$($);return typeof $==="string"?$:String($)}function KQ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((G)=>Z(G));if(!Y||typeof Y!=="object")return Y;let q={...Y};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=GQ(q.type,j[q.id],q);for(let[G,V]of Object.entries(q))if(Array.isArray(V)||V&&typeof V==="object")q[G]=Z(V);return q};return Z(_)}function XQ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function NQ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function VQ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=NQ(_.completed_at||j?.submitted_at),Q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Q}}async function H7(_,$,j){if(!QQ($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await jQ()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=ZQ();$Q(Z);let Y=new Z.AdaptiveCard,Q=G$();Y.hostConfig=new Z.HostConfig(L7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:KQ($.payload,q);Y.parse(G),Y.onExecuteAction=(B)=>{let W=qQ(B);if(j?.onAction)K$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let A=U instanceof Error?U.message:String(U||"Action failed.");tY(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let V=Y.render();if(!V)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Q.buttonTextColor);let K=VQ($);if(K){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=K.label,B.appendChild(W),K.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=K.detail,B.appendChild(U)}_.appendChild(B)}if(K$(_),_.appendChild(V),K)XQ(V);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function o5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>o5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${o5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function O7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:o5(j)})).filter(($)=>$.value)}function BQ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function V$(_){if(!Array.isArray(_))return[];return _.filter(BQ)}function J7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=o5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=O7(j).map(({key:Q,value:q})=>`${Q}: ${q}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function D7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=O7(_.data),Z=j.length>0?j.slice(0,2).map(({key:Q,value:q})=>`${Q}: ${q}`).join(", "):o5(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function WQ(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?b_($):null},{label:"Added",value:_?.created_at?s4(_.created_at):null}].filter((Z)=>Z.value)}function UQ(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let Q=f_(_);return`/office-viewer/?url=${encodeURIComponent(Q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function A7({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=C0(()=>i5($?.content_type,Z),[$?.content_type,Z]),Q=W7(Y),q=C0(()=>B7($?.content_type),[$?.content_type]),[G,V]=h(Y==="text"),[K,B]=h(""),[W,U]=h(null),A=S(null),C=C0(()=>WQ($),[$]),T=C0(()=>UQ(_,Z,Y),[_,Z,Y]),M=C0(()=>{if(!q||!K)return"";return D_(K)},[q,K]);return p(()=>{let J=(k)=>{if(k.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),p(()=>{if(!A.current||!M)return;U4(A.current);return},[M]),p(()=>{let J=!1;async function k(){if(Y!=="text"){V(!1),U(null);return}V(!0),U(null);try{let P=await g6(_);if(!J)B(P)}catch{if(!J)U("Failed to load text preview.")}finally{if(!J)V(!1)}}return k(),()=>{J=!0}},[_,Y]),L`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Q}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${T&&L`
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
                            href=${f_(_)}
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
                        <img class="attachment-preview-image" src=${f_(_)} alt=${Z} />
                    `}
                    ${!G&&!W&&(Y==="pdf"||Y==="office"||Y==="drawio")&&T&&L`
                        <iframe class="attachment-preview-frame" src=${T} title=${Z}></iframe>
                    `}
                    ${!G&&!W&&Y==="drawio"&&L`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!G&&!W&&Y==="text"&&q&&L`
                        <div
                            ref=${A}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:M}}
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
                    ${C.map((J)=>L`
                        <div class="attachment-preview-meta-item" key=${J.label}>
                            <span class="attachment-preview-meta-label">${J.label}</span>
                            <span class="attachment-preview-meta-value">${J.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function E7({src:_,onClose:$}){return p(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function LQ({mediaId:_,onPreview:$}){let[j,Z]=h(null);if(p(()=>{W5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",Q=j.metadata?.size,q=Q?b_(Q):"",V=i5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <a href=${f_(_)} download=${Y} class="file-attachment-main">
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
    `}function FQ({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=h(null);p(()=>{if(!Number.isFinite(j))return;W5(j).then(Y).catch(()=>{});return},[j]);let Q=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?f_(j):null,V=i5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Q}>
            ${q?L`
                    <a href=${q} download=${Q} class="attachment-pill-main" onClick=${(K)=>K.stopPropagation()}>
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
    `}function p8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?s4(Z):null;return L`
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
    `}function zQ({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?b_(_.size):"",Y=_.mime_type||"",Q=JQ(Y),q=n4(_.uri);return L`
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
    `}function HQ({block:_}){let[$,j]=h(!1),Z=_.uri||"Embedded resource",Y=_.text||"",Q=Boolean(_.data),q=_.mime_type||"";return L`
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
    `}function OQ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=Y$(_,$),Y=t2(_),Q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",G=Z?.description||_.description||_.subtitle||"",V=_.open_label||"Open widget",K=(B)=>{if(B.preventDefault(),B.stopPropagation(),!Z)return;j?.(Z)};return L`
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
    `}function JQ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function DQ({preview:_}){let $=n4(_.url),j=n4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return L`
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
    `}function AQ(_,$){return typeof _==="string"?_:""}var EQ=1800,MQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,IQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,kQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function CQ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function PQ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Q)=>Q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(Q,q)=>{let G=q||"idle";if(Q.dataset.copyState=G,G==="success")Q.innerHTML=IQ,Q.setAttribute("aria-label","Copied"),Q.setAttribute("title","Copied"),Q.classList.add("is-success"),Q.classList.remove("is-error");else if(G==="error")Q.innerHTML=kQ,Q.setAttribute("aria-label","Copy failed"),Q.setAttribute("title","Copy failed"),Q.classList.add("is-error"),Q.classList.remove("is-success");else Q.innerHTML=MQ,Q.setAttribute("aria-label","Copy code"),Q.setAttribute("title","Copy code"),Q.classList.remove("is-success","is-error")};return $.forEach((Q)=>{let q=document.createElement("div");q.className="post-code-block",Q.parentNode?.insertBefore(q,Q),q.appendChild(Q);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Y(G,"idle"),q.appendChild(G);let V=async(K)=>{K.preventDefault(),K.stopPropagation();let W=Q.querySelector("code")?.textContent||"",U=await CQ(W);Y(G,U?"success":"error");let A=j.get(G);if(A)clearTimeout(A);let C=setTimeout(()=>{Y(G,"idle"),j.delete(G)},EQ);j.set(G,C)};G.addEventListener("click",V),Z.push(()=>{G.removeEventListener("click",V);let K=j.get(G);if(K)clearTimeout(K);if(q.parentNode)q.parentNode.insertBefore(Q,q),q.remove()})}),()=>{Z.forEach((Q)=>Q())}}function TQ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K))Y.push(K.replace(/^\s*-\s+/,"").trim());else if(!K.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),G=j.slice(Q),V=[...q,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:Y}}function SQ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K)){let W=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)Y.push(W[1])}else if(!K.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),G=j.slice(Q),V=[...q,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:Y}}function xQ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let K=0;K<j.length;K+=1){let B=j[K].trim();if((B==="Images:"||B==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){Z=K;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let K=j[Q];if(/^\s*-\s+/.test(K)){let B=K.replace(/^\s*-\s+/,"").trim(),W=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let U=W[1],A=(W[2]||"").trim()||U;Y.push({id:U,label:A,raw:B})}else Y.push({id:null,label:B,raw:B})}else if(!K.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),G=j.slice(Q),V=[...q,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:Y}}function yQ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function RQ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(yQ).sort((B,W)=>W.length-B.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),Q=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),G=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),V=[],K;while(K=G.nextNode())V.push(K);for(let B of V){let W=B.nodeValue;if(!W||!Y.test(W)){Y.lastIndex=0;continue}Y.lastIndex=0;let U=B.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let A=W.split(Y).filter((T)=>T!=="");if(A.length===0)continue;let C=q.createDocumentFragment();for(let T of A)if(Q.test(T)){let M=q.createElement("mark");M.className="search-highlight-term",M.textContent=T,C.appendChild(M)}else C.appendChild(q.createTextNode(T));B.parentNode.replaceChild(C,B)}return q.body.innerHTML}function M7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:Q,agentAvatarUrl:q,userName:G,userAvatarUrl:V,userAvatarBackground:K,onDelete:B,isThreadReply:W,isThreadPrev:U,isThreadNext:A,isRemoving:C,highlightQuery:T,onFileRef:M,onOpenWidget:J}){let[k,P]=h(null),i=S(null),l=_.data,$0=l.type==="agent_response",Z0=G||"You",v=$0?Q||q7:Z0,R=$0?Q$(Q,q,!0):Q$(Z0,V),H=typeof K==="string"?K.trim().toLowerCase():"",y=!$0&&R.image&&(H==="clear"||H==="transparent"),c=$0&&Boolean(R.image),G0=`background-color: ${y||c?"transparent":R.color}`,d=l.content_meta,Y0=Boolean(d?.truncated),j0=Boolean(d?.preview),K0=Y0&&!j0,V0=Y0?{originalLength:Number.isFinite(d?.original_length)?d.original_length:l.content?l.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,B0=l.content_blocks||[],O0=l.media_ids||[],E0=AQ(l.content,l.link_previews),{content:M0,fileRefs:n0}=TQ(E0),{content:R0,messageRefs:P0}=SQ(M0),{content:s0,attachments:r0}=xQ(R0);E0=s0;let h0=N$(B0),t0=V$(B0),p0=h0.length===1&&typeof h0[0]?.fallback_text==="string"?h0[0].fallback_text.trim():"",Z1=t0.length===1?J7(t0[0]).trim():"",z0=Boolean(p0)&&E0?.trim()===p0||Boolean(Z1)&&E0?.trim()===Z1,l0=Boolean(E0)&&!K0&&!z0,Y1=typeof T==="string"?T.trim():"",G1=C0(()=>{if(!E0||z0)return"";let w=D_(E0,j);return Y1?RQ(w,Y1):w},[E0,z0,Y1]),X_=(w,_0)=>{w.stopPropagation(),P(f_(_0))},[A1,$1]=h(null),c1=(w)=>{$1(w)},C1=(w)=>{w.stopPropagation(),B?.(_)},K1=(w,_0)=>{let F0=new Set;if(!w||_0.length===0)return{content:w,usedIds:F0};return{content:w.replace(/attachment:([^\s)"']+)/g,(m0,X1,E1,_1)=>{let l1=X1.replace(/^\/+/,""),L_=_0.find((F_)=>F_.name&&F_.name.toLowerCase()===l1.toLowerCase()&&!F0.has(F_.id))||_0.find((F_)=>!F0.has(F_.id));if(!L_)return m0;if(F0.add(L_.id),_1.slice(Math.max(0,E1-2),E1)==="](")return`/media/${L_.id}`;return L_.name||"attachment"}),usedIds:F0}},c0=[],y1=[],P1=[],e=[],W0=[],H0=[],N0=[],w0=0;if(B0.length>0)B0.forEach((w)=>{if(w?.type==="text"&&w.annotations)N0.push(w.annotations);if(w?.type==="generated_widget")H0.push(w);else if(w?.type==="resource_link")e.push(w);else if(w?.type==="resource")W0.push(w);else if(w?.type==="file"){let _0=O0[w0++];if(_0)y1.push(_0),P1.push({id:_0,name:w?.name||w?.filename||w?.title})}else if(w?.type==="image"||!w?.type){let _0=O0[w0++];if(_0){let F0=typeof w?.mime_type==="string"?w.mime_type:void 0;c0.push({id:_0,annotations:w?.annotations,mimeType:F0}),P1.push({id:_0,name:w?.name||w?.filename||w?.title})}}});else if(O0.length>0){let w=r0.length>0;O0.forEach((_0,F0)=>{let I0=r0[F0]||null;if(P1.push({id:_0,name:I0?.label||null}),w)y1.push(_0);else c0.push({id:_0,annotations:null})})}if(r0.length>0)r0.forEach((w)=>{if(!w?.id)return;let _0=P1.find((F0)=>String(F0.id)===String(w.id));if(_0&&!_0.name)_0.name=w.label});let{content:x0,usedIds:v0}=K1(E0,P1);E0=x0;let k0=c0.filter(({id:w})=>!v0.has(w)),f0=y1.filter((w)=>!v0.has(w)),i0=r0.length>0?r0.map((w,_0)=>({id:w.id||`attachment-${_0+1}`,label:w.label||`attachment-${_0+1}`})):P1.map((w,_0)=>({id:w.id,label:w.name||`attachment-${_0+1}`})),D0=C0(()=>N$(B0),[B0]),g0=C0(()=>V$(B0),[B0]),J0=C0(()=>{return D0.map((w)=>`${w.card_id}:${w.state}`).join("|")},[D0]);p(()=>{if(!i.current)return;return U4(i.current),PQ(i.current)},[G1]);let q0=S(null);return p(()=>{if(!q0.current||D0.length===0)return;let w=q0.current;w.innerHTML="";for(let _0 of D0){let F0=document.createElement("div");w.appendChild(F0),H7(F0,_0,{onAction:async(I0)=>{if(I0.type==="Action.OpenUrl"){let m0=n4(I0.url||"");if(!m0)throw Error("Invalid URL");window.open(m0,"_blank","noopener,noreferrer");return}if(I0.type==="Action.Submit"){await R6({post_id:_.id,thread_id:l.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:_0.card_id,action:{type:I0.type,title:I0.title||"",data:I0.data}});return}console.warn("[post] unsupported adaptive card action:",I0.type,I0)}}).catch((I0)=>{console.error("[post] adaptive card render error:",I0),F0.textContent=_0.fallback_text||"Card failed to render."})}},[J0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${$0?"agent-post":""} ${W?"thread-reply":""} ${U?"thread-prev":""} ${A?"thread-next":""} ${C?"removing":""}" onClick=${$}>
            <div class="post-avatar ${$0?"agent-avatar":""} ${R.image?"has-image":""}" style=${G0}>
                ${R.image?L`<img src=${R.image} alt=${v} />`:R.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${C1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${v}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(w)=>{if(w.preventDefault(),w.stopPropagation(),Z)Z(_.id)}}>${V7(_.timestamp)}</a>
                </div>
                ${K0&&V0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${l5(V0.originalLength)} chars
                            ${V0.maxLength?L` • Display limit: ${l5(V0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${j0&&V0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${l5(V0.maxLength)} of ${l5(V0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||P0.length>0||i0.length>0)&&L`
                    <div class="post-file-refs">
                        ${P0.map((w)=>{let _0=(F0)=>{if(F0.preventDefault(),F0.stopPropagation(),Y)Y(w,_.chat_jid||null);else{let I0=document.getElementById("post-"+w);if(I0)I0.scrollIntoView({behavior:"smooth",block:"center"}),I0.classList.add("post-highlight"),setTimeout(()=>I0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${w}`} class="post-msg-pill-link" onClick=${_0}>
                                    <${o_}
                                        prefix="post"
                                        label=${"msg:"+w}
                                        title=${"Message "+w}
                                        icon="message"
                                        onClick=${_0}
                                    />
                                </a>
                            `})}
                        ${n0.map((w)=>{let _0=w.split("/").pop()||w;return L`
                                <${o_}
                                    prefix="post"
                                    label=${_0}
                                    title=${w}
                                    onClick=${()=>M?.(w)}
                                />
                            `})}
                        ${i0.map((w)=>L`
                            <${FQ}
                                key=${w.id}
                                attachment=${w}
                                onPreview=${c1}
                            />
                        `)}
                    </div>
                `}
                ${l0&&L`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:G1}}
                        onClick=${(w)=>{if(w.target.classList.contains("hashtag")){w.preventDefault(),w.stopPropagation();let _0=w.target.dataset.hashtag;if(_0)j?.(_0)}else if(w.target.tagName==="IMG")w.preventDefault(),w.stopPropagation(),P(w.target.src)}}
                    />
                `}
                ${D0.length>0&&L`
                    <div ref=${q0} class="post-adaptive-cards" />
                `}
                ${g0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${g0.map((w,_0)=>{let F0=D7(w),I0=`${w.card_id}-${_0}`;return L`
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
                                        Submitted ${s4(F0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${H0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${H0.map((w,_0)=>L`
                            <${OQ}
                                key=${w.widget_id||w.id||`${_.id}-widget-${_0}`}
                                block=${w}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${N0.length>0&&L`
                    ${N0.map((w,_0)=>L`
                        <${p8} key=${_0} annotations=${w} />
                    `)}
                `}
                ${k0.length>0&&L`
                    <div class="media-preview">
                        ${k0.map(({id:w,mimeType:_0})=>{let I0=typeof _0==="string"&&_0.toLowerCase().startsWith("image/svg")?f_(w):b6(w);return L`
                                <img 
                                    key=${w} 
                                    src=${I0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(m0)=>X_(m0,w)}
                                />
                            `})}
                    </div>
                `}
                ${k0.length>0&&L`
                    ${k0.map(({annotations:w},_0)=>L`
                        ${w&&L`<${p8} key=${_0} annotations=${w} />`}
                    `)}
                `}
                ${f0.length>0&&L`
                    <div class="file-attachments">
                        ${f0.map((w)=>L`
                            <${LQ} key=${w} mediaId=${w} onPreview=${c1} />
                        `)}
                    </div>
                `}
                ${e.length>0&&L`
                    <div class="resource-links">
                        ${e.map((w,_0)=>L`
                            <div key=${_0}>
                                <${zQ} block=${w} />
                                <${p8} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${W0.length>0&&L`
                    <div class="resource-embeds">
                        ${W0.map((w,_0)=>L`
                            <div key=${_0}>
                                <${HQ} block=${w} />
                                <${p8} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${l.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${l.link_previews.map((w,_0)=>L`
                            <${DQ} key=${_0} preview=${w} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${k&&L`<${E7} src=${k} onClose=${()=>P(null)} />`}
        ${A1&&L`
            <${A7}
                mediaId=${A1.mediaId}
                info=${A1.info}
                onClose=${()=>$1(null)}
            />
        `}
    `}function I7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:Q,onScrollToMessage:q,onFileRef:G,onOpenWidget:V,emptyMessage:K,timelineRef:B,agents:W,user:U,onDeletePost:A,reverse:C=!0,removingPostIds:T,searchQuery:M}){let[J,k]=h(!1),P=S(null),i=typeof IntersectionObserver<"u",l=x(async()=>{if(!j||!$||J)return;k(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{k(!1)}},[$,J,j]),$0=x((d)=>{let{scrollTop:Y0,scrollHeight:j0,clientHeight:K0}=d.target,V0=C?j0-K0-Y0:Y0,B0=Math.max(300,K0);if(V0<B0)l()},[C,l]);p(()=>{if(!i)return;let d=P.current,Y0=B?.current;if(!d||!Y0)return;let j0=300,K0=new IntersectionObserver((V0)=>{for(let B0 of V0){if(!B0.isIntersecting)continue;l()}},{root:Y0,rootMargin:`${j0}px 0px ${j0}px 0px`,threshold:0});return K0.observe(d),()=>K0.disconnect()},[i,$,j,B,l]);let Z0=S(l);if(Z0.current=l,p(()=>{if(i)return;if(!B?.current)return;let{scrollTop:d,scrollHeight:Y0,clientHeight:j0}=B.current,K0=C?Y0-j0-d:d,V0=Math.max(300,j0);if(K0<V0)Z0.current?.()},[i,_,$,C,B]),p(()=>{if(!B?.current)return;if(!$||J)return;let{scrollTop:d,scrollHeight:Y0,clientHeight:j0}=B.current,K0=C?Y0-j0-d:d,V0=Math.max(300,j0);if(Y0<=j0+1||K0<V0)Z0.current?.()},[_,$,J,C,B]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${B}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let v=_.slice().sort((d,Y0)=>d.id-Y0.id),R=(d)=>{let Y0=d?.data?.thread_id;if(Y0===null||Y0===void 0||Y0==="")return null;let j0=Number(Y0);return Number.isFinite(j0)?j0:null},H=new Map;for(let d=0;d<v.length;d+=1){let Y0=v[d],j0=Number(Y0?.id),K0=R(Y0);if(K0!==null){let V0=H.get(K0)||{anchorIndex:-1,replyIndexes:[]};V0.replyIndexes.push(d),H.set(K0,V0)}else if(Number.isFinite(j0)){let V0=H.get(j0)||{anchorIndex:-1,replyIndexes:[]};V0.anchorIndex=d,H.set(j0,V0)}}let y=new Map;for(let[d,Y0]of H.entries()){let j0=new Set;if(Y0.anchorIndex>=0)j0.add(Y0.anchorIndex);for(let K0 of Y0.replyIndexes)j0.add(K0);y.set(d,Array.from(j0).sort((K0,V0)=>K0-V0))}let c=v.map((d,Y0)=>{let j0=R(d);if(j0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let K0=y.get(j0);if(!K0||K0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let V0=K0.indexOf(Y0);if(V0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:V0>0,hasThreadNext:V0<K0.length-1}}),G0=L`<div class="timeline-sentinel" ref=${P}></div>`;return L`
        <div class="timeline ${C?"reverse":"normal"}" ref=${B} onScroll=${$0}>
            <div class="timeline-content">
                ${C?G0:null}
                ${v.map((d,Y0)=>{let j0=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),K0=T?.has?.(d.id),V0=c[Y0]||{};return L`
                    <${M7}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${j0}
                        isThreadPrev=${V0.hasThreadPrev}
                        isThreadNext=${V0.hasThreadNext}
                        isRemoving=${K0}
                        highlightQuery=${M}
                        agentName=${G7(d.data?.agent_id,W||{})}
                        agentAvatarUrl=${K7(d.data?.agent_id,W||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(d)}
                        onHashtagClick=${Y}
                        onMessageRef=${Q}
                        onScrollToMessage=${q}
                        onFileRef=${G}
                        onOpenWidget=${V}
                        onDelete=${A}
                    />
                `})}
                ${C?null:G0}
            </div>
        </div>
    `}class k7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let Q=Y===!0?0:typeof Y==="number"?Y:0;if(Q>j)j=Q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var o0=new k7;var c8=null,B$=null;function wQ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function C7(){if(B$)return Promise.resolve(B$);if(!c8)c8=import(wQ()).then((_)=>{return B$=_,_}).catch((_)=>{throw c8=null,_});return c8}class P7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await C7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var W$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new P7(_,$)}};function U$(){C7().catch(()=>{})}var r4="piclaw://terminal";var vQ={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},fQ={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},l8=null,L$=null;function bQ(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function gQ(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,Q)=>{let q=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!bQ(q))return $(Y,Q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,Q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function mQ(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!l8)l8=gQ(()=>Promise.resolve($.init?.())).catch((j)=>{throw l8=null,j});return await l8,$}async function uQ(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!L$)L$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await L$}async function hQ(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function pQ(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function cQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function L4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function lQ(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function T7(){let _=cQ(),$=_?fQ:vQ,j=L4("--bg-primary",_?"#000000":"#ffffff"),Z=L4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=L4("--text-secondary",_?"#71767b":"#536471"),Q=L4("--accent-color","#1d9bf0"),q=L4("--danger-color",_?"#ff7b72":"#cf222e"),G=L4("--success-color",_?"#7ee787":"#1a7f37"),V=L4("--bg-hover",_?"#1d1f23":"#e8ebed"),K=L4("--border-color",_?"#2f3336":"#eff3f4"),B=L4("--accent-soft-strong",lQ(Q,_?"47":"33"));return{background:j,foreground:Z,cursor:Q,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:V,red:q,green:G,yellow:$.yellow,blue:Q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:K}}class F${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,Q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(Q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await mQ();if(await uQ(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:T7()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=T7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await hQ();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(pQ($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var z$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new F$(_,$)}},H$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new F$(_,$)}};function F4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function d8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),Q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Q||Y>1||q)}function S7(_,$={}){if(F4($))return null;if(d8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:dQ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function O$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function J$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function D$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function A$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function a4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function x7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function y7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let Q=j?.params&&typeof j.params==="object"?j.params:null;if(Q)for(let[q,G]of Object.entries(Q)){let V=String(q||"").trim();if(!V)continue;if(G===null||G===void 0||G==="")Z.searchParams.delete(V);else Z.searchParams.set(V,String(G))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function dQ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function iQ(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function R7(_,$={}){if(F4($))return null;if(d8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:iQ(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function i8(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function oQ(_){try{return JSON.parse(_)}catch{return null}}function nQ(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function sQ(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class E${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=sQ($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||oQ;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=nQ(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var n5=()=>{throw Error("Operation requires compiling with --exportRuntime")},rQ=typeof BigUint64Array<"u",s5=Symbol();var aQ=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function w7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return aQ.decode(Z)}catch{let Y="",Q=0;while(j-Q>1024)Y+=String.fromCharCode(...Z.subarray(Q,Q+=1024));return Y+String.fromCharCode(...Z.subarray(Q))}}function v7(_){let $={};function j(Y,Q){if(!Y)return"<yet unknown>";return w7(Y.buffer,Q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Q,q,G,V){let K=$.memory||Z.memory;throw Error(`abort: ${j(K,Q)} at ${j(K,q)}:${G}:${V}`)},Z.trace=Z.trace||function(Q,q,...G){let V=$.memory||Z.memory;console.log(`trace: ${j(V,Q)}${q?" ":""}${G.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function f7(_,$){let j=$.exports,Z=j.memory,Y=j.table,Q=j.__new||n5,q=j.__pin||n5,G=j.__unpin||n5,V=j.__collect||n5,K=j.__rtti_base,B=K?(H)=>H[K>>>2]:n5;_.__new=Q,_.__pin=q,_.__unpin=G,_.__collect=V;function W(H){let y=new Uint32Array(Z.buffer);if((H>>>=0)>=B(y))throw Error(`invalid id: ${H}`);return y[(K+4>>>2)+H]}function U(H){let y=W(H);if(!(y&7))throw Error(`not an array: ${H}, flags=${y}`);return y}function A(H){return 31-Math.clz32(H>>>6&31)}function C(H){if(H==null)return 0;let y=H.length,c=Q(y<<1,2),G0=new Uint16Array(Z.buffer);for(let d=0,Y0=c>>>1;d<y;++d)G0[Y0+d]=H.charCodeAt(d);return c}_.__newString=C;function T(H){if(H==null)return 0;let y=new Uint8Array(H),c=Q(y.length,1);return new Uint8Array(Z.buffer).set(y,c),c}_.__newArrayBuffer=T;function M(H){if(!H)return null;let y=Z.buffer;if(new Uint32Array(y)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return w7(y,H)}_.__getString=M;function J(H,y,c){let G0=Z.buffer;if(c)switch(H){case 2:return new Float32Array(G0);case 3:return new Float64Array(G0)}else switch(H){case 0:return new(y?Int8Array:Uint8Array)(G0);case 1:return new(y?Int16Array:Uint16Array)(G0);case 2:return new(y?Int32Array:Uint32Array)(G0);case 3:return new(y?BigInt64Array:BigUint64Array)(G0)}throw Error(`unsupported align: ${H}`)}function k(H,y=0){let c=y,G0=U(H),d=A(G0),Y0=typeof c!=="number",j0=Y0?c.length:c,K0=Q(j0<<d,G0&4?H:1),V0;if(G0&4)V0=K0;else{q(K0);let B0=Q(G0&2?16:12,H);G(K0);let O0=new Uint32Array(Z.buffer);if(O0[B0+0>>>2]=K0,O0[B0+4>>>2]=K0,O0[B0+8>>>2]=j0<<d,G0&2)O0[B0+12>>>2]=j0;V0=B0}if(Y0){let B0=J(d,G0&2048,G0&4096),O0=K0>>>d;if(G0&16384)for(let E0=0;E0<j0;++E0)B0[O0+E0]=c[E0];else B0.set(c,O0)}return V0}_.__newArray=k;function P(H){let y=new Uint32Array(Z.buffer),c=y[H+-8>>>2],G0=U(c),d=A(G0),Y0=G0&4?H:y[H+4>>>2],j0=G0&2?y[H+12>>>2]:y[Y0+-4>>>2]>>>d;return J(d,G0&2048,G0&4096).subarray(Y0>>>=d,Y0+j0)}_.__getArrayView=P;function i(H){let y=P(H),c=y.length,G0=Array(c);for(let d=0;d<c;d++)G0[d]=y[d];return G0}_.__getArray=i;function l(H){let y=Z.buffer,c=new Uint32Array(y)[H+-4>>>2];return y.slice(H,H+c)}_.__getArrayBuffer=l;function $0(H){if(!Y)throw Error("Operation requires compiling with --exportTable");let y=new Uint32Array(Z.buffer)[H>>>2];return Y.get(y)}_.__getFunction=$0;function Z0(H,y,c){return new H(v(H,y,c))}function v(H,y,c){let G0=Z.buffer,d=new Uint32Array(G0);return new H(G0,d[c+4>>>2],d[c+8>>>2]>>>y)}function R(H,y,c){_[`__get${y}`]=Z0.bind(null,H,c),_[`__get${y}View`]=v.bind(null,H,c)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{R(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),rQ)[BigUint64Array,BigInt64Array].forEach((H)=>{R(H,H.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,eQ(j,_)}function b7(_){return typeof Response<"u"&&_ instanceof Response}function tQ(_){return _ instanceof WebAssembly.Module}async function M$(_,$={}){if(b7(_=await _))return o8(_,$);let j=tQ(_)?_:await WebAssembly.compile(_),Z=v7($),Y=await WebAssembly.instantiate(j,$),Q=f7(Z,Y);return{module:j,instance:Y,exports:Q}}async function o8(_,$={}){if(!WebAssembly.instantiateStreaming)return M$(b7(_=await _)?_.arrayBuffer():_,$);let j=v7($),Z=await WebAssembly.instantiateStreaming(_,$),Y=f7(j,Z.instance);return{...Z,exports:Y}}function eQ(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],Q=Z.split("."),q=$;while(Q.length>1){let K=Q.shift();if(!Object.hasOwn(q,K))q[K]={};q=q[K]}let G=Q[0],V=G.indexOf("#");if(V>=0){let K=G.substring(0,V),B=q[K];if(typeof B>"u"||!B.prototype){let W=function(...U){return W.wrap(W.prototype.constructor(0,...U))};if(W.prototype={valueOf(){return this[s5]}},W.wrap=function(U){return Object.create(W.prototype,{[s5]:{value:U,writable:!1}})},B)Object.getOwnPropertyNames(B).forEach((U)=>Object.defineProperty(W,U,Object.getOwnPropertyDescriptor(B,U)));q[K]=W}if(G=G.substring(V+1),q=q[K].prototype,/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4))){let W=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(q,G,{get(){return W(this[s5])},set(A){U(this[s5],A)},enumerable:!0})}}else if(G==="constructor")(q[G]=function(...W){return j(W.length),Y(...W)}).original=Y;else(q[G]=function(...W){return j(W.length),Y(this[s5],...W)}).original=Y}else if(/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4)))Object.defineProperty(q,G,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(q[G]=(...K)=>{return j(K.length),Y(...K)}).original=Y;else q[G]=Y}return $}var $q="/static/js/vendor/remote-display-decoder.wasm",n8=null;function g7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function m7(){if(n8)return n8;return n8=(async()=>{try{let Z=function(Y,Q,q,G,V,K,B){let W=g7(Q),U=j.__pin(j.__newArrayBuffer(W));try{return j[Y](U,q,G,V,K,B.bitsPerPixel,B.bigEndian?1:0,B.trueColor?1:0,B.redMax,B.greenMax,B.blueMax,B.redShift,B.greenShift,B.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch($q,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof o8==="function"?await o8(_,{}):await M$(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,Q){j.initFramebuffer(Y,Q)},getFramebuffer(){let Y=j.getFramebufferPtr(),Q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,Q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,Q,q,G,V,K){return Z("processRawRect",Y,Q,q,G,V,K)},processCopyRect(Y,Q,q,G,V,K){return j.processCopyRect(Y,Q,q,G,V,K)},processRreRect(Y,Q,q,G,V,K){return Z("processRreRect",Y,Q,q,G,V,K)},processHextileRect(Y,Q,q,G,V,K){return Z("processHextileRect",Y,Q,q,G,V,K)},processZrleTileData(Y,Q,q,G,V,K){return Z("processZrleTileData",Y,Q,q,G,V,K)},decodeRawRectToRgba(Y,Q,q,G){let V=g7(Y),K=j.__pin(j.__newArrayBuffer(V));try{let B=j.__pin(j.decodeRawRectToRgba(K,Q,q,G.bitsPerPixel,G.bigEndian?1:0,G.trueColor?1:0,G.redMax,G.greenMax,G.blueMax,G.redShift,G.greenShift,G.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(B))}finally{j.__unpin(B)}}finally{j.__unpin(K);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),n8}function H5(_,$,j){return Math.max($,Math.min(j,_))}function s8(_,$,j){let Z=new Uint8Array(6),Y=H5(Math.floor(Number($||0)),0,65535),Q=H5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=H5(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=Q>>8&255,Z[5]=Q&255,Z}function k$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function u7(_,$,j,Z,Y){let Q=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(Y||0))),G=Math.max(1,Number(j?.width||0)),V=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/G,B=(Number($||0)-Number(j?.top||0))/V;return{x:H5(Math.floor(K*Q),0,Math.max(0,Q-1)),y:H5(Math.floor(B*q),0,Math.max(0,q-1))}}function h7(_,$,j,Z=0){let Y=Number(_)<0?8:16,Q=H5(Number(Z||0)|Y,0,255);return[s8(Q,$,j),s8(Number(Z||0),$,j)]}function p7(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function r5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function c7(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),Q=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),G=Math.max(1,Math.floor(Number(Z||0))),V=Math.min(Y/q,Q/G);if(!Number.isFinite(V)||V<=0)return 1;return Math.max(0.01,V)}var I$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)I$[`F${_}`]=65470+(_-1);function C$(_){let $=[_?.key,_?.code];for(let Q of $)if(Q&&Object.prototype.hasOwnProperty.call(I$,Q))return I$[Q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var b1=Uint8Array,A_=Uint16Array,f$=Int32Array,r8=new b1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),a8=new b1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),y$=new b1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o7=function(_,$){var j=new A_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new f$(j[30]);for(var Z=1;Z<30;++Z)for(var Q=j[Z];Q<j[Z+1];++Q)Y[Q]=Q-j[Z]<<5|Z;return{b:j,r:Y}},n7=o7(r8,2),s7=n7.b,R$=n7.r;s7[28]=258,R$[258]=28;var r7=o7(a8,0),jq=r7.b,l7=r7.r,w$=new A_(32768);for(d0=0;d0<32768;++d0)Z4=(d0&43690)>>1|(d0&21845)<<1,Z4=(Z4&52428)>>2|(Z4&13107)<<2,Z4=(Z4&61680)>>4|(Z4&3855)<<4,w$[d0]=((Z4&65280)>>8|(Z4&255)<<8)>>1;var Z4,d0,Y4=function(_,$,j){var Z=_.length,Y=0,Q=new A_($);for(;Y<Z;++Y)if(_[Y])++Q[_[Y]-1];var q=new A_($);for(Y=1;Y<$;++Y)q[Y]=q[Y-1]+Q[Y-1]<<1;var G;if(j){G=new A_(1<<$);var V=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var K=Y<<4|_[Y],B=$-_[Y],W=q[_[Y]-1]++<<B;for(var U=W|(1<<B)-1;W<=U;++W)G[w$[W]>>V]=K}}else{G=new A_(Z);for(Y=0;Y<Z;++Y)if(_[Y])G[Y]=w$[q[_[Y]-1]++]>>15-_[Y]}return G},T4=new b1(288);for(d0=0;d0<144;++d0)T4[d0]=8;var d0;for(d0=144;d0<256;++d0)T4[d0]=9;var d0;for(d0=256;d0<280;++d0)T4[d0]=7;var d0;for(d0=280;d0<288;++d0)T4[d0]=8;var d0,_8=new b1(32);for(d0=0;d0<32;++d0)_8[d0]=5;var d0,Zq=Y4(T4,9,0),Yq=Y4(T4,9,1),Qq=Y4(_8,5,0),qq=Y4(_8,5,1),P$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},n_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},T$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},b$=function(_){return(_+7)/8|0},e5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new b1(_.subarray($,j))};var Gq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U_=function(_,$,j){var Z=Error($||Gq[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,U_);if(!j)throw Z;return Z},Kq=function(_,$,j,Z){var Y=_.length,Q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new b1(0);var q=!j,G=q||$.i!=2,V=$.i;if(q)j=new b1(Y*3);var K=function(Z1){var z0=j.length;if(Z1>z0){var l0=new b1(Math.max(z0*2,Z1));l0.set(j),j=l0}},B=$.f||0,W=$.p||0,U=$.b||0,A=$.l,C=$.d,T=$.m,M=$.n,J=Y*8;do{if(!A){B=n_(_,W,1);var k=n_(_,W+1,3);if(W+=3,!k){var P=b$(W)+4,i=_[P-4]|_[P-3]<<8,l=P+i;if(l>Y){if(V)U_(0);break}if(G)K(U+i);j.set(_.subarray(P,l),U),$.b=U+=i,$.p=W=l*8,$.f=B;continue}else if(k==1)A=Yq,C=qq,T=9,M=5;else if(k==2){var $0=n_(_,W,31)+257,Z0=n_(_,W+10,15)+4,v=$0+n_(_,W+5,31)+1;W+=14;var R=new b1(v),H=new b1(19);for(var y=0;y<Z0;++y)H[y$[y]]=n_(_,W+y*3,7);W+=Z0*3;var c=P$(H),G0=(1<<c)-1,d=Y4(H,c,1);for(var y=0;y<v;){var Y0=d[n_(_,W,G0)];W+=Y0&15;var P=Y0>>4;if(P<16)R[y++]=P;else{var j0=0,K0=0;if(P==16)K0=3+n_(_,W,3),W+=2,j0=R[y-1];else if(P==17)K0=3+n_(_,W,7),W+=3;else if(P==18)K0=11+n_(_,W,127),W+=7;while(K0--)R[y++]=j0}}var V0=R.subarray(0,$0),B0=R.subarray($0);T=P$(V0),M=P$(B0),A=Y4(V0,T,1),C=Y4(B0,M,1)}else U_(1);if(W>J){if(V)U_(0);break}}if(G)K(U+131072);var O0=(1<<T)-1,E0=(1<<M)-1,M0=W;for(;;M0=W){var j0=A[T$(_,W)&O0],n0=j0>>4;if(W+=j0&15,W>J){if(V)U_(0);break}if(!j0)U_(2);if(n0<256)j[U++]=n0;else if(n0==256){M0=W,A=null;break}else{var R0=n0-254;if(n0>264){var y=n0-257,P0=r8[y];R0=n_(_,W,(1<<P0)-1)+s7[y],W+=P0}var s0=C[T$(_,W)&E0],r0=s0>>4;if(!s0)U_(3);W+=s0&15;var B0=jq[r0];if(r0>3){var P0=a8[r0];B0+=T$(_,W)&(1<<P0)-1,W+=P0}if(W>J){if(V)U_(0);break}if(G)K(U+131072);var h0=U+R0;if(U<B0){var t0=Q-B0,p0=Math.min(B0,h0);if(t0+U<0)U_(3);for(;U<p0;++U)j[U]=Z[t0+U]}for(;U<h0;++U)j[U]=j[U-B0]}}if($.l=A,$.p=M0,$.b=U,$.f=B,A)B=1,$.m=T,$.d=C,$.n=M}while(!B);return U!=j.length&&q?e5(j,0,U):j.subarray(0,U)},z4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},a5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},S$=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,Q=j.slice();if(!Y)return{t:t7,l:0};if(Y==1){var q=new b1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(l,$0){return l.f-$0.f}),j.push({s:-1,f:25001});var G=j[0],V=j[1],K=0,B=1,W=2;j[0]={s:-1,f:G.f+V.f,l:G,r:V};while(B!=Y-1)G=j[j[K].f<j[W].f?K++:W++],V=j[K!=B&&j[K].f<j[W].f?K++:W++],j[B++]={s:-1,f:G.f+V.f,l:G,r:V};var U=Q[0].s;for(var Z=1;Z<Y;++Z)if(Q[Z].s>U)U=Q[Z].s;var A=new A_(U+1),C=v$(j[B-1],A,0);if(C>$){var Z=0,T=0,M=C-$,J=1<<M;Q.sort(function($0,Z0){return A[Z0.s]-A[$0.s]||$0.f-Z0.f});for(;Z<Y;++Z){var k=Q[Z].s;if(A[k]>$)T+=J-(1<<C-A[k]),A[k]=$;else break}T>>=M;while(T>0){var P=Q[Z].s;if(A[P]<$)T-=1<<$-A[P]++-1;else++Z}for(;Z>=0&&T;--Z){var i=Q[Z].s;if(A[i]==$)--A[i],++T}C=$}return{t:new b1(A),l:C}},v$=function(_,$,j){return _.s==-1?Math.max(v$(_.l,$,j+1),v$(_.r,$,j+1)):$[_.s]=j},d7=function(_){var $=_.length;while($&&!_[--$]);var j=new A_(++$),Z=0,Y=_[0],Q=1,q=function(V){j[Z++]=V};for(var G=1;G<=$;++G)if(_[G]==Y&&G!=$)++Q;else{if(!Y&&Q>2){for(;Q>138;Q-=138)q(32754);if(Q>2)q(Q>10?Q-11<<5|28690:Q-3<<5|12305),Q=0}else if(Q>3){q(Y),--Q;for(;Q>6;Q-=6)q(8304);if(Q>2)q(Q-3<<5|8208),Q=0}while(Q--)q(Y);Q=1,Y=_[G]}return{c:j.subarray(0,Z),n:$}},t5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},a7=function(_,$,j){var Z=j.length,Y=b$($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var Q=0;Q<Z;++Q)_[Y+Q+4]=j[Q];return(Y+4+Z)*8},i7=function(_,$,j,Z,Y,Q,q,G,V,K,B){z4($,B++,j),++Y[256];var W=S$(Y,15),U=W.t,A=W.l,C=S$(Q,15),T=C.t,M=C.l,J=d7(U),k=J.c,P=J.n,i=d7(T),l=i.c,$0=i.n,Z0=new A_(19);for(var v=0;v<k.length;++v)++Z0[k[v]&31];for(var v=0;v<l.length;++v)++Z0[l[v]&31];var R=S$(Z0,7),H=R.t,y=R.l,c=19;for(;c>4&&!H[y$[c-1]];--c);var G0=K+5<<3,d=t5(Y,T4)+t5(Q,_8)+q,Y0=t5(Y,U)+t5(Q,T)+q+14+3*c+t5(Z0,H)+2*Z0[16]+3*Z0[17]+7*Z0[18];if(V>=0&&G0<=d&&G0<=Y0)return a7($,B,_.subarray(V,V+K));var j0,K0,V0,B0;if(z4($,B,1+(Y0<d)),B+=2,Y0<d){j0=Y4(U,A,0),K0=U,V0=Y4(T,M,0),B0=T;var O0=Y4(H,y,0);z4($,B,P-257),z4($,B+5,$0-1),z4($,B+10,c-4),B+=14;for(var v=0;v<c;++v)z4($,B+3*v,H[y$[v]]);B+=3*c;var E0=[k,l];for(var M0=0;M0<2;++M0){var n0=E0[M0];for(var v=0;v<n0.length;++v){var R0=n0[v]&31;if(z4($,B,O0[R0]),B+=H[R0],R0>15)z4($,B,n0[v]>>5&127),B+=n0[v]>>12}}}else j0=Zq,K0=T4,V0=Qq,B0=_8;for(var v=0;v<G;++v){var P0=Z[v];if(P0>255){var R0=P0>>18&31;if(a5($,B,j0[R0+257]),B+=K0[R0+257],R0>7)z4($,B,P0>>23&31),B+=r8[R0];var s0=P0&31;if(a5($,B,V0[s0]),B+=B0[s0],s0>3)a5($,B,P0>>5&8191),B+=a8[s0]}else a5($,B,j0[P0]),B+=K0[P0]}return a5($,B,j0[256]),B+K0[256]},Xq=new f$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),t7=new b1(0),Nq=function(_,$,j,Z,Y,Q){var q=Q.z||_.length,G=new b1(Z+q+5*(1+Math.ceil(q/7000))+Y),V=G.subarray(Z,G.length-Y),K=Q.l,B=(Q.r||0)&7;if($){if(B)V[0]=Q.r>>3;var W=Xq[$-1],U=W>>13,A=W&8191,C=(1<<j)-1,T=Q.p||new A_(32768),M=Q.h||new A_(C+1),J=Math.ceil(j/3),k=2*J,P=function(Y1){return(_[Y1]^_[Y1+1]<<J^_[Y1+2]<<k)&C},i=new f$(25000),l=new A_(288),$0=new A_(32),Z0=0,v=0,R=Q.i||0,H=0,y=Q.w||0,c=0;for(;R+2<q;++R){var G0=P(R),d=R&32767,Y0=M[G0];if(T[d]=Y0,M[G0]=d,y<=R){var j0=q-R;if((Z0>7000||H>24576)&&(j0>423||!K)){B=i7(_,V,0,i,l,$0,v,H,c,R-c,B),H=Z0=v=0,c=R;for(var K0=0;K0<286;++K0)l[K0]=0;for(var K0=0;K0<30;++K0)$0[K0]=0}var V0=2,B0=0,O0=A,E0=d-Y0&32767;if(j0>2&&G0==P(R-E0)){var M0=Math.min(U,j0)-1,n0=Math.min(32767,R),R0=Math.min(258,j0);while(E0<=n0&&--O0&&d!=Y0){if(_[R+V0]==_[R+V0-E0]){var P0=0;for(;P0<R0&&_[R+P0]==_[R+P0-E0];++P0);if(P0>V0){if(V0=P0,B0=E0,P0>M0)break;var s0=Math.min(E0,P0-2),r0=0;for(var K0=0;K0<s0;++K0){var h0=R-E0+K0&32767,t0=T[h0],p0=h0-t0&32767;if(p0>r0)r0=p0,Y0=h0}}}d=Y0,Y0=T[d],E0+=d-Y0&32767}}if(B0){i[H++]=268435456|R$[V0]<<18|l7[B0];var Z1=R$[V0]&31,z0=l7[B0]&31;v+=r8[Z1]+a8[z0],++l[257+Z1],++$0[z0],y=R+V0,++Z0}else i[H++]=_[R],++l[_[R]]}}for(R=Math.max(R,y);R<q;++R)i[H++]=_[R],++l[_[R]];if(B=i7(_,V,K,i,l,$0,v,H,c,R-c,B),!K)Q.r=B&7|V[B/8|0]<<3,B-=7,Q.h=M,Q.p=T,Q.i=R,Q.w=y}else{for(var R=Q.w||0;R<q+K;R+=65535){var l0=R+65535;if(l0>=q)V[B/8|0]=K,l0=q;B=a7(V,B+1,_.subarray(R,l0))}Q.i=q}return e5(G,0,Z+b$(B)+Y)};var e7=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,Q=j.length|0;for(var q=0;q!=Q;){var G=Math.min(q+2655,Q);for(;q<G;++q)Y+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},Vq=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var Q=$.dictionary.subarray(-32768),q=new b1(Q.length+_.length);q.set(Q),q.set(_,Q.length),_=q,Y.w=Q.length}}return Nq(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var _9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var Bq=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=e7();Y.p($.dictionary),_9(_,2,Y.d())}},Wq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)U_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)U_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var x$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new b1(32768),this.p=new b1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)U_(5);if(this.d)U_(4);if(!this.p.length)this.p=$;else if($.length){var j=new b1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=Kq(this.p,this.s,this.o);this.ondata(e5(Z,j,this.s.b),this.d),this.o=e5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=e5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function $9(_,$){if(!$)$={};var j=e7();j.p(_);var Z=Vq(_,$,$.dictionary?6:2,4);return Bq(Z,$),_9(Z,Z.length-4,j.d()),Z}var j9=function(){function _($,j){x$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(x$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(Wq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)U_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}x$.prototype.c.call(this,j)},_}();var Uq=typeof TextDecoder<"u"&&new TextDecoder,Lq=0;try{Uq.decode(t7,{stream:!0}),Lq=1}catch(_){}var Fq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],zq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],Hq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],Oq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],Jq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],Dq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],Aq=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],Eq=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],Q9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;Q9[_]=$}function q9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function G9(_){let $=0n,j=q9(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function Mq(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function O5(_,$,j){let Z=0n;for(let Y of $){let Q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|Q}return Z}function Z9(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function Iq(_){let $=O5(G9(_),Jq,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let Q of Aq){j=Z9(j,Q),Z=Z9(Z,Q);let q=j<<28n|Z;Y.push(O5(q,Dq,56))}return Y}function kq(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),Q=(Y&32)>>4|Y&1,q=Y>>1&15;$=$<<4n|BigInt(Eq[j][Q][q])}return $}function Cq(_,$){let j=O5(_,Hq,32)^BigInt($),Z=kq(j);return O5(Z,Oq,32)}function Y9(_,$){let j=Iq($),Z=O5(G9(_),Fq,64),Y=Z>>32n&0xffffffffn,Q=Z&0xffffffffn;for(let G of j){let V=Q,K=(Y^Cq(Q,G))&0xffffffffn;Y=V,Q=K}let q=Q<<32n|Y;return Mq(O5(q,zq,64),8)}function Pq(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=Q9[Y]}return j}function K9(_,$){let j=q9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=Pq(_),Y=new Uint8Array(16);return Y.set(Y9(j.slice(0,8),Z),0),Y.set(Y9(j.slice(8,16),Z),8),Y}var s_="vnc";function Tq(_){return Number(_)}function Sq(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let Q=Tq(Y);if(!Number.isFinite(Q))continue;let q=Number(Q);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function A5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function xq(_,$){let j=A5(_),Z=A5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function yq(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let Q=A5(Y);j.set(Q,Z),Z+=Q.byteLength}return j}function Rq(){return(_)=>{let $=A5(_);try{let j=[],Z=new j9((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return yq(j)}catch(j){try{let Z=$9($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function wq(_){return new TextEncoder().encode(String(_||""))}function J5(_){return new TextDecoder().decode(A5(_))}function vq(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function fq(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function X9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function bq(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function gq(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let Q of $)Z.setInt32(Y,Number(Q||0),!1),Y+=4;return new Uint8Array(j)}function N9(_,$,j,Z=0,Y=0){let Q=new ArrayBuffer(10),q=new DataView(Q);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,Y,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Q)}function D5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function B9(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function mq(_,$,j,Z){let Y=Z||E5,Q=A5(_),q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),G=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Q.byteLength<G)throw Error(`Incomplete raw rectangle payload: expected ${G} byte(s), got ${Q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let V=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,B=0;for(let W=0;W<Math.max(0,$||0)*Math.max(0,j||0);W+=1){let U=B9(Q,K,q,Y.bigEndian),A=D5(U>>>Y.redShift&Y.redMax,Y.redMax),C=D5(U>>>Y.greenShift&Y.greenMax,Y.greenMax),T=D5(U>>>Y.blueShift&Y.blueMax,Y.blueMax);V[B]=A,V[B+1]=C,V[B+2]=T,V[B+3]=255,K+=q,B+=4}return V}function H4(_,$,j){let Z=j||E5,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let Q=B9(_,$,Y,Z.bigEndian);return{rgba:[D5(Q>>>Z.redShift&Z.redMax,Z.redMax),D5(Q>>>Z.greenShift&Z.greenMax,Z.greenMax),D5(Q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function S4(_,$,j,Z,Y,Q,q){if(!q)return;for(let G=0;G<Q;G+=1)for(let V=0;V<Y;V+=1){let K=((Z+G)*$+(j+V))*4;_[K]=q[0],_[K+1]=q[1],_[K+2]=q[2],_[K+3]=q[3]}}function W9(_,$,j,Z,Y,Q,q){for(let G=0;G<Q;G+=1){let V=G*Y*4,K=((Z+G)*$+j)*4;_.set(q.subarray(V,V+Y*4),K)}}function V9(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function uq(_,$,j,Z,Y,Q,q){let G=Y||E5,V=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let B=_.slice($+4,$+4+K),W;try{W=q(B)}catch{return{consumed:4+K,skipped:!0}}let U=0,A=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let C=0;C<Z;C+=64){let T=Math.min(64,Z-C);for(let M=0;M<j;M+=64){let J=Math.min(64,j-M);if(W.byteLength<U+1)return null;let k=W[U++],P=k&127,i=(k&128)!==0;if(!i&&P===0){let l=J*T*V;if(W.byteLength<U+l)return null;let $0=Q(W.slice(U,U+l),J,T,G);U+=l,W9(A,j,M,C,J,T,$0);continue}if(!i&&P===1){let l=H4(W,U,G);if(!l)return null;U+=l.bytesPerPixel,S4(A,j,M,C,J,T,l.rgba);continue}if(!i&&P>1&&P<=16){let l=[];for(let R=0;R<P;R+=1){let H=H4(W,U,G);if(!H)return null;U+=H.bytesPerPixel,l.push(H.rgba)}let $0=P<=2?1:P<=4?2:4,Z0=Math.ceil(J*$0/8),v=Z0*T;if(W.byteLength<U+v)return null;for(let R=0;R<T;R+=1){let H=U+R*Z0;for(let y=0;y<J;y+=1){let c=y*$0,G0=H+(c>>3),d=8-$0-(c&7),Y0=W[G0]>>d&(1<<$0)-1;S4(A,j,M+y,C+R,1,1,l[Y0])}}U+=v;continue}if(i&&P===0){let l=0,$0=0;while($0<T){let Z0=H4(W,U,G);if(!Z0)return null;U+=Z0.bytesPerPixel;let v=V9(W,U);if(!v)return null;U+=v.consumed;for(let R=0;R<v.runLength;R+=1)if(S4(A,j,M+l,C+$0,1,1,Z0.rgba),l+=1,l>=J){if(l=0,$0+=1,$0>=T)break}}continue}if(i&&P>0){let l=[];for(let v=0;v<P;v+=1){let R=H4(W,U,G);if(!R)return null;U+=R.bytesPerPixel,l.push(R.rgba)}let $0=0,Z0=0;while(Z0<T){if(W.byteLength<U+1)return null;let v=W[U++],R=v,H=1;if(v&128){R=v&127;let c=V9(W,U);if(!c)return null;U+=c.consumed,H=c.runLength}let y=l[R];if(!y)return null;for(let c=0;c<H;c+=1)if(S4(A,j,M+$0,C+Z0,1,1,y),$0+=1,$0>=J){if($0=0,Z0+=1,Z0>=T)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:A,decompressed:W}}function hq(_,$,j,Z,Y){let Q=Y||E5,q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let V=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+q+V*(q+8);if(_.byteLength<$+K)return null;let B=$+4,W=H4(_,B,Q);if(!W)return null;B+=W.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);S4(U,j,0,0,j,Z,W.rgba);for(let A=0;A<V;A+=1){let C=H4(_,B,Q);if(!C)return null;if(B+=C.bytesPerPixel,_.byteLength<B+8)return null;let T=new DataView(_.buffer,_.byteOffset+B,8),M=T.getUint16(0,!1),J=T.getUint16(2,!1),k=T.getUint16(4,!1),P=T.getUint16(6,!1);B+=8,S4(U,j,M,J,k,P,C.rgba)}return{consumed:B-$,rgba:U}}function pq(_,$,j,Z,Y,Q){let q=Y||E5,G=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),V=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),K=$,B=[0,0,0,255],W=[255,255,255,255];for(let U=0;U<Z;U+=16){let A=Math.min(16,Z-U);for(let C=0;C<j;C+=16){let T=Math.min(16,j-C);if(_.byteLength<K+1)return null;let M=_[K++];if(M&1){let J=T*A*G;if(_.byteLength<K+J)return null;let k=Q(_.slice(K,K+J),T,A,q);K+=J,W9(V,j,C,U,T,A,k);continue}if(M&2){let J=H4(_,K,q);if(!J)return null;B=J.rgba,K+=J.bytesPerPixel}if(S4(V,j,C,U,T,A,B),M&4){let J=H4(_,K,q);if(!J)return null;W=J.rgba,K+=J.bytesPerPixel}if(M&8){if(_.byteLength<K+1)return null;let J=_[K++];for(let k=0;k<J;k+=1){let P=W;if(M&16){let H=H4(_,K,q);if(!H)return null;P=H.rgba,K+=H.bytesPerPixel}if(_.byteLength<K+2)return null;let i=_[K++],l=_[K++],$0=i>>4,Z0=i&15,v=(l>>4)+1,R=(l&15)+1;S4(V,j,C+$0,U+Z0,v,R,P)}}}}return{consumed:K-$,rgba:V}}var E5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class t8{protocol=s_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:mq,this.pipeline=_.pipeline||null,this.encodings=Sq(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...E5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:Rq()}receive(_){if(_)this.buffer=xq(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),Q=J5(Y),q=vq(Q);if(!q)throw Error(`Unsupported RFB version banner: ${Q||"<empty>"}`);this.serverVersion=q,this.clientVersionText=fq(q),j.push(wq(this.clientVersionText)),$.push({type:"protocol-version",protocol:s_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+V)break;this.consume(1);let K=J5(this.consume(4+V).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let Q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:s_,types:Q});let q=null;if(Q.includes(2)&&this.password!==null)q=2;else if(Q.includes(1))q=1;else if(Q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:s_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q===0){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+G)break;let V=J5(this.consume(4+G).slice(4));throw Error(V||"VNC server rejected the connection.")}if(Q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:s_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Q!==1)throw Error(`Unsupported VNC security type ${Q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:s_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(K9(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let G=J5(this.consume(4+q).slice(4));throw Error(G||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:s_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Q=Y.getUint16(0,!1),q=Y.getUint16(2,!1),G=X9(Y,4),V=Y.getUint32(20,!1);if(this.buffer.byteLength<24+V)break;let K=this.consume(24),B=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=B.getUint16(0,!1),this.framebufferHeight=B.getUint16(2,!1),this.serverPixelFormat=X9(B,4),this.serverName=J5(this.consume(V)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(bq(this.clientPixelFormat)),j.push(gq(this.encodings)),j.push(N9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:s_,width:Q,height:q,name:this.serverName,pixelFormat:G}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),G=4,V=[],K=!1,B=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<G+12){K=!0;break}let A=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,12),C=A.getUint16(0,!1),T=A.getUint16(2,!1),M=A.getUint16(4,!1),J=A.getUint16(6,!1),k=A.getInt32(8,!1);if(G+=12,k===0){let P=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),i=M*J*P;if(this.buffer.byteLength<G+i){K=!0;break}let l=this.buffer.slice(G,G+i);if(G+=i,B)this.pipeline.processRawRect(l,C,T,M,J,this.clientPixelFormat),V.push({kind:"pipeline",x:C,y:T,width:M,height:J});else V.push({kind:"rgba",x:C,y:T,width:M,height:J,rgba:this.decodeRawRect(l,M,J,this.clientPixelFormat)});continue}if(k===2){let P=hq(this.buffer,G,M,J,this.clientPixelFormat);if(!P){K=!0;break}if(B){let i=this.buffer.slice(G,G+P.consumed);this.pipeline.processRreRect(i,C,T,M,J,this.clientPixelFormat),V.push({kind:"pipeline",x:C,y:T,width:M,height:J})}else V.push({kind:"rgba",x:C,y:T,width:M,height:J,rgba:P.rgba});G+=P.consumed;continue}if(k===1){if(this.buffer.byteLength<G+4){K=!0;break}let P=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,4),i=P.getUint16(0,!1),l=P.getUint16(2,!1);if(G+=4,B)this.pipeline.processCopyRect(C,T,M,J,i,l),V.push({kind:"pipeline",x:C,y:T,width:M,height:J});else V.push({kind:"copy",x:C,y:T,width:M,height:J,srcX:i,srcY:l});continue}if(k===16){let P=uq(this.buffer,G,M,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!P){K=!0;break}if(G+=P.consumed,P.skipped)continue;if(B&&P.decompressed)this.pipeline.processZrleTileData(P.decompressed,C,T,M,J,this.clientPixelFormat),V.push({kind:"pipeline",x:C,y:T,width:M,height:J});else V.push({kind:"rgba",x:C,y:T,width:M,height:J,rgba:P.rgba});continue}if(k===5){let P=pq(this.buffer,G,M,J,this.clientPixelFormat,this.decodeRawRect);if(!P){K=!0;break}if(B){let i=this.buffer.slice(G,G+P.consumed);this.pipeline.processHextileRect(i,C,T,M,J,this.clientPixelFormat),V.push({kind:"pipeline",x:C,y:T,width:M,height:J})}else V.push({kind:"rgba",x:C,y:T,width:M,height:J,rgba:P.rgba});G+=P.consumed;continue}if(k===-223){if(this.framebufferWidth=M,this.framebufferHeight=J,B)this.pipeline.initFramebuffer(M,J);V.push({kind:"resize",x:C,y:T,width:M,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(G);let W={type:"framebuffer-update",protocol:s_,width:this.framebufferWidth,height:this.framebufferHeight,rects:V};if(B)W.framebuffer=this.pipeline.getFramebuffer();$.push(W),j.push(N9(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:s_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let G=J5(this.consume(q));$.push({type:"clipboard",protocol:s_,text:G}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var Q4="piclaw://vnc";function cq(_){let $=String(_||"");if($===Q4)return null;if(!$.startsWith(`${Q4}/`))return null;let j=$.slice(`${Q4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function t4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function lq(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function dq(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function iq(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function oq(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function nq(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class U9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=cq($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=nq("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${t4(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${t4(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${t4(Y.id)}" data-target-label="${t4(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=oq(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=r5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let Q=Y.getAttribute("data-target-open-tab"),q=Y.getAttribute("data-target-label")||Q||"VNC";if(!Q)return;this.openTargetTab(Q,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=r5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=r5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${Q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=c7($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return u7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(s8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=k$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~k$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of h7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(p7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=C$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??C$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new t8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await m7(),Y={};if(Z)Y.pipeline=Z,Y.decodeRawRect=(G,V,K,B)=>Z.decodeRawRectToRgba(G,V,K,B);let Q=r5(this.authPassword);if(Q!==null)Y.password=Q;if(j)Y.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new t8(Y),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new E$({url:iq(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(G)=>{this.applyMetrics(G)},onMessage:(G)=>{this.handleSocketMessage(G)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await lq(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${t4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await dq(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var g$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===Q4||$.startsWith(`${Q4}/`)?9000:!1},mount(_,$){return new U9(_,$)}};function x4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function sq(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,Q=Z?.[2]||"",q=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),K=Y.startsWith("/")?Y:`${G?`${G}/`:""}${Y}`,B=[];for(let U of K.split("/")){if(!U||U===".")continue;if(U===".."){if(B.length>0)B.pop();continue}B.push(U)}let W=B.join("/");return`${E8(W)}${Q}${q}`}function $8(_){return _?.preview||null}function rq(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function aq(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function tq(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${x4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${x4(b_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${x4(s4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${x4(aq($))}</span>`),Z.push(`<span><strong>extension:</strong> ${x4(rq(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${x4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function eq(_){let $=$8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=tq(_,$);if($.kind==="image"){let Z=$.url||($.path?E8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${x4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=D_($.text||"",null,{rewriteImageSrc:(Y)=>sq(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${x4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class m${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=eq(this.context)}getContent(){let _=$8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=$8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var u$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=$8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new m$(_,$)}},h$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return $8(_)||_?.path?1:!1},mount(_,$){return new m$(_,$)}};var _G=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),$G={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},jG={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function F9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function L9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class z9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=F9(j),Q=jG[Y]||"\uD83D\uDCC4",q=$G[Y]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${L9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${L9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let V=G.querySelector("#ov-open-tab");if(V)V.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class H9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var p$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=F9(_?.path);if(!$||!_G.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new z9(_,$);return new H9(_,$)}};var ZG=/\.(csv|tsv)$/i;function O9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class J9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${O9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${O9(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class D9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var c$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ZG.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new J9(_,$);return new D9(_,$)}};var YG=/\.pdf$/i;function QG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class A9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${QG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#pdf-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!YG.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new A9(_,$);return new E9(_,$)}};var qG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function d$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class M9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${d$(Y)}" alt="${d$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${d$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var i$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!qG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new M9(_,$);return new I9(_,$)}};var GG=/\.(mp4|m4v|mov|webm|ogv)$/i;function KG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class k9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${KG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#video-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class C9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var o$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!GG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new k9(_,$);return new C9(_,$)}};function XG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function NG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var n$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function P9(_){let $=String(_||"").trim();return $?$:n$}function VG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function BG(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function WG(_,$="*"){try{let j=(Q)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Q=Z.prototype.saveData;Z.prototype.saveData=function(q,G,V,K,B,W){try{if(q&&V!=null&&j({filename:q,format:G,data:V,mimeType:K,base64Encoded:Boolean(B),defaultMode:W}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let Q=Y.prototype.exportFile;Y.prototype.exportFile=function(q,G,V,K,B,W){try{if(G&&j({filename:G,data:q,mimeType:V,base64Encoded:Boolean(K),mode:B,folderId:W}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function T9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${BG(j)}`}class S9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${NG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#drawio-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class x9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=VG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(WG(this.iframe.contentWindow))return;setTimeout(Q,250)};Q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=n$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await T9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await T9(_,"image/png");else this.xmlData=P9(await _.text());else if(_.status===404)this.xmlData=n$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?P9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var s$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!XG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new S9(_,$);return new x9(_,$)}};var UG=/\.mindmap\.ya?ml$/i,r$=String(Date.now());function y9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function a$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function LG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function FG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Z)}class R9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class w9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(y9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,LG("/static/css/mindmap.css"),await Promise.all([a$("/static/js/vendor/d3-mindmap.min.js?v="+r$),a$("/static/js/vendor/js-yaml.min.js?v="+r$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),FG(this.mindmapEl);let j=y9(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await a$("/static/js/vendor/mindmap-editor.js?v="+r$),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(Q)=>{this.lastContent=Q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)},resolveImagePath:(Q)=>{if(Q.startsWith("data:")||Q.startsWith("http"))return Q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var t$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!UG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new R9(_,$);return new w9(_,$)}};var zG=/\.kanban\.md$/i,HG=String(Date.now());function v9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function OG(){let _=window;if(_.preact)return;_.preact={h:H8,render:J8,Component:X5,createContext:G2},_.preactHooks={useState:h,useEffect:p,useCallback:x,useRef:S,useMemo:C0,useReducer:A6,useContext:N2,useLayoutEffect:E6,useImperativeHandle:X2,useErrorBoundary:B2,useDebugValue:V2},_.htm={bind:()=>L}}function JG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function DG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class f9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class b9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(v9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,DG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=v9();try{if(OG(),await JG("/static/js/vendor/kanban-editor.js?v="+HG),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var e$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!zG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new f9(_,$);return new b9(_,$)}};class g9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new g9;var e8="workspaceExplorerScale",AG=["compact","default","comfortable"],EG=new Set(AG),MG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function m9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return EG.has(j)?j:$}function _3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function IG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function kG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function $3(_={}){let $=IG(_),j=_.stored?m9(_.stored,$):$;return kG(j,_)}function u9(_){return MG[m9(_)]}function CG(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function j3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function h9(_,$,j={}){let Z=j?.resolvePane;if(j3(_,Z))return!0;return CG($)}var PG=60000,d9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function TG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return j3($,(j)=>o0.resolve(j))}function i9(_,$,j,Z=0,Y=[]){if(!j&&d9(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Q of _.children)i9(Q,$,j,Z+1,Y);return Y}function p9(_,$,j){if(!_)return"";let Z=[],Y=(Q)=>{if(!j&&d9(Q))return;if(Z.push(Q.type==="dir"?`d:${Q.path}`:`f:${Q.path}`),Q.children&&$?.has(Q.path))for(let q of Q.children)Y(q)};return Y(_),Z.join("|")}function q3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((G)=>[G?.path,G])):new Map,Q=!j||j.length!==Z.length,q=Z.map((G)=>{let V=q3(Y.get(G.path),G);if(V!==Y.get(G.path))Q=!0;return V});return Q?{...$,children:q}:_}function Y3(_,$,j){if(!_)return _;if(_.path===$)return q3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((Q)=>{let q=Y3(Q,$,j);if(q!==Q)Z=!0;return q});return Z?{..._,children:Y}:_}var o9=4,Z3=14,SG=8,xG=16;function n9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=n9(Z);return _.__bytes=j,j}function s9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=o9)return Z;let Y=Array.isArray(_.children)?_.children:[],Q=[];for(let G of Y){let V=Math.max(0,Number(G?.__bytes??G?.size??0));if(V<=0)continue;if(G.type==="dir")Q.push({kind:"dir",node:G,size:V});else Q.push({kind:"file",name:G.name,path:G.path,size:V})}Q.sort((G,V)=>V.size-G.size);let q=Q;if(Q.length>Z3){let G=Q.slice(0,Z3-1),V=Q.slice(Z3-1),K=V.reduce((B,W)=>B+W.size,0);G.push({kind:"other",name:`+${V.length} more`,path:`${Z.path}/[other]`,size:K}),q=G}return Z.children=q.map((G)=>{if(G.kind==="dir")return s9(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function c9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function r9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${Q}%)`}function _6(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function G3(_,$,j,Z,Y,Q){let q=Math.PI*2-0.0001,G=Q-Y>q?Y+q:Q,V=_6(_,$,Z,Y),K=_6(_,$,Z,G),B=_6(_,$,j,G),W=_6(_,$,j,Y),U=G-Y>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var a9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function t9(_,$,j){let Z=[],Y=[],Q=Math.max(0,Number($)||0),q=(G,V,K,B)=>{let W=Array.isArray(G?.children)?G.children:[];if(!W.length)return;let U=Math.max(0,Number(G.size)||0);if(U<=0)return;let A=K-V,C=V;W.forEach((T,M)=>{let J=Math.max(0,Number(T.size)||0);if(J<=0)return;let k=J/U,P=C,i=M===W.length-1?K:C+A*k;if(C=i,i-P<0.003)return;let l=a9[B];if(l){let $0=r9(P,B,j);if(Z.push({key:T.path,path:T.path,label:T.name,size:J,color:$0,depth:B,startAngle:P,endAngle:i,innerRadius:l[0],outerRadius:l[1],d:G3(120,120,l[0],l[1],P,i)}),B===1)Y.push({key:T.path,name:T.name,size:J,pct:Q>0?J/Q*100:0,color:$0})}if(B<o9)q(T,P,i,B+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function Q3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=Q3(Z,$);if(Y)return Y}return null}function e9(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=a9[1];if(!Y)return{segments:[],legend:[]};let Q=-Math.PI/2,q=Math.PI*3/2,G=r9(Q,1,Z),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:G,depth:1,startAngle:Q,endAngle:q,innerRadius:Y[0],outerRadius:Y[1],d:G3(120,120,Y[0],Y[1],Q,q)}],legend:[{key:K,name:_,size:j,pct:100,color:G}]}}function l9(_,$=!1,j=!1){if(!_)return null;let Z=n9(_),Y=s9(_,0),Q=Y.size||Z,{segments:q,legend:G}=t9(Y,Q,j);if(!q.length&&Q>0){let V=e9("[files]",Y.path,Q,j);q=V.segments,G=V.legend}return{root:Y,totalSize:Q,segments:q,legend:G,truncated:$,isDarkTheme:j}}function yG({payload:_}){if(!_)return null;let[$,j]=h(null),[Z,Y]=h(_?.root?.path||"."),[Q,q]=h(()=>[_?.root?.path||"."]),[G,V]=h(!1);p(()=>{let H=_?.root?.path||".";Y(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),p(()=>{if(!Z)return;V(!0);let H=setTimeout(()=>V(!1),180);return()=>clearTimeout(H)},[Z]);let K=C0(()=>{return Q3(_.root,Z)||_.root},[_?.root,Z]),B=K?.size||_.totalSize||0,{segments:W,legend:U}=C0(()=>{let H=t9(K,B,_.isDarkTheme);if(H.segments.length>0)return H;if(B<=0)return H;let y=K?.children?.length?"Total":"[files]";return e9(y,K?.path||_?.root?.path||".",B,_.isDarkTheme)},[K,B,_.isDarkTheme,_?.root?.path]),[A,C]=h(W),T=S(new Map),M=S(0);p(()=>{let H=T.current,y=new Map(W.map((Y0)=>[Y0.key,Y0])),c=performance.now(),G0=220,d=(Y0)=>{let j0=Math.min(1,(Y0-c)/220),K0=j0*(2-j0),V0=W.map((B0)=>{let E0=H.get(B0.key)||{startAngle:B0.startAngle,endAngle:B0.startAngle,innerRadius:B0.innerRadius,outerRadius:B0.innerRadius},M0=(r0,h0)=>r0+(h0-r0)*K0,n0=M0(E0.startAngle,B0.startAngle),R0=M0(E0.endAngle,B0.endAngle),P0=M0(E0.innerRadius,B0.innerRadius),s0=M0(E0.outerRadius,B0.outerRadius);return{...B0,d:G3(120,120,P0,s0,n0,R0)}});if(C(V0),j0<1)M.current=requestAnimationFrame(d)};if(M.current)cancelAnimationFrame(M.current);return M.current=requestAnimationFrame(d),T.current=y,()=>{if(M.current)cancelAnimationFrame(M.current)}},[W]);let J=A.length?A:W,k=B>0?b_(B):"0 B",P=K?.name||"",l=(P&&P!=="."?P:"Total")||"Total",$0=k,Z0=Q.length>1,v=(H)=>{if(!H?.path)return;let y=Q3(_.root,H.path);if(!y||!Array.isArray(y.children)||y.children.length===0)return;q((c)=>[...c,y.path]),Y(y.path),j(null)},R=()=>{if(!Z0)return;q((H)=>{let y=H.slice(0,-1);return Y(y[y.length-1]||_?.root?.path||"."),y}),j(null)};return L`
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
                        onClick=${()=>v(H)}
                    >
                        <title>${H.label} — ${b_(H.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${Z0?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${l}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${$0}</text>
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
    `}function RG({mediaId:_}){let[$,j]=h(null);if(p(()=>{if(!_)return;W5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?b_($.metadata.size):"";return L`
        <a href=${f_(_)} download=${Z} class="file-attachment"
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
    `}function _j({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:Q,onToggleTerminal:q,terminalVisible:G=!1}){let[V,K]=h(null),[B,W]=h(new Set(["."])),[U,A]=h(null),[C,T]=h(null),[M,J]=h(""),[k,P]=h(null),[i,l]=h(null),[$0,Z0]=h(!0),[v,R]=h(!1),[H,y]=h(null),[c,G0]=h(()=>U5("workspaceShowHidden",!1)),[d,Y0]=h(!1),[j0,K0]=h(null),[V0,B0]=h(null),[O0,E0]=h(null),[M0,n0]=h(!1),[R0,P0]=h(null),[s0,r0]=h(()=>c9()),[h0,t0]=h(()=>$3({stored:J_(e8),..._3()})),[p0,Z1]=h(!1),z0=S(B),l0=S(""),Y1=S(null),G1=S(0),X_=S(new Set),A1=S(null),$1=S(new Map),c1=S(_),C1=S(Z),K1=S(null),c0=S(null),y1=S(null),P1=S(null),e=S(null),W0=S(null),H0=S("."),N0=S(null),w0=S({path:null,dragging:!1,startX:0,startY:0}),x0=S({path:null,dragging:!1,startX:0,startY:0}),v0=S({path:null,timer:0}),k0=S(!1),f0=S(0),i0=S(new Map),D0=S(null),g0=S(null),J0=S(null),q0=S(null),w=S(null),_0=S(null),F0=S(c),I0=S($),m0=S(j??$),X1=S(0),E1=S(O0),_1=S(d),l1=S(j0),q4=S(null),L_=S({x:0,y:0}),a1=S(0),F_=S(null),N_=S(U),Q1=S(C),t1=S(null),G4=S(k);c1.current=_,C1.current=Z,p(()=>{z0.current=B},[B]),p(()=>{F0.current=c},[c]),p(()=>{I0.current=$},[$]),p(()=>{m0.current=j??$},[j,$]),p(()=>{E1.current=O0},[O0]),p(()=>{if(typeof window>"u")return;let z=()=>{t0($3({stored:J_(e8),..._3()}))};z();let I=()=>z(),f=()=>z(),b=(Q0)=>{if(!Q0||Q0.key===null||Q0.key===e8)z()};window.addEventListener("resize",I),window.addEventListener("focus",f),window.addEventListener("storage",b);let s=window.matchMedia?.("(pointer: coarse)"),X0=window.matchMedia?.("(hover: none)"),U0=(Q0,S0)=>{if(!Q0)return;if(Q0.addEventListener)Q0.addEventListener("change",S0);else if(Q0.addListener)Q0.addListener(S0)},L0=(Q0,S0)=>{if(!Q0)return;if(Q0.removeEventListener)Q0.removeEventListener("change",S0);else if(Q0.removeListener)Q0.removeListener(S0)};return U0(s,I),U0(X0,I),()=>{window.removeEventListener("resize",I),window.removeEventListener("focus",f),window.removeEventListener("storage",b),L0(s,I),L0(X0,I)}},[]),p(()=>{let z=(I)=>{let f=I?.detail?.path;if(!f)return;let b=f.split("/"),s=[];for(let X0=1;X0<b.length;X0++)s.push(b.slice(0,X0).join("/"));if(s.length)W((X0)=>{let U0=new Set(X0);U0.add(".");for(let L0 of s)U0.add(L0);return U0});A(f),requestAnimationFrame(()=>{let X0=document.querySelector(`[data-path="${CSS.escape(f)}"]`);if(X0)X0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),p(()=>{_1.current=d},[d]),p(()=>{l1.current=j0},[j0]),p(()=>{N_.current=U},[U]),p(()=>{Q1.current=C},[C]),p(()=>{G4.current=k},[k]),p(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>r0(c9());z();let I=window.matchMedia?.("(prefers-color-scheme: dark)"),f=()=>z();if(I?.addEventListener)I.addEventListener("change",f);else if(I?.addListener)I.addListener(f);let b=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(b?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)b?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(I?.removeEventListener)I.removeEventListener("change",f);else if(I?.removeListener)I.removeListener(f);b?.disconnect()}},[]),p(()=>{if(!C)return;let z=e.current;if(!z)return;let I=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(I)},[C]),p(()=>{if(!p0)return;let z=(f)=>{let b=f?.target;if(!(b instanceof Element))return;if(w.current?.contains(b))return;if(_0.current?.contains(b))return;Z1(!1)},I=(f)=>{if(f?.key==="Escape")Z1(!1),_0.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",I),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",I)}},[p0]);let g_=async(z,I={})=>{let f=Boolean(I?.autoOpen),b=String(z||"").trim();R(!0),P(null),l(null);try{let s=await m5(b,20000);if(f&&b&&h9(b,s,{resolvePane:(X0)=>o0.resolve(X0)}))return C1.current?.(b,s),s;return P(s),s}catch(s){let X0={error:s.message||"Failed to load preview"};return P(X0),X0}finally{R(!1)}};K1.current=g_;let e4=async()=>{if(!I0.current)return;try{let z=await g5("",1,F0.current),I=p9(z.root,z0.current,F0.current);if(I===l0.current){Z0(!1);return}if(l0.current=I,Y1.current=z.root,!G1.current)G1.current=requestAnimationFrame(()=>{G1.current=0,K((f)=>q3(f,Y1.current)),Z0(!1)})}catch(z){y(z.message||"Failed to load workspace"),Z0(!1)}},y4=async(z)=>{if(!z)return;if(X_.current.has(z))return;X_.current.add(z);try{let I=await g5(z,1,F0.current);K((f)=>Y3(f,z,I.root))}catch(I){y(I.message||"Failed to load workspace")}finally{X_.current.delete(z)}};c0.current=y4;let g1=x(()=>{let z=U;if(!z)return".";let I=$1.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let f=z.split("/");return f.pop(),f.join("/")||"."},[U]),z_=x((z)=>{let I=z?.closest?.(".workspace-row");if(!I)return null;let f=I.dataset.path,b=I.dataset.type;if(!f)return null;if(b==="dir")return f;if(f.includes("/")){let s=f.split("/");return s.pop(),s.join("/")||"."}return"."},[]),R1=x((z)=>{return z_(z?.target||null)},[z_]),M1=x((z)=>{E1.current=z,E0(z)},[]),V1=x(()=>{let z=v0.current;if(z?.timer)clearTimeout(z.timer);v0.current={path:null,timer:0}},[]),m_=x((z)=>{if(!z||z==="."){V1();return}let I=$1.current?.get(z);if(!I||I.type!=="dir"){V1();return}if(z0.current?.has(z)){V1();return}if(v0.current?.path===z)return;V1();let f=setTimeout(()=>{v0.current={path:null,timer:0},c0.current?.(z),W((b)=>{let s=new Set(b);return s.add(z),s})},600);v0.current={path:z,timer:f}},[V1]),u_=x((z,I)=>{if(L_.current={x:z,y:I},a1.current)return;a1.current=requestAnimationFrame(()=>{a1.current=0;let f=q4.current;if(!f)return;let b=L_.current;f.style.transform=`translate(${b.x+12}px, ${b.y+12}px)`})},[]),W1=x((z)=>{if(!z)return;let f=($1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!f)return;B0({path:z,label:f})},[]),Z_=x(()=>{if(B0(null),a1.current)cancelAnimationFrame(a1.current),a1.current=0;if(q4.current)q4.current.style.transform="translate(-9999px, -9999px)"},[]),u0=x((z)=>{if(!z)return".";let I=$1.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let f=z.split("/");return f.pop(),f.join("/")||"."},[]),T1=x(()=>{T(null),J("")},[]),E_=x((z)=>{if(!z)return;let f=($1.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!f||z===".")return;T(z),J(f)},[]),Y_=x(async()=>{let z=Q1.current;if(!z)return;let I=(M||"").trim();if(!I){T1();return}let f=$1.current?.get(z),b=(f?.name||z.split("/").pop()||z).trim();if(I===b){T1();return}try{let X0=(await h6(z,I))?.path||z,U0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(T1(),y(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:X0,type:f?.type||"file"}})),f?.type==="dir")W((L0)=>{let Q0=new Set;for(let S0 of L0)if(S0===z)Q0.add(X0);else if(S0.startsWith(`${z}/`))Q0.add(`${X0}${S0.slice(z.length)}`);else Q0.add(S0);return Q0});if(A(X0),f?.type==="dir")P(null),R(!1),l(null);else K1.current?.(X0);c0.current?.(U0)}catch(s){y(s?.message||"Failed to rename file")}},[T1,M]),R4=x(async(z)=>{let b=z||".";for(let s=0;s<50;s+=1){let U0=`untitled${s===0?"":`-${s}`}.md`;try{let Q0=(await u6(b,U0,""))?.path||(b==="."?U0:`${b}/${U0}`);if(b&&b!==".")W((S0)=>new Set([...S0,b]));A(Q0),y(null),c0.current?.(b),K1.current?.(Q0);return}catch(L0){if(L0?.status===409||L0?.code==="file_exists")continue;y(L0?.message||"Failed to create file");return}}y("Failed to create file (untitled name already in use).")},[]),r_=x((z)=>{if(z?.stopPropagation?.(),M0)return;let I=u0(N_.current);R4(I)},[M0,u0,R4]);p(()=>{if(typeof window>"u")return;let z=(I)=>{let f=I?.detail?.updates||[];if(!Array.isArray(f)||f.length===0)return;K((L0)=>{let Q0=L0;for(let S0 of f){if(!S0?.root)continue;if(!Q0||S0.path==="."||!S0.path)Q0=S0.root;else Q0=Y3(Q0,S0.path,S0.root)}if(Q0)l0.current=p9(Q0,z0.current,F0.current);return Z0(!1),Q0});let b=N_.current;if(Boolean(b)&&f.some((L0)=>{let Q0=L0?.path||"";if(!Q0||Q0===".")return!0;return b===Q0||b.startsWith(`${Q0}/`)||Q0.startsWith(`${b}/`)}))i0.current.clear();if(!b||!G4.current)return;let X0=$1.current?.get(b);if(X0&&X0.type==="dir")return;if(f.some((L0)=>{let Q0=L0?.path||"";if(!Q0||Q0===".")return!0;return b===Q0||b.startsWith(`${Q0}/`)}))K1.current?.(b)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),A1.current=e4;let w4=S(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),I=m0.current??I0.current,f=document.visibilityState!=="hidden"&&(I||z.matches&&I0.current);u5(f,F0.current).catch(()=>{})}).current,a_=S(0),_5=S(()=>{if(a_.current)clearTimeout(a_.current);a_.current=setTimeout(()=>{a_.current=0,w4()},250)}).current;p(()=>{if(I0.current)A1.current?.();_5()},[$,j]),p(()=>{A1.current(),w4();let z=setInterval(()=>A1.current(),PG),I=L5("previewHeight",null),f=Number.isFinite(I)?Math.min(Math.max(I,80),600):280;if(f0.current=f,y1.current)y1.current.style.setProperty("--preview-height",`${f}px`);let b=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),s=()=>_5();if(b.addEventListener)b.addEventListener("change",s);else if(b.addListener)b.addListener(s);return document.addEventListener("visibilitychange",s),()=>{if(clearInterval(z),G1.current)cancelAnimationFrame(G1.current),G1.current=0;if(b.removeEventListener)b.removeEventListener("change",s);else if(b.removeListener)b.removeListener(s);if(document.removeEventListener("visibilitychange",s),a_.current)clearTimeout(a_.current),a_.current=0;if(N0.current)clearTimeout(N0.current),N0.current=null;u5(!1,F0.current).catch(()=>{})}},[]);let t_=C0(()=>i9(V,B,c),[V,B,c]),h_=C0(()=>new Map(t_.map((z)=>[z.node.path,z.node])),[t_]),M5=C0(()=>u9(h0),[h0]);$1.current=h_;let U1=(U?$1.current.get(U):null)?.type==="dir";p(()=>{if(!U||!U1){P0(null),D0.current=null,g0.current=null;return}let z=U,I=`${c?"hidden":"visible"}:${U}`,f=i0.current,b=f.get(I);if(b?.root){f.delete(I),f.set(I,b);let U0=l9(b.root,Boolean(b.truncated),s0);if(U0)D0.current=U0,g0.current=U,P0({loading:!1,error:null,payload:U0});return}let s=D0.current,X0=g0.current;P0({loading:!0,error:null,payload:X0===U?s:null}),g5(U,SG,c).then((U0)=>{if(N_.current!==z)return;let L0={root:U0?.root,truncated:Boolean(U0?.truncated)};f.delete(I),f.set(I,L0);while(f.size>xG){let S0=f.keys().next().value;if(!S0)break;f.delete(S0)}let Q0=l9(L0.root,L0.truncated,s0);D0.current=Q0,g0.current=U,P0({loading:!1,error:null,payload:Q0})}).catch((U0)=>{if(N_.current!==z)return;P0({loading:!1,error:U0?.message||"Failed to load folder size chart",payload:X0===U?s:null})})},[U,U1,c,s0]);let w1=Boolean(k&&k.kind==="text"&&!U1&&(!k.size||k.size<=262144)),$5=w1?"Open in editor":k?.size>262144?"File too large to edit":"File is not editable",M_=Boolean(U&&U!=="."),Q_=Boolean(U&&!U1),d1=Boolean(U&&!U1),S1=U&&U1?M8(U,c):null,m1=x(()=>Z1(!1),[]),O1=x(async(z)=>{m1();try{await z?.()}catch(I){console.warn("[workspace-explorer] Header menu action failed:",I)}},[m1]);p(()=>{let z=J0.current;if(q0.current)q0.current.dispose(),q0.current=null;if(!z)return;if(z.innerHTML="",!U||U1||!k||k.error)return;let I={path:U,content:typeof k.text==="string"?k.text:void 0,mtime:k.mtime,size:k.size,preview:k,mode:"view"},f=o0.resolve(I)||o0.get("workspace-preview-default");if(!f)return;let b=f.mount(z,I);return q0.current=b,()=>{if(q0.current===b)b.dispose(),q0.current=null;z.innerHTML=""}},[U,U1,k]);let I_=(z)=>{let I=z?.target;if(I instanceof Element)return I;return I?.parentElement||null},k_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},C_=S((z)=>{let I=I_(z),f=I?.closest?.("[data-path]");if(!f)return;let b=f.dataset.path;if(!b||b===".")return;let s=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),X0=Boolean(I?.closest?.(".workspace-caret"));if(s||X0)return;if(Q1.current===b)return;E_(b)}).current,e_=S((z)=>{if(k0.current){k0.current=!1;return}let I=I_(z),f=I?.closest?.("[data-path]");if(P1.current?.focus?.(),!f)return;let b=f.dataset.path,s=f.dataset.type,X0=Boolean(I?.closest?.(".workspace-caret")),U0=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),L0=N_.current===b,Q0=Q1.current;if(Q0){if(Q0===b)return;T1()}let S0=s==="file"&&t1.current===b&&!X0&&!U0;if(s==="dir"){if(t1.current=null,A(b),P(null),l(null),R(!1),!z0.current.has(b))c0.current?.(b);if(L0&&!X0)return;W((G_)=>{let i1=new Set(G_);if(i1.has(b))i1.delete(b);else i1.add(b);return i1})}else{t1.current=null,A(b);let v1=$1.current.get(b);if(v1)c1.current?.(v1.path,v1);if(!U0&&!X0&&TG(b))C1.current?.(b,G4.current);else{let i1=!U0&&!X0;K1.current?.(b,{autoOpen:i1})}}}).current,q_=S(()=>{l0.current="",A1.current(),Array.from(z0.current||[]).filter((I)=>I&&I!==".").forEach((I)=>c0.current?.(I))}).current,e1=S(()=>{t1.current=null,A(null),P(null),l(null),R(!1)}).current,P_=S(()=>{G0((z)=>{let I=!z;if(typeof window<"u")N1("workspaceShowHidden",String(I));return F0.current=I,u5(!0,I).catch(()=>{}),l0.current="",A1.current?.(),Array.from(z0.current||[]).filter((b)=>b&&b!==".").forEach((b)=>c0.current?.(b)),I})}).current,K4=S((z)=>{if(I_(z)?.closest?.("[data-path]"))return;e1()}).current,I1=x(async(z)=>{if(!z)return;let I=z.split("/").pop()||z;if(!window.confirm(`Delete "${I}"? This cannot be undone.`))return;try{await c6(z);let b=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(N_.current===z)e1();c0.current?.(b),y(null)}catch(b){P((s)=>({...s||{},error:b.message||"Failed to delete file"}))}},[e1]),_4=x((z)=>{let I=P1.current;if(!I||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;I.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),v4=x((z)=>{let I=t_;if(!I||I.length===0)return;let f=U?I.findIndex((b)=>b.node.path===U):-1;if(z.key==="ArrowDown"){z.preventDefault();let b=Math.min(f+1,I.length-1),s=I[b];if(!s)return;if(A(s.node.path),s.node.type!=="dir")c1.current?.(s.node.path,s.node),K1.current?.(s.node.path);else P(null),R(!1),l(null);_4(s.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let b=f<=0?0:f-1,s=I[b];if(!s)return;if(A(s.node.path),s.node.type!=="dir")c1.current?.(s.node.path,s.node),K1.current?.(s.node.path);else P(null),R(!1),l(null);_4(s.node.path);return}if(z.key==="ArrowRight"&&f>=0){let b=I[f];if(b?.node?.type==="dir"&&!B.has(b.node.path))z.preventDefault(),c0.current?.(b.node.path),W((s)=>new Set([...s,b.node.path]));return}if(z.key==="ArrowLeft"&&f>=0){let b=I[f];if(b?.node?.type==="dir"&&B.has(b.node.path))z.preventDefault(),W((s)=>{let X0=new Set(s);return X0.delete(b.node.path),X0});return}if(z.key==="Enter"&&f>=0){z.preventDefault();let b=I[f];if(!b)return;let s=b.node.path;if(b.node.type==="dir"){if(!z0.current.has(s))c0.current?.(s);W((U0)=>{let L0=new Set(U0);if(L0.has(s))L0.delete(s);else L0.add(s);return L0}),P(null),l(null),R(!1)}else c1.current?.(s,b.node),K1.current?.(s);return}if((z.key==="Delete"||z.key==="Backspace")&&f>=0){let b=I[f];if(!b||b.node.type==="dir")return;z.preventDefault(),I1(b.node.path);return}if(z.key==="Escape")z.preventDefault(),e1()},[e1,I1,B,t_,_4,U]),f4=x((z)=>{let I=I_(z),f=I?.closest?.(".workspace-row");if(!f)return;let b=f.dataset.type,s=f.dataset.path;if(!s||s===".")return;if(Q1.current===s)return;let X0=z?.touches?.[0];if(!X0)return;if(w0.current={path:k_(I)?s:null,dragging:!1,startX:X0.clientX,startY:X0.clientY},b!=="file")return;if(N0.current)clearTimeout(N0.current);N0.current=setTimeout(()=>{if(N0.current=null,w0.current?.dragging)return;I1(s)},600)},[I1]),T_=x(()=>{if(N0.current)clearTimeout(N0.current),N0.current=null;let z=w0.current;if(z?.dragging&&z.path){let I=E1.current||g1(),f=F_.current;if(typeof f==="function")f(z.path,I)}w0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,Y0(!1),K0(null),M1(null),V1(),Z_()},[g1,Z_,M1,V1]),b4=x((z)=>{let I=w0.current,f=z?.touches?.[0];if(!f||!I?.path){if(N0.current)clearTimeout(N0.current),N0.current=null;return}let b=Math.abs(f.clientX-I.startX),s=Math.abs(f.clientY-I.startY),X0=b>8||s>8;if(X0&&N0.current)clearTimeout(N0.current),N0.current=null;if(!I.dragging&&X0)I.dragging=!0,Y0(!0),K0("move"),W1(I.path);if(I.dragging){z.preventDefault(),u_(f.clientX,f.clientY);let U0=document.elementFromPoint(f.clientX,f.clientY),L0=z_(U0)||g1();if(E1.current!==L0)M1(L0);m_(L0)}},[z_,g1,W1,u_,M1,m_]),j5=S((z)=>{z.preventDefault();let I=y1.current;if(!I)return;let f=z.clientY,b=f0.current||280,s=z.currentTarget;s.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let X0=f,U0=(Q0)=>{X0=Q0.clientY;let S0=I.clientHeight-80,v1=Math.min(Math.max(b-(Q0.clientY-f),80),S0);I.style.setProperty("--preview-height",`${v1}px`),f0.current=v1},L0=()=>{let Q0=I.clientHeight-80,S0=Math.min(Math.max(b-(X0-f),80),Q0);f0.current=S0,s.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N1("previewHeight",String(Math.round(S0))),document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",L0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",L0)}).current,p_=S((z)=>{z.preventDefault();let I=y1.current;if(!I)return;let f=z.touches[0];if(!f)return;let b=f.clientY,s=f0.current||280,X0=z.currentTarget;X0.classList.add("dragging"),document.body.style.userSelect="none";let U0=(Q0)=>{let S0=Q0.touches[0];if(!S0)return;Q0.preventDefault();let v1=I.clientHeight-80,G_=Math.min(Math.max(s-(S0.clientY-b),80),v1);I.style.setProperty("--preview-height",`${G_}px`),f0.current=G_},L0=()=>{X0.classList.remove("dragging"),document.body.style.userSelect="",N1("previewHeight",String(Math.round(f0.current||s))),document.removeEventListener("touchmove",U0),document.removeEventListener("touchend",L0),document.removeEventListener("touchcancel",L0)};document.addEventListener("touchmove",U0,{passive:!1}),document.addEventListener("touchend",L0),document.addEventListener("touchcancel",L0)}).current,c_=async()=>{if(!U)return;try{let z=await m6(U);if(z.media_id)l(z.media_id)}catch(z){P((I)=>({...I||{},error:z.message||"Failed to attach"}))}},O4=async()=>{if(!U||U1)return;await I1(U)},l_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},g4=x((z)=>{if(!l_(z))return;if(z.preventDefault(),X1.current+=1,!_1.current)Y0(!0);K0("upload");let I=R1(z)||g1();M1(I),m_(I)},[g1,R1,M1,m_]),d_=x((z)=>{if(!l_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!_1.current)Y0(!0);if(l1.current!=="upload")K0("upload");let I=R1(z)||g1();if(E1.current!==I)M1(I);m_(I)},[g1,R1,M1,m_]),S_=x((z)=>{if(!l_(z))return;if(z.preventDefault(),X1.current=Math.max(0,X1.current-1),X1.current===0)Y0(!1),K0(null),M1(null),V1()},[M1,V1]),k1=x(async(z,I=".")=>{let f=Array.from(z||[]);if(f.length===0)return;let b=I&&I!==""?I:".",s=b!=="."?b:"workspace root";n0(!0);try{let X0=null;for(let U0 of f)try{X0=await A8(U0,b)}catch(L0){let Q0=L0?.status,S0=L0?.code;if(Q0===409||S0==="file_exists"){let v1=U0?.name||"file";if(!window.confirm(`"${v1}" already exists in ${s}. Overwrite?`))continue;X0=await A8(U0,b,{overwrite:!0})}else throw L0}if(X0?.path)t1.current=X0.path,A(X0.path),K1.current?.(X0.path);c0.current?.(b)}catch(X0){y(X0.message||"Failed to upload file")}finally{n0(!1)}},[]),J4=x(async(z,I)=>{if(!z)return;let f=$1.current?.get(z);if(!f)return;let b=I&&I!==""?I:".",s=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(b===s)return;try{let U0=(await p6(z,b))?.path||z;if(f.type==="dir")W((L0)=>{let Q0=new Set;for(let S0 of L0)if(S0===z)Q0.add(U0);else if(S0.startsWith(`${z}/`))Q0.add(`${U0}${S0.slice(z.length)}`);else Q0.add(S0);return Q0});if(A(U0),f.type==="dir")P(null),R(!1),l(null);else K1.current?.(U0);c0.current?.(s),c0.current?.(b)}catch(X0){y(X0?.message||"Failed to move entry")}},[]);F_.current=J4;let D4=x(async(z)=>{if(!l_(z))return;z.preventDefault(),X1.current=0,Y0(!1),K0(null),E0(null),V1();let I=Array.from(z?.dataTransfer?.files||[]);if(I.length===0)return;let f=E1.current||R1(z)||g1();await k1(I,f)},[g1,R1,k1]),m4=x((z)=>{if(z?.stopPropagation?.(),M0)return;let I=z?.currentTarget?.dataset?.uploadTarget||".";H0.current=I,W0.current?.click()},[M0]),z1=x(()=>{if(M0)return;let z=N_.current,I=z?$1.current?.get(z):null;H0.current=I?.type==="dir"?I.path:".",W0.current?.click()},[M0]),A4=x(()=>{O1(()=>r_(null))},[O1,r_]),Z5=x(()=>{O1(()=>z1())},[O1,z1]),u1=x(()=>{O1(()=>q_())},[O1,q_]),V_=x(()=>{O1(()=>P_())},[O1,P_]),$4=x(()=>{if(!U||!w1)return;O1(()=>C1.current?.(U,k))},[O1,U,w1,k]),u4=x(()=>{if(!U||U===".")return;O1(()=>E_(U))},[O1,U,E_]),X4=x(()=>{if(!U||U1)return;O1(()=>O4())},[O1,U,U1,O4]),E4=x(()=>{if(!U||U1)return;O1(()=>c_())},[O1,U,U1,c_]),N4=x(()=>{if(!S1)return;if(m1(),typeof window<"u")window.open(S1,"_blank","noopener")},[m1,S1]),x_=x(()=>{m1(),Y?.()},[m1,Y]),H_=x(()=>{m1(),Q?.()},[m1,Q]),M4=x(()=>{m1(),q?.()},[m1,q]),h4=x((z)=>{if(!z||z.button!==0)return;let I=z.currentTarget;if(!I||!I.dataset)return;let f=I.dataset.path;if(!f||f===".")return;if(Q1.current===f)return;let b=I_(z);if(b?.closest?.("button, a, input, .workspace-caret"))return;if(!k_(b))return;z.preventDefault(),x0.current={path:f,dragging:!1,startX:z.clientX,startY:z.clientY};let s=(U0)=>{let L0=x0.current;if(!L0?.path)return;let Q0=Math.abs(U0.clientX-L0.startX),S0=Math.abs(U0.clientY-L0.startY),v1=Q0>4||S0>4;if(!L0.dragging&&v1)L0.dragging=!0,k0.current=!0,Y0(!0),K0("move"),W1(L0.path),u_(U0.clientX,U0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(L0.dragging){U0.preventDefault(),u_(U0.clientX,U0.clientY);let G_=document.elementFromPoint(U0.clientX,U0.clientY),i1=z_(G_)||g1();if(E1.current!==i1)M1(i1);m_(i1)}},X0=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",X0);let U0=x0.current;if(U0?.dragging&&U0.path){let L0=E1.current||g1(),Q0=F_.current;if(typeof Q0==="function")Q0(U0.path,L0)}x0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,Y0(!1),K0(null),M1(null),V1(),Z_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",X0)},[z_,g1,W1,u_,Z_,M1,m_,V1]),y_=x(async(z)=>{let I=Array.from(z?.target?.files||[]);if(I.length===0)return;let f=H0.current||".";if(await k1(I,f),H0.current=".",z?.target)z.target.value=""},[k1]);return L`
        <aside
            class=${`workspace-sidebar${d?" workspace-drop-active":""}`}
            data-workspace-scale=${h0}
            ref=${y1}
            onDragEnter=${g4}
            onDragOver=${d_}
            onDragLeave=${S_}
            onDrop=${D4}
        >
            <input type="file" multiple style="display:none" ref=${W0} onChange=${y_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${_0}
                            class=${`workspace-menu-button${p0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),Z1((I)=>!I)}}
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
                                <button class="workspace-menu-item" role="menuitem" onClick=${A4} disabled=${M0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Z5} disabled=${M0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${u1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${c?" active":""}`} role="menuitem" onClick=${V_}>
                                    ${c?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&L`<div class="workspace-menu-separator"></div>`}
                                ${U&&!U1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${$4} disabled=${!w1}>Open in editor</button>
                                `}
                                ${M_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${u4}>Rename selected</button>
                                `}
                                ${d1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${E4}>Download selected file</button>
                                `}
                                ${S1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${N4}>Download selected folder (zip)</button>
                                `}
                                ${Q_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${X4}>Delete selected file</button>
                                `}

                                ${(Y||Q||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${H_}>
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
            <div class="workspace-tree" onClick=${K4}>
                ${M0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${$0&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${V&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${P1}
                        tabIndex="0"
                        onClick=${e_}
                        onDblClick=${C_}
                        onKeyDown=${v4}
                        onTouchStart=${f4}
                        onTouchEnd=${T_}
                        onTouchMove=${b4}
                        onTouchCancel=${T_}
                    >
                        ${t_.map(({node:z,depth:I})=>{let f=z.type==="dir",b=z.path===U,s=z.path===C,X0=f&&B.has(z.path),U0=O0&&z.path===O0,L0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${b?" selected":""}${U0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+I*M5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${h4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${f?X0?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${f?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${f?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${s?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${e}
                                                value=${M}
                                                onInput=${(Q0)=>J(Q0?.target?.value||"")}
                                                onKeyDown=${(Q0)=>{if(Q0.key==="Enter")Q0.preventDefault(),Y_();else if(Q0.key==="Escape")Q0.preventDefault(),T1()}}
                                                onBlur=${T1}
                                                onClick=${(Q0)=>Q0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${f&&!X0&&L0>0&&L`
                                        <span class="workspace-count">${L0}</span>
                                    `}
                                    ${f&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${m4}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${j5} onTouchStart=${p_}></div>
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
                                    onClick=${()=>w1&&C1.current?.(U,k)}
                                    title=${$5}
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
                                    <a class="workspace-download" href=${M8(U,c)}
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
                    ${v&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${k?.error&&L`<div class="workspace-error">${k.error}</div>`}
                    ${U1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${R0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${R0?.error&&L`<div class="workspace-error">${R0.error}</div>`}
                        ${R0?.payload&&R0.payload.segments?.length>0&&L`
                            <${yG} payload=${R0.payload} />
                        `}
                        ${R0?.payload&&(!R0.payload.segments||R0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${k&&!k.error&&!U1&&L`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${i&&L`
                        <div class="workspace-download-card">
                            <${RG} mediaId=${i} />
                        </div>
                    `}
                </div>
            `}
            ${V0&&L`
                <div class="workspace-drag-ghost" ref=${q4}>${V0.label}</div>
            `}
        </aside>
    `}var wG=new Set(["kanban-editor","mindmap-editor"]);function vG(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function $j(_,$,j){let Z=vG(_,$,j);return wG.has(Z)}var fG=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,bG=/\.(csv|tsv)$/i,gG=/\.pdf$/i,mG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,jj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Zj({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:Q,onTogglePin:q,onTogglePreview:G,onEditSource:V,previewTabs:K,paneOverrides:B,onToggleDock:W,dockVisible:U,onToggleZen:A,zenMode:C,onPopOutTab:T}){let[M,J]=h(null),k=S(null);p(()=>{if(!M)return;let H=(y)=>{if(y.type==="keydown"&&y.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[M]),p(()=>{let H=(y)=>{if(y.ctrlKey&&y.key==="Tab"){if(y.preventDefault(),!_.length)return;let c=_.findIndex((G0)=>G0.id===$);if(y.shiftKey){let G0=_[(c-1+_.length)%_.length];j?.(G0.id)}else{let G0=_[(c+1)%_.length];j?.(G0.id)}return}if((y.ctrlKey||y.metaKey)&&y.key==="w"){let c=document.querySelector(".editor-pane");if(c&&c.contains(document.activeElement)){if(y.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let P=x((H,y)=>{if(H.button===1){H.preventDefault(),Z?.(y);return}if(H.button===0)j?.(y)},[j,Z]),i=x((H,y)=>{H.preventDefault(),J({id:y,x:H.clientX,y:H.clientY})},[]),l=x((H)=>{H.preventDefault(),H.stopPropagation()},[]),$0=x((H,y)=>{H.preventDefault(),H.stopPropagation(),Z?.(y)},[Z]);p(()=>{if(!$||!k.current)return;let H=k.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let Z0=x((H)=>{if(!(B instanceof Map))return null;return B.get(H)||null},[B]),v=C0(()=>_.find((H)=>H.id===M?.id)||null,[M?.id,_]),R=C0(()=>{let H=M?.id;if(!H)return!1;return $j(H,Z0(H),(y)=>o0.resolve(y))},[M?.id,Z0]);if(!_.length)return null;return L`
        <div class="tab-strip" ref=${k} role="tablist">
            ${_.map((H)=>L`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(y)=>P(y,H.id)}
                    onContextMenu=${(y)=>i(y,H.id)}
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
                        onMouseDown=${l}
                        onClick=${(y)=>$0(y,H.id)}
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
                    class=${`tab-strip-zen-toggle${C?" active":""}`}
                    onClick=${A}
                    title=${`${C?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${C?"Exit":"Enter"} zen mode`}
                    aria-pressed=${C?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${C?L`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:L`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${M&&L`
            <div class="tab-context-menu" style=${{left:M.x+"px",top:M.y+"px"}}>
                <button onClick=${()=>{Z?.(M.id),J(null)}}>Close</button>
                <button onClick=${()=>{Y?.(M.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Q?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(M.id),J(null)}}>
                    ${v?.pinned?"Unpin":"Pin"}
                </button>
                ${R&&V&&L`
                    <button onClick=${()=>{V(M.id),J(null)}}>Edit Source</button>
                `}
                ${T&&L`
                    <button onClick=${()=>{let H=_.find((y)=>y.id===M.id);T(M.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${G&&/\.(md|mdx|markdown)$/i.test(M.id)&&L`
                    <hr />
                    <button onClick=${()=>{G(M.id),J(null)}}>
                        ${K?.has(M.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${fG.test(M.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(M.id),y=M.id.split("/").pop()||"document",c="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(y);window.open(c,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${bG.test(M.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(M.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${gG.test(M.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(M.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${mG.test(M.id)&&!jj.test(M.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(M.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${jj.test(M.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(M.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var uG=400,K3=60,Yj=220,X3="mdPreviewHeight";function hG(){try{let _=localStorage.getItem(X3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=K3?$:Yj}catch{return Yj}}function N3({getContent:_,path:$,onClose:j}){let[Z,Y]=h(""),[Q,q]=h(hG),G=S(null),V=S(null),K=S(""),B=S(_);return B.current=_,p(()=>{let A=()=>{let T=B.current?.()||"";if(T===K.current)return;K.current=T;try{let M=D_(T,null,{sanitize:!1});Y(M)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let C=setInterval(A,uG);return()=>clearInterval(C)},[]),p(()=>{if(G.current&&Z)U4(G.current).catch(()=>{})},[Z]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let C=A.clientY,T=V.current?.offsetHeight||Q,M=V.current?.parentElement,J=M?M.offsetHeight*0.7:500,k=A.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let P=(l)=>{let $0=Math.min(Math.max(T-(l.clientY-C),K3),J);q($0)},i=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(X3,String(Math.round(V.current?.offsetHeight||Q)))}catch{}document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",i)}}
            onTouchStart=${(A)=>{A.preventDefault();let C=A.touches[0];if(!C)return;let T=C.clientY,M=V.current?.offsetHeight||Q,J=V.current?.parentElement,k=J?J.offsetHeight*0.7:500,P=A.currentTarget;P.classList.add("dragging"),document.body.style.userSelect="none";let i=($0)=>{let Z0=$0.touches[0];if(!Z0)return;$0.preventDefault();let v=Math.min(Math.max(M-(Z0.clientY-T),K3),k);q(v)},l=()=>{P.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(X3,String(Math.round(V.current?.offsetHeight||Q)))}catch{}document.removeEventListener("touchmove",i),document.removeEventListener("touchend",l),document.removeEventListener("touchcancel",l)};document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l)}}
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
    `}function Qj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let Q=S(_);Q.current=_;let q=S($);q.current=$;let G=S(j);G.current=j;let V=S(Z);V.current=Z,p(()=>{G.current();let K=new I8((W,U)=>Q.current(W,U),(W)=>q.current(W),{chatJid:Y});K.connect();let B=()=>{K.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")V.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),K.disconnect()}},[Y])}function qj(){let[_,$]=h(!1),[j,Z]=h("default"),Y=S(!1);p(()=>{let V=U5("notificationsEnabled",!1);if(Y.current=V,$(V),typeof Notification<"u")Z(Notification.permission)},[]),p(()=>{Y.current=_},[_]);let Q=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let V=Notification.requestPermission();if(V&&typeof V.then==="function")return V;return Promise.resolve(V)}catch{return Promise.resolve("default")}},[]),q=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let K=await Q();if(Z(K||"default"),K!=="granted"){Y.current=!1,$(!1),N1("notificationsEnabled","false");return}}let V=!Y.current;Y.current=V,$(V),N1("notificationsEnabled",String(V))},[Q]),G=x((V,K)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(V,{body:K});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:G}}var j8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Gj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=h(null),[Q,q]=h(!1),G=S(!1),V=S(null),K=S(!1),B=S(null),W=S(null),U=S(0);p(()=>{G.current=Q},[Q]),p(()=>{W.current=Z},[Z]),p(()=>{U.current+=1,B.current=null,K.current=!1,G.current=!1,q(!1)},[j]);let A=x(async(M=null)=>{let J=U.current;try{if(M){let k=await I6(M,50,0,j);if(J!==U.current)return;Y(k.posts),q(!1)}else{let k=await d4(10,null,j);if(J!==U.current)return;Y(k.posts),q(k.has_more)}}catch(k){if(J!==U.current)return;console.error("Failed to load posts:",k)}},[j]),C=x(async()=>{let M=U.current;try{let J=await d4(10,null,j);if(M!==U.current)return;Y((k)=>{if(!k||k.length===0)return J.posts;return j8([...J.posts,...k])}),q((k)=>k||J.has_more)}catch(J){if(M!==U.current)return;console.error("Failed to refresh timeline:",J)}},[j]),T=x(async(M={})=>{let J=U.current,k=W.current;if(!k||k.length===0)return;if(K.current)return;let{preserveScroll:P=!0,preserveMode:i="top",allowRepeat:l=!1}=M,$0=(R)=>{if(!P){R();return}if(i==="top")$(R);else _(R)},v=k.slice().sort((R,H)=>R.id-H.id)[0]?.id;if(!Number.isFinite(v))return;if(!l&&B.current===v)return;K.current=!0,B.current=v;try{let R=await d4(10,v,j);if(J!==U.current)return;if(R.posts.length>0)$0(()=>{Y((H)=>j8([...R.posts,...H||[]])),q(R.has_more)});else q(!1)}catch(R){if(J!==U.current)return;console.error("Failed to load more posts:",R)}finally{if(J===U.current)K.current=!1}},[j,_,$]);return p(()=>{V.current=T},[T]),{posts:Z,setPosts:Y,hasMore:Q,setHasMore:q,hasMoreRef:G,loadPosts:A,refreshTimeline:C,loadMore:T,loadMoreRef:V,loadingMoreRef:K,lastBeforeIdRef:B}}function Kj(){let[_,$]=h(null),[j,Z]=h({text:"",totalLines:0}),[Y,Q]=h(""),[q,G]=h({text:"",totalLines:0}),[V,K]=h(null),[B,W]=h(null),[U,A]=h(null),C=S(null),T=S(0),M=S(!1),J=S(""),k=S(""),P=S(null),i=S(null),l=S(null),$0=S(null),Z0=S(!1),v=S(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:Q,agentThought:q,setAgentThought:G,pendingRequest:V,setPendingRequest:K,currentTurnId:B,setCurrentTurnId:W,steerQueuedTurnId:U,setSteerQueuedTurnId:A,lastAgentEventRef:C,lastSilenceNoticeRef:T,isAgentRunningRef:M,draftBufferRef:J,thoughtBufferRef:k,pendingRequestRef:P,stalledPostIdRef:i,currentTurnIdRef:l,steerQueuedTurnIdRef:$0,thoughtExpandedRef:Z0,draftExpandedRef:v}}function Xj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=S((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.clientX,A=$.current||280,C=B.currentTarget;C.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=U,M=(k)=>{T=k.clientX;let P=Math.min(Math.max(A+(k.clientX-U),160),600);W.style.setProperty("--sidebar-width",`${P}px`),$.current=P},J=()=>{let k=Math.min(Math.max(A+(T-U),160),600);$.current=k,C.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",N1("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",J)}).current,Q=S((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.touches[0];if(!U)return;let A=U.clientX,C=$.current||280,T=B.currentTarget;T.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let M=(k)=>{let P=k.touches[0];if(!P)return;k.preventDefault();let i=Math.min(Math.max(C+(P.clientX-A),160),600);W.style.setProperty("--sidebar-width",`${i}px`),$.current=i},J=()=>{T.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",N1("sidebarWidth",String(Math.round($.current||C))),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=S((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.clientX,A=j.current||$.current||280,C=B.currentTarget;C.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=U,M=(k)=>{T=k.clientX;let P=Math.min(Math.max(A+(k.clientX-U),200),800);W.style.setProperty("--editor-width",`${P}px`),j.current=P},J=()=>{let k=Math.min(Math.max(A+(T-U),200),800);j.current=k,C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N1("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",J)}).current,G=S((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.touches[0];if(!U)return;let A=U.clientX,C=j.current||$.current||280,T=B.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let M=(k)=>{let P=k.touches[0];if(!P)return;k.preventDefault();let i=Math.min(Math.max(C+(P.clientX-A),200),800);W.style.setProperty("--editor-width",`${i}px`),j.current=i},J=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",N1("editorWidth",String(Math.round(j.current||C))),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,V=S((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.clientY,A=Z?.current||200,C=B.currentTarget;C.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let T=U,M=(k)=>{T=k.clientY;let P=Math.min(Math.max(A-(k.clientY-U),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${P}px`),Z)Z.current=P;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let k=Math.min(Math.max(A-(T-U),100),window.innerHeight*0.5);if(Z)Z.current=k;C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N1("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",J)}).current,K=S((B)=>{B.preventDefault();let W=_.current;if(!W)return;let U=B.touches[0];if(!U)return;let A=U.clientY,C=Z?.current||200,T=B.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let M=(k)=>{let P=k.touches[0];if(!P)return;k.preventDefault();let i=Math.min(Math.max(C-(P.clientY-A),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${i}px`),Z)Z.current=i;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",N1("dockHeight",String(Math.round(Z?.current||C))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:Q,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:K}}function pG(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,Q=new Map;for(let[q,G]of _.entries()){let V=q;if(Z==="dir"){if(q===$)V=j,Y=!0;else if(q.startsWith(`${$}/`))V=`${j}${q.slice($.length)}`,Y=!0}else if(q===$)V=j,Y=!0;Q.set(V,G)}return Y?Q:_}function Nj({onTabClosed:_}={}){let $=S(_);$.current=_;let[j,Z]=h(()=>a0.getTabs()),[Y,Q]=h(()=>a0.getActiveId()),[q,G]=h(()=>a0.getTabs().length>0);p(()=>{return a0.onChange((v,R)=>{Z(v),Q(R),G(v.length>0)})},[]);let[V,K]=h(()=>new Set),[B,W]=h(()=>new Map),U=x((v)=>{K((R)=>{let H=new Set(R);if(H.has(v))H.delete(v);else H.add(v);return H})},[]),A=x((v)=>{K((R)=>{if(!R.has(v))return R;let H=new Set(R);return H.delete(v),H})},[]),C=x((v)=>{W((R)=>{if(!R.has(v))return R;let H=new Map(R);return H.delete(v),H})},[]),T=x((v,R={})=>{if(!v)return;let H=typeof R?.paneOverrideId==="string"&&R.paneOverrideId.trim()?R.paneOverrideId.trim():null,y={path:v,mode:"edit"};try{if(!(H?o0.get(H):o0.resolve(y))){if(!o0.get("editor")){console.warn(`[openEditor] No pane handler for: ${v}`);return}}}catch(G0){console.warn(`[openEditor] paneRegistry.resolve() error for "${v}":`,G0)}let c=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0;if(a0.open(v,c),H)W((G0)=>{if(G0.get(v)===H)return G0;let d=new Map(G0);return d.set(v,H),d})},[]),M=x(()=>{let v=a0.getActiveId();if(v){let R=a0.get(v);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}a0.close(v),A(v),C(v),$.current?.(v)}},[C,A]),J=x((v)=>{let R=a0.get(v);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}a0.close(v),A(v),C(v),$.current?.(v)},[C,A]),k=x((v)=>{a0.activate(v)},[]),P=x((v)=>{let R=a0.getTabs().filter((c)=>c.id!==v&&!c.pinned),H=R.filter((c)=>c.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let y=R.map((c)=>c.id);a0.closeOthers(v),y.forEach((c)=>{A(c),C(c),$.current?.(c)})},[C,A]),i=x(()=>{let v=a0.getTabs().filter((y)=>!y.pinned),R=v.filter((y)=>y.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let H=v.map((y)=>y.id);a0.closeAll(),H.forEach((y)=>{A(y),C(y),$.current?.(y)})},[C,A]),l=x((v)=>{a0.togglePin(v)},[]),$0=x((v)=>{if(!v)return;W((R)=>{if(R.get(v)==="editor")return R;let H=new Map(R);return H.set(v,"editor"),H}),a0.activate(v)},[]),Z0=x(()=>{let v=a0.getActiveId();if(v)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:v}}))},[]);return p(()=>{let v=(R)=>{let{oldPath:H,newPath:y,type:c}=R.detail||{};if(!H||!y)return;if(c==="dir"){for(let G0 of a0.getTabs())if(G0.path===H||G0.path.startsWith(`${H}/`)){let d=`${y}${G0.path.slice(H.length)}`;a0.rename(G0.id,d)}}else a0.rename(H,y);W((G0)=>pG(G0,H,y,c))};return window.addEventListener("workspace-file-renamed",v),()=>window.removeEventListener("workspace-file-renamed",v)},[]),p(()=>{let v=(R)=>{if(a0.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",v),()=>window.removeEventListener("beforeunload",v)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Y,previewTabs:V,tabPaneOverrides:B,openEditor:T,closeEditor:M,handleTabClose:J,handleTabActivate:k,handleTabCloseOthers:P,handleTabCloseAll:i,handleTabTogglePin:l,handleTabTogglePreview:U,handleTabEditSource:$0,revealInExplorer:Z0}}function V3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],Q=Number(Y);return Number.isFinite(Q)?Q:$}catch{return $}}var B3=V3("warning",30000),Vj=V3("finalize",120000),W3=V3("refresh",30000),Bj=30000;function Wj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Uj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Lj(_=30000){let[,$]=h(0);p(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function U3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}function Fj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function L3(_){return String(_||"").trim()||"web:default"}function zj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Hj(_={}){return F4(_)&&d8(_)}function cG(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function lG(_={},$={}){if(!Hj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=cG({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function Oj(_={}){if(!Hj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,Q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let W of Y)$.clearTimeout?.(W);Y.clear()},q=()=>{Z=0,lG({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},V=()=>{G();for(let W of[80,220,420]){let U=$.setTimeout?.(()=>{Y.delete(U),G()},W);if(U!=null)Y.add(U)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;V()},B=$.visualViewport;return V(),$.addEventListener("focus",V),$.addEventListener("pageshow",V),$.addEventListener("resize",V),$.addEventListener("orientationchange",V),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",V,!0),B?.addEventListener?.("resize",V),B?.addEventListener?.("scroll",V),()=>{Q(),$.removeEventListener("focus",V),$.removeEventListener("pageshow",V),$.removeEventListener("resize",V),$.removeEventListener("orientationchange",V),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",V,!0),B?.removeEventListener?.("resize",V),B?.removeEventListener?.("scroll",V)}}function dG(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function K_(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:dG($,j)}var iG=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Jj(_){return iG.has(String(_||"").trim())}function oG(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function F3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(oG(_),{detail:Z})),!0}var nG=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Dj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(F4({window:j,navigator:Z}))};Y();let q=nG.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Y),()=>G.removeEventListener("change",Y);if(typeof G.addListener==="function")return G.addListener(Y),()=>G.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let G of q)G();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function Aj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}var O3="piclaw_btw_session";function sG(){try{let _=new URL(import.meta.url).searchParams.get("v");if(_&&_.trim())return _.trim()}catch{}try{let $=Array.from(document.querySelectorAll('script[type="module"][src]')).find((Y)=>String(Y.getAttribute("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute("src")||"";if(!$)return null;let Z=new URL($,window.location.origin).searchParams.get("v");return Z&&Z.trim()?Z.trim():null}catch{return null}}var Ej=sG(),rG=900,aG="__piclawRenameBranchFormLock__",z3=()=>{if(typeof window>"u")return null;let _=window,$=aG,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function tG(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function eG(){let _=J_(O3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",Y=typeof $.thinking==="string"?$.thinking:"",Q=typeof $.error==="string"&&$.error.trim()?$.error:null,q=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:Y,error:q==="error"?Q||"BTW stream interrupted. You can retry.":Q,model:null,status:q}}catch{return null}}var Mj=k6,Ij=P6,_K=S6,kj=v6,Cj=f6,H3=x6,$6=K_(j_,"getAgentContext",null),$K=K_(j_,"getAutoresearchStatus",null),jK=K_(j_,"stopAutoresearch",{status:"ok"}),ZK=K_(j_,"dismissAutoresearch",{status:"ok"}),Pj=K_(j_,"getAgentModels",{current:null,models:[]}),Tj=K_(j_,"getActiveChatAgents",{chats:[]}),j6=K_(j_,"getChatBranches",{chats:[]}),YK=K_(j_,"renameChatBranch",null),QK=K_(j_,"pruneChatBranch",null),Sj=K_(j_,"restoreChatBranch",null),xj=K_(j_,"getAgentQueueState",{count:0}),qK=K_(j_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),GK=K_(j_,"removeAgentQueueItem",{removed:!1}),KK=K_(j_,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});o0.register(W$);o0.register(h$);o0.register(u$);o0.register(p$);o0.register(c$);o0.register(l$);o0.register(i$);o0.register(o$);o0.register(s$);o0.register(t$);o0.register(e$);o0.register(g$);U$();o0.register(z$);o0.register(H$);function XK({locationParams:_,navigate:$}){let j=C0(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),Z=C0(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Y=C0(()=>{let X=(_.get("pane_popout")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Q=C0(()=>{let X=_.get("pane_path");return X&&X.trim()?X.trim():""},[_]),q=C0(()=>{let X=_.get("pane_label");return X&&X.trim()?X.trim():""},[_]),G=C0(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),V=C0(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():j},[j,_]),[K,B]=h("disconnected"),[W,U]=h(()=>F4()),[A,C]=h(null),[T,M]=h(null),[J,k]=h(!1),[P,i]=h("current"),[l,$0]=h([]),[Z0,v]=h([]),[R,H]=h(null),{agentStatus:y,setAgentStatus:c,agentDraft:G0,setAgentDraft:d,agentPlan:Y0,setAgentPlan:j0,agentThought:K0,setAgentThought:V0,pendingRequest:B0,setPendingRequest:O0,currentTurnId:E0,setCurrentTurnId:M0,steerQueuedTurnId:n0,setSteerQueuedTurnId:R0,lastAgentEventRef:P0,lastSilenceNoticeRef:s0,isAgentRunningRef:r0,draftBufferRef:h0,thoughtBufferRef:t0,pendingRequestRef:p0,stalledPostIdRef:Z1,currentTurnIdRef:z0,steerQueuedTurnIdRef:l0,thoughtExpandedRef:Y1,draftExpandedRef:G1}=Kj(),[X_,A1]=h({}),[$1,c1]=h(null),[C1,K1]=h(null),[c0,y1]=h(!1),[P1,e]=h(null),[W0,H0]=h([]),[N0,w0]=h([]),[x0,v0]=h(null),[k0,f0]=h(()=>new Map),[i0,D0]=h(()=>new Set),[g0,J0]=h([]),[q0,w]=h(!1),[_0,F0]=h(()=>eG()),[I0,m0]=h(null),X1=S(new Set),E1=C0(()=>W0.find((X)=>X?.chat_jid===j)||null,[W0,j]),_1=C0(()=>N0.find((X)=>X?.chat_jid===j)||E1||null,[E1,N0,j]),l1=_1?.root_chat_jid||E1?.root_chat_jid||j,q4=tG(P),[L_,a1]=h(()=>({status:G?"running":"idle",message:G?"Preparing a new chat branch…":""})),F_=g0.length,N_=S(new Set),Q1=S([]),t1=S(new Set),G4=S(0),g_=S({inFlight:!1,lastAttemptAt:0,turnId:null});N_.current=new Set(g0.map((X)=>X.row_id)),Q1.current=g0;let{notificationsEnabled:e4,notificationPermission:y4,toggleNotifications:g1,notify:z_}=qj(),[R1,M1]=h(()=>new Set),[V1,m_]=h(()=>U5("workspaceOpen",!0)),u_=S(null),{editorOpen:W1,tabStripTabs:Z_,tabStripActiveId:u0,previewTabs:T1,tabPaneOverrides:E_,openEditor:Y_,closeEditor:R4,handleTabClose:r_,handleTabActivate:w4,handleTabCloseOthers:a_,handleTabCloseAll:_5,handleTabTogglePin:t_,handleTabTogglePreview:h_,handleTabEditSource:M5,revealInExplorer:I5}=Nj({onTabClosed:(X)=>u_.current?.(X)}),U1=S(null),w1=S(null),$5=S(null),M_=S(null),Q_=o0.getDockPanes().length>0,[d1,S1]=h(!1),m1=x(()=>S1((X)=>!X),[]),O1=x(()=>{Y_(r4,{label:"Terminal"})},[Y_]),I_=x(()=>{Y_(Q4,{label:"VNC"})},[Y_]),k_=C0(()=>Z_.find((X)=>X.id===u0)||Z_[0]||null,[u0,Z_]),C_=C0(()=>u0?E_.get(u0)||null:null,[E_,u0]),e_=C0(()=>q||k_?.label||Q||"Pane",[k_?.label,q,Q]),q_=C0(()=>Z_.length>1||Boolean(u0&&T1.has(u0)),[T1,u0,Z_.length]),e1=C0(()=>Q===Q4||Q.startsWith(`${Q4}/`),[Q]),P_=C0(()=>Q===r4&&!q_||e1,[e1,q_,Q]),K4=Y||!Z&&(W1||Q_&&d1),[I1,_4]=h(!1),v4=S(!1),f4=x(()=>{if(!W1||Z)return;if(v4.current=d1,d1)S1(!1);_4(!0)},[W1,Z,d1]),T_=x(()=>{if(!I1)return;if(_4(!1),v4.current)S1(!0),v4.current=!1},[I1]),b4=x(()=>{if(I1)T_();else f4()},[I1,f4,T_]);p(()=>{if(I1&&!W1)T_()},[I1,W1,T_]),p(()=>{if(!Y||!Q)return;if(a0.getActiveId()===Q)return;Y_(Q,q?{label:q}:void 0)},[Y_,q,Y,Q]),p(()=>{let X=U1.current;if(!X)return;if(w1.current)w1.current.dispose(),w1.current=null;let N=u0;if(!N)return;let O={path:N,mode:"edit"},E=(C_?o0.get(C_):null)||o0.resolve(O)||o0.get("editor");if(!E){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let D=E.mount(X,O);w1.current=D,D.onDirtyChange?.((r)=>{a0.setDirty(N,r)}),D.onSaveRequest?.(()=>{}),D.onClose?.(()=>{R4()});let m=a0.getViewState(N);if(m&&typeof D.restoreViewState==="function")requestAnimationFrame(()=>D.restoreViewState(m));if(typeof D.onViewStateChange==="function")D.onViewStateChange((r)=>{a0.saveViewState(N,r)});return requestAnimationFrame(()=>D.focus()),()=>{if(w1.current===D)D.dispose(),w1.current=null}},[u0,C_,R4]);let j5=x(async(X)=>{let N=typeof u0==="string"?u0.trim():"",O=w1.current;if(!N||!O?.setContent)return;if(typeof O.isDirty==="function"&&O.isDirty())return;if(!(Array.isArray(X)&&X.length>0?X.some((D)=>{let m=Array.isArray(D?.changed_paths)?D.changed_paths.map((t)=>typeof t==="string"?t.trim():"").filter(Boolean):[];if(m.length>0)return m.some((t)=>t==="."||t===N);let r=typeof D?.path==="string"?D.path.trim():"";return!r||r==="."||r===N}):!0))return;try{let D=await m5(N,1e6,"edit"),m=typeof D?.text==="string"?D.text:"",r=typeof D?.mtime==="string"&&D.mtime.trim()?D.mtime.trim():new Date().toISOString();O.setContent(m,r)}catch(D){console.warn("[workspace_update] Failed to refresh active pane:",D)}},[u0]);p(()=>{let X=$5.current;if(M_.current)M_.current.dispose(),M_.current=null;if(!X||!Q_||!d1)return;let N=o0.getDockPanes()[0];if(!N){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=N.mount(X,{mode:"view"});return M_.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(M_.current===O)O.dispose(),M_.current=null}},[Q_,d1]);let[p_,c_]=h({name:"You",avatar_url:null,avatar_background:null}),O4=S(null),l_=S(!1),g4=S(!1),d_=S(!1),S_=S(null),k1=S(j),J4=S(new Map),D4=S(j),m4=S(0),z1=S(0),A4=S({}),Z5=S({name:null,avatar_url:null}),u1=S({currentHashtag:null,searchQuery:null,searchOpen:!1}),V_=S(null),$4=S(null),u4=S(0),X4=S(0),E4=S(0),N4=S(null),x_=S(null),H_=S(null),M4=S(null),h4=S(0),y_=S({title:null,avatarBase:null}),z=S(null),I=S(!1),[f,b]=h(!1),s=S(0),[X0,U0]=h(!1),[L0,Q0]=h(""),S0=C0(()=>r6(L0,_1?.agent_name||""),[_1?.agent_name,L0]),v1=S(null),G_=x(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);Lj(30000),p(()=>{if(!X0)return;requestAnimationFrame(()=>{if(X0)v1.current?.focus(),v1.current?.select?.()})},[X0]),p(()=>{return R2()},[]),p(()=>{return Dj(U)},[]),p(()=>{N1("workspaceOpen",String(V1))},[V1]),p(()=>{return Oj()},[]),p(()=>{return()=>{G_()}},[G_]),p(()=>{if(!_0){N1(O3,"");return}N1(O3,JSON.stringify({question:_0.question||"",answer:_0.answer||"",thinking:_0.thinking||"",error:_0.error||null,status:_0.status||"success"}))},[_0]),p(()=>{A4.current=X_||{}},[X_]),p(()=>{k1.current=j},[j]),p(()=>{Z5.current=p_||{name:"You",avatar_url:null,avatar_background:null}},[p_]);let i1=x((X,N,O=null)=>{if(typeof document>"u")return;let E=(X||"").trim()||"PiClaw";if(y_.current.title!==E){document.title=E;let a=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(a&&a.getAttribute("content")!==E)a.setAttribute("content",E);y_.current.title=E}let D=document.getElementById("dynamic-favicon");if(!D)return;let m=D.getAttribute("data-default")||D.getAttribute("href")||"/favicon.ico",r=N||m,t=N?`${r}|${O||""}`:r;if(y_.current.avatarBase!==t){let a=N?`${r}${r.includes("?")?"&":"?"}v=${O||Date.now()}`:r;D.setAttribute("href",a),y_.current.avatarBase=t}},[]),k5=x((X)=>{if(!X)return;$0((N)=>N.includes(X)?N:[...N,X])},[]),F=x((X)=>{$0((N)=>N.filter((O)=>O!==X))},[]);u_.current=F;let g=x(()=>{$0([])},[]),o=x((X)=>{if(!Array.isArray(X)){$0([]);return}let N=[],O=new Set;for(let E of X){if(typeof E!=="string"||!E.trim())continue;let D=E.trim();if(O.has(D))continue;O.add(D),N.push(D)}$0(N)},[]),u=x((X,N=null,O="info",E=3000)=>{G_(),H({title:X,detail:N||null,kind:O||"info"}),z.current=setTimeout(()=>{H((D)=>D?.title===X?null:D)},E)},[G_]),T0=x((X)=>{let N=Fj(X,{editorOpen:W1,resolvePane:(O)=>o0.resolve(O)});if(N.kind==="open"){Y_(N.path);return}if(N.kind==="toast")u(N.title,N.detail,N.level)},[W1,Y_,u]),J1=x(()=>{let X=u0;if(X)k5(X)},[u0,k5]),x1=x((X)=>{if(!X)return;v((N)=>N.includes(X)?N:[...N,X])},[]),f1=x(async(X,N=null)=>{let O=(D)=>{D.scrollIntoView({behavior:"smooth",block:"center"}),D.classList.add("post-highlight"),setTimeout(()=>D.classList.remove("post-highlight"),2000)},E=document.getElementById("post-"+X);if(E){O(E);return}try{let D=typeof N==="string"&&N.trim()?N.trim():j,r=(await C6(X,D))?.thread?.[0];if(!r)return;n1((t)=>{if(!t)return[r];if(t.some((a)=>a.id===r.id))return t;return[...t,r]}),requestAnimationFrame(()=>{setTimeout(()=>{let t=document.getElementById("post-"+X);if(t)O(t)},50)})}catch(D){console.error("[scrollToMessage] Failed to fetch message",X,D)}},[j]),V4=x((X)=>{v((N)=>N.filter((O)=>O!==X))},[]),p4=x(()=>{v([])},[]),Y5=x((X)=>{if(!Array.isArray(X)){v([]);return}let N=[],O=new Set;for(let E of X){if(typeof E!=="string"||!E.trim())continue;let D=E.trim();if(O.has(D))continue;O.add(D),N.push(D)}v(N)},[]),Q5=x((X)=>{let N=typeof X==="string"&&X.trim()?X.trim():"Could not send your message.";u("Compose failed",N,"error",5000)},[u]),B_=x((X={})=>{let N=Date.now();if(P0.current=N,X.running)r0.current=!0,w((O)=>O?O:!0);if(X.clearSilence)s0.current=0},[w]),o1=x(()=>{if(M4.current)clearTimeout(M4.current),M4.current=null;h4.current=0},[]);p(()=>()=>{o1()},[o1]);let q5=x(()=>{o1(),c((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:N,lastActivity:O,...E}=X;return E})},[o1]),I4=x((X)=>{if(!X)return;o1();let N=Date.now();h4.current=N,c({type:X.type||"active",last_activity:!0}),M4.current=setTimeout(()=>{if(h4.current!==N)return;c((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},Bj)},[o1]),H1=x(()=>{r0.current=!1,w(!1),P0.current=null,s0.current=0,h0.current="",t0.current="",p0.current=null,x_.current=null,z0.current=null,l0.current=null,S_.current=null,g_.current={inFlight:!1,lastAttemptAt:0,turnId:null},o1(),M0(null),R0(null),Y1.current=!1,G1.current=!1},[o1,M0,R0,w]),j4=x((X)=>{if(!zj({remainingQueueCount:X,currentTurnId:z0.current,isAgentTurnActive:q0}))return;l0.current=null,R0(null)},[q0,R0]),Z8=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),G5=x(()=>({agentStatus:y,agentDraft:G0?{...G0}:{text:"",totalLines:0},agentPlan:Y0||"",agentThought:K0?{...K0}:{text:"",totalLines:0},pendingRequest:B0,currentTurnId:E0,steerQueuedTurnId:n0,isAgentTurnActive:Boolean(q0),followupQueueItems:Array.isArray(g0)?g0.map((X)=>({...X})):[],activeModel:$1,activeThinkingLevel:C1,supportsThinking:Boolean(c0),activeModelUsage:P1,contextUsage:x0,isAgentRunning:Boolean(r0.current),wasAgentActive:Boolean(d_.current),draftBuffer:h0.current||"",thoughtBuffer:t0.current||"",lastAgentEvent:P0.current||null,lastSilenceNotice:s0.current||0,lastAgentResponse:x_.current||null,currentTurnIdRef:z0.current||null,steerQueuedTurnIdRef:l0.current||null,thoughtExpanded:Boolean(Y1.current),draftExpanded:Boolean(G1.current),agentStatusRef:S_.current||null,silentRecovery:{...g_.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[$1,P1,C1,G0,Y0,y,K0,x0,E0,g0,q0,B0,n0,c0]),Y8=x((X)=>{let N=X||Z8();o1(),r0.current=Boolean(N.isAgentRunning),d_.current=Boolean(N.wasAgentActive),w(Boolean(N.isAgentTurnActive)),P0.current=N.lastAgentEvent||null,s0.current=Number(N.lastSilenceNotice||0),h0.current=N.draftBuffer||"",t0.current=N.thoughtBuffer||"",p0.current=N.pendingRequest||null,x_.current=N.lastAgentResponse||null,z0.current=N.currentTurnIdRef||null,l0.current=N.steerQueuedTurnIdRef||null,S_.current=N.agentStatusRef||null,g_.current=N.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},Y1.current=Boolean(N.thoughtExpanded),G1.current=Boolean(N.draftExpanded),c(N.agentStatus||null),d(N.agentDraft?{...N.agentDraft}:{text:"",totalLines:0}),j0(N.agentPlan||""),V0(N.agentThought?{...N.agentThought}:{text:"",totalLines:0}),O0(N.pendingRequest||null),M0(N.currentTurnId||null),R0(N.steerQueuedTurnId||null),J0(Array.isArray(N.followupQueueItems)?N.followupQueueItems.map((O)=>({...O})):[]),c1(N.activeModel||null),K1(N.activeThinkingLevel||null),y1(Boolean(N.supportsThinking)),e(N.activeModelUsage??null),v0(N.contextUsage??null)},[o1,Z8,M0,J0,w,R0]),h1=x((X)=>{if(!X)return;if(z0.current===X)return;z0.current=X,g_.current={inFlight:!1,lastAttemptAt:0,turnId:X},M0(X),l0.current=null,R0(null),h0.current="",t0.current="",d({text:"",totalLines:0}),j0(""),V0({text:"",totalLines:0}),O0(null),p0.current=null,x_.current=null,Y1.current=!1,G1.current=!1},[M0,R0]),O_=x((X)=>{if(typeof document<"u"){let a=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&a)return}let N=x_.current;if(!N||!N.post)return;if(X&&N.turnId&&N.turnId!==X)return;let O=N.post;if(O.id&&N4.current===O.id)return;let E=String(O?.data?.content||"").trim();if(!E)return;N4.current=O.id||N4.current,x_.current=null;let D=E.replace(/\s+/g," ").slice(0,200),m=A4.current||{},t=(O?.data?.agent_id?m[O.data.agent_id]:null)?.name||"Pi";z_(t,D)},[z_]),c4=x(async(X,N)=>{if(X!=="thought"&&X!=="draft")return;let O=z0.current;if(X==="thought"){if(Y1.current=N,O)try{await Cj(O,"thought",N)}catch(E){console.warn("Failed to update thought visibility:",E)}if(!N)return;try{let E=O?await kj(O,"thought"):null;if(E?.text)t0.current=E.text;V0((D)=>({...D||{text:"",totalLines:0},fullText:t0.current||D?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:D?.totalLines||0}))}catch(E){console.warn("Failed to fetch full thought:",E)}return}if(G1.current=N,O)try{await Cj(O,"draft",N)}catch(E){console.warn("Failed to update draft visibility:",E)}if(!N)return;try{let E=O?await kj(O,"draft"):null;if(E?.text)h0.current=E.text;d((D)=>({...D||{text:"",totalLines:0},fullText:h0.current||D?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:D?.totalLines||0}))}catch(E){console.warn("Failed to fetch full draft:",E)}},[]),Q8=S(null),l4=x(()=>{let X=V_.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);Q8.current=l4;let yj=x((X)=>{let N=V_.current;if(!N||typeof X!=="function"){X?.();return}let{currentHashtag:O,searchQuery:E,searchOpen:D}=u1.current||{},m=!((E||D)&&!O),r=m?N.scrollHeight-N.scrollTop:N.scrollTop;X(),requestAnimationFrame(()=>{let t=V_.current;if(!t)return;if(m){let a=Math.max(t.scrollHeight-r,0);t.scrollTop=a}else{let a=Math.max(t.scrollHeight-t.clientHeight,0),n=Math.min(r,a);t.scrollTop=n}})},[]),C5=x((X)=>{let N=V_.current;if(!N||typeof X!=="function"){X?.();return}let O=N.scrollTop;X(),requestAnimationFrame(()=>{let E=V_.current;if(!E)return;let D=Math.max(E.scrollHeight-E.clientHeight,0);E.scrollTop=Math.min(O,D)})},[]),Rj="Queued as a follow-up (one-at-a-time).",wj="⁣",J3=x((X)=>{if(!X||!Array.isArray(X))return X;let N=N_.current,O=new Set(N),E=X.filter((D)=>{if(O.has(D?.id))return!1;if(D?.data?.is_bot_message){let m=D?.data?.content;if(m===Rj||m===wj)return!1}return!0});return E.length===X.length?X:E},[]),{posts:P5,setPosts:n1,hasMore:vj,setHasMore:q8,hasMoreRef:D3,loadPosts:i_,refreshTimeline:__,loadMore:fj,loadMoreRef:Z6}=Gj({preserveTimelineScroll:yj,preserveTimelineScrollTop:C5,chatJid:j}),K5=C0(()=>J3(P5),[P5,g0,J3]),G8=x(()=>{let X=Z1.current;if(!X)return;n1((N)=>N?N.filter((O)=>O.id!==X):N),Z1.current=null},[n1]),{handleSplitterMouseDown:bj,handleSplitterTouchStart:gj,handleEditorSplitterMouseDown:mj,handleEditorSplitterTouchStart:uj,handleDockSplitterMouseDown:hj,handleDockSplitterTouchStart:pj}=Xj({appShellRef:$4,sidebarWidthRef:u4,editorWidthRef:X4,dockHeightRef:E4}),A3=x(()=>{if(!r0.current)return;r0.current=!1,s0.current=0,P0.current=null,z0.current=null,M0(null),Y1.current=!1,G1.current=!1;let X=(h0.current||"").trim();if(h0.current="",t0.current="",d({text:"",totalLines:0}),j0(""),V0({text:"",totalLines:0}),O0(null),p0.current=null,x_.current=null,!X){c({type:"error",title:"Response stalled - No content received"});return}let O=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,E=Date.now(),D=new Date().toISOString(),m={id:E,timestamp:D,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};Z1.current=E,n1((r)=>r?j8([...r,m]):[m]),Q8.current?.(),c(null)},[M0]);p(()=>{u1.current={currentHashtag:A,searchQuery:T,searchOpen:J}},[A,T,J]);let j1=x(()=>{let X=++G4.current,N=j;xj(N).then((O)=>{if(X!==G4.current)return;if(k1.current!==N)return;let E=t1.current,D=Array.isArray(O?.items)?O.items.map((m)=>({...m})).filter((m)=>!E.has(m.row_id)):[];if(D.length){J0((m)=>{if(m.length===D.length&&m.every((r,t)=>r.row_id===D[t].row_id))return m;return D});return}E.clear(),j4(0),J0((m)=>m.length===0?m:[])}).catch(()=>{if(X!==G4.current)return;if(k1.current!==N)return;J0((O)=>O.length===0?O:[])})},[j4,j,J0]),$_=x(async()=>{let X=j;try{let N=await $6(X);if(k1.current!==X)return;if(N)v0(N)}catch(N){if(k1.current!==X)return;console.warn("Failed to fetch agent context:",N)}},[j]),W_=x(async()=>{let X=j;try{let N=await $K(X);if(k1.current!==X)return;let O=Array.isArray(N?.content)?N.content.find((E)=>E?.type==="status_panel"&&E?.panel):null;f0((E)=>{let D=new Map(E);if(N?.key&&O?.panel)D.set(N.key,O.panel);else D.delete("autoresearch");return D}),D0((E)=>{if(E.size===0)return E;let D=new Set(Array.from(E).filter((m)=>!String(m).startsWith("autoresearch:")));return D.size===E.size?E:D})}catch(N){if(k1.current!==X)return;console.warn("Failed to fetch autoresearch status:",N)}},[j]),R_=x(async()=>{let X=j;try{let N=await H3(X);if(k1.current!==X)return null;if(!N||N.status!=="active"||!N.data){if(d_.current){let{currentHashtag:D,searchQuery:m,searchOpen:r}=u1.current||{};if(!D&&!m&&!r)__()}return d_.current=!1,H1(),S_.current=null,c(null),d({text:"",totalLines:0}),j0(""),V0({text:"",totalLines:0}),O0(null),p0.current=null,N??null}d_.current=!0;let O=N.data;S_.current=O;let E=O.turn_id||O.turnId;if(E)h1(E);if(B_({running:!0,clearSilence:!0}),q5(),c(O),N.thought&&N.thought.text)V0((D)=>{if(D&&D.text&&D.text.length>=N.thought.text.length)return D;return t0.current=N.thought.text,{text:N.thought.text,totalLines:N.thought.totalLines||0}});if(N.draft&&N.draft.text)d((D)=>{if(D&&D.text&&D.text.length>=N.draft.text.length)return D;return h0.current=N.draft.text,{text:N.draft.text,totalLines:N.draft.totalLines||0}});return N}catch(N){return console.warn("Failed to fetch agent status:",N),null}},[H1,q5,B_,__,h1]),Y6=x(async()=>{if(!r0.current)return null;if(p0.current)return null;let X=z0.current||null,N=g_.current,O=Date.now();if(N.inFlight)return null;if(N.turnId===X&&O-N.lastAttemptAt<W3)return null;N.inFlight=!0,N.lastAttemptAt=O,N.turnId=X;try{let{currentHashtag:E,searchQuery:D,searchOpen:m}=u1.current||{};if(!E&&!D&&!m)await __();return await j1(),await R_()}finally{N.inFlight=!1}},[R_,j1,__]);p(()=>{let X=Math.min(1000,Math.max(100,Math.floor(B3/2))),N=setInterval(()=>{if(!r0.current)return;if(p0.current)return;let O=P0.current;if(!O)return;let E=Date.now(),D=E-O,m=W4(S_.current);if(D>=Vj){if(!m)c({type:"waiting",title:"Re-syncing after a quiet period…"});Y6();return}if(D>=B3){if(E-s0.current>=W3){if(!m){let r=Math.floor(D/1000);c({type:"waiting",title:`Waiting for model… No events for ${r}s`})}s0.current=E,Y6()}}},X);return()=>clearInterval(N)},[Y6]);let E3=x((X)=>{let N=typeof X==="string"&&X.trim()?X.trim():null;if(!N||!Ej||N===Ej)return!1;if(O4.current===N)return!0;O4.current=N;let O=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!a0.hasUnsaved()&&!O&&!r0.current&&!p0.current&&!l_.current)return l_.current=!0,u("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{l_.current=!1}},350),!0;return u("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[r0,p0,u]),cj=x((X)=>{if(B(X),X!=="connected"){c(null),d({text:"",totalLines:0}),j0(""),V0({text:"",totalLines:0}),O0(null),p0.current=null,H1();return}if(!g4.current){g4.current=!0;let{currentHashtag:D,searchQuery:m,searchOpen:r}=u1.current||{};if(!D&&!m&&!r)__();R_(),j1(),$_();return}let{currentHashtag:N,searchQuery:O,searchOpen:E}=u1.current;if(!N&&!O&&!E)__();R_(),j1(),$_()},[H1,__,R_,j1,$_]),lj=x(async(X)=>{C(X),n1(null),await i_(X)},[i_]),dj=x(async()=>{C(null),M(null),n1(null),await i_()},[i_]),ij=x(async(X,N=P)=>{if(!X||!X.trim())return;let O=N==="root"||N==="all"?N:"current";i(O),M(X.trim()),C(null),n1(null);try{let E=await Mj(X.trim(),50,0,j,O,l1);n1(E.results),q8(!1)}catch(E){console.error("Failed to search:",E),n1([])}},[j,l1,P]),oj=x(()=>{k(!0),M(null),C(null),i("current"),n1([])},[]),nj=x(()=>{k(!1),M(null),i_()},[i_]),VK=x(()=>{},[]),Q6=!A&&!T&&!J,sj=x(async(X)=>{if(!X)return;let N=X.id,O=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():j,E=K5?.filter((m)=>m?.data?.thread_id===N&&m?.id!==N).length||0;if(E>0){if(!window.confirm(`Delete this message and its ${E} replies?`))return}let D=(m)=>{if(!m.length)return;M1((t)=>{let a=new Set(t);return m.forEach((n)=>a.add(n)),a}),setTimeout(()=>{if(C5(()=>{n1((t)=>t?t.filter((a)=>!m.includes(a.id)):t)}),M1((t)=>{let a=new Set(t);return m.forEach((n)=>a.delete(n)),a}),D3.current)Z6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let m=await Ij(N,E>0,O);if(m?.ids?.length)D(m.ids)}catch(m){let r=m?.message||"";if(E===0&&r.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let a=await Ij(N,!0,O);if(a?.ids?.length)D(a.ids);return}console.error("Failed to delete post:",m),alert(`Failed to delete message: ${r}`)}},[j,K5,C5]),M3=x(async()=>{try{let X=await _K();A1(Wj(X));let N=X?.user||{};c_((E)=>{let D=typeof N.name==="string"&&N.name.trim()?N.name.trim():"You",m=typeof N.avatar_url==="string"?N.avatar_url.trim():null,r=typeof N.avatar_background==="string"&&N.avatar_background.trim()?N.avatar_background.trim():null;if(E.name===D&&E.avatar_url===m&&E.avatar_background===r)return E;return{name:D,avatar_url:m,avatar_background:r}});let O=(X?.agents||[]).find((E)=>E.id==="default");i1(O?.name,O?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=j,N=await $6(X);if(k1.current!==X)return;if(N)v0(N)}catch{}},[i1,j]);p(()=>{M3();let X=L5("sidebarWidth",null),N=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(u4.current=N,$4.current)$4.current.style.setProperty("--sidebar-width",`${N}px`)},[M3]);let T5=q0||y!==null,I3=x((X)=>{if(!X||typeof X!=="object")return;let N=X.agent_id;if(!N)return;let{agent_name:O,agent_avatar:E}=X;if(!O&&E===void 0)return;let D=A4.current?.[N]||{id:N},m=D.name||null,r=D.avatar_url??D.avatarUrl??D.avatar??null,t=!1,a=!1;if(O&&O!==D.name)m=O,a=!0;if(E!==void 0){let n=typeof E==="string"?E.trim():null,A0=typeof r==="string"?r.trim():null,b0=n||null;if(b0!==(A0||null))r=b0,t=!0}if(!a&&!t)return;if(A1((n)=>{let b0={...n[N]||{id:N}};if(a)b0.name=m;if(t)b0.avatar_url=r;return{...n,[N]:b0}}),N==="default")i1(m,r,t?Date.now():null)},[i1]),k3=x((X)=>{if(!X||typeof X!=="object")return;let N=X.user_name??X.userName,O=X.user_avatar??X.userAvatar,E=X.user_avatar_background??X.userAvatarBackground;if(N===void 0&&O===void 0&&E===void 0)return;c_((D)=>{let m=typeof N==="string"&&N.trim()?N.trim():D.name||"You",r=O===void 0?D.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,t=E===void 0?D.avatar_background:typeof E==="string"&&E.trim()?E.trim():null;if(D.name===m&&D.avatar_url===r&&D.avatar_background===t)return D;return{name:m,avatar_url:r,avatar_background:t}})},[]),q6=x((X)=>{if(!X||typeof X!=="object")return;let N=X.model??X.current;if(N!==void 0)c1(N);if(X.thinking_level!==void 0)K1(X.thinking_level??null);if(X.supports_thinking!==void 0)y1(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)e(X.provider_usage??null)},[]),S5=x(()=>{let X=j;Pj(X).then((N)=>{if(k1.current!==X)return;if(N)q6(N)}).catch(()=>{})},[q6,j]),s1=x(()=>{let X=j,N=(O)=>Array.isArray(O)?O.filter((E)=>E&&typeof E.chat_jid==="string"&&typeof E.agent_name==="string"&&E.agent_name.trim()):[];Promise.all([Tj().catch(()=>({chats:[]})),j6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,E])=>{if(k1.current!==X)return;let D=N(O?.chats),m=N(E?.chats);if(m.length===0){H0(D);return}let r=new Map(D.map((a)=>[a.chat_jid,a])),t=m.map((a)=>{let n=r.get(a.chat_jid);return n?{...a,...n,is_active:n.is_active??a.is_active}:a});t.sort((a,n)=>{if(a.chat_jid===X&&n.chat_jid!==X)return-1;if(n.chat_jid===X&&a.chat_jid!==X)return 1;let A0=Boolean(a.archived_at),b0=Boolean(n.archived_at);if(A0!==b0)return A0?1:-1;if(Boolean(a.is_active)!==Boolean(n.is_active))return a.is_active?-1:1;return String(a.chat_jid).localeCompare(String(n.chat_jid))}),H0(t)}).catch(()=>{if(k1.current!==X)return;H0([])})},[j]),p1=x(()=>{j6(l1).then((X)=>{let N=Array.isArray(X?.chats)?X.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];w0(N)}).catch(()=>{})},[l1]),C3=x((X)=>{let N=X?.row_id;if(N==null)return;t1.current.add(N),J0((O)=>O.filter((E)=>E?.row_id!==N)),qK(N,L3(j)).then(()=>{j1()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),u("Failed to steer message","The queued message could not be sent as steering.","warning"),t1.current.delete(N),j1()})},[j,j1,J0,u]),P3=x((X)=>{let N=X?.row_id;if(N==null)return;let O=Q1.current.filter((E)=>E?.row_id!==N).length;t1.current.add(N),j4(O),J0((E)=>E.filter((D)=>D?.row_id!==N)),GK(N,L3(j)).then(()=>{j1()}).catch((E)=>{console.warn("[queue] Failed to remove queued item:",E),u("Failed to remove message","The queued message could not be removed.","warning"),t1.current.delete(N),j1()})},[j4,j,j1,J0,u]),x5=x((X)=>{if(!X||typeof X!=="object")return;if(s1(),p1(),$_(),W_(),X?.queued==="followup"||X?.queued==="steer"){j1();return}let N=X?.command;if(N&&typeof N==="object"&&(N?.queued_followup||N?.queued_steer))j1()},[s1,W_,p1,$_,j1]),rj=x(async(X,N)=>{let O=typeof X?.key==="string"?X.key:"",E=typeof N?.key==="string"?N.key:"",D=`${O}:${E}`;if(!O||!E)return;D0((m)=>{if(m.has(D))return m;let r=new Set(m);return r.add(D),r});try{if(N?.action_type==="autoresearch.stop"){await jK(j,{generateReport:!0}),W_();return}if(N?.action_type==="autoresearch.dismiss"){await ZK(j),W_();return}if(N?.action_type==="autoresearch.copy_tmux"){let m=typeof X?.tmux_command==="string"?X.tmux_command.trim():"";if(!m)throw Error("No tmux command available.");await navigator.clipboard.writeText(m),u("Copied","tmux command copied to clipboard.","success");return}throw Error(`Unsupported panel action: ${N?.action_type||E}`)}catch(m){u("Panel action failed",m?.message||"Could not complete that action.","warning")}finally{D0((m)=>{if(!m.has(D))return m;let r=new Set(m);return r.delete(D),r})}},[j,W_,u]),G6=x(()=>{if(H_.current)H_.current.abort(),H_.current=null;F0(null)},[]),K8=x(async(X)=>{let N=String(X||"").trim();if(!N)return u("BTW needs a question","Usage: /btw <question>","warning"),!0;if(H_.current)H_.current.abort();let O=new AbortController;H_.current=O,F0({question:N,answer:"",thinking:"",error:null,model:null,status:"running"});try{let E=await KK(N,{signal:O.signal,chatJid:c2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(D,m)=>{if(D==="side_prompt_start")F0((r)=>r?{...r,status:"running"}:r)},onThinkingDelta:(D)=>{F0((m)=>m?{...m,thinking:`${m.thinking||""}${D||""}`}:m)},onTextDelta:(D)=>{F0((m)=>m?{...m,answer:`${m.answer||""}${D||""}`}:m)}});if(H_.current!==O)return!0;F0((D)=>D?{...D,answer:E?.result||D.answer||"",thinking:E?.thinking||D.thinking||"",model:E?.model||null,status:"success",error:null}:D)}catch(E){if(O.signal.aborted)return!0;F0((D)=>D?{...D,status:"error",error:E?.payload?.error||E?.message||"BTW request failed."}:D)}finally{if(H_.current===O)H_.current=null}return!0},[j,u]),aj=x(async({content:X})=>{let N=p2(X);if(!N)return!1;if(N.type==="help")return u("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(N.type==="clear")return G6(),u("BTW cleared","Closed the side conversation panel.","info"),!0;if(N.type==="ask")return await K8(N.question),!0;return!1},[G6,K8,u]),tj=x(()=>{if(_0?.question)K8(_0.question)},[_0,K8]),ej=x(async()=>{let X=i2(_0);if(!X)return;try{let N=await i4("default",X,null,[],T5?"queue":null,j);x5(N),u(N?.queued==="followup"?"BTW queued":"BTW injected",N?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(N){u("BTW inject failed",N?.message||"Could not inject BTW answer into chat.","warning")}},[_0,x5,T5,u]),T3=x(async(X=null)=>{let[N,O,E,D,m,r,t]=await Promise.allSettled([H3(j),$6(j),xj(j),Pj(j),Tj(),j6(l1),d4(20,null,j)]),a=N.status==="fulfilled"?N.value:null,n=O.status==="fulfilled"?O.value:null,A0=E.status==="fulfilled"?E.value:null,b0=D.status==="fulfilled"?D.value:null,B1=m.status==="fulfilled"?m.value:null,q1=r.status==="fulfilled"?r.value:null,w_=t.status==="fulfilled"?t.value:null,v_=Array.isArray(w_?.posts)?w_.posts:Array.isArray(P5)?P5:[],w3=v_.length?v_[v_.length-1]:null,GZ=v_.filter((V6)=>V6?.data?.is_bot_message).length,KZ=v_.filter((V6)=>!V6?.data?.is_bot_message).length,v3=Number(A0?.count??Q1.current.length??0)||0,f3=Array.isArray(B1?.chats)?B1.chats.length:W0.length,XZ=Array.isArray(q1?.chats)?q1.chats.length:N0.length,b3=Number(n?.percent??x0?.percent??0)||0,NZ=Number(n?.tokens??x0?.tokens??0)||0,VZ=Number(n?.contextWindow??x0?.contextWindow??0)||0,BZ=b0?.current??$1??null,WZ=b0?.thinking_level??C1??null,UZ=b0?.supports_thinking??c0,LZ=a?.status||(q0?"active":"idle"),FZ=a?.data?.type||a?.type||null;return{generatedAt:new Date().toISOString(),request:X,chat:{currentChatJid:j,rootChatJid:l1,activeChats:f3,branches:XZ},agent:{status:LZ,phase:FZ,running:Boolean(q0)},model:{current:BZ,thinkingLevel:WZ,supportsThinking:Boolean(UZ)},context:{tokens:NZ,contextWindow:VZ,percent:b3},queue:{count:v3},timeline:{loadedPosts:v_.length,botPosts:GZ,userPosts:KZ,latestPostId:w3?.id??null,latestTimestamp:w3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(b3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,v3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,f3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,v_.length*5))}]}},[W0,$1,C1,x0,N0,j,l1,q0,P5,c0]),y5=x(()=>{S5(),s1(),p1(),j1(),$_(),W_()},[S5,s1,p1,j1,$_,W_]);p(()=>{y5();let X=setInterval(()=>{S5(),s1(),p1(),j1()},60000);return()=>clearInterval(X)},[y5,S5,s1,p1,j1]),p(()=>{p1()},[p1]),p(()=>{f0(new Map),D0(new Set),W_()},[j,W_]),p(()=>{let X=!1,N=()=>{if(X)return;requestAnimationFrame(()=>{if(X)return;l4()})};if(A)return i_(A),()=>{X=!0};if(T)return Mj(T,50,0,j,P,l1).then((O)=>{if(X)return;n1(O.results),q8(!1)}).catch((O)=>{if(X)return;console.error("Failed to search:",O),n1([]),q8(!1)}),()=>{X=!0};return i_().then(()=>{N()}).catch((O)=>{if(X)return;console.error("Failed to load timeline:",O)}),()=>{X=!0}},[j,A,T,P,l1,i_,l4,q8,n1]),p(()=>{let X=D4.current||j;J4.current.set(X,G5())},[j,G5]),p(()=>{let X=D4.current||j;if(X===j)return;J4.current.set(X,G5()),D4.current=j,t1.current.clear(),Y8(J4.current.get(j)||null),j1(),R_(),$_()},[j,R_,$_,j1,Y8,G5]);let _Z=x(()=>{let{currentHashtag:X,searchQuery:N,searchOpen:O}=u1.current||{};if(!X&&!N&&!O)__();y5()},[y5,__]),R5=x((X,N="streaming")=>{let O=a2({...X,...X&&X.status?{}:{status:N}});if(!O)return;let E=r1(O);if(E&&X1.current.has(E))return;m0((D)=>{let m=r1(D),r=Boolean(E&&m&&E===m),t={...r&&D?.artifact?D.artifact:{},...O.artifact||{}};return{...r&&D?D:{},...O,artifact:t,source:"live",originChatJid:O.originChatJid||j,openedAt:r&&D?.openedAt?D.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),K6=x((X,N)=>{let O=N?.turn_id,E=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null,m=E?E===j:X==="connected"||X==="workspace_update";if(m)I3(N),k3(N);if(X==="ui_theme"){w2(N);return}if(X==="generated_widget_open"){if(!m)return;if(O&&!z0.current)h1(O);R5(N,"loading");return}if(X==="generated_widget_delta"){if(!m)return;if(O&&!z0.current)h1(O);R5(N,"streaming");return}if(X==="generated_widget_final"){if(!m)return;if(O&&!z0.current)h1(O);R5(N,"final");return}if(X==="generated_widget_error"){if(!m)return;R5(N,"error");return}if(X==="generated_widget_close"){if(!m)return;let n=r1(N);m0((A0)=>{if(!A0||A0?.source!=="live")return A0;let b0=r1(A0);if(n&&b0&&n!==b0)return A0;return null});return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))q5()}if(X==="connected"){if(E3(N?.app_asset_version))return;c(null),d({text:"",totalLines:0}),j0(""),V0({text:"",totalLines:0}),O0(null),p0.current=null,H1();let n=j;H3(n).then((q1)=>{if(k1.current!==n)return;if(!q1||q1.status!=="active"||!q1.data)return;let w_=q1.data,v_=w_.turn_id||w_.turnId;if(v_)h1(v_);if(B_({clearSilence:!0}),I4(w_),q1.thought&&q1.thought.text)t0.current=q1.thought.text,V0({text:q1.thought.text,totalLines:q1.thought.totalLines||0});if(q1.draft&&q1.draft.text)h0.current=q1.draft.text,d({text:q1.draft.text,totalLines:q1.draft.totalLines||0})}).catch((q1)=>{console.warn("Failed to fetch agent status:",q1)});let{currentHashtag:A0,searchQuery:b0,searchOpen:B1}=u1.current||{};if(!A0&&!b0&&!B1)__();y5();return}if(X==="agent_status"){if(!m){if(N?.type==="done"||N?.type==="error")s1(),p1();return}if(N.type==="done"||N.type==="error"){if(O&&z0.current&&O!==z0.current)return;if(N.type==="done"){O_(O||z0.current);let{currentHashtag:n,searchQuery:A0,searchOpen:b0}=u1.current||{};if(!n&&!A0&&!b0)__();if(N.context_usage)v0(N.context_usage)}if($_(),d_.current=!1,H1(),t1.current.clear(),s1(),j1(),d({text:"",totalLines:0}),j0(""),V0({text:"",totalLines:0}),O0(null),N.type==="error")c({type:"error",title:N.title||"Agent error"}),setTimeout(()=>c(null),8000);else c(null)}else{if(O)h1(O);if(B_({running:!0,clearSilence:!0}),N.type==="thinking")h0.current="",t0.current="",d({text:"",totalLines:0}),j0(""),V0({text:"",totalLines:0});S_.current=N,c((n)=>{if(n&&n.type===N.type&&n.title===N.title)return n;return N})}return}if(X==="agent_steer_queued"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;let n=O||z0.current;if(!n)return;l0.current=n,R0(n);return}if(X==="agent_followup_queued"){if(!m)return;let n=N?.row_id,A0=N?.content;if(n!=null&&typeof A0==="string"&&A0.trim())J0((b0)=>{if(b0.some((B1)=>B1?.row_id===n))return b0;return[...b0,{row_id:n,content:A0,timestamp:N?.timestamp||null,thread_id:N?.thread_id??null}]});j1();return}if(X==="agent_followup_consumed"){if(!m)return;let n=N?.row_id;if(n!=null){let q1=Q1.current.filter((w_)=>w_.row_id!==n).length;j4(q1),J0((w_)=>w_.filter((v_)=>v_.row_id!==n))}j1();let{currentHashtag:A0,searchQuery:b0,searchOpen:B1}=u1.current||{};if(!A0&&!b0&&!B1)__();return}if(X==="agent_followup_removed"){if(!m)return;let n=N?.row_id;if(n!=null){let A0=Q1.current.filter((b0)=>b0.row_id!==n).length;t1.current.add(n),j4(A0),J0((b0)=>b0.filter((B1)=>B1.row_id!==n))}j1();return}if(X==="agent_draft_delta"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)h1(O);if(B_({running:!0,clearSilence:!0}),N?.reset)h0.current="";if(N?.delta)h0.current+=N.delta;let n=Date.now();if(!m4.current||n-m4.current>=100){m4.current=n;let A0=h0.current,b0=U3(A0);if(G1.current)d((B1)=>({text:B1?.text||"",totalLines:b0,fullText:A0}));else d({text:A0,totalLines:b0})}return}if(X==="agent_draft"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)h1(O);B_({running:!0,clearSilence:!0});let n=N.text||"",A0=N.mode||(N.kind==="plan"?"replace":"append"),b0=Number.isFinite(N.total_lines)?N.total_lines:n?n.replace(/\r\n/g,`
`).split(`
`).length:0;if(N.kind==="plan")if(A0==="replace")j0(n);else j0((B1)=>(B1||"")+n);else if(!G1.current)h0.current=n,d({text:n,totalLines:b0});return}if(X==="agent_thought_delta"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)h1(O);if(B_({running:!0,clearSilence:!0}),N?.reset)t0.current="";if(typeof N?.delta==="string")t0.current+=N.delta;let n=Date.now();if(Y1.current&&(!z1.current||n-z1.current>=100)){z1.current=n;let A0=t0.current;V0((b0)=>({text:b0?.text||"",totalLines:U3(A0),fullText:A0}))}return}if(X==="agent_thought"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)h1(O);B_({running:!0,clearSilence:!0});let n=N.text||"",A0=Number.isFinite(N.total_lines)?N.total_lines:n?n.replace(/\r\n/g,`
`).split(`
`).length:0;if(!Y1.current)t0.current=n,V0({text:n,totalLines:A0});return}if(X==="model_changed"){if(!m)return;if(N?.model!==void 0)c1(N.model);if(N?.thinking_level!==void 0)K1(N.thinking_level??null);if(N?.supports_thinking!==void 0)y1(Boolean(N.supports_thinking));let n=j;$6(n).then((A0)=>{if(k1.current!==n)return;if(A0)v0(A0)}).catch(()=>{});return}if(X==="extension_ui_widget"&&N?.options?.surface==="status-panel"){if((typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():j)!==j)return;let A0=typeof N?.key==="string"?N.key:"",b0=Array.isArray(N?.content)?N.content.find((B1)=>B1?.type==="status_panel"&&B1?.panel):null;if(!A0)return;if(f0((B1)=>{let q1=new Map(B1);if(N?.options?.remove||!b0?.panel)q1.delete(A0);else q1.set(A0,b0.panel);return q1}),N?.options?.remove||b0?.panel?.state!=="running")D0((B1)=>{if(B1.size===0)return B1;let q1=new Set(Array.from(B1).filter((w_)=>!String(w_).startsWith(`${A0}:`)));return q1.size===B1.size?B1:q1});F3(X,N);return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:N}));j5(N?.updates);return}if(Jj(X)){if(!m)return;if(F3(X,N),X==="extension_ui_notify"&&typeof N?.message==="string")u(N.message,null,N?.type||"info");if(X==="extension_ui_error"&&typeof N?.error==="string")u("Extension UI error",N.error,"error",5000);return}let{currentHashtag:r,searchQuery:t,searchOpen:a}=u1.current;if(X==="agent_response"){if(!m)return;G8(),x_.current={post:N,turnId:z0.current}}if(!r&&!t&&!a&&m&&(X==="new_post"||X==="new_reply"||X==="agent_response"))n1((n)=>{if(!n)return[N];if(n.some((A0)=>A0.id===N.id))return n;return[...n,N]}),Q8.current?.();if(X==="interaction_updated"){if(!m)return;if(r||t||a)return;n1((n)=>{if(!n)return n;if(!n.some((A0)=>A0.id===N.id))return n;return n.map((A0)=>A0.id===N.id?N:A0)})}if(X==="interaction_deleted"){if(!m)return;if(r||t||a)return;let n=N?.ids||[];if(n.length){if(C5(()=>{n1((A0)=>A0?A0.filter((b0)=>!n.includes(b0.id)):A0)}),D3.current)Z6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[R5,H1,q5,j,Z6,B_,O_,C5,s1,p1,__,G8,h1,I4,I3,k3,S5,j1,J0,$_,E3]);p(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=K6,X.reset=()=>{G8(),H1(),c(null),d({text:"",totalLines:0}),j0(""),V0({text:"",totalLines:0}),O0(null)},X.finalize=()=>A3(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[H1,A3,K6,G8]),Qj({handleSseEvent:K6,handleConnectionStatusChange:cj,loadPosts:i_,onWake:_Z,chatJid:j}),p(()=>{if(!K5||K5.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let N=X.slice(5);f1(N),history.replaceState(null,"",location.pathname+location.search)},[K5,f1]);let X6=y!==null;p(()=>{if(K!=="connected")return;let N=setInterval(()=>{let{currentHashtag:O,searchQuery:E,searchOpen:D}=u1.current||{},m=!O&&!E&&!D;if(X6){if(m)__();j1(),R_(),$_(),W_()}else{if(m)__();R_(),$_(),W_()}},X6?15000:60000);return()=>clearInterval(N)},[K,X6,R_,W_,$_,j1,__]),p(()=>{return Aj(()=>{R_(),$_(),j1(),W_()})},[R_,W_,$_,j1]);let $Z=x(()=>{m_((X)=>!X)},[]),S3=x((X)=>{if(typeof window>"u")return;let N=String(X||"").trim();if(!N||N===j)return;let O=a4(window.location.href,N,{chatOnly:Z});$?.(O)},[Z,j,$]),N6=x(()=>{if(typeof window>"u"||!_1?.chat_jid)return;let X=Date.now(),N=z3();if(!N)return;if(I.current||X<s.current||N.inFlight||X<N.cooldownUntil)return;Q0(_1.agent_name||""),U0(!0)},[_1]),w5=x(()=>{U0(!1),Q0("")},[]),x3=x(async(X)=>{if(typeof window>"u"||!_1?.chat_jid)return;if(typeof X!=="string"){N6();return}let N=Date.now(),O=z3();if(!O)return;if(I.current||N<s.current||O.inFlight||N<O.cooldownUntil)return;I.current=!0,O.inFlight=!0,b(!0);try{let E=_1.agent_name||"",D=r6(X,E);if(!D.canSubmit){u("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000);return}let m=D.normalized||E,r=await YK(_1.chat_jid,{agentName:m});await Promise.allSettled([s1(),p1()]);let t=r?.branch?.agent_name||m||E;u("Branch renamed",`@${t}`,"info",3500),w5()}catch(E){let D=E instanceof Error?E.message:String(E||"Could not rename branch."),m=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;u("Could not rename branch",m||"Could not rename branch.","warning",5000)}finally{I.current=!1,b(!1);let E=Date.now()+rG;s.current=E;let D=z3();if(D)D.inFlight=!1,D.cooldownUntil=E}},[w5,_1,s1,p1,N6,b,u]),y3=x(async(X=null)=>{if(typeof window>"u")return;let N=typeof X==="string"&&X.trim()?X.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",E=N||_1?.chat_jid||O;if(!E){u("Could not prune branch","No active session is selected yet.","warning",4000);return}let D=(_1?.chat_jid===E?_1:null)||N0.find((a)=>a?.chat_jid===E)||W0.find((a)=>a?.chat_jid===E)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid)){u("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let r=`@${D?.agent_name||E}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!window.confirm(`Prune ${r}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await QK(E),await Promise.allSettled([s1(),p1()]);let a=D?.root_chat_jid||"web:default";u("Branch pruned",`${r} has been archived.`,"info",3000);let n=a4(window.location.href,a,{chatOnly:Z});$?.(n)}catch(a){let n=a instanceof Error?a.message:String(a||"Could not prune branch.");u("Could not prune branch",n||"Could not prune branch.","warning",5000)}},[W0,Z,_1,N0,j,$,s1,p1,u]),jZ=x(async(X)=>{let N=typeof X==="string"?X.trim():"";if(!N||typeof Sj!=="function")return;try{let O=N0.find((a)=>a?.chat_jid===N)||null,E=await Sj(N);await Promise.allSettled([s1(),p1()]);let D=E?.branch,m=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():N,r=O2(O?.agent_name,D?.agent_name,m);u("Branch restored",r,"info",4200);let t=a4(window.location.href,m,{chatOnly:Z});$?.(t)}catch(O){let E=O instanceof Error?O.message:String(O||"Could not restore branch.");u("Could not restore branch",E||"Could not restore branch.","warning",5000)}},[Z,N0,$,s1,p1,u]);p(()=>{if(!G||typeof window>"u")return;let X=!1;return(async()=>{try{a1({status:"running",message:"Preparing a new chat branch…"});let N=await f5(V);if(X)return;let O=N?.branch,E=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let D=a4(window.location.href,E,{chatOnly:!0});$?.(D,{replace:!0})}catch(N){if(X)return;a1({status:"error",message:i8(N)})}})(),()=>{X=!0}},[G,V,$]);let ZZ=x((X)=>{if(!X||typeof X!=="object")return;let N=r1(X);if(N)X1.current.delete(N);m0({...X,openedAt:new Date().toISOString()})},[]),v5=x(()=>{m0((X)=>{let N=r1(X);if(X?.source==="live"&&N)X1.current.add(N);return null})},[]),YZ=x((X,N)=>{let O=typeof X?.kind==="string"?X.kind:"",E=r1(N);if(!O||!E)return;if(O==="widget.close"){v5();return}if(O==="widget.submit"){let D=$7(X?.payload),m=j7(X?.payload),r=new Date().toISOString();if(m0((t)=>{let a=r1(t);if(!t||a!==E)return t;return{...t,runtimeState:{...t.runtimeState||{},lastEventKind:O,lastEventPayload:X?.payload||null,lastSubmitAt:r,lastHostUpdate:{type:"submit_pending",submittedAt:r,preview:D||null}}}}),!D){if(u("Widget submission received","The widget submitted data without a message payload yet.","info",3500),m)v5();return}(async()=>{try{let t=await i4("default",D,null,[],T5?"queue":null,j);if(x5(t),m0((a)=>{let n=r1(a);if(!a||n!==E)return a;return{...a,runtimeState:{...a.runtimeState||{},lastHostUpdate:{type:t?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:r,preview:D,queued:t?.queued||null}}}}),u(t?.queued==="followup"?"Widget submission queued":"Widget submission sent",t?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),m)v5()}catch(t){m0((a)=>{let n=r1(a);if(!a||n!==E)return a;return{...a,runtimeState:{...a.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:r,preview:D,error:t?.message||"Could not send the widget message."}}}}),u("Widget submission failed",t?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let D=new Date().toISOString(),m=Boolean(X?.payload?.buildDashboard||X?.payload?.dashboardKind==="internal-state"),r=Number(N?.runtimeState?.refreshCount||0)+1;if(m0((t)=>{let a=r1(t);if(!t||a!==E)return t;return{...t,runtimeState:{...t.runtimeState||{},lastEventKind:O,lastEventPayload:X?.payload||null,...O==="widget.ready"?{readyAt:D,lastHostUpdate:{type:"ready_ack",at:D}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:D,refreshCount:r,lastHostUpdate:{type:m?"refresh_building":"refresh_ack",at:D,count:r,echo:X?.payload||null}}:{}}}}),O==="widget.request_refresh")if(m)(async()=>{try{let t=await T3(X?.payload||null);m0((a)=>{let n=r1(a);if(!a||n!==E)return a;return{...a,runtimeState:{...a.runtimeState||{},dashboard:t,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:r,echo:X?.payload||null}}}}),u("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(t){m0((a)=>{let n=r1(a);if(!a||n!==E)return a;return{...a,runtimeState:{...a.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:r,error:t?.message||"Could not build dashboard."}}}}),u("Dashboard build failed",t?.message||"Could not build dashboard.","warning",5000)}})();else u("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[T3,j,v5,x5,T5,u]);p(()=>{X1.current.clear(),m0(null)},[j]);let QZ=x(async()=>{if(typeof window>"u")return;try{let N=(await f5(j))?.branch,O=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([s1(),p1()]);let E=N?.agent_name?`@${N.agent_name}`:O;u("New branch created",`Switched to ${E}.`,"info",2500);let D=a4(window.location.href,O,{chatOnly:Z});$?.(D)}catch(X){u("Could not create branch",i8(X),"warning",5000)}},[Z,j,$,s1,p1,u]),X8=x(async(X,N)=>{if(typeof window>"u"||W)return;let O=typeof X==="string"&&X.trim()?X.trim():"";if(!O)return;let E=()=>{let t=a0.get(O);if(t&&!t.dirty){r_(O);return}if(O===r4&&d1)S1(!1)},D=R7(O);if(!D){u("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let m=O$(D);if(!m){u("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}J$(m,{title:typeof N==="string"&&N.trim()?`Opening ${N}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});let r=null;try{let a=(typeof u0==="string"?u0.trim():"")===O?w1.current:O===r4?M_.current:null;if(typeof a?.preparePopoutTransfer==="function")r=await a.preparePopoutTransfer();let n=y7(window.location.href,O,{label:typeof N==="string"&&N.trim()?N.trim():void 0,chatJid:j,params:r});D$(m,n),E()}catch(t){A$(m);let a=t?.message||"Could not transfer pane state to the new window.";u("Could not open pane window",a,"warning",5000)}},[j,d1,r_,W,u,u0]);p(()=>{let X=(O)=>{let E=O.detail?.path,D=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(E)Y_(E,D?{label:D}:void 0)},N=(O)=>{let E=O.detail?.path,D=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(E)X8(E,D)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),document.addEventListener("csv-viewer:open-tab",X),document.addEventListener("pdf-viewer:open-tab",X),document.addEventListener("image-viewer:open-tab",X),document.addEventListener("video-viewer:open-tab",X),document.addEventListener("vnc:open-tab",X),document.addEventListener("pane:popout",N),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X),document.removeEventListener("csv-viewer:open-tab",X),document.removeEventListener("pdf-viewer:open-tab",X),document.removeEventListener("image-viewer:open-tab",X),document.removeEventListener("video-viewer:open-tab",X),document.removeEventListener("vnc:open-tab",X),document.removeEventListener("pane:popout",N)}},[X8,Y_]);let qZ=x(async()=>{if(typeof window>"u"||W)return;let X=S7(j);if(!X){u("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let O=x7(window.location.href,j,{chatOnly:!0});if(!window.open(O,X.target))u("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let N=O$(X);if(!N){u("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}J$(N,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await f5(j))?.branch,D=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");try{let r=await T6();H0(Array.isArray(r?.chats)?r.chats:[])}catch{}try{let r=await j6(l1);w0(Array.isArray(r?.chats)?r.chats:[])}catch{}let m=a4(window.location.href,D,{chatOnly:!0});D$(N,m)}catch(O){A$(N),u("Could not open branch window",i8(O),"error",5000)}},[j,l1,W,u]);p(()=>{if(!W1)return;if(typeof window>"u")return;let X=$4.current;if(!X)return;if(!X4.current){let N=L5("editorWidth",null),O=u4.current||280;X4.current=Number.isFinite(N)?N:O}if(X.style.setProperty("--editor-width",`${X4.current}px`),!E4.current){let N=L5("dockHeight",null);E4.current=Number.isFinite(N)?N:200}X.style.setProperty("--dock-height",`${E4.current}px`)},[W1]),p(()=>{if(!Q_||Z)return;let X=(N)=>{if(N.ctrlKey&&N.key==="`")N.preventDefault(),m1()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[m1,Q_,Z]),p(()=>{if(Z)return;let X=(N)=>{if(N.ctrlKey&&N.shiftKey&&(N.key==="Z"||N.key==="z")){N.preventDefault(),b4();return}if(N.key==="Escape"&&I1)N.preventDefault(),T_()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[b4,T_,I1,Z]);let R3=Boolean(n0&&n0===(y?.turn_id||E0));if(G)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${L_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${L_.message}</p>
                    </div>
                </div>
            </div>
        `;if(Y)return L`
            <div class=${`app-shell pane-popout${W1?" editor-open":""}`} ref=${$4}>
                <div class="editor-pane-container pane-popout-container">
                    ${W1&&!P_&&L`
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
                                                        ${Z_.map((X)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${X.id===u0?" active":""}`}
                                                                onClick=${(N)=>{w4(X.id),N.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${X.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${u0&&T1.has(u0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(X)=>{h_(u0),X.currentTarget.closest("details")?.removeAttribute("open")}}>
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
                            <p style=${{margin:0,lineHeight:1.6}}>${Q||"No pane path provided."}</p>
                        </div>`}
                    ${W1&&u0&&T1.has(u0)&&L`
                        <${N3}
                            getContent=${()=>w1.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>h_(u0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${V1?"":" workspace-collapsed"}${W1?" editor-open":""}${Z?" chat-only":""}${I1?" zen-mode":""}`} ref=${$4}>
            ${X0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(X)=>{if(X.target===X.currentTarget)w5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(X)=>{X.preventDefault(),x3(L0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${v1}
                            value=${L0}
                            onInput=${(X)=>{let N=X.currentTarget?.value??"";Q0(String(N))}}
                            onKeyDown=${(X)=>{if(X.key==="Escape")X.preventDefault(),w5()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${S0.kind||"info"}`}>
                            ${S0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${f||!S0.canSubmit}>
                                ${f?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${w5}
                                disabled=${f}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Z&&L`
                <${_j}
                    onFileSelect=${k5}
                    visible=${V1}
                    active=${V1||W1}
                    onOpenEditor=${Y_}
                    onOpenTerminalTab=${O1}
                    onOpenVncTab=${I_}
                    onToggleTerminal=${Q_?m1:void 0}
                    terminalVisible=${Boolean(Q_&&d1)}
                />
                <button
                    class=${`workspace-toggle-tab${V1?" open":" closed"}`}
                    onClick=${$Z}
                    title=${V1?"Hide workspace":"Show workspace"}
                    aria-label=${V1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${bj} onTouchStart=${gj}></div>
            `}
            ${K4&&L`
                <div class="editor-pane-container">
                    ${I1&&L`<div class="zen-hover-zone"></div>`}
                    ${W1&&L`
                        <${Zj}
                            tabs=${Z_}
                            activeId=${u0}
                            onActivate=${w4}
                            onClose=${r_}
                            onCloseOthers=${a_}
                            onCloseAll=${_5}
                            onTogglePin=${t_}
                            onTogglePreview=${h_}
                            onEditSource=${M5}
                            previewTabs=${T1}
                            paneOverrides=${E_}
                            onToggleDock=${Q_?m1:void 0}
                            dockVisible=${Q_&&d1}
                            onToggleZen=${b4}
                            zenMode=${I1}
                            onPopOutTab=${W?void 0:X8}
                        />
                    `}
                    ${W1&&L`<div class="editor-pane-host" ref=${U1}></div>`}
                    ${W1&&u0&&T1.has(u0)&&L`
                        <${N3}
                            getContent=${()=>w1.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>h_(u0)}
                        />
                    `}
                    ${Q_&&d1&&L`<div class="dock-splitter" onMouseDown=${hj} onTouchStart=${pj}></div>`}
                    ${Q_&&L`<div class=${`dock-panel${d1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!W&&L`
                                    <button class="dock-panel-action" onClick=${()=>X8(r4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
                        <div class="dock-panel-body" ref=${$5}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${mj} onTouchStart=${uj}></div>
            `}
            <div class="container">
                ${T&&Uj()&&L`<div class="search-results-spacer"></div>`}
                ${Z&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${_1?.agent_name?`@${_1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${_1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${N0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(X)=>S3(X.currentTarget.value)}
                                    >
                                        ${N0.map((X)=>L`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${T8(X,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${_1?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${N6}
                                    title=${f?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${f}
                                >
                                    ${f?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${_1?.chat_jid&&_1.chat_jid!==(_1.root_chat_jid||_1.chat_jid)&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${y3}
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
                ${(A||T)&&L`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${dj}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${A?`#${A}`:`Search: ${T} · ${q4}`}</span>
                    </div>
                `}
                <${I7}
                    posts=${K5}
                    hasMore=${Q6?vj:!1}
                    onLoadMore=${Q6?fj:void 0}
                    timelineRef=${V_}
                    onHashtagClick=${lj}
                    onMessageRef=${x1}
                    onScrollToMessage=${f1}
                    onFileRef=${T0}
                    onPostClick=${void 0}
                    onDeletePost=${sj}
                    onOpenWidget=${ZZ}
                    emptyMessage=${A?`No posts with #${A}`:T?`No results for "${T}"`:void 0}
                    agents=${X_}
                    user=${p_}
                    reverse=${Q6}
                    removingPostIds=${R1}
                    searchQuery=${T}
                />
                <${q$}
                    status=${W4(y)?null:y}
                    draft=${G0}
                    plan=${Y0}
                    thought=${K0}
                    pendingRequest=${B0}
                    intent=${R}
                    turnId=${E0}
                    steerQueued=${R3}
                    onPanelToggle=${c4}
                    showExtensionPanels=${!1}
                />
                <${o2}
                    session=${_0}
                    onClose=${G6}
                    onRetry=${tj}
                    onInject=${ej}
                />
                <${Q7}
                    widget=${I0}
                    onClose=${v5}
                    onWidgetEvent=${YZ}
                />
                <${q$}
                    extensionPanels=${Array.from(k0.values())}
                    pendingPanelActions=${i0}
                    onExtensionPanelAction=${rj}
                    turnId=${E0}
                    steerQueued=${R3}
                    onPanelToggle=${c4}
                    showCorePanels=${!1}
                />
                <${a6}
                    items=${J?[]:g0}
                    onInjectQueuedFollowup=${C3}
                    onRemoveQueuedFollowup=${P3}
                    onOpenFilePill=${T0}
                />
                <${D2}
                    onPost=${()=>{let{searchQuery:X,searchOpen:N}=u1.current||{};if(!X&&!N)i_(),l4()}}
                    onFocus=${l4}
                    searchMode=${J}
                    searchScope=${P}
                    onSearch=${ij}
                    onSearchScopeChange=${i}
                    onEnterSearch=${oj}
                    onExitSearch=${nj}
                    fileRefs=${l}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${g}
                    onSetFileRefs=${o}
                    messageRefs=${Z0}
                    onRemoveMessageRef=${V4}
                    onClearMessageRefs=${p4}
                    onSetMessageRefs=${Y5}
                    onSwitchChat=${S3}
                    onRenameSession=${x3}
                    isRenameSessionInProgress=${f}
                    onCreateSession=${QZ}
                    onDeleteSession=${y3}
                    onRestoreSession=${jZ}
                    activeEditorPath=${Z?null:u0}
                    onAttachEditorFile=${Z?void 0:J1}
                    onOpenFilePill=${T0}
                    followupQueueCount=${F_}
                    followupQueueItems=${g0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${C3}
                    onRemoveQueuedFollowup=${P3}
                    onSubmitIntercept=${aj}
                    onMessageResponse=${x5}
                    onSubmitError=${Q5}
                    onPopOutChat=${W?void 0:qZ}
                    isAgentActive=${T5}
                    activeChatAgents=${W0}
                    currentChatJid=${j}
                    connectionStatus=${K}
                    activeModel=${$1}
                    modelUsage=${P1}
                    thinkingLevel=${C1}
                    supportsThinking=${c0}
                    contextUsage=${x0}
                    notificationsEnabled=${e4}
                    notificationPermission=${y4}
                    onToggleNotifications=${g1}
                    onModelChange=${c1}
                    onModelStateChange=${q6}
                    statusNotice=${W4(y)?y:null}
                />
                <${N7}
                    request=${B0}
                    onRespond=${()=>{O0(null),p0.current=null}}
                />
            </div>
        </div>
    `}function NK(){let[_,$]=h(()=>typeof window>"u"?"http://localhost/":window.location.href);p(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=x((Y,Q={})=>{if(typeof window>"u")return;let{replace:q=!1}=Q||{},G=new URL(String(Y||""),window.location.href).toString();if(q)window.history.replaceState(null,"",G);else window.history.pushState(null,"",G);$(window.location.href)},[]),Z=C0(()=>new URL(_).searchParams,[_]);return L`<${XK} locationParams=${Z} navigate=${j} />`}J8(L`<${NK} />`,document.getElementById("app"));

//# debugId=6A603AE5736230CF64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
