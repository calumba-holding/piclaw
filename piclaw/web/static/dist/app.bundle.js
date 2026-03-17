var O9=Object.defineProperty;var B9=(_)=>_;function L9(_,$){this[_]=B9.bind(null,$)}var Q9=(_,$)=>{for(var j in $)O9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:L9.bind($,j)})};var U9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var l2,t_,q3,F9,p$,e1,O3,B3,L3,A4,E4,y4,J9,c2={},h2=[],H9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,n2=Array.isArray;function S$(_,$){for(var j in $)_[j]=$[j];return _}function P4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function Q3(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?l2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return m2(_,z,Z,N,null)}function m2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++q3:N,__i:-1,__u:0};return N==null&&t_.vnode!=null&&t_.vnode(K),K}function d2(_){return _.children}function g2(_,$){this.props=_,this.context=$}function z2(_,$){if($==null)return _.__?z2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?z2(_):null}function D9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=S$({},$);K.__v=$.__v+1,t_.vnode&&t_.vnode(K),M4(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?z2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,H3(Z,K,N),$.__e=$.__=null,K.__e!=j&&U3(K)}}function U3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),U3(_)}function _3(_){(!_.__d&&(_.__d=!0)&&p$.push(_)&&!i2.__r++||e1!=t_.debounceRendering)&&((e1=t_.debounceRendering)||O3)(i2)}function i2(){try{for(var _,$=1;p$.length;)p$.length>$&&p$.sort(B3),_=p$.shift(),$=p$.length,D9(_)}finally{p$.length=i2.__r=0}}function F3(_,$,j,Z,N,K,z,V,q,X,B){var Y,U,C,m,v,R,E,F=Z&&Z.__k||h2,x=$.length;for(q=E9(j,$,F,q,x),Y=0;Y<x;Y++)(C=j.__k[Y])!=null&&(U=C.__i!=-1&&F[C.__i]||c2,C.__i=Y,R=M4(_,C,U,N,K,z,V,q,X,B),m=C.__e,C.ref&&U.ref!=C.ref&&(U.ref&&C4(U.ref,null,C),B.push(C.ref,C.__c||m,C)),v==null&&m!=null&&(v=m),(E=!!(4&C.__u))||U.__k===C.__k?q=J3(C,q,_,E):typeof C.type=="function"&&R!==void 0?q=R:m&&(q=m.nextSibling),C.__u&=-7);return j.__e=v,q}function E9(_,$,j,Z,N){var K,z,V,q,X,B=j.length,Y=B,U=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=m2(null,z,null,null,null):n2(z)?z=_.__k[K]=m2(d2,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=m2(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,q=K+U,z.__=_,z.__b=_.__b+1,V=null,(X=z.__i=y9(z,j,q,Y))!=-1&&(Y--,(V=j[X])&&(V.__u|=2)),V==null||V.__v==null?(X==-1&&(N>B?U--:N<B&&U++),typeof z.type!="function"&&(z.__u|=4)):X!=q&&(X==q-1?U--:X==q+1?U++:(X>q?U--:U++,z.__u|=4))):_.__k[K]=null;if(Y)for(K=0;K<B;K++)(V=j[K])!=null&&(2&V.__u)==0&&(V.__e==Z&&(Z=z2(V)),E3(V,V));return Z}function J3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=J3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=z2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function y9(_,$,j,Z){var N,K,z,V=_.key,q=_.type,X=$[j],B=X!=null&&(2&X.__u)==0;if(X===null&&V==null||B&&V==X.key&&q==X.type)return j;if(Z>(B?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((X=$[z=N>=0?N--:K++])!=null&&(2&X.__u)==0&&V==X.key&&q==X.type)return z}return-1}function $3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||H9.test($)?j:j+"px"}function u2(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||$3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||$3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(L3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=A4,_.addEventListener($,K?y4:E4,K)):_.removeEventListener($,K?y4:E4,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(V){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function j3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=A4++;else if($.t<j.u)return;return j(t_.event?t_.event($):$)}}}function M4(_,$,j,Z,N,K,z,V,q,X){var B,Y,U,C,m,v,R,E,F,x,M,i,t,N_,l,K_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),K=[V=$.__e=j.__e]),(B=t_.__b)&&B($);_:if(typeof K_=="function")try{if(E=$.props,F=K_.prototype&&K_.prototype.render,x=(B=K_.contextType)&&Z[B.__c],M=B?x?x.props.value:B.__:Z,j.__c?R=(Y=$.__c=j.__c).__=Y.__E:(F?$.__c=Y=new K_(E,M):($.__c=Y=new g2(E,M),Y.constructor=K_,Y.render=w9),x&&x.sub(Y),Y.state||(Y.state={}),Y.__n=Z,U=Y.__d=!0,Y.__h=[],Y._sb=[]),F&&Y.__s==null&&(Y.__s=Y.state),F&&K_.getDerivedStateFromProps!=null&&(Y.__s==Y.state&&(Y.__s=S$({},Y.__s)),S$(Y.__s,K_.getDerivedStateFromProps(E,Y.__s))),C=Y.props,m=Y.state,Y.__v=$,U)F&&K_.getDerivedStateFromProps==null&&Y.componentWillMount!=null&&Y.componentWillMount(),F&&Y.componentDidMount!=null&&Y.__h.push(Y.componentDidMount);else{if(F&&K_.getDerivedStateFromProps==null&&E!==C&&Y.componentWillReceiveProps!=null&&Y.componentWillReceiveProps(E,M),$.__v==j.__v||!Y.__e&&Y.shouldComponentUpdate!=null&&Y.shouldComponentUpdate(E,Y.__s,M)===!1){$.__v!=j.__v&&(Y.props=E,Y.state=Y.__s,Y.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(h){h&&(h.__=$)}),h2.push.apply(Y.__h,Y._sb),Y._sb=[],Y.__h.length&&z.push(Y);break _}Y.componentWillUpdate!=null&&Y.componentWillUpdate(E,Y.__s,M),F&&Y.componentDidUpdate!=null&&Y.__h.push(function(){Y.componentDidUpdate(C,m,v)})}if(Y.context=M,Y.props=E,Y.__P=_,Y.__e=!1,i=t_.__r,t=0,F)Y.state=Y.__s,Y.__d=!1,i&&i($),B=Y.render(Y.props,Y.state,Y.context),h2.push.apply(Y.__h,Y._sb),Y._sb=[];else do Y.__d=!1,i&&i($),B=Y.render(Y.props,Y.state,Y.context),Y.state=Y.__s;while(Y.__d&&++t<25);Y.state=Y.__s,Y.getChildContext!=null&&(Z=S$(S$({},Z),Y.getChildContext())),F&&!U&&Y.getSnapshotBeforeUpdate!=null&&(v=Y.getSnapshotBeforeUpdate(C,m)),N_=B!=null&&B.type===d2&&B.key==null?D3(B.props.children):B,V=F3(_,n2(N_)?N_:[N_],$,j,Z,N,K,z,V,q,X),Y.base=$.__e,$.__u&=-161,Y.__h.length&&z.push(Y),R&&(Y.__E=Y.__=null)}catch(h){if($.__v=null,q||K!=null)if(h.then){for($.__u|=q?160:128;V&&V.nodeType==8&&V.nextSibling;)V=V.nextSibling;K[K.indexOf(V)]=null,$.__e=V}else{for(l=K.length;l--;)P4(K[l]);k4($)}else $.__e=j.__e,$.__k=j.__k,h.then||k4($);t_.__e(h,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):V=$.__e=k9(j.__e,$,j,Z,N,K,z,q,X);return(B=t_.diffed)&&B($),128&$.__u?void 0:V}function k4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(k4))}function H3(_,$,j){for(var Z=0;Z<j.length;Z++)C4(j[Z],j[++Z],j[++Z]);t_.__c&&t_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){t_.__e(K,N.__v)}})}function D3(_){return typeof _!="object"||_==null||_.__b>0?_:n2(_)?_.map(D3):S$({},_)}function k9(_,$,j,Z,N,K,z,V,q){var X,B,Y,U,C,m,v,R=j.props||c2,E=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(X=0;X<K.length;X++)if((C=K[X])&&"setAttribute"in C==!!F&&(F?C.localName==F:C.nodeType==3)){_=C,K[X]=null;break}}if(_==null){if(F==null)return document.createTextNode(E);_=document.createElementNS(N,F,E.is&&E),V&&(t_.__m&&t_.__m($,K),V=!1),K=null}if(F==null)R===E||V&&_.data==E||(_.data=E);else{if(K=K&&l2.call(_.childNodes),!V&&K!=null)for(R={},X=0;X<_.attributes.length;X++)R[(C=_.attributes[X]).name]=C.value;for(X in R)C=R[X],X=="dangerouslySetInnerHTML"?Y=C:X=="children"||(X in E)||X=="value"&&("defaultValue"in E)||X=="checked"&&("defaultChecked"in E)||u2(_,X,null,C,N);for(X in E)C=E[X],X=="children"?U=C:X=="dangerouslySetInnerHTML"?B=C:X=="value"?m=C:X=="checked"?v=C:V&&typeof C!="function"||R[X]===C||u2(_,X,C,R[X],N);if(B)V||Y&&(B.__html==Y.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(Y&&(_.innerHTML=""),F3($.type=="template"?_.content:_,n2(U)?U:[U],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&z2(j,0),V,q),K!=null)for(X=K.length;X--;)P4(K[X]);V||(X="value",F=="progress"&&m==null?_.removeAttribute("value"):m!=null&&(m!==_[X]||F=="progress"&&!m||F=="option"&&m!=R[X])&&u2(_,X,m,R[X],N),X="checked",v!=null&&v!=_[X]&&u2(_,X,v,R[X],N))}return _}function C4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){t_.__e(N,j)}}function E3(_,$,j){var Z,N;if(t_.unmount&&t_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||C4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){t_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&E3(Z[N],$,j||typeof _.type!="function");j||P4(_.__e),_.__c=_.__=_.__e=void 0}function w9(_,$,j){return this.constructor(_,j)}function y3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),t_.__&&t_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],M4($,_=(!Z&&j||$).__k=Q3(d2,null,[_]),N||c2,c2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?l2.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),H3(K,_,z)}l2=h2.slice,t_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(V){_=V}throw _}},q3=0,F9=function(_){return _!=null&&_.constructor===void 0},g2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=S$({},this.state),typeof _=="function"&&(_=_(S$({},j),this.props)),_&&S$(j,_),_!=null&&this.__v&&($&&this._sb.push($),_3(this))},g2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),_3(this))},g2.prototype.render=d2,p$=[],O3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B3=function(_,$){return _.__v.__b-$.__v.__b},i2.__r=0,L3=/(PointerCapture)$|Capture$/i,A4=0,E4=j3(!1),y4=j3(!0),J9=0;var J2,q0,D4,Z3,H2=0,k3=[],X0=t_,N3=X0.__b,K3=X0.__r,z3=X0.diffed,Y3=X0.__c,W3=X0.unmount,G3=X0.__;function b4(_,$){X0.__h&&X0.__h(q0,_,H2||$),H2=0;var j=q0.__H||(q0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return H2=1,A9(A3,_)}function A9(_,$,j){var Z=b4(J2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):A3(void 0,$),function(V){var q=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(q,V);q!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=q0,!q0.__f)){var N=function(V,q,X){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(U){return U.__c});if(B.every(function(U){return!U.__N}))return!K||K.call(this,V,q,X);var Y=Z.__c.props!==V;return B.some(function(U){if(U.__N){var C=U.__[0];U.__=U.__N,U.__N=void 0,C!==U.__[0]&&(Y=!0)}}),K&&K.call(this,V,q,X)||Y};q0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=q0;q0.componentWillUpdate=function(V,q,X){if(this.__e){var B=K;K=void 0,N(V,q,X),K=B}z&&z.call(this,V,q,X)},q0.shouldComponentUpdate=N}return Z.__N||Z.__}function f(_,$){var j=b4(J2++,3);!X0.__s&&w3(j.__H,$)&&(j.__=_,j.u=$,q0.__H.__h.push(j))}function D(_){return H2=5,l_(function(){return{current:_}},[])}function l_(_,$){var j=b4(J2++,7);return w3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function y(_,$){return H2=8,l_(function(){return _},$)}function P9(){for(var _;_=k3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(p2),$.__h.some(w4),$.__h=[]}catch(j){$.__h=[],X0.__e(j,_.__v)}}}X0.__b=function(_){q0=null,N3&&N3(_)},X0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),G3&&G3(_,$)},X0.__r=function(_){K3&&K3(_),J2=0;var $=(q0=_.__c).__H;$&&(D4===q0?($.__h=[],q0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(p2),$.__h.some(w4),$.__h=[],J2=0)),D4=q0},X0.diffed=function(_){z3&&z3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(k3.push($)!==1&&Z3===X0.requestAnimationFrame||((Z3=X0.requestAnimationFrame)||M9)(P9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),D4=q0=null},X0.__c=function(_,$){$.some(function(j){try{j.__h.some(p2),j.__h=j.__h.filter(function(Z){return!Z.__||w4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],X0.__e(Z,j.__v)}}),Y3&&Y3(_,$)},X0.unmount=function(_){W3&&W3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{p2(Z)}catch(N){$=N}}),j.__H=void 0,$&&X0.__e($,j.__v))};var V3=typeof requestAnimationFrame=="function";function M9(_){var $,j=function(){clearTimeout(Z),V3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);V3&&($=requestAnimationFrame(j))}function p2(_){var $=q0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),q0=$}function w4(_){var $=q0;_.__c=_.__(),q0=$}function w3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function A3(_,$){return typeof $=="function"?$(_):$}var P3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],V=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=V:z===4?Z[1]=Object.assign(Z[1]||{},V):z===5?(Z[1]=Z[1]||{})[$[++K]]=V:z===6?Z[1][$[++K]]+=V+"":z?(N=_.apply(V,P3(_,V,j,["",null])),Z.push(N),V[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(V)}return Z},X3=new Map;function C9(_){var $=X3.get(this);return $||($=new Map,X3.set(this,$)),($=P3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",V="",q=[0],X=function(U){K===1&&(U||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,U,z):K===3&&(U||z)?(q.push(3,U,z),K=2):K===2&&z==="..."&&U?q.push(4,U,0):K===2&&z&&!U?q.push(5,0,!0,z):K>=5&&((z||!U&&K===5)&&(q.push(K,0,z,N),K=6),U&&(q.push(K,U,0,N),K=6)),z=""},B=0;B<j.length;B++){B&&(K===1&&X(),X(B));for(var Y=0;Y<j[B].length;Y++)Z=j[B][Y],K===1?Z==="<"?(X(),q=[q],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:V?Z===V?V="":z+=Z:Z==='"'||Z==="'"?V=Z:Z===">"?(X(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[B][Y+1]===">")?(X(),K===3&&(q=q[0]),K=q,(q=q[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,q=q[0])}return X(),q}(_)),$),arguments,[])).length>1?$:$[0]}var L=C9.bind(Q3);var K$={};Q9(K$,{uploadWorkspaceFile:()=>r2,uploadMedia:()=>u4,updateWorkspaceFile:()=>i9,submitAdaptiveCardAction:()=>m4,streamSidePrompt:()=>p9,steerAgentQueueItem:()=>g9,setWorkspaceVisibility:()=>k2,setAgentThoughtVisibility:()=>c4,sendPeerAgentMessage:()=>R9,sendAgentMessage:()=>Y2,searchPosts:()=>x4,respondToAgentRequest:()=>o2,renameWorkspaceFile:()=>s4,renameChatBranch:()=>T9,removeAgentQueueItem:()=>m9,pruneChatBranch:()=>f9,moveWorkspaceEntry:()=>o4,getWorkspaceTree:()=>y2,getWorkspaceRawUrl:()=>a2,getWorkspaceFile:()=>l4,getWorkspaceDownloadUrl:()=>t2,getWorkspaceBranch:()=>h9,getTimeline:()=>D2,getThumbnailUrl:()=>h4,getThread:()=>S4,getPostsByHashtag:()=>I4,getMediaUrl:()=>N$,getMediaText:()=>i4,getMediaInfo:()=>W2,getMediaBlob:()=>c9,getChatBranches:()=>S9,getAgents:()=>R4,getAgentThought:()=>p4,getAgentStatus:()=>v4,getAgentQueueState:()=>u9,getAgentModels:()=>E2,getAgentContext:()=>v9,getActiveChatAgents:()=>f4,forkChatBranch:()=>s2,deleteWorkspaceFile:()=>r4,deletePost:()=>T4,createWorkspaceFile:()=>d4,createReply:()=>x9,createPost:()=>I9,attachWorkspaceFile:()=>n4,addToWhitelist:()=>g4,SSEClient:()=>e2});async function g_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function M3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function b9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:V}=await j.read();if(V)break;N+=Z.decode(z,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let X of q){let B=M3(X);if(B)$(B.event,B.data)}}N+=Z.decode();let K=M3(N);if(K)$(K.event,K.data)}async function D2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return g_(Z)}async function I4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return g_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function x4(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",V=N?`&scope=${encodeURIComponent(N)}`:"",q=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return g_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${V}${q}`)}async function S4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return g_(`/thread/${_}${j}`)}async function I9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return g_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function x9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return g_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function T4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return g_(N,{method:"DELETE"})}async function Y2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return g_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function f4(){return g_("/agent/active-chats")}async function S9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/branches${$}`)}async function s2(_,$={}){return g_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function T9(_,$={}){return g_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function f9(_){return g_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function R9(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return g_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function R4(){return g_("/agent/roster")}async function v4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/status${$}`)}async function v9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/context${$}`)}async function u9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/queue-state${$}`)}async function m9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function g9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function E2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/models${$}`)}async function u4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function o2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function m4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function p9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await b9(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function g4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function p4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return g_(j)}async function c4(_,$,j){return g_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function N$(_){return`/media/${_}`}function h4(_){return`/media/${_}/thumbnail`}async function W2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function i4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function c9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function y2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return g_(Z)}async function h9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return g_($)}async function l4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return g_(N)}async function i9(_,$){return g_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function n4(_){return g_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function r2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",V=await fetch(""+z,{method:"POST",body:Z});if(!V.ok){let q=await V.json().catch(()=>({error:"Upload failed"})),X=Error(q.error||`HTTP ${V.status}`);throw X.status=V.status,X.code=q.code,X}return V.json()}async function d4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function s4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function o4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function r4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return g_($,{method:"DELETE"})}async function k2(_,$=!1){return g_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function a2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function t2(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class e2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function z$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function _0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function G2(_,$=!1){let j=z$(_);if(j===null)return $;return j==="true"}function V2(_,$=null){let j=z$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function _4(_){return String(_||"").trim().toLowerCase()}function a4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return _4($[1]||"")}function C3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=_4(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function b3(_,$,j={}){let Z=a4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return C3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return _4(K?.agent_name).startsWith(Z)})}function t4(_){let $=_4(_);return $?`@${$} `:""}function I3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return C3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function x3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function U$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let V=`${_}-file-pill`,q=`${_}-file-name`,X=`${_}-file-remove`,B=z==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${V} title=${j||$} onClick=${N}>
      ${B}
      <span class=${q}>${$}</span>
      ${Z&&L`
        <button
          class=${X}
          onClick=${(Y)=>{Y.preventDefault(),Y.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var l9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function n9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${S3(j)} / ${S3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,V=$/100*z,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${q}
                    stroke-width="2.5"
                    stroke-dasharray=${`${V} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function S3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function T3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:V,fileRefs:q=[],onRemoveFileRef:X,onClearFileRefs:B,messageRefs:Y=[],onRemoveMessageRef:U,onClearMessageRefs:C,activeModel:m=null,modelUsage:v=null,thinkingLevel:R=null,supportsThinking:E=!1,contextUsage:F=null,notificationsEnabled:x=!1,notificationPermission:M="default",onToggleNotifications:i,onModelChange:t,onModelStateChange:N_,activeEditorPath:l=null,onAttachEditorFile:K_,onOpenFilePill:h,followupQueueItems:B_=[],onInjectQueuedFollowup:c_,onRemoveQueuedFollowup:o,onSubmitIntercept:d,onMessageResponse:z_,onPopOutChat:$_,isAgentActive:Y_=!1,activeChatAgents:A_=[],currentChatJid:Q_="web:default",connectionStatus:k_="connected",onSetFileRefs:U_,onSetMessageRefs:f_,onSubmitError:R_}){let[G_,M_]=T(""),[b_,O0]=T(""),[V_,__]=T([]),[P_,W_]=T(!1),[D_,y_]=T([]),[n_,d_]=T(0),[s_,H_]=T(!1),[I_,x_]=T([]),[N0,C_]=T(0),[D0,o_]=T(!1),[K0,i0]=T(!1),[U0,S_]=T(!1),[B0,r_]=T([]),[z0,E0]=T(!1),[h_,y0]=T(0),[P0,L_]=T(null),b=D(null),e=D(null),T_=D(null),v_=D(null),Y0=D(null),f0=D(null),M0=D(0),L0=200,k0=(Q)=>{let I=new Set,S=[];for(let n of Q||[]){if(typeof n!=="string")continue;let X_=n.trim();if(!X_||I.has(X_))continue;I.add(X_),S.push(X_)}return S},r0=()=>{let Q=z$("piclaw_compose_history");if(!Q)return[];try{let I=JSON.parse(Q);if(!Array.isArray(I))return[];return k0(I)}catch{return[]}},W$=(Q)=>{_0("piclaw_compose_history",JSON.stringify(Q))},G$=D(r0()),C0=D(-1),R0=D(""),h$=G_.trim()||V_.length>0||q.length>0||Y.length>0,l0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),w0=typeof window<"u"&&typeof Notification<"u",b$=typeof window<"u"?Boolean(window.isSecureContext):!1,S0=w0&&b$&&M!=="denied",$2=M==="granted"&&x,v0=$2?"Disable notifications":"Enable notifications",i$=V_.length>0||q.length>0||Y.length>0,i_=I3(A_,{currentChatJid:Q_,limit:4}),J$=i_.length>0,H$=!j&&x3({footerWidth:h_,visibleAgentCount:i_.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),W0=m||"",F0=E&&R?` (${R})`:"",a0=F0.trim()?`${R}`:"",D$=typeof v?.hint_short==="string"?v.hint_short.trim():"",E$=[a0||null,D$||null].filter(Boolean).join(" • "),l$=[W0?`Current model: ${W0}${F0}`:null,v?.plan?`Plan: ${v.plan}`:null,D$||null,v?.primary?.reset_description||null,v?.secondary?.reset_description||null].filter(Boolean),R$=K0?"Switching model…":l$.join(" • ")||`Current model: ${W0}${F0} (tap to open model picker)`,$0=(Q)=>{if(!Q||typeof Q!=="object")return;let I=Q.model??Q.current;if(typeof N_==="function")N_({model:I??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(I&&typeof t==="function")t(I)},X$=(Q)=>{let I=Q||b.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},y$=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let S=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),n=-1;for(let j_=0;j_<S.length;j_+=1)if(S[j_].trim()==="Files:"&&S[j_+1]&&/^\s*-\s+/.test(S[j_+1])){n=j_;break}if(n===-1)return{content:Q,fileRefs:[]};let X_=[],E_=n+1;for(;E_<S.length;E_+=1){let j_=S[E_];if(/^\s*-\s+/.test(j_))X_.push(j_.replace(/^\s*-\s+/,"").trim());else if(!j_.trim())break;else break}if(X_.length===0)return{content:Q,fileRefs:[]};let w_=S.slice(0,n),J0=S.slice(E_);return{content:[...w_,...J0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:X_}},b0=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let S=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),n=-1;for(let j_=0;j_<S.length;j_+=1)if(S[j_].trim()==="Referenced messages:"&&S[j_+1]&&/^\s*-\s+/.test(S[j_+1])){n=j_;break}if(n===-1)return{content:Q,messageRefs:[]};let X_=[],E_=n+1;for(;E_<S.length;E_+=1){let j_=S[E_];if(/^\s*-\s+/.test(j_)){let _$=j_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(_$)X_.push(_$[1])}else if(!j_.trim())break;else break}if(X_.length===0)return{content:Q,messageRefs:[]};let w_=S.slice(0,n),J0=S.slice(E_);return{content:[...w_,...J0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:X_}},u0=(Q)=>{let I=y$(Q||""),S=b0(I.content||"");return{text:S.content||"",fileRefs:I.fileRefs,messageRefs:S.messageRefs}},j2=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){H_(!1),y_([]);return}let I=Q.toLowerCase().split(" ")[0];if(I.length<1){H_(!1),y_([]);return}let S=l9.filter((n)=>n.name.startsWith(I)||n.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(S.length>0&&!(S.length===1&&S[0].name===I))o_(!1),x_([]),y_(S),d_(0),H_(!0);else H_(!1),y_([])},I0=(Q)=>{let I=G_,S=I.indexOf(" "),n=S>=0?I.slice(S):"",X_=Q.name+n;M_(X_),H_(!1),y_([]),requestAnimationFrame(()=>{let E_=b.current;if(!E_)return;let w_=X_.length;E_.selectionStart=w_,E_.selectionEnd=w_,E_.focus()})},n$=(Q)=>{if(a4(Q)==null){o_(!1),x_([]);return}let I=b3(A_,Q,{currentChatJid:Q_});if(I.length>0&&!(I.length===1&&t4(I[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))H_(!1),y_([]),x_(I),C_(0),o_(!0);else o_(!1),x_([])},q$=(Q)=>{let I=t4(Q?.agent_name);if(!I)return;M_(I),o_(!1),x_([]),requestAnimationFrame(()=>{let S=b.current;if(!S)return;let n=I.length;S.selectionStart=n,S.selectionEnd=n,S.focus()})},O$=(Q)=>{if(j)O0(Q);else M_(Q),j2(Q),n$(Q);requestAnimationFrame(()=>X$())},Z2=(Q)=>{let I=j?b_:G_,S=I&&!I.endsWith(`
`)?`
`:"",n=`${I}${S}${Q}`.trimStart();O$(n)},B2=(Q)=>{let I=Q?.command?.model_label;if(I)return I;let S=Q?.command?.message;if(typeof S==="string"){let n=S.match(/•\s+([^\n]+?)\s+\(current\)/);if(n?.[1])return n[1].trim()}return null},u_=async(Q)=>{if(j||K0)return;i0(!0);try{let I=await Y2("default",Q,null,[],null,Q_),S=B2(I);$0({model:S??m??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking});try{let n=await E2(Q_);if(n)$0(n)}catch{}return _?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{i0(!1)}},x0=async()=>{await u_("/cycle-model")},m0=async(Q)=>{if(!Q||K0)return;if(await u_(`/model ${Q}`))S_(!1)},d$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),S_((I)=>!I)},s$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return Y_?"queue":null},k$=async(Q,I,S={})=>{let{includeMedia:n=!0,includeFileRefs:X_=!0,includeMessageRefs:E_=!0,clearAfterSubmit:w_=!0,recordHistory:J0=!0}=S||{},p0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:G_,j_=typeof p0==="string"?p0:"";if(!j_.trim()&&(n?V_.length===0:!0)&&(X_?q.length===0:!0)&&(E_?Y.length===0:!0))return;H_(!1),y_([]),o_(!1),x_([]),L_(null);let _$=n?[...V_]:[],u$=X_?[...q]:[],L$=E_?[...Y]:[],$$=j_.trim();if(J0&&$$){let x$=G$.current,G0=k0(x$.filter((r$)=>r$!==$$));if(G0.push($$),G0.length>200)G0.splice(0,G0.length-200);G$.current=G0,W$(G0),C0.current=-1,R0.current=""}let L2=()=>{if(n)__([..._$]);if(X_)U_?.(u$);if(E_)f_?.(L$);M_($$),requestAnimationFrame(()=>X$())};if(w_)M_(""),__([]),B?.(),C?.();(async()=>{try{if(await d?.({content:$$,submitMode:I,fileRefs:u$,messageRefs:L$,mediaFiles:_$})){_?.();return}let G0=[];for(let Z0 of _$){let d0=await u4(Z0);G0.push(d0.id)}let r$=u$.length?`Files:
${u$.map((Z0)=>`- ${Z0}`).join(`
`)}`:"",n0=L$.length?`Referenced messages:
${L$.map((Z0)=>`- message:${Z0}`).join(`
`)}`:"",c0=G0.length?`Images:
${G0.map((Z0,d0)=>{let g$=_$[d0]?.name||`attachment-${d0+1}`;return`- attachment:${Z0} (${g$})`}).join(`
`)}`:"",m$=[$$,r$,n0,c0].filter(Boolean).join(`

`),M$=await Y2("default",m$,null,G0,s$(I),Q_);if(z_?.(M$),M$?.command){$0({model:M$.command.model_label??m??null,thinking_level:M$.command.thinking_level,supports_thinking:M$.command.supports_thinking});try{let Z0=await E2(Q_);if(Z0)$0(Z0)}catch{}}_?.()}catch(x$){if(w_)L2();let G0=x$?.message||"Failed to send message.";L_(G0),R_?.(G0),console.error("Failed to post:",x$)}})()},w$=(Q)=>{c_?.(Q)},g0=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),O0(""),V?.();return}if(D0&&I_.length>0){let I=b.current?.value??(j?b_:G_);if(!String(I||"").match(/^@([a-zA-Z0-9_-]*)$/))o_(!1),x_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),C_((S)=>(S+1)%I_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),C_((S)=>(S-1+I_.length)%I_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),q$(I_[N0]);return}if(Q.key==="Escape"){Q.preventDefault(),o_(!1),x_([]);return}}}if(s_&&D_.length>0){let I=b.current?.value??(j?b_:G_);if(!String(I||"").startsWith("/"))H_(!1),y_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),d_((S)=>(S+1)%D_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),d_((S)=>(S-1+D_.length)%D_.length);return}if(Q.key==="Tab"){Q.preventDefault(),I0(D_[n_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(b.current?.value??(j?b_:G_)).includes(" ")){Q.preventDefault();let X_=D_[n_];H_(!1),y_([]),k$(X_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),H_(!1),y_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let I=b.current;if(!I)return;let S=I.value||"",n=I.selectionStart===0&&I.selectionEnd===0,X_=I.selectionStart===S.length&&I.selectionEnd===S.length;if(Q.key==="ArrowUp"&&n||Q.key==="ArrowDown"&&X_){let E_=G$.current;if(!E_.length)return;Q.preventDefault();let w_=C0.current;if(Q.key==="ArrowUp"){if(w_===-1)R0.current=S,w_=E_.length-1;else if(w_>0)w_-=1;C0.current=w_,O$(E_[w_]||"")}else{if(w_===-1)return;if(w_<E_.length-1)w_+=1,C0.current=w_,O$(E_[w_]||"");else C0.current=-1,O$(R0.current||""),R0.current=""}requestAnimationFrame(()=>{let J0=b.current;if(!J0)return;let p0=J0.value.length;J0.selectionStart=p0,J0.selectionEnd=p0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let I=b.current?.value??(j?b_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else k$(I,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let I=b.current?.value??(j?b_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else k$(I)}},j0=(Q)=>{let I=Array.from(Q||[]).filter((S)=>S&&S.type&&S.type.startsWith("image/"));if(!I.length)return;__((S)=>[...S,...I]),L_(null)},Q0=(Q)=>{j0(Q.target.files),Q.target.value=""},B$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),M0.current+=1,W_(!0)},I$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),M0.current=Math.max(0,M0.current-1),M0.current===0)W_(!1)},o$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";W_(!0)},A$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),M0.current=0,W_(!1),j0(Q.dataTransfer?.files||[])},t0=(Q)=>{if(j)return;let I=Q.clipboardData?.items;if(!I||!I.length)return;let S=[];for(let n of I){if(n.kind!=="file")continue;let X_=n.getAsFile?.();if(X_)S.push(X_)}if(S.length>0)Q.preventDefault(),j0(S)},v$=(Q)=>{__((I)=>I.filter((S,n)=>n!==Q))},e0=()=>{L_(null),__([]),B?.(),C?.()},A0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:I,longitude:S,accuracy:n}=Q.coords,X_=`${I.toFixed(5)}, ${S.toFixed(5)}`,E_=Number.isFinite(n)?` ±${Math.round(n)}m`:"",w_=`https://maps.google.com/?q=${I},${S}`,J0=`Location: ${X_}${E_} ${w_}`;Z2(J0)},(Q)=>{let I=Q?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};f(()=>{if(!U0)return;E0(!0),E2(Q_).then((Q)=>{let I=Array.isArray(Q?.models)?Q.models.filter((S)=>typeof S==="string"&&S.trim().length>0):[];I.sort((S,n)=>S.localeCompare(n,void 0,{sensitivity:"base"})),r_(I),$0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),r_([])}).finally(()=>{E0(!1)})},[U0,m]),f(()=>{if(j)S_(!1),H_(!1),y_([]),o_(!1),x_([])},[j]),f(()=>{if(!U0)return;let Q=(I)=>{let S=v_.current,n=Y0.current,X_=I.target;if(S&&S.contains(X_))return;if(n&&n.contains(X_))return;S_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[U0]),f(()=>{let Q=()=>{let E_=f0.current?.clientWidth||0;y0((w_)=>w_===E_?w_:E_)};Q();let I=f0.current,S=0,n=()=>{if(S)cancelAnimationFrame(S);S=requestAnimationFrame(()=>{S=0,Q()})},X_=null;if(I&&typeof ResizeObserver<"u")X_=new ResizeObserver(()=>n()),X_.observe(I);if(typeof window<"u")window.addEventListener("resize",n);return()=>{if(S)cancelAnimationFrame(S);if(X_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",n)}},[j,m,i_.length,F?.percent]);let P$=(Q)=>{let I=Q.target.value;L_(null),X$(Q.target),O$(I)};return f(()=>{requestAnimationFrame(()=>X$())},[G_,b_,j]),f(()=>{if(j)return;n$(G_)},[A_,Q_,G_,j]),L`
        <div class="compose-box">
            ${!j&&B_.length>0&&L`
                <div class="compose-queue-stack">
                    ${B_.map((Q)=>{let I=typeof Q?.content==="string"?Q.content:"",S=u0(I);if(!S.text.trim()&&S.fileRefs.length===0&&S.messageRefs.length===0)return null;return L`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${I}>
                                    ${S.text.trim()&&L`
                                        <div class="compose-queue-stack-text">${S.text}</div>
                                    `}
                                    ${(S.messageRefs.length>0||S.fileRefs.length>0)&&L`
                                        <div class="compose-queue-stack-refs">
                                            ${S.messageRefs.map((n)=>L`
                                                <${U$}
                                                    key=${"queue-msg-"+n}
                                                    prefix="compose"
                                                    label=${"msg:"+n}
                                                    title=${"Message reference: "+n}
                                                    icon="message"
                                                />
                                            `)}
                                            ${S.fileRefs.map((n)=>{let X_=n.split("/").pop()||n;return L`
                                                    <${U$}
                                                        key=${"queue-file-"+n}
                                                        prefix="compose"
                                                        label=${X_}
                                                        title=${n}
                                                        onClick=${()=>h?.(n)}
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
                                        onClick=${()=>w$(Q)}
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
                                        onClick=${()=>o?.(Q)}
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
                class=${`compose-input-wrapper${P_?" drag-active":""}`}
                onDragEnter=${B$}
                onDragOver=${o$}
                onDragLeave=${I$}
                onDrop=${A$}
            >
                <div class="compose-input-main">
                    ${P0&&!i$&&L`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${P0}</div>
                    `}
                    ${i$&&L`
                        <div class="compose-file-refs">
                            ${P0&&L`
                                <div class="compose-submit-error" role="status" aria-live="polite">${P0}</div>
                            `}
                            ${Y.map((Q)=>{return L`
                                    <${U$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(Q)}
                                    />
                                `})}
                            ${q.map((Q)=>{let I=Q.split("/").pop()||Q;return L`
                                    <${U$}
                                        prefix="compose"
                                        label=${I}
                                        title=${Q}
                                        onClick=${()=>h?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(Q)}
                                    />
                                `})}
                            ${V_.map((Q,I)=>{let S=Q?.name||`attachment-${I+1}`;return L`
                                    <${U$}
                                        key=${S+I}
                                        prefix="compose"
                                        label=${S}
                                        title=${S}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>v$(I)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${e0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof $_==="function"&&L`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>$_?.()}
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
                        ref=${b}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?b_:G_}
                        onInput=${P$}
                        onKeyDown=${g0}
                        onPaste=${t0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${D0&&I_.length>0&&L`
                        <div class="slash-autocomplete" ref=${T_}>
                            ${I_.map((Q,I)=>L`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${I===N0?" active":""}`}
                                    onMouseDown=${(S)=>{S.preventDefault(),q$(Q)}}
                                    onMouseEnter=${()=>C_(I)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${s_&&D_.length>0&&L`
                        <div class="slash-autocomplete" ref=${e}>
                            ${D_.map((Q,I)=>L`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${I===n_?" active":""}`}
                                    onMouseDown=${(S)=>{S.preventDefault(),I0(Q)}}
                                    onMouseEnter=${()=>d_(I)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${U0&&!j&&L`
                        <div class="compose-model-popup" ref=${v_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${z0&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!z0&&B0.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!z0&&B0.map((Q)=>L`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===Q?" active":""}`}
                                        onClick=${()=>{m0(Q)}}
                                        disabled=${K0}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{x0()}}
                                    disabled=${K0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${f0}>
                    ${!j&&m&&L`
                    <div class="compose-meta-row">
                        ${!j&&m&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${Y0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${R$}
                                    aria-label="Open model picker"
                                    onClick=${d$}
                                    disabled=${K0}
                                >
                                    ${K0?"Switching…":W0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!K0&&E$&&L`
                                        <span class="compose-model-usage-hint" title=${R$}>
                                            ${E$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                        ${k_!=="connected"&&L`
                            <span class="compose-connection-status connection-status ${k_}" title=${k_==="disconnected"?"Reconnecting...":`Connection: ${k_}`}>
                                ${k_==="disconnected"?"Reconnecting...":k_}
                            </span>
                        `}
                    ${H$&&L`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${i_.map((Q)=>L`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>q$(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&L`
                        <${n9} usage=${F} />
                    `}
                    ${j&&L`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Q)=>K?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?V:z}
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
                    ${l0&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${A0}
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
                    ${S0&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${$2?" active":""}`}
                            onClick=${i}
                            title=${v0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&L`
                        ${l&&K_&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${K_}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${q.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${Q0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{k$()}}
                            disabled=${!h$}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var v3="piclaw_theme",$1="piclaw_tint",A2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},u3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},f3={default:{label:"Default",mode:"auto",light:A2,dark:u3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},d9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],a$={theme:"default",tint:null},m3="light",e4=!1;function j1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function q2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function s9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),V=parseInt(N[3],10);if(![K,z,V].every((X)=>Number.isFinite(X)))return null;let q=`#${[K,z,V].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:V,hex:q}}function g3(_){return q2(_)||s9(_)}function w2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function _1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function o9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function r9(_){return o9(_)>0.4?"#000000":"#ffffff"}function p3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z1(_){return f3[_]||f3.default}function a9(_){return _.mode==="auto"?p3():_.mode}function c3(_,$){let j=Z1(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||A2}function h3(_,$,j){let Z=g3($);if(!Z)return _;let N=q2(_.bgPrimary),K=q2(_.bgSecondary),z=q2(_.bgHover),V=q2(_.borderColor);if(!N||!K||!z||!V)return _;let X=q2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:w2(N,Z,0.08),bgSecondary:w2(K,Z,0.12),bgHover:w2(z,Z,0.16),borderColor:w2(V,Z,0.08),accent:Z.hex,accentHover:X?w2(Z,X,0.18):Z.hex}}function t9(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=g3(Z),K=N?_1(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?_1(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",V=N?_1(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?r9(N):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":V,"--accent-contrast-text":q,"--danger-color":_.danger||A2.danger,"--success-color":_.success||A2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([B,Y])=>{if(Y)j.style.setProperty(B,Y)})}function e9(){if(typeof document>"u")return;let _=document.documentElement;d9.forEach(($)=>_.style.removeProperty($))}function X2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function R3(_){let $=j1(a$?.theme||"default"),j=a$?.tint?String(a$.tint).trim():null,Z=c3($,_);if($==="default"&&j)Z=h3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?u3.bgPrimary:A2.bgPrimary}function _7(_,$){if(typeof document>"u")return;let j=X2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=X2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",R3("light"));let N=X2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",R3("dark"));let K=X2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let z=X2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let V=X2("apple-mobile-web-app-status-bar-style");if(V)V.setAttribute("content",$==="dark"?"black-translucent":"default")}function $7(){if(typeof window>"u")return;let _={...a$,mode:m3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function N1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=j1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=Z1(j),K=a9(N),z=c3(j,K);a$={theme:j,tint:Z},m3=K;let V=document.documentElement;V.dataset.theme=K,V.dataset.colorTheme=j,V.dataset.tint=Z?String(Z):"",V.style.colorScheme=K;let q=z;if(j==="default"&&Z)q=h3(z,Z,K);if(j==="default"&&!Z)e9();else t9(q,K);if(_7(q.bgPrimary,K),$7(),$.persist!==!1)if(_0(v3,j),Z)_0($1,Z);else _0($1,"")}function $4(){if(Z1(a$.theme).mode!=="auto")return;N1(a$,{persist:!1})}function i3(){if(typeof window>"u")return()=>{};let _=j1(z$(v3)||"default"),$=z$($1),j=$?$.trim():null;if(N1({theme:_,tint:j},{persist:!1}),window.matchMedia&&!e4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",$4);else if(Z.addListener)Z.addListener($4);return e4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",$4);else if(Z.removeListener)Z.removeListener($4);e4=!1}}return()=>{}}function l3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;N1({theme:j||"default",tint:Z},{persist:!0})}function n3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return p3()}var j4=/#(\w+)/g,j7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),Z7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),N7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),K7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},z7=new Set(["http:","https:","mailto:",""]);function K1(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function t$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!z7.has(Z.protocol))return null;return Z.href}catch{return null}}function d3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let V=z.tagName.toLowerCase();if(!Z7.has(V)){let X=z.parentNode;if(!X)continue;while(z.firstChild)X.insertBefore(z.firstChild,z);X.removeChild(z);continue}let q=K7[V]||new Set;for(let X of Array.from(z.attributes)){let B=X.name.toLowerCase(),Y=X.value;if(B.startsWith("on")){z.removeAttribute(X.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(q.has(B)||N7.has(B)){if(B==="href"){let U=t$(Y);if(!U)z.removeAttribute(X.name);else if(z.setAttribute(X.name,U),V==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let U=V==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(Y):Y,C=t$(U,{allowDataImage:V==="img"});if(!C)z.removeAttribute(X.name);else z.setAttribute(X.name,C)}continue}z.removeAttribute(X.name)}}return j.body.innerHTML}function s3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function Z4(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=s3(j);if(N===j)break;j=N}return j}function Y7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let V of j){if(!K&&V.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&V.trim().match(/^```\s*$/)){let q=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),K=!1,z=[];continue}if(K)z.push(V);else N.push(V)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function W7(_){if(!_)return _;return Z4(_,5)}function G7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function V7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function X7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=W7(K);return`<div class="mermaid-container" data-mermaid="${G7(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function o3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var q7={span:new Set(["title","class","lang","dir"])};function O7(_,$){let j=q7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,K;while(K=N.exec($)){let z=(K[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let V=K[2]??K[3]??K[4]??"";Z.push(` ${z}="${K1(V)}"`)}return Z.join("")}function r3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,V=K.endsWith("/")?K.slice(0,-1).trim():K,[q=""]=V.split(/\s+/,1),X=q.toLowerCase();if(!X||!j7.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;let B=V.slice(q.length).trim(),Y=O7(X,B);return`<${X}${Y}>`})}function a3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function t3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function B7(_){if(!window.katex)return _;let $=(z)=>s3(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let V=[],q=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let B=V.length;return V.push(X),`@@CODE_BLOCK_${B}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let B=V.length;return V.push(X),`@@CODE_INLINE_${B}@@`}),{html:q,blocks:V}},Z=(z,V)=>{if(!V.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,X)=>{let B=Number(X);return V[B]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,V,q)=>{try{let X=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${V}${X}`}catch(X){return`<span class="math-error" title="${K1(X.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,V,q)=>{if(/\s$/.test(q))return z;try{let X=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${V}${X}`}catch(X){return`${V}<span class="math-error" title="${K1(X.message)}">$${q}$</span>`}}),Z(K,N.blocks)}function L7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(j4.lastIndex=0,!j4.test(z))continue;j4.lastIndex=0;let V=K.parentElement;if(V&&(V.closest("a")||V.closest("code")||V.closest("pre")))continue;let q=z.split(j4);if(q.length<=1)continue;let X=$.createDocumentFragment();q.forEach((B,Y)=>{if(Y%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",B),U.textContent=`#${B}`,X.appendChild(U)}else X.appendChild($.createTextNode(B))}),K.parentNode?.replaceChild(X,K)}return $.body.innerHTML}function Q7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function o0(_,$,j={}){if(!_)return"";let Z=Q7(_),{text:N,blocks:K}=Y7(Z),z=Z4(N,2),q=o3(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=r3(q),B=window.marked?marked.parse(X,{headerIds:!1,mangle:!1}):X.replace(/\n/g,"<br>");return B=a3(B),B=t3(B),B=B7(B),B=L7(B),B=X7(B,K),B=d3(B,j),B}function N4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=Z4($,2),N=o3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=r3(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=a3(z),z=t3(z),z=d3(z),z}async function T$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=n3()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let V=z.dataset.mermaid,q=V7(V||""),X=Z4(q,2),B=await $(X,{...N,transparent:!0});z.innerHTML=B,z.removeAttribute("data-mermaid")}catch(V){console.error("Mermaid render error:",V);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${V.message}`,z.innerHTML="",z.appendChild(q),z.removeAttribute("data-mermaid")}}function e3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function _6(_){return String(_||"").trim()||"web:default"}function $6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function j6(_){if(!_)return!1;return _.status!=="running"}function Z6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function N6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),K=D(null),z=_?.thinking?N4(_.thinking):"",V=_?.answer?o0(_.answer,null,{sanitize:!1}):"";if(f(()=>{if(N.current&&z)T$(N.current).catch(()=>{})},[z]),f(()=>{if(K.current&&V)T$(K.current).catch(()=>{})},[V]),!_)return null;let q=_.status==="running",X=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),Y=$6(_),U=j6(_),C=!q&&X,m=q?"Thinking…":_.status==="error"?"Error":"Done";return L`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${m}</span>
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
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${Y&&L`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:V}}
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
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!C}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var K6="PiClaw";function z1(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,V=K[z],q=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",B=X?X:null,Y=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:V,image:B||(Y?"/static/icon-192.png":null)}}function z6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function Y6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function W6(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",V=K?.dataset?.tint||"",q=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(q&&(V||z&&z!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function U7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function P2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function G6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return P2(_)?"Compacting context":"Working..."}function F7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function V6(_,$=Date.now()){let j=U7(_);if(j===null)return null;return F7(Math.max(0,$-j))}function X6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:V,onPanelToggle:q}){let Y=(__)=>{if(!__)return{text:"",totalLines:0,fullText:""};if(typeof __==="string"){let y_=__,n_=y_?y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y_,totalLines:n_,fullText:y_}}let P_=__.text||"",W_=__.fullText||__.full_text||P_,D_=Number.isFinite(__.totalLines)?__.totalLines:W_?W_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:P_,totalLines:D_,fullText:W_}},U=160,C=(__)=>String(__||"").replace(/<\/?internal>/gi,""),m=(__)=>{if(!__)return 1;return Math.max(1,Math.ceil(__.length/160))},v=(__,P_,W_)=>{let D_=(__||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D_)return{text:"",omitted:0,totalLines:Number.isFinite(W_)?W_:0,visibleLines:0};let y_=D_.split(`
`),n_=y_.length>P_?y_.slice(0,P_).join(`
`):D_,d_=Number.isFinite(W_)?W_:y_.reduce((I_,x_)=>I_+m(x_),0),s_=n_?n_.split(`
`).reduce((I_,x_)=>I_+m(x_),0):0,H_=Math.max(d_-s_,0);return{text:n_,omitted:H_,totalLines:d_,visibleLines:s_}},R=Y(j),E=Y(Z),F=Y($),x=Boolean(R.text)||R.totalLines>0,M=Boolean(E.text)||E.totalLines>0,i=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!i&&!x&&!M&&!N&&!K)return null;let[t,N_]=T(new Set),[l,K_]=T(()=>Date.now()),h=(__)=>N_((P_)=>{let W_=new Set(P_),D_=!W_.has(__);if(D_)W_.add(__);else W_.delete(__);if(typeof q==="function")q(__,D_);return W_});f(()=>{N_(new Set)},[z]);let B_=P2(_);f(()=>{if(!B_)return;K_(Date.now());let __=setInterval(()=>K_(Date.now()),1000);return()=>clearInterval(__)},[B_,_?.started_at,_?.startedAt]);let c_=_?.turn_id||z,o=W6(c_),d=V?"turn-dot turn-dot-queued":"turn-dot",z_=(__)=>__,$_=Boolean(_?.last_activity||_?.lastActivity),Y_=(__)=>__==="warning"?"#f59e0b":__==="error"?"var(--danger-color)":__==="success"?"var(--success-color)":o,A_=K?.kind||"info",Q_=Y_(A_),k_=Y_(_?.kind||(B_?"warning":"info")),U_="",f_=_?.title,R_=_?.status;if(_?.type==="plan")U_=f_?`Planning: ${f_}`:"Planning...";else if(_?.type==="tool_call")U_=f_?`Running: ${f_}`:"Running tool...";else if(_?.type==="tool_status")U_=f_?`${f_}: ${R_||"Working..."}`:R_||"Working...";else if(_?.type==="error")U_=f_||"Agent error";else U_=f_||R_||"Working...";if($_)U_="Last activity just now";let G_=({panelTitle:__,text:P_,fullText:W_,totalLines:D_,maxLines:y_,titleClass:n_,panelKey:d_})=>{let s_=t.has(d_),H_=W_||P_||"",I_=d_==="thought"||d_==="draft"?C(H_):H_,x_=typeof y_==="number",N0=s_&&x_,C_=x_?v(I_,y_,D_):{text:I_||"",omitted:0,totalLines:Number.isFinite(D_)?D_:0};if(!I_&&!(Number.isFinite(C_.totalLines)&&C_.totalLines>0))return null;let D0=`agent-thinking-body${x_?" agent-thinking-body-collapsible":""}`,o_=x_?`--agent-thinking-collapsed-lines: ${y_};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${s_?"true":"false"}
                data-collapsible=${x_?"true":"false"}
                style=${o?`--turn-color: ${o};`:""}
            >
                <div class="agent-thinking-title ${n_||""}">
                    ${o&&L`<span class=${d} aria-hidden="true"></span>`}
                    ${__}
                    ${N0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${__} panel`}
                            onClick=${()=>h(d_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${D0}
                    style=${o_}
                    dangerouslySetInnerHTML=${{__html:N4(I_)}}
                />
                ${!s_&&C_.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>h(d_)}>
                        ▸ ${C_.omitted} more lines
                    </button>
                `}
                ${s_&&C_.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>h(d_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},M_=N?.tool_call?.title,b_=M_?`Awaiting approval: ${M_}`:"Awaiting approval",O0=B_?V6(_,l):null,V_=(__,P_,W_=null)=>{let D_=G6(__);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${P_?`--turn-color: ${P_};`:""}
                title=${__?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${P_&&L`<span class=${d} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D_}</span>
                    ${W_&&L`<span class="agent-status-elapsed">${W_}</span>`}
                </div>
                ${__.detail&&L`<div class="agent-thinking-body">${__.detail}</div>`}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${K&&V_(K,Q_)}
            ${_?.type==="intent"&&V_(_,k_,O0)}
            ${N&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    <span class=${d} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${b_}</span>
                </div>
            `}
            ${x&&G_({panelTitle:z_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${M&&G_({panelTitle:z_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&G_({panelTitle:z_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    ${o&&L`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U_}</span>
                </div>
            `}
        </div>
    `}function q6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",V=Z?.kind||"other",q=Z?.rawInput||{},X=q.command||q.commands&&q.commands[0]||null,B=q.diff||null,Y=q.fileName||q.path||null,U=Z?.description||q.description||q.explanation||null,m=(Array.isArray(Z?.locations)?Z.locations:[]).map((x)=>x?.path).filter((x)=>Boolean(x)),v=Array.from(new Set([Y,...m].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(x)=>{try{await o2(j,x,K||null),$()}catch(M){console.error("Failed to respond to agent request:",M)}},E=async()=>{try{await g4(z,`Auto-approved: ${z}`),await o2(j,"approved",K||null),$()}catch(x){console.error("Failed to add to whitelist:",x)}},F=N&&N.length>0;return L`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${z}</div>
                </div>
                ${(U||X||B||v.length>0)&&L`
                    <div class="agent-request-body">
                        ${U&&L`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${v.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${v.map((x,M)=>L`<li key=${M}>${x}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${X&&L`
                            <pre class="agent-request-command">${X}</pre>
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
                    ${F?N.map((x)=>L`
                            <button 
                                key=${x.optionId||x.id||String(x)}
                                class="agent-request-btn ${x.kind==="allow_once"||x.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(x.optionId||x.id||x)}
                            >
                                ${x.name||x.label||x.optionId||x.id||String(x)}
                            </button>
                        `):L`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function O6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let q=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${X}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${V}`}function M2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function Y$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function e$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var J7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),H7=new Set(["text/markdown"]),D7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),E7=new Set(["application/vnd.jgraph.mxfile"]);function C2(_){return typeof _==="string"?_.trim().toLowerCase():""}function y7(_){let $=C2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function k7(_){let $=C2(_);return!!$&&$.endsWith(".pdf")}function w7(_){let $=C2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function b2(_,$){let j=C2(_);if(y7($)||E7.has(j))return"drawio";if(k7($)||j==="application/pdf")return"pdf";if(w7($)||D7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(J7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function B6(_){let $=C2(_);return H7.has($)}function L6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function A7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function P7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function Q6(_){return A7(_)||P7(_)}function K4(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function M7(_,$){let j=Math.max(K4(_),K4($)),Z=Math.min(K4(_),K4($));return(j+0.05)/(Z+0.05)}function C7(_,$,j="#ffffff"){let Z=Q6(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let V=Q6(z);if(!V)continue;let q=M7(Z,V);if(q>K)N=z,K=q}return N}function Y1(){let _=getComputedStyle(document.documentElement),$=(m,v)=>{for(let R of m){let E=_.getPropertyValue(R).trim();if(E)return E}return v},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),V=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),Y=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),C=C7(V,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:V,good:q,warning:X,attention:B,border:Y,fontFamily:U,buttonTextColor:C}}function U6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:V,border:q,fontFamily:X}=Y1();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:V,subtle:V}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:V,subtle:V}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var b7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),F6=!1,z4=null,J6=!1;function W1(_){_.querySelector(".adaptive-card-notice")?.remove()}function I7(_,$,j="error"){W1(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function x7(_,$=(j)=>o0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function S7(_=($)=>o0($,null)){return($,j)=>{try{let Z=x7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function T7(_){if(J6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=S7(),J6=!0}async function f7(){if(F6)return;if(z4)return z4;return z4=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{F6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),z4}function R7(){return globalThis.AdaptiveCards}function v7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function u7(_){return b7.has(_)}function V1(_){if(!Array.isArray(_))return[];return _.filter(v7)}function m7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function G1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>G1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${G1(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function g7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return G1($);return typeof $==="string"?$:String($)}function p7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((V)=>Z(V));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=g7(z.type,j[z.id],z);for(let[V,q]of Object.entries(z))if(Array.isArray(q)||q&&typeof q==="object")z[V]=Z(q);return z};return Z(_)}function c7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function h7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function i7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=h7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function H6(_,$,j){if(!u7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await f7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=R7();T7(Z);let N=new Z.AdaptiveCard,K=Y1();N.hostConfig=new Z.HostConfig(U6());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,V=$.state==="active"?$.payload:p7($.payload,z);N.parse(V),N.onExecuteAction=(B)=>{let Y=m7(B);if(j?.onAction)W1(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(Y)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let C=U instanceof Error?U.message:String(U||"Action failed.");I7(_,C||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",Y)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let X=i7($);if(X){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let Y=document.createElement("span");if(Y.className="adaptive-card-status-label",Y.textContent=X.label,B.appendChild(Y),X.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=X.detail,B.appendChild(U)}_.appendChild(B)}if(W1(_),_.appendChild(q),X)c7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function O2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>O2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${O2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function l7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function X1(_){if(!Array.isArray(_))return[];return _.filter(l7)}function D6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=O2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:O2(K)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:K})=>`${N}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function E6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:O2(K)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:K})=>`${N}: ${K}`).join(", "):O2(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function n7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?Y$($):null},{label:"Added",value:_?.created_at?e$(_.created_at):null}].filter((Z)=>Z.value)}function d7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let K=N$(_);return`/office-viewer/?url=${encodeURIComponent(K)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function y6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=l_(()=>b2($?.content_type,Z),[$?.content_type,Z]),K=L6(N),z=l_(()=>B6($?.content_type),[$?.content_type]),[V,q]=T(N==="text"),[X,B]=T(""),[Y,U]=T(null),C=D(null),m=l_(()=>n7($),[$]),v=l_(()=>d7(_,Z,N),[_,Z,N]),R=l_(()=>{if(!z||!X)return"";return o0(X)},[z,X]);return f(()=>{let E=(F)=>{if(F.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),f(()=>{if(!C.current||!R)return;T$(C.current);return},[R]),f(()=>{let E=!1;async function F(){if(N!=="text"){q(!1),U(null);return}q(!0),U(null);try{let x=await i4(_);if(!E)B(x)}catch{if(!E)U("Failed to load text preview.")}finally{if(!E)q(!1)}}return F(),()=>{E=!0}},[_,N]),L`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(E)=>{E.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${v&&L`
                            <a
                                href=${v}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(E)=>E.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${N$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(E)=>E.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${V&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!V&&Y&&L`<div class="attachment-preview-state">${Y}</div>`}
                    ${!V&&!Y&&N==="image"&&L`
                        <img class="attachment-preview-image" src=${N$(_)} alt=${Z} />
                    `}
                    ${!V&&!Y&&(N==="pdf"||N==="office"||N==="drawio")&&v&&L`
                        <iframe class="attachment-preview-frame" src=${v} title=${Z}></iframe>
                    `}
                    ${!V&&!Y&&N==="drawio"&&L`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!V&&!Y&&N==="text"&&z&&L`
                        <div
                            ref=${C}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:R}}
                        />
                    `}
                    ${!V&&!Y&&N==="text"&&!z&&L`
                        <pre class="attachment-preview-text">${X}</pre>
                    `}
                    ${!V&&!Y&&N==="unsupported"&&L`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${m.map((E)=>L`
                        <div class="attachment-preview-meta-item" key=${E.label}>
                            <span class="attachment-preview-meta-label">${E.label}</span>
                            <span class="attachment-preview-meta-value">${E.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function k6({src:_,onClose:$}){return f(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function s7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(f(()=>{W2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?Y$(K):"",q=b2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${N$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&L`<span class="file-size">${z}</span>`}
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
                ${q}
            </button>
        </div>
    `}function o7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);f(()=>{if(!Number.isFinite(j))return;W2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?N$(j):null,q=b2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${K}>
            ${z?L`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${U$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:L`
                    <${U$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&L`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Y4({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?e$(Z):null;return L`
        <div class="content-annotations">
            ${$&&$.length>0&&L`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&L`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&L`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function r7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?Y$(_.size):"",N=_.mime_type||"",K=t7(N),z=t$(_.uri);return L`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(V)=>V.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&L`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&L`<span>${N}</span>`}
                    ${Z&&L`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function a7({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&L`
                ${N&&L`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&L`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(V)=>{V.preventDefault(),V.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(Y)=>Y.charCodeAt(0))],{type:z||"application/octet-stream"}),X=URL.createObjectURL(q),B=document.createElement("a");B.href=X,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function t7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function e7({preview:_}){let $=t$(_.url),j=t$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return L`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&L`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function _5(_,$){return typeof _==="string"?_:""}var $5=1800,j5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Z5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,N5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function K5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function z5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let V=z||"idle";if(K.dataset.copyState=V,V==="success")K.innerHTML=Z5,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(V==="error")K.innerHTML=N5,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=j5,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let V=document.createElement("button");V.type="button",V.className="post-code-copy-btn",N(V,"idle"),z.appendChild(V);let q=async(X)=>{X.preventDefault(),X.stopPropagation();let Y=K.querySelector("code")?.textContent||"",U=await K5(Y);N(V,U?"success":"error");let C=j.get(V);if(C)clearTimeout(C);let m=setTimeout(()=>{N(V,"idle"),j.delete(V)},$5);j.set(V,m)};V.addEventListener("click",q),Z.push(()=>{V.removeEventListener("click",q);let X=j.get(V);if(X)clearTimeout(X);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function Y5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let X=j[K];if(/^\s*-\s+/.test(X))N.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),V=j.slice(K),q=[...z,...V].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:N}}function W5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let X=j[K];if(/^\s*-\s+/.test(X)){let Y=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Y)N.push(Y[1])}else if(!X.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),V=j.slice(K),q=[...z,...V].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:N}}function G5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Images:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let X=j[K];if(/^\s*-\s+/.test(X)){let B=X.replace(/^\s*-\s+/,"").trim(),Y=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(Y){let U=Y[1],C=(Y[2]||"").trim()||U;N.push({id:U,label:C,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!X.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),V=j.slice(K),q=[...z,...V].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function V5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function X5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(V5).sort((B,Y)=>Y.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),V=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),q=[],X;while(X=V.nextNode())q.push(X);for(let B of q){let Y=B.nodeValue;if(!Y||!N.test(Y)){N.lastIndex=0;continue}N.lastIndex=0;let U=B.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let C=Y.split(N).filter((v)=>v!=="");if(C.length===0)continue;let m=z.createDocumentFragment();for(let v of C)if(K.test(v)){let R=z.createElement("mark");R.className="search-highlight-term",R.textContent=v,m.appendChild(R)}else m.appendChild(z.createTextNode(v));B.parentNode.replaceChild(m,B)}return z.body.innerHTML}function w6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:V,userAvatarUrl:q,userAvatarBackground:X,onDelete:B,isThreadReply:Y,isThreadPrev:U,isThreadNext:C,isRemoving:m,highlightQuery:v,onFileRef:R}){let[E,F]=T(null),x=D(null),M=_.data,i=M.type==="agent_response",t=V||"You",N_=i?K||K6:t,l=i?z1(K,z,!0):z1(t,q),K_=typeof X==="string"?X.trim().toLowerCase():"",h=!i&&l.image&&(K_==="clear"||K_==="transparent"),B_=i&&Boolean(l.image),c_=`background-color: ${h||B_?"transparent":l.color}`,o=M.content_meta,d=Boolean(o?.truncated),z_=Boolean(o?.preview),$_=d&&!z_,Y_=d?{originalLength:Number.isFinite(o?.original_length)?o.original_length:M.content?M.content.length:0,maxLength:Number.isFinite(o?.max_length)?o.max_length:0}:null,A_=M.content_blocks||[],Q_=M.media_ids||[],k_=_5(M.content,M.link_previews),{content:U_,fileRefs:f_}=Y5(k_),{content:R_,messageRefs:G_}=W5(U_),{content:M_,attachments:b_}=G5(R_);k_=M_;let O0=V1(A_),V_=X1(A_),__=O0.length===1&&typeof O0[0]?.fallback_text==="string"?O0[0].fallback_text.trim():"",P_=V_.length===1?D6(V_[0]).trim():"",W_=Boolean(__)&&k_?.trim()===__||Boolean(P_)&&k_?.trim()===P_,D_=Boolean(k_)&&!$_&&!W_,y_=typeof v==="string"?v.trim():"",n_=l_(()=>{if(!k_||W_)return"";let b=o0(k_,j);return y_?X5(b,y_):b},[k_,W_,y_]),d_=(b,e)=>{b.stopPropagation(),F(N$(e))},[s_,H_]=T(null),I_=(b)=>{H_(b)},x_=(b)=>{b.stopPropagation(),B?.(_)},N0=(b,e)=>{let T_=new Set;if(!b||e.length===0)return{content:b,usedIds:T_};return{content:b.replace(/attachment:([^\s)"']+)/g,(Y0,f0,M0,L0)=>{let k0=f0.replace(/^\/+/,""),W$=e.find((C0)=>C0.name&&C0.name.toLowerCase()===k0.toLowerCase()&&!T_.has(C0.id))||e.find((C0)=>!T_.has(C0.id));if(!W$)return Y0;if(T_.add(W$.id),L0.slice(Math.max(0,M0-2),M0)==="](")return`/media/${W$.id}`;return W$.name||"attachment"}),usedIds:T_}},C_=[],D0=[],o_=[],K0=[],i0=[],U0=[],S_=0;if(A_.length>0)A_.forEach((b)=>{if(b?.type==="text"&&b.annotations)U0.push(b.annotations);if(b?.type==="resource_link")K0.push(b);else if(b?.type==="resource")i0.push(b);else if(b?.type==="file"){let e=Q_[S_++];if(e)D0.push(e),o_.push({id:e,name:b?.name||b?.filename||b?.title})}else if(b?.type==="image"||!b?.type){let e=Q_[S_++];if(e){let T_=typeof b?.mime_type==="string"?b.mime_type:void 0;C_.push({id:e,annotations:b?.annotations,mimeType:T_}),o_.push({id:e,name:b?.name||b?.filename||b?.title})}}});else if(Q_.length>0)Q_.forEach((b)=>{C_.push({id:b,annotations:null}),o_.push({id:b,name:null})});if(b_.length>0)b_.forEach((b)=>{if(!b?.id)return;let e=o_.find((T_)=>String(T_.id)===String(b.id));if(e&&!e.name)e.name=b.label});let{content:B0,usedIds:r_}=N0(k_,o_);k_=B0;let z0=C_.filter(({id:b})=>!r_.has(b)),E0=D0.filter((b)=>!r_.has(b)),h_=b_.length>0?b_.map((b,e)=>({id:b.id||`attachment-${e+1}`,label:b.label||`attachment-${e+1}`})):o_.map((b,e)=>({id:b.id,label:b.name||`attachment-${e+1}`})),y0=l_(()=>V1(A_),[A_]),P0=l_(()=>X1(A_),[A_]);f(()=>{if(!x.current)return;return T$(x.current),z5(x.current)},[n_]);let L_=D(null);return f(()=>{if(!L_.current||y0.length===0)return;let b=L_.current;b.innerHTML="";for(let e of y0){let T_=document.createElement("div");b.appendChild(T_),H6(T_,e,{onAction:async(v_)=>{if(v_.type==="Action.OpenUrl"){let Y0=t$(v_.url||"");if(!Y0)throw Error("Invalid URL");window.open(Y0,"_blank","noopener,noreferrer");return}if(v_.type==="Action.Submit"){await m4({post_id:_.id,thread_id:M.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:v_.type,title:v_.title||"",data:v_.data}});return}console.warn("[post] unsupported adaptive card action:",v_.type,v_)}}).catch((v_)=>{console.error("[post] adaptive card render error:",v_),T_.textContent=e.fallback_text||"Card failed to render."})}},[y0,M.thread_id,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${i?"agent-post":""} ${Y?"thread-reply":""} ${U?"thread-prev":""} ${C?"thread-next":""} ${m?"removing":""}" onClick=${$}>
            <div class="post-avatar ${i?"agent-avatar":""} ${l.image?"has-image":""}" style=${c_}>
                ${l.image?L`<img src=${l.image} alt=${N_} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${x_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${N_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(b)=>{if(b.preventDefault(),b.stopPropagation(),Z)Z(_.id)}}>${O6(_.timestamp)}</a>
                </div>
                ${$_&&Y_&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${M2(Y_.originalLength)} chars
                            ${Y_.maxLength?L` • Display limit: ${M2(Y_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${z_&&Y_&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${M2(Y_.maxLength)} of ${M2(Y_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(f_.length>0||G_.length>0||h_.length>0)&&L`
                    <div class="post-file-refs">
                        ${G_.map((b)=>{let e=(T_)=>{if(T_.preventDefault(),T_.stopPropagation(),N)N(b,_.chat_jid||null);else{let v_=document.getElementById("post-"+b);if(v_)v_.scrollIntoView({behavior:"smooth",block:"center"}),v_.classList.add("post-highlight"),setTimeout(()=>v_.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${b}`} class="post-msg-pill-link" onClick=${e}>
                                    <${U$}
                                        prefix="post"
                                        label=${"msg:"+b}
                                        title=${"Message "+b}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${f_.map((b)=>{let e=b.split("/").pop()||b;return L`
                                <${U$}
                                    prefix="post"
                                    label=${e}
                                    title=${b}
                                    onClick=${()=>R?.(b)}
                                />
                            `})}
                        ${h_.map((b)=>L`
                            <${o7}
                                key=${b.id}
                                attachment=${b}
                                onPreview=${I_}
                            />
                        `)}
                    </div>
                `}
                ${D_&&L`
                    <div 
                        ref=${x}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:n_}}
                        onClick=${(b)=>{if(b.target.classList.contains("hashtag")){b.preventDefault(),b.stopPropagation();let e=b.target.dataset.hashtag;if(e)j?.(e)}else if(b.target.tagName==="IMG")b.preventDefault(),b.stopPropagation(),F(b.target.src)}}
                    />
                `}
                ${y0.length>0&&L`
                    <div ref=${L_} class="post-adaptive-cards" />
                `}
                ${P0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${P0.map((b,e)=>{let T_=E6(b);return L`
                                <div key=${`${b.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${T_.title}</span>
                                    </div>
                                    ${T_.summary&&L`
                                        <div class="adaptive-card-submission-summary">${T_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${e$(T_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${U0.length>0&&L`
                    ${U0.map((b,e)=>L`
                        <${Y4} key=${e} annotations=${b} />
                    `)}
                `}
                ${z0.length>0&&L`
                    <div class="media-preview">
                        ${z0.map(({id:b,mimeType:e})=>{let v_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?N$(b):h4(b);return L`
                                <img 
                                    key=${b} 
                                    src=${v_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(Y0)=>d_(Y0,b)}
                                />
                            `})}
                    </div>
                `}
                ${z0.length>0&&L`
                    ${z0.map(({annotations:b},e)=>L`
                        ${b&&L`<${Y4} key=${e} annotations=${b} />`}
                    `)}
                `}
                ${E0.length>0&&L`
                    <div class="file-attachments">
                        ${E0.map((b)=>L`
                            <${s7} key=${b} mediaId=${b} onPreview=${I_} />
                        `)}
                    </div>
                `}
                ${K0.length>0&&L`
                    <div class="resource-links">
                        ${K0.map((b,e)=>L`
                            <div key=${e}>
                                <${r7} block=${b} />
                                <${Y4} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${i0.length>0&&L`
                    <div class="resource-embeds">
                        ${i0.map((b,e)=>L`
                            <div key=${e}>
                                <${a7} block=${b} />
                                <${Y4} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${M.link_previews.map((b,e)=>L`
                            <${e7} key=${e} preview=${b} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&L`<${k6} src=${E} onClose=${()=>F(null)} />`}
        ${s_&&L`
            <${y6}
                mediaId=${s_.mediaId}
                info=${s_.info}
                onClose=${()=>H_(null)}
            />
        `}
    `}function A6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:V,emptyMessage:q,timelineRef:X,agents:B,user:Y,onDeletePost:U,reverse:C=!0,removingPostIds:m,searchQuery:v}){let[R,E]=T(!1),F=D(null),x=typeof IntersectionObserver<"u",M=y(async()=>{if(!j||!$||R)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,R,j]),i=y((o)=>{let{scrollTop:d,scrollHeight:z_,clientHeight:$_}=o.target,Y_=C?z_-$_-d:d,A_=Math.max(300,$_);if(Y_<A_)M()},[C,M]);f(()=>{if(!x)return;let o=F.current,d=X?.current;if(!o||!d)return;let z_=300,$_=new IntersectionObserver((Y_)=>{for(let A_ of Y_){if(!A_.isIntersecting)continue;M()}},{root:d,rootMargin:`${z_}px 0px ${z_}px 0px`,threshold:0});return $_.observe(o),()=>$_.disconnect()},[x,$,j,X,M]);let t=D(M);if(t.current=M,f(()=>{if(x)return;if(!X?.current)return;let{scrollTop:o,scrollHeight:d,clientHeight:z_}=X.current,$_=C?d-z_-o:o,Y_=Math.max(300,z_);if($_<Y_)t.current?.()},[x,_,$,C,X]),f(()=>{if(!X?.current)return;if(!$||R)return;let{scrollTop:o,scrollHeight:d,clientHeight:z_}=X.current,$_=C?d-z_-o:o,Y_=Math.max(300,z_);if(d<=z_+1||$_<Y_)t.current?.()},[_,$,R,C,X]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let N_=_.slice().sort((o,d)=>o.id-d.id),l=(o)=>{let d=o?.data?.thread_id;if(d===null||d===void 0||d==="")return null;let z_=Number(d);return Number.isFinite(z_)?z_:null},K_=new Map;for(let o=0;o<N_.length;o+=1){let d=N_[o],z_=Number(d?.id),$_=l(d);if($_!==null){let Y_=K_.get($_)||{anchorIndex:-1,replyIndexes:[]};Y_.replyIndexes.push(o),K_.set($_,Y_)}else if(Number.isFinite(z_)){let Y_=K_.get(z_)||{anchorIndex:-1,replyIndexes:[]};Y_.anchorIndex=o,K_.set(z_,Y_)}}let h=new Map;for(let[o,d]of K_.entries()){let z_=new Set;if(d.anchorIndex>=0)z_.add(d.anchorIndex);for(let $_ of d.replyIndexes)z_.add($_);h.set(o,Array.from(z_).sort(($_,Y_)=>$_-Y_))}let B_=N_.map((o,d)=>{let z_=l(o);if(z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=h.get(z_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Y_=$_.indexOf(d);if(Y_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Y_>0,hasThreadNext:Y_<$_.length-1}}),c_=L`<div class="timeline-sentinel" ref=${F}></div>`;return L`
        <div class="timeline ${C?"reverse":"normal"}" ref=${X} onScroll=${i}>
            <div class="timeline-content">
                ${C?c_:null}
                ${N_.map((o,d)=>{let z_=Boolean(o.data?.thread_id&&o.data.thread_id!==o.id),$_=m?.has?.(o.id),Y_=B_[d]||{};return L`
                    <${w6}
                        key=${o.id}
                        post=${o}
                        isThreadReply=${z_}
                        isThreadPrev=${Y_.hasThreadPrev}
                        isThreadNext=${Y_.hasThreadNext}
                        isRemoving=${$_}
                        highlightQuery=${v}
                        agentName=${z6(o.data?.agent_id,B||{})}
                        agentAvatarUrl=${Y6(o.data?.agent_id,B||{})}
                        userName=${Y?.name||Y?.user_name}
                        userAvatarUrl=${Y?.avatar_url||Y?.avatarUrl||Y?.avatar}
                        userAvatarBackground=${Y?.avatar_background||Y?.avatarBackground}
                        onClick=${()=>Z?.(o)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${V}
                        onDelete=${U}
                    />
                `})}
                ${C?null:c_}
            </div>
        </div>
    `}class P6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var e_=new P6;var W4=null,q1=null;function M6(){if(q1)return Promise.resolve(q1);if(!W4)W4=import("/static/dist/editor.bundle.js").then((_)=>{return q1=_,_}).catch((_)=>{throw W4=null,_});return W4}class C6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await M6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var O1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new C6(_,$)}};function B1(){M6().catch(()=>{})}var Q1="piclaw://terminal";var q5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},O5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},G4=null,L1=null;function B5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function L5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!B5(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Q5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!G4)G4=L5(()=>Promise.resolve($.init?.())).catch((j)=>{throw G4=null,j});return await G4,$}async function U5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!L1)L1=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await L1}async function F5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function J5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function H5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function f$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function D5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function b6(){let _=H5(),$=_?O5:q5,j=f$("--bg-primary",_?"#000000":"#ffffff"),Z=f$("--text-primary",_?"#e7e9ea":"#0f1419"),N=f$("--text-secondary",_?"#71767b":"#536471"),K=f$("--accent-color","#1d9bf0"),z=f$("--danger-color",_?"#ff7b72":"#cf222e"),V=f$("--success-color",_?"#7ee787":"#1a7f37"),q=f$("--bg-hover",_?"#1d1f23":"#e8ebed"),X=f$("--border-color",_?"#2f3336":"#eff3f4"),B=f$("--accent-soft-strong",D5(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:q,red:z,green:V,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class U1{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Q5();if(await U5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:b6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=b6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await F5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(J5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var F1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new U1(_,$)}},J1={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new U1(_,$)}};function c$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function E5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",V=String($||"").split("/").slice(0,-1).join("/"),X=N.startsWith("/")?N:`${V?`${V}/`:""}${N}`,B=[];for(let U of X.split("/")){if(!U||U===".")continue;if(U===".."){if(B.length>0)B.pop();continue}B.push(U)}let Y=B.join("/");return`${a2(Y)}${K}${z}`}function I2(_){return _?.preview||null}function y5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function k5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function w5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${c$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${c$(Y$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${c$(e$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${c$(k5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${c$(y5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${c$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function A5(_){let $=I2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=w5(_,$);if($.kind==="image"){let Z=$.url||($.path?a2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${c$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=o0($.text||"",null,{rewriteImageSrc:(N)=>E5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${c$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class H1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=A5(this.context)}getContent(){let _=I2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=I2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var D1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=I2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new H1(_,$)}},E1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return I2(_)||_?.path?1:!1},mount(_,$){return new H1(_,$)}};var P5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),M5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},C5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function x6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function I6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class S6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=x6(j),K=C5[N]||"\uD83D\uDCC4",z=M5[N]||"Office Document",V=document.createElement("div");V.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",V.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${I6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${I6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(V);let q=V.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class T6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=x6(_?.path);if(!$||!P5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new S6(_,$);return new T6(_,$)}};var b5=/\.(csv|tsv)$/i;class f6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k1={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!b5.test($))return!1;return 55},mount(_,$){return new f6(_,$)}};var I5=/\.pdf$/i;function x5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class R6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${x5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class v6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w1={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!I5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new R6(_,$);return new v6(_,$)}};var S5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function A1(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${A1(N)}" alt="${A1(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${A1(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let V=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class m6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P1={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!S5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new u6(_,$);return new m6(_,$)}};function T5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function f5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var M1='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function g6(_){let $=String(_||"").trim();return $?$:M1}function R5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function v5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function u5(_,$="*"){try{let j=(K)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(z,V,q,X,B,Y){try{if(z&&q!=null&&j({filename:z,format:V,data:q,mimeType:X,base64Encoded:Boolean(B),defaultMode:Y}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(z,V,q,X,B,Y){try{if(V&&j({filename:V,data:z,mimeType:q,base64Encoded:Boolean(X),mode:B,folderId:Y}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function p6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${v5(j)}`}class c6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${f5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=R5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(u5(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=M1,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await p6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await p6(_,"image/png");else this.xmlData=g6(await _.text());else if(_.status===404)this.xmlData=M1;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?g6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var C1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!T5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new c6(_,$);return new h6(_,$)}};class i6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var p_=new i6;var V4="workspaceExplorerScale",m5=["compact","default","comfortable"],g5=new Set(m5),p5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function l6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return g5.has(j)?j:$}function b1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function c5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function h5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function I1(_={}){let $=c5(_),j=_.stored?l6(_.stored,$):$;return h5(j,_)}function n6(_){return p5[l6(_)]}var i5=60000,r6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function a6(_,$,j,Z=0,N=[]){if(!j&&r6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)a6(K,$,j,Z+1,N);return N}function d6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&r6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function f1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((V)=>[V?.path,V])):new Map,K=!j||j.length!==Z.length,z=Z.map((V)=>{let q=f1(N.get(V.path),V);if(q!==N.get(V.path))K=!0;return q});return K?{...$,children:z}:_}function S1(_,$,j){if(!_)return _;if(_.path===$)return f1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=S1(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var t6=4,x1=14,l5=8,n5=16;function e6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=e6(Z);return _.__bytes=j,j}function _8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=t6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let V of N){let q=Math.max(0,Number(V?.__bytes??V?.size??0));if(q<=0)continue;if(V.type==="dir")K.push({kind:"dir",node:V,size:q});else K.push({kind:"file",name:V.name,path:V.path,size:q})}K.sort((V,q)=>q.size-V.size);let z=K;if(K.length>x1){let V=K.slice(0,x1-1),q=K.slice(x1-1),X=q.reduce((B,Y)=>B+Y.size,0);V.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:X}),z=V}return Z.children=z.map((V)=>{if(V.kind==="dir")return _8(V.node,$+1);return{name:V.name,path:V.path,size:V.size,children:[]}}),Z}function s6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function $8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function X4(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function R1(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,V=K-N>z?N+z:K,q=X4(_,$,Z,N),X=X4(_,$,Z,V),B=X4(_,$,j,V),Y=X4(_,$,j,N),U=V-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${Y.x.toFixed(3)} ${Y.y.toFixed(3)}`,"Z"].join(" ")}var j8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function Z8(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(V,q,X,B)=>{let Y=Array.isArray(V?.children)?V.children:[];if(!Y.length)return;let U=Math.max(0,Number(V.size)||0);if(U<=0)return;let C=X-q,m=q;Y.forEach((v,R)=>{let E=Math.max(0,Number(v.size)||0);if(E<=0)return;let F=E/U,x=m,M=R===Y.length-1?X:m+C*F;if(m=M,M-x<0.003)return;let i=j8[B];if(i){let t=$8(x,B,j);if(Z.push({key:v.path,path:v.path,label:v.name,size:E,color:t,depth:B,startAngle:x,endAngle:M,innerRadius:i[0],outerRadius:i[1],d:R1(120,120,i[0],i[1],x,M)}),B===1)N.push({key:v.path,name:v.name,size:E,pct:K>0?E/K*100:0,color:t})}if(B<t6)z(v,x,M,B+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function T1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=T1(Z,$);if(N)return N}return null}function N8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=j8[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,V=$8(K,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:V,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:R1(120,120,N[0],N[1],K,z)}],legend:[{key:X,name:_,size:j,pct:100,color:V}]}}function o6(_,$=!1,j=!1){if(!_)return null;let Z=e6(_),N=_8(_,0),K=N.size||Z,{segments:z,legend:V}=Z8(N,K,j);if(!z.length&&K>0){let q=N8("[files]",N.path,K,j);z=q.segments,V=q.legend}return{root:N,totalSize:K,segments:z,legend:V,truncated:$,isDarkTheme:j}}function d5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[K,z]=T(()=>[_?.root?.path||"."]),[V,q]=T(!1);f(()=>{let h=_?.root?.path||".";N(h),z([h]),j(null)},[_?.root?.path,_?.totalSize]),f(()=>{if(!Z)return;q(!0);let h=setTimeout(()=>q(!1),180);return()=>clearTimeout(h)},[Z]);let X=l_(()=>{return T1(_.root,Z)||_.root},[_?.root,Z]),B=X?.size||_.totalSize||0,{segments:Y,legend:U}=l_(()=>{let h=Z8(X,B,_.isDarkTheme);if(h.segments.length>0)return h;if(B<=0)return h;let B_=X?.children?.length?"Total":"[files]";return N8(B_,X?.path||_?.root?.path||".",B,_.isDarkTheme)},[X,B,_.isDarkTheme,_?.root?.path]),[C,m]=T(Y),v=D(new Map),R=D(0);f(()=>{let h=v.current,B_=new Map(Y.map((z_)=>[z_.key,z_])),c_=performance.now(),o=220,d=(z_)=>{let $_=Math.min(1,(z_-c_)/220),Y_=$_*(2-$_),A_=Y.map((Q_)=>{let U_=h.get(Q_.key)||{startAngle:Q_.startAngle,endAngle:Q_.startAngle,innerRadius:Q_.innerRadius,outerRadius:Q_.innerRadius},f_=(O0,V_)=>O0+(V_-O0)*Y_,R_=f_(U_.startAngle,Q_.startAngle),G_=f_(U_.endAngle,Q_.endAngle),M_=f_(U_.innerRadius,Q_.innerRadius),b_=f_(U_.outerRadius,Q_.outerRadius);return{...Q_,d:R1(120,120,M_,b_,R_,G_)}});if(m(A_),$_<1)R.current=requestAnimationFrame(d)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(d),v.current=B_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[Y]);let E=C.length?C:Y,F=B>0?Y$(B):"0 B",x=X?.name||"",i=(x&&x!=="."?x:"Total")||"Total",t=F,N_=K.length>1,l=(h)=>{if(!h?.path)return;let B_=T1(_.root,h.path);if(!B_||!Array.isArray(B_.children)||B_.children.length===0)return;z((c_)=>[...c_,B_.path]),N(B_.path),j(null)},K_=()=>{if(!N_)return;z((h)=>{let B_=h.slice(0,-1);return N(B_[B_.length-1]||_?.root?.path||"."),B_}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${V?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${X?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${B}>
                ${E.map((h)=>L`
                    <path
                        key=${h.key}
                        d=${h.d}
                        fill=${h.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===h.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(h)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(h)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>l(h)}
                    >
                        <title>${h.label} — ${Y$(h.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${N_?" is-drill":""}`}
                    onClick=${K_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${i}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${t}</text>
                </g>
            </svg>
            ${U.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((h)=>L`
                        <div key=${h.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${h.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${h.name}>${h.name}</span>
                            <span class="workspace-folder-starburst-size">${Y$(h.size)}</span>
                            <span class="workspace-folder-starburst-pct">${h.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function s5({mediaId:_}){let[$,j]=T(null);if(f(()=>{if(!_)return;W2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?Y$($.metadata.size):"";return L`
        <a href=${N$(_)} download=${Z} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&L`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function K8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:z=!1}){let[V,q]=T(null),[X,B]=T(new Set(["."])),[Y,U]=T(null),[C,m]=T(null),[v,R]=T(""),[E,F]=T(null),[x,M]=T(null),[i,t]=T(!0),[N_,l]=T(!1),[K_,h]=T(null),[B_,c_]=T(()=>G2("workspaceShowHidden",!1)),[o,d]=T(!1),[z_,$_]=T(null),[Y_,A_]=T(null),[Q_,k_]=T(null),[U_,f_]=T(!1),[R_,G_]=T(null),[M_,b_]=T(()=>s6()),[O0,V_]=T(()=>I1({stored:z$(V4),...b1()})),[__,P_]=T(!1),W_=D(X),D_=D(""),y_=D(null),n_=D(0),d_=D(new Set),s_=D(null),H_=D(new Map),I_=D(_),x_=D(Z),N0=D(null),C_=D(null),D0=D(null),o_=D(null),K0=D(null),i0=D(null),U0=D("."),S_=D(null),B0=D({path:null,dragging:!1,startX:0,startY:0}),r_=D({path:null,dragging:!1,startX:0,startY:0}),z0=D({path:null,timer:0}),E0=D(!1),h_=D(0),y0=D(new Map),P0=D(null),L_=D(null),b=D(null),e=D(null),T_=D(null),v_=D(null),Y0=D(B_),f0=D($),M0=D(j??$),L0=D(0),k0=D(Q_),r0=D(o),W$=D(z_),G$=D(null),C0=D({x:0,y:0}),R0=D(0),h$=D(null),l0=D(Y),w0=D(C),b$=D(null),V$=D(null),S0=D(E);I_.current=_,x_.current=Z,f(()=>{W_.current=X},[X]),f(()=>{Y0.current=B_},[B_]),f(()=>{f0.current=$},[$]),f(()=>{M0.current=j??$},[j,$]),f(()=>{k0.current=Q_},[Q_]),f(()=>{if(typeof window>"u")return;let O=()=>{V_(I1({stored:z$(V4),...b1()}))};O();let J=()=>O(),w=()=>O(),k=(u)=>{if(!u||u.key===null||u.key===V4)O()};window.addEventListener("resize",J),window.addEventListener("focus",w),window.addEventListener("storage",k);let g=window.matchMedia?.("(pointer: coarse)"),s=window.matchMedia?.("(hover: none)"),r=(u,q_)=>{if(!u)return;if(u.addEventListener)u.addEventListener("change",q_);else if(u.addListener)u.addListener(q_)},a=(u,q_)=>{if(!u)return;if(u.removeEventListener)u.removeEventListener("change",q_);else if(u.removeListener)u.removeListener(q_)};return r(g,J),r(s,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",w),window.removeEventListener("storage",k),a(g,J),a(s,J)}},[]),f(()=>{let O=(J)=>{let w=J?.detail?.path;if(!w)return;let k=w.split("/"),g=[];for(let s=1;s<k.length;s++)g.push(k.slice(0,s).join("/"));if(g.length)B((s)=>{let r=new Set(s);r.add(".");for(let a of g)r.add(a);return r});U(w),requestAnimationFrame(()=>{let s=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(s)s.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),f(()=>{r0.current=o},[o]),f(()=>{W$.current=z_},[z_]),f(()=>{l0.current=Y},[Y]),f(()=>{w0.current=C},[C]),f(()=>{S0.current=E},[E]),f(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>b_(s6());O();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>O();if(J?.addEventListener)J.addEventListener("change",w);else if(J?.addListener)J.addListener(w);let k=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",w);else if(J?.removeListener)J.removeListener(w);k?.disconnect()}},[]),f(()=>{if(!C)return;let O=K0.current;if(!O)return;let J=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(J)},[C]),f(()=>{if(!__)return;let O=(w)=>{let k=w?.target;if(!(k instanceof Element))return;if(T_.current?.contains(k))return;if(v_.current?.contains(k))return;P_(!1)},J=(w)=>{if(w?.key==="Escape")P_(!1),v_.current?.focus?.()};return document.addEventListener("mousedown",O),document.addEventListener("touchstart",O,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("touchstart",O),document.removeEventListener("keydown",J)}},[__]);let $2=async(O)=>{l(!0),F(null),M(null);try{let J=await l4(O,20000);F(J)}catch(J){F({error:J.message||"Failed to load preview"})}finally{l(!1)}};N0.current=$2;let v0=async()=>{if(!f0.current)return;try{let O=await y2("",1,Y0.current),J=d6(O.root,W_.current,Y0.current);if(J===D_.current){t(!1);return}if(D_.current=J,y_.current=O.root,!n_.current)n_.current=requestAnimationFrame(()=>{n_.current=0,q((w)=>f1(w,y_.current)),t(!1)})}catch(O){h(O.message||"Failed to load workspace"),t(!1)}},i$=async(O)=>{if(!O)return;if(d_.current.has(O))return;d_.current.add(O);try{let J=await y2(O,1,Y0.current);q((w)=>S1(w,O,J.root))}catch(J){h(J.message||"Failed to load workspace")}finally{d_.current.delete(O)}};C_.current=i$;let i_=y(()=>{let O=Y;if(!O)return".";let J=H_.current?.get(O);if(J&&J.type==="dir")return J.path;if(O==="."||!O.includes("/"))return".";let w=O.split("/");return w.pop(),w.join("/")||"."},[Y]),J$=y((O)=>{let J=O?.closest?.(".workspace-row");if(!J)return null;let w=J.dataset.path,k=J.dataset.type;if(!w)return null;if(k==="dir")return w;if(w.includes("/")){let g=w.split("/");return g.pop(),g.join("/")||"."}return"."},[]),H$=y((O)=>{return J$(O?.target||null)},[J$]),W0=y((O)=>{k0.current=O,k_(O)},[]),F0=y(()=>{let O=z0.current;if(O?.timer)clearTimeout(O.timer);z0.current={path:null,timer:0}},[]),a0=y((O)=>{if(!O||O==="."){F0();return}let J=H_.current?.get(O);if(!J||J.type!=="dir"){F0();return}if(W_.current?.has(O)){F0();return}if(z0.current?.path===O)return;F0();let w=setTimeout(()=>{z0.current={path:null,timer:0},C_.current?.(O),B((k)=>{let g=new Set(k);return g.add(O),g})},600);z0.current={path:O,timer:w}},[F0]),D$=y((O,J)=>{if(C0.current={x:O,y:J},R0.current)return;R0.current=requestAnimationFrame(()=>{R0.current=0;let w=G$.current;if(!w)return;let k=C0.current;w.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),E$=y((O)=>{if(!O)return;let w=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!w)return;A_({path:O,label:w})},[]),l$=y(()=>{if(A_(null),R0.current)cancelAnimationFrame(R0.current),R0.current=0;if(G$.current)G$.current.style.transform="translate(-9999px, -9999px)"},[]),R$=y((O)=>{if(!O)return".";let J=H_.current?.get(O);if(J&&J.type==="dir")return J.path;if(O==="."||!O.includes("/"))return".";let w=O.split("/");return w.pop(),w.join("/")||"."},[]),$0=y(()=>{m(null),R("")},[]),X$=y((O)=>{if(!O)return;let w=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!w||O===".")return;m(O),R(w)},[]),y$=y(async()=>{let O=w0.current;if(!O)return;let J=(v||"").trim();if(!J){$0();return}let w=H_.current?.get(O),k=(w?.name||O.split("/").pop()||O).trim();if(J===k){$0();return}try{let s=(await s4(O,J))?.path||O,r=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if($0(),h(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:s,type:w?.type||"file"}})),w?.type==="dir")B((a)=>{let u=new Set;for(let q_ of a)if(q_===O)u.add(s);else if(q_.startsWith(`${O}/`))u.add(`${s}${q_.slice(O.length)}`);else u.add(q_);return u});if(U(s),w?.type==="dir")F(null),l(!1),M(null);else N0.current?.(s);C_.current?.(r)}catch(g){h(g?.message||"Failed to rename file")}},[$0,v]),b0=y(async(O)=>{let k=O||".";for(let g=0;g<50;g+=1){let r=`untitled${g===0?"":`-${g}`}.md`;try{let u=(await d4(k,r,""))?.path||(k==="."?r:`${k}/${r}`);if(k&&k!==".")B((q_)=>new Set([...q_,k]));U(u),h(null),C_.current?.(k),N0.current?.(u);return}catch(a){if(a?.status===409||a?.code==="file_exists")continue;h(a?.message||"Failed to create file");return}}h("Failed to create file (untitled name already in use).")},[]),u0=y((O)=>{if(O?.stopPropagation?.(),U_)return;let J=R$(l0.current);b0(J)},[U_,R$,b0]);f(()=>{if(typeof window>"u")return;let O=(J)=>{let w=J?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;q((a)=>{let u=a;for(let q_ of w){if(!q_?.root)continue;if(!u||q_.path==="."||!q_.path)u=q_.root;else u=S1(u,q_.path,q_.root)}if(u)D_.current=d6(u,W_.current,Y0.current);return t(!1),u});let k=l0.current;if(Boolean(k)&&w.some((a)=>{let u=a?.path||"";if(!u||u===".")return!0;return k===u||k.startsWith(`${u}/`)||u.startsWith(`${k}/`)}))y0.current.clear();if(!k||!S0.current)return;let s=H_.current?.get(k);if(s&&s.type==="dir")return;if(w.some((a)=>{let u=a?.path||"";if(!u||u===".")return!0;return k===u||k.startsWith(`${u}/`)}))N0.current?.(k)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),s_.current=v0;let j2=D(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=M0.current??f0.current,w=document.visibilityState!=="hidden"&&(J||O.matches&&f0.current);k2(w,Y0.current).catch(()=>{})}).current,I0=D(0),n$=D(()=>{if(I0.current)clearTimeout(I0.current);I0.current=setTimeout(()=>{I0.current=0,j2()},250)}).current;f(()=>{if(f0.current)s_.current?.();n$()},[$,j]),f(()=>{s_.current(),j2();let O=setInterval(()=>s_.current(),i5),J=V2("previewHeight",null),w=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(h_.current=w,D0.current)D0.current.style.setProperty("--preview-height",`${w}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),g=()=>n$();if(k.addEventListener)k.addEventListener("change",g);else if(k.addListener)k.addListener(g);return document.addEventListener("visibilitychange",g),()=>{if(clearInterval(O),n_.current)cancelAnimationFrame(n_.current),n_.current=0;if(k.removeEventListener)k.removeEventListener("change",g);else if(k.removeListener)k.removeListener(g);if(document.removeEventListener("visibilitychange",g),I0.current)clearTimeout(I0.current),I0.current=0;if(S_.current)clearTimeout(S_.current),S_.current=null;k2(!1,Y0.current).catch(()=>{})}},[]);let q$=l_(()=>a6(V,X,B_),[V,X,B_]),O$=l_(()=>new Map(q$.map((O)=>[O.node.path,O.node])),[q$]),Z2=l_(()=>n6(O0),[O0]);H_.current=O$;let u_=(Y?H_.current.get(Y):null)?.type==="dir";f(()=>{if(!Y||!u_){G_(null),P0.current=null,L_.current=null;return}let O=Y,J=`${B_?"hidden":"visible"}:${Y}`,w=y0.current,k=w.get(J);if(k?.root){w.delete(J),w.set(J,k);let r=o6(k.root,Boolean(k.truncated),M_);if(r)P0.current=r,L_.current=Y,G_({loading:!1,error:null,payload:r});return}let g=P0.current,s=L_.current;G_({loading:!0,error:null,payload:s===Y?g:null}),y2(Y,l5,B_).then((r)=>{if(l0.current!==O)return;let a={root:r?.root,truncated:Boolean(r?.truncated)};w.delete(J),w.set(J,a);while(w.size>n5){let q_=w.keys().next().value;if(!q_)break;w.delete(q_)}let u=o6(a.root,a.truncated,M_);P0.current=u,L_.current=Y,G_({loading:!1,error:null,payload:u})}).catch((r)=>{if(l0.current!==O)return;G_({loading:!1,error:r?.message||"Failed to load folder size chart",payload:s===Y?g:null})})},[Y,u_,B_,M_]);let x0=Boolean(E&&E.kind==="text"&&!u_&&(!E.size||E.size<=262144)),m0=x0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",d$=Boolean(Y&&Y!=="."),s$=Boolean(Y&&!u_),k$=Boolean(Y&&!u_),w$=Y&&u_?t2(Y,B_):null,g0=y(()=>P_(!1),[]),j0=y(async(O)=>{g0();try{await O?.()}catch{}},[g0]);f(()=>{let O=b.current;if(e.current)e.current.dispose(),e.current=null;if(!O)return;if(O.innerHTML="",!Y||u_||!E||E.error)return;let J={path:Y,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},w=e_.resolve(J)||e_.get("workspace-preview-default");if(!w)return;let k=w.mount(O,J);return e.current=k,()=>{if(e.current===k)k.dispose(),e.current=null;O.innerHTML=""}},[Y,u_,E]);let Q0=(O)=>{let J=O?.target;if(J instanceof Element)return J;return J?.parentElement||null},B$=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},I$=D((O)=>{if(V$.current)clearTimeout(V$.current),V$.current=null;let w=Q0(O)?.closest?.("[data-path]");if(!w)return;let k=w.dataset.path;if(w.dataset.type==="dir"||!k)return;if(w0.current===k)$0();x_.current?.(k)}).current,o$=D((O)=>{if(E0.current){E0.current=!1;return}let J=Q0(O),w=J?.closest?.("[data-path]");if(o_.current?.focus?.(),!w)return;let k=w.dataset.path,g=w.dataset.type,s=Boolean(J?.closest?.(".workspace-caret")),r=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),a=l0.current===k,u=w0.current;if(u){if(u===k)return;$0()}let q_=g==="file"&&b$.current===k&&!s&&!r;if(a&&!s&&!r&&k!=="."&&!q_){if(V$.current)clearTimeout(V$.current);V$.current=setTimeout(()=>{V$.current=null,X$(k)},350);return}if(g==="dir"){if(b$.current=null,U(k),F(null),M(null),l(!1),!W_.current.has(k))C_.current?.(k);if(a&&!s)return;B((C$)=>{let V0=new Set(C$);if(V0.has(k))V0.delete(k);else V0.add(k);return V0})}else{b$.current=null,U(k);let H0=H_.current.get(k);if(H0)I_.current?.(H0.path,H0);N0.current?.(k)}}).current,A$=D(()=>{D_.current="",s_.current(),Array.from(W_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>C_.current?.(J))}).current,t0=D(()=>{b$.current=null,U(null),F(null),M(null),l(!1)}).current,v$=D(()=>{c_((O)=>{let J=!O;if(typeof window<"u")_0("workspaceShowHidden",String(J));return Y0.current=J,k2(!0,J).catch(()=>{}),D_.current="",s_.current?.(),Array.from(W_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>C_.current?.(k)),J})}).current,e0=D((O)=>{if(Q0(O)?.closest?.("[data-path]"))return;t0()}).current,A0=y(async(O)=>{if(!O)return;let J=O.split("/").pop()||O;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await r4(O);let k=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(l0.current===O)t0();C_.current?.(k),h(null)}catch(k){F((g)=>({...g||{},error:k.message||"Failed to delete file"}))}},[t0]),P$=y((O)=>{let J=o_.current;if(!J||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),Q=y((O)=>{let J=q$;if(!J||J.length===0)return;let w=Y?J.findIndex((k)=>k.node.path===Y):-1;if(O.key==="ArrowDown"){O.preventDefault();let k=Math.min(w+1,J.length-1),g=J[k];if(!g)return;if(U(g.node.path),g.node.type!=="dir")I_.current?.(g.node.path,g.node),N0.current?.(g.node.path);else F(null),l(!1),M(null);P$(g.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let k=w<=0?0:w-1,g=J[k];if(!g)return;if(U(g.node.path),g.node.type!=="dir")I_.current?.(g.node.path,g.node),N0.current?.(g.node.path);else F(null),l(!1),M(null);P$(g.node.path);return}if(O.key==="ArrowRight"&&w>=0){let k=J[w];if(k?.node?.type==="dir"&&!X.has(k.node.path))O.preventDefault(),C_.current?.(k.node.path),B((g)=>new Set([...g,k.node.path]));return}if(O.key==="ArrowLeft"&&w>=0){let k=J[w];if(k?.node?.type==="dir"&&X.has(k.node.path))O.preventDefault(),B((g)=>{let s=new Set(g);return s.delete(k.node.path),s});return}if(O.key==="Enter"&&w>=0){O.preventDefault();let k=J[w];if(!k)return;let g=k.node.path;if(k.node.type==="dir"){if(!W_.current.has(g))C_.current?.(g);B((r)=>{let a=new Set(r);if(a.has(g))a.delete(g);else a.add(g);return a}),F(null),M(null),l(!1)}else I_.current?.(g,k.node),N0.current?.(g);return}if((O.key==="Delete"||O.key==="Backspace")&&w>=0){let k=J[w];if(!k||k.node.type==="dir")return;O.preventDefault(),A0(k.node.path);return}if(O.key==="Escape")O.preventDefault(),t0()},[t0,A0,X,q$,P$,Y]),I=y((O)=>{let J=Q0(O),w=J?.closest?.(".workspace-row");if(!w)return;let k=w.dataset.type,g=w.dataset.path;if(!g||g===".")return;if(w0.current===g)return;let s=O?.touches?.[0];if(!s)return;if(B0.current={path:B$(J)?g:null,dragging:!1,startX:s.clientX,startY:s.clientY},k!=="file")return;if(S_.current)clearTimeout(S_.current);S_.current=setTimeout(()=>{if(S_.current=null,B0.current?.dragging)return;A0(g)},600)},[A0]),S=y(()=>{if(S_.current)clearTimeout(S_.current),S_.current=null;let O=B0.current;if(O?.dragging&&O.path){let J=k0.current||i_(),w=h$.current;if(typeof w==="function")w(O.path,J)}B0.current={path:null,dragging:!1,startX:0,startY:0},L0.current=0,d(!1),$_(null),W0(null),F0(),l$()},[i_,l$,W0,F0]),n=y((O)=>{let J=B0.current,w=O?.touches?.[0];if(!w||!J?.path){if(S_.current)clearTimeout(S_.current),S_.current=null;return}let k=Math.abs(w.clientX-J.startX),g=Math.abs(w.clientY-J.startY),s=k>8||g>8;if(s&&S_.current)clearTimeout(S_.current),S_.current=null;if(!J.dragging&&s)J.dragging=!0,d(!0),$_("move"),E$(J.path);if(J.dragging){O.preventDefault(),D$(w.clientX,w.clientY);let r=document.elementFromPoint(w.clientX,w.clientY),a=J$(r)||i_();if(k0.current!==a)W0(a);a0(a)}},[J$,i_,E$,D$,W0,a0]),X_=D((O)=>{O.preventDefault();let J=D0.current;if(!J)return;let w=O.clientY,k=h_.current||280,g=O.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let s=w,r=(u)=>{s=u.clientY;let q_=J.clientHeight-80,H0=Math.min(Math.max(k-(u.clientY-w),80),q_);J.style.setProperty("--preview-height",`${H0}px`),h_.current=H0},a=()=>{let u=J.clientHeight-80,q_=Math.min(Math.max(k-(s-w),80),u);h_.current=q_,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("previewHeight",String(Math.round(q_))),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}).current,E_=D((O)=>{O.preventDefault();let J=D0.current;if(!J)return;let w=O.touches[0];if(!w)return;let k=w.clientY,g=h_.current||280,s=O.currentTarget;s.classList.add("dragging"),document.body.style.userSelect="none";let r=(u)=>{let q_=u.touches[0];if(!q_)return;u.preventDefault();let H0=J.clientHeight-80,C$=Math.min(Math.max(g-(q_.clientY-k),80),H0);J.style.setProperty("--preview-height",`${C$}px`),h_.current=C$},a=()=>{s.classList.remove("dragging"),document.body.style.userSelect="",_0("previewHeight",String(Math.round(h_.current||g))),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",a),document.removeEventListener("touchcancel",a)};document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",a),document.addEventListener("touchcancel",a)}).current,w_=async()=>{if(!Y)return;try{let O=await n4(Y);if(O.media_id)M(O.media_id)}catch(O){F((J)=>({...J||{},error:O.message||"Failed to attach"}))}},J0=async()=>{if(!Y||u_)return;await A0(Y)},p0=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},j_=y((O)=>{if(!p0(O))return;if(O.preventDefault(),L0.current+=1,!r0.current)d(!0);$_("upload");let J=H$(O)||i_();W0(J),a0(J)},[i_,H$,W0,a0]),_$=y((O)=>{if(!p0(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!r0.current)d(!0);if(W$.current!=="upload")$_("upload");let J=H$(O)||i_();if(k0.current!==J)W0(J);a0(J)},[i_,H$,W0,a0]),u$=y((O)=>{if(!p0(O))return;if(O.preventDefault(),L0.current=Math.max(0,L0.current-1),L0.current===0)d(!1),$_(null),W0(null),F0()},[W0,F0]),L$=y(async(O,J=".")=>{let w=Array.from(O||[]);if(w.length===0)return;let k=J&&J!==""?J:".",g=k!=="."?k:"workspace root";f_(!0);try{let s=null;for(let r of w)try{s=await r2(r,k)}catch(a){let u=a?.status,q_=a?.code;if(u===409||q_==="file_exists"){let H0=r?.name||"file";if(!window.confirm(`"${H0}" already exists in ${g}. Overwrite?`))continue;s=await r2(r,k,{overwrite:!0})}else throw a}if(s?.path)b$.current=s.path,U(s.path),N0.current?.(s.path);C_.current?.(k)}catch(s){h(s.message||"Failed to upload file")}finally{f_(!1)}},[]),$$=y(async(O,J)=>{if(!O)return;let w=H_.current?.get(O);if(!w)return;let k=J&&J!==""?J:".",g=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(k===g)return;try{let r=(await o4(O,k))?.path||O;if(w.type==="dir")B((a)=>{let u=new Set;for(let q_ of a)if(q_===O)u.add(r);else if(q_.startsWith(`${O}/`))u.add(`${r}${q_.slice(O.length)}`);else u.add(q_);return u});if(U(r),w.type==="dir")F(null),l(!1),M(null);else N0.current?.(r);C_.current?.(g),C_.current?.(k)}catch(s){h(s?.message||"Failed to move entry")}},[]);h$.current=$$;let L2=y(async(O)=>{if(!p0(O))return;O.preventDefault(),L0.current=0,d(!1),$_(null),k_(null),F0();let J=Array.from(O?.dataTransfer?.files||[]);if(J.length===0)return;let w=k0.current||H$(O)||i_();await L$(J,w)},[i_,H$,L$]),x$=y((O)=>{if(O?.stopPropagation?.(),U_)return;let J=O?.currentTarget?.dataset?.uploadTarget||".";U0.current=J,i0.current?.click()},[U_]),G0=y(()=>{if(U_)return;let O=l0.current,J=O?H_.current?.get(O):null;U0.current=J?.type==="dir"?J.path:".",i0.current?.click()},[U_]),r$=y(()=>{j0(()=>u0(null))},[j0,u0]),n0=y(()=>{j0(()=>G0())},[j0,G0]),c0=y(()=>{j0(()=>A$())},[j0,A$]),m$=y(()=>{j0(()=>v$())},[j0,v$]),M$=y(()=>{if(!Y||!x0)return;j0(()=>x_.current?.(Y,E))},[j0,Y,x0,E]),Z0=y(()=>{if(!Y||Y===".")return;j0(()=>X$(Y))},[j0,Y,X$]),d0=y(()=>{if(!Y||u_)return;j0(()=>J0())},[j0,Y,u_,J0]),Q2=y(()=>{if(!Y||u_)return;j0(()=>w_())},[j0,Y,u_,w_]),g$=y(()=>{if(!w$)return;if(g0(),typeof window<"u")window.open(w$,"_blank","noopener")},[g0,w$]),T2=y(()=>{g0(),N?.()},[g0,N]),Q$=y(()=>{g0(),K?.()},[g0,K]),f2=y((O)=>{if(!O||O.button!==0)return;let J=O.currentTarget;if(!J||!J.dataset)return;let w=J.dataset.path;if(!w||w===".")return;if(w0.current===w)return;let k=Q0(O);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!B$(k))return;O.preventDefault(),r_.current={path:w,dragging:!1,startX:O.clientX,startY:O.clientY};let g=(r)=>{let a=r_.current;if(!a?.path)return;let u=Math.abs(r.clientX-a.startX),q_=Math.abs(r.clientY-a.startY),H0=u>4||q_>4;if(!a.dragging&&H0)a.dragging=!0,E0.current=!0,d(!0),$_("move"),E$(a.path),D$(r.clientX,r.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(a.dragging){r.preventDefault(),D$(r.clientX,r.clientY);let C$=document.elementFromPoint(r.clientX,r.clientY),V0=J$(C$)||i_();if(k0.current!==V0)W0(V0);a0(V0)}},s=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",s);let r=r_.current;if(r?.dragging&&r.path){let a=k0.current||i_(),u=h$.current;if(typeof u==="function")u(r.path,a)}r_.current={path:null,dragging:!1,startX:0,startY:0},L0.current=0,d(!1),$_(null),W0(null),F0(),l$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{E0.current=!1},0)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",s)},[J$,i_,E$,D$,l$,W0,a0,F0]),q4=y(async(O)=>{let J=Array.from(O?.target?.files||[]);if(J.length===0)return;let w=U0.current||".";if(await L$(J,w),U0.current=".",O?.target)O.target.value=""},[L$]);return L`
        <aside
            class=${`workspace-sidebar${o?" workspace-drop-active":""}`}
            data-workspace-scale=${O0}
            ref=${D0}
            onDragEnter=${j_}
            onDragOver=${_$}
            onDragLeave=${u$}
            onDrop=${L2}
        >
            <input type="file" multiple style="display:none" ref=${i0} onChange=${q4} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${v_}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(O)=>{O.stopPropagation(),P_((J)=>!J)}}
                            title="Workspace menu"
                            aria-label="Workspace menu"
                            aria-haspopup="menu"
                            aria-expanded=${__?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${__&&L`
                            <div class="workspace-menu-dropdown" ref=${T_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${r$} disabled=${U_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${n0} disabled=${U_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${c0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${B_?" active":""}`} role="menuitem" onClick=${m$}>
                                    ${B_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${Y&&L`<div class="workspace-menu-separator"></div>`}
                                ${Y&&!u_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M$} disabled=${!x0}>Open in editor</button>
                                `}
                                ${d$&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z0}>Rename selected</button>
                                `}
                                ${k$&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q2}>Download selected file</button>
                                `}
                                ${w$&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${g$}>Download selected folder (zip)</button>
                                `}
                                ${s$&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${d0}>Delete selected file</button>
                                `}

                                ${(N||K)&&L`<div class="workspace-menu-separator"></div>`}
                                ${N&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q$}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${u0} title="New file" disabled=${U_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${A$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${e0}>
                ${U_&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&L`<div class="workspace-loading">Loading…</div>`}
                ${K_&&L`<div class="workspace-error">${K_}</div>`}
                ${V&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${o_}
                        tabIndex="0"
                        onClick=${o$}
                        onDblClick=${I$}
                        onKeyDown=${Q}
                        onTouchStart=${I}
                        onTouchEnd=${S}
                        onTouchMove=${n}
                        onTouchCancel=${S}
                    >
                        ${q$.map(({node:O,depth:J})=>{let w=O.type==="dir",k=O.path===Y,g=O.path===C,s=w&&X.has(O.path),r=Q_&&O.path===Q_,a=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return L`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${k?" selected":""}${r?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*Z2.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${f2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${w?s?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${w?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${w?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${g?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${K0}
                                                value=${v}
                                                onInput=${(u)=>R(u?.target?.value||"")}
                                                onKeyDown=${(u)=>{if(u.key==="Enter")u.preventDefault(),y$();else if(u.key==="Escape")u.preventDefault(),$0()}}
                                                onBlur=${$0}
                                                onClick=${(u)=>u.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${w&&!s&&a>0&&L`
                                        <span class="workspace-count">${a}</span>
                                    `}
                                    ${w&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${x$}
                                            disabled=${U_}
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
            ${Y&&L`
                <div class="workspace-preview-splitter-h" onMouseDown=${X_} onTouchStart=${E_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${Y}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${u0} title="New file" disabled=${U_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!u_&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>x0&&x_.current?.(Y,E)}
                                    title=${m0}
                                    disabled=${!x0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${J0}
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
                            ${u_?L`
                                    <button class="workspace-download" onClick=${G0}
                                        title="Upload files to this folder" disabled=${U_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${t2(Y,B_)}
                                        title="Download folder as zip" onClick=${(O)=>O.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${w_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${N_&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&L`<div class="workspace-error">${E.error}</div>`}
                    ${u_&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${R_?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${R_?.error&&L`<div class="workspace-error">${R_.error}</div>`}
                        ${R_?.payload&&R_.payload.segments?.length>0&&L`
                            <${d5} payload=${R_.payload} />
                        `}
                        ${R_?.payload&&(!R_.payload.segments||R_.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!u_&&L`
                        <div class="workspace-preview-body" ref=${b}></div>
                    `}
                    ${x&&L`
                        <div class="workspace-download-card">
                            <${s5} mediaId=${x} />
                        </div>
                    `}
                </div>
            `}
            ${Y_&&L`
                <div class="workspace-drag-ghost" ref=${G$}>${Y_.label}</div>
            `}
        </aside>
    `}var o5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,r5=/\.(csv|tsv)$/i,a5=/\.pdf$/i,t5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,z8=/\.drawio(\.xml|\.svg|\.png)?$/i;function Y8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:V,previewTabs:q,onToggleDock:X,dockVisible:B}){let[Y,U]=T(null),C=D(null);f(()=>{if(!Y)return;let F=(x)=>{if(x.type==="keydown"&&x.key!=="Escape")return;U(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[Y]),f(()=>{let F=(x)=>{if(x.ctrlKey&&x.key==="Tab"){if(x.preventDefault(),!_.length)return;let M=_.findIndex((i)=>i.id===$);if(x.shiftKey){let i=_[(M-1+_.length)%_.length];j?.(i.id)}else{let i=_[(M+1)%_.length];j?.(i.id)}return}if((x.ctrlKey||x.metaKey)&&x.key==="w"){let M=document.querySelector(".editor-pane");if(M&&M.contains(document.activeElement)){if(x.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let m=y((F,x)=>{if(F.button===1){F.preventDefault(),Z?.(x);return}if(F.button===0)j?.(x)},[j,Z]),v=y((F,x)=>{F.preventDefault(),U({id:x,x:F.clientX,y:F.clientY})},[]),R=y((F)=>{F.preventDefault(),F.stopPropagation()},[]),E=y((F,x)=>{F.preventDefault(),F.stopPropagation(),Z?.(x)},[Z]);if(f(()=>{if(!$||!C.current)return;let F=C.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return L`
        <div class="tab-strip" ref=${C} role="tablist">
            ${_.map((F)=>L`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(x)=>m(x,F.id)}
                    onContextMenu=${(x)=>v(x,F.id)}
                >
                    ${F.pinned&&L`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${F.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${R}
                        onClick=${(x)=>E(x,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?L`<span class="tab-dirty-dot" aria-hidden="true"></span>`:L`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&L`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${X}
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
        </div>
        ${Y&&L`
            <div class="tab-context-menu" style=${{left:Y.x+"px",top:Y.y+"px"}}>
                <button onClick=${()=>{Z?.(Y.id),U(null)}}>Close</button>
                <button onClick=${()=>{N?.(Y.id),U(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),U(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(Y.id),U(null)}}>
                    ${_.find((F)=>F.id===Y.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${V&&/\.(md|mdx|markdown)$/i.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{V(Y.id),U(null)}}>
                        ${q?.has(Y.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${o5.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id),x=Y.id.split("/").pop()||"document",M="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(x);window.open(M,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${r5.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${a5.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${t5.test(Y.id)&&!z8.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${z8.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var e5=400,v1=60,W8=220,u1="mdPreviewHeight";function _j(){try{let _=localStorage.getItem(u1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=v1?$:W8}catch{return W8}}function G8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[K,z]=T(_j),V=D(null),q=D(null),X=D(""),B=D(_);return B.current=_,f(()=>{let C=()=>{let v=B.current?.()||"";if(v===X.current)return;X.current=v;try{let R=o0(v,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};C();let m=setInterval(C,e5);return()=>clearInterval(m)},[]),f(()=>{if(V.current&&Z)T$(V.current).catch(()=>{})},[Z]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(C)=>{C.preventDefault();let m=C.clientY,v=q.current?.offsetHeight||K,R=q.current?.parentElement,E=R?R.offsetHeight*0.7:500,F=C.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let x=(i)=>{let t=Math.min(Math.max(v-(i.clientY-m),v1),E);z(t)},M=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(u1,String(Math.round(q.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",M)}}
            onTouchStart=${(C)=>{C.preventDefault();let m=C.touches[0];if(!m)return;let v=m.clientY,R=q.current?.offsetHeight||K,E=q.current?.parentElement,F=E?E.offsetHeight*0.7:500,x=C.currentTarget;x.classList.add("dragging"),document.body.style.userSelect="none";let M=(t)=>{let N_=t.touches[0];if(!N_)return;t.preventDefault();let l=Math.min(Math.max(R-(N_.clientY-v),v1),F);z(l)},i=()=>{x.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(u1,String(Math.round(q.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",M),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:K+"px"}}>
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
                ref=${V}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function V8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=D(_);K.current=_;let z=D($);z.current=$;let V=D(j);V.current=j;let q=D(Z);q.current=Z,f(()=>{V.current();let X=new e2((Y,U)=>K.current(Y,U),(Y)=>z.current(Y),{chatJid:N});X.connect();let B=()=>{X.reconnectIfNeeded();let Y=typeof document<"u"?document:null;if(!Y||Y.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),X.disconnect()}},[N])}function X8(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);f(()=>{let q=G2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),f(()=>{N.current=_},[_]);let K=y(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),z=y(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await K();if(Z(X||"default"),X!=="granted"){N.current=!1,$(!1),_0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),_0("notificationsEnabled",String(q))},[K]),V=y((q,X)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(q,{body:X});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:V}}var x2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function q8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[K,z]=T(!1),V=D(!1),q=D(null),X=D(!1),B=D(null),Y=D(null),U=D(0);f(()=>{V.current=K},[K]),f(()=>{Y.current=Z},[Z]),f(()=>{U.current+=1,Y.current=null,B.current=null,X.current=!1,V.current=!1,N(null),z(!1)},[j]);let C=y(async(R=null)=>{let E=U.current;try{if(R){let F=await I4(R,50,0,j);if(E!==U.current)return;N(F.posts),z(!1)}else{let F=await D2(10,null,j);if(E!==U.current)return;N(F.posts),z(F.has_more)}}catch(F){if(E!==U.current)return;console.error("Failed to load posts:",F)}},[j]),m=y(async()=>{let R=U.current;try{let E=await D2(10,null,j);if(R!==U.current)return;N((F)=>{if(!F||F.length===0)return E.posts;return x2([...E.posts,...F])}),z((F)=>F||E.has_more)}catch(E){if(R!==U.current)return;console.error("Failed to refresh timeline:",E)}},[j]),v=y(async(R={})=>{let E=U.current,F=Y.current;if(!F||F.length===0)return;if(X.current)return;let{preserveScroll:x=!0,preserveMode:M="top",allowRepeat:i=!1}=R,t=(K_)=>{if(!x){K_();return}if(M==="top")$(K_);else _(K_)},l=F.slice().sort((K_,h)=>K_.id-h.id)[0]?.id;if(!Number.isFinite(l))return;if(!i&&B.current===l)return;X.current=!0,B.current=l;try{let K_=await D2(10,l,j);if(E!==U.current)return;if(K_.posts.length>0)t(()=>{N((h)=>x2([...K_.posts,...h||[]])),z(K_.has_more)});else z(!1)}catch(K_){if(E!==U.current)return;console.error("Failed to load more posts:",K_)}finally{if(E===U.current)X.current=!1}},[j,_,$]);return f(()=>{q.current=v},[v]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:V,loadPosts:C,refreshTimeline:m,loadMore:v,loadMoreRef:q,loadingMoreRef:X,lastBeforeIdRef:B}}function O8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,K]=T(""),[z,V]=T({text:"",totalLines:0}),[q,X]=T(null),[B,Y]=T(null),[U,C]=T(null),m=D(null),v=D(0),R=D(!1),E=D(""),F=D(""),x=D(null),M=D(null),i=D(null),t=D(null),N_=D(!1),l=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:V,pendingRequest:q,setPendingRequest:X,currentTurnId:B,setCurrentTurnId:Y,steerQueuedTurnId:U,setSteerQueuedTurnId:C,lastAgentEventRef:m,lastSilenceNoticeRef:v,isAgentRunningRef:R,draftBufferRef:E,thoughtBufferRef:F,pendingRequestRef:x,stalledPostIdRef:M,currentTurnIdRef:i,steerQueuedTurnIdRef:t,thoughtExpandedRef:N_,draftExpandedRef:l}}function B8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientX,C=$.current||280,m=B.currentTarget;m.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientX;let x=Math.min(Math.max(C+(F.clientX-U),160),600);Y.style.setProperty("--sidebar-width",`${x}px`),$.current=x},E=()=>{let F=Math.min(Math.max(C+(v-U),160),600);$.current=F,m.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",_0("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,K=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let C=U.clientX,m=$.current||280,v=B.currentTarget;v.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(F)=>{let x=F.touches[0];if(!x)return;F.preventDefault();let M=Math.min(Math.max(m+(x.clientX-C),160),600);Y.style.setProperty("--sidebar-width",`${M}px`),$.current=M},E=()=>{v.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.userSelect="",_0("sidebarWidth",String(Math.round($.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,z=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientX,C=j.current||$.current||280,m=B.currentTarget;m.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientX;let x=Math.min(Math.max(C+(F.clientX-U),200),800);Y.style.setProperty("--editor-width",`${x}px`),j.current=x},E=()=>{let F=Math.min(Math.max(C+(v-U),200),800);j.current=F,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,V=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let C=U.clientX,m=j.current||$.current||280,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let x=F.touches[0];if(!x)return;F.preventDefault();let M=Math.min(Math.max(m+(x.clientX-C),200),800);Y.style.setProperty("--editor-width",`${M}px`),j.current=M},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",_0("editorWidth",String(Math.round(j.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,q=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientY,C=Z?.current||200,m=B.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientY;let x=Math.min(Math.max(C-(F.clientY-U),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${x}px`),Z)Z.current=x;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let F=Math.min(Math.max(C-(v-U),100),window.innerHeight*0.5);if(Z)Z.current=F;m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,X=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let C=U.clientY,m=Z?.current||200,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let x=F.touches[0];if(!x)return;F.preventDefault();let M=Math.min(Math.max(m-(x.clientY-C),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${M}px`),Z)Z.current=M;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",_0("dockHeight",String(Math.round(Z?.current||m))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:V,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:X}}function L8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>p_.getTabs()),[N,K]=T(()=>p_.getActiveId()),[z,V]=T(()=>p_.getTabs().length>0);f(()=>{return p_.onChange((M,i)=>{Z(M),K(i),V(M.length>0)})},[]);let[q,X]=T(()=>new Set),B=y((M)=>{X((i)=>{let t=new Set(i);if(t.has(M))t.delete(M);else t.add(M);return t})},[]),Y=y((M)=>{X((i)=>{if(!i.has(M))return i;let t=new Set(i);return t.delete(M),t})},[]),U=y((M,i={})=>{if(!M)return;let t={path:M,mode:"edit"};try{if(!e_.resolve(t)){if(!e_.get("editor")){console.warn(`[openEditor] No pane handler for: ${M}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${M}":`,l)}let N_=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;p_.open(M,N_)},[]),C=y(()=>{let M=p_.getActiveId();if(M){let i=p_.get(M);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}p_.close(M),Y(M),$.current?.(M)}},[Y]),m=y((M)=>{let i=p_.get(M);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}p_.close(M),Y(M),$.current?.(M)},[Y]),v=y((M)=>{p_.activate(M)},[]),R=y((M)=>{let i=p_.getTabs().filter((l)=>l.id!==M&&!l.pinned),t=i.filter((l)=>l.dirty).length;if(t>0){if(!window.confirm(`${t} unsaved tab${t>1?"s":""} will be closed. Continue?`))return}let N_=i.map((l)=>l.id);p_.closeOthers(M),N_.forEach((l)=>{Y(l),$.current?.(l)})},[Y]),E=y(()=>{let M=p_.getTabs().filter((N_)=>!N_.pinned),i=M.filter((N_)=>N_.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let t=M.map((N_)=>N_.id);p_.closeAll(),t.forEach((N_)=>{Y(N_),$.current?.(N_)})},[Y]),F=y((M)=>{p_.togglePin(M)},[]),x=y(()=>{let M=p_.getActiveId();if(M)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:M}}))},[]);return f(()=>{let M=(i)=>{let{oldPath:t,newPath:N_,type:l}=i.detail||{};if(!t||!N_)return;if(l==="dir"){for(let K_ of p_.getTabs())if(K_.path===t||K_.path.startsWith(`${t}/`)){let h=`${N_}${K_.path.slice(t.length)}`;p_.rename(K_.id,h)}}else p_.rename(t,N_)};return window.addEventListener("workspace-file-renamed",M),()=>window.removeEventListener("workspace-file-renamed",M)},[]),f(()=>{let M=(i)=>{if(p_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",M),()=>window.removeEventListener("beforeunload",M)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:U,closeEditor:C,handleTabClose:m,handleTabActivate:v,handleTabCloseOthers:R,handleTabCloseAll:E,handleTabTogglePin:F,handleTabTogglePreview:B,revealInExplorer:x}}function m1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var g1=m1("warning",30000),Q8=m1("finalize",120000),p1=m1("refresh",30000),U8=30000;function F8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function J8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function H8(_=30000){let[,$]=T(0);f(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function c1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function D8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function _2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function h1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function E8(_,$={}){if(_2($))return null;if(h1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:$j(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function y8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function k8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function w8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function A8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function S2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function P8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function $j(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function i1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function l1(_){return String(_||"").trim()||"web:default"}function M8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function C8(_={}){return _2(_)&&h1(_)}function jj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Zj(_={},$={}){if(!C8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=jj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function b8(_={}){if(!C8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let Y of N)$.clearTimeout?.(Y);N.clear()},z=()=>{Z=0,Zj({window:$,document:j})},V=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},q=()=>{V();for(let Y of[80,220,420]){let U=$.setTimeout?.(()=>{N.delete(U),V()},Y);if(U!=null)N.add(U)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},B=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",q,!0),B?.addEventListener?.("resize",q),B?.addEventListener?.("scroll",q),()=>{K(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",q,!0),B?.removeEventListener?.("resize",q),B?.removeEventListener?.("scroll",q)}}function Nj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function F$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Nj($,j)}var Kj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function I8(_){return Kj.has(String(_||"").trim())}function zj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function x8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(zj(_),{detail:Z})),!0}var Yj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function S8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(_2({window:j,navigator:Z}))};N();let z=Yj.map((V)=>{try{return j.matchMedia?.(V)??null}catch{return null}}).filter(Boolean).map((V)=>{if(typeof V.addEventListener==="function")return V.addEventListener("change",N),()=>V.removeEventListener("change",N);if(typeof V.addListener==="function")return V.addListener(N),()=>V.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let V of z)V();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function T8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var d1="piclaw_btw_session";function Wj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Gj(){let _=z$(d1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var f8=x4,R8=T4,Vj=R4,v8=p4,u8=c4,m8=v4,n1=F$(K$,"getAgentContext",null),Xj=F$(K$,"getAgentModels",{current:null,models:[]}),qj=F$(K$,"getActiveChatAgents",{chats:[]}),g8=F$(K$,"getChatBranches",{chats:[]}),Oj=F$(K$,"renameChatBranch",null),Bj=F$(K$,"pruneChatBranch",null),Lj=F$(K$,"getAgentQueueState",{count:0}),Qj=F$(K$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Uj=F$(K$,"removeAgentQueueItem",{removed:!1}),Fj=F$(K$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});e_.register(O1);e_.register(E1);e_.register(D1);e_.register(y1);e_.register(k1);e_.register(w1);e_.register(P1);e_.register(C1);B1();e_.register(F1);e_.register(J1);function Jj({locationParams:_}){let $=l_(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),j=l_(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=l_(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),N=l_(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():$},[$,_]),[K,z]=T("disconnected"),[V,q]=T(()=>_2()),[X,B]=T(null),[Y,U]=T(null),[C,m]=T(!1),[v,R]=T("current"),[E,F]=T([]),[x,M]=T([]),[i,t]=T(null),{agentStatus:N_,setAgentStatus:l,agentDraft:K_,setAgentDraft:h,agentPlan:B_,setAgentPlan:c_,agentThought:o,setAgentThought:d,pendingRequest:z_,setPendingRequest:$_,currentTurnId:Y_,setCurrentTurnId:A_,steerQueuedTurnId:Q_,setSteerQueuedTurnId:k_,lastAgentEventRef:U_,lastSilenceNoticeRef:f_,isAgentRunningRef:R_,draftBufferRef:G_,thoughtBufferRef:M_,pendingRequestRef:b_,stalledPostIdRef:O0,currentTurnIdRef:V_,steerQueuedTurnIdRef:__,thoughtExpandedRef:P_,draftExpandedRef:W_}=O8(),[D_,y_]=T({}),[n_,d_]=T(null),[s_,H_]=T(null),[I_,x_]=T(!1),[N0,C_]=T(null),[D0,o_]=T([]),[K0,i0]=T([]),[U0,S_]=T(null),[B0,r_]=T([]),[z0,E0]=T(!1),[h_,y0]=T(()=>Gj()),P0=l_(()=>D0.find((G)=>G?.chat_jid===$)||null,[D0,$]),L_=l_(()=>K0.find((G)=>G?.chat_jid===$)||P0||null,[P0,K0,$]),b=L_?.root_chat_jid||P0?.root_chat_jid||$,e=Wj(v),[T_,v_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),Y0=B0.length,f0=D(new Set),M0=D([]),L0=D(new Set),k0=D(0),r0=D({inFlight:!1,lastAttemptAt:0,turnId:null});f0.current=new Set(B0.map((G)=>G.row_id)),M0.current=B0;let{notificationsEnabled:W$,notificationPermission:G$,toggleNotifications:C0,notify:R0}=X8(),[h$,l0]=T(()=>new Set),[w0,b$]=T(()=>G2("workspaceOpen",!0)),V$=D(null),{editorOpen:S0,tabStripTabs:$2,tabStripActiveId:v0,previewTabs:i$,openEditor:i_,closeEditor:J$,handleTabClose:H$,handleTabActivate:W0,handleTabCloseOthers:F0,handleTabCloseAll:a0,handleTabTogglePin:D$,handleTabTogglePreview:E$,revealInExplorer:l$}=L8({onTabClosed:(G)=>V$.current?.(G)}),R$=D(null),$0=D(null),X$=D(null),y$=D(null),b0=e_.getDockPanes().length>0,[u0,j2]=T(!1),I0=y(()=>j2((G)=>!G),[]),n$=y(()=>{i_(Q1,{label:"Terminal"})},[i_]),q$=!j&&(S0||b0&&u0);f(()=>{let G=R$.current;if(!G)return;if($0.current)$0.current.dispose(),$0.current=null;let W=v0;if(!W)return;let H={path:W,mode:"edit"},P=e_.resolve(H)||e_.get("editor");if(!P){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let A=P.mount(G,H);$0.current=A,A.onDirtyChange?.((Z_)=>{p_.setDirty(W,Z_)}),A.onSaveRequest?.(()=>{}),A.onClose?.(()=>{J$()});let p=p_.getViewState(W);if(p&&typeof A.restoreViewState==="function")requestAnimationFrame(()=>A.restoreViewState(p));if(typeof A.onViewStateChange==="function")A.onViewStateChange((Z_)=>{p_.saveViewState(W,Z_)});return requestAnimationFrame(()=>A.focus()),()=>{if($0.current===A)A.dispose(),$0.current=null}},[v0,J$]),f(()=>{let G=(W)=>{let H=W.detail?.path;if(H)i_(H)};return document.addEventListener("office-viewer:open-tab",G),document.addEventListener("drawio:open-tab",G),document.addEventListener("pdf-viewer:open-tab",G),document.addEventListener("image-viewer:open-tab",G),()=>{document.removeEventListener("office-viewer:open-tab",G),document.removeEventListener("drawio:open-tab",G),document.removeEventListener("pdf-viewer:open-tab",G),document.removeEventListener("image-viewer:open-tab",G)}},[i_]),f(()=>{let G=X$.current;if(y$.current)y$.current.dispose(),y$.current=null;if(!G||!b0||!u0)return;let W=e_.getDockPanes()[0];if(!W){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let H=W.mount(G,{mode:"view"});return y$.current=H,requestAnimationFrame(()=>H.focus?.()),()=>{if(y$.current===H)H.dispose(),y$.current=null}},[b0,u0]);let[O$,Z2]=T({name:"You",avatar_url:null,avatar_background:null}),B2=D(!1),u_=D(!1),x0=D(null),m0=D($),d$=D(new Map),s$=D($),k$=D(0),w$=D(0),g0=D({}),j0=D({name:null,avatar_url:null}),Q0=D({currentHashtag:null,searchQuery:null}),B$=D(null),I$=D(null),o$=D(0),A$=D(0),t0=D(0),v$=D(null),e0=D(null),A0=D(null),P$=D(null),Q=D(0),I=D({title:null,avatarBase:null}),S=D(null),n=y(()=>{if(S.current)clearTimeout(S.current),S.current=null;t(null)},[]);H8(30000),f(()=>{return i3()},[]),f(()=>{return S8(q)},[]),f(()=>{_0("workspaceOpen",String(w0))},[w0]),f(()=>{return b8()},[]),f(()=>{return()=>{n()}},[n]),f(()=>{if(!h_){_0(d1,"");return}_0(d1,JSON.stringify({question:h_.question||"",answer:h_.answer||"",thinking:h_.thinking||"",error:h_.error||null,status:h_.status||"success"}))},[h_]),f(()=>{g0.current=D_||{}},[D_]),f(()=>{m0.current=$},[$]),f(()=>{j0.current=O$||{name:"You",avatar_url:null,avatar_background:null}},[O$]);let X_=y((G,W,H=null)=>{if(typeof document>"u")return;let P=(G||"").trim()||"PiClaw";if(I.current.title!==P){document.title=P;let c=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(c&&c.getAttribute("content")!==P)c.setAttribute("content",P);I.current.title=P}let A=document.getElementById("dynamic-favicon");if(!A)return;let p=A.getAttribute("data-default")||A.getAttribute("href")||"/favicon.ico",Z_=W||p,F_=W?`${Z_}|${H||""}`:Z_;if(I.current.avatarBase!==F_){let c=W?`${Z_}${Z_.includes("?")?"&":"?"}v=${H||Date.now()}`:Z_;A.setAttribute("href",c),I.current.avatarBase=F_}},[]),E_=y((G)=>{if(!G)return;F((W)=>W.includes(G)?W:[...W,G])},[]),w_=y((G)=>{F((W)=>W.filter((H)=>H!==G))},[]);V$.current=w_;let J0=y(()=>{F([])},[]),p0=y((G)=>{if(!Array.isArray(G)){F([]);return}let W=[],H=new Set;for(let P of G){if(typeof P!=="string"||!P.trim())continue;let A=P.trim();if(H.has(A))continue;H.add(A),W.push(A)}F(W)},[]),j_=y((G,W=null,H="info",P=3000)=>{n(),t({title:G,detail:W||null,kind:H||"info"}),S.current=setTimeout(()=>{t((A)=>A?.title===G?null:A)},P)},[n]),_$=y((G)=>{let W=D8(G,{editorOpen:S0,resolvePane:(H)=>e_.resolve(H)});if(W.kind==="open"){i_(W.path);return}if(W.kind==="toast")j_(W.title,W.detail,W.level)},[S0,i_,j_]),u$=y(()=>{let G=v0;if(G)E_(G)},[v0,E_]),L$=y((G)=>{if(!G)return;M((W)=>W.includes(G)?W:[...W,G])},[]),$$=y(async(G,W=null)=>{let H=(A)=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.classList.add("post-highlight"),setTimeout(()=>A.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+G);if(P){H(P);return}try{let A=typeof W==="string"&&W.trim()?W.trim():$,Z_=(await S4(G,A))?.thread?.[0];if(!Z_)return;u((F_)=>{if(!F_)return[Z_];if(F_.some((c)=>c.id===Z_.id))return F_;return[...F_,Z_]}),requestAnimationFrame(()=>{setTimeout(()=>{let F_=document.getElementById("post-"+G);if(F_)H(F_)},50)})}catch(A){console.error("[scrollToMessage] Failed to fetch message",G,A)}},[$]),L2=y((G)=>{M((W)=>W.filter((H)=>H!==G))},[]),x$=y(()=>{M([])},[]),G0=y((G)=>{if(!Array.isArray(G)){M([]);return}let W=[],H=new Set;for(let P of G){if(typeof P!=="string"||!P.trim())continue;let A=P.trim();if(H.has(A))continue;H.add(A),W.push(A)}M(W)},[]),r$=y((G)=>{let W=typeof G==="string"&&G.trim()?G.trim():"Could not send your message.";j_("Compose failed",W,"error",5000)},[j_]),n0=y((G={})=>{let W=Date.now();if(U_.current=W,G.running)R_.current=!0,E0((H)=>H?H:!0);if(G.clearSilence)f_.current=0},[E0]),c0=y(()=>{if(P$.current)clearTimeout(P$.current),P$.current=null;Q.current=0},[]);f(()=>()=>{c0()},[c0]);let m$=y(()=>{c0(),l((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:W,lastActivity:H,...P}=G;return P})},[c0]),M$=y((G)=>{if(!G)return;c0();let W=Date.now();Q.current=W,l({type:G.type||"active",last_activity:!0}),P$.current=setTimeout(()=>{if(Q.current!==W)return;l((H)=>{if(!H||!(H.last_activity||H.lastActivity))return H;return null})},U8)},[c0]),Z0=y(()=>{R_.current=!1,E0(!1),U_.current=null,f_.current=0,G_.current="",M_.current="",b_.current=null,e0.current=null,V_.current=null,__.current=null,x0.current=null,r0.current={inFlight:!1,lastAttemptAt:0,turnId:null},c0(),A_(null),k_(null),P_.current=!1,W_.current=!1},[c0,A_,k_,E0]),d0=y((G)=>{if(!M8({remainingQueueCount:G,currentTurnId:V_.current,isAgentTurnActive:z0}))return;__.current=null,k_(null)},[z0,k_]),Q2=y(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),g$=y(()=>({agentStatus:N_,agentDraft:K_?{...K_}:{text:"",totalLines:0},agentPlan:B_||"",agentThought:o?{...o}:{text:"",totalLines:0},pendingRequest:z_,currentTurnId:Y_,steerQueuedTurnId:Q_,isAgentTurnActive:Boolean(z0),followupQueueItems:Array.isArray(B0)?B0.map((G)=>({...G})):[],activeModel:n_,activeThinkingLevel:s_,supportsThinking:Boolean(I_),activeModelUsage:N0,contextUsage:U0,isAgentRunning:Boolean(R_.current),wasAgentActive:Boolean(u_.current),draftBuffer:G_.current||"",thoughtBuffer:M_.current||"",lastAgentEvent:U_.current||null,lastSilenceNotice:f_.current||0,lastAgentResponse:e0.current||null,currentTurnIdRef:V_.current||null,steerQueuedTurnIdRef:__.current||null,thoughtExpanded:Boolean(P_.current),draftExpanded:Boolean(W_.current),agentStatusRef:x0.current||null,silentRecovery:{...r0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[n_,N0,s_,K_,B_,N_,o,U0,Y_,B0,z0,z_,Q_,I_]),T2=y((G)=>{let W=G||Q2();c0(),R_.current=Boolean(W.isAgentRunning),u_.current=Boolean(W.wasAgentActive),E0(Boolean(W.isAgentTurnActive)),U_.current=W.lastAgentEvent||null,f_.current=Number(W.lastSilenceNotice||0),G_.current=W.draftBuffer||"",M_.current=W.thoughtBuffer||"",b_.current=W.pendingRequest||null,e0.current=W.lastAgentResponse||null,V_.current=W.currentTurnIdRef||null,__.current=W.steerQueuedTurnIdRef||null,x0.current=W.agentStatusRef||null,r0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},P_.current=Boolean(W.thoughtExpanded),W_.current=Boolean(W.draftExpanded),l(W.agentStatus||null),h(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),c_(W.agentPlan||""),d(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),$_(W.pendingRequest||null),A_(W.currentTurnId||null),k_(W.steerQueuedTurnId||null),r_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((H)=>({...H})):[]),d_(W.activeModel||null),H_(W.activeThinkingLevel||null),x_(Boolean(W.supportsThinking)),C_(W.activeModelUsage??null),S_(W.contextUsage??null)},[c0,Q2,A_,r_,E0,k_]),Q$=y((G)=>{if(!G)return;if(V_.current===G)return;V_.current=G,r0.current={inFlight:!1,lastAttemptAt:0,turnId:G},A_(G),__.current=null,k_(null),G_.current="",M_.current="",h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),b_.current=null,e0.current=null,P_.current=!1,W_.current=!1},[A_,k_]),f2=y((G)=>{if(typeof document<"u"){let c=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&c)return}let W=e0.current;if(!W||!W.post)return;if(G&&W.turnId&&W.turnId!==G)return;let H=W.post;if(H.id&&v$.current===H.id)return;let P=String(H?.data?.content||"").trim();if(!P)return;v$.current=H.id||v$.current,e0.current=null;let A=P.replace(/\s+/g," ").slice(0,200),p=g0.current||{},F_=(H?.data?.agent_id?p[H.data.agent_id]:null)?.name||"Pi";R0(F_,A)},[R0]),q4=y(async(G,W)=>{if(G!=="thought"&&G!=="draft")return;let H=V_.current;if(G==="thought"){if(P_.current=W,H)try{await u8(H,"thought",W)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!W)return;try{let P=H?await v8(H,"thought"):null;if(P?.text)M_.current=P.text;d((A)=>({...A||{text:"",totalLines:0},fullText:M_.current||A?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:A?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(W_.current=W,H)try{await u8(H,"draft",W)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!W)return;try{let P=H?await v8(H,"draft"):null;if(P?.text)G_.current=P.text;h((A)=>({...A||{text:"",totalLines:0},fullText:G_.current||A?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:A?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),O=D(null),J=y(()=>{let G=B$.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);O.current=J;let w=y((G)=>{let W=B$.current;if(!W||typeof G!=="function"){G?.();return}let{currentHashtag:H,searchQuery:P}=Q0.current||{},A=!(P&&!H),p=A?W.scrollHeight-W.scrollTop:W.scrollTop;G(),requestAnimationFrame(()=>{let Z_=B$.current;if(!Z_)return;if(A){let F_=Math.max(Z_.scrollHeight-p,0);Z_.scrollTop=F_}else{let F_=Math.max(Z_.scrollHeight-Z_.clientHeight,0),c=Math.min(p,F_);Z_.scrollTop=c}})},[]),k=y((G)=>{let W=B$.current;if(!W||typeof G!=="function"){G?.();return}let H=W.scrollTop;G(),requestAnimationFrame(()=>{let P=B$.current;if(!P)return;let A=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(H,A)})},[]),g="Queued as a follow-up (one-at-a-time).",s="⁣",r=y((G)=>{if(!G||!Array.isArray(G))return G;let W=f0.current,H=new Set(W),P=G.filter((A)=>{if(H.has(A?.id))return!1;if(A?.data?.is_bot_message){let p=A?.data?.content;if(p===g||p===s)return!1}return!0});return P.length===G.length?G:P},[]),{posts:a,setPosts:u,hasMore:q_,setHasMore:H0,hasMoreRef:C$,loadPosts:V0,refreshTimeline:T0,loadMore:p8,loadMoreRef:O4}=q8({preserveTimelineScroll:w,preserveTimelineScrollTop:k,chatJid:$}),N2=l_(()=>r(a),[a,B0,r]),R2=y(()=>{let G=O0.current;if(!G)return;u((W)=>W?W.filter((H)=>H.id!==G):W),O0.current=null},[u]),{handleSplitterMouseDown:c8,handleSplitterTouchStart:h8,handleEditorSplitterMouseDown:i8,handleEditorSplitterTouchStart:l8,handleDockSplitterMouseDown:n8,handleDockSplitterTouchStart:d8}=B8({appShellRef:I$,sidebarWidthRef:o$,editorWidthRef:A$,dockHeightRef:t0}),s1=y(()=>{if(!R_.current)return;R_.current=!1,f_.current=0,U_.current=null,V_.current=null,A_(null),P_.current=!1,W_.current=!1;let G=(G_.current||"").trim();if(G_.current="",M_.current="",h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),b_.current=null,e0.current=null,!G){l({type:"error",title:"Response stalled - No content received"});return}let H=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),A=new Date().toISOString(),p={id:P,timestamp:A,data:{type:"agent_response",content:H,agent_id:"default",is_local_stall:!0}};O0.current=P,u((Z_)=>Z_?x2([...Z_,p]):[p]),O.current?.(),l(null)},[A_]);f(()=>{Q0.current={currentHashtag:X,searchQuery:Y}},[X,Y]);let m_=y(()=>{let G=++k0.current,W=$;Lj(W).then((H)=>{if(G!==k0.current)return;if(m0.current!==W)return;let P=L0.current,A=Array.isArray(H?.items)?H.items.map((p)=>({...p})).filter((p)=>!P.has(p.row_id)):[];if(A.length){r_((p)=>{if(p.length===A.length&&p.every((Z_,F_)=>Z_.row_id===A[F_].row_id))return p;return A});return}P.clear(),d0(0),r_((p)=>p.length===0?p:[])}).catch(()=>{if(G!==k0.current)return;if(m0.current!==W)return;r_((H)=>H.length===0?H:[])})},[d0,$,r_]),j$=y(async()=>{let G=$;try{let W=await n1(G);if(m0.current!==G)return;if(W)S_(W)}catch(W){if(m0.current!==G)return;console.warn("Failed to fetch agent context:",W)}},[$]),Z$=y(async()=>{let G=$;try{let W=await m8(G);if(m0.current!==G)return null;if(!W||W.status!=="active"||!W.data){if(u_.current){let{currentHashtag:A,searchQuery:p}=Q0.current||{};if(!A&&!p)T0()}return u_.current=!1,Z0(),x0.current=null,l(null),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),b_.current=null,W??null}u_.current=!0;let H=W.data;x0.current=H;let P=H.turn_id||H.turnId;if(P)Q$(P);if(n0({running:!0,clearSilence:!0}),m$(),l(H),W.thought&&W.thought.text)d((A)=>{if(A&&A.text&&A.text.length>=W.thought.text.length)return A;return M_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)h((A)=>{if(A&&A.text&&A.text.length>=W.draft.text.length)return A;return G_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[Z0,m$,n0,T0,Q$]),B4=y(async()=>{if(!R_.current)return null;if(b_.current)return null;let G=V_.current||null,W=r0.current,H=Date.now();if(W.inFlight)return null;if(W.turnId===G&&H-W.lastAttemptAt<p1)return null;W.inFlight=!0,W.lastAttemptAt=H,W.turnId=G;try{let{currentHashtag:P,searchQuery:A}=Q0.current||{};if(!P&&!A)await T0();return await m_(),await Z$()}finally{W.inFlight=!1}},[Z$,m_,T0]);f(()=>{let G=Math.min(1000,Math.max(100,Math.floor(g1/2))),W=setInterval(()=>{if(!R_.current)return;if(b_.current)return;let H=U_.current;if(!H)return;let P=Date.now(),A=P-H,p=P2(x0.current);if(A>=Q8){if(!p)l({type:"waiting",title:"Re-syncing after a quiet period…"});B4();return}if(A>=g1){if(P-f_.current>=p1){if(!p){let Z_=Math.floor(A/1000);l({type:"waiting",title:`Waiting for model… No events for ${Z_}s`})}f_.current=P,B4()}}},G);return()=>clearInterval(W)},[B4]);let s8=y((G)=>{if(z(G),G!=="connected"){l(null),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),b_.current=null,Z0();return}if(!B2.current){B2.current=!0,Z$(),j$();return}let{currentHashtag:W,searchQuery:H}=Q0.current;if(!W&&!H)T0();Z$(),m_(),j$()},[Z0,T0,Z$,m_,j$]),o8=y(async(G)=>{B(G),u(null),await V0(G)},[V0]),r8=y(async()=>{B(null),U(null),u(null),await V0()},[V0]),a8=y(async(G,W=v)=>{if(!G||!G.trim())return;let H=W==="root"||W==="all"?W:"current";R(H),U(G.trim()),B(null),u(null);try{let P=await f8(G.trim(),50,0,$,H,b);u(P.results),H0(!1)}catch(P){console.error("Failed to search:",P),u([])}},[$,b,v]),t8=y(()=>{m(!0),U(null),B(null),R("current"),u([])},[]),e8=y(()=>{m(!1),U(null),V0()},[V0]),Dj=y(()=>{},[]),_9=y(async(G)=>{if(!G)return;let W=G.id,H=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():$,P=N2?.filter((p)=>p?.data?.thread_id===W&&p?.id!==W).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let A=(p)=>{if(!p.length)return;l0((F_)=>{let c=new Set(F_);return p.forEach((O_)=>c.add(O_)),c}),setTimeout(()=>{if(k(()=>{u((F_)=>F_?F_.filter((c)=>!p.includes(c.id)):F_)}),l0((F_)=>{let c=new Set(F_);return p.forEach((O_)=>c.delete(O_)),c}),C$.current)O4.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await R8(W,P>0,H);if(p?.ids?.length)A(p.ids)}catch(p){let Z_=p?.message||"";if(P===0&&Z_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let c=await R8(W,!0,H);if(c?.ids?.length)A(c.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${Z_}`)}},[$,N2,k]),o1=y(async()=>{try{let G=await Vj();y_(F8(G));let W=G?.user||{};Z2((P)=>{let A=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",p=typeof W.avatar_url==="string"?W.avatar_url.trim():null,Z_=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(P.name===A&&P.avatar_url===p&&P.avatar_background===Z_)return P;return{name:A,avatar_url:p,avatar_background:Z_}});let H=(G?.agents||[]).find((P)=>P.id==="default");X_(H?.name,H?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=$,W=await n1(G);if(m0.current!==G)return;if(W)S_(W)}catch{}},[X_,$]);f(()=>{o1();let G=V2("sidebarWidth",null),W=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(o$.current=W,I$.current)I$.current.style.setProperty("--sidebar-width",`${W}px`)},[o1]);let L4=z0||N_!==null,r1=y((G)=>{if(!G||typeof G!=="object")return;let W=G.agent_id;if(!W)return;let{agent_name:H,agent_avatar:P}=G;if(!H&&P===void 0)return;let A=g0.current?.[W]||{id:W},p=A.name||null,Z_=A.avatar_url??A.avatarUrl??A.avatar??null,F_=!1,c=!1;if(H&&H!==A.name)p=H,c=!0;if(P!==void 0){let O_=typeof P==="string"?P.trim():null,a_=typeof Z_==="string"?Z_.trim():null,J_=O_||null;if(J_!==(a_||null))Z_=J_,F_=!0}if(!c&&!F_)return;if(y_((O_)=>{let J_={...O_[W]||{id:W}};if(c)J_.name=p;if(F_)J_.avatar_url=Z_;return{...O_,[W]:J_}}),W==="default")X_(p,Z_,F_?Date.now():null)},[X_]),a1=y((G)=>{if(!G||typeof G!=="object")return;let W=G.user_name??G.userName,H=G.user_avatar??G.userAvatar,P=G.user_avatar_background??G.userAvatarBackground;if(W===void 0&&H===void 0&&P===void 0)return;Z2((A)=>{let p=typeof W==="string"&&W.trim()?W.trim():A.name||"You",Z_=H===void 0?A.avatar_url:typeof H==="string"&&H.trim()?H.trim():null,F_=P===void 0?A.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(A.name===p&&A.avatar_url===Z_&&A.avatar_background===F_)return A;return{name:p,avatar_url:Z_,avatar_background:F_}})},[]),Q4=y((G)=>{if(!G||typeof G!=="object")return;let W=G.model??G.current;if(W!==void 0)d_(W);if(G.thinking_level!==void 0)H_(G.thinking_level??null);if(G.supports_thinking!==void 0)x_(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)C_(G.provider_usage??null)},[]),U2=y(()=>{let G=$;Xj(G).then((W)=>{if(m0.current!==G)return;if(W)Q4(W)}).catch(()=>{})},[Q4,$]),s0=y(()=>{qj().then((G)=>{let W=Array.isArray(G?.chats)?G.chats.filter((H)=>H&&typeof H.agent_name==="string"&&H.agent_name.trim()):[];o_(W)}).catch(()=>{})},[]),h0=y(()=>{g8(b).then((G)=>{let W=Array.isArray(G?.chats)?G.chats.filter((H)=>H&&typeof H.chat_jid==="string"&&typeof H.agent_name==="string"):[];i0(W)}).catch(()=>{})},[b]),$9=y((G)=>{let W=G?.row_id;if(W==null)return;L0.current.add(W),r_((H)=>H.filter((P)=>P?.row_id!==W)),Qj(W,l1($)).then(()=>{m_()}).catch((H)=>{console.warn("[queue] Failed to steer queued item:",H),j_("Failed to steer message","The queued message could not be sent as steering.","warning"),L0.current.delete(W),m_()})},[$,m_,r_,j_]),j9=y((G)=>{let W=G?.row_id;if(W==null)return;let H=M0.current.filter((P)=>P?.row_id!==W).length;L0.current.add(W),d0(H),r_((P)=>P.filter((A)=>A?.row_id!==W)),Uj(W,l1($)).then(()=>{m_()}).catch((P)=>{console.warn("[queue] Failed to remove queued item:",P),j_("Failed to remove message","The queued message could not be removed.","warning"),L0.current.delete(W),m_()})},[d0,$,m_,r_,j_]),U4=y((G)=>{if(!G||typeof G!=="object")return;if(s0(),h0(),G?.queued==="followup"||G?.queued==="steer"){m_();return}let W=G?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))m_()},[s0,h0,m_]),F4=y(()=>{if(A0.current)A0.current.abort(),A0.current=null;y0(null)},[]),v2=y(async(G)=>{let W=String(G||"").trim();if(!W)return j_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(A0.current)A0.current.abort();let H=new AbortController;A0.current=H,y0({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let P=await Fj(W,{signal:H.signal,chatJid:_6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(A,p)=>{if(A==="side_prompt_start")y0((Z_)=>Z_?{...Z_,status:"running"}:Z_)},onThinkingDelta:(A)=>{y0((p)=>p?{...p,thinking:`${p.thinking||""}${A||""}`}:p)},onTextDelta:(A)=>{y0((p)=>p?{...p,answer:`${p.answer||""}${A||""}`}:p)}});if(A0.current!==H)return!0;y0((A)=>A?{...A,answer:P?.result||A.answer||"",thinking:P?.thinking||A.thinking||"",model:P?.model||null,status:"success",error:null}:A)}catch(P){if(H.signal.aborted)return!0;y0((A)=>A?{...A,status:"error",error:P?.payload?.error||P?.message||"BTW request failed."}:A)}finally{if(A0.current===H)A0.current=null}return!0},[$,j_]),Z9=y(async({content:G})=>{let W=e3(G);if(!W)return!1;if(W.type==="help")return j_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return F4(),j_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await v2(W.question),!0;return!1},[F4,v2,j_]),N9=y(()=>{if(h_?.question)v2(h_.question)},[h_,v2]),K9=y(async()=>{let G=Z6(h_);if(!G)return;try{let W=await Y2("default",G,null,[],L4?"queue":null,$);U4(W),j_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){j_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[h_,U4,L4,j_]),F2=y(()=>{U2(),s0(),h0(),m_(),j$()},[U2,s0,h0,m_,j$]);f(()=>{F2();let G=setInterval(()=>{U2(),s0(),h0(),m_()},60000);return()=>clearInterval(G)},[F2,U2,s0,h0,m_]),f(()=>{h0()},[h0]),f(()=>{let G=!1;if(u(null),X)return V0(X),()=>{G=!0};if(Y)return f8(Y,50,0,$,v,b).then((W)=>{if(G)return;u(W.results),H0(!1)}).catch((W)=>{if(G)return;console.error("Failed to search:",W),u([]),H0(!1)}),()=>{G=!0};return V0(),()=>{G=!0}},[$,X,Y,v,b,V0,H0,u]),f(()=>{let G=s$.current||$;d$.current.set(G,g$())},[$,g$]),f(()=>{let G=s$.current||$;if(G===$)return;d$.current.set(G,g$()),s$.current=$,L0.current.clear(),T2(d$.current.get($)||null),m_(),Z$(),j$()},[$,Z$,j$,m_,T2,g$]);let z9=y(()=>{let{currentHashtag:G,searchQuery:W}=Q0.current||{};if(!G&&!W)T0();F2()},[F2,T0]),J4=y((G,W)=>{let H=W?.turn_id,P=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,p=P?P===$:G==="connected"||G==="workspace_update";if(p)r1(W),a1(W);if(G==="ui_theme"){l3(W);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))m$()}if(G==="connected"){l(null),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),b_.current=null,Z0();let c=$;m8(c).then((J_)=>{if(m0.current!==c)return;if(!J_||J_.status!=="active"||!J_.data)return;let K2=J_.data,t1=K2.turn_id||K2.turnId;if(t1)Q$(t1);if(n0({clearSilence:!0}),M$(K2),J_.thought&&J_.thought.text)M_.current=J_.thought.text,d({text:J_.thought.text,totalLines:J_.thought.totalLines||0});if(J_.draft&&J_.draft.text)G_.current=J_.draft.text,h({text:J_.draft.text,totalLines:J_.draft.totalLines||0})}).catch((J_)=>{console.warn("Failed to fetch agent status:",J_)});let{currentHashtag:O_,searchQuery:a_}=Q0.current||{};if(!O_&&!a_)T0();F2();return}if(G==="agent_status"){if(!p){if(W?.type==="done"||W?.type==="error")s0(),h0();return}if(W.type==="done"||W.type==="error"){if(H&&V_.current&&H!==V_.current)return;if(W.type==="done"){f2(H||V_.current);let{currentHashtag:c,searchQuery:O_}=Q0.current||{};if(!c&&!O_)T0();if(W.context_usage)S_(W.context_usage)}if(u_.current=!1,Z0(),L0.current.clear(),s0(),m_(),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),W.type==="error")l({type:"error",title:W.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(H)Q$(H);if(n0({running:!0,clearSilence:!0}),W.type==="thinking")G_.current="",M_.current="",h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0});x0.current=W,l((c)=>{if(c&&c.type===W.type&&c.title===W.title)return c;return W})}return}if(G==="agent_steer_queued"){if(!p)return;if(H&&V_.current&&H!==V_.current)return;let c=H||V_.current;if(!c)return;__.current=c,k_(c);return}if(G==="agent_followup_queued"){if(!p)return;let c=W?.row_id,O_=W?.content;if(c!=null&&typeof O_==="string"&&O_.trim())r_((a_)=>{if(a_.some((J_)=>J_?.row_id===c))return a_;return[...a_,{row_id:c,content:O_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});m_();return}if(G==="agent_followup_consumed"){if(!p)return;let c=W?.row_id;if(c!=null){let O_=M0.current.filter((a_)=>a_.row_id!==c).length;d0(O_),r_((a_)=>a_.filter((J_)=>J_.row_id!==c))}m_(),T0();return}if(G==="agent_followup_removed"){if(!p)return;let c=W?.row_id;if(c!=null){let O_=M0.current.filter((a_)=>a_.row_id!==c).length;L0.current.add(c),d0(O_),r_((a_)=>a_.filter((J_)=>J_.row_id!==c))}m_();return}if(G==="agent_draft_delta"){if(!p)return;if(H&&V_.current&&H!==V_.current)return;if(H&&!V_.current)Q$(H);if(n0({running:!0,clearSilence:!0}),W?.reset)G_.current="";if(W?.delta)G_.current+=W.delta;let c=Date.now();if(!k$.current||c-k$.current>=100){k$.current=c;let O_=G_.current,a_=c1(O_);if(W_.current)h((J_)=>({text:J_?.text||"",totalLines:a_,fullText:O_}));else h({text:O_,totalLines:a_})}return}if(G==="agent_draft"){if(!p)return;if(H&&V_.current&&H!==V_.current)return;if(H&&!V_.current)Q$(H);n0({running:!0,clearSilence:!0});let c=W.text||"",O_=W.mode||(W.kind==="plan"?"replace":"append"),a_=Number.isFinite(W.total_lines)?W.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(O_==="replace")c_(c);else c_((J_)=>(J_||"")+c);else if(!W_.current)G_.current=c,h({text:c,totalLines:a_});return}if(G==="agent_thought_delta"){if(!p)return;if(H&&V_.current&&H!==V_.current)return;if(H&&!V_.current)Q$(H);if(n0({running:!0,clearSilence:!0}),W?.reset)M_.current="";if(typeof W?.delta==="string")M_.current+=W.delta;let c=Date.now();if(P_.current&&(!w$.current||c-w$.current>=100)){w$.current=c;let O_=M_.current;d((a_)=>({text:a_?.text||"",totalLines:c1(O_),fullText:O_}))}return}if(G==="agent_thought"){if(!p)return;if(H&&V_.current&&H!==V_.current)return;if(H&&!V_.current)Q$(H);n0({running:!0,clearSilence:!0});let c=W.text||"",O_=Number.isFinite(W.total_lines)?W.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!P_.current)M_.current=c,d({text:c,totalLines:O_});return}if(G==="model_changed"){if(!p)return;if(W?.model!==void 0)d_(W.model);if(W?.thinking_level!==void 0)H_(W.thinking_level??null);if(W?.supports_thinking!==void 0)x_(Boolean(W.supports_thinking));let c=$;n1(c).then((O_)=>{if(m0.current!==c)return;if(O_)S_(O_)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(I8(G)){if(!p)return;if(x8(G,W),G==="extension_ui_notify"&&typeof W?.message==="string")j_(W.message,null,W?.type||"info");if(G==="extension_ui_error"&&typeof W?.error==="string")j_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:Z_,searchQuery:F_}=Q0.current;if(G==="agent_response"){if(!p)return;R2(),e0.current={post:W,turnId:V_.current}}if(!Z_&&!F_&&p&&(G==="new_post"||G==="new_reply"||G==="agent_response"))u((c)=>{if(!c)return[W];if(c.some((O_)=>O_.id===W.id))return c;return[...c,W]}),O.current?.();if(G==="interaction_updated"){if(!p)return;u((c)=>{if(!c)return c;if(!c.some((O_)=>O_.id===W.id))return c;return c.map((O_)=>O_.id===W.id?W:O_)})}if(G==="interaction_deleted"){if(!p)return;let c=W?.ids||[];if(c.length){k(()=>{u((J_)=>J_?J_.filter((K2)=>!c.includes(K2.id)):J_)});let{currentHashtag:O_,searchQuery:a_}=Q0.current;if(C$.current&&!O_&&!a_)O4.current?.({preserveScroll:!0,preserveMode:"top"})}}},[Z0,m$,$,O4,n0,f2,k,s0,h0,T0,R2,Q$,M$,r1,a1,U2,m_,r_]);f(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=J4,G.reset=()=>{R2(),Z0(),l(null),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null)},G.finalize=()=>s1(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[Z0,s1,J4,R2]),V8({handleSseEvent:J4,handleConnectionStatusChange:s8,loadPosts:V0,onWake:z9,chatJid:$}),f(()=>{if(!N2||N2.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let W=G.slice(5);$$(W),history.replaceState(null,"",location.pathname+location.search)},[N2,$$]);let H4=N_!==null;f(()=>{if(K!=="connected")return;let W=setInterval(()=>{let{currentHashtag:H,searchQuery:P}=Q0.current||{},A=!H&&!P;if(H4){if(A)T0();m_(),Z$(),j$()}else{if(A)T0();Z$(),j$()}},H4?15000:60000);return()=>clearInterval(W)},[K,H4,Z$,j$,m_,T0]),f(()=>{return T8(()=>{Z$(),j$(),m_()})},[Z$,j$,m_]);let Y9=y(()=>{b$((G)=>!G)},[]),W9=y((G)=>{if(typeof window>"u")return;let W=String(G||"").trim();if(!W||W===$)return;let H=S2(window.location.href,W,{chatOnly:j});window.location.assign(H)},[j,$]),G9=y(async()=>{if(typeof window>"u"||!L_?.chat_jid)return;let G=L_.agent_name||"",W=L_.display_name||"",H=window.prompt("Branch display name",W);if(H===null)return;let P=window.prompt("Agent handle (without @)",G);if(P===null)return;try{let A=await Oj(L_.chat_jid,{displayName:H,agentName:P});await Promise.allSettled([s0(),h0()]);let p=A?.branch?.agent_name||String(P||"").trim()||G;j_("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(A){let p=A instanceof Error?A.message:String(A||"Could not rename branch.");j_("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[L_,s0,h0,j_]),V9=y(async()=>{if(typeof window>"u"||!L_?.chat_jid)return;if(L_.chat_jid===(L_.root_chat_jid||L_.chat_jid)){j_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let W=L_.display_name||`@${L_.agent_name||L_.chat_jid}`;if(!window.confirm(`Prune ${W}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Bj(L_.chat_jid),await Promise.allSettled([s0(),h0()]);let P=L_.root_chat_jid||"web:default";j_("Branch pruned",`${W} has been archived.`,"info",3000);let A=S2(window.location.href,P,{chatOnly:j});window.location.assign(A)}catch(P){let A=P instanceof Error?P.message:String(P||"Could not prune branch.");j_("Could not prune branch",A||"Could not prune branch.","warning",5000)}},[j,L_,s0,h0,j_]);f(()=>{if(!Z||typeof window>"u")return;let G=!1;return(async()=>{try{v_({status:"running",message:"Preparing a new chat branch…"});let W=await s2(N);if(G)return;let H=W?.branch,P=typeof H?.chat_jid==="string"&&H.chat_jid.trim()?H.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");let A=S2(window.location.href,P,{chatOnly:!0});window.location.replace(A)}catch(W){if(G)return;v_({status:"error",message:i1(W)})}})(),()=>{G=!0}},[Z,N]);let X9=y(async()=>{if(typeof window>"u"||V)return;let G=E8($);if(!G){j_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let H=P8(window.location.href,$,{chatOnly:!0});if(!window.open(H,G.target))j_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=y8(G);if(!W){j_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}k8(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let P=(await s2($))?.branch,A=typeof P?.chat_jid==="string"&&P.chat_jid.trim()?P.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let Z_=await f4();o_(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}try{let Z_=await g8(b);i0(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}let p=S2(window.location.href,A,{chatOnly:!0});w8(W,p)}catch(H){A8(W),j_("Could not open branch window",i1(H),"error",5000)}},[$,b,V,j_]);f(()=>{if(!S0)return;if(typeof window>"u")return;let G=I$.current;if(!G)return;if(!A$.current){let W=V2("editorWidth",null),H=o$.current||280;A$.current=Number.isFinite(W)?W:H}if(G.style.setProperty("--editor-width",`${A$.current}px`),!t0.current){let W=V2("dockHeight",null);t0.current=Number.isFinite(W)?W:200}G.style.setProperty("--dock-height",`${t0.current}px`)},[S0]),f(()=>{if(!b0||j)return;let G=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),I0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[I0,b0,j]);let q9=Boolean(Q_&&Q_===(N_?.turn_id||Y_));if(Z)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${T_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${T_.message}</p>
                    </div>
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${w0?"":" workspace-collapsed"}${S0?" editor-open":""}${j?" chat-only":""}`} ref=${I$}>
            ${!j&&L`
                <${K8}
                    onFileSelect=${E_}
                    visible=${w0}
                    active=${w0||S0}
                    onOpenEditor=${i_}
                    onOpenTerminalTab=${n$}
                    onToggleTerminal=${b0?I0:void 0}
                    terminalVisible=${Boolean(b0&&u0)}
                />
                <button
                    class=${`workspace-toggle-tab${w0?" open":" closed"}`}
                    onClick=${Y9}
                    title=${w0?"Hide workspace":"Show workspace"}
                    aria-label=${w0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${c8} onTouchStart=${h8}></div>
            `}
            ${q$&&L`
                <div class="editor-pane-container">
                    ${S0&&L`
                        <${Y8}
                            tabs=${$2}
                            activeId=${v0}
                            onActivate=${W0}
                            onClose=${H$}
                            onCloseOthers=${F0}
                            onCloseAll=${a0}
                            onTogglePin=${D$}
                            onTogglePreview=${E$}
                            previewTabs=${i$}
                            onToggleDock=${b0?I0:void 0}
                            dockVisible=${b0&&u0}
                        />
                    `}
                    ${S0&&L`<div class="editor-pane-host" ref=${R$}></div>`}
                    ${S0&&v0&&i$.has(v0)&&L`
                        <${G8}
                            getContent=${()=>$0.current?.getContent?.()}
                            path=${v0}
                            onClose=${()=>E$(v0)}
                        />
                    `}
                    ${b0&&u0&&L`<div class="dock-splitter" onMouseDown=${n8} onTouchStart=${d8}></div>`}
                    ${b0&&L`<div class=${`dock-panel${u0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${I0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${X$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${i8} onTouchStart=${l8}></div>
            `}
            <div class="container">
                ${Y&&J8()&&L`<div class="search-results-spacer"></div>`}
                ${j&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${L_?.display_name||L_?.agent_name?`@${L_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${L_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${K0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(G)=>W9(G.currentTarget.value)}
                                    >
                                        ${K0.map((G)=>L`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${`@${G.agent_name}${G.display_name?` — ${G.display_name}`:""}${G.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${L_?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${G9}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${L_?.chat_jid&&L_.chat_jid!==(L_.root_chat_jid||L_.chat_jid)&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${V9}
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
                ${(X||Y)&&L`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${r8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${X?`#${X}`:`Search: ${Y} · ${e}`}</span>
                    </div>
                `}
                <${A6}
                    posts=${N2}
                    hasMore=${q_}
                    onLoadMore=${p8}
                    timelineRef=${B$}
                    onHashtagClick=${o8}
                    onMessageRef=${L$}
                    onScrollToMessage=${$$}
                    onFileRef=${_$}
                    onPostClick=${void 0}
                    onDeletePost=${_9}
                    emptyMessage=${X?`No posts with #${X}`:Y?`No results for "${Y}"`:void 0}
                    agents=${D_}
                    user=${O$}
                    reverse=${!(Y&&!X)}
                    removingPostIds=${h$}
                    searchQuery=${Y}
                />
                <${X6}
                    status=${N_}
                    draft=${K_}
                    plan=${B_}
                    thought=${o}
                    pendingRequest=${z_}
                    intent=${i}
                    turnId=${Y_}
                    steerQueued=${q9}
                    onPanelToggle=${q4}
                />
                <${N6}
                    session=${h_}
                    onClose=${F4}
                    onRetry=${N9}
                    onInject=${K9}
                />
                <${T3}
                    onPost=${()=>{V0(),J()}}
                    onFocus=${J}
                    searchMode=${C}
                    searchScope=${v}
                    onSearch=${a8}
                    onSearchScopeChange=${R}
                    onEnterSearch=${t8}
                    onExitSearch=${e8}
                    fileRefs=${E}
                    onRemoveFileRef=${w_}
                    onClearFileRefs=${J0}
                    onSetFileRefs=${p0}
                    messageRefs=${x}
                    onRemoveMessageRef=${L2}
                    onClearMessageRefs=${x$}
                    onSetMessageRefs=${G0}
                    activeEditorPath=${j?null:v0}
                    onAttachEditorFile=${j?void 0:u$}
                    onOpenFilePill=${_$}
                    followupQueueCount=${Y0}
                    followupQueueItems=${B0}
                    onInjectQueuedFollowup=${$9}
                    onRemoveQueuedFollowup=${j9}
                    onSubmitIntercept=${Z9}
                    onMessageResponse=${U4}
                    onSubmitError=${r$}
                    onPopOutChat=${V?void 0:X9}
                    isAgentActive=${L4}
                    activeChatAgents=${D0}
                    currentChatJid=${$}
                    connectionStatus=${K}
                    activeModel=${n_}
                    modelUsage=${N0}
                    thinkingLevel=${s_}
                    supportsThinking=${I_}
                    contextUsage=${U0}
                    notificationsEnabled=${W$}
                    notificationPermission=${G$}
                    onToggleNotifications=${C0}
                    onModelChange=${d_}
                    onModelStateChange=${Q4}
                />
                <${q6}
                    request=${z_}
                    onRespond=${()=>{$_(null),b_.current=null}}
                />
            </div>
        </div>
    `}function Hj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return L`<${Jj} locationParams=${_} />`}y3(L`<${Hj} />`,document.getElementById("app"));

//# debugId=520DEBFA8A8875A264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
