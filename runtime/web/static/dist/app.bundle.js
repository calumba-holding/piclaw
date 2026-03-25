var VZ=Object.defineProperty;var LZ=(_)=>_;function UZ(_,$){this[_]=LZ.bind(null,$)}var zZ=(_,$)=>{for(var j in $)VZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:UZ.bind($,j)})};var V5,F1,n3,FZ,R4,f3,o3,r3,s3,z8,B8,W8,a3,X5={},B5=[],HZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,L5=Array.isArray;function U4(_,$){for(var j in $)_[j]=$[j];return _}function F8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function U5(_,$,j){var Z,Y,Q,N={};for(Q in $)Q=="key"?Z=$[Q]:Q=="ref"?Y=$[Q]:N[Q]=$[Q];if(arguments.length>2&&(N.children=arguments.length>3?V5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Q in _.defaultProps)N[Q]===void 0&&(N[Q]=_.defaultProps[Q]);return G5(_,N,Z,Y,null)}function G5(_,$,j,Z,Y){var Q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++n3:Y,__i:-1,__u:0};return Y==null&&F1.vnode!=null&&F1.vnode(Q),Q}function z5(_){return _.children}function G$(_,$){this.props=_,this.context=$}function K$(_,$){if($==null)return _.__?K$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?K$(_):null}function OZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],Q=U4({},$);Q.__v=$.__v+1,F1.vnode&&F1.vnode(Q),H8(_.__P,Q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?K$($):j,!!(32&$.__u),Y),Q.__v=$.__v,Q.__.__k[Q.__i]=Q,$2(Z,Q,Y),$.__e=$.__=null,Q.__e!=j&&t3(Q)}}function t3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),t3(_)}function V8(_){(!_.__d&&(_.__d=!0)&&R4.push(_)&&!W5.__r++||f3!=F1.debounceRendering)&&((f3=F1.debounceRendering)||o3)(W5)}function W5(){try{for(var _,$=1;R4.length;)R4.length>$&&R4.sort(r3),_=R4.shift(),$=R4.length,OZ(_)}finally{R4.length=W5.__r=0}}function e3(_,$,j,Z,Y,Q,N,q,B,G,V){var W,L,A,T,y,k,J,I=Z&&Z.__k||B5,P=$.length;for(B=JZ(j,$,I,B,P),W=0;W<P;W++)(A=j.__k[W])!=null&&(L=A.__i!=-1&&I[A.__i]||X5,A.__i=W,k=H8(_,A,L,Y,Q,N,q,B,G,V),T=A.__e,A.ref&&L.ref!=A.ref&&(L.ref&&O8(L.ref,null,A),V.push(A.ref,A.__c||T,A)),y==null&&T!=null&&(y=T),(J=!!(4&A.__u))||L.__k===A.__k?B=_2(A,B,_,J):typeof A.type=="function"&&k!==void 0?B=k:T&&(B=T.nextSibling),A.__u&=-7);return j.__e=y,B}function JZ(_,$,j,Z,Y){var Q,N,q,B,G,V=j.length,W=V,L=0;for(_.__k=Array(Y),Q=0;Q<Y;Q++)(N=$[Q])!=null&&typeof N!="boolean"&&typeof N!="function"?(typeof N=="string"||typeof N=="number"||typeof N=="bigint"||N.constructor==String?N=_.__k[Q]=G5(null,N,null,null,null):L5(N)?N=_.__k[Q]=G5(z5,{children:N},null,null,null):N.constructor===void 0&&N.__b>0?N=_.__k[Q]=G5(N.type,N.props,N.key,N.ref?N.ref:null,N.__v):_.__k[Q]=N,B=Q+L,N.__=_,N.__b=_.__b+1,q=null,(G=N.__i=DZ(N,j,B,W))!=-1&&(W--,(q=j[G])&&(q.__u|=2)),q==null||q.__v==null?(G==-1&&(Y>V?L--:Y<V&&L++),typeof N.type!="function"&&(N.__u|=4)):G!=B&&(G==B-1?L--:G==B+1?L++:(G>B?L--:L++,N.__u|=4))):_.__k[Q]=null;if(W)for(Q=0;Q<V;Q++)(q=j[Q])!=null&&(2&q.__u)==0&&(q.__e==Z&&(Z=K$(q)),Z2(q,q));return Z}function _2(_,$,j,Z){var Y,Q;if(typeof _.type=="function"){for(Y=_.__k,Q=0;Y&&Q<Y.length;Q++)Y[Q]&&(Y[Q].__=_,$=_2(Y[Q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=K$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function DZ(_,$,j,Z){var Y,Q,N,q=_.key,B=_.type,G=$[j],V=G!=null&&(2&G.__u)==0;if(G===null&&q==null||V&&q==G.key&&B==G.type)return j;if(Z>(V?1:0)){for(Y=j-1,Q=j+1;Y>=0||Q<$.length;)if((G=$[N=Y>=0?Y--:Q++])!=null&&(2&G.__u)==0&&q==G.key&&B==G.type)return N}return-1}function v3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||HZ.test($)?j:j+"px"}function q5(_,$,j,Z,Y){var Q,N;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||v3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||v3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Q=$!=($=$.replace(s3,"$1")),N=$.toLowerCase(),$=N in _||$=="onFocusOut"||$=="onFocusIn"?N.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Q]=j,j?Z?j.u=Z.u:(j.u=z8,_.addEventListener($,Q?W8:B8,Q)):_.removeEventListener($,Q?W8:B8,Q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function b3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=z8++;else if($.t<j.u)return;return j(F1.event?F1.event($):$)}}}function H8(_,$,j,Z,Y,Q,N,q,B,G){var V,W,L,A,T,y,k,J,I,P,i,c,t,$0,b,R=$.type;if($.constructor!==void 0)return null;128&j.__u&&(B=!!(32&j.__u),Q=[q=$.__e=j.__e]),(V=F1.__b)&&V($);_:if(typeof R=="function")try{if(J=$.props,I=R.prototype&&R.prototype.render,P=(V=R.contextType)&&Z[V.__c],i=V?P?P.props.value:V.__:Z,j.__c?k=(W=$.__c=j.__c).__=W.__E:(I?$.__c=W=new R(J,i):($.__c=W=new G$(J,i),W.constructor=R,W.render=EZ),P&&P.sub(W),W.state||(W.state={}),W.__n=Z,L=W.__d=!0,W.__h=[],W._sb=[]),I&&W.__s==null&&(W.__s=W.state),I&&R.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=U4({},W.__s)),U4(W.__s,R.getDerivedStateFromProps(J,W.__s))),A=W.props,T=W.state,W.__v=$,L)I&&R.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),I&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(I&&R.getDerivedStateFromProps==null&&J!==A&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(J,i),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(J,W.__s,i)===!1){$.__v!=j.__v&&(W.props=J,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),B5.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&N.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(J,W.__s,i),I&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(A,T,y)})}if(W.context=i,W.props=J,W.__P=_,W.__e=!1,c=F1.__r,t=0,I)W.state=W.__s,W.__d=!1,c&&c($),V=W.render(W.props,W.state,W.context),B5.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,c&&c($),V=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++t<25);W.state=W.__s,W.getChildContext!=null&&(Z=U4(U4({},Z),W.getChildContext())),I&&!L&&W.getSnapshotBeforeUpdate!=null&&(y=W.getSnapshotBeforeUpdate(A,T)),$0=V!=null&&V.type===z5&&V.key==null?j2(V.props.children):V,q=e3(_,L5($0)?$0:[$0],$,j,Z,Y,Q,N,q,B,G),W.base=$.__e,$.__u&=-161,W.__h.length&&N.push(W),k&&(W.__E=W.__=null)}catch(H){if($.__v=null,B||Q!=null)if(H.then){for($.__u|=B?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;Q[Q.indexOf(q)]=null,$.__e=q}else{for(b=Q.length;b--;)F8(Q[b]);L8($)}else $.__e=j.__e,$.__k=j.__k,H.then||L8($);F1.__e(H,$,j)}else Q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=AZ(j.__e,$,j,Z,Y,Q,N,B,G);return(V=F1.diffed)&&V($),128&$.__u?void 0:q}function L8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(L8))}function $2(_,$,j){for(var Z=0;Z<j.length;Z++)O8(j[Z],j[++Z],j[++Z]);F1.__c&&F1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(Q){Q.call(Y)})}catch(Q){F1.__e(Q,Y.__v)}})}function j2(_){return typeof _!="object"||_==null||_.__b>0?_:L5(_)?_.map(j2):U4({},_)}function AZ(_,$,j,Z,Y,Q,N,q,B){var G,V,W,L,A,T,y,k=j.props||X5,J=$.props,I=$.type;if(I=="svg"?Y="http://www.w3.org/2000/svg":I=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),Q!=null){for(G=0;G<Q.length;G++)if((A=Q[G])&&"setAttribute"in A==!!I&&(I?A.localName==I:A.nodeType==3)){_=A,Q[G]=null;break}}if(_==null){if(I==null)return document.createTextNode(J);_=document.createElementNS(Y,I,J.is&&J),q&&(F1.__m&&F1.__m($,Q),q=!1),Q=null}if(I==null)k===J||q&&_.data==J||(_.data=J);else{if(Q=Q&&V5.call(_.childNodes),!q&&Q!=null)for(k={},G=0;G<_.attributes.length;G++)k[(A=_.attributes[G]).name]=A.value;for(G in k)A=k[G],G=="dangerouslySetInnerHTML"?W=A:G=="children"||(G in J)||G=="value"&&("defaultValue"in J)||G=="checked"&&("defaultChecked"in J)||q5(_,G,null,A,Y);for(G in J)A=J[G],G=="children"?L=A:G=="dangerouslySetInnerHTML"?V=A:G=="value"?T=A:G=="checked"?y=A:q&&typeof A!="function"||k[G]===A||q5(_,G,A,k[G],Y);if(V)q||W&&(V.__html==W.__html||V.__html==_.innerHTML)||(_.innerHTML=V.__html),$.__k=[];else if(W&&(_.innerHTML=""),e3($.type=="template"?_.content:_,L5(L)?L:[L],$,j,Z,I=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,Q,N,Q?Q[0]:j.__k&&K$(j,0),q,B),Q!=null)for(G=Q.length;G--;)F8(Q[G]);q||(G="value",I=="progress"&&T==null?_.removeAttribute("value"):T!=null&&(T!==_[G]||I=="progress"&&!T||I=="option"&&T!=k[G])&&q5(_,G,T,k[G],Y),G="checked",y!=null&&y!=_[G]&&q5(_,G,y,k[G],Y))}return _}function O8(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){F1.__e(Y,j)}}function Z2(_,$,j){var Z,Y;if(F1.unmount&&F1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||O8(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Q){F1.__e(Q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&Z2(Z[Y],$,j||typeof _.type!="function");j||F8(_.__e),_.__c=_.__=_.__e=void 0}function EZ(_,$,j){return this.constructor(_,j)}function F5(_,$,j){var Z,Y,Q,N;$==document&&($=document.documentElement),F1.__&&F1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Q=[],N=[],H8($,_=(!Z&&j||$).__k=U5(z5,null,[_]),Y||X5,X5,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?V5.call($.childNodes):null,Q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,N),$2(Q,_,N)}function Y2(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Q){this.props.value!=Q.value&&Z.forEach(function(N){N.__e=!0,V8(N)})},this.sub=function(Q){Z.add(Q);var N=Q.componentWillUnmount;Q.componentWillUnmount=function(){Z&&Z.delete(Q),N&&N.call(Q)}}),j.children}return $.__c="__cC"+a3++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}V5=B5.slice,F1={__e:function(_,$,j,Z){for(var Y,Q,N;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((Q=Y.constructor)&&Q.getDerivedStateFromError!=null&&(Y.setState(Q.getDerivedStateFromError(_)),N=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),N=Y.__d),N)return Y.__E=Y}catch(q){_=q}throw _}},n3=0,FZ=function(_){return _!=null&&_.constructor===void 0},G$.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=U4({},this.state),typeof _=="function"&&(_=_(U4({},j),this.props)),_&&U4(j,_),_!=null&&this.__v&&($&&this._sb.push($),V8(this))},G$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),V8(this))},G$.prototype.render=z5,R4=[],o3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r3=function(_,$){return _.__v.__b-$.__v.__b},W5.__r=0,s3=/(PointerCapture)$|Capture$/i,z8=0,B8=b3(!1),W8=b3(!0),a3=0;var f4,z1,X8,m3,X$=0,Q2=[],O1=F1,u3=O1.__b,g3=O1.__r,h3=O1.diffed,p3=O1.__c,c3=O1.unmount,l3=O1.__;function B$(_,$){O1.__h&&O1.__h(z1,_,X$||$),X$=0;var j=z1.__H||(z1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return X$=1,J8(X2,_)}function J8(_,$,j){var Z=B$(f4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):X2(void 0,$),function(q){var B=Z.__N?Z.__N[0]:Z.__[0],G=Z.t(B,q);B!==G&&(Z.__N=[G,Z.__[1]],Z.__c.setState({}))}],Z.__c=z1,!z1.__f)){var Y=function(q,B,G){if(!Z.__c.__H)return!0;var V=Z.__c.__H.__.filter(function(L){return L.__c});if(V.every(function(L){return!L.__N}))return!Q||Q.call(this,q,B,G);var W=Z.__c.props!==q;return V.some(function(L){if(L.__N){var A=L.__[0];L.__=L.__N,L.__N=void 0,A!==L.__[0]&&(W=!0)}}),Q&&Q.call(this,q,B,G)||W};z1.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:N}=z1;z1.componentWillUpdate=function(q,B,G){if(this.__e){var V=Q;Q=void 0,Y(q,B,G),Q=V}N&&N.call(this,q,B,G)},z1.shouldComponentUpdate=Y}return Z.__N||Z.__}function h(_,$){var j=B$(f4++,3);!O1.__s&&A8(j.__H,$)&&(j.__=_,j.u=$,z1.__H.__h.push(j))}function D8(_,$){var j=B$(f4++,4);!O1.__s&&A8(j.__H,$)&&(j.__=_,j.u=$,z1.__h.push(j))}function S(_){return X$=5,k0(function(){return{current:_}},[])}function N2(_,$,j){X$=6,D8(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function k0(_,$){var j=B$(f4++,7);return A8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return X$=8,k0(function(){return _},$)}function q2(_){var $=z1.context[_.__c],j=B$(f4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(z1)),$.props.value):_.__}function G2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function K2(_){var $=B$(f4++,10),j=g();return $.__=_,z1.componentDidCatch||(z1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function MZ(){for(var _;_=Q2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(K5),$.__h.some(U8),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){z1=null,u3&&u3(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),l3&&l3(_,$)},O1.__r=function(_){g3&&g3(_),f4=0;var $=(z1=_.__c).__H;$&&(X8===z1?($.__h=[],z1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(K5),$.__h.some(U8),$.__h=[],f4=0)),X8=z1},O1.diffed=function(_){h3&&h3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(Q2.push($)!==1&&m3===O1.requestAnimationFrame||((m3=O1.requestAnimationFrame)||kZ)(MZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),X8=z1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(K5),j.__h=j.__h.filter(function(Z){return!Z.__||U8(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],O1.__e(Z,j.__v)}}),p3&&p3(_,$)},O1.unmount=function(_){c3&&c3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{K5(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&O1.__e($,j.__v))};var i3=typeof requestAnimationFrame=="function";function kZ(_){var $,j=function(){clearTimeout(Z),i3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);i3&&($=requestAnimationFrame(j))}function K5(_){var $=z1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),z1=$}function U8(_){var $=z1;_.__c=_.__(),z1=$}function A8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function X2(_,$){return typeof $=="function"?$(_):$}var B2=function(_,$,j,Z){var Y;$[0]=0;for(var Q=1;Q<$.length;Q++){var N=$[Q++],q=$[Q]?($[0]|=N?1:2,j[$[Q++]]):$[++Q];N===3?Z[0]=q:N===4?Z[1]=Object.assign(Z[1]||{},q):N===5?(Z[1]=Z[1]||{})[$[++Q]]=q:N===6?Z[1][$[++Q]]+=q+"":N?(Y=_.apply(q,B2(_,q,j,["",null])),Z.push(Y),q[0]?$[0]|=2:($[Q-2]=0,$[Q]=Y)):Z.push(q)}return Z},d3=new Map;function IZ(_){var $=d3.get(this);return $||($=new Map,d3.set(this,$)),($=B2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,Q=1,N="",q="",B=[0],G=function(L){Q===1&&(L||(N=N.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?B.push(0,L,N):Q===3&&(L||N)?(B.push(3,L,N),Q=2):Q===2&&N==="..."&&L?B.push(4,L,0):Q===2&&N&&!L?B.push(5,0,!0,N):Q>=5&&((N||!L&&Q===5)&&(B.push(Q,0,N,Y),Q=6),L&&(B.push(Q,L,0,Y),Q=6)),N=""},V=0;V<j.length;V++){V&&(Q===1&&G(),G(V));for(var W=0;W<j[V].length;W++)Z=j[V][W],Q===1?Z==="<"?(G(),B=[B],Q=3):N+=Z:Q===4?N==="--"&&Z===">"?(Q=1,N=""):N=Z+N[0]:q?Z===q?q="":N+=Z:Z==='"'||Z==="'"?q=Z:Z===">"?(G(),Q=1):Q&&(Z==="="?(Q=5,Y=N,N=""):Z==="/"&&(Q<5||j[V][W+1]===">")?(G(),Q===3&&(B=B[0]),Q=B,(B=B[0]).push(2,0,Q),Q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(G(),Q=2):N+=Z),Q===3&&N==="!--"&&(Q=4,B=B[0])}return G(),B}(_)),$),arguments,[])).length>1?$:$[0]}var U=IZ.bind(U5);var t1={};zZ(t1,{uploadWorkspaceFile:()=>O5,uploadMedia:()=>y8,updateWorkspaceFile:()=>iZ,submitAdaptiveCardAction:()=>S8,streamSidePrompt:()=>pZ,stopAutoresearch:()=>bZ,steerAgentQueueItem:()=>hZ,setWorkspaceVisibility:()=>b$,setAgentThoughtVisibility:()=>R8,sendPeerAgentMessage:()=>RZ,sendAgentMessage:()=>a4,searchPosts:()=>M8,restoreChatBranch:()=>wZ,respondToAgentRequest:()=>H5,renameWorkspaceFile:()=>u8,renameChatBranch:()=>SZ,removeAgentQueueItem:()=>gZ,pruneChatBranch:()=>xZ,moveWorkspaceEntry:()=>g8,getWorkspaceTree:()=>f$,getWorkspaceRawUrl:()=>J5,getWorkspaceFile:()=>v$,getWorkspaceDownloadUrl:()=>D5,getWorkspaceBranch:()=>lZ,getTimeline:()=>s4,getThumbnailUrl:()=>f8,getThread:()=>k8,getPostsByHashtag:()=>E8,getMediaUrl:()=>v_,getMediaText:()=>v8,getMediaInfo:()=>W$,getMediaBlob:()=>cZ,getChatBranches:()=>yZ,getAutoresearchStatus:()=>vZ,getAgents:()=>T8,getAgentThought:()=>w8,getAgentStatus:()=>P8,getAgentQueueState:()=>uZ,getAgentModels:()=>R$,getAgentContext:()=>fZ,getActiveChatAgents:()=>C8,forkChatBranch:()=>w$,dismissAutoresearch:()=>mZ,deleteWorkspaceFile:()=>h8,deletePost:()=>I8,createWorkspaceFile:()=>m8,createReply:()=>PZ,createPost:()=>TZ,attachWorkspaceFile:()=>b8,addToWhitelist:()=>x8,SSEClient:()=>A5});async function t0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function W2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Q of $)if(Q.startsWith("event:"))j=Q.slice(6).trim()||"message";else if(Q.startsWith("data:"))Z.push(Q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function CZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:N,done:q}=await j.read();if(q)break;Y+=Z.decode(N,{stream:!0});let B=Y.split(`

`);Y=B.pop()||"";for(let G of B){let V=W2(G);if(V)$(V.event,V.data)}}Y+=Z.decode();let Q=W2(Y);if(Q)$(Q.event,Q.data)}async function s4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return t0(Z)}async function E8(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return t0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function M8(_,$=50,j=0,Z=null,Y="current",Q=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",q=Y?`&scope=${encodeURIComponent(Y)}`:"",B=Q?`&root_chat_jid=${encodeURIComponent(Q)}`:"";return t0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${N}${q}${B}`)}async function k8(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return t0(`/thread/${_}${j}`)}async function TZ(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return t0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function PZ(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return t0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function I8(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return t0(Y,{method:"DELETE"})}async function a4(_,$,j=null,Z=[],Y=null,Q=null){let N=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return t0(`/agent/${_}/message${N}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:Y})})}async function C8(){return t0("/agent/active-chats")}async function yZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return t0(`/agent/branches${Z}`)}async function w$(_,$={}){return t0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function SZ(_,$={}){return t0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function xZ(_){return t0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function wZ(_,$={}){return t0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function RZ(_,$,j,Z="auto",Y={}){let Q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return t0("/agent/peer-message",{method:"POST",body:JSON.stringify(Q)})}async function T8(){return t0("/agent/roster")}async function P8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/status${$}`)}async function fZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/context${$}`)}async function vZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/autoresearch/status${$}`)}async function bZ(_=null,$={}){return t0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function mZ(_=null){return t0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function uZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/queue-state${$}`)}async function gZ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function hZ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function R$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/models${$}`)}async function y8(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function H5(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function S8(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function pZ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await CZ(j,(Q,N)=>{if($.onEvent?.(Q,N),Q==="side_prompt_thinking_delta")$.onThinkingDelta?.(N?.delta||"");else if(Q==="side_prompt_text_delta")$.onTextDelta?.(N?.delta||"");else if(Q==="side_prompt_done")Z=N;else if(Q==="side_prompt_error")Y=N}),Y){let Q=Error(Y?.error||"Side prompt failed");throw Q.payload=Y,Q}return Z}async function x8(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function w8(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return t0(j)}async function R8(_,$,j){return t0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function v_(_){return`/media/${_}`}function f8(_){return`/media/${_}/thumbnail`}async function W$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function v8(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function cZ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function f$(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return t0(Z)}async function lZ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return t0($)}async function v$(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return t0(Y)}async function iZ(_,$){return t0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function b8(_){return t0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function O5(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let Q=Y.toString(),N=Q?`/workspace/upload?${Q}`:"/workspace/upload",q=await fetch(""+N,{method:"POST",body:Z});if(!q.ok){let B=await q.json().catch(()=>({error:"Upload failed"})),G=Error(B.error||`HTTP ${q.status}`);throw G.status=q.status,G.code=B.code,G}return q.json()}async function m8(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),Q=Error(Y.error||`HTTP ${Z.status}`);throw Q.status=Z.status,Q.code=Y.code,Q}return Z.json()}async function u8(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function g8(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function h8(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return t0($,{method:"DELETE"})}async function b$(_,$=!1){return t0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function J5(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function D5(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class A5{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function E5(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function dZ(_,$){let j=E5(_),Z=E5($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function p8(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function c8(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},Q=String($||"").trim().toLowerCase();if(!Q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?Q:`${Y.value}${Q}`,updatedAt:j}}function nZ(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,Q=[];for(let N=0;N<j;N+=1)Q.push((Y+N)%j);return Q}function oZ(_,$,j=0,Z=(Y)=>Y){let Y=E5($);if(!Y)return-1;let Q=Array.isArray(_)?_:[],N=nZ(Q.length,j),q=Q.map((B)=>E5(Z(B)));for(let B of N)if(q[B].startsWith(Y))return B;for(let B of N)if(q[B].includes(Y))return B;return-1}function l8(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let Q=Z(Y[j]);if(dZ(Q,$))return j}return oZ(Y,$,0,Z)}function J_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function X1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function V$(_,$=!1){let j=J_(_);if(j===null)return $;return j==="true"}function L$(_,$=null){let j=J_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function M5(_){return String(_||"").trim().toLowerCase()}function i8(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return M5($[1]||"")}function rZ(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=M5(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function V2(_,$,j={}){let Z=i8($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return rZ(_).filter((Q)=>{if(Y&&Q?.chat_jid===Y)return!1;return M5(Q?.agent_name).startsWith(Z)})}function d8(_){let $=M5(_);return $?`@${$} `:""}function L2(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function k5(_){let $=n8(_);return $?`@${$}`:""}function n8(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function o8(_,$=""){let j=String(_||""),Z=n8(j),Y=n8($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:Q,canSubmit:!1,kind:"info",message:`Already using ${Q}.`};if(Z!==j.trim())return{normalized:Z,handle:Q,canSubmit:!0,kind:"info",message:`Will save as ${Q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Q,canSubmit:!0,kind:"success",message:`Saving as ${Q}.`}}function U2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?k5(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function sZ(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function I5(_,$={}){let j=k5(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=sZ(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function z2(_,$,j){let Z=k5(_),Y=k5($),Q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Q||"branch"}.`}function aZ(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function z4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function C5(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return z4(_)?"Compacting context":"Working..."}function tZ(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function T5(_,$=Date.now()){let j=aZ(_);if(j===null)return null;return tZ(Math.max(0,$-j))}function a_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:Q="Remove",icon:N="file"}){let q=`${_}-file-pill`,B=`${_}-file-name`,G=`${_}-file-remove`,V=N==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${q} title=${j||$} onClick=${Y}>
      ${V}
      <span class=${B}>${$}</span>
      ${Z&&U`
        <button
          class=${G}
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
  `}var eZ=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function _Y({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,Q="Compact context",q=`${Z!=null?`Context: ${F2(Z)} / ${F2(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,B=9,G=2*Math.PI*9,V=j/100*G,W=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${q}
            aria-label="Compact context"
            onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),$?.()}}
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
    `}function F2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function $Y(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let N=j.slice(0,Z),q=j.slice(Q);return{content:[...N,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function jY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Y.push(V[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let N=j.slice(0,Z),q=j.slice(Q);return{content:[...N,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function ZY(_){let $=$Y(_||""),j=jY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function r8({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return U`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let Q=typeof Y?.content==="string"?Y.content:"",N=ZY(Q);if(!N.text.trim()&&N.fileRefs.length===0&&N.messageRefs.length===0)return null;return U`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Q}>
                            ${N.text.trim()&&U`<div class="compose-queue-stack-text">${N.text}</div>`}
                            ${(N.messageRefs.length>0||N.fileRefs.length>0)&&U`
                                <div class="compose-queue-stack-refs">
                                    ${N.messageRefs.map((q)=>U`
                                        <${a_}
                                            key=${"queue-msg-"+q}
                                            prefix="compose"
                                            label=${"msg:"+q}
                                            title=${"Message reference: "+q}
                                            icon="message"
                                        />
                                    `)}
                                    ${N.fileRefs.map((q)=>{let B=q.split("/").pop()||q;return U`
                                            <${a_}
                                                key=${"queue-file-"+q}
                                                prefix="compose"
                                                label=${B}
                                                title=${q}
                                                onClick=${()=>Z?.(q)}
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
    `}function H2({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:Q,onEnterSearch:N,onExitSearch:q,fileRefs:B=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:W=[],onRemoveMessageRef:L,onClearMessageRefs:A,activeModel:T=null,modelUsage:y=null,thinkingLevel:k=null,supportsThinking:J=!1,contextUsage:I=null,onContextCompact:P,notificationsEnabled:i=!1,notificationPermission:c="default",onToggleNotifications:t,onModelChange:$0,onModelStateChange:b,activeEditorPath:R=null,onAttachEditorFile:H,onOpenFilePill:w,followupQueueItems:p=[],onInjectQueuedFollowup:N0,onRemoveQueuedFollowup:l,onSubmitIntercept:Q0,onMessageResponse:j0,onPopOutChat:q0,isAgentActive:K0=!1,activeChatAgents:X0=[],currentChatJid:F0="web:default",connectionStatus:A0="connected",onSetFileRefs:E0,onSetMessageRefs:n0,onSubmitError:x0,onSwitchChat:I0,onRenameSession:o0,isRenameSessionInProgress:r0=!1,onCreateSession:b0,onDeleteSession:s0,onRestoreSession:c0,showQueueStack:Y1=!0,statusNotice:z0=null}){let[h0,Q1]=g(""),[K1,G_]=g(""),[J1,j1]=g([]),[g1,M1]=g(!1),[N1,m0]=g([]),[T1,s]=g(0),[T0,L0]=g(!1),[D0,W0]=g([]),[a0,f0]=g(0),[u0,g0]=g(!1),[w0,e0]=g(!1),[P0,B0]=g(!1),[J0,H0]=g(!1),[f,e]=g([]),[M0,v0]=g(0),[d0,P1]=g(0),[y1,_1]=g(!1),[h1,K4]=g(0),[F_,n1]=g(null),[H_,K_]=g(()=>Date.now()),q1=S(null),o1=S(null),X4=S(null),m_=S(null),Z$=S(null),g4=S(null),f1=S(null),O_=S(null),S1=S({value:"",updatedAt:0}),D1=S(0),B1=S(!1),u_=200,g_=(z)=>{let E=new Set,d=[];for(let Y0 of z||[]){if(typeof Y0!=="string")continue;let y0=Y0.trim();if(!y0||E.has(y0))continue;E.add(y0),d.push(y0)}return d},V1=()=>{let z=J_("piclaw_compose_history");if(!z)return[];try{let E=JSON.parse(z);if(!Array.isArray(E))return[];return g_(E)}catch{return[]}},e1=(z)=>{X1("piclaw_compose_history",JSON.stringify(z))},l0=S(V1()),k1=S(-1),E_=S(""),__=h0.trim()||J1.length>0||B.length>0||W.length>0,h4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),_4=typeof window<"u"&&typeof Notification<"u",p4=typeof window<"u"?Boolean(window.isSecureContext):!1,Y$=_4&&p4&&c!=="denied",j4=c==="granted"&&i,h_=z4(z0),E$=C5(z0),M$=typeof z0?.detail==="string"&&z0.detail.trim()?z0.detail.trim():"",L1=h_?T5(z0,H_):null,v1=j4?"Disable notifications":"Enable notifications",Q$=J1.length>0||B.length>0||W.length>0,p_=A0==="disconnected"?"Reconnecting":String(A0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(z)=>z.toUpperCase()),$_=A0==="disconnected"?"Reconnecting":`Connection: ${p_}`,j_=(Array.isArray(X0)?X0:[]).filter((z)=>!z?.archived_at),x1=(()=>{for(let z of Array.isArray(X0)?X0:[]){let E=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(E&&E===F0)return z}return null})(),b1=Boolean(x1&&x1.chat_jid===(x1.root_chat_jid||x1.chat_jid)),H1=k0(()=>{let z=new Set,E=[];for(let d of Array.isArray(X0)?X0:[]){let Y0=typeof d?.chat_jid==="string"?d.chat_jid.trim():"";if(!Y0||Y0===F0||z.has(Y0))continue;if(!(typeof d?.agent_name==="string"?d.agent_name.trim():""))continue;z.add(Y0),E.push(d)}return E},[X0,F0]),M_=H1.length>0,k_=M_&&typeof I0==="function",I_=M_&&typeof c0==="function",Z4=Boolean(r0||B1.current),Z_=!j&&typeof o0==="function"&&!Z4,r1=!j&&typeof b0==="function",C_=!j&&typeof s0==="function"&&!b1,B4=!j&&(k_||I_||Z_||r1||C_),A1=T||"",Y4=J&&k?` (${k})`:"",c4=Y4.trim()?`${k}`:"",l4=typeof y?.hint_short==="string"?y.hint_short.trim():"",T_=[c4||null,l4||null].filter(Boolean).join(" • "),i4=[A1?`Current model: ${A1}${Y4}`:null,y?.plan?`Plan: ${y.plan}`:null,l4||null,y?.primary?.reset_description||null,y?.secondary?.reset_description||null].filter(Boolean),N$=w0?"Switching model…":i4.join(" • ")||`Current model: ${A1}${Y4} (tap to open model picker)`,c_=(z)=>{if(!z||typeof z!=="object")return;let E=z.model??z.current;if(typeof b==="function")b({model:E??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(E&&typeof $0==="function")$0(E)},l_=(z)=>{let E=z||q1.current;if(!E)return;E.style.height="auto",E.style.height=`${E.scrollHeight}px`,E.style.overflowY="hidden"},A4=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){L0(!1),m0([]);return}let E=z.toLowerCase().split(" ")[0];if(E.length<1){L0(!1),m0([]);return}let d=eZ.filter((Y0)=>Y0.name.startsWith(E)||Y0.name.replace(/-/g,"").startsWith(E.replace(/-/g,"")));if(d.length>0&&!(d.length===1&&d[0].name===E))g0(!1),W0([]),m0(d),s(0),L0(!0);else L0(!1),m0([])},X_=(z)=>{let E=h0,d=E.indexOf(" "),Y0=d>=0?E.slice(d):"",y0=z.name+Y0;Q1(y0),L0(!1),m0([]),requestAnimationFrame(()=>{let U1=q1.current;if(!U1)return;let C1=y0.length;U1.selectionStart=C1,U1.selectionEnd=C1,U1.focus()})},P_=(z)=>{if(i8(z)==null){g0(!1),W0([]);return}let E=V2(j_,z,{currentChatJid:F0});if(E.length>0&&!(E.length===1&&d8(E[0].agent_name).trim().toLowerCase()===String(z||"").trim().toLowerCase()))L0(!1),m0([]),W0(E),f0(0),g0(!0);else g0(!1),W0([])},w1=(z)=>{let E=d8(z?.agent_name);if(!E)return;Q1(E),g0(!1),W0([]),requestAnimationFrame(()=>{let d=q1.current;if(!d)return;let Y0=E.length;d.selectionStart=Y0,d.selectionEnd=Y0,d.focus()})},E4=()=>{if(j||!k_&&!I_&&!Z_&&!r1&&!C_)return!1;return S1.current={value:"",updatedAt:0},B0(!1),L0(!1),m0([]),g0(!1),W0([]),H0(!0),!0},i_=(z)=>{if(z?.preventDefault?.(),z?.stopPropagation?.(),j||!k_&&!I_&&!Z_&&!r1&&!C_)return;if(J0){S1.current={value:"",updatedAt:0},H0(!1);return}E4()},M4=(z)=>{let E=typeof z==="string"?z.trim():"";if(H0(!1),!E||E===F0){requestAnimationFrame(()=>q1.current?.focus());return}I0?.(E)},k4=async(z)=>{let E=typeof z==="string"?z.trim():"";if(H0(!1),!E||typeof c0!=="function"){requestAnimationFrame(()=>q1.current?.focus());return}try{await c0(E)}catch(d){console.warn("Failed to restore session:",d),requestAnimationFrame(()=>q1.current?.focus())}},d4=(z)=>{let d=(Array.isArray(z)?z:[]).findIndex((Y0)=>!Y0?.disabled);return d>=0?d:0},E1=k0(()=>{let z=[];for(let E of H1){let d=Boolean(E?.archived_at),Y0=typeof E?.agent_name==="string"?E.agent_name.trim():"",y0=typeof E?.chat_jid==="string"?E.chat_jid.trim():"";if(!Y0||!y0)continue;z.push({type:"session",key:`session:${y0}`,label:`@${Y0} — ${y0}${E?.is_active?" active":""}${d?" archived":""}`,chat:E,disabled:d?!I_:!k_})}if(r1)z.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(Z_)z.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:Z4});if(C_)z.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return z},[H1,I_,k_,r1,Z_,C_,Z4]),m1=async(z)=>{if(z?.preventDefault)z.preventDefault();if(z?.stopPropagation)z.stopPropagation();if(typeof o0!=="function"||r0||B1.current)return;B1.current=!0,H0(!1);try{await o0()}catch(E){console.warn("Failed to rename session:",E)}finally{B1.current=!1}requestAnimationFrame(()=>q1.current?.focus())},d_=async()=>{if(typeof b0!=="function")return;H0(!1);try{await b0()}catch(z){console.warn("Failed to create session:",z)}requestAnimationFrame(()=>q1.current?.focus())},n_=async()=>{if(typeof s0!=="function")return;H0(!1);try{await s0(F0)}catch(z){console.warn("Failed to delete session:",z)}requestAnimationFrame(()=>q1.current?.focus())},o_=(z)=>{if(j)G_(z);else Q1(z),A4(z),P_(z);requestAnimationFrame(()=>l_())},I4=(z)=>{let E=j?K1:h0,d=E&&!E.endsWith(`
`)?`
`:"",Y0=`${E}${d}${z}`.trimStart();o_(Y0)},C4=(z)=>{let E=z?.command?.model_label;if(E)return E;let d=z?.command?.message;if(typeof d==="string"){let Y0=d.match(/•\s+([^\n]+?)\s+\(current\)/);if(Y0?.[1])return Y0[1].trim()}return null},T4=async(z)=>{if(j||w0)return;e0(!0);try{let E=await a4("default",z,null,[],null,F0),d=C4(E);c_({model:d??T??null,thinking_level:E?.command?.thinking_level,supports_thinking:E?.command?.supports_thinking});try{let Y0=await R$(F0);if(Y0)c_(Y0)}catch{}return _?.(),!0}catch(E){return console.error("Failed to switch model:",E),alert("Failed to switch model: "+E.message),!1}finally{e0(!1)}},y_=async()=>{await T4("/cycle-model")},Y_=async(z)=>{if(!z||w0)return;if(await T4(`/model ${z}`))B0(!1)},P4=(z)=>{if(!z||z.disabled)return;if(z.type==="session"){let E=z.chat;if(E?.archived_at)k4(E.chat_jid);else M4(E.chat_jid);return}if(z.type==="action"){if(z.action==="new"){d_();return}if(z.action==="rename"){m1();return}if(z.action==="delete")n_()}},n4=(z)=>{z.preventDefault(),z.stopPropagation(),S1.current={value:"",updatedAt:0},H0(!1),B0((E)=>!E)},y4=async()=>{if(j)return;P?.(),await S_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},S4=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return K0?"queue":null},S_=async(z,E,d={})=>{let{includeMedia:Y0=!0,includeFileRefs:y0=!0,includeMessageRefs:U1=!0,clearAfterSubmit:C1=!0,recordHistory:p1=!0}=d||{},W4=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:h0,o4=typeof W4==="string"?W4:"";if(!o4.trim()&&(Y0?J1.length===0:!0)&&(y0?B.length===0:!0)&&(U1?W.length===0:!0))return;L0(!1),m0([]),g0(!1),W0([]),H0(!1),n1(null);let W_=Y0?[...J1]:[],N_=y0?[...B]:[],V4=U1?[...W]:[],L4=o4.trim();if(p1&&L4){let x_=l0.current,c1=g_(x_.filter((x4)=>x4!==L4));if(c1.push(L4),c1.length>200)c1.splice(0,c1.length-200);l0.current=c1,e1(c1),k1.current=-1,E_.current=""}let r_=()=>{if(Y0)j1([...W_]);if(y0)E0?.(N_);if(U1)n0?.(V4);Q1(L4),requestAnimationFrame(()=>l_())};if(C1)Q1(""),j1([]),V?.(),A?.();(async()=>{try{if(await Q0?.({content:L4,submitMode:E,fileRefs:N_,messageRefs:V4,mediaFiles:W_})){_?.();return}let c1=[];for(let L_ of W_){let Q4=await y8(L_);c1.push(Q4.id)}let x4=N_.length?`Files:
${N_.map((L_)=>`- ${L_}`).join(`
`)}`:"",$5=V4.length?`Referenced messages:
${V4.map((L_)=>`- message:${L_}`).join(`
`)}`:"",V_=c1.length?`Attachments:
${c1.map((L_,Q4)=>{let r4=W_[Q4]?.name||`attachment-${Q4+1}`;return`- attachment:${L_} (${r4})`}).join(`
`)}`:"",j5=[L4,x4,$5,V_].filter(Boolean).join(`

`),w4=await a4("default",j5,null,c1,S4(E),F0);if(j0?.(w4),w4?.command){c_({model:w4.command.model_label??T??null,thinking_level:w4.command.thinking_level,supports_thinking:w4.command.supports_thinking});try{let L_=await R$(F0);if(L_)c_(L_)}catch{}}_?.()}catch(x_){if(C1)r_();let c1=x_?.message||"Failed to send message.";n1(c1),x0?.(c1),console.error("Failed to post:",x_)}})()},F=(z)=>{N0?.(z)},C=x((z)=>{if(j||!P0&&!J0||z?.isComposing)return!1;let E=()=>{z.preventDefault?.(),z.stopPropagation?.()},d=()=>{S1.current={value:"",updatedAt:0}};if(z.key==="Escape"){if(E(),d(),P0)B0(!1);if(J0)H0(!1);return!0}if(P0){if(z.key==="ArrowDown"){if(E(),d(),f.length>0)v0((Y0)=>(Y0+1)%f.length);return!0}if(z.key==="ArrowUp"){if(E(),d(),f.length>0)v0((Y0)=>(Y0-1+f.length)%f.length);return!0}if((z.key==="Enter"||z.key==="Tab")&&f.length>0)return E(),d(),Y_(f[Math.max(0,Math.min(M0,f.length-1))]),!0;if(p8(z)&&f.length>0){E();let Y0=c8(S1.current,z.key);S1.current=Y0;let y0=l8(f,Y0.value,M0,(U1)=>U1);if(y0>=0)v0(y0);return!0}}if(J0){if(z.key==="ArrowDown"){if(E(),d(),E1.length>0)P1((Y0)=>(Y0+1)%E1.length);return!0}if(z.key==="ArrowUp"){if(E(),d(),E1.length>0)P1((Y0)=>(Y0-1+E1.length)%E1.length);return!0}if((z.key==="Enter"||z.key==="Tab")&&E1.length>0)return E(),d(),P4(E1[Math.max(0,Math.min(d0,E1.length-1))]),!0;if(p8(z)&&E1.length>0){E();let Y0=c8(S1.current,z.key);S1.current=Y0;let y0=l8(E1,Y0.value,d0,(U1)=>U1.label);if(y0>=0)P1(y0);return!0}}return!1},[j,P0,J0,f,M0,E1,d0,Y_]),u=(z)=>{if(z.isComposing)return;if(j&&z.key==="Escape"){z.preventDefault(),G_(""),q?.();return}if(C(z))return;let E=q1.current?.value??(j?K1:h0);if(L2(z,E,{searchMode:j,showSessionSwitcherButton:B4})){z.preventDefault(),E4();return}if(u0&&D0.length>0){let d=q1.current?.value??(j?K1:h0);if(!String(d||"").match(/^@([a-zA-Z0-9_-]*)$/))g0(!1),W0([]);else{if(z.key==="ArrowDown"){z.preventDefault(),f0((Y0)=>(Y0+1)%D0.length);return}if(z.key==="ArrowUp"){z.preventDefault(),f0((Y0)=>(Y0-1+D0.length)%D0.length);return}if(z.key==="Tab"||z.key==="Enter"){z.preventDefault(),w1(D0[a0]);return}if(z.key==="Escape"){z.preventDefault(),g0(!1),W0([]);return}}}if(T0&&N1.length>0){let d=q1.current?.value??(j?K1:h0);if(!String(d||"").startsWith("/"))L0(!1),m0([]);else{if(z.key==="ArrowDown"){z.preventDefault(),s((Y0)=>(Y0+1)%N1.length);return}if(z.key==="ArrowUp"){z.preventDefault(),s((Y0)=>(Y0-1+N1.length)%N1.length);return}if(z.key==="Tab"){z.preventDefault(),X_(N1[T1]);return}if(z.key==="Enter"&&!z.shiftKey){if(!E.includes(" ")){z.preventDefault();let y0=N1[T1];L0(!1),m0([]),S_(y0.name);return}}if(z.key==="Escape"){z.preventDefault(),L0(!1),m0([]);return}}}if(!j&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let d=q1.current;if(!d)return;let Y0=d.value||"",y0=d.selectionStart===0&&d.selectionEnd===0,U1=d.selectionStart===Y0.length&&d.selectionEnd===Y0.length;if(z.key==="ArrowUp"&&y0||z.key==="ArrowDown"&&U1){let C1=l0.current;if(!C1.length)return;z.preventDefault();let p1=k1.current;if(z.key==="ArrowUp"){if(p1===-1)E_.current=Y0,p1=C1.length-1;else if(p1>0)p1-=1;k1.current=p1,o_(C1[p1]||"")}else{if(p1===-1)return;if(p1<C1.length-1)p1+=1,k1.current=p1,o_(C1[p1]||"");else k1.current=-1,o_(E_.current||""),E_.current=""}requestAnimationFrame(()=>{let W4=q1.current;if(!W4)return;let o4=W4.value.length;W4.selectionStart=o4,W4.selectionEnd=o4});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){if(z.preventDefault(),j){if(E.trim())Y?.(E.trim(),Z)}else S_(E,"steer");return}if(z.key==="Enter"&&!z.shiftKey)if(z.preventDefault(),j){if(E.trim())Y?.(E.trim(),Z)}else S_(E)},v=(z)=>{let E=Array.from(z||[]).filter((d)=>d instanceof File&&!String(d.name||"").startsWith(".DS_Store"));if(!E.length)return;j1((d)=>[...d,...E]),n1(null)},n=(z)=>{v(z.target.files),z.target.value=""},G0=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),D1.current+=1,M1(!0)},V0=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),D1.current=Math.max(0,D1.current-1),D1.current===0)M1(!1)},U0=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";M1(!0)},Z0=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),D1.current=0,M1(!1),v(z.dataTransfer?.files||[])},C0=(z)=>{if(j)return;let E=z.clipboardData?.items;if(!E||!E.length)return;let d=[];for(let Y0 of E){if(Y0.kind!=="file")continue;let y0=Y0.getAsFile?.();if(y0)d.push(y0)}if(d.length>0)z.preventDefault(),v(d)},I1=(z)=>{j1((E)=>E.filter((d,Y0)=>Y0!==z))},B_=()=>{n1(null),j1([]),V?.(),A?.()},Q_=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:E,longitude:d,accuracy:Y0}=z.coords,y0=`${E.toFixed(5)}, ${d.toFixed(5)}`,U1=Number.isFinite(Y0)?` ±${Math.round(Y0)}m`:"",C1=`https://maps.google.com/?q=${E},${d}`,p1=`Location: ${y0}${U1} ${C1}`;I4(p1)},(z)=>{let E=z?.message||"Unable to retrieve location.";alert(`Location error: ${E}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};h(()=>{if(!P0)return;S1.current={value:"",updatedAt:0},_1(!0),R$(F0).then((z)=>{let E=Array.isArray(z?.models)?z.models.filter((d)=>typeof d==="string"&&d.trim().length>0):[];E.sort((d,Y0)=>d.localeCompare(Y0,void 0,{sensitivity:"base"})),e(E),c_(z)}).catch((z)=>{console.warn("Failed to load model list:",z),e([])}).finally(()=>{_1(!1)})},[P0,T]),h(()=>{if(j)B0(!1),H0(!1),L0(!1),m0([]),g0(!1),W0([])},[j]),h(()=>{if(J0&&!B4)H0(!1)},[J0,B4]),h(()=>{if(!P0)return;let z=f.findIndex((E)=>E===T);v0(z>=0?z:0)},[P0,f,T]),h(()=>{if(!J0)return;P1(d4(E1)),S1.current={value:"",updatedAt:0}},[J0,F0]),h(()=>{if(!P0)return;let z=(E)=>{let d=m_.current,Y0=Z$.current,y0=E.target;if(d&&d.contains(y0))return;if(Y0&&Y0.contains(y0))return;B0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[P0]),h(()=>{if(!J0)return;let z=(E)=>{let d=g4.current,Y0=f1.current,y0=E.target;if(d&&d.contains(y0))return;if(Y0&&Y0.contains(y0))return;H0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[J0]),h(()=>{if(j||!P0&&!J0)return;let z=(E)=>{C(E)};return document.addEventListener("keydown",z,!0),()=>document.removeEventListener("keydown",z,!0)},[j,P0,J0,C]),h(()=>{if(!P0)return;let z=m_.current;z?.focus?.(),z?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[P0,M0,f]),h(()=>{if(!J0)return;let z=g4.current;z?.focus?.(),z?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,d0,E1.length]),h(()=>{let z=()=>{let U1=O_.current?.clientWidth||0;K4((C1)=>C1===U1?C1:U1)};z();let E=O_.current,d=0,Y0=()=>{if(d)cancelAnimationFrame(d);d=requestAnimationFrame(()=>{d=0,z()})},y0=null;if(E&&typeof ResizeObserver<"u")y0=new ResizeObserver(()=>Y0()),y0.observe(E);if(typeof window<"u")window.addEventListener("resize",Y0);return()=>{if(d)cancelAnimationFrame(d);if(y0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",Y0)}},[j,T,x1?.agent_name,B4,I?.percent]);let _8=(z)=>{let E=z.target.value;if(n1(null),J0)H0(!1);l_(z.target),o_(E)};return h(()=>{requestAnimationFrame(()=>l_())},[h0,K1,j]),h(()=>{if(!h_)return;K_(Date.now());let z=setInterval(()=>K_(Date.now()),1000);return()=>clearInterval(z)},[h_,z0?.started_at,z0?.startedAt]),h(()=>{if(j)return;P_(h0)},[j_,F0,h0,j]),U`
        <div class="compose-box">
            ${Y1&&!j&&U`
                <${r8}
                    items=${p}
                    onInjectQueuedFollowup=${F}
                    onRemoveQueuedFollowup=${l}
                    onOpenFilePill=${w}
                />
            `}
            ${z0&&U`
                <div
                    class=${`compose-inline-status${h_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${M$||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${E$}</span>
                        ${L1&&U`<span class="compose-inline-status-elapsed">${L1}</span>`}
                    </div>
                    ${M$&&U`<div class="compose-inline-status-detail">${M$}</div>`}
                </div>
            `}
            ${F_&&U`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${F_}</div>
            `}
            <div
                class=${`compose-input-wrapper${g1?" drag-active":""}`}
                onDragEnter=${G0}
                onDragOver=${U0}
                onDragLeave=${V0}
                onDrop=${Z0}
            >
                <div class="compose-input-main">
                    ${Q$&&U`
                        <div class="compose-file-refs">
                            ${W.map((z)=>{return U`
                                    <${a_}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>L?.(z)}
                                    />
                                `})}
                            ${B.map((z)=>{let E=z.split("/").pop()||z;return U`
                                    <${a_}
                                        prefix="compose"
                                        label=${E}
                                        title=${z}
                                        onClick=${()=>w?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(z)}
                                    />
                                `})}
                            ${J1.map((z,E)=>{let d=z?.name||`attachment-${E+1}`;return U`
                                    <${a_}
                                        key=${d+E}
                                        prefix="compose"
                                        label=${d}
                                        title=${d}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>I1(E)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${B_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof q0==="function"&&U`
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
                        ref=${q1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?K1:h0}
                        onInput=${_8}
                        onKeyDown=${u}
                        onPaste=${C0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${u0&&D0.length>0&&U`
                        <div class="slash-autocomplete" ref=${X4}>
                            ${D0.map((z,E)=>U`
                                <div
                                    key=${z.chat_jid||z.agent_name}
                                    class=${`slash-item${E===a0?" active":""}`}
                                    onMouseDown=${(d)=>{d.preventDefault(),w1(z)}}
                                    onMouseEnter=${()=>f0(E)}
                                >
                                    <span class="slash-name">@${z.agent_name}</span>
                                    <span class="slash-desc">${z.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${T0&&N1.length>0&&U`
                        <div class="slash-autocomplete" ref=${o1}>
                            ${N1.map((z,E)=>U`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${E===T1?" active":""}`}
                                    onMouseDown=${(d)=>{d.preventDefault(),X_(z)}}
                                    onMouseEnter=${()=>s(E)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${P0&&!j&&U`
                        <div class="compose-model-popup" ref=${m_} tabIndex="-1" onKeyDown=${C}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${y1&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!y1&&f.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!y1&&f.map((z,E)=>U`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${M0===E?" active":""}${T===z?" current-model":""}`}
                                        onClick=${()=>{Y_(z)}}
                                        disabled=${w0}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{y_()}}
                                    disabled=${w0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${J0&&!j&&U`
                        <div class="compose-model-popup" ref=${g4} tabIndex="-1" onKeyDown=${C}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${U`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return U2(x1,F0)})()}
                                    </div>
                                `}
                                ${!M_&&U`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${M_&&H1.map((z,E)=>{let d=Boolean(z.archived_at),y0=z.chat_jid!==(z.root_chat_jid||z.chat_jid)&&!z.is_active&&!d&&typeof s0==="function",U1=I5(z,{currentChatJid:F0});return U`
                                        <div key=${z.chat_jid} class=${`compose-model-popup-item-row${d?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${d?" archived":""}${d0===E?" active":""}`}
                                                onClick=${()=>{if(d){k4(z.chat_jid);return}M4(z.chat_jid)}}
                                                disabled=${d?!I_:!k_}
                                                title=${d?`Restore archived ${`@${z.agent_name}`}`:`Switch to ${`@${z.agent_name}`}`}
                                            >
                                                ${U1}
                                            </button>
                                            ${y0&&U`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${z.agent_name}`}
                                                    onClick=${(C1)=>{C1.stopPropagation(),H0(!1),s0(z.chat_jid)}}
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
                            ${(r1||Z_||C_)&&U`
                                <div class="compose-model-popup-actions">
                                    ${r1&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${E1.findIndex((z)=>z.key==="action:new")===d0?" active":""}`}
                                            onClick=${()=>{d_()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${Z_&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${E1.findIndex((z)=>z.key==="action:rename")===d0?" active":""}`}
                                            onClick=${(z)=>{m1(z)}}
                                            title="Rename the current branch handle"
                                            disabled=${Z4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${C_&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${E1.findIndex((z)=>z.key==="action:delete")===d0?" active":""}`}
                                            onClick=${()=>{n_()}}
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
                    ${!j&&T&&U`
                    <div class="compose-meta-row">
                        ${!j&&T&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${Z$}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${N$}
                                    aria-label="Open model picker"
                                    onClick=${n4}
                                    disabled=${w0}
                                >
                                    ${w0?"Switching…":A1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!w0&&T_&&U`
                                        <span class="compose-model-usage-hint" title=${N$}>
                                            ${T_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&I&&I.percent!=null&&U`
                            <${_Y} usage=${I} onCompact=${y4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${B4&&U`
                        ${x1?.agent_name&&U`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${x1.chat_jid||F0}
                                aria-label=${`Manage sessions for @${x1.agent_name}`}
                                onClick=${i_}
                            >@${x1.agent_name}</button>
                        `}
                        <button
                            ref=${f1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${J0?" active":""}`}
                            onClick=${i_}
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
                    ${j&&U`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(z)=>Q?.(z.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:N}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${h4&&!j&&U`
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
                    ${Y$&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${j4?" active":""}`}
                            onClick=${t}
                            title=${v1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${R&&H&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${R}`}
                                type="button"
                                disabled=${B.includes(R)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${n} />
                        </label>
                    `}
                    ${(A0!=="connected"||!j)&&U`
                        <div class="compose-send-stack">
                            ${A0!=="connected"&&U`
                                <span class="compose-connection-status connection-status ${A0}" title=${$_}>
                                    ${p_}
                                </span>
                            `}
                            ${!j&&U`
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
    `}var t8="piclaw_theme",y5="piclaw_tint",D2="piclaw_chat_themes",u$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},A2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},O2={default:{label:"Default",mode:"auto",light:u$,dark:A2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},YY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],t4={theme:"default",tint:null},E2="light",s8=!1;function S5(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function z$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Q)=>Q+Q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function QY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let Q=parseInt(Y[1],10),N=parseInt(Y[2],10),q=parseInt(Y[3],10);if(![Q,N,q].every((G)=>Number.isFinite(G)))return null;let B=`#${[Q,N,q].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Q,g:N,b:q,hex:B}}function M2(_){return z$(_)||QY(_)}function m$(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),Q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${Q})`}function a8(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function NY(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),N=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*Q+0.0722*N}function qY(_){return NY(_)>0.4?"#000000":"#ffffff"}function k2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function e8(_){return O2[_]||O2.default}function GY(_){return _.mode==="auto"?k2():_.mode}function I2(_,$){let j=e8(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||u$}function C2(_,$,j){let Z=M2($);if(!Z)return _;let Y=z$(_.bgPrimary),Q=z$(_.bgSecondary),N=z$(_.bgHover),q=z$(_.borderColor);if(!Y||!Q||!N||!q)return _;let G=z$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:m$(Y,Z,0.08),bgSecondary:m$(Q,Z,0.12),bgHover:m$(N,Z,0.16),borderColor:m$(q,Z,0.08),accent:Z.hex,accentHover:G?m$(Z,G,0.18):Z.hex}}function KY(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=M2(Z),Q=Y?a8(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,N=Y?a8(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=Y?a8(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",B=Y?qY(Y):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":N,"--accent-soft-strong":q,"--accent-contrast-text":B,"--danger-color":_.danger||u$.danger,"--success-color":_.success||u$.success,"--search-highlight-color":Q||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([V,W])=>{if(W)j.style.setProperty(V,W)})}function XY(){if(typeof document>"u")return;let _=document.documentElement;YY.forEach(($)=>_.style.removeProperty($))}function U$(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function J2(_){let $=S5(t4?.theme||"default"),j=t4?.tint?String(t4.tint).trim():null,Z=I2($,_);if($==="default"&&j)Z=C2(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?A2.bgPrimary:u$.bgPrimary}function BY(_,$){if(typeof document>"u")return;let j=U$("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=U$("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",J2("light"));let Y=U$("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",J2("dark"));let Q=U$("msapplication-TileColor");if(Q&&_)Q.setAttribute("content",_);let N=U$("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let q=U$("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function WY(){if(typeof window>"u")return;let _={...t4,mode:E2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function T2(){try{let _=J_(D2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function VY(_,$,j){let Z=T2();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};X1(D2,JSON.stringify(Z))}function LY(_){if(!_)return null;return T2()[_]||null}function P2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function _6(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=S5(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=e8(j),Q=GY(Y),N=I2(j,Q);t4={theme:j,tint:Z},E2=Q;let q=document.documentElement;q.dataset.theme=Q,q.dataset.colorTheme=j,q.dataset.tint=Z?String(Z):"",q.style.colorScheme=Q;let B=N;if(j==="default"&&Z)B=C2(N,Z,Q);if(j==="default"&&!Z)XY();else KY(B,Q);if(BY(B.bgPrimary,Q),WY(),$.persist!==!1)if(X1(t8,j),Z)X1(y5,Z);else X1(y5,"")}function P5(){if(e8(t4.theme).mode!=="auto")return;_6(t4,{persist:!1})}function y2(){if(typeof window>"u")return()=>{};let _=P2(),$=LY(_),j=$?S5($.theme||"default"):S5(J_(t8)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=J_(y5);return Y?Y.trim():null})();if(_6({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!s8){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",P5);else if(Y.addListener)Y.addListener(P5);return s8=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",P5);else if(Y.removeListener)Y.removeListener(P5);s8=!1}}return()=>{}}function S2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||P2(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(VY($,j||"default",Z),_6({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")X1(t8,j||"default"),X1(y5,Z||"")}function x2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return k2()}var x5=/#(\w+)/g,UY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),zY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),FY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),HY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},OY=new Set(["http:","https:","mailto:",""]);function $6(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function e4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!OY.has(Z.protocol))return null;return Z.href}catch{return null}}function w2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Q;while(Q=Y.nextNode())Z.push(Q);for(let N of Z){let q=N.tagName.toLowerCase();if(!zY.has(q)){let G=N.parentNode;if(!G)continue;while(N.firstChild)G.insertBefore(N.firstChild,N);G.removeChild(N);continue}let B=HY[q]||new Set;for(let G of Array.from(N.attributes)){let V=G.name.toLowerCase(),W=G.value;if(V.startsWith("on")){N.removeAttribute(G.name);continue}if(V.startsWith("data-")||V.startsWith("aria-"))continue;if(B.has(V)||FY.has(V)){if(V==="href"){let L=e4(W);if(!L)N.removeAttribute(G.name);else if(N.setAttribute(G.name,L),q==="a"&&!N.getAttribute("rel"))N.setAttribute("rel","noopener noreferrer")}else if(V==="src"){let L=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,A=e4(L,{allowDataImage:q==="img"});if(!A)N.removeAttribute(G.name);else N.setAttribute(G.name,A)}continue}N.removeAttribute(G.name)}}return j.body.innerHTML}function R2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function w5(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=R2(j);if(Y===j)break;j=Y}return j}function JY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],Q=!1,N=[];for(let q of j){if(!Q&&q.trim().match(/^```mermaid\s*$/i)){Q=!0,N=[];continue}if(Q&&q.trim().match(/^```\s*$/)){let B=Z.length;Z.push(N.join(`
`)),Y.push(`@@MERMAID_BLOCK_${B}@@`),Q=!1,N=[];continue}if(Q)N.push(q);else Y.push(q)}if(Q)Y.push("```mermaid"),Y.push(...N);return{text:Y.join(`
`),blocks:Z}}function DY(_){if(!_)return _;return w5(_,5)}function AY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function EY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function MY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),Q=$[Y]??"",N=DY(Q);return`<div class="mermaid-container" data-mermaid="${AY(N)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function f2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var kY={span:new Set(["title","class","lang","dir"])};function IY(_,$){let j=kY[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Q;while(Q=Y.exec($)){let N=(Q[1]||"").toLowerCase();if(!N||N.startsWith("on")||!j.has(N))continue;let q=Q[2]??Q[3]??Q[4]??"";Z.push(` ${N}="${$6(q)}"`)}return Z.join("")}function v2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),Q=Y?Z.slice(1).trim():Z,q=Q.endsWith("/")?Q.slice(0,-1).trim():Q,[B=""]=q.split(/\s+/,1),G=B.toLowerCase();if(!G||!UY.has(G))return $;if(G==="br")return Y?"":"<br>";if(Y)return`</${G}>`;let V=q.slice(B.length).trim(),W=IY(G,V);return`<${G}${W}>`})}function b2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function m2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Q)=>Q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let Q=Z(Y.nodeValue);if(Q!==Y.nodeValue)Y.nodeValue=Q}return $.body.innerHTML}function CY(_){if(!window.katex)return _;let $=(N)=>R2(N).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(N)=>{let q=[],B=N.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let V=q.length;return q.push(G),`@@CODE_BLOCK_${V}@@`});return B=B.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let V=q.length;return q.push(G),`@@CODE_INLINE_${V}@@`}),{html:B,blocks:q}},Z=(N,q)=>{if(!q.length)return N;return N.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(B,G)=>{let V=Number(G);return q[V]??""})},Y=j(_),Q=Y.html;return Q=Q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(N,q,B)=>{try{let G=katex.renderToString($(B.trim()),{displayMode:!0,throwOnError:!1});return`${q}${G}`}catch(G){return`<span class="math-error" title="${$6(G.message)}">${N}</span>`}}),Q=Q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(N,q,B)=>{if(/\s$/.test(B))return N;try{let G=katex.renderToString($(B),{displayMode:!1,throwOnError:!1});return`${q}${G}`}catch(G){return`${q}<span class="math-error" title="${$6(G.message)}">$${B}$</span>`}}),Z(Q,Y.blocks)}function TY(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let Q of Z){let N=Q.nodeValue;if(!N)continue;if(x5.lastIndex=0,!x5.test(N))continue;x5.lastIndex=0;let q=Q.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let B=N.split(x5);if(B.length<=1)continue;let G=$.createDocumentFragment();B.forEach((V,W)=>{if(W%2===1){let L=$.createElement("a");L.setAttribute("href","#"),L.className="hashtag",L.setAttribute("data-hashtag",V),L.textContent=`#${V}`,G.appendChild(L)}else G.appendChild($.createTextNode(V))}),Q.parentNode?.replaceChild(G,Q)}return $.body.innerHTML}function PY(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let Q of j){if(!Y&&Q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&Q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(Q)}return Z.join(`
`)}function yY(_){let $=PY(_||""),{text:j,blocks:Z}=JY($),Y=w5(j,2),N=f2(Y).replace(/</g,"&lt;");return{safeHtml:v2(N),mermaidBlocks:Z}}function D_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=yY(_),Q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Q=b2(Q),Q=m2(Q),Q=CY(Q),Q=TY(Q),Q=MY(Q,Y),Q=w2(Q,j),Q}function g$(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=w5($,2),Y=f2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=v2(Y),N=window.marked?marked.parse(Q):Q.replace(/\n/g,"<br>");return N=b2(N),N=m2(N),N=w2(N),N}function SY(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,Q)=>{let N=Y.trim().split(/\s+/).map((B)=>{let[G,V]=B.split(",").map(Number);return{x:G,y:V}});if(N.length<3)return`<polyline${Z}points="${Y}"${Q}/>`;let q=[`M ${N[0].x},${N[0].y}`];for(let B=1;B<N.length-1;B++){let G=N[B-1],V=N[B],W=N[B+1],L=V.x-G.x,A=V.y-G.y,T=W.x-V.x,y=W.y-V.y,k=Math.sqrt(L*L+A*A),J=Math.sqrt(T*T+y*y),I=Math.min($,k/2,J/2);if(I<0.5){q.push(`L ${V.x},${V.y}`);continue}let P=V.x-L/k*I,i=V.y-A/k*I,c=V.x+T/J*I,t=V.y+y/J*I,b=L*y-A*T>0?1:0;q.push(`L ${P},${i}`),q.push(`A ${I},${I} 0 0 ${b} ${c},${t}`)}return q.push(`L ${N[N.length-1].x},${N[N.length-1].y}`),`<path${Z}d="${q.join(" ")}"${Q}/>`})}async function F4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=x2()==="dark"?j["tokyo-night"]:j["github-light"],Q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let N of Q)try{let q=N.dataset.mermaid,B=EY(q||""),G=w5(B,2),V=await $(G,{...Y,transparent:!0});V=SY(V),N.innerHTML=V,N.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let B=document.createElement("pre");B.className="mermaid-error",B.textContent=`Diagram error: ${q.message}`,N.innerHTML="",N.appendChild(B),N.removeAttribute("data-mermaid")}}function u2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function g2(_){return String(_||"").trim()||"web:default"}function h2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function p2(_){if(!_)return!1;return _.status!=="running"}function c2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function l2({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=S(null),Q=S(null),N=_?.thinking?g$(_.thinking):"",q=_?.answer?D_(_.answer,null,{sanitize:!1}):"";if(h(()=>{if(Y.current&&N)F4(Y.current).catch(()=>{})},[N]),h(()=>{if(Q.current&&q)F4(Q.current).catch(()=>{})},[q]),!_)return null;let B=_.status==="running",G=Boolean(String(_.answer||"").trim()),V=Boolean(String(_.thinking||"").trim()),W=h2(_),L=p2(_),A=!B&&G,T=B?"Thinking…":_.status==="error"?"Error":"Done";return U`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${T}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&U`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&U`<div class="btw-block btw-error">${_.error}</div>`}
            ${V&&U`
                <details class="btw-block btw-thinking" open=${B?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:N}}
                    ></div>
                </details>
            `}
            ${W&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Q}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </div>
            `}

            ${L&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
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
    `}function xY(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function wY(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Q==="svg")return j?{kind:Q,svg:j}:{kind:Q};return Z?{kind:Q,html:Z}:{kind:Q}}function v4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function S0(_){return typeof _==="string"&&_.trim()?_.trim():null}function d2(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var n2="__PICLAW_WIDGET_HOST__:";function i2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function j6(_,$){if(!_||_.type!=="generated_widget")return null;let j=xY(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:d2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function o2(_){if(!_||typeof _!=="object")return null;let $=wY(_),j=S0(_?.widget_id)||S0(_?.widgetId)||S0(_?.tool_call_id)||S0(_?.toolCallId),Z=S0(_?.tool_call_id)||S0(_?.toolCallId),Y=S0(_?.turn_id)||S0(_?.turnId),Q=S0(_?.title)||S0(_?.name)||"Generated widget",N=S0(_?.subtitle)||"",q=S0(_?.description)||N,B=S0(_?.status),G=B==="loading"||B==="streaming"||B==="final"||B==="error"?B:"streaming";return{title:Q,subtitle:N,description:q,originPostId:v4(_?.origin_post_id)??v4(_?.originPostId),originChatJid:S0(_?.origin_chat_jid)||S0(_?.originChatJid)||S0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:d2(_?.capabilities,!0),source:"live",status:G,turnId:Y,toolCallId:Z,width:v4(_?.width),height:v4(_?.height),error:S0(_?.error)}}function r2(_){return j6(_,null)!==null}function d1(_){let $=S0(_?.toolCallId)||S0(_?.tool_call_id);if($)return $;let j=S0(_?.widgetId)||S0(_?.widget_id);if(j)return j;let Z=v4(_?.originPostId)??v4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function s2(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Q)=>typeof Q==="string"&&Q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function a2(_){return s2(_)?"allow-downloads allow-scripts":"allow-downloads"}function R5(_){return{title:S0(_?.title)||"Generated widget",widgetId:S0(_?.widgetId)||S0(_?.widget_id),toolCallId:S0(_?.toolCallId)||S0(_?.tool_call_id),turnId:S0(_?.turnId)||S0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:S0(_?.status)||"final"}}function f5(_){return{...R5(_),subtitle:S0(_?.subtitle)||"",description:S0(_?.description)||"",error:S0(_?.error)||null,width:v4(_?.width),height:v4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function v5(_){return`${n2}${JSON.stringify(f5(_))}`}function t2(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=S0(_.text)||S0(_.content)||S0(_.message)||S0(_.prompt)||S0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=S0(j.text)||S0(j.content)||S0(j.message)||S0(j.prompt)||S0(j.value);if(Z)return Z}return null}function e2(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function _7(_){let $=S0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return S0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function RY(_){let $=R5(_);return`<script>
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
    } catch {}
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
</script>`}function $7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",N=j==="svg"?Y:Z;if(!N)return"";let q=s2(_),B=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${N}</div>`:N,V=q?RY(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${B}" />
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
${V}
</head>
<body>${G}</body>
</html>`}function j7({widget:_,onClose:$,onWidgetEvent:j}){let Z=S(null),Y=S(!1),Q=k0(()=>$7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(h(()=>{if(!_)return;let J=(I)=>{if(I.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),h(()=>{Y.current=!1},[Q]),h(()=>{if(!_)return;let J=Z.current;if(!J)return;let I=($0)=>{let b=v5(_),R=$0==="widget.init"?R5(_):f5(_);try{J.name=b}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:$0,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:R},"*")}catch{}},P=()=>{I("widget.init"),I("widget.update")},i=()=>{Y.current=!0,P()};J.addEventListener("load",i);let t=[0,40,120,300,800].map(($0)=>setTimeout(P,$0));return()=>{J.removeEventListener("load",i),t.forEach(($0)=>clearTimeout($0))}},[Q,_?.widgetId,_?.toolCallId,_?.turnId]),h(()=>{if(!_)return;let J=Z.current;if(!J?.contentWindow)return;let I=v5(_),P=f5(_);try{J.name=I}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:P},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),h(()=>{if(!_)return;let J=(I)=>{let P=I?.data;if(!P||P.__piclawGeneratedWidget!==!0)return;let i=Z.current,c=d1(_),t=d1({widgetId:P.widgetId,toolCallId:P.toolCallId});if(t&&c&&t!==c)return;if(!t&&i?.contentWindow&&I.source!==i.contentWindow)return;j?.(P,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let q=(_?.artifact||{}).kind||_?.kind||"html",B=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",V=_?.source==="live"?"live":"timeline",W=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",L=V==="live"?`Live widget • ${W.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",A=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",T=!Q,y=_7(_),k=a2(_);return U`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${B}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${L} • ${q.toUpperCase()}</div>
                        <div class="floating-widget-title">${B}</div>
                        ${(G||A)&&U`
                            <div class="floating-widget-subtitle">${G||A}</div>
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
                    ${T?U`<div class="floating-widget-empty">${y}</div>`:U`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${B}
                                name=${v5(_)}
                                sandbox=${k}
                                referrerpolicy="no-referrer"
                                srcdoc=${Q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var Z7="PiClaw";function Z6(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),Q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],N=Y.charCodeAt(0)%Q.length,q=Q[N],B=Z.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",V=G?G:null,W=j||B==="PiClaw".toLowerCase()||B==="pi";return{letter:Y,color:q,image:V||(W?"/static/icon-192.png":null)}}function Y7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function Q7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function N7(_){if(!_)return null;if(typeof document<"u"){let Q=document.documentElement,N=Q?.dataset?.colorTheme||"",q=Q?.dataset?.tint||"",B=getComputedStyle(Q).getPropertyValue("--accent-color")?.trim();if(B&&(q||N&&N!=="default"))return B}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Q=0;Q<j.length;Q+=1)Z=(Z*31+j.charCodeAt(Q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}function Y6({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:Q,extensionPanels:N=[],pendingPanelActions:q=new Set,onExtensionPanelAction:B,turnId:G,steerQueued:V,onPanelToggle:W,showCorePanels:L=!0,showExtensionPanels:A=!0}){let k=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let W0=s,a0=W0?W0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W0,totalLines:a0,fullText:W0}}let T0=s.text||"",L0=s.fullText||s.full_text||T0,D0=Number.isFinite(s.totalLines)?s.totalLines:L0?L0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:T0,totalLines:D0,fullText:L0}},J=160,I=(s)=>String(s||"").replace(/<\/?internal>/gi,""),P=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},i=(s,T0,L0)=>{let D0=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D0)return{text:"",omitted:0,totalLines:Number.isFinite(L0)?L0:0,visibleLines:0};let W0=D0.split(`
`),a0=W0.length>T0?W0.slice(0,T0).join(`
`):D0,f0=Number.isFinite(L0)?L0:W0.reduce((w0,e0)=>w0+P(e0),0),u0=a0?a0.split(`
`).reduce((w0,e0)=>w0+P(e0),0):0,g0=Math.max(f0-u0,0);return{text:a0,omitted:g0,totalLines:f0,visibleLines:u0}},c=k(j),t=k(Z),$0=k($),b=Boolean(c.text)||c.totalLines>0,R=Boolean(t.text)||t.totalLines>0,H=Boolean($0.fullText?.trim()||$0.text?.trim()),w=Boolean(_||H||b||R||Y||Q),p=Array.isArray(N)&&N.length>0;if((!L||!w)&&(!A||!p))return null;let[N0,l]=g(new Set),[Q0,j0]=g(null),[q0,K0]=g(()=>Date.now()),X0=(s)=>l((T0)=>{let L0=new Set(T0),D0=!L0.has(s);if(D0)L0.add(s);else L0.delete(s);if(typeof W==="function")W(s,D0);return L0});h(()=>{l(new Set),j0(null)},[G]);let F0=z4(_);h(()=>{if(!F0)return;K0(Date.now());let s=setInterval(()=>K0(Date.now()),1000);return()=>clearInterval(s)},[F0,_?.started_at,_?.startedAt]);let A0=_?.turn_id||G,E0=N7(A0),n0=V?"turn-dot turn-dot-queued":"turn-dot",x0=(s)=>s,I0=Boolean(_?.last_activity||_?.lastActivity),o0=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":E0,r0=Q?.kind||"info",b0=o0(r0),s0=o0(_?.kind||(F0?"warning":"info")),c0="",Y1=_?.title,z0=_?.status;if(_?.type==="plan")c0=Y1?`Planning: ${Y1}`:"Planning...";else if(_?.type==="tool_call")c0=Y1?`Running: ${Y1}`:"Running tool...";else if(_?.type==="tool_status")c0=Y1?`${Y1}: ${z0||"Working..."}`:z0||"Working...";else if(_?.type==="error")c0=Y1||"Agent error";else c0=Y1||z0||"Working...";if(I0)c0="Last activity just now";let h0=({panelTitle:s,text:T0,fullText:L0,totalLines:D0,maxLines:W0,titleClass:a0,panelKey:f0})=>{let u0=N0.has(f0),g0=L0||T0||"",w0=f0==="thought"||f0==="draft"?I(g0):g0,e0=typeof W0==="number",P0=u0&&e0,B0=e0?i(w0,W0,D0):{text:w0||"",omitted:0,totalLines:Number.isFinite(D0)?D0:0};if(!w0&&!(Number.isFinite(B0.totalLines)&&B0.totalLines>0))return null;let J0=`agent-thinking-body${e0?" agent-thinking-body-collapsible":""}`,H0=e0?`--agent-thinking-collapsed-lines: ${W0};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${u0?"true":"false"}
                data-collapsible=${e0?"true":"false"}
                style=${E0?`--turn-color: ${E0};`:""}
            >
                <div class="agent-thinking-title ${a0||""}">
                    ${E0&&U`<span class=${n0} aria-hidden="true"></span>`}
                    ${s}
                    ${P0&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>X0(f0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${J0}
                    style=${H0}
                    dangerouslySetInnerHTML=${{__html:g$(w0)}}
                />
                ${!u0&&B0.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>X0(f0)}>
                        ▸ ${B0.omitted} more lines
                    </button>
                `}
                ${u0&&B0.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>X0(f0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},Q1=Y?.tool_call?.title,K1=Q1?`Awaiting approval: ${Q1}`:"Awaiting approval",G_=F0?T5(_,q0):null,J1=(s,T0,L0=null)=>{let D0=C5(s);return U`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${T0?`--turn-color: ${T0};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${T0&&U`<span class=${n0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D0}</span>
                    ${L0&&U`<span class="agent-status-elapsed">${L0}</span>`}
                </div>
                ${s.detail&&U`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `},j1=(s,T0,L0,D0,W0,a0,f0,u0=8,g0=8)=>{let w0=Math.max(W0-D0,0.000000001),e0=Math.max(T0-u0*2,1),P0=Math.max(L0-g0*2,1),B0=Math.max(f0-a0,1),J0=f0===a0?T0/2:u0+(s.run-a0)/B0*e0,H0=g0+(P0-(s.value-D0)/w0*P0);return{x:J0,y:H0}},g1=(s,T0,L0,D0,W0,a0,f0,u0=8,g0=8)=>{if(!Array.isArray(s)||s.length===0)return"";return s.map((w0,e0)=>{let{x:P0,y:B0}=j1(w0,T0,L0,D0,W0,a0,f0,u0,g0);return`${e0===0?"M":"L"} ${P0.toFixed(2)} ${B0.toFixed(2)}`}).join(" ")},M1=(s,T0="")=>{if(!Number.isFinite(s))return"—";return`${Math.abs(s)>=100?s.toFixed(0):s.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${T0}`},N1=["var(--accent-color)","color-mix(in srgb, var(--accent-color) 72%, var(--success-color))","var(--success-color)","color-mix(in srgb, var(--accent-color) 50%, var(--warning-color))","var(--warning-color)","var(--danger-color)","color-mix(in srgb, var(--accent-color) 42%, var(--text-primary))","color-mix(in srgb, var(--success-color) 46%, var(--text-primary))"],m0=(s,T0="autoresearch")=>{let L0=Array.isArray(s)?s.map((B0,J0)=>({...B0,color:N1[J0%N1.length],points:Array.isArray(B0?.points)?B0.points.filter((H0)=>Number.isFinite(H0?.value)&&Number.isFinite(H0?.run)):[]})).filter((B0)=>B0.points.length>0):[];if(L0.length===0)return null;let D0=320,W0=120,a0=L0.flatMap((B0)=>B0.points),f0=a0.map((B0)=>B0.value),u0=a0.map((B0)=>B0.run),g0=Math.min(...f0),w0=Math.max(...f0),e0=Math.min(...u0),P0=Math.max(...u0);return U`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${L0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${D0} ${W0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${L0.map((B0)=>U`
                            <g key=${B0?.key||B0?.label}>
                                <path
                                    class="agent-series-chart-line"
                                    d=${g1(B0.points,D0,W0,g0,w0,e0,P0)}
                                    style=${`--agent-series-color: ${B0.color};`}
                                ></path>
                            </g>
                        `)}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${L0.flatMap((B0)=>{let J0=typeof B0?.unit==="string"?B0.unit:"",H0=B0?.key||B0?.label||"series";return B0.points.map((f,e)=>{let M0=j1(f,D0,W0,g0,w0,e0,P0);return U`
                                    <button
                                        key=${`${H0}-point-${e}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${B0.color}; left:${M0.x/D0*100}%; top:${M0.y/W0*100}%;`}
                                        onMouseEnter=${()=>j0({panelKey:T0,seriesKey:H0,run:f.run,value:f.value,unit:J0})}
                                        onMouseLeave=${()=>j0((v0)=>v0?.panelKey===T0?null:v0)}
                                        onFocus=${()=>j0({panelKey:T0,seriesKey:H0,run:f.run,value:f.value,unit:J0})}
                                        onBlur=${()=>j0((v0)=>v0?.panelKey===T0?null:v0)}
                                        aria-label=${`${B0?.label||"Series"} ${M1(f.value,J0)} at run ${f.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${L0.map((B0)=>{let J0=B0.points[B0.points.length-1]?.value,H0=typeof B0?.unit==="string"?B0.unit:"",f=B0?.key||B0?.label||"series",e=Q0?.panelKey===T0&&Q0?.seriesKey===f?Q0:null;return U`
                            <div key=${`${f}-legend`} class=${`agent-series-legend-item${e?" is-hovered":""}`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${B0.color};`}></span>
                                <span class="agent-series-legend-label">${B0?.label||"Series"}</span>
                                ${e&&U`<span class="agent-series-legend-run">run ${e.run}</span>`}
                                <span class="agent-series-legend-value">${M1(e?e.value:J0,e?.unit||H0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},T1=(s)=>{if(!s)return null;let T0=typeof s?.key==="string"?s.key:`panel-${Math.random()}`,L0=N0.has(T0),D0=s?.title||"Extension status",W0=s?.collapsed_text||"",a0=String(s?.state||"").replace(/[-_]+/g," ").replace(/^./,(H0)=>H0.toUpperCase()),f0=o0(s?.state==="completed"?"success":s?.state==="failed"?"error":s?.state==="stopped"?"warning":"info"),u0=typeof s?.detail_markdown==="string"?s.detail_markdown.trim():"",g0=typeof s?.last_run_text==="string"?s.last_run_text.trim():"",w0=typeof s?.tmux_command==="string"?s.tmux_command.trim():"",e0=Array.isArray(s?.series)?s.series:[],P0=Array.isArray(s?.actions)?s.actions:[],B0=Boolean(u0||e0.length>0),J0=[D0,W0].filter(Boolean).join(" — ");return U`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${L0?"true":"false"}
                style=${f0?`--turn-color: ${f0};`:""}
                title=${!L0?J0||D0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>B0?X0(T0):null}
                    >
                        ${f0&&U`<span class=${n0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${D0}</span>
                        ${W0&&U`<span class="agent-thinking-title-meta">${W0}</span>`}
                    </button>
                    ${(P0.length>0||B0&&!L0)&&U`
                        <div class="agent-thinking-tools-inline">
                            ${P0.length>0&&U`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${P0.map((H0)=>{let f=`${T0}:${H0?.key||""}`,e=q?.has?.(f);return U`
                                            <button
                                                key=${f}
                                                class=${`agent-thinking-action-btn${H0?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>B?.(s,H0)}
                                                disabled=${Boolean(e)}
                                            >
                                                ${e?"Working…":H0?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${B0&&!L0&&U`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${D0}`}
                                    title="Expand details"
                                    onClick=${()=>X0(T0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${B0&&L0&&U`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${D0}`}
                        title="Collapse details"
                        onClick=${()=>X0(T0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${L0&&U`
                    <div class=${`agent-thinking-autoresearch-layout${u0?"":" chart-only"}`}>
                        ${u0&&U`
                            <div
                                class="agent-thinking-body agent-thinking-autoresearch-detail"
                                dangerouslySetInnerHTML=${{__html:g$(u0)}}
                            />
                        `}
                        ${e0.length>0?U`
                                <div class="agent-series-chart-stack">
                                    ${m0(e0,T0)}
                                    ${g0&&U`<div class="agent-series-chart-note">${g0}</div>`}
                                    ${w0&&U`
                                        <div class="agent-series-chart-command">
                                            <div class="agent-series-chart-command-header">
                                                <span>Attach to session</span>
                                                <button
                                                    type="button"
                                                    class="agent-thinking-action-btn agent-series-chart-command-copy"
                                                    onClick=${()=>B?.(s,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                                >
                                                    Copy tmux
                                                </button>
                                            </div>
                                            <pre class="agent-series-chart-command-code">${w0}</pre>
                                        </div>
                                    `}
                                </div>
                            `:U`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return U`
        <div class="agent-status-panel">
            ${L&&Q&&J1(Q,b0)}
            ${A&&Array.isArray(N)&&N.map((s)=>T1(s))}
            ${L&&_?.type==="intent"&&J1(_,s0,G_)}
            ${L&&Y&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${E0?`--turn-color: ${E0};`:""}>
                    <span class=${n0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${K1}</span>
                </div>
            `}
            ${L&&b&&h0({panelTitle:x0("Planning"),text:c.text,fullText:c.fullText,totalLines:c.totalLines,panelKey:"plan"})}
            ${L&&R&&h0({panelTitle:x0("Thoughts"),text:t.text,fullText:t.fullText,totalLines:t.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${L&&H&&h0({panelTitle:x0("Draft"),text:$0.text,fullText:$0.fullText,totalLines:$0.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${L&&_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${I0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${E0?`--turn-color: ${E0};`:""}>
                    ${E0&&U`<span class=${n0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!I0&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${c0}</span>
                </div>
            `}
        </div>
    `}function q7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:Q}=_,N=Z?.title||"Agent Request",q=Z?.kind||"other",B=Z?.rawInput||{},G=B.command||B.commands&&B.commands[0]||null,V=B.diff||null,W=B.fileName||B.path||null,L=Z?.description||B.description||B.explanation||null,T=(Array.isArray(Z?.locations)?Z.locations:[]).map((P)=>P?.path).filter((P)=>Boolean(P)),y=Array.from(new Set([W,...T].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let k=async(P)=>{try{await H5(j,P,Q||null),$()}catch(i){console.error("Failed to respond to agent request:",i)}},J=async()=>{try{await x8(N,`Auto-approved: ${N}`),await H5(j,"approved",Q||null),$()}catch(P){console.error("Failed to add to whitelist:",P)}},I=Y&&Y.length>0;return U`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${N}</div>
                </div>
                ${(L||G||V||y.length>0)&&U`
                    <div class="agent-request-body">
                        ${L&&U`
                            <div class="agent-request-description">${L}</div>
                        `}
                        ${y.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${y.map((P,i)=>U`<li key=${i}>${P}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&U`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${V&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${V}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${I?Y.map((P)=>U`
                            <button 
                                key=${P.optionId||P.id||String(P)}
                                class="agent-request-btn ${P.kind==="allow_once"||P.kind==="allow_always"?"primary":""}"
                                onClick=${()=>k(P.optionId||P.id||P)}
                            >
                                ${P.name||P.label||P.optionId||P.id||String(P)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>k("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>k("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${J}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function G7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,Q=86400000;if(Z<Q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*Q){let B=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${B} ${G}`}let N=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${q}`}function h$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function b_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function _$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var fY=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),vY=new Set(["text/markdown"]),bY=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),mY=new Set(["application/vnd.jgraph.mxfile"]);function p$(_){return typeof _==="string"?_.trim().toLowerCase():""}function uY(_){let $=p$(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function gY(_){let $=p$(_);return!!$&&$.endsWith(".pdf")}function hY(_){let $=p$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function c$(_,$){let j=p$(_);if(uY($)||mY.has(j))return"drawio";if(gY($)||j==="application/pdf")return"pdf";if(hY($)||bY.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(fY.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function K7(_){let $=p$(_);return vY.has($)}function X7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function pY(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function cY(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),Q=Number(j[3]);if(![Z,Y,Q].every((N)=>Number.isFinite(N)))return null;return{r:Z,g:Y,b:Q}}function B7(_){return pY(_)||cY(_)}function b5(_){let $=(Q)=>{let N=Q/255;return N<=0.03928?N/12.92:((N+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function lY(_,$){let j=Math.max(b5(_),b5($)),Z=Math.min(b5(_),b5($));return(j+0.05)/(Z+0.05)}function iY(_,$,j="#ffffff"){let Z=B7(_);if(!Z)return j;let Y=j,Q=-1;for(let N of $){let q=B7(N);if(!q)continue;let B=lY(Z,q);if(B>Q)Y=N,Q=B}return Y}function Q6(){let _=getComputedStyle(document.documentElement),$=(T,y)=>{for(let k of T){let J=_.getPropertyValue(k).trim();if(J)return J}return y},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),N=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),B=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),V=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),L=$(["--font-family"],"system-ui, sans-serif"),A=iY(q,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:Q,bgEmphasis:N,accent:q,good:B,warning:G,attention:V,border:W,fontFamily:L,buttonTextColor:A}}function W7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:Q,warning:N,attention:q,border:B,fontFamily:G}=Q6();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:N,subtle:N},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:N,subtle:N},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:B},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var dY=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),V7=!1,m5=null,L7=!1;function N6(_){_.querySelector(".adaptive-card-notice")?.remove()}function nY(_,$,j="error"){N6(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function oY(_,$=(j)=>D_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function rY(_=($)=>D_($,null)){return($,j)=>{try{let Z=oY($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function sY(_){if(L7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=rY(),L7=!0}async function aY(){if(V7)return;if(m5)return m5;return m5=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{V7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),m5}function tY(){return globalThis.AdaptiveCards}function eY(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function _Q(_){return dY.has(_)}function G6(_){if(!Array.isArray(_))return[];return _.filter(eY)}function $Q(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function q6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>q6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${q6(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function jQ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return q6($);return typeof $==="string"?$:String($)}function ZQ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((q)=>Z(q));if(!Y||typeof Y!=="object")return Y;let N={...Y};if(typeof N.id==="string"&&N.id in j&&String(N.type||"").startsWith("Input."))N.value=jQ(N.type,j[N.id],N);for(let[q,B]of Object.entries(N))if(Array.isArray(B)||B&&typeof B==="object")N[q]=Z(B);return N};return Z(_)}function YQ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function QQ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function NQ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=QQ(_.completed_at||j?.submitted_at),Q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Q}}async function U7(_,$,j){if(!_Q($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await aY()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=tY();sY(Z);let Y=new Z.AdaptiveCard,Q=Q6();Y.hostConfig=new Z.HostConfig(W7());let N=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:ZQ($.payload,N);Y.parse(q),Y.onExecuteAction=(V)=>{let W=$Q(V);if(j?.onAction)N6(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((L)=>{console.error("[adaptive-card] Action failed:",L);let A=L instanceof Error?L.message:String(L||"Action failed.");nY(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let B=Y.render();if(!B)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Q.buttonTextColor);let G=NQ($);if(G){_.classList.add("adaptive-card-finished");let V=document.createElement("div");V.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=G.label,V.appendChild(W),G.detail){let L=document.createElement("span");L.className="adaptive-card-status-detail",L.textContent=G.detail,V.appendChild(L)}_.appendChild(V)}if(N6(_),_.appendChild(B),G)YQ(B);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function z7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:l$(j)})).filter(($)=>$.value)}function qQ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function K6(_){if(!Array.isArray(_))return[];return _.filter(qQ)}function F7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l$(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=z7(j).map(({key:Q,value:N})=>`${Q}: ${N}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function H7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=z7(_.data),Z=j.length>0?j.slice(0,2).map(({key:Q,value:N})=>`${Q}: ${N}`).join(", "):l$(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function GQ(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?b_($):null},{label:"Added",value:_?.created_at?_$(_.created_at):null}].filter((Z)=>Z.value)}function KQ(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let Q=v_(_);return`/office-viewer/?url=${encodeURIComponent(Q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function O7({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=k0(()=>c$($?.content_type,Z),[$?.content_type,Z]),Q=X7(Y),N=k0(()=>K7($?.content_type),[$?.content_type]),[q,B]=g(Y==="text"),[G,V]=g(""),[W,L]=g(null),A=S(null),T=k0(()=>GQ($),[$]),y=k0(()=>KQ(_,Z,Y),[_,Z,Y]),k=k0(()=>{if(!N||!G)return"";return D_(G)},[N,G]);return h(()=>{let J=(I)=>{if(I.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),h(()=>{if(!A.current||!k)return;F4(A.current);return},[k]),h(()=>{let J=!1;async function I(){if(Y!=="text"){B(!1),L(null);return}B(!0),L(null);try{let P=await v8(_);if(!J)V(P)}catch{if(!J)L("Failed to load text preview.")}finally{if(!J)B(!1)}}return I(),()=>{J=!0}},[_,Y]),U`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Q}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${y&&U`
                            <a
                                href=${y}
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
                    ${q&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!q&&W&&U`<div class="attachment-preview-state">${W}</div>`}
                    ${!q&&!W&&Y==="image"&&U`
                        <img class="attachment-preview-image" src=${v_(_)} alt=${Z} />
                    `}
                    ${!q&&!W&&(Y==="pdf"||Y==="office"||Y==="drawio")&&y&&U`
                        <iframe class="attachment-preview-frame" src=${y} title=${Z}></iframe>
                    `}
                    ${!q&&!W&&Y==="drawio"&&U`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!q&&!W&&Y==="text"&&N&&U`
                        <div
                            ref=${A}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:k}}
                        />
                    `}
                    ${!q&&!W&&Y==="text"&&!N&&U`
                        <pre class="attachment-preview-text">${G}</pre>
                    `}
                    ${!q&&!W&&Y==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${T.map((J)=>U`
                        <div class="attachment-preview-meta-item" key=${J.label}>
                            <span class="attachment-preview-meta-label">${J.label}</span>
                            <span class="attachment-preview-meta-value">${J.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function J7({src:_,onClose:$}){return h(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function XQ({mediaId:_,onPreview:$}){let[j,Z]=g(null);if(h(()=>{W$(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",Q=j.metadata?.size,N=Q?b_(Q):"",B=c$(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
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
                        ${N&&U`<span class="file-size">${N}</span>`}
                        ${j.content_type&&U`<span class="file-size">${j.content_type}</span>`}
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
    `}function BQ({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=g(null);h(()=>{if(!Number.isFinite(j))return;W$(j).then(Y).catch(()=>{});return},[j]);let Q=Z?.filename||_.label||`attachment-${_.id}`,N=Number.isFinite(j)?v_(j):null,B=c$(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${Q}>
            ${N?U`
                    <a href=${N} download=${Q} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${a_}
                            prefix="post"
                            label=${_.label}
                            title=${Q}
                        />
                    </a>
                `:U`
                    <${a_}
                        prefix="post"
                        label=${_.label}
                        title=${Q}
                    />
                `}
            ${Number.isFinite(j)&&Z&&U`
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
    `}function u5({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?_$(Z):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&U`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Y&&U`
                <span class="content-annotation">Updated: ${Y}</span>
            `}
        </div>
    `}function WQ({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?b_(_.size):"",Y=_.mime_type||"",Q=UQ(Y),N=e4(_.uri);return U`
        <a
            href=${N||"#"}
            class="resource-link"
            target=${N?"_blank":void 0}
            rel=${N?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Q}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&U`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Y&&U`<span>${Y}</span>`}
                    ${Z&&U`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function VQ({block:_}){let[$,j]=g(!1),Z=_.uri||"Embedded resource",Y=_.text||"",Q=Boolean(_.data),N=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&U`
                ${Y&&U`<pre class="resource-embed-content">${Y}</pre>`}
                ${Q&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${N&&U`<span class="resource-embed-blob-meta">${N}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let B=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:N||"application/octet-stream"}),G=URL.createObjectURL(B),V=document.createElement("a");V.href=G,V.download=Z.split("/").pop()||"resource",V.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function LQ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=j6(_,$),Y=r2(_),Q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,N=Z?.title||_.title||_.name||"Generated widget",q=Z?.description||_.description||_.subtitle||"",B=_.open_label||"Open widget",G=(V)=>{if(V.preventDefault(),V.stopPropagation(),!Z)return;j?.(Z)};return U`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Q?` • ${String(Q).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${N}</div>
            </div>
            ${q&&U`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Y}
                    onClick=${G}
                    title=${Y?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${B}
                </button>
                <span class="generated-widget-launch-note">
                    ${Y?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function UQ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function zQ({preview:_}){let $=e4(_.url),j=e4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return U`
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
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function FQ(_,$){return typeof _==="string"?_:""}var HQ=1800,OQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,JQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,DQ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function AQ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function EQ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Q)=>Q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(Q,N)=>{let q=N||"idle";if(Q.dataset.copyState=q,q==="success")Q.innerHTML=JQ,Q.setAttribute("aria-label","Copied"),Q.setAttribute("title","Copied"),Q.classList.add("is-success"),Q.classList.remove("is-error");else if(q==="error")Q.innerHTML=DQ,Q.setAttribute("aria-label","Copy failed"),Q.setAttribute("title","Copy failed"),Q.classList.add("is-error"),Q.classList.remove("is-success");else Q.innerHTML=OQ,Q.setAttribute("aria-label","Copy code"),Q.setAttribute("title","Copy code"),Q.classList.remove("is-success","is-error")};return $.forEach((Q)=>{let N=document.createElement("div");N.className="post-code-block",Q.parentNode?.insertBefore(N,Q),N.appendChild(Q);let q=document.createElement("button");q.type="button",q.className="post-code-copy-btn",Y(q,"idle"),N.appendChild(q);let B=async(G)=>{G.preventDefault(),G.stopPropagation();let W=Q.querySelector("code")?.textContent||"",L=await AQ(W);Y(q,L?"success":"error");let A=j.get(q);if(A)clearTimeout(A);let T=setTimeout(()=>{Y(q,"idle"),j.delete(q)},HQ);j.set(q,T)};q.addEventListener("click",B),Z.push(()=>{q.removeEventListener("click",B);let G=j.get(q);if(G)clearTimeout(G);if(N.parentNode)N.parentNode.insertBefore(Q,N),N.remove()})}),()=>{Z.forEach((Q)=>Q())}}function MQ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let N=j.slice(0,Z),q=j.slice(Q),B=[...N,...q].join(`
`);return B=B.replace(/\n{3,}/g,`

`).trim(),{content:B,fileRefs:Y}}function kQ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let W=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)Y.push(W[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let N=j.slice(0,Z),q=j.slice(Q),B=[...N,...q].join(`
`);return B=B.replace(/\n{3,}/g,`

`).trim(),{content:B,messageRefs:Y}}function IQ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1){let V=j[G].trim();if((V==="Images:"||V==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim(),W=V.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||V.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let L=W[1],A=(W[2]||"").trim()||L;Y.push({id:L,label:A,raw:V})}else Y.push({id:null,label:V,raw:V})}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let N=j.slice(0,Z),q=j.slice(Q),B=[...N,...q].join(`
`);return B=B.replace(/\n{3,}/g,`

`).trim(),{content:B,attachments:Y}}function CQ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function TQ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(CQ).sort((V,W)=>W.length-V.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),Q=new RegExp(`^(${Z.join("|")})$`,"i"),N=new DOMParser().parseFromString(_,"text/html"),q=N.createTreeWalker(N.body,NodeFilter.SHOW_TEXT),B=[],G;while(G=q.nextNode())B.push(G);for(let V of B){let W=V.nodeValue;if(!W||!Y.test(W)){Y.lastIndex=0;continue}Y.lastIndex=0;let L=V.parentElement;if(L&&L.closest("code, pre, script, style"))continue;let A=W.split(Y).filter((y)=>y!=="");if(A.length===0)continue;let T=N.createDocumentFragment();for(let y of A)if(Q.test(y)){let k=N.createElement("mark");k.className="search-highlight-term",k.textContent=y,T.appendChild(k)}else T.appendChild(N.createTextNode(y));V.parentNode.replaceChild(T,V)}return N.body.innerHTML}function D7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:Q,agentAvatarUrl:N,userName:q,userAvatarUrl:B,userAvatarBackground:G,onDelete:V,isThreadReply:W,isThreadPrev:L,isThreadNext:A,isRemoving:T,highlightQuery:y,onFileRef:k,onOpenWidget:J}){let[I,P]=g(null),i=S(null),c=_.data,t=c.type==="agent_response",$0=q||"You",b=t?Q||Z7:$0,R=t?Z6(Q,N,!0):Z6($0,B),H=typeof G==="string"?G.trim().toLowerCase():"",w=!t&&R.image&&(H==="clear"||H==="transparent"),p=t&&Boolean(R.image),N0=`background-color: ${w||p?"transparent":R.color}`,l=c.content_meta,Q0=Boolean(l?.truncated),j0=Boolean(l?.preview),q0=Q0&&!j0,K0=Q0?{originalLength:Number.isFinite(l?.original_length)?l.original_length:c.content?c.content.length:0,maxLength:Number.isFinite(l?.max_length)?l.max_length:0}:null,X0=c.content_blocks||[],F0=c.media_ids||[],A0=FQ(c.content,c.link_previews),{content:E0,fileRefs:n0}=MQ(A0),{content:x0,messageRefs:I0}=kQ(E0),{content:o0,attachments:r0}=IQ(x0);A0=o0;let b0=G6(X0),s0=K6(X0),c0=b0.length===1&&typeof b0[0]?.fallback_text==="string"?b0[0].fallback_text.trim():"",Y1=s0.length===1?F7(s0[0]).trim():"",z0=Boolean(c0)&&A0?.trim()===c0||Boolean(Y1)&&A0?.trim()===Y1,h0=Boolean(A0)&&!q0&&!z0,Q1=typeof y==="string"?y.trim():"",K1=k0(()=>{if(!A0||z0)return"";let f=D_(A0,j);return Q1?TQ(f,Q1):f},[A0,z0,Q1]),G_=(f,e)=>{f.stopPropagation(),P(v_(e))},[J1,j1]=g(null),g1=(f)=>{j1(f)},M1=(f)=>{f.stopPropagation(),V?.(_)},N1=(f,e)=>{let M0=new Set;if(!f||e.length===0)return{content:f,usedIds:M0};return{content:f.replace(/attachment:([^\s)"']+)/g,(d0,P1,y1,_1)=>{let h1=P1.replace(/^\/+/,""),F_=e.find((H_)=>H_.name&&H_.name.toLowerCase()===h1.toLowerCase()&&!M0.has(H_.id))||e.find((H_)=>!M0.has(H_.id));if(!F_)return d0;if(M0.add(F_.id),_1.slice(Math.max(0,y1-2),y1)==="](")return`/media/${F_.id}`;return F_.name||"attachment"}),usedIds:M0}},m0=[],T1=[],s=[],T0=[],L0=[],D0=[],W0=[],a0=0;if(X0.length>0)X0.forEach((f)=>{if(f?.type==="text"&&f.annotations)W0.push(f.annotations);if(f?.type==="generated_widget")D0.push(f);else if(f?.type==="resource_link")T0.push(f);else if(f?.type==="resource")L0.push(f);else if(f?.type==="file"){let e=F0[a0++];if(e)T1.push(e),s.push({id:e,name:f?.name||f?.filename||f?.title})}else if(f?.type==="image"||!f?.type){let e=F0[a0++];if(e){let M0=typeof f?.mime_type==="string"?f.mime_type:void 0;m0.push({id:e,annotations:f?.annotations,mimeType:M0}),s.push({id:e,name:f?.name||f?.filename||f?.title})}}});else if(F0.length>0){let f=r0.length>0;F0.forEach((e,M0)=>{let v0=r0[M0]||null;if(s.push({id:e,name:v0?.label||null}),f)T1.push(e);else m0.push({id:e,annotations:null})})}if(r0.length>0)r0.forEach((f)=>{if(!f?.id)return;let e=s.find((M0)=>String(M0.id)===String(f.id));if(e&&!e.name)e.name=f.label});let{content:f0,usedIds:u0}=N1(A0,s);A0=f0;let g0=m0.filter(({id:f})=>!u0.has(f)),w0=T1.filter((f)=>!u0.has(f)),e0=r0.length>0?r0.map((f,e)=>({id:f.id||`attachment-${e+1}`,label:f.label||`attachment-${e+1}`})):s.map((f,e)=>({id:f.id,label:f.name||`attachment-${e+1}`})),P0=k0(()=>G6(X0),[X0]),B0=k0(()=>K6(X0),[X0]),J0=k0(()=>{return P0.map((f)=>`${f.card_id}:${f.state}`).join("|")},[P0]);h(()=>{if(!i.current)return;return F4(i.current),EQ(i.current)},[K1]);let H0=S(null);return h(()=>{if(!H0.current||P0.length===0)return;let f=H0.current;f.innerHTML="";for(let e of P0){let M0=document.createElement("div");f.appendChild(M0),U7(M0,e,{onAction:async(v0)=>{if(v0.type==="Action.OpenUrl"){let d0=e4(v0.url||"");if(!d0)throw Error("Invalid URL");window.open(d0,"_blank","noopener,noreferrer");return}if(v0.type==="Action.Submit"){await S8({post_id:_.id,thread_id:c.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:v0.type,title:v0.title||"",data:v0.data}});return}console.warn("[post] unsupported adaptive card action:",v0.type,v0)}}).catch((v0)=>{console.error("[post] adaptive card render error:",v0),M0.textContent=e.fallback_text||"Card failed to render."})}},[J0,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${t?"agent-post":""} ${W?"thread-reply":""} ${L?"thread-prev":""} ${A?"thread-next":""} ${T?"removing":""}" onClick=${$}>
            <div class="post-avatar ${t?"agent-avatar":""} ${R.image?"has-image":""}" style=${N0}>
                ${R.image?U`<img src=${R.image} alt=${b} />`:R.letter}
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
                    <span class="post-author">${b}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(f)=>{if(f.preventDefault(),f.stopPropagation(),Z)Z(_.id)}}>${G7(_.timestamp)}</a>
                </div>
                ${q0&&K0&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${h$(K0.originalLength)} chars
                            ${K0.maxLength?U` • Display limit: ${h$(K0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${j0&&K0&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${h$(K0.maxLength)} of ${h$(K0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||I0.length>0||e0.length>0)&&U`
                    <div class="post-file-refs">
                        ${I0.map((f)=>{let e=(M0)=>{if(M0.preventDefault(),M0.stopPropagation(),Y)Y(f,_.chat_jid||null);else{let v0=document.getElementById("post-"+f);if(v0)v0.scrollIntoView({behavior:"smooth",block:"center"}),v0.classList.add("post-highlight"),setTimeout(()=>v0.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${f}`} class="post-msg-pill-link" onClick=${e}>
                                    <${a_}
                                        prefix="post"
                                        label=${"msg:"+f}
                                        title=${"Message "+f}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${n0.map((f)=>{let e=f.split("/").pop()||f;return U`
                                <${a_}
                                    prefix="post"
                                    label=${e}
                                    title=${f}
                                    onClick=${()=>k?.(f)}
                                />
                            `})}
                        ${e0.map((f)=>U`
                            <${BQ}
                                key=${f.id}
                                attachment=${f}
                                onPreview=${g1}
                            />
                        `)}
                    </div>
                `}
                ${h0&&U`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:K1}}
                        onClick=${(f)=>{if(f.target.classList.contains("hashtag")){f.preventDefault(),f.stopPropagation();let e=f.target.dataset.hashtag;if(e)j?.(e)}else if(f.target.tagName==="IMG")f.preventDefault(),f.stopPropagation(),P(f.target.src)}}
                    />
                `}
                ${P0.length>0&&U`
                    <div ref=${H0} class="post-adaptive-cards" />
                `}
                ${B0.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${B0.map((f,e)=>{let M0=H7(f),v0=`${f.card_id}-${e}`;return U`
                                <div key=${v0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${M0.title}</span>
                                        </div>
                                    </div>
                                    ${M0.fields.length>0&&U`
                                        <div class="adaptive-card-submission-fields">
                                            ${M0.fields.map((d0)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${d0.key}: ${d0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${d0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${d0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${_$(M0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${D0.length>0&&U`
                    <div class="generated-widget-launches">
                        ${D0.map((f,e)=>U`
                            <${LQ}
                                key=${f.widget_id||f.id||`${_.id}-widget-${e}`}
                                block=${f}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${W0.length>0&&U`
                    ${W0.map((f,e)=>U`
                        <${u5} key=${e} annotations=${f} />
                    `)}
                `}
                ${g0.length>0&&U`
                    <div class="media-preview">
                        ${g0.map(({id:f,mimeType:e})=>{let v0=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?v_(f):f8(f);return U`
                                <img 
                                    key=${f} 
                                    src=${v0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(d0)=>G_(d0,f)}
                                />
                            `})}
                    </div>
                `}
                ${g0.length>0&&U`
                    ${g0.map(({annotations:f},e)=>U`
                        ${f&&U`<${u5} key=${e} annotations=${f} />`}
                    `)}
                `}
                ${w0.length>0&&U`
                    <div class="file-attachments">
                        ${w0.map((f)=>U`
                            <${XQ} key=${f} mediaId=${f} onPreview=${g1} />
                        `)}
                    </div>
                `}
                ${T0.length>0&&U`
                    <div class="resource-links">
                        ${T0.map((f,e)=>U`
                            <div key=${e}>
                                <${WQ} block=${f} />
                                <${u5} annotations=${f.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${L0.length>0&&U`
                    <div class="resource-embeds">
                        ${L0.map((f,e)=>U`
                            <div key=${e}>
                                <${VQ} block=${f} />
                                <${u5} annotations=${f.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${c.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${c.link_previews.map((f,e)=>U`
                            <${zQ} key=${e} preview=${f} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${I&&U`<${J7} src=${I} onClose=${()=>P(null)} />`}
        ${J1&&U`
            <${O7}
                mediaId=${J1.mediaId}
                info=${J1.info}
                onClose=${()=>j1(null)}
            />
        `}
    `}function A7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:Q,onScrollToMessage:N,onFileRef:q,onOpenWidget:B,emptyMessage:G,timelineRef:V,agents:W,user:L,onDeletePost:A,reverse:T=!0,removingPostIds:y,searchQuery:k}){let[J,I]=g(!1),P=S(null),i=typeof IntersectionObserver<"u",c=x(async()=>{if(!j||!$||J)return;I(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{I(!1)}},[$,J,j]),t=x((l)=>{let{scrollTop:Q0,scrollHeight:j0,clientHeight:q0}=l.target,K0=T?j0-q0-Q0:Q0,X0=Math.max(300,q0);if(K0<X0)c()},[T,c]);h(()=>{if(!i)return;let l=P.current,Q0=V?.current;if(!l||!Q0)return;let j0=300,q0=new IntersectionObserver((K0)=>{for(let X0 of K0){if(!X0.isIntersecting)continue;c()}},{root:Q0,rootMargin:`${j0}px 0px ${j0}px 0px`,threshold:0});return q0.observe(l),()=>q0.disconnect()},[i,$,j,V,c]);let $0=S(c);if($0.current=c,h(()=>{if(i)return;if(!V?.current)return;let{scrollTop:l,scrollHeight:Q0,clientHeight:j0}=V.current,q0=T?Q0-j0-l:l,K0=Math.max(300,j0);if(q0<K0)$0.current?.()},[i,_,$,T,V]),h(()=>{if(!V?.current)return;if(!$||J)return;let{scrollTop:l,scrollHeight:Q0,clientHeight:j0}=V.current,q0=T?Q0-j0-l:l,K0=Math.max(300,j0);if(Q0<=j0+1||q0<K0)$0.current?.()},[_,$,J,T,V]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let b=_.slice().sort((l,Q0)=>l.id-Q0.id),R=(l)=>{let Q0=l?.data?.thread_id;if(Q0===null||Q0===void 0||Q0==="")return null;let j0=Number(Q0);return Number.isFinite(j0)?j0:null},H=new Map;for(let l=0;l<b.length;l+=1){let Q0=b[l],j0=Number(Q0?.id),q0=R(Q0);if(q0!==null){let K0=H.get(q0)||{anchorIndex:-1,replyIndexes:[]};K0.replyIndexes.push(l),H.set(q0,K0)}else if(Number.isFinite(j0)){let K0=H.get(j0)||{anchorIndex:-1,replyIndexes:[]};K0.anchorIndex=l,H.set(j0,K0)}}let w=new Map;for(let[l,Q0]of H.entries()){let j0=new Set;if(Q0.anchorIndex>=0)j0.add(Q0.anchorIndex);for(let q0 of Q0.replyIndexes)j0.add(q0);w.set(l,Array.from(j0).sort((q0,K0)=>q0-K0))}let p=b.map((l,Q0)=>{let j0=R(l);if(j0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=w.get(j0);if(!q0||q0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let K0=q0.indexOf(Q0);if(K0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:K0>0,hasThreadNext:K0<q0.length-1}}),N0=U`<div class="timeline-sentinel" ref=${P}></div>`;return U`
        <div class="timeline ${T?"reverse":"normal"}" ref=${V} onScroll=${t}>
            <div class="timeline-content">
                ${T?N0:null}
                ${b.map((l,Q0)=>{let j0=Boolean(l.data?.thread_id&&l.data.thread_id!==l.id),q0=y?.has?.(l.id),K0=p[Q0]||{};return U`
                    <${D7}
                        key=${l.id}
                        post=${l}
                        isThreadReply=${j0}
                        isThreadPrev=${K0.hasThreadPrev}
                        isThreadNext=${K0.hasThreadNext}
                        isRemoving=${q0}
                        highlightQuery=${k}
                        agentName=${Y7(l.data?.agent_id,W||{})}
                        agentAvatarUrl=${Q7(l.data?.agent_id,W||{})}
                        userName=${L?.name||L?.user_name}
                        userAvatarUrl=${L?.avatar_url||L?.avatarUrl||L?.avatar}
                        userAvatarBackground=${L?.avatar_background||L?.avatarBackground}
                        onClick=${()=>Z?.(l)}
                        onHashtagClick=${Y}
                        onMessageRef=${Q}
                        onScrollToMessage=${N}
                        onFileRef=${q}
                        onOpenWidget=${B}
                        onDelete=${A}
                    />
                `})}
                ${T?null:N0}
            </div>
        </div>
    `}class E7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let Q=Y===!0?0:typeof Y==="number"?Y:0;if(Q>j)j=Q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var i0=new E7;var g5=null,X6=null;function PQ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function M7(){if(X6)return Promise.resolve(X6);if(!g5)g5=import(PQ()).then((_)=>{return X6=_,_}).catch((_)=>{throw g5=null,_});return g5}class k7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await M7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var B6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new k7(_,$)}};function W6(){M7().catch(()=>{})}var i$="piclaw://terminal";var yQ={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},SQ={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},h5=null,V6=null;function xQ(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function wQ(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,Q)=>{let N=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!xQ(N))return $(Y,Q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,Q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function RQ(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!h5)h5=wQ(()=>Promise.resolve($.init?.())).catch((j)=>{throw h5=null,j});return await h5,$}async function fQ(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!V6)V6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await V6}async function vQ(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function bQ(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function mQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function H4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function uQ(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function I7(){let _=mQ(),$=_?SQ:yQ,j=H4("--bg-primary",_?"#000000":"#ffffff"),Z=H4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=H4("--text-secondary",_?"#71767b":"#536471"),Q=H4("--accent-color","#1d9bf0"),N=H4("--danger-color",_?"#ff7b72":"#cf222e"),q=H4("--success-color",_?"#7ee787":"#1a7f37"),B=H4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=H4("--border-color",_?"#2f3336":"#eff3f4"),V=H4("--accent-soft-strong",uQ(Q,_?"47":"33"));return{background:j,foreground:Z,cursor:Q,cursorAccent:j,selectionBackground:V,selectionForeground:Z,black:B,red:N,green:q,yellow:$.yellow,blue:Q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class L6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,Q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(Q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await RQ();if(await fQ(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:I7()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=I7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await vQ();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(bQ($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var U6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new L6(_,$)}},z6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new L6(_,$)}};function O4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function p5(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),Q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),N=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Q||Y>1||N)}function C7(_,$={}){if(O4($))return null;if(p5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:gQ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function F6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function H6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function O6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function T7(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function $$(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function P7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function y7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function gQ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function hQ(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function S7(_,$={}){if(O4($))return null;if(p5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:hQ(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function c5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function pQ(_){try{return JSON.parse(_)}catch{return null}}function cQ(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function lQ(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class J6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=lQ($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||pQ;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=cQ(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var d$=()=>{throw Error("Operation requires compiling with --exportRuntime")},iQ=typeof BigUint64Array<"u",n$=Symbol();var dQ=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function x7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return dQ.decode(Z)}catch{let Y="",Q=0;while(j-Q>1024)Y+=String.fromCharCode(...Z.subarray(Q,Q+=1024));return Y+String.fromCharCode(...Z.subarray(Q))}}function w7(_){let $={};function j(Y,Q){if(!Y)return"<yet unknown>";return x7(Y.buffer,Q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Q,N,q,B){let G=$.memory||Z.memory;throw Error(`abort: ${j(G,Q)} at ${j(G,N)}:${q}:${B}`)},Z.trace=Z.trace||function(Q,N,...q){let B=$.memory||Z.memory;console.log(`trace: ${j(B,Q)}${N?" ":""}${q.slice(0,N).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function R7(_,$){let j=$.exports,Z=j.memory,Y=j.table,Q=j.__new||d$,N=j.__pin||d$,q=j.__unpin||d$,B=j.__collect||d$,G=j.__rtti_base,V=G?(H)=>H[G>>>2]:d$;_.__new=Q,_.__pin=N,_.__unpin=q,_.__collect=B;function W(H){let w=new Uint32Array(Z.buffer);if((H>>>=0)>=V(w))throw Error(`invalid id: ${H}`);return w[(G+4>>>2)+H]}function L(H){let w=W(H);if(!(w&7))throw Error(`not an array: ${H}, flags=${w}`);return w}function A(H){return 31-Math.clz32(H>>>6&31)}function T(H){if(H==null)return 0;let w=H.length,p=Q(w<<1,2),N0=new Uint16Array(Z.buffer);for(let l=0,Q0=p>>>1;l<w;++l)N0[Q0+l]=H.charCodeAt(l);return p}_.__newString=T;function y(H){if(H==null)return 0;let w=new Uint8Array(H),p=Q(w.length,1);return new Uint8Array(Z.buffer).set(w,p),p}_.__newArrayBuffer=y;function k(H){if(!H)return null;let w=Z.buffer;if(new Uint32Array(w)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return x7(w,H)}_.__getString=k;function J(H,w,p){let N0=Z.buffer;if(p)switch(H){case 2:return new Float32Array(N0);case 3:return new Float64Array(N0)}else switch(H){case 0:return new(w?Int8Array:Uint8Array)(N0);case 1:return new(w?Int16Array:Uint16Array)(N0);case 2:return new(w?Int32Array:Uint32Array)(N0);case 3:return new(w?BigInt64Array:BigUint64Array)(N0)}throw Error(`unsupported align: ${H}`)}function I(H,w=0){let p=w,N0=L(H),l=A(N0),Q0=typeof p!=="number",j0=Q0?p.length:p,q0=Q(j0<<l,N0&4?H:1),K0;if(N0&4)K0=q0;else{N(q0);let X0=Q(N0&2?16:12,H);q(q0);let F0=new Uint32Array(Z.buffer);if(F0[X0+0>>>2]=q0,F0[X0+4>>>2]=q0,F0[X0+8>>>2]=j0<<l,N0&2)F0[X0+12>>>2]=j0;K0=X0}if(Q0){let X0=J(l,N0&2048,N0&4096),F0=q0>>>l;if(N0&16384)for(let A0=0;A0<j0;++A0)X0[F0+A0]=p[A0];else X0.set(p,F0)}return K0}_.__newArray=I;function P(H){let w=new Uint32Array(Z.buffer),p=w[H+-8>>>2],N0=L(p),l=A(N0),Q0=N0&4?H:w[H+4>>>2],j0=N0&2?w[H+12>>>2]:w[Q0+-4>>>2]>>>l;return J(l,N0&2048,N0&4096).subarray(Q0>>>=l,Q0+j0)}_.__getArrayView=P;function i(H){let w=P(H),p=w.length,N0=Array(p);for(let l=0;l<p;l++)N0[l]=w[l];return N0}_.__getArray=i;function c(H){let w=Z.buffer,p=new Uint32Array(w)[H+-4>>>2];return w.slice(H,H+p)}_.__getArrayBuffer=c;function t(H){if(!Y)throw Error("Operation requires compiling with --exportTable");let w=new Uint32Array(Z.buffer)[H>>>2];return Y.get(w)}_.__getFunction=t;function $0(H,w,p){return new H(b(H,w,p))}function b(H,w,p){let N0=Z.buffer,l=new Uint32Array(N0);return new H(N0,l[p+4>>>2],l[p+8>>>2]>>>w)}function R(H,w,p){_[`__get${w}`]=$0.bind(null,H,p),_[`__get${w}View`]=b.bind(null,H,p)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{R(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),iQ)[BigUint64Array,BigInt64Array].forEach((H)=>{R(H,H.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,oQ(j,_)}function f7(_){return typeof Response<"u"&&_ instanceof Response}function nQ(_){return _ instanceof WebAssembly.Module}async function D6(_,$={}){if(f7(_=await _))return l5(_,$);let j=nQ(_)?_:await WebAssembly.compile(_),Z=w7($),Y=await WebAssembly.instantiate(j,$),Q=R7(Z,Y);return{module:j,instance:Y,exports:Q}}async function l5(_,$={}){if(!WebAssembly.instantiateStreaming)return D6(f7(_=await _)?_.arrayBuffer():_,$);let j=w7($),Z=await WebAssembly.instantiateStreaming(_,$),Y=R7(j,Z.instance);return{...Z,exports:Y}}function oQ(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],Q=Z.split("."),N=$;while(Q.length>1){let G=Q.shift();if(!Object.hasOwn(N,G))N[G]={};N=N[G]}let q=Q[0],B=q.indexOf("#");if(B>=0){let G=q.substring(0,B),V=N[G];if(typeof V>"u"||!V.prototype){let W=function(...L){return W.wrap(W.prototype.constructor(0,...L))};if(W.prototype={valueOf(){return this[n$]}},W.wrap=function(L){return Object.create(W.prototype,{[n$]:{value:L,writable:!1}})},V)Object.getOwnPropertyNames(V).forEach((L)=>Object.defineProperty(W,L,Object.getOwnPropertyDescriptor(V,L)));N[G]=W}if(q=q.substring(B+1),N=N[G].prototype,/^(get|set):/.test(q)){if(!Object.hasOwn(N,q=q.substring(4))){let W=_[Z.replace("set:","get:")],L=_[Z.replace("get:","set:")];Object.defineProperty(N,q,{get(){return W(this[n$])},set(A){L(this[n$],A)},enumerable:!0})}}else if(q==="constructor")(N[q]=function(...W){return j(W.length),Y(...W)}).original=Y;else(N[q]=function(...W){return j(W.length),Y(this[n$],...W)}).original=Y}else if(/^(get|set):/.test(q)){if(!Object.hasOwn(N,q=q.substring(4)))Object.defineProperty(N,q,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(N[q]=(...G)=>{return j(G.length),Y(...G)}).original=Y;else N[q]=Y}return $}var sQ="/static/js/vendor/remote-display-decoder.wasm",i5=null;function v7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function b7(){if(i5)return i5;return i5=(async()=>{try{let Z=function(Y,Q,N,q,B,G,V){let W=v7(Q),L=j.__pin(j.__newArrayBuffer(W));try{return j[Y](L,N,q,B,G,V.bitsPerPixel,V.bigEndian?1:0,V.trueColor?1:0,V.redMax,V.greenMax,V.blueMax,V.redShift,V.greenShift,V.blueShift)}finally{j.__unpin(L);try{j.__collect()}catch{}}},_=await fetch(sQ,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof l5==="function"?await l5(_,{}):await D6(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,Q){j.initFramebuffer(Y,Q)},getFramebuffer(){let Y=j.getFramebufferPtr(),Q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,Q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,Q,N,q,B,G){return Z("processRawRect",Y,Q,N,q,B,G)},processCopyRect(Y,Q,N,q,B,G){return j.processCopyRect(Y,Q,N,q,B,G)},processRreRect(Y,Q,N,q,B,G){return Z("processRreRect",Y,Q,N,q,B,G)},processHextileRect(Y,Q,N,q,B,G){return Z("processHextileRect",Y,Q,N,q,B,G)},processZrleTileData(Y,Q,N,q,B,G){return Z("processZrleTileData",Y,Q,N,q,B,G)},decodeRawRectToRgba(Y,Q,N,q){let B=v7(Y),G=j.__pin(j.__newArrayBuffer(B));try{let V=j.__pin(j.decodeRawRectToRgba(G,Q,N,q.bitsPerPixel,q.bigEndian?1:0,q.trueColor?1:0,q.redMax,q.greenMax,q.blueMax,q.redShift,q.greenShift,q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(V))}finally{j.__unpin(V)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),i5}function F$(_,$,j){return Math.max($,Math.min(j,_))}function d5(_,$,j){let Z=new Uint8Array(6),Y=F$(Math.floor(Number($||0)),0,65535),Q=F$(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=F$(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=Q>>8&255,Z[5]=Q&255,Z}function E6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function m7(_,$,j,Z,Y){let Q=Math.max(1,Math.floor(Number(Z||0))),N=Math.max(1,Math.floor(Number(Y||0))),q=Math.max(1,Number(j?.width||0)),B=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/q,V=(Number($||0)-Number(j?.top||0))/B;return{x:F$(Math.floor(G*Q),0,Math.max(0,Q-1)),y:F$(Math.floor(V*N),0,Math.max(0,N-1))}}function u7(_,$,j,Z=0){let Y=Number(_)<0?8:16,Q=F$(Number(Z||0)|Y,0,255);return[d5(Q,$,j),d5(Number(Z||0),$,j)]}function g7(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function o$(_){if(typeof _!=="string")return null;return _.length>0?_:null}function h7(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),Q=Math.max(1,Math.floor(Number($||0))),N=Math.max(1,Math.floor(Number(j||0))),q=Math.max(1,Math.floor(Number(Z||0))),B=Math.min(Y/N,Q/q);if(!Number.isFinite(B)||B<=0)return 1;return Math.max(0.01,B)}var A6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)A6[`F${_}`]=65470+(_-1);function M6(_){let $=[_?.key,_?.code];for(let Q of $)if(Q&&Object.prototype.hasOwnProperty.call(A6,Q))return A6[Q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var R1=Uint8Array,A_=Uint16Array,w6=Int32Array,n5=new R1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),o5=new R1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),P6=new R1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),i7=function(_,$){var j=new A_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new w6(j[30]);for(var Z=1;Z<30;++Z)for(var Q=j[Z];Q<j[Z+1];++Q)Y[Q]=Q-j[Z]<<5|Z;return{b:j,r:Y}},d7=i7(n5,2),n7=d7.b,y6=d7.r;n7[28]=258,y6[258]=28;var o7=i7(o5,0),aQ=o7.b,p7=o7.r,S6=new A_(32768);for(p0=0;p0<32768;++p0)N4=(p0&43690)>>1|(p0&21845)<<1,N4=(N4&52428)>>2|(N4&13107)<<2,N4=(N4&61680)>>4|(N4&3855)<<4,S6[p0]=((N4&65280)>>8|(N4&255)<<8)>>1;var N4,p0,q4=function(_,$,j){var Z=_.length,Y=0,Q=new A_($);for(;Y<Z;++Y)if(_[Y])++Q[_[Y]-1];var N=new A_($);for(Y=1;Y<$;++Y)N[Y]=N[Y-1]+Q[Y-1]<<1;var q;if(j){q=new A_(1<<$);var B=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var G=Y<<4|_[Y],V=$-_[Y],W=N[_[Y]-1]++<<V;for(var L=W|(1<<V)-1;W<=L;++W)q[S6[W]>>B]=G}}else{q=new A_(Z);for(Y=0;Y<Z;++Y)if(_[Y])q[Y]=S6[N[_[Y]-1]++]>>15-_[Y]}return q},b4=new R1(288);for(p0=0;p0<144;++p0)b4[p0]=8;var p0;for(p0=144;p0<256;++p0)b4[p0]=9;var p0;for(p0=256;p0<280;++p0)b4[p0]=7;var p0;for(p0=280;p0<288;++p0)b4[p0]=8;var p0,t$=new R1(32);for(p0=0;p0<32;++p0)t$[p0]=5;var p0,tQ=q4(b4,9,0),eQ=q4(b4,9,1),_N=q4(t$,5,0),$N=q4(t$,5,1),k6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},t_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},I6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},R6=function(_){return(_+7)/8|0},a$=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new R1(_.subarray($,j))};var jN=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],z_=function(_,$,j){var Z=Error($||jN[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,z_);if(!j)throw Z;return Z},ZN=function(_,$,j,Z){var Y=_.length,Q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new R1(0);var N=!j,q=N||$.i!=2,B=$.i;if(N)j=new R1(Y*3);var G=function(Y1){var z0=j.length;if(Y1>z0){var h0=new R1(Math.max(z0*2,Y1));h0.set(j),j=h0}},V=$.f||0,W=$.p||0,L=$.b||0,A=$.l,T=$.d,y=$.m,k=$.n,J=Y*8;do{if(!A){V=t_(_,W,1);var I=t_(_,W+1,3);if(W+=3,!I){var P=R6(W)+4,i=_[P-4]|_[P-3]<<8,c=P+i;if(c>Y){if(B)z_(0);break}if(q)G(L+i);j.set(_.subarray(P,c),L),$.b=L+=i,$.p=W=c*8,$.f=V;continue}else if(I==1)A=eQ,T=$N,y=9,k=5;else if(I==2){var t=t_(_,W,31)+257,$0=t_(_,W+10,15)+4,b=t+t_(_,W+5,31)+1;W+=14;var R=new R1(b),H=new R1(19);for(var w=0;w<$0;++w)H[P6[w]]=t_(_,W+w*3,7);W+=$0*3;var p=k6(H),N0=(1<<p)-1,l=q4(H,p,1);for(var w=0;w<b;){var Q0=l[t_(_,W,N0)];W+=Q0&15;var P=Q0>>4;if(P<16)R[w++]=P;else{var j0=0,q0=0;if(P==16)q0=3+t_(_,W,3),W+=2,j0=R[w-1];else if(P==17)q0=3+t_(_,W,7),W+=3;else if(P==18)q0=11+t_(_,W,127),W+=7;while(q0--)R[w++]=j0}}var K0=R.subarray(0,t),X0=R.subarray(t);y=k6(K0),k=k6(X0),A=q4(K0,y,1),T=q4(X0,k,1)}else z_(1);if(W>J){if(B)z_(0);break}}if(q)G(L+131072);var F0=(1<<y)-1,A0=(1<<k)-1,E0=W;for(;;E0=W){var j0=A[I6(_,W)&F0],n0=j0>>4;if(W+=j0&15,W>J){if(B)z_(0);break}if(!j0)z_(2);if(n0<256)j[L++]=n0;else if(n0==256){E0=W,A=null;break}else{var x0=n0-254;if(n0>264){var w=n0-257,I0=n5[w];x0=t_(_,W,(1<<I0)-1)+n7[w],W+=I0}var o0=T[I6(_,W)&A0],r0=o0>>4;if(!o0)z_(3);W+=o0&15;var X0=aQ[r0];if(r0>3){var I0=o5[r0];X0+=I6(_,W)&(1<<I0)-1,W+=I0}if(W>J){if(B)z_(0);break}if(q)G(L+131072);var b0=L+x0;if(L<X0){var s0=Q-X0,c0=Math.min(X0,b0);if(s0+L<0)z_(3);for(;L<c0;++L)j[L]=Z[s0+L]}for(;L<b0;++L)j[L]=j[L-X0]}}if($.l=A,$.p=E0,$.b=L,$.f=V,A)V=1,$.m=y,$.d=T,$.n=k}while(!V);return L!=j.length&&N?a$(j,0,L):j.subarray(0,L)},J4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},r$=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},C6=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,Q=j.slice();if(!Y)return{t:s7,l:0};if(Y==1){var N=new R1(j[0].s+1);return N[j[0].s]=1,{t:N,l:1}}j.sort(function(c,t){return c.f-t.f}),j.push({s:-1,f:25001});var q=j[0],B=j[1],G=0,V=1,W=2;j[0]={s:-1,f:q.f+B.f,l:q,r:B};while(V!=Y-1)q=j[j[G].f<j[W].f?G++:W++],B=j[G!=V&&j[G].f<j[W].f?G++:W++],j[V++]={s:-1,f:q.f+B.f,l:q,r:B};var L=Q[0].s;for(var Z=1;Z<Y;++Z)if(Q[Z].s>L)L=Q[Z].s;var A=new A_(L+1),T=x6(j[V-1],A,0);if(T>$){var Z=0,y=0,k=T-$,J=1<<k;Q.sort(function(t,$0){return A[$0.s]-A[t.s]||t.f-$0.f});for(;Z<Y;++Z){var I=Q[Z].s;if(A[I]>$)y+=J-(1<<T-A[I]),A[I]=$;else break}y>>=k;while(y>0){var P=Q[Z].s;if(A[P]<$)y-=1<<$-A[P]++-1;else++Z}for(;Z>=0&&y;--Z){var i=Q[Z].s;if(A[i]==$)--A[i],++y}T=$}return{t:new R1(A),l:T}},x6=function(_,$,j){return _.s==-1?Math.max(x6(_.l,$,j+1),x6(_.r,$,j+1)):$[_.s]=j},c7=function(_){var $=_.length;while($&&!_[--$]);var j=new A_(++$),Z=0,Y=_[0],Q=1,N=function(B){j[Z++]=B};for(var q=1;q<=$;++q)if(_[q]==Y&&q!=$)++Q;else{if(!Y&&Q>2){for(;Q>138;Q-=138)N(32754);if(Q>2)N(Q>10?Q-11<<5|28690:Q-3<<5|12305),Q=0}else if(Q>3){N(Y),--Q;for(;Q>6;Q-=6)N(8304);if(Q>2)N(Q-3<<5|8208),Q=0}while(Q--)N(Y);Q=1,Y=_[q]}return{c:j.subarray(0,Z),n:$}},s$=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},r7=function(_,$,j){var Z=j.length,Y=R6($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var Q=0;Q<Z;++Q)_[Y+Q+4]=j[Q];return(Y+4+Z)*8},l7=function(_,$,j,Z,Y,Q,N,q,B,G,V){J4($,V++,j),++Y[256];var W=C6(Y,15),L=W.t,A=W.l,T=C6(Q,15),y=T.t,k=T.l,J=c7(L),I=J.c,P=J.n,i=c7(y),c=i.c,t=i.n,$0=new A_(19);for(var b=0;b<I.length;++b)++$0[I[b]&31];for(var b=0;b<c.length;++b)++$0[c[b]&31];var R=C6($0,7),H=R.t,w=R.l,p=19;for(;p>4&&!H[P6[p-1]];--p);var N0=G+5<<3,l=s$(Y,b4)+s$(Q,t$)+N,Q0=s$(Y,L)+s$(Q,y)+N+14+3*p+s$($0,H)+2*$0[16]+3*$0[17]+7*$0[18];if(B>=0&&N0<=l&&N0<=Q0)return r7($,V,_.subarray(B,B+G));var j0,q0,K0,X0;if(J4($,V,1+(Q0<l)),V+=2,Q0<l){j0=q4(L,A,0),q0=L,K0=q4(y,k,0),X0=y;var F0=q4(H,w,0);J4($,V,P-257),J4($,V+5,t-1),J4($,V+10,p-4),V+=14;for(var b=0;b<p;++b)J4($,V+3*b,H[P6[b]]);V+=3*p;var A0=[I,c];for(var E0=0;E0<2;++E0){var n0=A0[E0];for(var b=0;b<n0.length;++b){var x0=n0[b]&31;if(J4($,V,F0[x0]),V+=H[x0],x0>15)J4($,V,n0[b]>>5&127),V+=n0[b]>>12}}}else j0=tQ,q0=b4,K0=_N,X0=t$;for(var b=0;b<q;++b){var I0=Z[b];if(I0>255){var x0=I0>>18&31;if(r$($,V,j0[x0+257]),V+=q0[x0+257],x0>7)J4($,V,I0>>23&31),V+=n5[x0];var o0=I0&31;if(r$($,V,K0[o0]),V+=X0[o0],o0>3)r$($,V,I0>>5&8191),V+=o5[o0]}else r$($,V,j0[I0]),V+=q0[I0]}return r$($,V,j0[256]),V+q0[256]},YN=new w6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),s7=new R1(0),QN=function(_,$,j,Z,Y,Q){var N=Q.z||_.length,q=new R1(Z+N+5*(1+Math.ceil(N/7000))+Y),B=q.subarray(Z,q.length-Y),G=Q.l,V=(Q.r||0)&7;if($){if(V)B[0]=Q.r>>3;var W=YN[$-1],L=W>>13,A=W&8191,T=(1<<j)-1,y=Q.p||new A_(32768),k=Q.h||new A_(T+1),J=Math.ceil(j/3),I=2*J,P=function(Q1){return(_[Q1]^_[Q1+1]<<J^_[Q1+2]<<I)&T},i=new w6(25000),c=new A_(288),t=new A_(32),$0=0,b=0,R=Q.i||0,H=0,w=Q.w||0,p=0;for(;R+2<N;++R){var N0=P(R),l=R&32767,Q0=k[N0];if(y[l]=Q0,k[N0]=l,w<=R){var j0=N-R;if(($0>7000||H>24576)&&(j0>423||!G)){V=l7(_,B,0,i,c,t,b,H,p,R-p,V),H=$0=b=0,p=R;for(var q0=0;q0<286;++q0)c[q0]=0;for(var q0=0;q0<30;++q0)t[q0]=0}var K0=2,X0=0,F0=A,A0=l-Q0&32767;if(j0>2&&N0==P(R-A0)){var E0=Math.min(L,j0)-1,n0=Math.min(32767,R),x0=Math.min(258,j0);while(A0<=n0&&--F0&&l!=Q0){if(_[R+K0]==_[R+K0-A0]){var I0=0;for(;I0<x0&&_[R+I0]==_[R+I0-A0];++I0);if(I0>K0){if(K0=I0,X0=A0,I0>E0)break;var o0=Math.min(A0,I0-2),r0=0;for(var q0=0;q0<o0;++q0){var b0=R-A0+q0&32767,s0=y[b0],c0=b0-s0&32767;if(c0>r0)r0=c0,Q0=b0}}}l=Q0,Q0=y[l],A0+=l-Q0&32767}}if(X0){i[H++]=268435456|y6[K0]<<18|p7[X0];var Y1=y6[K0]&31,z0=p7[X0]&31;b+=n5[Y1]+o5[z0],++c[257+Y1],++t[z0],w=R+K0,++$0}else i[H++]=_[R],++c[_[R]]}}for(R=Math.max(R,w);R<N;++R)i[H++]=_[R],++c[_[R]];if(V=l7(_,B,G,i,c,t,b,H,p,R-p,V),!G)Q.r=V&7|B[V/8|0]<<3,V-=7,Q.h=k,Q.p=y,Q.i=R,Q.w=w}else{for(var R=Q.w||0;R<N+G;R+=65535){var h0=R+65535;if(h0>=N)B[V/8|0]=G,h0=N;V=r7(B,V+1,_.subarray(R,h0))}Q.i=N}return a$(q,0,Z+R6(V)+Y)};var a7=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,Q=j.length|0;for(var N=0;N!=Q;){var q=Math.min(N+2655,Q);for(;N<q;++N)Y+=Z+=j[N];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},NN=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var Q=$.dictionary.subarray(-32768),N=new R1(Q.length+_.length);N.set(Q),N.set(_,Q.length),_=N,Y.w=Q.length}}return QN(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var t7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var qN=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=a7();Y.p($.dictionary),t7(_,2,Y.d())}},GN=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)z_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)z_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var T6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new R1(32768),this.p=new R1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)z_(5);if(this.d)z_(4);if(!this.p.length)this.p=$;else if($.length){var j=new R1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=ZN(this.p,this.s,this.o);this.ondata(a$(Z,j,this.s.b),this.d),this.o=a$(Z,this.s.b-32768),this.s.b=this.o.length,this.p=a$(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function e7(_,$){if(!$)$={};var j=a7();j.p(_);var Z=NN(_,$,$.dictionary?6:2,4);return qN(Z,$),t7(Z,Z.length-4,j.d()),Z}var _9=function(){function _($,j){T6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(T6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(GN(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)z_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}T6.prototype.c.call(this,j)},_}();var KN=typeof TextDecoder<"u"&&new TextDecoder,XN=0;try{KN.decode(s7,{stream:!0}),XN=1}catch(_){}var BN=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],WN=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],VN=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],LN=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],UN=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],zN=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],FN=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],HN=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],Z9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;Z9[_]=$}function Y9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function Q9(_){let $=0n,j=Y9(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function ON(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function H$(_,$,j){let Z=0n;for(let Y of $){let Q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|Q}return Z}function $9(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function JN(_){let $=H$(Q9(_),UN,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let Q of FN){j=$9(j,Q),Z=$9(Z,Q);let N=j<<28n|Z;Y.push(H$(N,zN,56))}return Y}function DN(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),Q=(Y&32)>>4|Y&1,N=Y>>1&15;$=$<<4n|BigInt(HN[j][Q][N])}return $}function AN(_,$){let j=H$(_,VN,32)^BigInt($),Z=DN(j);return H$(Z,LN,32)}function j9(_,$){let j=JN($),Z=H$(Q9(_),BN,64),Y=Z>>32n&0xffffffffn,Q=Z&0xffffffffn;for(let q of j){let B=Q,G=(Y^AN(Q,q))&0xffffffffn;Y=B,Q=G}let N=Q<<32n|Y;return ON(H$(N,WN,64),8)}function EN(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=Z9[Y]}return j}function N9(_,$){let j=Y9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=EN(_),Y=new Uint8Array(16);return Y.set(j9(j.slice(0,8),Z),0),Y.set(j9(j.slice(8,16),Z),8),Y}var e_="vnc";function MN(_){return Number(_)}function kN(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let Q=MN(Y);if(!Number.isFinite(Q))continue;let N=Number(Q);if(!Z.has(N))j.push(N),Z.add(N)}if(j.length>0)return j;return[5,2,1,0,-223]}function D$(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function IN(_,$){let j=D$(_),Z=D$($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function CN(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let Q=D$(Y);j.set(Q,Z),Z+=Q.byteLength}return j}function TN(){return(_)=>{let $=D$(_);try{let j=[],Z=new _9((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return CN(j)}catch(j){try{let Z=e7($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function PN(_){return new TextEncoder().encode(String(_||""))}function O$(_){return new TextDecoder().decode(D$(_))}function yN(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function SN(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function q9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function xN(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function wN(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let Q of $)Z.setInt32(Y,Number(Q||0),!1),Y+=4;return new Uint8Array(j)}function G9(_,$,j,Z=0,Y=0){let Q=new ArrayBuffer(10),N=new DataView(Q);return N.setUint8(0,3),N.setUint8(1,_?1:0),N.setUint16(2,Z,!1),N.setUint16(4,Y,!1),N.setUint16(6,Math.max(0,$||0),!1),N.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Q)}function J$(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function X9(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function RN(_,$,j,Z){let Y=Z||A$,Q=D$(_),N=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),q=Math.max(0,$||0)*Math.max(0,j||0)*N;if(Q.byteLength<q)throw Error(`Incomplete raw rectangle payload: expected ${q} byte(s), got ${Q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let B=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,V=0;for(let W=0;W<Math.max(0,$||0)*Math.max(0,j||0);W+=1){let L=X9(Q,G,N,Y.bigEndian),A=J$(L>>>Y.redShift&Y.redMax,Y.redMax),T=J$(L>>>Y.greenShift&Y.greenMax,Y.greenMax),y=J$(L>>>Y.blueShift&Y.blueMax,Y.blueMax);B[V]=A,B[V+1]=T,B[V+2]=y,B[V+3]=255,G+=N,V+=4}return B}function D4(_,$,j){let Z=j||A$,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let Q=X9(_,$,Y,Z.bigEndian);return{rgba:[J$(Q>>>Z.redShift&Z.redMax,Z.redMax),J$(Q>>>Z.greenShift&Z.greenMax,Z.greenMax),J$(Q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function m4(_,$,j,Z,Y,Q,N){if(!N)return;for(let q=0;q<Q;q+=1)for(let B=0;B<Y;B+=1){let G=((Z+q)*$+(j+B))*4;_[G]=N[0],_[G+1]=N[1],_[G+2]=N[2],_[G+3]=N[3]}}function B9(_,$,j,Z,Y,Q,N){for(let q=0;q<Q;q+=1){let B=q*Y*4,G=((Z+q)*$+j)*4;_.set(N.subarray(B,B+Y*4),G)}}function K9(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function fN(_,$,j,Z,Y,Q,N){let q=Y||A$,B=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let V=_.slice($+4,$+4+G),W;try{W=N(V)}catch{return{consumed:4+G,skipped:!0}}let L=0,A=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let T=0;T<Z;T+=64){let y=Math.min(64,Z-T);for(let k=0;k<j;k+=64){let J=Math.min(64,j-k);if(W.byteLength<L+1)return null;let I=W[L++],P=I&127,i=(I&128)!==0;if(!i&&P===0){let c=J*y*B;if(W.byteLength<L+c)return null;let t=Q(W.slice(L,L+c),J,y,q);L+=c,B9(A,j,k,T,J,y,t);continue}if(!i&&P===1){let c=D4(W,L,q);if(!c)return null;L+=c.bytesPerPixel,m4(A,j,k,T,J,y,c.rgba);continue}if(!i&&P>1&&P<=16){let c=[];for(let R=0;R<P;R+=1){let H=D4(W,L,q);if(!H)return null;L+=H.bytesPerPixel,c.push(H.rgba)}let t=P<=2?1:P<=4?2:4,$0=Math.ceil(J*t/8),b=$0*y;if(W.byteLength<L+b)return null;for(let R=0;R<y;R+=1){let H=L+R*$0;for(let w=0;w<J;w+=1){let p=w*t,N0=H+(p>>3),l=8-t-(p&7),Q0=W[N0]>>l&(1<<t)-1;m4(A,j,k+w,T+R,1,1,c[Q0])}}L+=b;continue}if(i&&P===0){let c=0,t=0;while(t<y){let $0=D4(W,L,q);if(!$0)return null;L+=$0.bytesPerPixel;let b=K9(W,L);if(!b)return null;L+=b.consumed;for(let R=0;R<b.runLength;R+=1)if(m4(A,j,k+c,T+t,1,1,$0.rgba),c+=1,c>=J){if(c=0,t+=1,t>=y)break}}continue}if(i&&P>0){let c=[];for(let b=0;b<P;b+=1){let R=D4(W,L,q);if(!R)return null;L+=R.bytesPerPixel,c.push(R.rgba)}let t=0,$0=0;while($0<y){if(W.byteLength<L+1)return null;let b=W[L++],R=b,H=1;if(b&128){R=b&127;let p=K9(W,L);if(!p)return null;L+=p.consumed,H=p.runLength}let w=c[R];if(!w)return null;for(let p=0;p<H;p+=1)if(m4(A,j,k+t,T+$0,1,1,w),t+=1,t>=J){if(t=0,$0+=1,$0>=y)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:A,decompressed:W}}function vN(_,$,j,Z,Y){let Q=Y||A$,N=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4+N)return null;let B=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+N+B*(N+8);if(_.byteLength<$+G)return null;let V=$+4,W=D4(_,V,Q);if(!W)return null;V+=W.bytesPerPixel;let L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);m4(L,j,0,0,j,Z,W.rgba);for(let A=0;A<B;A+=1){let T=D4(_,V,Q);if(!T)return null;if(V+=T.bytesPerPixel,_.byteLength<V+8)return null;let y=new DataView(_.buffer,_.byteOffset+V,8),k=y.getUint16(0,!1),J=y.getUint16(2,!1),I=y.getUint16(4,!1),P=y.getUint16(6,!1);V+=8,m4(L,j,k,J,I,P,T.rgba)}return{consumed:V-$,rgba:L}}function bN(_,$,j,Z,Y,Q){let N=Y||A$,q=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8)),B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),G=$,V=[0,0,0,255],W=[255,255,255,255];for(let L=0;L<Z;L+=16){let A=Math.min(16,Z-L);for(let T=0;T<j;T+=16){let y=Math.min(16,j-T);if(_.byteLength<G+1)return null;let k=_[G++];if(k&1){let J=y*A*q;if(_.byteLength<G+J)return null;let I=Q(_.slice(G,G+J),y,A,N);G+=J,B9(B,j,T,L,y,A,I);continue}if(k&2){let J=D4(_,G,N);if(!J)return null;V=J.rgba,G+=J.bytesPerPixel}if(m4(B,j,T,L,y,A,V),k&4){let J=D4(_,G,N);if(!J)return null;W=J.rgba,G+=J.bytesPerPixel}if(k&8){if(_.byteLength<G+1)return null;let J=_[G++];for(let I=0;I<J;I+=1){let P=W;if(k&16){let H=D4(_,G,N);if(!H)return null;P=H.rgba,G+=H.bytesPerPixel}if(_.byteLength<G+2)return null;let i=_[G++],c=_[G++],t=i>>4,$0=i&15,b=(c>>4)+1,R=(c&15)+1;m4(B,j,T+t,L+$0,b,R,P)}}}}return{consumed:G-$,rgba:B}}var A$={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class r5{protocol=e_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:RN,this.pipeline=_.pipeline||null,this.encodings=kN(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...A$},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:TN()}receive(_){if(_)this.buffer=IN(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),Q=O$(Y),N=yN(Q);if(!N)throw Error(`Unsupported RFB version banner: ${Q||"<empty>"}`);this.serverVersion=N,this.clientVersionText=SN(N),j.push(PN(this.clientVersionText)),$.push({type:"protocol-version",protocol:e_,server:N.text.trim(),client:this.clientVersionText.trim()}),this.state=N.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let B=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+B)break;this.consume(1);let G=O$(this.consume(4+B).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let Q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:e_,types:Q});let N=null;if(Q.includes(2)&&this.password!==null)N=2;else if(Q.includes(1))N=1;else if(Q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(N)),$.push({type:"security-selected",protocol:e_,securityType:N,label:N===2?"VNC Authentication":"None"}),this.state=N===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+q)break;let B=O$(this.consume(4+q).slice(4));throw Error(B||"VNC server rejected the connection.")}if(Q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:e_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Q!==1)throw Error(`Unsupported VNC security type ${Q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:e_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(N9(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q!==0){if(this.buffer.byteLength>=4){let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+N){let q=O$(this.consume(4+N).slice(4));throw Error(q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:e_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Q=Y.getUint16(0,!1),N=Y.getUint16(2,!1),q=q9(Y,4),B=Y.getUint32(20,!1);if(this.buffer.byteLength<24+B)break;let G=this.consume(24),V=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=V.getUint16(0,!1),this.framebufferHeight=V.getUint16(2,!1),this.serverPixelFormat=q9(V,4),this.serverName=O$(this.consume(B)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(xN(this.clientPixelFormat)),j.push(wN(this.encodings)),j.push(G9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:e_,width:Q,height:N,name:this.serverName,pixelFormat:q}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),q=4,B=[],G=!1,V=!!this.pipeline;for(let L=0;L<N;L+=1){if(this.buffer.byteLength<q+12){G=!0;break}let A=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,12),T=A.getUint16(0,!1),y=A.getUint16(2,!1),k=A.getUint16(4,!1),J=A.getUint16(6,!1),I=A.getInt32(8,!1);if(q+=12,I===0){let P=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),i=k*J*P;if(this.buffer.byteLength<q+i){G=!0;break}let c=this.buffer.slice(q,q+i);if(q+=i,V)this.pipeline.processRawRect(c,T,y,k,J,this.clientPixelFormat),B.push({kind:"pipeline",x:T,y,width:k,height:J});else B.push({kind:"rgba",x:T,y,width:k,height:J,rgba:this.decodeRawRect(c,k,J,this.clientPixelFormat)});continue}if(I===2){let P=vN(this.buffer,q,k,J,this.clientPixelFormat);if(!P){G=!0;break}if(V){let i=this.buffer.slice(q,q+P.consumed);this.pipeline.processRreRect(i,T,y,k,J,this.clientPixelFormat),B.push({kind:"pipeline",x:T,y,width:k,height:J})}else B.push({kind:"rgba",x:T,y,width:k,height:J,rgba:P.rgba});q+=P.consumed;continue}if(I===1){if(this.buffer.byteLength<q+4){G=!0;break}let P=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,4),i=P.getUint16(0,!1),c=P.getUint16(2,!1);if(q+=4,V)this.pipeline.processCopyRect(T,y,k,J,i,c),B.push({kind:"pipeline",x:T,y,width:k,height:J});else B.push({kind:"copy",x:T,y,width:k,height:J,srcX:i,srcY:c});continue}if(I===16){let P=fN(this.buffer,q,k,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!P){G=!0;break}if(q+=P.consumed,P.skipped)continue;if(V&&P.decompressed)this.pipeline.processZrleTileData(P.decompressed,T,y,k,J,this.clientPixelFormat),B.push({kind:"pipeline",x:T,y,width:k,height:J});else B.push({kind:"rgba",x:T,y,width:k,height:J,rgba:P.rgba});continue}if(I===5){let P=bN(this.buffer,q,k,J,this.clientPixelFormat,this.decodeRawRect);if(!P){G=!0;break}if(V){let i=this.buffer.slice(q,q+P.consumed);this.pipeline.processHextileRect(i,T,y,k,J,this.clientPixelFormat),B.push({kind:"pipeline",x:T,y,width:k,height:J})}else B.push({kind:"rgba",x:T,y,width:k,height:J,rgba:P.rgba});q+=P.consumed;continue}if(I===-223){if(this.framebufferWidth=k,this.framebufferHeight=J,V)this.pipeline.initFramebuffer(k,J);B.push({kind:"resize",x:T,y,width:k,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${I}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(q);let W={type:"framebuffer-update",protocol:e_,width:this.framebufferWidth,height:this.framebufferHeight,rects:B};if(V)W.framebuffer=this.pipeline.getFramebuffer();$.push(W),j.push(G9(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:e_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+N)break;this.consume(8);let q=O$(this.consume(N));$.push({type:"clipboard",protocol:e_,text:q}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var G4="piclaw://vnc";function mN(_){let $=String(_||"");if($===G4)return null;if(!$.startsWith(`${G4}/`))return null;let j=$.slice(`${G4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function j$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function uN(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}function gN(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/vnc/ws?target=${encodeURIComponent(_)}`}function hN(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}class W9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;rawFallbackAttempted=!1;protocolRecovering=!1;constructor(_,$){this.container=_,this.targetId=mN($?.path),this.targetLabel=this.targetId||null,this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_?"block":"none"}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${j$(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${j$(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${j$(Y.id)}" data-target-label="${j$(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=hN(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=o$(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let Q=Y.getAttribute("data-target-open-tab"),N=Y.getAttribute("data-target-label")||Q||"VNC";if(!Q)return;this.openTargetTab(Q,N)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${j$($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${j$(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=o$(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=o$(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${Q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=h7($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return m7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(d5(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=E6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~E6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of u7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(g7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=M6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??M6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new r5);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=_==null?null:String(_).trim(),j=await b7(),Z={};if(j)Z.pipeline=j,Z.decodeRawRect=(Q,N,q,B)=>j.decodeRawRectToRgba(Q,N,q,B);let Y=o$(this.authPassword);if(Y!==null)Z.password=Y;if($)Z.encodings=$;if(this.protocol=new r5(Z),this.hasRenderedFrame=!1,this.frameTimeoutId=null,this.canvas)this.canvas.style.display="none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display="";this.socketBoundary=new J6({url:gN(this.targetId),binaryType:"arraybuffer",onOpen:()=>{this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(Q)=>{this.applyMetrics(Q)},onMessage:(Q)=>{this.handleSocketMessage(Q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{this.setSessionChromeVisible(!0),this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await uN(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${j$(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var f6={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===G4||$.startsWith(`${G4}/`)?9000:!1},mount(_,$){return new W9(_,$)}};function u4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function pN(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,Q=Z?.[2]||"",N=Z?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),G=Y.startsWith("/")?Y:`${q?`${q}/`:""}${Y}`,V=[];for(let L of G.split("/")){if(!L||L===".")continue;if(L===".."){if(V.length>0)V.pop();continue}V.push(L)}let W=V.join("/");return`${J5(W)}${Q}${N}`}function e$(_){return _?.preview||null}function cN(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function lN(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function iN(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${u4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${u4(b_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${u4(_$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${u4(lN($))}</span>`),Z.push(`<span><strong>extension:</strong> ${u4(cN(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${u4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function dN(_){let $=e$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=iN(_,$);if($.kind==="image"){let Z=$.url||($.path?J5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${u4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=D_($.text||"",null,{rewriteImageSrc:(Y)=>pN(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${u4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class v6{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=dN(this.context)}getContent(){let _=e$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=e$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var b6={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=e$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new v6(_,$)}},m6={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return e$(_)||_?.path?1:!1},mount(_,$){return new v6(_,$)}};var nN=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),oN={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},rN={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function L9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function V9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class U9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=L9(j),Q=rN[Y]||"\uD83D\uDCC4",N=oN[Y]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${V9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${V9(N)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let B=q.querySelector("#ov-open-tab");if(B)B.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class z9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u6={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=L9(_?.path);if(!$||!nN.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new U9(_,$);return new z9(_,$)}};var sN=/\.(csv|tsv)$/i;function F9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class H9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${F9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${F9(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let N=Q.querySelector("#csv-open-tab");if(N)N.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class O9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var g6={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!sN.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new H9(_,$);return new O9(_,$)}};var aN=/\.pdf$/i;function tN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class J9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${tN(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#pdf-open-tab");if(Q)Q.addEventListener("click",()=>{let N=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class D9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var h6={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!aN.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new J9(_,$);return new D9(_,$)}};var eN=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function p6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class A9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${p6(Y)}" alt="${p6(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${p6(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let N=Q.querySelector("#img-open-tab");if(N)N.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var c6={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!eN.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new A9(_,$);return new E9(_,$)}};var _q=/\.(mp4|m4v|mov|webm|ogv)$/i;function $q(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class M9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${$q(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#video-open-tab");if(Q)Q.addEventListener("click",()=>{let N=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class k9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l6={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!_q.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new M9(_,$);return new k9(_,$)}};function jq(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function Zq(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var i6='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function I9(_){let $=String(_||"").trim();return $?$:i6}function Yq(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function Qq(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function Nq(_,$="*"){try{let j=(Q)=>{let N=_.parent||_.opener;if(!N)return!1;return N.postMessage(JSON.stringify({event:"workspace-export",...Q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Q=Z.prototype.saveData;Z.prototype.saveData=function(N,q,B,G,V,W){try{if(N&&B!=null&&j({filename:N,format:q,data:B,mimeType:G,base64Encoded:Boolean(V),defaultMode:W}))return}catch(L){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",L)}return Q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let Q=Y.prototype.exportFile;Y.prototype.exportFile=function(N,q,B,G,V,W){try{if(q&&j({filename:q,data:N,mimeType:B,base64Encoded:Boolean(G),mode:V,folderId:W}))return}catch(L){console.warn("[drawio-pane] export intercept failed, falling back to native export",L)}return Q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function C9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${Qq(j)}`}class T9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Zq(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#drawio-open-tab");if(Q)Q.addEventListener("click",()=>{let N=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class P9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=Yq(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(Nq(this.iframe.contentWindow))return;setTimeout(Q,250)};Q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=i6,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await C9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await C9(_,"image/png");else this.xmlData=I9(await _.text());else if(_.status===404)this.xmlData=i6;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?I9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var d6={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!jq(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new T9(_,$);return new P9(_,$)}};var qq=/\.mindmap\.ya?ml$/i,n6=String(Date.now());function y9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function o6(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let N=document.createElement("script");N.src=_,N.dataset.src=$,N.onload=()=>Y(),N.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(N)})}function Gq(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function Kq(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Z)}class S9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class x9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(y9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(Gq("/static/css/mindmap.css"),await Promise.all([o6("/static/js/vendor/d3-mindmap.min.js?v="+n6),o6("/static/js/vendor/js-yaml.min.js?v="+n6)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),Kq(this.mindmapEl);let j=y9(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await o6("/static/js/vendor/mindmap-editor.js?v="+n6),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(Q)=>{this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)},resolveImagePath:(Q)=>{if(Q.startsWith("data:")||Q.startsWith("http"))return Q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var r6={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!qq.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new S9(_,$);return new x9(_,$)}};var Xq=/\.kanban\.md$/i,Bq=String(Date.now());function w9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function Wq(){let _=window;if(_.preact)return;_.preact={h:U5,render:F5,Component:G$,createContext:Y2},_.preactHooks={useState:g,useEffect:h,useCallback:x,useRef:S,useMemo:k0,useReducer:J8,useContext:q2,useLayoutEffect:D8,useImperativeHandle:N2,useErrorBoundary:K2,useDebugValue:G2},_.htm={bind:()=>U}}function Vq(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let N=document.createElement("script");N.src=_,N.dataset.src=$,N.onload=()=>Y(),N.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(N)})}function Lq(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class R9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class f9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;themeListener=()=>{window.__kanbanEditor?.setTheme?.(w9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;Lq("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=w9();try{if(Wq(),await Vq("/static/js/vendor/kanban-editor.js?v="+Bq),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var s6={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Xq.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new R9(_,$);return new f9(_,$)}};class v9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var $1=new v9;var s5="workspaceExplorerScale",Uq=["compact","default","comfortable"],zq=new Set(Uq),Fq={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function b9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return zq.has(j)?j:$}function a6(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Hq(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function Oq(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function t6(_={}){let $=Hq(_),j=_.stored?b9(_.stored,$):$;return Oq(j,_)}function m9(_){return Fq[b9(_)]}function Jq(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function e6(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function u9(_,$,j={}){let Z=j?.resolvePane;if(e6(_,Z))return!0;return Jq($)}var Dq=60000,c9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function Aq(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return e6($,(j)=>i0.resolve(j))}function l9(_,$,j,Z=0,Y=[]){if(!j&&c9(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Q of _.children)l9(Q,$,j,Z+1,Y);return Y}function g9(_,$,j){if(!_)return"";let Z=[],Y=(Q)=>{if(!j&&c9(Q))return;if(Z.push(Q.type==="dir"?`d:${Q.path}`:`f:${Q.path}`),Q.children&&$?.has(Q.path))for(let N of Q.children)Y(N)};return Y(_),Z.join("|")}function Z3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((q)=>[q?.path,q])):new Map,Q=!j||j.length!==Z.length,N=Z.map((q)=>{let B=Z3(Y.get(q.path),q);if(B!==Y.get(q.path))Q=!0;return B});return Q?{...$,children:N}:_}function $3(_,$,j){if(!_)return _;if(_.path===$)return Z3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((Q)=>{let N=$3(Q,$,j);if(N!==Q)Z=!0;return N});return Z?{..._,children:Y}:_}var i9=4,_3=14,Eq=8,Mq=16;function d9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=d9(Z);return _.__bytes=j,j}function n9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=i9)return Z;let Y=Array.isArray(_.children)?_.children:[],Q=[];for(let q of Y){let B=Math.max(0,Number(q?.__bytes??q?.size??0));if(B<=0)continue;if(q.type==="dir")Q.push({kind:"dir",node:q,size:B});else Q.push({kind:"file",name:q.name,path:q.path,size:B})}Q.sort((q,B)=>B.size-q.size);let N=Q;if(Q.length>_3){let q=Q.slice(0,_3-1),B=Q.slice(_3-1),G=B.reduce((V,W)=>V+W.size,0);q.push({kind:"other",name:`+${B.length} more`,path:`${Z.path}/[other]`,size:G}),N=q}return Z.children=N.map((q)=>{if(q.kind==="dir")return n9(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),Z}function h9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function o9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${Q}%)`}function a5(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function Y3(_,$,j,Z,Y,Q){let N=Math.PI*2-0.0001,q=Q-Y>N?Y+N:Q,B=a5(_,$,Z,Y),G=a5(_,$,Z,q),V=a5(_,$,j,q),W=a5(_,$,j,Y),L=q-Y>Math.PI?1:0;return[`M ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${L} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${j} ${j} 0 ${L} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var r9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function s9(_,$,j){let Z=[],Y=[],Q=Math.max(0,Number($)||0),N=(q,B,G,V)=>{let W=Array.isArray(q?.children)?q.children:[];if(!W.length)return;let L=Math.max(0,Number(q.size)||0);if(L<=0)return;let A=G-B,T=B;W.forEach((y,k)=>{let J=Math.max(0,Number(y.size)||0);if(J<=0)return;let I=J/L,P=T,i=k===W.length-1?G:T+A*I;if(T=i,i-P<0.003)return;let c=r9[V];if(c){let t=o9(P,V,j);if(Z.push({key:y.path,path:y.path,label:y.name,size:J,color:t,depth:V,startAngle:P,endAngle:i,innerRadius:c[0],outerRadius:c[1],d:Y3(120,120,c[0],c[1],P,i)}),V===1)Y.push({key:y.path,name:y.name,size:J,pct:Q>0?J/Q*100:0,color:t})}if(V<i9)N(y,P,i,V+1)})};return N(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function j3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=j3(Z,$);if(Y)return Y}return null}function a9(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=r9[1];if(!Y)return{segments:[],legend:[]};let Q=-Math.PI/2,N=Math.PI*3/2,q=o9(Q,1,Z),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:q,depth:1,startAngle:Q,endAngle:N,innerRadius:Y[0],outerRadius:Y[1],d:Y3(120,120,Y[0],Y[1],Q,N)}],legend:[{key:G,name:_,size:j,pct:100,color:q}]}}function p9(_,$=!1,j=!1){if(!_)return null;let Z=d9(_),Y=n9(_,0),Q=Y.size||Z,{segments:N,legend:q}=s9(Y,Q,j);if(!N.length&&Q>0){let B=a9("[files]",Y.path,Q,j);N=B.segments,q=B.legend}return{root:Y,totalSize:Q,segments:N,legend:q,truncated:$,isDarkTheme:j}}function kq({payload:_}){if(!_)return null;let[$,j]=g(null),[Z,Y]=g(_?.root?.path||"."),[Q,N]=g(()=>[_?.root?.path||"."]),[q,B]=g(!1);h(()=>{let H=_?.root?.path||".";Y(H),N([H]),j(null)},[_?.root?.path,_?.totalSize]),h(()=>{if(!Z)return;B(!0);let H=setTimeout(()=>B(!1),180);return()=>clearTimeout(H)},[Z]);let G=k0(()=>{return j3(_.root,Z)||_.root},[_?.root,Z]),V=G?.size||_.totalSize||0,{segments:W,legend:L}=k0(()=>{let H=s9(G,V,_.isDarkTheme);if(H.segments.length>0)return H;if(V<=0)return H;let w=G?.children?.length?"Total":"[files]";return a9(w,G?.path||_?.root?.path||".",V,_.isDarkTheme)},[G,V,_.isDarkTheme,_?.root?.path]),[A,T]=g(W),y=S(new Map),k=S(0);h(()=>{let H=y.current,w=new Map(W.map((Q0)=>[Q0.key,Q0])),p=performance.now(),N0=220,l=(Q0)=>{let j0=Math.min(1,(Q0-p)/220),q0=j0*(2-j0),K0=W.map((X0)=>{let A0=H.get(X0.key)||{startAngle:X0.startAngle,endAngle:X0.startAngle,innerRadius:X0.innerRadius,outerRadius:X0.innerRadius},E0=(r0,b0)=>r0+(b0-r0)*q0,n0=E0(A0.startAngle,X0.startAngle),x0=E0(A0.endAngle,X0.endAngle),I0=E0(A0.innerRadius,X0.innerRadius),o0=E0(A0.outerRadius,X0.outerRadius);return{...X0,d:Y3(120,120,I0,o0,n0,x0)}});if(T(K0),j0<1)k.current=requestAnimationFrame(l)};if(k.current)cancelAnimationFrame(k.current);return k.current=requestAnimationFrame(l),y.current=w,()=>{if(k.current)cancelAnimationFrame(k.current)}},[W]);let J=A.length?A:W,I=V>0?b_(V):"0 B",P=G?.name||"",c=(P&&P!=="."?P:"Total")||"Total",t=I,$0=Q.length>1,b=(H)=>{if(!H?.path)return;let w=j3(_.root,H.path);if(!w||!Array.isArray(w.children)||w.children.length===0)return;N((p)=>[...p,w.path]),Y(w.path),j(null)},R=()=>{if(!$0)return;N((H)=>{let w=H.slice(0,-1);return Y(w[w.length-1]||_?.root?.path||"."),w}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${J.length}
                data-base-size=${V}>
                ${J.map((H)=>U`
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
                        <title>${H.label} — ${b_(H.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${$0?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${c}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${t}</text>
                </g>
            </svg>
            ${L.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${L.slice(0,8).map((H)=>U`
                        <div key=${H.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${H.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${H.name}>${H.name}</span>
                            <span class="workspace-folder-starburst-size">${b_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function Iq({mediaId:_}){let[$,j]=g(null);if(h(()=>{if(!_)return;W$(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?b_($.metadata.size):"";return U`
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
                ${Y&&U`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function t9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:Q,onToggleTerminal:N,terminalVisible:q=!1}){let[B,G]=g(null),[V,W]=g(new Set(["."])),[L,A]=g(null),[T,y]=g(null),[k,J]=g(""),[I,P]=g(null),[i,c]=g(null),[t,$0]=g(!0),[b,R]=g(!1),[H,w]=g(null),[p,N0]=g(()=>V$("workspaceShowHidden",!1)),[l,Q0]=g(!1),[j0,q0]=g(null),[K0,X0]=g(null),[F0,A0]=g(null),[E0,n0]=g(!1),[x0,I0]=g(null),[o0,r0]=g(()=>h9()),[b0,s0]=g(()=>t6({stored:J_(s5),...a6()})),[c0,Y1]=g(!1),z0=S(V),h0=S(""),Q1=S(null),K1=S(0),G_=S(new Set),J1=S(null),j1=S(new Map),g1=S(_),M1=S(Z),N1=S(null),m0=S(null),T1=S(null),s=S(null),T0=S(null),L0=S(null),D0=S("."),W0=S(null),a0=S({path:null,dragging:!1,startX:0,startY:0}),f0=S({path:null,dragging:!1,startX:0,startY:0}),u0=S({path:null,timer:0}),g0=S(!1),w0=S(0),e0=S(new Map),P0=S(null),B0=S(null),J0=S(null),H0=S(null),f=S(null),e=S(null),M0=S(p),v0=S($),d0=S(j??$),P1=S(0),y1=S(F0),_1=S(l),h1=S(j0),K4=S(null),F_=S({x:0,y:0}),n1=S(0),H_=S(null),K_=S(L),q1=S(T),o1=S(null),X4=S(I);g1.current=_,M1.current=Z,h(()=>{z0.current=V},[V]),h(()=>{M0.current=p},[p]),h(()=>{v0.current=$},[$]),h(()=>{d0.current=j??$},[j,$]),h(()=>{y1.current=F0},[F0]),h(()=>{if(typeof window>"u")return;let F=()=>{s0(t6({stored:J_(s5),...a6()}))};F();let C=()=>F(),u=()=>F(),v=(Z0)=>{if(!Z0||Z0.key===null||Z0.key===s5)F()};window.addEventListener("resize",C),window.addEventListener("focus",u),window.addEventListener("storage",v);let n=window.matchMedia?.("(pointer: coarse)"),G0=window.matchMedia?.("(hover: none)"),V0=(Z0,C0)=>{if(!Z0)return;if(Z0.addEventListener)Z0.addEventListener("change",C0);else if(Z0.addListener)Z0.addListener(C0)},U0=(Z0,C0)=>{if(!Z0)return;if(Z0.removeEventListener)Z0.removeEventListener("change",C0);else if(Z0.removeListener)Z0.removeListener(C0)};return V0(n,C),V0(G0,C),()=>{window.removeEventListener("resize",C),window.removeEventListener("focus",u),window.removeEventListener("storage",v),U0(n,C),U0(G0,C)}},[]),h(()=>{let F=(C)=>{let u=C?.detail?.path;if(!u)return;let v=u.split("/"),n=[];for(let G0=1;G0<v.length;G0++)n.push(v.slice(0,G0).join("/"));if(n.length)W((G0)=>{let V0=new Set(G0);V0.add(".");for(let U0 of n)V0.add(U0);return V0});A(u),requestAnimationFrame(()=>{let G0=document.querySelector(`[data-path="${CSS.escape(u)}"]`);if(G0)G0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",F),()=>window.removeEventListener("workspace-reveal-path",F)},[]),h(()=>{_1.current=l},[l]),h(()=>{h1.current=j0},[j0]),h(()=>{K_.current=L},[L]),h(()=>{q1.current=T},[T]),h(()=>{X4.current=I},[I]),h(()=>{if(typeof window>"u"||typeof document>"u")return;let F=()=>r0(h9());F();let C=window.matchMedia?.("(prefers-color-scheme: dark)"),u=()=>F();if(C?.addEventListener)C.addEventListener("change",u);else if(C?.addListener)C.addListener(u);let v=typeof MutationObserver<"u"?new MutationObserver(()=>F()):null;if(v?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)v?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(C?.removeEventListener)C.removeEventListener("change",u);else if(C?.removeListener)C.removeListener(u);v?.disconnect()}},[]),h(()=>{if(!T)return;let F=T0.current;if(!F)return;let C=requestAnimationFrame(()=>{try{F.focus(),F.select()}catch{}});return()=>cancelAnimationFrame(C)},[T]),h(()=>{if(!c0)return;let F=(u)=>{let v=u?.target;if(!(v instanceof Element))return;if(f.current?.contains(v))return;if(e.current?.contains(v))return;Y1(!1)},C=(u)=>{if(u?.key==="Escape")Y1(!1),e.current?.focus?.()};return document.addEventListener("mousedown",F),document.addEventListener("touchstart",F,{passive:!0}),document.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("touchstart",F),document.removeEventListener("keydown",C)}},[c0]);let m_=async(F,C={})=>{let u=Boolean(C?.autoOpen),v=String(F||"").trim();R(!0),P(null),c(null);try{let n=await v$(v,20000);if(u&&v&&u9(v,n,{resolvePane:(G0)=>i0.resolve(G0)}))return M1.current?.(v,n),n;return P(n),n}catch(n){let G0={error:n.message||"Failed to load preview"};return P(G0),G0}finally{R(!1)}};N1.current=m_;let Z$=async()=>{if(!v0.current)return;try{let F=await f$("",1,M0.current),C=g9(F.root,z0.current,M0.current);if(C===h0.current){$0(!1);return}if(h0.current=C,Q1.current=F.root,!K1.current)K1.current=requestAnimationFrame(()=>{K1.current=0,G((u)=>Z3(u,Q1.current)),$0(!1)})}catch(F){w(F.message||"Failed to load workspace"),$0(!1)}},g4=async(F)=>{if(!F)return;if(G_.current.has(F))return;G_.current.add(F);try{let C=await f$(F,1,M0.current);G((u)=>$3(u,F,C.root))}catch(C){w(C.message||"Failed to load workspace")}finally{G_.current.delete(F)}};m0.current=g4;let f1=x(()=>{let F=L;if(!F)return".";let C=j1.current?.get(F);if(C&&C.type==="dir")return C.path;if(F==="."||!F.includes("/"))return".";let u=F.split("/");return u.pop(),u.join("/")||"."},[L]),O_=x((F)=>{let C=F?.closest?.(".workspace-row");if(!C)return null;let u=C.dataset.path,v=C.dataset.type;if(!u)return null;if(v==="dir")return u;if(u.includes("/")){let n=u.split("/");return n.pop(),n.join("/")||"."}return"."},[]),S1=x((F)=>{return O_(F?.target||null)},[O_]),D1=x((F)=>{y1.current=F,A0(F)},[]),B1=x(()=>{let F=u0.current;if(F?.timer)clearTimeout(F.timer);u0.current={path:null,timer:0}},[]),u_=x((F)=>{if(!F||F==="."){B1();return}let C=j1.current?.get(F);if(!C||C.type!=="dir"){B1();return}if(z0.current?.has(F)){B1();return}if(u0.current?.path===F)return;B1();let u=setTimeout(()=>{u0.current={path:null,timer:0},m0.current?.(F),W((v)=>{let n=new Set(v);return n.add(F),n})},600);u0.current={path:F,timer:u}},[B1]),g_=x((F,C)=>{if(F_.current={x:F,y:C},n1.current)return;n1.current=requestAnimationFrame(()=>{n1.current=0;let u=K4.current;if(!u)return;let v=F_.current;u.style.transform=`translate(${v.x+12}px, ${v.y+12}px)`})},[]),V1=x((F)=>{if(!F)return;let u=(j1.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!u)return;X0({path:F,label:u})},[]),e1=x(()=>{if(X0(null),n1.current)cancelAnimationFrame(n1.current),n1.current=0;if(K4.current)K4.current.style.transform="translate(-9999px, -9999px)"},[]),l0=x((F)=>{if(!F)return".";let C=j1.current?.get(F);if(C&&C.type==="dir")return C.path;if(F==="."||!F.includes("/"))return".";let u=F.split("/");return u.pop(),u.join("/")||"."},[]),k1=x(()=>{y(null),J("")},[]),E_=x((F)=>{if(!F)return;let u=(j1.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!u||F===".")return;y(F),J(u)},[]),__=x(async()=>{let F=q1.current;if(!F)return;let C=(k||"").trim();if(!C){k1();return}let u=j1.current?.get(F),v=(u?.name||F.split("/").pop()||F).trim();if(C===v){k1();return}try{let G0=(await u8(F,C))?.path||F,V0=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(k1(),w(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:F,newPath:G0,type:u?.type||"file"}})),u?.type==="dir")W((U0)=>{let Z0=new Set;for(let C0 of U0)if(C0===F)Z0.add(G0);else if(C0.startsWith(`${F}/`))Z0.add(`${G0}${C0.slice(F.length)}`);else Z0.add(C0);return Z0});if(A(G0),u?.type==="dir")P(null),R(!1),c(null);else N1.current?.(G0);m0.current?.(V0)}catch(n){w(n?.message||"Failed to rename file")}},[k1,k]),h4=x(async(F)=>{let v=F||".";for(let n=0;n<50;n+=1){let V0=`untitled${n===0?"":`-${n}`}.md`;try{let Z0=(await m8(v,V0,""))?.path||(v==="."?V0:`${v}/${V0}`);if(v&&v!==".")W((C0)=>new Set([...C0,v]));A(Z0),w(null),m0.current?.(v),N1.current?.(Z0);return}catch(U0){if(U0?.status===409||U0?.code==="file_exists")continue;w(U0?.message||"Failed to create file");return}}w("Failed to create file (untitled name already in use).")},[]),_4=x((F)=>{if(F?.stopPropagation?.(),E0)return;let C=l0(K_.current);h4(C)},[E0,l0,h4]);h(()=>{if(typeof window>"u")return;let F=(C)=>{let u=C?.detail?.updates||[];if(!Array.isArray(u)||u.length===0)return;G((U0)=>{let Z0=U0;for(let C0 of u){if(!C0?.root)continue;if(!Z0||C0.path==="."||!C0.path)Z0=C0.root;else Z0=$3(Z0,C0.path,C0.root)}if(Z0)h0.current=g9(Z0,z0.current,M0.current);return $0(!1),Z0});let v=K_.current;if(Boolean(v)&&u.some((U0)=>{let Z0=U0?.path||"";if(!Z0||Z0===".")return!0;return v===Z0||v.startsWith(`${Z0}/`)||Z0.startsWith(`${v}/`)}))e0.current.clear();if(!v||!X4.current)return;let G0=j1.current?.get(v);if(G0&&G0.type==="dir")return;if(u.some((U0)=>{let Z0=U0?.path||"";if(!Z0||Z0===".")return!0;return v===Z0||v.startsWith(`${Z0}/`)}))N1.current?.(v)};return window.addEventListener("workspace-update",F),()=>window.removeEventListener("workspace-update",F)},[]),J1.current=Z$;let p4=S(()=>{if(typeof window>"u")return;let F=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),C=d0.current??v0.current,u=document.visibilityState!=="hidden"&&(C||F.matches&&v0.current);b$(u,M0.current).catch(()=>{})}).current,$4=S(0),Y$=S(()=>{if($4.current)clearTimeout($4.current);$4.current=setTimeout(()=>{$4.current=0,p4()},250)}).current;h(()=>{if(v0.current)J1.current?.();Y$()},[$,j]),h(()=>{J1.current(),p4();let F=setInterval(()=>J1.current(),Dq),C=L$("previewHeight",null),u=Number.isFinite(C)?Math.min(Math.max(C,80),600):280;if(w0.current=u,T1.current)T1.current.style.setProperty("--preview-height",`${u}px`);let v=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),n=()=>Y$();if(v.addEventListener)v.addEventListener("change",n);else if(v.addListener)v.addListener(n);return document.addEventListener("visibilitychange",n),()=>{if(clearInterval(F),K1.current)cancelAnimationFrame(K1.current),K1.current=0;if(v.removeEventListener)v.removeEventListener("change",n);else if(v.removeListener)v.removeListener(n);if(document.removeEventListener("visibilitychange",n),$4.current)clearTimeout($4.current),$4.current=0;if(W0.current)clearTimeout(W0.current),W0.current=null;b$(!1,M0.current).catch(()=>{})}},[]);let j4=k0(()=>l9(B,V,p),[B,V,p]),h_=k0(()=>new Map(j4.map((F)=>[F.node.path,F.node])),[j4]),E$=k0(()=>m9(b0),[b0]);j1.current=h_;let L1=(L?j1.current.get(L):null)?.type==="dir";h(()=>{if(!L||!L1){I0(null),P0.current=null,B0.current=null;return}let F=L,C=`${p?"hidden":"visible"}:${L}`,u=e0.current,v=u.get(C);if(v?.root){u.delete(C),u.set(C,v);let V0=p9(v.root,Boolean(v.truncated),o0);if(V0)P0.current=V0,B0.current=L,I0({loading:!1,error:null,payload:V0});return}let n=P0.current,G0=B0.current;I0({loading:!0,error:null,payload:G0===L?n:null}),f$(L,Eq,p).then((V0)=>{if(K_.current!==F)return;let U0={root:V0?.root,truncated:Boolean(V0?.truncated)};u.delete(C),u.set(C,U0);while(u.size>Mq){let C0=u.keys().next().value;if(!C0)break;u.delete(C0)}let Z0=p9(U0.root,U0.truncated,o0);P0.current=Z0,B0.current=L,I0({loading:!1,error:null,payload:Z0})}).catch((V0)=>{if(K_.current!==F)return;I0({loading:!1,error:V0?.message||"Failed to load folder size chart",payload:G0===L?n:null})})},[L,L1,p,o0]);let v1=Boolean(I&&I.kind==="text"&&!L1&&(!I.size||I.size<=262144)),Q$=v1?"Open in editor":I?.size>262144?"File too large to edit":"File is not editable",p_=Boolean(L&&L!=="."),$_=Boolean(L&&!L1),j_=Boolean(L&&!L1),x1=L&&L1?D5(L,p):null,b1=x(()=>Y1(!1),[]),H1=x(async(F)=>{b1();try{await F?.()}catch{}},[b1]);h(()=>{let F=J0.current;if(H0.current)H0.current.dispose(),H0.current=null;if(!F)return;if(F.innerHTML="",!L||L1||!I||I.error)return;let C={path:L,content:typeof I.text==="string"?I.text:void 0,mtime:I.mtime,size:I.size,preview:I,mode:"view"},u=i0.resolve(C)||i0.get("workspace-preview-default");if(!u)return;let v=u.mount(F,C);return H0.current=v,()=>{if(H0.current===v)v.dispose(),H0.current=null;F.innerHTML=""}},[L,L1,I]);let M_=(F)=>{let C=F?.target;if(C instanceof Element)return C;return C?.parentElement||null},k_=(F)=>{return Boolean(F?.closest?.(".workspace-node-icon, .workspace-label-text"))},I_=S((F)=>{let C=M_(F),u=C?.closest?.("[data-path]");if(!u)return;let v=u.dataset.path;if(!v||v===".")return;let n=Boolean(C?.closest?.("button"))||Boolean(C?.closest?.("a"))||Boolean(C?.closest?.("input")),G0=Boolean(C?.closest?.(".workspace-caret"));if(n||G0)return;if(q1.current===v)return;E_(v)}).current,Z4=S((F)=>{if(g0.current){g0.current=!1;return}let C=M_(F),u=C?.closest?.("[data-path]");if(s.current?.focus?.(),!u)return;let v=u.dataset.path,n=u.dataset.type,G0=Boolean(C?.closest?.(".workspace-caret")),V0=Boolean(C?.closest?.("button"))||Boolean(C?.closest?.("a"))||Boolean(C?.closest?.("input")),U0=K_.current===v,Z0=q1.current;if(Z0){if(Z0===v)return;k1()}let C0=n==="file"&&o1.current===v&&!G0&&!V0;if(n==="dir"){if(o1.current=null,A(v),P(null),c(null),R(!1),!z0.current.has(v))m0.current?.(v);if(U0&&!G0)return;W((B_)=>{let Q_=new Set(B_);if(Q_.has(v))Q_.delete(v);else Q_.add(v);return Q_})}else{o1.current=null,A(v);let I1=j1.current.get(v);if(I1)g1.current?.(I1.path,I1);if(!V0&&!G0&&Aq(v))M1.current?.(v,X4.current);else{let Q_=!V0&&!G0;N1.current?.(v,{autoOpen:Q_})}}}).current,Z_=S(()=>{h0.current="",J1.current(),Array.from(z0.current||[]).filter((C)=>C&&C!==".").forEach((C)=>m0.current?.(C))}).current,r1=S(()=>{o1.current=null,A(null),P(null),c(null),R(!1)}).current,C_=S(()=>{N0((F)=>{let C=!F;if(typeof window<"u")X1("workspaceShowHidden",String(C));return M0.current=C,b$(!0,C).catch(()=>{}),h0.current="",J1.current?.(),Array.from(z0.current||[]).filter((v)=>v&&v!==".").forEach((v)=>m0.current?.(v)),C})}).current,B4=S((F)=>{if(M_(F)?.closest?.("[data-path]"))return;r1()}).current,A1=x(async(F)=>{if(!F)return;let C=F.split("/").pop()||F;if(!window.confirm(`Delete "${C}"? This cannot be undone.`))return;try{await h8(F);let v=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(K_.current===F)r1();m0.current?.(v),w(null)}catch(v){P((n)=>({...n||{},error:v.message||"Failed to delete file"}))}},[r1]),Y4=x((F)=>{let C=s.current;if(!C||!F||typeof CSS>"u"||typeof CSS.escape!=="function")return;C.querySelector(`[data-path="${CSS.escape(F)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),c4=x((F)=>{let C=j4;if(!C||C.length===0)return;let u=L?C.findIndex((v)=>v.node.path===L):-1;if(F.key==="ArrowDown"){F.preventDefault();let v=Math.min(u+1,C.length-1),n=C[v];if(!n)return;if(A(n.node.path),n.node.type!=="dir")g1.current?.(n.node.path,n.node),N1.current?.(n.node.path);else P(null),R(!1),c(null);Y4(n.node.path);return}if(F.key==="ArrowUp"){F.preventDefault();let v=u<=0?0:u-1,n=C[v];if(!n)return;if(A(n.node.path),n.node.type!=="dir")g1.current?.(n.node.path,n.node),N1.current?.(n.node.path);else P(null),R(!1),c(null);Y4(n.node.path);return}if(F.key==="ArrowRight"&&u>=0){let v=C[u];if(v?.node?.type==="dir"&&!V.has(v.node.path))F.preventDefault(),m0.current?.(v.node.path),W((n)=>new Set([...n,v.node.path]));return}if(F.key==="ArrowLeft"&&u>=0){let v=C[u];if(v?.node?.type==="dir"&&V.has(v.node.path))F.preventDefault(),W((n)=>{let G0=new Set(n);return G0.delete(v.node.path),G0});return}if(F.key==="Enter"&&u>=0){F.preventDefault();let v=C[u];if(!v)return;let n=v.node.path;if(v.node.type==="dir"){if(!z0.current.has(n))m0.current?.(n);W((V0)=>{let U0=new Set(V0);if(U0.has(n))U0.delete(n);else U0.add(n);return U0}),P(null),c(null),R(!1)}else g1.current?.(n,v.node),N1.current?.(n);return}if((F.key==="Delete"||F.key==="Backspace")&&u>=0){let v=C[u];if(!v||v.node.type==="dir")return;F.preventDefault(),A1(v.node.path);return}if(F.key==="Escape")F.preventDefault(),r1()},[r1,A1,V,j4,Y4,L]),l4=x((F)=>{let C=M_(F),u=C?.closest?.(".workspace-row");if(!u)return;let v=u.dataset.type,n=u.dataset.path;if(!n||n===".")return;if(q1.current===n)return;let G0=F?.touches?.[0];if(!G0)return;if(a0.current={path:k_(C)?n:null,dragging:!1,startX:G0.clientX,startY:G0.clientY},v!=="file")return;if(W0.current)clearTimeout(W0.current);W0.current=setTimeout(()=>{if(W0.current=null,a0.current?.dragging)return;A1(n)},600)},[A1]),T_=x(()=>{if(W0.current)clearTimeout(W0.current),W0.current=null;let F=a0.current;if(F?.dragging&&F.path){let C=y1.current||f1(),u=H_.current;if(typeof u==="function")u(F.path,C)}a0.current={path:null,dragging:!1,startX:0,startY:0},P1.current=0,Q0(!1),q0(null),D1(null),B1(),e1()},[f1,e1,D1,B1]),i4=x((F)=>{let C=a0.current,u=F?.touches?.[0];if(!u||!C?.path){if(W0.current)clearTimeout(W0.current),W0.current=null;return}let v=Math.abs(u.clientX-C.startX),n=Math.abs(u.clientY-C.startY),G0=v>8||n>8;if(G0&&W0.current)clearTimeout(W0.current),W0.current=null;if(!C.dragging&&G0)C.dragging=!0,Q0(!0),q0("move"),V1(C.path);if(C.dragging){F.preventDefault(),g_(u.clientX,u.clientY);let V0=document.elementFromPoint(u.clientX,u.clientY),U0=O_(V0)||f1();if(y1.current!==U0)D1(U0);u_(U0)}},[O_,f1,V1,g_,D1,u_]),N$=S((F)=>{F.preventDefault();let C=T1.current;if(!C)return;let u=F.clientY,v=w0.current||280,n=F.currentTarget;n.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let G0=u,V0=(Z0)=>{G0=Z0.clientY;let C0=C.clientHeight-80,I1=Math.min(Math.max(v-(Z0.clientY-u),80),C0);C.style.setProperty("--preview-height",`${I1}px`),w0.current=I1},U0=()=>{let Z0=C.clientHeight-80,C0=Math.min(Math.max(v-(G0-u),80),Z0);w0.current=C0,n.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",X1("previewHeight",String(Math.round(C0))),document.removeEventListener("mousemove",V0),document.removeEventListener("mouseup",U0)};document.addEventListener("mousemove",V0),document.addEventListener("mouseup",U0)}).current,c_=S((F)=>{F.preventDefault();let C=T1.current;if(!C)return;let u=F.touches[0];if(!u)return;let v=u.clientY,n=w0.current||280,G0=F.currentTarget;G0.classList.add("dragging"),document.body.style.userSelect="none";let V0=(Z0)=>{let C0=Z0.touches[0];if(!C0)return;Z0.preventDefault();let I1=C.clientHeight-80,B_=Math.min(Math.max(n-(C0.clientY-v),80),I1);C.style.setProperty("--preview-height",`${B_}px`),w0.current=B_},U0=()=>{G0.classList.remove("dragging"),document.body.style.userSelect="",X1("previewHeight",String(Math.round(w0.current||n))),document.removeEventListener("touchmove",V0),document.removeEventListener("touchend",U0),document.removeEventListener("touchcancel",U0)};document.addEventListener("touchmove",V0,{passive:!1}),document.addEventListener("touchend",U0),document.addEventListener("touchcancel",U0)}).current,l_=async()=>{if(!L)return;try{let F=await b8(L);if(F.media_id)c(F.media_id)}catch(F){P((C)=>({...C||{},error:F.message||"Failed to attach"}))}},A4=async()=>{if(!L||L1)return;await A1(L)},X_=(F)=>{return Array.from(F?.dataTransfer?.types||[]).includes("Files")},P_=x((F)=>{if(!X_(F))return;if(F.preventDefault(),P1.current+=1,!_1.current)Q0(!0);q0("upload");let C=S1(F)||f1();D1(C),u_(C)},[f1,S1,D1,u_]),w1=x((F)=>{if(!X_(F))return;if(F.preventDefault(),F.dataTransfer)F.dataTransfer.dropEffect="copy";if(!_1.current)Q0(!0);if(h1.current!=="upload")q0("upload");let C=S1(F)||f1();if(y1.current!==C)D1(C);u_(C)},[f1,S1,D1,u_]),E4=x((F)=>{if(!X_(F))return;if(F.preventDefault(),P1.current=Math.max(0,P1.current-1),P1.current===0)Q0(!1),q0(null),D1(null),B1()},[D1,B1]),i_=x(async(F,C=".")=>{let u=Array.from(F||[]);if(u.length===0)return;let v=C&&C!==""?C:".",n=v!=="."?v:"workspace root";n0(!0);try{let G0=null;for(let V0 of u)try{G0=await O5(V0,v)}catch(U0){let Z0=U0?.status,C0=U0?.code;if(Z0===409||C0==="file_exists"){let I1=V0?.name||"file";if(!window.confirm(`"${I1}" already exists in ${n}. Overwrite?`))continue;G0=await O5(V0,v,{overwrite:!0})}else throw U0}if(G0?.path)o1.current=G0.path,A(G0.path),N1.current?.(G0.path);m0.current?.(v)}catch(G0){w(G0.message||"Failed to upload file")}finally{n0(!1)}},[]),M4=x(async(F,C)=>{if(!F)return;let u=j1.current?.get(F);if(!u)return;let v=C&&C!==""?C:".",n=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(v===n)return;try{let V0=(await g8(F,v))?.path||F;if(u.type==="dir")W((U0)=>{let Z0=new Set;for(let C0 of U0)if(C0===F)Z0.add(V0);else if(C0.startsWith(`${F}/`))Z0.add(`${V0}${C0.slice(F.length)}`);else Z0.add(C0);return Z0});if(A(V0),u.type==="dir")P(null),R(!1),c(null);else N1.current?.(V0);m0.current?.(n),m0.current?.(v)}catch(G0){w(G0?.message||"Failed to move entry")}},[]);H_.current=M4;let k4=x(async(F)=>{if(!X_(F))return;F.preventDefault(),P1.current=0,Q0(!1),q0(null),A0(null),B1();let C=Array.from(F?.dataTransfer?.files||[]);if(C.length===0)return;let u=y1.current||S1(F)||f1();await i_(C,u)},[f1,S1,i_]),d4=x((F)=>{if(F?.stopPropagation?.(),E0)return;let C=F?.currentTarget?.dataset?.uploadTarget||".";D0.current=C,L0.current?.click()},[E0]),E1=x(()=>{if(E0)return;let F=K_.current,C=F?j1.current?.get(F):null;D0.current=C?.type==="dir"?C.path:".",L0.current?.click()},[E0]),m1=x(()=>{H1(()=>_4(null))},[H1,_4]),d_=x(()=>{H1(()=>E1())},[H1,E1]),n_=x(()=>{H1(()=>Z_())},[H1,Z_]),o_=x(()=>{H1(()=>C_())},[H1,C_]),I4=x(()=>{if(!L||!v1)return;H1(()=>M1.current?.(L,I))},[H1,L,v1,I]),C4=x(()=>{if(!L||L===".")return;H1(()=>E_(L))},[H1,L,E_]),T4=x(()=>{if(!L||L1)return;H1(()=>A4())},[H1,L,L1,A4]),y_=x(()=>{if(!L||L1)return;H1(()=>l_())},[H1,L,L1,l_]),Y_=x(()=>{if(!x1)return;if(b1(),typeof window<"u")window.open(x1,"_blank","noopener")},[b1,x1]),P4=x(()=>{b1(),Y?.()},[b1,Y]),n4=x(()=>{b1(),Q?.()},[b1,Q]),y4=x(()=>{b1(),N?.()},[b1,N]),S4=x((F)=>{if(!F||F.button!==0)return;let C=F.currentTarget;if(!C||!C.dataset)return;let u=C.dataset.path;if(!u||u===".")return;if(q1.current===u)return;let v=M_(F);if(v?.closest?.("button, a, input, .workspace-caret"))return;if(!k_(v))return;F.preventDefault(),f0.current={path:u,dragging:!1,startX:F.clientX,startY:F.clientY};let n=(V0)=>{let U0=f0.current;if(!U0?.path)return;let Z0=Math.abs(V0.clientX-U0.startX),C0=Math.abs(V0.clientY-U0.startY),I1=Z0>4||C0>4;if(!U0.dragging&&I1)U0.dragging=!0,g0.current=!0,Q0(!0),q0("move"),V1(U0.path),g_(V0.clientX,V0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(U0.dragging){V0.preventDefault(),g_(V0.clientX,V0.clientY);let B_=document.elementFromPoint(V0.clientX,V0.clientY),Q_=O_(B_)||f1();if(y1.current!==Q_)D1(Q_);u_(Q_)}},G0=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",G0);let V0=f0.current;if(V0?.dragging&&V0.path){let U0=y1.current||f1(),Z0=H_.current;if(typeof Z0==="function")Z0(V0.path,U0)}f0.current={path:null,dragging:!1,startX:0,startY:0},P1.current=0,Q0(!1),q0(null),D1(null),B1(),e1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{g0.current=!1},0)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",G0)},[O_,f1,V1,g_,e1,D1,u_,B1]),S_=x(async(F)=>{let C=Array.from(F?.target?.files||[]);if(C.length===0)return;let u=D0.current||".";if(await i_(C,u),D0.current=".",F?.target)F.target.value=""},[i_]);return U`
        <aside
            class=${`workspace-sidebar${l?" workspace-drop-active":""}`}
            data-workspace-scale=${b0}
            ref=${T1}
            onDragEnter=${P_}
            onDragOver=${w1}
            onDragLeave=${E4}
            onDrop=${k4}
        >
            <input type="file" multiple style="display:none" ref=${L0} onChange=${S_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${e}
                            class=${`workspace-menu-button${c0?" active":""}`}
                            onClick=${(F)=>{F.stopPropagation(),Y1((C)=>!C)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${c0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${c0&&U`
                            <div class="workspace-menu-dropdown" ref=${f} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${m1} disabled=${E0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${d_} disabled=${E0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${n_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${p?" active":""}`} role="menuitem" onClick=${o_}>
                                    ${p?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${L&&U`<div class="workspace-menu-separator"></div>`}
                                ${L&&!L1&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I4} disabled=${!v1}>Open in editor</button>
                                `}
                                ${p_&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C4}>Rename selected</button>
                                `}
                                ${j_&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${y_}>Download selected file</button>
                                `}
                                ${x1&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y_}>Download selected folder (zip)</button>
                                `}
                                ${$_&&U`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${T4}>Delete selected file</button>
                                `}

                                ${(Y||Q||N)&&U`<div class="workspace-menu-separator"></div>`}
                                ${Y&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Q&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${n4}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${N&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${y4}>
                                        ${q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${_4} title="New file" disabled=${E0}>
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
            <div class="workspace-tree" onClick=${B4}>
                ${E0&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${t&&U`<div class="workspace-loading">Loading…</div>`}
                ${H&&U`<div class="workspace-error">${H}</div>`}
                ${B&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${s}
                        tabIndex="0"
                        onClick=${Z4}
                        onDblClick=${I_}
                        onKeyDown=${c4}
                        onTouchStart=${l4}
                        onTouchEnd=${T_}
                        onTouchMove=${i4}
                        onTouchCancel=${T_}
                    >
                        ${j4.map(({node:F,depth:C})=>{let u=F.type==="dir",v=F.path===L,n=F.path===T,G0=u&&V.has(F.path),V0=F0&&F.path===F0,U0=Array.isArray(F.children)&&F.children.length>0?F.children.length:Number(F.child_count)||0;return U`
                                <div
                                    key=${F.path}
                                    class=${`workspace-row${v?" selected":""}${V0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+C*E$.indentPx}px`}}
                                    data-path=${F.path}
                                    data-type=${F.type}
                                    onMouseDown=${S4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${u?G0?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${u?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${u?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${n?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${T0}
                                                value=${k}
                                                onInput=${(Z0)=>J(Z0?.target?.value||"")}
                                                onKeyDown=${(Z0)=>{if(Z0.key==="Enter")Z0.preventDefault(),__();else if(Z0.key==="Escape")Z0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${(Z0)=>Z0.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${F.name}</span></span>`}
                                    ${u&&!G0&&U0>0&&U`
                                        <span class="workspace-count">${U0}</span>
                                    `}
                                    ${u&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${F.path}
                                            title="Upload files to this folder"
                                            onClick=${d4}
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
            ${L&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${N$} onTouchStart=${c_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${L}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${_4} title="New file" disabled=${E0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!L1&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>v1&&M1.current?.(L,I)}
                                    title=${Q$}
                                    disabled=${!v1}
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
                            ${L1?U`
                                    <button class="workspace-download" onClick=${E1}
                                        title="Upload files to this folder" disabled=${E0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${D5(L,p)}
                                        title="Download folder as zip" onClick=${(F)=>F.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${l_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${b&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${I?.error&&U`<div class="workspace-error">${I.error}</div>`}
                    ${L1&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${x0?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${x0?.error&&U`<div class="workspace-error">${x0.error}</div>`}
                        ${x0?.payload&&x0.payload.segments?.length>0&&U`
                            <${kq} payload=${x0.payload} />
                        `}
                        ${x0?.payload&&(!x0.payload.segments||x0.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${I&&!I.error&&!L1&&U`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${i&&U`
                        <div class="workspace-download-card">
                            <${Iq} mediaId=${i} />
                        </div>
                    `}
                </div>
            `}
            ${K0&&U`
                <div class="workspace-drag-ghost" ref=${K4}>${K0.label}</div>
            `}
        </aside>
    `}var Cq=new Set(["kanban-editor","mindmap-editor"]);function Tq(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function e9(_,$,j){let Z=Tq(_,$,j);return Cq.has(Z)}var Pq=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,yq=/\.(csv|tsv)$/i,Sq=/\.pdf$/i,xq=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,_j=/\.drawio(\.xml|\.svg|\.png)?$/i;function $j({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:Q,onTogglePin:N,onTogglePreview:q,onEditSource:B,previewTabs:G,paneOverrides:V,onToggleDock:W,dockVisible:L,onToggleZen:A,zenMode:T,onPopOutTab:y}){let[k,J]=g(null),I=S(null);h(()=>{if(!k)return;let H=(w)=>{if(w.type==="keydown"&&w.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[k]),h(()=>{let H=(w)=>{if(w.ctrlKey&&w.key==="Tab"){if(w.preventDefault(),!_.length)return;let p=_.findIndex((N0)=>N0.id===$);if(w.shiftKey){let N0=_[(p-1+_.length)%_.length];j?.(N0.id)}else{let N0=_[(p+1)%_.length];j?.(N0.id)}return}if((w.ctrlKey||w.metaKey)&&w.key==="w"){let p=document.querySelector(".editor-pane");if(p&&p.contains(document.activeElement)){if(w.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let P=x((H,w)=>{if(H.button===1){H.preventDefault(),Z?.(w);return}if(H.button===0)j?.(w)},[j,Z]),i=x((H,w)=>{H.preventDefault(),J({id:w,x:H.clientX,y:H.clientY})},[]),c=x((H)=>{H.preventDefault(),H.stopPropagation()},[]),t=x((H,w)=>{H.preventDefault(),H.stopPropagation(),Z?.(w)},[Z]);h(()=>{if(!$||!I.current)return;let H=I.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let $0=x((H)=>{if(!(V instanceof Map))return null;return V.get(H)||null},[V]),b=k0(()=>_.find((H)=>H.id===k?.id)||null,[k?.id,_]),R=k0(()=>{let H=k?.id;if(!H)return!1;return e9(H,$0(H),(w)=>i0.resolve(w))},[k?.id,$0]);if(!_.length)return null;return U`
        <div class="tab-strip" ref=${I} role="tablist">
            ${_.map((H)=>U`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(w)=>P(w,H.id)}
                    onContextMenu=${(w)=>i(w,H.id)}
                >
                    ${H.pinned&&U`
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
                        onClick=${(w)=>t(w,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${W&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${L?" active":""}`}
                    onClick=${W}
                    title=${`${L?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${L?"Hide":"Show"} terminal`}
                    aria-pressed=${L?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${A&&U`
                <button
                    class=${`tab-strip-zen-toggle${T?" active":""}`}
                    onClick=${A}
                    title=${`${T?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${T?"Exit":"Enter"} zen mode`}
                    aria-pressed=${T?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${T?U`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:U`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${k&&U`
            <div class="tab-context-menu" style=${{left:k.x+"px",top:k.y+"px"}}>
                <button onClick=${()=>{Z?.(k.id),J(null)}}>Close</button>
                <button onClick=${()=>{Y?.(k.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Q?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{N?.(k.id),J(null)}}>
                    ${b?.pinned?"Unpin":"Pin"}
                </button>
                ${R&&B&&U`
                    <button onClick=${()=>{B(k.id),J(null)}}>Edit Source</button>
                `}
                ${y&&U`
                    <button onClick=${()=>{let H=_.find((w)=>w.id===k.id);y(k.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${q&&/\.(md|mdx|markdown)$/i.test(k.id)&&U`
                    <hr />
                    <button onClick=${()=>{q(k.id),J(null)}}>
                        ${G?.has(k.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${Pq.test(k.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(k.id),w=k.id.split("/").pop()||"document",p="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(w);window.open(p,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${yq.test(k.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(k.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Sq.test(k.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(k.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${xq.test(k.id)&&!_j.test(k.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(k.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${_j.test(k.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(k.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var wq=400,Q3=60,jj=220,N3="mdPreviewHeight";function Rq(){try{let _=localStorage.getItem(N3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=Q3?$:jj}catch{return jj}}function q3({getContent:_,path:$,onClose:j}){let[Z,Y]=g(""),[Q,N]=g(Rq),q=S(null),B=S(null),G=S(""),V=S(_);return V.current=_,h(()=>{let A=()=>{let y=V.current?.()||"";if(y===G.current)return;G.current=y;try{let k=D_(y,null,{sanitize:!1});Y(k)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let T=setInterval(A,wq);return()=>clearInterval(T)},[]),h(()=>{if(q.current&&Z)F4(q.current).catch(()=>{})},[Z]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let T=A.clientY,y=B.current?.offsetHeight||Q,k=B.current?.parentElement,J=k?k.offsetHeight*0.7:500,I=A.currentTarget;I.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let P=(c)=>{let t=Math.min(Math.max(y-(c.clientY-T),Q3),J);N(t)},i=()=>{I.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(N3,String(Math.round(B.current?.offsetHeight||Q)))}catch{}document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",i)}}
            onTouchStart=${(A)=>{A.preventDefault();let T=A.touches[0];if(!T)return;let y=T.clientY,k=B.current?.offsetHeight||Q,J=B.current?.parentElement,I=J?J.offsetHeight*0.7:500,P=A.currentTarget;P.classList.add("dragging"),document.body.style.userSelect="none";let i=(t)=>{let $0=t.touches[0];if(!$0)return;t.preventDefault();let b=Math.min(Math.max(k-($0.clientY-y),Q3),I);N(b)},c=()=>{P.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(N3,String(Math.round(B.current?.offsetHeight||Q)))}catch{}document.removeEventListener("touchmove",i),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}}
        ></div>
        <div class="md-preview-panel" ref=${B} style=${{height:Q+"px"}}>
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
                ref=${q}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function Zj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let Q=S(_);Q.current=_;let N=S($);N.current=$;let q=S(j);q.current=j;let B=S(Z);B.current=Z,h(()=>{q.current();let G=new A5((W,L)=>Q.current(W,L),(W)=>N.current(W),{chatJid:Y});G.connect();let V=()=>{G.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")B.current?.()};return window.addEventListener("focus",V),document.addEventListener("visibilitychange",V),()=>{window.removeEventListener("focus",V),document.removeEventListener("visibilitychange",V),G.disconnect()}},[Y])}function Yj(){let[_,$]=g(!1),[j,Z]=g("default"),Y=S(!1);h(()=>{let B=V$("notificationsEnabled",!1);if(Y.current=B,$(B),typeof Notification<"u")Z(Notification.permission)},[]),h(()=>{Y.current=_},[_]);let Q=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch{return Promise.resolve("default")}},[]),N=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Q();if(Z(G||"default"),G!=="granted"){Y.current=!1,$(!1),X1("notificationsEnabled","false");return}}let B=!Y.current;Y.current=B,$(B),X1("notificationsEnabled",String(B))},[Q]),q=x((B,G)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let V=new Notification(B,{body:G});return V.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:N,notify:q}}var _5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Qj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=g(null),[Q,N]=g(!1),q=S(!1),B=S(null),G=S(!1),V=S(null),W=S(null),L=S(0);h(()=>{q.current=Q},[Q]),h(()=>{W.current=Z},[Z]),h(()=>{L.current+=1,V.current=null,G.current=!1,q.current=!1,N(!1)},[j]);let A=x(async(k=null)=>{let J=L.current;try{if(k){let I=await E8(k,50,0,j);if(J!==L.current)return;Y(I.posts),N(!1)}else{let I=await s4(10,null,j);if(J!==L.current)return;Y(I.posts),N(I.has_more)}}catch(I){if(J!==L.current)return;console.error("Failed to load posts:",I)}},[j]),T=x(async()=>{let k=L.current;try{let J=await s4(10,null,j);if(k!==L.current)return;Y((I)=>{if(!I||I.length===0)return J.posts;return _5([...J.posts,...I])}),N((I)=>I||J.has_more)}catch(J){if(k!==L.current)return;console.error("Failed to refresh timeline:",J)}},[j]),y=x(async(k={})=>{let J=L.current,I=W.current;if(!I||I.length===0)return;if(G.current)return;let{preserveScroll:P=!0,preserveMode:i="top",allowRepeat:c=!1}=k,t=(R)=>{if(!P){R();return}if(i==="top")$(R);else _(R)},b=I.slice().sort((R,H)=>R.id-H.id)[0]?.id;if(!Number.isFinite(b))return;if(!c&&V.current===b)return;G.current=!0,V.current=b;try{let R=await s4(10,b,j);if(J!==L.current)return;if(R.posts.length>0)t(()=>{Y((H)=>_5([...R.posts,...H||[]])),N(R.has_more)});else N(!1)}catch(R){if(J!==L.current)return;console.error("Failed to load more posts:",R)}finally{if(J===L.current)G.current=!1}},[j,_,$]);return h(()=>{B.current=y},[y]),{posts:Z,setPosts:Y,hasMore:Q,setHasMore:N,hasMoreRef:q,loadPosts:A,refreshTimeline:T,loadMore:y,loadMoreRef:B,loadingMoreRef:G,lastBeforeIdRef:V}}function Nj(){let[_,$]=g(null),[j,Z]=g({text:"",totalLines:0}),[Y,Q]=g(""),[N,q]=g({text:"",totalLines:0}),[B,G]=g(null),[V,W]=g(null),[L,A]=g(null),T=S(null),y=S(0),k=S(!1),J=S(""),I=S(""),P=S(null),i=S(null),c=S(null),t=S(null),$0=S(!1),b=S(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:Q,agentThought:N,setAgentThought:q,pendingRequest:B,setPendingRequest:G,currentTurnId:V,setCurrentTurnId:W,steerQueuedTurnId:L,setSteerQueuedTurnId:A,lastAgentEventRef:T,lastSilenceNoticeRef:y,isAgentRunningRef:k,draftBufferRef:J,thoughtBufferRef:I,pendingRequestRef:P,stalledPostIdRef:i,currentTurnIdRef:c,steerQueuedTurnIdRef:t,thoughtExpandedRef:$0,draftExpandedRef:b}}function qj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let L=V.clientX,A=$.current||280,T=V.currentTarget;T.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let y=L,k=(I)=>{y=I.clientX;let P=Math.min(Math.max(A+(I.clientX-L),160),600);W.style.setProperty("--sidebar-width",`${P}px`),$.current=P},J=()=>{let I=Math.min(Math.max(A+(y-L),160),600);$.current=I,T.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",X1("sidebarWidth",String(Math.round(I))),document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",k),document.addEventListener("mouseup",J)}).current,Q=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let L=V.touches[0];if(!L)return;let A=L.clientX,T=$.current||280,y=V.currentTarget;y.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let k=(I)=>{let P=I.touches[0];if(!P)return;I.preventDefault();let i=Math.min(Math.max(T+(P.clientX-A),160),600);W.style.setProperty("--sidebar-width",`${i}px`),$.current=i},J=()=>{y.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",X1("sidebarWidth",String(Math.round($.current||T))),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",k,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,N=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let L=V.clientX,A=j.current||$.current||280,T=V.currentTarget;T.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let y=L,k=(I)=>{y=I.clientX;let P=Math.min(Math.max(A+(I.clientX-L),200),800);W.style.setProperty("--editor-width",`${P}px`),j.current=P},J=()=>{let I=Math.min(Math.max(A+(y-L),200),800);j.current=I,T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",X1("editorWidth",String(Math.round(I))),document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",k),document.addEventListener("mouseup",J)}).current,q=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let L=V.touches[0];if(!L)return;let A=L.clientX,T=j.current||$.current||280,y=V.currentTarget;y.classList.add("dragging"),document.body.style.userSelect="none";let k=(I)=>{let P=I.touches[0];if(!P)return;I.preventDefault();let i=Math.min(Math.max(T+(P.clientX-A),200),800);W.style.setProperty("--editor-width",`${i}px`),j.current=i},J=()=>{y.classList.remove("dragging"),document.body.style.userSelect="",X1("editorWidth",String(Math.round(j.current||T))),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",k,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,B=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let L=V.clientY,A=Z?.current||200,T=V.currentTarget;T.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let y=L,k=(I)=>{y=I.clientY;let P=Math.min(Math.max(A-(I.clientY-L),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${P}px`),Z)Z.current=P;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let I=Math.min(Math.max(A-(y-L),100),window.innerHeight*0.5);if(Z)Z.current=I;T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",X1("dockHeight",String(Math.round(I))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",k),document.addEventListener("mouseup",J)}).current,G=S((V)=>{V.preventDefault();let W=_.current;if(!W)return;let L=V.touches[0];if(!L)return;let A=L.clientY,T=Z?.current||200,y=V.currentTarget;y.classList.add("dragging"),document.body.style.userSelect="none";let k=(I)=>{let P=I.touches[0];if(!P)return;I.preventDefault();let i=Math.min(Math.max(T-(P.clientY-A),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${i}px`),Z)Z.current=i;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{y.classList.remove("dragging"),document.body.style.userSelect="",X1("dockHeight",String(Math.round(Z?.current||T))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",k,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:Q,handleEditorSplitterMouseDown:N,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:B,handleDockSplitterTouchStart:G}}function fq(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,Q=new Map;for(let[N,q]of _.entries()){let B=N;if(Z==="dir"){if(N===$)B=j,Y=!0;else if(N.startsWith(`${$}/`))B=`${j}${N.slice($.length)}`,Y=!0}else if(N===$)B=j,Y=!0;Q.set(B,q)}return Y?Q:_}function Gj({onTabClosed:_}={}){let $=S(_);$.current=_;let[j,Z]=g(()=>$1.getTabs()),[Y,Q]=g(()=>$1.getActiveId()),[N,q]=g(()=>$1.getTabs().length>0);h(()=>{return $1.onChange((b,R)=>{Z(b),Q(R),q(b.length>0)})},[]);let[B,G]=g(()=>new Set),[V,W]=g(()=>new Map),L=x((b)=>{G((R)=>{let H=new Set(R);if(H.has(b))H.delete(b);else H.add(b);return H})},[]),A=x((b)=>{G((R)=>{if(!R.has(b))return R;let H=new Set(R);return H.delete(b),H})},[]),T=x((b)=>{W((R)=>{if(!R.has(b))return R;let H=new Map(R);return H.delete(b),H})},[]),y=x((b,R={})=>{if(!b)return;let H=typeof R?.paneOverrideId==="string"&&R.paneOverrideId.trim()?R.paneOverrideId.trim():null,w={path:b,mode:"edit"};try{if(!(H?i0.get(H):i0.resolve(w))){if(!i0.get("editor")){console.warn(`[openEditor] No pane handler for: ${b}`);return}}}catch(N0){console.warn(`[openEditor] paneRegistry.resolve() error for "${b}":`,N0)}let p=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0;if($1.open(b,p),H)W((N0)=>{if(N0.get(b)===H)return N0;let l=new Map(N0);return l.set(b,H),l})},[]),k=x(()=>{let b=$1.getActiveId();if(b){let R=$1.get(b);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}$1.close(b),A(b),T(b),$.current?.(b)}},[T,A]),J=x((b)=>{let R=$1.get(b);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}$1.close(b),A(b),T(b),$.current?.(b)},[T,A]),I=x((b)=>{$1.activate(b)},[]),P=x((b)=>{let R=$1.getTabs().filter((p)=>p.id!==b&&!p.pinned),H=R.filter((p)=>p.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let w=R.map((p)=>p.id);$1.closeOthers(b),w.forEach((p)=>{A(p),T(p),$.current?.(p)})},[T,A]),i=x(()=>{let b=$1.getTabs().filter((w)=>!w.pinned),R=b.filter((w)=>w.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let H=b.map((w)=>w.id);$1.closeAll(),H.forEach((w)=>{A(w),T(w),$.current?.(w)})},[T,A]),c=x((b)=>{$1.togglePin(b)},[]),t=x((b)=>{if(!b)return;W((R)=>{if(R.get(b)==="editor")return R;let H=new Map(R);return H.set(b,"editor"),H}),$1.activate(b)},[]),$0=x(()=>{let b=$1.getActiveId();if(b)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:b}}))},[]);return h(()=>{let b=(R)=>{let{oldPath:H,newPath:w,type:p}=R.detail||{};if(!H||!w)return;if(p==="dir"){for(let N0 of $1.getTabs())if(N0.path===H||N0.path.startsWith(`${H}/`)){let l=`${w}${N0.path.slice(H.length)}`;$1.rename(N0.id,l)}}else $1.rename(H,w);W((N0)=>fq(N0,H,w,p))};return window.addEventListener("workspace-file-renamed",b),()=>window.removeEventListener("workspace-file-renamed",b)},[]),h(()=>{let b=(R)=>{if($1.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",b),()=>window.removeEventListener("beforeunload",b)},[]),{editorOpen:N,tabStripTabs:j,tabStripActiveId:Y,previewTabs:B,tabPaneOverrides:V,openEditor:y,closeEditor:k,handleTabClose:J,handleTabActivate:I,handleTabCloseOthers:P,handleTabCloseAll:i,handleTabTogglePin:c,handleTabTogglePreview:L,handleTabEditSource:t,revealInExplorer:$0}}function G3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],Q=Number(Y);return Number.isFinite(Q)?Q:$}catch{return $}}var K3=G3("warning",30000),Kj=G3("finalize",120000),X3=G3("refresh",30000),Xj=30000;function Bj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Wj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Vj(_=30000){let[,$]=g(0);h(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function B3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}function Lj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function W3(_){return String(_||"").trim()||"web:default"}function Uj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function zj(_={}){return O4(_)&&p5(_)}function vq(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function bq(_={},$={}){if(!zj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=vq({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function Fj(_={}){if(!zj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,Q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let W of Y)$.clearTimeout?.(W);Y.clear()},N=()=>{Z=0,bq({window:$,document:j})},q=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(N)??0},B=()=>{q();for(let W of[80,220,420]){let L=$.setTimeout?.(()=>{Y.delete(L),q()},W);if(L!=null)Y.add(L)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;B()},V=$.visualViewport;return B(),$.addEventListener("focus",B),$.addEventListener("pageshow",B),$.addEventListener("resize",B),$.addEventListener("orientationchange",B),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",B,!0),V?.addEventListener?.("resize",B),V?.addEventListener?.("scroll",B),()=>{Q(),$.removeEventListener("focus",B),$.removeEventListener("pageshow",B),$.removeEventListener("resize",B),$.removeEventListener("orientationchange",B),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",B,!0),V?.removeEventListener?.("resize",B),V?.removeEventListener?.("scroll",B)}}function mq(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function q_(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:mq($,j)}var uq=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Hj(_){return uq.has(String(_||"").trim())}function gq(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function V3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(gq(_),{detail:Z})),!0}var hq=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Oj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(O4({window:j,navigator:Z}))};Y();let N=hq.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",Y),()=>q.removeEventListener("change",Y);if(typeof q.addListener==="function")return q.addListener(Y),()=>q.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let q of N)q();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function Jj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}var z3="piclaw_btw_session",pq=900,cq="__piclawRenameBranchFormLock__",L3=()=>{if(typeof window>"u")return null;let _=window,$=cq,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function lq(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function iq(){let _=J_(z3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",Y=typeof $.thinking==="string"?$.thinking:"",Q=typeof $.error==="string"&&$.error.trim()?$.error:null,N=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:Y,error:N==="error"?Q||"BTW stream interrupted. You can retry.":Q,model:null,status:N}}catch{return null}}var Dj=M8,Aj=I8,dq=T8,Ej=w8,Mj=R8,U3=P8,t5=q_(t1,"getAgentContext",null),nq=q_(t1,"getAutoresearchStatus",null),oq=q_(t1,"stopAutoresearch",{status:"ok"}),rq=q_(t1,"dismissAutoresearch",{status:"ok"}),kj=q_(t1,"getAgentModels",{current:null,models:[]}),Ij=q_(t1,"getActiveChatAgents",{chats:[]}),e5=q_(t1,"getChatBranches",{chats:[]}),sq=q_(t1,"renameChatBranch",null),aq=q_(t1,"pruneChatBranch",null),Cj=q_(t1,"restoreChatBranch",null),Tj=q_(t1,"getAgentQueueState",{count:0}),tq=q_(t1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),eq=q_(t1,"removeAgentQueueItem",{removed:!1}),_G=q_(t1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});i0.register(B6);i0.register(m6);i0.register(b6);i0.register(u6);i0.register(g6);i0.register(h6);i0.register(c6);i0.register(l6);i0.register(d6);i0.register(r6);i0.register(s6);i0.register(f6);W6();i0.register(U6);i0.register(z6);function $G({locationParams:_,navigate:$}){let j=k0(()=>{let K=_.get("chat_jid");return K&&K.trim()?K.trim():"web:default"},[_]),Z=k0(()=>{let K=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return K==="1"||K==="true"||K==="yes"},[_]),Y=k0(()=>{let K=(_.get("pane_popout")||"").trim().toLowerCase();return K==="1"||K==="true"||K==="yes"},[_]),Q=k0(()=>{let K=_.get("pane_path");return K&&K.trim()?K.trim():""},[_]),N=k0(()=>{let K=_.get("pane_label");return K&&K.trim()?K.trim():""},[_]),q=k0(()=>{let K=(_.get("branch_loader")||"").trim().toLowerCase();return K==="1"||K==="true"||K==="yes"},[_]),B=k0(()=>{let K=_.get("branch_source_chat_jid");return K&&K.trim()?K.trim():j},[j,_]),[G,V]=g("disconnected"),[W,L]=g(()=>O4()),[A,T]=g(null),[y,k]=g(null),[J,I]=g(!1),[P,i]=g("current"),[c,t]=g([]),[$0,b]=g([]),[R,H]=g(null),{agentStatus:w,setAgentStatus:p,agentDraft:N0,setAgentDraft:l,agentPlan:Q0,setAgentPlan:j0,agentThought:q0,setAgentThought:K0,pendingRequest:X0,setPendingRequest:F0,currentTurnId:A0,setCurrentTurnId:E0,steerQueuedTurnId:n0,setSteerQueuedTurnId:x0,lastAgentEventRef:I0,lastSilenceNoticeRef:o0,isAgentRunningRef:r0,draftBufferRef:b0,thoughtBufferRef:s0,pendingRequestRef:c0,stalledPostIdRef:Y1,currentTurnIdRef:z0,steerQueuedTurnIdRef:h0,thoughtExpandedRef:Q1,draftExpandedRef:K1}=Nj(),[G_,J1]=g({}),[j1,g1]=g(null),[M1,N1]=g(null),[m0,T1]=g(!1),[s,T0]=g(null),[L0,D0]=g([]),[W0,a0]=g([]),[f0,u0]=g(null),[g0,w0]=g(()=>new Map),[e0,P0]=g(()=>new Set),[B0,J0]=g([]),[H0,f]=g(!1),[e,M0]=g(()=>iq()),[v0,d0]=g(null),P1=S(new Set),y1=k0(()=>L0.find((K)=>K?.chat_jid===j)||null,[L0,j]),_1=k0(()=>W0.find((K)=>K?.chat_jid===j)||y1||null,[y1,W0,j]),h1=_1?.root_chat_jid||y1?.root_chat_jid||j,K4=lq(P),[F_,n1]=g(()=>({status:q?"running":"idle",message:q?"Preparing a new chat branch…":""})),H_=B0.length,K_=S(new Set),q1=S([]),o1=S(new Set),X4=S(0),m_=S({inFlight:!1,lastAttemptAt:0,turnId:null});K_.current=new Set(B0.map((K)=>K.row_id)),q1.current=B0;let{notificationsEnabled:Z$,notificationPermission:g4,toggleNotifications:f1,notify:O_}=Yj(),[S1,D1]=g(()=>new Set),[B1,u_]=g(()=>V$("workspaceOpen",!0)),g_=S(null),{editorOpen:V1,tabStripTabs:e1,tabStripActiveId:l0,previewTabs:k1,tabPaneOverrides:E_,openEditor:__,closeEditor:h4,handleTabClose:_4,handleTabActivate:p4,handleTabCloseOthers:$4,handleTabCloseAll:Y$,handleTabTogglePin:j4,handleTabTogglePreview:h_,handleTabEditSource:E$,revealInExplorer:M$}=Gj({onTabClosed:(K)=>g_.current?.(K)}),L1=S(null),v1=S(null),Q$=S(null),p_=S(null),$_=i0.getDockPanes().length>0,[j_,x1]=g(!1),b1=x(()=>x1((K)=>!K),[]),H1=x(()=>{__(i$,{label:"Terminal"})},[__]),M_=x(()=>{__(G4,{label:"VNC"})},[__]),k_=k0(()=>e1.find((K)=>K.id===l0)||e1[0]||null,[l0,e1]),I_=k0(()=>l0?E_.get(l0)||null:null,[E_,l0]),Z4=k0(()=>N||k_?.label||Q||"Pane",[k_?.label,N,Q]),Z_=k0(()=>e1.length>1||Boolean(l0&&k1.has(l0)),[k1,l0,e1.length]),r1=k0(()=>Q===G4||Q.startsWith(`${G4}/`),[Q]),C_=k0(()=>Q===i$&&!Z_||r1,[r1,Z_,Q]),B4=Y||!Z&&(V1||$_&&j_),[A1,Y4]=g(!1),c4=S(!1),l4=x(()=>{if(!V1||Z)return;if(c4.current=j_,j_)x1(!1);Y4(!0)},[V1,Z,j_]),T_=x(()=>{if(!A1)return;if(Y4(!1),c4.current)x1(!0),c4.current=!1},[A1]),i4=x(()=>{if(A1)T_();else l4()},[A1,l4,T_]);h(()=>{if(A1&&!V1)T_()},[A1,V1,T_]),h(()=>{if(!Y||!Q)return;if($1.getActiveId()===Q)return;__(Q,N?{label:N}:void 0)},[__,N,Y,Q]),h(()=>{let K=L1.current;if(!K)return;if(v1.current)v1.current.dispose(),v1.current=null;let X=l0;if(!X)return;let O={path:X,mode:"edit"},M=(I_?i0.get(I_):null)||i0.resolve(O)||i0.get("editor");if(!M){K.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let D=M.mount(K,O);v1.current=D,D.onDirtyChange?.((r)=>{$1.setDirty(X,r)}),D.onSaveRequest?.(()=>{}),D.onClose?.(()=>{h4()});let m=$1.getViewState(X);if(m&&typeof D.restoreViewState==="function")requestAnimationFrame(()=>D.restoreViewState(m));if(typeof D.onViewStateChange==="function")D.onViewStateChange((r)=>{$1.saveViewState(X,r)});return requestAnimationFrame(()=>D.focus()),()=>{if(v1.current===D)D.dispose(),v1.current=null}},[l0,I_,h4]);let N$=x(async(K)=>{let X=typeof l0==="string"?l0.trim():"",O=v1.current;if(!X||!O?.setContent)return;if(typeof O.isDirty==="function"&&O.isDirty())return;if(!(Array.isArray(K)&&K.length>0?K.some((D)=>{let m=typeof D?.path==="string"?D.path.trim():"";if(!m||m===".")return!0;return X===m||X.startsWith(`${m}/`)}):!0))return;try{let D=await v$(X,1e6,"edit"),m=typeof D?.text==="string"?D.text:"",r=typeof D?.mtime==="string"&&D.mtime.trim()?D.mtime.trim():new Date().toISOString();O.setContent(m,r)}catch(D){console.warn("[workspace_update] Failed to refresh active pane:",D)}},[l0]);h(()=>{let K=Q$.current;if(p_.current)p_.current.dispose(),p_.current=null;if(!K||!$_||!j_)return;let X=i0.getDockPanes()[0];if(!X){K.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=X.mount(K,{mode:"view"});return p_.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(p_.current===O)O.dispose(),p_.current=null}},[$_,j_]);let[c_,l_]=g({name:"You",avatar_url:null,avatar_background:null}),A4=S(!1),X_=S(!1),P_=S(null),w1=S(j),E4=S(new Map),i_=S(j),M4=S(0),k4=S(0),d4=S({}),E1=S({name:null,avatar_url:null}),m1=S({currentHashtag:null,searchQuery:null,searchOpen:!1}),d_=S(null),n_=S(null),o_=S(0),I4=S(0),C4=S(0),T4=S(null),y_=S(null),Y_=S(null),P4=S(null),n4=S(0),y4=S({title:null,avatarBase:null}),S4=S(null),S_=S(!1),[F,C]=g(!1),u=S(0),[v,n]=g(!1),[G0,V0]=g(""),U0=k0(()=>o8(G0,_1?.agent_name||""),[_1?.agent_name,G0]),Z0=S(null),C0=x(()=>{if(S4.current)clearTimeout(S4.current),S4.current=null;H(null)},[]);Vj(30000),h(()=>{if(!v)return;requestAnimationFrame(()=>{if(v)Z0.current?.focus(),Z0.current?.select?.()})},[v]),h(()=>{return y2()},[]),h(()=>{return Oj(L)},[]),h(()=>{X1("workspaceOpen",String(B1))},[B1]),h(()=>{return Fj()},[]),h(()=>{return()=>{C0()}},[C0]),h(()=>{if(!e){X1(z3,"");return}X1(z3,JSON.stringify({question:e.question||"",answer:e.answer||"",thinking:e.thinking||"",error:e.error||null,status:e.status||"success"}))},[e]),h(()=>{d4.current=G_||{}},[G_]),h(()=>{w1.current=j},[j]),h(()=>{E1.current=c_||{name:"You",avatar_url:null,avatar_background:null}},[c_]);let I1=x((K,X,O=null)=>{if(typeof document>"u")return;let M=(K||"").trim()||"PiClaw";if(y4.current.title!==M){document.title=M;let a=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(a&&a.getAttribute("content")!==M)a.setAttribute("content",M);y4.current.title=M}let D=document.getElementById("dynamic-favicon");if(!D)return;let m=D.getAttribute("data-default")||D.getAttribute("href")||"/favicon.ico",r=X||m,_0=X?`${r}|${O||""}`:r;if(y4.current.avatarBase!==_0){let a=X?`${r}${r.includes("?")?"&":"?"}v=${O||Date.now()}`:r;D.setAttribute("href",a),y4.current.avatarBase=_0}},[]),B_=x((K)=>{if(!K)return;t((X)=>X.includes(K)?X:[...X,K])},[]),Q_=x((K)=>{t((X)=>X.filter((O)=>O!==K))},[]);g_.current=Q_;let _8=x(()=>{t([])},[]),z=x((K)=>{if(!Array.isArray(K)){t([]);return}let X=[],O=new Set;for(let M of K){if(typeof M!=="string"||!M.trim())continue;let D=M.trim();if(O.has(D))continue;O.add(D),X.push(D)}t(X)},[]),E=x((K,X=null,O="info",M=3000)=>{C0(),H({title:K,detail:X||null,kind:O||"info"}),S4.current=setTimeout(()=>{H((D)=>D?.title===K?null:D)},M)},[C0]),d=x((K)=>{let X=Lj(K,{editorOpen:V1,resolvePane:(O)=>i0.resolve(O)});if(X.kind==="open"){__(X.path);return}if(X.kind==="toast")E(X.title,X.detail,X.level)},[V1,__,E]),Y0=x(()=>{let K=l0;if(K)B_(K)},[l0,B_]),y0=x((K)=>{if(!K)return;b((X)=>X.includes(K)?X:[...X,K])},[]),U1=x(async(K,X=null)=>{let O=(D)=>{D.scrollIntoView({behavior:"smooth",block:"center"}),D.classList.add("post-highlight"),setTimeout(()=>D.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+K);if(M){O(M);return}try{let D=typeof X==="string"&&X.trim()?X.trim():j,r=(await k8(K,D))?.thread?.[0];if(!r)return;l1((_0)=>{if(!_0)return[r];if(_0.some((a)=>a.id===r.id))return _0;return[..._0,r]}),requestAnimationFrame(()=>{setTimeout(()=>{let _0=document.getElementById("post-"+K);if(_0)O(_0)},50)})}catch(D){console.error("[scrollToMessage] Failed to fetch message",K,D)}},[j]),C1=x((K)=>{b((X)=>X.filter((O)=>O!==K))},[]),p1=x(()=>{b([])},[]),W4=x((K)=>{if(!Array.isArray(K)){b([]);return}let X=[],O=new Set;for(let M of K){if(typeof M!=="string"||!M.trim())continue;let D=M.trim();if(O.has(D))continue;O.add(D),X.push(D)}b(X)},[]),o4=x((K)=>{let X=typeof K==="string"&&K.trim()?K.trim():"Could not send your message.";E("Compose failed",X,"error",5000)},[E]),W_=x((K={})=>{let X=Date.now();if(I0.current=X,K.running)r0.current=!0,f((O)=>O?O:!0);if(K.clearSilence)o0.current=0},[f]),N_=x(()=>{if(P4.current)clearTimeout(P4.current),P4.current=null;n4.current=0},[]);h(()=>()=>{N_()},[N_]);let V4=x(()=>{N_(),p((K)=>{if(!K)return K;if(!(K.last_activity||K.lastActivity))return K;let{last_activity:X,lastActivity:O,...M}=K;return M})},[N_]),L4=x((K)=>{if(!K)return;N_();let X=Date.now();n4.current=X,p({type:K.type||"active",last_activity:!0}),P4.current=setTimeout(()=>{if(n4.current!==X)return;p((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},Xj)},[N_]),r_=x(()=>{r0.current=!1,f(!1),I0.current=null,o0.current=0,b0.current="",s0.current="",c0.current=null,y_.current=null,z0.current=null,h0.current=null,P_.current=null,m_.current={inFlight:!1,lastAttemptAt:0,turnId:null},N_(),E0(null),x0(null),Q1.current=!1,K1.current=!1},[N_,E0,x0,f]),x_=x((K)=>{if(!Uj({remainingQueueCount:K,currentTurnId:z0.current,isAgentTurnActive:H0}))return;h0.current=null,x0(null)},[H0,x0]),c1=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),x4=x(()=>({agentStatus:w,agentDraft:N0?{...N0}:{text:"",totalLines:0},agentPlan:Q0||"",agentThought:q0?{...q0}:{text:"",totalLines:0},pendingRequest:X0,currentTurnId:A0,steerQueuedTurnId:n0,isAgentTurnActive:Boolean(H0),followupQueueItems:Array.isArray(B0)?B0.map((K)=>({...K})):[],activeModel:j1,activeThinkingLevel:M1,supportsThinking:Boolean(m0),activeModelUsage:s,contextUsage:f0,isAgentRunning:Boolean(r0.current),wasAgentActive:Boolean(X_.current),draftBuffer:b0.current||"",thoughtBuffer:s0.current||"",lastAgentEvent:I0.current||null,lastSilenceNotice:o0.current||0,lastAgentResponse:y_.current||null,currentTurnIdRef:z0.current||null,steerQueuedTurnIdRef:h0.current||null,thoughtExpanded:Boolean(Q1.current),draftExpanded:Boolean(K1.current),agentStatusRef:P_.current||null,silentRecovery:{...m_.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[j1,s,M1,N0,Q0,w,q0,f0,A0,B0,H0,X0,n0,m0]),$5=x((K)=>{let X=K||c1();N_(),r0.current=Boolean(X.isAgentRunning),X_.current=Boolean(X.wasAgentActive),f(Boolean(X.isAgentTurnActive)),I0.current=X.lastAgentEvent||null,o0.current=Number(X.lastSilenceNotice||0),b0.current=X.draftBuffer||"",s0.current=X.thoughtBuffer||"",c0.current=X.pendingRequest||null,y_.current=X.lastAgentResponse||null,z0.current=X.currentTurnIdRef||null,h0.current=X.steerQueuedTurnIdRef||null,P_.current=X.agentStatusRef||null,m_.current=X.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},Q1.current=Boolean(X.thoughtExpanded),K1.current=Boolean(X.draftExpanded),p(X.agentStatus||null),l(X.agentDraft?{...X.agentDraft}:{text:"",totalLines:0}),j0(X.agentPlan||""),K0(X.agentThought?{...X.agentThought}:{text:"",totalLines:0}),F0(X.pendingRequest||null),E0(X.currentTurnId||null),x0(X.steerQueuedTurnId||null),J0(Array.isArray(X.followupQueueItems)?X.followupQueueItems.map((O)=>({...O})):[]),g1(X.activeModel||null),N1(X.activeThinkingLevel||null),T1(Boolean(X.supportsThinking)),T0(X.activeModelUsage??null),u0(X.contextUsage??null)},[N_,c1,E0,J0,f,x0]),V_=x((K)=>{if(!K)return;if(z0.current===K)return;z0.current=K,m_.current={inFlight:!1,lastAttemptAt:0,turnId:K},E0(K),h0.current=null,x0(null),b0.current="",s0.current="",l({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),F0(null),c0.current=null,y_.current=null,Q1.current=!1,K1.current=!1},[E0,x0]),j5=x((K)=>{if(typeof document<"u"){let a=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&a)return}let X=y_.current;if(!X||!X.post)return;if(K&&X.turnId&&X.turnId!==K)return;let O=X.post;if(O.id&&T4.current===O.id)return;let M=String(O?.data?.content||"").trim();if(!M)return;T4.current=O.id||T4.current,y_.current=null;let D=M.replace(/\s+/g," ").slice(0,200),m=d4.current||{},_0=(O?.data?.agent_id?m[O.data.agent_id]:null)?.name||"Pi";O_(_0,D)},[O_]),w4=x(async(K,X)=>{if(K!=="thought"&&K!=="draft")return;let O=z0.current;if(K==="thought"){if(Q1.current=X,O)try{await Mj(O,"thought",X)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!X)return;try{let M=O?await Ej(O,"thought"):null;if(M?.text)s0.current=M.text;K0((D)=>({...D||{text:"",totalLines:0},fullText:s0.current||D?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:D?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(K1.current=X,O)try{await Mj(O,"draft",X)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!X)return;try{let M=O?await Ej(O,"draft"):null;if(M?.text)b0.current=M.text;l((D)=>({...D||{text:"",totalLines:0},fullText:b0.current||D?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:D?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),L_=S(null),Q4=x(()=>{let K=d_.current;if(!K)return;if(!(Math.abs(K.scrollTop)>150))K.scrollTop=0},[]);L_.current=Q4;let F3=x((K)=>{let X=d_.current;if(!X||typeof K!=="function"){K?.();return}let{currentHashtag:O,searchQuery:M,searchOpen:D}=m1.current||{},m=!((M||D)&&!O),r=m?X.scrollHeight-X.scrollTop:X.scrollTop;K(),requestAnimationFrame(()=>{let _0=d_.current;if(!_0)return;if(m){let a=Math.max(_0.scrollHeight-r,0);_0.scrollTop=a}else{let a=Math.max(_0.scrollHeight-_0.clientHeight,0),o=Math.min(r,a);_0.scrollTop=o}})},[]),r4=x((K)=>{let X=d_.current;if(!X||typeof K!=="function"){K?.();return}let O=X.scrollTop;K(),requestAnimationFrame(()=>{let M=d_.current;if(!M)return;let D=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(O,D)})},[]),Pj="Queued as a follow-up (one-at-a-time).",yj="⁣",H3=x((K)=>{if(!K||!Array.isArray(K))return K;let X=K_.current,O=new Set(X),M=K.filter((D)=>{if(O.has(D?.id))return!1;if(D?.data?.is_bot_message){let m=D?.data?.content;if(m===Pj||m===yj)return!1}return!0});return M.length===K.length?K:M},[]),{posts:k$,setPosts:l1,hasMore:Sj,setHasMore:Z5,hasMoreRef:O3,loadPosts:s_,refreshTimeline:s1,loadMore:xj,loadMoreRef:$8}=Qj({preserveTimelineScroll:F3,preserveTimelineScrollTop:r4,chatJid:j}),q$=k0(()=>H3(k$),[k$,B0,H3]),Y5=x(()=>{let K=Y1.current;if(!K)return;l1((X)=>X?X.filter((O)=>O.id!==K):X),Y1.current=null},[l1]),{handleSplitterMouseDown:wj,handleSplitterTouchStart:Rj,handleEditorSplitterMouseDown:fj,handleEditorSplitterTouchStart:vj,handleDockSplitterMouseDown:bj,handleDockSplitterTouchStart:mj}=qj({appShellRef:n_,sidebarWidthRef:o_,editorWidthRef:I4,dockHeightRef:C4}),J3=x(()=>{if(!r0.current)return;r0.current=!1,o0.current=0,I0.current=null,z0.current=null,E0(null),Q1.current=!1,K1.current=!1;let K=(b0.current||"").trim();if(b0.current="",s0.current="",l({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),F0(null),c0.current=null,y_.current=null,!K){p({type:"error",title:"Response stalled - No content received"});return}let O=`${K}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),D=new Date().toISOString(),m={id:M,timestamp:D,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};Y1.current=M,l1((r)=>r?_5([...r,m]):[m]),L_.current?.(),p(null)},[E0]);h(()=>{m1.current={currentHashtag:A,searchQuery:y,searchOpen:J}},[A,y,J]);let Z1=x(()=>{let K=++X4.current,X=j;Tj(X).then((O)=>{if(K!==X4.current)return;if(w1.current!==X)return;let M=o1.current,D=Array.isArray(O?.items)?O.items.map((m)=>({...m})).filter((m)=>!M.has(m.row_id)):[];if(D.length){J0((m)=>{if(m.length===D.length&&m.every((r,_0)=>r.row_id===D[_0].row_id))return m;return D});return}M.clear(),x_(0),J0((m)=>m.length===0?m:[])}).catch(()=>{if(K!==X4.current)return;if(w1.current!==X)return;J0((O)=>O.length===0?O:[])})},[x_,j,J0]),a1=x(async()=>{let K=j;try{let X=await t5(K);if(w1.current!==K)return;if(X)u0(X)}catch(X){if(w1.current!==K)return;console.warn("Failed to fetch agent context:",X)}},[j]),U_=x(async()=>{let K=j;try{let X=await nq(K);if(w1.current!==K)return;let O=Array.isArray(X?.content)?X.content.find((M)=>M?.type==="status_panel"&&M?.panel):null;w0((M)=>{let D=new Map(M);if(X?.key&&O?.panel)D.set(X.key,O.panel);else D.delete("autoresearch");return D}),P0((M)=>{if(M.size===0)return M;let D=new Set(Array.from(M).filter((m)=>!String(m).startsWith("autoresearch:")));return D.size===M.size?M:D})}catch(X){if(w1.current!==K)return;console.warn("Failed to fetch autoresearch status:",X)}},[j]),w_=x(async()=>{let K=j;try{let X=await U3(K);if(w1.current!==K)return null;if(!X||X.status!=="active"||!X.data){if(X_.current){let{currentHashtag:D,searchQuery:m,searchOpen:r}=m1.current||{};if(!D&&!m&&!r)s1()}return X_.current=!1,r_(),P_.current=null,p(null),l({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),F0(null),c0.current=null,X??null}X_.current=!0;let O=X.data;P_.current=O;let M=O.turn_id||O.turnId;if(M)V_(M);if(W_({running:!0,clearSilence:!0}),V4(),p(O),X.thought&&X.thought.text)K0((D)=>{if(D&&D.text&&D.text.length>=X.thought.text.length)return D;return s0.current=X.thought.text,{text:X.thought.text,totalLines:X.thought.totalLines||0}});if(X.draft&&X.draft.text)l((D)=>{if(D&&D.text&&D.text.length>=X.draft.text.length)return D;return b0.current=X.draft.text,{text:X.draft.text,totalLines:X.draft.totalLines||0}});return X}catch(X){return console.warn("Failed to fetch agent status:",X),null}},[r_,V4,W_,s1,V_]),j8=x(async()=>{if(!r0.current)return null;if(c0.current)return null;let K=z0.current||null,X=m_.current,O=Date.now();if(X.inFlight)return null;if(X.turnId===K&&O-X.lastAttemptAt<X3)return null;X.inFlight=!0,X.lastAttemptAt=O,X.turnId=K;try{let{currentHashtag:M,searchQuery:D,searchOpen:m}=m1.current||{};if(!M&&!D&&!m)await s1();return await Z1(),await w_()}finally{X.inFlight=!1}},[w_,Z1,s1]);h(()=>{let K=Math.min(1000,Math.max(100,Math.floor(K3/2))),X=setInterval(()=>{if(!r0.current)return;if(c0.current)return;let O=I0.current;if(!O)return;let M=Date.now(),D=M-O,m=z4(P_.current);if(D>=Kj){if(!m)p({type:"waiting",title:"Re-syncing after a quiet period…"});j8();return}if(D>=K3){if(M-o0.current>=X3){if(!m){let r=Math.floor(D/1000);p({type:"waiting",title:`Waiting for model… No events for ${r}s`})}o0.current=M,j8()}}},K);return()=>clearInterval(X)},[j8]);let uj=x((K)=>{if(V(K),K!=="connected"){p(null),l({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),F0(null),c0.current=null,r_();return}if(!A4.current){A4.current=!0;let{currentHashtag:D,searchQuery:m,searchOpen:r}=m1.current||{};if(!D&&!m&&!r)s1();w_(),Z1(),a1();return}let{currentHashtag:X,searchQuery:O,searchOpen:M}=m1.current;if(!X&&!O&&!M)s1();w_(),Z1(),a1()},[r_,s1,w_,Z1,a1]),gj=x(async(K)=>{T(K),l1(null),await s_(K)},[s_]),hj=x(async()=>{T(null),k(null),l1(null),await s_()},[s_]),pj=x(async(K,X=P)=>{if(!K||!K.trim())return;let O=X==="root"||X==="all"?X:"current";i(O),k(K.trim()),T(null),l1(null);try{let M=await Dj(K.trim(),50,0,j,O,h1);l1(M.results),Z5(!1)}catch(M){console.error("Failed to search:",M),l1([])}},[j,h1,P]),cj=x(()=>{I(!0),k(null),T(null),i("current"),l1([])},[]),lj=x(()=>{I(!1),k(null),s_()},[s_]),ZG=x(()=>{},[]),Z8=!A&&!y&&!J,ij=x(async(K)=>{if(!K)return;let X=K.id,O=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():j,M=q$?.filter((m)=>m?.data?.thread_id===X&&m?.id!==X).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let D=(m)=>{if(!m.length)return;D1((_0)=>{let a=new Set(_0);return m.forEach((o)=>a.add(o)),a}),setTimeout(()=>{if(r4(()=>{l1((_0)=>_0?_0.filter((a)=>!m.includes(a.id)):_0)}),D1((_0)=>{let a=new Set(_0);return m.forEach((o)=>a.delete(o)),a}),O3.current)$8.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let m=await Aj(X,M>0,O);if(m?.ids?.length)D(m.ids)}catch(m){let r=m?.message||"";if(M===0&&r.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let a=await Aj(X,!0,O);if(a?.ids?.length)D(a.ids);return}console.error("Failed to delete post:",m),alert(`Failed to delete message: ${r}`)}},[j,q$,r4]),D3=x(async()=>{try{let K=await dq();J1(Bj(K));let X=K?.user||{};l_((M)=>{let D=typeof X.name==="string"&&X.name.trim()?X.name.trim():"You",m=typeof X.avatar_url==="string"?X.avatar_url.trim():null,r=typeof X.avatar_background==="string"&&X.avatar_background.trim()?X.avatar_background.trim():null;if(M.name===D&&M.avatar_url===m&&M.avatar_background===r)return M;return{name:D,avatar_url:m,avatar_background:r}});let O=(K?.agents||[]).find((M)=>M.id==="default");I1(O?.name,O?.avatar_url)}catch(K){console.warn("Failed to load agents:",K)}try{let K=j,X=await t5(K);if(w1.current!==K)return;if(X)u0(X)}catch{}},[I1,j]);h(()=>{D3();let K=L$("sidebarWidth",null),X=Number.isFinite(K)?Math.min(Math.max(K,160),600):280;if(o_.current=X,n_.current)n_.current.style.setProperty("--sidebar-width",`${X}px`)},[D3]);let I$=H0||w!==null,A3=x((K)=>{if(!K||typeof K!=="object")return;let X=K.agent_id;if(!X)return;let{agent_name:O,agent_avatar:M}=K;if(!O&&M===void 0)return;let D=d4.current?.[X]||{id:X},m=D.name||null,r=D.avatar_url??D.avatarUrl??D.avatar??null,_0=!1,a=!1;if(O&&O!==D.name)m=O,a=!0;if(M!==void 0){let o=typeof M==="string"?M.trim():null,O0=typeof r==="string"?r.trim():null,R0=o||null;if(R0!==(O0||null))r=R0,_0=!0}if(!a&&!_0)return;if(J1((o)=>{let R0={...o[X]||{id:X}};if(a)R0.name=m;if(_0)R0.avatar_url=r;return{...o,[X]:R0}}),X==="default")I1(m,r,_0?Date.now():null)},[I1]),E3=x((K)=>{if(!K||typeof K!=="object")return;let X=K.user_name??K.userName,O=K.user_avatar??K.userAvatar,M=K.user_avatar_background??K.userAvatarBackground;if(X===void 0&&O===void 0&&M===void 0)return;l_((D)=>{let m=typeof X==="string"&&X.trim()?X.trim():D.name||"You",r=O===void 0?D.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,_0=M===void 0?D.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(D.name===m&&D.avatar_url===r&&D.avatar_background===_0)return D;return{name:m,avatar_url:r,avatar_background:_0}})},[]),Y8=x((K)=>{if(!K||typeof K!=="object")return;let X=K.model??K.current;if(X!==void 0)g1(X);if(K.thinking_level!==void 0)N1(K.thinking_level??null);if(K.supports_thinking!==void 0)T1(Boolean(K.supports_thinking));if(K.provider_usage!==void 0)T0(K.provider_usage??null)},[]),C$=x(()=>{let K=j;kj(K).then((X)=>{if(w1.current!==K)return;if(X)Y8(X)}).catch(()=>{})},[Y8,j]),i1=x(()=>{let K=j,X=(O)=>Array.isArray(O)?O.filter((M)=>M&&typeof M.chat_jid==="string"&&typeof M.agent_name==="string"&&M.agent_name.trim()):[];Promise.all([Ij().catch(()=>({chats:[]})),e5(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,M])=>{if(w1.current!==K)return;let D=X(O?.chats),m=X(M?.chats);if(m.length===0){D0(D);return}let r=new Map(D.map((a)=>[a.chat_jid,a])),_0=m.map((a)=>{let o=r.get(a.chat_jid);return o?{...a,...o,is_active:o.is_active??a.is_active}:a});_0.sort((a,o)=>{if(a.chat_jid===K&&o.chat_jid!==K)return-1;if(o.chat_jid===K&&a.chat_jid!==K)return 1;let O0=Boolean(a.archived_at),R0=Boolean(o.archived_at);if(O0!==R0)return O0?1:-1;if(Boolean(a.is_active)!==Boolean(o.is_active))return a.is_active?-1:1;return String(a.chat_jid).localeCompare(String(o.chat_jid))}),D0(_0)}).catch(()=>{if(w1.current!==K)return;D0([])})},[j]),u1=x(()=>{e5(h1).then((K)=>{let X=Array.isArray(K?.chats)?K.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];a0(X)}).catch(()=>{})},[h1]),M3=x((K)=>{let X=K?.row_id;if(X==null)return;o1.current.add(X),J0((O)=>O.filter((M)=>M?.row_id!==X)),tq(X,W3(j)).then(()=>{Z1()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),E("Failed to steer message","The queued message could not be sent as steering.","warning"),o1.current.delete(X),Z1()})},[j,Z1,J0,E]),k3=x((K)=>{let X=K?.row_id;if(X==null)return;let O=q1.current.filter((M)=>M?.row_id!==X).length;o1.current.add(X),x_(O),J0((M)=>M.filter((D)=>D?.row_id!==X)),eq(X,W3(j)).then(()=>{Z1()}).catch((M)=>{console.warn("[queue] Failed to remove queued item:",M),E("Failed to remove message","The queued message could not be removed.","warning"),o1.current.delete(X),Z1()})},[x_,j,Z1,J0,E]),T$=x((K)=>{if(!K||typeof K!=="object")return;if(i1(),u1(),a1(),U_(),K?.queued==="followup"||K?.queued==="steer"){Z1();return}let X=K?.command;if(X&&typeof X==="object"&&(X?.queued_followup||X?.queued_steer))Z1()},[i1,U_,u1,a1,Z1]),dj=x(async(K,X)=>{let O=typeof K?.key==="string"?K.key:"",M=typeof X?.key==="string"?X.key:"",D=`${O}:${M}`;if(!O||!M)return;P0((m)=>{if(m.has(D))return m;let r=new Set(m);return r.add(D),r});try{if(X?.action_type==="autoresearch.stop"){await oq(j,{generateReport:!0}),U_();return}if(X?.action_type==="autoresearch.dismiss"){await rq(j),U_();return}if(X?.action_type==="autoresearch.copy_tmux"){let m=typeof K?.tmux_command==="string"?K.tmux_command.trim():"";if(!m)throw Error("No tmux command available.");await navigator.clipboard.writeText(m),E("Copied","tmux command copied to clipboard.","success");return}throw Error(`Unsupported panel action: ${X?.action_type||M}`)}catch(m){E("Panel action failed",m?.message||"Could not complete that action.","warning")}finally{P0((m)=>{if(!m.has(D))return m;let r=new Set(m);return r.delete(D),r})}},[j,U_,E]),Q8=x(()=>{if(Y_.current)Y_.current.abort(),Y_.current=null;M0(null)},[]),Q5=x(async(K)=>{let X=String(K||"").trim();if(!X)return E("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y_.current)Y_.current.abort();let O=new AbortController;Y_.current=O,M0({question:X,answer:"",thinking:"",error:null,model:null,status:"running"});try{let M=await _G(X,{signal:O.signal,chatJid:g2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(D,m)=>{if(D==="side_prompt_start")M0((r)=>r?{...r,status:"running"}:r)},onThinkingDelta:(D)=>{M0((m)=>m?{...m,thinking:`${m.thinking||""}${D||""}`}:m)},onTextDelta:(D)=>{M0((m)=>m?{...m,answer:`${m.answer||""}${D||""}`}:m)}});if(Y_.current!==O)return!0;M0((D)=>D?{...D,answer:M?.result||D.answer||"",thinking:M?.thinking||D.thinking||"",model:M?.model||null,status:"success",error:null}:D)}catch(M){if(O.signal.aborted)return!0;M0((D)=>D?{...D,status:"error",error:M?.payload?.error||M?.message||"BTW request failed."}:D)}finally{if(Y_.current===O)Y_.current=null}return!0},[j,E]),nj=x(async({content:K})=>{let X=u2(K);if(!X)return!1;if(X.type==="help")return E("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(X.type==="clear")return Q8(),E("BTW cleared","Closed the side conversation panel.","info"),!0;if(X.type==="ask")return await Q5(X.question),!0;return!1},[Q8,Q5,E]),oj=x(()=>{if(e?.question)Q5(e.question)},[e,Q5]),rj=x(async()=>{let K=c2(e);if(!K)return;try{let X=await a4("default",K,null,[],I$?"queue":null,j);T$(X),E(X?.queued==="followup"?"BTW queued":"BTW injected",X?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(X){E("BTW inject failed",X?.message||"Could not inject BTW answer into chat.","warning")}},[e,T$,I$,E]),I3=x(async(K=null)=>{let[X,O,M,D,m,r,_0]=await Promise.allSettled([U3(j),t5(j),Tj(j),kj(j),Ij(),e5(h1),s4(20,null,j)]),a=X.status==="fulfilled"?X.value:null,o=O.status==="fulfilled"?O.value:null,O0=M.status==="fulfilled"?M.value:null,R0=D.status==="fulfilled"?D.value:null,W1=m.status==="fulfilled"?m.value:null,G1=r.status==="fulfilled"?r.value:null,R_=_0.status==="fulfilled"?_0.value:null,f_=Array.isArray(R_?.posts)?R_.posts:Array.isArray(k$)?k$:[],S3=f_.length?f_[f_.length-1]:null,ZZ=f_.filter((K8)=>K8?.data?.is_bot_message).length,YZ=f_.filter((K8)=>!K8?.data?.is_bot_message).length,x3=Number(O0?.count??q1.current.length??0)||0,w3=Array.isArray(W1?.chats)?W1.chats.length:L0.length,QZ=Array.isArray(G1?.chats)?G1.chats.length:W0.length,R3=Number(o?.percent??f0?.percent??0)||0,NZ=Number(o?.tokens??f0?.tokens??0)||0,qZ=Number(o?.contextWindow??f0?.contextWindow??0)||0,GZ=R0?.current??j1??null,KZ=R0?.thinking_level??M1??null,XZ=R0?.supports_thinking??m0,BZ=a?.status||(H0?"active":"idle"),WZ=a?.data?.type||a?.type||null;return{generatedAt:new Date().toISOString(),request:K,chat:{currentChatJid:j,rootChatJid:h1,activeChats:w3,branches:QZ},agent:{status:BZ,phase:WZ,running:Boolean(H0)},model:{current:GZ,thinkingLevel:KZ,supportsThinking:Boolean(XZ)},context:{tokens:NZ,contextWindow:qZ,percent:R3},queue:{count:x3},timeline:{loadedPosts:f_.length,botPosts:ZZ,userPosts:YZ,latestPostId:S3?.id??null,latestTimestamp:S3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(R3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,x3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,w3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,f_.length*5))}]}},[L0,j1,M1,f0,W0,j,h1,H0,k$,m0]),P$=x(()=>{C$(),i1(),u1(),Z1(),a1(),U_()},[C$,i1,u1,Z1,a1,U_]);h(()=>{P$();let K=setInterval(()=>{C$(),i1(),u1(),Z1()},60000);return()=>clearInterval(K)},[P$,C$,i1,u1,Z1]),h(()=>{u1()},[u1]),h(()=>{w0(new Map),P0(new Set),U_()},[j,U_]),h(()=>{let K=!1,X=()=>{if(K)return;requestAnimationFrame(()=>{if(K)return;Q4()})};if(A)return s_(A),()=>{K=!0};if(y)return Dj(y,50,0,j,P,h1).then((O)=>{if(K)return;l1(O.results),Z5(!1)}).catch((O)=>{if(K)return;console.error("Failed to search:",O),l1([]),Z5(!1)}),()=>{K=!0};return s_().then(()=>{X()}).catch((O)=>{if(K)return;console.error("Failed to load timeline:",O)}),()=>{K=!0}},[j,A,y,P,h1,s_,Q4,Z5,l1]),h(()=>{let K=i_.current||j;E4.current.set(K,x4())},[j,x4]),h(()=>{let K=i_.current||j;if(K===j)return;E4.current.set(K,x4()),i_.current=j,o1.current.clear(),$5(E4.current.get(j)||null),Z1(),w_(),a1()},[j,w_,a1,Z1,$5,x4]);let sj=x(()=>{let{currentHashtag:K,searchQuery:X,searchOpen:O}=m1.current||{};if(!K&&!X&&!O)s1();P$()},[P$,s1]),y$=x((K,X="streaming")=>{let O=o2({...K,...K&&K.status?{}:{status:X}});if(!O)return;let M=d1(O);if(M&&P1.current.has(M))return;d0((D)=>{let m=d1(D),r=Boolean(M&&m&&M===m),_0={...r&&D?.artifact?D.artifact:{},...O.artifact||{}};return{...r&&D?D:{},...O,artifact:_0,source:"live",originChatJid:O.originChatJid||j,openedAt:r&&D?.openedAt?D.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),N8=x((K,X)=>{let O=X?.turn_id,M=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null,m=M?M===j:K==="connected"||K==="workspace_update";if(m)A3(X),E3(X);if(K==="ui_theme"){S2(X);return}if(K==="generated_widget_open"){if(!m)return;if(O&&!z0.current)V_(O);y$(X,"loading");return}if(K==="generated_widget_delta"){if(!m)return;if(O&&!z0.current)V_(O);y$(X,"streaming");return}if(K==="generated_widget_final"){if(!m)return;if(O&&!z0.current)V_(O);y$(X,"final");return}if(K==="generated_widget_error"){if(!m)return;y$(X,"error");return}if(K==="generated_widget_close"){if(!m)return;let o=d1(X);d0((O0)=>{if(!O0||O0?.source!=="live")return O0;let R0=d1(O0);if(o&&R0&&o!==R0)return O0;return null});return}if(K?.startsWith("agent_")){if(!(K==="agent_draft_delta"||K==="agent_thought_delta"||K==="agent_draft"||K==="agent_thought"))V4()}if(K==="connected"){p(null),l({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),F0(null),c0.current=null,r_();let o=j;U3(o).then((G1)=>{if(w1.current!==o)return;if(!G1||G1.status!=="active"||!G1.data)return;let R_=G1.data,f_=R_.turn_id||R_.turnId;if(f_)V_(f_);if(W_({clearSilence:!0}),L4(R_),G1.thought&&G1.thought.text)s0.current=G1.thought.text,K0({text:G1.thought.text,totalLines:G1.thought.totalLines||0});if(G1.draft&&G1.draft.text)b0.current=G1.draft.text,l({text:G1.draft.text,totalLines:G1.draft.totalLines||0})}).catch((G1)=>{console.warn("Failed to fetch agent status:",G1)});let{currentHashtag:O0,searchQuery:R0,searchOpen:W1}=m1.current||{};if(!O0&&!R0&&!W1)s1();P$();return}if(K==="agent_status"){if(!m){if(X?.type==="done"||X?.type==="error")i1(),u1();return}if(X.type==="done"||X.type==="error"){if(O&&z0.current&&O!==z0.current)return;if(X.type==="done"){j5(O||z0.current);let{currentHashtag:o,searchQuery:O0,searchOpen:R0}=m1.current||{};if(!o&&!O0&&!R0)s1();if(X.context_usage)u0(X.context_usage)}if(a1(),X_.current=!1,r_(),o1.current.clear(),i1(),Z1(),l({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),F0(null),X.type==="error")p({type:"error",title:X.title||"Agent error"}),setTimeout(()=>p(null),8000);else p(null)}else{if(O)V_(O);if(W_({running:!0,clearSilence:!0}),X.type==="thinking")b0.current="",s0.current="",l({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0});P_.current=X,p((o)=>{if(o&&o.type===X.type&&o.title===X.title)return o;return X})}return}if(K==="agent_steer_queued"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;let o=O||z0.current;if(!o)return;h0.current=o,x0(o);return}if(K==="agent_followup_queued"){if(!m)return;let o=X?.row_id,O0=X?.content;if(o!=null&&typeof O0==="string"&&O0.trim())J0((R0)=>{if(R0.some((W1)=>W1?.row_id===o))return R0;return[...R0,{row_id:o,content:O0,timestamp:X?.timestamp||null,thread_id:X?.thread_id??null}]});Z1();return}if(K==="agent_followup_consumed"){if(!m)return;let o=X?.row_id;if(o!=null){let G1=q1.current.filter((R_)=>R_.row_id!==o).length;x_(G1),J0((R_)=>R_.filter((f_)=>f_.row_id!==o))}Z1();let{currentHashtag:O0,searchQuery:R0,searchOpen:W1}=m1.current||{};if(!O0&&!R0&&!W1)s1();return}if(K==="agent_followup_removed"){if(!m)return;let o=X?.row_id;if(o!=null){let O0=q1.current.filter((R0)=>R0.row_id!==o).length;o1.current.add(o),x_(O0),J0((R0)=>R0.filter((W1)=>W1.row_id!==o))}Z1();return}if(K==="agent_draft_delta"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)V_(O);if(W_({running:!0,clearSilence:!0}),X?.reset)b0.current="";if(X?.delta)b0.current+=X.delta;let o=Date.now();if(!M4.current||o-M4.current>=100){M4.current=o;let O0=b0.current,R0=B3(O0);if(K1.current)l((W1)=>({text:W1?.text||"",totalLines:R0,fullText:O0}));else l({text:O0,totalLines:R0})}return}if(K==="agent_draft"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)V_(O);W_({running:!0,clearSilence:!0});let o=X.text||"",O0=X.mode||(X.kind==="plan"?"replace":"append"),R0=Number.isFinite(X.total_lines)?X.total_lines:o?o.replace(/\r\n/g,`
`).split(`
`).length:0;if(X.kind==="plan")if(O0==="replace")j0(o);else j0((W1)=>(W1||"")+o);else if(!K1.current)b0.current=o,l({text:o,totalLines:R0});return}if(K==="agent_thought_delta"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)V_(O);if(W_({running:!0,clearSilence:!0}),X?.reset)s0.current="";if(typeof X?.delta==="string")s0.current+=X.delta;let o=Date.now();if(Q1.current&&(!k4.current||o-k4.current>=100)){k4.current=o;let O0=s0.current;K0((R0)=>({text:R0?.text||"",totalLines:B3(O0),fullText:O0}))}return}if(K==="agent_thought"){if(!m)return;if(O&&z0.current&&O!==z0.current)return;if(O&&!z0.current)V_(O);W_({running:!0,clearSilence:!0});let o=X.text||"",O0=Number.isFinite(X.total_lines)?X.total_lines:o?o.replace(/\r\n/g,`
`).split(`
`).length:0;if(!Q1.current)s0.current=o,K0({text:o,totalLines:O0});return}if(K==="model_changed"){if(!m)return;if(X?.model!==void 0)g1(X.model);if(X?.thinking_level!==void 0)N1(X.thinking_level??null);if(X?.supports_thinking!==void 0)T1(Boolean(X.supports_thinking));let o=j;t5(o).then((O0)=>{if(w1.current!==o)return;if(O0)u0(O0)}).catch(()=>{});return}if(K==="extension_ui_widget"&&X?.options?.surface==="status-panel"){if((typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():j)!==j)return;let O0=typeof X?.key==="string"?X.key:"",R0=Array.isArray(X?.content)?X.content.find((W1)=>W1?.type==="status_panel"&&W1?.panel):null;if(!O0)return;if(w0((W1)=>{let G1=new Map(W1);if(X?.options?.remove||!R0?.panel)G1.delete(O0);else G1.set(O0,R0.panel);return G1}),X?.options?.remove||R0?.panel?.state!=="running")P0((W1)=>{if(W1.size===0)return W1;let G1=new Set(Array.from(W1).filter((R_)=>!String(R_).startsWith(`${O0}:`)));return G1.size===W1.size?W1:G1});V3(K,X);return}if(K==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:X}));N$(X?.updates);return}if(Hj(K)){if(!m)return;if(V3(K,X),K==="extension_ui_notify"&&typeof X?.message==="string")E(X.message,null,X?.type||"info");if(K==="extension_ui_error"&&typeof X?.error==="string")E("Extension UI error",X.error,"error",5000);return}let{currentHashtag:r,searchQuery:_0,searchOpen:a}=m1.current;if(K==="agent_response"){if(!m)return;Y5(),y_.current={post:X,turnId:z0.current}}if(!r&&!_0&&!a&&m&&(K==="new_post"||K==="new_reply"||K==="agent_response"))l1((o)=>{if(!o)return[X];if(o.some((O0)=>O0.id===X.id))return o;return[...o,X]}),L_.current?.();if(K==="interaction_updated"){if(!m)return;if(r||_0||a)return;l1((o)=>{if(!o)return o;if(!o.some((O0)=>O0.id===X.id))return o;return o.map((O0)=>O0.id===X.id?X:O0)})}if(K==="interaction_deleted"){if(!m)return;if(r||_0||a)return;let o=X?.ids||[];if(o.length){if(r4(()=>{l1((O0)=>O0?O0.filter((R0)=>!o.includes(R0.id)):O0)}),O3.current)$8.current?.({preserveScroll:!0,preserveMode:"top"})}}},[y$,r_,V4,j,$8,W_,j5,r4,i1,u1,s1,Y5,V_,L4,A3,E3,C$,Z1,J0,a1]);h(()=>{if(typeof window>"u")return;let K=window.__PICLAW_TEST_API||{};return K.emit=N8,K.reset=()=>{Y5(),r_(),p(null),l({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),F0(null)},K.finalize=()=>J3(),window.__PICLAW_TEST_API=K,()=>{if(window.__PICLAW_TEST_API===K)window.__PICLAW_TEST_API=void 0}},[r_,J3,N8,Y5]),Zj({handleSseEvent:N8,handleConnectionStatusChange:uj,loadPosts:s_,onWake:sj,chatJid:j}),h(()=>{if(!q$||q$.length===0)return;let K=location.hash;if(!K||!K.startsWith("#msg-"))return;let X=K.slice(5);U1(X),history.replaceState(null,"",location.pathname+location.search)},[q$,U1]);let q8=w!==null;h(()=>{if(G!=="connected")return;let X=setInterval(()=>{let{currentHashtag:O,searchQuery:M,searchOpen:D}=m1.current||{},m=!O&&!M&&!D;if(q8){if(m)s1();Z1(),w_(),a1(),U_()}else{if(m)s1();w_(),a1(),U_()}},q8?15000:60000);return()=>clearInterval(X)},[G,q8,w_,U_,a1,Z1,s1]),h(()=>{return Jj(()=>{w_(),a1(),Z1(),U_()})},[w_,U_,a1,Z1]);let aj=x(()=>{u_((K)=>!K)},[]),C3=x((K)=>{if(typeof window>"u")return;let X=String(K||"").trim();if(!X||X===j)return;let O=$$(window.location.href,X,{chatOnly:Z});$?.(O)},[Z,j,$]),G8=x(()=>{if(typeof window>"u"||!_1?.chat_jid)return;let K=Date.now(),X=L3();if(!X)return;if(S_.current||K<u.current||X.inFlight||K<X.cooldownUntil)return;V0(_1.agent_name||""),n(!0)},[_1]),S$=x(()=>{n(!1),V0("")},[]),T3=x(async(K)=>{if(typeof window>"u"||!_1?.chat_jid)return;if(typeof K!=="string"){G8();return}let X=Date.now(),O=L3();if(!O)return;if(S_.current||X<u.current||O.inFlight||X<O.cooldownUntil)return;S_.current=!0,O.inFlight=!0,C(!0);try{let M=_1.agent_name||"",D=o8(K,M);if(!D.canSubmit){E("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000);return}let m=D.normalized||M,r=await sq(_1.chat_jid,{agentName:m});await Promise.allSettled([i1(),u1()]);let _0=r?.branch?.agent_name||m||M;E("Branch renamed",`@${_0}`,"info",3500),S$()}catch(M){let D=M instanceof Error?M.message:String(M||"Could not rename branch."),m=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;E("Could not rename branch",m||"Could not rename branch.","warning",5000)}finally{S_.current=!1,C(!1);let M=Date.now()+pq;u.current=M;let D=L3();if(D)D.inFlight=!1,D.cooldownUntil=M}},[S$,_1,i1,u1,G8,C,E]),P3=x(async(K=null)=>{if(typeof window>"u")return;let X=typeof K==="string"&&K.trim()?K.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",M=X||_1?.chat_jid||O;if(!M){E("Could not prune branch","No active session is selected yet.","warning",4000);return}let D=(_1?.chat_jid===M?_1:null)||W0.find((a)=>a?.chat_jid===M)||L0.find((a)=>a?.chat_jid===M)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid)){E("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let r=`@${D?.agent_name||M}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!window.confirm(`Prune ${r}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await aq(M),await Promise.allSettled([i1(),u1()]);let a=D?.root_chat_jid||"web:default";E("Branch pruned",`${r} has been archived.`,"info",3000);let o=$$(window.location.href,a,{chatOnly:Z});$?.(o)}catch(a){let o=a instanceof Error?a.message:String(a||"Could not prune branch.");E("Could not prune branch",o||"Could not prune branch.","warning",5000)}},[L0,Z,_1,W0,j,$,i1,u1,E]),tj=x(async(K)=>{let X=typeof K==="string"?K.trim():"";if(!X||typeof Cj!=="function")return;try{let O=W0.find((a)=>a?.chat_jid===X)||null,M=await Cj(X);await Promise.allSettled([i1(),u1()]);let D=M?.branch,m=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():X,r=z2(O?.agent_name,D?.agent_name,m);E("Branch restored",r,"info",4200);let _0=$$(window.location.href,m,{chatOnly:Z});$?.(_0)}catch(O){let M=O instanceof Error?O.message:String(O||"Could not restore branch.");E("Could not restore branch",M||"Could not restore branch.","warning",5000)}},[Z,W0,$,i1,u1,E]);h(()=>{if(!q||typeof window>"u")return;let K=!1;return(async()=>{try{n1({status:"running",message:"Preparing a new chat branch…"});let X=await w$(B);if(K)return;let O=X?.branch,M=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");let D=$$(window.location.href,M,{chatOnly:!0});$?.(D,{replace:!0})}catch(X){if(K)return;n1({status:"error",message:c5(X)})}})(),()=>{K=!0}},[q,B,$]);let ej=x((K)=>{if(!K||typeof K!=="object")return;let X=d1(K);if(X)P1.current.delete(X);d0({...K,openedAt:new Date().toISOString()})},[]),x$=x(()=>{d0((K)=>{let X=d1(K);if(K?.source==="live"&&X)P1.current.add(X);return null})},[]),_Z=x((K,X)=>{let O=typeof K?.kind==="string"?K.kind:"",M=d1(X);if(!O||!M)return;if(O==="widget.close"){x$();return}if(O==="widget.submit"){let D=t2(K?.payload),m=e2(K?.payload),r=new Date().toISOString();if(d0((_0)=>{let a=d1(_0);if(!_0||a!==M)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:K?.payload||null,lastSubmitAt:r,lastHostUpdate:{type:"submit_pending",submittedAt:r,preview:D||null}}}}),!D){if(E("Widget submission received","The widget submitted data without a message payload yet.","info",3500),m)x$();return}(async()=>{try{let _0=await a4("default",D,null,[],I$?"queue":null,j);if(T$(_0),d0((a)=>{let o=d1(a);if(!a||o!==M)return a;return{...a,runtimeState:{...a.runtimeState||{},lastHostUpdate:{type:_0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:r,preview:D,queued:_0?.queued||null}}}}),E(_0?.queued==="followup"?"Widget submission queued":"Widget submission sent",_0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),m)x$()}catch(_0){d0((a)=>{let o=d1(a);if(!a||o!==M)return a;return{...a,runtimeState:{...a.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:r,preview:D,error:_0?.message||"Could not send the widget message."}}}}),E("Widget submission failed",_0?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let D=new Date().toISOString(),m=Boolean(K?.payload?.buildDashboard||K?.payload?.dashboardKind==="internal-state"),r=Number(X?.runtimeState?.refreshCount||0)+1;if(d0((_0)=>{let a=d1(_0);if(!_0||a!==M)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:K?.payload||null,...O==="widget.ready"?{readyAt:D,lastHostUpdate:{type:"ready_ack",at:D}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:D,refreshCount:r,lastHostUpdate:{type:m?"refresh_building":"refresh_ack",at:D,count:r,echo:K?.payload||null}}:{}}}}),O==="widget.request_refresh")if(m)(async()=>{try{let _0=await I3(K?.payload||null);d0((a)=>{let o=d1(a);if(!a||o!==M)return a;return{...a,runtimeState:{...a.runtimeState||{},dashboard:_0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:r,echo:K?.payload||null}}}}),E("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(_0){d0((a)=>{let o=d1(a);if(!a||o!==M)return a;return{...a,runtimeState:{...a.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:r,error:_0?.message||"Could not build dashboard."}}}}),E("Dashboard build failed",_0?.message||"Could not build dashboard.","warning",5000)}})();else E("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[I3,j,x$,T$,I$,E]);h(()=>{P1.current.clear(),d0(null)},[j]);let $Z=x(async()=>{if(typeof window>"u")return;try{let X=(await w$(j))?.branch,O=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([i1(),u1()]);let M=X?.agent_name?`@${X.agent_name}`:O;E("New branch created",`Switched to ${M}.`,"info",2500);let D=$$(window.location.href,O,{chatOnly:Z});$?.(D)}catch(K){E("Could not create branch",c5(K),"warning",5000)}},[Z,j,$,i1,u1,E]),N5=x((K,X)=>{if(typeof window>"u"||W)return;let O=typeof K==="string"&&K.trim()?K.trim():"";if(!O)return;let M=()=>{let _0=$1.get(O);if(!_0||_0.dirty)return;_4(O)},D=S7(O);if(!D){E("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let m=y7(window.location.href,O,{label:typeof X==="string"&&X.trim()?X.trim():void 0,chatJid:j});if(D.mode==="tab"){if(!window.open(m,D.target)){E("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}M();return}let r=F6(D);if(!r){E("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}H6(r,{title:typeof X==="string"&&X.trim()?`Opening ${X}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."}),O6(r,m),M()},[j,_4,W,E]);h(()=>{let K=(O)=>{let M=O.detail?.path,D=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(M)__(M,D?{label:D}:void 0)},X=(O)=>{let M=O.detail?.path,D=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(M)N5(M,D)};return document.addEventListener("office-viewer:open-tab",K),document.addEventListener("drawio:open-tab",K),document.addEventListener("csv-viewer:open-tab",K),document.addEventListener("pdf-viewer:open-tab",K),document.addEventListener("image-viewer:open-tab",K),document.addEventListener("video-viewer:open-tab",K),document.addEventListener("vnc:open-tab",K),document.addEventListener("pane:popout",X),()=>{document.removeEventListener("office-viewer:open-tab",K),document.removeEventListener("drawio:open-tab",K),document.removeEventListener("csv-viewer:open-tab",K),document.removeEventListener("pdf-viewer:open-tab",K),document.removeEventListener("image-viewer:open-tab",K),document.removeEventListener("video-viewer:open-tab",K),document.removeEventListener("vnc:open-tab",K),document.removeEventListener("pane:popout",X)}},[N5,__]);let jZ=x(async()=>{if(typeof window>"u"||W)return;let K=C7(j);if(!K){E("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(K.mode==="tab"){let O=P7(window.location.href,j,{chatOnly:!0});if(!window.open(O,K.target))E("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let X=F6(K);if(!X){E("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}H6(X,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await w$(j))?.branch,D=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");try{let r=await C8();D0(Array.isArray(r?.chats)?r.chats:[])}catch{}try{let r=await e5(h1);a0(Array.isArray(r?.chats)?r.chats:[])}catch{}let m=$$(window.location.href,D,{chatOnly:!0});O6(X,m)}catch(O){T7(X),E("Could not open branch window",c5(O),"error",5000)}},[j,h1,W,E]);h(()=>{if(!V1)return;if(typeof window>"u")return;let K=n_.current;if(!K)return;if(!I4.current){let X=L$("editorWidth",null),O=o_.current||280;I4.current=Number.isFinite(X)?X:O}if(K.style.setProperty("--editor-width",`${I4.current}px`),!C4.current){let X=L$("dockHeight",null);C4.current=Number.isFinite(X)?X:200}K.style.setProperty("--dock-height",`${C4.current}px`)},[V1]),h(()=>{if(!$_||Z)return;let K=(X)=>{if(X.ctrlKey&&X.key==="`")X.preventDefault(),b1()};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[b1,$_,Z]),h(()=>{if(Z)return;let K=(X)=>{if(X.ctrlKey&&X.shiftKey&&(X.key==="Z"||X.key==="z")){X.preventDefault(),i4();return}if(X.key==="Escape"&&A1)X.preventDefault(),T_()};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[i4,T_,A1,Z]);let y3=Boolean(n0&&n0===(w?.turn_id||A0));if(q)return U`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${F_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${F_.message}</p>
                    </div>
                </div>
            </div>
        `;if(Y)return U`
            <div class=${`app-shell pane-popout${V1?" editor-open":""}`} ref=${n_}>
                <div class="editor-pane-container pane-popout-container">
                    ${V1&&!C_&&U`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${Z_?U`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${Z4}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${e1.length>1&&U`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${e1.map((K)=>U`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${K.id===l0?" active":""}`}
                                                                onClick=${(X)=>{p4(K.id),X.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${K.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${l0&&k1.has(l0)&&U`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(K)=>{h_(l0),K.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:U`
                                    <div class="pane-popout-controls-label" aria-label=${Z4}>${Z4}</div>
                                `}
                        </div>
                    `}
                    ${V1?U`<div class="editor-pane-host" ref=${L1}></div>`:U`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Q||"No pane path provided."}</p>
                        </div>`}
                    ${V1&&l0&&k1.has(l0)&&U`
                        <${q3}
                            getContent=${()=>v1.current?.getContent?.()}
                            path=${l0}
                            onClose=${()=>h_(l0)}
                        />
                    `}
                </div>
            </div>
        `;return U`
        <div class=${`app-shell${B1?"":" workspace-collapsed"}${V1?" editor-open":""}${Z?" chat-only":""}${A1?" zen-mode":""}`} ref=${n_}>
            ${v&&U`
                <div class="rename-branch-overlay" onPointerDown=${(K)=>{if(K.target===K.currentTarget)S$()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(K)=>{K.preventDefault(),T3(G0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${Z0}
                            value=${G0}
                            onInput=${(K)=>{let X=K.currentTarget?.value??"";V0(String(X))}}
                            onKeyDown=${(K)=>{if(K.key==="Escape")K.preventDefault(),S$()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${U0.kind||"info"}`}>
                            ${U0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${F||!U0.canSubmit}>
                                ${F?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${S$}
                                disabled=${F}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Z&&U`
                <${t9}
                    onFileSelect=${B_}
                    visible=${B1}
                    active=${B1||V1}
                    onOpenEditor=${__}
                    onOpenTerminalTab=${H1}
                    onOpenVncTab=${M_}
                    onToggleTerminal=${$_?b1:void 0}
                    terminalVisible=${Boolean($_&&j_)}
                />
                <button
                    class=${`workspace-toggle-tab${B1?" open":" closed"}`}
                    onClick=${aj}
                    title=${B1?"Hide workspace":"Show workspace"}
                    aria-label=${B1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${wj} onTouchStart=${Rj}></div>
            `}
            ${B4&&U`
                <div class="editor-pane-container">
                    ${A1&&U`<div class="zen-hover-zone"></div>`}
                    ${V1&&U`
                        <${$j}
                            tabs=${e1}
                            activeId=${l0}
                            onActivate=${p4}
                            onClose=${_4}
                            onCloseOthers=${$4}
                            onCloseAll=${Y$}
                            onTogglePin=${j4}
                            onTogglePreview=${h_}
                            onEditSource=${E$}
                            previewTabs=${k1}
                            paneOverrides=${E_}
                            onToggleDock=${$_?b1:void 0}
                            dockVisible=${$_&&j_}
                            onToggleZen=${i4}
                            zenMode=${A1}
                            onPopOutTab=${W?void 0:N5}
                        />
                    `}
                    ${V1&&U`<div class="editor-pane-host" ref=${L1}></div>`}
                    ${V1&&l0&&k1.has(l0)&&U`
                        <${q3}
                            getContent=${()=>v1.current?.getContent?.()}
                            path=${l0}
                            onClose=${()=>h_(l0)}
                        />
                    `}
                    ${$_&&j_&&U`<div class="dock-splitter" onMouseDown=${bj} onTouchStart=${mj}></div>`}
                    ${$_&&U`<div class=${`dock-panel${j_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!W&&U`
                                    <button class="dock-panel-action" onClick=${()=>N5(i$,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
                        <div class="dock-panel-body" ref=${Q$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${fj} onTouchStart=${vj}></div>
            `}
            <div class="container">
                ${y&&Wj()&&U`<div class="search-results-spacer"></div>`}
                ${Z&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${_1?.agent_name?`@${_1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${_1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${W0.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(K)=>C3(K.currentTarget.value)}
                                    >
                                        ${W0.map((K)=>U`
                                            <option key=${K.chat_jid} value=${K.chat_jid}>
                                                ${I5(K,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${_1?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${G8}
                                    title=${F?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${F}
                                >
                                    ${F?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${_1?.chat_jid&&_1.chat_jid!==(_1.root_chat_jid||_1.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${P3}
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
                ${(A||y)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${hj}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${A?`#${A}`:`Search: ${y} · ${K4}`}</span>
                    </div>
                `}
                <${A7}
                    posts=${q$}
                    hasMore=${Z8?Sj:!1}
                    onLoadMore=${Z8?xj:void 0}
                    timelineRef=${d_}
                    onHashtagClick=${gj}
                    onMessageRef=${y0}
                    onScrollToMessage=${U1}
                    onFileRef=${d}
                    onPostClick=${void 0}
                    onDeletePost=${ij}
                    onOpenWidget=${ej}
                    emptyMessage=${A?`No posts with #${A}`:y?`No results for "${y}"`:void 0}
                    agents=${G_}
                    user=${c_}
                    reverse=${Z8}
                    removingPostIds=${S1}
                    searchQuery=${y}
                />
                <${Y6}
                    status=${z4(w)?null:w}
                    draft=${N0}
                    plan=${Q0}
                    thought=${q0}
                    pendingRequest=${X0}
                    intent=${R}
                    turnId=${A0}
                    steerQueued=${y3}
                    onPanelToggle=${w4}
                    showExtensionPanels=${!1}
                />
                <${l2}
                    session=${e}
                    onClose=${Q8}
                    onRetry=${oj}
                    onInject=${rj}
                />
                <${j7}
                    widget=${v0}
                    onClose=${x$}
                    onWidgetEvent=${_Z}
                />
                <${Y6}
                    extensionPanels=${Array.from(g0.values())}
                    pendingPanelActions=${e0}
                    onExtensionPanelAction=${dj}
                    turnId=${A0}
                    steerQueued=${y3}
                    onPanelToggle=${w4}
                    showCorePanels=${!1}
                />
                <${r8}
                    items=${J?[]:B0}
                    onInjectQueuedFollowup=${M3}
                    onRemoveQueuedFollowup=${k3}
                    onOpenFilePill=${d}
                />
                <${H2}
                    onPost=${()=>{let{searchQuery:K,searchOpen:X}=m1.current||{};if(!K&&!X)s_(),Q4()}}
                    onFocus=${Q4}
                    searchMode=${J}
                    searchScope=${P}
                    onSearch=${pj}
                    onSearchScopeChange=${i}
                    onEnterSearch=${cj}
                    onExitSearch=${lj}
                    fileRefs=${c}
                    onRemoveFileRef=${Q_}
                    onClearFileRefs=${_8}
                    onSetFileRefs=${z}
                    messageRefs=${$0}
                    onRemoveMessageRef=${C1}
                    onClearMessageRefs=${p1}
                    onSetMessageRefs=${W4}
                    onSwitchChat=${C3}
                    onRenameSession=${T3}
                    isRenameSessionInProgress=${F}
                    onCreateSession=${$Z}
                    onDeleteSession=${P3}
                    onRestoreSession=${tj}
                    activeEditorPath=${Z?null:l0}
                    onAttachEditorFile=${Z?void 0:Y0}
                    onOpenFilePill=${d}
                    followupQueueCount=${H_}
                    followupQueueItems=${B0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${M3}
                    onRemoveQueuedFollowup=${k3}
                    onSubmitIntercept=${nj}
                    onMessageResponse=${T$}
                    onSubmitError=${o4}
                    onPopOutChat=${W?void 0:jZ}
                    isAgentActive=${I$}
                    activeChatAgents=${L0}
                    currentChatJid=${j}
                    connectionStatus=${G}
                    activeModel=${j1}
                    modelUsage=${s}
                    thinkingLevel=${M1}
                    supportsThinking=${m0}
                    contextUsage=${f0}
                    notificationsEnabled=${Z$}
                    notificationPermission=${g4}
                    onToggleNotifications=${f1}
                    onModelChange=${g1}
                    onModelStateChange=${Y8}
                    statusNotice=${z4(w)?w:null}
                />
                <${q7}
                    request=${X0}
                    onRespond=${()=>{F0(null),c0.current=null}}
                />
            </div>
        </div>
    `}function jG(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);h(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=x((Y,Q={})=>{if(typeof window>"u")return;let{replace:N=!1}=Q||{},q=new URL(String(Y||""),window.location.href).toString();if(N)window.history.replaceState(null,"",q);else window.history.pushState(null,"",q);$(window.location.href)},[]),Z=k0(()=>new URL(_).searchParams,[_]);return U`<${$G} locationParams=${Z} navigate=${j} />`}F5(U`<${jG} />`,document.getElementById("app"));

//# debugId=A250CC74B6E14C2464756E2164756E21
//# sourceMappingURL=app.bundle.js.map
