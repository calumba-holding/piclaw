var B9=Object.defineProperty;var L9=(_)=>_;function Q9(_,$){this[_]=L9.bind(null,$)}var U9=(_,$)=>{for(var j in $)B9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Q9.bind($,j)})};var F9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var l2,e_,q3,J9,h$,e1,O3,B3,L3,w4,E4,y4,H9,c2={},h2=[],D9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,n2=Array.isArray;function S$(_,$){for(var j in $)_[j]=$[j];return _}function P4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function Q3(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?l2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return m2(_,z,Z,N,null)}function m2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++q3:N,__i:-1,__u:0};return N==null&&e_.vnode!=null&&e_.vnode(K),K}function d2(_){return _.children}function g2(_,$){this.props=_,this.context=$}function W2(_,$){if($==null)return _.__?W2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?W2(_):null}function E9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=S$({},$);K.__v=$.__v+1,e_.vnode&&e_.vnode(K),M4(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?W2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,H3(Z,K,N),$.__e=$.__=null,K.__e!=j&&U3(K)}}function U3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),U3(_)}function _3(_){(!_.__d&&(_.__d=!0)&&h$.push(_)&&!i2.__r++||e1!=e_.debounceRendering)&&((e1=e_.debounceRendering)||O3)(i2)}function i2(){try{for(var _,$=1;h$.length;)h$.length>$&&h$.sort(B3),_=h$.shift(),$=h$.length,E9(_)}finally{h$.length=i2.__r=0}}function F3(_,$,j,Z,N,K,z,W,q,V,B){var Y,U,C,m,v,R,E,F=Z&&Z.__k||h2,S=$.length;for(q=y9(j,$,F,q,S),Y=0;Y<S;Y++)(C=j.__k[Y])!=null&&(U=C.__i!=-1&&F[C.__i]||c2,C.__i=Y,R=M4(_,C,U,N,K,z,W,q,V,B),m=C.__e,C.ref&&U.ref!=C.ref&&(U.ref&&C4(U.ref,null,C),B.push(C.ref,C.__c||m,C)),v==null&&m!=null&&(v=m),(E=!!(4&C.__u))||U.__k===C.__k?q=J3(C,q,_,E):typeof C.type=="function"&&R!==void 0?q=R:m&&(q=m.nextSibling),C.__u&=-7);return j.__e=v,q}function y9(_,$,j,Z,N){var K,z,W,q,V,B=j.length,Y=B,U=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=m2(null,z,null,null,null):n2(z)?z=_.__k[K]=m2(d2,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=m2(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,q=K+U,z.__=_,z.__b=_.__b+1,W=null,(V=z.__i=k9(z,j,q,Y))!=-1&&(Y--,(W=j[V])&&(W.__u|=2)),W==null||W.__v==null?(V==-1&&(N>B?U--:N<B&&U++),typeof z.type!="function"&&(z.__u|=4)):V!=q&&(V==q-1?U--:V==q+1?U++:(V>q?U--:U++,z.__u|=4))):_.__k[K]=null;if(Y)for(K=0;K<B;K++)(W=j[K])!=null&&(2&W.__u)==0&&(W.__e==Z&&(Z=W2(W)),E3(W,W));return Z}function J3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=J3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=W2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function k9(_,$,j,Z){var N,K,z,W=_.key,q=_.type,V=$[j],B=V!=null&&(2&V.__u)==0;if(V===null&&W==null||B&&W==V.key&&q==V.type)return j;if(Z>(B?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((V=$[z=N>=0?N--:K++])!=null&&(2&V.__u)==0&&W==V.key&&q==V.type)return z}return-1}function $3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||D9.test($)?j:j+"px"}function u2(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||$3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||$3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(L3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=w4,_.addEventListener($,K?y4:E4,K)):_.removeEventListener($,K?y4:E4,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(W){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function j3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=w4++;else if($.t<j.u)return;return j(e_.event?e_.event($):$)}}}function M4(_,$,j,Z,N,K,z,W,q,V){var B,Y,U,C,m,v,R,E,F,S,M,i,t,Z_,l,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),K=[W=$.__e=j.__e]),(B=e_.__b)&&B($);_:if(typeof N_=="function")try{if(E=$.props,F=N_.prototype&&N_.prototype.render,S=(B=N_.contextType)&&Z[B.__c],M=B?S?S.props.value:B.__:Z,j.__c?R=(Y=$.__c=j.__c).__=Y.__E:(F?$.__c=Y=new N_(E,M):($.__c=Y=new g2(E,M),Y.constructor=N_,Y.render=w9),S&&S.sub(Y),Y.state||(Y.state={}),Y.__n=Z,U=Y.__d=!0,Y.__h=[],Y._sb=[]),F&&Y.__s==null&&(Y.__s=Y.state),F&&N_.getDerivedStateFromProps!=null&&(Y.__s==Y.state&&(Y.__s=S$({},Y.__s)),S$(Y.__s,N_.getDerivedStateFromProps(E,Y.__s))),C=Y.props,m=Y.state,Y.__v=$,U)F&&N_.getDerivedStateFromProps==null&&Y.componentWillMount!=null&&Y.componentWillMount(),F&&Y.componentDidMount!=null&&Y.__h.push(Y.componentDidMount);else{if(F&&N_.getDerivedStateFromProps==null&&E!==C&&Y.componentWillReceiveProps!=null&&Y.componentWillReceiveProps(E,M),$.__v==j.__v||!Y.__e&&Y.shouldComponentUpdate!=null&&Y.shouldComponentUpdate(E,Y.__s,M)===!1){$.__v!=j.__v&&(Y.props=E,Y.state=Y.__s,Y.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(h){h&&(h.__=$)}),h2.push.apply(Y.__h,Y._sb),Y._sb=[],Y.__h.length&&z.push(Y);break _}Y.componentWillUpdate!=null&&Y.componentWillUpdate(E,Y.__s,M),F&&Y.componentDidUpdate!=null&&Y.__h.push(function(){Y.componentDidUpdate(C,m,v)})}if(Y.context=M,Y.props=E,Y.__P=_,Y.__e=!1,i=e_.__r,t=0,F)Y.state=Y.__s,Y.__d=!1,i&&i($),B=Y.render(Y.props,Y.state,Y.context),h2.push.apply(Y.__h,Y._sb),Y._sb=[];else do Y.__d=!1,i&&i($),B=Y.render(Y.props,Y.state,Y.context),Y.state=Y.__s;while(Y.__d&&++t<25);Y.state=Y.__s,Y.getChildContext!=null&&(Z=S$(S$({},Z),Y.getChildContext())),F&&!U&&Y.getSnapshotBeforeUpdate!=null&&(v=Y.getSnapshotBeforeUpdate(C,m)),Z_=B!=null&&B.type===d2&&B.key==null?D3(B.props.children):B,W=F3(_,n2(Z_)?Z_:[Z_],$,j,Z,N,K,z,W,q,V),Y.base=$.__e,$.__u&=-161,Y.__h.length&&z.push(Y),R&&(Y.__E=Y.__=null)}catch(h){if($.__v=null,q||K!=null)if(h.then){for($.__u|=q?160:128;W&&W.nodeType==8&&W.nextSibling;)W=W.nextSibling;K[K.indexOf(W)]=null,$.__e=W}else{for(l=K.length;l--;)P4(K[l]);k4($)}else $.__e=j.__e,$.__k=j.__k,h.then||k4($);e_.__e(h,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):W=$.__e=A9(j.__e,$,j,Z,N,K,z,q,V);return(B=e_.diffed)&&B($),128&$.__u?void 0:W}function k4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(k4))}function H3(_,$,j){for(var Z=0;Z<j.length;Z++)C4(j[Z],j[++Z],j[++Z]);e_.__c&&e_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){e_.__e(K,N.__v)}})}function D3(_){return typeof _!="object"||_==null||_.__b>0?_:n2(_)?_.map(D3):S$({},_)}function A9(_,$,j,Z,N,K,z,W,q){var V,B,Y,U,C,m,v,R=j.props||c2,E=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(V=0;V<K.length;V++)if((C=K[V])&&"setAttribute"in C==!!F&&(F?C.localName==F:C.nodeType==3)){_=C,K[V]=null;break}}if(_==null){if(F==null)return document.createTextNode(E);_=document.createElementNS(N,F,E.is&&E),W&&(e_.__m&&e_.__m($,K),W=!1),K=null}if(F==null)R===E||W&&_.data==E||(_.data=E);else{if(K=K&&l2.call(_.childNodes),!W&&K!=null)for(R={},V=0;V<_.attributes.length;V++)R[(C=_.attributes[V]).name]=C.value;for(V in R)C=R[V],V=="dangerouslySetInnerHTML"?Y=C:V=="children"||(V in E)||V=="value"&&("defaultValue"in E)||V=="checked"&&("defaultChecked"in E)||u2(_,V,null,C,N);for(V in E)C=E[V],V=="children"?U=C:V=="dangerouslySetInnerHTML"?B=C:V=="value"?m=C:V=="checked"?v=C:W&&typeof C!="function"||R[V]===C||u2(_,V,C,R[V],N);if(B)W||Y&&(B.__html==Y.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(Y&&(_.innerHTML=""),F3($.type=="template"?_.content:_,n2(U)?U:[U],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&W2(j,0),W,q),K!=null)for(V=K.length;V--;)P4(K[V]);W||(V="value",F=="progress"&&m==null?_.removeAttribute("value"):m!=null&&(m!==_[V]||F=="progress"&&!m||F=="option"&&m!=R[V])&&u2(_,V,m,R[V],N),V="checked",v!=null&&v!=_[V]&&u2(_,V,v,R[V],N))}return _}function C4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){e_.__e(N,j)}}function E3(_,$,j){var Z,N;if(e_.unmount&&e_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||C4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){e_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&E3(Z[N],$,j||typeof _.type!="function");j||P4(_.__e),_.__c=_.__=_.__e=void 0}function w9(_,$,j){return this.constructor(_,j)}function y3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),e_.__&&e_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],M4($,_=(!Z&&j||$).__k=Q3(d2,null,[_]),N||c2,c2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?l2.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),H3(K,_,z)}l2=h2.slice,e_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(W){_=W}throw _}},q3=0,J9=function(_){return _!=null&&_.constructor===void 0},g2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=S$({},this.state),typeof _=="function"&&(_=_(S$({},j),this.props)),_&&S$(j,_),_!=null&&this.__v&&($&&this._sb.push($),_3(this))},g2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),_3(this))},g2.prototype.render=d2,h$=[],O3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B3=function(_,$){return _.__v.__b-$.__v.__b},i2.__r=0,L3=/(PointerCapture)$|Capture$/i,w4=0,E4=j3(!1),y4=j3(!0),H9=0;var J2,X0,D4,Z3,H2=0,k3=[],W0=e_,N3=W0.__b,K3=W0.__r,z3=W0.diffed,Y3=W0.__c,G3=W0.unmount,W3=W0.__;function I4(_,$){W0.__h&&W0.__h(X0,_,H2||$),H2=0;var j=X0.__H||(X0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return H2=1,P9(w3,_)}function P9(_,$,j){var Z=I4(J2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):w3(void 0,$),function(W){var q=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(q,W);q!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=X0,!X0.__f)){var N=function(W,q,V){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(U){return U.__c});if(B.every(function(U){return!U.__N}))return!K||K.call(this,W,q,V);var Y=Z.__c.props!==W;return B.some(function(U){if(U.__N){var C=U.__[0];U.__=U.__N,U.__N=void 0,C!==U.__[0]&&(Y=!0)}}),K&&K.call(this,W,q,V)||Y};X0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=X0;X0.componentWillUpdate=function(W,q,V){if(this.__e){var B=K;K=void 0,N(W,q,V),K=B}z&&z.call(this,W,q,V)},X0.shouldComponentUpdate=N}return Z.__N||Z.__}function f(_,$){var j=I4(J2++,3);!W0.__s&&A3(j.__H,$)&&(j.__=_,j.u=$,X0.__H.__h.push(j))}function D(_){return H2=5,n_(function(){return{current:_}},[])}function n_(_,$){var j=I4(J2++,7);return A3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function y(_,$){return H2=8,n_(function(){return _},$)}function M9(){for(var _;_=k3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(p2),$.__h.some(A4),$.__h=[]}catch(j){$.__h=[],W0.__e(j,_.__v)}}}W0.__b=function(_){X0=null,N3&&N3(_)},W0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),W3&&W3(_,$)},W0.__r=function(_){K3&&K3(_),J2=0;var $=(X0=_.__c).__H;$&&(D4===X0?($.__h=[],X0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(p2),$.__h.some(A4),$.__h=[],J2=0)),D4=X0},W0.diffed=function(_){z3&&z3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(k3.push($)!==1&&Z3===W0.requestAnimationFrame||((Z3=W0.requestAnimationFrame)||C9)(M9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),D4=X0=null},W0.__c=function(_,$){$.some(function(j){try{j.__h.some(p2),j.__h=j.__h.filter(function(Z){return!Z.__||A4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],W0.__e(Z,j.__v)}}),Y3&&Y3(_,$)},W0.unmount=function(_){G3&&G3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{p2(Z)}catch(N){$=N}}),j.__H=void 0,$&&W0.__e($,j.__v))};var X3=typeof requestAnimationFrame=="function";function C9(_){var $,j=function(){clearTimeout(Z),X3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);X3&&($=requestAnimationFrame(j))}function p2(_){var $=X0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),X0=$}function A4(_){var $=X0;_.__c=_.__(),X0=$}function A3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function w3(_,$){return typeof $=="function"?$(_):$}var P3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],W=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=W:z===4?Z[1]=Object.assign(Z[1]||{},W):z===5?(Z[1]=Z[1]||{})[$[++K]]=W:z===6?Z[1][$[++K]]+=W+"":z?(N=_.apply(W,P3(_,W,j,["",null])),Z.push(N),W[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(W)}return Z},V3=new Map;function I9(_){var $=V3.get(this);return $||($=new Map,V3.set(this,$)),($=P3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",W="",q=[0],V=function(U){K===1&&(U||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,U,z):K===3&&(U||z)?(q.push(3,U,z),K=2):K===2&&z==="..."&&U?q.push(4,U,0):K===2&&z&&!U?q.push(5,0,!0,z):K>=5&&((z||!U&&K===5)&&(q.push(K,0,z,N),K=6),U&&(q.push(K,U,0,N),K=6)),z=""},B=0;B<j.length;B++){B&&(K===1&&V(),V(B));for(var Y=0;Y<j[B].length;Y++)Z=j[B][Y],K===1?Z==="<"?(V(),q=[q],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:W?Z===W?W="":z+=Z:Z==='"'||Z==="'"?W=Z:Z===">"?(V(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[B][Y+1]===">")?(V(),K===3&&(q=q[0]),K=q,(q=q[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,q=q[0])}return V(),q}(_)),$),arguments,[])).length>1?$:$[0]}var L=I9.bind(Q3);var G$={};U9(G$,{uploadWorkspaceFile:()=>r2,uploadMedia:()=>u4,updateWorkspaceFile:()=>l9,submitAdaptiveCardAction:()=>m4,streamSidePrompt:()=>c9,steerAgentQueueItem:()=>p9,setWorkspaceVisibility:()=>k2,setAgentThoughtVisibility:()=>c4,sendPeerAgentMessage:()=>v9,sendAgentMessage:()=>X2,searchPosts:()=>S4,respondToAgentRequest:()=>o2,renameWorkspaceFile:()=>s4,renameChatBranch:()=>f9,removeAgentQueueItem:()=>g9,pruneChatBranch:()=>R9,moveWorkspaceEntry:()=>o4,getWorkspaceTree:()=>y2,getWorkspaceRawUrl:()=>a2,getWorkspaceFile:()=>l4,getWorkspaceDownloadUrl:()=>t2,getWorkspaceBranch:()=>i9,getTimeline:()=>D2,getThumbnailUrl:()=>h4,getThread:()=>x4,getPostsByHashtag:()=>b4,getMediaUrl:()=>Y$,getMediaText:()=>i4,getMediaInfo:()=>V2,getMediaBlob:()=>h9,getChatBranches:()=>T9,getAgents:()=>R4,getAgentThought:()=>p4,getAgentStatus:()=>v4,getAgentQueueState:()=>m9,getAgentModels:()=>E2,getAgentContext:()=>u9,getActiveChatAgents:()=>f4,forkChatBranch:()=>s2,deleteWorkspaceFile:()=>r4,deletePost:()=>T4,createWorkspaceFile:()=>d4,createReply:()=>x9,createPost:()=>S9,attachWorkspaceFile:()=>n4,addToWhitelist:()=>g4,SSEClient:()=>e2});async function g_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function M3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function b9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:W}=await j.read();if(W)break;N+=Z.decode(z,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let V of q){let B=M3(V);if(B)$(B.event,B.data)}}N+=Z.decode();let K=M3(N);if(K)$(K.event,K.data)}async function D2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return g_(Z)}async function b4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return g_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function S4(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",W=N?`&scope=${encodeURIComponent(N)}`:"",q=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return g_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${W}${q}`)}async function x4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return g_(`/thread/${_}${j}`)}async function S9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return g_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function x9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return g_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function T4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return g_(N,{method:"DELETE"})}async function X2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return g_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function f4(){return g_("/agent/active-chats")}async function T9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/branches${$}`)}async function s2(_,$={}){return g_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function f9(_,$={}){return g_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function R9(_){return g_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function v9(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return g_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function R4(){return g_("/agent/roster")}async function v4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/status${$}`)}async function u9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/context${$}`)}async function m9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/queue-state${$}`)}async function g9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function p9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function E2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/models${$}`)}async function u4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function o2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function m4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function c9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await b9(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function g4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function p4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return g_(j)}async function c4(_,$,j){return g_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function Y$(_){return`/media/${_}`}function h4(_){return`/media/${_}/thumbnail`}async function V2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function i4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function h9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function y2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return g_(Z)}async function i9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return g_($)}async function l4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return g_(N)}async function l9(_,$){return g_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function n4(_){return g_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function r2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",W=await fetch(""+z,{method:"POST",body:Z});if(!W.ok){let q=await W.json().catch(()=>({error:"Upload failed"})),V=Error(q.error||`HTTP ${W.status}`);throw V.status=W.status,V.code=q.code,V}return W.json()}async function d4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function s4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function o4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function r4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return g_($,{method:"DELETE"})}async function k2(_,$=!1){return g_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function a2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function t2(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class e2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function W$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function j0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function q2(_,$=!1){let j=W$(_);if(j===null)return $;return j==="true"}function O2(_,$=null){let j=W$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function _4(_){return String(_||"").trim().toLowerCase()}function a4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return _4($[1]||"")}function C3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=_4(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function I3(_,$,j={}){let Z=a4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return C3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return _4(K?.agent_name).startsWith(Z)})}function t4(_){let $=_4(_);return $?`@${$} `:""}function b3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return C3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function S3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function U$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let W=`${_}-file-pill`,q=`${_}-file-name`,V=`${_}-file-remove`,B=z==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${W} title=${j||$} onClick=${N}>
      ${B}
      <span class=${q}>${$}</span>
      ${Z&&L`
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
  `}var n9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function d9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${x3(j)} / ${x3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,W=$/100*z,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
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
    `}function x3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function T3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:W,fileRefs:q=[],onRemoveFileRef:V,onClearFileRefs:B,messageRefs:Y=[],onRemoveMessageRef:U,onClearMessageRefs:C,activeModel:m=null,modelUsage:v=null,thinkingLevel:R=null,supportsThinking:E=!1,contextUsage:F=null,notificationsEnabled:S=!1,notificationPermission:M="default",onToggleNotifications:i,onModelChange:t,onModelStateChange:Z_,activeEditorPath:l=null,onAttachEditorFile:N_,onOpenFilePill:h,followupQueueItems:B_=[],onInjectQueuedFollowup:h_,onRemoveQueuedFollowup:o,onSubmitIntercept:d,onMessageResponse:K_,onPopOutChat:$_,isAgentActive:z_=!1,activeChatAgents:P_=[],currentChatJid:Q_="web:default",connectionStatus:M_="connected",onSetFileRefs:U_,onSetMessageRefs:R_,onSubmitError:v_}){let[W_,I_]=T(""),[S_,V0]=T(""),[X_,__]=T([]),[C_,Y_]=T(!1),[D_,y_]=T([]),[d_,s_]=T(0),[o_,H_]=T(!1),[x_,T_]=T([]),[Z0,b_]=T(0),[J0,r_]=T(!1),[N0,d0]=T(!1),[Q0,f_]=T(!1),[q0,a_]=T([]),[K0,H0]=T(!1),[i_,D0]=T(0),[w0,L_]=T(null),I=D(null),e=D(null),k_=D(null),A_=D(null),z0=D(null),m0=D(null),P0=D(0),O0=200,E0=(Q)=>{let b=new Set,x=[];for(let n of Q||[]){if(typeof n!=="string")continue;let V_=n.trim();if(!V_||b.has(V_))continue;b.add(V_),x.push(V_)}return x},$$=()=>{let Q=W$("piclaw_compose_history");if(!Q)return[];try{let b=JSON.parse(Q);if(!Array.isArray(b))return[];return E0(b)}catch{return[]}},V$=(Q)=>{j0("piclaw_compose_history",JSON.stringify(Q))},q$=D($$()),M0=D(-1),g0=D(""),l$=W_.trim()||X_.length>0||q.length>0||Y.length>0,s0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),y0=typeof window<"u"&&typeof Notification<"u",w$=typeof window<"u"?Boolean(window.isSecureContext):!1,x0=y0&&w$&&M!=="denied",Z2=M==="granted"&&S,p0=Z2?"Disable notifications":"Enable notifications",n$=X_.length>0||q.length>0||Y.length>0,$0=M_==="disconnected"?"Reconnecting":String(M_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Q)=>Q.toUpperCase()),B$=M_==="disconnected"?"Reconnecting":`Connection: ${$0}`,o0=b3(P_,{currentChatJid:Q_,limit:4}),C0=o0.length>0,I0=!j&&S3({footerWidth:i_,visibleAgentCount:o0.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),T0=m||"",L$=E&&R?` (${R})`:"",P$=L$.trim()?`${R}`:"",f$=typeof v?.hint_short==="string"?v.hint_short.trim():"",R$=[P$||null,f$||null].filter(Boolean).join(" • "),U0=[T0?`Current model: ${T0}${L$}`:null,v?.plan?`Plan: ${v.plan}`:null,f$||null,v?.primary?.reset_description||null,v?.secondary?.reset_description||null].filter(Boolean),M$=N0?"Switching model…":U0.join(" • ")||`Current model: ${T0}${L$} (tap to open model picker)`,c0=(Q)=>{if(!Q||typeof Q!=="object")return;let b=Q.model??Q.current;if(typeof Z_==="function")Z_({model:b??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(b&&typeof t==="function")t(b)},B0=(Q)=>{let b=Q||I.current;if(!b)return;b.style.height="auto",b.style.height=`${b.scrollHeight}px`,b.style.overflowY="hidden"},h0=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),n=-1;for(let u_=0;u_<x.length;u_+=1)if(x[u_].trim()==="Files:"&&x[u_+1]&&/^\s*-\s+/.test(x[u_+1])){n=u_;break}if(n===-1)return{content:Q,fileRefs:[]};let V_=[],E_=n+1;for(;E_<x.length;E_+=1){let u_=x[E_];if(/^\s*-\s+/.test(u_))V_.push(u_.replace(/^\s*-\s+/,"").trim());else if(!u_.trim())break;else break}if(V_.length===0)return{content:Q,fileRefs:[]};let w_=x.slice(0,n),G_=x.slice(E_);return{content:[...w_,...G_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:V_}},N2=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),n=-1;for(let u_=0;u_<x.length;u_+=1)if(x[u_].trim()==="Referenced messages:"&&x[u_+1]&&/^\s*-\s+/.test(x[u_+1])){n=u_;break}if(n===-1)return{content:Q,messageRefs:[]};let V_=[],E_=n+1;for(;E_<x.length;E_+=1){let u_=x[E_];if(/^\s*-\s+/.test(u_)){let i0=u_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(i0)V_.push(i0[1])}else if(!u_.trim())break;else break}if(V_.length===0)return{content:Q,messageRefs:[]};let w_=x.slice(0,n),G_=x.slice(E_);return{content:[...w_,...G_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:V_}},f0=(Q)=>{let b=h0(Q||""),x=N2(b.content||"");return{text:x.content||"",fileRefs:b.fileRefs,messageRefs:x.messageRefs}},K2=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){H_(!1),y_([]);return}let b=Q.toLowerCase().split(" ")[0];if(b.length<1){H_(!1),y_([]);return}let x=n9.filter((n)=>n.name.startsWith(b)||n.name.replace(/-/g,"").startsWith(b.replace(/-/g,"")));if(x.length>0&&!(x.length===1&&x[0].name===b))r_(!1),T_([]),y_(x),s_(0),H_(!0);else H_(!1),y_([])},J$=(Q)=>{let b=W_,x=b.indexOf(" "),n=x>=0?b.slice(x):"",V_=Q.name+n;I_(V_),H_(!1),y_([]),requestAnimationFrame(()=>{let E_=I.current;if(!E_)return;let w_=V_.length;E_.selectionStart=w_,E_.selectionEnd=w_,E_.focus()})},v$=(Q)=>{if(a4(Q)==null){r_(!1),T_([]);return}let b=I3(P_,Q,{currentChatJid:Q_});if(b.length>0&&!(b.length===1&&t4(b[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))H_(!1),y_([]),T_(b),b_(0),r_(!0);else r_(!1),T_([])},u$=(Q)=>{let b=t4(Q?.agent_name);if(!b)return;I_(b),r_(!1),T_([]),requestAnimationFrame(()=>{let x=I.current;if(!x)return;let n=b.length;x.selectionStart=n,x.selectionEnd=n,x.focus()})},C$=(Q)=>{if(j)V0(Q);else I_(Q),K2(Q),v$(Q);requestAnimationFrame(()=>B0())},p_=(Q)=>{let b=j?S_:W_,x=b&&!b.endsWith(`
`)?`
`:"",n=`${b}${x}${Q}`.trimStart();C$(n)},b0=(Q)=>{let b=Q?.command?.model_label;if(b)return b;let x=Q?.command?.message;if(typeof x==="string"){let n=x.match(/•\s+([^\n]+?)\s+\(current\)/);if(n?.[1])return n[1].trim()}return null},R0=async(Q)=>{if(j||N0)return;d0(!0);try{let b=await X2("default",Q,null,[],null,Q_),x=b0(b);c0({model:x??m??null,thinking_level:b?.command?.thinking_level,supports_thinking:b?.command?.supports_thinking});try{let n=await E2(Q_);if(n)c0(n)}catch{}return _?.(),!0}catch(b){return console.error("Failed to switch model:",b),alert("Failed to switch model: "+b.message),!1}finally{d0(!1)}},d$=async()=>{await R0("/cycle-model")},s$=async(Q)=>{if(!Q||N0)return;if(await R0(`/model ${Q}`))f_(!1)},o$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),f_((b)=>!b)},H$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return z_?"queue":null},k0=async(Q,b,x={})=>{let{includeMedia:n=!0,includeFileRefs:V_=!0,includeMessageRefs:E_=!0,clearAfterSubmit:w_=!0,recordHistory:G_=!0}=x||{},N$=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:W_,u_=typeof N$==="string"?N$:"";if(!u_.trim()&&(n?X_.length===0:!0)&&(V_?q.length===0:!0)&&(E_?Y.length===0:!0))return;H_(!1),y_([]),r_(!1),T_([]),L_(null);let i0=n?[...X_]:[],y$=V_?[...q]:[],p$=E_?[...Y]:[],k$=u_.trim();if(G_&&k$){let b$=q$.current,l_=E0(b$.filter((S0)=>S0!==k$));if(l_.push(k$),l_.length>200)l_.splice(0,l_.length-200);q$.current=l_,V$(l_),M0.current=-1,g0.current=""}let t$=()=>{if(n)__([...i0]);if(V_)U_?.(y$);if(E_)R_?.(p$);I_(k$),requestAnimationFrame(()=>B0())};if(w_)I_(""),__([]),B?.(),C?.();(async()=>{try{if(await d?.({content:k$,submitMode:b,fileRefs:y$,messageRefs:p$,mediaFiles:i0})){_?.();return}let l_=[];for(let v0 of i0){let Q$=await u4(v0);l_.push(Q$.id)}let S0=y$.length?`Files:
${y$.map((v0)=>`- ${v0}`).join(`
`)}`:"",c$=p$.length?`Referenced messages:
${p$.map((v0)=>`- message:${v0}`).join(`
`)}`:"",z2=l_.length?`Images:
${l_.map((v0,Q$)=>{let t0=i0[Q$]?.name||`attachment-${Q$+1}`;return`- attachment:${v0} (${t0})`}).join(`
`)}`:"",a0=[k$,S0,c$,z2].filter(Boolean).join(`

`),l0=await X2("default",a0,null,l_,H$(b),Q_);if(K_?.(l0),l0?.command){c0({model:l0.command.model_label??m??null,thinking_level:l0.command.thinking_level,supports_thinking:l0.command.supports_thinking});try{let v0=await E2(Q_);if(v0)c0(v0)}catch{}}_?.()}catch(b$){if(w_)t$();let l_=b$?.message||"Failed to send message.";L_(l_),v_?.(l_),console.error("Failed to post:",b$)}})()},Y0=(Q)=>{h_?.(Q)},L0=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),V0(""),W?.();return}if(J0&&x_.length>0){let b=I.current?.value??(j?S_:W_);if(!String(b||"").match(/^@([a-zA-Z0-9_-]*)$/))r_(!1),T_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),b_((x)=>(x+1)%x_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),b_((x)=>(x-1+x_.length)%x_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),u$(x_[Z0]);return}if(Q.key==="Escape"){Q.preventDefault(),r_(!1),T_([]);return}}}if(o_&&D_.length>0){let b=I.current?.value??(j?S_:W_);if(!String(b||"").startsWith("/"))H_(!1),y_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),s_((x)=>(x+1)%D_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),s_((x)=>(x-1+D_.length)%D_.length);return}if(Q.key==="Tab"){Q.preventDefault(),J$(D_[d_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(I.current?.value??(j?S_:W_)).includes(" ")){Q.preventDefault();let V_=D_[d_];H_(!1),y_([]),k0(V_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),H_(!1),y_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let b=I.current;if(!b)return;let x=b.value||"",n=b.selectionStart===0&&b.selectionEnd===0,V_=b.selectionStart===x.length&&b.selectionEnd===x.length;if(Q.key==="ArrowUp"&&n||Q.key==="ArrowDown"&&V_){let E_=q$.current;if(!E_.length)return;Q.preventDefault();let w_=M0.current;if(Q.key==="ArrowUp"){if(w_===-1)g0.current=x,w_=E_.length-1;else if(w_>0)w_-=1;M0.current=w_,C$(E_[w_]||"")}else{if(w_===-1)return;if(w_<E_.length-1)w_+=1,M0.current=w_,C$(E_[w_]||"");else M0.current=-1,C$(g0.current||""),g0.current=""}requestAnimationFrame(()=>{let G_=I.current;if(!G_)return;let N$=G_.value.length;G_.selectionStart=N$,G_.selectionEnd=N$});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let b=I.current?.value??(j?S_:W_);if(j){if(b.trim())N?.(b.trim(),Z)}else k0(b,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let b=I.current?.value??(j?S_:W_);if(j){if(b.trim())N?.(b.trim(),Z)}else k0(b)}},r0=(Q)=>{let b=Array.from(Q||[]).filter((x)=>x&&x.type&&x.type.startsWith("image/"));if(!b.length)return;__((x)=>[...x,...b]),L_(null)},I$=(Q)=>{r0(Q.target.files),Q.target.value=""},r$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),P0.current+=1,Y_(!0)},D$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),P0.current=Math.max(0,P0.current-1),P0.current===0)Y_(!1)},j$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";Y_(!0)},m$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),P0.current=0,Y_(!1),r0(Q.dataTransfer?.files||[])},Z$=(Q)=>{if(j)return;let b=Q.clipboardData?.items;if(!b||!b.length)return;let x=[];for(let n of b){if(n.kind!=="file")continue;let V_=n.getAsFile?.();if(V_)x.push(V_)}if(x.length>0)Q.preventDefault(),r0(x)},A0=(Q)=>{__((b)=>b.filter((x,n)=>n!==Q))},E$=()=>{L_(null),__([]),B?.(),C?.()},a$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:b,longitude:x,accuracy:n}=Q.coords,V_=`${b.toFixed(5)}, ${x.toFixed(5)}`,E_=Number.isFinite(n)?` ±${Math.round(n)}m`:"",w_=`https://maps.google.com/?q=${b},${x}`,G_=`Location: ${V_}${E_} ${w_}`;p_(G_)},(Q)=>{let b=Q?.message||"Unable to retrieve location.";alert(`Location error: ${b}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};f(()=>{if(!Q0)return;H0(!0),E2(Q_).then((Q)=>{let b=Array.isArray(Q?.models)?Q.models.filter((x)=>typeof x==="string"&&x.trim().length>0):[];b.sort((x,n)=>x.localeCompare(n,void 0,{sensitivity:"base"})),a_(b),c0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),a_([])}).finally(()=>{H0(!1)})},[Q0,m]),f(()=>{if(j)f_(!1),H_(!1),y_([]),r_(!1),T_([])},[j]),f(()=>{if(!Q0)return;let Q=(b)=>{let x=A_.current,n=z0.current,V_=b.target;if(x&&x.contains(V_))return;if(n&&n.contains(V_))return;f_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[Q0]),f(()=>{let Q=()=>{let E_=m0.current?.clientWidth||0;D0((w_)=>w_===E_?w_:E_)};Q();let b=m0.current,x=0,n=()=>{if(x)cancelAnimationFrame(x);x=requestAnimationFrame(()=>{x=0,Q()})},V_=null;if(b&&typeof ResizeObserver<"u")V_=new ResizeObserver(()=>n()),V_.observe(b);if(typeof window<"u")window.addEventListener("resize",n);return()=>{if(x)cancelAnimationFrame(x);if(V_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",n)}},[j,m,o0.length,F?.percent]);let g$=(Q)=>{let b=Q.target.value;L_(null),B0(Q.target),C$(b)};return f(()=>{requestAnimationFrame(()=>B0())},[W_,S_,j]),f(()=>{if(j)return;v$(W_)},[P_,Q_,W_,j]),L`
        <div class="compose-box">
            ${!j&&B_.length>0&&L`
                <div class="compose-queue-stack">
                    ${B_.map((Q)=>{let b=typeof Q?.content==="string"?Q.content:"",x=f0(b);if(!x.text.trim()&&x.fileRefs.length===0&&x.messageRefs.length===0)return null;return L`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${b}>
                                    ${x.text.trim()&&L`
                                        <div class="compose-queue-stack-text">${x.text}</div>
                                    `}
                                    ${(x.messageRefs.length>0||x.fileRefs.length>0)&&L`
                                        <div class="compose-queue-stack-refs">
                                            ${x.messageRefs.map((n)=>L`
                                                <${U$}
                                                    key=${"queue-msg-"+n}
                                                    prefix="compose"
                                                    label=${"msg:"+n}
                                                    title=${"Message reference: "+n}
                                                    icon="message"
                                                />
                                            `)}
                                            ${x.fileRefs.map((n)=>{let V_=n.split("/").pop()||n;return L`
                                                    <${U$}
                                                        key=${"queue-file-"+n}
                                                        prefix="compose"
                                                        label=${V_}
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
                                        onClick=${()=>Y0(Q)}
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
                class=${`compose-input-wrapper${C_?" drag-active":""}`}
                onDragEnter=${r$}
                onDragOver=${j$}
                onDragLeave=${D$}
                onDrop=${m$}
            >
                ${M_!=="connected"&&L`
                    <span class="compose-connection-status connection-status ${M_}" title=${B$}>
                        ${$0}
                    </span>
                `}
                <div class="compose-input-main">
                    ${w0&&!n$&&L`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${w0}</div>
                    `}
                    ${n$&&L`
                        <div class="compose-file-refs">
                            ${w0&&L`
                                <div class="compose-submit-error" role="status" aria-live="polite">${w0}</div>
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
                            ${q.map((Q)=>{let b=Q.split("/").pop()||Q;return L`
                                    <${U$}
                                        prefix="compose"
                                        label=${b}
                                        title=${Q}
                                        onClick=${()=>h?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(Q)}
                                    />
                                `})}
                            ${X_.map((Q,b)=>{let x=Q?.name||`attachment-${b+1}`;return L`
                                    <${U$}
                                        key=${x+b}
                                        prefix="compose"
                                        label=${x}
                                        title=${x}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>A0(b)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${E$}
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
                        ref=${I}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?S_:W_}
                        onInput=${g$}
                        onKeyDown=${L0}
                        onPaste=${Z$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${J0&&x_.length>0&&L`
                        <div class="slash-autocomplete" ref=${k_}>
                            ${x_.map((Q,b)=>L`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${b===Z0?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),u$(Q)}}
                                    onMouseEnter=${()=>b_(b)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${o_&&D_.length>0&&L`
                        <div class="slash-autocomplete" ref=${e}>
                            ${D_.map((Q,b)=>L`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${b===d_?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),J$(Q)}}
                                    onMouseEnter=${()=>s_(b)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${Q0&&!j&&L`
                        <div class="compose-model-popup" ref=${A_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${K0&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!K0&&q0.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!K0&&q0.map((Q)=>L`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===Q?" active":""}`}
                                        onClick=${()=>{s$(Q)}}
                                        disabled=${N0}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{d$()}}
                                    disabled=${N0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${m0}>
                    ${!j&&m&&L`
                    <div class="compose-meta-row">
                        ${!j&&m&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${z0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${M$}
                                    aria-label="Open model picker"
                                    onClick=${o$}
                                    disabled=${N0}
                                >
                                    ${N0?"Switching…":T0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!N0&&R$&&L`
                                        <span class="compose-model-usage-hint" title=${M$}>
                                            ${R$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${I0&&L`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${o0.map((Q)=>L`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>u$(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&L`
                        <${d9} usage=${F} />
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
                        onClick=${j?W:z}
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
                    ${s0&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${a$}
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
                    ${x0&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${Z2?" active":""}`}
                            onClick=${i}
                            title=${p0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&L`
                        ${l&&N_&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${N_}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${q.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${I$} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{k0()}}
                            disabled=${!l$}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var v3="piclaw_theme",$1="piclaw_tint",w2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},u3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},f3={default:{label:"Default",mode:"auto",light:w2,dark:u3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},s9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],e$={theme:"default",tint:null},m3="light",e4=!1;function j1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function L2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function o9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),W=parseInt(N[3],10);if(![K,z,W].every((V)=>Number.isFinite(V)))return null;let q=`#${[K,z,W].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:W,hex:q}}function g3(_){return L2(_)||o9(_)}function A2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function _1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function r9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function a9(_){return r9(_)>0.4?"#000000":"#ffffff"}function p3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z1(_){return f3[_]||f3.default}function t9(_){return _.mode==="auto"?p3():_.mode}function c3(_,$){let j=Z1(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||w2}function h3(_,$,j){let Z=g3($);if(!Z)return _;let N=L2(_.bgPrimary),K=L2(_.bgSecondary),z=L2(_.bgHover),W=L2(_.borderColor);if(!N||!K||!z||!W)return _;let V=L2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:A2(N,Z,0.08),bgSecondary:A2(K,Z,0.12),bgHover:A2(z,Z,0.16),borderColor:A2(W,Z,0.08),accent:Z.hex,accentHover:V?A2(Z,V,0.18):Z.hex}}function e9(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=g3(Z),K=N?_1(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?_1(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",W=N?_1(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?a9(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":W,"--accent-contrast-text":q,"--danger-color":_.danger||w2.danger,"--success-color":_.success||w2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([B,Y])=>{if(Y)j.style.setProperty(B,Y)})}function _7(){if(typeof document>"u")return;let _=document.documentElement;s9.forEach(($)=>_.style.removeProperty($))}function B2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function R3(_){let $=j1(e$?.theme||"default"),j=e$?.tint?String(e$.tint).trim():null,Z=c3($,_);if($==="default"&&j)Z=h3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?u3.bgPrimary:w2.bgPrimary}function $7(_,$){if(typeof document>"u")return;let j=B2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=B2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",R3("light"));let N=B2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",R3("dark"));let K=B2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let z=B2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let W=B2("apple-mobile-web-app-status-bar-style");if(W)W.setAttribute("content",$==="dark"?"black-translucent":"default")}function j7(){if(typeof window>"u")return;let _={...e$,mode:m3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function N1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=j1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=Z1(j),K=t9(N),z=c3(j,K);e$={theme:j,tint:Z},m3=K;let W=document.documentElement;W.dataset.theme=K,W.dataset.colorTheme=j,W.dataset.tint=Z?String(Z):"",W.style.colorScheme=K;let q=z;if(j==="default"&&Z)q=h3(z,Z,K);if(j==="default"&&!Z)_7();else e9(q,K);if($7(q.bgPrimary,K),j7(),$.persist!==!1)if(j0(v3,j),Z)j0($1,Z);else j0($1,"")}function $4(){if(Z1(e$.theme).mode!=="auto")return;N1(e$,{persist:!1})}function i3(){if(typeof window>"u")return()=>{};let _=j1(W$(v3)||"default"),$=W$($1),j=$?$.trim():null;if(N1({theme:_,tint:j},{persist:!1}),window.matchMedia&&!e4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",$4);else if(Z.addListener)Z.addListener($4);return e4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",$4);else if(Z.removeListener)Z.removeListener($4);e4=!1}}return()=>{}}function l3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;N1({theme:j||"default",tint:Z},{persist:!0})}function n3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return p3()}var j4=/#(\w+)/g,Z7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),N7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),K7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),z7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},Y7=new Set(["http:","https:","mailto:",""]);function K1(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function _2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!Y7.has(Z.protocol))return null;return Z.href}catch{return null}}function d3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let W=z.tagName.toLowerCase();if(!N7.has(W)){let V=z.parentNode;if(!V)continue;while(z.firstChild)V.insertBefore(z.firstChild,z);V.removeChild(z);continue}let q=z7[W]||new Set;for(let V of Array.from(z.attributes)){let B=V.name.toLowerCase(),Y=V.value;if(B.startsWith("on")){z.removeAttribute(V.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(q.has(B)||K7.has(B)){if(B==="href"){let U=_2(Y);if(!U)z.removeAttribute(V.name);else if(z.setAttribute(V.name,U),W==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let U=W==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(Y):Y,C=_2(U,{allowDataImage:W==="img"});if(!C)z.removeAttribute(V.name);else z.setAttribute(V.name,C)}continue}z.removeAttribute(V.name)}}return j.body.innerHTML}function s3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function Z4(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=s3(j);if(N===j)break;j=N}return j}function G7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let W of j){if(!K&&W.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&W.trim().match(/^```\s*$/)){let q=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),K=!1,z=[];continue}if(K)z.push(W);else N.push(W)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function W7(_){if(!_)return _;return Z4(_,5)}function X7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function V7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function q7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=W7(K);return`<div class="mermaid-container" data-mermaid="${X7(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function o3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var O7={span:new Set(["title","class","lang","dir"])};function B7(_,$){let j=O7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,K;while(K=N.exec($)){let z=(K[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let W=K[2]??K[3]??K[4]??"";Z.push(` ${z}="${K1(W)}"`)}return Z.join("")}function r3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,W=K.endsWith("/")?K.slice(0,-1).trim():K,[q=""]=W.split(/\s+/,1),V=q.toLowerCase();if(!V||!Z7.has(V))return $;if(V==="br")return N?"":"<br>";if(N)return`</${V}>`;let B=W.slice(q.length).trim(),Y=B7(V,B);return`<${V}${Y}>`})}function a3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function t3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function L7(_){if(!window.katex)return _;let $=(z)=>s3(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let W=[],q=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let B=W.length;return W.push(V),`@@CODE_BLOCK_${B}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let B=W.length;return W.push(V),`@@CODE_INLINE_${B}@@`}),{html:q,blocks:W}},Z=(z,W)=>{if(!W.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,V)=>{let B=Number(V);return W[B]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,W,q)=>{try{let V=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${W}${V}`}catch(V){return`<span class="math-error" title="${K1(V.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,W,q)=>{if(/\s$/.test(q))return z;try{let V=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${W}${V}`}catch(V){return`${W}<span class="math-error" title="${K1(V.message)}">$${q}$</span>`}}),Z(K,N.blocks)}function Q7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(j4.lastIndex=0,!j4.test(z))continue;j4.lastIndex=0;let W=K.parentElement;if(W&&(W.closest("a")||W.closest("code")||W.closest("pre")))continue;let q=z.split(j4);if(q.length<=1)continue;let V=$.createDocumentFragment();q.forEach((B,Y)=>{if(Y%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",B),U.textContent=`#${B}`,V.appendChild(U)}else V.appendChild($.createTextNode(B))}),K.parentNode?.replaceChild(V,K)}return $.body.innerHTML}function U7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function _$(_,$,j={}){if(!_)return"";let Z=U7(_),{text:N,blocks:K}=G7(Z),z=Z4(N,2),q=o3(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=r3(q),B=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return B=a3(B),B=t3(B),B=L7(B),B=Q7(B),B=q7(B,K),B=d3(B,j),B}function N4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=Z4($,2),N=o3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=r3(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=a3(z),z=t3(z),z=d3(z),z}async function x$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=n3()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let W=z.dataset.mermaid,q=V7(W||""),V=Z4(q,2),B=await $(V,{...N,transparent:!0});z.innerHTML=B,z.removeAttribute("data-mermaid")}catch(W){console.error("Mermaid render error:",W);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${W.message}`,z.innerHTML="",z.appendChild(q),z.removeAttribute("data-mermaid")}}function e3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function _6(_){return String(_||"").trim()||"web:default"}function $6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function j6(_){if(!_)return!1;return _.status!=="running"}function Z6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function N6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),K=D(null),z=_?.thinking?N4(_.thinking):"",W=_?.answer?_$(_.answer,null,{sanitize:!1}):"";if(f(()=>{if(N.current&&z)x$(N.current).catch(()=>{})},[z]),f(()=>{if(K.current&&W)x$(K.current).catch(()=>{})},[W]),!_)return null;let q=_.status==="running",V=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),Y=$6(_),U=j6(_),C=!q&&V,m=q?"Thinking…":_.status==="error"?"Error":"Done";return L`
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
                        dangerouslySetInnerHTML=${{__html:W}}
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
    `}var K6="PiClaw";function z1(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,W=K[z],q=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",B=V?V:null,Y=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:W,image:B||(Y?"/static/icon-192.png":null)}}function z6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function Y6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function G6(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",W=K?.dataset?.tint||"",q=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(q&&(W||z&&z!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function F7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function P2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function W6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return P2(_)?"Compacting context":"Working..."}function J7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function X6(_,$=Date.now()){let j=F7(_);if(j===null)return null;return J7(Math.max(0,$-j))}function V6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:W,onPanelToggle:q}){let Y=(__)=>{if(!__)return{text:"",totalLines:0,fullText:""};if(typeof __==="string"){let y_=__,d_=y_?y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y_,totalLines:d_,fullText:y_}}let C_=__.text||"",Y_=__.fullText||__.full_text||C_,D_=Number.isFinite(__.totalLines)?__.totalLines:Y_?Y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:C_,totalLines:D_,fullText:Y_}},U=160,C=(__)=>String(__||"").replace(/<\/?internal>/gi,""),m=(__)=>{if(!__)return 1;return Math.max(1,Math.ceil(__.length/160))},v=(__,C_,Y_)=>{let D_=(__||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D_)return{text:"",omitted:0,totalLines:Number.isFinite(Y_)?Y_:0,visibleLines:0};let y_=D_.split(`
`),d_=y_.length>C_?y_.slice(0,C_).join(`
`):D_,s_=Number.isFinite(Y_)?Y_:y_.reduce((x_,T_)=>x_+m(T_),0),o_=d_?d_.split(`
`).reduce((x_,T_)=>x_+m(T_),0):0,H_=Math.max(s_-o_,0);return{text:d_,omitted:H_,totalLines:s_,visibleLines:o_}},R=Y(j),E=Y(Z),F=Y($),S=Boolean(R.text)||R.totalLines>0,M=Boolean(E.text)||E.totalLines>0,i=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!i&&!S&&!M&&!N&&!K)return null;let[t,Z_]=T(new Set),[l,N_]=T(()=>Date.now()),h=(__)=>Z_((C_)=>{let Y_=new Set(C_),D_=!Y_.has(__);if(D_)Y_.add(__);else Y_.delete(__);if(typeof q==="function")q(__,D_);return Y_});f(()=>{Z_(new Set)},[z]);let B_=P2(_);f(()=>{if(!B_)return;N_(Date.now());let __=setInterval(()=>N_(Date.now()),1000);return()=>clearInterval(__)},[B_,_?.started_at,_?.startedAt]);let h_=_?.turn_id||z,o=G6(h_),d=W?"turn-dot turn-dot-queued":"turn-dot",K_=(__)=>__,$_=Boolean(_?.last_activity||_?.lastActivity),z_=(__)=>__==="warning"?"#f59e0b":__==="error"?"var(--danger-color)":__==="success"?"var(--success-color)":o,P_=K?.kind||"info",Q_=z_(P_),M_=z_(_?.kind||(B_?"warning":"info")),U_="",R_=_?.title,v_=_?.status;if(_?.type==="plan")U_=R_?`Planning: ${R_}`:"Planning...";else if(_?.type==="tool_call")U_=R_?`Running: ${R_}`:"Running tool...";else if(_?.type==="tool_status")U_=R_?`${R_}: ${v_||"Working..."}`:v_||"Working...";else if(_?.type==="error")U_=R_||"Agent error";else U_=R_||v_||"Working...";if($_)U_="Last activity just now";let W_=({panelTitle:__,text:C_,fullText:Y_,totalLines:D_,maxLines:y_,titleClass:d_,panelKey:s_})=>{let o_=t.has(s_),H_=Y_||C_||"",x_=s_==="thought"||s_==="draft"?C(H_):H_,T_=typeof y_==="number",Z0=o_&&T_,b_=T_?v(x_,y_,D_):{text:x_||"",omitted:0,totalLines:Number.isFinite(D_)?D_:0};if(!x_&&!(Number.isFinite(b_.totalLines)&&b_.totalLines>0))return null;let J0=`agent-thinking-body${T_?" agent-thinking-body-collapsible":""}`,r_=T_?`--agent-thinking-collapsed-lines: ${y_};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${o_?"true":"false"}
                data-collapsible=${T_?"true":"false"}
                style=${o?`--turn-color: ${o};`:""}
            >
                <div class="agent-thinking-title ${d_||""}">
                    ${o&&L`<span class=${d} aria-hidden="true"></span>`}
                    ${__}
                    ${Z0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${__} panel`}
                            onClick=${()=>h(s_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${J0}
                    style=${r_}
                    dangerouslySetInnerHTML=${{__html:N4(x_)}}
                />
                ${!o_&&b_.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>h(s_)}>
                        ▸ ${b_.omitted} more lines
                    </button>
                `}
                ${o_&&b_.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>h(s_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},I_=N?.tool_call?.title,S_=I_?`Awaiting approval: ${I_}`:"Awaiting approval",V0=B_?X6(_,l):null,X_=(__,C_,Y_=null)=>{let D_=W6(__);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${C_?`--turn-color: ${C_};`:""}
                title=${__?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${C_&&L`<span class=${d} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D_}</span>
                    ${Y_&&L`<span class="agent-status-elapsed">${Y_}</span>`}
                </div>
                ${__.detail&&L`<div class="agent-thinking-body">${__.detail}</div>`}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${K&&X_(K,Q_)}
            ${_?.type==="intent"&&X_(_,M_,V0)}
            ${N&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    <span class=${d} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${S_}</span>
                </div>
            `}
            ${S&&W_({panelTitle:K_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${M&&W_({panelTitle:K_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&W_({panelTitle:K_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    ${o&&L`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U_}</span>
                </div>
            `}
        </div>
    `}function q6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",W=Z?.kind||"other",q=Z?.rawInput||{},V=q.command||q.commands&&q.commands[0]||null,B=q.diff||null,Y=q.fileName||q.path||null,U=Z?.description||q.description||q.explanation||null,m=(Array.isArray(Z?.locations)?Z.locations:[]).map((S)=>S?.path).filter((S)=>Boolean(S)),v=Array.from(new Set([Y,...m].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(S)=>{try{await o2(j,S,K||null),$()}catch(M){console.error("Failed to respond to agent request:",M)}},E=async()=>{try{await g4(z,`Auto-approved: ${z}`),await o2(j,"approved",K||null),$()}catch(S){console.error("Failed to add to whitelist:",S)}},F=N&&N.length>0;return L`
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
                ${(U||V||B||v.length>0)&&L`
                    <div class="agent-request-body">
                        ${U&&L`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${v.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${v.map((S,M)=>L`<li key=${M}>${S}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&L`
                            <pre class="agent-request-command">${V}</pre>
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
                    ${F?N.map((S)=>L`
                            <button 
                                key=${S.optionId||S.id||String(S)}
                                class="agent-request-btn ${S.kind==="allow_once"||S.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(S.optionId||S.id||S)}
                            >
                                ${S.name||S.label||S.optionId||S.id||String(S)}
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
    `}function O6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let q=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${V}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${W}`}function M2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function X$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function $2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var H7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),D7=new Set(["text/markdown"]),E7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),y7=new Set(["application/vnd.jgraph.mxfile"]);function C2(_){return typeof _==="string"?_.trim().toLowerCase():""}function k7(_){let $=C2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function A7(_){let $=C2(_);return!!$&&$.endsWith(".pdf")}function w7(_){let $=C2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function I2(_,$){let j=C2(_);if(k7($)||y7.has(j))return"drawio";if(A7($)||j==="application/pdf")return"pdf";if(w7($)||E7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(H7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function B6(_){let $=C2(_);return D7.has($)}function L6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function P7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function M7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function Q6(_){return P7(_)||M7(_)}function K4(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function C7(_,$){let j=Math.max(K4(_),K4($)),Z=Math.min(K4(_),K4($));return(j+0.05)/(Z+0.05)}function I7(_,$,j="#ffffff"){let Z=Q6(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let W=Q6(z);if(!W)continue;let q=C7(Z,W);if(q>K)N=z,K=q}return N}function Y1(){let _=getComputedStyle(document.documentElement),$=(m,v)=>{for(let R of m){let E=_.getPropertyValue(R).trim();if(E)return E}return v},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),W=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),Y=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),C=I7(W,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:W,good:q,warning:V,attention:B,border:Y,fontFamily:U,buttonTextColor:C}}function U6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:W,border:q,fontFamily:V}=Y1();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:W,subtle:W}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:W,subtle:W}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var b7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),F6=!1,z4=null,J6=!1;function G1(_){_.querySelector(".adaptive-card-notice")?.remove()}function S7(_,$,j="error"){G1(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function x7(_,$=(j)=>_$(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function T7(_=($)=>_$($,null)){return($,j)=>{try{let Z=x7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function f7(_){if(J6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=T7(),J6=!0}async function R7(){if(F6)return;if(z4)return z4;return z4=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{F6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),z4}function v7(){return globalThis.AdaptiveCards}function u7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function m7(_){return b7.has(_)}function X1(_){if(!Array.isArray(_))return[];return _.filter(u7)}function g7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function W1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>W1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${W1(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function p7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return W1($);return typeof $==="string"?$:String($)}function c7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((W)=>Z(W));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=p7(z.type,j[z.id],z);for(let[W,q]of Object.entries(z))if(Array.isArray(q)||q&&typeof q==="object")z[W]=Z(q);return z};return Z(_)}function h7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function i7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function l7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=i7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function H6(_,$,j){if(!m7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await R7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=v7();f7(Z);let N=new Z.AdaptiveCard,K=Y1();N.hostConfig=new Z.HostConfig(U6());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,W=$.state==="active"?$.payload:c7($.payload,z);N.parse(W),N.onExecuteAction=(B)=>{let Y=g7(B);if(j?.onAction)G1(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(Y)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let C=U instanceof Error?U.message:String(U||"Action failed.");S7(_,C||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",Y)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let V=l7($);if(V){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let Y=document.createElement("span");if(Y.className="adaptive-card-status-label",Y.textContent=V.label,B.appendChild(Y),V.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=V.detail,B.appendChild(U)}_.appendChild(B)}if(G1(_),_.appendChild(q),V)h7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function b2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>b2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${b2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function D6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:b2(j)})).filter(($)=>$.value)}function n7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function V1(_){if(!Array.isArray(_))return[];return _.filter(n7)}function E6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=b2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=D6(j).slice(0,4).map(({key:K,value:z})=>`${K}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function y6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=D6(_.data),Z=j.length>0?j.slice(0,2).map(({key:z,value:W})=>`${z}: ${W}`).join(", "):b2(_.data)||null,N=j.length,K=Math.max(N-4,0);return{title:$,summary:Z,fields:j.slice(0,4),fieldCount:N,hiddenFieldCount:K,submittedAt:_.submitted_at}}function d7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?X$($):null},{label:"Added",value:_?.created_at?$2(_.created_at):null}].filter((Z)=>Z.value)}function s7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let K=Y$(_);return`/office-viewer/?url=${encodeURIComponent(K)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function k6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=n_(()=>I2($?.content_type,Z),[$?.content_type,Z]),K=L6(N),z=n_(()=>B6($?.content_type),[$?.content_type]),[W,q]=T(N==="text"),[V,B]=T(""),[Y,U]=T(null),C=D(null),m=n_(()=>d7($),[$]),v=n_(()=>s7(_,Z,N),[_,Z,N]),R=n_(()=>{if(!z||!V)return"";return _$(V)},[z,V]);return f(()=>{let E=(F)=>{if(F.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),f(()=>{if(!C.current||!R)return;x$(C.current);return},[R]),f(()=>{let E=!1;async function F(){if(N!=="text"){q(!1),U(null);return}q(!0),U(null);try{let S=await i4(_);if(!E)B(S)}catch{if(!E)U("Failed to load text preview.")}finally{if(!E)q(!1)}}return F(),()=>{E=!0}},[_,N]),L`
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
                            href=${Y$(_)}
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
                    ${W&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!W&&Y&&L`<div class="attachment-preview-state">${Y}</div>`}
                    ${!W&&!Y&&N==="image"&&L`
                        <img class="attachment-preview-image" src=${Y$(_)} alt=${Z} />
                    `}
                    ${!W&&!Y&&(N==="pdf"||N==="office"||N==="drawio")&&v&&L`
                        <iframe class="attachment-preview-frame" src=${v} title=${Z}></iframe>
                    `}
                    ${!W&&!Y&&N==="drawio"&&L`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!W&&!Y&&N==="text"&&z&&L`
                        <div
                            ref=${C}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:R}}
                        />
                    `}
                    ${!W&&!Y&&N==="text"&&!z&&L`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!W&&!Y&&N==="unsupported"&&L`
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
    `}function A6({src:_,onClose:$}){return f(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function o7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(f(()=>{V2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?X$(K):"",q=I2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${Y$(_)} download=${N} class="file-attachment-main">
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
                onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${q}
            </button>
        </div>
    `}function r7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);f(()=>{if(!Number.isFinite(j))return;V2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?Y$(j):null,q=I2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${K}>
            ${z?L`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
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
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Y4({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?$2(Z):null;return L`
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
    `}function a7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?X$(_.size):"",N=_.mime_type||"",K=e7(N),z=_2(_.uri);return L`
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
                ${j&&L`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&L`<span>${N}</span>`}
                    ${Z&&L`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function t7({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&L`
                ${N&&L`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&L`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(W)=>{W.preventDefault(),W.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(Y)=>Y.charCodeAt(0))],{type:z||"application/octet-stream"}),V=URL.createObjectURL(q),B=document.createElement("a");B.href=V,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function e7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function _5({preview:_}){let $=_2(_.url),j=_2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return L`
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
    `}function $5(_,$){return typeof _==="string"?_:""}var j5=1800,Z5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,N5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,K5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function z5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function Y5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let W=z||"idle";if(K.dataset.copyState=W,W==="success")K.innerHTML=N5,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(W==="error")K.innerHTML=K5,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=Z5,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let W=document.createElement("button");W.type="button",W.className="post-code-copy-btn",N(W,"idle"),z.appendChild(W);let q=async(V)=>{V.preventDefault(),V.stopPropagation();let Y=K.querySelector("code")?.textContent||"",U=await z5(Y);N(W,U?"success":"error");let C=j.get(W);if(C)clearTimeout(C);let m=setTimeout(()=>{N(W,"idle"),j.delete(W)},j5);j.set(W,m)};W.addEventListener("click",q),Z.push(()=>{W.removeEventListener("click",q);let V=j.get(W);if(V)clearTimeout(V);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function G5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),W=j.slice(K),q=[...z,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:N}}function W5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let Y=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Y)N.push(Y[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),W=j.slice(K),q=[...z,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:N}}function X5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Images:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let B=V.replace(/^\s*-\s+/,"").trim(),Y=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(Y){let U=Y[1],C=(Y[2]||"").trim()||U;N.push({id:U,label:C,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),W=j.slice(K),q=[...z,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function V5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function q5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(V5).sort((B,Y)=>Y.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),W=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),q=[],V;while(V=W.nextNode())q.push(V);for(let B of q){let Y=B.nodeValue;if(!Y||!N.test(Y)){N.lastIndex=0;continue}N.lastIndex=0;let U=B.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let C=Y.split(N).filter((v)=>v!=="");if(C.length===0)continue;let m=z.createDocumentFragment();for(let v of C)if(K.test(v)){let R=z.createElement("mark");R.className="search-highlight-term",R.textContent=v,m.appendChild(R)}else m.appendChild(z.createTextNode(v));B.parentNode.replaceChild(m,B)}return z.body.innerHTML}function w6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:W,userAvatarUrl:q,userAvatarBackground:V,onDelete:B,isThreadReply:Y,isThreadPrev:U,isThreadNext:C,isRemoving:m,highlightQuery:v,onFileRef:R}){let[E,F]=T(null),S=D(null),M=_.data,i=M.type==="agent_response",t=W||"You",Z_=i?K||K6:t,l=i?z1(K,z,!0):z1(t,q),N_=typeof V==="string"?V.trim().toLowerCase():"",h=!i&&l.image&&(N_==="clear"||N_==="transparent"),B_=i&&Boolean(l.image),h_=`background-color: ${h||B_?"transparent":l.color}`,o=M.content_meta,d=Boolean(o?.truncated),K_=Boolean(o?.preview),$_=d&&!K_,z_=d?{originalLength:Number.isFinite(o?.original_length)?o.original_length:M.content?M.content.length:0,maxLength:Number.isFinite(o?.max_length)?o.max_length:0}:null,P_=M.content_blocks||[],Q_=M.media_ids||[],M_=$5(M.content,M.link_previews),{content:U_,fileRefs:R_}=G5(M_),{content:v_,messageRefs:W_}=W5(U_),{content:I_,attachments:S_}=X5(v_);M_=I_;let V0=X1(P_),X_=V1(P_),__=V0.length===1&&typeof V0[0]?.fallback_text==="string"?V0[0].fallback_text.trim():"",C_=X_.length===1?E6(X_[0]).trim():"",Y_=Boolean(__)&&M_?.trim()===__||Boolean(C_)&&M_?.trim()===C_,D_=Boolean(M_)&&!$_&&!Y_,y_=typeof v==="string"?v.trim():"",d_=n_(()=>{if(!M_||Y_)return"";let I=_$(M_,j);return y_?q5(I,y_):I},[M_,Y_,y_]),s_=(I,e)=>{I.stopPropagation(),F(Y$(e))},[o_,H_]=T(null),x_=(I)=>{H_(I)},T_=(I)=>{I.stopPropagation(),B?.(_)},Z0=(I,e)=>{let k_=new Set;if(!I||e.length===0)return{content:I,usedIds:k_};return{content:I.replace(/attachment:([^\s)"']+)/g,(z0,m0,P0,O0)=>{let E0=m0.replace(/^\/+/,""),V$=e.find((M0)=>M0.name&&M0.name.toLowerCase()===E0.toLowerCase()&&!k_.has(M0.id))||e.find((M0)=>!k_.has(M0.id));if(!V$)return z0;if(k_.add(V$.id),O0.slice(Math.max(0,P0-2),P0)==="](")return`/media/${V$.id}`;return V$.name||"attachment"}),usedIds:k_}},b_=[],J0=[],r_=[],N0=[],d0=[],Q0=[],f_=0;if(P_.length>0)P_.forEach((I)=>{if(I?.type==="text"&&I.annotations)Q0.push(I.annotations);if(I?.type==="resource_link")N0.push(I);else if(I?.type==="resource")d0.push(I);else if(I?.type==="file"){let e=Q_[f_++];if(e)J0.push(e),r_.push({id:e,name:I?.name||I?.filename||I?.title})}else if(I?.type==="image"||!I?.type){let e=Q_[f_++];if(e){let k_=typeof I?.mime_type==="string"?I.mime_type:void 0;b_.push({id:e,annotations:I?.annotations,mimeType:k_}),r_.push({id:e,name:I?.name||I?.filename||I?.title})}}});else if(Q_.length>0)Q_.forEach((I)=>{b_.push({id:I,annotations:null}),r_.push({id:I,name:null})});if(S_.length>0)S_.forEach((I)=>{if(!I?.id)return;let e=r_.find((k_)=>String(k_.id)===String(I.id));if(e&&!e.name)e.name=I.label});let{content:q0,usedIds:a_}=Z0(M_,r_);M_=q0;let K0=b_.filter(({id:I})=>!a_.has(I)),H0=J0.filter((I)=>!a_.has(I)),i_=S_.length>0?S_.map((I,e)=>({id:I.id||`attachment-${e+1}`,label:I.label||`attachment-${e+1}`})):r_.map((I,e)=>({id:I.id,label:I.name||`attachment-${e+1}`})),D0=n_(()=>X1(P_),[P_]),w0=n_(()=>V1(P_),[P_]);f(()=>{if(!S.current)return;return x$(S.current),Y5(S.current)},[d_]);let L_=D(null);return f(()=>{if(!L_.current||D0.length===0)return;let I=L_.current;I.innerHTML="";for(let e of D0){let k_=document.createElement("div");I.appendChild(k_),H6(k_,e,{onAction:async(A_)=>{if(A_.type==="Action.OpenUrl"){let z0=_2(A_.url||"");if(!z0)throw Error("Invalid URL");window.open(z0,"_blank","noopener,noreferrer");return}if(A_.type==="Action.Submit"){await m4({post_id:_.id,thread_id:M.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:A_.type,title:A_.title||"",data:A_.data}});return}console.warn("[post] unsupported adaptive card action:",A_.type,A_)}}).catch((A_)=>{console.error("[post] adaptive card render error:",A_),k_.textContent=e.fallback_text||"Card failed to render."})}},[D0,M.thread_id,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${i?"agent-post":""} ${Y?"thread-reply":""} ${U?"thread-prev":""} ${C?"thread-next":""} ${m?"removing":""}" onClick=${$}>
            <div class="post-avatar ${i?"agent-avatar":""} ${l.image?"has-image":""}" style=${h_}>
                ${l.image?L`<img src=${l.image} alt=${Z_} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${T_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${Z_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(I)=>{if(I.preventDefault(),I.stopPropagation(),Z)Z(_.id)}}>${O6(_.timestamp)}</a>
                </div>
                ${$_&&z_&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${M2(z_.originalLength)} chars
                            ${z_.maxLength?L` • Display limit: ${M2(z_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&z_&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${M2(z_.maxLength)} of ${M2(z_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(R_.length>0||W_.length>0||i_.length>0)&&L`
                    <div class="post-file-refs">
                        ${W_.map((I)=>{let e=(k_)=>{if(k_.preventDefault(),k_.stopPropagation(),N)N(I,_.chat_jid||null);else{let A_=document.getElementById("post-"+I);if(A_)A_.scrollIntoView({behavior:"smooth",block:"center"}),A_.classList.add("post-highlight"),setTimeout(()=>A_.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${I}`} class="post-msg-pill-link" onClick=${e}>
                                    <${U$}
                                        prefix="post"
                                        label=${"msg:"+I}
                                        title=${"Message "+I}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${R_.map((I)=>{let e=I.split("/").pop()||I;return L`
                                <${U$}
                                    prefix="post"
                                    label=${e}
                                    title=${I}
                                    onClick=${()=>R?.(I)}
                                />
                            `})}
                        ${i_.map((I)=>L`
                            <${r7}
                                key=${I.id}
                                attachment=${I}
                                onPreview=${x_}
                            />
                        `)}
                    </div>
                `}
                ${D_&&L`
                    <div 
                        ref=${S}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:d_}}
                        onClick=${(I)=>{if(I.target.classList.contains("hashtag")){I.preventDefault(),I.stopPropagation();let e=I.target.dataset.hashtag;if(e)j?.(e)}else if(I.target.tagName==="IMG")I.preventDefault(),I.stopPropagation(),F(I.target.src)}}
                    />
                `}
                ${D0.length>0&&L`
                    <div ref=${L_} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((I,e)=>{let k_=y6(I);return L`
                                <div key=${`${I.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${k_.title}</span>
                                        </div>
                                    </div>
                                    ${k_.summary&&L`
                                        <div class="adaptive-card-submission-summary">${k_.summary}</div>
                                    `}
                                    ${k_.fields.length>0&&L`
                                        <div class="adaptive-card-submission-fields">
                                            ${k_.fields.map((A_)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${A_.key}: ${A_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${A_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${A_.value}</span>
                                                </span>
                                            `)}
                                            ${k_.hiddenFieldCount>0&&L`
                                                <span class="adaptive-card-submission-field adaptive-card-submission-field-more">+${k_.hiddenFieldCount} more</span>
                                            `}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${$2(k_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${Q0.length>0&&L`
                    ${Q0.map((I,e)=>L`
                        <${Y4} key=${e} annotations=${I} />
                    `)}
                `}
                ${K0.length>0&&L`
                    <div class="media-preview">
                        ${K0.map(({id:I,mimeType:e})=>{let A_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?Y$(I):h4(I);return L`
                                <img 
                                    key=${I} 
                                    src=${A_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(z0)=>s_(z0,I)}
                                />
                            `})}
                    </div>
                `}
                ${K0.length>0&&L`
                    ${K0.map(({annotations:I},e)=>L`
                        ${I&&L`<${Y4} key=${e} annotations=${I} />`}
                    `)}
                `}
                ${H0.length>0&&L`
                    <div class="file-attachments">
                        ${H0.map((I)=>L`
                            <${o7} key=${I} mediaId=${I} onPreview=${x_} />
                        `)}
                    </div>
                `}
                ${N0.length>0&&L`
                    <div class="resource-links">
                        ${N0.map((I,e)=>L`
                            <div key=${e}>
                                <${a7} block=${I} />
                                <${Y4} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${d0.length>0&&L`
                    <div class="resource-embeds">
                        ${d0.map((I,e)=>L`
                            <div key=${e}>
                                <${t7} block=${I} />
                                <${Y4} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${M.link_previews.map((I,e)=>L`
                            <${_5} key=${e} preview=${I} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&L`<${A6} src=${E} onClose=${()=>F(null)} />`}
        ${o_&&L`
            <${k6}
                mediaId=${o_.mediaId}
                info=${o_.info}
                onClose=${()=>H_(null)}
            />
        `}
    `}function P6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:W,emptyMessage:q,timelineRef:V,agents:B,user:Y,onDeletePost:U,reverse:C=!0,removingPostIds:m,searchQuery:v}){let[R,E]=T(!1),F=D(null),S=typeof IntersectionObserver<"u",M=y(async()=>{if(!j||!$||R)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,R,j]),i=y((o)=>{let{scrollTop:d,scrollHeight:K_,clientHeight:$_}=o.target,z_=C?K_-$_-d:d,P_=Math.max(300,$_);if(z_<P_)M()},[C,M]);f(()=>{if(!S)return;let o=F.current,d=V?.current;if(!o||!d)return;let K_=300,$_=new IntersectionObserver((z_)=>{for(let P_ of z_){if(!P_.isIntersecting)continue;M()}},{root:d,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return $_.observe(o),()=>$_.disconnect()},[S,$,j,V,M]);let t=D(M);if(t.current=M,f(()=>{if(S)return;if(!V?.current)return;let{scrollTop:o,scrollHeight:d,clientHeight:K_}=V.current,$_=C?d-K_-o:o,z_=Math.max(300,K_);if($_<z_)t.current?.()},[S,_,$,C,V]),f(()=>{if(!V?.current)return;if(!$||R)return;let{scrollTop:o,scrollHeight:d,clientHeight:K_}=V.current,$_=C?d-K_-o:o,z_=Math.max(300,K_);if(d<=K_+1||$_<z_)t.current?.()},[_,$,R,C,V]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let Z_=_.slice().sort((o,d)=>o.id-d.id),l=(o)=>{let d=o?.data?.thread_id;if(d===null||d===void 0||d==="")return null;let K_=Number(d);return Number.isFinite(K_)?K_:null},N_=new Map;for(let o=0;o<Z_.length;o+=1){let d=Z_[o],K_=Number(d?.id),$_=l(d);if($_!==null){let z_=N_.get($_)||{anchorIndex:-1,replyIndexes:[]};z_.replyIndexes.push(o),N_.set($_,z_)}else if(Number.isFinite(K_)){let z_=N_.get(K_)||{anchorIndex:-1,replyIndexes:[]};z_.anchorIndex=o,N_.set(K_,z_)}}let h=new Map;for(let[o,d]of N_.entries()){let K_=new Set;if(d.anchorIndex>=0)K_.add(d.anchorIndex);for(let $_ of d.replyIndexes)K_.add($_);h.set(o,Array.from(K_).sort(($_,z_)=>$_-z_))}let B_=Z_.map((o,d)=>{let K_=l(o);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=h.get(K_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let z_=$_.indexOf(d);if(z_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:z_>0,hasThreadNext:z_<$_.length-1}}),h_=L`<div class="timeline-sentinel" ref=${F}></div>`;return L`
        <div class="timeline ${C?"reverse":"normal"}" ref=${V} onScroll=${i}>
            <div class="timeline-content">
                ${C?h_:null}
                ${Z_.map((o,d)=>{let K_=Boolean(o.data?.thread_id&&o.data.thread_id!==o.id),$_=m?.has?.(o.id),z_=B_[d]||{};return L`
                    <${w6}
                        key=${o.id}
                        post=${o}
                        isThreadReply=${K_}
                        isThreadPrev=${z_.hasThreadPrev}
                        isThreadNext=${z_.hasThreadNext}
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
                        onFileRef=${W}
                        onDelete=${U}
                    />
                `})}
                ${C?null:h_}
            </div>
        </div>
    `}class M6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var _0=new M6;var G4=null,q1=null;function C6(){if(q1)return Promise.resolve(q1);if(!G4)G4=import("/static/dist/editor.bundle.js").then((_)=>{return q1=_,_}).catch((_)=>{throw G4=null,_});return G4}class I6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await C6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var O1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new I6(_,$)}};function B1(){C6().catch(()=>{})}var Q1="piclaw://terminal";var O5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},B5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},W4=null,L1=null;function L5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Q5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!L5(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function U5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!W4)W4=Q5(()=>Promise.resolve($.init?.())).catch((j)=>{throw W4=null,j});return await W4,$}async function F5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!L1)L1=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await L1}async function J5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function H5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function D5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function T$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function E5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function b6(){let _=D5(),$=_?B5:O5,j=T$("--bg-primary",_?"#000000":"#ffffff"),Z=T$("--text-primary",_?"#e7e9ea":"#0f1419"),N=T$("--text-secondary",_?"#71767b":"#536471"),K=T$("--accent-color","#1d9bf0"),z=T$("--danger-color",_?"#ff7b72":"#cf222e"),W=T$("--success-color",_?"#7ee787":"#1a7f37"),q=T$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=T$("--border-color",_?"#2f3336":"#eff3f4"),B=T$("--accent-soft-strong",E5(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:q,red:z,green:W,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class U1{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await U5();if(await F5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:b6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=b6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await J5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(H5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var F1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new U1(_,$)}},J1={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new U1(_,$)}};function i$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function y5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",W=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${W?`${W}/`:""}${N}`,B=[];for(let U of V.split("/")){if(!U||U===".")continue;if(U===".."){if(B.length>0)B.pop();continue}B.push(U)}let Y=B.join("/");return`${a2(Y)}${K}${z}`}function S2(_){return _?.preview||null}function k5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function A5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function w5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${i$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${i$(X$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${i$($2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${i$(A5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${i$(k5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${i$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function P5(_){let $=S2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=w5(_,$);if($.kind==="image"){let Z=$.url||($.path?a2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${i$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=_$($.text||"",null,{rewriteImageSrc:(N)=>y5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${i$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class H1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=P5(this.context)}getContent(){let _=S2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=S2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var D1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=S2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new H1(_,$)}},E1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return S2(_)||_?.path?1:!1},mount(_,$){return new H1(_,$)}};var M5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),C5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},I5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function x6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function S6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class T6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=x6(j),K=I5[N]||"\uD83D\uDCC4",z=C5[N]||"Office Document",W=document.createElement("div");W.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",W.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${S6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${S6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(W);let q=W.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=x6(_?.path);if(!$||!M5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new T6(_,$);return new f6(_,$)}};var b5=/\.(csv|tsv)$/i;class R6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k1={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!b5.test($))return!1;return 55},mount(_,$){return new R6(_,$)}};var S5=/\.pdf$/i;function x5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
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
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A1={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!S5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new v6(_,$);return new u6(_,$)}};var T5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function w1(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${w1(N)}" alt="${w1(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${w1(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let W=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(W)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P1={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!T5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new m6(_,$);return new g6(_,$)}};function f5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function R5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var M1='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function p6(_){let $=String(_||"").trim();return $?$:M1}function v5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function u5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function m5(_,$="*"){try{let j=(K)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(z,W,q,V,B,Y){try{if(z&&q!=null&&j({filename:z,format:W,data:q,mimeType:V,base64Encoded:Boolean(B),defaultMode:Y}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(z,W,q,V,B,Y){try{if(W&&j({filename:W,data:z,mimeType:q,base64Encoded:Boolean(V),mode:B,folderId:Y}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function c6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${u5(j)}`}class h6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=v5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(m5(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=M1,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await c6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await c6(_,"image/png");else this.xmlData=p6(await _.text());else if(_.status===404)this.xmlData=M1;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?p6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var C1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!f5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new h6(_,$);return new i6(_,$)}};class l6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var c_=new l6;var X4="workspaceExplorerScale",g5=["compact","default","comfortable"],p5=new Set(g5),c5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function n6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return p5.has(j)?j:$}function I1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function h5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function i5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function b1(_={}){let $=h5(_),j=_.stored?n6(_.stored,$):$;return i5(j,_)}function d6(_){return c5[n6(_)]}var l5=60000,a6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function t6(_,$,j,Z=0,N=[]){if(!j&&a6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)t6(K,$,j,Z+1,N);return N}function s6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&a6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function f1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((W)=>[W?.path,W])):new Map,K=!j||j.length!==Z.length,z=Z.map((W)=>{let q=f1(N.get(W.path),W);if(q!==N.get(W.path))K=!0;return q});return K?{...$,children:z}:_}function x1(_,$,j){if(!_)return _;if(_.path===$)return f1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=x1(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var e6=4,S1=14,n5=8,d5=16;function _8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=_8(Z);return _.__bytes=j,j}function $8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=e6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let W of N){let q=Math.max(0,Number(W?.__bytes??W?.size??0));if(q<=0)continue;if(W.type==="dir")K.push({kind:"dir",node:W,size:q});else K.push({kind:"file",name:W.name,path:W.path,size:q})}K.sort((W,q)=>q.size-W.size);let z=K;if(K.length>S1){let W=K.slice(0,S1-1),q=K.slice(S1-1),V=q.reduce((B,Y)=>B+Y.size,0);W.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:V}),z=W}return Z.children=z.map((W)=>{if(W.kind==="dir")return $8(W.node,$+1);return{name:W.name,path:W.path,size:W.size,children:[]}}),Z}function o6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function j8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function V4(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function R1(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,W=K-N>z?N+z:K,q=V4(_,$,Z,N),V=V4(_,$,Z,W),B=V4(_,$,j,W),Y=V4(_,$,j,N),U=W-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${Y.x.toFixed(3)} ${Y.y.toFixed(3)}`,"Z"].join(" ")}var Z8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function N8(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(W,q,V,B)=>{let Y=Array.isArray(W?.children)?W.children:[];if(!Y.length)return;let U=Math.max(0,Number(W.size)||0);if(U<=0)return;let C=V-q,m=q;Y.forEach((v,R)=>{let E=Math.max(0,Number(v.size)||0);if(E<=0)return;let F=E/U,S=m,M=R===Y.length-1?V:m+C*F;if(m=M,M-S<0.003)return;let i=Z8[B];if(i){let t=j8(S,B,j);if(Z.push({key:v.path,path:v.path,label:v.name,size:E,color:t,depth:B,startAngle:S,endAngle:M,innerRadius:i[0],outerRadius:i[1],d:R1(120,120,i[0],i[1],S,M)}),B===1)N.push({key:v.path,name:v.name,size:E,pct:K>0?E/K*100:0,color:t})}if(B<e6)z(v,S,M,B+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function T1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=T1(Z,$);if(N)return N}return null}function K8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=Z8[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,W=j8(K,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:W,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:R1(120,120,N[0],N[1],K,z)}],legend:[{key:V,name:_,size:j,pct:100,color:W}]}}function r6(_,$=!1,j=!1){if(!_)return null;let Z=_8(_),N=$8(_,0),K=N.size||Z,{segments:z,legend:W}=N8(N,K,j);if(!z.length&&K>0){let q=K8("[files]",N.path,K,j);z=q.segments,W=q.legend}return{root:N,totalSize:K,segments:z,legend:W,truncated:$,isDarkTheme:j}}function s5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[K,z]=T(()=>[_?.root?.path||"."]),[W,q]=T(!1);f(()=>{let h=_?.root?.path||".";N(h),z([h]),j(null)},[_?.root?.path,_?.totalSize]),f(()=>{if(!Z)return;q(!0);let h=setTimeout(()=>q(!1),180);return()=>clearTimeout(h)},[Z]);let V=n_(()=>{return T1(_.root,Z)||_.root},[_?.root,Z]),B=V?.size||_.totalSize||0,{segments:Y,legend:U}=n_(()=>{let h=N8(V,B,_.isDarkTheme);if(h.segments.length>0)return h;if(B<=0)return h;let B_=V?.children?.length?"Total":"[files]";return K8(B_,V?.path||_?.root?.path||".",B,_.isDarkTheme)},[V,B,_.isDarkTheme,_?.root?.path]),[C,m]=T(Y),v=D(new Map),R=D(0);f(()=>{let h=v.current,B_=new Map(Y.map((K_)=>[K_.key,K_])),h_=performance.now(),o=220,d=(K_)=>{let $_=Math.min(1,(K_-h_)/220),z_=$_*(2-$_),P_=Y.map((Q_)=>{let U_=h.get(Q_.key)||{startAngle:Q_.startAngle,endAngle:Q_.startAngle,innerRadius:Q_.innerRadius,outerRadius:Q_.innerRadius},R_=(V0,X_)=>V0+(X_-V0)*z_,v_=R_(U_.startAngle,Q_.startAngle),W_=R_(U_.endAngle,Q_.endAngle),I_=R_(U_.innerRadius,Q_.innerRadius),S_=R_(U_.outerRadius,Q_.outerRadius);return{...Q_,d:R1(120,120,I_,S_,v_,W_)}});if(m(P_),$_<1)R.current=requestAnimationFrame(d)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(d),v.current=B_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[Y]);let E=C.length?C:Y,F=B>0?X$(B):"0 B",S=V?.name||"",i=(S&&S!=="."?S:"Total")||"Total",t=F,Z_=K.length>1,l=(h)=>{if(!h?.path)return;let B_=T1(_.root,h.path);if(!B_||!Array.isArray(B_.children)||B_.children.length===0)return;z((h_)=>[...h_,B_.path]),N(B_.path),j(null)},N_=()=>{if(!Z_)return;z((h)=>{let B_=h.slice(0,-1);return N(B_[B_.length-1]||_?.root?.path||"."),B_}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${W?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
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
                        <title>${h.label} — ${X$(h.size)}</title>
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
                            <span class="workspace-folder-starburst-size">${X$(h.size)}</span>
                            <span class="workspace-folder-starburst-pct">${h.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function o5({mediaId:_}){let[$,j]=T(null);if(f(()=>{if(!_)return;V2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?X$($.metadata.size):"";return L`
        <a href=${Y$(_)} download=${Z} class="file-attachment"
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
    `}function z8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:z=!1}){let[W,q]=T(null),[V,B]=T(new Set(["."])),[Y,U]=T(null),[C,m]=T(null),[v,R]=T(""),[E,F]=T(null),[S,M]=T(null),[i,t]=T(!0),[Z_,l]=T(!1),[N_,h]=T(null),[B_,h_]=T(()=>q2("workspaceShowHidden",!1)),[o,d]=T(!1),[K_,$_]=T(null),[z_,P_]=T(null),[Q_,M_]=T(null),[U_,R_]=T(!1),[v_,W_]=T(null),[I_,S_]=T(()=>o6()),[V0,X_]=T(()=>b1({stored:W$(X4),...I1()})),[__,C_]=T(!1),Y_=D(V),D_=D(""),y_=D(null),d_=D(0),s_=D(new Set),o_=D(null),H_=D(new Map),x_=D(_),T_=D(Z),Z0=D(null),b_=D(null),J0=D(null),r_=D(null),N0=D(null),d0=D(null),Q0=D("."),f_=D(null),q0=D({path:null,dragging:!1,startX:0,startY:0}),a_=D({path:null,dragging:!1,startX:0,startY:0}),K0=D({path:null,timer:0}),H0=D(!1),i_=D(0),D0=D(new Map),w0=D(null),L_=D(null),I=D(null),e=D(null),k_=D(null),A_=D(null),z0=D(B_),m0=D($),P0=D(j??$),O0=D(0),E0=D(Q_),$$=D(o),V$=D(K_),q$=D(null),M0=D({x:0,y:0}),g0=D(0),l$=D(null),s0=D(Y),y0=D(C),w$=D(null),O$=D(null),x0=D(E);x_.current=_,T_.current=Z,f(()=>{Y_.current=V},[V]),f(()=>{z0.current=B_},[B_]),f(()=>{m0.current=$},[$]),f(()=>{P0.current=j??$},[j,$]),f(()=>{E0.current=Q_},[Q_]),f(()=>{if(typeof window>"u")return;let O=()=>{X_(b1({stored:W$(X4),...I1()}))};O();let J=()=>O(),A=()=>O(),k=(u)=>{if(!u||u.key===null||u.key===X4)O()};window.addEventListener("resize",J),window.addEventListener("focus",A),window.addEventListener("storage",k);let g=window.matchMedia?.("(pointer: coarse)"),s=window.matchMedia?.("(hover: none)"),r=(u,q_)=>{if(!u)return;if(u.addEventListener)u.addEventListener("change",q_);else if(u.addListener)u.addListener(q_)},a=(u,q_)=>{if(!u)return;if(u.removeEventListener)u.removeEventListener("change",q_);else if(u.removeListener)u.removeListener(q_)};return r(g,J),r(s,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",A),window.removeEventListener("storage",k),a(g,J),a(s,J)}},[]),f(()=>{let O=(J)=>{let A=J?.detail?.path;if(!A)return;let k=A.split("/"),g=[];for(let s=1;s<k.length;s++)g.push(k.slice(0,s).join("/"));if(g.length)B((s)=>{let r=new Set(s);r.add(".");for(let a of g)r.add(a);return r});U(A),requestAnimationFrame(()=>{let s=document.querySelector(`[data-path="${CSS.escape(A)}"]`);if(s)s.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),f(()=>{$$.current=o},[o]),f(()=>{V$.current=K_},[K_]),f(()=>{s0.current=Y},[Y]),f(()=>{y0.current=C},[C]),f(()=>{x0.current=E},[E]),f(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>S_(o6());O();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),A=()=>O();if(J?.addEventListener)J.addEventListener("change",A);else if(J?.addListener)J.addListener(A);let k=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",A);else if(J?.removeListener)J.removeListener(A);k?.disconnect()}},[]),f(()=>{if(!C)return;let O=N0.current;if(!O)return;let J=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(J)},[C]),f(()=>{if(!__)return;let O=(A)=>{let k=A?.target;if(!(k instanceof Element))return;if(k_.current?.contains(k))return;if(A_.current?.contains(k))return;C_(!1)},J=(A)=>{if(A?.key==="Escape")C_(!1),A_.current?.focus?.()};return document.addEventListener("mousedown",O),document.addEventListener("touchstart",O,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("touchstart",O),document.removeEventListener("keydown",J)}},[__]);let Z2=async(O)=>{l(!0),F(null),M(null);try{let J=await l4(O,20000);F(J)}catch(J){F({error:J.message||"Failed to load preview"})}finally{l(!1)}};Z0.current=Z2;let p0=async()=>{if(!m0.current)return;try{let O=await y2("",1,z0.current),J=s6(O.root,Y_.current,z0.current);if(J===D_.current){t(!1);return}if(D_.current=J,y_.current=O.root,!d_.current)d_.current=requestAnimationFrame(()=>{d_.current=0,q((A)=>f1(A,y_.current)),t(!1)})}catch(O){h(O.message||"Failed to load workspace"),t(!1)}},n$=async(O)=>{if(!O)return;if(s_.current.has(O))return;s_.current.add(O);try{let J=await y2(O,1,z0.current);q((A)=>x1(A,O,J.root))}catch(J){h(J.message||"Failed to load workspace")}finally{s_.current.delete(O)}};b_.current=n$;let $0=y(()=>{let O=Y;if(!O)return".";let J=H_.current?.get(O);if(J&&J.type==="dir")return J.path;if(O==="."||!O.includes("/"))return".";let A=O.split("/");return A.pop(),A.join("/")||"."},[Y]),B$=y((O)=>{let J=O?.closest?.(".workspace-row");if(!J)return null;let A=J.dataset.path,k=J.dataset.type;if(!A)return null;if(k==="dir")return A;if(A.includes("/")){let g=A.split("/");return g.pop(),g.join("/")||"."}return"."},[]),o0=y((O)=>{return B$(O?.target||null)},[B$]),C0=y((O)=>{E0.current=O,M_(O)},[]),I0=y(()=>{let O=K0.current;if(O?.timer)clearTimeout(O.timer);K0.current={path:null,timer:0}},[]),T0=y((O)=>{if(!O||O==="."){I0();return}let J=H_.current?.get(O);if(!J||J.type!=="dir"){I0();return}if(Y_.current?.has(O)){I0();return}if(K0.current?.path===O)return;I0();let A=setTimeout(()=>{K0.current={path:null,timer:0},b_.current?.(O),B((k)=>{let g=new Set(k);return g.add(O),g})},600);K0.current={path:O,timer:A}},[I0]),L$=y((O,J)=>{if(M0.current={x:O,y:J},g0.current)return;g0.current=requestAnimationFrame(()=>{g0.current=0;let A=q$.current;if(!A)return;let k=M0.current;A.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),P$=y((O)=>{if(!O)return;let A=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!A)return;P_({path:O,label:A})},[]),f$=y(()=>{if(P_(null),g0.current)cancelAnimationFrame(g0.current),g0.current=0;if(q$.current)q$.current.style.transform="translate(-9999px, -9999px)"},[]),R$=y((O)=>{if(!O)return".";let J=H_.current?.get(O);if(J&&J.type==="dir")return J.path;if(O==="."||!O.includes("/"))return".";let A=O.split("/");return A.pop(),A.join("/")||"."},[]),U0=y(()=>{m(null),R("")},[]),M$=y((O)=>{if(!O)return;let A=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!A||O===".")return;m(O),R(A)},[]),c0=y(async()=>{let O=y0.current;if(!O)return;let J=(v||"").trim();if(!J){U0();return}let A=H_.current?.get(O),k=(A?.name||O.split("/").pop()||O).trim();if(J===k){U0();return}try{let s=(await s4(O,J))?.path||O,r=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(U0(),h(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:s,type:A?.type||"file"}})),A?.type==="dir")B((a)=>{let u=new Set;for(let q_ of a)if(q_===O)u.add(s);else if(q_.startsWith(`${O}/`))u.add(`${s}${q_.slice(O.length)}`);else u.add(q_);return u});if(U(s),A?.type==="dir")F(null),l(!1),M(null);else Z0.current?.(s);b_.current?.(r)}catch(g){h(g?.message||"Failed to rename file")}},[U0,v]),B0=y(async(O)=>{let k=O||".";for(let g=0;g<50;g+=1){let r=`untitled${g===0?"":`-${g}`}.md`;try{let u=(await d4(k,r,""))?.path||(k==="."?r:`${k}/${r}`);if(k&&k!==".")B((q_)=>new Set([...q_,k]));U(u),h(null),b_.current?.(k),Z0.current?.(u);return}catch(a){if(a?.status===409||a?.code==="file_exists")continue;h(a?.message||"Failed to create file");return}}h("Failed to create file (untitled name already in use).")},[]),h0=y((O)=>{if(O?.stopPropagation?.(),U_)return;let J=R$(s0.current);B0(J)},[U_,R$,B0]);f(()=>{if(typeof window>"u")return;let O=(J)=>{let A=J?.detail?.updates||[];if(!Array.isArray(A)||A.length===0)return;q((a)=>{let u=a;for(let q_ of A){if(!q_?.root)continue;if(!u||q_.path==="."||!q_.path)u=q_.root;else u=x1(u,q_.path,q_.root)}if(u)D_.current=s6(u,Y_.current,z0.current);return t(!1),u});let k=s0.current;if(Boolean(k)&&A.some((a)=>{let u=a?.path||"";if(!u||u===".")return!0;return k===u||k.startsWith(`${u}/`)||u.startsWith(`${k}/`)}))D0.current.clear();if(!k||!x0.current)return;let s=H_.current?.get(k);if(s&&s.type==="dir")return;if(A.some((a)=>{let u=a?.path||"";if(!u||u===".")return!0;return k===u||k.startsWith(`${u}/`)}))Z0.current?.(k)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),o_.current=p0;let N2=D(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=P0.current??m0.current,A=document.visibilityState!=="hidden"&&(J||O.matches&&m0.current);k2(A,z0.current).catch(()=>{})}).current,f0=D(0),K2=D(()=>{if(f0.current)clearTimeout(f0.current);f0.current=setTimeout(()=>{f0.current=0,N2()},250)}).current;f(()=>{if(m0.current)o_.current?.();K2()},[$,j]),f(()=>{o_.current(),N2();let O=setInterval(()=>o_.current(),l5),J=O2("previewHeight",null),A=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(i_.current=A,J0.current)J0.current.style.setProperty("--preview-height",`${A}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),g=()=>K2();if(k.addEventListener)k.addEventListener("change",g);else if(k.addListener)k.addListener(g);return document.addEventListener("visibilitychange",g),()=>{if(clearInterval(O),d_.current)cancelAnimationFrame(d_.current),d_.current=0;if(k.removeEventListener)k.removeEventListener("change",g);else if(k.removeListener)k.removeListener(g);if(document.removeEventListener("visibilitychange",g),f0.current)clearTimeout(f0.current),f0.current=0;if(f_.current)clearTimeout(f_.current),f_.current=null;k2(!1,z0.current).catch(()=>{})}},[]);let J$=n_(()=>t6(W,V,B_),[W,V,B_]),v$=n_(()=>new Map(J$.map((O)=>[O.node.path,O.node])),[J$]),u$=n_(()=>d6(V0),[V0]);H_.current=v$;let p_=(Y?H_.current.get(Y):null)?.type==="dir";f(()=>{if(!Y||!p_){W_(null),w0.current=null,L_.current=null;return}let O=Y,J=`${B_?"hidden":"visible"}:${Y}`,A=D0.current,k=A.get(J);if(k?.root){A.delete(J),A.set(J,k);let r=r6(k.root,Boolean(k.truncated),I_);if(r)w0.current=r,L_.current=Y,W_({loading:!1,error:null,payload:r});return}let g=w0.current,s=L_.current;W_({loading:!0,error:null,payload:s===Y?g:null}),y2(Y,n5,B_).then((r)=>{if(s0.current!==O)return;let a={root:r?.root,truncated:Boolean(r?.truncated)};A.delete(J),A.set(J,a);while(A.size>d5){let q_=A.keys().next().value;if(!q_)break;A.delete(q_)}let u=r6(a.root,a.truncated,I_);w0.current=u,L_.current=Y,W_({loading:!1,error:null,payload:u})}).catch((r)=>{if(s0.current!==O)return;W_({loading:!1,error:r?.message||"Failed to load folder size chart",payload:s===Y?g:null})})},[Y,p_,B_,I_]);let b0=Boolean(E&&E.kind==="text"&&!p_&&(!E.size||E.size<=262144)),R0=b0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",d$=Boolean(Y&&Y!=="."),s$=Boolean(Y&&!p_),o$=Boolean(Y&&!p_),H$=Y&&p_?t2(Y,B_):null,k0=y(()=>C_(!1),[]),Y0=y(async(O)=>{k0();try{await O?.()}catch{}},[k0]);f(()=>{let O=I.current;if(e.current)e.current.dispose(),e.current=null;if(!O)return;if(O.innerHTML="",!Y||p_||!E||E.error)return;let J={path:Y,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},A=_0.resolve(J)||_0.get("workspace-preview-default");if(!A)return;let k=A.mount(O,J);return e.current=k,()=>{if(e.current===k)k.dispose(),e.current=null;O.innerHTML=""}},[Y,p_,E]);let L0=(O)=>{let J=O?.target;if(J instanceof Element)return J;return J?.parentElement||null},r0=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},I$=D((O)=>{if(O$.current)clearTimeout(O$.current),O$.current=null;let A=L0(O)?.closest?.("[data-path]");if(!A)return;let k=A.dataset.path;if(A.dataset.type==="dir"||!k)return;if(y0.current===k)U0();T_.current?.(k)}).current,r$=D((O)=>{if(H0.current){H0.current=!1;return}let J=L0(O),A=J?.closest?.("[data-path]");if(r_.current?.focus?.(),!A)return;let k=A.dataset.path,g=A.dataset.type,s=Boolean(J?.closest?.(".workspace-caret")),r=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),a=s0.current===k,u=y0.current;if(u){if(u===k)return;U0()}let q_=g==="file"&&w$.current===k&&!s&&!r;if(a&&!s&&!r&&k!=="."&&!q_){if(O$.current)clearTimeout(O$.current);O$.current=setTimeout(()=>{O$.current=null,M$(k)},350);return}if(g==="dir"){if(w$.current=null,U(k),F(null),M(null),l(!1),!Y_.current.has(k))b_.current?.(k);if(a&&!s)return;B((A$)=>{let G0=new Set(A$);if(G0.has(k))G0.delete(k);else G0.add(k);return G0})}else{w$.current=null,U(k);let F0=H_.current.get(k);if(F0)x_.current?.(F0.path,F0);Z0.current?.(k)}}).current,D$=D(()=>{D_.current="",o_.current(),Array.from(Y_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>b_.current?.(J))}).current,j$=D(()=>{w$.current=null,U(null),F(null),M(null),l(!1)}).current,m$=D(()=>{h_((O)=>{let J=!O;if(typeof window<"u")j0("workspaceShowHidden",String(J));return z0.current=J,k2(!0,J).catch(()=>{}),D_.current="",o_.current?.(),Array.from(Y_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>b_.current?.(k)),J})}).current,Z$=D((O)=>{if(L0(O)?.closest?.("[data-path]"))return;j$()}).current,A0=y(async(O)=>{if(!O)return;let J=O.split("/").pop()||O;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await r4(O);let k=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(s0.current===O)j$();b_.current?.(k),h(null)}catch(k){F((g)=>({...g||{},error:k.message||"Failed to delete file"}))}},[j$]),E$=y((O)=>{let J=r_.current;if(!J||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),a$=y((O)=>{let J=J$;if(!J||J.length===0)return;let A=Y?J.findIndex((k)=>k.node.path===Y):-1;if(O.key==="ArrowDown"){O.preventDefault();let k=Math.min(A+1,J.length-1),g=J[k];if(!g)return;if(U(g.node.path),g.node.type!=="dir")x_.current?.(g.node.path,g.node),Z0.current?.(g.node.path);else F(null),l(!1),M(null);E$(g.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let k=A<=0?0:A-1,g=J[k];if(!g)return;if(U(g.node.path),g.node.type!=="dir")x_.current?.(g.node.path,g.node),Z0.current?.(g.node.path);else F(null),l(!1),M(null);E$(g.node.path);return}if(O.key==="ArrowRight"&&A>=0){let k=J[A];if(k?.node?.type==="dir"&&!V.has(k.node.path))O.preventDefault(),b_.current?.(k.node.path),B((g)=>new Set([...g,k.node.path]));return}if(O.key==="ArrowLeft"&&A>=0){let k=J[A];if(k?.node?.type==="dir"&&V.has(k.node.path))O.preventDefault(),B((g)=>{let s=new Set(g);return s.delete(k.node.path),s});return}if(O.key==="Enter"&&A>=0){O.preventDefault();let k=J[A];if(!k)return;let g=k.node.path;if(k.node.type==="dir"){if(!Y_.current.has(g))b_.current?.(g);B((r)=>{let a=new Set(r);if(a.has(g))a.delete(g);else a.add(g);return a}),F(null),M(null),l(!1)}else x_.current?.(g,k.node),Z0.current?.(g);return}if((O.key==="Delete"||O.key==="Backspace")&&A>=0){let k=J[A];if(!k||k.node.type==="dir")return;O.preventDefault(),A0(k.node.path);return}if(O.key==="Escape")O.preventDefault(),j$()},[j$,A0,V,J$,E$,Y]),g$=y((O)=>{let J=L0(O),A=J?.closest?.(".workspace-row");if(!A)return;let k=A.dataset.type,g=A.dataset.path;if(!g||g===".")return;if(y0.current===g)return;let s=O?.touches?.[0];if(!s)return;if(q0.current={path:r0(J)?g:null,dragging:!1,startX:s.clientX,startY:s.clientY},k!=="file")return;if(f_.current)clearTimeout(f_.current);f_.current=setTimeout(()=>{if(f_.current=null,q0.current?.dragging)return;A0(g)},600)},[A0]),Q=y(()=>{if(f_.current)clearTimeout(f_.current),f_.current=null;let O=q0.current;if(O?.dragging&&O.path){let J=E0.current||$0(),A=l$.current;if(typeof A==="function")A(O.path,J)}q0.current={path:null,dragging:!1,startX:0,startY:0},O0.current=0,d(!1),$_(null),C0(null),I0(),f$()},[$0,f$,C0,I0]),b=y((O)=>{let J=q0.current,A=O?.touches?.[0];if(!A||!J?.path){if(f_.current)clearTimeout(f_.current),f_.current=null;return}let k=Math.abs(A.clientX-J.startX),g=Math.abs(A.clientY-J.startY),s=k>8||g>8;if(s&&f_.current)clearTimeout(f_.current),f_.current=null;if(!J.dragging&&s)J.dragging=!0,d(!0),$_("move"),P$(J.path);if(J.dragging){O.preventDefault(),L$(A.clientX,A.clientY);let r=document.elementFromPoint(A.clientX,A.clientY),a=B$(r)||$0();if(E0.current!==a)C0(a);T0(a)}},[B$,$0,P$,L$,C0,T0]),x=D((O)=>{O.preventDefault();let J=J0.current;if(!J)return;let A=O.clientY,k=i_.current||280,g=O.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let s=A,r=(u)=>{s=u.clientY;let q_=J.clientHeight-80,F0=Math.min(Math.max(k-(u.clientY-A),80),q_);J.style.setProperty("--preview-height",`${F0}px`),i_.current=F0},a=()=>{let u=J.clientHeight-80,q_=Math.min(Math.max(k-(s-A),80),u);i_.current=q_,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",j0("previewHeight",String(Math.round(q_))),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}).current,n=D((O)=>{O.preventDefault();let J=J0.current;if(!J)return;let A=O.touches[0];if(!A)return;let k=A.clientY,g=i_.current||280,s=O.currentTarget;s.classList.add("dragging"),document.body.style.userSelect="none";let r=(u)=>{let q_=u.touches[0];if(!q_)return;u.preventDefault();let F0=J.clientHeight-80,A$=Math.min(Math.max(g-(q_.clientY-k),80),F0);J.style.setProperty("--preview-height",`${A$}px`),i_.current=A$},a=()=>{s.classList.remove("dragging"),document.body.style.userSelect="",j0("previewHeight",String(Math.round(i_.current||g))),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",a),document.removeEventListener("touchcancel",a)};document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",a),document.addEventListener("touchcancel",a)}).current,V_=async()=>{if(!Y)return;try{let O=await n4(Y);if(O.media_id)M(O.media_id)}catch(O){F((J)=>({...J||{},error:O.message||"Failed to attach"}))}},E_=async()=>{if(!Y||p_)return;await A0(Y)},w_=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},G_=y((O)=>{if(!w_(O))return;if(O.preventDefault(),O0.current+=1,!$$.current)d(!0);$_("upload");let J=o0(O)||$0();C0(J),T0(J)},[$0,o0,C0,T0]),N$=y((O)=>{if(!w_(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!$$.current)d(!0);if(V$.current!=="upload")$_("upload");let J=o0(O)||$0();if(E0.current!==J)C0(J);T0(J)},[$0,o0,C0,T0]),u_=y((O)=>{if(!w_(O))return;if(O.preventDefault(),O0.current=Math.max(0,O0.current-1),O0.current===0)d(!1),$_(null),C0(null),I0()},[C0,I0]),i0=y(async(O,J=".")=>{let A=Array.from(O||[]);if(A.length===0)return;let k=J&&J!==""?J:".",g=k!=="."?k:"workspace root";R_(!0);try{let s=null;for(let r of A)try{s=await r2(r,k)}catch(a){let u=a?.status,q_=a?.code;if(u===409||q_==="file_exists"){let F0=r?.name||"file";if(!window.confirm(`"${F0}" already exists in ${g}. Overwrite?`))continue;s=await r2(r,k,{overwrite:!0})}else throw a}if(s?.path)w$.current=s.path,U(s.path),Z0.current?.(s.path);b_.current?.(k)}catch(s){h(s.message||"Failed to upload file")}finally{R_(!1)}},[]),y$=y(async(O,J)=>{if(!O)return;let A=H_.current?.get(O);if(!A)return;let k=J&&J!==""?J:".",g=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(k===g)return;try{let r=(await o4(O,k))?.path||O;if(A.type==="dir")B((a)=>{let u=new Set;for(let q_ of a)if(q_===O)u.add(r);else if(q_.startsWith(`${O}/`))u.add(`${r}${q_.slice(O.length)}`);else u.add(q_);return u});if(U(r),A.type==="dir")F(null),l(!1),M(null);else Z0.current?.(r);b_.current?.(g),b_.current?.(k)}catch(s){h(s?.message||"Failed to move entry")}},[]);l$.current=y$;let p$=y(async(O)=>{if(!w_(O))return;O.preventDefault(),O0.current=0,d(!1),$_(null),M_(null),I0();let J=Array.from(O?.dataTransfer?.files||[]);if(J.length===0)return;let A=E0.current||o0(O)||$0();await i0(J,A)},[$0,o0,i0]),k$=y((O)=>{if(O?.stopPropagation?.(),U_)return;let J=O?.currentTarget?.dataset?.uploadTarget||".";Q0.current=J,d0.current?.click()},[U_]),t$=y(()=>{if(U_)return;let O=s0.current,J=O?H_.current?.get(O):null;Q0.current=J?.type==="dir"?J.path:".",d0.current?.click()},[U_]),b$=y(()=>{Y0(()=>h0(null))},[Y0,h0]),l_=y(()=>{Y0(()=>t$())},[Y0,t$]),S0=y(()=>{Y0(()=>D$())},[Y0,D$]),c$=y(()=>{Y0(()=>m$())},[Y0,m$]),z2=y(()=>{if(!Y||!b0)return;Y0(()=>T_.current?.(Y,E))},[Y0,Y,b0,E]),a0=y(()=>{if(!Y||Y===".")return;Y0(()=>M$(Y))},[Y0,Y,M$]),l0=y(()=>{if(!Y||p_)return;Y0(()=>E_())},[Y0,Y,p_,E_]),v0=y(()=>{if(!Y||p_)return;Y0(()=>V_())},[Y0,Y,p_,V_]),Q$=y(()=>{if(!H$)return;if(k0(),typeof window<"u")window.open(H$,"_blank","noopener")},[k0,H$]),Q2=y(()=>{k0(),N?.()},[k0,N]),t0=y(()=>{k0(),K?.()},[k0,K]),f2=y((O)=>{if(!O||O.button!==0)return;let J=O.currentTarget;if(!J||!J.dataset)return;let A=J.dataset.path;if(!A||A===".")return;if(y0.current===A)return;let k=L0(O);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!r0(k))return;O.preventDefault(),a_.current={path:A,dragging:!1,startX:O.clientX,startY:O.clientY};let g=(r)=>{let a=a_.current;if(!a?.path)return;let u=Math.abs(r.clientX-a.startX),q_=Math.abs(r.clientY-a.startY),F0=u>4||q_>4;if(!a.dragging&&F0)a.dragging=!0,H0.current=!0,d(!0),$_("move"),P$(a.path),L$(r.clientX,r.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(a.dragging){r.preventDefault(),L$(r.clientX,r.clientY);let A$=document.elementFromPoint(r.clientX,r.clientY),G0=B$(A$)||$0();if(E0.current!==G0)C0(G0);T0(G0)}},s=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",s);let r=a_.current;if(r?.dragging&&r.path){let a=E0.current||$0(),u=l$.current;if(typeof u==="function")u(r.path,a)}a_.current={path:null,dragging:!1,startX:0,startY:0},O0.current=0,d(!1),$_(null),C0(null),I0(),f$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{H0.current=!1},0)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",s)},[B$,$0,P$,L$,f$,C0,T0,I0]),q4=y(async(O)=>{let J=Array.from(O?.target?.files||[]);if(J.length===0)return;let A=Q0.current||".";if(await i0(J,A),Q0.current=".",O?.target)O.target.value=""},[i0]);return L`
        <aside
            class=${`workspace-sidebar${o?" workspace-drop-active":""}`}
            data-workspace-scale=${V0}
            ref=${J0}
            onDragEnter=${G_}
            onDragOver=${N$}
            onDragLeave=${u_}
            onDrop=${p$}
        >
            <input type="file" multiple style="display:none" ref=${d0} onChange=${q4} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <span>Workspace</span>
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${A_}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(O)=>{O.stopPropagation(),C_((J)=>!J)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
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
                            <div class="workspace-menu-dropdown" ref=${k_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${b$} disabled=${U_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${l_} disabled=${U_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${S0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${B_?" active":""}`} role="menuitem" onClick=${c$}>
                                    ${B_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${Y&&L`<div class="workspace-menu-separator"></div>`}
                                ${Y&&!p_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z2} disabled=${!b0}>Open in editor</button>
                                `}
                                ${d$&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${a0}>Rename selected</button>
                                `}
                                ${o$&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v0}>Download selected file</button>
                                `}
                                ${H$&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q$}>Download selected folder (zip)</button>
                                `}
                                ${s$&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${l0}>Delete selected file</button>
                                `}

                                ${(N||K)&&L`<div class="workspace-menu-separator"></div>`}
                                ${N&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${t0}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${h0} title="New file" disabled=${U_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${D$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${Z$}>
                ${U_&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&L`<div class="workspace-loading">Loading…</div>`}
                ${N_&&L`<div class="workspace-error">${N_}</div>`}
                ${W&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${r_}
                        tabIndex="0"
                        onClick=${r$}
                        onDblClick=${I$}
                        onKeyDown=${a$}
                        onTouchStart=${g$}
                        onTouchEnd=${Q}
                        onTouchMove=${b}
                        onTouchCancel=${Q}
                    >
                        ${J$.map(({node:O,depth:J})=>{let A=O.type==="dir",k=O.path===Y,g=O.path===C,s=A&&V.has(O.path),r=Q_&&O.path===Q_,a=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return L`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${k?" selected":""}${r?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*u$.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${f2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${A?s?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${A?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${A?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${g?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${N0}
                                                value=${v}
                                                onInput=${(u)=>R(u?.target?.value||"")}
                                                onKeyDown=${(u)=>{if(u.key==="Enter")u.preventDefault(),c0();else if(u.key==="Escape")u.preventDefault(),U0()}}
                                                onBlur=${U0}
                                                onClick=${(u)=>u.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${A&&!s&&a>0&&L`
                                        <span class="workspace-count">${a}</span>
                                    `}
                                    ${A&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${k$}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${x} onTouchStart=${n}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${Y}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${h0} title="New file" disabled=${U_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!p_&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>b0&&T_.current?.(Y,E)}
                                    title=${R0}
                                    disabled=${!b0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${E_}
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
                            ${p_?L`
                                    <button class="workspace-download" onClick=${t$}
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
                                    </a>`:L`<button class="workspace-download" onClick=${V_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${Z_&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&L`<div class="workspace-error">${E.error}</div>`}
                    ${p_&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${v_?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${v_?.error&&L`<div class="workspace-error">${v_.error}</div>`}
                        ${v_?.payload&&v_.payload.segments?.length>0&&L`
                            <${s5} payload=${v_.payload} />
                        `}
                        ${v_?.payload&&(!v_.payload.segments||v_.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!p_&&L`
                        <div class="workspace-preview-body" ref=${I}></div>
                    `}
                    ${S&&L`
                        <div class="workspace-download-card">
                            <${o5} mediaId=${S} />
                        </div>
                    `}
                </div>
            `}
            ${z_&&L`
                <div class="workspace-drag-ghost" ref=${q$}>${z_.label}</div>
            `}
        </aside>
    `}var r5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,a5=/\.(csv|tsv)$/i,t5=/\.pdf$/i,e5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Y8=/\.drawio(\.xml|\.svg|\.png)?$/i;function G8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:W,previewTabs:q,onToggleDock:V,dockVisible:B}){let[Y,U]=T(null),C=D(null);f(()=>{if(!Y)return;let F=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;U(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[Y]),f(()=>{let F=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let M=_.findIndex((i)=>i.id===$);if(S.shiftKey){let i=_[(M-1+_.length)%_.length];j?.(i.id)}else{let i=_[(M+1)%_.length];j?.(i.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let M=document.querySelector(".editor-pane");if(M&&M.contains(document.activeElement)){if(S.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let m=y((F,S)=>{if(F.button===1){F.preventDefault(),Z?.(S);return}if(F.button===0)j?.(S)},[j,Z]),v=y((F,S)=>{F.preventDefault(),U({id:S,x:F.clientX,y:F.clientY})},[]),R=y((F)=>{F.preventDefault(),F.stopPropagation()},[]),E=y((F,S)=>{F.preventDefault(),F.stopPropagation(),Z?.(S)},[Z]);if(f(()=>{if(!$||!C.current)return;let F=C.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return L`
        <div class="tab-strip" ref=${C} role="tablist">
            ${_.map((F)=>L`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(S)=>m(S,F.id)}
                    onContextMenu=${(S)=>v(S,F.id)}
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
                        onClick=${(S)=>E(S,F.id)}
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
                ${W&&/\.(md|mdx|markdown)$/i.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{W(Y.id),U(null)}}>
                        ${q?.has(Y.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${r5.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id),S=Y.id.split("/").pop()||"document",M="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(S);window.open(M,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${a5.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${t5.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${e5.test(Y.id)&&!Y8.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${Y8.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var _j=400,v1=60,W8=220,u1="mdPreviewHeight";function $j(){try{let _=localStorage.getItem(u1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=v1?$:W8}catch{return W8}}function X8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[K,z]=T($j),W=D(null),q=D(null),V=D(""),B=D(_);return B.current=_,f(()=>{let C=()=>{let v=B.current?.()||"";if(v===V.current)return;V.current=v;try{let R=_$(v,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};C();let m=setInterval(C,_j);return()=>clearInterval(m)},[]),f(()=>{if(W.current&&Z)x$(W.current).catch(()=>{})},[Z]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(C)=>{C.preventDefault();let m=C.clientY,v=q.current?.offsetHeight||K,R=q.current?.parentElement,E=R?R.offsetHeight*0.7:500,F=C.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let S=(i)=>{let t=Math.min(Math.max(v-(i.clientY-m),v1),E);z(t)},M=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(u1,String(Math.round(q.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",M)}}
            onTouchStart=${(C)=>{C.preventDefault();let m=C.touches[0];if(!m)return;let v=m.clientY,R=q.current?.offsetHeight||K,E=q.current?.parentElement,F=E?E.offsetHeight*0.7:500,S=C.currentTarget;S.classList.add("dragging"),document.body.style.userSelect="none";let M=(t)=>{let Z_=t.touches[0];if(!Z_)return;t.preventDefault();let l=Math.min(Math.max(R-(Z_.clientY-v),v1),F);z(l)},i=()=>{S.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(u1,String(Math.round(q.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",M),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
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
    `}function V8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=D(_);K.current=_;let z=D($);z.current=$;let W=D(j);W.current=j;let q=D(Z);q.current=Z,f(()=>{W.current();let V=new e2((Y,U)=>K.current(Y,U),(Y)=>z.current(Y),{chatJid:N});V.connect();let B=()=>{V.reconnectIfNeeded();let Y=typeof document<"u"?document:null;if(!Y||Y.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),V.disconnect()}},[N])}function q8(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);f(()=>{let q=q2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),f(()=>{N.current=_},[_]);let K=y(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),z=y(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await K();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),j0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),j0("notificationsEnabled",String(q))},[K]),W=y((q,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(q,{body:V});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:W}}var x2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function O8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[K,z]=T(!1),W=D(!1),q=D(null),V=D(!1),B=D(null),Y=D(null),U=D(0);f(()=>{W.current=K},[K]),f(()=>{Y.current=Z},[Z]),f(()=>{U.current+=1,Y.current=null,B.current=null,V.current=!1,W.current=!1,N(null),z(!1)},[j]);let C=y(async(R=null)=>{let E=U.current;try{if(R){let F=await b4(R,50,0,j);if(E!==U.current)return;N(F.posts),z(!1)}else{let F=await D2(10,null,j);if(E!==U.current)return;N(F.posts),z(F.has_more)}}catch(F){if(E!==U.current)return;console.error("Failed to load posts:",F)}},[j]),m=y(async()=>{let R=U.current;try{let E=await D2(10,null,j);if(R!==U.current)return;N((F)=>{if(!F||F.length===0)return E.posts;return x2([...E.posts,...F])}),z((F)=>F||E.has_more)}catch(E){if(R!==U.current)return;console.error("Failed to refresh timeline:",E)}},[j]),v=y(async(R={})=>{let E=U.current,F=Y.current;if(!F||F.length===0)return;if(V.current)return;let{preserveScroll:S=!0,preserveMode:M="top",allowRepeat:i=!1}=R,t=(N_)=>{if(!S){N_();return}if(M==="top")$(N_);else _(N_)},l=F.slice().sort((N_,h)=>N_.id-h.id)[0]?.id;if(!Number.isFinite(l))return;if(!i&&B.current===l)return;V.current=!0,B.current=l;try{let N_=await D2(10,l,j);if(E!==U.current)return;if(N_.posts.length>0)t(()=>{N((h)=>x2([...N_.posts,...h||[]])),z(N_.has_more)});else z(!1)}catch(N_){if(E!==U.current)return;console.error("Failed to load more posts:",N_)}finally{if(E===U.current)V.current=!1}},[j,_,$]);return f(()=>{q.current=v},[v]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:W,loadPosts:C,refreshTimeline:m,loadMore:v,loadMoreRef:q,loadingMoreRef:V,lastBeforeIdRef:B}}function B8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,K]=T(""),[z,W]=T({text:"",totalLines:0}),[q,V]=T(null),[B,Y]=T(null),[U,C]=T(null),m=D(null),v=D(0),R=D(!1),E=D(""),F=D(""),S=D(null),M=D(null),i=D(null),t=D(null),Z_=D(!1),l=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:W,pendingRequest:q,setPendingRequest:V,currentTurnId:B,setCurrentTurnId:Y,steerQueuedTurnId:U,setSteerQueuedTurnId:C,lastAgentEventRef:m,lastSilenceNoticeRef:v,isAgentRunningRef:R,draftBufferRef:E,thoughtBufferRef:F,pendingRequestRef:S,stalledPostIdRef:M,currentTurnIdRef:i,steerQueuedTurnIdRef:t,thoughtExpandedRef:Z_,draftExpandedRef:l}}function L8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientX,C=$.current||280,m=B.currentTarget;m.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientX;let S=Math.min(Math.max(C+(F.clientX-U),160),600);Y.style.setProperty("--sidebar-width",`${S}px`),$.current=S},E=()=>{let F=Math.min(Math.max(C+(v-U),160),600);$.current=F,m.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",j0("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,K=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let C=U.clientX,m=$.current||280,v=B.currentTarget;v.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(F)=>{let S=F.touches[0];if(!S)return;F.preventDefault();let M=Math.min(Math.max(m+(S.clientX-C),160),600);Y.style.setProperty("--sidebar-width",`${M}px`),$.current=M},E=()=>{v.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.userSelect="",j0("sidebarWidth",String(Math.round($.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,z=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientX,C=j.current||$.current||280,m=B.currentTarget;m.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientX;let S=Math.min(Math.max(C+(F.clientX-U),200),800);Y.style.setProperty("--editor-width",`${S}px`),j.current=S},E=()=>{let F=Math.min(Math.max(C+(v-U),200),800);j.current=F,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",j0("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,W=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let C=U.clientX,m=j.current||$.current||280,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let S=F.touches[0];if(!S)return;F.preventDefault();let M=Math.min(Math.max(m+(S.clientX-C),200),800);Y.style.setProperty("--editor-width",`${M}px`),j.current=M},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",j0("editorWidth",String(Math.round(j.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,q=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientY,C=Z?.current||200,m=B.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientY;let S=Math.min(Math.max(C-(F.clientY-U),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${S}px`),Z)Z.current=S;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let F=Math.min(Math.max(C-(v-U),100),window.innerHeight*0.5);if(Z)Z.current=F;m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",j0("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,V=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let C=U.clientY,m=Z?.current||200,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let S=F.touches[0];if(!S)return;F.preventDefault();let M=Math.min(Math.max(m-(S.clientY-C),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${M}px`),Z)Z.current=M;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",j0("dockHeight",String(Math.round(Z?.current||m))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:W,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:V}}function Q8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>c_.getTabs()),[N,K]=T(()=>c_.getActiveId()),[z,W]=T(()=>c_.getTabs().length>0);f(()=>{return c_.onChange((M,i)=>{Z(M),K(i),W(M.length>0)})},[]);let[q,V]=T(()=>new Set),B=y((M)=>{V((i)=>{let t=new Set(i);if(t.has(M))t.delete(M);else t.add(M);return t})},[]),Y=y((M)=>{V((i)=>{if(!i.has(M))return i;let t=new Set(i);return t.delete(M),t})},[]),U=y((M,i={})=>{if(!M)return;let t={path:M,mode:"edit"};try{if(!_0.resolve(t)){if(!_0.get("editor")){console.warn(`[openEditor] No pane handler for: ${M}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${M}":`,l)}let Z_=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;c_.open(M,Z_)},[]),C=y(()=>{let M=c_.getActiveId();if(M){let i=c_.get(M);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}c_.close(M),Y(M),$.current?.(M)}},[Y]),m=y((M)=>{let i=c_.get(M);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}c_.close(M),Y(M),$.current?.(M)},[Y]),v=y((M)=>{c_.activate(M)},[]),R=y((M)=>{let i=c_.getTabs().filter((l)=>l.id!==M&&!l.pinned),t=i.filter((l)=>l.dirty).length;if(t>0){if(!window.confirm(`${t} unsaved tab${t>1?"s":""} will be closed. Continue?`))return}let Z_=i.map((l)=>l.id);c_.closeOthers(M),Z_.forEach((l)=>{Y(l),$.current?.(l)})},[Y]),E=y(()=>{let M=c_.getTabs().filter((Z_)=>!Z_.pinned),i=M.filter((Z_)=>Z_.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let t=M.map((Z_)=>Z_.id);c_.closeAll(),t.forEach((Z_)=>{Y(Z_),$.current?.(Z_)})},[Y]),F=y((M)=>{c_.togglePin(M)},[]),S=y(()=>{let M=c_.getActiveId();if(M)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:M}}))},[]);return f(()=>{let M=(i)=>{let{oldPath:t,newPath:Z_,type:l}=i.detail||{};if(!t||!Z_)return;if(l==="dir"){for(let N_ of c_.getTabs())if(N_.path===t||N_.path.startsWith(`${t}/`)){let h=`${Z_}${N_.path.slice(t.length)}`;c_.rename(N_.id,h)}}else c_.rename(t,Z_)};return window.addEventListener("workspace-file-renamed",M),()=>window.removeEventListener("workspace-file-renamed",M)},[]),f(()=>{let M=(i)=>{if(c_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",M),()=>window.removeEventListener("beforeunload",M)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:U,closeEditor:C,handleTabClose:m,handleTabActivate:v,handleTabCloseOthers:R,handleTabCloseAll:E,handleTabTogglePin:F,handleTabTogglePreview:B,revealInExplorer:S}}function m1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var g1=m1("warning",30000),U8=m1("finalize",120000),p1=m1("refresh",30000),F8=30000;function J8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function H8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function D8(_=30000){let[,$]=T(0);f(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function c1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function E8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function j2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function h1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function y8(_,$={}){if(j2($))return null;if(h1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:jj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function k8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function A8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function w8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function P8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function T2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function M8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function jj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function i1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function l1(_){return String(_||"").trim()||"web:default"}function C8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function I8(_={}){return j2(_)&&h1(_)}function Zj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Nj(_={},$={}){if(!I8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Zj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function b8(_={}){if(!I8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let Y of N)$.clearTimeout?.(Y);N.clear()},z=()=>{Z=0,Nj({window:$,document:j})},W=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},q=()=>{W();for(let Y of[80,220,420]){let U=$.setTimeout?.(()=>{N.delete(U),W()},Y);if(U!=null)N.add(U)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},B=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",q,!0),B?.addEventListener?.("resize",q),B?.addEventListener?.("scroll",q),()=>{K(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",q,!0),B?.removeEventListener?.("resize",q),B?.removeEventListener?.("scroll",q)}}function Kj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function F$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Kj($,j)}var zj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function S8(_){return zj.has(String(_||"").trim())}function Yj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function x8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Yj(_),{detail:Z})),!0}var Gj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function T8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(j2({window:j,navigator:Z}))};N();let z=Gj.map((W)=>{try{return j.matchMedia?.(W)??null}catch{return null}}).filter(Boolean).map((W)=>{if(typeof W.addEventListener==="function")return W.addEventListener("change",N),()=>W.removeEventListener("change",N);if(typeof W.addListener==="function")return W.addListener(N),()=>W.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let W of z)W();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function f8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var d1="piclaw_btw_session";function Wj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Xj(){let _=W$(d1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var R8=S4,v8=T4,Vj=R4,u8=p4,m8=c4,g8=v4,n1=F$(G$,"getAgentContext",null),qj=F$(G$,"getAgentModels",{current:null,models:[]}),Oj=F$(G$,"getActiveChatAgents",{chats:[]}),p8=F$(G$,"getChatBranches",{chats:[]}),Bj=F$(G$,"renameChatBranch",null),Lj=F$(G$,"pruneChatBranch",null),Qj=F$(G$,"getAgentQueueState",{count:0}),Uj=F$(G$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Fj=F$(G$,"removeAgentQueueItem",{removed:!1}),Jj=F$(G$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});_0.register(O1);_0.register(E1);_0.register(D1);_0.register(y1);_0.register(k1);_0.register(A1);_0.register(P1);_0.register(C1);B1();_0.register(F1);_0.register(J1);function Hj({locationParams:_}){let $=n_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=n_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=n_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=n_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[K,z]=T("disconnected"),[W,q]=T(()=>j2()),[V,B]=T(null),[Y,U]=T(null),[C,m]=T(!1),[v,R]=T("current"),[E,F]=T([]),[S,M]=T([]),[i,t]=T(null),{agentStatus:Z_,setAgentStatus:l,agentDraft:N_,setAgentDraft:h,agentPlan:B_,setAgentPlan:h_,agentThought:o,setAgentThought:d,pendingRequest:K_,setPendingRequest:$_,currentTurnId:z_,setCurrentTurnId:P_,steerQueuedTurnId:Q_,setSteerQueuedTurnId:M_,lastAgentEventRef:U_,lastSilenceNoticeRef:R_,isAgentRunningRef:v_,draftBufferRef:W_,thoughtBufferRef:I_,pendingRequestRef:S_,stalledPostIdRef:V0,currentTurnIdRef:X_,steerQueuedTurnIdRef:__,thoughtExpandedRef:C_,draftExpandedRef:Y_}=B8(),[D_,y_]=T({}),[d_,s_]=T(null),[o_,H_]=T(null),[x_,T_]=T(!1),[Z0,b_]=T(null),[J0,r_]=T([]),[N0,d0]=T([]),[Q0,f_]=T(null),[q0,a_]=T([]),[K0,H0]=T(!1),[i_,D0]=T(()=>Xj()),w0=n_(()=>J0.find((X)=>X?.chat_jid===$)||null,[J0,$]),L_=n_(()=>N0.find((X)=>X?.chat_jid===$)||w0||null,[w0,N0,$]),I=L_?.root_chat_jid||w0?.root_chat_jid||$,e=Wj(v),[k_,A_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),z0=q0.length,m0=D(new Set),P0=D([]),O0=D(new Set),E0=D(0),$$=D({inFlight:!1,lastAttemptAt:0,turnId:null});m0.current=new Set(q0.map((X)=>X.row_id)),P0.current=q0;let{notificationsEnabled:V$,notificationPermission:q$,toggleNotifications:M0,notify:g0}=q8(),[l$,s0]=T(()=>new Set),[y0,w$]=T(()=>q2("workspaceOpen",!0)),O$=D(null),{editorOpen:x0,tabStripTabs:Z2,tabStripActiveId:p0,previewTabs:n$,openEditor:$0,closeEditor:B$,handleTabClose:o0,handleTabActivate:C0,handleTabCloseOthers:I0,handleTabCloseAll:T0,handleTabTogglePin:L$,handleTabTogglePreview:P$,revealInExplorer:f$}=Q8({onTabClosed:(X)=>O$.current?.(X)}),R$=D(null),U0=D(null),M$=D(null),c0=D(null),B0=_0.getDockPanes().length>0,[h0,N2]=T(!1),f0=y(()=>N2((X)=>!X),[]),K2=y(()=>{$0(Q1,{label:"Terminal"})},[$0]),J$=!j&&(x0||B0&&h0);f(()=>{let X=R$.current;if(!X)return;if(U0.current)U0.current.dispose(),U0.current=null;let G=p0;if(!G)return;let H={path:G,mode:"edit"},P=_0.resolve(H)||_0.get("editor");if(!P){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let w=P.mount(X,H);U0.current=w,w.onDirtyChange?.((j_)=>{c_.setDirty(G,j_)}),w.onSaveRequest?.(()=>{}),w.onClose?.(()=>{B$()});let p=c_.getViewState(G);if(p&&typeof w.restoreViewState==="function")requestAnimationFrame(()=>w.restoreViewState(p));if(typeof w.onViewStateChange==="function")w.onViewStateChange((j_)=>{c_.saveViewState(G,j_)});return requestAnimationFrame(()=>w.focus()),()=>{if(U0.current===w)w.dispose(),U0.current=null}},[p0,B$]),f(()=>{let X=(G)=>{let H=G.detail?.path;if(H)$0(H)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),document.addEventListener("pdf-viewer:open-tab",X),document.addEventListener("image-viewer:open-tab",X),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X),document.removeEventListener("pdf-viewer:open-tab",X),document.removeEventListener("image-viewer:open-tab",X)}},[$0]),f(()=>{let X=M$.current;if(c0.current)c0.current.dispose(),c0.current=null;if(!X||!B0||!h0)return;let G=_0.getDockPanes()[0];if(!G){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let H=G.mount(X,{mode:"view"});return c0.current=H,requestAnimationFrame(()=>H.focus?.()),()=>{if(c0.current===H)H.dispose(),c0.current=null}},[B0,h0]);let[v$,u$]=T({name:"You",avatar_url:null,avatar_background:null}),C$=D(!1),p_=D(!1),b0=D(null),R0=D($),d$=D(new Map),s$=D($),o$=D(0),H$=D(0),k0=D({}),Y0=D({name:null,avatar_url:null}),L0=D({currentHashtag:null,searchQuery:null}),r0=D(null),I$=D(null),r$=D(0),D$=D(0),j$=D(0),m$=D(null),Z$=D(null),A0=D(null),E$=D(null),a$=D(0),g$=D({title:null,avatarBase:null}),Q=D(null),b=y(()=>{if(Q.current)clearTimeout(Q.current),Q.current=null;t(null)},[]);D8(30000),f(()=>{return i3()},[]),f(()=>{return T8(q)},[]),f(()=>{j0("workspaceOpen",String(y0))},[y0]),f(()=>{return b8()},[]),f(()=>{return()=>{b()}},[b]),f(()=>{if(!i_){j0(d1,"");return}j0(d1,JSON.stringify({question:i_.question||"",answer:i_.answer||"",thinking:i_.thinking||"",error:i_.error||null,status:i_.status||"success"}))},[i_]),f(()=>{k0.current=D_||{}},[D_]),f(()=>{R0.current=$},[$]),f(()=>{Y0.current=v$||{name:"You",avatar_url:null,avatar_background:null}},[v$]);let x=y((X,G,H=null)=>{if(typeof document>"u")return;let P=(X||"").trim()||"PiClaw";if(g$.current.title!==P){document.title=P;let c=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(c&&c.getAttribute("content")!==P)c.setAttribute("content",P);g$.current.title=P}let w=document.getElementById("dynamic-favicon");if(!w)return;let p=w.getAttribute("data-default")||w.getAttribute("href")||"/favicon.ico",j_=G||p,F_=G?`${j_}|${H||""}`:j_;if(g$.current.avatarBase!==F_){let c=G?`${j_}${j_.includes("?")?"&":"?"}v=${H||Date.now()}`:j_;w.setAttribute("href",c),g$.current.avatarBase=F_}},[]),n=y((X)=>{if(!X)return;F((G)=>G.includes(X)?G:[...G,X])},[]),V_=y((X)=>{F((G)=>G.filter((H)=>H!==X))},[]);O$.current=V_;let E_=y(()=>{F([])},[]),w_=y((X)=>{if(!Array.isArray(X)){F([]);return}let G=[],H=new Set;for(let P of X){if(typeof P!=="string"||!P.trim())continue;let w=P.trim();if(H.has(w))continue;H.add(w),G.push(w)}F(G)},[]),G_=y((X,G=null,H="info",P=3000)=>{b(),t({title:X,detail:G||null,kind:H||"info"}),Q.current=setTimeout(()=>{t((w)=>w?.title===X?null:w)},P)},[b]),N$=y((X)=>{let G=E8(X,{editorOpen:x0,resolvePane:(H)=>_0.resolve(H)});if(G.kind==="open"){$0(G.path);return}if(G.kind==="toast")G_(G.title,G.detail,G.level)},[x0,$0,G_]),u_=y(()=>{let X=p0;if(X)n(X)},[p0,n]),i0=y((X)=>{if(!X)return;M((G)=>G.includes(X)?G:[...G,X])},[]),y$=y(async(X,G=null)=>{let H=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+X);if(P){H(P);return}try{let w=typeof G==="string"&&G.trim()?G.trim():$,j_=(await x4(X,w))?.thread?.[0];if(!j_)return;u((F_)=>{if(!F_)return[j_];if(F_.some((c)=>c.id===j_.id))return F_;return[...F_,j_]}),requestAnimationFrame(()=>{setTimeout(()=>{let F_=document.getElementById("post-"+X);if(F_)H(F_)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",X,w)}},[$]),p$=y((X)=>{M((G)=>G.filter((H)=>H!==X))},[]),k$=y(()=>{M([])},[]),t$=y((X)=>{if(!Array.isArray(X)){M([]);return}let G=[],H=new Set;for(let P of X){if(typeof P!=="string"||!P.trim())continue;let w=P.trim();if(H.has(w))continue;H.add(w),G.push(w)}M(G)},[]),b$=y((X)=>{let G=typeof X==="string"&&X.trim()?X.trim():"Could not send your message.";G_("Compose failed",G,"error",5000)},[G_]),l_=y((X={})=>{let G=Date.now();if(U_.current=G,X.running)v_.current=!0,H0((H)=>H?H:!0);if(X.clearSilence)R_.current=0},[H0]),S0=y(()=>{if(E$.current)clearTimeout(E$.current),E$.current=null;a$.current=0},[]);f(()=>()=>{S0()},[S0]);let c$=y(()=>{S0(),l((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:G,lastActivity:H,...P}=X;return P})},[S0]),z2=y((X)=>{if(!X)return;S0();let G=Date.now();a$.current=G,l({type:X.type||"active",last_activity:!0}),E$.current=setTimeout(()=>{if(a$.current!==G)return;l((H)=>{if(!H||!(H.last_activity||H.lastActivity))return H;return null})},F8)},[S0]),a0=y(()=>{v_.current=!1,H0(!1),U_.current=null,R_.current=0,W_.current="",I_.current="",S_.current=null,Z$.current=null,X_.current=null,__.current=null,b0.current=null,$$.current={inFlight:!1,lastAttemptAt:0,turnId:null},S0(),P_(null),M_(null),C_.current=!1,Y_.current=!1},[S0,P_,M_,H0]),l0=y((X)=>{if(!C8({remainingQueueCount:X,currentTurnId:X_.current,isAgentTurnActive:K0}))return;__.current=null,M_(null)},[K0,M_]),v0=y(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),Q$=y(()=>({agentStatus:Z_,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:B_||"",agentThought:o?{...o}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:z_,steerQueuedTurnId:Q_,isAgentTurnActive:Boolean(K0),followupQueueItems:Array.isArray(q0)?q0.map((X)=>({...X})):[],activeModel:d_,activeThinkingLevel:o_,supportsThinking:Boolean(x_),activeModelUsage:Z0,contextUsage:Q0,isAgentRunning:Boolean(v_.current),wasAgentActive:Boolean(p_.current),draftBuffer:W_.current||"",thoughtBuffer:I_.current||"",lastAgentEvent:U_.current||null,lastSilenceNotice:R_.current||0,lastAgentResponse:Z$.current||null,currentTurnIdRef:X_.current||null,steerQueuedTurnIdRef:__.current||null,thoughtExpanded:Boolean(C_.current),draftExpanded:Boolean(Y_.current),agentStatusRef:b0.current||null,silentRecovery:{...$$.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[d_,Z0,o_,N_,B_,Z_,o,Q0,z_,q0,K0,K_,Q_,x_]),Q2=y((X)=>{let G=X||v0();S0(),v_.current=Boolean(G.isAgentRunning),p_.current=Boolean(G.wasAgentActive),H0(Boolean(G.isAgentTurnActive)),U_.current=G.lastAgentEvent||null,R_.current=Number(G.lastSilenceNotice||0),W_.current=G.draftBuffer||"",I_.current=G.thoughtBuffer||"",S_.current=G.pendingRequest||null,Z$.current=G.lastAgentResponse||null,X_.current=G.currentTurnIdRef||null,__.current=G.steerQueuedTurnIdRef||null,b0.current=G.agentStatusRef||null,$$.current=G.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},C_.current=Boolean(G.thoughtExpanded),Y_.current=Boolean(G.draftExpanded),l(G.agentStatus||null),h(G.agentDraft?{...G.agentDraft}:{text:"",totalLines:0}),h_(G.agentPlan||""),d(G.agentThought?{...G.agentThought}:{text:"",totalLines:0}),$_(G.pendingRequest||null),P_(G.currentTurnId||null),M_(G.steerQueuedTurnId||null),a_(Array.isArray(G.followupQueueItems)?G.followupQueueItems.map((H)=>({...H})):[]),s_(G.activeModel||null),H_(G.activeThinkingLevel||null),T_(Boolean(G.supportsThinking)),b_(G.activeModelUsage??null),f_(G.contextUsage??null)},[S0,v0,P_,a_,H0,M_]),t0=y((X)=>{if(!X)return;if(X_.current===X)return;X_.current=X,$$.current={inFlight:!1,lastAttemptAt:0,turnId:X},P_(X),__.current=null,M_(null),W_.current="",I_.current="",h({text:"",totalLines:0}),h_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,Z$.current=null,C_.current=!1,Y_.current=!1},[P_,M_]),f2=y((X)=>{if(typeof document<"u"){let c=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&c)return}let G=Z$.current;if(!G||!G.post)return;if(X&&G.turnId&&G.turnId!==X)return;let H=G.post;if(H.id&&m$.current===H.id)return;let P=String(H?.data?.content||"").trim();if(!P)return;m$.current=H.id||m$.current,Z$.current=null;let w=P.replace(/\s+/g," ").slice(0,200),p=k0.current||{},F_=(H?.data?.agent_id?p[H.data.agent_id]:null)?.name||"Pi";g0(F_,w)},[g0]),q4=y(async(X,G)=>{if(X!=="thought"&&X!=="draft")return;let H=X_.current;if(X==="thought"){if(C_.current=G,H)try{await m8(H,"thought",G)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!G)return;try{let P=H?await u8(H,"thought"):null;if(P?.text)I_.current=P.text;d((w)=>({...w||{text:"",totalLines:0},fullText:I_.current||w?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:w?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(Y_.current=G,H)try{await m8(H,"draft",G)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!G)return;try{let P=H?await u8(H,"draft"):null;if(P?.text)W_.current=P.text;h((w)=>({...w||{text:"",totalLines:0},fullText:W_.current||w?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:w?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),O=D(null),J=y(()=>{let X=r0.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);O.current=J;let A=y((X)=>{let G=r0.current;if(!G||typeof X!=="function"){X?.();return}let{currentHashtag:H,searchQuery:P}=L0.current||{},w=!(P&&!H),p=w?G.scrollHeight-G.scrollTop:G.scrollTop;X(),requestAnimationFrame(()=>{let j_=r0.current;if(!j_)return;if(w){let F_=Math.max(j_.scrollHeight-p,0);j_.scrollTop=F_}else{let F_=Math.max(j_.scrollHeight-j_.clientHeight,0),c=Math.min(p,F_);j_.scrollTop=c}})},[]),k=y((X)=>{let G=r0.current;if(!G||typeof X!=="function"){X?.();return}let H=G.scrollTop;X(),requestAnimationFrame(()=>{let P=r0.current;if(!P)return;let w=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(H,w)})},[]),g="Queued as a follow-up (one-at-a-time).",s="⁣",r=y((X)=>{if(!X||!Array.isArray(X))return X;let G=m0.current,H=new Set(G),P=X.filter((w)=>{if(H.has(w?.id))return!1;if(w?.data?.is_bot_message){let p=w?.data?.content;if(p===g||p===s)return!1}return!0});return P.length===X.length?X:P},[]),{posts:a,setPosts:u,hasMore:q_,setHasMore:F0,hasMoreRef:A$,loadPosts:G0,refreshTimeline:u0,loadMore:c8,loadMoreRef:O4}=O8({preserveTimelineScroll:A,preserveTimelineScrollTop:k,chatJid:$}),Y2=n_(()=>r(a),[a,q0,r]),R2=y(()=>{let X=V0.current;if(!X)return;u((G)=>G?G.filter((H)=>H.id!==X):G),V0.current=null},[u]),{handleSplitterMouseDown:h8,handleSplitterTouchStart:i8,handleEditorSplitterMouseDown:l8,handleEditorSplitterTouchStart:n8,handleDockSplitterMouseDown:d8,handleDockSplitterTouchStart:s8}=L8({appShellRef:I$,sidebarWidthRef:r$,editorWidthRef:D$,dockHeightRef:j$}),s1=y(()=>{if(!v_.current)return;v_.current=!1,R_.current=0,U_.current=null,X_.current=null,P_(null),C_.current=!1,Y_.current=!1;let X=(W_.current||"").trim();if(W_.current="",I_.current="",h({text:"",totalLines:0}),h_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,Z$.current=null,!X){l({type:"error",title:"Response stalled - No content received"});return}let H=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),w=new Date().toISOString(),p={id:P,timestamp:w,data:{type:"agent_response",content:H,agent_id:"default",is_local_stall:!0}};V0.current=P,u((j_)=>j_?x2([...j_,p]):[p]),O.current?.(),l(null)},[P_]);f(()=>{L0.current={currentHashtag:V,searchQuery:Y}},[V,Y]);let m_=y(()=>{let X=++E0.current,G=$;Qj(G).then((H)=>{if(X!==E0.current)return;if(R0.current!==G)return;let P=O0.current,w=Array.isArray(H?.items)?H.items.map((p)=>({...p})).filter((p)=>!P.has(p.row_id)):[];if(w.length){a_((p)=>{if(p.length===w.length&&p.every((j_,F_)=>j_.row_id===w[F_].row_id))return p;return w});return}P.clear(),l0(0),a_((p)=>p.length===0?p:[])}).catch(()=>{if(X!==E0.current)return;if(R0.current!==G)return;a_((H)=>H.length===0?H:[])})},[l0,$,a_]),K$=y(async()=>{let X=$;try{let G=await n1(X);if(R0.current!==X)return;if(G)f_(G)}catch(G){if(R0.current!==X)return;console.warn("Failed to fetch agent context:",G)}},[$]),z$=y(async()=>{let X=$;try{let G=await g8(X);if(R0.current!==X)return null;if(!G||G.status!=="active"||!G.data){if(p_.current){let{currentHashtag:w,searchQuery:p}=L0.current||{};if(!w&&!p)u0()}return p_.current=!1,a0(),b0.current=null,l(null),h({text:"",totalLines:0}),h_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,G??null}p_.current=!0;let H=G.data;b0.current=H;let P=H.turn_id||H.turnId;if(P)t0(P);if(l_({running:!0,clearSilence:!0}),c$(),l(H),G.thought&&G.thought.text)d((w)=>{if(w&&w.text&&w.text.length>=G.thought.text.length)return w;return I_.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)h((w)=>{if(w&&w.text&&w.text.length>=G.draft.text.length)return w;return W_.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[a0,c$,l_,u0,t0]),B4=y(async()=>{if(!v_.current)return null;if(S_.current)return null;let X=X_.current||null,G=$$.current,H=Date.now();if(G.inFlight)return null;if(G.turnId===X&&H-G.lastAttemptAt<p1)return null;G.inFlight=!0,G.lastAttemptAt=H,G.turnId=X;try{let{currentHashtag:P,searchQuery:w}=L0.current||{};if(!P&&!w)await u0();return await m_(),await z$()}finally{G.inFlight=!1}},[z$,m_,u0]);f(()=>{let X=Math.min(1000,Math.max(100,Math.floor(g1/2))),G=setInterval(()=>{if(!v_.current)return;if(S_.current)return;let H=U_.current;if(!H)return;let P=Date.now(),w=P-H,p=P2(b0.current);if(w>=U8){if(!p)l({type:"waiting",title:"Re-syncing after a quiet period…"});B4();return}if(w>=g1){if(P-R_.current>=p1){if(!p){let j_=Math.floor(w/1000);l({type:"waiting",title:`Waiting for model… No events for ${j_}s`})}R_.current=P,B4()}}},X);return()=>clearInterval(G)},[B4]);let o8=y((X)=>{if(z(X),X!=="connected"){l(null),h({text:"",totalLines:0}),h_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,a0();return}if(!C$.current){C$.current=!0,z$(),K$();return}let{currentHashtag:G,searchQuery:H}=L0.current;if(!G&&!H)u0();z$(),m_(),K$()},[a0,u0,z$,m_,K$]),r8=y(async(X)=>{B(X),u(null),await G0(X)},[G0]),a8=y(async()=>{B(null),U(null),u(null),await G0()},[G0]),t8=y(async(X,G=v)=>{if(!X||!X.trim())return;let H=G==="root"||G==="all"?G:"current";R(H),U(X.trim()),B(null),u(null);try{let P=await R8(X.trim(),50,0,$,H,I);u(P.results),F0(!1)}catch(P){console.error("Failed to search:",P),u([])}},[$,I,v]),e8=y(()=>{m(!0),U(null),B(null),R("current"),u([])},[]),_9=y(()=>{m(!1),U(null),G0()},[G0]),Ej=y(()=>{},[]),$9=y(async(X)=>{if(!X)return;let G=X.id,H=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,P=Y2?.filter((p)=>p?.data?.thread_id===G&&p?.id!==G).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let w=(p)=>{if(!p.length)return;s0((F_)=>{let c=new Set(F_);return p.forEach((O_)=>c.add(O_)),c}),setTimeout(()=>{if(k(()=>{u((F_)=>F_?F_.filter((c)=>!p.includes(c.id)):F_)}),s0((F_)=>{let c=new Set(F_);return p.forEach((O_)=>c.delete(O_)),c}),A$.current)O4.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await v8(G,P>0,H);if(p?.ids?.length)w(p.ids)}catch(p){let j_=p?.message||"";if(P===0&&j_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let c=await v8(G,!0,H);if(c?.ids?.length)w(c.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${j_}`)}},[$,Y2,k]),o1=y(async()=>{try{let X=await Vj();y_(J8(X));let G=X?.user||{};u$((P)=>{let w=typeof G.name==="string"&&G.name.trim()?G.name.trim():"You",p=typeof G.avatar_url==="string"?G.avatar_url.trim():null,j_=typeof G.avatar_background==="string"&&G.avatar_background.trim()?G.avatar_background.trim():null;if(P.name===w&&P.avatar_url===p&&P.avatar_background===j_)return P;return{name:w,avatar_url:p,avatar_background:j_}});let H=(X?.agents||[]).find((P)=>P.id==="default");x(H?.name,H?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,G=await n1(X);if(R0.current!==X)return;if(G)f_(G)}catch{}},[x,$]);f(()=>{o1();let X=O2("sidebarWidth",null),G=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(r$.current=G,I$.current)I$.current.style.setProperty("--sidebar-width",`${G}px`)},[o1]);let L4=K0||Z_!==null,r1=y((X)=>{if(!X||typeof X!=="object")return;let G=X.agent_id;if(!G)return;let{agent_name:H,agent_avatar:P}=X;if(!H&&P===void 0)return;let w=k0.current?.[G]||{id:G},p=w.name||null,j_=w.avatar_url??w.avatarUrl??w.avatar??null,F_=!1,c=!1;if(H&&H!==w.name)p=H,c=!0;if(P!==void 0){let O_=typeof P==="string"?P.trim():null,t_=typeof j_==="string"?j_.trim():null,J_=O_||null;if(J_!==(t_||null))j_=J_,F_=!0}if(!c&&!F_)return;if(y_((O_)=>{let J_={...O_[G]||{id:G}};if(c)J_.name=p;if(F_)J_.avatar_url=j_;return{...O_,[G]:J_}}),G==="default")x(p,j_,F_?Date.now():null)},[x]),a1=y((X)=>{if(!X||typeof X!=="object")return;let G=X.user_name??X.userName,H=X.user_avatar??X.userAvatar,P=X.user_avatar_background??X.userAvatarBackground;if(G===void 0&&H===void 0&&P===void 0)return;u$((w)=>{let p=typeof G==="string"&&G.trim()?G.trim():w.name||"You",j_=H===void 0?w.avatar_url:typeof H==="string"&&H.trim()?H.trim():null,F_=P===void 0?w.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(w.name===p&&w.avatar_url===j_&&w.avatar_background===F_)return w;return{name:p,avatar_url:j_,avatar_background:F_}})},[]),Q4=y((X)=>{if(!X||typeof X!=="object")return;let G=X.model??X.current;if(G!==void 0)s_(G);if(X.thinking_level!==void 0)H_(X.thinking_level??null);if(X.supports_thinking!==void 0)T_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)b_(X.provider_usage??null)},[]),U2=y(()=>{let X=$;qj(X).then((G)=>{if(R0.current!==X)return;if(G)Q4(G)}).catch(()=>{})},[Q4,$]),e0=y(()=>{Oj().then((X)=>{let G=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.agent_name==="string"&&H.agent_name.trim()):[];r_(G)}).catch(()=>{})},[]),n0=y(()=>{p8(I).then((X)=>{let G=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.chat_jid==="string"&&typeof H.agent_name==="string"):[];d0(G)}).catch(()=>{})},[I]),j9=y((X)=>{let G=X?.row_id;if(G==null)return;O0.current.add(G),a_((H)=>H.filter((P)=>P?.row_id!==G)),Uj(G,l1($)).then(()=>{m_()}).catch((H)=>{console.warn("[queue] Failed to steer queued item:",H),G_("Failed to steer message","The queued message could not be sent as steering.","warning"),O0.current.delete(G),m_()})},[$,m_,a_,G_]),Z9=y((X)=>{let G=X?.row_id;if(G==null)return;let H=P0.current.filter((P)=>P?.row_id!==G).length;O0.current.add(G),l0(H),a_((P)=>P.filter((w)=>w?.row_id!==G)),Fj(G,l1($)).then(()=>{m_()}).catch((P)=>{console.warn("[queue] Failed to remove queued item:",P),G_("Failed to remove message","The queued message could not be removed.","warning"),O0.current.delete(G),m_()})},[l0,$,m_,a_,G_]),U4=y((X)=>{if(!X||typeof X!=="object")return;if(e0(),n0(),X?.queued==="followup"||X?.queued==="steer"){m_();return}let G=X?.command;if(G&&typeof G==="object"&&(G?.queued_followup||G?.queued_steer))m_()},[e0,n0,m_]),F4=y(()=>{if(A0.current)A0.current.abort(),A0.current=null;D0(null)},[]),v2=y(async(X)=>{let G=String(X||"").trim();if(!G)return G_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(A0.current)A0.current.abort();let H=new AbortController;A0.current=H,D0({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let P=await Jj(G,{signal:H.signal,chatJid:_6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(w,p)=>{if(w==="side_prompt_start")D0((j_)=>j_?{...j_,status:"running"}:j_)},onThinkingDelta:(w)=>{D0((p)=>p?{...p,thinking:`${p.thinking||""}${w||""}`}:p)},onTextDelta:(w)=>{D0((p)=>p?{...p,answer:`${p.answer||""}${w||""}`}:p)}});if(A0.current!==H)return!0;D0((w)=>w?{...w,answer:P?.result||w.answer||"",thinking:P?.thinking||w.thinking||"",model:P?.model||null,status:"success",error:null}:w)}catch(P){if(H.signal.aborted)return!0;D0((w)=>w?{...w,status:"error",error:P?.payload?.error||P?.message||"BTW request failed."}:w)}finally{if(A0.current===H)A0.current=null}return!0},[$,G_]),N9=y(async({content:X})=>{let G=e3(X);if(!G)return!1;if(G.type==="help")return G_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(G.type==="clear")return F4(),G_("BTW cleared","Closed the side conversation panel.","info"),!0;if(G.type==="ask")return await v2(G.question),!0;return!1},[F4,v2,G_]),K9=y(()=>{if(i_?.question)v2(i_.question)},[i_,v2]),z9=y(async()=>{let X=Z6(i_);if(!X)return;try{let G=await X2("default",X,null,[],L4?"queue":null,$);U4(G),G_(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(G){G_("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning")}},[i_,U4,L4,G_]),F2=y(()=>{U2(),e0(),n0(),m_(),K$()},[U2,e0,n0,m_,K$]);f(()=>{F2();let X=setInterval(()=>{U2(),e0(),n0(),m_()},60000);return()=>clearInterval(X)},[F2,U2,e0,n0,m_]),f(()=>{n0()},[n0]),f(()=>{let X=!1;if(u(null),V)return G0(V),()=>{X=!0};if(Y)return R8(Y,50,0,$,v,I).then((G)=>{if(X)return;u(G.results),F0(!1)}).catch((G)=>{if(X)return;console.error("Failed to search:",G),u([]),F0(!1)}),()=>{X=!0};return G0(),()=>{X=!0}},[$,V,Y,v,I,G0,F0,u]),f(()=>{let X=s$.current||$;d$.current.set(X,Q$())},[$,Q$]),f(()=>{let X=s$.current||$;if(X===$)return;d$.current.set(X,Q$()),s$.current=$,O0.current.clear(),Q2(d$.current.get($)||null),m_(),z$(),K$()},[$,z$,K$,m_,Q2,Q$]);let Y9=y(()=>{let{currentHashtag:X,searchQuery:G}=L0.current||{};if(!X&&!G)u0();F2()},[F2,u0]),J4=y((X,G)=>{let H=G?.turn_id,P=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null,p=P?P===$:X==="connected"||X==="workspace_update";if(p)r1(G),a1(G);if(X==="ui_theme"){l3(G);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))c$()}if(X==="connected"){l(null),h({text:"",totalLines:0}),h_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,a0();let c=$;g8(c).then((J_)=>{if(R0.current!==c)return;if(!J_||J_.status!=="active"||!J_.data)return;let G2=J_.data,t1=G2.turn_id||G2.turnId;if(t1)t0(t1);if(l_({clearSilence:!0}),z2(G2),J_.thought&&J_.thought.text)I_.current=J_.thought.text,d({text:J_.thought.text,totalLines:J_.thought.totalLines||0});if(J_.draft&&J_.draft.text)W_.current=J_.draft.text,h({text:J_.draft.text,totalLines:J_.draft.totalLines||0})}).catch((J_)=>{console.warn("Failed to fetch agent status:",J_)});let{currentHashtag:O_,searchQuery:t_}=L0.current||{};if(!O_&&!t_)u0();F2();return}if(X==="agent_status"){if(!p){if(G?.type==="done"||G?.type==="error")e0(),n0();return}if(G.type==="done"||G.type==="error"){if(H&&X_.current&&H!==X_.current)return;if(G.type==="done"){f2(H||X_.current);let{currentHashtag:c,searchQuery:O_}=L0.current||{};if(!c&&!O_)u0();if(G.context_usage)f_(G.context_usage)}if(p_.current=!1,a0(),O0.current.clear(),e0(),m_(),h({text:"",totalLines:0}),h_(""),d({text:"",totalLines:0}),$_(null),G.type==="error")l({type:"error",title:G.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(H)t0(H);if(l_({running:!0,clearSilence:!0}),G.type==="thinking")W_.current="",I_.current="",h({text:"",totalLines:0}),h_(""),d({text:"",totalLines:0});b0.current=G,l((c)=>{if(c&&c.type===G.type&&c.title===G.title)return c;return G})}return}if(X==="agent_steer_queued"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;let c=H||X_.current;if(!c)return;__.current=c,M_(c);return}if(X==="agent_followup_queued"){if(!p)return;let c=G?.row_id,O_=G?.content;if(c!=null&&typeof O_==="string"&&O_.trim())a_((t_)=>{if(t_.some((J_)=>J_?.row_id===c))return t_;return[...t_,{row_id:c,content:O_,timestamp:G?.timestamp||null,thread_id:G?.thread_id??null}]});m_();return}if(X==="agent_followup_consumed"){if(!p)return;let c=G?.row_id;if(c!=null){let O_=P0.current.filter((t_)=>t_.row_id!==c).length;l0(O_),a_((t_)=>t_.filter((J_)=>J_.row_id!==c))}m_(),u0();return}if(X==="agent_followup_removed"){if(!p)return;let c=G?.row_id;if(c!=null){let O_=P0.current.filter((t_)=>t_.row_id!==c).length;O0.current.add(c),l0(O_),a_((t_)=>t_.filter((J_)=>J_.row_id!==c))}m_();return}if(X==="agent_draft_delta"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;if(H&&!X_.current)t0(H);if(l_({running:!0,clearSilence:!0}),G?.reset)W_.current="";if(G?.delta)W_.current+=G.delta;let c=Date.now();if(!o$.current||c-o$.current>=100){o$.current=c;let O_=W_.current,t_=c1(O_);if(Y_.current)h((J_)=>({text:J_?.text||"",totalLines:t_,fullText:O_}));else h({text:O_,totalLines:t_})}return}if(X==="agent_draft"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;if(H&&!X_.current)t0(H);l_({running:!0,clearSilence:!0});let c=G.text||"",O_=G.mode||(G.kind==="plan"?"replace":"append"),t_=Number.isFinite(G.total_lines)?G.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(G.kind==="plan")if(O_==="replace")h_(c);else h_((J_)=>(J_||"")+c);else if(!Y_.current)W_.current=c,h({text:c,totalLines:t_});return}if(X==="agent_thought_delta"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;if(H&&!X_.current)t0(H);if(l_({running:!0,clearSilence:!0}),G?.reset)I_.current="";if(typeof G?.delta==="string")I_.current+=G.delta;let c=Date.now();if(C_.current&&(!H$.current||c-H$.current>=100)){H$.current=c;let O_=I_.current;d((t_)=>({text:t_?.text||"",totalLines:c1(O_),fullText:O_}))}return}if(X==="agent_thought"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;if(H&&!X_.current)t0(H);l_({running:!0,clearSilence:!0});let c=G.text||"",O_=Number.isFinite(G.total_lines)?G.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!C_.current)I_.current=c,d({text:c,totalLines:O_});return}if(X==="model_changed"){if(!p)return;if(G?.model!==void 0)s_(G.model);if(G?.thinking_level!==void 0)H_(G.thinking_level??null);if(G?.supports_thinking!==void 0)T_(Boolean(G.supports_thinking));let c=$;n1(c).then((O_)=>{if(R0.current!==c)return;if(O_)f_(O_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:G}));return}if(S8(X)){if(!p)return;if(x8(X,G),X==="extension_ui_notify"&&typeof G?.message==="string")G_(G.message,null,G?.type||"info");if(X==="extension_ui_error"&&typeof G?.error==="string")G_("Extension UI error",G.error,"error",5000);return}let{currentHashtag:j_,searchQuery:F_}=L0.current;if(X==="agent_response"){if(!p)return;R2(),Z$.current={post:G,turnId:X_.current}}if(!j_&&!F_&&p&&(X==="new_post"||X==="new_reply"||X==="agent_response"))u((c)=>{if(!c)return[G];if(c.some((O_)=>O_.id===G.id))return c;return[...c,G]}),O.current?.();if(X==="interaction_updated"){if(!p)return;u((c)=>{if(!c)return c;if(!c.some((O_)=>O_.id===G.id))return c;return c.map((O_)=>O_.id===G.id?G:O_)})}if(X==="interaction_deleted"){if(!p)return;let c=G?.ids||[];if(c.length){k(()=>{u((J_)=>J_?J_.filter((G2)=>!c.includes(G2.id)):J_)});let{currentHashtag:O_,searchQuery:t_}=L0.current;if(A$.current&&!O_&&!t_)O4.current?.({preserveScroll:!0,preserveMode:"top"})}}},[a0,c$,$,O4,l_,f2,k,e0,n0,u0,R2,t0,z2,r1,a1,U2,m_,a_]);f(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=J4,X.reset=()=>{R2(),a0(),l(null),h({text:"",totalLines:0}),h_(""),d({text:"",totalLines:0}),$_(null)},X.finalize=()=>s1(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[a0,s1,J4,R2]),V8({handleSseEvent:J4,handleConnectionStatusChange:o8,loadPosts:G0,onWake:Y9,chatJid:$}),f(()=>{if(!Y2||Y2.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let G=X.slice(5);y$(G),history.replaceState(null,"",location.pathname+location.search)},[Y2,y$]);let H4=Z_!==null;f(()=>{if(K!=="connected")return;let G=setInterval(()=>{let{currentHashtag:H,searchQuery:P}=L0.current||{},w=!H&&!P;if(H4){if(w)u0();m_(),z$(),K$()}else{if(w)u0();z$(),K$()}},H4?15000:60000);return()=>clearInterval(G)},[K,H4,z$,K$,m_,u0]),f(()=>{return f8(()=>{z$(),K$(),m_()})},[z$,K$,m_]);let G9=y(()=>{w$((X)=>!X)},[]),W9=y((X)=>{if(typeof window>"u")return;let G=String(X||"").trim();if(!G||G===$)return;let H=T2(window.location.href,G,{chatOnly:j});window.location.assign(H)},[j,$]),X9=y(async()=>{if(typeof window>"u"||!L_?.chat_jid)return;let X=L_.agent_name||"",G=L_.display_name||"",H=window.prompt("Branch display name",G);if(H===null)return;let P=window.prompt("Agent handle (without @)",X);if(P===null)return;try{let w=await Bj(L_.chat_jid,{displayName:H,agentName:P});await Promise.allSettled([e0(),n0()]);let p=w?.branch?.agent_name||String(P||"").trim()||X;G_("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(w){let p=w instanceof Error?w.message:String(w||"Could not rename branch.");G_("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[L_,e0,n0,G_]),V9=y(async()=>{if(typeof window>"u"||!L_?.chat_jid)return;if(L_.chat_jid===(L_.root_chat_jid||L_.chat_jid)){G_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let G=L_.display_name||`@${L_.agent_name||L_.chat_jid}`;if(!window.confirm(`Prune ${G}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Lj(L_.chat_jid),await Promise.allSettled([e0(),n0()]);let P=L_.root_chat_jid||"web:default";G_("Branch pruned",`${G} has been archived.`,"info",3000);let w=T2(window.location.href,P,{chatOnly:j});window.location.assign(w)}catch(P){let w=P instanceof Error?P.message:String(P||"Could not prune branch.");G_("Could not prune branch",w||"Could not prune branch.","warning",5000)}},[j,L_,e0,n0,G_]);f(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{A_({status:"running",message:"Preparing a new chat branch…"});let G=await s2(N);if(X)return;let H=G?.branch,P=typeof H?.chat_jid==="string"&&H.chat_jid.trim()?H.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");let w=T2(window.location.href,P,{chatOnly:!0});window.location.replace(w)}catch(G){if(X)return;A_({status:"error",message:i1(G)})}})(),()=>{X=!0}},[Z,N]);let q9=y(async()=>{if(typeof window>"u"||W)return;let X=y8($);if(!X){G_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let H=M8(window.location.href,$,{chatOnly:!0});if(!window.open(H,X.target))G_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let G=k8(X);if(!G){G_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}A8(G,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let P=(await s2($))?.branch,w=typeof P?.chat_jid==="string"&&P.chat_jid.trim()?P.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");try{let j_=await f4();r_(Array.isArray(j_?.chats)?j_.chats:[])}catch{}try{let j_=await p8(I);d0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}let p=T2(window.location.href,w,{chatOnly:!0});w8(G,p)}catch(H){P8(G),G_("Could not open branch window",i1(H),"error",5000)}},[$,I,W,G_]);f(()=>{if(!x0)return;if(typeof window>"u")return;let X=I$.current;if(!X)return;if(!D$.current){let G=O2("editorWidth",null),H=r$.current||280;D$.current=Number.isFinite(G)?G:H}if(X.style.setProperty("--editor-width",`${D$.current}px`),!j$.current){let G=O2("dockHeight",null);j$.current=Number.isFinite(G)?G:200}X.style.setProperty("--dock-height",`${j$.current}px`)},[x0]),f(()=>{if(!B0||j)return;let X=(G)=>{if(G.ctrlKey&&G.key==="`")G.preventDefault(),f0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[f0,B0,j]);let O9=Boolean(Q_&&Q_===(Z_?.turn_id||z_));if(Z)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${k_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${k_.message}</p>
                    </div>
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${y0?"":" workspace-collapsed"}${x0?" editor-open":""}${j?" chat-only":""}`} ref=${I$}>
            ${!j&&L`
                <${z8}
                    onFileSelect=${n}
                    visible=${y0}
                    active=${y0||x0}
                    onOpenEditor=${$0}
                    onOpenTerminalTab=${K2}
                    onToggleTerminal=${B0?f0:void 0}
                    terminalVisible=${Boolean(B0&&h0)}
                />
                <button
                    class=${`workspace-toggle-tab${y0?" open":" closed"}`}
                    onClick=${G9}
                    title=${y0?"Hide workspace":"Show workspace"}
                    aria-label=${y0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${h8} onTouchStart=${i8}></div>
            `}
            ${J$&&L`
                <div class="editor-pane-container">
                    ${x0&&L`
                        <${G8}
                            tabs=${Z2}
                            activeId=${p0}
                            onActivate=${C0}
                            onClose=${o0}
                            onCloseOthers=${I0}
                            onCloseAll=${T0}
                            onTogglePin=${L$}
                            onTogglePreview=${P$}
                            previewTabs=${n$}
                            onToggleDock=${B0?f0:void 0}
                            dockVisible=${B0&&h0}
                        />
                    `}
                    ${x0&&L`<div class="editor-pane-host" ref=${R$}></div>`}
                    ${x0&&p0&&n$.has(p0)&&L`
                        <${X8}
                            getContent=${()=>U0.current?.getContent?.()}
                            path=${p0}
                            onClose=${()=>P$(p0)}
                        />
                    `}
                    ${B0&&h0&&L`<div class="dock-splitter" onMouseDown=${d8} onTouchStart=${s8}></div>`}
                    ${B0&&L`<div class=${`dock-panel${h0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${f0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${M$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${l8} onTouchStart=${n8}></div>
            `}
            <div class="container">
                ${Y&&H8()&&L`<div class="search-results-spacer"></div>`}
                ${j&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${L_?.display_name||L_?.agent_name?`@${L_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${L_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${N0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>W9(X.currentTarget.value)}
                                    >
                                        ${N0.map((X)=>L`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${L_?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${X9}
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
                ${(V||Y)&&L`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${a8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${Y} · ${e}`}</span>
                    </div>
                `}
                <${P6}
                    posts=${Y2}
                    hasMore=${q_}
                    onLoadMore=${c8}
                    timelineRef=${r0}
                    onHashtagClick=${r8}
                    onMessageRef=${i0}
                    onScrollToMessage=${y$}
                    onFileRef=${N$}
                    onPostClick=${void 0}
                    onDeletePost=${$9}
                    emptyMessage=${V?`No posts with #${V}`:Y?`No results for "${Y}"`:void 0}
                    agents=${D_}
                    user=${v$}
                    reverse=${!(Y&&!V)}
                    removingPostIds=${l$}
                    searchQuery=${Y}
                />
                <${V6}
                    status=${Z_}
                    draft=${N_}
                    plan=${B_}
                    thought=${o}
                    pendingRequest=${K_}
                    intent=${i}
                    turnId=${z_}
                    steerQueued=${O9}
                    onPanelToggle=${q4}
                />
                <${N6}
                    session=${i_}
                    onClose=${F4}
                    onRetry=${K9}
                    onInject=${z9}
                />
                <${T3}
                    onPost=${()=>{G0(),J()}}
                    onFocus=${J}
                    searchMode=${C}
                    searchScope=${v}
                    onSearch=${t8}
                    onSearchScopeChange=${R}
                    onEnterSearch=${e8}
                    onExitSearch=${_9}
                    fileRefs=${E}
                    onRemoveFileRef=${V_}
                    onClearFileRefs=${E_}
                    onSetFileRefs=${w_}
                    messageRefs=${S}
                    onRemoveMessageRef=${p$}
                    onClearMessageRefs=${k$}
                    onSetMessageRefs=${t$}
                    activeEditorPath=${j?null:p0}
                    onAttachEditorFile=${j?void 0:u_}
                    onOpenFilePill=${N$}
                    followupQueueCount=${z0}
                    followupQueueItems=${q0}
                    onInjectQueuedFollowup=${j9}
                    onRemoveQueuedFollowup=${Z9}
                    onSubmitIntercept=${N9}
                    onMessageResponse=${U4}
                    onSubmitError=${b$}
                    onPopOutChat=${W?void 0:q9}
                    isAgentActive=${L4}
                    activeChatAgents=${J0}
                    currentChatJid=${$}
                    connectionStatus=${K}
                    activeModel=${d_}
                    modelUsage=${Z0}
                    thinkingLevel=${o_}
                    supportsThinking=${x_}
                    contextUsage=${Q0}
                    notificationsEnabled=${V$}
                    notificationPermission=${q$}
                    onToggleNotifications=${M0}
                    onModelChange=${s_}
                    onModelStateChange=${Q4}
                />
                <${q6}
                    request=${K_}
                    onRespond=${()=>{$_(null),S_.current=null}}
                />
            </div>
        </div>
    `}function Dj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return L`<${Hj} locationParams=${_} />`}y3(L`<${Dj} />`,document.getElementById("app"));

//# debugId=DA42A4F66F790D3F64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
