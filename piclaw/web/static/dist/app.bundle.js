var l7=Object.defineProperty;var n7=(_)=>_;function d7(_,$){this[_]=n7.bind(null,$)}var s7=(_,$)=>{for(var j in $)l7(_,j,{get:$[j],enumerable:!0,configurable:!0,set:d7.bind($,j)})};var o7=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var y2,l_,n1,r7,D$,x1,d1,s1,o1,G4,N4,z4,a7,D2={},E2=[],t7=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,A2=Array.isArray;function B$(_,$){for(var j in $)_[j]=$[j];return _}function W4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function r1(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?y2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return F2(_,K,Z,N,null)}function F2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++n1:N,__i:-1,__u:0};return N==null&&l_.vnode!=null&&l_.vnode(z),z}function w2(_){return _.children}function H2(_,$){this.props=_,this.context=$}function m$(_,$){if($==null)return _.__?m$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?m$(_):null}function e7(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=B$({},$);z.__v=$.__v+1,l_.vnode&&l_.vnode(z),X4(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?m$($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,_3(Z,z,N),$.__e=$.__=null,z.__e!=j&&a1(z)}}function a1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),a1(_)}function T1(_){(!_.__d&&(_.__d=!0)&&D$.push(_)&&!k2.__r++||x1!=l_.debounceRendering)&&((x1=l_.debounceRendering)||d1)(k2)}function k2(){try{for(var _,$=1;D$.length;)D$.length>$&&D$.sort(s1),_=D$.shift(),$=D$.length,e7(_)}finally{D$.length=k2.__r=0}}function t1(_,$,j,Z,N,z,K,G,O,W,L){var q,H,A,x,R,v,S,F=Z&&Z.__k||E2,w=$.length;for(O=_8(j,$,F,O,w),q=0;q<w;q++)(A=j.__k[q])!=null&&(H=A.__i!=-1&&F[A.__i]||D2,A.__i=q,v=X4(_,A,H,N,z,K,G,O,W,L),x=A.__e,A.ref&&H.ref!=A.ref&&(H.ref&&O4(H.ref,null,A),L.push(A.ref,A.__c||x,A)),R==null&&x!=null&&(R=x),(S=!!(4&A.__u))||H.__k===A.__k?O=e1(A,O,_,S):typeof A.type=="function"&&v!==void 0?O=v:x&&(O=x.nextSibling),A.__u&=-7);return j.__e=R,O}function _8(_,$,j,Z,N){var z,K,G,O,W,L=j.length,q=L,H=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=F2(null,K,null,null,null):A2(K)?K=_.__k[z]=F2(w2,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=F2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,O=z+H,K.__=_,K.__b=_.__b+1,G=null,(W=K.__i=$8(K,j,O,q))!=-1&&(q--,(G=j[W])&&(G.__u|=2)),G==null||G.__v==null?(W==-1&&(N>L?H--:N<L&&H++),typeof K.type!="function"&&(K.__u|=4)):W!=O&&(W==O-1?H--:W==O+1?H++:(W>O?H--:H++,K.__u|=4))):_.__k[z]=null;if(q)for(z=0;z<L;z++)(G=j[z])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=m$(G)),j3(G,G));return Z}function e1(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=e1(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=m$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function $8(_,$,j,Z){var N,z,K,G=_.key,O=_.type,W=$[j],L=W!=null&&(2&W.__u)==0;if(W===null&&G==null||L&&G==W.key&&O==W.type)return j;if(Z>(L?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((W=$[K=N>=0?N--:z++])!=null&&(2&W.__u)==0&&G==W.key&&O==W.type)return K}return-1}function f1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||t7.test($)?j:j+"px"}function Q2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||f1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||f1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(o1,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=G4,_.addEventListener($,z?z4:N4,z)):_.removeEventListener($,z?z4:N4,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function R1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=G4++;else if($.t<j.u)return;return j(l_.event?l_.event($):$)}}}function X4(_,$,j,Z,N,z,K,G,O,W){var L,q,H,A,x,R,v,S,F,w,C,c,__,t,n,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(O=!!(32&j.__u),z=[G=$.__e=j.__e]),(L=l_.__b)&&L($);_:if(typeof N_=="function")try{if(S=$.props,F=N_.prototype&&N_.prototype.render,w=(L=N_.contextType)&&Z[L.__c],C=L?w?w.props.value:L.__:Z,j.__c?v=(q=$.__c=j.__c).__=q.__E:(F?$.__c=q=new N_(S,C):($.__c=q=new H2(S,C),q.constructor=N_,q.render=Z8),w&&w.sub(q),q.state||(q.state={}),q.__n=Z,H=q.__d=!0,q.__h=[],q._sb=[]),F&&q.__s==null&&(q.__s=q.state),F&&N_.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=B$({},q.__s)),B$(q.__s,N_.getDerivedStateFromProps(S,q.__s))),A=q.props,x=q.state,q.__v=$,H)F&&N_.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),F&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(F&&N_.getDerivedStateFromProps==null&&S!==A&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(S,C),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(S,q.__s,C)===!1){$.__v!=j.__v&&(q.props=S,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(l){l&&(l.__=$)}),E2.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&K.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(S,q.__s,C),F&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(A,x,R)})}if(q.context=C,q.props=S,q.__P=_,q.__e=!1,c=l_.__r,__=0,F)q.state=q.__s,q.__d=!1,c&&c($),L=q.render(q.props,q.state,q.context),E2.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,c&&c($),L=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++__<25);q.state=q.__s,q.getChildContext!=null&&(Z=B$(B$({},Z),q.getChildContext())),F&&!H&&q.getSnapshotBeforeUpdate!=null&&(R=q.getSnapshotBeforeUpdate(A,x)),t=L!=null&&L.type===w2&&L.key==null?$3(L.props.children):L,G=t1(_,A2(t)?t:[t],$,j,Z,N,z,K,G,O,W),q.base=$.__e,$.__u&=-161,q.__h.length&&K.push(q),v&&(q.__E=q.__=null)}catch(l){if($.__v=null,O||z!=null)if(l.then){for($.__u|=O?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;z[z.indexOf(G)]=null,$.__e=G}else{for(n=z.length;n--;)W4(z[n]);K4($)}else $.__e=j.__e,$.__k=j.__k,l.then||K4($);l_.__e(l,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=j8(j.__e,$,j,Z,N,z,K,O,W);return(L=l_.diffed)&&L($),128&$.__u?void 0:G}function K4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(K4))}function _3(_,$,j){for(var Z=0;Z<j.length;Z++)O4(j[Z],j[++Z],j[++Z]);l_.__c&&l_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){l_.__e(z,N.__v)}})}function $3(_){return typeof _!="object"||_==null||_.__b>0?_:A2(_)?_.map($3):B$({},_)}function j8(_,$,j,Z,N,z,K,G,O){var W,L,q,H,A,x,R,v=j.props||D2,S=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(W=0;W<z.length;W++)if((A=z[W])&&"setAttribute"in A==!!F&&(F?A.localName==F:A.nodeType==3)){_=A,z[W]=null;break}}if(_==null){if(F==null)return document.createTextNode(S);_=document.createElementNS(N,F,S.is&&S),G&&(l_.__m&&l_.__m($,z),G=!1),z=null}if(F==null)v===S||G&&_.data==S||(_.data=S);else{if(z=z&&y2.call(_.childNodes),!G&&z!=null)for(v={},W=0;W<_.attributes.length;W++)v[(A=_.attributes[W]).name]=A.value;for(W in v)A=v[W],W=="dangerouslySetInnerHTML"?q=A:W=="children"||(W in S)||W=="value"&&("defaultValue"in S)||W=="checked"&&("defaultChecked"in S)||Q2(_,W,null,A,N);for(W in S)A=S[W],W=="children"?H=A:W=="dangerouslySetInnerHTML"?L=A:W=="value"?x=A:W=="checked"?R=A:G&&typeof A!="function"||v[W]===A||Q2(_,W,A,v[W],N);if(L)G||q&&(L.__html==q.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(q&&(_.innerHTML=""),t1($.type=="template"?_.content:_,A2(H)?H:[H],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&m$(j,0),G,O),z!=null)for(W=z.length;W--;)W4(z[W]);G||(W="value",F=="progress"&&x==null?_.removeAttribute("value"):x!=null&&(x!==_[W]||F=="progress"&&!x||F=="option"&&x!=v[W])&&Q2(_,W,x,v[W],N),W="checked",R!=null&&R!=_[W]&&Q2(_,W,R,v[W],N))}return _}function O4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){l_.__e(N,j)}}function j3(_,$,j){var Z,N;if(l_.unmount&&l_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||O4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){l_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&j3(Z[N],$,j||typeof _.type!="function");j||W4(_.__e),_.__c=_.__=_.__e=void 0}function Z8(_,$,j){return this.constructor(_,j)}function Z3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),l_.__&&l_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],X4($,_=(!Z&&j||$).__k=r1(w2,null,[_]),N||D2,D2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?y2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),_3(z,_,K)}y2=E2.slice,l_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(G){_=G}throw _}},n1=0,r7=function(_){return _!=null&&_.constructor===void 0},H2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B$({},this.state),typeof _=="function"&&(_=_(B$({},j),this.props)),_&&B$(j,_),_!=null&&this.__v&&($&&this._sb.push($),T1(this))},H2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),T1(this))},H2.prototype.render=w2,D$=[],d1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s1=function(_,$){return _.__v.__b-$.__v.__b},k2.__r=0,o1=/(PointerCapture)$|Capture$/i,G4=0,N4=R1(!1),z4=R1(!0),a7=0;var e$,W0,Z4,u1,_2=0,N3=[],G0=l_,v1=G0.__b,m1=G0.__r,g1=G0.diffed,p1=G0.__c,c1=G0.unmount,h1=G0.__;function q4(_,$){G0.__h&&G0.__h(W0,_,_2||$),_2=0;var j=W0.__H||(W0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return _2=1,N8(K3,_)}function N8(_,$,j){var Z=q4(e$++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):K3(void 0,$),function(G){var O=Z.__N?Z.__N[0]:Z.__[0],W=Z.t(O,G);O!==W&&(Z.__N=[W,Z.__[1]],Z.__c.setState({}))}],Z.__c=W0,!W0.__f)){var N=function(G,O,W){if(!Z.__c.__H)return!0;var L=Z.__c.__H.__.filter(function(H){return H.__c});if(L.every(function(H){return!H.__N}))return!z||z.call(this,G,O,W);var q=Z.__c.props!==G;return L.some(function(H){if(H.__N){var A=H.__[0];H.__=H.__N,H.__N=void 0,A!==H.__[0]&&(q=!0)}}),z&&z.call(this,G,O,W)||q};W0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=W0;W0.componentWillUpdate=function(G,O,W){if(this.__e){var L=z;z=void 0,N(G,O,W),z=L}K&&K.call(this,G,O,W)},W0.shouldComponentUpdate=N}return Z.__N||Z.__}function u(_,$){var j=q4(e$++,3);!G0.__s&&z3(j.__H,$)&&(j.__=_,j.u=$,W0.__H.__h.push(j))}function D(_){return _2=5,n_(function(){return{current:_}},[])}function n_(_,$){var j=q4(e$++,7);return z3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return _2=8,n_(function(){return _},$)}function z8(){for(var _;_=N3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(J2),$.__h.some(Y4),$.__h=[]}catch(j){$.__h=[],G0.__e(j,_.__v)}}}G0.__b=function(_){W0=null,v1&&v1(_)},G0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),h1&&h1(_,$)},G0.__r=function(_){m1&&m1(_),e$=0;var $=(W0=_.__c).__H;$&&(Z4===W0?($.__h=[],W0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(J2),$.__h.some(Y4),$.__h=[],e$=0)),Z4=W0},G0.diffed=function(_){g1&&g1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(N3.push($)!==1&&u1===G0.requestAnimationFrame||((u1=G0.requestAnimationFrame)||K8)(z8)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),Z4=W0=null},G0.__c=function(_,$){$.some(function(j){try{j.__h.some(J2),j.__h=j.__h.filter(function(Z){return!Z.__||Y4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],G0.__e(Z,j.__v)}}),p1&&p1(_,$)},G0.unmount=function(_){c1&&c1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{J2(Z)}catch(N){$=N}}),j.__H=void 0,$&&G0.__e($,j.__v))};var i1=typeof requestAnimationFrame=="function";function K8(_){var $,j=function(){clearTimeout(Z),i1&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);i1&&($=requestAnimationFrame(j))}function J2(_){var $=W0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),W0=$}function Y4(_){var $=W0;_.__c=_.__(),W0=$}function z3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function K3(_,$){return typeof $=="function"?$(_):$}var Y3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],G=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=G:K===4?Z[1]=Object.assign(Z[1]||{},G):K===5?(Z[1]=Z[1]||{})[$[++z]]=G:K===6?Z[1][$[++z]]+=G+"":K?(N=_.apply(G,Y3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(G)}return Z},l1=new Map;function Y8(_){var $=l1.get(this);return $||($=new Map,l1.set(this,$)),($=Y3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",G="",O=[0],W=function(H){z===1&&(H||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?O.push(0,H,K):z===3&&(H||K)?(O.push(3,H,K),z=2):z===2&&K==="..."&&H?O.push(4,H,0):z===2&&K&&!H?O.push(5,0,!0,K):z>=5&&((K||!H&&z===5)&&(O.push(z,0,K,N),z=6),H&&(O.push(z,H,0,N),z=6)),K=""},L=0;L<j.length;L++){L&&(z===1&&W(),W(L));for(var q=0;q<j[L].length;q++)Z=j[L][q],z===1?Z==="<"?(W(),O=[O],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:G?Z===G?G="":K+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(W(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[L][q+1]===">")?(W(),z===3&&(O=O[0]),z=O,(O=O[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(W(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,O=O[0])}return W(),O}(_)),$),arguments,[])).length>1?$:$[0]}var B=Y8.bind(r1);var s0={};s7(s0,{uploadWorkspaceFile:()=>C2,uploadMedia:()=>J4,updateWorkspaceFile:()=>D8,submitAdaptiveCardAction:()=>D4,streamSidePrompt:()=>H8,steerAgentQueueItem:()=>F8,setWorkspaceVisibility:()=>N2,setAgentThoughtVisibility:()=>y4,sendPeerAgentMessage:()=>L8,sendAgentMessage:()=>g$,searchPosts:()=>L4,respondToAgentRequest:()=>P2,renameWorkspaceFile:()=>I4,renameChatBranch:()=>q8,removeAgentQueueItem:()=>Q8,pruneChatBranch:()=>V8,moveWorkspaceEntry:()=>S4,getWorkspaceTree:()=>Z2,getWorkspaceRawUrl:()=>b2,getWorkspaceFile:()=>P4,getWorkspaceDownloadUrl:()=>T4,getWorkspaceBranch:()=>J8,getTimeline:()=>$2,getThumbnailUrl:()=>A4,getThread:()=>B4,getPostsByHashtag:()=>V4,getMediaUrl:()=>Z$,getMediaText:()=>w4,getMediaInfo:()=>p$,getMediaBlob:()=>M4,getChatBranches:()=>O8,getAgents:()=>F4,getAgentThought:()=>k4,getAgentStatus:()=>H4,getAgentQueueState:()=>U8,getAgentModels:()=>j2,getAgentContext:()=>B8,getActiveChatAgents:()=>Q4,forkChatBranch:()=>M2,deleteWorkspaceFile:()=>x4,deletePost:()=>U4,createWorkspaceFile:()=>b4,createReply:()=>X8,createPost:()=>W8,attachWorkspaceFile:()=>C4,addToWhitelist:()=>E4,SSEClient:()=>I2});async function f_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function G3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function G8(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:G}=await j.read();if(G)break;N+=Z.decode(K,{stream:!0});let O=N.split(`

`);N=O.pop()||"";for(let W of O){let L=G3(W);if(L)$(L.event,L.data)}}N+=Z.decode();let z=G3(N);if(z)$(z.event,z.data)}async function $2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return f_(Z)}async function V4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function L4(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",O=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return f_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${G}${O}`)}async function B4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return f_(`/thread/${_}${j}`)}async function W8(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return f_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function X8(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function U4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return f_(N,{method:"DELETE"})}async function g$(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return f_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function Q4(){return f_("/agent/active-chats")}async function O8(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/branches${$}`)}async function M2(_,$={}){return f_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function q8(_,$={}){return f_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function V8(_){return f_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function L8(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return f_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function F4(){return f_("/agent/roster")}async function H4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/status${$}`)}async function B8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/context${$}`)}async function U8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/queue-state${$}`)}async function Q8(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function F8(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function j2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/models${$}`)}async function J4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function P2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function D4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function H8(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await G8(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function E4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function k4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return f_(j)}async function y4(_,$,j){return f_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function Z$(_){return`/media/${_}`}function A4(_){return`/media/${_}/thumbnail`}async function p$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function w4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function M4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function Z2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return f_(Z)}async function J8(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return f_($)}async function P4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return f_(N)}async function D8(_,$){return f_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function C4(_){return f_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function C2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Z});if(!G.ok){let O=await G.json().catch(()=>({error:"Upload failed"})),W=Error(O.error||`HTTP ${G.status}`);throw W.status=G.status,W.code=O.code,W}return G.json()}async function b4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function I4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function S4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function x4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return f_($,{method:"DELETE"})}async function N2(_,$=!1){return f_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function b2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function T4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class I2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function o0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function o_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function c$(_,$=!1){let j=o0(_);if(j===null)return $;return j==="true"}function h$(_,$=null){let j=o0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function S2(_){return String(_||"").trim().toLowerCase()}function f4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return S2($[1]||"")}function W3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=S2(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function X3(_,$,j={}){let Z=f4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return W3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return S2(z?.agent_name).startsWith(Z)})}function R4(_){let $=S2(_);return $?`@${$} `:""}function O3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return W3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function q3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function N$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let G=`${_}-file-pill`,O=`${_}-file-name`,W=`${_}-file-remove`,L=K==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${j||$} onClick=${N}>
      ${L}
      <span class=${O}>${$}</span>
      ${Z&&B`
        <button
          class=${W}
          onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var E8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function k8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${V3(j)} / ${V3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,G=$/100*K,O=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${O}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function V3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function L3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:G,fileRefs:O=[],onRemoveFileRef:W,onClearFileRefs:L,messageRefs:q=[],onRemoveMessageRef:H,onClearMessageRefs:A,activeModel:x=null,modelUsage:R=null,thinkingLevel:v=null,supportsThinking:S=!1,contextUsage:F=null,notificationsEnabled:w=!1,notificationPermission:C="default",onToggleNotifications:c,onModelChange:__,onModelStateChange:t,activeEditorPath:n=null,onAttachEditorFile:N_,onOpenFilePill:l,followupQueueItems:L_=[],onInjectQueuedFollowup:x_,onRemoveQueuedFollowup:s,onSubmitIntercept:$_,onMessageResponse:z_,onPopOutChat:Z_,isAgentActive:X_=!1,activeChatAgents:V_=[],currentChatJid:k_="web:default"}){let[G_,w_]=T(""),[B_,$0]=T(""),[y_,R_]=T([]),[S_,r_]=T(!1),[K_,a]=T([]),[A_,O_]=T(0),[H_,U_]=T(!1),[g_,Q_]=T([]),[M_,t_]=T(0),[a_,T_]=T(!1),[Z0,N0]=T(!1),[C_,e_]=T(!1),[J0,y0]=T([]),[D0,X0]=T(!1),[A0,d_]=T(0),u_=D(null),I0=D(null),h_=D(null),s_=D(null),w0=D(null),J_=D(null),b=D(0),e=200,P_=(U)=>{let I=new Set,f=[];for(let d of U||[]){if(typeof d!=="string")continue;let Y_=d.trim();if(!Y_||I.has(Y_))continue;I.add(Y_),f.push(Y_)}return f},p_=()=>{let U=o0("piclaw_compose_history");if(!U)return[];try{let I=JSON.parse(U);if(!Array.isArray(I))return[];return P_(I)}catch{return[]}},M0=(U)=>{o_("piclaw_compose_history",JSON.stringify(U))},a0=D(p_()),z0=D(-1),O0=D(""),V0=G_.trim()||y_.length>0||O.length>0||q.length>0,t0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),S0=typeof window<"u"&&typeof Notification<"u",h0=typeof window<"u"?Boolean(window.isSecureContext):!1,n$=S0&&h0&&C!=="denied",k$=C==="granted"&&w,l0=k$?"Disable notifications":"Enable notifications",K0=O3(V_,{currentChatJid:k_,limit:4}),K$=K0.length>0,q0=!j&&q3({footerWidth:A0,visibleAgentCount:K0.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),Y0=x||"",v_=S&&v?` (${v})`:"",u0=v_.trim()?`${v}`:"",x0=typeof R?.hint_short==="string"?R.hint_short.trim():"",Y$=[u0||null,x0||null].filter(Boolean).join(" • "),F$=[Y0?`Current model: ${Y0}${v_}`:null,R?.plan?`Plan: ${R.plan}`:null,x0||null,R?.primary?.reset_description||null,R?.secondary?.reset_description||null].filter(Boolean),y$=Z0?"Switching model…":F$.join(" • ")||`Current model: ${Y0}${v_} (tap to open model picker)`,E0=(U)=>{if(!U||typeof U!=="object")return;let I=U.model??U.current;if(typeof t==="function")t({model:I??null,thinking_level:U.thinking_level??null,supports_thinking:U.supports_thinking,provider_usage:U.provider_usage??null});if(I&&typeof __==="function")__(I)},A$=(U)=>{let I=U||u_.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},d$=(U)=>{if(!U)return{content:U,fileRefs:[]};let f=U.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let I_=0;I_<f.length;I_+=1)if(f[I_].trim()==="Files:"&&f[I_+1]&&/^\s*-\s+/.test(f[I_+1])){d=I_;break}if(d===-1)return{content:U,fileRefs:[]};let Y_=[],D_=d+1;for(;D_<f.length;D_+=1){let I_=f[D_];if(/^\s*-\s+/.test(I_))Y_.push(I_.replace(/^\s*-\s+/,"").trim());else if(!I_.trim())break;else break}if(Y_.length===0)return{content:U,fileRefs:[]};let b_=f.slice(0,d),_0=f.slice(D_);return{content:[...b_,..._0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y_}},w$=(U)=>{if(!U)return{content:U,messageRefs:[]};let f=U.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let I_=0;I_<f.length;I_+=1)if(f[I_].trim()==="Referenced messages:"&&f[I_+1]&&/^\s*-\s+/.test(f[I_+1])){d=I_;break}if(d===-1)return{content:U,messageRefs:[]};let Y_=[],D_=d+1;for(;D_<f.length;D_+=1){let I_=f[D_];if(/^\s*-\s+/.test(I_)){let g0=I_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(g0)Y_.push(g0[1])}else if(!I_.trim())break;else break}if(Y_.length===0)return{content:U,messageRefs:[]};let b_=f.slice(0,d),_0=f.slice(D_);return{content:[...b_,..._0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y_}},s$=(U)=>{let I=d$(U||""),f=w$(I.content||"");return{text:f.content||"",fileRefs:I.fileRefs,messageRefs:f.messageRefs}},M$=(U)=>{if(!U.startsWith("/")||U.includes(`
`)){U_(!1),a([]);return}let I=U.toLowerCase().split(" ")[0];if(I.length<1){U_(!1),a([]);return}let f=E8.filter((d)=>d.name.startsWith(I)||d.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(f.length>0&&!(f.length===1&&f[0].name===I))T_(!1),Q_([]),a(f),O_(0),U_(!0);else U_(!1),a([])},L0=(U)=>{let I=G_,f=I.indexOf(" "),d=f>=0?I.slice(f):"",Y_=U.name+d;w_(Y_),U_(!1),a([]),requestAnimationFrame(()=>{let D_=u_.current;if(!D_)return;let b_=Y_.length;D_.selectionStart=b_,D_.selectionEnd=b_,D_.focus()})},H$=(U)=>{if(f4(U)==null){T_(!1),Q_([]);return}let I=X3(V_,U,{currentChatJid:k_});if(I.length>0&&!(I.length===1&&R4(I[0].agent_name).trim().toLowerCase()===String(U||"").trim().toLowerCase()))U_(!1),a([]),Q_(I),t_(0),T_(!0);else T_(!1),Q_([])},k0=(U)=>{let I=R4(U?.agent_name);if(!I)return;w_(I),T_(!1),Q_([]),requestAnimationFrame(()=>{let f=u_.current;if(!f)return;let d=I.length;f.selectionStart=d,f.selectionEnd=d,f.focus()})},F0=(U)=>{if(j)$0(U);else w_(U),M$(U),H$(U);requestAnimationFrame(()=>A$())},G$=(U)=>{let I=j?B_:G_,f=I&&!I.endsWith(`
`)?`
`:"",d=`${I}${f}${U}`.trimStart();F0(d)},q2=(U)=>{let I=U?.command?.model_label;if(I)return I;let f=U?.command?.message;if(typeof f==="string"){let d=f.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},B0=async(U)=>{if(j||Z0)return;N0(!0);try{let I=await g$("default",U,null,[],null,k_),f=q2(I);E0({model:f??x??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking});try{let d=await j2(k_);if(d)E0(d)}catch{}return _?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{N0(!1)}},P$=async()=>{await B0("/cycle-model")},C$=async(U)=>{if(!U||Z0)return;if(await B0(`/model ${U}`))e_(!1)},W$=(U)=>{U.preventDefault(),U.stopPropagation(),e_((I)=>!I)},b$=(U)=>{if(U==="queue"||U==="steer"||U==="auto")return U;return X_?"queue":null},v0=async(U,I,f={})=>{let{includeMedia:d=!0,includeFileRefs:Y_=!0,includeMessageRefs:D_=!0,clearAfterSubmit:b_=!0,recordHistory:_0=!0}=f||{},f0=typeof U==="string"?U:U&&typeof U?.target?.value==="string"?U.target.value:G_,I_=typeof f0==="string"?f0:"";if(!I_.trim()&&(d?y_.length===0:!0)&&(Y_?O.length===0:!0)&&(D_?q.length===0:!0))return;U_(!1),a([]),T_(!1),Q_([]);let g0=d?[...y_]:[],q$=Y_?[...O]:[],J$=D_?[...q]:[],V$=I_.trim();if(_0&&V$){let V=a0.current,Q=P_(V.filter((E)=>E!==V$));if(Q.push(V$),Q.length>200)Q.splice(0,Q.length-200);a0.current=Q,M0(Q),z0.current=-1,O0.current=""}if(b_)w_(""),R_([]),L?.(),A?.();(async()=>{try{if(await $_?.({content:V$,submitMode:I,fileRefs:q$,messageRefs:J$,mediaFiles:g0})){_?.();return}let Q=[];for(let i of g0){let g=await J4(i);Q.push(g.id)}let E=q$.length?`Files:
${q$.map((i)=>`- ${i}`).join(`
`)}`:"",k=J$.length?`Referenced messages:
${J$.map((i)=>`- message:${i}`).join(`
`)}`:"",m=Q.length?`Images:
${Q.map((i,g)=>{let U0=g0[g]?.name||`image-${g+1}`;return`- attachment:${i} (${U0})`}).join(`
`)}`:"",r=[V$,E,k,m].filter(Boolean).join(`

`),o=await g$("default",r,null,Q,b$(I),k_);if(z_?.(o),o?.command){E0({model:o.command.model_label??x??null,thinking_level:o.command.thinking_level,supports_thinking:o.command.supports_thinking});try{let i=await j2(k_);if(i)E0(i)}catch{}}_?.()}catch(V){console.error("Failed to post:",V)}})()},e0=(U)=>{x_?.(U)},T0=(U)=>{if(U.isComposing)return;if(j&&U.key==="Escape"){U.preventDefault(),$0(""),G?.();return}if(a_&&g_.length>0){let I=u_.current?.value??(j?B_:G_);if(!String(I||"").match(/^@([a-zA-Z0-9_-]*)$/))T_(!1),Q_([]);else{if(U.key==="ArrowDown"){U.preventDefault(),t_((f)=>(f+1)%g_.length);return}if(U.key==="ArrowUp"){U.preventDefault(),t_((f)=>(f-1+g_.length)%g_.length);return}if(U.key==="Tab"||U.key==="Enter"){U.preventDefault(),k0(g_[M_]);return}if(U.key==="Escape"){U.preventDefault(),T_(!1),Q_([]);return}}}if(H_&&K_.length>0){let I=u_.current?.value??(j?B_:G_);if(!String(I||"").startsWith("/"))U_(!1),a([]);else{if(U.key==="ArrowDown"){U.preventDefault(),O_((f)=>(f+1)%K_.length);return}if(U.key==="ArrowUp"){U.preventDefault(),O_((f)=>(f-1+K_.length)%K_.length);return}if(U.key==="Tab"){U.preventDefault(),L0(K_[A_]);return}if(U.key==="Enter"&&!U.shiftKey){if(!(u_.current?.value??(j?B_:G_)).includes(" ")){U.preventDefault();let Y_=K_[A_];U_(!1),a([]),v0(Y_.name);return}}if(U.key==="Escape"){U.preventDefault(),U_(!1),a([]);return}}}if(!j&&(U.key==="ArrowUp"||U.key==="ArrowDown")&&!U.metaKey&&!U.ctrlKey&&!U.altKey&&!U.shiftKey){let I=u_.current;if(!I)return;let f=I.value||"",d=I.selectionStart===0&&I.selectionEnd===0,Y_=I.selectionStart===f.length&&I.selectionEnd===f.length;if(U.key==="ArrowUp"&&d||U.key==="ArrowDown"&&Y_){let D_=a0.current;if(!D_.length)return;U.preventDefault();let b_=z0.current;if(U.key==="ArrowUp"){if(b_===-1)O0.current=f,b_=D_.length-1;else if(b_>0)b_-=1;z0.current=b_,F0(D_[b_]||"")}else{if(b_===-1)return;if(b_<D_.length-1)b_+=1,z0.current=b_,F0(D_[b_]||"");else z0.current=-1,F0(O0.current||""),O0.current=""}requestAnimationFrame(()=>{let _0=u_.current;if(!_0)return;let f0=_0.value.length;_0.selectionStart=f0,_0.selectionEnd=f0});return}}if(U.key==="Enter"&&!U.shiftKey&&(U.ctrlKey||U.metaKey)){U.preventDefault();let I=u_.current?.value??(j?B_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else v0(I,"steer");return}if(U.key==="Enter"&&!U.shiftKey){U.preventDefault();let I=u_.current?.value??(j?B_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else v0(I)}},m0=(U)=>{let I=Array.from(U||[]).filter((f)=>f&&f.type&&f.type.startsWith("image/"));if(!I.length)return;R_((f)=>[...f,...I])},I$=(U)=>{m0(U.target.files),U.target.value=""},S$=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),b.current+=1,r_(!0)},_$=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),b.current=Math.max(0,b.current-1),b.current===0)r_(!1)},X$=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),U.dataTransfer)U.dataTransfer.dropEffect="copy";r_(!0)},o$=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),b.current=0,r_(!1),m0(U.dataTransfer?.files||[])},P0=(U)=>{if(j)return;let I=U.clipboardData?.items;if(!I||!I.length)return;let f=[];for(let d of I){if(d.kind!=="file")continue;let Y_=d.getAsFile?.();if(Y_)f.push(Y_)}if(f.length>0)U.preventDefault(),m0(f)},$$=(U)=>{R_((I)=>I.filter((f,d)=>d!==U))},O$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((U)=>{let{latitude:I,longitude:f,accuracy:d}=U.coords,Y_=`${I.toFixed(5)}, ${f.toFixed(5)}`,D_=Number.isFinite(d)?` ±${Math.round(d)}m`:"",b_=`https://maps.google.com/?q=${I},${f}`,_0=`Location: ${Y_}${D_} ${b_}`;G$(_0)},(U)=>{let I=U?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!C_)return;X0(!0),j2(k_).then((U)=>{let I=Array.isArray(U?.models)?U.models.filter((f)=>typeof f==="string"&&f.trim().length>0):[];y0(I),E0(U)}).catch((U)=>{console.warn("Failed to load model list:",U),y0([])}).finally(()=>{X0(!1)})},[C_,x]),u(()=>{if(j)e_(!1),U_(!1),a([]),T_(!1),Q_([])},[j]),u(()=>{if(!C_)return;let U=(I)=>{let f=s_.current,d=w0.current,Y_=I.target;if(f&&f.contains(Y_))return;if(d&&d.contains(Y_))return;e_(!1)};return document.addEventListener("pointerdown",U),()=>document.removeEventListener("pointerdown",U)},[C_]),u(()=>{let U=()=>{let D_=J_.current?.clientWidth||0;d_((b_)=>b_===D_?b_:D_)};U();let I=J_.current,f=0,d=()=>{if(f)cancelAnimationFrame(f);f=requestAnimationFrame(()=>{f=0,U()})},Y_=null;if(I&&typeof ResizeObserver<"u")Y_=new ResizeObserver(()=>d()),Y_.observe(I);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(f)cancelAnimationFrame(f);if(Y_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,x,K0.length,F?.percent]);let x$=(U)=>{let I=U.target.value;A$(U.target),F0(I)};return u(()=>{requestAnimationFrame(()=>A$())},[G_,B_,j]),u(()=>{if(j)return;H$(G_)},[V_,k_,G_,j]),B`
        <div class="compose-box">
            ${!j&&L_.length>0&&B`
                <div class="compose-queue-stack">
                    ${L_.map((U)=>{let I=typeof U?.content==="string"?U.content:"",f=s$(I);if(!f.text.trim()&&f.fileRefs.length===0&&f.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${I}>
                                    ${f.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${f.text}</div>
                                    `}
                                    ${(f.messageRefs.length>0||f.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${f.messageRefs.map((d)=>B`
                                                <${N$}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${f.fileRefs.map((d)=>{let Y_=d.split("/").pop()||d;return B`
                                                    <${N$}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${Y_}
                                                        title=${d}
                                                        onClick=${()=>l?.(d)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>e0(U)}
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
                                    onClick=${()=>s?.(U)}
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
                class=${`compose-input-wrapper${S_?" drag-active":""}`}
                onDragEnter=${S$}
                onDragOver=${X$}
                onDragLeave=${_$}
                onDrop=${o$}
            >
                <div class="compose-input-main">
                    ${(O.length>0||y_.length>0||q.length>0)&&B`
                        <div class="compose-file-refs">
                            ${q.map((U)=>{return B`
                                    <${N$}
                                        key=${"msg-"+U}
                                        prefix="compose"
                                        label=${"msg:"+U}
                                        title=${"Message reference: "+U}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(U)}
                                    />
                                `})}
                            ${O.map((U)=>{let I=U.split("/").pop()||U;return B`
                                    <${N$}
                                        prefix="compose"
                                        label=${I}
                                        title=${U}
                                        onClick=${()=>l?.(U)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>W?.(U)}
                                    />
                                `})}
                            ${y_.map((U,I)=>{let f=U?.name||`image-${I+1}`;return B`
                                    <${N$}
                                        key=${f+I}
                                        prefix="compose"
                                        label=${f}
                                        title=${f}
                                        removeTitle="Remove image"
                                        onRemove=${()=>$$(I)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!j&&typeof Z_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Z_?.()}
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
                        ref=${u_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?B_:G_}
                        onInput=${x$}
                        onKeyDown=${T0}
                        onPaste=${P0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${a_&&g_.length>0&&B`
                        <div class="slash-autocomplete" ref=${h_}>
                            ${g_.map((U,I)=>B`
                                <div
                                    key=${U.chat_jid||U.agent_name}
                                    class=${`slash-item${I===M_?" active":""}`}
                                    onMouseDown=${(f)=>{f.preventDefault(),k0(U)}}
                                    onMouseEnter=${()=>t_(I)}
                                >
                                    <span class="slash-name">@${U.agent_name}</span>
                                    <span class="slash-desc">${U.display_name||U.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${H_&&K_.length>0&&B`
                        <div class="slash-autocomplete" ref=${I0}>
                            ${K_.map((U,I)=>B`
                                <div
                                    key=${U.name}
                                    class=${`slash-item${I===A_?" active":""}`}
                                    onMouseDown=${(f)=>{f.preventDefault(),L0(U)}}
                                    onMouseEnter=${()=>O_(I)}
                                >
                                    <span class="slash-name">${U.name}</span>
                                    <span class="slash-desc">${U.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${C_&&!j&&B`
                        <div class="compose-model-popup" ref=${s_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${D0&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!D0&&J0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!D0&&J0.map((U)=>B`
                                    <button
                                        key=${U}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${x===U?" active":""}`}
                                        onClick=${()=>{C$(U)}}
                                        disabled=${Z0}
                                    >
                                        ${U}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{P$()}}
                                    disabled=${Z0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${J_}>
                    ${!j&&x&&B`
                    <div class="compose-meta-row">
                        ${!j&&x&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${w0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${y$}
                                    aria-label="Open model picker"
                                    onClick=${W$}
                                    disabled=${Z0}
                                >
                                    ${Z0?"Switching…":Y0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!Z0&&Y$&&B`
                                        <span class="compose-model-usage-hint" title=${y$}>
                                            ${Y$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${q0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${K0.map((U)=>B`
                                <button
                                    key=${U.chat_jid||U.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${U.is_active?" active":""}`}
                                    onClick=${()=>k0(U)}
                                    title=${`${U.display_name||U.chat_jid||"Active agent"} — insert @${U.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${U.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&B`
                        <${k8} usage=${F} />
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(U)=>z?.(U.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?G:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${t0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${O$}
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
                    ${n$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${k$?" active":""}`}
                            onClick=${c}
                            title=${l0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${n&&N_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${N_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${O.includes(n)}
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
                            onClick=${()=>{v0()}}
                            disabled=${!V0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var U3="piclaw_theme",m4="piclaw_tint",f2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},y8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B3={default:{label:"Default",mode:"auto",light:f2,dark:y8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},A8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],R2={theme:"default",tint:null},Q3="light",u4=!1;function F3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function i$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function w8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),G=parseInt(N[3],10);if(![z,K,G].every((W)=>Number.isFinite(W)))return null;let O=`#${[z,K,G].map((W)=>W.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:G,hex:O}}function H3(_){return i$(_)||w8(_)}function z2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function v4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function M8(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function P8(_){return M8(_)>0.4?"#000000":"#ffffff"}function J3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function g4(_){return B3[_]||B3.default}function C8(_){return _.mode==="auto"?J3():_.mode}function b8(_,$){let j=g4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||f2}function I8(_,$,j){let Z=H3($);if(!Z)return _;let N=i$(_.bgPrimary),z=i$(_.bgSecondary),K=i$(_.bgHover),G=i$(_.borderColor);if(!N||!z||!K||!G)return _;let W=i$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:z2(N,Z,0.08),bgSecondary:z2(z,Z,0.12),bgHover:z2(K,Z,0.16),borderColor:z2(G,Z,0.08),accent:Z.hex,accentHover:W?z2(Z,W,0.18):Z.hex}}function S8(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=H3(Z),z=N?v4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?v4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?v4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",O=N?P8(N):$==="dark"?"#000000":"#ffffff",W={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":G,"--accent-contrast-text":O,"--danger-color":_.danger||f2.danger,"--success-color":_.success||f2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(W).forEach(([L,q])=>{if(q)j.style.setProperty(L,q)})}function x8(){if(typeof document>"u")return;let _=document.documentElement;A8.forEach(($)=>_.style.removeProperty($))}function x2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function T8(_,$){if(typeof document>"u")return;let j=x2("theme-color");if(j&&_)j.setAttribute("content",_);let Z=x2("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let N=x2("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let z=x2("apple-mobile-web-app-status-bar-style");if(z)z.setAttribute("content",$==="dark"?"black-translucent":"default")}function f8(){if(typeof window>"u")return;let _={...R2,mode:Q3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function p4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=F3(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=g4(j),z=C8(N),K=b8(j,z);R2={theme:j,tint:Z},Q3=z;let G=document.documentElement;G.dataset.theme=z,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=z;let O=K;if(j==="default"&&Z)O=I8(K,Z,z);if(j==="default"&&!Z)x8();else S8(O,z);if(T8(O.bgPrimary,z),f8(),$.persist!==!1)if(o_(U3,j),Z)o_(m4,Z);else o_(m4,"")}function T2(){if(g4(R2.theme).mode!=="auto")return;p4(R2,{persist:!1})}function D3(){if(typeof window>"u")return()=>{};let _=F3(o0(U3)||"default"),$=o0(m4),j=$?$.trim():null;if(p4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!u4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",T2);else if(Z.addListener)Z.addListener(T2);return u4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",T2);else if(Z.removeListener)Z.removeListener(T2);u4=!1}}return()=>{}}function E3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;p4({theme:j||"default",tint:Z},{persist:!0})}function k3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return J3()}var u2=/#(\w+)/g,R8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),u8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),v8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),m8={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},g8=new Set(["http:","https:","mailto:",""]);function y3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function T$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!g8.has(Z.protocol))return null;return Z.href}catch{return null}}function A3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let G=K.tagName.toLowerCase();if(!u8.has(G)){let W=K.parentNode;if(!W)continue;while(K.firstChild)W.insertBefore(K.firstChild,K);W.removeChild(K);continue}let O=m8[G]||new Set;for(let W of Array.from(K.attributes)){let L=W.name.toLowerCase(),q=W.value;if(L.startsWith("on")){K.removeAttribute(W.name);continue}if(L.startsWith("data-")||L.startsWith("aria-"))continue;if(O.has(L)||v8.has(L)){if(L==="href"){let H=T$(q);if(!H)K.removeAttribute(W.name);else if(K.setAttribute(W.name,H),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(L==="src"){let H=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,A=T$(H,{allowDataImage:G==="img"});if(!A)K.removeAttribute(W.name);else K.setAttribute(W.name,A)}continue}K.removeAttribute(W.name)}}return j.body.innerHTML}function w3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function v2(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=w3(j);if(N===j)break;j=N}return j}function p8(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let G of j){if(!z&&G.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&G.trim().match(/^```\s*$/)){let O=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${O}@@`),z=!1,K=[];continue}if(z)K.push(G);else N.push(G)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function c8(_){if(!_)return _;return v2(_,5)}function h8(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function i8(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function l8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=c8(z);return`<div class="mermaid-container" data-mermaid="${h8(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function M3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function P3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,O=(z.endsWith("/")?z.slice(0,-1).trim():z).split(/\s+/)[0]?.toLowerCase();if(!O||!R8.has(O))return $;if(O==="br")return N?"":"<br>";if(N)return`</${O}>`;return`<${O}>`})}function C3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function b3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function n8(_){if(!window.katex)return _;let $=(K)=>w3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let G=[],O=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(W)=>{let L=G.length;return G.push(W),`@@CODE_BLOCK_${L}@@`});return O=O.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(W)=>{let L=G.length;return G.push(W),`@@CODE_INLINE_${L}@@`}),{html:O,blocks:G}},Z=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(O,W)=>{let L=Number(W);return G[L]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,O)=>{try{let W=katex.renderToString($(O.trim()),{displayMode:!0,throwOnError:!1});return`${G}${W}`}catch(W){return`<span class="math-error" title="${y3(W.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,O)=>{if(/\s$/.test(O))return K;try{let W=katex.renderToString($(O),{displayMode:!1,throwOnError:!1});return`${G}${W}`}catch(W){return`${G}<span class="math-error" title="${y3(W.message)}">$${O}$</span>`}}),Z(z,N.blocks)}function d8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(u2.lastIndex=0,!u2.test(K))continue;u2.lastIndex=0;let G=z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let O=K.split(u2);if(O.length<=1)continue;let W=$.createDocumentFragment();O.forEach((L,q)=>{if(q%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",L),H.textContent=`#${L}`,W.appendChild(H)}else W.appendChild($.createTextNode(L))}),z.parentNode?.replaceChild(W,z)}return $.body.innerHTML}function s8(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function c0(_,$,j={}){if(!_)return"";let Z=s8(_),{text:N,blocks:z}=p8(Z),K=v2(N,2),O=M3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),W=P3(O),L=window.marked?marked.parse(W,{headerIds:!1,mangle:!1}):W.replace(/\n/g,"<br>");return L=C3(L),L=b3(L),L=n8(L),L=d8(L),L=l8(L,z),L=A3(L,j),L}function m2(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=v2($,2),N=M3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=P3(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=C3(K),K=b3(K),K=A3(K),K}async function U$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=k3()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let G=K.dataset.mermaid,O=i8(G||""),W=v2(O,2),L=await $(W,{...N,transparent:!0});K.innerHTML=L,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let O=document.createElement("pre");O.className="mermaid-error",O.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(O),K.removeAttribute("data-mermaid")}}function I3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function S3(_){return String(_||"").trim()||"web:default"}function x3(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function T3(_){if(!_)return!1;return _.status!=="running"}function f3(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function R3({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),z=D(null),K=_?.thinking?m2(_.thinking):"",G=_?.answer?c0(_.answer,null,{sanitize:!1}):"";if(u(()=>{if(N.current&&K)U$(N.current).catch(()=>{})},[K]),u(()=>{if(z.current&&G)U$(z.current).catch(()=>{})},[G]),!_)return null;let O=_.status==="running",W=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),q=x3(_),H=T3(_),A=!O&&W,x=O?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${x}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&B`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&B`<div class="btw-block btw-error">${_.error}</div>`}
            ${L&&B`
                <details class="btw-block btw-thinking" open=${O?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${q&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${H&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
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
    `}var u3="PiClaw";function c4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,G=z[K],O=Z.trim().toLowerCase(),W=typeof $==="string"?$.trim():"",L=W?W:null,q=j||O==="PiClaw".toLowerCase()||O==="pi";return{letter:N,color:G,image:L||(q?"/static/icon-192.png":null)}}function v3(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function m3(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function g3(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",G=z?.dataset?.tint||"",O=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(O&&(G||K&&K!=="default"))return O}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function o8(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function K2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function p3(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return K2(_)?"Compacting context":"Working..."}function r8(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function c3(_,$=Date.now()){let j=o8(_);if(j===null)return null;return r8(Math.max(0,$-j))}function h3({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:G,onPanelToggle:O}){let q=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let U_=a,g_=U_?U_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:U_,totalLines:g_,fullText:U_}}let A_=a.text||"",O_=a.fullText||a.full_text||A_,H_=Number.isFinite(a.totalLines)?a.totalLines:O_?O_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:H_,fullText:O_}},H=160,A=(a)=>String(a||"").replace(/<\/?internal>/gi,""),x=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},R=(a,A_,O_)=>{let H_=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!H_)return{text:"",omitted:0,totalLines:Number.isFinite(O_)?O_:0,visibleLines:0};let U_=H_.split(`
`),g_=U_.length>A_?U_.slice(0,A_).join(`
`):H_,Q_=Number.isFinite(O_)?O_:U_.reduce((a_,T_)=>a_+x(T_),0),M_=g_?g_.split(`
`).reduce((a_,T_)=>a_+x(T_),0):0,t_=Math.max(Q_-M_,0);return{text:g_,omitted:t_,totalLines:Q_,visibleLines:M_}},v=q(j),S=q(Z),F=q($),w=Boolean(v.text)||v.totalLines>0,C=Boolean(S.text)||S.totalLines>0,c=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!c&&!w&&!C&&!N&&!z)return null;let[__,t]=T(new Set),[n,N_]=T(()=>Date.now()),l=(a)=>t((A_)=>{let O_=new Set(A_),H_=!O_.has(a);if(H_)O_.add(a);else O_.delete(a);if(typeof O==="function")O(a,H_);return O_});u(()=>{t(new Set)},[K]);let L_=K2(_);u(()=>{if(!L_)return;N_(Date.now());let a=setInterval(()=>N_(Date.now()),1000);return()=>clearInterval(a)},[L_,_?.started_at,_?.startedAt]);let x_=_?.turn_id||K,s=g3(x_),$_=G?"turn-dot turn-dot-queued":"turn-dot",z_=(a)=>a,Z_=Boolean(_?.last_activity||_?.lastActivity),X_=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":s,V_=z?.kind||"info",k_=X_(V_),G_=X_(_?.kind||(L_?"warning":"info")),w_="",B_=_?.title,$0=_?.status;if(_?.type==="plan")w_=B_?`Planning: ${B_}`:"Planning...";else if(_?.type==="tool_call")w_=B_?`Running: ${B_}`:"Running tool...";else if(_?.type==="tool_status")w_=B_?`${B_}: ${$0||"Working..."}`:$0||"Working...";else if(_?.type==="error")w_=B_||"Agent error";else w_=B_||$0||"Working...";if(Z_)w_="Last activity just now";let y_=({panelTitle:a,text:A_,fullText:O_,totalLines:H_,maxLines:U_,titleClass:g_,panelKey:Q_})=>{let M_=__.has(Q_),t_=O_||A_||"",a_=Q_==="thought"||Q_==="draft"?A(t_):t_,T_=typeof U_==="number",Z0=M_&&T_,N0=T_?R(a_,U_,H_):{text:a_||"",omitted:0,totalLines:Number.isFinite(H_)?H_:0};if(!a_&&!(Number.isFinite(N0.totalLines)&&N0.totalLines>0))return null;let C_=`agent-thinking-body${T_?" agent-thinking-body-collapsible":""}`,e_=T_?`--agent-thinking-collapsed-lines: ${U_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${M_?"true":"false"}
                data-collapsible=${T_?"true":"false"}
                style=${s?`--turn-color: ${s};`:""}
            >
                <div class="agent-thinking-title ${g_||""}">
                    ${s&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${a}
                    ${Z0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>l(Q_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${C_}
                    style=${e_}
                    dangerouslySetInnerHTML=${{__html:m2(a_)}}
                />
                ${!M_&&N0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>l(Q_)}>
                        ▸ ${N0.omitted} more lines
                    </button>
                `}
                ${M_&&N0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>l(Q_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},R_=N?.tool_call?.title,S_=R_?`Awaiting approval: ${R_}`:"Awaiting approval",r_=L_?c3(_,n):null,K_=(a,A_,O_=null)=>{let H_=p3(a);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${A_?`--turn-color: ${A_};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${A_&&B`<span class=${$_} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${H_}</span>
                    ${O_&&B`<span class="agent-status-elapsed">${O_}</span>`}
                </div>
                ${a.detail&&B`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${z&&K_(z,k_)}
            ${_?.type==="intent"&&K_(_,G_,r_)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${s?`--turn-color: ${s};`:""}>
                    <span class=${$_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${S_}</span>
                </div>
            `}
            ${w&&y_({panelTitle:z_("Planning"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,panelKey:"plan"})}
            ${C&&y_({panelTitle:z_("Thoughts"),text:S.text,fullText:S.fullText,totalLines:S.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${c&&y_({panelTitle:z_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${Z_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${s?`--turn-color: ${s};`:""}>
                    ${s&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!Z_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${w_}</span>
                </div>
            `}
        </div>
    `}function i3({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",G=Z?.kind||"other",O=Z?.rawInput||{},W=O.command||O.commands&&O.commands[0]||null,L=O.diff||null,q=O.fileName||O.path||null,H=Z?.description||O.description||O.explanation||null,x=(Array.isArray(Z?.locations)?Z.locations:[]).map((w)=>w?.path).filter((w)=>Boolean(w)),R=Array.from(new Set([q,...x].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let v=async(w)=>{try{await P2(j,w,z||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},S=async()=>{try{await E4(K,`Auto-approved: ${K}`),await P2(j,"approved",z||null),$()}catch(w){console.error("Failed to add to whitelist:",w)}},F=N&&N.length>0;return B`
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
                ${(H||W||L||R.length>0)&&B`
                    <div class="agent-request-body">
                        ${H&&B`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${R.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${R.map((w,C)=>B`<li key=${C}>${w}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${W&&B`
                            <pre class="agent-request-command">${W}</pre>
                        `}
                        ${L&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${L}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${F?N.map((w)=>B`
                            <button 
                                key=${w.optionId||w.id||String(w)}
                                class="agent-request-btn ${w.kind==="allow_once"||w.kind==="allow_always"?"primary":""}"
                                onClick=${()=>v(w.optionId||w.id||w)}
                            >
                                ${w.name||w.label||w.optionId||w.id||String(w)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>v("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>v("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${S}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function l3({status:_}){if(_==="connected")return null;return B`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function n3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let O=$.toLocaleDateString(void 0,{weekday:"short"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${O} ${W}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function Y2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function r0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function f$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var a8=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),t8=new Set(["text/markdown"]);function G2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(a8.has($)||$.startsWith("text/"))return"text";return"unsupported"}function d3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return t8.has($)}function s3(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function e8(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function _9(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function o3(_){return e8(_)||_9(_)}function g2(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function $9(_,$){let j=Math.max(g2(_),g2($)),Z=Math.min(g2(_),g2($));return(j+0.05)/(Z+0.05)}function j9(_,$,j="#ffffff"){let Z=o3(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let G=o3(K);if(!G)continue;let O=$9(Z,G);if(O>z)N=K,z=O}return N}function h4(){let _=getComputedStyle(document.documentElement),$=(x,R)=>{for(let v of x){let S=_.getPropertyValue(v).trim();if(S)return S}return R},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),O=$(["--success-color","--color-success"],"#00ba7c"),W=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),A=j9(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:G,good:O,warning:W,attention:L,border:q,fontFamily:H,buttonTextColor:A}}function r3(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:G,border:O,fontFamily:W}=h4();return{fontFamily:W,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:O},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Z9=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),a3=!1,p2=null,t3=!1;function i4(_){_.querySelector(".adaptive-card-notice")?.remove()}function N9(_,$,j="error"){i4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function z9(_,$=(j)=>c0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function K9(_=($)=>c0($,null)){return($,j)=>{try{let Z=z9($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function Y9(_){if(t3||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=K9(),t3=!0}async function G9(){if(a3)return;if(p2)return p2;return p2=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{a3=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),p2}function W9(){return globalThis.AdaptiveCards}function X9(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function O9(_){return Z9.has(_)}function n4(_){if(!Array.isArray(_))return[];return _.filter(X9)}function q9(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function l4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${l4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function V9(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return l4($);return typeof $==="string"?$:String($)}function L9(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=V9(K.type,j[K.id],K);for(let[G,O]of Object.entries(K))if(Array.isArray(O)||O&&typeof O==="object")K[G]=Z(O);return K};return Z(_)}function B9(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function U9(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Q9(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=U9(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function e3(_,$,j){if(!O9($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await G9()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=W9();Y9(Z);let N=new Z.AdaptiveCard,z=h4();N.hostConfig=new Z.HostConfig(r3());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:L9($.payload,K);N.parse(G),N.onExecuteAction=(L)=>{let q=q9(L);if(j?.onAction)i4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let A=H instanceof Error?H.message:String(H||"Action failed.");N9(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let O=N.render();if(!O)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let W=Q9($);if(W){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=W.label,L.appendChild(q),W.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=W.detail,L.appendChild(H)}_.appendChild(L)}if(i4(_),_.appendChild(O),W)B9(O);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function F9(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function d4(_){if(!Array.isArray(_))return[];return _.filter(F9)}function _6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l$(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,z])=>({key:N,value:l$(z)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:z})=>`${N}: ${z}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function $6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,z])=>({key:N,value:l$(z)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:z})=>`${N}: ${z}`).join(", "):l$(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function H9(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?r0($):null},{label:"Added",value:_?.created_at?f$(_.created_at):null}].filter((Z)=>Z.value)}function j6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=n_(()=>G2($?.content_type),[$?.content_type]),z=s3(N),K=n_(()=>d3($?.content_type),[$?.content_type]),[G,O]=T(N==="text"||N==="pdf"),[W,L]=T(""),[q,H]=T(null),[A,x]=T(null),R=D(null),v=n_(()=>H9($),[$]),S=n_(()=>{if(!K||!W)return"";return c0(W)},[K,W]);return u(()=>{let F=(w)=>{if(w.key==="Escape")j()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[j]),u(()=>{if(!R.current||!S)return;U$(R.current);return},[S]),u(()=>{let F=!1,w=null;async function C(){if(N==="text"){O(!0),x(null);try{let c=await w4(_);if(!F)L(c)}catch{if(!F)x("Failed to load text preview.")}finally{if(!F)O(!1)}return}if(N==="pdf"){O(!0),x(null);try{let c=await M4(_);if(w=URL.createObjectURL(c),!F)H(w)}catch{if(!F)x("Failed to load PDF preview.")}finally{if(!F)O(!1)}return}O(!1)}return C(),()=>{if(F=!0,w)URL.revokeObjectURL(w)}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(F)=>{F.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${Z$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(F)=>F.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&A&&B`<div class="attachment-preview-state">${A}</div>`}
                    ${!G&&!A&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${Z$(_)} alt=${Z} />
                    `}
                    ${!G&&!A&&N==="pdf"&&q&&B`
                        <iframe class="attachment-preview-frame" src=${q} title=${Z}></iframe>
                    `}
                    ${!G&&!A&&N==="text"&&K&&B`
                        <div
                            ref=${R}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:S}}
                        />
                    `}
                    ${!G&&!A&&N==="text"&&!K&&B`
                        <pre class="attachment-preview-text">${W}</pre>
                    `}
                    ${!G&&!A&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((F)=>B`
                        <div class="attachment-preview-meta-item" key=${F.label}>
                            <span class="attachment-preview-meta-label">${F.label}</span>
                            <span class="attachment-preview-meta-value">${F.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function Z6({src:_,onClose:$}){return u(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function J9({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(u(()=>{p$(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?r0(z):"",O=G2(j.content_type)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(W)=>W.stopPropagation()}>
            <a href=${Z$(_)} download=${N} class="file-attachment-main">
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
                        ${K&&B`<span class="file-size">${K}</span>`}
                        ${j.content_type&&B`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${O}
            </button>
        </div>
    `}function D9({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);u(()=>{if(!Number.isFinite(j))return;p$(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?Z$(j):null,O=G2(Z?.content_type)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${z}>
            ${K?B`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(W)=>W.stopPropagation()}>
                        <${N$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:B`
                    <${N$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${O}
                    onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function c2({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?f$(Z):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&B`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function E9({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?r0(_.size):"",N=_.mime_type||"",z=y9(N),K=T$(_.uri);return B`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&B`<span>${N}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function k9({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&B`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let O=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:K||"application/octet-stream"}),W=URL.createObjectURL(O),L=document.createElement("a");L.href=W,L.download=Z.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(W)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function y9(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function A9({preview:_}){let $=T$(_.url),j=T$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
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
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function w9(_,$){return typeof _==="string"?_:""}var M9=1800,P9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,C9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,b9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function I9(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function S9(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let G=K||"idle";if(z.dataset.copyState=G,G==="success")z.innerHTML=C9,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(G==="error")z.innerHTML=b9,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=P9,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),K.appendChild(G);let O=async(W)=>{W.preventDefault(),W.stopPropagation();let q=z.querySelector("code")?.textContent||"",H=await I9(q);N(G,H?"success":"error");let A=j.get(G);if(A)clearTimeout(A);let x=setTimeout(()=>{N(G,"idle"),j.delete(G)},M9);j.set(G,x)};G.addEventListener("click",O),Z.push(()=>{G.removeEventListener("click",O);let W=j.get(G);if(W)clearTimeout(W);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function x9(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<j.length;W+=1)if(j[W].trim()==="Files:"&&j[W+1]&&/^\s*-\s+/.test(j[W+1])){Z=W;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let W=j[z];if(/^\s*-\s+/.test(W))N.push(W.replace(/^\s*-\s+/,"").trim());else if(!W.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),G=j.slice(z),O=[...K,...G].join(`
`);return O=O.replace(/\n{3,}/g,`

`).trim(),{content:O,fileRefs:N}}function T9(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<j.length;W+=1)if(j[W].trim()==="Referenced messages:"&&j[W+1]&&/^\s*-\s+/.test(j[W+1])){Z=W;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let W=j[z];if(/^\s*-\s+/.test(W)){let q=W.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)N.push(q[1])}else if(!W.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),G=j.slice(z),O=[...K,...G].join(`
`);return O=O.replace(/\n{3,}/g,`

`).trim(),{content:O,messageRefs:N}}function f9(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<j.length;W+=1)if(j[W].trim()==="Images:"&&j[W+1]&&/^\s*-\s+/.test(j[W+1])){Z=W;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let W=j[z];if(/^\s*-\s+/.test(W)){let L=W.replace(/^\s*-\s+/,"").trim(),q=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let H=q[1],A=(q[2]||"").trim()||H;N.push({id:H,label:A,raw:L})}else N.push({id:null,label:L,raw:L})}else if(!W.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),G=j.slice(z),O=[...K,...G].join(`
`);return O=O.replace(/\n{3,}/g,`

`).trim(),{content:O,attachments:N}}function R9(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function u9(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(R9).sort((L,q)=>q.length-L.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),O=[],W;while(W=G.nextNode())O.push(W);for(let L of O){let q=L.nodeValue;if(!q||!N.test(q)){N.lastIndex=0;continue}N.lastIndex=0;let H=L.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let A=q.split(N).filter((R)=>R!=="");if(A.length===0)continue;let x=K.createDocumentFragment();for(let R of A)if(z.test(R)){let v=K.createElement("mark");v.className="search-highlight-term",v.textContent=R,x.appendChild(v)}else x.appendChild(K.createTextNode(R));L.parentNode.replaceChild(x,L)}return K.body.innerHTML}function N6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:G,userAvatarUrl:O,userAvatarBackground:W,onDelete:L,isThreadReply:q,isThreadPrev:H,isThreadNext:A,isRemoving:x,highlightQuery:R,onFileRef:v}){let[S,F]=T(null),w=D(null),C=_.data,c=C.type==="agent_response",__=G||"You",t=c?z||u3:__,n=c?c4(z,K,!0):c4(__,O),N_=typeof W==="string"?W.trim().toLowerCase():"",l=!c&&n.image&&(N_==="clear"||N_==="transparent"),L_=c&&Boolean(n.image),x_=`background-color: ${l||L_?"transparent":n.color}`,s=C.content_meta,$_=Boolean(s?.truncated),z_=Boolean(s?.preview),Z_=$_&&!z_,X_=$_?{originalLength:Number.isFinite(s?.original_length)?s.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(s?.max_length)?s.max_length:0}:null,V_=C.content_blocks||[],k_=C.media_ids||[],G_=w9(C.content,C.link_previews),{content:w_,fileRefs:B_}=x9(G_),{content:$0,messageRefs:y_}=T9(w_),{content:R_,attachments:S_}=f9($0);G_=R_;let r_=n4(V_),K_=d4(V_),a=r_.length===1&&typeof r_[0]?.fallback_text==="string"?r_[0].fallback_text.trim():"",A_=K_.length===1?_6(K_[0]).trim():"",O_=Boolean(a)&&G_?.trim()===a||Boolean(A_)&&G_?.trim()===A_,H_=Boolean(G_)&&!Z_&&!O_,U_=typeof R==="string"?R.trim():"",g_=n_(()=>{if(!G_||O_)return"";let b=c0(G_,j);return U_?u9(b,U_):b},[G_,O_,U_]),Q_=(b,e)=>{b.stopPropagation(),F(Z$(e))},[M_,t_]=T(null),a_=(b)=>{t_(b)},T_=(b)=>{b.stopPropagation(),L?.(_)},Z0=(b,e)=>{let P_=new Set;if(!b||e.length===0)return{content:b,usedIds:P_};return{content:b.replace(/attachment:([^\s)"']+)/g,(M0,a0,z0,O0)=>{let V0=a0.replace(/^\/+/,""),S0=e.find((i0)=>i0.name&&i0.name.toLowerCase()===V0.toLowerCase()&&!P_.has(i0.id))||e.find((i0)=>!P_.has(i0.id));if(!S0)return M0;if(P_.add(S0.id),O0.slice(Math.max(0,z0-2),z0)==="](")return`/media/${S0.id}`;return S0.name||"attachment"}),usedIds:P_}},N0=[],C_=[],e_=[],J0=[],y0=[],D0=[],X0=0;if(V_.length>0)V_.forEach((b)=>{if(b?.type==="text"&&b.annotations)D0.push(b.annotations);if(b?.type==="resource_link")J0.push(b);else if(b?.type==="resource")y0.push(b);else if(b?.type==="file"){let e=k_[X0++];if(e)C_.push(e),e_.push({id:e,name:b?.name||b?.filename||b?.title})}else if(b?.type==="image"||!b?.type){let e=k_[X0++];if(e){let P_=typeof b?.mime_type==="string"?b.mime_type:void 0;N0.push({id:e,annotations:b?.annotations,mimeType:P_}),e_.push({id:e,name:b?.name||b?.filename||b?.title})}}});else if(k_.length>0)k_.forEach((b)=>{N0.push({id:b,annotations:null}),e_.push({id:b,name:null})});if(S_.length>0)S_.forEach((b)=>{if(!b?.id)return;let e=e_.find((P_)=>String(P_.id)===String(b.id));if(e&&!e.name)e.name=b.label});let{content:A0,usedIds:d_}=Z0(G_,e_);G_=A0;let u_=N0.filter(({id:b})=>!d_.has(b)),I0=C_.filter((b)=>!d_.has(b)),h_=S_.length>0?S_.map((b,e)=>({id:b.id||`attachment-${e+1}`,label:b.label||`attachment-${e+1}`})):e_.map((b,e)=>({id:b.id,label:b.name||`attachment-${e+1}`})),s_=n_(()=>n4(V_),[V_]),w0=n_(()=>d4(V_),[V_]);u(()=>{if(!w.current)return;return U$(w.current),S9(w.current)},[g_]);let J_=D(null);return u(()=>{if(!J_.current||s_.length===0)return;let b=J_.current;b.innerHTML="";for(let e of s_){let P_=document.createElement("div");b.appendChild(P_),e3(P_,e,{onAction:async(p_)=>{if(p_.type==="Action.OpenUrl"){let M0=T$(p_.url||"");if(!M0)throw Error("Invalid URL");window.open(M0,"_blank","noopener,noreferrer");return}if(p_.type==="Action.Submit"){await D4({post_id:_.id,thread_id:C.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:p_.type,title:p_.title||"",data:p_.data}});return}console.warn("[post] unsupported adaptive card action:",p_.type,p_)}}).catch((p_)=>{console.error("[post] adaptive card render error:",p_),P_.textContent=e.fallback_text||"Card failed to render."})}},[s_,C.thread_id,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${q?"thread-reply":""} ${H?"thread-prev":""} ${A?"thread-next":""} ${x?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${n.image?"has-image":""}" style=${x_}>
                ${n.image?B`<img src=${n.image} alt=${t} />`:n.letter}
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
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(b)=>{if(b.preventDefault(),b.stopPropagation(),Z)Z(_.id)}}>${n3(_.timestamp)}</a>
                </div>
                ${Z_&&X_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${Y2(X_.originalLength)} chars
                            ${X_.maxLength?B` • Display limit: ${Y2(X_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${z_&&X_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${Y2(X_.maxLength)} of ${Y2(X_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(B_.length>0||y_.length>0||h_.length>0)&&B`
                    <div class="post-file-refs">
                        ${y_.map((b)=>{let e=(P_)=>{if(P_.preventDefault(),P_.stopPropagation(),N)N(b,_.chat_jid||null);else{let p_=document.getElementById("post-"+b);if(p_)p_.scrollIntoView({behavior:"smooth",block:"center"}),p_.classList.add("post-highlight"),setTimeout(()=>p_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${b}`} class="post-msg-pill-link" onClick=${e}>
                                    <${N$}
                                        prefix="post"
                                        label=${"msg:"+b}
                                        title=${"Message "+b}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${B_.map((b)=>{let e=b.split("/").pop()||b;return B`
                                <${N$}
                                    prefix="post"
                                    label=${e}
                                    title=${b}
                                    onClick=${()=>v?.(b)}
                                />
                            `})}
                        ${h_.map((b)=>B`
                            <${D9}
                                key=${b.id}
                                attachment=${b}
                                onPreview=${a_}
                            />
                        `)}
                    </div>
                `}
                ${H_&&B`
                    <div 
                        ref=${w}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:g_}}
                        onClick=${(b)=>{if(b.target.classList.contains("hashtag")){b.preventDefault(),b.stopPropagation();let e=b.target.dataset.hashtag;if(e)j?.(e)}else if(b.target.tagName==="IMG")b.preventDefault(),b.stopPropagation(),F(b.target.src)}}
                    />
                `}
                ${s_.length>0&&B`
                    <div ref=${J_} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((b,e)=>{let P_=$6(b);return B`
                                <div key=${`${b.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${P_.title}</span>
                                    </div>
                                    ${P_.summary&&B`
                                        <div class="adaptive-card-submission-summary">${P_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${f$(P_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${D0.length>0&&B`
                    ${D0.map((b,e)=>B`
                        <${c2} key=${e} annotations=${b} />
                    `)}
                `}
                ${u_.length>0&&B`
                    <div class="media-preview">
                        ${u_.map(({id:b,mimeType:e})=>{let p_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?Z$(b):A4(b);return B`
                                <img 
                                    key=${b} 
                                    src=${p_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(M0)=>Q_(M0,b)}
                                />
                            `})}
                    </div>
                `}
                ${u_.length>0&&B`
                    ${u_.map(({annotations:b},e)=>B`
                        ${b&&B`<${c2} key=${e} annotations=${b} />`}
                    `)}
                `}
                ${I0.length>0&&B`
                    <div class="file-attachments">
                        ${I0.map((b)=>B`
                            <${J9} key=${b} mediaId=${b} onPreview=${a_} />
                        `)}
                    </div>
                `}
                ${J0.length>0&&B`
                    <div class="resource-links">
                        ${J0.map((b,e)=>B`
                            <div key=${e}>
                                <${E9} block=${b} />
                                <${c2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y0.length>0&&B`
                    <div class="resource-embeds">
                        ${y0.map((b,e)=>B`
                            <div key=${e}>
                                <${k9} block=${b} />
                                <${c2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${C.link_previews.map((b,e)=>B`
                            <${A9} key=${e} preview=${b} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${S&&B`<${Z6} src=${S} onClose=${()=>F(null)} />`}
        ${M_&&B`
            <${j6}
                mediaId=${M_.mediaId}
                info=${M_.info}
                onClose=${()=>t_(null)}
            />
        `}
    `}function z6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:G,emptyMessage:O,timelineRef:W,agents:L,user:q,onDeletePost:H,reverse:A=!0,removingPostIds:x,searchQuery:R}){let[v,S]=T(!1),F=D(null),w=typeof IntersectionObserver<"u",C=P(async()=>{if(!j||!$||v)return;S(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{S(!1)}},[$,v,j]),c=P((s)=>{let{scrollTop:$_,scrollHeight:z_,clientHeight:Z_}=s.target,X_=A?z_-Z_-$_:$_,V_=Math.max(300,Z_);if(X_<V_)C()},[A,C]);u(()=>{if(!w)return;let s=F.current,$_=W?.current;if(!s||!$_)return;let z_=300,Z_=new IntersectionObserver((X_)=>{for(let V_ of X_){if(!V_.isIntersecting)continue;C()}},{root:$_,rootMargin:`${z_}px 0px ${z_}px 0px`,threshold:0});return Z_.observe(s),()=>Z_.disconnect()},[w,$,j,W,C]);let __=D(C);if(__.current=C,u(()=>{if(w)return;if(!W?.current)return;let{scrollTop:s,scrollHeight:$_,clientHeight:z_}=W.current,Z_=A?$_-z_-s:s,X_=Math.max(300,z_);if(Z_<X_)__.current?.()},[w,_,$,A,W]),u(()=>{if(!W?.current)return;if(!$||v)return;let{scrollTop:s,scrollHeight:$_,clientHeight:z_}=W.current,Z_=A?$_-z_-s:s,X_=Math.max(300,z_);if($_<=z_+1||Z_<X_)__.current?.()},[_,$,v,A,W]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${O||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((s,$_)=>s.id-$_.id),n=(s)=>{let $_=s?.data?.thread_id;if($_===null||$_===void 0||$_==="")return null;let z_=Number($_);return Number.isFinite(z_)?z_:null},N_=new Map;for(let s=0;s<t.length;s+=1){let $_=t[s],z_=Number($_?.id),Z_=n($_);if(Z_!==null){let X_=N_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};X_.replyIndexes.push(s),N_.set(Z_,X_)}else if(Number.isFinite(z_)){let X_=N_.get(z_)||{anchorIndex:-1,replyIndexes:[]};X_.anchorIndex=s,N_.set(z_,X_)}}let l=new Map;for(let[s,$_]of N_.entries()){let z_=new Set;if($_.anchorIndex>=0)z_.add($_.anchorIndex);for(let Z_ of $_.replyIndexes)z_.add(Z_);l.set(s,Array.from(z_).sort((Z_,X_)=>Z_-X_))}let L_=t.map((s,$_)=>{let z_=n(s);if(z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=l.get(z_);if(!Z_||Z_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let X_=Z_.indexOf($_);if(X_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:X_>0,hasThreadNext:X_<Z_.length-1}}),x_=B`<div class="timeline-sentinel" ref=${F}></div>`;return B`
        <div class="timeline ${A?"reverse":"normal"}" ref=${W} onScroll=${c}>
            <div class="timeline-content">
                ${A?x_:null}
                ${t.map((s,$_)=>{let z_=Boolean(s.data?.thread_id&&s.data.thread_id!==s.id),Z_=x?.has?.(s.id),X_=L_[$_]||{};return B`
                    <${N6}
                        key=${s.id}
                        post=${s}
                        isThreadReply=${z_}
                        isThreadPrev=${X_.hasThreadPrev}
                        isThreadNext=${X_.hasThreadNext}
                        isRemoving=${Z_}
                        highlightQuery=${R}
                        agentName=${v3(s.data?.agent_id,L||{})}
                        agentAvatarUrl=${m3(s.data?.agent_id,L||{})}
                        userName=${q?.name||q?.user_name}
                        userAvatarUrl=${q?.avatar_url||q?.avatarUrl||q?.avatar}
                        userAvatarBackground=${q?.avatar_background||q?.avatarBackground}
                        onClick=${()=>Z?.(s)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${G}
                        onDelete=${H}
                    />
                `})}
                ${A?null:x_}
            </div>
        </div>
    `}class K6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var j0=new K6;var h2=null,s4=null;function Y6(){if(s4)return Promise.resolve(s4);if(!h2)h2=import("/static/dist/editor.bundle.js").then((_)=>{return s4=_,_}).catch((_)=>{throw h2=null,_});return h2}class G6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await Y6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var o4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new G6(_,$)}};function r4(){Y6().catch(()=>{})}var v9={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},m9={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},i2=null,a4=null;function g9(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function p9(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!g9(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function c9(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!i2)i2=p9(()=>Promise.resolve($.init?.())).catch((j)=>{throw i2=null,j});return await i2,$}async function h9(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!a4)a4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await a4}async function i9(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function l9(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function n9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Q$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function d9(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function W6(){let _=n9(),$=_?m9:v9,j=Q$("--bg-primary",_?"#000000":"#ffffff"),Z=Q$("--text-primary",_?"#e7e9ea":"#0f1419"),N=Q$("--text-secondary",_?"#71767b":"#536471"),z=Q$("--accent-color","#1d9bf0"),K=Q$("--danger-color",_?"#ff7b72":"#cf222e"),G=Q$("--success-color",_?"#7ee787":"#1a7f37"),O=Q$("--bg-hover",_?"#1d1f23":"#e8ebed"),W=Q$("--border-color",_?"#2f3336":"#eff3f4"),L=Q$("--accent-soft-strong",d9(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:L,selectionForeground:Z,black:O,red:K,green:G,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:W}}class X6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await c9();if(await h9(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:W6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=W6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await i9();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(l9($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var t4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new X6(_,$)}};function E$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function s9(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),W=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,L=[];for(let H of W.split("/")){if(!H||H===".")continue;if(H===".."){if(L.length>0)L.pop();continue}L.push(H)}let q=L.join("/");return`${b2(q)}${z}${K}`}function W2(_){return _?.preview||null}function o9(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function r9(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function a9(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${E$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${E$(r0($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${E$(f$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${E$(r9($))}</span>`),Z.push(`<span><strong>extension:</strong> ${E$(o9(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${E$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function t9(_){let $=W2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=a9(_,$);if($.kind==="image"){let Z=$.url||($.path?b2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${E$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=c0($.text||"",null,{rewriteImageSrc:(N)=>s9(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${E$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class e4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=t9(this.context)}getContent(){let _=W2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=W2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var _1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=W2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new e4(_,$)}},$1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return W2(_)||_?.path?1:!1},mount(_,$){return new e4(_,$)}};var e9=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),_5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},$5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function q6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function O6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function V6(){return!!(self.crossOriginIsolated&&typeof SharedArrayBuffer<"u")}class L6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=q6(j),z=$5[N]||"\uD83D\uDCC4",K=_5[N]||"Office Document",G=V6(),O=document.createElement("div");if(O.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",O.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${O6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${O6(K)}</div>
                ${G?`
                    <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Open in Tab
                    </button>
                `:`
                    <div style="padding:10px 16px;background:rgba(234,179,8,0.1);border:1px solid rgba(234,179,8,0.3);
                        border-radius:6px;font-size:12px;color:#eab308;line-height:1.5;">
                        ⚠️ Requires HTTPS for SharedArrayBuffer.<br>
                        <span style="color:var(--text-secondary,#888);font-size:11px;">
                            Connect via HTTPS to use the Office viewer.
                        </span>
                    </div>
                `}
            </div>
        `,_.appendChild(O),G){let W=O.querySelector("#ov-open-tab");if(W)W.addEventListener("click",()=>{let L=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class B6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document";if(!V6()){let G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1e1e1e;",G.innerHTML=`
                <div style="text-align:center;max-width:420px;padding:32px;">
                    <div style="font-size:48px;margin-bottom:16px;">\uD83D\uDD12</div>
                    <div style="font-size:15px;font-weight:600;color:#e0e0e0;margin-bottom:8px;">
                        Secure Context Required
                    </div>
                    <div style="font-size:13px;color:#999;line-height:1.6;">
                        The Office viewer requires <code style="background:#333;padding:1px 5px;border-radius:3px;font-size:12px;">SharedArrayBuffer</code>
                        which is only available over HTTPS.<br><br>
                        Connect via <strong style="color:#4fc1ff;">https://</strong> to use this feature.
                    </div>
                </div>
            `,_.appendChild(G);return}let z=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(z)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=q6(_?.path);if(!$||!e9.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new L6(_,$);return new B6(_,$)}};function j5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function Z5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class U6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Z5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Q6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/drawio/edit?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Z1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!j5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new U6(_,$);return new Q6(_,$)}};class F6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var m_=new F6;var l2="workspaceExplorerScale",N5=["compact","default","comfortable"],z5=new Set(N5),K5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function H6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return z5.has(j)?j:$}function N1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Y5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function G5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function z1(_={}){let $=Y5(_),j=_.stored?H6(_.stored,$):$;return G5(j,_)}function J6(_){return K5[H6(_)]}var W5=60000,y6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function A6(_,$,j,Z=0,N=[]){if(!j&&y6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)A6(z,$,j,Z+1,N);return N}function D6(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&y6(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function W1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,z=!j||j.length!==Z.length,K=Z.map((G)=>{let O=W1(N.get(G.path),G);if(O!==N.get(G.path))z=!0;return O});return z?{...$,children:K}:_}function Y1(_,$,j){if(!_)return _;if(_.path===$)return W1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=Y1(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var w6=4,K1=14,X5=8,O5=16;function M6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=M6(Z);return _.__bytes=j,j}function P6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=w6)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let G of N){let O=Math.max(0,Number(G?.__bytes??G?.size??0));if(O<=0)continue;if(G.type==="dir")z.push({kind:"dir",node:G,size:O});else z.push({kind:"file",name:G.name,path:G.path,size:O})}z.sort((G,O)=>O.size-G.size);let K=z;if(z.length>K1){let G=z.slice(0,K1-1),O=z.slice(K1-1),W=O.reduce((L,q)=>L+q.size,0);G.push({kind:"other",name:`+${O.length} more`,path:`${Z.path}/[other]`,size:W}),K=G}return Z.children=K.map((G)=>{if(G.kind==="dir")return P6(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function E6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function C6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function n2(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function X1(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,G=z-N>K?N+K:z,O=n2(_,$,Z,N),W=n2(_,$,Z,G),L=n2(_,$,j,G),q=n2(_,$,j,N),H=G-N>Math.PI?1:0;return[`M ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var b6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function I6(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(G,O,W,L)=>{let q=Array.isArray(G?.children)?G.children:[];if(!q.length)return;let H=Math.max(0,Number(G.size)||0);if(H<=0)return;let A=W-O,x=O;q.forEach((R,v)=>{let S=Math.max(0,Number(R.size)||0);if(S<=0)return;let F=S/H,w=x,C=v===q.length-1?W:x+A*F;if(x=C,C-w<0.003)return;let c=b6[L];if(c){let __=C6(w,L,j);if(Z.push({key:R.path,path:R.path,label:R.name,size:S,color:__,depth:L,startAngle:w,endAngle:C,innerRadius:c[0],outerRadius:c[1],d:X1(120,120,c[0],c[1],w,C)}),L===1)N.push({key:R.path,name:R.name,size:S,pct:z>0?S/z*100:0,color:__})}if(L<w6)K(R,w,C,L+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function G1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=G1(Z,$);if(N)return N}return null}function S6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=b6[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,G=C6(z,1,Z),W=`${$||"."}/[files]`;return{segments:[{key:W,path:W,label:_,size:j,color:G,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:X1(120,120,N[0],N[1],z,K)}],legend:[{key:W,name:_,size:j,pct:100,color:G}]}}function k6(_,$=!1,j=!1){if(!_)return null;let Z=M6(_),N=P6(_,0),z=N.size||Z,{segments:K,legend:G}=I6(N,z,j);if(!K.length&&z>0){let O=S6("[files]",N.path,z,j);K=O.segments,G=O.legend}return{root:N,totalSize:z,segments:K,legend:G,truncated:$,isDarkTheme:j}}function q5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[z,K]=T(()=>[_?.root?.path||"."]),[G,O]=T(!1);u(()=>{let l=_?.root?.path||".";N(l),K([l]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!Z)return;O(!0);let l=setTimeout(()=>O(!1),180);return()=>clearTimeout(l)},[Z]);let W=n_(()=>{return G1(_.root,Z)||_.root},[_?.root,Z]),L=W?.size||_.totalSize||0,{segments:q,legend:H}=n_(()=>{let l=I6(W,L,_.isDarkTheme);if(l.segments.length>0)return l;if(L<=0)return l;let L_=W?.children?.length?"Total":"[files]";return S6(L_,W?.path||_?.root?.path||".",L,_.isDarkTheme)},[W,L,_.isDarkTheme,_?.root?.path]),[A,x]=T(q),R=D(new Map),v=D(0);u(()=>{let l=R.current,L_=new Map(q.map((z_)=>[z_.key,z_])),x_=performance.now(),s=220,$_=(z_)=>{let Z_=Math.min(1,(z_-x_)/220),X_=Z_*(2-Z_),V_=q.map((k_)=>{let w_=l.get(k_.key)||{startAngle:k_.startAngle,endAngle:k_.startAngle,innerRadius:k_.innerRadius,outerRadius:k_.innerRadius},B_=(r_,K_)=>r_+(K_-r_)*X_,$0=B_(w_.startAngle,k_.startAngle),y_=B_(w_.endAngle,k_.endAngle),R_=B_(w_.innerRadius,k_.innerRadius),S_=B_(w_.outerRadius,k_.outerRadius);return{...k_,d:X1(120,120,R_,S_,$0,y_)}});if(x(V_),Z_<1)v.current=requestAnimationFrame($_)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame($_),R.current=L_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[q]);let S=A.length?A:q,F=L>0?r0(L):"0 B",w=W?.name||"",c=(w&&w!=="."?w:"Total")||"Total",__=F,t=z.length>1,n=(l)=>{if(!l?.path)return;let L_=G1(_.root,l.path);if(!L_||!Array.isArray(L_.children)||L_.children.length===0)return;K((x_)=>[...x_,L_.path]),N(L_.path),j(null)},N_=()=>{if(!t)return;K((l)=>{let L_=l.slice(0,-1);return N(L_[L_.length-1]||_?.root?.path||"."),L_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${W?.path||_?.root?.path||"."}`}
                data-segments=${S.length}
                data-base-size=${L}>
                ${S.map((l)=>B`
                    <path
                        key=${l.key}
                        d=${l.d}
                        fill=${l.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===l.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(l)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(l)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>n(l)}
                    >
                        <title>${l.label} — ${r0(l.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${c}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${__}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((l)=>B`
                        <div key=${l.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${l.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${l.name}>${l.name}</span>
                            <span class="workspace-folder-starburst-size">${r0(l.size)}</span>
                            <span class="workspace-folder-starburst-pct">${l.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function V5({mediaId:_}){let[$,j]=T(null);if(u(()=>{if(!_)return;p$(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?r0($.metadata.size):"";return B`
        <a href=${Z$(_)} download=${Z} class="file-attachment"
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
                ${N&&B`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function x6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z}){let[N,z]=T(null),[K,G]=T(new Set(["."])),[O,W]=T(null),[L,q]=T(null),[H,A]=T(""),[x,R]=T(null),[v,S]=T(null),[F,w]=T(!0),[C,c]=T(!1),[__,t]=T(null),[n,N_]=T(()=>c$("workspaceShowHidden",!1)),[l,L_]=T(!1),[x_,s]=T(null),[$_,z_]=T(null),[Z_,X_]=T(null),[V_,k_]=T(!1),[G_,w_]=T(null),[B_,$0]=T(()=>E6()),[y_,R_]=T(()=>z1({stored:o0(l2),...N1()})),S_=D(K),r_=D(""),K_=D(null),a=D(0),A_=D(new Set),O_=D(null),H_=D(new Map),U_=D(_),g_=D(Z),Q_=D(null),M_=D(null),t_=D(null),a_=D(null),T_=D(null),Z0=D(null),N0=D("."),C_=D(null),e_=D({path:null,dragging:!1,startX:0,startY:0}),J0=D({path:null,dragging:!1,startX:0,startY:0}),y0=D({path:null,timer:0}),D0=D(!1),X0=D(0),A0=D(new Map),d_=D(null),u_=D(null),I0=D(null),h_=D(null),s_=D(n),w0=D($),J_=D(j??$),b=D(0),e=D(Z_),P_=D(l),p_=D(x_),M0=D(null),a0=D({x:0,y:0}),z0=D(0),O0=D(null),V0=D(O),t0=D(L),S0=D(null),h0=D(null),i0=D(x);U_.current=_,g_.current=Z,u(()=>{S_.current=K},[K]),u(()=>{s_.current=n},[n]),u(()=>{w0.current=$},[$]),u(()=>{J_.current=j??$},[j,$]),u(()=>{e.current=Z_},[Z_]),u(()=>{if(typeof window>"u")return;let V=()=>{R_(z1({stored:o0(l2),...N1()}))};V();let Q=()=>V(),E=()=>V(),k=(g)=>{if(!g||g.key===null||g.key===l2)V()};window.addEventListener("resize",Q),window.addEventListener("focus",E),window.addEventListener("storage",k);let m=window.matchMedia?.("(pointer: coarse)"),r=window.matchMedia?.("(hover: none)"),o=(g,W_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",W_);else if(g.addListener)g.addListener(W_)},i=(g,W_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",W_);else if(g.removeListener)g.removeListener(W_)};return o(m,Q),o(r,Q),()=>{window.removeEventListener("resize",Q),window.removeEventListener("focus",E),window.removeEventListener("storage",k),i(m,Q),i(r,Q)}},[]),u(()=>{let V=(Q)=>{let E=Q?.detail?.path;if(!E)return;let k=E.split("/"),m=[];for(let r=1;r<k.length;r++)m.push(k.slice(0,r).join("/"));if(m.length)G((r)=>{let o=new Set(r);o.add(".");for(let i of m)o.add(i);return o});W(E),requestAnimationFrame(()=>{let r=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(r)r.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",V),()=>window.removeEventListener("workspace-reveal-path",V)},[]),u(()=>{P_.current=l},[l]),u(()=>{p_.current=x_},[x_]),u(()=>{V0.current=O},[O]),u(()=>{t0.current=L},[L]),u(()=>{i0.current=x},[x]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let V=()=>$0(E6());V();let Q=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>V();if(Q?.addEventListener)Q.addEventListener("change",E);else if(Q?.addListener)Q.addListener(E);let k=typeof MutationObserver<"u"?new MutationObserver(()=>V()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(Q?.removeEventListener)Q.removeEventListener("change",E);else if(Q?.removeListener)Q.removeListener(E);k?.disconnect()}},[]),u(()=>{if(!L)return;let V=T_.current;if(!V)return;let Q=requestAnimationFrame(()=>{try{V.focus(),V.select()}catch{}});return()=>cancelAnimationFrame(Q)},[L]);let n$=async(V)=>{c(!0),R(null),S(null);try{let Q=await P4(V,20000);R(Q)}catch(Q){R({error:Q.message||"Failed to load preview"})}finally{c(!1)}};Q_.current=n$;let k$=async()=>{if(!w0.current)return;try{let V=await Z2("",1,s_.current),Q=D6(V.root,S_.current,s_.current);if(Q===r_.current){w(!1);return}if(r_.current=Q,K_.current=V.root,!a.current)a.current=requestAnimationFrame(()=>{a.current=0,z((E)=>W1(E,K_.current)),w(!1)})}catch(V){t(V.message||"Failed to load workspace"),w(!1)}},l0=async(V)=>{if(!V)return;if(A_.current.has(V))return;A_.current.add(V);try{let Q=await Z2(V,1,s_.current);z((E)=>Y1(E,V,Q.root))}catch(Q){t(Q.message||"Failed to load workspace")}finally{A_.current.delete(V)}};M_.current=l0;let K0=P(()=>{let V=O;if(!V)return".";let Q=H_.current?.get(V);if(Q&&Q.type==="dir")return Q.path;if(V==="."||!V.includes("/"))return".";let E=V.split("/");return E.pop(),E.join("/")||"."},[O]),K$=P((V)=>{let Q=V?.closest?.(".workspace-row");if(!Q)return null;let E=Q.dataset.path,k=Q.dataset.type;if(!E)return null;if(k==="dir")return E;if(E.includes("/")){let m=E.split("/");return m.pop(),m.join("/")||"."}return"."},[]),q0=P((V)=>{return K$(V?.target||null)},[K$]),Y0=P((V)=>{e.current=V,X_(V)},[]),v_=P(()=>{let V=y0.current;if(V?.timer)clearTimeout(V.timer);y0.current={path:null,timer:0}},[]),u0=P((V)=>{if(!V||V==="."){v_();return}let Q=H_.current?.get(V);if(!Q||Q.type!=="dir"){v_();return}if(S_.current?.has(V)){v_();return}if(y0.current?.path===V)return;v_();let E=setTimeout(()=>{y0.current={path:null,timer:0},M_.current?.(V),G((k)=>{let m=new Set(k);return m.add(V),m})},600);y0.current={path:V,timer:E}},[v_]),x0=P((V,Q)=>{if(a0.current={x:V,y:Q},z0.current)return;z0.current=requestAnimationFrame(()=>{z0.current=0;let E=M0.current;if(!E)return;let k=a0.current;E.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),Y$=P((V)=>{if(!V)return;let E=(H_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!E)return;z_({path:V,label:E})},[]),F$=P(()=>{if(z_(null),z0.current)cancelAnimationFrame(z0.current),z0.current=0;if(M0.current)M0.current.style.transform="translate(-9999px, -9999px)"},[]),y$=P((V)=>{if(!V)return".";let Q=H_.current?.get(V);if(Q&&Q.type==="dir")return Q.path;if(V==="."||!V.includes("/"))return".";let E=V.split("/");return E.pop(),E.join("/")||"."},[]),E0=P(()=>{q(null),A("")},[]),A$=P((V)=>{if(!V)return;let E=(H_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!E||V===".")return;q(V),A(E)},[]),d$=P(async()=>{let V=t0.current;if(!V)return;let Q=(H||"").trim();if(!Q){E0();return}let E=H_.current?.get(V),k=(E?.name||V.split("/").pop()||V).trim();if(Q===k){E0();return}try{let r=(await I4(V,Q))?.path||V,o=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(E0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:V,newPath:r,type:E?.type||"file"}})),E?.type==="dir")G((i)=>{let g=new Set;for(let W_ of i)if(W_===V)g.add(r);else if(W_.startsWith(`${V}/`))g.add(`${r}${W_.slice(V.length)}`);else g.add(W_);return g});if(W(r),E?.type==="dir")R(null),c(!1),S(null);else Q_.current?.(r);M_.current?.(o)}catch(m){t(m?.message||"Failed to rename file")}},[E0,H]),w$=P(async(V)=>{let k=V||".";for(let m=0;m<50;m+=1){let o=`untitled${m===0?"":`-${m}`}.md`;try{let g=(await b4(k,o,""))?.path||(k==="."?o:`${k}/${o}`);if(k&&k!==".")G((W_)=>new Set([...W_,k]));W(g),t(null),M_.current?.(k),Q_.current?.(g);return}catch(i){if(i?.status===409||i?.code==="file_exists")continue;t(i?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),s$=P((V)=>{if(V?.stopPropagation?.(),V_)return;let Q=y$(V0.current);w$(Q)},[V_,y$,w$]);u(()=>{if(typeof window>"u")return;let V=(Q)=>{let E=Q?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;z((i)=>{let g=i;for(let W_ of E){if(!W_?.root)continue;if(!g||W_.path==="."||!W_.path)g=W_.root;else g=Y1(g,W_.path,W_.root)}if(g)r_.current=D6(g,S_.current,s_.current);return w(!1),g});let k=V0.current;if(Boolean(k)&&E.some((i)=>{let g=i?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)||g.startsWith(`${k}/`)}))A0.current.clear();if(!k||!i0.current)return;let r=H_.current?.get(k);if(r&&r.type==="dir")return;if(E.some((i)=>{let g=i?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)}))Q_.current?.(k)};return window.addEventListener("workspace-update",V),()=>window.removeEventListener("workspace-update",V)},[]),O_.current=k$;let M$=D(()=>{if(typeof window>"u")return;let V=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),Q=J_.current??w0.current,E=document.visibilityState!=="hidden"&&(Q||V.matches&&w0.current);N2(E,s_.current).catch(()=>{})}).current,L0=D(0),H$=D(()=>{if(L0.current)clearTimeout(L0.current);L0.current=setTimeout(()=>{L0.current=0,M$()},250)}).current;u(()=>{if(w0.current)O_.current?.();H$()},[$,j]),u(()=>{O_.current(),M$();let V=setInterval(()=>O_.current(),W5),Q=h$("previewHeight",null),E=Number.isFinite(Q)?Math.min(Math.max(Q,80),600):280;if(X0.current=E,t_.current)t_.current.style.setProperty("--preview-height",`${E}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>H$();if(k.addEventListener)k.addEventListener("change",m);else if(k.addListener)k.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(V),a.current)cancelAnimationFrame(a.current),a.current=0;if(k.removeEventListener)k.removeEventListener("change",m);else if(k.removeListener)k.removeListener(m);if(document.removeEventListener("visibilitychange",m),L0.current)clearTimeout(L0.current),L0.current=0;if(C_.current)clearTimeout(C_.current),C_.current=null;N2(!1,s_.current).catch(()=>{})}},[]);let k0=n_(()=>A6(N,K,n),[N,K,n]),F0=n_(()=>new Map(k0.map((V)=>[V.node.path,V.node])),[k0]),G$=n_(()=>J6(y_),[y_]);H_.current=F0;let B0=(O?H_.current.get(O):null)?.type==="dir";u(()=>{if(!O||!B0){w_(null),d_.current=null,u_.current=null;return}let V=O,Q=`${n?"hidden":"visible"}:${O}`,E=A0.current,k=E.get(Q);if(k?.root){E.delete(Q),E.set(Q,k);let o=k6(k.root,Boolean(k.truncated),B_);if(o)d_.current=o,u_.current=O,w_({loading:!1,error:null,payload:o});return}let m=d_.current,r=u_.current;w_({loading:!0,error:null,payload:r===O?m:null}),Z2(O,X5,n).then((o)=>{if(V0.current!==V)return;let i={root:o?.root,truncated:Boolean(o?.truncated)};E.delete(Q),E.set(Q,i);while(E.size>O5){let W_=E.keys().next().value;if(!W_)break;E.delete(W_)}let g=k6(i.root,i.truncated,B_);d_.current=g,u_.current=O,w_({loading:!1,error:null,payload:g})}).catch((o)=>{if(V0.current!==V)return;w_({loading:!1,error:o?.message||"Failed to load folder size chart",payload:r===O?m:null})})},[O,B0,n,B_]);let P$=Boolean(x&&x.kind==="text"&&!B0&&(!x.size||x.size<=262144)),C$=P$?"Open in editor":x?.size>262144?"File too large to edit":"File is not editable";u(()=>{let V=I0.current;if(h_.current)h_.current.dispose(),h_.current=null;if(!V)return;if(V.innerHTML="",!O||B0||!x||x.error)return;let Q={path:O,content:typeof x.text==="string"?x.text:void 0,mtime:x.mtime,size:x.size,preview:x,mode:"view"},E=j0.resolve(Q)||j0.get("workspace-preview-default");if(!E)return;let k=E.mount(V,Q);return h_.current=k,()=>{if(h_.current===k)k.dispose(),h_.current=null;V.innerHTML=""}},[O,B0,x]);let W$=(V)=>{let Q=V?.target;if(Q instanceof Element)return Q;return Q?.parentElement||null},b$=(V)=>{return Boolean(V?.closest?.(".workspace-node-icon, .workspace-label-text"))},v0=D((V)=>{if(h0.current)clearTimeout(h0.current),h0.current=null;let E=W$(V)?.closest?.("[data-path]");if(!E)return;let k=E.dataset.path;if(E.dataset.type==="dir"||!k)return;if(t0.current===k)E0();g_.current?.(k)}).current,e0=D((V)=>{if(D0.current){D0.current=!1;return}let Q=W$(V),E=Q?.closest?.("[data-path]");if(a_.current?.focus?.(),!E)return;let k=E.dataset.path,m=E.dataset.type,r=Boolean(Q?.closest?.(".workspace-caret")),o=Boolean(Q?.closest?.("button"))||Boolean(Q?.closest?.("a"))||Boolean(Q?.closest?.("input")),i=V0.current===k,g=t0.current;if(g){if(g===k)return;E0()}let W_=m==="file"&&S0.current===k&&!r&&!o;if(i&&!r&&!o&&k!=="."&&!W_){if(h0.current)clearTimeout(h0.current);h0.current=setTimeout(()=>{h0.current=null,A$(k)},350);return}if(m==="dir"){if(S0.current=null,W(k),R(null),S(null),c(!1),!S_.current.has(k))M_.current?.(k);if(i&&!r)return;G((H0)=>{let C0=new Set(H0);if(C0.has(k))C0.delete(k);else C0.add(k);return C0})}else{S0.current=null,W(k);let U0=H_.current.get(k);if(U0)U_.current?.(U0.path,U0);Q_.current?.(k)}}).current,T0=D(()=>{r_.current="",O_.current(),Array.from(S_.current||[]).filter((Q)=>Q&&Q!==".").forEach((Q)=>M_.current?.(Q))}).current,m0=D(()=>{S0.current=null,W(null),R(null),S(null),c(!1)}).current,I$=D(()=>{N_((V)=>{let Q=!V;if(typeof window<"u")o_("workspaceShowHidden",String(Q));return s_.current=Q,N2(!0,Q).catch(()=>{}),r_.current="",O_.current?.(),Array.from(S_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>M_.current?.(k)),Q})}).current,S$=D((V)=>{if(W$(V)?.closest?.("[data-path]"))return;m0()}).current,_$=P(async(V)=>{if(!V)return;let Q=V.split("/").pop()||V;if(!window.confirm(`Delete "${Q}"? This cannot be undone.`))return;try{await x4(V);let k=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(V0.current===V)m0();M_.current?.(k),t(null)}catch(k){R((m)=>({...m||{},error:k.message||"Failed to delete file"}))}},[m0]),X$=P((V)=>{let Q=a_.current;if(!Q||!V||typeof CSS>"u"||typeof CSS.escape!=="function")return;Q.querySelector(`[data-path="${CSS.escape(V)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),o$=P((V)=>{let Q=k0;if(!Q||Q.length===0)return;let E=O?Q.findIndex((k)=>k.node.path===O):-1;if(V.key==="ArrowDown"){V.preventDefault();let k=Math.min(E+1,Q.length-1),m=Q[k];if(!m)return;if(W(m.node.path),m.node.type!=="dir")U_.current?.(m.node.path,m.node),Q_.current?.(m.node.path);else R(null),c(!1),S(null);X$(m.node.path);return}if(V.key==="ArrowUp"){V.preventDefault();let k=E<=0?0:E-1,m=Q[k];if(!m)return;if(W(m.node.path),m.node.type!=="dir")U_.current?.(m.node.path,m.node),Q_.current?.(m.node.path);else R(null),c(!1),S(null);X$(m.node.path);return}if(V.key==="ArrowRight"&&E>=0){let k=Q[E];if(k?.node?.type==="dir"&&!K.has(k.node.path))V.preventDefault(),M_.current?.(k.node.path),G((m)=>new Set([...m,k.node.path]));return}if(V.key==="ArrowLeft"&&E>=0){let k=Q[E];if(k?.node?.type==="dir"&&K.has(k.node.path))V.preventDefault(),G((m)=>{let r=new Set(m);return r.delete(k.node.path),r});return}if(V.key==="Enter"&&E>=0){V.preventDefault();let k=Q[E];if(!k)return;let m=k.node.path;if(k.node.type==="dir"){if(!S_.current.has(m))M_.current?.(m);G((o)=>{let i=new Set(o);if(i.has(m))i.delete(m);else i.add(m);return i}),R(null),S(null),c(!1)}else U_.current?.(m,k.node),Q_.current?.(m);return}if((V.key==="Delete"||V.key==="Backspace")&&E>=0){let k=Q[E];if(!k||k.node.type==="dir")return;V.preventDefault(),_$(k.node.path);return}if(V.key==="Escape")V.preventDefault(),m0()},[m0,_$,K,k0,X$,O]),P0=P((V)=>{let Q=W$(V),E=Q?.closest?.(".workspace-row");if(!E)return;let k=E.dataset.type,m=E.dataset.path;if(!m||m===".")return;if(t0.current===m)return;let r=V?.touches?.[0];if(!r)return;if(e_.current={path:b$(Q)?m:null,dragging:!1,startX:r.clientX,startY:r.clientY},k!=="file")return;if(C_.current)clearTimeout(C_.current);C_.current=setTimeout(()=>{if(C_.current=null,e_.current?.dragging)return;_$(m)},600)},[_$]),$$=P(()=>{if(C_.current)clearTimeout(C_.current),C_.current=null;let V=e_.current;if(V?.dragging&&V.path){let Q=e.current||K0(),E=O0.current;if(typeof E==="function")E(V.path,Q)}e_.current={path:null,dragging:!1,startX:0,startY:0},b.current=0,L_(!1),s(null),Y0(null),v_(),F$()},[K0,F$,Y0,v_]),O$=P((V)=>{let Q=e_.current,E=V?.touches?.[0];if(!E||!Q?.path){if(C_.current)clearTimeout(C_.current),C_.current=null;return}let k=Math.abs(E.clientX-Q.startX),m=Math.abs(E.clientY-Q.startY),r=k>8||m>8;if(r&&C_.current)clearTimeout(C_.current),C_.current=null;if(!Q.dragging&&r)Q.dragging=!0,L_(!0),s("move"),Y$(Q.path);if(Q.dragging){V.preventDefault(),x0(E.clientX,E.clientY);let o=document.elementFromPoint(E.clientX,E.clientY),i=K$(o)||K0();if(e.current!==i)Y0(i);u0(i)}},[K$,K0,Y$,x0,Y0,u0]),x$=D((V)=>{V.preventDefault();let Q=t_.current;if(!Q)return;let E=V.clientY,k=X0.current||280,m=V.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let r=E,o=(g)=>{r=g.clientY;let W_=Q.clientHeight-80,U0=Math.min(Math.max(k-(g.clientY-E),80),W_);Q.style.setProperty("--preview-height",`${U0}px`),X0.current=U0},i=()=>{let g=Q.clientHeight-80,W_=Math.min(Math.max(k-(r-E),80),g);X0.current=W_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("previewHeight",String(Math.round(W_))),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)}).current,U=D((V)=>{V.preventDefault();let Q=t_.current;if(!Q)return;let E=V.touches[0];if(!E)return;let k=E.clientY,m=X0.current||280,r=V.currentTarget;r.classList.add("dragging"),document.body.style.userSelect="none";let o=(g)=>{let W_=g.touches[0];if(!W_)return;g.preventDefault();let U0=Q.clientHeight-80,H0=Math.min(Math.max(m-(W_.clientY-k),80),U0);Q.style.setProperty("--preview-height",`${H0}px`),X0.current=H0},i=()=>{r.classList.remove("dragging"),document.body.style.userSelect="",o_("previewHeight",String(Math.round(X0.current||m))),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}).current,I=async()=>{if(!O)return;try{let V=await C4(O);if(V.media_id)S(V.media_id)}catch(V){R((Q)=>({...Q||{},error:V.message||"Failed to attach"}))}},f=async()=>{if(!O||B0)return;await _$(O)},d=(V)=>{return Array.from(V?.dataTransfer?.types||[]).includes("Files")},Y_=P((V)=>{if(!d(V))return;if(V.preventDefault(),b.current+=1,!P_.current)L_(!0);s("upload");let Q=q0(V)||K0();Y0(Q),u0(Q)},[K0,q0,Y0,u0]),D_=P((V)=>{if(!d(V))return;if(V.preventDefault(),V.dataTransfer)V.dataTransfer.dropEffect="copy";if(!P_.current)L_(!0);if(p_.current!=="upload")s("upload");let Q=q0(V)||K0();if(e.current!==Q)Y0(Q);u0(Q)},[K0,q0,Y0,u0]),b_=P((V)=>{if(!d(V))return;if(V.preventDefault(),b.current=Math.max(0,b.current-1),b.current===0)L_(!1),s(null),Y0(null),v_()},[Y0,v_]),_0=P(async(V,Q=".")=>{let E=Array.from(V||[]);if(E.length===0)return;let k=Q&&Q!==""?Q:".",m=k!=="."?k:"workspace root";k_(!0);try{let r=null;for(let o of E)try{r=await C2(o,k)}catch(i){let g=i?.status,W_=i?.code;if(g===409||W_==="file_exists"){let U0=o?.name||"file";if(!window.confirm(`"${U0}" already exists in ${m}. Overwrite?`))continue;r=await C2(o,k,{overwrite:!0})}else throw i}if(r?.path)S0.current=r.path,W(r.path),Q_.current?.(r.path);M_.current?.(k)}catch(r){t(r.message||"Failed to upload file")}finally{k_(!1)}},[]),f0=P(async(V,Q)=>{if(!V)return;let E=H_.current?.get(V);if(!E)return;let k=Q&&Q!==""?Q:".",m=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(k===m)return;try{let o=(await S4(V,k))?.path||V;if(E.type==="dir")G((i)=>{let g=new Set;for(let W_ of i)if(W_===V)g.add(o);else if(W_.startsWith(`${V}/`))g.add(`${o}${W_.slice(V.length)}`);else g.add(W_);return g});if(W(o),E.type==="dir")R(null),c(!1),S(null);else Q_.current?.(o);M_.current?.(m),M_.current?.(k)}catch(r){t(r?.message||"Failed to move entry")}},[]);O0.current=f0;let I_=P(async(V)=>{if(!d(V))return;V.preventDefault(),b.current=0,L_(!1),s(null),X_(null),v_();let Q=Array.from(V?.dataTransfer?.files||[]);if(Q.length===0)return;let E=e.current||q0(V)||K0();await _0(Q,E)},[K0,q0,_0]),g0=P((V)=>{if(V?.stopPropagation?.(),V_)return;let Q=V?.currentTarget?.dataset?.uploadTarget||".";N0.current=Q,Z0.current?.click()},[V_]),q$=P(()=>{if(V_)return;let V=V0.current,Q=V?H_.current?.get(V):null;N0.current=Q?.type==="dir"?Q.path:".",Z0.current?.click()},[V_]),J$=P((V)=>{if(!V||V.button!==0)return;let Q=V.currentTarget;if(!Q||!Q.dataset)return;let E=Q.dataset.path;if(!E||E===".")return;if(t0.current===E)return;let k=W$(V);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!b$(k))return;V.preventDefault(),J0.current={path:E,dragging:!1,startX:V.clientX,startY:V.clientY};let m=(o)=>{let i=J0.current;if(!i?.path)return;let g=Math.abs(o.clientX-i.startX),W_=Math.abs(o.clientY-i.startY),U0=g>4||W_>4;if(!i.dragging&&U0)i.dragging=!0,D0.current=!0,L_(!0),s("move"),Y$(i.path),x0(o.clientX,o.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(i.dragging){o.preventDefault(),x0(o.clientX,o.clientY);let H0=document.elementFromPoint(o.clientX,o.clientY),C0=K$(H0)||K0();if(e.current!==C0)Y0(C0);u0(C0)}},r=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",r);let o=J0.current;if(o?.dragging&&o.path){let i=e.current||K0(),g=O0.current;if(typeof g==="function")g(o.path,i)}J0.current={path:null,dragging:!1,startX:0,startY:0},b.current=0,L_(!1),s(null),Y0(null),v_(),F$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{D0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",r)},[K$,K0,Y$,x0,F$,Y0,u0,v_]),V$=P(async(V)=>{let Q=Array.from(V?.target?.files||[]);if(Q.length===0)return;let E=N0.current||".";if(await _0(Q,E),N0.current=".",V?.target)V.target.value=""},[_0]);return B`
        <aside
            class=${`workspace-sidebar${l?" workspace-drop-active":""}`}
            data-workspace-scale=${y_}
            ref=${t_}
            onDragEnter=${Y_}
            onDragOver=${D_}
            onDragLeave=${b_}
            onDrop=${I_}
        >
            <input type="file" multiple style="display:none" ref=${Z0} onChange=${V$} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${s$} title="New file" disabled=${V_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${T0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${n?" active":""}`}
                        onClick=${I$}
                        title=${n?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!n&&B`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${S$}>
                ${V_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${F&&B`<div class="workspace-loading">Loading…</div>`}
                ${__&&B`<div class="workspace-error">${__}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${a_}
                        tabIndex="0"
                        onClick=${e0}
                        onDblClick=${v0}
                        onKeyDown=${o$}
                        onTouchStart=${P0}
                        onTouchEnd=${$$}
                        onTouchMove=${O$}
                        onTouchCancel=${$$}
                    >
                        ${k0.map(({node:V,depth:Q})=>{let E=V.type==="dir",k=V.path===O,m=V.path===L,r=E&&K.has(V.path),o=Z_&&V.path===Z_,i=Array.isArray(V.children)&&V.children.length>0?V.children.length:Number(V.child_count)||0;return B`
                                <div
                                    key=${V.path}
                                    class=${`workspace-row${k?" selected":""}${o?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+Q*G$.indentPx}px`}}
                                    data-path=${V.path}
                                    data-type=${V.type}
                                    onMouseDown=${J$}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?r?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${m?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${T_}
                                                value=${H}
                                                onInput=${(g)=>A(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),d$();else if(g.key==="Escape")g.preventDefault(),E0()}}
                                                onBlur=${E0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${V.name}</span></span>`}
                                    ${E&&!r&&i>0&&B`
                                        <span class="workspace-count">${i}</span>
                                    `}
                                    ${E&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${V.path}
                                            title="Upload files to this folder"
                                            onClick=${g0}
                                            disabled=${V_}
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
            ${O&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${x$} onTouchStart=${U}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${O}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${s$} title="New file" disabled=${V_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!B0&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>P$&&g_.current?.(O,x)}
                                    title=${C$}
                                    disabled=${!P$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${f}
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
                            ${B0?B`
                                    <button class="workspace-download" onClick=${q$}
                                        title="Upload files to this folder" disabled=${V_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${T4(O,n)}
                                        title="Download folder as zip" onClick=${(V)=>V.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${I} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${x?.error&&B`<div class="workspace-error">${x.error}</div>`}
                    ${B0&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${G_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${G_?.error&&B`<div class="workspace-error">${G_.error}</div>`}
                        ${G_?.payload&&G_.payload.segments?.length>0&&B`
                            <${q5} payload=${G_.payload} />
                        `}
                        ${G_?.payload&&(!G_.payload.segments||G_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${x&&!x.error&&!B0&&B`
                        <div class="workspace-preview-body" ref=${I0}></div>
                    `}
                    ${v&&B`
                        <div class="workspace-download-card">
                            <${V5} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${$_&&B`
                <div class="workspace-drag-ghost" ref=${M0}>${$_.label}</div>
            `}
        </aside>
    `}var L5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf|csv)$/i,B5=/\.drawio(\.xml|\.svg|\.png)?$/i;function T6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:G,previewTabs:O,onToggleDock:W,dockVisible:L}){let[q,H]=T(null),A=D(null);u(()=>{if(!q)return;let F=(w)=>{if(w.type==="keydown"&&w.key!=="Escape")return;H(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[q]),u(()=>{let F=(w)=>{if(w.ctrlKey&&w.key==="Tab"){if(w.preventDefault(),!_.length)return;let C=_.findIndex((c)=>c.id===$);if(w.shiftKey){let c=_[(C-1+_.length)%_.length];j?.(c.id)}else{let c=_[(C+1)%_.length];j?.(c.id)}return}if((w.ctrlKey||w.metaKey)&&w.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(w.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let x=P((F,w)=>{if(F.button===1){F.preventDefault(),Z?.(w);return}if(F.button===0)j?.(w)},[j,Z]),R=P((F,w)=>{F.preventDefault(),H({id:w,x:F.clientX,y:F.clientY})},[]),v=P((F)=>{F.preventDefault(),F.stopPropagation()},[]),S=P((F,w)=>{F.preventDefault(),F.stopPropagation(),Z?.(w)},[Z]);if(u(()=>{if(!$||!A.current)return;let F=A.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((F)=>B`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(w)=>x(w,F.id)}
                    onContextMenu=${(w)=>R(w,F.id)}
                >
                    ${F.pinned&&B`
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
                        onMouseDown=${v}
                        onClick=${(w)=>S(w,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${W&&B`
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
        </div>
        ${q&&B`
            <div class="tab-context-menu" style=${{left:q.x+"px",top:q.y+"px"}}>
                <button onClick=${()=>{Z?.(q.id),H(null)}}>Close</button>
                <button onClick=${()=>{N?.(q.id),H(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(q.id),H(null)}}>
                    ${_.find((F)=>F.id===q.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(q.id),H(null)}}>
                        ${O?.has(q.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${L5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(q.id),w=q.id.split("/").pop()||"document",C="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(w);window.open(C,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${B5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(q.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var U5=400,O1=60,f6=220,q1="mdPreviewHeight";function Q5(){try{let _=localStorage.getItem(q1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=O1?$:f6}catch{return f6}}function R6({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[z,K]=T(Q5),G=D(null),O=D(null),W=D(""),L=D(_);return L.current=_,u(()=>{let A=()=>{let R=L.current?.()||"";if(R===W.current)return;W.current=R;try{let v=c0(R,null,{sanitize:!1});N(v)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let x=setInterval(A,U5);return()=>clearInterval(x)},[]),u(()=>{if(G.current&&Z)U$(G.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let x=A.clientY,R=O.current?.offsetHeight||z,v=O.current?.parentElement,S=v?v.offsetHeight*0.7:500,F=A.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let w=(c)=>{let __=Math.min(Math.max(R-(c.clientY-x),O1),S);K(__)},C=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(q1,String(Math.round(O.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",C)}}
            onTouchStart=${(A)=>{A.preventDefault();let x=A.touches[0];if(!x)return;let R=x.clientY,v=O.current?.offsetHeight||z,S=O.current?.parentElement,F=S?S.offsetHeight*0.7:500,w=A.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let C=(__)=>{let t=__.touches[0];if(!t)return;__.preventDefault();let n=Math.min(Math.max(v-(t.clientY-R),O1),F);K(n)},c=()=>{w.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(q1,String(Math.round(O.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}}
        ></div>
        <div class="md-preview-panel" ref=${O} style=${{height:z+"px"}}>
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
    `}function u6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=D(_);z.current=_;let K=D($);K.current=$;let G=D(j);G.current=j;let O=D(Z);O.current=Z,u(()=>{G.current();let W=new I2((q,H)=>z.current(q,H),(q)=>K.current(q),{chatJid:N});W.connect();let L=()=>{W.reconnectIfNeeded();let q=typeof document<"u"?document:null;if(!q||q.visibilityState==="visible")O.current?.()};return window.addEventListener("focus",L),document.addEventListener("visibilitychange",L),()=>{window.removeEventListener("focus",L),document.removeEventListener("visibilitychange",L),W.disconnect()}},[N])}function v6(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);u(()=>{let O=c$("notificationsEnabled",!1);if(N.current=O,$(O),typeof Notification<"u")Z(Notification.permission)},[]),u(()=>{N.current=_},[_]);let z=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let O=Notification.requestPermission();if(O&&typeof O.then==="function")return O;return Promise.resolve(O)}catch{return Promise.resolve("default")}},[]),K=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let W=await z();if(Z(W||"default"),W!=="granted"){N.current=!1,$(!1),o_("notificationsEnabled","false");return}}let O=!N.current;N.current=O,$(O),o_("notificationsEnabled",String(O))},[z]),G=P((O,W)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let L=new Notification(O,{body:W});return L.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:G}}var X2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function m6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[z,K]=T(!1),G=D(!1),O=D(null),W=D(!1),L=D(null),q=D(null),H=D(0);u(()=>{G.current=z},[z]),u(()=>{q.current=Z},[Z]),u(()=>{H.current+=1,q.current=null,L.current=null,W.current=!1,G.current=!1,N(null),K(!1)},[j]);let A=P(async(v=null)=>{let S=H.current;try{if(v){let F=await V4(v,50,0,j);if(S!==H.current)return;N(F.posts),K(!1)}else{let F=await $2(10,null,j);if(S!==H.current)return;N(F.posts),K(F.has_more)}}catch(F){if(S!==H.current)return;console.error("Failed to load posts:",F)}},[j]),x=P(async()=>{let v=H.current;try{let S=await $2(10,null,j);if(v!==H.current)return;N((F)=>{if(!F||F.length===0)return S.posts;return X2([...S.posts,...F])}),K((F)=>F||S.has_more)}catch(S){if(v!==H.current)return;console.error("Failed to refresh timeline:",S)}},[j]),R=P(async(v={})=>{let S=H.current,F=q.current;if(!F||F.length===0)return;if(W.current)return;let{preserveScroll:w=!0,preserveMode:C="top",allowRepeat:c=!1}=v,__=(N_)=>{if(!w){N_();return}if(C==="top")$(N_);else _(N_)},n=F.slice().sort((N_,l)=>N_.id-l.id)[0]?.id;if(!Number.isFinite(n))return;if(!c&&L.current===n)return;W.current=!0,L.current=n;try{let N_=await $2(10,n,j);if(S!==H.current)return;if(N_.posts.length>0)__(()=>{N((l)=>X2([...N_.posts,...l||[]])),K(N_.has_more)});else K(!1)}catch(N_){if(S!==H.current)return;console.error("Failed to load more posts:",N_)}finally{if(S===H.current)W.current=!1}},[j,_,$]);return u(()=>{O.current=R},[R]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:G,loadPosts:A,refreshTimeline:x,loadMore:R,loadMoreRef:O,loadingMoreRef:W,lastBeforeIdRef:L}}function g6(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,z]=T(""),[K,G]=T({text:"",totalLines:0}),[O,W]=T(null),[L,q]=T(null),[H,A]=T(null),x=D(null),R=D(0),v=D(!1),S=D(""),F=D(""),w=D(null),C=D(null),c=D(null),__=D(null),t=D(!1),n=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:G,pendingRequest:O,setPendingRequest:W,currentTurnId:L,setCurrentTurnId:q,steerQueuedTurnId:H,setSteerQueuedTurnId:A,lastAgentEventRef:x,lastSilenceNoticeRef:R,isAgentRunningRef:v,draftBufferRef:S,thoughtBufferRef:F,pendingRequestRef:w,stalledPostIdRef:C,currentTurnIdRef:c,steerQueuedTurnIdRef:__,thoughtExpandedRef:t,draftExpandedRef:n}}function p6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,A=$.current||280,x=L.currentTarget;x.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,v=(F)=>{R=F.clientX;let w=Math.min(Math.max(A+(F.clientX-H),160),600);q.style.setProperty("--sidebar-width",`${w}px`),$.current=w},S=()=>{let F=Math.min(Math.max(A+(R-H),160),600);$.current=F,x.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",o_("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,z=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let A=H.clientX,x=$.current||280,R=L.currentTarget;R.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(F)=>{let w=F.touches[0];if(!w)return;F.preventDefault();let C=Math.min(Math.max(x+(w.clientX-A),160),600);q.style.setProperty("--sidebar-width",`${C}px`),$.current=C},S=()=>{R.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",o_("sidebarWidth",String(Math.round($.current||x))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current,K=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,A=j.current||$.current||280,x=L.currentTarget;x.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,v=(F)=>{R=F.clientX;let w=Math.min(Math.max(A+(F.clientX-H),200),800);q.style.setProperty("--editor-width",`${w}px`),j.current=w},S=()=>{let F=Math.min(Math.max(A+(R-H),200),800);j.current=F,x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,G=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let A=H.clientX,x=j.current||$.current||280,R=L.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let v=(F)=>{let w=F.touches[0];if(!w)return;F.preventDefault();let C=Math.min(Math.max(x+(w.clientX-A),200),800);q.style.setProperty("--editor-width",`${C}px`),j.current=C},S=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",o_("editorWidth",String(Math.round(j.current||x))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current,O=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientY,A=Z?.current||200,x=L.currentTarget;x.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let R=H,v=(F)=>{R=F.clientY;let w=Math.min(Math.max(A-(F.clientY-H),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${w}px`),Z)Z.current=w;window.dispatchEvent(new CustomEvent("dock-resize"))},S=()=>{let F=Math.min(Math.max(A-(R-H),100),window.innerHeight*0.5);if(Z)Z.current=F;x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,W=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let A=H.clientY,x=Z?.current||200,R=L.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let v=(F)=>{let w=F.touches[0];if(!w)return;F.preventDefault();let C=Math.min(Math.max(x-(w.clientY-A),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},S=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",o_("dockHeight",String(Math.round(Z?.current||x))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:O,handleDockSplitterTouchStart:W}}function c6({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>m_.getTabs()),[N,z]=T(()=>m_.getActiveId()),[K,G]=T(()=>m_.getTabs().length>0);u(()=>{return m_.onChange((C,c)=>{Z(C),z(c),G(C.length>0)})},[]);let[O,W]=T(()=>new Set),L=P((C)=>{W((c)=>{let __=new Set(c);if(__.has(C))__.delete(C);else __.add(C);return __})},[]),q=P((C)=>{W((c)=>{if(!c.has(C))return c;let __=new Set(c);return __.delete(C),__})},[]),H=P((C)=>{if(!C)return;let c={path:C,mode:"edit"};try{if(!j0.resolve(c)){if(!j0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(__){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,__)}m_.open(C)},[]),A=P(()=>{let C=m_.getActiveId();if(C){let c=m_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}m_.close(C),q(C),$.current?.(C)}},[q]),x=P((C)=>{let c=m_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}m_.close(C),q(C),$.current?.(C)},[q]),R=P((C)=>{m_.activate(C)},[]),v=P((C)=>{let c=m_.getTabs().filter((n)=>n.id!==C&&!n.pinned),__=c.filter((n)=>n.dirty).length;if(__>0){if(!window.confirm(`${__} unsaved tab${__>1?"s":""} will be closed. Continue?`))return}let t=c.map((n)=>n.id);m_.closeOthers(C),t.forEach((n)=>{q(n),$.current?.(n)})},[q]),S=P(()=>{let C=m_.getTabs().filter((t)=>!t.pinned),c=C.filter((t)=>t.dirty).length;if(c>0){if(!window.confirm(`${c} unsaved tab${c>1?"s":""} will be closed. Continue?`))return}let __=C.map((t)=>t.id);m_.closeAll(),__.forEach((t)=>{q(t),$.current?.(t)})},[q]),F=P((C)=>{m_.togglePin(C)},[]),w=P(()=>{let C=m_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return u(()=>{let C=(c)=>{let{oldPath:__,newPath:t,type:n}=c.detail||{};if(!__||!t)return;if(n==="dir"){for(let N_ of m_.getTabs())if(N_.path===__||N_.path.startsWith(`${__}/`)){let l=`${t}${N_.path.slice(__.length)}`;m_.rename(N_.id,l)}}else m_.rename(__,t)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),u(()=>{let C=(c)=>{if(m_.hasUnsaved())c.preventDefault(),c.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:O,openEditor:H,closeEditor:A,handleTabClose:x,handleTabActivate:R,handleTabCloseOthers:v,handleTabCloseAll:S,handleTabTogglePin:F,handleTabTogglePreview:L,revealInExplorer:w}}function V1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var L1=V1("warning",30000),h6=V1("finalize",120000),B1=V1("refresh",30000),i6=30000;function l6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function n6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function d6(_=30000){let[,$]=T(0);u(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function U1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function s6(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function R$(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function Q1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function o6(_,$={}){if(R$($))return null;if(Q1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:F5(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function r6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function a6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function t6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function e6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function O2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function _7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function F5(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function F1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function H1(_){return String(_||"").trim()||"web:default"}function $7({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function j7(_={}){return R$(_)&&Q1(_)}function H5(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function J5(_={},$={}){if(!j7(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=H5({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function Z7(_={}){if(!j7(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let q of N)$.clearTimeout?.(q);N.clear()},K=()=>{Z=0,J5({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},O=()=>{G();for(let q of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),G()},q);if(H!=null)N.add(H)}},W=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;O()},L=$.visualViewport;return O(),$.addEventListener("focus",O),$.addEventListener("pageshow",O),$.addEventListener("resize",O),$.addEventListener("orientationchange",O),j.addEventListener("visibilitychange",W),j.addEventListener("focusin",O,!0),L?.addEventListener?.("resize",O),L?.addEventListener?.("scroll",O),()=>{z(),$.removeEventListener("focus",O),$.removeEventListener("pageshow",O),$.removeEventListener("resize",O),$.removeEventListener("orientationchange",O),j.removeEventListener("visibilitychange",W),j.removeEventListener("focusin",O,!0),L?.removeEventListener?.("resize",O),L?.removeEventListener?.("scroll",O)}}function D5(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function z$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:D5($,j)}var E5=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function N7(_){return E5.has(String(_||"").trim())}function k5(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function z7(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(k5(_),{detail:Z})),!0}var y5=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function K7(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(R$({window:j,navigator:Z}))};N();let K=y5.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of K)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function Y7(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var D1="piclaw_btw_session";function A5(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function w5(){let _=o0(D1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var G7=L4,W7=U4,M5=F4,X7=k4,O7=y4,q7=H4,J1=z$(s0,"getAgentContext",null),P5=z$(s0,"getAgentModels",{current:null,models:[]}),C5=z$(s0,"getActiveChatAgents",{chats:[]}),V7=z$(s0,"getChatBranches",{chats:[]}),b5=z$(s0,"renameChatBranch",null),I5=z$(s0,"pruneChatBranch",null),S5=z$(s0,"getAgentQueueState",{count:0}),x5=z$(s0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),T5=z$(s0,"removeAgentQueueItem",{removed:!1}),f5=z$(s0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});j0.register(o4);j0.register($1);j0.register(_1);j0.register(j1);j0.register(Z1);r4();j0.register(t4);function R5({locationParams:_}){let $=n_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=n_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=n_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=n_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[z,K]=T("disconnected"),[G,O]=T(()=>R$()),[W,L]=T(null),[q,H]=T(null),[A,x]=T(!1),[R,v]=T("current"),[S,F]=T([]),[w,C]=T([]),[c,__]=T(null),{agentStatus:t,setAgentStatus:n,agentDraft:N_,setAgentDraft:l,agentPlan:L_,setAgentPlan:x_,agentThought:s,setAgentThought:$_,pendingRequest:z_,setPendingRequest:Z_,currentTurnId:X_,setCurrentTurnId:V_,steerQueuedTurnId:k_,setSteerQueuedTurnId:G_,lastAgentEventRef:w_,lastSilenceNoticeRef:B_,isAgentRunningRef:$0,draftBufferRef:y_,thoughtBufferRef:R_,pendingRequestRef:S_,stalledPostIdRef:r_,currentTurnIdRef:K_,steerQueuedTurnIdRef:a,thoughtExpandedRef:A_,draftExpandedRef:O_}=g6(),[H_,U_]=T({}),[g_,Q_]=T(null),[M_,t_]=T(null),[a_,T_]=T(!1),[Z0,N0]=T(null),[C_,e_]=T([]),[J0,y0]=T([]),[D0,X0]=T(null),[A0,d_]=T([]),[u_,I0]=T(!1),[h_,s_]=T(()=>w5()),w0=n_(()=>C_.find((X)=>X?.chat_jid===$)||null,[C_,$]),J_=n_(()=>J0.find((X)=>X?.chat_jid===$)||w0||null,[w0,J0,$]),b=J_?.root_chat_jid||w0?.root_chat_jid||$,e=A5(R),[P_,p_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),M0=A0.length,a0=D(new Set),z0=D([]),O0=D(new Set),V0=D({inFlight:!1,lastAttemptAt:0,turnId:null});a0.current=new Set(A0.map((X)=>X.row_id)),z0.current=A0;let{notificationsEnabled:t0,notificationPermission:S0,toggleNotifications:h0,notify:i0}=v6(),[n$,k$]=T(()=>new Set),[l0,K0]=T(()=>c$("workspaceOpen",!0)),K$=D(null),{editorOpen:q0,tabStripTabs:Y0,tabStripActiveId:v_,previewTabs:u0,openEditor:x0,closeEditor:Y$,handleTabClose:F$,handleTabActivate:y$,handleTabCloseOthers:E0,handleTabCloseAll:A$,handleTabTogglePin:d$,handleTabTogglePreview:w$,revealInExplorer:s$}=c6({onTabClosed:(X)=>K$.current?.(X)}),M$=D(null),L0=D(null),H$=D(null),k0=D(null),F0=j0.getDockPanes().length>0,[G$,q2]=T(!1),B0=P(()=>q2((X)=>!X),[]),P$=!j&&(q0||F0&&G$);u(()=>{let X=M$.current;if(!X)return;if(L0.current)L0.current.dispose(),L0.current=null;let Y=v_;if(!Y)return;let J={path:Y,mode:"edit"},M=j0.resolve(J)||j0.get("editor");if(!M){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let y=M.mount(X,J);L0.current=y,y.onDirtyChange?.((j_)=>{m_.setDirty(Y,j_)}),y.onSaveRequest?.(()=>{}),y.onClose?.(()=>{Y$()});let h=m_.getViewState(Y);if(h&&typeof y.restoreViewState==="function")requestAnimationFrame(()=>y.restoreViewState(h));if(typeof y.onViewStateChange==="function")y.onViewStateChange((j_)=>{m_.saveViewState(Y,j_)});return requestAnimationFrame(()=>y.focus()),()=>{if(L0.current===y)y.dispose(),L0.current=null}},[v_,Y$]),u(()=>{let X=(Y)=>{let J=Y.detail?.path;if(J)x0(J)};return document.addEventListener("office-viewer:open-tab",X),()=>document.removeEventListener("office-viewer:open-tab",X)},[x0]),u(()=>{let X=H$.current;if(k0.current)k0.current.dispose(),k0.current=null;if(!X||!F0||!G$)return;let Y=j0.getDockPanes()[0];if(!Y){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(X,{mode:"view"});return k0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(k0.current===J)J.dispose(),k0.current=null}},[F0,G$]);let[C$,W$]=T({name:"You",avatar_url:null,avatar_background:null}),b$=D(!1),v0=D(!1),e0=D(null),T0=D($),m0=D(new Map),I$=D($),S$=D(0),_$=D(0),X$=D({}),o$=D({name:null,avatar_url:null}),P0=D({currentHashtag:null,searchQuery:null}),$$=D(null),O$=D(null),x$=D(0),U=D(0),I=D(0),f=D(null),d=D(null),Y_=D(null),D_=D(null),b_=D(0),_0=D({title:null,avatarBase:null}),f0=D(null),I_=P(()=>{if(f0.current)clearTimeout(f0.current),f0.current=null;__(null)},[]);d6(30000),u(()=>{return D3()},[]),u(()=>{return K7(O)},[]),u(()=>{o_("workspaceOpen",String(l0))},[l0]),u(()=>{return Z7()},[]),u(()=>{return()=>{I_()}},[I_]),u(()=>{if(!h_){o_(D1,"");return}o_(D1,JSON.stringify({question:h_.question||"",answer:h_.answer||"",thinking:h_.thinking||"",error:h_.error||null,status:h_.status||"success"}))},[h_]),u(()=>{X$.current=H_||{}},[H_]),u(()=>{T0.current=$},[$]),u(()=>{o$.current=C$||{name:"You",avatar_url:null,avatar_background:null}},[C$]);let g0=P((X,Y,J=null)=>{if(typeof document>"u")return;let M=(X||"").trim()||"PiClaw";if(_0.current.title!==M){document.title=M;let p=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(p&&p.getAttribute("content")!==M)p.setAttribute("content",M);_0.current.title=M}let y=document.getElementById("dynamic-favicon");if(!y)return;let h=y.getAttribute("data-default")||y.getAttribute("href")||"/favicon.ico",j_=Y||h,E_=Y?`${j_}|${J||""}`:j_;if(_0.current.avatarBase!==E_){let p=Y?`${j_}${j_.includes("?")?"&":"?"}v=${J||Date.now()}`:j_;y.setAttribute("href",p),_0.current.avatarBase=E_}},[]),q$=P((X)=>{if(!X)return;F((Y)=>Y.includes(X)?Y:[...Y,X])},[]),J$=P((X)=>{F((Y)=>Y.filter((J)=>J!==X))},[]);K$.current=J$;let V$=P(()=>{F([])},[]),V=P((X,Y=null,J="info",M=3000)=>{I_(),__({title:X,detail:Y||null,kind:J||"info"}),f0.current=setTimeout(()=>{__((y)=>y?.title===X?null:y)},M)},[I_]),Q=P((X)=>{let Y=s6(X,{editorOpen:q0,resolvePane:(J)=>j0.resolve(J)});if(Y.kind==="open"){x0(Y.path);return}if(Y.kind==="toast")V(Y.title,Y.detail,Y.level)},[q0,x0,V]),E=P(()=>{let X=v_;if(X)q$(X)},[v_,q$]),k=P((X)=>{if(!X)return;C((Y)=>Y.includes(X)?Y:[...Y,X])},[]),m=P(async(X,Y=null)=>{let J=(y)=>{y.scrollIntoView({behavior:"smooth",block:"center"}),y.classList.add("post-highlight"),setTimeout(()=>y.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+X);if(M){J(M);return}try{let y=typeof Y==="string"&&Y.trim()?Y.trim():$,j_=(await B4(X,y))?.thread?.[0];if(!j_)return;Q0((E_)=>{if(!E_)return[j_];if(E_.some((p)=>p.id===j_.id))return E_;return[...E_,j_]}),requestAnimationFrame(()=>{setTimeout(()=>{let E_=document.getElementById("post-"+X);if(E_)J(E_)},50)})}catch(y){console.error("[scrollToMessage] Failed to fetch message",X,y)}},[$]),r=P((X)=>{C((Y)=>Y.filter((J)=>J!==X))},[]),o=P(()=>{C([])},[]),i=P((X={})=>{let Y=Date.now();if(w_.current=Y,X.running)$0.current=!0,I0((J)=>J?J:!0);if(X.clearSilence)B_.current=0},[I0]),g=P(()=>{if(D_.current)clearTimeout(D_.current),D_.current=null;b_.current=0},[]);u(()=>()=>{g()},[g]);let W_=P(()=>{g(),n((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:Y,lastActivity:J,...M}=X;return M})},[g]),U0=P((X)=>{if(!X)return;g();let Y=Date.now();b_.current=Y,n({type:X.type||"active",last_activity:!0}),D_.current=setTimeout(()=>{if(b_.current!==Y)return;n((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},i6)},[g]),H0=P(()=>{$0.current=!1,I0(!1),w_.current=null,B_.current=0,y_.current="",R_.current="",S_.current=null,d.current=null,K_.current=null,a.current=null,e0.current=null,V0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g(),V_(null),G_(null),A_.current=!1,O_.current=!1},[g,V_,G_,I0]),C0=P((X)=>{if(!$7({remainingQueueCount:X,currentTurnId:K_.current,isAgentTurnActive:u_}))return;a.current=null,G_(null)},[u_,G_]),E1=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),V2=P(()=>({agentStatus:t,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:L_||"",agentThought:s?{...s}:{text:"",totalLines:0},pendingRequest:z_,currentTurnId:X_,steerQueuedTurnId:k_,isAgentTurnActive:Boolean(u_),followupQueueItems:Array.isArray(A0)?A0.map((X)=>({...X})):[],activeModel:g_,activeThinkingLevel:M_,supportsThinking:Boolean(a_),activeModelUsage:Z0,contextUsage:D0,isAgentRunning:Boolean($0.current),wasAgentActive:Boolean(v0.current),draftBuffer:y_.current||"",thoughtBuffer:R_.current||"",lastAgentEvent:w_.current||null,lastSilenceNotice:B_.current||0,lastAgentResponse:d.current||null,currentTurnIdRef:K_.current||null,steerQueuedTurnIdRef:a.current||null,thoughtExpanded:Boolean(A_.current),draftExpanded:Boolean(O_.current),agentStatusRef:e0.current||null,silentRecovery:{...V0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[g_,Z0,M_,N_,L_,t,s,D0,X_,A0,u_,z_,k_,a_]),k1=P((X)=>{let Y=X||E1();g(),$0.current=Boolean(Y.isAgentRunning),v0.current=Boolean(Y.wasAgentActive),I0(Boolean(Y.isAgentTurnActive)),w_.current=Y.lastAgentEvent||null,B_.current=Number(Y.lastSilenceNotice||0),y_.current=Y.draftBuffer||"",R_.current=Y.thoughtBuffer||"",S_.current=Y.pendingRequest||null,d.current=Y.lastAgentResponse||null,K_.current=Y.currentTurnIdRef||null,a.current=Y.steerQueuedTurnIdRef||null,e0.current=Y.agentStatusRef||null,V0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},A_.current=Boolean(Y.thoughtExpanded),O_.current=Boolean(Y.draftExpanded),n(Y.agentStatus||null),l(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),x_(Y.agentPlan||""),$_(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),Z_(Y.pendingRequest||null),V_(Y.currentTurnId||null),G_(Y.steerQueuedTurnId||null),d_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),Q_(Y.activeModel||null),t_(Y.activeThinkingLevel||null),T_(Boolean(Y.supportsThinking)),N0(Y.activeModelUsage??null),X0(Y.contextUsage??null)},[g,E1,V_,d_,I0,G_]),L$=P((X)=>{if(!X)return;if(K_.current===X)return;K_.current=X,V0.current={inFlight:!1,lastAttemptAt:0,turnId:X},V_(X),a.current=null,G_(null),y_.current="",R_.current="",l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,d.current=null,A_.current=!1,O_.current=!1},[V_,G_]),y1=P((X)=>{if(typeof document<"u"){let p=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&p)return}let Y=d.current;if(!Y||!Y.post)return;if(X&&Y.turnId&&Y.turnId!==X)return;let J=Y.post;if(J.id&&f.current===J.id)return;let M=String(J?.data?.content||"").trim();if(!M)return;f.current=J.id||f.current,d.current=null;let y=M.replace(/\s+/g," ").slice(0,200),h=X$.current||{},E_=(J?.data?.agent_id?h[J.data.agent_id]:null)?.name||"Pi";i0(E_,y)},[i0]),L7=P(async(X,Y)=>{if(X!=="thought"&&X!=="draft")return;let J=K_.current;if(X==="thought"){if(A_.current=Y,J)try{await O7(J,"thought",Y)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!Y)return;try{let M=J?await X7(J,"thought"):null;if(M?.text)R_.current=M.text;$_((y)=>({...y||{text:"",totalLines:0},fullText:R_.current||y?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:y?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(O_.current=Y,J)try{await O7(J,"draft",Y)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!Y)return;try{let M=J?await X7(J,"draft"):null;if(M?.text)y_.current=M.text;l((y)=>({...y||{text:"",totalLines:0},fullText:y_.current||y?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:y?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),d2=D(null),s2=P(()=>{let X=$$.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);d2.current=s2;let B7=P((X)=>{let Y=$$.current;if(!Y||typeof X!=="function"){X?.();return}let{currentHashtag:J,searchQuery:M}=P0.current||{},y=!(M&&!J),h=y?Y.scrollHeight-Y.scrollTop:Y.scrollTop;X(),requestAnimationFrame(()=>{let j_=$$.current;if(!j_)return;if(y){let E_=Math.max(j_.scrollHeight-h,0);j_.scrollTop=E_}else{let E_=Math.max(j_.scrollHeight-j_.clientHeight,0),p=Math.min(h,E_);j_.scrollTop=p}})},[]),r$=P((X)=>{let Y=$$.current;if(!Y||typeof X!=="function"){X?.();return}let J=Y.scrollTop;X(),requestAnimationFrame(()=>{let M=$$.current;if(!M)return;let y=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(J,y)})},[]),U7="Queued as a follow-up (one-at-a-time).",Q7="⁣",A1=P((X)=>{if(!X||!Array.isArray(X))return X;let Y=a0.current,J=new Set(Y),M=X.filter((y)=>{if(J.has(y?.id))return!1;if(y?.data?.is_bot_message){let h=y?.data?.content;if(h===U7||h===Q7)return!1}return!0});return M.length===X.length?X:M},[]),{posts:w1,setPosts:Q0,hasMore:F7,setHasMore:L2,hasMoreRef:M1,loadPosts:j$,refreshTimeline:b0,loadMore:H7,loadMoreRef:o2}=m6({preserveTimelineScroll:B7,preserveTimelineScrollTop:r$,chatJid:$}),u$=n_(()=>A1(w1),[w1,A0,A1]),B2=P(()=>{let X=r_.current;if(!X)return;Q0((Y)=>Y?Y.filter((J)=>J.id!==X):Y),r_.current=null},[Q0]),{handleSplitterMouseDown:J7,handleSplitterTouchStart:D7,handleEditorSplitterMouseDown:E7,handleEditorSplitterTouchStart:k7,handleDockSplitterMouseDown:y7,handleDockSplitterTouchStart:A7}=p6({appShellRef:O$,sidebarWidthRef:x$,editorWidthRef:U,dockHeightRef:I}),P1=P(()=>{if(!$0.current)return;$0.current=!1,B_.current=0,w_.current=null,K_.current=null,V_(null),A_.current=!1,O_.current=!1;let X=(y_.current||"").trim();if(y_.current="",R_.current="",l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,d.current=null,!X){n({type:"error",title:"Response stalled - No content received"});return}let J=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),y=new Date().toISOString(),h={id:M,timestamp:y,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};r_.current=M,Q0((j_)=>j_?X2([...j_,h]):[h]),d2.current?.(),n(null)},[V_]);u(()=>{P0.current={currentHashtag:W,searchQuery:q}},[W,q]);let c_=P(()=>{let X=$;S5(X).then((Y)=>{if(T0.current!==X)return;let J=O0.current,M=Array.isArray(Y?.items)?Y.items.map((y)=>({...y})).filter((y)=>!J.has(y.row_id)):[];if(M.length){d_((y)=>{if(y.length===M.length&&y.every((h,j_)=>h.row_id===M[j_].row_id))return y;return M});return}J.clear(),C0(0),d_((y)=>y.length===0?y:[])}).catch(()=>{if(T0.current!==X)return;d_((Y)=>Y.length===0?Y:[])})},[C0,$,d_]),n0=P(async()=>{let X=$;try{let Y=await J1(X);if(T0.current!==X)return;if(Y)X0(Y)}catch(Y){if(T0.current!==X)return;console.warn("Failed to fetch agent context:",Y)}},[$]),d0=P(async()=>{let X=$;try{let Y=await q7(X);if(T0.current!==X)return null;if(!Y||Y.status!=="active"||!Y.data){if(v0.current){let{currentHashtag:y,searchQuery:h}=P0.current||{};if(!y&&!h)b0()}return v0.current=!1,H0(),e0.current=null,n(null),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,Y??null}v0.current=!0;let J=Y.data;e0.current=J;let M=J.turn_id||J.turnId;if(M)L$(M);if(i({running:!0,clearSilence:!0}),W_(),n(J),Y.thought&&Y.thought.text)$_((y)=>{if(y&&y.text&&y.text.length>=Y.thought.text.length)return y;return R_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)l((y)=>{if(y&&y.text&&y.text.length>=Y.draft.text.length)return y;return y_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[H0,W_,i,b0,L$]),r2=P(async()=>{if(!$0.current)return null;if(S_.current)return null;let X=K_.current||null,Y=V0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===X&&J-Y.lastAttemptAt<B1)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=X;try{let{currentHashtag:M,searchQuery:y}=P0.current||{};if(!M&&!y)await b0();return await c_(),await d0()}finally{Y.inFlight=!1}},[d0,c_,b0]);u(()=>{let X=Math.min(1000,Math.max(100,Math.floor(L1/2))),Y=setInterval(()=>{if(!$0.current)return;if(S_.current)return;let J=w_.current;if(!J)return;let M=Date.now(),y=M-J,h=K2(e0.current);if(y>=h6){if(!h)n({type:"waiting",title:"Re-syncing after a quiet period…"});r2();return}if(y>=L1){if(M-B_.current>=B1){if(!h){let j_=Math.floor(y/1000);n({type:"waiting",title:`Waiting for model… No events for ${j_}s`})}B_.current=M,r2()}}},X);return()=>clearInterval(Y)},[r2]);let w7=P((X)=>{if(K(X),X!=="connected"){n(null),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,H0();return}if(!b$.current){b$.current=!0,d0(),n0();return}let{currentHashtag:Y,searchQuery:J}=P0.current;if(!Y&&!J)b0();d0(),n0()},[H0,b0,d0,n0]),M7=P(async(X)=>{L(X),Q0(null),await j$(X)},[j$]),P7=P(async()=>{L(null),H(null),Q0(null),await j$()},[j$]),C7=P(async(X,Y=R)=>{if(!X||!X.trim())return;let J=Y==="root"||Y==="all"?Y:"current";v(J),H(X.trim()),L(null),Q0(null);try{let M=await G7(X.trim(),50,0,$,J,b);Q0(M.results),L2(!1)}catch(M){console.error("Failed to search:",M),Q0([])}},[$,b,R]),b7=P(()=>{x(!0),H(null),L(null),v("current"),Q0([])},[]),I7=P(()=>{x(!1),H(null),j$()},[j$]),v5=P(()=>{},[]),S7=P(async(X)=>{if(!X)return;let Y=X.id,J=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,M=u$?.filter((h)=>h?.data?.thread_id===Y&&h?.id!==Y).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let y=(h)=>{if(!h.length)return;k$((E_)=>{let p=new Set(E_);return h.forEach((q_)=>p.add(q_)),p}),setTimeout(()=>{if(r$(()=>{Q0((E_)=>E_?E_.filter((p)=>!h.includes(p.id)):E_)}),k$((E_)=>{let p=new Set(E_);return h.forEach((q_)=>p.delete(q_)),p}),M1.current)o2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await W7(Y,M>0,J);if(h?.ids?.length)y(h.ids)}catch(h){let j_=h?.message||"";if(M===0&&j_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let p=await W7(Y,!0,J);if(p?.ids?.length)y(p.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${j_}`)}},[$,u$,r$]),C1=P(async()=>{try{let X=await M5();U_(l6(X));let Y=X?.user||{};W$((M)=>{let y=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",h=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,j_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(M.name===y&&M.avatar_url===h&&M.avatar_background===j_)return M;return{name:y,avatar_url:h,avatar_background:j_}});let J=(X?.agents||[]).find((M)=>M.id==="default");g0(J?.name,J?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,Y=await J1(X);if(T0.current!==X)return;if(Y)X0(Y)}catch{}},[g0,$]);u(()=>{C1();let X=h$("sidebarWidth",null),Y=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(x$.current=Y,O$.current)O$.current.style.setProperty("--sidebar-width",`${Y}px`)},[C1]);let a2=u_||t!==null,b1=P((X)=>{if(!X||typeof X!=="object")return;let Y=X.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:M}=X;if(!J&&M===void 0)return;let y=X$.current?.[Y]||{id:Y},h=y.name||null,j_=y.avatar_url??y.avatarUrl??y.avatar??null,E_=!1,p=!1;if(J&&J!==y.name)h=J,p=!0;if(M!==void 0){let q_=typeof M==="string"?M.trim():null,i_=typeof j_==="string"?j_.trim():null,F_=q_||null;if(F_!==(i_||null))j_=F_,E_=!0}if(!p&&!E_)return;if(U_((q_)=>{let F_={...q_[Y]||{id:Y}};if(p)F_.name=h;if(E_)F_.avatar_url=j_;return{...q_,[Y]:F_}}),Y==="default")g0(h,j_,E_?Date.now():null)},[g0]),I1=P((X)=>{if(!X||typeof X!=="object")return;let Y=X.user_name??X.userName,J=X.user_avatar??X.userAvatar,M=X.user_avatar_background??X.userAvatarBackground;if(Y===void 0&&J===void 0&&M===void 0)return;W$((y)=>{let h=typeof Y==="string"&&Y.trim()?Y.trim():y.name||"You",j_=J===void 0?y.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,E_=M===void 0?y.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(y.name===h&&y.avatar_url===j_&&y.avatar_background===E_)return y;return{name:h,avatar_url:j_,avatar_background:E_}})},[]),t2=P((X)=>{if(!X||typeof X!=="object")return;let Y=X.model??X.current;if(Y!==void 0)Q_(Y);if(X.thinking_level!==void 0)t_(X.thinking_level??null);if(X.supports_thinking!==void 0)T_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)N0(X.provider_usage??null)},[]),a$=P(()=>{let X=$;P5(X).then((Y)=>{if(T0.current!==X)return;if(Y)t2(Y)}).catch(()=>{})},[t2,$]),p0=P(()=>{C5().then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];e_(Y)}).catch(()=>{})},[]),R0=P(()=>{V7(b).then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];y0(Y)}).catch(()=>{})},[b]),x7=P((X)=>{let Y=X?.row_id;if(Y==null)return;O0.current.add(Y),d_((J)=>J.filter((M)=>M?.row_id!==Y)),x5(Y,H1($)).then(()=>{c_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),V("Failed to steer message","The queued message could not be sent as steering.","warning"),O0.current.delete(Y),c_()})},[$,c_,d_,V]),T7=P((X)=>{let Y=X?.row_id;if(Y==null)return;let J=z0.current.filter((M)=>M?.row_id!==Y).length;O0.current.add(Y),C0(J),d_((M)=>M.filter((y)=>y?.row_id!==Y)),T5(Y,H1($)).then(()=>{c_()}).catch((M)=>{console.warn("[queue] Failed to remove queued item:",M),V("Failed to remove message","The queued message could not be removed.","warning"),O0.current.delete(Y),c_()})},[C0,$,c_,d_,V]),e2=P((X)=>{if(!X||typeof X!=="object")return;if(p0(),R0(),X?.queued==="followup"||X?.queued==="steer"){c_();return}let Y=X?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))c_()},[p0,R0,c_]),_4=P(()=>{if(Y_.current)Y_.current.abort(),Y_.current=null;s_(null)},[]),U2=P(async(X)=>{let Y=String(X||"").trim();if(!Y)return V("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y_.current)Y_.current.abort();let J=new AbortController;Y_.current=J,s_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let M=await f5(Y,{signal:J.signal,chatJid:S3($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(y,h)=>{if(y==="side_prompt_start")s_((j_)=>j_?{...j_,status:"running"}:j_)},onThinkingDelta:(y)=>{s_((h)=>h?{...h,thinking:`${h.thinking||""}${y||""}`}:h)},onTextDelta:(y)=>{s_((h)=>h?{...h,answer:`${h.answer||""}${y||""}`}:h)}});if(Y_.current!==J)return!0;s_((y)=>y?{...y,answer:M?.result||y.answer||"",thinking:M?.thinking||y.thinking||"",model:M?.model||null,status:"success",error:null}:y)}catch(M){if(J.signal.aborted)return!0;s_((y)=>y?{...y,status:"error",error:M?.payload?.error||M?.message||"BTW request failed."}:y)}finally{if(Y_.current===J)Y_.current=null}return!0},[$,V]),f7=P(async({content:X})=>{let Y=I3(X);if(!Y)return!1;if(Y.type==="help")return V("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return _4(),V("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await U2(Y.question),!0;return!1},[_4,U2,V]),R7=P(()=>{if(h_?.question)U2(h_.question)},[h_,U2]),u7=P(async()=>{let X=f3(h_);if(!X)return;try{let Y=await g$("default",X,null,[],a2?"queue":null,$);e2(Y),V(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){V("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[h_,e2,a2,V]),t$=P(()=>{a$(),p0(),R0(),c_(),n0()},[a$,p0,R0,c_,n0]);u(()=>{t$();let X=setInterval(()=>{a$(),p0(),R0(),c_()},60000);return()=>clearInterval(X)},[t$,a$,p0,R0,c_]),u(()=>{R0()},[R0]),u(()=>{let X=!1;if(Q0(null),W)return j$(W),()=>{X=!0};if(q)return G7(q,50,0,$,R,b).then((Y)=>{if(X)return;Q0(Y.results),L2(!1)}).catch((Y)=>{if(X)return;console.error("Failed to search:",Y),Q0([]),L2(!1)}),()=>{X=!0};return j$(),()=>{X=!0}},[$,W,q,R,b,j$,L2,Q0]),u(()=>{let X=I$.current||$;m0.current.set(X,V2())},[$,V2]),u(()=>{let X=I$.current||$;if(X===$)return;m0.current.set(X,V2()),I$.current=$,O0.current.clear(),k1(m0.current.get($)||null),c_(),d0(),n0()},[$,d0,n0,c_,k1,V2]);let v7=P(()=>{let{currentHashtag:X,searchQuery:Y}=P0.current||{};if(!X&&!Y)b0();t$()},[t$,b0]),$4=P((X,Y)=>{let J=Y?.turn_id,M=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,h=M?M===$:X==="connected"||X==="workspace_update";if(h)b1(Y),I1(Y);if(X==="ui_theme"){E3(Y);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))W_()}if(X==="connected"){n(null),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,H0();let p=$;q7(p).then((F_)=>{if(T0.current!==p)return;if(!F_||F_.status!=="active"||!F_.data)return;let v$=F_.data,S1=v$.turn_id||v$.turnId;if(S1)L$(S1);if(i({clearSilence:!0}),U0(v$),F_.thought&&F_.thought.text)R_.current=F_.thought.text,$_({text:F_.thought.text,totalLines:F_.thought.totalLines||0});if(F_.draft&&F_.draft.text)y_.current=F_.draft.text,l({text:F_.draft.text,totalLines:F_.draft.totalLines||0})}).catch((F_)=>{console.warn("Failed to fetch agent status:",F_)});let{currentHashtag:q_,searchQuery:i_}=P0.current||{};if(!q_&&!i_)b0();t$();return}if(X==="agent_status"){if(!h){if(Y?.type==="done"||Y?.type==="error")p0(),R0();return}if(Y.type==="done"||Y.type==="error"){if(J&&K_.current&&J!==K_.current)return;if(Y.type==="done"){y1(J||K_.current);let{currentHashtag:p,searchQuery:q_}=P0.current||{};if(!p&&!q_)b0();if(Y.context_usage)X0(Y.context_usage)}if(v0.current=!1,H0(),O0.current.clear(),p0(),c_(),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),Y.type==="error")n({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(J)L$(J);if(i({running:!0,clearSilence:!0}),Y.type==="thinking")y_.current="",R_.current="",l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0});e0.current=Y,n((p)=>{if(p&&p.type===Y.type&&p.title===Y.title)return p;return Y})}return}if(X==="agent_steer_queued"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;let p=J||K_.current;if(!p)return;a.current=p,G_(p);return}if(X==="agent_followup_queued"){if(!h)return;let p=Y?.row_id,q_=Y?.content;if(p!=null&&typeof q_==="string"&&q_.trim())d_((i_)=>{if(i_.some((F_)=>F_?.row_id===p))return i_;return[...i_,{row_id:p,content:q_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});c_();return}if(X==="agent_followup_consumed"){if(!h)return;let p=Y?.row_id;if(p!=null){let q_=z0.current.filter((i_)=>i_.row_id!==p).length;C0(q_),d_((i_)=>i_.filter((F_)=>F_.row_id!==p))}c_(),b0();return}if(X==="agent_followup_removed"){if(!h)return;let p=Y?.row_id;if(p!=null){let q_=z0.current.filter((i_)=>i_.row_id!==p).length;O0.current.add(p),C0(q_),d_((i_)=>i_.filter((F_)=>F_.row_id!==p))}c_();return}if(X==="agent_draft_delta"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;if(J&&!K_.current)L$(J);if(i({running:!0,clearSilence:!0}),Y?.reset)y_.current="";if(Y?.delta)y_.current+=Y.delta;let p=Date.now();if(!S$.current||p-S$.current>=100){S$.current=p;let q_=y_.current,i_=U1(q_);if(O_.current)l((F_)=>({text:F_?.text||"",totalLines:i_,fullText:q_}));else l({text:q_,totalLines:i_})}return}if(X==="agent_draft"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;if(J&&!K_.current)L$(J);i({running:!0,clearSilence:!0});let p=Y.text||"",q_=Y.mode||(Y.kind==="plan"?"replace":"append"),i_=Number.isFinite(Y.total_lines)?Y.total_lines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(q_==="replace")x_(p);else x_((F_)=>(F_||"")+p);else if(!O_.current)y_.current=p,l({text:p,totalLines:i_});return}if(X==="agent_thought_delta"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;if(J&&!K_.current)L$(J);if(i({running:!0,clearSilence:!0}),Y?.reset)R_.current="";if(typeof Y?.delta==="string")R_.current+=Y.delta;let p=Date.now();if(A_.current&&(!_$.current||p-_$.current>=100)){_$.current=p;let q_=R_.current;$_((i_)=>({text:i_?.text||"",totalLines:U1(q_),fullText:q_}))}return}if(X==="agent_thought"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;if(J&&!K_.current)L$(J);i({running:!0,clearSilence:!0});let p=Y.text||"",q_=Number.isFinite(Y.total_lines)?Y.total_lines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;if(!A_.current)R_.current=p,$_({text:p,totalLines:q_});return}if(X==="model_changed"){if(!h)return;if(Y?.model!==void 0)Q_(Y.model);if(Y?.thinking_level!==void 0)t_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)T_(Boolean(Y.supports_thinking));let p=$;J1(p).then((q_)=>{if(T0.current!==p)return;if(q_)X0(q_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(N7(X)){if(!h)return;if(z7(X,Y),X==="extension_ui_notify"&&typeof Y?.message==="string")V(Y.message,null,Y?.type||"info");if(X==="extension_ui_error"&&typeof Y?.error==="string")V("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:j_,searchQuery:E_}=P0.current;if(X==="agent_response"){if(!h)return;B2(),d.current={post:Y,turnId:K_.current}}if(!j_&&!E_&&h&&(X==="new_post"||X==="new_reply"||X==="agent_response"))Q0((p)=>{if(!p)return[Y];if(p.some((q_)=>q_.id===Y.id))return p;return[...p,Y]}),d2.current?.();if(X==="interaction_updated"){if(!h)return;Q0((p)=>{if(!p)return p;if(!p.some((q_)=>q_.id===Y.id))return p;return p.map((q_)=>q_.id===Y.id?Y:q_)})}if(X==="interaction_deleted"){if(!h)return;let p=Y?.ids||[];if(p.length){r$(()=>{Q0((F_)=>F_?F_.filter((v$)=>!p.includes(v$.id)):F_)});let{currentHashtag:q_,searchQuery:i_}=P0.current;if(M1.current&&!q_&&!i_)o2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[H0,W_,$,o2,i,y1,r$,p0,R0,b0,B2,L$,U0,b1,I1,a$,c_,d_]);u(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=$4,X.reset=()=>{B2(),H0(),n(null),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null)},X.finalize=()=>P1(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[H0,P1,$4,B2]),u6({handleSseEvent:$4,handleConnectionStatusChange:w7,loadPosts:j$,onWake:v7,chatJid:$}),u(()=>{if(!u$||u$.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let Y=X.slice(5);m(Y),history.replaceState(null,"",location.pathname+location.search)},[u$,m]);let j4=t!==null;u(()=>{if(z!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:M}=P0.current||{},y=!J&&!M;if(j4){if(y)b0();c_(),d0(),n0()}else{if(y)b0();d0(),n0()}},j4?15000:60000);return()=>clearInterval(Y)},[z,j4,d0,n0,c_,b0]),u(()=>{return Y7(()=>{d0(),n0(),c_()})},[d0,n0,c_]);let m7=P(()=>{K0((X)=>!X)},[]),g7=P((X)=>{if(typeof window>"u")return;let Y=String(X||"").trim();if(!Y||Y===$)return;let J=O2(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),p7=P(async()=>{if(typeof window>"u"||!J_?.chat_jid)return;let X=J_.agent_name||"",Y=J_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let M=window.prompt("Agent handle (without @)",X);if(M===null)return;try{let y=await b5(J_.chat_jid,{displayName:J,agentName:M});await Promise.allSettled([p0(),R0()]);let h=y?.branch?.agent_name||String(M||"").trim()||X;V("Branch renamed",`This chat is now @${h}.`,"info",3500)}catch(y){let h=y instanceof Error?y.message:String(y||"Could not rename branch.");V("Could not rename branch",h||"Could not rename branch.","warning",5000)}},[J_,p0,R0,V]),c7=P(async()=>{if(typeof window>"u"||!J_?.chat_jid)return;if(J_.chat_jid===(J_.root_chat_jid||J_.chat_jid)){V("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=J_.display_name||`@${J_.agent_name||J_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await I5(J_.chat_jid),await Promise.allSettled([p0(),R0()]);let M=J_.root_chat_jid||"web:default";V("Branch pruned",`${Y} has been archived.`,"info",3000);let y=O2(window.location.href,M,{chatOnly:j});window.location.assign(y)}catch(M){let y=M instanceof Error?M.message:String(M||"Could not prune branch.");V("Could not prune branch",y||"Could not prune branch.","warning",5000)}},[j,J_,p0,R0,V]);u(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{p_({status:"running",message:"Preparing a new chat branch…"});let Y=await M2(N);if(X)return;let J=Y?.branch,M=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");let y=O2(window.location.href,M,{chatOnly:!0});window.location.replace(y)}catch(Y){if(X)return;p_({status:"error",message:F1(Y)})}})(),()=>{X=!0}},[Z,N]);let h7=P(async()=>{if(typeof window>"u"||G)return;let X=o6($);if(!X){V("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let J=_7(window.location.href,$,{chatOnly:!0});if(!window.open(J,X.target))V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=r6(X);if(!Y){V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}a6(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await M2($))?.branch,y=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!y)throw Error("Branch fork did not return a chat id.");try{let j_=await Q4();e_(Array.isArray(j_?.chats)?j_.chats:[])}catch{}try{let j_=await V7(b);y0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}let h=O2(window.location.href,y,{chatOnly:!0});t6(Y,h)}catch(J){e6(Y),V("Could not open branch window",F1(J),"error",5000)}},[$,b,G,V]);u(()=>{if(!q0)return;if(typeof window>"u")return;let X=O$.current;if(!X)return;if(!U.current){let Y=h$("editorWidth",null),J=x$.current||280;U.current=Number.isFinite(Y)?Y:J}if(X.style.setProperty("--editor-width",`${U.current}px`),!I.current){let Y=h$("dockHeight",null);I.current=Number.isFinite(Y)?Y:200}X.style.setProperty("--dock-height",`${I.current}px`)},[q0]),u(()=>{if(!F0||j)return;let X=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),B0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[B0,F0,j]);let i7=Boolean(k_&&k_===(t?.turn_id||X_));if(Z)return B`
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
        `;return B`
        <div class=${`app-shell${l0?"":" workspace-collapsed"}${q0?" editor-open":""}${j?" chat-only":""}`} ref=${O$}>
            ${!j&&B`
                <${x6}
                    onFileSelect=${q$}
                    visible=${l0}
                    active=${l0||q0}
                    onOpenEditor=${x0}
                />
                <button
                    class=${`workspace-toggle-tab${l0?" open":" closed"}`}
                    onClick=${m7}
                    title=${l0?"Hide workspace":"Show workspace"}
                    aria-label=${l0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${J7} onTouchStart=${D7}></div>
            `}
            ${P$&&B`
                <div class="editor-pane-container">
                    ${q0&&B`
                        <${T6}
                            tabs=${Y0}
                            activeId=${v_}
                            onActivate=${y$}
                            onClose=${F$}
                            onCloseOthers=${E0}
                            onCloseAll=${A$}
                            onTogglePin=${d$}
                            onTogglePreview=${w$}
                            previewTabs=${u0}
                            onToggleDock=${F0?B0:void 0}
                            dockVisible=${F0&&G$}
                        />
                    `}
                    ${q0&&B`<div class="editor-pane-host" ref=${M$}></div>`}
                    ${q0&&v_&&u0.has(v_)&&B`
                        <${R6}
                            getContent=${()=>L0.current?.getContent?.()}
                            path=${v_}
                            onClose=${()=>w$(v_)}
                        />
                    `}
                    ${F0&&G$&&B`<div class="dock-splitter" onMouseDown=${y7} onTouchStart=${A7}></div>`}
                    ${F0&&B`<div class=${`dock-panel${G$?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${B0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${H$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${E7} onTouchStart=${k7}></div>
            `}
            <div class="container">
                ${q&&n6()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${J_?.display_name||J_?.agent_name?`@${J_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${J_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${J0.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>g7(X.currentTarget.value)}
                                    >
                                        ${J0.map((X)=>B`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${J_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${p7}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${J_?.chat_jid&&J_.chat_jid!==(J_.root_chat_jid||J_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${c7}
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
                ${(W||q)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${P7}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${W?`#${W}`:`Search: ${q} · ${e}`}</span>
                    </div>
                `}
                <${z6}
                    posts=${u$}
                    hasMore=${F7}
                    onLoadMore=${H7}
                    timelineRef=${$$}
                    onHashtagClick=${M7}
                    onMessageRef=${k}
                    onScrollToMessage=${m}
                    onFileRef=${Q}
                    onPostClick=${void 0}
                    onDeletePost=${S7}
                    emptyMessage=${W?`No posts with #${W}`:q?`No results for "${q}"`:void 0}
                    agents=${H_}
                    user=${C$}
                    reverse=${!(q&&!W)}
                    removingPostIds=${n$}
                    searchQuery=${q}
                />
                <${h3}
                    status=${t}
                    draft=${N_}
                    plan=${L_}
                    thought=${s}
                    pendingRequest=${z_}
                    intent=${c}
                    turnId=${X_}
                    steerQueued=${i7}
                    onPanelToggle=${L7}
                />
                <${R3}
                    session=${h_}
                    onClose=${_4}
                    onRetry=${R7}
                    onInject=${u7}
                />
                <${L3}
                    onPost=${()=>{j$(),s2()}}
                    onFocus=${s2}
                    searchMode=${A}
                    searchScope=${R}
                    onSearch=${C7}
                    onSearchScopeChange=${v}
                    onEnterSearch=${b7}
                    onExitSearch=${I7}
                    fileRefs=${S}
                    onRemoveFileRef=${J$}
                    onClearFileRefs=${V$}
                    messageRefs=${w}
                    onRemoveMessageRef=${r}
                    onClearMessageRefs=${o}
                    activeEditorPath=${j?null:v_}
                    onAttachEditorFile=${j?void 0:E}
                    onOpenFilePill=${Q}
                    followupQueueCount=${M0}
                    followupQueueItems=${A0}
                    onInjectQueuedFollowup=${x7}
                    onRemoveQueuedFollowup=${T7}
                    onSubmitIntercept=${f7}
                    onMessageResponse=${e2}
                    onPopOutChat=${G?void 0:h7}
                    isAgentActive=${a2}
                    activeChatAgents=${C_}
                    currentChatJid=${$}
                    activeModel=${g_}
                    modelUsage=${Z0}
                    thinkingLevel=${M_}
                    supportsThinking=${a_}
                    contextUsage=${D0}
                    notificationsEnabled=${t0}
                    notificationPermission=${S0}
                    onToggleNotifications=${h0}
                    onModelChange=${Q_}
                    onModelStateChange=${t2}
                />
                <${l3} status=${z} />
                <${i3}
                    request=${z_}
                    onRespond=${()=>{Z_(null),S_.current=null}}
                />
            </div>
        </div>
    `}function u5(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${R5} locationParams=${_} />`}Z3(B`<${u5} />`,document.getElementById("app"));

//# debugId=D902D3A62AECAFAF64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
