var X9=Object.defineProperty;var q9=(_)=>_;function L9(_,$){this[_]=q9.bind(null,$)}var B9=(_,$)=>{for(var j in $)X9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:L9.bind($,j)})};var O9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var c2,a_,W3,Q9,T$,r1,V3,X3,q3,y4,J4,H4,U9,m2={},g2=[],F9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h2=Array.isArray;function w$(_,$){for(var j in $)_[j]=$[j];return _}function k4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function L3(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?c2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return R2(_,z,Z,N,null)}function R2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++W3:N,__i:-1,__u:0};return N==null&&a_.vnode!=null&&a_.vnode(K),K}function i2(_){return _.children}function v2(_,$){this.props=_,this.context=$}function _2(_,$){if($==null)return _.__?_2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?_2(_):null}function J9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=w$({},$);K.__v=$.__v+1,a_.vnode&&a_.vnode(K),A4(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?_2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,U3(Z,K,N),$.__e=$.__=null,K.__e!=j&&B3(K)}}function B3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),B3(_)}function a1(_){(!_.__d&&(_.__d=!0)&&T$.push(_)&&!p2.__r++||r1!=a_.debounceRendering)&&((r1=a_.debounceRendering)||V3)(p2)}function p2(){try{for(var _,$=1;T$.length;)T$.length>$&&T$.sort(X3),_=T$.shift(),$=T$.length,J9(_)}finally{T$.length=p2.__r=0}}function O3(_,$,j,Z,N,K,z,W,q,V,B){var Y,F,A,u,v,R,P,U=Z&&Z.__k||g2,C=$.length;for(q=H9(j,$,U,q,C),Y=0;Y<C;Y++)(A=j.__k[Y])!=null&&(F=A.__i!=-1&&U[A.__i]||m2,A.__i=Y,R=A4(_,A,F,N,K,z,W,q,V,B),u=A.__e,A.ref&&F.ref!=A.ref&&(F.ref&&w4(F.ref,null,A),B.push(A.ref,A.__c||u,A)),v==null&&u!=null&&(v=u),(P=!!(4&A.__u))||F.__k===A.__k?q=Q3(A,q,_,P):typeof A.type=="function"&&R!==void 0?q=R:u&&(q=u.nextSibling),A.__u&=-7);return j.__e=v,q}function H9(_,$,j,Z,N){var K,z,W,q,V,B=j.length,Y=B,F=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=R2(null,z,null,null,null):h2(z)?z=_.__k[K]=R2(i2,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=R2(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,q=K+F,z.__=_,z.__b=_.__b+1,W=null,(V=z.__i=D9(z,j,q,Y))!=-1&&(Y--,(W=j[V])&&(W.__u|=2)),W==null||W.__v==null?(V==-1&&(N>B?F--:N<B&&F++),typeof z.type!="function"&&(z.__u|=4)):V!=q&&(V==q-1?F--:V==q+1?F++:(V>q?F--:F++,z.__u|=4))):_.__k[K]=null;if(Y)for(K=0;K<B;K++)(W=j[K])!=null&&(2&W.__u)==0&&(W.__e==Z&&(Z=_2(W)),J3(W,W));return Z}function Q3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=Q3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=_2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function D9(_,$,j,Z){var N,K,z,W=_.key,q=_.type,V=$[j],B=V!=null&&(2&V.__u)==0;if(V===null&&W==null||B&&W==V.key&&q==V.type)return j;if(Z>(B?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((V=$[z=N>=0?N--:K++])!=null&&(2&V.__u)==0&&W==V.key&&q==V.type)return z}return-1}function t1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||F9.test($)?j:j+"px"}function f2(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||t1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||t1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(q3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=y4,_.addEventListener($,K?H4:J4,K)):_.removeEventListener($,K?H4:J4,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(W){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function e1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=y4++;else if($.t<j.u)return;return j(a_.event?a_.event($):$)}}}function A4(_,$,j,Z,N,K,z,W,q,V){var B,Y,F,A,u,v,R,P,U,C,w,h,e,Z_,n,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),K=[W=$.__e=j.__e]),(B=a_.__b)&&B($);_:if(typeof N_=="function")try{if(P=$.props,U=N_.prototype&&N_.prototype.render,C=(B=N_.contextType)&&Z[B.__c],w=B?C?C.props.value:B.__:Z,j.__c?R=(Y=$.__c=j.__c).__=Y.__E:(U?$.__c=Y=new N_(P,w):($.__c=Y=new v2(P,w),Y.constructor=N_,Y.render=y9),C&&C.sub(Y),Y.state||(Y.state={}),Y.__n=Z,F=Y.__d=!0,Y.__h=[],Y._sb=[]),U&&Y.__s==null&&(Y.__s=Y.state),U&&N_.getDerivedStateFromProps!=null&&(Y.__s==Y.state&&(Y.__s=w$({},Y.__s)),w$(Y.__s,N_.getDerivedStateFromProps(P,Y.__s))),A=Y.props,u=Y.state,Y.__v=$,F)U&&N_.getDerivedStateFromProps==null&&Y.componentWillMount!=null&&Y.componentWillMount(),U&&Y.componentDidMount!=null&&Y.__h.push(Y.componentDidMount);else{if(U&&N_.getDerivedStateFromProps==null&&P!==A&&Y.componentWillReceiveProps!=null&&Y.componentWillReceiveProps(P,w),$.__v==j.__v||!Y.__e&&Y.shouldComponentUpdate!=null&&Y.shouldComponentUpdate(P,Y.__s,w)===!1){$.__v!=j.__v&&(Y.props=P,Y.state=Y.__s,Y.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(c){c&&(c.__=$)}),g2.push.apply(Y.__h,Y._sb),Y._sb=[],Y.__h.length&&z.push(Y);break _}Y.componentWillUpdate!=null&&Y.componentWillUpdate(P,Y.__s,w),U&&Y.componentDidUpdate!=null&&Y.__h.push(function(){Y.componentDidUpdate(A,u,v)})}if(Y.context=w,Y.props=P,Y.__P=_,Y.__e=!1,h=a_.__r,e=0,U)Y.state=Y.__s,Y.__d=!1,h&&h($),B=Y.render(Y.props,Y.state,Y.context),g2.push.apply(Y.__h,Y._sb),Y._sb=[];else do Y.__d=!1,h&&h($),B=Y.render(Y.props,Y.state,Y.context),Y.state=Y.__s;while(Y.__d&&++e<25);Y.state=Y.__s,Y.getChildContext!=null&&(Z=w$(w$({},Z),Y.getChildContext())),U&&!F&&Y.getSnapshotBeforeUpdate!=null&&(v=Y.getSnapshotBeforeUpdate(A,u)),Z_=B!=null&&B.type===i2&&B.key==null?F3(B.props.children):B,W=O3(_,h2(Z_)?Z_:[Z_],$,j,Z,N,K,z,W,q,V),Y.base=$.__e,$.__u&=-161,Y.__h.length&&z.push(Y),R&&(Y.__E=Y.__=null)}catch(c){if($.__v=null,q||K!=null)if(c.then){for($.__u|=q?160:128;W&&W.nodeType==8&&W.nextSibling;)W=W.nextSibling;K[K.indexOf(W)]=null,$.__e=W}else{for(n=K.length;n--;)k4(K[n]);D4($)}else $.__e=j.__e,$.__k=j.__k,c.then||D4($);a_.__e(c,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):W=$.__e=E9(j.__e,$,j,Z,N,K,z,q,V);return(B=a_.diffed)&&B($),128&$.__u?void 0:W}function D4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(D4))}function U3(_,$,j){for(var Z=0;Z<j.length;Z++)w4(j[Z],j[++Z],j[++Z]);a_.__c&&a_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){a_.__e(K,N.__v)}})}function F3(_){return typeof _!="object"||_==null||_.__b>0?_:h2(_)?_.map(F3):w$({},_)}function E9(_,$,j,Z,N,K,z,W,q){var V,B,Y,F,A,u,v,R=j.props||m2,P=$.props,U=$.type;if(U=="svg"?N="http://www.w3.org/2000/svg":U=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(V=0;V<K.length;V++)if((A=K[V])&&"setAttribute"in A==!!U&&(U?A.localName==U:A.nodeType==3)){_=A,K[V]=null;break}}if(_==null){if(U==null)return document.createTextNode(P);_=document.createElementNS(N,U,P.is&&P),W&&(a_.__m&&a_.__m($,K),W=!1),K=null}if(U==null)R===P||W&&_.data==P||(_.data=P);else{if(K=K&&c2.call(_.childNodes),!W&&K!=null)for(R={},V=0;V<_.attributes.length;V++)R[(A=_.attributes[V]).name]=A.value;for(V in R)A=R[V],V=="dangerouslySetInnerHTML"?Y=A:V=="children"||(V in P)||V=="value"&&("defaultValue"in P)||V=="checked"&&("defaultChecked"in P)||f2(_,V,null,A,N);for(V in P)A=P[V],V=="children"?F=A:V=="dangerouslySetInnerHTML"?B=A:V=="value"?u=A:V=="checked"?v=A:W&&typeof A!="function"||R[V]===A||f2(_,V,A,R[V],N);if(B)W||Y&&(B.__html==Y.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(Y&&(_.innerHTML=""),O3($.type=="template"?_.content:_,h2(F)?F:[F],$,j,Z,U=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&_2(j,0),W,q),K!=null)for(V=K.length;V--;)k4(K[V]);W||(V="value",U=="progress"&&u==null?_.removeAttribute("value"):u!=null&&(u!==_[V]||U=="progress"&&!u||U=="option"&&u!=R[V])&&f2(_,V,u,R[V],N),V="checked",v!=null&&v!=_[V]&&f2(_,V,v,R[V],N))}return _}function w4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){a_.__e(N,j)}}function J3(_,$,j){var Z,N;if(a_.unmount&&a_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||w4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){a_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&J3(Z[N],$,j||typeof _.type!="function");j||k4(_.__e),_.__c=_.__=_.__e=void 0}function y9(_,$,j){return this.constructor(_,j)}function H3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),a_.__&&a_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],A4($,_=(!Z&&j||$).__k=L3(i2,null,[_]),N||m2,m2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?c2.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),U3(K,_,z)}c2=g2.slice,a_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(W){_=W}throw _}},W3=0,Q9=function(_){return _!=null&&_.constructor===void 0},v2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=w$({},this.state),typeof _=="function"&&(_=_(w$({},j),this.props)),_&&w$(j,_),_!=null&&this.__v&&($&&this._sb.push($),a1(this))},v2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),a1(this))},v2.prototype.render=i2,T$=[],V3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,X3=function(_,$){return _.__v.__b-$.__v.__b},p2.__r=0,q3=/(PointerCapture)$|Capture$/i,y4=0,J4=e1(!1),H4=e1(!0),U9=0;var O2,L0,F4,_3,Q2=0,D3=[],q0=a_,$3=q0.__b,j3=q0.__r,Z3=q0.diffed,N3=q0.__c,K3=q0.unmount,z3=q0.__;function P4(_,$){q0.__h&&q0.__h(L0,_,Q2||$),Q2=0;var j=L0.__H||(L0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return Q2=1,k9(y3,_)}function k9(_,$,j){var Z=P4(O2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):y3(void 0,$),function(W){var q=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(q,W);q!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=L0,!L0.__f)){var N=function(W,q,V){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(F){return F.__c});if(B.every(function(F){return!F.__N}))return!K||K.call(this,W,q,V);var Y=Z.__c.props!==W;return B.some(function(F){if(F.__N){var A=F.__[0];F.__=F.__N,F.__N=void 0,A!==F.__[0]&&(Y=!0)}}),K&&K.call(this,W,q,V)||Y};L0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=L0;L0.componentWillUpdate=function(W,q,V){if(this.__e){var B=K;K=void 0,N(W,q,V),K=B}z&&z.call(this,W,q,V)},L0.shouldComponentUpdate=N}return Z.__N||Z.__}function f(_,$){var j=P4(O2++,3);!q0.__s&&E3(j.__H,$)&&(j.__=_,j.u=$,L0.__H.__h.push(j))}function D(_){return Q2=5,t_(function(){return{current:_}},[])}function t_(_,$){var j=P4(O2++,7);return E3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function y(_,$){return Q2=8,t_(function(){return _},$)}function A9(){for(var _;_=D3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(u2),$.__h.some(E4),$.__h=[]}catch(j){$.__h=[],q0.__e(j,_.__v)}}}q0.__b=function(_){L0=null,$3&&$3(_)},q0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),z3&&z3(_,$)},q0.__r=function(_){j3&&j3(_),O2=0;var $=(L0=_.__c).__H;$&&(F4===L0?($.__h=[],L0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(u2),$.__h.some(E4),$.__h=[],O2=0)),F4=L0},q0.diffed=function(_){Z3&&Z3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(D3.push($)!==1&&_3===q0.requestAnimationFrame||((_3=q0.requestAnimationFrame)||w9)(A9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),F4=L0=null},q0.__c=function(_,$){$.some(function(j){try{j.__h.some(u2),j.__h=j.__h.filter(function(Z){return!Z.__||E4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],q0.__e(Z,j.__v)}}),N3&&N3(_,$)},q0.unmount=function(_){K3&&K3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{u2(Z)}catch(N){$=N}}),j.__H=void 0,$&&q0.__e($,j.__v))};var Y3=typeof requestAnimationFrame=="function";function w9(_){var $,j=function(){clearTimeout(Z),Y3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);Y3&&($=requestAnimationFrame(j))}function u2(_){var $=L0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L0=$}function E4(_){var $=L0;_.__c=_.__(),L0=$}function E3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function y3(_,$){return typeof $=="function"?$(_):$}var k3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],W=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=W:z===4?Z[1]=Object.assign(Z[1]||{},W):z===5?(Z[1]=Z[1]||{})[$[++K]]=W:z===6?Z[1][$[++K]]+=W+"":z?(N=_.apply(W,k3(_,W,j,["",null])),Z.push(N),W[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(W)}return Z},G3=new Map;function P9(_){var $=G3.get(this);return $||($=new Map,G3.set(this,$)),($=k3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",W="",q=[0],V=function(F){K===1&&(F||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,F,z):K===3&&(F||z)?(q.push(3,F,z),K=2):K===2&&z==="..."&&F?q.push(4,F,0):K===2&&z&&!F?q.push(5,0,!0,z):K>=5&&((z||!F&&K===5)&&(q.push(K,0,z,N),K=6),F&&(q.push(K,F,0,N),K=6)),z=""},B=0;B<j.length;B++){B&&(K===1&&V(),V(B));for(var Y=0;Y<j[B].length;Y++)Z=j[B][Y],K===1?Z==="<"?(V(),q=[q],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:W?Z===W?W="":z+=Z:Z==='"'||Z==="'"?W=Z:Z===">"?(V(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[B][Y+1]===">")?(V(),K===3&&(q=q[0]),K=q,(q=q[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,q=q[0])}return V(),q}(_)),$),arguments,[])).length>1?$:$[0]}var O=P9.bind(L3);var _$={};B9(_$,{uploadWorkspaceFile:()=>d2,uploadMedia:()=>f4,updateWorkspaceFile:()=>p9,submitAdaptiveCardAction:()=>R4,streamSidePrompt:()=>m9,steerAgentQueueItem:()=>u9,setWorkspaceVisibility:()=>H2,setAgentThoughtVisibility:()=>m4,sendPeerAgentMessage:()=>T9,sendAgentMessage:()=>$2,searchPosts:()=>C4,respondToAgentRequest:()=>n2,renameWorkspaceFile:()=>n4,renameChatBranch:()=>I9,removeAgentQueueItem:()=>v9,pruneChatBranch:()=>x9,moveWorkspaceEntry:()=>d4,getWorkspaceTree:()=>J2,getWorkspaceRawUrl:()=>s2,getWorkspaceFile:()=>h4,getWorkspaceDownloadUrl:()=>o2,getWorkspaceBranch:()=>g9,getTimeline:()=>U2,getThumbnailUrl:()=>g4,getThread:()=>b4,getPostsByHashtag:()=>M4,getMediaUrl:()=>L$,getMediaText:()=>p4,getMediaInfo:()=>j2,getMediaBlob:()=>c4,getChatBranches:()=>S9,getAgents:()=>x4,getAgentThought:()=>u4,getAgentStatus:()=>T4,getAgentQueueState:()=>R9,getAgentModels:()=>F2,getAgentContext:()=>f9,getActiveChatAgents:()=>I4,forkChatBranch:()=>l2,deleteWorkspaceFile:()=>s4,deletePost:()=>S4,createWorkspaceFile:()=>l4,createReply:()=>b9,createPost:()=>C9,attachWorkspaceFile:()=>i4,addToWhitelist:()=>v4,SSEClient:()=>r2});async function p_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function A3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function M9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:W}=await j.read();if(W)break;N+=Z.decode(z,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let V of q){let B=A3(V);if(B)$(B.event,B.data)}}N+=Z.decode();let K=A3(N);if(K)$(K.event,K.data)}async function U2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return p_(Z)}async function M4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return p_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function C4(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",W=N?`&scope=${encodeURIComponent(N)}`:"",q=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return p_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${W}${q}`)}async function b4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return p_(`/thread/${_}${j}`)}async function C9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return p_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function b9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return p_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function S4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return p_(N,{method:"DELETE"})}async function $2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return p_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function I4(){return p_("/agent/active-chats")}async function S9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return p_(`/agent/branches${$}`)}async function l2(_,$={}){return p_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function I9(_,$={}){return p_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function x9(_){return p_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function T9(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return p_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function x4(){return p_("/agent/roster")}async function T4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p_(`/agent/status${$}`)}async function f9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p_(`/agent/context${$}`)}async function R9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p_(`/agent/queue-state${$}`)}async function v9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function u9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function F2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p_(`/agent/models${$}`)}async function f4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function n2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function R4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function m9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await M9(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function v4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function u4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return p_(j)}async function m4(_,$,j){return p_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function L$(_){return`/media/${_}`}function g4(_){return`/media/${_}/thumbnail`}async function j2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function p4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function c4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function J2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return p_(Z)}async function g9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return p_($)}async function h4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return p_(N)}async function p9(_,$){return p_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function i4(_){return p_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function d2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",W=await fetch(""+z,{method:"POST",body:Z});if(!W.ok){let q=await W.json().catch(()=>({error:"Upload failed"})),V=Error(q.error||`HTTP ${W.status}`);throw V.status=W.status,V.code=q.code,V}return W.json()}async function l4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function n4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function d4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function s4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return p_($,{method:"DELETE"})}async function H2(_,$=!1){return p_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function s2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function o2(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class r2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function $$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function j0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function Z2(_,$=!1){let j=$$(_);if(j===null)return $;return j==="true"}function N2(_,$=null){let j=$$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function a2(_){return String(_||"").trim().toLowerCase()}function o4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return a2($[1]||"")}function w3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=a2(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function P3(_,$,j={}){let Z=o4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return w3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return a2(K?.agent_name).startsWith(Z)})}function r4(_){let $=a2(_);return $?`@${$} `:""}function M3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return w3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function C3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function B$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let W=`${_}-file-pill`,q=`${_}-file-name`,V=`${_}-file-remove`,B=z==="message"?O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return O`
    <span class=${W} title=${j||$} onClick=${N}>
      ${B}
      <span class=${q}>${$}</span>
      ${Z&&O`
        <button
          class=${V}
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
  `}var c9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function h9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${b3(j)} / ${b3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,W=$/100*z,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return O`
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
                    stroke-dasharray=${`${W} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function b3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function S3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:W,fileRefs:q=[],onRemoveFileRef:V,onClearFileRefs:B,messageRefs:Y=[],onRemoveMessageRef:F,onClearMessageRefs:A,activeModel:u=null,modelUsage:v=null,thinkingLevel:R=null,supportsThinking:P=!1,contextUsage:U=null,notificationsEnabled:C=!1,notificationPermission:w="default",onToggleNotifications:h,onModelChange:e,onModelStateChange:Z_,activeEditorPath:n=null,onAttachEditorFile:N_,onOpenFilePill:c,followupQueueItems:q_=[],onInjectQueuedFollowup:n_,onRemoveQueuedFollowup:r,onSubmitIntercept:s,onMessageResponse:z_,onPopOutChat:$_,isAgentActive:G_=!1,activeChatAgents:w_=[],currentChatJid:F_="web:default"}){let[B_,O_]=T(""),[E_,S_]=T(""),[y_,I_]=T([]),[Z0,K0]=T(!1),[Y_,a]=T([]),[k_,W_]=T(0),[x_,A_]=T(!1),[T_,C_]=T([]),[s_,f_]=T(0),[o_,b_]=T(!1),[c_,R_]=T(!1),[G0,W0]=T(!1),[b0,c0]=T([]),[y0,u_]=T(!1),[U0,_0]=T(0),m_=D(null),k0=D(null),d_=D(null),F0=D(null),S0=D(null),U_=D(null),I=D(0),__=200,P_=(Q)=>{let S=new Set,x=[];for(let d of Q||[]){if(typeof d!=="string")continue;let V_=d.trim();if(!V_||S.has(V_))continue;S.add(V_),x.push(V_)}return x},h_=()=>{let Q=$$("piclaw_compose_history");if(!Q)return[];try{let S=JSON.parse(Q);if(!Array.isArray(S))return[];return P_(S)}catch{return[]}},B0=(Q)=>{j0("piclaw_compose_history",JSON.stringify(Q))},I0=D(h_()),A0=D(-1),N0=D(""),w0=B_.trim()||y_.length>0||q.length>0||Y.length>0,d0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),Z$=typeof window<"u"&&typeof Notification<"u",H$=typeof window<"u"?Boolean(window.isSecureContext):!1,K$=Z$&&H$&&w!=="denied",C$=w==="granted"&&C,h0=C$?"Disable notifications":"Enable notifications",V0=M3(w_,{currentChatJid:F_,limit:4}),b$=V0.length>0,s0=!j&&C3({footerWidth:U0,visibleAgentCount:V0.length,hasContextIndicator:Boolean(U&&U.percent!=null)}),J0=u||"",R$=P&&R?` (${R})`:"",x0=R$.trim()?`${R}`:"",v$=typeof v?.hint_short==="string"?v.hint_short.trim():"",$0=[x0||null,v$||null].filter(Boolean).join(" • "),z$=[J0?`Current model: ${J0}${R$}`:null,v?.plan?`Plan: ${v.plan}`:null,v$||null,v?.primary?.reset_description||null,v?.secondary?.reset_description||null].filter(Boolean),Y$=c_?"Switching model…":z$.join(" • ")||`Current model: ${J0}${R$} (tap to open model picker)`,z0=(Q)=>{if(!Q||typeof Q!=="object")return;let S=Q.model??Q.current;if(typeof Z_==="function")Z_({model:S??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(S&&typeof e==="function")e(S)},H0=(Q)=>{let S=Q||m_.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},o0=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let M_=0;M_<x.length;M_+=1)if(x[M_].trim()==="Files:"&&x[M_+1]&&/^\s*-\s+/.test(x[M_+1])){d=M_;break}if(d===-1)return{content:Q,fileRefs:[]};let V_=[],Q_=d+1;for(;Q_<x.length;Q_+=1){let M_=x[Q_];if(/^\s*-\s+/.test(M_))V_.push(M_.replace(/^\s*-\s+/,"").trim());else if(!M_.trim())break;else break}if(V_.length===0)return{content:Q,fileRefs:[]};let L_=x.slice(0,d),Y0=x.slice(Q_);return{content:[...L_,...Y0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:V_}},D$=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let M_=0;M_<x.length;M_+=1)if(x[M_].trim()==="Referenced messages:"&&x[M_+1]&&/^\s*-\s+/.test(x[M_+1])){d=M_;break}if(d===-1)return{content:Q,messageRefs:[]};let V_=[],Q_=d+1;for(;Q_<x.length;Q_+=1){let M_=x[Q_];if(/^\s*-\s+/.test(M_)){let u0=M_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(u0)V_.push(u0[1])}else if(!M_.trim())break;else break}if(V_.length===0)return{content:Q,messageRefs:[]};let L_=x.slice(0,d),Y0=x.slice(Q_);return{content:[...L_,...Y0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:V_}},E$=(Q)=>{let S=o0(Q||""),x=D$(S.content||"");return{text:x.content||"",fileRefs:S.fileRefs,messageRefs:x.messageRefs}},u$=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){A_(!1),a([]);return}let S=Q.toLowerCase().split(" ")[0];if(S.length<1){A_(!1),a([]);return}let x=c9.filter((d)=>d.name.startsWith(S)||d.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(x.length>0&&!(x.length===1&&x[0].name===S))b_(!1),C_([]),a(x),W_(0),A_(!0);else A_(!1),a([])},S$=(Q)=>{let S=B_,x=S.indexOf(" "),d=x>=0?S.slice(x):"",V_=Q.name+d;O_(V_),A_(!1),a([]),requestAnimationFrame(()=>{let Q_=m_.current;if(!Q_)return;let L_=V_.length;Q_.selectionStart=L_,Q_.selectionEnd=L_,Q_.focus()})},O0=(Q)=>{if(o4(Q)==null){b_(!1),C_([]);return}let S=P3(w_,Q,{currentChatJid:F_});if(S.length>0&&!(S.length===1&&r4(S[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))A_(!1),a([]),C_(S),f_(0),b_(!0);else b_(!1),C_([])},Q$=(Q)=>{let S=r4(Q?.agent_name);if(!S)return;O_(S),b_(!1),C_([]),requestAnimationFrame(()=>{let x=m_.current;if(!x)return;let d=S.length;x.selectionStart=d,x.selectionEnd=d,x.focus()})},T0=(Q)=>{if(j)S_(Q);else O_(Q),u$(Q),O0(Q);requestAnimationFrame(()=>H0())},P0=(Q)=>{let S=j?E_:B_,x=S&&!S.endsWith(`
`)?`
`:"",d=`${S}${x}${Q}`.trimStart();T0(d)},f0=(Q)=>{let S=Q?.command?.model_label;if(S)return S;let x=Q?.command?.message;if(typeof x==="string"){let d=x.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},m$=async(Q)=>{if(j||c_)return;R_(!0);try{let S=await $2("default",Q,null,[],null,F_),x=f0(S);z0({model:x??u??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking});try{let d=await F2(F_);if(d)z0(d)}catch{}return _?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{R_(!1)}},C0=async()=>{await m$("/cycle-model")},s$=async(Q)=>{if(!Q||c_)return;if(await m$(`/model ${Q}`))W0(!1)},y$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),W0((S)=>!S)},g$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return G_?"queue":null},k$=async(Q,S,x={})=>{let{includeMedia:d=!0,includeFileRefs:V_=!0,includeMessageRefs:Q_=!0,clearAfterSubmit:L_=!0,recordHistory:Y0=!0}=x||{},i0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:B_,M_=typeof i0==="string"?i0:"";if(!M_.trim()&&(d?y_.length===0:!0)&&(V_?q.length===0:!0)&&(Q_?Y.length===0:!0))return;A_(!1),a([]),b_(!1),C_([]);let u0=d?[...y_]:[],F$=V_?[...q]:[],J$=Q_?[...Y]:[],W$=M_.trim();if(Y0&&W$){let V$=I0.current,E0=P_(V$.filter((J_)=>J_!==W$));if(E0.push(W$),E0.length>200)E0.splice(0,E0.length-200);I0.current=E0,B0(E0),A0.current=-1,N0.current=""}if(L_)O_(""),I_([]),B?.(),A?.();(async()=>{try{if(await s?.({content:W$,submitMode:S,fileRefs:F$,messageRefs:J$,mediaFiles:u0})){_?.();return}let E0=[];for(let g0 of u0){let I$=await f4(g0);E0.push(I$.id)}let J_=F$.length?`Files:
${F$.map((g0)=>`- ${g0}`).join(`
`)}`:"",o$=J$.length?`Referenced messages:
${J$.map((g0)=>`- message:${g0}`).join(`
`)}`:"",W2=E0.length?`Images:
${E0.map((g0,I$)=>{let M0=u0[I$]?.name||`image-${I$+1}`;return`- attachment:${g0} (${M0})`}).join(`
`)}`:"",V2=[W$,J_,o$,W2].filter(Boolean).join(`

`),m0=await $2("default",V2,null,E0,g$(S),F_);if(z_?.(m0),m0?.command){z0({model:m0.command.model_label??u??null,thinking_level:m0.command.thinking_level,supports_thinking:m0.command.supports_thinking});try{let g0=await F2(F_);if(g0)z0(g0)}catch{}}_?.()}catch(V$){console.error("Failed to post:",V$)}})()},G2=(Q)=>{n_?.(Q)},i_=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),S_(""),W?.();return}if(o_&&T_.length>0){let S=m_.current?.value??(j?E_:B_);if(!String(S||"").match(/^@([a-zA-Z0-9_-]*)$/))b_(!1),C_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),f_((x)=>(x+1)%T_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),f_((x)=>(x-1+T_.length)%T_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),Q$(T_[s_]);return}if(Q.key==="Escape"){Q.preventDefault(),b_(!1),C_([]);return}}}if(x_&&Y_.length>0){let S=m_.current?.value??(j?E_:B_);if(!String(S||"").startsWith("/"))A_(!1),a([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),W_((x)=>(x+1)%Y_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),W_((x)=>(x-1+Y_.length)%Y_.length);return}if(Q.key==="Tab"){Q.preventDefault(),S$(Y_[k_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(m_.current?.value??(j?E_:B_)).includes(" ")){Q.preventDefault();let V_=Y_[k_];A_(!1),a([]),k$(V_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),A_(!1),a([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let S=m_.current;if(!S)return;let x=S.value||"",d=S.selectionStart===0&&S.selectionEnd===0,V_=S.selectionStart===x.length&&S.selectionEnd===x.length;if(Q.key==="ArrowUp"&&d||Q.key==="ArrowDown"&&V_){let Q_=I0.current;if(!Q_.length)return;Q.preventDefault();let L_=A0.current;if(Q.key==="ArrowUp"){if(L_===-1)N0.current=x,L_=Q_.length-1;else if(L_>0)L_-=1;A0.current=L_,T0(Q_[L_]||"")}else{if(L_===-1)return;if(L_<Q_.length-1)L_+=1,A0.current=L_,T0(Q_[L_]||"");else A0.current=-1,T0(N0.current||""),N0.current=""}requestAnimationFrame(()=>{let Y0=m_.current;if(!Y0)return;let i0=Y0.value.length;Y0.selectionStart=i0,Y0.selectionEnd=i0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let S=m_.current?.value??(j?E_:B_);if(j){if(S.trim())N?.(S.trim(),Z)}else k$(S,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let S=m_.current?.value??(j?E_:B_);if(j){if(S.trim())N?.(S.trim(),Z)}else k$(S)}},D0=(Q)=>{let S=Array.from(Q||[]).filter((x)=>x&&x.type&&x.type.startsWith("image/"));if(!S.length)return;I_((x)=>[...x,...S])},R0=(Q)=>{D0(Q.target.files),Q.target.value=""},p$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),I.current+=1,K0(!0)},c$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),I.current=Math.max(0,I.current-1),I.current===0)K0(!1)},h$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";K0(!0)},U$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),I.current=0,K0(!1),D0(Q.dataTransfer?.files||[])},v0=(Q)=>{if(j)return;let S=Q.clipboardData?.items;if(!S||!S.length)return;let x=[];for(let d of S){if(d.kind!=="file")continue;let V_=d.getAsFile?.();if(V_)x.push(V_)}if(x.length>0)Q.preventDefault(),D0(x)},X0=(Q)=>{I_((S)=>S.filter((x,d)=>d!==Q))},Q0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:S,longitude:x,accuracy:d}=Q.coords,V_=`${S.toFixed(5)}, ${x.toFixed(5)}`,Q_=Number.isFinite(d)?` ±${Math.round(d)}m`:"",L_=`https://maps.google.com/?q=${S},${x}`,Y0=`Location: ${V_}${Q_} ${L_}`;P0(Y0)},(Q)=>{let S=Q?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};f(()=>{if(!G0)return;u_(!0),F2(F_).then((Q)=>{let S=Array.isArray(Q?.models)?Q.models.filter((x)=>typeof x==="string"&&x.trim().length>0):[];S.sort((x,d)=>x.localeCompare(d,void 0,{sensitivity:"base"})),c0(S),z0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),c0([])}).finally(()=>{u_(!1)})},[G0,u]),f(()=>{if(j)W0(!1),A_(!1),a([]),b_(!1),C_([])},[j]),f(()=>{if(!G0)return;let Q=(S)=>{let x=F0.current,d=S0.current,V_=S.target;if(x&&x.contains(V_))return;if(d&&d.contains(V_))return;W0(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[G0]),f(()=>{let Q=()=>{let Q_=U_.current?.clientWidth||0;_0((L_)=>L_===Q_?L_:Q_)};Q();let S=U_.current,x=0,d=()=>{if(x)cancelAnimationFrame(x);x=requestAnimationFrame(()=>{x=0,Q()})},V_=null;if(S&&typeof ResizeObserver<"u")V_=new ResizeObserver(()=>d()),V_.observe(S);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(x)cancelAnimationFrame(x);if(V_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,u,V0.length,U?.percent]);let G$=(Q)=>{let S=Q.target.value;H0(Q.target),T0(S)};return f(()=>{requestAnimationFrame(()=>H0())},[B_,E_,j]),f(()=>{if(j)return;O0(B_)},[w_,F_,B_,j]),O`
        <div class="compose-box">
            ${!j&&q_.length>0&&O`
                <div class="compose-queue-stack">
                    ${q_.map((Q)=>{let S=typeof Q?.content==="string"?Q.content:"",x=E$(S);if(!x.text.trim()&&x.fileRefs.length===0&&x.messageRefs.length===0)return null;return O`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${S}>
                                    ${x.text.trim()&&O`
                                        <div class="compose-queue-stack-text">${x.text}</div>
                                    `}
                                    ${(x.messageRefs.length>0||x.fileRefs.length>0)&&O`
                                        <div class="compose-queue-stack-refs">
                                            ${x.messageRefs.map((d)=>O`
                                                <${B$}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${x.fileRefs.map((d)=>{let V_=d.split("/").pop()||d;return O`
                                                    <${B$}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${V_}
                                                        title=${d}
                                                        onClick=${()=>c?.(d)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>G2(Q)}
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
                                    onClick=${()=>r?.(Q)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${Z0?" drag-active":""}`}
                onDragEnter=${p$}
                onDragOver=${h$}
                onDragLeave=${c$}
                onDrop=${U$}
            >
                <div class="compose-input-main">
                    ${(q.length>0||y_.length>0||Y.length>0)&&O`
                        <div class="compose-file-refs">
                            ${Y.map((Q)=>{return O`
                                    <${B$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(Q)}
                                    />
                                `})}
                            ${q.map((Q)=>{let S=Q.split("/").pop()||Q;return O`
                                    <${B$}
                                        prefix="compose"
                                        label=${S}
                                        title=${Q}
                                        onClick=${()=>c?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(Q)}
                                    />
                                `})}
                            ${y_.map((Q,S)=>{let x=Q?.name||`image-${S+1}`;return O`
                                    <${B$}
                                        key=${x+S}
                                        prefix="compose"
                                        label=${x}
                                        title=${x}
                                        removeTitle="Remove image"
                                        onRemove=${()=>X0(S)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!j&&typeof $_==="function"&&O`
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
                        ref=${m_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?E_:B_}
                        onInput=${G$}
                        onKeyDown=${i_}
                        onPaste=${v0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${o_&&T_.length>0&&O`
                        <div class="slash-autocomplete" ref=${d_}>
                            ${T_.map((Q,S)=>O`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${S===s_?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),Q$(Q)}}
                                    onMouseEnter=${()=>f_(S)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${x_&&Y_.length>0&&O`
                        <div class="slash-autocomplete" ref=${k0}>
                            ${Y_.map((Q,S)=>O`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${S===k_?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),S$(Q)}}
                                    onMouseEnter=${()=>W_(S)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${G0&&!j&&O`
                        <div class="compose-model-popup" ref=${F0}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${y0&&O`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!y0&&b0.length===0&&O`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!y0&&b0.map((Q)=>O`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${u===Q?" active":""}`}
                                        onClick=${()=>{s$(Q)}}
                                        disabled=${c_}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{C0()}}
                                    disabled=${c_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${U_}>
                    ${!j&&u&&O`
                    <div class="compose-meta-row">
                        ${!j&&u&&O`
                            <div class="compose-model-meta">
                                <button
                                    ref=${S0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${Y$}
                                    aria-label="Open model picker"
                                    onClick=${y$}
                                    disabled=${c_}
                                >
                                    ${c_?"Switching…":J0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!c_&&$0&&O`
                                        <span class="compose-model-usage-hint" title=${Y$}>
                                            ${$0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${s0&&O`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${V0.map((Q)=>O`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>Q$(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&U&&U.percent!=null&&O`
                        <${h9} usage=${U} />
                    `}
                    ${j&&O`
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
                        onClick=${j?W:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${d0&&!j&&O`
                        <button
                            class="icon-btn location-btn"
                            onClick=${Q0}
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
                    ${K$&&!j&&O`
                        <button
                            class=${`icon-btn notification-btn${C$?" active":""}`}
                            onClick=${h}
                            title=${h0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&O`
                        ${n&&N_&&O`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${N_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${q.includes(n)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${R0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{k$()}}
                            disabled=${!w0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var T3="piclaw_theme",e4="piclaw_tint",E2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},f3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},I3={default:{label:"Default",mode:"auto",light:E2,dark:f3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},i9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],i$={theme:"default",tint:null},R3="light",a4=!1;function _1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function z2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function l9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),W=parseInt(N[3],10);if(![K,z,W].every((V)=>Number.isFinite(V)))return null;let q=`#${[K,z,W].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:W,hex:q}}function v3(_){return z2(_)||l9(_)}function D2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function t4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function n9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function d9(_){return n9(_)>0.4?"#000000":"#ffffff"}function u3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function $1(_){return I3[_]||I3.default}function s9(_){return _.mode==="auto"?u3():_.mode}function m3(_,$){let j=$1(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||E2}function g3(_,$,j){let Z=v3($);if(!Z)return _;let N=z2(_.bgPrimary),K=z2(_.bgSecondary),z=z2(_.bgHover),W=z2(_.borderColor);if(!N||!K||!z||!W)return _;let V=z2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:D2(N,Z,0.08),bgSecondary:D2(K,Z,0.12),bgHover:D2(z,Z,0.16),borderColor:D2(W,Z,0.08),accent:Z.hex,accentHover:V?D2(Z,V,0.18):Z.hex}}function o9(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=v3(Z),K=N?t4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?t4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",W=N?t4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?d9(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":W,"--accent-contrast-text":q,"--danger-color":_.danger||E2.danger,"--success-color":_.success||E2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([B,Y])=>{if(Y)j.style.setProperty(B,Y)})}function r9(){if(typeof document>"u")return;let _=document.documentElement;i9.forEach(($)=>_.style.removeProperty($))}function K2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function x3(_){let $=_1(i$?.theme||"default"),j=i$?.tint?String(i$.tint).trim():null,Z=m3($,_);if($==="default"&&j)Z=g3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?f3.bgPrimary:E2.bgPrimary}function a9(_,$){if(typeof document>"u")return;let j=K2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=K2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",x3("light"));let N=K2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",x3("dark"));let K=K2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let z=K2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let W=K2("apple-mobile-web-app-status-bar-style");if(W)W.setAttribute("content",$==="dark"?"black-translucent":"default")}function t9(){if(typeof window>"u")return;let _={...i$,mode:R3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function j1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=_1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=$1(j),K=s9(N),z=m3(j,K);i$={theme:j,tint:Z},R3=K;let W=document.documentElement;W.dataset.theme=K,W.dataset.colorTheme=j,W.dataset.tint=Z?String(Z):"",W.style.colorScheme=K;let q=z;if(j==="default"&&Z)q=g3(z,Z,K);if(j==="default"&&!Z)r9();else o9(q,K);if(a9(q.bgPrimary,K),t9(),$.persist!==!1)if(j0(T3,j),Z)j0(e4,Z);else j0(e4,"")}function t2(){if($1(i$.theme).mode!=="auto")return;j1(i$,{persist:!1})}function p3(){if(typeof window>"u")return()=>{};let _=_1($$(T3)||"default"),$=$$(e4),j=$?$.trim():null;if(j1({theme:_,tint:j},{persist:!1}),window.matchMedia&&!a4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",t2);else if(Z.addListener)Z.addListener(t2);return a4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",t2);else if(Z.removeListener)Z.removeListener(t2);a4=!1}}return()=>{}}function c3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;j1({theme:j||"default",tint:Z},{persist:!0})}function h3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return u3()}var e2=/#(\w+)/g,e9=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),_7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),$7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),j7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},Z7=new Set(["http:","https:","mailto:",""]);function i3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function l$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!Z7.has(Z.protocol))return null;return Z.href}catch{return null}}function l3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let W=z.tagName.toLowerCase();if(!_7.has(W)){let V=z.parentNode;if(!V)continue;while(z.firstChild)V.insertBefore(z.firstChild,z);V.removeChild(z);continue}let q=j7[W]||new Set;for(let V of Array.from(z.attributes)){let B=V.name.toLowerCase(),Y=V.value;if(B.startsWith("on")){z.removeAttribute(V.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(q.has(B)||$7.has(B)){if(B==="href"){let F=l$(Y);if(!F)z.removeAttribute(V.name);else if(z.setAttribute(V.name,F),W==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let F=W==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(Y):Y,A=l$(F,{allowDataImage:W==="img"});if(!A)z.removeAttribute(V.name);else z.setAttribute(V.name,A)}continue}z.removeAttribute(V.name)}}return j.body.innerHTML}function n3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function _4(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=n3(j);if(N===j)break;j=N}return j}function N7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let W of j){if(!K&&W.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&W.trim().match(/^```\s*$/)){let q=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),K=!1,z=[];continue}if(K)z.push(W);else N.push(W)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function K7(_){if(!_)return _;return _4(_,5)}function z7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function Y7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function G7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=K7(K);return`<div class="mermaid-container" data-mermaid="${z7(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function d3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function s3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,q=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!q||!e9.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;return`<${q}>`})}function o3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function r3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function W7(_){if(!window.katex)return _;let $=(z)=>n3(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let W=[],q=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let B=W.length;return W.push(V),`@@CODE_BLOCK_${B}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let B=W.length;return W.push(V),`@@CODE_INLINE_${B}@@`}),{html:q,blocks:W}},Z=(z,W)=>{if(!W.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,V)=>{let B=Number(V);return W[B]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,W,q)=>{try{let V=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${W}${V}`}catch(V){return`<span class="math-error" title="${i3(V.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,W,q)=>{if(/\s$/.test(q))return z;try{let V=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${W}${V}`}catch(V){return`${W}<span class="math-error" title="${i3(V.message)}">$${q}$</span>`}}),Z(K,N.blocks)}function V7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(e2.lastIndex=0,!e2.test(z))continue;e2.lastIndex=0;let W=K.parentElement;if(W&&(W.closest("a")||W.closest("code")||W.closest("pre")))continue;let q=z.split(e2);if(q.length<=1)continue;let V=$.createDocumentFragment();q.forEach((B,Y)=>{if(Y%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",B),F.textContent=`#${B}`,V.appendChild(F)}else V.appendChild($.createTextNode(B))}),K.parentNode?.replaceChild(V,K)}return $.body.innerHTML}function X7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function n0(_,$,j={}){if(!_)return"";let Z=X7(_),{text:N,blocks:K}=N7(Z),z=_4(N,2),q=d3(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=s3(q),B=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return B=o3(B),B=r3(B),B=W7(B),B=V7(B),B=G7(B,K),B=l3(B,j),B}function $4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=_4($,2),N=d3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=s3(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=o3(z),z=r3(z),z=l3(z),z}async function P$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=h3()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let W=z.dataset.mermaid,q=Y7(W||""),V=_4(q,2),B=await $(V,{...N,transparent:!0});z.innerHTML=B,z.removeAttribute("data-mermaid")}catch(W){console.error("Mermaid render error:",W);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${W.message}`,z.innerHTML="",z.appendChild(q),z.removeAttribute("data-mermaid")}}function a3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function t3(_){return String(_||"").trim()||"web:default"}function e3(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function _6(_){if(!_)return!1;return _.status!=="running"}function $6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function j6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),K=D(null),z=_?.thinking?$4(_.thinking):"",W=_?.answer?n0(_.answer,null,{sanitize:!1}):"";if(f(()=>{if(N.current&&z)P$(N.current).catch(()=>{})},[z]),f(()=>{if(K.current&&W)P$(K.current).catch(()=>{})},[W]),!_)return null;let q=_.status==="running",V=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),Y=e3(_),F=_6(_),A=!q&&V,u=q?"Thinking…":_.status==="error"?"Error":"Done";return O`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${u}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&O`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&O`<div class="btw-block btw-error">${_.error}</div>`}
            ${B&&O`
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${Y&&O`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:W}}
                    ></div>
                </div>
            `}

            ${F&&O`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&O`
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
    `}var Z6="PiClaw";function Z1(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,W=K[z],q=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",B=V?V:null,Y=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:W,image:B||(Y?"/static/icon-192.png":null)}}function N6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function K6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function z6(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",W=K?.dataset?.tint||"",q=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(q&&(W||z&&z!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function q7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function y2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function Y6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return y2(_)?"Compacting context":"Working..."}function L7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function G6(_,$=Date.now()){let j=q7(_);if(j===null)return null;return L7(Math.max(0,$-j))}function W6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:W,onPanelToggle:q}){let Y=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let A_=a,T_=A_?A_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:T_,fullText:A_}}let k_=a.text||"",W_=a.fullText||a.full_text||k_,x_=Number.isFinite(a.totalLines)?a.totalLines:W_?W_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:k_,totalLines:x_,fullText:W_}},F=160,A=(a)=>String(a||"").replace(/<\/?internal>/gi,""),u=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},v=(a,k_,W_)=>{let x_=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!x_)return{text:"",omitted:0,totalLines:Number.isFinite(W_)?W_:0,visibleLines:0};let A_=x_.split(`
`),T_=A_.length>k_?A_.slice(0,k_).join(`
`):x_,C_=Number.isFinite(W_)?W_:A_.reduce((o_,b_)=>o_+u(b_),0),s_=T_?T_.split(`
`).reduce((o_,b_)=>o_+u(b_),0):0,f_=Math.max(C_-s_,0);return{text:T_,omitted:f_,totalLines:C_,visibleLines:s_}},R=Y(j),P=Y(Z),U=Y($),C=Boolean(R.text)||R.totalLines>0,w=Boolean(P.text)||P.totalLines>0,h=Boolean(U.fullText?.trim()||U.text?.trim());if(!_&&!h&&!C&&!w&&!N&&!K)return null;let[e,Z_]=T(new Set),[n,N_]=T(()=>Date.now()),c=(a)=>Z_((k_)=>{let W_=new Set(k_),x_=!W_.has(a);if(x_)W_.add(a);else W_.delete(a);if(typeof q==="function")q(a,x_);return W_});f(()=>{Z_(new Set)},[z]);let q_=y2(_);f(()=>{if(!q_)return;N_(Date.now());let a=setInterval(()=>N_(Date.now()),1000);return()=>clearInterval(a)},[q_,_?.started_at,_?.startedAt]);let n_=_?.turn_id||z,r=z6(n_),s=W?"turn-dot turn-dot-queued":"turn-dot",z_=(a)=>a,$_=Boolean(_?.last_activity||_?.lastActivity),G_=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":r,w_=K?.kind||"info",F_=G_(w_),B_=G_(_?.kind||(q_?"warning":"info")),O_="",E_=_?.title,S_=_?.status;if(_?.type==="plan")O_=E_?`Planning: ${E_}`:"Planning...";else if(_?.type==="tool_call")O_=E_?`Running: ${E_}`:"Running tool...";else if(_?.type==="tool_status")O_=E_?`${E_}: ${S_||"Working..."}`:S_||"Working...";else if(_?.type==="error")O_=E_||"Agent error";else O_=E_||S_||"Working...";if($_)O_="Last activity just now";let y_=({panelTitle:a,text:k_,fullText:W_,totalLines:x_,maxLines:A_,titleClass:T_,panelKey:C_})=>{let s_=e.has(C_),f_=W_||k_||"",o_=C_==="thought"||C_==="draft"?A(f_):f_,b_=typeof A_==="number",c_=s_&&b_,R_=b_?v(o_,A_,x_):{text:o_||"",omitted:0,totalLines:Number.isFinite(x_)?x_:0};if(!o_&&!(Number.isFinite(R_.totalLines)&&R_.totalLines>0))return null;let G0=`agent-thinking-body${b_?" agent-thinking-body-collapsible":""}`,W0=b_?`--agent-thinking-collapsed-lines: ${A_};`:"";return O`
            <div
                class="agent-thinking"
                data-expanded=${s_?"true":"false"}
                data-collapsible=${b_?"true":"false"}
                style=${r?`--turn-color: ${r};`:""}
            >
                <div class="agent-thinking-title ${T_||""}">
                    ${r&&O`<span class=${s} aria-hidden="true"></span>`}
                    ${a}
                    ${c_&&O`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>c(C_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${G0}
                    style=${W0}
                    dangerouslySetInnerHTML=${{__html:$4(o_)}}
                />
                ${!s_&&R_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>c(C_)}>
                        ▸ ${R_.omitted} more lines
                    </button>
                `}
                ${s_&&R_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>c(C_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},I_=N?.tool_call?.title,Z0=I_?`Awaiting approval: ${I_}`:"Awaiting approval",K0=q_?G6(_,n):null,Y_=(a,k_,W_=null)=>{let x_=Y6(a);return O`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${k_?`--turn-color: ${k_};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${k_&&O`<span class=${s} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${x_}</span>
                    ${W_&&O`<span class="agent-status-elapsed">${W_}</span>`}
                </div>
                ${a.detail&&O`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `};return O`
        <div class="agent-status-panel">
            ${K&&Y_(K,F_)}
            ${_?.type==="intent"&&Y_(_,B_,K0)}
            ${N&&O`
                <div class="agent-status agent-status-request" aria-live="polite" style=${r?`--turn-color: ${r};`:""}>
                    <span class=${s} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Z0}</span>
                </div>
            `}
            ${C&&y_({panelTitle:z_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${w&&y_({panelTitle:z_("Thoughts"),text:P.text,fullText:P.fullText,totalLines:P.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${h&&y_({panelTitle:z_("Draft"),text:U.text,fullText:U.fullText,totalLines:U.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&O`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${r?`--turn-color: ${r};`:""}>
                    ${r&&O`<span class=${s} aria-hidden="true"></span>`}
                    ${_?.type==="error"?O`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&O`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${O_}</span>
                </div>
            `}
        </div>
    `}function V6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",W=Z?.kind||"other",q=Z?.rawInput||{},V=q.command||q.commands&&q.commands[0]||null,B=q.diff||null,Y=q.fileName||q.path||null,F=Z?.description||q.description||q.explanation||null,u=(Array.isArray(Z?.locations)?Z.locations:[]).map((C)=>C?.path).filter((C)=>Boolean(C)),v=Array.from(new Set([Y,...u].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(C)=>{try{await n2(j,C,K||null),$()}catch(w){console.error("Failed to respond to agent request:",w)}},P=async()=>{try{await v4(z,`Auto-approved: ${z}`),await n2(j,"approved",K||null),$()}catch(C){console.error("Failed to add to whitelist:",C)}},U=N&&N.length>0;return O`
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
                ${(F||V||B||v.length>0)&&O`
                    <div class="agent-request-body">
                        ${F&&O`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${v.length>0&&O`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${v.map((C,w)=>O`<li key=${w}>${C}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&O`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${B&&O`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${U?N.map((C)=>O`
                            <button 
                                key=${C.optionId||C.id||String(C)}
                                class="agent-request-btn ${C.kind==="allow_once"||C.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(C.optionId||C.id||C)}
                            >
                                ${C.name||C.label||C.optionId||C.id||String(C)}
                            </button>
                        `):O`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${P}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function X6({status:_}){if(_==="connected")return null;return O`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function q6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let q=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${V}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${W}`}function k2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function j$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function n$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var B7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),O7=new Set(["text/markdown"]);function A2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(B7.has($)||$.startsWith("text/"))return"text";return"unsupported"}function L6(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return O7.has($)}function B6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function Q7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function U7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function O6(_){return Q7(_)||U7(_)}function j4(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function F7(_,$){let j=Math.max(j4(_),j4($)),Z=Math.min(j4(_),j4($));return(j+0.05)/(Z+0.05)}function J7(_,$,j="#ffffff"){let Z=O6(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let W=O6(z);if(!W)continue;let q=F7(Z,W);if(q>K)N=z,K=q}return N}function N1(){let _=getComputedStyle(document.documentElement),$=(u,v)=>{for(let R of u){let P=_.getPropertyValue(R).trim();if(P)return P}return v},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),W=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),Y=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),A=J7(W,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:W,good:q,warning:V,attention:B,border:Y,fontFamily:F,buttonTextColor:A}}function Q6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:W,border:q,fontFamily:V}=N1();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:W,subtle:W}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:W,subtle:W}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var H7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),U6=!1,Z4=null,F6=!1;function K1(_){_.querySelector(".adaptive-card-notice")?.remove()}function D7(_,$,j="error"){K1(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function E7(_,$=(j)=>n0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function y7(_=($)=>n0($,null)){return($,j)=>{try{let Z=E7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function k7(_){if(F6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=y7(),F6=!0}async function A7(){if(U6)return;if(Z4)return Z4;return Z4=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{U6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),Z4}function w7(){return globalThis.AdaptiveCards}function P7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function M7(_){return H7.has(_)}function Y1(_){if(!Array.isArray(_))return[];return _.filter(P7)}function C7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function z1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>z1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${z1(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function b7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return z1($);return typeof $==="string"?$:String($)}function S7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((W)=>Z(W));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=b7(z.type,j[z.id],z);for(let[W,q]of Object.entries(z))if(Array.isArray(q)||q&&typeof q==="object")z[W]=Z(q);return z};return Z(_)}function I7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function x7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function T7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=x7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function J6(_,$,j){if(!M7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await A7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=w7();k7(Z);let N=new Z.AdaptiveCard,K=N1();N.hostConfig=new Z.HostConfig(Q6());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,W=$.state==="active"?$.payload:S7($.payload,z);N.parse(W),N.onExecuteAction=(B)=>{let Y=C7(B);if(j?.onAction)K1(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(Y)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let A=F instanceof Error?F.message:String(F||"Action failed.");D7(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",Y)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let V=T7($);if(V){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let Y=document.createElement("span");if(Y.className="adaptive-card-status-label",Y.textContent=V.label,B.appendChild(Y),V.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=V.detail,B.appendChild(F)}_.appendChild(B)}if(K1(_),_.appendChild(q),V)I7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function Y2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Y2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${Y2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function f7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function G1(_){if(!Array.isArray(_))return[];return _.filter(f7)}function H6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=Y2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:Y2(K)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:K})=>`${N}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function D6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:Y2(K)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:K})=>`${N}: ${K}`).join(", "):Y2(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function R7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?j$($):null},{label:"Added",value:_?.created_at?n$(_.created_at):null}].filter((Z)=>Z.value)}function E6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=t_(()=>A2($?.content_type),[$?.content_type]),K=B6(N),z=t_(()=>L6($?.content_type),[$?.content_type]),[W,q]=T(N==="text"||N==="pdf"),[V,B]=T(""),[Y,F]=T(null),[A,u]=T(null),v=D(null),R=t_(()=>R7($),[$]),P=t_(()=>{if(!z||!V)return"";return n0(V)},[z,V]);return f(()=>{let U=(C)=>{if(C.key==="Escape")j()};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[j]),f(()=>{if(!v.current||!P)return;P$(v.current);return},[P]),f(()=>{let U=!1,C=null;async function w(){if(N==="text"){q(!0),u(null);try{let h=await p4(_);if(!U)B(h)}catch{if(!U)u("Failed to load text preview.")}finally{if(!U)q(!1)}return}if(N==="pdf"){q(!0),u(null);try{let h=await c4(_);if(C=URL.createObjectURL(h),!U)F(C)}catch{if(!U)u("Failed to load PDF preview.")}finally{if(!U)q(!1)}return}q(!1)}return w(),()=>{if(U=!0,C)URL.revokeObjectURL(C)}},[_,N]),O`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(U)=>{U.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${L$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(U)=>U.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${W&&O`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!W&&A&&O`<div class="attachment-preview-state">${A}</div>`}
                    ${!W&&!A&&N==="image"&&O`
                        <img class="attachment-preview-image" src=${L$(_)} alt=${Z} />
                    `}
                    ${!W&&!A&&N==="pdf"&&Y&&O`
                        <iframe class="attachment-preview-frame" src=${Y} title=${Z}></iframe>
                    `}
                    ${!W&&!A&&N==="text"&&z&&O`
                        <div
                            ref=${v}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:P}}
                        />
                    `}
                    ${!W&&!A&&N==="text"&&!z&&O`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!W&&!A&&N==="unsupported"&&O`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${R.map((U)=>O`
                        <div class="attachment-preview-meta-item" key=${U.label}>
                            <span class="attachment-preview-meta-label">${U.label}</span>
                            <span class="attachment-preview-meta-value">${U.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function y6({src:_,onClose:$}){return f(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),O`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function v7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(f(()=>{j2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?j$(K):"",q=A2(j.content_type)==="unsupported"?"Details":"Preview";return O`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${L$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&O`<span class="file-size">${z}</span>`}
                        ${j.content_type&&O`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${q}
            </button>
        </div>
    `}function u7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);f(()=>{if(!Number.isFinite(j))return;j2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?L$(j):null,q=A2(Z?.content_type)==="unsupported"?"Details":"Preview";return O`
        <span class="attachment-pill" title=${K}>
            ${z?O`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${B$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:O`
                    <${B$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&O`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function N4({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?n$(Z):null;return O`
        <div class="content-annotations">
            ${$&&$.length>0&&O`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&O`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&O`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function m7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?j$(_.size):"",N=_.mime_type||"",K=p7(N),z=l$(_.uri);return O`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(W)=>W.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&O`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&O`<span>${N}</span>`}
                    ${Z&&O`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function g7({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return O`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&O`
                ${N&&O`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&O`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&O`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(W)=>{W.preventDefault(),W.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(Y)=>Y.charCodeAt(0))],{type:z||"application/octet-stream"}),V=URL.createObjectURL(q),B=document.createElement("a");B.href=V,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function p7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function c7({preview:_}){let $=l$(_.url),j=l$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return O`
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
                ${_.description&&O`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function h7(_,$){return typeof _==="string"?_:""}var i7=1800,l7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,n7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,d7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function s7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function o7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let W=z||"idle";if(K.dataset.copyState=W,W==="success")K.innerHTML=n7,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(W==="error")K.innerHTML=d7,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=l7,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let W=document.createElement("button");W.type="button",W.className="post-code-copy-btn",N(W,"idle"),z.appendChild(W);let q=async(V)=>{V.preventDefault(),V.stopPropagation();let Y=K.querySelector("code")?.textContent||"",F=await s7(Y);N(W,F?"success":"error");let A=j.get(W);if(A)clearTimeout(A);let u=setTimeout(()=>{N(W,"idle"),j.delete(W)},i7);j.set(W,u)};W.addEventListener("click",q),Z.push(()=>{W.removeEventListener("click",q);let V=j.get(W);if(V)clearTimeout(V);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function r7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),W=j.slice(K),q=[...z,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:N}}function a7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let Y=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Y)N.push(Y[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),W=j.slice(K),q=[...z,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:N}}function t7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Images:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let B=V.replace(/^\s*-\s+/,"").trim(),Y=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(Y){let F=Y[1],A=(Y[2]||"").trim()||F;N.push({id:F,label:A,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),W=j.slice(K),q=[...z,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function e7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(e7).sort((B,Y)=>Y.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),W=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),q=[],V;while(V=W.nextNode())q.push(V);for(let B of q){let Y=B.nodeValue;if(!Y||!N.test(Y)){N.lastIndex=0;continue}N.lastIndex=0;let F=B.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let A=Y.split(N).filter((v)=>v!=="");if(A.length===0)continue;let u=z.createDocumentFragment();for(let v of A)if(K.test(v)){let R=z.createElement("mark");R.className="search-highlight-term",R.textContent=v,u.appendChild(R)}else u.appendChild(z.createTextNode(v));B.parentNode.replaceChild(u,B)}return z.body.innerHTML}function k6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:W,userAvatarUrl:q,userAvatarBackground:V,onDelete:B,isThreadReply:Y,isThreadPrev:F,isThreadNext:A,isRemoving:u,highlightQuery:v,onFileRef:R}){let[P,U]=T(null),C=D(null),w=_.data,h=w.type==="agent_response",e=W||"You",Z_=h?K||Z6:e,n=h?Z1(K,z,!0):Z1(e,q),N_=typeof V==="string"?V.trim().toLowerCase():"",c=!h&&n.image&&(N_==="clear"||N_==="transparent"),q_=h&&Boolean(n.image),n_=`background-color: ${c||q_?"transparent":n.color}`,r=w.content_meta,s=Boolean(r?.truncated),z_=Boolean(r?.preview),$_=s&&!z_,G_=s?{originalLength:Number.isFinite(r?.original_length)?r.original_length:w.content?w.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,w_=w.content_blocks||[],F_=w.media_ids||[],B_=h7(w.content,w.link_previews),{content:O_,fileRefs:E_}=r7(B_),{content:S_,messageRefs:y_}=a7(O_),{content:I_,attachments:Z0}=t7(S_);B_=I_;let K0=Y1(w_),Y_=G1(w_),a=K0.length===1&&typeof K0[0]?.fallback_text==="string"?K0[0].fallback_text.trim():"",k_=Y_.length===1?H6(Y_[0]).trim():"",W_=Boolean(a)&&B_?.trim()===a||Boolean(k_)&&B_?.trim()===k_,x_=Boolean(B_)&&!$_&&!W_,A_=typeof v==="string"?v.trim():"",T_=t_(()=>{if(!B_||W_)return"";let I=n0(B_,j);return A_?_5(I,A_):I},[B_,W_,A_]),C_=(I,__)=>{I.stopPropagation(),U(L$(__))},[s_,f_]=T(null),o_=(I)=>{f_(I)},b_=(I)=>{I.stopPropagation(),B?.(_)},c_=(I,__)=>{let P_=new Set;if(!I||__.length===0)return{content:I,usedIds:P_};return{content:I.replace(/attachment:([^\s)"']+)/g,(B0,I0,A0,N0)=>{let w0=I0.replace(/^\/+/,""),Z$=__.find((N$)=>N$.name&&N$.name.toLowerCase()===w0.toLowerCase()&&!P_.has(N$.id))||__.find((N$)=>!P_.has(N$.id));if(!Z$)return B0;if(P_.add(Z$.id),N0.slice(Math.max(0,A0-2),A0)==="](")return`/media/${Z$.id}`;return Z$.name||"attachment"}),usedIds:P_}},R_=[],G0=[],W0=[],b0=[],c0=[],y0=[],u_=0;if(w_.length>0)w_.forEach((I)=>{if(I?.type==="text"&&I.annotations)y0.push(I.annotations);if(I?.type==="resource_link")b0.push(I);else if(I?.type==="resource")c0.push(I);else if(I?.type==="file"){let __=F_[u_++];if(__)G0.push(__),W0.push({id:__,name:I?.name||I?.filename||I?.title})}else if(I?.type==="image"||!I?.type){let __=F_[u_++];if(__){let P_=typeof I?.mime_type==="string"?I.mime_type:void 0;R_.push({id:__,annotations:I?.annotations,mimeType:P_}),W0.push({id:__,name:I?.name||I?.filename||I?.title})}}});else if(F_.length>0)F_.forEach((I)=>{R_.push({id:I,annotations:null}),W0.push({id:I,name:null})});if(Z0.length>0)Z0.forEach((I)=>{if(!I?.id)return;let __=W0.find((P_)=>String(P_.id)===String(I.id));if(__&&!__.name)__.name=I.label});let{content:U0,usedIds:_0}=c_(B_,W0);B_=U0;let m_=R_.filter(({id:I})=>!_0.has(I)),k0=G0.filter((I)=>!_0.has(I)),d_=Z0.length>0?Z0.map((I,__)=>({id:I.id||`attachment-${__+1}`,label:I.label||`attachment-${__+1}`})):W0.map((I,__)=>({id:I.id,label:I.name||`attachment-${__+1}`})),F0=t_(()=>Y1(w_),[w_]),S0=t_(()=>G1(w_),[w_]);f(()=>{if(!C.current)return;return P$(C.current),o7(C.current)},[T_]);let U_=D(null);return f(()=>{if(!U_.current||F0.length===0)return;let I=U_.current;I.innerHTML="";for(let __ of F0){let P_=document.createElement("div");I.appendChild(P_),J6(P_,__,{onAction:async(h_)=>{if(h_.type==="Action.OpenUrl"){let B0=l$(h_.url||"");if(!B0)throw Error("Invalid URL");window.open(B0,"_blank","noopener,noreferrer");return}if(h_.type==="Action.Submit"){await R4({post_id:_.id,thread_id:w.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:__.card_id,action:{type:h_.type,title:h_.title||"",data:h_.data}});return}console.warn("[post] unsupported adaptive card action:",h_.type,h_)}}).catch((h_)=>{console.error("[post] adaptive card render error:",h_),P_.textContent=__.fallback_text||"Card failed to render."})}},[F0,w.thread_id,_.id]),O`
        <div id=${`post-${_.id}`} class="post ${h?"agent-post":""} ${Y?"thread-reply":""} ${F?"thread-prev":""} ${A?"thread-next":""} ${u?"removing":""}" onClick=${$}>
            <div class="post-avatar ${h?"agent-avatar":""} ${n.image?"has-image":""}" style=${n_}>
                ${n.image?O`<img src=${n.image} alt=${Z_} />`:n.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${b_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${Z_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(I)=>{if(I.preventDefault(),I.stopPropagation(),Z)Z(_.id)}}>${q6(_.timestamp)}</a>
                </div>
                ${$_&&G_&&O`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${k2(G_.originalLength)} chars
                            ${G_.maxLength?O` • Display limit: ${k2(G_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${z_&&G_&&O`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${k2(G_.maxLength)} of ${k2(G_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(E_.length>0||y_.length>0||d_.length>0)&&O`
                    <div class="post-file-refs">
                        ${y_.map((I)=>{let __=(P_)=>{if(P_.preventDefault(),P_.stopPropagation(),N)N(I,_.chat_jid||null);else{let h_=document.getElementById("post-"+I);if(h_)h_.scrollIntoView({behavior:"smooth",block:"center"}),h_.classList.add("post-highlight"),setTimeout(()=>h_.classList.remove("post-highlight"),2000)}};return O`
                                <a href=${`#msg-${I}`} class="post-msg-pill-link" onClick=${__}>
                                    <${B$}
                                        prefix="post"
                                        label=${"msg:"+I}
                                        title=${"Message "+I}
                                        icon="message"
                                        onClick=${__}
                                    />
                                </a>
                            `})}
                        ${E_.map((I)=>{let __=I.split("/").pop()||I;return O`
                                <${B$}
                                    prefix="post"
                                    label=${__}
                                    title=${I}
                                    onClick=${()=>R?.(I)}
                                />
                            `})}
                        ${d_.map((I)=>O`
                            <${u7}
                                key=${I.id}
                                attachment=${I}
                                onPreview=${o_}
                            />
                        `)}
                    </div>
                `}
                ${x_&&O`
                    <div 
                        ref=${C}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:T_}}
                        onClick=${(I)=>{if(I.target.classList.contains("hashtag")){I.preventDefault(),I.stopPropagation();let __=I.target.dataset.hashtag;if(__)j?.(__)}else if(I.target.tagName==="IMG")I.preventDefault(),I.stopPropagation(),U(I.target.src)}}
                    />
                `}
                ${F0.length>0&&O`
                    <div ref=${U_} class="post-adaptive-cards" />
                `}
                ${S0.length>0&&O`
                    <div class="post-adaptive-card-submissions">
                        ${S0.map((I,__)=>{let P_=D6(I);return O`
                                <div key=${`${I.card_id}-${__}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${P_.title}</span>
                                    </div>
                                    ${P_.summary&&O`
                                        <div class="adaptive-card-submission-summary">${P_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${n$(P_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${y0.length>0&&O`
                    ${y0.map((I,__)=>O`
                        <${N4} key=${__} annotations=${I} />
                    `)}
                `}
                ${m_.length>0&&O`
                    <div class="media-preview">
                        ${m_.map(({id:I,mimeType:__})=>{let h_=typeof __==="string"&&__.toLowerCase().startsWith("image/svg")?L$(I):g4(I);return O`
                                <img 
                                    key=${I} 
                                    src=${h_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(B0)=>C_(B0,I)}
                                />
                            `})}
                    </div>
                `}
                ${m_.length>0&&O`
                    ${m_.map(({annotations:I},__)=>O`
                        ${I&&O`<${N4} key=${__} annotations=${I} />`}
                    `)}
                `}
                ${k0.length>0&&O`
                    <div class="file-attachments">
                        ${k0.map((I)=>O`
                            <${v7} key=${I} mediaId=${I} onPreview=${o_} />
                        `)}
                    </div>
                `}
                ${b0.length>0&&O`
                    <div class="resource-links">
                        ${b0.map((I,__)=>O`
                            <div key=${__}>
                                <${m7} block=${I} />
                                <${N4} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${c0.length>0&&O`
                    <div class="resource-embeds">
                        ${c0.map((I,__)=>O`
                            <div key=${__}>
                                <${g7} block=${I} />
                                <${N4} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${w.link_previews?.length>0&&O`
                    <div class="link-previews">
                        ${w.link_previews.map((I,__)=>O`
                            <${c7} key=${__} preview=${I} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${P&&O`<${y6} src=${P} onClose=${()=>U(null)} />`}
        ${s_&&O`
            <${E6}
                mediaId=${s_.mediaId}
                info=${s_.info}
                onClose=${()=>f_(null)}
            />
        `}
    `}function A6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:W,emptyMessage:q,timelineRef:V,agents:B,user:Y,onDeletePost:F,reverse:A=!0,removingPostIds:u,searchQuery:v}){let[R,P]=T(!1),U=D(null),C=typeof IntersectionObserver<"u",w=y(async()=>{if(!j||!$||R)return;P(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{P(!1)}},[$,R,j]),h=y((r)=>{let{scrollTop:s,scrollHeight:z_,clientHeight:$_}=r.target,G_=A?z_-$_-s:s,w_=Math.max(300,$_);if(G_<w_)w()},[A,w]);f(()=>{if(!C)return;let r=U.current,s=V?.current;if(!r||!s)return;let z_=300,$_=new IntersectionObserver((G_)=>{for(let w_ of G_){if(!w_.isIntersecting)continue;w()}},{root:s,rootMargin:`${z_}px 0px ${z_}px 0px`,threshold:0});return $_.observe(r),()=>$_.disconnect()},[C,$,j,V,w]);let e=D(w);if(e.current=w,f(()=>{if(C)return;if(!V?.current)return;let{scrollTop:r,scrollHeight:s,clientHeight:z_}=V.current,$_=A?s-z_-r:r,G_=Math.max(300,z_);if($_<G_)e.current?.()},[C,_,$,A,V]),f(()=>{if(!V?.current)return;if(!$||R)return;let{scrollTop:r,scrollHeight:s,clientHeight:z_}=V.current,$_=A?s-z_-r:r,G_=Math.max(300,z_);if(s<=z_+1||$_<G_)e.current?.()},[_,$,R,A,V]),!_)return O`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return O`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let Z_=_.slice().sort((r,s)=>r.id-s.id),n=(r)=>{let s=r?.data?.thread_id;if(s===null||s===void 0||s==="")return null;let z_=Number(s);return Number.isFinite(z_)?z_:null},N_=new Map;for(let r=0;r<Z_.length;r+=1){let s=Z_[r],z_=Number(s?.id),$_=n(s);if($_!==null){let G_=N_.get($_)||{anchorIndex:-1,replyIndexes:[]};G_.replyIndexes.push(r),N_.set($_,G_)}else if(Number.isFinite(z_)){let G_=N_.get(z_)||{anchorIndex:-1,replyIndexes:[]};G_.anchorIndex=r,N_.set(z_,G_)}}let c=new Map;for(let[r,s]of N_.entries()){let z_=new Set;if(s.anchorIndex>=0)z_.add(s.anchorIndex);for(let $_ of s.replyIndexes)z_.add($_);c.set(r,Array.from(z_).sort(($_,G_)=>$_-G_))}let q_=Z_.map((r,s)=>{let z_=n(r);if(z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=c.get(z_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G_=$_.indexOf(s);if(G_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G_>0,hasThreadNext:G_<$_.length-1}}),n_=O`<div class="timeline-sentinel" ref=${U}></div>`;return O`
        <div class="timeline ${A?"reverse":"normal"}" ref=${V} onScroll=${h}>
            <div class="timeline-content">
                ${A?n_:null}
                ${Z_.map((r,s)=>{let z_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),$_=u?.has?.(r.id),G_=q_[s]||{};return O`
                    <${k6}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${z_}
                        isThreadPrev=${G_.hasThreadPrev}
                        isThreadNext=${G_.hasThreadNext}
                        isRemoving=${$_}
                        highlightQuery=${v}
                        agentName=${N6(r.data?.agent_id,B||{})}
                        agentAvatarUrl=${K6(r.data?.agent_id,B||{})}
                        userName=${Y?.name||Y?.user_name}
                        userAvatarUrl=${Y?.avatar_url||Y?.avatarUrl||Y?.avatar}
                        userAvatarBackground=${Y?.avatar_background||Y?.avatarBackground}
                        onClick=${()=>Z?.(r)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${W}
                        onDelete=${F}
                    />
                `})}
                ${A?null:n_}
            </div>
        </div>
    `}class w6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var e_=new w6;var K4=null,W1=null;function P6(){if(W1)return Promise.resolve(W1);if(!K4)K4=import("/static/dist/editor.bundle.js").then((_)=>{return W1=_,_}).catch((_)=>{throw K4=null,_});return K4}class M6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await P6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var V1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new M6(_,$)}};function X1(){P6().catch(()=>{})}var L1="piclaw://terminal";var $5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},j5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},z4=null,q1=null;function Z5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function N5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!Z5(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function K5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!z4)z4=N5(()=>Promise.resolve($.init?.())).catch((j)=>{throw z4=null,j});return await z4,$}async function z5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!q1)q1=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await q1}async function Y5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function G5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function W5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function M$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function V5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function C6(){let _=W5(),$=_?j5:$5,j=M$("--bg-primary",_?"#000000":"#ffffff"),Z=M$("--text-primary",_?"#e7e9ea":"#0f1419"),N=M$("--text-secondary",_?"#71767b":"#536471"),K=M$("--accent-color","#1d9bf0"),z=M$("--danger-color",_?"#ff7b72":"#cf222e"),W=M$("--success-color",_?"#7ee787":"#1a7f37"),q=M$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=M$("--border-color",_?"#2f3336":"#eff3f4"),B=M$("--accent-soft-strong",V5(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:q,red:z,green:W,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class B1{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await K5();if(await z5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:C6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=C6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Y5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(G5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var O1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new B1(_,$)}},Q1={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new B1(_,$)}};function f$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function X5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",W=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${W?`${W}/`:""}${N}`,B=[];for(let F of V.split("/")){if(!F||F===".")continue;if(F===".."){if(B.length>0)B.pop();continue}B.push(F)}let Y=B.join("/");return`${s2(Y)}${K}${z}`}function w2(_){return _?.preview||null}function q5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function L5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function B5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${f$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${f$(j$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${f$(n$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${f$(L5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${f$(q5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${f$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function O5(_){let $=w2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=B5(_,$);if($.kind==="image"){let Z=$.url||($.path?s2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${f$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=n0($.text||"",null,{rewriteImageSrc:(N)=>X5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${f$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class U1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=O5(this.context)}getContent(){let _=w2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=w2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var F1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=w2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new U1(_,$)}},J1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return w2(_)||_?.path?1:!1},mount(_,$){return new U1(_,$)}};var Q5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),U5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},F5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function S6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function b6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class I6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=S6(j),K=F5[N]||"\uD83D\uDCC4",z=U5[N]||"Office Document",W=document.createElement("div");W.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",W.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${b6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${b6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(W);let q=W.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class x6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var H1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=S6(_?.path);if(!$||!Q5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new I6(_,$);return new x6(_,$)}};var J5=/\.(csv|tsv)$/i;class T6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var D1={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!J5.test($))return!1;return 55},mount(_,$){return new T6(_,$)}};var H5=/\.pdf$/i;function D5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class f6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${D5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class R6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var E1={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!H5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new f6(_,$);return new R6(_,$)}};var E5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function y1(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${y1(N)}" alt="${y1(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${y1(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let W=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(W)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k1={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!E5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new v6(_,$);return new u6(_,$)}};function y5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function k5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var A1='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function m6(_){let $=String(_||"").trim();return $?$:A1}function A5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function w5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function P5(_,$="*"){try{let j=(K)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(z,W,q,V,B,Y){try{if(z&&q!=null&&j({filename:z,format:W,data:q,mimeType:V,base64Encoded:Boolean(B),defaultMode:Y}))return}catch(F){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",F)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(z,W,q,V,B,Y){try{if(W&&j({filename:W,data:z,mimeType:q,base64Encoded:Boolean(V),mode:B,folderId:Y}))return}catch(F){console.warn("[drawio-pane] export intercept failed, falling back to native export",F)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function g6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${w5(j)}`}class p6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${k5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=A5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(P5(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=A1,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await g6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await g6(_,"image/png");else this.xmlData=m6(await _.text());else if(_.status===404)this.xmlData=A1;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?m6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var w1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!y5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new p6(_,$);return new c6(_,$)}};class h6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var l_=new h6;var Y4="workspaceExplorerScale",M5=["compact","default","comfortable"],C5=new Set(M5),b5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function i6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return C5.has(j)?j:$}function P1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function S5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function I5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function M1(_={}){let $=S5(_),j=_.stored?i6(_.stored,$):$;return I5(j,_)}function l6(_){return b5[i6(_)]}var x5=60000,o6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function r6(_,$,j,Z=0,N=[]){if(!j&&o6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)r6(K,$,j,Z+1,N);return N}function n6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&o6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function I1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((W)=>[W?.path,W])):new Map,K=!j||j.length!==Z.length,z=Z.map((W)=>{let q=I1(N.get(W.path),W);if(q!==N.get(W.path))K=!0;return q});return K?{...$,children:z}:_}function b1(_,$,j){if(!_)return _;if(_.path===$)return I1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=b1(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var a6=4,C1=14,T5=8,f5=16;function t6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=t6(Z);return _.__bytes=j,j}function e6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=a6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let W of N){let q=Math.max(0,Number(W?.__bytes??W?.size??0));if(q<=0)continue;if(W.type==="dir")K.push({kind:"dir",node:W,size:q});else K.push({kind:"file",name:W.name,path:W.path,size:q})}K.sort((W,q)=>q.size-W.size);let z=K;if(K.length>C1){let W=K.slice(0,C1-1),q=K.slice(C1-1),V=q.reduce((B,Y)=>B+Y.size,0);W.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:V}),z=W}return Z.children=z.map((W)=>{if(W.kind==="dir")return e6(W.node,$+1);return{name:W.name,path:W.path,size:W.size,children:[]}}),Z}function d6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function _8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function G4(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function x1(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,W=K-N>z?N+z:K,q=G4(_,$,Z,N),V=G4(_,$,Z,W),B=G4(_,$,j,W),Y=G4(_,$,j,N),F=W-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${F} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${Y.x.toFixed(3)} ${Y.y.toFixed(3)}`,"Z"].join(" ")}var $8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function j8(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(W,q,V,B)=>{let Y=Array.isArray(W?.children)?W.children:[];if(!Y.length)return;let F=Math.max(0,Number(W.size)||0);if(F<=0)return;let A=V-q,u=q;Y.forEach((v,R)=>{let P=Math.max(0,Number(v.size)||0);if(P<=0)return;let U=P/F,C=u,w=R===Y.length-1?V:u+A*U;if(u=w,w-C<0.003)return;let h=$8[B];if(h){let e=_8(C,B,j);if(Z.push({key:v.path,path:v.path,label:v.name,size:P,color:e,depth:B,startAngle:C,endAngle:w,innerRadius:h[0],outerRadius:h[1],d:x1(120,120,h[0],h[1],C,w)}),B===1)N.push({key:v.path,name:v.name,size:P,pct:K>0?P/K*100:0,color:e})}if(B<a6)z(v,C,w,B+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function S1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=S1(Z,$);if(N)return N}return null}function Z8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=$8[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,W=_8(K,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:W,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:x1(120,120,N[0],N[1],K,z)}],legend:[{key:V,name:_,size:j,pct:100,color:W}]}}function s6(_,$=!1,j=!1){if(!_)return null;let Z=t6(_),N=e6(_,0),K=N.size||Z,{segments:z,legend:W}=j8(N,K,j);if(!z.length&&K>0){let q=Z8("[files]",N.path,K,j);z=q.segments,W=q.legend}return{root:N,totalSize:K,segments:z,legend:W,truncated:$,isDarkTheme:j}}function R5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[K,z]=T(()=>[_?.root?.path||"."]),[W,q]=T(!1);f(()=>{let c=_?.root?.path||".";N(c),z([c]),j(null)},[_?.root?.path,_?.totalSize]),f(()=>{if(!Z)return;q(!0);let c=setTimeout(()=>q(!1),180);return()=>clearTimeout(c)},[Z]);let V=t_(()=>{return S1(_.root,Z)||_.root},[_?.root,Z]),B=V?.size||_.totalSize||0,{segments:Y,legend:F}=t_(()=>{let c=j8(V,B,_.isDarkTheme);if(c.segments.length>0)return c;if(B<=0)return c;let q_=V?.children?.length?"Total":"[files]";return Z8(q_,V?.path||_?.root?.path||".",B,_.isDarkTheme)},[V,B,_.isDarkTheme,_?.root?.path]),[A,u]=T(Y),v=D(new Map),R=D(0);f(()=>{let c=v.current,q_=new Map(Y.map((z_)=>[z_.key,z_])),n_=performance.now(),r=220,s=(z_)=>{let $_=Math.min(1,(z_-n_)/220),G_=$_*(2-$_),w_=Y.map((F_)=>{let O_=c.get(F_.key)||{startAngle:F_.startAngle,endAngle:F_.startAngle,innerRadius:F_.innerRadius,outerRadius:F_.innerRadius},E_=(K0,Y_)=>K0+(Y_-K0)*G_,S_=E_(O_.startAngle,F_.startAngle),y_=E_(O_.endAngle,F_.endAngle),I_=E_(O_.innerRadius,F_.innerRadius),Z0=E_(O_.outerRadius,F_.outerRadius);return{...F_,d:x1(120,120,I_,Z0,S_,y_)}});if(u(w_),$_<1)R.current=requestAnimationFrame(s)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(s),v.current=q_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[Y]);let P=A.length?A:Y,U=B>0?j$(B):"0 B",C=V?.name||"",h=(C&&C!=="."?C:"Total")||"Total",e=U,Z_=K.length>1,n=(c)=>{if(!c?.path)return;let q_=S1(_.root,c.path);if(!q_||!Array.isArray(q_.children)||q_.children.length===0)return;z((n_)=>[...n_,q_.path]),N(q_.path),j(null)},N_=()=>{if(!Z_)return;z((c)=>{let q_=c.slice(0,-1);return N(q_[q_.length-1]||_?.root?.path||"."),q_}),j(null)};return O`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${W?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${P.length}
                data-base-size=${B}>
                ${P.map((c)=>O`
                    <path
                        key=${c.key}
                        d=${c.d}
                        fill=${c.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===c.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(c)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(c)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>n(c)}
                    >
                        <title>${c.label} — ${j$(c.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${Z_?" is-drill":""}`}
                    onClick=${N_}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${e}</text>
                </g>
            </svg>
            ${F.length>0&&O`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((c)=>O`
                        <div key=${c.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${c.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${c.name}>${c.name}</span>
                            <span class="workspace-folder-starburst-size">${j$(c.size)}</span>
                            <span class="workspace-folder-starburst-pct">${c.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&O`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function v5({mediaId:_}){let[$,j]=T(null);if(f(()=>{if(!_)return;j2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?j$($.metadata.size):"";return O`
        <a href=${L$(_)} download=${Z} class="file-attachment"
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
                ${N&&O`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function N8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:z=!1}){let[W,q]=T(null),[V,B]=T(new Set(["."])),[Y,F]=T(null),[A,u]=T(null),[v,R]=T(""),[P,U]=T(null),[C,w]=T(null),[h,e]=T(!0),[Z_,n]=T(!1),[N_,c]=T(null),[q_,n_]=T(()=>Z2("workspaceShowHidden",!1)),[r,s]=T(!1),[z_,$_]=T(null),[G_,w_]=T(null),[F_,B_]=T(null),[O_,E_]=T(!1),[S_,y_]=T(null),[I_,Z0]=T(()=>d6()),[K0,Y_]=T(()=>M1({stored:$$(Y4),...P1()})),[a,k_]=T(!1),W_=D(V),x_=D(""),A_=D(null),T_=D(0),C_=D(new Set),s_=D(null),f_=D(new Map),o_=D(_),b_=D(Z),c_=D(null),R_=D(null),G0=D(null),W0=D(null),b0=D(null),c0=D(null),y0=D("."),u_=D(null),U0=D({path:null,dragging:!1,startX:0,startY:0}),_0=D({path:null,dragging:!1,startX:0,startY:0}),m_=D({path:null,timer:0}),k0=D(!1),d_=D(0),F0=D(new Map),S0=D(null),U_=D(null),I=D(null),__=D(null),P_=D(null),h_=D(null),B0=D(q_),I0=D($),A0=D(j??$),N0=D(0),w0=D(F_),d0=D(r),Z$=D(z_),H$=D(null),N$=D({x:0,y:0}),K$=D(0),C$=D(null),h0=D(Y),V0=D(A),b$=D(null),s0=D(null),J0=D(P);o_.current=_,b_.current=Z,f(()=>{W_.current=V},[V]),f(()=>{B0.current=q_},[q_]),f(()=>{I0.current=$},[$]),f(()=>{A0.current=j??$},[j,$]),f(()=>{w0.current=F_},[F_]),f(()=>{if(typeof window>"u")return;let L=()=>{Y_(M1({stored:$$(Y4),...P1()}))};L();let J=()=>L(),E=()=>L(),k=(l)=>{if(!l||l.key===null||l.key===Y4)L()};window.addEventListener("resize",J),window.addEventListener("focus",E),window.addEventListener("storage",k);let m=window.matchMedia?.("(pointer: coarse)"),i=window.matchMedia?.("(hover: none)"),t=(l,K_)=>{if(!l)return;if(l.addEventListener)l.addEventListener("change",K_);else if(l.addListener)l.addListener(K_)},o=(l,K_)=>{if(!l)return;if(l.removeEventListener)l.removeEventListener("change",K_);else if(l.removeListener)l.removeListener(K_)};return t(m,J),t(i,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",E),window.removeEventListener("storage",k),o(m,J),o(i,J)}},[]),f(()=>{let L=(J)=>{let E=J?.detail?.path;if(!E)return;let k=E.split("/"),m=[];for(let i=1;i<k.length;i++)m.push(k.slice(0,i).join("/"));if(m.length)B((i)=>{let t=new Set(i);t.add(".");for(let o of m)t.add(o);return t});F(E),requestAnimationFrame(()=>{let i=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(i)i.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",L),()=>window.removeEventListener("workspace-reveal-path",L)},[]),f(()=>{d0.current=r},[r]),f(()=>{Z$.current=z_},[z_]),f(()=>{h0.current=Y},[Y]),f(()=>{V0.current=A},[A]),f(()=>{J0.current=P},[P]),f(()=>{if(typeof window>"u"||typeof document>"u")return;let L=()=>Z0(d6());L();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>L();if(J?.addEventListener)J.addEventListener("change",E);else if(J?.addListener)J.addListener(E);let k=typeof MutationObserver<"u"?new MutationObserver(()=>L()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",E);else if(J?.removeListener)J.removeListener(E);k?.disconnect()}},[]),f(()=>{if(!A)return;let L=b0.current;if(!L)return;let J=requestAnimationFrame(()=>{try{L.focus(),L.select()}catch{}});return()=>cancelAnimationFrame(J)},[A]),f(()=>{if(!a)return;let L=(E)=>{let k=E?.target;if(!(k instanceof Element))return;if(P_.current?.contains(k))return;if(h_.current?.contains(k))return;k_(!1)},J=(E)=>{if(E?.key==="Escape")k_(!1),h_.current?.focus?.()};return document.addEventListener("mousedown",L),document.addEventListener("touchstart",L,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("touchstart",L),document.removeEventListener("keydown",J)}},[a]);let R$=async(L)=>{n(!0),U(null),w(null);try{let J=await h4(L,20000);U(J)}catch(J){U({error:J.message||"Failed to load preview"})}finally{n(!1)}};c_.current=R$;let x0=async()=>{if(!I0.current)return;try{let L=await J2("",1,B0.current),J=n6(L.root,W_.current,B0.current);if(J===x_.current){e(!1);return}if(x_.current=J,A_.current=L.root,!T_.current)T_.current=requestAnimationFrame(()=>{T_.current=0,q((E)=>I1(E,A_.current)),e(!1)})}catch(L){c(L.message||"Failed to load workspace"),e(!1)}},v$=async(L)=>{if(!L)return;if(C_.current.has(L))return;C_.current.add(L);try{let J=await J2(L,1,B0.current);q((E)=>b1(E,L,J.root))}catch(J){c(J.message||"Failed to load workspace")}finally{C_.current.delete(L)}};R_.current=v$;let $0=y(()=>{let L=Y;if(!L)return".";let J=f_.current?.get(L);if(J&&J.type==="dir")return J.path;if(L==="."||!L.includes("/"))return".";let E=L.split("/");return E.pop(),E.join("/")||"."},[Y]),z$=y((L)=>{let J=L?.closest?.(".workspace-row");if(!J)return null;let E=J.dataset.path,k=J.dataset.type;if(!E)return null;if(k==="dir")return E;if(E.includes("/")){let m=E.split("/");return m.pop(),m.join("/")||"."}return"."},[]),Y$=y((L)=>{return z$(L?.target||null)},[z$]),z0=y((L)=>{w0.current=L,B_(L)},[]),H0=y(()=>{let L=m_.current;if(L?.timer)clearTimeout(L.timer);m_.current={path:null,timer:0}},[]),o0=y((L)=>{if(!L||L==="."){H0();return}let J=f_.current?.get(L);if(!J||J.type!=="dir"){H0();return}if(W_.current?.has(L)){H0();return}if(m_.current?.path===L)return;H0();let E=setTimeout(()=>{m_.current={path:null,timer:0},R_.current?.(L),B((k)=>{let m=new Set(k);return m.add(L),m})},600);m_.current={path:L,timer:E}},[H0]),D$=y((L,J)=>{if(N$.current={x:L,y:J},K$.current)return;K$.current=requestAnimationFrame(()=>{K$.current=0;let E=H$.current;if(!E)return;let k=N$.current;E.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),E$=y((L)=>{if(!L)return;let E=(f_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!E)return;w_({path:L,label:E})},[]),u$=y(()=>{if(w_(null),K$.current)cancelAnimationFrame(K$.current),K$.current=0;if(H$.current)H$.current.style.transform="translate(-9999px, -9999px)"},[]),S$=y((L)=>{if(!L)return".";let J=f_.current?.get(L);if(J&&J.type==="dir")return J.path;if(L==="."||!L.includes("/"))return".";let E=L.split("/");return E.pop(),E.join("/")||"."},[]),O0=y(()=>{u(null),R("")},[]),Q$=y((L)=>{if(!L)return;let E=(f_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!E||L===".")return;u(L),R(E)},[]),T0=y(async()=>{let L=V0.current;if(!L)return;let J=(v||"").trim();if(!J){O0();return}let E=f_.current?.get(L),k=(E?.name||L.split("/").pop()||L).trim();if(J===k){O0();return}try{let i=(await n4(L,J))?.path||L,t=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(O0(),c(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:L,newPath:i,type:E?.type||"file"}})),E?.type==="dir")B((o)=>{let l=new Set;for(let K_ of o)if(K_===L)l.add(i);else if(K_.startsWith(`${L}/`))l.add(`${i}${K_.slice(L.length)}`);else l.add(K_);return l});if(F(i),E?.type==="dir")U(null),n(!1),w(null);else c_.current?.(i);R_.current?.(t)}catch(m){c(m?.message||"Failed to rename file")}},[O0,v]),P0=y(async(L)=>{let k=L||".";for(let m=0;m<50;m+=1){let t=`untitled${m===0?"":`-${m}`}.md`;try{let l=(await l4(k,t,""))?.path||(k==="."?t:`${k}/${t}`);if(k&&k!==".")B((K_)=>new Set([...K_,k]));F(l),c(null),R_.current?.(k),c_.current?.(l);return}catch(o){if(o?.status===409||o?.code==="file_exists")continue;c(o?.message||"Failed to create file");return}}c("Failed to create file (untitled name already in use).")},[]),f0=y((L)=>{if(L?.stopPropagation?.(),O_)return;let J=S$(h0.current);P0(J)},[O_,S$,P0]);f(()=>{if(typeof window>"u")return;let L=(J)=>{let E=J?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;q((o)=>{let l=o;for(let K_ of E){if(!K_?.root)continue;if(!l||K_.path==="."||!K_.path)l=K_.root;else l=b1(l,K_.path,K_.root)}if(l)x_.current=n6(l,W_.current,B0.current);return e(!1),l});let k=h0.current;if(Boolean(k)&&E.some((o)=>{let l=o?.path||"";if(!l||l===".")return!0;return k===l||k.startsWith(`${l}/`)||l.startsWith(`${k}/`)}))F0.current.clear();if(!k||!J0.current)return;let i=f_.current?.get(k);if(i&&i.type==="dir")return;if(E.some((o)=>{let l=o?.path||"";if(!l||l===".")return!0;return k===l||k.startsWith(`${l}/`)}))c_.current?.(k)};return window.addEventListener("workspace-update",L),()=>window.removeEventListener("workspace-update",L)},[]),s_.current=x0;let m$=D(()=>{if(typeof window>"u")return;let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=A0.current??I0.current,E=document.visibilityState!=="hidden"&&(J||L.matches&&I0.current);H2(E,B0.current).catch(()=>{})}).current,C0=D(0),s$=D(()=>{if(C0.current)clearTimeout(C0.current);C0.current=setTimeout(()=>{C0.current=0,m$()},250)}).current;f(()=>{if(I0.current)s_.current?.();s$()},[$,j]),f(()=>{s_.current(),m$();let L=setInterval(()=>s_.current(),x5),J=N2("previewHeight",null),E=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(d_.current=E,G0.current)G0.current.style.setProperty("--preview-height",`${E}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>s$();if(k.addEventListener)k.addEventListener("change",m);else if(k.addListener)k.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(L),T_.current)cancelAnimationFrame(T_.current),T_.current=0;if(k.removeEventListener)k.removeEventListener("change",m);else if(k.removeListener)k.removeListener(m);if(document.removeEventListener("visibilitychange",m),C0.current)clearTimeout(C0.current),C0.current=0;if(u_.current)clearTimeout(u_.current),u_.current=null;H2(!1,B0.current).catch(()=>{})}},[]);let y$=t_(()=>r6(W,V,q_),[W,V,q_]),g$=t_(()=>new Map(y$.map((L)=>[L.node.path,L.node])),[y$]),k$=t_(()=>l6(K0),[K0]);f_.current=g$;let i_=(Y?f_.current.get(Y):null)?.type==="dir";f(()=>{if(!Y||!i_){y_(null),S0.current=null,U_.current=null;return}let L=Y,J=`${q_?"hidden":"visible"}:${Y}`,E=F0.current,k=E.get(J);if(k?.root){E.delete(J),E.set(J,k);let t=s6(k.root,Boolean(k.truncated),I_);if(t)S0.current=t,U_.current=Y,y_({loading:!1,error:null,payload:t});return}let m=S0.current,i=U_.current;y_({loading:!0,error:null,payload:i===Y?m:null}),J2(Y,T5,q_).then((t)=>{if(h0.current!==L)return;let o={root:t?.root,truncated:Boolean(t?.truncated)};E.delete(J),E.set(J,o);while(E.size>f5){let K_=E.keys().next().value;if(!K_)break;E.delete(K_)}let l=s6(o.root,o.truncated,I_);S0.current=l,U_.current=Y,y_({loading:!1,error:null,payload:l})}).catch((t)=>{if(h0.current!==L)return;y_({loading:!1,error:t?.message||"Failed to load folder size chart",payload:i===Y?m:null})})},[Y,i_,q_,I_]);let D0=Boolean(P&&P.kind==="text"&&!i_&&(!P.size||P.size<=262144)),R0=D0?"Open in editor":P?.size>262144?"File too large to edit":"File is not editable",p$=Boolean(Y&&Y!=="."),c$=Boolean(Y&&!i_),h$=Boolean(Y&&!i_),U$=Y&&i_?o2(Y,q_):null,v0=y(()=>k_(!1),[]),X0=y(async(L)=>{v0();try{await L?.()}catch{}},[v0]);f(()=>{let L=I.current;if(__.current)__.current.dispose(),__.current=null;if(!L)return;if(L.innerHTML="",!Y||i_||!P||P.error)return;let J={path:Y,content:typeof P.text==="string"?P.text:void 0,mtime:P.mtime,size:P.size,preview:P,mode:"view"},E=e_.resolve(J)||e_.get("workspace-preview-default");if(!E)return;let k=E.mount(L,J);return __.current=k,()=>{if(__.current===k)k.dispose(),__.current=null;L.innerHTML=""}},[Y,i_,P]);let Q0=(L)=>{let J=L?.target;if(J instanceof Element)return J;return J?.parentElement||null},G$=(L)=>{return Boolean(L?.closest?.(".workspace-node-icon, .workspace-label-text"))},Q=D((L)=>{if(s0.current)clearTimeout(s0.current),s0.current=null;let E=Q0(L)?.closest?.("[data-path]");if(!E)return;let k=E.dataset.path;if(E.dataset.type==="dir"||!k)return;if(V0.current===k)O0();b_.current?.(k)}).current,S=D((L)=>{if(k0.current){k0.current=!1;return}let J=Q0(L),E=J?.closest?.("[data-path]");if(W0.current?.focus?.(),!E)return;let k=E.dataset.path,m=E.dataset.type,i=Boolean(J?.closest?.(".workspace-caret")),t=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),o=h0.current===k,l=V0.current;if(l){if(l===k)return;O0()}let K_=m==="file"&&b$.current===k&&!i&&!t;if(o&&!i&&!t&&k!=="."&&!K_){if(s0.current)clearTimeout(s0.current);s0.current=setTimeout(()=>{s0.current=null,Q$(k)},350);return}if(m==="dir"){if(b$.current=null,F(k),U(null),w(null),n(!1),!W_.current.has(k))R_.current?.(k);if(o&&!i)return;B((A$)=>{let a0=new Set(A$);if(a0.has(k))a0.delete(k);else a0.add(k);return a0})}else{b$.current=null,F(k);let v_=f_.current.get(k);if(v_)o_.current?.(v_.path,v_);c_.current?.(k)}}).current,x=D(()=>{x_.current="",s_.current(),Array.from(W_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>R_.current?.(J))}).current,d=D(()=>{b$.current=null,F(null),U(null),w(null),n(!1)}).current,V_=D(()=>{n_((L)=>{let J=!L;if(typeof window<"u")j0("workspaceShowHidden",String(J));return B0.current=J,H2(!0,J).catch(()=>{}),x_.current="",s_.current?.(),Array.from(W_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>R_.current?.(k)),J})}).current,Q_=D((L)=>{if(Q0(L)?.closest?.("[data-path]"))return;d()}).current,L_=y(async(L)=>{if(!L)return;let J=L.split("/").pop()||L;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await s4(L);let k=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(h0.current===L)d();R_.current?.(k),c(null)}catch(k){U((m)=>({...m||{},error:k.message||"Failed to delete file"}))}},[d]),Y0=y((L)=>{let J=W0.current;if(!J||!L||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),i0=y((L)=>{let J=y$;if(!J||J.length===0)return;let E=Y?J.findIndex((k)=>k.node.path===Y):-1;if(L.key==="ArrowDown"){L.preventDefault();let k=Math.min(E+1,J.length-1),m=J[k];if(!m)return;if(F(m.node.path),m.node.type!=="dir")o_.current?.(m.node.path,m.node),c_.current?.(m.node.path);else U(null),n(!1),w(null);Y0(m.node.path);return}if(L.key==="ArrowUp"){L.preventDefault();let k=E<=0?0:E-1,m=J[k];if(!m)return;if(F(m.node.path),m.node.type!=="dir")o_.current?.(m.node.path,m.node),c_.current?.(m.node.path);else U(null),n(!1),w(null);Y0(m.node.path);return}if(L.key==="ArrowRight"&&E>=0){let k=J[E];if(k?.node?.type==="dir"&&!V.has(k.node.path))L.preventDefault(),R_.current?.(k.node.path),B((m)=>new Set([...m,k.node.path]));return}if(L.key==="ArrowLeft"&&E>=0){let k=J[E];if(k?.node?.type==="dir"&&V.has(k.node.path))L.preventDefault(),B((m)=>{let i=new Set(m);return i.delete(k.node.path),i});return}if(L.key==="Enter"&&E>=0){L.preventDefault();let k=J[E];if(!k)return;let m=k.node.path;if(k.node.type==="dir"){if(!W_.current.has(m))R_.current?.(m);B((t)=>{let o=new Set(t);if(o.has(m))o.delete(m);else o.add(m);return o}),U(null),w(null),n(!1)}else o_.current?.(m,k.node),c_.current?.(m);return}if((L.key==="Delete"||L.key==="Backspace")&&E>=0){let k=J[E];if(!k||k.node.type==="dir")return;L.preventDefault(),L_(k.node.path);return}if(L.key==="Escape")L.preventDefault(),d()},[d,L_,V,y$,Y0,Y]),M_=y((L)=>{let J=Q0(L),E=J?.closest?.(".workspace-row");if(!E)return;let k=E.dataset.type,m=E.dataset.path;if(!m||m===".")return;if(V0.current===m)return;let i=L?.touches?.[0];if(!i)return;if(U0.current={path:G$(J)?m:null,dragging:!1,startX:i.clientX,startY:i.clientY},k!=="file")return;if(u_.current)clearTimeout(u_.current);u_.current=setTimeout(()=>{if(u_.current=null,U0.current?.dragging)return;L_(m)},600)},[L_]),u0=y(()=>{if(u_.current)clearTimeout(u_.current),u_.current=null;let L=U0.current;if(L?.dragging&&L.path){let J=w0.current||$0(),E=C$.current;if(typeof E==="function")E(L.path,J)}U0.current={path:null,dragging:!1,startX:0,startY:0},N0.current=0,s(!1),$_(null),z0(null),H0(),u$()},[$0,u$,z0,H0]),F$=y((L)=>{let J=U0.current,E=L?.touches?.[0];if(!E||!J?.path){if(u_.current)clearTimeout(u_.current),u_.current=null;return}let k=Math.abs(E.clientX-J.startX),m=Math.abs(E.clientY-J.startY),i=k>8||m>8;if(i&&u_.current)clearTimeout(u_.current),u_.current=null;if(!J.dragging&&i)J.dragging=!0,s(!0),$_("move"),E$(J.path);if(J.dragging){L.preventDefault(),D$(E.clientX,E.clientY);let t=document.elementFromPoint(E.clientX,E.clientY),o=z$(t)||$0();if(w0.current!==o)z0(o);o0(o)}},[z$,$0,E$,D$,z0,o0]),J$=D((L)=>{L.preventDefault();let J=G0.current;if(!J)return;let E=L.clientY,k=d_.current||280,m=L.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let i=E,t=(l)=>{i=l.clientY;let K_=J.clientHeight-80,v_=Math.min(Math.max(k-(l.clientY-E),80),K_);J.style.setProperty("--preview-height",`${v_}px`),d_.current=v_},o=()=>{let l=J.clientHeight-80,K_=Math.min(Math.max(k-(i-E),80),l);d_.current=K_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",j0("previewHeight",String(Math.round(K_))),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",o)}).current,W$=D((L)=>{L.preventDefault();let J=G0.current;if(!J)return;let E=L.touches[0];if(!E)return;let k=E.clientY,m=d_.current||280,i=L.currentTarget;i.classList.add("dragging"),document.body.style.userSelect="none";let t=(l)=>{let K_=l.touches[0];if(!K_)return;l.preventDefault();let v_=J.clientHeight-80,A$=Math.min(Math.max(m-(K_.clientY-k),80),v_);J.style.setProperty("--preview-height",`${A$}px`),d_.current=A$},o=()=>{i.classList.remove("dragging"),document.body.style.userSelect="",j0("previewHeight",String(Math.round(d_.current||m))),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",o),document.removeEventListener("touchcancel",o)};document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",o),document.addEventListener("touchcancel",o)}).current,V$=async()=>{if(!Y)return;try{let L=await i4(Y);if(L.media_id)w(L.media_id)}catch(L){U((J)=>({...J||{},error:L.message||"Failed to attach"}))}},E0=async()=>{if(!Y||i_)return;await L_(Y)},J_=(L)=>{return Array.from(L?.dataTransfer?.types||[]).includes("Files")},o$=y((L)=>{if(!J_(L))return;if(L.preventDefault(),N0.current+=1,!d0.current)s(!0);$_("upload");let J=Y$(L)||$0();z0(J),o0(J)},[$0,Y$,z0,o0]),W2=y((L)=>{if(!J_(L))return;if(L.preventDefault(),L.dataTransfer)L.dataTransfer.dropEffect="copy";if(!d0.current)s(!0);if(Z$.current!=="upload")$_("upload");let J=Y$(L)||$0();if(w0.current!==J)z0(J);o0(J)},[$0,Y$,z0,o0]),V2=y((L)=>{if(!J_(L))return;if(L.preventDefault(),N0.current=Math.max(0,N0.current-1),N0.current===0)s(!1),$_(null),z0(null),H0()},[z0,H0]),m0=y(async(L,J=".")=>{let E=Array.from(L||[]);if(E.length===0)return;let k=J&&J!==""?J:".",m=k!=="."?k:"workspace root";E_(!0);try{let i=null;for(let t of E)try{i=await d2(t,k)}catch(o){let l=o?.status,K_=o?.code;if(l===409||K_==="file_exists"){let v_=t?.name||"file";if(!window.confirm(`"${v_}" already exists in ${m}. Overwrite?`))continue;i=await d2(t,k,{overwrite:!0})}else throw o}if(i?.path)b$.current=i.path,F(i.path),c_.current?.(i.path);R_.current?.(k)}catch(i){c(i.message||"Failed to upload file")}finally{E_(!1)}},[]),g0=y(async(L,J)=>{if(!L)return;let E=f_.current?.get(L);if(!E)return;let k=J&&J!==""?J:".",m=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(k===m)return;try{let t=(await d4(L,k))?.path||L;if(E.type==="dir")B((o)=>{let l=new Set;for(let K_ of o)if(K_===L)l.add(t);else if(K_.startsWith(`${L}/`))l.add(`${t}${K_.slice(L.length)}`);else l.add(K_);return l});if(F(t),E.type==="dir")U(null),n(!1),w(null);else c_.current?.(t);R_.current?.(m),R_.current?.(k)}catch(i){c(i?.message||"Failed to move entry")}},[]);C$.current=g0;let I$=y(async(L)=>{if(!J_(L))return;L.preventDefault(),N0.current=0,s(!1),$_(null),B_(null),H0();let J=Array.from(L?.dataTransfer?.files||[]);if(J.length===0)return;let E=w0.current||Y$(L)||$0();await m0(J,E)},[$0,Y$,m0]),r0=y((L)=>{if(L?.stopPropagation?.(),O_)return;let J=L?.currentTarget?.dataset?.uploadTarget||".";y0.current=J,c0.current?.click()},[O_]),M0=y(()=>{if(O_)return;let L=h0.current,J=L?f_.current?.get(L):null;y0.current=J?.type==="dir"?J.path:".",c0.current?.click()},[O_]),r$=y(()=>{X0(()=>f0(null))},[X0,f0]),C2=y(()=>{X0(()=>M0())},[X0,M0]),X$=y(()=>{X0(()=>x())},[X0,x]),x$=y(()=>{X0(()=>V_())},[X0,V_]),b2=y(()=>{if(!Y||!D0)return;X0(()=>b_.current?.(Y,P))},[X0,Y,D0,P]),a$=y(()=>{if(!Y||Y===".")return;X0(()=>Q$(Y))},[X0,Y,Q$]),S2=y(()=>{if(!Y||i_)return;X0(()=>E0())},[X0,Y,i_,E0]),q$=y(()=>{if(!Y||i_)return;X0(()=>V$())},[X0,Y,i_,V$]),I2=y(()=>{if(!U$)return;if(v0(),typeof window<"u")window.open(U$,"_blank","noopener")},[v0,U$]),W4=y(()=>{v0(),N?.()},[v0,N]),X2=y(()=>{v0(),K?.()},[v0,K]),q2=y((L)=>{if(!L||L.button!==0)return;let J=L.currentTarget;if(!J||!J.dataset)return;let E=J.dataset.path;if(!E||E===".")return;if(V0.current===E)return;let k=Q0(L);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!G$(k))return;L.preventDefault(),_0.current={path:E,dragging:!1,startX:L.clientX,startY:L.clientY};let m=(t)=>{let o=_0.current;if(!o?.path)return;let l=Math.abs(t.clientX-o.startX),K_=Math.abs(t.clientY-o.startY),v_=l>4||K_>4;if(!o.dragging&&v_)o.dragging=!0,k0.current=!0,s(!0),$_("move"),E$(o.path),D$(t.clientX,t.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(o.dragging){t.preventDefault(),D$(t.clientX,t.clientY);let A$=document.elementFromPoint(t.clientX,t.clientY),a0=z$(A$)||$0();if(w0.current!==a0)z0(a0);o0(a0)}},i=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",i);let t=_0.current;if(t?.dragging&&t.path){let o=w0.current||$0(),l=C$.current;if(typeof l==="function")l(t.path,o)}_0.current={path:null,dragging:!1,startX:0,startY:0},N0.current=0,s(!1),$_(null),z0(null),H0(),u$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",i)},[z$,$0,E$,D$,u$,z0,o0,H0]),V4=y(async(L)=>{let J=Array.from(L?.target?.files||[]);if(J.length===0)return;let E=y0.current||".";if(await m0(J,E),y0.current=".",L?.target)L.target.value=""},[m0]);return O`
        <aside
            class=${`workspace-sidebar${r?" workspace-drop-active":""}`}
            data-workspace-scale=${K0}
            ref=${G0}
            onDragEnter=${o$}
            onDragOver=${W2}
            onDragLeave=${V2}
            onDrop=${I$}
        >
            <input type="file" multiple style="display:none" ref=${c0} onChange=${V4} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${h_}
                            class=${`workspace-menu-button${a?" active":""}`}
                            onClick=${(L)=>{L.stopPropagation(),k_((J)=>!J)}}
                            title="Workspace menu"
                            aria-label="Workspace menu"
                            aria-haspopup="menu"
                            aria-expanded=${a?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${a&&O`
                            <div class="workspace-menu-dropdown" ref=${P_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${r$} disabled=${O_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${C2} disabled=${O_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${X$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${q_?" active":""}`} role="menuitem" onClick=${x$}>
                                    ${q_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${Y&&O`<div class="workspace-menu-separator"></div>`}
                                ${Y&&!i_&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2} disabled=${!D0}>Open in editor</button>
                                `}
                                ${p$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${a$}>Rename selected</button>
                                `}
                                ${h$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q$}>Download selected file</button>
                                `}
                                ${U$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I2}>Download selected folder (zip)</button>
                                `}
                                ${c$&&O`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${S2}>Delete selected file</button>
                                `}

                                ${(N||K)&&O`<div class="workspace-menu-separator"></div>`}
                                ${N&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${W4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X2}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${f0} title="New file" disabled=${O_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${x} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${Q_}>
                ${O_&&O`<div class="workspace-drop-hint">Uploading…</div>`}
                ${h&&O`<div class="workspace-loading">Loading…</div>`}
                ${N_&&O`<div class="workspace-error">${N_}</div>`}
                ${W&&O`
                    <div
                        class="workspace-tree-list"
                        ref=${W0}
                        tabIndex="0"
                        onClick=${S}
                        onDblClick=${Q}
                        onKeyDown=${i0}
                        onTouchStart=${M_}
                        onTouchEnd=${u0}
                        onTouchMove=${F$}
                        onTouchCancel=${u0}
                    >
                        ${y$.map(({node:L,depth:J})=>{let E=L.type==="dir",k=L.path===Y,m=L.path===A,i=E&&V.has(L.path),t=F_&&L.path===F_,o=Array.isArray(L.children)&&L.children.length>0?L.children.length:Number(L.child_count)||0;return O`
                                <div
                                    key=${L.path}
                                    class=${`workspace-row${k?" selected":""}${t?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*k$.indentPx}px`}}
                                    data-path=${L.path}
                                    data-type=${L.type}
                                    onMouseDown=${q2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?i?O`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:O`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?O`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:O`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${m?O`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${b0}
                                                value=${v}
                                                onInput=${(l)=>R(l?.target?.value||"")}
                                                onKeyDown=${(l)=>{if(l.key==="Enter")l.preventDefault(),T0();else if(l.key==="Escape")l.preventDefault(),O0()}}
                                                onBlur=${O0}
                                                onClick=${(l)=>l.stopPropagation()}
                                            />
                                        `:O`<span class="workspace-label"><span class="workspace-label-text">${L.name}</span></span>`}
                                    ${E&&!i&&o>0&&O`
                                        <span class="workspace-count">${o}</span>
                                    `}
                                    ${E&&O`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${L.path}
                                            title="Upload files to this folder"
                                            onClick=${r0}
                                            disabled=${O_}
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
            ${Y&&O`
                <div class="workspace-preview-splitter-h" onMouseDown=${J$} onTouchStart=${W$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${Y}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${f0} title="New file" disabled=${O_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!i_&&O`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>D0&&b_.current?.(Y,P)}
                                    title=${R0}
                                    disabled=${!D0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${E0}
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
                            ${i_?O`
                                    <button class="workspace-download" onClick=${M0}
                                        title="Upload files to this folder" disabled=${O_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${o2(Y,q_)}
                                        title="Download folder as zip" onClick=${(L)=>L.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:O`<button class="workspace-download" onClick=${V$} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${Z_&&O`<div class="workspace-loading">Loading preview…</div>`}
                    ${P?.error&&O`<div class="workspace-error">${P.error}</div>`}
                    ${i_&&O`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${S_?.loading&&O`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${S_?.error&&O`<div class="workspace-error">${S_.error}</div>`}
                        ${S_?.payload&&S_.payload.segments?.length>0&&O`
                            <${R5} payload=${S_.payload} />
                        `}
                        ${S_?.payload&&(!S_.payload.segments||S_.payload.segments.length===0)&&O`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${P&&!P.error&&!i_&&O`
                        <div class="workspace-preview-body" ref=${I}></div>
                    `}
                    ${C&&O`
                        <div class="workspace-download-card">
                            <${v5} mediaId=${C} />
                        </div>
                    `}
                </div>
            `}
            ${G_&&O`
                <div class="workspace-drag-ghost" ref=${H$}>${G_.label}</div>
            `}
        </aside>
    `}var u5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,m5=/\.(csv|tsv)$/i,g5=/\.pdf$/i,p5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,K8=/\.drawio(\.xml|\.svg|\.png)?$/i;function z8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:W,previewTabs:q,onToggleDock:V,dockVisible:B}){let[Y,F]=T(null),A=D(null);f(()=>{if(!Y)return;let U=(C)=>{if(C.type==="keydown"&&C.key!=="Escape")return;F(null)};return document.addEventListener("click",U),document.addEventListener("keydown",U),()=>{document.removeEventListener("click",U),document.removeEventListener("keydown",U)}},[Y]),f(()=>{let U=(C)=>{if(C.ctrlKey&&C.key==="Tab"){if(C.preventDefault(),!_.length)return;let w=_.findIndex((h)=>h.id===$);if(C.shiftKey){let h=_[(w-1+_.length)%_.length];j?.(h.id)}else{let h=_[(w+1)%_.length];j?.(h.id)}return}if((C.ctrlKey||C.metaKey)&&C.key==="w"){let w=document.querySelector(".editor-pane");if(w&&w.contains(document.activeElement)){if(C.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$,j,Z]);let u=y((U,C)=>{if(U.button===1){U.preventDefault(),Z?.(C);return}if(U.button===0)j?.(C)},[j,Z]),v=y((U,C)=>{U.preventDefault(),F({id:C,x:U.clientX,y:U.clientY})},[]),R=y((U)=>{U.preventDefault(),U.stopPropagation()},[]),P=y((U,C)=>{U.preventDefault(),U.stopPropagation(),Z?.(C)},[Z]);if(f(()=>{if(!$||!A.current)return;let U=A.current.querySelector(".tab-item.active");if(U)U.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return O`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((U)=>O`
                <div
                    key=${U.id}
                    class=${`tab-item${U.id===$?" active":""}${U.dirty?" dirty":""}${U.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${U.id===$}
                    title=${U.path}
                    onMouseDown=${(C)=>u(C,U.id)}
                    onContextMenu=${(C)=>v(C,U.id)}
                >
                    ${U.pinned&&O`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${U.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${R}
                        onClick=${(C)=>P(C,U.id)}
                        title=${U.dirty?"Unsaved changes":"Close"}
                        aria-label=${U.dirty?"Unsaved changes":`Close ${U.label}`}
                    >
                        ${U.dirty?O`<span class="tab-dirty-dot" aria-hidden="true"></span>`:O`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&O`
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
        </div>
        ${Y&&O`
            <div class="tab-context-menu" style=${{left:Y.x+"px",top:Y.y+"px"}}>
                <button onClick=${()=>{Z?.(Y.id),F(null)}}>Close</button>
                <button onClick=${()=>{N?.(Y.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(Y.id),F(null)}}>
                    ${_.find((U)=>U.id===Y.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${W&&/\.(md|mdx|markdown)$/i.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{W(Y.id),F(null)}}>
                        ${q?.has(Y.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${u5.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let U="/workspace/raw?path="+encodeURIComponent(Y.id),C=Y.id.split("/").pop()||"document",w="/office-viewer/?url="+encodeURIComponent(U)+"&name="+encodeURIComponent(C);window.open(w,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${m5.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let U="/csv-viewer/?path="+encodeURIComponent(Y.id);window.open(U,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${g5.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let U="/workspace/raw?path="+encodeURIComponent(Y.id);window.open(U,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${p5.test(Y.id)&&!K8.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let U="/image-viewer/?path="+encodeURIComponent(Y.id);window.open(U,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${K8.test(Y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let U="/drawio/edit?path="+encodeURIComponent(Y.id);window.open(U,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var c5=400,T1=60,Y8=220,f1="mdPreviewHeight";function h5(){try{let _=localStorage.getItem(f1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=T1?$:Y8}catch{return Y8}}function G8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[K,z]=T(h5),W=D(null),q=D(null),V=D(""),B=D(_);return B.current=_,f(()=>{let A=()=>{let v=B.current?.()||"";if(v===V.current)return;V.current=v;try{let R=n0(v,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let u=setInterval(A,c5);return()=>clearInterval(u)},[]),f(()=>{if(W.current&&Z)P$(W.current).catch(()=>{})},[Z]),O`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let u=A.clientY,v=q.current?.offsetHeight||K,R=q.current?.parentElement,P=R?R.offsetHeight*0.7:500,U=A.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let C=(h)=>{let e=Math.min(Math.max(v-(h.clientY-u),T1),P);z(e)},w=()=>{U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(f1,String(Math.round(q.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",w)}}
            onTouchStart=${(A)=>{A.preventDefault();let u=A.touches[0];if(!u)return;let v=u.clientY,R=q.current?.offsetHeight||K,P=q.current?.parentElement,U=P?P.offsetHeight*0.7:500,C=A.currentTarget;C.classList.add("dragging"),document.body.style.userSelect="none";let w=(e)=>{let Z_=e.touches[0];if(!Z_)return;e.preventDefault();let n=Math.min(Math.max(R-(Z_.clientY-v),T1),U);z(n)},h=()=>{C.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(f1,String(Math.round(q.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",w),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",w,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
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
                ref=${W}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function W8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=D(_);K.current=_;let z=D($);z.current=$;let W=D(j);W.current=j;let q=D(Z);q.current=Z,f(()=>{W.current();let V=new r2((Y,F)=>K.current(Y,F),(Y)=>z.current(Y),{chatJid:N});V.connect();let B=()=>{V.reconnectIfNeeded();let Y=typeof document<"u"?document:null;if(!Y||Y.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),V.disconnect()}},[N])}function V8(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);f(()=>{let q=Z2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),f(()=>{N.current=_},[_]);let K=y(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),z=y(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await K();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),j0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),j0("notificationsEnabled",String(q))},[K]),W=y((q,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(q,{body:V});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:W}}var P2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function X8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[K,z]=T(!1),W=D(!1),q=D(null),V=D(!1),B=D(null),Y=D(null),F=D(0);f(()=>{W.current=K},[K]),f(()=>{Y.current=Z},[Z]),f(()=>{F.current+=1,Y.current=null,B.current=null,V.current=!1,W.current=!1,N(null),z(!1)},[j]);let A=y(async(R=null)=>{let P=F.current;try{if(R){let U=await M4(R,50,0,j);if(P!==F.current)return;N(U.posts),z(!1)}else{let U=await U2(10,null,j);if(P!==F.current)return;N(U.posts),z(U.has_more)}}catch(U){if(P!==F.current)return;console.error("Failed to load posts:",U)}},[j]),u=y(async()=>{let R=F.current;try{let P=await U2(10,null,j);if(R!==F.current)return;N((U)=>{if(!U||U.length===0)return P.posts;return P2([...P.posts,...U])}),z((U)=>U||P.has_more)}catch(P){if(R!==F.current)return;console.error("Failed to refresh timeline:",P)}},[j]),v=y(async(R={})=>{let P=F.current,U=Y.current;if(!U||U.length===0)return;if(V.current)return;let{preserveScroll:C=!0,preserveMode:w="top",allowRepeat:h=!1}=R,e=(N_)=>{if(!C){N_();return}if(w==="top")$(N_);else _(N_)},n=U.slice().sort((N_,c)=>N_.id-c.id)[0]?.id;if(!Number.isFinite(n))return;if(!h&&B.current===n)return;V.current=!0,B.current=n;try{let N_=await U2(10,n,j);if(P!==F.current)return;if(N_.posts.length>0)e(()=>{N((c)=>P2([...N_.posts,...c||[]])),z(N_.has_more)});else z(!1)}catch(N_){if(P!==F.current)return;console.error("Failed to load more posts:",N_)}finally{if(P===F.current)V.current=!1}},[j,_,$]);return f(()=>{q.current=v},[v]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:W,loadPosts:A,refreshTimeline:u,loadMore:v,loadMoreRef:q,loadingMoreRef:V,lastBeforeIdRef:B}}function q8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,K]=T(""),[z,W]=T({text:"",totalLines:0}),[q,V]=T(null),[B,Y]=T(null),[F,A]=T(null),u=D(null),v=D(0),R=D(!1),P=D(""),U=D(""),C=D(null),w=D(null),h=D(null),e=D(null),Z_=D(!1),n=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:W,pendingRequest:q,setPendingRequest:V,currentTurnId:B,setCurrentTurnId:Y,steerQueuedTurnId:F,setSteerQueuedTurnId:A,lastAgentEventRef:u,lastSilenceNoticeRef:v,isAgentRunningRef:R,draftBufferRef:P,thoughtBufferRef:U,pendingRequestRef:C,stalledPostIdRef:w,currentTurnIdRef:h,steerQueuedTurnIdRef:e,thoughtExpandedRef:Z_,draftExpandedRef:n}}function L8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let F=B.clientX,A=$.current||280,u=B.currentTarget;u.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=F,R=(U)=>{v=U.clientX;let C=Math.min(Math.max(A+(U.clientX-F),160),600);Y.style.setProperty("--sidebar-width",`${C}px`),$.current=C},P=()=>{let U=Math.min(Math.max(A+(v-F),160),600);$.current=U,u.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",j0("sidebarWidth",String(Math.round(U))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",P)}).current,K=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let F=B.touches[0];if(!F)return;let A=F.clientX,u=$.current||280,v=B.currentTarget;v.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(U)=>{let C=U.touches[0];if(!C)return;U.preventDefault();let w=Math.min(Math.max(u+(C.clientX-A),160),600);Y.style.setProperty("--sidebar-width",`${w}px`),$.current=w},P=()=>{v.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.userSelect="",j0("sidebarWidth",String(Math.round($.current||u))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current,z=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let F=B.clientX,A=j.current||$.current||280,u=B.currentTarget;u.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=F,R=(U)=>{v=U.clientX;let C=Math.min(Math.max(A+(U.clientX-F),200),800);Y.style.setProperty("--editor-width",`${C}px`),j.current=C},P=()=>{let U=Math.min(Math.max(A+(v-F),200),800);j.current=U,u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",j0("editorWidth",String(Math.round(U))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",P)}).current,W=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let F=B.touches[0];if(!F)return;let A=F.clientX,u=j.current||$.current||280,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(U)=>{let C=U.touches[0];if(!C)return;U.preventDefault();let w=Math.min(Math.max(u+(C.clientX-A),200),800);Y.style.setProperty("--editor-width",`${w}px`),j.current=w},P=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",j0("editorWidth",String(Math.round(j.current||u))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current,q=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let F=B.clientY,A=Z?.current||200,u=B.currentTarget;u.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let v=F,R=(U)=>{v=U.clientY;let C=Math.min(Math.max(A-(U.clientY-F),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},P=()=>{let U=Math.min(Math.max(A-(v-F),100),window.innerHeight*0.5);if(Z)Z.current=U;u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",j0("dockHeight",String(Math.round(U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",P)}).current,V=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let F=B.touches[0];if(!F)return;let A=F.clientY,u=Z?.current||200,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(U)=>{let C=U.touches[0];if(!C)return;U.preventDefault();let w=Math.min(Math.max(u-(C.clientY-A),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${w}px`),Z)Z.current=w;window.dispatchEvent(new CustomEvent("dock-resize"))},P=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",j0("dockHeight",String(Math.round(Z?.current||u))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:W,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:V}}function B8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>l_.getTabs()),[N,K]=T(()=>l_.getActiveId()),[z,W]=T(()=>l_.getTabs().length>0);f(()=>{return l_.onChange((w,h)=>{Z(w),K(h),W(w.length>0)})},[]);let[q,V]=T(()=>new Set),B=y((w)=>{V((h)=>{let e=new Set(h);if(e.has(w))e.delete(w);else e.add(w);return e})},[]),Y=y((w)=>{V((h)=>{if(!h.has(w))return h;let e=new Set(h);return e.delete(w),e})},[]),F=y((w,h={})=>{if(!w)return;let e={path:w,mode:"edit"};try{if(!e_.resolve(e)){if(!e_.get("editor")){console.warn(`[openEditor] No pane handler for: ${w}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${w}":`,n)}let Z_=typeof h?.label==="string"&&h.label.trim()?h.label.trim():void 0;l_.open(w,Z_)},[]),A=y(()=>{let w=l_.getActiveId();if(w){let h=l_.get(w);if(h?.dirty){if(!window.confirm(`"${h.label}" has unsaved changes. Close anyway?`))return}l_.close(w),Y(w),$.current?.(w)}},[Y]),u=y((w)=>{let h=l_.get(w);if(h?.dirty){if(!window.confirm(`"${h.label}" has unsaved changes. Close anyway?`))return}l_.close(w),Y(w),$.current?.(w)},[Y]),v=y((w)=>{l_.activate(w)},[]),R=y((w)=>{let h=l_.getTabs().filter((n)=>n.id!==w&&!n.pinned),e=h.filter((n)=>n.dirty).length;if(e>0){if(!window.confirm(`${e} unsaved tab${e>1?"s":""} will be closed. Continue?`))return}let Z_=h.map((n)=>n.id);l_.closeOthers(w),Z_.forEach((n)=>{Y(n),$.current?.(n)})},[Y]),P=y(()=>{let w=l_.getTabs().filter((Z_)=>!Z_.pinned),h=w.filter((Z_)=>Z_.dirty).length;if(h>0){if(!window.confirm(`${h} unsaved tab${h>1?"s":""} will be closed. Continue?`))return}let e=w.map((Z_)=>Z_.id);l_.closeAll(),e.forEach((Z_)=>{Y(Z_),$.current?.(Z_)})},[Y]),U=y((w)=>{l_.togglePin(w)},[]),C=y(()=>{let w=l_.getActiveId();if(w)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:w}}))},[]);return f(()=>{let w=(h)=>{let{oldPath:e,newPath:Z_,type:n}=h.detail||{};if(!e||!Z_)return;if(n==="dir"){for(let N_ of l_.getTabs())if(N_.path===e||N_.path.startsWith(`${e}/`)){let c=`${Z_}${N_.path.slice(e.length)}`;l_.rename(N_.id,c)}}else l_.rename(e,Z_)};return window.addEventListener("workspace-file-renamed",w),()=>window.removeEventListener("workspace-file-renamed",w)},[]),f(()=>{let w=(h)=>{if(l_.hasUnsaved())h.preventDefault(),h.returnValue=""};return window.addEventListener("beforeunload",w),()=>window.removeEventListener("beforeunload",w)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:F,closeEditor:A,handleTabClose:u,handleTabActivate:v,handleTabCloseOthers:R,handleTabCloseAll:P,handleTabTogglePin:U,handleTabTogglePreview:B,revealInExplorer:C}}function R1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var v1=R1("warning",30000),O8=R1("finalize",120000),u1=R1("refresh",30000),Q8=30000;function U8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function F8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function J8(_=30000){let[,$]=T(0);f(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function m1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function H8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function d$(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function g1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function D8(_,$={}){if(d$($))return null;if(g1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:i5(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function E8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function y8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function k8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function A8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function M2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function w8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function i5(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function p1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function c1(_){return String(_||"").trim()||"web:default"}function P8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function M8(_={}){return d$(_)&&g1(_)}function l5(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function n5(_={},$={}){if(!M8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=l5({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function C8(_={}){if(!M8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let Y of N)$.clearTimeout?.(Y);N.clear()},z=()=>{Z=0,n5({window:$,document:j})},W=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},q=()=>{W();for(let Y of[80,220,420]){let F=$.setTimeout?.(()=>{N.delete(F),W()},Y);if(F!=null)N.add(F)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},B=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",q,!0),B?.addEventListener?.("resize",q),B?.addEventListener?.("scroll",q),()=>{K(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",q,!0),B?.removeEventListener?.("resize",q),B?.removeEventListener?.("scroll",q)}}function d5(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function O$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:d5($,j)}var s5=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function b8(_){return s5.has(String(_||"").trim())}function o5(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function S8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(o5(_),{detail:Z})),!0}var r5=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function I8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(d$({window:j,navigator:Z}))};N();let z=r5.map((W)=>{try{return j.matchMedia?.(W)??null}catch{return null}}).filter(Boolean).map((W)=>{if(typeof W.addEventListener==="function")return W.addEventListener("change",N),()=>W.removeEventListener("change",N);if(typeof W.addListener==="function")return W.addListener(N),()=>W.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let W of z)W();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function x8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var i1="piclaw_btw_session";function a5(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function t5(){let _=$$(i1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var T8=C4,f8=S4,e5=x4,R8=u4,v8=m4,u8=T4,h1=O$(_$,"getAgentContext",null),_j=O$(_$,"getAgentModels",{current:null,models:[]}),$j=O$(_$,"getActiveChatAgents",{chats:[]}),m8=O$(_$,"getChatBranches",{chats:[]}),jj=O$(_$,"renameChatBranch",null),Zj=O$(_$,"pruneChatBranch",null),Nj=O$(_$,"getAgentQueueState",{count:0}),Kj=O$(_$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),zj=O$(_$,"removeAgentQueueItem",{removed:!1}),Yj=O$(_$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});e_.register(V1);e_.register(J1);e_.register(F1);e_.register(H1);e_.register(D1);e_.register(E1);e_.register(k1);e_.register(w1);X1();e_.register(O1);e_.register(Q1);function Gj({locationParams:_}){let $=t_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=t_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=t_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=t_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[K,z]=T("disconnected"),[W,q]=T(()=>d$()),[V,B]=T(null),[Y,F]=T(null),[A,u]=T(!1),[v,R]=T("current"),[P,U]=T([]),[C,w]=T([]),[h,e]=T(null),{agentStatus:Z_,setAgentStatus:n,agentDraft:N_,setAgentDraft:c,agentPlan:q_,setAgentPlan:n_,agentThought:r,setAgentThought:s,pendingRequest:z_,setPendingRequest:$_,currentTurnId:G_,setCurrentTurnId:w_,steerQueuedTurnId:F_,setSteerQueuedTurnId:B_,lastAgentEventRef:O_,lastSilenceNoticeRef:E_,isAgentRunningRef:S_,draftBufferRef:y_,thoughtBufferRef:I_,pendingRequestRef:Z0,stalledPostIdRef:K0,currentTurnIdRef:Y_,steerQueuedTurnIdRef:a,thoughtExpandedRef:k_,draftExpandedRef:W_}=q8(),[x_,A_]=T({}),[T_,C_]=T(null),[s_,f_]=T(null),[o_,b_]=T(!1),[c_,R_]=T(null),[G0,W0]=T([]),[b0,c0]=T([]),[y0,u_]=T(null),[U0,_0]=T([]),[m_,k0]=T(!1),[d_,F0]=T(()=>t5()),S0=t_(()=>G0.find((X)=>X?.chat_jid===$)||null,[G0,$]),U_=t_(()=>b0.find((X)=>X?.chat_jid===$)||S0||null,[S0,b0,$]),I=U_?.root_chat_jid||S0?.root_chat_jid||$,__=a5(v),[P_,h_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),B0=U0.length,I0=D(new Set),A0=D([]),N0=D(new Set),w0=D(0),d0=D({inFlight:!1,lastAttemptAt:0,turnId:null});I0.current=new Set(U0.map((X)=>X.row_id)),A0.current=U0;let{notificationsEnabled:Z$,notificationPermission:H$,toggleNotifications:N$,notify:K$}=V8(),[C$,h0]=T(()=>new Set),[V0,b$]=T(()=>Z2("workspaceOpen",!0)),s0=D(null),{editorOpen:J0,tabStripTabs:R$,tabStripActiveId:x0,previewTabs:v$,openEditor:$0,closeEditor:z$,handleTabClose:Y$,handleTabActivate:z0,handleTabCloseOthers:H0,handleTabCloseAll:o0,handleTabTogglePin:D$,handleTabTogglePreview:E$,revealInExplorer:u$}=B8({onTabClosed:(X)=>s0.current?.(X)}),S$=D(null),O0=D(null),Q$=D(null),T0=D(null),P0=e_.getDockPanes().length>0,[f0,m$]=T(!1),C0=y(()=>m$((X)=>!X),[]),s$=y(()=>{$0(L1,{label:"Terminal"})},[$0]),y$=!j&&(J0||P0&&f0);f(()=>{let X=S$.current;if(!X)return;if(O0.current)O0.current.dispose(),O0.current=null;let G=x0;if(!G)return;let H={path:G,mode:"edit"},b=e_.resolve(H)||e_.get("editor");if(!b){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let M=b.mount(X,H);O0.current=M,M.onDirtyChange?.((j_)=>{l_.setDirty(G,j_)}),M.onSaveRequest?.(()=>{}),M.onClose?.(()=>{z$()});let g=l_.getViewState(G);if(g&&typeof M.restoreViewState==="function")requestAnimationFrame(()=>M.restoreViewState(g));if(typeof M.onViewStateChange==="function")M.onViewStateChange((j_)=>{l_.saveViewState(G,j_)});return requestAnimationFrame(()=>M.focus()),()=>{if(O0.current===M)M.dispose(),O0.current=null}},[x0,z$]),f(()=>{let X=(G)=>{let H=G.detail?.path;if(H)$0(H)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),document.addEventListener("pdf-viewer:open-tab",X),document.addEventListener("image-viewer:open-tab",X),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X),document.removeEventListener("pdf-viewer:open-tab",X),document.removeEventListener("image-viewer:open-tab",X)}},[$0]),f(()=>{let X=Q$.current;if(T0.current)T0.current.dispose(),T0.current=null;if(!X||!P0||!f0)return;let G=e_.getDockPanes()[0];if(!G){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let H=G.mount(X,{mode:"view"});return T0.current=H,requestAnimationFrame(()=>H.focus?.()),()=>{if(T0.current===H)H.dispose(),T0.current=null}},[P0,f0]);let[g$,k$]=T({name:"You",avatar_url:null,avatar_background:null}),G2=D(!1),i_=D(!1),D0=D(null),R0=D($),p$=D(new Map),c$=D($),h$=D(0),U$=D(0),v0=D({}),X0=D({name:null,avatar_url:null}),Q0=D({currentHashtag:null,searchQuery:null}),G$=D(null),Q=D(null),S=D(0),x=D(0),d=D(0),V_=D(null),Q_=D(null),L_=D(null),Y0=D(null),i0=D(0),M_=D({title:null,avatarBase:null}),u0=D(null),F$=y(()=>{if(u0.current)clearTimeout(u0.current),u0.current=null;e(null)},[]);J8(30000),f(()=>{return p3()},[]),f(()=>{return I8(q)},[]),f(()=>{j0("workspaceOpen",String(V0))},[V0]),f(()=>{return C8()},[]),f(()=>{return()=>{F$()}},[F$]),f(()=>{if(!d_){j0(i1,"");return}j0(i1,JSON.stringify({question:d_.question||"",answer:d_.answer||"",thinking:d_.thinking||"",error:d_.error||null,status:d_.status||"success"}))},[d_]),f(()=>{v0.current=x_||{}},[x_]),f(()=>{R0.current=$},[$]),f(()=>{X0.current=g$||{name:"You",avatar_url:null,avatar_background:null}},[g$]);let J$=y((X,G,H=null)=>{if(typeof document>"u")return;let b=(X||"").trim()||"PiClaw";if(M_.current.title!==b){document.title=b;let p=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(p&&p.getAttribute("content")!==b)p.setAttribute("content",b);M_.current.title=b}let M=document.getElementById("dynamic-favicon");if(!M)return;let g=M.getAttribute("data-default")||M.getAttribute("href")||"/favicon.ico",j_=G||g,H_=G?`${j_}|${H||""}`:j_;if(M_.current.avatarBase!==H_){let p=G?`${j_}${j_.includes("?")?"&":"?"}v=${H||Date.now()}`:j_;M.setAttribute("href",p),M_.current.avatarBase=H_}},[]),W$=y((X)=>{if(!X)return;U((G)=>G.includes(X)?G:[...G,X])},[]),V$=y((X)=>{U((G)=>G.filter((H)=>H!==X))},[]);s0.current=V$;let E0=y(()=>{U([])},[]),J_=y((X,G=null,H="info",b=3000)=>{F$(),e({title:X,detail:G||null,kind:H||"info"}),u0.current=setTimeout(()=>{e((M)=>M?.title===X?null:M)},b)},[F$]),o$=y((X)=>{let G=H8(X,{editorOpen:J0,resolvePane:(H)=>e_.resolve(H)});if(G.kind==="open"){$0(G.path);return}if(G.kind==="toast")J_(G.title,G.detail,G.level)},[J0,$0,J_]),W2=y(()=>{let X=x0;if(X)W$(X)},[x0,W$]),V2=y((X)=>{if(!X)return;w((G)=>G.includes(X)?G:[...G,X])},[]),m0=y(async(X,G=null)=>{let H=(M)=>{M.scrollIntoView({behavior:"smooth",block:"center"}),M.classList.add("post-highlight"),setTimeout(()=>M.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+X);if(b){H(b);return}try{let M=typeof G==="string"&&G.trim()?G.trim():$,j_=(await b4(X,M))?.thread?.[0];if(!j_)return;i((H_)=>{if(!H_)return[j_];if(H_.some((p)=>p.id===j_.id))return H_;return[...H_,j_]}),requestAnimationFrame(()=>{setTimeout(()=>{let H_=document.getElementById("post-"+X);if(H_)H(H_)},50)})}catch(M){console.error("[scrollToMessage] Failed to fetch message",X,M)}},[$]),g0=y((X)=>{w((G)=>G.filter((H)=>H!==X))},[]),I$=y(()=>{w([])},[]),r0=y((X={})=>{let G=Date.now();if(O_.current=G,X.running)S_.current=!0,k0((H)=>H?H:!0);if(X.clearSilence)E_.current=0},[k0]),M0=y(()=>{if(Y0.current)clearTimeout(Y0.current),Y0.current=null;i0.current=0},[]);f(()=>()=>{M0()},[M0]);let r$=y(()=>{M0(),n((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:G,lastActivity:H,...b}=X;return b})},[M0]),C2=y((X)=>{if(!X)return;M0();let G=Date.now();i0.current=G,n({type:X.type||"active",last_activity:!0}),Y0.current=setTimeout(()=>{if(i0.current!==G)return;n((H)=>{if(!H||!(H.last_activity||H.lastActivity))return H;return null})},Q8)},[M0]),X$=y(()=>{S_.current=!1,k0(!1),O_.current=null,E_.current=0,y_.current="",I_.current="",Z0.current=null,Q_.current=null,Y_.current=null,a.current=null,D0.current=null,d0.current={inFlight:!1,lastAttemptAt:0,turnId:null},M0(),w_(null),B_(null),k_.current=!1,W_.current=!1},[M0,w_,B_,k0]),x$=y((X)=>{if(!P8({remainingQueueCount:X,currentTurnId:Y_.current,isAgentTurnActive:m_}))return;a.current=null,B_(null)},[m_,B_]),b2=y(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),a$=y(()=>({agentStatus:Z_,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:q_||"",agentThought:r?{...r}:{text:"",totalLines:0},pendingRequest:z_,currentTurnId:G_,steerQueuedTurnId:F_,isAgentTurnActive:Boolean(m_),followupQueueItems:Array.isArray(U0)?U0.map((X)=>({...X})):[],activeModel:T_,activeThinkingLevel:s_,supportsThinking:Boolean(o_),activeModelUsage:c_,contextUsage:y0,isAgentRunning:Boolean(S_.current),wasAgentActive:Boolean(i_.current),draftBuffer:y_.current||"",thoughtBuffer:I_.current||"",lastAgentEvent:O_.current||null,lastSilenceNotice:E_.current||0,lastAgentResponse:Q_.current||null,currentTurnIdRef:Y_.current||null,steerQueuedTurnIdRef:a.current||null,thoughtExpanded:Boolean(k_.current),draftExpanded:Boolean(W_.current),agentStatusRef:D0.current||null,silentRecovery:{...d0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[T_,c_,s_,N_,q_,Z_,r,y0,G_,U0,m_,z_,F_,o_]),S2=y((X)=>{let G=X||b2();M0(),S_.current=Boolean(G.isAgentRunning),i_.current=Boolean(G.wasAgentActive),k0(Boolean(G.isAgentTurnActive)),O_.current=G.lastAgentEvent||null,E_.current=Number(G.lastSilenceNotice||0),y_.current=G.draftBuffer||"",I_.current=G.thoughtBuffer||"",Z0.current=G.pendingRequest||null,Q_.current=G.lastAgentResponse||null,Y_.current=G.currentTurnIdRef||null,a.current=G.steerQueuedTurnIdRef||null,D0.current=G.agentStatusRef||null,d0.current=G.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},k_.current=Boolean(G.thoughtExpanded),W_.current=Boolean(G.draftExpanded),n(G.agentStatus||null),c(G.agentDraft?{...G.agentDraft}:{text:"",totalLines:0}),n_(G.agentPlan||""),s(G.agentThought?{...G.agentThought}:{text:"",totalLines:0}),$_(G.pendingRequest||null),w_(G.currentTurnId||null),B_(G.steerQueuedTurnId||null),_0(Array.isArray(G.followupQueueItems)?G.followupQueueItems.map((H)=>({...H})):[]),C_(G.activeModel||null),f_(G.activeThinkingLevel||null),b_(Boolean(G.supportsThinking)),R_(G.activeModelUsage??null),u_(G.contextUsage??null)},[M0,b2,w_,_0,k0,B_]),q$=y((X)=>{if(!X)return;if(Y_.current===X)return;Y_.current=X,d0.current={inFlight:!1,lastAttemptAt:0,turnId:X},w_(X),a.current=null,B_(null),y_.current="",I_.current="",c({text:"",totalLines:0}),n_(""),s({text:"",totalLines:0}),$_(null),Z0.current=null,Q_.current=null,k_.current=!1,W_.current=!1},[w_,B_]),I2=y((X)=>{if(typeof document<"u"){let p=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&p)return}let G=Q_.current;if(!G||!G.post)return;if(X&&G.turnId&&G.turnId!==X)return;let H=G.post;if(H.id&&V_.current===H.id)return;let b=String(H?.data?.content||"").trim();if(!b)return;V_.current=H.id||V_.current,Q_.current=null;let M=b.replace(/\s+/g," ").slice(0,200),g=v0.current||{},H_=(H?.data?.agent_id?g[H.data.agent_id]:null)?.name||"Pi";K$(H_,M)},[K$]),W4=y(async(X,G)=>{if(X!=="thought"&&X!=="draft")return;let H=Y_.current;if(X==="thought"){if(k_.current=G,H)try{await v8(H,"thought",G)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!G)return;try{let b=H?await R8(H,"thought"):null;if(b?.text)I_.current=b.text;s((M)=>({...M||{text:"",totalLines:0},fullText:I_.current||M?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:M?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(W_.current=G,H)try{await v8(H,"draft",G)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!G)return;try{let b=H?await R8(H,"draft"):null;if(b?.text)y_.current=b.text;c((M)=>({...M||{text:"",totalLines:0},fullText:y_.current||M?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:M?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),X2=D(null),q2=y(()=>{let X=G$.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);X2.current=q2;let V4=y((X)=>{let G=G$.current;if(!G||typeof X!=="function"){X?.();return}let{currentHashtag:H,searchQuery:b}=Q0.current||{},M=!(b&&!H),g=M?G.scrollHeight-G.scrollTop:G.scrollTop;X(),requestAnimationFrame(()=>{let j_=G$.current;if(!j_)return;if(M){let H_=Math.max(j_.scrollHeight-g,0);j_.scrollTop=H_}else{let H_=Math.max(j_.scrollHeight-j_.clientHeight,0),p=Math.min(g,H_);j_.scrollTop=p}})},[]),L=y((X)=>{let G=G$.current;if(!G||typeof X!=="function"){X?.();return}let H=G.scrollTop;X(),requestAnimationFrame(()=>{let b=G$.current;if(!b)return;let M=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(H,M)})},[]),J="Queued as a follow-up (one-at-a-time).",E="⁣",k=y((X)=>{if(!X||!Array.isArray(X))return X;let G=I0.current,H=new Set(G),b=X.filter((M)=>{if(H.has(M?.id))return!1;if(M?.data?.is_bot_message){let g=M?.data?.content;if(g===J||g===E)return!1}return!0});return b.length===X.length?X:b},[]),{posts:m,setPosts:i,hasMore:t,setHasMore:o,hasMoreRef:l,loadPosts:K_,refreshTimeline:v_,loadMore:A$,loadMoreRef:a0}=X8({preserveTimelineScroll:V4,preserveTimelineScrollTop:L,chatJid:$}),t$=t_(()=>k(m),[m,U0,k]),x2=y(()=>{let X=K0.current;if(!X)return;i((G)=>G?G.filter((H)=>H.id!==X):G),K0.current=null},[i]),{handleSplitterMouseDown:g8,handleSplitterTouchStart:p8,handleEditorSplitterMouseDown:c8,handleEditorSplitterTouchStart:h8,handleDockSplitterMouseDown:i8,handleDockSplitterTouchStart:l8}=L8({appShellRef:Q,sidebarWidthRef:S,editorWidthRef:x,dockHeightRef:d}),l1=y(()=>{if(!S_.current)return;S_.current=!1,E_.current=0,O_.current=null,Y_.current=null,w_(null),k_.current=!1,W_.current=!1;let X=(y_.current||"").trim();if(y_.current="",I_.current="",c({text:"",totalLines:0}),n_(""),s({text:"",totalLines:0}),$_(null),Z0.current=null,Q_.current=null,!X){n({type:"error",title:"Response stalled - No content received"});return}let H=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),M=new Date().toISOString(),g={id:b,timestamp:M,data:{type:"agent_response",content:H,agent_id:"default",is_local_stall:!0}};K0.current=b,i((j_)=>j_?P2([...j_,g]):[g]),X2.current?.(),n(null)},[w_]);f(()=>{Q0.current={currentHashtag:V,searchQuery:Y}},[V,Y]);let g_=y(()=>{let X=++w0.current,G=$;Nj(G).then((H)=>{if(X!==w0.current)return;if(R0.current!==G)return;let b=N0.current,M=Array.isArray(H?.items)?H.items.map((g)=>({...g})).filter((g)=>!b.has(g.row_id)):[];if(M.length){_0((g)=>{if(g.length===M.length&&g.every((j_,H_)=>j_.row_id===M[H_].row_id))return g;return M});return}b.clear(),x$(0),_0((g)=>g.length===0?g:[])}).catch(()=>{if(X!==w0.current)return;if(R0.current!==G)return;_0((H)=>H.length===0?H:[])})},[x$,$,_0]),t0=y(async()=>{let X=$;try{let G=await h1(X);if(R0.current!==X)return;if(G)u_(G)}catch(G){if(R0.current!==X)return;console.warn("Failed to fetch agent context:",G)}},[$]),e0=y(async()=>{let X=$;try{let G=await u8(X);if(R0.current!==X)return null;if(!G||G.status!=="active"||!G.data){if(i_.current){let{currentHashtag:M,searchQuery:g}=Q0.current||{};if(!M&&!g)v_()}return i_.current=!1,X$(),D0.current=null,n(null),c({text:"",totalLines:0}),n_(""),s({text:"",totalLines:0}),$_(null),Z0.current=null,G??null}i_.current=!0;let H=G.data;D0.current=H;let b=H.turn_id||H.turnId;if(b)q$(b);if(r0({running:!0,clearSilence:!0}),r$(),n(H),G.thought&&G.thought.text)s((M)=>{if(M&&M.text&&M.text.length>=G.thought.text.length)return M;return I_.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)c((M)=>{if(M&&M.text&&M.text.length>=G.draft.text.length)return M;return y_.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[X$,r$,r0,v_,q$]),X4=y(async()=>{if(!S_.current)return null;if(Z0.current)return null;let X=Y_.current||null,G=d0.current,H=Date.now();if(G.inFlight)return null;if(G.turnId===X&&H-G.lastAttemptAt<u1)return null;G.inFlight=!0,G.lastAttemptAt=H,G.turnId=X;try{let{currentHashtag:b,searchQuery:M}=Q0.current||{};if(!b&&!M)await v_();return await g_(),await e0()}finally{G.inFlight=!1}},[e0,g_,v_]);f(()=>{let X=Math.min(1000,Math.max(100,Math.floor(v1/2))),G=setInterval(()=>{if(!S_.current)return;if(Z0.current)return;let H=O_.current;if(!H)return;let b=Date.now(),M=b-H,g=y2(D0.current);if(M>=O8){if(!g)n({type:"waiting",title:"Re-syncing after a quiet period…"});X4();return}if(M>=v1){if(b-E_.current>=u1){if(!g){let j_=Math.floor(M/1000);n({type:"waiting",title:`Waiting for model… No events for ${j_}s`})}E_.current=b,X4()}}},X);return()=>clearInterval(G)},[X4]);let n8=y((X)=>{if(z(X),X!=="connected"){n(null),c({text:"",totalLines:0}),n_(""),s({text:"",totalLines:0}),$_(null),Z0.current=null,X$();return}if(!G2.current){G2.current=!0,e0(),t0();return}let{currentHashtag:G,searchQuery:H}=Q0.current;if(!G&&!H)v_();e0(),g_(),t0()},[X$,v_,e0,g_,t0]),d8=y(async(X)=>{B(X),i(null),await K_(X)},[K_]),s8=y(async()=>{B(null),F(null),i(null),await K_()},[K_]),o8=y(async(X,G=v)=>{if(!X||!X.trim())return;let H=G==="root"||G==="all"?G:"current";R(H),F(X.trim()),B(null),i(null);try{let b=await T8(X.trim(),50,0,$,H,I);i(b.results),o(!1)}catch(b){console.error("Failed to search:",b),i([])}},[$,I,v]),r8=y(()=>{u(!0),F(null),B(null),R("current"),i([])},[]),a8=y(()=>{u(!1),F(null),K_()},[K_]),Vj=y(()=>{},[]),t8=y(async(X)=>{if(!X)return;let G=X.id,H=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,b=t$?.filter((g)=>g?.data?.thread_id===G&&g?.id!==G).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let M=(g)=>{if(!g.length)return;h0((H_)=>{let p=new Set(H_);return g.forEach((X_)=>p.add(X_)),p}),setTimeout(()=>{if(L(()=>{i((H_)=>H_?H_.filter((p)=>!g.includes(p.id)):H_)}),h0((H_)=>{let p=new Set(H_);return g.forEach((X_)=>p.delete(X_)),p}),l.current)a0.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await f8(G,b>0,H);if(g?.ids?.length)M(g.ids)}catch(g){let j_=g?.message||"";if(b===0&&j_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let p=await f8(G,!0,H);if(p?.ids?.length)M(p.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${j_}`)}},[$,t$,L]),n1=y(async()=>{try{let X=await e5();A_(U8(X));let G=X?.user||{};k$((b)=>{let M=typeof G.name==="string"&&G.name.trim()?G.name.trim():"You",g=typeof G.avatar_url==="string"?G.avatar_url.trim():null,j_=typeof G.avatar_background==="string"&&G.avatar_background.trim()?G.avatar_background.trim():null;if(b.name===M&&b.avatar_url===g&&b.avatar_background===j_)return b;return{name:M,avatar_url:g,avatar_background:j_}});let H=(X?.agents||[]).find((b)=>b.id==="default");J$(H?.name,H?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,G=await h1(X);if(R0.current!==X)return;if(G)u_(G)}catch{}},[J$,$]);f(()=>{n1();let X=N2("sidebarWidth",null),G=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(S.current=G,Q.current)Q.current.style.setProperty("--sidebar-width",`${G}px`)},[n1]);let q4=m_||Z_!==null,d1=y((X)=>{if(!X||typeof X!=="object")return;let G=X.agent_id;if(!G)return;let{agent_name:H,agent_avatar:b}=X;if(!H&&b===void 0)return;let M=v0.current?.[G]||{id:G},g=M.name||null,j_=M.avatar_url??M.avatarUrl??M.avatar??null,H_=!1,p=!1;if(H&&H!==M.name)g=H,p=!0;if(b!==void 0){let X_=typeof b==="string"?b.trim():null,r_=typeof j_==="string"?j_.trim():null,D_=X_||null;if(D_!==(r_||null))j_=D_,H_=!0}if(!p&&!H_)return;if(A_((X_)=>{let D_={...X_[G]||{id:G}};if(p)D_.name=g;if(H_)D_.avatar_url=j_;return{...X_,[G]:D_}}),G==="default")J$(g,j_,H_?Date.now():null)},[J$]),s1=y((X)=>{if(!X||typeof X!=="object")return;let G=X.user_name??X.userName,H=X.user_avatar??X.userAvatar,b=X.user_avatar_background??X.userAvatarBackground;if(G===void 0&&H===void 0&&b===void 0)return;k$((M)=>{let g=typeof G==="string"&&G.trim()?G.trim():M.name||"You",j_=H===void 0?M.avatar_url:typeof H==="string"&&H.trim()?H.trim():null,H_=b===void 0?M.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(M.name===g&&M.avatar_url===j_&&M.avatar_background===H_)return M;return{name:g,avatar_url:j_,avatar_background:H_}})},[]),L4=y((X)=>{if(!X||typeof X!=="object")return;let G=X.model??X.current;if(G!==void 0)C_(G);if(X.thinking_level!==void 0)f_(X.thinking_level??null);if(X.supports_thinking!==void 0)b_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)R_(X.provider_usage??null)},[]),L2=y(()=>{let X=$;_j(X).then((G)=>{if(R0.current!==X)return;if(G)L4(G)}).catch(()=>{})},[L4,$]),l0=y(()=>{$j().then((X)=>{let G=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.agent_name==="string"&&H.agent_name.trim()):[];W0(G)}).catch(()=>{})},[]),p0=y(()=>{m8(I).then((X)=>{let G=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.chat_jid==="string"&&typeof H.agent_name==="string"):[];c0(G)}).catch(()=>{})},[I]),e8=y((X)=>{let G=X?.row_id;if(G==null)return;N0.current.add(G),_0((H)=>H.filter((b)=>b?.row_id!==G)),Kj(G,c1($)).then(()=>{g_()}).catch((H)=>{console.warn("[queue] Failed to steer queued item:",H),J_("Failed to steer message","The queued message could not be sent as steering.","warning"),N0.current.delete(G),g_()})},[$,g_,_0,J_]),_9=y((X)=>{let G=X?.row_id;if(G==null)return;let H=A0.current.filter((b)=>b?.row_id!==G).length;N0.current.add(G),x$(H),_0((b)=>b.filter((M)=>M?.row_id!==G)),zj(G,c1($)).then(()=>{g_()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),J_("Failed to remove message","The queued message could not be removed.","warning"),N0.current.delete(G),g_()})},[x$,$,g_,_0,J_]),B4=y((X)=>{if(!X||typeof X!=="object")return;if(l0(),p0(),X?.queued==="followup"||X?.queued==="steer"){g_();return}let G=X?.command;if(G&&typeof G==="object"&&(G?.queued_followup||G?.queued_steer))g_()},[l0,p0,g_]),O4=y(()=>{if(L_.current)L_.current.abort(),L_.current=null;F0(null)},[]),T2=y(async(X)=>{let G=String(X||"").trim();if(!G)return J_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(L_.current)L_.current.abort();let H=new AbortController;L_.current=H,F0({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await Yj(G,{signal:H.signal,chatJid:t3($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(M,g)=>{if(M==="side_prompt_start")F0((j_)=>j_?{...j_,status:"running"}:j_)},onThinkingDelta:(M)=>{F0((g)=>g?{...g,thinking:`${g.thinking||""}${M||""}`}:g)},onTextDelta:(M)=>{F0((g)=>g?{...g,answer:`${g.answer||""}${M||""}`}:g)}});if(L_.current!==H)return!0;F0((M)=>M?{...M,answer:b?.result||M.answer||"",thinking:b?.thinking||M.thinking||"",model:b?.model||null,status:"success",error:null}:M)}catch(b){if(H.signal.aborted)return!0;F0((M)=>M?{...M,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:M)}finally{if(L_.current===H)L_.current=null}return!0},[$,J_]),$9=y(async({content:X})=>{let G=a3(X);if(!G)return!1;if(G.type==="help")return J_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(G.type==="clear")return O4(),J_("BTW cleared","Closed the side conversation panel.","info"),!0;if(G.type==="ask")return await T2(G.question),!0;return!1},[O4,T2,J_]),j9=y(()=>{if(d_?.question)T2(d_.question)},[d_,T2]),Z9=y(async()=>{let X=$6(d_);if(!X)return;try{let G=await $2("default",X,null,[],q4?"queue":null,$);B4(G),J_(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(G){J_("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning")}},[d_,B4,q4,J_]),B2=y(()=>{L2(),l0(),p0(),g_(),t0()},[L2,l0,p0,g_,t0]);f(()=>{B2();let X=setInterval(()=>{L2(),l0(),p0(),g_()},60000);return()=>clearInterval(X)},[B2,L2,l0,p0,g_]),f(()=>{p0()},[p0]),f(()=>{let X=!1;if(i(null),V)return K_(V),()=>{X=!0};if(Y)return T8(Y,50,0,$,v,I).then((G)=>{if(X)return;i(G.results),o(!1)}).catch((G)=>{if(X)return;console.error("Failed to search:",G),i([]),o(!1)}),()=>{X=!0};return K_(),()=>{X=!0}},[$,V,Y,v,I,K_,o,i]),f(()=>{let X=c$.current||$;p$.current.set(X,a$())},[$,a$]),f(()=>{let X=c$.current||$;if(X===$)return;p$.current.set(X,a$()),c$.current=$,N0.current.clear(),S2(p$.current.get($)||null),g_(),e0(),t0()},[$,e0,t0,g_,S2,a$]);let N9=y(()=>{let{currentHashtag:X,searchQuery:G}=Q0.current||{};if(!X&&!G)v_();B2()},[B2,v_]),Q4=y((X,G)=>{let H=G?.turn_id,b=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null,g=b?b===$:X==="connected"||X==="workspace_update";if(g)d1(G),s1(G);if(X==="ui_theme"){c3(G);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))r$()}if(X==="connected"){n(null),c({text:"",totalLines:0}),n_(""),s({text:"",totalLines:0}),$_(null),Z0.current=null,X$();let p=$;u8(p).then((D_)=>{if(R0.current!==p)return;if(!D_||D_.status!=="active"||!D_.data)return;let e$=D_.data,o1=e$.turn_id||e$.turnId;if(o1)q$(o1);if(r0({clearSilence:!0}),C2(e$),D_.thought&&D_.thought.text)I_.current=D_.thought.text,s({text:D_.thought.text,totalLines:D_.thought.totalLines||0});if(D_.draft&&D_.draft.text)y_.current=D_.draft.text,c({text:D_.draft.text,totalLines:D_.draft.totalLines||0})}).catch((D_)=>{console.warn("Failed to fetch agent status:",D_)});let{currentHashtag:X_,searchQuery:r_}=Q0.current||{};if(!X_&&!r_)v_();B2();return}if(X==="agent_status"){if(!g){if(G?.type==="done"||G?.type==="error")l0(),p0();return}if(G.type==="done"||G.type==="error"){if(H&&Y_.current&&H!==Y_.current)return;if(G.type==="done"){I2(H||Y_.current);let{currentHashtag:p,searchQuery:X_}=Q0.current||{};if(!p&&!X_)v_();if(G.context_usage)u_(G.context_usage)}if(i_.current=!1,X$(),N0.current.clear(),l0(),g_(),c({text:"",totalLines:0}),n_(""),s({text:"",totalLines:0}),$_(null),G.type==="error")n({type:"error",title:G.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(H)q$(H);if(r0({running:!0,clearSilence:!0}),G.type==="thinking")y_.current="",I_.current="",c({text:"",totalLines:0}),n_(""),s({text:"",totalLines:0});D0.current=G,n((p)=>{if(p&&p.type===G.type&&p.title===G.title)return p;return G})}return}if(X==="agent_steer_queued"){if(!g)return;if(H&&Y_.current&&H!==Y_.current)return;let p=H||Y_.current;if(!p)return;a.current=p,B_(p);return}if(X==="agent_followup_queued"){if(!g)return;let p=G?.row_id,X_=G?.content;if(p!=null&&typeof X_==="string"&&X_.trim())_0((r_)=>{if(r_.some((D_)=>D_?.row_id===p))return r_;return[...r_,{row_id:p,content:X_,timestamp:G?.timestamp||null,thread_id:G?.thread_id??null}]});g_();return}if(X==="agent_followup_consumed"){if(!g)return;let p=G?.row_id;if(p!=null){let X_=A0.current.filter((r_)=>r_.row_id!==p).length;x$(X_),_0((r_)=>r_.filter((D_)=>D_.row_id!==p))}g_(),v_();return}if(X==="agent_followup_removed"){if(!g)return;let p=G?.row_id;if(p!=null){let X_=A0.current.filter((r_)=>r_.row_id!==p).length;N0.current.add(p),x$(X_),_0((r_)=>r_.filter((D_)=>D_.row_id!==p))}g_();return}if(X==="agent_draft_delta"){if(!g)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)q$(H);if(r0({running:!0,clearSilence:!0}),G?.reset)y_.current="";if(G?.delta)y_.current+=G.delta;let p=Date.now();if(!h$.current||p-h$.current>=100){h$.current=p;let X_=y_.current,r_=m1(X_);if(W_.current)c((D_)=>({text:D_?.text||"",totalLines:r_,fullText:X_}));else c({text:X_,totalLines:r_})}return}if(X==="agent_draft"){if(!g)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)q$(H);r0({running:!0,clearSilence:!0});let p=G.text||"",X_=G.mode||(G.kind==="plan"?"replace":"append"),r_=Number.isFinite(G.total_lines)?G.total_lines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;if(G.kind==="plan")if(X_==="replace")n_(p);else n_((D_)=>(D_||"")+p);else if(!W_.current)y_.current=p,c({text:p,totalLines:r_});return}if(X==="agent_thought_delta"){if(!g)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)q$(H);if(r0({running:!0,clearSilence:!0}),G?.reset)I_.current="";if(typeof G?.delta==="string")I_.current+=G.delta;let p=Date.now();if(k_.current&&(!U$.current||p-U$.current>=100)){U$.current=p;let X_=I_.current;s((r_)=>({text:r_?.text||"",totalLines:m1(X_),fullText:X_}))}return}if(X==="agent_thought"){if(!g)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)q$(H);r0({running:!0,clearSilence:!0});let p=G.text||"",X_=Number.isFinite(G.total_lines)?G.total_lines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;if(!k_.current)I_.current=p,s({text:p,totalLines:X_});return}if(X==="model_changed"){if(!g)return;if(G?.model!==void 0)C_(G.model);if(G?.thinking_level!==void 0)f_(G.thinking_level??null);if(G?.supports_thinking!==void 0)b_(Boolean(G.supports_thinking));let p=$;h1(p).then((X_)=>{if(R0.current!==p)return;if(X_)u_(X_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:G}));return}if(b8(X)){if(!g)return;if(S8(X,G),X==="extension_ui_notify"&&typeof G?.message==="string")J_(G.message,null,G?.type||"info");if(X==="extension_ui_error"&&typeof G?.error==="string")J_("Extension UI error",G.error,"error",5000);return}let{currentHashtag:j_,searchQuery:H_}=Q0.current;if(X==="agent_response"){if(!g)return;x2(),Q_.current={post:G,turnId:Y_.current}}if(!j_&&!H_&&g&&(X==="new_post"||X==="new_reply"||X==="agent_response"))i((p)=>{if(!p)return[G];if(p.some((X_)=>X_.id===G.id))return p;return[...p,G]}),X2.current?.();if(X==="interaction_updated"){if(!g)return;i((p)=>{if(!p)return p;if(!p.some((X_)=>X_.id===G.id))return p;return p.map((X_)=>X_.id===G.id?G:X_)})}if(X==="interaction_deleted"){if(!g)return;let p=G?.ids||[];if(p.length){L(()=>{i((D_)=>D_?D_.filter((e$)=>!p.includes(e$.id)):D_)});let{currentHashtag:X_,searchQuery:r_}=Q0.current;if(l.current&&!X_&&!r_)a0.current?.({preserveScroll:!0,preserveMode:"top"})}}},[X$,r$,$,a0,r0,I2,L,l0,p0,v_,x2,q$,C2,d1,s1,L2,g_,_0]);f(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=Q4,X.reset=()=>{x2(),X$(),n(null),c({text:"",totalLines:0}),n_(""),s({text:"",totalLines:0}),$_(null)},X.finalize=()=>l1(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[X$,l1,Q4,x2]),W8({handleSseEvent:Q4,handleConnectionStatusChange:n8,loadPosts:K_,onWake:N9,chatJid:$}),f(()=>{if(!t$||t$.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let G=X.slice(5);m0(G),history.replaceState(null,"",location.pathname+location.search)},[t$,m0]);let U4=Z_!==null;f(()=>{if(K!=="connected")return;let G=setInterval(()=>{let{currentHashtag:H,searchQuery:b}=Q0.current||{},M=!H&&!b;if(U4){if(M)v_();g_(),e0(),t0()}else{if(M)v_();e0(),t0()}},U4?15000:60000);return()=>clearInterval(G)},[K,U4,e0,t0,g_,v_]),f(()=>{return x8(()=>{e0(),t0(),g_()})},[e0,t0,g_]);let K9=y(()=>{b$((X)=>!X)},[]),z9=y((X)=>{if(typeof window>"u")return;let G=String(X||"").trim();if(!G||G===$)return;let H=M2(window.location.href,G,{chatOnly:j});window.location.assign(H)},[j,$]),Y9=y(async()=>{if(typeof window>"u"||!U_?.chat_jid)return;let X=U_.agent_name||"",G=U_.display_name||"",H=window.prompt("Branch display name",G);if(H===null)return;let b=window.prompt("Agent handle (without @)",X);if(b===null)return;try{let M=await jj(U_.chat_jid,{displayName:H,agentName:b});await Promise.allSettled([l0(),p0()]);let g=M?.branch?.agent_name||String(b||"").trim()||X;J_("Branch renamed",`This chat is now @${g}.`,"info",3500)}catch(M){let g=M instanceof Error?M.message:String(M||"Could not rename branch.");J_("Could not rename branch",g||"Could not rename branch.","warning",5000)}},[U_,l0,p0,J_]),G9=y(async()=>{if(typeof window>"u"||!U_?.chat_jid)return;if(U_.chat_jid===(U_.root_chat_jid||U_.chat_jid)){J_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let G=U_.display_name||`@${U_.agent_name||U_.chat_jid}`;if(!window.confirm(`Prune ${G}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Zj(U_.chat_jid),await Promise.allSettled([l0(),p0()]);let b=U_.root_chat_jid||"web:default";J_("Branch pruned",`${G} has been archived.`,"info",3000);let M=M2(window.location.href,b,{chatOnly:j});window.location.assign(M)}catch(b){let M=b instanceof Error?b.message:String(b||"Could not prune branch.");J_("Could not prune branch",M||"Could not prune branch.","warning",5000)}},[j,U_,l0,p0,J_]);f(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{h_({status:"running",message:"Preparing a new chat branch…"});let G=await l2(N);if(X)return;let H=G?.branch,b=typeof H?.chat_jid==="string"&&H.chat_jid.trim()?H.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");let M=M2(window.location.href,b,{chatOnly:!0});window.location.replace(M)}catch(G){if(X)return;h_({status:"error",message:p1(G)})}})(),()=>{X=!0}},[Z,N]);let W9=y(async()=>{if(typeof window>"u"||W)return;let X=D8($);if(!X){J_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let H=w8(window.location.href,$,{chatOnly:!0});if(!window.open(H,X.target))J_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let G=E8(X);if(!G){J_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}y8(G,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let b=(await l2($))?.branch,M=typeof b?.chat_jid==="string"&&b.chat_jid.trim()?b.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");try{let j_=await I4();W0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}try{let j_=await m8(I);c0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}let g=M2(window.location.href,M,{chatOnly:!0});k8(G,g)}catch(H){A8(G),J_("Could not open branch window",p1(H),"error",5000)}},[$,I,W,J_]);f(()=>{if(!J0)return;if(typeof window>"u")return;let X=Q.current;if(!X)return;if(!x.current){let G=N2("editorWidth",null),H=S.current||280;x.current=Number.isFinite(G)?G:H}if(X.style.setProperty("--editor-width",`${x.current}px`),!d.current){let G=N2("dockHeight",null);d.current=Number.isFinite(G)?G:200}X.style.setProperty("--dock-height",`${d.current}px`)},[J0]),f(()=>{if(!P0||j)return;let X=(G)=>{if(G.ctrlKey&&G.key==="`")G.preventDefault(),C0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[C0,P0,j]);let V9=Boolean(F_&&F_===(Z_?.turn_id||G_));if(Z)return O`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${P_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${P_.message}</p>
                    </div>
                </div>
            </div>
        `;return O`
        <div class=${`app-shell${V0?"":" workspace-collapsed"}${J0?" editor-open":""}${j?" chat-only":""}`} ref=${Q}>
            ${!j&&O`
                <${N8}
                    onFileSelect=${W$}
                    visible=${V0}
                    active=${V0||J0}
                    onOpenEditor=${$0}
                    onOpenTerminalTab=${s$}
                    onToggleTerminal=${P0?C0:void 0}
                    terminalVisible=${Boolean(P0&&f0)}
                />
                <button
                    class=${`workspace-toggle-tab${V0?" open":" closed"}`}
                    onClick=${K9}
                    title=${V0?"Hide workspace":"Show workspace"}
                    aria-label=${V0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${g8} onTouchStart=${p8}></div>
            `}
            ${y$&&O`
                <div class="editor-pane-container">
                    ${J0&&O`
                        <${z8}
                            tabs=${R$}
                            activeId=${x0}
                            onActivate=${z0}
                            onClose=${Y$}
                            onCloseOthers=${H0}
                            onCloseAll=${o0}
                            onTogglePin=${D$}
                            onTogglePreview=${E$}
                            previewTabs=${v$}
                            onToggleDock=${P0?C0:void 0}
                            dockVisible=${P0&&f0}
                        />
                    `}
                    ${J0&&O`<div class="editor-pane-host" ref=${S$}></div>`}
                    ${J0&&x0&&v$.has(x0)&&O`
                        <${G8}
                            getContent=${()=>O0.current?.getContent?.()}
                            path=${x0}
                            onClose=${()=>E$(x0)}
                        />
                    `}
                    ${P0&&f0&&O`<div class="dock-splitter" onMouseDown=${i8} onTouchStart=${l8}></div>`}
                    ${P0&&O`<div class=${`dock-panel${f0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${C0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${Q$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${c8} onTouchStart=${h8}></div>
            `}
            <div class="container">
                ${Y&&F8()&&O`<div class="search-results-spacer"></div>`}
                ${j&&O`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${U_?.display_name||U_?.agent_name?`@${U_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${U_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${b0.length>1&&O`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>z9(X.currentTarget.value)}
                                    >
                                        ${b0.map((X)=>O`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${U_?.chat_jid&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${Y9}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${U_?.chat_jid&&U_.chat_jid!==(U_.root_chat_jid||U_.chat_jid)&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${G9}
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
                ${(V||Y)&&O`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${s8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${Y} · ${__}`}</span>
                    </div>
                `}
                <${A6}
                    posts=${t$}
                    hasMore=${t}
                    onLoadMore=${A$}
                    timelineRef=${G$}
                    onHashtagClick=${d8}
                    onMessageRef=${V2}
                    onScrollToMessage=${m0}
                    onFileRef=${o$}
                    onPostClick=${void 0}
                    onDeletePost=${t8}
                    emptyMessage=${V?`No posts with #${V}`:Y?`No results for "${Y}"`:void 0}
                    agents=${x_}
                    user=${g$}
                    reverse=${!(Y&&!V)}
                    removingPostIds=${C$}
                    searchQuery=${Y}
                />
                <${W6}
                    status=${Z_}
                    draft=${N_}
                    plan=${q_}
                    thought=${r}
                    pendingRequest=${z_}
                    intent=${h}
                    turnId=${G_}
                    steerQueued=${V9}
                    onPanelToggle=${W4}
                />
                <${j6}
                    session=${d_}
                    onClose=${O4}
                    onRetry=${j9}
                    onInject=${Z9}
                />
                <${S3}
                    onPost=${()=>{K_(),q2()}}
                    onFocus=${q2}
                    searchMode=${A}
                    searchScope=${v}
                    onSearch=${o8}
                    onSearchScopeChange=${R}
                    onEnterSearch=${r8}
                    onExitSearch=${a8}
                    fileRefs=${P}
                    onRemoveFileRef=${V$}
                    onClearFileRefs=${E0}
                    messageRefs=${C}
                    onRemoveMessageRef=${g0}
                    onClearMessageRefs=${I$}
                    activeEditorPath=${j?null:x0}
                    onAttachEditorFile=${j?void 0:W2}
                    onOpenFilePill=${o$}
                    followupQueueCount=${B0}
                    followupQueueItems=${U0}
                    onInjectQueuedFollowup=${e8}
                    onRemoveQueuedFollowup=${_9}
                    onSubmitIntercept=${$9}
                    onMessageResponse=${B4}
                    onPopOutChat=${W?void 0:W9}
                    isAgentActive=${q4}
                    activeChatAgents=${G0}
                    currentChatJid=${$}
                    activeModel=${T_}
                    modelUsage=${c_}
                    thinkingLevel=${s_}
                    supportsThinking=${o_}
                    contextUsage=${y0}
                    notificationsEnabled=${Z$}
                    notificationPermission=${H$}
                    onToggleNotifications=${N$}
                    onModelChange=${C_}
                    onModelStateChange=${L4}
                />
                <${X6} status=${K} />
                <${V6}
                    request=${z_}
                    onRespond=${()=>{$_(null),Z0.current=null}}
                />
            </div>
        </div>
    `}function Wj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return O`<${Gj} locationParams=${_} />`}H3(O`<${Wj} />`,document.getElementById("app"));

//# debugId=4F267B59F4AE68F864756E2164756E21
//# sourceMappingURL=app.bundle.js.map
