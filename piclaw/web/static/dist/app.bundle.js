var w9=Object.defineProperty;var A9=(_)=>_;function P9(_,$){this[_]=A9.bind(null,$)}var M9=(_,$)=>{for(var j in $)w9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:P9.bind($,j)})};var $1,t_,P3,b9,d$,B3,M3,b3,x3,v1,T1,S1,x9,t2={},e2=[],I9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j1=Array.isArray;function b$(_,$){for(var j in $)_[j]=$[j];return _}function u1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function I3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?$1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return s2(_,K,Z,N,null)}function s2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++P3:N,__i:-1,__u:0};return N==null&&t_.vnode!=null&&t_.vnode(z),z}function Z1(_){return _.children}function r2(_,$){this.props=_,this.context=$}function H2(_,$){if($==null)return _.__?H2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?H2(_):null}function C9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=b$({},$);z.__v=$.__v+1,t_.vnode&&t_.vnode(z),m1(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?H2($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,f3(Z,z,N),$.__e=$.__=null,z.__e!=j&&C3(z)}}function C3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),C3(_)}function Q3(_){(!_.__d&&(_.__d=!0)&&d$.push(_)&&!_1.__r++||B3!=t_.debounceRendering)&&((B3=t_.debounceRendering)||M3)(_1)}function _1(){try{for(var _,$=1;d$.length;)d$.length>$&&d$.sort(b3),_=d$.shift(),$=d$.length,C9(_)}finally{d$.length=_1.__r=0}}function T3(_,$,j,Z,N,z,K,X,L,q,B){var G,F,b,g,u,f,w,H=Z&&Z.__k||e2,I=$.length;for(L=T9(j,$,H,L,I),G=0;G<I;G++)(b=j.__k[G])!=null&&(F=b.__i!=-1&&H[b.__i]||t2,b.__i=G,f=m1(_,b,F,N,z,K,X,L,q,B),g=b.__e,b.ref&&F.ref!=b.ref&&(F.ref&&g1(F.ref,null,b),B.push(b.ref,b.__c||g,b)),u==null&&g!=null&&(u=g),(w=!!(4&b.__u))||F.__k===b.__k?L=S3(b,L,_,w):typeof b.type=="function"&&f!==void 0?L=f:g&&(L=g.nextSibling),b.__u&=-7);return j.__e=u,L}function T9(_,$,j,Z,N){var z,K,X,L,q,B=j.length,G=B,F=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=s2(null,K,null,null,null):j1(K)?K=_.__k[z]=s2(Z1,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=s2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,L=z+F,K.__=_,K.__b=_.__b+1,X=null,(q=K.__i=S9(K,j,L,G))!=-1&&(G--,(X=j[q])&&(X.__u|=2)),X==null||X.__v==null?(q==-1&&(N>B?F--:N<B&&F++),typeof K.type!="function"&&(K.__u|=4)):q!=L&&(q==L-1?F--:q==L+1?F++:(q>L?F--:F++,K.__u|=4))):_.__k[z]=null;if(G)for(z=0;z<B;z++)(X=j[z])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=H2(X)),v3(X,X));return Z}function S3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=S3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=H2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function S9(_,$,j,Z){var N,z,K,X=_.key,L=_.type,q=$[j],B=q!=null&&(2&q.__u)==0;if(q===null&&X==null||B&&X==q.key&&L==q.type)return j;if(Z>(B?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((q=$[K=N>=0?N--:z++])!=null&&(2&q.__u)==0&&X==q.key&&L==q.type)return K}return-1}function O3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||I9.test($)?j:j+"px"}function o2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||O3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||O3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(x3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=v1,_.addEventListener($,z?S1:T1,z)):_.removeEventListener($,z?S1:T1,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function U3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=v1++;else if($.t<j.u)return;return j(t_.event?t_.event($):$)}}}function m1(_,$,j,Z,N,z,K,X,L,q){var B,G,F,b,g,u,f,w,H,I,x,i,t,j_,n,Z_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),z=[X=$.__e=j.__e]),(B=t_.__b)&&B($);_:if(typeof Z_=="function")try{if(w=$.props,H=Z_.prototype&&Z_.prototype.render,I=(B=Z_.contextType)&&Z[B.__c],x=B?I?I.props.value:B.__:Z,j.__c?f=(G=$.__c=j.__c).__=G.__E:(H?$.__c=G=new Z_(w,x):($.__c=G=new r2(w,x),G.constructor=Z_,G.render=R9),I&&I.sub(G),G.state||(G.state={}),G.__n=Z,F=G.__d=!0,G.__h=[],G._sb=[]),H&&G.__s==null&&(G.__s=G.state),H&&Z_.getDerivedStateFromProps!=null&&(G.__s==G.state&&(G.__s=b$({},G.__s)),b$(G.__s,Z_.getDerivedStateFromProps(w,G.__s))),b=G.props,g=G.state,G.__v=$,F)H&&Z_.getDerivedStateFromProps==null&&G.componentWillMount!=null&&G.componentWillMount(),H&&G.componentDidMount!=null&&G.__h.push(G.componentDidMount);else{if(H&&Z_.getDerivedStateFromProps==null&&w!==b&&G.componentWillReceiveProps!=null&&G.componentWillReceiveProps(w,x),$.__v==j.__v||!G.__e&&G.shouldComponentUpdate!=null&&G.shouldComponentUpdate(w,G.__s,x)===!1){$.__v!=j.__v&&(G.props=w,G.state=G.__s,G.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(h){h&&(h.__=$)}),e2.push.apply(G.__h,G._sb),G._sb=[],G.__h.length&&K.push(G);break _}G.componentWillUpdate!=null&&G.componentWillUpdate(w,G.__s,x),H&&G.componentDidUpdate!=null&&G.__h.push(function(){G.componentDidUpdate(b,g,u)})}if(G.context=x,G.props=w,G.__P=_,G.__e=!1,i=t_.__r,t=0,H)G.state=G.__s,G.__d=!1,i&&i($),B=G.render(G.props,G.state,G.context),e2.push.apply(G.__h,G._sb),G._sb=[];else do G.__d=!1,i&&i($),B=G.render(G.props,G.state,G.context),G.state=G.__s;while(G.__d&&++t<25);G.state=G.__s,G.getChildContext!=null&&(Z=b$(b$({},Z),G.getChildContext())),H&&!F&&G.getSnapshotBeforeUpdate!=null&&(u=G.getSnapshotBeforeUpdate(b,g)),j_=B!=null&&B.type===Z1&&B.key==null?R3(B.props.children):B,X=T3(_,j1(j_)?j_:[j_],$,j,Z,N,z,K,X,L,q),G.base=$.__e,$.__u&=-161,G.__h.length&&K.push(G),f&&(G.__E=G.__=null)}catch(h){if($.__v=null,L||z!=null)if(h.then){for($.__u|=L?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;z[z.indexOf(X)]=null,$.__e=X}else{for(n=z.length;n--;)u1(z[n]);f1($)}else $.__e=j.__e,$.__k=j.__k,h.then||f1($);t_.__e(h,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=f9(j.__e,$,j,Z,N,z,K,L,q);return(B=t_.diffed)&&B($),128&$.__u?void 0:X}function f1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(f1))}function f3(_,$,j){for(var Z=0;Z<j.length;Z++)g1(j[Z],j[++Z],j[++Z]);t_.__c&&t_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){t_.__e(z,N.__v)}})}function R3(_){return typeof _!="object"||_==null||_.__b>0?_:j1(_)?_.map(R3):b$({},_)}function f9(_,$,j,Z,N,z,K,X,L){var q,B,G,F,b,g,u,f=j.props||t2,w=$.props,H=$.type;if(H=="svg"?N="http://www.w3.org/2000/svg":H=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(q=0;q<z.length;q++)if((b=z[q])&&"setAttribute"in b==!!H&&(H?b.localName==H:b.nodeType==3)){_=b,z[q]=null;break}}if(_==null){if(H==null)return document.createTextNode(w);_=document.createElementNS(N,H,w.is&&w),X&&(t_.__m&&t_.__m($,z),X=!1),z=null}if(H==null)f===w||X&&_.data==w||(_.data=w);else{if(z=z&&$1.call(_.childNodes),!X&&z!=null)for(f={},q=0;q<_.attributes.length;q++)f[(b=_.attributes[q]).name]=b.value;for(q in f)b=f[q],q=="dangerouslySetInnerHTML"?G=b:q=="children"||(q in w)||q=="value"&&("defaultValue"in w)||q=="checked"&&("defaultChecked"in w)||o2(_,q,null,b,N);for(q in w)b=w[q],q=="children"?F=b:q=="dangerouslySetInnerHTML"?B=b:q=="value"?g=b:q=="checked"?u=b:X&&typeof b!="function"||f[q]===b||o2(_,q,b,f[q],N);if(B)X||G&&(B.__html==G.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(G&&(_.innerHTML=""),T3($.type=="template"?_.content:_,j1(F)?F:[F],$,j,Z,H=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&H2(j,0),X,L),z!=null)for(q=z.length;q--;)u1(z[q]);X||(q="value",H=="progress"&&g==null?_.removeAttribute("value"):g!=null&&(g!==_[q]||H=="progress"&&!g||H=="option"&&g!=f[q])&&o2(_,q,g,f[q],N),q="checked",u!=null&&u!=_[q]&&o2(_,q,u,f[q],N))}return _}function g1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){t_.__e(N,j)}}function v3(_,$,j){var Z,N;if(t_.unmount&&t_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||g1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){t_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&v3(Z[N],$,j||typeof _.type!="function");j||u1(_.__e),_.__c=_.__=_.__e=void 0}function R9(_,$,j){return this.constructor(_,j)}function u3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),t_.__&&t_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],m1($,_=(!Z&&j||$).__k=I3(Z1,null,[_]),N||t2,t2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?$1.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),f3(z,_,K)}$1=e2.slice,t_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(X){_=X}throw _}},P3=0,b9=function(_){return _!=null&&_.constructor===void 0},r2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=b$({},this.state),typeof _=="function"&&(_=_(b$({},j),this.props)),_&&b$(j,_),_!=null&&this.__v&&($&&this._sb.push($),Q3(this))},r2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Q3(this))},r2.prototype.render=Z1,d$=[],M3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b3=function(_,$){return _.__v.__b-$.__v.__b},_1.__r=0,x3=/(PointerCapture)$|Capture$/i,v1=0,T1=U3(!1),S1=U3(!0),x9=0;var x2,L0,C1,F3,I2=0,m3=[],q0=t_,H3=q0.__b,J3=q0.__r,D3=q0.diffed,E3=q0.__c,y3=q0.unmount,k3=q0.__;function p1(_,$){q0.__h&&q0.__h(L0,_,I2||$),I2=0;var j=L0.__H||(L0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function S(_){return I2=1,v9(p3,_)}function v9(_,$,j){var Z=p1(x2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):p3(void 0,$),function(X){var L=Z.__N?Z.__N[0]:Z.__[0],q=Z.t(L,X);L!==q&&(Z.__N=[q,Z.__[1]],Z.__c.setState({}))}],Z.__c=L0,!L0.__f)){var N=function(X,L,q){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(F){return F.__c});if(B.every(function(F){return!F.__N}))return!z||z.call(this,X,L,q);var G=Z.__c.props!==X;return B.some(function(F){if(F.__N){var b=F.__[0];F.__=F.__N,F.__N=void 0,b!==F.__[0]&&(G=!0)}}),z&&z.call(this,X,L,q)||G};L0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=L0;L0.componentWillUpdate=function(X,L,q){if(this.__e){var B=z;z=void 0,N(X,L,q),z=B}K&&K.call(this,X,L,q)},L0.shouldComponentUpdate=N}return Z.__N||Z.__}function R(_,$){var j=p1(x2++,3);!q0.__s&&g3(j.__H,$)&&(j.__=_,j.u=$,L0.__H.__h.push(j))}function y(_){return I2=5,i_(function(){return{current:_}},[])}function i_(_,$){var j=p1(x2++,7);return g3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function M(_,$){return I2=8,i_(function(){return _},$)}function u9(){for(var _;_=m3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(a2),$.__h.some(R1),$.__h=[]}catch(j){$.__h=[],q0.__e(j,_.__v)}}}q0.__b=function(_){L0=null,H3&&H3(_)},q0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),k3&&k3(_,$)},q0.__r=function(_){J3&&J3(_),x2=0;var $=(L0=_.__c).__H;$&&(C1===L0?($.__h=[],L0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(a2),$.__h.some(R1),$.__h=[],x2=0)),C1=L0},q0.diffed=function(_){D3&&D3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(m3.push($)!==1&&F3===q0.requestAnimationFrame||((F3=q0.requestAnimationFrame)||m9)(u9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),C1=L0=null},q0.__c=function(_,$){$.some(function(j){try{j.__h.some(a2),j.__h=j.__h.filter(function(Z){return!Z.__||R1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],q0.__e(Z,j.__v)}}),E3&&E3(_,$)},q0.unmount=function(_){y3&&y3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{a2(Z)}catch(N){$=N}}),j.__H=void 0,$&&q0.__e($,j.__v))};var w3=typeof requestAnimationFrame=="function";function m9(_){var $,j=function(){clearTimeout(Z),w3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);w3&&($=requestAnimationFrame(j))}function a2(_){var $=L0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L0=$}function R1(_){var $=L0;_.__c=_.__(),L0=$}function g3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function p3(_,$){return typeof $=="function"?$(_):$}var c3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],X=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=X:K===4?Z[1]=Object.assign(Z[1]||{},X):K===5?(Z[1]=Z[1]||{})[$[++z]]=X:K===6?Z[1][$[++z]]+=X+"":K?(N=_.apply(X,c3(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(X)}return Z},A3=new Map;function g9(_){var $=A3.get(this);return $||($=new Map,A3.set(this,$)),($=c3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",X="",L=[0],q=function(F){z===1&&(F||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,F,K):z===3&&(F||K)?(L.push(3,F,K),z=2):z===2&&K==="..."&&F?L.push(4,F,0):z===2&&K&&!F?L.push(5,0,!0,K):z>=5&&((K||!F&&z===5)&&(L.push(z,0,K,N),z=6),F&&(L.push(z,F,0,N),z=6)),K=""},B=0;B<j.length;B++){B&&(z===1&&q(),q(B));for(var G=0;G<j[B].length;G++)Z=j[B][G],z===1?Z==="<"?(q(),L=[L],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:X?Z===X?X="":K+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(q(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[B][G+1]===">")?(q(),z===3&&(L=L[0]),z=L,(L=L[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(q(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,L=L[0])}return q(),L}(_)),$),arguments,[])).length>1?$:$[0]}var U=g9.bind(I3);var d0={};M9(d0,{uploadWorkspaceFile:()=>z1,uploadMedia:()=>s1,updateWorkspaceFile:()=>j5,submitAdaptiveCardAction:()=>r1,streamSidePrompt:()=>e9,steerAgentQueueItem:()=>t9,setWorkspaceVisibility:()=>R2,setAgentThoughtVisibility:()=>e1,sendPeerAgentMessage:()=>o9,sendAgentMessage:()=>J2,searchPosts:()=>h1,restoreChatBranch:()=>d9,respondToAgentRequest:()=>N1,renameWorkspaceFile:()=>z4,renameChatBranch:()=>l9,removeAgentQueueItem:()=>a9,pruneChatBranch:()=>n9,moveWorkspaceEntry:()=>K4,getWorkspaceTree:()=>f2,getWorkspaceRawUrl:()=>K1,getWorkspaceFile:()=>j4,getWorkspaceDownloadUrl:()=>Y1,getWorkspaceBranch:()=>$5,getTimeline:()=>C2,getThumbnailUrl:()=>_4,getThread:()=>i1,getPostsByHashtag:()=>c1,getMediaUrl:()=>N$,getMediaText:()=>$4,getMediaInfo:()=>D2,getMediaBlob:()=>_5,getChatBranches:()=>i9,getAgents:()=>d1,getAgentThought:()=>t1,getAgentStatus:()=>o1,getAgentQueueState:()=>r9,getAgentModels:()=>S2,getAgentContext:()=>s9,getActiveChatAgents:()=>n1,forkChatBranch:()=>T2,deleteWorkspaceFile:()=>Y4,deletePost:()=>l1,createWorkspaceFile:()=>N4,createReply:()=>h9,createPost:()=>c9,attachWorkspaceFile:()=>Z4,addToWhitelist:()=>a1,SSEClient:()=>W1});async function S_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function h3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function p9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:X}=await j.read();if(X)break;N+=Z.decode(K,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let q of L){let B=h3(q);if(B)$(B.event,B.data)}}N+=Z.decode();let z=h3(N);if(z)$(z.event,z.data)}async function C2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return S_(Z)}async function c1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function h1(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",L=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return S_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${X}${L}`)}async function i1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return S_(`/thread/${_}${j}`)}async function c9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return S_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function h9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function l1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return S_(N,{method:"DELETE"})}async function J2(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return S_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function n1(){return S_("/agent/active-chats")}async function i9(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return S_(`/agent/branches${Z}`)}async function T2(_,$={}){return S_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function l9(_,$={}){return S_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function n9(_){return S_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function d9(_,$={}){return S_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function o9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return S_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function d1(){return S_("/agent/roster")}async function o1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/status${$}`)}async function s9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/context${$}`)}async function r9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/queue-state${$}`)}async function a9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function t9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function S2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/models${$}`)}async function s1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function N1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function r1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function e9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await p9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function a1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function t1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return S_(j)}async function e1(_,$,j){return S_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function N$(_){return`/media/${_}`}function _4(_){return`/media/${_}/thumbnail`}async function D2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function $4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function _5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function f2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return S_(Z)}async function $5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return S_($)}async function j4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return S_(N)}async function j5(_,$){return S_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function Z4(_){return S_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function z1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",X=await fetch(""+K,{method:"POST",body:Z});if(!X.ok){let L=await X.json().catch(()=>({error:"Upload failed"})),q=Error(L.error||`HTTP ${X.status}`);throw q.status=X.status,q.code=L.code,q}return X.json()}async function N4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function z4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function K4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function Y4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return S_($,{method:"DELETE"})}async function R2(_,$=!1){return S_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function K1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function Y1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class W1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function z$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function $0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function E2(_,$=!1){let j=z$(_);if(j===null)return $;return j==="true"}function y2(_,$=null){let j=z$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function G1(_){return String(_||"").trim().toLowerCase()}function W4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return G1($[1]||"")}function i3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=G1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function l3(_,$,j={}){let Z=W4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return i3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return G1(z?.agent_name).startsWith(Z)})}function G4(_){let $=G1(_);return $?`@${$} `:""}function n3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return i3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function d3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function X$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let X=`${_}-file-pill`,L=`${_}-file-name`,q=`${_}-file-remove`,B=K==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${X} title=${j||$} onClick=${N}>
      ${B}
      <span class=${L}>${$}</span>
      ${Z&&U`
        <button
          class=${q}
          onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var Z5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function N5({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${o3(j)} / ${o3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,X=$/100*K,L=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${L}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function o3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function s3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:X,fileRefs:L=[],onRemoveFileRef:q,onClearFileRefs:B,messageRefs:G=[],onRemoveMessageRef:F,onClearMessageRefs:b,activeModel:g=null,modelUsage:u=null,thinkingLevel:f=null,supportsThinking:w=!1,contextUsage:H=null,notificationsEnabled:I=!1,notificationPermission:x="default",onToggleNotifications:i,onModelChange:t,onModelStateChange:j_,activeEditorPath:n=null,onAttachEditorFile:Z_,onOpenFilePill:h,followupQueueItems:V_=[],onInjectQueuedFollowup:n_,onRemoveQueuedFollowup:a,onSubmitIntercept:r,onMessageResponse:N_,onPopOutChat:__,isAgentActive:W_=!1,activeChatAgents:U_=[],currentChatJid:G_="web:default",connectionStatus:D_="connected",onSetFileRefs:B_,onSetMessageRefs:b_,onSubmitError:f_,onSwitchChat:F_,onRenameSession:x_,onCreateSession:m_,onDeleteSession:V0,onRestoreSession:X_}){let[s,O_]=S(""),[z_,I_]=S(""),[R_,g_]=S([]),[K0,p_]=S(!1),[E_,H_]=S([]),[e_,j0]=S(0),[C_,A_]=S(!1),[o_,_0]=S([]),[p0,k0]=S(0),[v_,c_]=S(!1),[k_,B0]=S(!1),[X0,P_]=S(!1),[h_,s_]=S(!1),[u_,U0]=S([]),[T,e]=S(!1),[y_,J_]=S(0),[r_,S0]=S(null),Q_=y(null),b0=y(null),c0=y(null),C$=y(null),v0=y(null),T$=y(null),F0=y(null),H$=y(null),w0=y(0),x0=200,q$=(Q)=>{let P=new Set,Y=[];for(let O of Q||[]){if(typeof O!=="string")continue;let D=O.trim();if(!D||P.has(D))continue;P.add(D),Y.push(D)}return Y},s0=()=>{let Q=z$("piclaw_compose_history");if(!Q)return[];try{let P=JSON.parse(Q);if(!Array.isArray(P))return[];return q$(P)}catch{return[]}},f0=(Q)=>{$0("piclaw_compose_history",JSON.stringify(Q))},s$=y(s0()),H0=y(-1),J$=y(""),Z0=s.trim()||R_.length>0||L.length>0||G.length>0,W$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),L$=typeof window<"u"&&typeof Notification<"u",A0=typeof window<"u"?Boolean(window.isSecureContext):!1,r0=L$&&A0&&x!=="denied",B$=x==="granted"&&I,D$=B$?"Disable notifications":"Enable notifications",S$=R_.length>0||L.length>0||G.length>0,f$=D_==="disconnected"?"Reconnecting":String(D_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Q)=>Q.toUpperCase()),J0=D_==="disconnected"?"Reconnecting":`Connection: ${f$}`,Q$=(Array.isArray(U_)?U_:[]).filter((Q)=>!Q?.archived_at),a0=n3(Q$,{currentChatJid:G_,limit:4}),I0=!j&&d3({footerWidth:y_,visibleAgentCount:a0.length,hasContextIndicator:Boolean(H&&H.percent!=null)}),N0=(()=>{for(let Q of Array.isArray(U_)?U_:[]){let P=typeof Q?.chat_jid==="string"?Q.chat_jid.trim():"";if(P&&P===G_)return Q}return null})(),q2=Boolean(N0&&N0.chat_jid===(N0.root_chat_jid||N0.chat_jid)),C0=(()=>{let Q=new Set,P=[];for(let Y of Array.isArray(U_)?U_:[]){let O=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(!O||O===G_||Q.has(O))continue;if(!(typeof Y?.agent_name==="string"?Y.agent_name.trim():""))continue;Q.add(O),P.push(Y)}return P})(),E$=C0.length>0,G$=E$&&typeof F_==="function",y$=E$&&typeof X_==="function",k$=!j&&typeof x_==="function",R$=!j&&typeof m_==="function",M_=!j&&typeof V0==="function"&&!q2,D0=!j&&(G$||y$||k$||R$||M_),Q0=g||"",w$=w&&f?` (${f})`:"",r$=w$.trim()?`${f}`:"",v$=typeof u?.hint_short==="string"?u.hint_short.trim():"",V$=[r$||null,v$||null].filter(Boolean).join(" • "),u0=[Q0?`Current model: ${Q0}${w$}`:null,u?.plan?`Plan: ${u.plan}`:null,v$||null,u?.primary?.reset_description||null,u?.secondary?.reset_description||null].filter(Boolean),G0=k_?"Switching model…":u0.join(" • ")||`Current model: ${Q0}${w$} (tap to open model picker)`,a_=(Q)=>{if(!Q||typeof Q!=="object")return;let P=Q.model??Q.current;if(typeof j_==="function")j_({model:P??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(P&&typeof t==="function")t(P)},m0=(Q)=>{let P=Q||Q_.current;if(!P)return;P.style.height="auto",P.style.height=`${P.scrollHeight}px`,P.style.overflowY="hidden"},A$=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let Y=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),O=-1;for(let p=0;p<Y.length;p+=1)if(Y[p].trim()==="Files:"&&Y[p+1]&&/^\s*-\s+/.test(Y[p+1])){O=p;break}if(O===-1)return{content:Q,fileRefs:[]};let D=[],E=O+1;for(;E<Y.length;E+=1){let p=Y[E];if(/^\s*-\s+/.test(p))D.push(p.replace(/^\s*-\s+/,"").trim());else if(!p.trim())break;else break}if(D.length===0)return{content:Q,fileRefs:[]};let C=Y.slice(0,O),l=Y.slice(E);return{content:[...C,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:D}},a$=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let Y=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),O=-1;for(let p=0;p<Y.length;p+=1)if(Y[p].trim()==="Referenced messages:"&&Y[p+1]&&/^\s*-\s+/.test(Y[p+1])){O=p;break}if(O===-1)return{content:Q,messageRefs:[]};let D=[],E=O+1;for(;E<Y.length;E+=1){let p=Y[E];if(/^\s*-\s+/.test(p)){let m=p.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(m)D.push(m[1])}else if(!p.trim())break;else break}if(D.length===0)return{content:Q,messageRefs:[]};let C=Y.slice(0,O),l=Y.slice(E);return{content:[...C,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:D}},O$=(Q)=>{let P=A$(Q||""),Y=a$(P.content||"");return{text:Y.content||"",fileRefs:P.fileRefs,messageRefs:Y.messageRefs}},t0=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){A_(!1),H_([]);return}let P=Q.toLowerCase().split(" ")[0];if(P.length<1){A_(!1),H_([]);return}let Y=Z5.filter((O)=>O.name.startsWith(P)||O.name.replace(/-/g,"").startsWith(P.replace(/-/g,"")));if(Y.length>0&&!(Y.length===1&&Y[0].name===P))c_(!1),_0([]),H_(Y),j0(0),A_(!0);else A_(!1),H_([])},P$=(Q)=>{let P=s,Y=P.indexOf(" "),O=Y>=0?P.slice(Y):"",D=Q.name+O;O_(D),A_(!1),H_([]),requestAnimationFrame(()=>{let E=Q_.current;if(!E)return;let C=D.length;E.selectionStart=C,E.selectionEnd=C,E.focus()})},h0=(Q)=>{if(W4(Q)==null){c_(!1),_0([]);return}let P=l3(Q$,Q,{currentChatJid:G_});if(P.length>0&&!(P.length===1&&G4(P[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))A_(!1),H_([]),_0(P),k0(0),c_(!0);else c_(!1),_0([])},O0=(Q)=>{let P=G4(Q?.agent_name);if(!P)return;O_(P),c_(!1),_0([]),requestAnimationFrame(()=>{let Y=Q_.current;if(!Y)return;let O=P.length;Y.selectionStart=O,Y.selectionEnd=O,Y.focus()})},U$=(Q)=>{if(Q?.preventDefault?.(),Q?.stopPropagation?.(),j||!G$&&!y$&&!k$&&!R$&&!M_)return;P_(!1),A_(!1),H_([]),c_(!1),_0([]),s_((P)=>!P)},t$=(Q)=>{let P=typeof Q==="string"?Q.trim():"";if(s_(!1),!P||P===G_){requestAnimationFrame(()=>Q_.current?.focus());return}F_?.(P)},u$=async(Q)=>{let P=typeof Q==="string"?Q.trim():"";if(s_(!1),!P||typeof X_!=="function"){requestAnimationFrame(()=>Q_.current?.focus());return}try{await X_(P)}catch(Y){console.warn("Failed to restore session:",Y),requestAnimationFrame(()=>Q_.current?.focus())}},M$=(Q)=>{let P=typeof Q?.chat_jid==="string"?Q.chat_jid.trim():"";if(P&&typeof F_==="function"){F_(P);return}O0(Q)},m$=async()=>{if(typeof x_!=="function")return;s_(!1);try{await x_()}catch(Q){console.warn("Failed to rename session:",Q)}requestAnimationFrame(()=>Q_.current?.focus())},g$=async()=>{if(typeof m_!=="function")return;s_(!1);try{await m_()}catch(Q){console.warn("Failed to create session:",Q)}requestAnimationFrame(()=>Q_.current?.focus())},e$=async()=>{if(typeof V0!=="function")return;s_(!1);try{await V0(G_)}catch(Q){console.warn("Failed to delete session:",Q)}requestAnimationFrame(()=>Q_.current?.focus())},e0=(Q)=>{if(j)I_(Q);else O_(Q),t0(Q),h0(Q);requestAnimationFrame(()=>m0())},_2=(Q)=>{let P=j?z_:s,Y=P&&!P.endsWith(`
`)?`
`:"",O=`${P}${Y}${Q}`.trimStart();e0(O)},p$=(Q)=>{let P=Q?.command?.model_label;if(P)return P;let Y=Q?.command?.message;if(typeof Y==="string"){let O=Y.match(/•\s+([^\n]+?)\s+\(current\)/);if(O?.[1])return O[1].trim()}return null},q_=async(Q)=>{if(j||k_)return;B0(!0);try{let P=await J2("default",Q,null,[],null,G_),Y=p$(P);a_({model:Y??g??null,thinking_level:P?.command?.thinking_level,supports_thinking:P?.command?.supports_thinking});try{let O=await S2(G_);if(O)a_(O)}catch{}return _?.(),!0}catch(P){return console.error("Failed to switch model:",P),alert("Failed to switch model: "+P.message),!1}finally{B0(!1)}},L2=async()=>{await q_("/cycle-model")},A2=async(Q)=>{if(!Q||k_)return;if(await q_(`/model ${Q}`))P_(!1)},c$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),s_(!1),P_((P)=>!P)},$2=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return W_?"queue":null},h$=async(Q,P,Y={})=>{let{includeMedia:O=!0,includeFileRefs:D=!0,includeMessageRefs:E=!0,clearAfterSubmit:C=!0,recordHistory:l=!0}=Y||{},d=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:s,p=typeof d==="string"?d:"";if(!p.trim()&&(O?R_.length===0:!0)&&(D?L.length===0:!0)&&(E?G.length===0:!0))return;A_(!1),H_([]),c_(!1),_0([]),s_(!1),S0(null);let m=O?[...R_]:[],K_=D?[...L]:[],z0=E?[...G]:[],P0=p.trim();if(l&&P0){let W0=s$.current,T0=q$(W0.filter((N2)=>N2!==P0));if(T0.push(P0),T0.length>200)T0.splice(0,T0.length-200);s$.current=T0,f0(T0),H0.current=-1,J$.current=""}let Y0=()=>{if(O)g_([...m]);if(D)B_?.(K_);if(E)b_?.(z0);O_(P0),requestAnimationFrame(()=>m0())};if(C)O_(""),g_([]),B?.(),b?.();(async()=>{try{if(await r?.({content:P0,submitMode:P,fileRefs:K_,messageRefs:z0,mediaFiles:m})){_?.();return}let T0=[];for(let _$ of m){let F2=await s1(_$);T0.push(F2.id)}let N2=K_.length?`Files:
${K_.map((_$)=>`- ${_$}`).join(`
`)}`:"",n$=z0.length?`Referenced messages:
${z0.map((_$)=>`- message:${_$}`).join(`
`)}`:"",U2=T0.length?`Attachments:
${T0.map((_$,F2)=>{let y1=m[F2]?.name||`attachment-${F2+1}`;return`- attachment:${_$} (${y1})`}).join(`
`)}`:"",E1=[P0,N2,n$,U2].filter(Boolean).join(`

`),z2=await J2("default",E1,null,T0,$2(P),G_);if(N_?.(z2),z2?.command){a_({model:z2.command.model_label??g??null,thinking_level:z2.command.thinking_level,supports_thinking:z2.command.supports_thinking});try{let _$=await S2(G_);if(_$)a_(_$)}catch{}}_?.()}catch(W0){if(C)Y0();let T0=W0?.message||"Failed to send message.";S0(T0),f_?.(T0),console.error("Failed to post:",W0)}})()},P2=(Q)=>{n_?.(Q)},j2=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),I_(""),X?.();return}if(!j&&h_&&Q.key==="Escape"){Q.preventDefault(),s_(!1);return}if(v_&&o_.length>0){let P=Q_.current?.value??(j?z_:s);if(!String(P||"").match(/^@([a-zA-Z0-9_-]*)$/))c_(!1),_0([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),k0((Y)=>(Y+1)%o_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),k0((Y)=>(Y-1+o_.length)%o_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),O0(o_[p0]);return}if(Q.key==="Escape"){Q.preventDefault(),c_(!1),_0([]);return}}}if(C_&&E_.length>0){let P=Q_.current?.value??(j?z_:s);if(!String(P||"").startsWith("/"))A_(!1),H_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),j0((Y)=>(Y+1)%E_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),j0((Y)=>(Y-1+E_.length)%E_.length);return}if(Q.key==="Tab"){Q.preventDefault(),P$(E_[e_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(Q_.current?.value??(j?z_:s)).includes(" ")){Q.preventDefault();let D=E_[e_];A_(!1),H_([]),h$(D.name);return}}if(Q.key==="Escape"){Q.preventDefault(),A_(!1),H_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let P=Q_.current;if(!P)return;let Y=P.value||"",O=P.selectionStart===0&&P.selectionEnd===0,D=P.selectionStart===Y.length&&P.selectionEnd===Y.length;if(Q.key==="ArrowUp"&&O||Q.key==="ArrowDown"&&D){let E=s$.current;if(!E.length)return;Q.preventDefault();let C=H0.current;if(Q.key==="ArrowUp"){if(C===-1)J$.current=Y,C=E.length-1;else if(C>0)C-=1;H0.current=C,e0(E[C]||"")}else{if(C===-1)return;if(C<E.length-1)C+=1,H0.current=C,e0(E[C]||"");else H0.current=-1,e0(J$.current||""),J$.current=""}requestAnimationFrame(()=>{let l=Q_.current;if(!l)return;let d=l.value.length;l.selectionStart=d,l.selectionEnd=d});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let P=Q_.current?.value??(j?z_:s);if(j){if(P.trim())N?.(P.trim(),Z)}else h$(P,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let P=Q_.current?.value??(j?z_:s);if(j){if(P.trim())N?.(P.trim(),Z)}else h$(P)}},Z2=(Q)=>{let P=Array.from(Q||[]).filter((Y)=>Y instanceof File&&!String(Y.name||"").startsWith(".DS_Store"));if(!P.length)return;g_((Y)=>[...Y,...P]),S0(null)},i0=(Q)=>{Z2(Q.target.files),Q.target.value=""},g0=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),w0.current+=1,p_(!0)},i$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),w0.current=Math.max(0,w0.current-1),w0.current===0)p_(!1)},B2=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";p_(!0)},l0=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),w0.current=0,p_(!1),Z2(Q.dataTransfer?.files||[])},F$=(Q)=>{if(j)return;let P=Q.clipboardData?.items;if(!P||!P.length)return;let Y=[];for(let O of P){if(O.kind!=="file")continue;let D=O.getAsFile?.();if(D)Y.push(D)}if(Y.length>0)Q.preventDefault(),Z2(Y)},Q2=(Q)=>{g_((P)=>P.filter((Y,O)=>O!==Q))},l$=()=>{S0(null),g_([]),B?.(),b?.()},O2=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:P,longitude:Y,accuracy:O}=Q.coords,D=`${P.toFixed(5)}, ${Y.toFixed(5)}`,E=Number.isFinite(O)?` ±${Math.round(O)}m`:"",C=`https://maps.google.com/?q=${P},${Y}`,l=`Location: ${D}${E} ${C}`;_2(l)},(Q)=>{let P=Q?.message||"Unable to retrieve location.";alert(`Location error: ${P}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};R(()=>{if(!X0)return;e(!0),S2(G_).then((Q)=>{let P=Array.isArray(Q?.models)?Q.models.filter((Y)=>typeof Y==="string"&&Y.trim().length>0):[];P.sort((Y,O)=>Y.localeCompare(O,void 0,{sensitivity:"base"})),U0(P),a_(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),U0([])}).finally(()=>{e(!1)})},[X0,g]),R(()=>{if(j)P_(!1),s_(!1),A_(!1),H_([]),c_(!1),_0([])},[j]),R(()=>{if(h_&&!D0)s_(!1)},[h_,D0]),R(()=>{if(!X0)return;let Q=(P)=>{let Y=C$.current,O=v0.current,D=P.target;if(Y&&Y.contains(D))return;if(O&&O.contains(D))return;P_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[X0]),R(()=>{if(!h_)return;let Q=(P)=>{let Y=T$.current,O=F0.current,D=P.target;if(Y&&Y.contains(D))return;if(O&&O.contains(D))return;s_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[h_]),R(()=>{let Q=()=>{let E=H$.current?.clientWidth||0;J_((C)=>C===E?C:E)};Q();let P=H$.current,Y=0,O=()=>{if(Y)cancelAnimationFrame(Y);Y=requestAnimationFrame(()=>{Y=0,Q()})},D=null;if(P&&typeof ResizeObserver<"u")D=new ResizeObserver(()=>O()),D.observe(P);if(typeof window<"u")window.addEventListener("resize",O);return()=>{if(Y)cancelAnimationFrame(Y);if(D?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",O)}},[j,g,a0.length,H?.percent]);let n0=(Q)=>{let P=Q.target.value;if(S0(null),h_)s_(!1);m0(Q.target),e0(P)};return R(()=>{requestAnimationFrame(()=>m0())},[s,z_,j]),R(()=>{if(j)return;h0(s)},[Q$,G_,s,j]),U`
        <div class="compose-box">
            ${!j&&V_.length>0&&U`
                <div class="compose-queue-stack">
                    ${V_.map((Q)=>{let P=typeof Q?.content==="string"?Q.content:"",Y=O$(P);if(!Y.text.trim()&&Y.fileRefs.length===0&&Y.messageRefs.length===0)return null;return U`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${P}>
                                    ${Y.text.trim()&&U`
                                        <div class="compose-queue-stack-text">${Y.text}</div>
                                    `}
                                    ${(Y.messageRefs.length>0||Y.fileRefs.length>0)&&U`
                                        <div class="compose-queue-stack-refs">
                                            ${Y.messageRefs.map((O)=>U`
                                                <${X$}
                                                    key=${"queue-msg-"+O}
                                                    prefix="compose"
                                                    label=${"msg:"+O}
                                                    title=${"Message reference: "+O}
                                                    icon="message"
                                                />
                                            `)}
                                            ${Y.fileRefs.map((O)=>{let D=O.split("/").pop()||O;return U`
                                                    <${X$}
                                                        key=${"queue-file-"+O}
                                                        prefix="compose"
                                                        label=${D}
                                                        title=${O}
                                                        onClick=${()=>h?.(O)}
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
                                        onClick=${()=>P2(Q)}
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
                                        onClick=${()=>a?.(Q)}
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
                class=${`compose-input-wrapper${K0?" drag-active":""}`}
                onDragEnter=${g0}
                onDragOver=${B2}
                onDragLeave=${i$}
                onDrop=${l0}
            >
                <div class="compose-input-main">
                    ${r_&&!S$&&U`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${r_}</div>
                    `}
                    ${S$&&U`
                        <div class="compose-file-refs">
                            ${r_&&U`
                                <div class="compose-submit-error" role="status" aria-live="polite">${r_}</div>
                            `}
                            ${G.map((Q)=>{return U`
                                    <${X$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(Q)}
                                    />
                                `})}
                            ${L.map((Q)=>{let P=Q.split("/").pop()||Q;return U`
                                    <${X$}
                                        prefix="compose"
                                        label=${P}
                                        title=${Q}
                                        onClick=${()=>h?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(Q)}
                                    />
                                `})}
                            ${R_.map((Q,P)=>{let Y=Q?.name||`attachment-${P+1}`;return U`
                                    <${X$}
                                        key=${Y+P}
                                        prefix="compose"
                                        label=${Y}
                                        title=${Y}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>Q2(P)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${l$}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof __==="function"&&U`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>__?.()}
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
                        ref=${Q_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?z_:s}
                        onInput=${n0}
                        onKeyDown=${j2}
                        onPaste=${F$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${v_&&o_.length>0&&U`
                        <div class="slash-autocomplete" ref=${c0}>
                            ${o_.map((Q,P)=>U`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${P===p0?" active":""}`}
                                    onMouseDown=${(Y)=>{Y.preventDefault(),O0(Q)}}
                                    onMouseEnter=${()=>k0(P)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${C_&&E_.length>0&&U`
                        <div class="slash-autocomplete" ref=${b0}>
                            ${E_.map((Q,P)=>U`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${P===e_?" active":""}`}
                                    onMouseDown=${(Y)=>{Y.preventDefault(),P$(Q)}}
                                    onMouseEnter=${()=>j0(P)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${X0&&!j&&U`
                        <div class="compose-model-popup" ref=${C$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${T&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!T&&u_.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!T&&u_.map((Q)=>U`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${g===Q?" active":""}`}
                                        onClick=${()=>{A2(Q)}}
                                        disabled=${k_}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{L2()}}
                                    disabled=${k_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${h_&&!j&&U`
                        <div class="compose-model-popup" ref=${T$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${U`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let Q=typeof N0?.agent_name==="string"&&N0.agent_name.trim()?`@${N0.agent_name.trim()}`:G_,P=typeof N0?.chat_jid==="string"&&N0.chat_jid.trim()?N0.chat_jid.trim():G_;return`${Q} — ${P} • current`})()}
                                    </div>
                                `}
                                ${!E$&&U`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${E$&&C0.map((Q)=>{let P=Boolean(Q.archived_at),Y=`@${Q.agent_name} — ${Q.chat_jid}${Q.is_active?" • active":""}${P?" • archived":""}`;return U`
                                        <button
                                            key=${Q.chat_jid}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item${P?" archived":""}`}
                                            onClick=${()=>{if(P){u$(Q.chat_jid);return}t$(Q.chat_jid)}}
                                            disabled=${P?!y$:!G$}
                                            title=${P?"Restore this archived branch":"Switch to this session"}
                                        >
                                            ${Y}
                                        </button>
                                    `})}
                            </div>
                            ${(R$||k$||M_)&&U`
                                <div class="compose-model-popup-actions">
                                    ${R$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{g$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${k$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{m$()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${M_&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{e$()}}
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
                <div class="compose-footer" ref=${H$}>
                    ${!j&&g&&U`
                    <div class="compose-meta-row">
                        ${!j&&g&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${v0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${G0}
                                    aria-label="Open model picker"
                                    onClick=${c$}
                                    disabled=${k_}
                                >
                                    ${k_?"Switching…":Q0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!k_&&V$&&U`
                                        <span class="compose-model-usage-hint" title=${G0}>
                                            ${V$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${I0&&U`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${a0.map((Q)=>U`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>M$(Q)}
                                    title=${`${Q.chat_jid||"Active agent"} — switch to @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&H&&H.percent!=null&&U`
                        <${N5} usage=${H} />
                    `}
                    ${D0&&U`
                        <button
                            ref=${F0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${h_?" active":""}`}
                            onClick=${U$}
                            title=${h_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${h_?"true":"false"}
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
                                onChange=${(Q)=>z?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?X:K}
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
                    ${W$&&!j&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${O2}
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
                    ${r0&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${B$?" active":""}`}
                            onClick=${i}
                            title=${D$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${n&&Z_&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${Z_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${L.includes(n)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${i0} />
                        </label>
                    `}
                    ${(D_!=="connected"||!j)&&U`
                        <div class="compose-send-stack">
                            ${D_!=="connected"&&U`
                                <span class="compose-connection-status connection-status ${D_}" title=${J0}>
                                    ${f$}
                                </span>
                            `}
                            ${!j&&U`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{h$()}}
                                    disabled=${!Z0}
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
    `}var t3="piclaw_theme",q4="piclaw_tint",u2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},e3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},r3={default:{label:"Default",mode:"auto",light:u2,dark:e3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},z5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],Y2={theme:"default",tint:null},_8="light",V4=!1;function L4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function w2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function K5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),X=parseInt(N[3],10);if(![z,K,X].every((q)=>Number.isFinite(q)))return null;let L=`#${[z,K,X].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:X,hex:L}}function $8(_){return w2(_)||K5(_)}function v2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function X4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function Y5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function W5(_){return Y5(_)>0.4?"#000000":"#ffffff"}function j8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function B4(_){return r3[_]||r3.default}function G5(_){return _.mode==="auto"?j8():_.mode}function Z8(_,$){let j=B4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||u2}function N8(_,$,j){let Z=$8($);if(!Z)return _;let N=w2(_.bgPrimary),z=w2(_.bgSecondary),K=w2(_.bgHover),X=w2(_.borderColor);if(!N||!z||!K||!X)return _;let q=w2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:v2(N,Z,0.08),bgSecondary:v2(z,Z,0.12),bgHover:v2(K,Z,0.16),borderColor:v2(X,Z,0.08),accent:Z.hex,accentHover:q?v2(Z,q,0.18):Z.hex}}function V5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=$8(Z),z=N?X4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?X4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?X4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?W5(N):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":X,"--accent-contrast-text":L,"--danger-color":_.danger||u2.danger,"--success-color":_.success||u2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([B,G])=>{if(G)j.style.setProperty(B,G)})}function X5(){if(typeof document>"u")return;let _=document.documentElement;z5.forEach(($)=>_.style.removeProperty($))}function k2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function a3(_){let $=L4(Y2?.theme||"default"),j=Y2?.tint?String(Y2.tint).trim():null,Z=Z8($,_);if($==="default"&&j)Z=N8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?e3.bgPrimary:u2.bgPrimary}function q5(_,$){if(typeof document>"u")return;let j=k2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=k2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",a3("light"));let N=k2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",a3("dark"));let z=k2("msapplication-TileColor");if(z&&_)z.setAttribute("content",_);let K=k2("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let X=k2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function L5(){if(typeof window>"u")return;let _={...Y2,mode:_8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function Q4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=L4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=B4(j),z=G5(N),K=Z8(j,z);Y2={theme:j,tint:Z},_8=z;let X=document.documentElement;X.dataset.theme=z,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=z;let L=K;if(j==="default"&&Z)L=N8(K,Z,z);if(j==="default"&&!Z)X5();else V5(L,z);if(q5(L.bgPrimary,z),L5(),$.persist!==!1)if($0(t3,j),Z)$0(q4,Z);else $0(q4,"")}function V1(){if(B4(Y2.theme).mode!=="auto")return;Q4(Y2,{persist:!1})}function z8(){if(typeof window>"u")return()=>{};let _=L4(z$(t3)||"default"),$=z$(q4),j=$?$.trim():null;if(Q4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!V4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",V1);else if(Z.addListener)Z.addListener(V1);return V4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",V1);else if(Z.removeListener)Z.removeListener(V1);V4=!1}}return()=>{}}function K8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;Q4({theme:j||"default",tint:Z},{persist:!0})}function Y8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return j8()}var X1=/#(\w+)/g,B5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),Q5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),O5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),U5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},F5=new Set(["http:","https:","mailto:",""]);function O4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function W2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!F5.has(Z.protocol))return null;return Z.href}catch{return null}}function W8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let X=K.tagName.toLowerCase();if(!Q5.has(X)){let q=K.parentNode;if(!q)continue;while(K.firstChild)q.insertBefore(K.firstChild,K);q.removeChild(K);continue}let L=U5[X]||new Set;for(let q of Array.from(K.attributes)){let B=q.name.toLowerCase(),G=q.value;if(B.startsWith("on")){K.removeAttribute(q.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(L.has(B)||O5.has(B)){if(B==="href"){let F=W2(G);if(!F)K.removeAttribute(q.name);else if(K.setAttribute(q.name,F),X==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let F=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(G):G,b=W2(F,{allowDataImage:X==="img"});if(!b)K.removeAttribute(q.name);else K.setAttribute(q.name,b)}continue}K.removeAttribute(q.name)}}return j.body.innerHTML}function G8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function q1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=G8(j);if(N===j)break;j=N}return j}function H5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let X of j){if(!z&&X.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&X.trim().match(/^```\s*$/)){let L=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),z=!1,K=[];continue}if(z)K.push(X);else N.push(X)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function J5(_){if(!_)return _;return q1(_,5)}function D5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function E5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function y5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=J5(z);return`<div class="mermaid-container" data-mermaid="${D5(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function V8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var k5={span:new Set(["title","class","lang","dir"])};function w5(_,$){let j=k5[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,z;while(z=N.exec($)){let K=(z[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let X=z[2]??z[3]??z[4]??"";Z.push(` ${K}="${O4(X)}"`)}return Z.join("")}function X8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,X=z.endsWith("/")?z.slice(0,-1).trim():z,[L=""]=X.split(/\s+/,1),q=L.toLowerCase();if(!q||!B5.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;let B=X.slice(L.length).trim(),G=w5(q,B);return`<${q}${G}>`})}function q8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function L8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function A5(_){if(!window.katex)return _;let $=(K)=>G8(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let X=[],L=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let B=X.length;return X.push(q),`@@CODE_BLOCK_${B}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let B=X.length;return X.push(q),`@@CODE_INLINE_${B}@@`}),{html:L,blocks:X}},Z=(K,X)=>{if(!X.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,q)=>{let B=Number(q);return X[B]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,X,L)=>{try{let q=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${X}${q}`}catch(q){return`<span class="math-error" title="${O4(q.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,X,L)=>{if(/\s$/.test(L))return K;try{let q=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${X}${q}`}catch(q){return`${X}<span class="math-error" title="${O4(q.message)}">$${L}$</span>`}}),Z(z,N.blocks)}function P5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(X1.lastIndex=0,!X1.test(K))continue;X1.lastIndex=0;let X=z.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let L=K.split(X1);if(L.length<=1)continue;let q=$.createDocumentFragment();L.forEach((B,G)=>{if(G%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",B),F.textContent=`#${B}`,q.appendChild(F)}else q.appendChild($.createTextNode(B))}),z.parentNode?.replaceChild(q,z)}return $.body.innerHTML}function M5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function o0(_,$,j={}){if(!_)return"";let Z=M5(_),{text:N,blocks:z}=H5(Z),K=q1(N,2),L=V8(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=X8(L),B=window.marked?marked.parse(q,{headerIds:!1,mangle:!1}):q.replace(/\n/g,"<br>");return B=q8(B),B=L8(B),B=A5(B),B=P5(B),B=y5(B,z),B=W8(B,j),B}function L1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=q1($,2),N=V8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=X8(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=q8(K),K=L8(K),K=W8(K),K}function b5(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,z)=>{let K=N.trim().split(/\s+/).map((L)=>{let[q,B]=L.split(",").map(Number);return{x:q,y:B}});if(K.length<3)return`<polyline${Z}points="${N}"${z}/>`;let X=[`M ${K[0].x},${K[0].y}`];for(let L=1;L<K.length-1;L++){let q=K[L-1],B=K[L],G=K[L+1],F=B.x-q.x,b=B.y-q.y,g=G.x-B.x,u=G.y-B.y,f=Math.sqrt(F*F+b*b),w=Math.sqrt(g*g+u*u),H=Math.min($,f/2,w/2);if(H<0.5){X.push(`L ${B.x},${B.y}`);continue}let I=B.x-F/f*H,x=B.y-b/f*H,i=B.x+g/w*H,t=B.y+u/w*H,n=F*u-b*g>0?1:0;X.push(`L ${I},${x}`),X.push(`A ${H},${H} 0 0 ${n} ${i},${t}`)}return X.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${Z}d="${X.join(" ")}"${z}/>`})}async function x$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=Y8()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let X=K.dataset.mermaid,L=E5(X||""),q=q1(L,2),B=await $(q,{...N,transparent:!0});B=b5(B),K.innerHTML=B,K.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${X.message}`,K.innerHTML="",K.appendChild(L),K.removeAttribute("data-mermaid")}}function B8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function Q8(_){return String(_||"").trim()||"web:default"}function O8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function U8(_){if(!_)return!1;return _.status!=="running"}function F8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function H8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=y(null),z=y(null),K=_?.thinking?L1(_.thinking):"",X=_?.answer?o0(_.answer,null,{sanitize:!1}):"";if(R(()=>{if(N.current&&K)x$(N.current).catch(()=>{})},[K]),R(()=>{if(z.current&&X)x$(z.current).catch(()=>{})},[X]),!_)return null;let L=_.status==="running",q=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),G=O8(_),F=U8(_),b=!L&&q,g=L?"Thinking…":_.status==="error"?"Error":"Done";return U`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${g}</span>
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
            ${B&&U`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${G&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${F&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!b}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var J8="PiClaw";function U4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,X=z[K],L=Z.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",B=q?q:null,G=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:X,image:B||(G?"/static/icon-192.png":null)}}function D8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function E8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function y8(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",X=z?.dataset?.tint||"",L=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(L&&(X||K&&K!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function x5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function m2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function k8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return m2(_)?"Compacting context":"Working..."}function I5(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function w8(_,$=Date.now()){let j=x5(_);if(j===null)return null;return I5(Math.max(0,$-j))}function A8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:X,onPanelToggle:L}){let G=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let R_=s,g_=R_?R_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:R_,totalLines:g_,fullText:R_}}let O_=s.text||"",z_=s.fullText||s.full_text||O_,I_=Number.isFinite(s.totalLines)?s.totalLines:z_?z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O_,totalLines:I_,fullText:z_}},F=160,b=(s)=>String(s||"").replace(/<\/?internal>/gi,""),g=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},u=(s,O_,z_)=>{let I_=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!I_)return{text:"",omitted:0,totalLines:Number.isFinite(z_)?z_:0,visibleLines:0};let R_=I_.split(`
`),g_=R_.length>O_?R_.slice(0,O_).join(`
`):I_,K0=Number.isFinite(z_)?z_:R_.reduce((H_,e_)=>H_+g(e_),0),p_=g_?g_.split(`
`).reduce((H_,e_)=>H_+g(e_),0):0,E_=Math.max(K0-p_,0);return{text:g_,omitted:E_,totalLines:K0,visibleLines:p_}},f=G(j),w=G(Z),H=G($),I=Boolean(f.text)||f.totalLines>0,x=Boolean(w.text)||w.totalLines>0,i=Boolean(H.fullText?.trim()||H.text?.trim());if(!_&&!i&&!I&&!x&&!N&&!z)return null;let[t,j_]=S(new Set),[n,Z_]=S(()=>Date.now()),h=(s)=>j_((O_)=>{let z_=new Set(O_),I_=!z_.has(s);if(I_)z_.add(s);else z_.delete(s);if(typeof L==="function")L(s,I_);return z_});R(()=>{j_(new Set)},[K]);let V_=m2(_);R(()=>{if(!V_)return;Z_(Date.now());let s=setInterval(()=>Z_(Date.now()),1000);return()=>clearInterval(s)},[V_,_?.started_at,_?.startedAt]);let n_=_?.turn_id||K,a=y8(n_),r=X?"turn-dot turn-dot-queued":"turn-dot",N_=(s)=>s,__=Boolean(_?.last_activity||_?.lastActivity),W_=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":a,U_=z?.kind||"info",G_=W_(U_),D_=W_(_?.kind||(V_?"warning":"info")),B_="",b_=_?.title,f_=_?.status;if(_?.type==="plan")B_=b_?`Planning: ${b_}`:"Planning...";else if(_?.type==="tool_call")B_=b_?`Running: ${b_}`:"Running tool...";else if(_?.type==="tool_status")B_=b_?`${b_}: ${f_||"Working..."}`:f_||"Working...";else if(_?.type==="error")B_=b_||"Agent error";else B_=b_||f_||"Working...";if(__)B_="Last activity just now";let F_=({panelTitle:s,text:O_,fullText:z_,totalLines:I_,maxLines:R_,titleClass:g_,panelKey:K0})=>{let p_=t.has(K0),E_=z_||O_||"",H_=K0==="thought"||K0==="draft"?b(E_):E_,e_=typeof R_==="number",j0=p_&&e_,C_=e_?u(H_,R_,I_):{text:H_||"",omitted:0,totalLines:Number.isFinite(I_)?I_:0};if(!H_&&!(Number.isFinite(C_.totalLines)&&C_.totalLines>0))return null;let A_=`agent-thinking-body${e_?" agent-thinking-body-collapsible":""}`,o_=e_?`--agent-thinking-collapsed-lines: ${R_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${p_?"true":"false"}
                data-collapsible=${e_?"true":"false"}
                style=${a?`--turn-color: ${a};`:""}
            >
                <div class="agent-thinking-title ${g_||""}">
                    ${a&&U`<span class=${r} aria-hidden="true"></span>`}
                    ${s}
                    ${j0&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>h(K0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${A_}
                    style=${o_}
                    dangerouslySetInnerHTML=${{__html:L1(H_)}}
                />
                ${!p_&&C_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>h(K0)}>
                        ▸ ${C_.omitted} more lines
                    </button>
                `}
                ${p_&&C_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>h(K0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},x_=N?.tool_call?.title,m_=x_?`Awaiting approval: ${x_}`:"Awaiting approval",V0=V_?w8(_,n):null,X_=(s,O_,z_=null)=>{let I_=k8(s);return U`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${O_?`--turn-color: ${O_};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${O_&&U`<span class=${r} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${I_}</span>
                    ${z_&&U`<span class="agent-status-elapsed">${z_}</span>`}
                </div>
                ${s.detail&&U`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `};return U`
        <div class="agent-status-panel">
            ${z&&X_(z,G_)}
            ${_?.type==="intent"&&X_(_,D_,V0)}
            ${N&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${a?`--turn-color: ${a};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${m_}</span>
                </div>
            `}
            ${I&&F_({panelTitle:N_("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${x&&F_({panelTitle:N_("Thoughts"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&F_({panelTitle:N_("Draft"),text:H.text,fullText:H.fullText,totalLines:H.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${__?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${a?`--turn-color: ${a};`:""}>
                    ${a&&U`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!__&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${B_}</span>
                </div>
            `}
        </div>
    `}function P8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",X=Z?.kind||"other",L=Z?.rawInput||{},q=L.command||L.commands&&L.commands[0]||null,B=L.diff||null,G=L.fileName||L.path||null,F=Z?.description||L.description||L.explanation||null,g=(Array.isArray(Z?.locations)?Z.locations:[]).map((I)=>I?.path).filter((I)=>Boolean(I)),u=Array.from(new Set([G,...g].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let f=async(I)=>{try{await N1(j,I,z||null),$()}catch(x){console.error("Failed to respond to agent request:",x)}},w=async()=>{try{await a1(K,`Auto-approved: ${K}`),await N1(j,"approved",z||null),$()}catch(I){console.error("Failed to add to whitelist:",I)}},H=N&&N.length>0;return U`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${K}</div>
                </div>
                ${(F||q||B||u.length>0)&&U`
                    <div class="agent-request-body">
                        ${F&&U`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${u.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${u.map((I,x)=>U`<li key=${x}>${I}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&U`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${B&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?N.map((I)=>U`
                            <button 
                                key=${I.optionId||I.id||String(I)}
                                class="agent-request-btn ${I.kind==="allow_once"||I.kind==="allow_always"?"primary":""}"
                                onClick=${()=>f(I.optionId||I.id||I)}
                            >
                                ${I.name||I.label||I.optionId||I.id||String(I)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>f("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>f("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${w}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function M8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let L=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${q}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${X}`}function g2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function K$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function G2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var C5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),T5=new Set(["text/markdown"]),S5=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),f5=new Set(["application/vnd.jgraph.mxfile"]);function p2(_){return typeof _==="string"?_.trim().toLowerCase():""}function R5(_){let $=p2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function v5(_){let $=p2(_);return!!$&&$.endsWith(".pdf")}function u5(_){let $=p2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function c2(_,$){let j=p2(_);if(R5($)||f5.has(j))return"drawio";if(v5($)||j==="application/pdf")return"pdf";if(u5($)||S5.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(C5.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function b8(_){let $=p2(_);return T5.has($)}function x8(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function m5(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function g5(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function I8(_){return m5(_)||g5(_)}function B1(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function p5(_,$){let j=Math.max(B1(_),B1($)),Z=Math.min(B1(_),B1($));return(j+0.05)/(Z+0.05)}function c5(_,$,j="#ffffff"){let Z=I8(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let X=I8(K);if(!X)continue;let L=p5(Z,X);if(L>z)N=K,z=L}return N}function F4(){let _=getComputedStyle(document.documentElement),$=(g,u)=>{for(let f of g){let w=_.getPropertyValue(f).trim();if(w)return w}return u},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),G=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),b=c5(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:X,good:L,warning:q,attention:B,border:G,fontFamily:F,buttonTextColor:b}}function C8(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:X,border:L,fontFamily:q}=F4();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var h5=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),T8=!1,Q1=null,S8=!1;function H4(_){_.querySelector(".adaptive-card-notice")?.remove()}function i5(_,$,j="error"){H4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function l5(_,$=(j)=>o0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function n5(_=($)=>o0($,null)){return($,j)=>{try{let Z=l5($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function d5(_){if(S8||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=n5(),S8=!0}async function o5(){if(T8)return;if(Q1)return Q1;return Q1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{T8=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),Q1}function s5(){return globalThis.AdaptiveCards}function r5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function a5(_){return h5.has(_)}function D4(_){if(!Array.isArray(_))return[];return _.filter(r5)}function t5(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function J4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>J4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${J4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function e5(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return J4($);return typeof $==="string"?$:String($)}function _7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=e5(K.type,j[K.id],K);for(let[X,L]of Object.entries(K))if(Array.isArray(L)||L&&typeof L==="object")K[X]=Z(L);return K};return Z(_)}function $7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function j7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Z7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=j7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function f8(_,$,j){if(!a5($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await o5()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=s5();d5(Z);let N=new Z.AdaptiveCard,z=F4();N.hostConfig=new Z.HostConfig(C8());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:_7($.payload,K);N.parse(X),N.onExecuteAction=(B)=>{let G=t5(B);if(j?.onAction)H4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(G)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let b=F instanceof Error?F.message:String(F||"Action failed.");i5(_,b||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",G)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let q=Z7($);if(q){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let G=document.createElement("span");if(G.className="adaptive-card-status-label",G.textContent=q.label,B.appendChild(G),q.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=q.detail,B.appendChild(F)}_.appendChild(B)}if(H4(_),_.appendChild(L),q)$7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function h2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>h2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${h2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function R8(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:h2(j)})).filter(($)=>$.value)}function N7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function E4(_){if(!Array.isArray(_))return[];return _.filter(N7)}function v8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=h2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=R8(j).map(({key:z,value:K})=>`${z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function u8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=R8(_.data),Z=j.length>0?j.slice(0,2).map(({key:z,value:K})=>`${z}: ${K}`).join(", "):h2(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function z7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?K$($):null},{label:"Added",value:_?.created_at?G2(_.created_at):null}].filter((Z)=>Z.value)}function K7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let z=N$(_);return`/office-viewer/?url=${encodeURIComponent(z)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function m8({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=i_(()=>c2($?.content_type,Z),[$?.content_type,Z]),z=x8(N),K=i_(()=>b8($?.content_type),[$?.content_type]),[X,L]=S(N==="text"),[q,B]=S(""),[G,F]=S(null),b=y(null),g=i_(()=>z7($),[$]),u=i_(()=>K7(_,Z,N),[_,Z,N]),f=i_(()=>{if(!K||!q)return"";return o0(q)},[K,q]);return R(()=>{let w=(H)=>{if(H.key==="Escape")j()};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[j]),R(()=>{if(!b.current||!f)return;x$(b.current);return},[f]),R(()=>{let w=!1;async function H(){if(N!=="text"){L(!1),F(null);return}L(!0),F(null);try{let I=await $4(_);if(!w)B(I)}catch{if(!w)F("Failed to load text preview.")}finally{if(!w)L(!1)}}return H(),()=>{w=!0}},[_,N]),U`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(w)=>{w.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${u&&U`
                            <a
                                href=${u}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(w)=>w.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${N$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(w)=>w.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${X&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&G&&U`<div class="attachment-preview-state">${G}</div>`}
                    ${!X&&!G&&N==="image"&&U`
                        <img class="attachment-preview-image" src=${N$(_)} alt=${Z} />
                    `}
                    ${!X&&!G&&(N==="pdf"||N==="office"||N==="drawio")&&u&&U`
                        <iframe class="attachment-preview-frame" src=${u} title=${Z}></iframe>
                    `}
                    ${!X&&!G&&N==="drawio"&&U`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!G&&N==="text"&&K&&U`
                        <div
                            ref=${b}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:f}}
                        />
                    `}
                    ${!X&&!G&&N==="text"&&!K&&U`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!X&&!G&&N==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${g.map((w)=>U`
                        <div class="attachment-preview-meta-item" key=${w.label}>
                            <span class="attachment-preview-meta-label">${w.label}</span>
                            <span class="attachment-preview-meta-value">${w.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function g8({src:_,onClose:$}){return R(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function Y7({mediaId:_,onPreview:$}){let[j,Z]=S(null);if(R(()=>{D2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?K$(z):"",L=c2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
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
                        ${K&&U`<span class="file-size">${K}</span>`}
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
                onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function W7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=S(null);R(()=>{if(!Number.isFinite(j))return;D2(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?N$(j):null,L=c2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${z}>
            ${K?U`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${X$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:U`
                    <${X$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function O1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?G2(Z):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&U`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&U`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function G7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?K$(_.size):"",N=_.mime_type||"",z=X7(N),K=W2(_.uri);return U`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&U`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&U`<span>${N}</span>`}
                    ${Z&&U`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function V7({block:_}){let[$,j]=S(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&U`
                ${N&&U`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&U`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(G)=>G.charCodeAt(0))],{type:K||"application/octet-stream"}),q=URL.createObjectURL(L),B=document.createElement("a");B.href=q,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function X7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function q7({preview:_}){let $=W2(_.url),j=W2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return U`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(z)=>z.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function L7(_,$){return typeof _==="string"?_:""}var B7=1800,Q7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,O7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,U7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function F7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function H7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let X=K||"idle";if(z.dataset.copyState=X,X==="success")z.innerHTML=O7,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(X==="error")z.innerHTML=U7,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=Q7,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),K.appendChild(X);let L=async(q)=>{q.preventDefault(),q.stopPropagation();let G=z.querySelector("code")?.textContent||"",F=await F7(G);N(X,F?"success":"error");let b=j.get(X);if(b)clearTimeout(b);let g=setTimeout(()=>{N(X,"idle"),j.delete(X)},B7);j.set(X,g)};X.addEventListener("click",L),Z.push(()=>{X.removeEventListener("click",L);let q=j.get(X);if(q)clearTimeout(q);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function J7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let q=j[z];if(/^\s*-\s+/.test(q))N.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),X=j.slice(z),L=[...K,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function D7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let q=j[z];if(/^\s*-\s+/.test(q)){let G=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(G)N.push(G[1])}else if(!q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),X=j.slice(z),L=[...K,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function E7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1){let B=j[q].trim();if((B==="Images:"||B==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let q=j[z];if(/^\s*-\s+/.test(q)){let B=q.replace(/^\s*-\s+/,"").trim(),G=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(G){let F=G[1],b=(G[2]||"").trim()||F;N.push({id:F,label:b,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),X=j.slice(z),L=[...K,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function y7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function k7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(y7).sort((B,G)=>G.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),X=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),L=[],q;while(q=X.nextNode())L.push(q);for(let B of L){let G=B.nodeValue;if(!G||!N.test(G)){N.lastIndex=0;continue}N.lastIndex=0;let F=B.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let b=G.split(N).filter((u)=>u!=="");if(b.length===0)continue;let g=K.createDocumentFragment();for(let u of b)if(z.test(u)){let f=K.createElement("mark");f.className="search-highlight-term",f.textContent=u,g.appendChild(f)}else g.appendChild(K.createTextNode(u));B.parentNode.replaceChild(g,B)}return K.body.innerHTML}function p8({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:X,userAvatarUrl:L,userAvatarBackground:q,onDelete:B,isThreadReply:G,isThreadPrev:F,isThreadNext:b,isRemoving:g,highlightQuery:u,onFileRef:f}){let[w,H]=S(null),I=y(null),x=_.data,i=x.type==="agent_response",t=X||"You",j_=i?z||J8:t,n=i?U4(z,K,!0):U4(t,L),Z_=typeof q==="string"?q.trim().toLowerCase():"",h=!i&&n.image&&(Z_==="clear"||Z_==="transparent"),V_=i&&Boolean(n.image),n_=`background-color: ${h||V_?"transparent":n.color}`,a=x.content_meta,r=Boolean(a?.truncated),N_=Boolean(a?.preview),__=r&&!N_,W_=r?{originalLength:Number.isFinite(a?.original_length)?a.original_length:x.content?x.content.length:0,maxLength:Number.isFinite(a?.max_length)?a.max_length:0}:null,U_=x.content_blocks||[],G_=x.media_ids||[],D_=L7(x.content,x.link_previews),{content:B_,fileRefs:b_}=J7(D_),{content:f_,messageRefs:F_}=D7(B_),{content:x_,attachments:m_}=E7(f_);D_=x_;let V0=D4(U_),X_=E4(U_),s=V0.length===1&&typeof V0[0]?.fallback_text==="string"?V0[0].fallback_text.trim():"",O_=X_.length===1?v8(X_[0]).trim():"",z_=Boolean(s)&&D_?.trim()===s||Boolean(O_)&&D_?.trim()===O_,I_=Boolean(D_)&&!__&&!z_,R_=typeof u==="string"?u.trim():"",g_=i_(()=>{if(!D_||z_)return"";let T=o0(D_,j);return R_?k7(T,R_):T},[D_,z_,R_]),K0=(T,e)=>{T.stopPropagation(),H(N$(e))},[p_,E_]=S(null),H_=(T)=>{E_(T)},e_=(T)=>{T.stopPropagation(),B?.(_)},j0=(T,e)=>{let y_=new Set;if(!T||e.length===0)return{content:T,usedIds:y_};return{content:T.replace(/attachment:([^\s)"']+)/g,(r_,S0,Q_,b0)=>{let c0=S0.replace(/^\/+/,""),v0=e.find((F0)=>F0.name&&F0.name.toLowerCase()===c0.toLowerCase()&&!y_.has(F0.id))||e.find((F0)=>!y_.has(F0.id));if(!v0)return r_;if(y_.add(v0.id),b0.slice(Math.max(0,Q_-2),Q_)==="](")return`/media/${v0.id}`;return v0.name||"attachment"}),usedIds:y_}},C_=[],A_=[],o_=[],_0=[],p0=[],k0=[],v_=0;if(U_.length>0)U_.forEach((T)=>{if(T?.type==="text"&&T.annotations)k0.push(T.annotations);if(T?.type==="resource_link")_0.push(T);else if(T?.type==="resource")p0.push(T);else if(T?.type==="file"){let e=G_[v_++];if(e)A_.push(e),o_.push({id:e,name:T?.name||T?.filename||T?.title})}else if(T?.type==="image"||!T?.type){let e=G_[v_++];if(e){let y_=typeof T?.mime_type==="string"?T.mime_type:void 0;C_.push({id:e,annotations:T?.annotations,mimeType:y_}),o_.push({id:e,name:T?.name||T?.filename||T?.title})}}});else if(G_.length>0){let T=m_.length>0;G_.forEach((e,y_)=>{let J_=m_[y_]||null;if(o_.push({id:e,name:J_?.label||null}),T)A_.push(e);else C_.push({id:e,annotations:null})})}if(m_.length>0)m_.forEach((T)=>{if(!T?.id)return;let e=o_.find((y_)=>String(y_.id)===String(T.id));if(e&&!e.name)e.name=T.label});let{content:c_,usedIds:k_}=j0(D_,o_);D_=c_;let B0=C_.filter(({id:T})=>!k_.has(T)),X0=A_.filter((T)=>!k_.has(T)),P_=m_.length>0?m_.map((T,e)=>({id:T.id||`attachment-${e+1}`,label:T.label||`attachment-${e+1}`})):o_.map((T,e)=>({id:T.id,label:T.name||`attachment-${e+1}`})),h_=i_(()=>D4(U_),[U_]),s_=i_(()=>E4(U_),[U_]),u_=i_(()=>{return h_.map((T)=>`${T.card_id}:${T.state}`).join("|")},[h_]);R(()=>{if(!I.current)return;return x$(I.current),H7(I.current)},[g_]);let U0=y(null);return R(()=>{if(!U0.current||h_.length===0)return;let T=U0.current;T.innerHTML="";for(let e of h_){let y_=document.createElement("div");T.appendChild(y_),f8(y_,e,{onAction:async(J_)=>{if(J_.type==="Action.OpenUrl"){let r_=W2(J_.url||"");if(!r_)throw Error("Invalid URL");window.open(r_,"_blank","noopener,noreferrer");return}if(J_.type==="Action.Submit"){await r1({post_id:_.id,thread_id:x.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:J_.type,title:J_.title||"",data:J_.data}});return}console.warn("[post] unsupported adaptive card action:",J_.type,J_)}}).catch((J_)=>{console.error("[post] adaptive card render error:",J_),y_.textContent=e.fallback_text||"Card failed to render."})}},[u_,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${i?"agent-post":""} ${G?"thread-reply":""} ${F?"thread-prev":""} ${b?"thread-next":""} ${g?"removing":""}" onClick=${$}>
            <div class="post-avatar ${i?"agent-avatar":""} ${n.image?"has-image":""}" style=${n_}>
                ${n.image?U`<img src=${n.image} alt=${j_} />`:n.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${e_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${j_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(T)=>{if(T.preventDefault(),T.stopPropagation(),Z)Z(_.id)}}>${M8(_.timestamp)}</a>
                </div>
                ${__&&W_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${g2(W_.originalLength)} chars
                            ${W_.maxLength?U` • Display limit: ${g2(W_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${N_&&W_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${g2(W_.maxLength)} of ${g2(W_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(b_.length>0||F_.length>0||P_.length>0)&&U`
                    <div class="post-file-refs">
                        ${F_.map((T)=>{let e=(y_)=>{if(y_.preventDefault(),y_.stopPropagation(),N)N(T,_.chat_jid||null);else{let J_=document.getElementById("post-"+T);if(J_)J_.scrollIntoView({behavior:"smooth",block:"center"}),J_.classList.add("post-highlight"),setTimeout(()=>J_.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${T}`} class="post-msg-pill-link" onClick=${e}>
                                    <${X$}
                                        prefix="post"
                                        label=${"msg:"+T}
                                        title=${"Message "+T}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${b_.map((T)=>{let e=T.split("/").pop()||T;return U`
                                <${X$}
                                    prefix="post"
                                    label=${e}
                                    title=${T}
                                    onClick=${()=>f?.(T)}
                                />
                            `})}
                        ${P_.map((T)=>U`
                            <${W7}
                                key=${T.id}
                                attachment=${T}
                                onPreview=${H_}
                            />
                        `)}
                    </div>
                `}
                ${I_&&U`
                    <div 
                        ref=${I}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:g_}}
                        onClick=${(T)=>{if(T.target.classList.contains("hashtag")){T.preventDefault(),T.stopPropagation();let e=T.target.dataset.hashtag;if(e)j?.(e)}else if(T.target.tagName==="IMG")T.preventDefault(),T.stopPropagation(),H(T.target.src)}}
                    />
                `}
                ${h_.length>0&&U`
                    <div ref=${U0} class="post-adaptive-cards" />
                `}
                ${s_.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${s_.map((T,e)=>{let y_=u8(T),J_=`${T.card_id}-${e}`;return U`
                                <div key=${J_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${y_.title}</span>
                                        </div>
                                    </div>
                                    ${y_.fields.length>0&&U`
                                        <div class="adaptive-card-submission-fields">
                                            ${y_.fields.map((r_)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${r_.key}: ${r_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${r_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${r_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${G2(y_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${k0.length>0&&U`
                    ${k0.map((T,e)=>U`
                        <${O1} key=${e} annotations=${T} />
                    `)}
                `}
                ${B0.length>0&&U`
                    <div class="media-preview">
                        ${B0.map(({id:T,mimeType:e})=>{let J_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?N$(T):_4(T);return U`
                                <img 
                                    key=${T} 
                                    src=${J_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(r_)=>K0(r_,T)}
                                />
                            `})}
                    </div>
                `}
                ${B0.length>0&&U`
                    ${B0.map(({annotations:T},e)=>U`
                        ${T&&U`<${O1} key=${e} annotations=${T} />`}
                    `)}
                `}
                ${X0.length>0&&U`
                    <div class="file-attachments">
                        ${X0.map((T)=>U`
                            <${Y7} key=${T} mediaId=${T} onPreview=${H_} />
                        `)}
                    </div>
                `}
                ${_0.length>0&&U`
                    <div class="resource-links">
                        ${_0.map((T,e)=>U`
                            <div key=${e}>
                                <${G7} block=${T} />
                                <${O1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${p0.length>0&&U`
                    <div class="resource-embeds">
                        ${p0.map((T,e)=>U`
                            <div key=${e}>
                                <${V7} block=${T} />
                                <${O1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${x.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${x.link_previews.map((T,e)=>U`
                            <${q7} key=${e} preview=${T} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${w&&U`<${g8} src=${w} onClose=${()=>H(null)} />`}
        ${p_&&U`
            <${m8}
                mediaId=${p_.mediaId}
                info=${p_.info}
                onClose=${()=>E_(null)}
            />
        `}
    `}function c8({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:X,emptyMessage:L,timelineRef:q,agents:B,user:G,onDeletePost:F,reverse:b=!0,removingPostIds:g,searchQuery:u}){let[f,w]=S(!1),H=y(null),I=typeof IntersectionObserver<"u",x=M(async()=>{if(!j||!$||f)return;w(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{w(!1)}},[$,f,j]),i=M((a)=>{let{scrollTop:r,scrollHeight:N_,clientHeight:__}=a.target,W_=b?N_-__-r:r,U_=Math.max(300,__);if(W_<U_)x()},[b,x]);R(()=>{if(!I)return;let a=H.current,r=q?.current;if(!a||!r)return;let N_=300,__=new IntersectionObserver((W_)=>{for(let U_ of W_){if(!U_.isIntersecting)continue;x()}},{root:r,rootMargin:`${N_}px 0px ${N_}px 0px`,threshold:0});return __.observe(a),()=>__.disconnect()},[I,$,j,q,x]);let t=y(x);if(t.current=x,R(()=>{if(I)return;if(!q?.current)return;let{scrollTop:a,scrollHeight:r,clientHeight:N_}=q.current,__=b?r-N_-a:a,W_=Math.max(300,N_);if(__<W_)t.current?.()},[I,_,$,b,q]),R(()=>{if(!q?.current)return;if(!$||f)return;let{scrollTop:a,scrollHeight:r,clientHeight:N_}=q.current,__=b?r-N_-a:a,W_=Math.max(300,N_);if(r<=N_+1||__<W_)t.current?.()},[_,$,f,b,q]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let j_=_.slice().sort((a,r)=>a.id-r.id),n=(a)=>{let r=a?.data?.thread_id;if(r===null||r===void 0||r==="")return null;let N_=Number(r);return Number.isFinite(N_)?N_:null},Z_=new Map;for(let a=0;a<j_.length;a+=1){let r=j_[a],N_=Number(r?.id),__=n(r);if(__!==null){let W_=Z_.get(__)||{anchorIndex:-1,replyIndexes:[]};W_.replyIndexes.push(a),Z_.set(__,W_)}else if(Number.isFinite(N_)){let W_=Z_.get(N_)||{anchorIndex:-1,replyIndexes:[]};W_.anchorIndex=a,Z_.set(N_,W_)}}let h=new Map;for(let[a,r]of Z_.entries()){let N_=new Set;if(r.anchorIndex>=0)N_.add(r.anchorIndex);for(let __ of r.replyIndexes)N_.add(__);h.set(a,Array.from(N_).sort((__,W_)=>__-W_))}let V_=j_.map((a,r)=>{let N_=n(a);if(N_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let __=h.get(N_);if(!__||__.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let W_=__.indexOf(r);if(W_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:W_>0,hasThreadNext:W_<__.length-1}}),n_=U`<div class="timeline-sentinel" ref=${H}></div>`;return U`
        <div class="timeline ${b?"reverse":"normal"}" ref=${q} onScroll=${i}>
            <div class="timeline-content">
                ${b?n_:null}
                ${j_.map((a,r)=>{let N_=Boolean(a.data?.thread_id&&a.data.thread_id!==a.id),__=g?.has?.(a.id),W_=V_[r]||{};return U`
                    <${p8}
                        key=${a.id}
                        post=${a}
                        isThreadReply=${N_}
                        isThreadPrev=${W_.hasThreadPrev}
                        isThreadNext=${W_.hasThreadNext}
                        isRemoving=${__}
                        highlightQuery=${u}
                        agentName=${D8(a.data?.agent_id,B||{})}
                        agentAvatarUrl=${E8(a.data?.agent_id,B||{})}
                        userName=${G?.name||G?.user_name}
                        userAvatarUrl=${G?.avatar_url||G?.avatarUrl||G?.avatar}
                        userAvatarBackground=${G?.avatar_background||G?.avatarBackground}
                        onClick=${()=>Z?.(a)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${X}
                        onDelete=${F}
                    />
                `})}
                ${b?null:n_}
            </div>
        </div>
    `}class h8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var d_=new h8;var U1=null,y4=null;function w7(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function i8(){if(y4)return Promise.resolve(y4);if(!U1)U1=import(w7()).then((_)=>{return y4=_,_}).catch((_)=>{throw U1=null,_});return U1}class l8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await i8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var k4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new l8(_,$)}};function w4(){i8().catch(()=>{})}var P4="piclaw://terminal";var A7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},P7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},F1=null,A4=null;function M7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function b7(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!M7(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function x7(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!F1)F1=b7(()=>Promise.resolve($.init?.())).catch((j)=>{throw F1=null,j});return await F1,$}async function I7(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!A4)A4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await A4}async function C7(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function T7(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function S7(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function I$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function f7(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function n8(){let _=S7(),$=_?P7:A7,j=I$("--bg-primary",_?"#000000":"#ffffff"),Z=I$("--text-primary",_?"#e7e9ea":"#0f1419"),N=I$("--text-secondary",_?"#71767b":"#536471"),z=I$("--accent-color","#1d9bf0"),K=I$("--danger-color",_?"#ff7b72":"#cf222e"),X=I$("--success-color",_?"#7ee787":"#1a7f37"),L=I$("--bg-hover",_?"#1d1f23":"#e8ebed"),q=I$("--border-color",_?"#2f3336":"#eff3f4"),B=I$("--accent-soft-strong",f7(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:L,red:K,green:X,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class M4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await x7();if(await I7(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:n8()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=n8(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await C7();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(T7($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var b4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new M4(_,$)}},x4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new M4(_,$)}};function o$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function R7(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),q=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,B=[];for(let F of q.split("/")){if(!F||F===".")continue;if(F===".."){if(B.length>0)B.pop();continue}B.push(F)}let G=B.join("/");return`${K1(G)}${z}${K}`}function i2(_){return _?.preview||null}function v7(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function u7(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function m7(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${o$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${o$(K$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${o$(G2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${o$(u7($))}</span>`),Z.push(`<span><strong>extension:</strong> ${o$(v7(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${o$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function g7(_){let $=i2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=m7(_,$);if($.kind==="image"){let Z=$.url||($.path?K1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${o$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=o0($.text||"",null,{rewriteImageSrc:(N)=>R7(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${o$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class I4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=g7(this.context)}getContent(){let _=i2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=i2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var C4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=i2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new I4(_,$)}},T4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return i2(_)||_?.path?1:!1},mount(_,$){return new I4(_,$)}};var p7=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),c7={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},h7={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function o8(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function d8(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class s8{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=o8(j),z=h7[N]||"\uD83D\uDCC4",K=c7[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${d8(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${d8(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let L=X.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class r8{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=o8(_?.path);if(!$||!p7.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new s8(_,$);return new r8(_,$)}};var i7=/\.(csv|tsv)$/i;function a8(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class t8{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${a8(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${a8(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class e8{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!i7.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new t8(_,$);return new e8(_,$)}};var l7=/\.pdf$/i;function n7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class _6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${n7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#pdf-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class $6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!l7.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new _6(_,$);return new $6(_,$)}};var d7=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function v4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class j6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${v4(N)}" alt="${v4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${v4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Z6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!d7.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new j6(_,$);return new Z6(_,$)}};var o7=/\.(mp4|m4v|mov|webm|ogv)$/i;function s7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class N6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${s7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#video-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class z6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m4={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!o7.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new N6(_,$);return new z6(_,$)}};function r7(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function a7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var g4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function K6(_){let $=String(_||"").trim();return $?$:g4}function t7(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function e7(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function _j(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,X,L,q,B,G){try{if(K&&L!=null&&j({filename:K,format:X,data:L,mimeType:q,base64Encoded:Boolean(B),defaultMode:G}))return}catch(F){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",F)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,X,L,q,B,G){try{if(X&&j({filename:X,data:K,mimeType:L,base64Encoded:Boolean(q),mode:B,folderId:G}))return}catch(F){console.warn("[drawio-pane] export intercept failed, falling back to native export",F)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function Y6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${e7(j)}`}class W6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${a7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class G6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=t7(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(_j(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=g4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await Y6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await Y6(_,"image/png");else this.xmlData=K6(await _.text());else if(_.status===404)this.xmlData=g4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?K6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var p4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!r7(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new W6(_,$);return new G6(_,$)}};class V6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var l_=new V6;var H1="workspaceExplorerScale",$j=["compact","default","comfortable"],jj=new Set($j),Zj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function X6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return jj.has(j)?j:$}function c4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Nj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function zj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function h4(_={}){let $=Nj(_),j=_.stored?X6(_.stored,$):$;return zj(j,_)}function q6(_){return Zj[X6(_)]}var Kj=60000,O6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function U6(_,$,j,Z=0,N=[]){if(!j&&O6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)U6(z,$,j,Z+1,N);return N}function L6(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&O6(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function d4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,z=!j||j.length!==Z.length,K=Z.map((X)=>{let L=d4(N.get(X.path),X);if(L!==N.get(X.path))z=!0;return L});return z?{...$,children:K}:_}function l4(_,$,j){if(!_)return _;if(_.path===$)return d4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=l4(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var F6=4,i4=14,Yj=8,Wj=16;function H6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=H6(Z);return _.__bytes=j,j}function J6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=F6)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let X of N){let L=Math.max(0,Number(X?.__bytes??X?.size??0));if(L<=0)continue;if(X.type==="dir")z.push({kind:"dir",node:X,size:L});else z.push({kind:"file",name:X.name,path:X.path,size:L})}z.sort((X,L)=>L.size-X.size);let K=z;if(z.length>i4){let X=z.slice(0,i4-1),L=z.slice(i4-1),q=L.reduce((B,G)=>B+G.size,0);X.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:q}),K=X}return Z.children=K.map((X)=>{if(X.kind==="dir")return J6(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function B6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function D6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function J1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function o4(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,X=z-N>K?N+K:z,L=J1(_,$,Z,N),q=J1(_,$,Z,X),B=J1(_,$,j,X),G=J1(_,$,j,N),F=X-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${F} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,"Z"].join(" ")}var E6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function y6(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(X,L,q,B)=>{let G=Array.isArray(X?.children)?X.children:[];if(!G.length)return;let F=Math.max(0,Number(X.size)||0);if(F<=0)return;let b=q-L,g=L;G.forEach((u,f)=>{let w=Math.max(0,Number(u.size)||0);if(w<=0)return;let H=w/F,I=g,x=f===G.length-1?q:g+b*H;if(g=x,x-I<0.003)return;let i=E6[B];if(i){let t=D6(I,B,j);if(Z.push({key:u.path,path:u.path,label:u.name,size:w,color:t,depth:B,startAngle:I,endAngle:x,innerRadius:i[0],outerRadius:i[1],d:o4(120,120,i[0],i[1],I,x)}),B===1)N.push({key:u.path,name:u.name,size:w,pct:z>0?w/z*100:0,color:t})}if(B<F6)K(u,I,x,B+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function n4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=n4(Z,$);if(N)return N}return null}function k6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=E6[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,X=D6(z,1,Z),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:X,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:o4(120,120,N[0],N[1],z,K)}],legend:[{key:q,name:_,size:j,pct:100,color:X}]}}function Q6(_,$=!1,j=!1){if(!_)return null;let Z=H6(_),N=J6(_,0),z=N.size||Z,{segments:K,legend:X}=y6(N,z,j);if(!K.length&&z>0){let L=k6("[files]",N.path,z,j);K=L.segments,X=L.legend}return{root:N,totalSize:z,segments:K,legend:X,truncated:$,isDarkTheme:j}}function Gj({payload:_}){if(!_)return null;let[$,j]=S(null),[Z,N]=S(_?.root?.path||"."),[z,K]=S(()=>[_?.root?.path||"."]),[X,L]=S(!1);R(()=>{let h=_?.root?.path||".";N(h),K([h]),j(null)},[_?.root?.path,_?.totalSize]),R(()=>{if(!Z)return;L(!0);let h=setTimeout(()=>L(!1),180);return()=>clearTimeout(h)},[Z]);let q=i_(()=>{return n4(_.root,Z)||_.root},[_?.root,Z]),B=q?.size||_.totalSize||0,{segments:G,legend:F}=i_(()=>{let h=y6(q,B,_.isDarkTheme);if(h.segments.length>0)return h;if(B<=0)return h;let V_=q?.children?.length?"Total":"[files]";return k6(V_,q?.path||_?.root?.path||".",B,_.isDarkTheme)},[q,B,_.isDarkTheme,_?.root?.path]),[b,g]=S(G),u=y(new Map),f=y(0);R(()=>{let h=u.current,V_=new Map(G.map((N_)=>[N_.key,N_])),n_=performance.now(),a=220,r=(N_)=>{let __=Math.min(1,(N_-n_)/220),W_=__*(2-__),U_=G.map((G_)=>{let B_=h.get(G_.key)||{startAngle:G_.startAngle,endAngle:G_.startAngle,innerRadius:G_.innerRadius,outerRadius:G_.innerRadius},b_=(V0,X_)=>V0+(X_-V0)*W_,f_=b_(B_.startAngle,G_.startAngle),F_=b_(B_.endAngle,G_.endAngle),x_=b_(B_.innerRadius,G_.innerRadius),m_=b_(B_.outerRadius,G_.outerRadius);return{...G_,d:o4(120,120,x_,m_,f_,F_)}});if(g(U_),__<1)f.current=requestAnimationFrame(r)};if(f.current)cancelAnimationFrame(f.current);return f.current=requestAnimationFrame(r),u.current=V_,()=>{if(f.current)cancelAnimationFrame(f.current)}},[G]);let w=b.length?b:G,H=B>0?K$(B):"0 B",I=q?.name||"",i=(I&&I!=="."?I:"Total")||"Total",t=H,j_=z.length>1,n=(h)=>{if(!h?.path)return;let V_=n4(_.root,h.path);if(!V_||!Array.isArray(V_.children)||V_.children.length===0)return;K((n_)=>[...n_,V_.path]),N(V_.path),j(null)},Z_=()=>{if(!j_)return;K((h)=>{let V_=h.slice(0,-1);return N(V_[V_.length-1]||_?.root?.path||"."),V_}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${w.length}
                data-base-size=${B}>
                ${w.map((h)=>U`
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
                        onClick=${()=>n(h)}
                    >
                        <title>${h.label} — ${K$(h.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${j_?" is-drill":""}`}
                    onClick=${Z_}
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
            ${F.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((h)=>U`
                        <div key=${h.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${h.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${h.name}>${h.name}</span>
                            <span class="workspace-folder-starburst-size">${K$(h.size)}</span>
                            <span class="workspace-folder-starburst-pct">${h.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function Vj({mediaId:_}){let[$,j]=S(null);if(R(()=>{if(!_)return;D2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?K$($.metadata.size):"";return U`
        <a href=${N$(_)} download=${Z} class="file-attachment"
            onClick=${(z)=>z.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&U`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function w6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:z,terminalVisible:K=!1}){let[X,L]=S(null),[q,B]=S(new Set(["."])),[G,F]=S(null),[b,g]=S(null),[u,f]=S(""),[w,H]=S(null),[I,x]=S(null),[i,t]=S(!0),[j_,n]=S(!1),[Z_,h]=S(null),[V_,n_]=S(()=>E2("workspaceShowHidden",!1)),[a,r]=S(!1),[N_,__]=S(null),[W_,U_]=S(null),[G_,D_]=S(null),[B_,b_]=S(!1),[f_,F_]=S(null),[x_,m_]=S(()=>B6()),[V0,X_]=S(()=>h4({stored:z$(H1),...c4()})),[s,O_]=S(!1),z_=y(q),I_=y(""),R_=y(null),g_=y(0),K0=y(new Set),p_=y(null),E_=y(new Map),H_=y(_),e_=y(Z),j0=y(null),C_=y(null),A_=y(null),o_=y(null),_0=y(null),p0=y(null),k0=y("."),v_=y(null),c_=y({path:null,dragging:!1,startX:0,startY:0}),k_=y({path:null,dragging:!1,startX:0,startY:0}),B0=y({path:null,timer:0}),X0=y(!1),P_=y(0),h_=y(new Map),s_=y(null),u_=y(null),U0=y(null),T=y(null),e=y(null),y_=y(null),J_=y(V_),r_=y($),S0=y(j??$),Q_=y(0),b0=y(G_),c0=y(a),C$=y(N_),v0=y(null),T$=y({x:0,y:0}),F0=y(0),H$=y(null),w0=y(G),x0=y(b),q$=y(null),s0=y(null),f0=y(w);H_.current=_,e_.current=Z,R(()=>{z_.current=q},[q]),R(()=>{J_.current=V_},[V_]),R(()=>{r_.current=$},[$]),R(()=>{S0.current=j??$},[j,$]),R(()=>{b0.current=G_},[G_]),R(()=>{if(typeof window>"u")return;let Y=()=>{X_(h4({stored:z$(H1),...c4()}))};Y();let O=()=>Y(),D=()=>Y(),E=(m)=>{if(!m||m.key===null||m.key===H1)Y()};window.addEventListener("resize",O),window.addEventListener("focus",D),window.addEventListener("storage",E);let C=window.matchMedia?.("(pointer: coarse)"),l=window.matchMedia?.("(hover: none)"),d=(m,K_)=>{if(!m)return;if(m.addEventListener)m.addEventListener("change",K_);else if(m.addListener)m.addListener(K_)},p=(m,K_)=>{if(!m)return;if(m.removeEventListener)m.removeEventListener("change",K_);else if(m.removeListener)m.removeListener(K_)};return d(C,O),d(l,O),()=>{window.removeEventListener("resize",O),window.removeEventListener("focus",D),window.removeEventListener("storage",E),p(C,O),p(l,O)}},[]),R(()=>{let Y=(O)=>{let D=O?.detail?.path;if(!D)return;let E=D.split("/"),C=[];for(let l=1;l<E.length;l++)C.push(E.slice(0,l).join("/"));if(C.length)B((l)=>{let d=new Set(l);d.add(".");for(let p of C)d.add(p);return d});F(D),requestAnimationFrame(()=>{let l=document.querySelector(`[data-path="${CSS.escape(D)}"]`);if(l)l.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",Y),()=>window.removeEventListener("workspace-reveal-path",Y)},[]),R(()=>{c0.current=a},[a]),R(()=>{C$.current=N_},[N_]),R(()=>{w0.current=G},[G]),R(()=>{x0.current=b},[b]),R(()=>{f0.current=w},[w]),R(()=>{if(typeof window>"u"||typeof document>"u")return;let Y=()=>m_(B6());Y();let O=window.matchMedia?.("(prefers-color-scheme: dark)"),D=()=>Y();if(O?.addEventListener)O.addEventListener("change",D);else if(O?.addListener)O.addListener(D);let E=typeof MutationObserver<"u"?new MutationObserver(()=>Y()):null;if(E?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)E?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(O?.removeEventListener)O.removeEventListener("change",D);else if(O?.removeListener)O.removeListener(D);E?.disconnect()}},[]),R(()=>{if(!b)return;let Y=_0.current;if(!Y)return;let O=requestAnimationFrame(()=>{try{Y.focus(),Y.select()}catch{}});return()=>cancelAnimationFrame(O)},[b]),R(()=>{if(!s)return;let Y=(D)=>{let E=D?.target;if(!(E instanceof Element))return;if(e.current?.contains(E))return;if(y_.current?.contains(E))return;O_(!1)},O=(D)=>{if(D?.key==="Escape")O_(!1),y_.current?.focus?.()};return document.addEventListener("mousedown",Y),document.addEventListener("touchstart",Y,{passive:!0}),document.addEventListener("keydown",O),()=>{document.removeEventListener("mousedown",Y),document.removeEventListener("touchstart",Y),document.removeEventListener("keydown",O)}},[s]);let s$=async(Y)=>{n(!0),H(null),x(null);try{let O=await j4(Y,20000);H(O)}catch(O){H({error:O.message||"Failed to load preview"})}finally{n(!1)}};j0.current=s$;let H0=async()=>{if(!r_.current)return;try{let Y=await f2("",1,J_.current),O=L6(Y.root,z_.current,J_.current);if(O===I_.current){t(!1);return}if(I_.current=O,R_.current=Y.root,!g_.current)g_.current=requestAnimationFrame(()=>{g_.current=0,L((D)=>d4(D,R_.current)),t(!1)})}catch(Y){h(Y.message||"Failed to load workspace"),t(!1)}},J$=async(Y)=>{if(!Y)return;if(K0.current.has(Y))return;K0.current.add(Y);try{let O=await f2(Y,1,J_.current);L((D)=>l4(D,Y,O.root))}catch(O){h(O.message||"Failed to load workspace")}finally{K0.current.delete(Y)}};C_.current=J$;let Z0=M(()=>{let Y=G;if(!Y)return".";let O=E_.current?.get(Y);if(O&&O.type==="dir")return O.path;if(Y==="."||!Y.includes("/"))return".";let D=Y.split("/");return D.pop(),D.join("/")||"."},[G]),W$=M((Y)=>{let O=Y?.closest?.(".workspace-row");if(!O)return null;let D=O.dataset.path,E=O.dataset.type;if(!D)return null;if(E==="dir")return D;if(D.includes("/")){let C=D.split("/");return C.pop(),C.join("/")||"."}return"."},[]),L$=M((Y)=>{return W$(Y?.target||null)},[W$]),A0=M((Y)=>{b0.current=Y,D_(Y)},[]),R0=M(()=>{let Y=B0.current;if(Y?.timer)clearTimeout(Y.timer);B0.current={path:null,timer:0}},[]),r0=M((Y)=>{if(!Y||Y==="."){R0();return}let O=E_.current?.get(Y);if(!O||O.type!=="dir"){R0();return}if(z_.current?.has(Y)){R0();return}if(B0.current?.path===Y)return;R0();let D=setTimeout(()=>{B0.current={path:null,timer:0},C_.current?.(Y),B((E)=>{let C=new Set(E);return C.add(Y),C})},600);B0.current={path:Y,timer:D}},[R0]),B$=M((Y,O)=>{if(T$.current={x:Y,y:O},F0.current)return;F0.current=requestAnimationFrame(()=>{F0.current=0;let D=v0.current;if(!D)return;let E=T$.current;D.style.transform=`translate(${E.x+12}px, ${E.y+12}px)`})},[]),D$=M((Y)=>{if(!Y)return;let D=(E_.current?.get(Y)?.name||Y.split("/").pop()||Y).trim();if(!D)return;U_({path:Y,label:D})},[]),S$=M(()=>{if(U_(null),F0.current)cancelAnimationFrame(F0.current),F0.current=0;if(v0.current)v0.current.style.transform="translate(-9999px, -9999px)"},[]),f$=M((Y)=>{if(!Y)return".";let O=E_.current?.get(Y);if(O&&O.type==="dir")return O.path;if(Y==="."||!Y.includes("/"))return".";let D=Y.split("/");return D.pop(),D.join("/")||"."},[]),J0=M(()=>{g(null),f("")},[]),Q$=M((Y)=>{if(!Y)return;let D=(E_.current?.get(Y)?.name||Y.split("/").pop()||Y).trim();if(!D||Y===".")return;g(Y),f(D)},[]),a0=M(async()=>{let Y=x0.current;if(!Y)return;let O=(u||"").trim();if(!O){J0();return}let D=E_.current?.get(Y),E=(D?.name||Y.split("/").pop()||Y).trim();if(O===E){J0();return}try{let l=(await z4(Y,O))?.path||Y,d=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(J0(),h(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:Y,newPath:l,type:D?.type||"file"}})),D?.type==="dir")B((p)=>{let m=new Set;for(let K_ of p)if(K_===Y)m.add(l);else if(K_.startsWith(`${Y}/`))m.add(`${l}${K_.slice(Y.length)}`);else m.add(K_);return m});if(F(l),D?.type==="dir")H(null),n(!1),x(null);else j0.current?.(l);C_.current?.(d)}catch(C){h(C?.message||"Failed to rename file")}},[J0,u]),I0=M(async(Y)=>{let E=Y||".";for(let C=0;C<50;C+=1){let d=`untitled${C===0?"":`-${C}`}.md`;try{let m=(await N4(E,d,""))?.path||(E==="."?d:`${E}/${d}`);if(E&&E!==".")B((K_)=>new Set([...K_,E]));F(m),h(null),C_.current?.(E),j0.current?.(m);return}catch(p){if(p?.status===409||p?.code==="file_exists")continue;h(p?.message||"Failed to create file");return}}h("Failed to create file (untitled name already in use).")},[]),N0=M((Y)=>{if(Y?.stopPropagation?.(),B_)return;let O=f$(w0.current);I0(O)},[B_,f$,I0]);R(()=>{if(typeof window>"u")return;let Y=(O)=>{let D=O?.detail?.updates||[];if(!Array.isArray(D)||D.length===0)return;L((p)=>{let m=p;for(let K_ of D){if(!K_?.root)continue;if(!m||K_.path==="."||!K_.path)m=K_.root;else m=l4(m,K_.path,K_.root)}if(m)I_.current=L6(m,z_.current,J_.current);return t(!1),m});let E=w0.current;if(Boolean(E)&&D.some((p)=>{let m=p?.path||"";if(!m||m===".")return!0;return E===m||E.startsWith(`${m}/`)||m.startsWith(`${E}/`)}))h_.current.clear();if(!E||!f0.current)return;let l=E_.current?.get(E);if(l&&l.type==="dir")return;if(D.some((p)=>{let m=p?.path||"";if(!m||m===".")return!0;return E===m||E.startsWith(`${m}/`)}))j0.current?.(E)};return window.addEventListener("workspace-update",Y),()=>window.removeEventListener("workspace-update",Y)},[]),p_.current=H0;let q2=y(()=>{if(typeof window>"u")return;let Y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=S0.current??r_.current,D=document.visibilityState!=="hidden"&&(O||Y.matches&&r_.current);R2(D,J_.current).catch(()=>{})}).current,C0=y(0),E$=y(()=>{if(C0.current)clearTimeout(C0.current);C0.current=setTimeout(()=>{C0.current=0,q2()},250)}).current;R(()=>{if(r_.current)p_.current?.();E$()},[$,j]),R(()=>{p_.current(),q2();let Y=setInterval(()=>p_.current(),Kj),O=y2("previewHeight",null),D=Number.isFinite(O)?Math.min(Math.max(O,80),600):280;if(P_.current=D,A_.current)A_.current.style.setProperty("--preview-height",`${D}px`);let E=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),C=()=>E$();if(E.addEventListener)E.addEventListener("change",C);else if(E.addListener)E.addListener(C);return document.addEventListener("visibilitychange",C),()=>{if(clearInterval(Y),g_.current)cancelAnimationFrame(g_.current),g_.current=0;if(E.removeEventListener)E.removeEventListener("change",C);else if(E.removeListener)E.removeListener(C);if(document.removeEventListener("visibilitychange",C),C0.current)clearTimeout(C0.current),C0.current=0;if(v_.current)clearTimeout(v_.current),v_.current=null;R2(!1,J_.current).catch(()=>{})}},[]);let G$=i_(()=>U6(X,q,V_),[X,q,V_]),y$=i_(()=>new Map(G$.map((Y)=>[Y.node.path,Y.node])),[G$]),k$=i_(()=>q6(V0),[V0]);E_.current=y$;let M_=(G?E_.current.get(G):null)?.type==="dir";R(()=>{if(!G||!M_){F_(null),s_.current=null,u_.current=null;return}let Y=G,O=`${V_?"hidden":"visible"}:${G}`,D=h_.current,E=D.get(O);if(E?.root){D.delete(O),D.set(O,E);let d=Q6(E.root,Boolean(E.truncated),x_);if(d)s_.current=d,u_.current=G,F_({loading:!1,error:null,payload:d});return}let C=s_.current,l=u_.current;F_({loading:!0,error:null,payload:l===G?C:null}),f2(G,Yj,V_).then((d)=>{if(w0.current!==Y)return;let p={root:d?.root,truncated:Boolean(d?.truncated)};D.delete(O),D.set(O,p);while(D.size>Wj){let K_=D.keys().next().value;if(!K_)break;D.delete(K_)}let m=Q6(p.root,p.truncated,x_);s_.current=m,u_.current=G,F_({loading:!1,error:null,payload:m})}).catch((d)=>{if(w0.current!==Y)return;F_({loading:!1,error:d?.message||"Failed to load folder size chart",payload:l===G?C:null})})},[G,M_,V_,x_]);let D0=Boolean(w&&w.kind==="text"&&!M_&&(!w.size||w.size<=262144)),Q0=D0?"Open in editor":w?.size>262144?"File too large to edit":"File is not editable",w$=Boolean(G&&G!=="."),r$=Boolean(G&&!M_),v$=Boolean(G&&!M_),V$=G&&M_?Y1(G,V_):null,u0=M(()=>O_(!1),[]),G0=M(async(Y)=>{u0();try{await Y?.()}catch{}},[u0]);R(()=>{let Y=U0.current;if(T.current)T.current.dispose(),T.current=null;if(!Y)return;if(Y.innerHTML="",!G||M_||!w||w.error)return;let O={path:G,content:typeof w.text==="string"?w.text:void 0,mtime:w.mtime,size:w.size,preview:w,mode:"view"},D=d_.resolve(O)||d_.get("workspace-preview-default");if(!D)return;let E=D.mount(Y,O);return T.current=E,()=>{if(T.current===E)E.dispose(),T.current=null;Y.innerHTML=""}},[G,M_,w]);let a_=(Y)=>{let O=Y?.target;if(O instanceof Element)return O;return O?.parentElement||null},m0=(Y)=>{return Boolean(Y?.closest?.(".workspace-node-icon, .workspace-label-text"))},A$=y((Y)=>{if(s0.current)clearTimeout(s0.current),s0.current=null;let D=a_(Y)?.closest?.("[data-path]");if(!D)return;let E=D.dataset.path;if(D.dataset.type==="dir"||!E)return;if(x0.current===E)J0();e_.current?.(E)}).current,a$=y((Y)=>{if(X0.current){X0.current=!1;return}let O=a_(Y),D=O?.closest?.("[data-path]");if(o_.current?.focus?.(),!D)return;let E=D.dataset.path,C=D.dataset.type,l=Boolean(O?.closest?.(".workspace-caret")),d=Boolean(O?.closest?.("button"))||Boolean(O?.closest?.("a"))||Boolean(O?.closest?.("input")),p=w0.current===E,m=x0.current;if(m){if(m===E)return;J0()}let K_=C==="file"&&q$.current===E&&!l&&!d;if(p&&!l&&!d&&E!=="."&&!K_){if(s0.current)clearTimeout(s0.current);s0.current=setTimeout(()=>{s0.current=null,Q$(E)},350);return}if(C==="dir"){if(q$.current=null,F(E),H(null),x(null),n(!1),!z_.current.has(E))C_.current?.(E);if(p&&!l)return;B((P0)=>{let Y0=new Set(P0);if(Y0.has(E))Y0.delete(E);else Y0.add(E);return Y0})}else{q$.current=null,F(E);let z0=E_.current.get(E);if(z0)H_.current?.(z0.path,z0);j0.current?.(E)}}).current,O$=y(()=>{I_.current="",p_.current(),Array.from(z_.current||[]).filter((O)=>O&&O!==".").forEach((O)=>C_.current?.(O))}).current,t0=y(()=>{q$.current=null,F(null),H(null),x(null),n(!1)}).current,P$=y(()=>{n_((Y)=>{let O=!Y;if(typeof window<"u")$0("workspaceShowHidden",String(O));return J_.current=O,R2(!0,O).catch(()=>{}),I_.current="",p_.current?.(),Array.from(z_.current||[]).filter((E)=>E&&E!==".").forEach((E)=>C_.current?.(E)),O})}).current,h0=y((Y)=>{if(a_(Y)?.closest?.("[data-path]"))return;t0()}).current,O0=M(async(Y)=>{if(!Y)return;let O=Y.split("/").pop()||Y;if(!window.confirm(`Delete "${O}"? This cannot be undone.`))return;try{await Y4(Y);let E=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(w0.current===Y)t0();C_.current?.(E),h(null)}catch(E){H((C)=>({...C||{},error:E.message||"Failed to delete file"}))}},[t0]),U$=M((Y)=>{let O=o_.current;if(!O||!Y||typeof CSS>"u"||typeof CSS.escape!=="function")return;O.querySelector(`[data-path="${CSS.escape(Y)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),t$=M((Y)=>{let O=G$;if(!O||O.length===0)return;let D=G?O.findIndex((E)=>E.node.path===G):-1;if(Y.key==="ArrowDown"){Y.preventDefault();let E=Math.min(D+1,O.length-1),C=O[E];if(!C)return;if(F(C.node.path),C.node.type!=="dir")H_.current?.(C.node.path,C.node),j0.current?.(C.node.path);else H(null),n(!1),x(null);U$(C.node.path);return}if(Y.key==="ArrowUp"){Y.preventDefault();let E=D<=0?0:D-1,C=O[E];if(!C)return;if(F(C.node.path),C.node.type!=="dir")H_.current?.(C.node.path,C.node),j0.current?.(C.node.path);else H(null),n(!1),x(null);U$(C.node.path);return}if(Y.key==="ArrowRight"&&D>=0){let E=O[D];if(E?.node?.type==="dir"&&!q.has(E.node.path))Y.preventDefault(),C_.current?.(E.node.path),B((C)=>new Set([...C,E.node.path]));return}if(Y.key==="ArrowLeft"&&D>=0){let E=O[D];if(E?.node?.type==="dir"&&q.has(E.node.path))Y.preventDefault(),B((C)=>{let l=new Set(C);return l.delete(E.node.path),l});return}if(Y.key==="Enter"&&D>=0){Y.preventDefault();let E=O[D];if(!E)return;let C=E.node.path;if(E.node.type==="dir"){if(!z_.current.has(C))C_.current?.(C);B((d)=>{let p=new Set(d);if(p.has(C))p.delete(C);else p.add(C);return p}),H(null),x(null),n(!1)}else H_.current?.(C,E.node),j0.current?.(C);return}if((Y.key==="Delete"||Y.key==="Backspace")&&D>=0){let E=O[D];if(!E||E.node.type==="dir")return;Y.preventDefault(),O0(E.node.path);return}if(Y.key==="Escape")Y.preventDefault(),t0()},[t0,O0,q,G$,U$,G]),u$=M((Y)=>{let O=a_(Y),D=O?.closest?.(".workspace-row");if(!D)return;let E=D.dataset.type,C=D.dataset.path;if(!C||C===".")return;if(x0.current===C)return;let l=Y?.touches?.[0];if(!l)return;if(c_.current={path:m0(O)?C:null,dragging:!1,startX:l.clientX,startY:l.clientY},E!=="file")return;if(v_.current)clearTimeout(v_.current);v_.current=setTimeout(()=>{if(v_.current=null,c_.current?.dragging)return;O0(C)},600)},[O0]),M$=M(()=>{if(v_.current)clearTimeout(v_.current),v_.current=null;let Y=c_.current;if(Y?.dragging&&Y.path){let O=b0.current||Z0(),D=H$.current;if(typeof D==="function")D(Y.path,O)}c_.current={path:null,dragging:!1,startX:0,startY:0},Q_.current=0,r(!1),__(null),A0(null),R0(),S$()},[Z0,S$,A0,R0]),m$=M((Y)=>{let O=c_.current,D=Y?.touches?.[0];if(!D||!O?.path){if(v_.current)clearTimeout(v_.current),v_.current=null;return}let E=Math.abs(D.clientX-O.startX),C=Math.abs(D.clientY-O.startY),l=E>8||C>8;if(l&&v_.current)clearTimeout(v_.current),v_.current=null;if(!O.dragging&&l)O.dragging=!0,r(!0),__("move"),D$(O.path);if(O.dragging){Y.preventDefault(),B$(D.clientX,D.clientY);let d=document.elementFromPoint(D.clientX,D.clientY),p=W$(d)||Z0();if(b0.current!==p)A0(p);r0(p)}},[W$,Z0,D$,B$,A0,r0]),g$=y((Y)=>{Y.preventDefault();let O=A_.current;if(!O)return;let D=Y.clientY,E=P_.current||280,C=Y.currentTarget;C.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let l=D,d=(m)=>{l=m.clientY;let K_=O.clientHeight-80,z0=Math.min(Math.max(E-(m.clientY-D),80),K_);O.style.setProperty("--preview-height",`${z0}px`),P_.current=z0},p=()=>{let m=O.clientHeight-80,K_=Math.min(Math.max(E-(l-D),80),m);P_.current=K_,C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$0("previewHeight",String(Math.round(K_))),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",p)}).current,e$=y((Y)=>{Y.preventDefault();let O=A_.current;if(!O)return;let D=Y.touches[0];if(!D)return;let E=D.clientY,C=P_.current||280,l=Y.currentTarget;l.classList.add("dragging"),document.body.style.userSelect="none";let d=(m)=>{let K_=m.touches[0];if(!K_)return;m.preventDefault();let z0=O.clientHeight-80,P0=Math.min(Math.max(C-(K_.clientY-E),80),z0);O.style.setProperty("--preview-height",`${P0}px`),P_.current=P0},p=()=>{l.classList.remove("dragging"),document.body.style.userSelect="",$0("previewHeight",String(Math.round(P_.current||C))),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}).current,e0=async()=>{if(!G)return;try{let Y=await Z4(G);if(Y.media_id)x(Y.media_id)}catch(Y){H((O)=>({...O||{},error:Y.message||"Failed to attach"}))}},_2=async()=>{if(!G||M_)return;await O0(G)},p$=(Y)=>{return Array.from(Y?.dataTransfer?.types||[]).includes("Files")},q_=M((Y)=>{if(!p$(Y))return;if(Y.preventDefault(),Q_.current+=1,!c0.current)r(!0);__("upload");let O=L$(Y)||Z0();A0(O),r0(O)},[Z0,L$,A0,r0]),L2=M((Y)=>{if(!p$(Y))return;if(Y.preventDefault(),Y.dataTransfer)Y.dataTransfer.dropEffect="copy";if(!c0.current)r(!0);if(C$.current!=="upload")__("upload");let O=L$(Y)||Z0();if(b0.current!==O)A0(O);r0(O)},[Z0,L$,A0,r0]),A2=M((Y)=>{if(!p$(Y))return;if(Y.preventDefault(),Q_.current=Math.max(0,Q_.current-1),Q_.current===0)r(!1),__(null),A0(null),R0()},[A0,R0]),c$=M(async(Y,O=".")=>{let D=Array.from(Y||[]);if(D.length===0)return;let E=O&&O!==""?O:".",C=E!=="."?E:"workspace root";b_(!0);try{let l=null;for(let d of D)try{l=await z1(d,E)}catch(p){let m=p?.status,K_=p?.code;if(m===409||K_==="file_exists"){let z0=d?.name||"file";if(!window.confirm(`"${z0}" already exists in ${C}. Overwrite?`))continue;l=await z1(d,E,{overwrite:!0})}else throw p}if(l?.path)q$.current=l.path,F(l.path),j0.current?.(l.path);C_.current?.(E)}catch(l){h(l.message||"Failed to upload file")}finally{b_(!1)}},[]),$2=M(async(Y,O)=>{if(!Y)return;let D=E_.current?.get(Y);if(!D)return;let E=O&&O!==""?O:".",C=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(E===C)return;try{let d=(await K4(Y,E))?.path||Y;if(D.type==="dir")B((p)=>{let m=new Set;for(let K_ of p)if(K_===Y)m.add(d);else if(K_.startsWith(`${Y}/`))m.add(`${d}${K_.slice(Y.length)}`);else m.add(K_);return m});if(F(d),D.type==="dir")H(null),n(!1),x(null);else j0.current?.(d);C_.current?.(C),C_.current?.(E)}catch(l){h(l?.message||"Failed to move entry")}},[]);H$.current=$2;let h$=M(async(Y)=>{if(!p$(Y))return;Y.preventDefault(),Q_.current=0,r(!1),__(null),D_(null),R0();let O=Array.from(Y?.dataTransfer?.files||[]);if(O.length===0)return;let D=b0.current||L$(Y)||Z0();await c$(O,D)},[Z0,L$,c$]),P2=M((Y)=>{if(Y?.stopPropagation?.(),B_)return;let O=Y?.currentTarget?.dataset?.uploadTarget||".";k0.current=O,p0.current?.click()},[B_]),j2=M(()=>{if(B_)return;let Y=w0.current,O=Y?E_.current?.get(Y):null;k0.current=O?.type==="dir"?O.path:".",p0.current?.click()},[B_]),Z2=M(()=>{G0(()=>N0(null))},[G0,N0]),i0=M(()=>{G0(()=>j2())},[G0,j2]),g0=M(()=>{G0(()=>O$())},[G0,O$]),i$=M(()=>{G0(()=>P$())},[G0,P$]),B2=M(()=>{if(!G||!D0)return;G0(()=>e_.current?.(G,w))},[G0,G,D0,w]),l0=M(()=>{if(!G||G===".")return;G0(()=>Q$(G))},[G0,G,Q$]),F$=M(()=>{if(!G||M_)return;G0(()=>_2())},[G0,G,M_,_2]),Q2=M(()=>{if(!G||M_)return;G0(()=>e0())},[G0,G,M_,e0]),l$=M(()=>{if(!V$)return;if(u0(),typeof window<"u")window.open(V$,"_blank","noopener")},[u0,V$]),O2=M(()=>{u0(),N?.()},[u0,N]),n0=M(()=>{u0(),z?.()},[u0,z]),Q=M((Y)=>{if(!Y||Y.button!==0)return;let O=Y.currentTarget;if(!O||!O.dataset)return;let D=O.dataset.path;if(!D||D===".")return;if(x0.current===D)return;let E=a_(Y);if(E?.closest?.("button, a, input, .workspace-caret"))return;if(!m0(E))return;Y.preventDefault(),k_.current={path:D,dragging:!1,startX:Y.clientX,startY:Y.clientY};let C=(d)=>{let p=k_.current;if(!p?.path)return;let m=Math.abs(d.clientX-p.startX),K_=Math.abs(d.clientY-p.startY),z0=m>4||K_>4;if(!p.dragging&&z0)p.dragging=!0,X0.current=!0,r(!0),__("move"),D$(p.path),B$(d.clientX,d.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(p.dragging){d.preventDefault(),B$(d.clientX,d.clientY);let P0=document.elementFromPoint(d.clientX,d.clientY),Y0=W$(P0)||Z0();if(b0.current!==Y0)A0(Y0);r0(Y0)}},l=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",l);let d=k_.current;if(d?.dragging&&d.path){let p=b0.current||Z0(),m=H$.current;if(typeof m==="function")m(d.path,p)}k_.current={path:null,dragging:!1,startX:0,startY:0},Q_.current=0,r(!1),__(null),A0(null),R0(),S$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{X0.current=!1},0)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",l)},[W$,Z0,D$,B$,S$,A0,r0,R0]),P=M(async(Y)=>{let O=Array.from(Y?.target?.files||[]);if(O.length===0)return;let D=k0.current||".";if(await c$(O,D),k0.current=".",Y?.target)Y.target.value=""},[c$]);return U`
        <aside
            class=${`workspace-sidebar${a?" workspace-drop-active":""}`}
            data-workspace-scale=${V0}
            ref=${A_}
            onDragEnter=${q_}
            onDragOver=${L2}
            onDragLeave=${A2}
            onDrop=${h$}
        >
            <input type="file" multiple style="display:none" ref=${p0} onChange=${P} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${y_}
                            class=${`workspace-menu-button${s?" active":""}`}
                            onClick=${(Y)=>{Y.stopPropagation(),O_((O)=>!O)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${s?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${s&&U`
                            <div class="workspace-menu-dropdown" ref=${e} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${Z2} disabled=${B_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${i0} disabled=${B_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${g0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${V_?" active":""}`} role="menuitem" onClick=${i$}>
                                    ${V_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${G&&U`<div class="workspace-menu-separator"></div>`}
                                ${G&&!M_&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B2} disabled=${!D0}>Open in editor</button>
                                `}
                                ${w$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l0}>Rename selected</button>
                                `}
                                ${v$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q2}>Download selected file</button>
                                `}
                                ${V$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l$}>Download selected folder (zip)</button>
                                `}
                                ${r$&&U`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${F$}>Delete selected file</button>
                                `}

                                ${(N||z)&&U`<div class="workspace-menu-separator"></div>`}
                                ${N&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${O2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${z&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${n0}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${N0} title="New file" disabled=${B_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${O$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${h0}>
                ${B_&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&U`<div class="workspace-loading">Loading…</div>`}
                ${Z_&&U`<div class="workspace-error">${Z_}</div>`}
                ${X&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${o_}
                        tabIndex="0"
                        onClick=${a$}
                        onDblClick=${A$}
                        onKeyDown=${t$}
                        onTouchStart=${u$}
                        onTouchEnd=${M$}
                        onTouchMove=${m$}
                        onTouchCancel=${M$}
                    >
                        ${G$.map(({node:Y,depth:O})=>{let D=Y.type==="dir",E=Y.path===G,C=Y.path===b,l=D&&q.has(Y.path),d=G_&&Y.path===G_,p=Array.isArray(Y.children)&&Y.children.length>0?Y.children.length:Number(Y.child_count)||0;return U`
                                <div
                                    key=${Y.path}
                                    class=${`workspace-row${E?" selected":""}${d?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+O*k$.indentPx}px`}}
                                    data-path=${Y.path}
                                    data-type=${Y.type}
                                    onMouseDown=${Q}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${D?l?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${D?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${D?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${C?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${_0}
                                                value=${u}
                                                onInput=${(m)=>f(m?.target?.value||"")}
                                                onKeyDown=${(m)=>{if(m.key==="Enter")m.preventDefault(),a0();else if(m.key==="Escape")m.preventDefault(),J0()}}
                                                onBlur=${J0}
                                                onClick=${(m)=>m.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${Y.name}</span></span>`}
                                    ${D&&!l&&p>0&&U`
                                        <span class="workspace-count">${p}</span>
                                    `}
                                    ${D&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${Y.path}
                                            title="Upload files to this folder"
                                            onClick=${P2}
                                            disabled=${B_}
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
            ${G&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${g$} onTouchStart=${e$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${G}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${N0} title="New file" disabled=${B_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!M_&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>D0&&e_.current?.(G,w)}
                                    title=${Q0}
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
                                    onClick=${_2}
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
                            ${M_?U`
                                    <button class="workspace-download" onClick=${j2}
                                        title="Upload files to this folder" disabled=${B_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${Y1(G,V_)}
                                        title="Download folder as zip" onClick=${(Y)=>Y.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${e0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${j_&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${w?.error&&U`<div class="workspace-error">${w.error}</div>`}
                    ${M_&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${f_?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${f_?.error&&U`<div class="workspace-error">${f_.error}</div>`}
                        ${f_?.payload&&f_.payload.segments?.length>0&&U`
                            <${Gj} payload=${f_.payload} />
                        `}
                        ${f_?.payload&&(!f_.payload.segments||f_.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${w&&!w.error&&!M_&&U`
                        <div class="workspace-preview-body" ref=${U0}></div>
                    `}
                    ${I&&U`
                        <div class="workspace-download-card">
                            <${Vj} mediaId=${I} />
                        </div>
                    `}
                </div>
            `}
            ${W_&&U`
                <div class="workspace-drag-ghost" ref=${v0}>${W_.label}</div>
            `}
        </aside>
    `}var Xj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,qj=/\.(csv|tsv)$/i,Lj=/\.pdf$/i,Bj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,A6=/\.drawio(\.xml|\.svg|\.png)?$/i;function P6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:X,previewTabs:L,onToggleDock:q,dockVisible:B}){let[G,F]=S(null),b=y(null);R(()=>{if(!G)return;let H=(I)=>{if(I.type==="keydown"&&I.key!=="Escape")return;F(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[G]),R(()=>{let H=(I)=>{if(I.ctrlKey&&I.key==="Tab"){if(I.preventDefault(),!_.length)return;let x=_.findIndex((i)=>i.id===$);if(I.shiftKey){let i=_[(x-1+_.length)%_.length];j?.(i.id)}else{let i=_[(x+1)%_.length];j?.(i.id)}return}if((I.ctrlKey||I.metaKey)&&I.key==="w"){let x=document.querySelector(".editor-pane");if(x&&x.contains(document.activeElement)){if(I.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let g=M((H,I)=>{if(H.button===1){H.preventDefault(),Z?.(I);return}if(H.button===0)j?.(I)},[j,Z]),u=M((H,I)=>{H.preventDefault(),F({id:I,x:H.clientX,y:H.clientY})},[]),f=M((H)=>{H.preventDefault(),H.stopPropagation()},[]),w=M((H,I)=>{H.preventDefault(),H.stopPropagation(),Z?.(I)},[Z]);if(R(()=>{if(!$||!b.current)return;let H=b.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${b} role="tablist">
            ${_.map((H)=>U`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(I)=>g(I,H.id)}
                    onContextMenu=${(I)=>u(I,H.id)}
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
                        onMouseDown=${f}
                        onClick=${(I)=>w(I,H.id)}
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
            ${q&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${q}
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
        ${G&&U`
            <div class="tab-context-menu" style=${{left:G.x+"px",top:G.y+"px"}}>
                <button onClick=${()=>{Z?.(G.id),F(null)}}>Close</button>
                <button onClick=${()=>{N?.(G.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(G.id),F(null)}}>
                    ${_.find((H)=>H.id===G.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{X(G.id),F(null)}}>
                        ${L?.has(G.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${Xj.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(G.id),I=G.id.split("/").pop()||"document",x="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(I);window.open(x,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${qj.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${Lj.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${Bj.test(G.id)&&!A6.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${A6.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Qj=400,s4=60,M6=220,r4="mdPreviewHeight";function Oj(){try{let _=localStorage.getItem(r4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=s4?$:M6}catch{return M6}}function b6({getContent:_,path:$,onClose:j}){let[Z,N]=S(""),[z,K]=S(Oj),X=y(null),L=y(null),q=y(""),B=y(_);return B.current=_,R(()=>{let b=()=>{let u=B.current?.()||"";if(u===q.current)return;q.current=u;try{let f=o0(u,null,{sanitize:!1});N(f)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};b();let g=setInterval(b,Qj);return()=>clearInterval(g)},[]),R(()=>{if(X.current&&Z)x$(X.current).catch(()=>{})},[Z]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(b)=>{b.preventDefault();let g=b.clientY,u=L.current?.offsetHeight||z,f=L.current?.parentElement,w=f?f.offsetHeight*0.7:500,H=b.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(i)=>{let t=Math.min(Math.max(u-(i.clientY-g),s4),w);K(t)},x=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(r4,String(Math.round(L.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",x)}}
            onTouchStart=${(b)=>{b.preventDefault();let g=b.touches[0];if(!g)return;let u=g.clientY,f=L.current?.offsetHeight||z,w=L.current?.parentElement,H=w?w.offsetHeight*0.7:500,I=b.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let x=(t)=>{let j_=t.touches[0];if(!j_)return;t.preventDefault();let n=Math.min(Math.max(f-(j_.clientY-u),s4),H);K(n)},i=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(r4,String(Math.round(L.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",x),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:z+"px"}}>
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
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function x6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=y(_);z.current=_;let K=y($);K.current=$;let X=y(j);X.current=j;let L=y(Z);L.current=Z,R(()=>{X.current();let q=new W1((G,F)=>z.current(G,F),(G)=>K.current(G),{chatJid:N});q.connect();let B=()=>{q.reconnectIfNeeded();let G=typeof document<"u"?document:null;if(!G||G.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),q.disconnect()}},[N])}function I6(){let[_,$]=S(!1),[j,Z]=S("default"),N=y(!1);R(()=>{let L=E2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),R(()=>{N.current=_},[_]);let z=M(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),K=M(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await z();if(Z(q||"default"),q!=="granted"){N.current=!1,$(!1),$0("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),$0("notificationsEnabled",String(L))},[z]),X=M((L,q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(L,{body:q});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:X}}var l2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function C6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=S(null),[z,K]=S(!1),X=y(!1),L=y(null),q=y(!1),B=y(null),G=y(null),F=y(0);R(()=>{X.current=z},[z]),R(()=>{G.current=Z},[Z]),R(()=>{F.current+=1,G.current=null,B.current=null,q.current=!1,X.current=!1,N(null),K(!1)},[j]);let b=M(async(f=null)=>{let w=F.current;try{if(f){let H=await c1(f,50,0,j);if(w!==F.current)return;N(H.posts),K(!1)}else{let H=await C2(10,null,j);if(w!==F.current)return;N(H.posts),K(H.has_more)}}catch(H){if(w!==F.current)return;console.error("Failed to load posts:",H)}},[j]),g=M(async()=>{let f=F.current;try{let w=await C2(10,null,j);if(f!==F.current)return;N((H)=>{if(!H||H.length===0)return w.posts;return l2([...w.posts,...H])}),K((H)=>H||w.has_more)}catch(w){if(f!==F.current)return;console.error("Failed to refresh timeline:",w)}},[j]),u=M(async(f={})=>{let w=F.current,H=G.current;if(!H||H.length===0)return;if(q.current)return;let{preserveScroll:I=!0,preserveMode:x="top",allowRepeat:i=!1}=f,t=(Z_)=>{if(!I){Z_();return}if(x==="top")$(Z_);else _(Z_)},n=H.slice().sort((Z_,h)=>Z_.id-h.id)[0]?.id;if(!Number.isFinite(n))return;if(!i&&B.current===n)return;q.current=!0,B.current=n;try{let Z_=await C2(10,n,j);if(w!==F.current)return;if(Z_.posts.length>0)t(()=>{N((h)=>l2([...Z_.posts,...h||[]])),K(Z_.has_more)});else K(!1)}catch(Z_){if(w!==F.current)return;console.error("Failed to load more posts:",Z_)}finally{if(w===F.current)q.current=!1}},[j,_,$]);return R(()=>{L.current=u},[u]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:X,loadPosts:b,refreshTimeline:g,loadMore:u,loadMoreRef:L,loadingMoreRef:q,lastBeforeIdRef:B}}function T6(){let[_,$]=S(null),[j,Z]=S({text:"",totalLines:0}),[N,z]=S(""),[K,X]=S({text:"",totalLines:0}),[L,q]=S(null),[B,G]=S(null),[F,b]=S(null),g=y(null),u=y(0),f=y(!1),w=y(""),H=y(""),I=y(null),x=y(null),i=y(null),t=y(null),j_=y(!1),n=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:X,pendingRequest:L,setPendingRequest:q,currentTurnId:B,setCurrentTurnId:G,steerQueuedTurnId:F,setSteerQueuedTurnId:b,lastAgentEventRef:g,lastSilenceNoticeRef:u,isAgentRunningRef:f,draftBufferRef:w,thoughtBufferRef:H,pendingRequestRef:I,stalledPostIdRef:x,currentTurnIdRef:i,steerQueuedTurnIdRef:t,thoughtExpandedRef:j_,draftExpandedRef:n}}function S6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.clientX,b=$.current||280,g=B.currentTarget;g.classList.add("dragging"),G.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,f=(H)=>{u=H.clientX;let I=Math.min(Math.max(b+(H.clientX-F),160),600);G.style.setProperty("--sidebar-width",`${I}px`),$.current=I},w=()=>{let H=Math.min(Math.max(b+(u-F),160),600);$.current=H,g.classList.remove("dragging"),G.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",$0("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,z=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.touches[0];if(!F)return;let b=F.clientX,g=$.current||280,u=B.currentTarget;u.classList.add("dragging"),G.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let f=(H)=>{let I=H.touches[0];if(!I)return;H.preventDefault();let x=Math.min(Math.max(g+(I.clientX-b),160),600);G.style.setProperty("--sidebar-width",`${x}px`),$.current=x},w=()=>{u.classList.remove("dragging"),G.classList.remove("sidebar-resizing"),document.body.style.userSelect="",$0("sidebarWidth",String(Math.round($.current||g))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,K=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.clientX,b=j.current||$.current||280,g=B.currentTarget;g.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,f=(H)=>{u=H.clientX;let I=Math.min(Math.max(b+(H.clientX-F),200),800);G.style.setProperty("--editor-width",`${I}px`),j.current=I},w=()=>{let H=Math.min(Math.max(b+(u-F),200),800);j.current=H,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$0("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,X=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.touches[0];if(!F)return;let b=F.clientX,g=j.current||$.current||280,u=B.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let f=(H)=>{let I=H.touches[0];if(!I)return;H.preventDefault();let x=Math.min(Math.max(g+(I.clientX-b),200),800);G.style.setProperty("--editor-width",`${x}px`),j.current=x},w=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",$0("editorWidth",String(Math.round(j.current||g))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,L=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.clientY,b=Z?.current||200,g=B.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=F,f=(H)=>{u=H.clientY;let I=Math.min(Math.max(b-(H.clientY-F),100),window.innerHeight*0.5);if(G.style.setProperty("--dock-height",`${I}px`),Z)Z.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{let H=Math.min(Math.max(b-(u-F),100),window.innerHeight*0.5);if(Z)Z.current=H;g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$0("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,q=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.touches[0];if(!F)return;let b=F.clientY,g=Z?.current||200,u=B.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let f=(H)=>{let I=H.touches[0];if(!I)return;H.preventDefault();let x=Math.min(Math.max(g-(I.clientY-b),100),window.innerHeight*0.5);if(G.style.setProperty("--dock-height",`${x}px`),Z)Z.current=x;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",$0("dockHeight",String(Math.round(Z?.current||g))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:q}}function f6({onTabClosed:_}={}){let $=y(_);$.current=_;let[j,Z]=S(()=>l_.getTabs()),[N,z]=S(()=>l_.getActiveId()),[K,X]=S(()=>l_.getTabs().length>0);R(()=>{return l_.onChange((x,i)=>{Z(x),z(i),X(x.length>0)})},[]);let[L,q]=S(()=>new Set),B=M((x)=>{q((i)=>{let t=new Set(i);if(t.has(x))t.delete(x);else t.add(x);return t})},[]),G=M((x)=>{q((i)=>{if(!i.has(x))return i;let t=new Set(i);return t.delete(x),t})},[]),F=M((x,i={})=>{if(!x)return;let t={path:x,mode:"edit"};try{if(!d_.resolve(t)){if(!d_.get("editor")){console.warn(`[openEditor] No pane handler for: ${x}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${x}":`,n)}let j_=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;l_.open(x,j_)},[]),b=M(()=>{let x=l_.getActiveId();if(x){let i=l_.get(x);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}l_.close(x),G(x),$.current?.(x)}},[G]),g=M((x)=>{let i=l_.get(x);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}l_.close(x),G(x),$.current?.(x)},[G]),u=M((x)=>{l_.activate(x)},[]),f=M((x)=>{let i=l_.getTabs().filter((n)=>n.id!==x&&!n.pinned),t=i.filter((n)=>n.dirty).length;if(t>0){if(!window.confirm(`${t} unsaved tab${t>1?"s":""} will be closed. Continue?`))return}let j_=i.map((n)=>n.id);l_.closeOthers(x),j_.forEach((n)=>{G(n),$.current?.(n)})},[G]),w=M(()=>{let x=l_.getTabs().filter((j_)=>!j_.pinned),i=x.filter((j_)=>j_.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let t=x.map((j_)=>j_.id);l_.closeAll(),t.forEach((j_)=>{G(j_),$.current?.(j_)})},[G]),H=M((x)=>{l_.togglePin(x)},[]),I=M(()=>{let x=l_.getActiveId();if(x)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:x}}))},[]);return R(()=>{let x=(i)=>{let{oldPath:t,newPath:j_,type:n}=i.detail||{};if(!t||!j_)return;if(n==="dir"){for(let Z_ of l_.getTabs())if(Z_.path===t||Z_.path.startsWith(`${t}/`)){let h=`${j_}${Z_.path.slice(t.length)}`;l_.rename(Z_.id,h)}}else l_.rename(t,j_)};return window.addEventListener("workspace-file-renamed",x),()=>window.removeEventListener("workspace-file-renamed",x)},[]),R(()=>{let x=(i)=>{if(l_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",x),()=>window.removeEventListener("beforeunload",x)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:F,closeEditor:b,handleTabClose:g,handleTabActivate:u,handleTabCloseOthers:f,handleTabCloseAll:w,handleTabTogglePin:H,handleTabTogglePreview:B,revealInExplorer:I}}function a4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var t4=a4("warning",30000),R6=a4("finalize",120000),e4=a4("refresh",30000),v6=30000;function u6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function m6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function g6(_=30000){let[,$]=S(0);R(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function _3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function p6(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function V2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function $3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function c6(_,$={}){if(V2($))return null;if($3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Uj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function h6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function i6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function l6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function n6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function X2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function d6(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Uj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function D1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function j3(_){return String(_||"").trim()||"web:default"}function o6({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function s6(_={}){return V2(_)&&$3(_)}function Fj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Hj(_={},$={}){if(!s6(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Fj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function r6(_={}){if(!s6(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let G of N)$.clearTimeout?.(G);N.clear()},K=()=>{Z=0,Hj({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},L=()=>{X();for(let G of[80,220,420]){let F=$.setTimeout?.(()=>{N.delete(F),X()},G);if(F!=null)N.add(F)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},B=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",L,!0),B?.addEventListener?.("resize",L),B?.addEventListener?.("scroll",L),()=>{z(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",L,!0),B?.removeEventListener?.("resize",L),B?.removeEventListener?.("scroll",L)}}function Jj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Jj($,j)}var Dj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function a6(_){return Dj.has(String(_||"").trim())}function Ej(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function t6(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Ej(_),{detail:Z})),!0}var yj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function e6(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(V2({window:j,navigator:Z}))};N();let K=yj.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of K)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function _9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var z3="piclaw_btw_session";function kj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function wj(){let _=z$(z3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var $9=h1,j9=l1,Aj=d1,Z9=t1,N9=e1,z9=o1,Z3=Y$(d0,"getAgentContext",null),Pj=Y$(d0,"getAgentModels",{current:null,models:[]}),Mj=Y$(d0,"getActiveChatAgents",{chats:[]}),N3=Y$(d0,"getChatBranches",{chats:[]}),bj=Y$(d0,"renameChatBranch",null),xj=Y$(d0,"pruneChatBranch",null),K9=Y$(d0,"restoreChatBranch",null),Ij=Y$(d0,"getAgentQueueState",{count:0}),Cj=Y$(d0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Tj=Y$(d0,"removeAgentQueueItem",{removed:!1}),Sj=Y$(d0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});d_.register(k4);d_.register(T4);d_.register(C4);d_.register(S4);d_.register(f4);d_.register(R4);d_.register(u4);d_.register(m4);d_.register(p4);w4();d_.register(b4);d_.register(x4);function fj({locationParams:_}){let $=i_(()=>{let V=_.get("chat_jid");return V&&V.trim()?V.trim():"web:default"},[_]),j=i_(()=>{let V=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),Z=i_(()=>{let V=(_.get("branch_loader")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),N=i_(()=>{let V=_.get("branch_source_chat_jid");return V&&V.trim()?V.trim():$},[$,_]),[z,K]=S("disconnected"),[X,L]=S(()=>V2()),[q,B]=S(null),[G,F]=S(null),[b,g]=S(!1),[u,f]=S("current"),[w,H]=S([]),[I,x]=S([]),[i,t]=S(null),{agentStatus:j_,setAgentStatus:n,agentDraft:Z_,setAgentDraft:h,agentPlan:V_,setAgentPlan:n_,agentThought:a,setAgentThought:r,pendingRequest:N_,setPendingRequest:__,currentTurnId:W_,setCurrentTurnId:U_,steerQueuedTurnId:G_,setSteerQueuedTurnId:D_,lastAgentEventRef:B_,lastSilenceNoticeRef:b_,isAgentRunningRef:f_,draftBufferRef:F_,thoughtBufferRef:x_,pendingRequestRef:m_,stalledPostIdRef:V0,currentTurnIdRef:X_,steerQueuedTurnIdRef:s,thoughtExpandedRef:O_,draftExpandedRef:z_}=T6(),[I_,R_]=S({}),[g_,K0]=S(null),[p_,E_]=S(null),[H_,e_]=S(!1),[j0,C_]=S(null),[A_,o_]=S([]),[_0,p0]=S([]),[k0,v_]=S(null),[c_,k_]=S([]),[B0,X0]=S(!1),[P_,h_]=S(()=>wj()),s_=i_(()=>A_.find((V)=>V?.chat_jid===$)||null,[A_,$]),u_=i_(()=>_0.find((V)=>V?.chat_jid===$)||s_||null,[s_,_0,$]),U0=u_?.root_chat_jid||s_?.root_chat_jid||$,T=kj(u),[e,y_]=S(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),J_=c_.length,r_=y(new Set),S0=y([]),Q_=y(new Set),b0=y(0),c0=y({inFlight:!1,lastAttemptAt:0,turnId:null});r_.current=new Set(c_.map((V)=>V.row_id)),S0.current=c_;let{notificationsEnabled:C$,notificationPermission:v0,toggleNotifications:T$,notify:F0}=I6(),[H$,w0]=S(()=>new Set),[x0,q$]=S(()=>E2("workspaceOpen",!0)),s0=y(null),{editorOpen:f0,tabStripTabs:s$,tabStripActiveId:H0,previewTabs:J$,openEditor:Z0,closeEditor:W$,handleTabClose:L$,handleTabActivate:A0,handleTabCloseOthers:R0,handleTabCloseAll:r0,handleTabTogglePin:B$,handleTabTogglePreview:D$,revealInExplorer:S$}=f6({onTabClosed:(V)=>s0.current?.(V)}),f$=y(null),J0=y(null),Q$=y(null),a0=y(null),I0=d_.getDockPanes().length>0,[N0,q2]=S(!1),C0=M(()=>q2((V)=>!V),[]),E$=M(()=>{Z0(P4,{label:"Terminal"})},[Z0]),G$=!j&&(f0||I0&&N0);R(()=>{let V=f$.current;if(!V)return;if(J0.current)J0.current.dispose(),J0.current=null;let W=H0;if(!W)return;let J={path:W,mode:"edit"},k=d_.resolve(J)||d_.get("editor");if(!k){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let A=k.mount(V,J);J0.current=A,A.onDirtyChange?.((o)=>{l_.setDirty(W,o)}),A.onSaveRequest?.(()=>{}),A.onClose?.(()=>{W$()});let v=l_.getViewState(W);if(v&&typeof A.restoreViewState==="function")requestAnimationFrame(()=>A.restoreViewState(v));if(typeof A.onViewStateChange==="function")A.onViewStateChange((o)=>{l_.saveViewState(W,o)});return requestAnimationFrame(()=>A.focus()),()=>{if(J0.current===A)A.dispose(),J0.current=null}},[H0,W$]),R(()=>{let V=(W)=>{let J=W.detail?.path;if(J)Z0(J)};return document.addEventListener("office-viewer:open-tab",V),document.addEventListener("drawio:open-tab",V),document.addEventListener("csv-viewer:open-tab",V),document.addEventListener("pdf-viewer:open-tab",V),document.addEventListener("image-viewer:open-tab",V),document.addEventListener("video-viewer:open-tab",V),()=>{document.removeEventListener("office-viewer:open-tab",V),document.removeEventListener("drawio:open-tab",V),document.removeEventListener("csv-viewer:open-tab",V),document.removeEventListener("pdf-viewer:open-tab",V),document.removeEventListener("image-viewer:open-tab",V),document.removeEventListener("video-viewer:open-tab",V)}},[Z0]),R(()=>{let V=Q$.current;if(a0.current)a0.current.dispose(),a0.current=null;if(!V||!I0||!N0)return;let W=d_.getDockPanes()[0];if(!W){V.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=W.mount(V,{mode:"view"});return a0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(a0.current===J)J.dispose(),a0.current=null}},[I0,N0]);let[y$,k$]=S({name:"You",avatar_url:null,avatar_background:null}),R$=y(!1),M_=y(!1),D0=y(null),Q0=y($),w$=y(new Map),r$=y($),v$=y(0),V$=y(0),u0=y({}),G0=y({name:null,avatar_url:null}),a_=y({currentHashtag:null,searchQuery:null,searchOpen:!1}),m0=y(null),A$=y(null),a$=y(0),O$=y(0),t0=y(0),P$=y(null),h0=y(null),O0=y(null),U$=y(null),t$=y(0),u$=y({title:null,avatarBase:null}),M$=y(null),m$=M(()=>{if(M$.current)clearTimeout(M$.current),M$.current=null;t(null)},[]);g6(30000),R(()=>{return z8()},[]),R(()=>{return e6(L)},[]),R(()=>{$0("workspaceOpen",String(x0))},[x0]),R(()=>{return r6()},[]),R(()=>{return()=>{m$()}},[m$]),R(()=>{if(!P_){$0(z3,"");return}$0(z3,JSON.stringify({question:P_.question||"",answer:P_.answer||"",thinking:P_.thinking||"",error:P_.error||null,status:P_.status||"success"}))},[P_]),R(()=>{u0.current=I_||{}},[I_]),R(()=>{Q0.current=$},[$]),R(()=>{G0.current=y$||{name:"You",avatar_url:null,avatar_background:null}},[y$]);let g$=M((V,W,J=null)=>{if(typeof document>"u")return;let k=(V||"").trim()||"PiClaw";if(u$.current.title!==k){document.title=k;let $_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if($_&&$_.getAttribute("content")!==k)$_.setAttribute("content",k);u$.current.title=k}let A=document.getElementById("dynamic-favicon");if(!A)return;let v=A.getAttribute("data-default")||A.getAttribute("href")||"/favicon.ico",o=W||v,Y_=W?`${o}|${J||""}`:o;if(u$.current.avatarBase!==Y_){let $_=W?`${o}${o.includes("?")?"&":"?"}v=${J||Date.now()}`:o;A.setAttribute("href",$_),u$.current.avatarBase=Y_}},[]),e$=M((V)=>{if(!V)return;H((W)=>W.includes(V)?W:[...W,V])},[]),e0=M((V)=>{H((W)=>W.filter((J)=>J!==V))},[]);s0.current=e0;let _2=M(()=>{H([])},[]),p$=M((V)=>{if(!Array.isArray(V)){H([]);return}let W=[],J=new Set;for(let k of V){if(typeof k!=="string"||!k.trim())continue;let A=k.trim();if(J.has(A))continue;J.add(A),W.push(A)}H(W)},[]),q_=M((V,W=null,J="info",k=3000)=>{m$(),t({title:V,detail:W||null,kind:J||"info"}),M$.current=setTimeout(()=>{t((A)=>A?.title===V?null:A)},k)},[m$]),L2=M((V)=>{let W=p6(V,{editorOpen:f0,resolvePane:(J)=>d_.resolve(J)});if(W.kind==="open"){Z0(W.path);return}if(W.kind==="toast")q_(W.title,W.detail,W.level)},[f0,Z0,q_]),A2=M(()=>{let V=H0;if(V)e$(V)},[H0,e$]),c$=M((V)=>{if(!V)return;x((W)=>W.includes(V)?W:[...W,V])},[]),$2=M(async(V,W=null)=>{let J=(A)=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.classList.add("post-highlight"),setTimeout(()=>A.classList.remove("post-highlight"),2000)},k=document.getElementById("post-"+V);if(k){J(k);return}try{let A=typeof W==="string"&&W.trim()?W.trim():$,o=(await i1(V,A))?.thread?.[0];if(!o)return;m((Y_)=>{if(!Y_)return[o];if(Y_.some(($_)=>$_.id===o.id))return Y_;return[...Y_,o]}),requestAnimationFrame(()=>{setTimeout(()=>{let Y_=document.getElementById("post-"+V);if(Y_)J(Y_)},50)})}catch(A){console.error("[scrollToMessage] Failed to fetch message",V,A)}},[$]),h$=M((V)=>{x((W)=>W.filter((J)=>J!==V))},[]),P2=M(()=>{x([])},[]),j2=M((V)=>{if(!Array.isArray(V)){x([]);return}let W=[],J=new Set;for(let k of V){if(typeof k!=="string"||!k.trim())continue;let A=k.trim();if(J.has(A))continue;J.add(A),W.push(A)}x(W)},[]),Z2=M((V)=>{let W=typeof V==="string"&&V.trim()?V.trim():"Could not send your message.";q_("Compose failed",W,"error",5000)},[q_]),i0=M((V={})=>{let W=Date.now();if(B_.current=W,V.running)f_.current=!0,X0((J)=>J?J:!0);if(V.clearSilence)b_.current=0},[X0]),g0=M(()=>{if(U$.current)clearTimeout(U$.current),U$.current=null;t$.current=0},[]);R(()=>()=>{g0()},[g0]);let i$=M(()=>{g0(),n((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:W,lastActivity:J,...k}=V;return k})},[g0]),B2=M((V)=>{if(!V)return;g0();let W=Date.now();t$.current=W,n({type:V.type||"active",last_activity:!0}),U$.current=setTimeout(()=>{if(t$.current!==W)return;n((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},v6)},[g0]),l0=M(()=>{f_.current=!1,X0(!1),B_.current=null,b_.current=0,F_.current="",x_.current="",m_.current=null,h0.current=null,X_.current=null,s.current=null,D0.current=null,c0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g0(),U_(null),D_(null),O_.current=!1,z_.current=!1},[g0,U_,D_,X0]),F$=M((V)=>{if(!o6({remainingQueueCount:V,currentTurnId:X_.current,isAgentTurnActive:B0}))return;s.current=null,D_(null)},[B0,D_]),Q2=M(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),l$=M(()=>({agentStatus:j_,agentDraft:Z_?{...Z_}:{text:"",totalLines:0},agentPlan:V_||"",agentThought:a?{...a}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:W_,steerQueuedTurnId:G_,isAgentTurnActive:Boolean(B0),followupQueueItems:Array.isArray(c_)?c_.map((V)=>({...V})):[],activeModel:g_,activeThinkingLevel:p_,supportsThinking:Boolean(H_),activeModelUsage:j0,contextUsage:k0,isAgentRunning:Boolean(f_.current),wasAgentActive:Boolean(M_.current),draftBuffer:F_.current||"",thoughtBuffer:x_.current||"",lastAgentEvent:B_.current||null,lastSilenceNotice:b_.current||0,lastAgentResponse:h0.current||null,currentTurnIdRef:X_.current||null,steerQueuedTurnIdRef:s.current||null,thoughtExpanded:Boolean(O_.current),draftExpanded:Boolean(z_.current),agentStatusRef:D0.current||null,silentRecovery:{...c0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[g_,j0,p_,Z_,V_,j_,a,k0,W_,c_,B0,N_,G_,H_]),O2=M((V)=>{let W=V||Q2();g0(),f_.current=Boolean(W.isAgentRunning),M_.current=Boolean(W.wasAgentActive),X0(Boolean(W.isAgentTurnActive)),B_.current=W.lastAgentEvent||null,b_.current=Number(W.lastSilenceNotice||0),F_.current=W.draftBuffer||"",x_.current=W.thoughtBuffer||"",m_.current=W.pendingRequest||null,h0.current=W.lastAgentResponse||null,X_.current=W.currentTurnIdRef||null,s.current=W.steerQueuedTurnIdRef||null,D0.current=W.agentStatusRef||null,c0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},O_.current=Boolean(W.thoughtExpanded),z_.current=Boolean(W.draftExpanded),n(W.agentStatus||null),h(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),n_(W.agentPlan||""),r(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),__(W.pendingRequest||null),U_(W.currentTurnId||null),D_(W.steerQueuedTurnId||null),k_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((J)=>({...J})):[]),K0(W.activeModel||null),E_(W.activeThinkingLevel||null),e_(Boolean(W.supportsThinking)),C_(W.activeModelUsage??null),v_(W.contextUsage??null)},[g0,Q2,U_,k_,X0,D_]),n0=M((V)=>{if(!V)return;if(X_.current===V)return;X_.current=V,c0.current={inFlight:!1,lastAttemptAt:0,turnId:V},U_(V),s.current=null,D_(null),F_.current="",x_.current="",h({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),__(null),m_.current=null,h0.current=null,O_.current=!1,z_.current=!1},[U_,D_]),Q=M((V)=>{if(typeof document<"u"){let $_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&$_)return}let W=h0.current;if(!W||!W.post)return;if(V&&W.turnId&&W.turnId!==V)return;let J=W.post;if(J.id&&P$.current===J.id)return;let k=String(J?.data?.content||"").trim();if(!k)return;P$.current=J.id||P$.current,h0.current=null;let A=k.replace(/\s+/g," ").slice(0,200),v=u0.current||{},Y_=(J?.data?.agent_id?v[J.data.agent_id]:null)?.name||"Pi";F0(Y_,A)},[F0]),P=M(async(V,W)=>{if(V!=="thought"&&V!=="draft")return;let J=X_.current;if(V==="thought"){if(O_.current=W,J)try{await N9(J,"thought",W)}catch(k){console.warn("Failed to update thought visibility:",k)}if(!W)return;try{let k=J?await Z9(J,"thought"):null;if(k?.text)x_.current=k.text;r((A)=>({...A||{text:"",totalLines:0},fullText:x_.current||A?.fullText||"",totalLines:Number.isFinite(k?.total_lines)?k.total_lines:A?.totalLines||0}))}catch(k){console.warn("Failed to fetch full thought:",k)}return}if(z_.current=W,J)try{await N9(J,"draft",W)}catch(k){console.warn("Failed to update draft visibility:",k)}if(!W)return;try{let k=J?await Z9(J,"draft"):null;if(k?.text)F_.current=k.text;h((A)=>({...A||{text:"",totalLines:0},fullText:F_.current||A?.fullText||"",totalLines:Number.isFinite(k?.total_lines)?k.total_lines:A?.totalLines||0}))}catch(k){console.warn("Failed to fetch full draft:",k)}},[]),Y=y(null),O=M(()=>{let V=m0.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);Y.current=O;let D=M((V)=>{let W=m0.current;if(!W||typeof V!=="function"){V?.();return}let{currentHashtag:J,searchQuery:k,searchOpen:A}=a_.current||{},v=!((k||A)&&!J),o=v?W.scrollHeight-W.scrollTop:W.scrollTop;V(),requestAnimationFrame(()=>{let Y_=m0.current;if(!Y_)return;if(v){let $_=Math.max(Y_.scrollHeight-o,0);Y_.scrollTop=$_}else{let $_=Math.max(Y_.scrollHeight-Y_.clientHeight,0),c=Math.min(o,$_);Y_.scrollTop=c}})},[]),E=M((V)=>{let W=m0.current;if(!W||typeof V!=="function"){V?.();return}let J=W.scrollTop;V(),requestAnimationFrame(()=>{let k=m0.current;if(!k)return;let A=Math.max(k.scrollHeight-k.clientHeight,0);k.scrollTop=Math.min(J,A)})},[]),C="Queued as a follow-up (one-at-a-time).",l="⁣",d=M((V)=>{if(!V||!Array.isArray(V))return V;let W=r_.current,J=new Set(W),k=V.filter((A)=>{if(J.has(A?.id))return!1;if(A?.data?.is_bot_message){let v=A?.data?.content;if(v===C||v===l)return!1}return!0});return k.length===V.length?V:k},[]),{posts:p,setPosts:m,hasMore:K_,setHasMore:z0,hasMoreRef:P0,loadPosts:Y0,refreshTimeline:W0,loadMore:T0,loadMoreRef:N2}=C6({preserveTimelineScroll:D,preserveTimelineScrollTop:E,chatJid:$}),n$=i_(()=>d(p),[p,c_,d]),U2=M(()=>{let V=V0.current;if(!V)return;m((W)=>W?W.filter((J)=>J.id!==V):W),V0.current=null},[m]),{handleSplitterMouseDown:E1,handleSplitterTouchStart:z2,handleEditorSplitterMouseDown:_$,handleEditorSplitterTouchStart:F2,handleDockSplitterMouseDown:K3,handleDockSplitterTouchStart:y1}=S6({appShellRef:A$,sidebarWidthRef:a$,editorWidthRef:O$,dockHeightRef:t0}),Y3=M(()=>{if(!f_.current)return;f_.current=!1,b_.current=0,B_.current=null,X_.current=null,U_(null),O_.current=!1,z_.current=!1;let V=(F_.current||"").trim();if(F_.current="",x_.current="",h({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),__(null),m_.current=null,h0.current=null,!V){n({type:"error",title:"Response stalled - No content received"});return}let J=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,k=Date.now(),A=new Date().toISOString(),v={id:k,timestamp:A,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};V0.current=k,m((o)=>o?l2([...o,v]):[v]),Y.current?.(),n(null)},[U_]);R(()=>{a_.current={currentHashtag:q,searchQuery:G,searchOpen:b}},[q,G,b]);let T_=M(()=>{let V=++b0.current,W=$;Ij(W).then((J)=>{if(V!==b0.current)return;if(Q0.current!==W)return;let k=Q_.current,A=Array.isArray(J?.items)?J.items.map((v)=>({...v})).filter((v)=>!k.has(v.row_id)):[];if(A.length){k_((v)=>{if(v.length===A.length&&v.every((o,Y_)=>o.row_id===A[Y_].row_id))return v;return A});return}k.clear(),F$(0),k_((v)=>v.length===0?v:[])}).catch(()=>{if(V!==b0.current)return;if(Q0.current!==W)return;k_((J)=>J.length===0?J:[])})},[F$,$,k_]),$$=M(async()=>{let V=$;try{let W=await Z3(V);if(Q0.current!==V)return;if(W)v_(W)}catch(W){if(Q0.current!==V)return;console.warn("Failed to fetch agent context:",W)}},[$]),j$=M(async()=>{let V=$;try{let W=await z9(V);if(Q0.current!==V)return null;if(!W||W.status!=="active"||!W.data){if(M_.current){let{currentHashtag:A,searchQuery:v,searchOpen:o}=a_.current||{};if(!A&&!v&&!o)W0()}return M_.current=!1,l0(),D0.current=null,n(null),h({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),__(null),m_.current=null,W??null}M_.current=!0;let J=W.data;D0.current=J;let k=J.turn_id||J.turnId;if(k)n0(k);if(i0({running:!0,clearSilence:!0}),i$(),n(J),W.thought&&W.thought.text)r((A)=>{if(A&&A.text&&A.text.length>=W.thought.text.length)return A;return x_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)h((A)=>{if(A&&A.text&&A.text.length>=W.draft.text.length)return A;return F_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[l0,i$,i0,W0,n0]),k1=M(async()=>{if(!f_.current)return null;if(m_.current)return null;let V=X_.current||null,W=c0.current,J=Date.now();if(W.inFlight)return null;if(W.turnId===V&&J-W.lastAttemptAt<e4)return null;W.inFlight=!0,W.lastAttemptAt=J,W.turnId=V;try{let{currentHashtag:k,searchQuery:A,searchOpen:v}=a_.current||{};if(!k&&!A&&!v)await W0();return await T_(),await j$()}finally{W.inFlight=!1}},[j$,T_,W0]);R(()=>{let V=Math.min(1000,Math.max(100,Math.floor(t4/2))),W=setInterval(()=>{if(!f_.current)return;if(m_.current)return;let J=B_.current;if(!J)return;let k=Date.now(),A=k-J,v=m2(D0.current);if(A>=R6){if(!v)n({type:"waiting",title:"Re-syncing after a quiet period…"});k1();return}if(A>=t4){if(k-b_.current>=e4){if(!v){let o=Math.floor(A/1000);n({type:"waiting",title:`Waiting for model… No events for ${o}s`})}b_.current=k,k1()}}},V);return()=>clearInterval(W)},[k1]);let Y9=M((V)=>{if(K(V),V!=="connected"){n(null),h({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),__(null),m_.current=null,l0();return}if(!R$.current){R$.current=!0;let{currentHashtag:A,searchQuery:v,searchOpen:o}=a_.current||{};if(!A&&!v&&!o)W0();j$(),T_(),$$();return}let{currentHashtag:W,searchQuery:J,searchOpen:k}=a_.current;if(!W&&!J&&!k)W0();j$(),T_(),$$()},[l0,W0,j$,T_,$$]),W9=M(async(V)=>{B(V),m(null),await Y0(V)},[Y0]),G9=M(async()=>{B(null),F(null),m(null),await Y0()},[Y0]),V9=M(async(V,W=u)=>{if(!V||!V.trim())return;let J=W==="root"||W==="all"?W:"current";f(J),F(V.trim()),B(null),m(null);try{let k=await $9(V.trim(),50,0,$,J,U0);m(k.results),z0(!1)}catch(k){console.error("Failed to search:",k),m([])}},[$,U0,u]),X9=M(()=>{g(!0),F(null),B(null),f("current"),m([])},[]),q9=M(()=>{g(!1),F(null),Y0()},[Y0]),vj=M(()=>{},[]),w1=!q&&!G&&!b,L9=M(async(V)=>{if(!V)return;let W=V.id,J=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():$,k=n$?.filter((v)=>v?.data?.thread_id===W&&v?.id!==W).length||0;if(k>0){if(!window.confirm(`Delete this message and its ${k} replies?`))return}let A=(v)=>{if(!v.length)return;w0((Y_)=>{let $_=new Set(Y_);return v.forEach((c)=>$_.add(c)),$_}),setTimeout(()=>{if(E(()=>{m((Y_)=>Y_?Y_.filter(($_)=>!v.includes($_.id)):Y_)}),w0((Y_)=>{let $_=new Set(Y_);return v.forEach((c)=>$_.delete(c)),$_}),P0.current)N2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let v=await j9(W,k>0,J);if(v?.ids?.length)A(v.ids)}catch(v){let o=v?.message||"";if(k===0&&o.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let $_=await j9(W,!0,J);if($_?.ids?.length)A($_.ids);return}console.error("Failed to delete post:",v),alert(`Failed to delete message: ${o}`)}},[$,n$,E]),W3=M(async()=>{try{let V=await Aj();R_(u6(V));let W=V?.user||{};k$((k)=>{let A=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",v=typeof W.avatar_url==="string"?W.avatar_url.trim():null,o=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(k.name===A&&k.avatar_url===v&&k.avatar_background===o)return k;return{name:A,avatar_url:v,avatar_background:o}});let J=(V?.agents||[]).find((k)=>k.id==="default");g$(J?.name,J?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=$,W=await Z3(V);if(Q0.current!==V)return;if(W)v_(W)}catch{}},[g$,$]);R(()=>{W3();let V=y2("sidebarWidth",null),W=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(a$.current=W,A$.current)A$.current.style.setProperty("--sidebar-width",`${W}px`)},[W3]);let A1=B0||j_!==null,G3=M((V)=>{if(!V||typeof V!=="object")return;let W=V.agent_id;if(!W)return;let{agent_name:J,agent_avatar:k}=V;if(!J&&k===void 0)return;let A=u0.current?.[W]||{id:W},v=A.name||null,o=A.avatar_url??A.avatarUrl??A.avatar??null,Y_=!1,$_=!1;if(J&&J!==A.name)v=J,$_=!0;if(k!==void 0){let c=typeof k==="string"?k.trim():null,L_=typeof o==="string"?o.trim():null,w_=c||null;if(w_!==(L_||null))o=w_,Y_=!0}if(!$_&&!Y_)return;if(R_((c)=>{let w_={...c[W]||{id:W}};if($_)w_.name=v;if(Y_)w_.avatar_url=o;return{...c,[W]:w_}}),W==="default")g$(v,o,Y_?Date.now():null)},[g$]),V3=M((V)=>{if(!V||typeof V!=="object")return;let W=V.user_name??V.userName,J=V.user_avatar??V.userAvatar,k=V.user_avatar_background??V.userAvatarBackground;if(W===void 0&&J===void 0&&k===void 0)return;k$((A)=>{let v=typeof W==="string"&&W.trim()?W.trim():A.name||"You",o=J===void 0?A.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,Y_=k===void 0?A.avatar_background:typeof k==="string"&&k.trim()?k.trim():null;if(A.name===v&&A.avatar_url===o&&A.avatar_background===Y_)return A;return{name:v,avatar_url:o,avatar_background:Y_}})},[]),P1=M((V)=>{if(!V||typeof V!=="object")return;let W=V.model??V.current;if(W!==void 0)K0(W);if(V.thinking_level!==void 0)E_(V.thinking_level??null);if(V.supports_thinking!==void 0)e_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)C_(V.provider_usage??null)},[]),M2=M(()=>{let V=$;Pj(V).then((W)=>{if(Q0.current!==V)return;if(W)P1(W)}).catch(()=>{})},[P1,$]),M0=M(()=>{let V=$,W=(J)=>Array.isArray(J)?J.filter((k)=>k&&typeof k.chat_jid==="string"&&typeof k.agent_name==="string"&&k.agent_name.trim()):[];Promise.all([Mj().catch(()=>({chats:[]})),N3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([J,k])=>{if(Q0.current!==V)return;let A=W(J?.chats),v=W(k?.chats);if(v.length===0){o_(A);return}let o=new Map(A.map(($_)=>[$_.chat_jid,$_])),Y_=v.map(($_)=>{let c=o.get($_.chat_jid);return c?{...$_,...c,is_active:c.is_active??$_.is_active}:$_});Y_.sort(($_,c)=>{if($_.chat_jid===V&&c.chat_jid!==V)return-1;if(c.chat_jid===V&&$_.chat_jid!==V)return 1;let L_=Boolean($_.archived_at),w_=Boolean(c.archived_at);if(L_!==w_)return L_?1:-1;if(Boolean($_.is_active)!==Boolean(c.is_active))return $_.is_active?-1:1;return String($_.chat_jid).localeCompare(String(c.chat_jid))}),o_(Y_)}).catch(()=>{if(Q0.current!==V)return;o_([])})},[$]),E0=M(()=>{N3(U0).then((V)=>{let W=Array.isArray(V?.chats)?V.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];p0(W)}).catch(()=>{})},[U0]),B9=M((V)=>{let W=V?.row_id;if(W==null)return;Q_.current.add(W),k_((J)=>J.filter((k)=>k?.row_id!==W)),Cj(W,j3($)).then(()=>{T_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),q_("Failed to steer message","The queued message could not be sent as steering.","warning"),Q_.current.delete(W),T_()})},[$,T_,k_,q_]),Q9=M((V)=>{let W=V?.row_id;if(W==null)return;let J=S0.current.filter((k)=>k?.row_id!==W).length;Q_.current.add(W),F$(J),k_((k)=>k.filter((A)=>A?.row_id!==W)),Tj(W,j3($)).then(()=>{T_()}).catch((k)=>{console.warn("[queue] Failed to remove queued item:",k),q_("Failed to remove message","The queued message could not be removed.","warning"),Q_.current.delete(W),T_()})},[F$,$,T_,k_,q_]),M1=M((V)=>{if(!V||typeof V!=="object")return;if(M0(),E0(),V?.queued==="followup"||V?.queued==="steer"){T_();return}let W=V?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))T_()},[M0,E0,T_]),b1=M(()=>{if(O0.current)O0.current.abort(),O0.current=null;h_(null)},[]),n2=M(async(V)=>{let W=String(V||"").trim();if(!W)return q_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(O0.current)O0.current.abort();let J=new AbortController;O0.current=J,h_({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let k=await Sj(W,{signal:J.signal,chatJid:Q8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(A,v)=>{if(A==="side_prompt_start")h_((o)=>o?{...o,status:"running"}:o)},onThinkingDelta:(A)=>{h_((v)=>v?{...v,thinking:`${v.thinking||""}${A||""}`}:v)},onTextDelta:(A)=>{h_((v)=>v?{...v,answer:`${v.answer||""}${A||""}`}:v)}});if(O0.current!==J)return!0;h_((A)=>A?{...A,answer:k?.result||A.answer||"",thinking:k?.thinking||A.thinking||"",model:k?.model||null,status:"success",error:null}:A)}catch(k){if(J.signal.aborted)return!0;h_((A)=>A?{...A,status:"error",error:k?.payload?.error||k?.message||"BTW request failed."}:A)}finally{if(O0.current===J)O0.current=null}return!0},[$,q_]),O9=M(async({content:V})=>{let W=B8(V);if(!W)return!1;if(W.type==="help")return q_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return b1(),q_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await n2(W.question),!0;return!1},[b1,n2,q_]),U9=M(()=>{if(P_?.question)n2(P_.question)},[P_,n2]),F9=M(async()=>{let V=F8(P_);if(!V)return;try{let W=await J2("default",V,null,[],A1?"queue":null,$);M1(W),q_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){q_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[P_,M1,A1,q_]),b2=M(()=>{M2(),M0(),E0(),T_(),$$()},[M2,M0,E0,T_,$$]);R(()=>{b2();let V=setInterval(()=>{M2(),M0(),E0(),T_()},60000);return()=>clearInterval(V)},[b2,M2,M0,E0,T_]),R(()=>{E0()},[E0]),R(()=>{let V=!1;if(m(null),q)return Y0(q),()=>{V=!0};if(G)return $9(G,50,0,$,u,U0).then((W)=>{if(V)return;m(W.results),z0(!1)}).catch((W)=>{if(V)return;console.error("Failed to search:",W),m([]),z0(!1)}),()=>{V=!0};return Y0(),()=>{V=!0}},[$,q,G,u,U0,Y0,z0,m]),R(()=>{let V=r$.current||$;w$.current.set(V,l$())},[$,l$]),R(()=>{let V=r$.current||$;if(V===$)return;w$.current.set(V,l$()),r$.current=$,Q_.current.clear(),O2(w$.current.get($)||null),T_(),j$(),$$()},[$,j$,$$,T_,O2,l$]);let H9=M(()=>{let{currentHashtag:V,searchQuery:W,searchOpen:J}=a_.current||{};if(!V&&!W&&!J)W0();b2()},[b2,W0]),x1=M((V,W)=>{let J=W?.turn_id,k=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,v=k?k===$:V==="connected"||V==="workspace_update";if(v)G3(W),V3(W);if(V==="ui_theme"){K8(W);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))i$()}if(V==="connected"){n(null),h({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),__(null),m_.current=null,l0();let c=$;z9(c).then((y0)=>{if(Q0.current!==c)return;if(!y0||y0.status!=="active"||!y0.data)return;let K2=y0.data,d2=K2.turn_id||K2.turnId;if(d2)n0(d2);if(i0({clearSilence:!0}),B2(K2),y0.thought&&y0.thought.text)x_.current=y0.thought.text,r({text:y0.thought.text,totalLines:y0.thought.totalLines||0});if(y0.draft&&y0.draft.text)F_.current=y0.draft.text,h({text:y0.draft.text,totalLines:y0.draft.totalLines||0})}).catch((y0)=>{console.warn("Failed to fetch agent status:",y0)});let{currentHashtag:L_,searchQuery:w_,searchOpen:Z$}=a_.current||{};if(!L_&&!w_&&!Z$)W0();b2();return}if(V==="agent_status"){if(!v){if(W?.type==="done"||W?.type==="error")M0(),E0();return}if(W.type==="done"||W.type==="error"){if(J&&X_.current&&J!==X_.current)return;if(W.type==="done"){Q(J||X_.current);let{currentHashtag:c,searchQuery:L_,searchOpen:w_}=a_.current||{};if(!c&&!L_&&!w_)W0();if(W.context_usage)v_(W.context_usage)}if(M_.current=!1,l0(),Q_.current.clear(),M0(),T_(),h({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),__(null),W.type==="error")n({type:"error",title:W.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(J)n0(J);if(i0({running:!0,clearSilence:!0}),W.type==="thinking")F_.current="",x_.current="",h({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0});D0.current=W,n((c)=>{if(c&&c.type===W.type&&c.title===W.title)return c;return W})}return}if(V==="agent_steer_queued"){if(!v)return;if(J&&X_.current&&J!==X_.current)return;let c=J||X_.current;if(!c)return;s.current=c,D_(c);return}if(V==="agent_followup_queued"){if(!v)return;let c=W?.row_id,L_=W?.content;if(c!=null&&typeof L_==="string"&&L_.trim())k_((w_)=>{if(w_.some((Z$)=>Z$?.row_id===c))return w_;return[...w_,{row_id:c,content:L_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});T_();return}if(V==="agent_followup_consumed"){if(!v)return;let c=W?.row_id;if(c!=null){let y0=S0.current.filter((K2)=>K2.row_id!==c).length;F$(y0),k_((K2)=>K2.filter((d2)=>d2.row_id!==c))}T_();let{currentHashtag:L_,searchQuery:w_,searchOpen:Z$}=a_.current||{};if(!L_&&!w_&&!Z$)W0();return}if(V==="agent_followup_removed"){if(!v)return;let c=W?.row_id;if(c!=null){let L_=S0.current.filter((w_)=>w_.row_id!==c).length;Q_.current.add(c),F$(L_),k_((w_)=>w_.filter((Z$)=>Z$.row_id!==c))}T_();return}if(V==="agent_draft_delta"){if(!v)return;if(J&&X_.current&&J!==X_.current)return;if(J&&!X_.current)n0(J);if(i0({running:!0,clearSilence:!0}),W?.reset)F_.current="";if(W?.delta)F_.current+=W.delta;let c=Date.now();if(!v$.current||c-v$.current>=100){v$.current=c;let L_=F_.current,w_=_3(L_);if(z_.current)h((Z$)=>({text:Z$?.text||"",totalLines:w_,fullText:L_}));else h({text:L_,totalLines:w_})}return}if(V==="agent_draft"){if(!v)return;if(J&&X_.current&&J!==X_.current)return;if(J&&!X_.current)n0(J);i0({running:!0,clearSilence:!0});let c=W.text||"",L_=W.mode||(W.kind==="plan"?"replace":"append"),w_=Number.isFinite(W.total_lines)?W.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(L_==="replace")n_(c);else n_((Z$)=>(Z$||"")+c);else if(!z_.current)F_.current=c,h({text:c,totalLines:w_});return}if(V==="agent_thought_delta"){if(!v)return;if(J&&X_.current&&J!==X_.current)return;if(J&&!X_.current)n0(J);if(i0({running:!0,clearSilence:!0}),W?.reset)x_.current="";if(typeof W?.delta==="string")x_.current+=W.delta;let c=Date.now();if(O_.current&&(!V$.current||c-V$.current>=100)){V$.current=c;let L_=x_.current;r((w_)=>({text:w_?.text||"",totalLines:_3(L_),fullText:L_}))}return}if(V==="agent_thought"){if(!v)return;if(J&&X_.current&&J!==X_.current)return;if(J&&!X_.current)n0(J);i0({running:!0,clearSilence:!0});let c=W.text||"",L_=Number.isFinite(W.total_lines)?W.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!O_.current)x_.current=c,r({text:c,totalLines:L_});return}if(V==="model_changed"){if(!v)return;if(W?.model!==void 0)K0(W.model);if(W?.thinking_level!==void 0)E_(W.thinking_level??null);if(W?.supports_thinking!==void 0)e_(Boolean(W.supports_thinking));let c=$;Z3(c).then((L_)=>{if(Q0.current!==c)return;if(L_)v_(L_)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(a6(V)){if(!v)return;if(t6(V,W),V==="extension_ui_notify"&&typeof W?.message==="string")q_(W.message,null,W?.type||"info");if(V==="extension_ui_error"&&typeof W?.error==="string")q_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:o,searchQuery:Y_,searchOpen:$_}=a_.current;if(V==="agent_response"){if(!v)return;U2(),h0.current={post:W,turnId:X_.current}}if(!o&&!Y_&&!$_&&v&&(V==="new_post"||V==="new_reply"||V==="agent_response"))m((c)=>{if(!c)return[W];if(c.some((L_)=>L_.id===W.id))return c;return[...c,W]}),Y.current?.();if(V==="interaction_updated"){if(!v)return;if(o||Y_||$_)return;m((c)=>{if(!c)return c;if(!c.some((L_)=>L_.id===W.id))return c;return c.map((L_)=>L_.id===W.id?W:L_)})}if(V==="interaction_deleted"){if(!v)return;if(o||Y_||$_)return;let c=W?.ids||[];if(c.length){if(E(()=>{m((L_)=>L_?L_.filter((w_)=>!c.includes(w_.id)):L_)}),P0.current)N2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[l0,i$,$,N2,i0,Q,E,M0,E0,W0,U2,n0,B2,G3,V3,M2,T_,k_]);R(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=x1,V.reset=()=>{U2(),l0(),n(null),h({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),__(null)},V.finalize=()=>Y3(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[l0,Y3,x1,U2]),x6({handleSseEvent:x1,handleConnectionStatusChange:Y9,loadPosts:Y0,onWake:H9,chatJid:$}),R(()=>{if(!n$||n$.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let W=V.slice(5);$2(W),history.replaceState(null,"",location.pathname+location.search)},[n$,$2]);let I1=j_!==null;R(()=>{if(z!=="connected")return;let W=setInterval(()=>{let{currentHashtag:J,searchQuery:k,searchOpen:A}=a_.current||{},v=!J&&!k&&!A;if(I1){if(v)W0();T_(),j$(),$$()}else{if(v)W0();j$(),$$()}},I1?15000:60000);return()=>clearInterval(W)},[z,I1,j$,$$,T_,W0]),R(()=>{return _9(()=>{j$(),$$(),T_()})},[j$,$$,T_]);let J9=M(()=>{q$((V)=>!V)},[]),X3=M((V)=>{if(typeof window>"u")return;let W=String(V||"").trim();if(!W||W===$)return;let J=X2(window.location.href,W,{chatOnly:j});window.location.assign(J)},[j,$]),q3=M(async()=>{if(typeof window>"u"||!u_?.chat_jid)return;let V=u_.agent_name||"",W=u_.display_name||"",J=window.prompt("Branch display name",W);if(J===null)return;let k=window.prompt("Agent handle (without @)",V);if(k===null)return;try{let A=await bj(u_.chat_jid,{displayName:J,agentName:k});await Promise.allSettled([M0(),E0()]);let v=A?.branch?.agent_name||String(k||"").trim()||V;q_("Branch renamed",`This chat is now @${v}.`,"info",3500)}catch(A){let v=A instanceof Error?A.message:String(A||"Could not rename branch."),o=/already in use/i.test(v||"")?`${v} Switch to or restore that existing session from the session manager.`:v;q_("Could not rename branch",o||"Could not rename branch.","warning",5000)}},[u_,M0,E0,q_]),L3=M(async(V=null)=>{if(typeof window>"u")return;let W=typeof V==="string"&&V.trim()?V.trim():"",J=typeof $==="string"&&$.trim()?$.trim():"",k=W||u_?.chat_jid||J;if(!k){q_("Could not prune branch","No active session is selected yet.","warning",4000);return}let A=(u_?.chat_jid===k?u_:null)||_0.find(($_)=>$_?.chat_jid===k)||A_.find(($_)=>$_?.chat_jid===k)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid)){q_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let o=`@${A?.agent_name||k}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!window.confirm(`Prune ${o}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await xj(k),await Promise.allSettled([M0(),E0()]);let $_=A?.root_chat_jid||"web:default";q_("Branch pruned",`${o} has been archived.`,"info",3000);let c=X2(window.location.href,$_,{chatOnly:j});window.location.assign(c)}catch($_){let c=$_ instanceof Error?$_.message:String($_||"Could not prune branch.");q_("Could not prune branch",c||"Could not prune branch.","warning",5000)}},[A_,j,u_,_0,$,M0,E0,q_]),D9=M(async(V)=>{let W=typeof V==="string"?V.trim():"";if(!W||typeof K9!=="function")return;try{let J=await K9(W);await Promise.allSettled([M0(),E0()]);let k=J?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():W,v=typeof k?.agent_name==="string"&&k.agent_name.trim()?`@${k.agent_name.trim()}`:A;q_("Branch restored",`Restored ${v}.`,"info",3200);let o=X2(window.location.href,A,{chatOnly:j});window.location.assign(o)}catch(J){let k=J instanceof Error?J.message:String(J||"Could not restore branch.");q_("Could not restore branch",k||"Could not restore branch.","warning",5000)}},[j,M0,E0,q_]);R(()=>{if(!Z||typeof window>"u")return;let V=!1;return(async()=>{try{y_({status:"running",message:"Preparing a new chat branch…"});let W=await T2(N);if(V)return;let J=W?.branch,k=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!k)throw Error("Branch fork did not return a chat id.");let A=X2(window.location.href,k,{chatOnly:!0});window.location.replace(A)}catch(W){if(V)return;y_({status:"error",message:D1(W)})}})(),()=>{V=!0}},[Z,N]);let E9=M(async()=>{if(typeof window>"u")return;try{let W=(await T2($))?.branch,J=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([M0(),E0()]);let k=W?.agent_name?`@${W.agent_name}`:J;q_("New branch created",`Switched to ${k}.`,"info",2500);let A=X2(window.location.href,J,{chatOnly:j});window.location.assign(A)}catch(V){q_("Could not create branch",D1(V),"warning",5000)}},[j,$,M0,E0,q_]),y9=M(async()=>{if(typeof window>"u"||X)return;let V=c6($);if(!V){q_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(V.mode==="tab"){let J=d6(window.location.href,$,{chatOnly:!0});if(!window.open(J,V.target))q_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=h6(V);if(!W){q_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}i6(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await T2($))?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let o=await n1();o_(Array.isArray(o?.chats)?o.chats:[])}catch{}try{let o=await N3(U0);p0(Array.isArray(o?.chats)?o.chats:[])}catch{}let v=X2(window.location.href,A,{chatOnly:!0});l6(W,v)}catch(J){n6(W),q_("Could not open branch window",D1(J),"error",5000)}},[$,U0,X,q_]);R(()=>{if(!f0)return;if(typeof window>"u")return;let V=A$.current;if(!V)return;if(!O$.current){let W=y2("editorWidth",null),J=a$.current||280;O$.current=Number.isFinite(W)?W:J}if(V.style.setProperty("--editor-width",`${O$.current}px`),!t0.current){let W=y2("dockHeight",null);t0.current=Number.isFinite(W)?W:200}V.style.setProperty("--dock-height",`${t0.current}px`)},[f0]),R(()=>{if(!I0||j)return;let V=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),C0()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[C0,I0,j]);let k9=Boolean(G_&&G_===(j_?.turn_id||W_));if(Z)return U`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${e.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${e.message}</p>
                    </div>
                </div>
            </div>
        `;return U`
        <div class=${`app-shell${x0?"":" workspace-collapsed"}${f0?" editor-open":""}${j?" chat-only":""}`} ref=${A$}>
            ${!j&&U`
                <${w6}
                    onFileSelect=${e$}
                    visible=${x0}
                    active=${x0||f0}
                    onOpenEditor=${Z0}
                    onOpenTerminalTab=${E$}
                    onToggleTerminal=${I0?C0:void 0}
                    terminalVisible=${Boolean(I0&&N0)}
                />
                <button
                    class=${`workspace-toggle-tab${x0?" open":" closed"}`}
                    onClick=${J9}
                    title=${x0?"Hide workspace":"Show workspace"}
                    aria-label=${x0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${E1} onTouchStart=${z2}></div>
            `}
            ${G$&&U`
                <div class="editor-pane-container">
                    ${f0&&U`
                        <${P6}
                            tabs=${s$}
                            activeId=${H0}
                            onActivate=${A0}
                            onClose=${L$}
                            onCloseOthers=${R0}
                            onCloseAll=${r0}
                            onTogglePin=${B$}
                            onTogglePreview=${D$}
                            previewTabs=${J$}
                            onToggleDock=${I0?C0:void 0}
                            dockVisible=${I0&&N0}
                        />
                    `}
                    ${f0&&U`<div class="editor-pane-host" ref=${f$}></div>`}
                    ${f0&&H0&&J$.has(H0)&&U`
                        <${b6}
                            getContent=${()=>J0.current?.getContent?.()}
                            path=${H0}
                            onClose=${()=>D$(H0)}
                        />
                    `}
                    ${I0&&N0&&U`<div class="dock-splitter" onMouseDown=${K3} onTouchStart=${y1}></div>`}
                    ${I0&&U`<div class=${`dock-panel${N0?"":" hidden"}`}>
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
                <div class="editor-splitter" onMouseDown=${_$} onTouchStart=${F2}></div>
            `}
            <div class="container">
                ${G&&m6()&&U`<div class="search-results-spacer"></div>`}
                ${j&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${u_?.agent_name?`@${u_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${u_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${_0.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(V)=>X3(V.currentTarget.value)}
                                    >
                                        ${_0.map((V)=>U`
                                            <option key=${V.chat_jid} value=${V.chat_jid}>
                                                ${`@${V.agent_name} — ${V.chat_jid}${V.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${u_?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${q3}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${u_?.chat_jid&&u_.chat_jid!==(u_.root_chat_jid||u_.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${L3}
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
                ${(q||G)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${G9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${q?`#${q}`:`Search: ${G} · ${T}`}</span>
                    </div>
                `}
                <${c8}
                    posts=${n$}
                    hasMore=${w1?K_:!1}
                    onLoadMore=${w1?T0:void 0}
                    timelineRef=${m0}
                    onHashtagClick=${W9}
                    onMessageRef=${c$}
                    onScrollToMessage=${$2}
                    onFileRef=${L2}
                    onPostClick=${void 0}
                    onDeletePost=${L9}
                    emptyMessage=${q?`No posts with #${q}`:G?`No results for "${G}"`:void 0}
                    agents=${I_}
                    user=${y$}
                    reverse=${w1}
                    removingPostIds=${H$}
                    searchQuery=${G}
                />
                <${A8}
                    status=${j_}
                    draft=${Z_}
                    plan=${V_}
                    thought=${a}
                    pendingRequest=${N_}
                    intent=${i}
                    turnId=${W_}
                    steerQueued=${k9}
                    onPanelToggle=${P}
                />
                <${H8}
                    session=${P_}
                    onClose=${b1}
                    onRetry=${U9}
                    onInject=${F9}
                />
                <${s3}
                    onPost=${()=>{let{searchQuery:V,searchOpen:W}=a_.current||{};if(!V&&!W)Y0(),O()}}
                    onFocus=${O}
                    searchMode=${b}
                    searchScope=${u}
                    onSearch=${V9}
                    onSearchScopeChange=${f}
                    onEnterSearch=${X9}
                    onExitSearch=${q9}
                    fileRefs=${w}
                    onRemoveFileRef=${e0}
                    onClearFileRefs=${_2}
                    onSetFileRefs=${p$}
                    messageRefs=${I}
                    onRemoveMessageRef=${h$}
                    onClearMessageRefs=${P2}
                    onSetMessageRefs=${j2}
                    onSwitchChat=${X3}
                    onRenameSession=${q3}
                    onCreateSession=${E9}
                    onDeleteSession=${L3}
                    onRestoreSession=${D9}
                    activeEditorPath=${j?null:H0}
                    onAttachEditorFile=${j?void 0:A2}
                    onOpenFilePill=${L2}
                    followupQueueCount=${J_}
                    followupQueueItems=${c_}
                    onInjectQueuedFollowup=${B9}
                    onRemoveQueuedFollowup=${Q9}
                    onSubmitIntercept=${O9}
                    onMessageResponse=${M1}
                    onSubmitError=${Z2}
                    onPopOutChat=${X?void 0:y9}
                    isAgentActive=${A1}
                    activeChatAgents=${A_}
                    currentChatJid=${$}
                    connectionStatus=${z}
                    activeModel=${g_}
                    modelUsage=${j0}
                    thinkingLevel=${p_}
                    supportsThinking=${H_}
                    contextUsage=${k0}
                    notificationsEnabled=${C$}
                    notificationPermission=${v0}
                    onToggleNotifications=${T$}
                    onModelChange=${K0}
                    onModelStateChange=${P1}
                />
                <${P8}
                    request=${N_}
                    onRespond=${()=>{__(null),m_.current=null}}
                />
            </div>
        </div>
    `}function Rj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return U`<${fj} locationParams=${_} />`}u3(U`<${Rj} />`,document.getElementById("app"));

//# debugId=255D38D3EE6D91F764756E2164756E21
//# sourceMappingURL=app.bundle.js.map
